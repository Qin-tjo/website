import { CheckCircle2 } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section id="services" className="border-y border-border/70 bg-muted/45 px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Decision modules for targeted oncology programs."
          description="Each project is scoped around the decision, the data available, and the readout the team needs."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <Card className="h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-serif text-xl font-semibold">{index + 1}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.outcome}</p>
                <div className="mt-6 rounded-xl border border-border/80 bg-background/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">When this helps</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.bestFit}</p>
                </div>
                <ListBlock title="What you get" items={service.deliverables} />
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
