import { Suspense, type ReactNode } from "react";
import { OrgTabs } from "@/components/org/org-tabs";

export default function OrgLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <Suspense fallback={<div className="h-10 border-b border-border" />}>
        <OrgTabs />
      </Suspense>
      {/* min-w-0: pages contain horizontally scrolling tables; without it the
          nested flex item would take the table's intrinsic width. */}
      <div className="min-w-0">{children}</div>
    </div>
  );
}
