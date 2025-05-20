"use client";

import { ReactNode } from "react";
import { useTeamPlan } from "@/lib/hooks/useTeamPlan";

type TeamPlanProviderProps = {
  children: (props: {
    planName: string | null;
    isLoading: boolean;
    error: Error | null;
  }) => ReactNode;
};

export function TeamPlanProvider({ children }: TeamPlanProviderProps) {
  const teamPlan = useTeamPlan();
  return <>{children(teamPlan)}</>;
} 