import { Linkedin, Mail } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { Headshot } from "@/components/headshot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="scientific-grid absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:py-24">
        <FadeIn className="max-w-3xl">
          <Badge className="mb-5 bg-background/90">{siteConfig.hero.eyebrow}</Badge>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {siteConfig.hero.subheadline}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/78">
            <span className="font-semibold text-foreground">{siteConfig.name}</span> — {siteConfig.role}.{" "}
            {siteConfig.hero.credibility}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                {siteConfig.cta.primary}
              </a>
            </Button>
            <Button asChild size="icon" variant="outline" aria-label="LinkedIn profile">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <Headshot />
        </FadeIn>
      </div>
    </section>
  );
}
