export function Logo({ size = 32 }: { size?: number }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}storscale-logo.png`}
      alt="StorScale"
      width={size}
      height={size}
      className="rounded-lg"
      style={{ width: size, height: size }}
    />
  )
}
