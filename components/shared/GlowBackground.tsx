import { cn } from "@/lib/utils";

type GlowBackgroundProps = {
  className?: string;
  /** Show the subtle circuit/data grid overlay. */
  grid?: boolean;
  variant?: "default" | "muted";
};

/**
 * Decorative, non-interactive background layer: soft blue/cyan/green
 * glows over an optional data grid. Sits behind section content.
 */
export function GlowBackground({
  className,
  grid = true,
  variant = "default",
}: GlowBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {grid && <div className="absolute inset-0 bg-grid bg-grid-fade" />}

      <div
        className={cn(
          "absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[120px]",
          variant === "muted" ? "glow-blue opacity-40" : "glow-blue opacity-60",
        )}
      />
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full glow-cyan opacity-30 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full glow-green opacity-25 blur-[120px]" />
    </div>
  );
}
