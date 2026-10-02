import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { PLAY_URL } from "../../site.config";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-md">
          <img src={`${import.meta.env.BASE_URL}images/icon-192.png`} alt="" width={32} height={32} className="size-8 rounded-lg" />
          <span className="font-display text-xl font-bold text-primary">Djinny</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 font-heading text-sm font-medium md:flex">
          <a href="#modes" className="hover:text-primary">Game modes</a>
          <a href="#daily" className="hover:text-primary">Daily</a>
          <a href="#screenshots" className="hover:text-primary">Screenshots</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="accent" size="sm">
            <a href={`${PLAY_URL}&utm_source=djinny-site&utm_medium=web&utm_campaign=header`} rel="noopener">Get the app</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
