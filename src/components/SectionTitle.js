export function SectionTitle({ label, eyebrow, description }) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {label}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">{description}</p>
      )}
    </div>
  );
}

