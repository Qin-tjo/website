export type WorkType = "Example artifact" | "Concept example" | "Sample artifact";

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
        "DESTINY-PanTumor02 IHC 3+ ORR varied by cohort: endometrial 84.6%, cervical 75.0%, ovarian 63.6%, bladder 56.3%, biliary tract 56.3%, pancreatic 0%.",
        "A 65,075-sample real-world study reported pan-tumor IHC 3+ prevalence of 3.1%, with large tumor-type differences.",
      ],
      table: {
        columns: ["Segment", "Priority", "Why"],
        rows: [
          ["Uterine serous / endometrial IHC 3+", "High", "Strong response signal; uterine serous has high IHC 3+ prevalence."],
          ["Bladder / urothelial IHC 3+", "High", "High prevalence and response signal, but ADC sequencing matters."],
          ["Cervical IHC 3+", "High", "Strong response signal; small n and screening assumptions need testing."],
          ["Biliary tract IHC 3+", "Medium", "Validated HER2 biology but crowded after zanidatamab approval."],
          ["Pancreatic IHC 3+", "Low", "Low prevalence and weak public response signal."],
        ],
      },
      interpretation: [
        "Start with IHC 3+ expansion logic, then keep HER2-low, ERBB2-amplified, ERBB2-mutant, and heterogeneous disease as separate hypotheses.",
        "Pair response signal with screen-failure burden before opening cohorts.",
        "Use competition as a biomarker-strategy variable, not a separate commercial afterthought.",
      ],
      recommendation:
        "Prioritize IHC 3+ uterine serous/endometrial, bladder/urothelial, and cervical hypotheses first; treat biliary tract as a differentiation case and pancreatic as a low-priority public-data signal.",
      caveat:
        "The ranking would change with asset-specific potency, bystander effect, toxicity, internal IHC prevalence, tissue availability, and line-of-therapy assumptions.",
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
        "CATALINA-2 requires CLDN6 tumor positivity by a reference laboratory assay before treatment.",
      ],
      table: {
        columns: ["Indication", "Priority", "Main risk", "Next evidence"],
        rows: [
          ["Ovarian follow-ons", "High", "Cutoff, subtype, and resistance questions remain.", "Expression-response and progression-sample plan"],
          ["Endometrial", "Medium-high", "Histology-specific prevalence and cutoff transfer need validation.", "IHC prevalence, membrane localization, archival/fresh concordance"],
          ["Testicular / GCT", "Medium", "Small population and expansion feasibility.", "Screening model and post-standard-of-care patient flow"],
          ["NSCLC", "Medium", "Low/heterogeneous expression and small-biopsy constraints.", "Tissue success rate and screen-failure burden"],
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
          ["1", "Tumor Type 1, biomarker-high subtype", "4.2", "Medium-high", "Open expansion if assay cutoff and tissue success are confirmed."],
          ["2", "Tumor Type 2, resistant-line setting", "3.9", "Medium", "Advance after cutoff and normal tissue review."],
          ["3", "Molecularly enriched subset", "3.8", "Medium", "Run focused prevalence and feasibility study."],
          ["4", "Broad unselected population", "3.2", "Low-medium", "Hold unless enriched subgroup emerges."],
          ["5", "Rare high-expression population", "3.1", "Medium", "Consider lifecycle or investigator-led path."],
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
      references: [
        { label: "Synthetic example based on public-data workflow", href: "#work" },
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
      references: [
        { label: "Synthetic example based on biomarker-review workflow", href: "#work" },
      ],
    },
  ] satisfies Project[],
  about: {
    heading: "Turning complex oncology evidence into clear next-step decisions.",
    body:
      "I am a cancer biologist with deep experience in functional genomics, translational research, and clinical biomarker strategy.",
    credibility:
      "My work has connected early discovery biology with clinical-stage oncology decisions. At Harvard, I used CRISPR screening and high-throughput functional genomics to study immunotherapy targets and connect perturbation biology with immune mechanisms and computational analysis. At Bicycle Therapeutics, I worked across target selection, platform target characterization, patient stratification, clinical biomarker planning, and response/resistance interpretation for targeted oncology programs.",
    note:
      "I help teams make sense of complex biology and turn it into clear, decision-ready outputs. Teams work with me when they need rigorous scientific thinking, clear synthesis, and practical recommendations they can act on.",
  },
};

export type SiteConfig = typeof siteConfig;
