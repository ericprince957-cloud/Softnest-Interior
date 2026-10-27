import FabricCard from "./FabricCard";
import type { Fabric } from "./types";

export default function FabricCatalog({ fabrics }: { fabrics: Fabric[] }) {
  return (
    <section id="catalog" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">The Collection</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brown">This Week&apos;s Fabrics</h2>
        <p className="mt-3 text-sm text-brown/70 max-w-md mx-auto">
          Fresh stock from our Tejuosho stalls. Prices per yard — WhatsApp us for yardage advice and full-house quotes.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fabrics.map((fabric) => (
          <FabricCard key={fabric.id} fabric={fabric} />
        ))}
      </div>
    </section>
  );
}
