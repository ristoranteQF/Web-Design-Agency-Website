type Props = { variant?: "on-dark" | "on-light"; height?: number };

/** Logo oficial Velunix Studio (SVG). Folosește "on-dark" pe fundal închis și "on-light" pe fundal deschis. */
export function Logo({ variant = "on-dark", height = 44 }: Props) {
  const width = Math.round((height * 236) / 88);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/velunix-studio-logo-${variant}.svg`}
      alt="Velunix Studio"
      width={width}
      height={height}
    />
  );
}
