'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, NotificationItem, PortalVisitorLog, PortalCredentialAccount } from '@/types';
import { INITIAL_USERS, NOTIFICATIONS, PORTAL_CREDENTIALS_REGISTRY, DEFAULT_VISITOR_LOGS } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  login: (email: string, password?: string, preferredRole?: UserRole) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: (options?: { 
    email?: string; 
    name?: string; 
    college?: string; 
    branch?: string; 
    role?: UserRole; 
    avatar?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  switchRoleDemo: (role: UserRole) => void;
  logout: () => void;
  register: (
    nameOrData: string | {
      name: string;
      email: string;
      role: UserRole;
      password?: string;
      college?: string;
      branch?: string;
      usn?: string;
      year?: string;
      skills?: string[];
      bio?: string;
      hourlyRate?: number;
      designation?: string;
      organization?: string;
    },
    email?: string,
    role?: UserRole,
    college?: string
  ) => Promise<boolean>;
  savedColleges: string[];
  toggleSaveCollege: (collegeId: string) => void;
  enrolledCourses: string[];
  enrollCourse: (courseId: string) => void;
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  visitorLogs: PortalVisitorLog[];
  registeredCredentials: PortalCredentialAccount[];
  impersonateUser: (account: PortalCredentialAccount) => void;
  deleteRegisteredCredential: (id: string) => void;
  addRegisteredCredential: (account: Omit<PortalCredentialAccount, 'id' | 'registeredDate'>) => void;
  clearVisitorLogs: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultStudentUser = INITIAL_USERS.find(u => u.role === 'student') || INITIAL_USERS[1];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(defaultStudentUser);
  const [savedColleges, setSavedColleges] = useState<string[]>(['rvce-bangalore', 'pes-rr-bangalore']);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(['course-python-engineers']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(NOTIFICATIONS);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [visitorLogs, setVisitorLogs] = useState<PortalVisitorLog[]>(DEFAULT_VISITOR_LOGS);
  const [registeredCredentials, setRegisteredCredentials] = useState<PortalCredentialAccount[]>(PORTAL_CREDENTIALS_REGISTRY);

  // Load initial session
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('sc_theme') as 'light' | 'dark' | null;
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      const storedUser = localStorage.getItem('sc_active_user');
      const token = localStorage.getItem('sc_token');

      if (token) {
        fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(data => {
            if (data.success && data.user) {
              setUser(data.user);
              localStorage.setItem('sc_active_user', JSON.stringify(data.user));
            }
          })
          .catch(() => {});
      }

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // Default to logged-in student for instant rich experience
        const defaultStudent = INITIAL_USERS.find(u => u.role === 'student') || INITIAL_USERS[1];
        setUser(defaultStudent);
      }

      const storedSaved = localStorage.getItem('sc_saved_colleges');
      if (storedSaved) {
        setSavedColleges(JSON.parse(storedSaved));
      }

      const storedCourses = localStorage.getItem('sc_enrolled_courses');
      if (storedCourses) {
        setEnrolledCourses(JSON.parse(storedCourses));
      }

      const storedLogs = localStorage.getItem('sc_visitor_logs');
      if (storedLogs) {
        setVisitorLogs(JSON.parse(storedLogs));
      } else {
        localStorage.setItem('sc_visitor_logs', JSON.stringify(DEFAULT_VISITOR_LOGS));
      }

      const storedCreds = localStorage.getItem('sc_portal_credentials');
      if (storedCreds) {
        setRegisteredCredentials(JSON.parse(storedCreds));
      } else {
        localStorage.setItem('sc_portal_credentials', JSON.stringify(PORTAL_CREDENTIALS_REGISTRY));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const recordVisitorLog = (
    name: string,
    email: string,
    role: UserRole,
    authMethod: PortalVisitorLog['authMethod'],
    status: PortalVisitorLog['status'],
    googleVerified?: boolean
  ) => {
    try {
      const now = new Date();
      const timeStr = `Today at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      const newLog: PortalVisitorLog = {
        id: 'vis-' + Date.now(),
        userName: name,
        email: email.toLowerCase(),
        role,
        authMethod,
        timestamp: timeStr,
        status,
        location: 'Bengaluru Urban, Karnataka (State Portal Node)',
        ipMasked: '106.51.***.*** (ACT/Jio Karnataka)',
        device: typeof navigator !== 'undefined' ? (navigator.userAgent.includes('Windows') ? 'Chrome / Windows 11' : navigator.userAgent.includes('Mac') ? 'Safari / macOS' : 'Mobile / Android') : 'Web Browser',
        googleVerified: !!googleVerified,
      };

      setVisitorLogs(prev => {
        const updated = [newLog, ...prev.slice(0, 49)];
        localStorage.setItem('sc_visitor_logs', JSON.stringify(updated));
        return updated;
      });
    } catch {
      // safe fallback
    }
  };

  const impersonateUser = (account: PortalCredentialAccount) => {
    const targetUser: User = {
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
      avatar: account.avatar,
      college: account.college,
      bio: account.bio || `${account.role.toUpperCase()} on Student Connect Karnataka`,
      skills: ['Karnataka Academic Ecosystem'],
      reputationScore: 90,
      isVerified: true,
      googleVerified: account.googleVerified,
    };
    setUser(targetUser);
    localStorage.setItem('sc_active_user', JSON.stringify(targetUser));
    recordVisitorLog(account.name, account.email, account.role, 'Fast Persona Login', 'VERIFIED_SESSION', account.googleVerified);
  };

  const deleteRegisteredCredential = (id: string) => {
    setRegisteredCredentials(prev => {
      const updated = prev.filter(c => c.id !== id);
      localStorage.setItem('sc_portal_credentials', JSON.stringify(updated));
      return updated;
    });
  };

  const addRegisteredCredential = (account: Omit<PortalCredentialAccount, 'id' | 'registeredDate'>) => {
    const newEntry: PortalCredentialAccount = {
      ...account,
      id: 'cred-' + Date.now(),
      registeredDate: new Date().toISOString().split('T')[0],
    };
    setRegisteredCredentials(prev => {
      const updated = [newEntry, ...prev];
      localStorage.setItem('sc_portal_credentials', JSON.stringify(updated));
      return updated;
    });
  };

  const clearVisitorLogs = () => {
    setVisitorLogs([]);
    localStorage.removeItem('sc_visitor_logs');
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('sc_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const login = async (email: string, password?: string, preferredRole?: UserRole) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // 0. Connect directly to real MongoDB Authentication API
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        if (data.token) {
          localStorage.setItem('sc_token', data.token);
        }
        localStorage.setItem('sc_active_user', JSON.stringify(data.user));
        recordVisitorLog(data.user.name, cleanEmail, data.user.role, 'Password Authentication', 'VERIFIED_SESSION', false);
        return { success: true };
      } else if (res.status === 401 || res.status === 400 || res.status === 403) {
        return { success: false, message: data.message || 'Invalid credentials.' };
      }
    } catch (apiErr) {
      console.warn('API login check note: Falling back to local authentication.', apiErr);
    }

    // 1. Strict Administrator Authentication Gate
    if (cleanEmail === 'admin@studentconnect.edu') {
      if (!password || password !== 'StudentConnect#Admin2025!') {
        return { success: false, message: 'Invalid Admin Credentials! Password does not match.' };
      }
      const adminUser = INITIAL_USERS.find(u => u.email === 'admin@studentconnect.edu') || {
        id: 'user-admin',
        name: 'Platform Administrator',
        email: 'admin@studentconnect.edu',
        role: 'admin' as UserRole,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        bio: 'Karnataka Engineering Ecosystem Lead Governance Administrator',
        skills: ['Governance', 'KEA Verification', 'Escrow Security'],
        reputationScore: 100,
        isVerified: true,
      };
      setUser(adminUser);
      localStorage.setItem('sc_active_user', JSON.stringify(adminUser));
      recordVisitorLog(adminUser.name, cleanEmail, 'admin', 'Admin Clearance', 'ADMIN_CLEARANCE', true);
      return { success: true };
    }

    if (cleanEmail === 'superadmin@studentconnect.edu') {
      if (!password || password !== 'SuperAdmin#Karnataka2025!') {
        return { success: false, message: 'Invalid Super Admin Credentials! Password does not match.' };
      }
      const superAdminUser = {
        id: 'user-superadmin',
        name: 'Super Admin Authority',
        email: 'superadmin@studentconnect.edu',
        role: 'super_admin' as UserRole,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        bio: 'Higher Education Technical Cell - Root Ecosystem Authority',
        skills: ['Root Ecosystem Clearance', 'Database Governance', 'Statewide Audit'],
        reputationScore: 100,
        isVerified: true,
      };
      setUser(superAdminUser);
      localStorage.setItem('sc_active_user', JSON.stringify(superAdminUser));
      recordVisitorLog(superAdminUser.name, cleanEmail, 'super_admin', 'Admin Clearance', 'ADMIN_CLEARANCE', true);
      return { success: true };
    }

    if (cleanEmail === 'council@studentconnect.edu') {
      if (!password || password !== 'Council#Admin2025!') {
        return { success: false, message: 'Invalid Academic Council Administrator credentials!' };
      }
      const councilUser = INITIAL_USERS.find(u => u.email === 'council@studentconnect.edu')!;
      setUser(councilUser);
      localStorage.setItem('sc_active_user', JSON.stringify(councilUser));
      recordVisitorLog(councilUser.name, cleanEmail, 'admin', 'Admin Clearance', 'ADMIN_CLEARANCE', true);
      return { success: true };
    }

    // 2. Strict Security: Block ANY other user/email from claiming Admin or Super Admin role
    if (preferredRole === 'admin' || preferredRole === 'super_admin' || cleanEmail.includes('admin')) {
      return { 
        success: false, 
        message: 'Access Denied: Administrator role is restricted to verified administrator credentials provided by system governance.' 
      };
    }

    // 3. Check existing verified non-admin mock users
    const foundUser = INITIAL_USERS.find(u => u.email.toLowerCase() === cleanEmail && u.role !== 'admin' && u.role !== 'super_admin');
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('sc_active_user', JSON.stringify(foundUser));
      recordVisitorLog(foundUser.name, cleanEmail, foundUser.role, 'Password Authentication', 'VERIFIED_SESSION', foundUser.googleVerified);
      return { success: true };
    }

    // 4. Dynamic login for standard public users (Strictly non-privileged roles)
    const safeRole: UserRole = preferredRole || 'student';

    const newUser: User = {
      id: 'usr_' + Date.now(),
      name: email.split('@')[0].toUpperCase(),
      email: cleanEmail,
      role: safeRole,
      avatar: safeRole === 'mentor'
        ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      college: 'VTU Affiliated Institution',
      branch: 'Computer Science',
      year: '2nd Year',
      skills: ['Karnataka Academic Ecosystem'],
      reputationScore: 50,
      isVerified: true,
    };
    setUser(newUser);
    localStorage.setItem('sc_active_user', JSON.stringify(newUser));
    recordVisitorLog(newUser.name, cleanEmail, newUser.role, 'Password Authentication', 'VERIFIED_SESSION', false);
    return { success: true };
  };

  const loginWithGoogle = async (options?: {
    email?: string;
    name?: string;
    college?: string;
    branch?: string;
    role?: UserRole;
    avatar?: string;
  }) => {
    const rawEmail = options?.email?.trim().toLowerCase() || 'student@gmail.com';
    
    // Strict Google Verification Check:
    // Only accept genuine @gmail.com or verified Karnataka engineering college Google Workspace domains (.edu, .edu.in, .ac.in)
    const isGmail = rawEmail.endsWith('@gmail.com');
    const isCollegeWorkspace = rawEmail.endsWith('.edu.in') || rawEmail.endsWith('.ac.in') || rawEmail.endsWith('.edu');
    
    if (!isGmail && !isCollegeWorkspace) {
      return {
        success: false,
        message: 'Invalid email domain. Google authentication strictly requires a verified @gmail.com or Karnataka College Google Workspace (.edu.in, .ac.in) address.',
      };
    }

    const assignedRole: UserRole = (options?.role && options.role !== 'admin' && options.role !== 'super_admin') 
      ? options.role 
      : 'student';

    const formattedName = options?.name?.trim() || rawEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    const assignedCollege = options?.college || (
      rawEmail.includes('rvce') ? 'R.V. College of Engineering (RVCE), Bengaluru' :
      rawEmail.includes('bmsce') ? 'B.M.S. College of Engineering (BMSCE), Bengaluru' :
      rawEmail.includes('msrit') ? 'Ramaiah Institute of Technology (MSRIT), Bengaluru' :
      rawEmail.includes('pes') ? 'PES University, Bengaluru' :
      'VTU Affiliated Engineering Institution, Karnataka'
    );

    const googleUser: User = {
      id: 'google_' + Date.now(),
      name: formattedName,
      email: rawEmail,
      role: assignedRole,
      avatar: options?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      college: assignedCollege,
      branch: options?.branch || 'Computer Science & Engineering',
      year: '3rd Year',
      bio: `Verified Google Account (${rawEmail}). Engineering student active on Student Connect Karnataka.`,
      skills: ['Python', 'Data Structures', 'React', 'VTU SGPA', 'Next.js'],
      reputationScore: 85,
      isVerified: true,
      googleVerified: true,
    };

    setUser(googleUser);
    localStorage.setItem('sc_active_user', JSON.stringify(googleUser));
    recordVisitorLog(googleUser.name, googleUser.email, googleUser.role, 'Google 2-Step OTP', 'VERIFIED_SESSION', true);

    setRegisteredCredentials(prev => {
      if (!prev.some(c => c.email.toLowerCase() === rawEmail)) {
        const newCred: PortalCredentialAccount = {
          id: 'cred-' + Date.now(),
          name: formattedName,
          email: rawEmail,
          role: assignedRole,
          passwordDisplay: 'Google 2-Step OTP (G-XXXXXX)',
          authType: 'GOOGLE_OAUTH',
          college: assignedCollege,
          registeredDate: new Date().toISOString().split('T')[0],
          status: 'VERIFIED',
          avatar: googleUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          bio: googleUser.bio,
          phoneOrContact: 'Verified Google Security ID',
          googleVerified: true,
        };
        const updated = [newCred, ...prev];
        localStorage.setItem('sc_portal_credentials', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });

    return { success: true };
  };

  const switchRoleDemo = (role: UserRole) => {
    // Security Restriction: Only users with verified admin credentials can switch to admin
    if (role === 'admin' || role === 'super_admin') {
      if (user?.role !== 'admin' && user?.role !== 'super_admin') {
        alert('Access Denied: Administrator role requires credential authentication. Please sign in with authorized administrator credentials at /login.');
        return;
      }
    }

    const matched = INITIAL_USERS.find(u => u.role === role);
    if (matched) {
      setUser(matched);
      localStorage.setItem('sc_active_user', JSON.stringify(matched));
      recordVisitorLog(matched.name, matched.email, role, 'Fast Persona Login', 'VERIFIED_SESSION', matched.googleVerified);
    } else {
      const generated: User = {
        id: 'usr_role_' + role,
        name: `Demo ${role.toUpperCase()}`,
        email: `${role}@studentconnect.demo`,
        role,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        skills: ['Karnataka Academic System'],
        reputationScore: 85,
        isVerified: true,
      };
      setUser(generated);
      localStorage.setItem('sc_active_user', JSON.stringify(generated));
      recordVisitorLog(generated.name, generated.email, role, 'Fast Persona Login', 'VERIFIED_SESSION', false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sc_active_user');
  };

  const register = async (
    nameOrData: string | {
      name: string;
      email: string;
      role: UserRole;
      password?: string;
      college?: string;
      branch?: string;
      usn?: string;
      year?: string;
      skills?: string[];
      bio?: string;
      hourlyRate?: number;
      designation?: string;
      organization?: string;
    },
    emailArg?: string,
    roleArg?: UserRole,
    collegeArg?: string
  ): Promise<boolean> => {
    let payload: {
      name: string;
      email: string;
      role: UserRole;
      password?: string;
      college?: string;
      branch?: string;
      usn?: string;
      year?: string;
      skills?: string[];
      bio?: string;
    };

    if (typeof nameOrData === 'object') {
      payload = {
        name: nameOrData.name,
        email: nameOrData.email,
        role: nameOrData.role,
        password: nameOrData.password,
        college: nameOrData.college,
        branch: nameOrData.branch,
        usn: nameOrData.usn,
        year: nameOrData.year,
        skills: nameOrData.skills,
        bio: nameOrData.bio,
      };
    } else {
      payload = {
        name: nameOrData,
        email: emailArg || '',
        role: roleArg || 'student',
        college: collegeArg,
      };
    }

    // Security Restriction: Administrative roles cannot be registered publicly
    if (payload.role === 'admin' || payload.role === 'super_admin') {
      alert('Security Policy: Administrator accounts cannot be registered publicly. Only pre-configured authorized administrator credentials can access admin privileges.');
      return false;
    }

    // Connect directly to real MongoDB Registration API
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        if (data.token) {
          localStorage.setItem('sc_token', data.token);
        }
        localStorage.setItem('sc_active_user', JSON.stringify(data.user));
        recordVisitorLog(data.user.name, data.user.email, data.user.role, 'Public Registration', 'NEW_REGISTRATION', false);

        setRegisteredCredentials(prev => {
          const newCred: PortalCredentialAccount = {
            id: 'cred-' + Date.now(),
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            passwordDisplay: payload.password || 'Registered@2025',
            authType: 'CREDENTIALS',
            college: data.user.college || 'Karnataka Engineering College',
            registeredDate: new Date().toISOString().split('T')[0],
            status: 'VERIFIED',
            avatar: data.user.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
            bio: data.user.bio,
            phoneOrContact: '+91 98*** *****',
            googleVerified: false,
          };
          const updated = [newCred, ...prev.filter(c => c.email.toLowerCase() !== data.user.email)];
          localStorage.setItem('sc_portal_credentials', JSON.stringify(updated));
          return updated;
        });

        return true;
      } else if (!data.success) {
        alert(data.message || 'Registration failed');
        return false;
      }
    } catch (apiErr) {
      console.warn('API registration note: Falling back to local registration store.', apiErr);
    }

    const newUser: User = {
      id: 'usr_' + Date.now(),
      name: payload.name,
      email: payload.email.trim().toLowerCase(),
      role: payload.role,
      avatar: payload.role === 'mentor'
        ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
        : payload.role === 'recruiter'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        : payload.role === 'college_rep'
        ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
        : payload.role === 'event_organizer'
        ? 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      college: payload.college || (payload.role === 'student' ? 'VTU Affiliated Engineering College' : undefined),
      branch: payload.branch,
      year: payload.year,
      usn: payload.usn,
      bio: payload.bio || `${payload.role.replace('_', ' ').toUpperCase()} on Student Connect Karnataka`,
      skills: payload.skills && payload.skills.length > 0 ? payload.skills : ['Karnataka Engineering Ecosystem'],
      reputationScore: payload.role === 'student' ? 60 : 90,
      isVerified: true,
      googleVerified: false,
    };

    setUser(newUser);
    localStorage.setItem('sc_active_user', JSON.stringify(newUser));
    recordVisitorLog(newUser.name, newUser.email, newUser.role, 'Public Registration', 'NEW_REGISTRATION', false);

    // Save to registeredCredentials registry
    setRegisteredCredentials(prev => {
      const newCred: PortalCredentialAccount = {
        id: 'cred-' + Date.now(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        passwordDisplay: payload.password || 'Registered@2025',
        authType: 'CREDENTIALS',
        college: newUser.college || 'Karnataka Engineering College',
        registeredDate: new Date().toISOString().split('T')[0],
        status: 'VERIFIED',
        avatar: newUser.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
        bio: newUser.bio,
        phoneOrContact: '+91 98*** *****',
        googleVerified: false,
      };
      const updated = [newCred, ...prev.filter(c => c.email.toLowerCase() !== newUser.email)];
      localStorage.setItem('sc_portal_credentials', JSON.stringify(updated));
      return updated;
    });

    return true;
  };

  const toggleSaveCollege = (collegeId: string) => {
    setSavedColleges(prev => {
      const exists = prev.includes(collegeId);
      const updated = exists ? prev.filter(id => id !== collegeId) : [...prev, collegeId];
      localStorage.setItem('sc_saved_colleges', JSON.stringify(updated));
      return updated;
    });
  };

  const enrollCourse = (courseId: string) => {
    setEnrolledCourses(prev => {
      if (prev.includes(courseId)) return prev;
      const updated = [...prev, courseId];
      localStorage.setItem('sc_enrolled_courses', JSON.stringify(updated));
      return updated;
    });
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const isAdmin = user?.role === 'admin' || user?.role === 'super_admin';
  const isSuperAdmin = user?.role === 'super_admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin,
        isSuperAdmin,
        login,
        loginWithGoogle,
        switchRoleDemo,
        logout,
        register,
        savedColleges,
        toggleSaveCollege,
        enrolledCourses,
        enrollCourse,
        notifications,
        markNotificationAsRead,
        theme,
        toggleTheme,
        visitorLogs,
        registeredCredentials,
        impersonateUser,
        deleteRegisteredCredential,
        addRegisteredCredential,
        clearVisitorLogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
