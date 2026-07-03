import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.07] px-3.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-electric-soft">
          <span className="size-1.5 rounded-full bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.6)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.65rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
