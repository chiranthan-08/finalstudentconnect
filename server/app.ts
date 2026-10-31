import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import analyticsRoutes from './routes/analytics.routes';
import adminRoutes from './routes/admin.routes';
import coursesRoutes from './routes/courses.routes';
import sportsRoutes from './routes/sports.routes';
import { getDatabaseStatus } from '../src/lib/mongodb';

const app = express();

// Security & Parsing Middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(',')
      : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req: Request, _res: Response, next: NextFunction) => {
    console.log(`[API] ${req.method} ${req.path}`);
    next();
  });
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  const dbStatus = getDatabaseStatus();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Student Connect Express Backend',
    database: dbStatus,
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/sports', sportsRoutes);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.path}` });
});

// Global Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[Backend Error]:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

export default app;
