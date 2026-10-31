import { connectToDatabase } from '@/lib/mongodb';
import { CourseModel, CourseEnrolmentModel, UserModel, AnalyticsEventModel } from '@/models';
import { COURSES_DATA } from '@/data/mockData';

export class CourseService {
  /**
   * Get all courses, auto-seeding default Karnataka courses if empty
   */
  static async getCourses() {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return COURSES_DATA.map((c) => ({
        id: c.id,
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
    }

    let courses = await CourseModel.find().lean();
    if (!courses || courses.length === 0) {
      // Auto seed default courses
      const docs = COURSES_DATA.map((c) => ({
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
      await CourseModel.insertMany(docs).catch((e) => console.warn('Course seed error:', e.message));
      courses = await CourseModel.find().lean();
    }

    return courses.map((c: any) => ({
      id: c.courseId,
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
      notes: c.notes || '',
    }));
  }

  /**
   * Enroll a user in a course
   */
  static async enroll(userId: string, courseId: string, userEmail?: string) {
    await connectToDatabase();
    
    // Find course
    const course = await CourseModel.findOne({ courseId });
    const courseTitle = course?.title || 'Karnataka Engineering Course';

    // Upsert enrolment record
    const enrolment = await CourseEnrolmentModel.findOneAndUpdate(
      { userId, courseId },
      {
        $setOnInsert: {
          userEmail,
          courseTitle,
          status: 'active',
          progressPercent: 0,
          completedLessons: [],
          lastActivityAt: new Date(),
        },
      },
      { upsert: true, new: true }
    );

    // Update user's enrolledCourses array
    await UserModel.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: courseId },
    }).catch(() => {});

    // Increment course enrolledCount
    if (course) {
      course.enrolledCount = (course.enrolledCount || 0) + 1;
      await course.save().catch(() => {});
    }

    // Log analytics event
    await AnalyticsEventModel.create({
      sessionId: 'session_' + userId,
      userId,
      eventType: 'course_visit',
      pageUrl: `/courses/${courseId}`,
      pageName: 'Course Enrollment',
      category: 'Courses',
      metadata: { courseId, courseTitle, action: 'enroll' },
    }).catch(() => {});

    return {
      success: true,
      enrolment: {
        courseId: enrolment.courseId,
        status: enrolment.status,
        progressPercent: enrolment.progressPercent,
      },
    };
  }

  /**
   * Update progress for a lesson
   */
  static async updateProgress(
    userId: string,
    courseId: string,
    lessonId: string,
    totalLessons: number
  ) {
    await connectToDatabase();
    const enrolment = await CourseEnrolmentModel.findOne({ userId, courseId });
    if (!enrolment) {
      return { success: false, message: 'Enrolment not found' };
    }

    if (!enrolment.completedLessons.includes(lessonId)) {
      enrolment.completedLessons.push(lessonId);
    }

    const completedCount = enrolment.completedLessons.length;
    enrolment.progressPercent = Math.min(100, Math.round((completedCount / Math.max(1, totalLessons)) * 100));
    enrolment.lastActivityAt = new Date();

    if (enrolment.progressPercent === 100) {
      enrolment.status = 'completed';
      enrolment.completedAt = new Date();
      enrolment.certificateIssued = true;
    }

    await enrolment.save();

    return {
      success: true,
      progressPercent: enrolment.progressPercent,
      completedLessons: enrolment.completedLessons,
      isCompleted: enrolment.status === 'completed',
    };
  }

  /**
   * Get user's enrolled courses list
   */
  static async getUserEnrolments(userId: string) {
    await connectToDatabase();
    const enrolments = await CourseEnrolmentModel.find({ userId }).lean();
    return enrolments.map((e: any) => ({
      courseId: e.courseId,
      courseTitle: e.courseTitle,
      status: e.status,
      progressPercent: e.progressPercent,
      completedLessons: e.completedLessons,
      lastActivityAt: e.lastActivityAt,
    }));
  }
}
