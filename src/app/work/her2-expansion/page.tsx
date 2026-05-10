import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  ArtifactVisual,
  ListBlock,
  MiniBlock,
  ReferenceList,
} from "@/components/selected-work";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const project = siteConfig.projects.find((item) => item.href === "/work/her2-expansion/") ?? siteConfig.projects[0];

export default function Her2ExpansionPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to examples
          </Link>
          <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            Project inquiry
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/70 px-5 py-14 sm:px-6 lg:py-16">
        <div className="scientific-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl">
          <Badge className="border-primary/20 bg-primary/10 text-primary">{project.workType}</Badge>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            A public-data example for separating response evidence, screening yield, competitive context, and expansion priority in non-breast HER2 IHC 3+ solid tumors.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="p-6 shadow-soft">
              <div className="grid gap-4">
                <MiniBlock label="Decision question" value={project.question} tone="strong" />
                <MiniBlock label="Context and scope" value={project.context} />
              </div>
            </Card>

            <Card className="grid gap-5 p-6 shadow-soft">
              <ListBlock label="Evidence snapshot" items={project.evidence} />
            </Card>
          </div>

          <ArtifactVisual visual={project.visual} />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="p-6 shadow-soft">
              <ListBlock label="Interpretation" items={project.interpretation} />
            </Card>
            <Card className="grid gap-5 p-6 shadow-soft">
              <MiniBlock label="Recommendation" value={project.recommendation} tone="strong" />
              <MiniBlock label="Caveat / what would change this" value={project.caveat} />
              <ReferenceList references={project.references} />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
