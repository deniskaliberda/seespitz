"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const eventTypes = [
  {
    id: "hochzeiten",
    title: "Hochzeiten",
    subtitle: "Ihr schönster Tag am See",
    description:
      "Feiern Sie mit bis zu 100 Gästen im Restaurant oder im intimen Rahmen unserer Galerie (40 Personen). Das Komplettpaket: Feier, 17 Zimmer für Ihre Gäste und Brunch am nächsten Morgen mit Seeblick.",
    features: [
      "Bis zu 100 Gäste im Restaurant",
      "Private Galerie für 40 Personen",
      "17 Zimmer für Übernachtungsgäste",
      "Brunch am nächsten Morgen",
      "Terrasse mit Sonnenuntergang",
      "Individuelle Menü-Gestaltung",
    ],
    imageSrc: IMAGES.wedding,
    imageAlt: "Hochzeitsfeier im Restaurant Seespitz am Ammersee",
  },
  {
    id: "firmenfeiern",
    title: "Firmenfeiern & Weihnachtsfeiern",
    subtitle: "Events, die in Erinnerung bleiben",
    description:
      "Von der Sommerfeier auf der Terrasse bis zur eleganten Weihnachtsfeier — das Seespitz bietet den perfekten Rahmen für Ihr Firmen-Event. Modernste Technik, professionelles Catering und bei Bedarf Übernachtungsmöglichkeiten für Ihr Team.",
    features: [
      "Kapazität bis 100 Personen",
      "Beamer, Leinwand & Soundsystem",
      "Individuelle Catering-Optionen",
      "Kombination mit Tagung möglich",
      "Tiefgarage & E-Ladestationen",
      "82 m² Tagungsraum zusätzlich",
    ],
    imageSrc: IMAGES.restaurantInterior,
    imageAlt: "Firmenfeier und Eventlocation Seespitz Herrsching",
  },
  {
    id: "private-feiern",
    title: "Private Feiern",
    subtitle: "Geburtstage, Jubiläen & Reunions",
    description:
      "Ob runder Geburtstag, goldene Hochzeit oder Familien-Reunion — feiern Sie Ihren besonderen Anlass in der exklusiven Galerie (bis 40 Personen) oder im gesamten Restaurant. Mit mediterraner Küche und dem besten Blick am Ammersee.",
    features: [
      "Galerie exklusiv für 40 Personen",
      "Individuelle Menüplanung",
      "Aperitif auf der Terrasse",
      "Familien-Übernachtungspakete",
      "Flexible Raumgestaltung",
      "Kinderfreundliche Optionen",
    ],
    imageSrc: IMAGES.terrace,
    imageAlt: "Private Feier auf der Terrasse des Seespitz am Ammersee",
  },
];

export function EventTypes() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {eventTypes.map((event, index) => (
          <motion.div
            key={event.id}
            id={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col items-center gap-12 py-16 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } ${index > 0 ? "border-t border-navy/10" : ""}`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={event.imageSrc}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                {event.subtitle}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
                {event.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                {event.description}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {event.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-light">
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
              <a
                href="#anfrage"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                {event.title === "Hochzeiten"
                  ? "Hochzeit anfragen"
                  : "Event anfragen"}
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
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
