import { hashPassword, comparePassword } from '../src/backend/utils/hash';
import { signToken, verifyToken } from '../src/backend/utils/jwt';
import { checkRateLimit } from '../src/backend/middleware/rateLimiter';
import { AnalyticsService } from '../src/backend/services/analyticsService';
import { CourseService } from '../src/backend/services/courseService';

let testsPassed = 0;
let testsFailed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    testsPassed++;
  } else {
    console.error(`  ❌ [FAIL] ${testName}`);
    testsFailed++;
  }
}

async function runTests() {
  console.log('\n======================================================');
  console.log('🧪 STUDENT CONNECT - BACKEND & SECURITY TEST SUITE');
  console.log('======================================================\n');

  // Test 1: Password Hashing with BCrypt
  console.log('1. Password Hashing & Salt Verification:');
  const password = 'SecretPassword@2025';
  const hash = await hashPassword(password);
  assert(hash.startsWith('$2'), 'Hash begins with bcrypt format $2');
  assert(hash !== password, 'Plaintext password is never stored or exposed');
  const valid = await comparePassword(password, hash);
  assert(valid === true, 'Matching password validates correctly');
  const invalid = await comparePassword('WrongPassword', hash);
  assert(invalid === false, 'Invalid password is firmly rejected');

  // Test 2: JWT Token Generation & RBAC Claims
  console.log('\n2. JWT Authentication & Claims:');
  const tokenPayload = {
    userId: 'usr_test_999',
    email: 'student@studentconnect.edu',
    role: 'student' as const,
    name: 'Test Student',
  };
  const token = signToken(tokenPayload);
  assert(typeof token === 'string' && token.split('.').length === 3, 'JWT has valid 3-part format (header.payload.sig)');
  const decoded = verifyToken(token);
  assert(decoded !== null, 'Token verified successfully');
  assert(decoded?.email === 'student@studentconnect.edu', 'Decoded email matches payload');
  assert(decoded?.role === 'student', 'RBAC role is preserved in token');

  // Test 3: Sliding-Window Rate Limiter
  console.log('\n3. Sliding-Window Rate Limiter:');
  const testKey = 'test_ip_127_0_0_1';
  let allowedCount = 0;
  for (let i = 0; i < 6; i++) {
    const res = checkRateLimit(testKey, 5, 10000);
    if (res.allowed) allowedCount++;
  }
  assert(allowedCount === 5, 'Rate limiter allows exactly limit (5 requests) then throttles 6th');

  // Test 4: Offline Database Graceful Degradation
  console.log('\n4. Database Resilience & Graceful Fallback:');
  const kpisResult = await AnalyticsService.getOverviewKPIs({ period: 'last_30_days' });
  assert(kpisResult !== null, 'AnalyticsService handles connection state without throwing');
  assert(typeof kpisResult.kpis.totalRegisteredUsers === 'number', 'KPI card 1 (Total Users) returns valid integer');
  assert(typeof kpisResult.kpis.dailyActiveUsers === 'number', 'KPI card 4 (DAU) returns valid integer');
  assert(typeof kpisResult.kpis.totalRevenueINR === 'number', 'KPI card 13 (Revenue) returns valid numeric total');
  assert(typeof kpisResult.kpis.completionRatePercent === 'number', 'KPI card 16 (Completion rate) returns percentage');

  // Test 5: Course Service Fallback & Seeding
  console.log('\n5. Course Service Catalog:');
  const courses = await CourseService.getCourses();
  assert(Array.isArray(courses) && courses.length > 0, 'Course catalog returns courses array');
  assert(courses.some(c => c.isFreeStarter), 'Free starter courses available for students');

  console.log('\n======================================================');
  console.log(`Summary: ${testsPassed} passed, ${testsFailed} failed`);
  console.log('======================================================\n');

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error('Fatal test error:', e);
  process.exit(1);
});
