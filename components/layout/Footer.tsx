import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { servicesMenu } from "@/data/navigation";
import { industries } from "@/data/industries";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93zM17.6 20.65h2.04L6.49 3.24H4.3z",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    path: "M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#040914]">
      {/* Gradient top border */}
      <div className="divider-gradient" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full glow-blue opacity-20 blur-[120px]" />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              NexaFin Tech delivers secure, scalable, and innovative software
              development and IT solutions for businesses ready to grow
              digitally.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-electric" />
                <a
                  href="mailto:hello@nexafintech.com"
                  className="hover:text-white"
                >
                  hello@nexafintech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-electric" />
                <a href="tel:+10000000000" className="hover:text-white">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-electric" />
                <span>Global delivery · Remote-first</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-electric/40 hover:text-electric-soft"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-[1.05rem]"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn title="Company" className="lg:col-span-2">
            {quickLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services" className="lg:col-span-3">
            {servicesMenu.map((s) => (
              <FooterLink key={s.href} href={s.href}>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Industries */}
          <FooterColumn title="Industries" className="lg:col-span-3">
            {industries.slice(0, 8).map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                {i.name}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} NexaFin Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold tracking-wide text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-electric-soft"
      >
        {children}
      </Link>
    </li>
  );
}
