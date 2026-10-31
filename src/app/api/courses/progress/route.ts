import { NextRequest, NextResponse } from 'next/server';
import { CourseService } from '@/backend/services/courseService';

export async function POST(req: NextRequest) {
  try {
    const { userId, courseId, lessonId, totalLessons } = await req.json();

    if (!userId || !courseId || !lessonId) {
      return NextResponse.json(
        { success: false, message: 'userId, courseId, and lessonId are required.' },
        { status: 400 }
      );
    }

    const result = await CourseService.updateProgress(
      userId,
      courseId,
      lessonId,
      Number(totalLessons) || 10
    );

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error updating lesson progress' },
      { status: 500 }
    );
  }
}
