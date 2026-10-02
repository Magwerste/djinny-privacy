import { PlayBadge } from "@/components/play-badge";

export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Make a wish. Answer correctly.</h2>
        <p className="max-w-xl text-lg opacity-90">Free on Google Play. Download Djinny and start your streak today.</p>
        <PlayBadge placement="footer-cta" />
      </div>
    </section>
  );
}
