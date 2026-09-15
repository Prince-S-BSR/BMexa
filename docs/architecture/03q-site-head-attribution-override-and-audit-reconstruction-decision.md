STATUS: PROPOSED — NOT APPROVED

# AD-01Q — The Site Head Attribution Override, and the Audit-Reconstruction Requirement: reconciling the Project Owner's two answers into AD-01J … AD-01P

**What this document is.** The Project Owner has answered **two** of the ten gating items AD-01P
[§6.1](./03p-cp-registration-attribution-basis-decision.md) left open. Both answers are **authoritative
business input.** Neither is **re-argued, weighed against alternatives, ranked, or softened anywhere below.**

**What this document does.** It reconciles both answers against AD-01J, AD-01K, AD-01L, AD-01M, AD-01N,
AD-01O and AD-01P, and against the whole chain behind them. It determines exactly what each answer settles,
what it settles only in part, what it does **not** settle, and what each prior document would have to be
amended to say before it could be approved alongside them. **Every amendment it finds necessary is NAMED and
NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **Section 6's recommendation is advisory.** Nothing below is
self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE` and is not approved; AD-01O
remains advisory and is not approved; AD-01P remains at `VALIDATE` and is not approved.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · **AD-01P**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes both decisions reconciled here in their entirety, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including these two decisions — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**Findings continue AD-01P's series as `PF-33 … PF-54`.** AD-01N used `NF-n`, AD-01O used `OF-n`, AD-01P
used `PF-n`. ⟦ARCHITECT ANALYSIS⟧ **This document does NOT mint a `QF-` series, and the reason is recorded
rather than left implicit: the letter `Q` is already the series' open-question namespace — `Q1` (two
different ones), `Q4`, `Q6`, `Q7`, `Q10` (two different ones), `Q11` (two different ones), `Q12`,
`Q0-a … Q0-e` — and a `QF-` prefix would sit one character from six live labels. Continuing `PF-` costs
nothing and collides with nothing.**

**New architectural constraints continue the `C` series as `C-XVII`, `C-XVIII` and `C-XIX`.**
**Contradictions continue as `X-23`, `X-24` and `X-25`.** ⟦ARCHITECT ANALYSIS⟧ **AD-01P reserved
`X-23`/`X-24` and did not allocate them, recording that *"the reservation was a ceiling, not a quota."*
This document allocates both, needs one more, and takes `X-25`. It reserves NO further range, because
AD-01P's reservation is what produced two dangling numbers.**
**Amendments that are logically required but deliberately NOT made continue as `A-36 … A-44`**
(`A-1 … A-35` remain named and not made). **New open questions continue the `AC` series as
`AC-27 … AC-31`; `AC-12` is ENLARGED and NOT renumbered, `AC-13` is ENLARGED A SECOND TIME and NOT
renumbered, `AC-25` is NARROWED and NOT renumbered, and `AC-26` is CHECKED, FOUND NOT ANSWERED, and NOT
renumbered.** **The override rule recommended below is labelled `Q-OV`; the reconstruction rule is labelled
`Q-AR`.**

> ⟦ARCHITECT ANALYSIS⟧ **Three collision warnings, each stated once and then relied upon.**
>
> 1. **`PO-Q1` and `PO-Q2` are this document's labels for the owner's two clauses, and the `PO-` prefix is
>    load-bearing and is never dropped.** They are **NOT** AD-01A's **`Q1`** (the four-value lifecycle
>    vocabulary), **NOT** AD-01M's **`Q1`** (*"may the system ever create a claim on a later inquiry"* —
>    closed at AD-01P §3.0), and **NOT** `Q10`, `Q11` or `Q12`. The owner's own shorthand for these two
>    answers was *"Q1"* and *"Q2"*; that shorthand is the owner's and is **not** carried into the register.
> 2. **`Q-OV` and `Q-AR` are the architect's labels for the two rules recommended below. They are NOT
>    members of the `Q` open-question series and are never cited without their hyphenated suffix.** This is
>    the same discipline AD-01P applied to `P-G` against `P-α … P-δ`.
> 3. **`C-XII` is AD-01N's, not AD-01L's.** It is stated at AD-01N §H.1 and is listed in AD-01P §2.2 as
>    ⟦ARCHITECT RECOMMENDATION, AD-01N⟧. **AD-01L's contribution to the same subject is `L-21`** — *a merge
>    and a citation must never be one artefact* — **which is the structural template `C-XII` follows and
>    which [§3.2](#32-determination-2--correction-versus-override-preserved-exactly) reuses a third time.**
>    The two are cited separately throughout and are not merged.

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step or gate is designed (AD-01A **§8.5**). **No commission formula, rate, slab, percentage,
amount, milestone value, clawback quantum, passback rule or TDS treatment appears anywhere — `M-9` owns all
of it. No lock-in number, minimum, maximum or default is proposed. No precedence rule between two CPs is
invented — `PO-Q1` creates a discretionary override path and NOT a default rule, and the two are never
conflated below. No re-registration cadence, minimum gap or cap is invented. No Dump-reason value is
proposed.** **`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's
`K-18`, `K-26` and `T-5`, and AD-01L's `L-6`/`K-22` are NOT reopened — and `K-18` is CONFIRMED for a FOURTH
consecutive document.** **`P-G` is adopted as AD-01P states it and is NOT re-derived.** **No unrelated open
item is resolved** — `AA-1`, `AA-2`, `AA-3`, `AA-4`, `AA-5`, `AB-1 … AB-3`, `AC-1`, `AC-2`, `AC-3`,
`AC-5 … AC-11`, `AC-14 … AC-24`, `AC-26`, `N-4`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`, `Q10`, `Q11`, `V-4`,
`W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half and `M-9` all carry forward
unchanged and are each accounted for individually at
[§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach).

