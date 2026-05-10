import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-border/70 bg-muted/45 px-5 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Focused scientific support for targeted oncology decisions."
          description="Each project is scoped around the question your team needs to answer, the evidence available, and the deliverable you need to move forward."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <Card className="h-full p-6">
                <div className="flex items-center">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.outcome}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
