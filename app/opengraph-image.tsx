import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#080E3A",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 600, display: "flex" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, color: "#9298C0", marginTop: 20, display: "flex" }}>
          AI Agents & Automation Diagnostic
        </div>
        <div style={{ fontSize: 26, color: "#DCE0F2", marginTop: 60, display: "flex" }}>
          Find out what AI your organisation should actually build.
        </div>
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#F5AA00",
            marginTop: 48,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
