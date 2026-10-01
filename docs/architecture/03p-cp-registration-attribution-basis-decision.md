STATUS: PROPOSED — NOT APPROVED

# AD-01P — CP Registration as an Attribution Basis for Later Inquiries: reconciling the Project Owner's grounding decision into AD-01J … AD-01O

**What this document is.** The Project Owner has delivered a **decision** about whether a currently-valid
`CP Project Registration` may be the **basis** for CP attribution on a later Inquiry. That decision is
**authoritative business input.** It is **not re-argued, not weighed against alternatives, and not softened
anywhere below.**

**What this document does.** It reconciles that decision against AD-01J, AD-01K, AD-01L, AD-01M, AD-01N and
AD-01O, and against the whole chain behind them. It determines exactly what the decision settles, what it
settles only in part, what it does **not** settle, and what each prior document would have to be amended to
say before it could be approved alongside it. **Every amendment it finds necessary is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **Section 6's recommendation is advisory.** Nothing below is
self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE` and is not approved; AD-01O
remains advisory and is not approved.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · **AD-01O**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes this decision in its entirety, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including this decision — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

**Numbering discipline, continued without collision.** Findings are **`PF-1 … PF-24`** (AD-01N used `NF-n`,
AD-01O used `OF-n`). New architectural constraints continue the `C` series as **`C-XV`** and **`C-XVI`**.
Contradictions continue AD-01N's and AD-01O's series as **`X-18 … X-24`**. Amendments that are logically
required but deliberately **NOT made** continue as **`A-27 … A-35`** (`A-1 … A-26` remain named and not
made). New open questions continue the `AC` series as **`AC-22 … AC-26`**; **`AC-4` is CLOSED, `AC-13` is
ENLARGED and NOT renumbered, and `AC-14` is RESTATED and NOT renumbered.** The grounding rule recommended
below is labelled **`P-G`**.

> ⟦ARCHITECT ANALYSIS⟧ **One collision warning, stated once.** **`P-G` is the architect's label for the
> grounding rule in [§3.1](#31-determination-1--the-registration--attribution-pathway). It is NOT a member
> of AD-01K §4.5's Greek-lettered parameter set `P-α` (class map), `P-β` (scope), `P-γ` (horizon) and
> `P-δ` (mode), none of which is renumbered here.** Three of those four are affected by this decision and
> they are addressed under their own names in [§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes).

**Scope discipline, stated once and honoured throughout.** No SQL, schema, table, column, migration, master
value or type appears anywhere. No screen, workflow, approval step or gate is designed (AD-01A **§8.5**).
**No commission formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule or
TDS treatment appears anywhere — `M-9` owns all of it. No lock-in number, minimum, maximum or default is
proposed. No precedence rule between two CPs is invented. No re-registration cadence, minimum gap or cap is
invented. No Dump-reason value is proposed.** **`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-11`, `V-12`,
AD-01J's `J-2` and AD-01K's `K-18` attribution anchor are NOT reopened — and `K-18` is CONFIRMED for a third
consecutive document.** **`K-26` and `T-5` are preserved exactly and NOT reopened.** **No unrelated open item
is resolved** — `AA-1`, `AA-3`, `AA-5`, `AB-1 … AB-3`, `N-4`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`, `Q10`,
`V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half and `M-9` all carry
forward unchanged.

---

## 1. Source and confirmed business rules

### 1.1 The source of this decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-1` — recorded first because the provenance changes how the rest of the chain
> must be read.**
>
> **AD-01N §L.3 raised `AC-4`. AD-01O §5.3 restated it after eliminating one of its two readings. Both
> documents recorded that `AC-4`'s residue was identical with AD-01L's `B-2` and with AD-01M's `Q1`, and
> AD-01O recorded that it had *"gone UNANSWERED FOR SEVEN CONSECUTIVE DOCUMENTS."*** AD-01O §6 named it as
> the second item the owner should take, immediately after ratifying `O-U`.
>
> **The decision reconciled below is the owner's answer to it.** It is not a clarification of AD-01O, not a
> refinement of AD-01N, and not new scope. **It is the missing answer that AD-01J §5.3, AD-01K §4.5,
> AD-01L §14.2, AD-01M §12.1, AD-01N §L.3 and AD-01O §5.3 each referred to the owner in turn.**

### 1.2 The decision, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened or treated as an option. Clauses are numbered `PO-P1 … PO-P12` so the rest of the
> document can cite them precisely. The numbering is the architect's; the content is the owner's.**

#### 1.2.1 The grant

| # | Clause |
|---|---|
| **PO-P1** | **A currently-valid CP Project Registration MAY be the basis for CP attribution on a later inquiry, for the same client/project, subject to normal attribution/clash rules.** |

#### 1.2.2 The three things the grant is NOT

| # | Clause |
|---|---|
| **PO-P2** | **Registration is NOT automatic attribution.** |
| **PO-P3** | **Registration is NOT automatic commission eligibility.** |
| **PO-P4** | **Registration is NOT automatic clash winner.** |

#### 1.2.3 Validity, expiry and what creates a registration

| # | Clause |
|---|---|
| **PO-P5** | **Expired registrations cannot establish new attribution claims.** |
| **PO-P6** | **Revisits do not reset registration validity.** |
| **PO-P7** | **Only explicit helpdesk actions create new registrations.** |

#### 1.2.4 Re-registration, same CP and different CP

| # | Clause |
|---|---|
| **PO-P8** | **Same-CP re-registration after expiry creates a NEW immutable registration record with a NEW date and a NEW protection window; the prior registration becomes historical.** |
| **PO-P9** | **Different-CP registration creates a SEPARATE registration record; an expired registration from a prior CP does NOT support a new CP's attribution.** |

#### 1.2.5 The seven levels the architecture must keep apart

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` — the architecture must distinguish, and never conflate:**
>
> | # | Level | The owner's own characterisation |
> |---|---|---|
> | 1 | **Client** | **long-lived** |
> | 2 | **Helpdesk Revisit** | **does NOT reset CP registration** |
> | 3 | **CP Project Registration** | **a fixed commercial record** |
> | 4 | **Inquiry** | **a later interest event** |
> | 5 | **Attribution** | **the resolved claim** |
> | 6 | **Commission Eligibility** | **a separate downstream determination** |
> | 7 | **Commission Override** | **an authorized action** |

#### 1.2.6 The auditability requirement

| # | Clause |
|---|---|
| **PO-P11** | **An Inquiry must explicitly reference the CP Project Registration record that supplied its attribution basis, for auditability and reconstruction.** |

#### 1.2.7 The cardinality restatement

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P12`, verbatim in substance:**
>
> **Multiple historical registrations for the same `CP × Client × Project` triple are allowed; at most one
> may be currently-live per triple at any instant; an inquiry's attribution must be TRACEABLE to the
> specific registration record that grounded it.**

### 1.3 What this decision does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9` (AD-01N §B) and `PO-O1 … PO-O14` (AD-01O §1) are untouched except where this
> decision restates one of them, and every one of them remains in force.** In particular:
>
> | Prior clause | Status after this decision |
> |---|---|
> | **`PO-N3`** — the CP cannot reset, restart, refresh or extend the window | **UNCHANGED. Not relaxed anywhere below, and no mechanism that would relax it is proposed, designed or implied.** |
> | **`PO-N4`** — re-registration, follow-ups, site visits, activities, transfers and other subsequent events must NOT reset the original registration date | **UNCHANGED.** |
> | **`PO-N5`** — Booking Date − CP Registration Date, against the Project's configured period | **UNCHANGED. It is the eligibility test and this decision does not touch it.** |
> | **`PO-N7`** — a booking after the window is normally NOT commission-eligible | **UNCHANGED, and `PO-P3` independently reinforces it.** |
> | **`PO-N8`/`PO-N9`** — the Site Head exception and its nine requirements | **UNCHANGED. `PO-P10` level 7 names it as a separate level, in the owner's own words.** |
> | **`PO-O6`** — the existing registration window is NOT reset or extended by a revisit | **RESTATED as `PO-P6` and therefore CONFIRMED TWICE.** |
> | **`PO-O9`/`PO-O10`** — a genuinely new registration after expiry creates a new record; the previous record is not modified and remains immutable historical data | **RESTATED as `PO-P8` and therefore CONFIRMED TWICE.** |
> | **`PO-O11`** — Client ≠ Helpdesk visit/revisit ≠ CP Project Registration | **RESTATED AND EXTENDED by `PO-P10`, from three levels to seven.** |
> | **`PO-O12·a … d`** — the four prohibitions on inference | **UNCHANGED. `PO-P7` restates `PO-O12·d`'s substance.** |
> | **`PO-O13`/`PO-O14`** — no automatic commission; Registration ≠ Attribution ≠ Eligibility ≠ Payout | **RESTATED as `PO-P2`/`PO-P3` and EXTENDED by `PO-P4`, which adds a fourth non-automaticity the owner had not previously stated.** |

---

## 2. The existing architecture baseline this decision lands on

> ⟦SETTLED⟧ **Recorded so the decision can be checked against the architecture rather than substituted for
> it. Nothing in this section is new and nothing in it is reopened.**

### 2.1 The objects, and what each is permitted to own

| Object | Owns, for attribution and commission purposes | Explicitly does NOT own | Source |
|---|---|---|---|
| **Person** | Identity; the subject of §09 duplicate detection | **No claim. No source. No commercial fact** | ⟦SOURCE⟧ **§06**, **§07**; `K-38` |
| **Lead / work record** | Relationship continuity; custody; handler; the activity timeline; a **derived** first-source that is not a claim and not a commission input | **No claim. No persisted source. No commercial attribution fact** | `V-1` (approved); `G-1`; `J-36`; `K-16` |
| **Inquiry** | **The commercial unit.** Immutable origination facts; the **attribution claim set**, append-only and never overwritten; the resolved attribution; the §11 clash scope; the conversion reference | The milestone. The money. The handler | `V-1`; `J-34`; `K-17`; `K-18` |
| **Lead Attribution Claim** | One producer's assertion about **one Inquiry's** origin | Anything about any other Inquiry | ⟦SOURCE⟧ **§06**, **§11**; `K-18`; `K-52`; `B-1` |
| **CP Project Registration** | *"On this date, the Helpdesk registered this client against this CP for this Project, and the protection period then in force for that Project was N."* **Nothing else** | **NOT a claim. NOT the attribution anchor. NOT a lifecycle. NOT a state** | AD-01N `NF-6` (**recommended, NOT approved**), cardinality amended by AD-01O `O-U` (**recommended, NOT approved**) |
| **Assignment Log** | Custody, the with/without-history conferral decision, and management intent | **No claim. Ever** | `G-9`; `I-8`; `K-15` |
| **Booking / transaction identity** | The §32 milestone; §33 clawback's subject; §25/§26 amendment history | **No claim.** It cannot say who produced the engagement | `K-47` |
| **CP Ledger** | The brokerage/commission accounting record **for the CP relationship** — the payee identity | Not a per-client, per-project fact | ⟦SOURCE⟧ **§06**; `K-42`; `K-48` |
| **Project** | The development. Tenant-scoped; the unit of **R12** isolation and **§08** scoped access | — | ⟦SOURCE⟧ **§06**, **§08**; **R12** |

### 2.2 The decisions this grant has to live inside

