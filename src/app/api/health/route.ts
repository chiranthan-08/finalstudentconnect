import { NextResponse } from 'next/server';
import { connectToDatabase, getDatabaseStatus } from '@/lib/mongodb';

export async function GET() {
  const db = await connectToDatabase();
  const statusInfo = getDatabaseStatus();

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: {
      connected: db.isConnected,
      detail: statusInfo,
    },
    version: '1.0.0',
    services: {
      collegeDirectory: 'operational',
      predictorAI: 'operational',
      escrowVault: 'operational',
      virtualStudyRooms: 'operational',
    },
  });
}
