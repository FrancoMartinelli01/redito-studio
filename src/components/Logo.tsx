interface LogoProps {
  width?: number
}

export function Logo({ width = 160 }: LogoProps) {
  return (
    <svg width={width} height={Math.round(width * 0.227)} viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="5" height="24" rx="2.5" fill="#FF4D00" />
      <rect x="9" y="2" width="5" height="36" rx="2.5" fill="#FF4D00" opacity="0.55" />
      <rect x="18" y="14" width="5" height="18" rx="2.5" fill="#FF4D00" opacity="0.3" />
      <text x="31" y="28" fontFamily="'Syne',system-ui,sans-serif" fontWeight="800" fontSize="20" fill="#EDEBE4" letterSpacing="-0.5">RÉDITO</text>
      <text x="32" y="40" fontFamily="'DM Sans',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="rgba(237,235,228,0.38)" letterSpacing="3.5">STUDIO</text>
    </svg>
  )
}
