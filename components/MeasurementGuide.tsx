const steps = [
  {
    title: "Measure the width",
    body: "Measure the curtain track/pole width in inches. For a full, luxurious look, order track width × 2 in fabric.",
    icon: "↔",
  },
  {
    title: "Measure the drop",
    body: "Measure from the top of the track down to where you want the curtain to end — sill, below sill, or floor.",
    icon: "↕",
  },
  {
    title: "Send us the numbers",
    body: "Send both measurements on WhatsApp with a photo of the window. We advise exact yardage and quote within hours.",
    icon: "💬",
  },
];

export default function MeasurementGuide() {
  return (
    <section id="measure" className="bg-sand texture-linen">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Quick Tip</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-brown">How to Measure Your Windows</h2>
        <p className="mt-3 text-sm text-brown/70">
          Grab a tape measure — it takes 2 minutes and saves you a hundred questions.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-gold/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-lg text-gold">
                {step.icon}
              </div>
              <h3 className="mt-3 font-display text-base text-brown">
                <span className="text-gold">{i + 1}.</span> {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brown/75">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
