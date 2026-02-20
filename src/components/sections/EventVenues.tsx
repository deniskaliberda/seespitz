"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const venues = [
  {
    name: "Restaurant",
    capacity: "100 Sitzplätze + 100 Stehplätze",
    area: "100 m²",
    description:
      "Unser Hauptraum für große Feiern: Platz für bis zu 100 Gäste an festlich gedeckten Tischen. Direkte Verbindung zur Terrasse mit Seeblick. Ideale Lichtverhältnisse zum Sonnenuntergang.",
    bestFor: "Hochzeiten, große Firmenfeiern, Weihnachtsfeiern",
    equipment: ["Soundsystem", "Beamer & Leinwand", "WLAN", "Tanzfläche möglich"],
    imageSrc: IMAGES.restaurant,
    imageAlt: "Restaurant Seespitz — Eventlocation für bis zu 100 Gäste",
  },
  {
    name: "Galerie",
    capacity: "Bis zu 40 Personen",
    area: "Exklusiver Privatraum",
    description:
      "Unser exklusiver Raum für den besonderen Rahmen: Separiert vom Hauptrestaurant, privat und elegant. Perfekt für intime Feiern, den Sektempfang vor der Hochzeit oder ein exklusives Firmendinner.",
    bestFor: "Geburtstage, Jubiläen, Sektempfang, Firmendinner",
    equipment: ["Beamer", "WLAN", "Eigene Musikanlage", "Individuelles Setup"],
    imageSrc: IMAGES.restaurantInterior,
    imageAlt: "Galerie Seespitz — Exklusiver Privatraum für 40 Gäste",
  },
  {
    name: "Seeterrasse",
    capacity: "Bis zu 100 Personen",
    area: "Outdoor direkt am See",
    description:
      "Die Terrasse direkt am Ammersee — Ihr Outdoor-Highlight für Empfänge, Aperitifs und Sommerevents. Hier genießen Ihre Gäste den berühmten Sonnenuntergang hautnah.",
    bestFor: "Sektempfang, Sommerfeste, After-Dinner-Drinks, Trauung im Freien",
    equipment: ["Sonnenschirme", "Heizstrahler (Abend)", "Bar möglich"],
    imageSrc: IMAGES.terrace,
    imageAlt: "Seeterrasse Seespitz — Events direkt am Ammersee",
  },
];

export function EventVenues() {
  return (
    <section id="raeume" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Unsere Räumlichkeiten
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Drei Bereiche — ein perfekter Abend
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Kombinieren Sie unsere Räumlichkeiten flexibel — vom intimen
            Dinner in der Galerie bis zur großen Feier mit Terrasse und
            Restaurant.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={venue.imageSrc}
                  alt={venue.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Capacity Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-navy/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  {venue.capacity}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-2xl font-bold text-navy">
                    {venue.name}
                  </h3>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {venue.area}
                  </span>
                </div>
                <p className="mt-4 text-text-light leading-relaxed">
                  {venue.description}
                </p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Ideal für
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy">
                    {venue.bestFor}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {venue.equipment.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
