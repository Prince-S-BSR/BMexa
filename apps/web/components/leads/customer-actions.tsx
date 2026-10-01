"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Plus, Undo2, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge";
import { COMMUNICATION_TYPES, type CommunicationType, type InquiryStatus, type Outcome } from "@/lib/fixtures/types";

const RESPONSE_TYPES = ["Qualified", "Not Connected", "Not Interested Now"] as const;
const SUB_RESPONSES: Record<(typeof RESPONSE_TYPES)[number], string[]> = {
  Qualified: ["Normal Follow-up", "Site Visit Planned", "Negotiation"],
  "Not Connected": ["Ringing, No Answer", "Switched Off", "No Reply"],
  "Not Interested Now": ["Call Back Later", "Considering Other Project"],
};
const SUCCESS_REASONS = ["Booking initiated", "Site visit completed", "Token received"];
/** Canonical Dump Reason master (PO-AF1·F.3): each carries structural classes. */
const DUMP_REASONS = [
  { reason: "Budget mismatch", classes: "Valid · Customer-side · Recoverable" },
  { reason: "Bought elsewhere", classes: "Valid · Customer-side · Low recoverability" },
  { reason: "Unreachable", classes: "Valid · Unknown · Recoverable" },
  { reason: "Invalid lead", classes: "Invalid · Source-side · Not recoverable" },
  { reason: "Location mismatch", classes: "Valid · Customer-side · Recoverable" },
];

const UNDO_SECONDS = 5;

