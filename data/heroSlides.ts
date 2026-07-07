export type HeroCTA = {
  label: string;
  href: string;
};

export type HeroVisualKey = "core" | "dashboard" | "network";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: string;
  /** Substring of `headline` to render with the brand gradient. */
  highlight: string;
  description: string;
  primary: HeroCTA;
  secondary: HeroCTA;
  visual: HeroVisualKey;
  /** Per-slide glow intensities used to shift the background tint. */
  glow: { blue: number; cyan: number; green: number };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "digital-future",
    eyebrow: "Innovate. Integrate. Elevate.",
    headline: "Smart IT Solutions for a Digital Future",
    highlight: "Digital Future",
    description:
      "NexaFin Tech delivers secure, scalable, and future-ready software development and IT solutions for modern businesses.",
    primary: { label: "Explore Services", href: "/services" },
    secondary: { label: "View Our Work", href: "/portfolio" },
    visual: "core",
    glow: { blue: 0.55, cyan: 0.32, green: 0.18 },
  },
  {
    id: "custom-software",
    eyebrow: "Build. Scale. Secure.",
    headline: "Custom Software Built Around Your Business",
    highlight: "Custom Software",
    description:
      "From enterprise platforms to web and mobile applications, we design and develop reliable digital products that support real business growth.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "Our Services", href: "/services" },
    visual: "dashboard",
    glow: { blue: 0.3, cyan: 0.55, green: 0.22 },
  },
  {
    id: "smarter-operations",
    eyebrow: "Cloud. Cybersecurity. AI.",
    headline: "Integrated Technology for Smarter Operations",
    highlight: "Smarter Operations",
    description:
      "We help businesses modernize infrastructure, connect systems, strengthen security, and unlock data-driven decisions with cloud, AI, and IT consulting.",
    primary: { label: "Discuss Your Requirement", href: "/contact" },
    secondary: { label: "Explore Solutions", href: "/solutions" },
    visual: "network",
    glow: { blue: 0.2, cyan: 0.34, green: 0.5 },
  },
];
