import {
  Code2,
  AppWindow,
  Boxes,
  LifeBuoy,
  Server,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Network,
  Compass,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom software engineered around your processes — reliable, scalable, and built to last.",
    icon: Code2,
  },
  {
    slug: "application-development",
    title: "Application Development & Customization",
    description:
      "Tailored web and enterprise applications, plus customization of existing platforms to fit your workflow.",
    icon: AppWindow,
  },
  {
    slug: "sap-implementation",
    title: "SAP Implementation & Support",
    description:
      "End-to-end SAP implementation, migration, and ongoing support to run core operations with confidence.",
    icon: Boxes,
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance & Technical Support",
    description:
      "Proactive maintenance, upgrades, and responsive technical support that keep systems performing.",
    icon: LifeBuoy,
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure Management",
    description:
      "Design, monitoring, and management of resilient infrastructure built for uptime and scale.",
    icon: Server,
  },
  {
    slug: "cloud-services",
    title: "Cloud Implementation Services",
    description:
      "Cloud strategy, migration, and deployment across AWS, Azure, and hybrid environments.",
    icon: Cloud,
  },
  {
    slug: "data-ai-ml",
    title: "Data Analytics / AI / ML Development",
    description:
      "Data platforms, machine learning, and analytics that turn information into intelligent action.",
    icon: BrainCircuit,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    description:
      "Threat protection, risk assessment, and compliance to secure your data, systems, and identities.",
    icon: ShieldCheck,
  },
  {
    slug: "system-integration",
    title: "System Integration Services",
    description:
      "Unify platforms, APIs, and data flows so your entire technology stack works as one.",
    icon: Network,
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Technical Implementation",
    description:
      "Strategic consulting and hands-on implementation to guide your digital transformation.",
    icon: Compass,
  },
  {
    slug: "web-mobile-development",
    title: "Website & Mobile Application Development",
    description:
      "High-performance websites and native-quality mobile apps that engage and convert.",
    icon: Smartphone,
  },
];
