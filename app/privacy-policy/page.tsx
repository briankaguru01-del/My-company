import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Accent from "@/components/Accent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Wilvo AI collects, uses, shares and protects personal information submitted through this website and the AI Agents & Automation Diagnostic.",
};

const LAST_UPDATED = "20 September 2026";

function PolicySection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-700">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <Accent>Policy</Accent>
          </>
        }
        description="What we collect when you use this website or submit the AI Agents & Automation Diagnostic, why we collect it, who we share it with, and the choices you have."
      >
        <p className="mt-6 text-sm text-ink-500">
          Last updated: {LAST_UPDATED}
        </p>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-12">
            <PolicySection id="overview" heading="1. Overview">
              <p>
                {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;) provides AI transformation and diagnostic
                services to organisations. This policy explains how we handle
                personal information collected through{" "}
                <Link
                  href="/"
                  className="text-signal-500 underline underline-offset-4"
                >
                  this website
                </Link>
                , through the AI Agents &amp; Automation Diagnostic intake form,
                and when you correspond with us or book a call.
              </p>
              <p>
                This policy does not cover the internal systems of our clients,
                which we access only under a separate written agreement, nor
                third-party websites we link to.
              </p>
            </PolicySection>

            <PolicySection id="what-we-collect" heading="2. Information we collect">
              <p className="font-medium text-ink-950">
                Information you give us directly
              </p>
              <p>
                When you submit the diagnostic intake form, we collect: your
                name, job title, email address, phone number, company name,
                company website, industry or vertical, approximate number of
                departments, a description of your products and services, the
                types of clients you serve, approximate employee count, and
                approximate annual revenue band.
              </p>
              <p>
                We also collect whatever you choose to include when you email
                us, reply to our emails, or book a call with us. If you book a
                call, the booking is handled through Google Calendar
                appointment scheduling, which collects the details you enter on
                that booking page.
              </p>
              <p className="font-medium text-ink-950">
                Information collected automatically
              </p>
              <p>
                If website analytics are enabled, we use Google Analytics to
                understand how visitors use the site. This records information
                such as pages viewed, approximate location derived from IP
                address, device and browser type, referring website, and a small
                number of interaction events: clicks on our primary call to
                action, starting the diagnostic form, and submitting it. Our
                hosting provider also keeps standard server logs, which may
                include IP addresses, for security and reliability purposes.
              </p>
              <p>
                We do not collect special category data (such as health,
                biometric, or political data), and we ask that you do not
                include it in free-text fields.
              </p>
            </PolicySection>

            <PolicySection id="how-we-use" heading="3. How we use your information">
              <p>We use the information described above to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Prepare and deliver the diagnostic you asked for, including
                  analysing the operational information you submit.
                </li>
                <li>
                  Contact you about your submission, respond to your enquiry,
                  and arrange a call.
                </li>
                <li>
                  Send you the confirmation and follow-up emails relating to
                  your submission.
                </li>
                <li>
                  Maintain records of our engagements and enquiries, and
                  establish or defend legal claims where necessary.
                </li>
                <li>
                  Understand how the website is used so we can improve it.
                </li>
                <li>Meet our legal, tax, and accounting obligations.</li>
              </ul>
              <p>
                Where data protection law such as the UK or EU GDPR applies to
                you, we rely on these legal bases: performance of a contract or
                taking steps at your request before entering one (delivering the
                diagnostic and responding to you); our legitimate interests in
                operating and improving our business, provided those interests
                are not overridden by your rights (record-keeping, site
                analytics, security); your consent where we ask for it; and
                compliance with a legal obligation.
              </p>
              <p>
                We do not sell your personal information, and we do not share it
                with third parties for their own marketing purposes.
              </p>
            </PolicySection>

            <PolicySection
              id="ai-processing"
              heading="4. AI and automated decision-making"
            >
              <p>
                We are an AI consultancy, so we want to be specific about this.
                The diagnostic is a human-led analysis. We may use AI tools to
                help us organise, summarise, or analyse the information you
                submit, but conclusions and recommendations are reviewed and
                decided by people.
              </p>
              <p>
                We do not make decisions producing legal or similarly
                significant effects about you based solely on automated
                processing, and we do not carry out profiling of that kind
                through this website.
              </p>
              <p>
                We do not use the information you submit to train publicly
                available AI models, and we do not contribute it to any
                third-party model training. Where we use AI tools internally, we
                do so under terms that prohibit the provider from using our
                inputs to train their general-purpose models.
              </p>
            </PolicySection>

            <PolicySection id="cookies" heading="5. Cookies and analytics">
              <p>
                Where analytics is enabled, Google Analytics sets cookies in
                your browser to measure site usage as described above. These are
                not required for the website to function.
              </p>
              <p>
                You can block or delete cookies through your browser settings,
                and you can opt out of Google Analytics specifically using
                Google&rsquo;s browser add-on. Blocking analytics cookies does
                not affect your ability to use the site or submit the
                diagnostic.
              </p>
            </PolicySection>

            <PolicySection id="sharing" heading="6. Who we share information with">
              <p>
                We share personal information only with service providers who
                process it on our behalf, and only as needed to run our
                business:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-ink-950">
                    Google (Workspace, Sheets, Apps Script, Gmail, Calendar,
                    Analytics)
                  </span>{" "}
                  — diagnostic submissions are recorded in a Google Sheet,
                  notification and confirmation emails are sent through Gmail,
                  calls are booked through Google Calendar, and site analytics
                  are processed by Google Analytics.
                </li>
                <li>
                  <span className="font-medium text-ink-950">
                    Our website hosting provider
                  </span>{" "}
                  — hosts this site and processes the form submission on its way
                  to us.
                </li>
                <li>
                  <span className="font-medium text-ink-950">
                    Professional advisers
                  </span>{" "}
                  — such as accountants or lawyers, where we are required or
                  reasonably need to involve them.
                </li>
              </ul>
              <p>
                We may also disclose information where we are legally required
                to do so, or in connection with a sale or restructuring of our
                business, in which case we will tell you if it changes how your
                information is handled.
              </p>
            </PolicySection>

            <PolicySection id="transfers" heading="7. International transfers">
              <p>
                Our service providers, including Google, operate globally, so
                your information may be stored or processed in countries other
                than your own, including the United States. Where personal
                information protected by UK or EU law is transferred outside
                those areas, we rely on the safeguards our providers put in
                place, such as the European Commission&rsquo;s standard
                contractual clauses or an applicable adequacy decision.
              </p>
            </PolicySection>

            <PolicySection id="retention" heading="8. How long we keep it">
              <p>
                We keep diagnostic submissions and enquiry correspondence for up
                to 24 months from your last interaction with us, after which we
                delete or anonymise it, unless you have become a client or we
                need to keep it longer to meet a legal, tax, or accounting
                obligation, or to establish or defend a legal claim.
              </p>
              <p>
                You can ask us to delete your information sooner at any time
                using the contact details below.
              </p>
            </PolicySection>

            <PolicySection id="security" heading="9. How we protect it">
              <p>
                The form submission is validated and forwarded server-side, so
                our submission endpoint is never exposed in your browser.
                Information we hold sits in access-controlled Google Workspace
                accounts protected by strong authentication, and access is
                limited to people who need it to do their work.
              </p>
              <p>
                No method of transmission or storage is completely secure. If we
                become aware of a breach affecting your personal information, we
                will act promptly and notify you and any relevant regulator
                where the law requires it.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" heading="10. Your rights and choices">
              <p>
                Depending on where you live, you may have the right to: request
                a copy of the personal information we hold about you; ask us to
                correct it if it is wrong; ask us to delete it; object to or
                restrict how we use it; ask us to transfer it to another
                provider; and withdraw consent where we relied on it, without
                affecting processing already carried out.
              </p>
              <p>
                To exercise any of these, email us at{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-signal-500 underline underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
                . We will respond within the time limit set by the law that
                applies to you, and within one month where the UK or EU GDPR
                applies. We will not charge you for a routine request or treat
                you differently for making one.
              </p>
              <p>
                You can unsubscribe from our emails at any time by replying and
                asking us to stop. If you are unhappy with how we have handled
                your information, you can complain to the data protection
                authority in your country.
              </p>
            </PolicySection>

            <PolicySection id="children" heading="11. Children">
              <p>
                This website and our services are intended for businesses and
                the people who work in them. They are not directed at children,
                and we do not knowingly collect information from anyone under
                16. If you believe a child has given us personal information,
                contact us and we will delete it.
              </p>
            </PolicySection>

            <PolicySection id="third-party" heading="12. Third-party links">
              <p>
                Our site and emails may link to other websites, including our
                booking page. We are not responsible for the privacy practices
                of those sites, and we encourage you to read their policies.
              </p>
            </PolicySection>

            <PolicySection id="changes" heading="13. Changes to this policy">
              <p>
                We may update this policy as our services or the law change. The
                date at the top of this page shows when it was last revised. If
                a change materially affects how we use information you have
                already given us, we will contact you directly where we can.
              </p>
            </PolicySection>

            <PolicySection id="contact" heading="14. Contact us">
              <p>
                For any question about this policy or about how we handle your
                information, email{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-signal-500 underline underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
                . Our registered address is available on request.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>
    </>
  );
}
