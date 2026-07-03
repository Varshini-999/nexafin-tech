import { cn } from "@/lib/utils";

type GlassCardProps = React.ComponentProps<"div"> & {
  /** Adds an interactive hover lift + glow border. */
  interactive?: boolean;
  glow?: "blue" | "green";
};

export function GlassCard({
  className,
  interactive = false,
  glow = "blue",
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-2xl",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-electric/35",
        interactive &&
          (glow === "green"
            ? "hover:glow-border-green"
            : "hover:glow-border"),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
