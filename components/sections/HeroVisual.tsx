"use client";

import { motion } from "motion/react";

/**
 * Abstract, futuristic hero visual built entirely from SVG + CSS.
 * A glowing N-inspired core sits on a circuit board with data nodes,
 * orbiting glass panels, and soft blue/green/cyan glows. No image files.
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[34rem]">
      {/* Ambient glows */}
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue opacity-50 blur-[90px]" />
      <div className="absolute right-6 top-10 h-40 w-40 rounded-full glow-green opacity-40 blur-[70px]" />
      <div className="absolute bottom-8 left-6 h-40 w-40 rounded-full glow-cyan opacity-40 blur-[70px]" />

      {/* Rotating ring */}
      <motion.div
        aria-hidden
        className="absolute inset-6 rounded-full border border-electric/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_3px_rgba(0,168,255,0.7)]" />
        <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-tech shadow-[0_0_12px_3px_rgba(105,227,0,0.6)]" />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-16 rounded-full border border-cyan/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1 size-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,224,255,0.6)]" />
      </motion.div>

      {/* Core SVG scene */}
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        className="relative z-10 h-full w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hv-n" x1="140" y1="270" x2="270" y2="130">
            <stop stopColor="#00A8FF" />
            <stop offset="0.5" stopColor="#00E0FF" />
            <stop offset="1" stopColor="#69E300" />
          </linearGradient>
          <linearGradient id="hv-line" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#00A8FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#69E300" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="hv-core" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#0B2036" />
            <stop offset="1" stopColor="#060E1C" />
          </radialGradient>
        </defs>

        {/* Circuit traces */}
        <g stroke="url(#hv-line)" strokeWidth="1.5">
          <path d="M40 120 H110 V70" />
          <path d="M360 300 H280 V350" />
          <path d="M40 300 H90 V250 H150" />
          <path d="M360 110 H300 V160 H250" />
        </g>
        <g fill="#16C8FF">
          <circle cx="40" cy="120" r="3" />
          <circle cx="110" cy="70" r="3" />
          <circle cx="40" cy="300" r="3" />
          <circle cx="150" cy="250" r="3" />
        </g>
        <g fill="#69E300">
          <circle cx="360" cy="300" r="3" />
          <circle cx="280" cy="350" r="3" />
          <circle cx="360" cy="110" r="3" />
          <circle cx="250" cy="160" r="3" />
        </g>

        {/* Hex/glass core plate */}
        <rect
          x="120"
          y="110"
          width="160"
          height="180"
          rx="24"
          fill="url(#hv-core)"
          stroke="url(#hv-n)"
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

        {/* The N mark */}
        <path
          d="M155 255 V150 L245 255 V150"
          stroke="url(#hv-n)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="155" cy="150" r="6" fill="#00A8FF" />
        <circle cx="245" cy="255" r="6" fill="#69E300" />

        {/* Inner data grid ticks */}
        <g stroke="#7DA0D2" strokeOpacity="0.18" strokeWidth="1">
          <line x1="140" y1="130" x2="260" y2="130" />
          <line x1="140" y1="270" x2="260" y2="270" />
        </g>
      </motion.svg>

      {/* Floating glass stat panels */}
      <motion.div
        className="glass absolute -left-2 top-16 rounded-xl px-3.5 py-2.5 shadow-lg sm:-left-4"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
          Uptime
        </p>
        <p className="text-lg font-semibold text-white">
          99.9<span className="text-tech">%</span>
        </p>
      </motion.div>

      <motion.div
        className="glass absolute -right-2 bottom-20 rounded-xl px-3.5 py-2.5 shadow-lg sm:-right-4"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
          Deployments
        </p>
        <p className="flex items-center gap-1.5 text-lg font-semibold text-white">
          <span className="size-2 rounded-full bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.6)]" />
          Secure
        </p>
      </motion.div>
    </div>
  );
}
