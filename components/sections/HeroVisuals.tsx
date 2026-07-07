"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Cpu,
  Database,
  Lock,
  ShieldCheck,
  Activity,
  GitBranch,
  Terminal,
} from "lucide-react";
import type { HeroVisualKey } from "@/data/heroSlides";

/** Shared square stage so every slide's visual shares the same footprint. */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-square w-full max-w-[32rem]">{children}</div>
  );
}

export function HeroVisual({ visual }: { visual: HeroVisualKey }) {
  if (visual === "dashboard") return <DashboardVisual />;
  if (visual === "network") return <NetworkVisual />;
  return <CoreVisual />;
}

/* ------------------------------------------------------------------ */
/* Slide 1 — glowing N core, orbit rings, floating data blocks         */
/* ------------------------------------------------------------------ */
function CoreVisual() {
  return (
    <Stage>
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue opacity-50 blur-[90px]" />
      <div className="absolute right-6 top-8 h-40 w-40 rounded-full glow-green opacity-40 blur-[70px]" />
      <div className="absolute bottom-8 left-6 h-40 w-40 rounded-full glow-cyan opacity-40 blur-[70px]" />

      {/* Orbit rings */}
      <motion.div
        aria-hidden
        className="absolute inset-4 rounded-full border border-electric/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_3px_rgba(0,168,255,0.7)]" />
        <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-tech shadow-[0_0_12px_3px_rgba(105,227,0,0.6)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-14 rounded-full border border-cyan/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1 size-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,224,255,0.6)]" />
      </motion.div>

      {/* Holographic N core */}
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        className="relative z-10 h-full w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hv-core-n" x1="150" y1="270" x2="260" y2="130">
            <stop stopColor="#00A8FF" />
            <stop offset="0.5" stopColor="#00E0FF" />
            <stop offset="1" stopColor="#69E300" />
          </linearGradient>
          <linearGradient id="hv-core-line" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#00A8FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#69E300" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="hv-core-plate" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#0B2036" />
            <stop offset="1" stopColor="#060E1C" />
          </radialGradient>
        </defs>

        <g stroke="url(#hv-core-line)" strokeWidth="1.5">
          <path d="M40 120 H110 V70" />
          <path d="M360 300 H280 V350" />
          <path d="M40 300 H90 V250 H150" />
          <path d="M360 110 H300 V160 H250" />
        </g>
        <g fill="#16C8FF">
          <circle cx="40" cy="120" r="3" />
          <circle cx="40" cy="300" r="3" />
          <circle cx="150" cy="250" r="3" />
        </g>
        <g fill="#69E300">
          <circle cx="360" cy="300" r="3" />
          <circle cx="360" cy="110" r="3" />
          <circle cx="250" cy="160" r="3" />
        </g>

        <rect
          x="120"
          y="110"
          width="160"
          height="180"
          rx="24"
          fill="url(#hv-core-plate)"
          stroke="url(#hv-core-n)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        <rect
          x="120"
          y="110"
          width="160"
          height="180"
          rx="24"
          fill="#00A8FF"
          fillOpacity="0.04"
        />
        <path
          d="M155 255 V150 L245 255 V150"
          stroke="url(#hv-core-n)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="155" cy="150" r="6" fill="#00A8FF" />
        <circle cx="245" cy="255" r="6" fill="#69E300" />
      </motion.svg>

      {/* Floating data blocks */}
      <FloatBlock className="-left-2 top-16 sm:-left-4" delay={0} label="Uptime">
        99.9<span className="text-tech">%</span>
      </FloatBlock>
      <FloatBlock
        className="-right-2 bottom-20 sm:-right-4"
        delay={0.6}
        label="Deployments"
      >
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.6)]" />
          Secure
        </span>
      </FloatBlock>
    </Stage>
  );
}

