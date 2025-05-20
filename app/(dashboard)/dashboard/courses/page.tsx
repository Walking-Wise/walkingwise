import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser, getTeamForUser } from "@/lib/db/queries";
import CreateGroupForm from "./CreateGroupForm";

const PATH_URL = process.env.REACH360_PATH_URL;

export default async function CoursesPage() {
  const user = await getUser();
  if (!user) redirect("/sign-in");

  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");

  // Redirect to pricing if user is on free plan
  if (!teamData.planName) {
    redirect("/pricing");
  }

  const firstName = user.name?.split(" ")[0] || "";
  const lastName = user.name?.split(" ").slice(1).join(" ") || "";

  // If user doesn't have a group, show the group creation form
  if (!user.groupId) {
    return (
      <section className="flex-1 p-4 lg:p-8">
        <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
          Create Your Group
        </h1>
        <CreateGroupForm
          userId={user.id}
          email={user.email}
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
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
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
    </section>
  );
}
