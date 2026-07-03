import {
  Users,
  ShieldCheck,
  Timer,
  Puzzle,
  LifeBuoy,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  {
    title: "Skilled Technology Professionals",
    description:
      "An experienced team of engineers, architects, and consultants across the modern stack.",
    icon: Users,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Solutions engineered for security and built to scale as your business grows.",
    icon: ShieldCheck,
  },
  {
    title: "Agile Delivery, On Time",
    description:
      "Agile development and transparent milestones that ship reliably and on schedule.",
    icon: Timer,
  },
  {
    title: "Custom Solutions for Your Business",
    description:
      "Tailored implementations designed around your goals — never one-size-fits-all.",
    icon: Puzzle,
  },
  {
    title: "Long-Term Support & Maintenance",
    description:
      "Ongoing maintenance and support that keep your systems healthy well after launch.",
    icon: LifeBuoy,
  },
  {
    title: "Innovation-Focused Implementation",
    description:
      "We apply the right emerging technology to create real, measurable advantage.",
    icon: Lightbulb,
  },
];
