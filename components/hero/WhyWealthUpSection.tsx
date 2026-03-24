import React from "react";

const cards = [
  "Handpicked Investments",
  "Capitalizing on Opportunities",
  "Optimized for Tax Efficiency",
];

export function WhyWealthUpSection() {
  return (
    <section className="relative z-10 space-y-5 mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-primary ">
          Why Your Wealth Grows Faster With WealthUp
        </h2>
        <p className="mt-3 text-xl font-urbanist  text-primary/80">
          A smarter investment approach combining expert-curated opportunities,
          dynamic portfolio adjustments, and tax-efficient strategies.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((title) => (
          <article
            key={title}
            className="rounded-3xl border overflow-auto border-white/55 bg-white/12 p-4 pt-0 shadow-[0_12px_30px_rgba(110,150,190,0.18)] backdrop-blur-md"
          >
            <div className="rounded-b-2xl rounded-bl-2xl  bg-primary py-4 text-center text-lg font-semibold text-white backdrop-blur-md shadow-2xl shadow-primary/20">
              {title}
            </div>
            <div className="mt-4 h-44 rounded-2xl border border-white/35 bg-white/6" />
          </article>
        ))}
      </div>
    </section>
  );
}
