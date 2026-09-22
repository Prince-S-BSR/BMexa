STATUS: PROPOSED — NOT APPROVED

# AD-01K — The Attribution and Commission Anchor: V-16, M-5's attribution half, AD-01C's T-4 and T-5, and AD-01J's AA-3

> This document resolves **exactly five** coupled items — **V-16**, **M-5's attribution half**, **T-4**,
> **T-5** and **AA-3** — and resolves nothing else. It contains no SQL, no schema, no migration, no
> column/table/type name, no implementation and no UI/visual/interaction design. It proposes **no
> commission formula, rate, percentage, slab, milestone value or calculation**, **no Dump-reason value
> list**, **no time threshold** and **no scoring rule**. Every item it touches sits in Master Spec
> **§88**'s **MUST ASK BEFORE DECIDING** column (canonical entities, relationships, financial rules, CP
> commission logic, tenant/authorization architecture, source-of-truth rules, audit requirements). Per
> AD-01A §7, **delegation to an architect is not authorization.** This document is the asking.

| | |
|---|---|
| **Document ID** | AD-01K |
| **Type** | Decision analysis resolving AD-01F **V-16**, `01-bmexa-architecture-reconciliation.md` **M-5**'s *attribution* half, AD-01C **T-4**, AD-01C **T-5**, and AD-01J **AA-3**. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I or AD-01J. **None of those files is edited by this document.** |
| **Scope** | (1) Which business object a CP's commercial claim attaches to. (2) Which events create, challenge, resolve, preserve and newly create attribution, across six named examples. (3) Whether an attribution claim may cross an Inquiry's terminal boundary after a **closure** (T-4). (4) The same question after a **conversion** (T-5). (5) Whether AA-3 is upstream of V-16. |
| **Explicitly out of scope** | **Q6 is NOT reopened.** **AD-01I's I-1 … I-9 Dump/redistribution/reactivation model is NOT reopened.** **Q1, Q4, Q7 are NOT reopened.** **AA-1, AA-2, AA-4, AA-5 are NOT resolved** — AA-2 is *narrowed* in §7 and explicitly left open. **Q2, Q3, Q5, Q8 – Q16**, **N-1 … N-4**, **T-1 … T-3**, **T-6 … T-12**, **U-1 … U-20**, **V-1 … V-15**, **V-17 … V-26**, **W-1 … W-5**, **Y-1 … Y-5**, **Z-1 … Z-6**, **A-1 … A-5**, and blockers **M-2, M-3, M-4, M-6 … M-20** are **not resolved**. **M-5's uniqueness / duplicate-detection half is NOT resolved.** **M-9 (the commission model) is NOT resolved, narrowed or pre-empted.** |
| **Contains SQL / schema / migration / UI design / commission formula or amount** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (fail-closed tenant isolation on every table, masters included), **R4** (masters not enums; reports branch on semantics, never on tenant-renameable labels), **R6** (audit is event-based and append-only; never edit history), **R12** (every claim traceable to this repository's own documents). Spec **Rule 1**, **§86**, **§88**, **§95**, **§97**. Consolidated **§1**, **§24**, **§26**, **§30**, **§31**. |
| **Baseline treated as input and tested, not assumed** | **AD-01J's recommendation of the Inquiry as the commercial/attribution anchor is treated as a HYPOTHESIS TO TEST, not as settled fact and not as Product-Owner approval.** §8 re-derives it independently against a thirteen-case test set — including three cases no prior document ran (§26 unit transfer, §06 multi-applicant Booking Group, §41 CP sub-agent) — and reports where it survives, where it needs a clause it does not have, and where it is genuinely silent. |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PRODUCT-OWNER DIRECTION⟧** | A statement, preference or fact recorded by the Product Owner — in `BMEXA_MASTER_SPEC.md`, in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, or in AD-01A §8 / AD-01C §1.2 / AD-01E §1.1 / AD-01I §1 / AD-01J §1. **A recorded preference is evidence, not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A finding derived from those sources. Mine to defend, and offered so it can be attacked. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** |
| **⟦BUSINESS DECISION REQUIRED⟧** | The sources are silent or in conflict and **nothing here fills the gap**. New items are numbered **AB-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y / Z / AA** namespaces. Consolidated in [§16](#16-business-decisions-required). |

**Findings are numbered K-n.** New architectural constraints continue AD-01J's C-series as **C-V, C-VI,
C-VII**. Amendments to prior documents that are *logically required but not made here* continue the
A-series as **A-6, A-7, A-8** and **none of them is made**. Product-Owner source statements are numbered
**PO-n** in this document's own sequence; where a prior document's P-number is meant, it is cited by
source (e.g. *AD-01J P-16*).

**Two terminology warnings, both inherited and both still live.**

1. **The V-4 collision is preserved, not resolved** (AD-01I **I-14**): AD-01F §16.1's **V-4** and
   AD-01I's task-assigned **V-4·reactivation** are two questions sharing one number. Neither is
   resolved here.
2. **The V-15/V-16 collision is preserved, not resolved** (AD-01J **J-16**): a task brief used **V-15**
   for the anchor question that **AD-01F §16.2 registers as V-16**. **This document answers AD-01F's
   V-16 as registered**, cites it verbatim in §2, and **does not renumber either entry**.

Throughout, **work record** means AD-01G §4.1's *Lead / Client Sales Record* and **Inquiry** means
AD-01G §5's *Inquiry / Project Interest*, as extended by AD-01J **J-34**. **W-2 (which entity is
properly called *Lead*) is not answered here.**

---

## 1. Product Owner direction

> **⟦PRODUCT-OWNER DIRECTION⟧** Recorded first, verbatim in substance, before any analysis, so the
> analysis can be checked against it rather than substituted for it. **Nothing in this section is the
> architect's.**

### 1.1 On attribution and clash

| # | Source | Statement |
|---|---|---|
| **PO-1** | Spec **§11** | *"Clash detection is a **core business control**. If multiple sources/CPs claim **the same prospective customer**: record **each** attribution claim, **preserve history**, do not expose sensitive competing claims unnecessarily. **Builder-side authorized leadership resolves attribution.** Sales Reps should not automatically see sensitive clash information that could influence or manipulate attribution. The UI visibility rule must be enforced by authorization—not merely by hiding a badge."* |
| **PO-2** | Spec **§06** | **`Lead Attribution Claim`** is a **canonical entity**: *"Records competing attribution claims for a lead."* **`Assignment Log`**: *"History of lead/CP ownership or assignment changes."* **`CP Ledger`**: *"Brokerage/commission accounting record for **the CP relationship**."* **`CP Profile / Relationship`**: *"Relationship between a CP Person and/or CP Firm and the Builder ecosystem."* **`Booking Group`**: *"Transaction envelope connecting applicants/co-applicants with inventory. **A booking may involve multiple Persons.**"* |
| **PO-3** | Spec **§09** | The CRM must support *"lead capture, lead assignment, ownership, active handler, follow-ups, site visits, disposition, **duplicate detection**, **CP attribution**, **clash detection**, reassignment, assignment history."* |
| **PO-4** | Spec **§10** | *"Separate **Lead Owner** (person responsible for the lead/account relationship) and **Lead Handler** (person currently working the lead). A lead can change handlers **without destroying ownership history**. All meaningful handovers must be recorded."* |
| **PO-5** | Spec **§12** | *"a device cannot perform a reliable server-wide duplicate/clash check while disconnected. Therefore offline lead creation must be treated as **PENDING SYNCHRONIZATION** … **Never pretend an offline lead has passed the server-side clash gate.**"* |

### 1.2 On commission, eligibility and financial boundaries

| # | Source | Statement |
|---|---|---|
| **PO-6** | Spec **§32** | *"The CP workflow must support: commission/brokerage entitlement, **milestone-based eligibility**, invoice submission when eligible, Accounts review, payout, TDS information, reversal/clawback where legitimately applicable. **The exact legal/tax treatment must be validated separately. Do not make unsupported legal claims.**"* |
| **PO-7** | Spec **§40** | *"The UI may clearly indicate that an invoice cannot yet be submitted … Once **the business condition** is satisfied, invoice submission becomes available. **The UI lock must correspond to server-side authorization.** Never rely on a greyed-out button as the actual security control."* |
| **PO-8** | Consolidated **§22** | *"Booking, demand, receipt, receipt allocation, ledger and **commission are distinct financial concepts.** … **CP commission accrual and payout are separate.** Commission approval/validation/payment should be separated by responsible functions. Clawbacks can result in negative balances and future offsets where valid. TDS reconciliation must preserve Gross Commission − TDS = Net Payable."* |
| **PO-9** | Spec **§33** | *"If a legitimate cancellation creates a recoverable CP overpayment: the CP ledger may become negative … However: **UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS. Do not blindly apply clawback logic to every closed booking.**"* |
| **PO-10** | Spec **§26** | *"A unit transfer requires special treatment. The previous design concept was: old booking → new booking → financial transfer/reconciliation. However: **UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK.** … The system must distinguish genuine cancellation from approved unit transfer/upgrade/downgrade. **Do not create an automatic CP clawback merely because an old unit record is technically closed. This is a CFO validation requirement before production financial logic is finalized.**"* |
| **PO-11** | Spec **§25** | *"Original booking history must remain preserved. Post-booking changes are represented as **controlled adjustments/amendments**. Never overwrite the original approved booking state in a way that destroys auditability."* |
| **PO-12** | Spec **§35** | *"MVP does NOT implement automated payment-gateway refunds or escrow … However: the CRM must still preserve the appropriate business state and inventory consequences. **'Handled offline' does NOT mean destroy history or ignore the transaction.**"* |

### 1.3 On the CP relationship, sub-agents and pre-project capture

| # | Source | Statement |
|---|---|---|
| **PO-13** | Spec **§39** | *"The CP should be able to see relevant **lead information, attribution information, pipeline status, commission status, eligibility, invoice status.** Do not expose Builder-internal sensitive information."* |
| **PO-14** | Spec **§41** | *"A CP firm principal may invite/manage sub-agents within the approved CP relationship. The system must preserve: **Parent CP Firm → Principal → Sub-Agent** relationships. **Do not accidentally give a sub-agent principal-level permissions.**"* |
| **PO-15** | Spec **§42** | *"Helpdesk needs fast capture during busy launch periods. Target workflow: name, limited phone identifier where appropriate, **CP/source**, quick registration, summon/assign appropriate Sales Rep. **Do not make the helpdesk complete the entire CRM profile before the lead can enter the queue.**"* |
| **PO-16** | Spec **§43** | *"If a field Sales Rep is responsible for **enriching a lead later**, the system can maintain a **pending enrichment queue**. This should create accountability without blocking urgent sales activity."* |
| **PO-17** | Spec **§44** | *"If an unknown CP sub-agent arrives and cannot immediately be matched to an existing profile: provide a **temporary/manual capture mechanism**. Do not block the Helpdesk workflow. **The temporary information must be clearly marked as unverified and later reconciled.**"* |

### 1.4 On Success, Booking and correction — fixed input, not reopened

| # | Source | Statement |
|---|---|---|
| **PO-18** | Consolidated **§14**; AD-01A **§8.2** *(approved — **Q4**)* | *"**Lead Success is associated with the approved Booked / Stage 3 milestone**, not merely with booking initiation."* **Not reopened.** |
| **PO-19** | AD-01C **§3.7** *(approved — **Q6**)* | **No ordinary backward transition out of Success.** **A valid Success stays historically true even if the downstream Booking is later cancelled.** An **incorrectly recorded** Success is corrected through an **audited, explicitly authorized, appended correction mechanism**, never ordinary reversal. **A genuinely new opportunity after a prior Success creates a new business unit.** **Not reopened, not narrowed, not re-argued anywhere below.** |
| **PO-20** | Spec **§20** | *"Stage 1 — Booking Initiated … Stage 2 — Pending Verification … **Stage 3 — Booked** (required Builder-side verification has completed). Do not mark a booking 'Booked' simply because a form was submitted."* |
| **PO-21** | Spec **§07**, **§06** | *"A Person can have multiple leads, interact with multiple projects, become a customer, be an **applicant/co-applicant**, have historical relationships. **Do not destroy historical identity when status changes.**"* **Customer is a context, not a record.** |

### 1.5 On governance

| # | Source | Statement |
|---|---|---|
| **PO-22** | Consolidated **§30**; Spec **§88**, **§86**, **§95**, **§97** | *"**No schema/code implementation should be inferred from an unresolved product ambiguity.**"* Canonical entities, relationships, **financial rules**, **CP commission logic**, tenant architecture, authorization, source-of-truth rules and audit requirements are **MUST ASK BEFORE DECIDING**. Inventing business rules is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. *"**MINIMUM NECESSARY FRICTION, not minimum possible taps.** A one-tap action that creates financial corruption is worse than a three-tap action that prevents it."* *"**When in doubt, STOP AND ASK.**"* |

### 1.6 Decisions treated as fixed input and not reopened anywhere below

> **⟦PRODUCT-OWNER DIRECTION⟧ Binding input.** **Q4** (PO-18) and **Q6** (PO-19) are **not reopened,
> not re-argued and not narrowed** at any point in this document. **Q1's four-value vocabulary decision
> is not reopened.** **Q7's approved three-dimension Dump-reason framework** (opportunity validity class
> · responsibility locus · recoverability posture) is **CONFIRMED and NOT amended**; §4 uses **Dimension
> A** as an input and adds no dimension and no value. **N-4 still owns every Dump-reason value.**
> **AD-01A §8.5's prohibition on inventing a reassignment-approval workflow is honoured throughout — no
> workflow, approval step, gate or screen is proposed anywhere below.** **AD-01I's I-1 … I-9 are treated
> as fixed input**; §12 tests them for an exception and finds none. **AD-01J's J-1 … J-53 are treated as
> the immediately preceding architect *recommendation* — evidence and input, not approval** — and
> **J-2**, **J-26** and **J-33** are each tested and each found to need a clause they do not have (§10,
> §9, §5).

---

## 2. V-16 definition

### 2.1 V-16 exactly as registered

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01F §16.2, verbatim:**
>
> > **V-16** — *"**Do attribution claims and commission entitlement attach to the Person, the working
> > record, the inquiry, or an episode?** **M-5** becomes a four-way question."* Arising from AD-01F
> > §6.3, §15 F-11. Spec status: *"**M-5 open**; §11/§32/§40 silent on any sub-lead unit."* Consequence:
> > *"**The live financial defect** (AD-01C **D6**, AD-01E **U-15**): a genuine §11 clash is
> > indistinguishable from two legitimate engagement claims."*

### 2.2 What V-16 actually contains — and the split this document makes

> **⟦ARCHITECT ANALYSIS⟧ K-1 — V-16 as registered asks one question about two different objects, and
> the conjunction *"attribution claims **and** commission entitlement"* is the reason it has survived
> five documents unanswered.** The registered sentence presupposes that whatever anchors the claim also
> anchors the entitlement. **That presupposition is false against the Product Owner's own sources**, and
> **PO-8** says so in the Product Owner's words: *"Booking, demand, receipt, receipt allocation, ledger
> and commission are **distinct financial concepts** … **CP commission accrual and payout are
> separate**."* A model that answers *"where does the claim live"* has not thereby answered *"what makes
> it payable."*
>
> **V-16 therefore decomposes into three questions with three different statuses, and this document
> states which of the three it answers:**
>
> | Sub-question | What it asks | Status in this document |
> |---|---|---|
> | **V-16·claim-anchor** | Which business record **represents the commercial claim a CP may ultimately be paid for** — the thing a claim is *about*, the thing §11 adjudicates, the thing §12's gate runs against | **ANSWERED — §8, §15.** `ARCHITECT RECOMMENDATION` |
> | **V-16·eligibility-anchor** | Which business record determines **whether and when** a resolved claim becomes a payable entitlement | **ANSWERED IN SHAPE — §9, §15.** `ARCHITECT RECOMMENDATION`. **No formula, rate or milestone value is proposed. M-9 owns the rule.** |
> | **V-16·reach** | Whether a claim recorded on one commercial unit **extends to another** | **PARTLY ANSWERED, PARTLY `BUSINESS DECISION REQUIRED` — §4 (T-4), §5 (T-5), §6 (AA-3).** |

> **⟦ARCHITECT ANALYSIS⟧ K-2 — the question this document must answer, stated so it can be checked.**
> V-16 asks *which business event/record represents the commercial claim a CP may ultimately be paid
> for.* **It does not ask how much.** The line this document holds throughout is:
>
> | | Definition used throughout | Owner |
> |---|---|---|
> | **Attribution** | **WHO** has the commercial claim on a given engagement, and how competing claims on that engagement are recorded, preserved and resolved (**PO-1**, **PO-2**) | **V-16·claim-anchor / M-5's attribution half — this document** |
> | **Commission eligibility** | **WHETHER AND WHEN** a resolved claim becomes payable — the milestone condition **§40** authorizes against (**PO-6**, **PO-7**) | **V-16·eligibility-anchor — shape here; rule is M-9** |
> | **Commission amount** | **HOW MUCH**, at what rate, with what slab, clawback quantum, TDS treatment and net payable (**PO-6**, **PO-8**, **PO-9**) | **M-9 and the CFO validation PO-6/PO-10 require. NOT touched anywhere in this document.** |

