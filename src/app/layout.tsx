import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seespitz — Restaurant, Gästehaus & Events am Ammersee",
    template: "%s | Seespitz Herrsching",
  },
  description:
    "Mediterranes Restaurant, 17 Zimmer mit Seeblick, Tagungsraum & Eventlocation in Herrsching am Ammersee. 4,7 Sterne bei 500+ Bewertungen.",
  metadataBase: new URL("https://seespitz-ammersee.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Seespitz Herrsching",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
