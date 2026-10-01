STATUS: PROPOSED — NOT APPROVED

# AD-01AI — Site Head and Project Head as Per-Project Role Assignments: Reconciling the AG-Q-11(a) Answer

| | |
|---|---|
| Document type | Architecture governance record. It is a contained decision reconciliation: one PO-locked answer (to 03ah §8.1, "AG-Q-11(a)") is recorded verbatim. It is then reconciled against every prior item that named the Site Head or the Project Head. The cluster count and Architecture Readiness are updated, and one next PO question is selected. |
| Relationship to 03ah | This document **extends** `03ah-fresh-consolidated-audit-reconciliation-gemini-corpus-and-role-vocabulary.md` (the baseline, 1,083 lines). It does not replace it. Every 03ah identifier is preserved. Where this document changes a 03ah status, the change is stated with its source. |
| Repository state at start | Branch `claude/code-cli-project-init-mgjndj`. HEAD `2fd0863` (auto-commit 2026-09-28 10:24:53 +0000). Working tree clean. |
| Tracking | Beads `Final-Verison-m1r` (P1, in progress). This document creates no Beads issues. |
| Date | 2026-09-28 |
| Status line meaning | `PROPOSED — NOT APPROVED` applies to the **architect analysis** here. The PO answer in §2 is `PO LOCKED` exactly as the PO stated it. No reading by the architect becomes a PO rule until the PO approves it. |
| Files changed | This file only. No schema, migration, code, test, Beads, Spec, requirements or earlier architecture file was edited. |

---

## How to read this document

**Vocabulary.**
- The decision-status vocabulary (`PO LOCKED`, `PARTIAL`, `ARCHITECT-DERIVED`, `OPEN`, `UNTOUCHED`, `SOURCE VERIFICATION REQUIRED`) is carried unchanged from 03ah "How to read".
- So are the reconciliation classes (`SUPERSEDED`, `NARROWED`, `CLARIFIED`, `UNRESOLVED CONTRADICTION`, `APPARENT CONFLICT (SCOPE)`).
- One status is added:

| Status | Meaning |
|---|---|
| `VALIDATE-OPEN` | A PO-locked rule whose **wording survives unchanged**, but whose **anchor** a newer PO answer has removed. The rule still binds. What it binds *to* is no longer determinable from locked text, and the architect may not choose. |

**Terminology.** 03ah's rename rules continue:
- Site Head replaces Sales Head.
- Accounts replaces Finance.
- Builder-Side Admin replaces Builder Admin.
- CRM is a department.

Quotations keep their original words, with ⟨rename: …⟩ given separately.

This document adds one distinction of its own and uses it throughout:

- **Project role** (or *role grant*) is what the PO's answer describes: *Site Head* or *Project Head*, held by an employee **for a specific project**.
- **Designation** is an employee's HR title (GM, AGM, Senior Sales Manager …).
- **Reporting tree** is the direct-and-indirect line-management structure that `PO-AF1·B.1`–`·B.5` (03af) makes the basis of management scope.

These are three different things, and none is derived from another.

**Identifier discipline.** Every 03ah ID is preserved. New in 03ai:
- `PO-AI1·1`…`·8`: the limbs of the PO answer (§2.2).
- `AI-Q-1`, `AI-Q-2`: open residuals exposed by the answer (§3.3, §3.4).
- `LC-22`, `LC-23`: new ledger confirmations.
- `NI-17`…`NI-21`: new issues.
- `R-AI-1`…`R-AI-6`: new risks.
- `G-13`…`G-17`: new change-register entries.

**Implementation warning (it applies everywhere).**
- "Unblocked" means the **authority holder can now be expressed** as a business rule. Nothing is built.
- The built `user_roles` table cannot yet represent a project-scoped role at all (NI-17).
- Under CLAUDE.md Layer 2 (Master Spec §88), authorization and tenant architecture still need the project owner's explicit sign-off before implementation. **Delegation to an architect is not authorization.** §8 is therefore labelled `ARCHITECT RECOMMENDATION — NOT APPROVED`.

**Where each required element is.**

| Requirement | Location |
|---|---|
| PO LOCKED decision, verbatim | §2 |
| NI-1 disposition, with the exact Spec §03 text | §3.1 |
| The reporting-hierarchy axis against the project-role axis (AC-55 "BOTH") | §3.2 |
| AC-55's PH → PH exception, re-read | §3.3 |
| Cardinality per project | §3.4 |
| Every locked authority naming SH/PH, and whether it is now expressible | §3.5 |
| Every 03ah item blocked on AG-Q-11(a) | §3.6 |
| Updated issue and contradiction register | §4 |
| Cluster-count arithmetic against 03ah's 65 | §5 |
| Per-domain Architecture Readiness | §6 |
| The one next PO question | §7 |
| Design direction for downstream implementers (not approved) | §8 |
| Risks, change register, final validation | Annexes A–C |

---

## 0. Summary

1. **AG-Q-11(a) is answered** (`PO-AI1`, PO LOCKED):
   - Site Head and Project Head are **two distinct project-level roles**.
   - They are assigned per project, independently of HR designation.
   - An employee may hold either, both, or neither on each project.
   - A Project Head does not inherently report to a Site Head.
2. **NI-1 is discharged** as a business-rule collision (§3.1). Spec §03 lists *"Sales Head, Project Head / Site Head"* as a flat user list and asserts no reporting relation. After the rename, what is left is **editorial**: "Site Head" appears twice in that list (LC-20, G-1). Nothing remains to decide.
3. **AC-55's two axes are now distinguishable** (§3.2):
   - The role grant supplies **project-level authorization**.
   - The **reporting tree** (`PO-AF1·B.1`–`·B.5`) supplies management scope.
   - Locked text already says management acts need **both** (AG-Q-3; AC-54-i′ *"Scope still follows AC-55 hierarchy/project authorization rules"*).
   - The architect's reading of how the older "team under the Site Head" texts fit is held as **LC-22** (ledger). It is not a new question.
4. **AC-55's PH → PH exception is `VALIDATE-OPEN` → AI-Q-1** (§3.3). Its anchor, *"under the SAME Site Head"*, presupposed a reporting relation the PO has now said is not inherent. Four readings survive and none is supported over the others.
   - The orchestrator's candidate reading (a cross-project transfer between two projects sharing one Site Head) is **not** supportable on locked text alone. The recipient Project Head would lack project-level authorization on the customer's project.
5. **Cardinality is not locked → AI-Q-2** (§3.4).
   - "At least one Site Head per project" has older PO support (GC-24) and is held as **LC-23**.
   - The maximum number of Site Heads, and zero-or-many Project Heads, are open.
   - AC-51-e′ (*"Previous Site Head after transfer"*) and GC-31 (*"transfer lead from sales head one to sales head two"*) show that assuming one Site Head per project is **not safe**.
6. **Every 03ah item blocked on AG-Q-11(a) is now expressible** as a project-scoped grant (§3.5, §3.6). Security readiness changes from **No** to **Conditionally yes** in Hold/Booking/Unit and Lead/Follow-up/FR. In the other four domains it stays **No**, for reasons that are unrelated to AG-Q-11(a).
7. **The count is unchanged: 65 (verified minimum)** (§5).
   - AG-Q-11 stays PARTIAL: limb (f) is untouched, and AI-Q-1 and AI-Q-2 are homed inside it.
   - Under a stricter method the figure would be 67.
8. **The next question is still AG-Q-6(ii)** (§7). It has no safe interim default, it blocks the Data Model in two domains, and it is upstream of the NOC.
   - AI-Q-1 and AI-Q-2 both have safe interim defaults.
   - AG-Q-11(f) is not touched by this answer.
9. **A built artefact collides with the answer** (NI-17). `user_roles` has `PRIMARY KEY (user_id, role_id)` and no project scope. It cannot record Employee D as Site Head of Project B **and** of Project D. AD-01 §E.3/§L.3 predicted exactly this. The collision is named, not fixed.

---

## 1. Sources and verification

### 1.1 Sources used