export function CustomerActions({
  initialStatus,
  customerName,
  canOperate,
  reason,
}: {
  initialStatus: InquiryStatus;
  customerName: string;
  /** False when the viewer is not the current handler or the record is Dumped. */
  canOperate: boolean;
  /** Plain-language reason shown when actions are unavailable (Master Spec §62). */
  reason?: string;
}) {
  const [status, setStatus] = useState<InquiryStatus>(initialStatus);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<{ kind: "dump" | "saved"; text: string } | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(UNDO_SECONDS);
  const undoTimer = useRef<number | null>(null);

  const dumped = status === "Dumped";
  const operable = canOperate && !dumped;
  const blockedReason = dumped
    ? "Add Activity is disabled while the customer is Dumped. A transfer or the customer returning revives the record."
    : reason;

  const clearUndo = () => {
    if (undoTimer.current) window.clearInterval(undoTimer.current);
    undoTimer.current = null;
  };

  useEffect(() => clearUndo, []);

  const startDump = () => {
    setStatus("Dumped");
    setOpen(false);
    setToast({ kind: "dump", text: `${customerName} dumped.` });
    setSecondsLeft(UNDO_SECONDS);
    clearUndo();
    let left = UNDO_SECONDS;
    undoTimer.current = window.setInterval(() => {
      left -= 1;
      setSecondsLeft(left);
      if (left <= 0) {
        clearUndo();
        setToast(null);
      }
    }, 1000);
  };

  const undoDump = () => {
    clearUndo();
    setStatus(initialStatus);
    setToast({ kind: "saved", text: "Dump undone. The record is back to " + initialStatus + "." });
    window.setTimeout(() => setToast(null), 2500);
  };

  const saved = () => {
    setOpen(false);
    setToast({ kind: "saved", text: "Activity saved. It will appear in the timeline as a new, immutable entry." });
    window.setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={status} />
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={!operable}
          aria-describedby={!operable ? "log-activity-reason" : undefined}
          className="inline-flex h-9 items-center gap-1.5 rounded-md bg-accent px-3 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus aria-hidden="true" className="size-4" />
          Log activity
        </button>
      </div>
      {!operable && blockedReason && (
        <p id="log-activity-reason" className="mt-2 max-w-prose text-xs text-fg-2">
          {blockedReason}
        </p>
      )}

      {open && <LogActivitySheet onClose={() => setOpen(false)} onDump={startDump} onSaved={saved} />}

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-16 z-40 flex justify-center px-4 md:bottom-6">
        {toast && (
          <div className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-lg bg-fg px-4 py-3 text-sm text-bg shadow-2">
            {toast.kind === "dump" ? (
              <>
                <span className="min-w-0 flex-1">{toast.text}</span>
                <button
                  type="button"
                  onClick={undoDump}
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md bg-bg/15 px-2.5 font-medium hover:bg-bg/25"
                >
                  <Undo2 aria-hidden="true" className="size-4" />
                  Undo
                  <span className="tabular opacity-70">{secondsLeft}s</span>
                </button>
              </>
            ) : (
              <>
                <Check aria-hidden="true" className="size-4 shrink-0" />
                <span>{toast.text}</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function LogActivitySheet({ onClose, onDump, onSaved }: { onClose: () => void; onDump: () => void; onSaved: () => void }) {
  const titleId = useId();
  const [commType, setCommType] = useState<CommunicationType>("Outbound Call");
  const [outcome, setOutcome] = useState<Outcome>("FOLLOW-UP");
  const [responseType, setResponseType] = useState<(typeof RESPONSE_TYPES)[number]>("Qualified");
  const [dumpReason, setDumpReason] = useState("");
  const [dumpError, setDumpError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const first = panelRef.current?.querySelector<HTMLElement>("select, input, textarea, button");
    first?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (outcome === "DUMP") {
      if (!dumpReason) {
        setDumpError("Choose a Dump Reason. Remarks cannot replace it.");
        return;
      }
      onDump();
      return;
    }
    onSaved();
  };

  const seg = (o: Outcome, label: string, tone: string) => (
    <button
      key={o}
      type="button"
      role="radio"
      aria-checked={outcome === o}
      onClick={() => setOutcome(o)}
      className={`h-9 flex-1 rounded-[5px] text-sm font-medium transition-colors ${
        outcome === o ? `${tone} shadow-1` : "text-fg-2 hover:text-fg"
      }`}
    >
      {label}
    </button>
  );

  const labelCls = "text-xs font-medium text-fg-2";
  const inputCls =
    "h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm hover:border-border-strong focus:border-accent";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-fg/40 md:items-center" onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-surface shadow-2 md:rounded-2xl"
        style={{ overscrollBehavior: "contain" }}
      >
        <header className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 id={titleId} className="text-base font-semibold">
            Log activity
          </h2>
          <button type="button" onClick={onClose} aria-label="Close" className="grid size-9 place-items-center rounded-md text-fg-2 hover:bg-surface-2">
            <X aria-hidden="true" className="size-4" />
          </button>
        </header>

        <form onSubmit={submit} noValidate className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-col gap-4 overflow-y-auto px-4 py-4">
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Communication type</span>
              <select name="communicationType" value={commType} onChange={(e) => setCommType(e.target.value as CommunicationType)} className={inputCls}>
                {COMMUNICATION_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <div className="flex flex-col gap-1.5">
              <span className={labelCls}>Outcome</span>
              <div role="radiogroup" aria-label="Outcome" className="flex gap-0.5 rounded-md bg-surface-2 p-0.5">
                {seg("FOLLOW-UP", "Follow-up", "bg-surface text-info-soft-fg")}
                {seg("SUCCESS", "Success", "bg-surface text-success-soft-fg")}
                {seg("DUMP", "Dump", "bg-surface text-danger-soft-fg")}
              </div>
            </div>

            {outcome === "FOLLOW-UP" && (
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface-2/60 p-3">
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Response type</span>
                  <select name="responseType" value={responseType} onChange={(e) => setResponseType(e.target.value as (typeof RESPONSE_TYPES)[number])} className={inputCls}>
                    {RESPONSE_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Sub-response type</span>
                  <select name="subResponseType" defaultValue={SUB_RESPONSES[responseType][0]} className={inputCls}>
                    {SUB_RESPONSES[responseType].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Remarks</span>
                  <textarea name="remarks" rows={2} placeholder="What was discussed…" className={`${inputCls} h-auto py-2`} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Next follow-up</span>
                  <input name="nextFollowUpAt" type="datetime-local" required className={inputCls} />
                </label>
              </div>
            )}

            {outcome === "SUCCESS" && (
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface-2/60 p-3">
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Success reason</span>
                  <select name="successReason" className={inputCls}>
                    {SUCCESS_REASONS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Success remarks</span>
                  <textarea name="successRemarks" rows={2} placeholder="Unit, token, next step…" className={`${inputCls} h-auto py-2`} />
                </label>
              </div>
            )}

            {outcome === "DUMP" && (
              <div className="flex flex-col gap-3 rounded-lg border border-danger/30 bg-danger-soft/40 p-3">
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>
                    Dump reason <span className="text-danger">*</span>
                  </span>
                  <select
                    name="dumpReason"
                    value={dumpReason}
                    required
                    aria-invalid={dumpError ? true : undefined}
                    onChange={(e) => {
                      setDumpReason(e.target.value);
                      setDumpError(null);
                    }}
                    className={inputCls}
                  >
                    <option value="">Choose a reason…</option>
                    {DUMP_REASONS.map((d) => (
                      <option key={d.reason} value={d.reason}>
                        {d.reason} — {d.classes}
                      </option>
                    ))}
                  </select>
                  {dumpError && <span className="text-xs text-danger">{dumpError}</span>}
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Dump remarks</span>
                  <textarea name="dumpRemarks" rows={2} placeholder="Optional context…" className={`${inputCls} h-auto py-2`} />
                </label>
                <p className="text-xs text-fg-2">
                  Dump cancels all pending follow-ups permanently and disables Add Activity. You can undo for {UNDO_SECONDS} seconds after proceeding.
                </p>
              </div>
            )}
          </div>

          <footer className="flex items-center justify-end gap-2 border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <button type="button" onClick={onClose} className="h-10 rounded-md px-3 text-sm font-medium text-fg-2 hover:bg-surface-2">
              Cancel
            </button>
            {outcome === "DUMP" ? (
              <button type="submit" className="h-10 rounded-md bg-danger px-4 text-sm font-medium text-white hover:brightness-95">
                Proceed to Dump
              </button>
            ) : (
              <button type="submit" className="h-10 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-accent-hover">
                {outcome === "SUCCESS" ? "Proceed" : "Save activity"}
              </button>
            )}
          </footer>
        </form>
      </div>
    </div>
  );
}
