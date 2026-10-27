export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="font-display text-xl text-gold-soft">Softnest Interior</p>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/50">
          Tejuosho Market · Lagos, Nigeria
        </p>
        <p className="mt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} Softnest Interior. All rights reserved.
        </p>
        <p className="mt-1 text-[10px] text-cream/40">
          Concept by <span className="font-semibold text-gold/70">Vector Codes</span>
        </p>
      </div>
    </footer>
  );
}
