import { CheckCircle2, MinusCircle } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function FitBoundaries() {
  return (
    <section id="fit" className="px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Badge className="mx-auto mb-4 bg-background/80">Fit</Badge>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">A focused role, not a generic consulting lane.</h2>
          </div>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          <FitCard title="Good fit" items={siteConfig.fit.good} type="good" />
          <FitCard title="Not the right fit" items={siteConfig.fit.notFit} type="not" />
        </div>
      </div>
    </section>
  );
}

function FitCard({ title, items, type }: { title: string; items: string[]; type: "good" | "not" }) {
  const Icon = type === "good" ? CheckCircle2 : MinusCircle;

  return (
    <FadeIn>
      <Card className="h-full p-6">
        <h3 className="font-serif text-2xl font-semibold text-foreground">{title}</h3>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </FadeIn>
  );
}
