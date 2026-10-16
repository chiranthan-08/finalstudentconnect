import { NextResponse } from 'next/server';
import { INITIAL_USERS } from '@/data/mockData';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const cleanEmail = email?.trim().toLowerCase();

    // Check admin credentials
    if (cleanEmail === 'admin@studentconnect.edu') {
      if (password !== 'Admin@SC2025!') {
        return NextResponse.json(
          { success: false, message: 'Invalid Admin Password! Please use "Admin@SC2025!"' },
          { status: 401 }
        );
      }
      const adminUser = INITIAL_USERS.find(u => u.email === 'admin@studentconnect.edu');
      return NextResponse.json({ success: true, user: adminUser, token: 'jwt_admin_demo_token' });
    }

    const found = INITIAL_USERS.find(u => u.email.toLowerCase() === cleanEmail);
    if (found) {
      return NextResponse.json({ success: true, user: found, token: 'jwt_demo_token' });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: 'usr_' + Date.now(),
        name: email.split('@')[0],
        email: cleanEmail,
        role: 'student',
        isVerified: true,
      },
      token: 'jwt_new_token',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
