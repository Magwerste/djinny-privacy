import { CalendarCheck, Flame, Puzzle, Trophy } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function Daily() {
  return (
    <section id="daily" className="scroll-mt-20 border-y bg-muted/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-3xl font-bold text-balance sm:text-4xl">A reason to come back every day</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Two daily rituals and a profile that remembers your progress.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card>
            <Puzzle className="size-7 text-primary" aria-hidden />
            <div className="space-y-1.5">
              <CardTitle>Quizzle: one answer a day</CardTitle>
              <CardDescription className="text-base">
                Type your answer and solve it in 6 guesses. Each wrong guess reveals a letter. Share your result and keep your
                Quizzle streak going.
              </CardDescription>
            </div>
          </Card>

          {/* Daily-challenge card: amber fill + ink text is the app's designated streak/reward moment. */}
          <Card className="border-transparent bg-amber text-ink">
            <Flame className="size-7" aria-hidden />
            <div className="space-y-1.5">
              <CardTitle>Daily Challenge</CardTitle>
              <p className="text-base">
                A fresh quiz every day in a rotating category. Complete it to grow your streak, and earn streak shields to protect
                it on the days you miss. An optional reminder and a home-screen widget help you keep the flame alive.
              </p>
            </div>
          </Card>

          <Card>
            <Trophy className="size-7 text-secondary" aria-hidden />
            <div className="space-y-1.5">
              <CardTitle>Level up</CardTitle>
              <CardDescription className="text-base">
                Every game earns XP. Level up and follow your progress on your profile: quizzes played, average score, best
                category and current streak.
              </CardDescription>
            </div>
          </Card>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarCheck className="size-4" aria-hidden /> Streak shields, reminders and the widget are all optional.
        </p>
      </div>
    </section>
  );
}
