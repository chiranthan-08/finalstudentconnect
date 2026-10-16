import { NextResponse } from 'next/server';
import { COLLEGES_DATA } from '@/data/mockData';
import { connectToDatabase } from '@/lib/mongodb';
import { CollegeModel } from '@/models/College';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase();
    const branch = searchParams.get('branch');
    const district = searchParams.get('district');

    // Attempt MongoDB lookup if connected, otherwise use pre-populated mock dataset
    const db = await connectToDatabase();
    let colleges = COLLEGES_DATA;

    if (db.isConnected) {
      try {
        const mongoColleges = await CollegeModel.find().lean();
        if (mongoColleges && mongoColleges.length > 0) {
          colleges = mongoColleges as any;
        }
      } catch (e) {
        console.warn('MongoDB query notice: using in-memory store', e);
      }
    }

    let filtered = colleges;
    if (query) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.shortName.toLowerCase().includes(query) ||
        c.location.city.toLowerCase().includes(query)
      );
    }
    if (district && district !== 'ALL') {
      filtered = filtered.filter(c => c.location.district === district);
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      data: filtered,
      dbStatus: db.status,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = await connectToDatabase();

    if (db.isConnected) {
      const created = await CollegeModel.create(body);
      return NextResponse.json({ success: true, data: created, source: 'MongoDB' });
    }

    return NextResponse.json({
      success: true,
      data: body,
      source: 'Mock Cache (Set MONGODB_URI to persist to Mongo)',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
