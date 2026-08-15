export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <span className="relative inline-block">
      <span
        className="block pl-[0.06em] font-cinzel font-medium leading-none tracking-[0.06em] text-cream"
        style={{ fontSize: size }}
      >
        APK
      </span>
      <svg
        viewBox="0 0 300 26"
        aria-hidden="true"
        className="absolute -left-[3%] bottom-[30%] h-auto w-[62%] overflow-visible"
      >
        <path
          d="M2,23.5 C84,4 206,0.5 298,11 C204,10 86,14.5 2,23.5 Z"
          fill="#D4AF37"
        />
      </svg>
    </span>
  );
}
