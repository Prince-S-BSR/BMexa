STATUS: PROPOSED — NOT APPROVED

# AD-01G — Lead / Client Identity (V-1) and History Visibility (V-7)

> This document resolves **exactly two** items — **V-1** and **V-7** from AD-01F §16.1 — and resolves
> nothing else. It contains no SQL, no schema, no migration, no column/table/type name, no
> implementation and no UI/visual design. Both items sit in Master Spec **§88**'s **MUST ASK BEFORE
> DECIDING** column (canonical entities, relationships, authorization rules, source-of-truth rules).
> Per AD-01A §7, **delegation to an architect is not authorization.** This document is the asking.

| | |
|---|---|
| **Document ID** | AD-01G |
| **Type** | Decision analysis resolving AD-01F **V-1** and **V-7**. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C, AD-01E or AD-01F. **None of those files is edited by this document.** |
| **Scope** | (1) What a *Lead* is; what an *Inquiry / Project Interest* is; how Lead, Inquiry and Activity relate. (2) The conceptual boundary on which historical visibility is evaluated; how *transfer with history* and *transfer without history* are represented; whether *Custody Interval* must be a distinct entity. |
| **Explicitly out of scope** | **Q4 and Q6 are not reopened.** **Q2, Q3, Q5, Q8–Q16**, **N-1…N-4**, **T-1…T-12**, **U-1…U-20**, all **V-items other than V-1 and V-7**, and blockers **M-2…M-20** are **not resolved**. Dump semantics are **not finalised** — §13 is a scope note only. |
| **Contains SQL / schema / migration / UI design** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (tenant isolation), **R2** (no branching on role names; union-without-deny in the permission system), **R4** (masters not enums; semantics in columns), **R5**, **R6** (append-only; never edit history), **R12** (every claim traceable to this repository's own documents); Spec **Rule 1** and consolidated-requirements **§1** (do not invent requirements — silence is recorded, never filled). |
| **Baseline treated as the thing to test** | **AD-01F.** Per this task's framing, AD-01F's analysis is the baseline to test, refine or overturn — not to re-derive and not to defer to. Where this document **refines** or **partly overturns** AD-01F, it says so by section. |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PRODUCT-OWNER DIRECTION⟧** | A statement, preference or fact recorded by the Product Owner — in `BMEXA_MASTER_SPEC.md`, in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, or in AD-01A §8 / AD-01E §1.1. **A recorded preference is evidence, not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A finding derived from those sources. Mine to defend. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED.** |
| **⟦BUSINESS DECISION REQUIRED — W-n⟧** | The sources are silent or in conflict, and nothing here fills the gap. Numbered **W-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V** namespaces. Consolidated in [§15](#15-business-decisions-required). |

**Terminology warning, load-bearing throughout.** The word *Lead* names two different things in the
approved corpus — Master Spec **§06** (*"a relationship between a Person, Project, and sales
process"*) and consolidated requirements **§4** (*"Lead / Client Sales Record — long-lived sales
record used by the team to work the customer over time"*). Until [§4](#4-recommended-lead-definition)
this document therefore says **§06 Lead**, **working record** or **inquiry** rather than *Lead*
wherever ambiguity would mislead. That the word is overloaded is not a drafting nuisance; it is the
substance of V-1.

---

## 1. Product Owner direction

> **⟦PRODUCT-OWNER DIRECTION⟧** Recorded first, verbatim in substance, before any analysis, so that
> the analysis can be checked against it rather than substituted for it.

### 1.1 On what a Lead is — two sources, both Product-Owner-authored

| # | Source | Statement |
|---|---|---|
| **P-1** | Master Spec **§06** | *"**Sales Lead** — A relationship between a Person, Project, and sales process. A Lead is NOT merely a status value on Person. The Sales Lead relationship must exist as its own business record."* |
| **P-2** | Master Spec **§07** | *"Person = identity. Sales Lead = sales relationship/process. Customer = contextual role associated with a transaction… A Person can have multiple leads, interact with multiple projects… Do not destroy historical identity when status changes."* |
| **P-3** | Consolidated **§4** | *"the Sales Rep thinks in terms of a **client-centric working record** rather than a bare status row."* Concept table: *Person / Client* · ***Lead / Client Sales Record*** (*"Long-lived sales record used by the team to work the customer over time"*) · ***Project Interest*** (*"a client may show interest in **multiple projects over time**"*) · *Activity / Timeline* · *Assignment* · *Next Action* · *Disposition / Lifecycle* · *History visibility*. |
| **P-4** | Consolidated **§7** | *"The client may then show **more than one project interest on the same record**."* |
| **P-5** | Consolidated **§13** | *"The client record can contain customer details **and multiple project interests**… The timeline should record the new inquiry event rather than silently overwriting the previous interest."* |
| **P-6** | Consolidated **§13**, **§28** | *"define the exact boundary between an additional project interest on the same Lead and a genuinely new sales opportunity"* — listed **OPEN**. |
| **P-7** | Consolidated **§31** | *"Keep Lead identity, lifecycle, activities, next actions, assignment, attribution and history visibility conceptually separate."* |

### 1.2 On history visibility

| # | Source | Statement |
|---|---|---|
| **P-8** | Consolidated **§6** | *"**Transfer with history** — management may **deliberately** give the receiving handler access to the historical timeline."* / *"**Transfer without history** — management may **deliberately** give the receiving handler a fresh working view without prior employee conversation/follow-up history."* / *"history visibility must be enforced at authorization boundaries and not rely on the UI merely hiding old rows."* |
| **P-9** | Consolidated **§16** | *"Transfer may include a management decision about whether prior history is visible to the receiving employee."* Transfer is individual **or bulk**, within the reporting hierarchy, and is *"represented as a historical event."* |
| **P-10** | Consolidated **§17** scenario table | *"Same original handler receives the re-engaged/redistributed Lead → Original history **may** be visible to that handler."* · *"Sales Head explicitly transfers revived lead back to historical handler → Original handler **may** see prior history."* · *"Automatic assignment sends revived lead to a different/new handler → New handler does **not automatically** see prior employee history."* · *"Sales Head / authorized reporting manager → **Broader visibility** of historical context."* · *"Transfer without history → Receiving employee works the record as a **fresh context** without seeing prior conversation/follow-up history."* · *"Transfer with history → Receiving employee sees the prior timeline/history **permitted by the management action**."* |
| **P-11** | Consolidated **§17** | *"the underlying Lead history can **remain intact** while the receiving handler's visibility differs."* **Core security principle:** *"history visibility is an authorization decision and must not be implemented **solely by hiding UI elements**."* |
| **P-12** | AD-01E **§1.1** (recorded PO direction) | The historical record must **never** be *"deleted, reset, copied into a new lead, or rewritten merely because visibility differs."* **Explicitly rejected as insufficient:** `original_handler_id = current_handler_id`. |
| **P-13** | Consolidated **§28** | *"Whether automatic return to a historical handler grants the same historical visibility as explicit Sales Head assignment"* — listed **OPEN**. *"Exact 'with history' / 'without history' transfer semantics and their authorization boundaries"* — listed **OPEN**. |
| **P-14** | Spec **§11** | *"The UI visibility rule must be enforced by authorization — not merely by hiding a badge."* |

### 1.3 Decisions treated as fixed input, not reopened

> **⟦PRODUCT-OWNER DIRECTION⟧** From **AD-01A §8** and **AD-01C §3.7**, treated as binding:
> Q1 — lifecycle is four values *New / Follow-up / Success / Dump*, *Pending* rejected, Today /
> Future / Overdue derived. **Q4 — Success = §20 Stage 3 Booked**, Booking keeps its own lifecycle,
> a cancelled booking never rewrites a historical Success. Q7 — the three-dimension Dump-reason
> framework, mandatory reason, preserved reason. Sync ≠ verification. **No persisted assignment
> axis**; Owner / Handler / Assignment Log carry assignment information; no reassignment-approval
> workflow is to be invented. **Q6 — Success is terminal to ordinary lifecycle transitions;
> corrections sit outside the ordinary machine; a genuinely new opportunity after a Success is a new
> commercial unit.** **Neither Q4 nor Q6 is reopened anywhere in this document.**

### 1.4 The provisional preference, recorded and then deliberately set aside

> **⟦PRODUCT-OWNER DIRECTION⟧** The Product Owner's stated provisional preference is the
> **Person → Lead (working record) → Inquiry / Project Interest** shape (Model B below).
>
> **⟦ARCHITECT ANALYSIS⟧** It is recorded here and then **not used as an argument anywhere in
> §§2–6.** A recorded preference is evidence about the operation, never a warrant for an
> architecture — the same standard AD-01E §11.1 applied to the revival direction, and the same
> standard AD-01F §5.1 applied when it declined to give AD-01E's episode the benefit of incumbency.
> Model B is tested below on the operation and on the corpus, and it is tested for **failure** as
> hard as for fit.

---

## 2. V-1 problem statement

> **⟦ARCHITECT ANALYSIS⟧**

### 2.1 The conflict, stated exactly

**P-1/P-2** and **P-3/P-4/P-5** are both Product-Owner-authored and they describe different entities.
Under **P-1**, one Person interested in three projects has **three** Sales Leads. Under **P-3/P-4**,
that Person has **one** record carrying three project interests. AD-01F **C-1** established this and
the finding survives re-examination unchanged.

### 2.2 Why the conflict is not survivable by deferral

The consequences are not symmetric and not recoverable:

| Consequence | If the working unit is wrong | If the commercial unit is wrong |
|---|---|---|
| **The rep's day** | One call to a client interested in three projects must be recorded as three follow-ups, against three next-action commitments, three FUT counters and three queue rows (consolidated §4, §9, §10). | — |
| **Attribution and commission** | — | A claim recorded against the wrong unit cannot be re-keyed two years later; nobody can recover which of a record's three interests a 2026 claim concerned (§32/§40, M-5, V-16). |
| **The funnel** | A client with three interests and one booking reports as 100% conversion; the two lost interests vanish from the denominator (AD-01F §6.4). | — |
| **Project scope (§08)** | A record with no single project has nothing to evaluate project scope against (AD-01F C-9). | — |
| **History visibility** | Nothing bounds *"prior history"* for a transfer-without-history (AD-01F C-2). | — |

**⟦ARCHITECT ANALYSIS⟧** Every one of these is a *recording* decision, not a *presentation*
decision, and recording decisions are the ones **R6** makes permanent. This is AD-01B §4's
rework-asymmetry standard — *cheap before history accumulates, unrecoverable after* — applied to the
root of the model.

### 2.3 The sub-question the task requires be answered, and why it is separate

If one working record may hold multiple Inquiry / Project-Interest records, three things that the
sources currently blur must be held apart:

1. **A new inquiry** — a dated, sourced expression of interest arrives.
2. **A new commercial opportunity** — a new unit of counting: a new denominator entry, a new
   attributable engagement, a potentially new CP claim.
3. **A new Lead** — a new work unit with its own handler, queue row, next action and timeline.

> **⟦ARCHITECT ANALYSIS⟧ These are three different things and the sources do not currently state
> the mapping between them.** Consolidated §13 and §28 both list the boundary between (1) and (2) as
> explicitly open. AD-01F's **V-14** records the same silence and is **confirmed, not refuted**, by
> this pass — see [§5.4](#54-added-interest-regenerated-inquiry-and-genuinely-new-commercial-opportunity)
> and [§13](#13-dumpre-engagement-implications). What this document *can* establish — and does — is
> that under one of the candidate models the undecided rule does **not** have to be answered at
> capture time, and under the others it does. That is a decision-relevant finding about the models,
> not an answer to V-14.

---

## 3. Lead identity alternatives

> **⟦ARCHITECT ANALYSIS⟧** Each model is stated at its strongest, then tested. **No model is given
> the benefit of incumbency and none is given the benefit of the Product Owner's preference.** Tests
> T1–T7 are AD-01F §5.1's, retained because they are sound and because re-deriving them would waste
> the owner's time; **T8–T14 are new to this document** and cover the axes the task names that
> AD-01F's table did not test head-on.

### 3.1 The four models

**Model A — `Person → Lead (= Person × Project × process) → Activities`.**
The literal §06 reading. One lead per project per person. Project, source, campaign, outcome,
attribution and terminality each have exactly one unambiguous home. No intra-record boundary exists
anywhere in the product.

**Model B — `Person → Lead (client sales working record) → Inquiry / Project Interest → …`, with
Activities and Assignment history on the working record.**
The working record is Person-bounded and long-lived; the inquiry is the dated, sourced,
project-contexted commercial unit.

**Model C — `Person → Lead → Sales Episode → Project Interest → Activities`.**
AD-01E's model. The Lead remains §06's Person × Project relationship; the *episode* is the bounded
engagement, opened by revival and closed by a terminal disposition; interests sit inside episodes.

**Model D — `Model A + a Person-level derived working view`.**
The §06 Lead is untouched; the rep's queue row, timeline and next action are a **derived
aggregation** across the Person's open leads. (AD-01F's ALT-4; AD-01E's Alt-4.) Recorded because
AD-01E §11 R8 and AD-01F §14 both insisted it be put to the owner explicitly, and that insistence
was correct.

### 3.2 The test table

| # | What the operation actually does, and where it is recorded | A | B | C | D |
|---|---|---|---|---|---|
| **T1** | One call to one client produces **one** follow-up, one FUT increment, one next-action commitment, regardless of how many projects are in play (§4, §9, §10; one-row-per-client queue, §12) | **No** | **Yes** | **No** | Partly |
| **T2** | A returning client's inquiry **for another project** attaches to the same record and appears on its timeline (§7, §8, §13) | **No** | **Yes** | **No** — AD-01E §3.1 routes cross-project to a new Lead | Partly |
| **T3** | Each engagement carries its **own** enquiry date, source, campaign, channel, enquiry-from and requirement (§5, §12) | Yes (one per lead) | **Yes** — on the inquiry | Yes — on the episode | Yes |
| **T4** | Conversion, source quality and CP attribution key on **the engagement that converted** (AD-01C D4/D5/D6; AD-01E U-15) | Yes | **Yes** — inquiry | Yes — episode | Yes |
| **T5** | A manager hands a **live, never-dumped** record to a new handler **without prior history** (§6, §16, §17) | **No** — nothing bounds *"prior"* | **Yes** | **No** — a mid-Follow-up transfer crosses no episode boundary (AD-01F C-2) | **No** |
| **T6** | A manager **redistributes a dumped record to a fresher** with no customer event (§7) | Partly | **Yes** | **No** (AD-01F C-6) | Partly |
| **T7** | **§08 project-scoped** authorization and project-level reporting stay evaluable | **Yes**, record-level | Weakened — moves to the inquiry | **Yes**, record-level | **Yes** |
| **T8** | **Duplicate detection vs. clash detection are different questions** — §09 duplicate detection asks *"is this the same human?"*; §11 clash asks *"do two producers claim this engagement?"* | Conflated: the duplicate unit and the claim unit are the same record | **Separated cleanly**: duplicates are a Person question (M-5), clashes an inquiry question | Separated | Conflated at the lead |
| **T9** | **§11 clash across projects.** The same Person is brought by CP-1 for Project A and by CP-2 for Project B | **Cannot be posed** — two unrelated leads, one claim each, no place to ask the question | **Posable** — both claims hang under one Person/record and the clash test is a stated policy over that set | Posable only if episodes are Person-grouped, which AD-01E §3.1 forbids | Posable in the view only |
| **T10** | **First-response time** is measured and surfaced (§9; *"First response logged in 7 minutes"*) | Three clocks for a three-project client; one call stops one or all — undefined | Record/custody clock **and** per-inquiry clock, both well-defined (**W-4**) | Episode clock; the record's is undefined | Aggregation ambiguous |
| **T11** | **Person identity** is preserved and not duplicated (§06, §07) | **Yes** | **Yes** | **Yes** | **Yes** |
| **T12** | **Project-level sales context** — *"what is happening on Project A"* | **Yes**, trivially | Yes, by inquiry | Yes | Yes |
| **T13** | **Success / Booking** attaches to what actually transacted; the observed queue carries *Project Name* **and** *Booked Project* as two columns | Yes | **Yes** — converting inquiry references the Booking | Yes | Ambiguous — which underlying lead booked? |
| **T14** | **The capture-time decision is separable from the undecided commercial rule (V-14).** When a re-contact arrives and nobody has yet decided whether it is a new opportunity | **No** — the capturing user must decide *now* whether to create a new Lead; the decision is unrecoverable | **Yes** — the inquiry event is recorded faithfully; its commercial classification is a later, appendable judgement | **No** — the user must decide *now* whether to open a new episode | **No** — same as A |

### 3.3 What the table shows

> **⟦ARCHITECT ANALYSIS⟧**
>
> **Model A fails T1, T2, T5, T6, T14 and cannot pose T9.** T1 and T5 are not edge cases; they are
> the rep's most frequent action and the manager's stated control. A model that cannot express the
> two most common operations in the described business is not a candidate, however clean its scoping
> is. Model A's genuine advantage is **T7** alone.
>
> **Model C (the Sales Episode) earns its place on T3 and T4 only** — and on both, the inquiry does
> the identical job with the decisive advantage that **the business already has it, names it, dates
> it, sources it and field-lists it** (§5, §12, §13), where the episode is architect-derived.
> AD-01E §3.3 was **right** that revival needs a bounded unit and that *"a visibility rule cannot be
> scoped to a unit that does not exist"*; it was wrong only in concluding the unit had to be **new**.
> On T2, T5, T6 and T14 the episode is either irrelevant or actively wrong.
>
> **Model D fails on a structural point rather than a preference.** A **single next-action
> commitment cannot be derived** from N leads that each carry one — something must own it, and the
> moment something owns it, the view has become a record. The same applies to one handler, one
> status, one FUT. And a transfer would have to move N leads atomically under one history decision,
> which is a real management operation (P-9, bulk transfer) that the model has no entity to attach
> to. **It should still be put to the owner** — if the underlying requirement is *"the rep should
> see one story"* rather than *"one record owns the work"*, Model D is materially cheaper — and
> establishing which is meant costs one question. (AD-01E R8 and AD-01F §14 ALT-4: both correct,
> both carried forward here.)
>
> **T14 is the finding this document adds to AD-01F's analysis, and it is the strongest single
> argument for Model B.** V-14 — *what distinguishes a genuinely new commercial opportunity from a
> continuation* — is admitted-open by the Product Owner (consolidated §13, §28), has been
> independently confirmed unaddressed by AD-01 §1.3, AD-01C §5, AD-01E §5.2 and AD-01F §12.3, and
> is very likely to remain open into the MVP. Under Models A, C and D, **the undecided rule must be
> answered at the moment of capture, by whoever is on the phone, through the irreversible act of
> choosing which record to create.** Under Model B it need not be: the arrival of an inquiry is an
> observable, dateable, sourceable fact that can be recorded truthfully **before** anyone knows
> whether it counts as a new opportunity, and the commercial classification is added later as an
> appended judgement (R6: a correction is a new row, never an edit). **A model that does not force
> an undecided business rule to be decided by a data-model default is strictly preferable to one
> that does — this is Spec Rule 1 and §88 expressed as a structural property rather than as a
> warning.**
>
> **T7 is the one place Model B costs something real, and it is recorded without softening.** Moving
> project scope from the record to the inquiry converts §08's project boundary into an *intra-record*
> boundary. That cost is **unavoidable under any model that permits plural project interests** and is
> therefore not a cost of choosing Model B over Model D — Model D pays it too, inside its view. It is
> a genuine cost of choosing plural interests over Model A, and the owner should choose it knowingly.
> Its resolution is **V-24**, which this document does **not** resolve.

### 3.4 The framing correction — V-1 is not fully an either/or

> **⟦ARCHITECT ANALYSIS⟧ This is a refinement of AD-01F C-1 and it materially changes what the
> Product Owner is being asked.**
>
> AD-01F posed V-1 as *"is the Lead the client-centric working record **or** the §06 Person × Project
> × process relationship?"* — an exclusive choice. Read literally, **§06 does not require that
> choice.** §06 asserts two things: that a Person × Project × sales-process relationship **must exist
> as its own business record**, and that a Lead is **not merely a status value on Person**. It does
> **not** assert that this record is the only entity between Person and Activity, and it does not
> assert that nothing may sit above it.
>
> **Model B satisfies both of §06's assertions** — provided the **Inquiry / Project Interest** is the
> entity that carries the Person × Project × process relationship and exists as its own business
> record, which is exactly what [§5](#5-inquiry--project-interest-definition) proposes. What Model B
> adds is a **work record above** that relationship, which §06 neither contemplates nor forbids.
> Adding a canonical entity is **§88 MUST-ASK**; contradicting §06 would be a supersession. **This is
> an addition, not a supersession** — a materially smaller and more reversible act, and the owner
> should be told so.
>
> Two things therefore separate, and AD-01F held them together:
>
> 1. **The structural question — how many entities sit between Person and Activity, and which facts
>    attach to which?** This is the decision with the rework asymmetry. It is answered in
>    [§4](#4-recommended-lead-definition)–[§6](#6-lead--inquiry--activity-relationships).
> 2. **The naming question — which of them does the product call *Lead*?** This is lower-stakes but
>    **not trivial**, because the overloading of the word *Lead* is the proximate cause of the
>    contradiction in the first place. It cannot be left to drift. → **W-2**.
>
> AD-01F's ALT-3 and ALT-5 are the same architecture under two namings, and AD-01F said so
> (§14, ALT-5). This document adopts that observation and promotes it: **the structural answer does
> not depend on the naming answer, and the naming answer must still be made deliberately and
> recorded.**

---

## 4. Recommended Lead definition

> **⟦ARCHITECT RECOMMENDATION — V-1⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: canonical
> entities and relationships.)*

**Adopt Model B, structurally: two entities between Person and Activity — a Person-bounded
long-lived work record, and a project-bounded dated commercial record — with the §06 Sales Lead
requirement discharged by the commercial record.**

### 4.1 The work record — *Lead / Client Sales Record*

| Facet | What it is, and is not |
|---|---|
| **Identity** | Bounded by the **Person** within the tenant. It is **not** the Person (§07 keeps identity and sales relationship as different records) and **not** a status on the Person (§06). It is the *relationship-in-progress* with this builder. |
| **Continuity** | **Long-lived** (P-3). It is **not created by an inquiry and not ended by a disposition.** It persists across engagements, handlers, transfers, dumps and bookings. |
| **Interests** | Holds **one or more** Inquiry / Project-Interest records. The project is an attribute of the inquiry, **never** of the work record. Whether interests may be **concurrent** or only **sequential** is **V-2** — *not resolved here.* |
| **Work** | Owns **one** current handler, **one** next-action commitment, **one** queue row, **one** ordered activity timeline, **one** assignment history. This is what T1 requires and it is the whole reason the entity exists. |
| **Assignment** | Is the unit of assignment, transfer and **bulk** transfer (P-9). Owner and Handler remain two references (§10); assignment history is the **Assignment Log** (§06, AD-01A §8.5). |
| **History visibility** | Is the unit the restriction is *applied to*; the interval within it is the unit the restriction is *scoped by* — see [§8](#8-history-visibility-alternatives). |
| **Reporting** | Is the unit of **workload** — FUT, follow-up volume, queue membership, responsiveness, handler performance. It is **not** the unit of **conversion**. |
| **Terminality** | **Has none.** Nothing in the sources describes a client relationship ending. The absence is recorded, not filled (Rule 1). |

**It is emphatically not:** the unit of commercial outcome, of source credit, of CP attribution, of
§08 project scope, or of conversion. Each of those has a different lifetime and a different
authorization rule, and AD-01 §3's own test — *two concepts belong on one axis only if a record can
never legitimately be in both at once* — separates them. The client whose Project-A inquiry converted
while their Project-B inquiry is live is simultaneously *converted* and *actively worked*; one
record-level value cannot hold that.

### 4.2 The commercial record — *Inquiry / Project Interest*

Defined in [§5](#5-inquiry--project-interest-definition). **This is the entity that discharges §06's
Sales Lead requirement**: it is a relationship between a Person, a Project and a sales process, and
it exists as its own business record.

### 4.3 What is explicitly **not** a third entity

> **⟦ARCHITECT RECOMMENDATION⟧ Sales Episode: REJECTED as a distinct canonical entity.**
>
> - **The requirement AD-01E identified is upheld.** A bounded commercial unit is genuinely
>   necessary; AD-01E §3.3's reasoning for it is sound and is not disturbed.
> - **The entity is rejected.** Every property AD-01E §11 R2 required of the episode — its own
>   lifecycle value, source, terminal disposition, preserved reason, attribution claim set and
>   activity association — is carried by the **inquiry**, an entity the business already names, dates,
>   sources and field-lists (§5, §12, §13). Under **R12**, an entity traceable to this repository's
>   own operational evidence is preferable to one derived by an architect; under **Rule 1**, a new
>   canonical concept must not be introduced where an evidenced one serves.
> - **The one property that does *not* move to the inquiry is the handler** — and that is correct,
>   because one handler works the whole client (T1). It moves to the work record.
> - **The residual grouping job is not asked for.** The only thing an episode could still do under
>   Model B is group several inquiries on the same project into one continuous engagement. Nothing in
>   §4, §7, §8, §13 or §28 asks for that grouping; §13 asks only that the new inquiry event be
>   recorded. Introducing an entity for an unasked job is the elegance-without-necessity move AD-01F
>   correctly refused, and refusing it twice is consistent, not stubborn.
> - **Conditionality, stated honestly.** **If the owner resolves V-1 toward Model A, this rejection
>   does not stand and AD-01E's episode becomes the right answer**, because inquiry and episode then
>   coincide. AD-01F's rejection was conditional on V-1 being open; this document's rejection is
>   conditional on this document's own V-1 recommendation being approved. **It is not unconditional
>   and is not presented as such.**

### 4.4 Cost of the recommendation, priced precisely

> **⟦ARCHITECT ANALYSIS⟧ This is a correction to AD-01F §14.1, which priced the change too high and
> was internally inconsistent about it.**
>
> AD-01F §14.1's comparison table records ALT-3 as *"Requires a new canonical entity (§88): **Yes**
> (work unit + custody interval)"*, while AD-01F **§5.4** states of the custody interval that it
> *"requires **no new canonical entity** if the Assignment Log is the carrier."* Both cannot be true.
> [§10](#10-assignment--custody-implications) resolves it: **the custody interval is a derived
> interval over the Assignment Log and is not a new entity.**
>
> The corrected price of this recommendation is therefore:
>
> | Change | §88 class |
> |---|---|
> | **Exactly one new canonical entity** — whichever of {work record, commercial record} is not identified with §06's *Sales Lead*. Under either naming the count is one. | MUST-ASK: canonical entities |
> | **Two new attributes on the existing Assignment Log** — the history decision made at transfer, and assignment provenance/method. | MUST-ASK: authorization rules |
> | **Re-homing of the lifecycle/disposition values from the record to the inquiry** (Success, Dump; and *New*, per AD-01F F-6). **This amends AD-01A §8.1, a recorded Product-Owner decision. It is not amended here.** | MUST-ASK: source-of-truth |
> | **Re-keying of the conversion funnel** from record to inquiry — **V-17, not resolved here.** | MUST-ASK: source-of-truth |
> | **§08 project scope becomes intra-record** — **V-24, not resolved here.** | MUST-ASK: authorization rules |
>
> No new entity is required for visibility, for episodes, or for the queue. **One entity, two
> attributes, three re-homings** — materially smaller than AD-01F's table implied, and the owner
> should have the corrected figure when weighing it.

---

## 5. Inquiry / Project Interest definition

> **⟦ARCHITECT RECOMMENDATION — conditional on §4⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL.)*
>
> **An Inquiry is a dated, sourced, project-contexted expression of interest by one Person, carrying
> its own commercial outcome.** It is the unit of conversion, source quality, CP attribution,
> commission and §08 project scope. It is the entity that discharges §06's *Sales Lead* requirement.

### 5.1 Conceptual ownership of each fact the task names

> **⟦ARCHITECT ANALYSIS⟧ This is an analysis of where each fact's *lifetime and authorization* sit.
> It is deliberately **not** a field list, and no field, column, type or vocabulary is proposed
> (Rule 1, R4). Rows that the sources do not settle are marked and left open.**

| Fact the task names | Conceptual owner | Basis | Status |
|---|---|---|---|
| **Date / time** of the expression of interest | **Inquiry** | *Inquiry date* is a captured intake fact (§5, §12) and is per engagement | **Settled by evidence** |
| **Source / campaign / channel / enquiry-from** | **Inquiry** | §5, §12 capture them per enquiry; AD-01C **D5** showed a single record-level source cannot honestly record a second engagement's channel | **Settled by evidence. Strong.** |
| **Project** | **Inquiry** | Definitional; and it is what makes T2 expressible at all | **Settled** |
| **Customer request / context — customer-entered remarks at intake** | **Inquiry** | The remark *is* part of the arriving message (§5, §12) | **Settled by evidence** |
| **Customer request / context — requirement profile (unit type, budget band, configuration)** | **Ambiguous** | Observed as record columns (§12) but the observed row is denormalised; a returning client's requirement legitimately differs | **V-3 — not resolved here.** *(A refinement on AD-01F §6.3: the intake remark and the evolving requirement profile are different facts and should not be decided as one row.)* |
| **Assignment context** | **NOT the inquiry's.** The **work record** owns the handler; the **Assignment Log** owns the history | One handler serves all of a client's interests (T1). An inquiry **references** the custody interval that was current when it arrived — a *derived* historical fact, not a handler of its own | **Settled by T1.** Stated explicitly because "the inquiry has an owner" is the most natural wrong inference from the observed *Enquiry Owner* column |
| **Attribution (CP claim set)** | **Inquiry** | AD-01C **D6**, AD-01E **U-15**, AD-01F **V-16**: two engagements may have two legitimate producers, and distinguishing that from a §11 clash is what §32/§40 commission depends on | **Anchor recommended; final anchor is V-16 / M-5 — not resolved here.** *This is the row with money on it.* |
| **Conversion** | **Inquiry**, referencing the **Booking** | §20/§21 give Booking its own lifecycle and snapshot; AD-01A §8.2 forbids the Lead Lifecycle absorbing Booking states. The observed queue carries *Project Name* and *Booked Project* as two columns — direct evidence they are two facts | **Settled in shape.** *Who or what sets Success is V-22 — not resolved here.* |
| **Disposition (terminal outcome + preserved reason)** | **Inquiry**, classified on AD-01A §8.3's three approved dimensions, **historised, never overwritten** | AD-01A §8.3 (unamended); R6; consolidated §31 | **Settled in shape.** *Whether the record also carries a separate queue-exit condition is **V-11** — not resolved here.* |
| **Relationship to the timeline** | Activities live on the **work record**; each activity **references the inquiry it concerns, where it concerns one** | One call serves all interests (T1), so the timeline cannot be partitioned by inquiry — but per-inquiry analytics require the reference | **Partly open → W-1.** Nothing states whether one activity may reference **more than one** inquiry. |
| **Relationship to the booking** | The converting **inquiry** references the **Booking**; the Booking owns its own lifecycle, financial snapshot and authorization and is **never absorbed** | AD-01A §8.2; §20, §21, §26; AD-01C §3.2's CP-financial safety property | **Settled** |

### 5.2 What an Inquiry is *not*

> **⟦ARCHITECT ANALYSIS⟧** It is **not** a handler, a queue row, a next-action commitment, or a
> timeline of its own. Those belong to the work record, by T1. An architecture that gives the inquiry
> its own handler and its own follow-up commitments has rebuilt Model A inside Model B and inherits
> every one of Model A's T1 failures.

### 5.3 Difference from AD-01E's episode, so the substitution is judged rather than assumed

| | AD-01E's **episode** | The **inquiry** |
|---|---|---|
| Evidential basis | Derived by the architect as *forced* (AD-01E §3.3); never named by the business | Named, dated, sourced and field-listed by the Product Owner (§5, §12, §13) and observed in the operation |
| Boundary | Opened by revival; closed by a terminal disposition on the Lead | Opened by an expression of interest; closed by its own commercial outcome |
| Project | Inherits the Lead's single project (AD-01E §3.1) | **Carries its own** — which is what makes T2 expressible |
| Handler | Associated with the episode | **Not associated** — the handler is the work record's, per T1 |
| Job it does | Bounded commerce **and** bounded visibility | Bounded commerce **only**; the visibility unit is the custody interval ([§8](#8-history-visibility-alternatives)) |
| Capture-time cost | The user must decide at contact whether a new episode opens (T14) | The event is recorded; the classification is appended later (T14) |

### 5.4 Added interest, regenerated inquiry, and genuinely new commercial opportunity

> **⟦ARCHITECT ANALYSIS⟧ The task requires that these three not be assumed equivalent. They are
> not, and the mapping between them is only partly stated by the sources.**

| Situation | Is it a **new inquiry**? | Is it a **new commercial opportunity**? | Is it a **new work record**? |
|---|---|---|---|
| **Added interest** — a client already being worked also asks about Project B | **Yes** (§7, §8, §13 state it directly) | **Not stated.** Different project, potentially different source, campaign and producer — which is exactly the *shape* of a new opportunity — but no source says so | **No** (§7: *"on the same record"*) |
| **Regenerated inquiry, same project, after a rightful closure** | **Yes** — §13 requires the event be recorded rather than the prior interest overwritten | **UNDECIDED.** This is AD-01E **U-1**, relocated to the inquiry by AD-01F **V-14**, and it is confirmed still open by this pass | **No** — the record never closed |
| **Re-contact after a Success** | **Yes** | **Yes** — settled. §06's Customer boundary and **AD-01C Q6-S4** already make a genuinely new opportunity after a success a new commercial unit. **Q6 is not reopened; only the level at which S4's "new unit" is created changes** — see [§13](#13-dumpre-engagement-implications) and [§16](#16-impact-on-ad-01-through-ad-01f) | **No** — a new *inquiry*, not a new record |
| **Management redistribution to a fresher, no customer event** (§7) | **No** — nothing arrived from the customer | **No** — no new engagement exists | **No** — a new custody interval on a live record |

> **⟦BUSINESS DECISION REQUIRED — inherited, restated, not resolved⟧** The middle row is **V-14**
> (AD-01F §16.2), and the first row's second column is **V-2/V-14** territory. **AD-01F's V-14 is
> confirmed, not refuted, by this pass:** nothing in the consolidated requirements, the Master Spec
> or the observed operation supplies the discriminator, and consolidated **§13** and **§28** both
> list it open in the Product Owner's own words. **No formula is invented here.** What must be
> supplied is stated in AD-01F §12.3's seven-fact table, which this document neither extends nor
> narrows.
>
> **⟦ARCHITECT ANALYSIS⟧ What *is* settled by this document is that V-14 no longer gates the model
> choice.** Under Model B, a business rule that has not been written can be left unwritten without a
> data-model default silently writing it — which is precisely what Spec **Rule 1** and **§88** exist
> to prevent, and precisely what Models A, C and D cannot offer (T14).

---

## 6. Lead / Inquiry / Activity relationships

> **⟦ARCHITECT RECOMMENDATION — conditional on §4 and §5⟧** The candidate model put to this document
> is evaluated below and is **adopted with one structural correction**.

```
Person                                    identity (§06, §07) — one per human per tenant boundary
  │
  └── Lead / Client Sales Record          the WORK unit — Person-bounded, long-lived
        ├── Inquiry / Project Interest #1 the COMMERCIAL unit — dated, sourced, project-contexted,
        ├── Inquiry / Project Interest #2   carries its own outcome + preserved reason
        ├── Inquiry / Project Interest #3   (→ references a Booking when it converts)
        ├── Activities / Timeline         user-performed sales work; each references the inquiry it
        │                                   concerns, where it concerns one (W-1)
        └── Assignment Log                first-class assignment/transfer EVENTS (§06, §10, §57)
              └── (custody intervals)     DERIVED spans between consecutive events — §10.
                                          NOT a distinct entity.
```

**The correction:** the candidate model lists *"Assignment / Custody History"* as a child alongside
the others. That is right for the **Assignment Log**, which §06 already makes canonical, and wrong
for the **custody interval**, which is a *derived interval over* that log, not a stored sibling of
it. See [§10](#10-assignment--custody-implications).

### 6.1 Relationship rules

> **⟦ARCHITECT RECOMMENDATION⟧**
>
> 1. **Person : work record.** At most one open work record per Person per tenant is the natural
>    reading of *"long-lived"* (P-3), but **whether two may exist and what reconciles them is M-5 —
>    not resolved here.** Whether a work record may exist with **zero** inquiries (a walk-in whose
>    interest is not yet known — §42's fast-capture case) is **not stated by any source** and is
>    recorded rather than filled (Rule 1).
> 2. **Work record : inquiry — one to many.** Append, never overwrite: a change or addition of
>    interest is a **new inquiry event on the timeline**, per the Product Owner's own §13 rule. **No
>    past project association is ever retroactively altered.** This is what neutralises AD-01C
>    **D3**'s hazard — the record does not *change* project, it *accumulates* interests — and it is
>    the same discipline **R6** and AD-01A §8.3 already impose on Dump reasons.
> 3. **Work record : activities — one timeline.** One call is one activity, regardless of how many
>    interests it touched (T1). The single numbered timeline the operation displays is a **read
>    model**, correctly; AD-01F §7.2's finding that it is **not** a correct *storage* model is
>    **upheld here without amendment** and is not re-argued.
> 4. **Activity : inquiry.** An activity references the inquiry it concerns **where it concerns
>    one**. Some activities concern none (a general check-in; an administrative note). → **W-1** for
>    the case where one concerns several.
> 5. **Inquiry : Booking.** The converting inquiry references the Booking. The Booking is
>    **referenced, never absorbed** (AD-01A §8.2). A cancelled booking never rewrites the historical
>    conversion (Q4/Q6, not reopened).
> 6. **Nothing in this structure is a second source of truth.** Assignment and transfer events come
>    from the **Assignment Log** and are never duplicated as timeline rows; the computed
>    first-response entry is **derived, never stored** (AD-01A §3.6). Both findings are AD-01F
>    §7.2's and are carried forward unchanged.

### 6.2 The one relationship the sources do not define

> **⟦BUSINESS DECISION REQUIRED — W-1⟧** **May a single activity relate to more than one inquiry,
> and if so, how does it count?**
>
> A rep calls a client who is considering Project A and Project B and discusses both. Nothing in
> §8, §9, §10, §12 or §13 states whether that is one activity referencing two inquiries, one
> activity referencing the "primary" one, or two activities. **Three metrics depend on the answer
> and will disagree if it is left implicit:** **FUT** (*"total count of actual user-performed
> follow-ups"*, §9 — is it one or two?), **per-inquiry first response** (W-4), and **per-inquiry
> engagement depth**. This is a direct and unavoidable consequence of permitting plural interests;
> it does not arise under Model A, and it is **not** answered by anything in AD-01 through AD-01F.
> **Nothing here invents an answer.**

---

## 7. V-7 history visibility problem

> **⟦ARCHITECT ANALYSIS⟧**

### 7.1 The requirement, stated as the thing the model must represent

The same underlying work record must be **simultaneously**, at one point in time:

- **historically complete** to the Sales Head and to an authorized reporting manager;
- **fully visible** to a handler who received it *with* history;
- **partially visible** to a handler who received it *without* history;
- **fully visible** to the handler who personally did the earlier work;

…**without deleting, copying, resetting or rewriting anything** (P-11, P-12; §07; **R6**;
consolidated §31), and **enforced by authorization, not by hiding UI** (P-8, P-11, P-14; Spec
Rule 4; §45).

### 7.2 The seven required cases

> **⟦PRODUCT-OWNER DIRECTION — the concrete test set⟧**
>
> 1. Employee A works the Lead and sees its history.
> 2. A manager transfers the Lead to Employee B **with** history.
> 3. Employee B sees the prior history.
> 4. A manager transfers the Lead to Employee C **without** history.
> 5. Employee C works the same Lead without seeing prior A/B conversation history.
> 6. The Sales Head can still see the full historical record.
> 7. An authorized reporting manager can still see the full historical record.

### 7.3 What is explicitly insufficient

> **⟦PRODUCT-OWNER DIRECTION⟧** `current_handler_id == old_handler_id` is rejected (P-12).
>
> **⟦ARCHITECT ANALYSIS⟧** AD-01E §6.1 established *why*, and its reasoning is **confirmed here and
> not re-argued**: that predicate is not merely the wrong pair of identifiers, it is the wrong
> **kind of fact**. It answers *"is the person holding this record the person who held it before?"* —
> **custody**. The question being asked is *"is this viewer entitled to read what happened
> earlier?"* — **entitlement**. Custody is a present operational assignment that changes routinely;
> entitlement is a durable authorization property. Consolidated §17's scenario table never keys on
> current custody, and §6's *"historical visibility rules apply separately from Lead identity"* says
> the same thing in the Product Owner's own words. **Custody is not an entitlement input. Confirmed.**

### 7.4 The two things AD-01E's model cannot do, and the one thing AD-01F over-read

> **⟦ARCHITECT ANALYSIS⟧**
>
> **(a) AD-01E's boundary unit is wrong.** AD-01E §6.3 evaluates entitlement per *(viewer, lead,
> **episode**)*. The control the Product Owner describes operates on **any transfer**, including a
> transfer of a live, actively-worked, never-dumped record (P-8, P-9) — which crosses no episode
> boundary. AD-01F **C-2** established this and it survives re-examination. **The episode covers a
> subset of the control and misses its common case.**
>
> **(b) AD-01F read §17 too literally in one direction.** AD-01F §9.3 treats consolidated §17 as
> stating *"transfer without history"* with **no carve-out** for a prior participant, and concludes
> the union-without-deny shape **cannot express the requirement**. But **§17's own first two rows say
> "may", not "does"**: *"Original history **may** be visible to that handler"* / *"Original handler
> **may** see prior history"*, against the third row's *"does **not automatically** see"*. **The
> Product Owner's table is permissive about participation, not mandatory about it, and permissive
> about withholding, not mandatory about that either.** §17 therefore does not compel a deny
> capability; it is compatible with one and does not require one. This is a genuine evidential
> correction to AD-01F §9.3, and it changes V-7 from an unanswerable conflict into an answerable
> question — see [§9](#9-transfer-with-history--without-history).

---

## 8. History visibility alternatives

> **⟦ARCHITECT ANALYSIS⟧** All five candidates the task names, evaluated against the seven cases and
> against consolidated §6/§16/§17.

| Candidate boundary | Can it express cases 1–7? | Verdict |
|---|---|---|
| **(A) Lead-level entitlement** — a viewer may see the record's history or not | Cases 4 and 5 **cannot be expressed at all**: the whole record is one unit, so "without history" means "without the record". Case 6/7 work; 1–3 work trivially | **Insufficient.** It is the boundary the product has today and it is exactly why the control cannot be built. |
| **(B) Inquiry-level entitlement** — a viewer may see some inquiries and not others | Wrong axis for the handler control. A mid-Follow-up transfer crosses no inquiry boundary, so case 4 is inexpressible; and a manager transferring without history is not saying *"hide Project B"*, they are saying *"hide what happened before now"*. **But it is independently required** for §08 project scoping under plural interests (V-24) and for CP-facing visibility (§39, AD-01E U-16) — a CP must see their own engagement, not the client's others | **Necessary for a different job. Insufficient for this one.** |
| **(C) Assignment / custody interval** — entitlement evaluated per span between consecutive assignment events | **Expresses all seven exactly.** The transfer *is* the boundary marker, the management decision *is* made at that moment, and *"prior history"* *is* the preceding intervals. Covers live transfers, post-Dump redistribution, automatic reassignment and explicit placement with one mechanism | **Best fit for handler-facing restriction.** |
| **(D) Activity-level permissions** — entitlement per individual activity | Would express the seven and a great deal more that no described control asks for. **No source describes management selecting individual activities**, and a per-item decision cannot be audited back to a single management act. It also multiplies the enforcement surface by the activity count | **Rejected: over-fine and unsupported by evidence (Rule 1).** |
| **(E) A combination** | **(C)** for handler-facing temporal restriction **and** **(B)** for project-scoped and external visibility, with a viewer required to clear both | **This is the answer.** |

### 8.1 The recommended conceptual model

> **⟦ARCHITECT RECOMMENDATION — V-7, part 1: the boundary⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. This is a **conceptual authorization model**, not an RBAC permission set — the
> permission vocabulary is **M-3**/**M-7** and **none is proposed here.** §88 MUST-ASK:
> authorization rules.)*
>
> **Historical visibility is evaluated on two boundaries at once, and a viewer must clear both.**
>
> - **The custody boundary — handler-facing history.** Entitlement to the activities, remarks,
>   dispositions and derived aggregates falling within a **prior custody interval** is evaluated per
>   *(viewer, work record, interval)*, **fail-closed**. **The current handler always sees their own
>   interval in full** — that is their work, and no control described anywhere restricts it.
> - **The interest boundary — project-scoped and external visibility.** Entitlement to an **inquiry**
>   and what hangs off it is evaluated per *(viewer, work record, inquiry)* against §08 project scope
>   and, for CPs, §39/§05/§11. *(The §08 half is **V-24** and is **not resolved here**; it is named
>   because the same mechanism serves it.)*
>
> **Entitlement inputs remain AD-01E's three, re-homed from episode to custody interval:**
>
> | Input | What it is | Which cases it serves |
> |---|---|---|
> | **I1 — Participation** | The viewer personally held the record during that interval, or is the recorded actor on activities within it. A **historical fact** the product must record anyway: §06 (Assignment Log canonical), §10 (*"all meaningful handovers must be recorded"*), §57 (*"preserve historical actor identity"*) | **Case 1**; and the return-to-an-earlier-handler case (§9.4) |
> | **I2 — Management breadth** | The viewer holds a grant whose record-visibility breadth covers the record. Expressed as **breadth on a grant, never as a role name** (**R2**). *(The breadth vocabulary is **M-7**, and whether "team" is a real concept is **M-3**/**M-7** — **not resolved here**.)* | **Cases 6 and 7** |
> | **I3 — Conferral** | The management decision recorded **on the transfer act that opened the interval** (§9.2) | **Cases 2 and 3** |
> | *(Custody)* | **Not an input.** AD-01E §6.1, confirmed | — |
>
> **Fail closed.** A handler with no participation, no covering breadth and no conferral sees **their
> own interval only** — which is **case 5** exactly. This matches **R1**'s fail-closed posture (an
> unset context matches zero rows, never everything) and §11's default-restrictive stance on
> sensitive lead facets.

### 8.2 The finding that resolves V-7

> **⟦ARCHITECT ANALYSIS⟧ All seven required cases are satisfied by the union above, with a custody
> boundary and a fail-closed default. Not one of them requires a deny capability.**

| Case | Satisfied by | Requires withholding from a prior participant? |
|---|---|---|
| 1. A works and sees history | **I1** | No |
| 2. Manager transfers to B **with** history | **I3** — conferral recorded on the transfer | No |
| 3. B sees prior history | **I3** | No |
| 4. Manager transfers to C **without** history | **absence of I3** — nothing is denied, nothing is granted | No |
| 5. C works without seeing A/B history | **fail-closed** — C has no I1, no I3 | No — **C never participated** |
| 6. Sales Head sees the full record | **I2** | No |
| 7. Authorized reporting manager sees the full record | **I2** | No |

> **⟦ARCHITECT ANALYSIS⟧ This is the same discovery structure AD-01E made about its own three cases
> (U-7), applied to the new seven — and it is the substantive resolution of V-7.** The deny question
> arises only in an **eighth case that the sources do not describe**: a transfer *without* history
> **to a handler who previously held the record**. Consolidated §7's redistribution case does not
> supply it either — it describes handing a dumped record *"to a fresher"*, and a fresher is by
> construction not the prior handler.
>
> **The evidence therefore does not generate a requirement for a withholding capability.** Combined
> with §7.4(b) — §17's *"may"* is permissive, not mandatory — **AD-01F §9.3's conclusion that the
> union "cannot express transfer without history" is corrected: the union expresses every described
> case. What the union cannot express is an undescribed case.**

---

## 9. Transfer with history / without history

### 9.1 The recommended representation

> **⟦ARCHITECT RECOMMENDATION — V-7, part 2: the mechanism⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. §88 MUST-ASK: authorization rules.)*
>
> **Transfer with history** = a transfer act that records an **I3 conferral** naming the receiving
> handler, granting them entitlement to the preceding intervals. **Transfer without history** = the
> **same act with no conferral recorded.** Nothing is denied; nothing is hidden by rewriting; the
> receiving handler simply has no entitlement input covering the earlier intervals, and the
> fail-closed default applies.
>
> **The conferral is a parameter of the transfer act itself** — one act with two outputs, the custody
> change and the visibility decision. This is AD-01F **F-9**'s third shape and it is **upheld here
> on its own stated merits**: it cannot *silently* confer (the decision is made consciously, in the
> act), and it adds no second act and no approval workflow (so **AD-01A §8.5**'s prohibition on
> inventing a reassignment-approval workflow is untouched, and §14/§95's speed concern is respected).
> It dominates AD-01E §7.3's two shapes on the costs AD-01E itself stated for them.

### 9.2 The read-time projection principle

> **⟦ARCHITECT RECOMMENDATION⟧ Every "fresh context" behaviour must be produced by a **read-time
> projection**, never by a **write-time mutation**.**
>
> The receiving handler's fresh view must never be produced by setting the lifecycle back to *New*,
> by deleting or archiving activities, by copying the record, or by resetting counters. Each of those
> would rewrite business history to achieve a presentation outcome — violating §07, **R6**,
> consolidated §31 and the Product Owner's own intactness requirement (P-11, P-12) in one act. It is
> also the exact corruption AD-01 **E-04** and AD-01 §6.1's *Anything → New* prohibition exist to
> prevent.
>
> **This generalises AD-01F §8.2's argument about *New* into a rule that covers the whole feature**,
> and it is the reason the boundary must be evaluated in a **server-side projection at read time**
> rather than materialised at transfer time.

### 9.3 If the owner *does* need withholding — the escape hatch, and its price

> **⟦ARCHITECT ANALYSIS⟧ The recommendation is deliberately built so that it survives either answer
> to W-3, because an authorization model that collapses if one question goes the other way is not a
> model.**
>
> If the business does perform the eighth case, the correct shape is **not** a deny rule in the
> permission system. It is a **scoped, recorded, per-interval restriction attached to a specific
> management act**, naming the subject and the intervals it covers. Entitlement then reads:
>
> > entitled = (**I1** ∪ **I2** ∪ **I3**) **and not** (an active recorded restriction naming this
> > viewer for intervals preceding that act)
>
> **Why this is not a violation of R2, and where it does cost something — stated plainly rather than
> argued away.** **R2**'s *"union semantics, no deny rows"* governs the **RBAC permission system**:
> effective permissions composed across the roles a user holds, where deny-precedence *"interacts
> badly enough with union semantics to generate a permanent class of 'why can't this user do X'
> tickets."* A per-record, per-interval restriction created by a named management act is a **business
> fact on a business record**, not a permission row: it does not compose across roles, it has a
> single evaluation site, and it is auditable back to one decision by one person at one time.
> **That said, it is deny-precedence in substance, scoped**, and it is a cost knowingly accepted, not
> a loophole. It must never be generalised into the permission system.
>
> **Two constraints on it are non-negotiable if it exists:**
> 1. **It must never apply to I2.** §17 row 4 gives the Sales Head and authorized reporting managers
>    broad visibility unconditionally (cases 6 and 7). A withholding control capable of blinding
>    management would make the record unreviewable by the people who must review it, and would defeat
>    §54's audit purpose.
> 2. **It must be recorded at the moment of the act and is unrecoverable if not.** A transfer whose
>    decision was never recorded cannot be reconstructed afterwards — the same asymmetry AD-01E §7.1
>    established for provenance and AD-01B §4 used to prioritise Q5.

### 9.4 Return to an earlier handler — the task's explicit sub-question

> **⟦ARCHITECT ANALYSIS⟧ The framing "is historical access restored?" presupposes it was withdrawn.
> Under the recommended model it never was.**
>
> A handler who worked intervals 1–3 holds **I1** over those intervals permanently. When the record
> returns to them at interval 7, nothing is restored because nothing was taken away; their view of
> intervals 1–3 was continuous throughout. This is why §17's first two rows read *"original history
> **may** be visible"* rather than *"is restored"*, and why they hold identically whether the return
> was automatic or an explicit Sales Head act.
>
> **Therefore the question of whether return restores access is *not* determined by the returning
> transfer's history-sharing choice.** It is determined by one thing only:
>
> > **Does participation entitlement (I1) endure — through reassignment away, role change, move to
> > another project, or departure?**
>
> That is **AD-01E U-14 / AD-01F V-25**, which is **silent in the sources** (§57 preserves actor
> *identity* on the record; it says nothing about a departed handler's continuing **read** access)
> and which **this document does not resolve** — it is outside V-1 and V-7 and the task forbids
> resolving it. **What this document does establish is that V-25 is load-bearing rather than
> peripheral:** it is now the *sole* determinant of the return case, and consolidated **§28**'s own
> open item — *"whether automatic return to a historical handler grants the same historical
> visibility as explicit Sales Head assignment"* — **is answered "yes, identically, for a prior
> participant" if and only if I1 endures.** The owner should answer V-25 knowing that.
>
> The one case where the returning transfer's choice *would* matter is the eighth case (§9.3) —
> withholding from a prior participant. **That is W-3.**

---

## 10. Assignment / custody implications

### 10.1 Is *Custody Interval* a necessary distinct entity?

> **⟦ARCHITECT RECOMMENDATION — V-7, part 3⟧ **No. It is a derived interval over the Assignment Log,
> and it must not be introduced as a distinct canonical entity.**
>
> The same necessity test AD-01F applied to reject the Sales Episode is applied here, to a unit
> AD-01F itself proposed:

| What the visibility and reporting model needs | Can the existing Assignment Log answer it? |
|---|---|
| *"Which activities happened before this transfer?"* | **Yes** — compare activity time against the transfer event's time. |
| *"Did this viewer hold the record earlier?"* (I1) | **Yes** — any prior entry naming them as handler; plus activity actors (§57). |
| *"What history decision was made at this transfer?"* (I3) | **Yes, once the Assignment Log carries it** — an attribute of the transfer event, not of an interval. |
| *"What is this handler's own FUT / first response / New?"* | **Yes** — activities between their assignment entry and the next one. |
| *"Which intervals precede the one this viewer holds?"* | **Yes** — consecutive entries, ordered. |

> **An interval is `[event_i, event_{i+1})`. Every question is answerable from the events. A stored
> interval would be a second representation of a fact the log already carries — the identical
> objection AD-01A §5.2 raised when it eliminated the persisted Unassigned/Assigned axis, and the
> identical objection AD-01F used to reject the episode.**
>
> **What *is* required is that the Assignment Log carry two facts it may not carry today** — and
> these are attributes on an existing canonical entity, not a new one:
>
> 1. **The with/without-history decision made at the transfer** (P-8, P-9; I3). **Unrecoverable if
>    not recorded at the moment of the act.**
> 2. **Assignment provenance / method** — automatic routing versus deliberate management placement
>    (§5, §6, §17). AD-01E **U-7** is **effectively answered "yes" by consolidated §6 and §16**
>    (management *deliberately* decides, about *"the receiving employee"* — any eligible
>    representative, not only the original handler), which triggers AD-01E §7.1's own conditional and
>    makes provenance necessary. **AD-01F F-9 reached this and it is upheld.** Also unrecoverable
>    if late: *"an assignment whose method was never recorded is indistinguishable later from one
>    that was automatic"* (AD-01E §7.1).
>
> **This is a refinement and partial correction of AD-01F.** AD-01F §5.4 said the custody interval
> *"requires no new canonical entity if the Assignment Log is the carrier"*; AD-01F §14.1's
> comparison table nonetheless priced ALT-3 as requiring *"work unit **+ custody interval**"* as new
> canonical entities. **§5.4 is right and §14.1's table is wrong.** The corrected price is in
> [§4.4](#44-cost-of-the-recommendation-priced-precisely).

### 10.2 Consequences for assignment

> **⟦ARCHITECT ANALYSIS⟧**
>
> - **AD-01A §8.5 is confirmed and strengthened, not reversed.** No persisted assignment-state axis is
>   reintroduced. §8.5 directed that *"Owner, Handler, Assignment History … should carry this
>   information"*, and loading the history decision and provenance onto the Assignment Log is exactly
>   that direction being followed.
> - **Transfer must not move the lifecycle.** AD-01 **E-04** stands, and §9.2's read-time-projection
>   principle is what makes obeying it possible.
> - **Bulk transfer applies one history decision to many records in one act** (P-9). That is a single
>   management action with a wide authorization blast radius, and *"how many records were transferred
>   without history, by whom, last quarter"* is a §54 audit question that is unanswerable unless the
>   decision is recorded per record at the moment it is made. **Its authorization treatment depends on
>   M-3/M-7 and is not designed here.**
> - **The transferring actor is a manager, distinct from either handler** (P-9; observed
>   *"Transferred to …"* entries whose actor is neither). §54 already wants actor and authorization
>   context on meaningful business actions.
> - **Whether the history choice is mandatory on every transfer, what its default is, whether it may
>   be changed after the fact, and whether a bulk transfer may carry per-record choices, is AD-01F
>   V-8 — not resolved here.** A default chosen by implementation is an authorization rule chosen by
>   implementation (§88, Spec Rule 4).

---

## 11. Security implications

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §8's twelve-surface analysis (API, UI, exports §52, search §45,
> reports §63, background jobs, notifications §58, attachments §71, audit §54/R6, offline §46/§47,
> CP portal §39/§05, consistency §68) **applies in full and is not restated here.** What follows is
> what V-1 and V-7 change about it.

### 11.1 The mechanism, not the boundary, is the architectural object

> **⟦ARCHITECT ANALYSIS⟧ This is the finding that most changes the cost picture.**
>
> AD-01E §8 characterised restricted historical visibility as *"the product's **first** intra-record
> authorization boundary"* and priced it as a novel, isolated cost. Under the V-1 recommendation that
> characterisation no longer holds: **§08 project scoping over a record with plural project interests
> is already an intra-record boundary** (AD-01F **C-9**), independently of history, of transfers and
> of revival. Both boundaries are the same shape: *a viewer legitimately holds the record; which of
> its typed child records may they read?*
>
> **Consequence: the architectural object is one server-side, entitlement-evaluated projection over
> the record's typed children, used by two predicates — interval membership and inquiry membership.**
> Building it once serves both. This does not make the cost disappear — **Model B creates the §08
> intra-record need that Model A does not have** — but it does mean the product pays for **one
> mechanism, not two**, and that AD-01E §2.3's security-cost asymmetry (its stated reason for
> recommending revival only *conditionally*) was priced against an assumption that no longer holds.
> The owner should know this, because it was AD-01E's stated reason for hedging.

### 11.2 Enforcement requirements

> **⟦ARCHITECT RECOMMENDATION⟧**
>
> 1. **The filter lives in the projection, server-side.** Record-level authorization stops being the
>    whole question. The most dangerous shape is an endpoint that authorizes the record once and then
>    returns its children unfiltered (§04, §69, Rule 4).
> 2. **UI is presentation only.** A collapsed section, a greyed panel or an absent tab is **not** the
>    control (§11, §03, §62; P-8, P-11).
> 3. **Fail closed** (R1's posture; §11's default-restrictive stance).
> 4. **The restriction must never apply to I2** (§9.3 constraint 1).
> 5. **Nothing is achieved by mutation** (§9.2).
> 6. **Automated tests are part of done.** AD-01E **R7** stands unchanged: the feature is not
>    complete until tests prove a restricted handler cannot reach restricted content through API,
>    search, export, reports, notifications, attachments or derived aggregates (§91, §96).

### 11.3 The inference channel — worse than AD-01E priced it, and now the default surface

> **⟦ARCHITECT ANALYSIS⟧** AD-01E §6.8 warned that aggregates leak the shadow of what is hidden.
> **The observed operation makes this the default surface, not an edge case:** the work queue exposes
> **FUT**, *Last Followed Date*, *Enquiry Date*, *Last Sub Response*, *Dump Reason* and *Last Remarks*
> as **list columns** (§12). A restricted handler reads the prior handler's last remark and the prior
> dump reason off their own queue without opening anything. AD-01F §9.1 item 3 established this and it
> is **upheld here without amendment**.
>
> **What V-1 and V-7 add:** because FUT is itself a derived aggregate and a primary queue column,
> **FUT must be computable at both the record scope and the custody-interval scope** — record-only
> FUT leaks the volume of hidden work on every row, and also misattributes a predecessor's effort to
> the current handler. **Whether the restriction hides the *existence* of prior work or only its
> *content* is AD-01F V-9, and whether AD-01E §8's surface list is the intended scope is AD-01F
> V-10. Neither is resolved here.**

### 11.4 New surfaces created by the V-1 answer

> **⟦ARCHITECT ANALYSIS⟧** Recorded so they are not discovered during implementation. **None is
> designed or resolved here.**
>
> - **Cross-project inference inside one record.** A Project-A-scoped viewer holding a record that
>   also carries a Project-B interest can infer Project B's existence from counts, timeline gaps and
>   aggregate columns. Same shape as §11.3, different axis. → **V-24**, not resolved.
> - **CP-facing visibility.** A CP must see the engagement they produced, not the client's others
>   (§39, §05, §11; AD-01E **U-16**). Under Model B this is an inquiry-boundary evaluation and is
>   **required**, not optional.
> - **Offline caches.** §46 requires data minimisation; a device-resident copy of restricted history
>   sits outside every server-side control (AD-01E **U-20**, **M-14**). Not resolved.
> - **§11 clash information** already has its own restriction (*"Sales Reps should not automatically
>   see sensitive clash information"*), which is now **inquiry-scoped** rather than record-scoped.

---

## 12. Reporting and analytics implications

> **⟦ARCHITECT ANALYSIS⟧ Business facts only.** No SQL, no query, no dashboard, no chart, no metric
> definition presented as approved. Consolidated **§25** sets the standard: metrics *"must be based on
> durable business facts rather than UI-only counters"*, and the business history must *"be durable
> enough for conversion and operational analytics"* — outliving **R6**'s hot audit window (AD-01
> §8.3). **AD-01F §13's fourteen-row requirement table is upheld and is not restated.** What follows
> is only what V-1 and V-7 change.

| # | What changes | Why |
|---|---|---|
| **1** | **The funnel keys on the inquiry, not the record.** | A client with three interests and one booking otherwise reports as one converted lead out of one, and the two lost interests vanish from the denominator. → **V-17**, a source-of-truth change (§88 MUST-ASK). **Not resolved here.** |
| **2** | **Conversion references the converting inquiry and its Booking.** | Preserves AD-01C §3.2's CP-financial safety property — a flapping lead state must never present to the commission engine as a §26-forbidden cancellation — and AD-01 **E-16** unchanged. |
| **3** | **Attribution and commission key on the inquiry.** | AD-01C **D6**'s live financial defect: a genuine §11 clash is otherwise indistinguishable from two producers legitimately claiming two engagements. **M-5 becomes a four-way question** (Person / work record / inquiry / episode). → **V-16**, **not resolved here.** |
| **4** | **FUT must be computable at record scope and custody-interval scope.** | §11.3: the interval scope closes an inference channel *and* makes the handler's own productivity number honest. |
| **5** | **First response acquires a fourth variant — inquiry → first response.** | Consolidated §9 flags creation→first and assignment→first as open; AD-01F §13.1 added custody→first. **Inquiry→first is new here and is the one that makes source and campaign quality measurable**, because the source is the inquiry's. → **W-4**. |
| **6** | **Assignment performance is measured per custody interval.** | Measured at the record, a handler inherits a predecessor's history and is measured on work they never did — the exact unfairness transfer-without-history exists to prevent. |
| **7** | **Transfer reporting must include the with/without-history decision.** | *"How many records were transferred without history, by whom, last quarter"* is a §54 management and audit question, and the fact **cannot be backfilled** (§10.1). |
| **8** | **Four report populations over one record, keyed on entitlement.** | Rep-facing figures **custody-scoped**; CP-facing **inquiry-scoped**; project-scoped viewers **inquiry-scoped**; management **full**. This is simultaneously a reporting and an authorization requirement, and §45's warning applies — **a report filter is a read path and must not become a side door.** |
| **9** | **Reports branch on semantics, never on codes.** | **R4**, restated by AD-01 §9.7. A tenant may rename any value; every report filters on the semantic column — validity class, responsibility locus, recoverability posture, terminality, converted-ness, qualifying-for-FUT — never on a label. |
| **10** | **The business-level history must record which inquiry and which custody interval each entry belongs to.** | Otherwise the history is an uninterpretable interleaving, and AD-01 §8.3's durable history cannot answer either scoped question. |

> **⟦ARCHITECT ANALYSIS⟧ Nothing above is promised as a chart.** AD-01 §9.6 stands unchanged: no
> weighted forecast (**M-8**), no temperature-based quality analysis (**Q9**, **V-21**), and **no
> reason-coded loss or source-quality comparison until N-4 supplies values.** Publishing those earlier
> produces numbers that look authoritative and are not.

---

## 13. Dump/re-engagement implications

> **⟦ARCHITECT ANALYSIS⟧ Scope note only. Dump semantics are NOT finalised here. AD-01F's V-11,
> V-12, V-13 and V-14 are untouched, and AD-01A §8.3's three-dimension framework is neither amended
> nor re-argued.** This section states only how the V-1 and V-7 answers change five described
> situations.

| Situation | Effect of the V-1 / V-7 answers | What remains open |
|---|---|---|
| **A dumped record's client returns** | **The mechanical question dissolves.** The work record never closed — it is *"long-lived"* by the Product Owner's own definition (P-3) — so nothing must be revived. The closed **inquiry** keeps its terminal disposition and preserved reason permanently (AD-01A §8.3, unamended), and a **new inquiry** opens beside it. **No lifecycle value moves backward anywhere**, so AD-01 §6.1's *Dump → Follow-up* row needs no enabling and *Anything → New* needs no exception. | **Whether the new inquiry is a new commercial opportunity is V-14 — confirmed still open** (§5.4). |
| **A new inquiry arrives** | Recorded as a dated, sourced event on a record that never closed (§13's own rule: *"record the new inquiry event rather than silently overwriting the previous interest"*). **The capture is separable from the classification** (T14). | V-14, V-18 (does it count as a Capture in its period). Not resolved. |
| **Manager redistributes a dumped record to a fresher** | **Becomes expressible, which it is not today.** A **new custody interval** opens on a work record that has no terminal condition; the closed inquiry stays closed; a next action has something to attach to. Under a record-level terminal Dump (AD-01A §8.1 as recorded), the fresher receives a record the system says needs no follow-up, in no Action Feed bucket, filtered out of their own queue — i.e. **the described operation is unperformable**. | **What the record's queue condition is afterwards is V-11/V-12 — not resolved here.** The gap is a missing management control, **not** a missing Dump dimension: Dimension C (recoverability posture) is about the *prospect*, and asking it to carry workload policy would corrupt the one dimension AD-01C §2.6 and AD-01E §3.5 identified as the intended re-engagement gate. |
| **Transfer with history** | **Orthogonal to Dump entirely.** The custody boundary works identically on live, dumped and converted records; no disposition is consulted. | V-8 (mandatory? default? revocable?). Not resolved. |
| **Transfer without history** | Same. **And this is precisely what AD-01E's episode boundary could not do** — an episode boundary exists only where a terminal disposition occurred, so a live transfer had nothing to scope against (AD-01F C-2). | **W-3** (the eighth case). |

### 13.1 Q5 and Q6 — preserved, and the one consequence that must be named

> **⟦ARCHITECT ANALYSIS⟧ No direct contradiction with AD-01C's Q6 is created, and none with Q4.**
>
> - **Q6's organising principle is untouched and remains correct at whatever level it is applied:**
>   *restate what was never true; never restate what was true at the time.*
> - **S1** (valid conversion, booking later cancelled): Success permanent; the cancellation lives on
>   the Booking. **Unchanged.**
> - **S2 / S3** (a value that was never true): a general, authorized, reasoned, **appended**
>   correction mechanism outside the ordinary machine. **Unchanged.**
> - **S4** (a genuinely new opportunity after a success): **unchanged in substance; only its
>   *subject* changes.** *"Creates a new Sales Lead"* becomes *"creates a new inquiry on the existing
>   work record"* — structurally the same act at the level the evidence puts it, and the answer to
>   the task's own note that *"a genuinely new sales opportunity may require a distinct business
>   unit if your V-1 answer defines one."* **It does: the inquiry is that unit.** This is a
>   restatement of Q6's subject, **not a reopening of Q6**, and **no Q6 decision requires revision.**
> - **Q5 is neither resolved nor narrowed.** Its *framing* is reshaped — AD-01F **C-5** observed that
>   both AD-01C and AD-01E presuppose that the thing which closed is the Lead, and under Model B what
>   closes is the inquiry. **That observation is upheld and is not carried further here.**
>
> **The one consequence that must be named because it is easy to discover late:** if the lifecycle
> disposition sits on the inquiry, then **AD-01A §8.1's four values attach to the inquiry, not to the
> work record.** AD-01F raised this for *New* (its V-5/V-6); it applies equally to **Success** and
> **Dump**. **This amends a recorded Product-Owner decision and this document does not amend it.**
> The level question is **V-3**, and it is the subject of [§17](#17-recommended-next-architecture-decision).

---

## 14. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is
> decided, and no part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item
> sits in Master Spec **§88**'s MUST-ASK column.)*

**G-1 — V-1: adopt Model B structurally.** Two entities between Person and Activity:
a **Lead / Client Sales Record** (Person-bounded, long-lived, one handler, one next action, one
timeline, one queue row, *n* interests — the unit of work, assignment, transfer, workload and
history visibility) and an **Inquiry / Project Interest** (dated, sourced, project-contexted, its own
outcome and preserved reason — the unit of conversion, source quality, CP attribution, commission
and §08 project scope). Definitions: [§4.1](#41-the-work-record--lead--client-sales-record),
[§5](#5-inquiry--project-interest-definition).

**G-2 — §06 is extended, not superseded.** The **Inquiry** discharges §06's *Sales Lead* requirement
(a Person × Project × sales-process relationship existing as its own business record). Model B adds a
work record **above** that relationship; §06 neither contemplates nor forbids such an addition. This
makes the change an **addition** (§88 MUST-ASK) rather than a **supersession**, which is materially
smaller. [§3.4](#34-the-framing-correction--v-1-is-not-fully-an-eitheror)

**G-3 — the naming decision is separate and must still be made.** Which entity the product calls
*Lead* does not affect the structure, but the overloading of the word is the proximate cause of the
contradiction and must not be left to drift. → **W-2**.

**G-4 — Sales Episode: REJECTED as a distinct canonical entity; its requirements RETAINED and
re-homed to the inquiry** (commerce) and the work record (handler). The rejection is **conditional
on G-1 being approved**: if V-1 resolves toward Model A, AD-01E's episode is the right answer.
[§4.3](#43-what-is-explicitly-not-a-third-entity)

**G-5 — a new inquiry is not a new Lead and is not necessarily a new commercial opportunity.** These
are three things. Only the third is undecided, and **V-14 is confirmed open, not answered.** What
Model B adds is that the undecided rule **need not be answered at capture time** (T14) — the strongest
single architectural argument for it. [§5.4](#54-added-interest-regenerated-inquiry-and-genuinely-new-commercial-opportunity)

**G-6 — V-7: the visibility boundary is a combination — custody interval for handler-facing history,
inquiry for project-scoped and external visibility, both evaluated in one server-side projection,
fail-closed.** Entitlement inputs are AD-01E's **I1 participation ∪ I2 management breadth ∪ I3
conferral**, re-homed from episode to custody interval. **Custody is not an input** (AD-01E §6.1,
confirmed). [§8](#8-history-visibility-alternatives)

**G-7 — all seven required cases are satisfied by the union; no deny capability is required by any
of them.** *Transfer with history* = a transfer recording an **I3 conferral**; *transfer without
history* = the same act with **no conferral recorded** — nothing is denied, nothing is hidden by
rewriting. Conferral is a **parameter of the transfer act**, which cannot silently confer and adds no
second act (AD-01A §8.5 untouched). [§8.2](#82-the-finding-that-resolves-v-7), [§9.1](#91-the-recommended-representation)

**G-8 — the read-time projection principle.** Every *fresh context* behaviour is produced by a
**read-time projection**, never by a **write-time mutation** — no lifecycle reset, no deletion, no
copy, no counter reset. This is §07, **R6**, consolidated §31 and P-11/P-12 expressed as a build
rule, and it generalises AD-01F §8.2. [§9.2](#92-the-read-time-projection-principle)

**G-9 — Custody Interval is NOT a distinct canonical entity.** It is a derived interval over the
**Assignment Log**, which §06 already makes canonical. What is required is **two attributes on that
log** — the with/without-history decision, and assignment provenance — **both unrecoverable if not
recorded at the moment of the act.** This corrects AD-01F §14.1's pricing and upholds AD-01F §5.4.
[§10.1](#101-is-custody-interval-a-necessary-distinct-entity)

**G-10 — the intra-record projection is one mechanism serving two boundaries.** §08 project scoping
under plural interests is already an intra-record boundary, independently of history. AD-01E §8's
characterisation of restricted history as *"the first intra-record boundary"* and §2.3's asymmetry
argument were priced against an assumption that no longer holds. [§11.1](#111-the-mechanism-not-the-boundary-is-the-architectural-object)

**G-11 — Model D must still be put to the owner explicitly.** If the requirement is *"the rep should
see one story"* rather than *"one record owns the work"*, Model D is materially cheaper. It fails on
the single-next-action and the atomic-transfer points ([§3.3](#33-what-the-table-shows)), but
**establishing which the owner means costs one question**, and AD-01E R8 and AD-01F §14 were both
right to insist it be asked. **It is asked here.**

**G-12 — Q4 and Q6 are preserved and not reopened; Q5 is not resolved.** Success = §20 Stage 3; no
ordinary reversal from a valid Success; a cancelled booking never rewrites historical Success. Q6-S4's
*subject* becomes the inquiry — a restatement, not a revision. **No direct contradiction with AD-01C
is created.** [§13.1](#131-q5-and-q6--preserved-and-the-one-consequence-that-must-be-named)

---

## 15. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and the consolidated requirements' own **§1** operating rule, none is
> guessed. Numbered **W-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V**
> namespaces.

### 15.1 New items raised by this document

| # | Decision required — stated precisely | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **W-1** | **May one activity relate to more than one Inquiry / Project Interest, and if so, how does it count?** One call discussing Project A and Project B: one activity referencing two inquiries, one referencing a primary, or two activities? | §5.1, §6.2 | **Silent.** §8, §9, §10, §12 and §13 do not address it. It does not arise under Model A. | **FUT**, **per-inquiry first response** and **per-inquiry engagement depth** each acquire an independent implicit boundary and **will disagree**. They must share one answer, exactly as V-4 requires for *qualifying*. |
| **W-2** | **Which entity does the product call *Lead* — the work record or the inquiry?** Structurally equivalent; not cosmetic. | §3.4, G-3 | **Both.** Consolidated §4 uses *Lead* for the work unit; Master Spec §06 uses it for the commercial unit. | The overloading is the proximate cause of the V-1 contradiction. Left undecided, every product↔engineering conversation carries a silent translation and the contradiction regenerates. |
| **W-3** | **Does the business ever transfer a record *without history* to a handler who **previously worked it**?** (The eighth case — the only one the union cannot express.) | §7.4, §8.2, §9.3, §9.4 | **Not described by any source.** §17 rows 1–2 say history *"may"* be visible to a prior handler — permissive, not mandatory. §7's redistribution case names *"a fresher"*, who is by construction not the prior handler. | **If "no": the recommended union is complete as stated.** **If "yes": a scoped, recorded, per-interval restriction is required** (§9.3) — deny-precedence in substance, confined to one business control, never generalised into the permission system (**R2**). **Unrecoverable if answered late:** a transfer whose decision was never recorded cannot be reconstructed. |
| **W-4** | **Is *inquiry → first response* a required metric, and against which clock** (inquiry origination, or the moment it reached a handler)? | §12 row 5 | **Silent.** Consolidated §9 flags creation→first and assignment→first as open; AD-01F §13.1 added custody→first; this variant is new. | Source, campaign and CP responsiveness are unmeasurable at the level the source actually lives, because the source is the inquiry's. Depends on **W-1** and on **V-4** (*qualifying*). |
| **W-5** | **Does the owner affirm that a history restriction may never apply to management breadth (I2)?** | §9.3 constraint 1 | §17 row 4 states broad management visibility; **no source states it is unconditional.** | A withholding control capable of blinding management makes the record unreviewable by the people §54 requires to review it. **An ARCHITECT RECOMMENDATION exists (never); affirmation is sought rather than assumed.** |

### 15.2 Items from prior documents that this document explicitly does **not** resolve

> **Named so it is unambiguous which questions remain live after V-1 and V-7 are answered. Each is
> listed with only the effect this document has on it.**

| # | Item | Effect of this document |
|---|---|---|
| **V-2** | Concurrent vs sequential project interests | **Unchanged and now urgent** — see §17. Not resolved. |
| **V-3** | At which level the lifecycle disposition sits; which facts sit on interest vs record | **Widened from *New* to all four values** (§13.1). Not resolved. **Recommended as the next decision.** |
| **V-4** | Does a non-connected attempt count as a *qualifying* follow-up | **Unchanged**, and now also gates **W-1** and **W-4**. Not resolved. |
| **V-5 / V-6** | Is *New* custody-scoped; does AD-01A §8.1 require amendment | **Reinforced** by §9.2's read-time-projection principle, which is the general form of AD-01F's argument. **Not resolved**, and AD-01A §8.1 is **not amended here.** |
| **V-8** | Is the history choice mandatory; default; revocable; bulk behaviour | **Unchanged.** Not resolved. |
| **V-9 / V-10** | Existence vs content; the bound surface list | **Unchanged in substance; the surface is confirmed to be work-queue list columns, not a detail page** (§11.3). Not resolved. |
| **V-11 / V-12 / V-13** | Dump as one control or two; redistribution and its queue condition | **Made expressible** by G-1 (§13); **not resolved**, and Dump semantics are explicitly **not finalised** here. |
| **V-14 / V-15** | New commercial opportunity vs continuation; different-source re-inquiry | **V-14 confirmed open, not answered** (§5.4); **no longer gates the model choice** (T14). V-15 untouched. |
| **V-16** | Attribution / commission anchor (M-5 four-way) | **Anchor recommended at the inquiry** (§5.1, §12 row 3); **the decision is not made here** and must not be taken before **V-2/V-3**. |
| **V-17 / V-18** | Funnel re-key; does a re-inquiry count as a Capture | **Required by G-1** and named as a consequence; **not resolved.** |
| **V-19 / V-20 / V-21 / V-22 / V-23** | Response vocabulary; first-response variants; temperature; who sets Success; the pre-approval condition | **Unchanged.** V-20 gains **W-4** as a fourth variant. **N-2 remains unresolved and remains on the critical path** for V-23. |
| **V-24** | §08 project scope at record or inquiry | **Forced into the open by G-1** and shown to share a mechanism with V-7 (§11.1); **not resolved.** |
| **V-25** | Does participation entitlement survive reassignment, role change, departure | **Promoted from peripheral to load-bearing** — it is now the **sole** determinant of the return-to-an-earlier-handler case (§9.4) and of consolidated §28's own open item. **Not resolved.** |
| **V-26** | IVR intake metadata vs the do-not-build list | **Unchanged.** Not resolved. |
| **Q2, Q3, Q5, Q8–Q16** | AD-01's remaining questions | **Not resolved.** Q5's framing is reshaped by G-1 (AD-01F C-5, upheld); no Q5 answer is given. |
| **Q1, Q4, Q7**, sync/verification, assignment axis | AD-01A §8 decisions | **Treated as fixed input. Q4 explicitly not reopened.** |
| **Q6** | AD-01C §3.7 | **Confirmed; only S4's subject is restated** (§13.1). **No revision required.** |
| **N-1 … N-4** | AD-01A's open items | **Not resolved.** N-2's priority stands as AD-01F left it. |
| **T-1 … T-12**, **U-1 … U-20** | AD-01C's and AD-01E's open items | **Not resolved.** **U-7** is confirmed effectively answered "yes" by consolidated §6/§16 (§10.1), which makes provenance necessary; its residue remains **V-8**. **U-14** → **V-25**, promoted. |
| **M-2 … M-20** | Reconciliation blockers | **Not resolved.** Directly implicated and left to their owners: **M-3** (default role set — needed before transfer eligibility or breadth can be expressed), **M-5** (uniqueness boundary — **four**-way under V-16, and it owns §6.1 rule 1), **M-7** (record-visibility breadth vocabulary; **R2** forbids branching on a role name), **M-8**, **M-9**, **M-14**. |

---

## 16. Impact on AD-01 through AD-01F

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Each row states what the V-1 and
> V-7 answers do to a prior position and why. Where a prior document is **confirmed**, that is
> recorded as deliberately as where it is corrected.

### 16.1 AD-01 — Lead State Machine

| Section | Effect |
|---|---|
| §1.2 (§06 quotation), §7 **E-09** (*same Person, two projects = two leads*) | **SUPERSEDED IN SCOPE, not contradicted, if G-1/G-2 are approved.** E-09 is a faithful reading of §06 and remains true **of the inquiry**. It ceases to be true of the *work* record. **Not edited.** |
| §1.3 — spec-silence register | **CONFIRMED and extended.** W-1, W-3, W-4 are three further silences. |
| §3 — the eight-concept separation and its test | **CONFIRMED, and used as the primary instrument throughout §§3–6 of this document.** Consolidated §31 restates it near-verbatim in the Product Owner's own words. |
| §5.1 / §6.1 — four-value lifecycle; *Anything → New* forbidden | **In tension as to *level*, not as to *rule*.** Under G-1 the values attach to the inquiry; under G-8 no backward edge is ever required, so the prohibition becomes **moot rather than violated** and §07's historical-integrity concern is untouched. **Requires PO amendment of AD-01A §8.1; not made here.** |
| §7 **E-04** (reassignment must not move the lifecycle) | **CONFIRMED and sharpened.** G-8 is what makes obeying it possible under transfer-without-history. |
| §7 **E-16** (unit transfer must not touch lead state) | **CONFIRMED**, reinforced by keeping conversion on the inquiry → Booking. |
| §8.3 — durable business-level state history outliving R6's window | **CONFIRMED** (consolidated §25) and **extended**: each entry must record which **inquiry** and which **custody interval** it belongs to (§12 row 10). |
| §9.1 — funnel keyed on the lead's current state | **MUST BE RE-KEYED to the inquiry** — **V-17**, a source-of-truth change (§88 MUST-ASK). **Not resolved here.** |
| §9.6 — what must not be promised as a chart | **CONFIRMED and widened** (§12). |
| Everything else | **Unchanged and still NOT APPROVED FOR IMPLEMENTATION.** |

### 16.2 AD-01A — the §8 Product-Owner decisions

| Item | Effect |
|---|---|
| §8.1 — four-value lifecycle; Pending rejected; Today/Future/Overdue derived | **The vocabulary is CONFIRMED; the *level* is CHALLENGED for all four values, not only *New*.** AD-01F challenged *New* (V-5/V-6); §13.1 shows Success and Dump carry the same problem — a record whose Project-A inquiry converted while its Project-B inquiry is live cannot hold one value. **An amendment is requested of the Product Owner; none is made here.** → **V-3**. |
| §8.2 — Success = §20 Stage 3; Booking's lifecycle separate; cancellation never rewrites Success | **CONFIRMED. Q4 NOT REOPENED.** Conversion attaches to the converting inquiry; the Booking is referenced, never absorbed. |
| §8.3 — three-dimension Dump framework; mandatory reason; preserved reason | **CONFIRMED and NOT AMENDED.** The preserved reason relocates to the inquiry, where terminality is monotone without exception. |
| §8.4 — sync ≠ verification | **CONFIRMED.** Untouched by anything here. |
| §8.5 — no persisted assignment axis; Owner/Handler/Assignment Log carry it | **CONFIRMED and STRENGTHENED.** G-9 loads two attributes onto the Assignment Log — exactly the direction §8.5 specified — and **introduces no axis and no entity.** The prohibition on inventing a reassignment-approval workflow is honoured by G-7's parameter-of-the-act shape. |
| §8.6 — the Orthogonal Lead Model | **The separation is CONFIRMED; the attachment levels are restated.** Commercial outcome, source, attribution and project scope → **inquiry**; queue condition, next action, assignment, workload → **work record**; historical visibility → **custody interval (derived)**; Booking → entirely its own. This is AD-01F §15.5's finding, **upheld** and extended to Success and Dump. |
| §3.6 — do not record what the system can compute | **CONFIRMED and applied twice**: the computed first-response entry is not stored, and the custody interval is derived rather than stored (G-9). |
| §1.7 / **N-2** | **Untouched in substance and not narrowed.** |

### 16.3 AD-01B — Dependency and ordering

| Item | Effect |
|---|---|
| The dependency graph | **V-1 was correctly identified by AD-01F §18 as the new root. With V-1 and V-7 answered, the new root is V-3 (with V-2)** — see §17. |
| §4's rework-asymmetry standard (*cheap before history accumulates, unrecoverable after*) | **CONFIRMED as the correct standard and applied three times here** — to V-1 (§2.2), to the Assignment Log's two new attributes (§10.1), and to W-3 (§15.1). |
| §7.1 — the "Blocked" contradiction | **Unchanged. Not resolved. Not narrowed.** It remains open exactly as AD-01B, AD-01C §1.2, consolidated §28 and AD-01F left it. |

### 16.4 AD-01C — Terminality (Q5 · Q6)

| Item | Effect |
|---|---|
| §2.5 — **Q5 recommendation (new successor Lead)** | **Already superseded by AD-01E. Not restored here, and no Q5 answer is given.** Its *framing* is reshaped by G-1 (what closes is the inquiry, not the record) — AD-01F **C-5**, upheld. |
| §2.2 — the twelve dimensions | **The best analysis of these trade-offs in the repository, and it transfers with *inquiry* substituted for the bounded unit.** **D3**'s project-corruption hazard is neutralised by §6.1 rule 2 (append, never overwrite): the record does not *change* project, it *accumulates* interests. **D5**, **D6**, **D8**, **D9** are answered at the inquiry. **D12**'s unbackfillable-reference discipline disappears because no new record is created. |
| §3.2 — the CP-financial safety property | **CONFIRMED and preserved** (§12 row 2). |
| §3.4 — *a correction is not a re-engagement, and a re-engagement is not a correction* | **CONFIRMED**, and AD-01F §12.4's widening to three acts (correction / re-engagement / redistribution) is **upheld and not carried further.** |
| §3.7 — **Q6 recommendation** | **UNTOUCHED AND CONFIRMED. No Q6 decision requires revision.** Only **S4's subject** is restated — *"a new Sales Lead"* becomes *"a new inquiry on the existing work record"*, the same act at the level the evidence puts it. §13.1. |
| **T-6** (who sets Success), **T-4/T-5** (temporal reach of a CP claim), **T-10** | **Unchanged. Not answered.** |

### 16.5 AD-01E — Re-engagement and controlled historical visibility

| Item | Effect |
|---|---|
| §1.2 — the direction's two requirements held together (inviolable record + differential readability) | **CONFIRMED as the real difficulty.** G-8 is the general form of the resolution. AD-01E identified the hard problem correctly. |
| §3.1 — *"necessarily scoped to same Person × same Project"* | **CONTRADICTED, and now definitively rather than provisionally.** Consolidated §7, §8 and §13 place the different-project re-inquiry **on the same record**. AD-01F **C-4** flagged this as a live question; under G-1 it is settled against AD-01E's premise. **D3, which AD-01E called *"fatal to revival as a universal rule"*, rests on this premise and no longer bites.** **AD-01E is not edited.** |
| §3.3 — *"revival requires the episode to become first-class"* | **The requirement is UPHELD; the entity is REJECTED** (G-4). The business already has a bounded unit — the inquiry — that is dated, sourced, project-contexted and field-listed by the Product Owner, where the episode is architect-derived. **Conditional on G-1: if V-1 resolves toward Model A, the episode stands.** |
| §6.1 — custody is the wrong kind of fact | **CONFIRMED without qualification** (§7.3). Not re-argued. |
| §6.2 — authorization boundary, not a display rule | **CONFIRMED by the Product Owner directly** (P-8, P-11) and by §11 (P-14). |
| §6.3 — entitlement per *(viewer, lead, **episode**)*; I1 ∪ I2 ∪ I3; fail-closed | **PARTLY CONFIRMED, PARTLY CORRECTED.** The three inputs, the fail-closed default and the custody-is-not-an-input rule are **retained unchanged**. **The boundary unit is corrected from episode to custody interval** (§8), because the described control operates on ordinary transfers of live records. |
| §6.3's **union-without-deny shape** | **UPHELD — and this reverses AD-01F §9.3's finding.** AD-01F concluded the union *"cannot express transfer without history"*; §8.2 shows the union expresses **all seven** required cases, and §7.4(b) shows consolidated §17's *"may"* is permissive rather than mandatory. **The union cannot express only an *undescribed* eighth case, which is W-3.** AD-01E's I1 rationale — *"the restriction is about a handler who was never there, not about un-showing what was already shown"* — is **sound and is adopted.** |
| §6.8 — the inference channel | **CONFIRMED and made worse** by the observed work-queue list columns (§11.3). AD-01F §9.1 item 3, upheld. |
| §6.6 **H1–H12** | **Carry over to the custody boundary.** **H12** (other projects) moves from *out of scope* to **central**, because under G-1 other projects' interests are *inside* the record. → **V-24**. |
| §7 / **U-7** | **CONFIRMED effectively answered "yes" by consolidated §6 and §16** (AD-01F §8.3, upheld). AD-01E's own conditional therefore triggers and **assignment provenance is necessary**; it cannot be backfilled. Residue: **V-8**. |
| §7.3 — two conferral shapes | **A third shape (parameter of the transfer act) is adopted** (G-7), for the reasons AD-01F §8.4 gave. |
| §8 — twelve enforcement surfaces | **CONFIRMED in substance; scope widens from revived leads to *every transferred lead*.** Its framing of restricted history as *"the first intra-record authorization boundary"* **no longer holds** — §08 project scoping is already one under plural interests (§11.1). |
| §2.3 — the security-cost asymmetry that made AD-01E's recommendation conditional | **MATERIALLY WEAKENED**, for the reason in §11.1. The owner should know this, because it was AD-01E's stated reason for hedging. |
| §10 **Alt-4** | **Vindicated as worth asking, and asked here** (G-11, Model D). |
| §11 **R1 … R8** | **R1/R2/R3 do not stand under G-1** (the episode is rejected; revival is not the frame). **R4 corrected** on boundary unit; its union and fail-closed halves **upheld**. **R5 triggered** — provenance necessary. **R6 confirmed, anchor moves to the inquiry** (V-16, four-way). **R7 confirmed unchanged.** **R8 confirmed — Model D is put to the owner.** |
| **U-1 … U-20** | **None is decided here.** U-1 → V-14, **confirmed open**. U-7 → **effectively answered by evidence**; residue V-8. U-11/U-12 → V-9/V-10. U-14 → **V-25, promoted to load-bearing**. U-15 → V-16. U-16 → **required** under G-6's interest boundary. U-18 → widened by AD-01F, unchanged here. |

### 16.6 AD-01F — Lead / Client Business-Workflow Reconciliation

> **⟦ARCHITECT ANALYSIS⟧ AD-01F is the baseline this document was asked to test. Most of it survives
> the test. The four places it does not are stated by section so they can be checked.**

| Item | Effect |
|---|---|
| §4 **C-1 … C-11** (the ten contradictions and the confirmations) | **CONFIRMED in substance.** C-1 is **refined**, not overturned: §3.4 shows V-1 is not fully an either/or, because §06 is satisfiable by the inquiry. |
| §5.1's T1–T7 test table | **CONFIRMED and extended** by T8–T14 (§3.2). Its conclusions are unchanged by the extension; T14 strengthens them. |
| §5.2 / §5.3 — the Lead and Inquiry definitions | **ADOPTED, with two refinements**: the intake remark and the evolving requirement profile are separated (§5.1), and the inquiry is stated **not** to own a handler (§5.2) — the most natural wrong inference from the observed *Enquiry Owner* column. |
| §5.4 — Custody Interval *"requires no new canonical entity if the Assignment Log is the carrier"* | **CONFIRMED — and it is the half of AD-01F that is right.** |
| §14.1's comparison table — ALT-3 *"requires a new canonical entity: Yes (work unit **+ custody interval**)"* | **CORRECTED.** This contradicts AD-01F's own §5.4. The custody interval is derived; the corrected price is **one** new entity plus two Assignment Log attributes (§4.4, §10.1). AD-01F **priced its own recommendation too high.** |
| §7.2 — one timeline as a read model, several record classes in storage | **UPHELD without amendment and not re-argued.** |
| §8.4 / **F-9** — conferral as a parameter of the transfer act | **UPHELD and adopted** (G-7). |
| §9.2 — the two-boundary combination (custody + inquiry) | **UPHELD and adopted** (G-6), with the addition that the two boundaries are **two predicates over one projection**, not two mechanisms (§11.1). |
| §9.3 / **F-8** — *"the union cannot express withholding, and that is V-7"* | **PARTLY OVERTURNED.** §17's *"may"* is permissive, not mandatory (§7.4b), and all seven required cases are satisfied by the union (§8.2). **V-7 is answerable, and is answered: union, fail-closed, custody-scoped, no deny required by any described case.** The residue is narrowed from AD-01F's open conflict to a single yes/no question about an operation the business either performs or does not — **W-3**. |
| §12.3 / **V-14** — the seven facts a re-engagement rule would need | **CONFIRMED still open; neither extended nor narrowed.** §3.2 T14 adds that V-14 **no longer gates the model choice**. |
| §15 **F-1 … F-12** | **F-1 discharged** (V-1 answered). **F-2 adopted** with the §4.4 re-pricing. **F-3 adopted** and made conditional on G-1 rather than on V-1 being open. **F-4, F-5, F-7, F-10, F-11, F-12 upheld; none resolved beyond what this document's scope allows.** **F-6 reinforced** by G-8. **F-8 partly overturned** (above). **F-9 adopted.** |
| §15.5 — what this does to the Orthogonal Lead Model | **UPHELD and extended** to Success and Dump (§13.1, §16.2). |
| §16 — V-1 … V-26 | **V-1 and V-7 answered. Every other V-item is explicitly left open** (§15.2). |
| §18 — *"take V-1 next, together with V-7"* | **Correct, and followed. This document is that step.** |

---

## 17. Recommended next architecture decision

> ### **V-3 — At which level does the lifecycle disposition sit: the work record, the Inquiry / Project Interest, or both with different meanings? — answered together with V-2, and with nothing else.**
>
> **⟦ARCHITECT RECOMMENDATION — sequence only⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL.)* **This is a recommendation about *sequence and subject*. No answer to
> V-3 or V-2 is proposed, implied or preferred here, and neither is resolved by this document.**

> **⟦ARCHITECT ANALYSIS⟧ Why V-3, and why V-2 in the same sitting.**

1. **V-3 is undecidable without V-2.** If interests are strictly **sequential**, a single
   record-level disposition survives almost intact and the amendment to AD-01A §8.1 is small. If they
   may be **concurrent**, the record demonstrably cannot carry one value — the client whose Project-A
   inquiry converted while Project-B is live is simultaneously converted and actively worked — and
   §8.1's four values must be re-homed. **The two questions have one answer.**
2. **It is the last question that changes the model's *shape* rather than its parameters.** After
   V-1 and V-7, everything else in the line — the funnel key (V-17), the attribution anchor (V-16),
   the redistribution control (V-11/V-12), §08 scoping (V-24), *New*'s scope (V-5/V-6) — is a
   *parameter* of where the disposition sits. This is AD-01B §4's standard, applied one level down
   from where AD-01F applied it.
3. **The rework asymmetry runs one way and is severe.** Dispositions, reasons and terminality
   recorded against the wrong level **cannot be re-keyed later**: nobody can recover, two years on,
   which of a record's three interests a 2026 closure actually closed. AD-01A §8.3's preserved-reason
   rule makes the wrong recording permanent by design.
4. **It amends a recorded Product-Owner decision** (AD-01A §8.1) and is therefore squarely **§88
   MUST-ASK** — *changing source-of-truth rules* — and **delegation to an architect is not
   authorization** (AD-01A §7).
5. **It unblocks the largest number of downstream items at the lowest cost**, because both halves are
   questions about what the operation actually does, not about mechanism — the same property that
   made V-1 and V-7 cheap to answer in one sitting.

> **⟦BUSINESS DECISION REQUIRED — restated for sequencing, not raised anew⟧** The decision the owner
> is being asked to take next is **V-2 + V-3 as one question**, exactly as AD-01F §16.1 states them.
> Nothing in this document narrows either of them, and no preferred branch is offered.

**Explicitly NOT recommended next: V-16 (the attribution and commission anchor).** It carries the most
money and it has the most inbound edges — V-2, V-3, M-5, T-4, V-15. Answering it before V-3 fixes a
commission rule onto a unit whose level is not yet decided. **This is the same judgement AD-01F §18
made, for the same reason, and it is unchanged.**

**Also put to the owner in the same sitting, because each costs one question and each is currently
being decided by default:** **W-2** (which entity is called *Lead*), **W-3** (the eighth transfer
case), and **G-11** (is the requirement *one story* or *one record* — Model D).

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype, no
"temporary" lead or inquiry table, and no scaffolding of either entity. Consolidated **§30** states
it: *"No schema/code implementation should be inferred from an unresolved product ambiguity."*
**The Lead / Client architecture is unresolved until the project owner approves in writing.**

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

**None of AD-01, AD-01A, AD-01B, AD-01C, AD-01E or AD-01F is modified by this document.** Where this
analysis contradicts, corrects, weakens or partly overturns a prior position — AD-01E §3.1 and §6.3's
boundary unit; AD-01E §8's *"first intra-record boundary"* framing and §2.3's asymmetry; AD-01F §9.3
and **F-8**'s finding that the union cannot express withholding; AD-01F §14.1's pricing of the custody
interval as a new canonical entity — **that is stated explicitly, with the document and section named
and the reason given, and the prior file is left exactly as it stands.**

In particular: **AD-01A §8's recorded Product-Owner decisions are treated as binding input
throughout**; **Q4 is not reopened**; **Q6 is confirmed and requires no revision**, with only S4's
subject restated; **Q5 is not resolved**; **N-2 is not resolved**; **Dump semantics are not
finalised**; and blockers **M-2 … M-20** are not resolved. **Every V-item other than V-1 and V-7
remains open exactly as AD-01F left it**, and the five new items **W-1 … W-5** are raised, not
answered.

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column —
canonical entities, relationships, authorization rules, source-of-truth rules, CP commission logic
and audit requirements are all engaged. Per AD-01A §7, **delegation to an architect is not
authorization**, and a Product-Owner preference recorded as evidence is not an approved architecture.
The analysis above is offered so that it can be attacked on its merits rather than deferred to.

**Nothing here is implemented, and no prior document is modified, until the project owner approves in
writing.** Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: PROPOSED — NOT APPROVED**
