import {
  Search,
  ClipboardList,
  Code2,
  TestTube2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your goals, challenges, and users to define the right problem to solve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We shape scope, architecture, and a delivery roadmap with clear milestones.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Design & Develop",
    description:
      "We design intuitive experiences and build robust, well-tested software.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Integrate & Test",
    description:
      "We connect systems and rigorously validate quality, security, and performance.",
    icon: TestTube2,
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We deploy with confidence and provide ongoing support, monitoring, and optimization.",
    icon: Rocket,
  },
];
