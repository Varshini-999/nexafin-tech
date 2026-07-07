"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STORAGE_KEY = "nx-preloaded";
const EASE = [0.22, 1, 0.36, 1] as const;
const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

/**
 * NexaFin Tech brand preloader — a cinematic "logo construction" overlay
 * shown on first load, then slides away to reveal the homepage.
 *
 * - No hydration mismatch: initial state is always visible; sessionStorage is
 *   only read inside an effect (never during render).
 * - Repeat visits within a session skip instantly (see the blocking script in
 *   the root layout that sets `data-nx-preloaded` before paint).
 * - Scroll is locked while the overlay is active and released on exit.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(STORAGE_KEY);
    } catch {
      seen = false;
    }
    if (seen) {
      // Already hidden pre-paint via CSS; unmount off the synchronous path.
      const skip = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skip);
    }

    const root = document.documentElement;
    const prevHtml = root.style.overflow;
    const prevBody = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const hold = reduced ? 700 : 2200;
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setVisible(false);
    }, hold);

    return () => {
      window.clearTimeout(timer);
      root.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [reduced]);

  const releaseScroll = () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={releaseScroll}>
      {visible && (
        <motion.div
          id="nx-preloader"
          role="progressbar"
          aria-label="Loading NexaFin Tech"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#050B18]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: CURTAIN_EASE }}
        >
          <PreloaderBackground />

          <div className="relative z-10 flex flex-col items-center px-6">
            <div className="relative flex size-44 items-center justify-center sm:size-52">
              {/* Orbit ring */}
              {!reduced && (
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-electric/15"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.4 },
                    rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_3px_rgba(0,168,255,0.7)]" />
                  <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-tech shadow-[0_0_12px_3px_rgba(105,227,0,0.6)]" />
                </motion.div>
              )}

              {/* Energy pulse (fires just before the curtain lifts) */}
              {!reduced && (
                <motion.span
                  aria-hidden
                  className="absolute inset-2 rounded-full border border-tech/30"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [0.6, 1.8], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.1, delay: 1.7, ease: "easeOut" }}
                />
              )}

              {/* Static brand glow behind the mark */}
              <span
                aria-hidden
                className="absolute inset-6 rounded-full glow-blue opacity-60 blur-2xl"
              />

              <LogoReveal reduced={!!reduced} />
            </div>

            {/* Tagline */}
            <motion.p
              className="mt-9 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-slate-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            >
              Innovate. Integrate. Elevate.
            </motion.p>

            {/* Progress line */}
            <div className="relative mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-48">
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#008CFF,#00E0FF,#39D91D)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: reduced ? 0.6 : 2,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Background — grid, radial glows, faint circuit lines                 */
/* ------------------------------------------------------------------ */
function PreloaderBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_30%,#050B18_80%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue blur-[120px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: EASE }}
      />
      <motion.div
        className="absolute left-[30%] top-[62%] h-72 w-72 rounded-full glow-green blur-[110px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
      />
      <motion.div
        className="absolute right-[28%] top-[30%] h-64 w-64 rounded-full glow-cyan blur-[110px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <g stroke="#7DA0D2" strokeOpacity="0.12" strokeWidth="1">
          <motion.path
            d="M0 200 H360 V120"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
          />
          <motion.path
            d="M1200 640 H840 V720"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: EASE }}
          />
          <motion.path
            d="M0 620 H240 V540 H420"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
          />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The NexaFin Tech logo, revealed with a materialize + shine sweep      */
/* ------------------------------------------------------------------ */
const LOGO_SRC = "/nexafin-mark.png";

function LogoReveal({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="relative z-10 size-full"
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.86, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={
        reduced ? { duration: 0.3 } : { duration: 0.9, delay: 0.35, ease: EASE }
      }
    >
      <Image
        src={LOGO_SRC}
        alt="NexaFin Tech"
        fill
        priority
        sizes="208px"
        className="object-contain drop-shadow-[0_0_28px_rgba(0,168,255,0.3)]"
      />

      {/* Subtle highlight sweeping across the logo (masked to its shape) */}
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            WebkitMaskImage: `url('${LOGO_SRC}')`,
            maskImage: `url('${LOGO_SRC}')`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <motion.div
            className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            initial={{ x: "-40%", opacity: 0 }}
            animate={{ x: ["-40%", "360%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.1,
              delay: 1.15,
              ease: "easeInOut",
              repeat: 1,
              repeatDelay: 0.5,
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
