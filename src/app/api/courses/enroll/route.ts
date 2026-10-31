import { NextRequest, NextResponse } from 'next/server';
import { CourseService } from '@/backend/services/courseService';
import { getAuthUser } from '@/backend/middleware/authMiddleware';

export async function POST(req: NextRequest) {
  try {
    const { courseId, userId, userEmail } = await req.json();

    if (!courseId) {
      return NextResponse.json({ success: false, message: 'courseId is required' }, { status: 400 });
    }

    let resolvedUserId = userId;
    const authUser = getAuthUser(req);
    if (authUser) {
      resolvedUserId = authUser.userId;
    }

    if (!resolvedUserId) {
      resolvedUserId = 'guest_' + Date.now();
    }

    const result = await CourseService.enroll(resolvedUserId, courseId, userEmail || authUser?.email);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error enrolling in course' },
      { status: 500 }
    );
  }
}
