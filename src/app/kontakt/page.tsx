import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { IMAGES, RESTAURANT, GAESTEHAUS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt — Seespitz Herrsching am Ammersee",
  description:
    "So finden Sie uns: Mühlfeld 2, 82211 Herrsching am Ammersee. 15 Parkplätze, Tiefgarage, E-Ladestationen. Öffnungszeiten und Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={IMAGES.lake}
        imageAlt="Ammersee bei Herrsching — Seespitz Restaurant und Gästehaus"
        headline="Kontakt & Anfahrt"
        subline="Wir freuen uns auf Sie — direkt an Deutschlands längster Seepromenade."
      />

      {/* Contact Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Restaurant */}
            <SectionReveal>
              <div className="rounded-2xl bg-cream p-8">
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Restaurant Seespitz
                </h2>
                <address className="mt-6 space-y-3 not-italic text-text-light">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">{RESTAURANT.address.street}</p>
                      <p>{RESTAURANT.address.zip} {RESTAURANT.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${RESTAURANT.phone}`} className="font-semibold text-navy hover:text-gold transition-colors">
                      {RESTAURANT.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href={`mailto:${RESTAURANT.email}`} className="text-navy hover:text-gold transition-colors">
                      {RESTAURANT.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-navy">{RESTAURANT.hours}</span>
                  </div>
                </address>
                <a
                  href={RESTAURANT.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark"
                >
                  Tisch reservieren
                </a>
              </div>
            </SectionReveal>

            {/* Gästehaus */}
            <SectionReveal delay={0.15}>
              <div className="rounded-2xl bg-cream p-8">
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Seespitz Gästehaus
                </h2>
                <address className="mt-6 space-y-3 not-italic text-text-light">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">{GAESTEHAUS.address.street}</p>
                      <p>{GAESTEHAUS.address.zip} {GAESTEHAUS.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${GAESTEHAUS.phone}`} className="font-semibold text-navy hover:text-gold transition-colors">
                      {GAESTEHAUS.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href={`mailto:${GAESTEHAUS.email}`} className="text-navy hover:text-gold transition-colors">
                      {GAESTEHAUS.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <span>
                      <span className="font-semibold text-navy">{GAESTEHAUS.rooms} Zimmer</span>
                      <span className="text-text-muted"> · {GAESTEHAUS.priceFrom}</span>
                    </span>
                  </div>
                </address>
                <a
                  href={GAESTEHAUS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark"
                >
                  Zimmer buchen
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
              Anfahrt
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <SectionReveal className="lg:col-span-2">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.5!2d11.1766!3d47.9989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479df7e0e3b1c0c3%3A0x0!2zNDfCsDU5JzU2LjAiTiAxMcKwMTAnMzUuOCJF!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seespitz Herrsching — Standort auf Google Maps"
                  className="h-full w-full"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-navy">Mit dem Auto</h3>
                  <p className="mt-2 text-sm text-text-light">
                    A96 München–Lindau, Ausfahrt Herrsching. Folgen Sie der
                    Beschilderung Richtung Zentrum/See.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-navy">Mit der Bahn</h3>
                  <p className="mt-2 text-sm text-text-light">
                    S-Bahn S8 ab München Hauptbahnhof bis Endstation Herrsching.
                    Ca. 10 Minuten Fußweg zum Seespitz.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-navy">Parken</h3>
                  <p className="mt-2 text-sm text-text-light">
                    15 eigene Parkplätze, Tiefgarage und E-Ladestationen direkt
                    am Haus.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                Schreiben Sie uns
              </h2>
              <p className="mt-4 text-text-light">
                Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <form className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-navy">
                  Betreff
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                >
                  <option value="">Bitte wählen</option>
                  <option value="reservierung">Tischreservierung</option>
                  <option value="buchung">Zimmerbuchung</option>
                  <option value="event">Event / Hochzeit</option>
                  <option value="tagung">Tagung / Seminar</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy">
                  Nachricht *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-full bg-gold px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:scale-105"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
