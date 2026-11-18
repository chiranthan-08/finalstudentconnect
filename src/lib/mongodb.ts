import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

function loadEnvLocalFallback() {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const key = trimmed.substring(0, eqIdx).trim();
          let val = trimmed.substring(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (key === 'MONGODB_URI' || key === 'MONGO_URI' || !process.env[key]) {
            process.env[key] = val;
          }
        }
      });
    }
  } catch {}
}

export function getMongoUri(): string {
  loadEnvLocalFallback();
  return process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentconnect';
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
  status: 'connected' | 'connecting' | 'disconnected' | 'error';
  lastError: string | null;
  connectedAt: Date | null;
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
  connectedAt: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/**
 * Connect to MongoDB Atlas or local MongoDB using Mongoose with connection pooling
 */
export async function connectToDatabase(): Promise<{
  isConnected: boolean;
  status: string;
  error?: string;
}> {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return { isConnected: true, status: 'connected' };
  }

  const currentUri = getMongoUri();

  if (!cached.promise || cached.status === 'error' || cached.status === 'disconnected') {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10s timeout for Atlas SRV + TLS handshake
      family: 4, // Prefer IPv4 to avoid Windows/ISP IPv6 Atlas timeout issues
      maxPoolSize: 10,
    };

    cached.status = 'connecting';
    cached.promise = mongoose
      .connect(currentUri, opts)
      .then((m) => {
        cached.status = 'connected';
        cached.lastError = null;
        cached.connectedAt = new Date();
        console.log(`[MongoDB] Connected successfully to: ${getMaskedUri()}`);
        return m;
      })
      .catch((err) => {
        cached.status = 'error';
        cached.lastError = err?.message || 'Failed to connect to MongoDB';
        cached.promise = null;
        console.warn(`[MongoDB Notice] ${cached.lastError}. (Configure MONGODB_URI in .env.local to link MongoDB Atlas)`);
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
    if (cached.conn && mongoose.connection.readyState === 1) {
      return { isConnected: true, status: 'connected' };
    } else {
      return { 
        isConnected: false, 
        status: 'disconnected', 
        error: cached.lastError || 'Database connection offline' 
      };
    }
  } catch (e: any) {
    cached.promise = null;
    return { isConnected: false, status: 'error', error: e?.message };
  }
}

/**
 * Mask URI credentials for logs and diagnostic views
 */
export function getMaskedUri(): string {
  try {
    return getMongoUri().replace(/:\/\/([^:]+):([^@]+)@/, '://$1:***@');
  } catch {
    return 'mongodb://***:***';
  }
}

/**
 * Return detailed database connection status
 */
export function getDatabaseStatus() {
  const readyState = mongoose.connection.readyState;
  const states = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];

  return {
    uri: getMaskedUri(),
    status: cached.conn && readyState === 1 ? 'Connected to MongoDB Atlas' : states[readyState] || 'Offline',
    connected: !!(cached.conn && readyState === 1),
    readyState,
    error: cached.lastError,
    connectedAt: cached.connectedAt,
    databaseName: mongoose.connection.name || 'studentconnect',
    host: mongoose.connection.host || 'localhost',
  };
}
