STATUS: RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.

# AD-01O — Revisit vs. New CP Registration: reconciling the Project Owner's Helpdesk/Registration clarification into AD-01N

**What this document is.** The Project Owner has delivered a **clarification to AD-01N**, which is at
**VALIDATE** status and has **not** been approved. The clarification is **authoritative business input**. It
is **not re-argued, not weighed against alternatives, and not softened anywhere below.**

**What this document does.** It reconciles that clarification against AD-01N and the whole chain
(AD-01 … AD-01N), determines exactly what AD-01N got right, what AD-01N got wrong, what the clarification
settles, and what it does **not** settle. **Every amendment it finds necessary is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **Section 6's recommendation is advisory.** Nothing below is
self-authorizing. **AD-01N is NOT edited. No prior document is edited.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · **AD-01N**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes this clarification in its entirety and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including the clarification — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

**Numbering discipline, continued without collision.** Findings are **`OF-1 … OF-20`** (AD-01N used
`NF-n`). New architectural constraints continue the `C` series as **`C-XIII`** and **`C-XIV`**. Contradictions
continue AD-01N's series as **`X-9 … X-17`**. Amendments that are logically required but deliberately
**NOT made** continue as **`A-14 … A-26`** (`A-1 … A-13` remain named and not made). New open questions
continue AD-01M's/AD-01N's series as **`AC-18 … AC-21`**; **`AC-4` is NARROWED and RESTATED, not renumbered.**
The uniqueness rule recommended below is labelled **`O-U`**.

**Scope discipline, stated once and honoured throughout.** No SQL, schema, table, column, migration, master
value or type appears anywhere. No screen, workflow, approval step or gate is designed (AD-01A **§8.5**).
**No commission formula, rate, slab, percentage, amount, milestone value, clawback quantum or TDS treatment
appears anywhere — `M-9` owns all of it. No lock-in number is proposed.** **`Q1`, `Q4`, `Q6`, `Q7`, `V-1`,
`V-2`, `V-3`, `V-11`, `V-12` and AD-01K's `K-18` attribution anchor are NOT reopened.** **No unrelated open
item is resolved** — `AA-1`, `AA-2`, `AA-4`, `AA-5`, `AB-1 … AB-3`, `AC-1 … AC-3`, `N-4`, `T-1`, `T-3`,
`T-5`, `T-6 … T-11`, `Q10`, `Q11`, `V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`,
`M-5`'s uniqueness half and `M-9` all carry forward unchanged.

---

## 1. Confirmed business rules

> ⟦PRODUCT-OWNER DECISION⟧ **Recorded first, as fact, before any analysis. Nothing in this section is the
> architect's, and nothing in it is weighed, ranked, softened or treated as an option. Clauses are numbered
> `PO-O1 … PO-O12` so the rest of the document can cite them precisely. The numbering is the architect's;
> the content is the owner's.**

### 1.1 The Helpdesk flow

| # | Clause |
|---|---|
| **PO-O1** | Helpdesk enters the client's **phone number** and presses **"Go."** BMexa checks whether an **existing Client record** exists. |
| **PO-O2** | If an existing Client record is found, BMexa **auto-fills the existing details**. |
| **PO-O3** | The interaction is then treated as a **REVISIT**. |
| **PO-O4** | A revisit is **NOT automatically a new site visit.** |
| **PO-O5** | A revisit is **NOT automatically a new CP registration.** |
| **PO-O6** | The **existing CP registration window is NOT reset or extended** merely because of this revisit. |
| **PO-O7** | **The Client record remains the long-lived record.** |

### 1.2 The CP Registration rule

| # | Clause |
|---|---|
| **PO-O8** | **A CP Project Registration is a distinct commercial event from a Helpdesk visit/revisit.** |
| **PO-O9** | If a **genuinely NEW** CP registration is made **after the previous CP registration window has expired**, it creates a **NEW CP Project Registration record** with a **NEW registration date** and a **NEW lock-in window per the applicable Project policy**. |
| **PO-O10** | The previous registration record is **NOT modified**. It **remains immutable historical data**. |

### 1.3 The worked example, in the owner's own terms

