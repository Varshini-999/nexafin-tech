import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "group relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: solid blue -> green gradient with soft glow
        primary:
          "bg-[linear-gradient(100deg,#008CFF_0%,#00C8D6_55%,#39D91D_100%)] text-[#03121f] font-semibold shadow-[0_8px_30px_-8px_rgba(0,168,255,0.55)] hover:shadow-[0_10px_38px_-6px_rgba(0,168,255,0.7)] hover:brightness-110 active:translate-y-px",
        // Secondary / outline: glassy with gradient hairline
        outline:
          "glass text-white hover:border-electric/40 hover:bg-white/[0.04] active:translate-y-px",
        ghost:
          "text-slate-200 hover:bg-white/[0.05] hover:text-white active:translate-y-px",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type GradientButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof gradientButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function GradientButton({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: GradientButtonProps) {
  const classes = cn(gradientButtonVariants({ variant, size }), className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
