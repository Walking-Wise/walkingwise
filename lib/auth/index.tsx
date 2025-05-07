"use client";

import { createContext, useContext, ReactNode } from "react";
import { Team, User } from "@/lib/db/schema";

type UserContextType = {
  userPromise: Promise<User | null>;
  teamPromise: Promise<Team | null>;
};

const UserContext = createContext<UserContextType | null>(null);

export function useUser(): UserContextType {
  let context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider({
  children,
  userPromise,
  teamPromise,
}: {
  children: ReactNode;
  userPromise: Promise<User | null>;
  teamPromise: Promise<Team | null>;
}) {
  return (
    <UserContext.Provider value={{ userPromise, teamPromise }}>
      {children}
    </UserContext.Provider>
  );
}
