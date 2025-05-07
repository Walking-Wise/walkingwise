import { redirect } from "next/navigation";
import { getTeamForUser, getUser } from "@/lib/db/queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Video, BookOpen, MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const teamData = await getTeamForUser(user.id);

  if (!teamData) {
    throw new Error("Team not found");
  }

  return (
    <section className="space-y-6 p-4 lg:p-8 max-w-7xl mx-auto">
      {!user.completedOnboarding && (
        <Card>
          <CardHeader>
            <CardTitle>👋 Welcome to Your Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-3">
            <p>
              This platform is designed to help you confidently teach and
              prepare students with trauma-informed, age-appropriate lessons on
              trafficking prevention.
            </p>
            <p>
              New here? Start with our implementation guide to set up your
              classroom for success.
            </p>
            <Link href="/dashboard/guides">
              <Button className="mt-1">View Implementation Guide</Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Toolkit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Classroom Presentations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>
              Browse ready-to-teach slide decks with speaker notes and student
              handouts.
            </p>
            <Link href="/dashboard/presentations">
              <Button variant="outline">Browse Presentations</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Video Library
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>
              Use these companion videos alongside presentations or as
              standalone content.
            </p>
            <Link href="/dashboard/videos">
              <Button variant="outline">View Videos</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Online Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>
              Complete short, self-paced trainings to better understand each
              lesson topic.
            </p>
            <Link href="/dashboard/courses">
              <Button variant="outline">Take the Course</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Implementation Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>
              A step-by-step guide to help you bring the curriculum to your
              school or district.
            </p>
            <Link href="/dashboard/guides">
              <Button variant="outline">Get the Guide</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Need Help or Want to Request a Resource?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-2">
          <p>
            We’re here to support you. Let us know if you need help or have an
            idea for a lesson.
          </p>
          <Button variant="outline">Contact Support</Button>
        </CardContent>
      </Card>
    </section>
  );
}
