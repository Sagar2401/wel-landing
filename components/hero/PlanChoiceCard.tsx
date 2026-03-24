import Image from "next/image";
import React from "react";

export type PlanChoiceCardProps = {
  title: string;
  icon: string;
  selected?: boolean;
};

export function PlanChoiceCard({
  title,
  icon,
  selected = false,
}: PlanChoiceCardProps) {
  const isImageIcon = icon.trim().startsWith("/");

  return (
    <button
      type="button"
      className={[
        "flex items-center justify-between gap-3 w-[180px] h-[100px] rounded-2xl border px-4 py-3 text-left transition-all",
        "bg-white/20 backdrop-blur-md border-white/60 shadow-[0_10px_30px_rgba(148,163,184,0.25)]",
        "hover:bg-white/25 hover:border-primary border hover:shadow-[0_14px_34px_rgba(148,163,184,0.32)]",
       
      ].join(" ")}
      aria-pressed={selected}
    >
      {isImageIcon ? (
        <Image
          src={icon}
          alt={title}
          width={90}
          height={40}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <span className="text-4xl leading-none" aria-hidden="true">
          {icon}
        </span>
      )}
      <span
        className={[
          "text-xl font-semibold tracking-tight",
          selected ? "text-slate-900" : "text-slate-700",
        ].join(" ")}
      >
        {title}
      </span>
    </button>
  );
}

