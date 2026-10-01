STATUS: RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.

# AD-01N — CP Registration Lock-in and Commission Eligibility, with Site Head Override

**What this document is.** The Project Owner has delivered a **finalized, authoritative commercial rule**
about CP registration lock-in periods. That rule is **not re-argued, not weighed against alternatives, and
not softened anywhere below.** It is treated exactly as AD-01L and AD-01M treat a
⟦PRODUCT-OWNER DECISION⟧: as fixed input.

**What this document does.** It reconciles that rule against the existing Lead / Client / Inquiry /
Attribution / Commission architecture (AD-01 … AD-01M), determines what the rule needs that the
architecture does not yet have, names every contradiction it creates with prior *architect
recommendations*, and states precisely how much of AD-01M's open decision surface the rule actually
closes.

**What this document is NOT.** It is not an implementation, a schema, a migration, a screen, a workflow or
an approval to build. **Section M's recommendation is advisory.** Nothing below is self-authorizing.

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the new lock-in rule in its entirety. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including the new rule — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

**Findings are numbered `NF-n`** to avoid collision with `N-1 … N-4` and with the `L-n` / `MF-n` series.
**New open questions continue AD-01M's `AC` series as `AC-4 … AC-17`.** **New architectural constraints
continue the `C` series as `C-XI` and `C-XII`.** **Amendments to prior documents that are logically
required but deliberately NOT made here continue the `A` series as `A-12` and `A-13`.**

**Scope discipline, stated once and honoured throughout.** No SQL, schema, table, column, migration,
master value or type appears anywhere. No screen, workflow, approval step or gate is designed
(AD-01A **§8.5**). **No commission formula, rate, slab, percentage, amount, milestone value, clawback
quantum or TDS treatment appears anywhere — M-9 owns all of it.** **No passback or clawback formula is
invented.** **No lock-in number is proposed** — the numbers in the owner's rule (30/60/90) are the owner's
own illustrations and the actual values are per-Project tenant configuration. **Q1, Q4, Q6, Q7, V-1, V-2,
V-3, V-11, V-12 and AD-01K's K-18 attribution anchor are NOT reopened.** **No unrelated open item is
resolved** — `AA-1 … AA-5`, `AB-1 … AB-3`, `AC-1 … AC-3`, `N-4`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`,
`Q10`, `Q11`, `V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half and
`M-9` all carry forward unchanged.

---

## A. Existing architecture relevant to this decision

> ⟦SETTLED⟧ **Recorded first, so the new rule can be checked against the architecture rather than
> substituted for it. Nothing in this section is new and nothing in it is reopened.**

### A.1 The objects, and what each one is permitted to own

| Object | Owns, for attribution and commission purposes | Explicitly does NOT own | Source |
|---|---|---|---|
| **Person** | Identity; the subject of §09 duplicate detection | **No claim. No source. No commercial fact** | ⟦SOURCE⟧ Spec **§06**, **§07**; **K-38** |
| **Lead / work record** | Relationship continuity; custody; handler; timeline; a **derived** first-source that is *not a claim and not a commission input* | **No claim. No persisted source. No commercial attribution fact** | **V-1** (AD-01G, approved); **G-1**; **J-36**; **K-16** |
| **Inquiry** | **The commercial unit.** Its immutable origination facts (source, campaign, channel, project, date); its **attribution claim set** — append-only, never overwritten; the resolved attribution; the §11 clash scope; the conversion reference | The milestone. The money. The handler | **V-1**; **K-17**; **K-18** |
| **Lead Attribution Claim** | One producer's assertion about **one Inquiry's** origin | Anything about any other Inquiry | ⟦SOURCE⟧ **§06**, **§11**; **K-18**; **K-52** |
| **Assignment Log** | Custody, the with/without-history conferral decision, and the **management intent** that opened the current custody interval | **No claim. Ever** | **G-9**; **I-8**; **K-15** |
| **Booking / transaction identity** | The **§32 milestone**; §33 clawback's subject; §25/§26 amendment history | **No claim.** It cannot say who produced the engagement | **K-47** |
| **CP Ledger** | The brokerage/commission accounting record **for the CP relationship** — the payee identity | Not a per-client, per-project fact | ⟦SOURCE⟧ **§06**; **K-42**; **K-48** |
| **CP Profile / Relationship** | The CP ↔ Builder relationship, including §41 principal → sub-agent structure | Not a per-client, per-project fact | ⟦SOURCE⟧ **§06**, **§41** |
| **Project** | The development. Tenant-scoped, and the unit of **R12** strict project isolation and **§08** scoped access | — | ⟦SOURCE⟧ **§06**, **§08**; **R12** |

### A.2 The decisions this rule has to live inside

