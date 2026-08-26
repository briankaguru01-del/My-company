import { z } from "zod";

// Shared validation schema for the Diagnostic Intake Form.
// Used on the client (react-hook-form) and re-validated server-side in
// app/api/diagnostic/route.ts before the payload is ever forwarded on.

export const employeeRanges = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,001–5,000",
  "5,000+",
] as const;

export const revenueRanges = [
  "Under $1M",
  "$1M–$5M",
  "$5M–$25M",
  "$25M–$100M",
  "$100M–$500M",
  "$500M+",
  "Prefer not to say",
] as const;

export const departmentRanges = ["1–3", "4–6", "7–10", "11–20", "20+"] as const;

export const diagnosticFormSchema = z.object({
  client_name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Please shorten your name."),
  job_title: z
    .string()
    .trim()
    .min(2, "Please enter your job title.")
    .max(120, "Please shorten your job title."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Please shorten your phone number."),
  company_name: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(160, "Please shorten your company name."),
  website: z
    .string()
    .trim()
    .max(200, "Please shorten your website URL.")
    .optional()
    .or(z.literal("")),
  company_vertical: z
    .string()
    .trim()
    .min(2, "Please enter your industry or vertical.")
    .max(120, "Please shorten your industry."),
  number_of_departments: z.string().trim().max(20).optional().or(z.literal("")),
  products_services: z
    .string()
    .trim()
    .min(5, "Please briefly describe your products or services.")
    .max(2000, "Please shorten this description."),
  client_types: z
    .string()
    .trim()
    .min(2, "Please describe the clients or customers you serve.")
    .max(500, "Please shorten this description."),
  approximate_employees: z
    .string()
    .trim()
    .min(1, "Please select an approximate employee count."),
  approximate_annual_revenue: z
    .string()
    .trim()
    .min(1, "Please select an approximate annual revenue."),
});

export type DiagnosticFormValues = z.infer<typeof diagnosticFormSchema>;

export const diagnosticFormDefaults: DiagnosticFormValues = {
  client_name: "",
  job_title: "",
  email: "",
  phone: "",
  company_name: "",
  website: "",
  company_vertical: "",
  number_of_departments: "",
  products_services: "",
  client_types: "",
  approximate_employees: "",
  approximate_annual_revenue: "",
};
