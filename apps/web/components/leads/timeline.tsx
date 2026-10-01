import {
  ArrowRightLeft,
  Ban,
  Flag,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  PhoneIncoming,
  PhoneOutgoing,
  Plus,
  RotateCcw,
  Sparkles,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { OutcomeBadge } from "@/components/ui/badge";
import { getProject, getUser } from "@/lib/crm";
import type { BusinessActivity, CommunicationType, SystemEvent, SystemEventType, TimelineEntry } from "@/lib/fixtures/types";
import { dayKey, formatDate, formatMinutes, formatTime } from "@/lib/format";

const commIcon: Record<CommunicationType, LucideIcon> = {
  "Outbound Call": PhoneOutgoing,
  "Inbound Call": PhoneIncoming,
  WhatsApp: MessageCircle,
  Message: MessageSquare,
  Email: Mail,
  "Site Visit": MapPin,
};

const sysIcon: Record<SystemEventType, LucideIcon> = {
  LEAD_CREATED: Sparkles,
  FIRST_RESPONSE: Timer,
  TRANSFER: ArrowRightLeft,
  REVIVAL: RotateCcw,
  INTEREST_ADDED: Plus,
  INTEREST_AGAIN: Plus,
  STATUS_CHANGE: Flag,
  FOLLOW_UPS_CANCELLED: Ban,
};

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-0.5 sm:grid-cols-[9rem_1fr]">
      <dt className="text-xs text-fg-3">{label}</dt>
      <dd className="min-w-0 break-words text-sm text-fg">{value}</dd>
    </div>
  );
}

function ActivityEntry({ e }: { e: BusinessActivity }) {
  const Icon = commIcon[e.communicationType];
  const actor = getUser(e.actorId);
  const project = e.projectId ? getProject(e.projectId) : undefined;
  return (
    <article className="relative flex gap-3">
      <span aria-hidden="true" className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface text-fg-2">
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <div className="card min-w-0 flex-1 p-3.5">
        <header className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-sm font-semibold">{e.communicationType}</h3>
          <OutcomeBadge outcome={e.outcome} />
          <span className="ml-auto text-xs text-fg-3 tabular">{formatTime(e.at)}</span>
        </header>
        <p className="mt-0.5 text-xs text-fg-3">
          {actor?.name ?? "Unknown"} · {actor?.role ?? ""}
          {project && <> · {project.name}</>}
        </p>
        <dl className="mt-2.5 flex flex-col gap-1.5 border-t border-border pt-2.5">
          {e.outcome === "FOLLOW-UP" && e.followUp && (
            <>
              <Field label="Response type" value={e.followUp.responseType} />
              <Field label="Sub-response" value={e.followUp.subResponseType} />
              <Field label="Remarks" value={e.followUp.remarks} />
              <Field label="Next follow-up" value={`${formatDate(e.followUp.nextFollowUpAt)}, ${formatTime(e.followUp.nextFollowUpAt)}`} />
            </>
          )}
          {e.outcome === "SUCCESS" && e.success && (
            <>
              <Field label="Success reason" value={e.success.reason} />
              <Field label="Success remarks" value={e.success.remarks} />
            </>
          )}
          {e.outcome === "DUMP" && e.dump && (
            <>
              <Field label="Dump reason" value={e.dump.reason} />
              <Field label="Dump remarks" value={e.dump.remarks} />
            </>
          )}
        </dl>
      </div>
    </article>
  );
}

function SystemEntry({ e }: { e: SystemEvent }) {
  const Icon = sysIcon[e.type];
  const isFR = e.type === "FIRST_RESPONSE";
  const isTransfer = e.type === "TRANSFER";
  const emphasis = isFR || isTransfer || e.type === "REVIVAL";
  return (
    <article className="relative flex gap-3">
      <span
        aria-hidden="true"
        className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full border ${
          emphasis ? "border-accent/30 bg-accent-soft text-accent-soft-fg" : "border-border bg-surface-2 text-fg-3"
        }`}
      >
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <div className={`flex min-w-0 flex-1 flex-col gap-0.5 py-1 ${emphasis ? "" : "text-fg-2"}`}>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className={`text-sm ${emphasis ? "font-semibold text-fg" : "font-medium"}`}>
            {e.label}
            {isFR && e.minutes !== undefined && (
              <>
                {" "}
                <span className="text-accent-soft-fg">· {formatMinutes(e.minutes)}</span>
              </>
            )}
          </span>
          <span className="rounded-sm bg-surface-3 px-1 text-[10px] font-medium tracking-wide text-fg-3 uppercase">System</span>
          <span className="ml-auto text-xs text-fg-3 tabular">{formatTime(e.at)}</span>
        </div>
        {(e.detail || e.cycle) && (
          <p className="text-xs text-fg-3">
            {isFR && e.cycle ? `${e.cycle} · derived from the activity below` : e.detail}
            {!isFR && e.cycle ? ` · ${e.cycle}` : ""}
          </p>
        )}
      </div>
    </article>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  // Group by calendar day, newest day first; entries within a day in order.
  const groups = new Map<string, TimelineEntry[]>();
  for (const e of entries) {
    const k = dayKey(e.at);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(e);
  }
  const days = [...groups.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));

  if (entries.length === 0) {
    return <p className="text-sm text-fg-2">No activity recorded yet.</p>;
  }

  return (
    <div className="relative">
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-4 w-px bg-border" />
      <ol className="flex flex-col gap-6">
        {days.map(([k, items]) => (
          <li key={k} className="flex flex-col gap-3">
            <h2 className="sticky top-14 z-10 -mx-1 w-fit rounded-md bg-bg/90 px-1 text-xs font-semibold text-fg-2 backdrop-blur tabular">
              {formatDate(items[0]!.at, true)}
            </h2>
            <ol className="flex flex-col gap-3">
              {[...items].reverse().map((e) => (
                <li key={e.id}>{e.kind === "activity" ? <ActivityEntry e={e} /> : <SystemEntry e={e} />}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
