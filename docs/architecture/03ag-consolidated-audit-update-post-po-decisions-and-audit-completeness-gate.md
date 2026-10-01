STATUS: PROPOSED — NOT APPROVED

# AD-01AG — Consolidated Audit Update: Complete PO Decision Reconciliation and Audit Completeness Gate

| | |
|---|---|
| Document type | Architecture decision record and consolidated audit update. It records a Product-Owner decision set verbatim, reconciles it against the AD-01AG read-only audit baseline, and opens the Audit Completeness Gate. |
| Commissioned title | Commissioned as *"AD-01AG — Consolidated Audit Update (Post-PO Decisions and Audit Completeness Gate)"*. The title above is the later exact wording the PO asked for, and it supersedes that working title. It is the same document and the same deliverable. |
| Repository state at start | Branch `claude/code-cli-project-init-mgjndj`. HEAD `94f7d11` (auto-commit 2026-09-22 11:29:41 +0000). Working tree clean. |
| Tracking | Beads `Final-Verison-95o` (P1, in progress). This document creates no Beads issues. Suggested follow-ups are in §12.4. |
| Date | 2026-09-26 |
| Status line meaning | `PROPOSED — NOT APPROVED` applies to the **architect analysis** in this document. The PO decision text recorded in §3 (`PO-AG1`, `PO-AG2`) is PO text with the status the PO gave it (`PO LOCKED`). The architect's readings of that text are not ratified until the PO approves this document. |
| Files changed | This file only. No schema, migration, code, test, Beads, Spec, requirements or earlier architecture file was edited. |

---

## How to read this document

**Status vocabulary.** It is carried unchanged from the baseline.

| Status | Meaning |
|---|---|
| `PO LOCKED` | Stated by the Product Owner as decided. |
| `ARCHITECT DERIVED` | A recommendation or reading by the architect. It is never a PO rule until the PO ratifies it. |
| `VALIDATE-OPEN` | A business question that has not been answered. |
| `SUPERSEDED` | Replaced by a later decision that says so **explicitly**. |
| `CONTRADICTED` | Two PO texts conflict, and neither is stated as an update to the other. |
| `PARTIALLY RESOLVED` | A counting category only: some limbs of a cluster are answered and others remain. It is never a primary status. |

**Counting categories used in this update.**

| Category | Meaning |
|---|---|
| Fully resolved | Every limb of the baseline cluster has a PO answer. Business-rule level only; see the implementation warning below. |
| Partially resolved | At least one limb is answered, and at least one limb remains open or contested. |
| Still open — touched | The bundle speaks near the cluster, narrows it or sharpens it, but answers no limb. |
| Still open — untouched | The bundle does not reach the cluster. |

**Implementation warning, stated once and applying everywhere.** A cluster marked *fully resolved* here is resolved as a **business rule**. That does **not** mean its data model, authorization enforcement, audit coverage, tests or implementation exist or are designed. No schema, policy or code for inventory, holds, bookings, approvals, activities, follow-ups or audit editability exists in the repository (§2.3). Rule 6 of the commissioning instruction governs every row.

**Identifier discipline.**

| Rule | Detail |
|---|---|
| Preserved without change | Every baseline ID: `X-42`…`X-46`, `AGX-1`…`AGX-7`, `AG-Q-1`…`AG-Q-10`, `AD-G-1`…`AD-G-14`, `F-1`…`F-6`, and all carried `AC-`, `V-`, `W-`, `Y-`, `Z-`, `N-`, `T-`, `U-`, `M-`, `Q`, `C-` and `A-` references. Repo `AC-56`…`AC-59` keep their 03af meanings (§3.4 explains why this is now safe). |
| Recording labels, NEW in this document | `PO-AG1` is the consolidated PO decision bundle (§A–§H), recorded verbatim at §3.1. `PO-AG2` is the Audit Completeness Gate decisions `ACG-1`…`ACG-9`, recorded verbatim at §3.2. The corpus records every PO decision set under a `PO-xxn` label (`PO-AE1`, `PO-AF1`), and these follow that convention. |
| New question clusters, NEW | `AG-Q-11`…`AG-Q-18`. They continue the baseline's audit-local `AG-Q` series and are marked **NEW (03ag)** wherever they appear. |
| New contradictions, NEW | `AGX-8`…`AGX-10`. They continue the baseline's audit-local `AGX` series and are marked **NEW (03ag)**. |
| New architect-derived items, NEW | `AD-G-15`…`AD-G-18`. |
| New Audit Completeness Gate investigation areas, NEW | `ACG-INV-1`…`ACG-INV-14`. They are deliberately **not** numbered `ACG-10`+. The PO's `ACG-n` numbers denote locked decisions, and an investigation area is not a decision. |
| New ledger confirmations, NEW | `LC-1`…`LC-13` (§9.3). These are supersessions the architect would record but may not, because the PO did not state them explicitly. |
| Row suffixes | In the §3A register, suffixes such as `AG-Q-1-a` are row-local. They split one bundle item into its separately traceable rules. They are not new decision IDs. |

**Where each required deliverable is.**

| Deliverable | Location |
|---|---|
| 1. The updated AD-01AG audit report | This whole document |
| 2. Consolidated PO Decision Register | §10.1 (per decision ID) and §3A (per distinct rule) |
| 3. Resolved / partially-resolved / open issue matrix | §10.3 |
| 4. Contradictions and clarification requests | §9 |
| 5. Updated Audit Completeness Gate register | §7.4–§7.7 |
| 6. Architecture artifacts requiring updates (named, not made) | §8.3 |
| 7. The next single PO question | §12.2 |
| Addendum: Source Coverage and Completeness Statement | §0 |
| Addendum: Complete Question-to-Decision Register | §3A |
| Addendum: Missing and Incomplete Decision Report | §6A |
| Addendum: final certification statement | §13.2 |

---

## 0. Source Coverage and Completeness Statement

**This reconciliation rests on exactly three sources.**

| # | Source | How it was used | Limitation |
|---|---|---|---|
| (a) | **The AD-01AG read-only audit baseline**: `/tmp/claude-0/-home-user-Final-Verison/c3deec70-5818-56e7-b63a-76606186e09a/scratchpad/AD-01AG-audit-report.md` | Read in full by this task: 529 lines as the Read tool reported them (the commissioning brief said 528, an immaterial difference), 10 sections. It is used as the reconciliation baseline, and its IDs, counts and terminology are preserved. | It lives in a session scratchpad **outside the repository** and was never committed. This document is now the in-repository record of its conclusions (§2). Its rendering of the **earlier** PO bundle (§B.1–§B.21, §C-1–§C-15, AC-124…AC-131) is **abridged** ("Content (abridged)", baseline §4). The verbatim text of that earlier bundle is not available to this task. |
| (b) | **One consolidated PO decision message**: the bundle recorded verbatim at §3.1 (`PO-AG1`, sections A–H) and §3.2 (`PO-AG2`, ACG-1…ACG-9) | Treated as authoritative. Every item is mapped at §3A. | See the statement on completeness below. |
| (c) | **The existing architecture corpus** | Re-verified at source by this task: `BMEXA_MASTER_SPEC.md` (§16–§22, §51–§57, §06 glossary, §03 roles, §82, §87, §88); the consolidated requirements (§3, §4, §18, §19, §21); `ENGINEERING_RULES.md` R6; `schema-phase-0.sql` (`audit_events` DDL, RLS, grants); `01` §D.5; `03a` §8.2; `03ab` §11.4; `03ae` `PO-AE1` (lines 204–315) and §12.2/§12.5; `03af` `PO-AF1` (·B, ·G, ·H, ·I, ·J, ·O), §12, §13.1, §13.2. | Everything else relies on the baseline's own source register (baseline §2, limitations L-1…L-4). This task found no reason to doubt it. The other architecture files were **not** re-read end to end. |

**Completeness of the PO decision source.** The orchestrating session reports that it examined **the raw session transcript directly (the JSONL file, not a summary or a memory digest)**. It searched for every substantial user message after the AD-01AF task and found **exactly one PO decision message** in this session, the bundle at (b). The same examination found no separate question-by-question PO Q&A exchange, and no earlier round in which individual questions were put to the PO with numbered options. This architect did not have access to the transcript file. The statement is therefore recorded as the orchestrating session's verification, relayed here, and is not an independent observation.

**The limitation is named, not resolved by inference.** The PO's actual decision-making may have involved a longer dialogue in another chat, a meeting, or a document not shared with this session. If so, **that material is not accessible to this reconciliation**, and its absence is a genuine limitation. Three consequences follow:

- Nothing in this document claims that "the complete conversation was reviewed" in an unqualified sense.
- Where the bundle's wording is ambiguous, this document does **not** assume that an off-channel exchange settled it (§6A).
- Where the bundle refers to earlier decisions ("the earlier read-only-access rule", "the earlier 10-second window", "Finance was previously described as…"), this document traces them only to the text available in (a) and (c).

---

## 1. Executive summary

**What changed.** The PO has answered most of the booking, inventory and approval questions that AD-01AG raised. The PO has also resolved three of AD-01AF's five carried contradictions and has opened and locked the first nine decisions of the Audit Completeness Gate. The bundle uses the **repository's** meanings for `AC-48`, `AC-51`, `AC-54`, `AC-55`, `AC-56`, `AC-57` and `AC-58`, not the colliding labels of the earlier bundle. That collapses most of the governance hazard in `F-1`/`AGX-7` (§3.4).

**Counts, reconciled cluster by cluster rather than subtracted (method at §10.4).**

| Measure | Value |
|---|---|
| Baseline unique open clusters (baseline §7.4, re-verified: 16 + 5 + 55) | **76** |
| Fully resolved by the bundle | **6** — `AG-Q-1`, `AG-Q-5`, `AG-Q-7`, `AG-Q-9`, repo `AC-56`, repo `AC-57` |
| Partially resolved | **16** — `AG-Q-2`, `AG-Q-3`, `AG-Q-4`, `AG-Q-6`, `AG-Q-8`, `AG-Q-10`, `AC-48`, `AC-51`, `AC-54`, `AC-55` residual, `V-4`, `V-23`, repo `AC-58` residual, `W-1`, `W-4`, `V-10` residual |
| Still open | **54** — 2 touched (`AC-50`, `N-2`) and 52 untouched |
| Check | 6 + 16 + 54 = 76 |
| Newly identified question clusters | **8** — `AG-Q-11`…`AG-Q-18` |
| **Current unique open substantive clusters (verified minimum)** | **78** = 16 partial residuals + 54 open + 8 new. There is still no defensible upper bound, because the unbanded U-, T-, M-, N-1 and Q0 families and the AC-2…AC-49 residue remain un-de-duplicated. |
| Intentionally deferred | **2** — Spec §87(5) CP clawback validation (narrowed) and §87(6) TDS. The Audit Completeness Gate is **no longer deferred**. |

**The total rose from 76 to 78, and that is not a failure of the decisions.** Six clusters closed outright, and sixteen shrank, most of them to one or two limbs. But the answers also expose eight narrower questions, most of them created by the new decisions' own wording (§6.3). This is the pattern the baseline predicted at its §7.4.

**Contradictions.**

