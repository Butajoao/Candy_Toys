import Image from "next/image";

export function SectionBackdrop({
  image,
  tint = "from-white/85 via-white/78 to-white/70",
  opacity = "opacity-20",
}: {
  image: string;
  tint?: string;
  opacity?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <Image src={image} alt="" fill sizes="100vw" className={`object-cover object-top ${opacity} mix-blend-multiply`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
    </div>
  );
}
