import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { industries } from "@/data/industries";

export function IndustriesPreview() {
  return (
    <section id="industries" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Empower"
          subtitle="Deep domain understanding across the sectors driving the digital economy."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.slug} delay={(i % 5) * 0.06}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="glass group flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric/35 hover:glow-border"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-electric/15 bg-electric/[0.06] text-electric-soft transition-colors group-hover:border-electric/40">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {industry.name}
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
