import { NextResponse } from "next/server";
import { diagnosticFormSchema } from "@/lib/diagnosticForm";

// Server-side handler for the Diagnostic Intake Form.
//
// The form posts JSON here. This route re-validates the payload, then
// forwards it as JSON to FORM_SUBMISSION_URL (an internal, server-only
// environment variable — e.g. a Google Apps Script Web App URL that writes
// to an internal Google Sheet). The submission endpoint is never exposed
// to the browser.

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "We couldn't read your submission. Please try again." },
      { status: 400 }
    );
  }

  const parsed = diagnosticFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors and try again." },
      { status: 400 }
    );
  }

  const submissionUrl = process.env.FORM_SUBMISSION_URL;
  if (!submissionUrl) {
    console.error("FORM_SUBMISSION_URL is not configured.");
    return NextResponse.json(
      {
        error:
          "The diagnostic intake form is not yet configured. Please try again shortly, or contact us directly.",
      },
      { status: 500 }
    );
  }

  try {
    const upstream = await fetch(submissionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!upstream.ok) {
      console.error("Upstream form submission failed with status", upstream.status);
      return NextResponse.json(
        { error: "We couldn't submit your information. Please try again." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Error submitting diagnostic form upstream:", error);
    return NextResponse.json(
      { error: "We couldn't submit your information. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
