import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
        }}
      >
        <svg width="140" height="108" viewBox="80 90 352 272" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
