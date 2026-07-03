import {
  Building2,
  Workflow,
  CloudCog,
  BarChart3,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: "Enterprise Software Solutions",
    description:
      "Purpose-built platforms that unify operations, data, and teams across the enterprise.",
    icon: Building2,
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive workflows to cut cost, reduce errors, and free your teams to focus on growth.",
    icon: Workflow,
  },
  {
    title: "Cloud Migration & Deployment",
    description:
      "Move workloads to the cloud securely, with zero-downtime strategies and optimized spend.",
    icon: CloudCog,
  },
  {
    title: "AI-Driven Analytics Platforms",
    description:
      "Turn raw data into predictive insight with analytics and machine learning at the core.",
    icon: BarChart3,
  },
  {
    title: "Cybersecurity & Risk Protection",
    description:
      "Defend systems and data with layered security, monitoring, and proactive risk management.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Web & Mobile Applications",
    description:
      "Engaging, high-performance web and mobile experiences built for your customers.",
    icon: Smartphone,
  },
];
