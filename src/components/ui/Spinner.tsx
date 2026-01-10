"use client";

export default function Spinner({ size = 6 }: { size?: number }) {
  const classes = `w-${size} h-${size} animate-spin inline-block`;
  const sizeClass = size === 4 ? "w-4 h-4" : size === 8 ? "w-8 h-8" : "w-6 h-6";

  return (
    <svg
      className={`${sizeClass} text-gray-500`}
      viewBox="0 0 50 50"
      aria-hidden="true"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeOpacity="0.2"
      />
      <path
        d="M45 25a20 20 0 0 1-20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
