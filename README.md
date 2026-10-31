# 🎓 STUDENT CONNECT
> **"Explore. Learn. Connect. Grow."**  
> *Karnataka’s Centralized Engineering & Student Ecosystem Platform*

---

## 🌟 Overview
**Student Connect** is an all-in-one web platform engineered specifically for Karnataka engineering students across VTU, Autonomous, and Government universities. It brings together the functionality of a **College Predictor + LinkedIn + Coursera + Discord + Google Meet + AI Assistant** into a unified, high-performance web experience backed by **Node.js, Express.js, and MongoDB Atlas (Mongoose)**.

---

## 🏗️ Architecture & Backend Systems

The backend features a **dual-mode deployment architecture** designed for zero-CORS execution:
1. **Next.js App Router API Routes (`src/app/api/`)**: Handled natively by Next.js on port `3000`/`3001` with sub-millisecond execution.
2. **Standalone Node.js / Express Server (`server/`)**: Available on port `5000` (`npm run server`) with CORS and modular routing for microservice deployment.
3. **Shared Backend Service Layer (`src/backend/services/`)**: Both servers share identical, strongly-typed domain services (`AuthService`, `AnalyticsService`, `AdminService`, `CourseService`, `SportsService`, `PaymentService`) and Mongoose models.

---

## 🗄️ MongoDB Collections & Data Models (`src/models/`)

| Collection | Model | Purpose & Privacy Highlights |
| :--- | :--- | :--- |
| `users` | `UserModel` | Normalized unique email index, bcrypt hash (`passwordHash`), roles, USN, college, account status (`active`/`suspended`), subscription tier. |
| `user_sessions` | `UserSessionModel` | Logs login, logout, registration, and active student sessions for DAU, WAU, and MAU calculations. |
| `analytics_events` | `AnalyticsEventModel` | Page views, feature interactions, conversion funnels, and outbound referrals with privacy-conscious session hashes. |
| `courses` | `CourseModel` | Curriculum details, instructor profiles, modules, pricing, and enrollments. |
| `course_enrolments`| `CourseEnrolmentModel`| Real-time lesson progress, percentage completed, last activity, and completion certificates. |
| `subscriptions` | `SubscriptionModel` | Premium subscriptions, start/end dates, tiers, status (`active`, `pending`, `cancelled`, `expired`). |
| `payments` | `PaymentModel` | Verified payments, idempotency keys, UPI provider references, and financial revenue tallies. Never stores raw card data. |
| `sports_opportunities` | `SportsOpportunityModel` | Tournaments, athletic trials, college sports fests, brochures, and eligibility criteria across Karnataka. |
| `sports_referrals` | `SportsReferralModel` | Outbound registration click tracking. External registrations are counted strictly as outbound referrals, never falsely claimed as confirmed registrations. |
| `rewards` / `user_rewards` | `RewardModel` & `UserRewardModel` | Badges, points, and academic achievements calculated purely on the backend to prevent frontend manipulation. |
| `chatbot_logs` | `ChatbotLogModel` | Session IDs, model latency, error status, and metadata. Conversations are never stored in raw text to safeguard student privacy. |
| `audit_logs` | `AuditLogModel` | Append-only administrative audit trail logging acting admin ID, IP, user agent, action (`USER_SUSPEND`, `ROLE_CHANGE`, `USER_RESTORE`), and metadata. |

---

## 📊 Real-Time Admin Dashboard (20 KPI Metrics)

Located at `/admin` (protected by JWT role verification: `admin` or `super_admin`):

