import { Categories } from "@/sections/categories";
import { Cta } from "@/sections/cta";
import { Daily } from "@/sections/daily";
import { Faq } from "@/sections/faq";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { Modes } from "@/sections/modes";
import { Screenshots } from "@/sections/screenshots";
import { Stats } from "@/sections/stats";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Modes />
        <Daily />
        <Categories />
        <Screenshots />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
