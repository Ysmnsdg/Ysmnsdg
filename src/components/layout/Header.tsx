"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { dentist, fullName, navigation } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn("site-header fixed inset-x-0 top-0 z-50", scrolled && "is-scrolled")}
      >
        <div className="container-wide flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${fullName} home`}
          >
            <span className="flex h-10 w-10 items-center justify-center border border-gold/60 text-[0.6875rem] font-medium tracking-[0.18em] text-espresso transition-colors group-hover:border-gold">
              {dentist.monogram}
            </span>
            <span className="hidden font-serif text-lg tracking-wide text-text sm:block">
              {dentist.titlePrefix} {dentist.lastName}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.6875rem] font-medium uppercase tracking-[0.18em] transition-colors",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-espresso"
                    : "text-text-secondary hover:text-espresso",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/book" size="sm" className="hidden sm:inline-flex">
              Book Consultation
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-stone lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-espresso transition-transform duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-px w-full bg-espresso transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-espresso transition-transform duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id={menuId}
        className={cn(
          "fixed inset-0 z-40 bg-ivory transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-stone/70 py-4 font-serif text-4xl text-text"
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-4">
            <Button href="/book" size="lg" className="w-full" tabIndex={open ? 0 : -1}>
              Book Consultation
            </Button>
            <Button
              href="/virtual-consultation"
              variant="secondary"
              size="lg"
              className="w-full"
              tabIndex={open ? 0 : -1}
            >
              Virtual Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
