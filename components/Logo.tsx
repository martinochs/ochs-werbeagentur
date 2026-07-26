export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="#0f2744" strokeWidth="2" />
      <path
        d="M12 28C12 20 16 12 20 12C24 12 28 20 28 28"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 24C14 18 17 14 20 14C23 14 26 18 26 24"
        stroke="#0f2744"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