function FloatBlock({
  className,
  delay,
  label,
  children,
}: {
  className?: string;
  delay: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`glass absolute rounded-xl px-3.5 py-2.5 shadow-lg ${className ?? ""}`}
      animate={{ y: [0, delay ? 8 : -8, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-lg font-semibold text-white">{children}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 2 — layered dashboard, code window, API nodes, status pills   */
/* ------------------------------------------------------------------ */
function DashboardVisual() {
  return (
    <Stage>
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full glow-cyan opacity-45 blur-[90px]" />
      <div className="absolute bottom-6 right-8 h-40 w-40 rounded-full glow-blue opacity-35 blur-[80px]" />

      {/* Connection lines behind panels */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#2CA8E0" strokeOpacity="0.35" strokeWidth="1.5">
          <path d="M300 120 H340 V210" />
          <path d="M96 300 V330 H210" />
        </g>
      </svg>

      {/* Main app window */}
      <motion.div
        className="glass-strong absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 shadow-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="size-2.5 rounded-full bg-tech/80" />
          <span className="ml-3 flex items-center gap-1.5 text-[0.62rem] font-medium text-muted-foreground">
            <Terminal className="size-3" /> nexafin // build
          </span>
        </div>

        {/* Faux code lines */}
        <div className="space-y-2 py-4">
          <CodeLine widths={[36, 60]} colors={["bg-electric/60", "bg-tech/50"]} />
          <CodeLine
            indent
            widths={[28, 44, 24]}
            colors={["bg-cyan/60", "bg-white/25", "bg-electric/40"]}
          />
          <CodeLine
            indent
            widths={[40, 30]}
            colors={["bg-tech/50", "bg-white/20"]}
          />
          <CodeLine widths={[24, 52]} colors={["bg-electric/60", "bg-cyan/40"]} />
        </div>

        {/* Mini metric row */}
        <div className="flex items-end justify-between gap-2 border-t border-white/10 pt-3">
          {[38, 62, 46, 78, 56, 88].map((h, i) => (
            <motion.span
              key={i}
              className="w-2 flex-1 rounded-sm bg-[linear-gradient(180deg,#00E0FF,#008CFF)]"
              initial={{ height: 6 }}
              animate={{ height: [6, h, h * 0.7, h] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              style={{ maxHeight: 40 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Status pills card */}
      <motion.div
        className="glass absolute left-1 top-6 rounded-xl px-3 py-2.5 shadow-lg sm:left-0"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-1.5">
          <StatusPill color="tech" label="Secure" />
          <StatusPill color="electric" label="Scalable" />
          <StatusPill color="cyan" label="Live" pulse />
        </div>
      </motion.div>

      {/* API node card */}
      <motion.div
        className="glass absolute bottom-6 right-1 flex items-center gap-2.5 rounded-xl px-3.5 py-3 shadow-lg sm:right-0"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="inline-flex size-9 items-center justify-center rounded-lg border border-electric/25 bg-electric/10 text-electric-soft">
          <GitBranch className="size-4" />
        </span>
        <div>
          <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground">
            API
          </p>
          <p className="text-sm font-semibold text-white">Connected</p>
        </div>
      </motion.div>
    </Stage>
  );
}

function CodeLine({
  widths,
  colors,
  indent,
}: {
  widths: number[];
  colors: string[];
  indent?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${indent ? "pl-5" : ""}`}>
      {widths.map((w, i) => (
        <span
          key={i}
          className={`h-2 rounded-full ${colors[i]}`}
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

function StatusPill({
  color,
  label,
  pulse,
}: {
  color: "tech" | "electric" | "cyan";
  label: string;
  pulse?: boolean;
}) {
  const dot = {
    tech: "bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.5)]",
    electric: "bg-electric shadow-[0_0_8px_2px_rgba(0,168,255,0.5)]",
    cyan: "bg-cyan shadow-[0_0_8px_2px_rgba(0,224,255,0.5)]",
  }[color];
  return (
    <span className="flex items-center gap-2 rounded-full bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-200">
      <span className={`relative size-1.5 rounded-full ${dot}`}>
        {pulse && (
          <motion.span
            className={`absolute inset-0 rounded-full ${dot}`}
            animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </span>
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 3 — shield core, pulse rings, connected cloud/AI nodes         */
/* ------------------------------------------------------------------ */
function NetworkVisual() {
  const nodes = [
    { icon: Cloud, className: "left-2 top-10 sm:left-0", delay: 0 },
    { icon: Database, className: "right-2 top-16 sm:right-0", delay: 0.4 },
    { icon: Cpu, className: "bottom-14 left-6 sm:left-2", delay: 0.8 },
    { icon: Lock, className: "bottom-8 right-8 sm:right-4", delay: 1.2 },
  ];

  return (
    <Stage>
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full glow-green opacity-45 blur-[90px]" />
      <div className="absolute left-8 top-8 h-40 w-40 rounded-full glow-cyan opacity-35 blur-[80px]" />

      {/* Integration lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="url(#net-line)" strokeWidth="1.5" strokeOpacity="0.5">
          <path d="M200 200 L90 90" />
          <path d="M200 200 L320 110" />
          <path d="M200 200 L110 300" />
          <path d="M200 200 L300 310" />
        </g>
        <defs>
          <linearGradient id="net-line" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#00E0FF" />
            <stop offset="1" stopColor="#69E300" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tech/25"
          animate={{ scale: [0.7, 1.9], opacity: [0.5, 0] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Shield core */}
      <motion.div
        className="glass-strong absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl glow-border"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck className="size-12 text-tech" />
        <span className="absolute inset-0 -z-10 rounded-3xl bg-tech/15 blur-xl" />
      </motion.div>

      {/* Orbiting system nodes */}
      {nodes.map(({ icon: Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`glass absolute flex size-12 items-center justify-center rounded-xl text-electric-soft shadow-lg ${className}`}
          animate={{ y: [0, i % 2 ? 8 : -8, 0] }}
          transition={{
            duration: 5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon className="size-5" />
        </motion.div>
      ))}

      {/* Live activity chip */}
      <motion.div
        className="glass absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-3.5 py-1.5 shadow-lg"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="size-3.5 text-tech" />
        <span className="text-xs font-medium text-slate-200">
          Systems Connected
        </span>
      </motion.div>
    </Stage>
  );
}
