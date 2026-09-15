STATUS: PROPOSED — NOT APPROVED

# AD-01H — Lead Lifecycle Ownership (V-3) and Concurrent Project Interests (V-2)

> This document resolves **exactly two** items — **V-2** and **V-3** from AD-01F §16.1, answered as
> one coupled question exactly as AD-01G §17 directed — and resolves nothing else. It contains no
> SQL, no schema, no migration, no column/table/type name, no implementation and no UI/visual design.
> Both items sit in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column (canonical entities,
> relationships, source-of-truth rules). Per AD-01A §7, **delegation to an architect is not
> authorization.** This document is the asking.

| | |
|---|---|
| **Document ID** | AD-01H |
| **Type** | Decision analysis resolving AD-01F **V-2** and **V-3**. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F or AD-01G. **None of those files is edited by this document.** |
| **Scope** | (1) Whether one Lead / Client Sales Record may simultaneously hold multiple Inquiry / Project-Interest records in different states or outcomes. (2) At which level the New / Follow-up / Success / Dump lifecycle sits, and in what form. Plus the four sub-questions the task names: what *New* means; whether *Dump* can validly exist at record level, inquiry level or both; where the approved *Success* milestone attaches; and whether V-2/V-3 expose a concept the Inquiry cannot represent. |
| **Explicitly out of scope** | **Q4 and Q6 are NOT reopened.** **Q1's vocabulary decision is not reopened.** **Q2, Q3, Q5, Q8–Q16**, **N-1…N-4**, **T-1…T-12**, **U-1…U-20**, **W-1…W-5**, all **V-items other than V-2 and V-3**, and blockers **M-2…M-20** are **not resolved**. **V-7 is not resolved** — §5.6 names one direct dependency on it and stops there, per this task's explicit instruction. Dump semantics are **not finalised** — §7 answers *where Dump may validly exist* and nothing more. |
| **Contains SQL / schema / migration / UI design** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (fail-closed tenant isolation), **R4** (masters not enums; semantics in columns, never in labels), **R6** (append-only; never edit history), **R12** (every claim traceable to this repository's own documents); Spec **Rule 1**, **§88**, **§97**, and consolidated-requirements **§1** (do not invent requirements — silence is recorded, never filled). |
| **Baseline treated as settled input** | **AD-01G's Lead / Inquiry split (G-1, G-2, G-5).** Per this task's framing it is not re-derived and not re-litigated. It is, however, **tested for sufficiency** against the concurrent-interest scenarios, and §5.5 records the one place it is found to need refinement. |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PRODUCT-OWNER DIRECTION⟧** | A statement, preference or fact recorded by the Product Owner — in `BMEXA_MASTER_SPEC.md`, in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, or in AD-01A §8 / AD-01C §1.2 / AD-01E §1.1. **A recorded preference is evidence, not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A finding derived from those sources. Mine to defend. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED.** |
| **⟦BUSINESS DECISION REQUIRED — Y-n⟧** | The sources are silent or in conflict, and nothing here fills the gap. Numbered **Y-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W** namespaces. Consolidated in [§14](#14-business-decisions-required). |

**Two terminology warnings, both load-bearing.**

1. **"Lead" is still overloaded.** AD-01G **W-2** (which entity the product calls *Lead*) is open and
   is not answered here. Throughout this document, **work record** means AD-01G §4.1's Lead / Client
   Sales Record, and **inquiry** means AD-01G §5's Inquiry / Project Interest. Where a source says
   *Lead*, the source's own sense is preserved and flagged.
2. **"Model D" names two different things in this line, and confusing them would be expensive.**
   AD-01G §3.1's *Model D* was *"Model A + a Person-level derived working view"* — a V-1 candidate in
   which **no work record exists**. **This document's Model D is the task's V-3 Model D** — the work
   record exists (V-1 settled by AD-01G G-1) and **carries no independent lifecycle**. They are
   unrelated. Every reference below is to the V-3 sense unless it says "AD-01G §3.1 Model D".

---

## 1. Product Owner direction

> **⟦PRODUCT-OWNER DIRECTION⟧** Recorded first, verbatim in substance, before any analysis, so the
> analysis can be checked against it rather than substituted for it. Nothing in this section is the
> architect's.

### 1.1 On plural project interests

| # | Source | Statement |
|---|---|---|
| **P-1** | Consolidated **§4** | *"**Project Interest** — A project/property interest associated with the client record; **a client may show interest in multiple projects over time**."* |
| **P-2** | Consolidated **§7** | *"A client was originally handled by Employee A, followed up and later **dumped**… If the client later regenerates an inquiry, the same underlying client/lead history may remain connected. **The client may then show more than one project interest on the same record.**"* |
| **P-3** | Consolidated **§13** | *"The client record can contain customer details **and multiple project interests**. A regenerated inquiry for a different project or size can be added to the same client record when the business considers it part of the same continuing client relationship. The timeline should record the new inquiry event **rather than silently overwriting** the previous interest."* |
| **P-4** | Consolidated **§13**, **§28** | *"define the exact boundary between an additional project interest on the same Lead and a genuinely new sales opportunity"* — listed **OPEN**. *"Exact definition and reporting treatment of multiple project interests on one Lead"* — listed **OPEN**. |
| **P-5** | Consolidated **§12** (observed work queue) | The queue row carries **one** Status, **one** Assigned To, **one** Next Follow-Up Date, **one** FUT and **one** Dump Reason per client — **and carries *Project Name* and *Booked Project* as two separate columns.** |
| **P-6** | Spec **§06** / **§07** | *"A Person can have **multiple leads, interact with multiple projects**, become a customer, be an applicant/co-applicant, have historical relationships. **Do not destroy historical identity when status changes.**"* |

### 1.2 On lifecycle, and on what *New* means

| # | Source | Statement |
|---|---|---|
| **P-7** | AD-01A **§8.1** | *"Lead Lifecycle remains **four values: New / Follow-up / Success / Dump**."* *"Awaiting Response," "Blocked," Today, Future and Overdue are **operational/Action-Feed conditions**, not Lead Lifecycle states.* *Today / Future / Overdue must be **derived from next-action timing**, never persisted.* **"Pending" is rejected as a fifth value.** |
| **P-8** | AD-01A **§8.6** | The **Orthogonal Lead Model**: *"**Lead Lifecycle** (persisted — four values: New / Follow-up / Success / Dump)"* alongside derived action conditions, activity history, assignment data/history, attribution/clash, sync transport state, verification/conflict state, an **independent Booking lifecycle**, and the Dump disposition classification. |
| **P-9** | Consolidated **§11** | *"**New** — **No qualifying user follow-up yet in the relevant current working context; exact lead-vs-handler scope must be finalized.**"* |
| **P-10** | Consolidated **§17** | *"**Transfer without history** — Receiving employee works the record as a **fresh context** without seeing prior conversation/follow-up history."* |
| **P-11** | Real-world evidence supplied with this task, and its written counterpart in consolidated **§11**/**§17** | The historical CRM **presented a Lead carrying substantial prior history as *New* to a newly-assigned handler.** This is recorded as an observed fact about the reference operation, **not** as an approved BMexa behaviour. |
| **P-12** | Consolidated **§27** | Known decisions table: *"Lead lifecycle — Four-value direction: New / Follow-up / Success / Dump."* *"Today / Future / Overdue — Derived operational/action-feed buckets, not lifecycle states."* |
| **P-13** | AD-01C **§1.2** | *"'Blocked' is **NOT** purely timing-derived if it represents who owes the next move. Treat Blocked as an **orthogonal operational qualifier** whose exact persistence/derivation mechanism remains unresolved under **N-2**. **Do NOT reopen Q1.** **Do NOT resolve N-2.**"* |

### 1.3 On Dump, and on workload management

| # | Source | Statement |
|---|---|---|
| **P-14** | Consolidated **§11** | *"**Dump** — Terminal/non-active sales disposition at lifecycle level, **but real-world usage shows it may also function as workload-management disposition; semantics must be kept precise.**"* |
| **P-15** | Consolidated **§7** | *"A manager may **redistribute dumped/non-responding leads to a fresher for another calling attempt.**"* |
| **P-16** | Consolidated **§15** | *"The Sales Rep can close the current active work through a Dump/disposition action… **the lead becomes non-active in the relevant sales workflow.**"* |
| **P-17** | Consolidated **§12** (observed) | The work queue's primary operational filter is **All-Without-Dump** — i.e. the most-used meaning of Dump in practice is *"exclude from my working set."* |
| **P-18** | AD-01A **§8.3** | The three-dimension Dump-reason framework is **approved** (validity class · responsibility locus · recoverability posture). *"A terminal non-conversion disposition **must carry a reason**."* *"**Preserve the historical reason** rather than silently rewriting business history."* **No values approved (N-4, open).** |
| **P-19** | Spec **§13** | *"Use a simple disposition structure: **Follow-up** (requires next action/date), **Success** (converted), **Dump** (closed without needing follow-up)."* |

### 1.4 On Success and Booking

| # | Source | Statement |
|---|---|---|
| **P-20** | AD-01A **§8.2** | **Success = §20 Stage 3, Booked**, after the required builder-side verification milestone. *"**Booking has its own lifecycle/state machine.** The Lead Lifecycle must **not** absorb Booking states such as Initiated or Pending Verification."* *"A subsequently **cancelled booking must not rewrite** the historical Lead Lifecycle from Success back to Dump."* |
| **P-21** | AD-01C **§3.7** (Q6, approved) | *"The ordinary Lead Lifecycle machine gains **no backward edge out of Success**."* Corrections are *"a single, general, explicitly authorized, explicitly reasoned, **appended** correction mechanism that sits **outside the ordinary transition machine**."* **S4** — *a genuinely new opportunity after a success is a **new business unit**; the prior Success is not touched.* Organising principle: ***restate what was never true; never restate what was true at the time.*** |
| **P-22** | Spec **§20**, **§21** | Booking lifecycle: Stage 1 Initiated · Stage 2 Pending Verification · Stage 3 Booked. *"Do not mark a booking 'Booked' simply because a form was submitted."* The Booking retains an **immutable financial snapshot**. |
| **P-23** | Consolidated **§14**, **§18** | The rep records a booking/EOI outcome → controlled booking workflow → Sales Support verifies the physical signed form and KYC **against the booking already stored in BMexa** → approves. *"Lead Success is associated with the approved Booked / Stage 3 milestone, not merely with booking initiation."* |

### 1.5 Decisions treated as fixed input and not reopened anywhere below

> **⟦PRODUCT-OWNER DIRECTION⟧ Binding input.** **Q4** (P-20) and **Q6** (P-21) are **not reopened,
> not re-argued and not narrowed** at any point in this document. **Q1's decision** — the four-value
> *vocabulary*, the rejection of *Pending*, and Today/Future/Overdue as derived — is likewise **not
> reopened**. Where §6 and §13 conclude that an amendment to AD-01A **§8.1** is logically required,
> that amendment concerns **level and persistence only**, never vocabulary, and **this document does
> not make it.** AD-01G's **G-1** (the Lead / Inquiry split) and **G-9** (custody interval is derived
> over the Assignment Log, not a new entity) are treated as settled input per this task's framing.

---

## 2. V-2 definition

> **⟦ARCHITECT ANALYSIS⟧**

### 2.1 What V-2 actually asks, and the distinction the sources never draw

AD-01F §16.1 states V-2 as: *"may one working record hold **concurrent** interests in more than one
project, or only **sequential** ones?"* AD-01F §6.1 added that *"the observed single-status row is
weak evidence for sequential."*

> **⟦ARCHITECT ANALYSIS⟧ The word *concurrent* is carrying two different questions, and separating
> them is the single most consequential move in this document.** Every scenario the task names
> resolves differently depending on which is meant.

| Term used below | Question it asks | Example |
|---|---|---|
| **Concurrent existence (CE)** | May **two or more inquiry records coexist on one work record at the same instant**, in different states — where **at most one** is non-terminal? | Project A closed as Dump in March; Project B opened as Follow-up in June. Both records exist, permanently, side by side, from June onward. |
| **Concurrent liveness (CL)** | May **two or more inquiries be simultaneously non-terminal** — both open, both being worked, both awaiting an outcome? | Project A in Follow-up **and** Project B in Follow-up, at the same instant. |

> **⟦ARCHITECT ANALYSIS⟧** These are not two shades of one question. **CE is about whether history
> accumulates; CL is about whether live work forks.** CE costs the model nothing operationally — the
> record still has one live engagement, one next action, one handler. CL costs the model its single
> next-action commitment, which is the load-bearing property AD-01G §4.1 and AD-01F §5.1 T1 built the
> work record around. A single answer to "may interests be concurrent?" cannot serve both.

### 2.2 The four Example scenarios classified

| Example (as the task states it) | CE or CL? | Live (non-terminal) inquiries |
|---|---|---|
| **Example 1** — Project A → Follow-up, Project B → Follow-up | **CL** | **Two** |
| **Example 2** — Project A → Success/Booked, Project B → Follow-up | **CE** | One (B) |
| **Example 3** — Project A → Dump, Project B → Follow-up | **CE** | One (B) |
| **Example 4** — Project A → Success, Project B → Success | **CE** | **Zero** |

> **⟦ARCHITECT ANALYSIS⟧ Three of the four Examples the task poses are CE, not CL.** Only Example 1
> forks live work. This is why §3 can answer three of them from already-approved decisions and must
> refer the fourth to the Product Owner.

### 2.3 What the sources do and do not establish

> **⟦ARCHITECT ANALYSIS⟧**

**Established beyond reasonable dispute:** the operation accumulates plural interests on one record.
P-1, P-2 and P-3 state it three separate times in the Product Owner's own words, and P-3 forbids
overwriting. **CE is not merely permitted by the sources; it is described by them.**

**Established by inference from already-approved decisions, not by direct statement:** that CE is
*unavoidable*. See §3.1 — CE is forced by AD-01A §8.3 (preserved reason, never rewritten), by
AD-01C §3.7/Q6 (Success is permanent; a later opportunity is a new business unit), and by **R6**,
in combination with P-2 and P-3. **A model that cannot represent CE contradicts decisions that are
already approved.**

**Not established at all:** CL. No source states whether the business works two live inquiries for
one person at one time. P-5's single-Status, single-Next-Follow-Up-Date queue row is the only
evidence pointing either way, and it is weak in both directions.

> **⟦ARCHITECT ANALYSIS⟧ A correction to AD-01F §6.1's reading of that evidence, stated so it can be
> checked.** AD-01F treated the single-status row as *"weak evidence for sequential."* It is weaker
> than that. **The same observed row carries *Project Name* and *Booked Project* as two columns**
> (P-5) — which is direct evidence that the reference system displayed **two coexisting project facts
> on one client row**. A denormalised working row showing one Status therefore tells us that the
> reference system **presented** one status, not that its data held one. It is evidence about a
> presentation choice, and it is evidence *against* reading the row as proof of sequential interests.
> **The observed queue is not evidence for sequential; it is evidence of nothing on this question.**

### 2.4 Why deferral is not available

> **⟦ARCHITECT ANALYSIS⟧** V-2's CE half cannot be deferred because it is already decided by
> implication: every day the model does not state it, AD-01A §8.1's record-level four values silently
> assert that CE is impossible (one record, one value). That assertion is false against P-2 and P-3,
> and **R6** makes the resulting mis-recording permanent — nobody can recover, two years on, which of
> a record's three interests a 2026 closure actually closed. This is AD-01B §4's rework-asymmetry
> standard (*cheap before history accumulates, unrecoverable after*), applied to the level at which
> dispositions are recorded. **V-2's CL half can be deferred operationally but not silently** — see
> **Y-1** and **Y-2**.

---

## 3. Concurrent-interest scenarios

> **⟦ARCHITECT ANALYSIS⟧** Each Example is tested against every axis the task names: work-queue
> presentation, timeline, assignment, follow-up, reporting, conversion, booking, CP attribution,
> commission, source/campaign analysis, duplicate/clash handling and project-level analytics.
> **Where a combination's validity is not established by the sources, it is referred to the Product
> Owner and not invented.**

### 3.1 Example 3 first — Project A → Dump, Project B → Follow-up

*(Taken first because it is the one the Product Owner describes directly, and because it settles CE
for the others.)*

> **⟦PRODUCT-OWNER DIRECTION⟧** This is P-2 verbatim: a client dumped by Employee A regenerates an
> inquiry, *"the same underlying client/lead history may remain connected,"* and *"the client may then
> show more than one project interest on the same record."* P-3 forbids overwriting the earlier
> interest.

> **⟦ARCHITECT ANALYSIS⟧ Example 3 is not a candidate combination. It is a described operation, and
> it is *forced* to be representable by three already-approved decisions acting together:**
>
> 1. **AD-01A §8.3 (P-18)** requires the terminal reason on Project A's closure to be **preserved,
>    never rewritten**.
> 2. **R6** makes that record permanent and forbids editing it.
> 3. **P-2/P-3** put the new Project-B interest **on the same record**.
>
> From the instant B opens, the record therefore holds a permanently-closed A and a live B **at the
> same time**. That is CE, and **no design choice avoids it** short of contradicting §8.3, R6, or the
> Product Owner's own §7/§13.

| Axis | Consequence under Example 3 | Label |
|---|---|---|
| **Work queue** | One row, one handler, one next action — B's. A contributes nothing to the queue. **Unproblematic.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Timeline** | Must read *"Project A inquiry closed — reason X"* then *"new inquiry: Project B"* then B's follow-ups. **It must not read *"lead dumped"* followed by *"follow-up scheduled"***, which is incoherent and is what a record-level lifecycle produces. → §9. | ⟦ARCHITECT ANALYSIS⟧ |
| **Assignment** | Unaffected. One record, one handler. A closed inquiry does not hold a handler (AD-01G §5.2). | ⟦ARCHITECT ANALYSIS⟧ |
| **Follow-up / FUT** | One commitment, one FUT stream. Whether a call discussing both counts once or twice is **W-1** — **not resolved here.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Reporting** | A is a loss in its period; B is an open engagement in the current period. **Both must remain true simultaneously.** A record-level value cannot hold that. | ⟦ARCHITECT ANALYSIS⟧ |
| **Conversion** | A is in the denominator as a loss. B is in the denominator as open. → V-17, **not resolved here.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking** | Not engaged. | ⟦ARCHITECT ANALYSIS⟧ |
| **CP attribution / commission** | A's claim set and B's claim set are **different claim sets, potentially different producers**. Keeping them apart is exactly AD-01C **D6**'s financial requirement. → V-16, **not resolved here.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Source / campaign analysis** | A and B have different enquiry dates, sources, campaigns and channels (AD-01C **D5**). A record-level source field cannot honestly record B's channel. | ⟦ARCHITECT ANALYSIS⟧ |
| **Duplicate / clash** | Duplicate detection asks *"is this the same human?"* (§09, M-5); clash asks *"do two producers claim this engagement?"* (§11). **Example 3 makes the second question inquiry-shaped** — AD-01G **T8**, confirmed. | ⟦ARCHITECT ANALYSIS⟧ |
| **Project analytics** | A counts against Project A's funnel as a loss; B counts against Project B's as open. Under a record-level model neither is computable, because the record has no single project (AD-01F **C-9**). | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Verdict — Example 3 is VALID, and is not optional.** It is required by the
> Product Owner's described operation and forced by three approved decisions.

### 3.2 Example 2 — Project A → Success/Booked, Project B → Follow-up

> **⟦ARCHITECT ANALYSIS⟧ Forced by Q4 and Q6 taken together with P-2/P-3, without reopening either.**
>
> - **Q4 (P-20)**: Success is the §20 Stage 3 Booked milestone. **Q6 (P-21)**: there is no ordinary
>   backward transition out of Success, and a genuinely new opportunity after a success is a **new
>   business unit**; the prior Success is *not touched*.
> - **AD-01G §13.1 / G-12** restated Q6-S4's *subject* under the approved Lead/Inquiry split: *"a new
>   Sales Lead"* becomes *"a new inquiry on the existing work record."* That restatement is **upheld
>   here and extended**: the same act is what produces Example 2.
> - Therefore, the moment a converted client expresses a new interest, the record holds a **permanent
>   Success on A** and a **live Follow-up on B**. **This is Q6 operating correctly, not a defect.**
>
> **Independent corroboration from the operation:** P-5's observed queue carries *Project Name* **and**
> *Booked Project* as two columns. A row displaying both is a row describing a client who has
> transacted on one project and has current interest context on another. **AD-01F §11.3 identified this
> and called it *"one of the strongest arguments that lifecycle must sit on the inquiry."* That finding
> is confirmed here on the evidence and completed in §5.**

| Axis | Consequence | Label |
|---|---|---|
| **Work queue** | The record must **remain in the sales work queue for B** while holding a converted A. Under a record-level Success the record is terminal, has no next action, sits in no Action Feed bucket (§14) and is filtered out — **the described operation becomes unperformable.** This is the exact failure shape AD-01F §10.2 documented for Dump, arriving via Success. | ⟦ARCHITECT ANALYSIS⟧ |
| **Timeline** | Must carry the Booking's Stage 1→3 progression **by reference** to the Booking, never absorbed (P-20), interleaved with B's follow-ups, each entry resolvable to its inquiry. → §9. | ⟦ARCHITECT ANALYSIS⟧ |
| **Assignment** | One handler for the whole client (T1). A converted inquiry does not retain a separate handler. **Whether post-booking Customer-context handling (§20 Customer Support, §36 Customer Portal) changes who works the record is outside this document.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Conversion** | A converted; B open. A record-level conversion flag reports this client as *converted* and silently removes B from the open-pipeline denominator. → V-17, **not resolved.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking** | The Booking owns Stage 3, its own lifecycle and its immutable snapshot (P-20, P-22). A later cancellation of A's booking **never** touches B and never rewrites A's historical Success (Q4/Q6, not reopened). **The CP-financial safety property of AD-01C §3.2 is preserved intact.** | ⟦ARCHITECT ANALYSIS⟧ |
| **CP attribution / commission** | A's commission entitlement keys on A's resolved claim and A's Booking (§32, §40, AD-01 E-13). B's claims are a separate, unresolved set. **A record-level anchor would make B's future commission indistinguishable from A's already-paid one.** → V-16, **not resolved.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Project analytics** | Project A gains a booking; Project B gains an open engagement. Both true at once. | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Verdict — Example 2 is VALID and forced.** Rejecting it would require either
> reopening Q6 (forbidden, and not desirable — Q6 is right) or contradicting P-2/P-3.

> **⟦BUSINESS DECISION REQUIRED — Y-4⟧** *(raised by Example 2; stated fully in §14.)* **Does a
> Success on any one inquiry change the work-queue behaviour of the whole record?** §06 makes
> *Customer* a **context** a Person is *presented as*, not a record; nothing states whether a client
> presented as a Customer continues to appear in ordinary sales follow-up queues for an unrelated live
> inquiry. **Nothing here fills that gap.** If the intended answer is *"a converted client leaves the
> sales queue,"* Example 2 is unperformable and the Product Owner should say so explicitly.

### 3.3 Example 4 — Project A → Success, Project B → Success

> **⟦PRODUCT-OWNER DIRECTION⟧** §07 (P-6): *"A Person can have multiple leads, interact with multiple
> projects, become a customer, be an applicant/co-applicant."* AD-01C §3.5 names the case in the
> Product Owner's own domain terms: *"A Person who bought a unit later wants a second — investor,
> upgrade, family member, second project."*

> **⟦ARCHITECT ANALYSIS⟧ Valid, and it is the decisive case for three downstream questions.** Two
> terminal conversions coexist permanently on one record. Neither may be rewritten (Q6). Each
> references its own Booking, each Booking carries its own immutable snapshot (§21), each may have
> its own price-list version (§22), its own applicant set (§06 Booking Group), its own cancellation
> or unit-transfer history (§26, §35), and — critically — **its own producer**.

| Axis | Consequence | Label |
|---|---|---|
| **Conversion** | Two conversions from one client. A record-level "converted" value can represent **one**. The second is silently lost, or the first is overwritten — **and overwriting a Success is precisely what Q6 forbids.** | ⟦ARCHITECT ANALYSIS⟧ |
| **CP attribution / commission** | If CP-1 produced A and CP-2 produced B, **two separate entitlements exist under §32/§40**. A record-level attribution anchor cannot pay both correctly and cannot distinguish this from a §11 clash. **This is AD-01C D6's live financial defect in its sharpest available form.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking / clawback** | If A's booking is later cancelled and B's is not, §33 clawback must reach **A's entitlement only**. A record-level linkage makes that impossible to state. §26's unit-transfer-is-not-cancellation rule applies per Booking. | ⟦ARCHITECT ANALYSIS⟧ |
| **Customer-level reporting** | *"This Person is a Customer"* is legitimately a **derived** record/person-level fact (§06, §07). It must never become the conversion **key**. | ⟦ARCHITECT ANALYSIS⟧ |
| **Timeline** | Two booking progressions on one chronological timeline, each referencing its own Booking, never merged. | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Verdict — Example 4 is VALID.** And it removes one candidate from V-16's
> four-way anchor question on grounds of **incapability rather than preference**: the work record
> cannot anchor attribution, because it cannot distinguish two legitimate entitlements on one client.
> **V-16 is NOT resolved here** — the choice among Person, inquiry and any other unit remains the
> Product Owner's, and **M-5** still owns the Person candidate.

> **⟦ARCHITECT ANALYSIS — a CP-facing consequence, recorded so it is not discovered late.⟧** Under
> Example 4 with two producers, AD-01G **G-6**'s inquiry visibility boundary stops being optional:
> CP-1 must see A and must **not** see B (§39, §05, §11; AD-01E **U-16**). **Not resolved here; it is
> V-24's and AD-01G G-6's territory.**

### 3.4 Example 1 — Project A → Follow-up, Project B → Follow-up

> **⟦ARCHITECT ANALYSIS⟧ This is the only one of the four that the sources do not settle, and it is
> the one with real operational cost. It is CL.**

**What the sources say.** P-1 says *"multiple projects **over time**"* — compatible with either
reading. P-2 and P-3 describe the sequence *closed-then-new*, which is CE. **No source describes two
simultaneously live engagements for one client, and no source forbids one.** §28 lists the
*"reporting treatment of multiple project interests"* as open in the Product Owner's own words.

**What CL would cost, stated precisely so the decision is informed rather than intuitive:**

| Property the model currently relies on | What CL does to it | Label |
|---|---|---|
| **One next-action commitment per record** (AD-01G §4.1; AD-01F §5.1 **T1**; Spec §13's mandatory date) | **Breaks.** A is due Thursday about Project A; B is due Monday about Project B. One commitment holds one date. Either a second commitment appears — **which rebuilds Model A inside the work record and inherits every T1 failure AD-01G §5.2 warns against** — or one due date is silently lost. | ⟦ARCHITECT ANALYSIS⟧ |
| **One queue row per client** (P-5; §14 Action Feed) | Strained but survivable: the row shows the earliest commitment; the second is invisible until the first is worked. Whether that is acceptable is a business judgement, not an architect's. | ⟦ARCHITECT ANALYSIS⟧ |
| **FUT as *"total count of actual user-performed follow-ups"*** (§9) | One call covering both projects: one FUT or two? **This is AD-01G W-1 — already open, and CL makes it routine rather than occasional.** Not resolved. | ⟦ARCHITECT ANALYSIS⟧ |
| **First-response measurement** | Two live inquiries with two origination dates require **inquiry→first-response** to mean anything. **AD-01G W-4 — already open.** Not resolved. | ⟦ARCHITECT ANALYSIS⟧ |
| **The "Blocked" / waiting-on qualifier** (P-13, **N-2**) | Under CL, A may be waiting on a lender while B waits on the customer. **The qualifier acquires a cardinality question it does not have today.** **N-2 is NOT resolved, NOT narrowed and NOT reopened here** — this is recorded only as a consequence the eventual N-2 answer must accommodate. | ⟦ARCHITECT ANALYSIS⟧ |
| **§11 clash detection** | CL is where clash is **hardest and most valuable**: two producers, two live engagements, one human, at one moment. AD-01G **T9** showed the question is only *posable* if engagements are separable. CL makes it posable in its most financially exposed form. | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦BUSINESS DECISION REQUIRED — Y-1⟧** **May two or more inquiries on one work record be
> simultaneously non-terminal (concurrent liveness)?** The sources are silent. **This document does
> not invent an answer, and does not prefer a branch.** Consolidated §13/§28 list the surrounding
> boundary as open in the Product Owner's own words, and Spec **Rule 1** and **§88** forbid a data
> model from supplying the rule by default. Full statement in [§14](#14-business-decisions-required).

> **⟦BUSINESS DECISION REQUIRED — Y-2⟧** **If Y-1 is "yes": does the work record still hold exactly
> one next-action commitment?** Stated separately because it is the half with the operational cost,
> and because answering Y-1 "yes" without answering Y-2 leaves the commitment's cardinality to be
> decided by implementation — an authorization-adjacent, source-of-truth-adjacent default under §88.

### 3.5 The two additional scenarios V-3's key test adds

| V-3 scenario | Classification | Finding | Label |
|---|---|---|---|
| **5 — Project A = Dump, later regenerated interest for Project A** | CE, same project | **Valid and described.** P-3: *"A regenerated inquiry for a different project **or size** can be added to the same client record."* P-3 also forbids overwriting, so the record holds **two inquiries on one project**, one closed, one open. **Whether the second is a new commercial opportunity or a continuation is V-14 — confirmed open, not answered** (AD-01G G-5, upheld). | ⟦ARCHITECT ANALYSIS⟧ |
| **6 — Project A = Success, later interest in a different project** | CE | **Identical in structure to Example 2** and forced by the same Q6-S4 restatement. Valid. | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦BUSINESS DECISION REQUIRED — Y-3⟧** Scenario 5 exposes a sub-question AD-01F §5.3 raised and
> nobody has answered: **is a *Project Interest* the same object as an *Inquiry*, or an aggregate over
> one-or-more inquiries on the same project?** And may two inquiries on the **same** project be live
> at once? This determines whether *project-interest count* and *inquiry count* are the same number.
> **Not answered here.**

### 3.6 V-2 — the answer

> **⟦ARCHITECT RECOMMENDATION — V-2⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: relationships,
> source-of-truth rules.)*
>
> **H-1 — Concurrent existence (CE) is valid, required, and not a design choice.** One work record
> **must** be able to hold multiple inquiries in different states and outcomes at the same instant,
> with at most one non-terminal. **Examples 2, 3, 4 and scenarios 5 and 6 are all VALID**, and each is
> *forced* by decisions the Product Owner has already approved — AD-01A §8.3's preserved reason,
> AD-01C §3.7's Q6 terminality and S4, §07's historical-identity rule, and **R6** — acting on the
> operation the Product Owner describes in consolidated §7 and §13. **No combination of terminal and
> non-terminal inquiry states on one record is invalid.**
>
> **H-2 — Concurrent liveness (CL) is undecided and must be decided by the Product Owner.**
> **Example 1 is `BUSINESS DECISION REQUIRED` (Y-1, with Y-2).** Nothing in the Master Spec, the
> consolidated requirements, or AD-01 through AD-01G establishes it. **It is not invented here.**
>
> **H-3 — The V-3 answer does not depend on which way Y-1 goes.** Stated explicitly because it is the
> most useful property of this decomposition: **CE alone is already sufficient to falsify a
> record-level lifecycle** (§4.1). The Product Owner can therefore approve the lifecycle placement now
> and take Y-1/Y-2 on their own timetable, without either decision being made by default.

---

## 4. Lifecycle alternatives

> **⟦ARCHITECT ANALYSIS⟧** Each model is stated at its strongest and then tested against the six
> scenarios V-3's key test names, plus the operational and reporting properties the model must
> preserve. **No model is given the benefit of incumbency, and implementation simplicity is not a
> criterion** — per the task's explicit instruction.

**The five candidates.**

- **Model A — Lead-level lifecycle.** The work record carries exactly one lifecycle value from
  {New, Follow-up, Success, Dump}. This is AD-01A §8.1 read literally at the level AD-01G G-1
  established for the work record.
- **Model B — Inquiry-level lifecycle; record status derived from its active/current inquiries.**
- **Model C — Both.** The record carries a lifecycle *and* each inquiry carries one, with explicitly
  different semantics, both persisted.
- **Model D — The record carries no independent lifecycle at all.** Its current work condition is
  fully derived from its inquiries **and its activities**.
- **Model E — another model, if the evidence points there.**

### 4.1 Model A, tested

| # | Scenario | Result under Model A | Label |
|---|---|---|---|
| 1 | A = Success, B = Follow-up | **Fails.** The record is simultaneously converted and actively worked. One value holds one. Setting it to Success removes the record from every queue and kills the live Project-B work (§3.2). Setting it to Follow-up asserts the client has not converted, contradicting a permanent historical fact. | ⟦ARCHITECT ANALYSIS⟧ |
| 2 | A = Dump, B = Follow-up | **Fails.** Requires `Dump → Follow-up` at record level — a transition AD-01 §6.1 permits **only if Q5 says so**, and AD-01C §2.5 holds strictly terminal. **Model A makes a Product-Owner-described routine operation (P-2) conditional on an unanswered question.** | ⟦ARCHITECT ANALYSIS⟧ |
| 3 | A = Follow-up, B = Dump | **Fails, and asymmetrically — which is itself diagnostic.** Closing B must not close the record while A is live; but a record-level Dump is the only way to record B's reasoned closure, and AD-01A §8.3 forbids that reason ever being overwritten by A's later outcome. **One preserved-reason slot cannot hold two closures.** This is AD-01E §3.3's own intactness argument, which survives verbatim with *inquiry* substituted for *episode*. | ⟦ARCHITECT ANALYSIS⟧ |
| 4 | A = Success, B = Success | **Fails.** Two conversions, one value, two Bookings, potentially two producers. The second conversion is unrecordable without overwriting the first — **which Q6 forbids outright.** | ⟦ARCHITECT ANALYSIS⟧ |
| 5 | A = Dump, later regenerated A | **Fails.** Same as (2), plus: the regenerated inquiry's own eventual outcome has nowhere to go that does not overwrite the first closure's preserved reason. | ⟦ARCHITECT ANALYSIS⟧ |
| 6 | A = Success, later interest elsewhere | **Fails.** Same as (1). **Q6-S4 explicitly contemplates this case and calls the result a new business unit** (P-21) — Model A has no unit to create below the record, so under Model A the only available reading of S4 is *"create a second work record,"* which contradicts P-2/P-3's *"on the same record."* | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Model A fails all six, and — the finding that matters most — it fails
> scenarios 1, 4 and 6 using only CE. It does not need Y-1 answered to fail.** Model A is therefore
> eliminated **independently of V-2's open half**, which is why H-3 holds.
>
> **Model A also produces a second-order contradiction that is easy to miss.** Under Model A, the
> only way to honour Q6-S4 for scenarios 1, 4 and 6 is to create a second work record per new
> opportunity. But the work record is the unit of **assignment, transfer, queue membership, timeline
> and FUT** (AD-01G §4.1). A second work record therefore hands the same client two handlers, two
> queue rows and two timelines — the exact **T1** failure AD-01G rejected Model A (V-1 sense) for, and
> the exact fragmentation consolidated §4 and §13 describe the business as *not* doing. **Model A at
> the lifecycle level silently re-imposes the V-1 answer the Product Owner's evidence rejected.**

### 4.2 Model C, tested

> **⟦ARCHITECT ANALYSIS⟧ Model C is the most attractive candidate on first reading and it must be
> tested harder than the others, because "put a value at each level" *sounds* like it dissolves every
> problem above.** It does dissolve the representational failures. It fails on a different axis.

| Test | Result | Label |
|---|---|---|
| **Can it represent all six scenarios?** | **Yes.** The inquiry half carries the commercial outcome; the record half carries a work condition. Scenarios 1–6 are all expressible. | ⟦ARCHITECT ANALYSIS⟧ |
| **Is the record's persisted half a second source of truth?** | **Yes, and this is decisive.** Whatever the record's value means — *"actively worked"*, *"out of my queue"*, *"never touched"* — it is **computable** from the inquiries' states, the next-action commitment and the custody-scoped activity history. AD-01A **§3.6** states the governing rule in the amendment's own words: *"do not record what the system can compute."* AD-01A **§5.2** eliminated the persisted Unassigned/Assigned axis on **exactly this objection**, and AD-01G **G-9** eliminated the stored custody interval on exactly this objection. **Persisting the record half is the same mistake a third time.** | ⟦ARCHITECT ANALYSIS⟧ |
| **What does the duplication cost?** | The two values can **disagree**. A record-level *Dump* with a live inquiry underneath it, or a record-level *Follow-up* with every inquiry closed, are both writable states with no business meaning — and under **R6** the wrong one is permanent. Every transfer, every merge (Q10), every offline sync (§12/§47) and every concurrent disposition (Q15) becomes an opportunity for them to diverge. | ⟦ARCHITECT ANALYSIS⟧ |
| **Does *New* survive at the record level?** | **No.** §6 shows *New* is not a single predicate and that none of its three readings is a record-level persisted value. A persisted record-level *New* must lie to at least one legitimate viewer (AD-01F **C-3**, confirmed). | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Model C is rejected — not because two levels are wrong, but because
> *persisting* the second one is.** The task asked that these models be judged without favouring
> implementation simplicity; this rejection is not a simplicity argument. It is the argument AD-01A
> §3.6 and §5.2 already made and the Product Owner already approved, applied consistently.

### 4.3 Model B, tested

> **⟦ARCHITECT ANALYSIS⟧ Model B represents all six scenarios correctly and is nearly right. It fails
> on the *inputs* to its derivation, not on its shape.**

Model B derives the record's current status **from its active/current inquiries**. Three things the
record's work condition genuinely depends on are **not** inquiry states:

| Missing input | Why the record needs it | Source | Label |
|---|---|---|---|
| **The next-action timestamp** | Today / Future / Overdue are *"derived from next-action timing"* (P-7, P-12). An inquiry being *open* says nothing about whether its follow-up is due today, next month, or overdue. | AD-01A §8.1; consolidated §11, §27 | ⟦ARCHITECT ANALYSIS⟧ |
| **Custody-scoped activity history** | *New* is *"no qualifying user follow-up yet in the relevant current working context"* (P-9). The inquiry's state is identical before and after the first call; only the activity history changes. | Consolidated §11; AD-01 §9.1 (*Worked* = *"leads that have ever left New"*, already history-derived) | ⟦ARCHITECT ANALYSIS⟧ |
| **A management work-obligation input, in one case** | The redistribution case (P-15): every inquiry closed, no customer event, and yet the fresher is expected to call. **No inquiry state produces that obligation.** | Consolidated §7; AD-01F **C-6**, §10.2 | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧** The first two gaps are fatal to Model B **as literally stated** and are
> repaired by widening its derivation inputs — at which point Model B *is* Model D. The third gap is
> **not repairable by any of the five models**, is owned by **V-11/V-12**, and is discussed in §11.3
> and §14.

### 4.4 Model D, tested

> **⟦ARCHITECT ANALYSIS⟧** Model D — *"the record has no independent lifecycle; its current work
> condition is fully derived from its inquiries **and activities**"* — is the only candidate whose
> stated derivation inputs match what the record's condition actually depends on. Tested against the
> same six scenarios:

| # | Scenario | Result under Model D | Label |
|---|---|---|---|
| 1 | A = Success, B = Follow-up | **Correct.** A's inquiry is converted and references its Booking; B's is open with a next action. The record's derived condition is *"actively worked, next action `t`"* — true. The record's derived customer-level condition is *"has converted"* — also true. Both truths coexist without conflict. | ⟦ARCHITECT ANALYSIS⟧ |
| 2 | A = Dump, B = Follow-up | **Correct, and no backward transition is required anywhere.** A stays closed with its preserved reason; B is live. **AD-01 §6.1's `Dump → Follow-up` edge is never needed**, so Q5's mechanical half has no subject. *(Q5's commercial half — is a re-contact a new opportunity — is **V-14** and is **not resolved here.**)* | ⟦ARCHITECT ANALYSIS⟧ |
| 3 | A = Follow-up, B = Dump | **Correct and symmetric.** B's closure carries its own preserved reason; A's continues. Two closures on one record over time are two preserved reasons, each permanent. **AD-01A §8.3 becomes exception-free.** | ⟦ARCHITECT ANALYSIS⟧ |
| 4 | A = Success, B = Success | **Correct.** Two conversions, two Bookings, two claim sets, two snapshots. Neither overwrites the other. **Q6 is honoured without an exception clause.** | ⟦ARCHITECT ANALYSIS⟧ |
| 5 | A = Dump, later regenerated A | **Correct mechanically.** A second inquiry opens on Project A; the first stays closed and readable (P-3's *"rather than silently overwriting"*). **Whether it is a new opportunity is V-14 — open. Whether the two group into one interest is Y-3 — open.** | ⟦ARCHITECT ANALYSIS⟧ |
| 6 | A = Success, later interest elsewhere | **Correct.** This is Q6-S4, with the new business unit being the new inquiry (AD-01G §13.1, upheld). | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ Model D additionally makes three prior positions structurally unviolatable
> rather than merely obeyed — which is a stronger property than passing the scenarios.**
>
> - **AD-01 E-04** (*reassignment must not move the lifecycle*): under Model D the record **has no
>   lifecycle to move.** The rule cannot be broken by construction.
> - **AD-01 §6.1's `Anything → New` prohibition**: **moot rather than violated** — there is no
>   persisted value to move back to. §07's historical-integrity concern is untouched because nothing
>   is rewritten. This is AD-01F **F-6** and AD-01G **G-8** (the read-time-projection principle),
>   confirmed and extended from *New* to the whole lifecycle.
> - **AD-01C §2.5's strict terminality**: true **without exception** at the inquiry level, where
>   AD-01F §10.4 said it belongs. At the record level it has always needed an exception (the fresher
>   case falsifies it). **Relocating it does not weaken it; it is the only level at which it is
>   literally true.**

### 4.5 Model E — considered and not needed

> **⟦ARCHITECT ANALYSIS⟧** One further shape was constructed and tested honestly: **a record-level
> lifecycle that is a *snapshot of the most recent inquiry's* state.** It was rejected, and the
> rejection is recorded so the absence is a finding rather than an omission. It reproduces every
> Model A failure (the most recent inquiry's state is not the record's condition — scenario 1 proves
> it), adds a new one (*"most recent"* is undefined when two are live under CL), and is a persisted
> derivation, which is Model C's defect. **No sixth model is proposed. The evidence points at Model D
> and stops there.**

### 4.6 Comparison

| Property | A | B | C | D |
|---|---|---|---|---|
| Represents all six V-3 scenarios | **No** | Yes | Yes | **Yes** |
| Honours AD-01A §8.3's preserved reason without exception | **No** | Yes | Yes | **Yes** |
| Honours Q6 without an exception clause | **No** | Yes | Yes | **Yes** |
| Requires no backward lifecycle edge (Q5/Q6 untouched) | **No** | Yes | Yes | **Yes** |
| Derivation inputs sufficient for Today/Future/Overdue | n/a | **No** | n/a | **Yes** |
| Derivation inputs sufficient for *New* | **No** | **No** | **No** | **Yes** |
| Creates no second source of truth (AD-01A §3.6, §5.2) | Yes | Yes | **No** | **Yes** |
| Eliminated using **CE alone**, without Y-1 | **Eliminated** | — | — | — |
| Handles the P-15 redistribution case | **No** | **No** | **No** | **No — Y-1-independent gap owned by V-11/V-12** |

---

## 5. Recommended lifecycle ownership

> **⟦ARCHITECT RECOMMENDATION — V-3⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: changing
> source-of-truth rules, changing relationships.)*

### 5.1 The recommendation stated

**H-4 — Adopt Model D, precisely specified.**

- **The Inquiry / Project Interest carries a persisted commercial disposition.** It is **monotone**:
  it opens once, and it reaches at most one terminal outcome — **converted** (referencing the Booking
  that satisfies the §20 Stage 3 milestone) or **closed with a classified, preserved reason** on
  AD-01A §8.3's three approved dimensions. **It is never rewritten, never reversed, and never
  reused.** This is the level at which Q4, Q6, §8.3 and AD-01C §2.5 are all true without exception.
- **The Lead / Client Sales Record carries no persisted lifecycle value.** Its current work condition
  is **derived at read time** from three inputs: (i) the states of its inquiries, (ii) its
  next-action commitment, and (iii) its custody-scoped activity history.
- **The four-value vocabulary — New · Follow-up · Success · Dump — is retained in full as the
  user-facing and reporting language.** Nothing about what a Sales Rep sees, says or taps changes.
  **What changes is only where each value lives and whether it is stored.**

### 5.2 Where each of the four values goes

| Value | Where it lives under H-4 | Form | Label |
|---|---|---|---|
| **New** | **Record × working context**, and **inquiry**, as **three distinct derived predicates** — see §6 | **Derived. Never persisted.** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Follow-up** | **Record.** *"A live work obligation exists and a next action is committed."* Its Today / Future / Overdue refinement is derived from the next-action timestamp exactly as AD-01A §8.1 already requires. | **Derived.** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Success** | **Inquiry**, referencing the **Booking** that owns the §20 Stage 3 milestone — see §8 | **Persisted on the inquiry as a conversion reference. The milestone itself is the Booking's.** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Dump** | **Both, with two different meanings** — the commercial closure on the **inquiry** (persisted, reasoned, preserved); the queue-exit work condition on the **record** (derived, custody-scoped) — see §7 | **Split.** | ⟦ARCHITECT RECOMMENDATION⟧ |

> **⟦ARCHITECT ANALYSIS⟧ The shape this produces is worth naming plainly: *the two values that are
> commercial outcomes are persisted on the commercial unit; the two values that are work conditions
> are derived on the work unit.*** That is AD-01 §3's own separation test — *two concepts belong on
> one axis only if a record can never legitimately be in both at once* — returning the answer that
> **New/Follow-up and Success/Dump were never one axis.** A record can legitimately be *actively
> worked* and *has converted* at the same moment (Example 2), which is precisely the condition AD-01
> §3 says forbids sharing an axis.

### 5.3 What this preserves, explicitly

| Prior position | Status under H-4 | Label |
|---|---|---|
| AD-01A §8.1's **four-value vocabulary** | **CONFIRMED in full.** | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01A §8.1's **rejection of *Pending*** as a fifth value | **CONFIRMED and untouched.** H-4 creates no new lifecycle value at either level. | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01A §8.1's **Today / Future / Overdue derived from next-action timing** | **CONFIRMED, and now consistent** — the timestamp they derive from is a record-level fact, and the record has nothing else competing to describe its condition. | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01A §8.2 / **Q4** | **CONFIRMED and strengthened.** See §8. **Not reopened.** | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01A §8.3 / **Q7** | **CONFIRMED and made exception-free.** See §7. | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01A §8.5 (no persisted assignment axis) | **CONFIRMED. No axis is reintroduced at either level.** | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01C §3.7 / **Q6** | **CONFIRMED and strengthened.** See §8.3. **Not reopened.** | ⟦ARCHITECT ANALYSIS⟧ |
| AD-01G **G-1, G-2, G-5, G-8, G-9, G-12** | **CONFIRMED.** H-4 is the completion of AD-01G §13.1's named consequence, at the level AD-01G §17 said it must be taken. | ⟦ARCHITECT ANALYSIS⟧ |

### 5.4 The costs of H-4, priced without softening

> **⟦ARCHITECT ANALYSIS⟧ A recommendation that reports only its advantages is not an analysis.**

| Cost | Statement | Label |
|---|---|---|
| **The most-used operational filter must be redefined** | The observed **All-Without-Dump** filter (P-17) has **no direct counterpart** under H-4, because there is no record-level Dump value to filter on. Its real meaning — *"records with no live work obligation for me"* — must be restated as a derived condition. **This is a real redefinition of the operation's primary working filter, and the Product Owner should approve it knowingly rather than discover it.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Derivation must be correct everywhere, not just in the UI** | A derived work condition that is computed in one place and approximated in another (search §45, exports §52, reports §63, notifications §58, offline caches §46/§47) will disagree with itself. **The derivation is a server-side read-model obligation, not a convenience.** Consolidated §25 already sets this standard. | ⟦ARCHITECT ANALYSIS⟧ |
| **The word *Dump* names two operations** | Already AD-01F §10.4's stated cost; H-4 does not remove it. §95's *minimum necessary friction* governs: a one-tap disposition that silently does one, the other, or both is the ambiguity §95 refuses. **Which control the rep is operating is V-11 — not resolved here.** | ⟦ARCHITECT ANALYSIS⟧ |
| **It amends a recorded Product-Owner decision** | AD-01A §8.1 and §8.6 both state the four values as **persisted Lead Lifecycle**. H-4 contradicts that as to level and persistence. **See §6.4 and §13 — the amendment is named, not made.** | ⟦ARCHITECT ANALYSIS⟧ |
| **One described operation remains unperformable** | The P-15 redistribution case. H-4 makes it **expressible** and does not make it **performable**. See §11.3. **Owned by V-11/V-12 — not resolved here.** | ⟦ARCHITECT ANALYSIS⟧ |

### 5.5 The one place AD-01G's baseline needs refinement

> **⟦ARCHITECT ANALYSIS⟧** The task permits finding AD-01G's Lead/Inquiry split *"insufficient or
> requiring refinement given the concurrent-interest scenarios."* One such place was found, and it is
> recorded rather than smoothed over.
>
> **AD-01G §4.1 describes the work record as owning *"one next-action commitment"* and lists
> *Interests* as *"one or more"* with concurrency deferred to V-2.** Those two facets are stated
> independently, and under **CE** they are perfectly compatible. **Under CL they are not.** AD-01G's
> table does not say which gives way, because AD-01G correctly declined to answer V-2.
>
> **The refinement:** AD-01G §4.1's *one next-action commitment* is not an independent property of the
> work record — it is a property **conditional on at most one inquiry being live at a time.** If Y-1
> is answered "yes", that facet of AD-01G §4.1 requires its own decision (**Y-2**) and cannot simply
> be carried forward. **This is a refinement of AD-01G §4.1, not a contradiction of it, and AD-01G is
> not edited.**

### 5.6 The one direct dependency on V-7 — named and not resolved

> **⟦ARCHITECT ANALYSIS⟧ Per this task's explicit instruction, V-7 is NOT resolved, NOT re-argued and
> NOT narrowed. Exactly one direct dependency was found and it is stated and left.**
>
> **Three of the four values under H-4 have no V-7 dependency at all.** *Success* and *Dump* are
> persisted facts on the inquiry, unaffected by who may read them. *Follow-up* derives from the
> next-action timestamp, a record-level fact with no viewer term.
>
> ***New* is the exception, and only under one of its candidate readings.** §6 identifies three
> readings of *New*; one of them — *"no qualifying user follow-up that **this viewer is entitled to
> see**"* — makes *New* a function of the **entitlement projection AD-01G §8 recommends**, i.e. the
> same record would legitimately present as *New* to one viewer and *Follow-up* to another at the same
> instant.
>
> - **If *New* is scoped to the custody interval** (AD-01F §5.5 reading (c)), it depends on the
>   **Assignment Log** only — an entity §06 already makes canonical — and has **no V-7 dependency**.
> - **If *New* is scoped to entitled visibility**, it has a **direct and hard dependency on the V-7
>   answer**, because the value cannot be computed without evaluating AD-01G G-6's projection.
>
> **Which of the two is intended is V-5, which this document does not resolve.** What is established
> here is that **V-5's answer determines whether a V-7 dependency exists at all** — and that the
> dependency, if it exists, is confined to *New* and reaches nothing else in the lifecycle. **Nothing
> further is attempted.**

---

## 6. Meaning of New

> **⟦ARCHITECT ANALYSIS⟧ The task requires that *New* be analysed explicitly and not silently
> redefined. It is analysed here, and the conclusion is that the historical single word names at
> least three different true statements.**

### 6.1 The evidence, held apart from the inference

> **⟦PRODUCT-OWNER DIRECTION⟧** **P-9** — consolidated §11 defines *New* as *"no qualifying user
> follow-up yet in the **relevant current working context**"* and states in the Product Owner's own
> words that *"exact lead-vs-handler scope must be finalized."* **P-10** — transfer without history
> produces a *"fresh context."* **P-11** — the reference CRM presented a heavily-worked Lead as *New*
> to a newly-assigned handler.

> **⟦ARCHITECT ANALYSIS⟧ P-9 is the most important sentence in the consolidated requirements for this
> question, and it is usually read too quickly.** It does **not** say *New* means *"never worked."* It
> says *New* is **relative to a working context** and that **which context** is undecided. The Product
> Owner has already told us that *New* is context-relative; the only open part is the scope.

### 6.2 The five candidate readings the task names, judged

| Reading | Verdict | Label |
|---|---|---|
| **(1) New Lead globally** — no qualifying follow-up has ever occurred on this record, by anyone | **True, useful, and not the queue's question.** This is AD-01's reading (§6.1: *"New means never worked"*) and it is **already derived** — AD-01 §9.1 defines *Worked* as *"leads that have ever left New."* It is the correct predicate for funnel entry and for *"how many captured leads have never been touched."* **It cannot produce P-11's observed behaviour**, and a single persisted value asserting it would have to lie to the newly-assigned handler. | ⟦ARCHITECT ANALYSIS⟧ |
| **(2) New to the current handler** | **Under-specified and, as stated, wrong.** A transfer *with* history to a new handler should not present as *New* — the handler is continuing described work, not starting fresh. *"The handler changed"* is not the same event as *"the handler changed and prior work is not theirs to see."* **AD-01F §5.5(b) reached this and it is confirmed.** | ⟦ARCHITECT ANALYSIS⟧ |
| **(3) No qualifying user follow-up yet in the current assignment / working context** | **The best fit, and it is the Product Owner's own wording.** It reproduces P-11 exactly and every observed behaviour besides. **But it is itself two readings — see §6.3.** | ⟦ARCHITECT ANALYSIS⟧ |
| **(4) New Inquiry** — an inquiry has arrived and has not yet been worked | **True, useful, and a different question again.** It is what §14's Action Feed item (2) *"New leads"* is about, and it is the only reading under which a **second** inquiry arriving on a long-worked record is visible as needing a first touch. **Scenarios 5 and 6 make this reading necessary, not optional.** | ⟦ARCHITECT ANALYSIS⟧ |
| **(5) Another concept** | **Yes — see §6.4.** *New* is not one concept. | ⟦ARCHITECT ANALYSIS⟧ |

### 6.3 Reading (3) is two readings, and the difference is the V-7 dependency

| Sub-reading | Predicate | What it depends on | Label |
|---|---|---|---|
| **(3a) Custody-scoped** | *No qualifying follow-up has occurred **since the current custody interval opened**.* Every transfer resets it, with or without history. | The **Assignment Log** (§06, canonical) plus activity history. **No V-7 dependency.** | ⟦ARCHITECT ANALYSIS⟧ |
| **(3b) Entitlement-scoped** | *No qualifying follow-up exists **that this viewer is entitled to see**.* A transfer *with* history does not produce *New*; a transfer *without* history does. | AD-01G **G-6**'s entitlement projection. **Direct V-7 dependency.** Makes *New* viewer-relative. | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧** (3b) matches P-10's *"fresh context"* language more literally; (3a) is
> simpler and has no authorization term. **Choosing between them is V-5, which this document does not
> resolve.** It is recorded here only because the V-3 answer makes the choice consequential: under
> **H-4** *New* is derived, and a derived value must have its inputs stated. **This document states
> that the inputs are one of two specific sets and stops.**

### 6.4 The finding

> **⟦ARCHITECT RECOMMENDATION — the meaning of *New*⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL.)*
>
> **H-5 — *New* is not a Lead-lifecycle value. It is a family of three derived predicates, all
> legitimate, all needed, all computable from facts the product must hold anyway.**
>
> | Predicate | Question it answers | Consumer |
> |---|---|---|
> | **N-record** | *Has this work record ever been worked by anyone?* | Funnel entry; AD-01 §9.1's *Worked*; data-quality reporting |
> | **N-context** | *Has this record been worked in the current working context?* — scope is **V-5** ((3a) or (3b)) | The operational work queue; per-custody first-response; P-11's observed behaviour |
> | **N-inquiry** | *Has this inquiry been worked since it arrived?* | §14 Action Feed *"New leads"*; inquiry→first-response (**W-4**); scenarios 5 and 6 |
>
> **None of the three is persisted. All three are derivable.** The reference system's single *New*
> column collapsed them, which is exactly why consolidated §11 says the scope *"must be finalized."*
> **The product keeps the word *New* for users; the model keeps three predicates and states which one
> each surface means.**
>
> **What this document does NOT do:** it does not choose which predicate the operational queue uses
> (**V-5**), it does not define *qualifying* (**V-4** — undefined in consolidated §9, and it gates all
> three predicates plus FUT plus first-response, which **must share one answer**), and it does not
> resolve **V-6**.

### 6.5 Consequence for AD-01A §8.1 — stated precisely, as the task requires

> **⟦ARCHITECT ANALYSIS⟧ The task asks whether an amendment to AD-01A §8.1 is *logically forced*, and
> requires that the consequence be stated rather than the decision reopened. It is forced, and the
> honest statement is broader than *New*.**
>
> **AD-01A §8.1 states that the Lead Lifecycle *is* four values. AD-01A §8.6 restates it as
> *"Lead Lifecycle (persisted — four values …)"*.** Under **H-4** and **H-5**:
>
> | Value | Under §8.1 as recorded | Under H-4 / H-5 |
> |---|---|---|
> | **New** | Persisted, on the Lead | **Derived** — three predicates (§6.4) |
> | **Follow-up** | Persisted, on the Lead | **Derived** — from the next-action commitment |
> | **Success** | Persisted, on the Lead | **Persisted, on the Inquiry**, referencing the Booking |
> | **Dump** | Persisted, on the Lead | **Persisted, on the Inquiry** (commercial closure) **+ derived on the record** (queue exit) |
>
> **Zero of the four remain as persisted Lead-level lifecycle state.**
>
> > **⟦ARCHITECT ANALYSIS⟧ AMENDMENT A-1 — logically required, named here, NOT made here.**
> >
> > **AD-01A §8.1 and §8.6 require amendment as to *level and persistence*. They do NOT require
> > amendment as to *vocabulary*.**
> >
> > - **What is unaffected:** the four-value vocabulary; the rejection of *Pending* as a fifth value;
> >   Today / Future / Overdue as derived from next-action timing; §8.2 (Q4); §8.3 (Q7); §8.4
> >   (sync ≠ verification); §8.5 (no assignment axis). **Q1's actual decision is untouched, and this
> >   document does not reopen it.**
> > - **What is amended:** the proposition — stated by §8.1 and made explicit by §8.6's word
> >   *"persisted"* — that the four values are **persisted state on the Lead record**.
> > - **Why it is *logically* forced rather than merely recommended:** it follows from **CE alone**
> >   (§3.6 H-1), which is itself forced by §8.3, Q6 and **R6** acting on the Product Owner's own
> >   consolidated §7/§13. **A record that must simultaneously hold a permanent Success on one
> >   interest and a live Follow-up on another cannot carry one persisted value.** No answer to Y-1
> >   changes this.
> > - **Provenance, so this is not mistaken for a new challenge:** AD-01F **V-5/V-6** raised it for
> >   *New*; AD-01G **§13.1** and **§16.2** widened it to *Success* and *Dump* and requested the
> >   amendment; AD-01G **§17** named V-3 as the decision that would settle it. **This document
> >   completes that request. It originates nothing and it amends nothing.**
> >
> > **Only the Product Owner may make A-1.** Per §88 this is a source-of-truth change, and per
> > AD-01A §7 delegation to an architect is not authorization.
>
> **One further consequence, recorded so it is not rediscovered:** AD-01C **T-12** already tracks a
> pending corrective note to §8.6's enumeration (for *Blocked*). **A-1 touches the same enumeration's
> first bullet.** If both are eventually made, they should be made in one editorial pass by whoever
> holds that authority. **Neither is made here, and N-2 is neither resolved nor narrowed.**

---

## 7. Meaning of Dump

> **⟦ARCHITECT ANALYSIS⟧ Scope discipline, stated first.** The task asks **only** whether Dump can
> validly exist at record level, at inquiry level, or at both with separate meanings. **Dump semantics
> are not finalised here.** No reason values are proposed (**N-4** owns them). No new lifecycle state
> is invented at either level. **V-11, V-12 and V-13 are not resolved.**

### 7.1 The evidence is unusually explicit, and it says *two*

> **⟦PRODUCT-OWNER DIRECTION⟧** **P-14** — consolidated §11 states the duality in the Product Owner's
> own words: *"Terminal/non-active sales disposition at lifecycle level, **but real-world usage shows
> it may also function as workload-management disposition; semantics must be kept precise**."*
> **P-15** — managers redistribute dumped leads to freshers for another calling attempt. **P-16** —
> the rep's Dump makes the lead *"non-active in the **relevant** sales workflow"*. **P-17** — the
> operation's primary filter is *All-Without-Dump*, i.e. *"exclude from my working set."*

> **⟦ARCHITECT ANALYSIS⟧ This is not a case where the architect must infer a duality from behaviour.
> The Product Owner has stated it directly and asked that the semantics be kept precise.** P-16's word
> *"relevant"* is the same context-relativity that P-9 applies to *New*, and it is not accidental.

### 7.2 Applying AD-01 §3's test

> **⟦ARCHITECT ANALYSIS⟧** AD-01 §3's test: *two concepts belong on one axis only if a record can
> never legitimately be in both at once.* Apply it to the described operation:
>
> A record can be, **at one instant**: *out of handler A's queue* **and** *commercially closed as
> non-responsive* **and** *available for another attempt* — and a moment later *in handler B's queue*
> while the commercial closure is **unchanged and still true**. **One value cannot hold that.**
> AD-01F **§10.2** established this decomposition (D-i queue exit · D-ii commercial outcome ·
> D-iii redistribution eligibility) and **it is confirmed here without amendment.**
>
> The concurrent-interest scenarios add a second, independent proof that AD-01F did not have:
> **scenario 3 (A = Follow-up, B = Dump)**. Closing B while A is live must not close the record, and
> B's preserved reason must survive A's eventual, different outcome. **A single record-level Dump has
> one preserved-reason slot and two closures to record.** AD-01A §8.3 forbids the overwrite outright.

### 7.3 The answer to the question the task asks

> **⟦ARCHITECT RECOMMENDATION — Dump's valid level(s)⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. This answers **only** the level question.)*
>
> **H-6 — Dump validly exists at BOTH levels, with two different meanings, and only one of them is a
> persisted lifecycle disposition.**
>
> | | **At the Inquiry** | **At the work record** |
> |---|---|---|
> | **What it means** | *This engagement ended without conversion.* The classified, reasoned, **preserved** commercial outcome. | *This record has no live work obligation for its current handler.* A queue-exit **work condition**. |
> | **Form** | **Persisted.** Monotone, terminal-once, never rewritten (AD-01A §8.3, **R6**). | **Derived**, and **custody-scoped** — true for one handler and false for the next **with no historical fact changing**. |
> | **Carries a reason?** | **Yes — mandatory** (AD-01A §8.3, unamended). Classified on the three approved dimensions. **Values are N-4, open.** | **No.** It is not a commercial statement and must never be asked to carry one. |
> | **Terminal?** | **Yes, without exception.** | **No — and it must not be.** The fresher case (P-15) requires it to become false again. |
> | **Consistent with the evidence that Dump ≠ dead relationship?** | Yes — the *engagement* ended. | Yes — the *record* has no terminal condition at all (AD-01G §4.1: *"Terminality — has none"*). | 
>
> **This is exactly the placement AD-01F §10.4 recommended, reached independently here from the
> concurrent-interest scenarios, and it is adopted.** It is also why P-14's two meanings can both be
> true at once without contradiction: the Product Owner's *"terminal at lifecycle level"* is the
> inquiry's, and the *"workload-management disposition"* is the record's.
>
> **H-7 — Redistribution eligibility (D-iii) is NOT a lifecycle value at either level, and no new
> state is invented for it.** It is a management control. **Whether it is explicit, derived from
> AD-01A §8.3's recoverability posture plus policy, or does not exist as a distinct thing, is V-12 —
> not resolved here.** Asking Dimension C to carry workload policy would corrupt the one dimension
> AD-01C §2.6 and AD-01E §3.5 identified as the intended re-engagement gate; **AD-01F §10.3's finding
> that this is a missing control rather than a missing dimension is confirmed and not extended.**

### 7.4 What H-6 explains about the real-world evidence

> **⟦ARCHITECT ANALYSIS⟧ The task supplies four facts about historical Dump usage. H-6 accounts for
> all four without adding anything.**
>
> | Real-world fact | Accounted for by | Label |
> |---|---|---|
> | *Leads were dumped to reduce personal workload* | The **record-level, custody-scoped** queue-exit condition. It is a statement about this handler's working set. | ⟦ARCHITECT ANALYSIS⟧ |
> | *Managers redistributed dumped leads to freshers for more calling attempts* | A **new custody interval** opens on a record that has **no terminal condition**. The closed inquiry stays closed. **Expressible under H-4/H-6; still not performable — see §11.3 and V-12.** | ⟦ARCHITECT ANALYSIS⟧ |
> | *Customers could later regenerate inquiries* | A **new inquiry** opens beside the closed one (P-3). **No backward transition anywhere.** Whether it is a new opportunity is **V-14, open.** | ⟦ARCHITECT ANALYSIS⟧ |
> | *Dump did not necessarily mean the relationship was permanently dead* | **Directly true under H-6**: the *engagement* is permanently closed; the *relationship* (the work record) has no terminal condition at all. Both statements are true at once, which is what the evidence requires. | ⟦ARCHITECT ANALYSIS⟧ |

---

## 8. Success/Booking relationship

> **⟦PRODUCT-OWNER DIRECTION⟧ Q4 is NOT reopened.** Success **is** the approved Booked / §20 Stage 3
> milestone (P-20, P-23). **The only question answered here is the one the task permits: to which
> object that milestone attaches.**

### 8.1 The three objects in play, and what each owns

| Object | What it owns | Source | Label |
|---|---|---|---|
| **Booking** | **The milestone itself.** Stage 1 → 2 → 3; its own lifecycle; its **immutable financial snapshot** (§21); its price-list version (§22); its applicant set (§06 Booking Group); its amendments (§25), unit transfers (§26) and cancellations (§35). | §20, §21, AD-01A §8.2 | ⟦PRODUCT-OWNER DIRECTION⟧ |
| **Inquiry** | **The conversion fact** — *this engagement converted, evidenced by that Booking.* Plus the source, campaign, channel and attribution claim set that the conversion is credited to. | AD-01G §5.1; AD-01C D4/D5/D6 | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Work record** | **Nothing persisted.** A derived customer-level condition — *"this client has converted at least once"* — and nothing more. | §06 (*Customer is a context*), §07 | ⟦ARCHITECT RECOMMENDATION⟧ |

### 8.2 The recommendation

> **⟦ARCHITECT RECOMMENDATION — Success attachment⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. **Q4 not reopened.**)*
>
> **H-8 — The §20 Stage 3 milestone belongs to the Booking and is never absorbed. The *conversion*
> attaches to the Inquiry, which references that Booking. The work record carries no persisted
> Success; *"has converted"* is a derived customer-level condition only.**
>
> **Five independent grounds, none of which reopens Q4:**
>
> 1. **AD-01A §8.2 says so already.** *"Booking has its own lifecycle/state machine. The Lead
>    Lifecycle must not absorb Booking states."* H-8 is that instruction followed to its conclusion:
>    if the Lead Lifecycle must not absorb Stage 1 or Stage 2, it should not absorb Stage 3 either —
>    it should **reference** it.
> 2. **Example 2 forces it.** A record with A converted and B live cannot carry Success as its own
>    value without killing B's work (§3.2).
> 3. **Example 4 forces it harder.** Two conversions, two Bookings, two snapshots, potentially two
>    producers. One record-level value represents one.
> 4. **The operation shows it.** P-5's *Project Name* and *Booked Project* as **two columns** is
>    direct evidence that the project transacted and the project of current interest are two facts on
>    one client row.
> 5. **Commission requires it.** §32/§40 entitlement keys on the resolved claim of **the engagement
>    that converted** (AD-01 **E-13**; AD-01C **D6**). A record-level anchor cannot say which
>    engagement a 2026 entitlement concerned. *(The anchor decision itself is **V-16** — **not
>    resolved here.**)*
>
> **What H-8 does not decide:** **V-22** — *who or what sets Success*, handler assertion versus
> system derivation from the Booking reaching Stage 3 via Sales Support approval — is **not resolved
> here**, and consolidated §18 step 6's evidence is neither weighed nor discounted. **V-23** — the
> record's condition between booking initiation and Sales Support approval — is **not resolved here**
> and remains obstructed by **N-2**, whose priority AD-01F §11.2(b) raised and this document does not
> lower.

### 8.3 Q6 is strengthened, not reopened

> **⟦ARCHITECT ANALYSIS⟧ This must be stated carefully, because a document that relocates Success
> could easily be read as reopening its terminality. It does the opposite.**
>
> - **At the record level, Q6's terminality is under constant pressure.** A converted client who
>   expresses new interest generates an operational demand to put the record back in a work queue —
>   which is a backward-transition-shaped pressure on a value Q6 declared terminal. **The pressure is
>   real, recurring and legitimate** (scenarios 1, 4, 6), and every occurrence is an invitation to
>   carve an exception into Q6.
> - **At the inquiry level there is no pressure at all.** The converted inquiry is finished forever;
>   the new interest is a new inquiry. **Q6's "no ordinary backward edge out of Success" becomes true
>   without exception and without enforcement.**
> - **Q6-S4's substance is unchanged; only its subject is restated** — *"a new Sales Lead"* becomes
>   *"a new inquiry on the existing work record."* **This is AD-01G §13.1 / G-12, upheld here and
>   extended to Example 4 (two Successes) and scenario 6.** It is a restatement at the level the
>   evidence puts it, **not a revision**, and **no Q6 decision requires revision.**
> - **Q6's organising principle — *restate what was never true; never restate what was true at the
>   time* — is untouched and remains correct at whatever level it is applied** (AD-01G §13.1,
>   confirmed).
> - **S1 is unchanged.** A cancelled booking lives on the Booking (§35) and never rewrites the
>   inquiry's historical conversion. **AD-01C §3.2's CP-financial safety property is preserved
>   exactly:** a work-record condition that changes as B's work proceeds can never present to the
>   commission engine as a §26-forbidden cancellation, because the work record carries no value the
>   commission engine reads.

---

## 9. Timeline/event ownership

> **⟦ARCHITECT ANALYSIS⟧** The governing principle is the Product Owner's own, in consolidated §8
> and §31: **one understandable chronological client timeline, with system-generated events
> distinguished from user-performed sales work, and nothing silently overwritten.** AD-01F §7.2's
> finding — *one timeline is a correct **read model** and an incorrect **storage** model* — is
> **upheld here without amendment and not re-argued.** AD-01G §6.1 rules 3, 4 and 6 are **confirmed.**
> What follows is only what the V-2 and V-3 answers change.

### 9.1 Which object owns each class of event

| Event class | Owned by | Appears on the client timeline as | Label |
|---|---|---|---|
| **Record created** | Work record | A system event; **excludes from FUT** (§9) | ⟦ARCHITECT ANALYSIS⟧ |
| **Inquiry arrived** (new project interest, regenerated inquiry) | **Inquiry** | A dated, sourced event naming **the project** (§8: *"Customer regenerated/renewed inquiry for another project"*; §13: record it, do not overwrite) | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Assignment / transfer** | **Assignment Log** (§06, canonical) | **Projected** from the log — **never duplicated as a stored timeline row** (AD-01F §7.2, upheld; AD-01G §6.1 rule 6) | ⟦ARCHITECT ANALYSIS⟧ |
| **User follow-up** (activity, response, sub-response, remarks, next follow-up) | **Work record**, referencing the inquiry it concerns where it concerns one | One entry per call, whatever it covered (**T1**). **Whether one activity may reference several inquiries is W-1 — not resolved** | ⟦ARCHITECT ANALYSIS⟧ |
| **Inquiry outcome** — converted, or closed with a preserved reason | **Inquiry** | ***"Project A inquiry closed — reason X"***, **not** *"lead dumped"* — see §9.2 | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Booking progression** (Stage 1 → 2 → 3), amendment, unit transfer, cancellation | **Booking** (its own lifecycle, §20/§21/§25/§26/§35) | **Referenced**, never absorbed (AD-01A §8.2). A cancellation must never render as a lifecycle reversal | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Queue exit / redistribution** (the record-level half of Dump) | **Work record**, custody-scoped | A **work** event, visibly distinct from an inquiry closure. **Which control the user operated is V-11 — not resolved** | ⟦ARCHITECT ANALYSIS⟧ |
| **First-response duration** | **Nothing** | **Derived, never stored** (AD-01A §3.6; AD-01F §7.2) | ⟦ARCHITECT ANALYSIS⟧ |

### 9.2 The requirement the concurrent-interest answer adds

> **⟦ARCHITECT RECOMMENDATION⟧ H-9 — every business-history entry must be resolvable to (i) which
> inquiry it concerns, where it concerns one, (ii) which custody interval it fell in, and (iii)
> whether it qualifies as user-performed sales work.**
>
> **(i) is new with V-2/V-3; (ii) is AD-01G §12 row 10, confirmed; (iii) is consolidated §8/§9/§31,
> confirmed.**
>
> **Why (i) is not optional, shown on scenario 3.** A record whose Project-A inquiry closed in March
> and whose Project-B inquiry opened in June produces, under a record-level lifecycle, a timeline that
> reads *"lead dumped"* → *"follow-up scheduled"* → *"follow-up completed"*. **That timeline is not
> merely ugly; it is false** — it asserts the record was closed and reopened, which is the backward
> transition AD-01 §6.1 forbids and which never happened. Under **H-4**, the same events read
> *"Project A inquiry closed — reason X"* → *"new inquiry: Project B"* → *"follow-up (Project B)"*.
> **One chronological story, every event semantically intact** — which is exactly what consolidated §8
> and AD-01F §7.2 require, and which a record-level lifecycle cannot produce.

### 9.3 What must not happen to the timeline

> **⟦ARCHITECT RECOMMENDATION⟧** **AD-01G G-8's read-time-projection principle is confirmed and
> extended from *New* to every derived condition.** A *fresh context*, a *New* presentation, a
> restricted view or a re-queued record must **never** be produced by deleting, archiving, copying,
> resetting or re-dating a timeline entry. Under **H-4** this is easier to obey than it was, because
> there is no persisted record-level value that a presentation could be tempted to rewrite — but the
> prohibition stands unchanged and applies to activities, inquiries and counters alike (§07, **R6**,
> consolidated §31, P-11/P-12 of AD-01G).

---

## 10. Reporting consequences

> **⟦ARCHITECT ANALYSIS⟧ Business facts only.** No SQL, no query, no dashboard, no chart, no metric
> presented as approved. Consolidated **§25** sets the standard: metrics *"must be based on durable
> business facts rather than UI-only counters."* **AD-01F §13's fourteen-row table and AD-01G §12's
> ten rows are upheld and not restated.** What follows is only what the V-2 and V-3 answers change or
> add.

### 10.1 Three counts that used to be one

> **⟦ARCHITECT ANALYSIS⟧ The single most consequential reporting change, and the one most likely to
> be discovered late.**
>
> | Count | What it counts | What it is for |
> |---|---|---|
> | **Lead count** | Distinct **work records** — distinct client relationships being worked | Workload, handler capacity, assignment distribution, customer-base size |
> | **Inquiry count** | Distinct dated **engagements** | **The conversion denominator.** Capture volume, source and campaign volume |
> | **Project-interest count** | Distinct (record × project) pairs holding at least one inquiry | Project-level demand and pipeline breadth |
>
> Under a record-level model these three collapse into one number, and the collapse is invisible.
> Under **H-4** they are three different numbers that will legitimately disagree, and **project-interest
> count equals inquiry count only if Y-3 says a project interest is the inquiry.**

> **⟦BUSINESS DECISION REQUIRED — Y-5⟧** **Which of the three is *"leads"* in management reporting?**
> The reference system reported one number and the consolidated requirements inherit that word
> throughout. **Nothing here chooses.** *(Distinct from **V-18**, which asks whether a re-inquiry
> counts as a Capture; Y-5 asks which **unit** is being counted at all.)*

### 10.2 The durable business facts the model must preserve

| Reporting need | Business fact required, and the level it must be keyed at | Effect of the V-2/V-3 answers | Label |
|---|---|---|---|
| **FUT** — *"total count of actual user-performed follow-ups"* (§9) | Every activity carries a **system-owned qualifying-for-FUT semantic** (**R4**: semantics in a column, never inferred from a label). Computable at **record** and **custody-interval** scope. | **Unchanged by H-4** and confirmed. **Under CL (Y-1 = yes), a per-inquiry scope is also wanted, which depends on W-1** — not resolved. | ⟦ARCHITECT ANALYSIS⟧ |
| **First response** | Creation time, assignment time, custody-interval start, **inquiry origination**, and the first **qualifying** activity — with *effective* and *recorded* time held separately (AD-01 §8.3, **E-23**) | **Inquiry→first-response moves from optional to necessary.** Scenarios 5 and 6 create a second engagement on a long-lived record whose responsiveness no record-level clock can measure. → **V-20**, **W-4** — not resolved. | ⟦ARCHITECT ANALYSIS⟧ |
| **Current queue / Today / Future / Overdue** | The **next-action timestamp** plus authoritative server time | **Confirmed and made consistent.** Derived, never persisted (P-7, P-12). Under **H-4** nothing competes with the timestamp to describe the record's condition. **Under CL, whose timestamp — Y-2.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Success conversion** | The **inquiry's** conversion reference plus the **Booking** it points at | **Must key on the inquiry.** Examples 2 and 4 make a record-level key arithmetically wrong, not merely imprecise. → **V-17** — not resolved. | ⟦ARCHITECT ANALYSIS⟧ |
| **Dump / disposition** | The **inquiry's** preserved reason, classified on AD-01A §8.3's three dimensions | **Per inquiry, permanently.** Reports branch on the **semantic columns** — validity class, responsibility locus, recoverability posture — **never on a label** (**R4**). **No reason-coded loss reporting is defensible until N-4 supplies values** (AD-01 §9.6, confirmed). | ⟦ARCHITECT ANALYSIS⟧ |
| **Project-level conversion** | The inquiry's **project**, origination, source and own outcome | **Becomes computable.** Under a record-level model with plural interests it is not computable at all — the record has no single project (AD-01F **C-9**). | ⟦ARCHITECT ANALYSIS⟧ |
| **Customer-level reporting** | *"This Person has converted at least once"* | **Legitimate and derived.** §06 makes *Customer* a context. **It must never become the conversion key** — that is the confusion Example 4 exposes. | ⟦ARCHITECT ANALYSIS⟧ |
| **Manager reporting** | Assignment performance per **custody interval**; transfer volumes including the with/without-history decision | **Unchanged from AD-01G §12 rows 6 and 7, confirmed.** Measured at the record, a handler inherits a predecessor's history and is judged on work they never did. | ⟦ARCHITECT ANALYSIS⟧ |
| **CP attribution** | The **claim set of the engagement claimed** | Example 4 shows a record-level anchor cannot distinguish two legitimate entitlements from a §11 clash. → **V-16** — **not resolved; the choice among the remaining candidates is the Product Owner's, and M-5 owns the Person candidate.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Commission** | The **resolved claim of the converting inquiry**, and the **Booking** (§32, §40; AD-01 **E-13**) | **§33 clawback and §26 unit transfer must reach the right Booking.** Under Example 4, a record-level linkage cannot state which entitlement a cancellation recovers against. | ⟦ARCHITECT ANALYSIS⟧ |
| **Re-engagement** | The three acts held apart — **correction** / **re-engagement (new inquiry)** / **redistribution** — with different restatement effects on closed periods | **AD-01F §12.4 confirmed and unextended.** A correction deliberately restates; a re-engagement must never restate; a redistribution must neither restate **nor create a new capture**. → **V-12**, **V-18** — not resolved. | ⟦ARCHITECT ANALYSIS⟧ |

### 10.3 What still must not be promised

> **⟦ARCHITECT ANALYSIS⟧** AD-01 §9.6 stands unchanged and is **widened** by nothing here: no
> weighted forecast (**M-8**), no temperature-based quality analysis (**Q9**, **V-21**), no
> reason-coded loss or source-quality comparison until **N-4** supplies values, and no re-engagement
> or cohort analysis until **V-14** and **V-18** define what a second inquiry counts as. Publishing
> any of these earlier produces numbers that look authoritative and are not.

---

## 11. Assignment/work-queue consequences

> **⟦ARCHITECT ANALYSIS⟧ AD-01A §8.5 is confirmed throughout this section. No persisted assignment
> axis is reintroduced at either level, and no reassignment-approval workflow is invented.**

### 11.1 What is unchanged

| Property | Status | Label |
|---|---|---|
| One **handler**, one **queue row**, one **timeline**, one **assignment history** per work record | **CONFIRMED** (AD-01G §4.1; AD-01F **T1**). H-4 changes nothing here. | ⟦ARCHITECT ANALYSIS⟧ |
| Owner and Handler remain two references (§10); the **Assignment Log** owns the history (§06) | **CONFIRMED** | ⟦ARCHITECT ANALYSIS⟧ |
| The work record is the unit of **assignment, transfer and bulk transfer** | **CONFIRMED.** A transfer moves the record and **all** its inquiries; no inquiry is transferred independently, because inquiries have no handler (AD-01G §5.2). | ⟦ARCHITECT ANALYSIS⟧ |
| **Custody intervals are derived** over the Assignment Log, not stored | **CONFIRMED** (AD-01G **G-9**) | ⟦ARCHITECT ANALYSIS⟧ |

### 11.2 What H-4 improves

> **⟦ARCHITECT ANALYSIS⟧**
>
> - **AD-01 E-04 (*reassignment must not move the lifecycle*) becomes unviolatable by construction.**
>   There is no record-level lifecycle to move. The rule stops depending on discipline.
> - **Transfer-without-history stops creating pressure to rewrite state.** AD-01F §8.2 identified
>   direct pressure to set the lifecycle to *New* on a transfer-without-history; AD-01G **G-8**
>   answered it with a read-time projection. Under **H-4** the pressure disappears entirely: *New* is
>   already derived, so there is nothing to set. **G-8 is confirmed and its burden is reduced.**
> - **Bulk transfer is unaffected.** One management act, one history decision, many records (AD-01G
>   §10.2). Its authorization treatment depends on **M-3/M-7** and is not designed here.

### 11.3 The one gap H-4 does not close, stated plainly

> **⟦ARCHITECT ANALYSIS⟧ The task asks that consequences be named where directly forced. This is the
> most important one, and pretending H-4 closes it would be dishonest.**
>
> **A work record whose every inquiry is closed has, under H-4, no derivable work obligation.** The
> Product Owner's described redistribution (P-15) hands exactly such a record to a fresher and expects
> them to call. **H-4 makes the operation *expressible* — a new custody interval opens on a record that
> has no terminal condition, and nothing historical is rewritten — but it does not make the operation
> *performable*, because nothing tells the derivation that work is owed.**
>
> **Three things are true about this gap and all three matter:**
>
> 1. **It is not created by H-4.** Under AD-01A §8.1 as recorded, the record is *Dump*, out of every
>    queue, with §13's mandatory next-action date having nothing to attach to — **strictly worse**
>    (AD-01F §10.2, confirmed). H-4 improves the situation and does not complete it.
> 2. **No candidate model in §4 closes it.** It is not a discriminator between A, B, C, D or E.
> 3. **It is owned by V-11 and V-12, and this document does not resolve them.** Whether the missing
>    input is an explicit management act, a derived condition from posture-plus-policy, or nothing at
>    all is the Product Owner's to state. **The sources describe the behaviour (§7) and state no
>    rule.** Per Spec **Rule 1**, nothing here fills it.
>
> **Recorded consequence for sequencing:** this is why §16 recommends **V-11 + V-12** as the next
> decision.

### 11.4 The filter that must be redefined

> **⟦ARCHITECT ANALYSIS⟧** Restated from §5.4 because it lands here operationally. The observed
> **All-Without-Dump** filter (P-17) is the reference operation's primary working filter and it keys on
> a record-level Dump value that **H-4 removes**. Its real meaning must be restated as a derived
> condition over live work obligations. **This is a genuine, user-visible consequence of H-4** and the
> Product Owner should approve it knowingly. **Its exact definition depends on V-11 and on §11.3's
> gap, and is not proposed here.**

---

## 12. CP attribution/commission consequences

> **⟦ARCHITECT ANALYSIS⟧ This section states consequences only. V-16 (the attribution anchor), V-15
> and AD-01C T-4/T-5 (a claim's temporal reach), M-5 (the uniqueness boundary) and M-9 (the commission
> model) are NOT resolved, narrowed or given a preferred branch.**

| # | Consequence of the V-2 / V-3 answers | Label |
|---|---|---|
| **1** | **The work record is shown to be incapable as an attribution anchor**, by Example 4: two conversions, two Bookings, potentially two producers, two §32/§40 entitlements, and a record-level anchor that can represent one. **This removes a candidate on capability grounds; it does not choose among the remainder.** → **V-16**, not resolved; **M-5** still owns the Person candidate. | ⟦ARCHITECT ANALYSIS⟧ |
| **2** | **Clash detection and duplicate detection are confirmed as different questions at different levels.** §09 duplicate detection asks *"is this the same human?"* — a Person/record question (**M-5**). §11 clash asks *"do two producers claim this engagement?"* — an engagement question. **AD-01G T8 confirmed; Example 1 (if Y-1 permits it) makes the second question concurrent, which is its hardest form.** | ⟦ARCHITECT ANALYSIS⟧ |
| **3** | **§11's clash-visibility restriction becomes engagement-scoped.** *"Sales Reps should not automatically see sensitive clash information"* now means a rep working inquiry B must not see clash information on inquiry A of the same record. **AD-01G §11.4 confirmed; the mechanism is AD-01G G-6's interest boundary; V-24 is not resolved.** | ⟦ARCHITECT ANALYSIS⟧ |
| **4** | **§33 clawback and §26 unit transfer stay correctly scoped.** Each entitlement traces to one Booking through one converting inquiry. A cancellation of A's booking reaches A's entitlement and **cannot** touch B's. | ⟦ARCHITECT ANALYSIS⟧ |
| **5** | **AD-01C §3.2's CP-financial safety property is preserved and strengthened.** A flapping record condition can never present to the commission engine as a §26-forbidden cancellation, because under **H-4** the record carries **no persisted value the commission engine reads**. | ⟦ARCHITECT ANALYSIS⟧ |
| **6** | **Scenario 5 carries direct commission exposure and is untouched here.** A regenerated same-project inquiry arriving through a **different** CP is **V-15**, coupled to AD-01C **T-4**; a later, separately-sourced purchase by an already-converted customer is AD-01C **T-5**. **Neither is resolved, and both should be answered in one sitting with V-16.** | ⟦ARCHITECT ANALYSIS⟧ |
| **7** | **Source and campaign analysis is only honest at the inquiry level.** AD-01C **D5** showed a record-level source field cannot record a second engagement's channel. Every V-2 scenario instantiates that defect. **Confirmed, not extended.** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 13. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is
> decided, and no part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item
> sits in Master Spec **§88**'s MUST-ASK column.)*

**H-1 — V-2, first half: concurrent *existence* is valid and required.** One work record must be able
to hold multiple inquiries in different states and outcomes at the same instant, with at most one
non-terminal. **Examples 2, 3 and 4 and scenarios 5 and 6 are all VALID**, and each is forced by
AD-01A §8.3, AD-01C §3.7 (Q6), §07 and **R6** acting on consolidated §7/§13. [§3](#3-concurrent-interest-scenarios)

**H-2 — V-2, second half: concurrent *liveness* is `BUSINESS DECISION REQUIRED`.** Example 1 is not
established by any source. → **Y-1**, with **Y-2**. **No branch is preferred.** [§3.4](#34-example-1--project-a--follow-up-project-b--follow-up)

**H-3 — the two halves separate cleanly.** CE alone falsifies a record-level lifecycle, so **V-3 can
be approved without Y-1 being answered.** [§3.6](#36-v-2--the-answer)

**H-4 — V-3: adopt Model D, precisely specified.** The **Inquiry** carries a persisted, monotone,
terminal-once commercial disposition — converted (referencing the Booking) or closed with a
classified, preserved reason. The **work record carries no persisted lifecycle value**; its work
condition is **derived at read time** from its inquiries' states, its next-action commitment and its
custody-scoped activity history. **The four-value vocabulary is retained in full as user-facing and
reporting language.** [§5](#5-recommended-lifecycle-ownership)

> **⟦ARCHITECT ANALYSIS⟧ Why, in one paragraph — the reasoning is §4's and is not restated.**
> **Model A is eliminated** (fails all six scenarios, and fails three using CE alone). **Model C is
> rejected** — not because two levels are wrong but because **persisting** the second is a second
> source of truth, the identical objection AD-01A §3.6/§5.2 and AD-01G G-9 already sustained twice.
> **Model B is right in shape and insufficient in its derivation inputs**, which is what makes the
> answer D rather than B. **No Model E is needed.** [§4](#4-lifecycle-alternatives)

**H-5 — *New* is not a Lead-lifecycle value.** It is a family of **three derived predicates** —
N-record, N-context and N-inquiry — all legitimate, all needed, none persisted. The reference system's
single column collapsed them, which is why consolidated §11 defers the scope. **Which predicate the
operational queue uses is V-5; what *qualifying* means is V-4; neither is resolved here.**
[§6](#6-meaning-of-new)

**A-1 — an amendment to AD-01A §8.1 and §8.6 is LOGICALLY REQUIRED, is named here, and is NOT made
here.** It concerns **level and persistence only, never vocabulary**. Under H-4/H-5, **zero of the
four values remain as persisted Lead-level lifecycle state**. Q1's actual decision — the four values,
the rejection of *Pending*, Today/Future/Overdue derived — is **untouched and not reopened**. The
request originates with AD-01F V-5/V-6 and AD-01G §13.1/§16.2; this document completes it. **Only the
Product Owner may make it.** [§6.5](#65-consequence-for-ad-01a-81--stated-precisely-as-the-task-requires)

**H-6 — Dump validly exists at BOTH levels with two different meanings.** On the **inquiry**: the
persisted, reasoned, preserved, exception-free commercial closure. On the **record**: a derived,
custody-scoped, non-terminal queue-exit work condition that carries no reason. This is the placement
AD-01F §10.4 recommended, reached independently from the concurrent-interest scenarios and adopted.
**Dump semantics are not finalised; V-11/V-12/V-13 are not resolved.** [§7](#7-meaning-of-dump)

**H-7 — redistribution eligibility is not a lifecycle value at either level**, and **no new state is
invented for it**. It is a management control, owned by **V-12**, not resolved here. Dimension C must
not be asked to carry workload policy. [§7.3](#73-the-answer-to-the-question-the-task-asks)

**H-8 — the §20 Stage 3 milestone belongs to the Booking; the *conversion* attaches to the Inquiry,
which references it; the work record carries no persisted Success.** *"Has converted"* is a derived
customer-level condition only. **Q4 is not reopened and Q6 is strengthened, not reopened** — at the
inquiry level Q6's terminality is true without exception and without enforcement pressure.
[§8](#8-successbooking-relationship)

**H-9 — every business-history entry must be resolvable to which inquiry it concerns, which custody
interval it fell in, and whether it is user-performed sales work.** Without the first, the single
chronological timeline required by consolidated §8 becomes false for every CE record, not merely
untidy. [§9.2](#92-the-requirement-the-concurrent-interest-answer-adds)

**H-10 — Sales Episode remains unnecessary. The AD-01G G-4 rejection STANDS, with its conditionality
unchanged.** Every concept V-2 and V-3 expose has a home in an entity the business already names:
bounded commerce → the **inquiry**; bounded work context, per-handler FUT and per-handler
first-response → the **custody interval**, derived over the Assignment Log (AD-01G **G-9**); the
per-attempt re-work of a closed engagement → a **new custody interval**, not a new bounded unit; the
grouping of two same-project inquiries, if **V-14** ever requires it → an **appended reference between
inquiries**, not a new entity. **No gap was found.** The rejection remains **conditional on AD-01G
G-1** exactly as AD-01G stated it: if V-1 were to resolve toward Model A, AD-01E's episode would
become the right answer. **It is not made unconditional here.**
[§4.4](#44-model-d-tested), [§7.4](#74-what-h-6-explains-about-the-real-world-evidence)

**H-11 — one V-7 dependency exists and is confined to *New*.** If V-5 scopes *New* to the custody
interval, there is **no** V-7 dependency. If V-5 scopes it to entitled visibility, *New* becomes
viewer-relative and depends directly on AD-01G G-6's projection. **V-5 and V-7 are both not resolved
here; only the dependency is named.** [§5.6](#56-the-one-direct-dependency-on-v-7--named-and-not-resolved)

**H-12 — one refinement to AD-01G's baseline.** AD-01G §4.1's *"one next-action commitment"* is a
property **conditional on at most one inquiry being live**, not an independent property of the work
record. Under CL it requires its own decision (**Y-2**). **AD-01G is not edited.**
[§5.5](#55-the-one-place-ad-01gs-baseline-needs-refinement)

---

## 14. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and the consolidated requirements' own **§1** operating rule, none is
> guessed. Numbered **Y-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V /
> W** namespaces.

### 14.1 New items raised by this document

> **⟦BUSINESS DECISION REQUIRED⟧** Every row in this table is a **BUSINESS DECISION REQUIRED** item. **No row is answered, narrowed or given a preferred branch anywhere in this document.**

| # | Decision required — stated precisely | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **Y-1** | **May two or more inquiries on one work record be simultaneously non-terminal (concurrent liveness)?** i.e. is Example 1 — Project A in Follow-up **and** Project B in Follow-up at the same instant — a state the business performs? | §2.1, §3.4 | **Silent.** Consolidated §4/§7/§13 describe plural interests *"over time"* and describe the closed-then-new sequence; **no source describes or forbids two live engagements.** §28 lists the surrounding boundary as open in the Product Owner's own words. §12's single-status observed row is **not** evidence either way (§2.3). | The data model decides it by default — an invented business rule under **§88**. If permitted without **Y-2**, the next-action commitment's cardinality is set by implementation. If forbidden without saying so, a rep who is genuinely working two projects for one client must falsify one of them. |
| **Y-2** | **If Y-1 is "yes": does the work record still hold exactly one next-action commitment, and how is a second live inquiry's due date represented?** | §3.4, §5.5 | **Silent.** Spec §13 makes a next-action date mandatory on Follow-up; AD-01G §4.1 gives the record **one** commitment; nothing addresses two. | Either a second commitment appears — **rebuilding Model A inside the work record and inheriting every T1 failure** — or one legitimate due date is silently lost. Also determines whether **N-2**'s waiting-on qualifier acquires a cardinality question *(N-2 itself is neither resolved nor narrowed here)*. |
| **Y-3** | **Is a *Project Interest* the same object as an *Inquiry*, or an aggregate over one-or-more inquiries on the same project? And may two inquiries on the *same* project be live at once?** | §3.5, §10.1 | **Silent.** AD-01F §5.3 raised the first half and it has never been answered. Consolidated §13 requires that a regenerated inquiry be **recorded, not overwritten**, which produces two records on one project without saying what they jointly are. | *Project-interest count* and *inquiry count* are either the same number or different ones, with no stated intent. Directly gates **V-14**'s subject and **Y-5**. |
| **Y-4** | **Does a Success on any one inquiry change the work-queue behaviour of the whole record?** i.e. does a client presented as a *Customer* (§06) continue to appear in ordinary sales follow-up queues for an unrelated live inquiry? | §3.2 | **Silent.** §06 makes *Customer* a **context**, not a record, and §07 forbids destroying historical identity — but **nothing states whether the sales work queue changes.** | If the intended answer is *"a converted client leaves the sales queue"*, **Example 2 and scenario 6 are unperformable** and a live Project-B engagement is orphaned. Decided by default otherwise. |
| **Y-5** | **Which of Lead count / Inquiry count / project-interest count is *"leads"* in management reporting?** | §10.1 | **Silent.** The reference system reported one number, and the consolidated requirements inherit the word throughout §9, §12 and §25 without disambiguating it. | Three legitimate numbers, one word. Management reporting, capture reporting and conversion reporting will each pick a different one and disagree permanently. *(Distinct from **V-18**, which asks whether a re-inquiry counts as a Capture.)* |

### 14.2 Items from prior documents that this document explicitly does **not** resolve

> **⟦ARCHITECT ANALYSIS⟧** Each row states **only the effect this document has on a prior open item**. **No item in this table is resolved here**, and where a row records that a direction is *forced* by a finding above, the **decision itself remains the Product Owner's** and is **not** taken.

> **Named so it is unambiguous which questions remain live after V-2 and V-3 are answered. Each is
> listed with only the effect this document has on it.**

| # | Item | Effect of this document |
|---|---|---|
| **V-4** | Does a non-connected attempt count as a *qualifying* follow-up | **Reinforced and now gates more.** It gates all three *New* predicates (§6.4), FUT and every first-response variant, **which must share one answer.** **Not resolved. Strong candidate for the same sitting as the next decision.** |
| **V-5 / V-6** | Is *New* custody-scoped; does AD-01A §8.1 require amendment | **V-5's answer space is now precisely two named sub-readings** ((3a) custody-scoped, (3b) entitlement-scoped — §6.3) and its answer **determines whether a V-7 dependency exists** (§5.6). **V-6 is answered in the affirmative *as a logical consequence* and named as A-1 — but the amendment is NOT made here and only the Product Owner may make it.** |
| **V-7** | History visibility | **Answered by AD-01G. NOT reopened, NOT re-argued, NOT narrowed.** One direct dependency is named (§5.6, H-11) and nothing further. |
| **V-8** | Is the history choice mandatory; default; revocable; bulk | **Unchanged.** Not resolved. |
| **V-9 / V-10** | Existence vs content; the bound surface list | **Unchanged.** Not resolved. |
| **V-11 / V-12 / V-13** | Dump as one control or two; redistribution and its queue condition | **V-11's *placement* half is answered by H-6 (both levels, two meanings); its *control* half — which operation a user is performing — is NOT.** **V-12 is untouched and is now the named blocker on §11.3's gap. V-13 untouched.** **Dump semantics are not finalised.** → §16. |
| **V-14 / V-15** | New commercial opportunity vs continuation; different-source re-inquiry | **V-14 confirmed open, not answered** (scenario 5). **AD-01G T14 upheld: under the recommended model the undecided rule need not be answered at capture time.** **V-15 untouched**, and carries the commission exposure in scenario 5. |
| **V-16** | Attribution / commission anchor (M-5 four-way) | **The work record is shown incapable on Example 4 (§12 row 1). No choice is made among the remaining candidates. NOT resolved.** M-5 still owns the Person candidate. |
| **V-17 / V-18** | Funnel re-key; does a re-inquiry count as a Capture | **V-17 is *forced in direction* by H-4/H-8 and is still NOT resolved** — it is a source-of-truth change and the Product Owner's to make. **V-18 untouched**, and now also interacts with **Y-5**. |
| **V-19 / V-20 / V-21 / V-22 / V-23** | Response vocabulary; first-response variants; temperature; who sets Success; the pre-approval condition | **V-20 gains weight — inquiry→first-response moves from optional to necessary (§10.2).** **V-19, V-21, V-22, V-23 unchanged and not resolved.** **N-2 remains unresolved and remains on the critical path for V-23.** |
| **V-24** | §08 project scope at record or inquiry | **Unchanged and still open.** H-4 does not move it; AD-01G §11.1's finding that it shares one mechanism with V-7 is confirmed. **Not resolved.** |
| **V-25 / V-26** | Participation entitlement's survival; IVR intake metadata | **Unchanged.** Not resolved. |
| **W-1 … W-5** | AD-01G's open items | **Not resolved.** **W-1** (one activity, several inquiries) becomes **routine rather than occasional if Y-1 is "yes"**. **W-2** (which entity is called *Lead*) remains open and is deliberately not answered by this document's terminology. **W-4** (inquiry→first response) is reinforced. **W-3, W-5** untouched. |
| **Q2, Q3, Q5, Q8 – Q16** | AD-01's remaining questions | **Not resolved.** **Q5's mechanical half has no subject under H-4** — no backward edge out of a closed inquiry is ever required — **but Q5 is not resolved and its commercial half is V-14.** **Q10** (merge precedence) acquires a new question — what happens to two records' inquiry sets on merge — **named, not answered.** |
| **Q1, Q4, Q7**, sync/verification, assignment axis | AD-01A §8 decisions | **Treated as fixed input. Q4 explicitly NOT reopened. Q1's vocabulary decision NOT reopened; only its level/persistence proposition is challenged, as A-1.** |
| **Q6** | AD-01C §3.7 | **CONFIRMED and STRENGTHENED. NOT reopened. No Q6 decision requires revision.** Only S4's subject is restated, upholding AD-01G §13.1. |
| **N-1 … N-4** | AD-01A's open items | **Not resolved, not narrowed.** **N-2** in particular: its subject (the next-action commitment's waiting-on qualifier) remains **record-level** under H-4, so relocating the lifecycle does not move it. **Under Y-1 = yes it acquires a cardinality question** — recorded as a consequence only. **N-4** still owns Dump reason values, without which no reason-coded reporting is defensible. |
| **T-1 … T-12**, **U-1 … U-20** | AD-01C's and AD-01E's open items | **Not resolved.** **T-4 / T-5** (a claim's temporal reach) are reinforced by Example 4 and scenario 5 and should be answered with **V-15/V-16**. **T-6** → V-22, unchanged. **T-12** (§8.6's pending corrective note) now shares an editorial pass with **A-1** — neither is made here. |
| **M-2 … M-20** | Reconciliation blockers | **Not resolved.** Directly implicated and left to their owners: **M-3**, **M-5** (uniqueness boundary; still owns the Person anchor candidate), **M-7**, **M-8**, **M-9**, **M-14**. |

---

## 15. Impact on AD-01 through AD-01G

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Each row states what the V-2 and
> V-3 answers do to a prior position and why. **Where a prior document is confirmed, that is recorded
> as deliberately as where it is corrected.**

### 15.1 AD-01 — Lead State Machine

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01**, not a change to it. **AD-01 is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Section | Effect |
|---|---|
| §3 — the eight-concept separation and its test (*two concepts belong on one axis only if a record can never legitimately be in both at once*) | **CONFIRMED, and used as the decisive instrument in §5.2 and §7.2.** It returns the answer that **New/Follow-up and Success/Dump were never one axis**, because a record can legitimately be *actively worked* and *has converted* at once. |
| §5.1 — the four-value persisted lifecycle | **Vocabulary CONFIRMED; level and persistence CHALLENGED for all four values.** → **A-1**, requested of the Product Owner, **not made here.** |
| §6.1 — *Anything → New* forbidden | **MOOT rather than violated.** With *New* derived there is no persisted value to move back to, and §07's historical-integrity concern is untouched because nothing is rewritten. AD-01F **F-6** and AD-01G **G-8**, confirmed and extended. |
| §6.1 — `Dump → Follow-up` (conditional on Q5) and `Success → Follow-up` (conditional on Q6) | **Neither edge is ever required under H-4**, because a closed inquiry is never reopened — a new one opens beside it. **Q5 is NOT resolved and Q6 is NOT reopened**; this is a statement about what the model needs, not about what those questions decide. |
| §7 **E-04** (reassignment must not move the lifecycle) | **CONFIRMED and made unviolatable by construction** — there is no record-level lifecycle to move. |
| §7 **E-09** (*same Person, two projects = two leads*) | **Already SUPERSEDED IN SCOPE by AD-01G G-1/G-2.** Unchanged here: it remains true **of the inquiry** and untrue of the work record. **Not edited.** |
| §7 **E-13** (commission keys on the resolved claim, not on lead state) / **E-16** (unit transfer must not touch lead state) | **CONFIRMED and strengthened** — under H-4 the commission engine reads no record-level value at all (§12 row 5). |
| §8.3 — durable business-level state history outliving **R6**'s window | **CONFIRMED and extended by H-9**: each entry must additionally record **which inquiry** it concerns. |
| §9.1 — funnel keyed on the lead's current state | **Must be re-keyed to the inquiry — direction forced, decision NOT made.** → **V-17**, a source-of-truth change (§88 MUST-ASK). |
| §9.1's *Worked* (*"leads that have ever left New"*) | **CONFIRMED as prior art for H-5**: the product already computes one of the three *New* predicates rather than trusting a stored value. |
| §9.6 — what must not be promised as a chart | **CONFIRMED and widened** (§10.3). |
| Everything else | **Unchanged and still NOT APPROVED FOR IMPLEMENTATION.** |

### 15.2 AD-01A — the §8 Product-Owner decisions

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01A**, not a change to it. **AD-01A is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| §8.1 — four values; *Pending* rejected; Today/Future/Overdue derived | **Vocabulary CONFIRMED. *Pending*'s rejection CONFIRMED and untouched. Today/Future/Overdue CONFIRMED and made more consistent.** **Level and persistence require amendment → A-1, named not made.** **Q1 is NOT reopened.** |
| §8.2 — Success = §20 Stage 3; Booking's lifecycle separate; cancellation never rewrites Success | **CONFIRMED and STRENGTHENED. Q4 NOT REOPENED.** H-8 is §8.2's own instruction followed to its conclusion. |
| §8.3 — three-dimension Dump framework; mandatory, preserved reason | **CONFIRMED, NOT AMENDED, and made EXCEPTION-FREE** by relocating the commercial closure to the inquiry, where one closure has one preserved reason without collision (§7.2, scenario 3). |
| §8.4 — sync ≠ verification | **CONFIRMED. Untouched.** The verification/conflict gate remains a record-and-origin question, unaffected by where lifecycle sits. |
| §8.5 — no persisted assignment axis | **CONFIRMED. No axis is reintroduced at either level, and no reassignment-approval workflow is invented** (§11.1). |
| §8.6 — the Orthogonal Lead Model | **The orthogonality is CONFIRMED and the framing is VINDICATED — this is the model absorbing exactly the kind of change it was built to absorb.** **Its first bullet — *"Lead Lifecycle (persisted — four values)"* — is the item A-1 amends**, to *"Inquiry commercial disposition (persisted, per inquiry)"* plus *"work-record condition (derived)"*. **Every other bullet is unchanged.** **Not edited here.** |
| §3.6 — *do not record what the system can compute* | **CONFIRMED and applied as the decisive argument against Model C** (§4.2). |
| §5.2 — the objection that eliminated the persisted assignment axis | **CONFIRMED and reused**, for the third time in this line (after AD-01G G-9's custody interval). |
| §1.7 / **N-2** | **Untouched in substance and NOT narrowed.** Its subject remains record-level. One consequence recorded: **under Y-1 = yes it acquires a cardinality question.** |

### 15.3 AD-01B — Dependency and ordering

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01B**, not a change to it. **AD-01B is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| §4's rework-asymmetry standard | **CONFIRMED as the correct standard and applied twice** — to V-2's CE half (§2.4) and to §11.3's unrecordable management act. |
| §7.1 — the *Blocked* contradiction | **Unchanged. NOT resolved, NOT narrowed, NOT reopened.** AD-01C §1.2's clarification stands exactly as recorded. |
| §7.2 — mandatory Dump reason versus legacy import | **Unchanged; relocated in subject.** The tension is now between the mandatory reason **on an inquiry** and an import that has no inquiry-level history. **Recorded, not resolved; N-4 and Q3 still own it.** |
| The graph's root | **AD-01G §17 named V-3-with-V-2 as the root. This document is that step. The new root is named in §16.** |

### 15.4 AD-01C — Terminality (Q5 · Q6)

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01C**, not a change to it. **AD-01C is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| §1.2 — the *Blocked* clarification | **CONFIRMED and untouched. N-2 not resolved.** |
| §2.5 — Dump's strict terminality | **CONFIRMED and relocated to the level at which it is true without exception.** At the record level it has always required an exception (the fresher case falsifies it); at the inquiry level it needs none. **Relocation strengthens it.** |
| §2.2's twelve dimensions | **Transfer intact with *inquiry* substituted, as AD-01G §16.4 established. D5** (source), **D6** (attribution) and **D3** (project corruption, neutralised by append-never-overwrite) are all confirmed by the concurrent-interest scenarios. |
| §3.2 — the CP-financial safety property | **CONFIRMED and STRENGTHENED** (§12 row 5). |
| §3.4 — *a correction is not a re-engagement, and a re-engagement is not a correction* | **CONFIRMED**, with AD-01F §12.4's third act (redistribution) upheld and **not carried further**. |
| §3.7 — **Q6** | **UNTOUCHED, CONFIRMED and STRENGTHENED. NOT REOPENED. No Q6 decision requires revision.** Only **S4's subject** is restated, upholding AD-01G §13.1 and extending it to Example 4 and scenario 6. §8.3 records *why* the inquiry level strengthens Q6 rather than weakening it. |
| **T-4 / T-5** (a claim's temporal reach), **T-6** (who sets Success), **T-12** (§8.6's corrective note) | **Unchanged and not answered.** T-4/T-5 are reinforced by Example 4 and scenario 5. T-12 now shares an editorial pass with **A-1**. |

### 15.5 AD-01E — Re-engagement and controlled historical visibility

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01E**, not a change to it. **AD-01E is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| §3.3 — *"revival requires the episode to become first-class"*, and its **intactness** argument | **The requirement is UPHELD; the entity remains REJECTED** (H-10). **AD-01E's intactness argument is independently re-proved here by scenario 3** — one preserved-reason slot cannot hold two closures — and it is the argument that eliminates Model A, not merely naive revival. **AD-01E identified the constraint correctly.** |
| §4.3 — option (iii): *the bounded unit carries the lifecycle value* | **STRUCTURALLY VINDICATED.** H-4 is option (iii)'s shape with the **inquiry** as the bounded unit instead of the episode. AD-01E's structural instinct was right; its choice of unit was not. **Recorded as a confirmation, because a rejection that never credits what it borrows is not an honest rejection.** |
| §3.1 — *"necessarily scoped to same Person × same Project"* | **Already CONTRADICTED by AD-01G §16.5. Unchanged here.** **AD-01E is not edited.** |
| §6.1 — custody is the wrong kind of fact for entitlement | **CONFIRMED. Untouched.** |
| §6.3 — I1 ∪ I2 ∪ I3, fail-closed | **Untouched — V-7 is not reopened.** One note only: **if V-5 resolves toward the entitlement-scoped reading of *New*, this projection acquires a second consumer** (§5.6). |
| §6.8 — the inference channel | **CONFIRMED and given a new instance**: under H-4 the work-queue's derived condition is computed from inquiries the viewer may not be entitled to see. **Recorded; the surface question is V-9/V-10 and is not resolved.** |
| §11 **R2** (the episode's required properties) | **Every property is accounted for by the inquiry or the custody interval** (H-10). **No residue was found.** |
| **U-1 … U-20** | **None is decided here.** U-1 → V-14, still open. U-5/U-6 → V-18/V-17, still open. U-15 → V-16, still open. U-16 → required under Example 4's two-producer case. |

### 15.6 AD-01F — Lead / Client Business-Workflow Reconciliation

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01F**, not a change to it. **AD-01F is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| §5.5 — *New* is derivable, not persisted, scoped to (record × custody interval) | **CONFIRMED as to derivation and EXTENDED as to structure.** AD-01F identified **one** predicate at one scope; §6.4 finds **three**, all legitimate, all needed. **This is an extension of AD-01F's finding, not a correction of it.** |
| §6.1 — *"the observed single-status row is weak evidence for sequential"* | **REFINED, and this is a genuine evidential correction.** The same observed row carries *Project Name* **and** *Booked Project* as two columns, which is direct evidence of two coexisting project facts on one client row. **The row is evidence of a presentation choice, not of a data shape — it is not weak evidence for sequential; it is no evidence on the question at all** (§2.3). |
| §6.4 — the funnel must key on the interest | **CONFIRMED** and shown to be arithmetically forced by Examples 2 and 4, not merely preferable. **V-17 still not resolved.** |
| §7.2 — one timeline as a read model, several event classes in storage | **UPHELD without amendment and not re-argued**, and given a sharper proof (§9.2: a record-level lifecycle makes the timeline **false**, not merely untidy). |
| §10.2 — the three-way Dump decomposition (D-i · D-ii · D-iii) | **CONFIRMED without amendment**, and independently re-proved from scenario 3. |
| §10.3 — *"the gap is a missing control, not a missing dimension"* | **CONFIRMED and not extended.** |
| §10.4 — where each part of Dump lives | **ADOPTED as the answer to this task's Dump-level question** (H-6, H-7). |
| §11.3 — *"one of the strongest arguments that lifecycle must sit on the inquiry"* | **CONFIRMED, and completed.** AD-01F posed it as an argument; §3.2 and §4.1 make it the decisive one. |
| §11.4 — what Q6 needs restated, not reopened | **CONFIRMED and followed exactly.** |
| §12.4 — three acts with three reporting effects | **CONFIRMED and not extended.** |
| §13 — the fourteen-row reporting table | **UPHELD and not restated.** §10 adds only the three-counts finding and the inquiry→first-response elevation. |
| §16 **V-2**, **V-3** | **Answered — V-2 in part (CE resolved, CL referred as Y-1/Y-2), V-3 in full.** Every other V-item is explicitly left open (§14.2). |

### 15.7 AD-01G — Lead / Client Identity and History Visibility

> **⟦ARCHITECT ANALYSIS⟧** Every row below is an architect's finding about **AD-01G**, not a change to it. **AD-01G is not edited by this document.** Rows marked **CONFIRMED** are deliberate confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the reason.

| Item | Effect |
|---|---|
| **G-1, G-2** (Model B structurally; §06 extended not superseded) | **CONFIRMED as settled input and tested for sufficiency.** It survives every concurrent-interest scenario. |
| **G-4** (Sales Episode rejected, requirements re-homed) | **REJECTION STANDS. No gap found** (H-10). **Conditionality unchanged** — still conditional on G-1. |
| **G-5** (a new inquiry is not a new Lead and not necessarily a new opportunity) | **CONFIRMED.** Scenario 5 instantiates it; **V-14 remains open** and **T14's capture-time separability is upheld**. |
| **G-6, G-7** (V-7's boundary and mechanism) | **NOT reopened, NOT narrowed.** One dependency named (H-11). |
| **G-8** (read-time projection, never write-time mutation) | **CONFIRMED and extended from *New* to every derived condition** (§9.3). Its burden is **reduced** under H-4, because no persisted record-level value exists to be tempted into mutation. |
| **G-9** (custody interval derived, not an entity) | **CONFIRMED and reused** — it is the entity that absorbs the per-attempt work-context requirement in H-10. |
| **G-11** (Model D in the **AD-01G §3.1** sense — the Person-level derived view — must still be put to the owner) | **Unchanged and still open. Explicitly NOT answered by this document's Model D**, which is a different question at a different level (see the terminology warning). |
| **G-12** (Q4/Q6 preserved; Q6-S4's subject restated) | **CONFIRMED and EXTENDED** to Example 4 and scenario 6. |
| §4.1 — the work record's facets | **CONFIRMED, with one refinement (H-12)**: *one next-action commitment* is conditional on at most one live inquiry. **AD-01G is not edited.** |
| §13.1 — *"the one consequence that must be named"* (§8.1's four values attach to the inquiry, not the work record) | **This document is that consequence, worked out.** AD-01G requested the amendment; **A-1 names it precisely and still does not make it.** |
| §15.2's V-2 row (*"unchanged and now urgent"*) and V-3 row (*"widened from New to all four values… recommended as the next decision"*) | **Both discharged to the extent this task permits.** |
| §17 — *"take V-3 next, together with V-2, and with nothing else"* | **Correct, and followed. This document is that step.** |

---

## 16. Recommended next architecture decision

> ### **V-11 + V-12 — what Dump's two controls actually are in the user's hands, and whether management-initiated redistribution is a recorded act — answered together, and with V-4 in the same sitting if capacity allows.**
>
> **⟦ARCHITECT RECOMMENDATION — sequence only⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL.)* **This is a recommendation about *sequence and subject*. No answer to
> V-11, V-12 or V-4 is proposed, implied or preferred here, and none is resolved by this document.**

> **⟦ARCHITECT ANALYSIS⟧ Why V-11/V-12, and why together.**

1. **It is the last question in this line that can still change the model's *shape* rather than its
   parameters.** After V-1, V-7, V-2 and V-3, everything else — the funnel key (**V-17**), the
   attribution anchor (**V-16**), *New*'s scope (**V-5**), §08 scoping (**V-24**), the response
   vocabulary (**V-19**) — is a *parameter* of where things sit. **V-12 asks whether the work record
   needs a persisted management input at all**, which is the one remaining thing H-4 leaves derived
   with a hole in it (§11.3).
2. **The hole is concrete, described by the Product Owner, and still not performable.** P-15's
   redistribution is a routine operation. H-4 makes it **expressible** and stops there. Until V-12
   answers, a fresher receives a record with nothing telling the system that work is owed.
3. **The rework asymmetry runs one way and is severe.** A management act performed as a bare
   reassignment, with no recorded decision, is **indistinguishable afterwards** from an ordinary
   transfer — and the distinction between a *re-attempt* and a *new capture* (**V-18**, AD-01F §12.4)
   is then permanently unrecoverable, corrupting closed-period conversion reporting. This is AD-01B
   §4's standard and AD-01G G-9's *unrecoverable-if-not-recorded-at-the-moment* discipline, applied
   to the one act that has neither.
4. **V-11's control half is now the only undecided part of a question whose *placement* half is
   answered.** H-6 says Dump validly exists at both levels with two meanings; **which one a rep is
   performing when they tap the button is not answered**, and §95's *minimum necessary friction*
   makes an ambiguous one-tap terminal control exactly the wrong thing to leave implicit.
5. **It does not depend on Y-1.** It can be taken whether or not concurrent liveness is resolved.

**The cheap companion: V-4.** *What does *qualifying* mean for a user follow-up?* It is one question,
it has no prerequisites, and it **gates all three *New* predicates, FUT, every first-response variant,
W-1 and W-4** — all of which **must share one answer or they will silently disagree** (AD-01F V-4,
confirmed and widened here). **If two questions can be taken, take V-11/V-12 and V-4.**

**Also put to the owner in the same sitting, because each costs one question and each is currently
being decided by default:** **Y-1** and **Y-2** (this document's own open half of V-2), **Y-4**
(does a Success change the record's queue behaviour), and **Y-5** (which unit *"leads"* means in
reporting).

**Explicitly NOT recommended next: V-16 (the attribution and commission anchor).** It carries the most
money and the most inbound edges — Y-1, V-14, V-15, M-5, T-4, T-5. This document supplies it with new
evidence (Example 4) and deliberately does not answer it. **This is the same judgement AD-01F §18 and
AD-01G §17 made, for the same reason, and it is unchanged.**

**Also explicitly NOT recommended next: V-17 (the funnel re-key).** Its *direction* is forced by H-4
and H-8, which makes it low-optionality and therefore a poor use of a decision sitting — but it is
**not therefore decided**, and it must still be approved explicitly as the source-of-truth change it
is.

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype, no
"temporary" lifecycle column on either entity, and no scaffolding of a disposition anywhere.
Consolidated **§30** states it: *"No schema/code implementation should be inferred from an unresolved
product ambiguity."* **The Lead / Client architecture is unresolved until the project owner approves
in writing.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED**

**NOT APPROVED FOR IMPLEMENTATION.**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. **No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it.** No UI, visual, layout or interaction design is proposed
anywhere, and the Product Owner's screenshots — reached only through the workflow facts recorded in
AD-01F §1.2 and consolidated requirements §12 — have been used **strictly as workflow and
information-model evidence**, per consolidated requirements §1, §24 and §26.

**None of AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F or AD-01G is modified by this document.**
Where this analysis contradicts, corrects, refines or completes a prior position — AD-01A §8.1's and
§8.6's *level and persistence* of the four values (**A-1**, named not made); AD-01F §6.1's evidential
reading of the observed single-status queue row; AD-01F §5.5's single *New* predicate, extended to
three; AD-01G §4.1's *one next-action commitment* facet, refined as conditional on single liveness —
**that is stated explicitly, with the document and section named and the reason given, and the prior
file is left exactly as it stands.**

In particular: **AD-01A §8's recorded Product-Owner decisions are treated as binding input
throughout**; **Q4 is NOT reopened**; **Q6 is CONFIRMED and STRENGTHENED and requires no revision**,
with only S4's subject restated as AD-01G already proposed; **Q1's vocabulary decision, its rejection
of *Pending*, and its Today/Future/Overdue derivation are NOT reopened**; **Q5 is NOT resolved**;
**V-7 is NOT reopened, NOT re-argued and NOT narrowed** — one dependency on it is named and nothing
more; **N-2 is NOT resolved and NOT narrowed**; **Dump semantics are NOT finalised** — only the level
question the task posed is answered; **the Sales Episode rejection stands with its conditionality
unchanged**; and blockers **M-2 … M-20** are not resolved. **Every V-item other than V-2 and V-3, and
every W-item, remains open exactly as AD-01F and AD-01G left it**, and the five new items **Y-1 … Y-5**
are raised, not answered.

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column —
canonical entities, relationships, source-of-truth rules, CP commission logic and audit requirements
are all engaged. Per AD-01A §7, **delegation to an architect is not authorization**, and a
Product-Owner preference recorded as evidence is not an approved architecture. The analysis above is
offered so that it can be attacked on its merits rather than deferred to.

**Nothing here is implemented, and no prior document is modified, until the project owner approves in
writing.** Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: PROPOSED — NOT APPROVED**
