"use client";

import { SectionReveal } from "./SectionReveal";

export function IntroSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Mediterranes Flair direkt am Ammersee
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-text-light">
            Willkommen im Seespitz — Ihrem mediterranen Rückzugsort direkt am
            Ammersee. Genießen Sie gehobene Küche mit dem schönsten
            Sonnenuntergangs-Blick am See, übernachten Sie in einem unserer 17
            Zimmer mit Seeblick oder planen Sie Ihr nächstes Event in
            einzigartiger Atmosphäre.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <div className="mx-auto mt-8 h-px w-16 bg-gold" />
        </SectionReveal>
        <SectionReveal delay={0.4}>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Restaurant · Gästehaus · Tagung · Events
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
