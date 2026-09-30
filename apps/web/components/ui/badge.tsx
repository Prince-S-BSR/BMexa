import type { ReactNode } from "react";
import type { FollowUpBucket } from "@/lib/crm";
import type { InquiryStatus, Outcome } from "@/lib/fixtures/types";

type Tone = "neutral" | "accent" | "success" | "info" | "warn" | "danger";

const toneClass: Record<Tone, string> = {
  neutral: "bg-neutral-soft text-neutral-soft-fg",
  accent: "bg-accent-soft text-accent-soft-fg",
  success: "bg-success-soft text-success-soft-fg",
  info: "bg-info-soft text-info-soft-fg",
  warn: "bg-warn-soft text-warn-soft-fg",
  danger: "bg-danger-soft text-danger-soft-fg",
};

const solidClass: Record<Tone, string> = {
  neutral: "bg-surface-3 text-fg",
  accent: "bg-accent text-accent-fg",
  success: "bg-success text-white",
  info: "bg-info text-white",
  warn: "bg-warn text-[#2b1a02]",
  danger: "bg-danger text-white",
};

export function Badge({
  tone = "neutral",
  solid = false,
  children,
  className = "",
  title,
}: {
  tone?: Tone;
  solid?: boolean;
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={`inline-flex h-6 shrink-0 items-center gap-1 whitespace-nowrap rounded-md px-2 text-xs font-medium ${
        solid ? solidClass[tone] : toneClass[tone]
      } ${className}`}
    >
      {children}
    </span>
  );
}

const statusTone: Record<InquiryStatus, { tone: Tone; solid: boolean }> = {
  New: { tone: "accent", solid: false },
  "Booking In Progress": { tone: "info", solid: false },
  Booked: { tone: "success", solid: true },
  "Booking Cancelled": { tone: "danger", solid: false },
  Dumped: { tone: "neutral", solid: false },
};

export function StatusBadge({ status, className = "" }: { status: InquiryStatus; className?: string }) {
  const { tone, solid } = statusTone[status];
  return (
    <Badge tone={tone} solid={solid} className={className}>
      {status}
    </Badge>
  );
}

const bucketTone: Record<FollowUpBucket, { tone: Tone; solid: boolean }> = {
  Overdue: { tone: "danger", solid: true },
  Today: { tone: "warn", solid: true },
  Future: { tone: "neutral", solid: false },
};

export function BucketBadge({ bucket, className = "" }: { bucket: FollowUpBucket; className?: string }) {
  const { tone, solid } = bucketTone[bucket];
  return (
    <Badge tone={tone} solid={solid} className={className}>
      {bucket}
    </Badge>
  );
}

const outcomeTone: Record<Outcome, Tone> = {
  "FOLLOW-UP": "info",
  SUCCESS: "success",
  DUMP: "danger",
};

const outcomeLabel: Record<Outcome, string> = {
  "FOLLOW-UP": "Follow-up",
  SUCCESS: "Success",
  DUMP: "Dump",
};

export function OutcomeBadge({ outcome, className = "" }: { outcome: Outcome; className?: string }) {
  return (
    <Badge tone={outcomeTone[outcome]} className={className}>
      {outcomeLabel[outcome]}
    </Badge>
  );
}
