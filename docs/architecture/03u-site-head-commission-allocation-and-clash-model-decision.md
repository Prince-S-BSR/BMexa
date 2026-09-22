STATUS: PROPOSED — NOT APPROVED

# AD-01U — The CP Clash Resolution Model CORRECTED: clash detection, the Site Head's post-booking COMMISSION-ALLOCATION decision, and the eligibility/approval/payout lifecycle held apart — reconciling the Project Owner's twelve-step workflow and A/B/C taxonomy into AD-01J … AD-01T

**What this document is.** The Project Owner has answered the **one question AD-01T posed back to them** at
its [§6.2](./03t-p-g-sequence-ratification-and-clash-authority-decision.md) — *"you have told us who decides
when two channel partners both claim the same buyer … what we still have no answer for is WHAT THEY DECIDE
ON … do you want a stated basis they must follow, or do you want it left entirely to their judgement?"* —
and the answer is the second branch, **stated in a form the question did not anticipate.** The answer is
**authoritative business input.** It is **not re-argued, weighed against an alternative, ranked, hedged or
softened anywhere below.**

**Why this document is not like AD-01R, AD-01S or AD-01T.** Those three each ratified or clarified **ONE
POINT** inside a model that was already drafted. **This one does not.** The owner has described a resolution
mechanism that is **post-booking**, **evidence-optional**, and **capable of dividing one booking's commission
across MORE THAN ONE Channel Partner** — where AD-01J, AD-01K, AD-01P and AD-01T had built toward a
**pre-booking**, **winner-takes-all** §11 adjudication producing **one** resolved attribution claim. **The
first duty of this document is to say plainly whether that is a genuine contradiction or a compatible
refinement, and it does so at [§2](#2-the-two-investigations) before it determines anything else.**

**What this document does.** It records the decision verbatim; runs **two investigations** and states both
conclusions without softening; builds the owner's **A/B/C model** as its central structural finding; works
the **split-allocation representation** and reconciles it against `NF-28`; verifies the owner's **locked
list** item by item; names the amendments it requires; and accounts individually for every open item it does
**not** reach. **Every amendment it finds necessary is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **[§6](#6-recommendation)'s recommendation is advisory.** Nothing below
is self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE`; AD-01O remains advisory;
AD-01P, AD-01Q, AD-01R, AD-01S and AD-01T all remain at `VALIDATE` and none is approved.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · AD-01P ·
AD-01Q · AD-01R · AD-01S · **AD-01T**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the decision recorded here in its entirety, AD-01T's `PO-T1 … PO-T3`, AD-01S's `PO-S1`/`PO-S2`, AD-01R's `PO-R1`/`PO-R2`, AD-01Q's `PO-Q1`/`PO-Q2`, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including this decision — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**High-water marks were VERIFIED against AD-01T's own text before anything was minted, not taken on trust,
and not taken from AD-01T's close reason either.** **AD-01T closed at `PF-94`, `A-53`, `AC-33`, `C-XX` and
`X-25` — with `X-26` expressly NOT allocated.** **All five were re-derived from the file itself and all five
check out.**

**Findings continue AD-01P's, AD-01Q's, AD-01R's, AD-01S's and AD-01T's shared series as `PF-95 … PF-118`.**
⟦ARCHITECT ANALYSIS⟧ **No `UF-` series is minted, for the reason AD-01Q gave for declining `QF-`, AD-01R for
declining `RF-`, AD-01S for declining `SF-` and AD-01T for declining `TF-`.**

**ONE new constraint IS minted, as `C-XXI`, and the `C` series moves to `C-XXI`.** ⟦ARCHITECT ANALYSIS⟧
**One, not two, and the count is reported rather than fitted. The owner has described a decision the
architecture has no clause for at all; a decision point with no numbered clause is a decision point an
implementation will attach to the nearest existing one, and the nearest existing ones are `C-XX` (the
attribution decision) and `NF-24` (the eligibility exception) — both of which it must NOT be merged into.**
`C-XXI` is that clause and it is the whole of what this document adds to the `C` series —
[§4.1](#41-c-xxi-the-allocation-decision-clause-minted-and-stated-in-full).

**ONE new contradiction IS minted, as `X-26`, and the `X` series moves to `X-26` for the first time since
AD-01Q.** ⟦ARCHITECT ANALYSIS⟧ **AD-01T ran its contradiction search and allocated nothing. This document
runs the same search and allocates one — [§5.4](#54-the-contradiction-search-run-in-full) — and the item it
allocates is the SAME DEFECT AD-01Q's `X-24` found, in the SAME owner list, at a SECOND place. It is minted
separately rather than folded into `X-24` because the missing level is a different level.**

**TWO new open items ARE minted, as `AC-34` and `AC-35`, and the `AC` series moves to `AC-35`.** ⟦ARCHITECT
ANALYSIS⟧ **Both are CHECKED RESULTS, not artefacts of momentum. `AC-34` is the residual-allocation question
the owner's instruction expressly forbids this document from deciding. `AC-35` is
[§2.1](#21-investigation-1--the-timing-and-model-question-against-c-iv-and-k-18)'s residual and it is this
document's [§6.2](#62-the-one-next-question).**

**Amendments that are logically required but deliberately NOT made continue as `A-54 … A-57`**
(`A-1 … A-53` remain named and not made). ⟦ARCHITECT ANALYSIS⟧ **FOUR — one more than AD-01R, AD-01S and
AD-01T each produced, and the difference is reported rather than explained away: three of the four exist
because a decision point the architecture never modelled has to be inserted between two it did.**

> ⟦ARCHITECT ANALYSIS⟧ **One collision warning, stated once and then relied upon.**
>
> **`PO-U1`, `PO-U2` and `PO-U3` are this document's labels for the owner's three clauses, and the `PO-`
> prefix is load-bearing and is never dropped.** **`PO-U1·1 … PO-U1·12` are the owner's twelve numbered
> workflow steps; `PO-U2` is the A/B/C taxonomy; `PO-U3` is the block of explicit prohibitions and preserved
> distinctions.** **The numbering is the architect's; the content is the owner's.** **No bare `U-n`
> identifier is used anywhere for these.** ⟦SETTLED⟧ **AD-01E's `U-1 … U-20` are a pre-existing series and
> are untouched, unreferenced as owner clauses, and not reopened.**

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step, queue, notification or gate is designed (AD-01A **§8.5**). **No commission formula, rate,
slab, percentage VALUE, amount, milestone value, clawback quantum, passback rule or TDS treatment appears
anywhere — `M-9` owns all of it. No lock-in number is proposed. No boundary convention is selected —
`AC-6` is NOT resolved here.**

**NO EVIDENCE-SCORING MODEL, EVIDENCE-RANKING MODEL, AUTOMATIC PRECEDENCE FORMULA OR MANDATORY
EVIDENCE-UPLOAD WORKFLOW IS INVENTED, PROPOSED, RANKED, HINTED AT OR IMPLIED ANYWHERE.** ⟦PRODUCT-OWNER
DECISION⟧ **`PO-U3` forbids each of these by name. They are not merely undesirable here; they are
prohibited.** **No field, property, weight, score, tier or ordering that could serve as one is proposed
anywhere, including inside `C-XXI` and including inside the `Q-AR` amendment at
[§7.2](#72-the-four-amendments-named-and-not-made).**

**NO ROUNDING RULE, RESIDUAL-ALLOCATION RULE, SUM-TO-100 RULE, MINIMUM-SHARE RULE OR TIEBREAK IS INVENTED,
PROPOSED OR IMPLIED — `AC-34` is MINTED to hold that question and is NOT ANSWERED** —
[§8.1](#81-the-two-new-questions-ac-34-and-ac-35).

**NO LITERAL ROLE-NAME BRANCH, ENUM, ROLE KEY, PERMISSION KEY OR ROLE HIERARCHY IS INVENTED, PROPOSED OR
IMPLIED ANYWHERE.** ⟦SOURCE⟧ **R2**: *"Application logic never branches on a role name."* **`C-XXI` follows
`C-XX`'s construction exactly and adds nothing to it in principle.**

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's `K-26`,
`K-52` and `T-5`, and AD-01L's `L-6` and `K-22` are NOT reopened.** **`Q-OV` and `Q-AR` are adopted as
AD-01Q recommends them; `Q-OV` is NOT narrowed and NOT widened, and `Q-AR` is AMENDED-BY-NAME ONLY.**
**`PO-R1`, `PO-S1` and `PO-T1 … PO-T3` are LOCKED and none is reopened, qualified or conditioned by anything
below — with ONE consequence for `PO-T1·9` that is NOT a qualification and is stated as a QUESTION to the
owner rather than as a finding against them** —
[§2.1](#21-investigation-1--the-timing-and-model-question-against-c-iv-and-k-18).

---

## 1. The decision

### 1.1 The source of this decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-95` — recorded first, because the provenance determines which register row the
> answer may be posted against, and this time the answer lands on the row it was addressed to AND on a row
> nobody had opened.**
>
> **AD-01T closed at `VALIDATE` with an EIGHT-item gating list at its §6.1, and posed `AC-15`/`AC-20` back to
> the owner at §6.2 as the single next question. Its first limb, verbatim:**
>
> > *"So: do you want a stated basis they must follow — and if so, what is it? **Or do you want it left
> > entirely to their judgement, case by case, with only their written reasons on the record?**"*
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner has answered the SECOND branch — left to judgement, no stated basis —
> and has gone further than the question asked in three respects that the question did not anticipate:**
>
> | # | What the owner added beyond the question | Where |
> |---|---|---|
> | **1** | **The decision is located AFTER a successful booking, not at §11 capture time** | `PO-U1·1`, `PO-U1·2` |
> | **2** | **The decision's OUTPUT is a commission ALLOCATION, and it may name MORE THAN ONE CP** | `PO-U1·8`, `PO-U1·10`, `PO-U2·B` |
> | **3** | **Evidence is expressly NOT a precondition of the decision** | `PO-U1·7`, `PO-U1·11` |
>
> ⟦ARCHITECT ANALYSIS⟧ **The first and second of those are why this document runs two investigations before
> it determines anything. AD-01T's question was framed inside a model in which the answer would be a RULE
> applied at a PRE-BOOKING step producing ONE winner. The owner's answer is not a rule, is not applied at
> that step, and does not produce one winner. A document that recorded this as *"AC-15 answered"* and moved
> on would have hidden the entire structural content of the answer.**
>
> **`AC-15`'s content limb is nevertheless CLOSED BY A DIRECT PRODUCT-OWNER RULING — the FOURTH item in this
> series closed that way, after `AC-14` at AD-01R, `C-XVI` at AD-01S and `P-G` at AD-01T** —
> [§5.1](#51-ac-15-and-ac-20--what-is-closed-and-what-is-not).

### 1.2 The decision, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened, qualified or treated as an option.**

> ⟦PRODUCT-OWNER DECISION⟧ **The framing sentence, verbatim:**
>
> > *"The previously proposed framing of a predefined evidence/rule framework is NOT what the business
> > wants."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1` — the twelve workflow steps, verbatim:**

| # | Step, verbatim |
|---|---|
| **`PO-U1·1`** | *"A booking succeeds."* |
| **`PO-U1·2`** | *"If there is a CP clash, the clash is surfaced to the Site Head."* |
| **`PO-U1·3`** | *"The Site Head reviews the available information and can directly discuss the matter with the involved Channel Partners."* |
| **`PO-U1·4`** | *"The Site Head personally makes the commercial decision about how the commission should be allocated."* |
| **`PO-U1·5`** | *"BMexa does NOT calculate a winner from evidence."* |
| **`PO-U1·6`** | *"BMexa does NOT use an evidence score."* |
| **`PO-U1·7`** | *"BMexa does NOT require evidence documents to be uploaded for the Site Head's decision."* |
| **`PO-U1·8`** | *"The Site Head can decide: 100/0, 0/100, 50/50, 40/60, 60/40, 30/70, or another permitted allocation."* |
| **`PO-U1·9`** | *"The Site Head may enter the allocation as percentage OR explicit commission amount per CP."* |
| **`PO-U1·10`** | *"The system records the Site Head's decision and the resulting CP commission allocation."* |
| **`PO-U1·11`** | *"The underlying evidence/reasoning may exist outside BMexa or be discussed directly between Site Head and CPs; BMexa does not require an uploaded evidence package merely to permit the decision."* |
| **`PO-U1·12`** | *"The Site Head is responsible for reviewing the available information and making the commercial call."* |

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-U2` — the required architectural distinction, verbatim, including its
> instruction:**
>
> > *"Required architectural distinction — do not describe this as BMexa algorithmically resolving 'which CP
> > won.' Instead distinguish:*
> > - ***A. CP claim/clash detection** — BMexa identifies that competing CP claims exist.*
> > - ***B. Site Head commercial commission-allocation decision** — after booking success, Site Head decides
> >   how the commission is allocated among the competing CPs.*
> > - ***C. Commission eligibility/approval/payout** — downstream financial lifecycle follows the resulting
> >   allocation."*
>
> **And the clause attached to it, verbatim:**
>
> > *"The Site Head's decision can produce one CP receiving 100%, another receiving 100%, or a discretionary
> > split between multiple CPs. The system must preserve the exact allocation decided. The allocation must be
> > representable as either percentage-based or amount-based."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-U3` — the prohibitions and the preserved distinctions, verbatim:**
>
> | # | Clause |
> |---|---|
> | **`PO-U3·a`** | *"Do NOT invent a scoring model, evidence-ranking model, automatic precedence formula, or mandatory evidence-upload workflow."* |
> | **`PO-U3·b`** | *"Do NOT reinterpret the registration as having special weight"* — **`C-XVI` unchanged: a valid registration can ground a CP claim, but gives the claim zero special weight.** |
> | **`PO-U3·c`** | *"Do NOT reinterpret this as automatic attribution"* — **a registration-backed claim can still lose or receive only part of the commission allocation.** |
> | **`PO-U3·d`** | *"Preserve the distinction between: registration validity / CP claim / clash detection / booking success / Site Head commission allocation / commission eligibility / commission approval / payout."* |

### 1.3 What this decision does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14`, `PO-P1 … PO-P12`, `PO-Q1`, `PO-Q2`, `PO-R1`/`PO-R2`,
> `PO-S1`/`PO-S2` and `PO-T1 … PO-T3` are untouched except where `PO-U1 … PO-U3` restate one of them, and
> every one of them remains in force.** In particular:

| Prior clause | Status after `PO-U1 … PO-U3` |
|---|---|
| **`PO-P1`** — a currently-valid registration MAY ground a CP attribution claim on a later inquiry, same client/project, subject to normal attribution/clash rules | **UNCHANGED and EXPRESSLY PRESERVED by `PO-U3·b`'s own words — *"a valid registration can ground a CP claim."*** |
| **`PO-P2`/`PO-P4`** — registration is NOT automatic attribution and NOT an automatic clash winner | **RESTATED by `PO-U3·b` and `PO-U3·c`, and therefore stated by the owner for a SIXTH time** counting `PO-O13`/`PO-O14`, `PO-P2`/`PO-P4`, `PO-R1·f`, `PO-S1·4`/`PO-S1·8` and `PO-T1·5`/`PO-T3` bullet 4 |
| **`PO-P3`** — registration is NOT automatic commission eligibility | **UNCHANGED, and RESTATED IN SEQUENCE FORM by `PO-U2·C`, which places eligibility DOWNSTREAM of the allocation and therefore two links downstream of the claim** |
| **`PO-P10`** — the seven levels the architecture must never conflate | **UNCHANGED as a PROHIBITION, and REINFORCED by `PO-U3·d`, which is `PO-P10`'s discipline restated over an eight-term list.** ⟦ARCHITECT ANALYSIS⟧ **Its ENUMERATION is now incomplete in a SECOND place** → **`X-26`**, `A-56` |
| **`PO-Q1`** — the Site Head attribution/clash override | **UNCHANGED, UNTOUCHED, NOT REPLACED and NOT SUBSUMED** — [§2.2](#22-investigation-2--is-this-q-ov) |
| **`PO-Q2`** — the audit-reconstruction requirement | **UNCHANGED and REINFORCED — and `Q-AR` REQUIRES NEW LINKS FOR THE FIRST TIME SINCE AD-01Q**, because the owner has NAMED terms the chain does not carry → `A-55`, [§5.7](#57-q-ar-the-owners-own-chain-checked-link-by-link) |
| **`PO-R1`**/**`PO-R2`** — `AC-14` = Option A, and the recorded anti-abuse tradeoff | **UNCHANGED, LOCKED, ORTHOGONAL and NOT REOPENED.** Nothing here reads a closure or consumes a registration |
| **`PO-S1`**/**`PO-S2`** — `C-XVI` = No Special Weight, and the preserved chain | **UNCHANGED, LOCKED, and RESTATED by `PO-U3·b`/`PO-U3·c` — the owner's SIXTH statement** — [§5.2](#52-c-xvi-re-verified-in-a-richer-outcome-space) |
| **`PO-T1·1 … PO-T1·8`** — the first eight ratified steps | **UNCHANGED and NOT REACHED.** ⟦ARCHITECT ANALYSIS⟧ **Nothing in `PO-U1 … PO-U3` speaks to Inquiry origination, the live-registration check, the claim mint, the registration's lack of weight, or the override's availability** |
| **`PO-T1·9`** — *"Only after attribution is resolved, and only if the Inquiry converts, is commission eligibility evaluated"* | ⚠ **THE ONE CLAUSE WHOSE CONTINUED READING IS NOT SETTLED BY THE OWNER'S WORDS.** **It is NOT contradicted on this document's conclusion, and it is NOT confirmed either** → **`AC-35`**, [§2.1](#21-investigation-1--the-timing-and-model-question-against-c-iv-and-k-18) |
| **`PO-T1·10`**/**`PO-T2`**/**`PO-T3`** — approval/payout downstream; the step-7 authority; the four-bullet authority model | **UNCHANGED. `PO-U2·C` restates `PO-T1·10` for a FOURTH time.** **`PO-T2`/`C-XX` are NOT widened to cover the allocation decision** — [§4.2](#42-the-authority-question-worked--not-assumed) |

---

## 2. The two investigations

> ⟦ARCHITECT ANALYSIS⟧ **These are the headline findings, and they are placed before every determination
> because every determination below depends on them. Both were RUN against the text — the Master Spec read
> directly, and AD-01J, AD-01K, AD-01N, AD-01P, AD-01Q and AD-01T read at the clauses named — and not against
> memory or against prior documents' paraphrases. Neither answer was assumed, and the reasoning is shown in
> both directions so that a reader who disagrees can see exactly where they disagree.**

### 2.1 Investigation 1 — the timing and model question, against `C-IV` and `K-18`

> ⟦ARCHITECT ANALYSIS⟧ **`PF-96` — the question, stated exactly, because everything turns on its precision.**
>
> > **Is `PO-U2·B` — the Site Head's commission-allocation decision — the SAME decision point as the
> > pre-booking §11 attribution/clash adjudication that `P-G` step 5, `PO-T1·7` and `C-XX` describe?**
> >
> > **If YES, there is a genuine, material contradiction: `C-IV`'s timing, `PO-T1·9`'s ordering and `K-48`
> > conjunct (i)'s single-claim phrasing all have to be amended, and `P-G`'s ratified sequence loses its
> > fifth step.**
> >
> > **If NO, `C-IV` and `K-18` may be entirely undisturbed, and what is new is a decision point the
> > architecture has never had.**

#### 2.1.1 First: what `C-IV` and `K-18` LITERALLY say

> ⟦ARCHITECT ANALYSIS⟧ **`PF-97` — both were read at source rather than through AD-01T's or AD-01Q's
> restatements, and in both cases the literal text is narrower than the restatements suggest. That is the
> single most load-bearing fact in this investigation.**

| Clause | Its EXACT text, quoted | What it does NOT say |
|---|---|---|
| **`C-IV`** (AD-01J §5.3) | ⟦ARCHITECT RECOMMENDATION⟧ *"**Claim resolution must complete before the converting Booking reaches its §32 eligibility milestone.**"* Its stated ground, `J-26`: *"**§40**'s server-side authorization has nothing valid to evaluate otherwise."* | **It does NOT say *"before the Booking."*** ⟦ARCHITECT ANALYSIS⟧ **The bound is the **§32 ELIGIBILITY MILESTONE**, which ⟦SOURCE⟧ **§32** makes a *milestone-based* condition ON a booking — reached, when it is reached at all, AFTER the booking exists. `C-IV` therefore leaves a window between booking success and the milestone, and says nothing about what may happen inside it** |
| **`K-18`** (AD-01K §3.4, §8) | ⟦ARCHITECT RECOMMENDATION⟧ *"**Attribution belongs to the Inquiry, and to nothing else.** It does not belong to the Lead, to the Person, to the Booking, or to a combination of them."* | **It does NOT say how MANY claims an Inquiry's resolution may name.** ⟦ARCHITECT ANALYSIS⟧ **`K-18` is an ANCHOR rule — it answers *"attached to what?"* and not *"how many?"* The singular reading comes from elsewhere, and [§2.1.4](#214-where-the-single-answer-bearer-reading-actually-lives) finds exactly where** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-98` — the corroborating clauses, checked with the same literalism, because
> `C-IV` is not the only thing that places the decision before the booking.**
>
> | Clause | What it places where | Whose clause it is |
> |---|---|---|
> | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2·c`** (AD-01Q) | *"… competing CP claim/clash → **attribution/clash decision → any Site Head override → Booking** → commission eligibility → commission approval/payout."* **The decision AND the override are both BEFORE the Booking** | **THE OWNER'S** |
| ⟦PRODUCT-OWNER DECISION⟧ **`PO-T1·9`** (AD-01T) | *"**Only after attribution is resolved, and only if the Inquiry converts**, is commission eligibility evaluated."* **Resolution precedes conversion** | **THE OWNER'S** |
| ⟦ARCHITECT ANALYSIS⟧ **`J-25`** (AD-01J §4.3) | *"**Clash detection runs at intake, not at conversion.** §11 is a capture-time control and §12 makes offline-created leads *pending synchronization* precisely so the clash gate can run on arrival."* | **THE ARCHITECT'S** |
>
> **So the *"before the booking"* position is not merely an architect's derivation: `PO-Q2·c` and `PO-T1·9`
> are the owner's own, and both are LOCKED.** ⟦ARCHITECT ANALYSIS⟧ **This is why the investigation cannot be
> settled by observing that `C-IV`'s literal bound is looser than it has been restated as. If `PO-U2·B` IS the
> §11 decision, then the owner's own `PO-Q2·c` and `PO-T1·9` are contradicted by the owner's own `PO-U1·1`,
> and that would be the most consequential finding this series has produced.**

#### 2.1.2 The case that `PO-U2·B` IS the §11 attribution/clash decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-99` — put at its strongest, and not strawmanned, because a reader who is shown
> only the case that wins cannot check the conclusion.**

| # | Argument |
|---|---|
| **1** | **The input is the same object.** `PO-U1·2` says *"if there is a **CP clash**, the clash is **surfaced** to the Site Head."* That is the §11 object — `K-52`'s *"one Inquiry's claim set"* — and *surfaced* implies it is still LIVE and UNRESOLVED at that moment |
| **2** | **The owner's taxonomy leaves no slot for a pre-booking resolution.** `PO-U2·A` is **detection only** — *"BMexa identifies that competing CP claims exist."* It is not *"detection and resolution."* If `A` stops at detection and `B` is post-booking, nothing in the owner's model resolves the clash before the booking |
| **3** | **`PO-U1·8`'s outcome space CONTAINS the winner-takes-all outcome.** *"100/0, 0/100"* is exactly the result a §11 adjudication produces, expressed in money. A mechanism whose outcome space contains the other mechanism's entire outcome space is a candidate for being it |
| **4** | **`PO-U1·5` is unqualified.** *"BMexa does NOT calculate a winner from evidence."* If a pre-booking §11 decision still picks a winner, there is a winner-picking act in the system that `PO-U1·5` does not obviously permit |
| **5** | **`PO-U3·d`'s own ordering.** The owner's preserved-distinction list runs *"… CP claim / clash detection / **booking success** / Site Head commission allocation / commission eligibility …"* — **booking success sits BETWEEN clash detection and the Site Head's act**, in the owner's own sequence |

#### 2.1.3 The case that `PO-U2·B` is a DIFFERENT, LATER decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-100` — put with the same force, and its arguments are of a different KIND: four
> of the five are about what the decision's OUTPUT and PRECONDITIONS are, which is how this series has
> distinguished decision points since AD-01Q §2.1.**

| # | Argument |
|---|---|
| **1** | **Every stated OUTPUT is commission, never attribution.** `PO-U1·4`: *"how **the commission** should be allocated."* `PO-U1·10`: *"the resulting **CP commission allocation**."* `PO-U2·B`: *"how **the commission** is allocated among the competing CPs."* ⟦ARCHITECT ANALYSIS⟧ **The word *attribution* appears in the owner's message exactly twice, both inside PROHIBITIONS — `PO-U3·c`'s *"do NOT reinterpret this as automatic attribution"* and `PO-U3·d`'s preserved list. A prohibition against reinterpreting something PRESUPPOSES that the something still exists as a separate thing** |
| **2** | **A commission cannot be allocated before it exists, and an attribution can be — and routinely is — resolved when no commission ever will.** ⟦SETTLED⟧ **`K-10`: *"an internal claimant can WIN an attribution contest and generate NO §32 entitlement at all."*** ⟦SETTLED⟧ **`K-9`: winning attribution and being paid are different outcomes.** **AD-01J `J-25`: *"Most claims never reach a Booking … A claim anchored on a Booking is unrepresentable for the majority of claims."*** **`PO-U2·B` is definitionally booking-bound; the §11 decision definitionally is not** |
| **3** | **`PO-U2` puts `C` downstream of `B`, and `PO-T1·9`/`PO-T1·10` put eligibility downstream of attribution resolution. Two orderings sharing a downstream terminus, with different upstream acts, are two acts.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U2·C` reads *"downstream financial lifecycle **follows the resulting allocation**."* So the allocation sits BETWEEN conversion and eligibility. `PO-T1·9` puts attribution resolution BEFORE conversion. Those are two different slots in one pipeline, and the owner has now populated the second** |
| **4** | **`PO-U3·d` asks for MORE separation, not less.** ⟦PRODUCT-OWNER DECISION⟧ **The owner lists *"CP claim"*, *"clash detection"*, *"booking success"*, *"Site Head commission allocation"*, *"commission eligibility"*, *"commission approval"* and *"payout"* as seven things to keep apart.** ⟦ARCHITECT ANALYSIS⟧ **A reading that MERGES the Site Head's allocation with the §11 attribution decision reduces the count of separated things at the precise moment the owner has asked for them to be preserved** |
| **5** | **`PO-U1·5 … PO-U1·7`'s subject is *BMexa*, not the Site Head, and BMexa never did any of the three.** ⟦SOURCE⟧ **§11**, in full: *"Clash detection is a core business control. If multiple sources/CPs claim the same prospective customer: record each attribution claim, preserve history, do not expose sensitive competing claims unnecessarily. **Builder-side authorized leadership resolves attribution.** Sales Reps should not automatically see sensitive clash information …"* **There is not one word in §11 about HOW leadership decides** — [§2.1.5](#215-was-11-adjudication-ever-an-automated-thing-checked-directly). **`PO-U1·5`'s prohibition lands on a thing the architecture never had and expressly refused to build** |

#### 2.1.4 Where the "single answer-bearer" reading actually lives

> ⟦ARCHITECT ANALYSIS⟧ **`PF-101` — run because the task of this investigation is to test `K-18`, and the
> honest result is that the proposition being tested is not in `K-18` at all. The search was run over the
> exact sentences.**

| Source | Its wording | Cardinality it asserts |
|---|---|---|
| **`K-18`** (AD-01K) | *"Attribution belongs to the Inquiry, and to nothing else"* | **NONE. It is an anchor rule** |
| ⟦SOURCE⟧ **§11** | *"record **each** attribution claim, preserve history"* | **PLURAL, on the claim side. §11 requires the SET to be preserved** |
| **`K-17`** / AD-01 **§D.4** | the claim set is **append-only** and *"claims are never overwritten by a later claim"* | **PLURAL and PERMANENT** |
| **`K-48`** conjunct (i) (AD-01K) | *"**the resolved attribution claim** on the converting Inquiry — the WHO"* | ⚠ **SINGULAR, definite article** |
| **`NF-28`** conjunct (i) (AD-01N §J.2) | Conjunct: *"the resolved attribution claim on the converting Inquiry"* — **but its ANSWER-BEARER column reads *"The Inquiry's **claim set**"*** | ⚠ **BOTH. The conjunct is singular; its own answer-bearer is the set** |
| **AD-01Q §2.1** | *"Its answer-bearer: **The resolved attribution claim** on that Inquiry"* | ⚠ **SINGULAR gloss** |
| **AD-01T §3.1** | *"Its answer-bearer: **The resolved attribution claim** on that Inquiry — `K-18`"* | ⚠ **SINGULAR gloss, ATTRIBUTED TO `K-18`** |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY.**
>
> > **The single-answer-bearer proposition is NOT `K-18`. It is `K-48` conjunct (i)'s definite article,
> > restated as a gloss in AD-01Q §2.1 and AD-01T §3.1 and CITED THERE TO `K-18`, which does not contain
> > it.**
> >
> > **`NF-28` — the newest statement of the eligibility join, and the one AD-01N actually built — already
> > names *"the Inquiry's claim set"* as conjunct (i)'s answer-bearer. The architecture has been carrying
> > both readings side by side since AD-01N, and nothing before now forced them apart.**
>
> ⟦ARCHITECT ANALYSIS⟧ **This matters in exactly one way and is not over-claimed: it means that admitting a
> multi-CP outcome does NOT require amending `K-18`, does NOT move any anchor, and does NOT touch `C-VII`,
> `K-52`, `K-17` or AD-01 §D.4. It requires correcting a PHRASE in `K-48` and two GLOSSES that repeat it.**
> → **`A-54`, NAMED AND NOT MADE.**

#### 2.1.5 Was §11 adjudication ever an automated thing? Checked directly

> ⟦ARCHITECT ANALYSIS⟧ **`PF-102` — this was searched, not recalled, because it determines how much of the
> owner's message is a model CHANGE and how much is a model COMPLETION.**

| Source searched | For a described mechanism of HOW leadership decides | Result |
|---|---|---|
| ⟦SOURCE⟧ **Master Spec §11**, read directly | any rule, score, weight, ranking, precedence, tiebreak or procedure | **ABSENT.** §11 names WHO (*"builder-side authorized leadership"*), WHAT must be preserved (*"record each attribution claim, preserve history"*) and WHO MUST NOT SEE IT (*"Sales Reps"*). **It says nothing whatever about the basis of the decision** |
| ⟦SOURCE⟧ **Master Spec §32, §33, §34, §40, §41**, read directly | commission splitting, percentage allocation, apportionment, multi-CP payout | **ABSENT — see [§2.1.7](#217-a-separate-finding-splitting-a-commission-is-new-territory-for-the-whole-spec)** |
| **AD-01J** | an adjudication mechanism | **NONE.** It says *"§11 reserves adjudication to authorized leadership"* and treats the adjudication surface as a **management-workload cost** — i.e. as human labour |
| **AD-01K `K-52`** | an adjudication mechanism | **EXPRESSLY REFUSED, verbatim:** *"No UI, no resolution workflow, no notification design and **no adjudication procedure is proposed** — §11 reserves adjudication to authorized leadership and AD-01A §8.5 forbids inventing a workflow around it"* |
| **AD-01P `C-IX`** | whether the architect MAY supply one | **FORBIDDEN.** `C-IX`: a binding systemic precedence rule is a **§88 authorization change to §11**, not a commission setting |
| **AD-01Q `PF-39`** | whether §11 describes a decidable procedure | **NO, verbatim:** *"§11 says only that builder-side authorized leadership resolves attribution — a rule about who DECIDES, not about who may decide AGAIN"* |
| **AD-01T `PF-90`** | the state of the rule as at the last document | **ABSENT AND KNOWN TO BE ABSENT, verbatim:** *"the architecture now has a NAMED, PERMISSIONED, PROJECT-SCOPED, SERVER-ENFORCED, AUDITED authority whose stated job is to resolve CP-vs-CP clashes, and **NO STATED RULE FOR THEM TO APPLY**"* |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY AND WITHOUT SOFTENING.**
>
> > **THE ARCHITECTURE NEVER CONTAINED AN EVIDENCE SCORE, AN EVIDENCE-RANKING MODEL, AN AUTOMATIC PRECEDENCE
> > FORMULA OR A MANDATORY EVIDENCE-UPLOAD WORKFLOW FOR THE §11 DECISION. It never contained ANY described
> > mechanism for how leadership decides. Every document from AD-01J to AD-01T recorded that absence
> > deliberately and four of them recorded that the architect was FORBIDDEN to fill it.**
> >
> > **Therefore `PO-U1·5`, `PO-U1·6`, `PO-U1·7` and `PO-U1·11` CONTRADICT NOTHING. They are the owner
> > filling a box the architecture deliberately left empty — and `PO-U3·a`'s prohibition forecloses the one
> > thing AD-01T's §6.2 question had offered as its first branch.**
>
> ⟦ARCHITECT ANALYSIS⟧ **This is stated as a null result rather than a novelty because it is one. A document
> that reported items 5–7 as a correction to the architecture would be describing a change to something that
> was never there. The REAL news in the owner's message is items 1–4 and 8–10 — the TIMING and the
> MULTI-PARTY SPLIT — and those are what the rest of this investigation is about.**

#### 2.1.6 The conclusion, and it is a real one

> ⟦ARCHITECT ANALYSIS⟧ **`PF-103` — the determination. It is reached by weighing
> [§2.1.2](#212-the-case-that-po-u2b-is-the-11-attributionclash-decision) against
> [§2.1.3](#213-the-case-that-po-u2b-is-a-different-later-decision) and it is not a compromise between them.**

> > ### **`PO-U2·B` IS A GENUINELY DIFFERENT, LATER DECISION. IT IS NOT `P-G` STEP 5 RELOCATED.**
> >
> > **`C-IV` IS NOT CONTRADICTED. `K-18` IS NOT CONTRADICTED. `P-G` STEPS 1–5 ARE NOT DISTURBED. THIS IS A
> > COMPATIBLE REFINEMENT AT A POINT THE ARCHITECTURE HAD NEVER OCCUPIED — PLUS ONE PHRASE-LEVEL AMENDMENT
> > AND ONE RESIDUAL QUESTION THAT ONLY THE OWNER CAN CLOSE.**

**The four reasons, ranked, with the strongest first.**

| # | Reason |
|---|---|
| **1** | ⟦PRODUCT-OWNER DECISION⟧ **The decision's OUTPUT is commission, in all four places the owner states it, and never attribution** — `PF-100` argument 1. **A decision is individuated by the question it answers, and this series has individuated decisions exactly that way since AD-01Q §2.1.** *"Who produced this Inquiry?"* and *"How is this booking's commission divided?"* are two questions |
| **2** | ⟦SETTLED⟧ **`K-9` and `K-10` make the two non-substitutable in the architecture, and nothing in `PO-U1 … PO-U3` repeals them.** **An attribution decision routinely exists with no booking; an allocation of a commission cannot exist without one.** ⟦ARCHITECT ANALYSIS⟧ **This is the same test AD-01Q used to defeat its own candidate (a) — *"a widened `NF-24` would have a subject that is sometimes a pair and sometimes a single, which is not a determinate subject at all"* — and it defeats the merge here for the identical reason** |
| **3** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-U3·c` and `PO-U3·d` PRESUPPOSE that attribution survives as a separate thing.** **You cannot forbid *"reinterpreting this as automatic attribution"* unless attribution is something else; you cannot instruct that *"CP claim"* be kept distinct from *"Site Head commission allocation"* unless both exist** |
| **4** | ⟦ARCHITECT ANALYSIS⟧ **`PO-U1·5`'s subject is BMexa and BMexa never calculated anything** — `PF-102`. **So `PO-U1·5` does not abolish the pre-booking human §11 decision; it forecloses an automated one that never existed. The strongest argument on the merge side — `PF-99` argument 4 — dissolves on inspection of what the clause's subject actually is** |

**And the two arguments on the merge side that DO NOT dissolve, named rather than buried.**

| Merge argument | What survives it |
|---|---|
| **`PF-99` argument 2** — `PO-U2·A` is *detection*, not *resolution*, so the owner's taxonomy has no pre-booking resolution slot | ⟦ARCHITECT ANALYSIS⟧ **TRUE, AND IT IS NOT ANSWERED HERE.** **The owner's three-term taxonomy does not mention the §11 attribution resolution at all. On this document's conclusion that is an OMISSION from a taxonomy written to distinguish three things, not a REPEAL of a clause the same owner ratified two documents ago in `PO-T1·4`/`·7`/`·9`. But *"it is an omission"* is an architect's reading of an owner's silence, and this series does not close owner silences** → **`AC-35`** |
| **`PF-99` argument 1** — the clash is *"surfaced"* at booking, which implies it is still live | ⟦ARCHITECT ANALYSIS⟧ **TRUE, AND IT IS NOT ANSWERED HERE.** **If the §11 decision already resolved the contest pre-booking, what `PO-U1·2` surfaces is a RESOLVED clash whose money is now to be divided — which is coherent and is what `PO-U3·d`'s ordering describes. If the owner instead means the contest is genuinely left OPEN until a booking exists, then `PO-T1·9` describes an act that does not happen and `PO-Q2·c`'s ordering is wrong. The architecture cannot tell which from the words given** → **`AC-35`** |

> ⟦ARCHITECT ANALYSIS⟧ **What follows from the conclusion, stated precisely so it is not over-read.**
>
> | | Statement |
> |---|---|
> | **`C-IV`** | ⟦ARCHITECT RECOMMENDATION⟧ **NOT CONTRADICTED, NOT AMENDED, NOT WEAKENED — and NOT EXTENDED TO THE ALLOCATION EITHER.** **`C-IV` binds *claim resolution*. The allocation is not claim resolution. But the allocation DOES need a bound of `C-IV`'s exact shape and for `J-26`'s exact reason, and no clause supplies one** → **`C-XXI`**(4), [§4.1](#41-c-xxi-the-allocation-decision-clause-minted-and-stated-in-full) |
> | **`K-18`** | ⟦ARCHITECT RECOMMENDATION⟧ **CONFIRMED FOR AN EIGHTH CONSECUTIVE DOCUMENT.** **No anchor moves. The allocation does NOT attach attribution to the Booking — it attaches a COMMERCIAL fact to the Booking, which is where `K-48` conjunct (ii) already lives** — and `C-XXI`(3) exists to make that impossible to misread |
| **`P-G`** | ⟦PRODUCT-OWNER DECISION⟧ **Steps 1–5 UNDISTURBED. Step 6 UNDISTURBED IN ITS TEST.** **But a new act now sits between conversion and step 6's eligibility evaluation, and `P-G` has no step for it** → `A-57` |
| **`PO-T1·9`** | ⟦PRODUCT-OWNER DECISION⟧ **NOT CONTRADICTED on this conclusion, and NOT CONFIRMED either.** **It is the one clause whose continued reading `AC-35` decides, and it is the owner's own** |
| **`PO-Q2·c`** | ⟦PRODUCT-OWNER DECISION⟧ **NOT CONTRADICTED on this conclusion.** ⟦ARCHITECT ANALYSIS⟧ **Its chain ends *"→ Booking → commission eligibility → commission approval/payout"* and the allocation lands inside that gap, which the chain does not enumerate — and `PF-34(2)` holds that *"for example"* means a term the chain omits is not thereby excluded.** **`Q-AR` must nevertheless gain the terms the owner has now NAMED** → `A-55` |

#### 2.1.7 A separate finding: splitting a commission is NEW TERRITORY FOR THE WHOLE SPEC

> ⟦ARCHITECT ANALYSIS⟧ **`PF-104` — searched directly over ⟦SOURCE⟧ the Master Spec, because the task of
> determining whether something is a refinement or a novelty cannot be answered from the AD- series alone.**
>
> **Searched for: *split*, *percentage*, *percent*, *pro-rata*, *proration*, *share of*, *allocate/allocation*
> in a commission sense, *apportion*, *multiple CPs*, *two CPs*, *among*.**
>
> | Section | What it says about the commission's recipient |
> |---|---|
| ⟦SOURCE⟧ **§32 CP COMMISSION** | *"The CP workflow must support: commission/brokerage entitlement, milestone-based eligibility, invoice submission when eligible, Accounts review, payout, TDS information, reversal/clawback where legitimately applicable."* **SINGULAR throughout. No division of an entitlement is contemplated** |
| ⟦SOURCE⟧ **§33 CP CLAWBACK** | *"the **CP** ledger may become negative. Future eligible payouts may be reduced to recover the amount."* **SINGULAR ledger** |
| ⟦SOURCE⟧ **§34 TDS** | *"Gross Commission − TDS = Net Payable."* **One commission, one payable** |
| ⟦SOURCE⟧ **§40 CP INVOICE ELIGIBILITY** | *"an invoice cannot yet be submitted … Once the business condition is satisfied, invoice submission becomes available."* **One invoice, one business condition** |
| ⟦SOURCE⟧ **§11 CLASH DETECTION** | *"Builder-side authorized leadership **resolves attribution**."* **Resolves — it does not divide** |
| **The only *allocation* vocabulary in the whole spec** | ⟦SOURCE⟧ **§27**–**§30**: *"Receipt Allocation — Explicit mapping of received money to a demand/obligation."* ⟦ARCHITECT ANALYSIS⟧ **That is CUSTOMER-side cash application and has no relationship to CP commission. It must not be reused, generalised or confused with `PO-U1·9`'s allocation, and this document proposes no such reuse** |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY.**
>
> > **THERE IS NO MENTION OF COMMISSION SPLITTING, PERCENTAGE ALLOCATION, APPORTIONMENT OR MULTI-CP PAYOUT
> > ANYWHERE IN THE MASTER SPEC. `PO-U1·8`/`PO-U1·9` are NOT an under-specified corner of an existing
> > capability. They are a capability the spec does not have.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Two consequences follow and both are recorded without being resolved.** **(1) This
> is a genuine ⟦SOURCE⟧ §88 addition — *CP commission logic* and *financial rules*, both MUST-ASK columns —
> and it is the owner's to make, which they have.** **(2) `M-9`, the commission model, acquires an input it
> did not have: every formula, rate, slab and amount it eventually carries must now be able to yield a
> PORTION per CP rather than a single figure. `M-9` still cannot start, and NOTHING about its content is
> proposed, implied or constrained here beyond the bare fact that a portion is one of its inputs** —
> [§5.6](#56-the-split-allocation-representation-and-nf-28).

### 2.2 Investigation 2 — is this `Q-OV`?

> ⟦ARCHITECT ANALYSIS⟧ **`PF-105` — the question, stated exactly.**
>
> > **Does `PO-U2·B` REPLACE the need for `Q-OV` — because there is no automated adjudication left to
> > override and the Site Head simply IS the adjudicator — or does `Q-OV` retain a distinct role? And if
> > distinct, where is the boundary?**

**The comparison, run on the same axes AD-01Q §2.1 and AD-01T §3.1 used, so it is checkable against them.**

| | **`Q-OV` — the attribution/clash OVERRIDE** (`PO-Q1`) | **`PO-U2·B` — the commission ALLOCATION decision** (`PO-U1`) |
|---|---|---|
| **What it acts ON** | ⟦PRODUCT-OWNER DECISION⟧ **A PRIOR DECISION** — `PO-Q1·a`: *"override **the normal CP attribution/clash decision**."* **The word *override* presupposes a decision to override** | ⟦PRODUCT-OWNER DECISION⟧ **A CLASH and a BOOKING** — `PO-U1·2`. **It presupposes competing claims and a successful booking; it does not presuppose a prior allocation** |
| **Its subject** | **ONE attribution/clash decision on ONE Inquiry** — `PO-P10` level 5 | **ONE booking's CP commission, divided across the competing claims** |
| **Requires a Booking** | **NO. Routinely there is none** — AD-01Q §3.0; `J-25` | **YES. Structurally. `PO-U1·1` is its first step** |
| **What it produces** | **A different ATTRIBUTION answer** — `PO-P10` level 5 | **A COMMISSION ALLOCATION, percentage- or amount-based, over one or more CPs** — `PO-U1·8`, `PO-U1·9` |
| **Cardinality of its answer** | **One** — it restates an attribution | **One OR MANY** — `PO-U1·8`'s whole point |
| **Evidence** | ⟦PRODUCT-OWNER DECISION⟧ **MANDATORY, in the owner's own words** — `PO-Q1·b`: *"the override MUST require: (1) a mandatory reason, AND (2) mandatory supporting remarks/evidence"* | ⟦PRODUCT-OWNER DECISION⟧ **EXPRESSLY NOT REQUIRED** — `PO-U1·7`, `PO-U1·11`: *"BMexa does not require an uploaded evidence package merely to permit the decision"* |
| **Position in the owner's own sequence** | **Step 8** (`PO-T1·8`), BEFORE the Booking (`PO-Q2·c`) | **After booking success** (`PO-U1·1`), before eligibility (`PO-U2·C`) |
| **Status of its mechanism** | ⟦ARCHITECT RECOMMENDATION⟧ **`Q-OV`, UNRATIFIED.** Gate 3 | **NO MECHANISM EXISTS. The series has never modelled one** → `C-XXI` |

> ⟦ARCHITECT ANALYSIS⟧ **THE CONCLUSION, STATED PLAINLY.**
>
> > **THEY ARE DISTINCT, AND NEITHER SUBSUMES THE OTHER. `PO-U2·B` DOES NOT REPLACE `Q-OV`, AND `Q-OV`
> > CANNOT CARRY `PO-U2·B`. BOTH ARE REQUIRED, AND THEY MUST NEVER BE ONE ARTEFACT, ONE PERMISSION OR ONE
> > RECORD.**

**The two directions, each demonstrated rather than asserted.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-106` — direction 1: `PO-U2·B` cannot replace `Q-OV`, and the proof reuses
> AD-01Q's own necessity test rather than a new one.**
>
> **AD-01Q defeated its candidate (a) — widening `NF-24` to carry the attribution override — in one
> sentence:** *"An attribution/clash decision routinely exists with **no Booking and may never acquire
> one**. A widened `NF-24` would have a subject that is sometimes a pair and sometimes a single, which is
> not a determinate subject at all."*
>
> **That argument applies to `PO-U2·B` with EXACTLY the same force and in the same direction.** **`PO-U2·B`
> is booking-bound by `PO-U1·1`. `Q-OV`'s target is not. An override of an attribution decision on an
> Inquiry that never converts is a thing `PO-Q1` grants and `PO-U2·B` structurally cannot reach.**
> ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1` is the owner's own grant, is LOCKED, and nothing in `PO-U1 … PO-U3`
> repeals, narrows or conditions it — `PO-U3` does not mention it.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-107` — direction 2: `Q-OV` cannot carry `PO-U2·B`, and this one is decided by
> the owner's own words rather than by structure.**
>
> **`PO-Q1·b` makes reason AND supporting evidence MANDATORY for `Q-OV`. `PO-U1·7` and `PO-U1·11` say the
> allocation decision requires NO uploaded evidence package.** ⟦ARCHITECT ANALYSIS⟧ **Routing the allocation
> through `Q-OV` would therefore impose on it, by construction, precisely the requirement the owner has just
> removed from it. That is not a design preference — it is the owner's two clauses pointing in opposite
> directions on one axis, which is conclusive evidence that they are not one mechanism.**
>
> **A second, independent support:** ⟦ARCHITECT RECOMMENDATION⟧ **`C-XVIII` forbids `Q-OV` from becoming a
> standing or generalised form.** **An allocation decision taken on EVERY clashed booking is standing and
> generalised by construction. `Q-OV` is by design exceptional; `PO-U2·B` is by design routine.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-108` — what `Q-OV` is now FOR, stated positively, because a mechanism whose
> distinct role is only ever stated negatively will be dropped by an implementer.**
>
> **`Q-OV`'s residual territory after this decision is NOT empty, and it is NOT merely the no-booking case.
> Three configurations are named, and each is a case `PO-U2·B` cannot reach:**
>
> | # | Configuration | Why `PO-U2·B` cannot reach it |
> |---|---|---|
> | **1** | **An attribution decision on an Inquiry that has not converted and may never convert** | **No booking, therefore no commission, therefore nothing to allocate.** ⟦SETTLED⟧ **`K-10`.** **And attribution has non-financial consequences the architecture already carries: §11 clash VISIBILITY (`V-7`, `AC-13`), and CP conversion REPORTING, which AD-01J requires to be *"grouped by the **resolved** claim, never by a raw claim — otherwise a contested engagement is counted for every claimant"*** |
| **2** | **A SINGLE-CLAIMANT attribution outcome with no clash at all, which an authorized holder decides differently** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a` grants the override against *"the normal CP attribution/clash decision"* WITHOUT requiring a clash.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U1·2` conditions the allocation decision on *"if there is a CP clash."* With one claim and no competitor there is nothing to allocate AMONG, and `PO-U2·B` is not triggered — but an attribution determination still exists and `PO-Q1` still reaches it.** **This is a difference IN KIND: dividing money among several valid competing claims is not the same act as restating the attribution on an uncontested one** |
| **3** | **An attribution outcome that is wrong for a reason that is not commercial** | ⟦ARCHITECT ANALYSIS⟧ **`PO-Q1·b` requires evidence precisely because `Q-OV` asserts something about the FACTS of production. `PO-U1·4` calls its own act *"the **commercial** decision"* and requires no evidence precisely because a commercial division is a judgement, not a factual finding.** **The two clauses' evidence requirements are a direct expression of that difference and are not an inconsistency** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-109` — the sub-question the investigation was required to answer, answered
> separately because it is the premise the whole of Investigation 2 could have turned on.**
>
> > **Was *"the normal CP attribution/clash decision"* — `Q-OV`'s target — EVER an automated, overridable
> > thing, such that `PO-U1·5`'s *"BMexa does NOT calculate a winner"* would leave `Q-OV` with nothing to
> > override?**
> >
> > **NO. IT WAS ALWAYS A HUMAN DECISION, AND THIS WAS CHECKED AT SOURCE** — `PF-102`. **⟦SOURCE⟧ §11
> > reserves it to *"builder-side authorized leadership"* with no stated basis; AD-01K `K-52` expressly
> > refused to design a procedure for it; AD-01P `C-IX` forbade the architect supplying one; AD-01T `C-XX`
> > makes it a PERMISSION exercised by a person.**
> >
> > **Therefore `PO-U1·5` removes nothing from `Q-OV`'s target, and `Q-OV` overrides today exactly what it
> > overrode at AD-01Q: one human's attribution determination, by another human holding a second, distinct
> > permission. `AC-33` — may the step-7 decision-maker override their OWN decision — is untouched and
> > remains exactly as sharp as AD-01T left it.**

---

## 3. The A/B/C model, built as the document's central structure

> ⟦ARCHITECT ANALYSIS⟧ **`PF-110` — `PO-U2`'s three terms are given their own determinations, each on the
> same axes. The fourth column is added by this document and is NOT the owner's: it is the §11 attribution
> decision, which `PO-U2` does not name and which [§2.1](#21-investigation-1--the-timing-and-model-question-against-c-iv-and-k-18)
> concludes still exists. It is shown in the table precisely so that `AC-35` is visible as a gap rather than
> hidden as an assumption.**

| | **A — CP claim / clash DETECTION** | **(A′) — the §11 attribution/clash DECISION** *(not named by `PO-U2`)* | **B — Site Head COMMISSION-ALLOCATION decision** | **C — commission ELIGIBILITY / APPROVAL / PAYOUT** |
|---|---|---|---|---|
| **Owner's term** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U2·A` — *"BMexa identifies that competing CP claims exist"* | ⟦PRODUCT-OWNER DECISION⟧ **`PO-T1·4`/`·7` (AD-01T), NOT restated here** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U2·B` — *"Site Head decides how the commission is allocated among the competing CPs"* | ⟦PRODUCT-OWNER DECISION⟧ `PO-U2·C` — *"downstream financial lifecycle follows the resulting allocation"* |
| **What TRIGGERS it** | **The arrival of a second claim on one Inquiry's claim set** — `K-12`'s Origination Rule; `K-52` | **The existence of a claim** — `PO-T1·4` routes *every* claim through it, and `PO-S1·9` holds that absence of competition does not bypass it | ⟦PRODUCT-OWNER DECISION⟧ **A SUCCESSFUL BOOKING, plus a CP clash** — `PO-U1·1` + `PO-U1·2`, conjunctively | **The allocation, joined to the booking's §32 milestone** — `PO-U2·C`; `NF-28` |
| **WHO or WHAT decides it** | **The system.** ⟦SOURCE⟧ **§11**/**§12**: a server-side duplicate/clash gate. **Never a person** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-T2`'s named authority, held as a permission** — `C-XX` | ⟦PRODUCT-OWNER DECISION⟧ **The Site Head, personally** — `PO-U1·4`, `PO-U1·12`. **Held as a permission** → `C-XXI`(1) | **A COMPOUND of four separated authorities** — AD-01T §3.1's table, unchanged |
| **On WHAT BASIS** | **A detection rule.** ⟦SOURCE⟧ **§09**/**§11**/**§12** | ⟦PRODUCT-OWNER DECISION⟧ **NO STATED BASIS. Human judgement** — `PO-U1·5`/`·6`; `C-IX`; `PF-102` | ⟦PRODUCT-OWNER DECISION⟧ **NO STATED BASIS. Human commercial judgement, evidence OPTIONAL** — `PO-U1·5 … ·7`, `·11`, `·12` | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28`'s three conjuncts, per claim.** **A TEST, not a judgement** |
| **WHEN, relative to the Booking** | **BEFORE — at intake.** `J-25`; ⟦SOURCE⟧ **§12** | **BEFORE.** `C-IV`; `PO-Q2·c`; `PO-T1·9`. ⚠ **`AC-35`** | ⟦PRODUCT-OWNER DECISION⟧ **AFTER.** `PO-U1·1`. **And before the §32 milestone is acted on** → `C-XXI`(4) | **AT AND AFTER the booking.** A booking is a precondition of it existing |
| **Can it exist with NO Booking** | **YES, routinely** | **YES, routinely** | **NO. Structurally impossible** | **NO. Structurally impossible** |
| **WHAT IT PRODUCES** | **A recorded fact that competing claims exist.** It decides nothing | **The resolved attribution on that Inquiry** — `K-18` as anchor; **the claim SET is its answer-bearer**, `NF-28` conjunct (i) → `A-54` | ⟦PRODUCT-OWNER DECISION⟧ **An ALLOCATION: a portion of one booking's CP commission per CP, entered as a percentage OR an amount** — `PO-U1·8`/`·9`/`·10` | **Per (claim × booking): eligible or not; then approved; then paid** — `NF-24`'s subject row |
| **`PO-P10` level** | **Between 4 and 5. Not enumerated — detection is not a determination** | **5 — Attribution** | ⚠ **NOT ENUMERATED. It is neither 5 nor 6** → **`X-26`**, `A-56` | **6, then 7 for the `NF-24` exception** |
| **How it differs from what prior documents called this point** | **Unchanged. AD-01J … AD-01T all carry it** | **Unchanged in EVERY respect except that its answer-bearer's CARDINALITY is now explicitly plural-capable** | **NEW. NO PRIOR DOCUMENT MODELS IT. The spec does not contain it** — `PF-104` | **Unchanged in its TEST; NEW in that it is now reachable by more than one claim on one booking** — [§5.6](#56-the-split-allocation-representation-and-nf-28) |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-111` — the DECISION-versus-PERSON distinction, restated because AD-01T made it
> for three decisions and this document makes it for four, and the risk grows with the count.**
>
> > **These are FOUR DECISIONS, not four PEOPLE. The same individual may hold two, three or all four of the
> > permissions WITHOUT the decisions collapsing into one.** **Two decisions made by one person on one
> > afternoon are still two decisions, two records and two audit links.**
>
> **What is FORBIDDEN, and it is already forbidden:** ⟦SETTLED⟧ **A SINGLE PERMISSION spanning two of
> these.** **AD-01Q §3.4(2): *"A single permission spanning both would authorize at `PO-P10` levels 5 AND 6
> with one grant, which is exactly the conflation `PO-P10` exists to forbid."*** **`C-XXI`(2) extends that
> reasoning to the allocation decision** — [§4.1](#41-c-xxi-the-allocation-decision-clause-minted-and-stated-in-full).
>
> **What is NOT decided here:** ⟦ARCHITECT ANALYSIS⟧ **No default shipping configuration. No separation
> matrix — that is `M-9`'s and `M-3`'s. Whether one individual may perform more than one of the four on one
> commercial outcome is `AC-27`, `AC-33` and `AC-13`, all OPEN and all ENLARGED rather than answered** —
> [§5.8](#58-which-open-items-this-decision-actually-reaches).

---

## 4. The mechanism and the authority

### 4.1 `C-XXI`, the allocation-decision clause, minted and stated in full

> ⟦ARCHITECT RECOMMENDATION — `C-XXI`, a constraint⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK:
> **authorization rules**, **CP commission logic**, **financial rules**, **audit requirements**. **Stated as
> a BUSINESS RULE. No schema, screen, workflow, role key, permission key, enum, role hierarchy, formula,
> rate, amount, rounding rule or residual rule is proposed, implied or derivable from it.** ⟦ARCHITECT
> ANALYSIS⟧ **Its CONTENT is `PO-U1`/`PO-U2`, which is the owner's. What `C-XXI` adds is the FORM in which
> that content can be implemented without collapsing into `C-XX` or `NF-24` — and that form is the
> architect's recommendation, not the owner's decision.**)*

> **`C-XXI` — The Site Head's COMMISSION-ALLOCATION DECISION is a decision point of its own. It is
> triggered by a SUCCESSFUL BOOKING on an Inquiry carrying competing CP claims; it is exercised under a
> PERMISSION in the fixed permission vocabulary, never by a test of a role's name; its subject is ONE
> booking's CP commission; its answer is an ALLOCATION naming ONE OR MORE CPs; and it is NEITHER the
> attribution/clash decision NOR an override of one NOR an eligibility determination NOR an exception to
> one.**

**Seven corollaries, each stated because each is a separate implementation temptation:**

1. **It is a PERMISSION, and any tenant-defined role may hold it.** ⟦PRODUCT-OWNER DECISION⟧ **The Project
   Owner has named the default holder as the role shipped as *Site Head*** — `PO-U1·4`, `PO-U1·12`. **A
   tenant renaming, splitting or replacing that role must not silently drop the control and must not
   silently grant it.** ⟦SOURCE⟧ **R2**; `NF-26`(1); AD-01Q §3.4(1); `C-XX`(1). ⟦ARCHITECT ANALYSIS⟧ **This
   is the FOURTH instance of the same template and it is applied without amendment in principle.**
2. **It is a FOURTH, DISTINCT permission** — **NOT `C-XX`'s attribution/clash-decision permission, NOT
   `Q-OV`'s attribution-override permission, and NOT `NF-24`'s commission-eligibility-exception
   permission.** ⟦ARCHITECT ANALYSIS⟧ **`C-XX`(2) already forbids merging the first two because they sit at
   the same `PO-P10` level. This one is at a DIFFERENT level from all three, which is a stronger reason and
   not a weaker one** — `X-26`. **Holding any of the four must be an explicit, separately reviewable grant.**
   ⟦SOURCE⟧ **R2**, **§88**; `PO-P10`; `PO-U3·d`.
3. **The allocation is a COMMERCIAL fact about ONE BOOKING. It is NEVER an attribution fact, and it must
   never be written onto, merged into, derived into, or read back as the Inquiry's attribution.**
   ⟦PRODUCT-OWNER DECISION⟧ **`PO-U3·c`, `PO-U3·d`.** ⟦SETTLED⟧ **`K-17` and AD-01 §D.4: the claim set is
   append-only and *"claims are never overwritten by a later claim."*** ⟦ARCHITECT RECOMMENDATION⟧
   **`K-18`: attribution belongs to the Inquiry and to nothing else** — so an allocation recorded against a
   Booking cannot be an attribution fact without breaching `K-18`, and one recorded against the claim set
   cannot be an allocation without breaching `K-17`. **In particular: a CP allocated a 0% share has NOT
   thereby lost the attribution contest, and must not be recorded, reported or displayed as having done
   so** — [§5.2](#52-c-xvi-re-verified-in-a-richer-outcome-space).
4. **It must complete before the booking's §32 eligibility milestone is acted upon.** ⟦ARCHITECT ANALYSIS⟧
   **This is `C-IV`'s bound, at a new decision point, for `J-26`'s exact reason: ⟦SOURCE⟧ §40's server-side
   authorization has nothing valid to evaluate if the portion is undetermined when the invoice becomes
   submittable, and the only available choices then are to block a legitimate invoice or to pay an
   undetermined share.** **`C-IV` itself is NOT amended, NOT widened and NOT restated — it binds claim
   resolution, and this binds a different act.**
5. **Server-side enforcement only.** ⟦SOURCE⟧ **§40**: *"Never rely on a greyed-out button as the actual
   security control."* ⟦SOURCE⟧ **§50**: *"server-side authorization must verify that the approver actually
   has authority."* ⟦SOURCE⟧ **§67**/**§68**: *"critical commission state transitions"* and
   *"authorization-sensitive mutations"* require strong consistency.
6. **It is SCOPE-BOUND to the Project — evaluated against the BOOKING's Project.** ⟦ARCHITECT ANALYSIS⟧
   **`C-XX`(3)'s reasoning applies unchanged and is reused rather than re-derived.** ⟦SOURCE⟧ **§08**,
   **R12**; `NF-26`(3); `C-VII`.
7. **It supplies NO precedence rule, NO ranking, NO score, NO weight, NO tiebreak, NO presumption, NO
   default allocation and NO permitted-values list.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U3·a` forbids every one
   of these by name; `PO-U1·8`'s examples are EXAMPLES and are not an enumeration — the owner's own words
   end *"or another permitted allocation."*** ⟦ARCHITECT ANALYSIS⟧ **What *permitted* means is the owner's
   and is not defined here. And `C-IX`'s reasoning applies with full force in a new place: an allocation
   pattern applied uniformly across cases becomes a systemic precedence rule by accumulation, which `C-IX`
   holds is a §88 authorization change to §11 and which `C-XVIII` already forbids arriving by that route for
   `Q-OV`.**

> ⟦ARCHITECT ANALYSIS⟧ **Why a constraint and not merely a finding, in one line, because AD-01S declined
> `C-XX` for a symmetrical reason and the three decisions must be consistent.** **AD-01S declined because a
> pure ratification introduces no mechanism. AD-01T minted `C-XX` because it ratified AND narrowed an
> ⟦SOURCE⟧-level term. This document mints `C-XXI` because it introduces a DECISION POINT THAT DOES NOT
> EXIST IN THE SOURCES AT ALL — which is a stronger ground than either.**

> ⟦ARCHITECT ANALYSIS⟧ **What `C-XXI` explicitly does NOT do, stated in `NF-25`'s and `Q-OV`'s own form and
> for the same reason.** **It does not create an attribution claim, does not resolve a §11 clash, does not
> override an attribution determination, does not create or move a `CP Project Registration`, does not
> satisfy the §32 milestone, does not except any conjunct of `NF-28`, and does not substitute for any half
> of `K-48`.** ⟦SETTLED⟧ **`K-9`.** **A CP allocated 60% of a booking's commission whose registration does
> not contain the booking date is allocated and NOT eligible, and no allocation changes that.**

### 4.2 The authority question, worked — not assumed

> ⟦ARCHITECT ANALYSIS⟧ **`PF-112` — the question is whether the authority for `PO-U2·B` is the SAME named
> authority `C-XX` already establishes. The answer is NOT assumed from the fact that both are called *Site
> Head*, because AD-01T `PF-88` established in terms that the same name does not make one authority.**

| Test | `C-XX`'s authority | `PO-U2·B`'s authority | Same? |
|---|---|---|---|
| **The decision it authorises** | The ordinary attribution/clash decision at `P-G` step 5 | The commission allocation on a booking | **NO** |
| **Its `PO-P10` level** | **5** | **Not enumerated; it is downstream of 5 and upstream of 6** | **NO** |
| **Its subject** | One Inquiry's attribution claim set | One booking's CP commission | **NO** |
| **Whether a Booking must exist** | **No** | **Yes** | **NO** |
| **Its named default holder** | ⟦PRODUCT-OWNER DECISION⟧ *Site Head / **Project Head*** — `PO-T2` | ⟦PRODUCT-OWNER DECISION⟧ ***Site Head*** — `PO-U1·4`. **Project Head is NOT named** | **OVERLAPPING, NOT IDENTICAL** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION.**
>
> > **`PO-U2·B` REQUIRES ITS OWN AUTHORITY DESIGNATION. `C-XX` DOES NOT COVER IT AND MUST NOT BE WIDENED TO.**
> >
> > **Widening `C-XX` would put `PO-P10` level 5 and the commission layer under one grant — which is
> > precisely the conflation AD-01Q §3.4(2) refused, `PO-P10` forbids and `PO-U3·d` has just asked to be
> > preserved.** **`C-XXI`(2) is therefore not a precaution; it is the only construction consistent with
> > three existing clauses and one new owner instruction.**
>
> ⟦ARCHITECT ANALYSIS⟧ **One asymmetry is recorded and NOT resolved: `PO-T2` names *Site Head / Project
> Head* for the step-7 decision and `PO-U1·4` names *Site Head* alone for the allocation. Whether that
> omission is deliberate is not stated by the owner. It is NOT read as excluding Project Head and NOT read
> as including them; `C-XXI`(1) records only the holder the owner named. This is a DEFAULT-HOLDER question
> of exactly `AC-33`'s kind and it is folded into `AC-33`'s second limb rather than minted separately** —
> [§5.8](#58-which-open-items-this-decision-actually-reaches).

---

## 5. The determinations

> ⟦ARCHITECT ANALYSIS⟧ **The determinations run in the order the reconciliation requires. *"Unaffected"*
> means CHECKED AND UNAFFECTED, never skipped.**

### 5.1 `AC-15` and `AC-20` — what is closed and what is not

> ⟦ARCHITECT ANALYSIS⟧ **`PF-113` — this is the register row AD-01T's §6.2 addressed, and the check is run
> against `AC-15`'s and `AC-20`'s EXACT prior wording, not their summaries.**

**`AC-15` as AD-01O minted it:** *"Two CPs each hold a live registration over the same client and Project;
**who wins at a booking**?"* — carried forward by AD-01P, AD-01Q, AD-01R, AD-01S and AD-01T, in AD-01T's
words as *"who WINS between two competing claims."*

**`AC-20` as AD-01O minted it:** *"**May a registration be CREATED** for one CP while a DIFFERENT CP holds a
live registration over the same client and Project — or must it be blocked at the door?"*

| Item | Result |
|---|---|
| **`AC-15`** | ⟦PRODUCT-OWNER DECISION⟧ **CLOSED IN ITS CONTENT LIMB, BY DIRECT PRODUCT-OWNER RULING.** **The answer is: THERE IS NO RULE. The outcome is the Site Head's commercial judgement, case by case, and the outcome space is not binary — it runs from 100/0 through any discretionary split** — `PO-U1·5 … ·8`, `PO-U1·12`, `PO-U3·a`. ⟦ARCHITECT ANALYSIS⟧ **AD-01T's §6.2 offered exactly two branches and the owner took the second. This is the FOURTH item in the series closed by a direct owner ruling, and it is the one SEVEN consecutive documents raised** |
| **`AC-15`'s residue** | ⟦ARCHITECT ANALYSIS⟧ **The QUESTION is answered; the ANSWER creates two new ones and they are minted rather than absorbed.** **(i) `AC-34` — what happens when the entered allocation does not resolve cleanly. (ii) `AC-35` — whether the §11 attribution resolution `AC-15` was originally asked about still happens at all.** **Neither is `AC-15` restated: `AC-15` asked for a RULE and there is none** |
| **`AC-20`** | **UNCHANGED, NOT ANSWERED, NOT NARROWED — and CHECKED rather than assumed.** ⟦ARCHITECT ANALYSIS⟧ **The temptation is to read `PO-U1·2`'s untroubled *"if there is a CP clash"* as confirming that two live registrations may coexist. IT IS NOT EVIDENCE OF THAT.** **A CP-vs-CP clash arises from two CLAIMS, and AD-01S §3.3's configurations include a registration-backed claim against a producer-FILED claim, which needs only ONE registration. The owner's sentence is satisfied by that configuration and is therefore SILENT on whether a second registration may be created.** **`AC-20` is OPEN, and `O-U`'s per-triple structure still permits the concurrent case structurally** |
| **Two Site Heads, two Projects, one clash** | ⟦ARCHITECT ANALYSIS⟧ **CHECKED as a candidate new question and RULED OUT rather than minted.** **A §11 clash is scoped to one Inquiry's claim set (`K-52`); every claim carries the Inquiry's Project (`C-VII`); an Inquiry has exactly one Project. A Booking is for inventory in one Project. So one clash and one booking cannot straddle two Projects, and `C-XX`(3)/`C-XXI`(6)'s project scoping resolves jurisdiction without a new rule.** **No question is minted. This is reported as the null result it is** |

### 5.2 `C-XVI` re-verified in a richer outcome space

> ⟦ARCHITECT ANALYSIS⟧ **`PF-114` — `C-XVI` was RATIFIED at AD-01S and is ⟦PRODUCT-OWNER DECISION⟧ status.
> The check is whether a multi-way allocation weakens it, and the check was run against `PO-S1`'s ten points
> and `C-XVI`'s corollaries rather than against its summary.**

| `C-XVI` element | Status after `PO-U1 … PO-U3` |
|---|---|
| **The rule — a registration-grounded claim is ORDINARY in every respect bearing on its resolution; no default win, presumption, tiebreak, privileged path, differential weight** | ⟦PRODUCT-OWNER DECISION⟧ **UNCHANGED, UNWEAKENED, and RESTATED BY THE OWNER FOR A SIXTH TIME** — `PO-U3·b` names `C-XVI` by name and says *"unchanged"*; `PO-U3·c` adds *"a registration-backed claim can still lose **or receive only part of the commission allocation**"* |
| **Corollary 1 — an UNOPPOSED minted claim is not thereby a RESOLVED claim** | **UNCHANGED and NOT REACHED.** `PO-U1·2` conditions the ALLOCATION on a clash; it says nothing about the resolution of an unopposed claim, which `PO-S1·9` governs |
| **Corollary 2 — a minted claim may LOSE, and losing must be a reachable, recorded, permanent outcome** | **UNCHANGED — and one honest note is attached rather than omitted** — see below |
| **Corollary 3 / `A-39`'s fourth** | **UNCHANGED and NOT ENGAGED** |

> ⟦ARCHITECT ANALYSIS⟧ **The honest note on corollary 2, because the intuitive reading is wrong and the
> wrong reading is dangerous.**
>
> > **A 0% ALLOCATION IS NOT *"LOSING"*. Losing is an ATTRIBUTION outcome at `PO-P10` level 5. A 0%
> > allocation is a COMMISSION outcome about one booking.** ⟦SETTLED⟧ **`K-9`/`K-10` keep them apart, and
> > `C-XXI`(3) forbids the collapse.**
> >
> > **The two are therefore BOTH reachable and they are NOT redundant: a CP may WIN the attribution contest
> > and be allocated 0% of the money, and a CP may be allocated 60% and then fail `NF-28` conjunct (iii)
> > and receive nothing.** ⟦ARCHITECT ANALYSIS⟧ **The second of those is `PF-5` configuration 3's shape —
> > AD-01P's sharpest demonstration that winning is not being paid — arriving a second time and now
> > multiplied across claimants. It is the strongest available demonstration of `K-9` in the series.**
>
> ⟦ARCHITECT ANALYSIS⟧ **What this does NOT license: it does NOT make a 0% allocation a substitute for a
> recorded attribution loss, and an implementation that stops recording the attribution outcome because the
> allocation *"says the same thing"* breaches `C-XVI` corollary 2, `K-17`, `PO-U3·d` and `C-XXI`(3) at
> once.**

### 5.3 `P-G`, `C-XX` and `PO-T1`'s ratified sequence — which steps are affected

> ⟦ARCHITECT ANALYSIS⟧ **`PF-115` — walked step by step against AD-01T's ratified ten, because the whole of
> `P-G` was ratified two documents ago and any claim that it is affected must be shown, not asserted.**

| Owner's ratified step (`PO-T1·n`) | Affected by `PO-U1 … PO-U3`? |
|---|---|
| **`·1`** Inquiry arrives and becomes its own Inquiry record | **NO. NOT REACHED.** `J-2` as bounded by `K-50` acquires no input — the SIXTH consecutive document to report this |
| **`·2`** system checks for a currently-live registration | **NO. NOT REACHED.** `AC-24` untouched |
| **`·3`** a claim may be recorded citing the specific registration record | **NO. NOT REACHED.** `AC-25`'s first half untouched, `PF-23` untouched |
| **`·4`** the claim is evaluated through the normal attribution/clash-resolution process | **NO, ON THIS DOCUMENT'S CONCLUSION — and this is the clause `AC-35` puts back to the owner** |
| **`·5`** the registration carries no special weight | **NO. RESTATED by `PO-U3·b`** |
| **`·6`** the claim can lose | **NO. UNCHANGED, and [§5.2](#52-c-xvi-re-verified-in-a-richer-outcome-space) records why a 0% allocation is not this** |
| **`·7`** the authorised decision-maker resolves the attribution/clash | **NO, ON THIS DOCUMENT'S CONCLUSION. `C-XX` is NOT widened, NOT narrowed and NOT re-scoped** — [§4.2](#42-the-authority-question-worked--not-assumed). ⚠ **`AC-35`** |
| **`·8`** Site Head may exercise the separately defined override | **NO. `Q-OV` is NOT replaced and NOT subsumed** — [§2.2](#22-investigation-2--is-this-q-ov) |
| **`·9`** only after attribution is resolved, and only if the Inquiry converts, is eligibility evaluated | ⚠ **A NEW ACT NOW SITS INSIDE IT.** **`PO-U2·B` falls between *"converts"* and *"eligibility is evaluated."* The clause's ORDER is not contradicted; its enumeration is now incomplete** → `A-57` |
| **`·10`** approval/payout remains downstream of eligibility | **NO. RESTATED by `PO-U2·C` — the owner's FOURTH statement** |

> ⟦ARCHITECT ANALYSIS⟧ **NET: `P-G`'s six steps and the owner's ten are UNCHANGED IN ORDER, UNCHANGED IN
> ACTOR and UNCHANGED IN AUTHORITY. What changes is that the sequence is now known to be INCOMPLETE — one
> act belongs between `PO-T1·9`'s two conjuncts and no step describes it.** **`A-57` names that and does not
> make it. `A-38`(b) is NOT renumbered, NOT repositioned again and NOT made.**

### 5.4 The contradiction search, run in full

> ⟦ARCHITECT ANALYSIS⟧ **`PF-116` — run rather than asserted. ONE item is allocated and the rest are shown
> being ruled out.**

| Rule | Result |
|---|---|
| **`PO-P10`** — the seven levels, and AD-01P §3.13's mapping of them onto the architecture's six layers | ⚠ **CONTRADICTED IN THE SAME WAY `X-24` FOUND, AT A SECOND PLACE** → **`X-26`**, `A-56`. ⟦ARCHITECT ANALYSIS⟧ **AD-01P §3.13 concluded *"`PO-P10`'s seven levels map onto the architecture's existing six WITHOUT A SINGLE ADDITION."* AD-01Q `X-24` found the first addition — an attribution-override layer at 5½ that the owner's list does not name. `PO-U2·B` is a SECOND addition, between level 5 and level 6, and the owner's list does not name it either.** **`PO-P10` remains UNCHANGED AS A PROHIBITION; only the owner may extend their own enumeration, and this document does not fill it** |
| ⟦SOURCE⟧ **§11** | **NOT CONTRADICTED.** ⟦ARCHITECT ANALYSIS⟧ **§11 requires each claim to be recorded, history preserved, and attribution resolved by authorized leadership. An allocation neither deletes a claim, nor rewrites history, nor resolves attribution. And §11 states no basis for the resolution, so a decision taken without a stated basis cannot contradict it** — `PF-102` |
| ⟦SOURCE⟧ **§32** | **NOT CONTRADICTED — and EXTENDED, which is the owner's to do.** ⟦ARCHITECT ANALYSIS⟧ **§32 is silent on how many CPs an entitlement may name. Silence is not prohibition (Spec **Rule 1** cuts the other way: it forbids the ARCHITECT inventing, not the owner deciding). But the silence is total and it is reported as `PF-104`** |
| **`C-IV`** | **NOT CONTRADICTED** — [§2.1.6](#216-the-conclusion-and-it-is-a-real-one). **NOT AMENDED and NOT WIDENED** |
| **`K-18`** | **NOT CONTRADICTED. CONFIRMED FOR AN EIGHTH CONSECUTIVE DOCUMENT** |
| **`K-48`** conjunct (i) | ⚠ **NOT CONTRADICTED, BUT ITS PHRASING IS NOW WRONG** — the definite singular cannot express a two-CP outcome → `A-54`. ⟦ARCHITECT ANALYSIS⟧ **This is an amendment and NOT an `X`: `NF-28`, the clause that supersedes `K-48` in practice, already reads *"the Inquiry's claim set"*, so the architecture does not disagree with itself — one older sentence is simply narrower than the rule it states** |
| **`NF-28`**'s three conjuncts | **NOT CONTRADICTED and NOT AMENDED** — [§5.6](#56-the-split-allocation-representation-and-nf-28) |
| **`C-IX`** | **NOT BREACHED, NOT ENGAGED — and SATISFIED IN SUBSTANCE.** ⟦ARCHITECT ANALYSIS⟧ **`C-IX` held that a binding systemic precedence rule would be a §88 authorization change to §11. The owner has declined to create one. `C-IX` guarded a door nobody walked through, and `C-XXI`(7) keeps it shut against arrival by accumulation** |
| **`C-XI`** — registration is a TEMPORAL PROTECTION fact, never an ATTRIBUTION fact | **NOT BREACHED and CORROBORATED by `PO-U3·b`** |
| **`C-XVI`** | **NOT BREACHED, RESTATED** — [§5.2](#52-c-xvi-re-verified-in-a-richer-outcome-space) |
| **`C-XVII`, `C-XVIII`, `C-XIX`, `C-XX`** | **NOT BREACHED and NOT ENGAGED. All four remain UNRATIFIED and none is ratified, widened or narrowed here.** **`C-XVIII`'s reasoning is POINTED THE SAME WAY by `C-XXI`(7) and is not extended to cover the allocation — only the owner may do that** |
| **`C-XV`** — the minting test and the eligibility test are distinct | **NOT BREACHED and NOT ENGAGED. STILL UNRATIFIED** |
| **`K-9`/`K-10`** | **CONFIRMED, and load-bearing three times above** |
| **`K-17`** / AD-01 **§D.4** — append-only, never overwritten | **CONFIRMED and PROTECTED by `C-XXI`(3)** |
| **`K-52`/`K-12`** — clash scoping | **UNTOUCHED. Allocating a commission does not change what a clash is scoped to** |
| **`PO-Q1`/`Q-OV`** | **NOT REPLACED, NOT SUBSUMED, NOT NARROWED** — [§2.2](#22-investigation-2--is-this-q-ov) |
| **`NF-24`/`NF-25`/`NF-26`** | **UNTOUCHED. `C-XXI` is a FOURTH instance of `NF-26`(1)'s template, and a template gaining an instance is not a change to the template** |
| **`B-1`, `B-2`, `L-6`, `K-22`, `H-4`, `J-2`, `J-8`, `NF-9`, `C-V`, `C-VII`, `C-X`, `C-XII`, `C-XIII`, `C-XIV`, `O-U`, `OF-4`, `OF-6`, `L-25`** | **NOT ENGAGED. Each checked individually; each untouched; none reopened, narrowed, ratified or rejected.** ⟦ARCHITECT ANALYSIS⟧ **`L-25` is worth one line: it requires a management-created fact to be visibly distinguishable from one produced in the ordinary course, and `C-XXI`(3)'s separation of the allocation from the claim set is what keeps that true here** |

### 5.5 `Q-AR` — checked against the owner's own new chain

> ⟦ARCHITECT ANALYSIS⟧ **`PF-117` — the owner has stated a chain of their own in this message. It is
> compared term by term against `Q-AR`'s thirteen links, and the comparison is what produces `A-55`.**

**The owner's chain, from `PO-U1·10` and `PO-U2` read together:**

> **Booking → CP clash / claims → Site Head decision → allocation basis (percentage or amount) → resulting
> CP commission allocation → commission eligibility → commission approval → payout.**

| Owner's term | `Q-AR` link | Status |
|---|---|---|
| **Booking** | **link 10** | **PRESENT. `AC-5` (which booking fact is the Booking Date) still OPEN** |
| **CP clash / claims** | **link 7** | **PRESENT, as a RECORD.** ⟦ARCHITECT ANALYSIS⟧ **AD-01Q's own note on link 7 was *"the chain can record the clash; it cannot yet say how it should come out."* **That note is now DISCHARGED by `PO-U1`: how it comes out is the Site Head's allocation** |
| **Site Head decision** | ⚠ **ABSENT** | **NO LINK EXISTS. Link 8 is the attribution/clash decision and link 9 is the `Q-OV` override; neither is this** → `A-55` |
| **allocation basis (percentage or amount)** | ⚠ **ABSENT** | **NO LINK EXISTS and no existing link carries it** → `A-55` |
| **resulting CP commission allocation** | ⚠ **ABSENT** | **NO LINK EXISTS.** ⟦ARCHITECT ANALYSIS⟧ **Link 11 is *commission eligibility*, which is a per-claim test and not a portion** → `A-55` |
| **commission eligibility** | **link 11** | **PRESENT. RECOMMENDED, NOT APPROVED. `AC-22` OPEN** |
| **commission approval / payout** | **link 12** | **PRESENT as a SOURCE PATH** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION.**
>
> > **`Q-AR` REQUIRES NEW LINKS FOR THE FIRST TIME SINCE AD-01Q MINTED IT. It was unamended through AD-01R,
> > AD-01S and AD-01T; this document breaks that run, and the reason is that `PO-U2·B` is a decision the
> > chain has no term for.** → **`A-55`, NAMED AND NOT MADE.**
>
> **Why this does not breach `PF-34(2)`'s discipline, stated because AD-01Q set that discipline explicitly.**
> ⟦ARCHITECT ANALYSIS⟧ **`PF-34(2)` holds that *"for example"* does not license the architect adding a term
> the owner did not name. **The owner HAS named these terms** — *"the Site Head's decision"*, *"percentage OR
> explicit commission amount per CP"*, *"the resulting CP commission allocation"* — in `PO-U1·9` and
> `PO-U1·10`, in their own words. **Nothing is invented; three owner-named terms are matched against the
> chain and found to have no home.**
>
> **What is NOT admitted, stated with equal force:** ⟦PRODUCT-OWNER DECISION⟧ **NO EVIDENCE LINK, NO EVIDENCE
> FIELD, NO EVIDENCE-SCORE TERM AND NO SUPPORTING-DOCUMENT TERM IS ADMITTED TO `Q-AR` ANYWHERE.**
> **`PO-U1·7` and `PO-U1·11` place the reasoning OUTSIDE BMexa, and `PO-U3·a` forbids the score.** ⟦ARCHITECT
> ANALYSIS⟧ **This is the single easiest over-reach available in this document and it is declined
> explicitly. `PO-Q1·b`'s mandatory evidence belongs to `Q-OV` at link 9 and stays there.**
>
> **And one existing gap gets worse, reported rather than smoothed.** ⟦ARCHITECT ANALYSIS⟧ **`X-25`/`A-37`
> record that link 8 is *"ESTABLISHED AS A BUSINESS-RECORD DISCIPLINE. NOT BACKED BY AN `NF-27` AUDIT
> EVENT"* while `PO-Q2·b` names both substrates conjunctively. The new links are backed by NEITHER substrate,
> because they did not exist ten minutes ago. `PO-Q2·a`'s requirement remains OWNER-RATIFIED AND NOT YET
> SATISFIABLE, and the distance to satisfying it has grown. `X-25`/`A-37`'s priority rises a second
> consecutive time. `AC-31` (who the auditor is) is untouched.**

### 5.6 The split-allocation representation, and `NF-28`

> ⟦ARCHITECT ANALYSIS⟧ **`PF-118` — worked as an architectural question and not an implementation one. Three
> sub-questions, each answered.**

**Sub-question 1 — are percentage and amount two CONCEPTS or two BASES for one concept?**

> ⟦ARCHITECT RECOMMENDATION⟧ **TWO BASES FOR ONE ALLOCATION, NOT TWO CONCEPTS.**
>
> **The recorded business fact is one:** *"this CP receives this portion of this booking's CP commission."*
> **`PO-U1·9`'s *"percentage OR explicit commission amount"* names two ways the Site Head may ENTER that one
> fact.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U2`: *"The system must preserve the exact allocation decided. The
> allocation must be representable as either percentage-based or amount-based."***
>
> **Two consequences, both architectural and neither a formula:**
>
> 1. **The BASIS AS ENTERED must be retained, and must not be silently normalised to the other.**
>    ⟦ARCHITECT ANALYSIS⟧ **Converting an amount to a percentage requires a commission TOTAL, and the total
>    is `M-9`'s and is not stable: ⟦SOURCE⟧ **§25**/**§26** booking amendments and unit transfers change the
>    transaction, and `K-47` is the clause that carries the surviving transaction identity through them.
>    An allocation entered as *"₹X to CP A"* and stored as *"40%"* silently re-prices itself when the
>    booking is amended; one entered as *"40%"* and stored as an amount silently fails to.** ⟦SOURCE⟧ **R6**:
>    *"an event records the actor label and the facts as they were at the time."* ⟦PRODUCT-OWNER DECISION⟧
>    **`PO-Q2·a`'s reconstructability requires the same.** **WHICH behaviour is correct when a booking is
>    later amended is NOT decided here and is NOT `AC-34` either — it is `M-9`'s, and it is named as a
>    consumer at [§8.2](#82-the-rest-carried-forward).**
> 2. **It is NOT two record shapes, two decisions or two mechanisms.** **One decision, one allocation, one
>    retained basis.** ⟦ARCHITECT ANALYSIS⟧ **A design that branches into two paths at the point of entry
>    will produce two audit trails for one owner-named act, which `PO-Q2·a` forbids in substance.**

**Sub-question 2 — does `NF-28` need amendment to admit a multi-party outcome?**

> ⟦ARCHITECT RECOMMENDATION⟧ **NO. `NF-28`'s THREE CONJUNCTS ARE UNCHANGED, UNAMENDED AND SUFFICIENT — and
> this was CHECKED against their exact wording rather than assumed.**
>
> | Fact | Source |
> |---|---|
> | **`NF-28` is already evaluated PER CLAIM, not per Inquiry and not per winner** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`'s Subject row, verbatim: *"One determination — one **(CP claim × booking)** eligibility outcome."*** |
> | **Its conjunct (i)'s ANSWER-BEARER is already the SET** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28` conjunct (i)'s own answer-bearer column: *"The Inquiry's **claim set**."*** |
> | **Its conjunct (iii) is already PER CP** | **It tests *"the CP's registration for that (client, Project)"* — a different registration per CP, and `O-U` is per-triple** |
> | **Its conjunct (ii) is already SHARED** | **One booking, one §32 milestone, read by however many claims are tested against it** |
>
> **So two CPs whose claims both have standing, each holding a registration containing the booking date,
> can BOTH satisfy `NF-28` today, on one booking, with no amendment whatever.** ⟦ARCHITECT ANALYSIS⟧ **The
> eligibility layer was never a winner-picker. It is a per-claim boolean test, and the winner-picking was
> always upstream of it. That is why the multi-party outcome lands on it without strain.**

**Sub-question 3 — then where does the PORTION live, and is it a fourth conjunct?**

> ⟦ARCHITECT RECOMMENDATION⟧ **IT IS NOT A FOURTH CONJUNCT. ELIGIBILITY STAYS A PER-CLAIM BOOLEAN JOIN; THE
> ALLOCATION SUPPLIES A WEIGHT THAT THE MONEY CONSUMES.**
>
> | | Statement |
> |---|---|
> | **Why not a conjunct** | ⟦ARCHITECT ANALYSIS⟧ **A conjunct of `NF-28` is a condition that can FAIL and thereby deny eligibility. A portion is a QUANTUM. Making the portion a conjunct would mean *"allocated 0%"* denies eligibility — which merges `PO-P10` level 6 with the allocation, breaches `C-XXI`(3), and makes a 0% allocation indistinguishable from an ineligibility, destroying `K-9`'s distinction at exactly the point it matters most** |
| **Where the quantum belongs** | ⟦SETTLED⟧ **`M-9` owns every formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule and TDS treatment. A portion is a quantum. `M-9` gains a new INPUT and NOTHING about its content is proposed here** |
| **The resulting shape, stated once** | **For each (claim × booking): `NF-28` decides ELIGIBLE or NOT; the allocation decides WHAT SHARE an eligible one receives; `M-9` turns the share into money. THREE separated steps, and the separation is `PO-U3·d`'s in the owner's own words** |
| **The order of the two** | ⟦ARCHITECT ANALYSIS⟧ **NOT DECIDED HERE, and the omission is deliberate.** **Whether a claim that fails `NF-28` may be allocated a share at all, and what becomes of that share if it is, is `AC-34`'s territory and `M-9`'s. `C-XXI`(4) requires only that the allocation exist before the milestone is acted on** |

> ⟦BUSINESS DECISION REQUIRED — `AC-34`, MINTED AND NOT ANSWERED⟧ **Explicitly NOT decided, on the owner's own
> instruction:** **what happens when entered percentages do not sum to 100; whether an amount-based allocation
> may exceed, fall short of, or exactly equal the commission `M-9` computes; how any residual is treated;
> whether rounding is permitted and in whose favour; and whether an allocation may be entered for a claim that
> subsequently fails `NF-28`.** **NO RULE, DEFAULT, TOLERANCE, ROUNDING CONVENTION OR RESIDUAL TREATMENT IS
> PROPOSED, PREFERRED, RANKED OR IMPLIED** — [§8.1](#81-the-two-new-questions-ac-34-and-ac-35).

### 5.7 `Q-AR`: the owner's own chain, checked link by link

> ⟦ARCHITECT ANALYSIS⟧ **This determination is [§5.5](#55-q-ar--checked-against-the-owners-own-new-chain)
> and is not restated. It is cross-referenced here because `PO-U1·10`'s chain is the owner's and a reader
> looking for it under an audit heading must find it.** **Result: `Q-AR` gains three owner-named terms as
> new links; no evidence term is admitted anywhere;** `A-55`.

### 5.8 Which open items this decision actually reaches

> ⟦ARCHITECT ANALYSIS⟧ **Every item below is checked INDIVIDUALLY. *"Unchanged"* means CHECKED AND
> UNCHANGED, never skipped. NOTHING is closed on the strength of an answer that does not reach it, and no
> item is closed out of momentum because a neighbouring one closed.**

| Item | Effect of `PO-U1 … PO-U3` |
|---|---|
| **`AC-15`** — what rule resolves a CP-vs-CP contest | ⟦PRODUCT-OWNER DECISION⟧ **CLOSED IN ITS CONTENT LIMB. THERE IS NO RULE; IT IS SITE HEAD DISCRETION, AND THE OUTCOME SPACE IS NOT BINARY.** **The FOURTH item in the series closed by direct owner ruling, after SEVEN documents raising it** — [§5.1](#51-ac-15-and-ac-20--what-is-closed-and-what-is-not) |
| **`AC-20`** — may the second registration be CREATED | **UNCHANGED, NOT ANSWERED, NOT NARROWED — and CHECKED rather than assumed.** **`PO-U1·2`'s untroubled reference to a clash is satisfied by the one-registration configuration and is therefore silent** |
| **`AC-25`** — automatic mint vs discretionary act; is an unopposed claim adjudicated like a contested one | **BOTH HALVES UNCHANGED, NEITHER ANSWERED, NO DEFAULT IMPLIED — CHECKED because the task asked whether a confirmed-discretionary DOWNSTREAM decision bears on it.** ⟦ARCHITECT ANALYSIS⟧ **IT DOES NOT.** **`AC-25`'s first half asks who mints a claim at `P-G` step 4; `PO-U1` names no actor for claim creation and begins at booking. Its second half asks whether an UNOPPOSED claim needs the same adjudication act; `PO-U1·2`'s *"if there is a CP clash"* conditions the ALLOCATION, not the adjudication, and `PO-S1·9` — owner-status — already holds that the normal attribution determination applies with no competition.** **One adjacency is recorded and is NOT an answer: with a single claim there is nothing to allocate among, so `PO-U2·B` is simply not triggered. That is a fact about `B`'s trigger, not about `AC-25`'s question** |
| **`AC-27`** — may one individual perform both OVERRIDES on one commercial outcome | **UNCHANGED, NOT ANSWERED — and ENLARGED IN ITS POPULATION, which is recorded and is not an answer.** ⟦ARCHITECT ANALYSIS⟧ **`AC-27`'s pair is the attribution override and the eligibility exception. There are now FOUR Site-Head-shaped acts reachable on one commercial outcome — the step-7 decision, the `Q-OV` override, the allocation, and the `NF-24` exception — so the separation-of-duties question `AC-27` opens has a larger surface. Its QUESTION is unchanged and no answer is proposed** |
| **`AC-33`** — may the step-7 decision-maker override their own decision; should one role ship holding both | **UNCHANGED, NOT ANSWERED — and its SECOND limb ENLARGED to a third permission.** ⟦ARCHITECT ANALYSIS⟧ **`C-XXI` is a fourth distinct permission whose named default holder is again *Site Head*. Whether the default shipping configuration should grant one role the step-7 decision, the override AND the allocation is `AC-33`'s second limb with one more term. **`PO-T2` names *Site Head / Project Head* and `PO-U1·4` names *Site Head* alone; that asymmetry is folded here rather than minted separately** — [§4.2](#42-the-authority-question-worked--not-assumed). **NO ANSWER IS PROPOSED** |
| **`AC-28`** — the evidence asymmetry between the ordinary decision and the override | **UNCHANGED IN WHAT IT ASKS — and SHARPENED A SECOND TIME, which is recorded and is NOT a narrowing.** ⟦PRODUCT-OWNER DECISION⟧ **The asymmetry is now THREE-WAY and one leg is owner-fixed: `PO-Q1·b` makes evidence MANDATORY for `Q-OV`; AD-01M §11.2 requires stated REASONS for the ordinary decision and no source requires structured evidence of it; `PO-U1·7`/`PO-U1·11` make evidence EXPRESSLY NOT REQUIRED for the allocation.** ⟦ARCHITECT ANALYSIS⟧ **`AC-28` asked why two named acts differ; it now has a third data point and one of the three is settled. NO EVIDENCE STANDARD IS PROPOSED FOR ANY OF THE THREE** |
| **`AC-29`** — until when may an override be performed | **UNCHANGED, NOT ANSWERED — and MORE VISIBLE.** ⟦ARCHITECT ANALYSIS⟧ **`PO-Q2·c` places `Q-OV` before the Booking and `PO-T1·8` between steps 7 and 9. A post-booking allocation now exists downstream of both, which makes *"until when"* a question with a concrete later landmark. That is visibility, not an answer** |
| **`AC-30`** — what an override's decision may SAY | **UNCHANGED, NOT ANSWERED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED for one specific hazard and the hazard is named: an override that purported to state a SPLIT would be `Q-OV` doing `C-XXI`'s job. `C-XXI`(2) and `PF-107` forbid it. Whether `AC-30`'s answer should say so is the owner's and is NOT proposed** |
| **`AC-31`** — who the auditor is | **UNCHANGED, NOT ANSWERED.** The reconstruction surface grows; the question of who reads it does not change |
| **`AC-13`** — self-interest controls | **ENLARGED A THIRD TIME, NOT ANSWERED, NOT NARROWED.** ⟦ARCHITECT ANALYSIS⟧ **`NF-26`(6) raised it for the eligibility-exception approver; AD-01Q §3.13 enlarged it to the override holder; AD-01T enlarged it to the step-7 decision-maker; it now reaches a FOURTH act — whether the allocator may sit in a benefiting reporting line, be a CP's relationship manager, or allocate on a clash involving a claim they filed. `PO-U1·3` expressly contemplates the decision-maker talking directly to the CPs, which makes the question live rather than theoretical. NOT STATED BY ANY SOURCE and NOT invented here. `V-7`'s fail-closed projection remains the mechanism and only the content is open** |
| **`AC-32`** — should any SEPARATE anti-abuse control exist | **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED rather than assumed.** ⟦ARCHITECT ANALYSIS⟧ **One thing changed and it is stated precisely: AD-01R `PF-64` named *"the real control"* as `PO-P4` + `C-XVI` operating *"per case, on judgement."* That control now has a second per-case expression — a registration-farmed claim can be allocated 0%. **This makes the existing control WIDER without making it SYSTEMIC**, and `C-XVI` at owner status still forbids a systemic bar. The cost `PO-R2` accepts is NOT retired, NOT reduced and NOT offset. `AC-32` remains OPEN and OFF the critical path** |
| **`AC-6`** — boundary convention α/β; is `N = 0` legal | **UNCHANGED, NOT RESOLVED, NO CONVENTION SELECTED — and CHECKED FOR A FOURTH MONEY-BEARING CONSUMER: THERE IS NONE.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U1`/`PO-U2` evaluate no window, compare no dates and consult no `(R, N)` pair. `NF-28` conjunct (iii) still owns the window test and is unamended.** **AD-01T's DISCREPANCY NOTICE — that the owner lists `AC-6` among locked decisions and it is open — is NOT discharged and is carried forward unchanged** |
| **`AC-24`** — which date the gate evaluates at · **`AC-9`/`T-9`** (offline capture vs sync date) | **UNCHANGED, NOT ANSWERED, NOT NARROWED. No date is named anywhere in `PO-U1 … PO-U3`** |
| **`AC-22`** — which registration governs conjunct (iii) | **UNCHANGED, NOT ANSWERED — and CHECKED, because a multi-CP outcome multiplies conjunct (iii) evaluations.** ⟦ARCHITECT ANALYSIS⟧ **Running conjunct (iii) for two CPs instead of one does not change WHICH of a CP's own registrations governs. `PF-5` configuration 2 is untouched and `C-XV` is not engaged** |
| **`AC-26`** — is a registration's grounding power SINGLE-USE or REPEATABLE | **UNCHANGED, NOT ANSWERED, NOT NARROWED. `PO-U1` operates downstream of grounding entirely.** **`Y-1`, `Y-3`, `AA-1`, `K-26`, `T-5` likewise NOT resolved, NOT narrowed, NOT branched** |
| **`AC-12`** — may the eligibility exception run in the reverse direction | **UNCHANGED, NOT ANSWERED — CHECKED because an allocation reducing a CP's share superficially resembles it.** ⟦ARCHITECT ANALYSIS⟧ **IT IS NOT.** **`NF-24` excepts an ELIGIBILITY determination; `C-XXI` allocates a PORTION. `NF-25`'s prohibition — *"it does not create an attribution claim, does not resolve a §11 clash"* — and `C-XXI`'s mirror of it keep them apart** |
| **`AC-21`** with **`Q10`**/**`M-5`**'s uniqueness half · **`AA-2`** · **`AC-5`, `AC-7`, `AC-8`, `AC-18`, `AC-23`** with **`Q11`** (still BLOCKING) | **UNCHANGED — each CHECKED and each RULED OUT as unaffected.** **`Q-AR` links 1 and 3 remain gated by `AC-21` and `AC-9` exactly as AD-01Q left them. No client-identity term, project-optionality, booking-date fact, snapshot, timezone or cadence is touched** |
| **`AC-1`** (authorization posture of the closing-reason tap) · **`N-4`** (the closing-reason vocabulary) | **UNCHANGED. Both stay NARROWED-NOT-CLOSED. `PO-U1` reaches no disposition reason and touches no tap. NO VALUE IS PROPOSED, NAMED, RANKED OR IMPLIED** |
| **`AC-14`** = Option A | ⟦PRODUCT-OWNER DECISION⟧ **STILL CLOSED, LOCKED, UNTOUCHED AND ORTHOGONAL — CHECKED, not assumed.** **Nothing here reads a closure, classifies one, or consumes a registration. `(L-6·ground)` is not reopened** |
| **`X-24`**/**`A-38`(a)** — `PO-P10`'s incomplete enumeration | **UNCHANGED AND NOT FILLED — and now JOINED by a second instance of the same defect** → **`X-26`**, `A-56`. **Only the owner may extend their own list** |
| **`X-25`**/**`A-37`** — `NF-27`'s missing audit events | **NOT DISCHARGED, NOT NARROWED — PRIORITY RAISED A SECOND CONSECUTIVE TIME, and the reason is new: the allocation decision is backed by NEITHER of `PO-Q2·b`'s two substrates** — [§5.5](#55-q-ar--checked-against-the-owners-own-new-chain) |
| **`X-5`** | **UNCHANGED. It stays DISCHARGED BY PRODUCT-OWNER DECISION exactly as AD-01R left it** |
| **`L-13`**'s hazard finding · **`MF-9`** · **`X-13`** | **UNAFFECTED AS FINDINGS. The cost `PO-R2` accepts is NOT retired and NOT reduced** |
| **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`** · **`Q0-a`, `Q0-b`, `Q0-d`, `Q0-e`** · **`AC-2`, `AC-3`, `AC-10`, `AC-11`, `AC-16`, `AC-17`, `AC-19`** | **UNCHANGED — each carried forward and each accounted for. NONE resolved, NONE narrowed, NONE enlarged.** ⟦SETTLED⟧ **`V-4` is the cheapest unblocking question in the register for the TWELFTH consecutive document. `Q0-d` stays OFF the critical path. `Q0-c` stays ANSWERED with `AC-14`.** ⟦ARCHITECT ANALYSIS⟧ **`AB-1` (one Booking Group, multiple applicants) and `AB-3` (sub-agent payee) were checked specifically, because both touch *"how many parties does one booking's money reach?"* — `AB-1` is about multiple BUYERS and `AB-3` about the PAYEE identity within one CP relationship. Neither is about dividing one commission across two CP relationships. Both UNCHANGED** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start — with ONE NEW INPUT NAMED AND NOT SPECIFIED.** ⟦SETTLED⟧ **It owns every formula, rate, slab, percentage VALUE, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING here touches any of them.** **Its consumer list gains: the allocation as a per-CP portion; the basis-as-entered question under §25/§26 amendment; and `AC-34`** |

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in the **financial rules**, **CP commission logic**, **authorization rules**
> and **audit requirements** MUST-ASK columns. **Delegation to an architect is not authorization.** Per
> CLAUDE.md: assigning work to `architect` does not satisfy the §88 layer, and nothing in
> [§4](#4-the-mechanism-and-the-authority), [§5](#5-the-determinations) or
> [§7](#7-the-amendment-register) becomes approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

> ⟦ARCHITECT ANALYSIS⟧ **The check was run honestly in both directions, and the honest report is both
> halves.**
>
> **THE MOST SUBSTANTIVE SINGLE CLOSURE IN THE SUB-SERIES HAS JUST HAPPENED, and that is stated plainly
> rather than minimised.** **`AC-15` — raised by SEVEN consecutive documents, named by AD-01T as the
> conspicuous hole left by naming an authority with no rule — is CLOSED in its content limb by a direct
> Product-Owner ruling. `C-IX` said the architect could never supply the answer; the owner has supplied it,
> and the answer is that there is no rule.**
>
> **AND IT IS STILL `VALIDATE`, for a reason that is structural rather than temperamental: the answer
> arrived with a NEW DECISION POINT attached, that decision point exists nowhere in the Master Spec, and
> whether it displaces an owner-ratified clause is a question only the owner can close.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **The decision is the Project Owner's, it is internally
coherent, it answers the exact question it was asked, and — on
[§2.1.6](#216-the-conclusion-and-it-is-a-real-one)'s conclusion — **it contradicts no approved decision and
no architect recommendation except one phrase.** It closes the sub-series' longest-standing open item, it
supplies the content of the step every other step exists to reach, and it asks for MORE separation between
decision points rather than less.**

**Why not BUILD NOW.**

- **`AC-35` IS NEW, MATERIAL AND UNANSWERED, AND IT BEARS ON AN ALREADY-RATIFIED OWNER CLAUSE.** **Whether
  `PO-T1·4`/`·7`/`·9`'s pre-booking attribution resolution still happens is the question
  [§6.2](#62-the-one-next-question) puts to the owner. Until it is answered, `P-G`'s steps 4–7 are ratified
  but their continued occurrence is uncertain, and `C-XX` is a permission whose decision may or may not be
  taken.**
- **`PO-U2·B` HAS NO MECHANISM, NO ARTEFACT, NO AUDIT BACKING AND NO PLACE IN `PO-P10`.** **`C-XXI` is new
  and unratified; `Q-AR` needs three new links (`A-55`); `PO-P10`'s enumeration lacks its level (`X-26`,
  `A-56`); and `NF-27` backs it on neither substrate (`X-25`/`A-37`, priority raised again).**
- **SPLITTING A COMMISSION IS ABSENT FROM THE ENTIRE MASTER SPEC** — `PF-104`. **§32, §33, §34 and §40 are
  singular throughout. This is a §88 addition and `M-9` cannot start.**
- **`AC-34` IS NEW AND UNANSWERED** — residual, rounding and sum behaviour, expressly not invented here.
- **Gate 2's three remaining limbs (`C-XV`, `PF-6`, `PF-23`) are untouched, and Gate 3 is ENTIRELY
  UNTOUCHED** — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's
  permission, and `C-XX`, are ALL STILL UNRATIFIED. **`C-XXI` joins them.**
- **`AC-20`, `AC-25` (both halves), `AC-6` with its discrepancy notice, `AC-22`, `AC-24`, `AC-26`,
  `AC-27 … AC-33`, `AA-2`, `AC-21` and `AC-23` with `Q11` (BLOCKING) are all untouched.**
- **FIFTY-SEVEN amendments stand NAMED AND NOT MADE across thirteen documents.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. `AC-35` is one sentence from the owner. `AC-34` is a short financial ruling. Every
remaining gate is a signature or a short answer, and a further architect document would be analysis
substituting for a decision — AD-01L's own words, applied now for the ninth time.** **And shelving would
waste what this answer has bought: the sub-series' longest-open question is answered, and the answer is
usable the moment its one residual is closed.**

### 6.1 The gating list after this decision

> ⟦ARCHITECT ANALYSIS⟧ **AD-01T's eight-item list, restated with gate 8's head DISCHARGED, one item added to
> gate 8, gate 3 gaining one clause — and ONE NEW GATE ADDED AT THE HEAD. The list moves from EIGHT to NINE,
> and that arithmetic is reported rather than fitted: an item closed and a gate opened do not cancel.**

| # | Gate | Status |
|---|---|---|
| **0** | ⚠ **`AC-35`** — does the pre-booking §11 attribution resolution (`PO-T1·4`/`·7`/`·9`) still happen, or has the Site Head's post-booking allocation absorbed it | ⟦BUSINESS DECISION REQUIRED⟧ **NEW, AND IT IS THE HEAD OF THE LIST.** ⟦ARCHITECT ANALYSIS⟧ **It sits above gate 2 because it decides whether `P-G`'s steps 4–7 — which gate 2's remaining limbs sit inside — describe acts that occur.** → [§6.2](#62-the-one-next-question) |
| **~~1~~** | ~~`AC-14`~~ | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED at AD-01R. LOCKED** |
| **2** | **`C-XV`**, **`PF-6`** and **`PF-23`** — AD-01P gate 2's three remaining limbs | **ALL ARCHITECT DERIVATIONS, ALL UNRATIFIED. `C-XV` remains this gate's head** |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission, `C-XX` — and now `C-XXI`** | **ALL UNRATIFIED.** **`C-XXI` carries the decision point `PO-U2·B` requires and is the only clause in the series for it** |
| **4** | **`AC-27`** and **`AC-33`** — separation of duties across what are now FOUR Site-Head-shaped acts | **NEITHER ANSWERED. Both ENLARGED IN POPULATION, neither narrowed** |
| **5** | **`AC-30`** — what an override's decision may SAY | **NOT ANSWERED** |
| **6** | **`AC-29`** — until when may an override be performed | **NOT ANSWERED** |
| **7** | **`AC-28`** and **`AC-31`** — the now three-way evidence asymmetry; who the auditor is. **`AC-13`** sits beside them, ENLARGED a third time | **NOT ANSWERED** |
| **8** | ~~`AC-15`~~ **DISCHARGED IN ITS CONTENT LIMB** · **`AC-20`** · **`AC-34`** (NEW) · **`AC-25`** (both halves) · **`AC-12`** · and the operand tier — **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s uniqueness half**, with **`AC-32`** as a VALIDATE / BUILD-LATER consideration | ⟦PRODUCT-OWNER DECISION⟧ **`AC-15`'s CONTENT LIMB CLOSED HERE — the FOURTH direct owner ruling in the series.** **The rest NOT ANSWERED. `Q11` still BLOCKING. `AC-6` carries AD-01T's discrepancy notice unchanged** |

**What VALIDATE means concretely.**

1. **Take `AC-35` first.** **It is one sentence from the owner and it gates the meaning of three ratified
   steps.**
2. **Then `AC-34`, in the same sitting** — it is the other half of making `PO-U1` implementable, and it is a
   financial ruling the owner can give directly.
3. **Then gate 2, then gate 3** — now including `C-XXI`. **Gates 2 and 3 remain one sitting.**
4. **Then gates 4–8 in the commercial sitting that TEN consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1, AD-01Q §6.1, AD-01R §6.1, AD-01S §6.1,
   AD-01T §6.1 and this section.
5. **Carry AD-01T's `AC-6` NOTICE forward unchanged.** **It is not discharged, it blocks no ratification,
   and it remains triply money-bearing.**
6. **Ratify or reject `A-54 … A-57` alongside `A-1 … A-53`** (`Q0-e`). **Fifty-seven unmade amendments
   across thirteen documents.**
7. **Nothing may be built meanwhile that presupposes an answer to any remaining gate.** ⟦SOURCE⟧
   consolidated **§30**. **Everything AD-01P §6.1(4), AD-01Q §6.1(5), AD-01R §6.1(6), AD-01S §6.1(6) and
   AD-01T §6.1(7) list as NOT-TO-BE-BUILT remains not-to-be-built, and this decision adds to that list: no
   scoring model, evidence-ranking model, automatic precedence formula or mandatory evidence-upload
   workflow anywhere; no rounding, residual, sum-to-100, tolerance or minimum-share rule; no permitted-
   allocation value list; no single permission spanning the allocation and any of the other three acts; no
   allocation written onto, derived into, or read back as any attribution record; and no assumption either
   way about whether the pre-booking §11 attribution resolution still occurs.**

### 6.2 The one next question

> ⟦BUSINESS DECISION REQUIRED — ONE QUESTION, AND ONLY ONE⟧
>
> **This is `AC-35`, stated in the same plain register the owner has been answering in. It is asked alone
> because a list of several is how a gating list stops being taken.**
>
> > **"You have told us that when a booking goes through and two partners both claim it, your Site Head
> > looks at it, talks to the partners, and decides how the brokerage is split. We have that, and we are not
> > going to try to score it or make anyone upload paperwork for it.**
> >
> > **One thing we need you to settle, because two of your earlier answers now point different ways.**
> >
> > **Earlier you confirmed this order: a partner's claim on an enquiry is argued out and decided by your
> > leadership, and only AFTER that — and only if the enquiry converts — does anyone look at commission.
> > What you have just described starts at the booking.**
> >
> > **So which is it:**
> >
> > **(a) Both still happen. Before any booking, someone still decides whose enquiry it is — because that
> > decides who works the customer, who sees the clash, and whose number it is in your conversion reports,
> > even on the many enquiries that never convert. Then, if it does convert, your Site Head decides how the
> > money is split, and that split can differ from who 'won' the enquiry.**
> >
> > **(b) Only the booking one happens. Before a booking, the system just records that two partners have
> > claimed the same buyer and leaves it alone. Nobody decides anything until there is money on the table.**
> >
> > **If it is (b), tell us what your conversion reports should show for a contested enquiry that never
> > becomes a booking — because today they are built to show it against whoever won it."**
>
> ⟦ARCHITECT ANALYSIS⟧ **Why this one, and not another — verified against this document's own findings
> rather than assumed.**
>
> | Candidate | Why it is not the question |
> |---|---|
> | **`AC-34`** (rounding / residual / sum) | **The closest runner-up, and genuinely required before `PO-U1·9` is implementable. It is NOT the question because it is a detail INSIDE a mechanism whose POSITION is not yet certain, and because it blocks only `M-9`, which cannot start for four other reasons. If `AC-35` resolves to (b), some of `AC-34` changes shape** |
> | **Two Site Heads, two Projects, one clash** | **CHECKED AND RULED OUT as a question at all** — [§5.1](#51-ac-15-and-ac-20--what-is-closed-and-what-is-not). **`K-52` + `C-VII` + `C-XXI`(6) already make it impossible. Asking it would waste an owner sitting on a non-question** |
> | **`AC-20`** (may the second registration be created) | **Genuinely open and genuinely important, but it decides whether a configuration ARISES, not what happens when it does — and the owner has just told us what happens when it does. It is strictly downstream in urgency of knowing whether the pre-booking decision exists** |
> | **Gate 2's and gate 3's limbs, including `C-XXI`** | **RATIFICATIONS of material already written in full. The owner can sign or decline each; nothing must be authored. `C-XXI` in particular cannot sensibly be signed before `AC-35` fixes what sits upstream of it** |
> | **`AC-27`/`AC-33`** (separation of duties across four acts) | **A governance refinement of authorities that all already exist. It sharpens gate 4; it blocks nothing that `AC-35` does not block first** |
> | **`AC-6`** | **Carried forward as AD-01T's NOTICE, unchanged. It is one word, it blocks no ratification, and folding it into this question would make a two-part question out of a one-part one** |
>
> **And the positive reason, stated once.** ⟦ARCHITECT ANALYSIS⟧ **This document's entire conclusion —
> that `C-IV` is not contradicted, that `K-18` stands, that `P-G` is undisturbed, that `Q-OV` survives, that
> `NF-28` needs no amendment — rests on reading `PO-U2·B` as a LATER decision that presupposes the earlier
> one still happens.** **The reading is well-supported and it is stated as a real conclusion, not a hedge.
> But it is an architect's reading of an owner's silence about one step, and this series does not close
> owner silences.** **If the owner answers (b), then `PO-T1·9` needs amending by the owner, `P-G` loses its
> fifth step, `C-XX` loses its decision, and the reporting question in the last line of the question above
> becomes live. That is a large enough consequence that it must be asked rather than assumed — and it is the
> only remaining item in the register with that property.**

---

## 7. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands.
>
> **Result of the search against APPROVED decisions: NO contradiction was found with `Q1`, `Q4`, `Q6`, `Q7`,
> `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `PO-N1 … PO-N9`, `PO-O1 … PO-O14`,
> `PO-P1 … PO-P12`, `PO-Q1`/`PO-Q2`, `PO-R1`/`PO-R2`, `PO-S1`/`PO-S2` or `PO-T1 … PO-T3`** — **subject to
> `AC-35`, which is a QUESTION about `PO-T1·9`'s continued reading and is NOT a finding against it.**

### 7.1 Amendments to Product-Owner decisions: NONE are proposed

> ⟦ARCHITECT ANALYSIS⟧ **Stated in its own subsection because it is the thing a reader will most want
> confirmed.** **`A-54 … A-57` all target ARCHITECT RECOMMENDATIONS or ARCHITECT GLOSSES.** **`PO-P10`'s
> enumeration and `PO-T1·9`'s wording are both identified as incomplete — `X-26` and `AC-35` — and NEITHER IS
> AMENDED, PROPOSED FOR AMENDMENT, OR FILLED. Only the owner may extend or correct their own clause, and
> `A-56` names the ARCHITECT's mapping of `PO-P10`, never `PO-P10` itself.**

### 7.2 The four amendments, named and NOT made

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-54`** | **AD-01K §12's `K-48` consolidation; AD-01Q §2.1's comparison table; AD-01T §3.1's comparison table** | **A CARDINALITY CORRECTION, in three places, to ONE proposition.** **`K-48` conjunct (i) reads *"**the** resolved attribution claim on the converting Inquiry — the WHO."* AD-01Q §2.1 and AD-01T §3.1 each gloss the attribution decision's answer-bearer as *"**The** resolved attribution claim on that Inquiry"*, AD-01T citing it to `K-18`.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1·8`'s outcome space requires one booking's commission to reach MORE THAN ONE CP, so conjunct (i) must be able to name more than one claim with standing.** **All three must be restated in `NF-28`'s own already-correct form — *"the Inquiry's claim set"*, with `NF-28` evaluated per (claim × booking).** ⟦ARCHITECT ANALYSIS⟧ **`K-18` is NOT amended and is NOT the source of the singular; AD-01T's citation of it is part of what is corrected.** **`NF-28` itself needs NO change** — [§5.6](#56-the-split-allocation-representation-and-nf-28) |
| **`A-55`** | **AD-01Q §3.10 — `Q-AR`'s thirteen links** | **THREE NEW LINKS, between link 10 (Booking) and link 11 (commission eligibility), each named by the owner and none invented:** **(i) the Site Head COMMISSION-ALLOCATION DECISION, with its actor, date and stated reasons;** **(ii) the ALLOCATION BASIS as entered — percentage or amount;** **(iii) the RESULTING CP COMMISSION ALLOCATION per CP.** ⟦PRODUCT-OWNER DECISION⟧ **Sources: `PO-U1·9`, `PO-U1·10`, `PO-U2`.** ⟦ARCHITECT ANALYSIS⟧ **`PF-34(2)`'s test is met — every term is the owner's own.** **NO EVIDENCE LINK, EVIDENCE FIELD, EVIDENCE-SCORE TERM OR SUPPORTING-DOCUMENT TERM IS ADMITTED — `PO-U1·7`/`·11` and `PO-U3·a`.** **`Q-AR` was unamended for three consecutive documents; this breaks that run.** **The new links are backed by NEITHER of `PO-Q2·b`'s substrates, which enlarges `X-25`/`A-37` and does not discharge it** |
| **`A-56`** | **AD-01P §3.13's four-layer mapping, and AD-01Q's `X-24`/`A-38`(a) as it stands** | **A SECOND INSTANCE OF ONE DEFECT.** **AD-01P §3.13 concludes *"`PO-P10`'s seven levels map onto the architecture's existing six WITHOUT A SINGLE ADDITION."* AD-01Q `X-24`/`A-38`(a) found the first addition — the attribution-override layer. `PO-U2·B` is a SECOND, between level 5 and level 6, and neither the owner's list nor the architect's mapping has a place for it.** → **`X-26`.** ⟦ARCHITECT ANALYSIS⟧ **`A-38`(a) is NOT renumbered and NOT absorbed; this is a separate limb because the missing level is a different level.** **`PO-P10` ITSELF IS NOT AMENDED — only the owner may extend their own enumeration, and `PO-U3·d`'s eight-term list is the owner's own signal that they may wish to** |
| **`A-57`** | **AD-01P §3.1's `P-G` table; AD-01T §3.1's three-decision-point table; AD-01T `C-XX`** | **THREE LIMBS, one subject: the sequence and the decision-point inventory are now INCOMPLETE.** **(i) `P-G` — ratified in full at AD-01T — has no step for the allocation, which falls between conversion and step 6's eligibility test, i.e. inside `PO-T1·9`'s two conjuncts. A step must be added, and `A-38`(b)'s override step is NOT it and is NOT renumbered again.** **(ii) AD-01T §3.1's table of THREE decision points must become FOUR** — [§3](#3-the-abc-model-built-as-the-documents-central-structure). **(iii) `C-XX` must state that it does NOT reach the allocation decision, which `C-XXI`(2) states from the other side.** ⟦ARCHITECT ANALYSIS⟧ **None of the three changes any step's ORDER, ACTOR or AUTHORITY. `P-G`'s ratification is not disturbed; a ratified sequence that turns out to be incomplete is still ratified in what it says** |

> ⟦ARCHITECT ANALYSIS⟧ **FOUR — one more than AD-01R, AD-01S and AD-01T each produced.** **Candidates that
> were CONSIDERED and RULED OUT, shown so the count is checkable:**
>
> | Candidate | Why it is NOT an amendment |
> |---|---|
> | **AD-01N `NF-28`** | **Untouched. Its three conjuncts are sufficient as written and its conjunct (i) answer-bearer is already correct** — [§5.6](#56-the-split-allocation-representation-and-nf-28) |
| **AD-01N `NF-24`/`NF-25`/`NF-26`** | **Untouched. `C-XXI` is a FOURTH instance of `NF-26`(1)'s template, and a template gaining an instance is not a change to the template** |
| **AD-01Q `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, §3.3, §3.4** | **Untouched. `Q-OV` is neither widened nor narrowed** — [§2.2](#22-investigation-2--is-this-q-ov) |
| **AD-01J `C-IV`** | **NOT AMENDED and NOT WIDENED.** **The allocation needs a bound of `C-IV`'s shape; `C-XXI`(4) supplies one at the new decision point rather than stretching `C-IV` over an act it does not name** |
| **AD-01K `K-18`, `K-52`, `K-17`, `K-12`** | **Untouched and CONFIRMED. The singular reading corrected by `A-54` is `K-48`'s, not `K-18`'s** |
| **AD-01S `PO-S2`'s chain** | **CHECKED AND NOT AMENDED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S2` reads *"… resolved Inquiry attribution → **booking/commercial conditions** → commission eligibility → approval/payout."* The allocation lands inside *"booking/commercial conditions"* without the chain changing. And it is the OWNER's chain in any case** |
| **⟦SOURCE⟧ §11, §32** | **NOT AMENDED and CANNOT BE by this document.** ⟦ARCHITECT ANALYSIS⟧ **`PF-104` reports that §32 is silent on splitting. Whether the spec text should be updated is a §88 matter for the owner and is NOT proposed here** |

### 7.3 No prior document was silently edited

> ⟦ARCHITECT ANALYSIS⟧ **Stated as a checked fact rather than as an intention, on AD-01Q's, AD-01R's and
> AD-01T's precedent.** **Files `00-*.md` through `03t-*.md` are byte-for-byte as they were before this
> document was written. Every amendment above is NAMED AND NOT MADE. Every quotation above is a quotation and
> not a rewrite.** **In particular AD-01J and AD-01K are NOT edited, notwithstanding that `A-54` targets a
> sentence in AD-01K and that Investigation 1 was run against `C-IV` in AD-01J.**

### 7.4 The register after this document

| | Count |
|---|---|
| **Amendments NAMED AND NOT MADE** | **57** — `A-1 … A-57`, across thirteen documents |
| **Of which CONTENT-RATIFIED by the owner but still not made** | **THREE** — `A-32` (AD-01R), `A-39` (AD-01S), `A-38`(b) (AD-01T). **None added here** |
| **Constraints** | **`C-I … C-XXI`** — `C-XXI` minted here |
| **Contradictions** | **`X-1 … X-26`** — `X-26` minted here |
| **Open questions** | **`AC-1 … AC-35`** — `AC-34` and `AC-35` minted here; **`AC-15`'s content limb, `AC-4` and `AC-14` CLOSED**; `AC-1` and `N-4` NARROWED-NOT-CLOSED |
| **Findings in the shared series** | **`PF-1 … PF-118`** |

---

## 8. Remaining open items

### 8.1 The two new questions, `AC-34` and `AC-35`

> ⟦BUSINESS DECISION REQUIRED — `AC-34`⟧
>
> **When the Site Head enters an allocation, what must be true of it, and what happens when it does not
> resolve cleanly?** **Specifically: must entered percentages sum to exactly 100, and if they do not, is the
> entry refused or is a residual treated somehow? May an amount-based allocation exceed, fall short of, or
> be required to equal the commission `M-9` computes? Is rounding permitted, and in whose favour? And may an
> allocation be entered for a claim that subsequently fails `NF-28`, and what becomes of that share?**
>
> **Basis:** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1·8`, `PO-U1·9`, `PO-U2`'s *"preserve the exact allocation
> decided"*** · ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28`, `C-XXI`(4)** · ⟦SETTLED⟧ **`M-9`** · ⟦SOURCE⟧ **§88**
> MUST-ASK: **financial rules**, **CP commission logic**.
>
> ⟦ARCHITECT ANALYSIS⟧ **NO ANSWER IS PROPOSED, PREFERRED, RANKED OR IMPLIED, AND NO RULE, DEFAULT,
> TOLERANCE, ROUNDING CONVENTION, MINIMUM SHARE OR RESIDUAL TREATMENT IS INVENTED. This is money behaviour
> and it is `M-9`'s and the owner's.** **It is minted rather than absorbed into `AC-15` because `AC-15`
> asked for a RULE FOR DECIDING and this asks about the FORM OF AN ANSWER already decided.**

> ⟦BUSINESS DECISION REQUIRED — `AC-35`⟧
>
> **Does the pre-booking §11 attribution/clash resolution — `PO-T1·4`, `PO-T1·7` and the first conjunct of
> `PO-T1·9`, ratified at AD-01T — still occur? Or has the Site Head's post-booking commission-allocation
> decision absorbed it, so that before a booking the system only DETECTS and RECORDS competing claims and
> nobody resolves anything?**
>
> **Basis:** ⟦PRODUCT-OWNER DECISION⟧ **`PO-T1·4`/`·7`/`·9` against `PO-U1·1`/`·2` and `PO-U2·A`** ·
> ⟦ARCHITECT RECOMMENDATION⟧ **`C-IV`, `P-G` steps 4–7, `C-XX`** · ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2·c`'s
> ordering** · ⟦SOURCE⟧ **§11**, **§88** MUST-ASK: **authorization rules**, **source-of-truth rules**.
>
> ⟦ARCHITECT ANALYSIS⟧ **NO ANSWER IS PROPOSED, PREFERRED OR IMPLIED — and this document's own conclusion at
> [§2.1.6](#216-the-conclusion-and-it-is-a-real-one) is NOT to be read as one.** **That conclusion states
> which reading the SOURCES best support and what follows if it holds; `AC-35` asks the owner which reading
> they MEANT, which is a different question and is theirs alone.** **What hangs on it is named and not
> hidden: `PO-T1·9`'s wording, `P-G`'s steps 4–7, `C-XX`'s decision, `Q-OV`'s residual territory, and what
> CP conversion reporting shows for a contested Inquiry that never converts.**

**Why neither is a duplicate.**

| | Its subject | Why it is not an existing item |
|---|---|---|
| **`AC-34`** | **The FORM of one allocation** | **`AC-15` asked for a decision RULE and is closed. `AC-12` is about the eligibility exception's direction. `M-9` is a model, not a question. Nothing in the register asks this** |
| **`AC-35`** | **Whether a ratified STEP still occurs** | **`AC-25` asks who mints a claim and whether an unopposed one is adjudicated — both INSIDE a pipeline whose existence it assumes. `AC-29` asks a timing bound on the override. `AC-15` is closed. No existing item asks whether a step happens at all** |

### 8.2 The rest, carried forward

**An INDEX onto [§5.8](#58-which-open-items-this-decision-actually-reaches), which is the authority.**

| Effect | Items |
|---|---|
| **CLOSED BY DIRECT PRODUCT-OWNER RULING** | **`AC-15`'s CONTENT LIMB** — there is no rule; it is Site Head commercial discretion, over a non-binary outcome space. **The FOURTH such closure in the series, after `AC-14`, `C-XVI` and `P-G`** |
| **NEW** | **`C-XXI`** (the allocation-decision clause) · **`X-26`** (`PO-P10`/AD-01P §3.13 incomplete a second time) · **`AC-34`** (residual/rounding) · **`AC-35`** (does the pre-booking resolution still occur) |
| **CONFIRMED** | **`K-18`** — an EIGHTH consecutive document · **`C-IV`**, **`K-9`/`K-10`**, **`K-17`**/§D.4, **`K-52`**, **`C-XVI`** (owner's SIXTH statement), **`NF-28`**'s three conjuncts, **`NF-24`**'s per-claim subject, **`PO-Q1`**/**`Q-OV`**'s distinct role |
| **ENLARGED IN POPULATION, NOT ANSWERED** | **`AC-13`** (a fourth act) · **`AC-27`** and **`AC-33`** (four Site-Head-shaped acts) · **`AC-28`** (a three-way asymmetry, one leg now owner-fixed) |
| **PRIORITY RAISED, NOT DISCHARGED** | **`X-25`**/**`A-37`** — a second consecutive rise; the new `Q-AR` links are backed by neither substrate |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE ON WHAT THEY ASK** | **`AC-20`** · **`AC-25`** (both halves; one adjacency recorded) · **`AC-12`** · **`AC-6`** (no fourth consumer; AD-01T's discrepancy notice carried forward unchanged) · **`AC-22`**, **`AC-24`**, **`AC-26`**, **`AC-29`**, **`AC-30`**, **`AC-31`**, **`AC-32`**, **`AA-2`**, **`AC-5`**, **`AC-7`**, **`AC-8`**, **`AB-1`**, **`AB-3`** |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`, `AC-2`, `AC-3`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-16`, `AC-17`, `AC-18`, `AC-19`, `AC-21`, `AC-23`** · **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`N-4`** · **`Q10`**, **`Q11`** (still BLOCKING) · **`V-4`** (twelfth document), **`W-1`**, **`Y-1`, `Y-3`, `Y-4`, `Y-5`**, **`Z-2`, `Z-5`**, **`M-5`**'s uniqueness half · **`L-13`**, **`MF-9`**, **`X-13`** as findings · **`X-24`**/**`A-38`(a)** |
| **STILL CLOSED / DISCHARGED, NOT REOPENED** | **`AC-4`** (AD-01P) · **`AC-14`** and **`Q0-c`** (AD-01R) · **`C-XVI`** (RATIFIED at AD-01S) · **`P-G`** (RATIFIED at AD-01T) · **`X-5`** (DISCHARGED at AD-01R) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-57`**. **`Q0-d` stays OFF the critical path** |
| **STILL CANNOT START** | **`M-9`** — with one new input named and nothing about its content proposed |

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§6](#6-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being asked
to record a Product-Owner clarification is not permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**:
CP commission logic, financial rules, authorization rules, source-of-truth rules and audit requirements are
**MUST ASK BEFORE DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT
AUTHORIZATION.** ⟦SOURCE⟧ Consolidated **§30**: *"No schema/code implementation should be inferred from an
unresolved product ambiguity."*

**THE DECISION, STATED ONCE MORE BECAUSE IT IS THE POINT OF THE DOCUMENT.** ⟦PRODUCT-OWNER DECISION⟧ **A
booking succeeds. If there is a CP clash, it is surfaced to the Site Head. The Site Head reviews the
available information, may speak directly to the Channel Partners, and personally makes the commercial
decision about how the commission is allocated. BMexa does not calculate a winner, does not use an evidence
score, and does not require evidence documents to be uploaded for the decision. The allocation may be
100/0, 0/100, or any discretionary split, entered as a percentage or as an explicit amount per CP, and the
system records the decision and the exact allocation.** **It is recorded verbatim at
[§1.2](#12-the-decision-recorded-verbatim-before-any-analysis) as `PO-U1·1 … PO-U1·12`, `PO-U2` and `PO-U3`,
before any analysis touched it, and it is NOT re-argued, weighed, ranked, hedged or softened anywhere
above.**

**THE FIRST HEADLINE FINDING, STATED PLAINLY BECAUSE THE TASK OF THIS DOCUMENT WAS TO SAY IT WITHOUT
SOFTENING.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U2·B` IS A GENUINELY DIFFERENT, LATER DECISION — NOT `P-G` STEP 5
RELOCATED. `C-IV` IS NOT CONTRADICTED; ITS BOUND IS THE §32 MILESTONE AND NOT THE BOOKING. `K-18` IS NOT
CONTRADICTED; IT IS AN ANCHOR RULE AND CONTAINS NO CARDINALITY. THE SINGLE-ANSWER-BEARER READING LIVES IN
`K-48`'S DEFINITE ARTICLE AND IN TWO GLOSSES THAT REPEAT IT — AND `NF-28`, THE NEWEST STATEMENT OF THE SAME
RULE, ALREADY READS *"THE INQUIRY'S CLAIM SET."*** **THIS IS A COMPATIBLE REFINEMENT AT A POINT THE
ARCHITECTURE HAD NEVER OCCUPIED — PLUS ONE PHRASE-LEVEL AMENDMENT (`A-54`) AND ONE RESIDUAL THAT ONLY THE
OWNER CAN CLOSE (`AC-35`).** **AND: THE ARCHITECTURE NEVER CONTAINED AN EVIDENCE SCORE, A RANKING MODEL, A
PRECEDENCE FORMULA OR AN EVIDENCE-UPLOAD REQUIREMENT — §11 RESERVES THE JUDGEMENT TO LEADERSHIP AND STATES
NO BASIS, `K-52` REFUSED TO DESIGN A PROCEDURE, AND `C-IX` FORBADE THE ARCHITECT SUPPLYING ONE. ITEMS 5–7
CONTRADICT NOTHING; THEY FILL A BOX THE ARCHITECTURE DELIBERATELY LEFT EMPTY.**

**THE SECOND HEADLINE FINDING.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U2·B` AND `Q-OV` ARE DISTINCT, AND NEITHER
SUBSUMES THE OTHER. `PO-U2·B` IS BOOKING-BOUND AND `Q-OV`'S TARGET IS NOT — AD-01Q'S OWN NECESSITY TEST
DEFEATS THE MERGE FOR THE EXACT REASON IT DEFEATED CANDIDATE (a). AND `PO-Q1·b` MAKES EVIDENCE MANDATORY FOR
`Q-OV` WHERE `PO-U1·7` MAKES IT UNNECESSARY FOR THE ALLOCATION, WHICH IS TWO OWNER CLAUSES POINTING OPPOSITE
WAYS ON ONE AXIS. `Q-OV` RETAINS THREE NAMED CONFIGURATIONS `PO-U2·B` CANNOT REACH, INCLUDING THE
SINGLE-CLAIMANT CASE.**

**AND THE ONE THAT MUST NOT BE BURIED.** ⟦ARCHITECT ANALYSIS⟧ **SPLITTING A CP COMMISSION APPEARS NOWHERE IN
THE MASTER SPEC. §32, §33, §34 AND §40 ARE SINGULAR THROUGHOUT, AND THE ONLY *ALLOCATION* VOCABULARY IN THE
SPEC IS CUSTOMER-SIDE RECEIPT ALLOCATION, WHICH IS A DIFFERENT THING AND IS NOT REUSED HERE. `PO-U1·8`/`·9`
ARE NOT AN UNDER-SPECIFIED CORNER OF AN EXISTING CAPABILITY; THEY ARE A CAPABILITY THE SPEC DOES NOT HAVE,
AND THE OWNER HAS ADDED IT.**
