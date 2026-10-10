import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="80 90 352 272" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={26}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="148,200 100,256 148,312" />
        <polyline points="364,200 412,256 364,312" />
        <polyline points="196,332 196,190 256,268 316,190 316,332" />
        <line x1="236" y1="326" x2="276" y2="326" strokeWidth={20} />
      </g>
      <circle cx="256" cy="126" r="17" fill="currentColor" />
    </svg>
  );
}
