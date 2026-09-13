STATUS: ANALYSIS ONLY — NOT AN ARCHITECTURE APPROVAL

# AD-01F — Lead / Client Business-Workflow Reconciliation

> This document resolves nothing, approves nothing, and modifies no prior decision record. It contains
> no SQL, no schema, no migration, no column/table/type name, no implementation and no UI/visual
> design. Under Master Spec **§88** every matter below sits in the **MUST ASK BEFORE DECIDING**
> column — canonical entities, relationships, authorization rules, source-of-truth rules, CP
> commission logic and audit requirements are all engaged. Per AD-01A §7: **delegation to an
> architect is not authorization.** This document is the asking.

| | |
|---|---|
| **Document ID** | AD-01F |
| **Type** | Reconciliation and architectural challenge. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C or AD-01E. None of those files is edited by this document. |
| **Scope** | Whether the current Lead/Client architecture represents the Product Owner's real sales operation, given the newly consolidated real-world requirements. Definitions of Lead, Activity, Project Interest, Dump, New, Success. History-visibility boundary. Re-engagement information requirements. Reporting facts. |
| **Explicitly out of scope** | **Q4 is not reopened** (Success = §20 Stage 3 Booked — AD-01A §8.2, confirmed below on new evidence). **N-2** (Blocked persistence) is not resolved. **M-2 … M-20** are not resolved; those directly implicated are named in [§17](#17-impact-on-ad-01-through-ad-01e) and left to their owners. The authorization permission set, the RBAC vocabulary, the schema, and every visual/UX question. |
| **Contains SQL / schema / migration / UI design** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (tenant isolation), **R2** (never branch on a role name), **R4** (masters not enums; semantics in columns), **R5** (nothing authorization- or report-relevant read from `custom_attributes`), **R6** (append-only audit; never edit history), **R12** (every claim traceable to this repository's own documents), and Spec **Rule 1** / consolidated-requirements **§1** (do not invent requirements — silence is recorded, not filled). |
| **Screenshot status** | The Product Owner's screenshots are treated **strictly as workflow/process evidence** per consolidated requirements §1, §24, §26. **No layout, styling, component, colour, typography or interaction recommendation is derived from them anywhere in this document.** |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PO EVIDENCE⟧** | A fact recorded by the Product Owner — in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, in `BMEXA_MASTER_SPEC.md`, or in the screenshot-derived workflow observations supplied with this task. **Evidence is not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A consequence or finding derived from the sources. Mine to defend. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **Recommended, subject to the project owner's explicit written approval. Not approved.** |
| **⟦BUSINESS DECISION REQUIRED — V-n⟧** | The sources are silent or in conflict, and nothing here fills the gap. Numbered **V-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U** namespaces. Consolidated in [§16](#16-business-decisions-required). |

**Terminology warning, stated once and load-bearing throughout.** The word *Lead* is used by the
Master Spec (§06: a Person × Project × process relationship), by the consolidated requirements
(§4: "Lead / Client Sales Record — long-lived sales record used by the team to work the customer
over time"), and by the reference CRM's screens ("Client"), to mean **three different things**.
Wherever ambiguity would mislead, this document says *§06 Lead*, *working record*, or *inquiry*
instead of *Lead*. That the three have been used interchangeably is not a drafting problem; it is
the substance of [§4](#4-contradictions-discovered) and [§5](#5-lead-definition-analysis).

---

## 1. Source baseline

### 1.1 Documents read in full for this reconciliation

| Source | What it contributes | Authority status |
|---|---|---|
| `docs/BMEXA_MASTER_SPEC.md` (97 sections; §06, §07, §08, §09, §10, §11, §12, §13, §14, §17, §20, §21, §26, §32, §33, §35, §39, §40, §41, §42, §43, §44, §45, §49, §52, §54, §56, §57, §58, §63, §64, §65, §68, §71, §72, §80, §86, §87, §88, §91, §95, §96, §97 re-read closely) | The canonical data model, the Person/Lead/Customer rule, the six-word state list, the booking lifecycle, the autonomy matrix. | **Source of truth for the current MVP** per its own preamble, subject to explicit supersession. |
| `docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` (32 sections) | **The primary new source.** Real-world operational behaviour from the PO's direct experience as Sales Rep / CP sales employee and Reporting Manager, and from working with Builder Sales Support, Customer Support and Accounts. | **"SOURCE CONSOLIDATED — READY FOR ARCHITECT REVIEW; NOT APPROVED FOR IMPLEMENTATION"** (its §32). Business-process source only; approves no architecture (its document-control table). |
| `docs/ENGINEERING_RULES.md` | R1, R2, R4, R5, R6, R12 and the guardrail list. | **Authoritative.** |
| `docs/architecture/03-lead-state-machine-decision.md` (AD-01) | Base state-machine analysis; §1.3's spec-silence register; §3's eight-concept separation; §6.1's transition table; §7's E-01…E-24; §9's reporting consequences; §10's Q1–Q16. | **PROPOSED — NOT APPROVED**, with Q1/Q4/Q7 decided by AD-01A §8. |
| `docs/architecture/03a-…-amendment.md` (AD-01A) | **§8 is the authoritative Product-Owner decision record** on Q1 (four-value lifecycle, Pending rejected), Q4 (Success = §20 Stage 3), Q7 (three-dimension Dump framework), the sync/verification split, the elimination of the assignment axis, and the naming of the **Orthogonal Lead Model** (§8.6). | **DECISIONS RECORDED.** Treated as binding input. |
| `docs/architecture/03b-…-dependency-order.md` (AD-01B) | Dependency graph over the thirteen open questions; §7.1's flagged contradiction over "Blocked". | **ANALYSIS ONLY — NO DECISIONS.** |
| `docs/architecture/03c-…-terminality-decision.md` (AD-01C) | Q5 (Alternative B — new successor Lead, mandatory typed reference) **— superseded by AD-01E**; Q6 (Success terminal; corrections outside the ordinary machine) **— standing**; T-1…T-12. | **PROPOSED — NOT APPROVED.** Q5 recommendation superseded. |
| `docs/architecture/03e-…-reengagement-visibility.md` (AD-01E) | Q5 re-analysed under the revival direction: revival sound **only if** scoped to same Person × same Project **and** the commercial episode becomes first-class; visibility keyed on entitlement (I1 participation ∪ I2 management breadth ∪ I3 conferral), never custody; U-1…U-20. | **PROPOSED — NOT APPROVED.** |
| `docs/architecture/01-bmexa-architecture-reconciliation.md` | M-blockers, read only to identify which are implicated. **None is resolved here.** | Blockers open. |

### 1.2 Screenshot-derived workflow evidence, and its exact standing

> **⟦PO EVIDENCE⟧** The Product Owner supplied screenshots of a prior/reference CRM. Per the
> consolidated requirements §1, §24 and §26, and per this task's explicit framing, they are
> **workflow and information-model evidence only**. They establish *what data was captured* and
> *what the workflow steps were*. They establish **nothing** about layout, hierarchy, colour,
> typography, component style or interaction design, and nothing in this document draws a design
> inference from them.

The workflow facts relied upon below, all of which are also recorded in the consolidated
requirements document (§8, §10, §11, §12, §15):

- **Work-queue filter chips:** All · Unassigned · All-Without-Dump · New · Pending Follow Up
  (PO-clarified as meaning **Overdue**) · Today's Follow-up · Future Follow-up · Today's Called Up ·
  Site Visit Done · Attempted · Dump · Successful.
- **Work-queue columns:** S.No. · **FUT** · Follow-Up action · Email action · SMS action · Enquiry
  Date · Source · Campaign · Customer · Mobile No · Email · Customer Remarks · Status · Project
  Name · Unit Type · Budget · Enquiry From · Enquiry Type · Response Type · Last Sub Response ·
  Dump Reason · Last Remarks · Last Followed Date · Next Follow-Up Date · **Booked Project** ·
  Enquiry Owner · Assigned To · Manager · Employee Code · IVR Number · Channel.
- **Detail view:** a single numbered **Timeline** per client (e.g. "Timeline (17)") mixing
  creation ("Client added to …", actor shown), **transfer** ("Transferred to Amit Tomar", actor is a
  manager, not the lead's own handler), a **system-computed metric rendered as an event** ("First
  response logged in 7 minutes"), and user follow-ups ("Qualified" / "Normal Follow UP" with a
  "Follow-up: [date]" line), each call carrying a Call Duration badge.
- **Activity capture:** one modal, Activity Type (e.g. Phone Call), and **three mutually exclusive
  action tabs — Follow Up / Success / Dump.** Follow Up requires Response Type + Sub Response +
  Remarks + a **mandatory** next follow-up date/time. Success requires only Remarks. Dump requires a
  Dump Reason.
- **Observed Sub Response vocabulary:** Project Details Shared, Prospect Generated, Normal Follow
  Up, Call Back Later, Cross Call Required, Cross Call Done, Exploring Other Projects, Site Visit
  Scheduled, Site Visit Done, Site Visit Cancelled, Site Visit Rescheduled, Site Visit No Show,
  Follow Up After Site Visit, Meeting Scheduled, Meeting Done, …
- **Observed Dump Reason vocabulary:** Budget Constraint, Location Issue, Already Purchased,
  Invalid/Wrong Number, Payment Plan Issue, Not Interested, Plan Changed, Planning to Buy Later,
  Real Estate Agent, Fake Lead, Loan Issue, Choose Competitor, Enquiry Not Done, CRM Test Query,
  Other.

### 1.3 What this document is measured against

Three tests are applied throughout, and where a prior recommendation fails one it is said so
plainly rather than adjusted quietly:

1. **Does the model represent what the sales operation actually does?** Not what is easiest to
   implement, and not what a prior AD document happened to propose.
2. **Does every claim trace to this repository's own documents?** (R12.) Where nothing traces,
   the silence is recorded as a **V-n**, never filled.
3. **Is each concept separated on AD-01 §3's own test** — *two concepts belong on one axis only if
   a record can never legitimately be in both at once*?

---

## 2. Real-world Product-Owner workflow

> **⟦PO EVIDENCE⟧** This section records the operation as the Product Owner describes it, before
> any architectural judgement. Nothing here is an approved requirement; it is the input the rest of
> the document is tested against.

### 2.1 The working unit, as the operator experiences it

Consolidated §4 states the shape directly: *"the Sales Rep thinks in terms of a **client-centric
working record** rather than a bare status row. Opening a client/lead record exposes customer data,
**project interests**, timeline, prior activity permitted to that user, current follow-up context,
and management information."* Its concept table names eight things and keeps them apart: Person /
Client · **Lead / Client Sales Record** ("long-lived sales record used by the team to work the
customer over time") · **Project Interest** ("a client may show interest in **multiple projects over
time**") · Activity / Timeline · Assignment · Next Action · Disposition / Lifecycle · History
visibility.

The screenshot evidence agrees and adds precision: the queue has **one row per client**, carrying
**one** Status, **one** Assigned To, **one** Manager, **one** Next Follow-Up Date, **one** FUT
count, **one** Last Sub Response and **one** Dump Reason — while simultaneously carrying a *Project
Name* and, separately, a *Booked Project*.

### 2.2 The daily loop

1. A lead/client arrives by website/digital/advertising, walk-in via Helpdesk, Channel Partner,
   round-robin, direct management assignment, or an IVR-related path (consolidated §5).
2. Creation writes a timeline event with time and source/assignment context (§5), and intake
   metadata is captured: inquiry date, source, campaign, IVR number/channel, inquiry type,
   customer-entered remarks (§5, §12).
3. A handler is assigned; the assignment is both a current fact and a historical event (§6).
4. The handler calls. **Time from creation to the first qualifying user action is measured** and
   surfaced ("First response logged in 7 minutes") (§9).
5. Each contact is recorded as a structured activity: activity type, **response type**,
   **sub-response**, remarks, **mandatory next follow-up date/time**, recorded time, actor (§10).
6. **FUT** counts *actual user-performed follow-ups only*; lead creation, assignment, transfer and
   system-generated first-entry events **do not increment it** (§9).
7. The record sits in a derived operational bucket — **Today / Future / Overdue** — computed from
   the next-action time. *Pending* is the old system's word for **Overdue**; BMexa uses only
   *Overdue* (§11, §27).
8. The loop ends in one of three ways, and they are mutually exclusive in the capture surface:
   **Follow Up** (schedule the next one), **Success** (book), or **Dump** (reason + remarks).

### 2.3 Management actions on top of the loop

- **Assignment and transfer** are first-class operations *and* historical events, individually and
  in bulk, within the manager's reporting hierarchy (§6, §16).
- **Transfer carries a management decision about history:** *"Transfer with history — management may
  deliberately give the receiving handler access to the historical timeline."* / *"Transfer without
  history — management may deliberately give the receiving handler **a fresh working view without
  prior employee conversation/follow-up history**."* (§6, §16, §17.)
- **Dumped or non-responding leads may be redistributed by a manager to a fresher for another
  calling attempt** (§7). This is management-initiated work redistribution; the consolidated
  document lists it as a *separate* bullet from the customer regenerating an inquiry.
- **A returning client's new inquiry may attach to the existing record**, *"the client may then show
  more than one project interest on the same record,"* and the timeline records the regeneration
  **including the relevant project context** (§7, §13).
- **History visibility is an authorization decision,** not a UI affordance: *"history visibility must
  be enforced at authorization boundaries and not rely on the UI merely hiding old rows"* (§6);
  *"must not be implemented solely by hiding UI elements"* (§17).

### 2.4 The downstream boundaries the PO supplied from Sales Support and Accounts

- **Booking (§14, §18).** The rep records a booking/EOI outcome rather than an ordinary follow-up;
  project/unit context is entered; inventory is held authoritatively for 20 minutes where required;
  the online booking form becomes the digital source. **Sales Support verifies the physical signed
  form and KYC *against the booking already in BMexa* and approves it — with no duplicate re-entry.**
  Approval enables the customer-ledger process.
- **Payments (§19).** *"CRM-recorded payment ≠ Accounts-verified money received."* Accounts
  independently checks bank credit; only approved receipts become authoritative ledger money;
  bounced/not-credited entries are recorded as exceptions and must not present to the customer as
  confirmed receipts.
- **Source principles (§31)** — read as near-constitutional: model the real operation first; keep
  identity, lifecycle, activities, next actions, assignment, attribution and history visibility
  conceptually separate; preserve historical truth; **do not treat system-generated events as
  equivalent to user-performed sales work**; do not duplicate data entry where a downstream team only
  verifies; do not treat a recorded payment as verified money; management controls require real
  authorization; screenshots are workflow evidence, not visual design.

---

## 3. Current architecture assumptions

> **⟦ARCHITECT ANALYSIS⟧** Stated as a checklist, because the reconciliation is only meaningful if
> what is currently assumed is written down exactly. Each row says where the assumption comes from
> and whether the new evidence leaves it standing.

| # | Assumption currently carried by AD-01 … AD-01E | Source | Status after this reconciliation |
|---|---|---|---|
| **A-1** | A Lead is a **Person × Project × sales-process** relationship, and the same Person enquiring about a different project is **two Leads**. | §06; AD-01 **E-09**; AD-01C §2.1; AD-01E §3.1 (which calls this *"not a limitation the architect is imposing; it is the existing model"*) | **CONTRADICTED** by consolidated §4, §7, §13 and the observed one-row-per-client queue. See [§4 C-1](#c-1--the-lead-scope-contradiction-highest-impact). |
| **A-2** | The persisted Lead Lifecycle is **four values: New · Follow-up · Success · Dump**, at the Lead level. | AD-01A **§8.1** (PO-decided) | **Three of four stand. "New" is challenged** as to *scope* and *persistence*: consolidated §11 itself defers it (*"exact lead-vs-handler scope must be finalized"*). See [§4 C-3](#c-3--new-is-scoped-to-a-working-context-not-to-the-record) and [V-5/V-6](#16-business-decisions-required). |
| **A-3** | Today / Future / Overdue are **derived** operational buckets, never persisted lifecycle states; *Pending* is not a fifth state. | AD-01A §8.1 | **CONFIRMED independently** by consolidated §11 and §27, including the PO's own statement that *Pending* and *Overdue* are the same thing and only *Overdue* survives. |
| **A-4** | Success = **§20 Stage 3 Booked**, after builder-side verification; Booking has its own lifecycle which the Lead Lifecycle must not absorb; a cancelled booking never rewrites Success. | AD-01A §8.2 (PO-decided); AD-01C §3.2 | **CONFIRMED and reinforced** by consolidated §14 and §18. **Not reopened.** One consequence sharpened — see [§11](#11-lead-vs-successbooking) and **V-22**, **V-23**. |
| **A-5** | Dump reasons are classified on **three system-owned semantic dimensions** — validity class, responsibility locus, recoverability posture — with values remaining tenant master rows; a reason is mandatory; the historical reason is preserved, never rewritten. | AD-01A §8.3 (PO-decided) | **CONFIRMED and empirically validated**: every observed real-world reason value maps onto the three dimensions. See [§10.3](#103-the-observed-reason-vocabulary-validates-ad-01a-83). |
| **A-6** | Transport sync and business verification are **separate concepts**; successful sync never implies verification. | AD-01A §8.4 (PO-decided) | **CONFIRMED and generalised**: consolidated §18 and §19 show the identical principle operating at two further boundaries (Sales Support document verification; Accounts payment verification). *Recorded ≠ verified* is a product-wide rule, per §31. |
| **A-7** | There is **no persisted assignment-state axis**; Owner, Handler and the Assignment Log carry assignment information. | AD-01A §8.5 (PO-decided) | **CONFIRMED and strengthened.** The new evidence adds obligations *to the Assignment Log* (the with/without-history decision, the transferring actor, bulk-transfer grouping), which is exactly what §8.5 directed. |
| **A-8** | Q5: **revive the existing Lead** on re-engagement after a rightful Dump, scoped to same Person × same Project, conditional on the **commercial episode becoming a first-class bounded unit** carrying its own lifecycle value, source, disposition, reason, claims, handler and activities. | AD-01E §3.6, §4.5, §11 R1–R3 | **CHALLENGED.** The requirement AD-01E identified is real; the entity it proposed is not the one the business has. See [§12](#12-lead-vs-regenerationre-engagement) and [§15](#15-architect-recommendation). |
| **A-9** | Historical visibility is keyed on **entitlement** — participation ∪ management breadth ∪ conferral — evaluated per **(viewer, lead, episode)**, fail-closed, **custody is not an input**. | AD-01E §6.3, §11 R4 | **PARTLY CONFIRMED, PARTLY CONTRADICTED.** The custody-is-not-entitlement principle is right and the new evidence strengthens it. The **boundary unit is wrong** (episode vs custody interval) and the **union-without-deny shape cannot express "transfer without history"** to a prior participant. See [§9](#9-lead-vs-history-visibility). |
| **A-10** | Assignment provenance is necessary **if and only if** U-7 is answered "yes" (explicit assignment confers history on a non-participant). | AD-01E §7.1, §11 R5 | **U-7 is effectively answered "yes" by the new evidence** (consolidated §6, §16: management *deliberately* decides), which makes provenance necessary — **and supplies a conferral shape AD-01E did not consider.** See [§8.4](#84-the-third-conferral-shape-the-new-evidence-supplies). |
| **A-11** | Attribution claims and commission must key on the bounded commercial unit, not on the Lead. M-5's "Lead or Person" question gains a third candidate. | AD-01E §11 R6, U-15 | **CONFIRMED as a requirement; the candidate changes.** The bounded commercial unit the evidence names is the **inquiry / project interest**, not an abstract episode. M-5 becomes a **four**-way question. **V-16.** |
| **A-12** | A single Lead has one source, one campaign, one terminal reason, one project — because a Lead is one engagement with one project. | Implicit throughout AD-01, AD-01C §2.2 D5/D9 | **CONTRADICTED at the record level, upheld at the inquiry level.** The observed record carries one *current* value of each because it is a denormalised working row, not because only one ever existed. |
| **A-13** | The audit log is not the business-history source; a durable business-level state history is required and must outlive R6's hot window. | AD-01 §8.3; R6 | **CONFIRMED** by consolidated §25 (*"timeline/business history should be durable enough for conversion and operational analytics; generic security audit logs are not the sole business-history source"*). |
| **A-14** | The Orthogonal Lead Model (AD-01A §8.6) holds — lifecycle persisted; action conditions derived; activity history separate; assignment log-based; attribution on the claim entity; sync not a lead axis; verification persisted; booking independent; dump classified. | AD-01A §8.6 | **The separation survives fully.** What the new evidence changes is **the level at which each axis attaches** — record, inquiry, or custody interval. That is a material refinement, not a refutation. See [§15.5](#155-what-this-does-to-the-orthogonal-lead-model). |

> **⟦ARCHITECT ANALYSIS⟧ The single structural observation that organises everything below.**
> AD-01 through AD-01E were written against a model in which **one record is simultaneously the unit
> of work, the unit of commerce, and the unit of visibility.** Every difficulty those documents
> struggled with — AD-01C's twelve dimensions, AD-01E's forced episode, AD-01E's intra-record
> authorization boundary, U-1's undecidable discriminator — is a symptom of loading three different
> jobs onto one entity. The new Product-Owner evidence does not merely add requirements; **it shows
> that the real operation already separates these three, and names two of them.**

---

## 4. Contradictions discovered

> **⟦ARCHITECT ANALYSIS⟧** Ten. Ordered by how expensive each is to get wrong, on the same standard
> AD-01 §2 applied. Each states the two positions, cites both, and says what turns on it.
> **None is resolved here** where the sources genuinely conflict; each yields a **V-n**.

### C-1 — The Lead-scope contradiction *(highest impact)*

- **Position 1 — §06 / AD-01 E-09 / AD-01C §2.1 / AD-01E §3.1.** *"Sales Lead — A relationship
  between a Person, Project, and sales process."* One Person interested in three projects is three
  Leads. AD-01E §3.1 relies on this so heavily that it calls cross-project re-engagement *"already
  a new Lead, settled by §06 and E-09 … not a limitation the architect is imposing; it is the
  existing model."*
- **Position 2 — consolidated §4, §7, §13, plus the observed queue.** *"Project Interest — a
  project/property interest associated with **the client record**; a client may show interest in
  **multiple projects over time**."* *"The client may then show more than one project interest **on
  the same record**."* *"The client record can contain customer details **and multiple project
  interests**."* The observed queue carries one Status, one Assigned To, one Next Follow-Up Date and
  one FUT per **client**, not per project.

**⟦ARCHITECT ANALYSIS⟧** These cannot both describe the same entity. Under Position 1, a client
interested in three projects produces three queue rows, three next-action commitments, three
statuses and potentially three handlers; the rep makes **one** phone call and must record **three**
follow-ups, and FUT, first-response and workload fragment three ways. Under Position 2, project
becomes an attribute of an *interest* inside the record, and every project-scoped report (§08
authorization, project conversion, project pipeline) loses its key.

Both positions are Product-Owner-sourced. The consolidated document's own §28 lists *"Exact
definition and reporting treatment of multiple project interests on one Lead"* and *"Exact
definition of a genuinely new commercial sales opportunity versus a re-engagement/revival"* as
**explicitly open**, and its §30 requires that *"architectural contradictions must be resolved
explicitly and recorded in dated decision documents."*

**What turns on it:** the meaning of Lead; whether AD-01E's episode model stands or is replaced;
where attribution attaches (M-5, U-15); what the funnel keys on (U-6); how §08 project scoping is
evaluated; whether revival is even the right frame for re-engagement. **This is the root of the
whole line.** → **V-1**, **V-2**, **V-3**, **V-24**.

### C-2 — History restriction is a *transfer* control, not a *revival* control

- **AD-01E** scopes restricted visibility entirely to revival: *"a new handler must not see the
  historical record from **the previous handling episode**"*, and §3.3 argues the episode is forced
  because *"a visibility rule cannot be scoped to a unit that does not exist."*
- **Consolidated §6, §16, §17** list *transfer with history* and *transfer without history* as
  ordinary manager transfer options: *"Manager can open a lead and transfer it to an eligible sales
  representative … Transfer may include a management decision about whether prior history is visible
  to the receiving employee."* Nothing conditions this on the lead having been Dumped, revived, or
  re-engaged.

**⟦ARCHITECT ANALYSIS⟧** The control the Product Owner actually describes operates on **any**
transfer, including a transfer of a live, actively-worked, never-dumped lead. AD-01E's episode
boundary cannot express that case: a mid-Follow-up transfer crosses no episode boundary, so there is
no "previous episode" to restrict. **AD-01E's boundary unit is therefore too coarse in one direction
and irrelevant in the other.** The unit the evidence points at is the **custody interval** — the span
between one assignment and the next. → **§9**, **V-7**, **V-8**.

### C-3 — "New" is scoped to a *working context*, not to the record

- **AD-01A §8.1** fixes *New* as one of four **Lead-level** lifecycle values, and **AD-01 §6.1**
  forbids *Anything → New* on the ground that *"New means never worked. Once a disposition exists,
  that fact is historical and §07 forbids destroying history by rewriting state."*
- **Consolidated §11** defines it differently and flags the gap itself: *"New — **No qualifying user
  follow-up yet in the relevant current working context**; exact lead-vs-handler scope must be
  finalized."*
- **Consolidated §17** makes the case concrete: transfer without history means the receiving
  employee *"works the record as a **fresh context**"*.

**⟦ARCHITECT ANALYSIS⟧** A record with a seventeen-entry timeline can legitimately present as *New*
to a handler who has just received it without history. Under a Lead-level lifecycle that is either a
forbidden backward transition or a lie. Under a context-scoped predicate it is simply true. Note
that AD-01 §9.1 **already** defines *Worked* as history-derived (*"leads that have ever left New"*),
which means *New* is the one lifecycle value the product already computes rather than trusts. →
**§5.5**, **V-5**, **V-6**.

### C-4 — AD-01E's same-Project scoping premise

**AD-01E §3.1** states that the revival direction *"is necessarily scoped to same Person × same
Project"* and that cross-project re-engagement is a different Lead by existing rule. **Consolidated
§7 describes the opposite behaviour in the real operation**: after a Dump, *"if the client later
regenerates an inquiry, the same underlying client/lead history may remain connected. **The client
may then show more than one project interest on the same record.**"* And §8's timeline list includes
*"Customer regenerated/renewed inquiry **for another project**"* as an event **on the record's own
timeline**.

**⟦ARCHITECT ANALYSIS⟧** AD-01E's **D3** — which it called *"fatal to revival as a universal rule
but not as a scoped one"* — rests on this premise. If C-1 resolves toward the client-centric
reading, D3 does not bite at all, and the conditional structure of AD-01E §3.6 and §11 R1 changes
materially. **This does not make AD-01E wrong; it makes AD-01E's premise a live question rather
than settled ground.** AD-01E itself was explicit that it treated §06/E-09 as existing model rather
than as a decision it was making — which is exactly why the new evidence reaches it.

### C-5 — Both AD-01C and AD-01E may be answering a mis-scoped question

**⟦ARCHITECT ANALYSIS⟧** AD-01C asked *"reopen the Dumped Lead, or create a successor Lead?"*
AD-01E asked *"revive the Lead, and if so how is the prior engagement bounded?"* **Both presuppose
that the thing which closed is the Lead.** The Product Owner's description does not: the client
record stays alive (it is the durable relationship; §4 calls it *"long-lived"*), and what closes is
an *engagement about a project*. On that reading the question *"revive or create?"* has a third
answer neither document considered — **neither; append a new inquiry to a record that never
closed.**

This is stated as a challenge, not a conclusion, because it is downstream of **V-1**. If V-1
resolves toward §06's Person × Project Lead, AD-01C's and AD-01E's framing is correct and this
objection evaporates.

### C-6 — Management-initiated re-work of a Dumped record is modelled nowhere

**Consolidated §7** records, as a distinct bullet from customer regeneration: *"A manager may
redistribute dumped/non-responding leads to a fresher for another calling attempt."*

**⟦ARCHITECT ANALYSIS⟧** Check this against every mechanism the prior documents provide:

| Candidate mechanism | Does it fit? |
|---|---|
| **AD-01E revival** (§1.1, §4.5) | **No.** Revival is triggered by *the customer re-engaging*. Here **no customer event has occurred at all** — the customer is still not responding. |
| **AD-01C Q6-S3 correction** (§3.4) | **No.** A correction asserts *"the Dump never happened as a business fact."* Here the Dump was correct and remains true. AD-01C §3.4's own rule — *"a correction is not a re-engagement, and a re-engagement is not a correction"* — excludes both. |
| **AD-01C Q5-B successor lead** (§2.5) | **No.** No new engagement exists to succeed; management is re-attempting the *same* closed one. |
| **Assignment/transfer alone** (AD-01A §8.5) | **Partially.** The reassignment is expressible. But the record is Dumped, so it is out of every work queue, has no next action, and §13's mandatory next-action date has nowhere to attach — the fresher receives a record they are expected to call that the system says needs no follow-up. |

**Neither AD-01C nor AD-01E models this, and it is a routine operation in the described business.**
It is the clearest evidence that *Dump* is carrying two jobs. → **§10**, **V-11**, **V-12**,
**V-13**.

### C-7 — The observed *Success* action versus the approved Success milestone

**Observed workflow:** the rep's capture surface offers three mutually exclusive outcomes — Follow
Up / **Success** / Dump — and **Success requires only Remarks**. **Approved decision (AD-01A §8.2,
not reopened):** a lead becomes Success only at **§20 Stage 3**, after builder-side verification;
**consolidated §14/§18** route that verification through the booking workflow and Sales Support
approval.

**⟦ARCHITECT ANALYSIS⟧** Under the approved decision the rep's action **cannot** set lead Success.
It starts the booking workflow (§14 steps 1–3). Two consequences follow and neither is currently
answered:

1. **AD-01C's T-6 ("who or what sets Success — handler assertion or system derivation") acquires new
   evidence pulling toward system derivation** (§18 step 6: *"Sales Support approval of the
   CRM-recorded booking"*), while the observed reference system was handler-asserted. → **V-22**.
2. **The lead's operational condition between booking initiation and approval must be defined.**
   AD-01A §2.1 cost 3 already named this and answered it with *"remains Follow-up, with its
   waiting-on qualifier set to the internal builder verification function"* — which depends on
   **N-2**, still open. **N-2 is therefore on the critical path for the booking workflow, not only
   for §58 escalation as AD-01B X-6 recorded.** → **V-23**. *(N-2 is not resolved here.)*

### C-8 — One timeline, or several event classes?

**Consolidated §8** presents a single chronological timeline containing creation, assignment,
first user follow-up, response/sub-response, remarks, next follow-up, subsequent follow-ups,
transfer events, regeneration, success/booking, dump, and *"other system-generated events"* — then
immediately requires that *"the system should distinguish user-performed activities from
system-generated timeline events"*, reinforced by §31 (*"do not treat system-generated events as
equivalent to user-performed sales work"*) and §9 (FUT excludes them).

**⟦ARCHITECT ANALYSIS⟧** This is not a contradiction in the requirement; it is a contradiction that
arises only if the single timeline is read as a single *storage* concept. The task asked that this
be tested rather than restated — it is, in [§7](#7-lead-vs-activitytimeline), and the test shows
that three of the observed timeline entry classes **already have canonical homes elsewhere** (§06
Assignment Log) or **must not be stored at all** (the computed first-response entry). → **§7**.

### C-9 — Multiple project interests versus §08 project-scoped authorization

**§08** requires scoped access with *Project* as a named scope, and **AD-01C D3** relied on the
lead's project to evaluate it (*"a record that changes project mid-life changes who may see it,
retroactively, for its whole history"*). A client-centric record holding interests in Project A and
Project B **has no single project** to evaluate against.

**⟦ARCHITECT ANALYSIS⟧ This is the finding that most changes the economics of AD-01E's
recommendation.** AD-01E §2.3 and §8 argue at length that the successor-lead model delivers
restricted visibility *for free* because every boundary stays record-level, and that revival's
distinguishing cost is that it creates *"the product's first intra-record authorization boundary."*
**If a working record can hold interests in more than one project, §08 project scoping is already an
intra-record boundary — regardless of revival, regardless of episodes, and regardless of which Q5
answer is chosen.** AD-01E §8's claim that *"nine of the twelve rows require no new work"* under the
successor model does not survive C-1 resolving toward the client-centric reading. → **V-24**.

### C-10 — Intake metadata versus the do-not-build list

**Consolidated §5 and §12** list IVR number and channel metadata among captured fields.
**§65/§86** forbid building a *"5-digit IVR system"* / *"AI voicebot"* during MVP, and consolidated
§29 repeats *"AI voicebot/IVR as a core MVP requirement"* as a non-goal.

**⟦ARCHITECT ANALYSIS⟧** Recording an IVR-originated number and channel as **lead intake
provenance** is not the same as building telephony or IVR infrastructure, and conflating them would
either drop a real attribution fact or license a forbidden capability. The distinction needs to be
drawn explicitly rather than assumed either way. → **V-26**. *(Minor relative to C-1…C-9, recorded
so it is not discovered during implementation.)*

### C-11 — Confirmations worth recording, because a reconciliation that reports only conflicts is not a reconciliation

| Prior position | New evidence | Effect |
|---|---|---|
| AD-01 §2.3: *"Pending"* is ambiguous across at least three unrelated conditions | Consolidated §11: *"'Pending' and 'Overdue' mean the same historical thing. BMexa will use ONLY the term 'Overdue'."* The observed chip labelled "Pending Follow Up" is Overdue. | **AD-01's diagnosis confirmed exactly.** The ambiguity was real and the PO has now removed the word. |
| AD-01A §8.1: Today / Future / Overdue derived, never persisted | Consolidated §11, §27 | **Confirmed.** |
| AD-01A §8.3: three-dimension Dump framework | Observed 15-value reason vocabulary maps cleanly onto all three dimensions ([§10.3](#103-the-observed-reason-vocabulary-validates-ad-01a-83)) | **Empirically validated against real operational data.** |
| AD-01A §8.4: sync ≠ verification | Consolidated §18, §19 show the same principle at two more boundaries | **Confirmed and generalised.** |
| AD-01A §8.5: no persisted assignment axis | Consolidated §6, §16 load more onto the Assignment Log, exactly as §8.5 directed | **Confirmed.** |
| AD-01E §6.1: custody is the wrong kind of fact for entitlement | Consolidated §17's scenario table never keys on "is this the current handler" | **Confirmed** — and see §9 for where AD-01E's model nonetheless needs correction. |
| AD-01 §3's eight-concept separation | Consolidated §31: *"Keep Lead identity, lifecycle, activities, next actions, assignment, attribution and history visibility conceptually separate"* | **Confirmed almost verbatim by the Product Owner.** |

---

## 5. Lead definition analysis

### 5.1 The three candidate models, tested against the operation rather than against implementation cost

> **⟦ARCHITECT ANALYSIS⟧** Each model is stated at its strongest, then tested against seven things
> the described operation actually does. AD-01E's model is **not** given the benefit of incumbency.

**Model 1 — `Person → Lead → Project Interest → Activities/Timeline → Assignment`.**
The Lead is the client-centric working record. Project Interest is a child. One timeline, one
handler, one next action per record.

**Model 2 — `Person → Lead → Sales Episode → Project Interest → Activities`.**
AD-01E's shape, extended with project interests below the episode. The Lead is still §06's
Person × Project relationship (or a client record); the episode is the bounded engagement; interests
sit inside episodes.

**Model 3 — derived from the evidence: `Person → Client Sales Record (work unit) → Inquiry /
Project Interest (commercial unit) → Activities`, with `Custody Interval (visibility unit)` as a
parallel child of the working record.**
Three units, each carrying exactly the facts whose lifetime and authorization it matches.

| # | What the operation does | Model 1 | Model 2 | Model 3 |
|---|---|---|---|---|
| **T1** | One call to one client produces **one** follow-up record, one FUT increment, one next-action commitment, regardless of how many projects are in play (consolidated §4, §9, §10; observed one-row-per-client queue) | **Yes** | **No** under §06 scoping — N leads, N queue rows; **Yes** only if the Lead is already client-centric, at which point the episode is doing nothing T1 needs | **Yes** |
| **T2** | A returning client's inquiry **for another project** attaches to the same record and appears on its timeline (§7, §8, §13) | **Yes** | **No** — AD-01E §3.1 explicitly routes cross-project to a new Lead | **Yes** |
| **T3** | Each engagement carries **its own** enquiry date, source, campaign, channel, enquiry type, requirement (unit type, budget) — observed as distinct captured fields | Yes **if** those live on Project Interest, not on the Lead | Yes, on the episode | **Yes**, on the inquiry — and the evidence supplies the field list |
| **T4** | Conversion, source quality and CP attribution must key on **the engagement that converted**, not on the relationship (AD-01C D4/D5/D6; AD-01E U-15) | Yes **if** Project Interest is the key — which makes Project Interest the commercial unit | Yes, on the episode | **Yes**, on the inquiry |
| **T5** | A manager may hand a live record to a new handler **without prior history** (§6, §16, §17) | Not expressible — nothing bounds "prior" | **Not expressible** — an in-flight transfer crosses no episode boundary (C-2) | **Yes** — the custody interval is exactly "what happened while someone else held it" |
| **T6** | A manager may **redistribute a dumped record to a fresher** with no customer event (§7) | Expressible as reassignment; the dumped record's queue condition is still undefined | **Not modelled** (C-6) | Expressible: the *inquiry* stays closed; a new custody interval opens on the still-live working record; the queue condition is a stated decision, not an accident |
| **T7** | §08 **project-scoped** authorization and project-level reporting must remain evaluable | **Weakened** — no single project on the record; must be evaluated per interest (C-9) | Strong under §06 scoping; weakened the moment interests are plural | **Weakened in the same way as Model 1, and explicitly** — the boundary moves to the inquiry, and that must be approved rather than discovered |

**⟦ARCHITECT ANALYSIS⟧ What the table shows.** Model 2's episode earns its place on **T3** and
**T4** only — and on both of those, **the inquiry does the same job with the advantage that the
business already has it, names it, dates it and sources it.** On **T2**, **T5** and **T6** the
episode is either irrelevant or actively wrong. On **T1** the episode is neutral: whatever fixes T1
is the *level at which the working record sits*, and the episode does not address that at all.

> **The episode was AD-01E's answer to a real question — "what bounds one engagement?" — asked at a
> moment when the only available evidence was the Lead record itself. The new evidence answers the
> same question with an entity the operation already runs on.**

**T7 is the one place Model 3 costs something real and it is recorded without softening:** moving
project scope from the record to the inquiry converts §08's project boundary into an intra-record
boundary. That cost is **unavoidable under any model that permits plural project interests**
(C-9), including Model 1; it is not a cost of choosing Model 3.

### 5.2 The definition — Lead / Client Sales Record

> **⟦ARCHITECT RECOMMENDATION — conditional on V-1⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. Conditional: if **V-1** resolves toward §06's Person × Project Lead,
> this definition does not stand and AD-01E's model becomes the correct answer instead.)*
>
> **A Lead (Client Sales Record) is the durable, tenant-scoped sales working record for one
> Person's commercial relationship with this builder.** It:
>
> | Facet | What the Lead is, and is not |
> |---|---|
> | **Identity** | Bounded by the **Person** within the tenant, not by a project. It is not the Person (§07: identity and sales relationship are different records) and it is not a status on the Person. It is the *relationship-in-progress*. |
> | **Continuity** | **Long-lived** (consolidated §4). It is not created by an inquiry and is not ended by a disposition; it persists across engagements, handlers, dumps and bookings. What ends is an *inquiry*, not the record. |
> | **Project interests** | Holds **one or more** Project Interests / Inquiries. The project is an attribute of the interest, never of the record (**V-2**, **V-3**). |
> | **Lifecycle** | Carries the **operational** condition the handler and the queue reason about — actively worked, closed-to-this-queue, or converted. It does **not** carry commercial outcome; that is the inquiry's (**V-3**). |
> | **History** | Owns **one ordered timeline** of typed events, and one durable business-level state/disposition history that outlives R6's hot window (AD-01 §8.3; consolidated §25). Nothing on it is ever rewritten (§07, R6, consolidated §31). |
> | **Re-engagement** | Does not require revival, because it does not close. A returning client generates a **new inquiry on the existing record** (§7, §13). The open question is not *revive or create* but *is this inquiry a new commercial opportunity* (**V-14**). |
> | **Transfer** | Is the unit of assignment, transfer and bulk transfer (§6, §16). Handler and Owner remain two references (§10); assignment history is the Assignment Log (§06, AD-01A §8.5). |
> | **Reporting** | Is the unit of **workload** — FUT, follow-up volume, queue membership, responsiveness, handler performance. It is **not** the unit of **conversion**; conversion keys on the inquiry (**V-17**). |
>
> **It is emphatically not:** the unit of commercial outcome, the unit of source credit, the unit of
> CP attribution, the unit of project-scoped authorization, or the unit of historical visibility.
> Each of those has a different lifetime and a different authorization rule, and AD-01 §3's own
> test — *two concepts belong on one axis only if a record can never legitimately be in both at
> once* — separates them.

### 5.3 The definition — Inquiry / Project Interest *(the commercial unit)*

> **⟦ARCHITECT RECOMMENDATION — conditional on V-1/V-2⟧**
>
> **An Inquiry is a dated, sourced, project-contexted expression of interest by the Person.** It
> carries: origination time; source, campaign, channel and enquiry-from path; enquiry type; the
> requirement profile in play (project, unit type, budget band); its attribution claim set; its own
> outcome — open, converted, or closed-with-a-classified-reason — and, when closed, its **preserved**
> reason (AD-01A §8.3). A **Project Interest** is the durable statement *"this client is interested
> in this project"*; whether it is the same object as the inquiry or an aggregate over one-or-more
> inquiries on the same project is **V-2**.
>
> **This is the entity AD-01E called the commercial episode.** The differences are not cosmetic and
> are stated so the substitution is judged, not assumed:
>
> | | AD-01E's episode | The inquiry |
> |---|---|---|
> | Evidential basis | Derived by the architect as *forced* (§3.3); never named by the business | Named, dated, sourced and field-listed by the Product Owner (§5, §12, §13) and observed in the operation |
> | Boundary | Opened by revival, closed by a terminal disposition on the Lead | Opened by an expression of interest, closed by its own outcome |
> | Project | Inherits the Lead's single project (AD-01E §3.1) | **Carries its own** — which is what makes T2 expressible |
> | Purpose it served | Bounded commerce **and** bounded visibility | Bounded commerce **only**; visibility is the custody interval's job (§9) |

### 5.4 The definition — Custody Interval *(the visibility and work-context unit)*

> **⟦ARCHITECT RECOMMENDATION⟧** **A Custody Interval is the span during which one handler holds the
> working record** — opened by an assignment or transfer event, closed by the next. It is not a new
> axis and not a new source of truth: it is the **interval form of the Assignment Log entries
> §06/§10/§57 and AD-01A §8.5 already require**, plus the one fact the new evidence adds to them —
> the management decision, made at the moment of transfer, about whether prior history travels with
> the record (§6, §16, **V-7**, **V-8**).
>
> It is the natural scope for: **"New"** (**V-5**); per-handler first-response (**V-20**); per-handler
> FUT and workload; and handler-facing historical restriction (§9). It requires **no new canonical
> entity** if the Assignment Log is the carrier — which is precisely what AD-01A §8.5 directed.

### 5.5 "What exactly is New?" — the direct answer

> **⟦ARCHITECT ANALYSIS⟧** Four candidate readings were tested. The task asked that this be
> challenged explicitly, so each is judged rather than listed.
>
> | Reading | Verdict |
> |---|---|
> | **(a) A Lead-level lifecycle value** (AD-01A §8.1 as recorded) | **Fails the evidence.** Consolidated §11 defines New relative to *"the relevant current working context"* and defers the scope question; §17's transfer-without-history produces a record that is unworked *to its holder* and heavily worked *to the business*. A single Lead-level value must lie to one of them. |
> | **(b) A current-handler work state** | **Closer, but under-specified.** It does not say what resets it, and "handler changed" is not the same event as "handler changed **without history**". |
> | **(c) "Absence of prior qualifying user follow-up **in the current custody interval**"** | **Best fit.** It reproduces every observed behaviour: a fresh capture is New; a transfer-without-history presents as New; a transfer-with-history does not; and FUT — which §9 defines as *"total count of actual user-performed follow-ups"* — is the very quantity whose being zero makes it New. |
> | **(d) Something else entirely — e.g. "no disposition has ever been recorded"** | **This is AD-01's reading**, and it remains correct *at the record level*. It is simply a different, coarser question than the one the operator's queue asks. |
>
> **Finding.** *New* is **derivable, not persisted**, and its correct scope is
> **(record × custody interval)**, not the record. AD-01 §9.1 already treats it as derived when it
> defines *Worked* as *"leads that have ever left New"* — a history-derived predicate. Persisting
> *New* is therefore a second source of truth for a fact the activity history already carries, which
> is the identical objection AD-01A §5.2 raised against persisting *Unassigned*/*Assigned*.

> **⟦ARCHITECT RECOMMENDATION — requires the Product Owner to amend AD-01A §8.1⟧**
> *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **AD-01A §8.1 is a recorded Product-Owner
> decision and is not edited by this document.**)*
>
> Retain **New** as a user-facing and reporting concept — nothing about the operator's vocabulary
> changes. Change only *where it lives*: **derive it** from the presence or absence of a qualifying
> user follow-up within the current custody interval, and hold the persisted lifecycle at
> **Follow-up · Success · Dump**, with absence-of-disposition meaning New.
>
> **Two consequences, stated so the amendment is judged on complete information:**
> - AD-01 §6.1's forbidden *Anything → New* transition becomes **moot rather than violated** — there
>   is no backward edge because there is no persisted value to move back to. The historical-integrity
>   concern that motivated the prohibition (§07) is untouched: nothing is rewritten.
> - **This depends on V-4.** *"Qualifying"* is undefined in consolidated §9, and the observed system
>   carries a separate **Attempted** bucket, which strongly suggests a non-connected attempt is *not*
>   nothing but may also not be a follow-up. Until V-4 is answered, New, FUT and first-response all
>   have an undefined boundary — and they must share **one** answer or they will disagree.

### 5.6 What the sources still do not define about the Lead

Per Rule 1 and consolidated §1, recorded rather than filled: whether a working record may exist with
**zero** inquiries (a walk-in whose project interest is not yet known — consolidated §42's
fast-capture case suggests yes, but nothing states it); whether two working records may exist for
one Person within one tenant and what reconciles them (**M-5**); whether a Person who becomes a
Customer (§06/§07) retains a working record for future interest (AD-01C S4 says a new opportunity is
a new Lead — which is expressible at the inquiry level and needs restating, **V-14**); and whether
the working record has any terminal condition at all.

---

## 6. Lead vs Project Interest

### 6.1 Can one Lead have multiple project interests?

> **⟦PO EVIDENCE⟧** Three independent statements say yes, and one says the question is open.
> §4: *"a client may show interest in multiple projects over time."* §7: *"The client may then show
> more than one project interest on the same record."* §13: *"The client record can contain customer
> details and multiple project interests."* §28 lists *"Exact definition and reporting treatment of
> multiple project interests on one Lead"* as **not yet decided**, and §13 adds the sharper form:
> *"define the exact boundary between an additional project interest on the same Lead and a
> genuinely new sales opportunity."*

> **⟦ARCHITECT ANALYSIS⟧** The evidence establishes that the *operation* does this. It does **not**
> establish whether interests may be **concurrent** (two live interests at once) or only
> **sequential** (interest in B opens after interest in A ends). The distinction is not pedantic —
> it decides whether the record's single next-action commitment, single status and single Dump reason
> are sufficient, or whether those must become per-interest. The observed queue carries exactly one
> of each, which is weak evidence for *sequential*; but the observed queue is a denormalised working
> row and may simply be showing the most recent. **Nothing in the sources settles it.** → **V-2**.

### 6.2 How interest changes must be represented historically

> **⟦PO EVIDENCE⟧** §13 states the rule directly: *"The timeline should record the new inquiry event
> rather than silently overwriting the previous interest."* §8 lists *"Customer regenerated/renewed
> inquiry for another project"* as a timeline event. §31: *"Preserve historical truth: do not rewrite
> what was true at the time."*

> **⟦ARCHITECT ANALYSIS⟧** This is a Product-Owner-stated requirement, not an architect's inference,
> and it is the same discipline **R6** and AD-01A §8.3 impose on Dump reasons. Its consequences:
>
> 1. **Append, never overwrite.** A change of interest is a *new inquiry event*, not an edit to a
>    project field. Any design in which "the lead's project" is a mutable value fails this outright —
>    and note this is the very corruption AD-01C **D3** warned of (*"a record that changes project
>    mid-life changes who may see it, retroactively, for its whole history"*). **The requirement to
>    append is what neutralises D3's hazard**: the record does not *change* project, it *accumulates*
>    interests, and no past project association is ever retroactively altered.
> 2. **The observed *Project Name* and *Booked Project* columns are two different facts** — current
>    interest context versus the project actually transacted — and must not be served by one value.
> 3. **A closed interest must remain closed and readable after a later interest opens.** This is the
>    same intactness requirement AD-01E §3.3 correctly identified, discharged here by the inquiry
>    carrying its own outcome and preserved reason rather than by a new episode concept.

### 6.3 Which facts belong to the interest rather than the record

> **⟦ARCHITECT ANALYSIS⟧** Derived from the observed captured fields and consolidated §5/§12 —
> **presented as an analysis of where each fact's lifetime and authorization sits, not as a field
> list to build.** Several rows are genuinely undecided and are marked.

| Fact | Argument for record level | Argument for interest level | Status |
|---|---|---|---|
| Person identity, contact details | The Person is one | — | **Record** (§06/§07) |
| Enquiry date, source, campaign, channel, enquiry-from, IVR/channel metadata | — | Each engagement has its own origin; AD-01C **D5** showed a single source field cannot honestly record a second engagement's channel | **Interest.** Strong. |
| Unit type, budget, requirement profile | Observed as record columns | A returning client's requirement legitimately differs; AD-01E §5.3 item 4 named "materially changed requirement" as a possible new-opportunity discriminator | **Ambiguous — V-3.** Observed placement is weak evidence, since the row is denormalised. |
| Enquiry type / temperature (cold/warm/hot) | — | Per engagement | **Out of scope pending Q9/M-8.** Its appearance in consolidated §12 is a record of *the old system's* fields, not a BMexa requirement (AD-01 §1.3, §3.4: absent from all 97 spec sections). **V-21.** |
| CP / attribution claims | — | AD-01C **D6** and AD-01E **U-15**: two engagements may have two legitimate producers; commission depends on distinguishing them from a §11 clash | **Interest. This is the row with money on it. V-16.** |
| Terminal outcome + preserved reason | Observed as a record column ("Dump Reason") | The funnel needs per-engagement outcomes; AD-01A §8.3 forbids overwriting | **Both, differently:** the *classified commercial outcome* is the interest's; the *queue-exit condition* is the record's (§10). **V-3, V-11.** |
| Current handler, next action, FUT, queue bucket | One call serves all interests (T1) | — | **Record.** Strong. |
| Booked project / booking reference | — | The booking attaches to the inquiry that converted | **Interest**, with the Booking owning its own lifecycle (AD-01A §8.2). |
| Project-scoped authorization anchor (§08) | — | The record has no single project | **Interest — with the intra-record consequence in C-9. V-24.** |

### 6.4 Reporting consequence, stated now because it is easy to discover late

> **⟦ARCHITECT ANALYSIS⟧** If interests are plural and conversion keys on the record, a client with
> three interests who books once counts as **one converted lead out of one** — and the two interests
> that were lost vanish from the denominator entirely. Project-level conversion, source quality and
> CP performance all silently inflate. **The funnel must key on the interest** — which is the same
> conclusion AD-01E reached for episodes (**U-6**), reached here from a different direction and for a
> different unit. → **V-17**, and it is a **source-of-truth change, §88 MUST-ASK.**

---

## 7. Lead vs Activity/Timeline

### 7.1 The assertion under test

Consolidated §8 and §31 assert that one chronological timeline must exist **and** that
user-performed activities must be distinguished from system-generated events. The task directs that
this be **tested**, not restated.

### 7.2 The test, and its result

> **⟦ARCHITECT ANALYSIS⟧** Apply AD-01's own criteria — *what changes it, who authors it, who is
> accountable, how often, and can two be true at once* — plus AD-01 §5.2's authorization rule
> (*facts about the same lead that are authorised differently cannot share a column*) and AD-01A
> §3.6's derivation rule (*do not record a fact the system can compute, or the two will disagree*).

| Class | Author | Counted in FUT (§9)? | Distinct visibility rule? | Already has a canonical home? | Verdict |
|---|---|---|---|---|---|
| **1. User follow-up activity** — call/visit/meeting with response type, sub-response, remarks, mandatory next follow-up, call duration | Handler | **Yes** | Restrictable from a later handler (§17) | §09/§80 activities; AD-01 §8.4 | **A first-class business record.** The core of the timeline. |
| **2. System-generated lifecycle/notification events** | System | **No** (§9 explicit) | Generally visible | — | **Distinct record class.** Must never be counted as sales work (§31). |
| **3. Assignment event** (initial) | System / manager / routing rule | **No** | Visible to management always | **Yes — §06 Assignment Log** | **Must not be duplicated as a timeline row.** A second copy is a second source of truth — AD-01A §5.2's exact objection. |
| **4. Transfer event** (reassignment; actor is a manager, not the handler) | Manager | **No** | **Carries an authorization consequence** — the with/without-history decision (§16) | **Yes — §06 Assignment Log** | **Same as 3, and load-bearing:** this is the record that defines the custody interval. |
| **5. Regeneration / re-inquiry event** | Customer-triggered, system- or user-recorded | **V-4** | Per-inquiry and per-project (C-9) | Belongs to the **Inquiry** | **Creates or opens an inquiry.** Its timeline appearance is a projection of that. |
| **6. Booking / Success event** | Booking workflow + Sales Support approval (§18) | **No** | Booking has its own authorization | **Yes — §06 Booking Group**, own lifecycle (AD-01A §8.2) | **Referenced, never absorbed.** AD-01A §8.2 forbids the Lead Lifecycle absorbing Booking states. |
| **7. Dump / disposition event** | Handler (or reviewer) | **No** | The reason itself may be restricted (AD-01E **U-12**; the observed queue exposes *Dump Reason* and *Last Remarks* as **list columns**, so restriction cannot be a detail-page concern) | Business-level state history (AD-01 §8.3) | **Distinct, historised record.** Must hold *n* dispositions, not one. |
| **8. Computed metric entry** — e.g. *"First response logged in 7 minutes"* | Nobody. It is a **derivation** | n/a | n/a | Computable from 1 + creation/assignment times | **Must not be stored as an event.** AD-01A §3.6's rule applied exactly: recording it duplicates a computed fact and lets the two disagree after any correction. |

> **⟦ARCHITECT ANALYSIS⟧ Result of the test.** The consolidated requirement is **upheld as a read
> requirement and rejected as a storage inference.**
>
> > **One timeline is a correct read model. It is not a correct storage model.** The classes differ
> > in author, in countability, in authorization and in whether they are facts at all (class 8 is
> > not). Three of the eight already have canonical homes the spec mandates, and duplicating them
> > into a timeline table creates the second-source-of-truth defect AD-01A §5.2 eliminated the
> > assignment axis to avoid.
>
> **What follows, conceptually:** the timeline is an **ordered, typed, authorization-filtered
> projection** over several first-class record classes. Two properties are then non-negotiable:
> (i) every entry carries its class and its *qualifying-for-FUT* semantics as a **system-owned
> semantic property** (R4's "semantics in columns, never in codes" — reports must never branch on an
> activity type's code); and (ii) **the projection is where the §9 authorization filter is applied**,
> which means the filter must live server-side in the projection itself, not in the client that
> renders it (§11, §45, Spec Rule 4, consolidated §6/§17).

### 7.3 Two specific collisions the evidence creates

> **⟦ARCHITECT ANALYSIS⟧**
>
> 1. **Site visits.** §09 and §80 make *site visits* a first-class deliverable, and AD-01 §8.4 places
>    them as separate records. The observed **Sub Response** vocabulary contains *Site Visit
>    Scheduled / Done / Cancelled / Rescheduled / No Show*. **Two sources of truth for "did a site
>    visit happen" is a defect**, and the *Site Visit Done* filter chip in the observed queue shows
>    the business queries it. Whether the sub-response *drives* the site-visit record, *reflects* it,
>    or is a separate flat vocabulary is undecided. → **V-19**.
> 2. **The sub-response vocabulary is semantically heterogeneous.** The observed values mix
>    **outcomes** (Call Back Later, Not Interested-adjacent), **milestones** (Site Visit Done, Meeting
>    Done), **internal process steps** (Cross Call Required, Cross Call Done) and **progress markers**
>    (Project Details Shared, Prospect Generated). A flat master over these produces analytics nobody
>    can interpret — the exact problem AD-01A §3 solved for Dump reasons with a three-dimension
>    semantic framework. **The same discipline should be asked of response/sub-response before any
>    response analytics is promised.** No dimensions are proposed here (Rule 1; values and semantics
>    are the owner's). → **V-19**.

### 7.4 What an Activity must carry for the operation to work

> **⟦ARCHITECT ANALYSIS⟧** Derived from consolidated §10 and the observed capture surface;
> conceptual, not a field list: activity type; **response type**; **sub-response**; remarks;
> **next follow-up date/time, mandatory where the outcome keeps the record in the working queue**
> (§13's constitutive requirement, preserved unconditionally by AD-01A §1.7); recorded time **and**
> effective time separately (AD-01 §8.3, E-23 — offline backdating makes these genuinely different);
> actor; the custody interval it falls in; the inquiry it concerns, where it concerns one; and its
> *qualifying-for-FUT* semantic. Call duration is observed and is an attribute of a call activity.

---

## 8. Lead vs Assignment/Transfer

### 8.1 What the new evidence adds to AD-01A §8.5

> **⟦ARCHITECT ANALYSIS⟧** AD-01A §8.5 eliminated the persisted assignment-state axis and directed
> that *"Owner, Handler, Assignment History, activities, tasks, and derived completeness/work-queue
> conditions should carry this information."* **The new evidence confirms that decision and loads it
> further** — which is the correct direction of travel under §8.5, not a reversal of it.

| New obligation | Source | Where it lands |
|---|---|---|
| Assignment is *"a first-class business operation and a historical event, not merely a current field"* | §6 | Assignment Log (§06) — already canonical |
| **Bulk transfer** of many records in one management act | §6, §16 | Assignment Log, with the act itself identifiable so "who moved 400 leads on Tuesday" is answerable |
| The transferring **actor** is a manager, distinct from either handler | §6; observed ("Transferred to Amit Tomar", actor ≠ handler) | Assignment Log actor — §54 already wants actor/authorization context |
| **The with/without-history decision made at transfer time** | §6, §16, §17 | **New.** An attribute of the transfer act — see §8.4 |
| Round-robin / automatic assignment must be distinguishable from a deliberate management placement | §5, §6, §17 ("automatic assignment sends revived lead to a different/new handler") | **Assignment provenance** — AD-01E Q5-D, now necessary (§8.3) |
| Manager hierarchy constrains who may receive | §3, §16 | Authorization (**M-3**, **M-7**) — not resolved here |

### 8.2 Transfer does not move the lifecycle — and the evidence sharpens why

> **⟦ARCHITECT ANALYSIS⟧** AD-01 **E-04** already established that reassignment must not touch the
> lifecycle state. The new evidence both confirms this and reveals the pressure against it:
> transfer-without-history **makes the record look New to its new holder**. The temptation to
> implement that by *setting* the lifecycle to New is precisely the corruption E-04 and AD-01 §6.1's
> *Anything → New* prohibition exist to prevent — it would rewrite business history to achieve a
> presentation outcome, violating §07, **R6** and consolidated §31 in one act.
>
> **Deriving New per custody interval (§5.5) obtains the same operational behaviour with no history
> rewrite at all.** That is the strongest single argument for the custody-scoped reading, and it is
> an argument from historical integrity rather than from convenience.

### 8.3 Assignment provenance — AD-01E's U-7, revisited with new evidence

> **⟦PO EVIDENCE⟧** AD-01E **U-7** asked: *does an explicit Sales Head assignment confer historical
> visibility on a handler who did NOT work the prior episode?* — and recorded that the direction's
> three cases were *"fully satisfied by I1 + I2, with no conferral mechanism and no assignment
> provenance at all"*, calling U-7 *"the single highest-leverage unresolved item in this document."*
>
> Consolidated **§16** now states: *"Transfer may include a **management decision** about whether
> prior history is visible to the receiving employee."* **§6** distinguishes *"Transfer with
> history — management may **deliberately** give the receiving handler access to the historical
> timeline"* from *"Automatic assignment — a revived/regenerated lead may be automatically sent to a
> different handler."* **§17** contrasts *"Sales Head explicitly transfers"* with *"Automatic
> assignment sends."*

> **⟦ARCHITECT ANALYSIS⟧** This is the **generalised** reading of AD-01E's Case 2, now stated by the
> Product Owner in general terms rather than inferred from a single example: management deliberately
> decides, and the decision is about *"the receiving employee"* — any eligible representative, not
> only the original handler. **U-7 is therefore effectively answered "yes" by the new evidence**, and
> AD-01E's own conditional (§7.1, §11 R5) triggers: **assignment provenance becomes architecturally
> necessary.**
>
> **The unrecoverability AD-01E identified stands unchanged and should be acted on:** *"An assignment
> whose method was never recorded is indistinguishable later from one that was automatic."* It cannot
> be backfilled. This is the same asymmetry AD-01B §4 used to prioritise Q5.
>
> **This is a finding about necessity, not an approval.** It rests on reading *"management decision"*
> and *"the receiving employee"* generally. The owner should affirm it rather than inherit it, and
> the residual questions — is the choice mandatory, what is the default, is it revocable — are
> **V-8**.

### 8.4 The third conferral shape the new evidence supplies

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §7.3 weighed two shapes and found neither obviously right:
> **(a)** conferral *derived from* assignment provenance — cost: *"a Sales Head performing a routine
> manual reassignment silently confers historical access they may not have intended"*; and
> **(b)** conferral as an *explicit separate grant* — cost: friction, and a drift risk toward the
> reassignment-approval workflow **AD-01A §8.5 forbids inventing**.
>
> **The evidence describes a third shape AD-01E did not consider: conferral as a required parameter
> of the transfer act itself.** *"Transfer may include a management decision about whether prior
> history is visible"* (§16) is neither a derivation nor a separate grant — it is one act with two
> outputs, the custody change and the visibility decision.
>
> **Why it dominates both of AD-01E's shapes on their own stated costs:** it cannot silently confer
> (the decision is made consciously, in the act), and it adds no second act and no approval workflow
> (so §8.5's prohibition is untouched and §14/§95's speed concern is respected).
>
> **⟦ARCHITECT RECOMMENDATION⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.)* If **V-7**
> and **V-8** are answered such that conferral exists, prefer this third shape. It remains an
> **authorization-rule change and is §88 MUST-ASK.** Two things it does **not** settle: whether the
> parameter is mandatory or has a default (**V-8**), and whether it can *withhold* from a prior
> participant as well as *grant* to a newcomer (**V-7** — the harder half, §9.3).

### 8.5 Bulk transfer, recorded because it interacts with everything above

> **⟦ARCHITECT ANALYSIS⟧** §6 and §16 both make bulk transfer a stated management capability. If the
> history decision is a parameter of the transfer act, **a bulk transfer applies one decision to many
> records at once** — which is a single act with a wide authorization blast radius. Consolidated §17
> requires enforcement at authorization boundaries; §52's export-control posture (log the request,
> preserve scope, audit the result) is the closest existing analogue in the spec. Recorded as a
> consequence, **not** designed here; its authorization treatment depends on **M-3**/**M-7**.

---

## 9. Lead vs History Visibility

### 9.1 What AD-01E got right, stated first

> **⟦ARCHITECT ANALYSIS⟧** Three of AD-01E's findings are **confirmed** by the new evidence and
> should not be disturbed by anything below:
>
> 1. **Custody is the wrong kind of fact.** AD-01E §6.1: *"'Who currently owns the lead' and 'who is
>    entitled to see historical episodes of the lead' are different questions with different inputs
>    and different answers."* Consolidated §17's scenario table never keys on current custody, and
>    §6's *"historical visibility rules apply separately from Lead identity"* says the same thing in
>    the Product Owner's own words. **Confirmed.**
> 2. **It is an authorization boundary, not a display rule.** AD-01E §6.2 cited §11, §45 and Spec
>    Rule 4. Consolidated §6 and §17 state it twice independently: *"must be enforced at
>    authorization boundaries and not rely on the UI merely hiding old rows"*; *"must not be
>    implemented solely by hiding UI elements."* **Confirmed by the Product Owner directly.**
> 3. **The inference channel is the likeliest failure.** AD-01E §6.8 warned that aggregates — lead
>    age, activity counts, last-contacted — leak the shadow of what is hidden. **The new evidence
>    makes this worse, not better:** the observed work queue exposes **FUT**, *Last Followed Date*,
>    *Enquiry Date*, *Last Sub Response*, *Dump Reason* and *Last Remarks* **as list columns**. A
>    restricted handler looking at their own queue would read the prior handler's last remark and the
>    prior dump reason off the list without opening anything. **This is no longer a theoretical
>    channel; it is the default surface.** → **V-9**, **V-10**.

### 9.2 Where AD-01E's model must be corrected — the boundary unit

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §6.3 evaluates entitlement *"per (viewer, lead, **episode**)"*.
> The task asked that this be challenged against consolidated §17 and the with/without-history
> framing. It does not survive intact.

| Candidate boundary | Test against consolidated §6/§16/§17 | Verdict |
|---|---|---|
| **Lead-level** | Cannot express transfer-without-history at all — the whole record is one unit | **Insufficient.** |
| **Episode-level** (AD-01E) | Serves the post-Dump revival case. **Cannot serve a mid-Follow-up transfer without history**, because no episode boundary is crossed (C-2). Also cannot express a *second* transfer within one episode with a different decision. | **Insufficient — it covers a subset of the described control.** |
| **Activity-level** | Would express anything, including per-item decisions no described control makes; nothing in the sources describes management choosing individual activities | **Over-fine; unsupported by evidence (Rule 1).** |
| **Custody-interval-level** | Matches the control exactly: a transfer opens an interval and the manager's decision at that moment determines what of the preceding intervals travels. Covers post-Dump redistribution, mid-Follow-up transfer, automatic reassignment and explicit placement with one mechanism. | **Best fit for handler-facing restriction.** |
| **Inquiry / project-interest-level** | Needed **independently** for §08 project scoping (C-9) and for CP-facing visibility (§39, AD-01E **U-16**) — a CP must see their own engagement, not the client's others | **Also required, for a different reason.** |
| **Combination** | — | **This is the answer.** |

> **⟦ARCHITECT RECOMMENDATION — the conceptual visibility boundary⟧** *(RECOMMENDED, SUBJECT TO THE
> PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. This is a conceptual authorization model, **not** an
> RBAC permission set — the permission vocabulary is **M-3**/**M-7** and none is proposed.)*
>
> **Historical visibility is evaluated on two boundaries simultaneously, and a viewer must clear
> both:**
>
> - **The custody boundary — for handler-facing history.** Entitlement to the activities, remarks,
>   dispositions and derived aggregates of a **prior custody interval** is evaluated per
>   *(viewer, working record, custody interval)*, **fail-closed**. The current handler always sees
>   their own interval in full; that is their work.
> - **The interest boundary — for project-scoped and external visibility.** Entitlement to an
>   **inquiry / project interest** and everything hanging off it is evaluated per
>   *(viewer, working record, inquiry)* against §08 project scope and, for CPs, §39/§05/§11.
>
> **Entitlement inputs remain AD-01E's three**, re-homed onto the custody boundary and with one
> correction:
> **I1 Participation** — the viewer personally held or acted in that interval (a historical fact the
> Assignment Log and activity actors already carry: §06, §10, §57).
> **I2 Management breadth** — the viewer's grant covers the record (§E.5 own/team/scope/all, pending
> **M-7**). This is what serves *"Sales Head / authorized reporting manager — broader visibility"*
> (§17) and must be expressed as breadth on a grant, never as a role name (**R2**).
> **I3 Conferral** — the management decision recorded on the transfer that opened the interval
> (§8.4).
> **Custody is not an input** (AD-01E §6.1, confirmed).

### 9.3 The correction that matters most — union-of-grants cannot express *withholding*

> **⟦ARCHITECT ANALYSIS⟧ This is the sharpest conflict between AD-01E and the new evidence, and it
> is structural rather than a matter of degree.**
>
> AD-01E §6.3 specifies entitlement as *"granted by any one of three independent inputs"* — a
> **union**, consistent with **R2**'s union-without-deny semantics — and defends the participation
> input explicitly: *"The restriction the direction asks for is about a handler who **was never
> there** — not about un-showing what was already shown."*
>
> Consolidated §17 says something different: *"**Transfer without history** — receiving employee
> works the record as a fresh context without seeing prior conversation/follow-up history."* It
> states no carve-out for a receiving employee who previously worked the record. And §6 frames the
> choice as management *"deliberately"* giving or not giving access — a **withholding** capability,
> not only a granting one.
>
> **Under a pure union, a manager cannot transfer without history to someone who previously held the
> record — I1 fires and the history is visible regardless of the manager's decision.** Whether that
> is a defect or the correct behaviour is a business question with two coherent answers:
>
> - **Union (AD-01E's reading).** Re-showing someone their own past work protects nothing; denying it
>   makes a rep unable to see what they are measured on. §57's preservation of historical actor
>   identity supports it.
> - **Deny-capable (the literal reading of §17).** Management may want a genuinely fresh attempt
>   uncontaminated by the prior assessment — which is exactly the *"redistribute to a fresher for
>   another calling attempt"* case (§7), where a rep re-receiving a record they themselves dumped
>   would carry forward the judgement management is trying to set aside.
>
> **Note the second answer requires deny-precedence, which R2 deliberately refuses for role
> permissions** (*"deny-precedence … interacts badly enough with union semantics to generate a
> permanent class of 'why can't this user do X' tickets"*). If the owner wants withholding, it must be
> designed as a **scoped, recorded, per-interval restriction attached to a specific management act** —
> not as a general deny rule in the permission system — or R2 is compromised for the whole product.
>
> **This is not the architect's to choose.** → **V-7**. It is second in leverage only to **V-1**, and
> like **U-7** it is unrecoverable if answered late: a transfer whose decision was never recorded
> cannot be reconstructed.

### 9.4 What "previous history" is made of — re-tested at the custody boundary

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §6.6 enumerated H1–H12 against episodes. Re-tested against custody
> intervals, most categories carry over unchanged; four change materially and are the only ones
> restated here.

| Category | Change under the custody boundary |
|---|---|
| **Prior activities, calls, messages, site visits, notes** (H1–H4) | **Unchanged.** Restrictable, per interval. Notes remain the highest free-text leakage risk. |
| **Old attribution / clash information** (H5) | **Unchanged and still not a Q5 question.** §11 already restricts competing claims from Sales Reps in the *current* engagement. Now additionally **inquiry-scoped**, not custody-scoped (§9.2). |
| **Old assignment history** (H6) | **Sharpened.** Under the custody boundary the assignment record *is* the boundary marker. The **existence** of prior intervals is structurally hard to hide — which is an argument for AD-01E's H10 recommendation (disclose existence, withhold contents) but does not decide it. **V-9.** |
| **Old Dump reason** (H7) and **old commercial information** (H8) | **Genuinely two-sided, unchanged as a decision — but the surface changed.** These are **list columns** in the observed operation (*Dump Reason*, *Last Remarks*, *Budget*), so the decision cannot be confined to a detail view. **V-9**, **V-10.** |
| **Prior booking-related information** (H9) | **Unchanged**, and cleaner under the inquiry boundary: an abandoned booking attempt belongs to its inquiry. |
| **Derived and aggregate facts** (H11) | **Materially worse, per §9.1 item 3.** **FUT is itself a derived aggregate and is a primary queue column.** If FUT is record-scoped, it leaks the volume of hidden work on every row; if it is custody-scoped, the handler's own productivity number is honest and the leak closes. **This is an independent argument that FUT must be computable at both scopes** (§13). |
| **Person-level history on other projects** (H12) | **Becomes central rather than out of scope.** Under a client-centric record, other projects' interests are *inside* the record. §08 project scoping must therefore be evaluated at the inquiry boundary (C-9, **V-24**). AD-01E could treat this as out of scope; this document cannot. |

### 9.5 Enforcement surfaces — unchanged in substance, wider in scope

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §8's twelve-surface analysis (API, UI, exports §52, search §45,
> reports §63, background jobs, notifications §58, attachments §71, audit §54/R6, offline §46/§47,
> CP portal §39/§05, consistency §68) **applies in full and is not restated here.** Two amendments:
>
> 1. **The scope widens from "revived leads" to "every transferred lead."** AD-01E's cost was
>    incurred only on revival; under the transfer-based control it is incurred on an ordinary,
>    high-frequency management operation. The cost is therefore **larger** than AD-01E priced it.
> 2. **AD-01E §8's comparative claim does not survive C-9.** AD-01E argued that under the
>    successor-lead model *"nine of the twelve rows above require no new work."* If a working record
>    can hold interests in more than one project, **§08 project scoping is already an intra-record
>    boundary** and those rows need the work regardless of which Q5 answer is chosen. **The
>    intra-record boundary is not a cost of revival; it is a cost of the operation the Product Owner
>    actually runs.** The owner should know this, because AD-01E's §2.3 asymmetry — its stated reason
>    for recommending revival only *conditionally* — was priced against the opposite assumption.
>
> **R7 of AD-01E stands unchanged and should be carried forward:** the feature is not complete until
> automated tests prove a restricted handler cannot reach restricted content through API, search,
> export, reports, notifications, attachments or derived aggregates (§91, §96). **V-10** asks the
> owner to confirm the surface list is the intended scope rather than leaving it implied.

---

## 10. Lead vs Dump

### 10.1 What Dump is asked to do in the real operation

> **⟦PO EVIDENCE⟧** Five distinct uses appear in the sources:
> 1. **§13 / §15** — the rep closes the current active work: reason + remarks, *"the lead becomes
>    non-active in the relevant sales workflow."*
> 2. **§11** — *"Terminal/non-active sales disposition at lifecycle level, **but real-world usage
>    shows it may also function as workload-management disposition**; semantics must be kept
>    precise."*
> 3. **§7** — *"A manager may redistribute dumped/non-responding leads to a fresher for another
>    calling attempt."*
> 4. **Observed queue** — a first-class **All-Without-Dump** filter, i.e. the primary operational
>    meaning of Dump is *"exclude from the working set."*
> 5. **Observed reasons** — a 15-value vocabulary spanning invalid records, commercial losses,
>    deferrals, process failures and channel conflicts.

### 10.2 What Dump actually is — the decomposition

> **⟦ARCHITECT ANALYSIS⟧** Apply AD-01 §3's test — *can a record legitimately be in two of these at
> once?* — to the five uses. It separates them cleanly into three concepts that are currently served
> by one control:
>
> | Concept | Question it answers | Changed by | Can coexist with the others? |
> |---|---|---|---|
> | **D-i — Queue exit / work-state** | *Does this record still need follow-up from me?* This is **exactly §13's definition** — *"closed without needing follow-up"* — and AD-01 §2.5 already established it is **not** a synonym for *lost*. | Handler, per custody interval | Yes — a record can be out of one handler's queue and commercially still open |
> | **D-ii — Commercial outcome / disposition** | *Did this opportunity end, and why?* The classified, reasoned, preserved fact that feeds the funnel and source quality. | Handler, once per **inquiry** | Yes |
> | **D-iii — Redistribution eligibility** | *May this record be handed to another handler for further attempts?* The fresher case (§7). | **Management**, not the handler | Yes — and it is the coexistence that proves the separation |
>
> **The proof that these are three and not one is D-iii operating with no customer event.** A record
> can be simultaneously *out of handler A's queue* (D-i true), *commercially closed as
> "non-responsive"* (D-ii true) and *available for another attempt* (D-iii true) — and a moment later
> be *in handler B's queue* (D-i false for B) while D-ii is unchanged and still true. **One value
> cannot hold that.** This is AD-01's own test returning the answer that the current single Dump
> value fails it.

> **⟦ARCHITECT ANALYSIS⟧ The failure this causes today, stated concretely (C-6).** A manager
> redistributes a dumped record to a fresher. Under AD-01A §8.1 the lifecycle is **Dump**, which
> AD-01C §2.5 and AD-01E §4.5 both hold **strictly terminal**. So the fresher receives a record that
> the system says needs no follow-up, has no next-action date (§13's mandatory date has nothing to
> attach to), appears in no Action Feed bucket (§14), is invisible to §58 escalation, and is filtered
> out of their own work queue by *All-Without-Dump*. **The operation the Product Owner describes is
> not performable under the model as currently recorded** — and the tempting fix (move the lifecycle
> off Dump) is exactly what AD-01A §8.3's preserved-reason rule and the intactness requirement
> forbid.

### 10.3 The observed reason vocabulary validates AD-01A §8.3

> **⟦ARCHITECT ANALYSIS⟧** Every observed value maps onto the three approved dimensions with no
> residue. This is a genuine empirical validation of an approved decision and is worth recording as
> such. **No values are proposed, endorsed or seeded by this mapping** — it is a test of the
> framework, and **N-4** still owns the vocabulary (Rule 1, **R4**).

| Observed value | Validity class | Responsibility locus | Recoverability posture |
|---|---|---|---|
| Invalid/Wrong Number · Fake Lead · CRM Test Query · Enquiry Not Done | Invalid / non-opportunity, or Administrative | Source/CP, or nobody | Permanent |
| Already Purchased · Choose Competitor · Not Interested | Commercial loss | Prospect / market | Permanent or revisitable |
| Budget Constraint · Location Issue · Payment Plan Issue | Commercial loss **or** Disqualified/ineligible — *the same words can mean either* | Prospect, or builder product/inventory | Mixed |
| Loan Issue | Commercial loss | Prospect's circumstances | Potentially revisitable |
| Plan Changed · Planning to Buy Later | Commercial loss | Prospect | **Potentially revisitable** |
| Real Estate Agent | **Redundant / attribution-relevant** — an intermediary, not a buyer | Source / CP | Depends on §11 resolution |

> **Three findings from the mapping, each of which strengthens rather than reopens §8.3:**
> 1. **The Redundant class earns its keep.** *Real Estate Agent* is not invalid and not a commercial
>    loss; AD-01A §3.3 argued precisely that folding such a value into either neighbour misprices the
>    source. Real data supplies the case.
> 2. **A single label can carry two validity classes** (*Budget Constraint* as "cannot afford" versus
>    "we have nothing in that band"). **This is the argument for semantics in columns rather than in
>    labels, made by the data** (R4). Tenants will choose the dimension values; the product must not
>    infer them from the word.
> 3. **Recoverability posture has real occupants** — *Planning to Buy Later*, *Plan Changed*, *Loan
>    Issue* — which answers AD-01C's **T-10** doubt about whether posture would be populated in
>    practice. It does **not** decide posture's *use* (gate versus triage), which remains **U-3**/T-10.
>
> **What the mapping does not supply:** a reason for **D-iii**. Redistribution to a fresher is driven
> by *handler exhaustion and management workload policy*, not by the prospect's recoverability.
> **Dimension C cannot carry it, and should not be asked to** — that would corrupt the one dimension
> AD-01C §2.6 and AD-01E §3.5 both identified as the intended re-engagement gate. **The gap is a
> missing control, not a missing dimension.** → **V-11**, **V-12**.

### 10.4 Where each part of Dump should conceptually live

> **⟦ARCHITECT RECOMMENDATION — conditional on V-1 and V-11⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. No values, no vocabulary, no mechanism.)*
>
> - **D-ii, the commercial outcome, belongs to the inquiry**, carrying its classified and
>   **preserved** reason exactly as AD-01A §8.3 requires. Terminality is then meaningful and
>   monotone **per inquiry** — which is the property AD-01C's **D1** feared losing and AD-01E's
>   option (iii) recovered by putting the lifecycle on the episode. **The inquiry recovers it the same
>   way, with an entity the business already has.**
> - **D-i, the queue exit, belongs to the working record and is scoped to the custody interval** — it
>   is a statement about *this handler's* work, which is why it can be true for one handler and false
>   for the next without any historical fact changing.
> - **D-iii, redistribution eligibility, is a management control and is not a property of the reason
>   at all.** Whether it is derived (from posture plus policy), explicit (a management act), or does
>   not exist as a distinct thing is **V-12**, and **it is not the architect's to invent** — the
>   sources describe the behaviour (§7) but state no rule.
>
> **What this preserves:** AD-01A §8.1's four-value vocabulary as the *user-facing* language;
> AD-01A §8.3 in full and unamended; AD-01C §2.5's strict terminality, **relocated to the inquiry**
> where it is true without exception, rather than asserted at the record level where the fresher case
> falsifies it.
>
> **What it costs:** the word *Dump* now names two operations, and the product must be explicit about
> which one a user is performing. §95's *minimum necessary friction* governs: a one-tap Dump that
> silently also makes a record available for redistribution, or silently does not, is the kind of
> ambiguity §95 refuses.

---

## 11. Lead vs Success/Booking

**Q4 is not reopened.** AD-01A §8.2 stands: Success = §20 Stage 3 (Booked), after the required
builder-side verification; Booking has its own lifecycle which the Lead Lifecycle must not absorb; a
cancelled booking never rewrites Success. AD-01C §3.7's Q6 recommendation likewise stands untouched.
This section asks only whether the **surrounding model** represents Success correctly.

### 11.1 The new evidence confirms Q4 independently

> **⟦PO EVIDENCE⟧** Consolidated §14 (the Sales flow: record a booking/EOI outcome → enter
> project/unit context → enter the controlled booking workflow → 20-minute authoritative hold → the
> online form becomes the digital source for verification) and §18 (Sales Support verifies the signed
> physical form and KYC **against the booking already stored in BMexa, with no duplicate re-entry**,
> then approves; approval enables the customer-ledger process). §14 restates the decision:
> *"Lead Success is associated with the approved Booked / Stage 3 milestone, not merely with booking
> initiation."*

> **⟦ARCHITECT ANALYSIS⟧** This is an operational description of exactly the milestone AD-01A §2.1
> selected on spec grounds (§06's Customer boundary, §21's snapshot anchor, §20's completion
> language, §17's prohibition). **Q4 is confirmed by the real operation, not merely by textual
> inference.** Consolidated §19's *"CRM-recorded payment ≠ Accounts-verified money received"* is the
> same principle one entity further downstream, and §31 states it as a source principle. **The
> product now has three instances of one rule — recorded ≠ verified — at the sync boundary
> (AD-01A §8.4), the booking boundary (§18) and the money boundary (§19).**

### 11.2 Two consequences the surrounding model does not yet handle

> **⟦ARCHITECT ANALYSIS⟧**
>
> **(a) The rep's "Success" action is not lead Success.** The observed capture surface gives the rep
> three mutually exclusive outcomes and the third is labelled *Success* with only Remarks required.
> Under AD-01A §8.2 that action can only *initiate the booking workflow*; the lead becomes Success
> later, on someone else's approval. This is AD-01C's **T-6** (*who or what sets Success*) with new
> evidence on both sides: §18 step 6 describes a Sales Support approval, which points to **system
> derivation from the Booking**; the observed reference system points to **handler assertion**. The
> owner's intended BMexa process (§14, §18) points clearly at the former. **Not decided here.** →
> **V-22**.
>
> **(b) The record's condition between initiation and approval is undefined, and it is now on the
> critical path.** AD-01A §2.1 named this cost and answered it: the lead *"remains Follow-up, with its
> waiting-on qualifier set to the internal builder verification function"*, plus a derived rep-facing
> "my bookings awaiting verification" view computed from the Booking's own stage. **That answer
> depends on the waiting-on qualifier, which is N-2 — flagged as contradictory by AD-01B §7.1,
> clarified but explicitly left open by the Product Owner in AD-01C §1.2, and still listed open in
> consolidated §28.**
>
> **The finding:** AD-01B recorded N-2 as obstructing **Q14** and **Q2** (escalation and long-dated
> leads). The consolidated booking workflow shows it also obstructs the **core Sales→Sales-Support
> handoff**, because without it either the rep keeps getting nagged to follow up a prospect whose file
> is in verification, or the record silently leaves the queue with no stated basis. **N-2's priority
> is higher than AD-01B assessed. N-2 is not resolved here and nothing above narrows it.** → **V-23**.

### 11.3 Where Success attaches under a client-centric record

> **⟦ARCHITECT ANALYSIS⟧** The observed queue carries **Project Name** and **Booked Project** as
> separate columns — direct evidence that the project transacted is a distinct fact from the project
> of current interest, and that a record can hold both.
>
> Under the recommended shape: **the conversion belongs to the inquiry that converted**, the
> **Booking** owns its own lifecycle and financial snapshot (§20, §21, AD-01A §8.2), and the working
> record reflects the converted condition without absorbing it. This preserves AD-01C §3.2's
> CP-financial safety property (a flapping lead state must never present to the commission engine as
> a §26-forbidden cancellation) and AD-01 **E-16** unchanged.
>
> **One question this creates and does not answer:** if a client's inquiry for Project A converts
> while an inquiry for Project B remains open, what is the **working record's** operational
> condition? It is simultaneously converted (for A) and actively worked (for B). Under the
> record-level four-value lifecycle this is unrepresentable; under inquiry-level outcomes it is
> trivial, and the record's condition is a derived summary. **This is one of the strongest arguments
> that lifecycle must sit on the inquiry rather than the record — and it is the same argument that
> AD-01 §3 used to separate its eight concepts.** → **V-3**.

### 11.4 What Q6 needs restated, not reopened

> **⟦ARCHITECT ANALYSIS⟧** AD-01C §3.7's four scenarios (S1 valid conversion with later
> cancellation; S2 a Success that was never true; S3 an administrative correction; S4 a genuinely new
> opportunity after a success) are **unaffected in substance**. Only their *subject* changes if
> **V-1** resolves toward the client-centric record: S4's *"a genuinely new opportunity after a
> success creates a new Sales Lead"* becomes *"creates a new inquiry on the existing working
> record"* — structurally the same act, at the level where the evidence puts it. **AD-01C's
> organising principle — *restate what was never true; never restate what was true at the time* —
> is untouched and remains correct at whatever level it is applied.** **No Q6 decision requires
> revision.**

---

## 12. Lead vs Regeneration/Re-engagement

### 12.1 The three situations the sources describe, held strictly apart

> **⟦ARCHITECT ANALYSIS⟧** The consolidated document's §7 contains three bullets that prior analysis
> has treated as one phenomenon. They are not one phenomenon, and conflating them is how a revival
> gets laundered as a correction or a redistribution gets laundered as a new opportunity
> (AD-01E **U-18**, AD-01C §3.4).

| Situation | Trigger | Customer event? | Modelled by prior AD documents? |
|---|---|---|---|
| **S-α — Management redistribution.** A dumped or non-responding record is handed to a fresher for more attempts. | Management workload policy | **No** | **No** — C-6. This is the gap. |
| **S-β — Customer regenerates interest in the same project.** | Customer | Yes | AD-01C Q5-B (successor lead) then AD-01E (revive + episode). **Both frame the Lead as the thing that closed** — C-5. |
| **S-γ — Customer regenerates interest in a different project.** *"The client may then show more than one project interest on the same record"* (§7). | Customer | Yes | **AD-01E §3.1 routes this out of scope to a new Lead** — contradicted by §7/§8/§13 (C-4). |

### 12.2 What the model must be able to represent — and what it must not decide

> **⟦ARCHITECT ANALYSIS⟧** The task directs that revival rules **not** be decided prematurely, and
> that what BMexa conceptually *needs in order to distinguish* the cases be determined instead. That
> is answerable without inventing a rule; the rule is not.
>
> **Under the recommended shape the mechanical question largely dissolves.** A returning client does
> not require a record to be revived, because the working record never closed — it is *"long-lived"*
> by the Product Owner's own definition (§4). What arrives is a **new inquiry**, and §13's rule
> already says what to do with it: *"record the new inquiry event rather than silently overwriting the
> previous interest."*
>
> **What does not dissolve, and must not be papered over:** whether that new inquiry is a **new
> commercial opportunity** — a new capture, a new attributable engagement, a new denominator entry —
> or a **continuation** of one already counted. **AD-01E's U-1 is not answered by this; it is
> relocated from the Lead to the inquiry, where it is at least askable about a unit the business
> recognises.** AD-01 §1.3, AD-01C §5 and AD-01E §5.2 each independently confirmed total spec
> silence, and this pass adds nothing: consolidated §13 and §28 both list the boundary as **open**.

### 12.3 The conceptual information BMexa must hold to make the distinction

> **⟦ARCHITECT ANALYSIS⟧ This is the question the task actually asks, and it is answerable.** The
> facts below are the *inputs* any rule would need. **Listing them is not proposing a rule, and no
> combination of them is recommended here** (Rule 1, §88, consolidated §1).
>
> | # | Fact that must be available at the moment of re-contact | Why a rule would need it | Currently held? |
> |---|---|---|---|
> | **1** | Whether an **open (non-terminal) inquiry** already exists for this client on this project | Distinguishes *"same ongoing engagement"* from anything else. This is the only one of the seven that is not disputed. | Yes, if inquiries carry their own outcome |
> | **2** | The **terminal disposition and its recoverability posture** on the most recent closed inquiry for this client × project | AD-01A §8.3 Dimension C was approved expressly to enable this decision (AD-01B §4: *"the question that makes an already-approved decision usable"*) | Dimensions approved; **values are N-4, open** (**U-3**) |
> | **3** | **Elapsed time** since that closure | The dormancy-horizon candidate | Derivable — but **no threshold exists anywhere** (AD-01 §1.3; §58 sets no numbers) (**U-4**) |
> | **4** | The **source, campaign, channel and CP** of the incoming contact, compared with the closed inquiry's | **The one with money attached.** A different producer claiming a new engagement is the §11/§32/§40 case (**U-2**, AD-01C **T-4**) | Yes — the observed operation captures Source, Campaign, Enquiry From and Channel **per enquiry**, which is what makes this decidable rather than academic |
> | **5** | The **requirement profile** in play — project, unit type, budget band — compared with the prior | AD-01E §5.3 item 4's "materially changed requirement" candidate | Partially; and **no requirement model exists against which "materially changed" could be evaluated**, so this may be undecidable in MVP and the owner should be told so rather than asked to specify it |
> | **6** | Whether the prior inquiry's **attribution is resolved or under an unresolved §11 clash** | Re-opening work could pre-empt an adjudication §11 reserves to authorized leadership (**U-17**) | Yes, if claims are inquiry-scoped (**V-16**) |
> | **7** | Whether the prior inquiry reached **Success** | §06's Customer boundary and AD-01C **S4** already make this a new opportunity — settled, not open | Yes |
>
> **Facts 1 and 7 are settled. Facts 2–6 are exactly the open items AD-01E enumerated, and none has
> been answered by the new evidence.** → **V-14**, with **V-15** (fact 4) carrying the financial
> exposure and needing to be answered in the same sitting as AD-01C **T-4**, per AD-01E §3.5.

### 12.4 The three acts must be distinguishable in authorization and in reporting

> **⟦ARCHITECT ANALYSIS⟧** AD-01C §3.4 established the principle — *a correction is not a
> re-engagement, and a re-engagement is not a correction* — and AD-01E **U-18** recorded that revival
> removes the structural separation that used to enforce it. **The new evidence adds a third act
> (S-α, redistribution), so there are now three, with three different reporting effects:**
>
> | Act | Was the prior closure true? | Effect on a closed reporting period |
> |---|---|---|
> | **Correction** (AD-01C Q6-S2/S3) | **No** | **Deliberately restates it.** That is the point. |
> | **Re-engagement / new inquiry** (S-β, S-γ) | **Yes** | **Must never restate it.** The loss stands; a new engagement opens in the current period. |
> | **Redistribution** (S-α) | **Yes** | **Must not restate it and must not create a new capture** — no new engagement exists; management is re-attempting a closed one. |
>
> If these share a mechanism, a true loss can be erased from a closed period, a false loss preserved,
> or a re-attempt double-counted as a fresh capture. **Three distinct operations, three distinct
> authorizations, three distinct audit events (§54, R6).** → **V-12**, **V-18**, and **U-18** is
> **widened, not resolved**.

### 12.5 What this document explicitly does not authorise

> **⟦ARCHITECT ANALYSIS⟧** Unchanged from AD-01 §1.3, AD-01A §3.5, AD-01C §2.2 D11 and AD-01E §9.8,
> and restated because a section about returning customers is exactly where it erodes: **nothing here
> authorises remarketing, nurture, drip or outbound re-engagement campaigns.** §65 and §86 remain in
> force, and consolidated §29 lists AI voicebot/IVR among the non-goals. Deciding what the system does
> when a prospect returns does not authorise going out to get them. No weighted forecast, no
> temperature axis and no reason-coded loss chart is enabled by anything above (AD-01 §9.6, Q9, M-8).

---

## 13. Reporting/data requirements

> **⟦ARCHITECT ANALYSIS⟧ Business facts only.** No SQL, no query, no dashboard, no chart, no metric
> definition presented as approved. Each row states **the durable business fact that must exist**,
> **the level it must be keyed at**, and **what breaks if it is missing or keyed wrongly.**
> Consolidated §25 sets the standard directly: *"Metrics such as first-response time, FUT,
> conversion, follow-up workload and assignment performance must be based on durable business facts
> rather than UI-only counters."* AD-01 §8.3 and consolidated §25 both require this history to
> outlive the audit log's retention window (**R6**).

### 13.1 The required facts

| # | Reporting need | Durable business fact required | Keyed at | Breaks if missing / mis-keyed |
|---|---|---|---|---|
| **1** | **FUT** — *"total count of actual user-performed follow-ups"* (§9) | Every activity carries a **system-owned qualifying-for-FUT semantic** (R4: semantics in a column, never inferred from a type's code or label). Creation, assignment, transfer and system-generated first-entry events are **excluded** (§9, §31). | **Both** record-level and **custody-interval**-level must be computable | Record-only FUT leaks hidden work volume through a queue column under a history restriction (§9.4 H11) and misattributes a predecessor's effort to the current handler. Interval-only FUT loses the client's total engagement depth. |
| **2** | **First response** | Creation time; **assignment** time; **custody-interval start** time; and the timestamp of the **first qualifying** activity — with `effective time` and `recorded time` held separately (AD-01 §8.3, E-23) | Three variants: creation→first, assignment→first, **custody→first** | §9 flags the first two as open; the third is new and is what makes a fresher's responsiveness measurable at all. Conflating effective and recorded time corrupts every duration after an offline sync. **V-20.** |
| **3** | **Response / sub-response analytics** | Response type and sub-response as **tenant-scoped master rows with system-owned semantic columns** (R4), not a flat label list | Activity | A flat vocabulary mixing outcomes, milestones and internal process steps produces uninterpretable analytics — §7.3. And *Site Visit Done* as a sub-response competing with site-visit records is two sources of truth. **V-19.** |
| **4** | **Follow-up workload** | Activity counts per actor per period, with the qualifying semantic from (1) and the actor's historical identity preserved (§57) | Actor × custody interval × period | A departed employee's work must remain attributable (§57: *"never rewrite history as if the employee never existed"*). |
| **5** | **Current queue — Today / Future / Overdue** | The **next-action timestamp**, plus authoritative server time (§18's principle) | Working record | **Derived buckets, never persisted** (AD-01A §8.1; consolidated §11, §27). *Pending* is not a bucket — it is the old word for Overdue and does not survive. A tenant/user timezone answer is required the moment the feed exists (AD-01 §9.3; **M-6**). |
| **6** | **Overdue work and escalation** | The same timestamp, plus whatever **N-2** resolves the *waiting-on / Blocked* qualifier to be | Working record | **Obstructed.** Without N-2 there is no basis on which to suppress escalation for a record legitimately waiting on a lender, a customer, or **builder-side booking verification** (§11.2b). **N-2 is not resolved here.** |
| **7** | **Project-interest reporting** | Each inquiry's project, origination time, source, campaign, channel, requirement profile, and its own outcome + preserved reason | **Inquiry** | Keyed at the record, a client with three interests and one booking reports as 100% conversion and the two lost interests vanish from the denominator (§6.4). **V-17.** |
| **8** | **Transfer reporting** | Assignment Log entries with actor, from-handler, to-handler, time, method/provenance, the bulk act they belonged to, **and the with/without-history decision** | Assignment Log | *"How many records were transferred without history, by whom, last quarter"* is a management and audit question (§54) that is unanswerable unless the decision is recorded at the moment it is made — and it **cannot be backfilled** (§8.3). |
| **9** | **Assignment performance** | Per-handler, per-custody-interval: first response, FUT, outcomes reached, transfers received and made | Custody interval | Measured at the record level, a handler inherits a predecessor's history and is measured on work they never did — the exact unfairness transfer-without-history exists to prevent. |
| **10** | **Conversion** | The converting **inquiry**, its resolved attribution claim, and the **Booking** reaching §20 Stage 3 (AD-01A §8.2) | Inquiry → Booking | Keyed on lead lifecycle it breaks AD-01C §3.2's CP-financial safety property; keyed on the working record it inflates per §6.4. Whether a re-inquiry counts as a **Capture** in its period is **V-18** (AD-01E **U-5**). |
| **11** | **Dump / disposition analysis** | Each closure's **classified** reason on all three approved dimensions (AD-01A §8.3), **historised** — one closure per inquiry, never overwritten | Inquiry | AD-01 §9.1: *"the denominator is contaminated unless Dump is decomposed."* Additionally, **queue-exit (D-i) must be excluded from loss analysis entirely** or the fresher-redistribution case counts as a commercial loss twice (§10.2). |
| **12** | **Re-engagement reporting** | Inquiry count per client × project, each with its own origination, source and outcome; the time between them | Inquiry | Without per-inquiry sources, AD-01C **D5**'s defect returns: the second engagement's channel is unrecordable and the converting channel is credited to the one that did not produce it. |
| **13** | **Manager reporting** | Hierarchy membership over time; the reporting-manager relationship as a historical fact, not only a current one; breadth on the grant (**M-7**) rather than a role name (**R2**) | Employee / grant | AD-01E **U-9** unchanged: is a manager's entitlement evaluated against their grant *now* or *at the time*? Team composition changes, and both answers are defensible and materially different. |
| **14** | **Historical employee activity** | Preserved actor identity on every activity, assignment and disposition (§57); records survive deactivation | Actor | §57 is explicit. Separately, whether a departed or moved handler **retains read access** to their own work is **V-25** (AD-01E **U-14**) — a different question from whether the record preserves their name. |

### 13.2 Four cross-cutting constraints on all of the above

> **⟦ARCHITECT ANALYSIS⟧**
>
> 1. **Durability beyond the audit window.** The audit log is a security artefact with its own access
>    rules and its own retention (R6, AD-01 §8.3). *"How long did records spend in follow-up in
>    2026"* must be answerable in 2028 by an ordinary tenant-scoped query. Consolidated §25 states the
>    same requirement in the Product Owner's words. **A business-level history is required and is not
>    optional.**
> 2. **Reports branch on semantics, never on codes.** **R4**, restated by AD-01 §9.7: a tenant may
>    rename any value. Every report filters on the semantic column — validity class, responsibility
>    locus, recoverability posture, terminality, converted-ness, qualifying-for-FUT — never on a label
>    or a code. This is the rule most quietly broken in a reporting layer.
> 3. **Two report populations over one record.** AD-01E §9.6 identified this and it is **wider here**:
>    rep-facing figures must be **custody-scoped** (else §9.4 H11's inference channel), CP-facing
>    figures **inquiry-scoped** (§39, **U-16**), project-scoped viewers **inquiry-scoped** (§08, C-9),
>    and management figures full. **Four populations, one record, keyed on entitlement.** This is
>    simultaneously a reporting and an authorization requirement, and §45's warning applies — a report
>    filter is a read path and must not become a side door.
> 4. **Nothing above is promised as a chart.** AD-01 §9.6 stands unchanged: no weighted forecast
>    (M-8), no temperature-based quality analysis (Q9, **V-21**), and **no reason-coded loss or
>    source-quality comparison until N-4 supplies values** and the D-i/D-ii separation (§10) is
>    decided. Publishing those earlier produces numbers that look authoritative and are not.

---

## 14. Architectural alternatives

> **⟦ARCHITECT ANALYSIS⟧** Five. Each stated at its strongest before it is judged, on the standard
> AD-01C and AD-01E set. **AD-01E's model is evaluated on its merits, not given incumbency**, per
> this task's explicit instruction.

**ALT-1 — Status quo: Lead = Person × Project × process, no episodes.**
*Strengths.* Literal §06 compliance. §08 project scoping is clean and record-level. Attribution,
source, conversion and terminality each have exactly one unambiguous home. No intra-record boundary
anywhere. It is the model AD-01's entire eight-concept separation was built against, and that
separation is good work that survives.
*Weaknesses.* Fails **T1** decisively: one client interested in three projects is three queue rows,
three next-action commitments and three FUT counters, and the rep who makes one call must record
three follow-ups. Fails **T2**: the regenerated-for-another-project case (§7) cannot attach to the
record. Fails **T5**: nothing bounds "prior history" for transfer-without-history. Fails **T6**.
Contradicted by consolidated §4, §7, §13 and by the observed one-row-per-client operation.
*Judgement.* **Only viable if V-1 resolves against the client-centric reading** — in which case much
of this document's §5–§6 falls away and AD-01E becomes the right answer.

**ALT-2 — AD-01E's model: Person × Project Lead with first-class commercial episodes.**
*Strengths.* Solves the bounded-commerce problem (T3, T4) rigorously; AD-01E §2.2's dimension-by-
dimension analysis is the best account of the trade-offs in this repository and most of it transfers
to any bounded unit. Restores monotone terminality within a bounded unit. Re-arms AD-01A §8.3's
Dimension C as a gate. Keeps §08 project scoping record-level.
*Weaknesses.* Its bounded unit is **derived rather than evidenced** — the business names inquiries,
not episodes. Fails **T2** by construction (§3.1 routes cross-project out). Fails **T5**: a
mid-Follow-up transfer crosses no episode boundary, so the Product Owner's actual history control is
inexpressible (C-2). Does not model **T6** at all (C-6). Does not address **T1**, which is the
operator's most frequent complaint. And its §2.3/§8 cost case — that the successor model avoids
intra-record boundaries — **is falsified by C-9** if interests are plural.
*Judgement.* **Correct diagnosis, wrong entity, wrong boundary for visibility.** Its requirements are
retained in ALT-3; its episode is not.

**ALT-3 — Derived model: Client Sales Record (work) + Inquiry/Project Interest (commerce) + Custody
Interval (visibility).**
*Strengths.* Passes T1–T6. Every bounded-commerce property AD-01E's episode delivered is delivered by
an entity the business already names, dates, sources and field-lists. The visibility boundary matches
the control the Product Owner actually describes, and covers ordinary transfers as well as revival.
S-α becomes expressible. "New" becomes derivable with no history rewrite (§8.2). AD-01 §3's concept
separation is preserved and extended rather than abandoned.
*Weaknesses.* Moves §08 project scoping inside the record (C-9) — though that cost is incurred by
*any* plural-interest model. Requires the funnel to re-key from record to inquiry (**V-17**, a
source-of-truth change, §88 MUST-ASK). Introduces a canonical-entity and relationship change, also
§88 MUST-ASK. Makes *Dump* name two operations that must be disambiguated in the product (§10.4).
And it requires the Product Owner to resolve a contradiction between two documents they authored
(**V-1**).
*Judgement.* **Recommended, conditionally — see §15.**

**ALT-4 — Keep ALT-1's records; add a Person-level derived working view.**
The §06 Lead stays exactly as it is; the rep's queue row, timeline and next action are a **derived
aggregation** across the Person's open leads.
*Strengths.* Every §06/§08/§11 property is preserved untouched. Delivers much of T1 and T2 as the
operator *experiences* them at a fraction of the modelling cost. This is the evidence-adapted
descendant of AD-01E's **Alt-4**, and AD-01E was right to insist it be put to the owner.
*Weaknesses.* A **single next-action commitment cannot be derived** from N leads that each carry one
— something must own it, and the moment something does, the view has become a record. The same
applies to one handler, one status and one FUT. A "transfer" would have to move N leads atomically
with one history decision, which is a real operation the model has no entity to attach to. And a
derived continuity view is a read path like any other and can leak (§45).
*Judgement.* **Not recommended, but it must be put to the owner explicitly**, because if the
underlying requirement is *"the rep should see one story"* rather than *"one record owns the
work"*, this is materially cheaper. **Establishing which the owner means costs one question** —
and that question is part of **V-1**.

**ALT-5 — ALT-3's structure, with the §06 Lead name retained for the commercial unit.**
Structurally identical to ALT-3; differs **only** in which entity is called *Lead*. Here *Lead*
remains Person × Project (the commercial unit, ≈ the inquiry), and the work unit is named something
else — *Client Engagement*, *Client Sales Record*.
*Strengths.* Requires **no reinterpretation of §06 at all**; the Master Spec's canonical entity keeps
its definition and a genuinely new entity is added above it. Politically and textually the smallest
change to the approved corpus. Every §06-anchored argument in AD-01, AD-01C and AD-01E remains
literally true.
*Weaknesses.* The Product Owner, the reps and the consolidated requirements document all use *Lead*
for the **work** unit (§4: *"Lead / Client Sales Record"*). Naming the commercial unit *Lead* means
every conversation between product and engineering carries a silent translation, which is how the
C-1 contradiction arose in the first place.
*Judgement.* **ALT-3 and ALT-5 are the same architecture.** The choice between them is a naming
decision — but it is not a trivial one, because the ambiguity of the word *Lead* is the proximate
cause of the largest contradiction in this document. **The naming should be decided deliberately and
recorded, whichever way it goes.**

### 14.1 Comparison

| | ALT-1 status quo | ALT-2 AD-01E episodes | ALT-3 derived model | ALT-4 derived view | ALT-5 = ALT-3 renamed |
|---|---|---|---|---|---|
| T1 one call → one follow-up | **No** | No | **Yes** | Partly | **Yes** |
| T2 cross-project re-inquiry on one record | **No** | **No** | **Yes** | Partly | **Yes** |
| T3/T4 bounded commerce, source, attribution | Yes (one per lead) | **Yes** (episode) | **Yes** (inquiry) | Yes | **Yes** |
| T5 transfer without history | **No** | **No** | **Yes** | No entity to attach to | **Yes** |
| T6 management redistribution | Partly | **No** | **Yes** | Partly | **Yes** |
| §08 project scope stays record-level | **Yes** | **Yes** | No — intra-record | **Yes** | No — intra-record |
| Requires a new canonical entity (§88) | No | **Yes** (episode) | **Yes** (work unit + custody interval) | No | **Yes** |
| Requires the funnel re-keyed | No | **Yes** (U-6) | **Yes** (V-17) | No | **Yes** |
| Bounded unit is **evidenced** by the operation | n/a | **No** | **Yes** | n/a | **Yes** |
| Cost of being wrong | Model contradicts the operation; discovered on first use | Episode history unrecoverable if abandoned later | Naming/scoping churn; funnel re-key | Low, but may not satisfy the requirement | Same as ALT-3 |

---

## 15. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is
> decided, and no part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item
> sits in §88's MUST-ASK column.)*

**F-1 — Resolve V-1 before anything else.** The Master Spec's §06 Lead and the consolidated
requirements' *"Lead / Client Sales Record"* are two different entities, both Product-Owner-sourced,
and the whole line depends on which one *Lead* means. **This is not an architect's choice**
(§88: canonical entities), and it cannot be deferred, because attribution, project scoping, funnel
keying, the visibility model and the meaning of re-engagement all key on it.

**F-2 — Recommended shape: ALT-3/ALT-5 — separate the work unit from the commercial unit from the
visibility unit.** Conditional on V-1 resolving toward the client-centric reading.
- **Lead / Client Sales Record** — the work unit. Person-bounded, long-lived, one handler, one next
  action, one timeline, one queue row, *n* interests. The unit of assignment, transfer, workload and
  history visibility. **Not** the unit of commercial outcome, source credit, attribution, project
  scope or conversion. (Definition: §5.2.)
- **Inquiry / Project Interest** — the commercial unit. Dated, sourced, project-contexted; carries its
  own requirement profile, attribution claim set, outcome and **preserved** reason. The unit of
  conversion, source quality, CP attribution, commission and §08 project scoping. (Definition: §5.3.)
- **Custody Interval** — the visibility and work-context unit, carried by the **Assignment Log** that
  §06/§10/§57 and AD-01A §8.5 already require, plus the one new fact: the management history decision
  made at transfer. (Definition: §5.4.)

**F-3 — Sales Episode: REJECTED as a separate first-class entity; its requirements RETAINED and
re-homed.** Stated plainly because the task required that AD-01E's own proposal be challenged rather
than deferred to:
- AD-01E §3.3 was **right** that revival requires a bounded unit and that *"a visibility rule cannot
  be scoped to a unit that does not exist."* That finding is upheld.
- AD-01E was **wrong to conclude the unit had to be new.** The business already runs on one, names it,
  dates it, sources it and lists its fields (§5, §12, §13): the **inquiry**. Under **R12** an entity
  traceable to the operation is preferable to one derived by an architect, and under **Rule 1** a new
  canonical concept should not be introduced where an evidenced one serves.
- AD-01E was **wrong to make the episode the visibility unit.** The Product Owner's control is
  exercised at **transfer**, on live records as well as dumped ones (C-2). The episode covers a
  subset and misses the common case.
- **If V-1 resolves toward §06's Person × Project Lead, this rejection does not stand** and AD-01E's
  episode becomes the right answer, because inquiry and episode then coincide. **The rejection is
  conditional and is stated as such.**

**F-4 — Multiple project interests: append, never overwrite.** A change or addition of interest is a
**new inquiry event on the timeline**, per the Product Owner's own §13 rule. No past project
association is ever retroactively altered — which is what neutralises AD-01C **D3**'s hazard
(a record does not *change* project; it *accumulates* interests). Whether interests may be concurrent
or only sequential is **V-2**; which facts sit on the interest versus the record is **V-3**; the §08
consequence is **V-24**.

**F-5 — Dump: separate three concepts that one control currently serves.** Queue exit (record ×
custody interval), commercial outcome (inquiry, classified and preserved per AD-01A §8.3), and
redistribution eligibility (a management control that is **not** a property of the reason). **AD-01A
§8.3 is confirmed, empirically validated and not amended** (§10.3). The gap is a missing control, not
a missing dimension. **V-11**, **V-12**, **V-13**.

**F-6 — New: derive it, and scope it to the custody interval.** Retain *New* as user-facing and
reporting vocabulary; change only where it lives. This obtains transfer-without-history's operational
behaviour **with no history rewrite**, which is the strongest argument for it and an argument from
§07/**R6** rather than from convenience. **Requires the Product Owner to amend AD-01A §8.1**, which
this document does not do. Depends on **V-4** — *qualifying* is undefined, and New, FUT and
first-response must share one answer. **V-5**, **V-6**.

**F-7 — Activity: one timeline as a read model, several record classes in fact.** The consolidated
§8/§31 requirement is upheld; the storage inference is rejected (§7.2). Assignment and transfer
events come from the **Assignment Log** (§06) and are never duplicated; the computed first-response
entry is **derived, never stored** (AD-01A §3.6); booking events are **referenced**, never absorbed
(AD-01A §8.2). Every entry carries its class and its qualifying-for-FUT semantic as a system-owned
property (**R4**). The authorization filter lives in the projection, server-side (§11, §45, Rule 4,
consolidated §6/§17). **V-19** must be answered before any response analytics is promised.

**F-8 — History visibility: two boundaries, evaluated together, fail-closed.** Custody interval for
handler-facing history; inquiry for project-scoped and CP-facing visibility. Entitlement inputs remain
AD-01E's I1 participation ∪ I2 management breadth ∪ I3 conferral, **re-homed from episode to custody
interval**; custody is not an input (AD-01E §6.1, confirmed). **The one thing the union cannot
express is withholding from a prior participant — which is what §17 literally describes — and that is
V-7, the second-highest-leverage question in this document.**

**F-9 — Conferral as a parameter of the transfer act.** If conferral exists, prefer the third shape
(§8.4) over AD-01E's (a) derived-from-provenance or (b) separate-grant: it cannot silently confer, and
it adds no second act and no approval workflow, so AD-01A §8.5's prohibition stays intact. **U-7 is
effectively answered "yes" by the new evidence, which makes assignment provenance necessary and
unrecoverable-if-late.** **V-8.**

**F-10 — Re-engagement: the mechanical question dissolves; the commercial question does not.** A
returning client produces a **new inquiry on a record that never closed**. What remains undecided —
and is **not** decided here — is whether that inquiry is a new commercial opportunity. §12.3 states
the seven facts any rule would need; two are settled and five are open. **U-1 is relocated to the
inquiry, not answered.** **V-14**, **V-15**.

**F-11 — Attribution and commission key on the inquiry.** This is the condition with money attached.
**M-5**'s *"Lead or Person"* question becomes **four-way** — Person, working record, inquiry, or
AD-01E's episode. Until it is answered, AD-01C **D6**'s failure is live: a genuine §11 clash is
indistinguishable from two producers legitimately claiming two engagements, feeding §32/§40
commission. **V-16**, coupled to AD-01C **T-4** and AD-01E **U-15**. *(M-5 is not resolved here.)*

**F-12 — Q4 and Q6 are confirmed, not reopened.** Success = §20 Stage 3 is independently corroborated
by the real workflow (§14, §18). AD-01C §3.7's four scenarios and its organising principle stand.
Two surrounding gaps are new: **who sets Success** (**V-22**, AD-01C T-6, with new evidence pointing
at system derivation) and **the record's condition between booking initiation and approval**
(**V-23**), the latter placing **N-2 on the critical path of the core sales workflow** — a higher
priority than AD-01B assessed. **N-2 is not resolved here.**

### 15.5 What this does to the Orthogonal Lead Model

> **⟦ARCHITECT ANALYSIS⟧** AD-01A §8.6's Orthogonal Lead Model is **not refuted by anything in this
> document.** Its central property — that concepts which are authorised differently, changed by
> different actors, and true at different times must not share an axis — is confirmed twice over, once
> by the new evidence (consolidated §31 states it almost verbatim) and once by this analysis, which
> reached its conclusions by applying AD-01's own test.
>
> **What changes is not the separation but the *level* at which each separated axis attaches.** That
> is a material refinement and it is the single sentence this document reduces to:

> > **The Orthogonal Lead Model is correct about *which* concepts must be kept apart, and silent about
> > *what each one is attached to*. The new evidence supplies the missing half: lifecycle and
> > commercial outcome attach to the inquiry; queue condition, next action, assignment, workload and
> > "New" attach to the working record; historical visibility attaches to the custody interval;
> > attribution attaches to the inquiry; booking remains entirely its own.**

| AD-01A §8.6 component | Level it attaches to under this recommendation |
|---|---|
| Lead Lifecycle *(persisted)* | **Split.** Commercial outcome → inquiry. Queue condition → working record, custody-scoped. *New* → derived (**V-6**). |
| Action / Next-Action conditions *(derived)* | **Working record.** Unchanged; confirmed by consolidated §11/§27. |
| Activity history | **Working record**, with per-activity inquiry reference and custody-interval membership (§7). |
| Assignment data/history *(log-based, zero axis values)* | **Working record.** Unchanged and strengthened; now also carries the history decision (§8.1). |
| Attribution / Clash *(on the claim entity)* | **Inquiry** (**V-16**). Unchanged in shape; the anchor moves. |
| Sync transport state *(not a lead axis)* | Unchanged. |
| Verification / Conflict state *(persisted, origin-independent)* | **Working record or inquiry — undetermined.** Duplicate detection operates on the prospect (**M-5**); clash operates on the claim, which is inquiry-scoped. *Recorded as a consequence of V-16; not decided.* |
| Independent Booking lifecycle | Unchanged. Referenced by the converting inquiry; never absorbed (AD-01A §8.2). |
| Dump disposition classification *(three dimensions)* | **Inquiry.** Framework unchanged and validated (§10.3). |

---

## 16. Business decisions required

**Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here. Per Spec
Rule 1, §88, §97 and the consolidated requirements' own §1 operating rule, none is guessed.**
Numbered **V-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U** namespaces.

### 16.1 Tier 1 — the model's shape depends on these

| # | Decision required — stated precisely | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **V-1** | **Is the Lead the client-centric working record (consolidated §4, §7, §13) or the §06 Person × Project × process relationship?** Both are Product-Owner-sourced and they describe different entities. | C-1, §5 | **Direct conflict between two PO sources.** Consolidated §28 lists the related boundary as open; §30 requires such conflicts to be resolved explicitly. | Every downstream answer — attribution anchor, funnel key, §08 scoping, visibility boundary, the meaning of re-engagement — is decided by default rather than deliberately. **This is the root.** |
| **V-2** | If client-centric: may one working record hold **concurrent** interests in more than one project, or only **sequential** ones? | §6.1 | **Silent.** §4/§7/§13 say "multiple … over time"; the observed single-status row is weak evidence for sequential. | Decides whether one status, one next action and one reason per record are sufficient, or must become per-interest. |
| **V-3** | **At which level does the lifecycle disposition sit** — working record, project interest, or both with different meanings? And which facts (unit type, budget, requirement profile, terminal reason) belong to which? | §5.2, §6.3, §10.4, §11.3 | **Silent.** Observed placement is record-level, but the row is denormalised. | A record whose Project-A inquiry converted while its Project-B inquiry is live is unrepresentable under a single record-level value (§11.3). |
| **V-4** | **Does a non-connected contact attempt count as a qualifying user follow-up** — for FUT, for first-response, and for the New → Follow-up boundary? | §5.5, §7.4, §13.1 | **Undefined.** §9 says *"first qualifying user follow-up"* and never defines *qualifying*. The observed operation carries a separate **Attempted** bucket. | FUT, first-response and New each acquire an independent implicit boundary and will disagree. **They must share one answer.** |
| **V-5** | **Is "New" scoped to the record or to the current custody interval?** | C-3, §5.5 | **Explicitly deferred by the PO**: consolidated §11 — *"exact lead-vs-handler scope must be finalized."* | The transfer-without-history case either lies to the handler or forces a forbidden backward transition. |
| **V-6** | If New is custody-scoped, **does AD-01A §8.1's four-value persisted lifecycle require amendment** so that New is derived rather than persisted? | §5.5 | Requires amending a **recorded PO decision**. Not amended here. | A persisted New becomes a second source of truth for a fact the activity history already carries (AD-01A §5.2's own objection). |
| **V-7** | **Does "transfer without history" override a receiving handler's participation entitlement (a withholding/deny capability), or does it apply only to handlers with no prior participation (a fail-closed default)?** | C-2, §9.3 | **Conflict.** Consolidated §17 states no carve-out; AD-01E §6.3 is an explicit union-without-deny and argues the restriction is *"about a handler who was never there."* **R2** refuses deny-precedence for role permissions. | Two structurally different authorization models. **Unrecoverable if answered late** — an unrecorded transfer decision cannot be reconstructed. **Second only to V-1 in leverage.** |
| **V-8** | Is the with/without-history choice **mandatory on every transfer**, what is the **default**, may it be **changed after the fact**, and by whom? Does a **bulk** transfer apply one decision to all records? | §8.4, §8.5 | **Silent.** §16 says transfer *"may include"* the decision. | A default chosen by implementation is an authorization rule chosen by implementation (§88, Spec Rule 4). |

### 16.2 Tier 2 — commercially or financially consequential

| # | Decision required | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **V-11** | **Does Dump end the opportunity, end the current handler's work, or both — and is it one control or two?** | §10.2 | Consolidated §11 states the ambiguity itself: *"may also function as workload-management disposition; semantics must be kept precise."* | Loss analysis double-counts re-attempted records; or queue exit is impossible without declaring a commercial loss. |
| **V-12** | **Is management-initiated redistribution of a dumped record permitted, and what is the record's queue condition afterwards?** It is neither revival (no customer event), nor correction (the Dump was right), nor a new opportunity. | C-6, §10.2, §12.1 S-α | **Described in §7; modelled by no prior AD document.** | A routine described operation is unperformable: the fresher receives a record with no next action, in no feed, filtered out of their own queue (§10.2). |
| **V-13** | Does redistribution require a customer re-engagement, or may it occur with **no customer event at all**? | §12.1 | §7 describes it with none. | Conflating it with revival lets a re-attempt be counted as a new capture (§12.4). |
| **V-14** | **For a re-contact after a rightful closure, what distinguishes a genuinely new commercial opportunity from continuation of an existing one?** *(AD-01E **U-1**, relocated from Lead to inquiry — relocated, not answered.)* | §12.2, §12.3 | **Never addressed** — AD-01 §1.3, AD-01C §5, AD-01E §5.2, consolidated §13 and §28 all confirm. | A business rule is created by a data-model default — an invented rule under §88. |
| **V-15** | **Does a re-inquiry arriving through a different source, campaign or CP constitute a new attributable opportunity?** *(AD-01E **U-2**, coupled to AD-01C **T-4**.)* | §12.3 fact 4 | **Silent** (§11, §32, §40, §41). | Direct §32/§40 commission exposure. **Answer in the same sitting as T-4.** |
| **V-16** | **Do attribution claims and commission entitlement attach to the Person, the working record, the inquiry, or an episode?** **M-5** becomes a four-way question. | §6.3, §15 F-11 | **M-5 open**; §11/§32/§40 silent on any sub-lead unit. | **The live financial defect** (AD-01C **D6**, AD-01E **U-15**): a genuine §11 clash is indistinguishable from two legitimate engagement claims. |
| **V-17** | **Does the conversion funnel key on the working record or the inquiry?** *(AD-01E **U-6**, relocated.)* | §6.4, §13.1 | Changes **AD-01 §9.1** — a **source-of-truth rule**, §88 MUST-ASK. | Per-record keying inflates conversion and erases lost interests from the denominator. |
| **V-18** | **Does a re-inquiry count as a Capture in the period it opens**, and does it enter the §14 "New leads" feed? *(AD-01E **U-5**, unchanged.)* | §12.4, §13.1 | **Silent.** | Conversion denominators are flattered or deflated with no stated intent. |
| **V-22** | **Who or what sets Success** — handler assertion, or system derivation from the Booking reaching §20 Stage 3 via Sales Support approval? *(AD-01C **T-6**, with new evidence.)* | C-7, §11.2a | §18 step 6 points at derivation; the observed reference system was handler-asserted. **Not stated for BMexa.** | Determines whether AD-01C's Q6-S2b error class exists at all, and how large the correction surface is. |
| **V-23** | **What is the record's operational condition between booking initiation and Sales Support approval**, given Success = Stage 3? | C-7, §11.2b | AD-01A §2.1 answered it *conditional on the waiting-on qualifier* — which is **N-2**, open (AD-01B §7.1, AD-01C §1.2, consolidated §28). | Either the rep is nagged to follow up a prospect in verification, or the record leaves the queue with no stated basis. **Puts N-2 on the critical path of the core sales workflow.** |

### 16.3 Tier 3 — scope, visibility detail and vocabulary

| # | Decision required | Arises from | Source status |
|---|---|---|---|
| **V-9** | Does a history restriction hide the **existence** of prior work (counts, FUT, dates, last remark, last dump reason) or only its **content**? *(AD-01E **U-11**, restated at the custody boundary.)* Note the observed operation exposes these as **work-queue columns**, not detail-page fields. | §9.1, §9.4 | **Silent.** AD-01E §6.6 offered a default (disclose existence, withhold contents) and explicitly declined to decide. |
| **V-10** | Does the restriction bind **API, search (§45), exports (§52), reports (§63), notifications (§58), attachments (§71), background jobs, audit access (§54) and offline caches (§46/§47)** — i.e. is AD-01E §8's surface list the intended scope? | §9.5 | Consolidated §6/§17 require authorization enforcement but do not enumerate surfaces. |
| **V-19** | Must the **response / sub-response** vocabulary carry semantic classification columns, as the Dump-reason framework does? And is *Site Visit Done* as a sub-response, or the **site-visit record** (§09, §80), the source of truth? | §7.3 | **Silent.** The observed vocabulary mixes outcomes, milestones and internal process steps. |
| **V-20** | Which of **creation→first-response**, **assignment→first-response** and **custody→first-response** are required, and what are the timezone/working-hour semantics? | §13.1 | Consolidated §9 flags the first two as open; the third is new. |
| **V-21** | Is **enquiry type / temperature (cold, warm, hot)** in BMexa scope? Its appearance in consolidated §12 is a record of the **old system's** fields, not a BMexa requirement. | §6.3 | AD-01 §1.3/§3.4: absent from all 97 spec sections. **Owned by Q9 / M-8 — not resolved here.** |
| **V-24** | Does **§08 project-scoped authorization** evaluate against the working record or the inquiry, and what does a viewer scoped to Project A see of a record that also holds a Project B interest? | C-9, §9.2 | **Silent.** §08 assumes a record has a project. |
| **V-25** | Does a **past handler's participation entitlement survive** reassignment away, role change, or departure? *(AD-01E **U-14**, unchanged.)* | §9.2, §13.1 | **Silent.** §57 preserves actor identity on the record; it says nothing about read access. |
| **V-26** | Is **IVR number / channel intake metadata** in BMexa base scope, given that §65/§86 and consolidated §29 forbid building IVR/voicebot capability? Recording provenance and building telephony are different things. | C-10 | Consolidated §5/§12 list the fields; §29/§65/§86 forbid the system. |

### 16.4 Items from prior documents that this reconciliation does **not** resolve

**Explicitly NOT resolved, reopened or narrowed here:** **N-2** (Blocked persistence — AD-01B §7.1,
AD-01C §1; its *priority* is raised by V-23, its substance is untouched); **N-1**, **N-3**, **N-4**;
**Q2, Q3, Q5, Q6, Q8–Q16** (Q5's *framing* is challenged in C-5 and §12; no Q5 answer is given);
**Q1, Q4, Q7**, the sync/verification split and the elimination of the assignment axis — all decided
at AD-01A §8 and treated as fixed, with Q4 explicitly **not reopened**; **T-1 … T-12** raised by
AD-01C; **U-1 … U-20** raised by AD-01E (mapped in §17.5 as *relocated*, *widened*, *effectively
answered by evidence* or *unchanged* — **none is decided by this document**); and blockers **M-2 …
M-20**.

**M-blockers directly implicated and left to their owners:** **M-3** (default role set — needed
before any transfer-eligibility or breadth rule can be expressed); **M-5** (uniqueness boundary —
acquires a **fourth** candidate anchor via V-16); **M-7** (record-visibility breadth vocabulary, and
whether "team" is real — consolidated §3 now names *Manager / Reporting Manager* as an actor, which
supplies part of AD-01E **U-10** but changes nothing about **R2**'s prohibition on branching on a
role name); **M-8** (weighted pipeline — owns V-21 with Q9); **M-9** (commission model — consumes
V-16); **M-14** (offline queue — consumes AD-01E U-20). **None is resolved, narrowed or given a
preferred branch here.**

---

## 17. Impact on AD-01 through AD-01E

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Each row states what the new
> Product-Owner information does to a prior position and why. Where a prior document is **confirmed**,
> that is recorded as deliberately as where it is contradicted.

### 17.1 AD-01 — Lead State Machine

| Section | Effect |
|---|---|
| §1.2 (§06 quotation) and §7 **E-09** (*same Person, two projects = two leads*) | **CONTRADICTED by new PO evidence** — consolidated §4, §7, §13 place multiple project interests on one record. E-09 was a faithful reading of §06; §06 itself is now in question (**V-1**). **Not edited.** |
| §1.3 — spec-silence register | **CONFIRMED and extended.** Re-engagement, SLAs, temperature and loss vocabulary remain undefined. The consolidated document adds field-level evidence of the *old* system without converting any of it into a BMexa requirement — which §1 of that document states as its own operating rule. |
| §2.3 — *"Pending" is ambiguous across at least three unrelated conditions* | **CONFIRMED exactly.** The PO has since removed the word: *Pending* and *Overdue* are the same thing, and only *Overdue* survives (consolidated §11, §27). |
| §2.5 — *Dump is defined by follow-up necessity, not by outcome* | **CONFIRMED and shown to be the crux.** §10 decomposes Dump into three concepts precisely because §2.5's distinction is load-bearing in the real operation. |
| §3 — the eight-concept separation and its test | **CONFIRMED, and near-verbatim in consolidated §31.** Extended by two further separations the new evidence forces: work unit vs commercial unit, and custody interval as a distinct scope. |
| §5.1 / §6.1 — four-value lifecycle; *Anything → New* forbidden | **In tension with a custody-scoped New** (C-3). Under F-6 the prohibition becomes **moot rather than violated**: with New derived, there is no backward edge, and §07's historical-integrity concern is untouched. **Requires PO amendment of AD-01A §8.1; not made here.** |
| §7 **E-04** (reassignment must not move the lifecycle) | **CONFIRMED and sharpened.** Transfer-without-history creates direct pressure to set the lifecycle to New; §8.2 shows why that would rewrite history and how derivation avoids it. |
| §7 **E-05** (cold/hot is derivable, not a state) | **CONFIRMED.** The observed sub-response vocabulary carries engagement signals; none needs a state. |
| §7 **E-16** (unit transfer must not touch lead state) | **CONFIRMED**, and reinforced by keeping conversion on the inquiry/Booking (§11.3). |
| §8.3 — business-level state history outliving R6's window | **CONFIRMED by consolidated §25**, in the PO's own words. Now must additionally record which **inquiry** and which **custody interval** each entry belongs to, or the history is an uninterpretable interleaving. |
| §9.1 — funnel keyed on the lead's current state | **MUST BE RE-KEYED to the inquiry** (**V-17**). Same conclusion AD-01E reached for episodes, reached here for a different unit. **Source-of-truth change, §88 MUST-ASK.** |
| §9.3 — Action Feed is a report, not a state | **CONFIRMED** by consolidated §11/§27 and the observed derived buckets. |
| §9.6 — what must not be promised as a chart | **CONFIRMED and widened** (§13.2 item 4). |
| Everything else | **Unchanged and still NOT APPROVED FOR IMPLEMENTATION.** |

### 17.2 AD-01A — Amendment and the §8 Product-Owner decisions

| Item | Effect |
|---|---|
| §8.1 — four-value lifecycle; Pending rejected; Today/Future/Overdue derived | **Three of four values CONFIRMED. Today/Future/Overdue CONFIRMED independently** (consolidated §11, §27, including the PO's own Pending = Overdue clarification). **"New" CHALLENGED** as to scope and persistence — consolidated §11 itself defers the scope question. **An amendment is requested of the Product Owner (V-5, V-6); none is made here.** |
| §8.2 — Success = §20 Stage 3; Booking's lifecycle is separate; cancellation never rewrites Success | **CONFIRMED by the real workflow** (consolidated §14, §18). **Q4 NOT REOPENED.** Two surrounding gaps surfaced: **V-22** (who sets it) and **V-23** (the condition in between). |
| §8.3 — three-dimension Dump framework; mandatory reason; preserved reason | **CONFIRMED and EMPIRICALLY VALIDATED** against the observed 15-value vocabulary (§10.3), including the contested *Redundant* class. **Not amended.** The redistribution gap (**V-12**) is a missing **control**, not a missing dimension — Dimension C must not be asked to carry it. |
| §8.4 — sync ≠ verification | **CONFIRMED and GENERALISED.** Consolidated §18 and §19 show the same principle at the booking and money boundaries; §31 states it as a source principle. |
| §8.5 — no persisted assignment axis; Owner/Handler/Assignment Log carry it | **CONFIRMED and STRENGTHENED.** The new evidence loads more onto the Assignment Log (bulk-act identity, manager actor, provenance, the history decision) — exactly the direction §8.5 specified. Nothing here reintroduces the eliminated axis. |
| §8.6 — the Orthogonal Lead Model | **The separation is CONFIRMED; the attachment levels must be restated** (§15.5). This is a material refinement, not a refutation. |
| §1.7 / **N-2** — the waiting-on qualifier | **Untouched in substance; raised in priority.** V-23 shows N-2 obstructs the core Sales→Sales-Support handoff, not only §58 escalation as AD-01B X-6 recorded. Mild new *evidence* exists (the observed sub-responses *Call Back Later*, *Cross Call Required* look like who-owes-the-next-move signals) and is recorded **without** being used to narrow N-2. |
| §3.6 — derive engagement depth; do not record what is computable | **CONFIRMED and applied** to reject storing the computed first-response timeline entry (§7.2 class 8). |

### 17.3 AD-01B — Dependency and ordering

| Item | Effect |
|---|---|
| The dependency graph over the thirteen | **Gains a new root above all of them: V-1.** Q5's position as *"the last remaining question that can change the model's shape"* (§4) is **superseded** — V-1 is upstream of Q5 and changes what Q5 is even asking (C-5). |
| §4's recommendation to take Q5 next | **Superseded in ordering**, not in reasoning. AD-01B's rework-asymmetry argument (*cheap before history accumulates, unrecoverable after*) is the correct standard and it is what makes **V-1**, **V-7** and assignment provenance urgent. |
| §7.1 — the Blocked contradiction | **Unchanged.** Resolved neither here nor by the consolidated document, which still lists it open (§28). Its *priority* rises (V-23). |
| §7.2 — mandatory Dump reason vs legacy import | **Unchanged**, and now also relevant to migrating the historical system's dump-reason values, which N-4 must account for. |
| **X-6** (Q14 ← N-2) | **Widened:** N-2 now also gates the booking-verification interval (V-23). |

### 17.4 AD-01C — Terminality (Q5 · Q6)

| Item | Effect |
|---|---|
| §2.5 — **Q5 recommendation (Alternative B: new successor Lead, mandatory typed reference)** | **Already superseded by AD-01E**, per AD-01E's own header. **This document does not restore it**, and additionally challenges the *framing* both it and AD-01E share: both presuppose the **Lead** is the thing that closed (C-5). Under a client-centric record the thing that closes is the **inquiry**. **This is a challenge, not a reversal**, and it is downstream of V-1. |
| §2.2 — the twelve dimensions | **The best analysis of these trade-offs in the repository, and it transfers.** Every dimension re-reads coherently with *inquiry* substituted for *lead as the bounded unit*: **D1** terminality is monotone per inquiry; **D3**'s project-corruption hazard is neutralised by the append-never-overwrite rule (F-4); **D5** source attribution is per inquiry; **D6** clash-vs-two-engagements is distinguishable; **D8/D9** reasons are historised by construction; **D12** reconstructibility needs no unbackfillable reference because no new record is created. |
| §2.6 / **T-10** — Dimension C stranded under Alternative B | **Un-stranded**, as AD-01E §3.5 also found. Posture is a natural gate on whether a closed inquiry may be resumed versus requiring a new one — **but it still cannot be specified, because the values are N-4.** (**V-14**, **U-3**.) |
| §3.7 — **Q6 recommendation** (Success permanent; corrections outside the ordinary machine; S4 = new opportunity) | **UNTOUCHED AND CONFIRMED.** Only S4's *subject* changes if V-1 resolves client-centric: *"a new Sales Lead"* becomes *"a new inquiry on the existing record"* — the same act at the level the evidence puts it. **No Q6 decision requires revision.** |
| §3.4 — *a correction is not a re-engagement, and a re-engagement is not a correction* | **CONFIRMED and WIDENED to three acts.** Management redistribution (S-α) is a third act with its own reporting effect, and all three must be distinguishable in authorization and in reporting (§12.4). This widens AD-01E **U-18**. |
| **T-4 / T-5** (temporal reach of a CP claim) | **Unchanged and still money-bearing.** V-15 must be answered with T-4 in one sitting. |
| **T-6** (who sets Success) | **New evidence supplied** (§18 step 6 vs the observed handler-asserted action). **Not answered** → V-22. |
| **T-1, T-2, T-3, T-7, T-8, T-9, T-11, T-12** | **Unchanged.** T-1 (successor vs duplicate) is largely moot if no new record is created; T-2 (who may declare re-engagement) relocates to *who may open an inquiry on a closed interest*. Neither is resolved. |

### 17.5 AD-01E — Re-engagement and controlled historical visibility

| Item | Effect |
|---|---|
| §1.2 — the direction's two requirements held together (inviolable record + differential readability) | **CONFIRMED as the real difficulty**, and confirmed independently by consolidated §6, §17 and §31. AD-01E identified the hard problem correctly. |
| §3.1 — *"the direction is necessarily scoped to same Person × same Project"* | **CONTRADICTED (C-4).** Consolidated §7, §8 and §13 describe the different-project re-inquiry landing **on the same record**. AD-01E treated §06/E-09 as settled ground rather than as a decision it was making, which is exactly why the new evidence reaches it. **D3, which AD-01E called *"fatal to revival as a universal rule"*, rests on this premise.** |
| §3.3 — *"revival requires the episode to become first-class"* | **The requirement is UPHELD; the entity is CHALLENGED (F-3).** A bounded unit is genuinely needed and AD-01E's reasoning for it is sound. The business already has one — the **inquiry** — which is dated, sourced, project-contexted and field-listed by the PO, where the episode is architect-derived. **Conditional: if V-1 resolves toward §06's Lead, the episode stands and this challenge falls.** |
| §4.5 — Q5-B option (iii): revival opens a new episode; the lead's lifecycle never moves backward | **The principle is CONFIRMED; the carrier changes.** Nothing moves backward under F-2 either — the closed inquiry keeps its disposition and preserved reason permanently, and a new inquiry opens. AD-01 §6.1 needs no backward edge under either model. |
| §6.3 — entitlement per **(viewer, lead, episode)**; I1 ∪ I2 ∪ I3; custody not an input; fail-closed | **PARTLY CONFIRMED, PARTLY CORRECTED.** Custody-is-not-entitlement: **confirmed** (§9.1). Fail-closed: **confirmed**. The three inputs: **retained**. **The boundary unit is corrected from episode to custody interval** (C-2, §9.2), because the PO's control operates on ordinary transfers of live records, which cross no episode boundary. |
| §6.3's union-without-deny shape | **CONTRADICTED by the literal reading of consolidated §17** (§9.3). A union cannot withhold history from a receiving handler who previously participated, which is what *transfer without history* appears to permit. **R2** refuses deny-precedence for role permissions, so if withholding is wanted it must be a scoped, recorded, per-interval restriction attached to a management act — not a general deny rule. **V-7, and it is unrecoverable if answered late.** |
| §6.8 — the inference channel | **CONFIRMED and made worse.** The observed operation exposes FUT, last-followed date, last remark and dump reason as **work-queue columns**, so the channel is the default surface, not an edge case. **V-9, V-10.** |
| §6.6 H1–H12 | **Carry over.** H10 (existence) and H11 (aggregates) sharpen; H12 (other projects) moves from out-of-scope to central (C-9). |
| §7 / **U-7** — *does explicit assignment confer on a non-participant?* Called *"the single highest-leverage unresolved item."* | **EFFECTIVELY ANSWERED "YES" BY NEW EVIDENCE** (consolidated §6, §16: management *deliberately* decides, about *"the receiving employee"*). AD-01E's own conditional therefore triggers: **assignment provenance is architecturally necessary**, and it **cannot be backfilled**. The owner should affirm the reading rather than inherit it. |
| §7.3 — two conferral shapes, neither obviously right | **A THIRD SHAPE IS SUPPLIED BY THE EVIDENCE** (§8.4): conferral as a **parameter of the transfer act**. It dominates both on their own stated costs — no silent conferral, no second act, no drift toward the workflow AD-01A §8.5 forbids. **V-8** remains. |
| §8 — twelve enforcement surfaces | **CONFIRMED in substance; two amendments** (§9.5): the scope widens from revived leads to **every transferred lead**, and the comparative claim that *"nine of the twelve rows require no new work"* under the successor model **is falsified by C-9** if project interests are plural — the intra-record boundary is a cost of the operation, not of revival. |
| §2.3 — the security-cost asymmetry that made AD-01E's recommendation *conditional rather than enthusiastic* | **MATERIALLY WEAKENED by C-9**, for the same reason. The owner should know this, because it was AD-01E's stated reason for hedging. |
| §9 — reporting implications | **CONFIRMED**, with the key moving from episode to inquiry (**V-17**, **V-18**). |
| §10 **Alt-4** (successor leads + continuity presentation) | **Vindicated as worth asking**, and re-stated as **ALT-4** in §14 with the new evidence applied. AD-01E was right that establishing whether the owner means *"one story"* or *"one record"* costs one question — that question is now part of **V-1**. |
| §11 R1–R8 | R1/R2/R3 **conditional on V-1** (F-3). R4 **corrected** on boundary unit and deny-capability (F-8). R5 **triggered** — U-7 answered "yes", provenance necessary (F-9). R6 **confirmed and widened to four candidates** (F-11). R7 **confirmed unchanged**. R8 **confirmed** — put ALT-4 to the owner. |
| **U-1 … U-20** | **U-1** relocated to the inquiry (**V-14**) — not answered. **U-2** → V-15, unchanged. **U-3** open (N-4 values). **U-4** open. **U-5** → V-18. **U-6** → V-17. **U-7** effectively answered by evidence; its residue is **V-8**. **U-8** gains a third shape. **U-9** unchanged. **U-10** partly supplied (consolidated §3 names *Manager / Reporting Manager* as an actor) but **R2**/M-7 unchanged. **U-11** → V-9. **U-12** → V-9/V-10, surface widened to list columns. **U-13** open. **U-14** → V-25. **U-15** → V-16, now four-way. **U-16** unchanged. **U-17** unchanged. **U-18** **widened to three acts** (§12.4). **U-19** re-expressible at the inquiry level and still needing PO affirmation. **U-20** unchanged. **None is decided here.** |

---

## 18. Recommended next architecture decision

> ### **V-1 — Is the Lead the client-centric working record, or the §06 Person × Project × process relationship?**
>
> **This is a recommendation about *sequence and subject*. No answer to V-1 is proposed, implied or
> preferred here.** §5's recommended definitions are explicitly conditional on it, and if V-1 resolves
> toward §06, AD-01E's episode model becomes the correct answer and §§5–6 and F-2/F-3 of this document
> fall away.

**Why V-1 and nothing else.**

1. **It is a genuine conflict between two Product-Owner sources, not a gap.** §06 and consolidated
   §4/§7/§13 describe different entities. Consolidated §30 requires exactly this class of conflict to
   be *"resolved explicitly and recorded in dated decision documents"* before implementation, and §32
   names this reconciliation as the step that should precede schema design.
2. **Highest out-degree of any open question in the line.** V-2, V-3, V-5, V-6, V-16, V-17, V-24 are
   directly determined by it; V-7, V-11, V-12 and V-14 are reshaped by it; **Q5 itself is reshaped by
   it** (C-5), which displaces AD-01B §4's recommendation to take Q5 next. AD-01E's R1–R3 stand or
   fall on it.
3. **It is the last question that changes the model's *shape* rather than its parameters** — the same
   standard AD-01B §4 used to prioritise Q5, applied one level up. Everything downstream is a
   parameter of the answer.
4. **The rework asymmetry runs one way and is severe.** Attribution anchored to the wrong unit,
   project associations recorded as a mutable field rather than appended interests, and a funnel keyed
   to the wrong level all produce history that **cannot be reconstructed later** — nobody can recover,
   two years on, which of a record's three interests a 2026 claim was actually about. This is AD-01B
   §4's and AD-01E §7.1's asymmetry argument, applied to the root.
5. **It is squarely §88 MUST-ASK** — *changing canonical entities* and *changing relationships* — and
   delegation to an architect is not authorization (AD-01A §7).

**Answer it together with one question and no more.** **V-7** — *does "transfer without history"
withhold from a prior participant, or only fail closed for newcomers?* It is the second-highest
leverage item, it is the only other item that is **unrecoverable if answered late** (an unrecorded
transfer decision cannot be reconstructed, exactly as AD-01E §7.1 established for provenance), and
the two are cheap to answer in one sitting because both are questions about what the operation
actually does rather than about mechanism.

**Explicitly not recommended next:** **V-16** (attribution anchor). It carries the most money, but it
has the most inbound edges — V-1, V-2, V-3, M-5, T-4 — and answering it before V-1 fixes a commission
rule onto a unit that may not exist. It is the single worst question to attempt early, for the same
reason AD-01B §4 gave for Q10.

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype and no
"temporary" lead table. Consolidated §30 states it: *"No schema/code implementation should be inferred
from an unresolved product ambiguity."* The Lead/Client architecture is unresolved.

---

## Closing note

**STATUS: ANALYSIS ONLY — NOT AN ARCHITECTURE APPROVAL**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it. No UI, visual, layout or interaction design is proposed
anywhere, and the Product Owner's screenshots have been used **strictly as workflow and
information-model evidence**, per consolidated requirements §1, §24 and §26.

**None of AD-01, AD-01A, AD-01B, AD-01C or AD-01E is modified by this document.** Where the new
Product-Owner information contradicts, weakens or effectively answers part of a prior document, that
is stated explicitly — with the document and section named, and the reason given — and **the prior
file is left exactly as it stands.** In particular: AD-01A §8's recorded Product-Owner decisions are
treated as binding input throughout; **Q4 is not reopened**; AD-01C's Q6 recommendation is untouched
and requires no revision; **N-2 is not resolved**; and blockers **M-2 … M-20** are not resolved.

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column —
canonical entities, relationships, authorization rules, source-of-truth rules, CP commission logic and
audit requirements are all engaged. Per AD-01A §7, **delegation to an architect is not
authorization**, and a Product-Owner preference recorded as evidence is not an approved architecture.
The analysis above is offered so that it can be attacked on its merits rather than deferred to.

**The Lead / Client architecture remains unresolved and unapproved.** Nothing here may be implemented,
and none of AD-01 through AD-01E is amended by it, **until the project owner approves in writing.**
Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: ANALYSIS ONLY — NOT AN ARCHITECTURE APPROVAL**




