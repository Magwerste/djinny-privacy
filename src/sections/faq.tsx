import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = [
  ["Is Djinny free?", "Yes. Djinny is free to play and supported by ads."],
  ["Do I need an account?", "No. You can play as a guest. Signing in with Google Play Games is optional."],
  ["Does it work offline?", "Yes. All questions are built into the app, so you can play anywhere, even without a connection."],
  ["Which devices does it run on?", "Android phones and tablets running Android 7.0 or newer."],
  ["What data does the app collect?", "There is no Djinny server and no account. Ads are served by Google AdMob, and consent is requested where required. The privacy policy has the details."],
] as const;

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">Questions, answered</h2>
      <Accordion type="single" collapsible className="mt-8">
        {FAQ.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>
              {a}
              {q.startsWith("What data") && (
                <>
                  {" "}
                  <a className="font-semibold text-primary underline underline-offset-4" href="./privacy/">
                    Read the privacy policy
                  </a>
                  .
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
