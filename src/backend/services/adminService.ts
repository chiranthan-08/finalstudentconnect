import { connectToDatabase } from '@/lib/mongodb';
import { UserModel, SubscriptionModel, CourseModel, AuditLogModel } from '@/models';

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  status?: string;
}

export class AdminService {
  /**
   * Searchable, paginated user management
   */
  static async getUsers(params: PaginationParams = {}) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return { users: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 1 } };
    }
    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.min(50, Math.max(1, Number(params.limit) || 10));
    const skip = (page - 1) * limit;

    const query: Record<string, any> = {};

    if (params.search) {
      const searchRegex = new RegExp(params.search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { college: searchRegex },
        { usn: searchRegex },
      ];
    }

    if (params.role && params.role !== 'all') {
      query.role = params.role;
    }

    if (params.status && params.status !== 'all') {
      query.accountStatus = params.status;
    }

    const [users, total] = await Promise.all([
      UserModel.find(query)
        .select('-passwordHash')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      UserModel.countDocuments(query),
    ]);

    return {
      users: users.map((u: any) => ({
        id: u._id.toString(),
        name: u.name,
        email: u.email,
        role: u.role,
        college: u.college || 'VTU Affiliated College',
        branch: u.branch,
        usn: u.usn,
        reputationScore: u.reputationScore,
        accountStatus: u.accountStatus || 'active',
        subscriptionStatus: u.subscriptionStatus || 'free',
        isVerified: u.isVerified,
        createdAt: u.createdAt,
        lastLoginAt: u.lastLoginAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Update user account status (suspend / activate) + append audit log
   */
  static async updateUserStatus(
    targetUserId: string,
    newStatus: 'active' | 'suspended',
    adminInfo: { id: string; email: string; ip?: string; ua?: string }
  ) {
    await connectToDatabase();
    const user = await UserModel.findById(targetUserId);
    if (!user) return { success: false, message: 'User not found' };

    const oldStatus = user.accountStatus;
    user.accountStatus = newStatus;
    await user.save();

    // Create append-only audit log
    await AuditLogModel.create({
      adminId: adminInfo.id,
      adminEmail: adminInfo.email,
      action: newStatus === 'suspended' ? 'USER_SUSPEND' : 'USER_RESTORE',
      affectedResource: 'User',
      affectedId: targetUserId,
      outcome: 'SUCCESS',
      metadata: {
        targetEmail: user.email,
        oldStatus,
        newStatus,
      },
      ipAddress: adminInfo.ip,
      userAgent: adminInfo.ua,
    });

    return { success: true, user: { id: user._id.toString(), accountStatus: user.accountStatus } };
  }

  /**
   * Update user role + append audit log
   */
  static async updateUserRole(
    targetUserId: string,
    newRole: string,
    adminInfo: { id: string; email: string; ip?: string; ua?: string }
  ) {
    await connectToDatabase();
    const user = await UserModel.findById(targetUserId);
    if (!user) return { success: false, message: 'User not found' };

    const oldRole = user.role;
    user.role = newRole as any;
    await user.save();

    await AuditLogModel.create({
      adminId: adminInfo.id,
      adminEmail: adminInfo.email,
      action: 'ROLE_CHANGE',
      affectedResource: 'User',
      affectedId: targetUserId,
      outcome: 'SUCCESS',
      metadata: {
        targetEmail: user.email,
        oldRole,
        newRole,
      },
      ipAddress: adminInfo.ip,
      userAgent: adminInfo.ua,
    });

    return { success: true, user: { id: user._id.toString(), role: user.role } };
  }

  /**
   * Paginated subscriptions list
   */
  static async getSubscriptions(page = 1, limit = 10) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return { subscriptions: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 1 } };
    }
    const skip = (page - 1) * limit;

    const [subs, total] = await Promise.all([
      SubscriptionModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      SubscriptionModel.countDocuments(),
    ]);

    return {
      subscriptions: subs.map((s: any) => ({
        id: s._id.toString(),
        userId: s.userId,
        userEmail: s.userEmail,
        plan: s.plan,
        planName: s.planName,
        status: s.status,
        priceINR: s.priceINR,
        startDate: s.startDate,
        endDate: s.endDate,
        paymentId: s.paymentId,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Paginated audit logs
   */
  static async getAuditLogs(page = 1, limit = 15, search?: string) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return { auditLogs: [], pagination: { page: 1, limit: 15, total: 0, totalPages: 1 } };
    }
    const skip = (page - 1) * limit;

    const query: Record<string, any> = {};
    if (search) {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { adminEmail: searchRegex },
        { action: searchRegex },
        { affectedResource: searchRegex },
      ];
    }

    const [logs, total] = await Promise.all([
      AuditLogModel.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      AuditLogModel.countDocuments(query),
    ]);

    return {
      auditLogs: logs.map((l: any) => ({
        id: l._id.toString(),
        adminId: l.adminId,
        adminEmail: l.adminEmail,
        action: l.action,
        affectedResource: l.affectedResource,
        affectedId: l.affectedId,
        outcome: l.outcome,
        metadata: l.metadata,
        ipAddress: l.ipAddress,
        createdAt: l.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Paginated courses list for admin
   */
  static async getCourses(page = 1, limit = 10) {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return { courses: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 1 } };
    }
    const skip = (page - 1) * limit;

    const [courses, total] = await Promise.all([
      CourseModel.find().sort({ enrolledCount: -1 }).skip(skip).limit(limit).lean(),
      CourseModel.countDocuments(),
    ]);

    return {
      courses: courses.map((c: any) => ({
        id: c.courseId,
        title: c.title,
        instructor: c.instructor,
        category: c.category,
        priceINR: c.priceINR,
        enrolledCount: c.enrolledCount || 0,
        rating: c.rating,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}

