import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { RoomGrid } from "@/components/sections/RoomGrid";
import { IMAGES, GAESTEHAUS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Seespitz Gästehaus — 17 Zimmer mit Seeblick am Ammersee",
  description:
    "Übernachten direkt am Ammersee: 17 Zimmer & Suiten (21–59 m²), alle mit Seeblick und Balkon. Inklusive Frühstücksbuffet. Ab €110/Nacht. Direkt buchen zum besten Preis!",
};

const amenities = [
  { icon: "📶", label: "WLAN" },
  { icon: "🌅", label: "Seeblick" },
  { icon: "🏞️", label: "Balkon/Terrasse" },
  { icon: "📺", label: "Flat-Screen TV" },
  { icon: "🔒", label: "Safe" },
  { icon: "💨", label: "Haartrockner" },
  { icon: "🅿️", label: "Tiefgarage" },
  { icon: "⚡", label: "E-Ladestationen" },
];

export default function GaestehausPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.roomView}
        imageAlt="Zimmer mit Seeblick — Seespitz Gästehaus am Ammersee"
        headline="Aufwachen am Ammersee"
        subline="17 individuell eingerichtete Zimmer und Suiten — jedes mit Balkon und Seeblick."
        primaryCta={{
          label: "Direkt buchen",
          href: GAESTEHAUS.bookingUrl,
        }}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Unser Gästehaus — 17 Zimmer mit Seeblick
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-text-light">
              Aufwachen mit Blick auf den Ammersee — in unserem Gästehaus
              erwarten Sie 17 individuell eingerichtete Zimmer und Suiten, jedes
              mit Balkon oder Terrasse und Seeblick. Vom gemütlichen
              Doppelzimmer bis zum geräumigen 59-m²-Apartment mit Küchenzeile
              finden Sie bei uns die perfekte Unterkunft für jeden Anlass.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Room Grid */}
      <RoomGrid />

      {/* Amenities */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Ausstattung in allen Zimmern
            </h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {amenities.map((amenity) => (
              <SectionReveal key={amenity.label}>
                <div className="flex flex-col items-center rounded-2xl bg-cream p-5 text-center">
                  <span className="text-2xl">{amenity.icon}</span>
                  <span className="mt-2 text-xs font-semibold text-navy">
                    {amenity.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast */}
      <section id="fruehstueck" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.breakfast}
                  alt="Frühstücksbuffet im Seespitz Gästehaus am Ammersee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Inklusive
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                Frühstück mit Panoramablick
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Starten Sie den Tag mit unserem reichhaltigen Frühstücksbuffet
                — frische Brötchen, regionale Spezialitäten, Obst, Müsli und
                vieles mehr. Mit Blick auf den Ammersee wird jeder Morgen zum
                Erlebnis.
              </p>
              <p className="mt-4 text-sm font-semibold text-gold">
                Im Zimmerpreis inklusive
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Direct Booking Advantage */}
      <section id="buchen" className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl bg-navy p-10 text-white shadow-xl sm:p-14">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Direkt buchen — bester Preis garantiert
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Buchen Sie direkt bei uns und profitieren Sie vom besten
                verfügbaren Preis — ohne Vermittlungsgebühren. Bei Fragen
                stehen wir Ihnen persönlich zur Verfügung.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={GAESTEHAUS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-light hover:shadow-lg"
                >
                  Verfügbarkeit prüfen
                </a>
                <a
                  href={`tel:${GAESTEHAUS.phone}`}
                  className="rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  {GAESTEHAUS.phone}
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">
                {GAESTEHAUS.rooms} Zimmer · {GAESTEHAUS.sizeRange} ·{" "}
                {GAESTEHAUS.priceFrom}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Cross-Selling */}
      <CTABanner
        imageSrc={IMAGES.restaurant}
        imageAlt="Restaurant Seespitz — Dinner zum Aufenthalt"
        headline="Kombinieren Sie Ihren Aufenthalt mit einem Dinner"
        text="Genießen Sie mediterrane Küche von Küchenchef Daniel Böhm direkt in unserem Restaurant — nur wenige Schritte von Ihrem Zimmer entfernt."
        primaryCta={{ label: "Restaurant entdecken", href: "/restaurant" }}
      />
    </>
  );
}
