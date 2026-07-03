import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  // Show the core service set on the homepage; full list lives on /services.
  const featured = services.slice(0, 9);

  return (
    <section id="services" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our IT Services"
          subtitle="End-to-end technology services designed to help businesses build, optimize, secure, and scale digital operations."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.slug} delay={(i % 3) * 0.08}>
                <GlassCard interactive className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex h-full flex-col p-6"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-xl border border-electric/20 bg-electric/[0.08] text-electric-soft transition-colors group-hover:border-electric/40">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-soft">
                      Learn more
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-electric/40 hover:text-white"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
