"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/Container";
import { GradientButton } from "@/components/shared/GradientButton";
import { heroSlides } from "@/data/heroSlides";
import { HeroVisual } from "./HeroVisuals";

const DURATION = 6000; // autoplay interval per slide (ms)
const TICK = 40;
const EASE = [0.22, 1, 0.36, 1] as const;

const trustItems = [
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: TrendingUp, label: "Scalable Technology" },
  { icon: HeartHandshake, label: "Client Focused" },
];

export function HeroSlider() {
  const reduced = useReducedMotion();
  const count = heroSlides.length;

  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [progress, setProgress] = React.useState(0);

  const progressRef = React.useRef(0);
  const pausedRef = React.useRef(false);

  const goTo = React.useCallback(
    (index: number, dir?: number) => {
      const next = (index + count) % count;
      setDirection(dir ?? (next > active ? 1 : -1));
      setActive(next);
      progressRef.current = 0;
      setProgress(0);
    },
    [active, count],
  );

  const next = React.useCallback(
    () => goTo(active + 1, 1),
    [active, goTo],
  );
  const prev = React.useCallback(
    () => goTo(active - 1, -1),
    [active, goTo],
  );

  // Autoplay with a progress-driven timer (also feeds the progress pills).
  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      progressRef.current += TICK / DURATION;
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setProgress(0);
        setDirection(1);
        setActive((a) => (a + 1) % count);
      } else {
        setProgress(progressRef.current);
      }
    }, TICK);
    return () => clearInterval(id);
  }, [reduced, count]);

  // Pause when the tab is hidden.
  React.useEffect(() => {
    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  // Touch swipe.
  const touchX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const slide = heroSlides[active];

  const textVariants: Variants = {
    hidden: (dir: number) => ({ opacity: 0, x: reduced ? 0 : dir * 44 }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: EASE,
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduced ? 0 : dir * -30,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  const visualVariants: Variants = {
    hidden: (dir: number) => ({
      opacity: 0,
      x: reduced ? 0 : dir * 60,
      scale: reduced ? 1 : 0.92,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: EASE },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduced ? 0 : dir * -40,
      scale: reduced ? 1 : 0.96,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="NexaFin Tech highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative flex min-h-[90vh] flex-col overflow-hidden pt-16 outline-none focus-visible:ring-1 focus-visible:ring-electric/40 focus-visible:ring-inset"
    >
      <HeroBackground glow={slide.glow} />

      {/* Slide content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center py-12 lg:py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text */}
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-start"
            >
              <motion.span
                variants={childVariants}
                className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-soft"
              >
                <span className="size-1.5 rounded-full bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.6)]" />
                {slide.eyebrow}
              </motion.span>

              <motion.h1
                variants={childVariants}
                className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                <Headline text={slide.headline} highlight={slide.highlight} />
              </motion.h1>

              <motion.p
                variants={childVariants}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                {slide.description}
              </motion.p>

              <motion.div
                variants={childVariants}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <GradientButton href={slide.primary.href} size="lg">
                  {slide.primary.label}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </GradientButton>
                <GradientButton
                  href={slide.secondary.href}
                  variant="outline"
                  size="lg"
                >
                  <Play className="size-4" />
                  {slide.secondary.label}
                </GradientButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Visual */}
          <div className="hidden justify-center md:flex lg:justify-end">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={visualVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex w-full justify-center lg:justify-end"
              >
                <HeroVisual visual={slide.visual} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>

        {/* Controls row */}
        <Container className="mt-10 flex items-center gap-4 lg:mt-14">
          <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                onClick={() => goTo(i)}
                className={cn(
                  "relative h-2 overflow-hidden rounded-full transition-all duration-300",
                  i === active
                    ? "w-12 bg-white/10"
                    : "w-2.5 bg-white/20 hover:bg-white/40",
                )}
              >
                {i === active && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#008CFF,#39D91D)]"
                    style={{ width: `${(reduced ? 1 : progress) * 100}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          <span className="ml-1 font-mono text-xs text-muted-foreground tabular-nums">
            <span className="text-white">
              {String(active + 1).padStart(2, "0")}
            </span>{" "}
            / {String(count).padStart(2, "0")}
          </span>
        </Container>
      </div>

      {/* Desktop arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-4 lg:flex">
        <ArrowButton direction="prev" onClick={prev} />
        <ArrowButton direction="next" onClick={next} />
      </div>

      <TrustStrip />
    </section>
  );
}

function Headline({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-gradient">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="glass pointer-events-auto inline-flex size-12 items-center justify-center rounded-full text-slate-200 transition-all duration-300 hover:border-electric/40 hover:text-white hover:glow-border"
    >
      <Icon className="size-5" />
    </button>
  );
}

function HeroBackground({
  glow,
}: {
  glow: { blue: number; cyan: number; green: number };
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      <motion.div
        className="absolute -top-40 left-[46%] h-[38rem] w-[46rem] -translate-x-1/2 rounded-full glow-blue blur-[140px]"
        animate={{ opacity: glow.blue }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[8%] top-1/3 h-96 w-96 rounded-full glow-cyan blur-[130px]"
        animate={{ opacity: glow.cyan }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-[6%] h-[26rem] w-[26rem] rounded-full glow-green blur-[140px]"
        animate={{ opacity: glow.green }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Floating data particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-electric/50"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -16, 0], opacity: [0.25, 0.7, 0.25] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

const PARTICLES = [
  { left: "18%", top: "28%", size: 4, duration: 6, delay: 0 },
  { left: "32%", top: "68%", size: 3, duration: 7, delay: 1 },
  { left: "58%", top: "22%", size: 3, duration: 6.5, delay: 0.6 },
  { left: "72%", top: "60%", size: 5, duration: 8, delay: 1.4 },
  { left: "86%", top: "34%", size: 3, duration: 7.5, delay: 0.3 },
];

function TrustStrip() {
  return (
    <div className="relative z-10 border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-4 py-5 md:grid-cols-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-electric/20 bg-electric/[0.07] text-electric-soft">
              <Icon className="size-4" />
            </span>
            <span className="text-sm font-medium text-slate-200">{label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
