"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

interface Review {
  text: string;
  author: string;
  source: string;
  rating: number;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? "text-gold" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Was unsere Gäste sagen
          </h2>
          <p className="mt-3 text-text-muted">
            4,7 von 5 Sternen bei über 500 Bewertungen auf OpenTable
          </p>
        </SectionReveal>

        <div className="relative mt-12 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <Stars count={reviews[current].rating} />
              <blockquote className="mt-6 font-heading text-xl leading-relaxed text-navy italic sm:text-2xl">
                &ldquo;{reviews[current].text}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-navy">
                  {reviews[current].author}
                </p>
                <p className="text-sm text-text-muted">
                  {reviews[current].source}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gold"
                  : "w-2.5 bg-navy/20 hover:bg-navy/40"
              }`}
              aria-label={`Bewertung ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
