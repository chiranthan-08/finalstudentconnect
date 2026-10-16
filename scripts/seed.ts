import mongoose from 'mongoose';
import { COLLEGES_DATA, INITIAL_USERS, COURSES_DATA } from '../src/data/mockData';
import { CollegeModel } from '../src/models/College';
import { UserModel } from '../src/models/User';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentconnect';

async function seed() {
  console.log('Connecting to MongoDB at:', MONGODB_URI);
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Clear existing
    console.log('Clearing old collections...');
    await CollegeModel.deleteMany({});
    await UserModel.deleteMany({});

    // Seed Colleges
    console.log(`Seeding ${COLLEGES_DATA.length} Karnataka Colleges...`);
    await CollegeModel.insertMany(COLLEGES_DATA);

    // Seed Users
    console.log(`Seeding ${INITIAL_USERS.length} Initial Users & Admins...`);
    await UserModel.insertMany(INITIAL_USERS);

    console.log('✅ Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seed();
