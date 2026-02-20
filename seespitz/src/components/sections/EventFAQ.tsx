"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    question: "Wie viele Gäste passen ins Seespitz?",
    answer:
      "Im Restaurant haben bis zu 100 Gäste Platz (Sitzplätze), dazu kommen 100 Stehplätze. Unsere exklusive Galerie bietet Platz für bis zu 40 Personen. Die Seeterrasse eignet sich für Empfänge mit bis zu 100 Personen.",
  },
  {
    question: "Können alle Gäste vor Ort übernachten?",
    answer:
      "Unser Gästehaus bietet 17 Zimmer und Suiten (21–59 m²) — alle mit Balkon und Seeblick. Für Hochzeiten empfehlen wir frühzeitig zu buchen, da die Zimmer schnell vergeben sind. Für größere Gruppen vermitteln wir gerne weitere Unterkünfte in der Umgebung.",
  },
  {
    question: "Kann ich ein individuelles Menü zusammenstellen?",
    answer:
      "Absolut! Küchenchef Daniel Böhm erstellt für jeden Anlass ein maßgeschneidertes Menü — ob mehrgängiges Dinner, mediterranes Buffet oder Fingerfood. Wir berücksichtigen Allergien, Unverträglichkeiten und besondere Wünsche.",
  },
  {
    question: "Ist eine Trauung am See möglich?",
    answer:
      "Eine freie Trauung auf unserer Seeterrasse direkt am Ammersee ist möglich und ein wundervolles Erlebnis. Standesamtliche Trauungen finden im nahegelegenen Standesamt Herrsching statt — nur wenige Minuten entfernt.",
  },
  {
    question: "Welche Technik steht zur Verfügung?",
    answer:
      "WLAN, Beamer, Leinwand, professionelles Soundsystem und Mikrofon. Für Ihren DJ oder Ihre Band ist alles vorbereitet. In unserem 82 m² Tagungsraum zusätzlich: 85\" Multimedia-Screen mit Click Share.",
  },
  {
    question: "Gibt es Parkmöglichkeiten?",
    answer:
      "Ja! 15 eigene Parkplätze, eine Tiefgarage und E-Ladestationen stehen Ihnen und Ihren Gästen zur Verfügung — direkt am Haus, kostenlos.",
  },
  {
    question: "Wie läuft die Planung ab?",
    answer:
      "Nach Ihrer Anfrage vereinbaren wir einen persönlichen Besichtigungstermin. Dabei besprechen wir Ihre Wünsche, zeigen Ihnen die Räumlichkeiten und erstellen ein individuelles Angebot. Die Planung erfolgt in engem Austausch — bis jedes Detail stimmt.",
  },
  {
    question: "Wie weit im Voraus sollte ich buchen?",
    answer:
      "Für Hochzeiten empfehlen wir eine Buchung 12–18 Monate im Voraus, besonders für Termine in der Hauptsaison (Mai–Oktober). Firmenfeiern und private Events können oft auch kurzfristiger geplant werden.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-semibold text-navy">
          {question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-text-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EventFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Häufige Fragen
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Alles, was Sie wissen müssen
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
