# 🎓 STUDENT CONNECT
> **"Explore. Learn. Connect. Grow."**  
> *Karnataka’s Centralized Engineering & Student Ecosystem Platform*

---

## 🌟 Overview
**Student Connect** is an all-in-one web platform engineered specifically for Karnataka engineering students across VTU, Autonomous, and Government universities. It brings together the functionality of a **College Predictor + LinkedIn + Coursera + Discord + Google Meet + AI Assistant** into a unified, high-performance web experience.

---

## 🔑 Authentication & Login Credentials

### 🛡️ 1. Administrator & Super Admin Credentials
> **Only Admin users can access `/admin` to manage colleges, verify KEA cutoffs, oversee escrow transactions, and broadcast notifications.**

- **Admin Email**: `admin@studentconnect.edu`
- **Admin Password**: `Admin@SC2025!`
- **Access Level**: `super_admin` (Full privileges)
- **Direct Admin Console Route**: `http://localhost:3001/admin`
- *(Tip: On the `/login` page, click the **"1-Click Auto-Fill Admin Credentials"** button for instant access!)*

### 🎓 2. Google Verification Login
- On `/login`, click **"Continue with Google Verification"** to log in through simulated Google OAuth identity verification with Google verified badges and synchronized academic profiles.

### 👥 3. Verified Student & Mentor Personas (1-Click Switcher)
- **Student Persona**: `student@rvce.edu.in` / `Student@123` (RV College of Engineering, CSE 3rd Year)
- **Mentor / Tutor Persona**: `mentor@bmsce.ac.in` / `Mentor@123` (BMS College of Engineering, ISE Final Year - Placed @ Cisco)
- **HR / Recruiter Persona**: `hr@techrecruiting.com` / `Recruiter@123` (Campus Talent Acquisition Lead)
- *(Tip: Use the role dropdown in the top navbar to switch roles on the fly without logging out!)*

---

## 🚀 Key Modules & Feature Highlights

### 1. 🏛️ College Discovery & Comparison System (`/colleges` & `/colleges/[id]`)
- **Karnataka Engineering Directory**: Preloaded with top institutions: RVCE, BMSCE, MSRIT, PES University, UVCE, JSS STU (SJCE), DSCE, NIE Mysuru, SIT Tumkur, BIT Bengaluru, etc.
- **Rich College Profiles**: Campus photos, Google Maps links, Autonomous vs VTU status, NAAC grades (A++, A+), NIRF rankings, student ratings.
- **Academic Cutoff Matrix**: Comprehensive historical round cutoffs for KCET (`GM`, `2A`, `2B`, `3A`, `3B`, `SC`, `ST`) and COMEDK UGET.
- **Placement Records**: Highest CTC (₹62 LPA), average packages, median CTC, placement percentages, and top recruiting companies (Google, Microsoft, Amazon, Cisco, Qualcomm, etc.).
- **Side-by-Side College Comparison**: Compare up to 3 institutions simultaneously.

### 2. 🔮 AI College Predictor (`/predictor`)
- Input KCET / COMEDK rank, category, branch, district, and annual budget.
- Generates **3-Tier Probability Results**:
  - 🟢 **Safe Colleges** (80% - 95% probability)
  - 🟡 **Moderate Chance Colleges** (50% - 75% probability)
  - 🟣 **Dream Colleges** (15% - 40% probability)
- Displays rank delta margin and transparent public data disclaimers.

### 3. 🤖 "Connect AI" Student Assistant (`/assistant`)
- Specialized chatbot fine-tuned on KEA KCET counselling trends, VTU academic schemes, SGPA calculations, and Bangalore tech internship roadmaps.
- Interactive quick prompt chips and structured recommendation cards.

### 4. 📚 Course Marketplace (`/courses`)
- **3 Free Starter Courses for Every Student**:
  1. *Python for Engineers & Data Science*
  2. *Full-Stack Web Development Fundamentals*
  3. *VTU Engineering Mathematics & Calculus Essentials*
- Interactive video player, PDF lab cheat sheets, concept check quizzes, and instant Certificate generation!

