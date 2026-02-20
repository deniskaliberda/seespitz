"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const galleryImages = [
  { src: IMAGES.wedding, alt: "Hochzeit am Ammersee" },
  { src: IMAGES.weddingTable, alt: "Festlich gedeckte Tafel" },
  { src: IMAGES.champagne, alt: "Sektempfang am See" },
  { src: IMAGES.weddingFlowers, alt: "Blumendekoration" },
  { src: IMAGES.terrace, alt: "Terrasse bei Sonnenuntergang" },
  { src: IMAGES.restaurant, alt: "Restaurant Ambiente" },
];

export function EventGalleryStrip() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Impressionen
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Events im Seespitz
          </h2>
        </motion.div>
      </div>

      {/* Full-width scrolling gallery */}
      <div className="mt-12">
        <div className="flex gap-4 px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-[3/2] w-80 shrink-0 snap-center overflow-hidden rounded-2xl sm:w-96"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="384px"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-text-muted">
          Platzhalter-Bilder — werden durch professionelle Fotos Ihrer Events
          ersetzt
        </p>
      </div>
    </section>
  );
}
