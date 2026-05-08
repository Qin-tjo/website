"use client";

import { ArrowRight, FileText } from "lucide-react";
import { useState } from "react";

import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const labelTone: Record<string, string> = {
  "Example deliverable": "border-primary/20 bg-primary/10 text-primary",
  "Sample work": "border-slate-300 bg-slate-100 text-slate-700",
  "Concept work": "border-blue-200 bg-blue-50 text-blue-800",
  "Mock work": "border-muted-foreground/20 bg-muted text-muted-foreground",
};

export function SelectedWork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = siteConfig.projects[selectedIndex];

  return (
    <section id="work" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proof of method"
          title="Decision artifacts, not generic summaries."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {siteConfig.projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.04}>
              <Card
                className={cn(
                  "group flex h-full flex-col overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-premium",
                  selectedIndex === index ? "border-primary/45 bg-primary/[0.03] shadow-premium" : "bg-background/86",
                )}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                    <Badge className={labelTone[project.workType]}>{project.workType}</Badge>
                    <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {project.category}
                    </p>
                    </div>
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background text-primary">
                      <FileText className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-auto border-t border-border/70 pt-4">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      type="button"
                      aria-expanded={selectedIndex === index}
                      onClick={() => setSelectedIndex(index)}
                    >
                      {selectedIndex === index ? "Selected artifact" : "View artifact"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-6" delay={0.06}>
          <Card className="overflow-hidden border-primary/20 bg-background/92 p-0 shadow-premium">
            <div className="border-b border-border/70 bg-muted/35 p-6 sm:p-8">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                <Badge className={labelTone[selectedProject.workType]}>{selectedProject.workType}</Badge>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">{selectedProject.title}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{selectedProject.category}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <MiniBlock label="Decision question" value={selectedProject.question} />
                  <MiniBlock label="Context of use" value={selectedProject.context} />
                </div>
              </div>
            </div>
            <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
              <div className="space-y-5">
                <div className="p-6 sm:p-8">
                  <ListBlock label="Evidence snapshot" items={selectedProject.evidence} />
                </div>
              </div>
              <div className="space-y-5 border-t border-border/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
                {selectedProject.table ? <ProjectTable columns={selectedProject.table.columns} rows={selectedProject.table.rows} /> : null}
                <MiniBlock label="Recommendation" value={selectedProject.recommendation} tone="strong" />
                <MiniBlock label="Caveat / what would change this" value={selectedProject.caveat} />
                <ListBlock label="Interpretation" items={selectedProject.interpretation} />
                <ReferenceList references={selectedProject.references} />
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

function MiniBlock({ label, value, tone = "muted" }: { label: string; value: string; tone?: "muted" | "strong" }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/55">{label}</p>
      <p className={cn("mt-2 text-sm leading-6", tone === "strong" ? "font-medium text-foreground" : "text-muted-foreground")}>{value}</p>
    </div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/55">{label}</p>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/55" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-xs">
          <thead className="bg-primary/[0.06] text-foreground">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-3 py-2.5 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70">
            {rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell) => (
                  <td key={cell} className="max-w-[18rem] px-3 py-2.5 leading-5 text-muted-foreground align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReferenceList({ references }: { references: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/55">References</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {references.map((reference) => (
          <a
            key={reference.label}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
            href={reference.href}
            target={reference.href.startsWith("#") ? undefined : "_blank"}
            rel={reference.href.startsWith("#") ? undefined : "noreferrer"}
          >
            {reference.label}
          </a>
        ))}
      </div>
    </div>
  );
}
