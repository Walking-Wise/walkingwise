"use client";

import { useTeamPlan } from "@/lib/hooks/useTeamPlan";

export function TeamPlanDisplay() {
  const { planName, isLoading, error } = useTeamPlan();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Current plan: {planName || 'No plan'}</div>;
} 