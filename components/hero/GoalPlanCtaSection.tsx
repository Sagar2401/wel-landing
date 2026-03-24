import React from "react";

export function GoalPlanCtaSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-4xl border border-white/55  px-8 py-8 shadow-[0_14px_32px_rgba(120,160,200,0.18)] backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/Perlin.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute -left-5 -top-8 h-[246px] w-[485px] rounded-full bg-[rgba(74,144,226,0.2)] blur-[32px]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-4xl font-semibold tracking-tight text-primary sm:text-[46px]">
              Your Goals Deserve a Plan
            </h3>
            <p className="mt-2 font-urbanist text-lg text-primary/80">
              Start your personalized investment roadmap in minutes.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-16 min-w-[360px] items-center justify-center gap-3 rounded-full bg-linear-to-r from-secondary to-primary px-8 text-xl font-semibold font-urbanist text-white shadow-[0_12px_24px_rgba(41,79,124,0.34)] transition-transform hover:-translate-y-0.5"
          >
            Create your investment plan
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

