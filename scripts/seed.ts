import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { COLLEGES_DATA, INITIAL_USERS, COURSES_DATA } from '../src/data/mockData';
import { SPORTS_OPPORTUNITIES } from '../src/data/sportsData';
import { CollegeModel } from '../src/models/College';
import { UserModel } from '../src/models/User';
import { CourseModel } from '../src/models/Course';
import { CourseEnrolmentModel } from '../src/models/CourseEnrolment';
import { SubscriptionModel } from '../src/models/Subscription';
import { PaymentModel } from '../src/models/Payment';
import { SportsOpportunityModel } from '../src/models/SportsOpportunity';
import { SportsReferralModel } from '../src/models/SportsReferral';
import { UserSessionModel } from '../src/models/UserSession';
import { AnalyticsEventModel } from '../src/models/AnalyticsEvent';
import { AuditLogModel } from '../src/models/AuditLog';
import { ChatbotLogModel } from '../src/models/ChatbotLog';
import { RewardModel, UserRewardModel } from '../src/models/Reward';

// Automatically load .env.local and .env
const envFiles = ['.env.local', '.env'];
for (const file of envFiles) {
  const envPath = path.resolve(process.cwd(), file);
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        let val = trimmed.substring(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentconnect';

async function seed() {
  console.log('========================================================');
  console.log('  STUDENT CONNECT KARNATAKA - MONGODB ATLAS SEED SCRIPT');
  console.log('========================================================');
  console.log('Connecting to MongoDB at:', MONGODB_URI.replace(/:\/\/.*@/, '://***:***@'));

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');

    // 1. Clear existing collections for a clean, verified bootstrap
    console.log('Clearing old collections...');
    await Promise.all([
      CollegeModel.deleteMany({}),
      UserModel.deleteMany({}),
      CourseModel.deleteMany({}),
      CourseEnrolmentModel.deleteMany({}),
      SubscriptionModel.deleteMany({}),
      PaymentModel.deleteMany({}),
      SportsOpportunityModel.deleteMany({}),
      SportsReferralModel.deleteMany({}),
      UserSessionModel.deleteMany({}),
      AnalyticsEventModel.deleteMany({}),
      AuditLogModel.deleteMany({}),
      ChatbotLogModel.deleteMany({}),
      RewardModel.deleteMany({}),
      UserRewardModel.deleteMany({}),
    ]);

    // 2. Seed Colleges
    console.log(`Seeding ${COLLEGES_DATA.length} Karnataka Colleges...`);
    await CollegeModel.insertMany(COLLEGES_DATA);

    // 3. Hash passwords and seed Users & Administrators
    console.log(`Seeding Initial Users & Verified Administrators with bcrypt password hashes...`);
    const defaultPasswordHash = await bcrypt.hash('StudentConnect#2025!', 10);
    const adminPasswordHash = await bcrypt.hash('Admin@SC2025!', 10);
    const superAdminPasswordHash = await bcrypt.hash('SuperAdmin#Karnataka2025!', 10);

    const userDocs = INITIAL_USERS.map((u) => {
      let hash = defaultPasswordHash;
      if (u.email === 'admin@studentconnect.edu') hash = adminPasswordHash;
      if (u.email === 'superadmin@studentconnect.edu') hash = superAdminPasswordHash;

      return {
        name: u.name,
        email: u.email.toLowerCase(),
        passwordHash: hash,
        role: u.role,
        avatar: u.avatar,
        college: u.college || 'VTU Affiliated College',
        branch: u.branch,
        usn: u.usn,
        year: u.year,
        skills: u.skills || ['Karnataka Engineering'],
        bio: u.bio || `${u.role} in Karnataka student network`,
        reputationScore: u.reputationScore || 60,
        isVerified: true,
        accountStatus: 'active',
        subscriptionStatus: u.role === 'admin' ? 'premium' : 'free',
        enrolledCourses: ['course-python-engineers'],
        lastLoginAt: new Date(),
      };
    });

    const insertedUsers = await UserModel.insertMany(userDocs);
    const primaryStudent = insertedUsers.find((u) => u.role === 'student') || insertedUsers[0];
    const primaryAdmin = insertedUsers.find((u) => u.role === 'admin') || insertedUsers[1];

    // 4. Seed Courses
    console.log(`Seeding ${COURSES_DATA.length} Courses...`);
    const courseDocs = COURSES_DATA.map((c) => ({
      courseId: c.id,
      title: c.title,
      description: c.description,
      instructor: c.instructor,
      category: c.category,
      level: c.level,
      priceINR: c.priceINR,
      isFreeStarter: c.isFreeStarter,
      thumbnail: c.thumbnail,
      rating: c.rating,
      enrolledCount: c.enrolledCount,
      durationHours: c.durationHours,
      modules: c.modules,
      notes: (c as any).notes || '',
    }));
    await CourseModel.insertMany(courseDocs);

    // 5. Seed Course Enrolments
    console.log('Seeding Course Enrolments & completions...');
    await CourseEnrolmentModel.create([
      {
        userId: primaryStudent._id.toString(),
        userEmail: primaryStudent.email,
        courseId: 'course-python-engineers',
        courseTitle: 'Python for Engineers & VTU Problem Solving',
        status: 'active',
        progressPercent: 40,
        completedLessons: ['py-l1', 'py-l2'],
        lastActivityAt: new Date(),
      },
      {
        userId: primaryStudent._id.toString(),
        userEmail: primaryStudent.email,
        courseId: 'course-react-fullstack',
        courseTitle: 'Full-Stack Web Engineering with React & Next.js',
        status: 'completed',
        progressPercent: 100,
        completedLessons: ['react-l1', 'react-l2', 'react-l3'],
        completedAt: new Date(),
        certificateIssued: true,
        lastActivityAt: new Date(),
      },
    ]);

    // 6. Seed Sports Opportunities
    console.log(`Seeding ${SPORTS_OPPORTUNITIES.length} Sports Opportunities...`);
    const sportsDocs = SPORTS_OPPORTUNITIES.map((s) => ({
      sportsId: s.id,
      title: s.title,
      sport: s.sport,
      level: s.level,
      category: (s.category === 'Men' || s.category === 'Women' ? s.category : 'Mixed') as 'Men' | 'Women' | 'Mixed',
      participation: (s.participationType === 'Individual' ? 'Individual' : 'Team') as 'Team' | 'Individual',
      organizer: s.organizer,
      city: s.city,
      venue: s.venue,
      registrationDeadline: new Date(s.registrationDeadline),
      eventStartDate: new Date(s.eventStartDate),
      eventEndDate: new Date(s.eventEndDate),
      isFree: s.isFree,
      registrationFeeINR: 0,
      officialRegistrationUrl: s.links?.registerUrl || 'https://studentconnect.karnataka.gov.in',
      brochureUrl: s.links?.brochureUrl,
      contactPhone: s.contact?.phone || '+91 80 2200 0000',
      contactEmail: s.contact?.email || 'sports@studentconnect.edu',
      viewsCount: 140,
      referralClicksCount: 28,
    }));
    await SportsOpportunityModel.insertMany(sportsDocs);

    // Seed sample outbound sports referral clicks
    await SportsReferralModel.create([
      {
        sportsId: SPORTS_OPPORTUNITIES[0].id,
        sportTitle: SPORTS_OPPORTUNITIES[0].title,
        userId: primaryStudent._id.toString(),
        sessionId: 'sess_init_sports_1',
        outboundUrl: SPORTS_OPPORTUNITIES[0].links.registerUrl,
        clickedAt: new Date(),
      },
      {
        sportsId: SPORTS_OPPORTUNITIES[1].id,
        sportTitle: SPORTS_OPPORTUNITIES[1].title,
        userId: primaryStudent._id.toString(),
        sessionId: 'sess_init_sports_2',
        outboundUrl: SPORTS_OPPORTUNITIES[1].links.registerUrl,
        clickedAt: new Date(),
      },
    ]);

    // 7. Seed Premium Subscriptions & Verified Payments
    console.log('Seeding Verified Subscriptions & Idempotent Payments...');
    const now = new Date();
    const subEndDate = new Date(now);
    subEndDate.setDate(now.getDate() + 30);

    const payment1 = await PaymentModel.create({
      paymentId: 'pay_bootstrap_88201',
      userId: primaryStudent._id.toString(),
      userEmail: primaryStudent.email,
      plan: 'pro_student',
      amountINR: 499,
      currency: 'INR',
      status: 'verified_success',
      provider: 'upi_gateway',
      providerTransactionId: 'upi_txn_9921448',
      webhookVerified: true,
      refundStatus: 'none',
      paidAt: new Date(),
    });

    await SubscriptionModel.create({
      userId: primaryStudent._id.toString(),
      userEmail: primaryStudent.email,
      plan: 'pro_student',
      planName: 'Karnataka Student Pro Plan',
      status: 'active',
      priceINR: 499,
      startDate: now,
      endDate: subEndDate,
      renewalDate: subEndDate,
      paymentId: payment1.paymentId,
    });

    // 8. Seed Rewards
    console.log('Seeding Rewards & Achievements...');
    const reward1 = await RewardModel.create({
      rewardId: 'rew_first_login',
      title: 'First Karnataka Scholar Login',
      description: 'Activated official student credential on Student Connect',
      points: 25,
      badgeIcon: 'Zap',
      criteria: 'first_login',
    });

    await UserRewardModel.create({
      userId: primaryStudent._id.toString(),
      userEmail: primaryStudent.email,
      rewardId: reward1.rewardId,
      rewardTitle: reward1.title,
      pointsAwarded: reward1.points,
      verifiedByBackend: true,
    });

    // 9. Seed Sessions, Page Views, and Activity
    console.log('Seeding User Activity, Sessions, and Page Views...');
    await UserSessionModel.create([
      {
        sessionId: 'sess_init_student',
        userId: primaryStudent._id.toString(),
        userEmail: primaryStudent.email,
        role: 'student',
        eventType: 'login',
      },
      {
        sessionId: 'sess_init_admin',
        userId: primaryAdmin._id.toString(),
        userEmail: primaryAdmin.email,
        role: 'admin',
        eventType: 'login',
      },
    ]);

    await AnalyticsEventModel.create([
      {
        sessionId: 'sess_init_student',
        userId: primaryStudent._id.toString(),
        userRole: 'student',
        eventType: 'page_view',
        pageUrl: '/',
        pageName: 'Home Portal',
        category: 'Navigation',
      },
      {
        sessionId: 'sess_init_student',
        userId: primaryStudent._id.toString(),
        userRole: 'student',
        eventType: 'page_view',
        pageUrl: '/colleges',
        pageName: 'Engineering Colleges',
        category: 'Colleges',
      },
      {
        sessionId: 'sess_init_student',
        userId: primaryStudent._id.toString(),
        userRole: 'student',
        eventType: 'page_view',
        pageUrl: '/courses',
        pageName: 'Courses Hub',
        category: 'Courses',
      },
      {
        sessionId: 'sess_init_student',
        userId: primaryStudent._id.toString(),
        userRole: 'student',
        eventType: 'page_view',
        pageUrl: '/sports',
        pageName: 'Sports Opportunities',
        category: 'Sports',
      },
    ]);

    // 10. Seed Chatbot Logs
    console.log('Seeding Chatbot Usage Metrics...');
    await ChatbotLogModel.create([
      {
        sessionId: 'sess_chat_demo_1',
        userId: primaryStudent._id.toString(),
        isAuthenticated: true,
        userRole: 'student',
        latencyMs: 380,
        status: 'success',
        modelUsed: 'local',
        queryCategory: 'college_events',
        hasCards: true,
      },
      {
        sessionId: 'sess_chat_demo_2',
        isAuthenticated: false,
        latencyMs: 410,
        status: 'success',
        modelUsed: 'local',
        queryCategory: 'general',
        hasCards: false,
      },
    ]);

    // 11. Seed Audit Logs
    console.log('Seeding Administrator Audit Trail...');
    await AuditLogModel.create({
      adminId: primaryAdmin._id.toString(),
      adminEmail: primaryAdmin.email,
      action: 'ADMIN_LOGIN',
      affectedResource: 'System',
      affectedId: 'SYS_BOOTSTRAP',
      outcome: 'SUCCESS',
      metadata: { note: 'Initial Platform Governance Bootstrap Completed' },
    });

    console.log('========================================================');
    console.log('✅ SEEDING AND DATABASE BOOTSTRAP COMPLETED SUCCESSFULLY!');
    console.log(`- Seeded ${insertedUsers.length} Users`);
    console.log(`- Seeded ${COLLEGES_DATA.length} Colleges`);
    console.log(`- Seeded ${COURSES_DATA.length} Courses`);
    console.log(`- Seeded ${SPORTS_OPPORTUNITIES.length} Sports Events`);
    console.log('- Seeded Subscriptions, Payments, Analytics, and Audit Logs');
    console.log('========================================================');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seed();
