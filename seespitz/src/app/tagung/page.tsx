import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { EventInquiryForm } from "@/components/sections/EventInquiryForm";
import { IMAGES, TAGUNGSRAUM, GAESTEHAUS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tagungshotel am Ammersee — 82m² Tagungsraum mit Seeblick",
  description:
    "Seminarhotel Herrsching: 82m² Tagungsraum (bis 30 Pers.), 85\" Screen, Click Share, 17 Gästezimmer, Restaurant. Tagungspakete auf Anfrage. Jetzt planen!",
};

const techFeatures = [
  { icon: "📺", label: "85\" Multimedia-Screen" },
  { icon: "📡", label: "Click Share" },
  { icon: "📋", label: "Whiteboards" },
  { icon: "🎤", label: "Rednerpult" },
  { icon: "📶", label: "Highspeed-WLAN" },
  { icon: "🔌", label: "Ausreichend Steckdosen" },
];

const layouts = [
  { name: "Parlamentarisch", capacity: "bis 30 Pers." },
  { name: "U-Form", capacity: "bis 20 Pers." },
  { name: "Quadrat", capacity: "bis 16 Pers." },
  { name: "Stuhlkreis", capacity: "bis 30 Pers." },
  { name: "Reihenbestuhlung", capacity: "bis 30 Pers." },
];

const incentives = [
  {
    title: "SUP auf dem Ammersee",
    description: "Stand-Up-Paddling direkt vor der Tür",
    icon: "🏄",
  },
  {
    title: "Wanderung Kloster Andechs",
    description: "Panoramawanderung mit Klosterbesuch",
    icon: "🥾",
  },
  {
    title: "Hochseilgarten",
    description: "Teambuilding in den Baumwipfeln",
    icon: "🌲",
  },
  {
    title: "Geführte Radtour",
    description: "Entlang der Seepromenade",
    icon: "🚴",
  },
];

export default function TagungPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.tagung}
        imageAlt="Tagungsraum Seespitz am Ammersee — Seminare mit Seeblick"
        headline="Tagen mit Seeblick"
        subline="82 m² Tagungsraum direkt am Ammersee — produktive Meetings in einzigartiger Atmosphäre."
        primaryCta={{ label: "Tagung anfragen", href: "#anfrage" }}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Produktive Meetings in einzigartiger Atmosphäre
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-text-light">
              Unser {TAGUNGSRAUM.area} großer Tagungsraum direkt am Ammersee
              bietet Platz für bis zu {TAGUNGSRAUM.capacity} Personen — mit
              modernster Technik, flexiblen Bestuhlungsvarianten und einem
              Blick, der jede Pause zum Erlebnis macht.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Room Details */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.tagung}
                  alt="Tagungsraum Seespitz — 82m² mit Seeblick"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Unser Tagungsraum
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                {TAGUNGSRAUM.area} direkt am Wasser
              </h2>
              <p className="mt-4 text-text-light">
                Der Raum ist teilbar in {TAGUNGSRAUM.divisible} — perfekt für
                parallele Workshops oder kleinere Meetings. Direkt am See
                gelegen, mit Tageslicht und Blick auf den Ammersee.
              </p>

              {/* Key Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="font-heading text-2xl font-bold text-gold">
                    {TAGUNGSRAUM.area}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">Fläche</div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="font-heading text-2xl font-bold text-gold">
                    {TAGUNGSRAUM.capacity}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">Personen</div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <div className="font-heading text-2xl font-bold text-gold">
                    85&quot;
                  </div>
                  <div className="mt-1 text-xs text-text-muted">Screen</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Tech & Equipment */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Technik & Ausstattung
            </h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {techFeatures.map((feature) => (
              <SectionReveal key={feature.label}>
                <div className="flex flex-col items-center rounded-2xl bg-cream p-6 text-center">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="mt-3 text-sm font-semibold text-navy">
                    {feature.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seating Layouts */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Bestuhlungsvarianten
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-text-light">
              Flexible Gestaltung für jedes Meeting-Format
            </p>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {layouts.map((layout) => (
              <SectionReveal key={layout.name}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-navy">{layout.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {layout.capacity}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Tagungspakete
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Tagespauschale",
                description: "Tagungsraum, Technik, Kaffeepausen, Mittagessen",
                highlight: false,
              },
              {
                name: "Kombi-Paket",
                description:
                  "Tagungsraum + Übernachtung im Gästehaus + Dinner im Restaurant + Frühstück",
                highlight: true,
              },
              {
                name: "Halbtagespauschale",
                description:
                  "Tagungsraum, Technik, 1 Kaffeepause — perfekt für halbtägige Workshops",
                highlight: false,
              },
            ].map((pkg) => (
              <SectionReveal key={pkg.name}>
                <div
                  className={`relative rounded-2xl p-8 ${
                    pkg.highlight
                      ? "bg-navy text-white shadow-xl ring-2 ring-gold"
                      : "bg-cream"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-white">
                      Empfohlen
                    </span>
                  )}
                  <h3
                    className={`font-heading text-xl font-bold ${
                      pkg.highlight ? "text-white" : "text-navy"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      pkg.highlight ? "text-white/80" : "text-text-light"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <p
                    className={`mt-4 text-sm font-semibold ${
                      pkg.highlight ? "text-gold" : "text-gold"
                    }`}
                  >
                    Preis auf Anfrage
                  </p>
                  <a
                    href="#anfrage"
                    className={`mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-gold text-white hover:bg-gold-light"
                        : "bg-navy text-white hover:bg-navy/90"
                    }`}
                  >
                    Anfragen
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2
              id="incentives"
              className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl"
            >
              Rahmenprogramm & Incentives
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-text-light">
              Ergänzen Sie Ihre Tagung mit Teambuilding-Aktivitäten am Ammersee
            </p>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {incentives.map((item) => (
              <SectionReveal key={item.title}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-3 font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Selling */}
      <CTABanner
        imageSrc={IMAGES.gaestehaus}
        imageAlt="Seespitz Gästehaus — Zimmer für Tagungsteilnehmer"
        headline="17 Zimmer für Ihre Teilnehmer"
        text="Kombinieren Sie Ihre Tagung mit Übernachtung im Gästehaus und Dinner im Restaurant — das perfekte Komplett-Erlebnis direkt am Ammersee."
        primaryCta={{ label: "Tagung anfragen", href: "#anfrage" }}
        secondaryCta={{ label: "Zimmer ansehen", href: "/gaestehaus" }}
      />

      {/* Inquiry Form */}
      <EventInquiryForm />
    </>
  );
}
