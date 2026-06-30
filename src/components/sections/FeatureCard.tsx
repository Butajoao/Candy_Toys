import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white/92 p-6 shadow-lg shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-2xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-display text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
    </div>
  );
}
