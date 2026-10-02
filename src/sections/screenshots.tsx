import { Phone } from "@/components/phone";

const SHOTS = [
  { src: "02-menu.webp", alt: "Djinny home screen with the Daily Challenge card, Quick Play and Browse Categories", caption: "Ready to play?" },
  { src: "03-categories.webp", alt: "Category picker with colorful buttons for Entertainment, Science, History and more", caption: "Pick a category" },
  { src: "05-quiz.webp", alt: "A quiz question with a countdown bar and four colored answer tiles", caption: "Beat the clock" },
  { src: "06-result.webp", alt: "Quiz results screen with the score and a Share Result button", caption: "Share your score" },
  { src: "07-profile.webp", alt: "Profile screen showing level, XP, quizzes played and current streak", caption: "Track your streak" },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-3xl font-bold text-balance sm:text-4xl">See it in action</h2>
        <ul
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6"
          aria-label="App screenshots"
          tabIndex={0}
        >
          {SHOTS.map(({ src, alt, caption }) => (
            <li key={src} className="w-52 shrink-0 snap-start sm:w-60">
              <Phone src={src} alt={alt} />
              <p className="mt-3 text-center font-heading text-sm font-semibold">{caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
