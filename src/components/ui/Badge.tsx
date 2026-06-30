import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-wide text-brand-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}
