import { CONTACT_EMAIL } from "../../site.config";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 font-heading font-medium text-foreground">
          <a href="./privacy/" className="hover:text-primary">Privacy Policy</a>
          <a href="./delete-account.html" className="hover:text-primary">Delete your data</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">Contact</a>
        </nav>
        <p suppressHydrationWarning>© {new Date().getFullYear()} Djinny.</p>
        <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
    </footer>
  );
}
