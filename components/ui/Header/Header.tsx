"use client";

import { useState, use, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/auth";
import styles from "./Header.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { User } from "@/lib/db/schema";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [open, setOpen] = useState(false);

  /* auth */
  const { userPromise } = useUser();
  const user = use(userPromise);

  /* simple reusable link component */
  const NavLink = ({ href, children }: any) => (
    <Link href={href} className={`${styles.navLink} ${bebasNeue.className}`}>
      {children}
    </Link>
  );

  return (
    <>
      {/* =====  Top bar  ===== */}
      <header className={styles.bar}>
        <div className={styles.barInner}>
          {/* Logo + (optionally) main nav */}
          <div className={styles.logo}>
            <Link href={user ? "/dashboard" : "/"} aria-label="Walking Wise">
              <Image
                src="https://www.walkingwise.com/wp-content/uploads/WW_LogoDevelopment_B0628-768x358.png"
                alt="Walking Wise logo"
                width={500}
                height={358}
                className={styles.logoImg}
              />
            </Link>

            {/* desktop site nav (hidden when logged‑in) */}
            {!user && (
              <nav className={styles.nav}>
                {/* Dropdown could stay in its own component;
                   keeping links flat here for brevity */}
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/pricing">Pricing</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </nav>
            )}
          </div>

          {/* right‑side actions */}
          <div className={styles.actions}>
            {!user && (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/book-demo">Book a demo</Link>
                </Button>
                <Link
                  href="/sign-in"
                  className={`block text-md font-bold text-gray-700 hover:text-gray-900 `}
                >
                  Log in
                </Link>
              </>
            )}
            <Suspense fallback={<div style={{ width: "36px" }} />}>
              <UserMenu user={user as User} />
            </Suspense>
          </div>

          {/* mobile burger when logged‑out */}
          {!user && (
            <button
              className={styles.burger}
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </header>

      {/* =====  Mobile dropdown  ===== */}
      {open && !user && (
        <div className={styles.mobileMenu}>
          <NavLink href="/about" className={styles.mobileLink}>
            About
          </NavLink>
          <NavLink href="/blog" className={styles.mobileLink}>
            Blog
          </NavLink>
          <NavLink href="/contact" className={styles.mobileLink}>
            Contact
          </NavLink>
          <NavLink href="/book-demo" className={styles.mobileLink}>
            Book a demo
          </NavLink>
          <NavLink href="/pricing" className={styles.mobileLink}>
            Pricing
          </NavLink>
          <NavLink href="/sign-in" className={styles.mobileLink}>
            Log in
          </NavLink>
        </div>
      )}
    </>
  );
}
