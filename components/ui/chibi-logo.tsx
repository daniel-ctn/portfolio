export function ChibiLogo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Face */}
      <circle cx="32" cy="36" r="20" fill="#FDDCBD" />

      {/* Hair - messy brown style */}
      <path
        d="M12 30C12 18 20 10 32 10C44 10 52 18 52 30C52 30 50 24 44 22C44 22 46 16 40 13C40 13 36 16 32 14C28 16 24 13 24 13C18 16 20 22 20 22C14 24 12 30 12 30Z"
        fill="#8B4513"
      />
      {/* Hair top tufts */}
      <path
        d="M22 14C20 8 26 4 30 6C28 2 36 0 38 5C40 1 46 3 44 8C48 4 52 8 48 13C52 10 54 16 50 18"
        stroke="#8B4513"
        strokeWidth="4"
        strokeLinecap="round"
        fill="#8B4513"
      />
      <path
        d="M16 22C14 16 18 12 22 14"
        stroke="#8B4513"
        strokeWidth="3"
        strokeLinecap="round"
        fill="#8B4513"
      />
      {/* Hair side pieces */}
      <path
        d="M12 30C11 26 12 22 16 20C14 24 13 28 12 30Z"
        fill="#7A3B10"
      />
      <path
        d="M52 30C53 26 52 22 48 20C50 24 51 28 52 30Z"
        fill="#7A3B10"
      />

      {/* Eyes */}
      <ellipse cx="25" cy="36" rx="4" ry="4.5" fill="#5C3317" />
      <ellipse cx="39" cy="36" rx="4" ry="4.5" fill="#5C3317" />
      {/* Eye highlights */}
      <circle cx="26.5" cy="34.5" r="1.5" fill="white" />
      <circle cx="40.5" cy="34.5" r="1.5" fill="white" />
      {/* Eye lower highlights */}
      <circle cx="24.5" cy="37.5" r="0.8" fill="white" opacity="0.6" />
      <circle cx="38.5" cy="37.5" r="0.8" fill="white" opacity="0.6" />

      {/* Eyebrows */}
      <path d="M21 30C22 28.5 25 28 28 29" stroke="#5C3317" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 29C39 28 42 28.5 43 30" stroke="#5C3317" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small nose */}
      <ellipse cx="32" cy="40" rx="1" ry="0.6" fill="#E8C4A0" />

      {/* Smile */}
      <path d="M28 44C30 46 34 46 36 44" stroke="#5C3317" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Cheek blush */}
      <circle cx="20" cy="41" r="3" fill="#FFB6B6" opacity="0.4" />
      <circle cx="44" cy="41" r="3" fill="#FFB6B6" opacity="0.4" />

      {/* Ears */}
      <ellipse cx="12" cy="36" rx="3" ry="4" fill="#FDDCBD" />
      <ellipse cx="52" cy="36" rx="3" ry="4" fill="#FDDCBD" />

      {/* Collar / black shirt hint */}
      <path
        d="M20 54C20 50 26 48 32 48C38 48 44 50 44 54L46 64H18L20 54Z"
        fill="#2A2A2A"
      />
      {/* Collar V */}
      <path d="M28 48L32 53L36 48" stroke="#1A1A1A" strokeWidth="1" fill="none" />
    </svg>
  )
}
