"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function MobileBookBar() {
  const pathname = usePathname();
  if (pathname === "/book" || pathname === "/virtual-consultation") return null;

  return (
    <div className="mobile-book-bar fixed inset-x-0 bottom-0 z-40 border-t border-stone/80 bg-warm-white/95 px-4 py-3 backdrop-blur-md md:hidden">
      <Button href="/book" className="w-full" size="md">
        Book Consultation
      </Button>
    </div>
  );
}
