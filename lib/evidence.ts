// Third-party evidence cited across the site.
//
// Every figure here has been checked against the primary source. Keep the
// `source` and `href` fields accurate: the whole argument for leading with
// these numbers is that they are verifiable, so a stale or mis-attributed
// stat costs more credibility than it buys.

export type EvidenceStat = {
  figure: string;
  claim: string;
  source: string;
  href: string;
};

export const failureEvidence: EvidenceStat[] = [
  {
    figure: "#1",
    claim:
      "Misunderstanding what problem needs solving is the leading root cause of AI project failure, ahead of data, infrastructure and technical difficulty.",
    source: "RAND, 2024",
    href: "https://www.rand.org/pubs/research_reports/RRA2680-1.html",
  },
  {
    figure: "50%+",
    claim:
      "Of generative AI projects were abandoned after proof of concept by the end of 2025, on unclear business value, poor data quality and weak risk controls.",
    source: "Gartner",
    href: "https://www.gartner.com/en/articles/genai-project-failure",
  },
  {
    figure: "95%",
    claim:
      "Of generative AI pilots studied produced no measurable impact on profit and loss. Five in a hundred created significant value.",
    source: "MIT Media Lab, 2025",
    href: "https://www.media.mit.edu/projects/nanda/",
  },
];
