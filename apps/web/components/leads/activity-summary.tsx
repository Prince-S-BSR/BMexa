import { awaitingFirstResponse, lastEntry, NOW_ISO } from "@/lib/crm";
import type { Customer } from "@/lib/fixtures/types";
import { formatRelative } from "@/lib/format";

const outcomeLabel = { "FOLLOW-UP": "Follow-up", SUCCESS: "Success", DUMP: "Dump" } as const;

/** One-line "last activity" summary used by the list and the pipeline. */
export function ActivitySummary({ customer }: { customer: Customer }) {
  const entry = lastEntry(customer, "handler");
  if (!entry) return <span className="text-fg-3">No activity yet</span>;

  if (entry.kind === "activity") {
    return (
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-fg">
          {entry.communicationType} <span className="text-fg-3">·</span> {outcomeLabel[entry.outcome]}
        </span>
        <span className="text-xs text-fg-3">{formatRelative(entry.at, NOW_ISO)}</span>
      </span>
    );
  }

  const waiting = awaitingFirstResponse(customer);
  return (
    <span className="flex min-w-0 flex-col">
      <span className="truncate text-fg-2">{entry.label}</span>
      <span className={`text-xs ${waiting ? "font-medium text-warn-soft-fg" : "text-fg-3"}`}>
        {waiting ? `Awaiting first response · ${formatRelative(entry.at, NOW_ISO)}` : formatRelative(entry.at, NOW_ISO)}
      </span>
    </span>
  );
}
