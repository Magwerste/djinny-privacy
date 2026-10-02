// Fills follow the app's category buttons (indigo / teal / coral / amber). Coral and amber are
// fill-only, so they always carry ink text (DESIGN.md §1.1).
const TONES = ["bg-indigo text-paper-white", "bg-teal text-paper-white", "bg-coral text-ink", "bg-amber text-ink"];

const CATEGORIES = [
  "General Knowledge", "History", "Geography", "Mythology",
  "Science & Nature", "Computers", "Mathematics", "Gadgets",
  "Film", "Television", "Music", "Books", "Musicals & Theatre",
  "Video Games", "Board Games", "Comics", "Anime & Manga", "Cartoons",
  "Sports", "Animals", "Vehicles", "Art", "Celebrities",
];

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">23 categories, from Mythology to Anime</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        There is a category for every kind of know-it-all, and every question ships inside the app.
      </p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {CATEGORIES.map((name, i) => (
          <li key={name} className={`rounded-2xl px-5 py-2.5 font-heading text-sm font-semibold ${TONES[i % TONES.length]}`}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
