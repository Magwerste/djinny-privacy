import { cn } from "@/lib/utils";

export function Phone({ src, alt, className, eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-xl ring-1 ring-border", className)}>
      <img
        src={`${import.meta.env.BASE_URL}images/${src}`}
        alt={alt}
        width={540}
        height={1200}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}
