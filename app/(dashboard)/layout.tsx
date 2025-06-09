"use client";

import { use } from "react";
import { useUser } from "@/lib/auth";
import Header from "@/components/ui/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userPromise } = useUser();
  const user = use(userPromise);
  return <>{children}</>;
}
