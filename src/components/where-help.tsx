import { AlertTriangle, BarChart3, Microscope, Route, ScanSearch } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const icons = [Route, ScanSearch, Microscope, AlertTriangle, BarChart3];

export function WhereHelp() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge className="mb-5 bg-background/80">Where I help</Badge>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                When the biology is promising, but the next move is unclear.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              I help teams pressure-test the translational logic behind expansion, patient selection, and response/resistance plans before decisions become expensive to unwind.
            </p>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {siteConfig.decisionPoints.map((point, index) => {
            const Icon = icons[index] ?? ScanSearch;

            return (
              <FadeIn key={point.title} delay={index * 0.04}>
                <Card className="h-full p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
