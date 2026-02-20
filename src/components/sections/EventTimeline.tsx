"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const steps = [
  {
    time: "15:00",
    title: "Ankommen & Einchecken",
    description:
      "Ihre Gäste checken in unseren 17 Zimmern ein. Zeit zum Ankommen, Umziehen und die Vorfreude genießen.",
    icon: "🏨",
  },
  {
    time: "16:30",
    title: "Sektempfang auf der Terrasse",
    description:
      "Begrüßen Sie Ihre Gäste mit einem Aperitif auf der Seeterrasse — mit Blick auf den glitzernden Ammersee.",
    icon: "🥂",
  },
  {
    time: "18:00",
    title: "Feier & Dinner",
    description:
      "Mehrgängiges mediterranes Menü von Küchenchef Daniel Böhm. Die Sonne taucht den Saal in goldenes Licht.",
    icon: "🍽️",
  },
  {
    time: "20:30",
    title: "Sonnenuntergang",
    description:
      "Der Höhepunkt: Der legendäre Ammersee-Sonnenuntergang direkt vor Ihren Augen. Perfekt für Fotos.",
    icon: "🌅",
  },
  {
    time: "21:00",
    title: "Tanzen & Feiern",
    description:
      "Musik, Tanz und Feiern bis in die Nacht — mit Soundsystem, Tanzfläche und Ihrer Playlist.",
    icon: "💃",
  },
  {
    time: "Morgens",
    title: "Frühstück mit Seeblick",
    description:
      "Am nächsten Morgen: Gemeinsames Frühstücksbuffet für alle Gäste — der perfekte Ausklang.",
    icon: "☀️",
  },
];

export function EventTimeline() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              So könnte Ihr Tag aussehen
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Ein Abend im Seespitz
            </h2>
          </div>
        </SectionReveal>

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/20 sm:left-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 flex items-start gap-8 last:mb-0 sm:gap-12 ${
                i % 2 === 0
                  ? "sm:flex-row"
                  : "sm:flex-row-reverse sm:text-right"
              }`}
            >
              {/* Content */}
              <div className="flex-1 pl-16 sm:pl-0">
                <div
                  className={`rounded-2xl bg-white/5 p-6 backdrop-blur-sm ${
                    i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    {step.time}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm sm:relative sm:left-auto">
                {step.icon}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
