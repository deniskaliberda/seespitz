import { Hero } from "@/components/sections/Hero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { StatCounter } from "@/components/sections/StatCounter";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { IntroSection } from "@/components/sections/IntroSection";
import { LocationTeaser } from "@/components/sections/LocationTeaser";
import { IMAGES, RESTAURANT, GAESTEHAUS } from "@/lib/constants";

const featureCards = [
  {
    title: "Restaurant",
    description: "Mediterrane Küche mit Seeblick",
    imageSrc: IMAGES.restaurant,
    imageAlt: "Restaurant Seespitz — Mediterranes Ambiente am Ammersee",
    href: "/restaurant",
  },
  {
    title: "Gästehaus",
    description: "17 Zimmer mit Balkon & Seeblick",
    imageSrc: IMAGES.gaestehaus,
    imageAlt: "Seespitz Gästehaus — Zimmer mit Seeblick am Ammersee",
    href: "/gaestehaus",
  },
  {
    title: "Tagung & Events",
    description: "82 m² Tagungsraum direkt am Wasser",
    imageSrc: IMAGES.events,
    imageAlt: "Eventlocation Seespitz — Feiern und Tagen am Ammersee",
    href: "/events",
  },
];

const stats = [
  {
    value: "4,7",
    numericValue: 47,
    suffix: "",
    label: "Sterne auf OpenTable",
  },
  {
    value: "17",
    numericValue: 17,
    label: "Zimmer mit Seeblick",
  },
  {
    value: "82 m²",
    numericValue: 82,
    suffix: " m²",
    label: "Tagungsraum",
  },
  {
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Bewertungen",
  },
];

const reviews = [
  {
    text: "Fantastisches Essen in traumhafter Kulisse. Der Sonnenuntergang über dem Ammersee war das absolute Highlight. Wir kommen definitiv wieder!",
    author: "Familie M.",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "Perfekte Location für unsere Firmenfeier. Das Team hat alles hervorragend organisiert — vom Dinner bis zur Übernachtung im Gästehaus.",
    author: "Thomas K.",
    source: "Google",
    rating: 5,
  },
  {
    text: "Die mediterrane Küche von Chef Daniel Böhm ist ein Genuss. Dazu die Terrasse mit Blick auf den See — besser geht es nicht am Ammersee.",
    author: "Sandra W.",
    source: "OpenTable",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.lakeSunset}
        imageAlt="Sonnenuntergang über dem Ammersee — Restaurant Seespitz Herrsching"
        headline="Wo der Ammersee golden wird"
        subline="Restaurant, Gästehaus & Events in Herrsching am Ammersee"
        primaryCta={{
          label: "Tisch reservieren",
          href: RESTAURANT.reservationUrl,
        }}
        secondaryCta={{
          label: "Zimmer buchen",
          href: GAESTEHAUS.bookingUrl,
        }}
        overlay="golden"
      />

      {/* Intro */}
      <IntroSection />

      {/* 3 Feature Cards */}
      <FeatureCards cards={featureCards} />

      {/* Stats */}
      <StatCounter stats={stats} />

      {/* Reviews */}
      <ReviewCarousel reviews={reviews} />

      {/* CTA Banner */}
      <CTABanner
        imageSrc={IMAGES.terrace}
        imageAlt="Terrasse Restaurant Seespitz am Ammersee"
        headline="Alles unter einem Dach — direkt am See"
        text="Kein anderer Ort am Ammersee vereint Restaurant, Gästehaus, Tagungsraum und Eventlocation wie das Seespitz. Erleben Sie es selbst."
        primaryCta={{
          label: "Tisch reservieren",
          href: RESTAURANT.reservationUrl,
        }}
        secondaryCta={{
          label: "Zimmer buchen",
          href: GAESTEHAUS.bookingUrl,
        }}
      />

      {/* Location Teaser */}
      <LocationTeaser />
    </>
  );
}
