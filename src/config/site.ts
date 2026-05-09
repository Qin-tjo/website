export type WorkType = "Example artifact" | "Concept example" | "Sample artifact";

export type ProjectVisual =
  | {
      kind: "her2-expansion";
      title: string;
      subtitle: string;
      rows: {
        tumor: string;
        prevalence: number;
        prevalenceLabel?: string;
        prevalenceN: number;
        prevalencePositive: number;
        response: number | null;
        responseN: number | null;
        screenBurden: string;
        priority: "High" | "Medium" | "Low";
        finalRank: number;
        finalScore: number;
        matrix: {
          response: number;
          prevalence: number;
          screening: number;
          differentiation: number;
        };
        rationale: string;
      }[];
    }
  | {
      kind: "cldn6-readiness";
      title: string;
      subtitle: string;
      rows: {
        tumor: string;
        prevalence: string;
        assay: number;
        tissue: number;
        trial: number;
        confidence: "High" | "Medium" | "Low";
      }[];
    }
  | {
      kind: "target-ranking";
      title: string;
      subtitle: string;
      criteria: { label: string; weight: number }[];
      rows: {
        candidate: string;
        expression: number;
        safety: number;
        assay: number;
        feasibility: number;
        competition: number;
        confidence: "High" | "Medium" | "Low";
      }[];
    }
  | {
      kind: "biomarker-review";
      title: string;
      subtitle: string;
      patients: {
        id: string;
        change: number;
        duration: number;
        target: "High" | "Medium" | "Low";
        status: "PR" | "SD" | "PD";
        missing: string[];
      }[];
    };

export type Project = {
  title: string;
  category: string;
  workType: WorkType;
  description: string;
  question: string;
  context: string;
  evidence: string[];
  table?: {
    columns: string[];
    rows: string[][];
  };
  interpretation: string[];
  recommendation: string;
  caveat: string;
  visual: ProjectVisual;
  references: {
    label: string;
    href: string;
  }[];
};

