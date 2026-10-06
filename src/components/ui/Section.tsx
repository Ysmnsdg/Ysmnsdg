import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow mb-5",
        light ? "text-stone/80" : "text-taupe",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "headline-display text-[clamp(2.25rem,5vw,4.5rem)] text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("gold-rule", className)} aria-hidden="true" />;
}

export function Container({
  children,
  wide = false,
  className,
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(wide ? "container-wide" : "container-editorial", className)}>
      {children}
    </div>
  );
}
