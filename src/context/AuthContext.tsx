import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  User,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth, googleProvider } from "../config/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Check for redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          toast.success("Welcome to BlackCode!");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        if (error.code !== "auth/popup-blocked") {
          toast.error("Authentication failed. Please try again.");
        }
      });

    return unsubscribe;
  }, [navigate]);

  const loginWithGoogle = useCallback(async () => {
    try {
      // First try popup
      try {
        const result = await signInWithPopup(auth, googleProvider);
        if (result.user) {
          toast.success("Welcome to BlackCode!");
          navigate("/dashboard");
        }
      } catch (popupError: any) {
        // If popup is blocked, fall back to redirect
        if (popupError.code === "auth/popup-blocked") {
          toast.loading("Redirecting to Google Sign In...");
          await signInWithRedirect(auth, googleProvider);
        } else {
          throw popupError;
        }
      }
    } catch (error: any) {
      console.error("Google Sign In Error:", error);
      toast.error(error.message || "Failed to sign in with Google");
      throw error;
    }
  }, [navigate]);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to log out");
      throw error;
    }
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      loading,
      loginWithGoogle,
      logout,
    }),
    [loading, loginWithGoogle, logout, user]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
