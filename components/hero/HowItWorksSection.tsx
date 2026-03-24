import Image from "next/image";
import React from "react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
  showPhone?: boolean;
  showProgress?: boolean;
};

const steps: Step[] = [
  {
    title: "Define Your Goal",
    icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 12.75C22.5 14.9016 21.8016 16.8891 20.625 18.5016L26.5594 24.4406C27.1453 25.0266 27.1453 25.9781 26.5594 26.5641C25.9734 27.15 25.0219 27.15 24.4359 26.5641L18.5016 20.625C16.8891 21.8016 14.9016 22.5 12.75 22.5C7.36406 22.5 3 18.1359 3 12.75C3 7.36406 7.36406 3 12.75 3C18.1359 3 22.5 7.36406 22.5 12.75ZM7.875 13.125V16.125C7.875 16.7484 8.37656 17.25 9 17.25C9.62344 17.25 10.125 16.7484 10.125 16.125V13.125C10.125 12.5016 9.62344 12 9 12C8.37656 12 7.875 12.5016 7.875 13.125ZM11.625 8.625V16.125C11.625 16.7484 12.1266 17.25 12.75 17.25C13.3734 17.25 13.875 16.7484 13.875 16.125V8.625C13.875 8.00156 13.3734 7.5 12.75 7.5C12.1266 7.5 11.625 8.00156 11.625 8.625ZM15.375 11.625V16.125C15.375 16.7484 15.8766 17.25 16.5 17.25C17.1234 17.25 17.625 16.7484 17.625 16.125V11.625C17.625 11.0016 17.1234 10.5 16.5 10.5C15.8766 10.5 15.375 11.0016 15.375 11.625Z" fill="#294F7C"/>
</svg>
,
    description:
      "Start by defining what you want to achieve whether it's buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we'll create a personalized investment plan to help you get there.",
    showPhone: true,
    showProgress: true,
  },
  {
    title: "Setup Your Investment Account",
    icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2011_865)">
<path d="M9.00015 6.75C10.4486 6.75 11.6252 5.57344 11.6252 4.125C11.6252 2.67656 10.4486 1.5 9.00015 1.5C7.55171 1.5 6.37515 2.67656 6.37515 4.125C6.37515 5.57344 7.55171 6.75 9.00015 6.75ZM8.25015 27V19.5C8.25015 19.0875 8.58765 18.75 9.00015 18.75C9.41265 18.75 9.75015 19.0875 9.75015 19.5V27C9.75015 27.8297 10.4205 28.5 11.2502 28.5C12.0798 28.5 12.7502 27.8297 12.7502 27V11.25H18.7502C19.5798 11.25 20.2502 10.5797 20.2502 9.75C20.2502 8.92031 19.5798 8.25 18.7502 8.25H18.0002V6H27.0001V15H18.0002V13.5H15.0002V15.75C15.0002 16.9922 16.008 18 17.2502 18H27.7501C28.9923 18 30.0001 16.9922 30.0001 15.75V5.25C30.0001 4.00781 28.9923 3 27.7501 3H17.2502C16.008 3 15.0002 4.00781 15.0002 5.25V8.25H9.24859C7.11109 8.25 5.10015 9.2625 3.82984 10.9781L0.670463 15.2297C0.178275 15.8953 0.314213 16.8328 0.979838 17.3297C1.64546 17.8266 2.58296 17.6859 3.07984 17.0203L5.25015 14.0953V27C5.25015 27.8297 5.92046 28.5 6.75015 28.5C7.57984 28.5 8.25015 27.8297 8.25015 27Z" fill="#294F7C"/>
</g>
<defs>
<clipPath id="clip0_2011_865">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
,
    description:
      "Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.",
  },
];

function ProgressBars() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="h-2.5 w-44 rounded-full bg-primary" />
      <span className="h-2.5 w-10 rounded-full bg-white/60" />
      <span className="h-2.5 w-10 rounded-full bg-white/60" />
      <span className="h-2.5 w-10 rounded-full bg-white/60" />
      <span className="h-2.5 w-10 rounded-full bg-white/60" />
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          How it Works?
        </h2>
        <p className="mt-3 font-urbanist text-lg text-primary/80">
          India&apos;s most intelligent investment platform
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-3xl font-urbanist overflow-hidden border border-secondary/50 bg-[#F1F0F2]  shadow-[0_14px_34px_rgba(110,150,190,0.16)] backdrop-blur-sm"
          >
            <div className="flex h-[350px]   items-start justify-between">
              <div className="max-w-[650px] p-6">
                <span className="inline-flex h-15 w-15 items-center justify-center rounded-full border border-secondary/45 bg-[#bcd9f0]/80 text-2xl text-primary">
                  {step.icon}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-xl leading-8 text-primary/85">
                  {step.description}
                </p>
                {step.showProgress && <ProgressBars />}
              </div>

              <div className="w-[455px] h-full flex flex-1 bg-linear-to-l from-[#bcd9f0]/70 via-[#bcd9f0]/70  to-[#F1F0F2] justify-center items-center"> {step.showPhone && <Image src="/Rectangle.png" alt="phone" width={204} height={310} />
              }
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

