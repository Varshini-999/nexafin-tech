import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  GraduationCap,
  Truck,
  Building2,
  ShoppingCart,
  Clapperboard,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Secure, compliant systems for patient care and health data.",
    icon: HeartPulse,
  },
  {
    slug: "finance",
    name: "Finance",
    description: "Resilient, secure platforms for modern financial services.",
    icon: Landmark,
  },
  {
    slug: "retail",
    name: "Retail",
    description: "Connected retail experiences and smart inventory systems.",
    icon: ShoppingBag,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Automation and integration for the connected factory.",
    icon: Factory,
  },
  {
    slug: "education",
    name: "Education",
    description: "Digital learning platforms and student management systems.",
    icon: GraduationCap,
  },
  {
    slug: "logistics",
    name: "Logistics",
    description: "Real-time tracking, routing, and supply chain visibility.",
    icon: Truck,
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Property platforms, CRM, and portfolio management tools.",
    icon: Building2,
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description: "Scalable storefronts and high-converting shopping journeys.",
    icon: ShoppingCart,
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    description: "Streaming, content, and audience engagement platforms.",
    icon: Clapperboard,
  },
  {
    slug: "startups",
    name: "Startups",
    description: "Fast, flexible builds that scale from MVP to enterprise.",
    icon: Rocket,
  },
];
