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

## 3.0 The headline finding: two override layers, not one

> ⟦ARCHITECT ANALYSIS⟧ **`PF-37` — this is the document's thesis, and everything after it elaborates one
> determination at a time. It is stated before any mechanism is proposed, because the mechanism follows from
> it and not the other way round.**
>
> **`PO-Q1·a`'s target is *"the normal CP attribution/clash decision."* [§2.1](#21-what-attributionclash-decision-and-commission-eligibility-formally-name)
> established that this phrase has a determinate architectural referent — `PO-P10` **level 5**, whose
> answer-bearer is the resolved attribution claim on one Inquiry, decided by builder-side authorized
> leadership under ⟦SOURCE⟧ **§11**, at a moment when a Booking need not exist and may never exist.**
>
> **AD-01N's existing override — `NF-24`, the Commission Eligibility Exception — has a DIFFERENT subject.
> `NF-24`'s own Subject row is explicit: *"One determination — one (CP claim × booking) eligibility
> outcome."* That is `PO-P10` **level 6**, and a Booking is a precondition of it existing at all.**
>
> **The two are therefore not the same mechanism seen twice. They are two mechanisms at two decision points,
> and the series has modelled only one of them.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-38` — the conclusion rests on THREE independent supports, and they are listed
> so that it is checkable rather than asserted. Two of the three are the owner's own words.**
>
> | # | Support | What it establishes |
> |---|---|---|
> | **1** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a`'s own words** — *"the normal CP attribution/clash decision"* | The override's target is named explicitly, and *attribution/clash* is not *eligibility* in any register — the architect's or the owner's |
> | **2** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2·c`'s own ordering** — *"attribution/clash decision → any Site Head override → Booking → commission eligibility"* | **The override sits UPSTREAM of the Booking.** `NF-28`'s conjuncts (ii) and (iii) are both DOWNSTREAM of the Booking. **A mechanism placed before the Booking cannot be the mechanism that excepts a determination which requires one** — `PF-35` |
> | **3** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` level 7** — *"Commission Override — an authorized action"* — enumerated as a level of its own, **and level 5 is Attribution** | The owner's own seven-level list already treats a commission-layer override as a distinct thing. **`PO-Q1` establishes an override at level 5. The list does not have one there** → `X-24`, `A-38`(a) |
>
> **Support 2 is the decisive one, and it is decisive because of WHERE it comes from.** ⟦ARCHITECT ANALYSIS⟧
> **`PO-Q1` and `PO-Q2` were answered separately, to two different registered items, and `PO-Q2` corroborates
> `PO-Q1`'s decision point without being asked to. This makes [§3.0](#30-the-headline-finding-two-override-layers-not-one)
> a READING OF THE SOURCES rather than an architect's inference — which matters, because an architect's
> inference at this point would be an architect deciding where an override belongs, and ⟦SOURCE⟧ §88 places
> that squarely with the owner.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-39` — the negative half of the finding, stated plainly because it is the part
> that creates work.**
>
> **[§2.1](#21-what-attributionclash-decision-and-commission-eligibility-formally-name)'s final row records
> the result of the search: *"Existing override artefact: NONE. The series has never modelled one."*** That
> is not an oversight in AD-01J … AD-01P. **Until `PO-Q1`, no source said an attribution determination could
> be overridden at all.** ⟦SOURCE⟧ **§11** says only that *"builder-side authorized leadership resolves
> attribution"* — a rule about who DECIDES, not about who may decide AGAIN.
>
> **Consequence, and it is a contradiction rather than a gap.** AD-01P [§3.13](./03p-cp-registration-attribution-basis-decision.md)
> concluded, as a finding, that **"`PO-P10`'s seven levels map onto the architecture's existing six WITHOUT
> A SINGLE ADDITION,"** placing level 7 at *"Layer 3½ — the exception"* and level 5 at *"Layer 2 —
> attribution."* **That mapping is now incomplete in the same place the owner's list is: there is no Layer
> 2½.** → **`X-23`**, **`A-36`**.

> ⟦ARCHITECT ANALYSIS⟧ **`PF-40` — what does NOT follow, stated immediately, because the cheapest wrong
> reading of `PO-Q1` is that it replaces `NF-24`.**
>
> **It does not. `PO-N8`/`PO-N9` are UNCHANGED, NOT REPEALED and NOT ABSORBED** — [§1.3](#13-what-these-decisions-do-not-restate-and-is-therefore-unchanged)
> records this and here is the reasoning behind that row:
>
> 1. **`PO-Q2·c` does not show an eligibility-level override position — but `PF-34(2)` holds that an omission
>    in a clause introduced by *"for example"* is not an exclusion, and a fortiori is not a repeal.** The
>    clause is illustrative of a requirement, not an inventory of mechanisms.
> 2. **`PO-P10` level 7 independently names *"Commission Override"* as a level of its own, and `PO-P10` is
>    UNCHANGED as a prohibition** ([§1.3](#13-what-these-decisions-do-not-restate-and-is-therefore-unchanged)).
> 3. **The two mechanisms are not substitutable in either direction, and `K-9`/`K-10` are why.** An
>    attribution-level override decides **WHO**; an eligibility-level exception decides **WHETHER THIS ONE IS
>    PAYABLE.** ⟦SETTLED⟧ **`K-10`: an internal claimant can WIN an attribution contest and generate NO §32
>    entitlement at all.** **A CP who wins an attribution override and holds no registration containing the
>    booking date is attributed and NOT eligible, and no amount of overriding at level 5 changes that** —
>    [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility).
>
> **So the architecture now needs BOTH, and they must never be one artefact, one permission or one record.**
> **That both-ness is itself a new interaction the sources do not describe** → **`AC-27`**.

**The thesis, stated once in plain language.**

> ⟦ARCHITECT ANALYSIS⟧ **There are now — or need to be — TWO override-shaped mechanisms in the CP
> architecture, at two different decision points, with two different subjects, two different preconditions
> and two different permissions:**
>
> | | **The eligibility-level exception** | **The attribution-level override** |
> |---|---|---|
> | **`PO-P10` level** | **6 → the exception at 7** | **5** |
> | **Subject** | One **(CP claim × booking)** eligibility outcome | One **attribution/clash decision on one Inquiry** |
> | **Requires a Booking** | **YES. Structurally** | **NO. Routinely there is none** |
> | **Source** | ⟦PRODUCT-OWNER DECISION⟧ `PO-N8`/`PO-N9` | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1` |
> | **Artefact** | **`NF-24`** — AD-01N §H.2, RECOMMENDED, **NOT APPROVED** | **`Q-OV`** — recommended below, **NOT APPROVED** |
> | **Status in the series** | Modelled since AD-01N | **Modelled for the first time here** |
>
> **`NF-24` is unchanged and unrepealed. `Q-OV` is new. Neither reaches the other's decision.**

---

## 3.1 Determination 1 — the necessity test run in full

> ⟦ARCHITECT ANALYSIS⟧ **`PF-41` — the test AD-01I `I-9` set, AD-01N passed for the first time, AD-01O
> re-ran against a `Visit`/`Revisit` entity, and AD-01P re-ran against five candidate artefacts. It is run in
> full here rather than asserted, and it is run over a DIFFERENT question from the one AD-01P asked, because
> the owner has already answered half of it.**
>
> **`PO-Q1·c` says: *"The override is a separate appended permanent decision record."*** ⟦PRODUCT-OWNER
> DECISION⟧ **That is the owner stating that an artefact exists, in the owner's own words. The architect is
> therefore NOT free to conclude *"nothing is added."*** **The question the test can still answer is
> narrower and is the one asked below: CAN ANY EXISTING ARTEFACT CARRY IT, and if not, what is the minimum
> shape of the separate one the owner has required?**

**Step 1 — what `PO-Q1` requires the system to be able to answer, fact by fact.**

| Fact | Existing home | Established by | New? |
|---|---|---|---|
| That an attribution/clash decision was made, and what it decided | The **appended §11 resolution** over the Inquiry's claim set | ⟦SOURCE⟧ **§11**; AD-01 **§D.4**; `K-17`; AD-01P §3.12 link 3 | **No** |
| Which Inquiry it decided | The **Inquiry** | `K-18`, `C-VII` | **No** |
| Which claims were in contention | The Inquiry's **attribution claim set**, append-only | `K-17`, `K-52`, `K-12` | **No** |
| That an authorized person decided DIFFERENTLY about that decision | **NOTHING.** The series has no artefact at this decision point | `PF-39`; [§2.1](#21-what-attributionclash-decision-and-commission-eligibility-formally-name) final row | **YES** |
| The reason, the supporting evidence, the actor, the scope and the time of that act | **NOTHING at this layer.** `NF-24` carries the analogous facts at the ELIGIBILITY layer only | `NF-24`; `NF-27` event 4 | **YES** |

**Step 2 — the candidate existing artefacts, each tested and each failing.**

| # | Candidate | Verdict | Why |
|---|---|---|---|
| **(a)** | **`NF-24` itself, with its Subject row widened to admit an attribution/clash decision** | **FAILS** | **`NF-24`'s subject is a PAIR — one (CP claim × booking).** An attribution/clash decision routinely exists with **no Booking and may never acquire one** ([§2.1](#21-what-attributionclash-decision-and-commission-eligibility-formally-name), row 7). A widened `NF-24` would have a subject that is sometimes a pair and sometimes a single, which is not a determinate subject at all — **and it would put `PO-P10` levels 5 and 6 into one artefact, which `PO-P10` forbids in terms.** ⟦ARCHITECT ANALYSIS⟧ **This is the same defect `C-XII` guards against in the correction direction, arriving from the other side.** |
| **(b)** | **A further appended §11 resolution on the same Inquiry — i.e. record the override as another ordinary adjudication** | **FAILS** | **It is mechanically available and semantically wrong.** `L-25` requires a management-created fact to be **visibly distinguishable** from one produced in the ordinary course; folding the override into the ordinary §11 resolution population destroys exactly that distinction, makes `C-XVIII` unenforceable, and makes *"how often is leadership overriding its own adjudications?"* unanswerable after the fact. **And `PO-Q1·c` says *"a separate … record"* in the owner's own words.** |
| **(c)** | **A new attribution CLAIM, minted to express the override's outcome** | **FAILS, and is incoherent** | A claim asserts *"this party produced this Inquiry"* and is **adjudicable under §11** (`C-V`, `K-18`, `PO-P4`). **An override expressed as a claim would itself be subject to the adjudication it is overriding.** It also conflates `PO-P10` levels 4/5 with the decision ABOUT level 5. **`K-17`'s append-only claim set is not a decision log.** |
| **(d)** | **A field, flag, state or outcome marker written onto the resolved claim, the claim set, or the Inquiry** | **FAILS, and is FORBIDDEN** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·d` forbids mutating the inquiry attribution and the clash records.** `K-17`: origination facts immutable, claim set **never overwritten.** AD-01 **§D.4**: *"claims are never overwritten by a later claim."* → **`C-XVII`** |
| **(e)** | **The `Q6` correction mechanism** | **FAILS, and is FORBIDDEN** | **`C-XII`.** Fully worked at [§3.2](#32-determination-2--correction-versus-override-preserved-exactly). |
| **(f)** | **A field, flag or marker on the `CP Project Registration`** | **FAILS, and is FORBIDDEN twice** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·d`'s first prohibition.** ⟦ARCHITECT RECOMMENDATION⟧ **`C-XV`(3)**: neither the minting result nor the eligibility result may be stored on the registration, and AD-01N §C.4 holds that the registration *"has no states"* at all. → **`C-XVII`(3)** |

> ⟦ARCHITECT RECOMMENDATION — `Q-OV`, the Attribution/Clash Override⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88**
> MUST-ASK: canonical entities, relationships, authorization rules, CP commission logic, audit requirements.
> **No schema, table, column, index, type, screen, workflow, approval step or gate is proposed, implied or
> derivable** — AD-01A **§8.5**.)*
>
> **`Q-OV` is a separate, appended, immutable OVERRIDE record whose subject is ONE attribution/clash
> decision on ONE Inquiry. It is never a field on the registration, never a field on the Inquiry, never a
> field on any claim, never a claim, never a correction, and never an edit to anything.**
>
> **The conclusion the necessity test actually supports, stated exactly:**
>
> 1. **`Q-OV` is NOT a generalisation of `NF-24`.** `NF-24`'s **subject** cannot be generalised without
>    destroying its determinacy (candidate (a)), and `NF-24`'s **direction**, **per-booking scope**,
>    **registration-date assertion** and **lock-in assertion** rows are all statements about the eligibility
>    layer that have no meaning at the attribution layer.
> 2. **`Q-OV` IS a STRUCTURAL SIBLING of `NF-24` at a different decision point, and the thing the two
>    genuinely share is `NF-25`'s SHAPE, reused in its entirety** — *"the exception is an additional INPUT to
>    the authorization, never a mutation of any input to it; the authorization reads the join of
>    (determination, any exception on it)."* [§2.3](#23-the-decisions-these-two-answers-have-to-live-inside)
>    records `NF-25` as **GENERALISED one layer up**, and this is that generalisation:
>    **the reader of an attribution outcome reads the JOIN of (the §11 decision, any override on it), and
>    never a §11 decision that has been altered.** → [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility)
> 3. ⟦ARCHITECT ANALYSIS⟧ **The series' no-new-artefact record is NOT extended by this document, and that is
>    reported as a result rather than avoided.** AD-01I `I-9`'s standard was met for the eighth consecutive
>    document at AD-01P. **It is not met here.** **But the artefact is the OWNER's, required by `PO-Q1·c`'s
>    own words, and not the architect's proposal** — which is the same posture AD-01N was in when the
>    necessity test passed for the first time in the series over the `CP Project Registration`. **`Q-OV` is
>    the SECOND artefact the test admits in eighteen documents, and the FIRST admitted by the owner's own
>    words rather than by an architect's derivation.**
> 4. **What `Q-OV` explicitly does NOT do, stated in `NF-25`'s own form and for the same reason:**
>    **it does not create an attribution claim, does not create or move a `CP Project Registration`, does not
>    satisfy the §32 milestone, does not except any conjunct of `NF-28`, and does not substitute for either
>    half of `K-48`.** ⟦SETTLED⟧ **`K-9`.** **An override on an Inquiry whose CP holds no registration
>    containing the booking date, or whose transaction has not reached its milestone, still yields no
>    payment.**

---

## 3.2 Determination 2 — correction versus override, preserved exactly

