import "./global.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/lib/auth";
import { getTeamForUser, getUser } from "@/lib/db/queries";
import { Team } from "@/lib/db/schema";

export const metadata: Metadata = {
  title: "Walking Wise",
  description: "Get started quickly with Next.js, Postgres, and Stripe.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const roboto = Roboto({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  let teamPromise: Promise<Team | null>;
  if (user) {
    teamPromise = getTeamForUser(user.id);
  } else {
    teamPromise = Promise.resolve(null);
  }

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${roboto.className} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-[100dvh] bg-gray-50 antialiased">
        <UserProvider
          userPromise={Promise.resolve(user)}
          teamPromise={teamPromise}
        >
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
