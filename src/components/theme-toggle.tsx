import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// The app defaults to its dark theme (DESIGN.md §2); the inline script in index.html applies
// the stored choice before first paint. Icons switch via the `dark` class, not React state, so
// the prerendered HTML is identical to what the client renders (no hydration mismatch).
function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("djinny-theme", dark ? "dark" : "light");
  } catch {
    /* storage can be unavailable (private mode); the toggle still works for this visit */
  }
}

export function ThemeToggle() {
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle light and dark theme">
      <Sun className="hidden dark:block" aria-hidden />
      <Moon className="dark:hidden" aria-hidden />
    </Button>
  );
}
