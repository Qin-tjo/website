export type Service = {
  title: string;
  outcome: string;
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
    headline:
      "Biomarker strategy and translational decision support for oncology programs.",
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
    },
    {
      title: "Indication Expansion Readout",
      outcome:
        "Rank tumor types or expansion cohorts using target biology, expression or imaging evidence, assay feasibility, clinical practicality, and competition.",
    },
    {
      title: "Clinical Biomarker Data Review",
      outcome:
        "Translate IHC, RNA, DNA, imaging, immune, response, and clinical datasets into patient-subset, response, resistance, and next-analysis hypotheses.",
    },
    {
      title: "Translational Strategy & Competitive Context",
      outcome:
        "Build a practical plan for patient selection, biomarker endpoints, sample strategy, combination rationale, and differentiation.",
    },
  ] satisfies Service[],
  about: {
    heading:
      "Turning complex oncology evidence into clear next-step decisions.",
    body: "I am a cancer biologist with deep experience in functional genomics, translational research, and clinical biomarker strategy.",
    credibility:
      "My work has connected early discovery biology with clinical-stage oncology decisions. At Harvard, I used CRISPR screening and high-throughput functional genomics to study immunotherapy targets and connect perturbation biology with immune mechanisms and computational analysis. At Bicycle Therapeutics, I worked across target selection, platform target characterization, patient stratification, clinical biomarker planning, and response/resistance biomarker analysis for targeted oncology programs.",
    note: "I help teams make sense of complex biology and turn it into clear, decision-ready outputs. Teams work with me when they need rigorous scientific thinking, clear synthesis, and practical recommendations they can act on.",
  },
};

export type SiteConfig = typeof siteConfig;
