// app/(dashboard)/page.tsx
import { redirect } from "next/navigation";
import Link from "next/link";
import { Rocket, Users, Video, BookOpen, MessageSquare } from "lucide-react";
import { getTeamForUser, getUser } from "@/lib/db/queries";

import styles from "./HomePage.module.css";

type Resource = {
  key: string;
  title: string;
  copy: string;
  href: string;
  icon: React.ReactNode;
  img: string;
};

export default async function HomePage() {
  const images = {
    classroom:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241218214448/Icon-Classroom-Presentations.png",
    videos:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241218213932/Icon-Animated-Videos-Girl-Crying-12-2024.png",
    implementation:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250312000503/Dash-Implementation-Guide-3-11-2025.png",
    course:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241218214940/Icon-Learning-for-Adults-1.png",
  };

  // ── Auth / data fetch ─────────────────
  const user = await getUser();
  if (!user) redirect("/sign-in");

  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");

  if (!user.companyName) redirect("/onboarding");

  const isFreeUser = !teamData?.planName;

  const resources: Resource[] = [
    {
      key: "classroom",
      title: "Classroom Presentations",
      copy: "Browse ready‑to‑teach slide decks with speaker notes and student handouts.",
      href: "/dashboard/presentations",
      icon: <Users size={16} />,
      img: images.classroom,
    },
    {
      key: "videos",
      title: "Video Library",
      copy: "Use these companion videos alongside presentations or as standalone content.",
      href: "/dashboard/videos",
      icon: <Video size={16} />,
      img: images.videos,
    },
    {
      key: "course",
      title: "Online Courses",
      copy: "Complete short, self‑paced trainings to better understand each lesson topic.",
      href: isFreeUser ? "/pricing" : "/dashboard/courses",
      icon: <BookOpen size={16} />,
      img: images.course,
    },
    {
      key: "implementation",
      title: "Implementation Guide",
      copy: "A step‑by‑step guide to help you bring the curriculum to your school or district.",
      href: isFreeUser ? "/pricing" : "/dashboard/guides",
      icon: <Rocket size={16} />,
      img: images.implementation,
    },
  ];

  // ── UI ────────────────────────────────
  return (
    <section className={styles.page}>
      {/* Hero */}
      {!user.completedOnboarding && teamData.planName && (
        <div className={styles.heroCard}>
          <h1 className={styles.heroTitle}>👋 Welcome to Walking Wise</h1>
          <p className={styles.heroText}>
            This platform is designed to help you confidently teach and prepare
            students with trauma‑informed, age‑appropriate lessons on
            trafficking prevention. New here? Start with our implementation
            guide to set up your classroom for success.
          </p>
          <Link href="/dashboard/guides" className={styles.ctaBtn}>
            View Implementation Guide
          </Link>
        </div>
      )}
      {isFreeUser && (
        <div className={styles.heroCard}>
          <h1 className={styles.heroTitle}>👋 Welcome to Walking Wise</h1>
          <p className={styles.heroText}>
            This platform is designed to help you confidently teach and prepare
            students with trauma‑informed, age‑appropriate lessons on
            trafficking prevention. When you're ready, upgrade your account to
            see everything the Walking Wise platform has to offer.
          </p>
          <Link href="/pricing" className={styles.ctaBtn}>
            Upgrade your account
          </Link>
        </div>
      )}

      {/* Resource Grid */}
      <div className={styles.resourceGrid}>
        {resources.map((r) => (
          <article key={r.key} className={styles.card}>
            <img
              src={r.img}
              alt=""
              className={styles.cardImage}
              loading="lazy"
            />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>
                {r.icon}
                {r.title}
              </h2>
              <p className={styles.cardText}>{r.copy}</p>
              <Link href={r.href} className={styles.ctaBtn}>
                {r.key === "classroom"
                  ? "Browse Presentations"
                  : r.key === "videos"
                  ? "View Videos"
                  : r.key === "course"
                  ? isFreeUser
                    ? "Upgrade to Take the Course"
                    : "Take the Course"
                  : r.key === "implementation"
                  ? isFreeUser
                    ? "Upgrade to Get the Guide"
                    : "Get the Guide"
                  : ""}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Support */}
      <div className={styles.supportCard}>
        <h2 className={styles.supportTitle}>
          <MessageSquare size={16} />
          Need Help or Want to Request a Resource?
        </h2>
        <p className={styles.supportText}>
          We’re here to support you. Let us know if you need help or have an
          idea for a lesson.
        </p>
        <Link href="/dashboard/support" className={styles.ctaBtn}>
          Contact Support
        </Link>
      </div>
    </section>
  );
}