| # | Decision | Status here |
|---|---|---|
| **Q1** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.1 — four-value Lead Lifecycle; *Pending* rejected as a fifth value | **Fixed input. NOT reopened.** Nothing below is a lifecycle value. |
| **Q4** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.2 — **Success = the approved Booked / §20 Stage 3 milestone.** Booking has its own lifecycle and the Lead Lifecycle must not absorb it | **Fixed input. NOT reopened.** Load-bearing in [§F](#f-eligibility-calculation) and in **AC-5**. |
| **Q6** | ⟦PRODUCT-OWNER DECISION⟧ AD-01C §3.7 — Success is terminal to ordinary transitions; a valid Success stays historically true; an **incorrectly recorded** one is corrected only through an audited, explicitly authorized, **appended** mechanism. *"Restate what was never true; never restate what was true at the time."* | **Fixed input. NOT reopened.** Supplies the *mechanics* of the override in [§H](#h-site-head-override-model) and, in **C-XII**, the prohibition that keeps the override out of the correction mechanism. |
| **Q7** | ⟦PRODUCT-OWNER DECISION⟧ AD-01A §8.3 — the three-dimension Dump-reason framework (A validity · B responsibility · C recoverability); a terminal non-conversion disposition must carry a reason; the reason is preserved, never silently rewritten; **values NOT approved (N-4)** | **Fixed input. NOT reopened. No value is proposed anywhere below.** |
| **V-1** | ⟦PRODUCT-OWNER DECISION⟧ AD-01G — **Lead = the work record; Inquiry = the commercial unit** | **Approved. NOT reopened.** |
| **V-2 / V-3** | ⟦PRODUCT-OWNER DECISION⟧ AD-01H — concurrent inquiries are valid; **lifecycle is Inquiry-level (Model D, H-4)**; an Inquiry is **terminal exactly once** | **Approved. NOT reopened.** |
| **V-7** | ⟦SETTLED⟧ AD-01G **G-6** — history visibility is a server-side, fail-closed projection over the **custody interval** (handler-facing) and the **Inquiry** (project-scoped and external), with entitlement inputs I1 ∪ I2 ∪ I3 | **NOT reopened.** Referenced only in [§I](#i-permissions-and-audit-requirements) for the CP's §39 view. |
| **V-11 / V-12** | ⟦PRODUCT-OWNER DECISION⟧ AD-01I — **Dump decomposes** into an Inquiry-level persisted commercial disposition and a record-level **derived** work condition; **redistribution is a work operation that never creates an Inquiry, never changes disposition and never changes attribution** (**I-4 … I-8**) | **Approved. NOT reopened, NOT redefined.** Reconciled with the rule in [§G](#g-dumpre-engagement-interaction). |
| **J-2 / K-50** | ⟦ARCHITECT RECOMMENDATION⟧ **The Origination Rule** — a customer-generated expression of interest opens a NEW Inquiry **iff** no non-terminal Inquiry on that work record already covers it; its domain is **commercial origination** events, not transaction events (§25/§26/§35) | **Adopted as the working model. NOT reopened.** Load-bearing in **NF-4**. |
| **K-17** | ⟦ARCHITECT RECOMMENDATION⟧ An Inquiry's source, campaign and channel are **immutable origination facts**; its claim set is **append-only and never overwritten** | **Adopted. NOT reopened.** |
| **K-18** | ⟦ARCHITECT RECOMMENDATION⟧ **The attribution claim attaches to the Inquiry, and to nothing else** | **Adopted. NOT reopened. Actively protected by C-XI.** |
| **K-48** | ⟦ARCHITECT RECOMMENDATION⟧ **Commission eligibility is a JOIN, never a single anchor:** **WHO** = the resolved attribution claim on the converting Inquiry; **WHETHER AND WHEN** = the transaction identity surviving §25/§26 and its §32 milestone | **Adopted — and materially EXTENDED by the new rule. See [§J](#j-impact-on-existing-cp-attributioncommission-architecture) and A-13.** |
| **B-1 / B-2 (L-3)** | ⟦ARCHITECT RECOMMENDATION⟧ AD-01L — the Inquiry's terminal boundary is **CLOSED TO CLAIMS** (architecture, not policy) and **OPEN ONLY TO CITATION** (the owner's decision) | **Adopted. B-1 is honoured throughout — see NF-9, the structural finding of this document. B-2 is NOT answered here.** |
| **C-II** | ⟦ARCHITECT RECOMMENDATION⟧ AD-01K/AD-01L — a reach/citation rule may assign credit for a **future** conversion, **never reassign a past one** | **Adopted, and it is the decisive input to [§E](#e-project-lock-in-configuration-semantics).** |
| **C-VIII** | ⟦ARCHITECT RECOMMENDATION⟧ AD-01L — if a horizon exists, it is measured from **the cited predecessor Inquiry's own terminal closure event, and from nothing else** | **DIRECTLY CONTRADICTED by the new rule as literally written. See [§K](#k-contradictions-or-amendments-required), X-1 and A-12. AD-01L is NOT edited.** |
| **C-IX** | ⟦ARCHITECT RECOMMENDATION⟧ AD-01L — a binding systemic precedence rule between two claims is a **§88 authorization change to §11**, not a commission setting | **Adopted unchanged and load-bearing in AC-15.** |
| **C-X** | ⟦ARCHITECT RECOMMENDATION⟧ AD-01L — a citation's stated ground must be a fact that cannot subsequently change | **Adopted, and SATISFIED by the registration date — see NF-6.** |
| **K-26 / T-5** | ⟦ARCHITECT RECOMMENDATION⟧ No commercial reach across a **fully discharged** attribution claim | **PRESERVED EXACTLY. NOT reopened, NOT re-derived.** |
| **L-6 / K-22** | ⟦ARCHITECT RECOMMENDATION⟧ A closure on **Dimension A's invalid side** admits no citation, as a class | **NOT reopened. Its interaction with the new rule is a live tension — X-5, AC-14.** |

### A.3 The engineering rules this decision must satisfy

| Rule | What it requires here |
|---|---|
| ⟦SOURCE⟧ **R1** | Every record carries `tenant_id`. The registration fact, the lock-in configuration and the override record are all tenant-scoped. No exemption. |
| ⟦SOURCE⟧ **R2** | **Roles are tenant-scoped rows, not an enum. Application logic never branches on a role *name*.** *"Site Head"* is a **label**, not a permission. See [§I](#i-permissions-and-audit-requirements). |
| ⟦SOURCE⟧ **R4** | Reasons, statuses and sources are **master rows**, never enums. Any override-reason vocabulary is a master, and **N-4's discipline applies: no value is proposed here.** |
| ⟦SOURCE⟧ **R6** | The audit log records **discrete domain events in business language**; it is **never updated and never deleted**; payloads are **immutable and denormalised on purpose** — *"an event records the actor label and the facts as they were at the time. Joining to live tables to render history is wrong — it rewrites the past."* **This single sentence decides [§E](#e-project-lock-in-configuration-semantics).** |
| ⟦SOURCE⟧ **R12** | Strict project isolation. The registration is project-scoped; so is the override authority. |
| ⟦SOURCE⟧ **§88** | Canonical entities, relationships, **financial logic**, **CP commission logic**, **authorization rules** and **audit requirements** are all **MUST ASK BEFORE DECIDING**. *"Inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION.** This decision touches **five** MUST-ASK columns simultaneously. |
| ⟦SOURCE⟧ Consolidated **§30** | *"No schema/code implementation should be inferred from an unresolved product ambiguity."* |

### A.4 The one thing the sources did not contain, and now do

> ⟦ARCHITECT ANALYSIS⟧ **NF-1 — the lock-in period is genuinely new information, and every prior document
> in this series said so in its own words. That is a positive finding, not a criticism of the rule.**
>
> ⟦SOURCE⟧ **AD-01E U-4**, confirmed by AD-01J, AD-01K and AD-01L: *no dormancy threshold exists anywhere
> in the sources.* ⟦SOURCE⟧ **AD-01M §2.3**, verbatim: *"Is there any dormancy period, cooling-off period
> or time window anywhere? **None exists anywhere in any source document.**"* An independent grep of
> `BMEXA_MASTER_SPEC.md`, `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` and
> `ENGINEERING_RULES.md` performed for this document confirms it a fifth time: **the only time-bounded
> commercial mechanism written down anywhere is §16/§18's inventory hold, which is unrelated.**
>
> **Consequence:** the owner is not confirming something already recorded. Every clause of the rule is new
> authoritative input, and the architecture has no prior commitment it can be checked against — only
> prior *architect recommendations*, two of which it overrides ([§K](#k-contradictions-or-amendments-required)).

---

## B. New authoritative business rule

> ⟦PRODUCT-OWNER DECISION⟧ **Recorded verbatim, before any analysis. Nothing in this section is the
> architect's, and nothing in it is weighed, ranked, softened or treated as an option.**

Every Builder Project has a configurable **CP Registration Lock-in Period** (e.g. 30/60/90 days). When a
CP brings a client to the Builder Helpdesk and the Helpdesk successfully registers that client against the
CP for a specific Project:

| # | Clause |
|---|---|
| **PO-N1** | The client registration date becomes the **FIXED** start date of the CP's protection window. |
| **PO-N2** | The Project's configured lock-in period determines the protection window. |
| **PO-N3** | The CP **cannot** reset, restart, refresh, or extend the window. |
| **PO-N4** | Re-registration, additional follow-ups, site visits, activities, transfers, or other subsequent events must **NOT** reset the original registration date. |
| **PO-N5** | Calculation: **Booking Date − CP Registration Date**, compared against the Project's configured lock-in period. Kept intentionally simple. |
| **PO-N6** | If the client books **within** the lock-in window: the CP is **normally eligible** for commission, **subject to other existing commission/booking rules**. |
| **PO-N7** | If the client books **after** the lock-in window: the CP is **normally NOT** commission-eligible. |
| **PO-N8** | However, an authorized **Site Head** can explicitly override an expired CP eligibility decision and approve the commission as an exception. |
| **PO-N9** | Such an override must: be an **explicit management action**; **identify who approved it**; require a **reason/justification**; be **auditable**; **NOT** change the original CP registration date; **NOT** reset or extend the underlying Project lock-in period; **NOT** silently modify historical eligibility calculations. |

**Worked example, in the owner's own terms.** Project A, lock-in = 30 days. CP registers Client X at
Helpdesk on **1 September**. Client X is later **dumped**. If Client X books **25 September** → CP normally
eligible. If Client X books **5 October** → CP normally not eligible (window expired), **but the Site Head
may explicitly approve the commission anyway as an override.**

### B.1 Three things the rule says that are easy to read past

> ⟦ARCHITECT ANALYSIS⟧ **NF-2 — each of these is load-bearing below, and each changes the architecture in a
> way the rule's own brevity conceals.**

1. **The window survives the Dump.** The worked example puts the dump *inside* it deliberately. **The rule
   therefore asserts that a CP's commercial connection to a client is NOT extinguished by the closure of
   the Inquiry the CP produced.** That is a direct answer to AD-01M's **Q2** and eliminates AD-01M's
   **Policy B**. ([§L](#l-remaining-product-owner-decisions), [§J](#j-impact-on-existing-cp-attributioncommission-architecture).)
2. **The calculation is unconditional on the closure reason.** PO-N5 names two dates and one configured
   number. It does **not** reference the Q7 reason, the responsibility locus, the recoverability posture,
   or who produced the later booking. **This takes `N-4` off this rule's critical path** — a consequence
   AD-01M expressly assumed would not be available under a conditional policy ([§K](#k-contradictions-or-amendments-required), X-6).
3. **The rule is stated over the *registration*, not over the *Inquiry*.** Every prior document in this
   series states CP reach over an Inquiry. PO-N1–N5 never mention one. **That is the whole of why a gap
   exists ([§C](#c-recommended-domain-model)) and simultaneously the whole of why the rule does not violate
   AD-01L's B-1 (NF-9).**

### B.2 The one ambiguity that changes what the rule *is*

> ⟦BUSINESS DECISION REQUIRED — AC-4, stated here because everything downstream branches on it⟧
>
> **PO-N6 says the CP is *"normally eligible … subject to other existing commission/booking rules."*
> PO-N7 says the CP is *"normally NOT"* eligible. Two readings of that pair are available and they are
> materially different policies:**
>
> | Reading | Statement | What it means |
> |---|---|---|
> | **Reading F — FILTER** *(the lock-in is a NECESSARY condition)* | The window test can only **disqualify**. A CP inside the window is eligible **only if the other rules independently make them so** — which, under **K-48**, requires them to hold the resolved attribution claim **on the Inquiry that converted**. | The rule **adds a third conjunct** to K-48's join and answers AD-01M's **Q5** completely. It does **not** answer **Q1**: the owner's own dump example is **inoperative** until Q1/B-2 is answered, because nothing creates the claim on the later Inquiry. |
| **Reading G — GRANT** *(the lock-in is NECESSARY AND SUFFICIENT)* | A live registration inside its window **is itself** the eligibility basis for whatever that client books on that Project, irrespective of who produced the converting Inquiry. | The rule answers **Q1 "yes"** and selects a policy AD-01M did not enumerate: **Policy A bounded by a horizon.** It also makes the registration a **second commercial anchor**, which contradicts **K-18** and **K-48** and revives AD-01K's eliminated **Candidate A** / AD-01L's eliminated **Alt 4** ([§K](#k-contradictions-or-amendments-required), X-4). |
>
> **The rule's own text points both ways.** *"subject to other existing commission/booking rules"* points
> to **F**. The worked example — which mentions no claim on the later booking at all — points to **G**.
>
> **Nothing below resolves this, and no reading is preferred, ranked or hinted at.** Where the two
> readings diverge, both consequences are stated. **Everything in sections C through I holds under BOTH
> readings**, because the domain model, the date semantics, the calculation, the override and the audit
> requirements are identical either way — **only the question of what the result is *joined to* differs.**

---

## C. Recommended domain model

> ⟦ARCHITECT ANALYSIS⟧ **The necessity test AD-01F, AD-01G, AD-01H, AD-01I, AD-01J, AD-01K and AD-01L all
> applied is applied again here, unchanged and without softening: *no new entity unless every existing
> concept demonstrably fails.* AD-01G rejected the Sales Episode (G-4) and the Custody Interval (G-9) under
> it. AD-01I concluded (I-9) that *"no new canonical business object is necessary, and none is proposed."*
> AD-01J, AD-01K and AD-01L each added none.**
>
> **This document is the first in the series where the test passes. The failure is demonstrated, not
> asserted.**

### C.1 What the rule actually requires the system to be able to answer

> ⟦ARCHITECT ANALYSIS⟧ **NF-3 — the rule reduces to one question, and its shape is the whole finding.**
>
> > **As at date D, is there a live protection window held by CP *c* over client *p* for Project *j* — and
> > if so, when did it start and how long is it?**
>
> **The subject of that question is the triple (CP, Person, Project). It is not an Inquiry, not a claim,
> not a booking and not a work record.** Four facts are needed and they must be co-located:
>
> | Fact needed | Why the rule needs it |
> |---|---|
> | **The CP** | PO-N1: the window is *the CP's* |
> | **The client (Person / work record)** | PO-N1: *"that client"* |
> | **The Project** | PO-N1/N2: *"for a specific Project"*, and *"the Project's configured lock-in period"* |
> | **One fixed start date, created once and never moved** | PO-N1, PO-N3, PO-N4 |

### C.2 The necessity test, run against every existing concept

> ⟦ARCHITECT ANALYSIS⟧ **NF-4 — each candidate is disqualified by a position already taken in this series,
> not by preference. The decisive one is candidate (a), and its failure is the Origination Rule's doing.**

| # | Candidate home | Verdict | Why |
|---|---|---|---|
| **(a)** | **The Inquiry's origination date + the CP claim on it** | **FAILS — decisively, and this is the finding** | At the *first* registration the fit is exact: ⟦SOURCE⟧ **§42**'s Helpdesk workflow (*"name, limited phone identifier where appropriate, CP/source, quick registration"*) with a client present **is** a customer-generated commercial origination event, so **J-2** opens an Inquiry, **K-17** fixes its origination facts, and **K-18** records the CP's claim on it. **But PO-N4 forbids a re-registration resetting the date, and J-2 forces exactly that reset:** after the first Inquiry is Dumped it is terminal and *"covers nothing"* (**J-46**), so a second Helpdesk registration by the same CP for the same client and project **originates a NEW Inquiry with a NEW origination date and its own claim set (J-34)** — and **B-1** forbids the new Inquiry inheriting anything from the old. **The model is structurally incapable of holding the date still. This is not an oversight to be patched; it is the Origination Rule working correctly.** |
| **(b)** | **The attribution claim** | **FAILS** | A claim is scoped to **one Inquiry** (**K-18**, **K-52**) and **B-1** makes it inert outside that Inquiry: *"No claim … recorded on a terminal Inquiry has any effect whatsoever on any other Inquiry."* A protection window that must survive the Inquiry cannot be a property of an object that cannot. |
| **(c)** | **The Assignment Log** | **FAILS, and is forbidden** | ⟦SETTLED⟧ **I-8 / K-15**: the Assignment Log owns custody and management intent and **"No claim. Ever."** It is also the wrong scope — it is per-work-record custody, not per-project-per-CP. **I-6**'s prohibition on a management act producing a commercial fact applies directly. |
| **(d)** | **The Lead / work record** | **FAILS, and is forbidden** | ⟦SETTLED⟧ **K-38 / J-36 / G-1**: the work record holds **"No claim. No persisted source. No commercial attribution fact."** It is also Person-scoped, not Project-scoped — it cannot distinguish a Project A registration from a Project B one. |
| **(e)** | **The Person** | **FAILS, and is forbidden** | ⟦SOURCE⟧ §06/§07 and **K-38**: **"No claim. No source. No commercial fact."** This is AD-01K's **Candidate A**, eliminated; and AD-01L's **Alt 4** (*"dissolve the boundary: attach the claim to the Person / CP relationship"*), **ELIMINATED BY ENTAILMENT** three times over. |
| **(f)** | **The CP Ledger** | **FAILS** | ⟦SOURCE⟧ §06: it is the accounting record **for the CP relationship**. **K-42/K-48** use it for the **payee identity**. It has no per-client, per-project dimension and adding one would make the ledger an attribution surface. |
| **(g)** | **The CP Profile / Relationship** | **FAILS** | ⟦SOURCE⟧ §06/§41: it is CP ↔ Builder (and principal ↔ sub-agent). Hanging a per-client, per-project row beneath it **is** the new record, named differently. |
| **(h)** | **The Booking** | **FAILS** | **K-47**: the Booking *"cannot say who produced the engagement."* It supplies one of the two dates, never the window. |
| **(i)** | **A pure derivation over the existing claim set** — *registration date = the earliest origination date among Inquiries on this work record for this Project whose claim set names this CP* | **LIVE, but UNSTABLE — see NF-5** | It needs no new record and is the form AD-01G **G-9** and AD-01I **I-8** would prefer. It fails on three open items rather than on principle. |

### C.3 Why the derivation is attractive and why it is not recommended

> ⟦ARCHITECT ANALYSIS⟧ **NF-5 — candidate (i) is the honest alternative to a new record, and it is
> presented at full strength before it is set aside. It satisfies PO-N3 and PO-N4 elegantly: a MIN over an
> append-only, never-deleted set is immune to later registrations by construction. It breaks on three
> things, and two of them are money-bearing.**
>
> | # | Defect | Depends on |
> |---|---|---|
> | **1** | **The MIN can move BACKWARDS, which retroactively shortens a live window.** A **late-filed claim** on an older Inquiry, or a **merge** of a duplicate work record, introduces an earlier qualifying Inquiry — so a booking that was *inside* the window on Monday is *outside* it on Tuesday, with no act by the CP and no act by the builder. **That is precisely what C-II forbids: a past determination reassigned.** | ⟦SETTLED⟧ **Q11** (late filing) and **Q10** (merge) — **both open, neither resolved here** |
| **2** | **It over-triggers.** ⟦SOURCE⟧ §11 permits *any* producer to file a claim on an Inquiry. Under the derivation, **CP B filing a competing claim on an Inquiry CP A originated would start CP B's protection window** — which PO-N1 does not say: PO-N1 says *"the Helpdesk **successfully registers** that client against the CP."* Restricting the derivation to the *originating* claim requires an originating-vs-later-filed distinction that **is not established anywhere** and is Q11's territory. | **Q11**, open |
| **3** | **It has no source where no Inquiry exists.** ⟦SOURCE⟧ **§44** permits capture of an **unverified** CP sub-agent's registration, and AD-01J's **AA-2** (project-less preliminary registration) is open. If a registration act can exist without originating an Inquiry, the derivation has nothing to compute over. | **AA-2**, open; ⟦SOURCE⟧ **§44** |
>
> **The derivation therefore becomes viable only if Q10, Q11 and AA-2 are all resolved in specific
> directions. Recommending it today would make a money-bearing mechanism depend on three unanswered
> questions — which is the position consolidated §30 exists to prevent.**

### C.4 The recommendation

> ⟦ARCHITECT RECOMMENDATION — NF-6, the CP Project Registration⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88**
> MUST-ASK: **canonical entities, relationships, CP commission logic, source-of-truth rules, audit
> requirements.** No schema, table, column or type is proposed. The name below is **descriptive, not
> approved**.)*
>
> **A new persisted commercial fact is required, and this is the first rule in the series for which the
> necessity test passes. Call it the `CP Project Registration`.**
>
> | Property | Statement |
> |---|---|
> | **Subject** | The triple **(CP relationship, Person / work record, Project)**, tenant-scoped per **R1**, project-isolated per **R12**. |
> | **What it asserts** | *"On this date, the Helpdesk registered this client against this CP for this Project, and the protection period then in force for that Project was N."* **Nothing else.** |
> | **Cardinality** | **At most one protection-bearing registration per subject triple.** The **first** one wins, permanently. Subsequent registration acts for the same triple are **recorded as events against it** ([§I](#i-permissions-and-audit-requirements)) and **change nothing about it** — PO-N3, PO-N4. |
> | **Created by** | The Helpdesk registration act, as one of that act's several outputs ([§C.6](#c6-how-the-four-things-relate-one-act-several-outputs)). |
> | **Mutability** | **Immutable in every field.** Never edited, never reset, never extended, never deleted — by the CP (PO-N3), by the builder (PO-N9), or by any override. **R6** applies to it as a historical fact, not merely to its audit trail. |
> | **What it is NOT** | **NOT an attribution claim. NOT an attribution anchor. NOT a lifecycle value. NOT a lifecycle state on anything. NOT a queue condition. NOT a Lead state.** See **C-XI**. |
>
> **Why this is not the rejected Sales Episode (G-4) or Candidate A (K-32/K-37) wearing a new name — the
> three tests those failed, run against this:**
>
> | Test | Sales Episode / Candidate A | CP Project Registration |
> |---|---|---|
> | Does it become the **attribution anchor**? | **Yes** — that was the objection | **No.** It cannot say who produced any Inquiry. **K-18 is untouched.** |
> | Does it hold a **lifecycle** or a **disposition**? | **Yes** | **No.** It has no states. It is a dated fact plus a snapshotted number. |
> | Does it make a **Person-scoped or relationship-scoped** commercial claim? | **Yes** — which is why Alt 4 was eliminated | **No.** It is **Project-scoped**, which is narrower than the CP relationship and broader than one Inquiry — **and that gap is exactly the shape the rule requires and no existing object has.** |

> ⟦ARCHITECT RECOMMENDATION — C-XI, a constraint⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.**)*
>
> **C-XI — The CP Project Registration is a TEMPORAL PROTECTION fact and must never become an
> ATTRIBUTION fact.** It answers *"is CP c's introduction still within its protected period for Project j
> as at date D?"* It must never be readable, joinable or reportable as an answer to *"who produced this
> Inquiry?"* **That question has exactly one answer-bearer — the resolved attribution claim on the Inquiry
> (K-18) — and this record does not become a second one.**
>
> **Why this needs to be a stated constraint rather than left implicit.** The two facts are co-created by
> one act and share three of their four identifiers. The natural implementation shortcut — reading the
> registration to decide attribution when no claim is present on a later Inquiry — **is Reading G
> arriving by the back door, uncontrolled and undecided** ([§B.2](#b2-the-one-ambiguity-that-changes-what-the-rule-is), **AC-4**).
> **If the owner chooses Reading G, that must be an explicit decision under §88, not a consequence of
> co-location.**

### C.5 Exactly where each thing lives

| Fact | Home | Basis |
|---|---|---|
| **The fixed CP registration date** | **A field of the CP Project Registration.** ⟦ARCHITECT RECOMMENDATION⟧ It is **not** the Inquiry's origination date, **not** the claim's filing date and **not** derived from either — those are per-Inquiry and reset (**NF-4(a)**). | [§D](#d-registration-date-semantics) |
| **The lock-in period governing that registration** | **A snapshotted field of the same CP Project Registration**, captured at registration. | [§E](#e-project-lock-in-configuration-semantics) |
| **The Project's current configured lock-in period** | **A configuration attribute of the Project**, tenant-scoped, project-isolated, with an audited change history. | [§E](#e-project-lock-in-configuration-semantics) |
| **The eligibility determination for a given booking** | **An appended determination fact**, keyed to the (claim × booking) pair, carrying its inputs as they stood. | [§F](#f-eligibility-calculation) |
| **The Site Head exception** | **A separate appended exception record**, keyed to that determination. **Never a field on the registration and never a field on the Project.** | [§H](#h-site-head-override-model) |
| **Who produced any Inquiry** | **The attribution claim on that Inquiry. Unchanged.** | **K-18**, **C-XI** |

### C.6 How the four things relate — one act, several outputs

> ⟦ARCHITECT RECOMMENDATION — NF-7⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**
> This follows AD-01I **I-4**'s shape exactly — *"one act, one Assignment Log entry, one audit event,
> three facts"* — and proposes **no workflow and no screen**, per AD-01A **§8.5**.)*
>
> **Helpdesk registration, Inquiry creation, CP attribution and registration protection are NOT the same
> event, and they are NOT four separate operations. They are ONE business act with up to FOUR recorded
> outputs, which have different scopes and different lifetimes.**
>
> | Output | Produced when | Scope | Lifetime |
> |---|---|---|---|
> | **1. Work record resolution** | Always — the Person is matched or created | **Person** | Permanent |
> | **2. An Inquiry** | **Only if J-2's condition holds** — i.e. no non-terminal Inquiry on that record already covers the interest. If one does, ⟦SETTLED⟧ **J-2** says the expression is an *activity on that Inquiry*, **not** a second Inquiry | **Person × Project × engagement** | **Terminal exactly once** (H-4) |
> | **3. A CP attribution claim** | Always, on whichever Inquiry output 2 resolved to — a new one, or the live one (in which case it is an ordinary **§11 clash**, **K-12**) | **One Inquiry** | Append-only, never overwritten (**K-17**); inert beyond that Inquiry (**B-1**) |
> | **4. A CP Project Registration** | **Only if none already exists for (CP, Person, Project).** Otherwise the act is recorded against the existing one and **the date does not move** — PO-N4 | **CP × Person × Project** | **Permanent and immutable** |
>
> **The answer to the task's question, stated plainly: registration protection attaches to something
> BROADER than the Inquiry — it spans Inquiries, which is the whole point — and NARROWER than the CP
> relationship, because it is per-client and per-project. There is no existing object at that scope. That,
> and only that, is why a new record is recommended.**
>
> **Two consequences worth stating because they are counter-intuitive:**
>
> 1. **Output 2 can be absent while output 4 is present.** If a live Inquiry already covers the interest,
>    no Inquiry is created — but if this is the CP's first registration for that triple, the protection
>    fact still is.
> 2. **Output 4 can be absent while outputs 2 and 3 are present.** A re-registration produces a new Inquiry
>    and a new claim and **no** new protection fact. **PO-N4 is satisfied structurally, not by a rule that
>    something must remember not to run.**

---

## D. Registration-date semantics

### D.1 What the date is, and what it is not

> ⟦ARCHITECT RECOMMENDATION — NF-8⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**)*
>
> **The CP registration date is the civil date, in the governing business timezone, on which the Helpdesk
> registration act that created the CP Project Registration occurred, determined from authoritative server
> time.**
>
> | Property | Statement | Basis |
> |---|---|---|
> | **Fixed at creation** | Written once, with the record. Never recomputed, never refreshed. | PO-N1 |
> | **Immutable thereafter** | No act by any actor moves it — not the CP (**PO-N3**), not the builder, not a Site Head (**PO-N9**), not a correction, not a merge except as noted in **D.4**. | PO-N1, N3, N9; **R6** |
> | **Not derived** | It is **not** read from the Inquiry's origination date and **not** read from the claim's filing date, because both reset on re-registration (**NF-4(a)**). | **J-2**, **J-46**, **B-1** |
> | **Server-authoritative** | ⟦SOURCE⟧ **§18**: *"must be determined by authoritative server time. Do not rely on the device clock."* Stated there for hold expiry; the reasoning is identical and the exposure here is larger, because this date **is** the money. | ⟦SOURCE⟧ **§18** |

### D.2 The events that explicitly do NOT move it

> ⟦PRODUCT-OWNER DECISION⟧ **PO-N4 is exhaustive in its intent and is honoured literally. None of the
> following resets, restarts, refreshes or extends the date, and no mechanism that would is proposed
> anywhere in this document.**

| Event | Effect on the registration date | Corroborating architecture |
|---|---|---|
| **Re-registration by the same CP for the same client and project** | **None.** A new Inquiry and a new claim may be created; the protection fact is untouched (**NF-7**, output 4) | PO-N4 |
| **Follow-ups, calls, site visits, any activity** | **None** | PO-N4; and ⟦SETTLED⟧ **I-6 / I-7 / J-16** — a work act must never extend a commercial claim's life |
| **Manager redistribution / lead transfer** | **None.** Redistribution *"creates a new working context and nothing else"* and **never** changes attribution or disposition | PO-N4; ⟦SETTLED⟧ **I-4 … I-7**, **V-12**, **K-54** |
| **§26 unit transfer on any booking** | **None** | PO-N4; ⟦SETTLED⟧ **K-40** — the Inquiry is structurally undisturbed by a transfer |
| **Dump / terminal closure of the Inquiry** | **None** — see [§G](#g-dumpre-engagement-interaction) | PO-N4; **NF-9** |
| **Client reactivation or re-engagement** | **None.** Re-engagement produces a **new Inquiry** (**J-2**, **J-37** act 2) and inherits nothing (**B-1**) | PO-N4 |
| **A Site Head override** | **None. Explicitly.** | **PO-N9** |
| **A change to the Project's configured lock-in period** | **None** — and under [§E](#e-project-lock-in-configuration-semantics) it does not move the *length* either | **PO-N9**, **R6**, **C-II** |

> ⟦ARCHITECT ANALYSIS⟧ **NF-9 — the structural payoff, and it is the most important finding in this
> document.**
>
> **AD-01L's B-1 states:** *"No claim, resolved attribution, entitlement, adjudication, source, campaign,
> channel, priority or disposition **recorded on a terminal Inquiry** has any effect whatsoever on any
> other Inquiry."*
>
> **The protection window is not recorded on the Inquiry.** It is recorded on the (CP, Person, Project)
> triple. **Therefore a window that survives the Dump and is tested against a booking on a later Inquiry
> violates nothing in B-1** — nothing crosses the Inquiry's terminal boundary, because nothing that
> crosses it was ever on it.
>
> **This is not a technicality and it is not a workaround. It is the reason the domain model in [§C](#c-recommended-domain-model)
> is the shape it is.** Had the protection been modelled as a property of the Inquiry or of its claim, the
> owner's rule and AD-01L's architecture would be in head-on conflict and one of them would have to give.
> **Modelled at the correct scope, they are compatible without either being weakened.**
>
> **What B-1 still forbids, and the rule does not attempt:** the earlier claim itself does not move,
> extend or re-scope; the later Inquiry inherits no source, no campaign, no disposition and no resolved
> attribution. **Under Reading F, the claim on the later Inquiry must still come from somewhere — which is
> B-2, and B-2 is NOT answered here** ([§L](#l-remaining-product-owner-decisions)).

### D.3 Date versus timestamp

> ⟦ARCHITECT RECOMMENDATION — NF-10⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**)*
>
> **PO-N5 subtracts dates, not instants. The system holds instants. One explicit projection rule is
> required and it must be the same rule on both sides of the subtraction.**
>
> 1. **Both operands are civil dates**, obtained by projecting an authoritative server instant into **one
>    governing business timezone**.
> 2. **The same timezone is used for both.** Using the registration site's zone for one operand and the
>    booking site's for the other can shift the day-count by one in either direction and is prohibited.
> 3. **The timezone is a stored, auditable configuration value, not an ambient server or session default.**
>    A determination re-run years later must reproduce the same civil dates.
> 4. **Whose timezone it is — the tenant's or the Project's — is not established by any source.** ⟦SOURCE⟧
>    **R1** makes the tenant the isolation boundary; ⟦SOURCE⟧ **R12** and **§08** make the Project a real
>    scoping boundary and a Project is a physical location. **→ `AC-8`, NOT resolved here.**
>
> **Time-of-day is not an input.** A registration at 23:55 and a booking at 00:05 the next morning are one
> day apart, not ten minutes. **This is a consequence of PO-N5's own wording and is stated so it is not
> discovered during implementation.**

### D.4 The one operation that may legitimately move the date, and it may only move it earlier

> ⟦ARCHITECT ANALYSIS⟧ **NF-11 — a duplicate-Person merge is the single exception, and it is not this
> document's to design.**
>
> If the same human exists as two Person records and each carries a CP Project Registration for the same
> CP and Project, a **merge** (⟦SETTLED⟧ **Q10**, open) must reconcile them. **The only reconciliation
> consistent with PO-N1 and PO-N4 is that the EARLIER date survives** — the later one was never a fresh
> start; it was a duplicate of a start that already existed.
>
> **Three things follow and none is resolved here:**
>
> 1. **This can retroactively shorten a live window**, exactly as **NF-5(1)** describes — which is why the
>    derivation was set aside, and which the persisted record does **not** escape. **The difference is that
>    with a persisted record this happens only on an explicit, authorized merge act that leaves an audit
>    trail, rather than silently whenever a claim is filed.**
> 2. **It is Q10's and M-5's, not this rule's.** ⟦SETTLED⟧ **Q10** (merge) and **M-5**'s uniqueness half
>    are **NOT resolved, NOT narrowed and NOT branched here.**
> 3. ⟦SETTLED⟧ **AD-01L's L-21 prohibition applies unchanged:** a duplicate is a **data defect**, corrected
>    and merged. **It must never be routed through the protection or citation mechanism.**

---

## E. Project lock-in configuration semantics

### E.1 Where the configuration lives

> ⟦ARCHITECT RECOMMENDATION — NF-12⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**
> ⟦SOURCE⟧ **§88** MUST-ASK: CP commission logic. **No number, default or range is proposed.**)*
>
> **The CP Registration Lock-in Period is a configuration attribute of the Project.** PO-N2 says so
> directly: *"the **Project's** configured lock-in period."*
>
> | Requirement | Basis |
> |---|---|
> | **Tenant-scoped.** Not a global constant, not a deploy-time setting, not a code default. | ⟦SOURCE⟧ **R1**; **R4**'s general form — *"when the product must branch on something tenants can rename, branch on a semantic column, never on a code or a label"* |
> | **Per-Project, and project-isolated.** | PO-N2; ⟦SOURCE⟧ **R12**, **§08** |
> | **Changeable by an authorized builder-side act, never silently.** Every change emits an audit event carrying the **before and after values**. | ⟦SOURCE⟧ **R6**; **§54** (*"relevant before/after values, system/human origin, authorization context"*) |
> | **Never an enum and never a `CHECK`-constrained text column.** If the configuration ever acquires named tiers, they are **master rows**. | ⟦SOURCE⟧ **R4** |
> | **Not a lifecycle value, not a state, not a status.** It is a duration. | **Q1** protected |
>
> **Whether a tenant-level default exists beneath the per-Project value, and whether the period may ever
> vary by CP tier or CP agreement rather than by Project alone, is not stated by the rule. → `AC-17`, NOT
> resolved here.**

### E.2 The snapshot question, analysed explicitly

> ⟦ARCHITECT ANALYSIS⟧ **NF-13 — the question the task names, taken as genuinely open and decided on
> evidence rather than assumed in either direction.**
>
> **The question.** Project A's lock-in is changed from 30 days to 60 days on 1 October. Registrations
> created on 1 September already exist. **Do their windows become 60 days, or stay 30?**
>
> **Three candidate answers exist, not two:**
>
> | # | Candidate | What it means |
> |---|---|---|
> | **(i)** | **Live read at evaluation** | The determination reads whatever the Project says **at the moment eligibility is computed**. |
> | **(ii)** | **Snapshot at booking** | The period is fixed when the booking occurs, not when the registration was made. |
> | **(iii)** | **Snapshot at registration** | The period in force **when the registration was created** is captured onto it and never changes. |

> ⟦ARCHITECT ANALYSIS⟧ **NF-14 — the case for and against each, stated without softening.**
>
> **For (i) — live read.**
> - It is the simplest thing to build and the simplest sentence to say, and PO-N5 says *"kept intentionally
>   simple."*
> - There is exactly one place to change the policy and no possibility of drift between the Project's
>   stated period and what any registration believes.
> - If a builder widens the period, they probably *intend* existing partners to benefit, and (i) delivers
>   that for free.
>
> **Against (i) — and these are not stylistic objections.**
> - ⟦SOURCE⟧ **R6**, verbatim: *"An event records the actor label and the facts **as they were at the
>   time**. **Joining to live tables to render history is wrong — it rewrites the past.**"* Under (i), the
>   eligibility determination for a booking on 5 October is computed against whatever the Project config
>   says **today**, so re-rendering the same historical determination next year can produce a different
>   answer. **That is the exact operation R6 names and forbids.**
> - ⟦ARCHITECT RECOMMENDATION, AD-01L⟧ **C-II**: a rule may assign credit for a **future** conversion,
>   **never reassign a past one.** A narrowing change (60 → 30) under (i) **converts a CP who was eligible
>   on 5 October into one who was never eligible** — with no act by either party. If commission had already
>   accrued, that is a **silent recovery with no §33 event**, and ⟦SOURCE⟧ **§33**/**PO-9** requires
>   recovery to be an explicit, distinguishable act. **No clawback formula is invented here and none is
>   needed to see the defect.**
> - ⟦SOURCE⟧ **AD-01M §11.2**, the audit obligation the framework *already* recorded for a conditional
>   policy, verbatim: *"the condition that was evaluated and the classification it relied on, **as they
>   stood at the moment of evaluation**. **If your condition changes later, past decisions must remain
>   explicable against the rule in force at the time.**"* **This requirement pre-dates the new rule and
>   lands squarely on it.**
> - ⟦PRODUCT-OWNER DECISION⟧ **PO-N9** requires that an override *"NOT silently modify historical
>   eligibility calculations."* **The owner has already stated the principle. A live read violates it by a
>   different route — a configuration change rather than an override — and the principle does not care
>   which route.**
> - ⟦PRODUCT-OWNER DECISION⟧ **Q6 / AD-01C §3.7**: *"restate what was never true; never restate what was
>   true at the time."* A policy change does not make a past determination untrue.
>
> **Against (ii) — snapshot at booking.** It fixes the R6 re-rendering problem and **does not** fix C-II.
> A configuration change between registration and booking still moves the goalposts on a protection the CP
> was promised at registration. **Commercially it is also the wrong moment: PO-N1 makes the registration
> the constitutive act, and PO-N2 attaches the period to it.** **(ii) is eliminated.**
>
> **For (iii) — snapshot at registration.**
> - It satisfies **R6** exactly: the fact is recorded as it was at the time.
> - It satisfies **C-II** exactly: a later configuration change can only ever affect **future**
>   registrations, so no past determination is reassignable.
> - It satisfies **AD-01M §11.2**'s pre-existing audit obligation without any additional artefact.
> - ⟦SOURCE⟧ **It is the repository's own established pattern for money-bearing configuration.** §06 makes
>   **Price List Version** *"Immutable/versioned pricing configuration"* and §21 makes the **Booking
>   Financial Snapshot** canonical. **The codebase already answers "what happens when money-bearing
>   configuration changes after the fact" — it snapshots.** ⟦SOURCE⟧ **R12** requires decisions to trace to
>   this repository's own documents; this one does.
> - It makes the determination **reproducible from the record alone**, which is what makes the original
>   ineligibility permanently provable under **PO-N9** ([§H](#h-site-head-override-model), [§I](#i-permissions-and-audit-requirements)).
>
> **Against (iii), stated honestly and not softened.**
> - **A builder who widens the period cannot reach existing registrations at all.** Under **PO-N3/N4** they
>   cannot re-register to refresh, and under **PO-N9** an override cannot extend the period. **The only
>   relief available to an existing registration is a per-booking Site Head exception.** That is a real
>   operational cost and the owner should know it before approving (iii).
> - It stores a number that is usually equal to the Project's current one, which looks redundant right up
>   to the moment it is not.

> ⟦ARCHITECT RECOMMENDATION — NF-15, the snapshot decision⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: CP commission logic,
> source-of-truth rules, audit requirements.)*
>
> **SNAPSHOT AT REGISTRATION — candidate (iii).**
>
> **The lock-in period in force for that Project at the instant the CP Project Registration is created is
> captured onto that registration and is thereafter immutable. A change to a Project's configured lock-in
> period is FORWARD-ONLY: it governs registrations created on or after the change and NO registration
> created before it.**
>
> **Therefore, in the task's own worked case: a Project changed from 30 days to 60 days after some
> registrations already exist — those registrations' windows DO NOT change. They remain 30-day windows,
> permanently.**
>
> **Grounded in, and traceable to:** ⟦SOURCE⟧ **R6** (*"joining to live tables to render history is wrong"*)
> · ⟦ARCHITECT RECOMMENDATION⟧ **C-II** (no past determination reassigned) · ⟦SOURCE⟧ **AD-01M §11.2**
> (past decisions explicable against the rule in force at the time) · ⟦PRODUCT-OWNER DECISION⟧ **PO-N9**
> (no silent modification of historical eligibility calculations) · ⟦PRODUCT-OWNER DECISION⟧ **Q6**
> (never restate what was true at the time) · ⟦SOURCE⟧ **§06/§21** (the versioned-and-snapshotted pattern
> the repository already uses for money-bearing configuration).
>
> **What this recommendation deliberately does NOT decide.** Whether the builder should additionally have a
> **deliberate, explicitly authorized, individually audited re-basing act** that widens a named existing
> registration when the Project's policy is widened. **That is a genuine commercial choice, it is not
> stated anywhere in the rule, and inventing it would breach PO-N3/N4's intent.** **→ `AC-7`, NOT resolved
> here.** **No such mechanism is proposed, designed or implied.**

---

## F. Eligibility calculation

> ⟦ARCHITECT ANALYSIS⟧ **Business logic only. No formula, rate, slab, percentage, amount, milestone value,
> clawback quantum or TDS treatment appears in this section — `M-9` owns all of it. No code, no SQL, no
> pseudocode.**

### F.1 The calculation, stated precisely

> ⟦ARCHITECT RECOMMENDATION — NF-16⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**
> The calculation itself is ⟦PRODUCT-OWNER DECISION⟧ PO-N5 and is not the architect's; what is recommended
> here is only the set of conventions PO-N5 leaves unstated and which cannot be left to implementation.)*
>
> **Given a booking and a CP claim under consideration:**
>
> | Step | Statement |
> |---|---|
> | **1** | Locate the **CP Project Registration** for (that CP, that client's work record, that booking's Project). **If none exists, this rule yields no protection** — the rule speaks only about registered clients. What that means for eligibility depends on **AC-4**; this rule does not say. |
> | **2** | Read **R** = the registration's fixed registration date, and **N** = the lock-in period **snapshotted on that registration** ([§E](#e-project-lock-in-configuration-semantics)) — **never the Project's current value.** |
> | **3** | Derive **B** = the booking date, as a civil date in the governing business timezone (**NF-10**). **Which booking fact supplies B is NOT established → `AC-5`.** |
> | **4** | Compute **D = B − R**, in **whole calendar days**, so that **D = 0** on the registration date itself. |
> | **5** | **Inside the window iff D ≤ N** — see the boundary convention in **F.2**, which requires the owner's explicit ratification. |
> | **6** | **Inside** → the CP is **normally eligible**, *subject to the other commission/booking rules* (**PO-N6**). **Outside** → the CP is **normally NOT** eligible (**PO-N7**), **unless** a Site Head exception exists for this determination ([§H](#h-site-head-override-model)). |
> | **7** | **The determination is recorded as an appended fact carrying R, N, B, D, the convention applied, the timezone used, and the outcome — as they stood.** It is never recomputed destructively and never overwritten. ⟦SOURCE⟧ **R6**; **PO-N9**. |

### F.2 The boundary convention — stated explicitly, because silence here is a defect

> ⟦ARCHITECT ANALYSIS⟧ **NF-17 — the owner's own example does not disambiguate the boundary, and this is
> worth demonstrating rather than asserting.**
>
> Registration **1 September**, N = **30**. The owner's example gives two data points: **25 September →
> eligible** (D = 24) and **5 October → not eligible** (D = 34).
>
> | Convention | Last eligible day | First excluded day | Consistent with the owner's example? |
> |---|---|---|---|
> | **(α) `D ≤ N`** — the window is *registration date + N days*, both endpoints inclusive (**N + 1 distinct calendar days**) | **1 October** (D = 30) | **2 October** (D = 31) | **Yes** |
> | **(β) `D ≤ N − 1`** — the window *spans N calendar days* counting the registration day as day 1 | **30 September** (D = 29) | **1 October** (D = 30) | **Yes** |
>
> **Both survive. The example cannot settle it, and one calendar day of every registration's money turns on
> which is chosen.** ⟦SOURCE⟧ **§95**: *"A one-tap action that creates financial corruption is worse than a
> three-tap action that prevents it."* The same standard applies to an unstated convention.

> ⟦ARCHITECT RECOMMENDATION — NF-18, the boundary convention⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN RATIFICATION. **NOT APPROVED.** This is money-bearing on exactly one day per
> registration and must be ratified, not assumed.)*
>
> **Convention (α): eligible iff `D ≤ N`, where D counts whole calendar days from the registration date
> and the registration date itself is D = 0.**
>
> **Stated as a sentence the business can check:** *"A 30-day lock-in registered on 1 September covers
> every booking from 1 September up to and including 1 October. 2 October is the first day outside it."*
>
> **Properties of (α):**
> - **Day 30 of a 30-day window is INSIDE. Day 31 is the first excluded day.**
> - A same-day booking (D = 0) is inside for every N ≥ 0.
> - The window is **N + 1 distinct calendar days**, because both endpoints are inclusive. **This is stated
>   explicitly because it is the half-open-interval trap, and it is the reason the convention must be
>   written down rather than inferred from the phrase "30 days."**
> - It reads naturally as *"registration date plus the lock-in period"*, which matches PO-N5's subtraction
>   form.
>
> **Convention (β) is equally defensible and the owner may select it with one word.** Nothing in the
> architecture prefers either. **→ `AC-6`.**
>
> **Also unstated and referred with it:** whether **N = 0** is a legal configuration (it would mean
> same-day-only protection under (α), and no protection at all under (β)), and whether any minimum or
> maximum N is intended. **No bound is proposed.**

### F.3 What the calculation must NOT do

> ⟦ARCHITECT RECOMMENDATION — NF-19, a set of prohibitions⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** Every item is entailed by PO-N3, PO-N4 or PO-N9 and none is an architect's
> addition.)*
>
> 1. **It must not read the Project's current lock-in value.** It reads the snapshot (**NF-15**).
> 2. **It must not treat any activity, visit, follow-up, transfer, redistribution, re-registration or
>    reactivation as an input.** **PO-N4.** No grace period, no tolling, no extension, no partial credit —
>    **none of these is proposed and none may be inferred.**
> 3. **It must not branch on the Q7 closure reason.** PO-N5 does not reference it. **Whether it *should* is
>    the L-6/Q0-c tension and is the owner's — `AC-14`.**
> 4. **It must not decide attribution.** **C-XI.** It takes the CP and the claim as given and answers only
>    the temporal question.
> 5. **It must not be evaluated destructively.** The determination is appended, never recomputed over the
>    top of a prior one. ⟦SOURCE⟧ **R6**; **PO-N9**.
> 6. **It must not be relaxed by a UI state.** ⟦SOURCE⟧ **§40**: *"The UI lock must correspond to
>    server-side authorization. Never rely on a greyed-out button as the actual security control."*
> 7. **It must not invent a tiebreak between two live registrations.** If two CPs each hold a live window
>    over the same client and project, **the rule supplies no precedence and none is invented** — ⟦SOURCE⟧
>    **§11** reserves resolution to builder-side authorized leadership and ⟦ARCHITECT RECOMMENDATION⟧
>    **C-IX** holds that a binding systemic precedence rule is a **§88 authorization change**, not a
>    commission setting. **→ `AC-15`.**

### F.4 The consequence of PO-N5 that is easiest to miss

> ⟦ARCHITECT ANALYSIS⟧ **NF-20 — the rule is not only about the dumped-then-returns case. Read literally,
> it also time-bars the ordinary case, and that is a substantial change the rule's brevity conceals.**
>
> PO-N5 is unconditional: *"Booking Date − CP Registration Date, compared against the Project's configured
> lock-in period."* It carries **no carve-out for the Inquiry that the CP originated and that never
> closed.**
>
> **Therefore, as written:** a CP registers a client for Project A on 1 January under a 90-day lock-in; the
> Inquiry stays live and is worked continuously; the client books on 1 June (D = 151). **Under PO-N7 the
> CP is not commission-eligible, on the very Inquiry they produced and which never stopped being theirs.**
>
> **This is a genuine and material change to the ordinary case.** Under **K-48** as it stands today, a
> resolved claim on a converting Inquiry plus the §32 milestone yields entitlement **with no temporal bound
> whatsoever**. The rule introduces one, and it introduces it for **all** CP claims, not only for claims
> reaching across a closure.
>
> **This document does not soften the rule, does not carve an exception into it, and does not assume the
> owner intended otherwise.** It is recorded as **`AC-11`** so that the owner confirms it deliberately —
> because it is the least obvious consequence of *"kept intentionally simple,"* it is the case that will
> arise most often in long-sales-cycle projects, and the Site Head override is the only relief the rule
> provides for it.

---

## G. Dump/re-engagement interaction

> ⟦SETTLED⟧ **AD-01I's decomposition is used unchanged and is NOT redefined: Inquiry-level = a persisted
> commercial disposition carrying a classified, preserved Q7 reason (V-11, AD-01A §8.3); record-level = a
> derived, non-persisted work condition (Model D, I-8); manager redistribution = a work operation that
> never creates an Inquiry, never changes disposition and never changes attribution (I-4 … I-7, V-12).**

### G.1 What the Dump does and does not do to the window

> ⟦ARCHITECT RECOMMENDATION — NF-21⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**)*
>
> | Object | Effect of the Dump | Basis |
> |---|---|---|
> | **The Inquiry** | Reaches **terminal-closed**, carrying its classified, preserved Q7 reason. **Terminal exactly once, monotone, never rewritten, never reversed, never reused.** | ⟦PRODUCT-OWNER DECISION⟧ **Q7**, **V-11**; **H-4** |
> | **The CP's attribution claim on that Inquiry** | **Preserved, append-only, never overwritten.** It remains the record of who produced *that* engagement, permanently. **It becomes inert beyond that Inquiry.** | **K-17**; **B-1** |
> | **The record-level work condition** | Derived; the record leaves the working queue. **Carries no commercial fact.** | **I-8**, Model D |
> | **The CP Project Registration** | **UNAFFECTED. The window neither closes, pauses, shortens nor extends.** The clock started at R and runs to R + N regardless of what happens to any Inquiry. | ⟦PRODUCT-OWNER DECISION⟧ **PO-N1**, **PO-N4**; **NF-9** |
>
> **The Dump is not an input to the calculation in any direction. It does not stop the clock and it does
> not start a new one.**

### G.2 The two cases the task names, worked

> ⟦ARCHITECT ANALYSIS⟧ **NF-22 — the owner's own example, traced through the architecture step by step, so
> that the point at which it becomes inoperative is visible rather than assumed.**
>
> **Case 1 — Dumped, then books INSIDE the window.** Registration 1 September, N = 30, Inquiry Dumped
> 10 September, client books 25 September.
>
> | Step | What the architecture records |
> |---|---|
> | 1 | The Helpdesk act creates the work record resolution, **Inquiry #1** (Project A, source = CP A), **CP A's claim on Inquiry #1**, and **the CP Project Registration** (R = 1 Sept, N = 30) — **NF-7** |
> | 2 | Inquiry #1 reaches **terminal-closed** with a classified Q7 reason. CP A's claim on it is preserved and becomes inert beyond it (**B-1**). **The registration is untouched.** |
> | 3 | The client returns. ⟦SETTLED⟧ **J-2**: no non-terminal Inquiry covers it, so this is a customer-generated commercial origination event and **Inquiry #2 opens**, with **its own source, its own campaign and its own claim set** (**J-34**, **K-17**). It inherits **nothing** from Inquiry #1 (**B-1**). |
> | 4 | Inquiry #2 converts. **K-48's WHO half asks: who holds the resolved attribution claim on Inquiry #2?** |
> | 5 | **The temporal test passes: D = 24 ≤ 30.** CP A's registration is live. |
> | **6** | **Here the two readings diverge, and the divergence is the whole of AC-4.** Under **Reading F**, step 5 filters an eligibility that step 4 must independently establish — and **no approved rule puts CP A's name on Inquiry #2's claim set.** That is **B-2**, and **B-2 is unanswered**. *The owner's own example does not complete.* Under **Reading G**, the live registration is itself the basis and step 4 is not required — **which contradicts K-18 and K-48** (X-4). |
>
> **Case 2 — Dumped, then books OUTSIDE the window.** Same facts, books 5 October. **D = 34 > 30.** Under
> either reading the temporal test **fails**, PO-N7 applies, the determination records a **negative**
> outcome with its inputs, and the only route to payment is a **Site Head exception** ([§H](#h-site-head-override-model))
> — which does **not** change R, does **not** change N, and does **not** hide the negative determination.
>
> **Case 2 is fully operable today. Case 1 is not, and the blocker is Q1/B-2, not this rule.**

### G.3 Re-engagement, redistribution and reactivation

| Question | Answer | Basis |
|---|---|---|
| Does a re-engagement (**J-37** act 2) start a new window? | **No.** It may open a new Inquiry and a new claim; the protection fact for that triple already exists and is untouched (**NF-7**, output 4) | **PO-N4**; **NF-7** |
| Does manager redistribution affect the window? | **No, structurally, in every reading.** Redistribution originates no Inquiry (**I-6**), reaches no commercial gate (**K-54**), and is explicitly named as non-resetting by **PO-N4** | ⟦SETTLED⟧ **I-4 … I-7**, **V-12**; **PO-N4** |
| Does the derived record-level "reactivation" affect it? | **No.** ⟦SETTLED⟧ **I-7**: *"operationally active"* and *"commercially active"* are two conditions with two producers and the architecture must never derive one from the other | ⟦SETTLED⟧ **I-7** |
| Does a later Inquiry's closure affect an earlier registration? | **No.** Registrations are not Inquiry-scoped | **NF-9** |
| Does a **different** CP's later registration affect this one? | **No — it creates its own, independent window.** What happens when both are live at one booking is **`AC-15`**, unresolved | ⟦SOURCE⟧ **§11**; **C-IX** |

> ⟦ARCHITECT ANALYSIS⟧ **NF-23 — the rule independently corroborates I-5, I-6, I-7 and J-16 from a
> direction the architecture did not supply, and that is worth recording.** ⟦SETTLED⟧ AD-01I and AD-01J
> derived, from first principles, that **a work act must never extend a commercial claim's life** — which is
> why AD-01L's **C-VIII** eliminated *last contact* as a measurement base. **PO-N4 states the same
> principle as a business rule, in the owner's own words, naming follow-ups, site visits, activities and
> transfers explicitly.** The owner and the architecture agree, independently. **This is a confirmation,
> not a new finding, and it changes nothing — it is recorded because four documents argued for it and this
> is the first external corroboration.**

---

## H. Site Head override model

### H.1 The override is an exception, not a correction — and the distinction is load-bearing

> ⟦ARCHITECT RECOMMENDATION — C-XII, a constraint and a prohibition⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED.** This does not reopen, narrow or test **Q6**, and it resolves no part
> of **T-6**, **T-7** or **T-8**.)*
>
> **C-XII — A Site Head override must NEVER be recorded through, routed to, or represented by the Q6
> correction mechanism. The two assert opposite things about the past and must never be carried by the
> same artefact.**
>
> | | A **correction** (Q6 / AD-01C §3.7; T-6, T-7, T-8 — all open) | A **Site Head exception** (PO-N8/N9) |
> |---|---|---|
> | **What it asserts** | *"This was never true."* | *"This was true, and we are deciding differently anyway."* |
> | **Effect on the prior record** | **Deliberately and visibly restates it** — AD-01C is explicit that restatement is the *point* of a correction | **Leaves it standing, unchanged, and visible** — **PO-N9** |
> | **Effect on prior reporting periods** | Restated, because they were wrong | **Not restated. Nothing was wrong.** |
> | **Organising principle** | *"Restate what was never true"* | *"Never restate what was true at the time"* |
>
> **Why this must be a stated prohibition.** Both are *"an explicit, authorized, reasoned, appended act"* —
> the mechanics are identical, and an implementer reaching for an existing mechanism would reach for the
> correction one. **Doing so would make every Site Head override look like an admission that the
> calculation was wrong**, would put commission exceptions inside the correction mechanism's reason
> vocabulary and authorization posture (**T-7**, **T-8** — both open), and would corrupt the one
> distinction Q6 exists to protect. **This mirrors AD-01L's L-21 exactly: a merge and a citation must never
> be one artefact because they make opposite claims about identity; a correction and an exception must
> never be one artefact because they make opposite claims about the past.**

### H.2 The recommended representation

> ⟦ARCHITECT RECOMMENDATION — NF-24, the Commission Eligibility Exception⟧ *(RECOMMENDED, SUBJECT TO THE
> PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧
> **§88** MUST-ASK: CP commission logic, authorization rules, audit requirements. **No screen, workflow,
> approval step or gate is designed** — AD-01A **§8.5**. **No amount, rate or quantum appears.**)*
>
> **The override is a separate, appended, immutable EXCEPTION record whose subject is one eligibility
> determination. It is never a field on the registration, never a field on the Project, and never an edit
> to anything.**
>
> | Property | Statement | Basis |
> |---|---|---|
> | **Subject** | **One determination** — one (CP claim × booking) eligibility outcome. **Not the CP. Not the client. Not the Project. Not the registration.** | **PO-N9** |
> | **Direction** | **One-directional as stated: ineligible → eligible-as-exception.** PO-N8 speaks only of overriding *"an expired CP eligibility decision."* **Whether a reverse override exists is NOT stated and is NOT invented → `AC-12`.** | **PO-N8** |
> | **Scope** | **Per-booking.** It confers nothing on any future booking by that client, nothing on any other client of that CP, and nothing on the CP's other registrations. **A standing exception would be a silent policy change, which PO-N9 forbids in substance.** Whether the owner wants a standing form is **`AC-13`**. | **PO-N9** |
> | **Effect on the registration date** | **None. Explicitly.** | **PO-N9** |
> | **Effect on the Project lock-in period** | **None. Explicitly.** It is not an extension of the window; it is an exception to the *consequence* of the window having expired. | **PO-N9** |
> | **Effect on the original determination** | **None. It stands, unchanged, permanently retrievable, and is never hidden, superseded, replaced or re-computed.** The exception sits **beside** it, never over it. | **PO-N9**; ⟦SOURCE⟧ **R6** |
> | **Mutability** | **Append-only. Never edited, never deleted.** | ⟦SOURCE⟧ **R6** |
> | **Reason** | **Mandatory free-text justification.** If a structured reason vocabulary is also wanted, it is a **master**, never an enum (⟦SOURCE⟧ **R4**) — **and no value is proposed here** (**N-4**'s discipline). | **PO-N9**; **R4** |
> | **Approver** | Recorded as **identity plus the role and scope under which they acted, denormalised as at that moment**. ⟦SOURCE⟧ **R6**: *"an event records the actor label and the facts as they were at the time."* A later role change must not rewrite who approved what. | **PO-N9**; **R6**; ⟦SOURCE⟧ **§54** |
> | **Time** | **Server-authoritative.** | ⟦SOURCE⟧ **§18**, **§54** |
> | **Reproducibility** | The exception **embeds the determination's inputs** (R, N, B, D, convention, timezone, outcome) alongside the reference to it, so the original ineligibility is provable from the exception alone even years later. | **PO-N9**; **R6** |

### H.3 How it composes with the rest of the eligibility test

> ⟦ARCHITECT RECOMMENDATION — NF-25⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**)*
>
> **The exception is an additional INPUT to the server-side eligibility authorization, never a mutation of
> any input to it.** The authorization reads the *join* of (determination, any exception on it). It never
> reads a determination that has been altered.
>
> ⟦SOURCE⟧ **§40**: *"Once the business condition is satisfied, invoice submission becomes available. **The
> UI lock must correspond to server-side authorization.**"* **The exception therefore must be recorded
> before invoice submission is authorized — not after, and not after payout.** ⟦ARCHITECT RECOMMENDATION⟧
> **C-IV**'s requirement that claim resolution complete before the §32 milestone applies to the exception
> in the same way and for the same reason.
>
> ⟦SOURCE⟧ **§50** is the natural home for the approval act itself — *"Approvals should be fast and
> contextual … **But server-side authorization must verify that the approver actually has authority.**"*
> **No approval screen, card, queue or workflow is designed here** (AD-01A **§8.5**), and none may be
> inferred from this sentence.
>
> **What the exception explicitly does NOT do:** it does not create an attribution claim, does not resolve
> a §11 clash, does not satisfy the §32 milestone, and does not substitute for either half of **K-48**.
> **A Site Head exception on a booking where the CP holds no resolved claim, or where the transaction has
> not reached its milestone, still yields no payment.** ⟦SETTLED⟧ **K-9**: winning attribution and being
> paid are different outcomes.

---

## I. Permissions and audit requirements

### I.1 Permissions

> ⟦ARCHITECT RECOMMENDATION — NF-26⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN
> APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: **authorization rules.** **No role is named in
> logic anywhere below, and no permission key is proposed.**)*
>
> ⟦SOURCE⟧ **R2**, verbatim: *"Roles are tenant-scoped rows, not an enum … **Application logic never
> branches on a role name.** … Any logic of the form `if (role.key === 'executive')` is disabled by a
> cosmetic edit."* ⟦SOURCE⟧ **§03** lists *"Project Head / Site Head"* among builder-side users — **that is
> a default role label, not a permission.**
>
> | # | Requirement | Basis |
> |---|---|---|
> | **1** | **The ability to approve a commission-eligibility exception is a PERMISSION in the fixed vocabulary, not a role name.** Any tenant-defined role may hold it. The default role shipped as *Site Head* holds it by default; a tenant renaming or replacing that role must not silently drop or silently grant the control. | ⟦SOURCE⟧ **R2** |
> | **2** | **It is a distinct permission**, not folded into a general commission-approval or lead-management permission. Holding it must be an explicit, reviewable grant. | ⟦SOURCE⟧ **R2**, **§88** |
> | **3** | **It is SCOPE-BOUND to the Project.** ⟦SOURCE⟧ **§08**: *"Roles and permissions must support scoped access … Global, Region, Project."* ⟦SOURCE⟧ **R12**: strict project isolation. **A holder scoped to Project A must not be able to except a Project B determination.** The scope is evaluated against the **registration's / booking's Project**. | ⟦SOURCE⟧ **§08**, **R12** |
> | **4** | **Server-side enforcement only.** ⟦SOURCE⟧ **§40**: *"Never rely on a greyed-out button as the actual security control."* ⟦SOURCE⟧ **§50**: *"server-side authorization must verify that the approver actually has authority."* | ⟦SOURCE⟧ **§40**, **§50** |
> | **5** | **Separation of duties.** ⟦SOURCE⟧ consolidated **§22**: *"Commission approval/validation/payment should be separated by responsible functions."* The exception approval must be **distinct from** Accounts' §32 review and **distinct from** payout authorization. **The exact separation matrix is M-9's and M-3's and is not designed here.** | ⟦SOURCE⟧ **§22** |
> | **6** | **Self-interest controls are required and are not designed here.** Whether the approver may be the CP's relationship manager, may sit in the benefiting reporting line, or may approve an exception they themselves requested — **not stated by any source. → `AC-13`.** | ⟦SOURCE⟧ **§11**, **§22** |
> | **7** | **Stronger-authentication gating is available and is the owner's choice, not the architect's.** ⟦SOURCE⟧ **R2** provides the pattern — *"Mandatory 2FA is `roles.requires_2fa`, so any role a tenant defines can carry the requirement … strictest wins."* **Whether this permission warrants it is NOT decided here.** | ⟦SOURCE⟧ **R2** |
> | **8** | **Tenant isolation applies without exemption** to the registration, the determination, the exception and the Project configuration. | ⟦SOURCE⟧ **R1** |
> | **9** | **Who may create a CP Project Registration** is the Helpdesk capability, and it is likewise a permission, not a role name. ⟦SOURCE⟧ **§42** requires it to be fast; ⟦SOURCE⟧ **§95** requires *"MINIMUM NECESSARY FRICTION, not minimum possible taps."* **Because the registration date is now money-bearing, these two pull against each other — and the resolution is NOT designed here.** | ⟦SOURCE⟧ **§42**, **§95** |

### I.2 Audit events and retained data

> ⟦ARCHITECT RECOMMENDATION — NF-27⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**
> ⟦SOURCE⟧ **§88** MUST-ASK: **audit requirements.** Event names below are **business-language
> descriptions, not approved identifiers** — ⟦SOURCE⟧ **R6** requires business language; **R4** requires
> that any vocabulary be master-driven. **No schema, table or column is proposed.**)*
>
> ⟦SOURCE⟧ **§54**: audit must capture *"actor, action, time, target, relevant before/after values,
> system/human origin, authorization context where appropriate."* ⟦SOURCE⟧ **R6**: *"never updated and
> never deleted"*; payloads *"immutable and denormalised on purpose."*
>
> | # | Event | Must retain |
> |---|---|---|
> | **1** | **CP project registration created** | CP relationship (and sub-agent where applicable), Person / work record, Project, the **registration date**, the **snapshotted lock-in N** and the identity of the Project configuration it was taken from, the Helpdesk actor and authorization context, online-vs-§12-offline origin, and whether the CP relationship was **verified or §44-unverified at that moment** |
> | **2** | **Repeat registration recorded — date NOT reset** | The repeat act's own date, actor and context, **and an explicit statement that the protection date was not moved.** ⟦ARCHITECT ANALYSIS⟧ **This event is required precisely BECAUSE the rule forbids the reset: without it, the second act leaves no trace and the ABSENCE of a reset is unprovable. A rule that says "this must not happen" needs a record that it did not happen when the occasion arose.** |
> | **3** | **Commission eligibility determined** | The claim, the booking, **R**, **N**, **B**, **D**, the boundary convention applied, the timezone used, and the **outcome**. Recorded as an immutable fact. **This is what makes the original ineligibility permanently visible under PO-N9** |
> | **4** | **Commission eligibility exception approved** | Approver identity **and their role and scope as at that moment**, server timestamp, **mandatory justification**, the determination excepted (by reference **and** by embedded values), and explicit assertions that the registration date and the Project lock-in period are unchanged |
> | **5** | **Project CP lock-in period changed** | Old value, new value, actor, authorization context, effective instant, and an explicit statement that it governs registrations created on or after that instant **and no registration created before it** (**NF-15**) |
>
> **Four read properties that are requirements, not implementation detail:**
>
> 1. **The original determination must remain retrievable and displayable ALONGSIDE any exception, never
>    replaced by it.** A reader must be able to see *"computed: not eligible — booked on day 34 of a 30-day
>    window; exception approved by <role, scope> on <date> for <reason>."* **PO-N9.**
> 2. **A determination must be reproducible from its own retained inputs**, without joining to the Project's
>    current configuration or to the CP's current relationship state. ⟦SOURCE⟧ **R6**: *"joining to live
>    tables to render history is wrong."*
> 3. ⟦ARCHITECT ANALYSIS⟧ **The audit log is the proof, not the query surface.** ⟦SOURCE⟧ **R6**'s retention
>    is *"12 months hot … then an automated job exports the aging partition to S3 cold storage."* **A CP
>    commission dispute can surface years after a booking.** The determination and the exception are
>    therefore **business facts on business records**, audited **in addition** — not facts that live only in
>    the audit log. **This is a genuine architectural requirement and it is easy to get wrong by treating
>    "it's audited" as sufficient.**
> 4. **An exception-derived eligibility must be visibly distinguishable from an ordinary one, everywhere.**
>    ⟦SOURCE⟧ **§39** entitles the CP to *"attribution information, pipeline status, commission status,
>    eligibility, invoice status."* ⟦SETTLED⟧ AD-01M **§11.3** and AD-01L **L-25** already require that a
>    fact the system or management created be distinguishable from one produced in the ordinary course.
>    **A commission arriving by exception is materially different from one arriving by entitlement.**
>
> ⟦BUSINESS DECISION REQUIRED⟧ **What the CP sees is two questions, not one.** Whether the **fact** of an
> exception is visible in the §39 portal, and whether the **justification text** is, are separable — the
> justification may be commercially sensitive, and ⟦SOURCE⟧ **§39** says *"Do not expose Builder-internal
> sensitive information"* while ⟦SOURCE⟧ **§11** says *"do not expose sensitive competing claims
> unnecessarily."* **→ `AC-13`. Visibility is enforced at the authorization boundary, per V-7's fail-closed
> projection (G-6) — the mechanism exists; what it should expose does not.**

---

## J. Impact on existing CP attribution/commission architecture

### J.1 What does NOT change

> ⟦SETTLED⟧ **None of the following is altered, narrowed or reopened by this rule, under either reading.**

| Fact | Status |
|---|---|
| **The attribution anchor is the Inquiry** (**K-18**) | **Unchanged, and actively protected by C-XI.** |
| **An Inquiry's source, campaign and channel are immutable origination facts; its claim set is append-only and never overwritten** (**K-17**) | **Unchanged.** |
| **B-1 — nothing recorded on a terminal Inquiry affects any other Inquiry** | **Unchanged, and NOT violated — NF-9.** |
| **§11 clash scope is one Inquiry's claim set** (**K-52**) | **Unchanged.** The registration is not a claim and enters no clash. |
| **Builder-side authorized leadership resolves attribution** (⟦SOURCE⟧ **§11**) | **Unchanged.** The rule supplies no tiebreak and none is invented (**NF-19(7)**, **AC-15**). |
| **Redistribution is commercially inert** (**I-4 … I-7**, **V-12**) | **Unchanged — and independently corroborated (NF-23).** |
| **A valid Success stays historically true** (**Q6**) | **Unchanged, and protected by C-XII.** |
| **A clawback acts on the ledger and the transaction, never on the claim** (⟦SOURCE⟧ **§33**, **PO-9**) | **Unchanged. No clawback formula is invented here.** |
| **Accrual and payout are separate** (⟦SOURCE⟧ consolidated **§22**) | **Unchanged.** |
| **A unit transfer does not move attribution** (**K-40**) | **Unchanged. AB-2 carries forward.** |
| **Multi-applicant entitlement (AB-1) and sub-agent payee (AB-3)** | **Unaffected and carried forward unchanged.** |
| **K-26 / T-5 — no reach across a fully discharged claim** | **Preserved exactly. NOT reopened.** |
| **The counterparty of the money is the CP relationship** (**K-42**, **K-48**) | **Unchanged.** The registration names the CP for protection purposes; it does not become the payee identity. |

### J.2 What DOES change — the eligibility test acquires a third conjunct

> ⟦ARCHITECT RECOMMENDATION — NF-28⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.**
> This **extends** K-48; it does not contradict it, and neither of K-48's two anchors is moved. **No
> formula, amount or milestone value appears.**)*
>
> **AD-01K's K-48 as it stands:**
>
> > *"Commission eligibility is the join of (i) the resolved attribution claim on the converting Inquiry —
> > the WHO — and (ii) the transaction identity that survives §25/§26 and its §32 milestone — the WHETHER
> > AND WHEN. Neither half alone is an anchor, and the two must not be merged."*
>
> **After this rule, under Reading F, there are three conjuncts and not two:**
>
> | | Conjunct | Answer-bearer | Status |
> |---|---|---|---|
> | **(i)** | **WHO** — the resolved attribution claim on the converting Inquiry | The Inquiry's claim set | ⟦ARCHITECT RECOMMENDATION⟧ **K-18 / K-48. Unchanged.** |
> | **(ii)** | **WHETHER AND WHEN** — the surviving transaction identity and its §32 milestone | The Booking | ⟦ARCHITECT RECOMMENDATION⟧ **K-47 / K-48. Unchanged.** |
> | **(iii)** | **STILL WITHIN PROTECTION** — is the CP's registration for that (client, Project) inside its snapshotted window as at the booking date, **or excepted** | **The CP Project Registration**, joined to the determination and any exception | ⟦PRODUCT-OWNER DECISION⟧ **NEW — PO-N5 … PO-N9** |
>
> **K-48's own discipline extends to the third conjunct unchanged: none of the three alone is an anchor,
> and none of the three may be merged into another.** In particular, **(iii) must never be merged into (i)**
> — that merge is Reading G, it makes the registration an attribution anchor, and **C-XI** exists to
> prevent it.
>
> **Under Reading G the test does not acquire a third conjunct — it acquires a second, independent route
> to satisfying the first.** That is a materially different architecture and is why **AC-4** must be
> answered before anything is specified.

### J.3 Consequences for the CP-facing surfaces

| # | Consequence | Basis |
|---|---|---|
| **1** | ⟦SOURCE⟧ **§39** already shows the CP *"eligibility"*. **Under this rule, "eligibility" becomes time-bounded and visibly so** — a CP can watch a window run out. That is a significant change to what the portal communicates and it will generate the conversation **§39** implies. **Not softened here.** | ⟦SOURCE⟧ **§39** |
| **2** | ⟦SOURCE⟧ **§40**'s lock message (*"Waiting for required payment milestone"*) now has a second, different reason for being locked: **the protection window expired.** These are different business conditions and must not be collapsed into one message or one server-side check. | ⟦SOURCE⟧ **§40** |
| **3** | **Reporting: no denominator changes.** The registration adds no Inquiry and no claim. ⟦SETTLED⟧ **J-48**'s single denominator is untouched. **CP conversion reporting, however, gains a new failure mode — "converted but time-barred" — which must be distinguishable from "converted and not attributed."** | ⟦SETTLED⟧ **J-48** |
| **4** | ⟦SETTLED⟧ **No CP scorecard or producer-evaluation product is authorised by anything here** (AD-01A §3.3, upheld). Reports branch on semantics, never on tenant-renameable labels (⟦SOURCE⟧ **R4**). | ⟦SETTLED⟧ |
| **5** | ⟦SOURCE⟧ **§12**'s offline gate becomes **money-bearing in a new and sharper way**: the registration **date itself** is now the money, not merely the clash outcome. AD-01L's **L-11** noted that T-4 gave **T-9** a financial dimension; **this rule gives it a second one that does not depend on any answer to T-4. → `AC-9`. T-9 is NOT resolved here.** | ⟦SOURCE⟧ **§12**; **A-11** |
| **6** | ⟦SOURCE⟧ **§44**'s unverified sub-agent capture now sits on a money-bearing act. **Whether an unverified capture starts a window, and from which date if later reconciled, is not stated. → `AC-10`, tied to `AC-3` which carries forward unchanged.** | ⟦SOURCE⟧ **§44**; **AC-3** |
| **7** | ⟦ARCHITECT ANALYSIS⟧ **The registration-farming hazard AD-01L's L-13 and AD-01M's MF-9 named becomes concrete and bounded at once.** Registration is ⟦SOURCE⟧ **§42**'s cheapest act, and under this rule each one is a **windowed** option rather than a perpetual one — **the lock-in period is itself a control on the hazard.** It is not a complete control: **volume inside the window still converts to options**, and ⟦SOURCE⟧ **§11** names attribution manipulation as a live risk in its own words. **This is recorded as a consequence for the owner to weigh, not as an argument for any answer to `AC-4` or `AC-14`.** | ⟦SOURCE⟧ **§11**, **§42**; **L-13**; **MF-9** |

---

## K. Contradictions or amendments required

> ⟦ARCHITECT ANALYSIS⟧ **No file is edited by this document. Where a contradiction is found it is named
> precisely and NOT resolved by editing the prior document. Every item below is a conflict with an
> unapproved ARCHITECT RECOMMENDATION, never with an approved Product-Owner decision — with one exception
> (X-5) which is a tension between the new rule and another unapproved recommendation, and one (X-2) which
> falsifies a statement AD-01M labelled ⟦SETTLED⟧.**
>
> **Result of the search against approved decisions: NO contradiction was found with Q1, Q4, Q6, Q7, V-1,
> V-2, V-3, V-7, V-11 or V-12. None of them is reopened.**

| # | Item | Statement | Status |
|---|---|---|---|
| **X-1** | **AD-01L's `C-VIII` — DIRECT, PROVABLE CONTRADICTION** | **C-VIII as written:** *"If the owner bounds citation by elapsed time (P-γ), the interval must be measured from the **CITED PREDECESSOR INQUIRY'S OWN TERMINAL CLOSURE EVENT, and from nothing else.**"* **The owner's rule measures from the CP REGISTRATION DATE — i.e. from the predecessor engagement's ORIGINATION end, not its closure end.** ⟦ARCHITECT ANALYSIS⟧ **C-VIII's GROUNDS are not contradicted — they are satisfied.** C-VIII required a base that is (a) owned by a commercial object, (b) immutable, (c) determinate at the gate, (d) not extendable by a work act. **The registration date satisfies all four, and satisfies (b) more strongly than the closure date does, because origination precedes every subsequent event.** C-VIII eliminated *last contact* and *last customer-generated event* correctly; **its candidate set simply never contained the origination end, so its "and from nothing else" over-closed.** **The commercial consequence of the difference is real and should be stated: under C-VIII's base an Inquiry worked for six months gives the CP a window starting at month six; under the owner's base, the working period consumes the window.** | **→ `A-12`: AD-01L's C-VIII requires amendment to admit the predecessor's origination date as an admissible measurement base, with its four grounds unchanged. NAMED AND NOT MADE. AD-01L is NOT edited. C-VIII is an unapproved recommendation and the owner's rule is authoritative — but AD-01L must not be read as still binding on this point.** |
| **X-2** | **AD-01M's `§15.1` ⟦SETTLED⟧ claim — FALSIFIED IN HALF** | **AD-01M §15.1, verbatim:** *"Your answer changes only which claims are in the population to be resolved. **It does not change the shape of the test**, and it does not change either anchor."* **The lock-in rule changes the shape of the test** — it adds a third conjunct (**NF-28**) under Reading F, or a second satisfaction route under Reading G. ⟦ARCHITECT ANALYSIS⟧ **The second half of the claim survives intact: neither anchor moves.** The first half does not. **AD-01M was answering the citation question; the lock-in rule is a different instrument and §15.1's scope did not anticipate one.** | **→ `A-13`: AD-01M §15.1 requires amendment. NAMED AND NOT MADE. AD-01M is NOT edited.** |
| **X-3** | **`U-4` and the source inventories — SUPERSEDED, NOT CONTRADICTED** | ⟦SOURCE⟧ AD-01E **U-4**, and the inventory tables in AD-01L **§14.2** and AD-01M **§2.3** (*"None exists anywhere in any source document"*), were **accurate statements about the sources as they then stood**. The owner has now supplied a time window. ⟦ARCHITECT ANALYSIS⟧ **Two distinctions matter and both cut against over-reading this.** (1) **The lock-in is NOT a dormancy threshold.** It is anchored at *registration*, not at the onset of inactivity. **U-4's actual question — when is a lead dormant — remains entirely open and is untouched.** (2) Those inventory tables are now **stale and will mislead a reader** who consults them for "is there any time window." | **NAMED. No amendment is strictly required because nothing said was false when written. AD-01E, AD-01L and AD-01M are NOT edited. Recorded so the inventories are not cited going forward as though current.** |
| **X-4** | **`K-18`, `K-48`, AD-01K Candidate A, AD-01L Alt 4 — CONDITIONAL CONTRADICTION, contingent on `AC-4`** | **Under Reading F: no contradiction.** The registration is a temporal filter and the Inquiry remains the sole attribution anchor. **Under Reading G: direct contradiction.** A live registration that by itself entitles a CP on a booking whose Inquiry carries no claim of theirs **makes the (CP, Person, Project) triple a second commercial anchor** — which is AD-01K's **Candidate A** (the Person/relationship anchor, eliminated) and AD-01L's **Alt 4** (*"dissolve the boundary: attach the claim to the Person / CP relationship"*, **ELIMINATED BY ENTAILMENT**, and eliminated three times before that). | **NAMED, NOT RESOLVED. This is the highest-value item for the owner in this document. → `AC-4`. K-18 is NOT reopened; C-XI exists to ensure Reading G cannot arrive by accident.** |
| **X-5** | **`L-6` / `K-22` — LIVE TENSION** | **L-6/K-22:** a closure on **Dimension A's invalid side** (wrong number, fake, non-opportunity) admits no citation, **as a class**, because *"the citation would have to assert, in one appended fact, both that the ground exists and that the business has classified it as not existing."* **The lock-in rule is closure-reason-blind (NF-2(2), NF-19(3)).** A registration whose Inquiry closed as invalid is still inside its window. **Under Reading G this credits a fabricated registration; under Reading F it does not, because no claim exists on the later Inquiry — but the tension resurfaces the moment B-2 is granted.** | **NAMED, NOT RESOLVED. This is AD-01M's `Q0-c` unchanged and now sharper. → `AC-14`. L-6 and K-22 are NOT reopened, NOT narrowed and NOT ratified here — ratifying or rejecting them remains the owner's, exactly as AD-01L asked.** |
| **X-6** | **AD-01M's `§14 Step 3` and `§7.2` — SEQUENCING CLAIM NOW WRONG FOR THIS FORMULATION** | **AD-01M:** *"it determines whether your closing-reason list (`N-4`) is on the critical path. **C puts `N-4` on it**; A, B, D and E do not."* **The owner's variant of C does NOT put N-4 on the critical path**, because its condition is purely temporal (**NF-2(2)**). ⟦ARCHITECT ANALYSIS⟧ **This is a materially favourable finding, not merely a correction:** the owner has selected a conditional policy **without** inheriting the conditional policy's stated prerequisite. **AD-01M's `AC-1` (the authorization posture of the closing-reason tap) likewise does NOT arise from this rule** — it still arises from `Q0-c`/`L-6` if the owner ratifies those. | **NAMED. AD-01M is NOT edited. `N-4` and `AC-1` both carry forward unchanged; what changes is only their position relative to this rule.** |
| **X-7** | **`Q6` / `T-6` / `T-7` / `T-8` — PROHIBITION, not a contradiction** | The override and the Q6 correction mechanism are mechanically identical and semantically opposite. **They must never be one artefact.** | **Stated as `C-XII` ([§H.1](#h1-the-override-is-an-exception-not-a-correction--and-the-distinction-is-load-bearing)). Q6 is NOT reopened. T-6, T-7 and T-8 are NOT resolved.** |
| **X-8** | **`C-II` — CONSTRAINT SATISFIED BY THE RECOMMENDATION AND VIOLATED BY THE ALTERNATIVE** | **Not a contradiction. Recorded because the task asked for the grounding explicitly.** C-II — *a rule may assign credit for a future conversion, never reassign a past one* — **is satisfied by snapshot-at-registration and violated by a live read** (**NF-14**). **C-II is therefore the decisive architectural input to [§E](#e-project-lock-in-configuration-semantics), and it is the reason NF-15 is a recommendation rather than a preference.** | **CONFIRMED and relied upon. Not amended.** |

### K.1 Positions confirmed rather than contradicted

| Document | Effect of this document |
|---|---|
| **AD-01** | **§D.4's *"claims are never overwritten by a later claim"* and **E-13**'s shape (commission keys on the resolved claim, never on a lifecycle state) are CONFIRMED and load-bearing. `Q10` (merge) and `Q11` (late filing) are NOT resolved — both are named as real interactions (**NF-5**, **NF-11**) and both are left to their owners.** |
| **AD-01A** | **`Q1`, `Q4`, `Q7` fixed input, NOT reopened. §8.5 honoured — no workflow, screen, approval step or gate is designed anywhere, including around the override. `N-4` NOT resolved and shown to be OFF this rule's critical path (X-6). No Dump-reason value is proposed.** |
| **AD-01B** | **§4's *"unrecoverable if decided by implementation"* standard applied to `AC-4`, `AC-5` and `AC-6`, which is why §M does not recommend BUILD NOW.** |
| **AD-01C** | **`Q6` NOT reopened, NOT narrowed, actively protected by `C-XII`. `T-5` NOT reopened; `K-26` preserved exactly. `T-6`, `T-7`, `T-8`, `T-9`, `T-11` NOT resolved — `T-9` gains a second, sharper financial dimension (`AC-9`). `T-3`'s merge-vs-citation distinction is upheld via `NF-11(3)`.** |
| **AD-01E** | **`U-4` superseded as to the existence of a time window, and CONFIRMED as to dormancy, which remains open (X-3). `U-1 … U-20` otherwise not resolved.** |
| **AD-01F** | **§12.4's prohibition on re-engagement restating a closed period CONFIRMED. `V-4` remains OPEN and is still the cheapest unblocking question in the register.** |
| **AD-01G** | **`V-1`, `G-1`, `G-6`, `G-8`, `G-9` CONFIRMED and used unchanged. `V-7` NOT reopened — its fail-closed projection is the mechanism for `AC-13`'s visibility question, and only the content of what to expose is open. `G-4`'s Sales Episode rejection re-tested against the new record and STANDS (**NF-6**).** |
| **AD-01H** | **`V-2`, `V-3`, `H-4`, `H-8` CONFIRMED. `H-4`'s terminal-once property is what makes `NF-4(a)` true and therefore what forces the new record. `Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved.** |
| **AD-01I** | **`V-11`, `V-12`, `I-4 … I-9` CONFIRMED, NOT redefined, and independently corroborated by `PO-N4` (**NF-23**). `I-9`'s *"no new canonical business object is necessary"* is the standard this document had to meet and is the standard against which `NF-6` is offered. `Z-2` and `Z-5` remain open and untouched.** |
| **AD-01J** | **`J-2` (as bounded by `K-50`), `J-30`, `J-34`, `J-36`, `J-37`, `J-46`, `J-48` CONFIRMED. `C-I … C-IV` adopted unchanged. `AA-1`, `AA-3`, `AA-4`, `AA-5` NOT resolved. `AA-2` is shown to be ON this rule's critical path (**NF-5(3)**). `A-6` relied upon and still NOT made.** |
| **AD-01K** | **`K-9`, `K-17`, `K-18`, `K-22`, `K-26`, `K-40`, `K-42`, `K-47`, `K-50`, `K-52`, `K-54` CONFIRMED. `K-48` EXTENDED, not contradicted (**NF-28**, `A-13`). `C-V`, `C-VI` (in `A-11`'s refined reading), `C-VII` adopted unchanged. `AB-1`, `AB-2`, `AB-3` NOT resolved and carried forward unchanged.** |
| **AD-01L** | **`B-1` CONFIRMED and NOT violated (**NF-9**). `B-2` NOT answered. `C-IX`, `C-X` adopted unchanged — `C-X`'s immutable-ground requirement is SATISFIED by the registration date. `C-VIII` CONTRADICTED as literally written (X-1, `A-12`). `L-6` NOT reopened (X-5). `L-13`'s registration-farming cost partially controlled and partially live (**J.3(7)**). `L-21`'s merge prohibition upheld. `A-1 … A-11` remain named and not made; the list grows to `A-13`.** |
| **AD-01M** | **Policies `B` and `D` ELIMINATED by `PO-N6`/`PO-N7` and the worked example. `Q5` ANSWERED. `Q2` substantially answered. `Q4` answered in substance for this instrument. `Q1`, `Q6`, `Q7`, `Q8`, `Q0-a … Q0-e` NOT answered. `§15.1` falsified in half (X-2, `A-13`). `§14 Step 3`'s N-4 sequencing wrong for this formulation (X-6). `AC-1`, `AC-2`, `AC-3` carry forward, with `AC-2` partly addressed and `AC-3` made money-bearing sooner. `MF-9`'s two-sided cost statement upheld without softening.** |

---

## L. Remaining Product Owner decisions

### L.1 Exactly how much of AD-01M's decision surface this rule closes

> ⟦ARCHITECT ANALYSIS⟧ **NF-29 — the precise accounting the task asks for. "Answered" means the rule
> states it. "Answered in substance" means the rule entails it and the owner should confirm rather than
> re-decide. "Not answered" means the rule is silent and nothing is guessed.**

| AD-01M item | Status after this rule |
|---|---|
| **`Q0-a`** — nothing carries forward; only a new claim citing the old | **NOT ratified.** The rule is silent on mechanism. **NF-9** shows the rule does not require Q0-a to be rejected — it operates beside it, not through it. Still needs explicit ratification. |
| **`Q0-b`** — redistribution never affects a claim | **ANSWERED IN SUBSTANCE.** `PO-N4` names transfers explicitly as non-resetting. Formal ratification still advisable. |
| **`Q0-c`** — an invalid/fake closure cannot support a later claim | **NOT ANSWERED, and now sharper.** → `AC-14`, X-5. |
| **`Q0-d`** — an automatic precedence rule is an authorization change | **NOT ANSWERED.** Becomes live at `AC-15`. |
| **`Q0-e`** — ratify `A-1 … A-11` | **NOT ANSWERED.** The list is now `A-1 … A-13`. |
| **`Q1`** — may a claim ever be created on a later Inquiry naming an earlier CP | **NOT DEFINITIVELY ANSWERED — and this is the largest remaining gap.** The worked example presupposes "yes"; no clause states it. **Under Reading F the owner's own example does not execute until Q1 is answered.** → `AC-4`. |
| **`Q2`** — what ends the CP's commercial connection | **SUBSTANTIALLY ANSWERED: the clock, not the closure.** A new terminator is supplied that is independent of Inquiry closure, and `PO-N6`'s dump example answers "does closure end it" with **no**. |
| **`Q3`** — re-engagement inheritance | **UNCHANGED / SETTLED.** The new Inquiry still inherits nothing; the window lives elsewhere (**NF-9**). |
| **`Q4` / `P-β`** — same project vs. portfolio | **ANSWERED IN SUBSTANCE: project-scoped.** The window is an attribute of a (CP, client, **Project**) registration and governed by *that Project's* period — **cross-project protection is not merely unsupported, it is inexpressible in this instrument, because no Project's lock-in applies.** Whether any *other* cross-project route should exist remains formally open. |
| **`Q5`** — time horizon, and the number | **ANSWERED. This is the rule's core content.** A horizon exists; it is **per-Project tenant configuration**, not a system constant; the number is the builder's. **Measurement base = the registration date, contra `C-VIII` (X-1, `A-12`).** |
| **`Q6` / `Q7`** — conflict mode; new CP vs. old CP | **NOT ANSWERED.** ⟦SOURCE⟧ §11 and `C-IX` still govern. → `AC-15`. |
| **`Q8`** — direct-source conversion | **NOT ANSWERED.** Conditional on `Q1`/`AC-4`. |
| **`Q9`** — manager redistribution | **CONFIRMED: no commercial effect** (`PO-N4`; **NF-23**). |
| **`Q10`** — must the record state its justification, and be distinguishable | **HALF ANSWERED.** The override half is answered: an exception-derived eligibility must be distinguishable and must carry its justification (`PO-N9`; **NF-27**). The citation half remains open. |
| **`Q11`** — confirm the two-part eligibility test | **ANSWERED IN AN UNEXPECTED DIRECTION: the test becomes three-part** (**NF-28**, X-2, `A-13`). |
| **`Q12`** — auditability | **SUBSTANTIALLY ANSWERED for the override path** by `PO-N8`/`PO-N9` and **NF-27**. **Not answered for the citation path.** |
| **`AC-1`** — authorization posture of the closing-reason tap | **DOES NOT ARISE FROM THIS RULE** (X-6). Still arises from `Q0-c`/`L-6`. **Carried forward unchanged.** |
| **`AC-2`** — an ex-gratia route without an attribution claim | **PARTLY ADDRESSED.** The Site Head exception is a sanctioned "pay anyway" route **inside** the commission workflow — but only for the **expired-window** case, and (under Reading F) only where a claim exists. **AC-2's broader question is unchanged and carries forward.** |
| **`AC-3`** — must a claim name a currently-approved CP relationship | **NOT ANSWERED, and money-bearing sooner**, because *"successfully registers"* and ⟦SOURCE⟧ §44 both sit on the registration act. → `AC-10`. **Carried forward unchanged.** |
| **`N-4`** | **OFF this rule's critical path** (X-6). Still required for reporting and for `Q0-c`. **Carried forward unchanged.** |
| **`AA-2`** — project-less preliminary registration | **NOW ON this rule's critical path** (**NF-5(3)**), because the rule requires a Project at registration. **NOT resolved.** |
| **`AA-1`, `AA-3`, `AA-4`, `AA-5`, `AB-1`, `AB-2`, `AB-3`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`, `Q10`, `Q11` (AD-01's), `V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half, `M-9`** | **NONE resolved, narrowed or branched. All carried forward unchanged.** `T-9` gains a second financial dimension; `Q10` and `M-5` gain a stated interaction (**NF-11**); neither is resolved. |

### L.2 Which of AD-01M's five alternatives this rule represents

> ⟦ARCHITECT ANALYSIS⟧ **NF-30 — the task's explicit question, answered precisely. The rule is NOT one of
> the five as written. It is a refinement of one of them, and WHICH one depends on `AC-4`.**
>
> | AD-01M alternative | Verdict |
> |---|---|
> | **Policy A** — the claim persists indefinitely | **ELIMINATED as written.** `PO-N7` supplies an expiry. |
> | **Policy B** — the claim ends at commercial discharge | **ELIMINATED.** The worked example puts a Dump inside a live window deliberately. |
> | **Policy C** — citation permitted only when a defined continuation condition is met | **THIS, under Reading F — with a material refinement.** AD-01M described C's condition as *"typically some combination of what the earlier inquiry was closed for, whether it is the same project, and how long ago."* **The owner has taken the third and the second and deliberately discarded the first.** That refinement removes C's stated prerequisite (`N-4`), removes `AC-1` from its path, and removes AD-01M's §8.1 finding that C makes the closing-reason tap financially consequential. **It is C's shape with C's most-criticised dependency removed.** |
> | **Policy D** — independently attributable to the later event | **ELIMINATED.** No evidentiary test is defined and none is implied; the rule is history plus a clock. |
> | **Policy E** — no standing rule; leadership decides each case | **NOT the base policy — but present as a bounded layer.** `PO-N8`/`PO-N9` graft an **E-style, explicitly-reasoned, recorded leadership decision** onto the rule as a **one-directional exception path** (ineligible → eligible-as-exception), scoped per booking. **It is not E, because a standing rule exists and leadership decides only exceptions to one of its two outcomes.** |
> | **Not enumerated by AD-01M** | **Under Reading G: "Policy A bounded by a horizon"** — a sixth shape AD-01M did not present, in which the registration itself entitles for a bounded period. |
>
> **Stated as one sentence:**
>
> > **Under Reading F, the rule is Policy C with a purely temporal, registration-anchored, project-scoped,
> > `N-4`-independent condition, plus a bounded one-directional Policy-E override layer. Under Reading G,
> > it is Policy A bounded by a horizon, plus the same override layer. `AC-4` decides which.**
>
> **Under BOTH readings the override layer makes AD-01M's `§11.2` audit obligations for E live: *"the
> human decision, its date, its author, and its stated reasons — for every case."* `PO-N9` requires exactly
> that, independently. The owner and the framework agree.**

### L.3 The open questions this document raises

> ⟦BUSINESS DECISION REQUIRED⟧ **Fourteen items. None is answered here. Numbered `AC-4 … AC-17`, continuing
> AD-01M's series. Per Spec **Rule 1**, **§88**, **§97** and consolidated **§1** and **§30**, none is
> guessed. Ordered by how many other items their answer changes, not by importance.**

| # | Question | Arises from | Why it cannot be left to implementation |
|---|---|---|---|
| **`AC-4`** | **Is the lock-in window a NECESSARY condition only (Reading F — a filter on an eligibility that must independently exist), or NECESSARY AND SUFFICIENT (Reading G — the registration itself entitles)?** | **B.2**, X-4, **NF-22** | **It determines whether you have just answered `Q1`, whether `K-18` still holds, and whether the eligibility test has three conjuncts or two. It also determines whether your own worked example is executable today.** Left to implementation, co-location of the registration and the claim will settle it silently, in whichever direction the first query is written. |
| **`AC-5`** | **Which booking fact is "Booking Date" — the approved `§20 Stage 3` Booked milestone (which `Q4` already makes the one canonical conversion fact), booking initiation, or the agreement/sale-deed date?** | **F.1** step 3 | These differ by days or weeks and the outcome turns on it. ⟦ARCHITECT ANALYSIS⟧ **The architecture currently has exactly one approved booking milestone (`Q4`); using any other date here creates a second, so that an Inquiry converts on one date while the commission clock closes on another. That is an observation, not a recommendation** — `Q4` is not reopened and no date is selected. |
| **`AC-6`** | **Boundary convention: is the last eligible day `registration date + N` (convention α), or `registration date + N − 1` (convention β)? And is `N = 0` a legal configuration?** | **F.2**, **NF-17** | Your own example is consistent with both. **One calendar day of every registration's money turns on it.** ⟦SOURCE⟧ §95: a fast action that creates financial corruption is worse than a slow one that prevents it. |
| **`AC-7`** | **Snapshot is recommended (`NF-15`). Ratify or reject it — and separately: should a deliberate, explicitly authorized, individually audited RE-BASING act exist to widen a named existing registration when a Project's policy is widened?** | **E.2**, **NF-15** | Under snapshot, a builder who widens the period **cannot reach existing registrations at all** except through per-booking exceptions. **That may be exactly what you want, or it may be an operational surprise. No re-basing mechanism is proposed or designed.** |
| **`AC-11`** | **Does the rule time-bar the ORDINARY case? A CP registers, the Inquiry never closes, is worked continuously, and books after the window — `PO-N5` as written says NOT eligible.** | **F.4**, **NF-20** | **This is the least obvious consequence of "kept intentionally simple" and the one that will arise most often in long-sales-cycle projects.** It is a substantial change to `K-48` for *all* CP claims, not only reaching ones. **The rule is not softened here and no exception is carved into it** — it is referred so you confirm it deliberately. |
| **`AC-14`** | **Does a registration whose Inquiry closed on Dimension A's INVALID side (wrong number, fake, non-opportunity) retain its protection window?** | X-5, **NF-19(3)** | This is `Q0-c` made concrete. ⟦ARCHITECT RECOMMENDATION⟧ `L-6`/`K-22` argue the record cannot coherently carry such a citation; **the lock-in rule is reason-blind.** It is also, per `L-13`, the primary control against registration farming. **`L-6` is neither ratified nor rejected here.** |
| **`AC-15`** | **Two CPs each hold a live registration for the same client and Project, and the client books. Who wins?** | **NF-19(7)**, X-1 | **No precedence is invented.** ⟦SOURCE⟧ §11 reserves resolution to builder-side authorized leadership, and ⟦ARCHITECT RECOMMENDATION⟧ `C-IX` holds that a binding systemic rule — including *"the earliest registration wins"* — is a **§88 authorization change**, not a commission setting. **You should be told which §88 column your answer sits in before you give it.** |
| **`AC-12`** | **Override directionality and revocation: may an authorized holder override in the ELIGIBLE → INELIGIBLE direction? May an approved exception be revoked, by what appended act, and what happens if money has already moved?** | **H.2** | `PO-N8` speaks only of overriding an *expired* decision. **Neither the reverse direction nor revocation is invented here.** The money-already-moved branch touches ⟦SOURCE⟧ §33 — **and no clawback formula, quantum or offset rule is proposed anywhere in this document.** |
| **`AC-13`** | **Override scope, self-interest controls, and CP visibility:** per-booking only (recommended) or standing? May the approver sit in the benefiting reporting line or approve their own request? Is the **fact** of an exception visible to the CP in the §39 portal — and separately, is the **justification text**? | **H.2**, **I.1(6)**, **I.2** | ⟦SOURCE⟧ §39 grants the CP eligibility and commission information while forbidding exposure of Builder-internal sensitive information; ⟦SOURCE⟧ §11 forbids unnecessary exposure of sensitive competing claims. **The fact and the reason are separable and no source addresses either.** `V-7`'s fail-closed projection supplies the mechanism; it does not supply the content. |
| **`AC-5a` → `AC-9`** | **Offline registration date: for a `§12` offline-captured registration, is the protection start the business date of the capture act, or the sync-arrival date?** | **J.3(5)** | ⟦SOURCE⟧ §12: *"Never pretend an offline lead has passed the server-side clash gate."* ⟦ARCHITECT RECOMMENDATION⟧ `A-11`'s refined `C-VI` puts the gate at sync-arrival. **The registration date is now the money itself, so `T-9` acquires a second and sharper financial dimension. `T-9` is NOT resolved here.** |
| **`AC-10`** | **What does "successfully registers" mean? Does a `§44` UNVERIFIED CP sub-agent capture start a protection window — and if it does, from the capture date or the later reconciliation date?** | **NF-5(3)**, **J.3(6)** | ⟦SOURCE⟧ §44 explicitly permits unverified capture so the Helpdesk is not blocked. **Under this rule that unverified act may start a money-bearing clock.** Directly coupled to `AC-3`, which carries forward unchanged. |
| **`AC-8`** | **Business timezone scope: tenant-level or project-level, for deriving both civil dates?** | **NF-10** | ⟦SOURCE⟧ `R1` makes the tenant the isolation boundary; `R12` and §08 make the Project a real scoping boundary and a Project is a physical place. **Mixing the two across the subtraction shifts the day-count by one.** It must be one stated rule, not an ambient default. |
| **`AC-16`** | **Does a cancelled (`§35`) or transferred (`§26`) booking re-run the window test against a later booking date?** | **J.1** | The rule keys on *a* booking date and does not say which one survives a cancellation or a transfer. Coupled to `AA-3` and `AB-2`, **both of which carry forward unresolved.** **No clawback or re-test rule is invented.** |
| **`AC-17`** | **Is the lock-in period Project-level ONLY, or is there a tenant-level default beneath it, and may it ever vary by CP tier or CP agreement rather than by Project alone?** | **E.1**, **NF-12** | `PO-N2` says *"the Project's configured lock-in period."* Builders commonly negotiate per-partner terms, and discovering that later would mean re-basing every registration — which `PO-N3`/`PO-N4` make impossible. **Cheap to answer now; expensive to discover.** |

> **No new numbering namespace is created. `AC-4 … AC-17` continue AD-01M's series. `AC-1`, `AC-2` and
> `AC-3` are NOT resolved and carry forward unchanged.**

---

## M. Recommendation: BUILD NOW / VALIDATE / BUILD LATER / REJECT

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about SEQUENCE and READINESS. It is
> **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in **five** MUST-ASK columns simultaneously — canonical entities,
> relationships, financial logic, CP commission logic, authorization rules — plus audit requirements.
> **Delegation to an architect is not authorization.**)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** The rule is the Project Owner's, it is internally coherent, it is commercially
ordinary in this industry, and — decisively — **it is compatible with the architecture as it stands.**
**NF-9** shows it does not violate AD-01L's `B-1`; **NF-6** shows it can be modelled without touching
`K-18`; **NF-15** shows it can satisfy `R6` and `C-II` together. **Nothing about it needs to be argued
back to the owner.** The two architect recommendations it contradicts (`C-VIII`, and half of AD-01M
`§15.1`) are **unapproved recommendations whose own grounds the rule satisfies**, not approved decisions.

**Why not BUILD NOW.** Four questions are load-bearing, cheap to answer, and **will be decided by
implementation if they are not decided first** — which ⟦SOURCE⟧ consolidated **§30** forbids:

1. **`AC-4`** — Reading F or Reading G. This determines whether `K-48` gains a third conjunct or a second
   satisfaction route, and whether `K-18` survives. **It is the difference between two architectures.**
2. **`AC-5`** — which date is "Booking Date". Three candidates, weeks apart.
3. **`AC-6`** — the boundary convention. One calendar day of every registration's money.
4. **`AC-11`** — whether the ordinary, never-closed case is genuinely time-barred.

**And one structural fact:** the rule requires a **new persisted canonical record** (`NF-6`). ⟦SOURCE⟧
**§88** puts canonical entities and relationships in MUST-ASK. **This is the first time in thirteen
documents that the necessity test has passed, which is a reason to have the owner look at it, not a reason
to skip the step.**

**Why not BUILD LATER.** *Later* implies the blockers need analysis. **They do not.** `AC-4`, `AC-5`,
`AC-6` and `AC-11` are one-sentence answers from the owner, not architecture work. **A sixth architect
document would be analysis substituting for a decision** — AD-01L's own words, and they apply here.
**Shelving this would also waste what the rule has already bought.**

**What the rule has already bought, stated plainly, because it is substantial:**

- **`Q5` is answered** — the fifth document to need a horizon finally has one, and it is per-Project
  configuration rather than an invented constant.
- **`Q2` is substantially answered** and **Policies `B` and `D` are eliminated**, cutting AD-01M's live
  option space from five to two readings of one.
- **`N-4` comes off the critical path** (X-6), and **`AC-1` does not arise from this rule** — the single
  most persistent blocker in the register is de-gated for this purpose.
- **`Q0-b` is answered in substance** and `I-4 … I-7` are independently corroborated (**NF-23**).
- **`Q12`'s override half is substantially answered** by `PO-N8`/`PO-N9`, which independently reproduce
  AD-01M `§11.2`'s audit obligations.

**What VALIDATE means concretely.**

1. **Take `AC-4`, `AC-5`, `AC-6` and `AC-11` first** — they are four sentences and they unblock
   specification. `AC-7` (ratify snapshot) belongs with them and is a yes/no on `NF-15`.
2. **Take the rest of `AC-8 … AC-17` in the commercial sitting AD-01L §15 and AD-01M §14 already
   recommend**, together with **`Q1`/`B-2`** — because **under Reading F the owner's own worked example
   does not execute until `Q1` is answered** (**NF-22** step 6). **That is the sharpest single reason the
   sitting should not be deferred again: the rule has made the gap visible in the owner's own example.**
3. **Ratify or reject `A-12` and `A-13` alongside `A-1 … A-11`** (`Q0-e`). **Thirteen unmade amendments
   across seven documents. The documents cannot all be approved as literally written.**
4. **Nothing may be built meanwhile that presupposes an answer.** ⟦SOURCE⟧ consolidated **§30**.
   Specifically NOT to be built: no CP registration record, no lock-in configuration attribute, no
   eligibility determination artefact, no exception record, no override permission, no claim-citation
   reference, no commission scaffolding of any kind, and **no Dump-reason value list.**

### M.1 What this recommendation does NOT say

> ⟦ARCHITECT ANALYSIS⟧ **Stated explicitly, because "VALIDATE" is easy to read as "nearly done."**
>
> **The architecture is NOT ready to implement, and resolving this rule does not make it ready.** This
> document resolves one instrument. **After it, the following remain open and every one of them is
> upstream of the commission model:** `Q1`/`B-2` (the citation licence, unanswered for a sixth document);
> `Q0-a` … `Q0-e`; `AC-1`, `AC-2`, `AC-3` and the fourteen items in `L.3`; `N-4`; `AA-1` … `AA-5`;
> `AB-1` … `AB-3`; `T-1`, `T-3`, `T-6` … `T-11`; `Q10`, `Q11`; `V-4`; `W-1`; `Y-1`, `Y-3`, `Y-4`, `Y-5`;
> `Z-2`, `Z-5`; `M-5`'s uniqueness half; and `M-9` itself.
>
> ⟦SETTLED⟧ **`M-9`, the commission model, still cannot start.** It consumes `K-18`, `K-48` **as extended
> by NF-28**, `K-47`, `K-26`, `B-2`'s answer, `AA-3`, `AB-1`, `AB-2`, `AB-3`, `AC-1`, `AC-2`, `AC-3` and
> now `AC-4` … `AC-17`. **Starting it before the sitting would require inventing every one of them.**
>
> ⟦SETTLED⟧ **AD-01F's `V-4` remains the cheapest unblocking question in the whole register.** It has now
> been recommended by five consecutive documents and has not been taken. **It does not block this decision
> and this decision does not block it.**

---

## Closing note

**STATUS: RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.** Section M's
**VALIDATE** is **advisory**. **Nothing here is self-authorizing, and being asked to reconcile a rule is not
permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**: canonical entities, relationships, financial
logic, CP commission logic, authorization rules and audit requirements are all **MUST ASK BEFORE
DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧
Consolidated **§30**: *"No schema/code implementation should be inferred from an unresolved product
ambiguity."*

**The Product Owner's rule itself is NOT re-argued, NOT weighed and NOT softened anywhere above.** It is
⟦PRODUCT-OWNER DECISION⟧ throughout. Everything the architect adds — the domain model (**NF-6**), the
snapshot decision (**NF-15**), the boundary convention (**NF-18**), the override representation
(**NF-24**), the permission and audit requirements (**NF-26**, **NF-27**), and the constraints **C-XI**
and **C-XII** — is ⟦ARCHITECT RECOMMENDATION⟧ and is **NOT APPROVED**.

**No prior document is modified.** AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I,
AD-01J, AD-01K, AD-01L and AD-01M are all **unedited**. The two amendments this document finds necessary —
**`A-12`** (AD-01L's `C-VIII` measurement base) and **`A-13`** (AD-01M `§15.1`'s "shape of the test"
claim) — are **named and NOT made**, and **only the Project Owner may make them**. `A-1 … A-11` remain
named and not made.

**No SQL, schema, migration, master value, column, table or type is authorized by anything above, and none
may be derived from it.** **No commission formula, rate, slab, percentage, amount, milestone value,
clawback quantum, passback rule or TDS treatment appears anywhere.** **No lock-in number, minimum, maximum
or default is proposed.** **No UI, screen, workflow, approval step or gate is designed.** **No Dump-reason
value is proposed.** **No precedence rule between two CPs is invented.** **No mechanism that extends,
resets, refreshes or tolls a protection window is proposed, designed or implied — PO-N3 and PO-N4 are
honoured literally.**

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12` and AD-01K's `K-18` attribution
anchor are NOT reopened.** **`T-5` is NOT reopened and `K-26` is preserved exactly.** **`L-6` and `K-22`
are NOT reopened, NOT narrowed and NOT ratified.** **No unrelated open item is resolved** — `AA-1` …
`AA-5`, `AB-1` … `AB-3`, `AC-1` … `AC-3`, `N-4`, `T-1`, `T-3`, `T-6` … `T-11`, `Q10`, `Q11`, `V-4`,
`W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half and `M-9` all carry forward
unchanged.

**The rule's architectural half is reconciled here.** Its commercial remainder — **`AC-4` above all, and
with it `Q1`/`B-2`, which a sixth consecutive document has now been unable to answer on the owner's
behalf** — **is `BUSINESS DECISION REQUIRED` and is the Project Owner's alone.** Per Spec **Rule 1**: *do
not invent requirements.* Per **§97**: *when in doubt, **STOP AND ASK**.* **This document is the asking.**
