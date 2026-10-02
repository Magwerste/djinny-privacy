import { Flame, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlayBadge } from "@/components/play-badge";
import { Phone } from "@/components/phone";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-amber/10 blur-3xl dark:bg-secondary/15" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <Badge variant="outline" className="mb-5">
            <WifiOff /> Free · Works offline · Android
          </Badge>
          <h1 className="text-balance">
            <span className="block font-display text-6xl font-bold text-primary sm:text-7xl">Djinny</span>
            <span className="mt-3 block text-2xl font-semibold sm:text-3xl">The trivia game you can play anywhere.</span>
          </h1>
          <p className="mt-5 font-display text-lg text-muted-foreground italic">An investment in knowledge pays the best interest…</p>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            More than 6,000 original questions across 23 categories, five game modes, and a fresh puzzle every day. Every
            question is built in, so there is no signal required and no account to create.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <PlayBadge placement="hero" />
            <a href="#modes" className="font-heading text-sm font-semibold text-primary underline-offset-4 hover:underline">
              See how it plays
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] md:max-w-[19rem]">
          <Phone src="05-quiz.webp" alt="Djinny quiz screen: a question about the word hirsute with four colored answer tiles" eager className="rotate-2" />
          <Badge variant="reward" className="absolute top-8 -left-6 shadow-md sm:-left-12">
            <Flame /> Daily streak
          </Badge>
          <Badge variant="secondary" className="absolute -right-2 -bottom-3 shadow-md sm:-right-8">
            6,000+ questions
          </Badge>
        </div>
      </div>
    </section>
  );
}
