import React, { useState } from "react";
import { ShieldCheck, UserCheck, GraduationCap, LogIn, LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth, type UserRole } from "@/lib/auth-context";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const { user, isAuthenticated, signIn, signOut } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>("admin");

  const handleSignIn = (role: UserRole) => {
    signIn(role);
    onOpenChange(false);
  };

  const handleSignOut = () => {
    signOut();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary">
            {isAuthenticated ? "Account & Portal Access" : "Sign In to School Portal"}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {isAuthenticated
              ? "You are currently signed in. You can switch roles or sign out below."
              : "Select your role to access administrative or academic portal tools."}
          </DialogDescription>
        </DialogHeader>

        {isAuthenticated && user ? (
          <div className="space-y-4 py-2">
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Active Session
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">Role: {user.role}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary capitalize">
                  {user.role}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>
              <Button
                variant="destructive"
                className="w-full text-xs gap-1.5"
                onClick={handleSignOut}
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <div className="grid gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedRole("admin")}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  selectedRole === "admin"
                    ? "border-primary bg-primary-soft shadow-xs"
                    : "border-border hover:bg-secondary/40"
                }`}
              >
                <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">Administrator</p>
                  <p className="text-xs text-muted-foreground">
                    Access school administration dashboard and records
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("teacher")}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  selectedRole === "teacher"
                    ? "border-primary bg-primary-soft shadow-xs"
                    : "border-border hover:bg-secondary/40"
                }`}
              >
                <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-gold text-gold-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">Faculty / Teacher</p>
                  <p className="text-xs text-muted-foreground">
                    Class management, daily diary, and student grades
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("user")}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  selectedRole === "user"
                    ? "border-primary bg-primary-soft shadow-xs"
                    : "border-border hover:bg-secondary/40"
                }`}
              >
                <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">Parent / Student Portal</p>
                  <p className="text-xs text-muted-foreground">
                    Fee records, attendance, notices, and progress reports
                  </p>
                </div>
              </button>
            </div>

            <Button
              type="button"
              className="w-full gap-2 font-medium"
              onClick={() => handleSignIn(selectedRole)}
            >
              <LogIn className="h-4 w-4" />
              <span>
                Continue as{" "}
                {selectedRole === "admin"
                  ? "Admin"
                  : selectedRole === "teacher"
                    ? "Teacher"
                    : "Parent / Student"}
              </span>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
