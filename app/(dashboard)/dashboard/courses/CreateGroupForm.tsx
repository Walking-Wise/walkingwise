"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CreateGroupFormProps {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
}

export default function CreateGroupForm({
  userId,
  email,
  firstName,
  lastName,
}: CreateGroupFormProps) {
  const router = useRouter();
  const [groupName, setGroupName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // First create the group in Reach360
      const reachResponse = await fetch("/api/reach360/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: groupName }),
      });

      if (!reachResponse.ok) {
        throw new Error("Failed to create group in Reach360");
      }
      console.log("Group created in Reach360");
      const reachData = await reachResponse.json();

      // Then create the group in our database and associate it with the user
      const dbResponse = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: groupName,
          reachId: reachData.id,
          userId,
        }),
      });

      if (!dbResponse.ok) {
        throw new Error("Failed to create group in database");
      }
      console.log("Group created in database");

      // Enroll group in Reach360 Learning Paths
      const enrollResponse = await fetch("/api/reach360/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId: reachData.id }),
      });

      if (!enrollResponse.ok) {
        throw new Error("Failed to enroll group in Reach360 Learning Paths");
      }
      console.log("Group enrolled in Reach360 Learning Paths");

      // Invite user to newly created group on reach360
      const reachInviteResponse = await fetch("/api/reach360/invitations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupName,
          email: email,
          firstName: firstName,
          lastName: lastName,
        }),
      });

      if (!reachInviteResponse.ok) {
        throw new Error("Failed to invite user to group in Reach360");
      }
      console.log("User invited to group in Reach360");
      // Refresh the page to show the courses
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="groupName">Group Name</Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter your group name"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Group"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
