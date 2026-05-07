import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteHeader } from "@/components/site-header";
import { WhereHelp } from "@/components/where-help";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhereHelp />
        <Services />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