> **Project A, 30-day lock-in.**
>
> | Date | Event | Consequence, as the owner states it |
> |---|---|---|
> | **1 Sept** | **CP A registers Client X** | **Registration #1**, fixed date 1 Sept; its window eventually expires |
> | **10 Sept** | **Client X returns; Helpdesk finds existing Client X** | **REVISIT — NOT a new registration.** CP A's original window is **NOT reset** |
> | **10 Oct** *(after Registration #1 has expired)* | **Client X is genuinely registered again under CP B** | **Registration #2**, new date 10 Oct, new window **for CP B** |
> | **10 Oct, alternative** | **The new registration is explicitly made under CP A again** | **Registration #2 is STILL a new registration event** (new date, new window). **The old CP A Registration #1 remains unchanged.** |

### 1.4 The separation the architecture must never lose

| # | Clause |
|---|---|
| **PO-O11** | **Client identity (long-lived) ≠ Helpdesk visit/revisit (an interaction) ≠ CP Project Registration (a separate commercial registration event). These three must never be conflated.** |

### 1.5 The critical architectural implication, stated by the owner

> ⟦PRODUCT-OWNER DECISION⟧ **Verbatim in substance:**
>
> **AD-01N's `(CP × Client × Project)` scope describes WHAT a registration is ABOUT. It must NOT be read as
> implying a lifetime uniqueness constraint of "only one registration ever" for that triple.**
>
> **The architecture must permit MULTIPLE HISTORICAL `CP Project Registration` records for the same
> `(CP × Client × Project)` when the business explicitly creates a subsequent registration after the
> previous one has expired.**
>
> **Each registration preserves its own immutable:** registration date · **applicable lock-in policy
> snapshot** · calculated protection/expiry semantics · CP · Client · Project · creation/audit information ·
> and any other fields AD-01N establishes as necessary.
>
> **A revisit must NOT create a new CP Project Registration. A new registration MUST create a new CP Project
> Registration.**

### 1.6 The four prohibitions on inference

| # | Clause — **"Do not assume"** |
|---|---|
| **PO-O12·a** | **Do NOT assume a new Inquiry automatically means a new CP registration.** |
| **PO-O12·b** | **Do NOT assume a revisit automatically means a new registration.** |
| **PO-O12·c** | **Do NOT assume re-registration automatically happens just because the old registration expired.** |
| **PO-O12·d** | **The business process must explicitly distinguish the event that creates a new registration from ordinary revisit / activity / Inquiry behaviour.** |

### 1.7 The commercial firewall

> ⟦PRODUCT-OWNER DECISION⟧ **The single most load-bearing clause in the clarification, and the one
> [§2.9](#29-item-9--attribution-claim-vs-protection-record) and [§2.10](#210-item-10--how-much-of-ac-4-this-actually-resolves) turn on:**
>
> | # | Clause |
> |---|---|
> | **PO-O13** | **The new registration rule must NOT accidentally mean a CP automatically gets commission merely because a new registration exists.** |
> | **PO-O14** | **Preserve: CP Registration / protection ≠ CP Attribution ≠ Commission Eligibility ≠ Commission Payout.** |

### 1.8 What this clarification does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9` (AD-01N §B) are untouched by the clarification and remain in force.** In
> particular **`PO-N3`** (*the CP cannot reset, restart, refresh or extend the window*) and **`PO-N4`**
> (*re-registration, follow-ups, site visits, activities, transfers or other subsequent events must NOT
> reset the original registration date*) are **NOT relaxed** — the clarification is expressly consistent with
> them, because it permits a subsequent registration **only after the previous window has expired** and
> **only as a new record that leaves the previous one unchanged.** **This is the hinge of
> [§2.2](#22-items-2-and-3--the-correct-uniqueness-constraint).**

---

## 2. Reconciled architecture

> ⟦ARCHITECT ANALYSIS⟧ **The task's items 1–9 are answered in order. Each answer is tested against the
> chain, not asserted. Where an answer would require a new entity, the necessity test AD-01F, AD-01G,
> AD-01H, AD-01I, AD-01J, AD-01K, AD-01L and AD-01N have all applied is run in full and its working is
> shown.**

### 2.0 The map: three business concepts onto four existing architectural levels

> ⟦ARCHITECT ANALYSIS⟧ **`OF-1` — the clarification names three things that must never be conflated. The
> architecture already holds four levels, and the three map onto them cleanly without any addition. That is
> the headline result of this document and everything else follows from it.**
>
> | Owner's concept (`PO-O11`) | Architectural home | Established by | New? |
> |---|---|---|---|
> | **Client identity — long-lived** | **Person** (identity, §09 duplicate-detection subject) **and** the **Lead / work record** (Person-bounded, long-lived, *"not created by an inquiry and not ended by a disposition"*) | ⟦SOURCE⟧ **§06**, **§07**; **V-1** / **G-1** (approved) | **No** |
> | **Helpdesk visit / revisit — an interaction** | An **Activity on the work record's timeline**, referencing the Inquiry it concerns where one applies; *"revisit"* itself is a **derived characterisation**, never a persisted flag | **J-35**; **H-9**; **G-8** (read-time projection); ⟦SOURCE⟧ **§09** (*"follow-ups, site visits"*) | **No — see `OF-6`** |
> | **CP Project Registration — a commercial registration event** | The **new persisted commercial fact** AD-01N recommended at `NF-6`, **with its cardinality amended** | **AD-01N `NF-6`** (recommended, **not approved**) | **Yes — but already proposed by AD-01N, not added here** |
> | *(the fourth level, which the owner's trichotomy does not name and which is orthogonal to all three)* | The **Inquiry** — the commercial engagement unit | **V-1**; **J-34** | **No** |
>
> **The finding is that the owner's trichotomy is not a request for three new things. It is a request that
> three things the architecture already separates STAY separated — and that the fourth, the Inquiry, not be
> dragged in as a proxy for any of them.** ([§2.6](#26-item-6--interaction-with-ad-01js-origination-rule).)

### 2.1 Item 1 — does AD-01N's entity model still stand?

> ⟦ARCHITECT ANALYSIS⟧ **`OF-2` — YES. The entity stands, and the clarification STRENGTHENS the necessity
> argument rather than weakening it. One property of the entity — its cardinality — is falsified and must be
> amended. The entity itself is not.**

**Why the entity survives.** AD-01N's `NF-6` justified a new record on a scope argument: the protection fact
is **broader than an Inquiry** (it spans Inquiries) and **narrower than the CP relationship** (it is
per-client and per-project), and **no existing object sits at that scope.** The clarification does not
disturb that argument at any point. It does the opposite: `PO-O8` states in the owner's own words that a
registration **is a distinct commercial event** from the interaction that occasions it, and `PO-O11` demands
that it never be conflated with either the Client record or the visit. **An object the owner insists must
not be conflated with any other object is an object.**

**Why the necessity test now passes a FOURTH way.** AD-01N's `NF-5` set aside the honest alternative —
candidate **(i)**, a pure derivation over the existing claim set (*registration date = the earliest
origination date among Inquiries on this work record for this Project whose claim set names this CP*) — on
three grounds, all of which depended on open items (`Q10`, `Q11`, `AA-2`). **The clarification adds a fourth
ground, and this one does not depend on any open item:**

> ⟦ARCHITECT ANALYSIS⟧ **A `MIN` yields a date. It cannot yield a SEQUENCE.** Under `PO-O9` the triple may
> carry **several** registrations over time, each with its **own** fixed date and its **own** snapshotted
> lock-in period. A derivation over Inquiry origination dates has no way to say *"these two Inquiry dates
> belong to registration #1's window and those two to registration #2's"*, because **nothing in the Inquiry
> layer records that a registration ACT occurred** — `PO-O12·a` forbids inferring one from an Inquiry, and
> `PO-O12·b` forbids inferring one from a revisit. **The derivation is not merely unstable now; it is
> structurally incapable of representing what the owner has just described.** **Candidate (i) is eliminated
> on principle, not on open items.**

**Why the other candidates still fail, re-tested against the clarification.**

| AD-01N candidate | Status after the clarification |
|---|---|
| **(a)** The Inquiry's origination date + the CP claim on it | **FAILS, and now fails twice.** AD-01N showed it cannot hold the date still across a re-registration. The clarification adds the mirror defect: **a revisit that opens no Inquiry at all** (`PO-O4`, and [§2.6](#26-item-6--interaction-with-ad-01js-origination-rule)) leaves candidate (a) with **nothing to read**, while **a revisit that DOES open an Inquiry** (J-2, when interest arrives that no live Inquiry covers) would under candidate (a) produce a **new protection date — which `PO-O6` expressly forbids.** |
| **(b)** The attribution claim | **FAILS, unchanged.** A claim is scoped to one Inquiry (`K-18`, `K-52`) and `B-1` makes it inert beyond it. And under `PO-O14` a claim is now expressly a **different layer** from protection. |
| **(c)** The Assignment Log | **FAILS and is forbidden, unchanged and now more sharply.** `I-8`/`K-15`: *"No claim. Ever."* And `I-2`'s actor separation is decisive — the Assignment Log records **management** acts; a client walking in is a **customer** event. |
| **(d)** The Lead / work record | **FAILS and is forbidden, unchanged.** `K-38`/`J-36`/`G-1`: *"No claim. No persisted source. No commercial attribution fact."* It is also Person-scoped, not Project-scoped. **`PO-O7` confirms its role and thereby confirms that it is not this.** |
| **(e)** The Person | **FAILS and is forbidden, unchanged.** §06/§07, `K-38`. AD-01K's Candidate A and AD-01L's Alt 4, eliminated. |
| **(f)** The CP Ledger | **FAILS, unchanged.** §06: the accounting record **for the CP relationship**; no per-client, per-project dimension. |
| **(g)** The CP Profile / Relationship | **FAILS, unchanged.** Hanging a per-client, per-project row beneath it **is** the new record under another name — and under `PO-O9` it would have to be a per-client, per-project **sequence**, which makes the point plainer. |
| **(h)** The Booking | **FAILS, unchanged.** `K-47`. |
| **(i)** A pure derivation | **ELIMINATED — see `OF-2` above. This is the change.** |

> ⟦ARCHITECT RECOMMENDATION — `OF-2`, conclusion⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK: canonical
> entities, relationships, CP commission logic, source-of-truth rules, audit requirements.)*
>
> **AD-01N's `NF-6` `CP Project Registration` STANDS as an entity.** Its **Subject**, **What it asserts**,
> **Created by**, **Mutability** and **What it is NOT** rows are all **CONFIRMED**, and its
> **Mutability** row is now ⟦PRODUCT-OWNER DECISION⟧ rather than architect recommendation, because `PO-O10`
> states it (*"remains immutable historical data"*).
>
> **Exactly one row is falsified: `Cardinality`.** → **`X-9`**, **`A-14`**. The replacement is `O-U`,
> [§2.2](#22-items-2-and-3--the-correct-uniqueness-constraint).

### 2.2 Items 2 and 3 — the correct uniqueness constraint

> ⟦ARCHITECT ANALYSIS⟧ **`OF-3` — the clarification tells us the constraint is not *"one per triple ever."*
> It does not tell us what the constraint IS. This section derives it rather than restating the
> clarification, and it eliminates two alternatives on stated grounds before recommending one.**

**Step 1 — decompose AD-01N's falsified clause into its two independent claims.** AD-01N §C.4 said:
*"**At most one protection-bearing registration per subject triple.** The **first** one wins, permanently.
Subsequent registration acts for the same triple are recorded as events against it and change nothing about
it."*

| Claim | Statement | Status |
|---|---|---|
| **(C-a)** | A registration, once created, is **immutable** — its date, its snapshotted lock-in period and its scope never move, and no later act alters it | **CONFIRMED, and now ⟦PRODUCT-OWNER DECISION⟧ via `PO-O10`.** `PO-N3`/`PO-N4` unchanged. |
| **(C-b)** | There is **at most one registration RECORD** per triple for all time, and every later registration act is absorbed as an event against it — *"the first one wins, permanently"* | **FALSIFIED by `PO-O9` and §1.5.** |

**The error AD-01N made is identifiable and worth naming, because it is the kind that recurs.** AD-01N
correctly read `PO-N3`/`PO-N4` as *"nothing may move this date"* and then inferred *"therefore there is only
ever one date."* **The inference does not hold.** *"This record never changes"* and *"there is never a
second record"* are different statements, and the owner has now said the first is true and the second is
false. **Immutability is a property of a record; singularity is a property of a set.**

**Step 2 — three candidate constraints, stated so each can be tested.**

| # | Candidate | Statement |
|---|---|---|
| **(U-1)** | **Temporal exclusivity** | At most **one** registration per triple may be **protection-bearing (live)** at any instant. A new registration is admissible for a triple only when **no** live registration exists for it. |
| **(U-2)** | **No constraint** | Any number of registrations per triple, overlapping freely. The eligibility test simply asks *"is ANY registration for this triple live at the booking date?"* |
| **(U-3)** | **Queued renewal** | A new registration may be created at any time, but confers nothing until the prior one expires, at which point it becomes live back-to-back. |

**Step 3 — (U-2) is eliminated, and not by preference.** Under (U-2) a CP holding a live 30-day window could
register again on day 15, creating a second window running to day 45. **The union of the two windows extends
the CP's protection to day 45.** That is a reset/extension of the protection achieved by re-registration —
and ⟦PRODUCT-OWNER DECISION⟧ **`PO-N3`** forbids the CP to *"reset, restart, refresh, or extend the window,"*
while **`PO-N4`** names **re-registration first** in its list of events that must not reset the date.
**`PO-N3`/`PO-N4` are not reopened by the clarification** (§1.8), and the clarification is expressly
consistent with them: `PO-O9` permits a subsequent registration **only** *"after the previous CP registration
window has expired."* **(U-2) is eliminated.**

**Step 4 — (U-3) is eliminated, on the same ground plus one more.** A queued renewal produces
**uninterrupted** protection across the boundary: `R1 → R1+N`, then immediately `R2 → R2+N`. It does not move
a date, but it **restarts the window**, which `PO-N3` forbids in terms. Independently, the owner's worked
example is deliberately constructed with a **gap** — Registration #1 expires, the 10 Sept revisit does
nothing, and the new registration arrives on 10 Oct. **A queued form would have made the 10 Sept revisit the
natural moment to queue, and the owner explicitly says that moment creates nothing.** **(U-3) is eliminated.**

> ⟦ARCHITECT RECOMMENDATION — `O-U`, the uniqueness rule⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK:
> canonical entities, **relationships**, CP commission logic. **This is stated as a BUSINESS RULE. No
> database constraint, index, key or schema device is proposed, implied or derivable from it — and
> [§2.2.1](#221-why-o-u-cannot-be-a-database-uniqueness-constraint) explains why one could not express it
> anyway.**)*
>
> **`O-U` — For any `(CP relationship, client, Project)` triple:**
>
> 1. **At most ONE `CP Project Registration` may be protection-bearing at any given instant.**
> 2. **A registration act for a triple that already holds a protection-bearing registration creates NO new
>    registration record and alters the existing one in NO respect.** It is recorded as a **repeat-registration
>    event** against the existing registration, exactly as AD-01N `NF-27` event 2 requires — `PO-N3`,
>    `PO-N4`, `PO-O6`.
> 3. **A registration act for a triple ALL of whose registrations have expired MAY create a NEW registration
>    record**, carrying its **own** new fixed registration date and its **own** freshly snapshotted lock-in
>    period, and it leaves **every** prior registration record **entirely unchanged** — `PO-O9`, `PO-O10`.
> 4. **Therefore the triple carries, over time, an ORDERED, NON-OVERLAPPING SEQUENCE of immutable
>    registration records, of which AT MOST ONE is live at any instant and ANY NUMBER may be historical.**
> 5. **`O-U` is stated PER TRIPLE and says nothing whatever about two DIFFERENT CPs.** Two CPs may each hold
>    a live registration over the same `(client, Project)` at the same time; whether that should be
>    *permitted at creation* is **`AC-20`** and who *wins at a booking* is **`AC-15`** — **both open, neither
>    answered here, and `O-U` must not be read as answering either.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-4` — `O-U`'s real architectural payoff is not tidiness. It is what keeps
> AD-01N's eligibility calculation DETERMINATE, and that is a stronger justification than `PO-N3`/`PO-N4`
> alone.**
>
> AD-01N **§F.1 step 1** says: *"Locate **the** `CP Project Registration` for (that CP, that client's work
> record, that booking's Project)."* **Under a sequence, "the" is undefined** — there may be four. → **`X-12`**.
>
> **The repair is forced and it is `O-U`.** Given a booking date `B`, the registration consulted is **the one
> whose window contains `B`** — and **because `O-U` guarantees non-overlap, AT MOST ONE CAN CONTAIN `B`.** The
> lookup is therefore **unique when it succeeds and empty when it fails**, with no tiebreak required and none
> invented.
>
> - `B` inside registration #2's window → that registration supplies `R` and `N`. **Deterministic.**
> - `B` in the **gap** between #1's expiry and #2's creation → **no live registration at `B`**; `PO-N7`
>   applies; the determination records a negative outcome; the only route to payment is a Site Head exception
>   (AD-01N §H). **Deterministic.**
> - `B` inside registration #1's window → registration #1, **even though #2 exists and is "the latest."**
>   **The latest registration is NOT the applicable one; the containing one is.** This is a genuine
>   implementation trap and it is stated so it is not discovered later.
>
> **Without `O-U`, §F.1 step 1 would need a tiebreak rule, and AD-01N `NF-19(7)` and `C-IX` establish that
> inventing a precedence rule is a §88 authorization change, not an architect's choice.** **`O-U` is
> therefore the constraint that prevents `AC-15`'s question from arising a second time INSIDE a single CP.**

#### 2.2.1 Why `O-U` cannot be a database uniqueness constraint

> ⟦ARCHITECT ANALYSIS⟧ **`OF-5` — stated because the task asked for a business rule rather than a database
> constraint, and because the reason it cannot be one is itself an architectural requirement.**
>
> **"Live" is not a stored property. It is a function of `(R, N, D)` — the registration date, the snapshotted
> lock-in period, and the date you are asking about.** Therefore:
>
> 1. **No registration ever acquires an "expired" state, and nothing is ever written to a registration when
>    its window lapses.** AD-01N §C.4 already requires that the record *"has no states"*; `O-U` preserves that
>    and depends on it. **Persisting expiry would make the registration a lifecycle-bearing object, which
>    `Q1` and AD-01N §C.4 both forbid, and would create a second source of truth for a fact that is exactly
>    derivable — the identical objection sustained at AD-01A §3.6/§5.2, `G-9`, `J-36` and `G-8`.**
> 2. **Every read of "is this registration live?" REQUIRES a date parameter. There is no timeless answer.**
>    A screen, report, API or export that presents liveness without stating the date it was evaluated at is
>    presenting an undated fact about a time-varying property. ⟦SOURCE⟧ **R6**: *"an event records the facts
>    as they were at the time. Joining to live tables to render history is wrong."*
> 3. **`O-U` is enforced at the moment of the registration ACT**, by evaluating liveness at that act's own
>    civil date — which means **`O-U` consumes `AC-6`'s unratified boundary convention** ([§2.11](#211-item-11--which-other-ac-items-this-clarification-affects)).
> 4. **`O-U`'s middle term is underspecified and the clarification does not fix it.** AD-01N wrote the subject
>    as *"(CP relationship, **Person / work record**, Project)"* with a slash; the clarification says
>    *"Client."* Under `G-1` a work record is Person-bounded and long-lived, so the two coincide **today** —
>    they diverge only under some answers to **`M-5`**. **`O-U` is only as precise as its middle term.**
>    → **`AC-21`**. **`M-5` is NOT resolved, NOT narrowed and NOT branched here.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-17` — `O-U`'s enforceability is bounded by §09 duplicate detection, and this is
> the clarification's sharpest unintended consequence.**
>
> `O-U` is a rule over a triple whose middle term is **an identity the system may hold twice.** `PO-O1` makes
> the **phone number** the lookup key. ⟦SOURCE⟧ **§09** requires duplicate detection; **`M-5`** owns its
> boundary and **is open**.
>
> **If one human exists as two Client records, the Helpdesk lookup may find the record that does NOT carry
> the live registration.** The Helpdesk then performs a registration act that `O-U` should have blocked,
> producing **exactly the overlapping-window state `O-U` exists to prevent** — and producing it invisibly,
> because from the system's point of view the triples genuinely differ.
>
> **And the repair is worse than AD-01N priced it.** `NF-11` addressed a merge by ruling that *"the EARLIER
> date survives."* **For a sequence that rule is wrong** — it would destroy registration #2's independent
> existence, its own snapshotted `N` and its own audit lineage, all of which `PO-O10` makes immutable
> historical data. **A sequence-merge is a different operation from a date-reconciliation, and its correct
> shape is NOT determined here.** → **`X-16`**, **`A-26`**. **`Q10` (merge) and `M-5`'s uniqueness half are
> NOT resolved, NOT narrowed and NOT branched here** — they are named as newly gating for `O-U`.

### 2.3 Item 4 — how a revisit is represented, and whether a new entity is necessary

> ⟦ARCHITECT ANALYSIS⟧ **`OF-6` — the necessity test, run in full. The conclusion is that NO new
> Visit/Revisit entity is required, and the working is shown rather than the conclusion asserted, because the
> task required the test to be run rather than assumed.**

**Step 1 — decompose the Helpdesk flow into the facts it actually produces.**

| Step in `PO-O1 … PO-O3` | What it is, architecturally | What it persists |
|---|---|---|
| Helpdesk enters a phone number and presses "Go" | **A search.** ⟦SOURCE⟧ **§45**: search must be tenant-safe, permission-aware and *"must NEVER become a side door around authorization"* | **Nothing.** Possibly an **audit event** — → **`AC-19`** |
| BMexa checks whether an existing Client record exists | **§09 duplicate detection**, operating on the **Person** — *"is this the same human?"* — which `T8`, `K-4`/`K-5` and AD-01H §12 row 2 all establish is a **different control at a different level** from §11 clash detection. Its key is **`M-5`, open** | **Nothing.** It is a query, not an assertion |
| BMexa auto-fills existing details | **A read-time projection.** `G-8`: *"every fresh-context behaviour is produced by a read-time projection, never by a write-time mutation"* | **Nothing** |
| The interaction is treated as a **REVISIT** | **A characterisation of the occasion**, fully derivable: *the work record existed before this interaction* | **Nothing new** — see step 2 |
| The client is physically present and is dealt with | **An interaction that occurred** — a real event with a time, an actor and a subject | **One Activity** on the work record's timeline |

**Step 2 — the candidate homes, each disqualified by a position already taken, or not.**

| # | Candidate home | Verdict | Why |
|---|---|---|---|
| **(a)** | **An Activity on the work record's timeline** | **PASSES — and it is where the architecture already put it** | **`J-35`** places the activity timeline on the **work record**, *"each activity referencing the Inquiry it concerns"*; **`H-9`** confirms it; ⟦SOURCE⟧ **§09** already names *"follow-ups, **site visits**"* among the things the CRM must support, so an in-person interaction is **already a first-class activity kind in the sources.** ⟦SOURCE⟧ consolidated **§5** requires an intake timeline event carrying *"the creation time and relevant source/assignment context."* **The carrier exists, is canonical, and needs no extension.** |
| **(b)** | **The Assignment Log** | **FAILS, and is forbidden** | ⟦SETTLED⟧ **`I-8`/`K-15`**: it owns custody and management intent and **"No claim. Ever."** Decisively, **`I-2`**'s actor separation: the Assignment Log records acts by **managers**; a client walking in is a **customer** event with no management actor at all. |
| **(c)** | **A new Inquiry** | **FAILS — and this is the decisive test** | Under **`J-2`** whether an Inquiry opens depends **only** on (i) whether a customer-generated expression of interest arrived and (ii) whether a non-terminal Inquiry covers it. **"Is this a revisit?" is not an input to `J-2` and never has been.** A revisit may produce **no Inquiry, one continuation, or one new Inquiry**, and which of the three it produces is determined by the CONTENT of the interaction, never by its revisit-ness. **[§2.6](#26-item-6--interaction-with-ad-01js-origination-rule).** |
| **(d)** | **The CP Project Registration** | **FAILS by the owner's own terms** | **`PO-O5`**, **`PO-O6`**, and §1.5: *"A revisit must NOT create a new CP Project Registration."* |
| **(e)** | **The Person** | **FAILS, and is forbidden** | ⟦SOURCE⟧ **§06**/**§07**, **`K-38`**: *"No claim. No source. No commercial fact."* An interaction is not identity. `PO-O7` confirms the Client record's role and thereby confirms it is not the carrier of individual interactions. |
| **(f)** | **A new `Visit` / `Revisit` canonical entity** | **FAILS the necessity test — see step 3** | Every fact it would carry already has a home; the one fact that looks new is derived; and it carries no commercial fact, so it has no claim to a commercial-scoped object. |

**Step 3 — the necessity test against a `Visit` / `Revisit` entity, fact by fact.**

> ⟦ARCHITECT ANALYSIS⟧ **The standard is AD-01I `I-9`'s, which AD-01G `G-4`, AD-01H `H-10`, AD-01J `J-52`
> and AD-01L each re-applied and which AD-01N `NF-6` had to meet: *no new entity unless every existing
> concept demonstrably fails.* AD-01N is the only document in the series where it passed. It does not pass
> here.**
>
> | Fact a `Visit` entity would carry | Existing home | New? |
> |---|---|---|
> | **Who was present** | The **Person** on the work record | No |
> | **When** | The **Activity's** own time | No |
> | **Which client relationship** | The **Activity's** parent work record | No |
> | **Which Project it concerned, if any** | The **Inquiry the Activity references** (`J-35`, `H-9`) — and **legitimately absent** where no project interest was expressed | No |
> | **Who on the builder side dealt with it** | The Activity's recorded actor; ⟦SOURCE⟧ **§57** *"preserve historical actor identity"* | No |
> | **That it was a REVISIT rather than a first visit** | **DERIVED** — *the work record existed prior to this Activity.* Persisting it would create **a second source of truth for a fact the timeline already carries**, which is the identical objection sustained at AD-01A §3.6/§5.2, **`G-9`**, **`G-8`**, AD-01H §4.2 and **`J-36`** | **No — and persisting it would be a defect** |
> | **That a SITE VISIT occurred** | ⟦SOURCE⟧ **§09** already names site visits as a supported activity. **Whether the activity vocabulary distinguishes *Helpdesk walk-in* from *site visit* is `W-1`'s (activity/response vocabulary), which is OPEN and is NOT resolved here.** `W-1`'s openness is about **which values exist**, not about **whether a carrier exists** — the carrier exists | No |
>
> **And the decisive general ground: a revisit carries NO COMMERCIAL FACT.** It names no source, no campaign,
> no CP, no claim, no project of its own and no money. Under **`J-16`**, **`I-6`** and **`I-7`**, an act that
> carries no commercial fact has no business acquiring a commercial-scoped object, and under **`J-42`** the
> architecture is built so that such an act **has nowhere to put one.** **AD-01I `I-9`'s standard — *"no new
> canonical business object is necessary, and none is proposed"* — is MET.**

> ⟦ARCHITECT RECOMMENDATION — `OF-6`, conclusion⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** **No entity is proposed. This is a recommendation that NOTHING be added.**)*
>
> **A revisit is represented as an ORDINARY ACTIVITY on the long-lived work record, with `"revisit"` a
> DERIVED characterisation of the occasion and never a persisted flag, state, status or lifecycle value.**
>
> **No `Visit` entity, no `Revisit` entity, no visit lifecycle, no visit counter and no `is_revisit` field is
> proposed, designed or implied. The necessity test FAILS, and the series' record of consecutive
> no-new-entity findings is unbroken on this question.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-7` — the one honest strain, stated and resolved without inventing anything.**
>
> **Does the LOOKUP itself need a record, even when the Helpdesk does nothing further?** A phone-number
> lookup that returns an existing Client **discloses that the builder holds that person** — which is
> precisely the kind of disclosure ⟦SOURCE⟧ **§11** guards (*"do not expose sensitive competing claims
> unnecessarily"*), ⟦SOURCE⟧ **§45** guards (*"search must NEVER become a side door around authorization"*)
> and ⟦SOURCE⟧ **§39** guards (*"do not expose Builder-internal sensitive information"*). ⟦SOURCE⟧ **§54**
> requires audit to capture *"actor, action, time, target."*
>
> **No source says whether a lookup is an auditable access event. → `AC-19`, NOT resolved here.**
>
> **But the strain does not reach the entity question in either branch**, and that is the point worth
> recording: **if the answer is yes, the artefact is an AUDIT EVENT (`R6`), never a business record.** An
> audit event is exactly the artefact for *"who looked at what, when,"* it is append-only by grant, and it
> requires no canonical entity. **So even the yes-branch adds nothing to the domain model.**

### 2.4 Item 5 — how a NEW registration is explicitly and deliberately created

> ⟦ARCHITECT ANALYSIS⟧ **`OF-8` — `PO-O12·d` requires that the creating event be DISTINGUISHABLE, not
> inferable. The architecture's answer is a short positive rule with a much longer negative half, and the
> negative half is where the risk is.**

**The positive rule.** A `CP Project Registration` is created when, and only when, **all** of:

| # | Condition |
|---|---|
| **1** | An **explicit registration act** is performed — an act whose **declared purpose** is to register this client against this CP for this Project. Not a lookup. Not an auto-fill. Not an activity. Not a site visit. Not an Inquiry origination. Not a transfer. |
| **2** | The act **names all three subjects**: the CP relationship, the client, the Project. ⟦SETTLED⟧ **Whether a Project is mandatory at this moment is `AA-2`, which AD-01N `NF-5(3)` already placed ON this rule's critical path. `AA-2` is NOT resolved here and its urgency RISES** — see `OF-12`. |
| **3** | **No protection-bearing registration exists for that triple at the act's own civil date** — `O-U`(1), `O-U`(2). |
| **4** | The actor holds the **registration permission** — AD-01N `NF-26(9)`, a permission and never a role name (⟦SOURCE⟧ **R2**); and the act satisfies whatever *"successfully registers"* means, which is **`AC-10`, open**. |

> ⟦ARCHITECT RECOMMENDATION — `C-XIII`, a constraint and a prohibition⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, relationships, CP
> commission logic. This is the architectural form of `PO-O12·a … d`.)*
>
> **`C-XIII` — NO event other than an explicit registration act may create a `CP Project Registration`.**
> Specifically, **none of the following creates one**:
>
> | Event | Basis for the prohibition |
> |---|---|
> | A Helpdesk **phone-number lookup** | `PO-O1`; it is a query (`OF-7`) |
> | **Auto-fill** of existing details | `PO-O2`; it is a read-time projection (`G-8`) |
> | A **revisit** | **`PO-O5`**, **`PO-O12·b`** |
> | An **activity**, follow-up, call or **site visit** | **`PO-O4`**; `PO-N4`; `I-6`/`I-7`/`J-16` — a work act must never create or extend a commercial claim's life |
> | The **origination of an Inquiry** | **`PO-O12·a`** |
> | A **re-engagement** (`J-37` act 2) or **additional interest** (act 3) | `PO-O12·a`; `PO-N4`; AD-01N `NF-7` output 4 |
> | **Manager redistribution / transfer** (`J-37` act 5) | `I-4 … I-7`, `V-12`, `K-54`, `J-42`; `PO-N4` |
> | A **Dump**, a reactivation, or a derived record-level work condition | `I-7`; AD-01N `NF-21` |
> | A **Booking**, cancellation or unit transfer | `K-47`; `K-40` |
> | **The EXPIRY of a prior registration** | **`PO-O12·c` — stated by the owner expressly.** **Expiry creates only the ADMISSIBILITY of a new registration under `O-U`(3). It never creates the registration.** |
>
> **Why the last row must be written down.** Expiry is a **derived** property (`OF-5`) — it happens to the
> data without anyone doing anything. **An architecture in which a derived, time-based property could
> instantiate a money-bearing commercial record would be creating commercial facts with no actor, no
> authorization context and no audit subject** — which ⟦SOURCE⟧ **§54** and **R6** cannot represent and
> ⟦SOURCE⟧ **§88** places squarely in MUST-ASK. **`PO-O12·c` and the architecture agree, independently.**

> ⟦ARCHITECT RECOMMENDATION — `C-XIV`, a constraint⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.**)*
>
> **`C-XIV` — A Helpdesk interaction, INCLUDING the successful identification of an existing Client, is a
> WORK and RELATIONSHIP fact. It must never be an input to any COMMERCIAL determination.**
>
> It must not be an input to Inquiry individuation (**`J-2`** reads *interest*, never *presence*); not to
> attribution (**`K-18`**); not to the protection window (**`PO-O6`**); not to eligibility (**`K-48`** as
> extended by `NF-28`); and not to payout. **It MAY legitimately be an input to WORK** — queueing, summoning
> a Sales Rep (⟦SOURCE⟧ **§42**), §43 pending enrichment — **and to AUDIT.**
>
> **Why this needs to be a stated constraint.** `I-7` established that *"operationally active"* and
> *"commercially active"* are two conditions with two producers that must never be derived from each other.
> **The revisit introduces a THIRD condition that `I-7` did not enumerate — *present and identified* — and it
> is neither of the other two.** A client can be present and identified while **commercially inert** (no
> interest expressed) and **operationally inactive** (no live custody obligation). **`PO-O11`'s "must never be
> conflated" is exactly this prohibition stated commercially; `C-XIV` states it architecturally.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-9` — a consequence for §42 that is a real cost and is not softened.**
> ⟦SOURCE⟧ **§42** describes the Helpdesk target workflow as *"name, limited phone identifier where
> appropriate, CP/source, quick registration"* — **one fast act.** `PO-O12·d` requires the registration event
> to be **explicitly distinguishable** from the lookup and the revisit, which means the Helpdesk flow now has
> **at least two distinguishable steps where §42 implied one.** ⟦SOURCE⟧ **§95** demands *"MINIMUM NECESSARY
> FRICTION, not minimum possible taps"* and, decisively, *"A one-tap action that creates financial
> corruption is worse than a three-tap action that prevents it."* **AD-01N `NF-26(9)` already recorded that
> speed and money-bearing-ness pull against each other here and that the resolution is NOT designed. That
> remains true, and the clarification makes the tension SHARPER rather than resolving it. No screen,
> workflow, step or gate is designed here** (AD-01A **§8.5**).

### 2.5 What one Helpdesk act actually produces — AD-01N `NF-7` amended

> ⟦ARCHITECT RECOMMENDATION — `OF-10`, the amended output table⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** This **supersedes AD-01N `NF-7`'s table** — → **`X-10`**, **`A-15`** — and
> follows `I-4`'s *"one act, several outputs"* shape exactly. **No workflow and no screen is proposed.**)*
>
> **A Helpdesk interaction is ONE business act with up to FIVE recorded outputs. NONE of the five implies any
> other, and each has a different scope and a different lifetime.**
>
> | Output | Produced when | Scope | Lifetime |
> |---|---|---|---|
> | **0. An identity lookup** | **Always** — the phone number is searched | Person | **Nothing persisted**; possibly an audit event (**`AC-19`**) |
> | **1. Work-record resolution** | **Always** — the client is either **MATCHED** (→ this interaction is a **REVISIT**) or **CREATED** (→ a first visit) | Person | **Permanent** — `PO-O7`, `G-1` |
> | **2. An Activity on the timeline** | **Always** — the interaction occurred | Work record, referencing an Inquiry where one applies | **Permanent, append-only** — `J-35`, `H-9`, `R6` |
> | **3. An Inquiry** | **Only if `J-2`'s condition holds** — a customer-generated expression of interest arrived that no non-terminal Inquiry covers. **If a live Inquiry covers it, the expression is an activity on that Inquiry. If NO interest was expressed at all, `J-2`'s antecedent fails and NOTHING is produced here** | Person × Project × engagement | **Terminal exactly once** (`H-4`) |
> | **4. A CP attribution claim** | **Only if a producer asserts one**, on whichever Inquiry output 3 resolved to — a new one, or a live one (in which case it is an ordinary **§11** clash, `K-12`) | **One Inquiry** | Append-only, never overwritten (`K-17`); inert beyond that Inquiry (`B-1`) |
> | **5. A CP Project Registration** | **Only if an EXPLICIT REGISTRATION ACT is performed (`C-XIII`) AND no protection-bearing registration exists for the triple (`O-U`)** | **CP × client × Project** | **Permanent and immutable** — `PO-O10` |
>
> **What changed from AD-01N `NF-7`, and why it matters.** `NF-7` gave four outputs and made its output 4
> fire *"only if none already exists for (CP, Person, Project)."* **Two corrections:**
>
> 1. **The test is LIVENESS, not existence** — `O-U`(3) permits a new registration once a prior one has
>    expired, which `NF-7`'s existence test forbids.
> 2. **Existence-or-liveness is NECESSARY but not SUFFICIENT.** `NF-7` made the registration fire
>    *automatically* as an output of the Helpdesk act. **`C-XIII` and `PO-O12·d` require an explicit act.**
>    `NF-7` as literally written would produce a registration from a lookup — exactly what `PO-O5` forbids.
>
> **Five consequences, each counter-intuitive and each stated because it will otherwise be discovered during
> implementation:**
>
> 1. **Output 5 can be present while output 3 is absent** — a registration made while a live Inquiry already
>    covers the interest. (AD-01N already had this.)
> 2. **Output 3 can be present while output 5 is absent** — a re-engagement opens Inquiry #2 while
>    registration #1 is still live; `O-U`(2) forbids a second registration and `PO-O6` forbids the window
>    moving. **This is the owner's 10 September case exactly.**
> 3. **Outputs 0, 1 and 2 can be the ONLY outputs** — a client walks in, is identified, expresses no
>    interest, and no CP registers them. **This is the pure revisit, and the architecture records it as one
>    Activity and nothing else.**
> 4. **Output 5 can be present while output 4 is absent.** A registration is not a claim — **`PO-O14`**,
>    `C-XI`. This is the crux of [§2.9](#29-item-9--attribution-claim-vs-protection-record).
> 5. **Output 2 always fires.** Every Helpdesk interaction leaves a timeline trace whether or not it produces
>    anything commercial. **That is what makes a revisit provable without an entity.**

### 2.6 Item 6 — interaction with AD-01J's Origination Rule

> ⟦ARCHITECT ANALYSIS⟧ **`OF-11` — the task required `J-2` to be re-examined closely against "revisit." It
> has been. `J-2` is NOT contradicted, is NOT narrowed, and does NOT require amendment. What it requires is
> one note, because the business word and the architectural word will otherwise be confused.**

**(a) Does a revisit ever create a new Inquiry on its own? — NO. Never "on its own."**

**`J-2`'s antecedent is *a customer-generated expression of interest*.** A revisit is an **interaction**, and
an interaction is not, by itself, an expression of interest. **`J-2` reads two things and only two things:**
(i) did an expression of interest arrive, and (ii) does a non-terminal Inquiry on that work record cover it.
**Whether the client is new or returning is not among them, and never was.**

| The interaction contains… | `J-2`'s answer | `J-37` act |
|---|---|---|
| **No expression of interest** (collecting paperwork, accompanying a relative, a post-sale query) | **No Inquiry.** `J-2`'s antecedent is unsatisfied | **None of the six.** It is an Activity and nothing else |
| **Interest covered by a live Inquiry** | **No new Inquiry** — an activity on that Inquiry | **Act 1 — Continuation** |
| **Interest not covered by any non-terminal Inquiry** | **A new Inquiry**, with its own origination facts and its own claim set | **Act 2 — Re-engagement** (or **act 3 — Additional interest**, or **act 4 — Return after conversion**) |

**So the revisit does not determine the Inquiry outcome. The CONTENT of the interaction does.** And this is
not a special property of revisits: **`J-46`** already established that `J-2` never reads a prior Inquiry's
*outcome*; the same structural property means it never reads the record's prior *existence* either.
**This is a CONFIRMATION of `J-2` from a direction the architecture did not supply — not a new finding, and
not a contradiction.**

> ⟦ARCHITECT ANALYSIS⟧ **The naming hazard, and it is the most expensive confusion available here.**
> **The business word "revisit" and the architectural act "`J-37` act 2 — Re-engagement" are NOT the same
> thing and must never be treated as synonyms.** A revisit may be act 1, act 2, act 3, act 4, or **none of
> the six.** **"Revisit" is a property of the OCCASION; `J-37`'s acts classify what the occasion PRODUCED.**
> `J-37` should carry an explicit note to that effect, and *"revisit"* must **not** be added as a seventh act
> — it is not one, because it produces nothing of its own. → **`X-17`**, **`A-24`. AD-01J is NOT edited.**

**(b) Does a new CP registration require, or imply, a new Inquiry? — NO. They are independent.**

**`PO-O12·a` states one direction** (*a new Inquiry does not mean a new registration*) and `C-XIII` states it
architecturally. **The converse is equally true and is entailed by `OF-10` consequences 1 and 4:** a
registration act performed while a live Inquiry covers the interest produces **no** Inquiry, because `J-2`
forbids one.

**But they will very often CO-OCCUR, and co-occurrence is not implication.** AD-01N `NF-4(a)` observed that a
§42 Helpdesk registration **with the client present and expressing interest** *is* a customer-generated
commercial origination event, so `J-2` fires and `K-17` fixes the new Inquiry's origination facts at the same
moment the registration is created. **The architecture must not derive either from the other.** This is
**`I-7`'s principle applied a third time** — two conditions, two producers, never derived from one another —
and `C-XIII` plus `C-XIV` make it structural rather than policed.

> ⟦ARCHITECT ANALYSIS⟧ **`OF-12` — at the SECOND registration the two DECOUPLE visibly. This is a
> configuration AD-01N did not contemplate, and it is stated because it drives straight into `AC-4`.**
>
> **Trace the owner's own example.** 1 Sept: CP A registers → Registration #1 + Inquiry #1 + CP A's claim on
> Inquiry #1. Inquiry #1 is Dumped. 10 Sept: the client returns and expresses interest in Project A →
> **revisit**, and because no non-terminal Inquiry covers it, **`J-2` opens Inquiry #2** (with its own claim
> set, **whose contents are `B-2`'s question, unanswered**). Registration #1 is **untouched** — `PO-O6`.
> 1 Oct: registration #1's window lapses. 10 Oct: **the client is genuinely registered again under CP B →
> Registration #2.**
>
> **Now ask what Inquiry CP B's registration attaches to.**
>
> - **If Inquiry #2 is still live on 10 Oct**, `J-2` **forbids** a new Inquiry. So **Registration #2 exists
>   with NO Inquiry of its own**, over a Project whose only live Inquiry carries somebody else's claim set —
>   or nobody's.
> - **If CP B is to be on that Inquiry's claim set at all**, the only representable route is to **file a claim
>   on an Inquiry CP B did not originate** — which `K-17`'s append-only claim set *can* represent, which
>   AD-01N `NF-7` output 3 already anticipated as *"an ordinary §11 clash (`K-12`),"* and whose
>   **admissibility is `Q11` (late filing), OPEN.**
>
> **Three consequences, all named and none resolved:** **`Q11` acquires a first-class consumer it did not
> have**; **`AC-15`'s priority rises**, because `O-U` is per-triple and therefore permits CP A and CP B to
> hold concurrent live windows over one `(client, Project)`; and **`AA-2` becomes more urgent**, because a
> registration act that produces no Inquiry is precisely the *"claim with nothing to attach to"* that `AA-2`
> registers. **`Q11`, `AC-15` and `AA-2` all carry forward unresolved.**

### 2.7 Item 7 — interaction with Dump and re-engagement (AD-01I)

> ⟦SETTLED⟧ **AD-01I's decomposition is used unchanged and is NOT redefined:** Inquiry-level = a persisted
> commercial disposition carrying a classified, preserved `Q7` reason (`V-11`); record-level = a derived,
> non-persisted work condition (Model D, `I-8`); manager redistribution = a work operation that **never
> creates an Inquiry, never changes disposition and never changes attribution** (`I-4 … I-7`, `V-12`).

| Question | Answer | Basis |
|---|---|---|
| Does a **Dump** affect the registration or its window? | **No.** The clock started at `R` and runs to the end of its snapshotted window regardless of what happens to any Inquiry | AD-01N `NF-21`; `PO-N1`, `PO-N4`; `NF-9` |
| Does a **Dump** make the triple eligible for a new registration? | **No. Only EXPIRY does that** — `O-U`(3). **A Dump is not an expiry**, and the two must never be conflated: one is a commercial disposition on an Inquiry, the other is a derived temporal property of a registration. **They are at different levels and neither is an input to the other** | `O-U`; `NF-9`; `C-XIII` |
| Does **manager redistribution** create, reset or extend a registration? | **No — and it is now structurally impossible rather than merely forbidden.** AD-01N relied on `PO-N4` naming transfers in a list. **`C-XIII` is stronger: redistribution is not a registration act, so it is excluded CATEGORICALLY rather than by enumeration.** `I-6`'s reasoning applies *a fortiori* — if a management act may not manufacture an attribution claim, it certainly may not manufacture a money-bearing protection window | `I-4 … I-7`, `V-12`, `K-54`, `J-42`; **`C-XIII`** |
| Does the derived record-level **reactivation** affect it? | **No.** `I-7`: *"operationally active"* and *"commercially active"* are two conditions with two producers, and neither is derived from the other. **`C-XIV` adds the third condition — *present and identified* — and forbids deriving anything commercial from it** | `I-7`; **`C-XIV`** |
| Does a **re-engagement** (`J-37` act 2) start a new window? | **No.** It may open a new Inquiry and a new claim set; **the registration layer is untouched.** If a registration is live, `O-U`(2) forbids a second; if none is live, a new registration still requires an **explicit act** (`C-XIII`), which a re-engagement is not | `PO-N4`, `PO-O12·a`; `O-U`; `C-XIII` |
| Does a **revisit on a record with no live Inquiry and no expressed interest** make the record operationally active again? | **NOT ANSWERED, and not answerable here.** This is **`V-4`/`I-7`'s reactivation question**, and the revisit supplies a **THIRD route into it that `I-7` did not enumerate** — `I-7` named two producers (management redistribution → a work obligation; a customer's new inquiry → both). **A present-but-uninterested client is neither.** → **`V-4` is NOT resolved, NOT narrowed and NOT branched here.** It is named only because the clarification has widened its inbound edges | `I-7`; **`V-4`, open** |
| Does a later Inquiry's closure affect an earlier registration? | **No.** Registrations are not Inquiry-scoped | `NF-9` |
| Does a **different CP's** later registration affect this one? | **No — it creates its own, independent window.** What happens when both are live at one booking is **`AC-15`**; whether the second may be CREATED at all is **`AC-20`**. **Both open** | ⟦SOURCE⟧ **§11**; `C-IX` |

> ⟦ARCHITECT ANALYSIS⟧ **`OF-13` — `NF-9`'s structural payoff survives the clarification INTACT. This is
> checked rather than assumed, because the clarification multiplies the objects on the registration side.**
>
> **`B-1`:** *"No claim, resolved attribution, entitlement, adjudication, source, campaign, channel, priority
> or disposition **recorded on a terminal Inquiry** has any effect whatsoever on any other Inquiry."*
>
> **A SEQUENCE of registrations is still not recorded on any Inquiry.** Every member of the sequence lives on
> the `(CP, client, Project)` triple. **Therefore a sequence of windows that survives several Dumps and is
> tested against a booking on a much later Inquiry still violates nothing in `B-1` — nothing crosses the
> terminal boundary, because nothing that crosses it was ever on it.** **`NF-9` holds unchanged, and for the
> same reason: the protection was modelled at the correct scope in the first place.**
>
> **What `B-1` still forbids and the clarification does not attempt:** no earlier claim moves, extends or
> re-scopes; no later Inquiry inherits a source, a campaign, a disposition or a resolved attribution.
> **Under any reading in which a CP needs a claim on the later Inquiry, that claim must still come from
> somewhere — which is `B-2`, and `B-2` is STILL NOT ANSWERED**
> ([§2.10](#210-item-10--how-much-of-ac-4-this-clarification-actually-resolves)).

### 2.8 Item 8 — an expired registration followed by a new one: different CP, and same CP

> ⟦PRODUCT-OWNER DECISION⟧ **Both are explicitly confirmed valid by `PO-O9` and the worked example. They are
> not weighed here. What follows is only the architectural consequence of each.**

**(a) A DIFFERENT CP — CP A's window expires, CP B registers.**

| Consequence | Statement |
|---|---|
| **`O-U` is satisfied trivially** | The **triple changes** — `(CP B, X, Project A)` is a different subject. This is CP B's **FIRST** registration, not a second registration of anything |
| **Registration #1 is untouched** | It remains, immutable, permanently retrievable, and continues to be the provable basis for **every eligibility determination made during its own window** — `PO-O10`, `R6`, `C-II` |
| **Expiry ≠ revocation ≠ voidness** | Registration #1 **expired**; it was not cancelled, withdrawn, superseded or invalidated, and **nothing was written to it.** A determination made on 20 September against registration #1 **remains correct forever** and is not disturbed by registration #2's existence — `C-II`: *a rule may assign credit for a future conversion, never reassign a past one* |
| **CP A's attribution is untouched** | CP A's claim on Inquiry #1 remains, permanently, the record of who produced **that** engagement — `K-17`, `K-18`, `B-1`. **Registration #2 does not and cannot reach it** |
| **Concurrency becomes structurally possible** | `O-U` is per-triple, so CP A and CP B **could** hold overlapping live windows if CP B registered before CP A's expired. **The owner's example deliberately avoids this by sequencing them, and that avoidance is NOT evidence about the overlapping case.** → **`AC-20`** (may the second be created at all?) and **`AC-15`** (who wins if both are live?). **Neither is answered** |

**(b) The SAME CP — CP A's window expires, CP A registers again. The case the clarification calls out.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-14` — three consequences, and the second is the one that breaks AD-01N.**
>
> **1. It is what falsifies *"the first one wins, permanently."*** The first registration wins **for its
> window**, not for all time. After expiry, a subsequent registration **by the same CP** is a **different
> commercial event** with a different date, a different audit lineage, and a **possibly different** lock-in
> period. **A model in which the two were one record could not represent that the CP's protection LAPSED and
> was RE-ESTABLISHED — which is precisely the commercial fact the owner is describing.** → **`X-9`**,
> **`A-14`**.
>
> **2. *"The registration for (CP, client, Project)"* ceases to be a well-defined singular reference.** Every
> rule, determination, exception, audit event, portal view, report and export that references *"the
> registration"* must reference **a SPECIFIC registration record, by its own identity — never by the triple.**
> This directly breaks AD-01N **§F.1 step 1** (→ **`X-12`**, **`A-16`**), and it has a second, less obvious
> casualty: **AD-01L's `C-X`** requires a citation's stated ground to be *"a fact that cannot subsequently
> change."* **A registration DATE satisfies `C-X`. "The triple's registration date" does NOT, because under a
> sequence the triple has several.** Any citation must therefore name **the registration RECORD it cites**,
> not the triple — a **further refinement of `A-12`** (AD-01L's `C-VIII` measurement base).
> → **`A-21`, named and NOT made. AD-01L is NOT edited.**
>
> **3. `N` may legitimately DIFFER between registration #1 and registration #2 for the same CP and the same
> Project.** Under AD-01N `NF-15` (snapshot at registration), if the Project's configured lock-in changed
> from 30 to 60 days between them, **#1 keeps 30 permanently and #2 gets 60.** **The owner's own words
> require this:** `PO-O9` gives the new registration *"a NEW lock-in window **per the applicable Project
> policy**,"* and §1.5 lists *"**applicable lock-in policy snapshot**"* among each registration's immutable
> fields. **See `OF-15`.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-15` — the clarification CORROBORATES `NF-15` from the owner's own direction.
> This is a material and unexpected gain.**
>
> AD-01N `NF-15` recommended **snapshot at registration** over **(i) live read** and **(ii) snapshot at
> booking**, on `R6` + `C-II` + `§06`/`§21` grounds, and referred ratification as **`AC-7`**.
>
> **The clarification independently selects the same answer, in the owner's own vocabulary.** *"Each
> registration preserves its own immutable … applicable lock-in policy snapshot"* — the owner uses the word
> **snapshot**, attaches it to **each registration**, and calls it **immutable.** **Candidate (i) is
> inconsistent with *"immutable"*; candidate (ii) is inconsistent with *"each registration preserves its
> own."***
>
> **Therefore `AC-7`'s FIRST half — ratify or reject snapshot-at-registration — is ANSWERED IN SUBSTANCE.**
> The owner should now **confirm** rather than re-decide. → **`A-22`**.
>
> **`AC-7`'s SECOND half — should a deliberate, authorized, individually audited RE-BASING act exist to widen
> a NAMED EXISTING registration when a Project's policy is widened — is NARROWED but NOT closed.** The
> clarification supplies a **partial substitute**: a builder who widens a Project's period can let an existing
> registration expire and have a new one made under the wider policy. **But that substitute is forward-only
> and gap-bearing** — it cannot widen a **currently-live** registration, and it leaves the CP unprotected
> between expiry and re-registration. **No re-basing mechanism is proposed, designed or implied. `AC-7`'s
> second half carries forward.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-16` — the honest cost of `O-U`(3), stated because the owner should weigh it
> before ratifying, and because AD-01N's assessment of the same hazard is now optimistic.**
>
> **Under `O-U`(3) the protection window becomes RENEWABLE.** A diligent CP can obtain near-continuous
> protection by arranging a fresh registration act each time the previous window lapses.
>
> **AD-01N `§J.3(7)` assessed the registration-farming hazard (`L-13`, `MF-9`) as *partially controlled*, on
> the ground that *"under this rule each one is a WINDOWED option rather than a perpetual one — the lock-in
> period is itself a control on the hazard."*** **That assessment was made under a model in which a window
> could never be renewed. It is weaker than stated under the clarified model.** → **`X-13`**, **`A-18`**.
>
> **What limits the hazard architecturally, and what does not.** Each renewal is an **explicit, permissioned,
> separately audited commercial act carrying its own date** (`C-XIII`, `NF-26(9)`, `NF-27`), so the behaviour
> is **visible and attributable** rather than silent — a real control, and better than the derived model would
> have given. **What the architecture does NOT supply is any limit on the CADENCE.** ⟦SOURCE⟧ **§11** names
> attribution manipulation as a live risk in its own words.
>
> **The clarification does not say whether re-registration may occur immediately upon expiry, whether a
> minimum gap is required, or whether successive re-registrations by the same CP are capped. Nothing is
> invented. → `AC-18`, NOT resolved here.** Recorded as a **consequence for the owner to weigh**, not as an
> argument for any answer.

> ⟦ARCHITECT ANALYSIS⟧ **`OF-19` — re-registration is NOT a cure for `AC-11`, and it will be read as one.**
>
> **`AC-11`** asks whether the rule time-bars the **ordinary** case: a CP registers, the Inquiry never closes,
> is worked continuously, and the client books after the window. **`PO-N7` as written says the CP is not
> eligible.**
>
> **The clarification does NOT relieve this**, and the reason is `O-U`(2): **while the window is live, no new
> registration may be made.** The CP must therefore **let protection LAPSE first** — and a new registration is
> **forward-only**, so it does not retroactively protect the lapsed interval. A booking falling in the gap
> yields a negative determination, and the Site Head exception (AD-01N §H) is the only route.
>
> **`AC-11` is therefore unchanged, unrelieved, and now MORE consequential**, because the operational
> workaround that appears to be available is not one. **NOT resolved here.**

### 2.9 Item 9 — attribution claim vs. protection record

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-O13` / `PO-O14` are the governing clauses and they are not weighed:**
> *"The new registration rule must NOT accidentally mean a CP automatically gets commission merely because a
> new registration exists. Preserve: CP Registration/protection ≠ CP Attribution ≠ Commission Eligibility ≠
> Commission Payout."*

> ⟦ARCHITECT ANALYSIS⟧ **`OF-17` — a new registration creates a PROTECTION/ELIGIBILITY-INPUT record. It does
> NOT, of itself, create an attribution claim. The four layers and their answer-bearers, restated so the
> separation is checkable rather than asserted.**
>
> | Layer | The question it answers | Its answer-bearer | Created by |
> |---|---|---|---|
> | **1. CP Registration / protection** | *"Is CP c's introduction of client p for Project j still within its protected period as at date D?"* | **The specific `CP Project Registration` whose window contains D** — `O-U`, `OF-4` | **An explicit registration act, and nothing else** — `C-XIII` |
> | **2. CP Attribution** | *"Who produced THIS Inquiry?"* | **The resolved attribution claim on that Inquiry, and NOTHING ELSE** — `K-18`, `C-XI` | A claim filed on that Inquiry, resolved under §11 by builder-side authorized leadership |
> | **3. Commission eligibility** | *"Is this CP entitled on this booking?"* | **A JOIN, never a single anchor** — `K-48`, as extended by `NF-28`: the resolved claim on the converting Inquiry **AND** the surviving transaction identity at its §32 milestone **AND** layer 1's temporal test (or a Site Head exception on that determination) | An appended determination fact carrying its inputs as they stood |
> | **4. Commission payout** | *"Has money moved, and to whom?"* | **The CP Ledger and the §32/§40 invoice/approval/payout path**, with accrual and payout separated (consolidated §22) | Accounts review, invoice submission, payout authorization |
>
> **Two properties of this table are load-bearing and are stated explicitly:**
>
> 1. **No layer is a shortcut to any other.** ⟦SETTLED⟧ **`K-9`**: *winning attribution and being paid are
>    different outcomes.* The clarification extends the same discipline one layer earlier: **holding
>    protection and winning attribution are different outcomes.**
> 2. **A new registration moves layer 1 only.** It does not touch layer 2 (it files no claim), does not
>    satisfy layer 3 (two of three conjuncts are untouched) and does not reach layer 4. **`OF-10`
>    consequence 4 states this structurally: output 5 can exist while output 4 is absent.**

> ⟦ARCHITECT ANALYSIS⟧ **`OF-18` — `C-XI` is UPGRADED by the clarification, and this is the single largest
> governance gain in this document.**
>
> AD-01N's **`C-XI`** — *the `CP Project Registration` is a TEMPORAL PROTECTION fact and must never become an
> ATTRIBUTION fact* — was ⟦ARCHITECT RECOMMENDATION⟧, **NOT APPROVED**, and AD-01N said plainly why it needed
> to be stated rather than left implicit: *"the natural implementation shortcut — reading the registration to
> decide attribution when no claim is present on a later Inquiry — is Reading G arriving by the back door,
> uncontrolled and undecided."*
>
> **`PO-O14` states `C-XI`'s substance in the owner's own words.** The distinction the architect recommended
> is now ⟦PRODUCT-OWNER DECISION⟧. **`C-XI` should be re-labelled accordingly** — it is no longer an
> unapproved architect recommendation on its central claim. → **`A-20`, named and NOT made. AD-01N is NOT
> edited.**
>
> **Consequence: the back door is closed by the owner, not merely guarded by the architect.** An
> implementation that read a live registration as an answer to *"who produced this Inquiry?"* would now be
> violating a Product-Owner decision, not an unapproved recommendation.

### 2.10 Item 10 — how much of `AC-4` this clarification actually resolves

> ⟦ARCHITECT ANALYSIS⟧ **`OF-20` — the precise accounting the task demands. The clarification resolves
> MORE than half of `AC-4` and does NOT resolve the half that decides the architecture. Both halves are
> stated exactly, and nothing is claimed for the clarification that it does not say.**

**Step 1 — what `AC-4` asked.** AD-01N §B.2 posed a two-way choice:

| Reading | AD-01N's statement of it |
|---|---|
| **Reading F — FILTER** *(necessary only)* | The window test can only **disqualify**. A CP inside the window is eligible **only if the other rules independently make them so** — which, under `K-48`, requires them to hold the **resolved attribution claim on the Inquiry that converted**. |
| **Reading G — GRANT** *(necessary AND sufficient)* | A live registration inside its window **is itself** the eligibility basis for whatever that client books on that Project, **irrespective of who produced the converting Inquiry**. |

**Step 2 — what the clarification settles.**

| Sub-question | Status after the clarification |
|---|---|
| Does a live registration, ALONE, produce **commission**? | **ANSWERED: NO.** ⟦PRODUCT-OWNER DECISION⟧ `PO-O13`, verbatim. |
| Does a live registration, ALONE, produce **commission eligibility** (`K-48`'s join satisfied)? | **ANSWERED: NO**, by entailment from `PO-O14`, which names eligibility as a **distinct layer** that registration is not. |
| Is **Reading G as AD-01N stated it** still available? | **NO. ELIMINATED by the owner.** Reading G's defining clause — *"irrespective of who produced the converting Inquiry"* — is precisely what `PO-O13`/`PO-O14` forbid. |
| Is the window test a **necessary** condition on CP commission eligibility — i.e. can it disqualify? | **ANSWERED IN SUBSTANCE: YES.** That is `PO-N6`/`PO-N7`, which the clarification does not disturb. **Whether it binds the ORDINARY never-closed case remains `AC-11`, unchanged** (`OF-19`). |
| Does a live registration, ALONE, produce an **ATTRIBUTION CLAIM**? | **NOT ANSWERED. This is the residue, and it is the half that decides the architecture.** |

> ⟦ARCHITECT ANALYSIS⟧ **Step 3 — the F/G dichotomy was NOT exhaustive, and the residue lives in the gap
> between them. This is the finding, and it must not be glossed.**
>
> **Reading H, which AD-01N did not enumerate:**
>
> > **The registration is a filter on eligibility AND an admissible GROUND on which an attribution claim
> > naming that CP may be MINTED on a later Inquiry that CP did not originate — such a claim then being
> > adjudicated under §11 like any other claim, and capable of LOSING.**
>
> **Reading H is fully consistent with every word of the clarification**, because the clarification forbids
> automatic **commission** and forbids conflating the **layers** — it does not say whether one layer may
> supply the *evidentiary ground* for an event at the next layer. **A CP under Reading H does not
> "automatically get commission merely because a new registration exists": they get a CLAIM, which is then
> resolved by builder-side authorized leadership under §11, may clash with another producer's claim, and
> yields commission only if it wins AND the §32 milestone is reached AND the temporal test passes.**
>
> **And Reading H is not a new policy.** It is **AD-01L's `B-2`** — *"whether the system may, at the
> origination of a later Inquiry, MINT A NEW CLAIM on that later Inquiry, naming the earlier producer, and
> carrying as its stated ground a citation of a determinate earlier [fact]."* It is also **AD-01L's Alt 2**,
> the shape AD-01L already adopted: **the Inquiry boundary CLOSED TO CLAIMS, OPEN ONLY TO CITATION.** AD-01N
> `NF-6` already observed that the registration date **satisfies `C-X`** (a citation's ground must be
> immutable), and `C-II` is satisfied because minting happens at the later Inquiry's origination, for a
> **future** conversion.
>
> **`K-18` SURVIVES under Reading H, and this is why the elimination of Reading G matters architecturally.**
> Under H the answer-bearer for *"who produced this Inquiry?"* is still **the claim**; the registration is
> only the **ground the claim cites.** **The triple does not become a second commercial anchor.**

> ⟦ARCHITECT ANALYSIS⟧ **Step 4 — `X-4` is DISCHARGED, and that is a concrete architectural gain.**
>
> AD-01N's **`X-4`** recorded a **conditional** contradiction: *"Under Reading F: no contradiction. Under
> Reading G: direct contradiction… makes the (CP, Person, Project) triple a second commercial anchor — which
> is AD-01K's Candidate A (eliminated) and AD-01L's Alt 4 (ELIMINATED BY ENTAILMENT)."*
>
> **Its condition can no longer be met.** Reading G is eliminated by ⟦PRODUCT-OWNER DECISION⟧, and neither
> remaining reading makes the triple an anchor. **`X-4` is therefore discharged: `K-18`, `K-48`, AD-01K's
> Candidate A and AD-01L's Alt 4 are no longer under conditional threat from this rule.** → **`A-23`**, so
> that `X-4` is not cited going forward as though still live. **`K-18` is NOT reopened; it is CONFIRMED.**

> ⟦BUSINESS DECISION REQUIRED — `AC-4`, RESTATED (not renumbered)⟧
>
> **`AC-4` (residual): Does a live `CP Project Registration` supply an admissible GROUND on which an
> attribution claim naming that CP may be minted on a later Inquiry that CP did not originate — such a claim
> then being adjudicated under §11 like any other and capable of losing (Reading H)? Or does the registration
> ONLY ever filter a claim that must arise entirely independently (Reading F)?**
>
> **This is `Q1` and AD-01L's `B-2`, unanswered for a SEVENTH consecutive document.** → **`A-19`**.

> ⟦ARCHITECT ANALYSIS⟧ **Step 5 — evidence about the owner's model, presented as evidence and NOT as a
> decision. Neither reading is preferred, ranked or hinted at, and nothing below selects one.**
>
> **Under Reading F, the clarification's OWN worked example is commercially inert in its central case, and
> it is more visibly inert than AD-01N's was.** AD-01N `NF-22` step 6 already showed that under F the
> owner's dump example *"does not complete"*, because nothing puts CP A's name on Inquiry #2's claim set.
> **The clarification introduces CP B — who by construction has originated NOTHING.** Under Reading F, CP B's
> entire commercial position rests on Registration #2, and Registration #2 only filters; so unless CP B
> independently holds the resolved claim on the converting Inquiry, **Registration #2 confers nothing at all,
> and the owner would have described a record that does nothing.**
>
> **The counter-story, stated at equal strength so this is not a one-sided argument.** Reading F is **not**
> refuted. There is a coherent F-compatible reading: CP B brings the client in on an occasion where no live
> Inquiry covers the interest, so `J-2` opens Inquiry #3, CP B's claim attaches to it by ordinary origination
> (`J-43`), and Registration #2 then **filters** that claim temporally. **Under this story Registration #2 is
> meaningful, but only when the registration act and an Inquiry origination CO-OCCUR** — and the owner has
> just instructed that the two must **not** be inferred from one another (`PO-O12·a`). **That is a coherent
> but commercially unusual posture, and the owner should be told it is what Reading F entails.**
>
> **Both are recorded. Neither is selected. `AC-4` is the owner's alone.**

### 2.11 Item 11 — which other `AC` items this clarification affects

> ⟦ARCHITECT ANALYSIS⟧ **Every `AC` item AD-01N left open, checked individually. "Unchanged" means checked
> and unchanged, not skipped.**

| Item | Effect of the clarification |
|---|---|
| **`AC-1`** (authorization posture of the closing-reason tap) | **UNCHANGED.** Still does not arise from this rule (`X-6`). Carried forward. |
| **`AC-2`** (an ex-gratia route without an attribution claim) | **UNCHANGED**, and its relevance is unaffected by `O-U`. Carried forward. |
| **`AC-3`** (must a claim name a currently-approved CP relationship) | **UNCHANGED in content; coupled more tightly** via `AC-10`, because an unverified relationship can now consume a triple's live slot. Carried forward. |
| **`AC-4`** | **NARROWED SUBSTANTIALLY and RESTATED** — `OF-20`, `A-19`. Reading G eliminated; residue = `B-2`/`Q1`. |
| **`AC-5`** (which booking fact is "Booking Date") | **UNCHANGED in substance; GAINS A SECOND CONSUMER.** The same date now also selects **which registration in the sequence** contains `B` (`OF-4`). A different choice of `B` can select a different registration, not merely a different answer. **NOT resolved.** |
| **`AC-6`** (boundary convention α / β; is `N = 0` legal) | **NEWLY DOUBLY MONEY-BEARING, and this is the sharpest `AC` escalation in this document.** Previously it moved **one day of eligibility**. It now ALSO decides, on the boundary day, whether a new registration act is **ADMISSIBLE** under `O-U` — i.e. whether a registration EXISTS AT ALL. **And the two questions must use the SAME convention, or the sequence can be made to overlap by one day**, defeating `OF-4`'s determinacy. **NOT resolved, and its priority rises.** |
| **`AC-7`** (ratify snapshot; should a re-basing act exist) | **FIRST HALF ANSWERED IN SUBSTANCE** by the owner's own words (`OF-15`, `A-22`) — confirm, do not re-decide. **SECOND HALF NARROWED but NOT closed** — a forward-only, gap-bearing substitute now exists. Carried forward. |
| **`AC-8`** (business timezone: tenant-level or project-level) | **UNCHANGED in substance; GAINS A THIRD OPERAND.** The registration act's **own** civil date must now be projected under the same rule, to evaluate `O-U` admissibility — so one stated timezone rule must govern **three** date derivations, not two. **NOT resolved.** |
| **`AC-9`** (offline registration date: capture date or sync date) | **SHARPER, and newly EXISTENCE-BEARING.** A §12 offline-captured registration can be **admissible on one reading and INADMISSIBLE on the other** under `O-U`, because the two candidate dates can fall on opposite sides of a prior window's expiry. **The offline question now determines not only when the window starts but WHETHER THE REGISTRATION EXISTS.** ⟦SOURCE⟧ §12: *"Never pretend an offline lead has passed the server-side clash gate."* **`T-9` is NOT resolved.** |
| **`AC-10`** (what "successfully registers" means; §44 unverified sub-agent) | **SHARPER, and newly GATING.** An unverified capture now also decides whether it **CONSUMES the triple's live slot** under `O-U` — potentially blocking a subsequent **verified** registration by the same CP. **NOT resolved.** |
| **`AC-11`** (does the rule time-bar the ordinary never-closed case) | **UNCHANGED and EXPLICITLY NOT RELIEVED** — `OF-19`. Now more consequential, because the apparent workaround is not one. **NOT resolved.** |
| **`AC-12`** (override directionality and revocation) | **UNCHANGED.** The exception's subject is one determination, and a determination names one registration, so a sequence introduces no new directionality question. Carried forward. |
| **`AC-13`** (override scope, self-interest controls, CP visibility) | **GAINS ONE VISIBILITY ITEM, folded in and NOT renumbered:** whether the §39 portal shows a CP that **their own window has expired**, and separately whether it discloses that **a different CP now holds a live registration** over the same client and Project. ⟦SOURCE⟧ **§11** forbids unnecessary exposure of competing claims; ⟦SOURCE⟧ **§39** forbids exposing Builder-internal sensitive information. **`V-7`'s fail-closed projection supplies the mechanism; it does not supply the content. NOT resolved.** |
| **`AC-14`** (does an invalid-side closure retain protection) | **UNCHANGED and NOT resolved.** One narrowing worth recording: its practical bite is confined to the **within-window** period, because after expiry the ordinary re-registration route applies and no citation across the invalid closure is needed. **`L-6`/`K-22` are NOT reopened, NOT narrowed and NOT ratified.** |
| **`AC-15`** (two CPs each hold a live registration; who wins) | **UNCHANGED, NOT ANSWERED — and PRIORITY RAISED.** `O-U` is per-triple and therefore **structurally permits** the concurrent case; `OF-12` shows the second-registration configuration is now ordinary rather than exceptional. **The owner's use of a non-overlapping example is NOT evidence about the overlapping one.** `C-IX` still holds that a binding precedence rule is a §88 authorization change. |
| **`AC-16`** (does a cancelled/transferred booking re-run the test) | **GAINS A SUB-CASE.** If a later booking date falls inside a **different** registration's window than the original booking date did, the re-test consults a **different registration record** with a **different `R` and possibly a different `N`**. **NOT resolved. No clawback or re-test rule is invented.** |
| **`AC-17`** (Project-level only; tenant default; per-CP-tier variation) | **UNCHANGED.** Under snapshot-plus-sequence, a per-CP-tier period would simply produce different `N` values on different registrations, which is representable — so the clarification creates no new obstacle and closes nothing. Carried forward. |

> ⟦ARCHITECT ANALYSIS⟧ **The net accounting: the clarification CLOSES roughly one and a half items (`AC-7`'s
> first half, and more than half of `AC-4`), SHARPENS five (`AC-5`, `AC-6`, `AC-9`, `AC-10`, `AC-16`), RAISES
> the priority of two (`AC-15`, `Q11`), and ADDS FOUR (`AC-18 … AC-21`). It reduces the number of possible
> ARCHITECTURES from two to one-and-a-half. It does NOT reduce the number of blocking QUESTIONS.**

---

## 3. Required changes to AD-01N

> ⟦ARCHITECT ANALYSIS⟧ **Item 12 and item 13 of the task. Every contradiction is NAMED PRECISELY and
> **NOT RESOLVED BY EDITING.** **AD-01N IS NOT EDITED BY THIS DOCUMENT.** AD-01N remains at **VALIDATE** and
> is not approved; these are the changes it would require before it could be. Contradictions continue
> AD-01N's series as `X-9 … X-17`; amendments continue as `A-14 … A-26`. **Only the Project Owner may make
> any of them.**

### 3.1 Contradictions found in AD-01N

| # | Location in AD-01N | Statement | Verdict | Amendment |
|---|---|---|---|---|
| **`X-9`** | **§C.4, the `Cardinality` row** | **AD-01N, verbatim:** *"**At most one protection-bearing registration per subject triple.** The **first** one wins, permanently. Subsequent registration acts for the same triple are recorded as events against it and change nothing about it."* **The clarification §1.5 requires MULTIPLE HISTORICAL registration records per triple.** ⟦ARCHITECT ANALYSIS⟧ **Half the clause is right and half is wrong, and separating them is the whole finding.** *"At most one protection-bearing"* is **CORRECT** — but only as a statement about **one instant**, not about all time. *"The first one wins, permanently"* is **FALSE.** **AD-01N inferred singularity from immutability, and the inference does not hold: *this record never changes* and *there is never a second record* are different statements** (`OF-3` step 1). | **DIRECT, PROVABLE CONTRADICTION with a ⟦PRODUCT-OWNER DECISION⟧.** | **`A-14` — AD-01N §C.4's `Cardinality` row requires amendment to state `O-U` instead: at most ONE PROTECTION-BEARING registration per triple AT ANY INSTANT, with the triple carrying an ordered, non-overlapping SEQUENCE of immutable registrations over time, of which at most one is live and any number may be historical. NAMED AND NOT MADE.** |
| **`X-10`** | **§C.6, `NF-7` output 4** | **AD-01N, verbatim:** *"A CP Project Registration — produced when: **Only if none already exists for (CP, Person, Project).**"* **Two defects.** (1) **The test is EXISTENCE where it must be LIVENESS** — `PO-O9` permits a new registration after expiry, which an existence test forbids. (2) **The condition is stated as SUFFICIENT** — output 4 fires as an automatic consequence of the Helpdesk act. **`PO-O12·d` and `PO-O5` require an EXPLICIT registration act; a lookup must produce nothing.** | **DIRECT CONTRADICTION on (1); UNDER-SPECIFICATION amounting to contradiction on (2)** — as literally written, `NF-7` produces a registration from a revisit. | **`A-15` — AD-01N §C.6's `NF-7` table requires amendment to `OF-10`'s five-output form: add output 0 (identity lookup, nothing persisted), split output 1 into MATCHED (revisit) vs CREATED, add output 2 (the Activity, always), and restate output 5's condition as "only if an explicit registration act is performed AND no protection-bearing registration exists for the triple." NAMED AND NOT MADE.** |
| **`X-11`** | **§D.2, table row 1** | **AD-01N, verbatim:** *"Re-registration by the same CP for the same client and project → Effect on the registration date: **None.** A new Inquiry and a new claim may be created; the protection fact is untouched."* ⟦ARCHITECT ANALYSIS⟧ **The sentence is TRUE of registration #1 and MISLEADING about the triple.** After expiry, a re-registration by the same CP creates a **new record with a NEW date** — which does not move registration #1's date and therefore does not violate `PO-N4`, but which a reader of §D.2 would conclude cannot happen at all. | **PARTIAL CONTRADICTION — true as stated, false as understood.** | **Covered by `A-14` and `A-15`. AD-01N §D.2 row 1 requires a qualifying clause distinguishing "the existing registration's date does not move" (true, always) from "no new registration can arise" (false after expiry). NAMED AND NOT MADE.** |
| **`X-12`** | **§F.1, step 1** | **AD-01N, verbatim:** *"Locate **the** `CP Project Registration` for (that CP, that client's work record, that booking's Project)."* **Under a sequence, "the" is undefined** — the triple may carry several, with different `R` and different `N`. **The calculation as written is non-deterministic.** | **DIRECT CONTRADICTION — the step cannot be executed.** | **`A-16` — AD-01N §F.1 step 1 requires amendment to: "Locate the CP Project Registration for that triple WHOSE WINDOW CONTAINS THE BOOKING DATE `B`. Under `O-U` at most one can, so the lookup is unique when it succeeds and EMPTY when `B` falls in a gap or before the first registration — in which case `PO-N7` applies. **The LATEST registration is not the applicable one; the CONTAINING one is.**" NAMED AND NOT MADE.** |
| **`X-13`** | **§J.3(7)** | **AD-01N, verbatim:** *"under this rule each one is a **windowed** option rather than a perpetual one — **the lock-in period is itself a control on the hazard.**"* **Assessed under a model in which a window could never be renewed.** Under `O-U`(3) the window is **RENEWABLE**, so the control is **weaker than assessed** (`OF-16`). | **CONTRADICTION OF AN ASSESSMENT, not of a fact.** | **`A-18` — AD-01N §J.3(7) requires amendment to record that the lock-in period bounds each INDIVIDUAL option but does not bound the NUMBER of successive options, and that the remaining controls are the explicit-act requirement (`C-XIII`), the registration permission (`NF-26(9)`) and the audit trail (`NF-27`) — not the period itself. → `AC-18`. NAMED AND NOT MADE.** |
| **`X-14`** | **§B.2, the Reading F / Reading G table** | **The dichotomy is NOT EXHAUSTIVE.** Reading G as stated (*"a live registration … is itself the eligibility basis … irrespective of who produced the converting Inquiry"*) is **ELIMINATED by ⟦PRODUCT-OWNER DECISION⟧ `PO-O13`/`PO-O14`.** But its elimination does **not** establish Reading F, because **Reading H** — the registration as an admissible GROUND for minting a claim that must then win under §11 — sits between them and is consistent with every word of the clarification (`OF-20` step 3). | **SUPERSEDED IN PART.** Reading G eliminated; the residue is a different question from the one `AC-4` asked. | **`A-19` — AD-01N §B.2 and §L.3's `AC-4` require amendment to (a) record Reading G as eliminated by ⟦PRODUCT-OWNER DECISION⟧, (b) add Reading H, and (c) restate `AC-4` as the Reading F vs. Reading H question, which is `Q1`/`B-2`. NAMED AND NOT MADE.** |
| **`X-15`** | **§K, `X-4`** | **`X-4`'s condition can no longer be met.** Its contradiction with `K-18`, `K-48`, AD-01K's Candidate A and AD-01L's Alt 4 was **contingent on Reading G**, which the owner has eliminated. **Neither remaining reading makes the `(CP, client, Project)` triple a second commercial anchor** (`OF-20` step 4). | **DISCHARGED. Recorded so that `X-4` is not cited going forward as though still live.** | **`A-23` — AD-01N §K's `X-4` requires amendment to record it as DISCHARGED, with `K-18` CONFIRMED rather than conditionally threatened. `K-18` is NOT reopened. NAMED AND NOT MADE.** |
| **`X-16`** | **§D.4, `NF-11`** | **AD-01N, verbatim:** *"The only reconciliation consistent with `PO-N1` and `PO-N4` is that the **EARLIER date survives** — the later one was never a fresh start; it was a duplicate of a start that already existed."* **Under a sequence this rule is WRONG.** A merge may bring together **two SEQUENCES**, and "the earlier date survives" would **destroy the later registration's independent existence, its own snapshotted `N` and its own audit lineage** — all of which `PO-O10` makes immutable historical data. **A sequence-merge is a different operation from a date-reconciliation.** And `OF-17` shows the merge case is now MORE likely to arise, because `O-U`'s enforceability is bounded by §09/`M-5`. | **DIRECT CONTRADICTION with `PO-O10`.** | **`A-26` — AD-01N §D.4's `NF-11` requires amendment to state that merge reconciliation of registration SEQUENCES is not date-selection and that its correct shape is NOT determined. **`Q10` and `M-5`'s uniqueness half are NOT resolved, NOT narrowed and NOT branched — they are named as newly GATING for `O-U`.** NAMED AND NOT MADE.** |

### 3.2 Amendments to AD-01N that are additions rather than corrections

| # | Location | Amendment required — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-17`** | **§I.2, `NF-27` audit events** | **`NF-27` event 2 (*"Repeat registration recorded — date NOT reset"*) must become TWO DISTINCT EVENTS, because under `O-U` a repeat registration act has two materially different outcomes that must never be represented by one artefact:** (a) **repeat act ABSORBED — a protection-bearing registration already existed, nothing was created, and the protection date was NOT moved** (AD-01N's original event, unchanged in purpose and still required for exactly the reason AD-01N gave: *"a rule that says 'this must not happen' needs a record that it did not happen when the occasion arose"*); and (b) **NEW REGISTRATION CREATED AFTER EXPIRY — a new record was created, carrying an explicit reference to the prior registration it succeeds, its expiry date, and an explicit assertion that the prior registration was NOT modified** (`PO-O10`). **Additionally, `NF-27` event 1 must retain whether this is the triple's FIRST registration or a SUCCESSOR, and event 5 (lock-in period changed) must retain that it governs registrations created on or after that instant — including future re-registrations of triples that already hold historical registrations.** **No event identifier, master value or vocabulary is proposed** (⟦SOURCE⟧ **R4**, `N-4`'s discipline). |
| **`A-20`** | **§C.4, `C-XI`** | **`C-XI` must be re-labelled from ⟦ARCHITECT RECOMMENDATION — NOT APPROVED⟧ to ⟦PRODUCT-OWNER DECISION⟧ on its central claim**, because `PO-O14` states its substance in the owner's own words (`OF-18`). **The constraint's TEXT does not change; its STATUS does.** This matters because an implementation violating it would now be violating an owner decision, not an unapproved recommendation. |
| **`A-22`** | **§E.2 / `NF-15` / `AC-7`** | **`AC-7`'s FIRST half must be recorded as ANSWERED IN SUBSTANCE**, on the owner's words *"applicable lock-in policy snapshot"* and *"immutable"* (`OF-15`). Candidates (i) live-read and (ii) snapshot-at-booking are inconsistent with those words. **`NF-15` should be re-labelled as owner-corroborated, pending formal confirmation rather than fresh decision. `AC-7`'s SECOND half (re-basing) is NARROWED and carries forward.** |
| **`A-25`** | **§L.2, `NF-30`** | **`NF-30`'s Reading-G branch — *"Not enumerated by AD-01M: under Reading G, Policy A bounded by a horizon"* — must be recorded as ELIMINATED.** With Reading G gone, the rule maps to **AD-01M's Policy C** (a defined continuation condition — here purely temporal, registration-anchored, project-scoped and `N-4`-independent) **plus the bounded one-directional Policy-E override layer**, under **both** remaining readings. ⟦ARCHITECT ANALYSIS⟧ **A precision worth recording with it: Reading F is Policy C's SHAPE WITHOUT Policy C's citation licence, which is why `NF-22` step 6 found the owner's example inoperative under F; Reading H is Policy C proper. `AC-4` therefore decides not WHICH policy, but whether the selected policy has the licence it needs to operate.** **AD-01M is NOT edited and `A-13` (§15.1) carries forward unchanged.** |

### 3.3 What in AD-01N is CONFIRMED and requires no change

> ⟦ARCHITECT ANALYSIS⟧ **Recorded so that the amendment list above is not read as a repudiation. The
> overwhelming majority of AD-01N stands, and several of its recommendations are STRENGTHENED.**

| AD-01N item | Status after the clarification |
|---|---|
| **`NF-6`** — the `CP Project Registration` entity, its **Subject**, **What it asserts**, **Created by**, **Mutability** and **What it is NOT** rows | **CONFIRMED**, and its necessity test now passes a **fourth** way (`OF-2`). **Only the `Cardinality` row falls (`X-9`).** |
| **`NF-6`'s three tests against the Sales Episode (`G-4`) and Candidate A (`K-32`/`K-37`)** | **CONFIRMED and re-run.** The registration still is not the attribution anchor, still holds no lifecycle, and is still Project-scoped rather than relationship-scoped. **`G-4`'s rejection stands for the seventh time.** |
| **`C-XI`** | **CONFIRMED and UPGRADED** — `OF-18`, `A-20`. |
| **`C-XII`** (override ≠ Q6 correction) | **CONFIRMED, untouched.** `Q6`, `T-6`, `T-7`, `T-8` NOT reopened. |
| **`NF-8` / `NF-10`** (registration date; civil dates; one governing timezone; server-authoritative) | **CONFIRMED**, with `AC-8` gaining a third operand. |
| **`NF-9`** (the `B-1` structural payoff) | **CONFIRMED and re-tested against a SEQUENCE — it holds** (`OF-13`). |
| **`NF-15`** (snapshot at registration) | **CONFIRMED and CORROBORATED BY THE OWNER** (`OF-15`, `A-22`). |
| **`NF-18`** (boundary convention α, referred as `AC-6`) | **CONFIRMED as unresolved, and now DOUBLY money-bearing** (§2.11). |
| **`NF-19`** (what the calculation must NOT do), incl. (7) no invented tiebreak | **CONFIRMED. `O-U` prevents the tiebreak question arising WITHIN a CP; it does not answer `AC-15` ACROSS CPs.** |
| **`NF-21`** (the Dump is not an input in any direction) | **CONFIRMED and extended: a Dump is not an EXPIRY either** (§2.7). |
| **`NF-23`** (`PO-N4` independently corroborates `I-5`/`I-6`/`I-7`/`J-16`) | **CONFIRMED and STRENGTHENED — `C-XIII` makes the prohibition categorical rather than enumerated.** |
| **`NF-24`** (the Commission Eligibility Exception, appended and immutable) | **CONFIRMED, untouched.** Its subject is one determination, and a determination names one registration. |
| **`NF-26`** (permissions; role names never in logic; project-scope-bound) | **CONFIRMED**, and `NF-26(9)`'s §42-vs-§95 tension is SHARPER (`OF-9`). |
| **`NF-28`** (the eligibility test's third conjunct) | **CONFIRMED under Reading F and Reading H alike.** Under **H** the third conjunct is unchanged; what H adds is a route by which conjunct (i) may come to be satisfied — **it does not merge (iii) into (i), which `C-XI` forbids.** |
| **`X-1`/`A-12`, `X-2`/`A-13`, `X-3`, `X-5`, `X-6`, `X-7`, `X-8`** | **ALL CARRIED FORWARD UNCHANGED.** `A-12` additionally requires the refinement at `A-21`. |
| **§M's `VALIDATE` recommendation** | **CONFIRMED — see [§6](#6-recommendation).** |

---

## 4. Required changes to earlier decisions

> ⟦ARCHITECT ANALYSIS⟧ **Two amendments are required, both to documents other than AD-01N, and both are
> SMALL. Every other document in the chain requires NO change. This is stated document by document so that
> "no change required" is a checked result rather than an omission. **NO FILE IS EDITED.**

### 4.1 The two amendments required

| # | Document | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-21`** | **AD-01L — `C-VIII`, and therefore `A-12`** | **AD-01N's `A-12` already named an amendment to `C-VIII` admitting the predecessor's ORIGINATION end as a measurement base. The clarification requires that amendment to go one step further: the admissible base is a SPECIFIC `CP Project Registration` RECORD's own fixed date — NOT "the triple's registration date," which under a sequence is ambiguous.** ⟦ARCHITECT ANALYSIS⟧ **This is entailed by `C-X` itself, not by preference:** `C-X` requires a citation's stated ground to be *"a fact that cannot subsequently change."* A specific record's date satisfies it; a triple-level date does not, because a later registration changes what the triple's date is. **`C-VIII`'s four GROUNDS — Inquiry-or-commercial-object-owned, immutable, determinate at the gate, not extendable by a work act — are UNCHANGED and are all satisfied by a specific registration record.** **AD-01L is NOT edited. `A-12` remains named and not made; `A-21` refines it.** |
| **`A-24`** | **AD-01J — §8, `J-37`** | **`J-37`'s six-act table requires an explanatory note, not a seventh row.** The business word **"revisit"** names a **property of the OCCASION** (the work record existed before this interaction); `J-37`'s acts classify **what the occasion PRODUCED**. **A revisit may be act 1 (Continuation), act 2 (Re-engagement), act 3 (Additional interest), act 4 (Return after conversion), or NONE of the six** — and *"revisit"* must **NOT** be added as a seventh act, because it produces nothing of its own (`OF-6`, `OF-11`). ⟦ARCHITECT ANALYSIS⟧ **`J-38` already prohibits the most expensive confusion in this family (a re-engagement must never be used as a correction). This is the same class of prohibition one level out: a revisit must never be treated as synonymous with a re-engagement, in authorization, in reporting, or in the commercial layer. `J-2` itself requires NO amendment.** **AD-01J is NOT edited.** |

### 4.2 Documents requiring NO change — each checked

| Document | Result |
|---|---|
| **AD-01** | **No change.** §D.4 (*"claims are never overwritten by a later claim"*) and `E-13`'s shape are CONFIRMED and load-bearing. **`Q10` and `Q11` are NOT resolved** — both gain first-class consumers (`OF-12`, `OF-17`) and both are left to their owners. |
| **AD-01A** | **No change.** `Q1`, `Q4`, `Q7` fixed input, NOT reopened. **§8.5 honoured — no workflow, screen, approval step or gate is designed anywhere above.** `N-4` NOT resolved and still OFF this rule's critical path. **No Dump-reason value is proposed.** |
| **AD-01B** | **No change.** §4's *"unrecoverable if decided by implementation"* standard is applied to `O-U`, `AC-4`, `AC-6` and `AC-20` — which is why [§6](#6-recommendation) does not recommend `BUILD NOW`. |
| **AD-01C** | **No change.** `Q6` NOT reopened, NOT narrowed, still protected by `C-XII`. `T-4`, `T-5`, `T-6 … T-11` NOT resolved; **`T-9` retains the second financial dimension AD-01N gave it and acquires an existence-bearing one (`AC-9`).** `K-26` preserved exactly. |
| **AD-01E** | **No change.** `U-4` (no dormancy threshold) remains CONFIRMED as to dormancy — **the lock-in is still anchored at registration, not at the onset of inactivity, and a renewable window does not make it a dormancy rule.** `X-3`'s warning about stale inventory tables carries forward. |
| **AD-01F** | **No change.** §12.4's prohibition on re-engagement restating a closed period CONFIRMED. **`V-4` remains OPEN, is NOT resolved, and gains a third inbound route** (§2.7). |
| **AD-01G** | **No change — and it receives the clarification's strongest CORROBORATION.** **`PO-O7`, *"The Client record remains the long-lived record,"* is the first direct Product-Owner statement of `G-1`/`V-1`'s work-record property in the owner's own words.** `G-8`'s read-time projection principle is load-bearing twice here (*"revisit"*, and *"expired"*). `G-9` untouched — **the Assignment Log is explicitly NOT the carrier for a revisit** (§2.3(b)). `G-4`'s Sales Episode rejection re-tested and STANDS. **`V-7` NOT reopened** — its fail-closed projection is again the mechanism for `AC-13`'s enlarged visibility question, and only the content is open. |
| **AD-01H** | **No change.** `V-2`, `V-3`, `H-4`, `H-8`, `H-9` CONFIRMED. **`H-4`'s terminal-once property remains what makes `NF-4(a)` true and therefore what forces the registration record.** `Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved. |
| **AD-01I** | **No change — and `I-4 … I-9` are CONFIRMED and STRENGTHENED.** `I-6`/`I-7` become structural rather than enumerated via `C-XIII`; **`I-7` is EXTENDED by `C-XIV` to a third condition (*present and identified*) that `I-7` did not enumerate** — an extension by ADDITION, requiring no amendment to `I-7` itself, which remains true as written about the two conditions it names. **`I-9`'s *"no new canonical business object is necessary"* is the standard §2.3 had to meet and DID meet.** `Z-2`, `Z-5` NOT resolved. |
| **AD-01J** | **One note required — `A-24`.** `J-2` itself requires **NO amendment**: it is CONFIRMED, is not contradicted by "revisit," and needs no new input. `J-34`, `J-35`, `J-36`, `J-42`, `J-43`, `J-46`, `J-48` CONFIRMED. `C-I … C-IV` adopted unchanged. **`AA-2` is CONFIRMED as ON the critical path and its urgency RISES (`OF-12`). `AA-1`, `AA-4`, `AA-5` NOT resolved.** |
| **AD-01K** | **No change — and `K-18` is CONFIRMED rather than conditionally threatened**, because `X-4` is discharged (`OF-20` step 4, `A-23`). `K-9`, `K-17`, `K-40`, `K-42`, `K-47`, `K-48`, `K-50`, `K-52`, `K-54` CONFIRMED. `K-48` remains EXTENDED by `NF-28`, not contradicted. **`AB-1`, `AB-2`, `AB-3` NOT resolved.** |
| **AD-01L** | **One refinement required — `A-21`.** **`B-1` CONFIRMED and NOT violated, re-tested against a sequence (`OF-13`). `B-2` NOT answered and is now the sole residue of `AC-4`. `C-IX`, `C-X` adopted unchanged — `C-X` is what FORCES `A-21`. `L-6`/`K-22` NOT reopened, NOT narrowed, NOT ratified. `L-21`'s merge-is-a-data-defect prohibition UPHELD and given new weight by `OF-17`. `L-13`'s farming cost is only partially controlled (`X-13`).** `A-1 … A-11` remain named and not made. |
| **AD-01M** | **No change.** Policies `B` and `D` remain eliminated. **`NF-30`'s mapping collapses to Policy C + bounded E — but that is an amendment to AD-01N's `NF-30`, not to AD-01M (`A-25`).** `§15.1` remains falsified in half (`X-2`/`A-13`), unchanged. `AC-1`, `AC-2`, `AC-3` carry forward. `Q0-a … Q0-e` NOT answered. |
| **`01-bmexa-architecture-reconciliation.md`** | **No change. `M-5`'s uniqueness half and `M-9` are NOT resolved, NOT narrowed and NOT branched.** `M-5` is named as newly GATING for `O-U`'s enforceability (`OF-17`) and as owning `AC-21`'s middle term — **naming a dependency is not resolving it.** `A-8` (AD-01K's unmade amendment to `M-5`'s *Blocks:* list) carries forward unchanged. |
| **`BMEXA_MASTER_SPEC.md` / consolidated requirements** | **No change, and no amendment is proposed to either.** ⟦ARCHITECT ANALYSIS⟧ **§42 is EXTENDED, not contradicted:** it already contemplates a *"limited phone identifier where appropriate"*, and the clarification adds a lookup-first step it did not describe. **§09's duplicate detection is CONFIRMED in exactly the role `T8` assigned it, and `PO-O1` is the first Product-Owner description of how it is invoked operationally. ⟦IMPORTANT⟧ A LOOKUP KEY IS NOT A UNIQUENESS BOUNDARY: `PO-O1` describes a search affordance, NOT a rule that the phone number individuates a Person. `M-5` is NOT resolved and NOT narrowed by it.** §07's Person ≠ Lead ≠ Customer rule is CONFIRMED by `PO-O11` from the owner's own direction. |

### 4.3 The amendment register after this document

> ⟦ARCHITECT ANALYSIS⟧ **Stated because the number is itself a finding, and AD-01N already flagged it.**
>
> **AD-01N closed with *"Thirteen unmade amendments across seven documents. The documents cannot all be
> approved as literally written."*** **This document adds THIRTEEN more — `A-14 … A-26` — of which
> **eleven are to AD-01N itself** and **two (`A-21`, `A-24`) are to earlier documents.**
>
> **The register now stands at `A-1 … A-26`, across eight documents. NONE has been made. `Q0-e` (ratify
> `A-1 … A-n`) is correspondingly larger and is NOT answered here.** ⟦ARCHITECT ANALYSIS⟧ **The
> concentration is itself informative: eleven of the thirteen new amendments land on AD-01N, which is
> exactly what one would expect of a document at `VALIDATE` receiving its first substantive owner feedback.
> It is evidence that the VALIDATE gate is working, not that AD-01N was wrong to be written.**

---

## 5. Remaining Product Owner questions

> ⟦BUSINESS DECISION REQUIRED⟧ **Item 14 of the task: is further clarification GENUINELY still required?
> **YES.** The consolidated list follows. Per Spec **Rule 1**, **§88**, **§97** and consolidated **§1** and
> **§30**, **none is guessed, and nothing below is filled in from inference.** Four items are new
> (`AC-18 … AC-21`); the rest are AD-01N's and AD-01M's, carried forward with their status after this
> clarification stated exactly.

### 5.1 The ratification this document itself requires

| # | What must be ratified | Why it cannot be left to implementation |
|---|---|---|
| **`O-U`** | **The uniqueness rule in [§2.2](#22-items-2-and-3--the-correct-uniqueness-constraint), in full: at most ONE protection-bearing registration per `(CP, client, Project)` triple at any instant; a registration act against a triple with a live registration creates nothing and changes nothing; a registration act against a triple whose registrations have ALL expired MAY create a new one; the triple therefore carries an ordered, NON-OVERLAPPING sequence.** | ⟦SOURCE⟧ **§88** MUST-ASK: **canonical entities, relationships, CP commission logic.** `O-U` is the architect's derivation FROM the clarification, not the clarification's own words — the owner said *"multiple historical registrations"* and *"after the previous window has expired"*; `O-U` turns that into a rule. **The two eliminated alternatives (`U-2` unconstrained, `U-3` queued renewal) are eliminated on `PO-N3`/`PO-N4` grounds, and if the owner disagrees with either elimination, `O-U` changes and `OF-4`'s determinacy result changes with it.** |
| **`C-XIII`** | **Only an explicit registration act creates a registration — and in particular EXPIRY DOES NOT.** | `PO-O12·c` states it; `C-XIII` makes it exhaustive over eleven named events. **Left to implementation, the convenient shortcut is to create a registration as a side effect of the Helpdesk save, which is exactly `PO-O5`.** |
| **`C-XIV`** | **A Helpdesk interaction, including identification of an existing Client, is never an input to a commercial determination.** | ⟦SOURCE⟧ **§88** MUST-ASK: source-of-truth rules. **This is `PO-O11` stated architecturally, and it is the rule that keeps "revisit" from silently becoming a commercial event.** |
| **`OF-6`** | **That NO `Visit`/`Revisit` entity is added, and that *"revisit"* is DERIVED rather than persisted.** | ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities. **A recommendation to add nothing still needs approval, because the alternative (adding one) would be unrecoverable after history accumulates** — AD-01B §4. |

### 5.2 The four NEW questions

| # | Question | Arises from | Why it cannot be left to implementation |
|---|---|---|---|
| **`AC-18`** | **Re-registration cadence. May a new registration be made IMMEDIATELY on the day after a window expires? Is a minimum gap required? Is there any cap on successive re-registrations by the same CP for the same client and Project — and if the answer is "no cap," is that deliberate?** | `OF-16`, `X-13`, `A-18` | **Under `O-U`(3) the protection window becomes RENEWABLE, which makes AD-01N `J.3(7)`'s farming assessment optimistic.** The remaining controls are the explicit act, the permission and the audit trail — **the lock-in period itself no longer bounds the total protected span.** ⟦SOURCE⟧ **§11** names attribution manipulation as a live risk. **No cadence rule, gap or cap is invented, proposed or implied.** |
| **`AC-19`** | **Is a Helpdesk phone-number lookup that RETURNS an existing Client an auditable ACCESS event? And separately, is a lookup that returns NOTHING?** | `OF-7`, `OF-10` output 0 | ⟦SOURCE⟧ **§45**: *"Search must NEVER become a side door around authorization."* ⟦SOURCE⟧ **§54** requires audit to capture *"actor, action, time, target."* **A successful lookup DISCLOSES that the builder holds that person** — which is the disclosure ⟦SOURCE⟧ **§11** and **§39** guard. **If the answer is yes, the artefact is an AUDIT EVENT (`R6`), never a business record — no entity arises either way, but the retention, the volume and the §55 partitioning consequences do.** |
| **`AC-20`** | **May a registration be CREATED for one CP while a DIFFERENT CP holds a live registration over the same client and Project — or must it be blocked at the door?** | `OF-14(a)`, `O-U`(5) | **This is NOT `AC-15`.** `AC-15` asks **who wins at a booking** when two are live; `AC-20` asks whether the second may **exist at all**. `O-U` is stated PER TRIPLE and therefore permits it structurally; **the clarification's worked example deliberately uses the non-overlapping case and is therefore SILENT, not permissive.** ⟦ARCHITECT ANALYSIS⟧ **Blocking it would be a systemic precedence rule, which `C-IX` holds is a §88 AUTHORIZATION change rather than a commission setting — so the owner should be told which §88 column the answer sits in before giving it. No precedence is invented.** |
| **`AC-21`** | **Is the registration's CLIENT subject the PERSON or the Lead / work record?** | `OF-5(4)` | AD-01N wrote the subject with a slash — *"(CP relationship, **Person / work record**, Project)"* — and the clarification says *"Client."* **Under `G-1` they coincide TODAY** (the work record is Person-bounded and long-lived), **so the question is cheap now and expensive later:** they diverge under some answers to **`M-5`**, and `O-U` is only as precise as its middle term. ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, relationships. **`M-5` and `AB-1` are NOT resolved here.** |

### 5.3 `AC-4`, restated — the one question that decides the architecture

> ⟦BUSINESS DECISION REQUIRED — `AC-4` (residual)⟧
>
> **Does a live `CP Project Registration` supply an admissible GROUND on which an attribution claim naming
> that CP may be MINTED on a later Inquiry that CP did not originate — the claim then being adjudicated under
> §11 like any other and CAPABLE OF LOSING (Reading H)? Or does the registration ONLY ever FILTER a claim
> that must arise entirely independently (Reading F)?**
>
> **What the clarification HAS settled, and must not be re-asked:**
> - A live registration **alone** does **not** produce commission — **`PO-O13`**.
> - A live registration **alone** does **not** produce commission eligibility — **`PO-O14`**.
> - **Reading G as AD-01N stated it is ELIMINATED**, and with it `X-4`'s threat to `K-18` (`A-23`).
> - The four layers **Registration ≠ Attribution ≠ Eligibility ≠ Payout** are an owner decision, not an
>   architect recommendation (`A-20`).
>
> **What remains, and why it is unavoidable:** **under BOTH remaining readings `K-18` survives**, so the
> question is no longer *"does the architecture break?"* — it is *"does a protection fact license a claim?"*
> **That is `Q1`, and it is AD-01L's `B-2`, and it has now gone UNANSWERED FOR SEVEN CONSECUTIVE DOCUMENTS.**
> **Under Reading F, both the owner's AD-01N example and the owner's new CP-B example are commercially inert
> unless the registration act happens to co-occur with an Inquiry origination — which `PO-O12·a` instructs
> must not be assumed** (`OF-20` step 5). **Both readings are recorded at equal strength. NEITHER is
> selected, preferred, ranked or hinted at. This is the Project Owner's alone.**

### 5.4 The rest, carried forward with status

| # | Question | Status after this clarification |
|---|---|---|
| **`AC-5`** | Which booking fact is *"Booking Date"* | **OPEN. Gains a second consumer** — it also selects WHICH registration in the sequence applies. |
| **`AC-6`** | Boundary convention α vs β; is `N = 0` legal | **OPEN, and NOW DOUBLY MONEY-BEARING.** It moves one day of eligibility **and** one day of re-registration ADMISSIBILITY, and both must use the SAME convention or the sequence can overlap. **Priority raised.** |
| **`AC-7`** | Ratify snapshot-at-registration; should a re-basing act exist | **FIRST HALF ANSWERED IN SUBSTANCE** (`OF-15`) — confirm, do not re-decide. **SECOND HALF OPEN and narrowed.** |
| **`AC-8`** | Business timezone: tenant-level or project-level | **OPEN. Now governs THREE date derivations, not two.** |
| **`AC-9`** | Offline registration date: capture date or sync-arrival date | **OPEN, and now EXISTENCE-BEARING** — the two readings can fall on opposite sides of a prior window's expiry. **`T-9` NOT resolved.** |
| **`AC-10`** | What *"successfully registers"* means; does a §44 unverified capture start a window | **OPEN, and now GATING** — an unverified capture may CONSUME the triple's live slot, blocking a later verified registration. Coupled to **`AC-3`**, carried forward. |
| **`AC-11`** | Does the rule time-bar the ORDINARY never-closed case | **OPEN, and EXPLICITLY NOT RELIEVED by re-registration** (`OF-19`). More consequential than before. |
| **`AC-12`** | Override directionality and revocation | **OPEN, unchanged.** |
| **`AC-13`** | Override scope, self-interest controls, CP visibility — **PLUS**: does the §39 portal show a CP that their own window has expired, and separately that a DIFFERENT CP now holds a live registration? | **OPEN, ENLARGED. Not renumbered.** ⟦SOURCE⟧ §39 vs §11. `V-7` supplies the mechanism, not the content. |
| **`AC-14`** | Does an invalid-side closure retain its protection window | **OPEN, unchanged.** Practical bite narrowed to the within-window period. **`L-6`/`K-22` NOT ratified.** |
| **`AC-15`** | Two CPs each hold a live registration — who wins at a booking | **OPEN. PRIORITY RAISED.** `O-U` permits the concurrent case structurally; `OF-12` makes it ordinary. **No precedence invented.** |
| **`AC-16`** | Does a cancelled/transferred booking re-run the test | **OPEN. Gains a sub-case:** a later date may select a DIFFERENT registration with different `R` and `N`. |
| **`AC-17`** | Project-level only, tenant default, per-CP-tier variation | **OPEN, unchanged.** |
| **`AC-1`, `AC-2`, `AC-3`** | AD-01M's three | **ALL OPEN, carried forward unchanged.** |
| **`Q1` / `B-2`** | May a claim ever be minted on a later Inquiry naming an earlier producer | **OPEN — SEVENTH document. It IS `AC-4`'s residue.** |
| **`Q0-a … Q0-e`** | AD-01M's ratifications, incl. `Q0-e` (ratify `A-1 … A-n`) | **ALL OPEN.** `Q0-e`'s list is now `A-1 … A-26`. |
| **`Q10` (merge), `M-5`'s uniqueness half** | | **OPEN, NOT narrowed — and NEWLY GATING for `O-U`'s enforceability** (`OF-17`, `X-16`, `A-26`). Named, not resolved. |
| **`Q11` (late filing)** | | **OPEN, NOT narrowed — acquires a first-class consumer** (`OF-12`). |
| **`AA-2`** (project-less preliminary registration) | | **OPEN, ON the critical path, urgency RISES** (`OF-12`). |
| **`V-4`** (reactivation) | | **OPEN, NOT narrowed — gains a THIRD inbound route** (a present-but-uninterested client), which `I-7` did not enumerate. |
| **`W-1`** (activity/response vocabulary) | | **OPEN, NOT resolved.** It owns whether *Helpdesk walk-in* and *site visit* are distinct activity values. **Its openness does not block `OF-6`: the CARRIER exists; only the VALUES are open.** |
| **`N-4`, `AA-1`, `AA-4`, `AA-5`, `AB-1 … AB-3`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-9`** | | **NONE resolved, narrowed or branched. ALL carried forward unchanged.** |

### 5.5 What the owner should take first

> ⟦ARCHITECT ANALYSIS⟧ **Ordered by how many other items each answer unblocks, not by importance. This is
> sequencing advice, not a decision.**
>
> 1. **Ratify `O-U`, `C-XIII`, `C-XIV` and `OF-6`** — four yes/no answers that make this document's
>    reconciliation binding or not. **Everything in §3 depends on `O-U`.**
> 2. **`AC-4` (residual), together with `Q1`/`B-2`** — **one question, seven documents.** It decides whether
>    the architecture has one commercial licence or none, and **under Reading F the owner's own new example
>    does not execute.**
> 3. **`AC-6`** — one word (α or β), and it now moves both eligibility and admissibility.
> 4. **`AC-5`, `AC-11`, `AC-7` (confirm the snapshot)** — three short answers that unblock specification.
> 5. **`AC-18`, `AC-20`, `AC-21`** — the three new items that are cheap now and expensive after history
>    accumulates (AD-01B §4).
> 6. **`AC-8 … AC-10`, `AC-12 … AC-17`, `AC-19`** in the commercial sitting AD-01L §15, AD-01M §14 and
>    AD-01N §M have each already recommended.
> 7. **Ratify or reject `A-1 … A-26`** (`Q0-e`). **Twenty-six unmade amendments across eight documents.
>    They cannot all be approved as literally written.**

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about SEQUENCE and READINESS. It is
> **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in **five** MUST-ASK columns simultaneously — canonical entities,
> relationships, financial logic, CP commission logic, authorization rules — plus audit requirements.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** The clarification is the Project Owner's, it is internally coherent, and — decisively —
**it is compatible with the architecture and it IMPROVES it.** It eliminates the reading that threatened
`K-18` (`OF-20` step 4); it converts the architect's most important guard-rail into an owner decision
(`OF-18`); it corroborates `NF-15` from the owner's own direction (`OF-15`); it confirms `G-1`/`V-1`,
`J-2`, `I-4 … I-9` and `B-1` without amendment to any of them; and **it requires NO new entity** (`OF-6`).
**Nothing about it needs to be argued back to the owner.** What it contradicts is **AD-01N's own unapproved
cardinality inference** — not an approved decision anywhere.

**Why not BUILD NOW.** Six things are load-bearing, cheap to answer, and **will be decided by implementation
if they are not decided first** — which ⟦SOURCE⟧ consolidated **§30** forbids:

1. **`O-U` itself is unratified.** It is the architect's derivation from the clarification, it is a §88
   canonical-relationship/cardinality decision, and **two of its three candidate alternatives were eliminated
   by argument rather than by the owner's words.**
2. **`AC-4` (residual) — Reading F or Reading H.** Seven documents. **It determines whether a protection
   fact licenses a claim, and therefore whether the owner's own worked example executes.**
3. **`AC-6` — the boundary convention**, now moving **two** money-bearing outcomes instead of one, which must
   agree.
4. **`AC-5` — which date is "Booking Date"**, now also selecting **which registration applies**.
5. **`AC-11` — whether the ordinary never-closed case is genuinely time-barred**, which re-registration does
   **not** relieve.
6. **`AC-20` and `AC-21`** — cross-CP creation, and the triple's middle term. **Both cheap now; both
   unrecoverable once registrations accumulate** (AD-01B §4).

**And one structural fact:** the clarification changes a **canonical entity's cardinality** and adds an
**explicit-act requirement** to its creation. ⟦SOURCE⟧ **§88** puts canonical entities and relationships in
MUST-ASK. **AD-01N was already at VALIDATE for this reason; the clarification does not move it past that
gate, it refines what is being validated.**

**Why not BUILD LATER.** *Later* implies the blockers need further analysis. **They do not.** `O-U`,
`AC-4`, `AC-5`, `AC-6`, `AC-11`, `AC-18`, `AC-20` and `AC-21` are **one-sentence answers from the owner, not
architecture work.** **A further architect document would be analysis substituting for a decision** —
AD-01L's own words, applied for the third time. **Shelving would also waste what the clarification has
already bought.**

**What the clarification has already bought, stated plainly because it is substantial:**

- **`X-4` is DISCHARGED and `K-18` is CONFIRMED** rather than conditionally threatened — the largest
  single architectural risk AD-01N was carrying is gone.
- **`C-XI` is upgraded to a ⟦PRODUCT-OWNER DECISION⟧** — the back door AD-01N feared is now closed by the
  owner, not merely guarded by the architect.
- **`AC-7`'s first half is answered in substance** — snapshot-at-registration is the owner's own word.
- **More than half of `AC-4` is answered**: Reading G is eliminated, and the four-layer separation is now
  owner-stated.
- **`NF-9` and `B-1` are re-tested against a registration SEQUENCE and hold** — the domain model was the
  right shape, and the clarification proves it from a direction the architecture did not supply.
- **`G-1`/`V-1` receive their first direct Product-Owner corroboration** (`PO-O7`).
- **No new entity is required** — the series' no-new-entity discipline is unbroken on this question.

**What VALIDATE means concretely.**

1. **Take §5.5's items 1–3 first** — `O-U`/`C-XIII`/`C-XIV`/`OF-6`, then `AC-4`+`Q1`/`B-2`, then `AC-6`.
2. **Take the remainder in the commercial sitting** that four consecutive documents have now recommended.
3. **Ratify or reject `A-14 … A-26` alongside `A-1 … A-13`** (`Q0-e`).
4. **Nothing may be built meanwhile that presupposes an answer.** ⟦SOURCE⟧ consolidated **§30**.
   Specifically NOT to be built: no CP registration record, **no registration sequence, no uniqueness
   constraint of any kind, no expiry flag, no re-registration act**, no lock-in configuration attribute, no
   eligibility determination artefact, no exception record, no override permission, **no `Visit`/`Revisit`
   entity, no `is_revisit` field, no visit counter**, no claim-citation reference, no commission scaffolding
   of any kind, and **no Dump-reason value list.**

### 6.1 Is the CP architecture now implementation-ready? — **NO**

> ⟦ARCHITECT ANALYSIS⟧ **Stated explicitly and without softening, because "the owner has clarified it" is
> easy to read as "it is settled."**
>
> **The CP architecture is NOT implementation-ready, and this clarification does not make it ready.**
>
> **Consequential ambiguity remains open, and the largest of it is the one the clarification was closest to
> closing.** `AC-4`'s residue — **does a protection fact license a claim?** — is **`Q1`/`B-2`, unanswered for
> a seventh consecutive document**, and it is the difference between an architecture in which a CP's
> registration can ever reach a later engagement and one in which it can only ever disqualify. **Under
> Reading F, the owner's own new worked example — CP B registering a client CP B did not produce an Inquiry
> for — confers nothing.** That is not a defect in the clarification; it is the gap the clarification has
> made **more visible**, which is exactly what a good clarification does.
>
> **The honest arithmetic:** the clarification **closes about one and a half open items**, **sharpens five**,
> **raises the priority of two**, and **opens four new ones**. **It reduces the number of possible
> ARCHITECTURES from two to one-and-a-half. It does not reduce the number of blocking QUESTIONS.**
>
> ⟦SETTLED⟧ **`M-9`, the commission model, still cannot start.** It consumes `K-18`, `K-48` as extended by
> `NF-28`, `K-47`, `K-26`, `B-2`'s answer, `AA-3`, `AB-1 … AB-3`, `AC-1 … AC-3`, `AC-4 … AC-17` and now
> `O-U` and `AC-18 … AC-21`. **Starting it before the sitting would require inventing every one of them.**
>
> ⟦SETTLED⟧ **AD-01F's `V-4` remains the cheapest unblocking question in the register.** It has now been
> recommended by six consecutive documents and has not been taken. **It does not block this decision and
> this decision does not block it — but the clarification has widened its inbound edges** (§2.7).

---

## Closing note

**STATUS: RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.** Section 6's
**VALIDATE** is **advisory**. **Nothing here is self-authorizing, and being asked to reconcile a clarification
is not permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**: canonical entities, relationships,
financial logic, CP commission logic, authorization rules and audit requirements are all **MUST ASK BEFORE
DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧
Consolidated **§30**: *"No schema/code implementation should be inferred from an unresolved product
ambiguity."*

**The Product Owner's clarification is NOT re-argued, NOT weighed and NOT softened anywhere above.** It is
⟦PRODUCT-OWNER DECISION⟧ throughout, recorded first in [§1](#1-confirmed-business-rules) before any analysis
touched it. Everything the architect adds — **`O-U`**, the findings **`OF-1 … OF-20`**, the constraints
**`C-XIII`** and **`C-XIV`**, and the amended output table (**`OF-10`**) — is ⟦ARCHITECT RECOMMENDATION⟧ and
is **NOT APPROVED.**

**No prior document is modified.** AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I,
AD-01J, AD-01K, AD-01L, AD-01M and **AD-01N** are all **unedited**. **AD-01N remains at `VALIDATE` and is not
approved.** The thirteen amendments this document finds necessary — **`A-14 … A-26`**, of which eleven are to
AD-01N and two (**`A-21`** to AD-01L, **`A-24`** to AD-01J) are to earlier documents — are **named and NOT
made**, and **only the Project Owner may make them.** `A-1 … A-13` remain named and not made.

**NO NEW ENTITY IS PROPOSED BY THIS DOCUMENT.** The necessity test was run in full against a
`Visit` / `Revisit` entity ([§2.3](#23-item-4--how-a-revisit-is-represented-and-whether-a-new-entity-is-necessary))
and **it FAILED**: every fact such an entity would carry already has a canonical home, *"revisit"* is
derivable, and the interaction carries no commercial fact. **A revisit is an ordinary Activity on the
long-lived work record, and nothing else.**

**No SQL, schema, migration, master value, column, table, index, constraint or type is authorized by anything
above, and none may be derived from it — `O-U` in particular is a BUSINESS RULE and is expressly NOT a
database uniqueness constraint** ([§2.2.1](#221-why-o-u-cannot-be-a-database-uniqueness-constraint)).
**No commission formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule or
TDS treatment appears anywhere.** **No lock-in number, minimum, maximum or default is proposed.** **No UI,
screen, workflow, approval step or gate is designed.** **No Dump-reason value is proposed.** **No precedence
rule between two CPs is invented.** **No re-registration cadence, minimum gap or cap is invented.** **No
mechanism that extends, resets, refreshes or tolls a LIVE protection window is proposed, designed or implied
— `PO-N3`, `PO-N4` and `PO-O6` are honoured literally.**

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2` and AD-01K's `K-18`
attribution anchor are NOT reopened — and `K-18` is CONFIRMED rather than conditionally threatened.**
**`T-5` is NOT reopened and `K-26` is preserved exactly.** **`L-6` and `K-22` are NOT reopened, NOT narrowed
and NOT ratified.** **`M-5`'s uniqueness half and `Q10` are NOT resolved — they are NAMED as newly gating
for `O-U`'s enforceability, and naming a dependency is not resolving it.** **No unrelated open item is
resolved** — `AA-1`, `AA-2`, `AA-4`, `AA-5`, `AB-1 … AB-3`, `AC-1 … AC-3`, `N-4`, `T-1`, `T-3`,
`T-6 … T-11`, `Q11`, `V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5` and `M-9` all carry forward
unchanged.

**The clarification's architectural half is reconciled here.** Its commercial remainder — **`AC-4`'s residue
above all, and with it `Q1`/`B-2`, which a SEVENTH consecutive document has now been unable to answer on the
owner's behalf** — **is `BUSINESS DECISION REQUIRED` and is the Project Owner's alone.** Per Spec **Rule 1**:
*do not invent requirements.* Per **§97**: *when in doubt, **STOP AND ASK**.* **This document is the asking.**
