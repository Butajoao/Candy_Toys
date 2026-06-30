import { Badge } from "@/components/ui/Badge";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 font-display text-3xl font-black leading-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-ink/75">{description}</p> : null}
    </div>
  );
}
