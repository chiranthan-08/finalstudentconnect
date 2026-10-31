import { NextResponse } from 'next/server';
import { CourseService } from '@/backend/services/courseService';

export async function GET() {
  try {
    const courses = await CourseService.getCourses();
    return NextResponse.json({ success: true, courses });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching courses' },
      { status: 500 }
    );
  }
}
