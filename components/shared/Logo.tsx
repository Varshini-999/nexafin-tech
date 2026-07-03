import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

type LogoProps = {
  className?: string;
  /** Render only the mark, without the wordmark text. */
  markOnly?: boolean;
  href?: string;
};

/**
 * NexaFin Tech brand lockup: a circuit-styled "N" mark drawn in the
 * brand blue -> cyan -> green gradient, paired with the wordmark.
 */
export function Logo({ className, markOnly = false, href = "/" }: LogoProps) {
  const mark = (
    <span className="relative inline-flex size-10 shrink-0 items-center justify-center">
      <LogoMark className="size-10" />
      <span className="absolute inset-1 -z-10 rounded-full bg-electric/20 blur-lg" />
    </span>
  );

  const content = (
    <span className={cn("flex items-center gap-2.5", className)}>
      {mark}
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.05rem] font-semibold tracking-tight text-white">
            NexaFin <span className="text-gradient">Tech</span>
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            IT Solutions
          </span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="NexaFin Tech — home">
        {content}
      </Link>
    );
  }
  return content;
}
