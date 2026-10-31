import { connectToDatabase } from '@/lib/mongodb';
import { UserModel, UserSessionModel, OtpVerificationModel, AuditLogModel } from '@/models';
import { hashPassword, comparePassword } from '../utils/hash';
import { signToken } from '../utils/jwt';
import { UserRole } from '@/types';

export interface RegisterInput {
  name: string;
  email: string;
  password?: string;
  role?: UserRole;
  college?: string;
  branch?: string;
  usn?: string;
  year?: string;
  skills?: string[];
  bio?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
}

export class AuthService {
  /**
   * Register a new user in MongoDB
   */
  static async register(input: RegisterInput) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return {
        success: false,
        message: 'Database connection offline. Please check MongoDB Atlas connection configuration in .env.local.',
      };
    }
    const cleanEmail = input.email.trim().toLowerCase();

    // Prevent public registration of admin or super_admin
    const safeRole: UserRole = 
      input.role && input.role !== 'admin' && input.role !== 'super_admin'
        ? input.role
        : 'student';

    // Check if email already exists
    const existing = await UserModel.findOne({ email: cleanEmail });
    if (existing) {
      return {
        success: false,
        message: 'An account with this email address is already registered. Please log in instead.',
      };
    }

    let passwordHash: string | undefined;
    if (input.password) {
      passwordHash = await hashPassword(input.password);
    }

    const newUser = await UserModel.create({
      name: input.name.trim(),
      email: cleanEmail,
      passwordHash,
      role: safeRole,
      college: input.college || 'VTU Affiliated Engineering College',
      branch: input.branch,
      usn: input.usn,
      year: input.year,
      skills: input.skills || ['Karnataka Engineering Ecosystem'],
      bio: input.bio || `${safeRole.toUpperCase()} on Student Connect Karnataka`,
      reputationScore: safeRole === 'student' ? 50 : 80,
      isVerified: true, // Auto-verified after registration form/OTP
      accountStatus: 'active',
      subscriptionStatus: 'free',
      enrolledCourses: [],
      lastLoginAt: new Date(),
    });

    // Record registration activity event
    if (input.sessionId) {
      await UserSessionModel.create({
        sessionId: input.sessionId,
        userId: newUser._id.toString(),
        userEmail: cleanEmail,
        role: safeRole,
        eventType: 'register',
        userAgent: input.userAgent,
        ipAddress: input.ipAddress,
      }).catch((e) => console.warn('Session log error:', e.message));
    }

    const token = signToken({
      userId: newUser._id.toString(),
      email: newUser.email,
      role: newUser.role,
      name: newUser.name,
    });

    return {
      success: true,
      user: {
        id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        college: newUser.college,
        branch: newUser.branch,
        usn: newUser.usn,
        year: newUser.year,
        skills: newUser.skills,
        bio: newUser.bio,
        reputationScore: newUser.reputationScore,
        isVerified: newUser.isVerified,
        subscriptionStatus: newUser.subscriptionStatus,
      },
      token,
    };
  }

  /**
   * Authenticate a user with email and password
   */
  static async login(
    email: string,
    password?: string,
    sessionId?: string,
    meta?: { ipAddress?: string; userAgent?: string }
  ) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return {
        success: false,
        message: 'Database connection offline. Please verify MongoDB Atlas connection in .env.local.',
      };
    }
    const cleanEmail = email.trim().toLowerCase();

    const user = await UserModel.findOne({ email: cleanEmail });
    if (!user) {
      return { success: false, message: 'Invalid credentials. Please verify your email and password.' };
    }

    if (user.accountStatus === 'suspended') {
      return { success: false, message: 'Account suspended by platform governance. Contact administration.' };
    }

    // Verify password if hash exists
    if (user.passwordHash && password) {
      const match = await comparePassword(password, user.passwordHash);
      if (!match) {
        return { success: false, message: 'Invalid credentials. Password does not match.' };
      }
    } else if (user.passwordHash && !password) {
      return { success: false, message: 'Password is required to sign in.' };
    }

    // Update lastLoginAt
    user.lastLoginAt = new Date();
    await user.save();

    // Log login session
    if (sessionId) {
      await UserSessionModel.create({
        sessionId,
        userId: user._id.toString(),
        userEmail: user.email,
        role: user.role,
        eventType: 'login',
        userAgent: meta?.userAgent,
        ipAddress: meta?.ipAddress,
      }).catch((e) => console.warn('Session log error:', e.message));
    }

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
    });

    return {
      success: true,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        college: user.college,
        branch: user.branch,
        usn: user.usn,
        year: user.year,
        avatar: user.avatar,
        skills: user.skills,
        bio: user.bio,
        reputationScore: user.reputationScore,
        isVerified: user.isVerified,
        subscriptionStatus: user.subscriptionStatus,
        enrolledCourses: user.enrolledCourses || [],
      },
      token,
    };
  }

  /**
   * Retrieve current user profile by userId
   */
  static async getMe(userId: string) {
    await connectToDatabase();
    const user = await UserModel.findById(userId).select('-passwordHash');
    if (!user) return null;
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      college: user.college,
      branch: user.branch,
      usn: user.usn,
      year: user.year,
      avatar: user.avatar,
      skills: user.skills,
      bio: user.bio,
      reputationScore: user.reputationScore,
      isVerified: user.isVerified,
      accountStatus: user.accountStatus,
      subscriptionStatus: user.subscriptionStatus,
      enrolledCourses: user.enrolledCourses || [],
      lastLoginAt: user.lastLoginAt,
    };
  }
}