---

## 1. Source and confirmed business rules

### 1.1 The source of these two decisions

> ⟦ARCHITECT ANALYSIS⟧ **`PF-33` — recorded first, because the provenance determines which register rows
> the answers may be posted against, and one of those rows is not the row they arrived labelled with.**
>
> **AD-01P closed at `VALIDATE` with a ten-item gating list at its §6.1. Two of those ten have now received
> owner input:**
>
> | AD-01P gate | What the owner has now supplied |
> |---|---|
> | **Gate 2** — *"`P-G`, `C-XV`, `PF-6`'s no-new-entity conclusion, `PF-23`'s claim-borne citation, `PF-12`'s survival rule, **and the six-link audit chain** — ALL ARCHITECT DERIVATIONS. ALL UNRATIFIED."* | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2` states the audit-reconstruction requirement in the owner's own words and extends it.** The chain limb of gate 2 is discharged; the rest of gate 2 is not. |
> | **The Site Head override machinery** — referenced across AD-01P at `PF-13(1)`, `§3.13` level 7, `§3.12` link 5 and `§6.1(4)`'s *"no override permission"* prohibition, and imported from AD-01N §H | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1` grants an override power at a decision point AD-01N's §H does not model.** |
>
> **Neither answer is a clarification, a refinement, or new scope. Both are answers to registered items.**
> **But one of them did not arrive at the register row it was addressed to, and
> [§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not) states that precisely
> rather than accommodating it silently.**

