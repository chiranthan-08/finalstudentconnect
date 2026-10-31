import { NextResponse } from 'next/server';
import { getDatabaseStatus } from '@/lib/mongodb';

export async function GET() {
  const status = getDatabaseStatus();
  return NextResponse.json({ success: true, database: status });
}
