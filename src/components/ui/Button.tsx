import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "espresso" | "gold-line";
type ButtonSize = "md" | "lg" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-espresso text-warm-white hover:bg-[#2c2723] border border-espresso",
  secondary:
    "bg-transparent text-text border border-stone hover:border-espresso hover:bg-ivory",
  ghost: "bg-transparent text-text hover:text-espresso",
  espresso:
    "bg-warm-white text-espresso border border-warm-white hover:bg-ivory",
  "gold-line":
    "bg-transparent text-warm-white border border-gold/50 hover:border-gold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-xs tracking-[0.14em]",
  md: "px-6 py-3.5 text-[0.6875rem] tracking-[0.18em]",
  lg: "px-8 py-4 text-[0.6875rem] tracking-[0.2em]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 uppercase font-medium transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const external =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