| Outcome | Items |
|---|---|
| Resolved | `X-44` (by `AC-56`), `X-45` (by `AC-58`), `X-46` (by `AC-57`), `AGX-1`…`AGX-6` |
| Still open | `X-42` (narrowed), `X-43` (sharpened by the revival workflow's "a manager reassigns"), `AGX-7` (partially resolved; governance) |
| New, three | `AGX-8`: who may end a booking before it is Booked, and whether releasing its booking hold ends it. `AGX-9`: latest workflow version at resubmission versus a manual reassignment made during correction. `AGX-10`: `ACG-3`/`ACG-4` editable audit records versus `R6` and Spec §06, which make audit append-only and immutable. |

**Blockers.** There are **17 business blockers** (one of them a later-stage blocker) and **2 governance blockers** (§6.1). The baseline had 16 + 1.

**Audit Completeness Gate.** It is **active**. `ACG-1`…`ACG-9` are recorded as `PO LOCKED` and are not re-asked. Fourteen investigation areas (`ACG-INV-1`…`14`) are opened as architecture work, not as PO questions (§7.6). The first built artefact they collide with is `schema-phase-0.sql`'s `audit_events` table:

- `R6` revokes `UPDATE`/`DELETE`, which conflicts with `ACG-3`/`ACG-4`.
- `tenant_id … ON DELETE CASCADE` conflicts with `ACG-8`'s indefinite retention.
- `tenant_id NOT NULL` excludes pre-authentication security events from `ACG-1`.
- There is no structured before/after field, which `ACG-2` requires.

These are **named, not fixed**.

**Readiness: the architecture is NOT complete.**

| Domain | Business rules | Blocking the Data Model stage |
|---|---|---|
| Hold / booking / unit | Largely decided | **Blocked** by `AGX-8` and `AG-Q-12`, `AG-Q-13` |
| Approval workflow | Largely decided | **Blocked** by `AG-Q-3`, `AG-Q-4` (Finance vs Accounts), `AG-Q-8`, `AG-Q-11`, `AG-Q-14` |
| Lead activity / follow-up / First Response | Much advanced | **Blocked** by `X-42`, `X-43` (`AC-55` residual), `V-4` (FUT limb), `AC-50` |
| Transfer and visibility | Much advanced | **Blocked** for Security design by `AC-51`(d), `AG-Q-15`, `V-10` residual |
| CP commission | Advanced (`AC-48`, `AD-G-2`, AG-Q-6) | **Blocked** by `AC-53`, `T-4`/`T-5` |
| Audit | Nine locks | **Blocked** by `AGX-10` and `ACG-INV-1`, `-2`, `-6` |

**The next single PO question** (§12.2) is `AGX-8`: *who may end a booking before it is Booked, and is releasing its booking hold the same act as cancelling it?*

---

## 2. Baseline and scope

### 2.1 The baseline, re-verified rather than trusted

| Baseline claim | Re-verified by this task | Result |
|---|---|---|
| 76 unique open clusters (baseline §7.4) | Counted the baseline §6 register: §6.1 has 16 blocking rows, §6.2 has 5, §6.3 has 55 (rows 1–18, 19–30 = 12, 31–38 = 8, 39, 40, 41–43 = 3, 44–49 = 6, 50–55). | **76 confirmed.** The arithmetic chain 65 − 1 − 3 − 2 = 59; 59 + 3 + 2 = 64; 64 + 2 + 10 = 76 also reproduces. |
| ≈55–60 in 03af §13.6 is not reproducible (F-4) | Accepted as the baseline found it. Not re-derived. | Carried. |
| No bundle decision recorded in the repo (F-2) | `grep` for `10-second`, `10 second` and `ten second` under `docs/` returns **zero hits**. `Booking in Progress`, `Booking Cancelled`, `Customer Transferred` and `Client Transferred` also return zero hits. | Confirmed for the earlier bundle and for this one before this document. **This document is now the in-repo record of `PO-AG1`/`PO-AG2`.** The earlier bundle is recorded here only in the baseline's abridged form (Appendix A). F-2 is therefore **partially discharged**. |
| No inventory/hold/booking/approval schema exists | `schema-phase-0.sql` holds Phase-0 foundation tables only, plus `audit_events`. | Confirmed. Nothing built conflicts with the booking decisions. **`audit_events` does conflict with `ACG-3`/`ACG-4`/`ACG-8`** (§7.5). |
| 03af status `PROPOSED — NOT APPROVED` (F-6) | Line 1 of 03af | Confirmed. |

### 2.2 Scope

**In scope:**
- Recording `PO-AG1`/`PO-AG2`.
- Reconciling every item against the baseline.
- Recounting.
- Opening the Audit Completeness Gate.
- Naming, and not making, every artefact change.
- Selecting one next PO question.

**Out of scope, stated so that nothing below is read as done:**
- Editing any schema, migration, code, test, Spec, requirements or earlier architecture file.
- Designing the booking, approval or audit data model.
- Writing RLS policies.
- Creating Beads issues.
- Asking more than one PO question.
- Re-asking any `PO LOCKED` item, including `ACG-1`…`ACG-9`.

### 2.3 What exists in the repository today, stated so that "resolved" is never read as "built"

| Domain | Built artefact | Status |
|---|---|---|
| Inventory, hold, booking, approval, activity, follow-up, First Response, commission | None | **Nothing designed or built** |
| Audit | `audit_events` (`schema-phase-0.sql` lines 1801–1968): partitioned, RLS `tenant_isolation`, grants per `R6` (`crm_app` INSERT/SELECT only) | **Built for Phase 0. It conflicts in four places with the locked ACG decisions** (§7.5) |

---

## 3. PO decisions incorporated

### 3.1 `PO-AG1` — the consolidated PO decision bundle, recorded verbatim

> ⟦PRODUCT-OWNER DECISION — `PO-AG1`, recorded verbatim; status conferred: `PO LOCKED`⟧
>
> **### A. Booking holds and inventory**
>
> **AG-Q-1 — Hold lifecycle**
> - A single continuous hold begins as a 20-minute payment hold.
> - The timer starts when the customer confirms readiness to proceed with booking/payment.
> - If the Sales Rep proceeds to the Booking Form, the hold converts into a non-expiring booking hold.
> - There must not be two simultaneous holds for the same booking.
> - If the booking is rejected and returned for correction, the hold remains active.
> - The Sales Rep or their reporting manager(s) can release the hold and mark the unit Available.
> - A customer can hold only one unit at a time.
> - A Sales Rep may hold multiple units for different customers, with no fixed numerical maximum.
>
> **AG-Q-2 — Hold release and cancellation authority**
> - A Sales Rep can release their own hold.
> - A Reporting Manager, a manager above them, the Site Head, or the Project Head can release another Sales Rep's hold.
> - This authority also applies to non-expiring booking holds.
> - For Pre-Booked cancellation, the Site Head initiates cancellation.
> - CRM checks formalities, penalties, and refund-related information, closes the ledger/creates the receipt, and marks the booking Cancelled. No separate approval is required.
> - The Site Head can then mark the unit Available.
> - For cancelled inventory resale, only the Site Head or Project Head can release the unit and mark it Available.
>
> **AD-G-5 — Concurrent hold guarantee**
> - Enforce a database-level guarantee that only one active hold can exist per unit.
>
> **### B. Authority and approval workflows**
>
> **AG-Q-3 — Authority structure**
> - Builder-Side Admin is the builder tenant's administrative authority, held by the CEO or an authorized executive.
> - CRM staff may receive delegated setup/configuration permissions but do not automatically become Builder-Side Admin.
> - Project approval authority is separate and is assigned to the relevant approval level.
> - Management authority depends on both reporting hierarchy AND project-level authorization.
> - A manager must satisfy both conditions to exercise the relevant management authority.
> - Booking approver eligibility is governed separately by the project's configured approval chain.
> - A project approval workflow cannot have zero approval levels.
> - Each approval level must have a specifically assigned person, and the workflow is configurable.
>
> **AG-Q-4 — Approval chain**
> - Sales Head, CRM, and Accounts are mandatory default approval levels.
> - Default sequence: Level 1 Sales Head → Level 2 CRM → Level 3 Accounts.
> - The builder can change the sequence; Accounts may appear in the middle or at the end.
> - Finance was previously described as a configurable approval level within the booking approval chain and as responsible for verifying payment receipts regardless of amount.
> - Sales Support is an optional approval level, configurable by builder.
> - Discount approval is a separate workflow completed independently before booking approval begins.
> - Do not silently assume Finance and Accounts are identical or that Finance has been removed. Identify this as a residual naming/scope question if the source architecture does not resolve it.
>
> **AG-Q-7 — Approval SLAs**
> - BMexa has no approval SLAs.
> - No time limits, SLA configuration, breach handling, or SLA resets exist.
>
> **AG-Q-8 — Approval Exception**
> - If a manually reassigned approver becomes inactive while a booking is pending, the booking moves to Approval Exception/Unassigned.
> - Notify the Site Head or Project Head.
> - The Site Head or Project Head resolves the exception and assigns an eligible approver.
>
> **AG-Q-9 — Previous approver visibility**
> - A previous approver replaced through manual reassignment loses all visibility into the booking and workflow.
> - Approvers from earlier rounds lose all visibility after correction/resubmission.
>
> **AD-G-3 — Approval workflow version**
> - Correction and resubmission use the latest approval workflow version, not the initially pinned version.
>
> **AD-G-6 — External approval notifications**
> - External approval notifications contain only the minimum necessary booking PII.
> - Booking details must be accessed through authenticated, non-bearer links.
>
> **### C. Booking correction and cancellation**
>
> **AG-Q-5 — Correction and resubmission**
> During correction:
> - Applicants, payment plan, discounts, charges, and PLCs are editable.
> - Preserve an initial submission financial snapshot and a final snapshot at Booked.
> - The unit can be changed during correction to another available unit.
> - If the unit changes, the price is recalculated based on the new unit.
>
> **AG-Q-6 — Post-Booked cancellation**
> - Cancellation can be initiated by the Site Head or Project Head.
> - No separate approval is required.
> - CRM processes cancellation after checking required formalities and financial calculations.
> - The unit becomes Cancelled.
> - The Site Head or Project Head must separately release it for resale.
> - The builder determines refund/forfeiture amounts; CRM records the amounts without calculating them.
> - Unpaid commissions/incentives are revoked.
> - Already-paid commission is handled offline.
> - The builder may deduct commission from the customer's refund.
> - A channel partner may submit an NOC to forgo commission from a future booking.
>
> **AD-G-1 — Booking state model.** Approved proposed states: Held; Pending Approval; Returned for Correction; Booked; Cancelled (Pre-Booked); Cancelled Inventory; Released for Resale. Verify these states against the existing architecture and preserve the distinction between booking cancellation and inventory release.
>
> **AD-G-2 — Stage-2 commission anchor.** Stage-2 channel-partner commission allocation is anchored to the authoritative Booked state.
>
> **### D. Lead lifecycle and booking status**
>
> **V-23 — Booking status**
> - When booking begins, the customer enters a distinct Booking in Progress status.
> - The status remains until Booked or cancelled.
> - Rejection and return for correction do not revert the lead to its previous status.
> - The Sales Rep must cancel the active booking before dumping the customer.
> - Pre-Booked cancellation uses a separate Booking Cancelled status.
> - After cancellation, the customer remains in Booking Cancelled until the Sales Rep manually changes lead status through a new timeline Follow-up, Success, or Dump activity. Do not automatically revert to New.
> - While Booking in Progress or approval is pending, the customer remains in the Sales Rep's active lead queue.
> - Rejected bookings returned for correction remain in the active queue until corrected/resubmitted or cancelled.
>
> **AC-57 — Follow-up interactions**
> - When a customer enters Booking in Progress, any existing pending follow-up is automatically cancelled.
> - If a Sales Rep dumps a customer while a follow-up is pending, the follow-up is Cancelled, not fulfilled.
> - A Success activity that initiates booking automatically fulfils the pending follow-up.
> - Follow-up fulfilment is tied to the First Response (FR) condition.
> - Do not conflate a Success activity that initiates booking with the authoritative Success milestone or Booked status.
>
> **V-4 — Qualifying activity and FR**
> - Follow-up activity counts toward First Response (FR).
> - Changing lead status to New does not count toward FR.
> - This is a PARTIAL resolution; preserve any other unresolved V-4 limbs (the baseline document lists five remaining limbs — do not close them).
>
> **W-1 — One call, two projects**
> - A single customer call discussing two projects can count as qualifying customer-contact activity for both projects and contribute to each project's FR milestone. Apply this narrow rule only; do not generalize beyond its scope.
>
> **W-4 — Multi-source inquiry and FR clock**
> - The FR clock starts from the first inquiry received through the source linked to the customer record. Preserve the original issue reference and verify the precise source framing before extending the rule.
>
> **### E. Customer transfer and visibility**
>
> **AC-51 — Previous owner access**
> - Once a customer transfer takes effect, the previous Sales Rep loses ALL access to the customer record. This SUPERSEDES the earlier read-only-access rule.
> - Transfer with history: transfer all pending follow-ups to the new owner; the new owner takes action.
> - Transfer without history: cancel pending follow-ups created by the previous owner; the new owner creates new follow-ups.
> - The exact A-92 shape remains unresolved. Do not invent it.
> - Do not assume completed-follow-up retention rules have been explicitly decided.
>
> **AC-54 / AGX-2 — Active booking transfer.** If the owning Sales Rep becomes inactive, changes teams while active, or is otherwise unavailable:
> - The customer can be transferred to another Sales Rep with history as an exception.
> - The receiving Rep directly corrects and resubmits the existing booking. No manager unlock or cancel-then-transfer is required.
> - Bulk transfers may include customers with active bookings under the same rule.
> - The receiving Rep continues the existing booking. Managers may transfer a customer with an active booking intact.
>
> **AC-55 — Management authority**
> - Management authority depends on BOTH reporting hierarchy AND project-level authorization.
> - Booking approver eligibility is separately determined by the project's configured approval chain.
> - Preserve any unresolved AC-55 questions concerning follow-up carry-over, work mandate, owner versus handler, and exclusivity (the baseline's limbs b/c/d, and the X-43 residual — these are NOT all closed by this).
>
> **AC-56 — Transfer without history**
> - The receiving Sales Rep sees only the system-generated Customer Transferred activity and their own work. They do not see the previous owner's response history, milestones, response-time intervals, or summary.
> - Broader no-history enforcement across background jobs, audit access, offline caches, and derived milestones MAY remain unresolved — check the baseline's V-10 residual and say so if still open.
>
> **AG-Q-10 — Transfer without history and booking records**
> - Booking records and approval history remain visible to the receiving Sales Rep even when the customer is transferred without history. This decision applies SPECIFICALLY to booking and approval records. Do not extend it to every other history surface.
>
> **### F. Dump, Success, undo, and revival**
>
> **AC-58 / X-45 — Mistaken Dump or Success**
> - The undo window for mistaken Dump or Success is 5 seconds, SUPERSEDING the earlier 10-second window (from the prior PO-AF1/bundle round).
> - If not undone within 5 seconds, correction proceeds through a new activity under ordinary revival rules.
> - For Dump, the Sales Rep requests a manager to revive the lead.
> - Undo Dump is a separate system action logged as "Dump Undone".
> - Cancelled follow-ups remain cancelled after undo.
>
> **Revival workflow**
> - Revival occurs when a manager reassigns the same customer record to a Sales Rep. The customer automatically revives. The system logs "Client Transferred". The status becomes New.
> - There is no separate Revival button or function.
> - The original Dump remains in the timeline as a historical activity.
> - After revival, the original Dump is excluded from loss metrics.
>
> **AD-G-4 — Undo Dump and FR.** Undo Dump within 5 seconds retains the original FR milestone without recalculation.
>
> **### G. Channel-partner commission and financial rules**
>
> **AC-48 — Stage-2 commission allocation.** The Site Head may change or revoke Stage-2 allocation at any time before commission payment.
>
> **Additional existing product rule.** A Site Head may allocate Stage-2 commission to a channel partner who did not file a Stage-1 attribution claim. During post-booking allocation, the Site Head can search by partner name or manually enter/select a firm name, link the CP to the booking, and allocate commission independently of any earlier attribution claim.
>
> **Financial/legal boundary.** Refund and forfeiture calculations remain outside BMexa to avoid RERA liability. The builder determines the amount; BMexa records it.
>
> **### H. Audit and security architecture decisions**
>
> **AD-G-7 — Sensitive reassignment reason.** Free-text reassignment reasons are treated as sensitive fields.
>
> **AD-G-5 — Database integrity.** Enforce one active hold per unit at the database level. (Same item as §A — do not double-count.)
>
> **Additional existing governance rule.** The Audit Completeness Gate was previously deferred until the end of the architecture phase. The PO has now explicitly instructed that it begin.

**Recording notes. These are architect notes on the record and are not PO text.**

| # | Note |
|---|---|
| RN-1 | The instructional sentences inside the bundle are recorded as part of the PO's text, because they bound the scope of the rules they accompany. Examples: "Do not silently assume…", "Apply this narrow rule only…", "Do not invent it", "Do not double-count". |
| RN-2 | Four bundle items carry no decision ID: *Revival workflow*, *Additional existing product rule* (§G), *Financial/legal boundary* (§G) and *Additional existing governance rule* (§H). In this document they are cited as `PO-AG1·F-RV`, `PO-AG1·G-X1`, `PO-AG1·G-FL` and `PO-AG1·H-GATE`. These are recording labels, not decision IDs. |
| RN-3 | `AD-G-5` appears twice (§A, §H). The PO says it is one item, and it is counted once. |
| RN-4 | `AD-G-1`…`AD-G-7` were **architect-derived** in the baseline (§10 step 4). The bundle converts them into PO decisions, and its wording is not always the architect's. `AD-G-3` **reverses** the architect's proposal (§3.5). |
| RN-5 | *"Additional existing product rule"* (§G) restates `PO-X1` (03x, `AC-37` answered). It is recorded as a reaffirmation, not a new lock. |

### 3.2 `PO-AG2` — the Audit Completeness Gate decisions, recorded verbatim

> ⟦PRODUCT-OWNER DECISION — `PO-AG2`, recorded verbatim; status conferred: `PO LOCKED`⟧
>
> **ACG-1 — Audit event coverage.** PO LOCKED — Option 1. Comprehensive audit coverage must include: all business activities; all data modifications; user and administrator actions; system-generated events; security events.
>
> **ACG-2 — Audit record contents.** PO LOCKED. Wherever applicable, each audit record captures: actor; timestamp; action performed; affected record; before-and-after values.
>
> **ACG-3 — Audit log integrity.** PO LOCKED — Option 2. Audit records are immutable for ordinary users, but authorized administrators may edit or delete them.
>
> **ACG-4 — Who may edit/delete audit records.** PO LOCKED. Only the Builder-Side Admin may edit or delete audit records. Interpret ACG-3 and ACG-4 together: Builder-Side Admin is the only role authorized to perform these changes.
>
> **ACG-5 — Audit log visibility.** PO LOCKED — Option 2. Audit logs are visible to: Builder-Side Admin; authorized management users, limited to their respective management scopes.
>
> **ACG-6 — Audit log of edits and deletions.** PO LOCKED — Option 1. Whenever the Builder-Side Admin edits or deletes an audit record, BMexa creates a separate immutable record containing: administrator identity; timestamp; reason for the change; details of the edit or deletion.
>
> **ACG-7 — Mandatory reason.** PO LOCKED — Option 1. The Builder-Side Admin must provide a reason before every audit record edit or deletion.
>
> **ACG-8 — Audit record retention.** PO LOCKED — Option 1. Audit records are retained indefinitely, with no automatic expiration or age-based deletion.
>
> **ACG-9 — Audit log export.** PO LOCKED — Option 1. Only the Builder-Side Admin is authorized to export audit logs. Do not confuse export permission with audit log viewing permission.

**Recording note RN-6.** "Option 1" and "Option 2" refer to option sets that are **not in this session's source** (§0). The option texts are therefore not recorded, and no reading here depends on what the rejected options said.

### 3.3 Decisions by kind

| Kind | Items |
|---|---|
| New PO LOCKED business rules | AG-Q-1, AG-Q-2, AG-Q-3, AG-Q-4, AG-Q-5, AG-Q-6, AG-Q-7, AG-Q-8, AG-Q-9, AG-Q-10, V-23, AC-57, V-4 (part), W-1, W-4, AC-51, AC-54, AC-56, AC-58 (window change), `PO-AG1·F-RV`, AC-48, `PO-AG1·G-FL` |
| Architect-derived items converted to PO decisions | AD-G-1 (approved as proposed, subject to verification), AD-G-2, AD-G-3 (reversed), AD-G-4, AD-G-5, AD-G-6, AD-G-7 |
| Reaffirmations | AC-55 (restated with the conjunctive condition), `PO-AG1·G-X1` (= `PO-X1`) |
| Governance | `PO-AG1·H-GATE` (Gate opened), ACG-1…ACG-9 |
| Explicit supersessions stated by the PO | Two: AC-51 over "the earlier read-only-access rule", and AC-58 over "the earlier 10-second window". Two further explicit negations follow from the wording: AG-Q-7 over SLA resets, and AD-G-3 over "the initially pinned version". See §7.1. |

### 3.4 Why the ID collision (`F-1`/`AGX-7`) is now mostly defused

The baseline's `F-1` found that the **earlier** bundle's `AC-56`…`AC-59` meant different things from the repo's `AC-56`…`AC-59` (03af §13.1). The new bundle's labels, checked subject by subject:

| Label in `PO-AG1` | Subject in `PO-AG1` | Repo meaning (03ae §12 / 03af §13.1 / 03ab §11.4) | Match? |
|---|---|---|---|
| `AC-48` | Site Head may change/revoke Stage-2 allocation | Rule by which a Site Head may revoke or change a Stage-2 decision | **Yes** |
| `AC-51` | Previous owner's access | Scope and duration of the previous owner's read | **Yes** |
| `AC-54` | Active booking when the owning rep is unavailable | Who acts when the only permitted actor is gone | **Yes** |
| `AC-55` | Management authority | Manager authority boundary | **Yes** |
| `AC-56` | What a without-history recipient sees, incl. milestones and intervals | What a derived milestone may disclose (`X-44`) | **Yes** |
| `AC-57` | Follow-up fulfil vs cancel; the FR tie | Fulfilled vs cancelled, and by which predicate (`X-46`) | **Yes** |
| `AC-58` | Mistaken Dump/Success, with the undo window | Correction route for a mistaken disposition (`X-45`) | **Yes** |

**Two consequences.**

- **(i)** Every `AC-` label in `PO-AG1` can be recorded against the repo ID of the same number.
- **(ii)** The PO labels the undo-window decision `AC-58 / X-45` and says it supersedes "the earlier 10-second window". The earlier bundle carried that window under its **own** label `AC-56` (baseline §3.2 row `X-45`, §4 row `AC-56`). The PO has thereby **confirmed, in practice, the crosswalk the baseline proposed**: the earlier bundle's `AC-56`/`AC-57` subject is repo `AC-58`.

**What remains of `AGX-7`** (§9.1):
- The earlier bundle's labels `AC-58`…`AC-131` are still unrecorded per ID (F-3).
- They occupy numbers the repo has not yet minted (the repo high-water mark is `AC-59`).
- Any future repo `AC-60`+ would therefore collide with them unless the range is reserved.
- Repo `AC-59` remains open (it was never answered).

### 3.5 `AD-G-3`: a PO decision that reverses an architect proposal

| | Text |
|---|---|
| Baseline `AD-G-3` (ARCHITECT DERIVED) | *"The workflow version pinned at first submission survives the correction restart (§B.17 + §B.18)."* |
| `PO-AG1` `AD-G-3` (PO LOCKED) | *"Correction and resubmission use the latest approval workflow version, not the initially pinned version."* |
| Outcome | The architect's proposal is **rejected**. This is recorded as the PO choosing against an architect recommendation, not as a PO text superseding a PO text. The earlier bundle's §B.18 pin ("open bookings keep their version/assignments", abridged) is **explicitly** overridden for correction and resubmission by the words "not the initially pinned version". It still governs bookings that never enter correction. The collision with §C-10 is **not** covered by that explicit wording: see `AGX-9`. |

---

## 3A. Complete Question-to-Decision Register

**Reading rules.**

- **"Implied question"** is **reconstructed and paraphrased, not verbatim.** `PO-AG1` supplies answers, not question text, and none of these questions is a quotation.
- **"Answer (verbatim)"** quotes `PO-AG1`/`PO-AG2` exactly.
- **"Clarification"** quotes only scope-limiting text that the bundle itself supplies. A dash means none.
- **"Status"** is the status of the rule as a decision. The status of the baseline **cluster** it touches is in §4–§6.
- **Abbreviations.** *Spec* = `BMEXA_MASTER_SPEC.md`. *Cons.* = the consolidated requirements. *Prior §B.n/§C-n* = the earlier bundle as abridged in baseline §4.

### 3A.1 §A — Booking holds and inventory

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AG-Q-1-a | Is there one hold or two kinds of hold? | "A single continuous hold begins as a 20-minute payment hold." | — | AG-Q-1, AGX-1 | PO LOCKED — resolved | None explicitly. Reconciles Spec §16/§18/§82 with prior §B.7 (LC-11) | Every hold | — | §A / AG-Q-1 |
| AG-Q-1-b | When does the 20-minute timer start? | "The timer starts when the customer confirms readiness to proceed with booking/payment." | — | AG-Q-1 | PO LOCKED — resolved. The trigger event is undefined → AG-Q-12 | — | Payment hold | — | §A / AG-Q-1 |
| AG-Q-1-c | When does the hold stop expiring? | "If the Sales Rep proceeds to the Booking Form, the hold converts into a non-expiring booking hold." | — | AG-Q-1, AGX-1 | PO LOCKED — resolved | None explicitly. Spec §18 expiry narrowed to the payment-hold phase (LC-11) | Booking hold | — | §A / AG-Q-1 |
| AG-Q-1-d | Can a booking carry two holds? | "There must not be two simultaneous holds for the same booking." | — | AG-Q-1; prior §B.10 | PO LOCKED — resolved | — | Per booking | — | §A / AG-Q-1 |
| AG-Q-1-e | Does rejection release the hold? | "If the booking is rejected and returned for correction, the hold remains active." | — | AG-Q-1; prior §B.8, §B.16 | PO LOCKED — resolved (restates prior §B.8) | — | Returned for Correction | — | §A / AG-Q-1 |
| AG-Q-1-f | Who can release a hold? | "The Sales Rep or their reporting manager(s) can release the hold and mark the unit Available." | — | AG-Q-1, AG-Q-2, AGX-3 | PO LOCKED — **contested by AGX-8** for booking holds | — | All holds | — | §A / AG-Q-1 |
| AG-Q-1-g | Is there a per-customer limit? | "A customer can hold only one unit at a time." | — | AG-Q-1 | PO LOCKED — resolved | — | Per customer (tenant-scoped identity, `PO-AE1·B.1`) | — | §A / AG-Q-1 |
| AG-Q-1-h | Is there a per-rep limit? | "A Sales Rep may hold multiple units for different customers, with no fixed numerical maximum." | — | AG-Q-1 | PO LOCKED — resolved | Spec §16 "may temporarily hold one unit" if read as a per-rep limit (LC-10) | Per rep | — | §A / AG-Q-1 |
| AG-Q-2-a | May a rep release their own hold? | "A Sales Rep can release their own hold." | — | AG-Q-2(a) | PO LOCKED — resolved | — | Own holds | — | §A / AG-Q-2 |
| AG-Q-2-b | Who may release another rep's hold? | "A Reporting Manager, a manager above them, the Site Head, or the Project Head can release another Sales Rep's hold." | — | AG-Q-2(a), AGX-3 | PO LOCKED — resolved. Principals' vocabulary → AG-Q-11 | Prior §B.11 "authorized Manager/Site Head" is specified, not superseded | Others' holds | — | §A / AG-Q-2 |
| AG-Q-2-c | Does that authority reach booking holds? | "This authority also applies to non-expiring booking holds." | — | AG-Q-2(a) | PO LOCKED — **contested by AGX-8** | — | Booking holds | — | §A / AG-Q-2 |
| AG-Q-2-d | Who cancels pre-Booked, and is approval needed? | "For Pre-Booked cancellation, the Site Head initiates cancellation." / "CRM checks formalities, penalties, and refund-related information, closes the ledger/creates the receipt, and marks the booking Cancelled. No separate approval is required." | — | AG-Q-2(b), AGX-3 | PO LOCKED — **contested by AGX-8** (V-23 row V-23-d; prior §B.12) | Prior §B.13 "approved cancellation" (LC-6) | Pre-Booked | — | §A / AG-Q-2 |
| AG-Q-2-e | Who returns a pre-Booked-cancelled unit to sale? | "The Site Head can then mark the unit Available." | — | AG-Q-2(c), AD-G-1 | PO LOCKED — resolved. Whether it passes through Cancelled Inventory is open (§8.2) | — | Pre-Booked cancellation | Project Head is not named here | §A / AG-Q-2 |
| AG-Q-2-f | Who releases cancelled inventory for resale? | "For cancelled inventory resale, only the Site Head or Project Head can release the unit and mark it Available." | — | AG-Q-2(c), prior §B.13 | PO LOCKED — resolved | — | Cancelled Inventory | — | §A / AG-Q-2 |
| AD-G-5 | Must single-active-hold be database-enforced? | "Enforce a database-level guarantee that only one active hold can exist per unit." | "(Same item as §A — do not double-count.)" | AD-G-5; `01` §D.5; Spec §16 | PO LOCKED — resolved | — | Per unit | Per-customer and per-booking uniqueness are not stated as DB-level → AD-G-17 | §A and §H / AD-G-5 |

### 3A.2 §B — Authority and approval workflows

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AG-Q-3-a | Who is the Builder-Side Admin? | "Builder-Side Admin is the builder tenant's administrative authority, held by the CEO or an authorized executive." | — | AG-Q-3, AC-129 | PO LOCKED — resolved. Relation to Spec §03 "Builder Admin" → AG-Q-11(e) | — | Tenant-wide | — | §B / AG-Q-3 |
| AG-Q-3-b | Does configuration staff become Admin? | "CRM staff may receive delegated setup/configuration permissions but do not automatically become Builder-Side Admin." | — | AG-Q-3 | PO LOCKED — resolved | — | Delegation | Which permissions may be delegated is unstated | §B / AG-Q-3 |
| AG-Q-3-c | Is approval authority a separate axis? | "Project approval authority is separate and is assigned to the relevant approval level." | — | AG-Q-3, AGX-4 | PO LOCKED — resolved | — | Approval | — | §B / AG-Q-3 |
| AG-Q-3-d | What grounds management authority? | "Management authority depends on both reporting hierarchy AND project-level authorization." / "A manager must satisfy both conditions to exercise the relevant management authority." | — | AG-Q-3, AC-55(a), AGX-4, U-10 | PO LOCKED — resolved | Narrows `PO-AF1·B.1/·B.2/·B.5` (tree alone) — LC-9 | Management acts | — | §B / AG-Q-3; §E / AC-55 |
| AG-Q-3-e | What makes an approver eligible? | "Booking approver eligibility is governed separately by the project's configured approval chain." | — | AG-Q-3, AGX-4 | PO LOCKED — partially resolves. The eligibility test for a fallback or replacement approver remains open (§5) | — | Approval | — | §B / AG-Q-3 |
| AG-Q-3-f | May a project have zero approval levels? | "A project approval workflow cannot have zero approval levels." | — | AG-Q-3 | PO LOCKED — resolved | — | Per project | — | §B / AG-Q-3 |
| AG-Q-3-g | Is each level assigned to a person? | "Each approval level must have a specifically assigned person, and the workflow is configurable." | — | AG-Q-3 | PO LOCKED — resolved. *Who* configures it is open | — | Per level | — | §B / AG-Q-3 |
| AG-Q-4-a | Which levels are mandatory by default? | "Sales Head, CRM, and Accounts are mandatory default approval levels." | — | AG-Q-4 | PO LOCKED — resolved. "CRM" as a principal → AG-Q-11(c) | — | Default chain | — | §B / AG-Q-4 |
| AG-Q-4-b | What is the default order? | "Default sequence: Level 1 Sales Head → Level 2 CRM → Level 3 Accounts." | — | AG-Q-4 | PO LOCKED — resolved | — | Default chain | — | §B / AG-Q-4 |
| AG-Q-4-c | May the builder reorder? | "The builder can change the sequence; Accounts may appear in the middle or at the end." | — | AG-Q-4 | PO LOCKED — resolved | — | Per project | Whether Accounts may be first is not stated | §B / AG-Q-4 |
| AG-Q-4-d | Are Finance and Accounts the same principal? | "Finance was previously described as a configurable approval level within the booking approval chain and as responsible for verifying payment receipts regardless of amount." | "Do not silently assume Finance and Accounts are identical or that Finance has been removed. Identify this as a residual naming/scope question if the source architecture does not resolve it." | AG-Q-4 | **OPEN** — the source architecture does not resolve it (§5, AG-Q-4) | — | — | — | §B / AG-Q-4 |
| AG-Q-4-e | Is Sales Support mandatory? | "Sales Support is an optional approval level, configurable by builder." | — | AG-Q-4; Cons. §18 step 6 | PO LOCKED — resolved | Cons. §18 step 6 (LC-5) | Per project | — | §B / AG-Q-4 |
| AG-Q-4-f | Is discount approval in the chain? | "Discount approval is a separate workflow completed independently before booking approval begins." | — | AG-Q-4; Spec §23 | PO LOCKED — resolved | — | Discounts | Re-approval after a unit change → AG-Q-13 | §B / AG-Q-4 |
| AG-Q-7-a | Do approval SLAs exist? | "BMexa has no approval SLAs." | — | AG-Q-7 | PO LOCKED — resolved | Prior AC-125; SLA-breach limb of prior §C-2 (explicit — §7.1 S-3) | Approval | Lead-response SLA (`Q14`) is **not** reached | §B / AG-Q-7 |
| AG-Q-7-b | Any time limits, breach or reset? | "No time limits, SLA configuration, breach handling, or SLA resets exist." | — | AG-Q-7, AD-G-12 | PO LOCKED — resolved | Prior AC-125 (explicit) | Approval | `Q14`, `N-2` | §B / AG-Q-7 |
| AG-Q-8-a | What happens when a manually reassigned approver goes inactive? | "If a manually reassigned approver becomes inactive while a booking is pending, the booking moves to Approval Exception/Unassigned." | — | AG-Q-8, AD-G-13 | PO LOCKED — resolved | Prior §C-13 "stays pending" (LC-4) | Manually reassigned approvers only | Automatic fallback (prior §C-1) is not reached | §B / AG-Q-8 |
| AG-Q-8-b | Who is alerted? | "Notify the Site Head or Project Head." | — | AG-Q-8 | PO LOCKED — resolved | — | — | — | §B / AG-Q-8 |
| AG-Q-8-c | Who resolves it? | "The Site Head or Project Head resolves the exception and assigns an eligible approver." | — | AG-Q-8 | PO LOCKED — partially resolves. The relation to prior §C-4/§C-13 Builder-Side-Admin reassignment is open (§5) | Prior §C-13 "Admin must reassign" (LC-4) | — | — | §B / AG-Q-8 |
| AG-Q-9-a | Does a replaced approver keep any visibility? | "A previous approver replaced through manual reassignment loses all visibility into the booking and workflow." | — | AG-Q-9, AGX-5, AC-128 | PO LOCKED — resolved (AGX-5 → "all") | — | Replaced approvers | Audit-log visibility under ACG-5 is not addressed → AG-Q-18 | §B / AG-Q-9 |
| AG-Q-9-b | And approvers from earlier rounds? | "Approvers from earlier rounds lose all visibility after correction/resubmission." | — | AG-Q-9 | PO LOCKED — resolved | — | Earlier rounds | Same person re-assigned in the new round (§8.2 note) | §B / AG-Q-9 |
| AD-G-3 | Which workflow version governs resubmission? | "Correction and resubmission use the latest approval workflow version, not the initially pinned version." | — | AD-G-3; prior §B.17, §B.18, §C-10 | PO LOCKED — resolved. **Collides with prior §C-10 → AGX-9** | Prior §B.18 pin for the correction case (explicit, S-4). Rejects the architect's AD-G-3 | Correction/resubmission | Bookings never returned | §B / AD-G-3 |
| AD-G-6-a | What PII may external notifications carry? | "External approval notifications contain only the minimum necessary booking PII." | — | AD-G-6; prior AC-127 | PO LOCKED — resolved | Narrows prior AC-127 content for external channels → AG-Q-17 | External channels | In-app notifications | §B / AD-G-6 |
| AD-G-6-b | How are booking details reached? | "Booking details must be accessed through authenticated, non-bearer links." | — | AD-G-6; Spec §51 | PO LOCKED — resolved | — | Links in notifications | — | §B / AD-G-6 |

### 3A.3 §C — Booking correction and cancellation

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AG-Q-5-a | Which fields are editable in correction? | "Applicants, payment plan, discounts, charges, and PLCs are editable." | "During correction:" | AG-Q-5 | PO LOCKED — resolved | — | Correction | — | §C / AG-Q-5 |
| AG-Q-5-b | When is the financial snapshot taken? | "Preserve an initial submission financial snapshot and a final snapshot at Booked." | — | AG-Q-5, AGX-6, AD-G-9 | PO LOCKED — resolved | None. Spec §21 retained as the Booked snapshot (additive) | Snapshots | — | §C / AG-Q-5 |
| AG-Q-5-c | Can the unit change after submission? | "The unit can be changed during correction to another available unit." | — | AG-Q-5 | PO LOCKED — resolved | Prior §B.9 unit lock during correction (LC-3) | Correction only | Pending Approval, Booked | §C / AG-Q-5 |
| AG-Q-5-d | Is the price recalculated? | "If the unit changes, the price is recalculated based on the new unit." | — | AG-Q-5 | PO LOCKED — resolved. The price-list version basis is open → AG-Q-13 | Prior §B.9 price retention, for a changed unit only (LC-3) | Unit change | An unchanged unit keeps prior §B.9 retention | §C / AG-Q-5 |
| AG-Q-6-a | Who initiates post-Booked cancellation? | "Cancellation can be initiated by the Site Head or Project Head." | — | AG-Q-6 | PO LOCKED — resolved | — | Post-Booked | — | §C / AG-Q-6 |
| AG-Q-6-b | Is approval required? | "No separate approval is required." | — | AG-Q-6 | PO LOCKED — resolved | — | Post-Booked | — | §C / AG-Q-6 |
| AG-Q-6-c | Who processes it? | "CRM processes cancellation after checking required formalities and financial calculations." | — | AG-Q-6 | PO LOCKED — resolved ("CRM" → AG-Q-11(c)) | — | Post-Booked | — | §C / AG-Q-6 |
| AG-Q-6-d | What state does the unit take? | "The unit becomes Cancelled." | — | AG-Q-6, AD-G-1 | PO LOCKED — resolved | — | Unit | The booking-record state after post-Booked cancellation is not named (§8.2) | §C / AG-Q-6 |
| AG-Q-6-e | Is resale automatic? | "The Site Head or Project Head must separately release it for resale." | — | AG-Q-6, prior §B.13 | PO LOCKED — resolved | — | Unit | — | §C / AG-Q-6 |
| AG-Q-6-f | Does BMexa calculate refunds? | "The builder determines refund/forfeiture amounts; CRM records the amounts without calculating them." | — | AG-Q-6; Spec §35 | PO LOCKED — resolved | — | Refund/forfeiture | — | §C / AG-Q-6 |
| AG-Q-6-g | What happens to unpaid commission? | "Unpaid commissions/incentives are revoked." | — | AG-Q-6, AC-48, Spec §33 | PO LOCKED — resolved | — | Unpaid | "Incentives" includes the representative incentive (03y); not further defined | §C / AG-Q-6 |
| AG-Q-6-h | And paid commission? | "Already-paid commission is handled offline." | — | AG-Q-6; Spec §87(5) | PO LOCKED — resolved. §87(5) validation narrowed, not discharged | — | Paid | — | §C / AG-Q-6 |
| AG-Q-6-i | May commission be offset? | "The builder may deduct commission from the customer's refund." | — | AG-Q-6 | PO LOCKED — resolved | — | Refund | — | §C / AG-Q-6 |
| AG-Q-6-j | May a CP waive commission? | "A channel partner may submit an NOC to forgo commission from a future booking." | — | AG-Q-6 | PO LOCKED — **partially resolves**. Semantics are open (§5) | — | CP | — | §C / AG-Q-6 |
| AD-G-1 | What are the booking states? | "Approved proposed states: Held; Pending Approval; Returned for Correction; Booked; Cancelled (Pre-Booked); Cancelled Inventory; Released for Resale." | "Verify these states against the existing architecture and preserve the distinction between booking cancellation and inventory release." | AD-G-1; Spec §17, §20 | PO LOCKED as proposed. **Verification findings at §8.2** | — | Booking + unit | — | §C / AD-G-1 |
| AD-G-2 | Is Stage-2 anchored to authoritative Booked? | "Stage-2 channel-partner commission allocation is anchored to the authoritative Booked state." | — | AD-G-2; `PO-W1·2` | PO LOCKED — resolved | — | Stage-2 | — | §C / AD-G-2 |

### 3A.4 §D — Lead lifecycle and booking status

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| V-23-a | What is the lead's status once booking starts? | "When booking begins, the customer enters a distinct Booking in Progress status." | — | V-23 | PO LOCKED — resolved. "Booking begins" undefined → AG-Q-12 | None. Consistent with AD-01A §8.2 as an operational status (LC-7) | Lead status | — | §D / V-23 |
| V-23-b | How long does it last? | "The status remains until Booked or cancelled." | — | V-23 | PO LOCKED — resolved | — | — | Status *after* Booked is not stated | §D / V-23 |
| V-23-c | Does rejection revert status? | "Rejection and return for correction do not revert the lead to its previous status." | — | V-23 | PO LOCKED — resolved | — | — | — | §D / V-23 |
| V-23-d | May a rep Dump a customer with an active booking? | "The Sales Rep must cancel the active booking before dumping the customer." | — | V-23 | PO LOCKED — **contested by AGX-8** | — | — | — | §D / V-23 |
| V-23-e | Status after pre-Booked cancellation? | "Pre-Booked cancellation uses a separate Booking Cancelled status." | — | V-23 | PO LOCKED — resolved | — | Pre-Booked | Post-Booked is not stated | §D / V-23 |
| V-23-f | How does a lead leave Booking Cancelled? | "After cancellation, the customer remains in Booking Cancelled until the Sales Rep manually changes lead status through a new timeline Follow-up, Success, or Dump activity. Do not automatically revert to New." | — | V-23 | PO LOCKED — resolved | — | — | — | §D / V-23 |
| V-23-g | Queue membership during booking? | "While Booking in Progress or approval is pending, the customer remains in the Sales Rep's active lead queue." | — | V-23, N-2 | PO LOCKED — resolved | — | — | — | §D / V-23 |
| V-23-h | Queue membership when returned? | "Rejected bookings returned for correction remain in the active queue until corrected/resubmitted or cancelled." | — | V-23 | PO LOCKED — resolved | — | — | — | §D / V-23 |
| AC-57-a | What happens to a pending follow-up at booking start? | "When a customer enters Booking in Progress, any existing pending follow-up is automatically cancelled." | — | repo AC-57(b) | PO LOCKED — resolved (ordering with AC-57-c → AG-Q-12(c)) | — | — | — | §D / AC-57 |
| AC-57-b | Does a Dump fulfil or cancel? | "If a Sales Rep dumps a customer while a follow-up is pending, the follow-up is Cancelled, not fulfilled." | — | repo AC-57(a), X-46 | PO LOCKED — resolved | Narrows `PO-AF1·O.1` (LC-2) | Dump | — | §D / AC-57 |
| AC-57-c | Does a Success activity fulfil? | "A Success activity that initiates booking automatically fulfils the pending follow-up." | — | repo AC-57(b) | PO LOCKED — resolved | — | Booking-initiating Success | — | §D / AC-57 |
| AC-57-d | Is fulfilment the FR predicate? | "Follow-up fulfilment is tied to the First Response (FR) condition." | — | repo AC-57(c), V-4 fulfilment limb | PO LOCKED — resolved (consequence LC-8) | — | Fulfilment | Dump is excluded by AC-57-b | §D / AC-57 |
| AC-57-e | Is a booking-initiating Success the Success milestone? | "Do not conflate a Success activity that initiates booking with the authoritative Success milestone or Booked status." | — | V-22/T-6; AD-G-11 | PO LOCKED — resolved (reaffirms AD-01A §8.2 / `Q4`) | — | — | — | §D / AC-57 |
| V-4-a | Does a Follow-up activity count for FR? | "Follow-up activity counts toward First Response (FR)." | — | V-4 | PO LOCKED — resolved | — | FR | FUT | §D / V-4 |
| V-4-b | Does a change to New count for FR? | "Changing lead status to New does not count toward FR." | — | V-4·New limb | PO LOCKED — resolved for FR | — | FR | FUT | §D / V-4 |
| V-4-c | Is V-4 closed? | "This is a PARTIAL resolution; preserve any other unresolved V-4 limbs (the baseline document lists five remaining limbs — do not close them)." | (the whole row is the PO's scope instruction) | V-4 | PO instruction — V-4 **stays partial** (§5) | — | — | — | §D / V-4 |
| W-1 | Does one call on two projects count for both? | "A single customer call discussing two projects can count as qualifying customer-contact activity for both projects and contribute to each project's FR milestone." | "Apply this narrow rule only; do not generalize beyond its scope." | W-1 | PO LOCKED — partially resolves W-1 | — | FR only; one call; two projects | Every other consumer of activity–project association | §D / W-1 |
| W-4 | When does the FR clock start for a multi-source customer? | "The FR clock starts from the first inquiry received through the source linked to the customer record." | "Preserve the original issue reference and verify the precise source framing before extending the rule." | W-4 | PO LOCKED — partially resolves W-4 | — | FR clock start | Per-source metrics; the assignment clock (03af §13.3a #7) | §D / W-4 |

### 3A.5 §E — Customer transfer and visibility

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-51-a | What does the previous rep keep? | "Once a customer transfer takes effect, the previous Sales Rep loses ALL access to the customer record." | "This SUPERSEDES the earlier read-only-access rule." | AC-51(a),(b) | PO LOCKED — resolved | **`PO-AE1·N.2`** (explicit, S-1) | Previous Sales Rep | `PO-AE1·O.2` (previous Site Head) is **not** reached | §E / AC-51 |
| AC-51-b | Follow-ups on a with-history transfer? | "Transfer with history: transfer all pending follow-ups to the new owner; the new owner takes action." | — | AC-51, X-42 | PO LOCKED — resolved (restates `PO-AE1·K.2`) | — | With history | — | §E / AC-51 |
| AC-51-c | Follow-ups on a without-history transfer? | "Transfer without history: cancel pending follow-ups created by the previous owner; the new owner creates new follow-ups." | — | AC-51(c) | PO LOCKED — resolved | Narrows `PO-AE1·K.1/·K.2` (LC-1) | Without history | Follow-ups not created by the previous owner | §E / AC-51 |
| AC-51-d | What is A-92's shape? | "The exact A-92 shape remains unresolved. Do not invent it." | — | AC-51(d), A-92 | **OPEN** — PO-declared | — | — | — | §E / AC-51 |
| AC-51-e | Are completed follow-up retention rules decided? | "Do not assume completed-follow-up retention rules have been explicitly decided." | — | AC-51 | **OPEN** — PO-declared not decided | — | — | — | §E / AC-51 |
| AC-54-a | Can an active-booking customer be moved when the rep is unavailable? | "The customer can be transferred to another Sales Rep with history as an exception." | "If the owning Sales Rep becomes inactive, changes teams while active, or is otherwise unavailable:" | AC-54, AGX-2 | PO LOCKED — resolved | Prior §B.21 "managers cannot bypass" for this case (LC-12) | The unavailability triggers named | Available reps | §E / AC-54 |
| AC-54-b | Who continues the booking? | "The receiving Rep directly corrects and resubmits the existing booking. No manager unlock or cancel-then-transfer is required." | same trigger | AC-54, AGX-2 | PO LOCKED — resolved | — | — | — | §E / AC-54 |
| AC-54-c | Can bulk transfers include them? | "Bulk transfers may include customers with active bookings under the same rule." | same trigger | AC-54(c) | PO LOCKED — **partially resolves**. Interplay with `PO-AE1·I.3` open (§5) | — | Bulk | — | §E / AC-54 |
| AC-54-d | Does the booking survive transfer? | "The receiving Rep continues the existing booking. Managers may transfer a customer with an active booking intact." | same trigger | AC-54 | PO LOCKED — resolved. Scope of the last sentence → §5 AC-54 | — | Read as bounded by the trigger | — | §E / AC-54 |
| AC-55-a | What grounds management authority? | "Management authority depends on BOTH reporting hierarchy AND project-level authorization." | — | AC-55(a), U-10(iii) | PO LOCKED — reaffirmed (= AG-Q-3-d) | LC-9 | — | — | §E / AC-55 |
| AC-55-b | Is approver eligibility the same? | "Booking approver eligibility is separately determined by the project's configured approval chain." | — | AGX-4 | PO LOCKED — resolved (= AG-Q-3-e) | — | — | — | §E / AC-55 |
| AC-55-c | Are AC-55's other limbs closed? | "Preserve any unresolved AC-55 questions concerning follow-up carry-over, work mandate, owner versus handler, and exclusivity (the baseline's limbs b/c/d, and the X-43 residual — these are NOT all closed by this)." | (the whole row is the PO's scope instruction) | AC-55(b)(c)(d), X-42, X-43 | **OPEN** — preserved | — | — | — | §E / AC-55 |
| AC-56-a | What does a without-history recipient see? | "The receiving Sales Rep sees only the system-generated Customer Transferred activity and their own work. They do not see the previous owner's response history, milestones, response-time intervals, or summary." | — | repo AC-56(a)–(d), X-44 | PO LOCKED — resolved | — | Receiving Sales Rep | Other principals | §E / AC-56 |
| AC-56-b | Is enforcement across every surface decided? | "Broader no-history enforcement across background jobs, audit access, offline caches, and derived milestones MAY remain unresolved — check the baseline's V-10 residual and say so if still open." | (scope instruction) | V-10 residual | Checked: **partly still open** (§5, V-10) | — | — | — | §E / AC-56 |
| AG-Q-10 | Are booking records hidden by without-history? | "Booking records and approval history remain visible to the receiving Sales Rep even when the customer is transferred without history." | "This decision applies SPECIFICALLY to booking and approval records. Do not extend it to every other history surface." | AG-Q-10 | PO LOCKED — partially resolves (the reassignment-history limb is open) | — | Booking and approval records only | Every other history surface | §E / AG-Q-10 |

### 3A.6 §F — Dump, Success, undo and revival

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-58-a | How long is the undo window? | "The undo window for mistaken Dump or Success is 5 seconds, SUPERSEDING the earlier 10-second window (from the prior PO-AF1/bundle round)." | — | repo AC-58, X-45 | PO LOCKED — resolved | **Earlier bundle's 10-second window** (explicit, S-2) | Dump **and** Success | — | §F / AC-58 |
| AC-58-b | And after the window? | "If not undone within 5 seconds, correction proceeds through a new activity under ordinary revival rules." | — | repo AC-58(a),(b) | PO LOCKED — resolved for Dump. For Success → AC-58 residual | — | — | — | §F / AC-58 |
| AC-58-c | How is a Dump reversed after the window? | "For Dump, the Sales Rep requests a manager to revive the lead." | — | repo AC-58(a) | PO LOCKED — resolved. The request channel is unstated | — | Dump | — | §F / AC-58 |
| AC-58-d | How is undo recorded? | "Undo Dump is a separate system action logged as \"Dump Undone\"." | — | repo AC-58(d) (advanced) | PO LOCKED — resolved | — | Undo Dump | Undo Success is not named | §F / AC-58 |
| AC-58-e | Are cancelled follow-ups restored? | "Cancelled follow-ups remain cancelled after undo." | — | repo AC-58 | PO LOCKED — resolved (restates the earlier bundle) | — | Undo | — | §F / AC-58 |
| F-RV-a | What is revival? | "Revival occurs when a manager reassigns the same customer record to a Sales Rep. The customer automatically revives. The system logs \"Client Transferred\". The status becomes New." | — | `PO-AE1·G.4`, X-43, 03af §13.3a #1 | PO LOCKED — resolved. **Sharpens X-43** ("a manager" vs `·G.1` "only the Sales Head"). Label → AG-Q-16 | — | Dumped customers | — | §F / Revival workflow |
| F-RV-b | Is there a revival control? | "There is no separate Revival button or function." | — | `PO-AE1·G.5` | PO LOCKED — resolved (restates `·G.5`) | — | — | — | §F / Revival workflow |
| F-RV-c | Is the Dump erased? | "The original Dump remains in the timeline as a historical activity." | — | `PO-AF1·G` | PO LOCKED — resolved | — | — | — | §F / Revival workflow |
| F-RV-d | Does the Dump stay a loss? | "After revival, the original Dump is excluded from loss metrics." | — | repo AC-58(b) | PO LOCKED — resolved. Whether this restates closed periods is open (§5) | — | Revived Dumps | — | §F / Revival workflow |
| AD-G-4 | Does Undo Dump recompute FR? | "Undo Dump within 5 seconds retains the original FR milestone without recalculation." | — | AD-G-4; `PO-AF1·G.4`, `·I.5` | PO LOCKED — resolved | — | Undo Dump | Undo Success | §F / AD-G-4 |

### 3A.7 §G–§H — Commission, financial boundary, security, governance

| Row | Implied question (reconstructed/paraphrased, not verbatim) | Answer (verbatim) | Clarification | Baseline ref | Status | Supersedes | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-48 | By what rule may a Site Head change or revoke Stage-2 allocation? | "The Site Head may change or revoke Stage-2 allocation at any time before commission payment." | — | AC-48; `PO-AB4` | PO LOCKED — partially resolves (the "payment" boundary is open, §5) | — | Before payment | After payment → AG-Q-6-h | §G / AC-48 |
| G-X1 | May Stage-2 go to a non-claimant CP? | "A Site Head may allocate Stage-2 commission to a channel partner who did not file a Stage-1 attribution claim. During post-booking allocation, the Site Head can search by partner name or manually enter/select a firm name, link the CP to the booking, and allocate commission independently of any earlier attribution claim." | — | `PO-X1` / AC-37 (03x) | PO LOCKED — **reaffirmation** | — | Stage-2 | — | §G / Additional existing product rule |
| G-FL | Does BMexa calculate refund/forfeiture? | "Refund and forfeiture calculations remain outside BMexa to avoid RERA liability. The builder determines the amount; BMexa records it." | — | AG-Q-6; Spec §35 | PO LOCKED — resolved | — | Refund/forfeiture | — | §G / Financial/legal boundary |
| AD-G-7 | Are reassignment reasons sensitive? | "Free-text reassignment reasons are treated as sensitive fields." | — | AD-G-7; prior §C-7, AC-130 | PO LOCKED — resolved | — | Reassignment reasons | Other free-text fields are not reached | §H / AD-G-7 |
| H-GATE | Does the Gate start now? | "The Audit Completeness Gate was previously deferred until the end of the architecture phase. The PO has now explicitly instructed that it begin." | — | 03af §12.5; baseline §10 step 7 | PO LOCKED — **Gate active** | 03af §12.5 deferral (explicit, S-5) | The Gate | — | §H / governance rule |
| ACG-1 | What must be audited? | "Comprehensive audit coverage must include: all business activities; all data modifications; user and administrator actions; system-generated events; security events." | "PO LOCKED — Option 1." | Gate; R6; Spec §54 | PO LOCKED | Ledger conflict with R6/§54 → AGX-10 | All | — | ACG-1 |
| ACG-2 | What must a record hold? | "Wherever applicable, each audit record captures: actor; timestamp; action performed; affected record; before-and-after values." | — | Gate; Spec §54 | PO LOCKED | — | All | — | ACG-2 |
| ACG-3 | Are audit records immutable? | "Audit records are immutable for ordinary users, but authorized administrators may edit or delete them." | "PO LOCKED — Option 2." | Gate; R6 | PO LOCKED | Ledger conflict with R6 and Spec §06 → AGX-10 | All | — | ACG-3 |
| ACG-4 | Who may edit/delete? | "Only the Builder-Side Admin may edit or delete audit records." | "Interpret ACG-3 and ACG-4 together: Builder-Side Admin is the only role authorized to perform these changes." | Gate | PO LOCKED | — | — | Platform/Super Admin, support, CRM staff | ACG-4 |
| ACG-5 | Who may view audit logs? | "Audit logs are visible to: Builder-Side Admin; authorized management users, limited to their respective management scopes." | "PO LOCKED — Option 2." | Gate; AC-55 | PO LOCKED | — | — | Sales Reps without management scope | ACG-5 |
| ACG-6 | Are edits/deletions themselves recorded? | "Whenever the Builder-Side Admin edits or deletes an audit record, BMexa creates a separate immutable record containing: administrator identity; timestamp; reason for the change; details of the edit or deletion." | "PO LOCKED — Option 1." | Gate | PO LOCKED | — | — | — | ACG-6 |
| ACG-7 | Is a reason mandatory? | "The Builder-Side Admin must provide a reason before every audit record edit or deletion." | "PO LOCKED — Option 1." | Gate | PO LOCKED | — | — | — | ACG-7 |
| ACG-8 | How long are records kept? | "Audit records are retained indefinitely, with no automatic expiration or age-based deletion." | "PO LOCKED — Option 1." | Gate; R6 retention; Spec §56 | PO LOCKED | — | — | Admin deletion under ACG-3/4 is not "automatic" | ACG-8 |
| ACG-9 | Who may export? | "Only the Builder-Side Admin is authorized to export audit logs." | "Do not confuse export permission with audit log viewing permission." | Gate; Spec §52 | PO LOCKED | — | Audit-log export | Viewing (ACG-5) | ACG-9 |

---

## 4. Fully resolved audit clusters

**Six baseline clusters are fully resolved at the business-rule level.** Each row states what the bundle answered, what the architecture must still do (never "done"), and any new item the answer exposes.

| Cluster | Baseline limbs | Answered by | Every limb answered? | Architecture still owed | New item exposed |
|---|---|---|---|---|---|
| **AG-Q-1** | (i) replace the 20-minute hold or two kinds; (ii) per-rep and per-customer limits | AG-Q-1-a…h | Yes. One continuous hold, two phases; customer ≤ 1 unit; rep unlimited | Hold state machine (payment → booking); server-time expiry for the payment phase only; DB uniqueness (AD-G-5, AD-G-17); amendments to Spec §16/§18/§82, Cons. §4.4/§21, `01` §D.5 (§8.3) | AG-Q-12 (trigger event); AGX-8 (booking-hold release) |
| **AG-Q-5** | Correction fields; snapshot timing; unit change | AG-Q-5-a…d | Yes | Two-snapshot model; atomic unit swap during correction (AD-G-17); re-pricing | AG-Q-13 (price-list basis, discount re-approval) |
| **AG-Q-7** | Do SLAs exist; configuration; breach; reset | AG-Q-7-a,b | Yes: none exist | Remove SLA fields from any approval design; withdraw AD-G-12 | — |
| **AG-Q-9** | Total or workflow-only loss; earlier rounds | AG-Q-9-a,b | Yes: total, both cases (AGX-5 resolved) | Booking RLS must *subtract* visibility that a replaced approver would hold on another basis (§7.3) | AG-Q-18 (audit-log visibility under ACG-5) |
| **repo AC-56** | (a) binds system milestones? (b) FR milestone visible? (c) interval cardinality? (d) "No Response / Transferred"? | AC-56-a | Yes: none of the four is visible to the receiving rep | Projection/RLS design for milestones and intervals; AD-G-15 (the receiving rep's own Inquiry-level FR must not disclose prior absence) | AG-Q-15 ("only… their own work" vs `PO-AE1·L.3`) |
| **repo AC-57** | (a) Dump: fulfil or cancel; (b) Success activity; (c) the same predicate as FR? | AC-57-a…e | Yes: cancel; fulfil; tied to FR (with Dump excluded) | Follow-up engine terminal states (fulfilled / cancelled-by-Dump / cancelled-by-Booking-in-Progress / cancelled-by-without-history-transfer) | LC-8 (unanswered call fulfils) |

**Contradictions resolved (not counted as clusters, because each maps onto one).**

| Contradiction | Resolved by | How | Residual carried to |
|---|---|---|---|
| `X-44` | AC-56 | Hidden milestones, intervals and summary are not shown | V-10 residual; AD-G-15 |
| `X-45` | AC-58 + F-RV | A 5-second undo, then revival through a manager | repo AC-58 residual |
| `X-46` | AC-57-b | A Dump cancels and does not fulfil | LC-2 (ledger) |
| `AGX-1` | AG-Q-1 | Two phases of one hold | LC-11 (ledger); AG-Q-12 |
| `AGX-2` | AC-54 | Transfer with history as an exception; the receiving rep continues | AC-54 residual; LC-12 |
| `AGX-3` | AG-Q-1-f, AG-Q-2 | Named principals receive explicit release, cancellation and resale authority. These are enumerated exceptions to `PO-AF1·B.7` view-only | **AGX-8** |
| `AGX-4` | AG-Q-3-c/d/e, AC-55-a/b | Management authority and approver eligibility are separate axes | AG-Q-3 residual |
| `AGX-5` | AG-Q-9 | "All visibility" | AG-Q-18 |
| `AGX-6` | AG-Q-5-b | Two snapshots, so Spec §21 is retained as the Booked snapshot | — |

---

## 5. Partially resolved clusters

**Sixteen clusters.** The *Remaining* column is the preserved unresolved portion (Rule 7).

| # | Cluster | Answered limbs | Remaining (preserved) | Severity |
|---|---|---|---|---|
| 1 | **AG-Q-2** | (a) release of another's hold; (c) resale release; the approval question in (b) ("no separate approval") | **(b) who may initiate a Pre-Booked cancellation is contested**: AG-Q-2-d (Site Head) vs V-23-d (the Sales Rep "must cancel") vs prior §B.12 ("current owner + authorized management", abridged); and whether releasing a booking hold *is* a cancellation → **AGX-8** | Blocker |
| 2 | **AG-Q-3** | Builder-Side Admin identity; delegation; separate approval axis; conjunctive management authority; no zero-level workflow; named person per level | **(i)** Who may configure a project's approval workflow (the Builder-Side Admin? delegated CRM staff?). **(ii)** The eligibility test for a *replacement* or *fallback* approver: prior §C-1 ("first active eligible approver up the hierarchy"), §C-3 and §C-4, and AG-Q-8-c ("assigns an eligible approver") all presuppose an eligibility predicate. The only one stated is "a specifically assigned person" per level, which a replacement by definition is not | Blocker |
| 3 | **AG-Q-4** | Mandatory default levels; default order; reordering; Sales Support optional; discount approval separate | **Finance vs Accounts (the PO's own residual).** Evidence both ways, and **not resolved here**: Cons. §3 has a single row "Accounts / Finance"; Spec §03 lists "Accounts" only; the earlier bundle §B.5 said "Final Accounts/Finance payment acknowledgement"; `PO-AG1` says Finance "was previously described as a configurable approval level … and as responsible for verifying payment receipts regardless of amount", while the mandatory level is named "Accounts". **Open:** whether the *Accounts* approval level is the same act as the *Finance/Accounts payment acknowledgement* that establishes Booked (prior §B.5); whether a separate Finance level can still exist; and what "payment" means (which receipt, what amount; Cons. §19) | Blocker |
| 4 | **AG-Q-6** | Initiators; no approval; CRM processing; unit Cancelled; separate resale release; refund/forfeiture recorded not calculated; unpaid revoked; paid offline; deduction from refund | **(i)** Spec §26 "unit transfer ≠ cancellation" for Booked bookings. **(ii)** The NOC: which "future booking" (the same customer? any?) and what is forgone. **(iii)** The lead status after a post-Booked cancellation (V-23 names only pre-Booked). **(iv)** The booking-record state after post-Booked cancellation (AD-G-1 has "Cancelled (Pre-Booked)" only). Spec §87(5) validation stays deferred, narrowed | Blocker (later stage) |
| 5 | **AG-Q-8** | Enters Approval Exception/Unassigned; the Site Head or Project Head is notified; the Site Head or Project Head assigns | **Whether a Site/Project-Head assignment is a *manual reassignment* under prior §C-4–§C-8** (mandatory reason §C-7, AD-G-7 sensitivity, AC-130 history, AG-Q-9 visibility loss); **whether the Builder-Side Admin keeps the power to reassign in this state** (prior §C-4, §C-13 → LC-4); the eligibility test (shared with AG-Q-3(ii)) | Blocker (authorization) |
| 6 | **AG-Q-10** | Booking records and approval history stay visible without history | **Whether "approval history" includes the reassignment history** (prior AC-129/AC-130), which prior AC-129 grants to all Builder-Side Admins. Not extended here, per the PO's scope instruction | Medium (security) |
| 7 | **AC-48** | The Site Head may change or revoke at any time before commission payment | **What "commission payment" is when payouts are staged or partial** (Spec §32 milestone-based eligibility; §33). Reversal mechanics are architect work (append-only superseding allocation), not a PO question | Low–medium |
| 8 | **AC-51** | (a) no bypass (all access lost); (b) moot (no standing read); (c) cancelled on without-history (LC-1) | **(d) A-92's shape** (the PO declared it unresolved). It still matters because `PO-AE1·O.2` (the previous Site Head's cross-team read-only) is **not** superseded. **Retention of completed follow-ups** (the PO declared it undecided) | Blocker (security) |
| 9 | **AC-54** | Active-booking customers may be transferred with history; the receiving rep continues; bulk may include them | **(a)** Dump authority when the assigned rep is gone (`PO-AE1·H.1`). **(b)** Does a customer-level *Unassigned* state exist? Do **not** merge it with AG-Q-8's approval-level "Approval Exception/Unassigned" (Rule 8). **(c)** In a bulk transfer set to *without history*, are active-booking customers excluded, or moved with history despite `PO-AE1·I.3`'s one-setting rule? **(d)** Who determines "otherwise unavailable"? **(e)** Scope of "Managers may transfer a customer with an active booking intact": read here as bounded by the unavailability trigger (LC-12); if the PO meant it generally, prior §B.21 is narrowed further | Blocker |
| 10 | **AC-55 residual** | The grant basis advanced: management authority needs hierarchy **and** project-level authorization | **(b)** follow-up carry-over vs `PO-AF1·B.8` (`X-42`, narrowed: AC-51-b re-locks carry-over but does not say that `·B.8` does not reach it). **(c)** work mandate (`Z-3`). **(d)** owner vs handler. **X-43**: `PO-AE1·G.1` (Sales Head only) vs F-RV-a ("a manager reassigns"). Also: *which* project-level authorization, who grants it, and the M-3/M-7/U-10(iii) vocabulary | Blocker |
| 11 | **V-4** | Follow-up activity counts for FR; New does not count for FR; the fulfilment limb (via AC-57-d) | **The FUT limb** (does it count for FUT, consolidated work-queue column) **stays open**. The **New**, **W-1** and **W-4** limbs are answered **for FR only**, so their FUT consequences are open. Per the PO: "do not close them" | Blocker (follow-up/reporting model) |
| 12 | **V-23** | Status name, duration, no reversion on rejection, Booking Cancelled, manual exit, queue membership | **"Must cancel before Dump"** is contested (**AGX-8**). Lead status after **Booked**, and after **post-Booked** cancellation. **Whether new follow-ups may be created during Booking in Progress** (AC-57-a cancels existing ones; creation is not addressed). The start event (AG-Q-12) | Blocker |
| 13 | **repo AC-58 residual** | The window is 5 s; the route after the window; the Dump Undone event; cancelled follow-ups stay cancelled; FR retained (AD-G-4); a revived Dump is excluded from loss metrics | **(1)** Which status is restored by Undo Dump: the prior status or New? **(2)** Does Undo open a response cycle? **(3)** Is the 5 s measured on the server or client clock, and what if the Dump was captured offline (Spec §19 permits offline activity capture)? **(4)** Does loss-metric exclusion restate *closed* reporting periods (03af AC-58(b))? **(5)** Undo **Success**: what happens to the hold, Booking in Progress, and the fulfilled follow-up; is it logged ("Success Undone" is not named); and what "ordinary revival rules" mean for a Success after 5 s (AC-58(c)). **(6)** Is the Sales Rep's revival request in-system or outside BMexa? **(7)** AC-58(d): is a corrected-rate metric wanted? (Countable now via "Dump Undone"; not asked) | Low–medium |
| 14 | **W-1** | FR contribution of one call to two projects | The PO says "do not generalize". Open: activity–project association for **every other consumer** (FUT, reporting, per-project timelines — 03g line 390). **New implication:** "each project's FR milestone" presupposes a **per-project** FR milestone, which `PO-AF1·H`/`·J.5` do not define (they define per-cycle and Inquiry-level). Its existence and relation to the Inquiry-level FR are unstated | Medium |
| 15 | **W-4** | FR clock start = the first inquiry through the linked source | The PO says "verify the precise source framing before extending". Open: which source is "linked" when several are; whether *inquiry → first response* is a required **per-source** metric (03g W-4); the relation to `PO-AF1·J.2`'s lead-creation start | Medium |
| 16 | **V-10 residual** | Derived milestones (by AC-56); audit access largely (ACG-5 gives no audit visibility to a non-management Sales Rep) | **Background jobs**, **offline caches** (still open), and **audit access for a receiving rep who is also a management user** (ACG-5 scope vs without-history) | Security-stage blocker |

---

## 6. Remaining open blockers

### 6.1 Blockers (17 business + 2 governance)

| # | ID | Why it blocks | Stage it blocks | Status |
|---|---|---|---|---|
| 1 | AG-Q-2 residual / **AGX-8** | The booking termination path (who, and whether hold release = cancellation) defines AD-G-1's transitions | Data Model (booking/hold/unit) | Partial |
| 2 | V-23 residual / **AGX-8** | The lead status lifecycle during booking | Data Model (lead) | Partial |
| 3 | AG-Q-3 residual | Workflow configuration authority; replacement eligibility | Data Model (approval), Security | Partial |
| 4 | AG-Q-4 residual | Finance vs Accounts; the payment acknowledgement that establishes Booked | Data Model (approval, receipt) | Partial |
| 5 | AG-Q-8 residual | Who may act in Approval Exception | Security | Partial |
| 6 | **AG-Q-11** (NEW) | Role vocabulary for every new authority grant (`R2`) | Security | Open |
| 7 | **AG-Q-12** (NEW) | The hold and booking start events | Data Model (hold, lead) | Open |
| 8 | **AG-Q-13** (NEW) | The pricing and discount basis on a unit change | Data Model (financial snapshot) | Open |
| 9 | **AG-Q-14** (NEW) / **AGX-9** | Workflow version vs a pending manual reassignment | Data Model (approval) | Open |
| 10 | AC-55 residual (`X-42`, `X-43`) | Manager authority boundary | Security | Partial |
| 11 | AC-54 residual | Unassigned state; departed-rep Dump; bulk history mode | Data Model (assignment) | Partial |
| 12 | AC-51 residual | A-92 shape (previous Site Head) | Security | Partial |
| 13 | AC-50 | Where Success attaches in a multi-project Inquiry | Data Model (lead/booking) | Open (touched) |
| 14 | AC-53 | CP claim across revival | Data Model (CP) | Open |
| 15 | T-4/T-5 | CP claim reach | Data Model (CP) | Open |
| 16 | V-4 residual | FUT predicate | Data Model (follow-up/reporting) | Partial |
| 17 | AG-Q-6 residual | Post-Booked unit transfer vs cancellation; NOC | Post-booking financial model (later stage) | Partial |
| G1 | **AGX-10** (NEW, governance) | `R6`/Spec §06 vs ACG-3/ACG-4 decides audit grants | Data Model (audit) | Open |
| G2 | **AGX-7** residual (governance) | Reserve AC-60…AC-131 before any new repo AC is minted | Safe recording | Partial |

**No longer blockers:**
- AG-Q-1, repo AC-56 (resolved).
- AG-Q-10 and AC-48 (downgraded; residuals are medium or low).

### 6.2 Still-open carried clusters (54): compact register

Every one of these is `VALIDATE-OPEN` unless marked otherwise. **The reason for all 52 untouched rows is the same: `PO-AG1` does not reach their subject.** The owning sources are unchanged from baseline §6.3.

| Group | Items | Count | Note |
|---|---|---|---|
| Touched, not answered | `AC-50` (limb (b) narrowed: at most one *active hold* per customer, AG-Q-1-g, but several sequential bookings remain possible; (c) untouched); `N-2` (sharpened: follow-ups are cancelled on entering Booking in Progress, so an escalation during booking has no follow-up subject unless new ones may be created (V-23 residual); AG-Q-7's "no approval SLA" is **not** a lead-escalation rule and is not extended to `N-2`) | 2 | — |
| From baseline §6.1 | `AC-53`, `T-4`/`T-5` | 2 | Blockers (money) |
| Repo `AC-59` | Success Reason vocabulary | 1 | Untouched |
| AD-01AE / AC chain | `AC-52`, `AC-6`, `AC-7`·re-basing, `AC-12`, `AC-13`, `AC-26`, `AC-42`, `AC-47` | 8 | Untouched. `AC-12` is **not** merged into `AC-48` (03ab §11.4) |
| N / V / W / Y | `N-4`, `V-19`, `V-24`, `W-5`, `Y-5` | 5 | Untouched |
| AD-01 §10 | `Q2`, `Q3`, `Q5`, `Q8`, `Q9`, `Q10`, `Q11`, `Q12`, `Q13`, `Q14`, `Q15`, `Q16` | 12 | Untouched. `Q14` (lead-response SLA) is **not** answered by AG-Q-7 |
| AD-01F | `V-3`·2, `V-6`, `V-8`·2, `V-11`, `V-14`, `V-18`, `V-21`, `V-26` | 8 | Untouched |
| W / Y / Z | `W-2`, `Y-1`, `Y-2`, `Y-4`, `Z-1`…`Z-6` | 10 | Untouched. `Y-2`: AC-57-a's "any existing pending follow-up" is **not** taken as evidence either way. `Z-3` still consumes AC-55(c) |
| 03af non-AC | Follow-up notification cadence; §13.3a #1 (transfer-that-revives: one cycle or two; F-RV does not say); #3; #4; #7 (assignment → FR clock; W-4 does not select it) | 5 | Untouched |
| Day boundary | `V-20`·tz / `M-6` | 1 | Untouched |
| **Total** | | **54** | = 2 + 2 + 1 + 8 + 5 + 12 + 8 + 10 + 5 + 1 |

**Still excluded from the count (as in baseline §6.3), not closed:** the U-series other than U-10, the T-series other than T-4/T-5/T-6, `M-2`, `M-5`, `M-8`, `M-9`, `M-14`, `N-1`, `N-3`, `W-3`·enforcement, `Q0-a…e`, AD-01AE's three non-AC items, and the AC-2…AC-49 residue. `M-9` (unit transfer) is now coupled to AG-Q-6(i). `N-3` is now coupled to AC-54(a).

### 6.3 Newly identified question clusters (8), NEW (03ag)

| ID | Question | Why it is new (source of the ambiguity) | Severity |
|---|---|---|---|
| **AG-Q-11** | **Role vocabulary of the new authorities.** (a) Are *Site Head* and *Project Head* one principal or two? Spec §03 lists "Project Head / Site Head" as one entry, but `PO-AG1` uses them as alternatives and sometimes names only the Site Head (AG-Q-2-d/e). (b) Is the L1 *Sales Head* distinct from the Site Head? Cons. §3 has one row "Site Head / Sales Head"; Spec §03 lists them separately. (c) Who is "*CRM*" as an approval level, a cancellation processor and delegated configuration staff? No role row exists in Spec §03 or Cons. §3. (d) Accounts vs Finance is cross-referenced to AG-Q-4 and **not duplicated**. (e) Is *Builder-Side Admin* the Spec §03 *Builder Admin*? | `PO-AG1` grants authority to these names; `R2` forbids branching on role names; AD-G-8 needs the principals. May merge with `M-3` when the unbanded families are de-duplicated | Blocker |
| **AG-Q-12** | **The booking start events.** (a) What recorded act is "the customer confirms readiness" (AG-Q-1-b), and who records it? (b) Is V-23's "when booking begins" that act, the booking-initiating Success activity, or the Booking Form? (c) So, when both fire together, is the pending follow-up **fulfilled** (AC-57-c) or **cancelled** (AC-57-a)? | AG-Q-1, V-23 and AC-57 each name a start without tying them together | Blocker |
| **AG-Q-13** | **Re-pricing on a unit change during correction.** (a) Is the new unit priced at the *current* price-list version (compare prior §B.15) or at the version applicable at the original submission? (b) Does a discount approved (AG-Q-4-f) for the old unit carry over, or must it be re-approved? | AG-Q-5-d says "recalculated" without a basis; discount approval precedes booking approval | Blocker (financial, §88) |
| **AG-Q-14** ↔ **AGX-9** | **Workflow version vs a pending manual reassignment.** When a correction is resubmitted under the *latest* workflow version (AD-G-3), what becomes of a manual reassignment made during correction that "takes effect on resubmission" (prior §C-10), if the latest version's level or assignee differs? | Two PO rules meet at the resubmission instant | Blocker |
| **AG-Q-15** | **Does AC-56's "only … their own work" narrow `PO-AE1·L.3`'s "only activities after that transfer"?** Specifically, are *post-transfer* activities **not** authored by the receiving rep visible to that rep? Examples: system activities such as "Customer showed interest again" (`PO-AE1·C.1`), and Site Head actions | The two "only"s define different sets | Medium (security) |
| **AG-Q-16** | **Are "New client transferred" (`PO-AE1·M.1`), "Client Transferred" (F-RV-a) and "Customer Transferred" (AC-56-a) one system activity or several?** | Three labels; Rule 8 forbids merging them silently | Low |
| **AG-Q-17** | **Prior AC-127 vs AD-G-6/AD-G-7.** May an *external* approval notification carry the reassignment **reason** (sensitive under AD-G-7) and the **previous approver's name**, given AD-G-6's "minimum necessary booking PII"? | Prior AC-127 lists content; AD-G-6/AD-G-7 restrict it | Medium (security) |
| **AG-Q-18** | **Does AG-Q-9's "loses all visibility into the booking and workflow" extend to audit-log records about that booking** that the person would otherwise see under **ACG-5** as a management user within scope? | Two locked decisions with different surfaces; neither is to be broadened | Medium (audit/security) |

---

## 6A. Missing and Incomplete Decision Report

### 6A.1 Missing decisions relative to the source

**Zero.** There is only one PO decision source in this session (§0). Every item in it, each of its rules and each of its scope sentences appears in §3A. No question is missing *relative to that source*. The only honest way to say more would be to compare against a longer dialogue, and that dialogue, if it exists, is not accessible (§0).

**Gaps that were not manufactured, but that are real and pre-existing:**

| Gap | Nature | Source of evidence |
|---|---|---|
| The earlier bundle's per-ID text for AC-58…AC-123 | Still missing (F-3). Its rules exist only as the baseline's abridged §B/§C table (Appendix A) | Baseline §1, §4 |
| The verbatim text of the earlier bundle (§A–§D, AC-124…AC-131) | Not in this session. Recorded only abridged | Baseline §4 |
| The option texts behind "Option 1/Option 2" in ACG-1, -3, -5, -6, -7, -8, -9 | Not in this session (RN-6) | `PO-AG2` |

### 6A.2 Items the bundle itself declares unresolved (recorded as open, not inferred)

| Item | PO text | Where tracked |
|---|---|---|
| Finance vs Accounts | "Identify this as a residual naming/scope question…" | AG-Q-4 residual (§5 #3) |
| V-4 limbs | "preserve any other unresolved V-4 limbs … do not close them" | §5 #11 |
| A-92 | "The exact A-92 shape remains unresolved. Do not invent it." | §5 #8 |
| Completed-follow-up retention | "Do not assume … explicitly decided." | §5 #8 |
| AC-55 b/c/d, X-43 | "these are NOT all closed by this" | §5 #10 |
| No-history enforcement | "MAY remain unresolved — check the baseline's V-10 residual" | §5 #16 (checked: background jobs and offline caches still open) |

### 6A.3 Where the bundle's text is ambiguous or under-specified, cross-referenced to the cluster view

This table is the register view of the same facts that §5 and §6.3 give by cluster. The two views are meant to agree row for row.

| Bundle row(s) | Ambiguity or under-specification | Cluster view |
|---|---|---|
| AG-Q-1-f, AG-Q-2-c, AG-Q-2-d, V-23-d | Hold release vs Pre-Booked cancellation vs the rep's duty to cancel | AGX-8; AG-Q-2 #1; V-23 #12 |
| AG-Q-1-b, V-23-a, AC-57-a/c | Start events not tied together | AG-Q-12 |
| AG-Q-2-b, AG-Q-2-f, AG-Q-4-a, AG-Q-6-a/c, AG-Q-8-b/c | Site Head / Project Head / Sales Head / CRM vocabulary | AG-Q-11 |
| AG-Q-3-e, AG-Q-3-g, AG-Q-8-c | "Eligible" undefined for replacement approvers | AG-Q-3 #2; AG-Q-8 #5 |
| AG-Q-3-g | Who configures | AG-Q-3 #2 |
| AG-Q-4-d | Finance vs Accounts | AG-Q-4 #3 |
| AG-Q-5-d | Re-pricing basis; discount re-approval | AG-Q-13 |
| AD-G-3 | Meets prior §C-10 | AGX-9 / AG-Q-14 |
| AG-Q-6-d, AD-G-1 | Booking-record state after post-Booked cancellation not named | AG-Q-6 #4; §8.2 |
| AG-Q-6-j | NOC semantics | AG-Q-6 #4 |
| AC-48 | "Commission payment" undefined for staged payouts | AC-48 #7 |
| AC-54-c, AC-54-d | Bulk history mode; scope of "Managers may transfer…" | AC-54 #9 |
| AC-56-a | "Only … their own work" vs `PO-AE1·L.3` | AG-Q-15 |
| AC-56-a, F-RV-a, `PO-AE1·M.1` | Three transfer-activity labels | AG-Q-16 |
| AC-58-a/b | Undo Success consequences; clock; offline | repo AC-58 residual #13 |
| F-RV-a | "A manager" vs `PO-AE1·G.1` | X-43 (AC-55 residual #10) |
| F-RV-d | Closed-period restatement | repo AC-58 residual #13 |
| W-1 | Per-project FR milestone presupposed | W-1 #14 |
| W-4 | Which linked source | W-4 #15 |
| AG-Q-10 | Does "approval history" include the reassignment history? | AG-Q-10 #6 |
| AG-Q-9 × ACG-5 | Audit-log visibility of a removed approver | AG-Q-18 |
| AD-G-6 × prior AC-127 × AD-G-7 | External notification content | AG-Q-17 |
| ACG-3/ACG-4, ACG-1 | Owner-given `R6` and Spec §06/§54 are not stated as superseded | AGX-10 |
| ACG-6 | Does "details of the edit or deletion" include the pre-change content? | ACG-INV-6 (architecture investigation; may later need a PO answer) |
| ACG-1 | Does "user … actions" include **reads** (views, searches)? | ACG-INV-1 |

---

## 7. Governance and security implications

### 7.1 The supersession ledger: only explicit supersessions are marked `SUPERSEDED`

| # | New rule | Superseded text | Old vs new | Explicit wording relied on | Not reached |
|---|---|---|---|---|---|
| **S-1** | AC-51-a | **`PO-AE1·N.2`** (03ae line 298): *"BUT can search by mobile number and open the record in READ-ONLY mode, seeing the complete current record…"* | **Old:** the previous rep keeps a permanent read-only view by mobile search. **New:** the previous rep loses **all** access once the transfer takes effect. | *"This SUPERSEDES the earlier read-only-access rule."* | `·N.1` (subsumed, consistent); `·N.3` (consistent); `·N.4` (contact the Site Head outside BMexa) **survives**; **`·O.2`/`·O.3` (the previous Site Head's cross-team read-only) are NOT superseded**, because AC-51 names "the previous Sales Rep" |
| **S-2** | AC-58-a | The **earlier bundle's** undo window, labelled `AC-56` in that bundle (baseline §3.2 row `X-45`; §4 row `AC-56`: "10-second Undo Dump for the actor") | **Old:** 10 seconds. **New:** 5 seconds, and it now covers mistaken Dump **or Success**. | *"SUPERSEDING the earlier 10-second window (from the prior PO-AF1/bundle round)"* | **Note:** no repo document ever contained a 10-second window (grep: zero hits). `PO-AF1` itself has none. 03af §13.1 AC-58 *expressly declined* to propose one. The superseded text is the earlier bundle's, known only through the baseline. |
| **S-3** | AG-Q-7-b | Earlier bundle AC-125 (SLA reset on reassignment); the SLA-breach limb of prior §C-2 | **Old:** reassignment resets the SLA clock. **New:** no SLAs and no resets exist. | *"No time limits, SLA configuration, breach handling, or SLA resets exist."* | Prior §C-2's leave and slow-response limbs (fallback not triggered) survive. **`Q14` and `N-2` are not reached.** Architect AD-G-12 is withdrawn (it was not PO text). |
| **S-4** | AD-G-3 | Prior §B.18's pin, for the correction/resubmission case only | **Old:** open bookings keep their workflow version. **New:** resubmission uses the latest version. | *"not the initially pinned version"* | Bookings never returned for correction keep the pin. **Prior §C-10 is not reached → AGX-9.** |
| **S-5** | H-GATE | 03af §12.5 / baseline §10 step 7: the Gate deferred to the end of the phase | **Old:** deferred. **New:** active. | *"The PO has now explicitly instructed that it begin."* | The lifting is for the **Gate only**. It is **not** a declaration that architecture is complete. |

**Not superseded, although it might look so.**
- Spec §21's snapshot ("At booking confirmation") is **retained** as the Booked snapshot. AG-Q-5-b **adds** an initial-submission snapshot (additive).
- Spec §20's three stages are **refined** by AD-G-1, not superseded (§8.2).
- AD-01A §8.2 / `Q4` ("a cancelled booking must not rewrite Success") is **reaffirmed** by AC-57-e and not contradicted by AG-Q-6.

### 7.2 Scope discipline: decisions deliberately NOT broadened

| Decision | Its stated scope | What it is NOT extended to |
|---|---|---|
| AG-Q-10 | "booking and approval records" | Activity history, follow-ups, milestones, notes, attachments, reassignment history (AG-Q-10 residual), audit records |
| W-1 | One call, two projects, FR contribution | FUT, reporting attribution, timeline partitioning, calls about three or more projects beyond FR, non-call activities |
| AG-Q-7 | Approval SLAs | Lead-response SLA (`Q14`), follow-up escalation (`N-2`, Spec §58) |
| AC-51 | The previous Sales Rep | The previous Site Head (`PO-AE1·O.2`) |
| AC-54 | Owning rep "inactive, changes teams while active, or is otherwise unavailable" | Voluntary transfers of active-booking customers by an available rep's manager (LC-12) |
| AC-56 | The receiving Sales Rep | Managers, the Site Head (`·O.1` still sees complete history), auditors |
| AD-G-7 | Free-text **reassignment** reasons | Other free-text fields (transfer reason `PO-AE1·I.4`, Dump remarks, cancellation remarks). These are not decided as sensitive and not decided as non-sensitive |
| AG-Q-9 | Visibility "into the booking and workflow" | Audit-log visibility under ACG-5 (AG-Q-18) |
| AD-G-5 | One active hold per **unit**, DB-level | Per-customer and per-booking uniqueness are PO business rules, but their DB-level enforcement is **ARCHITECT DERIVED** (AD-G-17) |

### 7.3 Security implications (architecture work, not PO questions unless noted)

| # | Implication | Basis | Class |
|---|---|---|---|
| SEC-1 | Booking visibility becomes **non-monotonic**: a person may lose visibility (AG-Q-9) that they would hold on another basis (management scope, `PO-AE1·O.1`). The RLS design needs a *deny* input, which AD-01G §9.3 priced and declined to recommend in the general case (03ae §12.2) | AG-Q-9, AGX-5 | PO LOCKED requirement; enforcement design is ARCHITECT work |
| SEC-2 | Without-history now has an explicit **exception surface** (AG-Q-10): booking and approval records are visible while every other history surface is hidden. Projections must separate them per record type | AC-56, AG-Q-10 | PO LOCKED |
| SEC-3 | The receiving rep's own Inquiry-level FR can disclose that nobody responded before them. Recommendation **AD-G-15**: show that rep only their Transfer-to-First-Response interval | AC-56 + `PO-AE1·L.3` + `PO-AF1·J.5` | **ARCHITECT DERIVED** — needs PO validation |
| SEC-4 | External notifications: minimum PII; authenticated, non-bearer links (Spec §51 already warns against bearer approval links) | AD-G-6 | PO LOCKED; content residual AG-Q-17 |
| SEC-5 | Reassignment reasons are sensitive fields in storage, display, **audit before/after values (ACG-2)** and **audit export (ACG-9)** | AD-G-7 × ACG-2/ACG-9 | PO LOCKED; handling design → ACG-INV-2, -9 |
| SEC-6 | Every new authority (hold release, cancellation, resale release, Approval Exception resolution, audit edit/delete/export) must be a **capability or structural predicate, never a role name** (`R2`) | AD-G-8; AG-Q-11 | ARCHITECT DERIVED, pending AG-Q-11 |
| SEC-7 | The Builder-Side Admin can now edit or delete audit records: the highest-value insider target in the system. Tamper evidence must survive that authority (ACG-INV-12) | ACG-3/4/6 | PO LOCKED; design → ACG-INV |
| SEC-8 | Management audit visibility "limited to … management scopes" needs a scope anchor on every audit row. Because `R6` payloads are denormalised and must not be re-joined to live tables (`R6`: "Joining to live tables to render history is wrong"), the anchor must be captured **at write time** | ACG-5 × R6 | ARCHITECT DERIVED → ACG-INV-5 |
| SEC-9 | Without-history leakage through **background jobs** and **offline caches** remains undesigned | V-10 residual | Open |

### 7.4 Audit Completeness Gate: status

| | |
|---|---|
| Gate status | **ACTIVE** since `PO-AG1·H-GATE` (S-5) |
| Locked decisions | `ACG-1`…`ACG-9`: **PO LOCKED**, recorded verbatim at §3.2, **not re-asked** |
| Investigation areas | `ACG-INV-1`…`ACG-INV-14`: architecture work (§7.6) |
| Contradiction touching the Gate | `AGX-10` (governance/ledger, §9.1) |
| Clarification touching the Gate | `AG-Q-18` |
| Gate completion | **NOT complete.** No audit event taxonomy, schema revision, access policy, export control or tamper-evidence design exists yet |

### 7.5 The locked ACG decisions against built artefacts: collisions named, not fixed

| Locked decision | Built artefact | Collision | Class |
|---|---|---|---|
| ACG-3, ACG-4 | `ENGINEERING_RULES.md` R6: *"It is never updated and never deleted"*; *"`UPDATE` and `DELETE` are revoked"*. `schema-phase-0.sql` lines 2209–2212 (grant intent) | Editability by the Builder-Side Admin needs a controlled write path that R6 forbids | **AGX-10** (ledger) + AD-G-18 |
| ACG-3 | Spec §06 glossary: *"Audit Event — Immutable security/business audit record."*; Spec §54 *"tamper-resistant"* | Immutable vs editable-by-admin | **AGX-10** |
| ACG-1 | R6: *"we take incomplete coverage in exchange for a legible log"*; Spec §54: *"Do NOT blindly 'log everything.'"* | Comprehensive coverage vs deliberate selectivity | **AGX-10** (second limb) |
| ACG-8 | `audit_events.tenant_id … REFERENCES tenants(id) ON DELETE CASCADE` | Deleting a tenant row deletes its audit history, which is age-independent but still loss. Spec §56 separates "tenant closure" and requires Legal/Compliance validation | ACG-INV-4, -8 |
| ACG-8 | R6 retention: 12 months hot, then S3 cold, *"Nothing is hard deleted"*. Spec §55: no premature partitioning | Compatible **if** cold archive counts as retention. ACG-5 and ACG-9 then need a path to cold records | ACG-INV-8 |
| ACG-1 (security events) | `audit_events.tenant_id NOT NULL` | Pre-authentication or unknown-tenant security events (failed login for an unknown user) have no tenant | ACG-INV-4 |
| ACG-2 | `audit_events.payload jsonb`: no structured before/after | "Before-and-after values" have no convention | ACG-INV-2 |
| ACG-1 | `event_category CHECK IN ('general','auth','rbac','billing','data','integration','admin')` | No category for booking, inventory, approval, lead activity or audit-administration events | ACG-INV-1 |
| ACG-5 | RLS policy `tenant_isolation` only | Scope filtering does not exist | ACG-INV-5 |

### 7.6 ACG investigation areas (NEW, architecture work, not PO decisions)

| ID | Area | What must be investigated | Locked decision(s) served | Existing audit IDs mapped | May later need a PO answer? |
|---|---|---|---|---|---|
| **ACG-INV-1** | Event taxonomy and coverage mapping | An inventory of events against ACG-1's five categories. Seeds: 03af §12.1 #1–4 and §12.2 #5–12; baseline §10 step 7 (AC-130 reassignment history, "Dump Undone", hold/release/cancel/resale-release, Approval Exception). **Added by `PO-AG1`:** payment-hold start/expiry/conversion; booking-hold release; unit swap in correction; initial and final snapshots; approval decisions per level; workflow version applied at resubmission; Approval Exception entry/notification/resolution; pre- and post-Booked cancellation steps; refund/forfeiture recorded; commission revoked/changed; NOC; transfers with or without history plus follow-up cancellations; Booking-in-Progress follow-up cancellations; Undo Dump/Success; revival ("Client Transferred"); audit edit/delete meta-records; audit views and exports. **Open:** whether ACG-1's "user … actions" includes reads (views, searches) | ACG-1 | 03af §12.1–§12.2; baseline §10.7; AC-130; `event_category` | Possibly (the reads limb) |
| **ACG-INV-2** | Record schema and relationships | Mapping actor / timestamp (`occurred_at` vs `recorded_at`) / action / affected record (`subject_type`/`id`) / before-after. What "wherever applicable" excludes. System and integration actors (`actor_type`). Authorization context (Spec §54). Sensitive-field handling in before/after (AD-G-7). The link between the ACG-6 meta-record and its target | ACG-2, ACG-6 | Spec §54; R6; `audit_events` DDL | No |
| **ACG-INV-3** | Audit log vs business history | 03af §12.4 (`PF-490`): the audit log is not the business-history source, and vice versa. ACG-3 editability **sharpens** the separation: editing an audit record must never edit the append-only activity stream (`PO-AF1·G.5`) or the booking history (Spec §25) | ACG-3 | 03af §12.4; AD-01 §8.3; Cons. §25 | No |
| **ACG-INV-4** | Tenant isolation | `tenant_id NOT NULL` and `ON DELETE CASCADE` vs ACG-1 security events and ACG-8 retention. Platform-level (Super Admin/support) events. RLS on audit and meta-records. Spec §05 tenant model; `PO-AE1·Q.3` | ACG-1, ACG-5, ACG-8 | `audit_events` DDL; Spec §56 | Tenant-closure retention: Legal/Compliance (Spec §56), not an invented PO rule |
| **ACG-INV-5** | Scoped visibility | Defining "management scope" for audit rows under AC-55's conjunctive rule (M-3/M-7/U-10(iii) open). Scope at event time vs view time. Write-time scope anchors (SEC-8). The without-history boundary inside audit views (V-10 residual). Removed approvers (AG-Q-18) | ACG-5 | AC-55; V-10; AG-Q-9 | Yes, via AG-Q-18 and AC-55 residual |
| **ACG-INV-6** | Integrity controls and privileged access | Mechanism for Builder-Side-Admin edit/delete without granting `UPDATE`/`DELETE` to `crm_app` (AD-G-18). Whether ACG-6's "details of the edit or deletion" include the **pre-change content**: if yes, deletion does not remove the data (retention and erasure consequence); if no, ACG-2's before-values are lost. Edits to records of the admin's own actions. Multiple Builder-Side Admins. Immutability of ACG-6 records even against the Builder-Side Admin | ACG-3, -4, -6, -7 | R6; Spec Rule 5; AGX-10 | Possibly (pre-change content) |
| **ACG-INV-7** | Query and filtering | Filters by actor, subject, event type, time, project, customer. Existing indexes (tenant/time, type, actor, subject). The cost of scope filtering. GIN deferred to Phase 2 (`Q20`) | ACG-5 | `audit_events` indexes; Q20 | No |
| **ACG-INV-8** | Retention and storage | Indefinite retention vs R6's hot/cold tiering (cold = retained?). Queryability and exportability of cold records. Growth (Spec §75 lists audit records among the real scaling dimensions). Tenant closure. Legal/Compliance validation under Spec §56 | ACG-8 | R6; Spec §55, §56; schema `Q1` tiering | Legal/Compliance, not PO |
| **ACG-INV-9** | Export controls | Whether Spec §52's request/approve/log flow applies when the only exporter is the Builder-Side Admin. Export scope (tenant only; respecting the without-history boundary?). Sensitive fields. Format. Secure delivery (non-bearer, compare AD-G-6 and Spec §51). The export itself is an audited administrator action | ACG-9 | Spec §51, §52 | Possibly (the §52 approval step) |
| **ACG-INV-10** | Audit access and export traceability | Logging who viewed and who exported audit records. 03af §12.3 Q7 (reads without operational authority) | ACG-1, -5, -9 | 03af §12.3 Q7 | Linked to ACG-INV-1 reads |
| **ACG-INV-11** | Failure handling and completeness guarantees | Same-transaction insert vs outbox. Behaviour on a missing partition (the schema comment: audit write failure takes down every emitting write). Async side effects (notifications). Offline-captured activities (`occurred_at` ≠ `recorded_at`). Idempotency (Spec §69). Strong consistency for critical transitions (Spec §68) | ACG-1 | `audit_events` partition runway; Spec §68–§69 | No |
| **ACG-INV-12** | Tamper detection | Sequence numbers and hash chaining that stay verifiable **across authorised edits and deletions** (the chain must include ACG-6 records). Privileged database roles (Spec Rule 5; R6's archive job runs privileged). Operator access | ACG-3, -6 | Spec §54 "tamper-resistant"; R6 | No |
| **ACG-INV-13** | Operational monitoring and recovery | Partition-coverage alerting (the schema's open Phase-1 follow-up). Archive-job verification. Restore procedures. Backups of audit and meta-records. Spec §73 (observability), §74 (backups/recovery) | ACG-8, -1 | `schema-phase-0.sql` partition runway note | No |
| **ACG-INV-14** | Deliberate gaps inherited | 03af §12.3 row 6 (a correction relationship is unanswerable by design, `PO-AF1·G.3`). The Gate must record it as a known gap, not a defect | ACG-1 | 03af §12.3 row 6 | No |

### 7.7 ACG register (consolidated)

| ID | Type | Status | Notes |
|---|---|---|---|
| ACG-1 | PO decision | **PO LOCKED** | AGX-10 limb 2 (ledger); ACG-INV-1, -10, -11 |
| ACG-2 | PO decision | **PO LOCKED** | ACG-INV-2 |
| ACG-3 | PO decision | **PO LOCKED** | AGX-10 limb 1 (ledger); ACG-INV-3, -6, -12 |
| ACG-4 | PO decision | **PO LOCKED** | ACG-INV-6; AG-Q-11(e) (Builder-Side Admin identity) |
| ACG-5 | PO decision | **PO LOCKED** | ACG-INV-5; AG-Q-18; AC-55 residual |
| ACG-6 | PO decision | **PO LOCKED** | ACG-INV-6 (pre-change content) |
| ACG-7 | PO decision | **PO LOCKED** | ACG-INV-6 |
| ACG-8 | PO decision | **PO LOCKED** | ACG-INV-4, -8, -13 |
| ACG-9 | PO decision | **PO LOCKED** | ACG-INV-9, -10 |
| ACG-INV-1…14 | Investigation | **OPEN — architecture work** | No PO decision is invented. Three areas (-1, -6, -9) may surface a later PO question, asked one at a time |

---

## 8. Architectural implementation gaps

### 8.1 How proposed changes are classified

Every row in §8.2–§8.3 is labelled **PO** (a PO-locked requirement), **ARCH** (an architect-derived recommendation, not a rule until ratified) or **OPEN** (needs PO input first).

### 8.2 `AD-G-1` verified against the existing architecture

| Finding | Evidence | Class |
|---|---|---|
| The seven states mix **three different lifecycles**. **Hold:** Held. **Booking:** Pending Approval, Returned for Correction, Booked, Cancelled (Pre-Booked). **Unit/inventory:** Cancelled Inventory, Released for Resale. Spec §17 demands that VIEWING, HOLD, BOOKING INITIATED, PENDING VERIFICATION and BOOKED stay distinct, and AD-01A §8.2 gives Booking its own machine. **Recommendation AD-G-16:** model three linked machines (hold, booking, unit), which is what preserves "the distinction between booking cancellation and inventory release" that the PO asked for | Spec §17; 03a §8.2 | ARCH (AD-G-16) |
| "Held" spans two PO phases (20-minute payment hold, non-expiring booking hold, AG-Q-1). Spec §20 Stage 1 "Booking Initiated" (the Booking Form before submission) has **no named AD-G-1 state**. It sits inside "Held" | Spec §20; AG-Q-1-c | OPEN (part of AG-Q-12) |
| "Pending Approval" ↔ Spec §20 "Pending Verification": treated as a naming mapping, not a new state | Spec §20 | ARCH |
| There is **no booking state after post-Booked cancellation**. AG-Q-6 says "The unit becomes Cancelled" but does not name the booking record's state; "Cancelled (Pre-Booked)" does not fit | AG-Q-6-d | OPEN (AG-Q-6 residual iv) |
| Does a **Pre-Booked** cancellation put the unit into **Cancelled Inventory** (release by the Site Head *or* Project Head, AG-Q-2-f and prior §B.13), or is it directly releasable by the **Site Head** only (AG-Q-2-e)? | AG-Q-2-e vs -f | OPEN (folded into AGX-8's consequence; not separately counted) |
| "Released for Resale" vs "Available": AG-Q-2-f says "release the unit and mark it Available". Released for Resale may be an **event**, not a resting state | AG-Q-2-f | ARCH (AD-G-16) |
| There is **no final-rejection** state. Every rejection "returns for correction" (AG-Q-1-e). Whether an approver can reject terminally is unstated, and is **not invented** | AG-Q-1-e; prior §B.8 | Noted, not minted (no source text asks for it) |
| Payment-hold expiry → unit Available: Spec §18 applies to that phase only | Spec §18; AG-Q-1 | PO |
| Uniqueness: one active hold per unit (**PO**, AD-G-5); per customer (**PO rule**, AG-Q-1-g) and per booking (**PO rule**, AG-Q-1-d) with DB enforcement recommended (**ARCH**, AD-G-17); an atomic swap for a unit change during correction (**ARCH**, AD-G-17; compare prior §B.10). Availability correctness must not rely on non-immutable time predicates (Cons. §21), so the payment-hold expiry cannot sit in a partial-index predicate on `now()` | Cons. §21; `01` §D.5 | PO + ARCH |
| Same person as approver in two rounds: AG-Q-9-b removes earlier-round visibility; restart at Level 1 (prior §B.17) may re-assign the same Level-1 person. Reading: they regain visibility **as current assignee** only. AD-G-14's cross-round duplicate-level exclusion is unaffected | AG-Q-9-b; prior §B.17, §B.20 | ARCH |

### 8.3 Architecture artifacts requiring updates: NAMED, NOT MADE

No file below was edited by this task. PO-owned sources (Spec, consolidated requirements, `R1`–`R6`) are amended only by or on the explicit instruction of the PO.

| # | Artifact | Change needed | Class | Gated on |
|---|---|---|---|---|
| 1 | `docs/BMEXA_MASTER_SPEC.md` §16 | Hold is one continuous hold in two phases. "One unit" is per hold, not per rep | PO (+ LC-10) | LC-10 |
| 2 | Spec §18, §82 | Server-time expiry applies to the payment-hold phase only | PO | LC-11 |
| 3 | Spec §20 | Map the stages to AD-G-1 / AD-G-16 | ARCH | AGX-8, AG-Q-12 |
| 4 | Spec §21 | Two snapshots (initial submission, Booked) | PO | — |
| 5 | Spec §06 glossary "Audit Event — Immutable"; §54 | Reflect ACG-1/ACG-3 | PO | **AGX-10** |
| 6 | Spec §57 | The active-booking transfer exception | PO | LC-12 |
| 7 | Consolidated §3 | Roles: Accounts/Finance; Site Head/Sales Head/Project Head; CRM; Builder-Side Admin | OPEN | AG-Q-4, AG-Q-11 |
| 8 | Consolidated §4 step 4, §21 | The hold phases | PO | LC-11 |
| 9 | Consolidated §18 step 6 | Sales Support approval is optional | PO | LC-5 |
| 10 | Consolidated §19 | Accounts verification vs the Accounts approval level | OPEN | AG-Q-4 |
| 11 | `docs/ENGINEERING_RULES.md` R6 | Editability by the Builder-Side Admin; comprehensive coverage; retention wording | PO | **AGX-10** |
| 12 | `docs/architecture/schema-phase-0.sql` `audit_events` | Grants (R6), `ON DELETE CASCADE`, `tenant_id NOT NULL`, before/after convention, `event_category`, scope anchors, the ACG-6 meta-record store | ARCH | AGX-10, ACG-INV-2/4/5/6 |
| 13 | `packages/db/drizzle/*` | Mirror of #12 | ARCH | #12 |
| 14 | `docs/architecture/01-…` §D.5 | Hold expiry is phase-specific; add per-customer and per-booking uniqueness | PO + ARCH | LC-11 |
| 15 | `docs/architecture/03-…` (AD-01) §6.3 Unassigned | Customer-level Unassigned state | OPEN | AC-54(b) |
| 16 | `docs/architecture/03a-…` §8.2 | Confirm that Booking in Progress and Booking Cancelled are operational statuses | PO | LC-7 |
| 17 | `docs/architecture/03ae-…` `PO-AE1·N.2` | Mark SUPERSEDED (S-1) | PO | — |
| 18 | `03ae` `PO-AE1·K.1/·K.2` | Narrowed for without-history transfers | PO | LC-1 |
| 19 | `03ae` `PO-AE1·G.1`; §12.2 AC-51; §12.5 AC-54 | X-43; status updates | OPEN / PO | X-43; — |
| 20 | `03ae` `PO-AE1·M.1` | Label | OPEN | AG-Q-16 |
| 21 | `docs/architecture/03af-…` §12.5 | The Gate opened | PO | — |
| 22 | `03af` §13.1 AC-56/AC-57 | Resolved by `PO-AG1` | PO | — |
| 23 | `03af` §13.1 AC-58 | Partially resolved; the "no undo window" premise is overtaken | PO | — |
| 24 | `03af` `PO-AF1·O.1` | Narrowed: a Dump does not fulfil | PO | LC-2 |
| 25 | `03af` `PO-AF1·B.1/·B.2/·B.5` | Conjunctive management authority | PO | LC-9 |
| 26 | `03af` §9.2 / U-10 | Principal identification | OPEN | AG-Q-11 |
| 27 | `docs/architecture/03ab-…` §11.4 AC-48 | Partially resolved | PO | — |
| 28 | `docs/architecture/03w-…` `PO-W1·2` | Anchor to Booked (AD-G-2) | PO | — |
| 29 | `03g` W-1, W-4 | Partial resolutions; per-project FR milestone | PO + OPEN | W-1, W-4 residuals |
| 30 | (future) Inventory / hold / booking / unit data model | Three linked machines; uniqueness; swap; snapshots | PO + ARCH | AGX-8, AG-Q-12, AG-Q-13 |
| 31 | (future) Approval workflow configuration model | Versioning, levels, named assignees, Approval Exception, reassignment history, no SLA fields | PO | AG-Q-3, AG-Q-4, AG-Q-8, AG-Q-11, AG-Q-14 |
| 32 | (future) Follow-up engine | Terminal states (§4); fulfilment predicate | PO | AG-Q-12(c); LC-8 |
| 33 | (future) RLS/projection design for bookings, milestones, intervals | AG-Q-9 deny input; AG-Q-10 exception; AC-56; AD-G-15 | PO + ARCH | AG-Q-15, AG-Q-18 |
| 34 | (future) Notification templates and links | AD-G-6 | PO | AG-Q-17 |
| 35 | (future) Audit query/export APIs and admin edit path | ACG-3…ACG-9 | PO + ARCH | AGX-10, ACG-INV |
| 36 | Beads | Follow-up issues (§12.4) | — | The orchestrator creates them |

### 8.4 Architect-derived register (`AD-G`), updated

| ID | Baseline content (short) | Now | Class |
|---|---|---|---|
| AD-G-1 | Candidate booking state machine | **PO LOCKED as proposed**, with verification findings (§8.2) | PO |
| AD-G-2 | Stage-2 anchored to Booked | **PO LOCKED** | PO |
| AD-G-3 | Pin survives correction | **Rejected by the PO**; the PO rule is the latest version | PO |
| AD-G-4 | Undone Dump's FR persists | **PO LOCKED** (5 s) | PO |
| AD-G-5 | DB single-active-hold | **PO LOCKED** (per unit) | PO |
| AD-G-6 | Minimum PII; non-bearer links | **PO LOCKED** | PO |
| AD-G-7 | Reason is sensitive | **PO LOCKED** | PO |
| AD-G-8 | Capabilities, not role names | Open; **more pressing** (AG-Q-11) | ARCH |
| AD-G-9 | Price lock at submission supersedes §21 | **Moot**: AG-Q-5-b keeps §21 as the Booked snapshot | — |
| AD-G-10 | `01` §D.5 expiry conditional on AGX-1 | **Discharged by consequence**: expiry is phase-specific (artifact #14) | — |
| AD-G-11 | Success activity → FR; the booking lock blocks new transfer cycles | **Needs revision**: AC-54's exception allows transfer, and so a new cycle | ARCH |
| AD-G-12 | SLA clock per assignment | **Withdrawn** (S-3) | — |
| AD-G-13 | Approval Exception is a recorded state; never auto-approve | **PO-backed** (AG-Q-8-a; prior §C-3) | PO |
| AD-G-14 | Duplicate-level exclusion across rounds | Open (§8.2 note) | ARCH |
| **AD-G-15** (NEW) | — | Without-history recipient sees only their Transfer-to-First-Response interval | ARCH |
| **AD-G-16** (NEW) | — | Three linked machines: hold, booking, unit | ARCH |
| **AD-G-17** (NEW) | — | DB-enforced per-customer and per-booking hold uniqueness; atomic swap | ARCH |
| **AD-G-18** (NEW) | — | Admin audit edit/delete through a dedicated, privileged, audited path; ACG-6 records in a store the Builder-Side Admin cannot alter | ARCH (gated on AGX-10) |

Awaiting ratification: **8** (AD-G-8, -11 revised, -14, -15, -16, -17, -18, plus AD-G-1's verification findings as one item).

---

## 9. Contradictions and clarification requests

### 9.1 Contradiction register (open items only)

| ID | Conflicting texts | Source locations | Impact | Exact PO clarification required | Blocks |
|---|---|---|---|---|---|
| **X-42** (carried, narrowed) | `PO-AF1·B.8` (managers do not reassign follow-ups) vs `PO-AE1·K.2` and now AC-51-b (a with-history transfer moves every pending follow-up to the new owner) | 03af §6.1; 03ae line 280; `PO-AG1` §E | A manager's permitted transfer reassigns follow-ups, individually or in bulk | Does `·B.8`'s prohibition reach the automatic carry-over caused by a permitted transfer, or only direct acts on follow-ups? (AC-55(b)) | Security |
| **X-43** (carried, sharpened) | `PO-AE1·G.1` (*"only the Sales Head can manually revive / reassign"*) vs AC-55 (manager = hierarchy **and** project authorization) and F-RV-a (*"Revival occurs when a manager reassigns…"*) | 03ae line 255; 03af §6.2; `PO-AG1` §E, §F | A non-Sales-Head manager with transfer authority revives with no separate event (`·G.5`, F-RV-b) | Does the Sales Head's exclusive authority in `·G.1` still apply when a Dumped customer is reassigned, or does any manager satisfying AC-55's two conditions now revive? | Security |
| **AGX-7** (carried, partially resolved; governance) | The earlier bundle's labels `AC-58`…`AC-131` vs the repo's future AC numbering; repo `AC-59` still open | Baseline F-1, F-3; §3.4 | A future repo `AC-60`+ would silently collide | Record-keeping confirmation (not a business question): reserve `AC-60`…`AC-131` for the earlier bundle's labels (or re-label them), and start any new repo AC minting at `AC-132`. This is the architect's recommendation, not a decision | Safe recording |
| **AGX-8** (NEW) | **(i)** AG-Q-1-f / AG-Q-2-a/c: the Sales Rep (and reporting managers, Site Head, Project Head) may release a **non-expiring booking hold** and mark the unit Available. **(ii)** AG-Q-2-d: *"For Pre-Booked cancellation, the Site Head initiates cancellation"*, then CRM processes it. **(iii)** V-23-d: *"The Sales Rep must cancel the active booking before dumping the customer."* **(iv)** Earlier bundle §B.12 (abridged): pre-Booked cancellation by *"current owner + authorized management"* | `PO-AG1` §A, §D; baseline §4 §B.12 | If releasing a booking hold on a Pending or Returned booking is not a cancellation, the booking is left without a unit. If it is one, it bypasses AG-Q-2-d's Site-Head-initiates/CRM-processes path. V-23-d requires the rep to perform an act that AG-Q-2-d gives to the Site Head | **Before a booking reaches Booked, is releasing its booking hold the same act as a Pre-Booked cancellation, and who may bring a Pre-Booked booking to an end?** (§12.2) | **Data Model** (hold/booking/unit; lead status) |
| **AGX-9** (NEW) ↔ AG-Q-14 | AD-G-3 (*"Correction and resubmission use the latest approval workflow version"*) vs earlier bundle §C-10 (abridged: *"During correction, reassignment takes effect on resubmission"*) | `PO-AG1` §B; baseline §4 §C-10 | A reassignment recorded against the old version's level may have no counterpart in the latest version | When the latest version's level or assignee differs, does a reassignment made during correction survive into the resubmitted round, lapse, or require re-doing? | Data Model (approval) |
| **AGX-10** (NEW; governance/ledger) | **Limb 1:** ACG-3/ACG-4 (the Builder-Side Admin may edit or delete audit records) vs `R6` (*"never updated and never deleted"*; `UPDATE`/`DELETE` revoked; R1–R6 *"given by the project owner"*) and Spec §06 (*"Audit Event — Immutable"*). **Limb 2:** ACG-1 (comprehensive) vs R6 (*"incomplete coverage in exchange for a legible log"*) and Spec §54 (*"Do NOT blindly 'log everything.'"*) | `ENGINEERING_RULES.md` lines 17, 212–227; Spec lines 117, 339; `PO-AG2` | Built grants encode R6. An implementer following R6 cannot satisfy ACG-3 | **ACG-1…ACG-9 are NOT re-asked.** The clarification is only this: are R6's no-update/no-delete clause and Spec §06's "Immutable" superseded to the extent of ACG-3/ACG-4, and are R6's selectivity sentence and Spec §54's "do not blindly log everything" superseded by ACG-1? The architect expects yes, but may not mark it without the PO | Data Model (audit) |

**Resolved contradictions** (moved out of this register, see §4): X-44, X-45, X-46, AGX-1, AGX-2, AGX-3, AGX-4, AGX-5, AGX-6.

### 9.2 Clarification requests (non-contradictions)

These are the eight new clusters (§6.3) plus the preserved residual limbs of the partially resolved clusters (§5).

| Priority | Clarification | Cluster |
|---|---|---|
| 1 | Role vocabulary: Site Head / Project Head / Sales Head / CRM / Builder-Side Admin vs Builder Admin | AG-Q-11 |
| 2 | Finance vs Accounts, and the payment acknowledgement that establishes Booked | AG-Q-4 residual |
| 3 | Booking start events; fulfil-vs-cancel ordering | AG-Q-12 |
| 4 | Re-pricing basis and discount re-approval on a unit change | AG-Q-13 |
| 5 | Approval Exception: is Site/Project-Head assignment a manual reassignment, and does the Builder-Side Admin keep the power? | AG-Q-8 residual |
| 6 | Workflow-configuration authority; replacement eligibility | AG-Q-3 residual |
| 7 | AC-54: Unassigned state, departed-rep Dump, bulk history mode, "otherwise unavailable", scope of "Managers may transfer…" | AC-54 residual |
| 8 | "Only … their own work" vs `·L.3` | AG-Q-15 |
| 9 | External notification content | AG-Q-17 |
| 10 | Audit visibility of removed approvers | AG-Q-18 |
| 11 | Reassignment history inside "approval history" | AG-Q-10 residual |
| 12 | Undo residuals, incl. Undo Success | repo AC-58 residual |
| 13 | Post-Booked unit transfer; NOC; status after Booked / post-Booked cancellation | AG-Q-6, V-23 residuals |
| 14 | "Commission payment" for staged payouts | AC-48 residual |
| 15 | Per-project FR milestone; linked-source framing | W-1, W-4 residuals |
| 16 | Transfer-activity labels | AG-Q-16 |

### 9.3 Ledger confirmations: supersessions the architect would record but may NOT mark without the PO

**Default until confirmed:** the older text is marked **NARROWED — PENDING PO CONFIRMATION**, not `SUPERSEDED`. None of these is a new business question. Each asks the PO only to confirm that the answer already given has the obvious consequence for older text.

| ID | Older text | Newer PO text | Proposed ledger mark | Why not marked already |
|---|---|---|---|---|
| **LC-1** | `PO-AE1·K.1/·K.2` (transfer does not cancel follow-ups) | AC-51-c (without history: cancel the previous owner's pending follow-ups) | `·K.1/·K.2` narrowed to with-history transfers | AC-51 names only "the earlier read-only-access rule" as superseded. AC-51-c does answer 03ae's AC-51(c) collision directly |
| **LC-2** | `PO-AF1·O.1` (a relevant new activity fulfils the pending follow-up) | AC-57-b (a Dump cancels, not fulfils) | `·O.1` narrowed: a Dump is not a fulfilling activity | This answers X-46 directly, but does not name `·O.1` |
| **LC-3** | Earlier bundle §B.9 (submission locks unit and price; price retained through correction) | AG-Q-5-c/d | Unit lock lifted during correction; price retention holds for an unchanged unit | AG-Q-5 answered the baseline question that quoted §B.9, but does not say "supersedes" |
| **LC-4** | Earlier bundle §C-13 ("stays pending; Admin must reassign") | AG-Q-8 | Approval Exception replaces "stays pending"; the actor is the Site/Project Head (whether the Admin keeps a parallel power is AG-Q-8 residual) | Responsive answer; no supersession wording |
| **LC-5** | Consolidated §18 step 6 (Sales Support approval *is* the booking approval) | AG-Q-4-e (Sales Support optional) | Narrowed | The consolidated doc invites supersession "through explicit decision records"; `PO-AG1` is not explicit about §18 |
| **LC-6** | Earlier bundle §B.13 ("approved cancellation") | AG-Q-2-d, AG-Q-6-b ("No separate approval is required") | "Approved" read as "processed" | Word-level conflict only |
| **LC-7** | AD-01A §8.2 bullet 2 (*"The Lead Lifecycle must not absorb Booking states"*) | V-23 (Booking in Progress, Booking Cancelled) | Not superseded: V-23's statuses are operational work-queue statuses, on the same dimension as `PO-AE1·J.2`'s *New*, and not Lead Lifecycle states | The architect's reading must be confirmed, or it becomes a contradiction |
| **LC-8** | 03af §13.1 AC-57(c)'s warning: an unanswered outbound call (`PO-AF1·I.4`) would fulfil a follow-up | AC-57-d ("tied to the First Response (FR) condition") | The consequence stands: an unanswered outbound call fulfils a pending follow-up (Dump excepted) | It follows from locked text, but the PO did not state it |
| **LC-9** | `PO-AF1·B.1/·B.2/·B.5` (the reporting tree alone defines scope; "every … ancestor … is within scope") | AG-Q-3-d / AC-55-a (hierarchy **and** project authorization) | Narrowed: tree position is necessary, not sufficient | Refinement; no supersession wording |
| **LC-10** | Spec §16 (*"A Sales Rep may temporarily hold one unit"*) | AG-Q-1-h (no per-rep maximum) | Read as per-hold wording, not a per-rep limit, so there is no conflict | If the PO meant a per-rep limit in §16, this is a supersession |
| **LC-11** | Spec §16/§18/§82, Cons. §4.4/§21, `01` §D.5 (a 20-minute server-expiring hold) | AG-Q-1-a/c | Expiry retained for the payment-hold phase only | Responsive to AGX-1; not worded as a supersession |
| **LC-12** | Earlier bundle §B.21 ("Managers cannot bypass the lock") | AC-54-a/b/d | Narrowed for the unavailability trigger | Responsive to AGX-2. Scope of "Managers may transfer…" is AC-54 residual (e) |
| **LC-13** | Earlier bundle AC-128 wording ("no access through the approval workflow") | AG-Q-9-a ("loses all visibility") | Total loss is confirmed (AGX-5 resolved) | Responsive; recorded for completeness |

---

## 10. Updated decision register

### 10.1 Consolidated PO Decision Register (per decision ID)

| Decision | Bundle § | Status | Resolves / touches | Residual |
|---|---|---|---|---|
| AG-Q-1 | A | PO LOCKED | AG-Q-1 (full); AGX-1 | AG-Q-12; AGX-8 (limb f) |
| AG-Q-2 | A | PO LOCKED, **contested in part** | AG-Q-2 (partial); AGX-3 | AGX-8 |
| AD-G-5 | A, H | PO LOCKED (counted once) | AD-G-5 | AD-G-17 (ARCH) |
| AG-Q-3 | B | PO LOCKED | AG-Q-3 (partial); AGX-4 | Configurator; eligibility |
| AG-Q-4 | B | PO LOCKED **except the Finance/Accounts row (OPEN)** | AG-Q-4 (partial) | Finance vs Accounts |
| AG-Q-7 | B | PO LOCKED | AG-Q-7 (full); supersedes earlier AC-125 | — |
| AG-Q-8 | B | PO LOCKED | AG-Q-8 (partial) | LC-4; actor/reassignment status |
| AG-Q-9 | B | PO LOCKED | AG-Q-9 (full); AGX-5 | AG-Q-18 |
| AD-G-3 | B | PO LOCKED | Rejects the architect's AD-G-3; explicit over §B.18 pin | AGX-9 |
| AD-G-6 | B | PO LOCKED | AD-G-6 | AG-Q-17 |
| AG-Q-5 | C | PO LOCKED | AG-Q-5 (full); AGX-6 | AG-Q-13; LC-3 |
| AG-Q-6 | C | PO LOCKED | AG-Q-6 (partial) | §26; NOC; post-Booked states |
| AD-G-1 | C | PO LOCKED as proposed; verification §8.2 | AD-G-1 | AD-G-16 |
| AD-G-2 | C | PO LOCKED | AD-G-2 | — |
| V-23 | D | PO LOCKED, **contested in part** | V-23 (partial) | AGX-8; post-Booked; follow-up creation |
| AC-57 | D | PO LOCKED | repo AC-57 (full); X-46 | LC-2; LC-8 |
| V-4 | D | PO LOCKED (partial by the PO's own words) | V-4 (partial) | FUT limb |
| W-1 | D | PO LOCKED (narrow) | W-1 (partial) | Other consumers; per-project FR |
| W-4 | D | PO LOCKED | W-4 (partial) | Linked-source framing |
| AC-51 | E | PO LOCKED; A-92 and retention **OPEN** by PO text | AC-51 (partial); supersedes `·N.2` | A-92; retention; LC-1 |
| AC-54 / AGX-2 | E | PO LOCKED | AC-54 (partial); AGX-2 | Limbs a, b, c, d, e |
| AC-55 | E | PO LOCKED (reaffirmed); limbs b/c/d **OPEN** by PO text | AC-55 residual (partial) | X-42; X-43 |
| AC-56 | E | PO LOCKED | repo AC-56 (full); X-44 | V-10 residual; AG-Q-15; AD-G-15 |
| AG-Q-10 | E | PO LOCKED | AG-Q-10 (partial) | Reassignment-history limb |
| AC-58 / X-45 | F | PO LOCKED; supersedes the 10-second window | repo AC-58 (partial); X-45 | Undo residuals |
| `PO-AG1·F-RV` (Revival workflow) | F | PO LOCKED | repo AC-58(b); `PO-AE1·G.4/·G.5` restated | X-43 sharpened; AG-Q-16 |
| AD-G-4 | F | PO LOCKED | AD-G-4 | — |
| AC-48 | G | PO LOCKED | AC-48 (partial) | "Payment" boundary |
| `PO-AG1·G-X1` | G | PO LOCKED (reaffirms `PO-X1`) | — | — |
| `PO-AG1·G-FL` | G | PO LOCKED | AG-Q-6 | — |
| AD-G-7 | H | PO LOCKED | AD-G-7 | AG-Q-17 |
| `PO-AG1·H-GATE` | H | PO LOCKED | Gate active | — |
| ACG-1 … ACG-9 | `PO-AG2` | **PO LOCKED — all nine** | The Gate | AGX-10; ACG-INV-1…14; AG-Q-18 |

### 10.2 Earlier-bundle rules

Appendix A carries every earlier-bundle rule (§B.1–§B.21, §C-1–§C-15, AC-124–AC-131) with its status after this update.

### 10.3 Resolved / partially resolved / open issue matrix

| ID | Baseline status (baseline §6) | Current status | Detail |
|---|---|---|---|
| AG-Q-1 | Open — blocker | **Fully resolved** | §4 |
| AG-Q-2 | Open — blocker | **Partially resolved** (AGX-8) | §5 #1 |
| AG-Q-3 | Open — blocker | **Partially resolved** | §5 #2 |
| AG-Q-4 | Open — blocker | **Partially resolved** (Finance vs Accounts) | §5 #3 |
| AG-Q-5 | Open — medium | **Fully resolved** | §4 |
| AG-Q-6 | Open — blocker | **Partially resolved** | §5 #4 |
| AG-Q-7 | Open — medium | **Fully resolved** | §4 |
| AG-Q-8 | Open — medium | **Partially resolved** (now a blocker) | §5 #5 |
| AG-Q-9 | Open — medium | **Fully resolved** | §4 |
| AG-Q-10 | Open — blocker | **Partially resolved** (downgraded to medium) | §5 #6 |
| AC-48 | Open — blocker | **Partially resolved** (downgraded) | §5 #7 |
| AC-50 | Open — blocker | **Still open — touched** | §6.2 |
| AC-51 | Open — blocker | **Partially resolved** | §5 #8 |
| AC-53 | Open — blocker | **Still open** | §6.2 |
| AC-54 | Open — blocker | **Partially resolved** | §5 #9 |
| AC-55 residual | Open — blocker | **Partially resolved** (advanced; b/c/d open) | §5 #10 |
| repo AC-56 | Open — blocker | **Fully resolved** | §4 |
| repo AC-57 | Contradicted (X-46) | **Fully resolved** | §4 |
| repo AC-58 residual | Open — low/medium | **Partially resolved** | §5 #13 |
| repo AC-59 | Open | **Still open** | §6.2 |
| V-4 | Open — blocker | **Partially resolved** | §5 #11 |
| V-23 | Open — blocker | **Partially resolved** (AGX-8) | §5 #12 |
| V-10 residual | Open (partial) | **Partially resolved** (further narrowed) | §5 #16 |
| W-1 | Open | **Partially resolved** | §5 #14 |
| W-4 | Open | **Partially resolved** | §5 #15 |
| T-4/T-5 | Open — blocker | **Still open** | §6.2 |
| N-2 | Open | **Still open — touched** | §6.2 |
| AC-52, AC-6, AC-7·re-basing, AC-12, AC-13, AC-26, AC-42, AC-47 (8) | Open | **Still open** | §6.2 |
| N-4, V-19, V-24, W-5, Y-5 (5) | Open | **Still open** | §6.2 |
| Q2, Q3, Q5, Q8–Q16 (12) | Open | **Still open** | §6.2 |
| V-3·2, V-6, V-8·2, V-11, V-14, V-18, V-21, V-26 (8) | Open | **Still open** | §6.2 |
| W-2, Y-1, Y-2, Y-4, Z-1…Z-6 (10) | Open | **Still open** | §6.2 |
| Notification cadence; 03af §13.3a #1, #3, #4, #7 (5) | Open | **Still open** | §6.2 |
| V-20·tz / M-6 | Open | **Still open** | §6.2 |
| AG-Q-11…AG-Q-18 (8) | — | **NEW — open** | §6.3 |
| X-42 | Contradicted | **Contradicted** (narrowed) | §9.1 |
| X-43 | Contradicted | **Contradicted** (sharpened) | §9.1 |
| X-44 | Contradicted | **Resolved** | §4 |
| X-45 | Resolved in substance | **Resolved** (5 s) | §4 |
| X-46 | Contradicted | **Resolved** | §4 |
| AGX-1 … AGX-6 | Contradicted | **Resolved** | §4 |
| AGX-7 | Contradicted (governance) | **Partially resolved** | §9.1 |
| AGX-8, AGX-9, AGX-10 | — | **NEW — contradicted** | §9.1 |
| F-1 | Finding | Largely defused (§3.4) | — |
| F-2 | Finding | **Partially discharged** (this document) | §2.1 |
| F-3 | Finding | Unchanged | §6A.1 |
| F-4, F-5, F-6 | Findings | Unchanged; F-5 amendments are expanded at §8.3 | — |
| Audit Completeness Gate | Deferred | **ACTIVE** (ACG-1…9 locked; ACG-INV-1…14 open) | §7.4 |
| Spec §87(5) CP clawback | Deferred | **Deferred — narrowed** (paid commission offline) | — |
| Spec §87(6) TDS | Deferred | **Deferred** | — |

### 10.4 Counting methodology and uncertainty

**Method.**

- **Unit of count.** The unit is the **unique baseline cluster** (baseline §6), never a decision ID. `PO-AG1` has 33 decision headings (32 unique items, because `AD-G-5` appears twice), `PO-AG2` has 9, and §3A has 111 rows. None of those numbers is used as a cluster count. This is the lesson of baseline F-4, where 03af counted decision items rather than clusters.
- **Classification.** Each of the 76 clusters was taken limb by limb, as stated in its owning source (03ae §12, 03af §13.1–§13.2, baseline §6), and checked against §3A's rows:
  - *Fully resolved:* every limb answered.
  - *Partially resolved:* at least one limb answered and at least one open, or contested by a new contradiction.
  - *Still open:* no limb answered.
- **Mapping contradictions.** Contradictions are **not** counted as clusters. Each maps onto the cluster(s) that own its question, as the baseline did. The one exception is `AGX-9`, which has no parent cluster, so its question is counted once as new cluster `AG-Q-14`. Governance items (`AGX-7`, `AGX-10`) are counted separately.
- **New clusters.** New clusters are counted only where the ambiguity has no home in an existing cluster. Residual limbs of partially resolved clusters are **not** re-counted as new.

**Uncertainty.**

| Source | Detail |
|---|---|
| (i) Unbanded families | They remain un-de-duplicated. The 78 is a **minimum**, as the 76 was. |
| (ii) AG-Q-11 | May merge into `M-3` when those families are counted. It is not double-counted now because `M-3` is outside the 76. |
| (iii) Judgement calls | Four classifications turn on judgement and are stated so that they can be challenged. If any is judged the other way, the "fully resolved" count moves by that amount and the total open count does not change. |
| (iv) The earlier bundle | Its rules are known only in abridged form, so any conflict between them and `PO-AG1` that the abridgement hides cannot be detected. |

The four judgement calls in (iii):

| Cluster | Classified as | Reason |
|---|---|---|
| AG-Q-5 | Fully resolved | The question it posed was answered. The re-pricing basis is a *new* ambiguity (AG-Q-13), not an unanswered limb. |
| AG-Q-1 | Fully resolved | The trigger event is a new ambiguity (AG-Q-12). |
| repo AC-57 | Fully resolved | LC-8 is a ledger confirmation, not an open limb. |
| AG-Q-2 and AG-Q-8 | Partially resolved (not fully resolved) | Their answers are contested (AGX-8) or unconnected to earlier text (LC-4 plus the AG-Q-8 residual). |

---

## 11. Revised risk and dependency register

| ID | Risk | Likelihood / impact | Driver | Dependency | Mitigation (stated; not designed here) |
|---|---|---|---|---|---|
| R-AG-1 | Booking/hold/unit model built on the wrong termination semantics | High / **High** (rework of the core transactional model) | AGX-8 | Blocks AD-G-1/AD-G-16, V-23 statuses | Ask AGX-8 next (§12.2) |
| R-AG-2 | Authorization built on role names, or on the wrong principal set | High / High | AG-Q-11, AD-G-8, R2 | Blocks every new grant | AG-Q-11 early in the queue |
| R-AG-3 | Payment acknowledgement modelled as the wrong act | Medium / High (financial rule, §88) | AG-Q-4 Finance vs Accounts | Blocks Booked derivation (V-22/T-6, `Q4`) | AG-Q-4 residual |
| R-AG-4 | Audit editability implemented against R6's grants, or R6 silently ignored | Medium / **High** (audit integrity; insider risk) | AGX-10, ACG-3/4 | Blocks the audit data model | Ledger confirmation; AD-G-18; ACG-INV-6/-12 |
| R-AG-5 | Indefinite retention defeated by `ON DELETE CASCADE`, or colliding with erasure/legal duties | Medium / High | ACG-8; Spec §56 | Tenant-closure design | ACG-INV-4/-8; Legal/Compliance validation |
| R-AG-6 | Scoped audit visibility leaks or is unenforceable | Medium / High | ACG-5; AC-55 residual; SEC-8 | Scope definition | ACG-INV-5 |
| R-AG-7 | Without-history leakage through jobs, caches, milestones, or the receiving rep's own FR | Medium / High (security) | V-10 residual; AD-G-15; AG-Q-15 | Projection design | Security stage |
| R-AG-8 | PII in external notifications | Medium / Medium | AD-G-6/7; AG-Q-17 | Notification design | AG-Q-17 |
| R-AG-9 | Inventory blocked indefinitely by non-expiring booking holds with no per-rep maximum | Medium / Medium (commercial) | AG-Q-1-h, -c, -e | Action Feed "Active inventory holds" (Spec §14) | Visibility and reporting only; **no limit is invented** |
| R-AG-10 | Payment-hold expiry implemented with a `now()` predicate | Medium / High (double booking) | Cons. §21; `01` §D.5 | Hold design | AD-G-17 |
| R-AG-11 | AC-number collision re-emerges | Low / High (false closures) | AGX-7 | Any new AC minting | Reserve the range |
| R-AG-12 | Earlier-bundle rules exist only in abridged form | Medium / Medium (traceability, R12) | F-2/F-3 | Appendix A | Ask for the per-ID list as a record-keeping step (not a business question) |
| R-AG-13 | Ratification debt: 03af and this document are both `PROPOSED — NOT APPROVED` | High / Medium | F-6 | Every architect-derived item | PO approval of 03af and 03ag |
| R-AG-14 | Commission revoked or changed after a partial payout | Low / Medium | AC-48 residual | CP payable model | AC-48 residual |
| R-AG-15 | Undo window measured on the client, or applied to offline Dumps | Medium / Low | repo AC-58 residual | Activity capture | AC-58 residual |
| R-AG-16 | "Resolved" read as "built" | Medium / High | Rule 6 | All | The warning in "How to read"; §2.3 |

**Dependency spine.** Each arrow points from what must be answered first to what it unblocks.

- `AGX-8` → `AD-G-1`/`AD-G-16` → Data Model (hold/booking/unit).
- `AG-Q-12` → `AD-G-16`, follow-up engine.
- `AG-Q-13` → snapshot model.
- `AG-Q-11` → `AD-G-8` → Security.
- `AG-Q-4` + `AG-Q-3` + `AG-Q-8` + `AG-Q-14` → approval model.
- `AGX-10` → audit data model → ACG-INV-2/-4/-5/-6/-12.
- `AC-55` residual (`X-42`, `X-43`) → Security.
- `AC-54` residual → assignment model.
- `AC-50`, `AC-53`, `T-4`/`T-5` → CP and commercial model.

---

## 12. Recommended next steps in the existing architecture sequence

### 12.1 Sequence (the `PO-AF1·A.1` order is preserved; each stage is gated on PO approval)

1. **PO review of this document.** Its architect analysis is `PROPOSED — NOT APPROVED`. The `PO-AG1`/`PO-AG2` text inside it is already PO LOCKED.
2. **Ask the single next PO question (§12.2).** Nothing else is asked in the same turn.
3. **Queue, not asked now.** One question at a time, in this order:
   1. `AG-Q-11` together with the AC-55 residual (authority vocabulary; `X-42`/`X-43`).
   2. `AG-Q-4` residual (Finance vs Accounts).
   3. `AG-Q-12`.
   4. `AG-Q-13`.
   5. `AGX-9`/`AG-Q-14`.
   6. `AG-Q-8` and `AG-Q-3` residuals.
   7. `AC-54` residual.
   8. `AC-51`(d) A-92.
   9. `V-23` residual.
   10. Disclosure family: `AG-Q-15`, `AG-Q-17`, `AG-Q-18`, `AG-Q-10` residual.
   11. repo `AC-58` residual.
   12. `AG-Q-6` residual with `AC-48` residual (CFO/legal input per Spec §87(5)).
   13. `AC-50`, `AC-53`, `T-4`/`T-5`.
   14. Carried families.
4. **Record-keeping confirmations, separate from the business queue:** `AGX-10` ledger, `AGX-7` range reservation, `LC-1`…`LC-13`, and the per-ID list for the earlier bundle's AC-58…AC-123. They may be presented as record-keeping items when the PO chooses. They are not business decisions and are not asked alongside §12.2.
5. **Architecture work that needs no PO answer and can proceed now:**
   - ACG-INV-1 (event inventory), ACG-INV-2 (schema gap analysis against `audit_events`), ACG-INV-7, -11 and -13.
   - The de-duplication of the unbanded families (baseline §10 step 5), so that the count can become a total rather than a minimum.
   - Naming (not making) the amendments at §8.3.
6. **Then the gated downstream stages:** Data Model → Security/Tenant Isolation → Failure/Concurrency/Offline → API/Contracts → Tests → Implementation. Per domain, they start only when the §6.1 blockers for that domain are answered.

### 12.2 THE NEXT SINGLE PO QUESTION

> **Before a booking reaches Booked, three of your rules meet at the same act.**
>
> 1. **AG-Q-1 and AG-Q-2** allow the Sales Rep, their reporting managers, the Site Head or the Project Head to release a **non-expiring booking hold** and mark the unit Available.
> 2. **AG-Q-2** says that for a **Pre-Booked cancellation** the **Site Head initiates** it and CRM processes it.
> 3. **V-23** says the **Sales Rep must cancel** the active booking before dumping the customer.
>
> **When a booking is Pending Approval or Returned for Correction, is releasing its booking hold the same act as a Pre-Booked cancellation, and who may bring a Pre-Booked booking to an end?**

**Readings the texts allow.** These are presented neutrally, and none is preferred:

| Reading | Effect |
|---|---|
| (i) | Releasing a booking hold **is** a Pre-Booked cancellation, and only the Site Head initiates it. The release power in AG-Q-1/AG-Q-2 then applies in practice to the 20-minute payment hold, and V-23's "must cancel" means the rep asks the Site Head. |
| (ii) | Releasing a booking hold is a **separate** act that withdraws the booking without the CRM cancellation process. The PO would then name the booking's resulting state. |
| (iii) | The Sales Rep **may** initiate a Pre-Booked cancellation, as the earlier bundle's §B.12 said, and AG-Q-2's "Site Head initiates" is an additional authority, not an exclusive one. |

**Why this question and not another.**

- It is a **contradiction between PO texts** (`AGX-8`), not a gap, so no architect may choose.
- It is **upstream** of the booking/hold/unit state machine (AD-G-1, AD-G-16), of V-23's lead statuses, and of the §8.2 question whether a Pre-Booked-cancelled unit passes through Cancelled Inventory.
- It is the **most expensive** remaining booking-domain error, because it defines the core transactional model's transitions.
- It describes the builder's own practice and needs no architecture reading.

`AG-Q-11` (role vocabulary) is equally blocking, but it affects *who* holds each authority. AGX-8 affects *what the acts are*, which has to be settled first.

**What is expressly NOT asked now.** Everything in §12.1 step 3 and step 4, every `ACG-n` (locked), and every carried family.

### 12.3 Readiness statement

**The architecture is NOT complete.**

- Business rules are now largely decided for holds, bookings, approvals, transfers, undo and revival.
- Data-model, authorization, audit and implementation work for those rules **has not started**. Seventeen business blockers and two governance blockers remain (§6.1).
- The Audit Completeness Gate is **active and incomplete**.

### 12.4 Suggested Beads follow-ups (for the orchestrator to create; not created here)

| Suggested issue | Kind |
|---|---|
| Ask PO: AGX-8 (§12.2) | Question |
| ACG-INV-1: audit event inventory | Architecture |
| ACG-INV-2: `audit_events` gap analysis against ACG-1…9 | Architecture |
| Record-keeping confirmations: AGX-10, AGX-7, LC-1…13 | Governance |
| De-duplicate the unbanded register families | Architecture |
| Amendments named at §8.3, to be made after PO approval | Documentation |

---

## 13. Final validation

### 13.1 Quality checks (the commissioning brief's list, each verified)

| Check | Result | Where |
|---|---|---|
| Every locked decision is represented accurately | **Yes.** `PO-AG1` and `PO-AG2` are recorded verbatim (§3.1, §3.2). Every rule is a verbatim row at §3A. | §3, §3A |
| Later decisions supersede earlier ones only where explicitly stated | **Yes.** Five explicit supersessions (S-1…S-5), each with old vs new stated: AC-51 over `PO-AE1·N.2` (read-only → all access lost); 5 s over the earlier bundle's 10 s. Every other overlap is held at *narrowed — pending confirmation* (LC-1…LC-13) or recorded as a contradiction (AGX-8…AGX-10). | §7.1, §9.3 |
| No decision silently broadened | **Yes.** AG-Q-10, W-1, AG-Q-7, AC-51, AC-54, AC-56, AD-G-7, AG-Q-9 and AD-G-5 are held to their stated scope. | §7.2 |
| Existing IDs and traceability preserved | **Yes.** No existing ID is renumbered. New labels are marked NEW (03ag) with distinct series (`PO-AG1/2`, `AG-Q-11…18`, `AGX-8…10`, `AD-G-15…18`, `ACG-INV-1…14`, `LC-1…13`). | "How to read" |
| Partially resolved clusters not marked closed | **Yes.** V-4, V-10, AC-55 (b/c/d), X-43, AC-51 (d), AC-54, AG-Q-4 and eleven others are listed with preserved residuals. | §5 |
| Baseline count and current count distinguished | **Yes.** Baseline 76 (re-verified). Current 78 minimum. The arithmetic and method are shown. | §1, §10.4 |
| ACG-1…ACG-9 recorded as locked | **Yes.** None is re-opened. AGX-10 asks only about the ledger status of older text. | §3.2, §7.7, §9.1 |
| No unsupported assumption presented as a PO decision | **Yes.** Finance vs Accounts is flagged and not resolved. Every architect reading is labelled ARCH or LC-n. | §5 #3, §8, §9.3 |
| Business-rule closure separated from implementation completeness | **Yes.** The warning in "How to read", §2.3, the "Architecture still owed" column in §4, and §12.3. | — |

### 13.2 Certification statement

**Can it be certified that every distinct question the PO answered has an entry in the register?**

- **YES, bounded to this session's verified transcript.** Every item, rule and scope sentence of the single PO decision message identified by the orchestrating session (§0), including all nine ACG decisions, has an entry at §3A. The four un-numbered items carry recording labels.
- **NOT verifiable beyond that boundary.** If the PO answered further questions in another chat, a meeting or a document not shared with this session, those answers are **not** in this register, and this document cannot know of them.
- The earlier bundle is represented only through the baseline's abridged rendering (Appendix A). Its verbatim completeness **cannot be certified** here.

---

## Appendix A — The earlier bundle's rules (as abridged in the baseline) and their status after this update

**Source:** baseline §4 ("Content (abridged)"). **The verbatim earlier-bundle text is not available to this task (§0).** Earlier-bundle AC labels are the earlier bundle's own and are **not** repo IDs (§3.4).

| Rule | Abridged content (from the baseline) | Status after `PO-AG1` |
|---|---|---|
| §A-1…§A-8 | Restatements of `PO-AF1`/`PO-AE1` | Unchanged (already recorded in 03ae/03af) |
| "AC-55" | Manager = has direct reports; the tree, not project membership | **Refined** by AG-Q-3-d/AC-55-a (LC-9) |
| "AC-56" / "AC-57" | 10-second Undo Dump; the "Dump Undone" event | **Window superseded** (S-2); the event is restated (AC-58-d) |
| §B.1 | The rep records Success, selects project and unit, proceeds | Unchanged; AG-Q-12 concerns its timing |
| §B.2 | Proceed = atomic hold; first wins | Unchanged; AD-G-5 |
| §B.3 | Submission → Pending Approval | Unchanged; AD-G-1 |
| §B.4 | Project-specific configurable levels | **Specified** by AG-Q-3/AG-Q-4 |
| §B.5 | Finance/Accounts payment acknowledgement plus all approvals → Booked and Success | Unchanged; **Finance vs Accounts open** (AG-Q-4) |
| §B.6 | Initiation ≠ Success | Reaffirmed (AC-57-e) |
| §B.7 | Booking holds do not time out | **Reconciled** (AG-Q-1; LC-11) |
| §B.8 | Rejection → rep correction; hold retained | Reaffirmed (AG-Q-1-e); AC-54 exception |
| §B.9 | Submission locks unit and price through correction | **Narrowed pending confirmation** (LC-3) |
| §B.10 | Pre-submission unit change by atomic release-and-hold | Unchanged; extended to correction by AG-Q-5-c (AD-G-17) |
| §B.11 | Holder or authorized Manager/Site Head may release | **Specified** (AG-Q-2-a/b) |
| §B.12 | Pre-Booked cancellation: current owner + authorized management; post-Booked separate | **Contested** (AGX-8); post-Booked **defined** (AG-Q-6) |
| §B.13 | Approved cancellation → Cancelled inventory; authorized release | **"Approved" narrowed pending confirmation** (LC-6); release authority specified |
| §B.14 | After release, the old booking is hidden from normal views and historically available | Unchanged; AG-Q-10 for the receiving rep |
| §B.15 | New booking after release uses the current price list | Unchanged; AG-Q-13 asks whether it applies to a unit swap |
| §B.16 | Rejected bookings may block indefinitely | Consistent (AG-Q-1-c/e) |
| §B.17 | Resubmission restarts at Level 1 | Unchanged |
| §B.18 | Open bookings keep their version | **Explicitly overridden for correction/resubmission** (S-4) |
| §B.19 | Initiator may approve if active and eligible | Unchanged; eligibility → AG-Q-3 residual |
| §B.20 | No employee on multiple levels, incl. prior participation | Unchanged; AD-G-14 |
| §B.21 | Active booking locks transfer; managers cannot bypass | **Narrowed pending confirmation** (LC-12) |
| §C-1 | Inactive approver → automatic fallback up the hierarchy | Unchanged; eligibility → AG-Q-3 residual |
| §C-2 | Leave, slow response or SLA breach do not trigger fallback | SLA-breach limb **superseded** (S-3); the rest unchanged |
| §C-3 | No eligible manager → highest project authority, else Approval Exception; never auto-approve | Unchanged; AD-G-13 |
| §C-4 | The Builder-Side Admin may manually reassign pending approvals | Unchanged; AG-Q-8 residual |
| §C-5, §C-6, §C-8, §C-9, §C-11, §C-12, §C-14, §C-15 | Reassignment mechanics | Unchanged |
| §C-7 | Mandatory free-text reason | Unchanged; sensitive (AD-G-7) |
| §C-10 | Reassignment during correction takes effect on resubmission | **Contradicted** (AGX-9) |
| §C-13 | Manually reassigned approver inactive → stays pending; Admin reassigns | **Narrowed pending confirmation** (LC-4) |
| AC-124 | Pending level reassignable after an earlier approval | Unchanged |
| AC-125 | Reassignment resets the SLA clock | **SUPERSEDED** (S-3) |
| AC-126 | Only the new approver is notified | Unchanged |
| AC-127 | Notification content | **Constrained** for external channels (AD-G-6); AG-Q-17 |
| AC-128 | Previous approver loses authorization and visibility | **Confirmed as total** (AG-Q-9; LC-13) |
| AC-129 | All Builder-Side Admins view reassignment history | Unchanged; the Builder-Side Admin is now defined (AG-Q-3-a) |
| AC-130 | History fields | Unchanged; the reason is sensitive (AD-G-7); ACG-1 event |
| AC-131 | Replacement recorded as approver | Unchanged |

---

## Closing note

This document records one PO decision set and nine Audit Completeness Gate locks. It closes six audit clusters, narrows sixteen, resolves nine contradictions, and opens eight narrower questions and three new contradictions. **It declares nothing complete.** The one question it asks is at §12.2.
