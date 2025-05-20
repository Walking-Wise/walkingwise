"use client";

import { createContext, useContext, ReactNode } from "react";
import { Team, User } from "@/lib/db/schema";

type UserContextType = {
  userPromise: Promise<User | null>;
  teamPromise: Promise<Team | null>;
};

export const UserContext = createContext<UserContextType>({
  userPromise: Promise.resolve(null),
  teamPromise: Promise.resolve(null),
});

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
