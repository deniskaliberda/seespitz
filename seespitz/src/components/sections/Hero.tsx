"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlay?: "dark" | "golden";
}

export function Hero({
  imageSrc,
  imageAlt,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  overlay = "dark",
}: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === "golden"
            ? "bg-gradient-to-t from-black/70 via-black/30 to-amber-900/20"
            : "bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            {subline}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primaryCta && (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl hover:scale-105"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </a>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 pt-2"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