export type Service = {
  title: string;
  outcome: string;
  bestFit: string;
  deliverables: string[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "Qin Tjokrosurjo, PhD",
  shortName: "Qin Tjokrosurjo",
  role: "Independent oncology biomarker strategy consultant",
  email: "qinyu5155@gmail.com",
  calendlyUrl: "", // TODO: Optional. Add later if you want, but the site keeps email primary.
  headshot: {
    src: `${basePath}/qin-headshot.jpg`,
    alt: "Qin Tjokrosurjo, PhD",
    initials: "QT",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/qin-tjokrosurjo-527383138/",
    googleScholar: "", // TODO: Optional.
    researchGate: "", // TODO: Optional.
    x: "", // TODO: Optional.
  },
  seo: {
    title: "Qin Tjokrosurjo, PhD | Oncology Biomarker Strategy Consultant",
    description:
      "Independent oncology biomarker strategy consulting for target-expression-led indication expansion, clinical biomarker data interpretation, and translational decision-making.",
    ogTitle: "Qin Tjokrosurjo, PhD | Oncology Biomarker Strategy",
    ogDescription:
      "Scientific consulting for oncology biotechs making target, indication, biomarker, and translational development decisions.",
  },
  cta: {
    primary: "Start a project inquiry",
  },
  hero: {
    eyebrow: "Independent scientific consulting for targeted oncology teams",
    headline: "Biomarker strategy and translational decision support for oncology programs.",
    subheadline:
      "I help oncology teams evaluate where to expand, whether biomarker evidence is strong enough for the decision, and how to interpret early response or resistance signals.",
    credibility:
      "Experience across target selection, platform target characterization, patient stratification, clinical biomarker strategy, and response/resistance analysis in targeted oncology programs.",
  },
  services: [
    {
      title: "Target Selection",
      outcome:
        "Prioritize oncology targets using tumor and normal tissue expression, biology, internalization or modality fit, competitive context, and translational feasibility.",
      bestFit:
        "Discovery, platform, and early pipeline teams deciding which target or target class deserves deeper investment.",
      deliverables: [
        "Target shortlist with evidence grading",
        "Tumor and normal tissue expression review",
        "Modality-fit and translational risk memo",
      ],
    },
    {
      title: "Indication Expansion Readout",
      outcome:
        "Rank tumor types or expansion cohorts using target biology, expression or imaging evidence, assay feasibility, clinical practicality, and competition.",
      bestFit:
        "Early oncology biotechs, platform companies, ADC/radioconjugate teams, and groups deciding where to take a target or asset next.",
      deliverables: [
        "Target/indication ranking matrix with confidence",
        "Evidence table with source traceability",
        "Tumor-type shortlist with decision gates",
      ],
    },
    {
      title: "Clinical Biomarker Data Review",
      outcome:
        "Translate IHC, RNA, DNA, imaging, immune, response, and clinical datasets into patient-subset, response, resistance, and next-analysis hypotheses.",
      bestFit:
        "Phase 1/2 oncology teams with emerging translational data and limited internal bandwidth for integrated interpretation.",
      deliverables: [
        "Biomarker data review memo",
        "Candidate response and resistance hypotheses",
        "Slide-ready internal discussion summary",
      ],
    },
    {
      title: "Translational Strategy & Competitive Context",
      outcome:
        "Build a practical plan for patient selection, biomarker endpoints, sample strategy, combination rationale, and differentiation.",
      bestFit:
        "Pre-IND to Phase 2 oncology programs preparing expansion cohorts, proof-of-concept studies, investor updates, or differentiation work.",
      deliverables: [
        "Translational biomarker plan",
        "Biomarker endpoint and sample strategy table",
        "Competitive and combination opportunity memo",
      ],
    },
  ] satisfies Service[],
  fit: {
    good: [
      "Early oncology biotechs with targeted therapy, ADC, radioconjugate, or biomarker-selected programs",
      "Translational, clinical development, research, or strategy leaders who need decision-ready synthesis",
      "Teams with public or internal target-expression, imaging, IHC, RNA, DNA, immune, response, or competitive data",
    ],
    notFit: [
      "Routine CRO execution or wet-lab assay outsourcing",
      "Regulatory filing ownership or formal medical/regulatory advice",
      "Broad commercial strategy without a target, biomarker, translational, or indication decision",
    ],
  },
  projects: [
    {
      title: "HER2 Expansion Biomarker Sprint",
      category: "Indication expansion strategy",
      workType: "Example artifact",
      description:
        "A public-data example showing how HER2 expression, amplification, mutation, heterogeneity, and assay practicality can shape expansion decisions.",
      question:
        "For a HER2-directed asset, which tumor segments deserve expansion investment beyond a broad HER2-positive basket?",
      context:
        "Public-data indication expansion prioritization for a HER2-directed targeted oncology asset.",
      evidence: [
        "FDA granted tumor-agnostic accelerated approval for T-DXd in HER2-positive IHC 3+ solid tumors in 2024.",
        "DESTINY-PanTumor02 centrally confirmed IHC 3+ cohorts were small: endometrial 84.6% ORR (n=13), cervical 75.0% (n=8), ovarian 63.6% (n=11), bladder 56.3% (n=16), biliary tract 56.3% (n=16), and pancreatic 0% (n=2).",
        "A 65,075-sample real-world study reported IHC 3+ prevalence ranging from 13.9% in bladder cancer and 13.6% in uterine serous carcinoma to 1.1% in pancreatic adenocarcinoma.",
      ],
      interpretation: [
        "ORR ranking alone would over-rank small cohorts; prevalence ranking alone would over-rank screening yield. The priority matrix forces those signals to be read together.",
        "Endometrial is a histology-specific opportunity: DESTINY-PanTumor02 reports an endometrial IHC 3+ response signal, while real-world screening yield is strongest in uterine serous carcinoma.",
        "Ovarian and biliary tract remain plausible follow-ons, but they need clearer differentiation, subtype logic, or asset-specific data before broad expansion.",
      ],
      recommendation:
        "Use uterine serous/endometrial, bladder/urothelial, and cervical IHC 3+ disease as the first expansion hypotheses to pressure-test; keep ovarian and biliary tract as conditional follow-ons, and deprioritize pancreatic unless internal data change the biology.",
      caveat:
        "The ranking would change with asset-specific potency, bystander effect, toxicity, internal IHC prevalence, tissue availability, line-of-therapy assumptions, and the low patient N in several IHC 3+ cohorts.",
      visual: {
        kind: "her2-expansion",
        title: "HER2 IHC 3+ expansion prioritization",
        subtitle: "Three public-data views: response rank, screening-yield rank, and an evidence-backed prioritization matrix.",
        rows: [
          {
            tumor: "Endometrial / uterine serous",
            prevalence: 13.6,
            prevalenceLabel: "13.6% serous (152/1119); 2.7% endometrial (107/4029)",
            prevalenceN: 1119,
            prevalencePositive: 152,
            response: 84.6,
            responseN: 13,
            screenBurden: "~7 screened in uterine serous",
            priority: "High",
            finalRank: 1,
            finalScore: 4.5,
            matrix: { response: 5, prevalence: 5, screening: 5, differentiation: 3 },
            rationale: "Best combined case: strongest ORR, high-yield uterine serous screening, and clear histology-specific question.",
          },
          {
            tumor: "Bladder / urothelial",
            prevalence: 13.9,
            prevalenceLabel: "13.9% (246/1767)",
            prevalenceN: 1767,
            prevalencePositive: 246,
            response: 56.3,
            responseN: 16,
            screenBurden: "~7 screened per IHC 3+",
            priority: "High",
            finalRank: 2,
            finalScore: 4.0,
            matrix: { response: 3, prevalence: 5, screening: 5, differentiation: 3 },
            rationale: "Highest prevalence and reasonable response signal; differentiation and treatment-sequencing questions need work.",
          },
          {
            tumor: "Cervical",
            prevalence: 4.8,
            prevalenceLabel: "4.8% (57/1190)",
            prevalenceN: 1190,
            prevalencePositive: 57,
            response: 75.0,
            responseN: 8,
            screenBurden: "~21 screened per IHC 3+",
            priority: "High",
            finalRank: 3,
            finalScore: 3.8,
            matrix: { response: 5, prevalence: 3, screening: 3, differentiation: 4 },
            rationale: "Strong ORR but very small response cohort and lower screening yield than uterine serous or bladder.",
          },
          {
            tumor: "Ovarian epithelial",
            prevalence: 2.9,
            prevalenceLabel: "2.9% (166/5644)",
            prevalenceN: 5644,
            prevalencePositive: 166,
            response: 63.6,
            responseN: 11,
            screenBurden: "~34 screened per IHC 3+",
            priority: "Medium",
            finalRank: 4,
            finalScore: 3.3,
            matrix: { response: 4, prevalence: 3, screening: 3, differentiation: 3 },
            rationale: "Encouraging response signal, but lower prevalence and likely subtype dependence make it a follow-on hypothesis.",
          },
          {
            tumor: "Biliary tract",
            prevalence: 3.4,
            prevalenceLabel: "3.4% cholangiocarcinoma/gallbladder (43/1275)",
            prevalenceN: 1275,
            prevalencePositive: 43,
            response: 56.3,
            responseN: 16,
            screenBurden: "~29 screened per IHC 3+",
            priority: "Medium",
            finalRank: 5,
            finalScore: 2.8,
            matrix: { response: 3, prevalence: 3, screening: 3, differentiation: 2 },
            rationale: "Biologically credible, but competitive differentiation is harder because HER2-directed options already exist.",
          },
          {
            tumor: "Pancreatic",
            prevalence: 1.1,
            prevalenceLabel: "1.1% (37/3468)",
            prevalenceN: 3468,
            prevalencePositive: 37,
            response: 0,
            responseN: 2,
            screenBurden: "~91 screened per IHC 3+",
            priority: "Low",
            finalRank: 6,
            finalScore: 1.0,
            matrix: { response: 1, prevalence: 1, screening: 1, differentiation: 1 },
            rationale: "Low prevalence and no public response signal in an extremely small IHC 3+ subset.",
          },
        ],
      },
      references: [
        {
          label: "FDA T-DXd tumor-agnostic approval",
          href: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-fam-trastuzumab-deruxtecan-nxki-unresectable-or-metastatic-her2",
        },
        { label: "DESTINY-PanTumor02 primary data", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10730032/" },
        { label: "Real-world HER2 IHC 3+ prevalence", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12203389/" },
        { label: "FDA Ziihera trial snapshot", href: "https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-ziihera" },
      ],
    },
    {
      title: "CLDN6 Expansion Readiness Memo",
      category: "Target-expression strategy",
      workType: "Concept example",
      description:
        "A public-data memo assessing CLDN6 expansion through prevalence, assay readiness, heterogeneity, tissue access, and trial practicality.",
      question:
        "Which CLDN6-positive tumor types are actionable once assay transferability, tissue logistics, and clinical feasibility are considered together?",
      context:
        "Public-data pressure test for CLDN6 expansion readiness; not a claim about any company's internal strategy.",
      evidence: [
        "TORL publicly describes TORL-1-23 / ixotatug vedotin development in CLDN6-positive platinum-resistant ovarian cancer and broader CLDN6-positive tumors.",
        "The CLDN6-23-ADC preclinical paper reported elevated CLDN6 in 29% of ovarian epithelial carcinomas, about 45% of high-grade serous ovarian carcinomas, and 11% of endometrial carcinomas.",
        "CATALINA-2 requires CLDN6 tumor positivity by a reference laboratory assay and tumor tissue before treatment.",
      ],
      table: {
        columns: ["Indication", "Public signal", "Main risk", "Next evidence"],
        rows: [
          ["Ovarian follow-ons", "45% HGSOC / 29% ovarian epithelial elevated CLDN6", "Cutoff, subtype, and resistance questions remain.", "Expression-response and progression-sample plan"],
          ["Endometrial", "11% elevated CLDN6 in preclinical IHC series", "Histology-specific cutoff transfer needs validation.", "Membrane localization, archival/fresh concordance"],
          ["Testicular / GCT", "Publicly listed CLDN6-relevant tumor type", "Small population and expansion feasibility.", "Screening model and post-standard-of-care patient flow"],
          ["NSCLC", "Publicly listed CLDN6-relevant tumor type", "Low/heterogeneous expression and small-biopsy constraints.", "Tissue success rate and screen-failure burden"],
        ],
      },
      interpretation: [
        "Do not treat CLDN6 positivity as a single market. Rank tumor types by expression, assay feasibility, tissue access, and cohort practicality.",
        "Pressure-test whether an ovarian assay/cutoff strategy translates across histologies.",
        "Build response/resistance collection early: IHC intensity, heterogeneity, RNA/protein concordance, prior therapy, and progression tissue where feasible.",
      ],
      recommendation:
        "Use ovarian data as the assay and biology anchor, then rank endometrial, testicular/GCT, and NSCLC through a feasibility-weighted expansion matrix before opening broad CLDN6-positive cohorts.",
      caveat:
        "Public sources do not disclose the exact CLDN6 assay, scoring algorithm, positivity cutoff, or tissue workflow, so internal assay and sample data would be decision-changing.",
      visual: {
        kind: "cldn6-readiness",
        title: "CLDN6 expansion readiness is not prevalence alone",
        subtitle: "Qualitative readiness view: 1 = weak public support, 5 = strong public support.",
        rows: [
          { tumor: "Ovarian follow-ons", prevalence: "29-45% public IHC signal", assay: 4, tissue: 4, trial: 4, confidence: "High" },
          { tumor: "Endometrial", prevalence: "11% public IHC signal", assay: 3, tissue: 4, trial: 3, confidence: "Medium" },
          { tumor: "Testicular / GCT", prevalence: "Publicly relevant, prevalence gap", assay: 2, tissue: 3, trial: 2, confidence: "Low" },
          { tumor: "NSCLC", prevalence: "Publicly relevant, prevalence gap", assay: 2, tissue: 2, trial: 4, confidence: "Low" },
        ],
      },
      references: [
        { label: "TORL Bio official site", href: "https://torlbio.com/" },
        {
          label: "TORL Series C / CLDN6 update",
          href: "https://www.prnewswire.com/news-releases/torl-biotherapeutics-secures-96m-series-c-financing-and-presents-updated-phase-1-results-of-novel-claudin-6-targeted-antibody-drug-conjugate-torl-1-23-at-the-2025-european-society-of-medical-oncology-congress-302576530.html",
        },
        { label: "CLDN6-23-ADC preclinical paper", href: "https://pubmed.ncbi.nlm.nih.gov/36884217/" },
        { label: "CATALINA-2 trial listing", href: "https://clinicaltrials.gov/study/NCT06690775" },
      ],
    },
    {
      title: "Target-Ranking Matrix",
      category: "Target evaluation",
      workType: "Sample artifact",
      description:
        "A synthetic matrix for ranking tumor types by target expression, normal tissue risk, assay feasibility, trial practicality, and whitespace.",
      question:
        "How should a team move from a broad target-positive landscape to a defensible expansion shortlist?",
      context:
        "Synthetic example of a target and indication prioritization readout for a targeted oncology conjugate or radioconjugate program.",
      evidence: [
        "Target expression alone is not enough; RNA/protein concordance, normal tissue expression, and membrane localization can change priority.",
        "Clinical feasibility can outweigh biology when tissue access, screen failure, or site activation burden is high.",
        "Competitive whitespace and combination rationale should be scored alongside translational evidence.",
      ],
      table: {
        columns: ["Rank", "Candidate", "Score", "Confidence", "Decision gate"],
        rows: [
          ["1", "Biomarker-high subtype", "4.3", "High", "Open expansion if assay cutoff and tissue success are confirmed."],
          ["2", "Rare high-expression population", "3.9", "Medium", "Consider lifecycle or investigator-led path; feasibility is limiting."],
          ["3", "Resistant-line setting", "3.8", "Medium", "Advance after cutoff and normal tissue review."],
          ["4", "Molecularly enriched subset", "3.6", "Medium", "Run focused prevalence and feasibility study."],
          ["5", "Broad unselected population", "3.3", "Low", "Hold unless enriched subgroup emerges."],
        ],
      },
      interpretation: [
        "Use a transparent scorecard so research, translational, clinical, and strategy teams can challenge assumptions.",
        "Separate near-term expansion bets from lifecycle or investigator-sponsored opportunities.",
        "Convert prevalence into screen-failure pressure before committing to large expansion cohorts.",
      ],
      recommendation:
        "Prioritize the top biomarker-high subtype only if source strength, assay feasibility, and tissue access clear a predefined decision gate.",
      caveat:
        "Weights should change by modality: radiopharmaceuticals need more imaging/dosimetry weight, while ADCs need more expression, localization, payload, and heterogeneity weight.",
      visual: {
        kind: "target-ranking",
        title: "Weighted ranking makes assumptions visible",
        subtitle: "Synthetic ADC-style scorecard. Higher is stronger; weights should change by modality.",
        criteria: [
          { label: "Target expression", weight: 30 },
          { label: "Normal tissue safety", weight: 20 },
          { label: "Assay readiness", weight: 20 },
          { label: "Trial feasibility", weight: 15 },
          { label: "Whitespace", weight: 15 },
        ],
        rows: [
          { candidate: "Biomarker-high subtype", expression: 5, safety: 4, assay: 4, feasibility: 4, competition: 4, confidence: "High" },
          { candidate: "Rare high-expression group", expression: 5, safety: 4, assay: 2, feasibility: 1, competition: 5, confidence: "Medium" },
          { candidate: "Resistant-line setting", expression: 4, safety: 4, assay: 3, feasibility: 4, competition: 4, confidence: "Medium" },
          { candidate: "Molecularly enriched subset", expression: 4, safety: 3, assay: 3, feasibility: 3, competition: 5, confidence: "Medium" },
          { candidate: "Broad unselected population", expression: 3, safety: 3, assay: 4, feasibility: 5, competition: 2, confidence: "Low" },
        ],
      },
      references: [
        { label: "Synthetic sample based on public-data workflow", href: "#work" },
        { label: "ADC resistance biomarker review", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12077897/" },
      ],
    },
    {
      title: "Biomarker Data Review Memo",
      category: "Clinical biomarker interpretation",
      workType: "Sample artifact",
      description:
        "A synthetic review memo interpreting early clinical biomarker data in a targeted oncology program.",
      question:
        "What can early biomarker data say about response, resistance, and next analyses without overclaiming from small samples?",
      context:
        "Synthetic example of an early clinical biomarker review for a Phase 1 targeted oncology conjugate program.",
      evidence: [
        "Target-high tumors may enrich for response, but target-high non-responders require separate resistance analysis.",
        "RNA, DNA, ctDNA, immune profiling, IHC, clinical response, prior therapy, and exposure should be interpreted together where available.",
        "Archival tissue age, tumor content, missing paired samples, and scoring reproducibility can change confidence.",
      ],
      table: {
        columns: ["Biomarker layer", "Trial role", "Decision implication"],
        rows: [
          ["IHC target expression", "Selection / cutoff refinement", "Test response enrichment and screen-failure burden."],
          ["RNA/protein concordance", "Integrated / exploratory", "Assess whether RNA supports tissue triage or expansion."],
          ["DNA / ctDNA alterations", "Exploratory resistance", "Separate target-high non-response from target-low biology."],
          ["Immune context", "Exploratory response biology", "Generate combination or resistance hypotheses."],
          ["Sample quality and missingness", "Interpretability", "Flag archival age, tumor content, and paired-sample gaps."],
        ],
      },
      interpretation: [
        "Keep target expression as the anchor, but do not treat it as the full response model.",
        "Separate enrollment cutoff decisions from exploratory biology.",
        "Report leadership-facing conclusions as hypothesis-generating unless sample size and assay validation support more.",
      ],
      recommendation:
        "Keep target expression as the selection anchor, but define response/resistance analyses before expansion so target-high non-response can be interpreted rather than hand-waved.",
      caveat:
        "Small samples, missing exposure data, archival tissue, and incomplete paired biopsies can change confidence more than the biomarker signal itself.",
      visual: {
        kind: "biomarker-review",
        title: "Synthetic patient-level response readout",
        subtitle: "Mock Phase 1-style view showing response, duration, target tier, and missingness.",
        patients: [
          { id: "P01", change: -72, duration: 9.8, target: "High", status: "PR", missing: [] },
          { id: "P02", change: -48, duration: 7.4, target: "High", status: "PR", missing: ["RNA"] },
          { id: "P03", change: -34, duration: 5.6, target: "Medium", status: "PR", missing: [] },
          { id: "P04", change: -22, duration: 4.8, target: "High", status: "SD", missing: ["paired biopsy"] },
          { id: "P05", change: -8, duration: 3.2, target: "Low", status: "SD", missing: [] },
          { id: "P06", change: 4, duration: 2.6, target: "High", status: "SD", missing: ["ctDNA"] },
          { id: "P07", change: 14, duration: 2.1, target: "Medium", status: "PD", missing: ["RNA", "paired biopsy"] },
          { id: "P08", change: 28, duration: 1.7, target: "High", status: "PD", missing: [] },
          { id: "P09", change: 42, duration: 1.4, target: "Low", status: "PD", missing: ["IHC repeat"] },
        ],
      },
      references: [
        { label: "Synthetic sample based on biomarker-review workflow", href: "#work" },
        { label: "Oncology response plot grammar", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5017943/" },
        { label: "REMARK reporting guidance", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2361579/" },
      ],
    },
  ] satisfies Project[],
  about: {
    heading: "Turning complex oncology evidence into clear next-step decisions.",
    body:
      "I am a cancer biologist with deep experience in functional genomics, translational research, and clinical biomarker strategy.",
    credibility:
      "My work has connected early discovery biology with clinical-stage oncology decisions. At Harvard, I used CRISPR screening and high-throughput functional genomics to study immunotherapy targets and connect perturbation biology with immune mechanisms and computational analysis. At Bicycle Therapeutics, I worked across target selection, platform target characterization, patient stratification, clinical biomarker planning, and response/resistance biomarker analysis for targeted oncology programs.",
    note:
      "I help teams make sense of complex biology and turn it into clear, decision-ready outputs. Teams work with me when they need rigorous scientific thinking, clear synthesis, and practical recommendations they can act on.",
  },
};

export type SiteConfig = typeof siteConfig;
