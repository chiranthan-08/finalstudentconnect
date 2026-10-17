'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, NotificationItem } from '@/types';
import { INITIAL_USERS, NOTIFICATIONS } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  login: (email: string, password?: string, preferredRole?: UserRole) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; message?: string }>;
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultStudentUser = INITIAL_USERS.find(u => u.role === 'student') || INITIAL_USERS[1];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(defaultStudentUser);
  const [savedColleges, setSavedColleges] = useState<string[]>(['rvce-bangalore', 'pes-rr-bangalore']);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(['course-python-engineers']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(NOTIFICATIONS);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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
    } catch {
      // safe fallback
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('sc_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const login = async (email: string, password?: string, preferredRole?: UserRole) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // 1. Strict Administrator Authentication Gate
    if (cleanEmail === 'admin@studentconnect.edu') {
      if (!password || password !== 'StudentConnect#Admin2025!') {
        return { success: false, message: 'Invalid Admin Credentials! Password does not match.' };
      }
      const adminUser = INITIAL_USERS.find(u => u.email === 'admin@studentconnect.edu') || {
        id: 'user-admin',
        name: 'Platform Administrator',
        email: 'admin@studentconnect.edu',
        role: 'super_admin' as UserRole,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        bio: 'Karnataka Engineering Ecosystem Chief Administrator',
        skills: ['Governance', 'KEA Verification', 'Escrow Security'],
        reputationScore: 100,
        isVerified: true,
      };
      setUser(adminUser);
      localStorage.setItem('sc_active_user', JSON.stringify(adminUser));
      return { success: true };
    }

    if (cleanEmail === 'council@studentconnect.edu') {
      if (!password || password !== 'Council#Admin2025!') {
        return { success: false, message: 'Invalid Academic Council Administrator credentials!' };
      }
      const councilUser = INITIAL_USERS.find(u => u.email === 'council@studentconnect.edu')!;
      setUser(councilUser);
      localStorage.setItem('sc_active_user', JSON.stringify(councilUser));
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
    return { success: true };
  };

  const loginWithGoogle = async () => {
    // Realistic Google Verification simulation
    const googleUser: User = {
      id: 'google_' + Date.now(),
      name: 'Aditi Deshpande',
      email: 'aditi.google.verified@gmail.com',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      college: 'PES University, Bengaluru',
      branch: 'Computer Science & Engineering (AIML)',
      year: '3rd Year',
      bio: 'Verified Google Student Account. Exploring ML research and hackathons.',
      skills: ['TensorFlow', 'Python', 'React', 'MongoDB'],
      reputationScore: 78,
      isVerified: true,
      googleVerified: true,
    };

    setUser(googleUser);
    localStorage.setItem('sc_active_user', JSON.stringify(googleUser));
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
