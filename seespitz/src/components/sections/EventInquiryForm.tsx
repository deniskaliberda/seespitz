"use client";

import { SectionReveal } from "./SectionReveal";

export function EventInquiryForm() {
  return (
    <section id="anfrage" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Event anfragen
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Erzählen Sie uns von Ihrem Anlass — wir erstellen Ihnen ein
              individuelles Angebot.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <form className="mt-12 space-y-6">
            {/* Row: Name + Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy"
                >
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            {/* Row: Event Type + Date */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-navy"
                >
                  Art des Events *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                >
                  <option value="">Bitte wählen</option>
                  <option value="hochzeit">Hochzeit</option>
                  <option value="firmenfeier">Firmenfeier / Weihnachtsfeier</option>
                  <option value="geburtstag">Geburtstag / Jubiläum</option>
                  <option value="tagung">Tagung / Seminar</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-navy"
                >
                  Wunschtermin
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Row: Guests + Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-navy"
                >
                  Anzahl Gäste
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="200"
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                  placeholder="z.B. 60"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-navy"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                  placeholder="+49 ..."
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none resize-none"
                placeholder="Erzählen Sie uns von Ihrem geplanten Event..."
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-gold px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:scale-105"
              >
                Unverbindlich anfragen
              </button>
              <p className="mt-3 text-xs text-text-muted">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
