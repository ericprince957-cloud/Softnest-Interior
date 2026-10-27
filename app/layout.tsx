import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Softnest Interior — Premium Fabrics & Curtains from Tejuosho",
  description:
    "Premium fabrics, curtains and made-to-measure drapes, direct from Tejuosho Market. Request a quote on WhatsApp.",
  openGraph: {
    title: "Softnest Interior — Premium Fabrics & Curtains",
    description: "Luxury fabrics direct from Tejuosho Market. Free quotes via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
