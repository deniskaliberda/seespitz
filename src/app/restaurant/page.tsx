import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { IMAGES, RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Restaurant Seespitz — Mediterrane Küche am Ammersee",
  description:
    "Gehobenes mediterranes Restaurant in Herrsching am Ammersee. Saisonale Küche von Chef Daniel Böhm, Terrasse mit Sonnenuntergangs-Blick. 4,7/5 auf OpenTable. Jetzt reservieren!",
};

const signatureDishes = [
  {
    name: "Hausgefertigte Pasta",
    description: "Frisch zubereitete Pasta mit saisonalen Zutaten",
    imageSrc: IMAGES.dish1,
  },
  {
    name: "Fisch vom Ammersee",
    description: "Tagesfrischer Fisch mit mediterraner Zubereitung",
    imageSrc: IMAGES.dish2,
  },
  {
    name: "Saisonale Highlights",
    description: "Wechselnde Kreationen mit regionalen Produkten",
    imageSrc: IMAGES.dish3,
  },
];

const reviews = [
  {
    text: "Das beste Restaurant am Ammersee! Die Pasta war perfekt, der Service aufmerksam und der Blick auf den Sonnenuntergang unbezahlbar.",
    author: "Michael R.",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "Wir kommen seit Jahren hierher und werden nie enttäuscht. Chef Daniel versteht es, mediterrane Aromen mit regionaler Frische zu verbinden.",
    author: "Claudia & Jörg S.",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "Die Galerie ist perfekt für unseren jährlichen Familien-Geburtstag. Exklusiv, elegant und der Service ist immer hervorragend.",
    author: "Familie Weber",
    source: "Google",
    rating: 5,
  },
];

export default function RestaurantPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.restaurantInterior}
        imageAlt="Restaurant Seespitz — Mediterranes Ambiente in Herrsching am Ammersee"
        headline="Mediterranes Flair am Ammersee"
        subline="Gehobene Küche von Küchenchef Daniel Böhm — mit dem schönsten Sonnenuntergangs-Blick am See."
        primaryCta={{
          label: "Tisch reservieren",
          href: RESTAURANT.reservationUrl,
        }}
        secondaryCta={{ label: "Speisekarte", href: "/speisekarte" }}
      />

      {/* Concept */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.terrace}
                  alt="Terrasse Restaurant Seespitz mit Blick auf den Ammersee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Unser Konzept
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
                Mediterrane Kochkunst am Ammersee
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Im Restaurant Seespitz verbinden wir mediterrane Kochkunst mit
                der einzigartigen Atmosphäre am Ammersee. Küchenchef Daniel Böhm
                kreiert saisonale Gerichte mit frischen, regionalen Zutaten —
                von hausgefertigter Pasta bis zu Fischspezialitäten direkt am
                See.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Ob Mittagessen mit Panoramablick, romantisches Dinner zum
                Sonnenuntergang oder ein Glas Wein auf der Terrasse — bei uns
                wird jeder Besuch zu einem besonderen Erlebnis.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-cream px-4 py-2">
                  <span className="text-gold">&#9733;</span>
                  <span className="text-sm font-semibold text-navy">
                    4,7/5 auf OpenTable
                  </span>
                </div>
                <div className="text-sm text-text-muted">
                  {RESTAURANT.ratings.opentable.reviews}+ Bewertungen
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Die Speisekarte
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-text-light">
              Saisonale mediterrane Küche — frisch, regional, mit Leidenschaft
              zubereitet
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureDishes.map((dish, i) => (
              <SectionReveal key={dish.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={dish.imageSrc}
                      alt={`${dish.name} — Restaurant Seespitz`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-light">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/speisekarte"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Vollständige Speisekarte
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie Room */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal delay={0.2} className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Exklusiver Privatraum
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
                Die Galerie — Ihr privater Raum
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Für besondere Anlässe bieten wir Ihnen unsere exklusive Galerie
                — ein separater Raum für bis zu 40 Personen. Perfekt für
                Geburtstage, Jubiläen, Firmendinner oder den Sektempfang vor
                Ihrer Hochzeitsfeier.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Bis zu 40 Personen",
                  "Separater, exklusiver Raum",
                  "Individuelle Menüplanung",
                  "WLAN, Beamer & Soundsystem",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-text-light">
                    <svg
                      className="h-5 w-5 shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/events#private-feiern"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Private Feier anfragen
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </SectionReveal>

            <SectionReveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.restaurantInterior}
                  alt="Galerie — Privatraum im Restaurant Seespitz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewCarousel reviews={reviews} />

      {/* Opening Hours & Reservation */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Öffnungszeiten & Reservierung
            </h2>
            <p className="mt-6 text-lg text-text-light">
              {RESTAURANT.hours}
            </p>
            <p className="mt-2 text-text-muted">
              {RESTAURANT.address.street}, {RESTAURANT.address.zip}{" "}
              {RESTAURANT.address.city}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={RESTAURANT.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Tisch reservieren
              </a>
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="rounded-full border-2 border-navy px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                {RESTAURANT.phone}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Cross-Selling */}
      <CTABanner
        imageSrc={IMAGES.gaestehaus}
        imageAlt="Seespitz Gästehaus — Übernachten nach dem Dinner"
        headline="Übernachten Sie in unserem Gästehaus"
        text="Genießen Sie Ihr Dinner in vollen Zügen — und schlafen Sie anschließend in einem unserer 17 Zimmer mit Seeblick. Kein Taxi nötig."
        primaryCta={{ label: "Zimmer ansehen", href: "/gaestehaus" }}
      />
    </>
  );
}
