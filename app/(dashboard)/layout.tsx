"use client";

import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { use, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, Home, LogOut, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push("/");
  }

  if (!user) {
    return (
      <>
        <Link
          href="/pricing"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Pricing
        </Link>
        <Button asChild className="rounded-full">
          <Link href="/sign-in">Log in</Link>
        </Button>
      </>
    );
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9">
          <AvatarImage alt={user.name || ""} />
          <AvatarFallback>
            {user.email
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userPromise } = useUser();

  const user = use(userPromise);

  if (user) {
    return (
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
          <Link href="/" className="flex items-center">
            <Image
              src={`https://www.walkingwise.com/wp-content/uploads/WW_LogoDevelopment_B0628-768x358.png`}
              alt="Walking Wise logo"
              width={500}
              height={500}
              className="h-15 w-auto object-contain"
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={`https://www.walkingwise.com/wp-content/uploads/WW_LogoDevelopment_B0628-768x358.png`}
              alt="Walking Wise logo"
              width={500}
              height={500}
              className="h-20 mr-10 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex justify-center">
            <nav className="flex items-center space-x-6 py-2">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`cursor-pointer text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
                >
                  Our Education
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-1">
                  <DropdownMenuItem>
                    <Link href="/resources/handouts" className="w-full">
                      Online Course for Adults
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resources/videos" className="w-full">
                      Curriculum for Youth
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resources/guides" className="w-full">
                      Animated Video Series
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/about"
                className={`text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={`text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Right: Desktop only - Book a Demo + UserMenu */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/book-demo">Book a demo</Link>
          </Button>
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>

        {/* Hamburger menu - Mobile only */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
            >
              Our Education
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-1">
              <DropdownMenuItem>
                <Link href="/resources/handouts" className="w-full">
                  Online Course for Adults
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/videos" className="w-full">
                  Curriculum for Youth
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/guides" className="w-full">
                  Animated Video Series
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            Contact
          </Link>
          <Link
            href="/book-demo"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            Book a demo
          </Link>
          <Link
            href="/pricing"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            Pricing
          </Link>
          <Link
            href="/sign-in"
            className={`block text-2xl font-medium text-gray-700 hover:text-gray-900 ${bebasNeue.className}`}
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
