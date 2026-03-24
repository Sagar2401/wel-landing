import Image from "next/image";
import React from "react";
import { BackedBySection } from "./BackedBySection";
import { HeroHeader } from "./HeroHeader";
import { InvestmentCalculatorCard } from "./InvestmentCalculatorCard";
import { PlanChoiceCard } from "./PlanChoiceCard";
import { WealthOptionsSection } from "./WealthOptionsSection";
import { WhyWealthUpSection } from "./WhyWealthUpSection";
import { GoalPlanCtaSection } from "./GoalPlanCtaSection";
import { HowItWorksSection } from "./HowItWorksSection";

const planChoices = [
  { id: "car", title: "Car", icon: "/a1.png" ,width: 96, height: 41},
  { id: "travel", title: "Travel", icon: "/a2.png" ,width: 72, height: 37},
  { id: "home", title: "Home", icon: "/a3.png" ,width: 56, height: 55 },
  { id: "custom", title: "Custom", icon: "/a4.png" ,width: 60, height: 60 },
] as const;

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Subtle ambient blobs to match the soft hero background */}
      <HeroHeader />


      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <section aria-label="Hero content" className="max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/25 px-3 py-0.5 text-sm italic text-slate-600 shadow-[0_8px_24px_rgba(148,163,184,0.2)] backdrop-blur-md">
              <div className="flex -space-x-2.5">
                {[
                 '/1.jpg',
                 '/2.jpg',
                 '/3.jpg',
                ].map((c) => (
                  <Image
                    key={c}
                    src={c}
                    alt="Trusted by over 2000 users"
                    width={25}
                    height={25}
                    className=" rounded-full border-2 border-white/90 shadow-sm object-cover"
                  />
                ))}
              </div>
              <span className="pr-4 font-medium font-urbanist">Trusted by over 2000 users</span>
            </div>

            <h1 className="mt-5 text-4xl max-w-[494px] font-semibold tracking-tight text-primary sm:text-[56px]">
             Plan your life goals.  <span className=" text-secondary">We’ll plan the investments.</span>
            </h1>

            <p className="mt-4 max-w-md text-xl font-urbanist  text-primary">
             WealthUp helps you achieve goals through personalised goal based investing.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-12 sm:grid-cols-2 max-w-sm">
              {planChoices.map((p) => (
                <PlanChoiceCard
                  key={p.id}
                  title={p.title}
                  icon={p.icon}
                />
              ))}
            </div>
          </section>

          <section className="relative flex flex-col items-center lg:items-end">
            <div className="w-full flex justify-center lg:justify-end">
              <InvestmentCalculatorCard />
            </div>

            {/* Use the provided design screenshot as a cropped illustration source */}
            <div className="relative mt-6 h-[180px] w-[507px] max-w-full overflow-hidden">
              <Image
                src="/car.png"
                alt="Car illustration"
                fill
                priority
                className="object-cover object-[68%_68%]"
              />
            </div>
          </section>
        </div>
      </main>

      <BackedBySection />
      <WealthOptionsSection />
      <WhyWealthUpSection />
      <GoalPlanCtaSection />
      <HowItWorksSection />
    </div>
  );
}

