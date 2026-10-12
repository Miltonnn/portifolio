import { ImageResponse } from "next/og";

export const alt = "Milton Andrade, Desenvolvedor Front-end";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const STACKS = ["React.js", "Next.js", "TypeScript", "VTEX IO", "FastStore", "Shopify"];

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
          padding: "80px 96px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.35), transparent 55%), radial-gradient(circle at 10% 100%, rgba(14, 165, 233, 0.2), transparent 50%), #09090b",
          color: "#fafafa",
        }}
      >
        <svg width="120" height="93" viewBox="80 90 352 272" fill="none">
          <g strokeWidth={26} strokeLinecap="round" strokeLinejoin="round">
            <g stroke="#a78bfa">
              <polyline points="148,200 100,256 148,312" />
              <polyline points="364,200 412,256 364,312" />
            </g>
            <g stroke="#fafafa">
              <polyline points="196,332 196,190 256,268 316,190 316,332" />
              <line x1="236" y1="326" x2="276" y2="326" strokeWidth={20} />
            </g>
          </g>
          <circle cx="256" cy="126" r="17" fill="#a78bfa" />
        </svg>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Milton Andrade
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 40,
            color: "#c4b5fd",
          }}
        >
          Desenvolvedor Front-end
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Performance, acessibilidade e boas experiências.
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 48 }}>
          {STACKS.map((stack) => (
            <div
              key={stack}
              style={{
                display: "flex",
                padding: "8px 20px",
                borderRadius: 9999,
                border: "1px solid rgba(139, 92, 246, 0.4)",
                background: "rgba(139, 92, 246, 0.12)",
                color: "#c4b5fd",
                fontSize: 24,
              }}
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
