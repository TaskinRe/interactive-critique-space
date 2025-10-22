const BengaliPattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bengali-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Alpona-inspired floral motif */}
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <path
            d="M 50 30 Q 40 40 50 50 Q 60 40 50 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M 50 70 Q 40 60 50 50 Q 60 60 50 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M 30 50 Q 40 40 50 50 Q 40 60 30 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M 70 50 Q 60 40 50 50 Q 60 60 70 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bengali-pattern)" />
    </svg>
  );
};

export default BengaliPattern;
