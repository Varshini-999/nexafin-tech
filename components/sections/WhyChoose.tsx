import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { benefits } from "@/data/benefits";

export function WhyChoose() {
  return (
    <section className="relative py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full glow-blue opacity-15 blur-[130px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Why NexaFin Tech"
          title="Why Choose NexaFin Tech?"
          subtitle="A technology partner engineered around trust, security, and long-term results — not just delivery."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection key={benefit.title} delay={(i % 3) * 0.08}>
                <GlassCard interactive glow="green" className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-tech/20 bg-tech/[0.08] text-tech">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