> **⟦ARCHITECT ANALYSIS⟧ K-3 — the candidate set, stated before it is tested.** The task names five:
> **(A) Person**, **(B) Lead / work record**, **(C) Inquiry**, **(D) Booking**, **(E) another existing
> concept**. Under **(E)** this document tests three concepts prior documents did not test as anchors:
> **the `Lead Attribution Claim` itself** (canonical under **PO-2**), **the `CP Profile / Relationship`**
> (canonical under **PO-2**), and **the `Booking Group` transaction envelope** as distinct from *a
> Booking*. AD-01E's **Sales Episode** and a new **Commercial Opportunity** entity were each rejected
> four and one times respectively (AD-01G **G-4**, AD-01H **H-10**, AD-01I **I-9**, AD-01J **J-51/J-52**)
> and are **re-tested once more in §14 against this document's own test set** rather than carried
> forward on the strength of prior rejections. **No new entity is created anywhere in this document.**

---

## 3. M-5 attribution analysis

### 3.1 M-5 exactly as registered, and the presupposition inside it

> **⟦PRODUCT-OWNER DIRECTION / register⟧ `01-bmexa-architecture-reconciliation.md` §M, verbatim:**
>
> > **M-5. What is a lead's uniqueness boundary, and at what level does clash detection operate?**
> > *"§06 says a Sales Lead relates Person + Project + process, so one person enquiring about three
> > projects is three leads. But §09's duplicate detection and §11's clash detection operate on the
> > prospect — plausibly tenant-wide. If a rep at Project A and a CP at Project B both claim the same
> > phone number, is that a clash?"*
> > *Needed:* *"the duplicate-detection key (phone? phone + project? person identity?) and the scope of
> > a clash."*
> > *Blocks:* *"whether **Lead Attribution Claim** attaches to the Lead or the Person, the clash engine,
> > and §12's offline pending-sync gate."*
> >
> > And §D.3: *"The answer determines whether the attribution claim attaches to the Lead or to the
> > Person."*

> **⟦ARCHITECT ANALYSIS⟧ K-4 — M-5 contains a false entailment, and naming it is the first thing this
> section must do.** M-5 asserts that the **duplicate-detection key determines the attribution anchor**
> (*"The answer determines whether…"*). **It does not.** The two controls answer different questions
> about different things:
>
> | Control | Question it asks | Its subject | Failure it prevents |
> |---|---|---|---|
> | **Duplicate detection (§09)** | *"Is this the same human as one we already hold?"* | The **Person** | Two Person records for one human — **PO-21**'s *"Do not create separate copies of the same individual"* |
> | **Clash detection (§11)** | *"Do two producers claim **this** engagement?"* | The **engagement** | Paying the wrong producer, or forcing leadership to adjudicate a conflict that is not one |
>
> **AD-01H §12 row 2 already established that these are different questions at different levels.** What
> K-4 adds is that **M-5's own framing assumes they share an answer, and therefore M-5 cannot be
> answered as one question.** This document answers **M-5's attribution half only**. **M-5's uniqueness
> / duplicate-detection half — the key, its scope, and tenant-wide behaviour — is NOT resolved,
> narrowed or branched here and remains fully open**, including its Person candidate, which AD-01J
> §4.2's elimination explicitly did not touch. → **A-8**, named and not made ([§17](#17-impact-on-ad-01-through-ad-01j)).

> **⟦ARCHITECT ANALYSIS⟧ K-5 — M-5's own worked example is answerable now, and its answer is the
> shortest demonstration of K-4.** *"If a rep at Project A and a CP at Project B both claim the same
> phone number, is that a clash?"* — **No. It is two attributions on two engagements, and it is
> simultaneously a duplicate-detection hit at the Person level.** The two controls fire on the same
> arrival and give different, correct, non-contradictory answers: **§09** says *"this is the same human
> — do not create a second Person"*; **§11** says *"there is nothing here for leadership to
> adjudicate."* **A model that forces one answer must get one of the two wrong.** This is AD-01C **D6**'s
> *"a clash that is not a clash"* stated from the duplicate-detection side, and it is new: D6 argued
> from the commission consequence, K-5 argues from the intake control.

### 3.2 The five verbs, defined before the examples

> **⟦ARCHITECT ANALYSIS⟧ K-6 — the task names five things an event can do to attribution. They are not
> five degrees of one thing; they are five distinct acts with three distinct actors and three distinct
> authorization levels, and keeping them separate is what makes the six examples decidable.**

| Verb | What the act is | Who performs it | Where its output lands |
|---|---|---|---|
| **Create attribution** | A producer's claim is recorded against an engagement | The **capture event** — customer-generated, mediated or direct (**PO-15**, **PO-17**) | A claim in the engagement's claim set |
| **Challenge attribution** | A second claim is recorded against the **same** engagement | A second producer's capture event | The **same** claim set — this, and only this, is a §11 **clash** |
| **Resolve attribution** | A contested claim set is adjudicated | **Builder-side authorized leadership only** (**PO-1**) | An appended resolution — **never an overwrite** (AD-01 §D.4: *"Claims are never overwritten by a later claim"*; **R6**) |
| **Preserve attribution** | A resolved or unresolved claim set survives a later act | **No actor — it is the default**, and every act that does not explicitly change it preserves it | Nothing; absence of change is the recorded fact |
| **Create a NEW attribution claim** | A claim is recorded against a **different** engagement | A later capture event | A **different** claim set — **not a challenge, not a clash** |

> **⟦ARCHITECT ANALYSIS⟧ K-7 — the distinction between *challenge* and *new claim* is the whole of the
> attribution problem, and it is decided by exactly one thing: whether the two claims name the same
> commercial engagement.** Every one of the six examples below is decided by that single test. **An
> anchor that cannot state which engagement a claim names cannot perform the test, and therefore cannot
> distinguish a clash from an ordinary second attribution.** This is the criterion §8 uses.

### 3.3 The six examples

#### Example 1 — Amit: Project A → CP A, Project B → CP B

> **⟦ARCHITECT ANALYSIS⟧ K-8 — two creations, no challenge, nothing to resolve, both preserved.**
>
> | Verb | What happens |
> |---|---|
> | **Create** | CP A's claim is created at Inquiry A's origination; CP B's at Inquiry B's. Two engagements, two claim sets |
> | **Challenge** | **Nothing challenges anything.** The claims name different projects, therefore different engagements (**K-7**) |
> | **Resolve** | **Nothing to resolve.** §11 adjudication is not invoked, and **must not be** — **PO-1** reserves leadership's attention for real contests |
> | **Preserve** | Both, independently and permanently |
> | **New claim** | Inquiry B's origination *is* the new claim |
>
> **This is consolidated §13's headline scenario and the Product Owner's own example (consolidated §7's
> Amit narrative, PO-21's *"interact with multiple projects"*).** An anchor at the Person or the work
> record holds two claims with nothing to distinguish them (§8.1) and must either report a clash or
> silently pick one. **Both outcomes are wrong and both are financial.**

#### Example 2 — Project A: CP A registers the customer; later internal sales works the customer directly

> **⟦ARCHITECT ANALYSIS⟧ K-9 — this example is two examples, and the sources separate them sharply. The
> discriminator is whether the engagement CP A's claim names is still non-terminal.**
>
> **Case 2a — the engagement is live and an internal rep begins working it.**
>
> **Working is not claiming.** **PO-4** (§10) separates **Lead Owner** from **Lead Handler** and states
> that *"a lead can change handlers without destroying ownership history."* Custody sits on the work
> record and its Assignment Log (AD-01G **G-9**, AD-01I **I-8**); the claim sits on the engagement.
> **Therefore: no creation, no challenge, no resolution — attribution is PRESERVED, and CP A remains the
> sole claimant even though no CP is doing the work.**
>
> **Two independent confirmations that this is right and not merely tidy:**
> 1. **PO-13 (§39)** entitles the CP to see *"lead information, attribution information, **pipeline
>    status**, commission status, eligibility."* If working a lead moved attribution, the CP's §39 view
>    would go dark on a lead they produced, at the exact moment it started progressing. **§39 is
>    evidence that attribution survives a change of worker.**
> 2. **PO-1** reserves attribution resolution to *authorized leadership*. A rep acquiring a claim by
>    working would be **a rep resolving attribution in their own favour by doing their job** — the
>    precise influence §11's visibility rule exists to prevent.
>
> **Case 2b — CP A's engagement closed, and the customer later comes back directly.**
>
> A new engagement opens, with a direct/internal source and, under **PO-2**'s claim entity and AD-01
> §D.4's claimant list (*"CP firm, CP sub-agent, **internal rep**, campaign"*), **its own claim**.
> **Whether CP A's closed claim also reaches that new engagement is T-4 exactly** ([§4](#4-t-4-analysis)).
>
> **K-10 — a consequence of Case 2b that must be recorded because it is the clearest demonstration of
> the attribution/commission separation this task requires.** An **internal** claimant can hold and win
> an attribution claim. Winning it produces **no §32 entitlement**, because §32 describes a **CP**
> workflow and nothing in §32, §39, §40 or §41 contemplates an internal payout. **So attribution
> resolution and commission entitlement are not even the same kind of outcome: some resolutions produce
> money and some produce only a recorded fact.** Any design that treats *"resolved attribution"* as
> synonymous with *"someone gets paid"* is wrong on the Product Owner's own sources. **Whether an
> internal claim is recorded as a claim or merely as a source is not decided here** — the sources name
> both patterns (**PO-1** says *"sources/CPs"*; §D.4 lists *internal rep*) and it is a presentation and
> reporting choice, not an anchor choice.

#### Example 3 — CP A claims Project A; CP B also claims Project A. A real clash

> **⟦ARCHITECT ANALYSIS⟧ K-11 — this is the genuine §11 clash, and the architecture must reach it
> without inventing a clash-scoping rule, because it already has one.**
>
> **What decides whether CP B's arrival is a challenge or a new claim is the Origination Rule (AD-01J
> J-2), not a separate control.** If a non-terminal engagement on that record already covers Project A,
> CP B's registration is an **activity on that engagement carrying a second claim** → **challenge → §11
> clash → leadership resolves → both claims preserved, neither overwritten** (§D.4, **R6**). If no
> non-terminal engagement covers Project A, CP B's registration **originates** one and carries the only
> claim on it → **new claim, not a challenge**.
>
> **K-12 — therefore the Origination Rule is also the clash-scoping rule, and this is a structural
> finding, not a convenience.** AD-01J **J-40** stated that the clash/non-clash distinction becomes
> *"trivial"* under the Inquiry anchor. **K-12 states why: the same rule that individuates engagements
> decides claim co-location, so the two can never disagree.** A separate clash-scoping rule would be a
> second source of truth for one fact — the objection AD-01A §3.6/§5.2, AD-01G **G-9**, AD-01H §4.2 and
> AD-01J **J-36** have each sustained.
>
> **K-13 — and therefore the size of the §11 clash population is a function of T-4.** Today, two
> registrations separated by a closure are two attributions. **If T-4 grants reach, some of them become
> contests** — which means **T-4 does not only decide who is paid; it decides how much adjudication
> work §11 creates for authorized leadership.** **PO-1** makes adjudication a leadership-only act, so
> this is a real management-capacity consequence and the owner should have it before answering T-4. **No
> prior document has stated it.**

#### Example 4 — customer previously associated with CP A; later generates a new Inquiry through CP B

> **⟦ARCHITECT ANALYSIS⟧ K-14 — the forced half and the open half, and they must not be conflated.**
>
> | Verb | Status |
> |---|---|
> | **Create** | **Forced: CP B's claim attaches to the new engagement.** It is the producer of the engagement that exists. AD-01F's **V-15**, structural half, answered by AD-01J **J-28**; confirmed here |
> | **Challenge** | **Only if T-4 grants reach.** Absent reach there is exactly one claim and no contest |
> | **Resolve** | Only if a challenge exists |
> | **Preserve** | **CP A's claim on the prior engagement is preserved, permanently and unconditionally**, whatever T-4 says (**C-II**, **R6**) |
> | **New claim** | Yes — CP B's |
>
> **"Previously associated with CP A" is doing concealed work in the example as posed, and separating
> its two readings is necessary:** if CP A's prior engagement **closed**, this is **T-4**; if it
> **converted**, this is **T-5**; if it was **cancelled after converting**, this is **AA-3**. **Three
> different items, and the example's wording does not distinguish them.** §5 shows the three are *not*
> one rule with one parameter.

#### Example 5 — manager redistributes the Lead from Employee A to Employee B

> **⟦ARCHITECT ANALYSIS⟧ K-15 — no verb fires. Attribution is PRESERVED and nothing else happens.**
> **AD-01I I-4/I-5/I-6 are fixed input**: redistribution is the same act as ordinary transfer with a
> third recorded output (management intent) on the Assignment Log; it never changes an engagement's
> disposition; it creates a working context and **never** an engagement. **AD-01J J-42** showed it has
> nowhere to put a claim. **Both are CONFIRMED here, and §12 tests for an exception and finds none.**

#### Example 6 — manager redistributes a CP-originated Lead to an internal employee

> **⟦ARCHITECT ANALYSIS⟧ K-16 — identical to Example 5, and it is the case the business will feel is
> different. It is not.**
>
> The temptation is to record that the lead *"became a direct lead"* when an internal employee took it
> over. **That would be a management act creating a commercial fact — exactly what AD-01I I-6/I-7
> forbid and what AD-01J J-16 makes representationally impossible.** Three independent guards hold:
>
> 1. **Origination-time immutability.** An engagement's **source, campaign and channel are origination
>    facts** and are not editable by any later act (**R6**; AD-01J **J-34**). The **claim set** is
>    append-only — §11 requires *each* claim recorded and §D.4 forbids overwriting — **so a claim can be
>    added but never removed or replaced**. → **K-17**, stated here as a constraint because no prior
>    document states it in this form.
> 2. **PO-13 (§39).** A CP who produced the engagement continues to see its pipeline status. If
>    redistribution moved attribution, **the CP's portal would report that a lead they produced ceased
>    to exist**, which §39 does not contemplate and which would generate precisely the disputes §11
>    exists to adjudicate.
> 3. **AD-01I I-13.** Management-generated and customer-generated reactivation are separately reported;
>    merging them *"lets a management re-attempt be counted as customer demand."* Attribution is the
>    sharpest instance of that merge.

### 3.4 The six examples in one table

| Example | Creates | Challenges | Resolves | Preserves | New claim | Turns on |
|---|---|---|---|---|---|---|
| **1** — A→CP A, B→CP B | **Two, independently** | **No** | **Nothing** | Both | Yes (the second) | Nothing open |
| **2a** — CP A, internal works it | No | No | No | **CP A's, in full** | No | Nothing open — **§10, §39** |
| **2b** — CP A closed, customer returns direct | **Yes**, internal/direct | **Only if T-4 grants reach** | Only then | CP A's prior claim, permanently | Yes | **T-4** |
| **3** — CP A and CP B, same live engagement | Yes | **Yes — the real clash** | **Leadership, §11** | **Both claims, never overwritten** | No — it is a challenge | **Origination Rule (K-12)** |
| **4** — prior CP A, new via CP B | **Yes**, CP B | **Only if reach** | Only then | CP A's prior claim | Yes | **T-4 / T-5 / AA-3 — three different items** |
| **5** — redistribution A→B | **No** | No | No | **All** | **No** | Nothing — **I-6, structural** |
| **6** — redistribution of CP lead to internal | **No** | No | No | **All, including the CP's §39 view** | **No** | Nothing — **K-17** |

