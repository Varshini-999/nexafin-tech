import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * NexaFin Tech "N" mark — the official brand logo asset.
 * Place the transparent-background PNG at `public/nexafin-mark.png`.
 * next/image handles optimization and responsive sizing; the display
 * size is controlled by the `className` passed from `Logo`.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/nexafin-mark.png"
      alt="NexaFin Tech logo"
      width={96}
      height={102}
      className={cn("object-contain", className)}
    />
  );
}
