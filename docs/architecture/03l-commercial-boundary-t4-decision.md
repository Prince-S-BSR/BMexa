STATUS: PROPOSED — NOT APPROVED

# AD-01L — The Commercial Boundary: AD-01C's T-4, resolved to its architectural floor

**Subject:** AD-01C **T-4** — *CP registration reach after a lost episode* — taken at the subject AD-01J
relocated it to (**Inquiry → Inquiry**), under AD-01J's **C-I … C-IV** and AD-01K's **C-V … C-VII**, with
AD-01K's **K-22** treated as input and AD-01K's **P-α … P-δ** treated as the remaining decision.

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K.

---

## How to read this document

**Every substantive claim carries one of five labels, and the labels are distributed throughout rather
than collected in one section:**

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | A decision the project owner has already made and which is treated as fixed input. Not re-argued. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, and not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the project owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

**Findings are numbered `L-n`.** New architectural constraints continue the `C` series as **C-VIII,
C-IX, C-X**. Amendments to prior documents that are *logically required but NOT made here* continue
AD-01K's `A` series as **A-9, A-10, A-11**. One new open item is minted as **AC-1**, continuing past
AD-01K's `AB` series.

**Scope discipline, stated once and honoured throughout.** No SQL, schema, migration, master value,
column, table or type appears anywhere. No UI or UX is designed. **No commission formula, rate, slab,
percentage, amount, milestone value, clawback quantum or TDS treatment appears anywhere** — **M-9** owns
all of it. **Q1, Q4, Q5, Q6, Q7, V-1, V-2, V-3, V-11, V-12 and AD-01K's K-18 attribution recommendation
are NOT reopened, NOT narrowed and NOT re-argued.** **T-5 is NOT reopened** — AD-01K's **K-26** is
preserved exactly and referenced only. **AD-01K's AB-1, AB-2 and AB-3 are NOT resolved and carry forward
unchanged** ([§14](#14-business-decisions-required)).

---

## 1. Exact T-4 source wording

> ⟦SOURCE⟧ **`docs/architecture/03c-lead-state-machine-terminality-decision.md` §6, open-questions
> register — the row in which T-4 is defined, quoted verbatim including its two trailing columns:**
>
> > | **T-4** | **CP registration reach after a lost episode.** Does a CP's claim on a Dumped lead reach a later, separately-sourced episode for the same Person? Spec silent (§11, §32, §40). | Q5-B, D6 | M-5 + CP commission model (M-9) |
>
> The table's own column headers are **`# | Open item | Arises from | Likely owner`**, and §6's preamble
> reads: *"**None is resolved here. Per Rule 1 and §97, none is guessed.** Numbered **T-n** to avoid
> collision with the existing Q / N / M / E / D / X namespaces."*

> ⟦SOURCE⟧ **AD-01C §5, Rule-1 silence register, the row that records T-4's evidentiary status,
> verbatim:**
>
> > | Temporal reach of a CP attribution claim across a closure (T-4) or across a completed purchase (T-5) | **Never addressed** — §11, §32, §40, §41 are silent. | Left open. §2.2 D6 notes that Alternative A would have answered it **by accident**, which is itself a reason to reject A. |

> ⟦SOURCE⟧ **AD-01C §2.2 D6 — the passage in which T-4 is first raised in prose, quoted verbatim and in
> full, because AD-01K cited it in abridged form and two of its clauses are load-bearing below:**
>
> > *"**Honest cost to B, and it is a real commercial exposure.** If a CP registers a prospect, the lead
> > is Dumped, and the same prospect returns direct three months later, B creates a successor lead with
> > no CP claim — and the CP will argue their introduction produced the sale. That dispute is genuine.*
> >
> > ***But A's apparent advantage here is a trap, and this is worth stating plainly.** Under A the
> > original claim persisting is not a* decision *the business made — it is a policy **silently created
> > by the data model**: "a CP claim reaches forward indefinitely across a closure." Nothing in §11, §32,
> > §40 or §33 says that, and inventing it would breach **Rule 1** and §88's prohibition on inventing
> > business rules. A's advantage is therefore that it answers an unasked question by accident. B leaves
> > the question visibly open, which is the correct posture for a question the owner has never been asked
> > (see T-4)."*

> ⟦ARCHITECT ANALYSIS⟧ **L-1 — four things are true of that original wording. AD-01K's K-19 named three;
> the fourth is named here for the first time and it is the one that determines this document's shape.**
>
> | # | Property of T-4's wording | Status |
> |---|---|---|
> | (i) | It is stated in **Q5-B's Lead→Lead vocabulary** (*"a Dumped **lead**"*, *"a later … **episode**"*). AD-01J **J-29** relocated the subject to **Inquiry → Inquiry**; the relocation is **A-3**, named by AD-01J and **still not made** in AD-01C. | **AD-01K K-19 (i). Adopted as input. A-3 is NOT made here either.** |
| (ii) | It carries the qualifier ***"separately-sourced."*** T-4 is not asking about a CP who *produces* the later engagement — that is an ordinary new claim (**K-14**). | **AD-01K K-19 (ii). Adopted as input.** |
| (iii) | It is stated as a **binary** (*"does … reach"*), and AD-01J **J-9** showed no binary answer survives Case 4 against Case 5. | **AD-01K K-19 (iii). Adopted as input.** |
| (iv) | **The verb *"reach"* is a spatial metaphor with no referent in the recommended model, and AD-01C §2.2 D6 already said so in its own words.** D6 does not describe a claim *travelling*; it describes *"the original claim **persisting**"* and calls that **a policy silently created by the data model** — i.e. an artefact of the Lead-level anchor AD-01C was rejecting. **Under the Inquiry anchor (K-18) nothing persists across the boundary and nothing can travel across it. There is no reaching.** | **NEW — L-1 (iv). See [§3](#3-t-4-analysis).** |

> ⟦ARCHITECT ANALYSIS⟧ **Why (iv) matters and is not wordplay.** Every formulation of T-4 from AD-01C
> through AD-01K asks whether *a claim* crosses a boundary. AD-01K's own **C-VII** then establishes that
> **it never can** — *"cross-engagement reach can only CREATE A NEW, DERIVED CLAIM on the later Inquiry
> … It can never be the earlier claim itself extending, moving or being re-scoped."* **C-VII is
> therefore not a constraint on T-4's answer; it is a correction of T-4's question.** This document takes
> that correction to its conclusion in [§3.2](#32-the-boundary-restated-at-the-only-shape-it-can-have).

---

## 2. Product Owner direction already approved

> ⟦PRODUCT-OWNER DECISION⟧ **Recorded first, before any analysis, so the analysis can be checked against
> it rather than substituted for it. Nothing in this section is the architect's. Item numbers `PO-n` are
> AD-01K §1's and are reused unchanged so the two documents can be read side by side.**

### 2.1 From the Master Spec and the consolidated requirements

| # | Source | Statement |
|---|---|---|
| **PO-1** | ⟦SOURCE⟧ Spec **§11** | *"Clash detection is a **core business control**. If multiple sources/CPs claim **the same prospective customer**: record **each** attribution claim, **preserve history**, do not expose sensitive competing claims unnecessarily. **Builder-side authorized leadership resolves attribution.** Sales Reps should not automatically see sensitive clash information **that could influence or manipulate attribution**. The UI visibility rule must be enforced by authorization—not merely by hiding a badge."* |
| **PO-5** | ⟦SOURCE⟧ Spec **§12** | *"a device cannot perform a reliable server-wide duplicate/clash check while disconnected. Therefore offline lead creation must be treated as **PENDING SYNCHRONIZATION**. After connectivity returns: synchronize safely, perform duplicate/clash detection, update the lead state, notify the appropriate authorized person if a conflict is found. **Never pretend an offline lead has passed the server-side clash gate.**"* |
| **PO-6** | ⟦SOURCE⟧ Spec **§32** | *"The CP workflow must support: commission/brokerage entitlement, **milestone-based eligibility**, invoice submission when eligible, Accounts review, payout, TDS information, reversal/clawback where legitimately applicable. **The exact legal/tax treatment must be validated separately.**"* |
| **PO-7** | ⟦SOURCE⟧ Spec **§40** | *"Once **the business condition** is satisfied, invoice submission becomes available. **The UI lock must correspond to server-side authorization.**"* |
| **PO-8** | ⟦SOURCE⟧ Consolidated **§22** | *"Booking, demand, receipt, receipt allocation, ledger and **commission are distinct financial concepts** … **CP commission accrual and payout are separate.** … Clawbacks can result in negative balances and future offsets where valid."* |
| **PO-9** | ⟦SOURCE⟧ Spec **§33** | *"If a legitimate cancellation creates a recoverable CP overpayment: the CP ledger may become negative … However: **UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS.**"* |
| **PO-13** | ⟦SOURCE⟧ Spec **§39** | *"The CP should be able to see relevant **lead information, attribution information, pipeline status, commission status, eligibility, invoice status.** Do not expose Builder-internal sensitive information."* |
| **PO-21** | ⟦SOURCE⟧ Spec **§07**, **§06** | *"A Person can have multiple leads, interact with multiple projects, become a customer, be an **applicant/co-applicant**, have historical relationships. **Do not destroy historical identity when status changes.**"* |
| **PO-22** | ⟦SOURCE⟧ Consolidated **§30**; Spec **§88**, **§86**, **§95**, **§97** | *"**No schema/code implementation should be inferred from an unresolved product ambiguity.**"* Canonical entities, relationships, **financial rules** and **CP commission logic** are **MUST ASK BEFORE DECIDING**. **Inventing business rules is MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION.** *"When in doubt, **STOP AND ASK**."* |
| **PO-23** | ⟦SOURCE⟧ Consolidated **§7** | *"A client was originally handled by Employee A, followed up and later dumped. **A manager may redistribute dumped/non-responding leads to a fresher for another calling attempt.** If the client later regenerates an inquiry, the same underlying client/lead history may remain connected … **exact revival semantics, episode boundaries and the difference between 'same Lead re-engagement' versus 'genuinely new commercial opportunity' remain an architecture/product decision to be settled explicitly.**"* |
| **PO-24** | ⟦SOURCE⟧ Consolidated **§15**; Spec **§13** | Dump/disposition: *"Select an appropriate response/disposition reason … The lead becomes non-active in the relevant sales workflow."* Spec §13: *"Where safe, use prefilled values, quick actions, **one-tap dispositions**, contextual actions. But do not remove confirmations that are necessary for data integrity."* |
| **PO-25** | ⟦SOURCE⟧ `ENGINEERING_RULES.md` **R6** | *"The audit log records discrete domain events in business language … **It is never updated and never deleted.**"* **R4**: reasons are **master rows**, never enums. **R12**: every decision must trace to this repository's own documents. **R1** governs tenant isolation and is not at issue here; **Spec Rule 1** (*"Do not invent requirements"*) is. |

### 2.2 Decisions treated as fixed input and not reopened anywhere below

| # | Decision | Status here |
|---|---|---|
| **Q1** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.1 — four-value lifecycle vocabulary; ***Pending* rejected as a fifth value.** | **Fixed input. NOT reopened.** Relied on in [§5](#5-inquiry-lifecycle-implications). |
| **Q4 / PO-18** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.2; consolidated §14 — **Success = the approved Booked / §20 Stage 3 milestone.** Booking has its own lifecycle; the Lead Lifecycle must not absorb Booking states. | **Fixed input. NOT reopened.** |
| **Q6 / PO-19** | ⟦PRODUCT-OWNER DECISION⟧ AD-01C §3.7 — **no ordinary backward transition out of Success; a valid Success stays historically true even after downstream Booking cancellation; an incorrectly recorded Success is corrected only through an audited, explicitly authorized, appended correction mechanism; a genuinely new opportunity creates a new business unit.** | **Fixed input. NOT reopened, NOT narrowed, NOT tested.** Protected by **C-II** throughout. |
| **Q7** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.3 — the **three-dimension Dump-reason framework** (A: opportunity validity class · B: responsibility locus · C: recoverability posture); a terminal non-conversion disposition **must carry a reason**; the historical reason is **preserved**, never silently rewritten; **values are NOT approved**. | **Fixed input. CONFIRMED a fourth time, from a fourth direction ([§3.3](#33-k-22-confirmed-from-a-second-direction-and-generalised)). No dimension added. No value proposed. N-4 owns every value.** |
| **Q5** | ⟦PRODUCT-OWNER DECISION⟧ Superseded by **AD-01E**. | **NOT reopened.** |
| **V-1** | ⟦PRODUCT-OWNER DECISION⟧ AD-01G — **Lead = the work record; Inquiry = the commercial unit.** | **Approved. NOT reopened.** |
| **V-2 / V-3** | ⟦PRODUCT-OWNER DECISION⟧ AD-01H — concurrent inquiry existence is valid; **lifecycle is Inquiry-level (Model D, H-4)**. | **Approved. NOT reopened.** |
| **V-11 / V-12** | ⟦PRODUCT-OWNER DECISION⟧ AD-01I — **Dump decomposes** into an Inquiry-level persisted commercial disposition and a record-level derived work condition; **redistribution is a work operation that never creates an Inquiry and never changes attribution.** | **Approved. NOT reopened, NOT redefined.** Only its *relationship to T-4* is analysed ([§6](#6-dumpdischarge-implications)). |
| **K-18** | ⟦ARCHITECT RECOMMENDATION, AD-01K⟧ The attribution claim attaches to **the Inquiry**, and nothing else. | **Adopted as the working hypothesis of this document. NOT reopened, NOT re-derived.** |
| **K-22** | ⟦ARCHITECT RECOMMENDATION, AD-01K⟧ Where the prior closure is classified under **Q7 Dimension A** as **invalid / non-opportunity**, the claim has **no reach**. | **Adopted, CONFIRMED from a second independent direction, and GENERALISED ([§3.3](#33-k-22-confirmed-from-a-second-direction-and-generalised)).** |
| **K-26** | ⟦ARCHITECT RECOMMENDATION, AD-01K⟧ **T-5: NO REACH across a fully discharged claim.** | **PRESERVED EXACTLY. NOT reopened, NOT re-derived, NOT challenged.** Referenced only where T-4 depends on it ([§6.4](#64-the-one-place-t-4-depends-on-t-5-and-it-is-a-dependency-not-a-reopening)). |
| **C-I … C-IV** | ⟦ARCHITECT RECOMMENDATION, AD-01J J-31⟧ | **Adopted unchanged.** |
| **C-V … C-VII** | ⟦ARCHITECT RECOMMENDATION, AD-01K K-20⟧ | **Adopted, with one timing refinement named and NOT made (A-11, [§3.6](#36-c-vis-timing-cannot-hold-for-an-offline-originated-inquiry))**. |
| **AB-1 / AB-2 / AB-3** | ⟦BUSINESS DECISION REQUIRED, AD-01K §16.1⟧ Booking-Group entitlement · unit-transfer entitlement identity · sub-agent payee. | **NOT resolved. T-4 does not require any of them to reach a conclusion. They carry forward unchanged** ([§14.3](#143-items-carried-forward-unchanged)). |

---

## 3. T-4 analysis

### 3.1 What T-4 is, restated at its correct subject

> ⟦ARCHITECT ANALYSIS⟧ **L-2 — assembling the three relocations already made, T-4's question in the
> current model reads as follows. This is not a new question; it is the registered one with its
> vocabulary corrected.**
>
> > **A Person holds a work record. An Inquiry on that record reached a terminal, non-converting outcome
> > carrying a classified, preserved Q7 reason. At some later date a *separately-sourced* customer-
> > generated commercial event originates a NEW Inquiry on the same record. The producer recorded on the
> > closed Inquiry's resolved claim did not produce that later event. The later Inquiry converts.**
> >
> > **Is the earlier producer entitled to anything in respect of that conversion — and if so, by what
> > object, created when, adjudicated by whom?**
>
> **Three substitutions have been made against AD-01C's text, all of them already established and none
> of them this document's:** *lead* → *work record and Inquiry* (**V-1**, **G-1**); *episode* → *Inquiry*
> (**J-29**, **A-3**, not made); *"Dumped lead"* → *"Inquiry with a terminal closure carrying a Q7
> classified reason"* (**H-4**, **V-11**, AD-01A **§8.3**).

### 3.2 The boundary, restated at the only shape it can have

> ⟦ARCHITECT RECOMMENDATION — L-3, the commercial boundary⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK:
> relationships, source-of-truth rules, CP commission logic.)*
>
> **The commercial boundary in the BMexa model is the terminal boundary of the Inquiry (J-30,
> CONFIRMED), and it has exactly two halves, which have been conflated in every prior statement of
> T-4:**
>
> | Half | Statement | Status |
> |---|---|---|
> | **B-1 — the claim boundary: CLOSED, absolutely, in every branch** | **No claim, resolved attribution, entitlement, adjudication, source, campaign, channel, priority or disposition recorded on a terminal Inquiry has any effect whatsoever on any other Inquiry.** Nothing crosses. Nothing persists. Nothing extends. | **ARCHITECTURE, not policy. Entailed by C-II + C-VII + K-17 + `01-bmexa-architecture-reconciliation.md` §D.4 (*"claims are never overwritten by a later claim"*) + R6. NOT the owner's to set** — an owner who wished to set it otherwise would be amending R6 and §D.4, not answering T-4. |
| **B-2 — the citation relation: the ONLY thing T-4 actually governs** | **Whether the system may, at the origination of a later Inquiry, MINT A NEW CLAIM on that later Inquiry, naming the earlier producer, and carrying as its stated ground a citation of a determinate earlier Inquiry.** | **`BUSINESS DECISION REQUIRED`** — narrowed here by **K-22** (generalised, §3.3), **C-VIII** (§3.4), **C-IX** (§3.5) and **C-X** (§3.7), and bound by **C-I … C-VII**. |
>
> **This is the exact commercial boundary this document recommends: *closed to claims, open only to
> citation.*** The recommendation is that the owner be asked B-2 and **only** B-2, in those terms.

> ⟦ARCHITECT ANALYSIS⟧ **L-4 — why the reframe is worth the owner's attention rather than being an
> architect's tidiness.** Three consequences follow immediately and none of them is available while T-4
> is phrased as *"does a claim reach."*
>
> 1. **No answer to T-4 can ever alter a closed Inquiry.** Under B-1 there is nothing to alter. **Q6 and
>    the preserved Q7 reason are not merely *protected* by C-II — they are untouchable by construction.**
> 2. **Every branch of T-4 is a statement about what the system MAY CREATE, never about what it may
>    read.** A "yes" is a licence to mint a fact; a "no" is a refusal to mint one. **A refusal to mint
>    costs nothing structurally** — which is why [§13](#13-architect-recommendation) can recommend a
>    build posture without recommending a policy.
> 3. **It makes the invalid-class branch trivially true rather than argued.** See §3.3.

### 3.3 K-22 confirmed from a second direction, and generalised

> ⟦ARCHITECT ANALYSIS⟧ **L-5 — AD-01K's K-22 is correct, and there is a second, independent derivation
> of it that AD-01K did not run. The second derivation is stronger in one specific respect: it does not
> depend on N-4.**
>
> **AD-01K's derivation (K-22, via AD-01J's J-9 and J-8):** an argument that rejects uniform-yes
> *because* of the outcome it produces on the Wrong-Number case has asserted that case's correct answer;
> and a Dimension-A *invalid* closure *"asserts that there was no engagement"* (J-8), so a claim whose own
> subject the business has classified as not having existed cannot be credited with a sale.
>
> **The second derivation, from C-III rather than from J-9:** **C-III** requires that a reaching claim
> name **which prior Inquiry** it succeeds — a **determinate predecessor**. Under B-2 the minted claim
> carries a **citation** whose content is *"this claim's ground is that engagement."* **A Dimension-A
> invalid closure is a determinate statement that there was no such engagement.** The citation would
> therefore have to assert, in one appended fact, both that the ground exists and that the business has
> classified it as not existing. **That is not a policy the owner may or may not adopt; it is a fact the
> model cannot record coherently.** **C-III is not satisfied by an invalid closure — it is contradicted
> by one.**

> ⟦ARCHITECT RECOMMENDATION — L-6, K-22 generalised from a value to a side of the dimension⟧
> *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** §88 MUST-ASK: CP commission
> logic. **No Dimension-A value is proposed, named, ranked or implied. N-4 owns every value.**)*
>
> **No-reach attaches to the INVALID SIDE OF DIMENSION A as a class — to whatever values N-4 eventually
> places on that side — and not to a particular value called *invalid*.**
>
> **Why this matters and is not a restatement.** AD-01K recorded that *"N-4 gates T-4's answerability"*
> and that **K-22 is conditional on the classification existing.** Under the C-III derivation, K-22's
> negative side is fixed by **what Dimension A means** — the dimension AD-01A §8.3 already approved —
> rather than by which values populate it. **Therefore:**
>
> | | Gated on N-4? |
> |---|---|
> | **K-22's negative side** — closures on the invalid side of Dimension A admit no citation | **NO.** Entailed by the dimension's meaning (**J-8**) and by **C-III**. Answerable today. |
> | **P-α's positive side** — which of the *valid-but-failed* classes admit citation | **YES, fully.** No value exists to map. **N-4 remains squarely on T-4's critical path** — the fifth document to find it blocking downstream work. |
>
> **This narrows T-4's dependency on N-4; it does not remove it.** **AD-01A §8.3 is CONFIRMED and NOT
> amended. Q7 is not reopened. No fourth dimension is proposed — AD-01I's Z-5 remains open and untouched.**

> ⟦ARCHITECT ANALYSIS⟧ **L-7 — Dimension B is equally available as an input to P-α, and no prior document
> has said so.** AD-01J's **C-I** names **Dimension A** *"(and optionally Dimension C)"*. **Dimension B —
> responsibility locus — is a third approved input and is at least as relevant to a reach question as
> recoverability posture**, since *"the closure was builder-side"* and *"the closure was customer-side"*
> are commercially different facts about a producer's contribution. **This is recorded as an available
> input and NOT as a recommendation to use it. Using any of A, B or C, and how, is P-α and is the
> owner's.**

### 3.4 C-VIII — if a horizon exists, its measurement base is not a free choice

> ⟦ARCHITECT RECOMMENDATION — L-8, constraint C-VIII⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** **No duration, threshold, window or number is proposed here or anywhere
> below** — **AD-01E U-4** is CONFIRMED: no dormancy threshold exists anywhere in the sources.)*
>
> **C-VIII — If the owner bounds citation by elapsed time (P-γ), the interval must be measured from the
> CITED PREDECESSOR INQUIRY'S OWN TERMINAL CLOSURE EVENT, and from nothing else.**
>
> **AD-01K's P-γ offers three candidate measurement bases. Two are eliminated, and the elimination is
> architecture rather than preference:**
>
> | Candidate base (AD-01K §4.5, P-γ) | Verdict | Why |
> |---|---|---|
> | **Closure date of the predecessor Inquiry** | **The only admissible base** | It is **Inquiry-owned**, **immutable** (**R6**, AD-01A **§8.3**'s preserved reason), **determinate** (**C-III**), and **already required to exist** by the approved Q7 framework. Two Inquiries originated on the same day against the same predecessor get the same answer. |
| **Last contact** | **ELIMINATED** | *Contact* is a **work-record activity** (AD-01H **H-9**; **W-1** open). An outbound call by a Sales Rep is a **management/work act**. Measuring a commercial entitlement window from it means **a work act extends a commercial claim's life** — precisely what AD-01I **I-6/I-7** and AD-01J **J-16** establish must be structurally impossible. It also makes the window **non-determinate at origination**, breaking **C-VI**: the same later Inquiry would fall inside or outside the window depending on whether a rep happened to dial. |
| **Last customer-generated event** | **ELIMINATED, in both readings** | If the customer-generated event **is an expression of interest**, it has already originated an Inquiry under **J-2** — so the base collapses into *"the closure date of a nearer predecessor"* and adds nothing. If it is **not** an expression of interest (a returned call, a site-visit attendance logged against an existing engagement), it is a **work-record timeline fact** with the same defect as *last contact*. |
>
> **What C-VIII does NOT do.** It does not say a horizon should exist. **P-γ's existence and its number
> remain entirely the owner's, and `AD-01E U-4` is not weakened**: if the owner wants a horizon, they
> supply it. C-VIII says only that whatever number is supplied is measured from an immutable,
> Inquiry-owned event — **which is also the only base under which C-VI's origination-time determination
> is computable at all.**

### 3.5 C-IX — P-δ is not a free three-way choice

> ⟦ARCHITECT RECOMMENDATION — L-9, constraint C-IX⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** §88 MUST-ASK: **authorization rules** — note the matrix column, which is not the one
> P-δ was filed under. **No workflow, screen, approval step or adjudication procedure is proposed** —
> AD-01A §8.5 and PO-1 both forbid it.)*
>
> **C-IX — A minted citation claim and the producing party's own filed claim are, by PO-1's literal
> terms, two CPs claiming one engagement. P-δ's *supersede* and *rank-below* branches, IF BINDING,
> resolve that contest by rule. §11 reserves resolution to builder-side authorized leadership.
> Therefore P-δ is not a free three-way commission-policy setting: two of its three branches are a
> change to §11's authorization reservation, and must be approved as one.**
>
> **The derivation, stated so it can be attacked:**
>
> 1. ⟦SOURCE⟧ **PO-1 / §11:** *"If multiple sources/CPs claim the same prospective customer: **record
>    each** attribution claim, preserve history … **Builder-side authorized leadership resolves
>    attribution.**"*
> 2. The new producer **filed a registration** on the later Inquiry. Under PO-1 their claim **must be
>    recorded**; a *supersede* rule cannot suppress its recording, only its outcome.
> 3. A minted citation claim is **also recorded on that Inquiry** (**C-V**). **Two recorded claims, one
>    Inquiry — the literal §11 predicate, and AD-01K's K-52 already scopes clash to exactly this.**
> 4. **Supersede** = the system decides the earlier producer wins. **Rank below** = the system decides
>    the later producer wins. **Both are a resolution, performed by a rule, at origination.**
> 5. **Contest** = both claims recorded, neither resolved by rule, routed to authorized leadership.
>    **This is the only branch that leaves §11's reservation intact.**
>
> **What C-IX does NOT do.** It does **not** set P-δ, and it does **not** say leadership's decision
> cannot be *guided* by a recorded policy. A non-binding precedence policy that leadership applies is a
> governance artefact, not a systemic resolution, and C-IX does not reach it. **C-IX says only this: if
> the owner chooses supersede or rank-below as a binding systemic outcome, they are changing an
> authorization rule under §88, not setting a commission parameter — and AD-01K's framing of P-δ as one
> of four commission parameters does not surface that.**

> ⟦ARCHITECT ANALYSIS⟧ **L-10 — the workload consequence AD-01K named (K-13) becomes sharper under
> C-IX.** If P-δ can only be *contest* without amending §11, then **every minted citation claim becomes an
> item of authorized-leadership work**, not an automatic outcome. **The owner is not choosing between
> three commission policies of equal operational cost; they are choosing between "mint nothing" and
> "mint items of leadership adjudication work."** AD-01K's §15.1 stated that the owner sets a workload
> when they set P-δ; **C-IX states that under the current §11 they may have no cheaper branch available.**

### 3.6 C-VI's timing cannot hold for an offline-originated Inquiry

> ⟦ARCHITECT ANALYSIS⟧ **L-11 — AD-01K's C-VI is right in substance and imprecise in its timing anchor,
> and the imprecision is money-bearing on the exact path §12 exists to govern.**
>
> **C-VI as written:** *"The systemic reach determination must be made at the new Inquiry's ORIGINATION,
> not at conversion and not at invoice submission."* Its stated ground is **PO-5 (§12)**.
>
> **But PO-5 does not say the gate runs at origination. It says the opposite.** ⟦SOURCE⟧ §12: a device
> *"cannot perform a reliable server-wide duplicate/clash check while disconnected,"* so an offline
> record is **PENDING SYNCHRONIZATION** and the gate runs *"after connectivity returns."* **For an
> offline-originated Inquiry, origination and gate evaluation are different moments, and §12 places no
> bound on the interval.** C-VI as literally written is therefore unsatisfiable on that path — and *"never
> pretend an offline lead has passed the server-side clash gate"* forbids papering over it.

> ⟦ARCHITECT RECOMMENDATION — A-9 … A-11 are stated in [§12](#12-contradictions-with-ad-01-through-ad-01k); the refinement itself is stated here⟧
>
> **C-VI, refined reading (proposed for approval alongside C-VI, not instead of it):** *the systemic
> citation determination is made when the arriving registration is evaluated by the server-side
> duplicate/clash gate — which is origination for an online capture and sync-arrival for an offline one —
> and never later.*
>
> **Consequences, all of which are AD-01C T-9's and none of which is resolved here:** an
> offline-originated Inquiry may be **worked** before its citation determination has run; **AD-01C T-9**
> acquires a **financial** dimension it did not have; and **C-IV**'s requirement (resolution complete
> before the §32 milestone) becomes the binding outer bound on that gap rather than C-VI. **T-9, T-1,
> T-3, T-11, M-14 and N-1 are NOT resolved, narrowed or branched here.** → **A-11, named and NOT made.**

### 3.7 C-X — a citation's ground must be an immutable fact

> ⟦ARCHITECT RECOMMENDATION — L-12, constraint C-X⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** **This does not reopen, re-derive or challenge K-26, and it resolves no part of
> AA-3.**)*
>
> **C-X — A minted citation claim's stated ground must be a fact that cannot subsequently change. If the
> ground can change, the claim becomes re-evaluable after it has been adjudicated, and §40 authorizes
> entitlement against a moving input.**
>
> **Applying it to the three reach questions produces an asymmetry no prior document has stated:**
>
> | Question | Its ground | Immutable? | Consequence |
> |---|---|---|---|
> | **T-4** — prior Inquiry **closed** | A **Dimension-A classified closure with its preserved reason** | **YES.** AD-01A **§8.3** preserves the reason; **H-4** makes the outcome terminal-once; **R6** forbids editing history | **A T-4 citation is evaluable once and stays evaluated.** This is the branch where the mechanism is safe. |
| **T-5** — prior Inquiry **converted**, claim **discharged** | A **§32 entitlement** | **NO.** **PO-9 (§33)** can claw it back; **PO-10 (§26)** can change the transaction it was keyed to | A T-5 citation would need a further rule for what happens when its ground unwinds. **K-26 answers *no reach* and the question is therefore vacuous — which is a second, independent reason K-26's answer is the structurally sound one. K-26 is NOT reopened and its grounds are NOT restated.** |
| **AA-3** — prior Booking **cancelled** | An entitlement that **may or may not** have been clawed back | **NO** | **AA-3 cannot be answered without also saying what happens when its ground changes.** This generalises AD-01K's **K-30** from a consistency observation into a requirement on any answer. **AA-3 is NOT resolved here.** |
>
> **What C-X adds beyond K-30.** K-30 observed that a §33 clawback *"un-discharges"* the prior claim and
> therefore removes K-26's own ground on the AA-3 path. **C-X states the general rule K-30 is an instance
> of, and in doing so identifies T-4 as the only one of the three reach questions whose ground is stable.
> That is a property of T-4 the owner should have when deciding it, and it cuts in favour of neither
> branch: it says only that if the owner grants citation anywhere, T-4 is the branch where the mechanism
> behaves.**

### 3.8 A cost of the "yes" branch AD-01K did not price

> ⟦ARCHITECT ANALYSIS⟧ **L-13 — a fifth cost, and it is the only one with a source-text warning attached
> to it.** AD-01K's **K-21** priced the yes-branch at four costs (C-III's reference, the origination-time
> act, the derived-claim concept, the enlarged §11 population) against no-reach's one (AD-01C D6's genuine
> dispute). **A fifth cost exists and it is structural:**
>
> **Under any citation rule, a registration that is never worked and closes without converting acquires a
> residual commercial value — an option on whatever that Person later buys.** Registration is the
> cheapest act in the CP workflow (⟦SOURCE⟧ **§42**: *"name, limited phone identifier where appropriate,
> CP/source, quick registration"*; **§44** permits capture of an **unverified** sub-agent's registration
> before the relationship is confirmed). **A rule that converts registration volume into forward options
> rewards volume over engagement.**
>
> ⟦SOURCE⟧ **§11 is the one place in the sources that names this hazard in its own words**: *"Sales Reps
> should not automatically see sensitive clash information **that could influence or manipulate
> attribution**."* §11 is concerned with attribution manipulation as a live risk, and a citation rule
> enlarges the surface on which it operates.
>
> **Two things follow, and neither is a recommendation on P-α:**
>
> 1. **K-22 is the primary control against this cost, and that is a second reason it is load-bearing
>    beyond its own case.** A fabricated or unusable registration closes on Dimension A's invalid side,
>    and under **L-6** no citation is minted. **The control only works if the closure is classified
>    honestly** — which is **AC-1** ([§14.1](#141-new-item-raised-by-this-document)).
> 2. **This is a cost of the yes-branch, stated so the owner can weigh it. It is NOT an argument that
>    P-α should be set to no-reach, and no branch of P-α is preferred, ranked or hinted at anywhere in
>    this document.**

---

## 4. Commercial-boundary alternatives

> ⟦ARCHITECT ANALYSIS⟧ **Seven candidate shapes for the boundary. Four are eliminated by entailment from
> positions already taken, which is why the live space is smaller than it appears. Elimination by
> entailment is recorded as such and is distinguished from elimination by preference — there is none of
> the latter here.**

| # | Candidate boundary shape | Verdict | Basis |
|---|---|---|---|
| **Alt 1** | **Impermeable and non-citing.** The later Inquiry's claim set contains only claims filed on it. Nothing is minted. | **LIVE.** Costs exactly one thing: AD-01C **D6**'s genuine dispute is resolved against the introducing CP by default — **visibly**, since **PO-13 (§39)** shows the CP their attribution and pipeline (**K-57**, upheld without softening). Requires **nothing new**: no AA-4 artefact, no derived-claim concept, no origination-time determination, no enlarged §11 population, no **AC-1**. | ⟦ARCHITECT ANALYSIS⟧ |
| **Alt 2** | **Impermeable to claims, open to citation** (**L-3**, B-1 + B-2). | **LIVE — and it is the only shape in which any "yes" is expressible.** | **C-VII** makes every other "yes" shape unrepresentable. |
| **Alt 3** | **Permeable: the earlier claim itself extends, moves or is re-scoped to the later Inquiry.** | **ELIMINATED BY ENTAILMENT.** **C-VII**: the claim would have to change its own project, mutating a historical claim — forbidden by §D.4 (*"never overwritten"*) and **R6**. It also breaks **C-III** in reverse: the earlier claim would have two subjects. **Not a branch the owner may choose.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Alt 4** | **Dissolve the boundary: attach the claim to the Person / CP relationship, so there is nothing to cross.** | **ELIMINATED BY ENTAILMENT, and eliminated three times previously.** It *"answers an unasked question by accident"* (AD-01C **D6**, verbatim, §1 above); it is AD-01K's **K-32** and **K-37**; and it contradicts **K-18**, which this document does not reopen. **Re-confirmed here, not re-derived.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Alt 5** | **Relocate the boundary to the Booking / transaction.** | **ELIMINATED BY ENTAILMENT.** **J-30**: the Booking has a *transaction* lifecycle, not a commercial terminal boundary. **A cancelled Booking would then re-open the commercial boundary — directly contradicting Q6/PO-19**, which this document does not reopen. Also AD-01K **K-43 ③**. | ⟦ARCHITECT ANALYSIS⟧ |
| **Alt 6** | **Pure horizon: citation permitted within some elapsed time, with no classification input.** | **ELIMINATED BY ENTAILMENT.** **C-I** / **J-9**: a horizon alone cannot distinguish AD-01J's Case 4 (Wrong Number) from Case 5 (Budget Issue), and *"neither uniform answer is defensible across both cases."* **A horizon may only ever be a secondary bound on a class map, never the map itself.** | ⟦ARCHITECT ANALYSIS⟧ |
| **Alt 7** | **Defer: decide nothing, build nothing, revisit later.** | **LIVE, and it is what [§13](#13-architect-recommendation)'s build posture amounts to — with one honest caveat.** **§40**'s server-side authorization then carries an unspecified input, and this would be the **fifth consecutive deferral** of the same item (AD-01K §15.1 already flagged it as the last thing between the line and **M-9**). **Deferral is safe for the build and costly for the schedule; it is not safe indefinitely.** | ⟦ARCHITECT ANALYSIS⟧ |

> ⟦ARCHITECT ANALYSIS⟧ **L-14 — read the table's shape.** **Alt 1 and Alt 2 are the same architecture
> with one licence toggled.** Alt 1 is Alt 2 with citation refused. **That is the whole of the remaining
> decision**, and it is why [§13](#13-architect-recommendation) can recommend the *shape* without
> recommending the *setting*: the owner's answer changes what the system is permitted to create, not what
> it is built out of.

---

## 5. Inquiry lifecycle implications

### 5.1 The central question answered directly

> ⟦ARCHITECT ANALYSIS⟧ **L-15 — the six conditions the task names, tested one at a time against the
> sources. Three of the six are not Inquiry states at all; one is established; one is the established
> condition under a different name; and one is genuinely unestablished. The task's list also omits the
> one terminal outcome T-4 is actually about.**

| Candidate condition | Is it an established Inquiry state? | Where it actually lives | Label |
|---|---|---|---|
| **Merely an interest** *(a bare interest, distinct from a commercially active one)* | **NOT ESTABLISHED.** No source distinguishes a bare interest from an active one at the Inquiry. The three nearest real things are each something else: ⟦SOURCE⟧ **§12**'s **PENDING SYNCHRONIZATION** is a **gate condition on an arriving registration**, and **Q1 already rejected *Pending* as a lifecycle value**; ⟦SOURCE⟧ **§43**'s *"pending enrichment queue"* is a **work-accountability device** (*"without blocking urgent sales activity"*); AD-01J's **AA-2** project-less preliminary registration is **open**. | → **`BUSINESS DECISION REQUIRED`, owned by AA-2**, with §12/**T-9** and §43 as evidence. **No state is invented here.** | ⟦BUSINESS DECISION REQUIRED⟧ |
| **Commercially active** | **ESTABLISHED — as the single non-terminal condition**, named *"Live"* in AD-01J §6.1. It is the **complement of terminal**, not an independently recorded value. | **Inquiry**, derived as *"no terminal outcome recorded."* | ⟦ARCHITECT ANALYSIS⟧ |
| **Discharged** | **NOT AN INQUIRY STATE, and must not become one.** Discharge is a property of the **attribution claim's §32 entitlement**. ⟦SOURCE⟧ §32 establishes an entitlement progression (*entitlement · milestone-based eligibility · invoice submission · Accounts review · payout · reversal/clawback*) and ⟦SOURCE⟧ PO-8 separates **accrual from payout**. **Whether a claim records that its entitlement was clawed back is NOT established** — AD-01K **K-30** requires it. | **Entitlement / CP Ledger → M-9 and §33.** **NOT resolved here; no entitlement lifecycle is proposed.** | ⟦ARCHITECT ANALYSIS⟧ + ⟦BUSINESS DECISION REQUIRED⟧ (the recorded-clawback flag, owned by M-9) |
| **Converted** | **ESTABLISHED.** ⟦PRODUCT-OWNER DECISION⟧ **Q4/PO-18** — the approved **Booked / §20 Stage 3** milestone; the Inquiry holds the **conversion fact** and references the Booking (**H-8**). | **Inquiry** (fact) + **Booking** (milestone). | ⟦PRODUCT-OWNER DECISION⟧ |
| **Cancelled after conversion** | **NOT AN INQUIRY STATE, and must never become one.** ⟦PRODUCT-OWNER DECISION⟧ **Q6/PO-19**: a valid Success **stays historically true**; the cancellation is the **Booking's** (⟦SOURCE⟧ §35). AD-01H **§8.3** and AD-01K **K-58** both state it. | **Booking.** | ⟦PRODUCT-OWNER DECISION⟧ |
| **Re-engaged** | **NOT AN INQUIRY STATE.** Re-engagement produces a **new** Inquiry (**J-2**; **J-37** act 2). **H-4** makes an Inquiry terminal exactly once; there is no edge back. The *fact* of re-engagement is **derived** — *"originated on a record already holding ≥1 terminal Inquiry"* (**J-50** weak form). | **A new Inquiry**, plus a derived record-level fact. | ⟦ARCHITECT ANALYSIS⟧ |
| **Closed with a classified, preserved reason** *(omitted from the task's list)* | **ESTABLISHED — and it is the outcome T-4 is entirely about.** ⟦PRODUCT-OWNER DECISION⟧ **Q7 / AD-01A §8.3**: a terminal non-conversion disposition **must carry a reason**, classified on the three approved dimensions, **preserved** and never silently rewritten. **H-4**, **V-11**. | **Inquiry.** | ⟦PRODUCT-OWNER DECISION⟧ |

> ⟦ARCHITECT RECOMMENDATION — L-16, the Inquiry's established condition set, stated completely⟧
> *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** This **adds nothing** to AD-01H
> **H-4** or AD-01J **J-34 / §6.1** — it is those positions inventoried against the task's list, and it
> is offered so the inventory is on the record rather than reconstructed.)*
>
> **An Inquiry has exactly three conditions, and no fourth is established by any source:**
>
> 1. **Non-terminal** — derived as the absence of a terminal outcome. Not a stored value.
> 2. **Terminal — converted**, referencing the Booking that reached §20 Stage 3.
> 3. **Terminal — closed**, carrying a classified, preserved Q7 reason.
>
> **Terminal exactly once. Monotone. Never rewritten, never reversed, never reused** (**H-4**).

### 5.2 T-4 is state-neutral

> ⟦ARCHITECT ANALYSIS⟧ **L-17 — no answer to T-4 adds, removes, splits or modifies any Inquiry
> condition, in any branch.** A citation (B-2) creates **a claim on a claim set**. A claim is not a
> lifecycle value; **K-17** already establishes the claim set as append-only and separate from the
> Inquiry's disposition. **This is worth stating explicitly because the opposite assumption — that
> granting reach requires something like a *re-engaged* or *superseded* Inquiry state — is the most
> natural wrong inference available from T-4's original wording, and it would reintroduce exactly the
> fifth lifecycle value Q1 rejected.**

### 5.3 The one lifecycle-adjacent thing T-4 does touch

> ⟦ARCHITECT ANALYSIS⟧ **L-18 — T-4 makes the Q7 *reason* a financial input, and the reason is set on a
> one-tap control by the least-privileged user in the system.** ⟦SOURCE⟧ **§13**: *"Where safe, use
> prefilled values, quick actions, **one-tap dispositions** … But do not remove confirmations that are
> necessary for data integrity."* ⟦SOURCE⟧ **§95**: *"**MINIMUM NECESSARY FRICTION, not minimum possible
> taps.** A one-tap action that creates financial corruption is worse than a three-tap action that
> prevents it."*
>
> Under **K-22 / L-6**, whether the Dump reason lands on Dimension A's invalid side decides whether a
> forward claim can ever be minted. **Under any answer to T-4 other than "never," the Sales Rep's
> disposition tap acquires a money consequence it does not have today.** **This does not redefine Dump
> and does not touch V-11, V-12 or AD-01A §8.3** — it states a control consequence and registers it as
> **AC-1** ([§14.1](#141-new-item-raised-by-this-document)).

---

## 6. Dump/discharge implications

> ⟦ARCHITECT ANALYSIS⟧ **The established split is used and NOT redefined: Inquiry-level = persisted
> commercial disposition with a classified, preserved reason (AD-01A §8.3, V-11); record-level = derived,
> non-persisted work condition (AD-01H Model D, AD-01I); manager redistribution = a work operation that
> never creates an Inquiry and never changes attribution (AD-01I I-5/I-6/I-7, AD-01J J-42, AD-01K K-54).
> This section analyses only how T-4 constrains the relationship between a Dumped Inquiry and a later
> one.**

### 6.1 What T-4 constrains, and what it leaves alone

| Relationship | Constrained by T-4? | Statement | Label |
|---|---|---|---|
| The Dumped Inquiry's **disposition** | **No** | Terminal-once, monotone, never re-disposed (**H-4**). **B-1: nothing T-4 decides can touch it.** | ⟦ARCHITECT ANALYSIS⟧ |
| The Dumped Inquiry's **preserved reason** | **No** | Immutable (**§8.3**, **R6**). T-4 **reads** it (**C-I**) and never writes it. | ⟦ARCHITECT ANALYSIS⟧ |
| The Dumped Inquiry's **claim set and its adjudication** | **No** | Append-only, never overwritten (**K-17**, §D.4). **A citation does not modify it; it cites it.** | ⟦ARCHITECT ANALYSIS⟧ |
| The **record-level derived work condition** | **No, in any branch** | It is derived, not persisted, and carries no commercial fact (**Model D**, **I-8**). A claim cannot attach to a derivation. | ⟦ARCHITECT ANALYSIS⟧ |
| **Manager redistribution** | **No, structurally** | Redistribution **originates no Inquiry** (**I-6**, **J-16**), and under **C-VI** the citation determination happens only at an arriving registration's gate evaluation. **Redistribution never reaches the gate, so it can never trigger, create, contest or move a citation — in every branch of T-4.** AD-01K's **K-54** six-exception search is CONFIRMED and not repeated. | ⟦ARCHITECT ANALYSIS⟧ |
| **Which later Inquiry may be cited** | **YES — this is the whole of it** | **C-III** (determinate predecessor) + **L-6** (invalid side admits none) + **C-VIII** (if bounded, bounded from the closure event) + **P-α/P-β** (`BUSINESS DECISION REQUIRED`). | ⟦BUSINESS DECISION REQUIRED⟧ |

### 6.2 The redistribution case from the owner's own narrative

> ⟦ARCHITECT ANALYSIS⟧ **L-19 — consolidated §7 describes, in the Product Owner's own words, the exact
> sequence that is T-4's sharpest real case. It should be the case the owner is asked about, because it
> is the one they will actually meet.**
>
> ⟦SOURCE⟧ **PO-23 / consolidated §7:** *"A client was originally handled by Employee A, followed up and
> later dumped. **A manager may redistribute dumped/non-responding leads to a fresher for another calling
> attempt.** If the client later regenerates an inquiry, the same underlying client/lead history may
> remain connected."*
>
> **Run it with a CP at the front, which §7 does not exclude and §11 makes ordinary:**
>
> | Step | What happens | What the model records |
> |---|---|---|
> | 1 | **CP A registers the prospect** for Project A | An Inquiry originates; **CP A's claim is recorded on it** (**PO-1**, **K-18**) |
> | 2 | Employee A works it; the prospect goes quiet; it is **Dumped** | The Inquiry reaches **terminal-closed** with a classified Q7 reason (**§8.3**) |
| 3 | A manager **redistributes the record to a fresher for another calling attempt** | **One Assignment Log entry. No Inquiry. No claim. No attribution effect** (**I-4**, **I-6**, **K-54**) |
| 4 | The fresher calls; **the customer says they are interested again** | That is a **customer-generated expression of interest** → **J-2 originates a NEW Inquiry** with its own source and its own claim set. **It is J-37 act 2 (re-engagement), not act 5 (work re-attempt)** — the redistribution and the customer's response are **two events, not one** (**I-7**) |
| 5 | It converts | The new Inquiry is **terminal-converted**; **K-48**'s join runs against **its** resolved claim |
>
> **The owner's question, in their own language:** *"CP A brought us this client, we could not close them,
> our own manager put a fresher back on the phone, and the fresher's call is what turned them around and
> produced the booking. **Does CP A get paid?**"*
>
> **That question is answerable by a project owner. *"What is P-α"* is not.** **This document does not
> answer it, and no branch is preferred, ranked or hinted at.** ⟦BUSINESS DECISION REQUIRED⟧

> ⟦ARCHITECT ANALYSIS⟧ **L-20 — a second observation on step 4 that is architecture and not policy.**
> The later Inquiry in §7's narrative is **not separately-sourced by a competing producer** — it was
> prompted by the builder's own outbound work. **Under K-9, an internal claimant can win an attribution
> contest and generate no §32 entitlement at all.** So in §7's case **P-δ's contest is CP A against the
> builder itself**, which is a materially different commercial question from CP A against CP B, and
> AD-01K's P-δ framing does not distinguish them. **Recorded as an input to the owner's decision. It is
> NOT a proposal to split P-δ.**

### 6.3 Duplicate Inquiry is not a T-4 case

> ⟦ARCHITECT RECOMMENDATION — L-21, a prohibition⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.**)*
>
> **T-4 must never be used as the mechanism for resolving a duplicate Inquiry, and a duplicate-Inquiry
> closure must never serve as a citation ground.**
>
> **Why.** Under the Origination Rule (**J-2**, as bounded by **K-50**), a second arriving registration
> for an interest an existing non-terminal Inquiry already covers **does not open a new Inquiry** — it
> adds a **second claim to that Inquiry**, which is an ordinary **§11 clash** (**K-12**). **Two Inquiries
> that should have been one are therefore a data defect, not a commercial sequence.** Their remedy is
> correction and merge — **AD-01C T-6 / T-7 / T-8** (the correction mechanism, its authorization and its
> reason vocabulary) and **AD-01 Q10** (merge) — **none of which is resolved here.**
>
> **Treating a duplicate as a T-4 case would produce precisely AD-01C D6's *"clash that is not a
> clash"* one level down**, and it collides head-on with **AD-01C T-3**: *"successor linkage vs merge
> linkage: two lead-to-lead relationships making opposite claims about identity."* **A merge asserts the
> two records are the same engagement; a citation asserts they are different engagements, one grounding
> a claim on the other. They must never be recorded by the same artefact.** **T-3 is NOT resolved here
> and is carried forward at the Inquiry level per A-3.**

### 6.4 The one place T-4 depends on T-5, and it is a dependency, not a reopening

> ⟦ARCHITECT ANALYSIS⟧ **L-22 — T-4's answer must not be set in a form that silently sets T-5's.** This
> is AD-01K's **K-25 / A-7** applied forward rather than re-argued. **AD-01K's K-26 — a fully discharged
> attribution claim produces NO further commercial reach — is preserved exactly, is not re-derived, and
> is not challenged anywhere in this document.** The dependency T-4 has on it is narrow and stated once:
>
> **If the owner grants citation on T-4 for valid-but-failed closures, the rule must be expressed on the
> CLOSURE CLASSIFICATION and must NOT be expressed as *"a claim on a terminal Inquiry may ground a later
> claim,"*** because the second formulation is outcome-blind and would extend to converted Inquiries —
> **granting a second payment for a contribution already compensated, which is exactly what K-25 showed
> J-33's parameterisation would steer into.** **C-X** ([§3.7](#37-c-x--a-citations-ground-must-be-an-immutable-fact)) supplies an independent
> structural reason the two must stay apart. **T-5 is not reopened, not re-derived and not narrowed.**

---

## 7. Re-engagement implications

> ⟦ARCHITECT ANALYSIS⟧ **Q5 is NOT reopened. The only question taken here is the one the task permits:
> what, if anything, does a returning customer's new Inquiry inherit from a closed prior Inquiry, and
> under what conditions.**

### 7.1 The inheritance question, answered exhaustively

| Does the new Inquiry inherit…? | Answer | Basis | Label |
|---|---|---|---|
| The prior Inquiry's **disposition or reason** | **Never** | **H-4** terminal-once; **§8.3** preserved; **B-1** | ⟦ARCHITECT ANALYSIS⟧ |
| The prior Inquiry's **source, campaign or channel** | **Never.** The new Inquiry takes **its own**, as origination facts | **K-17** (origination facts, immutable); **J-36** (no record-level source) | ⟦ARCHITECT ANALYSIS⟧ |
| The prior Inquiry's **claim set** | **Never** | **B-1**; **C-VII**; §D.4 | ⟦ARCHITECT ANALYSIS⟧ |
| The prior Inquiry's **resolved attribution** | **Never** | **B-1**; **C-II** | ⟦ARCHITECT ANALYSIS⟧ |
| The prior Inquiry's **conversion fact**, if any | **Never** — and a prior Success is untouched by the new Inquiry's existence | ⟦PRODUCT-OWNER DECISION⟧ **Q6/PO-19**; **H-8**; **J-46** | ⟦PRODUCT-OWNER DECISION⟧ |
| **Relationship continuity** — the client's history, timeline, prior closures and their reasons | **YES, and it already has a home: the work record** | **J-11**: *"`Relationship continuity` and `commercial continuity` are different things, and only the first exists in this model"*; **G-1**; **PO-23** | ⟦ARCHITECT ANALYSIS⟧ |
| **A NEW claim naming the prior producer, citing the prior Inquiry as its ground** | **THIS, AND ONLY THIS, IS THE OPEN QUESTION** | **B-2**; **P-α/P-β/P-γ/P-δ** | ⟦BUSINESS DECISION REQUIRED⟧ |

> ⟦ARCHITECT ANALYSIS⟧ **L-23 — AD-01K's K-56 forced/open split is CONFIRMED and is completed by one
> row.** K-56 listed five forced properties of re-engagement and one open one. **The open one is
> precisely B-2, and every forced one is an instance of B-1.** **That is the whole of re-engagement's
> relationship to T-4, and nothing else about re-engagement is affected by any branch.**

### 7.2 The three re-engagement acts T-4 does and does not touch

| AD-01J J-37 act | Does T-4 apply? | Why | Label |
|---|---|---|---|
| **1 — Continuation** (activity on a live Inquiry) | **No.** No terminal boundary has been crossed and no Inquiry is created | Whether a *late* claim may be filed on that same live or closed Inquiry is **AD-01 Q11**, **not T-4** — see **L-24** | ⟦ARCHITECT ANALYSIS⟧ |
| **2 — Re-engagement** (no live Inquiry covers it; ≥1 prior terminal Inquiry) | **YES. This is T-4's case, and its only case** | **J-2**, **J-37** | ⟦ARCHITECT ANALYSIS⟧ |
| **3 — Additional interest** (a project not covered, while others are live) | **No.** Nothing terminal has been crossed; it is concurrency, not sequence | **V-2** (approved); **Y-1** open and untouched | ⟦ARCHITECT ANALYSIS⟧ |
| **4 — Return after conversion** | **No — T-5's, answered by K-26** | Preserved, not reopened | ⟦ARCHITECT ANALYSIS⟧ |
| **5 — Work re-attempt** (redistribution) | **No, structurally, in every branch** | **§6.1**, final row | ⟦ARCHITECT ANALYSIS⟧ |
| **6 — Correction** | **No, and never** | **J-38**: a re-engagement may never serve as a correction and a correction never opens an Inquiry. **AD-01C T-6/T-7/T-8 NOT resolved** | ⟦ARCHITECT ANALYSIS⟧ |

> ⟦ARCHITECT ANALYSIS⟧ **L-24 — a distinction that is routinely collapsed and must not be.** **Filing a
> claim LATE on the SAME Inquiry is AD-01 Q11** (whether a producer may file late, and any cut-off).
> **Minting a claim on a LATER Inquiry is T-4.** They look alike from the CP's side — in both the
> producer is asserting a claim after the fact — and they are completely different questions with
> different owners. **AD-01K's C-VI was deliberately constructed not to touch Q11, and this document
> preserves that: Q11 is NOT resolved, NOT narrowed and NOT branched here** (AD-01B §6.3 sequences it
> with M-5 and the commission model).

---

## 8. Success/Booking implications

> ⟦PRODUCT-OWNER DECISION⟧ **Q4 and Q6 are preserved exactly and are not reopened, narrowed, tested or
> re-argued.** **Success = the qualifying Booked / §20 Stage 3 milestone. A valid Success remains
> historically true regardless of what happens later. A Booking cancellation never rewrites a valid
> historical conversion. An incorrectly recorded Success is corrected only through the audited,
> explicitly authorized, appended correction mechanism. A genuinely new opportunity after a prior Success
> creates a new business unit.**

| Interaction | Effect of T-4 | Label |
|---|---|---|
| **A valid Success on a prior Inquiry** | **None, in any branch.** **B-1** makes it untouchable; **C-II** makes it un-restatable. T-4 governs only credit for a **future** conversion | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking cancellation (§35)** | **None on T-4's path.** Cancellation lives on the Booking; the Inquiry's conversion stands (**H-8**, **§8.3**). **The re-engagement-after-cancellation path is AA-3, is neither T-4's nor T-5's, and is NOT resolved here** | ⟦ARCHITECT ANALYSIS⟧ |
| **The converting Booking of the LATER Inquiry** | **T-4 decides WHO; the Booking decides WHETHER AND WHEN** (**K-48**). A citation rule **tightens C-IV**, because it adds a claim that must be adjudicated before the §32 milestone — and under **C-IX** that adjudication is authorized leadership's | ⟦ARCHITECT ANALYSIS⟧ |
| **§26 unit transfer on the later Booking** | **None.** **K-40**: the Inquiry is structurally undisturbed by a transfer, so attribution — citation-derived or filed — cannot move. **The entitlement-identity half is AB-2 and carries forward unchanged** | ⟦ARCHITECT ANALYSIS⟧ |
| **§33 clawback on the later Booking** | **Acts on the ledger and the transaction, never on the claim.** **But see C-X**: the clawback question is the reason T-5 and AA-3 grounds are unstable while T-4's is not | ⟦ARCHITECT ANALYSIS⟧ |
| **AD-01K's K-50 domain clause (A-6)** | **Relied upon and CONFIRMED, not re-derived.** Without it, a §26 transfer request would originate an Inquiry and therefore a claim set, and **T-4's boundary would be crossable through a transaction event rather than a commercial one.** **A-6 remains named and NOT made; only the Product Owner may make it** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 9. Attribution implications

### 9.1 When an Inquiry has a commercial attribution opportunity

> ⟦ARCHITECT RECOMMENDATION — L-25⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT
> APPROVED.**)*
>
> | Moment | Is there an attribution opportunity? | Basis |
> |---|---|---|
> | **At origination** | **YES — this is the primary and, under Alt 1, the only one.** The Inquiry takes its initial claim set (**J-34**, **K-17**) | **PO-1**, **K-12** |
> | **While non-terminal** | **YES.** A competing producer's registration that the Origination Rule routes to this Inquiry adds a claim to it — the paradigm **§11** clash (**K-12**, **K-52**) | **PO-1** |
> | **At origination, by citation of a predecessor** | **`BUSINESS DECISION REQUIRED` — this is B-2 and the whole of T-4's remainder** | **C-V**, **C-VI** |
> | **After the terminal outcome** | **Not by citation, ever** — **C-VI** fixes the determination at the gate. Whether a *producer* may still **file** late on that Inquiry is **Q11**, **NOT T-4** (**L-24**) | **C-VI**; **Q11 NOT resolved** |

### 9.2 When attribution is considered discharged

> ⟦ARCHITECT ANALYSIS⟧ **L-26 — a clarification of K-26's own ground, in the direction K-26 already
> goes. This is NOT a reopening of T-5, and K-26's answer is unchanged.**
>
> ⟦SOURCE⟧ **PO-8 / consolidated §22:** *"CP commission **accrual and payout are separate**."* There are
> therefore **two candidate discharge points**: the moment the resolved claim becomes a §32 **entitlement**,
> and the moment it is **paid**.
>
> **K-26's stated grounds are all entitlement-grounds, not payout-grounds** — §32's *milestone-based
> eligibility* (per-transaction by construction), §22's per-event financial concepts, and §33's
> recovery-against-a-specific-Booking. **None of them turns on whether money actually moved.** **So the
> discharge that grounds K-26 is the ENTITLEMENT'S CREATION, not the payout.** Reading it the other way
> would leave an entitled-but-unpaid producer holding reach — a result K-26's own four grounds do not
> support. **Recorded as a clarification for whoever implements M-9. K-26 is not reopened, not
> re-derived and not challenged.**

### 9.3 How T-4 interacts with CP claims

| Question | Answer | Label |
|---|---|---|
| Does a citation claim contest the producing CP's claim? | **Yes — two recorded claims on one Inquiry is the literal §11 predicate.** And under **C-IX** the contest must be resolved by **authorized leadership**, not by rule, unless the owner amends §11 | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 change the **scope** of a §11 clash? | **No.** **K-52** stands: clash is scoped to **one Inquiry's claim set**, attribution-claim-specific, project-specific as a consequence. **A citation claim is a claim on the later Inquiry — it is inside the existing scope, not a new scope** | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 change the **size** of the clash population? | **Yes, materially — and it is a policy variable, not a constant** (**K-13**, **L-10**) | ⟦ARCHITECT ANALYSIS⟧ |
| Does the losing CP find out? | **Yes.** ⟦SOURCE⟧ **PO-13 / §39** gives the CP *"lead information, attribution information, pipeline status, commission status, eligibility."* **AD-01C D6's dispute is genuine and is not softened here** (**K-57**, CONFIRMED) | ⟦ARCHITECT ANALYSIS⟧ |
| Does a citation claim need to be **distinguishable** from a filed claim in the CP's own view? | **YES, and it is forced.** **PO-13** entitles the CP to *attribution information*; a claim the system minted on their behalf, which they did not file, is a materially different fact from one they did — and **C-V** already requires it to be recorded by an explicit authorized act | ⟦ARCHITECT RECOMMENDATION⟧ |
| Does the §12 offline gate get harder? | **Yes, and it becomes money-bearing.** **PO-5** forbids pretending an offline record passed the gate; under **A-11**'s refined C-VI the citation determination runs at gate evaluation. **AD-01C T-9 is NOT resolved here** | ⟦ARCHITECT ANALYSIS⟧ |

### 9.4 Does T-4 force any refinement of "attribution is Inquiry-scoped"?

> ⟦ARCHITECT RECOMMENDATION — L-27⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT
> APPROVED.**)*
>
> **No. Attribution remains strictly Inquiry-scoped under every branch of T-4, and K-18 requires no
> refinement whatsoever.** Under **C-VII** a citation claim is a claim **on the later Inquiry** and
> carries that Inquiry's project. **Nothing becomes relationship-scoped, Person-scoped or record-scoped
> in any branch.**
>
> **One thing is added, and only conditionally: a claim may carry a stated GROUND.** That is a property
> **of a claim**, not a change of scope — and it exists only if the owner grants citation. **See
> [§12](#12-contradictions-with-ad-01-through-ad-01k), A-9, for why that is a materially different and
> cheaper artefact than the one AA-4 currently registers.**

---

## 10. Commission-eligibility implications

> ⟦ARCHITECT ANALYSIS⟧ **No formula, rate, slab, percentage, amount, milestone value, clawback quantum or
> TDS treatment appears in this section or anywhere in this document. M-9 owns all of it and is not
> resolved, narrowed or pre-empted here.**

| Question | Effect of T-4 | Label |
|---|---|---|
| Does T-4 change the **eligibility anchor**? | **No.** **K-48** stands unchanged: **WHO** = the resolved attribution claim on the converting Inquiry; **WHETHER AND WHEN** = the transaction identity surviving §25/§26 and its §32 milestone. **T-4 touches only the WHO side, and only by changing which claims are in the population to be resolved** | ⟦ARCHITECT ANALYSIS⟧ |
| Can a citation claim create an entitlement **by itself**? | **No.** It must (a) be resolved in its holder's favour under §11 and (b) sit on an Inquiry that converts and whose Booking reaches the §32 milestone. **K-9 is the relevant demonstration: winning attribution and being paid are different outcomes** | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 relax **C-IV**? | **No — it tightens it.** More claims must be adjudicated before the milestone, and under **C-IX** the adjudicator is authorized leadership | ⟦ARCHITECT ANALYSIS⟧ |
| Is a citation claim's eligibility **stable** once adjudicated? | **On T-4's path, YES — uniquely.** **C-X**: its ground is an immutable Dimension-A closure. On T-5's and AA-3's paths the ground is an entitlement and is **not** stable | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 affect **§33 clawback** on the later Booking? | **No.** Clawback acts on the ledger and the transaction (**PO-9**), never on a claim | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 affect **§26** entitlement identity? | **No.** **AB-2 carries forward unchanged** and T-4 does not require it to be answered | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 affect **§06 Booking-Group** multi-applicant entitlement? | **No.** **AB-1 carries forward unchanged.** A citation claim is a claim like any other; **AB-1's underspecification (K-51) is identical with or without T-4** | ⟦ARCHITECT ANALYSIS⟧ |
| Does T-4 affect the **§41 sub-agent payee**? | **No.** **AB-3 carries forward unchanged.** T-4 decides which claims exist; AB-3 decides who the counterparty of the money is. **One caveat recorded and not resolved:** ⟦SOURCE⟧ **§44** permits capture of an **unverified** sub-agent's registration, so a citation could in principle name a party the builder has no relationship with — **which is AB-3's own stated exposure, not a new one** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 11. Reporting implications

> ⟦ARCHITECT ANALYSIS⟧ **Business facts only. No SQL, no query, no dashboard, no chart and no metric
> presented as approved. AD-01F §13's rows, AD-01G §12's, AD-01H §10's, AD-01I §10's and AD-01J §11's are
> UPHELD and not restated. This section states only what T-4's boundary adds.**

| # | Reporting consequence | Label |
|---|---|---|
| **1** | **T-4 changes no denominator, in any branch.** **J-48**'s single denominator — *Inquiries originated in the period* — is untouched, because a citation **adds a claim, never an Inquiry** | ⟦ARCHITECT ANALYSIS⟧ |
| **2** | **Source conversion (J-48 row 7) and CP conversion (row 8) will diverge under citation, and that divergence is correct.** An Inquiry originated Direct may carry a resolved claim naming a CP. **This must NEVER be "fixed" by restating the Inquiry's source — K-17 makes source an immutable origination fact and J-36 forbids a record-level source** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **3** | **A minted citation claim must be distinguishable from a filed claim in every attribution report and in the CP's own §39 view.** ⟦SOURCE⟧ **PO-13** entitles the CP to attribution information; a system-minted claim and a producer-filed claim are different facts and merging them makes the §11 population unreadable | ⟦ARCHITECT RECOMMENDATION⟧ |
| **4** | **J-50's re-engagement reporting improves under A-9.** J-50 held that row 9's *strong* form (*"this Inquiry succeeds THAT prior Inquiry"*) needs **AA-4**'s Inquiry→Inquiry reference. Under **A-9** the citation is carried **by the claim**, so the strong form becomes derivable from the claim set without asserting any succession relation between the Inquiries. **J-50's weak form remains sufficient under Alt 1** | ⟦ARCHITECT ANALYSIS⟧ |
| **5** | **Row 9's two-facts rule is unaffected** — customer-generated re-engagement and management-generated redistribution must never be one number (**AD-01I §10.1 row 7**, CONFIRMED) | ⟦ARCHITECT ANALYSIS⟧ |
| **6** | **No reason-coded reporting is defensible until N-4 supplies values** — and under **L-6** that now blocks P-α's positive side specifically, not K-22's negative side | ⟦ARCHITECT ANALYSIS⟧ |
| **7** | **No CP scorecard or producer-evaluation product is authorised by anything here** (AD-01A §3.3, upheld). **Reports branch on semantics, never on tenant-renameable labels or codes** (**R4**) | ⟦ARCHITECT ANALYSIS⟧ |
| **8** | **Campaign reporting is unaffected.** Campaign is an origination fact of the Inquiry (**K-17**) and no branch of T-4 touches it | ⟦ARCHITECT ANALYSIS⟧ |

---

## 12. Contradictions with AD-01 through AD-01K

> ⟦ARCHITECT ANALYSIS⟧ **No file is edited by this document.** Per the task's standard, a **direct,
> provable contradiction** would be named precisely and NOT resolved by editing the prior document.
>
> **Result of the search: NO direct provable contradiction was found with Q1, Q4, Q5, Q6, Q7, V-1, V-2,
> V-3, V-11, V-12 or AD-01K's K-18 attribution recommendation. None of them is reopened.** Three
> **imprecisions requiring amendment** were found, all in *recommendations* rather than in approved
> decisions, and all are named below and **NOT made**.

| # | Item | Statement | Status |
|---|---|---|---|
| **A-9** | **AD-01J's AA-4 is posed at the wrong end, and the correction makes T-4's "yes" branch materially cheaper than AD-01K priced it.** AA-4 asks whether an **Inquiry→Inquiry succession reference** is required. Under **C-VII** what a citation actually needs is a **claim→Inquiry citation**: one appended property of one claim, stating that claim's ground. **The difference is not cosmetic.** An Inquiry→Inquiry succession reference asserts a relation **between the engagements**, which (a) collides with merge linkage — **AD-01C T-3**'s exact subject — (b) raises chain depth and transitivity — **AD-01C T-11** — and (c) creates a relationship the business did not ask for. **A claim-borne citation asserts nothing about the Inquiries at all and creates neither collision.** **This narrows AD-01K's K-21 cost (a).** | **NAMED, NOT MADE. AD-01J and AD-01K are not edited. AA-4 is NOT resolved; it is re-posed. Only the Product Owner may make this amendment.** |
| **A-10** | **AD-01C §6's T-4 row names the likely owner as *"M-5 + CP commission model (M-9)."* The M-5 half is superseded.** AD-01K's **K-4/K-5** established that M-5 contains a false entailment and that its **uniqueness half does not determine the attribution anchor** — that is AD-01K's own **A-8**, named and not made. **T-4's owners are the Product Owner (the commercial policy), N-4 (P-α's input) and M-9 (which consumes the answer). M-5's uniqueness half has no part in it.** | **NAMED, NOT MADE. AD-01C is not edited. Recorded so the register is not read as making T-4 wait on M-5.** |
| **A-11** | **AD-01K's C-VI names the wrong moment for an offline-originated Inquiry.** C-VI says *"at the new Inquiry's ORIGINATION"* and cites **PO-5 (§12)** as its ground, but §12 places the duplicate/clash gate **after connectivity returns**, not at origination. **The refined reading — *at the server-side gate's evaluation, which is origination online and sync-arrival offline, and never later* — preserves C-VI's entire intent and is satisfiable on the offline path.** | **NAMED, NOT MADE. AD-01K is not edited, and C-VI is unapproved in either form. Recommended for approval in its refined reading; see [§3.6](#36-c-vis-timing-cannot-hold-for-an-offline-originated-inquiry).** |

### 12.1 Positions confirmed rather than contradicted

| Document | Effect of this document |
|---|---|
| **AD-01** | **E-13's shape — commission keys on the resolved claim, never on a lifecycle state — CONFIRMED.** **§D.4's *"claims are never overwritten by a later claim"* is load-bearing in B-1 and in C-IX.** **Q10** (merge) and **Q11** (late filing) are **NOT resolved**; L-21 and L-24 are constructed so as not to touch them. |
| **AD-01A** | **Q1, Q4, Q7 fixed input, NOT reopened.** **Q7 CONFIRMED a fourth time from a fourth direction** — its Dimension A grounds **L-6**, and **Dimension B is recorded as an available input (L-7) without being recommended.** **No dimension added, no value proposed. §8.5 honoured: no workflow, approval step, gate or screen is proposed anywhere, including around C-IX.** |
| **AD-01B** | **§4's *"unrecoverable if decided by implementation"* standard applied to AC-1. §6.3's sequencing of Q11 with M-5 and the commission model CONFIRMED and honoured by L-24.** |
| **AD-01C** | **Q6 NOT reopened, NOT narrowed, actively protected.** **T-4 quoted verbatim from §6, §5 and §2.2 D6 and its meaning taken from those originals.** **D6 is CONFIRMED and used three further times (L-1 iv, Alt 4, L-21).** **§2.2's characterisation of the CP's dispute as *genuine* is upheld without softening.** **T-1, T-3, T-6, T-7, T-8, T-9, T-10, T-11 NOT resolved; T-3 and T-9 gain sharper statements (L-21, L-11).** **A-3 is NOT made here either.** **T-5 NOT reopened.** **→ A-10.** |
| **AD-01E** | **U-4 CONFIRMED and relied upon — no dormancy threshold exists in the sources and none is proposed; C-VIII constrains a horizon's *base* and supplies no number.** **U-17 gains a further timing expression through A-11. U-1 … U-20 otherwise not resolved.** |
| **AD-01F** | **§12.4's prohibition on re-engagement restating a closed period CONFIRMED (C-II, B-1). §13's reporting rows neither extended nor narrowed. V-4 remains OPEN and its collision with AD-01I's V-4·reactivation (I-14) is preserved.** |
| **AD-01G** | **V-1, G-1, G-2, §5.1's Inquiry definition CONFIRMED and used unchanged. V-7 NOT reopened. V-24 untouched.** |
| **AD-01H** | **V-2, V-3, H-4, H-6, H-8, H-9, H-10 CONFIRMED. H-4's terminal-once property is what makes B-1 true. Y-1, Y-3, Y-4, Y-5 NOT resolved.** |
| **AD-01I** | **V-11, V-12, I-4 … I-8 and I-13 CONFIRMED and NOT redefined. I-6/I-7 do new work in C-VIII's elimination of *last contact*. Z-2 and Z-5 remain open and untouched; Z-5 and P-α are again shown to need the same input.** |
| **AD-01J** | **J-2 (as bounded by K-50), J-9, J-16, J-19, J-29, J-30, J-31, J-34, J-36, J-37, J-38, J-42, J-46, J-48, J-50 CONFIRMED. C-I … C-IV adopted unchanged. AA-1, AA-2, AA-3, AA-5 NOT resolved; AA-4 is re-posed, NOT resolved (A-9). A-6 relied upon and still NOT made.** |
| **AD-01K** | **K-18, K-48, K-47, K-22, K-26, K-23, K-25, K-28 … K-30, K-40, K-50, K-51 … K-58 CONFIRMED. C-V and C-VII adopted unchanged; C-VI adopted with A-11's refinement named and not made. K-22 confirmed from a second direction and generalised (L-6). K-30 generalised into C-X. K-21's cost (a) narrowed by A-9. P-α … P-δ adopted as the correct reduction and narrowed by L-6, C-VIII and C-IX — none of them SET. AB-1, AB-2, AB-3 NOT resolved and carried forward unchanged.** |

---

## 13. Architect recommendation

> ⟦ARCHITECT RECOMMENDATION — consolidated⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Every item sits in Master Spec
> **§88**'s MUST-ASK column. Nothing below may be built, seeded, migrated to, scaffolded or prototyped.)*

**L-3 — The commercial boundary is the Inquiry's terminal boundary, and it is CLOSED TO CLAIMS AND OPEN
ONLY TO CITATION.** **B-1** — no claim, resolved attribution, adjudication, entitlement, source, campaign
or disposition on a terminal Inquiry has any effect on any other Inquiry, in any branch, ever; this half
is architecture and is not the owner's to set. **B-2** — the only commercial relation that may exist
across the boundary is a **new claim minted on the later Inquiry at its gate evaluation, by an explicit
authorized act, carrying a citation of a determinate predecessor Inquiry as its stated ground**. **Whether
the system mints one is the whole of T-4's remainder.**

**L-1 (iv) — T-4's verb was the problem.** Nothing *reaches*. AD-01C §2.2 D6 said so in its own words —
*"the original claim **persisting** … is a policy **silently created by the data model**"* — and **C-VII**
completed the correction without drawing it. **The owner should be asked B-2, and only B-2.**

**L-6 — K-22 is confirmed from a second direction and generalised from a value to a side of the
dimension.** A Dimension-A invalid closure is a **determinate NON-predecessor**, so **C-III is
contradicted by it rather than satisfied by it**. Because the argument turns on the dimension's meaning
rather than on its values, **K-22's negative side is answerable today and is NOT gated on N-4. P-α's
positive side is fully gated on N-4 — the fifth document to find N-4 blocking downstream work.**

**C-VIII — if a horizon exists, it is measured from the cited predecessor Inquiry's own closure event.**
*Last contact* and *last customer-generated event* are eliminated because a **work act must never extend a
commercial claim's life** (**I-6/I-7**, **J-16**) and because a moving base is not determinate at the gate
(**C-VI**). **No number is proposed; U-4 stands.**

**C-IX — P-δ is not a free three-way commission parameter.** *Supersede* and *rank below*, if binding,
**resolve a §11 contest by rule**, and **§11 reserves resolution to builder-side authorized leadership**.
Either P-δ = **contest**, or the owner is amending an **authorization rule under §88**. **AD-01K's framing
of P-δ as one of four commission settings does not surface that, and it changes what the owner is being
asked to approve.**

**C-X — a citation's ground must be immutable, and T-4 is the only one of the three reach questions whose
ground is.** A Dimension-A closure with its preserved reason cannot change (**§8.3**, **R6**); an
entitlement can (**§33**, **§26**). **This generalises K-30, independently corroborates K-26's structural
soundness, and constrains any future answer to AA-3 — while reopening and resolving neither.**

**A-9 — AA-4 is posed at the wrong end, and the "yes" branch is cheaper than AD-01K priced it.** What
citation needs is a **claim→Inquiry citation**, not an **Inquiry→Inquiry succession reference**. The
claim-borne form **creates no relation between the engagements**, and therefore **does not collide with
merge linkage (T-3) and raises no chain-depth question (T-11)**. **Named, not made.**

**L-21 — a duplicate Inquiry is never a T-4 case.** It is a data defect whose remedy is correction
(**T-6/T-7/T-8**) and merge (**Q10**). **A merge asserts two records are one engagement; a citation
asserts they are two. The same artefact must never carry both claims about identity.**

**L-15 / L-16 / L-17 — the Inquiry has exactly three established conditions, and T-4 adds none.**
Non-terminal (derived); terminal-converted; terminal-closed with a classified, preserved reason. **Of the
six conditions the task names, three are states of other objects (discharge → the entitlement;
cancellation → the Booking; re-engagement → a new Inquiry), one is the non-terminal condition renamed, one
is established, and one — a bare interest distinct from an active one — is NOT established and is AA-2's.
No state is invented. T-4 is state-neutral in every branch.**

**L-13 — a fifth cost of the "yes" branch, which AD-01K did not price.** Citation converts cheap
registration volume into forward options on future sales, and **§11 is the one place in the sources that
names attribution manipulation as a live hazard in its own words.** **K-22 is the primary control against
it — a second reason K-22 is load-bearing beyond its own case — and the control only works if closures are
classified honestly, which is AC-1.** **This is a cost for the owner to weigh, not an argument for any
setting of P-α.**

**L-19 — the owner's question, in the owner's own language.** Consolidated **§7** already narrates the
sequence: CP registers → Dumped → manager redistributes to a fresher → the fresher's call regenerates the
inquiry → it books. **The decision the owner must make is: *does CP A get paid on that booking?*** **That
question is answerable by a project owner; *"what is P-α"* is not.** ⟦BUSINESS DECISION REQUIRED⟧

### 13.1 What this recommends about BUILDING, which is not the same as what it recommends about POLICY

> ⟦ARCHITECT RECOMMENDATION — L-28, build posture⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** **This is a statement about sequence and about what may not be built. It is NOT an
> answer to P-α, P-β, P-γ or P-δ, and no branch of any of them is preferred, ranked or hinted at.**)*
>
> **Until the owner sets B-2, nothing may be built that presupposes either answer — and the asymmetry is
> that the "no citation" shape presupposes nothing.** Alt 1 requires no AA-4 artefact, no claim-borne
> citation, no derived-claim concept, no gate-time determination act, no enlarged §11 population and no
> **AC-1** authorization change. **Every artefact of the "yes" shape, built early, decides B-2 by
> implementation** — which ⟦SOURCE⟧ **PO-22 / consolidated §30** forbids: *"No schema/code implementation
> should be inferred from an unresolved product ambiguity."*
>
> **Specifically NOT to be built meanwhile:** no claim table, no attribution column on any record, no
> Inquiry-succession or claim-citation reference, no reach or eligibility flag, no clash queue, no CP-portal
> attribution view, no commission scaffolding of any kind, and **no Dump-reason value list.**

### 13.2 The costs of this recommendation, priced without softening

| Cost | Statement | Label |
|---|---|---|
| **The genuine dispute is not removed** | AD-01C **D6**'s dispute is real and **§39** guarantees the CP will see enough to raise it. **The architecture makes it visible and adjudicable; it does not make it go away, and nobody should approve this expecting it to** | ⟦ARCHITECT ANALYSIS⟧ |
| **This document does not answer the money question, and that is its fifth consecutive deferral** | AD-01J named T-4's constraints; AD-01K named its parameters; **this document names its boundary and narrows three of the four parameters — and the owner has still not been given a yes or a no, because an architect cannot supply one (PO-22, §86)** | ⟦ARCHITECT ANALYSIS⟧ |
| **C-IX reclassifies part of P-δ out of the commission bucket** | If C-IX is right, two of P-δ's three branches are **§88 authorization changes**, which raises the approval bar on a parameter AD-01K presented as commercial policy. **The owner may reasonably dispute C-IX by holding that a precedence policy applied by leadership is not a systemic resolution — that reading is available and C-IX does not close it** | ⟦ARCHITECT ANALYSIS⟧ |
| **L-6 narrows a money question further, again by an architect** | AD-01K's §15.1 already flagged that **K-22 closes one branch by entailment rather than by the owner**. **L-6 widens that closure from a value to a side of a dimension. The owner should ratify or reject L-6 explicitly, not by silence** | ⟦ARCHITECT ANALYSIS⟧ |
| **Three named amendments become eleven** | **A-1 … A-11 are now eleven unmade amendments across six documents, three of them money-bearing (A-6, A-7, A-9).** AD-01K already called the register *"becoming unusable."* **It is worse now** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 14. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and consolidated **§1** and **§30**, none is guessed. The new item is
> numbered **AC-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y / Z /
> AA / AB** namespaces.

### 14.1 New item raised by this document

| # | Question | Arises from | Source status | Why it cannot be left to implementation |
|---|---|---|---|---|
| **AC-1** | **If a Dump reason's Dimension-A classification determines whether a forward attribution claim can be minted, does setting that reason require a different authorization, confirmation or verification posture than it has today — and if so, whose?** *(Conditional: arises if and only if T-4's answer is anything other than "no citation, ever.")* | **L-18**, **L-13** | ⟦SOURCE⟧ **§13** provides *"one-tap dispositions"* and simultaneously *"do not remove confirmations that are necessary for data integrity."* ⟦SOURCE⟧ **§95**: *"a one-tap action that creates financial corruption is worse than a three-tap action that prevents it."* ⟦SOURCE⟧ **§11** names attribution manipulation as a hazard and reserves attribution resolution to authorized leadership. **No source addresses the authorization posture of the disposition reason itself.** | **A financially consequential act would be performed by the lowest-privileged user on the fastest control in the product.** Left to implementation, the disposition screen is built to §13's speed standard and the money consequence arrives later. **It is also §88's authorization column, which PO-22 forbids inferring.** **No workflow, gate, approval step or screen is proposed here** (AD-01A §8.5). |

### 14.2 T-4's remaining commercial half — the decision itself

> ⟦BUSINESS DECISION REQUIRED — T-4's commercial half, at its correct subject, NOT answered⟧
>
> **For a prior Inquiry closed under a Q7 Dimension-A class on the VALID side — a real engagement that
> failed — may the system mint a new claim on a later, separately-sourced Inquiry by the same Person,
> naming the earlier producer and citing that closed Inquiry as its ground?**
>
> **Four parameters. AD-01K named them; this document narrows three and sets none.**
>
> | # | Parameter | Narrowed how, here | Still open |
> |---|---|---|---|
> | **P-α** | **Class map** — which Dimension-A classes admit citation | **L-6**: the **invalid side** admits none, as a class, independent of N-4. **L-7**: Dimension B is an available input alongside A and C | **The positive side is entirely open and fully gated on N-4.** |
| **P-β** | **Scope** — same project only, or across projects | **Not narrowed.** ⟦ARCHITECT ANALYSIS⟧ recorded honestly: **there is no source support for cross-project citation at all.** The only source text describing a producer's relation to a *customer* rather than an *engagement* is §06's `CP Ledger` = *"the CP relationship"*, which **K-48** already uses for the **payee identity**, not for reach. **Same-project citation has one support — AD-01C D6's own characterisation of the dispute as genuine; cross-project has none.** **That asymmetry is recorded and is NOT a recommendation.** | **Fully open.** Coupled to **AA-1** and **Y-3**. |
| **P-γ** | **Horizon** | **C-VIII**: if one exists, it is measured from the cited predecessor's closure event; the other two candidate bases are eliminated | **Whether a horizon exists, and its number, is entirely the owner's. AD-01E U-4 CONFIRMED: none exists in the sources.** |
| **P-δ** | **Mode** | **C-IX**: *supersede* and *rank below*, if binding, are **§88 authorization changes to §11**, not commission settings | **Fully open — but the owner should be told which column of §88 each branch sits in.** |
>
> ⟦SOURCE⟧ **§11, §32, §33, §39, §40 and §41 are silent** on the temporal reach of an attribution claim —
> AD-01C §5, re-confirmed independently by AD-01J, by AD-01K and by this document's own pass. ⟦SOURCE⟧
> **PO-22** makes inventing it a **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**.
>
> **No new number is minted: T-4 owns this question** (AD-01I §13.2's discipline). **No branch of any
> parameter is preferred, recommended, ranked or hinted at anywhere in this document.**

### 14.3 Items carried forward unchanged

| Item | Owner | Status after this document |
|---|---|---|
| **AB-1** — Booking-Group multi-applicant entitlement | AD-01K | **NOT resolved. T-4 does not require it. Carried forward UNCHANGED.** |
| **AB-2** — §26 unit-transfer entitlement identity | AD-01K / §26 CFO validation | **NOT resolved. T-4 does not require it. Carried forward UNCHANGED.** |
| **AB-3** — CP sub-agent payee | AD-01K / §32 legal-tax validation | **NOT resolved. T-4 does not require it. Carried forward UNCHANGED.** One §44 caveat recorded in [§10](#10-commission-eligibility-implications) is AB-3's own exposure, not a new one. |
| **T-5** | AD-01C / **K-26** | **NOT reopened. K-26's no-reach-across-a-discharged-claim finding is PRESERVED EXACTLY and independently corroborated by C-X. K-26's ground clarified as the entitlement, not the payout (L-26) — which is not a reopening.** |
| **AA-3** — re-engagement after Booking cancellation | AD-01J / AD-01K | **NOT resolved. Constrained by C-X: any answer must state what happens when its ground unwinds.** |
| **AA-1, AA-2, AA-5** | AD-01J | **NOT resolved. AA-2 additionally owns the *bare interest* question (L-15).** |
| **AA-4** | AD-01J | **NOT resolved — RE-POSED as a claim-borne citation (A-9), which is cheaper and collision-free. Still conditional on B-2.** |
| **N-4** | AD-01A | **NOT resolved. Confirmed on P-α's critical path for the fifth time; de-gated from K-22's negative side by L-6. No value proposed.** |
| **Z-2, Z-5** | AD-01I | **NOT resolved, NOT narrowed. Z-5 and P-α again shown to need the same input.** |
| **T-1, T-3, T-6 … T-11, Q10, Q11, M-5's uniqueness half, M-9, U-17, V-4, V-7, Y-1, Y-3, Y-4, Y-5, W-1** | Various | **None resolved, narrowed or branched. T-3 and T-9 gain sharper statements only (L-21, L-11).** |

---

## 15. Recommended next architecture decision

> ### **The Product Owner's commercial sitting — B-2 with P-α … P-δ, AA-3, AA-1, AA-2, AA-5, AB-1, AB-2, AB-3 and AC-1 — taken as ONE sitting, together with the ratification of A-1 … A-11. It is not an architect deliverable and it should not be scheduled as one.**

> ⟦ARCHITECT RECOMMENDATION — sequence only⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **This
> is a recommendation about SEQUENCE. No answer to B-2, to any parameter, to any A-item or to any open
> question is proposed, implied or preferred.**)*

1. **AD-01K recommended AD-01F's V-4 next and explicitly ruled the commercial sitting out as *"not an
   architecture decision."* That was correct then and it is no longer sufficient now.** With this
   document, **every architectural input to B-2 exists**: the boundary is stated (L-3), the question is
   reduced to a licence (B-2), one branch is entailed and generalised (K-22/L-6), the horizon's base is
   fixed (C-VIII), the mode's true §88 column is identified (C-IX), the ground-stability requirement is
   stated (C-X), and the artefact the "yes" branch needs is now known to be cheaper than priced (A-9).
   **There is nothing left for an architect to add before the owner decides. A sixth architect document
   on T-4 would be analysis substituting for a decision.**
2. **AD-01F's V-4 remains the cheapest unblocking question in the register and this document does not
   lower its priority.** It is one question, has no prerequisites, and gates **H-5's three *New*
   predicates**, **FUT**, every first-response variant, **W-1**, **W-4**, AD-01I §10.1 rows 9–10 and
   **V-18's feed half**. **Four consecutive documents have now recommended it and it has not been
   taken.** **It does not block B-2 and can be taken in the same act.**
3. **A-1 … A-11 must be ratified in one written act.** Eleven unmade amendments across six documents,
   three money-bearing (**A-6** — J-2 misfires on §26; **A-7** — J-33's over-statement would steer a
   double payment; **A-9** — AA-4 is posed at the wrong end). **The owner cannot approve AD-01J as
   literally written AND AD-01K AND this document. Ratifying the series costs no analysis and removes a
   class of latent contradiction.**
4. **N-4 should be scheduled immediately after the sitting, not before it.** **P-α's positive side is
   unanswerable without values, and the values are unanswerable without knowing whether they carry a
   financial consequence** — which is what the sitting decides. **Taking N-4 first would mint a reason
   master that has to be revisited.**

**Explicitly NOT recommended next: M-9, the commission model.** It consumes **K-18, K-48, K-47, B-2's
answer, K-26, AA-3, AB-1, AB-2, AB-3** and now **AC-1**. **Taking it before the sitting would require
inventing every one of them.**

**Explicitly NOT recommended next: the Booking state machine.** **AB-1** and **AB-2** are questions *for*
it; designing it now would decide them by implementation, which consolidated **§30** forbids.

**Explicitly NOT recommended next: M-5's uniqueness half.** It is a real blocker and genuinely independent
(**K-4**), but it is a **duplicate-detection and matching question** and should be taken as one — **and
per A-10 it is no longer a prerequisite of T-4 at all.**

**What must not happen in the meantime.** Nothing in [§13.1](#131-what-this-recommends-about-building-which-is-not-the-same-as-what-it-recommends-about-policy)'s
prohibited list may be built, seeded, migrated to, scaffolded or prototyped. ⟦SOURCE⟧ Consolidated **§30**:
*"No schema/code implementation should be inferred from an unresolved product ambiguity."* **The Lead /
Client architecture, the attribution model and the commission model are all unresolved until the project
owner approves in writing.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED**

**NOT APPROVED FOR IMPLEMENTATION.**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. **No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it.** **No commission formula, rate, slab, percentage, amount,
milestone value, clawback quantum or TDS treatment appears anywhere in it.** **No UI, screen, workflow,
approval step or gate is proposed.**

**No prior document is modified by this one.** **AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G,
AD-01H, AD-01I, AD-01J and AD-01K are all unedited.** The three amendments this document finds necessary —
**A-9**, **A-10** and **A-11** — are **named and NOT made**, and **only the Project Owner may make them**.

**Q1, Q4, Q5, Q6, Q7, V-1, V-2, V-3, V-11, V-12 and AD-01K's K-18 attribution recommendation are NOT
reopened.** **T-5 is NOT reopened, and AD-01K's K-26 — no commercial reach across a fully discharged
attribution claim — is preserved exactly.** **AD-01K's AB-1, AB-2 and AB-3 are NOT resolved and carry
forward unchanged.**

**T-4's architectural half is resolved here as the boundary statement L-3 (closed to claims, open only to
citation) together with C-VIII, C-IX and C-X. T-4's commercial half — B-2, and with it P-α, P-β, P-γ and
P-δ — is `BUSINESS DECISION REQUIRED` and is the Project Owner's alone.** Per Spec **Rule 1**: *do not
invent requirements.* Per **§97**: *when in doubt, STOP AND ASK.* **This document is the asking.**

**Delegation to an architect is not authorization** (AD-01A §7). **Nothing here may be treated as settled
until the project owner approves it in writing.**