### 5. 👥 LinkedIn-Style Student Community (`/community`)
- Student profiles with USN, branch, year, GitHub, and portfolio links.
- Filter feed by: Project Showcase, Achievements, Academic Doubts, and Hackathons.
- Interactive like, comment, share, and skill endorsement badges.

### 6. 🤝 Peer-to-Peer Learning & Escrow Marketplace (`/mentors`)
- Senior students and alumni offer 1-on-1 tutoring sessions in engineering subjects, DSA, and coding interviews.
- **Escrow-Protected Flow**:
  1. Student books a slot & authorizes fee.
  2. Fee is safely locked in the **Student Connect Escrow Vault** (`HELD_IN_ESCROW`).
  3. Session is conducted in a virtual study room.
  4. Student confirms completion → Payout is released to tutor (`RELEASED_TO_TUTOR`).
  5. Built-in dispute mechanism for safety.

### 7. 📹 Free Virtual Study Rooms (`/study-rooms`)
- Simulated video & audio participant grid with camera/mic controls.
- **Interactive Whiteboard Canvas**: Draw formulas and system architecture with color palette & clear options.
- **Collaborative Code Pad**: Write C++ / Python / Java code live with peers.
- Real-time room chat.

### 8. 🧮 VTU Student Tools Suite (`/vtu-tools`)
- **SGPA Calculator**: Configurable for 2022 Scheme, 2021 Scheme, and 2018 Scheme.
- **CGPA Calculator**: Weighted multi-semester tracking.
- **VTU Percentage Converter**: Official formula `(CGPA - 0.75) * 10`.
- **Attendance Bunk Forecaster**: Shows exact number of classes you can bunk or must attend to maintain 75%.
- **CIE Internal Marks Calculator**: Scaled on VTU 50-mark scale.

### 9. 📁 Study Material & PYQ Hub (`/study-materials`)
- Handwritten notes, previous 5 years solved VTU question papers (PYQs), model question papers, and lab manuals filtered by University, Branch, Semester, and Subject.

### 10. 💼 Placement Hub & Internships (`/placements` & `/internships`)
- Verified paid internships with monthly stipends (₹30,000 - ₹40,000) and 1-click application status tracker.
- **AI Resume ATS Analyzer**: Checks keyword compatibility against target role and gives an ATS score out of 100.

### 11. 🏆 Student Connect Annual Hackathon 2025 (`/events`)
- Statewide 36-hour hackathon with ₹2,50,000 cash prize pool.
- Cross-college team formation board ("Looking for UI Designer", "Looking for Backend Dev").

### 12. ⚡ Advanced Student Suite (`/advanced`)
- **AI Career Roadmap Generator**: 3-month and 6-month milestone plans.
- **Skill Gap Analyzer**: Compares college curriculum with Bangalore hiring requirements.
- **Student Marketplace & Lost/Found**: Exchange scientific calculators (Casio fx-991EX), drafters, and textbooks.
- **Digital Student Portfolio**: Sharable public profile URL.

---

## 🗄️ MongoDB Database Architecture

### Models & Schemas (`src/models/`):
- `College` (Accreditations, branches, KCET cutoffs, COMEDK cutoffs, placements)
- `User` (Roles, profile, skills, verified badges)
- `Course` (Curriculum, modules, lessons, enrollments)
- `Post` (Community discussions, tags, likes)
- `MentorSession` (Escrow status, bookings, payouts)
- `StudyRoom` (Collaborative rooms)

### Database Connection (`src/lib/mongodb.ts`):
- Connects using Mongoose via `MONGODB_URI` from `.env.local`.
- Zero-config automatic fallback cache: runs out-of-the-box in development and tests, seamlessly synchronizing with MongoDB when connected.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism design system
- **Icons**: Lucide React
- **Database & ORM**: MongoDB with Mongoose
- **Authentication**: JWT & Role-Based Access Control (RBAC) + Google verification flow
- **Server**: Node.js & Next.js API Routes

---

## 💻 Running Locally

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start development server
npm run dev

# 3. Seed MongoDB (optional if running MongoDB)
npm run seed
```

The application will be accessible at **`http://localhost:3000`** (or `http://localhost:3001` if port 3000 is occupied).
