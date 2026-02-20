"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

interface CTABannerProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTABanner({
  imageSrc,
  imageAlt,
  headline,
  text,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
