import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientButton } from "@/components/shared/GradientButton";

export function FinalCTA() {
  return (
    <section className="relative py-24">
      <Container>
        <AnimatedSection>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Decorative background */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute left-1/2 top-0 h-72 w-[38rem] -translate-x-1/2 rounded-full glow-blue opacity-40 blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full glow-green opacity-25 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.65rem]">
                Ready to Build Smarter{" "}
                <span className="text-gradient">Digital Solutions?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Partner with NexaFin Tech to design, develop, integrate, and
                scale reliable technology solutions for your business.
              </p>
              <div className="mt-9 flex justify-center">
                <GradientButton href="/contact" size="lg">
                  Get In Touch
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </GradientButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