| # | Decision | Status here |
|---|---|---|
| **`K-18`** | ⟦ARCHITECT RECOMMENDATION⟧ The attribution claim attaches to **the Inquiry, and to nothing else** | **Adopted. NOT reopened. CONFIRMED — see [§3.14](#314-determination-14--ad-01ks-separation-of-attribution-anchor-from-eligibility-anchor).** |
| **`K-17`** | ⟦ARCHITECT RECOMMENDATION⟧ Origination facts are immutable; the claim set is **append-only and never overwritten** | **Adopted. NOT reopened. It is what makes a minted claim representable at all.** |
| **`K-48`** | ⟦ARCHITECT RECOMMENDATION⟧ Commission eligibility is a **JOIN, never a single anchor** — the resolved claim on the converting Inquiry **AND** the surviving transaction identity at its §32 milestone | **Adopted, as EXTENDED by `NF-28` to three conjuncts. NOT contradicted. See [§3.13](#313-determination-13--commission-independence-from-the-triple-alone).** |
| **`B-1`** | ⟦ARCHITECT RECOMMENDATION⟧ *"No claim, resolved attribution, entitlement, adjudication, source, campaign, channel, priority or disposition **recorded on a terminal Inquiry** has any effect whatsoever on any other Inquiry."* | **Adopted. NOT violated — and this decision does not come near it. See `PF-16`.** |
| **`B-2`** | ⟦ARCHITECT RECOMMENDATION⟧ Whether the system may, at a later Inquiry's origination, **MINT A NEW CLAIM** on it naming an earlier producer and carrying a **citation** as its stated ground | **PARTLY ANSWERED by this decision — the precise accounting is [§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes).** |
| **`C-I … C-IV`** | ⟦ARCHITECT RECOMMENDATION, AD-01J `J-31`⟧ classification-sensitivity · future-credit-only · determinate predecessor · resolution before the milestone | **Adopted. `C-II` and `C-IV` unchanged and load-bearing. `C-I` and `C-III` require amendments, named at `A-31` and discussed at [§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes).** |
| **`C-V … C-VII`** | ⟦ARCHITECT RECOMMENDATION, AD-01K `K-20`⟧ recorded appended claim · determination at the gate · a new derived claim, never the old one moving | **Adopted, with `A-11`'s refined `C-VI` reading. All three become OPERATIVE rather than hypothetical for the first time — [§3.2](#32-determination-2--a-new-mechanism-or-an-existing-one).** |
| **`C-VIII`** | ⟦ARCHITECT RECOMMENDATION, AD-01L⟧ a horizon is measured from the cited predecessor Inquiry's own terminal closure event, **and from nothing else** | **CONTRADICTED a second time and in a new way — `X-19`, `A-30`. AD-01L is NOT edited.** |
| **`C-IX`** | ⟦ARCHITECT RECOMMENDATION, AD-01L⟧ a **binding systemic precedence** rule between two claims is a **§88 authorization change to §11**, not a commission setting | **Adopted, and SATISFIED WITHOUT AMENDMENT by `PO-P4` — [§3.10](#310-determination-10--clash-handling). This is the largest governance gain in this document.** |
| **`C-X`** | ⟦ARCHITECT RECOMMENDATION, AD-01L⟧ a citation's stated ground must be a fact that cannot subsequently change | **Adopted, and SATISFIED by a specific registration record — `NF-6`, `OF-14(2)`, `A-21`.** |
| **`C-XI`** | ⟦ARCHITECT RECOMMENDATION, AD-01N⟧ the registration is a **TEMPORAL PROTECTION** fact and must never become an **ATTRIBUTION** fact | **Adopted, NOT breached, and its survival is the whole architectural question this document has to answer — [§3.14](#314-determination-14--ad-01ks-separation-of-attribution-anchor-from-eligibility-anchor). `A-20`'s re-labelling carries forward.** |
| **`C-XII`** | ⟦ARCHITECT RECOMMENDATION, AD-01N⟧ an override must never be routed through the `Q6` correction mechanism | **Adopted, untouched. `Q6`, `T-6`, `T-7`, `T-8` NOT reopened.** |
| **`C-XIII`** | ⟦ARCHITECT RECOMMENDATION, AD-01O⟧ **only an explicit registration act creates a registration**; expiry never does | **Adopted — and `PO-P7` states its substance in the owner's own words. → `A-27`.** |
| **`C-XIV`** | ⟦ARCHITECT RECOMMENDATION, AD-01O⟧ a Helpdesk interaction, including identification of an existing Client, is **never an input to a commercial determination** | **Adopted, NOT breached, and it is what keeps `PO-P1` safe — [§3.6](#36-determination-6--revisit-non-reset-confirmed-against-ad-01os-derived-activity-finding).** |
| **`O-U`** | ⟦ARCHITECT RECOMMENDATION, AD-01O⟧ at most ONE protection-bearing registration per triple **at any instant**; the triple carries an ordered, non-overlapping SEQUENCE | **Adopted — and `PO-P12` states it in the owner's own words. → `A-28`.** |
| **`NF-28`** | ⟦ARCHITECT RECOMMENDATION, AD-01N⟧ the eligibility test's three conjuncts (i) WHO, (ii) WHETHER AND WHEN, (iii) STILL WITHIN PROTECTION | **Adopted. CONFIRMED under the selected reading. But it acquires a second consumer of the registration sequence — `X-22`, `AC-22`.** |

### 2.3 The one question the chain left open, and which this decision answers

> ⟦ARCHITECT ANALYSIS⟧ **`PF-2` — stated here so that [§3](#3-the-reconciled-architecture)'s determinations
> are read as answers to a registered question rather than as new scope.**
>
> AD-01O §2.10 step 3 enumerated a reading AD-01N had not:
>
> > **Reading H:** *"The registration is a filter on eligibility **AND an admissible GROUND on which an
> > attribution claim naming that CP may be MINTED on a later Inquiry that CP did not originate** — such a
> > claim then being adjudicated under §11 like any other claim, and **capable of LOSING**."*
>
> **`PO-P1` grants the ground. `PO-P4` supplies the capability of losing. `PO-P2` forbids the automaticity.
> `PO-P3` forbids the eligibility shortcut.** ⟦ARCHITECT ANALYSIS⟧ **The owner's four clauses are Reading H
> clause by clause, and the correspondence is exact rather than approximate.** →
> [§3.0](#30-the-headline-finding-ac-4-is-answered).

---

## 3. The reconciled architecture

> ⟦ARCHITECT ANALYSIS⟧ **The eighteen determinations the task requires are made in order, each numbered as a
> subsection. Where a determination cannot be made from the sources, it is left open and named, and nothing
> is guessed.**

### 3.0 The headline finding: `AC-4` is answered

> ⟦ARCHITECT ANALYSIS⟧ **`PF-3` — the precise accounting, stated before anything is built on it.**
>
> | `AC-4`'s sub-question, as AD-01O §2.10 step 2 stated it | Status before | Status now |
> |---|---|---|
> | Does a live registration, ALONE, produce **commission**? | ANSWERED: NO (`PO-O13`) | **UNCHANGED — and restated by `PO-P3`.** |
> | Does a live registration, ALONE, produce **commission eligibility**? | ANSWERED: NO (`PO-O14`) | **UNCHANGED — and restated by `PO-P3`.** |
> | Is **Reading G** still available? | ELIMINATED by the owner | **UNCHANGED. Still eliminated. `X-4` stays DISCHARGED and `A-23` carries forward.** |
> | Is the window test a **necessary** condition on eligibility? | ANSWERED IN SUBSTANCE: YES (`PO-N6`/`PO-N7`) | **UNCHANGED.** |
> | Does a live registration, ALONE, produce an **ATTRIBUTION CLAIM**? | **NOT ANSWERED — the residue** | ⟦PRODUCT-OWNER DECISION⟧ **ANSWERED: it produces an ADMISSIBLE BASIS for one, and not the claim itself. `PO-P1` + `PO-P2`.** |
>
> **Therefore: `AC-4` is CLOSED. Reading F is not selected. Reading H is selected.** →
> **`X-18`**, **`A-29`**.
>
> **And with `AC-4` closes the item behind it.** ⟦SETTLED⟧ AD-01M's **`Q1`** — *"may the system ever create a
> claim on a later inquiry, naming a partner, because of an earlier closed inquiry — yes or no?"* — has been
> the highest-leverage question in the register since AD-01M §14 Step 2. **It is answered YES, with the
> ground changed.** [§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes) states
> exactly how much of `B-2` that closes, and exactly how much it does not.

> ⟦ARCHITECT ANALYSIS⟧ **`PF-4` — the single most load-bearing clause in the decision is `PO-P4`, and not
> `PO-P1`. This is the finding on which every other finding in this document depends, and it is worth
> stating before anything else is derived.**
>
> **AD-01N's `C-XI` exists to prevent one specific failure: the registration becoming a second commercial
> anchor.** AD-01K's **Candidate A** and AD-01L's **Alt 4** were each eliminated for being exactly that, and
> AD-01N's `X-4` recorded the threat as conditional on Reading G. **Reading H reopens the question in a
> subtler form: if a live registration reliably produces a claim, and that claim reliably wins, then the
> triple has become the anchor by behaviour even though `K-18` is intact on paper.**
>
> **The discriminator between a GROUND and an ANCHOR is falsifiability, and it is the only discriminator
> there is.**
>
> | | An **anchor** | A **ground** |
> |---|---|---|
> | Can it lose? | **No.** An anchor that can lose is not an anchor | **Yes** |
> | Who adjudicates? | Nobody — it is read | **Builder-side authorized leadership, under §11** (⟦SOURCE⟧ **§11**, `PO-1`) |
> | What does it produce? | The answer | **A claim, which is an input to the answer** |
> | What happens if a competing producer filed first? | It is displaced | **It contests, and may lose** (`K-12`, `K-52`) |
>
> **`PO-P4` — *"Registration is NOT automatic clash winner"* — is precisely the falsifiability clause.**
> Without it, `PO-P1` and Reading G would be observationally identical in every case where no competing
> claim exists, and `C-XI` would be breached in practice while intact in wording. **With it, `K-18`
> survives not as a formality but as a live property: the answer-bearer for *"who produced this Inquiry?"*
> is still the resolved claim, and the registration is only one of the things a claim may cite.**
>
> ⟦ARCHITECT RECOMMENDATION⟧ **This is why [§5.1](#51-the-ratifications-this-document-itself-requires)
> asks the owner to ratify `C-XVI` explicitly: the entire safety of `PO-P1` rests on minted claims being
> ordinary claims in every respect, and the natural implementation shortcut — giving a registration-grounded
> claim a default win, a presumption, a tiebreak or a privileged resolution path — would convert `PO-P1`
> into Reading G by the back door, exactly as `C-XI` feared and by a route `C-XI`'s wording does not reach.**

### 3.1 Determination 1 — the registration → attribution pathway

> ⟦ARCHITECT RECOMMENDATION — `P-G`, the grounding rule⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S
> EXPLICIT WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK:
> canonical entities, relationships, CP commission logic, authorization rules, source-of-truth rules, audit
> requirements. **This is stated as a BUSINESS RULE. No schema, table, column, index, query or type is
> proposed, implied or derivable from it.**)*
>
> **`P-G` — the six steps, in order, with the acting party and the governing rule named at each.**
>
> | Step | What happens | Who acts | Governed by |
> |---|---|---|---|
> | **1** | **An expression of interest arrives.** If **no** non-terminal Inquiry on that work record covers it, a **new Inquiry** originates, with its own origination facts and its own claim set. If a non-terminal Inquiry **does** cover it, **no new Inquiry opens** and the expression is an activity on that Inquiry | The customer | ⟦ARCHITECT RECOMMENDATION⟧ **`J-2`**, as bounded by **`K-50`**. **NOT amended, NOT narrowed, and NOT given a new input** — see `PF-6` |
> | **2** | **The arriving registration reaches the server-side duplicate/clash gate.** Online, that is origination; offline, it is sync-arrival | The system | **`C-VI`** in **`A-11`**'s refined reading. ⟦SOURCE⟧ **§12**: *"Never pretend an offline lead has passed the server-side clash gate."* **Which date this is, is `AC-24`** |
> | **3** | **The grounding test runs**, at that gate's own civil date `G`: **does a `CP Project Registration` exist for `(CP c, this client, THIS Inquiry's Project)` whose window contains `G`?** Under **`O-U`** at most one can, per CP | The system | **`PO-P1`** (*"currently-valid"*, *"same client/project"*); **`O-U`**; `NF-8`/`NF-10`; `AC-6`, `AC-8` |
> | **4** | **If it does, that registration is an ADMISSIBLE GROUND.** A claim naming CP c **MAY** be recorded on that Inquiry, carrying as its stated ground a **citation of that specific registration RECORD** — never of the triple | ⟦BUSINESS DECISION REQUIRED — **`AC-25`**: automatically, or by an authorized discretionary act?⟧ | **`PO-P1`**; **`C-V`** (recorded, appended, by an explicit authorized act); **`C-VII`** (a new derived claim, never the earlier fact moving); **`C-X`** + **`A-21`** (the ground must be a specific immutable record) |
> | **5** | **The minted claim enters the Inquiry's claim set as an ORDINARY CLAIM** — append-only, never overwritten, visibly distinguishable from a producer-filed claim, and **adjudicated under §11 by builder-side authorized leadership, which it may LOSE** | Builder-side authorized leadership | **`PO-P2`**, **`PO-P4`**; **`K-17`**; **`K-12`**/**`K-52`**; **`L-25`**; ⟦SOURCE⟧ **§11**; **`C-IX`** (contest branch); **`C-XVI`** |
> | **6** | **If and only if the claim is RESOLVED IN CP c's FAVOUR on an Inquiry that CONVERTS**, eligibility is then tested — and it is still the three-conjunct join, unchanged | Accounts / the eligibility authorization | **`PO-P3`**; **`K-48`** as extended by **`NF-28`**; **`PO-N5 … PO-N7`**; the Site Head exception at **`NF-24`** |
>
> **`P-G` adds NOTHING to the model that AD-01L's Alt 2 did not already require. It substitutes one ground
> for another.** [§3.2](#32-determination-2--a-new-mechanism-or-an-existing-one).

> ⟦ARCHITECT ANALYSIS⟧ **`PF-5` — the pathway's shape has a consequence that AD-01N §F.1 could not have
> anticipated, and it is the sharpest new finding in this document. It is stated here because every later
> section depends on it.**
>
> **The registration sequence is now consulted TWICE, at TWO DIFFERENT DATES, for TWO DIFFERENT PURPOSES:**
>
> | Consumer | Question it asks | Date it asks at | Which registration answers |
> |---|---|---|---|
> | **The minting gate** (`P-G` step 3) | *"May a claim naming CP c exist on this Inquiry at all?"* | **`G`** — the gate-evaluation date (`AC-24`) | The one whose window contains **`G`** |
> | **Eligibility conjunct (iii)** (AD-01N §F.1, as amended by `A-16`) | *"Is CP c within protection for this booking?"* | **`B`** — the booking date (`AC-5`) | The one whose window contains **`B`** |
>
> **Under `O-U` the triple carries a SEQUENCE, so `G` and `B` need not fall in the same registration — and
> they need not fall in any registration at all.** Four configurations are reachable and all four are
> ordinary rather than exotic:
>
> 1. **`G` and `B` in the same registration.** The cited record and the consulted record coincide.
>    **Determinate, and this is the common case.**
> 2. **`G` in registration #1, `B` in registration #2** (the CP let #1 lapse and re-registered — `PO-P8`).
>    **The claim cites #1; conjunct (iii) reads #2, which has a different `R` and possibly a different `N`.
>    Nothing in AD-01N, AD-01O or the owner's decision says which governs.**
> 3. **`G` in registration #1, `B` in the GAP after it.** **The claim was validly minted, may have WON at
>    §11, and conjunct (iii) then FAILS.** `PO-N7` applies and the only route to payment is a Site Head
>    exception (AD-01N §H).
> 4. **`G` in no registration at all.** **No ground, no mint. `PO-P5`.** The Inquiry carries only the claims
>    filed on it directly.
>
> **Configuration 3 is the sharpest available demonstration of `K-9` — *winning attribution and being paid
> are different outcomes* — and Reading H is the first rule in the series that makes it routine rather than
> exceptional.** ⟦ARCHITECT ANALYSIS⟧ **Configuration 2 is a genuine gap. It is NOT resolved here and
> nothing is guessed.** → **`X-22`**, **`A-29`**, **`AC-22`**.

> ⟦ARCHITECT RECOMMENDATION — `C-XV`, a constraint⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: CP commission logic, source-of-truth rules.)*
>
> **`C-XV` — The MINTING test and the ELIGIBILITY test are two distinct evaluations, over the same
> registration sequence, at two different dates, answering two different questions. Neither may be
> substituted for, cached as, or inferred from the other.**
>
> **Specifically:**
> 1. **A successful minting test is not a passed eligibility test.** It says a claim may exist; it says
>    nothing about whether a booking that has not yet happened will fall inside any window.
> 2. **A failed eligibility test does not invalidate a minted claim.** The claim records who was credited;
>    `K-17` makes it append-only and ⟦SOURCE⟧ **R6** forbids editing history. Conjunct (iii) fails on the
>    determination, not on the claim (`NF-19(5)`: the determination is appended, never recomputed over the
>    top of a prior one).
> 3. **Neither result may be stored on the registration.** The registration *"has no states"* (AD-01N §C.4)
>    and acquires none here. **No `grounded`, `consumed`, `used`, `spent` or `expired` marker of any kind is
>    proposed, designed or implied.**
>
> **Why this must be a stated constraint.** **The two tests share three of their four operands and differ
> only in a date.** The natural implementation shortcut is to evaluate once and reuse — and evaluating once
> **merges conjunct (i) with conjunct (iii)**, which **`C-XI`** and **`NF-28`** both forbid in terms.
> **`C-XV` is `C-XI`'s prohibition restated at the one place where Reading H makes it reachable.**

### 3.2 Determination 2 — a NEW mechanism, or an existing one?

> ⟦ARCHITECT ANALYSIS⟧ **`PF-6` — the answer is REUSE, and the necessity test that AD-01I `I-9` set and
> AD-01O `OF-6` most recently applied is run in full rather than asserted. It FAILS against every candidate
> new artefact, which means the series' no-new-entity record is unbroken by this decision.**

**Step 1 — what the pathway needs, fact by fact, and where each already lives.**

| Fact `P-G` requires | Existing home | Established by | New? |
|---|---|---|---|
| A claim naming CP c, on the later Inquiry | The Inquiry's **attribution claim set** | `K-18`, `K-17`, `J-34` | **No** |
| That the claim was **minted**, not filed | A property **of the claim** — its stated ground | `C-V`, `C-VII`, `A-9`; `L-25` requires it to be distinguishable | **No** |
| **Which** registration grounded it | The claim's **citation**, naming a specific record | `C-X` + `A-21` | **No** |
| That a registration existed and was live at `G` | The **`CP Project Registration`** and its `(R, N)` | AD-01N `NF-6`; AD-01O `O-U`, `OF-5` | **No — already proposed by AD-01N, not added here** |
| The act that minted it, its actor and its authorization | An **audit event** carrying actor, action, time, target, authorization context and **system/human origin** | ⟦SOURCE⟧ **§54**; **R6**; AD-01N `NF-27` | **No — `NF-27` needs one more event (`A-28`), not a new artefact** |
| The adjudication | The ordinary **§11** resolution, appended, never overwriting | ⟦SOURCE⟧ **§11**; AD-01 §D.4; `K-12` | **No** |

**Step 2 — the candidate new artefacts, each tested and each failing.**

| # | Candidate | Verdict | Why |
|---|---|---|---|
| **(a)** | **A new `Registration-Derived Claim` entity, distinct from a `Lead Attribution Claim`** | **FAILS** | ⟦SOURCE⟧ **§06** already makes `Lead Attribution Claim` canonical and **§11** requires *"record **each** attribution claim"* without distinguishing who filed it. **A separate entity would put minted and filed claims in two populations, which makes the §11 clash test — *do two claims name the same engagement?* — run over a union rather than a set, and `K-52`'s single clash scope would have two halves.** **`A-9` already found the cheap form: the citation is a property of an ordinary claim.** |
| **(b)** | **An `Inquiry → Registration` reference on the Inquiry** | **FAILS on the multi-CP case — see [§3.11](#311-determination-11--inquiry-linkage-and-the-citation-carrier)** | Two CPs may each hold a live registration over one `(client, Project)` (`O-U`(5), `AC-20`). **One Inquiry-level reference cannot carry two grounds, and the moment it is made repeatable it IS the claim's citation under another name.** |
| **(c)** | **A `grounding` or `consumption` marker on the registration** | **FAILS, and is forbidden** | AD-01N §C.4: the registration *"has no states."* `OF-5`: liveness is derived and nothing is ever written to a registration. **`C-XV`(3).** |
| **(d)** | **An `Inquiry → Inquiry` succession reference (`AA-4`'s original form)** | **NOT REQUIRED on this pathway** | The ground is a **registration**, not a predecessor Inquiry. **No Inquiry succeeds any other Inquiry under `P-G`.** `AA-4` is therefore **NARROWED to the closure-grounded branch** — [§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes). → **`A-33`** |
| **(e)** | **A new `Attribution Basis` object sitting between the registration and the claim** | **FAILS the necessity test** | Every fact it would carry is either the registration's or the claim's. It would be **a third source of truth for a fact two records already hold jointly** — the identical objection sustained at AD-01A §3.6/§5.2, `G-9`, `G-8`, `J-36` and `OF-6`. |

> ⟦ARCHITECT RECOMMENDATION — `PF-6`, conclusion⟧ *(RECOMMENDED, SUBJECT TO EXPLICIT WRITTEN APPROVAL.
> **NOT APPROVED.** **No entity is proposed. This is a recommendation that NOTHING be added.**)*
>
> **The registration → attribution pathway REUSES AD-01L's `B-2` citation mechanism in its entirety,
> substituting the `CP Project Registration` record for the closed predecessor Inquiry as the citation's
> ground. It is AD-01L's Alt 2 — *"impermeable to claims, open only to citation"* — with a different,
> and structurally better-behaved, ground.**
>
> **Better-behaved in three specific respects, and this is a material finding rather than a compliment:**
>
> 1. **`B-1` is not merely respected; it is not engaged.** AD-01L's Alt 2 cited a **terminal Inquiry**, which
>    required `B-1` to be carefully not-violated by the citation being a *new* claim rather than the old one
>    moving. **A registration was never recorded on any Inquiry at all** (`NF-9`), **so nothing crosses a
>    terminal boundary, because nothing that could cross it was ever on one.** `NF-9`'s structural payoff is
>    re-tested here for a third time and holds for a third time.
> 2. **`C-X` is satisfied more strongly than by a closure.** A closure's reason is immutable but its
>    *classification framework* is `N-4`'s and does not yet exist; a registration's `R` and snapshotted `N`
>    are immutable, exist at creation, and are `N-4`-independent.
> 3. **`C-III`'s determinacy is free rather than expensive.** AD-01K `K-21`(a) priced the yes-branch at
>    *"`AA-4`'s succession reference."* **Under `P-G` there is nothing to succeed** — the ground is a record
>    that already has its own identity — **so `K-21`'s first cost is not incurred on this pathway.**
>
> **No new canonical business object is necessary, and none is proposed. AD-01I `I-9`'s standard is MET for
> the eighth consecutive document.**

### 3.3 Determination 3 — multi-registration handling

> ⟦ARCHITECT ANALYSIS⟧ **`PF-7` — `PO-P12` states AD-01O's `O-U` in the owner's own words, and adds one
> clause `O-U` did not have.**
>
> | `PO-P12`'s clause | `O-U`'s corresponding clause | Status |
> |---|---|---|
> | *"Multiple historical registrations for the same triple are allowed"* | `O-U`(3) and `O-U`(4) | **CORROBORATED.** The owner now states directly what AD-01O derived. |
> | *"At most one may be currently-live per triple at any instant"* | `O-U`(1) | **CORROBORATED, verbatim in substance — including the words *"at any instant,"* which were the hinge of `OF-3`'s correction of AD-01N's `X-9`.** |
> | *"An inquiry's attribution must be traceable to the specific registration record that grounded it"* | **Nothing in `O-U`** | **NEW. This is `A-21`'s requirement stated as a business rule, and it extends `O-U` from a cardinality rule to a cardinality-plus-traceability rule.** → **`A-28`** |

**How multiplicity resolves at each of the pathway's decision points.**

| Question | Answer | Basis |
|---|---|---|
| The triple holds four historical registrations and one live one. Which grounds a mint at `G`? | **The one whose window contains `G`. Under `O-U` at most one can, so the lookup is UNIQUE when it succeeds and EMPTY when it fails.** **The LATEST registration is not the applicable one; the CONTAINING one is** | `O-U`(1), `OF-4`; `PO-P1` (*"currently-valid"*) |
| All of the triple's registrations have expired. | **No ground. No mint.** `PO-P5` | `PO-P5`; `O-U` |
| `G` falls in a **gap** between two registrations. | **No ground. No mint, permanently, for that Inquiry** — see `PF-11` | `PO-P5`; `C-VI` |
| Two registrations of the **same** CP could both contain `G`. | **Structurally impossible. `O-U` guarantees non-overlap per triple, which is precisely why the minting test needs no tiebreak and none is invented** | `O-U`(1), `OF-4`; `NF-19(7)` |
| Two **different** CPs each hold a live registration containing `G`. | **BOTH are admissible grounds. Two claims may be minted on one Inquiry, which is the literal §11 predicate. `PO-P4` forbids either winning by rule.** **Whether the second registration may exist at all is `AC-20`; who wins is `AC-15`. Both OPEN, neither answered** | `O-U`(5); `C-IX`; ⟦SOURCE⟧ **§11**; `AC-15`, `AC-20` |
| May **one** live registration ground claims on **several** Inquiries inside its own window? | ⟦BUSINESS DECISION REQUIRED⟧ **NOT STATED and NOT INVENTED.** `PO-P1` says a registration *"may be the basis for CP attribution on a later inquiry"* — singular, and it does not say whether the grounding power is single-use or repeatable | → **`AC-26`** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-8` — why `AC-26` is not pedantry.** ⟦SETTLED⟧ **`Y-1`** (may two Inquiries on one
> record be simultaneously non-terminal) and **`AA-1`** (does unit type / configuration individuate an Inquiry
> within one Project) are **both open**, and under some of their answers **two live Inquiries on the same
> `(client, Project)` are ordinary rather than exceptional.** **One live registration would then ground a
> claim on each, and the CP would hold two minted claims from one registration act.** ⟦SOURCE⟧ **§11** names
> attribution manipulation as a live risk in its own words, and `L-13` priced registration volume converting
> into forward options. **`AC-26` decides whether one registration is one option or several. `Y-1` and `AA-1`
> are NOT resolved, NOT narrowed and NOT branched here; they are named as newly coupled to `AC-26`.**

### 3.4 Determination 4 — validity-window confirmation

> ⟦ARCHITECT ANALYSIS⟧ **`PF-9` — *"currently-valid"* is not a new concept and must not be built as one.**
>
> **`PO-P1`'s *"currently-valid"* is `O-U`'s *"protection-bearing"* and AD-01N's *"live,"* evaluated at the
> minting gate's date rather than at a booking date. It is the SAME function of the SAME three operands:**
>
> > **live(registration, D) = the registration's fixed date `R` and its snapshotted lock-in `N` place `D`
> > inside its window under the ratified boundary convention.**
>
> **Four properties carry over from `OF-5` unchanged, and each is load-bearing here:**
>
> 1. **No registration ever acquires an *expired* state, and nothing is written to a registration when its
>    window lapses.** Persisting expiry would make the registration a lifecycle-bearing object, which `Q1`
>    and AD-01N §C.4 both forbid, and would create a second source of truth for an exactly derivable fact.
> 2. **Every evaluation of *"is this registration currently valid?"* REQUIRES a date parameter. There is no
>    timeless answer.** ⟦SOURCE⟧ **R6**: *"an event records the facts as they were at the time. Joining to
>    live tables to render history is wrong."* **A minted claim must therefore retain the date it was
>    evaluated at, and the registration's `R` and `N` as they stood** — [§3.12](#312-determination-12--auditability-of-the-registrationattribution-chain).
> 3. **The window is the one snapshotted on the registration, NEVER the Project's current value.**
>    `NF-15`, corroborated by the owner at `OF-15`. **A Project whose configured period is widened after a
>    registration was made does not widen that registration's grounding power.**
> 4. **The same boundary convention must govern the minting test, the re-registration admissibility test and
>    the eligibility test.** → `PF-10`.

> ⟦ARCHITECT ANALYSIS⟧ **`PF-10` — `AC-6` becomes TRIPLY money-bearing, and the three uses must agree. This
> is the sharpest `AC` escalation in this document.**
>
> | Document | What the boundary convention decided there |
> |---|---|
> | **AD-01N `NF-18`/`AC-6`** | **One calendar day of ELIGIBILITY** on every registration |
> | **AD-01O §2.11** | **PLUS** one calendar day of **RE-REGISTRATION ADMISSIBILITY** under `O-U` — i.e. whether a registration EXISTS |
> | **AD-01P, here** | **PLUS** one calendar day of **CLAIM ADMISSIBILITY** under `P-G` — i.e. whether a CLAIM EXISTS on an Inquiry |
>
> **And the three must use one convention, or the model becomes incoherent rather than merely imprecise.**
> Suppose the minting test used convention (α) and the admissibility test used (β): on a boundary day a
> registration could be simultaneously **expired enough to permit a successor** and **live enough to ground a
> claim**, so a single day could produce **two live registrations for one triple** — defeating `OF-4`'s
> determinacy, which is the whole architectural payoff of `O-U`. **`AC-6` is NOT resolved here, no convention
> is selected, and its priority rises for the second consecutive document.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-11` — `AC-8` now governs FOUR date derivations, not three**, because the
> minting gate's date `G` must be projected into the same governing business timezone as `R`, the
> re-registration act's date, and `B`. ⟦SOURCE⟧ **R1** makes the tenant the isolation boundary; ⟦SOURCE⟧
> **R12** and **§08** make the Project a real scoping boundary and a Project is a physical place.
> **Whose timezone governs is NOT established by any source and is NOT decided here.**

### 3.5 Determination 5 — expiry behaviour

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P5`: *"Expired registrations cannot establish new attribution claims."*
> Not weighed. What follows is only its architectural consequence.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-12` — `PO-P5` answers one question exactly and is silent on its neighbour, and
> the architecture answers the neighbour unambiguously. Both are stated so the second is not read as an
> invention.**
>
> | Question | Answer | Status |
> |---|---|---|
> | May an **expired** registration ground a **NEW** claim? | **NO.** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P5`, verbatim** |
> | Is a claim **already minted** under a then-live registration invalidated when that registration later expires? | **NO — and this is forced, not chosen** | ⟦ARCHITECT ANALYSIS⟧ **see below** |
>
> **Why the second answer is forced and not an architect's addition:**
>
> 1. ⟦ARCHITECT RECOMMENDATION⟧ **`C-II`** — *a rule may assign credit for a future conversion, never
>    reassign a past one.* **Invalidating a validly minted claim on the mere passage of time would reassign
>    a past determination with no act by either party** — the identical defect `NF-14` used to eliminate the
>    live-read candidate in AD-01N §E.2.
> 2. ⟦ARCHITECT RECOMMENDATION⟧ **`K-17`** — the claim set is **append-only and never overwritten.** There is
>    no operation that removes a claim, and ⟦SOURCE⟧ **R6** forbids inventing one.
> 3. ⟦PRODUCT-OWNER DECISION⟧ **`PO-O10`** — the registration *"remains immutable historical data."* **A
>    ground that is permanently retrievable and permanently unchanged remains a provable ground forever.**
>    AD-01O `OF-14(a)` already stated the parallel result for determinations: *"a determination made on 20
>    September against registration #1 remains correct forever."*
> 4. **Minting is a ONE-SHOT act at the gate** (`C-VI`, `C-V`). An act that occurred, occurred. ⟦SOURCE⟧
>    **§54** requires the audit to record *"the facts as they were at the time."*
>
> **Therefore: expiry is a gate on ADMISSIBILITY, exactly as `PO-O12·c` made it a gate on the admissibility
> of a successor registration. It is never retroactive, and it never reaches an existing fact.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-13` — three consequences of `PF-12`, each counter-intuitive and each stated
> because it will otherwise be discovered during implementation.**
>
> 1. **A CP can hold a validly minted, validly WON attribution claim on a converting Inquiry and still be
>    commission-ineligible**, because conjunct (iii) is tested at `B` and `B` may fall outside every window
>    (`PF-5` configuration 3). **This is `K-9` at its sharpest and it is a real commercial outcome, not an
>    edge case: the CP is recorded as the producer of the engagement that converted and is not paid for it.**
>    The only route to payment is a Site Head exception (AD-01N §H), which does **not** change `R`, does
>    **not** change `N`, and does **not** hide the negative determination (`PO-N9`).
> 2. **A CP can be time-barred at the minting gate and never acquire a claim at all**, in which case there is
>    nothing for a Site Head exception to act on — **`NF-24` makes the exception's subject *one eligibility
>    determination*, and a determination presupposes a claim.** ⟦ARCHITECT ANALYSIS⟧ **So the exception route
>    is available in `PF-5` configuration 3 and NOT available in configuration 4.** **Whether the owner
>    intends that asymmetry is `AC-2`'s territory (an ex-gratia route without an attribution claim), which
>    is OPEN and is NOT resolved here.**
> 3. **Expiry is still not an event.** Nothing happens at expiry; no job runs, no record is written, no
>    notification is forced by anything above. **A CP watching their §39 portal sees their grounding power
>    lapse only because a read-time projection computes it.** ⟦SOURCE⟧ **§39** vs ⟦SOURCE⟧ **§11** — **what
>    the portal should say about it is folded into `AC-13`, NOT renumbered.**

### 3.6 Determination 6 — revisit non-reset, confirmed against AD-01O's derived-Activity finding

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P6`: *"Revisits do not reset registration validity."* This restates
> `PO-O6` and is therefore CONFIRMED TWICE by the owner.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-14` — AD-01O's `OF-6` finding is re-tested against Reading H and holds without
> amendment. The re-test is run rather than assumed, because Reading H is the first rule in the series under
> which a revisit could plausibly have acquired a commercial consequence.**
>
> **`OF-6` concluded that a revisit is an ORDINARY ACTIVITY on the long-lived work record, that *"revisit"*
> is a DERIVED characterisation and never a persisted flag, and that no `Visit`/`Revisit` entity is
> necessary. The necessity test is re-run against `P-G`:**
>
> | Does `P-G` need a fact a revisit would have to persist? | Answer |
> |---|---|
> | Does `P-G` read whether the client is new or returning? | **No.** `P-G` step 3 reads `(CP, client, Project, G)` and the registration sequence. **Presence and returning-ness are not operands of it.** |
> | Does `P-G` read the occasion on which the later interest arrived? | **No.** It reads the Inquiry that `J-2` produced, and `J-2` reads *interest*, never *presence* (`OF-11`). |
> | Does `P-G` need to know how many times the client visited? | **No.** No count, cadence or frequency appears anywhere in `PO-P1 … PO-P12`, and none is invented. |
> | Does `P-G` extend, toll or refresh a window? | **No. `PO-P6`, `PO-O6`, `PO-N3`, `PO-N4`.** |
>
> **`OF-6` is CONFIRMED. No `Visit` entity, no `Revisit` entity, no visit lifecycle, no visit counter and no
> `is_revisit` field is proposed, designed or implied.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-15` — the honest strain, named and resolved without amending anything. It is
> the one place where a reader could reasonably think `C-XIV` has been breached.**
>
> **`C-XIV` says: *a Helpdesk interaction, INCLUDING the successful identification of an existing Client, is
> a WORK and RELATIONSHIP fact, and must never be an input to any COMMERCIAL determination.*** **Under
> Reading H, a registration IS now an input to a commercial determination — the minting gate. Does `P-G`
> breach `C-XIV`?**
>
> **No, and the reason is exactly the separation `PO-O8` and `PO-O11` insist on.**
>
> | | The **Helpdesk interaction** | The **registration act** |
> |---|---|---|
> | What it is | A person was present and was identified | **A distinct commercial event** — ⟦PRODUCT-OWNER DECISION⟧ `PO-O8`, verbatim |
> | What it persists | **One Activity on the work record** | **One immutable `CP Project Registration`** |
> | Is it an input to `P-G`? | **NO** | **Yes — the RECORD is, not the act's occasion** |
> | Can it occur without the other? | **Yes, routinely** — `OF-10` consequence 3: a client walks in, is identified, expresses no interest, and no CP registers them | **Yes** — a registration act may occur where no new Inquiry opens (`OF-10` consequence 1) |
>
> **`C-XIV` is therefore not merely intact; it is what makes `PO-P1` safe.** Without it, *"the client came
> back and we found them in the system"* would be an evidentiary fact a CP could point at, and the
> grounding test would become a judgement about an interaction rather than a lookup against an immutable
> record. **`C-XIV` keeps the operand set to `(CP, client, Project, date)` and nothing else.** ⟦ARCHITECT
> ANALYSIS⟧ **This is a second, independent justification for `C-XIV` that AD-01O did not have, and it is
> recorded as corroboration rather than as a change.**

### 3.7 Determination 7 — re-registration mechanics, generally

> ⟦ARCHITECT ANALYSIS⟧ **`PF-16` — `PO-P7` states `C-XIII`'s substance in the owner's own words, with one
> wording issue that `ENGINEERING_RULES.md` **R2** requires be read explicitly rather than passed over.**
>
> **`PO-P7`: *"Only explicit helpdesk actions create new registrations."*** **Two independent claims sit
> inside it:**
>
> | Claim | Status |
> |---|---|
> | **(a)** Only an **EXPLICIT ACTION** creates a registration — not a lookup, not an auto-fill, not an activity, not a revisit, not an Inquiry origination, not a transfer, not a Dump, not a booking, and **not the expiry of a prior registration** | ⟦PRODUCT-OWNER DECISION⟧ **This is `C-XIII` exactly, stated by the owner. `C-XIII` should therefore be re-labelled from ⟦ARCHITECT RECOMMENDATION — NOT APPROVED⟧ to ⟦PRODUCT-OWNER DECISION⟧ on its central claim, precisely as `A-20` did for `C-XI`.** → **`A-27`** |
| **(b)** The actor is the **HELPDESK** | ⟦ARCHITECT ANALYSIS⟧ **This requires care and is NOT softened.** ⟦SOURCE⟧ **R2**, verbatim: *"Roles are tenant-scoped rows, not an enum … **Application logic never branches on a role name.** … Any logic of the form `if (role.key === 'executive')` is disabled by a cosmetic edit."* ⟦SOURCE⟧ **§03** lists *"Helpdesk"* among builder-side users — **that is a default role label, not a permission.** AD-01N `NF-26(9)` already established that the ability to create a registration is **a permission, never a role name**. **The architecturally expressible form of `PO-P7`(b) is therefore: *an explicit registration act performed by an actor holding the registration permission, scope-bound to the Project.*** **Whether the owner intends the permission to be held only by the default `Helpdesk` role, or by any tenant-defined role granted it, is NOT decided here.** → folded into **`A-27`** and referred for ratification at [§5.1](#51-the-ratifications-this-document-itself-requires) |

**The eleven events that create nothing, re-checked against the grant.**

> ⟦ARCHITECT ANALYSIS⟧ **`C-XIII`'s prohibition list is re-run because Reading H gives several of these
> events a commercial consequence they did not previously have, and a prohibition that was easy to honour
> when registrations conferred only protection is harder to honour when they confer claim admissibility.**

| Event | Does it create a registration? | Does it create a GROUND? | Basis |
|---|---|---|---|
| A Helpdesk phone-number lookup | **No** | **No** | `PO-O1`; `OF-7`; `C-XIV` |
| Auto-fill of existing details | **No** | **No** | `PO-O2`; `G-8` |
| A **revisit** | **No** | **No** | **`PO-O5`**, **`PO-O12·b`**, **`PO-P6`** |
| An activity, follow-up, call or **site visit** | **No** | **No** | `PO-O4`; `PO-N4`; `I-6`/`I-7`/`J-16` |
| **The origination of an Inquiry** | **No** | **No — it CONSUMES a ground; it never creates one** | **`PO-O12·a`**; `C-XIII`; `P-G` step 3 |
| A **re-engagement** (`J-37` act 2) or **additional interest** (act 3) | **No** | **No** | `PO-O12·a`; `PO-N4` |
| **Manager redistribution / transfer** (`J-37` act 5) | **No** | **No — and it is structurally unable to, in every branch** | `I-4 … I-7`, `V-12`, `K-54`, `J-42`; `L-19`'s §7 case; `C-XIII` |
| A **Dump**, reactivation, or a derived record-level work condition | **No** | **No.** **A Dump is not an expiry and an expiry is not a Dump** | `I-7`; `NF-21`; AD-01O §2.7 |
| A **Booking**, cancellation or unit transfer | **No** | **No** | `K-47`; `K-40`; `K-50` |
| **The EXPIRY of a prior registration** | **No — expiry creates only ADMISSIBILITY** | **No — it REMOVES a ground** | **`PO-O12·c`**; `PO-P5` |
| **The minting of a claim itself** | **No** | **No.** A claim is not a registration and never becomes one | **`C-XV`(3)**; `C-XI` |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-17` — one row above is new and is the reason the table is re-run.** **The last
> row did not need stating before Reading H, because nothing could be confused with a registration.** Under
> `P-G`, a minted claim carries the registration's `CP`, `client`, `Project` and a date — **four of the
> registration's five identifying facts** — and the implementation temptation is to treat a minted claim as
> evidence that a registration relationship exists, or to reconstruct one from a claim where the registration
> itself is missing. **That would create a money-bearing commercial record from a derived artefact with no
> registration act, no actor and no authorization context**, which ⟦SOURCE⟧ **§54** and **R6** cannot
> represent and ⟦SOURCE⟧ **§88** places squarely in MUST-ASK. **`C-XIII` is extended by one row, not
> amended in principle.** → folded into **`A-27`**.

### 3.8 Determination 8 — same-CP re-registration after expiry

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P8`: a same-CP re-registration after expiry creates a NEW immutable
> registration record with a NEW date and a NEW protection window; the prior registration becomes
> historical. This restates `PO-O9`/`PO-O10` and AD-01O `OF-14(b)` and is not weighed here.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-18` — four consequences under Reading H, of which the third and fourth are new
> and neither is obvious.**
>
> **1. The sequence is a sequence of GROUNDS, not merely of protection windows.** Each registration in the
> triple's ordered, non-overlapping sequence (`O-U`(4)) grounds claims on the Inquiries whose gate dates
> fall inside **its own** window. **Registration #1 grounds Inquiries #1 … #k; registration #2 grounds
> Inquiries #m … #n; and there is no Inquiry that both ground, because `O-U` guarantees non-overlap.**
>
> **2. A claim citing registration #1 and a claim citing registration #2 are DIFFERENT COMMERCIAL FACTS and
> must remain separately provable forever.** ⟦PRODUCT-OWNER DECISION⟧ `PO-P12`: *"traceable to the specific
> registration record that grounded it."* ⟦SOURCE⟧ **R6** forbids collapsing them into *"a claim grounded on
> CP A's registration for this client and project,"* because under a sequence that phrase does not denote.
> **`A-21`'s refinement of `C-VIII`/`A-12` is the same requirement stated from AD-01L's side, and `PO-P12`
> now states it from the owner's.**
>
> **3. An Inquiry that originates in the GAP between registration #1's expiry and registration #2's creation
> acquires NO registration-grounded claim for that CP — permanently — and a later re-registration does NOT
> retroactively license one.** ⟦ARCHITECT ANALYSIS⟧ **This is forced by two positions already taken and it
> is not an architect's choice:** **`C-VI`** (as refined by `A-11`) fixes the systemic determination **at the
> Inquiry's gate evaluation and never later**; **`C-II`** forbids a rule reassigning credit for a past
> determination. **A CP who allows a window to lapse and then re-registers does not recover the Inquiries
> that opened in the gap.** **This is counter-intuitive, it is commercially consequential, and it is stated
> here because it will otherwise be discovered during implementation or, worse, during a CP dispute that
> ⟦SOURCE⟧ §39 guarantees the CP can see.**
>
> **4. `N` may legitimately DIFFER between registration #1 and registration #2 for the same CP and the same
> Project**, because `NF-15` snapshots the period at registration and `PO-O9` gives the successor *"a NEW
> lock-in window per the applicable Project policy."* ⟦ARCHITECT ANALYSIS⟧ **Under Reading H this means the
> SAME CP's grounding power over the SAME client and Project can have different durations in different
> eras**, and a report that renders *"CP A's protection for client X on Project A"* as a single number is
> rendering a fact that does not exist. **`NF-15` is CONFIRMED and `AC-7`'s first half stays answered in
> substance (`OF-15`, `A-22`); `AC-7`'s second half — a deliberate re-basing act — remains OPEN and is NOT
> resolved, NOT narrowed and NOT designed here.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-19` — `AC-11` is NOT relieved, and Reading H makes the reason plainer than
> AD-01O's `OF-19` could.**
>
> **`AC-11` asks whether the rule time-bars the ORDINARY case: a CP registers, the Inquiry never closes, is
> worked continuously, and the client books after the window.** `PO-N7` as written says the CP is not
> eligible.
>
> **Reading H does not touch it, and the reason is structural.** `P-G` grounds a claim on a **later**
> Inquiry. **In `AC-11`'s case there is no later Inquiry** — the original one never closed, `J-2` forbids a
> second, and the CP already holds an ordinary filed claim on it by ordinary origination (`J-43`).
> **Conjunct (i) was never the problem in `AC-11`; conjunct (iii) is.** `P-G` operates only on conjunct (i).
>
> **`AC-11` is therefore unchanged, unrelieved, and now demonstrably outside the reach of the mechanism that
> looks most likely to relieve it. NOT resolved here.**

### 3.9 Determination 9 — different-CP registration

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P9`: a different-CP registration creates a separate registration record;
> an expired registration from a prior CP does NOT support a new CP's attribution.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-20` — `PO-P9`'s second half is stronger than it looks, and its first half
> raises an item AD-01O deferred to a moment that has now arrived.**
>
> **(a) The sequential case — CP A's window expires, CP B registers.**
>
> | Consequence | Statement | Basis |
> |---|---|---|
> | **`O-U` is satisfied trivially** | The **triple changes.** `(CP B, X, Project A)` is a different subject, and this is CP B's **FIRST** registration, not a second registration of anything | `O-U`(5); `OF-14(a)` |
> | **Registration #1 grounds nothing for CP B** | ⟦PRODUCT-OWNER DECISION⟧ `PO-P9`, verbatim. ⟦ARCHITECT ANALYSIS⟧ **And the architecture agrees independently: a registration names its CP, so a citation of it can only ever name that CP. There is no representable operation by which CP B's claim cites CP A's registration** | `PO-P9`; `NF-6`'s Subject row; `C-VII` |
> | **CP A's minted and filed claims are untouched** | They remain, permanently, the record of who produced **those** engagements. **Registration #2 does not and cannot reach them** | `K-17`, `K-18`, `B-1`, `C-II` |
> | **Expiry is not revocation** | Registration #1 **expired**; it was not cancelled, withdrawn, superseded or invalidated, and **nothing was written to it.** Every determination and every mint made during its own window remains correct forever | `OF-14(a)`; `C-II`; **R6** |
>
> **(b) The concurrent case — CP A's window is still live when CP B registers.**
>
> ⟦ARCHITECT ANALYSIS⟧ **`O-U` is stated PER TRIPLE and says nothing whatever about two DIFFERENT CPs, so
> the concurrent case is structurally permitted. AD-01O recorded that the owner's worked example
> deliberately avoided it and that the avoidance *"is NOT evidence about the overlapping case."* This
> decision does not supply that evidence either — `PO-P9` describes the sequential case only.**
>
> **What changes is WHEN the concurrent case bites.**
>
> | | Before this decision | After it |
> |---|---|---|
> | **`AC-20`** — may a second CP's registration be CREATED while a first is live? | Bites at a **booking**, if one ever occurs | **Bites at EVERY Inquiry origination inside the overlap**, because both registrations are admissible grounds at `G` |
> | **`AC-15`** — who WINS when two are live? | Bites at a **booking** | **Bites at §11 adjudication on every such Inquiry, whether or not it ever converts** |
>
> ⟦ARCHITECT ANALYSIS⟧ **The consequence is a workload consequence as much as a financial one, and it is
> `L-10`'s finding realised.** AD-01L `L-10` held that *"every minted citation claim becomes an item of
> authorized-leadership work, not an automatic outcome,"* and that the owner *"is not choosing between three
> commission policies of equal operational cost."* **Under `PO-P4` the only available mode is CONTEST**
> ([§3.10](#310-determination-10--clash-handling)), **so every concurrent-registration Inquiry becomes an
> item of §11 adjudication work for builder-side authorized leadership.** ⟦SOURCE⟧ **§11** reserves that work
> to leadership and nowhere else. **`AC-15` and `AC-20` are NOT answered, no precedence is invented, and
> both have their priority raised for the second consecutive document.**

### 3.10 Determination 10 — clash handling

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1`'s *"subject to normal attribution/clash rules"* and `PO-P4`'s
> *"Registration is NOT automatic clash winner"* are the governing clauses and they are not weighed.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-21` — this is the largest governance result in the document, and it is worth
> stating as a result rather than as a relief: the owner has selected the ONE branch of `P-δ` that requires
> no §88 authorization change.**
>
> **AD-01L's `C-IX` established that `P-δ`'s three branches do not sit in one approval column:**
>
> | `P-δ` branch | What it does | `C-IX`'s finding |
> |---|---|---|
> | **Supersede** — the earlier producer wins by rule | The **system** resolves a §11 contest | **A §88 AUTHORIZATION change to §11**, not a commission setting |
> | **Rank below** — the later producer wins by rule | The **system** resolves a §11 contest | **A §88 AUTHORIZATION change to §11**, not a commission setting |
> | **Contest** — both claims recorded, neither resolved by rule, routed to authorized leadership | ⟦SOURCE⟧ **§11** applied literally | **The only branch that leaves §11's reservation intact** |
>
> **`PO-P4` selects CONTEST.** *"NOT automatic clash winner"* is *"no branch of `P-δ` may be binding"* stated
> in the owner's own words.
>
> **Three things follow and each is a concrete gain:**
>
> 1. **`Q0-d` — AD-01M's ratification asking whether an automatic precedence rule is an authorization change
>    — no longer needs to be answered before this decision can proceed.** The question was: *which approval
>    bar does the mode sit behind?* **The owner has chosen the branch that sits behind no additional bar.**
>    `Q0-d` remains formally open as a ratification of `C-IX`'s reasoning, but it is **off this decision's
>    critical path.**
> 2. **⟦SOURCE⟧ §11 requires no amendment whatsoever.** *"Record **each** attribution claim, preserve
>    history … **Builder-side authorized leadership resolves attribution**"* is satisfied literally by `P-G`
>    step 5. **A minted claim is recorded; the producer's filed claim is recorded; leadership resolves.**
> 3. **`K-52`'s clash SCOPE is unchanged.** *"Clash is scoped to one Inquiry's claim set."* **A minted claim
>    is a claim on the later Inquiry — inside the existing scope, not a new scope** (AD-01L §9.3, confirmed).
>    **`K-12`'s finding that the Origination Rule is also the clash-scoping rule survives unchanged**, and no
>    second control is introduced.

**The clash cases, enumerated.**

| Case | Resolution | Basis |
|---|---|---|
| A minted claim vs. the claim of the CP who actually **produced** the later Inquiry | **An ordinary §11 clash. Two recorded claims, one Inquiry. Leadership resolves. The minted claim may lose** | `PO-P4`; `K-12`; `K-52`; `C-IX` |
| A minted claim vs. an **internal / direct** source | **Same.** ⟦SETTLED⟧ **`K-10`: an internal claimant can WIN attribution and generate no §32 entitlement at all** — so this contest can resolve against the CP and produce no payment to anybody | `K-9`, `K-10` |
| **Two** minted claims, from two different CPs each holding a live registration | **An ordinary §11 clash. `AC-15` decides who should win; it is OPEN and no precedence is invented** | `O-U`(5); `AC-15`; `NF-19(7)` |
| Two registrations of the **same** CP could both ground | **Structurally impossible under `O-U`** | `O-U`(1); `OF-4` |
| The Inquiry has **no** filed claim at all and only a minted one | **It is still adjudicated. `PO-P2`: registration is NOT automatic attribution.** ⟦ARCHITECT ANALYSIS⟧ **An unopposed claim is not thereby a resolved claim** — `K-48` conjunct (i) requires *"the RESOLVED attribution claim,"* and §11 reserves resolution to leadership. **Whether an unopposed minted claim requires the same adjudication act as a contested one, or a lighter one, is NOT stated by any source and is NOT invented here** | `PO-P2`; `K-48`; ⟦SOURCE⟧ **§11** → folded into **`AC-25`** |
| A claim arrives **late** on an Inquiry whose gate has already passed | **NOT `P-G`'s case. This is `Q11` (late filing) and `Q11` is OPEN** | `L-24`; `C-VI`; `Q11` |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-22` — `Q11` acquires a BLOCKING consumer, and this is a status change rather
> than a restatement.**
>
> AD-01O `OF-12` traced the owner's own example and found that **a registration made while a live Inquiry
> already covers the interest produces NO Inquiry of its own** (`J-2` forbids one), so *"Registration #2
> exists with NO Inquiry of its own, over a Project whose only live Inquiry carries somebody else's claim
> set — or nobody's."* It recorded that the only representable route for that CP is **to file on an Inquiry
> they did not originate**, whose admissibility is `Q11`, and that `Q11` had *"acquired a first-class
> consumer."*
>
> **Under Reading H that consumer becomes blocking.** `C-VI` fixes the systemic determination at the gate;
> an already-live Inquiry's gate has passed. **So the question *"may a registration ground a claim on an
> Inquiry that was already live when the registration became relevant?"* is either answered YES — in which
> case `P-G` mints outside `C-VI`'s window and `Q11`'s cut-off question must be answered first — or answered
> NO, in which case the registration confers nothing at all in the owner's own `OF-12` configuration.**
>
> **Both readings are recorded at equal strength. NEITHER is selected.** → **`AC-23`**. **`Q11` is NOT
> resolved, NOT narrowed and NOT branched here.**

### 3.11 Determination 11 — Inquiry linkage, and the citation carrier

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P11`: *"An Inquiry must explicitly reference the CP Project Registration
> record that supplied its attribution basis, for auditability and reconstruction."* `PO-P12`: *"an
> inquiry's attribution must be TRACEABLE to the specific registration record that grounded it."* The
> REQUIREMENT is the owner's and is not weighed. What follows concerns only which carrier can satisfy it.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-23` — the requirement is *traceability from the Inquiry's attribution to a
> specific registration record.* Two carriers can express it, they are not equivalent, and one of them
> cannot represent a configuration the owner's own decision makes ordinary.**
>
> | | **(i) Claim-borne** — the citation is a property of the minted claim | **(ii) Inquiry-borne** — the citation is a property of the Inquiry |
> |---|---|---|
> | Satisfies *"traceable to the specific registration record"* (`PO-P12`) | **Yes.** The claim names the record | **Yes, for one record** |
> | **Two CPs, each holding a live registration, each minting on one Inquiry** (`O-U`(5), `AC-20`) | **Representable.** Two claims, two citations | **NOT representable.** One Inquiry, one reference, two grounds. **The moment the reference is made repeatable it IS the claim's citation under another name** |
> | An Inquiry carrying **both** a minted claim and a producer-filed claim | **Representable.** One claim cites; the other does not | **Ambiguous.** The Inquiry-level reference does not say which claim it grounds |
> | Second source of truth? | **No.** The Inquiry's reference to the registration is **derivable** from its claim set | **Yes, if both exist** — and they could disagree, which `G-8`, `G-9`, `J-36` and AD-01A §3.6/§5.2 have each sustained as an objection |
> | Cost already priced | **`A-9`**: AD-01L found the claim-borne form *"cheaper and collision-free"* — it *"creates no relation between the engagements"* and collides with neither `T-3` (merge linkage) nor `T-11` (chain depth) | An Inquiry-level commercial reference is closer to `AA-4`'s original Inquiry→Inquiry form, which `A-9` re-posed away from |
>
> ⟦ARCHITECT RECOMMENDATION — `PF-23`, conclusion⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, relationships, audit
> requirements. **No field, column, table or type is proposed.**)*
>
> **The citation is CLAIM-BORNE: the minted claim carries, as its stated ground, a reference to the specific
> `CP Project Registration` record that grounded it. The Inquiry's reference to that registration is then
> derived from its claim set, exactly as `G-8`'s read-time-projection principle requires, and `PO-P11`'s
> auditability and reconstruction requirement is satisfied in full.**
>
> **This is offered as the form in which `PO-P11` can actually be met, not as a narrowing of it.** **If the
> owner intends `PO-P11` literally — a reference held by the Inquiry itself, in addition to or instead of
> the claim's citation — that is available and is the owner's to choose, and it should be chosen knowingly,
> because it cannot represent the two-CP case and because two references that can disagree is the defect
> five prior documents have refused.** → referred for ratification at
> [§5.1](#51-the-ratifications-this-document-itself-requires). **`AA-4` is NOT resolved; it is NARROWED —
> `A-33`.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-24` — `A-9` and `A-21` are CORROBORATED by the owner, from a direction AD-01L
> and AD-01O did not supply, and both remain named and not made.**
>
> - **`A-9`** re-posed `AA-4` from an **Inquiry→Inquiry succession reference** to a **claim→Inquiry
>   citation**. **`PO-P11`/`PO-P12` require a citation of a REGISTRATION, which is `A-9`'s shape with a
>   different target — a claim-borne citation of a determinate commercial record.** `A-9`'s central claim —
>   *what citation needs is a property of a claim, not a relation between engagements* — is confirmed.
> - **`A-21`** required the admissible base to be *"a SPECIFIC `CP Project Registration` RECORD's own fixed
>   date — NOT 'the triple's registration date,' which under a sequence is ambiguous."* **`PO-P12`'s final
>   clause states exactly that, in the owner's own words: *"traceable to the specific registration record
>   that grounded it."*** **`A-21` is therefore ANSWERED IN SUBSTANCE and the owner should now CONFIRM it
>   rather than re-decide it.**
>
> **Neither amendment is made here. AD-01J, AD-01K, AD-01L and AD-01O are NOT edited.**

### 3.12 Determination 12 — auditability of the registration → attribution chain

> ⟦ARCHITECT RECOMMENDATION — the audit requirements⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED.** ⟦SOURCE⟧ **§88** MUST-ASK: **audit requirements.** Event names below
> are **business-language descriptions, not approved identifiers** — ⟦SOURCE⟧ **R6** requires business
> language and **R4** requires any vocabulary to be master-driven. **No schema, table or column is
> proposed.**)*
>
> ⟦SOURCE⟧ **§54**: audit must capture *"actor, action, time, target, relevant before/after values,
> **system/human origin**, authorization context where appropriate."* ⟦SOURCE⟧ **R6**: *"never updated and
> never deleted"*; payloads *"immutable and denormalised on purpose."*
>
> **The chain must be reconstructible end to end, from the registration act to the payout decision, without
> joining to any live table. Six links, each with a named artefact:**
>
> | # | Link | Artefact | Must retain |
> |---|---|---|---|
> | **1** | **The registration was created** | AD-01N `NF-27` event 1 | CP relationship (and sub-agent where applicable), client, Project, **`R`**, **snapshotted `N`** and the identity of the Project configuration it came from, actor, authorization context, online-vs-§12-offline origin, verified-vs-§44-unverified status at that moment, **and whether this is the triple's FIRST registration or a SUCCESSOR** (`A-17`) |
> | **2** | **A claim was MINTED on a registration ground** | **NEW — `NF-27` requires a further event** → **`A-28`** | The Inquiry, the **specific registration record cited**, that registration's `R` and `N` **as they stood**, the gate-evaluation date **`G`**, the **boundary convention** and **timezone** applied, the minting act's actor and authorization context, and — decisively — **that the origin was SYSTEM rather than human** where it was |
> | **3** | **The claim was adjudicated under §11** | The ordinary §11 resolution, appended, never overwriting | ⟦SOURCE⟧ **§11**; AD-01 §D.4; `K-17`. **The outcome, including a LOSS, is permanent and retrievable** |
> | **4** | **Eligibility was determined** | `NF-27` event 3 | The claim, the booking, **`R`**, **`N`**, **`B`**, **`D`**, the convention, the timezone, the outcome — **and, where the registration consulted for conjunct (iii) is NOT the registration the claim CITED, both records and the fact that they differ** (`PF-5` configuration 2) → **`A-28`** |
> | **5** | **An exception was approved**, if one was | `NF-24` / `NF-27` event 4 | Approver identity **and their role and scope as at that moment**, server timestamp, mandatory justification, the determination excepted by reference **and** by embedded values, and explicit assertions that `R` and the Project period are unchanged |
> | **6** | **The Project's lock-in period changed**, if it did | `NF-27` event 5 | Old value, new value, actor, authorization context, effective instant, and that it governs registrations created on or after that instant **and no registration created before it** |

> ⟦ARCHITECT ANALYSIS⟧ **Four read properties that are requirements, not implementation detail. The first
> three are AD-01N `NF-27`'s, re-tested and unchanged; the fourth is new.**
>
> 1. **Every determination must be reproducible from its own retained inputs**, without joining to the
>    Project's current configuration, the CP's current relationship state, or the registration sequence as it
>    stands today. ⟦SOURCE⟧ **R6**: *"joining to live tables to render history is wrong."*
> 2. **The original determination must remain retrievable ALONGSIDE any exception, never replaced by it.**
>    `PO-N9`.
> 3. **The audit log is the PROOF, not the query surface.** ⟦SOURCE⟧ **R6**'s retention is *"12 months hot …
>    then an automated job exports the aging partition to S3 cold storage,"* and **a CP commission dispute
>    can surface years after a booking.** The claim, its citation, the determination and the exception are
>    **business facts on business records, audited in addition** — not facts that live only in the audit log.
> 4. ⟦ARCHITECT ANALYSIS⟧ **NEW — a minted claim must be visibly distinguishable from a filed claim
>    EVERYWHERE, and this is now forced twice over.** ⟦SOURCE⟧ **§39** entitles the CP to *"attribution
>    information."* ⟦ARCHITECT RECOMMENDATION⟧ **`L-25`** and AD-01L §11 row 3 already require it: *"a claim
>    the system minted on their behalf, which they did not file, is a materially different fact from one they
>    did."* **§54's *system/human origin* clause requires it independently, and this is the first mechanism
>    in the series where that clause does material work.** **Merging the two populations makes the §11 clash
>    population unreadable and makes `PO-P2` unverifiable after the fact.**

> ⟦ARCHITECT ANALYSIS⟧ **One reporting consequence, stated because AD-01N §J.3(3) enumerated the failure
> modes and this adds one.** **CP conversion reporting now has THREE distinguishable negative outcomes where
> AD-01N had two:**
>
> | Outcome | Meaning |
> |---|---|
> | *Converted and not attributed* | No claim naming the CP was resolved in their favour |
> | *Converted but time-barred* | The claim won; conjunct (iii) failed |
> | **NEW — *converted, grounded, and LOST at §11*** | A registration-grounded claim was minted and **adjudicated against the CP** |
>
> **The three are commercially different and must never be one number.** ⟦SOURCE⟧ **R4**: reports branch on
> semantics, never on tenant-renameable labels. ⟦SETTLED⟧ **`J-48`'s single denominator is untouched — a
> minted claim adds a claim, never an Inquiry.** ⟦SETTLED⟧ **No CP scorecard or producer-evaluation product
> is authorised by anything here** (AD-01A §3.3, upheld). → **`A-35`**.

### 3.13 Determination 13 — commission independence from the triple alone

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-P3`: *"Registration is NOT automatic commission eligibility."* This
> restates `PO-O13`/`PO-O14` and `PO-N6`'s *"subject to other existing commission/booking rules."***

> ⟦ARCHITECT ANALYSIS⟧ **AD-01N's `NF-28` three-conjunct test is re-run under the selected reading. It
> stands, unamended, and AD-01O predicted exactly this outcome at its `§3.3` row for `NF-28`: *"Under H the
> third conjunct is unchanged; what H adds is a route by which conjunct (i) may come to be satisfied — it
> does not merge (iii) into (i), which `C-XI` forbids."* That prediction is now realised rather than
> hypothetical.**
>
> | | Conjunct | Answer-bearer | Effect of `PO-P1` |
> |---|---|---|---|
> | **(i)** | **WHO** — the resolved attribution claim on the converting Inquiry | The Inquiry's claim set | **A new ROUTE by which a claim may come to be in that set. The bearer does not change. `K-18` untouched** |
> | **(ii)** | **WHETHER AND WHEN** — the surviving transaction identity and its §32 milestone | The Booking | **NO EFFECT WHATSOEVER** |
> | **(iii)** | **STILL WITHIN PROTECTION** — the registration containing `B`, or a Site Head exception | The registration sequence, joined to the determination | **NO EFFECT on the test. One effect on its INPUTS: the sequence now has a second consumer at a second date (`PF-5`) → `AC-22`** |

> ⟦ARCHITECT ANALYSIS⟧ **The four layers, restated so the separation is checkable rather than asserted, and
> mapped onto `PO-P10`'s seven levels.**
>
> | `PO-P10` level | Layer | The question it answers | Its answer-bearer |
> |---|---|---|---|
> | 1 **Client**, 2 **Revisit** | **Layer 0 — relationship and work** | *"Who is this, and what happened with them?"* | The **Person** and the **work record** with its activity timeline. **Carries no commercial fact** — `G-1`, `K-38`, `C-XIV` |
> | 3 **CP Project Registration** | **Layer 1 — protection and grounding** | *"Is CP c's introduction of client p for Project j within its protected period as at date D?"* | **The specific registration whose window contains `D`** — `O-U`, `OF-4` |
> | 4 **Inquiry**, 5 **Attribution** | **Layer 2 — attribution** | *"Who produced THIS Inquiry?"* | **The resolved attribution claim on that Inquiry, and NOTHING ELSE** — `K-18`, `C-XI` |
> | 6 **Commission Eligibility** | **Layer 3 — eligibility** | *"Is this CP entitled on this booking?"* | **A JOIN, never a single anchor** — `K-48` as extended by `NF-28` |
> | 7 **Commission Override** | **Layer 3½ — the exception** | *"Has an authorized person decided differently about ONE determination?"* | **The appended, immutable `Commission Eligibility Exception`** — `NF-24`, `C-XII` |
> | *(not named by the owner; downstream of all seven)* | **Layer 4 — payout** | *"Has money moved, and to whom?"* | **The CP Ledger and the §32/§40 path**, accrual separated from payout (consolidated §22) |
>
> **`PO-P10`'s seven levels map onto the architecture's existing six without a single addition.**
> ⟦ARCHITECT ANALYSIS⟧ **That is the same result `OF-1` reported for `PO-O11`'s three, obtained a second
> time over a longer list, and it is the strongest available evidence that the domain model is the right
> shape: the owner has now enumerated seven things that must never be conflated and the architecture already
> keeps all seven apart.**
>
> **Two properties of the table are load-bearing and are stated explicitly:**
>
> 1. **No layer is a shortcut to any other.** ⟦SETTLED⟧ **`K-9`**: winning attribution and being paid are
>    different outcomes. **Reading H adds a layer-1 → layer-2 pathway and does NOT add a layer-1 → layer-3
>    one.** `PO-P3` says so and `C-XV` makes it structural.
> 2. **The `(CP × client × Project)` triple alone never suffices, at any layer.** It does not identify a
>    registration (there may be several — `O-U`(4)); it does not produce a claim (`PO-P2`); it does not win a
>    clash (`PO-P4`); it does not satisfy two of `NF-28`'s three conjuncts (`PO-P3`); and it reaches layer 4
>    not at all. **`M-9` still owns every formula, rate, slab, amount, milestone value, clawback quantum and
>    TDS treatment, and nothing above touches any of them.**

### 3.14 Determination 14 — AD-01K's separation of attribution-anchor from eligibility-anchor

> ⟦ARCHITECT ANALYSIS⟧ **The test AD-01K's `K-1` set: `V-16` decomposes into a claim-anchor, an
> eligibility-anchor and a reach question, and *"a model that answers 'where does the claim live' has not
> thereby answered 'what makes it payable.'"* This decision answers the REACH question. The other two are
> re-checked rather than assumed.**
>
> | AD-01K item | Status after `PO-P1 … PO-P12` |
> |---|---|
> | **`V-16`·claim-anchor = `K-18`, the Inquiry and nothing else** | **CONFIRMED, and for the third consecutive document.** Under `P-G` the answer-bearer for *"who produced this Inquiry?"* is still the **resolved claim on that Inquiry.** The registration is the **ground a claim cites**, never the answer. **The `(CP, client, Project)` triple does NOT become a second commercial anchor** — `PF-4`'s falsifiability test is what makes that true rather than merely stated |
| **`V-16`·eligibility-anchor = `K-48`, a JOIN** | **CONFIRMED, unchanged, extended by `NF-28` and not contradicted.** `PO-P3` restates its discipline in the owner's own words |
| **AD-01K Candidate A (the Person anchor)** | **REMAINS ELIMINATED.** `K-37`, and AD-01C `D6`'s governance argument — *"a policy silently created by the data model"* — both stand. **A registration ground is an explicit, dated, permissioned, audited commercial record; it is the opposite of a policy created silently by co-location** |
| **AD-01L Alt 4 (dissolve the boundary; attach the claim to the Person / CP relationship)** | **REMAINS ELIMINATED BY ENTAILMENT.** The claim is still recorded on one Inquiry and carries that Inquiry's project (`C-VII`). **Nothing becomes relationship-scoped, Person-scoped or record-scoped in any part of `P-G`** — `L-27`, confirmed |
| **`X-4`** (AD-01N's conditional contradiction with `K-18`/`K-48`) | **STAYS DISCHARGED.** Its condition was Reading G, which `PO-O13`/`PO-O14` eliminated and which this decision does not revive. **`A-23` carries forward unchanged** |
| **`C-XI`** | **NOT BREACHED — and it now needs `C-XVI` beside it.** `C-XI` forbids the registration being *"readable, joinable or reportable as an answer to 'who produced this Inquiry?'"* **`P-G` never reads it as an answer; it cites it as a ground for a claim that must then win.** ⟦ARCHITECT ANALYSIS⟧ **But `C-XI`'s wording does not reach the failure mode Reading H introduces — a claim that cites a registration and is then given a privileged resolution path. That is the gap `C-XVI` closes.** `A-20`'s re-labelling carries forward |
| **`K-42`** (the two-anchor shape on the CLAIMANT side: the producing party on the claim vs. the CP relationship as payee) | **CONFIRMED, and it gains a new inbound route.** A minted claim's claimant is inherited **from the registration** rather than supplied by a filing act. **`AB-3` — may a sub-agent hold an entitlement and be paid independently of the firm — is NOT resolved, NOT narrowed, and is named as newly reachable by a second path** |
| **`K-47`** (the eligibility anchor is the transaction identity surviving §25/§26) | **CONFIRMED, untouched.** `K-40`: a unit transfer touches no Inquiry, so it cannot move a minted claim any more than a filed one. **`AB-2` carries forward unchanged** |
| **`K-26` / `T-5`** (no reach across a fully discharged claim) | **PRESERVED EXACTLY, NOT reopened, NOT re-derived and NOT challenged.** ⟦ARCHITECT ANALYSIS⟧ **One boundary worth stating: `PO-P1` grounds on a REGISTRATION, not on a discharged claim, so `P-G` does not run through `K-26`'s subject at all. Whether a live registration may ground a claim on an Inquiry opened AFTER that client's earlier purchase CONVERTED is a question `PO-P1` does not distinguish and `K-26` does not obviously reach — because `K-26` speaks about a discharged CLAIM, and the registration is not one.** → folded into **`AC-26`**. **`K-26` is not weakened, not narrowed and not ratified by anything above** |

### 3.15 Determination 15 — how much of `B-2`, and of `P-α … P-δ`, this closes

> ⟦ARCHITECT ANALYSIS⟧ **The precise accounting the task demands. Nothing is claimed for the decision that
> it does not say, and where it is silent that is recorded as silence.**

**Step 1 — `B-2` as AD-01L stated it, decomposed.**

> ⟦SOURCE⟧ **AD-01L `L-3`, `B-2`, verbatim:** *"Whether the system may, at the origination of a later
> Inquiry, **MINT A NEW CLAIM** on that later Inquiry, naming the earlier producer, and carrying as its
> stated ground **a citation of a determinate earlier Inquiry**."*

| `B-2`'s component | What it asks | Status after `PO-P1` |
|---|---|---|
| **The LICENCE** — may the system mint a claim on a later Inquiry naming a producer who did not produce it? | The headline | ⟦PRODUCT-OWNER DECISION⟧ **ANSWERED: YES**, bounded by a currently-valid registration for the same client and Project, subject to §11. **This is AD-01M's `Q1`, answered.** |
| **The TIMING** — at the later Inquiry's origination? | `C-VI` | **CONFIRMED as the shape.** **Which date, online vs. offline, is `AC-24`; whether an already-live Inquiry can be minted on is `AC-23`. Both OPEN** |
| **The GROUND** — *a citation of a determinate earlier INQUIRY* | `C-III`, `C-X` | ⟦ARCHITECT ANALYSIS⟧ **CHANGED, not answered.** The owner's ground is a determinate **CP Project Registration**, not a determinate earlier Inquiry. **`B-2`'s own stated ground is therefore NOT adopted and NOT rejected — it is not consulted.** → **`X-20`**, **`A-31`** |
| **The CLOSURE-GROUNDED BRANCH** — may a closed Inquiry's own Dimension-A classification ground a citation? | `P-α`, `L-6`, `K-22`, `N-4` | **NOT ANSWERED. The decision is SILENT on it.** → `PF-25` below |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-25` — the most important thing this decision does NOT do, stated without
> softening because it will otherwise be assumed away.**
>
> **`PO-P1` grounds attribution on a LIVE REGISTRATION. It says nothing whatever about a CP whose
> registration has expired and whose original Inquiry was closed for a reason that, commercially, everyone
> would call a real engagement that failed.**
>
> **Run AD-01M §2.1's headline narrative — the owner's own §7 case — against `P-G`:**
>
> | Step | What happens | What `P-G` gives CP A |
> |---|---|---|
> | CP A registers Amit for Project A. Registration #1 created, window `N` days | — | Registration #1 exists |
> | The Inquiry is worked and **Dumped** | Inquiry #1 terminal-closed with a preserved `Q7` reason | **Nothing. The Dump is not an input in any direction** (`NF-21`) |
> | A manager **redistributes** the file to a fresher | One Assignment Log entry | **Nothing, structurally, in every branch** (`I-4 … I-7`, `K-54`, `L-19`) |
> | Later, Amit comes back and a **new Inquiry** opens | `J-2` originates Inquiry #2 at date `G` | **IF `G` is inside registration #1's window → a ground, a mint, a contest, and possibly a win.** **IF `G` is outside it → NOTHING** |
> | Amit books | — | Conjunct (iii) tested at `B` |
>
> **So the owner's own headline scenario is answered when the return happens inside the window and is NOT
> answered when it happens outside it.** ⟦ARCHITECT ANALYSIS⟧ **Whether that is the intended answer is
> genuinely the owner's, and it is a coherent policy: it says a builder owes a CP for an introduction only
> for as long as the Project's configured protection period runs, and nothing after.** **But the owner
> should know that the case AD-01C `D6` called a *"genuine"* dispute, and that AD-01M put at the head of its
> framework, is resolved against the CP by default whenever the return falls outside the window —
> **visibly**, because ⟦SOURCE⟧ **§39** shows the CP their attribution and eligibility.**
>
> **This document does not recommend granting closure-grounded citation, does not recommend refusing it, and
> does not prefer, rank or hint at either. `B-2`'s closure-grounded branch is RECORDED AS STILL OPEN, and it
> is now OPTIONAL rather than blocking: the architecture executes without it.** **That is a real change in
> its status and it is the second-largest result in this document.**

**Step 2 — AD-01K's four parameters, each stated exactly.**

| # | Parameter | Status after this decision |
|---|---|---|
| **`P-α`** — **class map**: which Dimension-A closure classes admit citation | ⟦ARCHITECT ANALYSIS⟧ **NOT ANSWERED — and NOT CONSULTED.** `P-G` does not read the prior Inquiry's closure at all; it reads a registration. **`N-4` therefore stays OFF this pathway's critical path, confirming `X-6` from a second and independent direction.** **But see `PF-26`: `P-α`'s absence is what makes `AC-14` acute** |
| **`P-β`** — **scope**: same project only, or across projects | ⟦PRODUCT-OWNER DECISION⟧ **ANSWERED: SAME PROJECT ONLY.** `PO-P1`: *"for the same client/project."* ⟦ARCHITECT ANALYSIS⟧ **This is consistent with `NF-29`'s finding that cross-project protection is *"inexpressible in this instrument,"* and it now holds for attribution as well as for protection. AD-01M's `Q4` is ANSWERED. `AA-1`, `Y-3` and the same-project-individuation question are NOT resolved** |
| **`P-γ`** — **horizon**: is citation bounded by elapsed time, measured from what? | ⟦PRODUCT-OWNER DECISION⟧ **ANSWERED, and in a way `C-VIII` did not contemplate: the bound is the REGISTRATION'S OWN VALIDITY WINDOW.** It is not a horizon measured from an Inquiry event at all. **This supersedes `C-VIII`'s *"and from nothing else"* for this pathway** → **`X-19`**, **`A-30`**. ⟦SETTLED⟧ **`AD-01E U-4` is not weakened: no dormancy threshold is invented, and the number is the Project's configured lock-in, which is the builder's** |
| **`P-δ`** — **mode**: supersede, contest, or rank below | ⟦PRODUCT-OWNER DECISION⟧ **ANSWERED: CONTEST.** `PO-P4`. **The only branch `C-IX` found compatible with §11 as it stands. No §88 authorization change is required** — `PF-21` |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-26` — `X-5`'s condition is now MET, and `AC-14` moves from a live tension to an
> unresolved contradiction. This is the sharpest cost of the decision and it is stated without softening.**
>
> **AD-01N's `X-5` recorded:** *"The lock-in rule is closure-reason-blind. A registration whose Inquiry
> closed as invalid is still inside its window. **Under Reading G this credits a fabricated registration;
> under Reading F it does not, because no claim exists on the later Inquiry — but the tension resurfaces the
> moment `B-2` is granted.**"*
>
> **`B-2`'s licence has now been granted. The tension has resurfaced.**
>
> **Trace it.** CP A registers a client for Project A. The Inquiry is closed on **Dimension A's invalid
> side** — wrong number, fabricated entry, non-opportunity. **The registration is untouched: a Dump is not an
> input in any direction (`NF-21`), and `PO-N4` names nothing that moves it.** The registration remains
> live. A genuine direct inquiry then arrives from that person inside the window. **Under `P-G` step 3 the
> test passes, because the test's operands are `(CP, client, Project, G)` and the closure classification is
> not among them.**
>
> **Now put that beside `L-6`.** ⟦ARCHITECT RECOMMENDATION⟧ **`L-6`** holds that no-reach attaches to the
> **invalid side of Dimension A as a class**, because *"the citation would have to assert, in one appended
> fact, both that the ground exists and that the business has classified it as not existing"* — and `L-6`
> adds that this *"is not a policy the owner may or may not adopt; it is a fact the model cannot record
> coherently."*
>
> **Two readings of `L-6` are available against a registration ground and the sources do not choose between
> them:**
>
> | Reading of `L-6` | What it says about `P-G` |
> |---|---|
> | **(L-6·ground)** — `L-6` is about the CLOSED INQUIRY being used as a ground | **`P-G` is untouched by it.** The registration is a different record, classified by nobody, and the incoherence `L-6` identifies does not arise. **`L-6` neither permits nor forbids `P-G`** |
> | **(L-6·engagement)** — `L-6` is about the ENGAGEMENT having been classified as never having existed | **`P-G` is reached by it.** A registration asserting *"this client was introduced for this Project"* over a person the business has recorded as a wrong number is the same incoherence one level out |
>
> **This document does NOT choose between them.** ⟦SOURCE⟧ Spec **Rule 1**, **§88**, **§97**. →
> **`X-21`**, **`A-32`**, and **`AC-14` RESTATED** at
> [§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute).
>
> **And one further consequence, recorded as a consequence for the owner to weigh and NOT as an argument for
> any answer.** ⟦ARCHITECT RECOMMENDATION⟧ **`L-13`** priced a fifth cost of the yes-branch: *"a rule that
> converts registration volume into forward options rewards volume over engagement,"* and ⟦SOURCE⟧ **§11** is
> *"the one place in the sources that names this hazard in its own words."* **`L-13` then named `K-22`/`L-6`
> as *"the primary control against this cost."*** **Under reading (L-6·ground) that control does not operate
> on `P-G` at all**, because `P-G` never consults the closure. **Combined with `AC-18` — under `O-U`(3) the
> window is RENEWABLE and no cadence, gap or cap exists — the hazard `L-13`, `MF-9` and `X-13` each named is
> at its highest stated level in the series.** ⟦ARCHITECT ANALYSIS⟧ **What remains as a control is real and
> should be stated alongside it: every registration is an explicit, permissioned, separately audited act
> carrying its own date (`C-XIII`, `NF-26(9)`, `NF-27`); every mint is separately audited with its
> system-origin recorded (§3.12 link 2); and every minted claim must WIN a §11 adjudication before it is
> worth anything (`PO-P4`). The behaviour is visible and attributable rather than silent.** **`AC-18` is NOT
> resolved and no cadence rule, minimum gap or cap is invented, proposed or implied.**

### 3.16 Which of AD-01M's five policies this decision selects

> ⟦ARCHITECT ANALYSIS⟧ **`PF-27` — AD-01N `NF-30` mapped the lock-in rule onto AD-01M's five alternatives
> and made the mapping conditional on `AC-4`. `AC-4` is now answered, so the mapping resolves.**
>
> | AD-01M alternative | Verdict |
> |---|---|
> | **Policy A** — the claim persists for the customer relationship, indefinitely | **REMAINS ELIMINATED.** `PO-N7` supplies an expiry and `PO-P5` makes it bite on the grounding power too |
> | **Policy B** — the claim ends at commercial discharge | **ELIMINATED.** `PO-P1` grants a licence B refuses by definition, and `NF-21` already put a Dump inside a live window |
| **Policy C** — citation permitted only when a defined continuation condition is met | **THIS — and now unconditionally, where `NF-30` could only say *"under Reading F."*** ⟦ARCHITECT ANALYSIS⟧ **With one material refinement that is worth restating because it is favourable.** AD-01M described C's condition as *"typically some combination of **what the earlier inquiry was closed for**, **whether it is the same project**, and **how long ago**."* **The owner has taken the second and the third and deliberately discarded the first — and has replaced *"how long ago"* with a registration-anchored window rather than a closure-anchored one.** **That removes C's stated prerequisite (`N-4`), removes `AC-1` from its path, and removes AD-01M §8.1's finding that C makes the closing-reason tap financially consequential.** **It is Policy C with C's most-criticised dependency removed** |
| **Policy D** — a fresh claim only where the partner is independently attributable to the later event | **ELIMINATED.** `MF-3` established that D is a distinct policy only if an evidentiary test weaker than *"the partner filed the registration"* is defined. **`PO-P1` defines no evidentiary test about the later event; it reads history plus a clock** |
| **Policy E** — no standing rule; leadership decides each case | **NOT the base policy — but present as TWO bounded layers**, and this is a change from `NF-30`. **(1)** `PO-N8`/`PO-N9` graft an E-style, explicitly-reasoned, recorded leadership decision on as a **one-directional exception path** (ineligible → eligible-as-exception), scoped per booking. **(2)** `PO-P4` routes **every minted claim** to §11 adjudication by builder-side authorized leadership, which is E applied *within* C's condition rather than instead of it |
> | **Reading G's *"Policy A bounded by a horizon"*** | **REMAINS ELIMINATED.** `A-25` is CONFIRMED and completed |
>
> **Stated as one sentence:**
>
> > **The rule is Policy C with a purely temporal, REGISTRATION-anchored, project-scoped, `N-4`-independent
> > condition — plus a bounded one-directional Policy-E override layer at eligibility, plus Policy-E
> > adjudication of every claim the condition admits.**
>
> ⟦ARCHITECT ANALYSIS⟧ **AD-01O `A-25` observed that *"Reading F is Policy C's SHAPE WITHOUT Policy C's
> citation licence, which is why `NF-22` step 6 found the owner's example inoperative under F; Reading H is
> Policy C proper."*** **The owner has selected Policy C proper. `A-25` is confirmed in substance and remains
> named and NOT made.** **Under BOTH override layers AD-01M `§11.2`'s audit obligations for E are live:
> *"the human decision, its date, its author, and its stated reasons — for every case."* `PO-N9` requires
> exactly that for the exception layer, and ⟦SOURCE⟧ §11 plus `C-V` require it for the adjudication layer.**

### 3.17 Which other `AC` and open items this decision affects

> ⟦ARCHITECT ANALYSIS⟧ **Every `AC` item AD-01O left open, checked individually. *"Unchanged"* means checked
> and unchanged, not skipped.**

| Item | Effect of this decision |
|---|---|
| **`AC-1`** (authorization posture of the closing-reason tap) | **UNCHANGED, and still does not arise from this rule** — `P-G` does not read the closure (`X-6`, confirmed a second time). **It arises if and only if `AC-14` is answered in the (L-6·engagement) direction.** Carried forward. |
| **`AC-2`** (an ex-gratia route without an attribution claim) | **GAINS A FIRST-CLASS CASE.** Where the minting gate fails (`PF-5` configuration 4) there is no claim, hence no determination, hence **nothing for a `NF-24` exception to act on** (`PF-13(2)`). **If the owner wants a discretionary pay-anyway route in that case, `AC-2` is where it lives.** **NOT resolved.** |
| **`AC-3`** (must a claim name a currently-approved CP relationship) | **NEWLY MONEY-BEARING AT THE CLAIM LAYER.** A minted claim inherits its claimant **from a registration**, which under ⟦SOURCE⟧ **§44** may name a CP relationship that was **unverified** at registration and may since have ended. **A claim can therefore be minted naming a party the builder has no current relationship with, with no filing act by anyone.** Coupled tightly to `AC-10` and `AB-3`. **NOT resolved.** |
| **`AC-4`** | **CLOSED.** `PF-3`. → `X-18`, `A-29`. |
| **`AC-5`** (which booking fact is *"Booking Date"*) | **UNCHANGED in substance; GAINS A COMPANION.** It still selects which registration answers conjunct (iii); the companion question — which date is the minting gate's `G` — is **`AC-24`**, and the two are different questions that must not be conflated. **NOT resolved.** |
| **`AC-6`** (boundary convention α / β; is `N = 0` legal) | **TRIPLY MONEY-BEARING** — `PF-10`. **Priority raised for the second consecutive document. NOT resolved.** |
| **`AC-7`** (ratify snapshot; should a re-basing act exist) | **FIRST HALF still ANSWERED IN SUBSTANCE** (`OF-15`, `A-22`); **SECOND HALF OPEN and slightly sharper**, because a widened Project period now also widens the *grounding* power of registrations created after it and not of those created before. Carried forward. |
| **`AC-8`** (business timezone: tenant-level or project-level) | **UNCHANGED in substance; GAINS A FOURTH OPERAND** (`PF-11`). **NOT resolved.** |
| **`AC-9`** (offline registration date: capture date or sync date) — with **`T-9`** | **SHARPER AGAIN, and newly CLAIM-EXISTENCE-BEARING.** Under `AC-24` the same §12 question now also decides the **minting gate's** date, and the two candidate dates can fall on opposite sides of a window boundary. ⟦SOURCE⟧ **§12**: *"Never pretend an offline lead has passed the server-side clash gate."* **`T-9` is NOT resolved.** |
| **`AC-10`** (what *"successfully registers"* means; §44 unverified capture) | **SHARPER AGAIN, and newly CLAIM-BEARING.** An unverified capture that consumes a triple's live slot now also **grounds claims** for the duration of its window. Coupled to `AC-3`. **NOT resolved.** |
| **`AC-11`** (does the rule time-bar the ordinary never-closed case) | **UNCHANGED and EXPLICITLY NOT RELIEVED, for a second and structurally different reason** — `PF-19`. **NOT resolved.** |
| **`AC-12`** (override directionality and revocation) | **UNCHANGED.** The exception's subject is one determination and a determination names one claim. Carried forward. |
| **`AC-13`** (override scope, self-interest controls, CP visibility) | **ENLARGED BY TWO ITEMS, folded in and NOT renumbered:** **(a)** does the §39 portal show a CP a claim **minted in their name that they did not file**, and does it show it **before** §11 adjudication? **(b)** does the portal show a CP that their own grounding power has lapsed? ⟦SOURCE⟧ **§11** forbids unnecessary exposure of competing claims; ⟦SOURCE⟧ **§39** entitles the CP to attribution information and forbids exposing Builder-internal sensitive information. **`V-7`'s fail-closed projection supplies the mechanism; it does not supply the content. NOT resolved.** |
| **`AC-14`** (does an invalid-side closure retain its protection window) | **RESTATED and made ACUTE. `X-5`'s condition is MET.** `PF-26`. **NOT resolved, and its priority rises to the top of the register alongside `AC-25`.** |
| **`AC-15`** (two CPs each hold a live registration; who wins) | **UNCHANGED, NOT ANSWERED — PRIORITY RAISED AGAIN.** It now bites at **every Inquiry origination inside an overlap**, not only at a booking (`PF-20(b)`). **`C-IX` still holds that a binding precedence rule is a §88 authorization change; no precedence is invented.** |
| **`AC-16`** (does a cancelled/transferred booking re-run the test) | **UNCHANGED, and its sub-case is unchanged.** `K-40`/`K-47`: a transfer touches no Inquiry, so it moves no claim, minted or filed. **NOT resolved. No clawback or re-test rule is invented.** |
| **`AC-17`** (Project-level only; tenant default; per-CP-tier variation) | **UNCHANGED.** A per-CP-tier period would produce different `N` values on different registrations, which is representable and which now also produces different grounding durations. Carried forward. |
| **`AC-18`** (re-registration cadence, minimum gap, cap) | **MATERIALLY SHARPER.** Renewability now renews a **grounding power**, not only a protection window, and `L-13`'s primary control may not operate (`PF-26`). **NOT resolved. No cadence, gap or cap is invented.** |
| **`AC-19`** (is a Helpdesk lookup an auditable access event) | **UNCHANGED.** The lookup is still a query and still creates nothing (`OF-7`, `C-XIII`). Carried forward. |
| **`AC-20`** (may a registration be created while a different CP's is live) | **UNCHANGED, NOT ANSWERED — PRIORITY RAISED AGAIN**, for the same reason as `AC-15`. |
| **`AC-21`** (is the registration's CLIENT subject the Person or the work record) | **UNCHANGED in content; GAINS A SECOND CONSUMER and rises in priority.** `PO-P1`'s *"same client"* and `P-G` step 3's middle term are the same term, so **`AC-21` now governs both the uniqueness rule and the grounding rule.** **`M-5`'s uniqueness half is NOT resolved, NOT narrowed and NOT branched — it is named as gating both.** |
| **`Q11`** (late filing on the same Inquiry) | **NOT resolved, NOT narrowed — and its consumer becomes BLOCKING** (`PF-22`, `AC-23`). |
| **`Q10`** (merge) and **`M-5`'s uniqueness half** | **NOT resolved, NOT narrowed — and newly gating a SECOND mechanism.** `OF-17` showed `O-U`'s enforceability is bounded by §09 duplicate detection; the same bound now applies to `P-G`, because a lookup that finds the wrong Client record will fail the grounding test that should have passed, or pass one that should have failed. **`A-26` (a sequence-merge is not a date-reconciliation) carries forward and acquires a claim dimension: a merge may now bring together two sequences over which claims have already been minted, and nothing says what happens to those claims.** **NOT resolved. No merge rule is invented.** |
| **`AA-2`** (project-less preliminary registration) | **ON A SECOND CRITICAL PATH, and its urgency rises again.** `AD-01N NF-5(3)` put it on the registration's; **`P-G` step 3 requires the registration to name a Project in order to satisfy `PO-P1`'s *"same client/project,"* so a project-less registration can ground NOTHING.** **NOT resolved.** |
| **`AA-4`** (must a new Inquiry reference a specific prior Inquiry) | **NARROWED, NOT resolved.** Its Inquiry→Inquiry form is **not required by `P-G` at all** (`PF-6` candidate (d)); it survives only for the closure-grounded branch, which remains open. → **`A-33`**. |
| **`AA-1`, `Y-1`, `Y-3`** | **NOT resolved, NOT narrowed — newly coupled to `AC-26`** (`PF-8`). |
| **`AA-3`, `AA-5`, `AB-1`, `AB-2`, `AB-3`** | **NONE resolved, narrowed or branched.** `AB-3` gains a new inbound route (`§3.14`). All carry forward unchanged. |
| **`N-4`** | **STILL OFF this pathway's critical path** (`X-6` confirmed a second time) — **unless `AC-14` is answered in the (L-6·engagement) direction, which would put it back on.** **NOT resolved. No value proposed.** |
| **`V-4`, `W-1`, `Z-2`, `Z-5`, `T-1`, `T-3`, `T-5`, `T-6 … T-11`, `Y-4`, `Y-5`, `M-9`** | **NONE resolved, narrowed or branched. ALL carried forward unchanged.** |

> ⟦ARCHITECT ANALYSIS⟧ **The net accounting: this decision CLOSES two items outright (`AC-4`, and AD-01M's
> `Q1`), ANSWERS three of AD-01K's four parameters (`P-β`, `P-γ`, `P-δ`) and takes a fourth (`P-α`) off the
> path, DE-GATES one blocker (`Q0-d`/`C-IX`, by selecting the branch that needs no authorization change),
> NARROWS two (`AA-4`, `B-2`'s ground half), SHARPENS eight (`AC-3`, `AC-6`, `AC-8`, `AC-9`, `AC-10`,
> `AC-18`, `AC-21`, `Q10`/`M-5`), RAISES the priority of four (`AC-14`, `AC-15`, `AC-20`, `Q11`), and ADDS
> FIVE (`AC-22 … AC-26`). **It reduces the number of possible ARCHITECTURES from one-and-a-half to one. It
> reduces the number of blocking QUESTIONS by roughly one, and it changes which ones block.**

---

## 4. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **Determinations 16 and 17 are made in this section; determination 18 is made in
> [§5](#5-remaining-product-owner-questions-and-ratifications). **NO FILE IS EDITED BY THIS DOCUMENT.**
> Where an amendment is logically required it is **NAMED PRECISELY AND NOT MADE**, and the prior document is
> left exactly as it stands — the discipline every document in this series has kept, and the reason
> `A-1 … A-26` are still on the register.**
>
> **Every item below is a conflict with an unapproved ⟦ARCHITECT RECOMMENDATION⟧, never with an approved
> Product-Owner decision.** **Result of the search against approved decisions: NO contradiction was found
> with `Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2` or `K-18`. None of them is
> reopened, and `K-18` is CONFIRMED for a third consecutive document.**

### 4.1 The nine amendments, named and NOT made

> ⟦ARCHITECT ANALYSIS⟧ **`PF-28` — the register's arithmetic, stated before the register, because two of its
> entries are shaped unusually and one of its numbers is introduced here rather than in [§3](#3-the-reconciled-architecture).**
>
> **Three facts about the numbering, each checked rather than asserted:**
>
> 1. **Eight of the nine numbers reserved at the head of this document — `A-27`, `A-28`, `A-29`, `A-30`,
>    `A-31`, `A-32`, `A-33`, `A-35` — are already cited inline in [§2](#2-the-existing-architecture-baseline-this-decision-lands-on)
>    and [§3](#3-the-reconciled-architecture). `A-34` is NOT.** It is introduced here, and it is **not a
>    filler**: [§3.16](#316-which-of-ad-01ms-five-policies-this-decision-selects) identified an amendment to
>    AD-01N's `NF-30` that goes **beyond** AD-01O's `A-25` — the Policy-E layer count moves from one to two —
>    and left it unnumbered. **A register cannot leave it unnumbered. The ninth amendment is therefore real,
>    the count is NINE and not eight, and the reason it is nine is recorded rather than assumed.**
> 2. **Two entries — `A-28` and `A-31` — are TWO-LIMBED, because a single owner clause lands on two different
>    prior documents.** `PO-P12`'s traceability clause amends **AD-01O's `O-U`** and **AD-01N's `NF-27`**;
>    the substitution of a registration for a predecessor Inquiry as the ground amends **AD-01L's `B-2`** and
>    **AD-01J's `C-I`/`C-III`**. **Each limb is separately ratifiable and each is stated separately below.
>    No number is split, re-assigned or renumbered, because the inline citations in §2 and §3 are
>    load-bearing and this document does not edit itself.**
> 3. **The reserved contradiction range `X-18 … X-24` is NOT exhausted, and no contradiction is invented to
>    fill it.** **Five contradictions were found — `X-18 … X-22` — and `X-23` and `X-24` are NOT ALLOCATED.**
>    ⟦ARCHITECT ANALYSIS⟧ **The reservation was a ceiling, not a quota. Nothing in §4 or §5's synthesis
>    surfaced a sixth, and inventing one would be the same defect as inventing a business rule.**

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-27`** | **AD-01O — `C-XIII`**, and its eleven-event prohibition list | **THREE limbs.** **(i)** ⟦PRODUCT-OWNER DECISION⟧ **`C-XIII`'s central claim — *only an explicit registration act creates a registration; expiry never does* — must be RE-LABELLED from ⟦ARCHITECT RECOMMENDATION — NOT APPROVED⟧ to ⟦PRODUCT-OWNER DECISION⟧**, because `PO-P7`(a) states it in the owner's own words. **This is exactly what `A-20` did for `C-XI`, and it is the same class of upgrade: the architect's guard-rail becomes the owner's rule** (`PF-16`). **(ii)** **The prohibition list must be EXTENDED BY ONE ROW: *the minting of a claim creates no registration, and a minted claim is never evidence that a registration relationship exists.*** Under `P-G` a minted claim carries four of the registration's five identifying facts, and reconstructing a registration from one would create a money-bearing commercial record with **no registration act, no actor and no authorization context** — which ⟦SOURCE⟧ **§54** and **R6** cannot represent (`PF-17`). **This is an extension by ADDITION; `C-XIII`'s principle is unamended.** **(iii)** **`C-XIII`'s ACTOR must be stated in PERMISSION terms, never in role terms:** *an explicit registration act performed by an actor holding the registration permission, scope-bound to the Project* — ⟦SOURCE⟧ **R2**, `NF-26(9)`. **Whether the owner intends that permission to be confined to the default `Helpdesk` role is NOT decided here** → [§5.1](#51-the-ratifications-this-document-itself-requires). **AD-01O is NOT edited.** |
| **`A-28`** | **(a) AD-01O — `O-U`**; **(b) AD-01N — `NF-27`** | **TWO limbs, one requirement.** **(a)** **`O-U` must be extended from a CARDINALITY rule to a CARDINALITY-PLUS-TRACEABILITY rule.** `O-U` says at most one protection-bearing registration per triple at any instant and that the triple carries an ordered non-overlapping sequence. ⟦PRODUCT-OWNER DECISION⟧ **`PO-P12` adds a clause `O-U` did not have: *"an inquiry's attribution must be TRACEABLE to the specific registration record that grounded it."*** **That is `A-21`'s requirement stated as a business rule, and it is not derivable from cardinality** (`PF-7`). **(b)** **AD-01N's `NF-27` five-event audit list must acquire a SIXTH EVENT — *a claim was minted on a registration ground* —** retaining the Inquiry, the **specific registration record cited**, that registration's `R` and `N` **as they stood**, the gate-evaluation date `G`, the boundary convention and timezone applied, the minting actor and authorization context, and **that the origin was SYSTEM rather than human where it was** (§3.12 link 2; ⟦SOURCE⟧ **§54**'s *system/human origin* clause, doing material work for the first time in the series). **And `NF-27`'s eligibility-determination event must additionally retain BOTH registration records, and the fact that they DIFFER, wherever the registration consulted for conjunct (iii) is not the registration the claim cited** (§3.12 link 4; `PF-5` configuration 2). **AD-01N and AD-01O are NOT edited.** |
| **`A-29`** | **AD-01N — §L.3's `AC-4`, and §F.1 / `NF-28`'s conjunct (iii)**; by entailment **AD-01O §5.3** | **TWO limbs.** **(a)** **`AC-4` is CLOSED** (`PF-3`, `X-18`). AD-01N §L.3 records `AC-4` as *"the highest-value item for the owner in this document"* and AD-01O §5.3 restates it as *"the one question that decides the architecture."* **Both statements must be marked ANSWERED: Reading F is not selected; Reading H is; and with `AC-4` closes AD-01M's `Q1`.** **(b)** **`NF-28`'s conjunct (iii) is written as though the triple carries ONE registration.** Under `O-U`'s sequence plus `P-G`'s second consumer at a second date, it must state **WHICH** registration governs when the record containing `G` and the record containing `B` are different registrations of the same CP over the same triple (`PF-5` configuration 2, `X-22`). ⟦ARCHITECT ANALYSIS⟧ **NO ANSWER IS SUPPLIED AND NO DEFAULT IS IMPLIED — `AC-22` owns it, and the amendment's content follows the owner's answer rather than the architect's.** **AD-01N and AD-01O are NOT edited.** |
| **`A-30`** | **AD-01L — `C-VIII`**, and therefore **`A-12`** and **`A-21`** | **`C-VIII`'s *"and from nothing else"* is CONTRADICTED a second time and in a NEW WAY** (`X-19`). `A-12` admitted the predecessor's **origination end** as a measurement base; `A-21` narrowed that to **a specific registration record's own fixed date.** **`P-G` requires one step further, and it is a step of KIND rather than of degree: under `PO-P1` the horizon is not a measured interval at all — it is the cited registration's OWN VALIDITY WINDOW, `(R, N)`, as snapshotted at creation** ([§3.15](#315-determination-15--how-much-of-b-2-and-of-p-α--p-δ-this-closes), `P-γ`). **`C-VIII` must be amended to admit a WINDOW-BOUNDED ground alongside its interval-measured ones.** ⟦ARCHITECT ANALYSIS⟧ **`C-VIII`'s four GROUNDS are unchanged and all four are satisfied — the window is commercial-object-owned, immutable, determinate at the gate, and not extendable by a work act (`PO-N3`, `PO-N4`, `PO-P6`).** ⟦SETTLED⟧ **AD-01E `U-4` is NOT weakened: no dormancy threshold is invented and the number is the Project's configured lock-in, which is the builder's.** **AD-01L is NOT edited. `A-12` and `A-21` remain named and not made.** |
| **`A-31`** | **(a) AD-01L — `B-2`'s stated GROUND**; **(b) AD-01J — `C-I` and `C-III`** (from `J-31`) | **TWO limbs, one substitution.** **(a)** **`B-2` as AD-01L stated it FIXES the ground:** *"carrying as its stated ground **a citation of a determinate earlier Inquiry**."* **`PO-P1`'s ground is a determinate `CP Project Registration` RECORD.** `B-2` must be amended to state its ground as a **PARAMETER with at least two admissible values** — the registration ground (**GRANTED**) and the closed-predecessor-Inquiry ground (**STILL OPEN**) — **so that the granted branch is never read as having answered the ungranted one** (`X-20`, `PF-25`). **(b)** **`C-I`** (classification-sensitivity — *which closure classes admit citation*) **does not engage on this pathway at all**, because `P-G` never reads a closure; **`C-III`** (a determinate predecessor) **is satisfied by a record that is not a predecessor Inquiry.** Both must be amended to say **determinate GROUND**, not **determinate predecessor INQUIRY**. ⟦ARCHITECT ANALYSIS⟧ **This is an amendment by GENERALISATION, not by weakening: neither constraint loses any force on the closure-grounded branch, which remains open, and `C-II` and `C-IV` require no amendment at all.** **AD-01J and AD-01L are NOT edited.** |
| **`A-32`** | **AD-01L — `L-6`** (and with it `K-22`) | **`L-6` must state its own SCOPE, and it currently does not.** `L-6` is written about a **CLOSED INQUIRY** used as a ground. Under `P-G` the ground is a **registration**, and `L-6`'s reach is ambiguous between **(L-6·ground)** and **(L-6·engagement)** (`PF-26`, `X-21`). ⟦ARCHITECT ANALYSIS⟧ **The amendment is forced by `L-6`'s own wording rather than by preference:** `L-6` claims *"this is not a policy the owner may or may not adopt; it is a fact the model cannot record coherently"* — **and a claim of necessity requires a determinate scope, because a rule that cannot say what it ranges over cannot be necessary about anything.** **This document SELECTS NEITHER READING and proposes NO TEXT for the amendment. `AC-14` ([§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute)) owns the choice, and the amendment's content follows from the owner's answer.** **`L-6` and `K-22` are NOT reopened, NOT narrowed and NOT ratified. AD-01L is NOT edited.** |
| **`A-33`** | **AD-01J — `AA-4`** | **`AA-4` — *must a new Inquiry reference a specific prior Inquiry?* — must be amended to record that it is NARROWED, NOT RESOLVED.** Its **Inquiry → Inquiry succession** form is **not required by `P-G` at all** (`PF-6` candidate (d)): the ground is a record that already has its own identity, so **no Inquiry succeeds any other Inquiry under `P-G`**, and `K-21`(a)'s first priced cost is **not incurred on this pathway.** **`AA-4` survives only for `B-2`'s closure-grounded branch, which remains open** (`PF-25`). ⟦ARCHITECT ANALYSIS⟧ **Narrowing a question's scope is not answering it: `AA-4` is NOT answered, and no reference of any kind is proposed, designed or implied.** **AD-01J is NOT edited.** |
| **`A-34`** | **AD-01N — `NF-30`**, beyond AD-01O's **`A-25`** — **INTRODUCED HERE** | **`NF-30` mapped the lock-in rule onto AD-01M's five policies CONDITIONALLY on `AC-4`, and with ONE bounded Policy-E layer.** AD-01O's **`A-25`** already named an amendment collapsing the conditionality to *"Policy C + bounded E."* **`PO-P4` requires a FURTHER amendment that `A-25` could not have contained, and it has two parts.** **(i)** **There are TWO bounded Policy-E layers, not one:** (1) `PO-N8`/`PO-N9`'s **one-directional exception path** at eligibility (ineligible → eligible-as-exception, scoped per booking), and (2) `PO-P4`'s routing of **EVERY minted claim** to §11 adjudication by builder-side authorized leadership — **which is Policy E applied *within* Policy C's condition rather than instead of it** ([§3.16](#316-which-of-ad-01ms-five-policies-this-decision-selects)). **(ii)** **The mapping is no longer conditional at all, because `AC-4` is closed** (`A-29`(a)). ⟦ARCHITECT ANALYSIS⟧ **§3.16 identified this change — *"and this is a change from `NF-30`"* — and left it unnumbered; the register cannot, so it is numbered here.** **`A-25` is confirmed in substance and remains named and NOT made; `A-34` EXTENDS it and does not replace it.** ⟦SETTLED⟧ **AD-01M itself requires NO amendment: its five policies are unchanged and Policy C is one of them exactly as written.** **AD-01N is NOT edited.** |
| **`A-35`** | **AD-01N — §J.3(3)**, the CP conversion-reporting failure modes | **AD-01N §J.3(3) enumerates TWO distinguishable negative outcomes for CP conversion reporting. Under `P-G` there are THREE:** *converted and not attributed* · *converted but time-barred* · **NEW — *converted, GROUNDED, and LOST at §11.*** **The three are commercially different and must never be one number.** ⟦SOURCE⟧ **R4**: reports branch on semantics, never on tenant-renameable labels. ⟦SETTLED⟧ **`J-48`'s single denominator is untouched — a minted claim adds a CLAIM, never an INQUIRY.** ⟦SETTLED⟧ **No CP scorecard, producer-evaluation product or ranking of any kind is authorised by anything above** (AD-01A §3.3, upheld). **AD-01N is NOT edited.** |

### 4.2 Documents requiring NO change — each checked

> ⟦ARCHITECT ANALYSIS⟧ **Stated document by document so that *"no change required"* is a CHECKED RESULT
> rather than an omission. Two results are notable in advance and are stated as results:
> **AD-01K requires NO amendment**, which is the third consecutive document in which the attribution-anchor
> document survives a CP decision untouched; and **AD-01M requires NO amendment**, because the owner has
> selected one of its five policies as written rather than a sixth shape it did not present.**

| Document | Result |
|---|---|
| **AD-01** | **No change.** §D.4 (*"claims are never overwritten by a later claim"*) is **load-bearing twice** here — once for `K-17`'s append-only claim set, once for the appended §11 resolution of a minted claim (§3.12 link 3). `E-13`'s shape (commission keys on the resolved claim, never on a lifecycle state) CONFIRMED. **`Q10` and `Q11` are NOT resolved** — `Q11`'s consumer becomes **BLOCKING** (`PF-22`, `AC-23`) and `Q10` newly gates a second mechanism (`§3.17`). |
| **AD-01A** | **No change.** `Q1`, `Q4`, `Q7` fixed input, **NOT reopened.** **§8.5 honoured — no workflow, screen, approval step or gate is designed anywhere above, including around the mint and the adjudication.** **§3.3's prohibition on a producer-evaluation product is UPHELD and is cited against `A-35`.** **`N-4` NOT resolved and still OFF this pathway's critical path** — unless `AC-14` is answered in the (L-6·engagement) direction. **No Dump-reason value is proposed.** |
| **AD-01B** | **No change.** §4's *"unrecoverable if decided by implementation"* standard is applied to `C-XVI`, `AC-14`, `AC-22`, `AC-24`, `AC-25` and `AC-26` — **which is why [§6](#6-recommendation) does not recommend `BUILD NOW`.** |
| **AD-01C** | **No change.** **`Q6` NOT reopened, NOT narrowed, still actively protected by `C-XII`.** `T-1`, `T-3`, `T-6 … T-11` NOT resolved. **`T-9` retains both financial dimensions AD-01N and AD-01O gave it and acquires a CLAIM-EXISTENCE-bearing one** (`AC-9`, `AC-24`). **`K-26` and `T-5` are preserved EXACTLY** — `P-G` grounds on a registration and does not run through `K-26`'s subject at all (`§3.14`). `D6`'s governance argument — *"a policy silently created by the data model"* — is relied upon against AD-01K Candidate A and is **not weakened.** |
| **AD-01E** | **No change.** **`U-4` is NOT weakened by `A-30`:** the bound is the registration's own window, which is anchored at registration and not at the onset of inactivity, **so no dormancy threshold is invented and none is implied.** `X-3`'s stale-inventory warning carries forward. |
| **AD-01F** | **No change.** §12.4's prohibition on a re-engagement restating a closed period CONFIRMED. **`V-4` remains OPEN, is NOT resolved, NOT narrowed, and is still the cheapest unblocking question in the register — now recommended by SEVEN consecutive documents and not taken.** It does not block this decision and this decision does not block it. |
| **AD-01G** | **No change — and `G-8`'s read-time-projection principle is load-bearing THREE times** (*"revisit"*, *"expired"*, and now the Inquiry's derived reference to the registration that grounded its attribution — `PF-23`). `G-1`/`V-1` CONFIRMED and corroborated a second time by `PO-P10` level 1's *"long-lived."* **`G-9` untouched — the Assignment Log is NOT the carrier for anything in `P-G`.** `G-4`'s Sales Episode rejection re-tested against a grounding pathway and **STANDS.** **`V-7` NOT reopened** — its fail-closed projection is again the mechanism for `AC-13`'s twice-enlarged visibility question, and only the content is open. |
| **AD-01H** | **No change.** `V-2`, `V-3`, `H-4`, `H-8`, `H-9` CONFIRMED. **`H-4`'s terminal-once property remains what forces the registration record.** **`Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved — `Y-1` and `Y-3` are newly COUPLED to `AC-26`** (`PF-8`), **and naming a coupling is not resolving it.** |
| **AD-01I** | **No change — and `I-4 … I-9` are CONFIRMED and re-tested.** **`I-9`'s *"no new canonical business object is necessary"* is the standard [§3.2](#32-determination-2--a-new-mechanism-or-an-existing-one) had to meet and DID meet, for the EIGHTH consecutive document** — five candidate artefacts were tested and all five FAILED. `I-6`/`I-7` structural via `C-XIII`; `NF-21`'s *"a Dump is not an expiry and an expiry is not a Dump"* CONFIRMED. `Z-2`, `Z-5` NOT resolved. |
| **AD-01J** | **Two amendments — `A-31`(b) and `A-33`.** **`J-2` itself requires NO amendment, is NOT narrowed, and is NOT given a new input** (`PF-6`): `P-G` step 1 is `J-2` as bounded by `K-50`, unchanged. `J-34`, `J-36`, `J-37`, `J-42`, `J-43`, `J-46`, `J-48` CONFIRMED. **`C-II` and `C-IV` adopted UNCHANGED and both load-bearing — `C-II` is what makes `PF-12`'s second answer FORCED rather than chosen.** **`AA-2` is on a SECOND critical path and its urgency rises again** (`§3.17`). **`AA-1`, `AA-5` NOT resolved.** |
| **AD-01K** | **NO CHANGE — and this is a result, not an omission.** **`K-18` CONFIRMED for a third consecutive document; `K-17`, `K-48` (as extended by `NF-28`), `K-9`, `K-10`, `K-12`, `K-26`, `K-38`, `K-40`, `K-42`, `K-47`, `K-50`, `K-52`, `K-54` all CONFIRMED and none contradicted.** **`C-V`, `C-VI` (in `A-11`'s refined reading) and `C-VII` are adopted unchanged and become OPERATIVE rather than hypothetical for the first time.** **Candidate A REMAINS ELIMINATED.** ⟦ARCHITECT ANALYSIS⟧ **A decision that grants a new commercial licence and amends AD-01K NOWHERE is the strongest single piece of evidence that `K-18` was the right anchor.** `AB-1`, `AB-2`, `AB-3` NOT resolved; **`AB-3` gains a new inbound route and is not thereby narrowed.** |
| **AD-01L** | **Three amendments — `A-30`, `A-31`(a), `A-32`.** **`B-1` CONFIRMED and NOT ENGAGED — a stronger result than *not violated*, because a registration was never recorded on any Inquiry at all (`NF-9`, re-tested a third time).** **`C-IX` ADOPTED and SATISFIED WITHOUT AMENDMENT by `PO-P4` — the largest governance gain in this document.** **`C-X` ADOPTED and satisfied more strongly than by a closure.** `L-10`, `L-13`, `L-25`, `L-19`, `L-21`, `L-24` all relied upon and none amended. **`A-1 … A-11` remain named and not made.** |
| **AD-01M** | **NO CHANGE.** **Policies A, B and D REMAIN ELIMINATED; Policy C is SELECTED AS WRITTEN, with its most-criticised dependency (`N-4`) removed by the owner's own choice of condition.** `§15.1` remains falsified in half (`X-2`/`A-13`), unchanged. **`AC-1`, `AC-2`, `AC-3` carry forward** — `AC-2` gains a first-class case and `AC-3` becomes money-bearing at the claim layer, **and gaining a case is not being resolved.** **`Q0-a … Q0-c`, `Q0-e` NOT answered; `Q0-d` is OFF this decision's critical path but remains formally open** (`PF-21`). **`MF-3`'s test for Policy D is applied and upheld.** |
| **AD-01N** | **Four amendments — `A-28`(b), `A-29`, `A-34`, `A-35`.** **`NF-6`, `NF-9`, `NF-15`, `NF-19`, `NF-21`, `NF-24`, `NF-26(9)`, `NF-28`, `NF-29` all CONFIRMED.** **AD-01N remains at `VALIDATE` and is NOT approved.** ⟦ARCHITECT ANALYSIS⟧ **The concentration is again informative: AD-01N takes four of the nine, which is what a document at `VALIDATE` receiving its SECOND round of owner input should take. It is evidence the gate is working, not that AD-01N was wrong to be written.** |
| **AD-01O** | **Two amendments — `A-27`, `A-28`(a).** **`O-U` ADOPTED and CORROBORATED in the owner's own words (`PO-P12`); `OF-4`, `OF-5`, `OF-6`, `OF-10`, `OF-12`, `OF-14`, `OF-15`, `OF-17` all CONFIRMED; `C-XIV` NOT BREACHED and given a second independent justification (`PF-15`).** **AD-01O remains advisory and is NOT approved.** |
| **`01-bmexa-architecture-reconciliation.md`** | **No change. `M-5`'s uniqueness half and `M-9` are NOT resolved, NOT narrowed and NOT branched.** **`M-5` is named as GATING a SECOND mechanism** — a lookup that finds the wrong Client record will fail a grounding test that should have passed, or pass one that should have failed (`§3.17`) — **and naming a dependency is not resolving it.** **`A-8` carries forward unchanged. `M-9` still owns every formula, rate, slab, amount, milestone value, clawback quantum, passback rule and TDS treatment, and nothing above touches any of them.** |
| **`BMEXA_MASTER_SPEC.md` / consolidated requirements** | **No change, and NO amendment is proposed to either.** ⟦ARCHITECT ANALYSIS⟧ **§11 requires NO amendment whatsoever — *"record each attribution claim, preserve history … builder-side authorized leadership resolves attribution"* is satisfied LITERALLY by `P-G` step 5 (`PF-21`).** **§54's *system/human origin* clause does material work for the first time in the series** (`A-28`(b)). **§39, §12, §44, §45, §88, §97, R1, R2, R4, R6, R12 are read as they stand and none is extended, narrowed or reinterpreted.** |

### 4.3 Reconciliation completeness — determination 16

> ⟦ARCHITECT ANALYSIS⟧ **`PF-29` — the task requires explicit amendment identification against EVERY prior
> document this decision touches. The six named documents are checked one by one, and a NIL result is
> recorded as a nil result rather than passed over in silence.**

| Prior document | Amendments required | Named at | Verdict |
|---|---|---|---|
| **AD-01J** | **2** | `A-31`(b) — `C-I`/`C-III` generalised from *determinate predecessor Inquiry* to *determinate ground*; `A-33` — `AA-4` narrowed to the closure-grounded branch | **AMENDED, NOT EDITED.** `J-2`, `C-II`, `C-IV` untouched |
| **AD-01K** | **0** | — | **NIL — CHECKED AND CONFIRMED.** `K-18`, `K-17`, `K-48`, `C-V`, `C-VI`, `C-VII` all survive the grant unamended |
| **AD-01L** | **3** | `A-30` — `C-VIII` admits a window-bounded ground; `A-31`(a) — `B-2`'s ground becomes a parameter; `A-32` — `L-6` must state its scope | **AMENDED, NOT EDITED.** `B-1`, `C-IX`, `C-X` untouched |
| **AD-01M** | **0** | — | **NIL — CHECKED AND CONFIRMED.** Policy C is selected as AD-01M wrote it; `§15.1`'s prior falsification (`A-13`) is unchanged and is not re-stated here |
| **AD-01N** | **4** | `A-28`(b) — `NF-27` gains an event and an extra retention; `A-29` — `AC-4` closed and conjunct (iii) under-specified against a sequence; `A-34` — `NF-30`'s Policy-E layer count; `A-35` — §J.3(3)'s third negative outcome | **AMENDED, NOT EDITED. STILL AT `VALIDATE`. STILL NOT APPROVED** |
| **AD-01O** | **2** | `A-27` — `C-XIII` re-labelled, extended by one row, and stated in permission terms; `A-28`(a) — `O-U` extended to cardinality-plus-traceability | **AMENDED, NOT EDITED. STILL ADVISORY. STILL NOT APPROVED** |

> ⟦ARCHITECT ANALYSIS⟧ **Two completeness properties are asserted and both are checkable against the table
> above.**
>
> 1. **Every amendment this document's Sections 1–3 cite inline has a row in [§4.1](#41-the-nine-amendments-named-and-not-made),
>    and every row in §4.1 is cited inline or is `A-34`, whose absence from §3 is itself recorded
>    (`PF-28(1)`).** **There is no amendment named in the body and dropped from the register, and none in the
>    register that the body does not require.**
> 2. **Every prior document named in this document's predecessor list has an explicit verdict — an amendment,
>    or a checked NIL — in [§4.2](#42-documents-requiring-no-change--each-checked) or the table above.**
>    **AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H and AD-01I each carry a checked NIL;
>    AD-01J, AD-01L, AD-01N and AD-01O carry amendments; AD-01K and AD-01M carry a checked NIL against a
>    decision that touches both of them substantively, which is the stronger form of the result.**

### 4.4 No prior document was silently edited — determination 17, stated as a checked fact

> ⟦ARCHITECT ANALYSIS⟧ **The task requires this to be VERIFIED, not asserted. It is verified against the
> repository's own history rather than against the architect's intention, because an intention is not
> evidence.**
>
> | Check | Result |
> |---|---|
> | Working tree state | **`git status --porcelain` names NO FILE OTHER THAN THIS DOCUMENT.** No prior document, spec or requirements file in the repository carries an uncommitted modification of any kind, at any point during this document's production |
> | The commit that introduced this document | **Exactly ONE file changed: `docs/architecture/03p-cp-registration-attribution-basis-decision.md`.** **1139 insertions, 0 deletions.** **A commit with ZERO deletions cannot have altered an existing line of any file** |
> | Scope of that commit within `docs/architecture/` | **One path. `git show --stat … -- docs/architecture/` returns the same single file** |
> | Consequence for the chain | **`00-*.md` through `03o-*.md`, `schema-phase-0.sql`, `BMEXA_MASTER_SPEC.md` and the consolidated requirements are BYTE-IDENTICAL to their state before this document existed** |
>
> **Therefore: AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I, AD-01J, AD-01K,
> AD-01L, AD-01M, AD-01N and AD-01O are ALL UNEDITED.** **The thirty-five amendments on the register are
> NAMED AND NOT MADE, and only the Project Owner may make any of them.**

### 4.5 The register after this document

> ⟦ARCHITECT ANALYSIS⟧ **`PF-30` — stated because the number is itself a finding, as it was for AD-01N and
> again for AD-01O.**
>
> **AD-01N closed with *"Thirteen unmade amendments across seven documents."* AD-01O added thirteen more and
> closed at `A-1 … A-26` across EIGHT documents, observing that *"the documents cannot all be approved as
> literally written."*** **This document adds NINE — `A-27 … A-35` — across ELEVEN limbs and FOUR target
> documents.**
>
> | Target | Amendments (limbs) | Count |
> |---|---|---|
> | **AD-01N** | `A-28`(b), `A-29`, `A-34`, `A-35` | **4** |
> | **AD-01L** | `A-30`, `A-31`(a), `A-32` | **3** |
> | **AD-01J** | `A-31`(b), `A-33` | **2** |
> | **AD-01O** | `A-27`, `A-28`(a) | **2** |
> | **AD-01K, AD-01M, and every other prior document** | — | **0** |
>
> **The register now stands at `A-1 … A-35`, across NINE documents. NONE has been made.** **`Q0-e` — AD-01M's
> ratification asking the owner to ratify `A-1 … A-n` — is correspondingly larger and is NOT answered here.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Two observations about the shape of the growth, neither of which softens the
> number.** **First, this document is the first in the series to amend AD-01O, which is what a chain does
> when a decision arrives that AD-01O anticipated but could not answer — `A-27` and `A-28`(a) are both
> UPGRADES (an architect's recommendation becoming the owner's rule, and a cardinality rule acquiring the
> traceability clause its own author asked for), not corrections.** **Second, nine amendments for a decision
> that closes `AC-4`, answers `Q1`, settles three of AD-01K's four parameters and de-gates `Q0-d` is a
> FAVOURABLE exchange rate — but it is an exchange rate the owner has to accept explicitly, and
> thirty-five unmade amendments across nine documents is not a state any of those documents can be approved
> in.**

---

## 5. Remaining Product-Owner questions and ratifications

> ⟦BUSINESS DECISION REQUIRED⟧ **Determination 18: is further clarification GENUINELY still required after a
> decision this substantial? **YES**, and the list below is shorter than AD-01O's in one respect and sharper
> in another — it names FEWER architectures and MORE money-bearing parameters.** Per Spec **Rule 1**,
> **§88**, **§97** and consolidated **§1** and **§30**, **none of it is guessed and nothing below is filled
> in from inference.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Discipline for this section, stated once and honoured throughout. NOTHING settled in
> [§3](#3-the-reconciled-architecture) is re-argued here.** `AC-4` is closed and is not re-opened;
> `P-β`, `P-γ` and `P-δ` are answered and are not re-posed; Policy C is selected and the other four are not
> re-weighed; and **every item in `§3.17`'s accounting table keeps exactly the status that table gave it.**
> [§5.2](#52-the-five-new-questions-and-the-rest-carried-forward) is an **INDEX** onto that table, not a
> second adjudication of it.

### 5.1 The ratifications this document itself requires

> ⟦ARCHITECT ANALYSIS⟧ **`PF-31` — one constraint this document has relied on FOUR times has never actually
> been stated, and it is stated here, in the section that [§3.0](#30-the-headline-finding-ac-4-is-answered)
> promised would ask for its ratification.**
>
> **`C-XVI` is cited at the head of this document's numbering discipline, at `PF-4`, at `P-G` step 5 and at
> [§3.14](#314-determination-14--ad-01ks-separation-of-attribution-anchor-from-eligibility-anchor) — always
> as the thing that closes the gap `C-XI`'s wording does not reach, and nowhere as a stated rule.** **A
> constraint that is only ever referred to cannot be ratified, and an unratifiable constraint is not a
> control. It is stated now.**

> ⟦ARCHITECT RECOMMENDATION — `C-XVI`, a constraint⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK:
> authorization rules, CP commission logic, source-of-truth rules. **This is stated as a BUSINESS RULE. No
> schema, table, column, index, query, type, screen or workflow is proposed, implied or derivable from it.**)*
>
> **`C-XVI` — A claim minted on a registration ground is an ORDINARY attribution claim in EVERY respect that
> bears on its resolution. It may be given NO default win, NO presumption, NO tiebreak, NO privileged or
> abbreviated resolution path, NO differential weight, and NO outcome that follows from the mere fact that
> its ground is a registration.**
>
> **Three corollaries, each stated because each is a separate implementation temptation:**
>
> 1. **An UNOPPOSED minted claim is not thereby a RESOLVED claim.** `K-48` conjunct (i) requires *"the
>    RESOLVED attribution claim"* and ⟦SOURCE⟧ **§11** reserves resolution to builder-side authorized
>    leadership. **Whether an unopposed claim requires the same adjudication act as a contested one is
>    `AC-25` and is NOT decided by `C-XVI`** — what `C-XVI` forbids is resolving it *because* it is
>    registration-grounded.
> 2. **A minted claim may LOSE, and losing must be a reachable, recorded, permanent outcome** — `PO-P4`,
>    `K-12`, `K-52`, §3.12 link 3, and `A-35`'s third negative reporting outcome. **A mechanism in which no
>    minted claim has ever lost is evidence that `C-XVI` has been breached in practice.**
> 3. **Visible distinguishability is a PREREQUISITE of `C-XVI`, not a reporting nicety.** `L-25`, ⟦SOURCE⟧
>    **§54**'s *system/human origin* clause and ⟦SOURCE⟧ **§39** each require it independently; **merging
>    minted and filed claims into one population makes `PO-P2` unverifiable after the fact and `C-XVI`
>    unenforceable.**
>
> **Why this must be a stated constraint, in one sentence:** ⟦ARCHITECT ANALYSIS⟧ **`PF-4` established that
> the ONLY discriminator between a GROUND and an ANCHOR is falsifiability; `PO-P4` supplies falsifiability
> in the owner's own words; and `C-XVI` is the rule that keeps the implementation from taking it back.**
> **Without `C-XVI`, `PO-P1` and Reading G are observationally identical in every case where no competing
> claim exists, `C-XI` is breached in practice while intact in wording, and the `(CP × client × Project)`
> triple becomes the attribution anchor by behaviour — which AD-01K's Candidate A and AD-01L's Alt 4 were
> each eliminated for being.**

**The ratifications, consolidated. Every one of them is an ARCHITECT'S derivation FROM the decision, never
the decision's own words, which is why each requires the owner and not the implementation.**

| # | What must be ratified | Where it was derived | Why it cannot be left to implementation |
|---|---|---|---|
| **`C-XVI`** | **A registration-grounded claim gets no privileged resolution of any kind, and losing must be reachable.** | `PF-4`, `P-G` step 5, `§3.14`, and stated in full above | ⟦SOURCE⟧ **§88** MUST-ASK: authorization rules. **This is the single most important ratification in the document.** **The entire safety of `PO-P1` rests on it, and the natural implementation shortcut — a default win for the only claim on the Inquiry — converts `PO-P1` into the reading the owner has already eliminated, by a route `C-XI`'s wording does not reach.** AD-01B §4: unrecoverable once history accumulates. |
| **`P-G`** | **The six-step grounding pathway in [§3.1](#31-determination-1--the-registration--attribution-pathway), in full, including that step 3's operands are `(CP, client, Project, G)` and NOTHING ELSE, and that step 6 is unchanged.** | `§3.1` | ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, relationships, CP commission logic, source-of-truth rules, audit requirements. **`P-G` is the architect's rendering of `PO-P1 … PO-P12` into an ordered rule with a named actor and a governing authority at each step. The owner said what may happen; `P-G` says in what order, at whose hand, and under which rule. If any step's actor or authority is not what the owner intends, `P-G` changes and most of §3 changes with it.** |
| **`C-XV`** | **The MINTING test and the ELIGIBILITY test are two distinct evaluations over the same sequence at two different dates, and neither may be substituted for, cached as, or inferred from the other — and NEITHER RESULT MAY BE STORED ON THE REGISTRATION.** | `§3.1`, `PF-5` | **The two tests share three of their four operands and differ only in a date.** **Evaluating once and reusing MERGES conjunct (i) with conjunct (iii), which `C-XI` and `NF-28` both forbid in terms.** Left to implementation the merge is the cheaper code and will be written. **`C-XV`(3) is also what keeps the registration stateless — no `grounded`, `consumed`, `used`, `spent` or `expired` marker of any kind.** |
| **`PF-6`'s conclusion** | **That NOTHING is added: no `Registration-Derived Claim` entity, no Inquiry→Registration reference as a distinct artefact, no grounding/consumption marker, no Inquiry→Inquiry succession reference, and no `Attribution Basis` object.** | `§3.2` | ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities. **A recommendation to add NOTHING still needs approval, because the alternative is unrecoverable after history accumulates** (AD-01B §4, `I-9`, and AD-01O's identical ratification of `OF-6`). **Five candidates were tested and all five FAILED; the owner is being asked to confirm the failures, not to re-run them.** |
| **`PF-23`'s conclusion** | **The citation is CLAIM-BORNE: the minted claim carries the reference to the specific registration record, and the Inquiry's reference to that registration is DERIVED from its claim set.** | `§3.11` | ⟦SOURCE⟧ **§88** MUST-ASK: canonical entities, relationships, audit requirements. **`PO-P11` says *"an Inquiry must explicitly reference the CP Project Registration record."*** **If the owner intends that LITERALLY — a reference held by the Inquiry itself, in addition to or instead of the claim's citation — that is available and it is the owner's to choose, and it should be chosen KNOWINGLY: an Inquiry-level reference cannot represent two CPs each minting on one Inquiry (`O-U`(5), `AC-20`), and two references that can disagree is the defect `G-8`, `G-9`, `J-36`, AD-01A §3.6/§5.2 and `OF-6` have each refused.** **This is offered as the form in which `PO-P11` can actually be MET, not as a narrowing of it.** |
| **`PO-P7`(b)** | **That the registration actor is expressed as a PERMISSION, scope-bound to the Project — not as the role name *"Helpdesk."*** Folded into **`A-27`** | `§3.7`, `PF-16` | ⟦SOURCE⟧ **R2**, verbatim: *"Roles are tenant-scoped rows, not an enum … Application logic never branches on a role name."* ⟦SOURCE⟧ **§03** lists *"Helpdesk"* among builder-side users — **that is a default role LABEL, not a permission.** **Whether the owner intends the permission to be held ONLY by the default `Helpdesk` role, or by any tenant-defined role granted it, is a §88 authorization answer and is NOT decided here.** |
| **`PF-12`'s second answer** | **That a claim validly minted under a then-live registration is NOT invalidated when that registration later expires.** | `§3.5` | ⟦ARCHITECT ANALYSIS⟧ **It is FORCED — by `C-II`, `K-17`, `PO-O10` and ⟦SOURCE⟧ **§54** — but it is money-bearing and counter-intuitive, and `PO-P5` states only its neighbour.** **The owner should ratify it deliberately rather than discover it, because its visible consequence (`PF-13(1)`) is a CP recorded as the producer of an engagement that converted and not paid for it — and ⟦SOURCE⟧ **§39** shows the CP exactly that.** |
| **The six-link audit chain** | **[§3.12](#312-determination-12--auditability-of-the-registration--attribution-chain)'s six links and four read properties — in particular the NEW mint event and the requirement that where the cited and the consulted registration DIFFER, both are retained together with the fact that they differ.** Folded into **`A-28`**(b) | `§3.12` | ⟦SOURCE⟧ **§88** MUST-ASK: **audit requirements.** ⟦SOURCE⟧ **R6**: *"joining to live tables to render history is wrong"*, and its retention is *"12 months hot"* while **a CP commission dispute can surface years after a booking.** **The claim, its citation, the determination and the exception are BUSINESS FACTS on business records, audited IN ADDITION — not facts that live only in the audit log.** |
| **`A-21`** | **CONFIRM, do not re-decide.** The admissible base is a SPECIFIC registration record's own fixed date, never *"the triple's registration date."* | `§3.11`, `PF-24` | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P12`'s final clause states exactly this in the owner's own words, so `A-21` is ANSWERED IN SUBSTANCE.** **It still requires the owner's signature, because `A-21` is an unmade amendment to AD-01L and only the owner may make it.** |
| **`A-25` + `A-34`** | **The policy mapping: Policy C proper, registration-anchored, condition-only, `N-4`-independent — plus TWO bounded Policy-E layers, not one.** | `§3.16` | ⟦SOURCE⟧ AD-01M **§11.2** makes E's audit obligations live wherever E appears: *"the human decision, its date, its author, and its stated reasons — for every case."* **`PO-N9` supplies that for the exception layer; ⟦SOURCE⟧ §11 plus `C-V` supply it for the adjudication layer. If the owner does not intend the second layer to carry §11.2's obligations, the mapping is wrong and `A-34` changes.** |

### 5.2 The five NEW questions, and the rest carried forward

> ⟦BUSINESS DECISION REQUIRED⟧ **Five items are new and are numbered `AC-22 … AC-26`, continuing AD-01M's,
> AD-01N's and AD-01O's series. NO NEW NUMBERING NAMESPACE IS CREATED.** **None is answered here, no default
> is implied for any of them, and each is stated in full for the first time — §2 and §3 name them, and a
> name is not a question.**

| # | Question | Arises from | Why it cannot be left to implementation |
|---|---|---|---|
| **`AC-22`** | **When the registration whose window contains the MINTING GATE date `G` and the registration whose window contains the BOOKING date `B` are DIFFERENT records — of the same CP, over the same triple, separated by a lapse and a `PO-P8` re-registration — WHICH record governs `NF-28`'s conjunct (iii)? The record the claim CITED, or the record containing `B`? And whose `N` applies?** | `PF-5` configuration 2; `X-22`; `A-29`(b); `§3.13` conjunct (iii) | **`NF-28`'s conjunct (iii) was written against a single registration and `O-U` gives the triple a SEQUENCE.** **The two records may carry different `R` AND different `N`** (`PF-18(4)`), **so the two candidate answers can differ by weeks of protection, not by a day.** ⟦ARCHITECT ANALYSIS⟧ **Left to implementation, whichever join is written first settles it silently and permanently — and the claim's own citation makes the "wrong" answer look authoritative on the page.** **No answer is supplied and no default is implied.** |
| **`AC-23`** | **May a live registration ground a claim on an Inquiry that was ALREADY LIVE when the registration became relevant — that is, on an Inquiry whose server-side clash gate has already passed?** | `PF-22`; `OF-12`; `C-VI` as refined by `A-11`; `Q11` | **Both readings are recorded at equal strength and NEITHER is selected.** **Under YES, `P-G` mints OUTSIDE `C-VI`'s window and `Q11`'s late-filing cut-off must be answered FIRST.** **Under NO, the registration confers NOTHING AT ALL in the owner's own `OF-12` configuration — a registration made while a live Inquiry already covers the interest produces no Inquiry of its own (`J-2`), so there is nothing for it to ground.** ⟦ARCHITECT ANALYSIS⟧ **`Q11` is BLOCKING either way, which is a status change and not a restatement: this is the first mechanism in the series that cannot be specified until `Q11` is answered.** |
| **`AC-24`** | **Which date is the minting gate's `G` — the Inquiry's origination date, the server-side clash-gate evaluation date, or, for a ⟦SOURCE⟧ §12 offline capture, the SYNC-ARRIVAL date?** | `P-G` step 2; `A-11`'s refined `C-VI`; ⟦SOURCE⟧ **§12**; `AC-9`/`T-9` | **`AC-24` is `AC-5`'s COMPANION and must never be conflated with it:** `AC-5` selects the registration that answers conjunct (iii); **`AC-24` selects the registration that may ground a CLAIM — that is, whether a claim EXISTS at all.** ⟦SOURCE⟧ **§12**: *"Never pretend an offline lead has passed the server-side clash gate."* **The candidate dates can fall on OPPOSITE SIDES of a window boundary**, which makes `AC-24` **CLAIM-EXISTENCE-BEARING and not merely money-bearing.** **`T-9` is NOT resolved and `AC-9` is NOT resolved.** |
| **`AC-25`** | **Is the mint at `P-G` step 4 AUTOMATIC — the system records the claim whenever the grounding test passes — or DISCRETIONARY, an explicit authorized act by a named actor? And separately: does an UNOPPOSED minted claim require the same §11 adjudication act as a contested one, or a lighter one?** | `P-G` step 4; `§3.10`'s unopposed-claim row; `C-V`; `L-10`; `C-XVI`(1) | ⟦ARCHITECT ANALYSIS⟧ **This is the largest unanswered DESIGN question the decision produces, and it sits at the top of the register alongside `AC-14`.** **Under AUTOMATIC minting, `L-10`'s finding bites at full strength — every concurrent-registration Inquiry becomes an item of §11 adjudication work for builder-side authorized leadership, and `PF-20(b)` makes that a workload consequence as much as a financial one.** **Under DISCRETIONARY minting, `PO-P1`'s grant is contingent on an operational act the owner has not described, and a CP whose ground plainly exists may never acquire a claim at all.** **`C-V` requires a claim to be RECORDED BY AN EXPLICIT AUTHORIZED ACT; `PO-P1` says the registration *"MAY be the basis,"* which is permissive and does not say by whom.** **The word "MAY" is NOT read as either answer, and no default is implied.** |
| **`AC-26`** | **Is a registration's grounding power SINGLE-USE or REPEATABLE? May ONE live registration ground claims on SEVERAL Inquiries inside its own window — and does it ground a claim on an Inquiry opened AFTER that client's earlier purchase CONVERTED?** | `PF-8`; `§3.3`'s final row; `§3.14`'s `K-26` row | **`PO-P1` says a registration *"may be the basis for CP attribution on A LATER INQUIRY"* — singular — and does not say whether the power is spent by use.** **`Y-1` and `AA-1` are OPEN, and under some of their answers two live Inquiries on one `(client, Project)` are ORDINARY rather than exceptional; one registration would then ground a claim on EACH, and the CP would hold two minted claims from one registration act.** ⟦SOURCE⟧ **§11** names attribution manipulation as a live risk in its own words; `L-13` priced registration volume converting into forward options. **The post-conversion half must be answered WITHOUT reopening `K-26` or `T-5`, which are preserved exactly: `K-26` speaks about a discharged CLAIM and the registration is not one, so `P-G` does not run through its subject at all.** **`Y-1`, `AA-1`, `K-26` and `T-5` are NOT resolved, NOT narrowed and NOT branched.** |

**The rest, carried forward — an INDEX onto [§3.17](#317-which-other-ac-and-open-items-this-decision-affects), which is the authority.**

> ⟦ARCHITECT ANALYSIS⟧ **Grouped by what this decision DID to each item, so the owner can see the shape of
> the register at a glance. **Nothing below re-litigates §3.17; each group's authority is the corresponding
> row of §3.17's table and the status recorded there is the status that governs.** `AC-14` is deliberately
> absent from every group and is taken alone at [§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute).**

| Effect | Items | Authority |
|---|---|---|
| **CLOSED** | **`AC-4`**; AD-01M's **`Q1`** | `§3.0`, `PF-3`; `§3.17` |
| **ANSWERED (AD-01K's parameters)** | **`P-β`** (same project only) · **`P-γ`** (the registration's own window) · **`P-δ`** (contest) — and **`Q4`** with `P-β` | `§3.15`; `§3.17` |
| **DE-GATED** | **`Q0-d`** — formally open as a ratification of `C-IX`'s reasoning, but **OFF this decision's critical path**, because `PO-P4` selects the one `P-δ` branch needing no §88 authorization change | `§3.10`, `PF-21` |
| **NARROWED, NOT RESOLVED** | **`AA-4`** (`A-33`) · **`B-2`**'s ground half (`A-31`(a)) | `§3.2`, `§3.15` |
| **PRIORITY RAISED — NOT ANSWERED** | **`AC-15`** and **`AC-20`** (CP-vs-CP precedence, and whether the second registration may exist) — **raised for a SECOND consecutive document, and now biting at EVERY Inquiry origination inside an overlap rather than only at a booking** · **`Q11`** — **consumer now BLOCKING** | `§3.9`, `PF-20(b)`; `§3.10`, `PF-22`; `§3.17` |
| **ON A SECOND CRITICAL PATH** | **`AA-2`** (project-less preliminary registration) — `AD-01N NF-5(3)` put it on the registration's; **`P-G` step 3 requires the registration to name a Project to satisfy `PO-P1`'s *"same client/project,"* so a project-less registration can ground NOTHING** | `§3.17` |
| **MATERIALLY SHARPER** | **`AC-3`** (claim-layer money-bearing) · **`AC-6`** (**TRIPLY** money-bearing — eligibility, re-registration admissibility, AND claim admissibility, and all three must use ONE convention) · **`AC-8`** (a fourth date derivation) · **`AC-9`**/**`T-9`** (claim-existence-bearing) · **`AC-10`** (newly claim-bearing) · **`AC-18`** (renewability now renews a GROUNDING POWER) · **`AC-21`** (now governs both the uniqueness rule and the grounding rule) · **`Q10`**/**`M-5`**'s uniqueness half (gating a SECOND mechanism; `A-26` acquires a claim dimension) | `§3.4`, `§3.8`, `§3.17` |
| **ENLARGED, NOT RENUMBERED** | **`AC-13`** — by two items: does the §39 portal show a CP a claim **minted in their name that they did not file**, and **before** §11 adjudication? And does it show a CP that their own grounding power has **lapsed**? **`V-7` supplies the mechanism, not the content** | `§3.5`, `PF-13(3)`; `§3.17` |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`** · **`AC-2`** (gains a first-class case) · **`AC-5`** (gains a companion in `AC-24`) · **`AC-7`** (first half answered in substance; second half open and slightly sharper) · **`AC-11`** (**explicitly NOT relieved**, for a second and structurally different reason) · **`AC-12`** · **`AC-16`** · **`AC-17`** · **`AC-19`** · **`N-4`** (still OFF the path unless `AC-14` goes the (L-6·engagement) way) · **`AA-1`**, **`AA-3`**, **`AA-5`** · **`AB-1`**, **`AB-2`**, **`AB-3`** (`AB-3` gains a new inbound route) · **`T-1`**, **`T-3`**, **`T-5`**, **`T-6 … T-11`** · **`V-4`**, **`W-1`** · **`Y-1`**, **`Y-3`**, **`Y-4`**, **`Y-5`** · **`Z-2`**, **`Z-5`** · **`M-9`** | `§3.17`, final rows |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-c`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-35`** | `§4.5` |

### 5.3 `AC-14` restated — the question this decision makes acute

> ⟦BUSINESS DECISION REQUIRED — `AC-14`, RESTATED AND NOT RENUMBERED⟧
>
> **Does a `CP Project Registration` whose Inquiry was closed on Dimension A's INVALID side — wrong number,
> fabricated entry, non-opportunity — retain its protection window; and now that `PO-P1` has been granted,
> does it retain its power to GROUND an attribution claim on a later Inquiry?**
>
> ⟦ARCHITECT ANALYSIS⟧ **`AC-14` is stated alone, in its own subsection, because [§3.17](#317-which-other-ac-and-open-items-this-decision-affects)
> records that its *"priority rises to the top of the register alongside `AC-25`,"* and because it is the
> ONLY open item in the register whose answer changes the OPERAND SET of the rule this document recommends.
> Every other item parameterises `P-G` — a date, a convention, a winner, a timezone, a cadence. `AC-14`
> RE-SHAPES it.**

**What is already settled and must NOT be re-asked.**

| Settled | Authority |
|---|---|
| The lock-in rule is **closure-reason-blind** | `NF-2(2)`, `NF-19(3)` |
| **A Dump is not an input in any direction**, and an expiry is not a Dump | `NF-21`; AD-01O §2.7 |
| **`PO-N4` names nothing that moves a registration**; `PO-N3` forbids the CP resetting, restarting, refreshing or extending the window | ⟦PRODUCT-OWNER DECISION⟧ `PO-N3`, `PO-N4` |
| **`PO-P5` and `PO-P6` bear only on EXPIRY and on REVISITS** — neither says anything about a closure classification | ⟦PRODUCT-OWNER DECISION⟧ `PO-P5`, `PO-P6` |
| **Reading H is selected and `AC-4` is closed** | `§3.0`, `PF-3`, `X-18`, `A-29`(a) |
| **`P-G` step 3's operands are `(CP, client, Project, G)` and the closure classification is NOT among them** | `§3.1` |

> **Therefore the trace is not in doubt and is not the question.** CP A registers a client for Project A. The
> Inquiry is closed on Dimension A's invalid side. **The registration is untouched and remains live.** A
> genuine direct inquiry then arrives from that person inside the window. **Under `P-G` step 3 the grounding
> test PASSES.** **Whether it SHOULD is `AC-14`.**

**The tension, stated at equal strength in both directions. `X-5`'s condition — *"the tension resurfaces the
moment `B-2` is granted"* — is now MET, so `AC-14` is no longer conditional on anything.**

| | **Reading (L-6·ground)** — `L-6` is about the CLOSED INQUIRY being used as a ground | **Reading (L-6·engagement)** — `L-6` is about the ENGAGEMENT having been classified as never having existed |
|---|---|---|
| **What it says about `P-G`** | **`P-G` is UNTOUCHED.** The registration is a different record, classified by nobody, and the incoherence `L-6` identifies does not arise. **`L-6` neither permits nor forbids `P-G`** | **`P-G` is REACHED.** A registration asserting *"this client was introduced for this Project"* over a person the business has recorded as a wrong number is **the same incoherence one level out** |
| **Effect on `N-4`** | **STAYS OFF the critical path** — `X-6` confirmed a second and independent time | **GOES BACK ON IT.** A closure-class list becomes an OPERAND of the minting gate, which is the dependency AD-01M §8.1 priced and which the owner's choice of condition had removed |
| **Effect on `AC-1`** | **Does not arise from this rule** | **REVIVED and made money-bearing** — the authorization posture of the closing-reason tap now governs whether a claim may exist |
| **Effect on `P-G` step 3's operand set** | `(CP, client, Project, G)` | **`(CP, client, Project, G, the closure classification of prior Inquiries on that work record)`** — a materially larger and more expensive rule, **and one `C-XIV` must then be re-tested against, because the added operand is a fact about a WORK history** |
| **Effect on `L-13`'s farming control** | ⟦ARCHITECT ANALYSIS⟧ **The control does NOT operate on `P-G` at all**, because `P-G` never consults the closure. **Combined with `AC-18`'s unbounded renewability, the hazard `L-13`, `MF-9` and `X-13` each named is at its HIGHEST STATED LEVEL in the series** | **The control operates.** `L-13` named `K-22`/`L-6` as *"the primary control against this cost"* and under this reading it is doing that work |
| **What remains as a control under either reading** | **Every registration is an explicit, permissioned, separately audited act carrying its own date (`C-XIII`, `NF-26(9)`, `NF-27`); every mint is separately audited with its system-origin recorded (§3.12 link 2); every minted claim must WIN a §11 adjudication before it is worth anything (`PO-P4`, `C-XVI`).** **The behaviour is visible and attributable rather than silent — which is a real control and is not the same as a bound** | Same, **plus** the closure classification | 

> ⟦ARCHITECT ANALYSIS⟧ **Why this is the sharpest item the decision produces, stated in four sentences and
> without softening.**
>
> 1. **It is the only open item that changes what `P-G` READS.** `AC-6` moves a day, `AC-22` picks a record,
>    `AC-15` picks a winner, `AC-25` picks an actor. **`AC-14` picks the rule's inputs.**
> 2. **It is the only open item that can put `N-4` back on the critical path**, and `N-4` is the item AD-01M
>    §14 Step 3 identified as the expensive prerequisite of Policy C — **the prerequisite the owner's own
>    choice of condition had just removed** (`X-6`, `§3.16`).
> 3. **It is the only place where the decision's greatest structural virtue is also its greatest exposure.**
>    `P-G`'s closure-blindness is what makes it `N-4`-independent, cheap, deterministic and auditable — **and
>    it is the same property that makes a fabricated registration indistinguishable from a real one at the
>    minting gate.**
> 4. **It is visible to the CP.** ⟦SOURCE⟧ **§39** shows the CP their attribution and their eligibility, so
>    whichever way this is answered, the CP sees the consequence.

> **What `AC-14` is NOT, stated because the request is narrow and could easily be over-read.**
>
> **It is NOT a request to ratify or reject `L-6`, and it is NOT a request to reopen `K-22`.** **`L-6` and
> `K-22` are NOT reopened, NOT narrowed and NOT ratified by anything in this document.** **It is a request to
> state `L-6`'s SCOPE** — because `L-6` claims necessity (*"not a policy the owner may or may not adopt; it
> is a fact the model cannot record coherently"*) **and a claim of necessity requires a determinate scope.**
> **`A-32` is the amendment that would follow, and its CONTENT is determined by the owner's answer, not by
> the architect** ([§4.1](#41-the-nine-amendments-named-and-not-made)).
>
> **Both readings are recorded at EQUAL STRENGTH. NEITHER is selected, preferred, ranked, hinted at or made
> easier to choose.** ⟦SOURCE⟧ Spec **Rule 1**, **§88**, **§97**. **This is the Project Owner's alone.**

### 5.4 What the owner should take first

> ⟦ARCHITECT ANALYSIS⟧ **Ordered by how many other items each answer unblocks, NOT by importance. This is
> SEQUENCING ADVICE, not a decision, and it does not rank the questions' commercial weight.**
>
> 1. **Ratify [§5.1](#51-the-ratifications-this-document-itself-requires)'s derivations — `C-XVI` FIRST**,
>    then `P-G`, `C-XV`, `PF-6`'s no-new-entity conclusion and `PF-23`'s claim-borne citation. **Everything
>    in [§3](#3-the-reconciled-architecture) depends on `P-G`, and the SAFETY of everything in §3 depends on
>    `C-XVI`.**
> 2. **`AC-25` — automatic or authorized.** **It decides whether `L-10`'s workload finding bites at full
>    strength and whether `PO-P1` executes without an operational act the owner has not yet described.**
> 3. **`AC-14` ([§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute)) — the only item that
>    changes the rule's operand set**, and the only one that can put `N-4` and `AC-1` back on the path.
> 4. **`AC-15` and `AC-20` together — THIRD consecutive document.** ⟦ARCHITECT ANALYSIS⟧ **The owner should
>    be told which §88 column the answer sits in BEFORE giving it: `C-IX` holds that a binding systemic
>    precedence rule is an AUTHORIZATION change to §11, not a commission setting. No precedence is invented.**
> 5. **`AC-6` — one word (α or β), now moving THREE money-bearing outcomes that must agree**, on pain of a
>    single day producing two live registrations for one triple and defeating `OF-4`'s determinacy.
> 6. **`AC-22`, `AC-24`, and `AC-23` with `Q11`** — the sequence, the gate date and the already-live Inquiry.
>    **`Q11` is now blocking and cannot be deferred behind this rule.**
> 7. **`AA-2`, and `AC-21` with `M-5`'s uniqueness half** — the two items that gate `P-G`'s own operands.
>    **Cheap now; unrecoverable once registrations and claims accumulate** (AD-01B §4).
> 8. **`AC-26`, `AC-18`, and the remainder in the commercial sitting that FIVE consecutive documents have now
>    recommended** — AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5 and this section.
> 9. **Ratify or reject `A-1 … A-35`** (`Q0-e`). **Thirty-five unmade amendments across nine documents. They
>    cannot all be approved as literally written.**
> 10. ⟦SETTLED⟧ **`V-4` remains the cheapest unblocking question in the register and has now been recommended
>    by SEVEN consecutive documents without being taken.** **It does not block this decision and this
>    decision does not block it.**

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in **five** MUST-ASK columns simultaneously — canonical entities,
> relationships, financial logic, CP commission logic, authorization rules — plus audit requirements.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§3](#3-the-reconciled-architecture),
> [§4](#4-the-amendment-register) or [§5](#5-remaining-product-owner-questions-and-ratifications) becomes
> approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **The decision is the Project Owner's, it is internally
coherent, and — decisively — it is not merely compatible with the architecture, it IMPROVES it in four
respects that are worth naming rather than summarising.** **`PO-P4` supplies the falsifiability clause that
`C-XI` needed and could not supply for itself** (`PF-4`); **it selects the ONE branch of `P-δ` that requires
no §88 authorization change to §11** (`PF-21`, `C-IX`), which is the largest governance result in the
document; **`PO-P10`'s seven levels map onto the architecture's existing six WITHOUT A SINGLE ADDITION**
(`§3.13`); and **`PO-P12` states `A-21`'s traceability requirement in the owner's own words**, corroborating
from the owner's direction what AD-01L and AD-01O derived from the architecture's. **`AD-01K requires NO
amendment at all.** Nothing about the decision needs to be argued back to the owner. **What it contradicts
is a small number of the architect's own unapproved recommendations — `C-VIII`'s *"and from nothing else,"*
`B-2`'s stated ground, `NF-30`'s conditional mapping — and never an approved decision anywhere.**

**Why not BUILD NOW.** ⟦ARCHITECT ANALYSIS⟧ **Because the architecture is now determinate in OUTLINE and
indeterminate in OPERANDS, and consolidated §30 forbids letting implementation settle the second.** **This
document has reduced the number of possible ARCHITECTURES from one-and-a-half to ONE** (`§3.17`): there is
now exactly one pathway, it reuses `B-2`'s citation mechanism entirely, it adds no entity, and §11 needs no
amendment. **But a rule is not implementable because its SHAPE is settled. `P-G` step 3 cannot be specified
without knowing which date `G` is (`AC-24`), which boundary convention bounds it (`AC-6`), or whose
timezone projects it (`AC-8`). `P-G` step 4 cannot be specified without knowing whether the mint is
automatic or authorized (`AC-25`). `P-G` step 5 cannot be specified without `C-XVI` being ratified, and
without knowing whether an unopposed claim is adjudicated like a contested one. `P-G` step 6 cannot be
specified without knowing which registration governs conjunct (iii) when two are in play (`AC-22`).** **Four
of the six steps have an unanswered operand, and every one of those operands is an owner answer rather than
an architecture problem.**

**And three findings in this document are, on their own, disqualifying for BUILD NOW:**

- **`AC-14` is ACUTE and sits at the TOP of the register** (`§3.17`, `§5.3`). **`X-5`'s condition is MET.**
  **It is the only open item that changes what `P-G` READS**, and answering it one way puts `N-4` and
  `AC-1` back on the critical path that the owner's own choice of condition had just taken them off.
- **`AC-15` and `AC-20` are NOT ANSWERED and their priority is RAISED AGAIN — a third consecutive
  document.** **Under this decision they stop biting at bookings and start biting at EVERY Inquiry
  origination inside an overlap** (`PF-20(b)`), **which converts an occasional financial question into a
  standing workload on builder-side authorized leadership** (`L-10` realised). **No precedence is invented,
  and `C-IX` still holds that inventing one is a §88 authorization change.**
- **`AA-2` is now on a SECOND critical path.** **`P-G` step 3 requires the registration to name a Project in
  order to satisfy `PO-P1`'s *"same client/project,"* so a project-less registration can ground NOTHING** —
  and `AA-2` asks whether project-less registrations exist at all.

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not.** **Every item on the gating list below is a one-sentence answer from the Project Owner:
which date, which convention, which record, who acts, does a fabricated registration count, may a second CP
register.** **A further architect document would be analysis substituting for a decision — AD-01L's own
words, applied now for the fourth time.** **Shelving would also waste what the decision has already bought,
and what it has bought is substantial:**

- **`AC-4` is CLOSED after SEVEN consecutive documents, and with it AD-01M's `Q1`** — the highest-leverage
  question in the register since AD-01M §14 Step 2.
- **Three of AD-01K's four parameters are ANSWERED (`P-β`, `P-γ`, `P-δ`) and the fourth (`P-α`) is taken OFF
  the path** — `N-4` confirmed off the critical path from a second and independent direction.
- **`Q0-d`/`C-IX` is DE-GATED**: the owner selected the branch that sits behind no additional §88 bar, so
  ⟦SOURCE⟧ **§11 requires no amendment whatsoever.**
- **`K-18` is CONFIRMED for a third consecutive document, and AD-01K is amended NOWHERE** — the strongest
  available evidence that the attribution anchor was right.
- **`I-9`'s no-new-entity standard is MET for the EIGHTH consecutive document**, with five candidate
  artefacts tested and all five failing.
- **`B-2`'s closure-grounded branch changes status from BLOCKING to OPTIONAL** — the architecture executes
  without it (`PF-25`). **That is a real change and it is the second-largest result in the document.**
- **`C-XIV` gains a second, independent justification** (`PF-15`): it is what keeps `PO-P1` safe, by holding
  the grounding test's operand set to `(CP, client, Project, date)` and nothing else.

### 6.1 The gating list — what must be answered before anything is built

> ⟦ARCHITECT ANALYSIS⟧ **Stated as an explicit, closed, named list, because `VALIDATE` without a gating list
> is indistinguishable from `BUILD NOW` with a caveat.** **Ten items. Every one is an owner answer. NONE is
> answered here, NO default is implied for any of them, and nothing below is softened.**

| # | Gate | Status |
|---|---|---|
| **1** | **`C-XVI`** — a registration-grounded claim gets no privileged resolution of any kind | **STATED FOR THE FIRST TIME at [§5.1](#51-the-ratifications-this-document-itself-requires). UNRATIFIED.** Without it `PO-P1` becomes the reading the owner has already eliminated, by a route `C-XI`'s wording does not reach |
| **2** | **`P-G`, `C-XV`, `PF-6`'s no-new-entity conclusion, `PF-23`'s claim-borne citation, `PF-12`'s survival rule, and the six-link audit chain** | **ALL ARCHITECT DERIVATIONS. ALL UNRATIFIED.** §5.1 |
| **3** | **`AC-25`** — automatic mint or authorized discretionary act; and is an unopposed minted claim adjudicated like a contested one | **NOT ANSWERED. Top of the register.** It decides whether `PO-P1` executes at all and what `L-10`'s workload is |
| **4** | **`AC-14`** — does an invalid-side closure retain its protection window and its grounding power | **NOT ANSWERED. Top of the register.** [§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute). **The only item that changes `P-G`'s operand set** |
| **5** | **`AC-15` and `AC-20`** — who wins between two live registrations, and may the second exist | **NOT ANSWERED. PRIORITY RAISED A THIRD TIME.** No precedence invented; `C-IX` names the §88 column |
| **6** | **`AC-22`** — which registration governs conjunct (iii) when the cited and the consulted record differ | **NOT ANSWERED.** `PF-5` configuration 2; `A-29`(b). **Weeks of protection turn on it, not a day** |
| **7** | **`AC-24`, with `AC-9`/`T-9`; and `AC-23` with `Q11`** — which date is `G`, offline included; and may an already-live Inquiry be minted on | **NOT ANSWERED. `Q11` is now BLOCKING.** Both are claim-EXISTENCE-bearing |
| **8** | **`AC-6`** — the boundary convention, now **TRIPLY** money-bearing, and all three uses must agree | **NOT ANSWERED. PRIORITY RAISED A SECOND TIME.** Disagreement produces two live registrations for one triple on a boundary day |
| **9** | **`AA-2`; and `AC-21` with `M-5`'s uniqueness half** | **NOT ANSWERED.** Both gate `P-G`'s own operands — the Project term and the client term |
| **10** | **`AC-26`** — is the grounding power single-use or repeatable, inside the window and after a conversion | **NOT ANSWERED.** Coupled to `Y-1`, `AA-1`, and to `K-26`/`T-5`, which are preserved exactly |

**What VALIDATE means concretely.**

1. **Take [§5.4](#54-what-the-owner-should-take-first)'s items 1–3 first** — ratify `C-XVI` and `P-G`, then
   `AC-25`, then `AC-14`. **Three answers close four of the ten gates.**
2. **Take the remainder in the commercial sitting that FIVE consecutive documents have now recommended.**
3. **Ratify or reject `A-27 … A-35` alongside `A-1 … A-26`** (`Q0-e`). **Thirty-five unmade amendments
   across nine documents.**
4. **Nothing may be built meanwhile that presupposes an answer.** ⟦SOURCE⟧ consolidated **§30**.
   **Specifically NOT to be built:** no CP registration record, no registration sequence, no uniqueness
   constraint of any kind, no expiry flag, no re-registration act, no lock-in configuration attribute, **no
   minting gate, no grounding test, no minted claim, no claim-citation reference, no registration-derived
   claim population, no `Attribution Basis` object, no grounded/consumed/used/spent marker on a
   registration, no Inquiry-level registration reference**, no eligibility determination artefact, no
   exception record, no override permission, no `Visit`/`Revisit` entity, no `is_revisit` field, no visit
   counter, no commission scaffolding of any kind, **no precedence or tiebreak between two claims**, and no
   Dump-reason value list.

### 6.2 Is the CP architecture now implementation-ready? — **NO**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-32` — stated explicitly and without softening, because *"the owner has decided
> it"* is even easier to read as *"it is settled"* than *"the owner has clarified it"* was.**
>
> **The CP architecture is NOT implementation-ready, and this decision does not make it ready.**
>
> **What HAS changed is the KIND of gap that remains, and that change is real.** AD-01O closed by reporting
> that the register's largest item was *"does a protection fact license a claim?"* — **an ARCHITECTURAL
> question, because the two answers produced two different architectures.** **That question is now answered.
> Everything on [§6.1](#61-the-gating-list--what-must-be-answered-before-anything-is-built)'s list except
> `AC-14` is a PARAMETER of one architecture rather than a choice between two.** **`AC-14` is the exception,
> and that is precisely why [§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute) takes it
> alone.**
>
> **The honest arithmetic, and it is not flattering to the count even though it is favourable to the
> shape.** This decision **CLOSES two items outright** (`AC-4`, `Q1`), **ANSWERS three of AD-01K's four
> parameters and takes the fourth off the path**, **DE-GATES one blocker** (`Q0-d`/`C-IX`), **NARROWS two**
> (`AA-4`, `B-2`'s ground half), **SHARPENS eight**, **RAISES the priority of four** (`AC-14`, `AC-15`,
> `AC-20`, `Q11`) **and ADDS FIVE** (`AC-22 … AC-26`). ⟦ARCHITECT ANALYSIS⟧ **It reduces the number of
> possible ARCHITECTURES from one-and-a-half to ONE. It reduces the number of BLOCKING QUESTIONS by roughly
> one, and it CHANGES WHICH ONES BLOCK — and a register that shrinks by one while its composition turns over
> is not a register that has been cleared.**
>
> ⟦SETTLED⟧ **`M-9`, the commission model, still cannot start.** It consumes `K-18`, `K-48` as extended by
> `NF-28`, `K-47`, `K-26`, `AA-3`, `AB-1 … AB-3`, `AC-1 … AC-3`, `AC-5 … AC-21` and now `AC-22 … AC-26`,
> `O-U`, `P-G` and `C-XVI`. **`B-2`'s answer is no longer among its blockers, which is a genuine reduction —
> and it is the only one.** **Starting `M-9` before the sitting would still require inventing every one of
> the rest.**
>
> ⟦ARCHITECT ANALYSIS⟧ **One closing observation about the exchange rate, offered as an observation and not
> as an argument for building.** **A decision that closes a seven-document question, answers three of four
> parameters, de-gates a §88 blocker, requires no new entity and amends AD-01K nowhere — while costing nine
> unmade amendments and five new open items — is a good trade. It is not a finished trade. The nine
> amendments and the ten gates are the unpaid half of it, and they are the Project Owner's to pay.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§6](#6-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being asked
to reconcile a Product-Owner decision is not permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**:
canonical entities, relationships, financial logic, CP commission logic, authorization rules and audit
requirements are all **MUST ASK BEFORE DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT
EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧ Consolidated **§30**: *"No schema/code implementation should be inferred
from an unresolved product ambiguity."*

**The Product Owner's decision is NOT re-argued, NOT weighed and NOT softened anywhere above.** It is
⟦PRODUCT-OWNER DECISION⟧ throughout, recorded verbatim at
[§1.2](#12-the-decision-recorded-verbatim-before-any-analysis) as `PO-P1 … PO-P12` **before any analysis
touched it.** Everything the architect adds — **`P-G`**, the constraints **`C-XV`** and **`C-XVI`**, the
findings **`PF-1 … PF-32`**, the contradictions **`X-18 … X-22`** and the amendments **`A-27 … A-35`** — is
⟦ARCHITECT RECOMMENDATION⟧ or ⟦ARCHITECT ANALYSIS⟧ and is **NOT APPROVED.**

**No prior document is modified.** AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I,
AD-01J, AD-01K, AD-01L, AD-01M, **AD-01N** and **AD-01O** are all **unedited**, and
[§4.4](#44-no-prior-document-was-silently-edited--determination-17-stated-as-a-checked-fact) states that as
a **checked fact** against the repository's own history rather than as an intention. **AD-01N remains at
`VALIDATE` and is not approved; AD-01O remains advisory and is not approved.** **The nine amendments this
document finds necessary — `A-27 … A-35`, across eleven limbs and four target documents — are NAMED and NOT
MADE, and only the Project Owner may make them.** `A-1 … A-26` remain named and not made. **`A-34` is
introduced in [§4.1](#41-the-nine-amendments-named-and-not-made) rather than in §3, and the reason is
recorded at `PF-28` rather than left implicit.** **The reserved contradiction range `X-18 … X-24` is NOT
exhausted: five contradictions were found and `X-23` and `X-24` are NOT ALLOCATED, because no sixth
surfaced and inventing one would be the same defect as inventing a business rule.**

**NO NEW ENTITY IS PROPOSED BY THIS DOCUMENT.** The necessity test was run in full against five candidate
artefacts ([§3.2](#32-determination-2--a-new-mechanism-or-an-existing-one)) — a distinct
`Registration-Derived Claim`, an `Inquiry → Registration` reference, a grounding/consumption marker, an
`Inquiry → Inquiry` succession reference, and an `Attribution Basis` object — **and ALL FIVE FAILED.** **The
registration → attribution pathway REUSES AD-01L's `B-2` citation mechanism in its entirety, substituting
the `CP Project Registration` record for the closed predecessor Inquiry as the citation's ground.**
**`I-9`'s standard is MET for the eighth consecutive document.**

**No SQL, schema, migration, master value, column, table, index, constraint or type is authorized by
anything above, and none may be derived from it — `P-G`, `C-XV` and `C-XVI` are BUSINESS RULES and are
expressly NOT database artefacts of any kind.** **No commission formula, rate, slab, percentage, amount,
milestone value, clawback quantum, passback rule or TDS treatment appears anywhere — `M-9` owns all of it.**
**No lock-in number, minimum, maximum or default is proposed.** **No UI, screen, workflow, approval step or
gate is designed.** **No Dump-reason value is proposed.** **No precedence rule between two CPs is invented.**
**No re-registration cadence, minimum gap or cap is invented.** **No boundary convention is selected.** **No
mechanism that extends, resets, refreshes or tolls a LIVE protection window is proposed, designed or implied
— `PO-N3`, `PO-N4`, `PO-O6` and `PO-P6` are honoured literally.** **No state, flag, marker or lifecycle of
any kind is added to the registration — it *"has no states"* and it acquires none here.**

**`Q1` is ANSWERED by the owner and is therefore not reopened by the architect; `Q4`, `Q6`, `Q7`, `V-1`,
`V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2` and AD-01K's `K-18` attribution anchor are NOT reopened —
and `K-18` is CONFIRMED for a THIRD consecutive document.** **`K-26` and `T-5` are preserved exactly.**
**`L-6` and `K-22` are NOT reopened, NOT narrowed and NOT ratified — `A-32` asks only that `L-6` state its
own scope, and `AC-14` owns the answer.** **`M-5`'s uniqueness half and `Q10` are NOT resolved — they are
NAMED as gating a second mechanism, and naming a dependency is not resolving it.** **No unrelated open item
is resolved** — `AA-1`, `AA-3`, `AA-5`, `AB-1 … AB-3`, `AC-1 … AC-3`, `AC-5 … AC-13`, `AC-15 … AC-21`,
`N-4`, `T-1`, `T-3`, `T-6 … T-11`, `Q10`, `Q11`, `V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5` and
`M-9` all carry forward unchanged. **`AA-2` and `AA-4` are NOT resolved: `AA-2` is named as newly on a
second critical path and `AA-4` is NARROWED — and neither being named nor being narrowed is being
answered.**

**The decision's architectural half is reconciled here, and it reconciles cleanly: one pathway, no new
entity, no amendment to §11, no amendment to AD-01K, and the `(CP × client × Project)` triple still not an
anchor.** **Its commercial remainder — `AC-14` above all, restated at
[§5.3](#53-ac-14-restated--the-question-this-decision-makes-acute) as the single question this decision
makes acute, and `AC-25` beside it — is `BUSINESS DECISION REQUIRED` and is the Project Owner's alone.**
Per Spec **Rule 1**: *do not invent requirements.* Per **§97**: *when in doubt, **STOP AND ASK**.* **This
document is the asking.**