1. **Total Registered Users**: All-time accounts with unique email verification.
2. **New Registrations Today**: New accounts registered since 00:00 IST today.
3. **New Registrations This Week & Month**: Weekly and monthly growth cohorts.
4. **Daily Active Users (DAU)**: Distinct student sessions in the last 24 hours.
5. **Weekly Active Users (WAU)**: Distinct student sessions in the last 7 days.
6. **Monthly Active Users (MAU)**: Distinct student sessions in the last 30 days.
7. **Returning Users**: Students registered >30 days ago who were active during the reporting period.
8. **Total Page Views**: Total aggregated page impressions across features.
9. **Unique Visitors**: Distinct privacy-conscious session identifiers.
10. **Total Premium Subscribers**: All-time subscriptions across all tiers.
11. **Active Premium Subscribers**: Currently valid subscriptions with future expiry dates.
12. **Subscription Status Breakdown**: Pending, cancelled, and expired subscription counts.
13. **Verified Revenue & Payments**: Total INR revenue from confirmed transactions and verified payment count.
14. **Total Course Enrolments**: Total enrollments across engineering courses.
15. **Active Learners**: Unique students actively completing course modules.
16. **Completed Courses & Completion Rate**: Courses completed at 100% and completion percentage.
17. **Sports Outbound Referrals**: Outbound registration link clicks vs. tournament views.
18. **Chatbot AI Interactions**: Total queries, sessions, and average latency in milliseconds.
19. **Rewards Issued**: Backend-calculated badges and milestone achievements.
20. **Security Logs & System Errors**: Failed authentication attempts and server error events.

### Interactive Features:
- **Date Filter Toolbar**: `Today (24h)`, `Last 7 Days`, `Last 30 Days`, or `Custom Range` (with start and end date pickers).
- **Auto-Refresh**: Live polling every 30 seconds with manual one-click refresh.
- **Visual Trend Charts**: Daily bar charts for registrations, page views, revenue, and chatbot usage.
- **Searchable, Paginated Tables**:
  - *User Management*: Real-time account suspension (`SUSPENDED`/`ACTIVE`) and role reassignment.
  - *Subscriptions Ledger*: Verified webhook payments and plan statuses.
  - *Courses Ledger*: Enrolments and student ratings.
  - *Security Audit Trail*: Append-only admin security log with search by email or action.
  - *Database Diagnostics*: Masked connection URI, readyState, and latency ping test.

---

## 🔑 Authentication & Login Credentials

### 🛡️ 1. Administrator & Super Admin Credentials
- **Admin Email**: `admin@studentconnect.edu`
- **Admin Password**: `Admin@SC2025!`
- **Access Level**: `super_admin` (Full privileges)
- **Direct Admin Console Route**: `http://localhost:3000/admin` (or `http://localhost:3001/admin`)

### 🎓 2. Google Verification Login
- On `/login`, click **"Continue with Google Verification"** to log in through simulated Google OAuth identity verification with Google verified badges and synchronized academic profiles.

### 👥 3. Verified Student & Mentor Personas
- **Student Persona**: `student@rvce.edu.in` / `Student@123` (RV College of Engineering, CSE 3rd Year)
- **Mentor / Tutor Persona**: `mentor@bmsce.ac.in` / `Mentor@123` (BMS College of Engineering, ISE Final Year)
- **HR / Recruiter Persona**: `hr@techrecruiting.com` / `Recruiter@123` (Campus Talent Acquisition Lead)

---

## 🌐 Backend API Endpoints

### Authentication:
- `POST /api/auth/register` - Input validation, bcrypt hashing, duplicate prevention, session creation.
- `POST /api/auth/login` - Rate limited (15 req/min), credential check, JWT cookie (`sc_token`) issuance.
- `POST /api/auth/logout` - Clears authenticated session and cookie.
- `POST /api/auth/verify-email` - 6-digit OTP verification.
- `POST /api/auth/forgot-password` - Dispatches password reset token.
- `POST /api/auth/reset-password` - Single-use token password reset.
- `GET /api/auth/me` - Validates JWT and returns current authenticated user.

### Analytics:
- `POST /api/analytics/events` - Privacy-preserving page view, click, and feature event recording.
- `GET /api/admin/analytics/overview` - Returns all 20 KPI cards calculated via MongoDB aggregation.
- `GET /api/admin/analytics/trends` - Daily time-series aggregates for charts.
- `GET /api/admin/analytics/users` - User growth cohorts and DAU/WAU/MAU.
- `GET /api/admin/analytics/engagement` - Traffic, unique visitors, and sports/chatbot adoption.
- `GET /api/admin/analytics/revenue` - Verified financial revenue and subscription breakdown.
- `GET /api/admin/analytics/courses` - Enrolments, active learners, and completion rates.
- `GET /api/admin/analytics/features` - Top features breakdown by usage volume.

