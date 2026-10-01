STATUS: PROPOSED — NOT APPROVED

# AD-01I — Dump Semantics (V-11), Manager Redistribution (V-12) and Lead Reactivation (V-4·reactivation)

> This document resolves **exactly three** coupled items and resolves nothing else. It contains no SQL,
> no schema, no migration, no column/table/type name, no implementation and no UI/visual design. All
> three sit in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column (canonical entities,
> relationships, authorization rules, source-of-truth rules, audit requirements). Per AD-01A §7,
> **delegation to an architect is not authorization.** This document is the asking.

| | |
|---|---|
| **Document ID** | AD-01I |
| **Type** | Decision analysis resolving AD-01F **V-11**, **V-12**, and the **reactivation** question this task labels **V-4**. **Not** an amendment to AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G or AD-01H. **None of those files is edited by this document.** |
| **Scope** | (1) What *Dump* actually means, and whether the single historical control conflates up to five separate concepts. (2) Whether management-initiated redistribution is a distinct business operation, what it records, and what it does and does not change. (3) What makes a work record operationally active again, and whether "redistributed with no new inquiry" and "customer-generated new inquiry" are the same event (**they are not**). Plus the task's explicit test of the approved three-dimension Dump-reason framework against real observed reason values. |
| **Explicitly out of scope** | **Q4 and Q6 are NOT reopened.** **Q1's vocabulary decision is not reopened.** **V-7 is NOT resolved** — §9 states interactions only. **V-13, V-14, V-15, V-16, V-17, V-18** and every other V-item are **not resolved**. **N-1…N-4** (including **N-4**, which still owns all Dump-reason *values*), **Q2, Q3, Q5, Q8–Q16**, **T-1…T-12**, **U-1…U-20**, **W-1…W-5**, **Y-1…Y-5** and blockers **M-2…M-20** are **not resolved**. |
| **Contains SQL / schema / migration / UI design** | **No.** Deliberately. |
| **Constraints honoured** | `ENGINEERING_RULES.md` **R1** (fail-closed tenant isolation), **R4** (masters not enums; semantics in columns, never in labels), **R6** (append-only; never edit history), **R12** (every claim traceable to this repository's own documents); Spec **Rule 1**, **§88**, **§95**, **§97**, and consolidated-requirements **§1** and **§30** (do not invent requirements — silence is recorded, never filled). |
| **Baseline treated as input, and tested rather than assumed** | AD-01G's **G-1/G-2** (Lead / Inquiry split) and **G-9** (custody interval derived over the Assignment Log). AD-01H's **H-4** (Model D) and **H-6/H-7** (Dump's placement). **Per this task's explicit instruction, AD-01H's provisional Dump model is tested against the real workflow, not preserved by default.** §7 and §14 record where it survives, where it is completed, and where it is found incomplete. |

## How to read this document

| Label | Meaning |
|---|---|
| **⟦PRODUCT-OWNER DIRECTION⟧** | A statement, preference or fact recorded by the Product Owner — in `BMEXA_MASTER_SPEC.md`, in `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`, or in AD-01A §8 / AD-01C §1.2 / AD-01E §1.1. **A recorded preference is evidence, not an approved architecture.** |
| **⟦ARCHITECT ANALYSIS⟧** | A finding derived from those sources. Mine to defend. |
| **⟦ARCHITECT RECOMMENDATION⟧** | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED.** |
| **⟦BUSINESS DECISION REQUIRED — Z-n⟧** | The sources are silent or in conflict, and nothing here fills the gap. Numbered **Z-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V / W / Y** namespaces. Consolidated in [§13](#13-business-decisions-required). |

**Findings are numbered I-n.** Amendments to prior documents that are *logically required but not made
here* are numbered **A-n**, continuing AD-01H's **A-1**.

**Three terminology warnings, all load-bearing.**

1. **"Lead" remains overloaded.** AD-01G **W-2** (which entity the product calls *Lead*) is open and is
   not answered here. Throughout, **work record** means AD-01G §4.1's Lead / Client Sales Record and
   **inquiry** means AD-01G §5's Inquiry / Project Interest. Where a source says *Lead*, the source's
   own sense is preserved and flagged.
2. **"Dump" is the word under examination and is therefore never used unqualified below.** Where this
   document means the commercial closure it says **inquiry closure**; where it means the workload act
   it says **queue exit**. The word *Dump* appears only when quoting a source or when naming the
   user-facing label, which **this document does not propose changing**.
3. **This task's "V-4" is not AD-01F's V-4, and the collision is real.** See **I-14** and §14.6.

---

## 1. Product Owner direction

> **⟦PRODUCT-OWNER DIRECTION⟧** Recorded first, verbatim in substance, before any analysis, so the
> analysis can be checked against it rather than substituted for it. Nothing in this section is the
> architect's.

### 1.1 On what Dump is asked to do

| # | Source | Statement |
|---|---|---|
| **R-1** | Consolidated **§11** | *"**Dump** — Terminal/non-active sales disposition at lifecycle level, **but real-world usage shows it may also function as workload-management disposition; semantics must be kept precise.**"* |
| **R-2** | Consolidated **§15** | *"The Sales Rep can close the current active work through a Dump/disposition action: 1. Select an appropriate response/disposition reason. 2. Enter remarks/context. 3. Save the action. 4. **The lead becomes non-active in the relevant sales workflow.**"* |
| **R-3** | Consolidated **§15** | Real-world reason examples: *"non-response, switched off, not reachable, not interested, budget issue, location issue and similar conditions. **These examples are reference material; BMexa's canonical reason master remains a later explicit decision.**"* |
| **R-4** | Consolidated **§12** (observed work queue) | The queue's primary operational filter is **All-Without-Dump** — the most-used meaning of the control in practice is *"exclude from my working set."* The queue row carries **one** *Dump Reason* column per client. |
| **R-5** | Spec **§13** | *"Use a simple disposition structure: **Follow-up** (requires next action/date), **Success** (converted), **Dump** (closed without needing follow-up)."* |
| **R-6** | AD-01A **§8.3** *(approved)* | The three-dimension Dump-reason framework — **opportunity validity class · responsibility locus · recoverability posture** — is **approved**. *"A terminal non-conversion disposition **must carry a reason**."* *"**Preserve the historical reason** rather than silently rewriting business history."* **No values approved (N-4, open).** |
| **R-7** | Product-Owner workload account, recorded in this task's framing and consistent with **R-1** and **R-4** | A Sales Rep could hold **7,000–8,000 leads** and needed a mechanism to clear the working queue. **The control was used for workload management irrespective of commercial outcome.** |

### 1.2 On manager redistribution

| # | Source | Statement |
|---|---|---|
| **R-8** | Consolidated **§7** | *"A client was originally handled by Employee A, followed up and later **dumped**. **A manager may redistribute dumped/non-responding leads to a fresher for another calling attempt.** If the client later regenerates an inquiry, the same underlying client/lead history may remain connected."* |
| **R-9** | Consolidated **§6** | *"Assignment is a first-class business operation and **a historical event, not merely a current field**."* Manager assignment, **bulk transfer**, **individual transfer**, **assignment history** (*"who performed the action and when"*), **transfer with history**, **transfer without history**, and **automatic assignment** are each listed as distinct described behaviours. |
| **R-10** | Consolidated **§16** | *"Reporting Managers/Sales Heads have a privileged transfer surface: Select one or multiple leads. Choose a Sales Representative from the reporting hierarchy. Transfer leads individually or in bulk. **Transfer should be represented as a historical event.** Transfer **may** include a management decision about whether prior history is visible to the receiving employee."* |
| **R-11** | Consolidated **§17** | *"Automatic assignment sends revived lead to a different/new handler — **New handler does not automatically see prior employee history.**"* *"Transfer without history — Receiving employee works the record as a **fresh context**."* |
| **R-12** | Consolidated **§7** | *"A manager can decide whether the receiving employee **sees full prior history** or receives **a fresh working context** without historical conversations."* |

### 1.3 On reactivation, and on what the sources do not say

| # | Source | Statement |
|---|---|---|
| **R-13** | Consolidated **§7** | *"the existing client/lead record **may be revived** rather than automatically creating a completely separate lead record… **exact revival semantics, episode boundaries and the difference between 'same Lead re-engagement' versus 'genuinely new commercial opportunity' remain an architecture/product decision to be settled explicitly.**"* |
| **R-14** | Consolidated **§13** | *"A regenerated inquiry for a different project **or size** can be added to the same client record… **The timeline should record the new inquiry event rather than silently overwriting the previous interest.**"* |
| **R-15** | Consolidated **§28** (explicitly OPEN, in the Product Owner's own words) | *"Final Dump reason vocabulary **and whether each reason is recoverable/revisitable**."* *"Exact definition of a genuinely new commercial sales opportunity versus a re-engagement/revival of an existing Lead."* *"Exact 'with history' / 'without history' transfer semantics."* |
| **R-16** | Consolidated **§30** | *"**No schema/code implementation should be inferred from an unresolved product ambiguity.**"* |
| **R-17** | Spec **§95** | *"**MINIMUM NECESSARY FRICTION, not minimum possible taps.** A one-tap action that creates financial corruption is worse than a three-tap action that prevents it."* |
| **R-18** | Spec **§88** | Changing canonical entities, relationships, authorization rules, source-of-truth rules and audit requirements are all **MUST ASK BEFORE DECIDING**. Spec **§86** / **§65**: inventing business rules is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. |

### 1.4 Real-world evidence supplied with this task, and its exact standing

> **⟦PRODUCT-OWNER DIRECTION — evidence only⟧** A reference CRM's Dump-Reason dropdown was observed to
> carry: **Budget Constraint · Location Issue · Already Purchased · Invalid/Wrong Number · Payment Plan
> Issue · Not Interested · Plan Changed · Planning to Buy Later · Real Estate Agent · Fake Lead · Loan
> Issue · Choose Competitor · Enquiry Not Done · CRM Test Query · Other.**
>
> **Its standing, stated precisely, per consolidated §1, §24 and §26 and AD-01F §1.2.** This is
> **business-logic evidence about a historical operation**. It is **not** a vocabulary BMexa adopts,
> and **N-4 still owns every value** (**R-3** says so in the Product Owner's own words). It is used
> here for exactly one purpose the task authorises: **to test the approved three-dimension framework
> against real reason values** (§3.6). **No visual, layout or interaction evidence is used anywhere in
> this document.**

### 1.5 Decisions treated as fixed input and not reopened anywhere below

> **⟦PRODUCT-OWNER DIRECTION⟧ Binding input.** **Q4** (Success = §20 Stage 3 Booked) and **Q6**
> (Success terminal; corrections outside the ordinary machine; a genuinely new opportunity is a new
> business unit) are **not reopened, not re-argued and not narrowed** at any point. **Q1's decision** —
> the four-value vocabulary, the rejection of *Pending*, and Today/Future/Overdue as derived — is
> likewise **not reopened**. **AD-01A §8.3's three-dimension framework is approved and is neither
> amended nor re-argued**; §3.6 tests it, which is what the task asks, and §13 refers one structural
> question about it to the Product Owner without altering it. **AD-01A §8.5's prohibition on inventing
> a reassignment-approval workflow is honoured throughout** — §5 and §8 add no workflow and no approval
> step. **AD-01G G-1, G-2, G-8, G-9** and **AD-01H H-1** are treated as input.

---

## 2. V-11 definition

> **⟦ARCHITECT ANALYSIS⟧**

### 2.1 What V-11 asks, restated exactly

AD-01F §16.1 (Tier 2) states V-11 as: *"**Does Dump end the opportunity, end the current handler's
work, or both — and is it one control or two?**"* Its source status is recorded as *"Consolidated §11
states the ambiguity itself."* Its consequence if left open: *"Loss analysis double-counts re-attempted
records; or queue exit is impossible without declaring a commercial loss."*

AD-01H **H-6** answered the **placement** half of V-11 — Dump validly exists at both levels with two
meanings — and stated plainly that *"V-11's **control** half — which operation a user is performing —
is **NOT** [answered]"* (AD-01H §14.2). **This document takes the control half, and in doing so tests
whether the placement half survives contact with all five concepts the task names.**

### 2.2 The five candidate concepts, stated so each can be tested independently

| # | Candidate concept | The question it answers | Whose act is it? |
|---|---|---|---|
| **C1** | **Commercial disposition** | *Did this opportunity end, and why?* | Handler |
| **C2** | **Removal from a handler's active work queue** | *Does this record still consume my working capacity?* — irrespective of why | Handler |
| **C3** | **Eligibility for manager redistribution** | *May this record be handed to another handler for further attempts?* | **Management** |
| **C4** | **Re-engagement eligibility** | *May the commercial relationship with this customer legitimately resume?* | Policy, triggered by the **customer** |
| **C5** | **Permanent invalid / closed classification** | *Was this ever a real, workable sales relationship at all?* | Handler, at closure |

### 2.3 The test applied, and it is AD-01's own

> **⟦ARCHITECT ANALYSIS⟧** AD-01 **§3**'s separation test — *two concepts belong on one axis only if a
> record can never legitimately be in both at once* — is the instrument. AD-01F §10.2 applied it to
> three of these and AD-01H §7.2 confirmed the result. **Applying it to all five is new, and it does
> not return "five".**

| Pair | Can they legitimately hold different values at one instant? | Verdict |
|---|---|---|
| **C1 vs C2** | **Yes, both directions.** A record can be commercially closed (C1 true) and still occupy queue space until the rep disposes of it; and — decisively — a rep with 7,000 records (**R-7**) can clear one from their queue (C2 true) while the opportunity is *not* commercially dead. **The second direction is the one that matters**, because forcing C2 to imply C1 makes every workload act a fabricated commercial loss, permanently, under **R6**. | **Independent axes.** AD-01F §10.2 (D-i / D-ii), confirmed. |
| **C1 vs C3** | **Yes.** *Commercially closed as non-responsive* and *available for another calling attempt* are simultaneously true in **R-8**'s described operation. That is the whole point of the fresher case. | **Independent.** AD-01F §10.2 (D-iii), confirmed. |
| **C2 vs C3** | **Yes, and the sources separate the actors.** **R-2**/**R-4** give the *rep* the queue-exit control; **R-8**/**R-10** give the *manager* the redistribution act. A record can be out of A's queue and not yet redistributed, or redistributed to B and therefore in B's queue. | **Independent — see I-2.** |
| **C1 vs C4** | **No — C4 is not an independent axis.** C4 is exactly what **AD-01A §3.5** built **Dimension C** for: *"Is this closure permanent, or is this prospect legitimately revisitable later?"* and *"Dimension C exists because it is the input to a decision already on the table"* — i.e. **C4 is a projection of C1's classified reason plus an undecided rule.** | **Projection of C1. Already homed. Its *rule* is V-14 / Q5 and is open.** |
| **C1 vs C5** | **No — C5 is not an independent axis either.** **AD-01A §3.3**'s **Dimension A** already contains *Invalid / non-opportunity* (*"not a real person, test data"*) and *Administrative closure*, and AD-01F §10.3 already mapped *Fake Lead*, *CRM Test Query*, *Invalid/Wrong Number* and *Enquiry Not Done* onto them. | **Projection of C1. Already homed.** |
| **C4 vs C5** | **Yes, and this is where C5 earns separate attention.** *Permanent* recoverability posture (Dimension C) and *Invalid* validity class (Dimension A) are different statements: *"planning to buy later"* is valid-and-revisitable, *"chose a competitor"* is valid-and-permanent, *"wrong number"* is **invalid**-and-permanent. Only the third says the **relationship** was never workable. | **Both are projections of C1, but of *different dimensions*.** |
| **C3 vs C5** | **This is the untested pair, and it is the sharp one.** See §3.4. | **Interacts — and the interaction is `BUSINESS DECISION REQUIRED` (Z-2).** |

### 2.4 The answer to V-11's definition question

> **⟦ARCHITECT RECOMMENDATION — I-1⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.**)*
>
> **I-1 — The historical single control conflates *three independent axes* and *two derived
> projections*. It is not one concept, and it is not five.**
>
> | Concept | Verdict | Where it belongs |
> |---|---|---|
> | **C1 — commercial disposition** | **Independent axis.** | **Inquiry.** Persisted, monotone, terminal-once, reasoned on AD-01A §8.3's three dimensions, **never rewritten** (**R6**). |
> | **C2 — queue exit / workload** | **Independent axis.** | **Work record × custody interval.** Derived condition; the *deliberate* act that produces it is a recorded work event (AD-01H §9.1, confirmed). Carries **no commercial reason**. |
> | **C3 — redistribution eligibility** | **Independent axis, and a *management* one.** | **Neither the inquiry nor the record.** It is a property of the **management act**, carried as recorded **intent on the Assignment Log entry** — an entity §06 already makes canonical and AD-01G §10.1 already requires to carry provenance. See §5. |
> | **C4 — re-engagement eligibility** | **Derived projection of C1.** Not a new concept. | **Dimension C** (input, approved) **+ V-14/Q5** (rule, **open**). Adding a separate control for it would duplicate a fact the reason already carries — AD-01A §3.6's own prohibition. |
> | **C5 — permanent invalid / closed classification** | **Derived projection of C1.** Not a new concept. | **Dimension A** (*Invalid / non-opportunity*, *Administrative closure*) **+ Dimension C** (*permanent*). **But its *scope* — engagement or relationship — is not carried by either. See §3.4 and Z-5.** |

> **⟦ARCHITECT ANALYSIS⟧ I-2 — the sources themselves separate C2 from C3 by actor, and that is
> stronger evidence than any structural argument.** **R-2** attributes the queue-exit action to the
> *Sales Rep*; **R-8**, **R-10** and **R-12** attribute redistribution to the *manager / Sales Head*,
> acting over *"leads in the reporting hierarchy"*. A single concept does not have two different
> owners with two different authorization surfaces. **The Product Owner has already built the
> separation into the described operation; the architecture has been collapsing it.** This also
> answers, without a new decision, the tempting question *"may a rep place their own record into a
> redistribution pool?"* — **the sources describe no such act**, and inventing one is forbidden by
> Rule 1.

> **⟦ARCHITECT ANALYSIS⟧ What I-1 costs, stated before §12 so it is not buried.** **R-5** and **R-17**
> are in tension: §13 wants a *simple* three-value disposition structure and one-tap actions, and I-1
> says the historical single tap was doing two unrelated jobs. **§95 resolves the tension in favour of
> precision** — *"a one-tap action that creates financial corruption is worse than a three-tap action
> that prevents it"* — and the corruption is concrete and permanent: under **R6**, a workload act
> recorded as a commercial loss can never be un-recorded, and AD-01 §9.1's contaminated denominator
> becomes uncorrectable. **This document does not design the control** (that is UI, and is out of
> scope). It states only that the model must be able to tell the two apart, and that **§95 forbids
> leaving which one occurred implicit.**

---

## 3. Dump semantic analysis

> **⟦ARCHITECT ANALYSIS⟧ This section challenges AD-01H's provisional model (Model C of the four the
> task poses) rather than confirming it by default, exactly as the task requires. The result is:
> confirmed in substance, incomplete in two specific and nameable places.**

### 3.1 What AD-01H's model actually claims

AD-01H **H-6** claims four things about the record-level half of Dump. Each is tested separately below,
because they are not equally supported.

| # | H-6's claim about the **record-level** condition | Basis H-6 gives | Test result |
|---|---|---|---|
| **(a)** | It means *"this record has no live work obligation for its current handler"* | AD-01F §10.2 D-i; **R-2**'s *"relevant"* sales workflow; **R-4**'s filter | **CONFIRMED.** §3.2 |
| **(b)** | It is **derived**, not persisted, and **custody-scoped** | AD-01A §3.6, §5.2; AD-01G G-9 | **CONFIRMED in principle, INCOMPLETE in its inputs.** §3.3, I-8 |
| **(c)** | It is **not terminal** — *"and it must not be"* | *"The fresher case (P-15) requires it to become false again"* | **OVER-GENERALISED.** §3.4, I-10 |
| **(d)** | It **carries no reason** — *"and must never be asked to carry one"* | *"It is not a commercial statement"* | **CHALLENGED on the re-attempt case.** §3.5, Z-4 |

### 3.2 Claim (a) survives the workload evidence — and the workload evidence is the strongest test available

> **⟦ARCHITECT ANALYSIS⟧** **R-7** is the hardest case any Dump model must survive: a rep holding
> 7,000–8,000 records clears the queue. Test the four models the task poses against it.

| Model | What the 7,000-record rep must do | Verdict |
|---|---|---|
| **A — Inquiry-only** | Record a **commercial closure with a reason on every inquiry**, because there is no other control. **Thousands of fabricated commercial losses**, each permanent under **R6**, each entering AD-01 §9.1's denominator and each mis-pricing the source that produced it (AD-01A §3.3). The rep is forced to lie about the market to manage their own time. | **Fails, and fails expensively.** |
| **B — Lead-only** | One value per record. Already eliminated by AD-01H §4.1 on six scenarios, and independently by AD-01F §10.2's **C-6**: the fresher then receives a record the system says needs no follow-up, in no §14 feed, filtered out by **R-4**'s own filter. | **Fails.** |
| **C — Inquiry disposition + derived record condition** *(AD-01H's provisional answer)* | Queue exit costs nothing commercially. The 7,000 records leave the working set; **zero** fabricated losses. Any that were genuinely lost are closed separately, once, on the inquiry. | **Survives — and only this shape does.** |
| **D — another model** | Two were constructed and tested; both collapse into C or fail. See §11.2, §11.3. | **No fourth model is needed.** |

> **⟦ARCHITECT ANALYSIS⟧ I-3 — the decisive property, stated in one line so it is not lost: *under
> Model C, and only under Model C, a rep can manage their own workload without asserting anything
> false about the market.*** That is the property **R-1** is asking for when it says *"semantics must
> be kept precise"*, and it is the property **R-7** makes non-negotiable at scale. **AD-01H's H-6 is
> therefore confirmed on its central claim, on evidence H-6 did not itself use.**

### 3.3 Claim (b) is right in principle and incomplete in its inputs

> **⟦ARCHITECT ANALYSIS⟧** AD-01H **H-4** specifies the record's condition as derived from **exactly
> three** inputs: *(i) the states of its inquiries, (ii) its next-action commitment, (iii) its
> custody-scoped activity history.* **AD-01H §11.3 itself records that this leaves the redistribution
> case expressible but not performable.** The task asks whether something must represent that work
> obligation. **It must, and the three inputs cannot produce it.**

**Why not, shown rather than asserted.** Take the fresher's record the instant after redistribution:

| Input | What it yields | |
|---|---|---|
| (i) inquiry states | Every inquiry terminal → **no live commercial obligation.** | Correct, and it is *supposed* to yield nothing. |
| (ii) next-action commitment | None exists — nobody has scheduled anything yet. | Correct. |
| (iii) custody-scoped activity history | *No qualifying activity in the current custody interval* → **N-context = true** (AD-01H H-5). | **This is the near-miss, and it fails.** |

> **⟦ARCHITECT ANALYSIS⟧ Why input (iii) alone cannot carry the obligation — the §57 counter-example,
> which is fatal.** *N-context = true* becomes true after **every** custody change, not only after a
> redistribution. **§57** requires that a deactivated employee's records be reassigned. A manager
> absorbing a departed rep's 8,000 closed records would, on a purely (i)–(iii) derivation, acquire
> **8,000 spurious work obligations** — reproducing **R-7**'s original problem in the one place the
> architecture was supposed to have solved it. **The derivation cannot distinguish "assigned in order
> to be worked" from "assigned in order to be custodied", and the difference is a management
> intention that no historical fact about inquiries, commitments or activities records.**

> **⟦ARCHITECT RECOMMENDATION — I-8⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.)*
>
> **I-8 — AD-01H H-4's derivation inputs must be widened from three to four. The fourth input is the
> *intent recorded on the assignment act that opened the current custody interval*.**
>
> - **It requires no new canonical entity.** §06 already makes the **Assignment Log** canonical.
>   AD-01G **§10.1** already established that the log must carry **two** facts it may not carry today —
>   the with/without-history decision, and **assignment provenance/method** (*"automatic routing versus
>   deliberate management placement"*). **Intent is the third fact on the same act**, and §5 shows it
>   is not the same fact as provenance.
> - **It creates no second source of truth.** This is the objection that killed the persisted
>   assignment axis (AD-01A §5.2), the persisted record lifecycle (AD-01H §4.2, Model C) and the stored
>   custody interval (AD-01G G-9). It does not apply: a management **intention at a moment** is not
>   computable from anything. It is a historical fact about a human decision, in the same class as the
>   history-visibility decision AD-01G §10.1 already places there and calls *"unrecoverable if not
>   recorded at the moment of the act."*
> - **It keeps the work record free of persisted lifecycle.** **Model D survives.** The record still
>   carries no value; the *act* carries the fact; the condition is still derived at read time
>   (AD-01G **G-8**, confirmed and unweakened).
>
> > **⟦ARCHITECT ANALYSIS⟧ AMENDMENT A-2 — logically required, named here, NOT made here.**
> >
> > **AD-01H §5.1 and H-4 state that the work record's condition derives from three inputs. Under I-8
> > that enumeration is incomplete and requires amendment to four.** It concerns **derivation inputs
> > only** — it does **not** reintroduce a persisted lifecycle at either level, does **not** amend
> > AD-01H's H-1, H-5, H-6(a), H-8, H-9 or H-10, and does **not** touch AD-01A §8.1's vocabulary.
> > **AD-01H is not edited by this document. Only the Product Owner may make A-2**, and it should be
> > made in the same act as approving AD-01H, since A-2 is meaningless without H-4.
> >
> > **Provenance, so this is not mistaken for a new challenge:** AD-01F **C-6** and §10.2 raised the
> > gap; AD-01G §13 recorded it as *"V-11/V-12 — not resolved here"*; **AD-01H §11.3 named it as the
> > reason V-11/V-12 should be taken next and explicitly declined to close it.** This document
> > completes that request.

### 3.4 Claim (c) is over-generalised — the one place AD-01H's Dump model is genuinely wrong

> **⟦ARCHITECT ANALYSIS⟧ This is the sharpest challenge in the document, and it is offered so it can
> be attacked.**
>
> **AD-01H H-6 asserts of the record-level condition: *"Terminal? — No, and it must not be. The fresher
> case (P-15) requires it to become false again."*** That inference is valid **for the class of closure
> the fresher case concerns** — *non-responding* records, i.e. **Commercial loss** under Dimension A —
> and **H-6 generalises it to every class without testing the others.**
>
> **AD-01G §4.1 states the record's *"Terminality — has none. Nothing in the sources describes a client
> relationship ending. The absence is recorded, not filled (Rule 1)."* That is a statement of
> *silence*. H-6 converts it into a statement of *prohibition* — *"and it must not be"* — on the
> strength of one class of evidence. A recorded absence is not a proved negative.**

**The concrete case the generalisation does not survive.** A work record whose only inquiry closed as
*Fake Lead*, *CRM Test Query* or *Invalid/Wrong Number* (§1.4) is, on the Product Owner's own framing
in **C5**, *"structurally different"* — the relationship was never real. Under H-6 as written that
record has **no terminal condition at all** and is therefore **eternally redistributable**: a manager
may hand it to a fresher, who will call a number that does not exist, for as long as the tenant exists.

**Two things follow, and only one of them is mine to state.**

1. **⟦ARCHITECT ANALYSIS — I-10⟧ Structurally, redistribution eligibility (C3) has at least two
   independent inputs, not one.** AD-01F §10.3 and AD-01H **H-7** established the first correctly —
   **management workload policy**, and that **Dimension C must not be asked to carry it**. This
   document adds the second: **the validity class (Dimension A) of the record's closed inquiries**,
   which speaks to whether *any* further attempt can be productive. **H-7's negative half is confirmed
   in full; its positive half — *"whether it is explicit, derived from posture plus policy, or does not
   exist as a distinct thing"* — is answered in §5 for the workload input and referred for this one.**
2. **⟦BUSINESS DECISION REQUIRED — Z-2⟧ Whether validity class *constrains* redistribution eligibility
   — and if so whether the constraint is enforced or merely surfaced to the manager — is not stated by
   any source and is not invented here.** The reference operation cannot settle it: it carried a
   **single record-level Dump Reason column** (**R-4**) and a single record-level status, so it was
   structurally incapable of expressing the difference between *"this engagement failed"* and *"this
   relationship was never real"*. **Its silence is an artefact of its data model, not evidence about
   the business.** Full statement in §13.

> **⟦ARCHITECT ANALYSIS⟧ What is explicitly NOT proposed here.** **No record-level terminal state is
> invented, recommended or implied.** The task forbids inventing a state to close a gap, and the gap
> does not require one: if the answer to Z-2 is *"validity class constrains redistribution"*, that is a
> **rule read over facts the inquiry already carries**, not a new value on the record. **If it turns
> out to require a record-level fact, that is the Product Owner's decision to take, not this
> document's.**

### 3.5 Claim (d) is challenged by the re-attempt, and the challenge is referred, not resolved

> **⟦ARCHITECT ANALYSIS⟧** H-6 says the record-level condition *"carries no reason — and must never be
> asked to carry one."* The justification — *"it is not a commercial statement"* — is correct **for
> ordinary queue exit**, where the commercial statement lives on the inquiry alongside it.
>
> **It breaks in exactly one place: Scenario B (§5.3).** A fresher works a redistributed record with
> **no live inquiry**, calls for three weeks, and gets nowhere. There is no inquiry to close — closing
> one is forbidden (AD-01A §8.3, **R6**, AD-01C §2.5 as relocated by H-6) because the existing closure
> is already final and was already reasoned. So under H-6 the re-attempt **ends with no reasoned
> outcome anywhere**, and the manager who ordered it cannot learn whether it failed because the number
> is dead, because the customer is hostile, or because the fresher never called.
>
> **That is a genuine information loss created by the model, and it lands directly on the metric the
> task asks to be reportable — *manager effectiveness* (§10).** **Two candidate homes exist and
> neither is adopted here** (see **Z-4**): an outcome recorded on the **redistribution act / closing
> custody interval** — which is not a commercial statement and so does not violate H-6's principle —
> or **nothing at all**, accepting the loss. **The sources state no rule. Nothing here fills it.**

### 3.6 The Dump-reason framework tested against the real reason values

> **⟦ARCHITECT ANALYSIS⟧ This is a test of an approved decision, not a re-opening of it. AD-01A §8.3 is
> neither amended nor re-argued. No values are proposed, endorsed or seeded — N-4 owns them
> (Rule 1, R4, R-3).** AD-01F §10.3 mapped the fifteen observed values; that mapping is **confirmed and
> not restated**. What follows tests the **four consolidated-§15 values AD-01F did not have** and then
> asks the question the task poses: **is a category missing?**

> **⟦PRODUCT-OWNER DIRECTION⟧** The four values tested below are the Product Owner's own, recorded in
> consolidated **§15** (**R-3**) — *"non-response, switched off, not reachable, not interested"* — and
> **R-3** states in the Product Owner's words that they are *"reference material"* and that the
> canonical reason master *"remains a later explicit decision."*

**The four reason values from R-3 that no prior mapping covered.**

| Observed reason | Validity class (A) | Responsibility locus (B) | Recoverability posture (C) | Does it map cleanly? |
|---|---|---|---|---|
| **Not responding** | Commercial loss *(if genuinely engaged)* **or** Invalid *(if never contactable)* | Prospect, **or** source/CP | Mixed | **Yes — and the disambiguator is already specified.** AD-01A **§3.6** rules that *engagement depth* is **derived from activity history, never carried on the reason**, and names this exact value as its worked example: *"went unresponsive after genuine engagement … does not need to be its own reason value."* |
| **Switched off** | Same ambiguity | Same | Same | **Yes, by the same mechanism.** |
| **Not reachable** | Same ambiguity | Same | Same | **Yes, by the same mechanism.** |
| **Not interested** | Commercial loss | Prospect / market | Permanent or revisitable *(tenant's choice)* | **Yes, cleanly.** Already covered by AD-01F §10.3. |

> **⟦ARCHITECT ANALYSIS⟧ Finding 1 — the framework absorbs three plausible-sounding new values without
> growing, exactly as AD-01A §3.6 predicted it would.** This is the second independent empirical
> validation of §8.3 (AD-01F §10.3 was the first), and it is recorded as a **confirmation**, because a
> test that reports only failures is not a test.

> **⟦ARCHITECT ANALYSIS⟧ Finding 2 — one dimension was tested for a gap and found to have none.**
> *"The rep never actually called"* — a builder-process failure rather than a market outcome — is a
> plausible missing case. **Dimension B already carries it**: its four values are *source or CP ·
> prospect · **builder product or process** · nobody* (AD-01A §3.4). **No gap. Recorded so the absence
> is a finding rather than an omission.**

> **⟦ARCHITECT ANALYSIS⟧ Finding 3 — *Other* is not a gap in the framework; it is a question for N-4.**
> The observed list's escape value must still carry three mandatory dimension values, which for a
> genuinely unclassified closure are unknowable. **AD-01B §7.2 already recorded the identical tension
> for legacy imports and resolved it into N-4** (*"a value that honestly denotes 'not recorded in the
> source system'"*). **Same tension, second instance. N-4 still owns it; nothing is decided here.**

> **⟦ARCHITECT ANALYSIS⟧ Finding 4 — one structural gap is genuinely identified, and it is the one
> V-11 and V-12 both run into: the framework does not record the *scope* of a closure.**
>
> Every value in the observed list makes a statement, but not all of them make it about the same
> subject:
>
> | Statement's subject | Examples | Consequence |
> |---|---|---|
> | **This engagement** | Budget Constraint · Location Issue · Choose Competitor · Not Interested · Plan Changed · Loan Issue | Another engagement with the same person may still be productive. **Redistribution is sensible.** |
> | **This relationship** | Fake Lead · CRM Test Query · Invalid/Wrong Number · Enquiry Not Done | **No** engagement with this record can be productive. **Redistribution is waste.** |
>
> **Is that a fourth dimension, or is it derivable from Dimension A?** Applying AD-01A's own two
> standards produces **two different answers**, and that is precisely why it is referred rather than
> decided:
>
> - **AD-01A §3.6's standard** — *"do not record what the system can compute"* — says **derive it**:
>   *Invalid*, *Redundant* and *Administrative* are relationship-scoped; *Commercial loss* and
>   *Disqualified* are engagement-scoped. A policy rule reads it off Dimension A.
> - **AD-01A §3.4's standard** — *"correlation with Dimension A is high but not total, which is
>   precisely why it is a second dimension rather than a derivation of the first"* — says **make it a
>   dimension**, because the correlation is high but not total in both directions: an *Invalid* number
>   captured on one inquiry may be engagement-scoped if the person is reachable elsewhere, and
>   *Disqualified — outside the served area* is arguably relationship-scoped forever.
> - **AD-01A §3.3's admission test** — *each dimension value must be counted differently in at least
>   one report* — is **met**: §10 requires both *"redistributed Leads"* and a population that must
>   never be re-attempted.
>
> > **⟦BUSINESS DECISION REQUIRED — Z-5⟧** **Does AD-01A §8.3's framework require a fourth dimension —
> > closure scope — or is scope a policy rule read over Dimension A?** **Nothing is invented, no
> > dimension is added, no value is proposed, and §8.3 is not amended by this document.** The framework's
> > own two design standards point opposite ways, which is a question only its approver can settle.
> > **N-4 still owns all values under either answer, and until N-4 supplies them no reason-coded
> > reporting is defensible** (AD-01 §9.6, AD-01H §10.3, both confirmed).

---

## 4. V-12 manager redistribution

> **⟦ARCHITECT ANALYSIS⟧ V-12 as AD-01F §16.1 states it: *"Is management-initiated redistribution of a
> dumped record permitted, and what is the record's queue condition afterwards? It is neither revival
> (no customer event), nor correction (the Dump was right), nor a new opportunity."* Its recorded
> status: *"Described in §7; modelled by no prior AD document."***

### 4.1 Is redistribution "reopening" anything? — No, and the question dissolves

> **⟦ARCHITECT ANALYSIS⟧ I-5 — nothing is reopened, because nothing is closed that could be.**
>
> | Object | Was it closed? | Does redistribution touch it? |
> |---|---|---|
> | The **inquiry** | **Yes — permanently.** AD-01A §8.3 (approved): the reason is preserved, never rewritten. **R6**: never edited. AD-01C §2.5's strict terminality, relocated to the inquiry by AD-01H H-6, where it holds without exception. | **No. Never. Under any scenario in §5.** |
> | The **work record** | **No.** It never closed. AD-01G §4.1: *"Terminality — has none."* It is *"long-lived"* in the Product Owner's own words (**consolidated §4**). | **It is not reopened; it is re-staffed.** |
> | The **custody interval** | The prior one ended at the prior transfer. | **A new one opens.** That is the whole of the mechanical change. |
>
> **This is the same dissolution AD-01G §13 found for the returning-customer case, now obtained for the
> management case.** AD-01 §6.1's `Dump → Follow-up` edge — *"permitted only if Q5 says so"* — **is
> never required by redistribution under this model.** That is a statement about what the model needs,
> **not** a resolution of **Q5**, which remains open and is not narrowed.

### 4.2 Is it a separate management operation, or an instance of ordinary transfer?

> **⟦ARCHITECT ANALYSIS⟧ The task's framing offers a binary. The honest answer is neither half of it,
> and the distinction is worth stating precisely because the two candidate errors are symmetrical and
> both expensive.**

| Candidate answer | What it would cost |
|---|---|
| **"It is a distinct act with its own mechanism."** | A second transfer mechanism needs its own authorization surface (**M-3/M-7**), its own bulk handling (**R-10**), its own with/without-history decision (**R-12**, AD-01G §9.1) and its own audit treatment (§54) — **four duplications of machinery AD-01G has already placed on the transfer act**, with four opportunities to diverge. It also edges toward the reassignment-approval workflow **AD-01A §8.5 explicitly forbids inventing.** |
| **"It is just an ordinary transfer."** | **AD-01F §12.4** requires three acts — correction, re-engagement, redistribution — to be *"distinguishable in authorization and in reporting"*, with *"three distinct audit events (§54, R6)"*, because otherwise *"a true loss can be erased from a closed period, a false loss preserved, or a re-attempt double-counted as a fresh capture."* **AD-01H §16 item 3 states the asymmetry:** *"A management act performed as a bare reassignment, with no recorded decision, is indistinguishable afterwards from an ordinary transfer"* — and **unrecoverable**, per AD-01B §4's rework-asymmetry standard. |

> **⟦ARCHITECT RECOMMENDATION — I-4⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: relationships,
> authorization rules, audit requirements.)*
>
> **I-4 — Redistribution is *the same act* as an ordinary transfer, distinguished by a *third recorded
> output*: the management intent. It is one mechanism carrying a distinct, durable business semantic —
> not a second mechanism, and not an undifferentiated reassignment.**
>
> **AD-01G §9.1 already established the shape**: the transfer is *"one act with two outputs, the
> custody change and the visibility decision"*, and AD-01G §10.1 requires the Assignment Log to carry
> **provenance/method** as well. **I-4 adds a third output to the same act.** Nothing new is built; an
> existing canonical entity records one more fact about a decision a human is already making.
>
> **Why intent is not the same fact as provenance, stated so the two are not merged later.**
> *Provenance* answers *"how was this assignment produced — automatic routing, or deliberate management
> placement?"* (AD-01G §10.1, from **R-9**'s *"Automatic assignment"* row). *Intent* answers *"what is
> the receiving handler expected to do?"* **Both are deliberate management placements; only one carries
> a work mandate.** The §57 counter-example in §3.3 is precisely two acts with identical provenance and
> opposite intent. **Merging them reintroduces the bug A-2 exists to fix.**

### 4.3 What business event gets recorded

> **⟦ARCHITECT RECOMMENDATION — I-4 continued⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **Conceptual only. No field, column, type, table or value is proposed — R4 and Rule 1 govern, and the
> intent vocabulary is the Product Owner's, not the architect's.**)*
>
> One **Assignment Log** entry (§06, canonical) on the work record, carrying:
>
> | Fact | Already required by | New here? |
> |---|---|---|
> | Actor — **the manager, distinct from both handlers** | AD-01G §10.2; **R-9** (*"who performed the action and when"*); §54 | No |
> | From-handler, to-handler, timestamp | §06, §10, **R-9** | No |
> | **Provenance / method** — automatic vs deliberate placement | AD-01G §10.1 requirement 2 | No |
> | **The with/without-history decision (I3)** | AD-01G §10.1 requirement 1; **R-10**, **R-12** | No |
> | **The bulk act it belonged to**, where applicable | AD-01F §13.1 row 8; **R-10** | No |
> | **The management intent — whether a work mandate is conferred** | — | **Yes. This is the whole of I-4's addition, and it is A-2's fourth derivation input.** |
>
> **Three constraints on it, each inherited rather than invented:**
> 1. **Semantics in a column, never in a label** (**R4**). Reports, queues and escalation branch on what
>    the intent *means*, never on its code or its tenant-renameable name.
> 2. **Recorded at the moment of the act, and unrecoverable if not** — the identical discipline
>    AD-01G §9.3 constraint 2 and §10.1 apply to the history decision and to provenance, and AD-01E §7.1
>    established for provenance generally.
> 3. **Append-only** (**R6**). The act is a historical fact; a later change of mind is a new act.

### 4.4 Does redistribution change the Inquiry's disposition?

> **⟦ARCHITECT ANALYSIS⟧ I-5 (restated as the task poses it) — No. A redistributed closed inquiry does
> **not** become un-Dumped. It stays closed, with its classified reason, permanently. Something else
> changes: *custody*, and *intent*.**
>
> This is not a preference. It is forced three times over by decisions that are already recorded:
> **AD-01A §8.3** (approved — *"preserve the historical reason rather than silently rewriting business
> history"*), **R6** (append-only; never edit history), and **consolidated §31** (*"Preserve historical
> truth: do not rewrite what was true at the time"*). **AD-01C §3.4's principle applies exactly:
> a redistribution is not a correction — the closure was right when it was made, and management
> disagreeing about what to do next does not make it retrospectively wrong.**
>
> **The consequence that must be stated because it is the point of the whole decomposition:** a manager
> ordering a re-attempt is **not** asserting the closure was wrong, and the reporting must not read it
> as if they were. **AD-01F §12.4's row for redistribution — *"must not restate [the closed period] and
> must not create a new capture"* — is CONFIRMED and now has a mechanism that enforces it**, because
> nothing in I-4 touches either the inquiry or the capture.

### 4.5 Does redistribution create a new Inquiry, a new working context, both, or neither?

> **⟦ARCHITECT RECOMMENDATION — I-6⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.)*
>
> **A new working context only. Never a new inquiry. Never neither.**
>
> | Option | Verdict | Why |
> |---|---|---|
> | **A new inquiry** | **Rejected.** | It would manufacture a **Capture** with no customer event — precisely what AD-01F §12.4 forbids — and the fabricated inquiry would need an origination date, a source, a campaign and a project that **no customer supplied**, corrupting source and campaign analysis at its root (AD-01C **D5**). It would also create an attribution claim set out of a management decision, with §11/§32/§40 exposure. |
> | **Neither** | **Rejected.** | The custody interval opens whether or not anyone names it: it is `[assignment event, next assignment event)` (AD-01G §10.1). Denying it would deny the Assignment Log entry, which **R-9** requires. |
> | **A new working context (custody interval), and nothing else** | **Recommended.** | It is what actually happens, it needs no new entity (AD-01G **G-9**: the interval is *derived* over the log), and it is the unit per-handler FUT, per-handler first-response and the history boundary are all already scoped to (AD-01F §13.1 rows 1, 2, 9). |
>
> **The record therefore holds, immediately after redistribution: zero live inquiries, one new custody
> interval, one recorded work mandate, and no next-action commitment yet.** What that state *is called*
> operationally, and whether it surfaces in the §14 Action Feed, is **Z-3**.

### 4.6 Can a Lead be redistributed while ALL of its inquiries are closed?

> **⟦PRODUCT-OWNER DIRECTION⟧ R-8** describes the record as *"followed up and later dumped"* before the
> manager hands it on, and records **no customer act between the two**.

> **⟦ARCHITECT ANALYSIS⟧ Yes — and this is not an edge case, it is *the* case.** **R-8** describes
> exactly it: a client *"followed up and later dumped"*, handed *"to a fresher for another calling
> attempt"*, with the customer having done nothing. **AD-01H §11.3 named this as the gap H-4 leaves
> open and declined to close it. I-8 closes it structurally; Z-1, Z-2 and Z-3 are the business rules
> that remain.**
>
> **The converse is also true and is easy to miss: redistribution is *not confined* to that case.** A
> record with a live inquiry can also be transferred — that is an ordinary transfer (Scenario C, §5.4),
> and it needs no work mandate because input (i) already supplies the obligation. **The mandate is only
> load-bearing when nothing else produces an obligation**, which is why I-8 is a widening of the
> derivation and not a replacement of it.

### 4.7 How this differs from ordinary assignment and transfer

| Dimension | Ordinary assignment / transfer (AD-01G §9, §10) | Redistribution |
|---|---|---|
| **Mechanism** | The transfer act | **The same act.** I-4. |
| **Entity that records it** | Assignment Log (§06) | **The same entity.** |
| **Authorization surface** | Manager / Sales Head over the reporting hierarchy (**R-10**); breadth on a grant, never a role name (**R2**, **M-7**) | **The same surface.** No new permission concept is proposed. |
| **History-visibility decision** | Present, per **R-10**/**R-12**; conferral = I3 or its absence (AD-01G §9.1) | **Present and identical.** §9. |
| **Bulk** | Supported; one act, many records (**R-10**, AD-01G §10.2) | **Supported identically** — and this raises **Z-6**. |
| **Typical purpose** | Move **existing** work to a different person | **Create** work where the derivation produces none |
| **Effect on the derived condition when no inquiry is live** | **None** — the record stays inactive | **Confers a work mandate** (I-8) |
| **Reporting treatment** | A transfer. Neutral to capture and to closed periods | **Must not restate a closed period and must not create a Capture** (AD-01F §12.4, confirmed) |
| **Is the distinction recoverable if not recorded?** | — | **No.** AD-01B §4; AD-01H §16 item 3. This is the reason it must be a recorded semantic and not an inference. |

---

## 5. Redistribution scenarios

> **⟦ARCHITECT ANALYSIS⟧ Each of the five required scenarios is stated, judged valid or referred, and
> its resulting operational state is given. Where the sources do not establish an answer, it is marked
> `BUSINESS DECISION REQUIRED` and **nothing is invented**. Every scenario assumes AD-01H **H-1** (CE)
> and **H-4** as refined by **A-2**; none assumes any answer to **Y-1**.**

### 5.1 The state vocabulary these scenarios use

> **⟦ARCHITECT ANALYSIS⟧** Four derived facts, each computable from the four inputs under A-2. **None
> is a persisted value, none is a new lifecycle state, and none is proposed as a user-facing label.**
> They exist so the scenarios can be stated precisely.

| Derived fact | True when |
|---|---|
| **Commercially live** | At least one inquiry is non-terminal |
| **Work owed** | Commercially live, **or** a work mandate is recorded on the current custody interval and has not been discharged |
| **Worked in this context** | At least one qualifying activity falls in the current custody interval *(what qualifies is **AD-01F's V-4**, open — see I-14)* |
| **Next action committed** | A next-action timestamp exists on the record |

### 5.2 Scenario A — one Dumped inquiry; manager redistributes to a fresher; no new inquiry

> **⟦PRODUCT-OWNER DIRECTION⟧** This scenario is **R-8** verbatim: *"A manager may redistribute
> dumped/non-responding leads to a fresher for another calling attempt."* It is a **described
> operation**, not a candidate combination.

> **⟦ARCHITECT ANALYSIS⟧ VALID. It is the case the whole decision exists to make performable.**

| Fact | State immediately after the act |
|---|---|
| Inquiry A | **Closed. Unchanged. Reason preserved.** Not reopened, not re-dated, not re-classified (§4.4) |
| Work record | Never closed; no persisted value changes because it holds none |
| Custody | **Prior interval ends; a new interval opens** with the fresher as handler |
| Assignment Log | One entry: manager as actor, from-A, to-fresher, provenance = deliberate placement, **intent = work mandate**, history decision recorded or deliberately absent |
| Commercially live | **False** |
| Work owed | **True** — and it is true **only because of the recorded mandate**. Without I-8 this is false and the operation is unperformable (AD-01H §11.3) |
| Worked in this context | **False** — so *N-context* is true; the fresher sees a genuinely fresh working context |
| Next action committed | **False** |
| Capture / funnel | **Nothing.** No inquiry opened; no closed period restated (AD-01F §12.4) |
| Attribution / commission | **Untouched.** The commission engine reads no record-level value (AD-01H §12 row 5, confirmed) |

> **⟦BUSINESS DECISION REQUIRED — Z-2⟧** **Scenario A's validity is unconditional only when inquiry A's
> closure is engagement-scoped.** If A closed as *Fake Lead* / *CRM Test Query* / *Invalid number*, the
> sources do not establish whether the act is permitted, discouraged or blocked. §3.4. **Not invented.**

> **⟦BUSINESS DECISION REQUIRED — Z-3⟧** **Where does this record appear?** *Work owed = true, worked =
> false, no commitment* is exactly the shape of §14's Action Feed item (2) *"New leads"* — but **no
> source states that a redistributed record enters that feed**, and **R-4**'s observed *All-Without-Dump*
> filter cannot answer it, because under H-4 the value it keyed on no longer exists (AD-01H §11.4).
> **If the answer is "it appears nowhere", Scenario A is expressible and still not performable.**

### 5.3 Scenario B — the fresher actually starts calling; work resumes with no new inquiry

> **⟦ARCHITECT ANALYSIS⟧ VALID, and it is the scenario that most tests the model. It survives, with two
> referred questions.**

| Fact | State |
|---|---|
| Activities | **Recorded on the work record, referencing no inquiry.** Permitted without amendment: AD-01H **H-9** requires each entry to resolve to *"which inquiry it concerns, **where it concerns one**"* — **H-9 anticipated this case and is confirmed, not stretched** |
| FUT | **Increments, at record scope and at custody-interval scope** (AD-01F §13.1 row 1, confirmed). **This is the fresher's real workload and it is invisible to any inquiry-keyed count** — §10 |
| First response | **Custody→first-response** is the measure, and it is the *only* one that means anything here: creation→first and assignment→first both predate this interval (AD-01F §13.1 row 2 variant 3, reinforced) |
| Commercially live | **Still false.** Calling is not an inquiry |
| Inquiry A | **Still closed. Still unchanged.** |
| Capture / conversion denominator | **Still nothing** |

> **⟦ARCHITECT ANALYSIS⟧ The structural finding: *work and commerce genuinely decouple here, and the
> model already permits it.*** The record has a live **work** obligation and **no** live **commercial**
> obligation, simultaneously and legitimately. That is I-7, and §6 develops it.

> **⟦ARCHITECT ANALYSIS⟧ If the call succeeds**, the customer expresses interest and **a new inquiry
> opens** — dated, sourced, project-contexted, beside the closed one (**R-14**). From that instant the
> record is commercially live and everything is ordinary. **Whether that inquiry is a new commercial
> opportunity is V-14; whether it counts as a Capture is V-18; whether its source is the original
> channel or an outbound re-attempt is V-15 with AD-01C T-4. None is resolved here.**

> **⟦BUSINESS DECISION REQUIRED — Z-3 (second half)⟧** **May the fresher commit a next action while no
> inquiry is live** — e.g. *"call back on the 14th"*? **Structurally yes**: AD-01G §4.1 makes the
> next-action commitment a **work-record** property, not an inquiry property, so it has something to
> attach to. **Whether the product permits it is a business rule**, and **R-5**'s definition of
> *Follow-up* as *"requires next action/date"* was written for a live engagement and does not settle it.

> **⟦BUSINESS DECISION REQUIRED — Z-4⟧** **If the re-attempt fails, what records why?** There is no
> inquiry to close and closing one is forbidden. Under AD-01H H-6(d) the record-level condition carries
> no reason, so **the re-attempt ends with no reasoned outcome anywhere** — and *manager effectiveness*
> (§10) becomes unmeasurable in the one place it matters. §3.5. **Two candidate homes are named there;
> neither is adopted.**

### 5.4 Scenario C — customer generates a new inquiry; manager assigns to a new handler

> **⟦ARCHITECT ANALYSIS⟧ VALID — and the single most important finding about it is that *this is not
> redistribution at all*.**

| Sub-event | What it is | What it records |
|---|---|---|
| **1. The customer's new inquiry arrives** | A **customer event**. A new inquiry opens beside the closed one (**R-14**, AD-01H H-1/CE) | A dated, sourced, project-contexted inquiry; a timeline event naming the project (AD-01H §9.1); a new attribution claim set |
| **2. The manager assigns the record** | An **ordinary transfer**. **No work mandate is needed** — input (i) already yields *commercially live*, so the obligation derives without intent | An ordinary Assignment Log entry with its provenance and history decision |

> **⟦ARCHITECT ANALYSIS⟧ Resulting state:** one closed inquiry, one live inquiry (**CE — AD-01H H-1**),
> record commercially live and work owed, new custody interval, next action required by **R-5** and
> attachable to a real commercial unit. **Concurrency of *liveness* is not engaged — only one inquiry is
> live — so Y-1 is untouched.**
>
> **Why the distinction from Scenario A is load-bearing, and not pedantry.** The two scenarios end in
> superficially similar operational states — a new handler, working a record that was previously
> dumped — and **differ completely in everything that is reported**: Scenario C produces a Capture
> (subject to **V-18**), a source and campaign credit, an attribution claim, a project-level pipeline
> entry and a conversion-denominator entry. Scenario A produces **none of those**. **If the two are
> recorded by the same undifferentiated act, a management re-attempt is indistinguishable afterwards
> from customer-generated demand — which flatters capture volume, corrupts source analytics and, where
> a CP claim attaches, has §32/§40 commission exposure.** This is AD-01F §12.4's warning, instantiated.

### 5.5 Scenario D — two inquiries, both Dumped; manager redistributes before any new inquiry

> **⟦ARCHITECT ANALYSIS⟧ VALID, structurally identical to Scenario A, and it exposes three consequences
> Scenario A does not.**

| Fact | State |
|---|---|
| Inquiries A and B | **Both closed. Two separate preserved reasons, permanently distinct.** This is AD-01H §4.1 scenario 3 — *"one preserved-reason slot cannot hold two closures"* — confirmed from the management side |
| The act | **One act on the record, not two acts on two inquiries** |

> **⟦ARCHITECT ANALYSIS⟧ Consequence 1 — redistribution is a record-level act and has no inquiry
> subject.** It does not and cannot select *which* closure is being re-attempted. **I-6 is
> strengthened**: an act with no inquiry subject could not create a well-formed inquiry even if one
> wanted it to — there would be no honest project, source or origination to give it.

> **⟦ARCHITECT ANALYSIS⟧ Consequence 2 — the re-attempt has no project, therefore no project-level
> analytics and no §08 project scope.** Projects A and B gain nothing from the fresher's work, correctly:
> no demand was expressed. **This forces a note on V-24** (does §08 project scope evaluate at record or
> inquiry) — a project-scoped viewer sees a record with a work mandate and **no inquiry they are scoped
> to**. **V-24 is NOT resolved here**; the case is recorded so it is not discovered late.

> **⟦ARCHITECT ANALYSIS⟧ Consequence 3 — Z-4 sharpens.** Under Scenario A a failed re-attempt could at
> least be read informally against the single closure. Under Scenario D there is no closure it could
> even informally attach to. **Whatever answers Z-4 must work with no inquiry subject at all.**

### 5.6 Scenario E — Inquiry A = Success, Inquiry B = Dump; manager redistributes the record

> **⟦ARCHITECT ANALYSIS⟧ The structural half is settled and unconditional. The validity half is
> `BUSINESS DECISION REQUIRED` and is blocked on an item this document may not resolve.**

**What is settled, whatever the answer:**

| Fact | State |
|---|---|
| Inquiry A's **Success** | **Permanent and untouched.** Q6 (AD-01C §3.7), not reopened. The Booking owns the §20 Stage 3 milestone and its immutable snapshot (**Q4**, AD-01H H-8) |
| A's **commission entitlement** | **Untouched.** Redistribution changes no value the commission engine reads (AD-01H §12 row 5). **§33 clawback and §26 unit transfer are unaffected** |
| Inquiry B's closure | **Unchanged, with its preserved reason** |
| The record | Holds a permanent Success and a permanent closure simultaneously — **CE, AD-01H H-1**, valid and forced |

> **⟦BUSINESS DECISION REQUIRED — blocked on AD-01H's existing Y-4; no new item is minted⟧**
> **Whether a record holding a Success may be redistributed into an ordinary sales churn queue is
> exactly AD-01H's Y-4** — *"Does a Success on any one inquiry change the work-queue behaviour of the
> whole record?"* — which is **open and which this document must not resolve**. §06 makes *Customer* a
> **context** a Person is presented as, and §20/§36 place a converted client in a post-sale support and
> portal relationship; **nothing states whether such a client remains an ordinary sales-churn target.**
>
> - **If Y-4 = "a converted client stays in sales queues":** Scenario E is valid and reduces exactly to
>   Scenario A over inquiry B.
> - **If Y-4 = "a converted client leaves sales queues":** Scenario E is **invalid**, and so —
>   consistently — are AD-01H's Example 2 and scenario 6, which AD-01H already flagged as unperformable
>   under that branch.
>
> **Recorded consequence, and it is new:** **Y-4 is not only a queue-presentation question; it is also
> a *management-authorization* question.** Whether a manager may *order* churn work on a converted
> customer is a materially different question from whether the record *appears* in a feed, and Y-4 as
> AD-01H states it does not distinguish them. **This is a refinement of Y-4's statement, offered to
> whoever answers it. Y-4 is NOT answered, NOT narrowed and NOT given a preferred branch here.**

### 5.7 The five scenarios in one table

| Scenario | Valid? | New inquiry? | New custody interval? | Work mandate needed? | Commercially live after? | Blocking item |
|---|---|---|---|---|---|---|
| **A** — one Dumped inquiry, redistributed | **Yes** | No | Yes | **Yes** | **No** | **Z-2**, **Z-3** |
| **B** — fresher calls, no new inquiry | **Yes** | No | *(already open)* | Yes | **No** | **Z-3**, **Z-4** |
| **C** — customer re-inquires, then reassigned | **Yes** | **Yes** *(customer-generated)* | Yes | **No** | **Yes** | V-14 / V-18 / V-15 *(classification only, not validity)* |
| **D** — two Dumped inquiries, redistributed | **Yes** | No | Yes | **Yes** | **No** | **Z-2**, **Z-3**, **Z-4**, note on V-24 |
| **E** — Success + Dump, redistributed | **`BUSINESS DECISION REQUIRED`** | No | Yes | Yes | **No** | **AD-01H Y-4** |

---

## 6. V-4 reactivation model

> **⟦ARCHITECT ANALYSIS⟧ Scope, stated first because of the numbering collision. This section answers
> the **reactivation** question this task labels V-4. It does **not** answer **AD-01F §16.1's V-4**
> (*does a non-connected contact attempt count as a qualifying user follow-up*), which is a different
> question, remains **OPEN**, and is discussed at **I-14** / §14.6.**

### 6.1 The two events the architecture must never merge

> **⟦ARCHITECT RECOMMENDATION — I-7⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** §88 MUST-ASK: relationships,
> source-of-truth rules.)*
>
> **I-7 — "Operationally active" and "commercially active" are two different conditions with two
> different producers, two different lifetimes and two different reporting effects. The architecture
> must carry both, and must never derive one from the other.**
>
> | | **Operational activation** | **Commercial activation** |
> |---|---|---|
> | **Produced by** | A **management** act — redistribution with a work mandate | A **customer** act — a new expression of interest |
> | **What it asserts** | *Someone is expected to work this record* | *A new engagement exists, with a date, a source, a channel and a project* |
> | **Creates a new inquiry?** | **No — never** (I-6) | **Yes — always** (**R-14**) |
> | **Enters the conversion denominator?** | **No** | **Subject to V-18 — not resolved** |
> | **Carries a source / campaign / channel?** | **No.** There is no customer message to attribute | **Yes**, per inquiry (AD-01C **D5**, AD-01G §5.1) |
> | **Carries an attribution claim?** | **No.** A management decision is not a producer's claim (§11, §32, §40) | **Yes** |
> | **Has a project?** | **No** (§5.5 consequence 2) | **Yes** |
> | **Restates a closed period?** | **No — forbidden** (AD-01F §12.4) | **No — forbidden.** The prior loss stands |
> | **Derived from** | Input **(iv)** — the recorded mandate (**I-8**, **A-2**) | Input **(i)** — inquiry states |
> | **Can it exist without the other?** | **Yes — Scenarios A, B, D** | **Yes — a customer re-inquires with no management act at all** |

> **⟦ARCHITECT ANALYSIS⟧ The four propositions the task puts, answered individually:**
>
> | Proposition | Answer | Basis |
> |---|---|---|
> | *Redistribution alone can create work without creating a new Inquiry* | **Yes.** | **R-8** describes it; I-6 and I-8 make it representable |
> | *A new customer inquiry creates a new Inquiry* | **Yes** — and it is uncontroversial | **R-14**; AD-01G G-5; AD-01H H-1 |
> | *Both can cause the record to become operationally active* | **Yes** — by two different inputs, never by one collapsed rule | I-7 |
> | *Only a genuinely new Inquiry creates a new active **commercial** obligation* | **Yes, and this is the load-bearing half.** A work obligation is not a commercial obligation | I-7; AD-01F §12.4 |

### 6.2 The critical model test — does AD-01H's H-4 survive?

> **⟦ARCHITECT ANALYSIS⟧ The task poses the test directly: all inquiries closed, manager redistributes,
> fresher begins churn calling, customer has submitted nothing. If the fresher can legitimately be
> expected to work the record, something must represent that obligation. **What?***

**The answer, and the discipline applied to reaching it.**

| Question the task sets | Answer |
|---|---|
| **Can the fresher legitimately be expected to work it?** | **Yes.** **R-8** says so in the Product Owner's own words: *"for another calling attempt."* |
| **Does anything in the current architecture represent that obligation?** | **Not under H-4 as written.** §3.3 shows all three of its inputs yield nothing, and that the near-miss (input (iii)) fails on the §57 counter-example. **AD-01H §11.3 says the same thing about itself.** |
| **Is a new canonical entity required?** | **No.** The obligation is a property of a **management act**, and the act already has a canonical home: the **Assignment Log** (§06), which **AD-01G §10.1 already requires to carry two additional facts of exactly this kind.** |
| **Is a new lifecycle state or persisted record value required?** | **No.** The record still carries nothing. **Model D survives intact** — this widens its derivation, it does not re-persist anything. |
| **Is anything invented?** | **The *shape* is not** — it is AD-01G §9.1's *"one act, two outputs"* extended to three, using an entity §06 names. **The *values* are not proposed** (**R4**, Rule 1, N-4's discipline). **The *rules* are not invented — they are referred as Z-1, Z-2, Z-3, Z-4, Z-6.** |

> **⟦ARCHITECT ANALYSIS⟧ Why this is a widening and not a rescue — the consistency check that matters.**
> **AD-01H §4.3 did the identical thing to Model B**: it found Model B *"right in shape and insufficient
> in its derivation inputs"*, widened the inputs, and observed that *"at which point Model B **is**
> Model D."* **This document applies AD-01H's own method to AD-01H's own conclusion.** If widening
> derivation inputs was a legitimate repair for Model B, it is a legitimate repair for Model D. **If it
> is not legitimate, then AD-01H's own path from B to D is unsound — and the Product Owner should be
> told that rather than have the inconsistency buried.**

> **⟦ARCHITECT ANALYSIS⟧ What the recommendation deliberately does NOT claim.** It does **not** claim
> that the fresher's obligation is *the same kind of thing* as a follow-up obligation on a live
> inquiry. It is weaker in every respect: it has no project, no source, no attribution, no conversion
> consequence, no §08 scope, and — per **Z-1** — possibly no defined end. **A model that treated them
> as the same would let a management re-attempt be counted as demand, which is the error AD-01F §12.4
> exists to prevent.**

### 6.3 What makes a Lead operationally active again — the direct answer

> **⟦ARCHITECT RECOMMENDATION — consolidated for V-4·reactivation⟧** *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED.**)*
>
> **A work record becomes operationally active again through exactly one of two independent routes, and
> the system must be able to say which:**
>
> 1. **A customer expresses new interest** → **a new inquiry opens** → the record is **commercially
>    live**, and therefore also work-owed, through input (i). **No management act is required.**
> 2. **Management confers a work mandate on a new custody interval** → the record is **work-owed and
>    not commercially live**, through input (iv). **No customer act is required, and no inquiry opens.**
>
> **Neither route makes the other true. Neither route reopens anything. Neither route rewrites any
> historical fact.** Route 2 is the one AD-01H §11.3 could not express; route 1 is the one AD-01G §13
> showed already dissolves.

> **⟦BUSINESS DECISION REQUIRED — Z-1⟧** **Does a work mandate end, and on what basis?** A mandate that
> never expires means a fresher's working set accumulates permanently-owed records with no commercial
> unit — **reproducing R-7's 7,000-record problem in the mechanism built to relieve it**. A mandate that
> expires needs a horizon, and **AD-01E U-4 established that no dormancy threshold exists anywhere in
> the sources** (*"§58 sets no numbers"*). Candidate discharge conditions exist — the fresher's own
> queue-exit act, a new inquiry opening, elapsed time, a bounded attempt count — and **none is
> recommended, preferred or ranked here.** Full statement in §13.

---

## 7. Lead vs Inquiry consequences

> **⟦ARCHITECT ANALYSIS⟧ What the V-11, V-12 and V-4·reactivation answers do to the AD-01G / AD-01H
> Lead / Inquiry split. AD-01G **G-1**, **G-2**, **G-5** and AD-01H **H-1** are confirmed throughout;
> nothing below reopens them.**

### 7.1 What each object owns after this decision

| Fact | Owner | Change from AD-01H | Label |
|---|---|---|---|
| **Commercial closure + classified, preserved reason** | **Inquiry** | **None. CONFIRMED.** H-6's inquiry half survives every test in §3 and §5 | ⟦ARCHITECT ANALYSIS⟧ |
| **Conversion, referencing the Booking** | **Inquiry** | **None. CONFIRMED** (H-8, Q4 not reopened) | ⟦ARCHITECT ANALYSIS⟧ |
| **Source, campaign, channel, project, attribution claim set** | **Inquiry** | **None. CONFIRMED**, and reinforced: **a redistribution has none of these, which is precisely why it must not create an inquiry** (I-6) | ⟦ARCHITECT ANALYSIS⟧ |
| **Queue-exit work condition** | **Work record × custody interval**, derived | **None in substance. CONFIRMED** (H-6(a)) | ⟦ARCHITECT ANALYSIS⟧ |
| **Next-action commitment** | **Work record** | **None. CONFIRMED** (AD-01G §4.1) — and its record-level placement is what makes Scenario B structurally representable (**Z-3**) | ⟦ARCHITECT ANALYSIS⟧ |
| **Handler, timeline, FUT, assignment history** | **Work record** | **None. CONFIRMED** (T1) | ⟦ARCHITECT ANALYSIS⟧ |
| **Work mandate / management intent** | **The assignment act, on the Assignment Log** | **NEW — I-8 / A-2.** Not on the record, not on the inquiry, not a new entity | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Redistribution eligibility (C3)** | **Not an owned value anywhere.** A management judgement, exercised in the act; possibly constrained by the inquiry's validity class (**Z-2**) | **Completes H-7's positive half** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **Re-engagement eligibility (C4)** | **Derived** from the inquiry's Dimension C + the **V-14/Q5** rule | **None. CONFIRMED** (AD-01A §3.5) | ⟦ARCHITECT ANALYSIS⟧ |
| **Relationship-level "never workable" (C5)** | **Derived** from the inquiry's Dimension A + C — **with its *scope* unrecorded (Z-5)** | **Identifies the one genuine framework gap** | ⟦ARCHITECT ANALYSIS⟧ |

### 7.2 The one asymmetry this decision creates, stated because it is easy to miss

> **⟦ARCHITECT ANALYSIS⟧** After this decision, the work record can hold a **work obligation with no
> commercial unit**, but an inquiry can never hold a **commercial obligation with no work record**.
> The relationship is deliberately one-directional, and it follows from AD-01G §5.2 (*an inquiry is
> "not a handler, a queue row, a next-action commitment, or a timeline of its own"*) plus I-7.
>
> **Consequence:** *number of live inquiries* is a **lower bound** on, never equal to, *number of
> records being worked*. **Any report that treats them as interchangeable will understate handler
> workload by exactly the redistribution population** — which is the population the Product Owner
> created the mechanism for. §10 states the fact this requires.

### 7.3 Where AD-01G's baseline is confirmed and where it is extended

| AD-01G position | Effect of this decision | Label |
|---|---|---|
| **G-1 / G-2** — the Lead / Inquiry split | **CONFIRMED and tested a second way.** It survives the management-side scenarios as it survived the concurrent-interest ones | ⟦ARCHITECT ANALYSIS⟧ |
| **G-5** — a new inquiry is not a new Lead and not necessarily a new opportunity | **CONFIRMED.** Scenario C instantiates it; **V-14 remains open** | ⟦ARCHITECT ANALYSIS⟧ |
| **G-8** — read-time projection, never write-time mutation | **CONFIRMED and unweakened.** I-8 persists a fact about an **act**, never a projection of a condition; the condition stays derived | ⟦ARCHITECT ANALYSIS⟧ |
| **G-9** — the custody interval is derived, not an entity | **CONFIRMED and reused.** I-6's *"new working context"* is a derived interval, not a new object | ⟦ARCHITECT ANALYSIS⟧ |
| **§4.1** — *"Terminality — has none"* | **CONFIRMED as a statement of silence, and distinguished from AD-01H H-6(c)'s statement of prohibition.** §3.4 | ⟦ARCHITECT ANALYSIS⟧ |
| **§9.1** — the transfer is *"one act with two outputs"* | **EXTENDED to three outputs** (custody · visibility decision · intent). **AD-01G is not edited.** This is a refinement of a shape AD-01G established, not a contradiction of it | ⟦ARCHITECT RECOMMENDATION⟧ |
| **§10.1** — the Assignment Log must carry the history decision and provenance | **CONFIRMED, and a third fact added by I-8.** The *"unrecoverable if not recorded at the moment of the act"* discipline is inherited unchanged | ⟦ARCHITECT RECOMMENDATION⟧ |

### 7.4 AD-01H's Sales Episode rejection (H-10) — re-tested, and it still stands

> **⟦ARCHITECT ANALYSIS⟧ A document that introduces a work mandate must say plainly whether it has
> rebuilt AD-01E's episode under another name. It has not, and the test is the same one AD-01G §4.3 and
> AD-01H H-10 applied.**
>
> | Property AD-01E §11 R2 required of an episode | Where it sits here | Is that an episode? |
> |---|---|---|
> | Its own lifecycle value | **Nowhere.** The mandate is a fact on an act, with no states and no transitions | **No** |
> | Its own source, campaign, channel | **Nowhere.** A redistribution has none (I-7) | **No** |
> | Its own terminal disposition and preserved reason | **Nowhere — and Z-4 is exactly the open question of whether it should.** If Z-4 is answered *"record an outcome on the act"*, that is still an attribute of an Assignment Log entry, **not a bounded commercial unit** | **No, on either answer** |
> | Its own attribution claim set | **Nowhere.** Deliberately (I-6) | **No** |
> | Its own activity association | The **custody interval**, derived over the log — AD-01G **G-9**, already the answer | **No** |
>
> **⟦ARCHITECT ANALYSIS⟧ H-10 is CONFIRMED, with its conditionality on G-1 unchanged.** No new canonical
> entity is proposed by this document. **The one thing that must be watched: if Z-4 is answered by
> giving the re-attempt its own reasoned outcome *and* Z-1 is answered by giving it a defined lifetime,
> the combination begins to acquire episode-shaped properties. The Product Owner should answer those two
> knowing that, and this document flags it rather than pre-empting it.**

---

## 8. Assignment/work-context consequences

> **⟦ARCHITECT ANALYSIS⟧ AD-01A §8.5 is confirmed throughout this section. No persisted assignment-state
> axis is reintroduced at any level, no reassignment-approval workflow is invented, and no permission
> vocabulary is proposed — M-3 and M-7 own that and are not resolved.**

### 8.1 What is unchanged

| Property | Status | Label |
|---|---|---|
| One handler, one queue row, one timeline, one assignment history per work record | **CONFIRMED** (T1; AD-01G §4.1; AD-01H §11.1) | ⟦ARCHITECT ANALYSIS⟧ |
| Owner and Handler remain two references (§10); the **Assignment Log** owns the history (§06) | **CONFIRMED** | ⟦ARCHITECT ANALYSIS⟧ |
| The work record is the unit of assignment, transfer and **bulk** transfer; a transfer moves the record and **all** its inquiries, because inquiries have no handler | **CONFIRMED** (AD-01G §5.2; AD-01H §11.1) — and **§5.5 confirms it from the management side: redistribution has no inquiry subject** | ⟦ARCHITECT ANALYSIS⟧ |
| Custody intervals are **derived** over the Assignment Log | **CONFIRMED** (**G-9**) | ⟦ARCHITECT ANALYSIS⟧ |
| **AD-01 E-04** — reassignment must not move the lifecycle | **CONFIRMED and still unviolatable by construction.** There is no record-level lifecycle to move, and I-8 does not create one | ⟦ARCHITECT ANALYSIS⟧ |
| **AD-01A §8.5** — no reassignment-approval workflow | **CONFIRMED.** I-4 adds a recorded fact to an act a manager already performs. **It adds no step, no approval, no second actor and no gate** | ⟦ARCHITECT ANALYSIS⟧ |

### 8.2 What changes

> **⟦ARCHITECT RECOMMENDATION⟧**
>
> - **The assignment act acquires a third output** (§7.3). One act; three facts; one audit event (§54).
> - **The work queue's membership rule acquires a second producer.** Before this decision, membership
>   derived from commercial state and timing alone. After it, a record may be in a handler's working set
>   **because management put it there**, with no commercial unit underneath. **This is the substantive
>   operational change and the Product Owner should approve it knowingly.**
> - **AD-01H §11.4's redefinition of the *All-Without-Dump* filter becomes definable.** AD-01H recorded
>   that **R-4**'s primary working filter *"has no direct counterpart under H-4"* and left its
>   definition to V-11. Under I-1 and I-8 its real meaning is expressible as *"records with a live work
>   obligation for me"* — which is now a well-formed derived condition over four inputs. **What it
>   evaluates to for a mandated-but-unworked record is Z-3**, and **the filter is not specified here**
>   (that is information architecture, and out of scope).

### 8.3 Bulk redistribution — the case the sources describe and the model must not fumble

> **⟦ARCHITECT ANALYSIS⟧** **R-10** gives the manager bulk selection explicitly, and **R-7** makes bulk
> the *normal* case rather than the exception: nobody redistributes 7,000 records one at a time. AD-01G
> §10.2 already requires the history decision to be recorded **per record** even when the act is bulk,
> because *"how many records were transferred without history, by whom, last quarter"* is a §54 audit
> question. **The same question now arises for intent, and the sources do not answer it.**

> **⟦BUSINESS DECISION REQUIRED — Z-6⟧** **Is the management intent uniform across a bulk act, or
> recorded per record?** A manager pushing 300 dumped records to three freshers is one intent. A manager
> absorbing a departed employee's book under **§57** is pushing **live and closed records together in
> one act**, where the intent differs per record — and a uniform intent would confer a work mandate on
> every closed record in the batch, **reproducing exactly the §57 failure mode I-8 exists to prevent.**
> **Unrecoverable if decided by implementation** (AD-01B §4; AD-01G §9.3 constraint 2). Full statement
> in §13.

### 8.4 What redistribution presupposes about management visibility

> **⟦ARCHITECT ANALYSIS⟧ A forced consequence, recorded because it is a constraint on a *different*
> open question and must not be lost.**
>
> **A manager cannot decide whether to redistribute a record without being able to see why it was
> closed and what was already attempted.** Redistribution therefore **presupposes I2 management breadth
> over closed records and their prior custody intervals**. That is already guaranteed: **AD-01G §9.3
> constraint 1** states that any withholding capability *"must never apply to I2"*, on the ground that
> *"a withholding control capable of blinding management would make the record unreviewable by the
> people who must review it."* **Confirmed, and given a second independent reason.**
>
> **Nothing new is decided.** **M-7** still owns the breadth vocabulary; **R2** still forbids branching
> on a role name; **W-3** still owns the eighth-case question.

---

## 9. History visibility dependencies

> **⟦ARCHITECT ANALYSIS⟧ V-7 is NOT resolved, NOT re-argued and NOT narrowed. AD-01G's answer — the
> two-boundary model with entitlement as the union I1 ∪ I2 ∪ I3, fail-closed — is treated as the
> baseline. This section states **only** how redistribution interacts with it, as the task directs.**

### 9.1 Is redistribution materially different from an ordinary transfer for visibility purposes? — No

> **⟦ARCHITECT ANALYSIS⟧ I-12 — redistribution is not a new visibility case. It is the *paradigm
> instance* of the case AD-01G already solved, and AD-01G says so explicitly about this very
> operation.**
>
> AD-01G §8.2, in its own words: *"Consolidated §7's redistribution case does not supply [the eighth
> case] either — it describes handing a dumped record **'to a fresher'**, and a fresher is by
> construction **not the prior handler**."*
>
> | AD-01G §8.2 case | How redistribution instantiates it |
> |---|---|
> | **Case 4** — manager transfers *without* history | The manager records no conferral. **Nothing is denied; nothing is hidden by rewriting.** |
> | **Case 5** — the receiving handler works without seeing prior history | **Fail-closed.** The fresher has no **I1** (never held the record, is the actor on no prior activity) and no **I3**. They see their own interval only. |
> | **Case 2 / 3** — transfer *with* history | The manager records an **I3** conferral on the act. The fresher sees the preceding intervals. |
>
> **⟦ARCHITECT RECOMMENDATION⟧ No denial model is required by redistribution, and none is proposed
> here.** AD-01G §8.2's finding that *"the evidence does not generate a requirement for a withholding
> capability"* is **CONFIRMED** and, on this operation, **strengthened** — because a fresher is by
> definition a non-participant, which is the exact population the fail-closed default already serves.
> **AD-01G §9.3's escape hatch remains unneeded on this evidence and is neither adopted nor removed.**

### 9.2 Does redistribution imply a *mandatory* history-visibility choice?

> **⟦ARCHITECT ANALYSIS⟧ It is the case where the default matters most — and answering it is V-8, which
> this document does not resolve.**
>
> - **The interaction, stated:** redistribution's *stated purpose* is a **fresh calling attempt**
>   (**R-8**). **R-11** records that on automatic assignment of a revived lead *"New handler does not
>   automatically see prior employee history"*, and **R-12** gives the manager the explicit choice.
>   **The business reason for the act is therefore itself an argument about history** — which is not
>   true of an ordinary transfer, where continuity is usually the point.
> - **What follows, and what does not.** It follows that redistribution is the assignment kind where a
>   wrongly-chosen **default** does the most damage in both directions: a default of *with history*
>   contradicts **R-11**'s described behaviour, and a default of *without history* silently discards
>   context on every ordinary transfer that happens to follow a closure. **It does not follow that the
>   choice must be mandatory, nor what the default should be. That is AD-01F V-8** — *"Is the
>   with/without-history choice mandatory on every transfer, what is the default, may it be changed
>   after the fact, and by whom?"* — **which is OPEN and is NOT resolved, narrowed or given a preferred
>   branch here.** AD-01G §10.2 already states the governing principle: *"a default chosen by
>   implementation is an authorization rule chosen by implementation (§88, Spec Rule 4)."*

### 9.3 Two further interactions, recorded and not resolved

> **⟦ARCHITECT ANALYSIS⟧**
>
> 1. **Redistribution does not discriminate between V-5's two sub-readings of *New*.** Under AD-01H
>    §6.3, reading **(3a)** is custody-scoped and **(3b)** is entitlement-scoped. For a fresher, both
>    return *New*: no activity falls in their interval **(3a)**, and they are entitled to none of the
>    prior ones **(3b)**. **This case cannot be used as evidence for either branch. V-5 is not resolved
>    or narrowed here** — the finding is recorded so the case is not mistaken for evidence later.
> 2. **AD-01E §6.8's inference channel acquires a new instance, and it is a management-shaped one.**
>    Under I-8 the fresher's derived work condition is computed partly from a **management intent** they
>    may or may not be entitled to read, and partly from inquiry states they may not be entitled to see.
>    A fresher who can tell *"this was handed to me as a re-attempt"* from *"this arrived normally"* has
>    learnt something about the record's prior history from a derived condition alone. **Recorded as a
>    consequence. The surface question is V-9/V-10 and is NOT resolved here.**

### 9.4 What is explicitly not concluded

> **⟦ARCHITECT ANALYSIS⟧** **V-7 remains as AD-01G answered it.** **V-8, V-9, V-10, V-24, V-25, W-3**
> and **M-3/M-7** are **untouched**. **No new entitlement input is proposed, no fourth input beside
> I1/I2/I3 is introduced, no deny or withholding capability is recommended, and no permission
> vocabulary appears anywhere in this document.**

---

## 10. Reporting/analytics consequences

> **⟦ARCHITECT ANALYSIS⟧ Business facts only. No SQL, no query, no dashboard, no chart, no metric
> presented as approved.** Consolidated **§25** sets the standard: metrics *"must be based on durable
> business facts rather than UI-only counters."* **AD-01F §13's fourteen rows, AD-01G §12's ten rows and
> AD-01H §10's additions are UPHELD and not restated.** What follows is only what the V-11, V-12 and
> reactivation answers change or add.

### 10.1 The durable business facts each required report needs

| # | Reporting need (as the task names it) | Durable business fact required | Keyed at | Breaks if missing or mis-keyed | Label |
|---|---|---|---|---|---|
| **1** | **Number of dumped inquiries** | Each inquiry's **terminal non-conversion outcome** with its closure timestamp | **Inquiry** | Counted at the record, a client with three closed interests reports as one loss and AD-01 §9.1's denominator contamination returns. **Queue-exit acts must be excluded entirely** or the same record counts as a loss once per handler (AD-01F §13.1 row 11, confirmed) | ⟦ARCHITECT ANALYSIS⟧ |
| **2** | **Dump reasons** | The closure's **three approved semantic columns** — validity class, responsibility locus, recoverability posture (AD-01A §8.3). **Reports branch on the semantics, never on a code or a tenant-renameable label (R4)** | **Inquiry** | **Nothing is defensible until N-4 supplies values** (AD-01 §9.6, AD-01H §10.3, confirmed). **Z-5 determines whether closure scope is separately reportable** | ⟦ARCHITECT ANALYSIS⟧ |
| **3** | **Active Leads** | **Two facts, not one: (a) records with ≥1 non-terminal inquiry — *commercially live*; (b) records with a live work mandate and no live inquiry — *operationally live only*** | Work record | **This is the single most consequential reporting change in this document.** One number silently drops the entire redistribution population — the population management created the mechanism for — from every workload figure. §7.2 | ⟦ARCHITECT RECOMMENDATION⟧ |
| **4** | **Inactive Leads** | The complement, **similarly split**: (a) no live inquiry and no mandate; (b) no live inquiry, mandate discharged or expired (**Z-1**) | Work record | A single *inactive* count conflates *"nothing to do"* with *"we tried again and stopped"* — two different management facts | ⟦ARCHITECT ANALYSIS⟧ |
| **5** | **Redistributed Leads** | **Assignment Log entries carrying a work-mandate intent**, with actor, timestamp, to-handler and bulk-act grouping | **Assignment Log** | **Unrecoverable if the intent is not recorded at the moment of the act.** Afterwards a redistribution is indistinguishable from an ordinary transfer (AD-01H §16 item 3; AD-01B §4) | ⟦ARCHITECT RECOMMENDATION⟧ |
| **6** | **Manager redistribution activity** | The **actor** on those entries, plus the **bulk act** they belonged to, plus the **history decision** each carried | **Assignment Log** | Without the bulk grouping, one act on 300 records reads as 300 management decisions; without the actor, §54's audit purpose fails (AD-01F §13.1 row 8, extended) | ⟦ARCHITECT ANALYSIS⟧ |
| **7** | **Reactivation** | **Two facts that must never be one number: (a) commercial reactivation — a new inquiry opened on a record whose prior inquiries were all terminal; (b) operational reactivation — a mandated custody interval opened on such a record** | (a) **Inquiry**; (b) **Assignment Log** | **Merging them lets a management re-attempt be counted as customer demand** — AD-01F §12.4's central warning, and the direct reporting expression of **I-7** | ⟦ARCHITECT RECOMMENDATION⟧ |
| **8** | **New inquiry after previous dump** | The new inquiry's **origination timestamp** and the prior closure's timestamp on the same record; and, if the comparison is per project, the project of each | **Inquiry** | **Whether same-project re-inquiries group is Y-3; whether the second counts as a Capture is V-18; whether it is a new opportunity is V-14. All three OPEN; the raw facts are preserved under any answer** (AD-01G **T14**, confirmed) | ⟦ARCHITECT ANALYSIS⟧ |
| **9** | **First follow-up after redistribution** | **Custody→first-qualifying-activity**, where the interval was opened with a work mandate | **Custody interval** | Creation→first and assignment→first both predate the interval and measure a different handler's behaviour. **AD-01F §13.1 row 2's third variant moves from *new* to *required*.** **What counts as *qualifying* is AD-01F's V-4 — OPEN (I-14), and it gates this number** | ⟦ARCHITECT ANALYSIS⟧ |
| **10** | **Time from redistribution to first follow-up** | The same two timestamps, with **effective time and recorded time held separately** (AD-01 §8.3 **E-23**) | **Custody interval** | Conflating effective and recorded time corrupts every duration after an offline sync (§12/§47). **Timezone and working-hour semantics are V-20 / M-6 — not resolved** | ⟦ARCHITECT ANALYSIS⟧ |
| **11** | **Conversion after redistribution** | The converting **inquiry**, the **Booking** it references, and **which custody interval its origination fell in** | **Inquiry → Booking**, joined through the custody interval | **No new fact is required** — AD-01H **H-9** clause (ii) already requires every business-history entry to resolve to its custody interval. **Recorded as a confirmation.** Note that under I-6 a post-redistribution conversion necessarily involves a **new** inquiry that opened during the mandated interval | ⟦ARCHITECT ANALYSIS⟧ |
| **12** | **Employee workload** | **FUT at custody-interval scope** (AD-01F §13.1 row 1), **plus the count of records held under an undischarged work mandate with no live inquiry** | **Actor × custody interval** | **Inquiry-keyed workload understates the fresher's real load by exactly their redistribution book** (§7.2). Actor identity must survive deactivation (**§57**) | ⟦ARCHITECT RECOMMENDATION⟧ |
| **13** | **Manager effectiveness** | Redistribution acts by actor; the **outcomes of the intervals they opened** — first response, whether a new inquiry followed, whether a conversion followed | **Assignment Log × custody interval** | **Obstructed by Z-4**: a re-attempt that fails produces no reasoned outcome anywhere under AD-01H H-6(d), so the denominator of *"re-attempts that went nowhere"* exists but its *why* does not | ⟦ARCHITECT ANALYSIS⟧ |

### 10.2 Four constraints on all of the above

> **⟦ARCHITECT ANALYSIS⟧**
>
> 1. **Queue exit must never enter loss analysis.** AD-01F §13.1 row 11 states it and this document
>    makes it structural: under I-1, C2 carries no reason and no commercial claim, so it has nothing to
>    contribute to a loss report and must not be counted as one. **A redistributed record must not
>    appear as a second loss.**
> 2. **Redistribution must not restate a closed period and must not create a Capture.** AD-01F §12.4's
>    third row, **CONFIRMED and now mechanically guaranteed** — I-6 creates no inquiry and I-5 touches
>    no closure, so there is nothing a redistribution *could* restate.
> 3. **Reports branch on semantics, never on codes.** **R4**, restated by AD-01 §9.7 and AD-01F §13.2
>    item 2. This now extends to the **intent** semantic on the assignment act: a report asking *"how
>    many redistributions last quarter"* must branch on what the intent **means**, never on its
>    tenant-renameable name.
> 4. **Nothing above is promised as a chart, and row 13 in particular is not authorised as a feature.**
>    AD-01 §9.6 stands unchanged and is widened by nothing here. **AD-01A §3.3 declined to authorise a
>    CP scorecard on identical reasoning** — *"§39 permits a CP to see attribution information … and
>    says nothing about scoring CPs. That would be a new product requirement."* **The same holds for
>    scoring managers or freshers on redistribution outcomes: this document requires the *facts* to be
>    preserved and authorises no evaluation product built on them.**

---

## 11. Alternatives

> **⟦ARCHITECT ANALYSIS⟧ The four models the task names are stated at their strongest and tested.
> Implementation simplicity is not a criterion. Two further models were constructed honestly and are
> recorded with their rejections, so their absence is a finding rather than an omission.**

### 11.1 The four models the task poses

| Model | Statement | Verdict |
|---|---|---|
| **A — Inquiry-only** | Dump exists only as the inquiry's commercial closure. There is no record-level queue concept at all | **REJECTED** — §11.1.1 |
| **B — Lead-only** | Dump exists only as a record-level disposition | **REJECTED** — §11.1.2 |
| **C — Inquiry disposition + derived record condition** *(AD-01H's provisional answer)* | H-6 | **RECOMMENDED, with two completions and one refinement — §11.1.3** |
| **D — another model** | Two were constructed | **Neither is needed — §11.2, §11.3** |

#### 11.1.1 Model A, tested

| Test | Result | Label |
|---|---|---|
| **The R-7 workload case** | **Fails catastrophically.** 7,000 fabricated commercial closures, each permanent under **R6**, each entering AD-01 §9.1's denominator and mispricing the source that produced it (AD-01A §3.3). **The rep is compelled to assert something false about the market in order to manage their own calendar** | ⟦ARCHITECT ANALYSIS⟧ |
| **AD-01 §3's test** | **Fails.** C1 and C2 are demonstrably independent (§2.3), and Model A puts them on one axis | ⟦ARCHITECT ANALYSIS⟧ |
| **R-4's observed filter** | **Unexplained.** A first-class *All-Without-Dump* filter over a record-level working set is evidence that a **record-level** notion of exclusion exists in the operation. Model A has none | ⟦ARCHITECT ANALYSIS⟧ |
| **Scenario B** | **Inexpressible.** A fresher working a record with no live inquiry has no representable working relationship with it at all | ⟦ARCHITECT ANALYSIS⟧ |

#### 11.1.2 Model B, tested

| Test | Result | Label |
|---|---|---|
| **AD-01H §4.1's six scenarios** | **Fails all six.** Not restated | ⟦ARCHITECT ANALYSIS⟧ |
| **AD-01F §10.2's C-6** | **Fails.** The fresher receives a record the system says needs no follow-up, with **R-5**'s mandatory next-action date having nothing to attach to, in no §14 feed, invisible to §58 escalation, and filtered out by **R-4**'s own filter | ⟦ARCHITECT ANALYSIS⟧ |
| **Two closures, one record** | **Fails.** Scenario D's two preserved reasons cannot share one slot, and AD-01A §8.3 forbids the overwrite outright | ⟦ARCHITECT ANALYSIS⟧ |
| **Scenario E** | **Fails.** One value cannot be simultaneously Success and Dump | ⟦ARCHITECT ANALYSIS⟧ |

#### 11.1.3 Model C, tested — and this is the challenge the task requires

> **⟦ARCHITECT ANALYSIS⟧ Model C is not rubber-stamped. It is tested against all five concepts and
> against the redistribution-eligibility question, and it passes three of six tests outright, passes
> two by absorbing them as projections, and fails one.**

| Test | Result | Label |
|---|---|---|
| **C1 — commercial disposition** | **Passes.** The inquiry carries it, reasoned and preserved, exception-free (AD-01H §7.2) | ⟦ARCHITECT ANALYSIS⟧ |
| **C2 — queue exit** | **Passes**, and it is the only model that lets **R-7**'s rep act without lying (§3.2) | ⟦ARCHITECT ANALYSIS⟧ |
| **C4 — re-engagement eligibility** | **Passes by absorption.** Dimension C is its input; the rule is V-14/Q5 and is open. **No new control is needed** | ⟦ARCHITECT ANALYSIS⟧ |
| **C5 — permanent invalid classification** | **Passes by absorption**, with one residue: **the closure's *scope* is unrecorded (Z-5)** | ⟦ARCHITECT ANALYSIS⟧ |
| **C3 — redistribution eligibility** | **FAILS as AD-01H states it.** H-7 correctly says it is *"a management control"* and *"not a lifecycle value at either level"*, then leaves whether it is *"explicit, derived, or does not exist"* to V-12. **Model C as written therefore has no home for C3 at all**, which is the *proximate* cause of AD-01H §11.3's unperformable operation | ⟦ARCHITECT ANALYSIS⟧ |
| **Non-terminality of the record condition** | **Over-claimed.** H-6(c) generalises from the commercial-loss class to all classes (§3.4) | ⟦ARCHITECT ANALYSIS⟧ |

> **⟦ARCHITECT ANALYSIS⟧ The conclusion of the challenge, stated plainly: Model C is right and
> incomplete, not wrong. It fails on the one concept it never claimed to place, and over-claims on one
> it did.** Completing it costs **no new entity, no new lifecycle value and no new level** — the missing
> home already exists as a canonical entity (§06 Assignment Log) that AD-01G already requires to carry
> facts of exactly this kind. **That is why the recommendation is C-refined and not a fifth model.**

### 11.2 Model D₁ — considered and rejected: a persisted work mandate on the work record

> **⟦ARCHITECT ANALYSIS⟧** The obvious alternative home for C3 is a persisted *"redistributed / open
> for re-attempt"* value on the work record. Constructed, and rejected on the objection this line has
> now sustained four times.
>
> | Test | Result |
> |---|---|
> | Does it close AD-01H §11.3's gap? | **Yes** |
> | Is it computable from something else? | **Yes — entirely.** It is a function of the most recent assignment act and whether the mandate has been discharged. **It is therefore a second representation of a fact the Assignment Log already holds** |
> | Which prior decision does that violate? | **AD-01A §3.6** (*"do not record what the system can compute"*), the objection that eliminated the persisted assignment axis (**AD-01A §5.2**), the stored custody interval (**AD-01G G-9**) and the persisted record lifecycle (**AD-01H §4.2**, Model C in the *V-3* sense). **Four times sustained** |
> | What does the duplication cost? | The value and the log can **disagree**, and under **R6** the wrong one is permanent. Every transfer, merge (**Q10**), offline sync (§12/§47) and concurrent act (**Q15**) is an opportunity to diverge |
> | Does it reintroduce a record-level lifecycle? | **In substance, yes** — a persisted, mutable, record-level condition value is what H-4 removed |
>
> **⟦ARCHITECT ANALYSIS⟧ REJECTED.** The distinction that matters, and it is the whole reason I-8 is not
> this: **I-8 persists a fact about a human *decision at a moment*, which nothing can compute; D₁
> persists a *condition*, which the decision already determines.**

### 11.3 Model D₂ — considered and rejected: no queue-exit control at all

> **⟦ARCHITECT ANALYSIS⟧ The cheapest possible answer, and therefore the one that must be tested rather
> than assumed away: perhaps C2 needs no control. A rep clears their queue simply by **not scheduling a
> next action**, and *"no commitment"* is already a representable state under **R-5**.**
>
> | Test | Result |
> |---|---|
> | Does it represent the queue exit? | **Superficially yes.** No commitment → not in Today/Future/Overdue |
> | Can it distinguish deliberate from neglected? | **No — and this is fatal.** A record deliberately parked and a record the rep forgot are byte-identical. §58 escalation and every management-oversight surface then cannot tell an exception from a decision — **the identical defect AD-01B §7.1 flagged for *Blocked***, arriving by a different route |
> | Is it consistent with the observed operation? | **No.** **R-2** describes a **deliberate act** with a reason and remarks, and **R-4** shows the operation filters on its result. A deliberate, reasoned, filterable act is not an absence |
> | Does it survive **R-7**? | **No.** A rep with 7,000 records cannot be asked to manage them by omission, and a manager cannot review 7,000 omissions |
>
> **⟦ARCHITECT ANALYSIS⟧ REJECTED — and its rejection is a positive finding: the deliberate queue-exit
> act must be a *recorded work event*, not merely the absence of a commitment.** This is AD-01H §9.1's
> row *"Queue exit / redistribution … a **work** event, visibly distinct from an inquiry closure"*,
> **CONFIRMED here on independent grounds.**

### 11.4 Comparison

| Property | A | B | C *(as AD-01H states it)* | **C-refined** *(recommended)* | D₁ | D₂ |
|---|---|---|---|---|---|---|
| Survives **R-7** (7,000-record workload) without fabricating losses | **No** | No | **Yes** | **Yes** | Yes | **No** |
| Homes **C1** without exception | Yes | **No** | **Yes** | **Yes** | Yes | Yes |
| Homes **C2** | **No** | Partly | **Yes** | **Yes** | Yes | **No** |
| Homes **C3** | **No** | **No** | **No** | **Yes** — on the assignment act | Yes | **No** |
| Absorbs **C4** and **C5** without new controls | n/a | No | **Yes** | **Yes** | Yes | n/a |
| Makes **R-8**'s redistribution *performable* | **No** | **No** | **No** (expressible only) | **Yes** | Yes | **No** |
| Creates no second source of truth | Yes | Yes | **Yes** | **Yes** | **No** | Yes |
| Requires a new canonical entity | No | No | No | **No** | No | No |
| Requires a new lifecycle value or state | No | No | No | **No** | **In substance, yes** | No |
| Distinguishes redistribution from ordinary transfer afterwards | **No** | **No** | **No** | **Yes** | Yes | **No** |
| Distinguishes deliberate parking from neglect | n/a | Partly | **Yes** | **Yes** | Yes | **No** |

---

## 12. Architect recommendation

> **⟦ARCHITECT RECOMMENDATION — consolidated⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** Nothing below is decided, and no
> part of it may be built, seeded, migrated to, scaffolded or prototyped. Every item sits in Master
> Spec **§88**'s MUST-ASK column.)*

**I-1 — V-11: the single historical control conflates three independent axes and two derived
projections.** **C1** commercial disposition → the **inquiry**, persisted and reasoned. **C2** queue
exit → the **work record × custody interval**, derived, carrying no commercial reason. **C3**
redistribution eligibility → **neither** — a management judgement, exercised in the assignment act.
**C4** re-engagement eligibility and **C5** permanent-invalid classification are **projections of C1's
approved classification**, not new concepts, and require no new control. [§2.4](#24-the-answer-to-v-11s-definition-question)

**I-2 — the sources separate C2 from C3 by actor, which is stronger evidence than any structural
argument.** The rep clears their own queue (**R-2**); the manager redistributes (**R-8**, **R-10**).
**Nothing here authorises a rep-initiated redistribution act, because no source describes one.**
[§2.4](#24-the-answer-to-v-11s-definition-question)

**I-3 — Model C is the only shape under which a rep can manage workload without asserting something
false about the market.** AD-01H's **H-6** is **CONFIRMED on its central claim**, on evidence (**R-7**)
H-6 did not itself use. [§3.2](#32-claim-a-survives-the-workload-evidence--and-the-workload-evidence-is-the-strongest-test-available)

**I-4 — V-12: redistribution is *the same act* as an ordinary transfer, distinguished by a *third
recorded output* — the management intent.** Not a second mechanism (which would duplicate four pieces
of AD-01G machinery and edge toward the workflow **AD-01A §8.5** forbids), and not an undifferentiated
reassignment (which **AD-01F §12.4** forbids and **AD-01B §4** makes unrecoverable). **One act, one
Assignment Log entry, one audit event, three facts.** [§4.2](#42-is-it-a-separate-management-operation-or-an-instance-of-ordinary-transfer), [§4.3](#43-what-business-event-gets-recorded)

**I-5 — redistribution never changes an inquiry's disposition.** A redistributed closed inquiry does
**not** become un-Dumped. It stays closed, with its classified reason, permanently. Forced by AD-01A
§8.3, **R6** and consolidated §31. **What changes is custody and intent, and nothing else.**
[§4.4](#44-does-redistribution-change-the-inquirys-disposition)

**I-6 — redistribution creates a new working context and nothing else.** **Never a new inquiry** — a
fabricated inquiry would need an origination, source, campaign and project no customer supplied, would
manufacture a Capture **AD-01F §12.4** forbids, and would create an attribution claim out of a
management decision, with §11/§32/§40 exposure. **Never neither** — the custody interval opens whether
or not it is named. [§4.5](#45-does-redistribution-create-a-new-inquiry-a-new-working-context-both-or-neither)

**I-7 — V-4·reactivation: "operationally active" and "commercially active" are two conditions with two
producers, and the architecture must never derive one from the other.** Redistribution creates a **work
obligation** and never a **commercial obligation**; a customer's new inquiry creates both. **Only a
genuinely new inquiry enters the conversion denominator, carries a source, carries an attribution claim
or has a project.** [§6.1](#61-the-two-events-the-architecture-must-never-merge), [§6.3](#63-what-makes-a-lead-operationally-active-again--the-direct-answer)

**I-8 — the work obligation is represented by the *intent recorded on the assignment act that opened
the current custody interval*. No new entity, no new lifecycle value, no persisted record-level
condition.** The carrier is the **Assignment Log**, canonical under §06, which **AD-01G §10.1 already
requires to carry two facts of exactly this kind**. **Model D survives**; its derivation widens from
three inputs to four. [§3.3](#33-claim-b-is-right-in-principle-and-incomplete-in-its-inputs), [§6.2](#62-the-critical-model-test--does-ad-01hs-h-4-survive)

> **A-2 — an amendment to AD-01H §5.1 / H-4's enumeration of derivation inputs is LOGICALLY REQUIRED,
> is named here, and is NOT made here.** It concerns **derivation inputs only** — it reintroduces no
> persisted lifecycle, touches no vocabulary, and leaves H-1, H-5, H-6(a), H-8, H-9 and H-10 intact.
> **AD-01H is not edited by this document. Only the Product Owner may make A-2.** [§3.3](#33-claim-b-is-right-in-principle-and-incomplete-in-its-inputs)

**I-9 — no new canonical business object is necessary, and none is proposed.** Every concept V-11, V-12
and reactivation expose has a home in an entity the business already names: commercial closure → the
**inquiry**; queue exit and work obligation → the **work record** and its **derived custody interval**;
the management decision → the **Assignment Log**. **AD-01H's H-10 (Sales Episode rejected) is
re-tested property-by-property and STANDS, with its conditionality on AD-01G G-1 unchanged.**
[§6.2](#62-the-critical-model-test--does-ad-01hs-h-4-survive), [§7.4](#74-ad-01hs-sales-episode-rejection-h-10--re-tested-and-it-still-stands)

**I-10 — AD-01H H-6(c) is OVER-GENERALISED and requires refinement, not reversal.** Its claim that the
record-level condition *"must not"* be terminal is inferred from the **commercial-loss** class alone
(the fresher case) and is not tested against the **Invalid** or **Administrative** classes, for which
the sources are silent. **AD-01G §4.1's *"Terminality — has none"* is a recorded *silence*, not a
proved negative.** **No record-level terminal state is invented, recommended or implied here**; the
question is referred as **Z-2**. [§3.4](#34-claim-c-is-over-generalised--the-one-place-ad-01hs-dump-model-is-genuinely-wrong)

**I-11 — AD-01A §8.3's three-dimension framework absorbs every observed reason value, including the
four §15 values no prior mapping covered, and one structural gap is identified.** Findings 1–3 are
**confirmations** (the framework absorbs *not responding* / *switched off* / *not reachable* via
§3.6's derived engagement depth; Dimension B already carries builder-process failure; *Other* is
AD-01B §7.2's import tension, second instance). **Finding 4 is the gap: the framework does not record
whether a closure speaks about *this engagement* or *this relationship*, and the framework's own two
design standards (§3.4 and §3.6) point in opposite directions on whether that warrants a fourth
dimension.** **Referred as Z-5. §8.3 is NOT amended, and N-4 still owns every value.**
[§3.6](#36-the-dump-reason-framework-tested-against-the-real-reason-values)

**I-12 — redistribution is not a new history-visibility case; it is the paradigm instance of the one
AD-01G already solved.** A fresher is by construction a non-participant, so the fail-closed union
**I1 ∪ I2 ∪ I3** covers it exactly, **and AD-01G §8.2 says so about this very operation**. **No denial
or withholding model is required and none is proposed.** The one real interaction is that
redistribution is the assignment kind where V-8's **default** does the most damage in either direction
— **V-8 is OPEN and is not resolved, narrowed or given a preferred branch.** [§9](#9-history-visibility-dependencies)

**I-13 — three reporting numbers that look like one must be two.** *Active Leads* is **two** facts
(commercially live · operationally live only); *Inactive Leads* is **two**; *Reactivation* is **two**
(customer-generated · management-generated). **Merging any of the three lets a management re-attempt be
counted as customer demand, or drops the entire redistribution population out of workload reporting.**
[§10.1](#101-the-durable-business-facts-each-required-report-needs)

**I-14 — a numbering collision exists in the V-namespace and must be resolved by whoever maintains it.**
**AD-01F §16.1 registers V-4 as *"does a non-connected contact attempt count as a qualifying user
follow-up"***; this task's brief uses **V-4** for the **reactivation** question. **This document
resolves the reactivation question and does NOT resolve AD-01F's V-4, which remains OPEN and now gates
more than before** — it gates all three of AD-01H H-5's *New* predicates, FUT, every first-response
variant, **W-1**, **W-4**, and (new here) §10.1 rows 9 and 10, the sole measures of whether
redistribution works. **All of these must share one answer or they will silently disagree.**
[§14.6](#146-a-numbering-collision-that-must-not-be-resolved-silently)

### 12.1 The costs of this recommendation, priced without softening

> **⟦ARCHITECT ANALYSIS⟧ A recommendation that reports only its advantages is not an analysis.**

| Cost | Statement | Label |
|---|---|---|
| **The disposition control is no longer one thing** | **R-5** asks for a *simple* three-value structure and **R-17** warns against optimizing taps. Under I-1 the model must be able to tell a commercial closure from a queue exit. **§95 resolves the tension in favour of precision, but the Product Owner should approve the added precision knowingly** — this is a real change to the rep's most frequent action, and this document deliberately does **not** design it | ⟦ARCHITECT ANALYSIS⟧ |
| **A management act acquires a mandatory recorded semantic** | Every redistribution must record its intent **at the moment of the act**, and it is **unrecoverable if not**. That is a real discipline cost on a high-volume bulk operation (**R-7**, **R-10**) | ⟦ARCHITECT ANALYSIS⟧ |
| **The work queue acquires a second producer** | A record may be in a handler's set **because management put it there**, with no commercial unit underneath. §58 escalation, §14's feed and every workload figure must accommodate that population | ⟦ARCHITECT ANALYSIS⟧ |
| **Six business rules must be answered before the recommendation is usable** | **Z-1 … Z-6** are parameters of this recommendation, not a separate sitting. **Approving I-1 … I-14 without answering them leaves each to be decided by implementation**, which §88 and consolidated §30 forbid | ⟦ARCHITECT ANALYSIS⟧ |
| **It names an amendment to the immediately preceding decision** | **A-2** contradicts AD-01H §5.1's enumeration. AD-01H is **not edited**, and A-2 is **not made** — but the Product Owner cannot approve AD-01H's H-4 as literally written **and** this document's I-8, and should be asked for both in one act | ⟦ARCHITECT ANALYSIS⟧ |
| **One described operation is still not fully performable** | Until **Z-3** answers whether a mandated record surfaces anywhere, **R-8**'s fresher can be given work the system does not show them. **I-8 makes the obligation representable; it does not decide where it appears.** That is honestly a completion and not a closure | ⟦ARCHITECT ANALYSIS⟧ |

---

## 13. Business decisions required

> **Every ⟦BUSINESS DECISION REQUIRED⟧ raised above, consolidated. None is answered here.** Per Spec
> **Rule 1**, **§88**, **§97** and the consolidated requirements' own **§1** and **§30**, none is
> guessed. Numbered **Z-n** to avoid collision with the existing **Q / N / M / E / D / X / T / U / V /
> W / Y** namespaces.

### 13.1 New items raised by this document

> **⟦BUSINESS DECISION REQUIRED⟧ Every row in this table is a BUSINESS DECISION REQUIRED item. No row
> is answered, narrowed or given a preferred branch anywhere in this document.**

| # | Decision required — stated precisely | Arises from | Source status | Consequence if left open |
|---|---|---|---|---|
| **Z-1** | **Does a work mandate conferred by redistribution *end*, and on what basis?** Candidate discharge conditions include the receiving handler's own queue-exit act, a new inquiry opening, elapsed time, or a bounded attempt count. **None is recommended, preferred or ranked here.** | §6.3, §5.2 | **Silent.** **R-8** describes *"another calling attempt"* and states no horizon. **AD-01E U-4** established that no dormancy threshold exists anywhere in the sources and that *"§58 sets no numbers."* | A mandate that never expires accumulates permanently-owed records with no commercial unit in every fresher's working set — **reproducing R-7's own 7,000-record problem inside the mechanism built to relieve it.** A mandate that expires by an implementation-chosen rule is a business rule chosen by implementation (**§88**). |
| **Z-2** | **Does the *opportunity validity class* (and/or recoverability posture) of a record's closed inquiries constrain redistribution eligibility — and if so, is the constraint enforced or merely surfaced to the manager?** i.e. may a record all of whose inquiries closed as *Invalid / non-opportunity* or *Administrative* be redistributed for another calling attempt? | §3.4, §5.2 | **Silent, and the reference operation cannot settle it.** Its single record-level Dump-Reason column (**R-4**) was structurally incapable of distinguishing *"this engagement failed"* from *"this relationship was never real"*, so **its silence is an artefact of its data model, not evidence about the business.** Consolidated **§28** lists *"whether each reason is recoverable/revisitable"* as OPEN in the Product Owner's own words. | Either freshers are handed records that can never be productive — calling dead numbers indefinitely, at real cost and with real customer-contact exposure — or a legitimate management act is blocked by a rule nobody stated. **Also determines whether AD-01H H-6(c)'s *"must not be terminal"* is true as written (I-10).** |
| **Z-3** | **Where does a record with a work mandate and no live inquiry appear, and may a next-action commitment be made on it?** Two halves: **(a)** does it enter the §14 Action Feed, and under which item — (2) *New leads*, (5) *Overdue actions*, or neither; **(b)** may the handler commit a next action while no inquiry is live? | §5.2, §5.3, §8.2 | **Silent on (a).** **R-4**'s observed *All-Without-Dump* filter cannot answer it because the value it keyed on does not exist under H-4 (AD-01H §11.4). **Structurally settled on (b)** — AD-01G §4.1 makes the commitment a **work-record** property so it has something to attach to — **but whether the product permits it is a rule**, and **R-5**'s *"Follow-up requires next action/date"* was written for a live engagement. | **If (a) is "nowhere", R-8's operation is expressible and still not performable**, and I-8 buys nothing. If decided by implementation, the §14 feed's composition — the Sales Rep's primary home experience — is set by a developer. |
| **Z-4** | **When a re-attempt ends without producing a new inquiry, is a reasoned outcome recorded, and on what?** Two candidate homes are named and **neither is adopted**: an outcome on the **redistribution act / closing custody interval** (not a commercial statement, so it does not violate H-6's principle), or **nothing at all**, accepting the loss. | §3.5, §5.3, §5.5 | **Silent.** AD-01H **H-6(d)** states the record-level condition *"carries no reason — and must never be asked to carry one"*, which forecloses one home without supplying another. Closing the existing inquiry is **forbidden** (AD-01A §8.3, **R6**, AD-01C §2.5). | **Management cannot learn why re-attempts fail** — dead number, hostile customer, or a fresher who never called are indistinguishable. Directly disables §10.1 row 13. **Unrecoverable under R6 if not recorded at the time.** Under Scenario D there is not even an inquiry it could informally attach to. |
| **Z-5** | **Does AD-01A §8.3's Dump-reason framework require a fourth dimension — *closure scope*, i.e. does this closure speak about *this engagement* or about *this whole client relationship* — or is scope a policy rule read over Dimension A?** | §3.6 finding 4 | **The framework's own two design standards disagree.** **§3.6** (*"do not record what the system can compute"*) says derive it from Dimension A. **§3.4** (*"correlation with Dimension A is high but not total, which is precisely why it is a second dimension"*) says make it one — and the correlation genuinely is imperfect in both directions. **§3.3's admission test (counted differently in at least one report) is met.** | The input **Z-2** needs either exists or does not. **Nothing is invented, no dimension is added, no value is proposed, and §8.3 is NOT amended by this document. N-4 still owns every value under either answer**, and until N-4 supplies them no reason-coded reporting is defensible (AD-01 §9.6). |
| **Z-6** | **Is the management intent uniform across a bulk assignment act, or recorded per record?** | §8.3 | **Silent.** **R-10** gives bulk selection; AD-01G §10.2 requires the **history decision** per record even in a bulk act, and says nothing about intent. | **§57's case breaks a uniform intent**: absorbing a departed employee's book pushes live and closed records in one act, and a uniform work mandate would confer an obligation on every closed record in the batch — **exactly the failure mode I-8 exists to prevent.** **Unrecoverable if decided by implementation** (AD-01B §4; AD-01G §9.3 constraint 2). |

### 13.2 Questions this document raises that are owned by *existing* open items — no new number minted

> **⟦ARCHITECT ANALYSIS⟧ Recorded so they are not lost, and deliberately **not** renumbered, because
> minting a new item for a question an existing one already owns is how a register becomes unusable.**

| Question surfaced here | Owned by | Effect |
|---|---|---|
| May a record holding a **Success** be redistributed into a sales churn queue? | **AD-01H Y-4** | **Scenario E's validity is blocked on it.** One refinement offered: **Y-4 is also a management-*authorization* question, not only a queue-*presentation* one**, and its current statement does not distinguish them. **Y-4 is NOT answered, narrowed or branched.** |
| Is the **default** history decision different for redistribution than for ordinary transfer? | **AD-01F V-8** | Redistribution is the assignment kind where the default does the most damage either way (§9.2). **V-8 NOT resolved.** |
| Is a new inquiry after a closure a **new commercial opportunity**? Does it count as a **Capture**? Does a different source make it a new attributable opportunity? | **V-14 · V-18 · V-15** (with AD-01C **T-4**) | All three arise in Scenario C. **None resolved.** §15 recommends them next. |
| What counts as a **qualifying** follow-up, for the fresher's first-response and FUT? | **AD-01F V-4** (the original) | **Now gates §10.1 rows 9 and 10 in addition to everything it already gated.** **NOT resolved — see I-14.** |
| Does **§08 project scope** reach a record with a work mandate and no inquiry the viewer is scoped to? | **V-24** | Forced by Scenario D (§5.5 consequence 2). **NOT resolved.** |
| Do two inquiries on one project group into one *project interest*? | **AD-01H Y-3** | Affects §10.1 row 8's keying. **NOT resolved.** |
| Which values may a Dump reason take, and how do legacy imports and *Other* satisfy the mandatory-reason rule? | **N-4** (with AD-01B §7.2) | **Second instance of the same tension recorded. NOT resolved.** |

### 13.3 Items from prior documents that this document explicitly does **not** resolve

> **⟦ARCHITECT ANALYSIS⟧ Each row states **only** the effect this document has on a prior open item.
> **No item in this table is resolved here**, and where a row records that a direction is *forced*, the
> **decision itself remains the Product Owner's** and is **not** taken.

| # | Item | Effect of this document |
|---|---|---|
| **V-13** | Does redistribution require a customer re-engagement, or may it occur with no customer event at all? | **Answered in substance as a direct consequence of V-12, and recorded as such rather than claimed as a separate resolution: it may occur with no customer event at all** (**R-8** describes exactly that; Scenarios A, B, D). **I-7 is the finding that makes the two events non-equivalent.** |
| **V-14 / V-15** | New opportunity vs continuation; different-source re-inquiry | **Untouched and reinforced.** Scenario C instantiates both. **V-15 still carries the §32/§40 commission exposure and should still be answered with AD-01C T-4.** **NOT resolved.** |
| **V-16** | Attribution / commission anchor | **Untouched.** One consequence recorded: **a redistribution creates no attribution claim** (I-6), which removes one way the anchor question could have been muddied. **NOT resolved**; **M-5** still owns the Person candidate. |
| **V-17 / V-18** | Funnel re-key; does a re-inquiry count as a Capture | **V-17's direction remains forced by H-4/H-8 and is still NOT resolved.** **V-18 is reinforced**: I-6 guarantees a redistribution is never a Capture, which makes V-18 purely a question about **customer-generated** re-inquiries. **NOT resolved.** |
| **V-19 / V-20 / V-21 / V-22 / V-23** | Response vocabulary; first-response variants; temperature; who sets Success; the pre-approval condition | **V-20 gains weight again — custody→first-response moves from *new* to *required* (§10.1 row 9).** **V-19, V-21, V-22, V-23 unchanged.** **N-2 remains unresolved and remains on V-23's critical path.** |
| **V-24 / V-25 / V-26** | §08 project scope; a past handler's entitlement; IVR intake metadata | **V-24 acquires the no-project redistribution case (§5.5). V-25, V-26 unchanged. None resolved.** |
| **V-5 / V-6 / V-7 / V-8 / V-9 / V-10** | *New*'s scope; the §8.1 amendment; history visibility; the transfer choice; existence vs content; the bound surfaces | **V-7 NOT reopened, NOT re-argued, NOT narrowed** — AD-01G's answer is confirmed and shown to cover redistribution exactly (I-12). **V-5 is shown not to be discriminated by this case** (§9.3). **V-6/A-1 unchanged. V-8 gains the redistribution-default interaction, unresolved. V-9/V-10 gain a new inference-channel instance (§9.3), unresolved.** |
| **V-1 / V-2 / V-3** | Identity; concurrency; lifecycle level | **Treated as input.** AD-01G **G-1/G-2** and AD-01H **H-1/H-4** are confirmed; **H-4's derivation enumeration requires A-2** (I-8). **AD-01H's Y-1/Y-2 are untouched — nothing here depends on concurrent liveness.** |
| **W-1 … W-5** | AD-01G's open items | **Not resolved.** **W-1** (one activity, several inquiries) gains the inverse case — an activity referencing **no** inquiry (Scenario B), which **H-9 already permits**. **W-2** (which entity is called *Lead*) remains open and is deliberately not answered by this document's terminology. **W-3, W-4, W-5** untouched. |
| **Y-1 … Y-5** | AD-01H's open items | **None resolved.** **Y-4 blocks Scenario E and gains one refinement to its statement (§5.6).** **Y-1/Y-2** are not engaged. **Y-3** affects §10.1 row 8. **Y-5** (which unit *"leads"* means) is **sharpened, not answered**: §10.1 row 3 shows *"active leads"* is itself two numbers before Y-5's unit question is even reached. |
| **Q1, Q4, Q6, Q7** | AD-01A §8 / AD-01C §3.7 decisions | **Treated as fixed input. Q4 and Q6 explicitly NOT reopened. Q1's vocabulary decision NOT reopened. Q7's framework CONFIRMED and NOT amended** — Z-5 refers one structural question about it and changes nothing. |
| **Q5** | Re-engagement of a dumped lead | **NOT resolved and NOT narrowed.** One statement about the model only: **no `Dump → Follow-up` edge is required by redistribution** (§4.1). That is a statement about what the model needs, not about what Q5 decides. |
| **Q2, Q3, Q8 – Q16** | AD-01's remaining questions | **Not resolved.** **Q3** (imported leads' initial state) gains the intent question — an imported assignment has no recorded intent — **named, not answered.** **Q10** (merge precedence) gains the question of what happens to two records' mandates on merge — **named, not answered.** |
| **N-1 … N-4** | AD-01A's open items | **Not resolved, not narrowed.** **N-2** untouched; its subject remains record-level. **N-4** still owns every Dump-reason value and now also owns **Z-5**'s consequence for the master's shape, whichever way Z-5 goes. |
| **T-1 … T-12**, **U-1 … U-20** | AD-01C's and AD-01E's open items | **Not resolved.** **U-3/T-10** (posture as gate vs triage) is **sharpened**: this document shows posture governs **C4** and must **not** govern **C3** (**I-10**), which narrows what U-3 is asking without answering it. **U-4** (no dormancy threshold) is reinforced by **Z-1**. **T-4/T-5** unchanged. |
| **M-2 … M-20** | Reconciliation blockers | **Not resolved.** Directly implicated and left to their owners: **M-3** and **M-7** (who may redistribute, expressed as breadth on a grant and never as a role name — **R2**), **M-5**, **M-6** (timezone semantics for §10.1 row 10), **M-9**, **M-14**. |

---

## 14. Impact on AD-01 through AD-01H

> **⟦ARCHITECT ANALYSIS⟧ No file below is edited by this document.** Each row states what the V-11,
> V-12 and reactivation answers do to a prior position and why. **Where a prior document is confirmed,
> that is recorded as deliberately as where it is corrected.** Rows marked **CONFIRMED** are deliberate
> confirmations; rows marked **CHALLENGED**, **REFINED** or **CORRECTED** name the section and give the
> reason.

### 14.1 AD-01 — Lead State Machine

| Section | Effect |
|---|---|
| **§2.5** — *"Dump is defined by follow-up necessity, not by outcome"*; *"Dump and Lost are not synonyms"* | **CONFIRMED, and this document is its completion.** AD-01 identified the ambiguity in the very first pass; **I-1** names the three axes and two projections it contains. |
| **§3** — the eight-concept separation test | **CONFIRMED and used as the decisive instrument** in §2.3, on five concepts rather than three. |
| **§6.1** — `Dump → Follow-up` *"permitted only if Q5 says so"* | **Never required by redistribution** under this model (§4.1). **A statement about what the model needs; Q5 is NOT resolved.** |
| **§6.1** — *Anything → New* forbidden | **Still moot rather than violated** (AD-01H, confirmed). I-8 persists a fact about an **act**, not a lifecycle value, so there is nothing to move back to. |
| **§6.3** — the assignment axis's transition table | **Already eliminated by AD-01A §8.5 and not revived.** I-4 adds an attribute to a logged act, not a state to an axis. |
| **§7 E-04** (reassignment must not move the lifecycle) | **CONFIRMED and still unviolatable by construction.** |
| **§9.1** — *"the denominator is contaminated unless Dump is decomposed"* | **CONFIRMED and given its mechanism.** §10.2 constraint 1 makes the exclusion of queue exit from loss analysis structural rather than a reporting convention. |
| **§9.6** — what must not be promised as a chart | **CONFIRMED and widened** to manager- and fresher-effectiveness products (§10.2 constraint 4). |
| Everything else | **Unchanged and still NOT APPROVED FOR IMPLEMENTATION.** |

### 14.2 AD-01A — the §8 Product-Owner decisions

| Item | Effect |
|---|---|
| **§8.1** — four values; *Pending* rejected; Today/Future/Overdue derived | **Vocabulary CONFIRMED and untouched.** This document creates **no new lifecycle value at any level**. **A-1 (AD-01H's) is unaffected and is not made here either.** |
| **§8.2 / Q4** | **CONFIRMED. NOT REOPENED.** Scenario E confirms it from the management side: redistribution touches no Success and no Booking. |
| **§8.3 / Q7** — the three-dimension framework; mandatory, preserved reason | **CONFIRMED, NOT AMENDED, and independently re-validated** against four reason values no prior mapping covered (§3.6). **One structural question referred as Z-5, which changes nothing about §8.3 and adds no dimension and no value.** |
| **§3.3** — the five validity classes, and *Redundant*'s independent keep | **CONFIRMED**, and now load-bearing for **Z-2**: the *Invalid* and *Administrative* classes are the ones whose scope exceeds the engagement. |
| **§3.4** — *"correlation is high but not total, which is precisely why it is a second dimension"* | **CONFIRMED as a standard, and it is one of the two standards that collide in Z-5.** |
| **§3.5** — Dimension C exists to enable the Q5 re-engagement decision | **CONFIRMED and sharpened.** Dimension C governs **C4** (re-engagement eligibility) and must **not** govern **C3** (redistribution eligibility) — **AD-01F §10.3 and AD-01H H-7, confirmed and not extended.** |
| **§3.6** — engagement depth is derived, never carried on the reason | **CONFIRMED, and it is what absorbs *not responding* / *switched off* / *not reachable* without growing the vocabulary.** It is also the *other* standard that collides in Z-5. |
| **§3.7** — a reason is mandatory on a terminal non-conversion disposition | **CONFIRMED, and its scope is now exact**: mandatory on the **inquiry's commercial closure**, and **not** applicable to the record-level queue exit, which makes no commercial statement. **This removes the perverse incentive** that a mandatory reason on a workload act would create. |
| **§8.5** — no persisted assignment axis, no reassignment-approval workflow | **CONFIRMED throughout.** I-4 adds **no step, no approval, no second actor and no gate** — one attribute on one act a manager already performs. |
| **§8.6** — the Orthogonal Lead Model | **The orthogonality is CONFIRMED and vindicated again.** Its *"Assignment data/history (derived/log-based)"* bullet is where I-8's fourth fact lands — **inside a bullet the model already has**. **Not edited here.** |
| **§5.2 / §3.6** — *do not record what the system can compute* | **CONFIRMED and applied as the decisive argument against Model D₁** (§11.2), the fifth time this objection is sustained in this line. |

### 14.3 AD-01B — Dependency and ordering

| Item | Effect |
|---|---|
| **§4**'s rework-asymmetry standard | **CONFIRMED and applied three times** — to the unrecorded intent (§4.2), to Z-4's unrecordable outcome, and to Z-6's bulk granularity. |
| **§7.1** — the *Blocked* contradiction | **Unchanged. NOT resolved, NOT narrowed, NOT reopened.** One structural echo recorded: **Model D₂ fails for the same reason §7.1 identifies** — a condition that cannot be distinguished from an absence gives §58 escalation nothing to key on (§11.3). |
| **§7.2** — mandatory Dump reason versus legacy import | **Unchanged, and given a second instance** (*Other*, §3.6 finding 3). **N-4 and Q3 still own it.** |
| The graph's root | **AD-01H §16 named V-11 + V-12 (with V-4) as the next step. This document is that step. The new root is named in §15.** |

### 14.4 AD-01C — Terminality (Q5 · Q6)

| Item | Effect |
|---|---|
| **§1.2** — the *Blocked* clarification | **CONFIRMED and untouched. N-2 not resolved.** |
| **§2.5** — Dump's strict terminality | **CONFIRMED at the inquiry level**, where AD-01H relocated it and where it holds without exception. **§4.1 and §4.4 re-prove it from the management side: redistribution reopens nothing.** |
| **§2.6** — Dimension C as the intended re-engagement gate | **CONFIRMED and protected.** **I-10** keeps workload policy out of Dimension C, which is exactly what §2.6 requires. |
| **§3.2** — the CP-financial safety property | **CONFIRMED and strengthened again.** Scenario E: a redistribution can never present to the commission engine as a §26-forbidden cancellation, because it changes no value the commission engine reads. |
| **§3.4** — *a correction is not a re-engagement, and a re-engagement is not a correction* | **CONFIRMED and completed with the third act.** AD-01F §12.4 named redistribution as the third; **I-4, I-5 and I-6 give it a mechanism that cannot restate a closed period or manufacture a capture.** |
| **§3.7 / Q6** | **UNTOUCHED, CONFIRMED. NOT REOPENED. No Q6 decision requires revision.** Scenario E leaves a Success permanent under every branch of Y-4. |
| **T-4 / T-5 / T-6 / T-10 / T-12** | **Unchanged and not answered.** **T-10** (would posture be populated in practice) is reinforced; **U-3/T-10**'s gate-vs-triage question is narrowed in subject by I-10 and **not answered**. |

### 14.5 AD-01E — Re-engagement and controlled historical visibility

| Item | Effect |
|---|---|
| **§3.5** — posture as the intended re-engagement gate | **CONFIRMED and protected** (as AD-01C §2.6). |
| **§6.3** — I1 ∪ I2 ∪ I3, fail-closed | **CONFIRMED via AD-01G's re-homing, and shown to cover redistribution exactly** (I-12). **V-7 NOT reopened.** |
| **§6.8** — the inference channel | **CONFIRMED and given a new, management-shaped instance** (§9.3 item 2). **The surface question is V-9/V-10 and is NOT resolved.** |
| **§7.1** — provenance is unrecoverable if not recorded at the moment | **CONFIRMED and reused as the discipline governing I-8's intent.** |
| **§11 R2** — the episode's required properties | **Re-tested property-by-property against the work mandate and the re-attempt (§7.4). No residue found. The rejection stands.** |
| **U-4** (no dormancy threshold anywhere) | **CONFIRMED and load-bearing for Z-1.** |
| **U-1 … U-20** | **None decided here.** **U-18** (revival removing the structural separation between the three acts) is **answered in mechanism by I-4 and still not resolved as a policy question.** |

### 14.6 AD-01F — Lead / Client Business-Workflow Reconciliation

| Item | Effect |
|---|---|
| **§10.1** — the five uses of Dump in the sources | **CONFIRMED, and extended by R-7's workload evidence**, which is the sixth and the one that decides §11. |
| **§10.2** — the three-way decomposition (D-i · D-ii · D-iii) | **CONFIRMED without amendment, and EXTENDED**: the task's five candidate concepts resolve to AD-01F's three axes plus two projections of D-ii (**I-1**). **AD-01F's decomposition was correct and was not the whole picture only because it was not asked about C4 and C5.** |
| **§10.3** — the fifteen-value mapping; *"the gap is a missing control, not a missing dimension"* | **CONFIRMED and tested further.** §3.6 adds the four consolidated-§15 values and confirms the framework absorbs them. **One qualification: §10.3's finding was about D-iii, and it holds. §3.6 finding 4 identifies a *different* gap — closure scope — which may be a missing dimension after all. Referred as Z-5; §10.3 is not contradicted.** |
| **§10.4** — where each part of Dump lives | **ADOPTED and COMPLETED.** D-ii → inquiry, D-i → record × custody: **confirmed.** D-iii — *"whether it is derived, explicit, or does not exist as a distinct thing is V-12, and it is not the architect's to invent"* — **is now answered: it exists, and it is explicit at the moment of the act (I-4). The *values* remain the Product Owner's.** |
| **§12.1** — S-α / S-β / S-γ held strictly apart | **CONFIRMED and given mechanisms.** S-α = Scenarios A/B/D; S-β/S-γ = Scenario C. **The C-6 gap S-α exposed is closed structurally by I-8.** |
| **§12.4** — three acts, three reporting effects | **CONFIRMED and now mechanically guaranteed** for the redistribution row: I-6 creates no inquiry and I-5 touches no closure, so a redistribution has nothing it *could* restate or capture. |
| **§13.1** rows 1, 2, 8, 9, 11 | **CONFIRMED and extended.** Row 2's **custody→first-response** moves from *new* to *required*; row 8's transfer-reporting fact gains **intent**; row 11's exclusion of queue exit from loss analysis becomes structural. |
| **§16.1 V-4** | **NUMBERING COLLISION FLAGGED — see §14.6 note below. AD-01F's V-4 is NOT resolved by this document.** |
| **§16.2 V-11, V-12** | **Answered — V-11 in full (placement by AD-01H H-6, control by I-1), V-12 in full (I-4 … I-8), with six parameters referred as Z-1 … Z-6.** |
| **§16.2 V-13** | **Answered in substance as a consequence of V-12** (§13.3), and recorded as such rather than claimed separately. |

> **⟦ARCHITECT ANALYSIS⟧ §14.6 note — a numbering collision that must not be resolved silently.**
> **AD-01F §16.1 registers V-4 as: *"Does a non-connected contact attempt count as a qualifying user
> follow-up — for FUT, for first-response, and for the New → Follow-up boundary?"*** This task's brief
> uses the label **V-4** for the **reactivation** question, which AD-01F does not register under any
> number. **This document resolves the reactivation question, does NOT resolve AD-01F's V-4, and does
> NOT renumber anything** — silently reassigning a register entry is how two documents end up believing
> the same number is closed and open. **Whoever maintains the V-namespace should assign the reactivation
> question its own number.** Meanwhile **AD-01F's V-4 remains OPEN and now gates more than before**:
> AD-01H H-5's three *New* predicates, FUT, every first-response variant, **W-1**, **W-4**, and §10.1
> rows 9 and 10 — **the only two measures of whether redistribution works. All must share one answer.**

### 14.7 AD-01G — Lead / Client Identity and History Visibility

| Item | Effect |
|---|---|
| **G-1 / G-2** (the Lead / Inquiry split) | **CONFIRMED as input and tested a third way** — against the management-side scenarios. It survives all five. |
| **G-4** (Sales Episode rejected) | **REJECTION STANDS, re-tested property-by-property against the work mandate (§7.4). Conditionality on G-1 unchanged.** One watch-item flagged: **Z-1 and Z-4 answered together in a particular way would begin to give the re-attempt episode-shaped properties.** Flagged, not pre-empted. |
| **G-5** (a new inquiry is not a new Lead and not necessarily a new opportunity) | **CONFIRMED.** Scenario C instantiates it; **V-14 open.** |
| **G-6 / G-7** (V-7's boundary and mechanism) | **NOT reopened, NOT narrowed. CONFIRMED as covering redistribution exactly** (I-12). |
| **G-8** (read-time projection, never write-time mutation) | **CONFIRMED and unweakened.** I-8 records a fact about an **act**; the condition remains derived at read time. **Nothing is reset, deleted, re-dated or copied to produce a fresh context.** |
| **G-9** (custody interval derived, not an entity) | **CONFIRMED and reused.** I-6's new working context is a derived interval. |
| **§4.1** — the work record's facets, including *"Terminality — has none"* | **CONFIRMED, and distinguished from AD-01H H-6(c)** (§3.4, **I-10**): AD-01G recorded a **silence**; H-6 converted it into a **prohibition**. **AD-01G is not edited.** |
| **§8.2** — *"the evidence does not generate a requirement for a withholding capability"*, stated about the redistribution case itself | **CONFIRMED and strengthened.** **I-12.** |
| **§9.1** — the transfer is *"one act with two outputs"* | **EXTENDED to three outputs. AD-01G is not edited.** A refinement of AD-01G's own shape, not a contradiction. |
| **§9.3** constraint 1 (*a withholding control must never apply to I2*) | **CONFIRMED and given a second independent reason** (§8.4): a manager who cannot see why a record closed cannot decide whether to redistribute it. |
| **§10.1** — the Assignment Log must carry the history decision and provenance | **CONFIRMED, and a third fact added by I-8**, under the same *"unrecoverable if not recorded at the moment"* discipline. **This is the entity that makes I-9 true — no new canonical entity is needed.** |
| **§10.2** — bulk applies one history decision to many records, recorded **per record** | **CONFIRMED, and it is the precedent that makes Z-6 a real question rather than an invented one.** |
| **§13** — Dump / re-engagement implications, including *"what the record's queue condition is afterwards is V-11/V-12 — not resolved here"* | **This document is that resolution**, and AD-01G's own framing — *"the gap is a missing management control, not a missing Dump dimension"* — is **CONFIRMED and is exactly what I-1's C3 and I-8 supply.** |

### 14.8 AD-01H — Lead Lifecycle Ownership and Concurrent Project Interests

> **⟦ARCHITECT ANALYSIS⟧ AD-01H is the document this task was directed to test rather than preserve.
> The result: **eight findings confirmed, one completed, one refined, one enumeration challenged.**
> **AD-01H is not edited by this document.**

| Item | Effect |
|---|---|
| **H-1** (concurrent existence valid and forced) | **CONFIRMED as input.** Scenarios D and E instantiate it from the management side. |
| **H-2 / Y-1 / Y-2** (concurrent liveness undecided) | **UNTOUCHED.** **No finding here depends on Y-1**, which is stated explicitly because it means V-11/V-12 could be approved on their own timetable exactly as AD-01H §16 item 5 predicted. |
| **H-3** (the two halves separate cleanly) | **CONFIRMED and independently re-demonstrated.** |
| **H-4** (Model D; the record carries no persisted lifecycle) | **CONFIRMED in substance and CHALLENGED as to its derivation enumeration.** The *"three inputs"* of §5.1 are **insufficient**: §3.3 shows all three yield nothing in the redistribution case and that the near-miss fails on §57. **A fourth input is required (I-8). → A-2, named here, NOT made here. Model D itself survives intact — no persisted record-level value is reintroduced.** |
| **H-5** (*New* is three derived predicates) | **CONFIRMED and untouched.** **N-context** is the predicate the fresher's record satisfies, and §3.3 shows why it is necessary but **not sufficient** to carry a work obligation. |
| **H-6(a)** (the record-level condition means *no live work obligation for the current handler*) | **CONFIRMED**, and confirmed on evidence H-6 did not use — **R-7**'s 7,000-record workload case (§3.2). |
| **H-6(b)** (derived, custody-scoped, not persisted) | **CONFIRMED in principle; INCOMPLETE in its inputs.** Same finding as H-4. |
| **H-6(c)** (*"Terminal? — No, and it must not be"*) | **REFINED, and this is the one place AD-01H's Dump model is found genuinely over-stated.** The inference is sound for the **Commercial loss** class (the fresher case) and is **generalised without test** to the **Invalid** and **Administrative** classes. **→ I-10, Z-2. No record-level terminal state is invented, recommended or implied.** |
| **H-6(d)** (*"carries no reason — and must never be asked to carry one"*) | **CHALLENGED on one case and referred, not overturned.** Scenario B's failed re-attempt ends with no reasoned outcome anywhere, disabling §10.1 row 13. **→ Z-4. Two candidate homes named; neither adopted.** |
| **H-7** (redistribution eligibility is a management control, not a lifecycle value; Dimension C must not carry workload policy) | **Negative half CONFIRMED IN FULL — no new state is invented at either level, and Dimension C is protected. Positive half COMPLETED**: it *does* exist as a distinct thing, it is **explicit at the moment of the act** (**I-4**), and it has **two independent inputs**, not one (**I-10**). |
| **H-8** (Success on the inquiry, milestone on the Booking) | **CONFIRMED and untouched.** Scenario E. **Q4 NOT reopened.** |
| **H-9** (every history entry resolvable to inquiry-where-applicable, custody interval, and user-performed-ness) | **CONFIRMED, and shown to have anticipated Scenario B**: its *"where it concerns one"* is exactly what lets a re-attempt activity exist with no inquiry. **Clause (ii) is what makes §10.1 row 11 computable with no new fact.** |
| **H-10** (Sales Episode remains unnecessary) | **CONFIRMED after an independent property-by-property re-test (§7.4). Conditionality unchanged. One watch-item flagged (Z-1 + Z-4).** |
| **H-11 / H-12** (the V-7 dependency; the next-action-commitment refinement) | **UNTOUCHED. V-7 NOT reopened.** §9.3 records that the redistribution case does **not** discriminate V-5's two sub-readings. |
| **§11.3** (the gap H-4 does not close) | **CLOSED STRUCTURALLY by I-8 — no new entity, no new state — and left with six business rules (Z-1 … Z-6) that are the Product Owner's.** AD-01H's own three statements about the gap are all confirmed: it was not created by H-4, no candidate model in its §4 closed it, and it was owned by V-11/V-12. |
| **§11.4** (the *All-Without-Dump* filter must be redefined, *"not proposed here"*) | **Now DEFINABLE** — *"records with a live work obligation for me"*, a well-formed condition over four inputs (§8.2). **What it evaluates to for a mandated-but-unworked record is Z-3, and the filter itself is not specified here.** |
| **§16** (recommending V-11 + V-12, with V-4 in the same sitting) | **Correct, and followed. This document is that step, except for AD-01F's V-4 — see I-14.** |

---

## 15. Recommended next architecture decision

> ### **V-14 + V-18 + V-15 — what a second inquiry *counts as* — answered together, with AD-01C T-4 in the same sitting, and AD-01F's original V-4 as the cheap companion.**
>
> **⟦ARCHITECT RECOMMENDATION — sequence only⟧** *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL.)* **This is a recommendation about *sequence and subject*. No answer to V-14, V-15,
> V-18, T-4 or V-4 is proposed, implied or preferred here, and none is resolved by this document.**

> **⟦ARCHITECT ANALYSIS⟧ Why this cluster, and why now.**

1. **The *acts* are now separable; the *resulting inquiry* still is not.** After AD-01G, AD-01H and this
   document, correction, re-engagement and redistribution are three distinguishable acts with three
   mechanisms (AD-01F §12.4, discharged). **What a customer-generated second inquiry *counts as* — a
   new commercial opportunity, a new Capture in its period, a new attributable engagement — is the last
   input the conversion denominator needs and the last thing the three acts' reporting effects depend
   on.** Scenario C reaches all three questions in four sentences.
2. **It is the largest remaining cluster of V-16's inbound edges.** **V-16** (the attribution and
   commission anchor) is the highest-value question left and has been deliberately deferred three times
   — by AD-01F §18, AD-01G §17 and AD-01H §16 — on the ground that it carries too many unresolved
   inbound edges: **Y-1, V-14, V-15, M-5, T-4, T-5**. **Answering V-14 and V-15 with T-4 clears three of
   the six.** No other available sitting clears more.
3. **V-15 carries live money and AD-01F already said to answer it with T-4.** A re-inquiry arriving
   through a **different** CP is a §11 clash question with §32/§40 commission consequences. **AD-01F
   §16.2 and AD-01E §3.5 both direct that V-15 and T-4 be answered in one sitting.** That direction is
   unchanged and unfollowed.
4. **This document has removed one way the question could have been muddied.** Under **I-6** a
   redistribution creates no inquiry, no source, no campaign and no claim. **V-18 therefore becomes a
   question purely about customer-generated re-inquiries**, which is a materially smaller and cleaner
   question than it was before.
5. **It does not depend on Y-1, on Y-4, or on any Z item.** It can be taken on its own timetable.

**The cheap companion: AD-01F's original V-4** — *what does **qualifying** mean for a user follow-up?*
One question, no prerequisites, and it now gates **AD-01H H-5's three *New* predicates, FUT, every
first-response variant, W-1, W-4, and §10.1 rows 9 and 10** — the latter two being the only measures of
whether redistribution works at all. **All of them must share one answer or they will silently
disagree.** AD-01H §16 already called it the cheap companion; this document adds two consumers and
records that **it was not resolved by this task despite the label** (I-14).

**Also put to the owner in the same sitting, because each costs one question and each is currently
being decided by default:** **Z-1 … Z-6** *(they are parameters of this document's own recommendation,
not a separate sitting — approving I-1 … I-14 without them leaves six business rules to implementation)*;
**AD-01H's Y-4** *(which blocks Scenario E, and whose statement §5.6 recommends be widened to cover
management authorization as well as queue presentation)*; and **V-8** *(the history-visibility default,
which redistribution makes consequential in both directions)*.

**Explicitly NOT recommended next: V-16.** Unchanged judgement, now for the fourth consecutive document
and for the same reason: it carries the most money and the most inbound edges, and three of those edges
are the subject of the recommendation above. **Take it after, not instead.**

**Explicitly NOT recommended next: Y-1 / Y-2 (concurrent liveness).** Real, and being decided by default
every day — but **AD-01H H-3 established it separates cleanly**, and nothing in this document depends on
it. It should be asked, and it does not need to be the sitting.

**What must not happen in the meantime.** No schema, no migration, no seeding, no prototype, no
"temporary" intent column, no disposition scaffolding, no Dump-reason value list and no redistribution
control of any kind. Consolidated **§30** states it: *"No schema/code implementation should be inferred
from an unresolved product ambiguity."* **The Lead / Client architecture is unresolved until the project
owner approves in writing.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED**

**NOT APPROVED FOR IMPLEMENTATION.**

Nothing in this document is decided, approved, implemented, implementable, seedable, migratable or
settled. **No SQL, schema, migration, master value, column, table or type is authorized by anything
above, and none may be derived from it.** No UI, visual, layout or interaction design is proposed
anywhere, and the reference-CRM evidence recorded in §1.4 — reached only through the workflow facts in
AD-01F §1.2 and consolidated requirements §12 and §15 — has been used **strictly as business-logic and
information-model evidence**, per consolidated requirements §1, §24 and §26. **No Dump-reason
vocabulary, no intent vocabulary and no reason value is proposed, endorsed or seeded; N-4 owns them.**

**None of AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G or AD-01H is modified by this
document.** Where this analysis contradicts, corrects, refines or completes a prior position — **AD-01H
§5.1 / H-4's enumeration of derivation inputs** (**A-2**, named not made); **AD-01H H-6(c)**'s
generalisation of record-level non-terminality from one closure class to all (**I-10**); **AD-01H
H-6(d)**'s prohibition on a reason, challenged on the re-attempt case (**Z-4**); **AD-01H H-7**'s
positive half, completed rather than corrected (**I-4**, **I-8**); **AD-01G §9.1**'s *"one act with two
outputs"*, extended to three; **AD-01F §16.1**'s V-4 numbering, flagged rather than reassigned
(**I-14**) — **that is stated explicitly, with the document and section named and the reason given, and
the prior file is left exactly as it stands.**

In particular: **AD-01A §8's recorded Product-Owner decisions are treated as binding input throughout**;
**Q4 is NOT reopened**; **Q6 is NOT reopened and requires no revision**; **Q1's vocabulary decision, its
rejection of *Pending*, and its Today/Future/Overdue derivation are NOT reopened**; **Q7's
three-dimension framework is CONFIRMED and NOT amended** — Z-5 refers one structural question about it
and adds no dimension and no value; **Q5 is NOT resolved and NOT narrowed**; **V-7 is NOT reopened, NOT
re-argued and NOT narrowed** — AD-01G's answer is confirmed and shown to cover redistribution exactly,
and only interactions are stated; **V-14, V-16, V-17, V-18, V-24 and every other V-item other than
V-11, V-12 and (in substance) V-13 remain open exactly as AD-01F, AD-01G and AD-01H left them**;
**AD-01F's own V-4 remains OPEN**; **N-2 is NOT resolved and NOT narrowed**; **N-4 still owns every
Dump-reason value**; **AD-01H's Y-1 … Y-5 are NOT answered** and **Y-4 blocks Scenario E**; **the Sales
Episode rejection stands with its conditionality unchanged**; **T-1 … T-12**, **U-1 … U-20**, **W-1 …
W-5**, **Q2, Q3, Q8 – Q16** and blockers **M-2 … M-20** are **not resolved**. The six new items **Z-1 …
Z-6** are **raised, not answered**.

**No new canonical business object is proposed by this document.** Where a gap genuinely required a
decision the sources do not supply — whether a work mandate expires, whether validity class constrains
redistribution, where a mandated record surfaces, what records a failed re-attempt, whether the reason
framework needs a fourth dimension, and whether bulk intent is per-act or per-record — **it is stated as
`BUSINESS DECISION REQUIRED` and left to the project owner, rather than closed by invention.**

Every recommendation above sits in Master Spec **§88**'s **MUST ASK BEFORE DECIDING** column —
canonical entities, relationships, authorization rules, source-of-truth rules, CP commission logic and
audit requirements are all engaged. Per AD-01A §7, **delegation to an architect is not authorization**,
and a Product-Owner preference recorded as evidence is not an approved architecture. The analysis above
is offered so that it can be attacked on its merits rather than deferred to.

**Nothing here is implemented, and no prior document is modified, until the project owner approves in
writing.** Per **§97**: *when in doubt, STOP AND ASK.* This document is the asking.

**STATUS: PROPOSED — NOT APPROVED**
