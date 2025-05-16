"use client";

import { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Settings,
  Shield,
  Menu,
  ChevronDown,
  ChevronRight,
  Rocket,
  Home,
  Currency,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/auth";
import { Plans } from "@/lib/plans";

import styles from "./DashboardLayout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ── data ─────────────────────────── */
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const { userPromise, teamPromise } = useUser();
  const user = use(userPromise);
  const team = use(teamPromise);

  /* ── nav helpers ──────────────────── */
  const baseNav = [
    { href: "/dashboard/guides", icon: Rocket, label: "Implementation", highlight: true },
    { href: "/dashboard/presentations", icon: Users, label: "Classroom Presentations" },
    { href: "/dashboard/videos", icon: Users, label: "Video Library" },
  ];
  const baseSettings = [
    { href: "/dashboard/general", icon: Settings, label: "General" },
    { href: "/dashboard/security", icon: Shield, label: "Security" },
    { href: "/dashboard/subscription-settings", icon: Currency, label: "My Subscription" },
  ];
  if (team?.planName === Plans.Plus) {
    baseNav.push({ href: "/dashboard/courses", icon: Users, label: "Online Course" });
    baseSettings.push({ href: "/dashboard/team-settings", icon: Users, label: "Team" });
  }

  /* ── render helpers ───────────────── */
  const NavButton = ({
    item,
    activeClass,
    after,
  }: {
    item: { href: string; icon: any; label: string };
    activeClass?: boolean;
    after?: React.ReactNode;
  }) => (
    <Link href={item.href} onClick={() => setSidebarOpen(false)}>
      <span className={`${styles.navBtn} ${activeClass ? styles.active : ""}`}>
        <item.icon size={16} />
        {item.label}
        {after}
      </span>
    </Link>
  );

  const ImplementationTab = () =>
    baseNav
      .filter((n) => n.highlight)
      .map((item) => (
        <NavButton
          key={item.href}
          item={item}
          activeClass={pathname === item.href}
          after={
            !user?.completedOnboarding && (
              <span className={styles.pill}>Start here</span>
            )
          }
        />
      ));

  /* ── component ────────────────────── */
  return (
    <div className={styles.page}>
      {/* Mobile header */}
      <header className={styles.mobileHeader}>
        <span className="font-medium">Dashboard</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </header>

      {/* Shell */}
      <div className={styles.shell}>
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
          aria-label="Sidebar navigation"
        >
          <nav className={styles.nav}>
            {/* Home */}
            <NavButton
              item={{ href: "/dashboard", icon: Home, label: "Home" }}
              activeClass={pathname === "/dashboard"}
            />

            {/* Implementation step */}
            {!user?.completedOnboarding && team?.planName && (
              <>
                <h3 className={styles.sectionHeading}>Step 1</h3>
                <ImplementationTab />
              </>
            )}

            {/* Resources */}
            <h3 className={styles.sectionHeading}>Resources</h3>
            {baseNav
              .filter((n) => !n.highlight)
              .map((item) => (
                <NavButton
                  key={item.href}
                  item={item}
                  activeClass={pathname === item.href}
                />
              ))}

            {/* Settings dropdown */}
            <div>
              <button
                className={`${styles.navBtn} ${styles.dropdownToggle}`}
                onClick={() => setSettingsOpen(!isSettingsOpen)}
              >
                Settings
                {isSettingsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {isSettingsOpen && (
                <div style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                  {baseSettings.map((item) => (
                    <NavButton
                      key={item.href}
                      item={item}
                      activeClass={pathname === item.href}
                    />
                  ))}
                  {user?.completedOnboarding && team?.planName && <ImplementationTab />}
                </div>
              )}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
