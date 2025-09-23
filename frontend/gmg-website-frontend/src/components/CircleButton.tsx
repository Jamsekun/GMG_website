import * as React from "react";
import type { LucideIcon } from "lucide-react";

interface CircleButtonProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void; // optional custom handler
  className?: string;   // optional extra classes
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  title,
  icon: Icon,
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
    // Placeholder logic: replace with real action later
    alert(`You clicked: ${title}`);
  };

  return (
    <button
      type="button"
      aria-label={title}
      onClick={handleClick}
      className={[
        // Layout: perfectly circular, fluid size for mobile → laptop
        "group relative isolate grid place-items-center aspect-square",
        "w-[clamp(12rem,48vw,28rem)]", // ~192px → 672px depending on viewport
        "rounded-full select-none",
        // Base styling
        "bg-[#6C3F12] border-8 border-[#FFEAD4]",
        "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        // Smooth modern motion
        "transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)]",
        // Hover/active animations
        "hover:scale-[0.96] active:scale-[0.9]",
        // Focus accessibility
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFEAD4]/60",
        className,
      ].join(" ")}
    >
      {/* Soft glow aura */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(65%_65%_at_30%_30%,rgba(255,234,212,0.25)_0%,transparent_60%)] blur-sm opacity-70 group-hover:opacity-90 transition-opacity"
      />

      {/* Click ping effect */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-[#FFEAD4]/60 opacity-0 group-active:opacity-100 group-active:animate-ping"
      />

      {/* Content */}
      <div className="relative z-10 grid place-items-center gap-2">
        <Icon
          className="text-[#FFEAD4] drop-shadow-sm"
          size={48}
        />
        <h3
          className="text-center font-semibold tracking-wide text-[#FFEAD4]
                     text-2xl md:text-3xl lg:text-4xl"
        >
          {title}
        </h3>
      </div>
    </button>
  );
};
