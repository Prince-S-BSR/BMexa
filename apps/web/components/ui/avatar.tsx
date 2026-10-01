import { initials } from "@/lib/format";

export function Avatar({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) {
  const dim = size === "md" ? "size-10 text-sm" : "size-7 text-xs";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 select-none items-center justify-center rounded-full bg-accent-soft font-semibold text-accent-soft-fg ${dim}`}
    >
      {initials(name)}
    </span>
  );
}
