# AI Opportunity Diagnostic — Website

A production-ready marketing website for an AI consulting business. The
site's job is simple: explain the AI Opportunity Diagnostic and drive every
visitor toward one CTA — **Start Your AI Diagnostic** — which leads to a
single intake form at `/diagnostic`.

This is a public-facing site only. It intentionally does not include a
client portal, dashboard, login, CRM, or any internal tooling. The intended
business flow is:

```
Website → Diagnostic Intake Form → Google Sheets → internal process → deliverables
```

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form state and validation (client + server)
- No database. No CRM. Form submissions are forwarded server-side as JSON to an external endpoint (Google Sheets, via `FORM_SUBMISSION_URL`).

## Pages

| Route              | Purpose                                             |
| ------------------ | ---------------------------------------------------- |
| `/`                 | Home — hero, problem statement, diagnostic teaser    |
| `/ai-diagnostic`    | What the diagnostic examines and what you receive    |
| `/how-it-works`     | The five-step process                                |
| `/industries`       | Who it's for, industries served                      |
| `/about`            | Positioning and approach                             |
| `/contact`          | Contact email + CTA                                  |
| `/diagnostic`       | The diagnostic intake form (the one conversion point)|

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

- `FORM_SUBMISSION_URL` — **required for the intake form to work.** The
  endpoint the server forwards completed diagnostic submissions to (as
  JSON, via POST). This is typically a Google Apps Script Web App URL
  bound to an internal Google Sheet. It is read server-side only
  (`app/api/diagnostic/route.ts`) and is never sent to the browser.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional. If set, Google Analytics
  (gtag.js) loads and page views / CTA clicks / form events are tracked.
  If unset, analytics is skipped entirely — it is never a hard dependency.
- `NEXT_PUBLIC_SITE_URL` — the deployed site's canonical URL, used for
  SEO metadata, Open Graph tags, and `sitemap.xml`.

No secrets are committed to source control. `.env.local` is gitignored.

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000`.

### 4. Type-check and lint

```bash
npm run typecheck
npm run lint
```

### 5. Production build

```bash
npm run build
npm run start
```

`npm run build` must succeed with zero errors before deploying.

## Form Submission Data Contract

The intake form (`/diagnostic`) posts to the internal API route
`POST /api/diagnostic`, which validates the payload again server-side and
forwards it as JSON to `FORM_SUBMISSION_URL`:

```json
{
  "client_name": "string",
  "job_title": "string",
  "email": "string",
  "phone": "string",
  "company_name": "string",
  "website": "string",
  "company_vertical": "string",
  "number_of_departments": "string",
  "products_services": "string",
  "client_types": "string",
  "approximate_employees": "string",
  "approximate_annual_revenue": "string"
}
```

The receiving endpoint (e.g. a Google Apps Script Web App) is responsible
for writing each submission as a new row in the internal Google Sheet. That
sheet — and everything downstream of it — is internal only and is never
linked to or exposed from this website.

On success, the form shows: *"Thank you. We've received your information
and will be in touch regarding the next step."* No internal diagnostic
information is ever exposed to the client in the browser.

## Analytics

Analytics is structured but optional (`lib/analytics.ts`, `components/GoogleAnalytics.tsx`).
With `NEXT_PUBLIC_GA_MEASUREMENT_ID` set, these events fire:

- `page_view` — automatic via gtag.js
- `start_diagnostic_click` — any "Start Your AI Diagnostic" button, tagged with its page location
- `diagnostic_form_started` — first interaction with the intake form
- `diagnostic_form_submitted` — successful form submission

## SEO

- Per-page `<title>` / `<meta description>` via the Next.js Metadata API
- Open Graph + Twitter card metadata, with a dynamically generated OG image (`app/opengraph-image.tsx`)
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- Semantic HTML (`<nav>`, `<main>`, `<section>`, heading hierarchy) throughout

## Accessibility

- Skip-to-content link
- Labeled form fields with `aria-invalid` / `aria-describedby` error wiring
- Visible focus states
- Sufficient color contrast (dark ink on white/near-white backgrounds)
- Keyboard-operable navigation, including the mobile menu

## Deployment

The site is a standard Next.js app and deploys to any Next.js-compatible
host (Vercel, Netlify, or a Node server / Docker container).

**Vercel (recommended):**

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Set the environment variables from `.env.example` in the Vercel project
   settings (`FORM_SUBMISSION_URL` is required; the others are optional).
4. Deploy. Vercel runs `npm run build` automatically.

**Self-hosted / Docker / any Node host:**

```bash
npm install
npm run build
npm run start   # serves on port 3000 by default
```

Set the same environment variables in your host's environment/secrets
manager — never commit them to the repository.

## Project Structure

```
app/                 Routes (App Router), one folder per page
  api/diagnostic/     Server route that forwards form submissions
  diagnostic/          Intake form page + client form component
components/           Shared UI (Header, Footer, CtaButton, Section, ...)
lib/                   Site config, form schema, analytics helpers
public/                Static assets (favicon)
```

## What This Site Deliberately Does Not Include

Per scope: no client portal, client login, CRM, dashboards, report viewer,
approval workflows, internal diagnostic tooling, or AI-agent interfaces.
Those live outside this repository, downstream of the Google Sheet this
form feeds into.
