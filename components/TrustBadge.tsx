export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/80 px-4 py-2 shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l7 3v6c0 5-3 8.5-7 11-4-2.5-7-6-7-11V5l7-3z"
          stroke="#C9A24B"
          strokeWidth="1.6"
        />
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#5A3E28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-brown">
        Tejuosho Market · Trusted Fabric Merchants
      </span>
    </div>
  );
}
