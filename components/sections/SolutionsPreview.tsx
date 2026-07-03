import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { solutions } from "@/data/solutions";

export function SolutionsPreview() {
  return (
    <section id="solutions" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Core Solutions"
          title="Digital Solutions Built for Business Growth"
          subtitle="Outcome-focused solutions that turn technology into a measurable competitive advantage."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <AnimatedSection key={solution.title} delay={(i % 3) * 0.08}>
                <GlassCard interactive className="group h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(0,168,255,0.16),rgba(105,227,0,0.16))] text-electric-soft">
                      <Icon className="size-5" />
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-electric/30 to-transparent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
