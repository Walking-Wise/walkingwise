"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { markOnboardingComplete } from "@/app/(login)/actions";
import resourceStyles from "@/app/styles/ResourceCard.module.css";
import styles from "./Guides.module.css";

// TODO - Tie this to s3 files that can be changed by Karla Dynamically

const guides = [
  {
    title: "Implementation Guide",
    description: "An overview of the Walking Wise program...",
    imageUrl:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250312000503/Dash-Implementation-Guide-3-11-2025.png",
    href: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250311214637/Walking_Wise_Implementation_Guide-03-11-2025.pdf",
  },
  {
    title: "5-Step Process",
    description: "A shortened version of the implementation process A shortened version of the implementation process A shortened version of the implementation process...",
    imageUrl:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250211170039/Implementation-5-Step-Process2-1.png",
    href: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250216182543/Five_Step_Implementation_Process-Walking_Wise_Implementation_Guide-2-17-2025.pdf",
  },
  {
    title: "Response Protocol Toolkit",
    description: "A practical guide for creating a coordinated response...",
    imageUrl:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250211170134/Implementation-Protocol-Tools-1.png",
    href: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250216182557/Protocol_Tools-Walking_Wise_Implementation_Guide-2-16-2025.pdf",
  },
  {
    title: "Anonymous Assessments Toolkit",
    description: "Learn how to set up anonymous student assessments...",
    imageUrl:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250211163401/Implementation-Anonymous-Assessment-1.png",
    href: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250311211102/Anonymous_Assessment_Tools-Walking_Wise_Implementation_Guide-3-11-2025.pdf",
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
    <section className={styles.implementationSection}>
      <h1 className={styles.implementationTitle}>Implementation</h1>
      <p className={styles.implementationDescription}>
        Use these tools to help build a culture of prevention and awareness
        within your school or organization. These guides walk you through
        setting up a sex trafficking awareness program step by step.
      </p>

      <div className={resourceStyles.landscapeGrid}>
        {guides.map((guide) => (
          <Link
            key={guide.title}
            href={guide.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(guide.title)}
          >
            <article className={resourceStyles.landscapeCard}>
              <img
                src={guide.imageUrl}
                alt={guide.title}
                className={resourceStyles.cardImage}
              />
              <div className={resourceStyles.cardBody}>
                <h2 className={resourceStyles.cardTitle}>
                  <FileText size={16} />
                  {guide.title}
                </h2>
                <p className={resourceStyles.cardText}>
                  {guide.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {!initiallyCompleted ? (
        !completed ? (
          <div className={styles.completeImplementationWrapper}>
            <Button
              onClick={handleComplete}
              disabled={!allGuidesViewed}
              className={styles.completeImplementationButton}
            >
              Complete Implementation
            </Button>
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </section>
  );
}
