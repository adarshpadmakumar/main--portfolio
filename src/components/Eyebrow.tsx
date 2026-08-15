export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3.5 text-[10px] font-medium uppercase tracking-[0.22em] ${className}`}
    >
      <span className="h-px w-[26px] bg-gold" />
      {children}
    </div>
  );
}
