"use client";
import { UserJson } from "@/config/jsonData/Dummy";
import { LoginInterface } from "@/types/auth/interface";
import { UserInterface } from "@/types/user/interface";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: { id: string; email: string } | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const router = useRouter();
  const IsSavedStorage = localStorage.getItem("user")
  const SavedUserData = JSON.parse(IsSavedStorage as string)

  const [user, setUser] = useState<UserInterface | null>(SavedUserData);

  const authHandler = (credentials: LoginInterface) => {
    const users = UserJson();
    const foundUser = users.find(
      (item) => item.email === credentials.email && item.password === credentials.password
    );
    return foundUser || null;
  };

  const login = async (email: string, password: string) => {
    try {
      const credentials: LoginInterface = { email, password };
      const authenticatedUser = authHandler(credentials);
      console.log("authenticatedUser", authenticatedUser)
      if (authenticatedUser) {
        setUser(authenticatedUser);
        router.push(`/${authenticatedUser?.role}`)
        localStorage.setItem("user", JSON.stringify(authenticatedUser)) // Saved in local storage
      } else {
        setUser(null);
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setUser(null);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  useEffect(() => {
    if (user) {
      router.push(`/${user?.role}`)

    } else {
      router.push(`/`)

    }
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};



// 'use client'; // Ensure this is a Client Component

// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const NavigateBasedOnRole = ({ authenticatedUser }) => {
//   const router = useRouter();

//   useEffect(() => {
//     if (authenticatedUser?.role) {
//       router.push(`/${authenticatedUser.role}`);
//     }
//   }, [authenticatedUser, router]);

//   return null; // Or render a loading state if needed
// };

// export default NavigateBasedOnRole;