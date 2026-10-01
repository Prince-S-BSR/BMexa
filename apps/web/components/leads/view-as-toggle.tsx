import Link from "next/link";
import { Eye, UserRound } from "lucide-react";
import type { Viewer } from "@/lib/crm";

/**
 * Mockup-only control: switch the projection between the current handler
 * and the Site Head. In the product the viewer is the signed-in user; this
 * exists so the with/without-history behaviour can be demonstrated.
 */
export function ViewAsToggle({
  viewer,
  handlerName,
  siteHeadName,
  href,
}: {
  viewer: Viewer;
  handlerName: string;
  siteHeadName: string;
  href: (v: Viewer) => string;
}) {
  const item = (v: Viewer, label: string, Icon: typeof Eye) => {
    const active = viewer === v;
    return (
      <Link
        href={href(v)}
        aria-current={active ? "true" : undefined}
        className={`inline-flex h-8 items-center gap-1.5 rounded-[5px] px-2.5 text-xs font-medium transition-colors ${
          active ? "bg-surface text-fg shadow-1" : "text-fg-2 hover:text-fg"
        }`}
      >
        <Icon aria-hidden="true" className="size-3.5" />
        <span className="truncate">{label}</span>
      </Link>
    );
  };
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 whitespace-nowrap text-xs text-fg-3">Viewing as</span>
      <div className="inline-flex rounded-md bg-surface-2 p-0.5" role="group" aria-label="Viewing as">
        {item("handler", `${handlerName} · Sales Rep`, UserRound)}
        {item("site-head", `${siteHeadName} · Site Head`, Eye)}
      </div>
    </div>
  );
}
