STATUS: PROPOSED — NOT APPROVED

# AD-01J — Inquiry Commercial Identity (V-14), Re-engagement Continuity (V-18), the Commercial/Attribution Anchor (V-15) and AD-01C's T-4

> This document resolves **exactly four** coupled items and resolves nothing else. It contains no SQL,
> no schema, no migration, no column/table/type name, no implementation and no UI/visual design. It
> proposes **no commission formula**, **no Dump-reason value list**, **no time threshold** and **no
> scoring rule**. All four items sit in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column
> (canonical entities, relationships, financial rules, CP commission logic, source-of-truth rules,
> audit requirements). Per AD-01A §7, **delegation to an architect is not authorization.** This
> document is the asking.

| | |
|---|---|
| **Document ID** | AD-01J |
| **Type** | Decision analysis resolving AD-01F **V-14**, AD-01F **V-18**, AD-01F **V-15**, and AD-01C **T-4**. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H or AD-01I. **None of those files is edited by this document.** |
| **Scope** | (1) What individuates one commercial engagement from another, tested against six concrete cases. (2) What distinguishes six named continuity situations, preserving the customer-generated / manager-generated divide. (3) Whether the Inquiry is the correct commercial identity for twelve named facts. (4) What T-4's true subject, shape and couplings are once the Lead/Inquiry split is in place. |
| **Explicitly out of scope** | **Q6 is NOT reopened.** **AD-01I's Dump conclusion (I-1 … I-9) is NOT reopened.** **Q1, Q4, Q7 are NOT reopened.** **V-16 is NOT declared resolved** — §4.6 states precisely what remains of it. **V-17 is NOT resolved.** **Y-1 … Y-5**, **Z-1 … Z-6**, **W-1 … W-5**, **N-1 … N-4**, **T-1 … T-3 / T-5 … T-12**, **U-1 … U-20**, **Q2, Q3, Q5, Q8 – Q16**, every other **V**-item (including **AD-01F's own V-4**), and blockers **M-2 … M-20** are **not resolved**. |
| **Contains SQL / schema / migration / UI design / commission formula** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (fail-closed tenant isolation), **R4** (masters not enums; reports branch on semantics, never on labels), **R6** (append-only; never edit history), **R12** (every claim traceable to this repository's own documents); Spec **Rule 1**, **§86**, **§88**, **§95**, **§97**; consolidated requirements **§1**, **§24**, **§26**, **§30**. |
| **Baseline treated as input, and tested rather than assumed** | AD-01G **G-1/G-2** (work record / Inquiry split), **G-5**, **G-8** (read-time projection), **G-9** (derived custody interval). AD-01H **H-1** (concurrent existence), **H-4** (Model D), **H-8** (Success/Booking), **H-10** (Sales Episode rejected). AD-01I **I-5**, **I-6**, **I-7** (the two activation routes). **Per the task's instruction the candidate model Person → Lead → Inquiry → Booking is tested, not assumed** — §12.7 records where it holds and §12.8 where it is incomplete as stated. |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PRODUCT-OWNER DIRECTION⟧** | A statement, preference or fact recorded by the Product Owner — in `BMEXA_MASTER_SPEC.md`, in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, or in AD-01A §8 / AD-01C §1.2 / AD-01E §1.1 / AD-01I §1. **A recorded preference is evidence, not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A finding derived from those sources. Mine to defend. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED.** |
| **⟦BUSINESS DECISION REQUIRED — AA-n⟧** | The sources are silent or in conflict, and nothing here fills the gap. Numbered **AA-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y / Z** namespaces. Consolidated in [§14](#14-business-decisions-required). |

**Findings are numbered J-n.** Amendments to prior documents that are *logically required but not made
here* are numbered **A-n**, continuing AD-01H's **A-1** and AD-01I's **A-2**. This document names
**A-3**, **A-4** and **A-5** and **makes none of them**.

**Three terminology warnings, all load-bearing.**

1. **The V-4 collision is preserved, not resolved.** AD-01I **I-14** recorded that AD-01F §16.1's
   **V-4** (*does a non-connected contact attempt count as a qualifying user follow-up*) and AD-01I's
   task-assigned **V-4** (*Lead reactivation*) are **two different questions sharing one number**.
   Throughout this document, every reference names its source: **AD-01F's V-4** or **AD-01I's
   V-4·reactivation**. **Neither is resolved here. The collision remains open and documented.**
2. **A second numbering collision exists and is flagged in exactly the same way.** This task's brief
   states **V-15** as *"Is Inquiry the commercial/attribution anchor?"* **AD-01F §16.2 registers V-15
   as the narrower question** *"Does a re-inquiry arriving through a different source, campaign or CP
   constitute a new attributable opportunity?"* and registers **the anchor question as V-16**. This
   document **answers AD-01F's V-15 as registered** ([§4.7](#47-ad-01fs-v-15-as-registered--answered))
   **and separately performs the anchor evaluation the brief asks for**
   ([§4.1](#41-the-twelve-facts-tested-one-at-a-time)–[§4.5](#45-where-the-inquiry-anchor-genuinely-strains)),
   **while explicitly NOT declaring V-16 resolved** ([§4.6](#46-what-remains-of-v-16-after-this-document)).
   **The collision is recorded, not silently renumbered.** → **J-16**.
3. **"Lead" remains overloaded and W-2 is not answered here.** Throughout, **work record** means
   AD-01G §4.1's *Lead / Client Sales Record* and **Inquiry** means AD-01G §5's *Inquiry / Project
   Interest*. Where a source says *Lead*, the source's own sense is preserved and flagged.

---

## 1. Product Owner direction

> **⟦PRODUCT-OWNER DIRECTION⟧** Recorded first, verbatim in substance, before any analysis, so the
> analysis can be checked against it rather than substituted for it. **Nothing in this section is the
> architect's.**

### 1.1 On what a returning customer produces

| # | Source | Statement |
|---|---|---|
| **P-1** | Consolidated **§7** | *"a dumped or previously handled client can generate a new inquiry and the existing client/lead record **may be revived** rather than automatically creating a completely separate lead record."* |
| **P-2** | Consolidated **§7** | *"If the client later regenerates an inquiry, **the same underlying client/lead history may remain connected.** The client may then show **more than one project interest on the same record.** The timeline should record that the client regenerated/expressed interest again, **including the relevant project context.**"* |
| **P-3** | Consolidated **§7** *(the Product Owner's own reservation)* | *"**exact revival semantics, episode boundaries and the difference between 'same Lead re-engagement' versus 'genuinely new commercial opportunity' remain an architecture/product decision to be settled explicitly.**"* |
| **P-4** | Consolidated **§13** | *"A regenerated inquiry **for a different project or size** can be added to the same client record when the business considers it part of the same continuing client relationship. **The timeline should record the new inquiry event rather than silently overwriting the previous interest.**"* |
| **P-5** | Consolidated **§13** *(explicitly open)* | *"**Open product/architecture decision:** define the exact boundary between an additional project interest on the same Lead and a genuinely new sales opportunity."* |
| **P-6** | Consolidated **§28** *(explicitly open, Product Owner's own words)* | *"Exact definition of a **genuinely new commercial sales opportunity versus a re-engagement/revival of an existing Lead**."* · *"Exact definition and **reporting treatment** of multiple project interests on one Lead."* |
| **P-7** | Consolidated **§4** | The working conceptual model names **Person / Client**, **Lead / Client Sales Record**, **Project Interest**, **Activity / Timeline**, **Assignment**, **Next Action**, **Disposition / Lifecycle**, **History visibility**. **It does not name an "opportunity."** |

### 1.2 On attribution, clash and commission

| # | Source | Statement |
|---|---|---|
| **P-8** | Spec **§11** | *"Clash detection is a **core business control**. If multiple sources/CPs claim **the same prospective customer**: record **each** attribution claim, **preserve history**, do not expose sensitive competing claims unnecessarily. **Builder-side authorized leadership resolves attribution.** Sales Reps should not automatically see sensitive clash information that could influence or manipulate attribution."* |
| **P-9** | Spec **§32** | *"The CP workflow must support: commission/brokerage entitlement, **milestone-based eligibility**, invoice submission when eligible, Accounts review, payout, TDS information, reversal/clawback where legitimately applicable."* |
| **P-10** | Spec **§40** | *"The UI may clearly indicate that an invoice cannot yet be submitted … Once **the business condition** is satisfied, invoice submission becomes available. **The UI lock must correspond to server-side authorization.**"* |
| **P-11** | Spec **§39** | *"The CP should be able to see relevant **lead information, attribution information, pipeline status, commission status, eligibility, invoice status.** Do not expose Builder-internal sensitive information."* |
| **P-12** | Consolidated **§22** | *"Booking, demand, receipt, receipt allocation, ledger and **commission are distinct financial concepts.** … **CP commission accrual and payout are separate.** Commission approval/validation/payment should be separated by responsible functions."* |
| **P-13** | Spec **§33** | *"If a legitimate cancellation creates a recoverable CP overpayment: the CP ledger may become negative. … However: **UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS.** Do not blindly apply clawback logic to every closed booking."* |
| **P-14** | Spec **§42**, **§44** | Helpdesk capture is *"name, limited phone identifier where appropriate, **CP/source**, quick registration, summon/assign appropriate Sales Rep."* An unmatched CP sub-agent gets *"a temporary/manual capture mechanism … clearly marked as unverified and later reconciled."* |

### 1.3 On Success, Booking and correction

| # | Source | Statement |
|---|---|---|
| **P-15** | Consolidated **§14**; AD-01A **§8.2** *(approved)* | *"**Lead Success is associated with the approved Booked / Stage 3 milestone**, not merely with booking initiation."* **Q4. Not reopened.** |
| **P-16** | AD-01C **§3.7** *(approved — Q6)* | No ordinary backward transition out of Success. **A valid Success stays historically true even if the downstream Booking is later cancelled.** An **incorrectly recorded** Success is corrected through an **audited correction mechanism**, never ordinary reversal. **A genuinely new opportunity after a prior Success creates a new business unit.** **Not reopened, not narrowed, not re-argued anywhere below.** |
| **P-17** | Spec **§35** | *"MVP does NOT implement automated payment-gateway refunds or escrow. … However: the CRM must still preserve the appropriate business state and inventory consequences. **'Handled offline' does NOT mean destroy history or ignore the transaction.**"* |
| **P-18** | Spec **§06**, **§07** *(as recorded by AD-01C §3.5 and AD-01G §4)* | **Customer is a context, not a record.** A Person may hold multiple leads, *"become a customer, be an applicant/co-applicant, have historical relationships."* |

### 1.4 On governance

| # | Source | Statement |
|---|---|---|
| **P-19** | Consolidated **§30** | *"**No schema/code implementation should be inferred from an unresolved product ambiguity.**"* |
| **P-20** | Spec **§88** / **§86** / **§65** | Canonical entities, relationships, **financial rules**, **CP commission logic**, source-of-truth rules and audit requirements are **MUST ASK BEFORE DECIDING**. Inventing business rules is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. |
| **P-21** | Spec **§95** | *"**MINIMUM NECESSARY FRICTION, not minimum possible taps.** A one-tap action that creates financial corruption is worse than a three-tap action that prevents it."* |
| **P-22** | Spec **§97** | *"**When in doubt, STOP AND ASK.**"* |

### 1.5 Decisions treated as fixed input and not reopened anywhere below

> **⟦PRODUCT-OWNER DIRECTION⟧ Binding input.** **Q4** (P-15) and **Q6** (P-16) are **not reopened, not
> re-argued and not narrowed** at any point. **Q1's vocabulary decision** — the four-value vocabulary,
> the rejection of *Pending*, Today/Future/Overdue as derived — is likewise not reopened. **Q7's
> approved three-dimension Dump-reason framework** (opportunity validity class · responsibility locus ·
> recoverability posture) is **CONFIRMED and NOT amended**; §5.4 finds a **second, independent
> justification** for it and adds no dimension and no value. **N-4 still owns every Dump-reason value.**
> **AD-01A §8.5's prohibition on inventing a reassignment-approval workflow is honoured throughout.**
> **AD-01I's I-1 … I-9 (the Dump/redistribution/reactivation model) are treated as fixed input**; §10.1
> analyses only what they imply for *commercial continuity*, which is what this task authorises.

---

## 2. V-14 analysis

> **⟦ARCHITECT ANALYSIS⟧ V-14 as registered (AD-01F §16.2): *"For a re-contact after a rightful
> closure, what distinguishes a genuinely new commercial opportunity from continuation of an existing
> one?"* This section shows that the question as posed contains three separable questions with three
> different owners, answers the two that are forced, and refers the third.**

### 2.1 The framing correction — V-14's original dichotomy no longer has two live branches

> **⟦ARCHITECT ANALYSIS⟧ J-1 — V-14 was posed as a choice between "re-engagement/revival of an
> existing Lead" and "a genuinely new commercial opportunity." Under AD-01G G-1/G-2 and AD-01H H-4,
> *neither branch survives in the form the question assumes*, and this is why five successive documents
> have found V-14 unanswerable without conceding that it is unanswerable.**

| Branch as V-14 / **P-6** poses it | Its status under the AD-01G / AD-01H baseline |
|---|---|
| *"Revival of an existing Lead"* | **Has no subject.** Under **G-1** the work record is long-lived, *"not created by an inquiry and not ended by a disposition."* It never closed. **There is nothing to revive.** |
| *"Same Inquiry re-engagement"* | **Structurally unavailable.** Under **H-4** an Inquiry's commercial disposition is *monotone and terminal-once*; under **AD-01A §8.3** the closure's reason is **preserved, never rewritten**; under **R6** history is never edited. **A closed Inquiry cannot be reopened, continued, or re-dispositioned.** |
| *"A genuinely new commercial opportunity"* | **Has no entity.** **P-7** shows the Product Owner's own conceptual model names Person, Lead, Project Interest, Activity, Assignment, Next Action, Disposition and History visibility — and **does not name an opportunity.** |

> **⟦ARCHITECT ANALYSIS⟧ J-2 — What actually remains is a well-posed and largely forced question, and
> the discipline that makes it so is AD-01's own.** AD-01 §3's test — *two concepts belong on one axis
> only if a record can never legitimately be in both at once* — applied to the returning customer,
> gives an individuation rule that requires **no threshold, no score and no judgement call**:

> **⟦ARCHITECT RECOMMENDATION — J-2, the Origination Rule⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK:
> canonical entities, relationships, source-of-truth rules.)*
>
> **A customer-generated expression of interest opens a NEW Inquiry if and only if no non-terminal
> Inquiry on that work record already covers it. If a non-terminal Inquiry covers it, the expression is
> an *activity on that Inquiry*, never a second Inquiry.**
>
> **Three properties, each of which is the reason to prefer it:**
>
> 1. **It invents nothing.** It is the conjunction of three positions already on the table: **H-4**
>    (terminal-once), **AD-01A §8.3 + R6** (the closure is preserved), and **P-4** (*"record the new
>    inquiry event rather than silently overwriting the previous interest"*).
> 2. **It needs no time threshold.** Whether the customer returns after three days, three months or
>    three years, the prior Inquiry is terminal and therefore cannot be continued. **AD-01E U-4's
>    finding that no dormancy threshold exists anywhere in the sources stops being an obstacle to this
>    question** — not because a threshold was found, but because the question turns out not to need
>    one. **No threshold is invented, assumed or implied anywhere in this document.**
> 3. **It is decidable at capture time from facts the system already holds**, which is AD-01G **T14**'s
>    standard: the user records the event; the classification is appended later, never demanded at the
>    door.

> **⟦ARCHITECT ANALYSIS⟧ J-3 — the phrase "genuinely new commercial opportunity" bundles three
> questions with three different owners, and that bundling is the actual defect.** Separated, they are:
>
> | Sub-question | What it asks | Status after this document |
> |---|---|---|
> | **V-14·structural** | Does the returning interest produce a **new Inquiry**? | **FORCED, and answered: yes.** J-2. Requires no business decision. |
> | **V-14·accounting** | Does that new Inquiry **enter the period's Capture count and the conversion denominator**? | **FORCED, and answered: yes.** This is **V-18**'s commercial half — [§3.4](#34-v-18s-registered-question-the-capture-half-is-forced). |
> | **V-14·attribution** | Does the **prior producer retain any claim** over the new Inquiry? | **`BUSINESS DECISION REQUIRED`.** This is **AD-01C T-4** exactly, and it is the only part of V-14 that is genuinely a policy about money. [§5](#5-t-4-interaction). |
>
> **This is the finding that unblocks the cluster.** V-14 looked unanswerable because its answerable
> halves were chained to its unanswerable half. **They are separable, and separating them lets the
> architecture be settled now while the money question is properly referred to the owner.**

### 2.2 Case 1 — Amit is active for Project A and asks for another configuration/unit type within Project A

> **⟦ARCHITECT ANALYSIS⟧ This is the one case of the six that the Origination Rule does *not* settle,
> and the reason is precise: the rule turns on whether a live Inquiry "covers" the arriving interest,
> and **the sources do not say whether unit type/configuration is inside or outside an Inquiry's
> coverage.**
>
> | Reading | What the case is | Evidence for it |
> |---|---|---|
> | **(1a) Requirement refinement** | The customer is changing what they want **within** one engagement (*"actually, a 3BHK"*). One Inquiry; its **requirement profile** evolves; the timeline records the change. | The ordinary reading of an engagement. **AD-01G §5.1** treats the requirement profile as a distinct fact from the intake remark. |
> | **(1b) A second, parallel interest** | The customer wants **two things at once** in one project (own use plus investment). Structurally identical to Case 2, except that the project is the same. | **P-4** names *"a regenerated inquiry for a different project **or size**"* — the Product Owner's own words contemplate **size** as an individuating dimension, not only project. |
>
> **Nothing in the arriving message distinguishes (1a) from (1b), and no source supplies the
> discriminator.** **P-4** is the only evidence and it is genuinely ambiguous: it says a *regenerated*
> inquiry may differ by size, and *regenerated* presupposes the prior one closed — so it speaks to the
> sequential case and is silent on the concurrent one.

> **⟦ARCHITECT ANALYSIS⟧ J-4 — this case also exposes a contradiction between two prior documents that
> must be named rather than worked around.** **AD-01F §16.2 states V-3 in two clauses**: *"**At which
> level does the lifecycle disposition sit** … **And which facts (unit type, budget, requirement
> profile, terminal reason) belong to which?**"* **AD-01H resolves the first clause (H-4, Model D) and
> does not address the second at any point.** **AD-01G §5.1 explicitly marks the requirement-profile
> row *"V-3 — not resolved here."*** Yet **AD-01H §13 and §14 record V-3 as resolved without
> distinguishing the clauses**. → **A-5, named and not made** ([§15](#15-impact-on-ad-01-through-ad-01i)).

> **⟦BUSINESS DECISION REQUIRED — AA-1⟧** **Is unit type / configuration / size within a single project
> an individuating dimension of the Inquiry, or an attribute of its requirement profile?** Full
> statement in [§14](#14-business-decisions-required). **No branch is preferred, recommended or ranked
> here.** Coupled to **V-3 clause 2** (fact ownership, unresolved — J-4), **Y-3** (whether two Inquiries
> on one project are one *project interest*) and **Y-1** (whether two may be live at once).

> **⟦ARCHITECT ANALYSIS⟧ What *is* settled about Case 1 under either branch of AA-1.** It is **never a
> new work record** (**P-2**, **G-1**). It is **never a "new commercial opportunity" in a sense that
> requires a new entity** — under (1a) it is one Inquiry, under (1b) it is two Inquiries, and neither
> reading needs anything the model does not have. **AA-1 therefore decides a count, not a concept**,
> which is why it is safe to leave open while the rest of this document is approved — with one caveat
> recorded honestly: **the count it decides is a commercial count, and it feeds source-, project- and
> CP-conversion denominators** ([§11](#11-reporting-implications)).

### 2.3 Case 2 — Amit is active for Project A and expresses interest in Project B

> **⟦ARCHITECT ANALYSIS⟧ J-5 — settled, and forced from two independent directions.**
>
> **Project is definitional to the Inquiry** (**AD-01G §5.1**, *"Settled"*; it is what makes a
> per-project outcome expressible at all). A Project-B interest therefore **cannot** be an attribute of
> a Project-A Inquiry. Independently, **P-2** and **P-4** state directly that the client *"may then show
> more than one project interest on the same record"* and that the new inquiry event is **recorded, not
> overwritten**. **→ A new Inquiry, necessarily; the same work record, necessarily.**
>
> **It is a distinct commercial unit**: its own project, its own origination date, its own source,
> campaign and channel, its own claim set, its own outcome. **This is not a choice the architecture
> makes — it is what the facts already are** (**AD-01C D5**; **AD-01G §5.1**; **AD-01H §12 row 7**).

> **⟦ARCHITECT ANALYSIS⟧ J-6 — the one thing Case 2 does *not* settle, and it is not this document's to
> settle.** Whether Project A and Project B may be **simultaneously non-terminal** is **AD-01H Y-1**,
> and it is **not resolved, narrowed or branched here.** Case 2 as the task states it (*"Amit is
> **active** for Project A"*) is **AD-01H Example 1** exactly.
>
> **The separation that makes this safe is AD-01H H-3's own method:** Y-1 decides whether both may be
> **worked** at once; it does **not** decide whether they are **one commercial thing**. They are two,
> under any answer to Y-1. **Commercial identity separates cleanly from concurrent liveness, exactly as
> concurrent existence separated cleanly from concurrent liveness in AD-01H §3.6.**
>
> **A consequence recorded because it raises Y-1's priority and must not be lost:** **Case 2 is the
> single most ordinary scenario the Product Owner describes** (**P-2**, **P-4**, consolidated §13's
> title is literally *"multiple project interests"*), and **it is unperformable if Y-1 answers "no."**
> Y-1 is therefore not an edge case; it gates the headline scenario. **Y-1 is NOT resolved here.**

### 2.4 Case 3 — Project A Inquiry Dumped as "Not Interested"; three months later Amit asks about Project A again

> **⟦ARCHITECT ANALYSIS⟧ J-7 — settled by the Origination Rule, with no threshold and no judgement.**
>
> | Option the task offers | Verdict | Basis |
> |---|---|---|
> | *Same Inquiry reactivated* | **Not available.** | **H-4** (terminal-once), **AD-01A §8.3** (reason preserved), **R6** (history never edited). Not a new prohibition — a consequence of positions already taken. |
> | *New Inquiry* | **Yes. Forced.** | J-2. **P-4** requires the event be recorded rather than the prior interest overwritten. |
> | *New commercial opportunity* | **Decomposes (J-3).** Structurally yes; a Capture yes (§3.4); **whether the prior producer's claim reaches it is T-4 — `BUSINESS DECISION REQUIRED`.** | §5 |
>
> **The three months do exactly one architectural thing: nothing.** They do not change the answer, and
> **no threshold is introduced to make them change it.** What the elapsed interval *is* good for is
> (i) a **reporting** segment — the gap between a closure and the next origination on the same record ×
> project is a durable derivable fact (**AD-01I §10.1 row 8**, confirmed) — and (ii) a possible
> **input** to whatever reach rule **T-4** settles, if the owner wants reach to be time-bounded.
> **AD-01E U-4 is confirmed and not narrowed: no dormancy threshold exists anywhere in the sources, and
> none is proposed here.**
>
> **One further consequence, stated so it is not mistaken for a decision:** **Q5's mechanical half has
> no subject at the Inquiry level** — no `Dump → Follow-up` edge is required by this case. **AD-01H §14
> already recorded this. Q5 is NOT resolved and NOT narrowed by anything here**, and its commercial half
> is the V-14 subject this document decomposes.

### 2.5 Case 4 — Dumped as "Wrong Number"; later Amit personally submits a valid inquiry

> **⟦ARCHITECT ANALYSIS⟧ J-8 — this is the case where the approved three-dimension framework does real
> work, and it is the sharpest test of what "commercial continuity" can mean.**
>
> A closure classified under **Q7 Dimension A** as *invalid / non-opportunity* asserts something
> stronger than *"this engagement failed."* It asserts **that there was no engagement.** The prior
> record described a contact that could not be made with the person it named.
>
> **Therefore there is nothing for the new Inquiry to be continuous *with*.** The new Inquiry is not a
> re-engagement; it is, commercially, a **first** engagement on that record. **This is not a rule this
> document invents — it is what the approved Dimension A classification *means*.** Structurally the
> answer is the same as Case 3 (a new Inquiry, J-2); **what differs is the entire meaning of the
> continuity question.**

> **⟦ARCHITECT ANALYSIS⟧ J-9 — and this is why T-4 cannot be answered as a single global rule.** Put
> Case 4 and Case 5 side by side under a **uniform** answer to T-4:
>
> | If T-4 answers *"a producer's claim reaches forward across any closure"* | Consequence |
> |---|---|
> | **Case 5** (Budget Issue — a real engagement that failed on price) | Defensible. The producer genuinely introduced a live prospect who later bought. |
> | **Case 4** (Wrong Number — an engagement that never existed) | **A CP who supplied an unusable contact is credited with a sale the customer generated directly, through a channel the CP had nothing to do with.** |
>
> | If T-4 answers *"a claim never reaches forward"* | Consequence |
> |---|---|
> | **Case 4** | Correct. |
> | **Case 5** | A producer who introduced a genuine prospect three months before the sale gets nothing, and the dispute **AD-01C §2.2 D6 already identified as "genuine"** is resolved against them by a data-model default rather than by a decision. |
>
> **Neither uniform answer is defensible across both cases. T-4's answer must therefore be a function of
> the prior closure's classification, not a single yes/no** — and **the classification it needs already
> exists and is already approved: Q7's Dimension A, with Dimension C available if the owner wants
> recoverability posture to participate.**

> **⟦ARCHITECT ANALYSIS⟧ J-10 — a second, independent justification for Q7, arriving from a direction
> Q7 was not designed for.** **AD-01A §8.3 approved the three dimensions to make loss analysis
> defensible.** This document finds that the **same** classification is the only available input to a
> defensible attribution-reach rule. **Q7 is CONFIRMED, NOT amended, and no dimension and no value is
> proposed. N-4 still owns every value** — and **N-4 is now on the critical path of T-4's
> *answerability*, which is the third document in a row to find N-4 blocking something downstream**
> (AD-01 §9.6, AD-01H §10.3, AD-01I §10.1 row 2). **N-4 is not resolved here.**

### 2.6 Case 5 — Dumped as "Budget Issue"; later Amit returns after a significant period

> **⟦ARCHITECT ANALYSIS⟧ J-11 — structurally identical to Case 3; commercially the case where
> continuity is most real; and the case that determines whether a structural addition is required.**
>
> **How continuity should be represented:** the continuity that genuinely exists here is **relationship
> continuity**, and it already has a home — **the work record**, which holds both Inquiries, the whole
> timeline, the preserved closure and its classified reason (**G-1**, **P-2**). **Commercial** identity
> does **not** continue: the closed Inquiry stays closed with its reason; the new Inquiry is its own
> unit with its own origination, source and claim set.
>
> **`Relationship continuity` and `commercial continuity` are different things, and only the first
> exists in this model. That is the direct answer to V-18's continuity question** ([§3](#3-v-18-analysis)).

> **⟦ARCHITECT ANALYSIS⟧ J-12 — the one structural question Case 5 raises, and its exact trigger
> condition.** If the business ever needs to state that a specific new Inquiry **succeeds a specific
> prior Inquiry** — rather than merely sitting on the same record as it — that requires an **appended
> reference between Inquiries**. **AD-01H H-10 already named this mechanism** (*"the grouping of two
> same-project inquiries, if V-14 ever requires it → an **appended reference between inquiries**, not a
> new entity"*). **The question H-10 left open is whether V-14 requires it. This document answers that
> question conditionally, and the condition is T-4:**
>
> | If **T-4** answers… | Is the Inquiry→Inquiry succession reference required? |
> |---|---|
> | *A claim never reaches across a closure* | **No.** Relationship adjacency on the work record is sufficient for every reporting need §11 identifies. |
> | *A claim may reach across a closure, under any condition whatsoever* | **Yes, and it becomes load-bearing on money.** The reach rule must be able to say **which** prior Inquiry a new one succeeds, because a record with four prior closures across three projects has four candidate predecessors with potentially four different producers. Without the reference the rule is unevaluable, and **§40's server-side authorization would be deciding entitlement from an inference.** |
>
> **This is the concrete price of answering T-4 "yes," and the owner should have it before answering.**
> **No reference is proposed, designed or recommended here** — it is registered as **AA-4**, conditional
> on T-4, and **AD-01H H-10 is not reopened**: the *entity* rejection stands either way, because a
> reference between two existing records is not an entity. **This is also AD-01C's successor-link
> apparatus (T-1, T-3, T-11) arriving at the Inquiry level → A-3, named and not made.**

### 2.7 Case 6 — Amit had Project A = Success/Booked; later asks about Project B

> **⟦ARCHITECT ANALYSIS⟧ J-13 — settled, and settled twice over, which is itself the finding.**
>
> **Route 1 — Q6-S4, untouched.** **P-16** already decides it: *a genuinely new opportunity after a
> prior Success creates a new business unit.* **AD-01G §5.4 row 3** already relocated the level at which
> that unit is created (a new **Inquiry**, not a new record) and **AD-01H H-8** confirmed it. **Q6 is not
> reopened; nothing about it requires revision.**
>
> **Route 2 — the ordinary multi-project rule, J-5.** Project B ≠ Project A, therefore a new Inquiry,
> **regardless of how Project A ended.**
>
> **The two routes converge, and the convergence is a consistency check passing.** **AD-01C §3.5 made
> exactly this argument in the opposite direction** — that Q5 and Q6 must not produce two contradictory
> idioms where *"a rep would have to learn which door to use based on how the last episode ended."*
> **Under J-2 there is one door. How the prior Inquiry ended — converted, closed, or still live —
> changes nothing about how the next one opens.** That property is worth naming because it is the
> strongest available evidence that the Origination Rule is the right shape.
>
> **Yes: this must produce a new commercial Inquiry. It is required, not optional.**
>
> **What Success *does* change, none of which is this document's to decide:** whether the record leaves
> ordinary sales follow-up queues (**Y-4**, open, blocking); whether the CP behind the successful
> purchase has any claim on the later one (**T-5**, open — the exact counterpart of T-4, §5.5); the §06
> *Customer* context the client is now presented in; and a legitimate **returning-customer** reporting
> segment (§11).

### 2.8 The six cases in one table

| Case | New Inquiry? | New work record? | New commercial unit? | Open item it turns on |
|---|---|---|---|---|
| **1** — another configuration, same project, while live | **Undetermined — AA-1** | **No** | Under (1a) no; under (1b) yes | **AA-1**, V-3 cl. 2 (**A-5**), Y-3, Y-1 |
| **2** — Project B while Project A live | **Yes — forced** | **No** | **Yes** | Liveness only → **Y-1** (not resolved) |
| **3** — Dumped *Not Interested*, returns later | **Yes — forced, no threshold** | **No** | **Yes** structurally; attribution → **T-4** | **T-4** |
| **4** — Dumped *Wrong Number*, valid inquiry later | **Yes — forced** | **No** | **Yes — and it is a *first* engagement, not a re-engagement** | **T-4** (must be classification-sensitive — J-9), **N-4** |
| **5** — Dumped *Budget Issue*, returns later | **Yes — forced** | **No** | **Yes**; relationship continuity is real, commercial continuity is not | **T-4**, and **AA-4** conditionally |
| **6** — Project A Success, later Project B | **Yes — required** | **No** | **Yes** | **T-5**, **Y-4** (neither resolved) |

> **⟦ARCHITECT ANALYSIS⟧ Read the table down the third column. Five of six are forced by positions
> already on the table, and the sixth is a countable ambiguity, not a conceptual one. Read it down the
> fifth column: every genuinely open thing is either an existing registered item or one new
> business decision. V-14 is not a hard question. It was a compound one.**

---

## 3. V-18 analysis

> **⟦ARCHITECT ANALYSIS⟧ V-18 as registered (AD-01F §16.2): *"Does a re-inquiry count as a Capture in
> the period it opens, and does it enter the §14 'New leads' feed?"* The task additionally requires that
> six named situations be distinguished. Both are addressed, and the two halves of the registered
> question have different owners.**

### 3.1 The six situations are not six coordinate alternatives

> **⟦ARCHITECT ANALYSIS⟧ J-14 — the task's six situations resolve onto two orthogonal axes plus one
> non-member, and most of the apparent distinctions are differences in *prior state*, which the
> architecture preserves anyway.**
>
> **Axis 1 — is there a customer-generated commercial event?** This is **AD-01I I-7**, and it is
> **CONFIRMED, load-bearing and never merged.**
>
> **Axis 2 (evaluated only when Axis 1 = yes) — is the arriving interest covered by a non-terminal
> Inquiry?** This is the Origination Rule (**J-2**).
>
> | # | Situation as the task names it | Axis 1 | Axis 2 | What it actually is |
> |---|---|---|---|---|
> | **1** | Same Inquiry continuing | Yes | **Covered** | An **activity** on a live Inquiry. **No new commercial unit, no Capture, no new claim, no new source.** |
> | **2** | Existing Lead receives a **new Inquiry** | Yes | **Not covered** | A new Inquiry. **Capture.** Own source, own claim set. |
> | **3** | Existing Lead receives **another project interest** | Yes | **Not covered** | **The same event as (2), described from the project angle** — *conditional on Y-3*. See J-15. |
> | **4** | Existing **successful** Inquiry, then a new project inquiry | Yes | **Not covered** | (2), with the prior Inquiry's terminal outcome = converted. **Q6-S4; T-5 territory.** |
> | **5** | Existing **dumped** Inquiry, then a new inquiry | Yes | **Not covered** | (2), with the prior Inquiry's terminal outcome = closed-with-reason. **T-4 territory.** |
> | **6** | **Manager redistribution, no customer inquiry** | **No** | *(not evaluated)* | **Not a member of this set at all.** A work mandate on a new custody interval. **No Inquiry, no Capture, no source, no claim, no project.** **AD-01I I-6/I-7, CONFIRMED and reinforced.** |
>
> **Only two structurally distinct events exist across (1)–(6): *an activity on a live Inquiry* and *the
> origination of a new Inquiry* — plus (6), which is a management act and produces neither.**
> Situations (2), (4) and (5) differ **only** in what the record's prior Inquiries terminally were —
> a fact **R6** and **AD-01A §8.3** already require to be preserved permanently, so **the distinction
> costs nothing to make and requires no new fact**.

> **⟦ARCHITECT ANALYSIS⟧ J-15 — situations (2) and (3) are the same event unless Y-3 says otherwise, and
> the apparent distinction between them is a residue of Y-3 being open.** **AD-01H Y-3** asks *"Is a
> Project Interest the same object as an Inquiry, or an aggregate over one-or-more inquiries on the same
> project?"* If Y-3 answers *same object*, (2) ≡ (3) exactly. If Y-3 answers *aggregate*, then (3) is
> *"a new Inquiry that also opens a new project-interest aggregate"* and (2) is *"a new Inquiry within
> an existing aggregate."* **Y-3 is NOT resolved, narrowed or branched here.** It is recorded that Y-3
> determines a **reporting count** (§11) and **AA-1**'s framing, not a conceptual boundary.

### 3.2 The distinction the architecture must never lose

> **⟦ARCHITECT RECOMMENDATION — J-16⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT
> APPROVED.**)*
>
> **A CUSTOMER-GENERATED COMMERCIAL EVENT and a MANAGER-GENERATED WORK EVENT are never the same event,
> are never derived from each other, and never share a mechanism.** **AD-01I I-7 established this; this
> document makes it *structural* rather than *policed*:**
>
> | | Customer-generated commercial event | Manager-generated work event |
> |---|---|---|
> | **Produces** | An **Inquiry** (J-2) | A **custody interval** carrying a work mandate (**AD-01I I-8**) |
> | **Capture in its period?** | **Yes** (§3.4) | **No — and it structurally cannot be**, because a Capture is the origination of an Inquiry and no Inquiry exists |
> | **Carries source / campaign / channel / project?** | **Yes, its own** | **No.** There is no customer message to attribute and no project to name |
> | **Creates or moves an attribution claim?** | **Yes — its own claim set** | **Never.** §9.4 |
> | **Restates a closed period?** | **Never.** The prior loss stands | **Never.** AD-01F §12.4 |
>
> **Why this is now structural and not merely forbidden:** under this document's anchor determination
> (§4), **every commercial fact — source, campaign, claim, conversion, disposition — hangs off an
> Inquiry.** A redistribution creates no Inquiry. **Therefore it has nowhere to put a commercial fact,
> and a violation is not a rule breach but a representational impossibility.** That is the strongest
> form of the guarantee AD-01F §12.4 asked for, and it is reached without adding a control.

### 3.3 Re-engagement continuity, stated as the architecture would hold it

> **⟦ARCHITECT RECOMMENDATION — J-17⟧** **Continuity between two Inquiries on one work record exists at
> exactly one level and is of exactly one kind:**
>
> - **Relationship continuity — real, already held, requires nothing new.** Both Inquiries sit on one
>   long-lived work record with one timeline, one assignment history, and the prior closure preserved
>   with its classified reason. **This is what P-1 and P-2 ask for** — *"the same underlying client/lead
>   history may remain connected"* — **and it is satisfied in full.**
> - **Commercial continuity — does not exist, and must not be manufactured.** The prior Inquiry's
>   outcome is a permanent historical fact about a finished engagement. The new Inquiry's outcome is a
>   statement about a different engagement.
> - **Succession — a named, appended relationship between two specific Inquiries — does not exist today
>   and is required only if T-4 says so.** **AA-4**, conditional. **J-12.**

> **⟦ARCHITECT RECOMMENDATION — J-18⟧ The word *"revival"* (P-1) should be retired as an *architectural*
> term, and the Product Owner should be told plainly why — because this is the point in the analysis
> most likely to look like contradicting a recorded preference, and it is not one.**
>
> **P-1's stated intent is that the returning client not get a *"completely separate lead record."*
> That intent is honoured completely**: the work record is the same record, the history stays connected,
> the client shows multiple project interests exactly as **P-2** describes. **What changes is only the
> mechanism word.** Nothing is revived because nothing died: the record never closed, and the closed
> Inquiry is not reopened but joined by a new one. **The Product Owner's requirement is met; the
> vocabulary that described it was written before the Lead/Inquiry split existed.** **P-3 anticipates
> exactly this** — *"exact revival semantics … remain an architecture/product decision to be settled
> explicitly."* **This is that settlement, offered for approval and not assumed.**

### 3.4 V-18's registered question — the Capture half is forced

> **⟦ARCHITECT RECOMMENDATION — J-19⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** §88 MUST-ASK: source-of-truth rules.)*
>
> **A re-inquiry counts as a Capture in the period it opens. This is not a free business choice — it is
> forced by the conjunction of three positions already on the table, and the alternatives are each
> incoherent.**
>
> **The argument, stated so it can be attacked:**
>
> 1. Under **H-4** an Inquiry's disposition is terminal-once, so **every Inquiry has exactly one
>    origination and exactly one outcome.**
> 2. Under **V-17's forced direction** (**AD-01H**, and not resolved by anyone) conversion is keyed on
>    the Inquiry. **An Inquiry that can convert must therefore be in some period's denominator.**
> 3. **AD-01F §12.4 forbids re-engagement from restating a closed period** — *"the loss stands; a new
>    engagement opens in the current period."*
>
> **Now enumerate the alternatives to J-19:**
>
> | Alternative | Failure |
> |---|---|
> | The re-inquiry is **no Capture at all** | Its conversion has no denominator entry. A cohort of re-engaged clients can report **conversion above 100%**, and the more successful re-engagement is, the more corrupt the figure. |
> | The re-inquiry is credited to the **original** Capture's period | **Restates a closed period** — forbidden by AD-01F §12.4 and by **R6**. Also credits a period that recorded a loss with a conversion it did not produce. |
> | It is a Capture, but of a **different kind** that is excluded from conversion denominators | Two denominators exist for one funnel, and every source-, project- and CP-conversion figure silently picks one. **§11's disagreement problem, guaranteed.** |
>
> **No alternative survives. J-19 is the only coherent answer, and it requires no new fact.**

> **⟦ARCHITECT RECOMMENDATION — J-20⟧ What the business legitimately wants instead of a smaller Capture
> count is a *segmentation* of Captures, and it is fully derivable.** *"How much genuinely new business
> did we generate"* is a real management question, and it is answered by splitting the period's Captures
> into **first engagement on this record** and **re-engagement on this record** — **derivable from facts
> already required** (each Inquiry's origination time; the record's prior Inquiries and their terminal
> outcomes). **No new fact, no new entity, no new control. Consistent with AD-01G G-8's read-time
> projection principle.** **Whether the owner requires the split, and at what level, is AA-5.**

### 3.5 V-18's feed half is owned by an existing item and is not resolved here

> **⟦ARCHITECT ANALYSIS⟧ J-21 — *"does it enter the §14 'New leads' feed"* is not a commercial question
> and is not answered by this document.** **AD-01H H-5** established that *New* is a family of **three
> derived predicates** — N-record, N-context, N-inquiry — and that **which predicate the operational
> queue uses is V-5**. A re-inquiry is **N-inquiry-true** and **N-record-false**; whether the feed shows
> it therefore depends entirely on V-5, and secondarily on **AD-01F's V-4** (what *qualifying* means).
> **V-5 and AD-01F's V-4 are NOT resolved, narrowed or branched here**, and **no new item is minted for
> a question an existing item already owns** (AD-01I §13.2's discipline). **The feed's composition is
> also information architecture and is out of this document's scope entirely.**
>
> **V-18 is therefore resolved in its commercial substance (J-19, J-20) and explicitly referred in its
> presentation half (J-21). The document does not claim more than that.**

---

## 4. V-15 analysis

> **⟦ARCHITECT ANALYSIS⟧ Scope, stated first because of the second numbering collision (see *How to read
> this document*, warning 2). This section (a) performs the anchor evaluation the task's brief asks for,
> **critically and without assuming the conclusion**; (b) answers **AD-01F's V-15 as registered**; and
> (c) states precisely what remains of **V-16**, which it does **not** declare resolved.**

### 4.1 The twelve facts, tested one at a time

> **⟦ARCHITECT ANALYSIS⟧ The candidates are Person, work record, Inquiry, Booking, and AD-01E's
> episode. Each fact is tested by one question: **at which level can this fact legitimately hold
> different values for the same client at the same instant?** That test is **AD-01 §3's own** — *two
> concepts belong on one axis only if a record can never legitimately be in both at once* — and it is
> used here rather than an imported one (**R12**).**

| # | Fact | Can it legitimately differ between two engagements of one client? | Correct anchor | Status |
|---|---|---|---|---|
| **1** | **Project** | **Yes** — P-2, P-4 state it directly | **Inquiry** | **Settled by evidence** (AD-01G §5.1) |
| **2** | **Source** | **Yes** — AD-01C **D5**: a record-level source cannot honestly record a second engagement's channel | **Inquiry** | **Settled by evidence. Strong.** |
| **3** | **Campaign** | **Yes**, identically | **Inquiry** | **Settled by evidence** |
| **4** | **Inquiry date** | **Yes** — definitionally | **Inquiry** | **Settled** |
| **5** | **CP attribution claim** | **Yes** — AD-01C **D6**: two engagements may have two legitimate producers | **Inquiry** — but see §4.2, where this is genuinely contested | **Recommended here; V-16 registered it** |
| **6** | **Attribution conflict / clash (§11)** | The clash is between **two claims on one engagement** | **Inquiry** | **Settled in shape** (AD-01H §12 rows 2–3) |
| **7** | **Commercial outcome / disposition** | **Yes** — AD-01H **H-1**, Example 3 | **Inquiry** | **Settled** (H-4, H-6) |
| **8** | **Conversion** | **Yes** — AD-01H Example 4: two conversions on one record | **Inquiry**, referencing the Booking | **Settled** (H-8) |
| **9** | **Booking relationship** | **Yes** | **Inquiry → Booking**; the Booking owns its own lifecycle and is never absorbed | **Settled** (AD-01A §8.2, H-8) |
| **10** | **Commission eligibility** | **See §4.4 — this fact has TWO anchors and conflating them is the live defect** | **Booking** (the milestone) **× Inquiry** (the entitled party) | **Shape recommended; entitlement rule is M-9/V-16 — not resolved** |
| **11** | **Dump / disposition + preserved reason** | **Yes** | **Inquiry**, classified on Q7's three approved dimensions | **Settled** (AD-01A §8.3; H-6) |
| **12** | **Source-performance reporting** | Follows fact 2 | **Inquiry** | **Settled by evidence** (AD-01C D5; AD-01F §13.1 rows 7, 12) |

> **⟦ARCHITECT ANALYSIS⟧ Ten of twelve are settled by prior documents or by direct evidence and are
> recorded here as confirmations, not as new claims. The two that are not — fact 5 and fact 10 — are the
> subject of the next three sections, and they are the two with money attached.**

### 4.2 The Person / relationship anchor, tested properly rather than dismissed

> **⟦ARCHITECT ANALYSIS⟧ J-22 — the Person anchor deserves a real hearing, because in actual brokerage
> practice a CP registers a *person*, not a project interest, and **P-8**'s own language is
> person-shaped: *"multiple sources/CPs claim **the same prospective customer**."* Anyone who dismisses
> it on elegance grounds has not tested it.**
>
> **The test is AD-01H Example 4**: one client, two Inquiries, **both** convert, **two** Bookings,
> potentially **two different producers**, **two §32/§40 entitlements**.
>
> | Under a Person-level claim set | What happens |
> |---|---|
> | The record holds **both** claims | Correct so far. |
> | Booking 1 reaches its §32 milestone | **Which claim is entitled?** Both claims are on the Person, and neither carries a project or a date scope. **The model cannot say.** |
> | Two CPs both invoice under **§40** | **§40 requires server-side authorization for eligibility.** It has nothing to authorize *against*. |
>
> **The Person anchor cannot distinguish the entitled producer in the exact case the business
> performs.** And **the only repair is fatal to the alternative**: give each claim a project and a date
> scope so the right one can be matched to the right Booking — **at which point the claim has become an
> Inquiry-shaped object, and the Person anchor has reconstructed the Inquiry inside itself.** **This is
> the same move AD-01H §4.3 made against Model B** (*"at which point Model B **is** Model D"*), applied
> here for the third time in the line.
>
> **J-23 — this also eliminates the work-record candidate by identical reasoning, and the two fall
> together.** Under **G-1** the work record is **Person-bounded within the tenant**. Person and work
> record therefore fail Example 4 in exactly the same way, and **AD-01H §12 row 1 already recorded the
> work record's failure.** This document records that **the same argument reaches the Person
> candidate**, which AD-01H left standing because **M-5** owned it.
>
> **⟦ARCHITECT ANALYSIS⟧ Stated with precision, because it narrows an open blocker without resolving
> it: M-5's *Person* candidate is eliminated for the ATTRIBUTION anchor on capability grounds. M-5's
> *Person* candidate for the UNIQUENESS / DUPLICATE-DETECTION boundary is a different question, is
> untouched, and remains entirely open.** **AD-01H §12 row 2** already established that §09 duplicate
> detection (*"is this the same human?"*) and §11 clash (*"do two producers claim this engagement?"*)
> are different questions at different levels. **M-5 is NOT resolved here.**

> **⟦ARCHITECT ANALYSIS⟧ J-24 — the decisive argument against the Person anchor is not capability but
> governance, and AD-01C already made it.** **AD-01C §2.2 D6**: a record-spanning claim set does not
> *decide* that a claim reaches forward across a closure — it **silently creates that policy**, and
> *"nothing in §11, §32, §40 or §33 says that, and inventing it would breach Rule 1 and §88's
> prohibition on inventing business rules."*
>
> **The Inquiry anchor is the only candidate that leaves T-4 answerable in both directions.** A claim
> anchored at Inquiry 1 can still be *granted* reach over Inquiry 2 by an explicit, approved rule. A
> claim anchored at the Person **has already been granted unlimited reach by the data model**, and the
> owner is never asked. **Under §88 and P-20 that is not a defensible way to decide a commission
> policy.**

### 4.3 The Booking anchor, tested and eliminated

> **⟦ARCHITECT ANALYSIS⟧ J-25 — the Booking is the eligibility anchor and cannot be the attribution
> anchor, for two independent and each-sufficient reasons.**
>
> 1. **Most claims never reach a Booking.** A CP introduces a prospect who does not convert. The claim
>    was made, was recorded, and may have been **adjudicated by authorized leadership under §11** — all
>    with no Booking in existence. **A claim anchored on a Booking is unrepresentable for the majority
>    of claims.**
> 2. **Clash detection runs at intake, not at conversion.** **§11** is a capture-time control and **§12**
>    makes offline-created leads *pending synchronization* precisely so the clash gate can run on
>    arrival. **An anchor that does not exist until Stage 3 cannot carry a capture-time control.**
>
> **The Booking's correct role is fact 10's other half, and §4.4 states it.**

### 4.4 Commission has two anchors, and conflating them is the live financial defect

> **⟦ARCHITECT RECOMMENDATION — J-26⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT
> APPROVED.** §88 MUST-ASK: financial rules, CP commission logic. **No formula, rate, milestone value or
> calculation is proposed anywhere in this document.**)*
>
> **"Commission eligibility" is two questions with two anchors, and the sources already separate them:**
>
> | Question | Anchor | Source |
> |---|---|---|
> | **WHO is entitled** | The **resolved attribution claim on the converting Inquiry** | **§11** (leadership resolves attribution); **AD-01 E-13**'s established shape — commission keys on the **resolved claim**, not on a lifecycle state |
> | **WHETHER and WHEN it is payable** | The **Booking** and its milestones | **§32** (*milestone-based eligibility*); **§40** (server-side authorization on *the business condition*); **§33** (clawback follows the Booking's cancellation, and must distinguish a unit transfer from a true cancellation) |
>
> **P-12 states the same separation in the Product Owner's own words** — *"Booking, demand, receipt,
> receipt allocation, ledger and commission are distinct financial concepts … CP commission accrual and
> payout are separate."*
>
> **Two consequences, both of which are architecture and neither of which is a formula:**
>
> 1. **Commission is a join, never a lookup.** Any design that reads entitlement from the Booking alone
>    is guessing the producer; any design that reads payability from the Inquiry alone is asserting a
>    milestone that lives on the Booking. **Both errors are §40-authorization errors, not reporting
>    errors.**
> 2. **Claim resolution must precede eligibility in time.** If a §11 clash on the converting Inquiry is
>    still unadjudicated when the Booking reaches its §32 milestone, **§40 has nothing valid to
>    authorize against**, and the choice is to block a legitimate invoice or to pay an unresolved claim.
>    **AD-01F §12.3 fact 6 and AD-01E U-17 already identified the unresolved-clash hazard; this is its
>    financial expression. U-17 is NOT resolved here** — the ordering constraint is recorded as a
>    requirement on whoever resolves **M-9**.

### 4.5 Where the Inquiry anchor genuinely strains

> **⟦ARCHITECT ANALYSIS⟧ A recommendation that reports only its advantages is not an analysis. These are
> the three places the Inquiry anchor is uncomfortable, stated without softening.**
>
> **Strain 1 — a claim that arrives before any Inquiry can exist. This is the only place the candidate
> model may be genuinely insufficient, and it is registered rather than patched.** **P-14** (§42, §44):
> the Helpdesk captures *"name, limited phone identifier where appropriate, **CP/source**, quick
> registration"*; an unmatched CP sub-agent gets a temporary capture *"clearly marked as unverified and
> later reconciled."* **If a CP registration can exist with no project named, it is an attribution claim
> with no Inquiry to attach to.** Two readings, and the sources do not choose:
> - **Reading A** — a CP registration *is* an expression of interest mediated by a producer, and the
>   project is simply **not yet known**. The Inquiry exists from origination; project is completed
>   later. **The anchor holds; the cost is that an Inquiry may briefly lack a project**, which collides
>   with **V-24** (§08 project-scoped authorization, open).
> - **Reading B** — a bare registration is a claim over a *relationship*, not an engagement, and needs a
>   home the Inquiry cannot provide. **This is the only scenario in this entire analysis in which the
>   candidate model is insufficient.**
>
> **No reading is preferred, and no entity is proposed.** → **AA-2**. **This is the honest answer to the
> task's instruction to identify a missing concept if one is genuinely exposed: one candidate gap
> exists, it is conditional on a business answer, and inventing an entity to cover it before that answer
> would be exactly the move AD-01F, AD-01G, AD-01H and AD-01I each refused.**
>
> **Strain 2 — reach across Inquiries requires a reference the model does not currently have.** J-12,
> AA-4, conditional on T-4. **Priced, not hidden.**
>
> **Strain 3 — the per-Inquiry claim set multiplies the §11 adjudication surface.** A record with four
> Inquiries can hold four independent clash adjudications, and **§11 reserves adjudication to authorized
> leadership**, so the volume is a management-workload cost. **Recorded honestly. It is not an argument
> for a coarser anchor** — the coarser anchors do not reduce the number of real disputes, they merely
> make the model unable to represent them separately (J-22), which is **AD-01C D6**'s *"a clash that is
> not a clash."*

### 4.6 What remains of V-16 after this document

> **⟦ARCHITECT ANALYSIS⟧ J-27 — stated precisely, because the task's brief and AD-01F's register use
> different numbers for overlapping questions and a reader must not conclude that V-16 has been
> quietly closed.**
>
> **V-16 as registered:** *"Do attribution claims and commission entitlement attach to the Person, the
> working record, the inquiry, or an episode?"*
>
> | Part of V-16 | Status after this document |
> |---|---|
> | The **episode** candidate | **Eliminated** — AD-01G G-4, AD-01H H-10 and AD-01I I-9 rejected the entity three times; §12.6 re-tests it a fourth time against the commercial-identity questions and it still stands. |
> | The **work record** candidate | **Eliminated on capability grounds** — AD-01H §12 row 1 (Example 4), confirmed. |
> | The **Person** candidate | **Eliminated for the attribution anchor on capability and governance grounds** — J-22, J-23, J-24. **M-5's Person candidate for the uniqueness boundary is untouched and open.** |
> | The **Inquiry** candidate | **RECOMMENDED for the claim anchor** (§4.1–§4.5). **Recommended, not approved.** |
> | **Commission *entitlement*** | **Shaped, not decided** — J-26 separates the two anchors and states the ordering constraint. **The entitlement rule itself is M-9's and is not proposed, implied or formulated anywhere.** |
> | **Reach of a claim across engagements** | **`BUSINESS DECISION REQUIRED` — T-4 / T-5 / AA-3.** §5. |
>
> **V-16 is therefore NOT declared resolved by this document.** What this document supplies is the
> **commercial-identity determination V-16 depends on**, plus the elimination of two of its four
> candidates. **V-16 becomes a commercial-policy sitting rather than an architecture sitting**, which is
> the basis of §16's recommendation.

### 4.7 AD-01F's V-15 as registered — answered

> **⟦ARCHITECT RECOMMENDATION — J-28⟧** **AD-01F V-15: *"Does a re-inquiry arriving through a different
> source, campaign or CP constitute a new attributable opportunity?"***
>
> **Answer, in two parts, because the question has a forced half and an open half and answering it as
> one question is what has made it look intractable:**
>
> 1. **Structurally — YES, and it is forced, not chosen.** The re-inquiry is a new Inquiry (**J-2**).
>    Every Inquiry carries its own source, campaign, channel and claim set (**AD-01G §5.1**, settled by
>    evidence; **AD-01C D5**). **Therefore the new producer's claim attaches to the new Inquiry, and
>    that Inquiry is a new attributable unit.** No decision is required for this half and none is taken.
> 2. **Commercially — the remaining question is *"does the PRIOR producer retain a competing claim over
>    the new Inquiry"*, and that question IS AD-01C T-4.** Not *"related to"* T-4, not *"to be answered
>    in the same sitting as"* T-4 — **identical to it**, once the anchor is at the Inquiry.
>
> **⟦ARCHITECT ANALYSIS⟧ This is a stronger statement than AD-01F §16.2 and AD-01E §3.5 made.** Both
> directed that V-15 and T-4 *"be answered in one sitting."* **Under the Inquiry anchor, V-15's residue
> is not merely coupled to T-4 — it is T-4.** That collapses two register entries into one question,
> which is a genuine simplification of the open-item set and should be recorded as such by whoever
> maintains the register. **This document does not renumber or retire either entry.**

---

## 5. T-4 interaction

> **⟦ARCHITECT ANALYSIS⟧ AD-01C §6 registers T-4 as: *"CP registration reach after a lost episode. Does
> a CP's claim on a Dumped lead reach a later, separately-sourced episode for the same Person? Spec
> silent (§11, §32, §40)."* AD-01C §5's Rule-1 register confirms: *"Temporal reach of a CP attribution
> claim across a closure (T-4) or across a completed purchase (T-5) — **Never addressed**."* This
> section resolves T-4's **architectural** half in full and states its **commercial** half as
> `BUSINESS DECISION REQUIRED`, with the shape any answer must take.**

### 5.1 T-4's subject has moved, and AD-01C must be read accordingly

> **⟦ARCHITECT ANALYSIS⟧ J-29** — T-4 is phrased in the vocabulary of **AD-01C's Q5-B**, in which a
> re-engagement produced a **successor Lead** and *"episode"* and *"lead"* were interchangeable. Under
> **AD-01G G-1/G-2** and **AD-01H H-4** that vocabulary no longer describes the model: a re-engagement
> produces a **successor Inquiry on the same work record**, not a successor Lead.
>
> **T-4's subject therefore relocates from Lead→Lead to Inquiry→Inquiry.** **AD-01C is NOT edited.**
> The relocation is named as **A-3** ([§15](#15-impact-on-ad-01-through-ad-01i)) and carries with it
> **T-1** (must duplicate/clash detection recognise a declared successor?), **T-3** (successor linkage
> vs merge linkage) and **T-11** (successor chain depth and transitive reporting) — **all three of which
> are stated at the Lead level in AD-01C and all three of which remain OPEN and are NOT resolved here.**

### 5.2 The terminal/commercial boundary — the finding T-4 actually needs

> **⟦ARCHITECT ANALYSIS⟧ J-30 — the boundary T-4 asks a claim to cross exists at exactly one level in
> the whole model, and naming that level is what makes T-4 a well-posed question.**
>
> | Object | Does it have a commercial terminal boundary? | Basis |
> |---|---|---|
> | **Person** | **No.** A person's relationship with a builder has no stated end | §07; Rule 1 silence |
> | **Work record** | **No.** *"Terminality — has none"* — **and AD-01I I-10 established that this is a recorded SILENCE, not a proved negative**, with **Z-2** open | AD-01G §4.1; AD-01I I-10 |
> | **Inquiry** | **YES — and it is the only one.** Terminal exactly once, monotone, reason preserved | AD-01H **H-4**, **H-6**; AD-01A §8.3; **R6** |
> | **Booking** | **No — it has a *transaction* lifecycle, which is a different kind of boundary.** A cancelled Booking ends a transaction; it does not end a commercial opportunity, and **under Q6 it does not un-convert the Inquiry** | §20, §21, §35; **P-16** |
>
> **The commercial terminal boundary exists at the Inquiry and nowhere else. T-4 is therefore precisely
> the question: *may an attribution claim cross an Inquiry's terminal boundary?* — and that is a
> question with a single, well-defined subject for the first time since AD-01C raised it.**

### 5.3 What the architecture settles about T-4, and what it cannot

> **⟦ARCHITECT ANALYSIS⟧ J-31 — four constraints that any answer to T-4 must satisfy. These are
> architecture, they are derived from approved and recorded positions, and they hold under every
> possible answer.**
>
> | # | Constraint | Why it is forced |
> |---|---|---|
> | **C-I** | **T-4's answer must be a function of the prior closure's classification, not a single global yes/no.** | **J-9**: no uniform answer is defensible across Case 4 and Case 5. The required input is **Q7 Dimension A** (and optionally Dimension C), **already approved**. Values are **N-4** — open. |
> | **C-II** | **A reach rule may only assign credit for a FUTURE conversion. It may never reassign credit for a past one.** | **P-16 (Q6)**; **AD-01F §12.4**; **R6**. A closed period's recorded conversion and its recorded producer are historical facts. **Q6 is protected by this constraint, not tested by it.** |
> | **C-III** | **If reach is granted at all, the model must be able to name WHICH prior Inquiry a new one succeeds.** | **J-12 / AA-4.** A record with several prior closures across several projects has several candidate predecessors with several producers. **§40 must authorize against a determinate claim, not an inference.** |
> | **C-IV** | **Claim resolution must complete before the converting Booking reaches its §32 eligibility milestone.** | **J-26.** **§40**'s server-side authorization has nothing valid to evaluate otherwise. A reach rule *increases* the number of claims to adjudicate and therefore tightens this constraint rather than relaxing it. |

> **⟦BUSINESS DECISION REQUIRED — T-4, restated at its correct subject and NOT answered⟧**
>
> **Does an attribution claim recorded on a terminally closed Inquiry reach a later Inquiry by the same
> Person — and if so: only on the same project, or across projects? Bounded by elapsed time, by the
> closure's validity class, by both, or unbounded? Shared with the new producer as a §11 clash, or
> superseded by them?**
>
> **This is NOT answered here, and it is not the architect's to answer.** It is a **commercial policy
> about money** — in substance a statement about what a builder owes a channel partner for an
> introduction that did not convert at the time. **§11, §32, §40, §41 and §33 are silent** (AD-01C §5,
> confirmed by this pass). **P-20** makes inventing it a **MUST NEVER DO WITHOUT EXPLICIT
> AUTHORIZATION**. **No branch is recommended, preferred or ranked anywhere in this document.**
>
> **No new number is minted: T-4 already owns this question**, per AD-01I §13.2's discipline. What this
> document adds is its subject (J-29, J-30) and its four constraints (J-31).

### 5.4 T-4 and Q7 — a confirmation from an unexpected direction

> **⟦ARCHITECT ANALYSIS⟧ J-32** — **C-I** means the **approved** Q7 framework is the only available
> input to a defensible T-4 rule. **Q7 was approved to make loss analysis defensible (AD-01A §8.3); it
> turns out to be load-bearing on commission attribution as well.** **Q7 is CONFIRMED and NOT amended.
> No dimension is added, no value is proposed, and AD-01I's Z-5 (whether a fourth *closure-scope*
> dimension is required) is NOT resolved, narrowed or branched here** — though it is recorded that
> **Z-5's subject and C-I's input are closely related**, since *"does this closure speak about this
> engagement or this relationship"* is precisely the distinction a reach rule must make.

### 5.5 T-4, T-5 and the case neither of them covers

> **⟦ARCHITECT ANALYSIS⟧ J-33 — T-4 and T-5 are one predicate with the prior Inquiry's terminal outcome
> as a parameter, and answering one without the other decides the other by default.**
>
> - **T-4**: reach across a closure whose outcome was **closed-with-reason**.
> - **T-5**: reach across a closure whose outcome was **converted**.
>
> Under the Inquiry anchor both ask *"may a claim cross an Inquiry's terminal boundary?"*, differing only
> in which terminal outcome was recorded — **exactly the parameterisation C-I already requires.**
> **AD-01C §3.5 and AD-01H §14 both directed that they be answered together. This document supplies the
> reason they must be: they are the same rule.** **Neither is answered here.**
>
> **⟦BUSINESS DECISION REQUIRED — AA-3⟧ Neither T-4 nor T-5 covers the cancellation path, and it is
> money-bearing.** After a Booking is **cancelled** (**§35**, with **§33** clawback possibly applied and
> **P-16** keeping the Inquiry's Success historically true), the client re-engages and books again —
> possibly through a different producer. The prior Inquiry's outcome was *converted*, so it is not T-4's
> case; the purchase did not complete, so it is not T-5's case either. **Full statement in
> [§14](#14-business-decisions-required). No branch is preferred.**

### 5.6 T-4's interaction with each thing the task names

| Interacts with | Interaction, stated exactly | Label |
|---|---|---|
| **Inquiry lifecycle** | T-4 asks a claim to cross the **only** commercial terminal boundary in the model (**J-30**). The lifecycle is unchanged by any answer — **a reach rule adds a claim to a new Inquiry's claim set; it never alters a closed Inquiry** | ⟦ARCHITECT ANALYSIS⟧ |
| **Dump** | The closure's **classification** is T-4's required input (**C-I**), which puts **N-4** on T-4's critical path. **AD-01I's Dump conclusion is not reopened; only the commercial-continuity consequence is drawn** | ⟦ARCHITECT ANALYSIS⟧ |
| **Success** | **T-5's case, not T-4's** (**J-33**). **Q6 is protected by C-II** and is not reopened, narrowed or tested | ⟦ARCHITECT ANALYSIS⟧ |
| **Booking** | T-4 determines **who** is entitled; the Booking determines **whether and when** (**J-26**). A reach rule tightens **C-IV**'s timing constraint. **§33 clawback follows the Booking and is untouched** | ⟦ARCHITECT ANALYSIS⟧ |
| **Re-engagement** | T-4 is **the** open question inside re-engagement. Everything else about re-engagement is forced (**J-2**, **J-17**, **J-19**) | ⟦ARCHITECT ANALYSIS⟧ |
| **Conversion history** | **C-II**: conversion history is **never** rewritten. A reach rule assigns credit for a new conversion in the current period and touches no closed period | ⟦ARCHITECT ANALYSIS⟧ |

---

## 6. Inquiry lifecycle / commercial semantics

> **⟦ARCHITECT RECOMMENDATION — J-34, the recommended definition⟧** *(RECOMMENDED, SUBJECT TO THE
> PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88
> MUST-ASK: canonical entities, relationships, source-of-truth rules.)*
>
> **An Inquiry is the commercial engagement unit: a dated, sourced, project-contexted expression of
> interest by one Person, originated by a customer-generated commercial event, carrying its own
> attribution claim set and its own terminal commercial outcome exactly once.**
>
> **This extends AD-01G §5's definition in exactly two respects and changes nothing else:**
>
> | Added clause | Why it is added | Source |
> |---|---|---|
> | *"originated by a **customer-generated commercial event**"* | Makes **AD-01I I-7** definitional rather than policed. A management act has no way to produce one, which is what makes **J-16**'s guarantee structural | AD-01I **I-6**, **I-7** |
> | *"carrying its own attribution claim **set**"* | Makes explicit that an Inquiry may carry **several competing claims** — which is what §11 clash *is* | **P-8**; AD-01C **D6** |

### 6.1 The Inquiry's commercial life, stated completely

| Phase | What happens | What is forbidden |
|---|---|---|
| **Origination** | A customer-generated expression of interest arrives that no non-terminal Inquiry covers (**J-2**). The Inquiry takes its date, project, source, campaign, channel and initial claim set | It cannot be originated by a management act (**J-16**); it cannot be back-dated into a closed period (**C-II**) |
| **Live** | Worked **through the work record** — one handler, one timeline, one next-action commitment (**T1**, **G-1**). Claims may be added and adjudicated (**§11**). The requirement profile may evolve (**AA-1**/V-3 cl. 2) | It acquires **no** handler, **no** queue row, **no** timeline of its own (**AD-01G §5.2**, confirmed) |
| **Terminal — converted** | References a **Booking** that reached §20 Stage 3 (**Q4**, **H-8**) | The Booking is never absorbed; the Inquiry never carries booking states (AD-01A §8.2) |
| **Terminal — closed** | Carries a reason classified on **Q7's three approved dimensions**, preserved permanently | The reason is never overwritten (**AD-01A §8.3**, **R6**) |
| **After terminal** | **Nothing.** It is read, reported on and referenced | **No reopening, no continuation, no second outcome, no backward edge, and no re-disposition — ever** (**H-4**) |

### 6.2 Three properties of this lifecycle that the rest of the document depends on

> **⟦ARCHITECT ANALYSIS⟧**
>
> 1. **Exactly one origination and exactly one outcome per Inquiry.** This is what makes a conversion
>    denominator well-defined (**J-19**) and what makes the Origination Rule threshold-free (**J-2**).
> 2. **The Inquiry is the only object in the chain with a commercial terminal boundary** (**J-30**),
>    which is what makes T-4 well-posed.
> 3. **Everything commercial hangs off an Inquiry**, which is what makes it structurally impossible for
>    a management act to create a commercial fact (**J-16**).

---

## 7. Lead vs Inquiry boundary

> **⟦ARCHITECT RECOMMENDATION — J-35, the boundary test⟧** **A fact belongs to the Inquiry if and only
> if it can legitimately hold different values for two engagements of the same client *at the same
> instant*. Otherwise it belongs to the work record.**
>
> **This is AD-01 §3's own test, applied to the Lead/Inquiry boundary instead of to a state axis, and it
> is offered because five documents have decided this boundary fact-by-fact without a stated rule.** It
> reproduces every placement AD-01G, AD-01H and AD-01I already reached — which is the evidence that it
> is a description of the decisions rather than a new constraint on them.

| Fact | Can it differ across two live engagements of one client? | Owner | Status |
|---|---|---|---|
| Project · source · campaign · channel · inquiry date | **Yes** | **Inquiry** | **CONFIRMED** (AD-01G §5.1) |
| Attribution claim set · clash adjudication | **Yes** | **Inquiry** | **RECOMMENDED** (§4) |
| Commercial disposition + preserved reason | **Yes** (AD-01H Example 3) | **Inquiry** | **CONFIRMED** (H-4, H-6) |
| Conversion · Booking reference | **Yes** (AD-01H Example 4) | **Inquiry** | **CONFIRMED** (H-8) |
| Person identity · contact details | **No** | **Person** | **CONFIRMED** (§07) |
| Current handler · assignment history · custody intervals | **No** — one handler works the whole client (**T1**) | **Work record** / Assignment Log | **CONFIRMED** (AD-01G §4.1, G-9) |
| Activity timeline | **No** — one call serves all interests (**T1**) | **Work record**, each activity referencing the Inquiry it concerns | **CONFIRMED** (H-9); **W-1** open |
| Next-action commitment | **Contested** — this is exactly **Y-2**, conditional on **Y-1** | Work record, **conditionally** (AD-01H **H-12**) | **OPEN — Y-1/Y-2, not resolved** |
| Queue-exit work condition | **No** — it is a condition of the record × custody interval | **Work record × custody interval**, derived | **CONFIRMED** (AD-01I I-1 C2) |
| Work mandate / management intent | **No** — it is a property of a management act | **Assignment Log** | **CONFIRMED** (AD-01I I-8) |
| Requirement profile (unit type, budget, configuration) | **Undetermined** | **Undetermined** | **OPEN — V-3 clause 2 (A-5); AA-1** |
| Relationship-level source ("how this client first came to us") | **No** — but see J-36 | **Nowhere — derived** | **RECOMMENDED** (J-36) |

> **⟦ARCHITECT RECOMMENDATION — J-36⟧ There should be no record-level source, campaign or attribution
> fact.** Once commercial attribution belongs to the Inquiry, a record-level source has exactly one
> honest reading — *"how this client relationship first came to us"* — and that reading is **fully
> derivable from the earliest Inquiry**. Persisting it would create a second source of truth for a fact
> the Inquiry history already carries, which is **the identical objection AD-01A §3.6/§5.2, AD-01G G-9
> and AD-01H §4.2 have each sustained.** **Consistent with AD-01G G-8's read-time projection
> principle.** Three prohibitions follow and each is load-bearing: a derived first-source **must not**
> be a claim, **must not** be an input to commission, and **must not** appear in any source-performance
> report — that last would double-count the same client against two sources. **The legacy-import
> tension** (an imported record that carries only a record-level source) is **AD-01B §7.2's**, third
> instance, and **N-4**'s for values; **no new number is minted and neither is resolved.**

---

## 8. Re-engagement semantics

> **⟦ARCHITECT RECOMMENDATION — J-37⟧ Six named acts. The business currently has one word for several of
> them, and AD-01F §12.4 established that they must be distinguishable in authorization and in
> reporting. This is the architectural vocabulary, offered for approval. It is NOT a UI label set and
> proposes no user-facing wording.**

| # | Act | Customer event? | New Inquiry? | Capture? | New claim set? | Restates a closed period? |
|---|---|---|---|---|---|---|
| **1** | **Continuation** — activity on a live Inquiry | Yes | **No** | **No** | No | **No** |
| **2** | **Re-engagement** — interest arrives with no live Inquiry covering it, on a record with ≥1 prior terminal Inquiry | Yes | **Yes** | **Yes** (J-19) | **Yes** | **No — the prior loss stands** |
| **3** | **Additional interest** — interest on a project not covered, while other Inquiries are live | Yes | **Yes** *(liveness → Y-1)* | **Yes** | **Yes** | **No** |
| **4** | **Return after conversion** — re-engagement whose prior terminal outcome was Success | Yes | **Yes — required** (Q6-S4) | **Yes** | **Yes** *(reach → T-5)* | **No — Q6 protects the prior Success** |
| **5** | **Work re-attempt** — manager redistribution, no customer event | **No** | **No — never** | **No** | **No** | **No** |
| **6** | **Correction** — a prior record was wrong | n/a | **No** | **No** | No | **Yes — deliberately** (AD-01C Q6-S2/S3) |

> **⟦ARCHITECT ANALYSIS⟧ Read the last column. Four acts must never restate a closed period, one cannot
> because it creates nothing commercial, and exactly one exists in order to restate it. AD-01F §12.4
> required three acts to be distinguishable; there are six, and the distinctions are now carried by what
> each act produces rather than by a rule about what each act may do.**

> **⟦ARCHITECT RECOMMENDATION — J-38⟧ One prohibition, stated explicitly because it is the most
> expensive confusion available and the two acts look alike from the outside.** **A re-engagement may
> never be used as a correction, and a correction may never be recorded as a re-engagement.** Opening a
> new Inquiry never corrects a prior Success or a prior closure; correcting a prior Success never opens
> an Inquiry. **AD-01C §3.4's principle is CONFIRMED at the Inquiry level and Q6 is not reopened.** The
> correction mechanism, its authorization and its reason vocabulary remain **AD-01C T-6, T-7, T-8** —
> **none of which is resolved here.**

---

## 9. Attribution / CP implications

> **⟦ARCHITECT ANALYSIS⟧ Every question the task poses, answered directly. No brokerage or commission
> formula is defined anywhere in this section (P-20; the task's own constraint).**

### 9.1 Can different Inquiries under the same Lead have different CP sources / attribution?

> **⟦ARCHITECT ANALYSIS⟧ J-39 — Yes, and this is not a choice; it is a description of what already
> happens.** **AD-01C D5** established that a record-level source cannot honestly record a second
> engagement's channel; **AD-01H §12 row 7** confirmed that *"source and campaign analysis is only
> honest at the inquiry level"*; **AD-01G §5.1** marks per-Inquiry source *"Settled by evidence.
> Strong."* **An architecture that could not represent this would be unable to record a fact the
> business observes.**

### 9.2 Can one Lead have Project A attributed to CP A and Project B attributed to CP B?

> **⟦ARCHITECT ANALYSIS⟧ J-40 — Yes, and — critically — this is NOT a §11 clash.** It is exactly
> **AD-01C D6**'s *"two CPs, two episodes"* case, which D6 identified as the thing a record-level anchor
> *"structurally cannot distinguish"* from a genuine clash. **Under the Inquiry anchor the distinction
> is trivial and requires no control: a clash is two claims on ONE Inquiry; two producers on two
> Inquiries is two ordinary attributions.**
>
> **The financial consequence D6 priced is discharged.** Under a coarser anchor, **§11**'s adjudication
> — which **P-8** reserves to *authorized leadership* — would be invoked on a manufactured conflict, and
> **§32/§40** commission could flow to a producer who did not produce the converting engagement.
> **Neither is possible under the recommended anchor.** **This is the single largest financial defect
> the AD-01F/G/H/I line has been carrying, and §4's determination closes it — subject to approval.**

### 9.3 Can re-engagement change attribution?

> **⟦ARCHITECT ANALYSIS⟧ J-41 — Structurally yes; commercially it depends on T-4, and the two halves
> must not be conflated.** A re-engagement opens a new Inquiry with its own claim set, so the new
> producer's claim attaches (**J-28** part 1, forced). **Whether the prior producer also has a claim on
> that new Inquiry is T-4 — `BUSINESS DECISION REQUIRED`, not answered.**
>
> **What is settled either way:** the re-engagement **never** alters the *prior* Inquiry's claims,
> adjudication or recorded outcome (**C-II**, **R6**).

### 9.4 Can a manager redistribution change attribution?

> **⟦ARCHITECT ANALYSIS⟧ J-42 — No. Never. And under this document it becomes structurally impossible
> rather than merely forbidden.** **AD-01I I-6** already forbade it, on the ground that a fabricated
> Inquiry *"would create an attribution claim out of a management decision, with §11/§32/§40
> exposure."* **AD-01I's finding is CONFIRMED and reinforced from a new direction:** attribution
> attaches to Inquiries (§4); a redistribution creates no Inquiry (**I-6**); **therefore a
> redistribution has nowhere to put a claim.** The prohibition no longer needs enforcing.

### 9.5 Can a new Inquiry create a new attribution claim?

> **⟦ARCHITECT ANALYSIS⟧ J-43 — Yes. That is what an Inquiry's claim set is for**, and it is the
> mechanism by which **§11**'s *"record **each** attribution claim, preserve history"* is satisfied
> without a record-level claim pile that cannot say which claim belongs to which engagement (**J-22**).

### 9.6 Does historical Lead-level attribution remain meaningful?

> **⟦ARCHITECT ANALYSIS⟧ J-44 — It ceases to be a *commercial* fact and retains exactly one honest
> reading, which should be derived rather than stored.** See **J-36**: a derived first-source is
> relationship provenance, **not a claim, not a commission input, and not a source-performance input**.
> **Where a legacy import supplies only a record-level source, that is AD-01B §7.2's import tension —
> named, not resolved, and no new number minted.**

### 9.7 What this section does not do

> **⟦ARCHITECT ANALYSIS⟧** It defines **no** brokerage rate, commission formula, eligibility milestone
> value, clash-resolution procedure, CP scorecard or evaluation product. **AD-01A §3.3 declined to
> authorise a CP scorecard on the ground that §39 *"permits a CP to see attribution information … and
> says nothing about scoring CPs"*; that holds unchanged here.** **M-9 owns the commission model and is
> not resolved, narrowed or pre-empted.**

---

## 10. Dump / Success / Booking implications

### 10.1 Dump and commercial continuity

> **⟦ARCHITECT ANALYSIS⟧ AD-01I's Dump model (I-1 … I-9) is fixed input and is NOT re-litigated. Only
> the commercial-continuity consequence is drawn, which is what this task authorises.**
>
> **J-45 — a Dumped Inquiry's relationship to a subsequent Inquiry is: same work record, adjacent in
> time, unrelated in commercial identity, and — if and only if T-4 grants reach — related by a named
> succession the model does not currently hold (AA-4).**
>
> | AD-01I position | Commercial-continuity consequence | Label |
> |---|---|---|
> | **I-1 C1** — commercial disposition lives on the Inquiry, persisted and reasoned | **This is what makes the closure survive as T-4's required input (C-I).** Had the closure been a record-level condition, its classification would be unavailable per engagement and T-4 would be unanswerable in principle | ⟦ARCHITECT ANALYSIS⟧ |
> | **I-1 C2** — queue exit is a work condition carrying no commercial reason | **Therefore a queue exit can never affect commercial continuity at all**, and **AD-01I §10.2 constraint 1** (queue exit never enters loss analysis) is reinforced: it has nothing to contribute | ⟦ARCHITECT ANALYSIS⟧ |
> | **I-5** — redistribution never changes an Inquiry's disposition | **CONFIRMED.** A redistributed closed Inquiry stays closed, so the continuity question for the *next* customer-generated Inquiry is identical whether or not a re-attempt occurred | ⟦ARCHITECT ANALYSIS⟧ |
> | **I-7** — two activation routes, never derived from each other | **CONFIRMED and made structural** (J-16) | ⟦ARCHITECT ANALYSIS⟧ |
> | **Z-2** — does validity class constrain redistribution eligibility? | **NOT resolved and NOT narrowed.** Recorded only: **Z-2 and C-I need the same input** (the closure's validity class), so answering one supplies the input the other needs | ⟦ARCHITECT ANALYSIS⟧ |
>
> **The Lead does not become permanently dead because an Inquiry is dumped** — **AD-01I's direction,
> treated as fixed, and independently required by J-2**: the work record must remain able to carry the
> next Inquiry.

### 10.2 Success and later Inquiries

> **⟦ARCHITECT ANALYSIS⟧ J-46 — a Success on Inquiry A has NO effect on how Inquiry B is individuated,
> and that is a property worth naming rather than an omission.** Under **J-2** the Origination Rule
> never reads a prior Inquiry's outcome — only whether a non-terminal Inquiry covers the arriving
> interest. **Converted and closed are both terminal, and both are equally uncoverable.** This is why
> Case 6's two routes converge (**J-13**) and why there is one door rather than two (**AD-01C §3.5**'s
> own consistency argument).
>
> **What Success does affect, none of it resolved here:** **Y-4** (queue behaviour of a record holding a
> Success — **open and blocking**); **T-5** (claim reach across a conversion — **open**); the **§06
> Customer context**; and a legitimate **returning-customer** reporting segment (§11).

> **⟦ARCHITECT ANALYSIS⟧ Q6 is preserved in full and is not tested by anything above.** A valid Success
> remains historically true regardless of the downstream Booking's fate; a downstream cancellation never
> rewrites historical conversion; an incorrectly recorded Success is corrected through the audited
> correction mechanism and never through ordinary reversal; and **J-38** adds that no re-engagement
> mechanism may stand in for that correction.

### 10.3 Booking

> **⟦ARCHITECT ANALYSIS⟧ J-47 — the Booking owns transaction lifecycle, inventory and payment
> consequences, and touches commercial identity at exactly two points and no others.**
>
> 1. **It is what a converted Inquiry references** (**H-8**), and it is **never absorbed** into any
>    lifecycle (AD-01A §8.2).
> 2. **It carries commission eligibility's milestone half** (**J-26**, **§32**, **§40**), and
>    **§33** clawback follows it — with **P-13**'s warning that unit transfers are not cancellations.
>
> **A cancelled Booking does not reopen its Inquiry, does not create an Inquiry, and does not
> un-convert.** If the client re-engages afterwards, **J-2 applies with no exception: a new Inquiry.**
>
> **⟦ARCHITECT ANALYSIS⟧ This is the case where the intuition "surely this is the same opportunity" is
> strongest, and the cost is priced rather than hidden.** The customer wanted a unit, the sale unwound,
> the customer came back. Calling that a new Inquiry is counter-intuitive. **It is nonetheless forced**:
> the alternative requires either reopening a terminal Inquiry (**H-4**) or un-converting a valid
> Success (**Q6**), and both are closed. **The intuition is real and it is about attribution, not
> identity — which is exactly why it is registered as AA-3 rather than argued away.**

---

## 11. Reporting implications

> **⟦ARCHITECT ANALYSIS⟧ Business facts only. No SQL, no query, no dashboard, no chart, no metric
> presented as approved. Consolidated §25's standard applies: metrics must rest on durable business
> facts. AD-01F §13's fourteen rows, AD-01G §12's ten, AD-01H §10's additions and AD-01I §10's thirteen
> are UPHELD and not restated. This section states only what the V-14 / V-18 / V-15 / T-4 answers add.**

### 11.1 The eleven reporting needs the task names — must BMexa report them separately?

| # | Reporting need | Separate report required? | Keyed at | Note |
|---|---|---|---|---|
| **1** | **Lead count** | **Yes** | Work record | *"How many client relationships do we hold."* **Which of rows 1–3 the word *leads* means is Y-5 — open.** |
| **2** | **Inquiry count** | **Yes** | Inquiry | *"How many commercial engagements exist."* **Never equal to row 1** for any client with more than one interest |
| **3** | **Project-interest count** | **Yes if Y-3 says aggregate; otherwise identical to row 2** | Inquiry or project-interest aggregate | **Y-3 — not resolved.** **AA-1** also affects this count (same-project, different configuration) |
| **4** | **Converted Inquiries** | **Yes** | Inquiry → Booking | The conversion numerator. **V-17's forced direction; not resolved** |
| **5** | **Successful Leads / clients** | **Yes — and it is a DIFFERENT number from row 4** | Derived, Person/work-record level | *"Has converted"* is a derived customer-level condition (**H-8**). One client with three conversions is **three** in row 4 and **one** here. **Merging them was AD-01 §9.1's denominator contamination** |
| **6** | **Project conversion** | **Yes** | Inquiry, grouped by project | See **J-48** |
| **7** | **Source conversion** | **Yes** | Inquiry, grouped by source | See **J-48** |
| **8** | **CP conversion** | **Yes** | Inquiry, grouped by **resolved** claim | Grouped by the *resolved* claim, never by a raw claim — otherwise a contested engagement is counted for every claimant. **§11**; **U-17** open |
| **9** | **Re-engagement** | **Yes — and it is TWO facts** | (a) Inquiry; (b) Assignment Log | **AD-01I §10.1 row 7 CONFIRMED**: customer-generated vs management-generated must never be one number. **J-50** adds a constraint |
| **10** | **Redistributions** | **Yes** | Assignment Log | **AD-01I §10.1 rows 5–6, CONFIRMED, not restated** |
| **11** | **Manager work mandates** | **Yes** | Assignment Log × custody interval | **AD-01I §10.1 rows 12–13, CONFIRMED**; obstructed by **Z-4**, unresolved |

### 11.2 Three constraints this document adds

> **⟦ARCHITECT RECOMMENDATION — J-48⟧ Rows 6, 7 and 8 must share ONE denominator definition, and it is
> *Inquiries originated in the period*, which under J-19 includes re-engagement Captures.** If project
> conversion, source conversion and CP conversion each pick their own denominator, **they will disagree
> permanently and no reconciliation will be possible after the fact.** **One denominator, three
> groupings.** *(The groupings themselves are ordinary; the denominator is the thing that must be
> decided once.)*

> **⟦ARCHITECT RECOMMENDATION — J-49⟧ A Capture count and a new-client count are different numbers, and
> reporting only one makes re-engagement invisible in exactly the direction management cares about.**
> Row 2's period figure counts engagements; row 1's counts relationships. **Whether "new leads in the
> period" in management reporting means Captures, first-time Captures, or new work records is AA-5, and
> it is currently being decided by whoever writes the first report.** Coupled to **Y-5**.

> **⟦ARCHITECT ANALYSIS⟧ J-50 — re-engagement reporting has a weak form available now and a strong form
> conditional on T-4.** The **weak** form — *"this Capture opened on a record that already had ≥1
> terminal Inquiry"* — is **derivable today from facts already required** and is sufficient for every
> count in row 9. The **strong** form — *"this Inquiry succeeds THAT specific prior Inquiry"* — requires
> **AA-4**'s reference and is needed only if T-4 grants reach. **Recorded so that row 9 is not assumed
> to need the reference when it does not.**

### 11.3 Constraints inherited unchanged

> **⟦ARCHITECT ANALYSIS⟧** **Reports branch on semantics, never on tenant-renameable labels or codes**
> (**R4**; AD-01 §9.7; AD-01F §13.2 item 2; AD-01I §10.2 item 3). **Queue exit never enters loss
> analysis** (AD-01I §10.2 item 1). **Redistribution never creates a Capture** (AD-01I §10.2 item 2 —
> and under **J-16** it structurally cannot). **Nothing above is promised as a chart**: AD-01 §9.6 is
> unchanged and widened by nothing here, **no CP scorecard or producer-evaluation product is
> authorised** (AD-01A §3.3), and **no reason-coded reporting is defensible until N-4 supplies values.**

---

## 12. Alternatives

> **⟦ARCHITECT ANALYSIS⟧ Six candidates for the commercial/attribution anchor, each tested against the
> same three cases: AD-01H Example 4 (two conversions, one client), AD-01C D6 (two producers, two
> engagements), and V-14 Case 4 (a claim on an engagement that never existed).**

### 12.1 Alternative 1 — the Inquiry *(recommended)*

Passes all three. Example 4: two Inquiries, two claim sets, two Bookings, each entitlement determinate.
D6: two producers on two Inquiries is not a clash and needs no adjudication. Case 4: the invalid closure
is classified on the Inquiry, so **C-I**'s input exists. **Costs: three, priced at §4.5 — AA-2's
pre-project registration, AA-4's conditional reference, and a larger §11 adjudication surface.**

### 12.2 Alternative 2 — the Person / relationship

**Fails Example 4** (cannot say which claim earned which Booking — **J-22**). **Fails D6's governance
test** (silently grants unlimited reach, answering T-4 by accident — **J-24**, which is **AD-01C's own
argument**). Any repair reconstructs the Inquiry inside it. **Rejected.** *(M-5's Person candidate for
the uniqueness boundary is a different question and is untouched.)*

### 12.3 Alternative 3 — the work record

**Fails Example 4 identically** — the work record is Person-bounded (**G-1**), so it fails wherever the
Person fails. **Already eliminated by AD-01H §12 row 1; restated here for completeness only. Rejected.**

### 12.4 Alternative 4 — the Booking

**Fails at capture time**: most claims never reach a Booking, and **§11**/**§12** run the clash control
on arrival, long before Stage 3 (**J-25**). **Rejected as the attribution anchor; adopted as the
eligibility anchor** (**J-26**).

### 12.5 Alternative 5 — a new *Commercial Opportunity* entity

> **⟦ARCHITECT ANALYSIS⟧ Tested property-by-property, using the method AD-01G §4.3, AD-01H §7.4 and
> AD-01I §7.4 each applied to the episode. J-51 — every property is already the Inquiry's, and the one
> residual job is not asked for.**
>
> | Property an "opportunity" would need | Where it already sits | Does the entity add anything? |
> |---|---|---|
> | Project · source · campaign · date | **Inquiry** (settled by evidence) | No |
> | Attribution claim set · clash | **Inquiry** (§4) | No |
> | Commercial outcome, terminal once | **Inquiry** (**H-4**) | No |
> | Booking reference | **Inquiry** (**H-8**) | No |
> | Handler · timeline · next action | **Work record** (**T1**) — and giving them to an opportunity **rebuilds Model A** and inherits every T1 failure | No — actively harmful |
> | Grouping several Inquiries into one pursued opportunity | **Nowhere — and nothing asks for it.** **P-4** asks only that the new inquiry event be recorded. If **T-4** ever requires it, **AD-01H H-10** already supplies the mechanism: an **appended reference**, not an entity (**AA-4**) | No |
>
> **Rejected. And the naming point matters: "commercial opportunity" is not a thing the model lacks —
> it is a *phrase* that bundles three questions with three owners (J-3). Creating an entity to hold a
> compound question would persist the confusion instead of resolving it.**

### 12.6 Alternative 6 — AD-01E's Sales Episode

> **⟦ARCHITECT ANALYSIS⟧ J-52 — re-tested a fourth time, against the commercial-identity questions
> specifically, and the rejection STANDS with its conditionality unchanged.** Every property **AD-01E
> §11 R2** required — own lifecycle value, own source, own terminal disposition and preserved reason,
> own claim set, own activity association — is carried by the **Inquiry**, and this document adds a
> fifth: **own origination event** (**J-34**). **The conditionality stated by AD-01G G-4 and preserved
> by AD-01H H-10 and AD-01I I-9 is preserved here unchanged: if the owner resolves V-1 toward Model A,
> the rejection does not stand. It is not made unconditional.**

### 12.7 Comparison

| | Ex. 4: two conversions | D6: two producers, two engagements | Case 4: invalid prior closure | Leaves T-4 answerable? | New entity? |
|---|---|---|---|---|---|
| **1 — Inquiry** | **Pass** | **Pass** | **Pass** | **Yes — in both directions** | **No** |
| **2 — Person** | Fail | Fail | Fail | **No — answers it by accident** | No |
| **3 — Work record** | Fail | Fail | Fail | **No** | No |
| **4 — Booking** | Pass | Pass | **Fail** (no Booking exists) | Not applicable | No |
| **5 — Opportunity entity** | Pass | Pass | Pass | Yes | **Yes — and it buys nothing** |
| **6 — Sales Episode** | Pass | Pass | Pass | Yes | **Yes — and it is the Inquiry with a different name** |

### 12.8 The candidate architecture test — Person → Lead → Inquiry → Booking

> **⟦ARCHITECT ANALYSIS⟧ J-53 — the chain models every scenario in this document, with one correction
> to how it is stated and three residues, none of which is an entity gap.**
>
> **The correction, and it matters:** **the chain as posed is not the whole model, and reading it as
> such would lose AD-01I's answer.** Two canonical objects are missing from it — the **Assignment Log**
> (§06), which carries custody, the history decision, provenance and (**AD-01I I-8**) the management
> intent; and the **Activity/timeline**, which hangs off the work record and references the Inquiry it
> concerns (**H-9**). **The work mandate that makes AD-01I's redistribution representable lives on the
> Assignment Log, not on the chain.** The chain is correct about **ownership of commercial facts**; it
> is incomplete as an inventory of the model.
>
> | Ownership as the task states it | Verdict |
> |---|---|
> | **Lead** owns identity/client-record/work-assignment/timeline | **CONFIRMED** (**G-1**, T1) — with assignment *history* on the Assignment Log (**G-9**) |
> | **Inquiry** owns project/source/campaign/commercial-disposition/attribution/conversion-relationship | **CONFIRMED and completed** — add **origination event** (**J-34**) |
> | **Booking** owns transaction-lifecycle/inventory/payment-consequences | **CONFIRMED** (**H-8**, §20/§21/§35) — and **commission's eligibility half** (**J-26**) |
>
> | Residue | Is it a missing entity? |
> |---|---|
> | The management work mandate | **No.** Already homed on the **Assignment Log** (**AD-01I I-8**) |
> | Inquiry→Inquiry succession | **No — a reference, not an entity** (**AD-01H H-10**), and **conditional on T-4** (**AA-4**) |
> | A CP registration made before any project interest exists | **Undetermined — AA-2.** **The only place in this analysis where the model may be genuinely insufficient, and it is referred rather than patched** |
>
> **No new canonical business object is proposed by this document.** The standard AD-01F, AD-01G,
> AD-01H and AD-01I have consistently applied — reject a new entity unless a genuine, evidenced gap
> exists that no existing concept can cover — is applied here for the fifth time and yields the same
> answer.

---

## 13. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is decided, and no
> part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item sits in Master Spec
> **§88**'s MUST-ASK column.)*

**J-1 / J-3 — V-14's compound framing is the defect, and separating it is the result.** *"Genuinely new
commercial opportunity"* bundles a **structural** question (forced), an **accounting** question
(forced), and an **attribution** question (a business decision about money). **Both branches of V-14's
original dichotomy — *revival of a Lead* and *same-Inquiry re-engagement* — have no subject under the
AD-01G/AD-01H baseline.** [§2.1](#21-the-framing-correction--v-14s-original-dichotomy-no-longer-has-two-live-branches)

**J-2 — the Origination Rule.** A customer-generated expression of interest opens a **new Inquiry** iff
no non-terminal Inquiry on that work record already covers it; otherwise it is an **activity** on the
covering Inquiry. **No time threshold, no score, no judgement call, and nothing invented.**
[§2.1](#21-the-framing-correction--v-14s-original-dichotomy-no-longer-has-two-live-branches)

**J-5 … J-13 — the six cases.** Case 2 (other project), Case 3 (dumped, returns), Case 4 (wrong number),
Case 5 (budget), Case 6 (post-Success, other project) each produce **a new Inquiry on the same work
record, forced.** **Case 1 (other configuration, same project) is the single undetermined case → AA-1.**
[§2.2](#22-case-1--amit-is-active-for-project-a-and-asks-for-another-configurationunit-type-within-project-a)–[§2.8](#28-the-six-cases-in-one-table)

**J-9 / J-10 — T-4 cannot be a single global rule; it must be a function of the prior closure's
classification.** No uniform answer survives Case 4 and Case 5 together. **The required input is Q7's
approved Dimension A — a second, independent justification for a framework approved for a different
purpose. Q7 is CONFIRMED and NOT amended; N-4 still owns every value and is now on T-4's critical
path.** [§2.5](#25-case-4--dumped-as-wrong-number-later-amit-personally-submits-a-valid-inquiry), [§5.4](#54-t-4-and-q7--a-confirmation-from-an-unexpected-direction)

**J-14 / J-16 — V-18's six situations reduce to two structurally distinct events plus one non-member,
and the customer/manager divide becomes structural rather than policed.** Every commercial fact hangs
off an Inquiry; a redistribution creates no Inquiry; **therefore it has nowhere to put a commercial fact
and a violation is a representational impossibility, not a rule breach.** **AD-01I I-6/I-7 CONFIRMED and
reinforced.** [§3.1](#31-the-six-situations-are-not-six-coordinate-alternatives), [§3.2](#32-the-distinction-the-architecture-must-never-lose)

**J-17 / J-18 — continuity across a closure is RELATIONSHIP continuity and never COMMERCIAL
continuity**, and *"revival"* should be retired as an architectural term **while the Product Owner's
actual requirement (P-1, P-2) is met in full — the record is the same record and the history stays
connected.** [§3.3](#33-re-engagement-continuity-stated-as-the-architecture-would-hold-it)

**J-19 / J-20 — V-18: a re-inquiry IS a Capture in the period it opens, and this is forced, not
chosen.** Every alternative either produces conversion above 100%, restates a closed period (forbidden),
or creates two denominators for one funnel. **What the business actually wants is a derivable
first-engagement / re-engagement segmentation, which needs no new fact (AA-5 asks whether it is
required).** **V-18's feed half is V-5's and is NOT resolved.** [§3.4](#34-v-18s-registered-question-the-capture-half-is-forced), [§3.5](#35-v-18s-feed-half-is-owned-by-an-existing-item-and-is-not-resolved-here)

**J-22 … J-25 — the anchor evaluation, performed critically.** The **Person** anchor fails AD-01H
Example 4 and — decisively — answers T-4 by accident, which is **AD-01C D6's own objection**; any repair
reconstructs the Inquiry inside it. The **work record** fails identically (Person-bounded). The
**Booking** cannot carry a capture-time control. **M-5's Person candidate is eliminated for the
ATTRIBUTION anchor on capability and governance grounds; M-5's Person candidate for the UNIQUENESS
boundary is untouched and open.** [§4.2](#42-the-person--relationship-anchor-tested-properly-rather-than-dismissed)–[§4.3](#43-the-booking-anchor-tested-and-eliminated)

**J-26 — commission has TWO anchors and conflating them is the live financial defect.** *Who* is
entitled → the **resolved claim on the converting Inquiry**. *Whether and when* payable → the
**Booking's milestones** (§32, §40, §33). **Claim resolution must complete before the milestone, or §40
has nothing valid to authorize against. No formula, rate or milestone value is proposed. M-9 is not
pre-empted.** [§4.4](#44-commission-has-two-anchors-and-conflating-them-is-the-live-financial-defect)

**J-28 — AD-01F's V-15 answered: structurally YES and forced; its commercial residue IS T-4, not merely
coupled to it.** [§4.7](#47-ad-01fs-v-15-as-registered--answered)

**J-27 — V-16 is NOT declared resolved.** Two of its four candidates are eliminated, the Inquiry is
recommended for the claim anchor, and **what remains of V-16 is a commercial-policy sitting rather than
an architecture sitting.** [§4.6](#46-what-remains-of-v-16-after-this-document)

**J-29 … J-33 — T-4 resolved architecturally, referred commercially.** Its subject relocates to
Inquiry→Inquiry (**A-3**, named not made). **The Inquiry is the only object in the model with a
commercial terminal boundary (J-30)**, which is what makes T-4 well-posed for the first time. Four
constraints bind any answer: **C-I** classification-sensitive · **C-II** never rewrites conversion
history (**which is what protects Q6**) · **C-III** requires a determinate predecessor if reach is
granted · **C-IV** resolution precedes eligibility. **T-4 itself is `BUSINESS DECISION REQUIRED` and is
not answered, narrowed or branched. T-4 and T-5 are one rule parameterized by the prior terminal
outcome; AA-3 is the case neither covers.** [§5](#5-t-4-interaction)

**J-34 — the recommended definition of an Inquiry:** *the commercial engagement unit — a dated, sourced,
project-contexted expression of interest by one Person, **originated by a customer-generated commercial
event**, carrying **its own attribution claim set** and its own terminal commercial outcome **exactly
once**.* **Extends AD-01G §5 in two clauses and changes nothing else.**
[§6](#6-inquiry-lifecycle--commercial-semantics)

**J-35 — the Lead/Inquiry boundary test:** *a fact belongs to the Inquiry iff it can legitimately hold
different values for two engagements of the same client **at the same instant**.* **AD-01 §3's own test,
and it reproduces every placement AD-01G/H/I already reached — which is the evidence that it describes
the decisions rather than adding to them.** [§7](#7-lead-vs-inquiry-boundary)

**J-36 — no record-level source, campaign or attribution fact.** First-source is **derived** from the
earliest Inquiry, is **not** a claim, **not** a commission input, and **not** a source-performance input.
**Consistent with G-8.** [§7](#7-lead-vs-inquiry-boundary)

**J-37 / J-38 — six named acts, and one prohibition.** Continuation · re-engagement · additional interest
· return-after-conversion · work re-attempt · correction. **Exactly one exists to restate a closed
period; the others must never.** **A re-engagement may never serve as a correction. AD-01C §3.4
CONFIRMED at the Inquiry level; Q6 not reopened.** [§8](#8-re-engagement-semantics)

**J-40 — the largest financial defect in the line is closed, subject to approval.** *Two CPs, two
engagements* becomes trivially distinguishable from a genuine §11 clash, so leadership is no longer
asked to adjudicate manufactured conflicts and §32/§40 commission cannot flow to a producer who did not
produce the converting engagement. **AD-01C D6's priced defect; discharged by the anchor, not by a new
control.** [§9.2](#92-can-one-lead-have-project-a-attributed-to-cp-a-and-project-b-attributed-to-cp-b)

**J-42 — a manager redistribution can never change attribution, and this is now structural.**
**AD-01I I-6 CONFIRMED and reinforced.** [§9.4](#94-can-a-manager-redistribution-change-attribution)

**J-48 / J-49 — project, source and CP conversion must share ONE denominator (Inquiries originated in
the period, including re-engagement Captures); Capture count and new-client count are different
numbers.** [§11.2](#112-three-constraints-this-document-adds)

**J-51 / J-52 / J-53 — no new canonical business object is proposed.** *Commercial Opportunity* is
rejected property-by-property; the Sales Episode rejection is re-tested a fourth time and **STANDS with
its conditionality on AD-01G G-1 unchanged**; the candidate chain **Person → Lead → Inquiry → Booking**
models every scenario, **with the correction that it is not the whole model** (the Assignment Log and
the Activity timeline are canonical and absent from it) and **three residues, exactly one of which
(AA-2) could indicate a genuine insufficiency.** [§12](#12-alternatives)

### 13.1 The costs of this recommendation, priced without softening

> **⟦ARCHITECT ANALYSIS⟧ A recommendation that reports only its advantages is not an analysis.**

| Cost | Statement | Label |
|---|---|---|
| **A counter-intuitive answer in the one case people will test it with** | After a **cancelled** Booking, a returning client opens a **new** Inquiry. Every commercial instinct says *"same deal."* **The architecture is forced (§10.3) and the instinct is about attribution, not identity — which is why AA-3 exists.** The owner should approve this knowing it will be questioned | ⟦ARCHITECT ANALYSIS⟧ |
| **A recorded Product-Owner word is retired** | *"Revival"* (**P-1**) no longer describes the mechanism. **The requirement it expressed is met in full (J-18)** — but a term the owner used is being replaced, and that is not a silent change | ⟦ARCHITECT ANALYSIS⟧ |
| **The §11 adjudication surface multiplies** | Per-Inquiry claim sets mean a record can hold several independent clash adjudications, and **§11 reserves adjudication to authorized leadership**. Real management-workload cost. **It does not create disputes; it stops merging them (J-22)** | ⟦ARCHITECT ANALYSIS⟧ |
| **Five business rules must be answered before this is usable** | **AA-1 … AA-5 are parameters of this recommendation, not a separate sitting.** Approving J-1 … J-53 without them leaves five rules to implementation, which **§88** and **consolidated §30** forbid | ⟦ARCHITECT ANALYSIS⟧ |
| **T-4 stays open and is now clearly load-bearing** | This document makes T-4 well-posed and **does not answer it**. Until it is answered, **AA-4** cannot be decided, **§40** authorization has an unspecified input, and **V-16**'s remainder cannot close. **That is a completion, not a closure, and it is stated as such** | ⟦ARCHITECT ANALYSIS⟧ |
| **It names three amendments to prior documents** | **A-3** (AD-01C T-4/T-1/T-3/T-11's subject relocates), **A-4** (AD-01C §5's Rule-1 register row reads differently at the Inquiry level), **A-5** (AD-01H records V-3 as resolved when only clause 1 was addressed). **None is made. The owner cannot approve AD-01H's V-3 resolution as literally written AND this document's §2.2, and should be asked for both in one act** | ⟦ARCHITECT ANALYSIS⟧ |
| **A second namespace collision is documented, not fixed** | The task brief's **V-15** and AD-01F's registered **V-15/V-16** do not align (**J-16**, warning 2). **Following AD-01I I-14's precedent, it is flagged rather than renumbered — which means the register still contains two ambiguous numbers and someone must own it** | ⟦ARCHITECT ANALYSIS⟧ |

---

## 14. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and consolidated requirements **§1** and **§30**, none is guessed.
> Numbered **AA-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y /
> Z** namespaces.

### 14.1 New items raised by this document

> **⟦BUSINESS DECISION REQUIRED⟧ Every row is a BUSINESS DECISION REQUIRED item. No row is answered,
> narrowed or given a preferred branch anywhere in this document.**

| # | Decision required — stated precisely | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **AA-1** | **Is unit type / configuration / size within a single project an individuating dimension of the Inquiry, or an attribute of its requirement profile?** i.e. when a client already being worked on Project A asks about a different configuration in Project A, is that one Inquiry whose requirement changed, or a second Inquiry? | §2.2 (Case 1) | **Ambiguous, and the only evidence cuts both ways.** **P-4** names *"a regenerated inquiry for a different project **or size**"* — but *regenerated* presupposes the prior closed, so it speaks to the sequential case and is silent on the concurrent one. **V-3 clause 2** (which facts belong to which level) was **never resolved** — AD-01G §5.1 says so explicitly and AD-01H does not address it (**A-5**). | The count of commercial engagements — and therefore **every conversion denominator** (§11, **J-48**) — is set by implementation. Coupled to **Y-3** and **Y-1**: if configuration individuates, two same-project Inquiries become ordinary rather than exceptional, which changes what Y-3 is asking. |
| **AA-2** | **Is a project mandatory at Inquiry origination — and if a CP registration can be recorded before any project interest is expressed (§42, §44), what does that claim attach to?** Two readings are stated in §4.5 and **neither is preferred**: (A) the Inquiry exists from origination with project completed later; (B) a bare registration is a claim over a relationship and needs a home the Inquiry cannot provide. | §4.5 strain 1 | **Silent.** **P-14**: Helpdesk capture is *"name, limited phone identifier where appropriate, **CP/source**, quick registration"*; §44 provides a temporary capture for an unmatched CP sub-agent *"clearly marked as unverified and later reconciled."* **Neither says whether a project is named.** | **This is the one place in this analysis where the candidate model may be genuinely insufficient.** Under (A) an Inquiry may exist briefly without a project, which collides with **V-24** (§08 project-scoped authorization, open). Under (B) a claim exists with nothing to attach to, and **§11**'s *"record each attribution claim"* is unsatisfiable at the moment §42 describes. **Deciding it by implementation decides a §88 canonical-entity question.** |
| **AA-3** | **After a Booking is cancelled (§35), does a subsequent re-engagement by the same Person carry the cancelled Booking's resolved attribution, a new claim, or a contested set — and does the answer differ if §33 clawback was applied?** | §5.5, §10.3 | **Silent, and not covered by either existing item.** **T-4** is *"after a lost episode"*; **T-5** is *"after a completed purchase."* A cancelled Booking is **neither** — the Inquiry's Success remains historically true (**P-16**) while the purchase did not complete. **P-13** warns that unit transfers must not be treated as cancellations, which makes the input itself non-trivial. | Direct **§32/§33/§40** exposure on a path with real money already moved. Either a producer is paid twice for one client, or a producer who genuinely produced the re-booking is refused because an earlier claim silently persists. **Unrecoverable if decided by implementation.** |
| **AA-4** | **Must the business be able to state that a new Inquiry *succeeds a specific prior Inquiry* — an appended Inquiry→Inquiry reference — or is relationship-level adjacency on the work record sufficient?** *(Conditionally forced: required if and only if T-4 grants any reach — §5.3 **C-III**.)* | §2.6 (J-12), §5.3 | **Silent.** **AD-01H H-10** named the mechanism (*"an appended reference between inquiries, not a new entity"*) and left open whether it is required. **AD-01C T-1 / T-3 / T-11** raise the same questions at the **Lead** level and are unresolved (**A-3**). | If T-4 grants reach without this, a record with several prior closures has several candidate predecessors and **§40 authorizes entitlement from an inference**. If it is built without T-4 needing it, an unasked-for relationship is created — the elegance-without-necessity move AD-01F/G/H/I each refused. **Answer T-4 first.** |
| **AA-5** | **In management reporting, does *"new leads / captures in the period"* include re-engagement Captures, or must first-engagement and re-engagement be separately reported — and at which level (record, or record × project)?** | §3.4 (J-20), §11.2 (J-49) | **Silent.** Consolidated **§9**, **§12** and **§25** use *"leads"* throughout without disambiguating it, which is also **Y-5**'s subject. **P-6** lists *"reporting treatment of multiple project interests"* as open in the Product Owner's own words. | **Currently being decided by whoever writes the first report.** The split is fully derivable (**J-20**) — the question is whether it is required, not whether it is possible. Merged, *"new business"* is inflated by returning clients; split without a stated level, two reports disagree. Coupled to **Y-5** and **Y-3**. |

### 14.2 Questions this document raises that are owned by *existing* open items — no new number minted

> **⟦ARCHITECT ANALYSIS⟧ Recorded so they are not lost, and deliberately not renumbered — minting a new
> item for a question an existing one already owns is how a register becomes unusable (AD-01I §13.2's
> discipline, followed).**

| Question surfaced here | Owned by | Effect |
|---|---|---|
| **Does an attribution claim on a closed Inquiry reach a later Inquiry — and on what terms?** | **AD-01C T-4** | **The central open question of this cluster.** §5 gives it its correct subject (Inquiry→Inquiry), shows it must be classification-sensitive (**C-I**) and states four constraints. **NOT answered.** |
| Does the producer behind a **converted** Inquiry have a claim on a later one? | **AD-01C T-5** | **Same rule as T-4, parameterized by terminal outcome (J-33). NOT answered.** |
| May two Inquiries on one record be simultaneously non-terminal? | **AD-01H Y-1** | **Gates Case 2 — the Product Owner's headline scenario. Priority raised (J-6). NOT resolved.** |
| Is *Project Interest* an aggregate over Inquiries? | **AD-01H Y-3** | **Determines whether V-18's situations (2) and (3) are one event (J-15) and whether §11 rows 2 and 3 are one number. NOT resolved.** |
| Does a record holding a Success stay in ordinary sales queues? | **AD-01H Y-4** | **Forced into view by Case 6 (§10.2). Still blocking. NOT resolved.** |
| Which of Lead / Inquiry / project-interest count is *"leads"*? | **AD-01H Y-5** | **Sharpened by §11 and coupled to AA-5. NOT resolved.** |
| Which facts (unit type, budget, requirement profile) belong to which level? | **AD-01F V-3, clause 2** | **Never resolved by AD-01G or AD-01H despite AD-01H recording V-3 as resolved → A-5. Owns half of AA-1. NOT resolved.** |
| Which *New* predicate does the §14 feed use, and what is a *qualifying* activity? | **AD-01F V-5** and **AD-01F's V-4** | **Own V-18's feed half (J-21). NEITHER resolved. AD-01F's V-4 remains OPEN and the V-4 collision (AD-01I I-14) remains documented and unresolved.** |
| Does the conversion funnel key on the record or the Inquiry? | **AD-01F V-17** | **Forced in direction by H-4/H-8 and relied on by J-19 and J-48. Still the owner's to ratify. NOT resolved.** |
| Which anchor do claims and commission entitlement attach to? | **AD-01F V-16** and **M-5** / **M-9** | **Two candidates eliminated; the Inquiry recommended for the claim anchor; the entitlement rule untouched. NOT declared resolved (J-27).** |
| Must a clash be adjudicated before work proceeds / before eligibility? | **AD-01E U-17** | **Given its financial expression by C-IV. NOT resolved.** |
| Which Dump-reason values exist, and is each recoverable? | **N-4** *(with AD-01B §7.2 for imports)* | **Now on T-4's critical path via C-I — third document to find N-4 blocking something downstream. NOT resolved.** |
| Does a closure speak about *this engagement* or *this relationship*? | **AD-01I Z-5** | **Closely related to C-I's required input. NOT resolved, NOT narrowed.** |
| Does validity class constrain redistribution eligibility? | **AD-01I Z-2** | **Needs the same input as C-I. NOT resolved.** |
| Does a legacy import carrying only a record-level source need a relationship-level source? | **AD-01B §7.2** *(with N-4)* | **Third instance of the same import tension recorded. NOT resolved.** |

### 14.3 Items from prior documents that this document explicitly does **not** resolve

> **⟦ARCHITECT ANALYSIS⟧ Each row states **only** the effect this document has on a prior open item.
> **No item in this table is resolved here.**

| # | Item | Effect of this document |
|---|---|---|
| **Q1, Q4, Q7** | AD-01A §8 decisions | **Treated as fixed input. Q4 NOT reopened. Q1's vocabulary decision NOT reopened. Q7 CONFIRMED and NOT amended — §5.4 finds a second justification for it and adds no dimension and no value.** |
| **Q6** | AD-01C §3.7 | **NOT reopened, NOT narrowed, NOT re-argued. PROTECTED by C-II and reinforced by J-38.** No Q6 decision requires revision. |
| **Q5** | Re-engagement of a dumped lead | **NOT resolved and NOT narrowed.** One statement about the model only, already made by AD-01H: **Q5's mechanical half has no subject at the Inquiry level.** Its commercial half is the V-14 subject this document decomposes — **which is not the same as resolving Q5.** |
| **Q2, Q3, Q8 – Q16** | AD-01's remaining questions | **Not resolved.** **Q10** (merge precedence) acquires the question of what happens to two records' **Inquiry claim sets** on merge — **named, not answered.** **Q16** (who may move a record to a terminal state) acquires nothing new here. |
| **N-1 … N-4** | AD-01A's open items | **Not resolved, not narrowed.** **N-4** now additionally gates **T-4's answerability** via **C-I**. **N-2** untouched. |
| **T-1, T-2, T-3, T-11** | AD-01C's successor apparatus | **Subject relocates to the Inquiry (A-3, named not made). None resolved.** **T-2** (who may declare a successor) becomes AA-4's authorization question if AA-4 is answered yes. |
| **T-5** | Repeat-purchase attribution | **Shown to be the same rule as T-4 (J-33). NOT answered.** |
| **T-6, T-7, T-8, T-9, T-10, T-12** | AD-01C's remaining items | **Not resolved.** **T-6/T-7/T-8** (who sets Success; correction vocabulary; downstream consequences of an erroneous Success) are reinforced by **J-38** and remain the correction mechanism's, untouched. **T-10** unchanged. |
| **U-1 … U-20** | AD-01E's open items | **Not resolved.** **U-1** (relocated to V-14) is **decomposed, and two of its three parts answered** — §2.1. **U-2** → V-15, **answered in its structural half (J-28)**. **U-4** (no dormancy threshold) **confirmed and shown not to obstruct J-2**. **U-5** → V-18, **answered in its Capture half (J-19)**. **U-15** → V-16, not resolved. **U-17** gains C-IV. **U-18** unchanged. |
| **V-1, V-2, V-3** | Identity; concurrency; lifecycle level | **Treated as input.** **G-1/G-2** and **H-1/H-4** confirmed throughout. **V-3's clause 2 is shown to be unresolved (A-5).** |
| **V-4 (AD-01F's)** | Qualifying follow-up | **NOT resolved. The AD-01I I-14 collision with AD-01I's V-4·reactivation is preserved and documented, not renumbered.** It gates V-18's feed half (J-21) in addition to everything it already gated. |
| **V-5 … V-13** | New's scope; §8.1 amendment; visibility; transfer; Dump; redistribution | **Not resolved.** **V-5** owns V-18's feed half. **V-7** NOT reopened. **V-11/V-12/V-13** treated as fixed input per AD-01I and **not re-litigated**. |
| **V-16, V-17** | Attribution anchor; funnel re-key | **V-16 NOT declared resolved (J-27); two candidates eliminated. V-17's direction relied upon and still NOT resolved — the owner's to ratify.** |
| **V-19 … V-26** | Response vocabulary; first-response; temperature; who sets Success; pre-approval; §08 scope; past-handler entitlement; IVR | **Not resolved.** **V-24** gains AA-2's no-project case. **V-22** unchanged. |
| **W-1 … W-5** | AD-01G's open items | **Not resolved.** **W-1** (one activity, several Inquiries) gains the case of one arriving message that closes one Inquiry and opens another — **named, not answered.** **W-2** (which entity is called *Lead*) remains open and is deliberately not answered by this document's terminology. |
| **Y-1 … Y-5** | AD-01H's open items | **None resolved.** **Y-1's priority is raised (J-6)**; **Y-3** gains J-15 and AA-1; **Y-4** gains Case 6; **Y-5** is coupled to AA-5. |
| **Z-1 … Z-6** | AD-01I's open items | **None resolved, none narrowed.** **Z-2** and **Z-5** are shown to need the same input as **C-I**. **Z-1, Z-3, Z-4, Z-6** untouched. |
| **M-2 … M-20** | Reconciliation blockers | **Not resolved.** Directly implicated and left to their owners: **M-5** (uniqueness boundary — its **attribution-anchor** Person candidate is eliminated on capability grounds; its **uniqueness** Person candidate is untouched), **M-9** (commission model — consumes V-16, T-4, T-5 and AA-3), **M-3**, **M-7**, **M-8**, **M-14**. |

---

## 15. Impact on AD-01 through AD-01I

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Each row states what the V-14,
> V-18, V-15 and T-4 answers do to a prior position. **Where a prior document is confirmed, that is
> recorded as deliberately as where it is corrected.**

| Document | Effect |
|---|---|
| **AD-01** — Lead State Machine | **§9.1's denominator-contamination warning is CONFIRMED and given its final form**: under **J-19** and **J-48** the denominator is *Inquiries originated in the period*, one definition for three groupings. **§9.6** (nothing promised as a chart) unchanged and widened by nothing. **E-13**'s shape — commission keys on the **resolved claim** — is **CONFIRMED and completed by J-26**, which names the second anchor E-13 did not. **§3's two-concepts test is reused, not reinterpreted (J-35).** |
| **AD-01A** — §8 Product-Owner decisions | **Q1's vocabulary, Q4 and Q7 treated as fixed input and NOT reopened.** **Q7 CONFIRMED from a new direction (J-10, J-32): its Dimension A is the only available input to a defensible T-4 rule. No dimension added, no value proposed. §8.3's preserve-the-reason rule is load-bearing in a way it was not designed for, and that is recorded as a confirmation.** **§8.5** honoured — no workflow, approval step or gate is proposed anywhere. **§3.3's refusal to authorise a CP scorecard is upheld (§9.7).** |
| **AD-01B** — Dependency and ordering | **§4's "unrecoverable if decided by implementation" standard applied to AA-2, AA-3 and AA-4.** **§7.2's legacy-import tension recorded for the third time (J-36) and not resolved.** The dependency order is confirmed: **V-14/V-18/V-15/T-4 genuinely did gate V-16**, which is why §16 can now recommend it. |
| **AD-01C** — Terminality (Q5 · Q6) | **Q6 NOT reopened, NOT narrowed, and actively PROTECTED by C-II and J-38.** **D5** (per-engagement source) and **D6** (two producers, two episodes) are **CONFIRMED and are the two strongest arguments in §4** — **D6's "clash that is not a clash" defect is closed by J-40, subject to approval.** **§2.2 D6's governance argument** — that a record-spanning claim set answers T-4 *by accident* — is **adopted as the decisive argument against the Person anchor (J-24).** **§3.5's cross-validation method is reused in J-13.** → **A-3** and **A-4**, named and not made. |
| **A-3 — named, NOT made** | **AD-01C §6's T-4, and with it T-1, T-3 and T-11, are stated in Q5-B's Lead→Lead vocabulary.** Under **AD-01G G-1/G-2** and **AD-01H H-4** their subject is **Inquiry→Inquiry**: a re-engagement produces a successor **Inquiry on the same work record**, never a successor Lead. **AD-01C is not edited. Only the Product Owner may make this amendment.** §5.1 |
| **A-4 — named, NOT made** | **AD-01C §5's Rule-1 register row** *"Two sequential leads on the **same** Person × Project — **Not addressed**"* was written before the Lead/Inquiry split existed. **At the Inquiry level the sources DO address it**: **P-4** requires that a regenerated inquiry be **recorded, not overwritten**. The recorded silence is therefore narrower than AD-01C states. **AD-01C is not edited.** §2.4 |
| **AD-01E** — Re-engagement and visibility | **U-1 is decomposed and two of its three parts answered (J-3).** **U-2 → V-15, structural half answered (J-28).** **U-4 CONFIRMED and shown not to obstruct J-2 — no threshold exists and none is needed.** **U-5 → V-18, Capture half answered (J-19).** **The episode is rejected for the fourth time (J-52), with its conditionality on AD-01G G-1 unchanged.** **§3.5's direction that V-15 and T-4 be answered together is followed — and J-28 shows they are the same question.** |
| **AD-01F** — Business-workflow reconciliation | **§12.4's three acts are CONFIRMED and extended to six (J-37), with the distinctions now carried by what each act produces rather than by a rule about what it may do.** **§12.3's seven-fact table is neither extended nor narrowed**; facts 1 and 7 remain settled, **fact 4 is answered in its structural half (J-28)**, facts 2/3/5/6 remain exactly as AD-01F left them. **§13.1 rows 7, 10, 11 and 12 CONFIRMED**; **J-48** adds the one-denominator constraint. **§16.1's V-4 is NOT resolved and its collision with AD-01I's V-4·reactivation remains documented.** **The second collision — the task brief's V-15 vs AD-01F's registered V-15/V-16 — is flagged (J-16, warning 2) and NOT renumbered.** |
| **AD-01G** — Identity and history visibility | **G-1, G-2, G-5, G-8 and G-9 CONFIRMED throughout and tested a third way.** **§5's Inquiry definition is EXTENDED in exactly two clauses (J-34)** — origination by a customer-generated event, and the claim *set* — **and changed in nothing else.** **§5.2 CONFIRMED** (an Inquiry is not a handler, a queue row, a next action or a timeline). **§5.4's table is CONFIRMED and completed**: its row 1 second column (*"Is added interest a new commercial opportunity? Not stated"*) and its row 2 (*"UNDECIDED"*) are **answered in their structural and accounting halves and referred in their attribution half.** **T14's capture-time discipline is upheld by J-2**, which requires no judgement at the door. **G-4's episode rejection stands (J-52).** |
| **AD-01H** — Lifecycle and concurrent interests | **H-1, H-4, H-6, H-8, H-9, H-10 CONFIRMED.** **H-4's terminal-once property is the single load-bearing input to J-2, J-19 and J-30** and is relied on throughout. **§12 row 1's capability argument is EXTENDED to the Person candidate (J-23)** — AD-01H eliminated the work record and left Person to M-5; the same argument reaches it. **§12 rows 6 and 7 CONFIRMED.** **§4.3's "at which point Model B *is* Model D" method is reused in J-22.** **Y-1's priority is raised; Y-3, Y-4, Y-5 gain consumers. None resolved.** → **A-5**, named and not made. |
| **A-5 — named, NOT made** | **AD-01F §16.2 states V-3 in two clauses**: *"At which level does the lifecycle disposition sit … **And which facts (unit type, budget, requirement profile, terminal reason) belong to which?**"* **AD-01H resolves clause 1 (H-4) and never addresses clause 2**; **AD-01G §5.1 explicitly marks the requirement-profile row *"V-3 — not resolved here."*** Yet **AD-01H §13 and §14 record V-3 as resolved without distinguishing the clauses.** **AD-01H's claim should be narrowed to V-3 clause 1. AD-01H is not edited. Only the Product Owner may make this amendment.** §2.2 |
| **AD-01I** — Dump, redistribution, reactivation | **I-1 … I-9 treated as fixed input and NOT re-litigated.** **I-5, I-6 and I-7 CONFIRMED and REINFORCED**: under **J-16** and **J-42** a management act has nowhere to put a commercial fact, so the prohibition becomes structural rather than policed. **I-9's no-new-entity conclusion is upheld for the fifth time (J-53).** **§10.1 rows 7, 8 and 11 CONFIRMED**; **J-50** adds that row 7's strong form is conditional on T-4. **§15's recommendation of this exact cluster is followed, and its judgement that it would clear three of V-16's six inbound edges is borne out (J-27).** **I-14's V-4 collision is preserved, and a second collision is documented in the same way.** **Z-1 … Z-6 remain open; Z-2 and Z-5 are shown to need the same input as C-I.** |

---

## 16. Recommended next architecture decision

> ### **V-16 with M-5's attribution half, T-4, T-5 and AA-3 — the attribution and commission anchor, taken at last, as a commercial-policy sitting rather than an architecture sitting.**
>
> **⟦ARCHITECT RECOMMENDATION — sequence only⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL.)* **This is a recommendation about *sequence and subject*. No answer to V-16, M-5,
> T-4, T-5 or AA-3 is proposed, implied or preferred here, and none is resolved by this document.**

> **⟦ARCHITECT ANALYSIS⟧ Why this, and why now — after four consecutive documents recommended against
> it.**

1. **The reason for deferring it has been discharged.** **AD-01F §18, AD-01G §17, AD-01H §16 and AD-01I
   §15 each declined to take V-16** on the ground that it carried too many unresolved inbound edges —
   named as **Y-1, V-14, V-15, M-5, T-4, T-5**. **This document clears V-14, clears V-15's structural
   half, gives T-4 and T-5 a single well-posed subject with four binding constraints, and eliminates two
   of M-5's four anchor candidates.** **Y-1 is shown to separate cleanly (J-6) by AD-01H H-3's own
   method.** **The stated blocker is gone.**
2. **What remains of V-16 is not architecture.** §4.6 enumerates it: the entitlement rule (**M-9**'s)
   and the reach rule (**T-4/T-5/AA-3**). **Both are commercial policy about money.** An architect
   cannot supply them and should not (**P-20**, **§86**). **The sitting that is needed is one with the
   project owner, not one with an architect.**
3. **It is being decided by default every day it stays open.** **C-IV** shows that **§40**'s server-side
   authorization has an unspecified input until T-4 is answered. **AA-3** shows a path where money has
   already moved. **A fifth deferral is not a neutral act.**
4. **A fifth deferral now has a specific cost that earlier ones did not.** **AA-4 cannot be answered
   until T-4 is** (**C-III**), and AA-4 is the one item in this cluster with a structural consequence.
   **The open question is now blocking a structural question, which it was not before.**

**Put in the same sitting, because each costs one question and each is a parameter of this document's
own recommendation rather than a separate agenda:** **AA-1 … AA-5**. *Approving J-1 … J-53 without them
leaves five business rules to implementation, which §88 and consolidated §30 forbid.*

**The cheap companions, unchanged from AD-01H §16 and AD-01I §15 and still unresolved:** **AD-01F's V-4**
(*what does **qualifying** mean for a user follow-up?*) — one question, no prerequisites, and it now
gates **AD-01H H-5's three *New* predicates, FUT, every first-response variant, W-1, W-4, AD-01I §10.1
rows 9–10, and V-18's feed half (J-21)**. **All of them must share one answer or they will silently
disagree.** And **AD-01H's Y-1 and Y-3** — **Y-1 gates Case 2, which is the Product Owner's own headline
scenario (P-2, P-4), and Y-3 gates a reporting count and half of AA-1.** Both are one question each.

**Explicitly NOT recommended next: V-17.** Its direction is forced by **H-4/H-8** and relied on by
**J-19** and **J-48**, but it is a **source-of-truth change that only the Product Owner may ratify**
(§88). **It is a ratification, not a sitting**, and should be put in writing alongside **A-1** (AD-01H),
**A-2** (AD-01I) and **A-3/A-4/A-5** (this document) as one editorial act on the recorded decisions.

**Explicitly NOT recommended next: the Booking state machine, the commission model (M-9), or anything
downstream of them.** **M-9 consumes V-16, T-4, T-5 and AA-3.** Taking it first would require inventing
every one of them. **Take it after, not instead.**

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype, no
"temporary" claim table, no inquiry-succession column, no Capture counter, no conversion denominator
implemented in a report, no Dump-reason value list, and no commission scaffolding of any kind.
Consolidated **§30** states it: *"No schema/code implementation should be inferred from an unresolved
product ambiguity."* **The Lead / Client architecture is unresolved until the project owner approves in
writing.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED**

**NOT APPROVED FOR IMPLEMENTATION.**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. **No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it.** No UI, visual, layout or interaction design is proposed
anywhere. **No commission formula, brokerage rate, eligibility milestone value, clash-resolution
procedure or Dump-reason value is proposed, endorsed or seeded — M-9 owns the commission model and N-4
owns every reason value.** **No time threshold, dormancy horizon, episode-boundary rule or scoring
formula is invented, assumed or implied anywhere**; where the sources set no number, that is recorded as
silence (AD-01E **U-4**, confirmed) and the analysis is built so that it does not need one.

**None of AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H or AD-01I is modified by this
document.** Where this analysis contradicts, corrects, refines or completes a prior position — **AD-01C
§6's T-4, T-1, T-3 and T-11, whose subject relocates from Lead→Lead to Inquiry→Inquiry** (**A-3**, named
not made); **AD-01C §5's Rule-1 register row on two sequential leads on one Person × Project, which
reads differently at the Inquiry level** (**A-4**, named not made); **AD-01H's recording of V-3 as
resolved when only its first clause was addressed** (**A-5**, named not made); **AD-01H §12 row 1's
capability argument, extended to the Person candidate** (**J-23**); **AD-01G §5's Inquiry definition,
extended in two clauses** (**J-34**); **AD-01G §5.4's table, completed rather than corrected**;
**consolidated §7's word *"revival"*, retired as an architectural term while the requirement it
expressed is met in full** (**J-18**); and **AD-01F §16.2's V-15/V-16 numbering, flagged rather than
reassigned** (**J-16**) — **that is stated explicitly, with the document and section named and the
reason given, and the prior file is left exactly as it stands.**

In particular: **AD-01A §8's recorded Product-Owner decisions are treated as binding input throughout**;
**Q4 is NOT reopened**; **Q6 is NOT reopened, NOT narrowed and NOT re-argued** — it is actively protected
by **C-II** and by **J-38**, a valid Success remains historically true regardless of the downstream
Booking's fate, a downstream cancellation never rewrites historical conversion, and an incorrectly
recorded Success is corrected only through the audited correction mechanism; **Q1's vocabulary decision
is NOT reopened**; **Q7's three-dimension framework is CONFIRMED and NOT amended** — §5.4 finds a second
justification for it, adds no dimension and proposes no value; **Q5 is NOT resolved and NOT narrowed**;
**AD-01I's Dump, redistribution and reactivation conclusions (I-1 … I-9) are treated as fixed input and
are NOT re-litigated** — only their commercial-continuity consequences are drawn; **V-7 is NOT
reopened**; **V-16 is NOT declared resolved**; **V-17 is NOT resolved**; **AD-01F's own V-4 remains
OPEN and the numbering collision AD-01I recorded at I-14 is preserved, cited by source document
throughout, and NOT silently resolved — as is the second collision this document documents between the
task brief's V-15 and AD-01F's registered V-15 and V-16**; **N-1 … N-4 are NOT resolved and N-4 now
additionally gates T-4's answerability**; **T-1, T-2, T-3, T-5 … T-12**, **U-1 … U-20** (beyond the
parts of U-1, U-2 and U-5 expressly answered above), **W-1 … W-5**, **Y-1 … Y-5**, **Z-1 … Z-6**, **Q2,
Q3, Q8 – Q16** and blockers **M-2 … M-20** are **not resolved**. The five new items **AA-1 … AA-5** are
**raised, not answered.**

**No new canonical business object is proposed by this document**, and the candidate chain **Person →
Lead → Inquiry → Booking** is confirmed as a correct statement of commercial-fact ownership while being
corrected as an inventory of the model — the **Assignment Log** and the **Activity timeline** are
canonical and absent from it, and AD-01I's work mandate lives on the former. Where a gap genuinely
required a decision the sources do not supply — whether configuration individuates an engagement, where
a pre-project CP registration attaches, what a post-cancellation re-engagement carries, whether an
Inquiry succession must be nameable, and whether re-engagement Captures are separately reported — **it
is stated as `BUSINESS DECISION REQUIRED` and left to the project owner, rather than closed by
invention.**

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column — canonical
entities, relationships, financial rules, CP commission logic, source-of-truth rules and audit
requirements are all engaged. Per AD-01A §7, **delegation to an architect is not authorization**, and a
Product-Owner preference recorded as evidence is not an approved architecture. The analysis above is
offered so that it can be attacked on its merits rather than deferred to.

**Nothing here is implemented, and no prior document is modified, until the project owner approves in
writing.** Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: PROPOSED — NOT APPROVED**
