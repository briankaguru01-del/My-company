// Lightweight analytics wrapper.
//
// This is intentionally decoupled from any specific analytics provider.
// If NEXT_PUBLIC_GA_MEASUREMENT_ID is not set, every call below is a
// harmless no-op — analytics is never a hard dependency for the site to
// function.
//
// Events tracked across the site:
//   - page_view                 (automatic, via GA script)
//   - start_diagnostic_click    (any "Start Your AI Diagnostic" CTA)
//   - diagnostic_form_started   (first interaction with the intake form)
//   - diagnostic_form_submitted (successful form submission)

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, params);
  } catch {
    // Never let analytics break the site.
  }
}

export function trackCtaClick(location: string): void {
  trackEvent("start_diagnostic_click", { location });
}

export function trackFormStarted(): void {
  trackEvent("diagnostic_form_started");
}

export function trackFormSubmitted(): void {
  trackEvent("diagnostic_form_submitted");
}
