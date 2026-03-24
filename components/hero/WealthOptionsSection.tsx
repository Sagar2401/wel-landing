import React from "react";
import FileIcon from "../svgs/FileIcon";
import BagIcon from "../svgs/BagIcon";
import Arrow from "../svgs/Arrow";
type SvgIconProps = {
  className?: string;
  transform?: string;
};
type Option = {
  title: string;
  icon: React.ComponentType<SvgIconProps>;
  transform: string;
  description: string;
  titleClass: string;
};

const options: Option[] = [
  {
    title: "Mutual Funds",
    transform: "matrix(0.857493 -0.514496 0.773957 0.633238 0 12.8624)",
    icon: Arrow,
    description:
      "Professionally managed portfolios designed to grow your wealth over the long term. Diversified across sectors and asset classes to balance risk and returns.",
    titleClass: "top-[22px] left-[68px]",
  },
  {
    title: "Bonds",
    icon: FileIcon,
    transform: "matrix(0.857493 -0.514496 0.773957 0.633238 0 12.8624)",
    description:
      "Stable income-generating investments for predictable and steady returns. Ideal for investors seeking lower volatility and consistent cash flow.",
    titleClass: "top-[36px] left-[68px]",
  },
  {
    title: "Invoice Discounting",
    icon: BagIcon,
    transform: "matrix(0.857493 -0.514496 0.773957 0.633238 0 12.8624)",
    titleClass: "top-[5px] left-[70px] w-[100px] text-center",
    description:
      "Access short-term investment opportunities backed by verified business invoices. Earn attractive returns while supporting real business transactions.",
  },
];

export function WealthOptionsSection() {
  return (
    <section className="relative z-10 mx-auto w-full space-y-5 max-w-6xl px-6 pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-primary ">
          Multiple ways to grow your wealth
        </h2>
        <p className="mt-3 text-xl font-urbanist  text-primary/80">
          Diversified investment options selected and optimized by WealthUp.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {options.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="relative w-[220px] h-[140px]">
              <span
                className={` 
                absolute top-14 left-8 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full ${idx === 0 ? "bg-white/70 border-white/70 bg-white/20" : "border-secondary/50 bg-white/55"} border border-secondary text-base`}
              >
                {Icon && <Icon transform={item.transform} />}
              </span>
              <span
                className={`leading-tight absolute  z-10 ${idx === 0 ? "text-white" : "text-primary"} ${item.titleClass} 
              [transform:matrix(0.86,-0.51,0.77,0.63,0,0)]`}
              >
                {item.title}
              </span>
              <div
                className={`absolute w-[200px] h-[100px] ${idx === 0 ? "bg-[#294F7C]" : "bg-[#F8FAFC] border border-secondary/60"} rounded-[20px]
              [transform:matrix(0.86,-0.51,0.77,0.63,0,0)]`}
              ></div>

              <div
                className={`absolute w-[200px]  h-[100px] -top-2 ${idx === 0 ? "bg-[#294F7C]" : "bg-[#F8FAFC] border border-secondary/60"} rounded-[20px]
              backdrop-blur-md
              [transform:matrix(0.86,-0.51,0.77,0.63,0,0)]`}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-secondary/60 bg-[#c2ddf3]/55 shadow-[0_12px_30px_rgba(74,144,226,0.15)] backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {options.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={[
                  "p-6 md:p-7 font-urbanist",
                  idx === 0
                    ? "bg-primary text-white"
                    : "border-t border-white/40 text-primary md:border-t-0 md:border-l",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "inline-flex h-9 w-9 items-center justify-center rounded-full border text-base",
                      idx === 0
                        ? "border-white/70 bg-white/20"
                        : "border-secondary/50 bg-white/55",
                    ].join(" ")}
                  >
                    <Icon />
                  </span>
                  <h3 className="text-xl font-semibold ">{item.title}</h3>
                </div>
                <p
                  className={[
                    "mt-4 text-base leading-6",
                    idx === 0 ? "text-white/90" : "text-primary/85",
                  ].join(" ")}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
