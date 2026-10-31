import { NextResponse } from 'next/server';
import { SportsService } from '@/backend/services/sportsService';

export async function GET() {
  try {
    const opportunities = await SportsService.getOpportunities();
    return NextResponse.json({ success: true, opportunities });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching sports opportunities' },
      { status: 500 }
    );
  }
}
