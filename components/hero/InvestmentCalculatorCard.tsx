import Image from "next/image";
import React from "react";

export function InvestmentCalculatorCard() {
  return (
    <section
      aria-label="Investment calculator"
      className="w-full max-w-[620px] rounded-[2.8rem] border border-secondary/70 bg-[#bed8ef]/70 p-8 shadow-[0_18px_40px_rgba(74,144,226,0.18)] backdrop-blur-sm"
    >
      <h2 className="text-center text-base font-semibold text-primary">Buy a car</h2>

      <div className="mt-6 grid grid-cols-[1.2fr_1fr] gap-8">
        <div className="space-y-9">
          <div>
            <div className="mb-2 flex items-center justify-between text-primary">
              <p className="text-xs font-medium">Car price</p>
              <p className="text-sm font-semibold">₹ 20L</p>
            </div>
            <div className="relative h-5">
              <div className="absolute top-1/2 h-2.5 w-full -translate-y-1/2 rounded-full bg-white/60" />
              <div className="absolute top-1/2 h-2.5 w-[34%] -translate-y-1/2 rounded-full bg-linear-to-r from-secondary to-primary" />
              <div className="absolute left-[34%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary bg-primary shadow-[0_0_0_3px_rgba(160,202,245,0.7)]" />
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-primary/65">
              <span>₹ 5L</span>
              <span>₹ 1cr</span>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-primary">
              <p className="text-xs font-medium">Time to buy</p>
              <p className="text-sm font-semibold">5 years</p>
            </div>
            <div className="relative h-5">
              <div className="absolute top-1/2 h-3 w-full -translate-y-1/2 rounded-full bg-white/60" />
              <div className="absolute top-1/2 h-3 w-[34%] -translate-y-1/2 rounded-full bg-linear-to-r from-secondary to-primary" />
              <div className="absolute left-[34%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary bg-primary shadow-[0_0_0_3px_rgba(160,202,245,0.7)]" />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-10  items-center justify-center gap-3 rounded-full border border-secondary bg-[#d4e7f7]/60 px-8 text-base font-semibold text-primary transition-colors hover:bg-[#d4e7f7]"
          >
            Let&apos;s get your car
            <span aria-hidden="true">
              <Image src="/a1.png" className="" alt="arrow right" width={20} height={20} />
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full rounded-[1.8rem] border border-secondary bg-white/55 px-8 py-3.5 text-center">
            <p className="text-sm font-medium text-primary">Lump Sum</p>
            <p className="mt-2 text-2xl font-semibold leading-none text-primary">
              ₹ 11.3L
            </p>
          </div>

          <p className="text-sm text-primary/75">OR</p>

          <div className="w-full rounded-[1.8rem] border border-secondary bg-white/55 px-8 py-3.5 text-center">
            <p className="text-sm font-medium text-primary">Monthly SIP</p>
            <p className="mt-2 text-2xl font-semibold leading-none text-primary">
              ₹ 24k
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

