import app from './app';
import { connectToDatabase, getDatabaseStatus } from '../src/lib/mongodb';

const PORT = process.env.PORT || 5000;

async function startServer() {
  console.log('========================================================');
  console.log('  STUDENT CONNECT KARNATAKA - NODE & EXPRESS BACKEND');
  console.log('========================================================');

  // Verify MongoDB Connection on server boot
  console.log('[Bootstrap] Initializing MongoDB connection...');
  const dbResult = await connectToDatabase();
  const dbStatus = getDatabaseStatus();

  if (dbResult.isConnected) {
    console.log(`[Bootstrap] ✅ MongoDB Atlas connected successfully! (DB: ${dbStatus.databaseName})`);
  } else {
    console.warn(`[Bootstrap] ⚠️ MongoDB Atlas status: ${dbStatus.status}. Error: ${dbResult.error || 'None'}`);
    console.warn('[Bootstrap] Note: Configure MONGODB_URI in .env.local to link your MongoDB Atlas cluster.');
  }

  app.listen(PORT, () => {
    console.log(`[Express Server] 🚀 Server running and listening on port ${PORT}`);
    console.log(`[Express Server] 📡 API Health Endpoint: http://localhost:${PORT}/api/health`);
    console.log('========================================================');
  });
}

startServer();
