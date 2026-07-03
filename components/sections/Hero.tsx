import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { GradientButton } from "@/components/shared/GradientButton";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Background grid + glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[46rem] -translate-x-1/2 rounded-full glow-blue opacity-50 blur-[140px]" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full glow-green opacity-20 blur-[140px]" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-soft">
              <span className="size-1.5 rounded-full bg-tech shadow-[0_0_8px_2px_rgba(105,227,0,0.6)]" />
              Innovate. Integrate. Elevate.
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart IT Solutions for a{" "}
              <span className="text-gradient">Digital Future</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              NexaFin Tech is a software development company and IT solutions
              provider delivering secure, scalable, and future-ready digital
              solutions for modern businesses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GradientButton href="/services" size="lg">
                Explore Services
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </GradientButton>
              <GradientButton href="/portfolio" variant="outline" size="lg">
                <Play className="size-4" />
                View Our Work
              </GradientButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-electric" />
                Enterprise-grade delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-tech" />
                Security-first engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-cyan" />
                Scalable architecture
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Visual */}
        <AnimatedSection
          delay={0.2}
          className="flex items-center justify-center lg:justify-end"
        >
          <HeroVisual />
        </AnimatedSection>
      </Container>
    </section>
  );
}
