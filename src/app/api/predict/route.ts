import { NextResponse } from 'next/server';
import { COLLEGES_DATA } from '@/data/mockData';

export async function POST(request: Request) {
  try {
    const { rank, category = 'gm', branch = 'ALL', maxBudget = 300000 } = await request.json();

    if (!rank || isNaN(Number(rank))) {
      return NextResponse.json({ success: false, error: 'Rank is required' }, { status: 400 });
    }

    const numericRank = Number(rank);
    const safe: any[] = [];
    const moderate: any[] = [];
    const dream: any[] = [];

    COLLEGES_DATA.forEach(college => {
      if (college.fees.kcetAnnual > maxBudget) return;

      college.branches.forEach(b => {
        if (branch !== 'ALL' && b.branchCode !== branch) return;

        const catKey = (category in b.cutoffs.kcet) ? (category as keyof typeof b.cutoffs.kcet) : 'gm';
        const cutoff = b.cutoffs.kcet[catKey] || b.cutoffs.kcet.gm;
        if (!cutoff) return;

        const rankDiff = cutoff - numericRank;

        if (numericRank <= cutoff * 0.75) {
          const prob = Math.min(95, Math.round(85 + (cutoff - numericRank) / cutoff * 15));
          safe.push({ college: college.shortName, branch: b.branchCode, cutoff, rankDiff, probability: prob });
        } else if (numericRank <= cutoff * 1.1) {
          const prob = Math.max(45, Math.min(78, Math.round(55 + (cutoff - numericRank) / (cutoff * 0.35) * 20)));
          moderate.push({ college: college.shortName, branch: b.branchCode, cutoff, rankDiff, probability: prob });
        } else if (numericRank <= cutoff * 1.4) {
          const prob = Math.max(10, Math.min(38, Math.round(20 + (cutoff * 1.4 - numericRank) / (cutoff * 0.3) * 20)));
          dream.push({ college: college.shortName, branch: b.branchCode, cutoff, rankDiff, probability: prob });
        }
      });
    });

    return NextResponse.json({
      success: true,
      predictions: {
        safeCount: safe.length,
        moderateCount: moderate.length,
        dreamCount: dream.length,
        safe,
        moderate,
        dream,
      },
      disclaimer: 'Predictions are based on historical public KEA archives and are estimates only.',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
