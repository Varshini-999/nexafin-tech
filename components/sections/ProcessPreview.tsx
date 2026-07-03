import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { processSteps } from "@/data/process";

export function ProcessPreview() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Technology Delivery Process"
          subtitle="A proven, transparent methodology that de-risks delivery from first conversation to long-term support."
        />

        <div className="relative mt-16">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.step} delay={i * 0.08}>
                  <div className="flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl glass-strong text-electric-soft glow-border">
                      <Icon className="size-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,#008CFF,#39D91D)] text-[0.65rem] font-bold text-[#03121f]">
                        {step.step}
                      </span>
                    </div>
                    <GlassCard className="mt-5 w-full p-5">
                      <h3 className="text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </GlassCard>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
