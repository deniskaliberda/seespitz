"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <span
            className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Seespitz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-navy" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
              {"dropdown" in item && item.dropdown && (
                <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block whitespace-nowrap rounded-lg px-4 py-2.5 text-sm text-navy transition-colors hover:bg-cream hover:text-gold"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.opentable.com/r/restaurant-seespitz-herrsching-a-ammersee"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Tisch reservieren
          </a>
          <a
            href="https://www.booking.com/hotel/de/svg-gastehaus-garni.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all hover:bg-navy hover:text-white ${
              scrolled
                ? "border-navy text-navy"
                : "border-white/80 text-white hover:border-navy"
            }`}
          >
            Zimmer buchen
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex flex-col gap-1.5 lg:hidden"
          aria-label="Menü öffnen"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-2 rotate-45 bg-navy"
                : scrolled
                  ? "bg-navy"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                  ? "bg-navy"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "-translate-y-2 -rotate-45 bg-navy"
                : scrolled
                  ? "bg-navy"
                  : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-semibold text-navy transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://www.opentable.com/r/restaurant-seespitz-herrsching-a-ammersee"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-3 text-center text-sm font-semibold text-white"
            >
              Tisch reservieren
            </a>
            <a
              href="https://www.booking.com/hotel/de/svg-gastehaus-garni.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-navy px-8 py-3 text-center text-sm font-semibold text-navy"
            >
              Zimmer buchen
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
