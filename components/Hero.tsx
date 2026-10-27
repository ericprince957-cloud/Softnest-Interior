import TrustBadge from "./TrustBadge";
import { whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <header className="relative overflow-hidden texture-linen bg-sand">
      {/* Fabric texture hero — replace with a real photo at /public/fabrics/hero.jpg */}
      <div
        className="absolute inset-0 fabric-swatch bg-brown"
        role="img"
        aria-label="Close-up of premium draped velvet fabric in warm brown and gold tones"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso/80" />

      <div className="relative mx-auto max-w-3xl px-5 pt-12 pb-16 sm:pt-20 sm:pb-24 text-center">
        <TrustBadge />
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-cream drop-shadow-sm">
          Premium Fabrics &amp; Curtains,
          <span className="block text-gold-soft">Direct from Tejuosho.</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-cream/85 max-w-xl mx-auto">
          Handpicked velvet, sheers, Ankara and blackout fabrics — measured, stitched and fitted to your windows.
          Free quotes, straight to our WhatsApp.
        </p>

        <div className="mt-8 flex flex-col gap-3 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#catalog"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-espresso shadow-lg shadow-espresso/30 transition-transform active:scale-95 hover:bg-gold-soft"
          >
            Browse Fabrics
          </a>
          <a
            href={whatsappLink("your curtains")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-8 text-sm font-semibold text-cream backdrop-blur transition-transform active:scale-95 hover:bg-cream/20"
          >
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-cream/60">
          Made-to-measure · Nationwide delivery · Fitting available
        </p>
      </div>
    </header>
  );
}
