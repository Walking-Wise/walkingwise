"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/lib/auth";
import { Team } from "@/lib/db/schema";

export function useTeamPlan() {
  const { teamPromise } = useContext(UserContext);
  const [planName, setPlanName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const team = await teamPromise;
        setPlanName(team?.planName || null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch team plan'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlan();
  }, [teamPromise]);

  return {
    planName,
    isLoading,
    error
  };
} 