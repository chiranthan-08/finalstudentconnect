import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentconnect';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  status: 'connected' | 'connecting' | 'disconnected' | 'error';
  lastError: string | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  status: 'disconnected',
  lastError: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<{
  isConnected: boolean;
  status: string;
  error?: string;
}> {
  if (cached.conn) {
    return { isConnected: true, status: 'connected' };
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2500, // Quick timeout for seamless zero-config fallback
    };

    cached.status = 'connecting';
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => {
        cached.status = 'connected';
        cached.lastError = null;
        return m;
      })
      .catch((err) => {
        cached.status = 'error';
        cached.lastError = err?.message || 'Failed to connect to MongoDB';
        cached.promise = null;
        console.warn('MongoDB connection note: Using fallback storage mode. (Set MONGODB_URI in .env to connect to MongoDB Atlas or local MongoDB)');
        return null as unknown as typeof mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    if (cached.conn) {
      return { isConnected: true, status: 'connected' };
    } else {
      return { isConnected: false, status: 'fallback_ready', error: cached.lastError || undefined };
    }
  } catch (e: any) {
    cached.promise = null;
    return { isConnected: false, status: 'fallback_ready', error: e?.message };
  }
}

export function getDatabaseStatus() {
  return {
    uri: MONGODB_URI.replace(/:\/\/.*@/, '://***:***@'),
    status: cached.conn ? 'Connected to MongoDB' : 'Fallback InMemory & Local Sync (Ready for MongoDB URI)',
    connected: !!cached.conn,
    error: cached.lastError,
  };
}
