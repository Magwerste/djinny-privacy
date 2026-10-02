import { CheckCheck, Heart, SlidersHorizontal, Skull, Timer, type LucideIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

// Copy mirrors docs/play-store-listing.md in the app repo.
const MODES: { icon: LucideIcon; title: string; body: string; tone: string }[] = [
  { icon: Heart, title: "Survival", body: "You have 3 lives. How far can you go?", tone: "bg-indigo text-paper-white" },
  { icon: Skull, title: "Sudden Death", body: "One wrong answer ends the run.", tone: "bg-accent text-accent-foreground" },
  { icon: Timer, title: "Time Attack", body: "60 seconds to answer as many as you can.", tone: "bg-teal text-paper-white" },
  { icon: CheckCheck, title: "True/False Blitz", body: "15 rapid-fire true or false questions.", tone: "bg-amber text-ink" },
  {
    icon: SlidersHorizontal,
    title: "Custom",
    body: "Pick your category, difficulty (Easy, Medium or Hard) and quiz length.",
    tone: "bg-indigo text-paper-white",
  },
];

export function Modes() {
  return (
    <section id="modes" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">Five ways to play</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Quick rounds on the bus or long runs on the sofa. Pick the mode that matches your mood.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODES.map(({ icon: Icon, title, body, tone }) => (
          <li key={title}>
            <Card className="h-full">
              <span className={`grid size-12 place-items-center rounded-2xl ${tone}`}>
                <Icon className="size-6" aria-hidden />
              </span>
              <div className="space-y-1.5">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-base">{body}</CardDescription>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
