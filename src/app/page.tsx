import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <About />
      </main>
      <Footer />
    </>
  );
}