> ⟦ARCHITECT ANALYSIS⟧ **`PF-42` — the distinction AD-01N drew at its §H.1 and stated as `C-XII` is applied
> to `Q-OV` without being weakened, and `L-21`'s template is used for the third time in the series.
> [§2.2](#22-the-two-override-shaped-mechanisms-the-series-already-has)'s table is the input; nothing in it
> is re-derived.**

**Why `PO-Q1`'s override is an OVERRIDE.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a` grants the power over *"the NORMAL CP attribution/clash decision."***
> ⟦ARCHITECT ANALYSIS⟧ **The word *normal* is doing work and is read literally: the decision being overridden
> is one that was properly made, by the right authority, under the rule in force — ⟦SOURCE⟧ **§11**'s
> *"builder-side authorized leadership resolves attribution."* **`PO-Q1` does not say the §11 adjudication
> was wrong, mis-recorded, or made on bad data. It says an authorized person may decide differently anyway.**
>
> **That is [§2.2](#22-the-two-override-shaped-mechanisms-the-series-already-has)'s override column
> verbatim: *"This was true, and we are deciding differently anyway."*** **And `PO-Q1·d`'s three prohibitions
> confirm it from the other direction — a mechanism that leaves the original registration, the original
> inquiry attribution and the original clash records standing is a mechanism that is not disputing their
> truth.**

**Why it is NEVER a correction.**

| | If it were routed through `Q6` | What actually follows from `PO-Q1` |
|---|---|---|
| **What the record would assert** | *"This attribution/clash decision was never true."* — AD-01C §3.7, *"restate what was never true"* | **`PO-Q1` asserts nothing of the kind.** The decision was the normal one |
| **Effect on the prior record** | **Deliberately and visibly RESTATES it** — restatement is the *point* of a correction | **`PO-Q1·d`: the original must NOT be mutated.** It stands, unchanged and visible |
| **What would become unanswerable** | *"How often does leadership override its own adjudications?"* — because every override would read as a data defect | **That question stays answerable, which is what `A-43`'s distinguishability requirement protects** |
| **Whose act it is** | A data-quality act | ⟦PRODUCT-OWNER DECISION⟧ **A COMMERCIAL DECISION by an authorized individual** — `PO-Q1·c`'s *"permanent decision record"* |

> ⟦ARCHITECT ANALYSIS⟧ **`L-21`'s template, applied a third time and stated in its own words: *"A merge
> asserts the two records are the same engagement; a citation asserts they are different … They must never
> be recorded by the same artefact."*** **Two artefacts that are MECHANICALLY IDENTICAL — both appended,
> both audited, both authorized, both permanent — and SEMANTICALLY OPPOSITE must be kept apart by
> construction, because nothing in their mechanics will keep them apart.** **AD-01N `X-7` recorded exactly
> this for the eligibility layer and resolved it as a PROHIBITION rather than a contradiction. The same
> prohibition is required here for the same reason.**

> ⟦ARCHITECT ANALYSIS⟧ **`C-XII` APPLIES to `Q-OV` — and it is UNDER-INCLUSIVE in its SUBJECT, which is a
> defect in `C-XII`'s wording and not in its principle.**
>
> **`C-XII` as AD-01N states it: *"A Site Head override must NEVER be recorded through, routed to, or
> represented by the `Q6` correction mechanism."*** **Read in AD-01N's context, *"a Site Head override"*
> means the eligibility-level exception — that is the only override AD-01N models.** **Read literally, it
> already covers `Q-OV`.** ⟦ARCHITECT ANALYSIS⟧ **A constraint whose reach depends on which of those two
> readings a later implementer takes is not a control.** **`C-XII` must be amended to state its subject as
> ANY override at ANY decision layer** → **`A-41`.**
>
> **`Q6` is NOT reopened, NOT narrowed and NOT ratified by anything above. `T-6`, `T-7` and `T-8` are NOT
> resolved.** ⟦SETTLED⟧ **AD-01C `Q6` is fixed input for a sixth consecutive document, and `A-41` is a
> statement about `C-XII`'s scope, not about `Q6`'s.**

---

## 3.3 Determination 3 — the override record's minimum shape: reason and evidence

> ⟦ARCHITECT ANALYSIS⟧ **`PF-43` — `PO-Q1·b` supplies TWO mandatory inputs. They are stated below as a
> MINIMUM-FIELDS DESCRIPTION in business language and nothing more.** **No schema, table, column, field
> name, data type, length, nullability, cardinality, vocabulary, master value or storage decision is
> proposed, implied or derivable from anything in this section.** ⟦SOURCE⟧ **R4**, **R6**, **§88**; AD-01A
> **§8.5**.

| # | What the record must carry | Source | `NF-24` precedent at the ELIGIBILITY layer |
|---|---|---|---|
| **1** | **The SUBJECT — the one attribution/clash decision being overridden**, identified determinately, and carried **by reference AND by embedded values** (that decision's inputs and its outcome **as they stood**) so the original adjudication is provable from the override record alone, years later | `PO-Q1·a`; ⟦SOURCE⟧ **R6**: *"joining to live tables to render history is wrong"* | **YES — `NF-24`'s Subject and Reproducibility rows, exactly this shape** |
| **2** | **A MANDATORY REASON** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·b`(1)** | **YES — `NF-24`'s Reason row: *"mandatory free-text justification."*** **Same approach adopted: if a structured reason vocabulary is also wanted it is a MASTER, never an enum (⟦SOURCE⟧ R4), and NO VALUE IS PROPOSED HERE** (`N-4`'s discipline, honoured) |
| **3** | **MANDATORY SUPPORTING REMARKS / EVIDENCE** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·b`(2)** | **NO PRECEDENT. `NF-24` has no counterpart row, and `PO-N9`'s nine requirements do not include one.** → **`AC-28`** |
| **4** | **The OUTCOME — what the override decides** | `PO-Q1·a` | **`NF-24` states a DIRECTION (*ineligible → eligible-as-exception*) because `PO-N8` states one. `PO-Q1` states none.** **What outcomes are admissible is NOT decided here** → **`AC-30`** |
| **5** | **The ACTOR — identity PLUS the role and scope under which they acted, denormalised as at that moment** | ⟦SOURCE⟧ **R6**, **§54**; `NF-26` | **YES — `NF-24`'s Approver row verbatim.** A later role change must not rewrite who decided what |
| **6** | **The TIME — server-authoritative** | ⟦SOURCE⟧ **§18**, **§54** | **YES — `NF-24`'s Time row** |
| **7** | **MUTABILITY — append-only; never edited, never deleted** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·c`'s *"permanent"***; ⟦SOURCE⟧ **R6** | **YES — `NF-24`'s Mutability row** |

> ⟦ARCHITECT ANALYSIS⟧ **The cross-check against `NF-24` produces one asymmetry, and it is reported rather
> than harmonised away.**
>
> **Five of the seven minimum facts have an exact `NF-24` precedent. Two do not.**
>
> - **Row 3 is the live one.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·b` requires evidence at the ATTRIBUTION
>   layer. ⟦PRODUCT-OWNER DECISION⟧ `PO-N9` requires only a reason at the ELIGIBILITY layer.** **Both are the
>   owner's own words and they differ.** ⟦ARCHITECT ANALYSIS⟧ **The architect must not resolve that by
>   levelling `NF-24` up or `Q-OV` down. Either the asymmetry is deliberate — an attribution override moves
>   a commercial relationship and warrants a heavier bar than an eligibility exception — or `PO-N9` simply
>   predates the requirement. Only the owner can say which.** → **`AC-28`(a)**.
> - **And *"supporting remarks/evidence"* is itself two readings: a second mandatory NARRATIVE input, or a
>   narrative input PLUS an attached artefact.** **The second reading implies a capability — attachment
>   capture, retention and access — that no source in this series has described, and it is not invented
>   here.** → **`AC-28`(b)**.
> - **Row 4 is the second asymmetry and is carried to `AC-30`** rather than answered, because an
>   architect choosing the admissible outcomes of a commercial override would be inventing a business rule.

---

## 3.4 Determination 4 — who may perform it: a permission, never a role name

> ⟦ARCHITECT ANALYSIS⟧ **`PF-44` — `NF-26`'s template is applied WITHOUT AMENDMENT IN PRINCIPLE.
> [§2.3](#23-the-decisions-these-two-answers-have-to-live-inside) records it as adopted in full. What it
> needs is not a change of principle but a SECOND INSTANCE, and `NF-26` is written about one permission.**
> → **`A-40`**.
>
> ⟦SOURCE⟧ **R2**, verbatim: *"Roles are tenant-scoped rows, not an enum … **Application logic never
> branches on a role name.** … Any logic of the form `if (role.key === 'executive')` is disabled by a
> cosmetic edit."* ⟦SOURCE⟧ **§03** lists *"Project Head / Site Head"* among builder-side users — **that is
> a default role LABEL, not a permission. `PO-Q1·a`'s words *"Site Head"* are read the same way `PO-N8`'s
> were: as the owner naming the default holder, not as a licence to branch on a name.**

| # | Requirement for the attribution/clash override permission | Basis |
|---|---|---|
| **1** | **It is a PERMISSION in the fixed vocabulary, not a role name.** Any tenant-defined role may hold it; the default role shipped as *Site Head* holds it by default; a tenant renaming or replacing that role must not silently drop or silently grant the control | ⟦SOURCE⟧ **R2**; `NF-26(1)` |
| **2** | **It is a SECOND, DISTINCT permission — NOT the commission-eligibility-exception permission, and NOT any general attribution, adjudication or lead-management permission.** ⟦ARCHITECT ANALYSIS⟧ **A single permission spanning both would authorize at `PO-P10` levels 5 AND 6 with one grant, which is exactly the conflation `PO-P10` exists to forbid.** Holding either must be an explicit, separately reviewable grant | ⟦SOURCE⟧ **R2**, **§88**; `PO-P10`; `NF-26(2)` |
| **3** | **It is SCOPE-BOUND to the Project — evaluated against the INQUIRY's Project.** ⟦ARCHITECT ANALYSIS⟧ **Deliberately the Inquiry's and not the registration's:** an override's subject is an attribution decision on an Inquiry, `C-VII` gives every claim the Inquiry's project, and **an Inquiry always has one whereas whether a registration must is `AA-2` — so this scope rule is `AA-2`-INDEPENDENT.** A holder scoped to Project A must not override a Project B attribution | ⟦SOURCE⟧ **§08**, **R12**; `C-VII`; `NF-26(3)` |
| **4** | **Server-side enforcement only.** ⟦SOURCE⟧ **§40**: *"Never rely on a greyed-out button as the actual security control."* ⟦SOURCE⟧ **§50**: *"server-side authorization must verify that the approver actually has authority."* | ⟦SOURCE⟧ **§40**, **§50**; `NF-26(4)` |
| **5** | **Separation of duties.** The override must be distinct from Accounts' §32 review, from payout authorization, **and from the eligibility-exception approval of `NF-24`.** **The exact separation matrix is `M-9`'s and `M-3`'s and is NOT designed here**, and whether one individual may perform BOTH overrides on one commercial outcome is → **`AC-27`** | ⟦SOURCE⟧ consolidated **§22**; `NF-26(5)` |
| **6** | **Self-interest controls are required and are NOT designed here.** Whether the holder may sit in the benefiting reporting line, may be the CP's relationship manager, or may override in favour of a claim they themselves filed — **not stated by any source** | ⟦SOURCE⟧ **§11**, **§22**; `NF-26(6)` → **`AC-13`**, enlarged |
| **7** | **Stronger-authentication gating is available and is the owner's choice, not the architect's** — ⟦SOURCE⟧ **R2**'s `roles.requires_2fa`, *"strictest wins."* **Whether this permission warrants it is NOT decided here** | ⟦SOURCE⟧ **R2**; `NF-26(7)` |
| **8** | **Tenant isolation applies without exemption** to the decision, the override, the claim set and the Inquiry | ⟦SOURCE⟧ **R1**; `NF-26(8)` |

**The `C-IX` carve-out, and why this stays off the §88 authorization-change path.**

> ⟦ARCHITECT ANALYSIS⟧ **This is the governance question the whole determination turns on, and
> [§2.3](#23-the-decisions-these-two-answers-have-to-live-inside) already records the answer's shape:
> `C-IX`'s carve-out is PRESERVED, not amended.**
>
> **`C-IX` holds that a BINDING SYSTEMIC PRECEDENCE rule between two claims is a ⟦SOURCE⟧ §88 authorization
> change to §11, not a commission setting — and, in AD-01L's own words, that *"a non-binding precedence
> policy that leadership applies is a governance artefact … and `C-IX` does not reach it."***
>
> **`PO-Q1` creates a DISCRETIONARY ACT BY AN AUTHORIZED INDIVIDUAL ON ONE NAMED DECISION. It does not
> create a RULE.** ⟦SOURCE⟧ **§11** already reserves attribution resolution to builder-side authorized
> leadership; `PO-Q1` says a holder of a distinct permission may append a further decision at that same
> layer. **No claim is ranked, no CP is preferred, no ground is weighted, no tiebreak is established and no
> default is set — so §11 requires NO amendment, and `Q0-d` stays off the critical path exactly where AD-01P
> `PF-21` put it.**
>
> ⟦ARCHITECT ANALYSIS⟧ **But the carve-out is a boundary, and a boundary can be crossed by practice rather
> than by design. That is what `C-XVIII` exists to prevent.**

> ⟦ARCHITECT RECOMMENDATION — `C-XVIII`, a constraint and a prohibition⟧ *(RECOMMENDED, SUBJECT TO THE
> PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: authorization
> rules. **Stated as a BUSINESS RULE. No schema, screen, workflow or permission key is proposed.**)*
>
> **`C-XVIII` — An attribution/clash override is a DISCRETIONARY act by an authorized individual upon ONE
> named decision. It is NEVER a rule. It may not be recorded as, generalised into, configured as, defaulted
> to, or applied as a standing precedence, presumption, tiebreak or ranking between two claims, two CPs,
> two grounds or two claim types.**
>
> **Three corollaries, each stated because each is a separate implementation temptation:**
>
> 1. **No standing form.** **A standing or blanket override — *"CP A always wins over CP B on this
>    Project"* — would be a silent systemic precedence rule, which is precisely what `C-IX` says is a §88
>    authorization change to §11.** ⟦ARCHITECT ANALYSIS⟧ **This is the exact analogue of `NF-24`'s Scope
>    row, which refused a standing exception because *"a standing exception would be a silent policy change,
>    which `PO-N9` forbids in substance."***
> 2. **A pattern is not a rule, and must not be allowed to become one by accumulation.** **If leadership
>    finds itself overriding the same way repeatedly, that is evidence the owner should be asked for a
>    precedence rule under `AC-15`/`AC-20` — it is NOT authority to encode one.** `Q-OV` is not a route to
>    `AC-15`'s answer and must never be used as one → [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach).
> 3. **`C-IX`'s carve-out is preserved and NOT widened.** **A non-binding precedence POLICY that leadership
>    applies remains a governance artefact outside `C-IX`'s reach, exactly as AD-01L stated. `C-XVIII` adds
>    only that `Q-OV` may not be the system's representation of such a policy** — because a policy
>    represented in the system, applied by the system, is no longer non-binding.

---

## 3.5 Determination 5 — immutability and what the override must never touch

> ⟦ARCHITECT ANALYSIS⟧ **`PF-45` — `PO-Q1·d` states three prohibitions. Two of the three are ALREADY TRUE of
> the architecture before `Q-OV` exists, and saying so is not a way of skipping them: it means the owner's
> prohibition and the architecture's existing discipline agree, which is the strongest form of the result.**

| `PO-Q1·d` prohibition | Already true? | Why |
|---|---|---|
| **Must NOT mutate the original CP REGISTRATION** | **ALREADY TRUE** | AD-01N §D.1/§D.2: the registration date is fixed at creation and immutable; §C.4: the registration *"has no states"*; `OF-5`: liveness is derived and **nothing is ever written to a registration**; `C-XV`(3): no test result may be stored on it. **`PO-N9` already says an override does not change the registration date — at the OTHER layer, and `PO-Q1·d` now says it at THIS one** |
| **Must NOT mutate the INQUIRY ATTRIBUTION** | **ALREADY TRUE** | `K-17`: origination facts immutable, the claim set **append-only and never overwritten**; AD-01 **§D.4**: *"claims are never overwritten by a later claim"*; `K-18`: the claim attaches to the Inquiry and to nothing else. **[§2.3](#23-the-decisions-these-two-answers-have-to-live-inside) records `K-17` as *"what makes `PO-Q1·d`'s third prohibition already true of the claim set before the override exists"*** |
| **Must NOT mutate the CLASH RECORDS** | **PARTLY NEW** | The claim set is protected by `K-17`. **The §11 RESOLUTION itself is protected only by AD-01 §D.4's appended-not-overwritten discipline and by ⟦SOURCE⟧ R6 — neither of which was written with a later authorized re-decision in view.** ⟦ARCHITECT ANALYSIS⟧ **This is the limb that needs stating, because it is the one an implementation would be tempted to breach: the cheapest way to make an override *work* is to update the decision's outcome in place** |

> ⟦ARCHITECT RECOMMENDATION — `C-XVII`, a constraint and a prohibition⟧ *(RECOMMENDED, SUBJECT TO THE
> PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: source-of-truth
> rules, audit requirements. **Stated as a BUSINESS RULE. No schema, table, column or type is proposed.**)*
>
> **`C-XVII` — An attribution/clash override is APPENDED and never applied. Specifically:**
>
> 1. **It does not mutate, move, annotate, mark, re-date or write any state whatsoever to the `CP Project
>    Registration`** — ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1·d`, and the registration remains stateless.
> 2. **It does not mutate, hide, supersede, replace, re-compute or re-classify the original attribution
>    claims, the original claim set, or the original §11 attribution/clash decision. All of them stand,
>    unchanged, permanently retrievable, and VISIBLE BESIDE the override** — ⟦PRODUCT-OWNER DECISION⟧
>    `PO-Q1·d`; `K-17`; AD-01 §D.4; and **the exact analogue of `NF-27` read property 1 at this layer**
>    → **`A-37`**.
> 3. **No override result, and no marker that an override exists, may be stored on the `CP Project
>    Registration`.** ⟦ARCHITECT ANALYSIS⟧ **This extends `C-XV`(3) in spirit rather than in letter:
>    `C-XV`(3) named the minting result and the eligibility result because those were the only two results
>    that existed when it was written. There is now a third, and the reason is identical — a registration
>    that acquires state stops being the immutable temporal fact `C-XI` requires it to be.**
> 4. **The override record itself is append-only: never edited, never deleted, never re-stated.** **Whether
>    a LATER appended act may supersede or revoke it is NOT decided here** → **`AC-12`**, enlarged.

> ⟦ARCHITECT ANALYSIS⟧ **One entailment for `C-XIII`, and it is the second row that prohibition list has
> acquired for exactly the reason `A-27`(ii) gave it its first.**
>
> **`C-XIII` holds that only an explicit registration act creates a registration, and carries a prohibition
> list of events that do not.** **An attribution/clash override is a new event of precisely the kind that
> list exists to catch: it names a CP, names a client, names a Project and carries a date — four of the
> registration's five identifying facts — and it is created by an authorized builder-side actor.**
> **Reconstructing a registration relationship from an override would produce a money-bearing commercial
> record with no registration act.** **`C-XIII`'s list must gain the row: *an attribution/clash override
> creates no registration, moves no registration date, and is never evidence that a registration
> relationship exists.*** → **`A-42`. AD-01O is NOT edited.**

**Visible distinguishability — why `L-25` forces an amendment rather than a preference.**

> ⟦ARCHITECT ANALYSIS⟧ **`L-25` requires a system- or management-created fact to be VISIBLY DISTINGUISHABLE
> from one produced in the ordinary course. AD-01N `NF-27` read property 4 applies it to an
> exception-derived ELIGIBILITY. AD-01P §3.12 read property 4 applies it to a MINTED CLAIM. Neither reaches
> an override-derived ATTRIBUTION, because neither existed when they were written.**
>
> **Three independent sources require it at this layer, which is why this is a requirement and not a
> reporting nicety:**
>
> 1. **`L-25` itself** — an override is the paradigm management-created fact.
> 2. ⟦SOURCE⟧ **§54**'s *system/human origin* clause — the same clause AD-01P recorded as doing material
>    work for the first time in the series.
> 3. **`C-XVIII`(2)** — *a pattern is not a rule.* **If override-derived attributions cannot be separated
>    from ordinarily-adjudicated ones, the pattern is unobservable and `C-XVIII` is unenforceable.**
>
> **And it has a reporting consequence that must not be absorbed into an existing number.** **AD-01P `A-35`
> gave CP conversion reporting THREE distinguishable negative outcomes where AD-01N had two. There is now a
> FOURTH:**
>
> | Outcome | Meaning |
> |---|---|
> | *Converted and not attributed* | No claim naming the CP was resolved in their favour |
> | *Converted but time-barred* | The claim won; `NF-28` conjunct (iii) failed |
> | *Converted, grounded, and LOST at §11* | A registration-grounded claim was minted and adjudicated against the CP — AD-01P, `A-35` |
> | **NEW — *converted, WON at §11, and OVERRIDDEN*** | **The CP won the ordinary adjudication and an authorized holder decided differently** |
>
> **The four are commercially different and must never be one number.** ⟦SOURCE⟧ **R4**: reports branch on
> semantics, never on tenant-renameable labels. ⟦SETTLED⟧ **`J-48`'s single denominator is untouched — an
> override adds neither a claim nor an Inquiry.** ⟦SETTLED⟧ **No CP scorecard, producer-evaluation product
> or ranking of any kind is authorised by anything above** (AD-01A §3.3, upheld). → **`A-43`.**

---

## 3.6 Determination 6 — downstream effect on attribution, on a claim's win, and on eligibility

> ⟦ARCHITECT ANALYSIS⟧ **`PF-46` — two questions that look like one and are not.
> [§2.3](#23-the-decisions-these-two-answers-have-to-live-inside) already records the conclusion in one
> clause — *"`PO-Q1` touches conjunct (i)'s ANSWER-BEARER and no conjunct's TEST"* — and this section is the
> working behind it.**

**Question 1 — does an override change WHO the resolved attribution names? YES, and by a determinate route.**

| Step | What happens | Authority |
|---|---|---|
| **1** | The Inquiry's claim set is what it is. **The override adds nothing to it and removes nothing from it** | `K-17`; `K-18`; `PO-Q1·d` |
| **2** | §11 adjudication resolves it. **That resolution stands, unchanged and visible, forever** | ⟦SOURCE⟧ **§11**; AD-01 §D.4; `C-XVII`(2) |
| **3** | An authorized holder appends a `Q-OV` override of that resolution | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1·a`, `PO-Q1·c` |
| **4** | **The ANSWER to *"who produced this Inquiry?"* is thereafter the JOIN of (the §11 resolution, any override of it) — never an altered §11 resolution** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-25`'s shape, generalised one layer up** — [§3.1](#31-determination-1--the-necessity-test-run-in-full)(2) |

> ⟦ARCHITECT ANALYSIS⟧ **Three consequences of reading it as a JOIN rather than as a substitution, each of
> which is a reason the join is the right shape and not merely an available one.**
>
> 1. **`K-18` SURVIVES, and is CONFIRMED for a FOURTH consecutive document.** **Every element of the join —
>    the claim set, the §11 resolution, the override — has one Inquiry as its subject.** **Nothing in the
>    join lives on the Person, on the work record, on the `(CP × client × Project)` triple or on the CP
>    relationship. The attribution claim still attaches to the Inquiry and to nothing else.**
> 2. **`PO-Q1·d` is satisfied structurally rather than by discipline.** **A join cannot mutate its operands.
>    A substitution would have to.** ⟦ARCHITECT ANALYSIS⟧ **This is why AD-01N chose the join at the
>    eligibility layer and it is why the same choice is forced here: the owner's prohibition and the
>    mechanism's shape are the same fact.**
> 3. **The answer-bearer named in [§2.1](#21-what-attributionclash-decision-and-commission-eligibility-formally-name)
>    changes, and only it.** **It was *"the resolved attribution claim on that Inquiry"* (`K-18`, AD-01P
>    §3.13 Layer 2). It becomes *"the resolved attribution claim as §11 decided it, joined to any override of
>    that decision."*** **That is a change to `PO-P10` level 5's answer-bearer and to nothing else in the
>    architecture.**

**Question 2 — does an override automatically change commission eligibility? NO, and this is the finding most
likely to be read the wrong way round.**

> ⟦SETTLED⟧ **`K-48` as extended by `NF-28` is a THREE-CONJUNCT JOIN, adopted and UNCHANGED
> ([§2.3](#23-the-decisions-these-two-answers-have-to-live-inside)). Each conjunct is re-run against
> `PO-Q1`:**
>
> | | Conjunct | Its TEST | Effect of `PO-Q1` |
> |---|---|---|---|
> | **(i)** | **WHO** — the resolved attribution claim on the converting Inquiry | Unchanged | **Its ANSWER-BEARER becomes a join. The TEST — *is there a resolved attribution naming this CP on this Inquiry?* — is word-for-word the same question** |
> | **(ii)** | **WHETHER AND WHEN** — the surviving transaction identity and its §32 milestone | Unchanged | **NO EFFECT WHATSOEVER.** The override is upstream of the Booking (`PF-35`) and touches no transaction fact |
> | **(iii)** | **STILL WITHIN PROTECTION** — the registration containing the booking date, or an `NF-24` exception | Unchanged | **NO EFFECT.** `PO-Q1·d` forbids touching the registration; `C-XVII`(1) and `C-XVII`(3) make that structural. **`AC-22` is neither answered nor worsened** |
>
> **`NF-28` is therefore UNAMENDED by this document. AD-01N's conjunct structure survives a second round of
> owner input untouched, which is the same result AD-01P reported and obtained for a different reason.**

> ⟦ARCHITECT ANALYSIS⟧ **The concrete consequence, worked, because it is money-bearing and counter-intuitive
> and the owner should meet it here rather than discover it in production.**
>
> **Configuration: §11 adjudicates an Inquiry in favour of CP A. An authorized holder overrides in favour of
> CP B. The Inquiry converts to a Booking.**
>
> | | CP A | CP B |
> |---|---|---|
> | **Conjunct (i)** | **FAILS.** The join no longer names A | **SATISFIED.** The join names B |
> | **Conjunct (ii)** | Irrelevant — (i) already failed | **Depends on the Booking alone.** Untouched by the override |
> | **Conjunct (iii)** | Irrelevant | **Depends on whether CP B holds a registration whose window contains the booking date.** **B MAY HOLD NONE.** The override conferred no registration (`C-XVII`(1), `A-42`) and created no protection |
> | **Outcome** | **Attributed by §11, and paid nothing** | **Attributed by override, and paid nothing if (ii) or (iii) fails** |
>
> ⟦SETTLED⟧ **`K-9`: winning attribution and being paid are different outcomes. `K-10`: a claimant can WIN an
> attribution contest and generate NO §32 entitlement at all.** **An attribution override can therefore
> produce a winner who is owed nothing, and the owner should ratify it knowing that.**
>
> **Two things follow, and neither is decided here:**
>
> - **If the owner intends an attribution override to carry eligibility with it, that requires an `NF-24`
>   exception AS WELL — a separate act, at a separate layer, under a separate permission.** **Whether one
>   individual may perform both on one commercial outcome, and whether the two acts must be separately
>   reasoned and separately evidenced, is** → **`AC-27`.**
> - **Where the minting gate failed and NO claim exists at all, there is no attribution/clash decision for
>   `Q-OV` to override**, exactly as AD-01P `PF-13(2)` found there is nothing for an `NF-24` exception to act
>   on. **A discretionary pay-anyway route in that case is `AC-2`, which is UNCHANGED and explicitly NOT
>   relieved by `PO-Q1`** → [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach).

---

## 3.7 Determination 7 — `AC-14` revisited: do `PO-Q1`/`PO-Q2` answer it? They do not

> ⟦ARCHITECT ANALYSIS⟧ **`PF-47` — this section was written by CHECKING and not by assuming, and the check
> is shown rather than its result asserted. AD-01P placed `AC-14` at the top of its register and took it
> alone in its own subsection; a document that arrives with two owner answers and does not test them against
> the register's top item has not done the reconciliation.**

**What `AC-14` asks** — AD-01P §5.3, restated and **NOT re-derived**:

> **Does a `CP Project Registration` whose Inquiry was closed on Dimension A's INVALID side — wrong number,
> fabricated entry, non-opportunity — retain its protection window; and, now that `PO-P1` has been granted,
> does it retain its power to GROUND an attribution claim on a later Inquiry?**

**The check, run clause by clause over both answers.**

| Clause | Does it bear on what GROUNDS `P-G`'s test? | Why |
|---|---|---|
| **`PO-Q1·a`** — the grant | **NO** | It grants a power over **the output of §11 adjudication.** `AC-14` asks what may reach §11 adjudication in the first place. **A rule about who may re-decide an outcome says nothing about which inputs produce the outcome** |
| **`PO-Q1·b`** — reason and evidence | **NO** | Requirements on an override record. **They do not appear among `P-G` step 3's operands and could not** |
| **`PO-Q1·c`** — the separate appended record | **NO** | An artefact requirement |
| **`PO-Q1·d`** — the three prohibitions | **NO — and it points AWAY from `AC-14`.** | It forbids the override touching the registration. **`AC-14` asks whether the registration's own grounding power is affected by a closure elsewhere. `PO-Q1·d` is about what an OVERRIDE may do to a registration, not about what a CLOSURE does to one** |
| **`PO-Q2·a`/`b`** — reconstructability from immutable linked records and audit events | **NO** | A requirement that whatever happened be **traceable**. ⟦ARCHITECT ANALYSIS⟧ **Being able to reconstruct a decision is orthogonal to whether the decision should have been available. `PO-Q2` makes a fabricated registration's use MORE visible; it does not make it permitted or forbidden** |
| **`PO-Q2·c`** — the twelve-term chain | **NO** | Its second term is *"CP Project Registration"* without qualification, and its sixth is *"registration used as attribution basis."* **It says the chain must be traceable, not which registrations may be in it.** `PF-34(2)`: *"for example"* does not let the architect read a permission into an omission |

> ⟦ARCHITECT ANALYSIS⟧ **Conclusion, stated without softening: `AC-14` is NOT TOUCHED by either answer, in
> either direction, and it is NOT NARROWED. It remains EXACTLY as open as AD-01P left it, and exactly as
> acute.** **`X-5`'s condition — *"the tension resurfaces the moment `B-2` is granted"* — was MET at AD-01P
> and stays met. Nothing here relieves it.**
>
> ⟦SETTLED⟧ **`L-6` and `K-22` are NOT reopened, NOT narrowed and NOT ratified by anything in this document.
> `A-32` — `L-6` must state its own scope — carries forward NAMED AND NOT MADE, and its CONTENT still
> follows from the owner's answer and not from the architect's.**

**The two readings' concrete business consequences, restated ONCE and briefly. The full analysis is AD-01P
§5.3's and is NOT re-derived here.**

| | **Reading (L-6·ground)** | **Reading (L-6·engagement)** |
|---|---|---|
| **`P-G`** | **UNTOUCHED.** The grounding test's operands stay `(CP, client, Project, G)` | **REACHED.** The operand set grows to include the closure classification of prior Inquiries on that work record |
| **`N-4`** (the closure-reason vocabulary) | **STAYS OFF the critical path** | **GOES BACK ON IT** — the dependency the owner's own choice of condition had removed |
| **`AC-1`** | Does not arise | **REVIVED and money-bearing** |
| **`L-13`'s farming control** | **Does NOT operate on `P-G` at all.** Combined with `AC-18`'s unbounded renewability, the hazard is at its highest stated level in the series | **Operates** — `L-13` named `K-22`/`L-6` as the primary control and under this reading it is doing that work |
| **In plain commercial terms** | A registration made on a wrong number still protects the CP and can still ground a claim on a genuine later inquiry from that person | A registration whose inquiry the business recorded as never having been a real opportunity is spent, and cannot ground anything |

> ⟦BUSINESS DECISION REQUIRED — `AC-14`, the question posed back to the Project Owner⟧
>
> **Both readings are recorded at EQUAL STRENGTH. NEITHER is selected, preferred, ranked, hinted at or made
> easier to choose. The architect does not answer it below and does not answer it anywhere.** ⟦SOURCE⟧ Spec
> **Rule 1**, **§88**, **§97**.
>
> > **"A channel partner registers a client for a project. The inquiry that partner brought is later closed
> > as a wrong number, a fabricated entry, or not a real opportunity. That same person genuinely inquires
> > later, while the registration is still inside its window.**
> >
> > **Does that registration still protect the partner, and may it still be used as the basis for their
> > attribution claim on the new inquiry — YES, the closure does not matter; or NO, a registration whose
> > inquiry was closed as never having been a real opportunity is spent and may not be used as an
> > attribution basis?"**
>
> ⟦ARCHITECT ANALYSIS⟧ **This is carried to [§5.3](#53-ac-14-the-question-posed-back-to-the-owner) as the
> TOP-PRIORITY item and to [§6.1](#61-the-gating-list--what-must-be-answered-before-anything-is-built) as
> gate 1. It is NOT a request to ratify or reject `L-6`, and NOT a request to reopen `K-22`.**

---

## 3.8 Determination 8 — `C-XVI`, `P-G` and the Policy-E layers re-tested

> ⟦ARCHITECT ANALYSIS⟧ **`PF-48` — `C-XVI` is AD-01P's central safety constraint, still UNRATIFIED, and a
> new override mechanism is exactly the kind of thing that quietly defeats a constraint of its shape. It is
> re-tested rather than assumed to survive.**

**The test: does `Q-OV` give registration-grounded claims a privileged path?**

> **`C-XVI` as AD-01P states it: *"A claim minted on a registration ground is an ORDINARY attribution claim
> in EVERY respect that bears on its resolution. It may be given NO default win, NO presumption, NO
> tiebreak, NO privileged or abbreviated resolution path, NO differential weight, and NO outcome that
> follows from the mere fact that its ground is a registration."***
>
> | Question | Answer | Why |
> |---|---|---|
> | Is `Q-OV` available only against decisions involving registration-grounded claims? | **NO** | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1·a` says *"the normal CP attribution/clash decision"* **without qualification as to what grounded any claim in it.** [§1.3](#13-what-these-decisions-do-not-restate-and-is-therefore-unchanged) records this: *"the override is available against ANY attribution determination; it is not a privilege attaching to a registration-grounded claim"* |
> | Does `Q-OV` weight, rank or presume in favour of a registration-grounded claim? | **NO** | **`C-XVIII` forbids `Q-OV` ranking or presuming anything at all** |
> | Does `Q-OV` create an abbreviated resolution path for such a claim? | **NO** | It is downstream of §11 adjudication, not a substitute for it. **`PO-P4`'s routing of every minted claim to §11 is untouched** |
>
> **`C-XVI` SURVIVES the introduction of `Q-OV`. It is NOT weakened, NOT narrowed and NOT amended in its
> principle.**

**And it acquires one corollary — worked out rather than assumed.**

> ⟦ARCHITECT ANALYSIS⟧ **`C-XVI`'s three existing corollaries are all directional: they forbid a
> registration-grounded claim being advantaged in the WINNING direction (no default win; losing must be
> reachable; distinguishability is a prerequisite). `Q-OV` opens a direction `C-XVI` was not written
> against — being advantaged by being HARDER TO DISPLACE once it has won.**
>
> **The failure mode, stated concretely because it is the one an implementation would produce by accident:**
> a minted claim wins at §11 and the override mechanism is then made unavailable, or made to require a
> higher bar, against a decision whose winner cited a registration — on the reasoning that *"the registration
> proves it."* **That is a privilege following from the mere fact that the claim's ground is a registration,
> which is `C-XVI`'s own words — reached by a route `C-XVI`'s enumeration does not name.**

> ⟦ARCHITECT RECOMMENDATION — `C-XVI`, FOURTH COROLLARY⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** **`C-XVI` itself is still UNRATIFIED — this corollary is
> ratified with it or not at all.**)*
>
> **4. A registration-grounded claim gets NO SPECIAL IMMUNITY EITHER. An attribution/clash decision is
> equally overridable whatever grounded the winning claim, and the override's requirements — `PO-Q1·b`'s
> reason and evidence, the permission, the audit — are the same in every case. There is no heightened bar for
> overriding a registration-grounded win and no lowered bar for overriding a filed one.**
>
> → **`A-39`. AD-01P is NOT edited.**

**`P-G` re-tested: it acquires one step, and is NOT re-derived or narrowed.**

> ⟦SETTLED⟧ **[§2.3](#23-the-decisions-these-two-answers-have-to-live-inside) adopts `P-G` as AD-01P wrote
> it. Steps 1–5 are untouched: `J-2` originates, the arrival reaches the server-side clash gate, the
> grounding test runs at `G` over `(CP, client, Project, G)` and nothing else, a passing test makes that
> specific record an admissible ground for a claim's citation, and the minted claim is adjudicated under §11
> as an ordinary claim capable of LOSING.**
>
> ⟦ARCHITECT ANALYSIS⟧ **What `PO-Q1` adds is at `P-G`'s END, after step 5's adjudication and before step
> 6's eligibility join: an authorized holder may append an override of step 5's outcome, and step 6
> thereafter reads the join of (step 5's outcome, any override of it).** **`P-G` becomes a SEVEN-step
> pathway. Its operand set is unchanged, its actors at steps 1–5 are unchanged, and no step is rewritten.**
> → **`A-38`(b). AD-01P is NOT edited.**

**The Policy-E layers: a THIRD layer, not a re-expression of the second.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-49` — AD-01P's `A-34` recorded TWO bounded Policy-E layers against AD-01N's
> `NF-30`. The question `PO-Q1` forces is whether it adds a third or is a different expression of the
> second, and it is answered by looking at what each layer IS rather than at what each layer is about.**
>
> | | **Layer 1 — `PO-N8`/`PO-N9`** | **Layer 2 — `PO-P4`** | **`PO-Q1`** |
> |---|---|---|---|
> | **What it is** | A **per-case discretionary exception** to one outcome of a standing rule | A **standing ROUTING rule**: every minted claim goes to §11 adjudication by builder-side authorized leadership | A **per-case discretionary decision** upon one already-made adjudication |
> | **Is there a standing rule?** | **No.** Each case is decided on its own | **Yes. It is the rule** | **No.** `C-XVIII` forbids one |
> | **What it acts ON** | An eligibility determination | A claim, before adjudication | **An adjudication, after it** |
> | **`PO-P10` level** | 6 → 7 | 5 | **5** |
>
> **Conclusion, reached rather than assumed: `PO-Q1` is a THIRD bounded Policy-E layer, and it is
> structurally a SIBLING OF LAYER 1, not a re-expression of layer 2.** ⟦ARCHITECT ANALYSIS⟧ **Layer 2 is
> Policy E applied *as the rule* — leadership decides every case because the rule says so. `PO-Q1` is Policy
> E applied *against* a rule's output — leadership decides one case differently because a holder chose to.
> Sharing layer 2's decision point does not make it layer 2; what makes a Policy-E layer the same layer is
> being the same KIND of decision, and these are not.**
>
> **`A-34` is therefore EXTENDED and NOT replaced: the Policy-E layer count moves from TWO to THREE.**
> → **`A-44`.** ⟦SOURCE⟧ AD-01M **§11.2** makes E's audit obligations live wherever E appears — *"the human
> decision, its date, its author, and its stated reasons — for every case"* — **and `PO-Q1·b` supplies them
> for this layer in the owner's own words, with one addition (`PO-Q1·b`(2)'s evidence) that §11.2 does not
> itself require.** ⟦SETTLED⟧ **AD-01M requires NO amendment: Policy C remains selected as written and the
> five policies are unchanged.**

---

## 3.9 Determination 9 — `AC-26` checked: what `PO-Q2` answers and what it does not

> ⟦ARCHITECT ANALYSIS⟧ **`PF-50` — this is the finding [§1.1](#11-the-source-of-these-two-decisions) promised
> to state precisely *"rather than accommodating it silently,"* and it is stated first because the rest of
> the section depends on getting the register row right.**

**What `AC-26` actually asks.** ⟦ARCHITECT ANALYSIS⟧ **Quoted from AD-01P §5.2 rather than paraphrased,
because the paraphrase is where the error would enter:**

> **`AC-26` — *"Is a registration's grounding power SINGLE-USE or REPEATABLE? May ONE live registration
> ground claims on SEVERAL Inquiries inside its own window — and does it ground a claim on an Inquiry opened
> AFTER that client's earlier purchase CONVERTED?"***

**What `PO-Q2` supplies.**

> ⟦PRODUCT-OWNER DECISION⟧ **An AUDIT-RECONSTRUCTION requirement: every CP attribution and commission
> decision must be fully reconstructable from immutable linked records and audit events, with a twelve-term
> example chain.**

> ⟦ARCHITECT ANALYSIS⟧ **These are not the same question and they are not adjacent questions. `AC-26` is
> about the REACH of a registration's grounding power — how many times it may be used. `PO-Q2` is about the
> TRACEABILITY of whatever was decided. Neither constrains the other in any direction.**
>
> **`AC-26` is therefore CHECKED, FOUND NOT ANSWERED, and NOT RENUMBERED.** ⟦SETTLED⟧ **`Y-1`, `Y-3`,
> `AA-1`, `K-26` and `T-5` — all of which AD-01P coupled to `AC-26` — are likewise NOT resolved, NOT
> narrowed and NOT branched.**

**The row `PO-Q2` actually answers, and how much of it.**

> **It is AD-01P [§6.1](./03p-cp-registration-attribution-basis-decision.md)'s GATE 2, whose text
> [§1.1](#11-the-source-of-these-two-decisions) records in full:**
>
> > **Gate 2 — *"`P-G`, `C-XV`, `PF-6`'s no-new-entity conclusion, `PF-23`'s claim-borne citation, `PF-12`'s
> > survival rule, and the six-link audit chain — ALL ARCHITECT DERIVATIONS. ALL UNRATIFIED."***
>
> | Gate-2 limb | Status after `PO-Q2` |
> |---|---|
> | **The six-link audit chain** | ⟦PRODUCT-OWNER DECISION⟧ **RATIFIED IN PRINCIPLE, and EXTENDED.** The owner states the requirement in their own words and names a TWELVE-term chain where the architect derived a six-link one. **The requirement is no longer an architect's derivation** |
> | **`P-G`** | **STILL AN ARCHITECT DERIVATION. STILL UNRATIFIED** — and it now needs a seventh step (`A-38`(b)) |
> | **`C-XV`** | **STILL UNRATIFIED** — and it acquires `C-XVII`(3) beside it |
> | **`PF-6`'s no-new-entity conclusion** | **STILL UNRATIFIED** — and this document adds an artefact to it ([§3.1](#31-determination-1--the-necessity-test-run-in-full)) |
> | **`PF-23`'s claim-borne citation** | **STILL UNRATIFIED** — and `PO-Q2·c`'s sixth term (*"registration used as attribution basis"*) makes the requirement it serves the owner's, without selecting its carrier |
> | **`PF-12`'s survival rule** | **STILL UNRATIFIED. NOT touched by either answer** |

> ⟦ARCHITECT ANALYSIS⟧ **What genuinely CLOSES, stated without declaring premature victory.**
>
> 1. **What closes: the QUESTION OF WHETHER the chain is required.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2·a`
>    answers it YES, in the owner's own words, and no further architect argument is needed for it.**
> 2. **What does NOT close: whether each LINK of the chain is backed by a record the architecture actually
>    establishes.** ⟦ARCHITECT ANALYSIS⟧ **A requirement that a chain be traceable is not evidence that its
>    links exist. `PO-Q2·c` names twelve terms; some are established records, some are architect
>    recommendations still at `VALIDATE`, and at least one is backed by NOTHING in the series. That check is
>    [§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link)'s job and it is done there
>    term by term.**
> 3. **The RESIDUAL GAP, named exactly:** **`NF-27`'s audit-event list is INCOMPLETE against `PO-Q2·c` in
>    TWO places — it has no event for the ATTRIBUTION/CLASH DECISION (link 8) and none for the ATTRIBUTION
>    OVERRIDE (link 9).** ⟦ARCHITECT ANALYSIS⟧ **AD-01P §3.12 link 3 backed the adjudication with *"the
>    ordinary §11 resolution, appended, never overwriting"* — which is a BUSINESS RECORD discipline, not an
>    `NF-27` audit event. `PO-Q2·b` names BOTH substrates conjunctively (`PF-34(1)`), so a link backed by
>    one is not thereby backed by both.** → **`X-25`, `A-37`.**
>
> **`AC-26` is not closed here, in whole or in part, and nothing above narrows it.**

---

## 3.10 Determination 10 — the reconstruction chain `Q-AR`, link by link

> ⟦ARCHITECT RECOMMENDATION — `Q-AR`, the reconstruction chain⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: **audit requirements**,
> source-of-truth rules. Link names are **business-language descriptions, not approved identifiers** —
> ⟦SOURCE⟧ **R6** requires business language and **R4** requires any vocabulary to be master-driven. **No
> schema, table, column, view, query or report is proposed.**)*
>
> ⟦ARCHITECT ANALYSIS⟧ **`PF-51` — every term of `PO-Q2·c` is checked against what AD-01J … AD-01P ACTUALLY
> ESTABLISHED, and the honest answer is recorded for each — including where the answer is *nothing yet*.**
> **`PF-34(2)`'s discipline is applied in both directions: *"for example"* does not licence adding a term
> the owner did not name, and it does not licence assuming every term the owner did name already has a
> home.**

| # | `PO-Q2·c` term | Backed by | Status |
|---|---|---|---|
| **1** | **Client** | The **Person** and the long-lived **work record** — `G-1`/`V-1`, `K-38`, `PO-P10` level 1 | **ESTABLISHED — but its IDENTITY TERM is not determinate.** `AC-21` (Person or work record) and `Q10`/`M-5`'s uniqueness half are OPEN. **The chain's FIRST link is gated by an unanswered question** |
| **2** | **CP Project Registration** | AD-01N **§C.4**'s recommended record; AD-01O **`O-U`**'s per-triple sequence | **RECOMMENDED, NOT APPROVED.** AD-01N is at `VALIDATE` |
| **3** | **registration date** | AD-01N **§D.1** — fixed at creation, immutable, server-authoritative; `NF-27` event 1 | **RECOMMENDED, NOT APPROVED.** `AC-9`/`T-9` (offline capture date vs sync date) OPEN |
| **4** | **snapshotted lock-in policy** | AD-01N **`D5`** — snapshot at registration, forward-only; `NF-27` event 1 retains **`N`** *and the identity of the Project configuration it came from* | **RECOMMENDED, NOT APPROVED.** `AC-7`'s first half answered in substance by `PO-O`'s own word *snapshot*; its second half OPEN |
| **5** | **later Inquiry** | ⟦SOURCE⟧ **§06** canonical; `J-2`'s Origination Rule as bounded by `K-50` | **ESTABLISHED** |
| **6** | **registration used as attribution basis** | AD-01P **`P-G`** + **`PF-23`**'s claim-borne citation + the NEW mint event `A-28`(b) requires of `NF-27` | **RECOMMENDED, NOT APPROVED, and its CARRIER is unratified** (gate 2). ⟦PRODUCT-OWNER DECISION⟧ **`PO-P11`/`PO-P12` and now `PO-Q2·c` make the REQUIREMENT the owner's three times over** |
| **7** | **competing CP claim / clash** | `K-17`'s append-only claim set; `K-12`/`K-52` — clash is scoped to one Inquiry's claim set | **ESTABLISHED as a RECORD.** ⟦ARCHITECT ANALYSIS⟧ **But the RULE that resolves it between two live registrations is `AC-15`/`AC-20` and is UNANSWERED. The chain can record the clash; it cannot yet say how it should come out** |
| **8** | **attribution/clash decision** | ⟦SOURCE⟧ **§11**; AD-01 **§D.4** appended-never-overwritten; AD-01P §3.12 link 3 | **ESTABLISHED AS A BUSINESS-RECORD DISCIPLINE. NOT BACKED BY AN `NF-27` AUDIT EVENT.** `PO-Q2·b` requires both substrates → **`X-25`, `A-37`** |
| **9** | **any Site Head override** | **NOTHING IN THE SERIES.** `NF-24` is at the ELIGIBILITY layer and has a different subject | **NOT BACKED BY ANY ESTABLISHED RECORD. NEW — this document's `Q-OV`, RECOMMENDED and NOT APPROVED** → [§3.1](#31-determination-1--the-necessity-test-run-in-full), **`A-37`** |
| **10** | **Booking** | `K-47` — the transaction identity surviving §25/§26; `NF-28` conjunct (ii) | **ESTABLISHED.** `AC-5` (which booking fact is the Booking Date) OPEN |
| **11** | **commission eligibility** | `K-48` as extended by **`NF-28`**'s three conjuncts; `NF-27` event 3 | **RECOMMENDED, NOT APPROVED.** `AC-22` (which registration governs conjunct (iii)) OPEN |
| **12** | **commission approval / payout** | ⟦SOURCE⟧ **§32**, **§40**, **§50**; consolidated **§22**'s accrual/payout separation; the CP Ledger | **ESTABLISHED AS A SOURCE PATH.** ⟦SETTLED⟧ **`M-9` owns every formula, rate, slab, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING above touches any of them** |

> ⟦ARCHITECT ANALYSIS⟧ **One term is ADMITTED to `Q-AR` that `PO-Q2·c` does not name, and the ground for
> admitting it is stated so it is checkable against `PF-34(2)` rather than taken on trust.**
>
> | Admitted term | Where it comes from | Why this is not inventing a term |
> |---|---|---|
> | **Any COMMISSION ELIGIBILITY EXCEPTION on the determination, where one exists** — between links 11 and 12 | `NF-24`; **`NF-27` event 4**; ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` level 7**; ⟦PRODUCT-OWNER DECISION⟧ **`PO-N8`/`PO-N9`** | **`PF-34(2)`: a term the *"for example"* chain omits is NOT thereby excluded.** **And `PF-34`'s own stated test is met — every term in `Q-AR` is *"either in `PO-Q2·c`, in `PO-P11`/`PO-P12`, or in AD-01N `NF-27`,"* and this one is in `NF-27` and in the owner's own `PO-P10`** |
>
> **NOTHING ELSE is admitted. `Q-AR` is `PO-Q2·c`'s twelve terms plus this one, and no term is invented.**

> ⟦ARCHITECT ANALYSIS⟧ **The honest summary of the link-by-link check, because a table this long invites
> being read as a completed chain.**
>
> | Result | Links |
> |---|---|
> | **ESTABLISHED and approved-independent** | **1** (gated by `AC-21`/`Q10`), **5**, **7** (record only), **10**, **12** |
> | **RECOMMENDED, NOT APPROVED — AD-01N/AD-01O/AD-01P all still unapproved** | **2**, **3**, **4**, **6**, **11** |
> | **BACKED ON ONE SUBSTRATE ONLY** — business record yes, `NF-27` audit event no | **8** → `X-25`, `A-37` |
> | **BACKED BY NOTHING BEFORE THIS DOCUMENT** | **9** → `Q-OV`, RECOMMENDED and NOT APPROVED |
>
> **`PO-Q2·a`'s requirement — *fully reconstructable* — is therefore OWNER-RATIFIED and NOT YET SATISFIABLE.**
> **Five of the thirteen links rest on recommendations at `VALIDATE`, one is backed on only one of the two
> substrates the owner named conjunctively, one did not exist before this document, and the first link's
> identity term is itself an open question.** ⟦ARCHITECT ANALYSIS⟧ **This is not a criticism of `PO-Q2`. It
> is what a reconstruction requirement is FOR: it converts every unratified link in the chain from an
> architectural preference into a stated obligation, and it is the single most useful thing the owner could
> have said about the audit layer.**

---

## 3.11 Determination 11 — source of truth versus derived and reporting values

> ⟦ARCHITECT ANALYSIS⟧ **`PF-52` — `PF-34(1)` already recorded that `PO-Q2·b`'s conjunctive *"immutable
> linked records AND audit events"* states AD-01N `NF-27` read property 3 in the owner's own words: *"the
> audit log is the PROOF, not the query surface … the determination and the exception are business facts on
> business records, audited IN ADDITION — not facts that live only in the audit log."* This section works
> out what that means for each link of `Q-AR`, because a reconstruction requirement is the single most
> reliable way to produce a second source of truth by accident.**

| `Q-AR` link | Kind | Why |
|---|---|---|
| **Client** | **SOURCE OF TRUTH** — the Person / work record | `G-1`, `V-1`, `K-38`. **Carries no commercial fact** (`C-XIV`) |
| **CP Project Registration, its date, its snapshotted `N`** | **SOURCE OF TRUTH** — one immutable business record | AD-01N §C.4, §D.1; `D5`. **And it is STATELESS — `OF-5`, `C-XV`(3), `C-XVII`(3)** |
| **Inquiry** | **SOURCE OF TRUTH** | ⟦SOURCE⟧ §06; `J-2` |
| **Attribution claim, and its citation of a registration** | **SOURCE OF TRUTH** — the claim, carrying its own stated ground | `K-17`, `K-18`, `PF-23` |
| **The §11 attribution/clash decision** | **SOURCE OF TRUTH** — appended, never overwritten | ⟦SOURCE⟧ §11; AD-01 §D.4; `C-XVII`(2) |
| **`Q-OV` override** | **SOURCE OF TRUTH** — a separate appended permanent decision record | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1·c` |
| **Booking** | **SOURCE OF TRUTH** | `K-47` |
| **Eligibility determination** | **SOURCE OF TRUTH** — an appended immutable fact carrying its own inputs | `NF-28`; `NF-27` event 3; AD-01N §F.1 step 7 |
| **`NF-24` eligibility exception** | **SOURCE OF TRUTH** | `NF-24` |
| **Commission approval / payout** | **SOURCE OF TRUTH** — the §32/§40 path and the CP Ledger; accrual separated from payout | consolidated §22. ⟦SETTLED⟧ **`M-9` owns the rest** |
| **"Which registration grounded this claim"** *as an Inquiry-level fact* | **DERIVED** | **It is read from the claim's citation** — `PF-23`, `G-8`'s read-time-projection principle. **It is NOT a second source of truth for the citation, and it must never be stored as one** |
| **"Who produced this Inquiry", after an override** | **DERIVED** — the JOIN of (§11 decision, any override) | [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility). **The join is computed; it is never written back over either operand** |
| **"Is this CP eligible", after an exception** | **DERIVED** — the JOIN of (determination, any exception) | `NF-25` |
| **"Is this registration live as at date D"** | **DERIVED** | `OF-5`: liveness is derived and **nothing is ever written to a registration** |
| **The RECONSTRUCTION VIEW itself — the whole traced chain an auditor reads** | **DERIVED. ALWAYS.** | ⟦ARCHITECT ANALYSIS⟧ **It is a projection over the ten sources of truth above. It is not a record, not a document, not a snapshot and not an artefact** → **`C-XIX`** |
| **The audit events** | **PROOF, not query surface** | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q2·b`; `NF-27` read property 3; ⟦SOURCE⟧ **R6** (*"12 months hot"* then cold storage, while a CP commission dispute can surface years later) |

> ⟦ARCHITECT RECOMMENDATION — `C-XIX`, a constraint and a prohibition⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT
> OWNER'S EXPLICIT WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: source-of-truth rules,
> audit requirements. **Stated as a BUSINESS RULE. No schema, view, query, report, table or column is
> proposed.**)*
>
> **`C-XIX` — The reconstruction of an attribution or commission decision is DERIVED from the immutable
> business records and audit events that already carry each link. It is never itself a source of truth for
> any link in it, and no link may be duplicated, cached, denormalised or materialised into it as a second
> authoritative copy.**
>
> **Three corollaries:**
>
> 1. **No `Attribution Reconstruction`, `Decision Chain`, `Audit Trail Record` or `Case File` object.**
>    ⟦ARCHITECT ANALYSIS⟧ **This is AD-01P `PF-6` candidate (e)'s objection — *a third source of truth for a
>    fact two records already hold jointly* — applied one layer out, and it is the same objection sustained
>    at AD-01A §3.6/§5.2, `G-8`, `G-9`, `J-36` and `OF-6`.** **A reconstruction artefact is exactly that
>    defect wearing an audit requirement as justification.**
> 2. **Each link must be reproducible from its OWN retained inputs, without joining to live tables.**
>    ⟦SOURCE⟧ **R6**: *"joining to live tables to render history is wrong."* **This is `NF-27` read property
>    2 and AD-01P §3.12 read property 1, and it applies to `Q-OV` exactly as it applies to `NF-24` — which
>    is why [§3.3](#33-determination-3--the-override-records-minimum-shape-reason-and-evidence) row 1
>    requires the override to embed the overridden decision's values and not merely to reference it.**
> 3. **Both substrates are required, and neither substitutes for the other.** ⟦PRODUCT-OWNER DECISION⟧
>    **`PO-Q2·b` names them conjunctively.** **A link present only as an audit event fails the requirement
>    once R6's hot retention lapses; a link present only as a business record fails the *"actor, action,
>    time, authorization context, system/human origin"* obligation of ⟦SOURCE⟧ §54. `X-25` is a failure of
>    exactly this kind and it is why `A-37` is necessary.**

---

## 3.12 Determination 12 — reconstruction with no override, and reconstruction with one

> ⟦ARCHITECT ANALYSIS⟧ **`PF-53` — `PO-Q2·c`'s ninth term is *"ANY Site Head override,"* and the word *any*
> makes the no-override case part of the requirement rather than the trivial residue of it. Both paths are
> worked.**

**(a) The ordinary path — no override exists.**

> **The chain reconstructs entirely from `Q-AR` links 1–8 and 10–12, with no link 9.** **Every one of those
> links is an ordinary business record or an ordinary audit event created in the ordinary course. No
> management act appears anywhere in it.**
>
> ⟦ARCHITECT ANALYSIS⟧ **One property of this path is a requirement rather than a convenience, and it is
> easy to miss: the reconstruction must be able to state AFFIRMATIVELY that the attribution stands as §11
> decided it — not merely to fail to find an override.**
>
> **The mechanism is `A-43`'s distinguishability requirement, not a search result.** **If an
> override-derived attribution is visibly distinguishable from an ordinarily-adjudicated one, then an
> ordinarily-adjudicated one is affirmatively readable as such, and *"no override"* is a stated fact rather
> than an absence of evidence.** ⟦ARCHITECT ANALYSIS⟧ **This is the same reasoning AD-01N gave for `NF-27`
> event 2 — *"a rule that says 'this must not happen' needs a record that it did not happen when the
> occasion arose"* — applied to a reader rather than to an act.**

**(b) The overridden path — both decisions appear side by side.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·d` forbids mutating the original. ⟦ARCHITECT RECOMMENDATION⟧ `C-XVII`(2)
> states it as a constraint. ⟦ARCHITECT RECOMMENDATION⟧ `L-25` requires the management-created fact to be
> visibly distinguishable. AD-01N `NF-27` read property 1 already established the rule at the eligibility
> layer in exactly these words: *"the original determination must remain retrievable and displayable
> ALONGSIDE any exception, never replaced by it."***
>
> **The requirement at this layer, stated as its exact analogue** → **`A-37`:**
>
> **BOTH the original attribution/clash decision AND the override must appear TOGETHER in any reconstruction
> of that attribution. The original is never hidden, superseded, replaced, re-computed or collapsed into the
> override's outcome.**
>
> | What the reader must be able to see | Carried by |
> |---|---|
> | **Who claimed, on what ground, and which claims were in contention** | The Inquiry's append-only claim set and each claim's citation — `K-17`, `PF-23` |
> | **What §11 decided, when, and by whose authority** | The appended §11 resolution — ⟦SOURCE⟧ §11, AD-01 §D.4 — **and the audit event `A-37` requires for it** |
> | **That an authorized holder decided differently, what they decided, when, under which role and scope, for what stated reason, and on what supporting evidence** | **`Q-OV`** — [§3.3](#33-determination-3--the-override-records-minimum-shape-reason-and-evidence) rows 2–6 — **and the audit event `A-37` requires for it** |
> | **That the registration, the claims and the clash records were not altered by any of it** | `C-XVII`(1), `C-XVII`(2), `C-XVII`(3); `A-42` |
> | **Which attribution the downstream eligibility determination actually consumed** | **The JOIN** — [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility); `NF-25`'s shape |
>
> ⟦ARCHITECT ANALYSIS⟧ **In AD-01N's own register, a reader must be able to see the eligibility-layer
> equivalent — *"computed: not eligible — booked on day 34 of a 30-day window; exception approved by <role,
> scope> on <date> for <reason>."*** **The attribution-layer equivalent is the same sentence one level up,
> and it is the shape `A-37` asks `NF-27` to make reconstructible. No screen, report, view or layout is
> designed by saying so** (AD-01A §8.5).

---

## 3.13 Determination 13 — RBAC and visibility in portal contexts: `AC-13`, carried forward and enlarged

> ⟦ARCHITECT ANALYSIS⟧ **This section is deliberately short. `AC-13` is checked for engagement and found
> ENLARGED rather than answered, and no portal content is invented — which is what AD-01P did with the same
> item and for the same reason.**
>
> **`AC-13` — override scope, self-interest controls, and CP visibility — is ENLARGED A SECOND TIME, folded
> in, and NOT RENUMBERED. Three items:**
>
> | # | Enlargement | Why it is `AC-13`'s and not this document's |
> |---|---|---|
> | **(a)** | **Does the ⟦SOURCE⟧ §39 CP portal show a CP that their attribution was decided by an OVERRIDE rather than by ordinary §11 adjudication — and if so, does it show the reason and the supporting evidence?** | ⟦SOURCE⟧ **§39** entitles the CP to *"attribution information"* and forbids exposing *"Builder-internal sensitive information."* ⟦SOURCE⟧ **§11** forbids exposing *"sensitive competing claims unnecessarily."* **`PO-Q1·b`'s evidence may be commercially sensitive in a way `PO-N9`'s reason already was.** **`V-7`'s fail-closed projection supplies the MECHANISM; it does not supply the CONTENT** |
> | **(b)** | **Does the losing CP see that they won at §11 and were overridden?** | **Same two sources pulling in opposite directions, and the answer is not derivable from either** |
> | **(c)** | **Self-interest controls for the attribution-override permission** — `NF-26(6)` at the new layer | **Not stated by any source, at either layer** — [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name)(6) |

> ⟦ARCHITECT ANALYSIS⟧ **One distinction is worth stating once, because `PO-Q2` makes it available to be
> confused: `PO-Q2` establishes an AUDITOR audience. ⟦SOURCE⟧ §39 establishes a CP audience. They are not
> the same audience and a reconstruction requirement is not a disclosure requirement.** **`PO-Q2·a` says an
> auditor must be able to trace the chain; it says nothing whatever about what a CP may see, and nothing
> above reads it as though it did.** **Who the auditor is, what permission they hold, and for how long the
> chain must remain reconstructable, is itself unstated** → **`AC-31`.**
>
> **`AC-13` is NOT resolved. No portal surface, field, screen, projection or disclosure rule is designed,
> proposed or implied.**

---

## 3.14 Determination 14 — which other open items these two answers actually reach

> ⟦ARCHITECT ANALYSIS⟧ **`PF-54` — every item [§"Scope discipline"](#scope-discipline-stated-once-and-honoured-throughout)
> named as carrying forward is checked INDIVIDUALLY here. *"Unchanged"* means CHECKED AND UNCHANGED, not
> skipped. Nothing is closed on the strength of two answers that do not reach it.**

| Item | Effect of `PO-Q1` / `PO-Q2` |
|---|---|
| **`AA-1`** (are two live Inquiries on one client × Project ordinary) | **UNCHANGED.** An override decides among the claims on ONE Inquiry (`B-1`, not engaged) and says nothing about how many Inquiries may be live. **NOT resolved.** |
| **`AA-2`** (project-less preliminary registration) | **UNCHANGED, and still on two critical paths.** ⟦ARCHITECT ANALYSIS⟧ **One deliberate result: [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name)(3) scopes the override permission to the INQUIRY's Project, not the registration's, so the new permission is `AA-2`-INDEPENDENT. That is a design choice made to avoid deepening the dependency — it does not answer `AA-2`.** **NOT resolved.** |
| **`AA-3`, `AA-4`, `AA-5`** | **UNCHANGED, each checked.** `AA-4` stays NARROWED exactly as `A-33` left it. **NONE resolved, narrowed or branched.** |
| **`AB-1`, `AB-2`** | **UNCHANGED.** An override touches no transaction identity (`K-47`) and no unit transfer (`K-40`). **NOT resolved.** |
| **`AB-3`** (may a sub-agent hold an entitlement independently of the firm) | **UNCHANGED, and named as reachable by a further route:** an override's outcome names a party, and whether that party may be a sub-agent is `AB-3`'s question. ⟦ARCHITECT ANALYSIS⟧ **Naming a route is not narrowing a question.** **NOT resolved.** |
| **`AC-1`** (authorization posture of the closing-reason tap) | **UNCHANGED.** Still arises if and only if `AC-14` is answered in the (L-6·engagement) direction — [§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not). **NOT resolved.** |
| **`AC-2`** (an ex-gratia route where no attribution claim exists) | **UNCHANGED, and EXPLICITLY NOT RELIEVED.** ⟦ARCHITECT ANALYSIS⟧ **Where the minting gate failed there is no claim, hence no attribution/clash decision, hence NOTHING FOR `Q-OV` TO OVERRIDE — the exact shape of AD-01P `PF-13(2)` one layer up. An attribution override is not a pay-anyway route: it decides WHO, never WHETHER** (`K-9`). **`AC-2` is still where a discretionary pay-anyway route would live. NOT resolved.** |
| **`AC-3`** (must a claim name a currently-approved CP relationship) | **UNCHANGED, engaged from a second direction** — an override may name a party whose CP relationship has since ended or was §44-unverified. Coupled to `AC-10` and `AB-3`. **NOT resolved.** |
| **`AC-4`** | **CLOSED at AD-01P and NOT REOPENED.** Nothing above disturbs it. |
| **`AC-5`** (which booking fact is *"Booking Date"*) | **UNCHANGED.** The override reads no booking fact. **NOT resolved.** |
| **`AC-6`** (boundary convention α/β) | **UNCHANGED, and CHECKED FOR A FOURTH USE: there is none.** ⟦ARCHITECT ANALYSIS⟧ **`Q-OV` evaluates no window, consults no `(R, N)` and compares no dates, so the convention acquires no fourth money-bearing consumer. It remains TRIPLY money-bearing exactly as AD-01P left it. NOT resolved.** |
| **`AC-7`** (ratify the snapshot; should a re-basing act exist) | **UNCHANGED.** **NOT resolved.** |
| **`AC-8`** (business timezone) | **UNCHANGED, and CHECKED FOR A FIFTH OPERAND: there is none.** The override's own time is server-authoritative (⟦SOURCE⟧ §18, §54) and is an event timestamp, not a business-date projection. **NOT resolved.** |
| **`AC-9` / `T-9`** (offline capture date vs sync date) | **UNCHANGED, and still claim-existence-bearing.** `Q-AR` link 3 depends on it. **NOT resolved.** |
| **`AC-10`** (what *"successfully registers"* means; §44 unverified capture) | **UNCHANGED.** **NOT resolved.** |
| **`AC-11`** (does the rule time-bar the ordinary never-closed case) | **UNCHANGED and EXPLICITLY NOT RELIEVED.** ⟦ARCHITECT ANALYSIS⟧ **An attribution override does not reach conjunct (iii) and therefore relieves nothing about a time bar** — [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility). **NOT resolved.** |
| **`AC-12`** (override directionality and revocation) | **ENLARGED, FOLDED IN, NOT RENUMBERED — by two limbs at the new layer.** **(a)** **May a `Q-OV` override be REVOKED or SUPERSEDED by a later appended act — by whom, and what happens if a Booking, an eligibility determination, an invoice or a payout has already followed from it?** **(b)** **Is the mechanism RECURSIVE — may an override itself be overridden?** ⟦ARCHITECT ANALYSIS⟧ **`PO-Q1·c`'s *"permanent"* forbids EDITING the record; it does not say whether a later record may supersede it, and the architect does not read *permanent* as *final*.** **The money-already-moved branch touches ⟦SOURCE⟧ §33, and NO clawback formula, quantum, offset or passback rule is proposed anywhere.** **NOT resolved.** |
| **`AC-13`** (override scope, self-interest controls, CP visibility) | **ENLARGED A SECOND TIME, FOLDED IN, NOT RENUMBERED** — [§3.13](#313-determination-13--rbac-and-visibility-in-portal-contexts-ac-13-carried-forward-and-enlarged). **NOT resolved.** |
| **`AC-14`** (does an invalid-side closure retain the window and the grounding power) | **CHECKED CLAUSE BY CLAUSE AGAINST BOTH ANSWERS AND FOUND NOT TOUCHED, in either direction.** **It remains EXACTLY as open and exactly as acute as AD-01P left it, at the TOP of the register** — [§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not). **NOT resolved, NOT narrowed.** |
| **`AC-15`** and **`AC-20`** (who wins between two live registrations; may the second exist) | **UNCHANGED, NOT ANSWERED — PRIORITY RAISED A FOURTH CONSECUTIVE TIME.** ⟦ARCHITECT ANALYSIS⟧ **And one thing must be said plainly, because `PO-Q1` will otherwise be read as having solved it: AN OVERRIDE IS NOT A PRECEDENCE RULE.** **A discretionary act on one named decision decides one case; it establishes nothing about the next one, and `C-XVIII` forbids it being generalised, configured or accumulated into a rule.** **Using `Q-OV` repeatedly to enforce a de-facto precedence is `C-IX`'s §88 authorization change arriving by the back door.** **`AC-15`/`AC-20` still need the owner's answer and no precedence is invented here.** |
| **`AC-16`** (does a cancelled/transferred booking re-run the test) | **UNCHANGED.** **NOT resolved. No clawback or re-test rule is invented.** |
| **`AC-17`** (Project-level only; tenant default; per-CP-tier variation) | **UNCHANGED.** **NOT resolved.** |
| **`AC-18`** (re-registration cadence, minimum gap, cap) | **UNCHANGED.** ⟦ARCHITECT ANALYSIS⟧ **An override neither creates nor renews a registration (`A-42`), so it supplies no cadence control and relieves none of the hazard `L-13`, `MF-9` and `X-13` each named. NOT resolved. No cadence, gap or cap is invented.** |
| **`AC-19`** (is a Helpdesk lookup an auditable access event) | **UNCHANGED.** **NOT resolved.** |
| **`AC-21`** (is the registration's CLIENT subject the Person or the work record) | **UNCHANGED in content; GAINS A THIRD CONSUMER.** `Q-AR` link 1 is *"Client"* and it is the same term. **NOT resolved.** |
| **`AC-22`** (which registration governs conjunct (iii) when cited ≠ consulted) | **UNCHANGED, and neither answered nor worsened** — [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility). **NOT resolved.** |
| **`AC-23`** (may an already-live Inquiry be minted on) — with **`Q11`** | **UNCHANGED. `Q11` remains BLOCKING.** **NOT resolved.** |
| **`AC-24`** (which date is the minting gate's `G`) | **UNCHANGED.** **NOT resolved.** |
| **`AC-25`** (automatic or discretionary mint; is an unopposed claim adjudicated like a contested one) | **NARROWED, NOT RESOLVED, NOT RENUMBERED.** ⟦ARCHITECT ANALYSIS⟧ **The narrowing, stated exactly: `PO-Q1` grants an override OF an attribution/clash decision and `PO-Q1·c` requires the override to be *"a separate appended permanent decision record"* — which requires a DETERMINATE REFERENT to be appended to. So one candidate answer to `AC-25`'s second half is now EXCLUDED: a lighter path for the unopposed case that produces NO RECORDED attribution/clash decision at all, because such a path would leave `PO-Q1`'s grant with nothing to override on the very Inquiries where it is cheapest to want it.** **Both surviving readings — the same adjudication act, or a lighter one — must produce a decision record.** **`AC-25`'s first half (automatic or authorized minting) is UNTOUCHED, and the second half is NOT answered.** |
| **`AC-26`** (is the grounding power single-use or repeatable) | **CHECKED, FOUND NOT ANSWERED, NOT RENUMBERED** — [§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not). ⟦ARCHITECT ANALYSIS⟧ **`PO-Q2` answers AD-01P §6.1's GATE 2, which is a different register row. `AC-26` asks about a registration's REACH; `PO-Q2` is about TRACEABILITY.** **NOT resolved, NOT narrowed.** |
| **`N-4`** (the closure-reason vocabulary) | **UNCHANGED and STILL OFF the critical path.** ⟦ARCHITECT ANALYSIS⟧ **Checked explicitly, because `PO-Q1·b`'s mandatory reason looks like it might put `N-4` back on: it does not. `NF-24`'s precedent governs — the reason is free text, any structured vocabulary would be a MASTER and never an enum (⟦SOURCE⟧ R4), and NO VALUE IS PROPOSED. No closure classification is consulted by anything in `Q-OV`.** **It returns to the path if and only if `AC-14` is answered in the (L-6·engagement) direction.** **NOT resolved.** |
| **`T-1`, `T-3`** | **UNCHANGED.** `T-3`'s merge-vs-citation distinction is upheld and not restated. **NOT resolved.** |
| **`T-5`** / **`K-26`** | **PRESERVED EXACTLY. NOT reopened, NOT re-derived, NOT challenged, NOT narrowed.** |
| **`T-6`, `T-7`, `T-8`** (the `Q6` correction mechanics) | **UNCHANGED, and `Q6` is ACTIVELY PROTECTED A SECOND TIME** — [§3.2](#32-determination-2--correction-versus-override-preserved-exactly). ⟦ARCHITECT ANALYSIS⟧ **`A-41` is a statement about `C-XII`'s SCOPE, not about `Q6`'s. `Q6` is NOT reopened and NOT narrowed. NONE of the three is resolved.** |
| **`T-9`** | **UNCHANGED, still claim-existence-bearing.** **NOT resolved.** |
| **`T-10`, `T-11`** | **UNCHANGED.** `T-11`'s chain-depth concern is not engaged — the override creates no chain. **NOT resolved.** |
| **`Q10`** (merge) and **`M-5`'s uniqueness half** | **UNCHANGED, NOT resolved, NOT narrowed — and now gating a THIRD mechanism.** `Q-AR` link 1 is the same client term that `O-U` and `P-G` already depend on. ⟦ARCHITECT ANALYSIS⟧ **`A-26` carries forward and acquires an OVERRIDE dimension: a merge may now bring together two histories over which attribution/clash decisions and overrides have already been recorded, and nothing says what happens to them.** **No merge rule is invented.** |
| **`Q11`** (late filing on the same Inquiry) | **UNCHANGED, NOT resolved — and still BLOCKING** via `AC-23`. |
| **`V-4`** | **UNCHANGED.** ⟦SETTLED⟧ **Still the cheapest unblocking question in the register, now recommended by EIGHT consecutive documents without being taken. It does not block this decision and this decision does not block it.** |
| **`W-1`** | **UNCHANGED. NOT resolved.** |
| **`Y-1`, `Y-3`** | **UNCHANGED, still coupled to `AC-26` — which is NOT answered** ([§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not)). **NOT resolved.** |
| **`Y-4`, `Y-5`** | **UNCHANGED. NOT resolved.** |
| **`Z-2`, `Z-5`** | **UNCHANGED. NOT resolved.** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start.** ⟦SETTLED⟧ **It owns every formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING in this document touches any of them.** ⟦ARCHITECT ANALYSIS⟧ **Its consumer list GROWS: it now also consumes `Q-OV`, `Q-AR`, `C-XVII`, `C-XVIII`, `C-XIX` and `AC-27 … AC-31`.** |

> ⟦ARCHITECT ANALYSIS⟧ **The net accounting, stated as arithmetic rather than as a claim.**
>
> **These two answers RATIFY ONE REQUIREMENT IN PRINCIPLE (`PO-Q2·a`, discharging the audit-chain limb of
> AD-01P gate 2), ESTABLISH ONE NEW MECHANISM (`Q-OV`, at a decision point the series had never modelled),
> NARROW ONE item (`AC-25`'s second half), ENLARGE TWO (`AC-12`, `AC-13`), RAISE the priority of TWO
> (`AC-15`, `AC-20`, for a fourth consecutive document), and ADD FIVE (`AC-27 … AC-31`).**
>
> **They CLOSE NOTHING OUTRIGHT.** **`AC-26` — the item they arrived addressed to — is checked and found
> untouched.** **`AC-14` — the register's top item — is checked and found untouched.** ⟦ARCHITECT ANALYSIS⟧
> **A register that gains one mechanism, five questions and no closures is not a register that has been
> cleared, and [§6](#6-recommendation) does not report it as one.**

---

## 4. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands — the discipline
> every document in this series has kept, and the reason `A-1 … A-35` are still on the register.
>
> **Every item below is a conflict with an unapproved ⟦ARCHITECT RECOMMENDATION⟧, never with an approved
> Product-Owner decision.** **Result of the search against approved decisions: NO contradiction was found
> with `Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `PO-N1 … PO-N9`,
> `PO-O1 … PO-O14` or `PO-P1 … PO-P12`. None of them is reopened, and `K-18` is CONFIRMED for a FOURTH
> consecutive document.**

### 4.1 The nine amendments, named and NOT made

> ⟦ARCHITECT ANALYSIS⟧ **The arithmetic, stated before the register because the count was committed to at
> the head of this document and a commitment is worth checking rather than fitting.**
>
> **The numbering discipline reserved `A-36 … A-44` — NINE. Nine is what [§3](#30-the-headline-finding-two-override-layers-not-one)
> actually produced, and the check is shown: FOUR of the nine — `A-37`, `A-38`, `A-41`, `A-43` — are cited
> inline in [§1](#1-source-and-confirmed-business-rules) and [§2](#2-the-existing-architecture-baseline-these-decisions-land-on)
> before §3 begins. FIVE — `A-36`, `A-39`, `A-40`, `A-42`, `A-44` — are introduced in §3. NONE is
> introduced here for the first time, and NO number is a filler.** ⟦ARCHITECT ANALYSIS⟧ **AD-01P recorded
> that its ninth (`A-34`) had to be introduced in its own §4 and recorded why. This document has no such
> case, which is a small result and is stated as one.**
>
> **`A-38` and `A-43` are TWO-LIMBED, because one owner clause lands on two different targets. No number is
> split, re-assigned or renumbered, because the inline citations in §1, §2 and §3 are load-bearing and this
> document does not edit itself.** **Eleven limbs across FOUR target documents.**

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-36`** | **AD-01P — §3.13**, the `PO-P10` layer-mapping table and its stated finding | **AD-01P concluded, as a finding, that *"`PO-P10`'s seven levels map onto the architecture's existing six WITHOUT A SINGLE ADDITION,"* placing level 7 at *"Layer 3½ — the exception"* and level 5 at *"Layer 2 — attribution."* ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1` establishes an override at level 5, and the architecture has no artefact there** (`PF-39`, `X-23`). **The table must acquire a LAYER 2½ — *"has an authorized person decided differently about ONE attribution/clash decision?"*, answer-bearer the appended immutable `Q-OV` — and the finding must be restated as a mapping of SEVEN onto SEVEN.** ⟦ARCHITECT ANALYSIS⟧ **This is a correction of a COUNT, not of a principle: `PO-P10`'s prohibition on conflating levels is unchanged, and the architecture still keeps every level it has apart.** **AD-01P is NOT edited.** |
| **`A-37`** | **AD-01N — `NF-27`**, its five events (six after `A-28`(b)) and its four read properties | **TWO ADDITIONS AND ONE EXTENSION, and it is the residual gap [§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not) names exactly.** **(i)** **A NEW EVENT — *an attribution/clash decision was recorded*** — retaining the Inquiry, the claims in contention **as they stood**, the outcome, the deciding actor and their role and scope at that moment, the authorization context, and the server timestamp. **`PO-Q2·c` link 8 requires it and `NF-27` has no event for it; AD-01P §3.12 link 3 backed it as a BUSINESS-RECORD discipline only, and `PO-Q2·b` names both substrates conjunctively** (`PF-34(1)`). **(ii)** **A NEW EVENT — *an attribution/clash decision was overridden*** — retaining the decision overridden **by reference AND by embedded values**, the override's outcome, ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·b`'s mandatory reason AND mandatory supporting remarks/evidence**, the actor's identity with their role and scope **as at that moment**, the server timestamp, and explicit assertions that the registration, the claim set and the clash records are unchanged. **(iii)** **`NF-27`'s read property 1 must be EXTENDED to this layer:** *the original attribution/clash decision must remain retrievable and displayable ALONGSIDE any override, never replaced by it* — the exact analogue of the eligibility-layer rule `PO-N9` already supplies. → **`X-25`**. **AD-01N is NOT edited.** |
| **`A-38`** | **(a) AD-01P — §1.2's record of `PO-P10`**; **(b) AD-01P — `P-G`** | **TWO limbs.** **(a)** ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10`'s seven-level ENUMERATION is INCOMPLETE: it names an override at level 7 and `PO-Q1` establishes one at level 5.** **`PO-P10` is UNCHANGED as a PROHIBITION — nothing above conflates any of its levels — but AD-01P's record of it must be marked as an enumeration the owner has since outgrown.** ⟦ARCHITECT ANALYSIS⟧ **ONLY THE OWNER MAY EXTEND THEIR OWN LIST. This document names the gap and DOES NOT FILL IT, and no eighth level is drafted, proposed or implied anywhere above.** → **`X-24`**. **(b)** **`P-G` acquires ONE STEP and is NOT re-derived, NOT narrowed and NOT re-operanded.** After step 5's §11 adjudication and before step 6's eligibility join: **an authorized holder may append a `Q-OV` override of step 5's outcome, and step 6 thereafter reads the JOIN of (step 5's outcome, any override of it)** — [§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested). **Steps 1–5 are untouched and step 3's operands remain `(CP, client, Project, G)` and nothing else.** **AD-01P is NOT edited.** |
| **`A-39`** | **AD-01P — `C-XVI`**, its corollary list | **`C-XVI` SURVIVES the introduction of `Q-OV` and is NOT weakened, NOT narrowed and NOT amended in its principle** ([§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested)). **It must acquire a FOURTH COROLLARY: *a registration-grounded claim gets NO SPECIAL IMMUNITY from being overridden either — an attribution/clash decision is equally overridable whatever grounded the winning claim, with the same requirements in every case, and there is no heightened bar for overriding a registration-grounded win and no lowered bar for overriding a filed one.*** ⟦ARCHITECT ANALYSIS⟧ **`C-XVI`'s three existing corollaries are all directional and guard the WINNING direction. `Q-OV` opens a direction they do not name — advantage by being harder to displace — and that is a privilege following from the mere fact that the claim's ground is a registration, which is `C-XVI`'s own words.** ⟦SETTLED⟧ **`C-XVI` is ITSELF STILL UNRATIFIED; this corollary is ratified with it or not at all.** **AD-01P is NOT edited.** |
| **`A-40`** | **AD-01N — `NF-26`**, its nine requirements | **`NF-26` is ADOPTED IN FULL and requires NO change of principle. It requires a SECOND INSTANCE, and it is written about ONE permission.** **It must state that the ability to override an ATTRIBUTION/CLASH DECISION is a SECOND, DISTINCT PERMISSION — not the commission-eligibility-exception permission, not any general attribution, adjudication or lead-management permission — held independently, granted explicitly, scope-bound to the INQUIRY's Project, server-enforced, and separated by duty from Accounts' §32 review, from payout authorization AND from the eligibility exception itself** ([§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name)). ⟦ARCHITECT ANALYSIS⟧ **A single permission spanning both authorizes at `PO-P10` levels 5 AND 6 with one grant, which is the conflation `PO-P10` exists to forbid.** ⟦SOURCE⟧ **R2**: *"Application logic never branches on a role name"* — **`PO-Q1·a`'s words *"Site Head"* name the default holder, exactly as `PO-N8`'s did, and no role is named in logic anywhere.** **AD-01N is NOT edited.** |
| **`A-41`** | **AD-01N — `C-XII`** | **`C-XII` is RELIED UPON and found UNDER-INCLUSIVE IN ITS SUBJECT.** As stated — *"a Site Head override must NEVER be recorded through, routed to, or represented by the `Q6` correction mechanism"* — **it is written in AD-01N's context, where the only override modelled is the eligibility-level exception.** ⟦ARCHITECT ANALYSIS⟧ **Read literally it already covers `Q-OV`; read in context it may not. A constraint whose reach depends on which reading a later implementer takes is not a control.** **`C-XII` must state its subject as ANY override at ANY decision layer — the attribution/clash override included** ([§3.2](#32-determination-2--correction-versus-override-preserved-exactly)). ⟦SETTLED⟧ **This is a statement about `C-XII`'s SCOPE and not about `Q6`'s. `Q6` is NOT reopened, NOT narrowed and NOT ratified; `T-6`, `T-7` and `T-8` are NOT resolved.** **AD-01N and AD-01C are NOT edited.** |
| **`A-42`** | **AD-01O — `C-XIII`**, and its prohibition list | **`C-XIII`'s prohibition list must acquire a SECOND NEW ROW, for exactly the reason `A-27`(ii) gave it its first: *an attribution/clash override creates no registration, moves no registration date, and is never evidence that a registration relationship exists.*** ⟦ARCHITECT ANALYSIS⟧ **An override names a CP, a client, a Project and a date — four of the registration's five identifying facts — and is created by an authorized builder-side actor. Reconstructing a registration relationship from one would produce a money-bearing commercial record with no registration act, no registration actor and no registration authorization context, which ⟦SOURCE⟧ §54 and R6 cannot represent.** **This is an extension by ADDITION; `C-XIII`'s principle is unamended, and `A-27`(i)'s re-labelling and `A-27`(iii)'s permission form both carry forward unchanged.** **AD-01O is NOT edited.** |
| **`A-43`** | **(a) AD-01L — `L-25`**, via AD-01N **`NF-27` read property 4**; **(b) AD-01N — §J.3(3)**, via AD-01P **`A-35`** | **TWO limbs, one requirement.** **(a)** **`L-25` requires a system- or management-created fact to be VISIBLY DISTINGUISHABLE from one produced in the ordinary course. `NF-27` read property 4 applies it to an exception-derived ELIGIBILITY; AD-01P §3.12 read property 4 applies it to a MINTED CLAIM. NEITHER REACHES AN OVERRIDE-DERIVED ATTRIBUTION, because neither existed when they were written.** **It must: an attribution that stands by override must be visibly distinguishable from one that stands by ordinary §11 adjudication, everywhere.** **Three independent sources require it — `L-25`, ⟦SOURCE⟧ §54's *system/human origin* clause, and `C-XVIII`(2), because a pattern that cannot be observed cannot be prevented from becoming a rule.** **(b)** **AD-01P's `A-35` gave CP conversion reporting THREE distinguishable negative outcomes. There is now a FOURTH — *converted, WON at §11, and OVERRIDDEN*** — commercially different from all three and never to be one number with any of them. ⟦SOURCE⟧ **R4**: reports branch on semantics, never on tenant-renameable labels. ⟦SETTLED⟧ **`J-48`'s single denominator is untouched — an override adds neither a claim nor an Inquiry. No CP scorecard, producer-evaluation product or ranking is authorised** (AD-01A §3.3, upheld). **AD-01L, AD-01N and AD-01P are NOT edited; `A-35` remains named and not made and `A-43`(b) EXTENDS it.** |
| **`A-44`** | **AD-01N — `NF-30`**, beyond AD-01P's **`A-34`** | **`A-34` moved AD-01N's Policy-E layer count from ONE to TWO. `PO-Q1` moves it to THREE, and the third is a SIBLING OF THE FIRST rather than a re-expression of the second** ([§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested), `PF-49`). **The three: (1) `PO-N8`/`PO-N9`'s one-directional per-booking exception at ELIGIBILITY; (2) `PO-P4`'s standing ROUTING of every minted claim to §11 adjudication; (3) `PO-Q1`'s per-decision discretionary override of an ATTRIBUTION/CLASH adjudication, bounded by `C-XVIII` against becoming a rule.** ⟦SOURCE⟧ AD-01M **§11.2** makes E's audit obligations live wherever E appears — *"the human decision, its date, its author, and its stated reasons — for every case"* — **and `PO-Q1·b` supplies them for layer 3 in the owner's own words, with one addition §11.2 does not itself require (`PO-Q1·b`(2)'s evidence).** ⟦SETTLED⟧ **AD-01M requires NO amendment: its five policies are unchanged and Policy C remains selected as written.** **`A-25` and `A-34` remain named and NOT made; `A-44` EXTENDS `A-34` and does not replace it.** **AD-01N is NOT edited.** |

### 4.2 Documents requiring NO change — each checked

> ⟦ARCHITECT ANALYSIS⟧ **Stated document by document so that *"no change required"* is a CHECKED RESULT
> rather than an omission. Two results are notable in advance: **AD-01K requires NO amendment for a SECOND
> consecutive document**, and **AD-01J requires NO amendment at all**, which is the first time in five
> documents that the attribution-identity document has taken none.**

| Document | Result |
|---|---|
| **AD-01** | **No change.** **§D.4's *"claims are never overwritten by a later claim"* is load-bearing THREE times** — for `K-17`'s append-only claim set, for the appended §11 resolution that `Q-OV` overrides without touching, and for `C-XVII`(2). `E-13`'s shape CONFIRMED. **`Q10` and `Q11` NOT resolved; `Q10` newly gates a THIRD mechanism** (`§3.14`). |
| **AD-01A** | **No change.** `Q1`, `Q4`, `Q7` fixed input, **NOT reopened.** **§8.5 honoured — no workflow, screen, approval step, queue or gate is designed anywhere above, including around the override act and the reconstruction read.** **§3.3's prohibition on a producer-evaluation product is UPHELD and cited against `A-43`(b).** **`N-4` NOT resolved and still OFF the path** — [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach). |
| **AD-01B** | **No change.** §4's *"unrecoverable if decided by implementation"* standard is applied to `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `AC-14` and `AC-27 … AC-31` — **which is why [§6](#6-recommendation) does not recommend `BUILD NOW`.** |
| **AD-01C** | **No change.** **`Q6` NOT reopened, NOT narrowed, and ACTIVELY PROTECTED A SECOND TIME by `C-XII` as `A-41` would extend it.** `T-1`, `T-3`, `T-6 … T-11` NOT resolved. `D6`'s governance argument — *"a policy silently created by the data model"* — is relied upon against a standing override form and is not weakened. |
| **AD-01E** | **No change.** `U-4` untouched; no dormancy threshold is invented or implied. `X-3` carries forward. |
| **AD-01F** | **No change.** **`V-4` remains OPEN, NOT resolved, NOT narrowed, and is now recommended by EIGHT consecutive documents without being taken.** It does not block this decision and this decision does not block it. |
| **AD-01G** | **No change — and `G-8`'s read-time-projection principle is load-bearing a FOURTH time**, now for the JOIN that answers *"who produced this Inquiry?"* after an override ([§3.11](#311-determination-11--source-of-truth-versus-derived-and-reporting-values)). `G-1`/`V-1` CONFIRMED. **`G-9` untouched — the Assignment Log is NOT the carrier for anything above.** **`V-7` NOT reopened** — its fail-closed projection is again the mechanism for `AC-13`'s thrice-enlarged visibility question, and only the content is open. |
| **AD-01H** | **No change.** `V-2`, `V-3`, `H-4`, `H-8`, `H-9` CONFIRMED. **`Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved; `Y-1`/`Y-3` remain coupled to `AC-26`, which is NOT answered.** |
| **AD-01I** | **No change — and `I-4 … I-9` are CONFIRMED and re-tested.** ⟦ARCHITECT ANALYSIS⟧ **`I-9`'s *"no new canonical business object is necessary"* standard is NOT MET by this document, and that is reported rather than avoided: `PO-Q1·c` REQUIRES a separate appended permanent decision record in the owner's own words** ([§3.1](#31-determination-1--the-necessity-test-run-in-full)). **The necessity test was still run in full against six candidate existing artefacts and all six FAILED, which is what `I-9` actually asks for — a test run, not a foregone result.** `Z-2`, `Z-5` NOT resolved. |
| **AD-01J** | **NO CHANGE — and this is a result, not an omission.** **`J-2`, `C-I`, `C-II`, `C-III`, `C-IV`, `J-34`, `J-48` all CONFIRMED and none contradicted. `C-IV` is ADOPTED and is the ONLY timing bound the sources supply for an override, which is why `AC-29` exists.** **`AA-1`, `AA-2`, `AA-4`, `AA-5` NOT resolved; `A-31`(b) and `A-33` carry forward unchanged.** |
| **AD-01K** | **NO CHANGE, for a SECOND consecutive document.** **`K-18` CONFIRMED for a FOURTH consecutive document; `K-17`, `K-48` (as extended by `NF-28`), `K-9`, `K-10`, `K-12`, `K-26`, `K-38`, `K-40`, `K-42`, `K-47`, `K-50`, `K-52` all CONFIRMED and none contradicted.** ⟦ARCHITECT ANALYSIS⟧ **A decision that introduces a new override at the attribution layer and amends AD-01K NOWHERE is the second strongest piece of evidence in two documents that `K-18` was the right anchor — the override acts on the DECISION about the claim set, never on the anchor.** `AB-1`, `AB-2`, `AB-3` NOT resolved. |
| **AD-01L** | **One amendment — `A-43`(a).** **`B-1` CONFIRMED and NOT ENGAGED. `C-IX` ADOPTED, NOT AMENDED, and its carve-out expressly PRESERVED by `C-XVIII` — the most important governance result in this document.** **`C-VIII`, `C-X`, `L-6`, `K-22`, `L-10`, `L-13`, `L-21`, `L-24`, `L-25`, `L-27` all relied upon and none reopened.** **`A-1 … A-11`, `A-30`, `A-31`(a), `A-32` remain named and not made.** |
| **AD-01M** | **NO CHANGE.** **Policies A, B and D REMAIN ELIMINATED; Policy C is SELECTED AS WRITTEN.** **§11.2's audit obligation for Policy E is live at a THIRD layer** (`A-44`). **`AC-1`, `AC-2`, `AC-3` carry forward; `AC-2` is explicitly NOT relieved. `Q0-a … Q0-c`, `Q0-e` NOT answered; `Q0-d` stays OFF the critical path** (`C-IX` untouched). |
| **AD-01N** | **Four amendments plus one limb — `A-37`, `A-40`, `A-41`, `A-44`, and `A-43`(b).** ⟦ARCHITECT ANALYSIS⟧ **Five limbs across four numbered amendments, and the concentration is again informative: AD-01N takes the majority for a THIRD consecutive round of owner input, because AD-01N is where the override machinery, the permission model and the audit-event list all live.** **`NF-6`, `NF-9`, `NF-15`, `NF-19`, `NF-21`, `NF-24`, `NF-25`, `NF-28`, `NF-29` all CONFIRMED — and `NF-25` is CONFIRMED AND GENERALISED one layer up, which is the single largest reuse in this document.** **`NF-28` is UNAMENDED: no conjunct's TEST changes.** **AD-01N remains at `VALIDATE` and is NOT approved.** |
| **AD-01O** | **One amendment — `A-42`.** **`O-U` ADOPTED and untouched; `OF-4`, `OF-5`, `OF-6`, `OF-7`, `OF-12`, `OF-15`, `OF-17` CONFIRMED; `C-XIV` NOT BREACHED — an override consults no Helpdesk interaction and no work history.** **`A-14 … A-26` remain named and not made; `A-26` acquires an override dimension** (`§3.14`). **AD-01O remains advisory and is NOT approved.** |
| **AD-01P** | **Three amendments — `A-36`, `A-38`(a)+(b), `A-39` — and this is the FIRST document in the series to amend AD-01P.** **`P-G` ADOPTED as written and acquires one step; `C-XV` ADOPTED and extended in spirit by `C-XVII`(3); `C-XVI` ADOPTED, RE-TESTED, SURVIVING, and given a fourth corollary; `PF-4`, `PF-5`, `PF-6`, `PF-12`, `PF-13`, `PF-21`, `PF-23` all CONFIRMED.** **`AC-22 … AC-26` carry forward; `AC-25` NARROWED; `AC-26` CHECKED AND NOT ANSWERED.** **AD-01P remains at `VALIDATE` and is NOT approved.** |
| **`01-bmexa-architecture-reconciliation.md`** | **No change. `M-5`'s uniqueness half and `M-9` are NOT resolved, NOT narrowed and NOT branched.** **`M-5` is named as gating a THIRD mechanism and naming a dependency is not resolving it. `M-9` still owns every formula, rate, slab, amount, milestone value, clawback quantum, passback rule and TDS treatment, and nothing above touches any of them.** |
| **`BMEXA_MASTER_SPEC.md` / consolidated requirements** | **No change, and NO amendment is proposed to either.** ⟦ARCHITECT ANALYSIS⟧ **§11 requires NO amendment: it reserves attribution resolution to builder-side authorized leadership, and `PO-Q1` places the override with a holder of a distinct builder-side permission at the same layer. No precedence, ranking or tiebreak is added to §11, so `C-IX`'s §88 bar is NOT engaged and `Q0-d` stays off the path.** **§54's *system/human origin* clause does material work for a second time in the series** (`A-43`(a)). **§03, §08, §11, §18, §22, §32, §33, §39, §40, §44, §50, §54, §88, §97, R1, R2, R4, R6, R12 are read as they stand and none is extended, narrowed or reinterpreted.** |

### 4.3 Reconciliation completeness — determination 15

| Prior document | Amendments | Named at | Verdict |
|---|---|---|---|
| **AD-01J** | **0** | — | **NIL — CHECKED AND CONFIRMED.** `J-2`, `C-I … C-IV` all survive both answers unamended |
| **AD-01K** | **0** | — | **NIL — CHECKED AND CONFIRMED**, for a second consecutive document |
| **AD-01L** | **1** | `A-43`(a) | **AMENDED, NOT EDITED.** `B-1`, `C-IX`, `C-X`, `L-6`, `K-22`, `L-21` untouched |
| **AD-01M** | **0** | — | **NIL — CHECKED AND CONFIRMED** |
| **AD-01N** | **4 (5 limbs)** | `A-37`, `A-40`, `A-41`, `A-43`(b), `A-44` | **AMENDED, NOT EDITED. STILL AT `VALIDATE`. STILL NOT APPROVED** |
| **AD-01O** | **1** | `A-42` | **AMENDED, NOT EDITED. STILL ADVISORY. STILL NOT APPROVED** |
| **AD-01P** | **3 (4 limbs)** | `A-36`, `A-38`(a), `A-38`(b), `A-39` | **AMENDED, NOT EDITED. STILL AT `VALIDATE`. STILL NOT APPROVED. FIRST DOCUMENT IN THE SERIES TO AMEND IT** |

> ⟦ARCHITECT ANALYSIS⟧ **Two completeness properties, both checkable against the table above.**
>
> 1. **Every amendment cited inline in §1, §2 or §3 has a row in [§4.1](#41-the-nine-amendments-named-and-not-made),
>    and every row in §4.1 is cited inline. There is no amendment named in the body and dropped from the
>    register, and none in the register the body does not require.**
> 2. **Every prior document in this document's predecessor list carries an explicit verdict — an amendment,
>    or a checked NIL.**

### 4.4 No prior document was silently edited — determination 16, stated as a checked fact

> | Check | Result |
> |---|---|
> | Working tree state | **`git status --porcelain` names NO FILE OTHER THAN THIS DOCUMENT** at any point during its production |
> | Scope within `docs/architecture/` | **One path: `03q-site-head-attribution-override-and-audit-reconstruction-decision.md`** |
> | Consequence for the chain | **`00-*.md` through `03p-*.md`, `schema-phase-0.sql`, `BMEXA_MASTER_SPEC.md` and the consolidated requirements are BYTE-IDENTICAL to their state before this document existed** |
>
> **Therefore AD-01 … AD-01P are ALL UNEDITED. The forty-four amendments on the register are NAMED AND NOT
> MADE, and only the Project Owner may make any of them.**

### 4.5 The register after this document

> **AD-01N closed at thirteen. AD-01O closed at `A-1 … A-26` across eight documents. AD-01P closed at
> `A-1 … A-35` across nine. This document adds NINE — `A-36 … A-44` — across ELEVEN LIMBS and FOUR target
> documents.**
>
> | Target | Amendments (limbs) | Count |
> |---|---|---|
> | **AD-01N** | `A-37`, `A-40`, `A-41`, `A-43`(b), `A-44` | **5 limbs / 4 numbers** |
> | **AD-01P** | `A-36`, `A-38`(a), `A-38`(b), `A-39` | **4 limbs / 3 numbers** |
> | **AD-01L** | `A-43`(a) | **1** |
> | **AD-01O** | `A-42` | **1** |
> | **AD-01J, AD-01K, AD-01M, and every other prior document** | — | **0** |
>
> **The register now stands at `A-1 … A-44`, across TEN documents. NONE has been made.** **`Q0-e` — AD-01M's
> ratification asking the owner to ratify `A-1 … A-n` — is correspondingly larger and is NOT answered here.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Two observations about the shape of the growth, neither of which softens the
> number.** **First, this is the first document in the series to amend AD-01P, exactly as AD-01P was the
> first to amend AD-01O — which is what a chain does when an answer arrives that the previous document
> anticipated a slot for and could not fill.** **Second, and less comfortably: AD-01P could report that its
> nine amendments bought a closed seven-document question and three answered parameters. THIS document's
> nine amendments buy one ratified requirement and one new mechanism, and CLOSE NOTHING.** **Forty-four
> unmade amendments across ten documents is not a state any of those documents can be approved in, and the
> exchange rate here is worse than AD-01P's rather than better.**

---

## 5. Remaining Product-Owner questions and ratifications

> ⟦BUSINESS DECISION REQUIRED⟧ **Determination 17: is further clarification GENUINELY still required after
> two owner answers? **YES**, and more of it than before them.** Per Spec **Rule 1**, **§88**, **§97** and
> consolidated **§1** and **§30**, **none of it is guessed and nothing below is filled in from inference.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Discipline for this section, stated once and honoured throughout. NOTHING settled
> in §3 is re-argued here, and [§5.2](#52-the-five-new-questions-and-the-rest-carried-forward) is an INDEX
> onto [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach), which is the
> authority.**

### 5.1 The ratifications this document itself requires

> ⟦ARCHITECT ANALYSIS⟧ **Every item below is an ARCHITECT'S derivation FROM the two decisions, never the
> decisions' own words, which is why each requires the owner and not the implementation.**

| # | What must be ratified | Where derived | Why it cannot be left to implementation |
|---|---|---|---|
| **`Q-OV`** | **That the attribution/clash override is a SEPARATE, APPENDED, IMMUTABLE record whose subject is ONE attribution/clash decision on ONE Inquiry — a structural SIBLING of `NF-24` at a different decision point, NOT a generalisation of `NF-24` and NOT an ordinary §11 resolution.** | [§3.1](#31-determination-1--the-necessity-test-run-in-full) | ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, authorization rules, CP commission logic, audit requirements. ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·c` requires *a separate record*; WHICH separate record, and that no existing one can carry it, is the architect's finding.** **Six candidates were tested and all six failed; the owner is being asked to confirm the failures, not to re-run them.** AD-01B §4: unrecoverable once decisions accumulate. |
| **`C-XVII`** | **The four immutability limbs — registration untouched, attribution and clash records untouched and VISIBLE BESIDE the override, no override result or marker stored on the registration, and the override record itself append-only.** | [§3.5](#35-determination-5--immutability-and-what-the-override-must-never-touch) | ⟦SOURCE⟧ **§88** MUST-ASK: source-of-truth rules, audit requirements. **Limbs 1 and 2 restate `PO-Q1·d` and are safe; limb 3 EXTENDS `C-XV`(3) to a third result and limb 4 is the architect's.** **Left to implementation, the cheapest way to make an override *work* is to update the decision in place, and that is unrecoverable the moment the first one is written.** |
| **`C-XVIII`** | **That the override is a DISCRETIONARY act upon one named decision and NEVER a rule — no standing form, no accumulation into a precedence, and `C-IX`'s carve-out preserved and not widened.** | [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name) | ⟦SOURCE⟧ **§88** MUST-ASK: **authorization rules.** **This is the constraint that keeps `PO-Q1` off the §88 authorization-change path `C-IX` gates.** ⟦ARCHITECT ANALYSIS⟧ **Without it, a standing or repeated override IS a systemic precedence rule between two CPs, which `C-IX` holds is an authorization change to §11 — arriving without anyone deciding to make one, and while `AC-15` is still formally open.** |
| **`C-XIX`** | **That the reconstruction is DERIVED and is never a source of truth for any link in it — no `Attribution Reconstruction`, `Decision Chain`, `Audit Trail Record` or `Case File` object; each link reproducible from its own retained inputs; both `PO-Q2·b` substrates required and neither substituting for the other.** | [§3.11](#311-determination-11--source-of-truth-versus-derived-and-reporting-values) | ⟦SOURCE⟧ **§88** MUST-ASK: source-of-truth rules, audit requirements. ⟦ARCHITECT ANALYSIS⟧ **A reconstruction REQUIREMENT is the single most reliable way to produce a reconstruction ARTEFACT, and a reconstruction artefact is AD-01P `PF-6` candidate (e)'s defect — a third source of truth for facts other records already hold — wearing an audit obligation as its justification.** |
| **`Q-AR`** | **The thirteen-link chain of [§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link), INCLUDING its honest status column — five links resting on recommendations still at `VALIDATE`, one backed on only one of the two substrates the owner named, one that did not exist before this document, and a first link whose identity term is `AC-21`.** | [§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link) | ⟦SOURCE⟧ **§88** MUST-ASK: **audit requirements.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2·a` is the owner's; the LINK-BY-LINK backing is the architect's, and it is where the requirement either can or cannot be met.** **The one admitted term not in `PO-Q2·c` — the `NF-24` eligibility exception — should be confirmed rather than assumed.** |
| **§3.3's MINIMUM FIELD SET** | **The seven minimum facts the override record must carry, in business language — subject by reference AND by embedded values, mandatory reason, mandatory supporting remarks/evidence, the outcome, the actor with role and scope as at that moment, server-authoritative time, and append-only mutability.** Folded into **`A-37`**(ii) | [§3.3](#33-determination-3--the-override-records-minimum-shape-reason-and-evidence) | ⟦SOURCE⟧ **§88** MUST-ASK: audit requirements. **Two of the seven have NO `NF-24` precedent — the evidence input and the outcome — and both are carried to `AC-28` and `AC-30` rather than answered.** **The other five are `NF-24`'s rows applied at a new layer, and applying a precedent is still a derivation.** |
| **§3.4's PERMISSION** | **That the override permission is a SECOND, DISTINCT, project-scoped, server-enforced permission, scoped to the INQUIRY's Project, separated by duty from the eligibility exception, from §32 review and from payout.** Folded into **`A-40`** | [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name) | ⟦SOURCE⟧ **R2**, verbatim: *"Application logic never branches on a role name."* ⟦SOURCE⟧ **§03** lists *"Project Head / Site Head"* among builder-side users — **that is a default role LABEL.** **Whether the owner intends this permission to be confined to the default `Site Head` role, or held by any tenant-defined role granted it, is a §88 authorization answer and is NOT decided here.** |
| **`C-XVI`'s FOURTH COROLLARY** | **No special immunity from being overridden.** Folded into **`A-39`** | [§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested) | **`C-XVI` is ITSELF still unratified and is AD-01P's single most important ratification. This corollary is ratified with it or not at all — and if `C-XVI` is not ratified, the corollary has nothing to attach to.** |
| **`A-38`(b) — `P-G`'s SEVENTH STEP** | **That `P-G` acquires one step at its end and is otherwise unchanged in operands, actors and order.** | [§3.8](#38-determination-8--c-xvi-p-g-and-the-policy-e-layers-re-tested) | **`P-G` is itself still unratified (AD-01P gate 2). Ratifying a seventh step of an unratified six-step rule is only meaningful if `P-G` is ratified first, and [§5.4](#54-what-the-owner-should-take-first) sequences it accordingly.** |

### 5.2 The five NEW questions, and the rest carried forward

> ⟦BUSINESS DECISION REQUIRED⟧ **Five items are new and are numbered `AC-27 … AC-31`, continuing AD-01M's,
> AD-01N's, AD-01O's and AD-01P's series. NO NEW NUMBERING NAMESPACE IS CREATED.** **None is answered here
> and no default is implied for any of them.** ⟦ARCHITECT ANALYSIS⟧ **The numbering discipline reserved
> five; five is what §3 produced, and the check is recorded rather than the count assumed.**

| # | Question | Arises from | Why it cannot be left to implementation |
|---|---|---|---|
| **`AC-27`** | **THE TWO OVERRIDE LAYERS ON ONE OUTCOME. When both could apply to the same booking — an attribution/clash override at level 5 AND an `NF-24` commission-eligibility exception at level 6 — (a) may ONE individual perform both, or does separation of duties require two holders? (b) must each be separately reasoned and separately evidenced, or may one act reference the other? (c) does an attribution override ever IMPLY, presume or pre-authorize an eligibility exception?** | [§3.0](#30-the-headline-finding-two-override-layers-not-one) `PF-40`; [§3.4](#34-determination-4--who-may-perform-it-a-permission-never-a-role-name)(5); [§3.6](#36-determination-6--downstream-effect-on-attribution-on-a-claims-win-and-on-eligibility) | **This is the interaction the sources do not describe, and it exists only because BOTH answers arrived.** **The answer to (c) must be NO on the architecture's own terms — `NF-28`'s conjuncts are untouched — but whether the owner INTENDS a single act to move both layers is a business decision, and if they do, it is `NF-24`'s direction and scope that change and not the architecture's.** ⟦SOURCE⟧ consolidated **§22**: *"Commission approval/validation/payment should be separated by responsible functions."* **Left to implementation, one permission and one screen will do both.** |
| **`AC-28`** | **THE EVIDENCE ASYMMETRY. (a) `PO-Q1·b` requires mandatory supporting remarks/evidence at the ATTRIBUTION layer; `PO-N9`/`NF-24` require only a mandatory reason at the ELIGIBILITY layer. Is that asymmetry deliberate, or must the eligibility exception now carry evidence too? (b) Is *"supporting remarks/evidence"* one mandatory NARRATIVE input, or a narrative input PLUS an attached artefact?** | [§3.3](#33-determination-3--the-override-records-minimum-shape-reason-and-evidence) | **Both are the owner's own words and they differ. ⟦ARCHITECT ANALYSIS⟧ The architect must not resolve a difference between two owner clauses by levelling one up or the other down — that is inventing a business rule in the most deniable possible form.** **(b) is separately consequential: the attachment reading implies a capture, retention and access capability NO SOURCE in this series has described, and R6's retention, §39's exposure limits and tenant isolation would all reach it.** **Nothing is invented here and no capability is proposed.** |
| **`AC-29`** | **THE TIMING BOUND. Until when may an attribution/clash override be performed? May it be performed AFTER a Booking exists? AFTER an eligibility determination? AFTER invoice submission is authorized under ⟦SOURCE⟧ §40? AFTER payout?** | [§2.3](#23-the-decisions-these-two-answers-have-to-live-inside)'s `C-IV` row; [§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link) | ⟦ARCHITECT ANALYSIS⟧ **`C-IV` — claim resolution must complete BEFORE the §32 milestone — is the ONLY timing bound the sources supply, and it bounds the RESOLUTION, not a later re-decision of it.** **`PO-Q2·c` places the override before the Booking in a TRACE ORDERING, and `PF-34(2)` forbids reading a *"for example"* chain as a rule — so the chain's order is NOT read as a timing constraint.** **The money-already-moved branch touches ⟦SOURCE⟧ §33 and §40, and NO clawback, reversal, offset or passback rule is proposed anywhere.** **Left to implementation, whichever bound is coded first settles it silently and permanently.** |
| **`AC-30`** | **THE ADMISSIBLE OUTCOMES. What may an override's decision SAY? May it (a) name a different CP as the attribution winner; (b) name an INTERNAL claimant; (c) VACATE the attribution entirely, leaving the Inquiry unattributed; (d) name a party who filed NO claim on that Inquiry at all?** | [§3.3](#33-determination-3--the-override-records-minimum-shape-reason-and-evidence) row 4 | ⟦PRODUCT-OWNER DECISION⟧ **`NF-24` states a DIRECTION because `PO-N8` states one. `PO-Q1` states none — it says *"override"* and stops.** ⟦ARCHITECT ANALYSIS⟧ **Branch (d) is the sharp one: it would let an authorized act create an attribution outcome for a party with no claim, which `C-V`'s *"a claim is recorded by an explicit authorized act"* and `K-18` were both built to prevent, and which `PO-P2`'s *registration is not automatic attribution* is the owner's own instance of.** **An architect choosing among four commercial outcomes would be inventing a business rule. NO branch is selected and NO default is implied.** |
| **`AC-31`** | **THE AUDITOR. `PO-Q2·a` says *"an auditor must be able to trace the complete chain."* WHO is that auditor — an internal builder-side role, an external statutory auditor, a CP's own representative in a dispute? Is the access a PERMISSION in the fixed vocabulary, is it project-scoped, is it tenant-isolated without exemption — and FOR HOW LONG must the chain remain reconstructable?** | [§3.11](#311-determination-11--source-of-truth-versus-derived-and-reporting-values); [§3.13](#313-determination-13--rbac-and-visibility-in-portal-contexts-ac-13-carried-forward-and-enlarged) | ⟦ARCHITECT ANALYSIS⟧ **`PO-Q2` creates an ACTOR the architecture has never modelled, and an unscoped reader of the complete commercial chain is the widest read permission in the system.** ⟦SOURCE⟧ **R1** tenant isolation and **R12** project isolation apply without exemption, and ⟦SOURCE⟧ **§11** forbids exposing competing claims unnecessarily — **so *"an auditor"* cannot simply mean *"anyone with a reason."*** ⟦SOURCE⟧ **R6**'s retention is *"12 months hot"* then cold storage while a CP dispute can surface years later, **so the duration half is not a detail: it is the difference between a requirement that is met and one that lapses.** **`AC-31` is distinct from `AC-13` and must not be folded into it: `AC-13` is about the CP audience, `AC-31` is about the auditor audience.** |

**The rest, carried forward — an INDEX onto [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach), which is the authority.**

| Effect | Items |
|---|---|
| **CLOSED** | **NONE.** ⟦ARCHITECT ANALYSIS⟧ **Stated as an entry rather than omitted, because a register with no closures should say so** |
| **RATIFIED IN PRINCIPLE** | **AD-01P gate 2's AUDIT-CHAIN LIMB ONLY** — `PO-Q2·a`. **The other five limbs of gate 2 remain unratified** |
| **NARROWED, NOT RESOLVED** | **`AC-25`**'s second half — a lighter unopposed path producing NO recorded decision is excluded |
| **ENLARGED, NOT RENUMBERED** | **`AC-12`** (revocation and recursion at the new layer) · **`AC-13`** (a SECOND time: override visibility to the CP, and self-interest controls at the new layer) |
| **PRIORITY RAISED — NOT ANSWERED** | **`AC-15`** and **`AC-20`** — a FOURTH consecutive document. **An override is NOT a precedence rule and `C-XVIII` forbids it becoming one** |
| **GAINING A CONSUMER — NOT RESOLVED** | **`AC-21`** with **`Q10`**/**`M-5`**'s uniqueness half (a THIRD mechanism; `A-26` acquires an override dimension) · **`AB-3`** (a further inbound route) · **`AC-3`** (a second direction) |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE** | **`AC-6`** (no fourth boundary use) · **`AC-8`** (no fifth timezone operand) · **`N-4`** (still off the path — the reason is free text and no vocabulary is proposed) · **`AC-11`**, **`AC-16`**, **`AC-22`** |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`**, **`AC-2`** (explicitly NOT relieved), **`AC-5`**, **`AC-7`**, **`AC-9`**/**`T-9`**, **`AC-10`**, **`AC-17`**, **`AC-18`**, **`AC-19`**, **`AC-23`**, **`AC-24`** · **`AA-1`**, **`AA-2`**, **`AA-3`**, **`AA-4`**, **`AA-5`** · **`AB-1`**, **`AB-2`** · **`T-1`**, **`T-3`**, **`T-5`**, **`T-6 … T-11`** · **`Q11`** (still BLOCKING) · **`V-4`**, **`W-1`**, **`Y-1`**, **`Y-3`**, **`Y-4`**, **`Y-5`**, **`Z-2`**, **`Z-5`**, **`M-9`** |
| **CHECKED AND FOUND NOT ANSWERED** | **`AC-26`** — the row these answers arrived addressed to ([§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not)) · **`AC-14`** — the register's top item ([§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not)) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-c`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-44`** |

### 5.3 `AC-14`, the question posed back to the owner

> ⟦BUSINESS DECISION REQUIRED — `AC-14`, RESTATED, NOT RENUMBERED, NOT NARROWED, NOT ANSWERED⟧
>
> **This is the TOP-PRIORITY item in the register. It was AD-01P's top item; it is checked clause by clause
> against both new answers at [§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not)
> and found UNTOUCHED BY EITHER; and it is therefore exactly as open and exactly as acute as it was before
> the owner answered `PO-Q1` and `PO-Q2`.**
>
> **The question, in the same plain register as the two the owner has already answered:**
>
> > **"A channel partner registers a client for a project. The inquiry that partner brought is later closed
> > as a wrong number, a fabricated entry, or not a real opportunity. That same person genuinely inquires
> > later, while the registration is still inside its window.**
> >
> > **Does that registration still protect the partner, and may it still be used as the basis for their
> > attribution claim on the new inquiry — YES, the closure does not matter; or NO, a registration whose
> > inquiry was closed as never having been a real opportunity is spent and may not be used as an
> > attribution basis?"**
>
> **What turns on the answer, in one line each:**
>
> - **YES** — the rule stays cheap, deterministic and closure-blind; `N-4` and `AC-1` stay off the critical
>   path; **and `L-13`'s primary control against registration farming does not operate on the grounding rule
>   at all, which with `AC-18`'s unbounded renewability leaves that hazard at its highest stated level in
>   the series.**
> - **NO** — the farming control operates; **and the grounding rule must read prior closure classifications,
>   which puts `N-4` back on the critical path, revives `AC-1`, enlarges the rule's operand set, and requires
>   `C-XIV` to be re-tested against an operand that is a fact about a work history.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Both readings are recorded at EQUAL STRENGTH. NEITHER is selected, preferred,
> ranked, hinted at or made easier to choose. The architect does not answer it here and does not answer it
> anywhere.** ⟦SOURCE⟧ Spec **Rule 1**, **§88**, **§97**. **This is the Project Owner's alone.**
>
> ⟦SETTLED⟧ **It is NOT a request to ratify or reject `L-6`, and NOT a request to reopen `K-22`. `A-32`
> remains the amendment that would follow, and its CONTENT is determined by the owner's answer.**

### 5.4 What the owner should take first

> ⟦ARCHITECT ANALYSIS⟧ **Ordered by how many other items each answer unblocks, NOT by commercial weight.
> This is SEQUENCING ADVICE and is not a decision.**
>
> 1. **`AC-14`** — [§5.3](#53-ac-14-the-question-posed-back-to-the-owner). **Unchanged at the top of the
>    register for a second consecutive document, and the only open item that changes what the grounding rule
>    READS rather than how it is parameterised.**
> 2. **AD-01P's own gate 1 and the remainder of its gate 2 — `C-XVI` FIRST (with `A-39`'s fourth corollary),
>    then `P-G` (with `A-38`(b)'s seventh step), `C-XV`, `PF-6` and `PF-23`.** **`PO-Q2` discharged ONE of
>    gate 2's six limbs. The other five still gate everything in `Q-AR`.**
> 3. **`AC-25`** — automatic or authorized minting. **Narrowed by this document, not answered, and still at
>    the top alongside `AC-14`.**
> 4. **This document's own ratifications — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, §3.3's fields and
>    §3.4's permission** ([§5.1](#51-the-ratifications-this-document-itself-requires)). **`C-XVIII` is the
>    one with a governance consequence: without it, repeated overrides become a systemic precedence rule that
>    `C-IX` says only a §88 authorization change may create.**
> 5. **`AC-27` and `AC-30` together** — the two-layer interaction and the admissible outcomes. **Both are
>    money-bearing, both are one-sentence answers, and `AC-30`(d) is the branch that would let an authorized
>    act attribute to a party who filed no claim.**
> 6. **`AC-15` and `AC-20` — a FOURTH consecutive document.** ⟦ARCHITECT ANALYSIS⟧ **The owner should be told
>    which §88 column the answer sits in BEFORE giving it: `C-IX` holds that a binding systemic precedence
>    rule is an AUTHORIZATION change to §11. No precedence is invented here, and `Q-OV` is not a substitute
>    for one.**
> 7. **`AC-28`, `AC-29`, `AC-31`** — the evidence asymmetry, the timing bound, and who the auditor is.
> 8. **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s
>    uniqueness half** — the operand questions AD-01P left, none of which these two answers reach.
> 9. **Ratify or reject `A-1 … A-44`** (`Q0-e`). **Forty-four unmade amendments across ten documents.**
> 10. ⟦SETTLED⟧ **`V-4` is now the cheapest unblocking question in the register for the EIGHTH consecutive
>     document and has still not been taken.**

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in **five** MUST-ASK columns simultaneously — canonical entities,
> relationships, CP commission logic, authorization rules, source-of-truth rules — plus audit requirements.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§3](#30-the-headline-finding-two-override-layers-not-one),
> [§4](#4-the-amendment-register) or [§5](#5-remaining-product-owner-questions-and-ratifications) becomes
> approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **Both decisions are the Project Owner's, both are internally
coherent, and both IMPROVE the architecture rather than merely being compatible with it.** **`PO-Q1` names a
decision point precisely and constrains its own mechanism harder than the architect would have dared to
propose — mandatory reason AND mandatory evidence, a separate appended permanent record, and three explicit
prohibitions, two of which the architecture already satisfied.** **`PO-Q2` states AD-01N `NF-27` read
property 3 in the owner's own words, corroborates `PO-Q1`'s decision point independently (`PF-35`), and
converts the audit chain from an architect's derivation into a stated obligation — which is the single most
useful thing an owner can say about an audit layer.** **What they contradict is a small number of the
architect's own unapproved recommendations — AD-01P §3.13's *"without a single addition,"* `C-XII`'s
subject, `NF-27`'s event list, `NF-30`'s layer count — and never an approved decision anywhere.**

**Why not BUILD NOW.** ⟦ARCHITECT ANALYSIS⟧ **Because two answers that CLOSE NOTHING do not make an
architecture buildable, and because three findings above are, on their own, disqualifying.**

- **`AC-14` remains FULLY OPEN and at the TOP of the register, by this document's own
  [§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not) finding.** **It was
  checked clause by clause against both answers and found untouched in either direction.** **It is the only
  open item that changes what the grounding rule READS, and one of its two answers puts `N-4` and `AC-1`
  back on the critical path.**
- **`AC-26` — the register row these answers arrived addressed to — is CHECKED AND NOT ANSWERED**
  ([§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not)). **What `PO-Q2`
  answers is AD-01P gate 2's audit-chain limb, which is a different row. Five of gate 2's six limbs remain
  unratified and `AC-26` is untouched.**
- **`Q-AR` is OWNER-RATIFIED AND NOT YET SATISFIABLE** ([§3.10](#310-determination-10--the-reconstruction-chain-q-ar-link-by-link)).
  **Five of its thirteen links rest on recommendations still at `VALIDATE`; one is backed on only one of the
  two substrates `PO-Q2·b` names conjunctively; one did not exist before this document; and the first link's
  identity term is `AC-21`.** **A chain the owner requires to be fully reconstructable cannot be built until
  the links are approved to exist.**

**And every gating item AD-01P left is untouched per [§3.14](#314-determination-14--which-other-open-items-these-two-answers-actually-reach):**
**`AC-15`/`AC-20`'s CP-vs-CP precedence (priority raised a FOURTH time — and `C-XVIII` expressly forbids
`Q-OV` being used as a substitute for it), `AA-2`'s project-less registration, `AC-6`'s boundary convention,
`AC-22`, `AC-23` with `Q11`, `AC-24` with `AC-9`/`T-9`, `AC-25`'s first half, and `AC-21` with `M-5`'s
uniqueness half.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. Every item on the gating list below is a one-sentence answer from the Project Owner: does a
fabricated registration count, who may override and until when, what may an override say, may one person do
both, who is the auditor.** **A further architect document would be analysis substituting for a decision —
AD-01L's own words, applied now for the fifth time.** **And shelving would waste what these two answers have
bought:**

- **A decision point is now NAMED by the owner where the architecture had nothing at all** — the series has
  never modelled an attribution-level override, and it now knows it needs one.
- **The audit-reconstruction requirement is OWNER-RATIFIED IN PRINCIPLE**, which converts every unratified
  link in `Q-AR` from an architectural preference into a stated obligation.
- **`K-18` is CONFIRMED for a FOURTH consecutive document and AD-01K is amended NOWHERE, for a second
  consecutive document.** **`NF-28`'s three conjuncts survive a second round of owner input with no TEST
  changed.**
- **`C-IX`'s §88 bar is NOT engaged** — `PO-Q1` creates a discretionary act, not a precedence rule, so §11
  requires no amendment and `Q0-d` stays off the critical path.
- **`NF-25`'s join shape is reused IN ITS ENTIRETY one layer up**, which is why `PO-Q1·d`'s three
  prohibitions are satisfied structurally rather than by discipline.

### 6.1 The gating list — what must be answered before anything is built

> ⟦ARCHITECT ANALYSIS⟧ **Stated as an explicit, closed, named list, because `VALIDATE` without a gating list
> is indistinguishable from `BUILD NOW` with a caveat.** **Nine items. Every one is an owner answer. NONE is
> answered here and NO default is implied for any of them.** **Gate 1 is stated in the owner's own register
> rather than in architecture labels, because it is the one the owner must actually read.**

| # | Gate | Status |
|---|---|---|
| **1** | ⟦BUSINESS DECISION REQUIRED⟧ **"A channel partner registers a client for a project. The inquiry that partner brought is later closed as a wrong number, a fabricated entry, or not a real opportunity. That same person genuinely inquires later, while the registration is still inside its window. Does that registration still protect the partner, and may it still be used as the basis for their attribution claim on the new inquiry — YES, the closure does not matter; or NO, a registration whose inquiry was closed as never having been a real opportunity is spent and may not be used as an attribution basis?"** | **NOT ANSWERED. TOP OF THE REGISTER for a second consecutive document.** Internally this is **`AC-14`** — [§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not), [§5.3](#53-ac-14-the-question-posed-back-to-the-owner); `A-32`; `L-6`/`K-22` NOT reopened. **Checked clause by clause against both new answers and UNTOUCHED by either** |
| **2** | **`C-XVI` (with `A-39`'s fourth corollary), `P-G` (with `A-38`(b)'s seventh step), `C-XV`, `PF-6` and `PF-23`** — the five limbs of AD-01P gate 2 that `PO-Q2` did NOT discharge | **ALL ARCHITECT DERIVATIONS. ALL UNRATIFIED.** `PO-Q2` discharged the audit-chain limb only — [§3.9](#39-determination-9--ac-26-checked-what-po-q2-answers-and-what-it-does-not) |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, §3.3's minimum field set and §3.4's permission** — this document's own derivations | **ALL UNRATIFIED** — [§5.1](#51-the-ratifications-this-document-itself-requires). **`C-XVIII` is the one with a governance consequence: without it a repeated override IS a systemic precedence rule, which `C-IX` says only a §88 authorization change may create** |
| **4** | **`AC-27`** — may one individual perform both overrides on one outcome; must each be separately reasoned and evidenced; does an attribution override ever imply an eligibility exception | **NOT ANSWERED.** ⟦SOURCE⟧ consolidated **§22** separation of duties. **Left to implementation, one permission and one screen will do both** |
| **5** | **`AC-30`** — what an override's decision may SAY: a different CP, an internal claimant, a vacated attribution, or a party who filed no claim at all | **NOT ANSWERED.** `PO-Q1` states no direction where `PO-N8` stated one. **Branch (d) would let an authorized act attribute to a party with no claim** |
| **6** | **`AC-29`** — until when may an override be performed: before the Booking, after eligibility, after invoice authorization, after payout | **NOT ANSWERED.** **`C-IV` is the only timing bound the sources supply and it bounds the RESOLUTION, not a re-decision.** `PO-Q2·c`'s ordering is a TRACE, not a rule (`PF-34(2)`) |
| **7** | **`AC-28`** and **`AC-31`** — is the evidence asymmetry between the two layers deliberate, and what is *"evidence"*; and who the auditor is, under what permission, with what scope, for how long | **NOT ANSWERED.** **Both are `PO-Q1`/`PO-Q2`'s own consequences and neither is derivable from anything else** |
| **8** | **`AC-25`** (first half — automatic or authorized mint) · **`AC-15`** and **`AC-20`** (CP-vs-CP precedence, a FOURTH consecutive document) · **`AC-12`** as enlarged (revocation and recursion) | **NOT ANSWERED.** **No precedence is invented and `Q-OV` is expressly not a route to one** (`C-XVIII`) |
| **9** | **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s uniqueness half** — AD-01P's operand questions | **NOT ANSWERED, and NONE reached by either new answer.** `Q11` is still BLOCKING |

**What VALIDATE means concretely.**

1. **Take gate 1 first.** ⟦ARCHITECT ANALYSIS⟧ **It is one question, it is written above in the owner's own
   register, and it has been at the top of the register through two documents without being taken.**
2. **Then gates 2 and 3 together** — the five unratified limbs of AD-01P gate 2 and this document's seven
   derivations. **They are one sitting, because `A-38`(b) and `A-39` are extensions of `P-G` and `C-XVI` and
   are meaningless ratified apart from them.**
3. **Then gates 4–8 in the commercial sitting that SIX consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1 and this section.
4. **Ratify or reject `A-36 … A-44` alongside `A-1 … A-35`** (`Q0-e`). **Forty-four unmade amendments across
   ten documents.**
5. **Nothing may be built meanwhile that presupposes an answer.** ⟦SOURCE⟧ consolidated **§30**.
   **Specifically NOT to be built, in addition to everything AD-01P §6.1(4) already lists:** **no attribution
   or clash override record of any kind, no override permission at either layer, no override reason or
   evidence capture, no attachment capability, no override outcome vocabulary, no revocation or
   supersession act, no reconstruction view, report, export, case file or decision-chain object, no
   materialised audit chain, no auditor role or auditor access path, no override marker or flag on any
   registration, claim, claim set, Inquiry or determination, and no precedence, ranking or tiebreak between
   two claims by any route including a repeated override.**

### 6.2 Is the CP architecture now implementation-ready? — **NO**

> ⟦ARCHITECT ANALYSIS⟧ **Stated explicitly and without softening, because *"the owner has answered two more
> questions"* is the easiest thing yet to read as *"it is nearly settled."***
>
> **The CP architecture is NOT implementation-ready, and these two answers do not make it ready.**
>
> **What has changed is real and is worth naming exactly.** **AD-01P reduced the number of possible
> ARCHITECTURES from one-and-a-half to one, and reported that everything remaining except `AC-14` was a
> PARAMETER of that one architecture rather than a choice between two.** **`PO-Q1` adds a COMPONENT to that
> architecture — a decision point it did not have — and `PO-Q2` converts its audit obligations from
> derivations into requirements.** **Neither is a new architecture and neither is a parameter; they are the
> third kind of change, and the register should be read accordingly.**
>
> **The honest arithmetic.** **These two answers CLOSE NOTHING, RATIFY ONE requirement in principle,
> ESTABLISH ONE new mechanism, NARROW ONE item, ENLARGE TWO, RAISE the priority of TWO, ADD FIVE, and
> require NINE amendments across four documents.** ⟦ARCHITECT ANALYSIS⟧ **The register is LARGER after them
> than before them. That is not a criticism of the answers — `PO-Q1` could not have been answered without
> raising `AC-27 … AC-30`, and `PO-Q2` could not have been answered without raising `AC-31` — but it is the
> arithmetic, and a document that reported two owner answers as progress toward readiness without reporting
> the arithmetic would be misleading its reader.**
>
> ⟦SETTLED⟧ **`M-9`, the commission model, still cannot start**, and its consumer list is longer than AD-01P
> left it: it now also consumes `Q-OV`, `Q-AR`, `C-XVII`, `C-XVIII`, `C-XIX` and `AC-27 … AC-31`.
>
> ⟦ARCHITECT ANALYSIS⟧ **One closing observation, offered as an observation and not as an argument for
> building.** **The most valuable thing in `PO-Q1` is not the grant; it is `PO-Q1·d`. An owner who grants a
> power and in the same sentence forbids it mutating three named record classes has done the architect's
> hardest job for them — and the architecture turned out to satisfy two of the three prohibitions already.**
> **The most valuable thing in `PO-Q2` is not the chain; it is that a chain was demanded at all, because a
> demanded chain makes every unratified link in it visible as an obligation rather than as a preference.**
> **Both are good answers. Neither is an approval, and nine more unmade amendments is the unpaid half of
> them.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§6](#6-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being asked
to reconcile two Product-Owner answers is not permission to build what they imply.** ⟦SOURCE⟧ Spec **§88**:
canonical entities, relationships, CP commission logic, authorization rules, source-of-truth rules and audit
requirements are all **MUST ASK BEFORE DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT
EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧ Consolidated **§30**: *"No schema/code implementation should be inferred
from an unresolved product ambiguity."*

**The Project Owner's two decisions are NOT re-argued, NOT weighed and NOT softened anywhere above.** They
are ⟦PRODUCT-OWNER DECISION⟧ throughout, recorded **verbatim** at
[§1.2](#12-the-decisions-recorded-verbatim-before-any-analysis) as `PO-Q1·a … PO-Q1·d` and
`PO-Q2·a … PO-Q2·c` **before any analysis touched them.** Everything the architect adds — **`Q-OV`**,
**`Q-AR`**, the constraints **`C-XVII`**, **`C-XVIII`** and **`C-XIX`**, the findings **`PF-33 … PF-54`**,
the contradictions **`X-23`**, **`X-24`** and **`X-25`**, and the amendments **`A-36 … A-44`** — is
⟦ARCHITECT RECOMMENDATION⟧ or ⟦ARCHITECT ANALYSIS⟧ and is **NOT APPROVED.**

**The headline finding, stated once more because it is the thing the owner most needs to have seen:**
**there are now TWO override-shaped mechanisms in the CP architecture, not one.** **AD-01N's `NF-24`
Commission Eligibility Exception sits at `PO-P10` level 6 and requires a Booking to exist. `PO-Q1`
establishes an override at `PO-P10` level 5, on the attribution/clash decision, where a Booking need not
exist and routinely never will.** **`PO-N8`/`PO-N9` are UNCHANGED, NOT REPEALED and NOT ABSORBED. The two
must never be one artefact, one permission or one record — and whether one person may perform both on a
single commercial outcome is `AC-27`, which is NOT answered here.**

**No prior document is modified.** AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I,
AD-01J, AD-01K, AD-01L, AD-01M, AD-01N, AD-01O and **AD-01P** are all **unedited**, and
[§4.4](#44-no-prior-document-was-silently-edited--determination-16-stated-as-a-checked-fact) states that as
a **checked fact** against the repository's own working tree rather than as an intention. **AD-01N remains at
`VALIDATE` and is not approved; AD-01O remains advisory and is not approved; AD-01P remains at `VALIDATE`
and is not approved.** **The nine amendments this document finds necessary — `A-36 … A-44`, across eleven
limbs and four target documents — are NAMED and NOT MADE, and only the Project Owner may make them.**
`A-1 … A-35` remain named and not made. **The register stands at `A-1 … A-44` across TEN documents, and
this is the first document in the series to amend AD-01P.**

**ONE ARTEFACT IS ADDED BY THIS DOCUMENT, AND IT IS THE OWNER'S AND NOT THE ARCHITECT'S.** ⟦PRODUCT-OWNER
DECISION⟧ **`PO-Q1·c`: *"The override is a separate appended permanent decision record."*** **The necessity
test was still run in full against six candidate existing artefacts — `NF-24` with a widened subject, a
further appended §11 resolution, a new attribution claim, a field on the claim or Inquiry, the `Q6`
correction mechanism, and a marker on the registration — and ALL SIX FAILED**
([§3.1](#31-determination-1--the-necessity-test-run-in-full)). **`I-9`'s no-new-entity standard is therefore
NOT met by this document, and that is reported as a result rather than avoided: `Q-OV` is the SECOND
artefact the test has admitted in eighteen documents, and the FIRST admitted by the owner's own words.**
**`NF-25`'s shape is reused in its entirety one layer up; nothing else is added anywhere.**

**`AC-14` IS NOT ANSWERED BY ANYTHING ABOVE, AND IS NOT ANSWERED BY THE ARCHITECT ANYWHERE.** It was checked
clause by clause against both owner answers at
[§3.7](#37-determination-7--ac-14-revisited-do-po-q1po-q2-answer-it-they-do-not) and found **untouched in
either direction.** **Both readings are recorded at EQUAL STRENGTH and NEITHER is selected.** **`L-6` and
`K-22` are NOT reopened, NOT narrowed and NOT ratified.** **The question is posed back to the Project Owner
in plain language at [§5.3](#53-ac-14-the-question-posed-back-to-the-owner) and leads
[§6.1](#61-the-gating-list--what-must-be-answered-before-anything-is-built)'s gating list.**

**`AC-26` IS CHECKED, FOUND NOT ANSWERED, AND NOT RENUMBERED.** **What `PO-Q2` answers is AD-01P §6.1 gate
2's AUDIT-CHAIN limb — a different register row — and five of that gate's six limbs remain unratified.**
**`AC-26` asks whether a registration's grounding power is single-use or repeatable; `PO-Q2` is about
traceability; the two do not meet.** **`Y-1`, `Y-3`, `AA-1`, `K-26` and `T-5` are likewise NOT resolved,
NOT narrowed and NOT branched.**

**No SQL, schema, migration, master value, column, table, index, constraint or type is authorized by
anything above. No screen, workflow, approval step, queue or gate is designed** (AD-01A §8.5). **No
commission formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule or TDS
treatment appears anywhere — `M-9` owns all of it. No lock-in number, minimum, maximum or default is
proposed. No precedence rule between two CPs is invented, and `C-XVIII` exists precisely to stop one
arriving by accumulation. No re-registration cadence, minimum gap or cap is invented. No Dump-reason value
is proposed. No portal surface or disclosure rule is designed.** **`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`,
`V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `K-26`, `T-5`, `L-6` and `K-22` are NOT reopened — and `K-18`
is CONFIRMED for a FOURTH consecutive document.**

**The Project Owner's decisions are the only authority in this document. Everything else awaits their
signature.**
