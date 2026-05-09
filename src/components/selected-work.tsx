"use client";

import { ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { ProjectVisual } from "@/config/site";

const labelTone: Record<string, string> = {
  "Example artifact": "border-primary/20 bg-primary/10 text-primary",
  "Concept example": "border-blue-200 bg-blue-50 text-blue-800",
  "Sample artifact": "border-slate-300 bg-slate-100 text-slate-700",
};

type Tier = "High" | "Medium" | "Low";

const tierTone: Record<Tier, { pill: string; bar: string; softBar: string; text: string }> = {
  High: {
    pill: "border-emerald-200 bg-emerald-50 text-emerald-800",
    bar: "bg-emerald-500",
    softBar: "bg-emerald-300",
    text: "text-emerald-700",
  },
  Medium: {
    pill: "border-amber-200 bg-amber-50 text-amber-800",
    bar: "bg-amber-500",
    softBar: "bg-amber-300",
    text: "text-amber-700",
  },
  Low: {
    pill: "border-rose-200 bg-rose-50 text-rose-800",
    bar: "bg-rose-500",
    softBar: "bg-rose-300",
    text: "text-rose-700",
  },
};

const targetTierTone: Record<Tier, string> = {
  High: tierTone.High.bar,
  Medium: tierTone.Medium.bar,
  Low: tierTone.Low.bar,
};

export function SelectedWork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = siteConfig.projects[selectedIndex];

  return (
    <section id="work" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sample work"
          title="Decision-ready artifacts, not generic summaries."
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
                      View artifact
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
                <ArtifactVisual visual={selectedProject.visual} />
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

function ArtifactVisual({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="border-b border-border/70 bg-primary/[0.04] px-4 py-3">
        <p className="text-sm font-semibold text-foreground">{visual.title}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{visual.subtitle}</p>
        {visual.kind === "her2-expansion" ? <TierLegend context="her2" /> : <TierLegend />}
      </div>
      <div className="overflow-x-auto p-4">
        {visual.kind === "her2-expansion" ? <Her2ExpansionVisual visual={visual} /> : null}
        {visual.kind === "cldn6-readiness" ? <Cldn6ReadinessVisual visual={visual} /> : null}
        {visual.kind === "target-ranking" ? <TargetRankingVisual visual={visual} /> : null}
        {visual.kind === "biomarker-review" ? <BiomarkerReviewVisual visual={visual} /> : null}
      </div>
    </div>
  );
}

function Her2ExpansionVisual({ visual }: { visual: Extract<ProjectVisual, { kind: "her2-expansion" }> }) {
  const maxResponse = 90;
  const maxPrevalence = 15;
  const responseRows = [...visual.rows].sort((a, b) => (b.response ?? -1) - (a.response ?? -1));
  const prevalenceRows = [...visual.rows].sort((a, b) => b.prevalence - a.prevalence);
  const priorityRows = [...visual.rows].sort((a, b) => a.finalRank - b.finalRank);

  return (
    <div className="min-w-[860px] space-y-5">
      <div className="grid gap-2 rounded-lg border border-border/70 bg-background p-3 text-[0.7rem] leading-5 text-muted-foreground sm:grid-cols-3">
        <p><span className="font-semibold text-emerald-700">High:</span> near-term expansion hypothesis to pressure-test first.</p>
        <p><span className="font-semibold text-amber-700">Medium:</span> plausible follow-on; needs differentiation or feasibility support.</p>
        <p><span className="font-semibold text-rose-700">Low:</span> hold unless asset-specific internal data change the case.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <RankedBarPanel
          title="1. Response signal rank"
          message="Highest public ORR signals are endometrial, cervical, and ovarian, but N is small."
          footnote="DESTINY-PanTumor02 centrally confirmed HER2 IHC 3+ cohorts; ORR shown with cohort N."
        >
          {responseRows.map((row) => (
            <RankedBar
              key={row.tumor}
              label={row.tumor}
              value={row.response ?? 0}
              max={maxResponse}
              valueLabel={row.response === null ? "n/a" : `${formatPercent(row.response)} ORR (n=${row.responseN})`}
              tier={row.priority}
              muted={row.response === null}
              neutral
            />
          ))}
        </RankedBarPanel>

        <RankedBarPanel
          title="2. Screening-yield rank"
          message="Bladder and uterine serous have the highest public IHC 3+ prevalence; pancreatic has the weakest yield."
          footnote="Real-world HER2 IHC dataset; prevalence shown with IHC 3+ count / tested N."
        >
          {prevalenceRows.map((row) => (
            <RankedBar
              key={row.tumor}
              label={row.tumor}
              value={row.prevalence}
              max={maxPrevalence}
              valueLabel={row.prevalenceLabel ?? `${row.prevalence}% (${row.prevalencePositive}/${row.prevalenceN})`}
              tier={row.priority}
              neutral
            />
          ))}
        </RankedBarPanel>
      </div>

      <div className="rounded-xl border border-border/80 bg-background">
        <div className="border-b border-border/70 bg-muted/35 px-4 py-3">
          <p className="text-sm font-semibold text-foreground">3. Evidence-backed prioritization matrix</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Final rank integrates response strength, prevalence/screening yield, and practical differentiation. Scores are 1-5 directional judgments from public data.
          </p>
        </div>
        <div className="grid grid-cols-[1.05fr_0.5fr_0.6fr_0.6fr_0.65fr_0.58fr_0.62fr_1.65fr] gap-2 p-4 text-xs">
          {["Segment", "ORR", "Prevalence", "Screening", "Differentiation", "Overall", "Priority", "Evidence behind rank"].map((header) => (
            <p key={header} className="text-[0.62rem] font-semibold uppercase tracking-[0.11em] text-foreground/50">{header}</p>
          ))}
          {priorityRows.map((row) => (
            <div key={row.tumor} className="contents">
              <div className="border-t border-border/70 py-3">
                <p className="font-semibold text-foreground">#{row.finalRank} {row.tumor}</p>
                <p className="mt-1 text-[0.68rem] text-muted-foreground">{row.screenBurden}</p>
              </div>
              <HeatCell value={row.matrix.response} />
              <HeatCell value={row.matrix.prevalence} />
              <HeatCell value={row.matrix.screening} />
              <HeatCell value={row.matrix.differentiation} />
              <div className="border-t border-border/70 py-3">
                <p className="font-semibold text-foreground">{row.finalScore.toFixed(1)}</p>
              </div>
              <div className="border-t border-border/70 py-3">
                <PriorityPill priority={row.priority} />
              </div>
              <div className="space-y-1 border-t border-border/70 py-3 leading-5 text-muted-foreground">
                <p>{row.rationale}</p>
                <p><span className="font-semibold text-foreground/70">Screening:</span> {row.screeningEvidence}</p>
                <p><span className="font-semibold text-foreground/70">Differentiation:</span> {row.differentiationEvidence}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border/70 px-4 py-3">
          <p className="text-[0.68rem] leading-5 text-muted-foreground">
            Annotation: response score considers ORR and IHC 3+ cohort N; prevalence and screening scores use real-world IHC 3+ rate and approximate patients screened per positive; differentiation reflects public competitive and histology-specific context, including whether a clear histology-specific question or an existing HER2-directed standard changes the opportunity. Overall score is the average of the four displayed evidence dimensions.
          </p>
        </div>
      </div>

      <ChartNote>
        Takeaway: prioritize uterine serous/endometrial, bladder/urothelial, and cervical hypotheses for first-pass pressure testing. ORR and prevalence come from separate public datasets, so the matrix is an expansion-screening framework, not an efficacy comparison.
      </ChartNote>
    </div>
  );
}

function RankedBarPanel({ title, message, footnote, children }: { title: string; message: string; footnote: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border/80 bg-background p-4">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">{message}</p>
      <div className="mt-4 space-y-3">{children}</div>
      <p className="mt-4 border-t border-border/70 pt-3 text-[0.68rem] leading-5 text-muted-foreground">{footnote}</p>
    </div>
  );
}

function RankedBar({
  label,
  value,
  max,
  valueLabel,
  tier,
  muted = false,
  neutral = false,
}: {
  label: string;
  value: number;
  max: number;
  valueLabel: string;
  tier: Tier;
  muted?: boolean;
  neutral?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_1.35fr] items-center gap-3">
      <p className="text-xs font-medium leading-5 text-foreground">{label}</p>
      <div>
        <div className="h-2.5 overflow-hidden rounded-full bg-muted">
          <div
            className={cn("h-full rounded-full", muted ? "bg-muted-foreground/25" : neutral ? "bg-primary/70" : tierTone[tier].bar)}
            style={{ width: `${Math.min(value / max, 1) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-[0.68rem] font-semibold text-muted-foreground">{valueLabel}</p>
      </div>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

function HeatCell({ value }: { value: number }) {
  const tone =
    value >= 5
      ? "bg-emerald-600 text-white"
      : value === 4
        ? "bg-emerald-200 text-emerald-950"
        : value === 3
          ? "bg-amber-200 text-amber-950"
          : value === 2
            ? "bg-orange-100 text-orange-950"
            : "bg-rose-100 text-rose-950";

  return (
    <div className="border-t border-border/70 py-3">
      <span className={cn("inline-flex h-7 w-9 items-center justify-center rounded-md text-xs font-semibold", tone)}>
        {value}
      </span>
    </div>
  );
}

function Cldn6ReadinessVisual({ visual }: { visual: Extract<ProjectVisual, { kind: "cldn6-readiness" }> }) {
  return (
    <div className="min-w-[760px] space-y-3">
      <div className="grid grid-cols-[1.05fr_1.05fr_0.65fr_0.65fr_0.65fr_0.65fr] gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-foreground/50">
        <span>Tumor</span>
        <span>Public prevalence signal</span>
        <span>Assay</span>
        <span>Tissue</span>
        <span>Trial</span>
        <span>Confidence</span>
      </div>
      {visual.rows.map((row) => (
        <div key={row.tumor} className="grid grid-cols-[1.05fr_1.05fr_0.65fr_0.65fr_0.65fr_0.65fr] items-center gap-3 text-xs">
          <p className="font-medium text-foreground">{row.tumor}</p>
          <p className="leading-5 text-muted-foreground">{row.prevalence}</p>
          <ScoreDots value={row.assay} tier={row.confidence} />
          <ScoreDots value={row.tissue} tier={row.confidence} />
          <ScoreDots value={row.trial} tier={row.confidence} />
          <ConfidencePill confidence={row.confidence} />
        </div>
      ))}
      <ChartNote>
        Readiness scores are qualitative public-data judgments. Internal cutoff, staining, tissue workflow, and expression-response data would change confidence.
      </ChartNote>
    </div>
  );
}

function TargetRankingVisual({ visual }: { visual: Extract<ProjectVisual, { kind: "target-ranking" }> }) {
  const weightedScore = (row: (typeof visual.rows)[number]) =>
    ((row.expression * visual.criteria[0].weight +
      row.safety * visual.criteria[1].weight +
      row.assay * visual.criteria[2].weight +
      row.feasibility * visual.criteria[3].weight +
      row.competition * visual.criteria[4].weight) /
      100).toFixed(1);

  return (
    <div className="min-w-[680px] space-y-4">
      <div className="grid gap-2 sm:grid-cols-5">
        {visual.criteria.map((criterion) => (
          <div key={criterion.label} className="rounded-lg border border-border/70 bg-muted/35 p-2">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-foreground/50">{criterion.label}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{criterion.weight}%</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {visual.rows.map((row) => (
          <div key={row.candidate} className="grid gap-2 rounded-lg border border-border/70 p-3 sm:grid-cols-[1fr_0.5fr_1.4fr_0.55fr] sm:items-center">
            <p className="text-sm font-medium text-foreground">{row.candidate}</p>
            <p className="text-sm font-semibold text-primary">{weightedScore(row)}</p>
            <div className="grid grid-cols-5 gap-1.5">
              {[row.expression, row.safety, row.assay, row.feasibility, row.competition].map((value, index) => (
                <div key={`${row.candidate}-${index}`} className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className={cn("h-full rounded-full", tierTone[row.confidence].bar)} style={{ width: `${value * 20}%` }} />
                </div>
              ))}
            </div>
            <ConfidencePill confidence={row.confidence} />
          </div>
        ))}
      </div>
      <ChartNote>
        Synthetic ADC-style score: target expression 30%, normal tissue safety 20%, assay readiness 20%, trial feasibility 15%, whitespace 15%.
      </ChartNote>
    </div>
  );
}

function BiomarkerReviewVisual({ visual }: { visual: Extract<ProjectVisual, { kind: "biomarker-review" }> }) {
  const sortedPatients = [...visual.patients].sort((a, b) => a.change - b.change);
  const maxAbs = 80;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/50">Best change from baseline</p>
        <div className="space-y-2">
          {sortedPatients.map((patient) => {
            const width = Math.min(Math.abs(patient.change), maxAbs) / maxAbs * 50;
            const isResponse = patient.change < 0;
            return (
              <div key={patient.id} className="grid grid-cols-[2.1rem_1fr_2.8rem] items-center gap-2 text-xs">
                <span className="font-medium text-foreground">{patient.id}</span>
                <div className="relative h-5 rounded bg-muted">
                  <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
                  <div
                    className={cn("absolute top-1 h-3 rounded", isResponse ? `right-1/2 ${targetTierTone[patient.target]}` : "left-1/2 bg-rose-500")}
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className={cn("font-semibold", isResponse ? tierTone[patient.target].text : tierTone.Low.text)}>{patient.change}%</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/50">Duration and data quality</p>
        <div className="space-y-2">
          {visual.patients.map((patient) => (
            <div key={patient.id} className="grid grid-cols-[2.1rem_1fr_2.4rem] items-center gap-2 text-xs">
              <span className="font-medium text-foreground">{patient.id}</span>
              <div className="h-5 overflow-hidden rounded bg-muted">
                <div className={cn("h-full rounded", patient.status === "PD" ? tierTone.Low.softBar : targetTierTone[patient.target])} style={{ width: `${patient.duration * 10}%` }} />
              </div>
              <span className="font-semibold text-foreground">{patient.status}</span>
              <span className="col-start-2 col-end-4 -mt-1 text-[0.68rem] text-muted-foreground">
                {patient.target} target{patient.missing.length ? `; missing ${patient.missing.join(", ")}` : "; complete"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ChartNote className="lg:col-span-2">
        Synthetic patient-level data. Colors encode target tier; missing assays and paired biopsies are shown because they directly affect interpretation confidence.
      </ChartNote>
    </div>
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

function MetricBar({ value, max, label, tier, muted = false }: { value: number; max: number; label: string; tier: Tier; muted?: boolean }) {
  return (
    <div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full", muted ? "bg-muted-foreground/25" : tierTone[tier].bar)}
          style={{ width: `${Math.min(value / max, 1) * 100}%` }}
        />
      </div>
      <p className="mt-1 text-[0.68rem] font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}

function ScoreDots({ value, tier }: { value: number; tier: Tier }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={cn("h-1.5 w-1.5 rounded-full", index < value ? tierTone[tier].bar : "bg-muted")} />
      ))}
    </div>
  );
}

function TierLegend({ context = "default" }: { context?: "default" | "her2" }) {
  const labels = {
    default: { High: "High", Medium: "Medium", Low: "Low" },
    her2: { High: "High priority", Medium: "Medium priority", Low: "Low priority" },
  }[context];

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {(["High", "Medium", "Low"] as Tier[]).map((tier) => (
        <span key={tier} className="inline-flex items-center gap-1.5 text-[0.68rem] font-medium text-muted-foreground">
          <span className={cn("h-2 w-2 rounded-full", tierTone[tier].bar)} />
          {labels[tier]}
        </span>
      ))}
    </div>
  );
}

function ChartNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("rounded-lg border border-border/70 bg-muted/35 px-3 py-2 text-[0.7rem] leading-5 text-muted-foreground", className)}>
      {children}
    </p>
  );
}

function PriorityPill({ priority }: { priority: Tier }) {
  return (
    <span
      className={cn(
        "w-fit rounded-full border px-2 py-1 text-[0.68rem] font-semibold",
        tierTone[priority].pill,
      )}
    >
      {priority}
    </span>
  );
}

function ConfidencePill({ confidence }: { confidence: Tier }) {
  return (
    <span
      className={cn(
        "w-fit rounded-full border px-2 py-1 text-[0.68rem] font-semibold",
        tierTone[confidence].pill,
      )}
    >
      {confidence}
    </span>
  );
}

function ProjectTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/80 bg-background">
      <div className="overflow-x-auto">
        <table className="min-w-[960px] text-left text-xs">
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
                    {isTier(cell) ? <PriorityPill priority={cell} /> : cell}
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

function isTier(value: string): value is Tier {
  return value === "High" || value === "Medium" || value === "Low";
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
