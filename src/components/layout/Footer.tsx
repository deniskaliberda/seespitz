import Link from "next/link";
import { RESTAURANT, GAESTEHAUS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-white">
              Seespitz
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Restaurant, Gästehaus & Eventlocation direkt am Ammersee —
              alles unter einem Dach in Herrsching.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                <span className="text-gold">&#9733;</span>
                <span className="text-sm font-semibold text-white">4,7</span>
                <span className="text-xs text-white/50">OpenTable</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                <span className="text-lake text-sm font-semibold">9,7</span>
                <span className="text-xs text-white/50">Booking.com</span>
              </div>
            </div>
          </div>

          {/* Restaurant */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Restaurant
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>{RESTAURANT.address.street}</p>
              <p>
                {RESTAURANT.address.zip} {RESTAURANT.address.city}
              </p>
              <p className="mt-3">
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {RESTAURANT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {RESTAURANT.email}
                </a>
              </p>
              <p className="mt-3 text-white/50">{RESTAURANT.hours}</p>
            </address>
          </div>

          {/* Gästehaus */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Gästehaus
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>{GAESTEHAUS.address.street}</p>
              <p>
                {GAESTEHAUS.address.zip} {GAESTEHAUS.address.city}
              </p>
              <p className="mt-3">
                <a
                  href={`tel:${GAESTEHAUS.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {GAESTEHAUS.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${GAESTEHAUS.email}`}
                  className="transition-colors hover:text-white"
                >
                  {GAESTEHAUS.email}
                </a>
              </p>
              <p className="mt-3 text-white/50">{GAESTEHAUS.rooms} Zimmer · {GAESTEHAUS.priceFrom}</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Entdecken
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Restaurant", href: "/restaurant" },
                { label: "Speisekarte", href: "/speisekarte" },
                { label: "Gästehaus", href: "/gaestehaus" },
                { label: "Tagung & Seminare", href: "/tagung" },
                { label: "Events & Hochzeiten", href: "/events" },
                { label: "Aktivitäten", href: "/aktivitaeten" },
                { label: "Kontakt & Anfahrt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE.name} — Alle Rechte vorbehalten</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white/60">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/60">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
