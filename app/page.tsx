import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <main
      className="relative overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
        height: "6372px",
      }}
    >

      <div className="relative z-10 bg-linear-to-b h-full from-[#F8FAFC] to-[#CFE6F7]">
        
        <HeroSection />
      </div>
    </main>
  );
}
