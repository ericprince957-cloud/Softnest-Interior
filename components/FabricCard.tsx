import Image from "next/image";
import type { Fabric } from "./types";
import { whatsappLink, formatNaira } from "@/lib/config";

export default function FabricCard({ fabric }: { fabric: Fabric }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-brown/10 ring-1 ring-sand transition-shadow hover:shadow-xl">
      {/* Swatch: real photo when available, elegant gradient fallback otherwise */}
      <div className="relative aspect-[4/3] fabric-swatch" style={{ backgroundColor: fabric.colorway }}>
        <Image
          src={fabric.image}
          alt={`${fabric.name} — ${fabric.texture}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-espresso/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-soft backdrop-blur">
          {fabric.texture}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg sm:text-xl text-brown">{fabric.name}</h3>
          <span className="whitespace-nowrap text-sm font-bold text-gold">
            {formatNaira(fabric.pricePerYard)}
          </span>
        </div>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brown/75">{fabric.description}</p>

        <a
          href={whatsappLink(fabric.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-md transition-transform active:scale-95 hover:brightness-95"
          aria-label={`Request quote for ${fabric.name} via WhatsApp`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.1 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-5.9-5.1c-.6-.9-1-2-1-3 0-1 .5-1.6.7-1.8.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.3-.1.6.4.7 1.8 2.2 3 2.7.3.1.5.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .2 0 .8-.1 1.1z" />
          </svg>
          Request Quote via WhatsApp
        </a>
      </div>
    </article>
  );
}
