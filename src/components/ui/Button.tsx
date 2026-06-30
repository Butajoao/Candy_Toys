import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary: "bg-action-primary text-white shadow-lg shadow-red-500/20 hover:bg-red-600",
  secondary: "bg-brand-yellow text-brand-navy ring-1 ring-brand-navy/10 hover:bg-yellow-300",
  ghost: "bg-white/80 text-brand-navy ring-1 ring-brand-navy/15 hover:bg-white",
  dark: "bg-brand-navy text-white hover:bg-brand-primary",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition focus-visible:outline-action-primary",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in rest && rest.href) {
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
