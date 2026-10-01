const TZ = "Asia/Kolkata";
const LOCALE = "en-IN";

const dateFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, day: "numeric", month: "short" });
const dateYearFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, day: "numeric", month: "short", year: "numeric" });
const timeFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: true });
const dayKeyFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });

export function formatDate(iso: string, withYear = false) {
  return (withYear ? dateYearFmt : dateFmt).format(new Date(iso));
}

export function formatTime(iso: string) {
  return timeFmt.format(new Date(iso)).replace(/\s?(am|pm)/i, (m) => m.trim().toLowerCase());
}

export function formatDateTime(iso: string) {
  return `${formatDate(iso)}, ${formatTime(iso)}`;
}

/** Calendar day key (YYYY-MM-DD) in the tenant timezone. */
export function dayKey(iso: string) {
  return dayKeyFmt.format(new Date(iso));
}

/** Human duration for First Response intervals. */
export function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h < 24) return m ? `${h} h ${m} min` : `${h} h`;
  const d = Math.floor(h / 24);
  const rh = h % 24;
  return rh ? `${d} d ${rh} h` : `${d} d`;
}

/** Relative label against a reference "now" (e.g. "2 h ago", "3 d ago"). */
export function formatRelative(iso: string, nowIso: string) {
  const diffMin = Math.round((new Date(nowIso).getTime() - new Date(iso).getTime()) / 60000);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  const h = Math.floor(diffMin / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} d ago`;
  return formatDate(iso);
}

export function formatLakh(lakh: number) {
  if (lakh >= 100) {
    const cr = lakh / 100;
    return `₹${cr % 1 === 0 ? cr : cr.toFixed(2)} Cr`;
  }
  return `₹${lakh} L`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}