### 1.2 The decisions, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened or treated as an option. Clauses are numbered `PO-Q1·a … PO-Q1·d` and `PO-Q2·a …
> PO-Q2·c` so the rest of the document can cite them precisely. The numbering is the architect's; the
> content is the owner's.**

#### 1.2.1 `PO-Q1` — the Site Head override

> ⟦PRODUCT-OWNER DECISION⟧ **Verbatim:**
>
> > *"Site Head can directly override the normal CP attribution/clash decision, but the override MUST
> > require: (1) a mandatory reason, AND (2) mandatory supporting remarks/evidence. The override is a
> > separate appended permanent decision record. It must NOT mutate the original CP registration, inquiry
> > attribution, or clash records."*

| # | Clause |
|---|---|
| **`PO-Q1·a`** | **The grant.** *"Site Head can directly override the normal CP attribution/clash decision."* |
| **`PO-Q1·b`** | **The two mandatory inputs.** *"the override MUST require: (1) a mandatory reason, AND (2) mandatory supporting remarks/evidence."* |
| **`PO-Q1·c`** | **The artefact.** *"The override is a separate appended permanent decision record."* |
| **`PO-Q1·d`** | **The three prohibitions.** *"It must NOT mutate the original CP registration, inquiry attribution, or clash records."* |

#### 1.2.2 `PO-Q2` — audit reconstruction

> ⟦PRODUCT-OWNER DECISION⟧ **Verbatim:**
>
> > *"YES. Every CP attribution and commission decision MUST be fully reconstructable from immutable linked
> > records and audit events. An auditor must be able to trace the complete chain, for example: Client → CP
> > Project Registration → registration date → snapshotted lock-in policy → later Inquiry → registration
> > used as attribution basis → competing CP claim/clash → attribution/clash decision → any Site Head
> > override → Booking → commission eligibility → commission approval/payout."*

| # | Clause |
|---|---|
| **`PO-Q2·a`** | **The requirement.** *"Every CP attribution and commission decision MUST be fully reconstructable."* |
| **`PO-Q2·b`** | **The substrate.** *"from immutable linked records and audit events"* — **two substrates, named together and not interchangeably.** |
| **`PO-Q2·c`** | **The chain.** The twelve-term trace, quoted above, introduced by *"for example."* |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-34` — two words in `PO-Q2` are load-bearing and are read literally rather than
> generously, because reading them generously would let the architect widen or narrow an owner requirement.**
>
> 1. ***"immutable linked records AND audit events"*** — **`PO-Q2·b` names both substrates conjunctively.**
>    ⟦SETTLED⟧ AD-01N `NF-27` read property 3 already held that *"the audit log is the PROOF, not the query
>    surface"* and that the determination and the exception are *"business facts on business records,
>    audited in addition — not facts that live only in the audit log."* **`PO-Q2·b` states that position in
>    the owner's own words.** → [§3.11](#311-determination-11--source-of-truth-versus-derived-and-reporting-values).
> 2. ***"for example"*** — **`PO-Q2·c`'s chain is illustrative of the requirement, not a closed enumeration
>    of it.** ⟦ARCHITECT ANALYSIS⟧ **This cuts in exactly one direction and is used in exactly one direction
>    below: a term the chain omits is NOT thereby excluded from the requirement.** It is **not** read as a
>    licence to add a term the owner did not name — every term in `Q-AR`
>    ([§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link)) is either in `PO-Q2·c`, in
>    `PO-P11`/`PO-P12`, or in AD-01N `NF-27`, and none is invented.

#### 1.2.3 What the two answers say about each other

