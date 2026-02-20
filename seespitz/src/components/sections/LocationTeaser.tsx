"use client";

import Link from "next/link";
import { SectionReveal } from "./SectionReveal";

export function LocationTeaser() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map */}
          <SectionReveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.5!2d11.1766!3d47.9989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479df7e0e3b1c0c3%3A0x0!2zNDfCsDU5JzU2LjAiTiAxMcKwMTAnMzUuOCJF!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seespitz Herrsching — Standort auf Google Maps"
                className="h-full w-full"
              />
            </div>
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={0.2}>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              So finden Sie uns
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Direkt an Deutschlands längster Seepromenade in Herrsching am
              Ammersee — nur 40 Minuten von München entfernt.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">Mühlfeld 2</p>
                  <p className="text-text-muted">82211 Herrsching am Ammersee</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M21 14.25V6.375a1.125 1.125 0 00-1.125-1.125H3.375A1.125 1.125 0 002.25 6.375v7.875" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">15 eigene Parkplätze</p>
                  <p className="text-text-muted">Tiefgarage + E-Ladestationen</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">Täglich 11:30–23:00</p>
                  <p className="text-text-muted">Restaurant Seespitz</p>
                </div>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Kontakt & Anfahrt
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
