import { BarChart3, Microscope, Network } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

const credibilityItems = [
  {
    icon: Network,
    label: "Cancer biology first",
    text: "Trained in cancer biology, immunology, functional genomics, and hands-on experimental systems before moving into translational strategy.",
  },
  {
    icon: Microscope,
    label: "Wet lab to data science",
    text: "Comfortable reading assays, samples, mechanisms, and messy datasets together, from IHC and immune profiling to RNA, DNA, and clinical response data.",
  },
  {
    icon: BarChart3,
    label: "Decision-ready judgment",
    text: "I translate evidence into practical next steps: target ranking, patient stratification, expansion logic, response/resistance hypotheses, and competitive context.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-border/70 bg-muted/45 px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.08}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge className="mb-5 bg-background/80">About</Badge>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">{siteConfig.about.heading}</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              <p className="text-lg leading-8 text-foreground/82">{siteConfig.about.body}</p>
              <p>{siteConfig.about.credibility}</p>
              <p>{siteConfig.about.note}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {credibilityItems.map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border border-border/80 bg-background/70 p-5 shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
