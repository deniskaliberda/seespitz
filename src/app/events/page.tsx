import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { StatCounter } from "@/components/sections/StatCounter";
import { CTABanner } from "@/components/sections/CTABanner";
import { WhySeespitz } from "@/components/sections/WhySeespitz";
import { EventInquiryForm } from "@/components/sections/EventInquiryForm";
import { EventTimeline } from "@/components/sections/EventTimeline";
import { EventVenues } from "@/components/sections/EventVenues";
import { EventGalleryStrip } from "@/components/sections/EventGalleryStrip";
import { EventFAQ } from "@/components/sections/EventFAQ";
import { IMAGES, RESTAURANT, GAESTEHAUS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hochzeitslocation & Eventlocation am Ammersee",
  description:
    "Traumhochzeit am Ammersee: Restaurant (100 Gäste) + 17 Übernachtungszimmer + Sonnenuntergangs-Blick. Auch für Firmenfeiern und private Events. Jetzt Termin anfragen!",
};

const eventStats = [
  { value: "100", numericValue: 100, label: "Sitzplätze Restaurant" },
  { value: "40", numericValue: 40, label: "Plätze Galerie (exklusiv)" },
  { value: "17", numericValue: 17, label: "Zimmer für Ihre Gäste" },
  { value: "100", numericValue: 100, label: "Stehplätze Empfang" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.sunsetDinner}
        imageAlt="Hochzeitslocation Seespitz am Ammersee — Feiern mit Sonnenuntergang"
        headline="Ihr besonderer Anlass am Ammersee"
        subline="Hochzeiten, Firmenfeiern und private Events — mit dem schönsten Sonnenuntergang am See als Kulisse."
        primaryCta={{ label: "Event anfragen", href: "#anfrage" }}
        secondaryCta={{ label: "Räumlichkeiten entdecken", href: "#raeume" }}
        overlay="golden"
      />

      {/* Intro with emotional copy */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Alles aus einer Hand
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Der Ort, an dem besondere Momente entstehen
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
              Ob Traumhochzeit, elegante Firmenfeier oder runder Geburtstag — im
              Seespitz feiern Sie direkt am Ammersee mit allem, was dazugehört:
              mediterrane Küche, exklusive Räumlichkeiten, 17 Zimmer für Ihre
              Gäste und eine Kulisse, die jeden Moment unvergesslich macht.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-light">
              <strong className="text-navy">
                Kein einziger Wettbewerber am Ammersee bietet dieses
                Komplettpaket.
              </strong>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Capacity Stats */}
      <StatCounter stats={eventStats} />

      {/* ═══ HOCHZEITEN ═══ */}
      <section id="hochzeiten" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <SectionReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Hochzeiten
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                Ihre Traumhochzeit am Ammersee
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
                Von der Trauung bis zum Brunch am nächsten Morgen — alles an
                einem Ort, direkt am See.
              </p>
            </div>
          </SectionReveal>

          {/* Wedding Content: Image left, text right */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/3]">
                <Image
                  src={IMAGES.weddingCouple}
                  alt="Hochzeitspaar am Ammersee — Seespitz Herrsching"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h3 className="font-heading text-2xl font-bold text-navy">
                Das Komplett-Erlebnis für Ihren schönsten Tag
              </h3>
              <p className="mt-4 text-text-light leading-relaxed">
                Stellen Sie sich vor: Sektempfang auf der Terrasse mit Blick auf
                den glitzernden Ammersee. Während die Sonne den Himmel in Gold
                und Rosa taucht, genießen Ihre Gäste ein mehrgängiges
                mediterranes Menü, individuell von Küchenchef Daniel Böhm für
                Sie kreiert. Am Abend wird getanzt, gelacht, gefeiert — und
                anschließend schlafen alle in unseren Zimmern mit Seeblick. Am
                nächsten Morgen: gemeinsames Frühstücksbuffet mit Panoramablick.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Feier für bis zu 100 Gäste im Restaurant",
                  "Sektempfang auf der Seeterrasse",
                  "Exklusive Galerie für intime Runden (bis 40 Pers.)",
                  "17 Zimmer & Suiten für Übernachtungsgäste",
                  "Brautpaarsuite mit Seeblick (42–59 m²)",
                  "Individuelles Menü von Küchenchef Daniel Böhm",
                  "Frühstücksbuffet am nächsten Morgen",
                  "Eigene Tiefgarage & E-Ladestationen",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-light"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
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
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#anfrage"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Hochzeit anfragen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Wedding Timeline */}
      <EventTimeline />

      {/* Venues / Räumlichkeiten */}
      <EventVenues />

      {/* Gallery Strip */}
      <EventGalleryStrip />

      {/* ═══ FIRMENFEIERN ═══ */}
      <section id="firmenfeiern" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal delay={0.2} className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Firmenfeiern & Weihnachtsfeiern
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
                Events, die Ihr Team zusammenschweißen
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Von der Sommerfeier auf der Terrasse bis zur eleganten
                Weihnachtsfeier im Restaurant — das Seespitz bietet den
                perfekten Rahmen, damit Ihr Team einen unvergesslichen Abend
                erlebt. Kombinieren Sie Ihr Event mit einem Tagungsblock oder
                Teambuilding-Aktivitäten am Ammersee.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Kapazität", value: "Bis 100 Pers." },
                  { label: "Technik", value: "Beamer & Sound" },
                  { label: "Catering", value: "Individuell planbar" },
                  { label: "Übernachtung", value: "17 Zimmer verfügbar" },
                  { label: "Kombi möglich", value: "Tagung + Feier" },
                  { label: "Parken", value: "Tiefgarage + E-Lader" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-cream p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#anfrage"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Firmenfeier anfragen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </SectionReveal>

            <SectionReveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.corporateParty}
                  alt="Firmenfeier und Weihnachtsfeier im Seespitz am Ammersee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══ PRIVATE FEIERN ═══ */}
      <section id="private-feiern" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.weddingTable}
                  alt="Gedeckte Festtafel für private Feier im Seespitz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Private Feiern
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
                Geburtstage, Jubiläen & Familienfeiern
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Ob runder Geburtstag, goldene Hochzeit, Taufe oder
                Familien-Reunion — feiern Sie Ihren besonderen Anlass mit den
                Menschen, die Ihnen am wichtigsten sind. In unserer exklusiven
                Galerie (bis 40 Personen) oder im gesamten Restaurant.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Küchenchef Daniel Böhm stellt Ihnen ein individuelles Menü
                zusammen — ob mediterranes Buffet, mehrgängiges Dinner oder
                Fingerfood für den Stehempfang. Dazu die unvergleichliche
                Kulisse des Ammersees.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <span className="text-2xl">🎂</span>
                  <div>
                    <p className="font-semibold text-navy">Geburtstage</p>
                    <p className="text-sm text-text-muted">
                      Runde Geburtstage, Überraschungspartys, Meilensteine
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <span className="text-2xl">💍</span>
                  <div>
                    <p className="font-semibold text-navy">Jubiläen</p>
                    <p className="text-sm text-text-muted">
                      Silberne & goldene Hochzeiten, Firmenjubiläen
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="font-semibold text-navy">Familienfeiern</p>
                    <p className="text-sm text-text-muted">
                      Taufen, Reunions, Kommunion, Konfirmation
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#anfrage"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Private Feier anfragen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Seespitz */}
      <WhySeespitz />

      {/* CTA Banner */}
      <CTABanner
        imageSrc={IMAGES.lakeSunset}
        imageAlt="Sonnenuntergang am Ammersee — perfekte Kulisse für Ihre Feier"
        headline="Von der Feier bis zum Frühstück am See"
        text="17 Zimmer für Ihre Gäste, mediterranes Dinner, Frühstücksbuffet mit Seeblick — alles an einem Ort, ohne Transfers, ohne Stress."
        primaryCta={{ label: "Jetzt anfragen", href: "#anfrage" }}
        secondaryCta={{ label: "Gästehaus ansehen", href: "/gaestehaus" }}
      />

      {/* FAQ */}
      <EventFAQ />

      {/* Inquiry Form */}
      <EventInquiryForm />
    </>
  );
}