### Administration:
- `GET /api/admin/users` - Searchable, role/status filtered, paginated user list.
- `PUT /api/admin/users/:id/status` - Suspend or restore user account with append-only audit log.
- `PUT /api/admin/users/:id/role` - Update user RBAC role with append-only audit log.
- `GET /api/admin/subscriptions` - Paginated subscription ledger.
- `GET /api/admin/courses` - Paginated course catalog and enrollment totals.
- `GET /api/admin/audit-logs` - Searchable immutable security audit trail.
- `GET /api/admin/database-status` - Connection health, readyState, and cluster host.

### Courses & Sports:
- `GET /api/courses` - Course catalog with lessons and modules.
- `POST /api/courses/enroll` - Enroll user and increment learner count.
- `POST /api/courses/progress` - Save lesson completion and calculate percentage.
- `GET /api/sports` - Sports opportunities directory.
- `POST /api/sports/track` - Track outbound registration referral link clicks.

### Payments:
- `POST /api/payments/create-intent` - Generate idempotent payment intent.
- `POST /api/payments/webhook` - Verified payment provider webhook processing.

---

## ☁️ MongoDB Atlas Setup Instructions

1. **Create an Atlas Account**: Visit [https://cloud.mongodb.com](https://cloud.mongodb.com) and sign in.
2. **Deploy a Free Cluster**: Choose **Shared M0 (Free)**, select the **AWS Mumbai (ap-south-1)** region for lowest latency to Karnataka.
3. **Create Database User**:
   - Go to **Security > Database Access**
   - Click **Add New Database User**
   - Authentication Method: **Password**
   - Username: e.g. `studentconnect_admin`
   - Password: Click *Autogenerate Secure Password* and copy it.
   - Built-in Role: **Read and write to any database**.
4. **Configure IP Whitelist**:
   - Go to **Security > Network Access**
   - Click **Add IP Address**
   - For local development: Choose **Allow Access from Anywhere (`0.0.0.0/0`)** or add your current public IP.
5. **Copy Connection String**:
   - Go to **Database > Connect > Drivers > Node.js**
   - Copy the URI:
     ```
     mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/studentconnect?retryWrites=true&w=majority&appName=StudentConnect
     ```
6. **Set in `.env.local`**:
   ```env
   MONGODB_URI=mongodb+srv://studentconnect_admin:YOUR_PASSWORD@cluster0.abcde.mongodb.net/studentconnect?retryWrites=true&w=majority&appName=StudentConnect
   ```

---

## 💻 Running & Deploying

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Bootstrap Database & Seed
Run the database seeder to bootstrap the primary administrator, courses, sports opportunities, sample subscriptions, and audit logs:
```bash
npm run seed
```

### 4. Run Automated Backend Tests
Verify password hashing, JWTs, rate limiters, 20 KPIs, and database resilience:
```bash
npm run test:backend
```

### 5. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** (or `http://localhost:3001` if port 3000 is occupied).

### 6. (Optional) Start Standalone Express Server
```bash
npm run server
```
Runs on **`http://localhost:5000`** with `/api/health` and all mirrored backend routes.

---

## 🔒 Security Best Practices Implemented
- **Password Protection**: Passwords are encrypted with bcrypt (10 rounds); never stored in plain text.
- **Privacy Enforcement**: Chatbot conversations and payment card details are never stored in raw analytics logs.
- **Rate Limiting**: Sliding-window rate limiter prevents brute-force attacks on sensitive auth routes.
- **Zero-Crash Resilience**: Database connection failures degrade gracefully with empty fallback structures.
- **Idempotent Payments**: Payment intents use unique idempotency keys to prevent duplicate billing.
