import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export type UserRole = "admin" | "teacher" | "user";

export interface AuthUser {
  name: string;
  role: UserRole;
  email?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (role: UserRole, name?: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "shs_demo_auth_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const navigate = useNavigate();

  // Load from sessionStorage safely on client mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
        if (stored) {
          setUser(JSON.parse(stored));
        }
      }
    } catch {
      // Ignore sessionStorage read errors
    }
  }, []);

  const signIn = (role: UserRole, name?: string) => {
    const defaultNames: Record<UserRole, string> = {
      admin: "School Admin",
      teacher: "Faculty Member",
      user: "Parent / Student",
    };
    const newUser: AuthUser = {
      role,
      name: name || defaultNames[role],
      email: `${role}@sacredheartschool.edu.in`,
    };
    setUser(newUser);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      }
    } catch {
      // Ignore storage errors
    }
  };

  const signOut = () => {
    setUser(null);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }
    // Navigate home as required by specification
    navigate({ to: "/" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
