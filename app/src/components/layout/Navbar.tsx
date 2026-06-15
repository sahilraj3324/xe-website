"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/app/src/lib/content";
import Brand from "@/app/src/components/ui/Brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;

      // Past a small threshold so it doesn't flicker near the top.
      if (goingDown && y > 100) {
        setHidden(true);
        setOpen(false); // collapse mobile menu when hiding
      } else if (!goingDown) {
        setHidden(false);
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto mt-5 flex max-w-[760px] items-center justify-between gap-6 rounded-md border border-white/40 bg-navy-900/80 px-5 py-2.5 shadow-[inset_0_0_0_0.5px_rgba(244,251,255,0.15)] backdrop-blur-md md:px-6">
        <Brand />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 text-sm text-white/85 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 opacity-70"
                    aria-hidden
                  >
                    <path
                      d="m3 4.5 3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/15 bg-navy-950/90 p-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 text-sm text-white/90">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <span className="sr-only">{site.name}</span>
    </header>
  );
}
