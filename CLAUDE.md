# Seespitz Website

## Projekt

Website für den **Seespitz-Komplex** in Herrsching am Ammersee — Restaurant, Gästehaus, Tagung & Events. Geführt von **Felix Schuck**, Küchenchef: **Daniel Böhm**.

**Kunde:** Seespitz (Felix Schuck)
**Agentur:** MyHiwi UG — Denis Kaliberda
**Briefing:** `../SEESPITZ-WEBSITE-BRIEFING.html`

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animationen:** Framer Motion
- **Deployment:** Vercel
- **Fonts:** Playfair Display (Headlines) + Inter (Body) via `next/font`
- **Bilder:** `next/image` mit Unsplash-Platzhaltern (später echte Fotos)

## Befehle

```bash
npm run dev      # Dev Server (localhost:3000)
npm run build    # Production Build
npm run lint     # ESLint
```

## Design-Konzept: "Golden Hour am See"

Die Website fühlt sich an wie ein Sonnenuntergang am Ammersee — warm, cineastisch, immersiv.

### Farbpalette

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Navy | `#1a1a2e` | `text-navy`, `bg-navy` | Headlines, Footer |
| See-Blau | `#2c5f7c` | `text-lake`, `bg-lake` | Links, Hover |
| Warm-Gold | `#c9a96e` | `text-gold`, `bg-gold` | CTAs, Akzente |
| Gold Light | `#d4b87d` | `text-gold-light` | Hover-State |
| Gold Dark | `#b8954f` | `bg-gold-dark` | Active-State |
| Creme | `#f5f0e8` | `bg-cream` | Section-Hintergründe |
| Weiß | `#ffffff` | `bg-white` | Cards, Content |

### Typografie

- **Headlines:** `font-heading` → Playfair Display (Serif)
- **Body:** `font-body` → Inter (Sans)
- **H1:** 56-64px / **H2:** 36-42px / **Body:** 17-18px / **Line-height:** 1.7

### Animationen

- Hero: Ken-Burns-Effekt (`animate-ken-burns` in globals.css)
- Scroll-Reveals: `<SectionReveal />` Wrapper (Framer Motion)
- Stat-Counter: `<StatCounter />` animiert Zahlen
- Hover: Kacheln zoomen Bild auf 103%

## Seitenstruktur

| Route | Seite | Status |
|-------|-------|--------|
| `/` | Startseite | Fertig |
| `/restaurant` | Restaurant | Offen |
| `/speisekarte` | Speisekarte | Offen |
| `/gaestehaus` | Gästehaus | Offen |
| `/tagung` | Tagung & Seminare | Offen |
| `/events` | Events & Hochzeiten | Offen |
| `/aktivitaeten` | Aktivitäten | Offen |
| `/galerie` | Galerie | Offen |
| `/ueber-uns` | Über uns | Offen |
| `/kontakt` | Kontakt & Anfahrt | Offen |
| `/blog` | Blog | Offen |
| `/impressum` | Impressum | Offen |
| `/datenschutz` | Datenschutz | Offen |

## Komponenten

### Layout
- `<Header />` — Sticky, transparent → solid on scroll, 2 CTA-Buttons
- `<Footer />` — Beide Adressen, Links, Bewertungs-Badges

### Sections
- `<Hero />` — Vollbild-Foto + Ken Burns + Overlay + CTAs
- `<SectionReveal />` — Scroll-basierte Einblend-Animation
- `<FeatureCards />` — 3-Kacheln Grid mit Hover-Zoom
- `<StatCounter />` — Animierte Zahlen-Counter
- `<ReviewCarousel />` — Bewertungs-Slider
- `<CTABanner />` — Fullwidth CTA mit Hintergrundbild
- `<IntroSection />` — Textblock mit Subline
- `<LocationTeaser />` — Google Maps + Anfahrts-Infos

## Geschäftsdaten

Alle Geschäftsdaten (Adressen, Telefon, E-Mail, Öffnungszeiten, Zimmertypen, USPs) sind zentral in `src/lib/constants.ts` gespeichert. Bei Änderungen nur dort anpassen.

### Restaurant
- **Adresse:** Mühlfeld 2, 82211 Herrsching am Ammersee
- **Telefon:** 08152/4849654
- **E-Mail:** info@seespitz-ammersee.de
- **Öffnungszeiten:** Täglich 11:30–23:00
- **Reservierung:** OpenTable

### Gästehaus
- **Adresse:** Mühlfelderstr. 72, 82211 Herrsching
- **Telefon:** +49 8152 93 00 0
- **E-Mail:** felix.schuck@seespitz-gaestehaus.de
- **Zimmer:** 17 Einheiten, 8 Typen (21–59 m²)
- **Preise:** ab €110/Nacht

## SEO-Regeln

- Meta-Tags pro Seite gemäß Briefing
- JSON-LD Schema Markup: Restaurant, Menu, LodgingBusiness, Hotel, HotelRoom, MeetingRoom, EventVenue, Event, LocalBusiness, BreadcrumbList, FAQPage
- Speisekarte als HTML (kein PDF!)
- Interne Verlinkung / Cross-Selling auf jeder Seite
- Bilder: Alt-Tags, WebP, Lazy Loading
- NAP-Konsistenz (Name, Adresse, Telefon) identisch zu Google Business Profile

## Platzhalter-Bilder

Aktuell Unsplash-Bilder in `src/lib/constants.ts` → `IMAGES`. Werden später durch professionelle Kundenfotos ersetzt. Unsplash-Domain in `next.config.ts` freigeschaltet.

## Konventionen

- Deutsche Sprache für alle Inhalte (lang="de")
- Komponenten in PascalCase
- Seiten-Routen in Kleinbuchstaben mit Umlauten als ae/oe/ue
- Tailwind-Klassen direkt im JSX (kein separates CSS außer globals.css)
- Framer Motion für alle Animationen
- `"use client"` nur wo nötig (Animationen, State, Event Handler)
