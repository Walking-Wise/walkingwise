'use client';

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import CreateGroupForm from "./CreateGroupForm";
import GroupMembershipCheck from "./GroupMembershipCheck";

const PATH_URL = process.env.NEXT_PUBLIC_REACH360_PATH_URL!

interface CoursesClientProps {
  initialUser: any;
  initialTeamData: any;
}

export default function CoursesClient({ initialUser, initialTeamData }: CoursesClientProps) {
  const [isInGroup, setIsInGroup] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkGroupMembership = async () => {
      try {
        if (initialUser.groupId) {
          const response = await fetch(`/api/reach360/group-members?userId=${initialUser.id}`);
          const data = await response.json();
          setIsInGroup(data.isInGroup);
        }
      } catch (error) {
        console.error("Error checking group membership:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkGroupMembership();
  }, [initialUser]);

  // Redirect to pricing if user is on free plan
  if (!initialTeamData.planName) {
    redirect("/pricing");
  }

  if (isLoading) {
    return (
      <section className="flex-1 p-4 lg:p-8">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </section>
    );
  }

  const firstName = initialUser.name?.split(" ")[0] || "";
  const lastName = initialUser.name?.split(" ").slice(1).join(" ") || "";

  // If user doesn't have a group, show the group creation form
  if (!initialUser.groupId) {
    return (
      <section className="flex-1 p-4 lg:p-8">
        <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
          Create Your Group
        </h1>
        <CreateGroupForm
          userId={initialUser.id}
          email={initialUser.email}
          firstName={firstName}
          lastName={lastName}
        />
      </section>
    );
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Complete Your Course
      </h1>
      <GroupMembershipCheck userId={initialUser.id.toString()} onMembershipChange={setIsInGroup} />
      {isInGroup && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Complete the course on Reach360
            </h2>
            <p className="text-gray-600 mb-6">
              Click the button below to access your course on Reach360 and continue your learning journey.
            </p>
            <Link
              href={PATH_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Go to Reach360 Course
            </Link>
          </div>
        </div>
      )}
    </section>
  );
} 