> **⟦ARCHITECT RECOMMENDATION — K-18, M-5's attribution half⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK:
> canonical entities, relationships, CP commission logic, audit requirements.)*
>
> **Attribution belongs to the Inquiry, and to nothing else. It does not belong to the Lead, to the
> Person, to the Booking, or to a combination of them.**
>
> - **The Lead / work record** holds **identity continuity, custody, timeline and relationship
>   provenance** — and **no claim, no source and no commercial attribution fact** (AD-01J **J-36**,
>   independently confirmed by K-16's three guards).
> - **The Person** holds **identity** and is the subject of **§09 duplicate detection** — a different
>   control with a different purpose (**K-4**, **K-5**). **M-5's Person candidate for the uniqueness
>   boundary is untouched and open.**
> - **The Booking** holds **transaction lifecycle and the eligibility half of commission** (§9) — and
>   **no claim**, because most claims never reach one and because §11/§12 run at capture (AD-01J
>   **J-25**, confirmed).
> - **"A combination"** is rejected explicitly: a claim held at two levels is two sources of truth for
>   one fact, and the failure mode is not ambiguity but **silent divergence at §40 authorization time**.

---

## 4. T-4 analysis

### 4.1 T-4 exactly as AD-01C states it, in both places it is stated

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01C **§6**, open-questions register, verbatim:**
>
> > **T-4** — **"CP registration reach after a lost episode.** Does a CP's claim on a Dumped lead reach
> > a later, separately-sourced episode for the same Person? Spec silent (§11, §32, §40)."
> > *Arises from:* **Q5-B, D6.** *Likely owner:* **M-5 + CP commission model (M-9).**

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01C **§5**, Rule-1 silence register, verbatim:**
>
> > *"Temporal reach of a CP attribution claim across a closure (**T-4**) or across a completed purchase
> > (**T-5**) — **Never addressed** — §11, §32, §40, §41 are silent."* Handled: *"Left open. §2.2 **D6**
> > notes that Alternative A would have answered it **by accident**, which is itself a reason to reject
> > A."*

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01C **§2.2 D6**, where T-4 is first named, verbatim:**
>
> > *"If a CP registers a prospect, the lead is Dumped, and the same prospect returns direct three
> > months later, B creates a successor lead with no CP claim — and **the CP will argue their
> > introduction produced the sale. That dispute is genuine.** … A's advantage is therefore that it
> > answers an unasked question by accident. **B leaves the question visibly open, which is the correct
> > posture for a question the owner has never been asked (see T-4).**"*

> **⟦ARCHITECT ANALYSIS⟧ K-19 — three things are true of T-4's original wording and all three matter.**
> (i) It is stated in **Q5-B's Lead→Lead vocabulary**, which AD-01J **J-29** relocated to Inquiry→Inquiry
> (**A-3**, named and not made by AD-01J; **not made here either**). (ii) It contains the qualifier
> ***"separately-sourced"*** — T-4 is not asking about a CP who produces the later engagement, which is
> an ordinary new claim (**K-14**). (iii) It is stated as a **binary** (*"does … reach"*), and AD-01J
> **J-9** demonstrated that no binary answer survives. **This document does not reopen J-29 or J-9; it
> builds on them.**

### 4.2 AD-01J's four constraints, restated as input and not re-derived

> **⟦ARCHITECT ANALYSIS⟧ AD-01J §5.3's C-I … C-IV are the architectural half of T-4 and are treated as
> settled input here. They are restated only so §4.3's additions can be read against them.**
>
> | # | Constraint (AD-01J §5.3, J-31) |
> |---|---|
> | **C-I** | T-4's answer **must be a function of the prior closure's classification** — Q7 **Dimension A** — **not a single global yes/no** |
> | **C-II** | A reach rule may **only assign credit for a FUTURE conversion**; it may **never reassign credit for a past one**. **This is what protects Q6** |
> | **C-III** | If reach is granted at all, the model must be able to name **WHICH prior Inquiry** a new one succeeds (**AA-4**) |
> | **C-IV** | **Claim resolution must complete before the converting Booking reaches its §32 eligibility milestone**, or **§40** has nothing valid to authorize against |

### 4.3 Three further constraints this document adds

> **⟦ARCHITECT RECOMMENDATION — K-20, constraints C-V, C-VI and C-VII⟧** *(RECOMMENDED, SUBJECT TO
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** These are architecture, derived from recorded positions,
> and they hold under **every** possible answer to T-4 — including the answer *"no reach ever,"* under
> which they are vacuous rather than false.)*
>
> | # | Constraint | Why it is forced |
> |---|---|---|
> | **C-V** | **A reaching claim must exist as a RECORDED, APPENDED CLAIM on the new Inquiry, created by an explicit authorized act — never as a rule evaluated at eligibility time against a claim that lives elsewhere.** | **PO-1** requires *"record **each** attribution claim, preserve history."* **PO-13** entitles the CP to see *attribution information* and *eligibility* — an unrecorded claim is invisible to the party it belongs to. **C-IV** requires it to be adjudicable **before** the milestone, which an evaluate-at-payout rule cannot be. **R6** requires the creating act to be appended, not inferred. **A claim computed at invoice time is not a claim; it is a surprise.** |
> | **C-VI** | **The systemic reach determination must be made at the new Inquiry's ORIGINATION, not at conversion and not at invoice submission.** | **PO-5 (§12)** runs the duplicate/clash gate **on arrival** and forbids pretending an offline record has passed it. **C-IV** requires adjudication to finish before the milestone. If reach is determined late, an unadjudicated contest appears at the moment money is due — **AD-01E U-17's hazard in its worst form**. ***Explicitly NOT decided here:*** whether a **producer** may *file* a late claim, and whether there is a filing cut-off, **is AD-01's Q11** and is **NOT resolved, narrowed or branched** (AD-01B §6.3 sequences Q11 with M-5 and the commission model). C-VI binds the **system's** determination, not the producer's right to file. |
> | **C-VII** | **Cross-engagement reach can only CREATE A NEW, DERIVED CLAIM on the later Inquiry that cites the earlier one as its basis. It can never be the earlier claim itself extending, moving or being re-scoped.** | An engagement's **project** is definitional to it (AD-01G §5.1) and a claim recorded on it carries that project. A claim that "extends" to an engagement on a different project would have to change its own project — **mutating a historical claim, which §D.4 (*"never overwritten"*) and R6 both forbid**. It also breaks **C-III**'s determinacy in reverse: the earlier claim would have two subjects. |

> **⟦ARCHITECT ANALYSIS⟧ K-21 — C-V, C-VI and C-VII together price T-4's "yes" branch more completely
> than AD-01J did, and the price has a shape the owner should see before answering:** granting reach
> costs (a) **AA-4's succession reference** (C-III), (b) **an explicit authorized claim-creation act at
> origination** (C-V, C-VI), (c) **a derived-claim concept distinct from a filed claim** (C-VII), and
> (d) **a larger §11 adjudication population for leadership** (K-13). **Granting reach costs four
> things; refusing it costs one — the genuine dispute AD-01C D6 already identified and named as
> genuine.** *That is a statement of the trade, not a recommendation on it.*

### 4.4 The one branch of T-4 that is architecturally entailed and not a free business choice

> **⟦ARCHITECT RECOMMENDATION — K-22⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** §88 MUST-ASK: CP commission logic.)*
>
> **Where the prior Inquiry's closure is classified under Q7 Dimension A as INVALID / NON-OPPORTUNITY,
> the claim recorded on it has NO REACH. This branch is not a free business choice, and the argument for
> it is already in the record — it is AD-01J's own, unharvested.**
>
> **The derivation, stated so it can be attacked:**
>
> 1. **AD-01J J-9 rejected the uniform-yes answer to T-4 specifically and only because of the invalid
>    class.** Its stated ground: under uniform-yes, *"a CP who supplied an unusable contact is credited
>    with a sale the customer generated directly, through a channel the CP had nothing to do with."*
> 2. **An argument that rejects a rule because of the outcome it produces in case X has asserted that
>    case X's correct outcome is the opposite one.** If crediting the Wrong-Number CP were an acceptable
>    outcome, J-9 would not refute uniform-yes.
> 3. **AD-01J J-8 states the same conclusion from the meaning of the classification**: a Dimension-A
>    *invalid* closure *"asserts that there was no engagement,"* so the later Inquiry is *"commercially
>    a **first** engagement on that record."* **A claim whose own subject the business has classified as
>    not having existed cannot reach anything**, because reaching forward would require the model to
>    assert simultaneously that the prior contact was not an opportunity (loss analysis, **Q7 Dimension
>    A**) and that it produced a sale (commission, **§32**).
> 4. **Nothing is invented.** No value is proposed for Dimension A — **N-4 still owns every value**.
>    K-22 is conditional on the classification existing, which **Q7 already approved** (**AD-01A §8.3**).
>
> **What K-22 is NOT.** It is **not** a claim that the *invalid* class is well-defined today — it is
> not, and **N-4 is on T-4's critical path** (AD-01J **J-10**, **J-32**, third document to find N-4
> blocking downstream work). It is **not** a statement about the *valid-but-failed* classes. And it is
> **not** a reduction of the business decision below to a formality: **K-22 removes one branch from the
> policy space; the remaining space is genuinely the owner's.**

### 4.5 What genuinely remains of T-4, reduced to four named parameters

