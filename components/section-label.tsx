/** "01 — Çalışma Alanları" biçiminde küçük bölüm etiketi. */
export default function SectionLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <p className={`flex items-baseline gap-3 text-[0.95rem] font-semibold ${light ? "text-rose-100/75" : "text-ink-soft"}`}>
      <span className={`tabular-nums ${light ? "text-rose-200" : "text-rose-700"}`}>{index}</span>
      <span aria-hidden className={`h-px w-8 self-center ${light ? "bg-rose-100/30" : "bg-line"}`} />
      <span>{children}</span>
    </p>
  );
}
