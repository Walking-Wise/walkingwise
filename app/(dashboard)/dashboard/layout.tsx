"use client";

import { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Users,
  Settings,
  Shield,
  Activity,
  Menu,
  ChevronDown,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { useUser } from "@/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);

  const navItems = [
    {
      href: "/dashboard/guides",
      icon: Rocket,
      label: "Implementation",
      highlight: true,
    },
    {
      href: "/dashboard/presentations",
      icon: Users,
      label: "Classroom Presentations",
    },
    { href: "/dashboard/videos", icon: Users, label: "Video Library" },
    { href: "/dashboard/courses", icon: Users, label: "Online Course" },
  ];

  const settingsItems = [
    { href: "/dashboard/team-settings", icon: Users, label: "Team" },
    { href: "/dashboard/general", icon: Settings, label: "General" },
    { href: "/dashboard/security", icon: Shield, label: "Security" },
  ];

  function renderImplementationTab() {
    return (
      <>
        {navItems
          .filter((item) => item.highlight)
          .map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={`cursor-pointer w-full justify-between items-center ${
                  pathname === item.href
                    ? "border-blue-600 bg-blue-50 text-blue-900 font-semibold"
                    : "border-transparent"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </span>
                {!user?.completedOnboarding && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                    Start here
                  </span>
                )}
              </Button>
            </Link>
          ))}
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4">
        <div className="flex items-center">
          <span className="font-medium">Dashboard</span>
        </div>
        <Button
          className="-mr-3"
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden h-full">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-white lg:bg-gray-50 border-r border-gray-200 lg:block ${
            isSidebarOpen ? "block" : "hidden"
          } lg:relative absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="h-full overflow-y-auto p-4 space-y-4">
            {!user?.completedOnboarding && (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 px-2 mb-2 uppercase tracking-wide">
                  Step 1
                </h3>
                {renderImplementationTab()}
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold text-gray-500 px-2 mb-2 uppercase tracking-wide">
                Resources
              </h3>
              {navItems
                .filter((item) => !item.highlight)
                .map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className="cursor-pointer w-full justify-start items-center"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
            </div>

            {/* Settings dropdown */}
            <div className="mt-6">
              <Button
                variant="ghost"
                className="cursor-pointer w-full justify-between shadow-none"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <span className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </span>
                {isSettingsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
              {isSettingsOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {settingsItems.map((item) => (
                    <Link key={item.href} href={item.href} passHref>
                      <Button
                        variant={pathname === item.href ? "secondary" : "ghost"}
                        className="cursor-pointer w-full justify-start shadow-none text-sm"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  {user?.completedOnboarding && renderImplementationTab()}
                </div>
              )}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
      </div>
    </div>
  );
}
