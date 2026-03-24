import Image from "next/image";

const backedByLogos = [
  { src: "/b4.png", alt: "NVIDIA", width: 78, height: 30 },
  { src: "/b6.png", alt: "Partner 6", width: 79 , height: 30},
  { src: "/b1.png", alt: "Partner 1", width: 150, height: 30 },
  { src: "/b5.png", alt: "Razorpay", width: 40, height: 30 },
  { src: "/b3.png", alt: "Startup India", width: 132, height: 30},
  { src: "/b2.png", alt: "Partner 2", width: 80 , height: 30 },
  { src: "/b7.png", alt: "Wadhwani Foundation", width: 60, height: 30 },
];

export function BackedBySection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl mt-20 px-5 pb-16">
      <div className="rounded-3xl border border-white/50 flex flex-col items-center gap-5 bg-white/15 px-16 py-8 shadow-[0_14px_34px_rgba(120,160,200,0.18)] backdrop-blur-md">
        <p className="text-center text-base font-semibold text-primary">Backed By</p>

        <div className="flex flex-wrap items-center justify-between w-full gap-x-8 gap-y-5">
          {backedByLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className=" object-contain opacity-95"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

