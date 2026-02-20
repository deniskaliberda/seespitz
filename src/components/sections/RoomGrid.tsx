"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ROOM_TYPES, GAESTEHAUS, IMAGES } from "@/lib/constants";

const roomImages: Record<string, string> = {
  "Doppelzimmer": IMAGES.room,
  "Doppelzimmer mit Terrasse": IMAGES.roomView,
  "Superior Doppelzimmer": IMAGES.room,
  "Deluxe DZ mit Balkon": IMAGES.roomView,
  "Junior Suite mit Balkon": IMAGES.suite,
  "Suite mit Seeblick": IMAGES.suite,
  "Apartment (1 Schlafzimmer)": IMAGES.roomView,
  "Apartment mit Seeblick": IMAGES.suite,
};

export function RoomGrid() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Unsere Zimmer & Suiten
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            8 verschiedene Zimmertypen — vom gemütlichen Doppelzimmer bis zum
            großzügigen 59 m² Apartment mit Seeblick
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROOM_TYPES.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={roomImages[room.name] || IMAGES.room}
                  alt={`${room.name} — Seespitz Gästehaus am Ammersee`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <span className="text-xs font-semibold text-white/80">
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-navy">
                  {room.name}
                </h3>
                <p className="mt-1 text-sm text-gold font-medium">
                  {room.highlight}
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  {room.audience}
                </p>
                <a
                  href={GAESTEHAUS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                >
                  Verfügbarkeit prüfen
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
      </div>
    </section>
  );
}