> **⟦BUSINESS DECISION REQUIRED — T-4's commercial half, restated at its correct subject and NOT
> answered⟧**
>
> **For a prior Inquiry closed under a Q7 Dimension-A class OTHER than invalid/non-opportunity — a real
> engagement that failed — does the claim recorded on it reach a later, separately-sourced Inquiry by
> the same Person?**
>
> **The answer is a setting of exactly four parameters. Naming them is this document's contribution;
> setting them is not, and no branch of any parameter is preferred, recommended, ranked or hinted at
> anywhere below.**
>
> | # | Parameter | The question, precisely | Depends on |
> |---|---|---|---|
> | **P-α** | **Class map** | **Which Dimension-A classes admit reach at all?** K-22 removes *invalid*. The remainder is a mapping from classes to reach/no-reach | **N-4** (the values), and **AD-01I Z-5** (whether a closure speaks about *this engagement* or *this relationship* — the same input) |
> | **P-β** | **Scope** | **Same project only, or across projects on the same record?** Cross-project reach requires **C-VII**'s derived claim and materially enlarges **C-III**'s predecessor problem | **AA-4** (C-III); **AA-1** and **Y-3** where two engagements share a project |
> | **P-γ** | **Horizon** | **Is reach bounded by elapsed time from the closure — and if so, measured from what event?** *(closure date, last contact, last customer-generated event)* | **AD-01E U-4**: **no dormancy threshold exists anywhere in the sources. None is proposed, assumed or implied here.** If the owner wants a horizon, they supply the number |
> | **P-δ** | **Mode** | **Does a reaching claim SUPERSEDE the new producer's claim, CONTEST it as a §11 clash for leadership to resolve, or RANK BELOW it?** | **PO-1** (leadership resolves); **K-13** (the adjudication population); **C-V** |
>
> **This is commercial policy about money — in substance, a statement about what a builder owes a
> channel partner for an introduction that did not convert at the time.** **§11, §32, §33, §40 and §41
> are silent** (AD-01C §5, independently re-confirmed by this pass over §11, §32, §33, §39, §40, §41,
> §42, §43, §44). **PO-22** makes inventing it a **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**.
>
> **No new number is minted: T-4 owns this question** (AD-01I §13.2's discipline). What this document
> adds is **K-22** (one branch entailed), **C-V/C-VI/C-VII** (three further binding constraints) and
> **P-α … P-δ** (the decision reduced to four settings).

### 4.6 T-4's interaction with each thing the task names

| Interacts with | Interaction, stated exactly | Label |
|---|---|---|
| **Inquiry** | T-4 asks a claim to cross the **only commercial terminal boundary in the model** (AD-01J **J-30**, confirmed). **No answer alters the closed Inquiry** — under **C-VII** reach creates a new derived claim on the *later* Inquiry and touches the earlier one not at all | ⟦ARCHITECT ANALYSIS⟧ |
| **Dump** | The closure's **Dimension-A classification is T-4's required input** (**C-I**), which is why **N-4 gates T-4's answerability**. **K-22** settles the invalid class. **AD-01I's Dump model is not reopened** | ⟦ARCHITECT ANALYSIS⟧ |
| **Success** | **Not T-4's case — it is T-5's** (§5). **Q6 is protected by C-II** and is not reopened, narrowed or tested anywhere | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking** | T-4 decides **WHO**; the Booking decides **WHETHER AND WHEN** (§9). A reach rule **tightens C-IV** rather than relaxing it, because it adds claims that must be adjudicated before the milestone | ⟦ARCHITECT ANALYSIS⟧ |
| **Re-engagement** | T-4 is **the** open question inside re-engagement. Everything else about re-engagement is forced (§13) | ⟦ARCHITECT ANALYSIS⟧ |
| **New Inquiry** | Reach, if granted, lands **on the new Inquiry as a recorded claim** (**C-V**) at **its origination** (**C-VI**), citing a **determinate predecessor** (**C-III**) | ⟦ARCHITECT ANALYSIS⟧ |
| **Attribution** | T-4 sets the **size and composition of the §11 clash population** (**K-13**) — a management-capacity consequence, not only a financial one | ⟦ARCHITECT ANALYSIS⟧ |
| **CP claims** | **P-δ** decides whether a reaching CP **supersedes**, **contests** or **ranks below** the producing CP. **§39** means the losing CP will see the outcome, so the answer must be defensible to a commercial counterparty, not only internally consistent | ⟦ARCHITECT ANALYSIS⟧ |
| **Conversion history** | **C-II**: never rewritten. **Q6 preserved exactly**: a valid Success stays historically true; a later cancellation never rewrites it; an incorrectly recorded Success is corrected only by the audited correction mechanism; a genuinely new opportunity after a Success creates a new business unit | ⟦ARCHITECT ANALYSIS⟧ |

---

## 5. T-5 analysis

### 5.1 T-5 exactly as AD-01C states it, in both places

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01C **§3.5**, where T-5 is raised, verbatim:**
>
> > **⟦OPEN — NOT RESOLVED HERE⟧ T-5.** *"Does a CP who introduced the original, **successful** purchase
> > have any claim on the same Person's later, **separately-sourced** purchase? §11, §32, §40 and §41
> > say nothing about the temporal reach of a claim. **Spec silence, flagged not filled** — the exact
> > counterpart of T-4 on the Q5 side, and the two should be answered together."*

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01C **§6**, open-questions register, verbatim:**
>
> > **T-5** — **"Repeat-purchase attribution.** Does the CP behind a completed purchase have any claim
> > on the same Person's later purchase? Spec silent. Counterpart of T-4; answer them together."
> > *Arises from:* **Q6-S4.** *Likely owner:* **Same as T-4** (M-5 + M-9).
>
> **AD-01C §3.6's consequence table also carries T-5 in one cell**, under *CP commission (§32, §40)* ×
> *S4 — new opportunity*: **"Attribution for the new episode only — T-5 open."**

### 5.2 Is T-5 relevant to this cluster? Yes — and half of it dissolves on inspection

> **⟦ARCHITECT ANALYSIS⟧ K-23 — T-5 is genuinely relevant, and it is not merely T-4 with a different
> label. Its own wording contains a qualifier that removes half of it.**
>
> **T-5 asks about a *separately-sourced* later purchase.** If the **same** CP produces the later
> engagement, there is no reach question at all: their claim attaches to the new Inquiry as an ordinary
> new claim (**K-14**, AD-01J **J-43**). **The task's test *"the same CP across multiple Inquiries"* is
> therefore not a reach case and never was** — it is two independent claims held by one claimant, and
> the anchor handles it with nothing added. **Stating this removes a case people will otherwise assume
> is hard.**
>
> **What remains of T-5 is exactly: does a producer whose claim was resolved in their favour on a
> CONVERTED engagement hold anything over a LATER engagement they did not produce?**

### 5.3 Why T-5 matters, and its dependencies

> **⟦ARCHITECT ANALYSIS⟧ K-24 — T-5 matters for three reasons, and the third is the one that makes it
> urgent rather than merely open.**
>
> 1. **It is the repeat-buyer case, and PO-21 names it as ordinary**: *"a Person can have multiple
>    leads, interact with multiple projects, become a customer, be an applicant/co-applicant."* A second
>    purchase by an existing customer is not an edge case in real-estate sales; it is the investor and
>    upgrade segment.
> 2. **It decides whether a converted record can ever be free of prior claims.** If T-5 grants
>    open-ended reach, **every future engagement by every past customer carries a legacy claim**, and
>    the §11 adjudication population grows without bound (**K-13** at its most severe).
> 3. **It is the branch where money has already moved.** Under **PO-6** and **PO-8**, a resolved claim
>    on a converted engagement produced an **entitlement**, and accrual and payout are separate — so by
>    the time T-5's question arises, the prior producer may already have invoiced and been paid.
>
> **Dependencies, stated exactly:**
>
> | Dependency | Nature |
> |---|---|
> | **V-16·claim-anchor** | **Upstream.** T-5 cannot be stated until it is known what a claim attaches to |
> | **Q6 / PO-19** | **Upstream, and binding.** T-5 must not be answered in any way that disturbs the prior Success. **C-II** guarantees it |
> | **N-4** | **Not a dependency of T-5**, unlike T-4 — T-5's prior outcome is *converted*, which is a single determinate outcome requiring no reason vocabulary. **This is the first asymmetry between T-4 and T-5** |
> | **AA-4 / C-III** | **Upstream if reach is granted** — a determinate predecessor is still required |
> | **AA-3** | **Sibling, not dependency** (§6) |
> | **M-9** | **Downstream.** M-9 consumes T-5's answer |

### 5.4 The asymmetry AD-01J's J-33 does not carry — named, and it is a required amendment

> **⟦ARCHITECT ANALYSIS⟧ K-25 — AD-01J §5.5's J-33 is over-stated, and the over-statement is
> money-bearing. This is the one place where this document contradicts its immediate predecessor.**
>
> **J-33 states:** *"T-4 and T-5 are one predicate with the prior Inquiry's terminal outcome as a
> parameter … Under the Inquiry anchor both ask 'may a claim cross an Inquiry's terminal boundary?',
> differing only in which terminal outcome was recorded — exactly the parameterisation C-I already
> requires."*
>
> **They differ in a second, independent respect that C-I does not capture: whether the prior claim has
> already been DISCHARGED.**
>
> | | **T-4** — prior outcome *closed* | **T-5** — prior outcome *converted* |
> |---|---|---|
> | Did the prior claim produce a §32 entitlement? | **No.** The introduction was never compensated | **Yes.** It was resolved, it reached a §20 Stage 3 milestone, and under **PO-6/PO-8** it generated an entitlement and possibly a payout |
> | What the reach question therefore asks | *"Should an **uncompensated** contribution earn later credit?"* | *"Should an **already-compensated** contribution earn **additional** credit?"* |
> | What "no reach" costs the producer | **A genuine dispute** — AD-01C **D6** calls it genuine | **Nothing they were promised.** They were paid for the engagement they produced |
> | What "reach" costs the builder | One extra claimant on a future sale | **One introduction becomes consideration for an unbounded series of transactions** |
>
> **This is not a nuance. It means T-4 and T-5 cannot share one rule with one parameter.** A rule
> parameterized only on terminal outcome cannot see the discharge, and a business that answers T-4
> *"reach for valid-failed closures"* would, under J-33's parameterisation, be steered toward the same
> answer for T-5 — **granting a second payment for a contribution already paid for.**
>
> → **A-7, named and NOT made** ([§17](#17-impact-on-ad-01-through-ad-01j)). **AD-01J is not edited.**
> **J-33's direction — that T-4 and T-5 belong in one sitting — is CONFIRMED and is right. Its claim
> that they are one rule is what requires narrowing.**

### 5.5 Recommended resolution of T-5

> **⟦ARCHITECT RECOMMENDATION — K-26⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: financial rules, CP
> commission logic. **No amount, rate, percentage, slab or formula is proposed.**)*
>
> **A claim that was resolved in a producer's favour on a converted Inquiry, and that thereby became a
> §32 entitlement, has NO REACH over a later, separately-sourced Inquiry. T-5's default answer is NO
> REACH.**
>
> **Grounds, all four from the Product Owner's own sources:**
>
> 1. **PO-6 (§32) makes eligibility *milestone-based*.** A milestone belongs to a **transaction**. An
>    entitlement keyed to a transaction is, by its own construction, consideration for that transaction
>    and not for a relationship of indefinite duration. **Nothing in §32, §39, §40 or §41 describes a
>    relationship-level or recurring entitlement.**
> 2. **PO-8 (consolidated §22) separates accrual from payout and makes commission a distinct per-event
>    financial concept** alongside booking, demand, receipt, allocation and ledger — **all five of which
>    are per-transaction**. A reaching post-conversion claim would be the only one of the six that is
>    not.
> 3. **PO-9 (§33) recovers overpayment against the specific Booking that unwound.** A relationship-level
>    entitlement has **no specific Booking to recover against** — the clawback model cannot express it.
>    **A rule the recovery model cannot reverse is a rule the business cannot correct.**
> 4. **It is the only branch that does not require inventing a policy.** *"An introduction is
>    consideration for the transaction it produced"* is a restatement of §32's own milestone
>    construction. *"An introduction is consideration for all future transactions by that person"* is a
>    **new commercial rule** and **PO-22** forbids inventing one.
>
> **Stated as a recommendation and not as an entailment, because it is commercial policy about money and
> the owner may legitimately override it.** A builder may choose to run a **repeat-buyer or loyalty
> policy** rewarding a CP whose client returns. **If the owner wants that, it is a positive commercial
> decision to be recorded as one — and its parameters are the same P-α … P-δ as T-4's (§4.5), minus
> P-α**, which has no work to do because *converted* is a single determinate outcome (**K-24**). **The
> architecture supports either answer; C-V, C-VI and C-VII bind both.**
>
> **What K-26 does NOT do.** It does not touch **Q6** — the prior Success remains historically true in
> every branch (**C-II**). It does not touch the prior entitlement, its invoice, its payout or its
> ledger. It does not decide the **cancelled-Booking** path, which is **AA-3** and is neither T-4's nor
> T-5's (§6). And it decides **nothing** about amounts.

---

## 6. AA-3 analysis

### 6.1 AA-3 exactly as AD-01J registers it

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01J **§14.1**, verbatim:**
>
> > **AA-3** — **"After a Booking is cancelled (§35), does a subsequent re-engagement by the same Person
> > carry the cancelled Booking's resolved attribution, a new claim, or a contested set — and does the
> > answer differ if §33 clawback was applied?"**
> > *Arises from:* §5.5, §10.3.
> > *Spec status:* **"Silent, and not covered by either existing item. T-4 is *'after a lost episode'*;
> > T-5 is *'after a completed purchase.'* A cancelled Booking is **neither** — the Inquiry's Success
> > remains historically true (P-16) while the purchase did not complete. P-13 warns that unit transfers
> > must not be treated as cancellations, which makes the input itself non-trivial."**
> > *Consequence:* **"Direct §32/§33/§40 exposure on a path with real money already moved. Either a
> > producer is paid twice for one client, or a producer who genuinely produced the re-booking is
> > refused because an earlier claim silently persists. Unrecoverable if decided by implementation."**
>
> **And AD-01J §5.5, where it is raised:** *"Neither T-4 nor T-5 covers the cancellation path, and it is
> money-bearing … the client re-engages and books again — possibly through a different producer. The
> prior Inquiry's outcome was *converted*, so it is not T-4's case; the purchase did not complete, so it
> is not T-5's case either."*

### 6.2 Is AA-3 upstream of V-16? The test, and the answer

> **⟦ARCHITECT ANALYSIS⟧ K-27 — the test for "upstream" must be stated before it is applied, or the
> answer is a matter of taste.** **AA-3 is upstream of V-16 if and only if some possible answer to AA-3
> would make some candidate anchor incapable of representing it — i.e. if AA-3 imposes a capability
> requirement that discriminates between anchors.** A question that every candidate answers equally well
> is not a prerequisite; it is a co-parameter. **This is AD-01H §4.3's and AD-01J §4.2's own method
> (test the candidate against the case and see which candidates break), applied to a dependency question
> rather than to a candidate.**

> **⟦ARCHITECT ANALYSIS⟧ K-28 — applying the test: all three of AA-3's branches are representable under
> the recommended anchor, and none of them discriminates between anchors. AA-3 is NOT upstream of
> V-16.**
>
> | AA-3 branch | Representable under the Inquiry anchor? | What it needs |
> |---|---|---|
> | **"Carries the cancelled Booking's resolved attribution"** | **Yes** | A reach rule from the converted Inquiry to the new one — **the same mechanism T-5 needs**, with **C-III**'s determinate predecessor and **C-V**'s recorded derived claim. **No new capability** |
> | **"A new claim"** | **Yes, trivially** | The new Inquiry's own claim set. **Nothing added** |
> | **"A contested set"** | **Yes** | Two claims on one Inquiry — **an ordinary §11 clash** (**K-11**). **Nothing added** |
>
> **AA-3 asks what a claim DOES across a boundary. V-16 asks what a claim IS ATTACHED TO. The second is
> a prerequisite of the first, not the reverse:** AA-3's own wording — *"carry the cancelled Booking's
> resolved attribution"* — **presupposes that attribution is resolved somewhere and has a location**,
> which is exactly what V-16 answers. **AA-3 is therefore DOWNSTREAM of V-16.**

> **⟦ARCHITECT ANALYSIS⟧ K-29 — what AA-3 IS upstream of, stated so the finding is not read as
> demoting it.** **AA-3 is upstream of M-9** (AD-01J records M-9 as consuming V-16, T-4, T-5 and AA-3,
> and that is correct). **AA-3 is a co-parameter with T-4 and T-5** and belongs in the same sitting —
> **a sitting that answers T-4 and T-5 while leaving AA-3 open produces a rule with a hole on the exact
> path where money has already moved.** And **AA-3 is jointly upstream of AA-4 with T-4/T-5**, because
> **C-III** applies identically to it.
>
> **AA-3 is NOT resolved here** — it is in this document's explicit out-of-scope list, and its substance
> is commercial policy on a §33/§35 path that **PO-10** places under **CFO validation**. **What §6
> resolves is the dependency question the task poses, and only that.**

> **⟦ARCHITECT ANALYSIS⟧ K-30 — one observation about AA-3's second clause that is architecture and not
> policy, recorded because it narrows the question without answering it.** AA-3 asks *"does the answer
> differ if §33 clawback was applied?"* **Under K-25's discharge analysis, the clawback is precisely the
> event that UN-discharges the prior claim** — it recovers the consideration. So a builder who answers
> **T-5 = no reach** on discharge grounds (**K-26**) has an internally consistent reason to answer
> **AA-3 differently where clawback was applied**, because the ground of K-26 no longer holds there.
> **This is a consistency observation, not a recommendation, and AA-3 remains entirely the owner's.**
> **It does require that the model be able to state whether a claim's entitlement was clawed back —
> which is M-9's and §33's, and is not designed, proposed or shaped here.**

---

## 7. CP-before-project-interest scenario

### 7.1 AA-2 exactly as AD-01J registers it

> **⟦PRODUCT-OWNER DIRECTION / register⟧ AD-01J **§14.1**, verbatim:**
>
> > **AA-2** — **"Is a project mandatory at Inquiry origination — and if a CP registration can be
> > recorded before any project interest is expressed (§42, §44), what does that claim attach to?"**
> > Two readings are stated in §4.5 and **neither is preferred**: **(A)** the Inquiry exists from
> > origination with project completed later; **(B)** a bare registration is a claim over a relationship
> > and needs a home the Inquiry cannot provide.
> > *Spec status:* **"Silent."** **P-14**: Helpdesk capture is *"name, limited phone identifier where
> > appropriate, **CP/source**, quick registration"*; §44 provides a temporary capture for an unmatched
> > CP sub-agent *"clearly marked as unverified and later reconciled."* **"Neither says whether a
> > project is named."**
> > *Consequence:* **"This is the one place in this analysis where the candidate model may be genuinely
> > insufficient. Under (A) an Inquiry may exist briefly without a project, which collides with V-24
> > (§08 project-scoped authorization, open). Under (B) a claim exists with nothing to attach to, and
> > §11's *'record each attribution claim'* is unsatisfiable at the moment §42 describes. Deciding it by
> > implementation decides a §88 canonical-entity question."**
>
> **And AD-01J §12.8's residue table:** *"A CP registration made before any project interest exists —
> **Undetermined — AA-2. The only place in this analysis where the model may be genuinely insufficient,
> and it is referred rather than patched.**"*

### 7.2 A source AD-01J did not cite, and it changes the evidentiary picture

> **⟦ARCHITECT ANALYSIS⟧ K-31 — AD-01J §4.5 cites §42 and §44 and does not cite §43. §43 is the
> strongest evidence in the sources on this exact question, and it points to a reading AD-01J treats as
> costly.**
>
> **PO-16 (§43):** *"If a field Sales Rep is responsible for **enriching a lead later**, the system can
> maintain a **pending enrichment queue**. This should create accountability without blocking urgent
> sales activity."*
>
> **§42 and §43 together are a complete, Product-Owner-authored statement of the pattern AA-2 is
> about:** a record enters the system **incomplete**, under time pressure, carrying **CP/source**, and
> is **completed later under named accountability**. **That is not a gap in the model; it is a workflow
> the Product Owner has already described.** The remaining question is what the incomplete thing *is* —
> which is AA-2 — but the evidence that an incomplete capture is legitimate is no longer "silent."
>
> **Two honest qualifications, so this is not over-read.** (i) §43 says *"enriching a lead"* and does
> not say a lead may lack a project. (ii) §42's frame is a project-site helpdesk during a launch, where
> the project is contextually obvious — which arguably makes the pre-project case rarer than it looks,
> and arguably makes §42 the *wrong* source for it. **Neither qualification is decisive. AA-2 remains a
> business decision.**

### 7.3 The four options the task names, tested

> **⟦ARCHITECT ANALYSIS⟧ K-32 — Option (A), "the Lead itself carries the CP-prospect relationship," is
> ELIMINATED, and it is eliminated by an argument already in the record rather than by a new one.**
>
> If the work record carries *"CP A is this person's producer,"* then when the person subsequently opens
> engagements on three projects, **the model has already decided that CP A's claim covers all three.**
> That is **AD-01C §2.2 D6's decisive objection verbatim**: a record-spanning claim does not *decide*
> that a claim reaches forward — it **silently creates that policy**, and *"nothing in §11, §32, §40 or
> §33 says that, and inventing it would breach Rule 1 and §88's prohibition on inventing business
> rules."* **Option (A) answers T-4 and T-5 by accident, in the "unlimited reach" direction, without the
> owner being asked.** It also contradicts **J-36** (no record-level source, campaign or attribution
> fact) and reinstates the failure **K-8** and AD-01H Example 4 demonstrate.
>
> **Option (A) is rejected. This is a stronger statement than AD-01J made — AD-01J left readings A and
> B unranked — and it is made here because the task asks for the option to be evaluated and because the
> ground for rejecting it is AD-01C's, not this document's.**

> **⟦ARCHITECT ANALYSIS⟧ K-33 — Option (B), a preliminary project-less Inquiry, SURVIVES with three
> priced costs and one large, under-appreciated advantage.**
>
> | | |
> |---|---|
> | **Cost 1** | **§08 project-scoped authorization has nothing to scope against** for as long as the Inquiry lacks a project. **This is V-24 and V-24 is open** — not resolved, narrowed or branched here |
> | **Cost 2** | **It enters the Capture count and the conversion denominator** (AD-01J **J-19**, **J-48**) as an engagement with **no project**, so project-conversion reporting acquires a null-project bucket. **Derivable and reportable, but it is a real reporting consequence** |
> | **Cost 3** | **It strains J-34's definition** — *"a dated, sourced, **project-contexted** expression of interest"* — by admitting an instance that is not project-contexted at origination |
> | **Advantage** | **The claim never has to move.** It is created on the object it will permanently belong to, and completing the project **completes** that object rather than creating a second one. **C-III's determinacy and C-VII's no-mutation rule are satisfied for free** — under any option where the claim starts somewhere else, the act of attaching it later is a claim-relocation event, and every relocation is an opportunity to relocate it wrongly |

> **⟦ARCHITECT ANALYSIS⟧ K-34 — Option (C), "another existing concept," is REAL, and it is a third
> reading AD-01J does not state. It uses only entities §06 already names.**
>
> **PO-2 makes `Lead Attribution Claim` a canonical entity in its own right.** AA-2 assumes the claim
> must live *on* something that is itself complete; **it does not follow that the claim must be
> ATTACHED to be RECORDED.** **PO-17 (§44) supplies the Product Owner's own pattern for exactly this
> situation**: *"a temporary/manual capture mechanism … **clearly marked as unverified and later
> reconciled**."* §44 applies that pattern to an unmatched **sub-agent**; the pattern itself —
> *record now, mark it not-yet-valid, reconcile later* — is general and is the Product Owner's.
>
> **Reading (C), stated precisely:** a pre-project CP registration is recorded as a **filed but
> unattached claim** in a pending/unreconciled condition, **which is not attribution and confers
> nothing**, and which must be **attached to an Inquiry by an explicit authorized act** — or lapse —
> before it can participate in §11 adjudication or §40 authorization.
>
> | Property | Under reading (C) |
> |---|---|
> | **Does it create a new canonical entity?** | **No.** `Lead Attribution Claim` is already canonical (**PO-2**). It is a **state on an existing object**, not a new object |
> | **Does it answer T-4/T-5 by accident?** | **No — and this is the crucial property.** An unattached claim confers nothing, so it grants no reach. **Provided the attachment rule is explicit policy.** An automatic *"attach to the next Inquiry that appears"* default **would** be a silent reach rule and would fail on **K-32**'s exact grounds |
> | **Does it preserve the Inquiry as a precise commercial object?** | **Yes.** Every Inquiry keeps a project, a source and a date. **J-34 survives unchanged** |
> | **Does it satisfy §11?** | **Yes** — *"record each attribution claim, preserve history"* is satisfied at the moment §42 describes, which is what AD-01J observed reading (B) fails to do under strain |
> | **Cost** | **A claim can exist in a condition where it is not on an Inquiry**, which strains AD-01J §6.2's property 3 (*"everything commercial hangs off an Inquiry"*). **The strain is real and is stated, not softened.** It is bounded: the unattached condition confers nothing, so nothing commercial actually hangs off it |
> | **Cost** | **The attaching act is a new authorization surface** and **PO-1** would make it leadership's if it can decide a contest. **Who may attach is not decided here** and is adjacent to **AD-01C T-2**, unresolved |

> **⟦ARCHITECT ANALYSIS⟧ K-35 — Option (D), a genuinely missing business concept, is NOT REACHED. This
> is the direct answer to the task's question.**
>
> **The scenario CAN be represented by the current Person → Lead → Inquiry model** — under **(B)** with
> three priced costs, and under **(C)** with no new entity and no damage to the Inquiry's precision.
> **Two viable representations exist, therefore no concept is demonstrably missing, therefore no entity
> may be created.** This is the standard AD-01F, AD-01G, AD-01H, AD-01I and AD-01J each applied, and it
> is applied here for the sixth time with the same result.
>
> **The candidates tested and rejected as homes for this claim, for completeness:**
>
> | Existing concept | Why it cannot hold a pre-project CP registration |
> |---|---|
> | **Work record / Lead** | **Option (A) — eliminated (K-32).** It silently answers T-4/T-5 |
> | **CP Profile / Relationship** (§06) | It is the **CP↔Builder** relationship, not the **CP↔prospect** relationship. A claim about a prospect has no place in it, and putting one there would make every CP's profile a list of people they claim — **a record-level claim pile at one remove (J-22)** |
> | **Assignment Log** (§06) | Assignment presupposes something to assign. **AD-01I I-8** homes the management **intent** here; a producer's commercial claim is not a management intent, and merging them would be **I-7's forbidden derivation** in a new place |
> | **Booking Group** | Does not exist yet by many months |

> **⟦BUSINESS DECISION REQUIRED — AA-2, NARROWED and explicitly NOT RESOLVED⟧**
>
> **AA-2 remains open and is the Product Owner's.** This document **narrows** it from two unranked
> readings to **two surviving options with priced costs and one eliminated option**:
>
> - **(A) the Lead carries the CP-prospect relationship — ELIMINATED** (**K-32**, on AD-01C **D6**'s
>   grounds).
> - **(B) a preliminary project-less Inquiry — surviving**, cost: **V-24** collision, a null-project
>   denominator bucket, and a strain on **J-34**.
> - **(C) a filed-but-unattached claim in §44's own *unverified, later reconciled* condition —
>   surviving**, cost: a claim may briefly exist off-Inquiry, and a new authorization surface for the
>   attaching act. **Requires that the attachment rule be explicit policy and never an automatic
>   default.**
> - **(D) a genuinely missing concept — NOT REACHED** (**K-35**). **No entity is proposed.**
>
> **No option is preferred, recommended or ranked between (B) and (C).** **AD-01J's AA-2 is not resolved
> by this document and its "may be genuinely insufficient" flag is answered only to this extent: the
> insufficiency is not demonstrated, because (C) exists.**

---

## 8. Attribution alternatives

> **⟦ARCHITECT ANALYSIS⟧ The anchor is re-derived here independently. AD-01J's conclusion is the
> hypothesis under test, not the starting point. Each candidate is run against the full thirteen-case
> test set the task names — and three of those cases (§26 unit transfer, §06 multi-applicant Booking
> Group, §41 sub-agent) have never been run against any anchor candidate by any prior document.**

### 8.1 Candidate A — the Person

> **⟦ARCHITECT ANALYSIS⟧ K-36 — the Person anchor fails on capability, and it fails on a case the
> Product Owner describes as ordinary. Re-derived here rather than cited.**
>
> **The test is the two-conversion case** (AD-01H Example 4; **PO-21**'s *"interact with multiple
> projects"*; consolidated §13's *"multiple project interests"*): one client, two engagements, two
> producers, **both convert**, two Bookings, two §32 entitlements.
>
> A claim held at the Person carries no project and no engagement scope. When Booking 1 reaches its
> §32 milestone, **§40's server-side authorization must decide which of the two claims is entitled, and
> the model holds nothing that distinguishes them.** The only repair is to give each claim a project and
> a date scope — **at which point the claim has become an engagement-shaped object and the Person anchor
> has rebuilt the Inquiry inside itself.** This is AD-01H §4.3's *"at which point Model B **is** Model
> D"* move and AD-01J §4.2's; **it is reproduced here because it is the correct test and it reaches the
> same result independently.**
>
> **K-37 — and the governance failure is worse than the capability failure, which is the same finding
> K-32 reaches from the AA-2 direction.** A Person-level claim set **has already granted unlimited reach
> by construction** and **answers T-4 and T-5 without the owner being asked** (**AD-01C D6**). Under
> **PO-22** that is not a defensible way to decide a commission policy. **The Inquiry anchor is the only
> candidate that leaves T-4 and T-5 answerable in BOTH directions** — reach can still be granted by an
> explicit approved rule; it cannot be un-granted once the data model has assumed it.
>
> **Rejected as the attribution anchor. M-5's Person candidate for the uniqueness / duplicate-detection
> boundary is a different question, is untouched, and remains fully open (K-4).**

### 8.2 Candidate B — the Lead / work record

> **⟦ARCHITECT ANALYSIS⟧ K-38 — fails identically, for a structural reason: under AD-01G G-1 the work
> record is Person-bounded within the tenant, so it fails wherever the Person fails.** AD-01H §12 row 1
> already eliminated it on Example 4; AD-01J **J-23** extended the argument to the Person. **Both are
> confirmed.** Three further failures this document adds:
>
> 1. **It cannot represent Example 1** (Amit: Project A → CP A, Project B → CP B) without holding two
>    claims it cannot tell apart — **the Product Owner's own headline scenario** (consolidated §13).
> 2. **It makes redistribution dangerous.** If claims sat on the work record, a redistribution — which
>    acts on the work record — would be operating on the same object that holds the claims. **AD-01I
>    I-6's prohibition would have to be enforced by a rule rather than guaranteed by structure**
>    (AD-01J **J-16**, confirmed and here given its converse form).
> 3. **It contradicts J-36's derived first-source** by requiring a persisted record-level commercial
>    fact.
>
> **Rejected.**

### 8.3 Candidate C — the Inquiry

> **⟦ARCHITECT ANALYSIS⟧ K-39 — the Inquiry passes every case in the test set, including the three no
> prior document ran; it needs one clause it does not currently have; and it has exactly one genuinely
> undetermined case.**
>
> | Test case from the task | Result under the Inquiry anchor |
> |---|---|
> | **Multiple projects** | **Pass.** Project is definitional to the Inquiry (AD-01G §5.1). Two projects, two claim sets, no clash (**K-8**) |
> | **Multiple Inquiries under one Lead** | **Pass.** Each carries its own claim set; the record carries none |
> | **Multiple CPs** | **Pass.** §11 clash is *two claims on one Inquiry* (**K-11**); *two claims on two Inquiries* is two attributions (**K-8**) |
> | **Same CP across multiple Inquiries** | **Pass, and it is not a reach case at all** (**K-23**). Two independent claims, one claimant |
> | **Customer re-engagement** | **Pass structurally**; the prior producer's position is **T-4/T-5/AA-3** |
> | **Dumped Inquiry then a new Inquiry** | **Pass structurally**; **T-4**, with **K-22** settling the invalid class |
> | **Successful Booking** | **Pass.** The converted Inquiry's resolved claim identifies the entitled party; the Booking carries the milestone (§9) |
> | **Manager redistribution** | **Pass, structurally.** No Inquiry is created, therefore no claim can be (**K-15**, **K-16**) |
> | **Transfer between sales representatives** | **Pass.** Custody is a work-record fact (**PO-4**); attribution is untouched (**K-9** Case 2a) |
> | **CP-originated prospect (with a project)** | **Pass.** The CP's registration originates the Inquiry and carries its claim |
> | **CP-originated prospect (no project yet)** | **UNDETERMINED — AA-2.** Narrowed to (B) or (C) in §7; **not resolved** |
> | **Duplicate / clash claims** | **Pass, and the scoping rule is free** — the Origination Rule decides it (**K-12**) |
> | **Cancellation (§35)** | **Pass structurally** — the Inquiry's Success is untouched (**Q6**, **PO-19**); the attribution consequence is **AA-3**, open |
> | **Unit transfer (§26)** | **Pass — and it is a NEW ARGUMENT FOR the anchor. See K-40** |
> | **Multi-applicant Booking Group (§06)** | **UNDERSPECIFIED — a new item. See K-41** |
> | **CP sub-agent (§41)** | **Pass in shape, with one open commercial question. See K-42** |

> **⟦ARCHITECT ANALYSIS⟧ K-40 — the unit-transfer case has never been run against an anchor candidate,
> and it is an independent argument FOR the Inquiry that no prior document has made.**
>
> **PO-10 (§26)** requires that a unit transfer **not** be treated as a cancellation for CP clawback,
> and **PO-11 (§25)** requires post-booking change to be a controlled amendment preserving original
> history. **A transfer therefore disturbs the Booking — whatever the Booking state machine decides that
> means — and must NOT disturb the CP's entitlement.**
>
> **Under the Inquiry anchor, the entitled party is identified by the resolved claim on the converting
> Inquiry, and a unit transfer touches no Inquiry at all.** The Inquiry converted; **Q6/PO-19** makes
> that permanent; §26 operates entirely on the transaction. **So the Inquiry is the only object in the
> commission join that a §26 transfer structurally cannot disturb** — which is precisely the property
> §26 demands and which a Booking-anchored attribution model cannot provide (§8.4). **The case §26 warns
> about hardest is the case the Inquiry anchor handles for free.**
>
> **Two consequences, both stated as constraints rather than as design:**
> - **The attribution half of a unit transfer is settled: no new Inquiry, no new claim, no new claim
>   event, attribution unchanged.** ⟦ARCHITECT RECOMMENDATION⟧
> - **The entitlement-identity half is not settled and is NOT this document's** — whether the
>   post-transfer entitlement is *the same entitlement* or *a new one against a new transaction* is
>   **AB-2** (§16) and sits squarely inside **PO-10**'s own *"CFO validation requirement."*

> **⟦ARCHITECT ANALYSIS⟧ K-41 — the multi-applicant Booking Group is a genuine gap, no prior document
> in the AD-01 line addresses it, and it is money-bearing.**
>
> **PO-2 (§06):** *"**Booking Group** — Transaction envelope connecting applicants/co-applicants with
> inventory. **A booking may involve multiple Persons.**"* **PO-21 (§07):** a Person may *"be an
> applicant/co-applicant."*
>
> **Under the recommended anchor the work record is Person-bounded (AD-01G G-1) and an Inquiry hangs off
> one work record — therefore one Person.** A Booking Group involving two Persons can therefore be
> reached from **two different Persons' Inquiries**, each with **its own claim set** and potentially
> **different producers**. When that Booking Group reaches §20 Stage 3:
>
> - **Do both Inquiries convert, or only one?** **Q4/PO-18** and AD-01H **H-8** key conversion on *the*
>   Booking reaching Stage 3 and are silent on cardinality.
> - **If both convert, §32 has two entitled parties for one transaction, and §40 has two claims to
>   authorize.** Nothing in §32, §40 or §41 says which, or whether both.
> - **If only one converts, which one — and what is the other Inquiry's outcome?** It did not close
>   with a Q7 reason, and it did not convert.
>
> **This does not break the anchor** — the claim still lives on an Inquiry in every branch, and no other
> candidate does better (the Person anchor cannot even name the two claim sets; the Booking anchor makes
> the question worse by having one object for two producers). **It is a cardinality question about the
> Inquiry↔Booking relationship that no source answers.** → **AB-1** (§16). **A search of AD-01 through
> AD-01J finds no treatment of it: every reference to *applicant/co-applicant* in the line quotes §07's
> list and none draws the attribution consequence.**

> **⟦ARCHITECT ANALYSIS⟧ K-42 — the CP sub-agent case resolves the claimant side of V-16 in shape, and
> exposes one commercial question.**
>
> **PO-14 (§41)** requires **Parent CP Firm → Principal → Sub-Agent** to be preserved and forbids giving
> a sub-agent principal-level permissions. **PO-2 (§06)** places the **CP Ledger** on *"the CP
> **relationship**"*. AD-01 §D.4 records that a claim identifies *"the claimant (CP firm, CP sub-agent,
> internal rep, campaign)."*
>
> **Therefore V-16's answer has two halves on the claimant side as well as on the object side:**
>
> | | Anchor | Source |
> |---|---|---|
> | **WHO produced it** (the claim's claimant) | The **producing party as recorded on the claim** — which may be a **sub-agent** | AD-01 §D.4; **PO-14** |
> | **WHO is the counterparty of the money** | The **CP relationship**, whose ledger §06 defines | **PO-2**; **PO-6** |
>
> **This is the same two-anchor shape as §9, applied to the party rather than to the event, and it falls
> out of §06 without anything being added.** ⟦ARCHITECT RECOMMENDATION⟧
>
> **The open question: may a sub-agent hold an entitlement and be paid independently of the firm?**
> **§41 is silent on money; §32 requires legal/tax treatment to be *"validated separately"*; §44's
> unverified-sub-agent capture shows a sub-agent may be recorded before the relationship is even
> confirmed.** → **AB-3** (§16). **No answer is proposed and no payout structure is designed.**

### 8.4 Candidate D — the Booking

> **⟦ARCHITECT ANALYSIS⟧ K-43 — the Booking is eliminated as the attribution anchor on three grounds,
> each independently sufficient. Two are AD-01J's (J-25) and are confirmed; the third is new.**
>
> 1. **Most claims never reach a Booking.** A CP introduces a prospect who does not convert. The claim
>    was made, recorded, possibly adjudicated by leadership under §11 — with no Booking in existence.
>    **An anchor that exists for a minority of its instances is not an anchor.**
> 2. **Clash detection runs at intake, not at conversion.** **§11** is a capture-time control and **PO-5
>    (§12)** makes offline records *pending synchronization* precisely so the gate can run on arrival.
>    **An object that does not exist until §20 Stage 3 cannot carry a capture-time control.**
> 3. **NEW — §26 makes the Booking an unstable identity, by the Product Owner's own instruction.**
>    **PO-10** contemplates *"old booking → new booking"* on a unit transfer while forbidding the
>    clawback that would naturally follow. **An attribution anchored on a record the business
>    deliberately replaces mid-transaction would relocate attribution every time a customer changed
>    units** — the exact outcome §26 exists to prevent. **The very warning §26 issues is a proof that
>    attribution must not live there.**
>
> **Rejected as the attribution anchor. Adopted as the eligibility anchor, with a refinement (§9).**

### 8.5 Candidate E — other existing concepts

> **⟦ARCHITECT ANALYSIS⟧ K-44 — three existing concepts tested as anchors; none survives; no new entity
> is created.**
>
> | Concept | Verdict |
> |---|---|
> | **`Lead Attribution Claim` as its own anchor** (i.e. the claim anchors itself, referencing whatever it likes) | **Rejected as an ANCHOR, retained as a CARRIER.** A claim that is its own anchor answers *"what is this claim about?"* with *"whatever it points at,"* which makes §11's clash test (*do two claims name the same engagement?*) undecidable — the model could not tell two co-located claims from two unrelated ones. **A claim must be about something.** **It does, however, survive as the carrier in §7's reading (C)**, precisely because that reading defines an *unattached* claim as one that confers nothing |
> | **`CP Profile / Relationship`** | **Rejected** — it is the CP↔Builder relationship, not a claim about a prospect (**K-35**) |
> | **`Booking Group`** rather than *a Booking* | **Rejected as the attribution anchor** for K-43's reasons 1 and 2, which apply identically. **It is, however, the more precise object for the ELIGIBILITY anchor than "the Booking"** — §9 |
> | **AD-01E's `Sales Episode`** | **Re-tested a fifth time against this document's test set and REJECTED.** Every property it would need — own source, own claim set, own terminal outcome, own origination — is the Inquiry's, and it adds nothing on the three new cases (§26, Booking Group, §41) either. **Its conditionality on AD-01G G-1 is preserved unchanged (AD-01G G-4, AD-01H H-10, AD-01I I-9, AD-01J J-52): if V-1 is ever resolved toward Model A, the rejection does not stand. It is not made unconditional here** |
> | **A new `Commercial Opportunity` entity** | **Re-tested and REJECTED.** AD-01J **J-51** tested it property-by-property; this document adds that it fails the three new cases as well — it does not help with §26 (it would be one more object a transfer must not disturb), it does not resolve the Booking Group cardinality (**AB-1** arises identically), and it has nothing to say about §41. **An entity that solves none of the three hardest cases is not earning its existence** |

---

## 9. Commission-anchor alternatives

> **⟦ARCHITECT ANALYSIS⟧ This section determines the commission-ELIGIBILITY anchor only. It proposes no
> formula, rate, percentage, slab, milestone value, clawback quantum or TDS treatment. M-9 owns the
> commission model and is not resolved, narrowed or pre-empted anywhere.**

### 9.1 Why there must be two anchors and not one

> **⟦ARCHITECT ANALYSIS⟧ K-45 — AD-01J's J-26 separated the two anchors and its separation is correct.
> Re-derived here independently, from the sources rather than from J-26.**
>
> **PO-8** states the separation in the Product Owner's own words: commission is *"distinct"* from
> booking, demand, receipt, allocation and ledger, and *"accrual and payout are separate."* **PO-6**
> makes eligibility ***milestone-based***, and a milestone is a property of a transaction. **PO-1**
> makes the producer a property of an adjudicated **claim**. **Two facts, two owners:**
>
> | Question | Anchor | Source |
> |---|---|---|
> | **WHO is entitled** | The **resolved attribution claim on the converting Inquiry** | **PO-1**; AD-01 **E-13** (commission keys on the resolved claim, never on a lifecycle state) |
> | **WHETHER and WHEN it is payable** | The **Booking transaction** and its milestones | **PO-6**, **PO-7**, **PO-9**, **PO-20** |
>
> **K-46 — two consequences, both architecture and neither a formula.**
> 1. **Commission eligibility is a JOIN, never a lookup.** Reading the entitled party from the Booking
>    alone is guessing the producer; reading payability from the Inquiry alone is asserting a milestone
>    that lives on the transaction. **Both are §40 authorization errors, not reporting errors.**
> 2. **Claim resolution must precede eligibility in time** (**C-IV**). If a §11 contest on the
>    converting Inquiry is unadjudicated when the milestone is reached, **§40 has nothing valid to
>    authorize against**, and the only choices are to block a legitimate invoice or to authorize an
>    unresolved claim. **AD-01E U-17 and AD-01F §12.3 fact 6 identified the hazard; C-IV is its
>    financial expression; neither is resolved here.**

### 9.2 The refinement J-26 does not carry — the eligibility anchor must survive §26

> **⟦ARCHITECT RECOMMENDATION — K-47⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT
> APPROVED.** §88 MUST-ASK: financial rules, CP commission logic.)*
>
> **The eligibility anchor is not "the Booking record" — it is the TRANSACTION IDENTITY that §25
> amendments and §26 unit transfers preserve, whatever the Booking state machine determines that
> identity to be.**
>
> **Why the refinement is forced.** **PO-10** contemplates *"old booking → new booking → financial
> transfer/reconciliation"* on a transfer while **forbidding** the clawback that a naive
> close-and-recreate would trigger, and **PO-9** repeats the warning. **An eligibility anchor that is
> literally the Booking record therefore breaks on the one case the spec flags twice.** **PO-11 (§25)**
> supplies the general principle — original history preserved, change represented as a controlled
> amendment — and **PO-12 (§35)** supplies the same principle for cancellation: *"'Handled offline' does
> NOT mean destroy history."*
>
> **This is a constraint ON the Booking state machine, stated from the commission side. It does not
> design that state machine, does not decide whether a transfer produces one Booking or two, and does
> not touch amounts.** **The Booking state machine is explicitly NOT taken here** (§18).

### 9.3 The alternatives, tested

| Candidate eligibility anchor | Verdict |
|---|---|
| **The Inquiry alone** | **Rejected.** It carries no milestone. §40 would have to authorize against *"converted,"* which is a single event, while **PO-6** requires *milestone-based* eligibility that may fall at a payment stage after Stage 3 |
| **The Booking record** | **Rejected as stated** — **K-47**: it does not survive §26 |
| **The transaction identity across §25/§26** | **RECOMMENDED — K-47.** The only candidate that satisfies **PO-6**, **PO-9** and **PO-10** simultaneously |
| **The CP Ledger** | **Rejected as the eligibility anchor.** **PO-2** makes the ledger an *accounting record for the CP relationship* — it records consequences, it does not determine them. Anchoring eligibility on the ledger would make the accounting record its own authority, which **PO-8**'s separation of *approval / validation / payment by responsible functions* forbids |
| **The resolved claim alone** | **Rejected.** It answers *who*, never *whether* |

> **⟦ARCHITECT RECOMMENDATION — K-48, consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.**)*
>
> **Commission eligibility is the join of (i) the resolved attribution claim on the converting Inquiry —
> the WHO — and (ii) the transaction identity that survives §25/§26 and its §32 milestone — the WHETHER
> AND WHEN. Neither half alone is an anchor, and the two must not be merged.** **The counterparty of the
> money is the CP relationship (K-42); the producer recorded on the claim may be a sub-agent within it.**
> **No amount, rate, slab, milestone value, clawback quantum or TDS treatment is proposed, implied or
> derivable from anything above. M-9 owns all of it.**

---

## 10. Inquiry/Lead/Booking boundary

### 10.1 What each object owns, for attribution purposes only

| Object | Owns, for attribution and commission | Does NOT own | Status |
|---|---|---|---|
| **Person** | Identity; the subject of **§09 duplicate detection** | **No claim.** No source. No commercial fact | **CONFIRMED** (§07); the duplicate-detection key is **M-5**, open |
| **Lead / work record** | Relationship continuity; custody and handler; timeline; a **derived** first-source that is *not a claim, not a commission input and not a source-performance input* (AD-01J **J-36**, confirmed) | **No claim.** No persisted source. No commercial attribution fact | **CONFIRMED** (**G-1**, **K-38**, **K-16**) |
| **Inquiry** | **The attribution claim set** — created at origination, **append-only**, **never overwritten** (**K-17**); the resolved attribution; the §11 clash scope; the conversion reference | The milestone. The money. The handler | **RECOMMENDED — K-18** |
| **Booking / transaction identity** | The **§32 milestone**; §33 clawback's subject; §25/§26 amendment history | **No claim.** It cannot say who produced the engagement | **RECOMMENDED — K-47** |
| **Assignment Log** | Custody, the history decision, and **AD-01I I-8**'s management intent | **No claim. Ever** | **CONFIRMED** (**I-8**, **K-15**) |

### 10.2 The clause the Origination Rule does not have — and it is money-bearing

> **⟦ARCHITECT ANALYSIS⟧ K-49 — AD-01J's J-2, read literally, opens a new Inquiry on a unit-transfer
> request. That is a real defect in the rule as stated, it is reached from this document's §26 test, and
> it must be named rather than worked around.**
>
> **J-2 as stated:** *"A customer-generated expression of interest opens a NEW Inquiry if and only if no
> non-terminal Inquiry on that work record already covers it."*
>
> **Apply it to a unit transfer.** The customer, having booked, asks to move to a different unit. That
> is a customer-generated event. The Inquiry that produced the booking is **terminal** (converted) and
> therefore **covers nothing** — *"converted and closed are both terminal, and both are equally
> uncoverable"* (AD-01J **J-46**). **J-2 as written therefore opens a new Inquiry.** A new Inquiry
> carries **its own claim set** (**J-34**), so a producer could attach a claim to it — **and §26's
> forbidden outcome arrives through the front door: attribution moves on a unit transfer.**
>
> **The same literal reading misfires on §25 amendments and on the §35 cancellation event itself.**
>
> > **⟦ARCHITECT RECOMMENDATION — K-50, the domain clause⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> > APPROVAL. **NOT APPROVED.**)*
> >
> > **The Origination Rule's domain is customer-generated COMMERCIAL ORIGINATION events. A
> > customer-generated event that operates on an EXISTING TRANSACTION — a §25 amendment, a §26 unit
> > transfer, a §35 cancellation — is a transaction event and originates no Inquiry.**
> >
> > **Grounds:** **PO-11 (§25)** classes post-booking change as a *controlled adjustment/amendment*;
> > **PO-10 (§26)** classes a transfer as a transfer and explicitly not as a cancellation-and-new-sale;
> > AD-01J **J-47** already places transaction lifecycle wholly on the Booking. **The clause adds
> > nothing new to the model; it states a boundary the model already assumes and J-2 does not carry.**
> >
> > **This does NOT contradict AD-01J §10.3.** AD-01J holds that after a cancellation, a **subsequent
> > customer re-engagement** opens a new Inquiry. K-50 agrees: the **cancellation** originates nothing;
> > a **later expression of interest** originates normally. **The two statements are consistent and
> > K-50 is the missing boundary between them.**
>
> → **A-6, named and NOT made** ([§17](#17-impact-on-ad-01-through-ad-01j)). **AD-01J is not edited.**

### 10.3 Is Inquiry → Booking sufficient to preserve commercial attribution?

> **⟦ARCHITECT ANALYSIS⟧ K-51 — the direct answer: SUFFICIENT for a single-applicant booking at all
> three time points; UNDERSPECIFIED for a §06 multi-applicant Booking Group.**
>
> | Time point | Sufficient? | Why |
> |---|---|---|
> | **Before booking** | **Yes** | The claim exists on the Inquiry from origination and is adjudicable under §11 long before Stage 1. **This is the point at which the Booking anchor has nothing at all** (**K-43**) |
> | **At booking** | **Yes, for one applicant** | The Inquiry converts and references the transaction (**H-8**, **Q4**); the entitled party is the Inquiry's resolved claim; the milestone is the transaction's. The join is determinate |
> | **After booking** | **Yes — and this is where it is strongest** | **§26 transfer: the Inquiry is untouched (K-40). §35 cancellation: Q6/PO-19 keeps the conversion historically true and the claim with it. §33 clawback: it acts on the ledger and the transaction, not on the claim.** No post-booking event can move attribution |
> | **Multiple Inquiries under the same Lead** | **Yes** | Each Inquiry converts, or does not, independently; each references its own transaction. AD-01H Example 4 |
> | **Multiple Bookings under the same customer** | **Yes** | Same as above. **Whether a claim on one reaches another is T-5, not a sufficiency question** |
> | **One Booking Group, multiple applicants** | **UNDERSPECIFIED** | **K-41 → AB-1.** Two Persons' Inquiries may reach one transaction envelope |

---

## 11. Duplicate/clash implications

> **⟦ARCHITECT RECOMMENDATION — K-52, the scoping answer⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** **No UI, no resolution workflow, no notification design and no
> adjudication procedure is proposed — §11 reserves adjudication to authorized leadership and AD-01A
> §8.5 forbids inventing a workflow around it.**)*
>
> **A §11 clash is scoped to the ATTRIBUTION-CLAIM SET OF ONE INQUIRY. It is therefore
> attribution-claim-specific, and — because project is definitional to the Inquiry — necessarily
> project-specific as a consequence rather than as a separate rule. It is NOT Lead-level, NOT
> Person-level, and NOT project-level-in-general.**
>
> **The five candidate scopings the task names, resolved:**
>
> | Candidate scope | Verdict |
> |---|---|
> | **Person-level** | **No — for clash.** It is the right level for **§09 duplicate detection**, which is a different control (**K-4**, **K-5**) and is **M-5's open half** |
> | **Lead-level** | **No.** It produces AD-01C **D6**'s *"clash that is not a clash"* and cannot represent Example 1 |
> | **Project-specific** | **Implied, not independent.** An Inquiry-scoped clash is project-specific automatically. **Whether two Inquiries on ONE project are one clash scope or two is AA-1 and Y-3 — NOT resolved here** |
> | **Inquiry-level** | **Yes** |
> | **Attribution-claim-specific** | **Yes — and it is the same answer**, stated from the claim side: claims contest only when co-located on one Inquiry |

### 11.1 The four scenarios the task names

| Scenario | Clash? | Basis |
|---|---|---|
| **Two CPs claim the same customer AND the same engagement** | **Yes — the paradigm §11 clash.** Both claims recorded, neither overwritten, leadership resolves | **K-11**, **PO-1**, §D.4 |
| **An internal lead already exists and a new CP inquiry arrives** | **Decided by the Origination Rule (K-12).** Covered by a non-terminal Inquiry → a **second claim on it → clash**. Not covered → a **new Inquiry with one claim → not a clash** | **K-12** |
| **The customer previously worked with another CP** | **Not a clash today.** It becomes one **iff T-4/T-5/AA-3 grant reach** — and under **P-δ** the owner may choose *contest* precisely so that it does | **K-13**, §4.5 |
| **Same customer, different projects, different CPs** | **Not a clash.** Two attributions. **This is the case AD-01C D6 said a coarse anchor structurally cannot distinguish, and it is M-5's own worked example (K-5)** | **K-8**, **K-5** |

> **⟦ARCHITECT ANALYSIS⟧ K-53 — two consequences for controls that already exist, neither of which is
> resolved here.**
>
> 1. **§12's offline pending-sync gate acquires a determinate subject, and a harder one.** **PO-5**
>    requires the clash gate to run server-side on sync. Under **K-12** the gate's first question is
>    *"which Inquiry does this arriving registration attach to?"* — the Origination Rule — **and an
>    offline device cannot evaluate it reliably, because it may not know the record's live Inquiries.**
>    This is **AD-01C T-9** arriving at the Inquiry level, exactly as **T-1/T-3/T-11** did (**A-3**).
>    **T-9, T-1, T-3, T-11 and M-14 are NOT resolved, narrowed or branched here.**
> 2. **§11's visibility rule binds the claim set, not a badge.** **PO-1** requires the rule be *"enforced
>    by authorization — not merely by hiding a badge."* Under the recommended anchor the sensitive
>    object is **an Inquiry's claim set**, which gives the authorization rule a determinate subject for
>    the first time. **What the rule IS remains AD-01G's V-7 territory and the CP-portal half remains
>    §39's; neither is resolved here.**

---

## 12. Redistribution implications

> **⟦ARCHITECT ANALYSIS⟧ AD-01I's I-1 … I-9 are fixed input and are NOT re-litigated. This section does
> exactly what the task asks: it tests for an exception, and reports honestly that none exists.**

> **⟦ARCHITECT ANALYSIS⟧ K-54 — no exception exists, and the search was genuine. Six candidate
> exceptions were constructed and all six fail.**
>
> | Candidate exception | Why it is not one |
> |---|---|
> | **The receiving rep converts the lead — surely they earned it?** | They earned the **work**, which is custody and is recorded on the Assignment Log (**I-8**). A claim is created by a **capture event**, not by an outcome. **PO-4** separates handler from ownership for exactly this reason |
> | **A CP-originated lead is redistributed to an internal employee — surely the source is now direct?** | **No.** Source is an origination fact and is immutable (**K-17**). **PO-13 (§39)** independently requires the CP to keep seeing the pipeline. **AD-01I I-13** forbids the merge at the reporting level |
> | **Redistribution of a lead whose claim set is under an unresolved §11 contest** | Redistribution changes custody. **It does not adjudicate** — **PO-1** reserves adjudication to authorized leadership as a separate act. **Not an exception; see K-55** |
> | **Bulk redistribution (consolidated §16's multi-select transfer)** | Scale does not change the act. **Bulk is the same act N times** (**I-4**), and it creates no Inquiry N times |
> | **Redistribution "without history" (consolidated §17)** | A **visibility** decision on the receiving handler. **AD-01I I-12** places it in the case AD-01G already solved. **Visibility never changes a fact** |
> | **A redistribution that follows a customer's new inquiry** | **Two events, not one** (**I-7**). The customer's inquiry creates the commercial obligation; the redistribution creates the work obligation. **Merging them is the derivation I-7 forbids** |
>
> **AD-01I I-5, I-6 and I-7 are CONFIRMED. AD-01J J-42 is CONFIRMED. Redistribution can never create,
> challenge, resolve or move attribution, and under the recommended anchor it has nowhere to put a
> claim — the prohibition is structural, not policed.**

> **⟦ARCHITECT ANALYSIS⟧ K-55 — one governance adjacency, which is NOT an exception but must not be
> lost, because it is the only route by which redistribution could become an attribution act in
> practice.**
>
> **A Reporting Manager or Sales Head may hold both authorizations**: consolidated **§16** gives them
> the redistribution surface, and **PO-1** may make the same individual part of *"builder-side
> authorized leadership"* for attribution. **Role overlap is not act overlap.** Two requirements follow,
> and both are already implied by rules in force:
>
> 1. **The two acts must remain separately authorized.** A grant to redistribute must not carry a grant
>    to resolve attribution. **§08**'s scoped-access principle and **PO-1**'s reservation both require
>    it; this states where it bites.
> 2. **The two acts must remain separately audited.** **§54** and **R6** make audit event-based and
>    append-only; **AD-01I I-4** already fixes redistribution at *one act, one Assignment Log entry, one
>    audit event, three facts*. **An attribution resolution is a fourth fact and must not be permitted
>    to ride on that act.**
>
> **This is not a new control and no workflow, screen or approval step is proposed** (AD-01A §8.5
> honoured). **It is a statement of where an existing control must reach.**

---

## 13. Re-engagement implications

> **⟦ARCHITECT ANALYSIS⟧ K-56 — re-engagement's effect on attribution has a forced half and an open
> half, and the forced half is larger than it looks.**
>
> | What re-engagement does | Status |
> |---|---|
> | Opens a new Inquiry with its own claim set | **Forced** (AD-01J **J-2**, as bounded by **K-50**) |
> | The **new producer's** claim attaches to it | **Forced** (**K-14**) |
> | **Never alters the prior Inquiry's claims, its adjudication, or its recorded outcome** | **Forced — C-II, R6, §D.4.** Under **C-VII** even a reaching claim is a *new derived claim on the later Inquiry*, so the earlier one is untouched in every branch |
> | **Never restates a closed period's conversion or its recorded producer** | **Forced — C-II; AD-01F §12.4** |
> | **Never serves as a correction**, and a correction never opens an Inquiry | **Forced — AD-01J J-38, CONFIRMED. AD-01C T-6/T-7/T-8 remain the correction mechanism's and are NOT resolved** |
> | Whether the **prior producer** also holds a claim on the new Inquiry | **OPEN — T-4 (closed prior), T-5 (converted prior — K-26 recommends no reach), AA-3 (cancelled prior — not resolved)** |

> **⟦ARCHITECT ANALYSIS⟧ K-57 — the cost of "no reach," priced honestly, because §39 makes it visible to
> the counterparty.** If reach is refused, a CP who introduced a prospect will — via **PO-13 (§39)** —
> see their attributed Inquiry closed and will subsequently learn, by ordinary commercial means, that
> the client bought. **AD-01C D6 called that dispute genuine and this document does not soften it.** The
> architecture's contribution is that the dispute is **visible, adjudicable and decidable by policy**
> rather than silently decided by a data model. **That is the whole of AD-01C D6's governance argument
> and it is the reason the Inquiry anchor is recommended.** **It is not an argument for granting reach
> and not an argument against it.**

> **⟦ARCHITECT ANALYSIS⟧ K-58 — re-engagement and Q6, stated once more so nothing is ambiguous.** A
> valid Success remains historically true regardless of the downstream Booking's fate; a downstream
> cancellation never rewrites historical conversion; an incorrectly recorded Success is corrected only
> through the audited correction mechanism and never through ordinary reversal; and a genuinely new
> opportunity after a prior Success creates a new business unit. **Q6 is not reopened, not narrowed and
> not re-argued anywhere in this document. C-II protects it and K-26 is constructed so as not to touch
> it.**

---

## 14. Alternatives

> **⟦ARCHITECT ANALYSIS⟧ Seven candidate attribution anchors against the thirteen cases. The three
> right-hand cases are new to this document.**

| Anchor | Ex. 1: two projects, two CPs | Ex. 3: real clash | Ex. 4: two conversions | Redistribution | CP pre-project | **§26 transfer** | **Booking Group** | **§41 sub-agent** | Leaves T-4/T-5 answerable? | New entity? |
|---|---|---|---|---|---|---|---|---|---|---|
| **Person** | **Fail** | **Fail** | **Fail** | Safe | *"Passes"* — by holding a relationship claim | Pass | Fail | Neutral | **No — answers by accident** | No |
| **Lead / work record** | **Fail** | **Fail** | **Fail** | **Dangerous** (K-38 ②) | *"Passes"* — same way, same defect | Pass | Fail | Neutral | **No** | No |
| **Inquiry** | **Pass** | **Pass** | **Pass** | **Safe, structurally** | **Undetermined — AA-2** | **Pass — and it is an argument FOR (K-40)** | **Underspecified — AB-1** | **Pass in shape — AB-3 open** | **Yes — in both directions** | **No** |
| **Booking** | Pass | **Fail** (no Booking at intake) | Pass | Safe | **Fail** | **Fail (K-43 ③)** | Fail | Neutral | n/a | No |
| **Booking Group** | Pass | **Fail** | Pass | Safe | **Fail** | Depends on the state machine | **Worse — one object, two producers** | Neutral | n/a | No |
| **Claim as its own anchor** | Undecidable | **Fail — clash test undecidable** | Undecidable | Safe | **Passes** — this is §7 reading (C) | Pass | Undecidable | Neutral | Yes | No |
| **New `Commercial Opportunity`** | Pass | Pass | Pass | Safe | Would need the same decision | **No help** | **AB-1 arises identically** | **No help** | Yes | **Yes — and it buys nothing** |
| **AD-01E `Sales Episode`** | Pass | Pass | Pass | Safe | Same decision | **No help** | **Same** | **No help** | Yes | **Yes — it is the Inquiry renamed** |

> **⟦ARCHITECT ANALYSIS⟧ K-59 — read the table across the three new columns. They were added to give the
> Inquiry a chance to fail on ground no prior document had tested, and the result is that it gains one
> argument (§26), inherits one genuinely open question that every candidate shares (Booking Group), and
> resolves one in shape (§41). No candidate that failed the old cases passes the new ones, and no new
> entity earns its existence on them. The hypothesis under test survives the test.**

---

## 15. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is decided, and no
> part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item sits in Master Spec
> **§88**'s MUST-ASK column.)*

**K-18 — V-16·claim-anchor and M-5's attribution half: THE INQUIRY, and nothing else.** The attribution
claim attaches to the Inquiry. Not the Person, not the Lead/work record, not the Booking, and not a
combination — a claim held at two levels is two sources of truth that diverge silently at §40
authorization time. **Re-derived independently in §8 against thirteen cases, three of which no prior
document ran.** [§3.4](#34-the-six-examples-in-one-table), [§8](#8-attribution-alternatives)

**K-48 — V-16·eligibility-anchor: A JOIN, not a lookup.** **WHO** is entitled = the resolved attribution
claim on the converting Inquiry. **WHETHER AND WHEN** = the transaction identity that survives §25/§26
and its §32 milestone (**K-47**, the refinement J-26 does not carry). **The counterparty of the money is
the CP relationship; the producer recorded on the claim may be a sub-agent (K-42).** **No formula, rate,
slab, milestone value, clawback quantum or TDS treatment is proposed. M-9 owns all of it.**
[§9](#9-commission-anchor-alternatives)

**K-4 / K-5 — M-5 contains a false entailment and cannot be answered as one question.** The
duplicate-detection key does **not** determine the attribution anchor. §09 asks *"is this the same
human?"* at the **Person**; §11 asks *"do two producers claim this engagement?"* at the **Inquiry**. **M-5's
uniqueness half is NOT resolved and remains fully open, Person candidate included.** → **A-8**.
[§3.1](#31-m-5-exactly-as-registered-and-the-presupposition-inside-it)

**K-22 — T-4: one branch is entailed, not chosen.** Where the prior closure is classified under **Q7
Dimension A** as **invalid / non-opportunity**, the claim has **no reach** — and the argument is
AD-01J's own **J-9**, which rejected uniform-yes *because* crediting that CP is indefensible. **An
argument that rejects a rule on case X has asserted case X's answer.** **No Dimension-A value is
proposed; N-4 still owns every value and still gates T-4's answerability.**
[§4.4](#44-the-one-branch-of-t-4-that-is-architecturally-entailed-and-not-a-free-business-choice)

**T-4's remainder — `BUSINESS DECISION REQUIRED`, reduced to four named parameters.** **P-α** class map ·
**P-β** scope (same project or across) · **P-γ** horizon (**AD-01E U-4 confirmed: no threshold exists in
the sources and none is proposed**) · **P-δ** mode (supersede / contest / rank below). **No branch of any
parameter is preferred, recommended or ranked.** [§4.5](#45-what-genuinely-remains-of-t-4-reduced-to-four-named-parameters)

**K-20 — three further binding constraints, C-V, C-VI, C-VII**, building on AD-01J's C-I … C-IV. A
reaching claim must be **recorded and appended** (C-V), determined **at origination** (C-VI, without
deciding **Q11**'s filing cut-off), and can only ever be a **new derived claim citing the earlier one**
(C-VII) — never the earlier claim moving. **K-21 prices the "yes" branch at four costs against "no"'s
one.** [§4.3](#43-three-further-constraints-this-document-adds)

**K-26 — T-5: recommended answer is NO REACH across a DISCHARGED claim.** A producer paid under §32 for
the engagement they produced holds nothing over a later engagement they did not. Grounds: §32's
milestone-based (therefore per-transaction) eligibility; consolidated §22's per-event financial concepts;
§33's inability to reverse a relationship-level entitlement; and **PO-22**'s prohibition on inventing the
alternative rule. **The owner may override with an explicit repeat-buyer policy, whose parameters are
P-β/P-γ/P-δ.** **Q6 untouched in every branch.** [§5.5](#55-recommended-resolution-of-t-5)

**K-23 — half of T-5 dissolves.** T-5 says *"separately-sourced."* **The same CP producing a later
engagement is not a reach case at all** — it is an ordinary second claim. **The task's "same CP across
multiple Inquiries" test was never hard.** [§5.2](#52-is-t-5-relevant-to-this-cluster-yes--and-half-of-it-dissolves-on-inspection)

**K-25 — AD-01J's J-33 is over-stated, and this is this document's one contradiction of its
predecessor.** T-4 and T-5 are **not** one rule differing only in terminal outcome: under T-5 the prior
claim was **discharged** by a §32 entitlement, and a rule that cannot see the discharge would steer a
"reach" answer on T-4 into **paying twice for one contribution**. **J-33's direction (one sitting) is
confirmed; its claim (one rule) requires narrowing.** → **A-7**.
[§5.4](#54-the-asymmetry-ad-01js-j-33-does-not-carry--named-and-it-is-a-required-amendment)

**K-28 / K-29 — AA-3 is NOT upstream of V-16; it is DOWNSTREAM of it and a co-parameter with T-4/T-5.**
All three of its branches are representable under the recommended anchor and none discriminates between
anchors, so it imposes no capability requirement. **It IS upstream of M-9 and jointly upstream of AA-4.**
**AA-3 itself is not resolved here.** **K-30** records, as a consistency observation only, that a §33
clawback **un-discharges** the claim and therefore removes K-26's own ground on that path.
[§6](#6-aa-3-analysis)

**K-32 / K-33 / K-34 / K-35 — AA-2 narrowed, not resolved, and no entity created.** **(A) the Lead
carries the CP-prospect relationship is ELIMINATED** on AD-01C **D6**'s grounds — it answers T-4/T-5 by
accident. **(B) a project-less preliminary Inquiry survives** at three priced costs. **(C) a
filed-but-unattached claim in §44's own *unverified, later reconciled* condition survives**, uses only
§06's canonical `Lead Attribution Claim`, and keeps the Inquiry a precise commercial object. **(D) a
genuinely missing concept is NOT REACHED.** **§43's pending-enrichment queue is cited for the first time
and is the strongest evidence in the sources on this question.** **AA-2 remains `BUSINESS DECISION
REQUIRED`.** [§7](#7-cp-before-project-interest-scenario)

**K-40 — the §26 unit transfer is a new, independent argument FOR the Inquiry anchor**, and no prior
document ran it. **The Inquiry is the only object in the commission join that a unit transfer
structurally cannot disturb** — which is exactly what §26 demands. **K-43 ③** turns the same observation
into a third, independent elimination of the Booking as the attribution anchor. **The attribution half of
a transfer is settled: no new Inquiry, no new claim, attribution unchanged. The entitlement-identity half
is AB-2 and §26's own CFO question.** [§8.3](#83-candidate-c--the-inquiry), [§8.4](#84-candidate-d--the-booking)

**K-49 / K-50 — the Origination Rule needs a domain clause it does not have.** Read literally, **J-2
opens a new Inquiry on a unit-transfer request**, and a new Inquiry carries a new claim set — delivering
§26's forbidden outcome through the front door. **Recommended clause: a customer-generated event that
operates on an existing transaction (§25, §26, §35) is a transaction event and originates no Inquiry.**
**Consistent with AD-01J §10.3, and the missing boundary between it and J-2.** → **A-6**.
[§10.2](#102-the-clause-the-origination-rule-does-not-have--and-it-is-money-bearing)

**K-12 / K-13 / K-52 — clash is scoped to ONE INQUIRY's claim set: attribution-claim-specific, and
project-specific as a consequence rather than as a rule.** **The Origination Rule is also the
clash-scoping rule**, so the two can never disagree and no second control is needed. **And the size of
the §11 adjudication population is a function of T-4 — a management-capacity consequence no prior
document has stated.** [§11](#11-duplicateclash-implications)

**K-54 / K-55 — redistribution: no exception exists.** Six candidate exceptions were constructed and all
six fail. **AD-01I I-5/I-6/I-7 and AD-01J J-42 are CONFIRMED.** One **governance adjacency**: a manager
may hold both the redistribution and the attribution-resolution authorizations, so **role overlap must
not become act overlap** — separately authorized, separately audited (§08, §54, **R6**, **I-4**). **No
workflow, screen or approval step is proposed.** [§12](#12-redistribution-implications)

**K-51 — Inquiry → Booking IS sufficient to preserve attribution before, at and after booking, for a
single-applicant booking**, and is **strongest** after booking, where §26, §35 and §33 all act on the
transaction and none can reach the claim. **It is UNDERSPECIFIED for a §06 multi-applicant Booking
Group** → **AB-1**. [§10.3](#103-is-inquiry--booking-sufficient-to-preserve-commercial-attribution)

**K-9 / K-10 — working a lead is not claiming it, and resolving attribution is not the same kind of
outcome as being paid.** §10's owner/handler split and §39's CP pipeline visibility both independently
require attribution to survive a change of worker. **An internal claimant can win an attribution contest
and generate no §32 entitlement at all** — the sharpest available demonstration that attribution and
commission are different questions. [§3.3](#33-the-six-examples)

**K-17 — an Inquiry's source, campaign and channel are origination facts and immutable; its claim set is
append-only and never overwritten.** Stated as a constraint because no prior document states it in this
form, and because it is the structural reason Example 6 cannot go wrong.
[§3.3](#33-the-six-examples)

**No new canonical business object is proposed by this document.** The `Sales Episode` and a
`Commercial Opportunity` entity are re-tested a fifth and second time — against three cases they had
never faced — and both are rejected again, the `Sales Episode`'s rejection **with its conditionality on
AD-01G G-1 unchanged**.

### 15.1 The costs of this recommendation, priced without softening

| Cost | Statement | Label |
|---|---|---|
| **The genuine dispute is not removed; it is made visible** | A CP whose introduction is followed by a direct purchase will dispute it, and **§39 guarantees they will see enough to know.** The architecture makes the dispute adjudicable rather than silently decided — **it does not make it go away, and nobody should approve this expecting it to** | ⟦ARCHITECT ANALYSIS⟧ |
| **The §11 adjudication population is a policy variable, not a constant** | **K-13**: T-4's **P-δ** can convert a large class of sequential registrations into contests, all of which **PO-1** routes to authorized leadership. **The owner is setting a workload when they set P-δ, and should be told so** | ⟦ARCHITECT ANALYSIS⟧ |
| **One branch of T-4 is closed by an architect, not by the owner** | **K-22** removes the invalid class from the policy space on an entailment argument. **It is an entailment from AD-01J's own J-9, but it is still an architect narrowing a money question, and the owner should either ratify it or reject it explicitly** | ⟦ARCHITECT ANALYSIS⟧ |
| **This document contradicts its immediate predecessor in one place** | **K-25 / A-7.** AD-01J §5.5's J-33 is over-stated. **The owner cannot approve J-33 as literally written AND K-25, and should be asked for both in one act** | ⟦ARCHITECT ANALYSIS⟧ |
| **It finds a defect in a rule five documents have been building toward** | **K-49 / A-6.** J-2, the Origination Rule, misfires on §26. **The fix is one clause and changes nothing else — but the rule was approved-in-recommendation without it, and the omission was money-bearing** | ⟦ARCHITECT ANALYSIS⟧ |
| **Three business rules must be answered before this is usable, and they are new** | **AB-1** (Booking Group), **AB-2** (transfer entitlement identity), **AB-3** (sub-agent entitlement) are **parameters of this recommendation, not a separate agenda** — and **AB-1 is a §88 canonical-relationship question** | ⟦ARCHITECT ANALYSIS⟧ |
| **T-4's remainder and AA-3 stay open, and they are now the only things between this line and M-9** | Every architectural input M-9 needs is now supplied or named. **What is left is money policy, and a sixth deferral would leave §40's authorization with an unspecified input on a path where §33 says money has already moved** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 16. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and consolidated **§1** and **§30**, none is guessed. New items are
> numbered **AB-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y /
> Z / AA** namespaces.

### 16.1 New items raised by this document

| # | Question | Arises from | Spec status | Why it cannot be left to implementation |
|---|---|---|---|---|
| **AB-1** | **When a §06 Booking Group involves multiple applicants/co-applicants whose interests arrived as SEPARATE Inquiries on SEPARATE work records, which Inquiry converts, and which resolved claim is the entitled one for §32/§40 — one, both, or a shared entitlement? And may more than one Inquiry reference one Booking Group at all?** | **K-41**, §8.3, §10.3 | **Silent.** **§06** states *"a booking may involve multiple Persons"*; **§07** names *applicant/co-applicant*; **§32**, **§40** and **§41** say nothing about multiple entitled parties on one transaction. **AD-01 through AD-01J never address it** — every reference in the line quotes §07's list without drawing the attribution consequence | **Direct §32/§40 exposure on an ordinary transaction shape.** Left to implementation, the first co-applicant booking either silently pays one producer and not the other, or double-pays. It is also a **§88 canonical-relationship question** (the cardinality of Inquiry↔Booking), which **consolidated §30** forbids inferring |
| **AB-2** | **After a §26 unit transfer, is the CP entitlement the SAME entitlement continuing against a changed transaction, or a NEW entitlement against a new transaction with the old one reversed?** *(The ATTRIBUTION half is settled — **K-40**: no new Inquiry, no new claim, attribution unchanged. This asks only about entitlement identity, not about amount.)* | **K-40**, **K-47**, §9.2 | **§26 explicitly defers it**: *"the financial and brokerage consequences must be explicitly determined … **This is a CFO validation requirement before production financial logic is finalized.**"* **§33** repeats the warning. **The spec names this decision and assigns it — it does not make it** | **§26 and §33 both warn that the naive answer creates a wrongful clawback.** The eligibility anchor (**K-47**) is stated as *"the transaction identity that survives §25/§26"* precisely because **this question determines what that identity is** |
| **AB-3** | **May a CP sub-agent hold a commission entitlement and be paid independently of the parent CP firm, or is the firm always the counterparty with the sub-agent recorded only as the producing party on the claim?** | **K-42**, §8.3 | **Silent on money.** **§41** requires the Firm → Principal → Sub-Agent chain be preserved and forbids giving a sub-agent principal-level permissions; **§06** places the **CP Ledger** on *"the CP **relationship**"*; **§44** allows an **unverified** sub-agent to be captured before the relationship is confirmed; **§32** requires legal/tax treatment to be *"validated separately"* | **Determines who the payee is**, which is a **§88 financial rule** and a legal/tax question §32 explicitly refuses to let the system assume. **§44's unverified-sub-agent path means a claim can exist naming a party the builder has no relationship with** — and whether that claim can ever become payable is this question |

### 16.2 Items this document narrows or constrains but does NOT resolve

| Item | Owner | Effect of this document |
|---|---|---|
| **T-4's commercial half** | **AD-01C T-4** | **K-22** removes the *invalid* class from the policy space (entailed). The remainder is reduced to **P-α … P-δ** and bound by **C-I … C-VII**. **NOT answered. No branch preferred.** |
| **T-5** | **AD-01C T-5** | **K-23** dissolves the same-CP half. **K-26 RECOMMENDS no reach across a discharged claim** — a recommendation, explicitly overridable by an owner's repeat-buyer policy. **K-25 shows it is not the same rule as T-4.** |
| **AA-3** | **AD-01J AA-3** | **K-28: NOT upstream of V-16; downstream of it; a co-parameter with T-4/T-5 and jointly upstream of AA-4 and M-9.** **K-30** notes that §33 clawback removes K-26's ground on that path. **The policy itself is NOT resolved.** |
| **AA-2** | **AD-01J AA-2** | **Narrowed: option (A) eliminated (K-32); (B) and (C) survive with priced costs; (D) not reached (K-35).** **§43 cited for the first time.** **NOT resolved.** |
| **AA-4** | **AD-01J AA-4** | **C-III unchanged and reinforced by C-VII.** Still conditional on T-4/T-5/AA-3. **NOT resolved.** |
| **AA-1, AA-5** | **AD-01J** | **Untouched.** AA-1 additionally determines whether two same-project Inquiries are one clash scope or two (**K-52**). **NOT resolved.** |
| **N-4** | **AD-01A / N-4** | **Confirmed on T-4's critical path via C-I and P-α — fourth document to find N-4 blocking downstream work. No value proposed. NOT resolved.** |
| **M-5's uniqueness half** | **M-5** | **Sharpened by K-4/K-5 and explicitly separated from the attribution half. Its Person candidate is untouched. NOT resolved.** → **A-8** |
| **M-9** | **M-9** | **Consumes K-18, K-48, K-47, T-4's remainder, K-26 and AA-3.** **Not resolved, narrowed or pre-empted. No formula, rate or amount appears anywhere in this document.** |
| **Q11** | **AD-01 Q11** | **C-VI deliberately does not decide it**: whether a producer may file a late claim, and any cut-off, remains Q11's and is sequenced with M-5 and the commission model per **AD-01B §6.3**. **NOT resolved.** |
| **U-17** | **AD-01E U-17** | Given its financial expression by **C-IV** (AD-01J) and its timing expression by **C-VI**. **NOT resolved.** |
| **T-1, T-3, T-9, T-11** | **AD-01C** | **T-9 gains the Origination Rule as the offline gate's input (K-53 ①).** All remain at the Inquiry level per **A-3**. **None resolved.** |
| **V-7, V-24, V-5, V-17, Y-1, Y-3, Y-4, Y-5, Z-2, Z-5, W-1, W-2** | Various | **Untouched or merely referenced.** **V-24** gains AA-2 option (B)'s no-project case (unchanged from AD-01J). **Z-5** and **P-α** need the same input. **None resolved, narrowed or branched.** |

---

## 17. Impact on AD-01 through AD-01J

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Where a prior position is
> confirmed, that is recorded as deliberately as where it is corrected.

| Document | Effect |
|---|---|
| **AD-01** — Lead State Machine | **E-13's shape — commission keys on the resolved claim, never on a lifecycle state — is CONFIRMED and completed by K-48**, which names both anchors and adds **K-47**'s §26 requirement. **§D.4's *"claims are never overwritten by a later claim"* is load-bearing throughout and is confirmed as K-17's second half.** **Q11 is explicitly NOT resolved** (**C-VI** is constructed so as not to touch it). **§3's two-concepts test is reused, not reinterpreted.** |
| **AD-01A** — §8 Product-Owner decisions | **Q1, Q4 and Q7 treated as fixed input and NOT reopened.** **Q7 is CONFIRMED a third time from a third direction**: its **Dimension A** is the input **K-22** consumes to entail T-4's invalid branch. **No dimension added, no value proposed.** **§8.3's preserve-the-reason rule is again load-bearing in a way it was not designed for.** **§8.5 honoured — no workflow, approval step or gate is proposed anywhere, including around K-55.** **§3.3's refusal to authorise a CP scorecard is upheld: no producer-evaluation product is authorised by anything here.** |
| **AD-01B** — Dependency and ordering | **§4's "unrecoverable if decided by implementation" standard is applied to AB-1, AB-2 and AB-3.** **§6.3's sequencing of Q11 with M-5 and the commission model is CONFIRMED and honoured by C-VI.** **AD-01B's judgement that the attribution cluster should follow the terminality cluster is borne out** — T-4 and T-5 could not be well-posed before AD-01C, AD-01G, AD-01H and AD-01J had run. **§7.2's legacy-import tension is untouched here.** |
| **AD-01C** — Terminality (Q5 · Q6) | **Q6 is NOT reopened, NOT narrowed and is actively PROTECTED by C-II and by K-58.** **T-4 and T-5 are cited verbatim from §6, §5, §3.5 and §3.6 and their meanings are taken from those originals rather than from later paraphrases.** **D5 and D6 are CONFIRMED and are the two strongest arguments in §8** — **D6's governance argument is used twice more (K-32 against AA-2's option A, K-37 against the Person anchor).** **§2.2's characterisation of the CP's dispute as *genuine* is upheld without softening (K-57).** **A-3 (the T-4/T-1/T-3/T-11 subject relocation, named by AD-01J) is NOT made here either.** |
| **A-6 — named, NOT made** | **AD-01J §2.1's Origination Rule (J-2) has no stated domain boundary against post-Booking transaction events.** Read literally it opens a new Inquiry — and therefore a new claim set — on a **§26 unit transfer**, which is the outcome §26 exists to prevent. **The required clause: a customer-generated event operating on an existing transaction (§25 amendment, §26 transfer, §35 cancellation) is a transaction event and originates no Inquiry.** It is consistent with AD-01J §10.3 and is the missing boundary between §10.3 and J-2. **AD-01J is not edited. Only the Product Owner may make this amendment.** [§10.2](#102-the-clause-the-origination-rule-does-not-have--and-it-is-money-bearing) |
| **A-7 — named, NOT made** | **AD-01J §5.5's J-33 states that T-4 and T-5 are *"one predicate with the prior Inquiry's terminal outcome as a parameter … differing only in which terminal outcome was recorded."*** They differ in a **second, independent respect**: under T-5 the prior claim was **discharged** by a §32 entitlement and may already have been paid. A rule parameterized only on terminal outcome cannot see the discharge and would steer a "reach" answer on T-4 into paying twice for one contribution. **J-33's direction — answer them in one sitting — is CONFIRMED. Its claim that they are one rule should be narrowed.** **AD-01J is not edited. Only the Product Owner may make this amendment.** [§5.4](#54-the-asymmetry-ad-01js-j-33-does-not-carry--named-and-it-is-a-required-amendment) |
| **A-8 — named, NOT made** *(on a file outside the AD-01 line)* | **`01-bmexa-architecture-reconciliation.md` §D.3 and §M state that M-5's answer *"determines whether the attribution claim attaches to the Lead or to the Person."*** **It does not.** §09 duplicate detection and §11 clash detection are different controls at different levels answering different questions (**K-4**, **K-5**), and M-5's own worked example has **two correct simultaneous answers** at two levels. **M-5's *Blocks:* list should be narrowed to remove the attribution-anchor entailment, leaving the uniqueness boundary, the clash-engine key and §12's offline gate.** **That file is not edited. Only the Product Owner may make this amendment.** [§3.1](#31-m-5-exactly-as-registered-and-the-presupposition-inside-it) |
| **AD-01E** — Re-engagement and visibility | **U-4 CONFIRMED and relied upon: no dormancy threshold exists anywhere in the sources and none is proposed — P-γ asks the owner for one rather than assuming one.** **U-15** (does attribution key on the episode?) is **answered in substance by K-18 at the Inquiry rather than at an episode**, and **the Sales Episode is re-tested a fifth time and rejected with its conditionality on AD-01G G-1 unchanged.** **U-17 gains C-VI's timing expression. §3.5's direction that U-2/V-15 and T-4 be answered together is followed.** **U-1 … U-20 are otherwise not resolved.** |
| **AD-01F** — Business-workflow reconciliation | **V-16 is cited verbatim from §16.2 and is the subject of this document.** **V-15's structural half stands as AD-01J answered it; its commercial residue is T-4 and is treated as such.** **§12.4's prohibition on re-engagement restating a closed period is CONFIRMED (C-II).** **§13.1's reporting rows are neither extended nor narrowed.** **The V-15/V-16 numbering collision (AD-01J J-16) is preserved and NOT renumbered; this document answers V-16 as AD-01F registers it.** **AD-01F's own V-4 remains OPEN and its collision with AD-01I's V-4·reactivation (I-14) is preserved.** |
| **AD-01G** — Identity and history visibility | **G-1, G-2, G-8, G-9 CONFIRMED and load-bearing**: the Person-bounded work record is what makes **K-38** and **K-41** true. **§5's Inquiry definition, as extended by AD-01J J-34, is used unchanged and is NOT further extended** — **K-17** states a property of the claim set that J-34 already implies. **V-7 is NOT reopened. G-4's episode rejection stands.** |
| **AD-01H** — Lifecycle and concurrent interests | **H-1, H-4, H-6, H-8, H-9, H-10 CONFIRMED.** **H-4's terminal-once property is what makes T-4 and T-5 well-posed and is relied on throughout.** **H-8's Inquiry→Booking reference is CONFIRMED as sufficient for the single-applicant case and shown UNDERSPECIFIED for a multi-applicant Booking Group (K-41 → AB-1)** — **an addition to H-8's scope, not a correction of it.** **§12 row 1's capability argument is used again and confirmed.** **Y-1, Y-3, Y-4, Y-5 NOT resolved; A-5 (V-3 clause 2) is NOT made here.** |
| **AD-01I** — Dump, redistribution, reactivation | **I-1 … I-9 treated as fixed input and NOT re-litigated. I-4, I-5, I-6, I-7 and I-13 CONFIRMED and tested for exceptions (K-54): six candidate exceptions constructed, all six fail.** **I-8's Assignment Log home for the management intent is confirmed and is what makes K-55's separation of acts expressible.** **I-12 CONFIRMED — history visibility never changes a fact.** **I-14's V-4 collision preserved. Z-2 and Z-5 remain open and are again shown to need the same input as C-I/P-α.** |
| **AD-01J** — Inquiry commercial identity and attribution | **Its anchor recommendation was treated as a hypothesis and is INDEPENDENTLY CONFIRMED (§8, §14) against a test set that includes three cases it did not run.** **J-9's argument is harvested into K-22 — an entailment AD-01J made and did not draw.** **C-I … C-IV adopted unchanged and extended by C-V, C-VI, C-VII.** **J-16, J-22 … J-28, J-30, J-31, J-34 … J-38, J-40, J-42 … J-48 and J-51 … J-53 CONFIRMED.** **Two amendments are required and NEITHER is made: J-2 lacks a domain clause (A-6) and J-33 is over-stated (A-7).** **J-27's "V-16 is NOT declared resolved" is now answered: V-16's claim-anchor and eligibility-anchor halves are recommended here; its reach half remains partly open.** **AA-1, AA-2, AA-4 and AA-5 are NOT resolved; AA-2 is narrowed; AA-3's dependency status is resolved and its policy is not.** |

---

## 18. Recommended next architecture decision

> ### **AD-01F's V-4 — *"does a non-connected contact attempt count as a qualifying user follow-up?"* — taken alone, immediately, as the cheapest unblocking question in the register; and, in the same written act, the ratification of A-1 … A-8.**
>
> **⟦ARCHITECT RECOMMENDATION — sequence only⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL.)* **This is a recommendation about *sequence*. No answer to V-4, to any A-item, or
> to any open question is proposed, implied or preferred here.**

> **⟦ARCHITECT ANALYSIS⟧ Why this, and why not the obvious candidate.**

1. **The obvious candidate is the commercial-policy sitting itself — T-4's remainder, AA-3, AA-1, AA-2,
   AA-4, AA-5, AB-1, AB-2, AB-3 — and it is NOT an architecture decision.** Every one of those items is
   a question **for the project owner**, several of them (AB-2, AB-3) explicitly for the **CFO** by the
   spec's own instruction. **An architect cannot supply them and should not (PO-22, §86).** They should
   be scheduled as an **owner sitting**, not as the next architect deliverable — and this document's
   §16 is that sitting's agenda, already written.
2. **V-4 is one question, has no prerequisites, and now gates more than any other open item.** AD-01I
   **I-14** and AD-01H §16 and AD-01I §15 each recorded it: it gates **AD-01H H-5's three *New*
   predicates**, **FUT**, every **first-response** variant, **W-1**, **W-4**, **AD-01I §10.1 rows 9–10**
   (the sole measures of whether redistribution works), and **V-18's feed half**. **All of them must
   share one answer or they will silently disagree.** **Three consecutive documents have recommended it
   and it has not been taken.**
3. **A-1 … A-8 are now eight named, unmade amendments across five documents, and two of them are
   money-bearing.** **A-6** (J-2 misfires on §26) and **A-7** (J-33's over-statement would steer a
   double payment) are not editorial. **The register is becoming unusable, and the owner cannot approve
   AD-01J as literally written AND this document.** **Ratifying the A-series is one written act, costs
   no analysis, and removes a class of latent contradiction.**
4. **Y-1 and Y-3 remain one question each** and **Y-1 still gates consolidated §13's headline scenario**
   (AD-01J **J-6**). Unchanged from AD-01H §16 and AD-01I §15 and still worth taking cheaply.

**Explicitly NOT recommended next: M-9, the commission model.** **It consumes K-18, K-48, K-47, T-4's
remainder, K-26, AA-3, AB-1, AB-2 and AB-3.** Taking it before the owner sitting would require inventing
every one of them. **Take it after, not instead.**

**Explicitly NOT recommended next: the Booking state machine.** **K-47** states a constraint *on* it from
the commission side and **AB-1** and **AB-2** are questions *for* it, but designing it now would decide
AB-1 and AB-2 by implementation, which **consolidated §30** forbids.

**Explicitly NOT recommended next: M-5's uniqueness half.** It is a real blocker and it is genuinely
independent of everything above (**K-4**) — but it is a **duplicate-detection key**, which is a data and
matching question, and it should be taken as one rather than smuggled into an attribution sitting.

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype, no
"temporary" claim table, no attribution column on any record, no inquiry-succession reference, no
eligibility flag, no clash queue, no CP-portal attribution view, no commission scaffolding of any kind,
and **no Dump-reason value list**. Consolidated **§30**: *"No schema/code implementation should be
inferred from an unresolved product ambiguity."* **The Lead / Client architecture, the attribution model
and the commission model are all unresolved until the project owner approves in writing.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED**

**NOT APPROVED FOR IMPLEMENTATION.**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. **No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it.** No UI, visual, layout, interaction or workflow design is
proposed anywhere. **No commission formula, rate, percentage, slab, brokerage amount, eligibility
milestone value, clawback quantum, TDS treatment, clash-resolution procedure or Dump-reason value is
proposed, endorsed, implied or seeded — M-9 owns the commission model, §26 and §32 reserve the financial
treatment for CFO/legal validation, and N-4 owns every reason value.** **No time threshold, dormancy
horizon, episode-boundary rule or scoring formula is invented, assumed or implied anywhere**; where the
sources set no number that is recorded as silence (AD-01E **U-4**, confirmed) and **P-γ** asks the owner
for one rather than supplying it.

**None of AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I or AD-01J is modified by
this document**, and neither is `01-bmexa-architecture-reconciliation.md`. Where this analysis
contradicts, corrects, refines or completes a prior position — **AD-01J §2.1's Origination Rule, which
lacks a domain clause and misfires on §26** (**A-6**, named and not made); **AD-01J §5.5's J-33, which is
over-stated because T-4's and T-5's prior claims differ in discharge and not only in terminal outcome**
(**A-7**, named and not made); **`01-bmexa-architecture-reconciliation.md` §D.3/§M's claim that M-5's
answer determines the attribution anchor, which it does not** (**A-8**, named and not made); **AD-01H
H-8's Inquiry→Booking reference, shown sufficient for one applicant and underspecified for a §06 Booking
Group** (**AB-1**); and **AD-01J's J-9, whose own argument entails the invalid-class branch of T-4 that
AD-01J did not draw** (**K-22**) — **that is stated explicitly, with the document and section named and
the reason given, and the prior file is left exactly as it stands.** **A-1, A-2, A-3, A-4 and A-5, named
by AD-01H, AD-01I and AD-01J, are likewise not made here.**

In particular: **AD-01A §8's recorded Product-Owner decisions are treated as binding input throughout**;
**Q4 is NOT reopened**; **Q6 is NOT reopened, NOT narrowed and NOT re-argued** — it is actively protected
by **C-II** and restated at **K-58**: a valid Success remains historically true regardless of the
downstream Booking's fate, a downstream cancellation never rewrites historical conversion, an
incorrectly recorded Success is corrected only through the audited correction mechanism and never through
ordinary reversal, and a genuinely new opportunity after a prior Success creates a new business unit;
**Q1's vocabulary decision is NOT reopened**; **Q7's three-dimension framework is CONFIRMED and NOT
amended** — §4 consumes its Dimension A, adds no dimension and proposes no value; **Q5 is NOT resolved
and NOT narrowed**; **Q11 is NOT resolved and C-VI is constructed so as not to touch it**; **AD-01I's
Dump, redistribution and reactivation conclusions (I-1 … I-9) are treated as fixed input and are NOT
re-litigated** — §12 tests them for an exception and confirms there is none; **AD-01J's J-1 … J-53 are
treated as an architect recommendation, not as approval, and the anchor recommendation was
independently re-derived rather than inherited**; **AA-1, AA-2, AA-4 and AA-5 are NOT resolved** —
**AA-2 is narrowed and explicitly left open**; **M-5's uniqueness / duplicate-detection half is NOT
resolved, its Person candidate included**; **M-9 is NOT resolved, narrowed or pre-empted**; **N-1 … N-4
are NOT resolved and N-4 remains on T-4's critical path**; and **T-1, T-2, T-3, T-6 … T-12**, **U-1 …
U-20** (beyond U-4's confirmation and U-15's substance), **V-1 … V-15**, **V-17 … V-26**, **W-1 … W-5**,
**Y-1 … Y-5**, **Z-1 … Z-6**, **Q2, Q3, Q8 – Q10, Q12 – Q16** and blockers **M-2, M-3, M-4, M-6 … M-20**
are **not resolved**. The three new items **AB-1, AB-2 and AB-3** are **raised, not answered.**

**No new canonical business object is proposed by this document.** Every concept V-16, M-5's attribution
half, T-4, T-5 and AA-3 expose has a home in an entity the business already names: the commercial claim →
the **Inquiry**; the milestone and its money → the **Booking transaction** and the **CP Ledger**; the
management act → the **Assignment Log**; identity → the **Person**; the relationship → the **work
record**. The **Sales Episode** is re-tested a fifth time and rejected with its conditionality on AD-01G
**G-1** unchanged; a **Commercial Opportunity** entity is re-tested and rejected again. Where a gap
genuinely required a decision the sources do not supply — **which Dimension-A classes admit reach, on
what scope, over what horizon, in what mode; whether a discharged claim reaches at all; what a
post-cancellation re-engagement carries; where a pre-project CP registration attaches; which Inquiry
converts a multi-applicant Booking Group; whether a §26 transfer continues an entitlement or replaces
it; and whether a sub-agent may be paid** — **it is stated as `BUSINESS DECISION REQUIRED` and left to
the project owner, rather than closed by invention.**

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column — canonical
entities, relationships, financial rules, CP commission logic, source-of-truth rules and audit
requirements are all engaged. Per AD-01A §7, **delegation to an architect is not authorization**, and a
Product-Owner preference recorded as evidence is not an approved architecture. The analysis above is
offered so that it can be attacked on its merits rather than deferred to.

**Nothing here is implemented, and no prior document is modified, until the project owner approves in
writing.** Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: PROPOSED — NOT APPROVED**