| # | Source | Role here | How it was read |
|---|---|---|---|
| S1 | **PO answer to 03ah §8.1** (relayed verbatim by the orchestrating session; Beads `Final-Verison-m1r`) | **Authoritative new decision** | In full (§2.1) |
| S2 | `03ah-…` (baseline) | NI-1, AG-Q-11, §4.9, §4.11 queue, §6 count, §7 readiness, GC register, Annexes | **In full**, all 1,083 lines |
| S3 | PO handoff `…/scratchpad/po-handoff-ad01ag-fresh-reconciliation.md` (03ah's S1) | Exact locked wording of AG-Q-1/2/3/4/6/8, AC-48/51/54/55 | Targeted re-read: lines 430–460, 476–500, 510–530, 570–625, 715–752, 825–850 |
| S4 | `docs/BMEXA_MASTER_SPEC.md` | §03 (exact text), §08, §26, §57 | Direct read. §03 line 70 and line 74 are quoted at §3.1 |
| S5 | `docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` | §3 role table, §6 assignment table | Direct read, lines 39–54 and 88–99 |
| S6 | `03af-…` | `PO-AF1·B.1`–`·B.5`, `·P.17`, §9.2 (U-10) | Targeted: lines 250–254, 375, 1285–1300 |
| S7 | `03ae-…` | `PO-AE1·O.1` | Targeted: line 303 |
| S8 | `01-bmexa-architecture-reconciliation.md` (AD-01) | §C.3, §E.3, §L.3, M-3 | Targeted: lines 255–270, 448–466, 820–838, 1590–1600, 1725–1734 |
| S9 | `03t-…`, `03n-…`, `03u-…`, `03v-…`, `03x-…` | `PO-T2`, `PO-U1·4`, `PO-X1`; AC-33; the "default role label, not a permission" reading of §03 | Targeted greps of every "Project Head" occurrence |
| S10 | Built schema: `packages/db/drizzle/0000_phase0_foundation.sql` (and its mirror `docs/architecture/schema-phase-0.sql`), lines 900–912 | The `user_roles` shape | Direct read. **Not edited** |
| S11 | Gemini corpus, S6 lineage (`…/scratchpad/gemini_export/branch-of-cpo-final-assessment.md`) | Exact PO wording near Site/Sales/Project Head; chunk attribution | **Targeted re-grep only** (§1.3), using the orchestrator's `chunkmap.json` for chunk numbers |

**Not re-read.** The other four Gemini exports were not re-read. 03ah §1.2 established that they are byte-identical prefixes of S11, apart from branches that contain no decisions.

### 1.2 The "Role Terminology Inventory": provenance correction

The commissioning note attributes to 03ah a Role Terminology Inventory of "62 Site Head, 48 Project Head, 185 Sales Head". **03ah contains no such inventory, and none of those figures.** A grep of 03ah for them returns nothing.

This task reproduced the figures exactly. They are **case-insensitive matching-line counts** in the 1,500-character re-wrapped copy of S6 (`…/scratchpad/bocpo_wrapped.md`, the reading copy 03ah §1.3 describes). They are **not** occurrence counts. The full basis:

| Basis | "site head" | "project head" | "sales head" |
|---|---|---|---|
| Matching lines, re-wrapped S6 copy (the source of 62/48/185) | **62** | **48** | **185** |
| Occurrences, re-wrapped S6 copy | 73 | 52 | 223 |
| Matching lines, original S6 export | 60 | 48 | 183 |
| Occurrences in `cpo-final-assessment.md` / `branch1-of-branch1.md` / `branch1.md` / `main-branch.md` | 51 / 29 / 29 / 0 | 48 / 35 / 32 / 7 | 186 / 117 / 114 / 62 |

**Consequence.** Cite these as "this document, §1.2", not as 03ah. The raw counts include:
- Gemini turns;
- pasted persona prompts (§3.7);
- thought chunks.

They measure frequency, not decisions. The PO-authored passages that matter are enumerated at §3.7.

### 1.3 Reading method and limits

| ID | Limitation |
|---|---|
| **L-AI-1** | S1 is a single PO message. The question it answers is 03ah §8.1, so no L-1-style paraphrase is needed. The PO's worked example names only Employees D and A. It is silent on everyone else's roles on Projects B, D and E. §3.4 reads nothing into that silence. |
| **L-AI-2** | The corpus was **re-grepped**, not re-read. Every passage matching `(site\|sales\|project) head` in a **PO turn** of S6 was listed with its chunk (37 chunks). Every PO passage pairing a head with "report" or "reporting" was extracted. **No PO passage says a Project Head reports to a Site Head** (§3.7). |
| **L-AI-3** | 03ah's limitations L-2…L-7 carry over unchanged. In particular the 54 carried clusters are not re-derived, and the unbanded families are not de-duplicated. |

---

## 2. The PO decision

### 2.1 Verbatim (PO LOCKED)

> "Site Head and Project Head are project-level roles, not employee designations. They are assigned independently to employees for specific projects. An employee can hold the Project Head role, the Site Head role, or both simultaneously for the same project, and the same employee can have different role assignments across different projects.
>
> For example:
> - Employee D — designation GM
> - Project B → D = Site Head
> - Project C → D = Project Head, while Employee A = Site Head
> - Project D → D = Site Head
> - Project E → D = Project Head + Site Head, both roles simultaneously
>
> Therefore, Project Head does not inherently mean a separate position that reports to Site Head. The roles are assigned per project, independently of the employee's HR designation. This directly changes the interpretation of the earlier AG-Q-11(a) question."

### 2.2 Limb register

| Limb | Text (verbatim fragment) | What it settles |
|---|---|---|
| `PO-AI1·1` | *"Site Head and Project Head are project-level roles, not employee designations."* | Both are **roles scoped to a project**. Neither is an HR title |
| `PO-AI1·2` | *"They are assigned independently to employees for specific projects."* | The unit of assignment is **(employee, role, project)**. The two roles are assigned independently of each other |
| `PO-AI1·3` | *"An employee can hold the Project Head role, the Site Head role, or both simultaneously for the same project"* | They are **two distinct roles**, not synonyms, because one person can hold both at once. Holding both is permitted |
| `PO-AI1·4` | *"the same employee can have different role assignments across different projects"* | Assignments vary per project for the same employee. **The same role may be held on several projects** (D is Site Head of B and of D) |
| `PO-AI1·5` | The worked example (§2.3) | Illustrative, and binding as an example: SH and PH on one project may be **different people** (Project C) |
| `PO-AI1·6` | *"Project Head does not inherently mean a separate position that reports to Site Head."* | No reporting relation is **implied by the roles**. "Inherently" leaves open that the two role holders may *happen* to be in a reporting relation through the reporting tree |
| `PO-AI1·7` | *"The roles are assigned per project, independently of the employee's HR designation."* | Designation (e.g. GM) confers no project role, and a project role confers no designation |
| `PO-AI1·8` | *"This directly changes the interpretation of the earlier AG-Q-11(a) question."* | The framing of 03ah §8.1 is **replaced**. Its readings (i) "PH reports to SH" and (ii) "same position under two names" are both excluded (§3.8) |

### 2.3 The worked example, and what the locked authorities give each person

The first two columns are the PO's text. The rest is an **ARCHITECT-DERIVED** application of the §3.5 matrix. It shows how the locked authorities fall; it is not a new rule.

| Project | Site Head | Project Head (as stated) | D may (examples) | D may not (examples) |
|---|---|---|---|---|
| B | **D** | not stated | Initiate a Pre-Booked cancellation. Release cancelled inventory for resale. Resolve an Approval Exception. Declare a Rep unavailable (reporting tree permitting, LC-22) | — (D holds the Site Head role, which is the superset here) |
| C | **A** | **D** | Release another Rep's payment hold. Initiate a post-Booked cancellation. Release cancelled inventory for resale. Resolve an Approval Exception. Decide a CP clash at step 7 (`PO-T2`) | **Initiate a Pre-Booked cancellation**, because AG-Q-2 says *"only Site Head"*. **Mark the unit Available after a Pre-Booked cancellation**, because AG-Q-2 says *"Site Head may then mark the unit Available"*. Stage-2 allocation (AC-48 names the Site Head; whether the Project Head is excluded is AC-33's open second limb, NI-18) |
| D | **D** | not stated | As for Project B | — |
| E | **D** | **D** | The union of both roles' authorities | — (no segregation-of-duties rule forbids holding both; AH-Q-1 concerns initiator versus approver, not SH versus PH) |

**What the answer does not say.** Each silence is routed to where it is handled. None is filled in here.

