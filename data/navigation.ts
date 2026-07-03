export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Condensed service list surfaced in the header "Services" dropdown.
 * The full catalogue lives in `data/services.ts`.
 */
export type ServiceNavItem = {
  label: string;
  href: string;
  description: string;
};

export const servicesMenu: ServiceNavItem[] = [
  {
    label: "Software Development",
    href: "/services/software-development",
    description: "Custom, scalable software engineered around your business.",
  },
  {
    label: "Application Development",
    href: "/services/application-development",
    description: "Web, desktop, and enterprise apps built to perform.",
  },
  {
    label: "SAP Implementation",
    href: "/services/sap-implementation",
    description: "End-to-end SAP rollout, migration, and support.",
  },
  {
    label: "Cloud Services",
    href: "/services/cloud-services",
    description: "Cloud implementation, migration, and optimization.",
  },
  {
    label: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protect data, systems, and identities end to end.",
  },
  {
    label: "Data Analytics / AI / ML",
    href: "/services/data-ai-ml",
    description: "Turn data into intelligent, automated decisions.",
  },
  {
    label: "System Integration",
    href: "/services/system-integration",
    description: "Connect platforms, APIs, and workflows seamlessly.",
  },
  {
    label: "IT Consulting",
    href: "/services/it-consulting",
    description: "Strategy and technical guidance for digital growth.",
  },
  {
    label: "Website & Mobile Apps",
    href: "/services/web-mobile-development",
    description: "High-performance websites and mobile experiences.",
  },
];
