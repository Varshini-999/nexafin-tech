"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, servicesMenu } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { GradientButton } from "@/components/shared/GradientButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-white/[0.06] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <ServicesDropdown key={link.href} active={isActive(link.href)} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-white"
                    : "text-slate-300 hover:text-white",
                )}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]" />
                )}
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <GradientButton href="/contact" size="sm">
            Get In Touch
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </GradientButton>
        </div>

        {/* Mobile trigger */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 transition-colors hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="glass-strong w-[86%] max-w-sm border-l border-white/[0.06] p-0"
            >
              <SheetHeader className="border-b border-white/[0.06] px-5 py-4 text-left">
                <SheetTitle asChild>
                  <div>
                    <Logo href="/" />
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-1 flex-col overflow-y-auto px-3 py-4">
                <nav className="flex flex-col">
                  {navLinks.map((link) =>
                    link.label === "Services" ? (
                      <Accordion
                        key={link.href}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value="services" className="border-none">
                          <AccordionTrigger className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:no-underline">
                            Services
                          </AccordionTrigger>
                          <AccordionContent className="pb-1">
                            <div className="ml-2 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                              {servicesMenu.map((s) => (
                                <SheetClose asChild key={s.href}>
                                  <Link
                                    href={s.href}
                                    className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-electric-soft"
                                  >
                                    {s.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                            isActive(link.href)
                              ? "bg-white/[0.06] text-white"
                              : "text-slate-200 hover:bg-white/[0.04] hover:text-white",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ),
                  )}
                </nav>
              </div>

              <div className="border-t border-white/[0.06] p-4">
                <SheetClose asChild>
                  <GradientButton href="/contact" className="w-full">
                    Get In Touch
                    <ArrowRight />
                  </GradientButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

function ServicesDropdown({ active }: { active: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium outline-none transition-colors data-[state=open]:text-white",
          active ? "text-white" : "text-slate-300 hover:text-white",
        )}
      >
        Services
        <ChevronDown className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={14}
        className="glass-strong w-[34rem] rounded-2xl border border-white/[0.08] p-2"
      >
        <div className="grid grid-cols-2 gap-1">
          {servicesMenu.map((s) => (
            <DropdownMenuItem key={s.href} asChild>
              <Link
                href={s.href}
                className="flex cursor-pointer flex-col items-start gap-0.5 rounded-xl px-3 py-2.5 focus:bg-white/[0.05]"
              >
                <span className="text-sm font-medium text-slate-100">
                  {s.label}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {s.description}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