| Silence | Handled at |
|---|---|
| How many Site Heads or Project Heads a project may have, and whether zero is allowed | AI-Q-2; LC-23 (§3.4) |
| What *"under the SAME Site Head"* in AC-55 now anchors to | AI-Q-1 (§3.3) |
| How the reporting tree and the role grants combine for management acts | LC-22 (§3.2) |
| Who may assign or revoke a project role | NI-20 (AG-Q-3-h's existing exclusion, *"scope of the delegable permissions"*) |
| What happens to a project's Site-Head-bound items when the grant moves to another employee | AI-Q-2 limb (iii) |
| Which department, if any, the roles belong to | Not needed by any locked rule. AG-Q-11(f) is **untouched** (§3.9) |

---

## 3. Reconciliation

### 3.1 NI-1: DISCHARGED as a business collision; the residual is editorial

**Exact text checked.** `docs/BMEXA_MASTER_SPEC.md`, §03 "PRIMARY USERS", line 70:

> *"**Builder-side users:** Super Admin, Builder Admin, CEO / Promoter, VP / Sales leadership, Sales Head, Project Head / Site Head, Sales Rep, Helpdesk, Sales Support, Accounts, Customer Support."*

The only other sentence in §03 that bears on roles is line 74:

> *"Different roles must see different information and actions. Never solve permissions by simply hiding buttons in the frontend."*

Across the whole Spec, "Site Head" and "Project Head" appear **only** at line 70 (grep; this agrees with 03t line 328). §08 (line 131) supplies the scoping mechanism:

> *"Roles and permissions must support scoped access. Potential scopes include: Global, Region, Project … Access should be based on: user, role, scope, project/organizational assignment."*

**Analysis.**

| Test | Finding |
|---|---|
| Does §03 assert that the Project Head reports to the Site Head, or any org-chart relation? | **No.** Line 70 is a comma-separated list of user types. It has no verbs and no hierarchy. |
| Does §03 assert that the Project Head and Site Head are the same person or role? | **No, not explicitly.** The slash is ambiguous. It was read as synonymy only by 03ah §8.1 reading (ii), an architect reading. `PO-AI1·3` (*"or both simultaneously"*) excludes that reading, because a person cannot hold one role "simultaneously" with itself. |
| Can "Project Head / Site Head" be read consistently with `PO-AI1`? | **Yes.** It names the two project-level roles together. That is consistent with §08, which lists "Project" as a scope, and with `PO-AI1·1`. **CLARIFIED.** |
| What is left after S-12 (Sales Head → Site Head)? | Line 70 then reads, in effect, *"… Site Head, Project Head / Site Head …"*. The same role appears **twice**. That is duplicated text, not two people. GC-31 (chunk 201) shows the PO using "site head" and "sales head" for one role, and S-12 makes them one role. |
| Does the Consolidated Requirements document agree? | §3 line 45 has **one** row, *"Site Head / Sales Head"*, and **no Project Head row**. Line 46 has a separate *"Manager / Reporting Manager"* row. That is the reporting axis of §3.2. Under `PO-AI1`, a Project Head row is **missing**, not contradictory. |

**Disposition.** NI-1 as 03ah §5 framed it, *"either the two entries merge (making Project Head a synonym), or 'Site Head' names two different people"*, is **DISCHARGED**. Neither branch holds:
- the roles are two (`PO-AI1·3`);
- "Site Head" names one role, which may be held by different people on different projects (`PO-AI1·4`).

03ah also said *"AC-55's PH → PH exception … requires PH ≠ SH and PH below SH"*. That is **withdrawn** (§3.8). Its successor question is AI-Q-1.

**Residual: editorial only**, and not a question:
- LC-20 is updated (§4.4). Spec §03 should list *Site Head* and *Project Head* as two project-level roles, and drop the duplicated renamed "Sales Head".
- Consolidated §3 should gain a Project Head row (G-1, G-2).
- The eleven-label count of AD-01 §C.3 happens to survive. Merging Sales Head into Site Head removes one label, and splitting "Project Head / Site Head" adds one. M-3 (the default role set) remains open and unbanded.

### 3.2 The two axes: the reporting tree and the project-role grant (AC-55 "BOTH")

**Locked text that governs.**

| Source | Text | Status |
|---|---|---|
| AG-Q-3 (handoff line 457–459) | *"Project approval authority is separate from management authority. Management authority requires BOTH reporting hierarchy AND project-level authorization. Booking approver eligibility is a separate axis governed by the project's approval chain."* | PO LOCKED |
| AC-55 (handoff line 605) | *"Management authority depends on BOTH reporting hierarchy AND project-level authorization."* | PO LOCKED |
| AC-54-h′/i′ (handoff lines 598–600) | *"Only Site Head or Project Head may declare a Rep otherwise unavailable and authorize that transfer. Authorized manager may transfer an active-booking customer even while current Rep is available. Scope still follows AC-55 hierarchy/project authorization rules."* | PO LOCKED |
| `PO-AF1·B.1`–`·B.5` (03af lines 250–254) | *"management authority follows the reporting hierarchy; a manager can manage only employees/customers within their direct or indirect reporting tree; a manager cannot gain operational authority over another manager's team merely because they share a project; project assignment does not independently expand management authority; every direct or indirect ancestor in the reporting hierarchy is within the relevant management scope"* | PO LOCKED (03af) |
| `PO-AE1·O.1` (03ae line 303) | *"the Site Head sees team customers and complete histories, can transfer and can monitor, independent of the receiving rep's history mode"* | PO LOCKED (03ae) |
| `PO-AI1·6`, `·7` | Roles do not inherently imply reporting; they are independent of designation | PO LOCKED (this document) |
| Chunk 272 (PO, 2026-09-07), answering *"Describe the real-world hierarchy of your builder organization … down to a salesperson working on a specific project"* | *"Regional zonal management … can have a zonal head or we can say GM … If we go on a micro level or project specific, we can have AGM under GM. We can have a Senior Sales Manager, Deputy Manager, Assistant Sales Manager, and Sales Executives."* | Older corpus PO text. **The designation hierarchy contains neither "Site Head", "Project Head" nor "Sales Head"** (0 occurrences in the chunk) |

**What this makes clear.**
1. There are **two independent structures**:
   - the **reporting tree** of designations (chunk 272's GM → AGM → Senior Sales Manager → … → Sales Executive), which `PO-AF1·B` makes the sole basis of management *breadth*;
   - the **project-role grants** of `PO-AI1`.

   The PO's own example fits this precisely: Employee D's **designation** is GM (a node in the reporting tree), and D's **roles** vary per project.
2. **Project acts** need only the role grant on the project. AG-Q-3 separates *"project approval authority"* from management authority. Examples:
   - initiating a cancellation;
   - releasing inventory for resale;
   - resolving an Approval Exception;
   - acting as the L1 approver;
   - Stage-2 allocation;
   - the step-7 clash decision.
3. **Management acts** need **both**. By AG-Q-3 and AC-55 these are acts over another employee's customers or work:
   - transferring customers;
   - declaring a Rep unavailable and authorizing the transfer (AC-54: *"Scope still follows AC-55"*);
   - reviving a Dumped customer by transfer (*"Authorized Site Head"*).

   The role grant is **a** project-level authorization. `PO-AF1·B.3`/`·B.4` forbid project assignment from widening scope on its own.

**What remains, and why it is ledger, not a question.** Older texts describe the Site Head as a node *in* the hierarchy:
- GC-24, chunk 173: *"the sales representatives who are under sales head … above sales head, there will be VP"*;
- GC-31, chunk 201: *"VP can change lead owner because he is the boss of sales head"*;
- `PO-AE1·O.1`: *"team customers"*.

Under `PO-AI1`, "the Site Head" is a role, so those relations must attach to the **employee holding the role**, through the reporting tree.

That reading is compelled by explicit locked text (AG-Q-3, AC-54-i′, `PO-AF1·B.1`–`·B.5`). It is not the architect's choice between open options. So it is held as **LC-22: NARROWED — PENDING PO CONFIRMATION**, not counted as a cluster. It has one consequence the PO should see, and LC-22 states it:

> **LC-22 consequence (ARCHITECT-DERIVED).** On Project C (Site Head A, Project Head D), suppose a Sales Rep's reporting tree runs up to D (a GM) and **not** to A.
> - A may still do every **project act** on Project C.
> - A may **not** transfer that Rep's customers, or declare that Rep unavailable. Management acts need the Rep inside A's reporting tree.
> - D may do those management acts, as Project Head, under AC-54.
>
> A project's Site Head therefore does not automatically manage every Rep on the project. If the PO intends otherwise, the Site Head grant would itself have to widen management scope. That would qualify `PO-AF1·B.4`, and LC-22 would become a question.

**Does AC-55 now read more clearly?** Yes. The *"project-level authorization"* conjunct now has a named instance: the SH/PH grant. `PO-AF1·B` had already fixed the *"reporting hierarchy"* conjunct as the reporting tree.

Two things remain undecided, and are **not** reopened here:
- 03ag's AC-55 limb *"which project-level authorization, who grants it"*: whether a plain Reporting Manager's project-level authorization is a role grant, simple project membership (AG-Q-3's *"has access to the relevant project"*), or something else. That limb belongs to the unbanded M-3/M-7/U-10(iii) family (03af §9.2) and is **not** counted.
- Who grants SH/PH: NI-20.

### 3.3 AC-55's PH → PH exception: re-read, and VALIDATE-OPEN (AI-Q-1)

**Locked text** (handoff lines 613–617):

> *"Manager transfer authority: downward within own hierarchy is allowed, upward transfer is not allowed, peer transfer is not allowed, EXCEPTION: Project Head may transfer to another Project Head under the SAME Site Head."*

The clause was written when 03ah read the Project Head as sitting below the Site Head. `PO-AI1·6` removes that as an inherent relation. The clause still binds; its anchor is what is uncertain. Four readings survive:

| Reading | What "under the SAME Site Head" would mean | For | Against |
|---|---|---|---|
| **(a) Cross-project, shared Site Head** (the orchestrator's candidate) | PH₁ of Project P1 transfers a customer to PH₂ of Project P2, where the same employee holds Site Head on both | `PO-AI1·4` (D is Site Head of B and of D); GC-24, chunk 173: *"The sales head can have multiple projects at once"* | Management acts need **project-level authorization** on the customer's project (AG-Q-3; AC-55), and PH₂ holds none on P1. No locked text makes a transfer move a customer's project: transfers change the handler (AC-51, AC-54, AC-55). How a customer relates to projects is itself open (M-5, W-1). **Not supportable on locked text alone** |
| **(b) Same project, several Project Heads** | Two PH holders on one project, whose Site Head is common | Satisfies project-level authorization for both. Reads "another Project Head" literally | Needs **two or more Project Heads on one project**, which is not stated (AI-Q-2). If a project has exactly one Site Head, the qualifier "under the SAME Site Head" would be redundant |
| **(c) Reporting tree** | Both PH holders sit in the reporting tree of the same employee, who holds the Site Head role | "Under" is the word AC-55's own direction rules use (*"downward within own hierarchy"*). An exception to a *peer* ban naturally concerns two peers with a common superior. `PO-AI1·6` says *"inherently"*, leaving room for an actual reporting line | It names the superior **by project role**, and `PO-AI1` separates roles from reporting. It also mixes the two axes |
| **(d) Lead owner** | Both PHs work customers whose **owner** is the same Site Head | GC-31, chunk 201: *"site head is the lead owner and will stay lead owner till end"*. AC-51-e′ presupposes customers moving between Site Heads (*"Previous Site Head after transfer"*) | Owner = Site Head is older corpus text that the handoff never restated. AC-55 locks only that the owner may differ from the handler |

**Verdict: `VALIDATE-OPEN` → `AI-Q-1` (NEW, 03ai).** *What does "Project Head may transfer to another Project Head under the SAME Site Head" now require: a shared Site Head across two projects, two Project Heads on one project, a shared reporting-tree superior who holds Site Head, or a shared lead owner?*

- Reading (a), though plausible, **fails** AC-55's own conjunct unless the PO also says a PH → PH transfer carries or grants project authorization.
- Reading (b) depends on AI-Q-2.
- The architect does not choose.

**Interim treatment (ARCHITECT RECOMMENDATION — NOT APPROVED).** Implement the direction rules (downward allowed; upward and peer denied), and treat the exception **fail-closed**: a PH → PH transfer is denied like any other peer transfer until AI-Q-1 is answered.
- This withholds a PO-granted permission, so it must be visible to the PO (R-AI-4). It is not a silent rule.
- Adding the exception later is a permission-grant change, not a data-model change.

**Counting.** AI-Q-1 is homed **inside AG-Q-11**, not counted as a new cluster (§5.1). 03ah already homed this exact residual there: Annex D gives AC-55's residual as *"AG-Q-11(a) (principals)"*, and §4.9(a) cites the PH → PH exception as its evidence. **AC-55 stays fully resolved as a business rule**, as it was in 03ah §3.2 row 11.

### 3.4 Cardinality per project (AI-Q-2)

The PO's example always shows one Site Head per project, and at most one Project Head *named*. That is an example, not a rule. It names the Project Head only where D holds that role, so it is silent on whether Projects B and D have one.

| Evidence | Text | Bears on |
|---|---|---|
| `PO-AI1·5` | Every project listed (B, C, D, E) has a Site Head. A Project Head is named for C and E only | Consistent with "≥1 SH". Silent on the maximum and on Project Heads |
| GC-24 (chunk 173, PO) | *"every project will have a sales head. The sales head can have multiple projects at once."* ⟨rename: sales head → Site Head⟩ | **Minimum of one Site Head per project** (older PO text; LC-23). One person may be Site Head on many projects (confirmed by `PO-AI1·4`) |
| GC-12 (chunk 76, PO) | *"while adding project, system will ask project head, that personal will do all the discount approvals."* | Singular Project Head named **at project set-up**. Older text; discount-approval routing is not a current locked rule (AG-Q-4: discount approval is a separate workflow) |
| GC-20 (chunk 133, PO) | The add-project form lists *"Project head"* | The role is set per project at set-up |
| AC-51-e′ (handoff lines 577–583, PO LOCKED) | *"Previous Site Head after transfer: removed from client list, can search by mobile number, can open current record READ-ONLY, can view current/current team/status, cannot perform transfer or work actions."* | Presupposes a customer transfer that **changes the customer's Site Head**. With exactly one Site Head per project, that happens only across projects (which no transfer rule provides) or on a change of grant. **This is evidence against assuming a single Site Head** |
| GC-31 (chunk 201, PO) | *"If VP wants to transfer lead from sales head one to sales head two, then the lead owner will be the sales head two."* | The same presupposition, as older text |
| AG-Q-4 (handoff lines 483–486) | *"Level 1 = Site Head"* | A per-project chain names a person per level (03ah §3.2 row 4). With two or more Site Heads, the default L1 is not determined |

**Findings.**
- **At least one Site Head per project:** supported by older PO text (GC-24) and consistent with `PO-AI1·5`. Held as **LC-23** (proposed: CLARIFIED). It matters: without a Site Head, a Pre-Booked cancellation, and so the release of a non-expiring booking hold, has **no permitted initiator** (AG-Q-1-j, AG-Q-2), and the unit is stuck (R-AI-3).
- **At most one Site Head:** **not locked**, and AC-51-e′ makes it doubtful.
- **Project Heads, zero or several:** **not locked.**
- **Succession:** when the Site Head grant on a project moves to another employee, do the grant's project bindings move with it? These are the default L1 approver, lead ownership (if GC-31's owner = Site Head survives) and AC-51-e′'s "previous Site Head" status. **Not stated.** Spec §08 (*"Role changes must not destroy historical ownership information"*) and §57 (*"allow authorized management to reassign work"*) constrain the answer but do not supply it. AG-Q-8's Approval Exception already covers an **inactive** approver. It does not cover a *live* employee who has lost the role.

**`AI-Q-2` (NEW, 03ai): per project, (i) may more than one employee hold Site Head at once; (ii) may a project have no Project Head, or several; (iii) when a project-role grant changes hands, what moves with it?**
- Homed inside AG-Q-11 (§5.1).
- Interim treatment (ARCHITECT RECOMMENDATION): model grants **without** a cardinality constraint beyond LC-23's minimum (§8). A uniqueness constraint can be added later without restructuring. Removing one later cannot be done without a data decision.

### 3.5 Every locked authority naming the Site Head or the Project Head, now expressed

Principal notation:
- `SH@P`: the employee holds the Site Head role on project P.
- `PH@P`: the same for Project Head.
- `Tree(x)`: the reporting tree rooted at employee x (`PO-AF1·B`).

P is the project of the unit, booking or customer acted on. The "Kind" column applies §3.2: a **project act** needs only the grant; a **management act** needs the grant **and** the reporting tree (LC-22).

| # | Act | Locked text (verbatim) | Source | Kind | Principal under `PO-AI1` | Exclusive? | Status |
|---|---|---|---|---|---|---|---|
| 1 | Release **another Rep's** 20-minute payment hold | *"Reporting Manager / manager above / Site Head / Project Head can release another Rep's payment hold."* | AG-Q-2-a′ | Project act (inventory) | `Tree`-ancestor of the Rep **∨** `SH@P` **∨** `PH@P` (the literal union of the four listed alternatives) | No | **Expressible.** Whether the two reporting-tree principals also need project authorization is an AC-55 detail and does not block |
| 2 | Release a non-expiring **booking hold** = initiate a **Pre-Booked cancellation** | *"only Site Head initiates that cancellation"* / *"Site Head initiates Pre-Booked cancellation."* | AG-Q-1-j; AG-Q-2-c′/d; V-23-d′ | Project act | `SH@P` | **Yes** (*"only"*). A Project-Head-only holder is excluded (D on Project C) | **Expressible.** Which Site Head, if several: AI-Q-2 |
| 3 | Mark the unit Available after a Pre-Booked cancellation | *"Site Head may then mark the unit Available."* | AG-Q-2 | Project act | `SH@P` | Named alone | **Expressible.** The Cancelled-Inventory edge is still open (NI-13, architecture) |
| 4 | Release **cancelled inventory** for resale | *"only Site Head or Project Head can release it for resale and mark it Available."* | AG-Q-2; AG-Q-6 | Project act | `SH@P` ∨ `PH@P` | **Yes** (*"only"*) | **Expressible** |
| 5 | Initiate a **post-Booked cancellation** | *"Site Head or Project Head may initiate post-Booked cancellation."* | AG-Q-6 | Project act | `SH@P` ∨ `PH@P` | Named pair | **Expressible.** For a unit transfer across projects, the cancellation leg falls on Unit A's project (NI-19; AG-Q-6(ii)) |
| 6 | Be notified of, resolve, and assign in an **Approval Exception** | *"Notify Site Head or Project Head. Site Head or Project Head resolves the exception and assigns an eligible approver."* | AG-Q-8 | Project act (approval administration) | `SH@P` ∨ `PH@P`. ARCHITECT reading: notify every holder | Named pair | **Expressible** |
| 7 | Default **Level-1 booking approver** | *"Level 1 = Site Head"* | AG-Q-4 | Approval eligibility (a separate axis, AG-Q-3) | Default seed = the `SH@P` holder when the chain is configured. The chain then names a person | — | **Expressible.** With several Site Heads, which one: AI-Q-2(i). On a change of grant: AI-Q-2(iii) |
| 8 | **Declare a Rep otherwise unavailable** and authorize the active-booking transfer | *"Only Site Head or Project Head may declare a Rep otherwise unavailable and authorize that transfer. … Scope still follows AC-55 hierarchy/project authorization rules."* | AC-54-h′/i′ | **Management act** | (`SH@P` ∨ `PH@P`) **∧** Rep ∈ `Tree(actor)` | **Yes** (*"Only"*) | **Expressible** under LC-22 |
| 9 | **Transfer a Dumped customer** (revives it) | *"Authorized Site Head may transfer a Dumped customer; transfer revives the customer."* | AC-55 | Management act | `SH@P` ∧ handler ∈ `Tree(actor)` | Named alone; *"'Sales Head only' exclusivity does NOT survive"* widens to other authorized managers | **Expressible** under LC-22 |
| 10 | Manager transfer **directions** | *"downward within own hierarchy is allowed, upward … not allowed, peer … not allowed"* | AC-55 | Management act | Direction is computed on `Tree`. Project authorization as for row 8 | — | **Expressible** |
| 11 | **PH → PH exception** | *"Project Head may transfer to another Project Head under the SAME Site Head."* | AC-55 | Management act | **Not determinable** | — | **VALIDATE-OPEN → AI-Q-1**. Interim: fail-closed |
| 12 | The **previous Site Head's** read-only view after a transfer | Quoted at §3.4 | AC-51-e′ | Visibility | The former `SH` relation to the customer. Its trigger depends on how a customer's Site Head is determined (LC-22 / AI-Q-2) | — | **Expressible** under LC-22, where the customer's Site Head is the `SH@P` holder whose tree contains the handler. It fires on transfers across Site-Head trees |
| 13 | Site Head's **team visibility** | *"the Site Head sees team customers and complete histories"* | `PO-AE1·O.1` | Visibility (the I2 population, 03af §9.3) | `SH@P` ∧ customer handled within `Tree(actor)` | — | **Expressible** under LC-22 |
| 14 | **Stage-2** allocation, change and revocation | *"Site Head may change/revoke Stage-2 allocation before commission payment."* | AC-48; `PO-X1`; `PO-U1·4` | Project act (commercial) | `SH@P` | Named alone; **Project Head status open** (AC-33 second limb, NI-18) | **Expressible** for the Site Head |
| 15 | **Step-7 CP clash decision** | *"the decision-maker at step 7 is the previously established Site Head / Project Head"* | `PO-T2` (03t, 03v) | Project act | `SH@P` ∨ `PH@P` (held as permission `C-XX`) | Named pair | **Expressible** |
| 16 | A with-history recipient sees *"Site Head / management actions after the transfer"* | AG-Q-15 | AG-Q-15 | Visibility | Any `SH` actor's post-transfer activity | — | **Expressible** |

Every row is a **permission** whose default holders are the roles shipped as Site Head and Project Head (`R2`; 03t §3.2 corollary 1). Nothing branches on a role name.

### 3.6 Everything 03ah listed as blocked on AG-Q-11(a)

| 03ah item | 03ah's blocking statement | Now | Residual |
|---|---|---|---|
| **AGX-8 / AG-Q-2** (booking-hold release = Pre-Booked cancellation, initiated by the Site Head only) | NI-1: *"pre-Booked cancellation (SH only)"* | **UNBLOCKED.** §3.5 rows 2 and 3: `SH@P` | Which Site Head, if several (AI-Q-2); vacancy hazard (LC-23, R-AI-3) |
| **AG-Q-2 / AG-Q-6** release for resale | *"resale release (SH or PH)"* | **UNBLOCKED.** Row 4 | — |
| **AG-Q-6** post-Booked cancellation | *"post-Booked cancellation (SH or PH)"* | **UNBLOCKED.** Row 5 | Cross-project unit-transfer initiator (NI-19, inside AG-Q-6(ii)) |
| **AG-Q-2-a′** payment-hold release of another Rep | *"payment-hold release"* | **UNBLOCKED.** Row 1 | — |
| **AG-Q-8** Approval Exception | *"Approval Exception (SH or PH)"* | **UNBLOCKED.** Row 6 | — |
| **AC-54** declaring a Rep unavailable | *"declaring a rep unavailable (SH or PH)"* | **UNBLOCKED, conditionally.** Row 8 | LC-22 confirmation |
| **AC-55** transfer direction; PH → PH | *"transfer direction (PH → PH)"*; readiness *"pending AG-Q-11(a)"* | Directions **UNBLOCKED** (rows 9, 10) | **PH → PH exception VALIDATE-OPEN (AI-Q-1)** |
| **NI-13** (Project Head excluded from the Pre-Booked act, included in resale) | *"depends partly on AG-Q-11(a)"* | **Its AG-Q-11(a) limb is DISCHARGED.** With independent roles, the asymmetry is coherent and literal: on Project C, D may release for resale but may not initiate a Pre-Booked cancellation | Only the Cancelled-Inventory edge remains (AD-G-16; architecture) |
| **LC-20** (the Project Head row *"waits for AG-Q-11(a)"*) | — | **No longer waits** | Editorial confirmation (§4.4) |
| **R-AG-2** (authorization built on the wrong principal set) | *"Raised: NI-1 … and NI-2"* | **Lowered** (Annex A) | NI-2, AI-Q-1, AI-Q-2, NI-17 |
| Architecture Readiness, Security column | *"No. The principals … depend on AG-Q-11(a)"* and *"pending AG-Q-11(a)"* | Updated per domain at §6 | — |
| Dependency spine | *"`AG-Q-11(a)` → capability model (AD-G-8) → Security in all domains"* | **Satisfied** for principal identification | AI-Q-1, AI-Q-2 and LC-22 feed the same node, more narrowly |

### 3.7 Corpus records re-classified, and two 03ah citation corrections

| Record | Chunk (date), speaker | Text | Against `PO-AI1` |
|---|---|---|---|
| GC-12 | 76 (09-04), PO | *"while adding project, system will ask project head"* | **CLARIFIED**: the Project Head is named per project |
| GC-20 | 133 (09-04), PO | Add-project form: *"Project head"* | **CLARIFIED** |
| GC-24 | 173 (09-05), PO | *"every project will have a sales head. The sales head can have multiple projects at once."*; *"sales representatives who are under sales head … above sales head, there will be VP"* | Multiple projects per Site Head: **CLARIFIED** (`PO-AI1·4`). "Every project": **LC-23**. "Under" / "above": **LC-22** |
| GC-31 | 201 (09-05), PO | *"VP can change lead owner because he is the boss of sales head … transfer lead from sales head one to sales head two"* | "Boss of": **LC-22**. Moving between Site Heads: AI-Q-2 evidence |
| Chunk 2 (pre-09-04), PO | L10598 | *"A helpdesk employee will come under the sales head of each project … That helpdesk work should go under that particular project head's team"* | Consistent: the PO uses "sales head of each project" and "project head" in one breath, as roles per project |
| Chunk 2, PO | L11777 | *"Giving walk-in reports to reporting sales head/ project head"* | Consistent (the pair of roles) |
| Chunk 111 (09-04), PO | L16182 | *"it's upon site at project head whether he wants to give this booking to channel partner"* (voice-typing; read as "site or project head") | Consistent with `PO-T2` |
| Chunk 191 (09-05), PO | L19214 | *"because he is the project head in sales head"* | Consistent: **one person holding both roles**, as on `PO-AI1`'s Project E |
| Chunk 213 (09-05), PO | L19660 | *"Depends upon site head how site head wants to tackle this thing"* | Consistent (a project-level decision) |
| **Chunk 272** (09-07), PO | L25172 | The designation hierarchy (MD, CEO, COO, CFO, zonal head / GM, VP Sales, AGM, Senior Sales Manager, Deputy Manager, Assistant Sales Manager, Sales Executives) | **Strong corroboration.** It contains **no** Site, Project or Sales Head. These are not designations (`PO-AI1·1`, `·7`). "GM" matches the PO's *"designation GM"* |
| Persona prompts | 159, 169, 215, 257, 324, user turns (**pasted prompt templates**) | Role tables listing *Sales Head* and *Project Head* as separate columns, prefaced *"Potentially"* and *"do not assume these are correct merely because they appear in the blueprint"* | **Not PO decisions.** They are the probable origin of Spec §03's separate "Sales Head" and "Project Head / Site Head" entries. Gemini's merged *"VP / Sales / Project Head"* (chunk 147) and *"Project Heads alone see the Clash Badge"* (chunk 158) are ARCHITECT-DERIVED (03ah §2.6) |

**No PO passage in S6 states that a Project Head reports to a Site Head.** The only PO passages pairing a head with "report" or "reporting" are three:
- chunk 2 L11777 (*"reporting sales head/ project head"*: reports delivered *to* them);
- chunk 120 L16369 (exports and reporting);
- chunk 191 L19216 (*"assigned to the site head or his reporting manager"*).

None creates a PH → SH line.

**Citation corrections to 03ah §8.1** (reading (ii), "Evidence for it"). 03ah attributed *"it's upon site at project head"* and *"he is the project head in sales head"* to the *"GC-13 region and GC-31"*. They are **chunk 111** and **chunk 191** respectively (chunk map). Neither affects any status.

### 3.8 Architect readings withdrawn (not PO rules, so not "superseded")

| 03ah text | Why withdrawn |
|---|---|
| §8.1 reading (i), *"Separate, and the Project Head reports to a Site Head"* | Excluded by `PO-AI1·6` |
| §8.1 reading (ii), *"The same position under two names"* | Excluded by `PO-AI1·3` (*"both simultaneously"*) |
| §8.1 reading (iii), *"Separate but parallel"* | The **closest** reading, but incomplete. The roles are not "positions" at all. They are per-project grants that one person may combine |
| §4.9(a), *"AC-55's exception … implies two positions in a hierarchy"* | Replaced by AI-Q-1 |
| NI-1, *"AC-55's PH → PH exception … requires PH ≠ SH and PH below SH"* | Replaced by AI-Q-1 |

### 3.9 Not touched by this answer

- **AG-Q-11(f)** (where Sales Support and Helpdesk sit among Sales / CRM / Accounts / Marketing; NI-2) is **unchanged and still OPEN**.
  - `PO-AI1` concerns project roles, not department membership.
  - GC-24, GC-43 and chunk 2's *"helpdesk employee will come under the sales head of each project"* are unchanged in their bearing on (f).
- Also unchanged:
  - every other partial cluster (AG-Q-6, AG-Q-10, AC-48, V-4, repo AC-58, W-1, W-4, V-10);
  - the 54 untouched clusters;
  - AG-Q-16 and AH-Q-1;
  - AGX-7, AGX-10, AGX-11, AGX-12, AGX-13;
  - ACG-1…9;
  - LC-1…LC-19 and LC-21.

---

## 4. Issue and contradiction register (delta to 03ah §5 and Annex C)

### 4.1 Dispositions of existing issues

| NI | 03ah summary | Disposition in 03ai |
|---|---|---|
| **NI-1** | The rename collides with Spec §03; blocks Security in every domain | **DISCHARGED** (business). Residual editorial → LC-20 / G-1 / G-2. The successor residuals are AI-Q-1 and AI-Q-2 (§3.1) |
| NI-2 | Department model (AG-Q-11(f)) | **Unchanged, OPEN** |
| NI-3 | A Booked unit transfer is a cancellation (AG-Q-6(ii)) | **Unchanged, OPEN.** Its initiator is now expressible (row 5). NI-19 adds the cross-project case |
| NI-4 … NI-12 | — | Unchanged |
| **NI-13** | Cancelled-Inventory edge; PH excluded then included | **NARROWED.** The AG-Q-11(a) limb is discharged (§3.6). The AD-G-16 edge remains (architecture) |
| NI-14 … NI-16 | — | Unchanged |

### 4.2 New issues

| NI | Type | Issue | Evidence | Home |
|---|---|---|---|---|
| **NI-17** | **Built-artefact collision** | `user_roles` is `(tenant_id, user_id, role_id, granted_by, granted_at)` with `PRIMARY KEY (user_id, role_id)`. It has **no project scope**, and cannot hold the same role twice. It cannot record: D = Site Head on **B and D** (same role, two scopes); D = Project Head on C while A = Site Head on C (scope); or any per-project difference. AD-01 §L.3 predicted this: *"a user cannot hold the same role twice at two different scopes — which is precisely what a Project Head at two projects needs."* | `packages/db/drizzle/0000_phase0_foundation.sql` lines 900–910 (mirror: `docs/architecture/schema-phase-0.sql`); AD-01 §E.3, §L.3; `PO-AI1·4` | Architecture (G-13). **Named, not fixed.** Layer-2 gated |
| **NI-18** | Authority asymmetry made consequential | Some grants name the **Site Head alone**: AC-48 / `PO-X1` Stage-2; `PO-U1·4` commission allocation; AG-Q-2 Pre-Booked cancellation (explicitly *"only"*); AC-55 Dumped-customer transfer. Others name **Site Head or Project Head**. Under 03ah's framing the difference might have been one person. Under `PO-AI1` it is two people on Project C. The Pre-Booked limb is explicit. The Stage-2 / commission limb is AC-33's **second limb**, which 03x (line 854) left neutral (*"NOT read as excluding them and NOT read as including them"*) | §3.5 rows 2, 3, 9, 14; 03u line 656; 03x line 854 | AC-33 (unbanded, not re-asked). Architecture: the default grants of the Site Head and Project Head roles must differ exactly as the locked text differs, and must not be merged |
| **NI-19** | Workflow | A Booked unit transfer **across projects** (Unit A on P1, Unit B on P2): the cancellation leg falls to `SH@P1`/`PH@P1` (row 5), and the new booking runs P2's approval chain (AG-Q-4). Which project's role holder initiates the transfer as a whole is not stated | AG-Q-6 representation; `PO-AI1·2` | Inside **AG-Q-6(ii)**, for its architecture follow-through. **Not bundled** into the §7 question |
| **NI-20** | Security / administration | **Who may assign or revoke** a Site Head or Project Head role on a project? AG-Q-3 makes the Builder-Side Admin the tenant-level administrative authority, and lets CRM staff *"receive delegated setup/configuration permissions"*. Whether that delegation may include granting the role that carries cancellation authority is AG-Q-3-h's recorded exclusion (*"scope of the delegable permissions"*, 03ah Annex A). Grant changes are *"user/admin actions"* under ACG-1 | AG-Q-3; ACG-1; GC-12, GC-20 (the role is set at project creation) | AG-Q-3-h exclusion (existing; not counted). ARCH default at §8 |
| **NI-21** | Terminology (document hygiene) | 03ah (and earlier documents) sometimes write "Site Head / Project Head" as if it were one principal. From here on, a grant to "Site Head **or** Project Head" means `SH@P ∨ PH@P`. A grant to "Site Head" means `SH@P` only, unless the PO says otherwise | §3.5 | Record only |

### 4.3 Contradictions

**No new AGX.** Every PO passage that describes the Site Head as a hierarchy node was checked against `PO-AI1`: GC-24, GC-31 and `PO-AE1·O.1`. Each reconciles through LC-22, because the relation attaches to the role holder's reporting tree. None **conflicts** in the 03ah sense of two PO texts on the same subject with no update between them. `PO-AI1·8` is itself an explicit update statement.

**Carried unchanged:** AGX-7, AGX-10, AGX-11, AGX-12, AGX-13.

### 4.4 Ledger confirmations: updated and new

**Default until confirmed:** NARROWED — PENDING PO CONFIRMATION (03ah Annex C.3).

| ID | Status | Content | Proposed mark |
|---|---|---|---|
| **LC-20** (updated) | Pending, **no longer waiting on AG-Q-11(a)** | Spec §03 and Consolidated §3 role rows against S-11, S-12 and `PO-AI1` | **Rename and restate.** Spec §03: list *Site Head* and *Project Head* as **two project-level roles, assigned per project**, and delete the separate "Sales Head" entry (now a duplicate). Consolidated §3: "Site Head / Sales Head" becomes "Site Head"; add a Project Head row; keep "Manager / Reporting Manager" as the reporting-tree role. The Customer Support / Post-Sales mapping to the CRM department is as 03ah |
| **LC-22** (NEW) | Pending | GC-24 (*"under sales head … above sales head, there will be VP"*), GC-31 (*"boss of sales head"*) and `PO-AE1·O.1` (*"team customers"*) against `PO-AI1` | **NARROWED.** Those relations run through the **reporting tree of the employee who holds the role**. The Site Head / Project Head grant contributes **project-level authorization** only. Management acts need both (AG-Q-3; AC-54-i′; `PO-AF1·B.1`–`·B.5`). The consequence is stated at §3.2 and R-AI-2 |
| **LC-23** (NEW) | Pending | GC-24 *"every project will have a sales head"* ⟨rename → Site Head⟩ against `PO-AI1` | **CLARIFIED.** Every project has **at least one** Site Head grant. The maximum stays OPEN (AI-Q-2) |

### 4.5 Open residuals introduced (homed inside AG-Q-11)

| ID | Question (not asked) | Why open | Interim default (ARCHITECT, not approved) |
|---|---|---|---|
| **AI-Q-1** | What does *"Project Head may transfer to another Project Head under the SAME Site Head"* require under per-project roles: a shared Site Head across two projects, two Project Heads on one project, a shared reporting-tree superior who holds Site Head, or a shared lead owner? | Four readings survive (§3.3). Reading (a) fails AC-55's own project-authorization conjunct on locked text | **Fail-closed.** PH → PH is denied like any other peer transfer until answered |
| **AI-Q-2** | Per project: (i) may more than one employee hold Site Head at once; (ii) may a project have no Project Head, or several; (iii) when a project-role grant changes hands, what moves with it (default L1 approver; GC-31 lead ownership; AC-51-e′ previous-Site-Head status)? | Not locked. The worked example is illustrative. AC-51-e′ and GC-31 point to more than one Site Head (§3.4) | Grants without a maximum; the ≥1 Site Head minimum enforced (LC-23); succession by an explicit re-grant event, never by overwriting (Spec §08) |

---

## 5. Cluster count

### 5.1 Method (03ah §3.1, unchanged)

- **Unit of count:** the unique cluster.
- **New clusters are counted only where the ambiguity has no home in an existing cluster.**
- Contradictions and ledger items are not clusters.

Homing decisions in this document:
- **AI-Q-1** is homed in **AG-Q-11**. 03ah Annex D already homed AC-55's PH → PH principal residual in AG-Q-11(a), and AI-Q-1 is that residual after `PO-AI1`.
- **AI-Q-2** is homed in **AG-Q-11**. It is about the role model, which is AG-Q-11's subject.
- **LC-22** and **LC-23** are ledger items.
- **NI-17…NI-21** are issues, not clusters (NI-19 sits inside AG-Q-6(ii); NI-20 inside AG-Q-3-h's exclusion).

### 5.2 Status changes

| Cluster | 03ah | 03ai | Why |
|---|---|---|---|
| AG-Q-11 | PARTIAL: (a) and (f) open; (b)(c)(d)(e) resolved | **PARTIAL**: (a) **answered** (`PO-AI1`); (f) open; AI-Q-1 and AI-Q-2 open as residual limbs | A limb closed. The cluster stays partial because (f) is untouched and the two residuals are homed here |
| AC-55 | Fully resolved | **Fully resolved** (unchanged) | Its PH → PH principal residual was already homed in AG-Q-11 by 03ah, and is now AI-Q-1 |
| Every other cluster | — | Unchanged | §3.9 |

### 5.3 Reconciled figures

> **BMexa Audit Progress: AD-01AG (reconciled in 03ah; updated in 03ai, 2026-09-28)**
>
> **Original baseline:** 76
>
> **Fully resolved:** **20** (14 baseline + 6 new: AG-Q-12, 13, 14, 15, 17, 18). Unchanged.
>
> **Partially resolved:** **9** (8 baseline: AG-Q-6, AG-Q-10, AC-48, V-4, repo AC-58, W-1, W-4, V-10; plus 1 new: AG-Q-11). Unchanged in number. AG-Q-11's limb (a) is now answered.
>
> **Untouched:** **54** (52 untouched + 2 touched-not-answered: AC-50, N-2). Unchanged.
>
> **Newly opened:** **9** (8 from 03ag, AG-Q-11…18; 1 from 03ah, AH-Q-1). Of these, 6 are resolved, 1 is partial (AG-Q-11) and 2 are open (AG-Q-16, AH-Q-1). **No new cluster is added in 03ai.**
>
> **Current open minimum:** **65** (verified minimum). Unchanged.

### 5.4 Arithmetic

| Check | Computation |
|---|---|
| Baseline integrity | 14 fully resolved + 8 partial + 54 untouched = **76** (matches) |
| New clusters | 6 resolved + 1 partial (AG-Q-11) + 2 open (AG-Q-16, AH-Q-1) = **9** (matches) |
| Unresolved minimum | 8 baseline partial + 54 untouched + 3 unresolved new (AG-Q-11, AG-Q-16, AH-Q-1) = **65** |
| Fully resolved (all) | 14 + 6 = **20** |

### 5.5 Reconciling against 03ah's 65

| Movement | Effect on the minimum |
|---|---|
| AG-Q-11(a) answered by `PO-AI1` | 0. AG-Q-11 stays partial because of (f) |
| AI-Q-1 and AI-Q-2 opened | 0. Both are homed inside AG-Q-11 (§5.1) |
| LC-22, LC-23 | 0 (ledger) |
| NI-1 discharged | 0 (an issue, not a cluster) |
| **Net** | **65 → 65** |

**Why the figure did not fall although a question was answered.** AG-Q-11 was counted once because it had two open limbs, (a) and (f). Answering (a) alone cannot close it. The answer also exposed two narrower residuals within the same cluster.

### 5.6 Why 65 is only a minimum

- 03ah §6.4's three reasons carry over unchanged: the unbanded families, the carried 54, and partial-to-new judgements.
- **The new judgements taken here:**
  - Under a stricter method that counts every residual exposed against a fully resolved or partial cluster as its own cluster (as 03ah did for AH-Q-1), **AI-Q-1 and AI-Q-2 would each count**. The figure would be **67**.
  - Counting only AI-Q-1 (a residual of AC-55's own locked text) would give **66**.
  - This document adopts **65**, because both residuals have a home that 03ah itself established.
- AG-Q-11 may still merge with M-3 when the unbanded families are de-duplicated (03ag §6.2).
- **No exact global total is claimed.**

---

## 6. Architecture Readiness

**The architecture is NOT complete.**
- No domain has a designed data model, security model or tests.
- "Conditionally yes" means design work may start on the parts no open PO question reaches. It is subject to the PO's approval of this document (and of 03ah), to the phase gates, and to Layer-2 sign-off for authorization design.
- Changes from 03ah are marked **(changed)**.

| Domain | Business rules resolved | Remaining blockers | Data Model can proceed? | Security can proceed? | PO questions still blocking |
|---|---|---|---|---|---|
| **Hold / Booking / Unit** | AG-Q-1, AG-Q-2 (AGX-8), AG-Q-5, AG-Q-12, AG-Q-13, V-23, AD-G-1, AD-G-5; AG-Q-6 initiators, no approval, CRM processing, unit Cancelled, separate resale release, refund record-only, booking record Cancelled, transfer representation; **`PO-AI1` principals (changed)** | AG-Q-6(ii) (NI-3, NI-19); NI-13 (Cancelled-Inventory edge only, **narrowed**); NI-14; LC-14…LC-17; AC-50; **LC-23 / AI-Q-2 (Site-Head vacancy hazard)**; **NI-17 (built `user_roles` has no project scope)** | **Conditionally yes** for the hold machine, the pre-Booked booking machine, and **the project-role grant model (changed)**. **No** for the post-Booked cancellation and transfer edges, until AG-Q-6(ii) | **Conditionally yes (changed from No).** Release, cancellation and resale principals are expressible as `SH@P` / `PH@P` grants (§3.5 rows 1–5). Conditions: LC-23; a cardinality-agnostic grant model (AI-Q-2); the `user_roles` scope migration (NI-17) | AG-Q-6(ii) |
| **Approval Workflow** | AG-Q-3, AG-Q-4, AG-Q-7, AG-Q-8, AG-Q-9, AG-Q-14, AG-Q-17, AG-Q-18; **the Approval Exception and default-L1 principals via `PO-AI1` (changed)** | Department membership (NI-2); self-approval (AH-Q-1 / AGX-13); AG-Q-10; NI-7; **default L1 with several Site Heads, and on a change of grant (AI-Q-2)** | **Conditionally yes** (unchanged): versioned per-project workflows, named assignees per level, Approval Exception, reassignment history, no SLA fields. Department membership modelled generically until AG-Q-11(f) | **No.** Eligibility still depends on AG-Q-11(f) and AH-Q-1. **The AG-Q-11(a) dependency is removed (changed)** | AG-Q-11(f), AH-Q-1, AG-Q-10 |
| **Lead / Follow-up / FR** | AC-57, AC-55 (X-42, X-43), V-23 statuses, AG-Q-12 ordering, repo AC-58 (most), V-4 FR limbs | V-4 FUT; W-1; W-4; AC-58 (a) and (b); AG-Q-16; carried families; **LC-22**; **AI-Q-1 (PH → PH exception only)** | **Partially** (unchanged): the activity stream, follow-up terminal states and owner/handler can proceed. **FR/FUT metric definitions cannot** | **Conditionally yes (changed):** owner/handler and AC-55 transfer directions are expressible as reporting tree ∧ project grant (LC-22). **The PH → PH exception is held fail-closed pending AI-Q-1** | V-4 (FUT), W-1, W-4, AC-58, AG-Q-16; AI-Q-1 (for the exception only) |
| **Transfer / Visibility / Security** | AC-51, AC-54, AC-56, AG-Q-9, AG-Q-15, AG-Q-18; **the AC-54 unavailability principal and the `PO-AE1·O.1` "team" via LC-22 (changed)** | V-10 residual; AG-Q-10; NI-11; NI-12; **LC-22**; **AI-Q-2 (when a customer's Site Head changes: the AC-51-e′ trigger)** | **Yes, conditionally** (unchanged): transfer events, custody intervals, per-customer effective history mode | **No.** V-10 and AG-Q-10 still decide what the projections must hide. **The AG-Q-11(a) dependency is removed (changed)** | V-10, AG-Q-10 |
| **CP / Commission** | AD-G-2; AC-48 (before payment, unpaid-only, non-claimant); `PO-X1`; AG-Q-6 revocation, paid offline, refund deduction, NOC scope; **Stage-2 and step-7 principals via `PO-AI1` (changed)** | AG-Q-6(i) NOC effect (GC-36); AGX-12; AG-Q-6(ii); AC-48 tranche "paid"; AC-53; T-4/T-5; §87(5), §87(6); **NI-18 (whether a Project Head may do Stage-2: AC-33, unbanded)** | **No** (unchanged): the shape of the CP Ledger is undecided | **No** (unchanged). Nothing is designed to secure yet. The principals themselves are now expressible | AG-Q-6(ii), AG-Q-6(i), AC-48, AC-53, T-4/T-5 |
| **Audit** | ACG-1…ACG-9 (locked, not re-asked); AG-Q-18 | AGX-10; AGX-11; NI-9; the four built `audit_events` collisions; ACG-INV-1…15; **ACG-5's "management jurisdiction" now definable via LC-22 (changed)**; **role-grant changes as audited admin actions (NI-20)** | **Analysis only** (unchanged). No schema change until the AGX-10/AGX-11 ledger items are confirmed | **No** (unchanged) | None as business questions |

---

## 7. Next PO Question

### 7.1 Is AG-Q-6(ii) still next? The candidates re-checked

03ah §4.11 queued AG-Q-6(ii) second, directly after AG-Q-11(a). This answer was checked for anything that should overtake it. The test is 03ah's criteria (§8.2 there), plus one this document adds: **does an interim default exist that is safe and cheap to reverse?**

| Candidate | Upstream of | Domains it blocks | Safe interim default? | Changed by `PO-AI1`? | Rank |
|---|---|---|---|---|---|
| **AG-Q-6(ii)**: transfer-cancellation consequences | The NOC trigger population (AG-Q-6(i)); the booking-cancellation edge (AD-G-16); CP commission linkage; the AGX-12 framing | Data Model in **two** domains (Hold/Booking/Unit post-Booked edges; CP/Commission) | **No.** NI-3: *"Wrong either way."* Either every upgrade penalises the CP and flips the customer to Booking Cancelled, or Unit B silently inherits commission. R-AH-1 is High / High | **No.** It only makes the initiator expressible (§3.5 row 5), and adds NI-19 as architecture follow-through | **1** |
| AG-Q-6(i): NOC per-booking effect | AGX-12; CP Ledger shape | CP/Commission | No | No | 2 (03ah §8.3: must cite GC-36, and comes after (ii)) |
| AG-Q-11(f): Sales Support / Helpdesk placement | AG-Q-3 replacement eligibility | Approval security, **jointly with AH-Q-1**. Answering (f) alone unblocks nothing | Yes: model department membership generically (03ah §7) | **No.** `PO-AI1` is about project roles, not departments. Being AG-Q-11's sibling makes it *adjacent*, not *more urgent* | 4 |
| **AI-Q-2**: role cardinality and succession | The default L1 when there are several Site Heads; the AC-51-e′ trigger; AI-Q-1 reading (b) | None outright | **Yes.** A grant model with no maximum; a uniqueness constraint can be added later without restructuring | New | 6 |
| **AI-Q-1**: the PH → PH anchor | One exception clause | Security of one transfer path | **Yes.** Fail-closed (deny as a peer transfer) | New | 7 (after AI-Q-2, whose answer may collapse reading (b)) |
| LC-22 / LC-23 | — | — | Ledger (record-keeping) | New | Not a question |

**Conclusion: AG-Q-6(ii) holds as next.** 03ah §8.3's reasoning is untouched by `PO-AI1`:
- GC-36 is an earlier answer on the NOC;
- AGX-12 is a live contradiction;
- (ii) must precede (i) because it fixes the NOC's trigger population and the shape of the CP/Commission domain.

The actors are now settled (03ag's *"the acts must be settled before the actors"* sequencing is satisfied from both ends). So the largest remaining blocker with **no safe default** is the unit-transfer consequence. No reason exists to reorder, and none is manufactured.

### 7.2 The question (exactly one)

> **Booked unit transfer: what the cancelled Unit A booking carries.**
>
> You have decided that when a Booked customer moves from Unit A to Unit B, BMexa records three things: the cancellation of the Unit A booking, a new booking for Unit B, and a linked transfer/adjustment record.
>
> You have also decided what an ordinary post-Booked cancellation does:
> - unpaid commissions and incentives are revoked;
> - already-paid commission is handled offline, and the builder may deduct it from the customer's refund;
> - the lead automatically becomes *Booking Cancelled*.
>
> The Master Spec (§26) says a unit transfer *"MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK"*, and that its *"financial and brokerage consequences must be explicitly determined."*
>
> **When the Unit A booking is cancelled as part of a Booked unit transfer, do the ordinary post-Booked cancellation consequences apply to it (the Channel Partner's unpaid commission and incentives revoked, any already-paid commission treated as recoverable, the Stage-2 allocation ended, and the lead moved to Booking Cancelled)? Or do the Channel Partner's commission, the Stage-2 allocation and the customer's Booked status carry over to the Unit B booking through the linked transfer/adjustment record, so that the Unit A cancellation has none of those consequences?**

### 7.3 Readings the evidence allows (neutral; none preferred)

| Reading | Evidence for it | Effect |
|---|---|---|
| (i) **An ordinary cancellation, in full** | The representation the PO locked (AG-Q-6) literally includes a *cancellation*. V-23 makes the lead status automatic on any post-Booked cancellation | Every upgrade revokes or claws back CP commission (R-AH-1). Already-paid commission becomes NOC-eligible. The lead flips to Booking Cancelled while the customer is still buying |
| (ii) **A carry-over, in full** | Spec §26 (*"must not automatically be treated as a normal cancellation for CP clawback"*); the red-team finding "Unit Transfer Clawback Bug" (chunk 414; 03ah §2.6); the *"linked transfer/adjustment record"* is the only hook the PO provided for carrying anything over | The linked record must carry the commission, the Stage-2 allocation and the paid-to-date position. The Unit A cancellation is excluded from revocation, the NOC and lead-status logic |
| (iii) **Neither by default: an authorized person decides per transfer** | Not directly supported. Recorded only because Stage-2 is already a Site Head judgement (AC-48) | It needs a named authority and a record of the decision. It would itself raise a follow-on authority question |

### 7.4 Why this question satisfies the criteria

| Criterion | Assessment |
|---|---|
| Genuinely unresolved | 03ah §4.1(ii) and NI-3. S1 lists only the NOC as remaining, but Spec §26 explicitly leaves this open (03ah B-7) |
| Not already answered | The **representation** is locked and is **not** re-asked. The **consequences** have no PO text, and the corpus has none after GC-47 (chunk 320, which restates the representation) |
| Upstream | It fixes whether transfers generate recoverable commission at all, and so the NOC's trigger population (AG-Q-6(i)) and the AGX-12 framing. It is also the post-Booked edge of the unit and booking machines |
| Preserves terminology | Booked, post-Booked cancellation, Channel Partner, Stage-2, linked transfer/adjustment record, Booking Cancelled |
| One clear decision | Ordinary cancellation against carry-over, for the Unit A leg. It does not bundle the NOC effect (queued at #2), the cross-project initiator (NI-19; architecture), or the Unit B approval path |

### 7.5 Updated residual queue (not asked; for sequencing only)

| # | Item | Note |
|---|---|---|
| — | ~~AG-Q-11(a)~~ | **Answered** (`PO-AI1`) |
| 1 | AG-Q-6(ii): transfer-cancellation consequences | **Asked** (§7.2) |
| 2 | AG-Q-6(i): NOC per-booking effect, confirming or replacing GC-36 | May discharge AGX-12 |
| 3 | AGX-12, if item 2 does not discharge it | — |
| 4 | AG-Q-11(f): Sales Support / Helpdesk placement | Unchanged by `PO-AI1` |
| 5 | AH-Q-1: self-approval | After source verification of §B.19 |
| 6 | **AI-Q-2**: role cardinality and succession | NEW. Safe interim default |
| 7 | **AI-Q-1**: PH → PH anchor | NEW. Fail-closed interim. After AI-Q-2 |
| 8 | AG-Q-10: reassignment history | — |
| 9 | AC-48: the tranche "paid" boundary | — |
| 10 | V-10 residual | — |
| 11 | Repo AC-58 (a), (b) | — |
| 12 | V-4 FUT | — |
| 13 | W-1 | — |
| 14 | W-4 | — |
| 15 | AG-Q-16 | — |
| 16 | Carried families | — |

**Separate record-keeping items** (not business questions):
- AGX-10 ledger;
- AGX-11 ledger;
- AGX-7 range reservation;
- LC-1…LC-23 (LC-20 updated; LC-22 and LC-23 new).

---

## 8. Design direction for downstream implementers

**`ARCHITECT RECOMMENDATION — NOT APPROVED`**

This section is written so that a Sonnet-tier implementer does not have to re-derive the reasoning. **It does not authorize implementation.** Authorization and tenant architecture are Layer-2 items (Master Spec §88; CLAUDE.md "Subagent Model Routing"). They require the project owner's explicit sign-off of this document first.

### 8.1 The shape of a project-role grant

- **One row per (tenant, employee, role, scope)**, replacing `user_roles`' `(user_id, role_id)` identity (NI-17; AD-01 §E.3, §L.3).
  - Scope for Site Head and Project Head is always **Project** (`PO-AI1·1`).
  - The scope column should admit Spec §08's other scopes (Global, Region), so that tenant-wide roles do not need a second table.
- **Uniqueness:** at most one **active** grant per (employee, role, project).
- **No other cardinality constraint yet** (AI-Q-2). In particular:
  - no "one Site Head per project" constraint;
  - no "one Project Head per project" constraint;
  - no constraint forbidding SH and PH together (Project E is legal).
- **Enforce the ≥1-Site-Head minimum (LC-23)** at two points: when a project becomes operational, and on revocation or deactivation (Spec §57). Revoking the last Site Head grant on an operational project should be refused, or should route to a Builder-Side Admin work item. It must never leave the project silently without one (R-AI-3).
- **Grants are appended, never overwritten** (Spec §08: *"Role changes must not destroy historical ownership information"*). Each grant carries:
  - granted-by and granted-at;
  - revoked-by and revoked-at;
  - a reason.

  Grant and revoke are audit events under ACG-1 and ACG-2.
- **Designation is a separate attribute of the employee**, used by the reporting tree. **Nothing reads authority from a designation** (`PO-AI1·7`; R-AI-5).

### 8.2 The evaluation rule (two gates, as AD-01 §E.3 already specifies)

1. **Capability gate.** Does the actor hold permission `P` through any live grant? Every row in §3.5 is a permission. Site Head and Project Head are only its **default holders** (`R2`; 03t corollary 1).
2. **Scope gate.** Is that grant scoped to a project containing the target's project?
   - **Project acts** (§3.5 rows 1–7, 14, 15) stop here.
   - **Management acts** (rows 8–10, 13) additionally require the target's handler or Rep to be in `Tree(actor)` (LC-22; `PO-AF1·B.1`–`·B.5`).
   - Row 1's reporting-tree alternatives ("Reporting Manager / manager above") use `Tree` in place of the grant.
3. **Never branch on the strings "Site Head" or "Project Head."** A tenant may rename them.
4. **Default grants must keep the locked asymmetries** (NI-18):
   - Pre-Booked cancellation initiation and the post-Pre-Booked "mark Available" go to the Site Head only.
   - Resale release, post-Booked initiation, Approval Exception, declaring a Rep unavailable, and the step-7 clash decision go to both roles.
   - Stage-2 goes to the Site Head. The Project Head's status is AC-33 and is left **not granted by default and not forbidden**, pending the PO.

### 8.3 Fail-closed and interim items

| Item | Interim behaviour |
|---|---|
| AC-55 PH → PH exception (AI-Q-1) | Denied, like any peer transfer. Surface it to the PO as a withheld permission (R-AI-4) |
| Several Site Heads on one project (AI-Q-2(i)) | Permitted by the model. The default L1 approver is chosen explicitly at chain configuration, never inferred |
| Succession (AI-Q-2(iii)) | A change of grant does **not** rewrite approval chains, lead ownership or history. Those change only through their own explicit acts (chain reconfiguration; AG-Q-8 reassignment; AC-55 transfer) |
| Who may grant these roles (NI-20) | A Builder-Side Admin permission. Delegable only by an explicit grant of that permission, and never implied by CRM configuration delegation |

### 8.4 Acceptance tests taken from the PO's own example

These are for the eventual authorization suite. They are written only after approval.

| Test | Expected |
|---|---|
| D is Site Head of B and D; Project Head of C; both on E; A is Site Head of C | All five grants coexist (this fails on the current `user_roles` primary key: NI-17) |
| D initiates a Pre-Booked cancellation on Project C | **Denied** (AG-Q-2 *"only Site Head"*) |
| A initiates a Pre-Booked cancellation on Project C | Allowed |
| D releases a cancelled unit for resale on Project C | Allowed |
| D resolves an Approval Exception on Project C | Allowed |
| D initiates a Pre-Booked cancellation on Project E | Allowed (D holds Site Head there) |
| D's designation (GM) confers any right on a project where D holds no role | **Denied** |
| A declares a Rep on Project C unavailable, where the Rep is outside `Tree(A)` | **Denied** (LC-22) |
| A PH → PH transfer on any project | **Denied** (fail-closed, AI-Q-1) |
| Revoke the only Site Head grant on an operational project | Refused, or routed (LC-23) |

---

## Annex A — Risk register (delta to 03ah Annex F)

| ID | Risk | Likelihood / impact | Status |
|---|---|---|---|
| R-AG-2 | Authorization built on role names, or on the wrong principal set | **Medium / High** (was High / High) | **Lowered.** NI-1 discharged. Still carried through NI-2, AI-Q-1, AI-Q-2 and NI-17 |
| R-AG-9 | Inventory blocked by non-expiring booking holds | Medium / Medium | Carried. **Compounded by R-AI-3** |
| **R-AI-1** (NEW) | NI-17 is "fixed" the wrong way: one role per project (e.g. "Site Head – Project B"), which is the pattern Spec §08 forbids; or grants are left tenant-wide (D becomes Site Head everywhere) | High / High (security; rework) | G-13; §8.1 |
| **R-AI-2** (NEW) | LC-22's consequence surprises operations: a project's Site Head cannot transfer the customers of Reps outside her reporting tree | Medium / Medium | LC-22 confirmation |
| **R-AI-3** (NEW) | A project with no Site Head (never assigned, or its last grant revoked on deactivation) has no permitted initiator for a Pre-Booked cancellation or a booking-hold release, so its units are stuck | Medium / High | LC-23; §8.1 |
| **R-AI-4** (NEW) | The fail-closed PH → PH default is read as a business rule, and a PO-granted permission stays withheld indefinitely | Low / Medium | AI-Q-1 in the queue; visible in §6 |
| **R-AI-5** (NEW) | Authority is inferred from designation (e.g. "all GMs are Site Heads") | Low / High | `PO-AI1·7`; §8.1 |
| **R-AI-6** (NEW) | Site-Head-only and SH-or-PH grants are merged into one default permission set, losing NI-18's locked asymmetries | Medium / High | §8.2 item 4 |

**Dependency spine (delta).**
- `AG-Q-11(a)` is **satisfied** for principal identification.
- `LC-22` → management-act scope (Lead; Transfer/Visibility; ACG-5).
- `AI-Q-2` → cardinality constraints; default L1; the AC-51-e′ trigger.
- `AI-Q-1` → one transfer exception.
- `NI-17` → the `user_roles` scope migration (AD-01 §L.3).
- `AG-Q-6(ii)` → unchanged, and next.

---

## Annex B — Architecture change register (named, not made; delta to 03ah Annex G)

| # | Artifact | Change needed | Class | Gated on |
|---|---|---|---|---|
| G-1 (updated) | `docs/BMEXA_MASTER_SPEC.md` §03 | List *Site Head* and *Project Head* as two project-level roles assigned per project, not designations. Remove the duplicated renamed "Sales Head". Apply Builder-Side Admin / Accounts / CRM department | PO (renames, `PO-AI1`) | LC-20 (editorial) only. **No longer gated on AG-Q-11(a)** |
| G-2 (updated) | Consolidated requirements §3 | "Site Head / Sales Head" becomes "Site Head" (project-level role). **Add a Project Head row.** Keep "Manager / Reporting Manager" as the reporting-tree role. Add the CRM and Marketing departments | PO + ARCH | LC-20; AG-Q-11(f) for Sales Support / Helpdesk |
| **G-13** (NEW) | `user_roles` in `packages/db/drizzle/0000_phase0_foundation.sql` (and its mirror `docs/architecture/schema-phase-0.sql`); `apps/api/src/middleware/require-permission.ts` | Project-scoped grants per §8.1. The primary-key change is AD-01 §L.3's "most dangerous migration". Two-gate evaluation per §8.2 | ARCH | PO approval of this document; Layer-2 sign-off; phase gates |
| **G-14** (NEW) | Permission catalogue (future) | One permission per §3.5 row, with default holders as in §8.2 item 4 | ARCH | As G-13 |
| **G-15** (NEW) | Authorization test suite (future) | §8.4 cases | ARCH (test-writer) | As G-13 |
| **G-16** (NEW) | `03ah` | Status notes: AG-Q-11(a) answered by `PO-AI1`; NI-1 discharged; NI-13 narrowed; LC-20 no longer waiting; §8.1 readings withdrawn; chunk-111 and chunk-191 citation corrections | Record | PO approval of 03ah and 03ai |
| **G-17** (NEW) | `03t`, `03u`, `03x` (the `PO-T2` / `PO-U1·4` / `PO-X1` authority text) | Note that "Site Head / Project Head" means `SH@P ∨ PH@P` and "Site Head" means `SH@P` (NI-21). AC-33's second limb is now consequential (NI-18) | Record | — |

---

## Annex C — Final validation

| Check | Result |
|---|---|
| The PO answer recorded verbatim and kept distinct from architect readings | Yes. §2.1 is verbatim. §2.2 quotes each limb. The illustrations at §2.3 and §3.5 are labelled ARCHITECT-DERIVED |
| NI-1 checked against the **exact** Spec §03 text before disposition | Yes. Line 70 and line 74 are quoted (§3.1). Grep confirms no other Spec occurrence |
| AC-55 "BOTH" examined for a new residual | Yes (§3.2). Governed by explicit locked text. The remainder is ledger (LC-22), with its consequence stated |
| The PH → PH exception re-read, not assumed | Yes (§3.3). The orchestrator's candidate reading was tested and found not supportable alone. VALIDATE-OPEN → AI-Q-1 |
| Cardinality treated as open unless locked | Yes (§3.4). Minimum as LC-23; the rest is AI-Q-2 |
| Every AG-Q-11(a)-blocked item re-checked | Yes (§3.6). Readiness updated per domain (§6) |
| AG-Q-11(f) untouched | Yes (§3.9; §7.5 #4) |
| Nothing already locked is re-asked | Yes. §7.2 asks only the consequence limb and leaves the representation alone |
| Counts at cluster level, and no exact total claimed | Yes (§5). 65 is a verified minimum; the stricter alternatives 66 and 67 are stated |
| Exactly one PO question | §7.2 |
| No implementation claimed; Layer-2 gating stated | "How to read"; §8 header; Annex B |
| Earlier-document errors reported, not silently fixed | §1.2 (the terminology-inventory provenance); §3.7 (the two chunk citations) |
| Files changed | This file only |

**This reconciliation is PROPOSED — NOT APPROVED.**
