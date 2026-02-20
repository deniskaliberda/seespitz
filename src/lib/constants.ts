// ─── Seespitz Geschäftsdaten ───────────────────────────────────────────

export const SITE = {
  name: "Seespitz",
  tagline: "Restaurant, Gästehaus & Events am Ammersee",
  url: "https://seespitz-ammersee.de",
  locale: "de_DE",
  language: "de",
} as const;

export const RESTAURANT = {
  name: "Restaurant Seespitz",
  cuisine: "Mediterran / Europäisch",
  chef: "Daniel Böhm",
  capacity: { seated: 100, standing: 100, area: "100 m²" },
  gallery: { capacity: 40, name: "Galerie" },
  priceRange: "€€–€€€",
  hours: "Täglich 11:30–23:00",
  phone: "08152/4849654",
  email: "info@seespitz-ammersee.de",
  address: {
    street: "Mühlfeld 2",
    zip: "82211",
    city: "Herrsching am Ammersee",
    country: "DE",
  },
  reservationUrl: "https://www.opentable.com/r/restaurant-seespitz-herrsching-a-ammersee",
  ratings: {
    opentable: { score: 4.7, reviews: 500 },
    tripadvisor: { score: 4.2, reviews: 45 },
    rank: "#3 von 40 Restaurants in Herrsching",
  },
  equipment: ["WLAN", "Beamer", "Leinwand", "Soundsystem"],
} as const;

export const GAESTEHAUS = {
  name: "Seespitz Gästehaus",
  rooms: 17,
  types: 8,
  sizeRange: "21–59 m²",
  priceFrom: "ab €110/Nacht",
  breakfast: "Tägliches Buffet (inklusive)",
  parking: "Eigene Tiefgarage + E-Ladestationen",
  languages: ["Deutsch", "Englisch"],
  phone: "+49 8152 93 00 0",
  email: "felix.schuck@seespitz-gaestehaus.de",
  address: {
    street: "Mühlfelderstr. 72",
    zip: "82211",
    city: "Herrsching am Ammersee",
    country: "DE",
  },
  bookingUrl: "https://www.booking.com/hotel/de/svg-gastehaus-garni.html",
  ratings: {
    booking: { location: 9.7 },
  },
  owner: "Felix Schuck",
} as const;

export const ROOM_TYPES = [
  { name: "Doppelzimmer", size: "25 m²", highlight: "Standard", audience: "Geschäftsreisende, Kurztrips" },
  { name: "Doppelzimmer mit Terrasse", size: "21 m²", highlight: "Erdgeschoss, Terrassenzugang", audience: "Paare, Naturliebhaber" },
  { name: "Superior Doppelzimmer", size: "21 m²", highlight: "Gehobene Ausstattung", audience: "Anspruchsvolle Gäste" },
  { name: "Deluxe DZ mit Balkon", size: "28 m²", highlight: "Balkon + Seeblick", audience: "Paare, Jubiläen" },
  { name: "Junior Suite mit Balkon", size: "30 m²", highlight: "Suite-Kategorie", audience: "Hochzeitsgäste, Upgrades" },
  { name: "Suite mit Seeblick", size: "42 m²", highlight: "Premium, großzügig", audience: "Brautpaar, VIP-Gäste" },
  { name: "Apartment (1 Schlafzimmer)", size: "35 m²", highlight: "Küchenzeile", audience: "Familien, Langzeitgäste" },
  { name: "Apartment mit Seeblick", size: "59 m²", highlight: "Größte Einheit, Küchenzeile", audience: "Familien-Reunions, Extended Stay" },
] as const;

export const TAGUNGSRAUM = {
  area: "82 m²",
  divisible: "2x 38–44 m²",
  capacity: 30,
  tech: ["85\" Multimedia-Screen mit Click Share", "Whiteboards", "Rednerpult", "Highspeed-WLAN"],
  layouts: ["Parlamentarisch", "U-Form", "Quadrat", "Stuhlkreis", "Reihenbestuhlung"],
  location: "Direkt am Wasser mit Seeblick",
} as const;

export const USPS = [
  { title: "Bester Sonnenuntergangs-Blick", headline: "Wo der Ammersee golden wird" },
  { title: "Mediterrane Küche in bayerischer Umgebung", headline: "Mediterranes Flair am Ammersee" },
  { title: "Einziges Komplettpaket am Ammersee", headline: "Alles unter einem Dach — direkt am See" },
  { title: "82 m² Tagungsraum direkt am Wasser", headline: "Tagen mit Seeblick" },
  { title: "4,7 Sterne bei 500+ Bewertungen", headline: "Von unseren Gästen bestätigt" },
  { title: "Längste Seepromenade Deutschlands", headline: "Direkt an Deutschlands längster Seepromenade" },
  { title: "Hochzeits-Komplettpaket", headline: "Ihre Traumhochzeit am Ammersee" },
  { title: "E-Ladestationen + Tiefgarage", headline: "Nachhaltig ankommen, entspannt genießen" },
] as const;

// ─── Navigation ────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  {
    label: "Restaurant",
    href: "/restaurant",
    dropdown: [
      { label: "Konzept", href: "/restaurant" },
      { label: "Speisekarte", href: "/speisekarte" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
  {
    label: "Gästehaus",
    href: "/gaestehaus",
    dropdown: [
      { label: "Zimmer & Suiten", href: "/gaestehaus" },
      { label: "Frühstück", href: "/gaestehaus#fruehstueck" },
      { label: "Direkt buchen", href: "/gaestehaus#buchen" },
    ],
  },
  {
    label: "Tagung",
    href: "/tagung",
    dropdown: [
      { label: "Tagungsraum", href: "/tagung" },
      { label: "Pakete", href: "/tagung#pakete" },
      { label: "Incentives", href: "/tagung#incentives" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    dropdown: [
      { label: "Hochzeiten", href: "/events#hochzeiten" },
      { label: "Firmenfeiern", href: "/events#firmenfeiern" },
      { label: "Private Feiern", href: "/events#private-feiern" },
    ],
  },
  { label: "Aktivitäten", href: "/aktivitaeten" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

// ─── Placeholder Images (Unsplash) ────────────────────────────────────

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format",
  heroSunset: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format",
  restaurantInterior: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format",
  terrace: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&auto=format",
  dish1: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=600&q=80&auto=format",
  dish2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format",
  dish3: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&auto=format",
  gaestehaus: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80&auto=format",
  roomView: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format",
  suite: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format",
  tagung: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format",
  events: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&auto=format",
  wedding: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format",
  lake: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format",
  lakeSunset: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80&auto=format",
  breakfast: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format",
  weddingTable: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80&auto=format",
  weddingCouple: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format",
  weddingFlowers: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format",
  partyLights: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80&auto=format",
  champagne: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&q=80&auto=format",
  corporateParty: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format",
  birthdayCake: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80&auto=format",
  sunsetDinner: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&q=80&auto=format",
} as const;
