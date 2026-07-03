import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full glow-blue opacity-25 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full glow-green opacity-20 blur-[90px]"
          />

          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 0.08}
                className="text-center"
              >
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-gradient">{stat.value}</span>
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