> ⟦ARCHITECT ANALYSIS⟧ **`PF-35` — the single most useful structural fact about this pair, and it is
> available only because both arrived together. It is stated before anything is derived from it.**
>
> **`PO-Q2·c` places the Site Head override at a determinate position in the owner's own chain:**
>
> > *"… competing CP claim/clash → **attribution/clash decision → any Site Head override** → Booking →
> > commission eligibility → commission approval/payout."*
>
> **The override sits AFTER the attribution/clash decision and BEFORE the Booking.** ⟦ARCHITECT ANALYSIS⟧
> **So `PO-Q2` independently corroborates, in the owner's own ordering, what `PO-Q1`'s words already say:
> the override `PO-Q1` grants operates on the ATTRIBUTION determination and not on the ELIGIBILITY
> determination.** **It is upstream of the Booking; `NF-28`'s conjunct (ii) and conjunct (iii) are both
> downstream of the Booking.** **This is corroboration from a second, independent owner clause, and it is
> what makes [§3.0](#30-the-headline-finding-two-override-layers-not-one)'s conclusion a reading of the
> sources rather than an architect's inference.**

### 1.3 What these decisions do NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14` and `PO-P1 … PO-P12` are untouched except where these two
> answers restate one of them, and every one of them remains in force.** In particular:

| Prior clause | Status after these two answers |
|---|---|
| **`PO-N8`/`PO-N9`** — an authorized Site Head may override an **expired CP eligibility decision** and approve the commission as an exception, subject to nine requirements | **UNCHANGED, NOT REPEALED and NOT ABSORBED.** `PO-Q2·c`'s chain does not show an eligibility-level override position, and ⟦ARCHITECT ANALYSIS⟧ **an omission in a clause introduced by *"for example"* is not a repeal** — `PF-34(2)`. **`PO-P10` level 7 independently names *"Commission Override — an authorized action"* as a separate level.** → `PF-40`. |
| **`PO-P10`** — the seven levels the architecture must never conflate | **UNCHANGED as a prohibition. Its ENUMERATION is now incomplete** — it names an override at level 7 and `PO-Q1` establishes one at level 5. → **`X-24`**, **`A-38`**. **Only the owner may extend their own list; this document names the gap and does not fill it.** |
| **`PO-P2`/`PO-P4`** — registration is NOT automatic attribution and NOT automatic clash winner | **UNCHANGED, and load-bearing twice below.** `PO-Q1`'s override is available against ANY attribution determination; it is not a privilege attaching to a registration-grounded claim. → `C-XVI` re-tested at [§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested). |
| **`PO-P11`/`PO-P12`** — the Inquiry must reference the grounding registration record; attribution must be traceable to the specific record | **RESTATED IN SUBSTANCE by `PO-Q2·c`'s *"registration used as attribution basis"* term, and therefore CONFIRMED TWICE.** |
| **`PO-N5 … PO-N7`** — the eligibility test and its expiry consequence | **UNCHANGED. `PO-Q1` does not touch any conjunct of `NF-28`.** → [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility). |
| **`PO-N3`/`PO-N4`/`PO-O6`/`PO-P6`** — nothing resets, extends, refreshes or tolls a registration window | **UNCHANGED. No mechanism that would relax any of them is proposed, designed or implied anywhere below, and an override is expressly NOT one** — `PO-Q1·d`. |
| **`PO-P7`** / **`C-XIII`** — only an explicit registration act creates a registration | **UNCHANGED.** An override creates no registration, and ⟦ARCHITECT ANALYSIS⟧ **`C-XIII`'s prohibition list acquires a second new row for the same reason `A-27`(ii) gave it its first** — [§3.5](#35-determination-5--immutability-and-what-the-override-must-never-touch). |

---

## 2. The existing architecture baseline these decisions land on

> ⟦SETTLED⟧ **Recorded so the two answers can be checked against the architecture rather than substituted
> for it. Nothing in this section is new and nothing in it is reopened.**

### 2.1 What "attribution/clash decision" and "commission eligibility" formally name

> ⟦ARCHITECT ANALYSIS⟧ **`PF-36` — `PO-Q1·a` names its target as *"the normal CP attribution/clash
> decision."* That phrase has a determinate referent in this architecture, and it is NOT the referent of
> *"commission eligibility."* The two are set out side by side because the whole of
> [§3.0](#30-the-headline-finding-two-override-layers-not-one) turns on the difference.**

| | **The attribution / clash decision** | **The commission eligibility determination** |
|---|---|---|
| **The question it answers** | *"Who produced THIS Inquiry?"* | *"Is this CP entitled on THIS booking?"* |
| **Its subject** | **One Inquiry's attribution claim set** — `K-52`: *"clash is scoped to one Inquiry's claim set"*; `K-12`: the Origination Rule is also the clash-scoping rule | **One (resolved claim × booking) pair** — `NF-24`'s Subject row, verbatim: *"One determination — one (CP claim × booking) eligibility outcome"* |
| **Who decides it** | ⟦SOURCE⟧ **§11**: *"Builder-side authorized leadership resolves attribution."* | The eligibility authorization — `NF-25`, ⟦SOURCE⟧ **§40**, **§50** |
| **Its answer-bearer** | **The resolved attribution claim on that Inquiry** — `K-18`, AD-01P §3.13 Layer 2 | **A JOIN, never a single anchor** — `K-48` as extended by `NF-28` to three conjuncts |
| **When it happens** | At §11 adjudication, which `C-IV` requires to complete **before** the §32 milestone. **A booking need not exist and may never exist** | At the booking. **A booking is a precondition of it existing at all** |
| **Whether it can exist with no Booking** | **YES, routinely.** Most adjudicated Inquiries never convert | **NO. Structurally impossible** |
| **`PO-P10` level** | **5 — Attribution: *"the resolved claim"*** | **6 — Commission Eligibility: *"a separate downstream determination"*** |
| **Existing override artefact** | **NONE. The series has never modelled one** | **`NF-24`, the Commission Eligibility Exception** (AD-01N §H.2, RECOMMENDED, NOT APPROVED) |

> ⟦SETTLED⟧ **`K-9` and `K-10` are the reason the last two rows are not pedantry.** **`K-9`: winning
> attribution and being paid are different outcomes.** **`K-10`: an internal claimant can WIN an attribution
> contest and generate NO §32 entitlement at all.** **A mechanism that acts on one of these two decisions
> has not thereby acted on the other, in either direction.**

### 2.2 The two override-shaped mechanisms the series already has

| | **`Q6` correction** (AD-01C §3.7; `T-6`, `T-7`, `T-8` all open) | **`NF-24` Commission Eligibility Exception** (AD-01N §H.2) |
|---|---|---|
| **What it asserts** | *"This was never true."* | *"This was true, and we are deciding differently anyway."* |
| **Effect on the prior record** | **Deliberately and visibly restates it** | **Leaves it standing, unchanged, and visible** — `PO-N9` |
| **Subject** | An incorrectly recorded fact | **One eligibility determination** |
| **Direction** | n/a | **One-directional as stated: ineligible → eligible-as-exception** (`AC-12` asks about the reverse) |
| **Scope** | n/a | **Per-booking.** A standing exception *"would be a silent policy change, which `PO-N9` forbids in substance"* |
| **Governing prohibition** | — | **`C-XII`: an override must NEVER be recorded through, routed to, or represented by the `Q6` correction mechanism** |
| **Does it resolve a §11 clash?** | No | ⟦ARCHITECT RECOMMENDATION, `NF-25`, verbatim⟧ **"it does not create an attribution claim, does not resolve a §11 clash, does not satisfy the §32 milestone, and does not substitute for either half of `K-48`"** |

> ⟦ARCHITECT ANALYSIS⟧ **The last row is the single most consequential sentence in AD-01N for this
> document, and it is the owner's architect who wrote it, not the owner. It is quoted here in full so that
> [§3.1](#31-determination-1--the-necessity-test-run-in-full)'s conclusion is checkable against AD-01N's
> own words rather than against a paraphrase of them.**

### 2.3 The decisions these two answers have to live inside

| # | Decision | Status here |
|---|---|---|
| **`K-18`** | ⟦ARCHITECT RECOMMENDATION⟧ The attribution claim attaches to **the Inquiry, and to nothing else** | **Adopted. NOT reopened. CONFIRMED for a FOURTH consecutive document — [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility).** |
| **`K-17`** | Origination facts immutable; the claim set **append-only and never overwritten** | **Adopted. NOT reopened. It is what makes `PO-Q1·d`'s third prohibition already true of the claim set before the override exists.** |
| **`K-48` + `NF-28`** | Eligibility is a three-conjunct JOIN | **Adopted. UNCHANGED. `PO-Q1` touches conjunct (i)'s ANSWER-BEARER and no conjunct's TEST — [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility).** |
| **`B-1`** | ⟦AD-01L⟧ Nothing recorded on a terminal Inquiry affects any other Inquiry | **Adopted. NOT engaged.** An override is recorded against a determination on **one** Inquiry and reaches no other. |
| **`C-IV`** | ⟦AD-01J⟧ Claim resolution must complete **before** the §32 milestone | **Adopted, and it is the only timing bound the sources supply for an override — which is why `AC-29` exists.** |
| **`C-IX`** | ⟦AD-01L⟧ A **binding systemic precedence** rule between two claims is a **§88 authorization change to §11**, not a commission setting — and *"a non-binding precedence policy that leadership applies is a governance artefact … and `C-IX` does not reach it"* | **Adopted, NOT amended, and its carve-out is expressly PRESERVED by `C-XVIII` — [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name).** |
| **`C-XI`** | ⟦PRODUCT-OWNER DECISION, per `A-20`⟧ The registration is a **TEMPORAL PROTECTION** fact and must never become an **ATTRIBUTION** fact | **Adopted, NOT breached. An override is not a registration and confers nothing on one.** |
| **`C-XII`** | ⟦AD-01N⟧ An override must never be routed through the `Q6` correction mechanism | **Adopted, RELIED UPON, and found UNDER-INCLUSIVE in its subject — `A-41`.** |
| **`C-XV`** | ⟦AD-01P⟧ The minting test and the eligibility test are two distinct evaluations; neither may be substituted for, cached as, or inferred from the other; **neither result may be stored on the registration** | **Adopted, UNCHANGED, and extended in spirit by `C-XVII`(3): no override result may be stored on the registration either.** |
| **`C-XVI`** | ⟦AD-01P⟧ A registration-grounded claim gets **no default win, no presumption, no tiebreak, no privileged or abbreviated resolution path** | **Adopted, STILL UNRATIFIED, and re-tested against the override at [§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested). It SURVIVES, and it acquires one corollary.** |
| **`P-G`** | ⟦AD-01P⟧ The six-step grounding pathway | **Adopted as written. NOT re-derived, NOT narrowed. It acquires one step — `A-38`(b).** |
| **`O-U`** | ⟦AD-01O⟧ At most one protection-bearing registration per triple at any instant; the triple carries an ordered non-overlapping sequence | **Adopted. Untouched by either answer.** |
| **`L-21`** | ⟦AD-01L⟧ *"A merge asserts the two records are the same engagement; a citation asserts they are different … They must never be recorded by the same artefact"* | **Adopted, and used a third time as the structural template — [§3.2](#32-determination-2--correction-versus-override-preserved-exactly).** |
| **`L-25`** | ⟦AD-01L⟧ A system- or management-created fact must be **visibly distinguishable** from one produced in the ordinary course | **Adopted, and it becomes the reason `A-43` is necessary.** |
| **`NF-25`** | ⟦AD-01N⟧ The exception is an additional **INPUT** to the authorization, **never a mutation of any input to it**; the authorization reads the **join** of (determination, any exception on it) | **Adopted, CONFIRMED, and GENERALISED one layer up — this is the shape `Q-OV` reuses in its entirety.** |
| **`NF-27`** | ⟦AD-01N⟧ The five required audit events and four read properties | **Adopted. It is found INCOMPLETE against `PO-Q2·c` in two places — `A-37`, `X-25`.** |
| **`NF-26`** | ⟦AD-01N⟧ Permissions, not role names; distinct; project-scoped; server-enforced; separation of duties | **Adopted in full. It is the template [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name) applies without amendment in principle.** |

---
