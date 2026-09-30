import { getProject } from "@/lib/crm";
import type { ProjectInterest } from "@/lib/fixtures/types";

/**
 * Compact rendering of a customer's Project Interests.
 * A customer with two interests must read differently from one with one
 * (PO-AE1·A.2): we show every interest as its own chip and a count label.
 */
export function InterestChips({ interests, compact = false }: { interests: ProjectInterest[]; compact?: boolean }) {
  const multi = interests.length > 1;
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-1.5">
      {multi && (
        <span className="inline-flex h-6 items-center rounded-md border border-accent/30 bg-accent-soft px-1.5 text-xs font-semibold text-accent-soft-fg tabular">
          {interests.length} projects
        </span>
      )}
      {interests.map((i) => {
        const p = getProject(i.projectId);
        return (
          <span
            key={i.projectId}
            className="inline-flex h-6 max-w-full items-center gap-1 truncate rounded-md border border-border bg-surface px-2 text-xs text-fg-2"
            title={`${p?.name ?? i.projectId} · ${i.configuration}`}
          >
            <span className="truncate font-medium text-fg">{p?.name ?? i.projectId}</span>
            {!compact && <span className="text-fg-3">· {i.configuration}</span>}
          </span>
        );
      })}
    </div>
  );
}
