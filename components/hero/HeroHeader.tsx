import Image from "next/image";

export function HeroHeader() {
  return (
    <header className="relative z-10 mx-auto w-full  pt-5 rounded-b-xl border-b border-sky-200/70">
      <div className="flex items-center justify-between px-6  max-w-6xl w-full mx-auto  pb-4">
        <Image
          src="/logo.png"
          alt="Wealthup logo"
          width={112}
          height={32}
          priority
          className="h-8 w-auto object-contain"
        />

        <button
          type="button"
          className="rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur transition-colors hover:bg-white"
        >
          Login
        </button>
      </div>
    </header>
  );
}

