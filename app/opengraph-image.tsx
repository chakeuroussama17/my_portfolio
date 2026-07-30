import { ImageResponse } from "next/og";

export const alt =
  "Chakeur Oussama — Industrial AI & Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time — this is the card that shows when the portfolio
 * link is pasted into LinkedIn, WhatsApp, Slack or email.
 */
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
          background:
            "linear-gradient(135deg, #0a0a12 0%, #14141f 55%, #1a1030 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            color: "#8b5cf6",
            marginBottom: 28,
          }}
        >
          INDUSTRIAL AI &amp; AUTOMATION ENGINEER
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Chakeur Oussama
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#9096ad",
            lineHeight: 1.4,
            maxWidth: 900,
            marginBottom: 44,
          }}
        >
          Computer vision safety systems, agentic automation and edge AI —
          running in production on a factory floor.
        </div>

        <div style={{ display: "flex", gap: 44 }}>
          {[
            ["RM 99K", "Cost savings delivered"],
            ["1,000+", "Enterprise users served"],
            ["First author", "Published edge-AI research"],
          ].map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#22d3ee" }}>
                {value}
              </div>
              <div style={{ display: "flex", fontSize: 19, color: "#9096ad" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
