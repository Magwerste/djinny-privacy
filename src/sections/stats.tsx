const STATS = [
  ["6,000+", "original questions"],
  ["23", "categories"],
  ["5", "game modes"],
  ["0", "accounts needed"],
] as const;

export function Stats() {
  return (
    <section aria-label="Djinny at a glance" className="border-y bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
        {STATS.map(([value, label]) => (
          <div key={label}>
            <dt className="sr-only">{label}</dt>
            <dd className="font-heading text-3xl font-extrabold text-primary">{value}</dd>
            <dd className="text-sm text-muted-foreground">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
