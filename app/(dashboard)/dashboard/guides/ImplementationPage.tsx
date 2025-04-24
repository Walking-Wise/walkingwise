"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { markOnboardingComplete } from "@/app/(login)/actions";

const guides = [
  {
    title: "Implementation Guide",
    description: "An overview of the Walking Wise program...",
    href: "/pdfs/Implementation-Guide.pdf",
  },
  {
    title: "5-Step Process",
    description: "A shortened version of the implementation process...",
    href: "/pdfs/5-Step-Process.pdf",
  },
  {
    title: "Response Protocol Toolkit",
    description: "A practical guide for creating a coordinated response...",
    href: "/pdfs/Response-Protocol-Toolkit.pdf",
  },
  {
    title: "Anonymous Assessments Toolkit",
    description: "Learn how to set up anonymous student assessments...",
    href: "/pdfs/Anonymous-Assessments-Toolkit.pdf",
  },
];

export default function ImplementationPage({
  completedOnboarding: initiallyCompleted,
}: {
  completedOnboarding: boolean;
}) {
  const [clickedGuides, setClickedGuides] = useState<Set<string>>(new Set());
  const [completed, setCompleted] = useState(initiallyCompleted);

  const handleClick = (title: string) => {
    setClickedGuides((prev) => new Set(prev).add(title));
  };

  const handleComplete = async () => {
    await markOnboardingComplete({}, new FormData());
    setCompleted(true);
  };

  const allGuidesViewed = clickedGuides.size === guides.length;

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-2">
        Implementation
      </h1>
      <p className="text-gray-700 mb-6 max-w-2xl">
        Use these tools to help build a culture of prevention and awareness
        within your school or organization. These guides walk you through
        setting up a sex trafficking awareness program step by step.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.title}
            href={guide.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(guide.title)}
          >
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-4">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {!completed ? (
        <div className="mt-8">
          <Button
            onClick={handleComplete}
            disabled={!allGuidesViewed}
            className="mt-4"
          >
            Complete Implementation
          </Button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
