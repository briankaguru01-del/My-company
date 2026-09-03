export type WorkItem = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  screenshot?: string;
  screenshotAlt?: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "diagnostic-intake-automation",
    title: "Diagnostic intake automation",
    description:
      "Every submission from the AI Diagnostic form is logged automatically, the team is notified the moment a new lead comes in, and the lead receives an instant welcome email with a direct link to book a call, no manual follow-up required.",
    tools: ["Google Sheets", "Apps Script", "Gmail"],
    // Drop a screenshot at public/work/diagnostic-intake-automation.png,
    // then set screenshot below to "/work/diagnostic-intake-automation.png".
    screenshot: undefined,
    screenshotAlt:
      "Automated welcome email sent to a new diagnostic lead, with a direct link to book a call.",
  },
];
