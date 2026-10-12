import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Milton Andrade, Desenvolvedor Front-end";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const STACKS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
  "VTEX IO",
  "FastStore",
  "Shopify",
];

const photoData = await readFile(
  join(process.cwd(), "public/assets/og/og-hero.png"),
  "base64",
);
const photoSrc = `data:image/png;base64,${photoData}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        background:
          "radial-gradient(circle at 78% 55%, rgba(139, 92, 246, 0.4), transparent 45%), radial-gradient(circle at 10% 100%, rgba(14, 165, 233, 0.2), transparent 50%), #09090b",
        color: "#fafafa",
      }}
    >
      <img
        src={photoSrc}
        alt=""
        width={577}
        height={600}
        style={{ position: "absolute", right: 24, bottom: 0 }}
      />

      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 660,
          height: 180,
          display: "flex",
          background: "linear-gradient(to bottom, rgba(9, 9, 11, 0), #09090b)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 580,
          height: "100%",
          paddingLeft: 80,
        }}
      >
        <svg width="96" height="74" viewBox="80 90 352 272" fill="none">
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
            marginTop: 32,
            fontSize: 72,
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
            fontSize: 38,
            color: "#c4b5fd",
          }}
        >
          Desenvolvedor Front-end
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            color: "#a1a1aa",
          }}
        >
          Performance, acessibilidade e boas experiências.
        </div>

        <div style={{ display: "flex", marginTop: 40, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 6,
              marginLeft: -24,
              fontSize: 24,
              color: "#d4d4d8",
            }}
          >
            {STACKS.map((stack) => (
              <div key={stack} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: 24,
                    color: "#a78bfa",
                  }}
                >
                  ·
                </span>
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
