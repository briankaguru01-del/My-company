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
          backgroundColor: "#0a0e12",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 600, display: "flex" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, color: "#aab2b8", marginTop: 20, display: "flex" }}>
          AI Opportunity Diagnostic
        </div>
        <div style={{ fontSize: 26, color: "#e7eaec", marginTop: 60, display: "flex" }}>
          Find out what AI your organisation should actually build.
        </div>
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#3a9280",
            marginTop: 48,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
