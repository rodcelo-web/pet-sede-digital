import { useId } from "react";

export function BrandLogo({ className }: { className?: string }) {
  const id = useId();
  const backClip = `saturn-back-${id}`;
  const frontClip = `saturn-front-${id}`;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={backClip}>
          <rect x="0" y="0" width="24" height="11.8" />
        </clipPath>
        <clipPath id={frontClip}>
          <rect x="0" y="12.2" width="24" height="11.8" />
        </clipPath>
      </defs>
      {/* Back part of ring */}
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="1.6"
        clipPath={`url(#${backClip})`}
        transform="rotate(-18 12 12)"
      />
      {/* Planet body */}
      <circle cx="12" cy="12" r="5" fill="#FFD700" />
      {/* Front part of ring */}
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="1.6"
        clipPath={`url(#${frontClip})`}
        transform="rotate(-18 12 12)"
      />
    </svg>
  );
}
