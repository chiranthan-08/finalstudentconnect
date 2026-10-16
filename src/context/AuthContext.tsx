'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, NotificationItem } from '@/types';
import { INITIAL_USERS, NOTIFICATIONS } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; message?: string }>;
  switchRoleDemo: (role: UserRole) => void;
  logout: () => void;
  register: (name: string, email: string, role: UserRole, college?: string) => Promise<boolean>;
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
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

  const login = async (email: string, password?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check for hardcoded credentials requested by user
    if (cleanEmail === 'admin@studentconnect.edu') {
      if (password && password !== 'Admin@SC2025!') {
        return { success: false, message: 'Invalid Admin Password! Please use "Admin@SC2025!"' };
      }
      const adminUser = INITIAL_USERS.find(u => u.email === 'admin@studentconnect.edu')!;
      setUser(adminUser);
      localStorage.setItem('sc_active_user', JSON.stringify(adminUser));
      return { success: true };
    }

    // Check existing mock users
    const foundUser = INITIAL_USERS.find(u => u.email.toLowerCase() === cleanEmail);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('sc_active_user', JSON.stringify(foundUser));
      return { success: true };
    }

    // Dynamic login for new demo emails
    const newUser: User = {
      id: 'usr_' + Date.now(),
      name: email.split('@')[0].toUpperCase(),
      email: cleanEmail,
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      college: 'VTU Affiliated Institution',
      branch: 'Computer Science',
      year: '2nd Year',
      skills: ['Python', 'Web Basics'],
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

  const register = async (name: string, email: string, role: UserRole, college?: string) => {
    const newUser: User = {
      id: 'usr_' + Date.now(),
      name,
      email: email.trim().toLowerCase(),
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      college: college || 'Karnataka Engineering College',
      branch: 'Computer Science',
      year: '1st Year',
      skills: ['Engineering Fundamentals'],
      reputationScore: 50,
      isVerified: true,
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
