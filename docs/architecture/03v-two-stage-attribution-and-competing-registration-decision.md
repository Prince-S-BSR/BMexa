STATUS: PROPOSED — NOT APPROVED

# AD-01V — The TWO-STAGE MODEL LOCKED: pre-booking CP attribution and post-booking commission allocation held apart as separate mechanisms, competing CP registrations RATIFIED with a NON-DISCLOSURE requirement, and the full Product-Owner question ledger AUDITED across AD-01A … AD-01U

**What this document is.** The Project Owner has answered the **one question AD-01U posed back to them** at
its [§6.2](./03u-site-head-commission-allocation-and-clash-model-decision.md) — `AC-35`, *"does the
pre-booking §11 attribution resolution still happen, or has the post-booking Site Head allocation absorbed
it?"* — and the answer is **(a): both still happen.** The owner has **also** supplied a second decision,
unprompted by AD-01U's question, that answers a register item AD-01O minted eight documents ago and that
AD-01T left expressly open: **`AC-20` — may CP B register the same Client × Project while CP A's
registration is still live? YES, with a NON-DISCLOSURE requirement attached.** Both are **authoritative
business input.** Neither is **re-argued, weighed against an alternative, ranked, hedged or softened
anywhere below.**

**Why this document leads with a ledger audit rather than with the reconciliation.** The Project Owner has
expressly required, in their own framing, that this document **must not lose previously unanswered questions
while processing the newest one.** That requirement is discharged at [§0](#0-part-0--the-product-owner-question-ledger-audit),
**before any reconciliation content**, and it is a real section of the document rather than a checklist
appended to one. **Its single most important output is the separation of items closed by an EXPLICIT
Product-Owner decision from items closed only by an architect's derivation** — because thirteen documents of
accumulated reasoning make the second kind look like the first, and
[§0.8](#08-the-ledgers-headline-results) reports two places where they had begun to blur.

**What this document does, beyond the audit.** It records both decisions verbatim as `PO-V1` and `PO-V2`;
builds the owner's **two-axis model** and maps it onto AD-01U's own `A`/`A′`/`B`/`C` taxonomy so the two
documents' vocabularies are shown to **compose rather than compete**; re-runs AD-01U's compatibility checks
against a **confirmed** two-stage model rather than against an inference from silence; reconciles the
competing-registration ruling against `O-U`; determines precisely how much of `AC-13` the non-disclosure
requirement closes; re-runs the `Q-OV`-versus-allocation distinction and produces a **precise stage
mapping**; checks the commission-allocation data model; and walks the owner's restated audit chain end to
end. **Every amendment it finds necessary is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **[§11](#11-recommendation)'s recommendation is advisory.** Nothing below
is self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE`; AD-01O remains advisory;
AD-01P, AD-01Q, AD-01R, AD-01S, AD-01T and AD-01U all remain at `VALIDATE` and none is approved.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · AD-01P ·
AD-01Q · AD-01R · AD-01S · AD-01T · **AD-01U**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the two decisions recorded here in their entirety, AD-01U's `PO-U1 … PO-U3`, AD-01T's `PO-T1 … PO-T3`, AD-01S's `PO-S1`/`PO-S2`, AD-01R's `PO-R1`/`PO-R2`, AD-01Q's `PO-Q1`/`PO-Q2`, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including these two decisions — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**High-water marks were VERIFIED against AD-01U's own text before anything was minted, not taken on trust,
and not taken from AD-01U's close reason either.** **AD-01U closed at `PF-118`, `A-57`, `AC-35`, `C-XXI` and
`X-26`.** **All five were re-derived from the file itself by exhaustive scan of every identifier occurrence,
and all five check out.**

**Findings continue AD-01P's, AD-01Q's, AD-01R's, AD-01S's, AD-01T's and AD-01U's shared series as
`PF-119 … PF-141`.** ⟦ARCHITECT ANALYSIS⟧ **No `VF-` series is minted, for the reason AD-01Q gave for
declining `QF-`, AD-01R for declining `RF-`, AD-01S for declining `SF-`, AD-01T for declining `TF-` and
AD-01U for declining `UF-`.**

**ONE new constraint IS minted, as `C-XXII`, and the `C` series moves to `C-XXII`.** ⟦ARCHITECT ANALYSIS⟧
**One, not two, and the count is reported rather than fitted. A SECOND candidate was considered — a clause
carrying Stage 1's independence from commission — and is shown being RULED OUT at
[§4.4](#44-c-xxii-minted-and-stated-in-full), because the owner's own `PO-T1·4`/`·7`, `PO-S1·9` and now
`PO-V1` Stage 1 already carry it at owner status and `C-XXI`(3) already forbids the collapse from the other
side.** `C-XXII` carries the **non-disclosure requirement**, which no numbered clause in the series holds and
which ⟦SOURCE⟧ §11 and §39 state only in generic terms — [§4.4](#44-c-xxii-minted-and-stated-in-full).

**ONE new contradiction IS minted, as `X-27`, and the `X` series moves to `X-27`.** ⟦ARCHITECT ANALYSIS⟧
**It is the THIRD instance of ONE defect — an enumeration that omits a level the architecture has — after
`X-24` (AD-01Q) and `X-26` (AD-01U). It is minted separately rather than folded into either, because the
list it falsifies is a DIFFERENT list and the claim it falsifies is a DIFFERENT claim** —
[§8.2](#82-the-contradiction-search-run-in-full).

**ONE new open item IS minted, as `AC-36`, and the `AC` series moves to `AC-36`.** ⟦ARCHITECT ANALYSIS⟧
**ONE, and it is a CHECKED RESULT rather than an artefact of momentum. It is a question that ONLY the
two-stage model's confirmation makes visible, that no existing register item asks, and that
[§11.2](#112-the-one-next-question) finds to be HIGHER PRIORITY than `AC-34` — which is not the outcome
this document expected when it began, and the reasoning is shown rather than asserted.**

**TWO register items are CLOSED BY DIRECT PRODUCT-OWNER RULING — `AC-35` and `AC-20` — and they are the
FIFTH and SIXTH such closures in the series**, after `AC-14` (AD-01R), `C-XVI` (AD-01S), `P-G` (AD-01T) and
`AC-15`'s content limb (AD-01U). **ONE NAMED SUB-LIMB of `AC-13` is also closed, and `AC-13` itself is NOT**
— [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not).

**Amendments that are logically required but deliberately NOT made continue as `A-58 … A-61`**
(`A-1 … A-57` remain named and not made). ⟦ARCHITECT ANALYSIS⟧ **FOUR. Three of the four exist because an
item the register carried as OPEN is now CLOSED and the documents that carried it as open say so in their
own text; the fourth is `X-27`'s.** **NONE targets a Product-Owner clause** —
[§9.1](#91-amendments-to-product-owner-decisions-none-are-proposed).

> ⟦ARCHITECT ANALYSIS⟧ **One collision warning, stated once and then relied upon.**
>
> **`PO-V1` and `PO-V2` are this document's labels for the owner's two decisions, and the `PO-` prefix is
> load-bearing and is never dropped.** **`PO-V1·S1` and `PO-V1·S2` are the two stages; `PO-V1·X` is the
> non-merger instruction attached to them. `PO-V2·a … PO-V2·e` are the competing-registration clauses.**
> **The numbering is the architect's; the content is the owner's.** **No bare `V-n` identifier is used
> anywhere for these.** ⟦SETTLED⟧ **AD-01F's and AD-01G's `V-1 … V-12` are a pre-existing series and are
> untouched, unreferenced as owner clauses, and not reopened — `V-7` in particular is CITED below as the
> pre-existing mechanism it is, and is NOT reopened.**

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step, queue, notification or gate is designed (AD-01A **§8.5**). **No commission formula, rate,
slab, percentage VALUE, amount, milestone value, clawback quantum, passback rule or TDS treatment appears
anywhere — `M-9` owns all of it. No lock-in number is proposed. No boundary convention is selected —
`AC-6` is NOT resolved here.**

**NO EVIDENCE-SCORING MODEL, EVIDENCE-RANKING MODEL, AUTOMATIC PRECEDENCE FORMULA OR MANDATORY
EVIDENCE-UPLOAD WORKFLOW IS INVENTED, PROPOSED, RANKED, HINTED AT OR IMPLIED ANYWHERE.** ⟦PRODUCT-OWNER
DECISION⟧ **AD-01U's `PO-U3·a` forbids each by name and is unchanged. `PO-V2` restates the same discipline
for registrations — *"Registration has no special weight."***

**NO ROUNDING RULE, RESIDUAL-ALLOCATION RULE, SUM-TO-100 RULE, MINIMUM-SHARE RULE OR TIEBREAK IS INVENTED,
PROPOSED OR IMPLIED — `AC-34` is AD-01U's, is CARRIED FORWARD UNANSWERED, and is NOT answered here.**

**NO PRECEDENCE RULE BETWEEN TWO CPs, AND NO ORDERING, PRIORITY OR SENIORITY BETWEEN TWO REGISTRATIONS, IS
INVENTED, PROPOSED, RANKED OR IMPLIED.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2` states in its own words that
*"Registration itself does not determine the winner"* and *"Registration has no special weight"* — which is
`C-XVI` and `PO-S1` restated over the cross-CP case.**

**NO PORTAL SURFACE, SCREEN, FIELD, PROJECTION, DISCLOSURE LIST OR MESSAGE TEXT IS DESIGNED, PROPOSED OR
IMPLIED ANYWHERE, INCLUDING INSIDE `C-XXII`.** ⟦SETTLED⟧ **`V-7`'s fail-closed projection is the pre-existing
MECHANISM and is not reopened; what a CP may otherwise see remains `AC-13`'s and is not filled here.**

**NO LITERAL ROLE-NAME BRANCH, ENUM, ROLE KEY, PERMISSION KEY OR ROLE HIERARCHY IS INVENTED, PROPOSED OR
IMPLIED ANYWHERE.** ⟦SOURCE⟧ **R2**: *"Application logic never branches on a role name."*

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's `K-26`,
`K-52` and `T-5`, and AD-01L's `L-6` and `K-22` are NOT reopened.** **`Q-OV` and `Q-AR` are adopted as
AD-01Q recommends them and as AD-01U's `A-55` would amend `Q-AR`; `Q-OV` is NOT narrowed and NOT widened.**
**`PO-R1`, `PO-S1`, `PO-T1 … PO-T3` and `PO-U1 … PO-U3` are LOCKED and none is reopened, qualified or
conditioned by anything below.**

---

## 0. PART 0 — the Product-Owner question ledger audit

> ⟦ARCHITECT ANALYSIS⟧ **`PF-119` — this section exists because the Project Owner asked for it in terms,
> and it is placed first because a reconciliation written before the audit would be a reconciliation written
> against a register nobody had checked.**

### 0.1 What this audit is, and what would make it worthless

**The owner's instruction, in substance:** *do not lose previously unanswered questions while processing the
newest one.* **Three failure modes are what that instruction guards against, and each is named here so the
audit can be checked against them rather than trusted.**

| # | Failure mode | How this audit avoids it |
|---|---|---|
| **1** | **An item drifts from OPEN to CLOSED because a neighbouring item closed** | **Every `AC-` item below is listed INDIVIDUALLY with the document and clause that closed it, or with the word OPEN. An item with no citation is not closed** |
| **2** | **An ARCHITECT derivation is later read as a PRODUCT-OWNER decision** | ⟦ARCHITECT ANALYSIS⟧ **Every row below carries a PROVENANCE column with exactly two legal values — a `PO-` clause in a named document, or an `⟦ARCHITECT …⟧` label in a named document. This is the audit's most important column and [§0.8](#08-the-ledgers-headline-results) reports where the two had begun to blur** |
| **3** | **An item is marked closed because something SOUNDING like it was answered** | **`AC-26` and `AC-6` are the owner's two named instances of exactly this, and each gets its own worked subsection at [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6) rather than a register row** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-120` — the method, stated so the result is checkable.** **Every `AC-`, `X-`,
> `C-`, `PF-`, `A-` and `PO-` identifier was extracted from the twenty-five files in
> `docs/architecture/` by exhaustive scan, then each named item below was read AT THE DOCUMENT WHERE IT WAS
> MINTED — not at the document that most recently mentioned it, and not at any prior document's summary of
> it.** **Where the minting text and a later restatement differ, the MINTING TEXT governs and the divergence
> is reported.**

### 0.2 The eleven named verifications, each answered individually

> ⟦ARCHITECT ANALYSIS⟧ **`PF-121` — these are the eleven the owner listed by name. Each is answered with an
> exact citation, and NONE is summarised away. Three of the eleven produced a result that differs from what
> a reader of the recent documents would have expected, and those three are marked ⚠.**

| # | Item the owner named | Status as of AD-01U | PROVENANCE — the exact clause and document |
|---|---|---|---|
| **1** | **`AC-14`** — does a registration whose Inquiry closed on the INVALID side retain its protection window | **CLOSED. LOCKED as Option A** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01R `PO-R1`, seven clauses `PO-R1·a … PO-R1·g`.** `PO-R1·a` verbatim: *"A currently-valid CP Project Registration remains valid and usable for its full registration window even if an earlier Inquiry associated with that registration was subsequently closed on the INVALID side."* `PO-R1·b`: *"does NOT consume the registration. It does NOT invalidate the registration."* **PLUS `PO-R2`, the recorded anti-abuse tradeoff.** **CONFIRMED STILL CLOSED at AD-01S, AD-01T and AD-01U §5.8. NOT reopened here** |
| **2** | **`C-XVI`** — a registration-grounded claim carries NO SPECIAL WEIGHT | **CLOSED. LOCKED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01S `PO-S1`, ten clauses `PO-S1·1 … PO-S1·10`**, headed verbatim: *"A registration-backed CP attribution claim receives no special commercial priority merely because it is backed by a valid CP Project Registration."* **PLUS `PO-S2`, the preserved chain.** **RESTATED by `PO-T1·5` and `PO-T3` bullet 4, and again by AD-01U `PO-U3·b`/`PO-U3·c` — the owner's SIXTH statement. `PO-V2` makes it the SEVENTH** — [§1.2](#12-the-decisions-recorded-verbatim-before-any-analysis) |
| **3** | **The full `P-G` sequence** — order, actors, authorities | **RATIFIED IN FULL** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01T `PO-T1`, ten steps `PO-T1·1 … PO-T1·10`, plus the owner's own confirmation line verbatim — *"YES — that is the correct order."*** **AD-01T §1.3 records the ratification in its own line.** ⚠ **One qualification the audit must carry: AD-01U §5.3 found `P-G` INCOMPLETE — a new act sits inside `PO-T1·9`'s two conjuncts and no step describes it (`A-57`). A ratified sequence that turns out to be incomplete is still ratified in what it says, and `A-57` is NAMED AND NOT MADE** |
| **4** | **Ordinary CP clash decision authority** — who decides | **NAMED BY THE OWNER. The CLAUSE carrying it is UNRATIFIED** | ⚠ ⟦PRODUCT-OWNER DECISION⟧ **AD-01T `PO-T2` verbatim: *"for a competing CP attribution/clash, the decision-maker at step 7 is the previously established Site Head / Project Head, according to the existing authority model. Do NOT replace this with an undefined generic 'leadership' role."* PLUS `PO-T3` bullet 1.** ⟦ARCHITECT RECOMMENDATION⟧ **BUT `C-XX` — the clause that expresses `PO-T2` as a PERMISSION rather than a role-name test — is AD-01T's OWN, is an ARCHITECT RECOMMENDATION, and is UNRATIFIED at gate 3.** **The WHO is the owner's; the FORM is not** — [§0.8](#08-the-ledgers-headline-results) |
| **5** | **Pre-booking CP attribution EXISTS, independently of commission** | ⚠ **NOT PREVIOUSLY LOCKED BY AN EXPLICIT OWNER STATEMENT. LOCKED HERE FOR THE FIRST TIME** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V1·S1`.** **See [§0.3](#03-verification-5-worked-in-full--what-was-and-was-not-previously-said-about-stage-1) — worked in full, because the owner expressly asked whether an EARLIER document assumed it implicitly without confirmation** |
| **6** | **Post-booking commission allocation is a SEPARATE mechanism** | **LOCKED HERE. Building on an owner clause already given** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V1·S2` and `PO-V1·X`, building on AD-01U `PO-U2·B` verbatim — *"Site Head commercial commission-allocation decision — after booking success, Site Head decides how the commission is allocated among the competing CPs"* — and on `PO-U1·1 … PO-U1·12`.** ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`, the clause carrying it, is AD-01U's and is UNRATIFIED at gate 3** |
| **7** | **CP B may register the same Client × Project while CP A's registration is LIVE** | **CLOSED HERE. This is `AC-20`, OPEN since AD-01O** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V2·a`.** **`AC-20`'s minting text, AD-01O §5, verbatim: *"May a registration be CREATED for one CP while a DIFFERENT CP holds a live registration over the same client and Project — or must it be blocked at the door?"* The owner answers: it may.** **Whether this is NEW INFORMATION or a NEGATION-IMPLIED consequence of `O-U` is worked at [§4.1](#41-did-o-u-need-changing-worked-rather-than-assumed)** |
| **8** | **The non-disclosure requirement** — CP A's registration must NOT be disclosed to CP B | ⚠ **GENUINELY NEW. It answers ONE NAMED SUB-LIMB of `AC-13` and closes NOTHING ELSE** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V2·c`.** **Checked against `AC-13`'s exact prior content at [§4.3](#43-the-non-disclosure-requirement-as-its-own-architectural-finding) and [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not). It is NOT a restatement: AD-01O enlarged `AC-13` with this exact question and left it OPEN** |
| **9** | **The Site Head allocation may name MORE THAN ONE CP** | **LOCKED at AD-01U** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01U `PO-U1·8` verbatim: *"The Site Head can decide: 100/0, 0/100, 50/50, 40/60, 60/40, 30/70, or another permitted allocation."* PLUS `PO-U2`'s attached clause: *"one CP receiving 100%, another receiving 100%, or a discretionary split between multiple CPs."*** ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`'s answer limb — *"an ALLOCATION naming ONE OR MORE CPs"* — is the architect's FORM, unratified.** **RESTATED by `PO-V1·S2` here** |
| **10** | **Allocation may be PERCENTAGE or AMOUNT** | **LOCKED at AD-01U** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01U `PO-U1·9` verbatim: *"The Site Head may enter the allocation as percentage OR explicit commission amount per CP."* PLUS `PO-U2`: *"The allocation must be representable as either percentage-based or amount-based."*** ⟦ARCHITECT RECOMMENDATION⟧ **AD-01U §5.6's *"two bases for one allocation, not two concepts"* and its basis-as-entered retention rule are the ARCHITECT's and are UNRATIFIED** |
| **11** | **Site Head does NOT require evidence documents to be uploaded** | **LOCKED at AD-01U** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01U `PO-U1·7` verbatim: *"BMexa does NOT require evidence documents to be uploaded for the Site Head's decision."* AND `PO-U1·11`: *"The underlying evidence/reasoning may exist outside BMexa or be discussed directly between Site Head and CPs; BMexa does not require an uploaded evidence package merely to permit the decision."*** **RESTATED by `PO-V1·S2`'s closing line here.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U `PF-102` established this CONTRADICTS NOTHING — the architecture never had an evidence requirement for this decision to remove** |

### 0.3 Verification 5, worked in full — what was, and was NOT, previously said about Stage 1

> ⟦ARCHITECT ANALYSIS⟧ **`PF-122` — the owner asked specifically whether an EARLIER document assumed
> pre-booking attribution implicitly without the owner ever confirming it explicitly. The honest answer is
> in three parts, and the third part is the one that matters.**

| # | Proposition | Was it previously stated, and by whom |
|---|---|---|
| **(i)** | **A pre-booking attribution/clash resolution OCCURS** | ⟦PRODUCT-OWNER DECISION⟧ **YES, AT OWNER STATUS, SINCE AD-01T.** **`PO-T1·4`: *"The attribution claim is then evaluated through the normal attribution/clash-resolution process."* `PO-T1·7`: *"The authorised decision-maker resolves the attribution/clash."* `PO-T1·9`'s first conjunct: *"Only after attribution is resolved …"* And `PO-Q2·c` (AD-01Q) orders it *"attribution/clash decision → any Site Head override → Booking."*** **Four owner clauses across two documents. This limb was NOT an architect assumption** |
| **(ii)** | **It occurs BEFORE the booking** | ⟦PRODUCT-OWNER DECISION⟧ **YES, AT OWNER STATUS.** **`PO-Q2·c`'s ordering puts both the decision and the override BEFORE *Booking*; `PO-T1·9` puts resolution before conversion.** ⟦ARCHITECT RECOMMENDATION⟧ **`C-IV` and `J-25` say it too, but they are the architect's and are not the authority for it** |
| **(iii)** | ⚠ **It exists INDEPENDENTLY OF COMMISSION — it can be resolved on an Inquiry that NEVER books, and it has NON-FINANCIAL consumers (ownership, CP performance reporting, conversion reporting, operational visibility, historical attribution)** | ⚠ ⟦ARCHITECT ANALYSIS⟧ **NO. THIS WAS ARCHITECT-ONLY UNTIL NOW, AND THIS DOCUMENT DOES NOT CLAIM OTHERWISE.** **It was carried by: `K-10` (AD-01K) — *"an internal claimant can WIN an attribution contest and generate NO §32 entitlement at all"*; `K-9` — winning and being paid are different outcomes; `J-25` (AD-01J) — *"Most claims never reach a Booking … A claim anchored on a Booking is unrepresentable for the majority of claims"*; AD-01J's conversion-reporting requirement — claims *"grouped by the resolved claim, never by a raw claim"*; and AD-01U `PF-108` configuration 1, which named the same territory for `Q-OV`.** **EVERY ONE OF THOSE IS AN ARCHITECT FINDING OR RECOMMENDATION.** **No `PO-` clause before `PO-V1·S1` states that attribution survives the absence of a booking or names a non-financial purpose for it** |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY AND WITHOUT OVER-CLAIMING IN EITHER DIRECTION.**
>
> > **`PO-V1·S1` IS NOT A RESTATEMENT OF `PO-T1·4`/`·7`/`·9`. Those say the resolution HAPPENS and WHEN.
> > `PO-V1·S1` says WHY IT EXISTS AT ALL AND WHAT IT IS FOR — and that limb was carried, for eleven
> > documents, by architect findings alone.**
> >
> > **This is the strongest available demonstration of why [§0](#0-part-0--the-product-owner-question-ledger-audit)
> > is first: `K-10` had been cited as ⟦SETTLED⟧ in five consecutive documents, and ⟦SETTLED⟧ in this
> > series means *forced by the architecture, or decided earlier and not reopened* — which is TRUE of it and
> > is NOT the same thing as an owner decision. AD-01U's own [§2.1.6] reason 2 rested on `K-9`/`K-10`, and
> > its [§6.2] said so in terms: *"it is an architect's reading of an owner's silence, and this series does
> > not close owner silences."* The owner has now removed the silence, and the reading survives it.**

### 0.4 The `PO-` decision series, document by document

> ⟦ARCHITECT ANALYSIS⟧ **`PF-123` — every `PO-` labelled decision in the series, with its subject and its
> standing. NONE is reopened, qualified or conditioned by anything in this document.**

| Series | Document | Subject | Standing as of this document |
|---|---|---|---|
| **`PO-N1 … PO-N9`** | AD-01N | Registration record, immutability, non-reset, the eligibility test, the Site Head eligibility exception | **IN FORCE. Not restated here, not reached** |
| **`PO-O1 … PO-O14`** | AD-01O | Revisit vs new registration; expiry; immutability; `PO-O13`/`PO-O14`'s non-automaticities | **IN FORCE. `PO-O13`/`PO-O14` RESTATED IN SUBSTANCE by `PO-V2·d`/`PO-V2·e`** |
| **`PO-P1 … PO-P12`** | AD-01P | Registration as attribution BASIS; the non-automaticities; `PO-P10`'s seven levels; the citation requirement | **IN FORCE. `PO-P1` RESTATED by `PO-V2·d`. `PO-P10` UNCHANGED AS A PROHIBITION and INCOMPLETE IN ITS ENUMERATION for the second time (`X-26`), NOT filled here** |
| **`PO-Q1`, `PO-Q2`** | AD-01Q | The Site Head attribution OVERRIDE and its two mandatory inputs; the audit-reconstruction requirement | **IN FORCE. `PO-Q1` NOT replaced, NOT subsumed, NOT narrowed — and now PRECISELY STAGE-MAPPED at [§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages). `PO-Q2·a` remains OWNER-RATIFIED AND NOT YET SATISFIABLE** |
| **`PO-R1`, `PO-R2`** | AD-01R | `AC-14` = Option A; the recorded anti-abuse tradeoff | **IN FORCE, LOCKED, ORTHOGONAL. Nothing here reads a closure or consumes a registration** |
| **`PO-S1`, `PO-S2`** | AD-01S | `C-XVI` = No Special Weight, ten clauses; the preserved chain | **IN FORCE, LOCKED. RESTATED by `PO-V2·d`/`PO-V2·e` — the owner's SEVENTH statement** |
| **`PO-T1 … PO-T3`** | AD-01T | The ten ratified steps; the Site Head / Project Head authority; the four-bullet authority model | **IN FORCE, LOCKED. `PO-T1·4`/`·7`/`·9`'s continued reading — the one thing AD-01U could not settle — is CONFIRMED by `PO-V1·S1`** |
| **`PO-U1 … PO-U3`** | AD-01U | The twelve post-booking steps; the A/B/C taxonomy; the prohibitions and preserved distinctions | **IN FORCE, LOCKED. `PO-U1·2`'s *"if there is a CP clash"* is PRECISIFIED BY THE OWNER at `PO-V1·S2` to a COMMISSION clash** — [§3.4](#34-the-two-merge-arguments-ad-01u-could-not-dissolve). ⚠ **`PO-U3·d`'s eight-term list is INCOMPLETE** → **`X-27`** |
| **`PO-V1`, `PO-V2`** | **THIS DOCUMENT** | The two-stage model; competing CP registrations and non-disclosure | ⟦PRODUCT-OWNER DECISION⟧ **RECORDED VERBATIM at [§1.2](#12-the-decisions-recorded-verbatim-before-any-analysis)** |

### 0.5 The `AC-` register — all thirty-five, classified by PROVENANCE

> ⟦ARCHITECT ANALYSIS⟧ **`PF-124` — the full register. `AC-4`, `AC-14`, `AC-15`'s content limb, `AC-35` and
> `AC-20` are the ONLY items ever CLOSED, and the provenance column says by whom. Everything else is OPEN,
> NARROWED or ENLARGED, and no row is closed without a citation.**

| # | Its question, at the document that MINTED it | Status as of this document | PROVENANCE of its status |
|---|---|---|---|
| **`AC-1`** | Authorization posture of the closing-reason tap once it carries money | **NARROWED-NOT-CLOSED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P `X-6` confirmed twice; arises iff `AC-14` had gone the other way. **NOT reached here** |
| **`AC-2`** | An ex-gratia route without an attribution claim | **OPEN — and ENLARGED HERE** | ⟦ARCHITECT ANALYSIS⟧ AD-01P `PF-13(2)`. ⚠ **ADJACENT TO `AC-36` and NOT the same question** — [§12.1](#121-the-new-question-ac-36) |
| **`AC-3`** | Must a claim name a currently-approved CP relationship | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01P; coupled to `AC-10`. **NOT reached here** |
| **`AC-4`** | Is the lock-in window necessary-only or necessary-and-sufficient | **CLOSED** | ⟦ARCHITECT ANALYSIS⟧ **AD-01P `PF-3` → `X-18`, `A-29`. CLOSED BY ARCHITECT DERIVATION from owner input, NOT by a `PO-` ruling.** **NOT reopened** |
| **`AC-5`** | Which booking fact is the Booking Date | **OPEN. Two consumers** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §F.1; AD-01O `OF-4`. `Q-AR` link 10 gated by it |
| **`AC-6`** | Boundary convention α vs β; is `N = 0` legal | ⚠ **OPEN. BOTH LIMBS. TRIPLY money-bearing. DISCREPANCY NOTICE STANDING** | **WORKED IN FULL at [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6)** |
| **`AC-7`** | Ratify snapshot; should a re-basing act exist | **FIRST HALF answered in substance; SECOND HALF OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-15`, `A-22` — *answered in substance by the owner's own word "snapshot"*, which is a derivation from owner words and is flagged as such |
| **`AC-8`** | Business timezone: tenant-level or project-level | **OPEN. Four operands** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-10`; AD-01O; AD-01P `PF-11` |
| **`AC-9`** / **`T-9`** | Offline registration date: capture or sync | **OPEN, EXISTENCE-BEARING** | ⟦ARCHITECT ANALYSIS⟧ AD-01O; ⟦SOURCE⟧ §12. `Q-AR` links 1 and 3 gated by it |
| **`AC-10`** | What *"successfully registers"* means; §44 unverified capture | **OPEN, GATING** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-5(3)`; AD-01O `OF-17` |
| **`AC-11`** | Does the rule time-bar the ORDINARY never-closed case | **OPEN, NOT RELIEVED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-20`; AD-01O `OF-19` |
| **`AC-12`** | Override directionality and revocation | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §H.2; ENLARGED at AD-01Q; CHECKED and unaffected at AD-01U §5.8 |
| **`AC-13`** | Override scope, self-interest controls, **CP visibility** | ⚠ **OPEN. ONE NAMED SUB-LIMB CLOSED HERE; ENLARGED A FOURTH TIME ELSEWHERE** | **AD-01N `AC-13` minting text; ENLARGED at AD-01O, AD-01Q §3.13, AD-01T, AD-01U.** ⟦PRODUCT-OWNER DECISION⟧ **ONE LIMB CLOSED by `PO-V2·c`** — [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not) |
| **`AC-14`** | Does an invalid-side closure retain the protection window | **CLOSED. LOCKED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01R `PO-R1`. The FIRST direct owner ruling in the series** |
| **`AC-15`** | Two CPs each hold a live registration and the client books — **who wins** | **CONTENT LIMB CLOSED: there is no rule** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01U `PO-U1·5 … ·8`, `PO-U1·12`, `PO-U3·a`. The FOURTH direct owner ruling** |
| **`AC-16`** | Does a cancelled/transferred booking re-run the window test | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §J.1; AD-01O sub-case |
| **`AC-17`** | Project-level only; tenant default; per-CP-tier variation | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-12` |
| **`AC-18`** | Re-registration cadence; minimum gap; cap | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01O |
| **`AC-19`** | Is a Helpdesk lookup an auditable ACCESS event | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-7`; ⟦SOURCE⟧ §45 |
| **`AC-20`** | **May a registration be CREATED for one CP while a DIFFERENT CP holds a live registration over the same client and Project — or must it be blocked at the door?** | ⚠ **CLOSED HERE. IT MAY BE CREATED** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V2·a`/`PO-V2·b`. The SIXTH direct owner ruling** — [§4.2](#42-ac-20-closed--and-what-that-closure-does-and-does-not-carry) |
| **`AC-21`** | Is the registration's CLIENT subject the PERSON or the work record | **OPEN. BLOCKING `Q-AR` link 1** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-5(4)`; with `Q10`/`M-5`'s uniqueness half |
| **`AC-22`** | Which registration governs `NF-28` conjunct (iii) | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01P; CHECKED at AD-01U §5.8 |
| **`AC-23`** | with **`Q11`** — **STILL BLOCKING** | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01P |
| **`AC-24`** | Which date the minting gate evaluates at | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01P |
| **`AC-25`** | Automatic mint vs discretionary act; is an UNOPPOSED claim adjudicated like a contested one | **OPEN, BOTH HALVES** | ⟦ARCHITECT ANALYSIS⟧ AD-01P; second half NARROWED at AD-01Q. **`PO-S1·9` bears on the second half at owner status and does not close it** |
| **`AC-26`** | **Is a registration's grounding power SINGLE-USE or REPEATABLE?** | ⚠ **OPEN. NOT ANSWERED. NOT NARROWED** | **WORKED IN FULL at [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6)** |
| **`AC-27`** | May one individual perform both OVERRIDES on one commercial outcome | **OPEN, ENLARGED IN POPULATION** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; enlarged to four Site-Head-shaped acts at AD-01U |
| **`AC-28`** | The evidence asymmetry between the ordinary decision, the override and the allocation | **OPEN. THREE-WAY, one leg owner-fixed** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; sharpened at AD-01T and AD-01U. **The owner-fixed leg is `PO-U1·7`/`·11`** |
| **`AC-29`** | Until when may an override be performed | **OPEN — and SHARPER HERE** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q. ⚠ **[§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages) makes its question sharper and supplies NO answer** |
| **`AC-30`** | What an override's decision may SAY | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; one hazard named at AD-01U §5.8 |
| **`AC-31`** | Who the auditor is, and for how long the chain must remain reconstructable | **OPEN** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; ⟦SOURCE⟧ R1, R6, R12, §11 |
| **`AC-32`** | Should any SEPARATE anti-abuse control exist | **OPEN, OFF the critical path** | ⟦ARCHITECT ANALYSIS⟧ AD-01R `PF-64`; CHECKED at AD-01U |
| **`AC-33`** | May the step-7 decision-maker override their OWN decision; should one role ship holding both | **OPEN. SECOND LIMB ENLARGED to a third permission** | ⟦ARCHITECT ANALYSIS⟧ AD-01T §5.1; enlarged at AD-01U §4.2 |
| **`AC-34`** | Rounding / residual / sum-to-100 / minimum share / allocation on a claim that fails `NF-28` | **OPEN** | ⟦BUSINESS DECISION REQUIRED⟧ AD-01U §8.1. **NOT answered here** |
| **`AC-35`** | **Does the pre-booking §11 attribution resolution still occur?** | ⚠ **CLOSED HERE. IT DOES. OPTION (a)** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-V1·S1`. The FIFTH direct owner ruling** |
| **`AC-36`** | **MINTED HERE** — may a CP whose claim LOST Stage 1 be allocated a share at Stage 2 | **OPEN** | ⟦BUSINESS DECISION REQUIRED⟧ [§12.1](#121-the-new-question-ac-36) |

### 0.6 The `C-` series and the `X-` series

> ⟦ARCHITECT ANALYSIS⟧ **`PF-125` — the constraints, because a reader auditing *"what is decided"* will
> otherwise read a `C-` number as settled. ONE of the twenty-two is at owner status. That ratio is the
> single most important number in this audit.**

| Group | Items | Standing |
|---|---|---|
| ⚠ **RATIFIED BY THE OWNER** | **`C-XVI`** ONLY | ⟦PRODUCT-OWNER DECISION⟧ **AD-01S `PO-S1`. ONE of twenty-two** |
| **ARCHITECT RECOMMENDATIONS, UNRATIFIED** | **`C-I … C-XV`, `C-XVII`, `C-XVIII`, `C-XIX`, `C-XX`, `C-XXI`** — and **`C-XXII`** minted here | ⟦ARCHITECT RECOMMENDATION⟧ **ALL UNRATIFIED. `C-XV` is gate 2's head; `C-XVII … C-XXII` are gate 3's** |
| **Contradictions `X-1 … X-26`** | Of which **`X-5`** DISCHARGED BY OWNER DECISION at AD-01R; **`X-24`**, **`X-25`**, **`X-26`** standing | ⟦ARCHITECT ANALYSIS⟧ **`X-25`/`A-37` — the `NF-27` substrate gap on `Q-AR` link 8 — has had its priority RAISED in two consecutive documents and is raised a THIRD time here** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **`X-27`** | **MINTED HERE** | [§8.2](#82-the-contradiction-search-run-in-full) |

### 0.7 The two items the owner singled out: `AC-26` and `AC-6`

> ⟦ARCHITECT ANALYSIS⟧ **`PF-126` — the owner warned, by name, that these two must not be marked closed
> unless their ACTUAL underlying questions have genuinely been answered. Each is checked AT ITS MINTING
> DOCUMENT and then re-checked against this document's own two new decisions, because the second check is
> the one the warning is really about.**

**`AC-26`, quoted from AD-01P §5 where it was MINTED, verbatim and not paraphrased:**

> ⟦BUSINESS DECISION REQUIRED⟧ ***"Is a registration's grounding power SINGLE-USE or REPEATABLE? May ONE
> live registration ground claims on SEVERAL Inquiries inside its own window — and does it ground a claim on
> an Inquiry opened AFTER that client's earlier purchase CONVERTED?"***

**AD-01P's own stated ground for minting it, verbatim:** *"`PO-P1` says a registration **may be the basis for
CP attribution on A LATER INQUIRY** — singular — and does not say whether the power is spent by use."*

| Check | Result |
|---|---|
| **Did AD-01Q's audit-reconstruction ruling (`PO-Q2`) answer it?** | ⟦ARCHITECT ANALYSIS⟧ **NO, AND AD-01Q SAID SO.** **`PO-Q2·c`'s chain names *"registration used as attribution basis"* — SINGULAR, in the same shape as `PO-P1`. `Q-AR` link 6 carries it as a RECORD. Recording that a registration was used once says nothing about whether it may be used twice.** **A clause that merely NAMES the grounding act is not a clause that COUNTS it** |
| **Was that still true at AD-01R, AD-01S, AD-01T?** | **YES. None of the three reaches the grounding layer's cardinality. AD-01T `PO-T1·3` restates `PO-P1` in the same singular form and adds only the citation requirement** |
| **Was it still true at AD-01U?** | **YES, and AD-01U §5.8 states it in terms: *"`AC-26` — UNCHANGED, NOT ANSWERED, NOT NARROWED. `PO-U1` operates downstream of grounding entirely."*** ⟦ARCHITECT ANALYSIS⟧ **VERIFIED AT SOURCE HERE and the statement is accurate: `PO-U1·1` begins at a successful booking, which is several levels downstream of whether a registration's grounding power is spent** |
| ⚠ **Does `PO-V1` answer it?** | **NO.** ⟦ARCHITECT ANALYSIS⟧ **`PO-V1·S1` describes what happens to a CLAIM once it exists and `PO-V1·S2` what happens to COMMISSION once a booking exists. Neither says how many claims one registration may ground. Stage 1 running on many Inquiries is consistent with each having been grounded by a different act, or by the same registration repeatedly, or by no registration at all — `PO-S1·6` makes registration one basis among others** |
| ⚠ **Does `PO-V2` answer it?** | **NO — AND THIS IS THE TRAP THE OWNER'S WARNING NAMES.** ⟦ARCHITECT ANALYSIS⟧ **`PO-V2·d` reads *"A registration may ground a claim, but it does not automatically create attribution or commission eligibility."* That sentence uses `PO-P1`'s EXACT singular construction — *"a claim"* — and AD-01P minted `AC-26` precisely BECAUSE that construction does not disambiguate. A document that read `PO-V2·d` as answering `AC-26` would be making the identical error AD-01Q was found NOT to have made, one decision later** |

> ⟦ARCHITECT ANALYSIS⟧ **THE CONCLUSION, STATED PLAINLY.**
>
> > **`AC-26` IS OPEN. BOTH LIMBS — the within-window repeatability limb and the post-conversion limb — ARE
> > UNANSWERED. It is NOT narrowed by anything in this document, and neither `PO-V1` nor `PO-V2` is to be
> > read as bearing on it.** **`Y-1`, `Y-3`, `AA-1`, `K-26` and `T-5`, which AD-01P named as coupled to it,
> > are likewise NOT resolved, NOT narrowed and NOT branched.**

**`AC-6`, quoted from AD-01N §F.2 where it was MINTED, verbatim:**

> ⟦BUSINESS DECISION REQUIRED⟧ ***"Boundary convention: is the last eligible day `registration date + N`
> (convention α), or `registration date + N − 1` (convention β)? And is `N = 0` a legal configuration?"***

| Check | Result |
|---|---|
| **AD-01T's finding on the owner's *"Day 30 is included; Day 31 is expired"*** | ⟦ARCHITECT ANALYSIS⟧ **AD-01T §3.6 ran the discrimination test and concluded the sentence is TRUE UNDER BOTH CONVENTIONS, because it states a boundary in ordinal day-numbers without fixing the INDEXING ORIGIN. Under zero-indexing it selects α; under one-indexing — the ordinary business way of counting *"day one"* — it selects β. AD-01N's phrasing of α's property happened to use zero-indexing, which is AD-01N's choice and not the owner's** |
| **AD-01T's disposition of it** | ⟦BUSINESS DECISION REQUIRED⟧ **A DISCREPANCY NOTICE, NOT A RESOLUTION: the owner LISTS `AC-6` among already-locked decisions and it is not locked.** **VERIFIED AT SOURCE here; AD-01T's wording is as stated** |
| **Was it inadvertently treated as resolved at AD-01U?** | **NO. AD-01U §5.8 carries it: *"UNCHANGED, NOT RESOLVED, NO CONVENTION SELECTED … AD-01T's DISCREPANCY NOTICE … is NOT discharged and is carried forward unchanged."* VERIFIED** |
| ⚠ **Does `PO-V2` create a FOURTH money-bearing consumer?** | ⟦ARCHITECT ANALYSIS⟧ **NO — AND THE REASON IS WORTH ONE LINE BECAUSE IT RUNS THE OTHER WAY.** **`PO-V2·a` permits CP B's registration UNCONDITIONALLY. A rule that permits an act regardless of whether another party's window is live does not EVALUATE that window, so no boundary test is performed and `AC-6` is not consulted.** **Had the owner answered `AC-20` with *"blocked at the door"*, the cross-CP creation gate WOULD have become a fourth consumer of `AC-6` and the boundary day would have decided whether a registration exists at all. The owner's YES FORECLOSES that.** **`AC-6` remains TRIPLY money-bearing — `NF-18` eligibility, `O-U`(3) re-registration admissibility, `P-G` step 3 claim admissibility — and no more** |

> ⟦ARCHITECT ANALYSIS⟧ **THE CONCLUSION, STATED PLAINLY.**
>
> > **`AC-6` IS OPEN. BOTH LIMBS — the α/β convention and the legality of `N = 0` — ARE UNANSWERED. NO
> > CONVENTION IS SELECTED, PREFERRED, RANKED OR IMPLIED ANYWHERE IN THIS DOCUMENT.** **AD-01T'S
> > DISCREPANCY NOTICE IS CARRIED FORWARD UNCHANGED AND UNDISCHARGED, for the second consecutive document.**

### 0.8 The ledger's headline results

> ⟦ARCHITECT ANALYSIS⟧ **`PF-127` — four results, and three of them are things a reader of the recent
> documents would not have predicted. They are reported rather than smoothed.**

| # | Result |
|---|---|
| **1** | ⚠ **OF THE ELEVEN NAMED ITEMS, ONLY SIX WERE ALREADY LOCKED BY AN EXPLICIT PRODUCT-OWNER DECISION** — `AC-14` (`PO-R1`), `C-XVI` (`PO-S1`), `P-G` (`PO-T1`), the clash authority's WHO (`PO-T2`), the multi-CP allocation (`PO-U1·8`), percentage-or-amount (`PO-U1·9`) and no-evidence-required (`PO-U1·7`/`·11`). **TWO are locked for the first time HERE (`PO-V1·S1`, `PO-V2`), and two — the FORM of the clash authority (`C-XX`) and the FORM of the allocation decision (`C-XXI`) — are ARCHITECT RECOMMENDATIONS that are NOT ratified and must not be read as decided** |
| **2** | ⚠ **STAGE 1'S INDEPENDENCE FROM COMMISSION WAS ARCHITECT-ONLY FOR ELEVEN DOCUMENTS** — [§0.3](#03-verification-5-worked-in-full--what-was-and-was-not-previously-said-about-stage-1). **`K-9`/`K-10`/`J-25` carried it as ⟦SETTLED⟧ findings; ⟦SETTLED⟧ is not an owner decision; `PO-V1·S1` is the first owner statement of it** |
| **3** | ⚠ **ONE OF TWENTY-TWO CONSTRAINTS IS AT OWNER STATUS** — [§0.6](#06-the-c--series-and-the-x--series). **`C-XVI` alone. Gate 2's and gate 3's limbs remain exactly as unratified as AD-01P, AD-01Q, AD-01T and AD-01U each left them, and this document ratifies none of them** |
| **4** | **`AC-26` AND `AC-6` ARE BOTH GENUINELY OPEN, AND BOTH SURVIVED A SPECIFIC TEMPTATION IN THIS DOCUMENT'S OWN MATERIAL** — `PO-V2·d`'s singular *"a claim"* for `AC-26`; `PO-V2·a`'s reference to a *"live"* registration for `AC-6`. **Both were checked and both ruled out** — [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6) |

---

## 1. The decision

### 1.1 The source of these decisions

> ⟦ARCHITECT ANALYSIS⟧ **`PF-128` — recorded first, because the provenance determines which register row
> each answer may be posted against, and this time there are TWO answers landing on TWO rows, only one of
> which was asked.**
>
> **AD-01U closed at `VALIDATE` with a NINE-item gating list at its §6.1 and posed `AC-35` back to the owner
> at its §6.2 as the single next question, offering exactly two branches:**
>
> > *"**(a) Both still happen.** Before any booking, someone still decides whose enquiry it is — because that
> > decides who works the customer, who sees the clash, and whose number it is in your conversion reports,
> > even on the many enquiries that never convert. Then, if it does convert, your Site Head decides how the
> > money is split, and that split can differ from who 'won' the enquiry.
> > **(b) Only the booking one happens.** …"*
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner has answered (a), and has answered it in the question's own terms —
> naming the reporting, ownership and visibility consumers the question named, and confirming in terms that
> the split may differ from the attribution.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Three things follow and each is stated rather than assumed.**
>
> | # | Consequence |
> |---|---|
> | **1** | **`AC-35` is CLOSED, and AD-01U's entire [§2.1.6] conclusion — `C-IV` not contradicted, `K-18` standing, `P-G` undisturbed, `Q-OV` surviving, `NF-28` unamended — transfers from *"a well-supported reading of the owner's silence"* to *"confirmed."*** **The check is RE-RUN rather than assumed to transfer** — [§3](#3-ad-01us-compatibility-finding-re-run-against-a-confirmed-two-stage-model) |
> | **2** | **`A-57`'s first limb changes STATUS but not CONTENT.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U named it conditionally — `P-G` needs a step for the allocation IF the pre-booking decision survives. It survives. The amendment is now UNCONDITIONAL. It is NOT renumbered, NOT restated and NOT made** |
> | **3** | ⚠ **The second decision lands on a row NOBODY OPENED IN AD-01U.** **`AC-20` has been OPEN since AD-01O, was raised by six consecutive documents, and was expressly NOT this document's expected subject. It is answered anyway, and the audit at [§0.5](#05-the-ac--register--all-thirty-five-classified-by-provenance) is what makes that visible rather than accidental** |

### 1.2 The decisions, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened, qualified or treated as an option.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1` — THE TWO-STAGE MODEL. The framing sentence, verbatim:**
>
> > *"BMexa has TWO distinct stages."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1` — STAGE 1, PRE-BOOKING CP ATTRIBUTION, verbatim:**
>
> > *"A CP can be attributed to an Inquiry before any booking occurs. This attribution exists independently
> > of commission. It can support: enquiry ownership/attribution reporting, CP performance reporting,
> > conversion reporting, operational visibility, historical attribution. Therefore, even if an Inquiry never
> > becomes a Booking, it can still have a resolved CP attribution."*
>
> **And the owner's own worked example, verbatim:**
>
> > *"Rahul's enquiry arrives → CP A and CP B have competing claims → normal attribution process resolves the
> > Inquiry to CP A → Rahul never books → CP A remains the attributed CP for that Inquiry/reporting
> > purposes."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S2` — STAGE 2, POST-BOOKING COMMISSION ALLOCATION, verbatim:**
>
> > *"If the Inquiry converts into a successful Booking and there is a CP commission clash, the Site Head
> > separately decides how the commission is allocated."*
>
> **And the owner's own worked example, verbatim:**
>
> > *"Pre-booking attribution: Rahul Inquiry → CP A attributed. Later: Booking succeeds → CP A and CP B have
> > a commission clash → Site Head decides 60% CP A / 40% CP B."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·X` — THE NON-MERGER INSTRUCTION, verbatim and in the owner's own
> emphasis:**
>
> > *"**Therefore: PRE-BOOKING ATTRIBUTION ≠ POST-BOOKING COMMISSION ALLOCATION. Do not merge these
> > mechanisms. The Site Head commission allocation can differ from the pre-booking attribution.**"*
>
> **And the clause attached to it, verbatim:**
>
> > *"The allocation may be 100/0, 0/100, 50/50, 60/40, 40/60, 30/70, or another valid allocation permitted
> > by the final business rule. Percentage or explicit amount. No mandatory evidence-document upload."*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2` — COMPETING CP REGISTRATIONS. Recorded clause by clause, verbatim:**

| # | Clause, verbatim |
|---|---|
| **`PO-V2·a`** | *"Can CP B register the same Client × Project while CP A's registration is still live?"* — ***"YES."*** |
| **`PO-V2·b`** | *"This is consistent with the already-established registration model: CP Project Registration is scoped to CP × Client × Project. CP A and CP B may therefore have registrations for the same Client × Project simultaneously."* |
| **`PO-V2·c`** | *"**The existence of CP A's registration must NOT be disclosed to CP B.**"* |
| **`PO-V2·d`** | *"A competing registration/claim is handled internally by BMexa through the established clash/attribution process. Registration itself does not determine the winner. Registration has no special weight. A registration may ground a claim, but it does not automatically create attribution or commission eligibility."* |
| **`PO-V2·e`** | *"**Treat this as a clarification/ratification of the already-established CP × Client × Project model where applicable, not as permission to invent a new registration structure.**"* |

### 1.3 What these decisions do NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14`, `PO-P1 … PO-P12`, `PO-Q1`, `PO-Q2`, `PO-R1`/`PO-R2`,
> `PO-S1`/`PO-S2`, `PO-T1 … PO-T3` and `PO-U1 … PO-U3` are untouched except where `PO-V1`/`PO-V2` restate
> one of them, and every one of them remains in force.** In particular:

| Prior clause | Status after `PO-V1`/`PO-V2` |
|---|---|
| **`PO-P1`** — a currently-valid registration MAY ground a CP attribution claim on a later inquiry, subject to normal attribution/clash rules | **UNCHANGED and RESTATED by `PO-V2·d` — the owner's FOURTH statement counting `PO-P1`, `PO-R1·e`, `PO-T1·3` and this.** ⚠ **Its SINGULAR construction is reproduced, and reproducing an ambiguity is not resolving it** — `AC-26`, [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6) |
| **`PO-P2`/`PO-P4`** — registration is NOT automatic attribution and NOT an automatic clash winner | **RESTATED by `PO-V2·d`'s *"does not determine the winner"* and *"does not automatically create attribution"* — the owner's SEVENTH statement** counting `PO-O13`/`PO-O14`, `PO-P2`/`PO-P4`, `PO-R1·f`, `PO-S1·4`/`·8`, `PO-T1·5`/`PO-T3` bullet 4, `PO-U3·b`/`·c` and this |
| **`PO-P3`** — registration is NOT automatic commission eligibility | **UNCHANGED and RESTATED VERBATIM IN SUBSTANCE by `PO-V2·d`'s *"does not automatically create … commission eligibility."*** |
| **`PO-P10`** — the seven levels the architecture must never conflate | **UNCHANGED as a PROHIBITION and REINFORCED by `PO-V1·X`.** ⟦ARCHITECT ANALYSIS⟧ **Its ENUMERATION remains INCOMPLETE in two places (`X-24`, `X-26`) and is NOT filled here. `PO-V1·S1` CONFIRMS that level 5 — *Attribution, the resolved claim* — names an act that genuinely occurs** |
| **`PO-Q1`** — the Site Head attribution/clash override | **UNCHANGED, UNTOUCHED, NOT REPLACED, NOT SUBSUMED — and now PRECISELY STAGE-MAPPED** — [§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages) |
| **`PO-Q2`** — the audit-reconstruction requirement | **UNCHANGED and REINFORCED. The owner has restated their own chain with TWO decisions in it where AD-01Q's had one** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **`PO-R1`/`PO-R2`** — `AC-14` = Option A | **UNCHANGED, LOCKED, ORTHOGONAL and NOT REOPENED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED, not assumed: nothing in `PO-V1`/`PO-V2` reads an Inquiry closure, classifies one, or consumes a registration. `(L-6·ground)` is not reopened** |
| **`PO-S1`/`PO-S2`** — `C-XVI` = No Special Weight | **UNCHANGED, LOCKED, and RESTATED by `PO-V2·d` — the owner's SEVENTH statement — now extended in terms to the CROSS-CP case, which `PO-S1` did not name** — [§4.2](#42-ac-20-closed--and-what-that-closure-does-and-does-not-carry) |
| **`PO-T1·1 … PO-T1·3`, `PO-T1·5`, `PO-T1·6`, `PO-T1·8`, `PO-T1·10`** | **UNCHANGED and NOT REACHED** |
| **`PO-T1·4`, `PO-T1·7`** — the claim is evaluated through the normal process; the authorised decision-maker resolves the attribution/clash | ⚠ ⟦PRODUCT-OWNER DECISION⟧ **CONFIRMED TO DESCRIBE ACTS THAT OCCUR.** **AD-01U left their continued occurrence UNCERTAIN (`AC-35`). `PO-V1·S1` — *"normal attribution process resolves the Inquiry to CP A"* — confirms them** |
| **`PO-T1·9`** — *"Only after attribution is resolved, and only if the Inquiry converts, is commission eligibility evaluated"* | ⚠ **ITS ORDER IS CONFIRMED. ITS ENUMERATION REMAINS INCOMPLETE.** **AD-01U found a new act between its two conjuncts and named `A-57`. That amendment is now UNCONDITIONAL and is still NAMED AND NOT MADE** |
| **`PO-T2`/`PO-T3`** — the step-7 authority; the four-bullet authority model | **UNCHANGED. `PO-T3` bullet 4 — *"Registration itself never decides the winner"* — is RESTATED VERBATIM IN SUBSTANCE by `PO-V2·d`** |
| **`PO-U1·1 … PO-U1·12`** | **UNCHANGED and IN FORCE.** ⚠ **`PO-U1·2`'s *"if there is a CP clash"* is PRECISIFIED BY THE OWNER to *"a CP **commission** clash"* at `PO-V1·S2`. That is the owner refining their own clause, not the architect qualifying it** |
| **`PO-U2·A`** — *"BMexa identifies that competing CP claims exist"* | ⚠ **UNCHANGED — and its TAXONOMY GAP IS NOW FILLED BY THE OWNER.** **AD-01U `PF-99` argument 2 held that `PO-U2`'s three terms left no slot for a pre-booking resolution. `PO-V1·S1` supplies the slot. AD-01U's fourth column `A′` is thereby OWNER-NAMED** — [§2.4](#24-the-axes-mapped-onto-ad-01us-a--a--b--c-model) |
| **`PO-U2·B`/`PO-U2·C`**, **`PO-U3·a … PO-U3·c`** | **UNCHANGED and RESTATED IN SUBSTANCE by `PO-V1·S2`/`PO-V1·X`** |
| **`PO-U3·d`** — the eight-term preserved-distinction list | ⚠ **UNCHANGED AS A PROHIBITION — and its ENUMERATION IS NOW KNOWN TO BE INCOMPLETE** → **`X-27`**, **`A-61`**. **Only the owner may extend their own list and this document does not fill it** |

---

## 2. The two axes

> ⟦ARCHITECT ANALYSIS⟧ **`PF-129` — the axes are built exactly as the owner framed them, in the owner's own
> sequence, and then mapped onto AD-01U's vocabulary. The mapping is done SECOND and separately, so that a
> reader can check the axes against the owner's words without the architect's taxonomy interposed.**

### 2.1 AXIS 1 — Inquiry attribution

| Step | What happens | Whose clause it is |
|---|---|---|
| **1·1** | **An Inquiry arrives and becomes its own Inquiry record** | ⟦PRODUCT-OWNER DECISION⟧ `PO-T1·1` |
| **1·2** | **CP claims may be RECORDED against that Inquiry's claim set — one, or more than one** | ⟦PRODUCT-OWNER DECISION⟧ `PO-T1·3`; ⟦SOURCE⟧ **§11** *"record each attribution claim, preserve history"*; ⟦SETTLED⟧ `K-17` append-only |
| **1·3** | **A currently-live registration MAY provide the grounding basis for such a claim — and gives it no weight** | ⟦PRODUCT-OWNER DECISION⟧ `PO-P1`, `PO-T1·2`/`·3`, `PO-S1·6`, `PO-V2·d` |
| **1·4** | **Competing claims are DETECTED** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U2·A`; ⟦SOURCE⟧ **§11**, **§12** |
| **1·5** | **The normal attribution/clash-resolution process runs, and the authorised decision-maker resolves it** | ⟦PRODUCT-OWNER DECISION⟧ `PO-T1·4`, `PO-T1·7`, `PO-T2`; **CONFIRMED TO OCCUR by `PO-V1·S1`** |
| **1·6** | **A separately defined override may restate that outcome** | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q1`, `PO-T1·8` |
| **1·7** | ⚠ **A PRE-BOOKING CP ATTRIBUTION IS RESOLVED, AND IT PERSISTS** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1` — NEW HERE** |
| **1·8** | ⚠ **THE ATTRIBUTION EXISTS EVEN IF NO BOOKING EVER OCCURS, and serves ownership, CP performance reporting, conversion reporting, operational visibility and historical attribution** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1` — NEW HERE. Previously carried by `K-9`/`K-10`/`J-25` as ARCHITECT findings only** — [§0.3](#03-verification-5-worked-in-full--what-was-and-was-not-previously-said-about-stage-1) |

### 2.2 AXIS 2 — post-booking commission allocation

| Step | What happens | Whose clause it is |
|---|---|---|
| **2·1** | **The Inquiry converts** | ⟦PRODUCT-OWNER DECISION⟧ `PO-T1·9`; ⟦SETTLED⟧ `Q4`'s canonical conversion fact |
| **2·2** | **A booking succeeds** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·1`, `PO-V1·S2` |
| **2·3** | **IF a CP COMMISSION clash exists, it is surfaced to the Site Head** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·2` as precisified by `PO-V1·S2` |
| **2·4** | **The Site Head reviews the available information, may speak directly to the CPs, and personally makes the commercial decision** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·3`, `PO-U1·4`, `PO-U1·12` |
| **2·5** | **The allocation may name ONE CP or MORE THAN ONE** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·8`, `PO-U2`'s attached clause, `PO-V1·X` |
| **2·6** | **It is entered as a PERCENTAGE or as an explicit AMOUNT per CP, and the exact allocation is preserved** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·9`, `PO-U1·10`, `PO-U2`, `PO-V1·X` |
| **2·7** | **No evidence-document upload is required** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·7`, `PO-U1·11`, `PO-V1·X` |
| **2·8** | **Downstream: commission eligibility → approval → payout / reconciliation** | ⟦PRODUCT-OWNER DECISION⟧ `PO-U2·C`, `PO-T1·9`/`·10`; ⟦ARCHITECT RECOMMENDATION⟧ `NF-28`, `NF-24` |

### 2.3 The two axes shown as parallel, non-collapsing tracks

> ⟦ARCHITECT ANALYSIS⟧ **`PF-130` — drawn as a table rather than as prose, on this series' convention, and
> the middle column is the whole point: it is what each axis does NOT do.**

| | **AXIS 1 — ATTRIBUTION** | **THE BOUNDARY** | **AXIS 2 — ALLOCATION** |
|---|---|---|---|
| **The question it answers** | ***"Whose enquiry is this?"*** | **Two different questions. A decision is individuated by the question it answers** — AD-01Q §2.1's test, applied since | ***"How is this booking's commission divided?"*** |
| **What it attaches to** | **The INQUIRY** — ⟦ARCHITECT RECOMMENDATION⟧ `K-18`, for a NINTH consecutive document | **Two different bearers. Neither may be written onto, derived into, or read back as the other** — ⟦ARCHITECT RECOMMENDATION⟧ `C-XXI`(3) | **The BOOKING** — a COMMERCIAL fact, where `K-48` conjunct (ii) already lives |
| **When it runs** | **BEFORE any booking** | ⟦PRODUCT-OWNER DECISION⟧ `PO-Q2·c`'s ordering; `PO-T1·9`'s first conjunct | **AFTER booking success** — ⟦PRODUCT-OWNER DECISION⟧ `PO-U1·1` |
| **Can it exist with NO booking** | ⚠ **YES, ROUTINELY — and this is now the OWNER's statement** — `PO-V1·S1` | ⟦SETTLED⟧ **`K-10`, `K-9`, `J-25` say the same and are the architect's; `PO-V1·S1` is the owner's** | **NO. STRUCTURALLY IMPOSSIBLE** — `PO-U1·1` |
| **Cardinality of its answer** | **ONE resolved attribution per Inquiry** | ⚠ **The two cardinalities are INDEPENDENT. This is why `A-54`'s phrase-level correction to `K-48` conjunct (i) is required and why `NF-28` needs none** | **ONE OR MANY CPs** — `PO-U1·8` |
| **Who decides** | ⟦PRODUCT-OWNER DECISION⟧ **The authorised Site Head / Project Head** — `PO-T2` | ⟦ARCHITECT RECOMMENDATION⟧ **`C-XX`(2) and `C-XXI`(2): FOUR distinct permissions, never one grant. Same PERSON is permitted; same PERMISSION is not** | ⟦PRODUCT-OWNER DECISION⟧ **The Site Head, personally** — `PO-U1·4` |
| **Evidence** | ⟦SOURCE⟧ **§11 states NO basis.** AD-01M §11.2 requires stated REASONS | ⚠ **`AC-28`'s three-way asymmetry, one leg owner-fixed. NO EVIDENCE STANDARD IS PROPOSED FOR ANY LEG** | ⟦PRODUCT-OWNER DECISION⟧ **EXPRESSLY NOT REQUIRED** — `PO-U1·7`/`·11` |
| **Its non-financial consumers** | ⚠ **Ownership, CP performance reporting, conversion reporting, operational visibility, historical attribution** — `PO-V1·S1` | **AXIS 2 HAS NONE. It is money and nothing else** | **NONE** |
| **May the two DIVERGE** | ⟦PRODUCT-OWNER DECISION⟧ **YES — *"The Site Head commission allocation can differ from the pre-booking attribution"*** — `PO-V1·X` | ⚠ **DIVERGENCE IS A NAMED, EXPECTED OUTCOME, NOT AN ANOMALY. The owner's own example diverges: CP A attributed, 60/40 allocated** | ⟦PRODUCT-OWNER DECISION⟧ **YES — same clause** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-131` — the DECISION-versus-PERSON distinction, restated once because this
> document now carries four decisions across two axes and the risk grows with the count.**
>
> > **THE TWO AXES ARE NOT TWO DEPARTMENTS, TWO SCREENS OR TWO PEOPLE. The same individual may hold
> > permissions on both without the axes collapsing.** **What is forbidden — and is already forbidden — is a
> > SINGLE PERMISSION spanning a decision on Axis 1 and a decision on Axis 2.** ⟦SETTLED⟧ **AD-01Q §3.4(2);
> > `C-XX`(2); `C-XXI`(2); `PO-P10`; `PO-U3·d`.**

### 2.4 The axes mapped onto AD-01U's `A` / `A′` / `B` / `C` model

> ⟦ARCHITECT ANALYSIS⟧ **`PF-132` — the mapping is exact, and it is stated as a mapping rather than as a
> replacement, because AD-01U's four-column model is not superseded by the owner's two-axis framing: the two
> vocabularies COMPOSE.**

| AD-01U's term | Which axis, and where in it | What changes now that `PO-V1` is locked |
|---|---|---|
| **`A` — CP claim / clash DETECTION** | **AXIS 1, step 1·4** | **NOTHING. It was never in doubt. It remains a system act, never a person's** |
| **`A′` — the §11 attribution/clash DECISION** | **AXIS 1, steps 1·5 … 1·8** | ⚠ **IT IS NO LONGER A COLUMN THE ARCHITECT ADDED TO THE OWNER'S TAXONOMY.** **AD-01U §3 showed `A′` explicitly *"so that `AC-35` is visible as a gap rather than hidden as an assumption."* The gap is closed: `PO-V1·S1` is the owner's own `A′`** |
| **`B` — Site Head COMMISSION-ALLOCATION decision** | **AXIS 2, steps 2·3 … 2·7** | **NOTHING IN ITS CONTENT. Its TRIGGER is precisified: the clash at `PO-U1·2` is a COMMISSION clash** |
| **`C` — commission ELIGIBILITY / APPROVAL / PAYOUT** | **AXIS 2, step 2·8** | **NOTHING. `NF-28` per (claim × booking), `NF-24`'s per-claim subject, and the §32/§40/§50 path are unchanged** |

> ⟦ARCHITECT ANALYSIS⟧ **THE MAPPING, STATED ONCE IN ITS SHORTEST FORM.**
>
> > **AXIS 1 = `A` + `A′`. AXIS 2 = `B`. DOWNSTREAM = `C`.**
> >
> > **The two vocabularies do not compete. AD-01U's is a taxonomy of DECISION POINTS; the owner's is a
> > taxonomy of STAGES. One stage contains two decision points, because detection is not a determination —
> > which is exactly why AD-01U declined to give `A` a `PO-P10` level.**

---

## 3. AD-01U's compatibility finding, RE-RUN against a CONFIRMED two-stage model

> ⟦ARCHITECT ANALYSIS⟧ **`PF-133` — AD-01U reached its conclusion by reading an owner's silence, said so in
> terms, and put the residual to the owner as `AC-35`. The silence is gone. The honest thing is not to
> declare the conclusion confirmed but to RE-RUN THE SAME CHECKS and report whether anything changes now
> that the premise is certain rather than inferred. Three changed; none reversed.**

### 3.1 `C-IV` — re-run

**`C-IV`'s exact text, quoted again rather than recalled:** ⟦ARCHITECT RECOMMENDATION⟧ *"Claim resolution
must complete before the converting Booking reaches its §32 eligibility milestone."* **Its stated ground,
`J-26`:** *"§40's server-side authorization has nothing valid to evaluate otherwise."*

| | Under AD-01U's INFERENCE | Under `PO-V1`'s CONFIRMATION |
|---|---|---|
| **Is `C-IV` contradicted** | **NO** — its bound is the §32 milestone, not the booking, and the allocation lands inside that window | **NO — AND MORE STRONGLY.** ⟦ARCHITECT ANALYSIS⟧ **`PO-V1·S1` places claim resolution BEFORE any booking at all, which satisfies `C-IV`'s bound a fortiori: a resolution that completes before the Booking necessarily completes before a milestone ON that Booking.** **`C-IV` is now satisfied with margin rather than by the narrow reading of its literal bound** |
| **Is `C-IV` amended, widened or restated** | **NO** | **NO. `C-XXI`(4) still supplies the allocation's own bound at the new decision point rather than stretching `C-IV` over an act it does not name** |
| ⚠ **What CHANGES** | — | ⟦ARCHITECT ANALYSIS⟧ **The literal-bound reading is no longer LOAD-BEARING.** **AD-01U's `PF-97` had to work hard to show that `C-IV` says *"before the §32 milestone"* and not *"before the Booking"*, because on the merge reading that distinction was the only thing preserving `C-IV`. With Stage 1 confirmed, `C-IV` is satisfied on either reading of its own bound. The finding stands and is now redundant to the conclusion, which is worth recording so that nobody later treats `PF-97` as the reason `C-IV` survives** |

### 3.2 `K-18` — re-run

**`K-18`'s exact text:** ⟦ARCHITECT RECOMMENDATION⟧ *"Attribution belongs to the Inquiry, and to nothing
else. It does not belong to the Lead, to the Person, to the Booking, or to a combination of them."*

| | Result |
|---|---|
| **Is `K-18` contradicted** | **NO. CONFIRMED FOR A NINTH CONSECUTIVE DOCUMENT** |
| ⚠ **What CHANGES — and it is a strengthening** | ⟦ARCHITECT ANALYSIS⟧ **`PO-V1·S1` is the strongest corroboration `K-18` has received from the owner in the series.** **The owner's own sentence — *"even if an Inquiry never becomes a Booking, it can still have a resolved CP attribution"* — is `K-18`'s anchor stated as a business fact: if attribution could belong to the Booking, an Inquiry with no Booking could not carry one.** **`K-18` remains an ARCHITECT RECOMMENDATION and is NOT thereby ratified; what has changed is that the owner has independently asserted the proposition it rests on** |
| **The cardinality point** | **UNCHANGED. `K-18` contains NO cardinality. `A-54`'s three-place phrase correction to `K-48` conjunct (i) and its two glosses stands exactly as AD-01U named it, NOT MADE** |

### 3.3 `K-9` / `K-10` — re-run

**`K-10`'s exact text:** ⟦SETTLED⟧ *"an internal claimant can WIN an attribution contest and generate NO §32
entitlement at all."* **`K-9`:** winning attribution and being paid are different outcomes.

| | Result |
|---|---|
| **Are they contradicted** | **NO** |
| ⚠ **What CHANGES — and this is the largest single status change in the document** | ⟦ARCHITECT ANALYSIS⟧ **`K-9` AND `K-10` ARE NOW CORROBORATED BY THE OWNER IN THE OWNER'S OWN WORDS, AND WERE NOT BEFORE.** **`PO-V1·S1`'s Rahul example — attribution resolved to CP A, no booking, CP A remains the attributed CP — IS `K-10`, stated as a business scenario.** **AD-01U's [§2.1.6] reason 2 rested on `K-9`/`K-10` as ⟦SETTLED⟧ architect findings; that reason is now backed by an owner clause.** **NEITHER IS THEREBY RATIFIED — they remain AD-01K's and AD-01K is not approved — and this document does not claim otherwise** — [§0.3](#03-verification-5-worked-in-full--what-was-and-was-not-previously-said-about-stage-1) |
| **The direction NOT confirmed** | ⟦ARCHITECT ANALYSIS⟧ **`K-9` runs both ways: winning is not being paid, AND being paid is not winning. `PO-V1` confirms the FIRST direction explicitly. The SECOND direction — may a CP who did NOT win be paid — is `AC-36` and is NOT answered** — [§12.1](#121-the-new-question-ac-36) |

### 3.4 The two merge arguments AD-01U could not dissolve

> ⟦ARCHITECT ANALYSIS⟧ **`PF-134` — AD-01U named these rather than burying them and recorded both as
> `AC-35`'s basis. Both are now resolved, and each is resolved by a DIFFERENT clause.**

| AD-01U's surviving merge argument | Its resolution |
|---|---|
| **`PF-99` argument 2** — *"`PO-U2·A` is DETECTION only, so the owner's taxonomy leaves no slot for a pre-booking resolution"* | ⟦PRODUCT-OWNER DECISION⟧ **DISSOLVED BY `PO-V1·S1`.** **The owner has supplied the slot in their own words. AD-01U read the omission as *"an OMISSION from a taxonomy written to distinguish three things, not a REPEAL"* — and said in terms that this was an architect's reading of an owner's silence. THE READING WAS CORRECT AND IS NOW CONFIRMED** |
| **`PF-99` argument 1** — *"the clash is SURFACED at booking, which implies it is still LIVE and UNRESOLVED"* | ⟦PRODUCT-OWNER DECISION⟧ **DISSOLVED BY `PO-V1·S2`, and by a precisification AD-01U could not have supplied.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U had to consider that `PO-U1·2`'s *"if there is a CP clash"* might mean the ATTRIBUTION contest is still open at booking. `PO-V1·S2` reads *"if … there is a CP **commission** clash"* — the owner's own word, inserted into their own earlier clause. What is surfaced post-booking is a clash ABOUT MONEY between CPs whose attribution position is already determined. AD-01U's alternative reading — *"a RESOLVED clash whose money is now to be divided"* — is the one the owner meant** |

### 3.5 The net

> ⟦ARCHITECT ANALYSIS⟧ **`PF-135` — stated plainly because the whole of AD-01U's architecture rested on a
> conclusion that has now been tested against certainty rather than inference.**
>
> > **AD-01U'S CONCLUSION TRANSFERS CLEANLY. NOTHING IS REVERSED, NOTHING IS WEAKENED, AND NOTHING NEW IS
> > CONTRADICTED.** **`C-IV` stands and is satisfied with margin. `K-18` stands and is corroborated.
> > `K-9`/`K-10` stand and are corroborated by the owner for the first time. `P-G` steps 1–5 are undisturbed
> > and step 5 is now confirmed to describe an act that occurs. `NF-28` needs no amendment. `Q-OV` survives
> > and is now precisely stage-mapped.**
> >
> > **THREE THINGS CHANGE, AND EACH IS A STRENGTHENING RATHER THAN A CORRECTION: `C-IV`'s literal-bound
> > reading is no longer load-bearing; `K-9`/`K-10` acquire owner corroboration; and `A-57`'s first limb
> > becomes UNCONDITIONAL.**
> >
> > **AND ONE THING IS NEWLY VISIBLE THAT WAS INVISIBLE WHILE `AC-35` WAS OPEN — `AC-36`, at
> > [§12.1](#121-the-new-question-ac-36), which only exists because BOTH stages are now known to occur AND
> > known to be permitted to diverge.**

---

## 4. The registration-competition reconciliation

### 4.1 Did `O-U` need changing? Worked rather than assumed

> ⟦ARCHITECT ANALYSIS⟧ **`PF-136` — `O-U` was read AT AD-01O §2.2 in full, clause by clause, rather than
> through any later document's restatement. The result is that the answer is in `O-U`'s own fifth clause and
> was put there deliberately.**

**`O-U`'s five clauses, in their relevant part, quoted:**

> ⟦ARCHITECT RECOMMENDATION⟧ **`O-U` — For any `(CP relationship, client, Project)` triple:**
> **(1)** *at most ONE `CP Project Registration` may be protection-bearing at any given instant* · **(2)** a
> registration act on a triple that already holds one *creates NO new registration record* · **(3)** a
> registration act on a triple all of whose registrations have expired *MAY create a NEW registration
> record* · **(4)** the triple therefore carries *an ORDERED, NON-OVERLAPPING SEQUENCE of immutable
> registration records* · **(5)** *"`O-U` is stated PER TRIPLE and says nothing whatever about two DIFFERENT
> CPs. Two CPs may each hold a live registration over the same `(client, Project)` at the same time; whether
> that should be permitted at creation is `AC-20` and who wins at a booking is `AC-15` — both open, neither
> answered here, and `O-U` must not be read as answering either."*

| Question | Answer |
|---|---|
| **(a) Does `O-U`'s RULE need amending to admit CP B?** | ⟦ARCHITECT RECOMMENDATION⟧ **NO. NOT ONE WORD.** ⟦ARCHITECT ANALYSIS⟧ **`O-U`'s subject is a TRIPLE whose first term is the CP relationship. `(CP B, X, Project A)` is a different triple from `(CP A, X, Project A)`. AD-01O §2.8(a) already recorded the consequence in terms: *"`O-U` is satisfied trivially — the triple changes … This is CP B's FIRST registration, not a second registration of anything."* A rule stated per-triple is silent about a different triple BY CONSTRUCTION, not by omission** |
| **(b) Was `PO-V2` therefore already implied by NEGATION?** | ⚠ ⟦ARCHITECT ANALYSIS⟧ **PARTLY — AND THE DISTINCTION MATTERS.** **`O-U` implies that the cross-CP case is STRUCTURALLY POSSIBLE. It does NOT imply that it is PERMITTED. AD-01O drew exactly that line and drew it deliberately: *"the clarification's worked example deliberately uses the non-overlapping case and is therefore SILENT, not permissive."* And AD-01O added the reason the architect could not close the gap himself: *"Blocking it would be a systemic precedence rule, which `C-IX` holds is a §88 AUTHORIZATION change rather than a commission setting."*** **So the STRUCTURE was implied; the PERMISSION was a §88 decision reserved to the owner, and the owner has now given it** |
| **(c) Does any clause of `O-U` need a CLARIFYING amendment?** | ⚠ **YES — ONE, AND IT IS TO A CROSS-REFERENCE, NOT TO THE RULE.** **`O-U`(5)'s final sentence asserts that `AC-20` is *"open, neither answered here."* `AC-20` is now ANSWERED. That sentence is FACTUALLY STALE and an implementer reading `O-U` in isolation would carry a closed question forward as open** → **`A-58`, NAMED AND NOT MADE** |
| **(d) Does `O-U`'s non-overlap guarantee survive?** | **YES, UNAFFECTED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED rather than assumed, because `OF-4` — `O-U`'s real payoff — depends on it. `OF-4` holds that given a booking date `B`, *"the registration consulted is the one whose window contains `B`, and because `O-U` guarantees non-overlap, AT MOST ONE CAN CONTAIN `B`."* That guarantee is PER TRIPLE and therefore PER CP. Two CPs holding overlapping windows does not create two candidate registrations for ONE CP's conjunct (iii) test, because `NF-28` conjunct (iii) tests *"the CP's registration for that (client, Project)"* — a different registration per CP.** **`OF-4`'s determinacy is intact and `AC-22` is untouched** |

### 4.2 `AC-20`, CLOSED — and what that closure does and does NOT carry

> ⟦PRODUCT-OWNER DECISION — THE CLOSURE⟧
>
> **`AC-20` — *"May a registration be CREATED for one CP while a DIFFERENT CP holds a live registration over
> the same client and Project — or must it be blocked at the door?"* — IS CLOSED. IT MAY BE CREATED. IT IS
> NOT BLOCKED AT THE DOOR.**
>
> **This is the SIXTH item in the series closed by a direct Product-Owner ruling, after `AC-14` (AD-01R),
> `C-XVI` (AD-01S), `P-G` (AD-01T), `AC-15`'s content limb (AD-01U) and `AC-35` (this document).** **It has
> been OPEN since AD-01O and was carried, unanswered, by AD-01P, AD-01Q, AD-01R, AD-01S, AD-01T and
> AD-01U — six consecutive documents.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-137` — what the closure CARRIES and what it does NOT, stated precisely because
> `AC-20` sat next to `AC-15` for eight documents and the two are easy to conflate.**

| Proposition | Carried by `PO-V2`? |
|---|---|
| **CP B's registration may be CREATED while CP A's is live** | ⟦PRODUCT-OWNER DECISION⟧ **YES — `PO-V2·a`/`PO-V2·b`** |
| **The two registrations may be LIVE SIMULTANEOUSLY** | ⟦PRODUCT-OWNER DECISION⟧ **YES — `PO-V2·b` in terms: *"may therefore have registrations for the same Client × Project simultaneously"*** |
| **A CP-vs-CP clash arising from two live registrations is handled by the ordinary process** | ⟦PRODUCT-OWNER DECISION⟧ **YES — `PO-V2·d`: *"handled internally by BMexa through the established clash/attribution process"*** |
| **Neither registration has priority, seniority, precedence or a head start by virtue of being first** | ⟦PRODUCT-OWNER DECISION⟧ **YES — `PO-V2·d`: *"Registration itself does not determine the winner. Registration has no special weight."* This is `C-XVI`/`PO-S1` extended IN TERMS to the cross-CP case, which `PO-S1` had not named** |
| **A NEW registration structure, scope, type or record shape** | ⟦PRODUCT-OWNER DECISION⟧ **EXPRESSLY NOT — `PO-V2·e`: *"not as permission to invent a new registration structure."* NOTHING is minted, proposed or implied about the registration record anywhere in this document** |
| **Which CP wins the resulting clash** | **NO. That is `AC-15`, whose CONTENT LIMB is already closed with the answer *there is no rule* (`PO-U1·5 … ·8`, `PO-U1·12`), and `PO-V2·d` routes it to that same process** |
| **How the commission is divided if the booking succeeds** | **NO. That is AXIS 2, and `PO-U1·8` governs** |
| **Whether a registration's grounding power is spent by use** | **NO — `AC-26`** — [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6) |
| **Any cadence, gap or cap on registrations** | **NO — `AC-18`, UNTOUCHED** |
| **Which of two CPs' registrations answers `NF-28` conjunct (iii)** | **NO — and it does not arise. Conjunct (iii) is evaluated PER CP against that CP's own registration** — `AC-22` UNTOUCHED |

### 4.3 The non-disclosure requirement as its own architectural finding

> ⟦ARCHITECT ANALYSIS⟧ **`PF-138` — the question is whether `PO-V2·c` is NEW INFORMATION or a RESTATEMENT
> of something the architecture already carried. It was checked against the three candidates in turn, at
> source, and the answer is that it is NEW and it lands on a NAMED, PREVIOUSLY-OPEN sub-limb of `AC-13`.**

| Candidate carrier | Its exact text | Does it already require `PO-V2·c`? |
|---|---|---|
| ⟦SOURCE⟧ **§11 CLASH DETECTION** | *"record each attribution claim, preserve history, **do not expose sensitive competing claims unnecessarily** … Sales Reps should not automatically see sensitive clash information that could influence or manipulate attribution. The UI visibility rule must be enforced by authorization—not merely by hiding a badge."* | ⚠ **NO — IT IS NARROWER THAN `PO-V2·c` IN TWO WAYS AND WIDER IN NONE.** ⟦ARCHITECT ANALYSIS⟧ **(i) Its object is a CLAIM, not a REGISTRATION. A registration can exist with no claim ever minted from it — `C-XIII` makes it an explicit act and `PO-P1` makes grounding permissive — so §11 does not reach the registration's mere existence. (ii) Its named audience is *Sales Reps*, a builder-side role; `PO-V2·c`'s audience is a CHANNEL PARTNER, who is outside the builder entirely. (iii) *"unnecessarily"* is a standard, not a rule; `PO-V2·c` is a rule** |
| ⟦SOURCE⟧ **§39 CHANNEL PARTNER PORTAL** | *"The CP should be able to see relevant lead information, attribution information, pipeline status, commission status, eligibility, invoice status. **Do not expose Builder-internal sensitive information.**"* | ⚠ **NO, AND IT ARGUABLY POINTS THE OTHER WAY.** ⟦ARCHITECT ANALYSIS⟧ **§39's prohibition is on *Builder-internal* information. Another CP's registration is not obviously *Builder-internal* — it is a THIRD PARTY's commercial fact — so §39's category does not cleanly contain it. And §39's POSITIVE limb entitles the CP to *"attribution information"*, which on a loose reading could be argued to include why their claim lost. `PO-V2·c` settles that argument in the restrictive direction for one specific fact, and the spec did not settle it** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`V-7`** (AD-01G) — the fail-closed projection | The history-visibility boundary and its fail-closed read-time projection | **NO — IT IS THE MECHANISM, NOT THE CONTENT, AND FIVE DOCUMENTS HAVE SAID SO.** ⟦ARCHITECT ANALYSIS⟧ **AD-01N, AD-01O, AD-01P, AD-01Q and AD-01T each recorded *"`V-7`'s fail-closed projection supplies the mechanism; it does not supply the content."* `PO-V2·c` supplies CONTENT for one item. `V-7` is NOT reopened, NOT widened and NOT ratified** |
| ⟦BUSINESS DECISION REQUIRED⟧ **`AC-13`, as ENLARGED BY AD-01O** | **AD-01O's enlargement, verbatim:** *"whether the §39 portal shows a CP that **their own window has expired**, and separately whether it discloses that **a different CP now holds a live registration** over the same client and Project."* | ⚠ **THIS IS THE ONE. `PO-V2·c` ANSWERS AD-01O'S SECOND LIMB EXACTLY, IN THE SAME TERMS, AND ANSWERS IT NO.** ⟦ARCHITECT ANALYSIS⟧ **AD-01O minted the question; AD-01P, AD-01Q, AD-01S, AD-01T and AD-01U each carried it unanswered. The match is not approximate — the question asks whether the portal discloses that a different CP holds a live registration, and `PO-V2·c` says the existence must NOT be disclosed** |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY.**
>
> > **`PO-V2·c` IS GENUINELY NEW INFORMATION. It is NOT a restatement of §11, NOT a restatement of §39, and
> > NOT derivable from `V-7`.** **It closes ONE NAMED LIMB of `AC-13` — AD-01O's second — and it closes
> > nothing else.**
> >
> > **And it is stated as a HARD RULE rather than as a standard, which §11's *"unnecessarily"* is not. That
> > is the most consequential property of the clause: a standard is implemented as a judgement call at a
> > screen; a rule is implemented at the authorization boundary. ⟦SOURCE⟧ §11's own sentence —
> > *"The UI visibility rule must be enforced by authorization—not merely by hiding a badge"* — is what makes
> > the difference load-bearing.**

### 4.4 `C-XXII`, minted and stated in full

> ⟦ARCHITECT RECOMMENDATION — `C-XXII`, a constraint⟧ *(RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT
> WRITTEN APPROVAL. **NOT APPROVED. NOT APPROVED FOR IMPLEMENTATION.** ⟦SOURCE⟧ **§88** MUST-ASK:
> **authorization rules**, **tenant architecture**, **audit requirements**. **Stated as a BUSINESS RULE. No
> schema, screen, portal surface, field, projection, message text, role key, permission key, enum or role
> hierarchy is proposed, implied or derivable from it.** ⟦ARCHITECT ANALYSIS⟧ **Its CONTENT is `PO-V2·c`,
> which is the owner's. What `C-XXII` adds is the FORM in which that content survives as an enforced control
> rather than as a screen convention — and that form is the architect's recommendation, not the owner's
> decision.**)*

> **`C-XXII` — The EXISTENCE of one Channel Partner's `CP Project Registration` over a given
> `(client, Project)` is NOT disclosable to a DIFFERENT Channel Partner. The non-disclosure is enforced at
> the authorization boundary as a fail-closed read-time projection, never by omission from a screen; it is
> a property of the READER's identity and not of any record's state; and it is NEITHER a statement that the
> registration is secret from builder-side authorized holders NOR a restriction on what the ⟦SOURCE⟧ §39
> portal may show a CP about THEIR OWN registration, claim, attribution outcome or commission.**

**Five corollaries, each stated because each is a separate implementation temptation:**

1. **Its subject is the EXISTENCE fact, which is the widest form the prohibition can take and the one the
   owner stated.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2·c`: *"The existence of CP A's registration must NOT be
   disclosed to CP B."*** ⟦ARCHITECT ANALYSIS⟧ **A control that hides a registration's DETAILS while
   revealing that one exists has not implemented this clause. Nor has one that reveals it by inference — a
   count, a badge, a differently-worded refusal, or a registration act that fails with a reason.**
2. **It is enforced at the AUTHORIZATION boundary.** ⟦SOURCE⟧ **§11**: *"The UI visibility rule must be
   enforced by authorization—not merely by hiding a badge."* ⟦SOURCE⟧ **§40**: *"Never rely on a greyed-out
   button as the actual security control."* ⟦ARCHITECT RECOMMENDATION⟧ **`V-7`'s fail-closed projection is
   the pre-existing mechanism and is REUSED, not extended, not widened and not reopened.**
3. **It does NOT make the registration invisible to builder-side authorized holders.** ⟦ARCHITECT ANALYSIS⟧
   **`PO-V2·d` requires the competing registration to be *"handled internally by BMexa through the
   established clash/attribution process"*, which is impossible if the decision-maker cannot see it.**
   **The clause is about a CP audience, exactly as ⟦SOURCE⟧ §39 is, and AD-01Q's own distinction applies:
   the AUDITOR audience (`PO-Q2`, `AC-31`) and the CP audience (§39, `AC-13`) are not the same audience.**
4. **It is SCOPE-BOUND in the ordinary way and gains no exemption.** ⟦SOURCE⟧ **R1** tenant isolation and
   **R12** project isolation apply without exemption; the clause narrows visibility and never widens it.
5. **It CLOSES exactly one named limb of `AC-13` and NOTHING ELSE.** ⟦ARCHITECT ANALYSIS⟧ **What a CP may be
   told about the OUTCOME of a clash, about an override, about an exception, about their own expired window,
   or about the reason their claim lost, is `AC-13`'s and is NOT filled here** —
   [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not).

> ⟦ARCHITECT ANALYSIS⟧ **Why a constraint, and why only ONE, with the second candidate shown being ruled
> out.**
>
> | Candidate | Minted? |
> |---|---|
> | **The non-disclosure requirement** | ⚠ **MINTED as `C-XXII`.** **The reason is AD-01T's, applied unchanged: *"a narrowing of a spec term that is not carried as a numbered clause is a narrowing that survives only as long as someone remembers this conversation."* §11's *"unnecessarily"* and §39's *"Builder-internal"* are both generic; `PO-V2·c` is specific; and the specific rule has no numbered home** |
| **A clause carrying Stage 1's INDEPENDENCE from commission** | **CONSIDERED AND RULED OUT.** ⟦ARCHITECT ANALYSIS⟧ **The proposition is now at OWNER status in `PO-V1·S1` itself, which is a stronger carrier than any `C-` clause; `PO-T1·4`/`·7` and `PO-S1·9` already require the act; and `C-XXI`(3) already forbids the collapse from the allocation side. A clause here would restate an owner decision in architect language, which AD-01S declined to do for `C-XVI` and declined for exactly this reason** |

### 4.5 What of `AC-13` is CLOSED and what is NOT

> ⟦ARCHITECT ANALYSIS⟧ **`PF-139` — `AC-13` has been enlarged four times across five documents and now has
> at least seven distinguishable limbs. Closing one and leaving six open requires saying which is which,
> so this is done as an enumeration rather than as a sentence.**

| # | Limb, at the document that added it | Status |
|---|---|---|
| **(i)** | **AD-01N** — is the eligibility exception PER-BOOKING only or STANDING? | **OPEN** |
| **(ii)** | **AD-01N** — may the exception APPROVER sit in the benefiting reporting line, be the CP's relationship manager, or approve their own request? | **OPEN** |
| **(iii)** | **AD-01N** — is the FACT of an exception visible to the CP in the §39 portal, and separately the JUSTIFICATION TEXT? | **OPEN** |
| **(iv)** | **AD-01O** — does the portal show a CP that THEIR OWN window has expired? | **OPEN.** ⟦ARCHITECT ANALYSIS⟧ **NOT closed by `PO-V2·c`, which is about ANOTHER CP's registration. CHECKED and explicitly not conflated** |
| **(v)** | **AD-01O** — does it disclose that a DIFFERENT CP now holds a live registration over the same client and Project? | ⚠ ⟦PRODUCT-OWNER DECISION⟧ **CLOSED BY `PO-V2·c`. IT DOES NOT** |
| **(vi)** | **AD-01Q §3.13** — does the portal show a CP that their attribution was decided by an OVERRIDE rather than by ordinary §11 adjudication, with reason and evidence; and does the losing CP see they won at §11 and were overridden? | **OPEN, BOTH HALVES** |
| **(vii)** | **AD-01Q §3.13, AD-01T, AD-01U** — SELF-INTEREST CONTROLS, now for four acts: the eligibility-exception approver, the `Q-OV` holder, the step-7 decision-maker, and the allocator | **OPEN, ENLARGED FOUR TIMES.** ⟦ARCHITECT ANALYSIS⟧ **NOT narrowed by anything here** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION, AND IT IS DELIBERATELY CONSERVATIVE.**
>
> > **`AC-13` IS NOT CLOSED. ONE OF ITS SEVEN LIMBS IS.** **The reasoning does not support more: `PO-V2·c`
> > speaks about the EXISTENCE OF A REGISTRATION and says nothing about overrides, exceptions, reasons,
> > outcomes, expiry, or who may decide what. An answer to one limb of a compound question closes that limb,
> > and reading it as closing the question would be exactly the drift [§0.1](#01-what-this-audit-is-and-what-would-make-it-worthless)
> > failure mode 1 describes.**
> >
> > ⚠ **AND `AC-13` IS ALSO ENLARGED HERE, IN THE SAME BREATH, BY A LIMB `PO-V2` ITSELF CREATES:** **given
> > that CP A's registration must not be disclosed to CP B, what MAY CP B be told when their claim is
> > resolved against them — anything, nothing, or only the outcome? `PO-V2·c` forecloses one answer and
> > selects none.** **This is limb (viii), it is OPEN, and it is folded into `AC-13` rather than minted
> > separately for the same reason AD-01Q folded rather than minted: it is the same question at a new
> > surface** → **`A-59`, NAMED AND NOT MADE.**

---

## 5. `Q-OV` versus the allocation decision, MAPPED ONTO THE TWO STAGES

> ⟦ARCHITECT ANALYSIS⟧ **`PF-140` — AD-01U Investigation 2 already concluded that `Q-OV` and `PO-U2·B` are
> DISTINCT and that NEITHER SUBSUMES THE OTHER. That conclusion is NOT re-derived here. Two things are done
> instead: it is CHECKED for disturbance by the two-stage lock, and it is SHARPENED into a stage mapping
> that AD-01U could not state while `AC-35` was open.**

**Check 1 — is AD-01U's conclusion disturbed?**

| AD-01U's ground | Still holds? |
|---|---|
| **`PO-U2·B` is booking-bound (`PO-U1·1`); `Q-OV`'s target is not** | ⚠ **YES — AND IT IS NOW OWNER-BACKED RATHER THAN ARCHITECT-BACKED.** **AD-01U rested this on `K-10`/`J-25`. `PO-V1·S1` states in the owner's own words that an attribution can be resolved on an Inquiry that never books** |
| **`PO-Q1·b` makes evidence MANDATORY for `Q-OV`; `PO-U1·7`/`·11` make it EXPRESSLY NOT REQUIRED for the allocation — two owner clauses pointing opposite ways on one axis** | **YES, UNCHANGED. `PO-V1·X` restates the second leg — *"No mandatory evidence-document upload"* — and does not touch the first** |
| **`C-XVIII` forbids `Q-OV` becoming standing or generalised; an allocation on every clashed booking is standing by construction** | **YES, UNCHANGED. `C-XVIII` is NOT ratified, NOT widened and NOT extended to the allocation here** |
| **`Q-OV`'s three residual configurations** | **ALL THREE SURVIVE.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED individually: (1) an attribution decision on an Inquiry that never converts — `PO-V1·S1` makes this MORE common than AD-01U could assert, not less; (2) a single-claimant attribution outcome with no clash, which `PO-U1·2`'s *"if there is a CP clash"* does not trigger and `PO-S1·9` still requires to be determined; (3) an attribution outcome wrong for a non-commercial reason** |

**Check 2 — the stage mapping, worked and then stated.**

> ⟦ARCHITECT ANALYSIS⟧ **The test: does every configuration `Q-OV` reaches sit on AXIS 1, and does every
> configuration `C-XXI` reaches sit on AXIS 2? If both, the mapping is exact and each mechanism belongs to
> exactly one axis. This was run over the configurations rather than asserted from the definitions.**

| Mechanism | Its target, in the owner's words | Which axis | Any configuration on the other axis? |
|---|---|---|---|
| ⟦PRODUCT-OWNER DECISION⟧ **`Q-OV` / `PO-Q1·a`** | *"override **the normal CP attribution/clash decision**"* | **AXIS 1, at step 1·6 — it acts on step 1·5's output** | **NONE.** ⟦ARCHITECT ANALYSIS⟧ **All three of `PF-108`'s configurations are Axis 1. `Q-OV` produces an ATTRIBUTION answer — `PO-P10` level 5 — and an attribution answer is not a thing Axis 2 contains** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI` / `PO-U2·B`** | *"how **the commission** is allocated among the competing CPs"*, after booking success | **AXIS 2, at steps 2·3 … 2·7** | **NONE.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1·1` makes a successful booking its first step; Axis 1 runs before any booking and routinely without one** |

> ⟦ARCHITECT RECOMMENDATION⟧ **THE MAPPING, STATED AS A DETERMINATION.**
>
> > **`Q-OV` TARGETS STAGE 1 EXCLUSIVELY. `C-XXI` TARGETS STAGE 2 EXCLUSIVELY. NEITHER CROSSES, AND THE
> > MAPPING IS TOTAL: EVERY CONFIGURATION OF EACH SITS ON EXACTLY ONE AXIS.**
> >
> > **This is a SHARPENING of AD-01U's conclusion, not a replacement of it. AD-01U established that the two
> > are distinct; it could not say that each belongs wholly to one stage, because it did not know that
> > Stage 1 exists.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Three consequences, each stated so it is not over-read.**
>
> | # | Consequence |
> |---|---|
> | **1** | **An override that purported to state a commission SPLIT would be `Q-OV` performing a Stage 2 act.** **AD-01U named this hazard under `AC-30` and `C-XXI`(2)/`PF-107` forbid it. The stage mapping makes it a CATEGORY error rather than merely a permission error, which is a stronger statement of the same prohibition. `AC-30` is NOT thereby answered — whether the owner wants the answer to SAY so is theirs** |
| **2** | ⚠ **`AC-29` — *until when may an override be performed* — is SHARPER AND STILL UNANSWERED.** ⟦ARCHITECT ANALYSIS⟧ **The mapping supplies a candidate landmark it does not supply an answer: if `Q-OV` is Stage 1's, one might ask whether its availability ends when Stage 1 closes. **NO SUCH BOUNDARY IS PROPOSED, PREFERRED, RANKED OR IMPLIED.** An override performed after a booking, correcting the attribution without touching the allocation, is coherent on the mapping and is neither endorsed nor excluded here. `AC-29` is the owner's** |
| **3** | **`AC-33`'s second limb is unchanged in what it asks.** **Four permissions remain four; the mapping tells you which axis each sits on and says nothing about whether one role should hold several** |

---

## 6. The commission-allocation data-model check

> ⟦ARCHITECT ANALYSIS⟧ **`PF-141` — worked as an architectural question and not an implementation one. NO
> SCHEMA IS INVENTED, PROPOSED OR IMPLIED. The question is only whether the architecture AS IT STANDS can
> REPRESENT each of five things, and AD-01U's own answers are re-checked under the now-locked two-stage
> model rather than restated.**

### 6.1 The five representability questions, each answered

| | Can the existing architecture represent it? |
|---|---|
| **(a) MULTIPLE CP allocations for ONE booking** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, AND `NF-28` NEEDS NO AMENDMENT — AD-01U's finding, RE-CHECKED and UNCHANGED under the two-stage lock.** **`NF-24`'s Subject row is *"One determination — one **(CP claim × booking)** eligibility outcome"*; `NF-28` conjunct (i)'s own answer-bearer column already reads *"The Inquiry's **claim set**"*; conjunct (iii) is already per CP; conjunct (ii) is shared.** ⟦ARCHITECT ANALYSIS⟧ **Two CPs whose claims both have standing can BOTH satisfy `NF-28` on one booking with no amendment whatever. The eligibility layer was never a winner-picker** |
| **(b) PERCENTAGE allocation** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — as one of two BASES for one allocation, not as one of two concepts.** **AD-01U §5.6's finding, unchanged: the BASIS AS ENTERED is retained and not silently normalised, because converting between the two requires a commission TOTAL that ⟦SOURCE⟧ §25/§26 amendments can move.** **UNRATIFIED — it is AD-01U's recommendation, not the owner's decision** |
| **(c) AMOUNT allocation** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — same clause, same basis-retention consequence, same unratified status** |
| **(d) The EXACT Site Head decision as an IMMUTABLE record** | ⚠ **PARTIALLY — AND THE GAP IS REAL AND IS NOT NEW.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U2` requires it: *"The system must preserve the exact allocation decided."* `PO-Q2·a` requires it: every CP attribution and commission decision fully reconstructable.** ⟦ARCHITECT ANALYSIS⟧ **`Q-AR` has NO LINK for it — AD-01U named `A-55`'s three links and did NOT make them — and `X-25`/`A-37` records that even link 8, the ATTRIBUTION decision, is backed on only ONE of `PO-Q2·b`'s two substrates. The new links are backed by NEITHER.** **`PO-Q2·a` is OWNER-RATIFIED AND NOT YET SATISFIABLE, and this is the THIRD consecutive document in which `X-25`/`A-37`'s priority rises** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **(e) DOWNSTREAM eligibility / approval / payout** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, in its TEST — `NF-28`'s three conjuncts per (claim × booking), then `NF-24`'s exception layer, then ⟦SOURCE⟧ §32/§40/§50's approval and payout path and the CP Ledger.** **The PORTION is NOT a fourth conjunct of `NF-28`: a conjunct can FAIL and deny eligibility, a portion is a QUANTUM, and making the portion a conjunct would make an allocation of zero indistinguishable from an ineligibility — destroying `K-9` at the point it matters most.** ⟦SETTLED⟧ **The quantum is `M-9`'s, which still cannot start** |

### 6.2 The DIVERGENCE case — checked, because `PO-V1·X` makes it an expected outcome

> ⟦ARCHITECT ANALYSIS⟧ **This check could not be run at AD-01U, because divergence between the two
> decisions was only a possibility on an uncertain model. `PO-V1·X` makes it a NAMED, PERMITTED outcome and
> the owner's own example exhibits it. So the architecture must be able to hold, simultaneously and without
> either overwriting the other: an Inquiry whose resolved attribution is CP A, and a Booking on that Inquiry
> whose commission allocation is 60% CP A / 40% CP B.**

| Requirement | Can the architecture hold it? |
|---|---|
| **The attribution answer lives somewhere** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — on the INQUIRY's claim set. `K-18` anchors it; `K-17` and AD-01 §D.4 make the set append-only and *"never overwritten by a later claim"*** |
| **The allocation lives somewhere ELSE** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — as a COMMERCIAL fact about ONE BOOKING, which is where `K-48` conjunct (ii) already lives. `C-XXI`(3) requires exactly this separation** |
| **Neither can be derived from, written onto, or read back as the other** | ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`(3) forbids it in both directions, and the prohibition is now LOAD-BEARING rather than precautionary.** ⟦ARCHITECT ANALYSIS⟧ **THIS IS THE STRONGEST CONFIRMATION `C-XXI`(3) HAS RECEIVED. AD-01U minted it against a hypothetical; `PO-V1·X` — *"Do not merge these mechanisms. The Site Head commission allocation can differ from the pre-booking attribution"* — is the owner requiring it in their own words. An implementation that derived attribution from the allocation would report CP B as an attributed CP on an Inquiry the Site Head attributed to CP A** |
| **A 0% allocation is not an attribution loss, and an attribution loss is not a 0% allocation** | ⟦ARCHITECT RECOMMENDATION⟧ **`C-XVI` corollary 2 and AD-01U §5.2's honest note, UNCHANGED and now also load-bearing.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U checked ONE direction — a 0% allocation is not *"losing"*. The OTHER direction is `AC-36` and is NOT answered** |
| **The DIVERGENCE ITSELF is reconstructable** | ⟦ARCHITECT ANALYSIS⟧ **YES IN PRINCIPLE, NO IN PRACTICE TODAY. `PO-Q2·a` requires both decisions to be reconstructable, and two reconstructable decisions make their divergence derivable — so NO NEW REQUIREMENT is invented here. But (d) above records that the allocation decision has no `Q-AR` link and no `NF-27` substrate, so the derivation has nothing to run on until `A-55` is made** |

### 6.3 What this check does NOT decide

> ⟦BUSINESS DECISION REQUIRED — CARRIED, NOT ANSWERED⟧
>
> **`AC-34` IS AD-01U'S AND IS CARRIED FORWARD EXACTLY AS AD-01U LEFT IT.** **Whether entered percentages
> must sum to 100; what happens if they do not; whether an amount-based allocation may exceed, fall short of
> or must equal the commission `M-9` computes; whether rounding is permitted and in whose favour; and
> whether an allocation may be entered for a claim that subsequently fails `NF-28`.** **NO RULE, DEFAULT,
> TOLERANCE, ROUNDING CONVENTION, MINIMUM SHARE OR RESIDUAL TREATMENT IS INVENTED, PROPOSED, PREFERRED,
> RANKED OR IMPLIED ANYWHERE IN THIS DOCUMENT.**
>
> ⟦ARCHITECT ANALYSIS⟧ **One thing about `AC-34` HAS changed and it is reported rather than used: AD-01U
> declined to make `AC-34` its next question partly because *"If `AC-35` resolves to (b), some of `AC-34`
> changes shape."* `AC-35` has resolved to (a), so `AC-34`'s shape is now stable. That REMOVES a reason not
> to ask it — and [§11.2](#112-the-one-next-question) still does not ask it, for a different reason that is
> stated there and not assumed.**

---

## 7. The audit-reconstruction chain, END TO END

> ⟦ARCHITECT ANALYSIS⟧ **The owner has restated their own chain in this message, with TWO decisions in it
> where `PO-Q2·c`'s had one. It is compared term by term against `Q-AR`'s thirteen links AS AD-01U's `A-55`
> would amend them. `PF-34(2)`'s discipline is applied in both directions: *"for example"* does not licence
> the architect adding a term the owner did not name, and does not licence assuming every term the owner DID
> name already has a home.**

**The owner's chain, from `PO-V1` and `PO-V2` read together with `PO-U1·10`:**

> **Client → CP Registration → Inquiry → CP claim → pre-booking attribution decision → Booking → CP clash
> (if any) → Site Head commission-allocation decision → resulting CP allocation → commission eligibility →
> approval → payout / reconciliation.**

| # | Owner's term | `Q-AR` link | Status |
|---|---|---|---|
| **1** | **Client** | **link 1** | **PRESENT. GATED — `AC-21` (Person or work record) and `Q10`/`M-5`'s uniqueness half OPEN** |
| **2** | **CP Registration** | **links 2, 3, 4** | **PRESENT. RECOMMENDED, NOT APPROVED — AD-01N at `VALIDATE`. `AC-9`/`T-9` OPEN on link 3; `AC-7`'s second half OPEN on link 4** |
| **3** | **Inquiry** | **link 5** | **PRESENT and ESTABLISHED** |
| **4** | **CP claim** | **links 6, 7** | **PRESENT. Link 6's CARRIER unratified (gate 2); link 7 is the append-only claim set and is ESTABLISHED AS A RECORD** |
| **5** | ⚠ **pre-booking attribution decision** | **link 8** (+ **link 9** for `Q-OV`) | **PRESENT — and NEWLY CONFIRMED TO DESCRIBE AN ACT THAT OCCURS, which AD-01U could not say.** ⚠ **BACKED ON ONE SUBSTRATE ONLY: a business-record discipline, NOT an `NF-27` audit event, while `PO-Q2·b` names both conjunctively** → **`X-25`/`A-37`, priority raised a THIRD consecutive time** |
| **6** | **Booking** | **link 10** | **PRESENT. `AC-5` OPEN** |
| **7** | ⚠ **CP clash (if any)** — post-booking | **link 7, READ A SECOND TIME** | ⟦ARCHITECT ANALYSIS⟧ **PRESENT, AND NO NEW LINK IS REQUIRED — CHECKED rather than assumed.** **The post-booking surfacing at `PO-U1·2` is not a DECISION and `Q-AR`'s links are decisions and facts. The claim set that link 7 carries is the same object read at a second time for a second purpose. What the chain must be able to say is WHICH STAGE a reading belongs to, and that is supplied by the DECISIONS on either side — link 8 for Stage 1, `A-55`(i) for Stage 2 — not by a new clash link.** **NO TERM IS INVENTED** |
| **8** | **Site Head commission-allocation decision** | ⚠ **`A-55`(i) — NAMED AND NOT MADE** | **ABSENT FROM `Q-AR` AS IT STANDS.** ⟦PRODUCT-OWNER DECISION⟧ **The term is the owner's — `PO-U1·10`, and now `PO-V1·S2`.** **Backed by NEITHER of `PO-Q2·b`'s substrates** |
| **9** | **resulting CP allocation** | ⚠ **`A-55`(iii)**, with the basis at **`A-55`(ii)** | **ABSENT FROM `Q-AR` AS IT STANDS. Owner-named at `PO-U1·9`/`·10` and `PO-V1·X`** |
| **10** | **commission eligibility** | **link 11** | **PRESENT. RECOMMENDED, NOT APPROVED. `AC-22` OPEN** |
| **11** | **approval** | **link 12** | **PRESENT AS A SOURCE PATH** — ⟦SOURCE⟧ §32, §40, §50; consolidated §22's accrual/payout separation |
| **12** | ⚠ **payout / reconciliation** | **link 12**, plus the admitted exception term between links 11 and 12 | ⟦ARCHITECT ANALYSIS⟧ **PRESENT IN SUBSTANCE — the CP Ledger is link 12's reconciliation substrate and ⟦SOURCE⟧ §33's clawback and §34's TDS run on it.** ⚠ **ONE HONEST NOTE: the owner's word *reconciliation* is not a separate `Q-AR` term, and ⟦SOURCE⟧ §33 can make a payout negative YEARS after the fact while ⟦SOURCE⟧ R6's retention is *"12 months hot"*. Whether the chain must remain reconstructable THROUGH a clawback is `AC-31`'s duration limb, which is UNTOUCHED and NOT ANSWERED. NO RETENTION PERIOD IS PROPOSED** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION.**
>
> > **THE CHAIN IS NOW FULLY NAMED END TO END — every term of the owner's restated chain has a home, and
> > NOTHING IS MISSING AS A TERM.** **`A-55`'s three links, named by AD-01U and NOT MADE, are what close the
> > gap, and they are not re-derived here: this document confirms them against a chain the owner has
> > restated in a second, independent form, which is the strongest available check that `A-55` named the
> > right three.**
> >
> > ⚠ **WHAT IS MISSING IS NOT A TERM BUT A SUBSTRATE.** **Link 8 is backed on one of two; `A-55`'s three
> > are backed on neither. `PO-Q2·a` is OWNER-RATIFIED AND NOT YET SATISFIABLE, and the distance has not
> > closed since AD-01U — it has held constant while the number of decisions requiring reconstruction has
> > gone from one to two.** **`X-25`/`A-37`'s priority rises a THIRD consecutive time.**
>
> **What is NOT admitted, stated with equal force.** ⟦PRODUCT-OWNER DECISION⟧ **NO EVIDENCE LINK, NO
> EVIDENCE FIELD, NO EVIDENCE-SCORE TERM AND NO SUPPORTING-DOCUMENT TERM IS ADMITTED TO `Q-AR` ANYWHERE.**
> **`PO-U1·7`/`·11` and `PO-V1·X` place the reasoning OUTSIDE BMexa; `PO-U3·a` forbids the score.**
> **`PO-Q1·b`'s mandatory evidence belongs to `Q-OV` at link 9 and stays there.** ⟦ARCHITECT ANALYSIS⟧ **And
> NO REGISTRATION-EXISTENCE DISCLOSURE TERM is admitted either: `C-XXII` is a read-side control and `Q-AR`
> is a reconstruction chain, and AD-01Q's distinction holds — the AUDITOR audience is not the CP audience.**

---

## 8. The determinations

### 8.1 Which open items this decision actually reaches

> ⟦ARCHITECT ANALYSIS⟧ **Every item below is checked INDIVIDUALLY. *"Unchanged"* means CHECKED AND
> UNCHANGED, never skipped. NOTHING is closed on the strength of an answer that does not reach it, and no
> item is closed out of momentum because a neighbouring one closed.**

| Item | Effect of `PO-V1`/`PO-V2` |
|---|---|
| **`AC-35`** — does the pre-booking §11 attribution resolution still occur | ⟦PRODUCT-OWNER DECISION⟧ **CLOSED. IT DOES. OPTION (a).** **The FIFTH item in the series closed by direct owner ruling** — [§1.1](#11-the-source-of-these-decisions) |
| **`AC-20`** — may the second registration be CREATED | ⟦PRODUCT-OWNER DECISION⟧ **CLOSED. IT MAY.** **The SIXTH direct owner ruling, on an item OPEN since AD-01O and carried by SIX consecutive documents** — [§4.2](#42-ac-20-closed--and-what-that-closure-does-and-does-not-carry) |
| **`AC-13`** — override scope, self-interest controls, CP visibility | ⚠ **ONE OF SEVEN LIMBS CLOSED; SIX OPEN; AND ONE NEW LIMB ADDED.** **Limb (v) — does the portal disclose that a DIFFERENT CP holds a live registration — CLOSED BY `PO-V2·c`. Limb (viii) — what MAY CP B be told when their claim is resolved against them — ADDED and OPEN.** **`AC-13` ITSELF IS NOT CLOSED** — [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not), `A-59` |
| **`AC-15`** — what rule resolves a CP-vs-CP contest | **CONTENT LIMB STAYS CLOSED at AD-01U. NOT REOPENED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED for a specific hazard: `PO-V2·d` routes a competing registration to *"the established clash/attribution process"*, which might be read as naming a rule. It does not — it names a PROCESS, and `PO-U1·5 … ·8` already established that the process has no stated rule** |
| **`AC-34`** — rounding / residual / sum behaviour | **UNCHANGED, NOT ANSWERED, NOT NARROWED. Its SHAPE is now stable because `AC-35` resolved to (a)** — [§6.3](#63-what-this-check-does-not-decide) |
| **`AC-26`** — single-use or repeatable grounding power | ⚠ **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED AGAINST A SPECIFIC TEMPTATION AND RULED OUT.** **`PO-V2·d`'s *"a registration may ground a claim"* reproduces `PO-P1`'s exact singular construction, which is what `AC-26` was minted to resolve** — [§0.7](#07-the-two-items-the-owner-singled-out-ac-26-and-ac-6). **`Y-1`, `Y-3`, `AA-1`, `K-26`, `T-5` likewise NOT resolved, NOT narrowed, NOT branched** |
| **`AC-6`** — boundary convention α/β; is `N = 0` legal | ⚠ **UNCHANGED, NOT RESOLVED, NO CONVENTION SELECTED — and CHECKED FOR A FOURTH MONEY-BEARING CONSUMER: THERE IS NONE, AND ONE POTENTIAL CONSUMER IS FORECLOSED.** **`PO-V2·a` permits CP B's registration UNCONDITIONALLY, so no liveness boundary is evaluated; had the answer been *blocked at the door*, the cross-CP gate would have become a fourth consumer.** **AD-01T's DISCREPANCY NOTICE is NOT discharged and is carried forward unchanged for a SECOND consecutive document** |
| **`AC-29`** — until when may an override be performed | **UNCHANGED, NOT ANSWERED — and SHARPER.** ⟦ARCHITECT ANALYSIS⟧ **The stage mapping supplies a candidate landmark and NO answer. NO BOUNDARY IS PROPOSED, PREFERRED OR IMPLIED** — [§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages) |
| **`AC-30`** — what an override's decision may SAY | **UNCHANGED, NOT ANSWERED.** **The hazard AD-01U named is now a CATEGORY error rather than merely a permission error; whether the answer should SAY so is the owner's** |
| **`AC-27`** and **`AC-33`** — separation of duties across four Site-Head-shaped acts | **UNCHANGED, NEITHER ANSWERED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: the stage mapping tells you which axis each of the four sits on and says NOTHING about whether one role should hold several. The `PO-T2` / `PO-U1·4` default-holder asymmetry that AD-01U folded into `AC-33`'s second limb is UNTOUCHED — `PO-V1`/`PO-V2` name no holder for anything** |
| **`AC-28`** — the three-way evidence asymmetry | **UNCHANGED IN WHAT IT ASKS.** **`PO-V1·X`'s *"No mandatory evidence-document upload"* RESTATES the leg that was already owner-fixed and touches neither other leg. NO EVIDENCE STANDARD IS PROPOSED FOR ANY OF THE THREE** |
| **`AC-31`** — who the auditor is, and for how long | **UNCHANGED, NOT ANSWERED — and its DURATION limb is MORE VISIBLE**, because the owner's chain now ends *"payout / reconciliation"* and ⟦SOURCE⟧ §33's clawback can run years after ⟦SOURCE⟧ R6's hot-retention window. **NO RETENTION PERIOD IS PROPOSED** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **`AC-32`** — should any SEPARATE anti-abuse control exist | ⚠ **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED, because permitting a second CP's registration superficially widens the farming surface.** ⟦ARCHITECT ANALYSIS⟧ **It does not change what `AC-32` ASKS. `PO-R2` records the owner's accepted anti-abuse tradeoff and `PO-V2·d`'s *"no special weight"* is the same per-case control AD-01R `PF-64` named. The cost `PO-R2` accepts is NOT retired, NOT reduced and NOT offset, and `C-XVI` at owner status still forbids a systemic bar. OFF the critical path** |
| **`AC-25`** — automatic mint vs discretionary act; is an unopposed claim adjudicated | **BOTH HALVES UNCHANGED, NEITHER ANSWERED, NO DEFAULT IMPLIED — CHECKED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-V1·S1` confirms the adjudication OCCURS; it names no actor for claim CREATION and says nothing about the unopposed case. `PO-S1·9` already governs the second half at owner status and already does not close it** |
| **`AC-12`** — may the eligibility exception run in reverse | **UNCHANGED, NOT ANSWERED — CHECKED and unaffected. `NF-24` excepts an ELIGIBILITY determination; nothing here reaches it** |
| **`AC-22`**, **`AC-24`**, **`AC-9`/`T-9`**, **`AC-5`**, **`AC-7`**, **`AC-8`**, **`AC-10`**, **`AC-11`**, **`AC-16`**, **`AC-17`**, **`AC-18`**, **`AC-19`** | **UNCHANGED — each CHECKED INDIVIDUALLY and each RULED OUT as unaffected.** ⟦ARCHITECT ANALYSIS⟧ **`AC-18` (re-registration cadence) and `AC-22` (which registration governs conjunct (iii)) were checked with particular care because `PO-V2` is a registration decision: `AC-18` is about ONE CP's successive registrations on ONE triple and `PO-V2` is about TWO CPs on TWO triples; `AC-22` is about WHICH of a CP's OWN registrations governs, and running conjunct (iii) for two CPs does not change that. NEITHER is narrowed** |
| **`AC-21`** with **`Q10`**/**`M-5`**'s uniqueness half · **`AC-23`** with **`Q11`** (still BLOCKING) · **`AA-2`** | **UNCHANGED.** ⟦ARCHITECT ANALYSIS⟧ **`AC-21` was checked specifically: `PO-V2·b` says the registration is scoped to *"CP × Client × Project"* and uses the word *Client*, which is exactly the word AD-01O found underdetermined between the Person and the work record. `PO-V2·e` expressly forbids reading it as a new structure, so it is NOT read as resolving the middle term. `AC-21` is OPEN and `Q-AR` link 1 stays gated** |
| **`AC-1`** and **`N-4`** | **UNCHANGED. Both stay NARROWED-NOT-CLOSED. No disposition reason or tap is reached. NO VALUE IS PROPOSED, NAMED, RANKED OR IMPLIED** |
| **`AC-14`** = Option A · **`C-XVI`** · **`P-G`** · **`AC-4`** · **`X-5`** | ⟦PRODUCT-OWNER DECISION⟧ **ALL STILL CLOSED / RATIFIED / DISCHARGED, UNTOUCHED — CHECKED, not assumed.** **`C-XVI` is RESTATED by `PO-V2·d` for the owner's SEVENTH time. `P-G`'s ratification is not disturbed; its INCOMPLETENESS (`A-57`) is unchanged in content and now unconditional. `(L-6·ground)` is not reopened** |
| **`AC-2`** — an ex-gratia route without an attribution claim | ⚠ **UNCHANGED IN WHAT IT ASKS, and ENLARGED BY ADJACENCY, which is recorded and is NOT an answer.** ⟦ARCHITECT ANALYSIS⟧ **`AC-2` asks about a pay-anyway route where there is NO CLAIM AT ALL. `AC-36` asks about a claim that EXISTS AND LOST. They are different populations and must not be merged** — [§12.1](#121-the-new-question-ac-36) |
| **`X-24`**/**`A-38`(a)** · **`X-26`**/**`A-56`** — `PO-P10`'s incomplete enumeration | **UNCHANGED AND NOT FILLED — and now JOINED BY A THIRD INSTANCE OF THE SAME DEFECT IN A DIFFERENT LIST** → **`X-27`**, `A-61`. **Only the owner may extend their own enumeration** |
| **`X-25`**/**`A-37`** — `NF-27`'s missing audit events | **NOT DISCHARGED, NOT NARROWED — PRIORITY RAISED A THIRD CONSECUTIVE TIME** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **`A-54`** (the `K-48` cardinality correction) · **`A-55`** (`Q-AR`'s three links) · **`A-56`** · **`A-57`** | **ALL FOUR STAND, ALL FOUR STILL NAMED AND NOT MADE.** ⚠ **`A-57`'s first limb is now UNCONDITIONAL** — [§1.1](#11-the-source-of-these-decisions). **`A-55` is INDEPENDENTLY CONFIRMED against the owner's restated chain** — [§7](#7-the-audit-reconstruction-chain-end-to-end) |
| **`O-U`**, **`OF-4`**, **`C-XI`**, **`C-XIII`**, **`C-XV`**, **`PF-6`**, **`PF-23`** | **NOT ENGAGED and NOT RATIFIED.** ⟦ARCHITECT ANALYSIS⟧ **`O-U`'s RULE needs no amendment; only its stale `AC-20` cross-reference does** → `A-58`, [§4.1](#41-did-o-u-need-changing-worked-rather-than-assumed). **`OF-4`'s determinacy is intact and was CHECKED rather than assumed** |
| **`V-7`** · **`G-8`** · **`L-25`** | **NOT REOPENED.** ⟦ARCHITECT ANALYSIS⟧ **`V-7`'s fail-closed projection is the MECHANISM `C-XXII` reuses and is neither widened nor ratified. `L-25` — a management-created fact must be visibly distinguishable from one produced in the ordinary course — is worth one line: `C-XXII` restricts a CP's read and does not touch that distinction** |
| **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`** · **`Q0-a`, `Q0-b`, `Q0-d`, `Q0-e`** · **`AC-3`, `AC-10`, `AC-16`, `AC-17`, `AC-19`** | **UNCHANGED — each carried forward and each accounted for. NONE resolved, NONE narrowed, NONE enlarged.** ⟦SETTLED⟧ **`V-4` is the cheapest unblocking question in the register for the THIRTEENTH consecutive document. `Q0-d` stays OFF the critical path. `Q0-c` stays ANSWERED with `AC-14`** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start. NO new input is named beyond AD-01U's three** — the per-CP portion, the basis-as-entered question under §25/§26 amendment, and `AC-34`. ⟦SETTLED⟧ **It owns every formula, rate, slab, percentage VALUE, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING here touches any of them** |

### 8.2 The contradiction search, run in full

> ⟦ARCHITECT ANALYSIS⟧ **Run rather than asserted. ONE item is allocated and the rest are shown being ruled
> out.**

| Rule | Result |
|---|---|
| ⚠ **`PO-U3·d`** — the eight-term preserved-distinction list, and AD-01U §1.3's characterisation of it | ⚠ **CONTRADICTED — A THIRD INSTANCE OF THE `X-24`/`X-26` DEFECT, IN A DIFFERENT LIST** → **`X-27`**, `A-61`. ⟦ARCHITECT ANALYSIS⟧ **`PO-U3·d`'s eight terms are: *registration validity / CP claim / clash detection / booking success / Site Head commission allocation / commission eligibility / commission approval / payout.* `PO-P10` level 5 is *Attribution — the resolved claim*, and `PO-U3·d`'s list DOES NOT CONTAIN IT: it has the CLAIM and the DETECTION and skips straight to booking success. AD-01U §1.3 characterised `PO-U3·d` as *"`PO-P10`'s discipline restated over an eight-term list"*, which is now known to be too strong — the restatement DROPS a level.** **While `AC-35` was open this was harmless, because the dropped level might not have named an occurring act. `PO-V1·S1` confirms it does. An implementer using `PO-U3·d` as the separation checklist would fail to separate Stage 1's DECISION from Stage 1's DETECTION, which is the one separation AD-01U's own `A`/`A′` split exists to hold.** **`PO-U3·d` REMAINS UNCHANGED AS A PROHIBITION; only the owner may extend their own enumeration, and `A-61` targets the ARCHITECT's characterisation, never the owner's clause** |
| ⟦SOURCE⟧ **§11** | **NOT CONTRADICTED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED in both directions. `PO-V1·S1` is §11's *"builder-side authorized leadership resolves attribution"* confirmed to happen. `PO-V2·c` NARROWS §11's *"do not expose sensitive competing claims unnecessarily"* from a standard to a rule for one fact, and a narrowing that selects a subset of a generic term's extension is not a contradiction of it — AD-01T `PF-85`'s test, reused** |
| ⟦SOURCE⟧ **§39** | **NOT CONTRADICTED — and one asymmetry is RECORDED rather than smoothed.** ⟦ARCHITECT ANALYSIS⟧ **§39's positive limb entitles a CP to *"attribution information"*. `PO-V2·c` withholds ONE fact that is arguably adjacent to it. The two are reconcilable because another CP's registration is that CP's information and not this one's — but §39 does not say so, which is exactly why `AC-13` exists and why [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not) closes only one limb** |
| ⟦SOURCE⟧ **§32, §33, §34, §40** | **NOT CONTRADICTED and NOT REACHED. AD-01U `PF-104`'s finding — commission splitting appears NOWHERE in the Master Spec — is UNCHANGED, UNDISCHARGED and NOT re-derived** |
| **`C-IV`**, **`K-18`**, **`K-9`/`K-10`**, **`K-17`**/§D.4, **`K-52`**/**`K-12`**, **`K-47`** | **NOT CONTRADICTED. ALL CONFIRMED** — [§3](#3-ad-01us-compatibility-finding-re-run-against-a-confirmed-two-stage-model) |
| **`C-XVI`** | **NOT BREACHED. RESTATED by `PO-V2·d` — the owner's SEVENTH statement — and EXTENDED IN TERMS to the cross-CP case, which is the owner extending their own rule and not the architect widening it** |
| **`C-XXI`** | **NOT BREACHED. CONFIRMED, and corollary (3) is now LOAD-BEARING rather than precautionary** — [§6.2](#62-the-divergence-case--checked-because-po-v1x-makes-it-an-expected-outcome). **STILL UNRATIFIED** |
| **`C-XX`** | **NOT BREACHED, NOT WIDENED, NOT NARROWED. STILL UNRATIFIED.** **Its decision is now CONFIRMED to be one that occurs, which AD-01U could not say** |
| **`C-IX`** | ⚠ **NOT BREACHED — AND ITS §88 BAR IS VINDICATED FOR THE SECOND TIME.** ⟦ARCHITECT ANALYSIS⟧ **`C-IX` held that a binding systemic precedence rule is a §88 AUTHORIZATION change to §11, not an architect's choice. AD-01O applied it to `AC-20` and declined to answer. The owner has now answered `AC-20` themselves — which is `C-IX`'s reservation working exactly as designed, one document after `PO-U1·5 … ·8` did the same for `AC-15`** |
| **`C-XVII`, `C-XVIII`, `C-XIX`** | **NOT BREACHED and NOT ENGAGED. ALL THREE remain UNRATIFIED and none is ratified, widened or narrowed here** |
| **`C-XI`** — registration is a TEMPORAL PROTECTION fact, never an ATTRIBUTION fact | **NOT BREACHED and CORROBORATED by `PO-V2·d`'s *"does not automatically create attribution"*** |
| **`C-XIII`** — a registration exists only by an explicit act | **NOT BREACHED and NOT ENGAGED. `PO-V2` permits an act; it does not create one** |
| **`O-U`** and **`OF-4`** | **NOT CONTRADICTED and NOT AMENDED IN THEIR RULE** — [§4.1](#41-did-o-u-need-changing-worked-rather-than-assumed). **One stale cross-reference** → `A-58` |
| **`NF-24`/`NF-25`/`NF-26`/`NF-27`/`NF-28`** | **NONE CONTRADICTED and NONE AMENDED.** **`NF-28`'s three conjuncts remain sufficient; `NF-27`'s gap is `X-25`'s and is not new** |
| **`PO-Q1`/`Q-OV`** | **NOT REPLACED, NOT SUBSUMED, NOT NARROWED, NOT WIDENED — and now precisely stage-mapped** — [§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages) |
| **`PO-R1`/`PO-R2`, `PO-S1`/`PO-S2`, `PO-T1 … PO-T3`, `PO-U1`/`PO-U2`** | **NONE CONTRADICTED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-U1·2` is PRECISIFIED BY ITS OWN AUTHOR at `PO-V1·S2` — the owner inserting the word *commission* into their own clause — which is a refinement and not a contradiction** |
| **`V-7`, `G-8`, `L-25`, `B-1`, `B-2`, `J-2`, `J-8`, `H-4`, `NF-9`, `C-V`, `C-VII`, `C-X`, `C-XII`, `C-XIV`, `C-XV`, `OF-6`, `L-6`, `K-22`, `K-26`, `T-5`, `L-25`** | **NOT ENGAGED. Each checked individually; each untouched; none reopened, narrowed, ratified or rejected** |

---

## 9. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands.

### 9.1 Amendments to Product-Owner decisions: NONE are proposed

> ⟦ARCHITECT ANALYSIS⟧ **Stated in its own subsection because it is the thing a reader will most want
> confirmed, and because this document's Part 0 exists to prevent exactly the error the opposite would be.**
> **`A-58 … A-61` all target ARCHITECT RECOMMENDATIONS, ARCHITECT REGISTER ROWS or ARCHITECT
> CHARACTERISATIONS.** **`PO-P10`'s enumeration and `PO-U3·d`'s list are both identified as incomplete —
> `X-24`, `X-26`, `X-27` — and NEITHER IS AMENDED, PROPOSED FOR AMENDMENT, OR FILLED. Only the owner may
> extend or correct their own clause, and `A-61` names the ARCHITECT's characterisation of `PO-U3·d`, never
> `PO-U3·d` itself.**

### 9.2 The four amendments, named and NOT made

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-58`** | **AD-01O §2.2's `O-U`(5); AD-01O §2.8(a)'s concurrency row; AD-01O §5's `AC-20` register row; AD-01O §6's gating list** | **A CLOSURE CORRECTION TO A CROSS-REFERENCE — NOT TO `O-U`'s RULE.** ⟦ARCHITECT RECOMMENDATION⟧ **`O-U`(1) … `O-U`(4) are UNCHANGED, UNAMENDED and SUFFICIENT: `O-U` is per-triple, a different CP is a different triple, and the cross-CP case was never barred by it.** **What is stale is `O-U`(5)'s final sentence — *"whether that should be permitted at creation is `AC-20` … both open, neither answered here"* — and AD-01O §2.8(a)'s *"Neither is answered"*, and AD-01O §5's `AC-20` row.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2·a`/`PO-V2·b` answer it: it IS permitted at creation.** ⟦ARCHITECT ANALYSIS⟧ **AD-01O's own reasoning is NOT falsified and is VINDICATED — it declined to answer because *"blocking it would be a systemic precedence rule, which `C-IX` holds is a §88 AUTHORIZATION change"*, and the owner has now made the §88 decision. `AC-15`'s cross-reference in the same clause stays as it is: its content limb is closed at AD-01U and that closure is AD-01U's to record, not AD-01O's** |
| **`A-59`** | **AD-01N §J's `AC-13` register row; AD-01O §5's `AC-13` row; AD-01Q §3.13's three-item enlargement; AD-01T §3.8's and AD-01U §5.8's `AC-13` rows** | **A SCOPE CORRECTION IN TWO DIRECTIONS TO ONE COMPOUND ITEM — NOT A CLOSURE OF IT.** ⟦PRODUCT-OWNER DECISION⟧ **(i) `AC-13`'s AD-01O-added limb — *"whether it discloses that a different CP now holds a live registration over the same client and Project"* — is CLOSED by `PO-V2·c`, and must be recorded as CLOSED rather than carried forward as open.** ⟦ARCHITECT ANALYSIS⟧ **(ii) `AC-13` GAINS a new limb in the same breath: given non-disclosure, what MAY a CP be told when their claim is resolved against them? Folded in and NOT renumbered, on AD-01Q's and AD-01O's own precedent.** **`AC-13` IS NOT CLOSED and NO PORTAL SURFACE, FIELD, PROJECTION OR DISCLOSURE LIST IS DESIGNED** — [§4.5](#45-what-of-ac-13-is-closed-and-what-is-not) |
| **`A-60`** | **AD-01U §2.1.6's conclusion; AD-01U §3's model table (the `A′` column and its ⚠ markers); AD-01U §5.3's rows `·4` and `·7`; AD-01U §6.1's gate 0; AD-01U §8.1's `AC-35`** | **A STATUS CORRECTION, IN FIVE PLACES, TO ONE PROPOSITION — AND NOT A CONTENT CORRECTION ANYWHERE.** ⟦PRODUCT-OWNER DECISION⟧ **AD-01U reached its conclusion and then said, correctly and in terms, *"it is an architect's reading of an owner's silence, and this series does not close owner silences."* `PO-V1·S1` closes the silence in the owner's favour.** **The conclusion's WORDS do not change; its LABEL does — from ⟦ARCHITECT ANALYSIS⟧ resting on `AC-35` to CONFIRMED BY `PO-V1·S1`. The ⚠ `AC-35` markers on `P-G` steps `·4`/`·7`, on the `A′` column's *"WHEN"* row, and on gate 0 are DISCHARGED.** ⟦ARCHITECT ANALYSIS⟧ **This is named as an amendment rather than left implicit because a reader of AD-01U alone would carry gate 0 forward as the head of the list, and it is not** |
| **`A-61`** | **AD-01U §1.3's `PO-P10` row** | **A CHARACTERISATION CORRECTION TO ONE SENTENCE.** **AD-01U §1.3 reads *"`PO-U3·d`, which is `PO-P10`'s discipline restated over an eight-term list."*** ⟦ARCHITECT ANALYSIS⟧ **`PO-U3·d`'s eight terms do not contain `PO-P10` level 5 — *Attribution, the resolved claim* — so the restatement DROPS a level rather than restating seven over eight** → **`X-27`.** **`PO-U3·d` ITSELF IS NOT AMENDED, NOT PROPOSED FOR AMENDMENT AND NOT FILLED: only the owner may extend their own enumeration, and `PO-U3·d`'s force AS A PROHIBITION is undiminished — a list that omits a distinction does not thereby permit conflating it, because `PO-P10` still forbids that** |

> ⟦ARCHITECT ANALYSIS⟧ **FOUR. Candidates that were CONSIDERED and RULED OUT, shown so the count is
> checkable rather than asserted:**
>
> | Candidate | Why it is NOT an amendment |
> |---|---|
> | **AD-01O `O-U`(1) … `O-U`(4)** | **NOT AMENDED. The rule is per-triple and a second CP is a different triple by construction. Amending it to say so would add words that change nothing** — [§4.1](#41-did-o-u-need-changing-worked-rather-than-assumed) |
| **AD-01N `NF-28`, `NF-24`, `NF-25`, `NF-26`** | **UNTOUCHED. Sufficient as written under the two-stage lock, re-checked rather than assumed** — [§6.1](#61-the-five-representability-questions-each-answered) |
| **AD-01U `C-XXI`** | **NOT AMENDED and NOT WIDENED. Its seven corollaries stand unchanged; corollary (3) becomes load-bearing, which is a change in its importance and not in its text** |
| **AD-01T `C-XX`** | **NOT AMENDED. `A-57`(iii) already requires it to state that it does not reach the allocation, and that amendment is AD-01U's and is not restated here** |
| **AD-01Q `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, §3.3, §3.4, `Q-AR`** | **UNTOUCHED. `Q-OV` is neither widened nor narrowed; the stage mapping describes it and does not change it. `Q-AR`'s amendment is `A-55` and is AD-01U's** |
| **AD-01J `C-IV`; AD-01K `K-18`, `K-9`, `K-10`, `K-48`** | **NOT AMENDED HERE. `K-48`'s cardinality correction is `A-54` and is AD-01U's; nothing here adds to it** |
| **AD-01G `V-7`** | **NOT REOPENED, NOT WIDENED, NOT RATIFIED. `C-XXII` reuses the mechanism and supplies content for one item; the mechanism is unchanged** |
| **⟦SOURCE⟧ §11, §39** | **NOT AMENDED and CANNOT BE by this document.** ⟦ARCHITECT ANALYSIS⟧ **Whether the spec text should record `PO-V2·c` is a §88 matter for the owner and is NOT proposed here** |

### 9.3 No prior document was silently edited

> ⟦ARCHITECT ANALYSIS⟧ **Stated as a checked fact rather than as an intention, on AD-01Q's, AD-01R's,
> AD-01T's and AD-01U's precedent.** **Files `00-*.md` through `03u-*.md` are byte-for-byte as they were
> before this document was written. Every amendment above is NAMED AND NOT MADE. Every quotation above is a
> quotation and not a rewrite.** **In particular AD-01O and AD-01U are NOT edited, notwithstanding that
> `A-58` targets four places in AD-01O and `A-60`/`A-61` target six in AD-01U.**

### 9.4 The register after this document

| | Count |
|---|---|
| **Amendments NAMED AND NOT MADE** | **61** — `A-1 … A-61`, across fourteen documents |
| **Of which CONTENT-RATIFIED by the owner but still not made** | **FIVE** — `A-32` (AD-01R), `A-39` (AD-01S), `A-38`(b) (AD-01T), and **`A-58`** and **`A-59`(i)** added here, both of which record owner rulings |
| **Constraints** | **`C-I … C-XXII`** — `C-XXII` minted here. **ONE of the twenty-two is at owner status (`C-XVI`)** |
| **Contradictions** | **`X-1 … X-27`** — `X-27` minted here |
| **Open questions** | **`AC-1 … AC-36`** — `AC-36` minted here; **`AC-35` and `AC-20` CLOSED here**; `AC-4`, `AC-14`, `AC-15`'s content limb previously CLOSED; `AC-13` ONE LIMB closed and ONE ADDED; `AC-1` and `N-4` NARROWED-NOT-CLOSED |
| **Findings in the shared series** | **`PF-1 … PF-141`** |
| **Items closed by DIRECT PRODUCT-OWNER RULING** | **SIX** — `AC-14`, `C-XVI`, `P-G`, `AC-15`'s content limb, **`AC-35`**, **`AC-20`** |

---

## 10. The four lists, exactly as the owner asked

> ⟦ARCHITECT ANALYSIS⟧ **Four distinct labelled lists, not prose. Nothing appears on more than one list, and
> the boundary between list (a) and list (b) is the single most important line in this document — it is what
> [§0](#0-part-0--the-product-owner-question-ledger-audit) exists to keep honest.**

### 10.1 (a) LOCKED Product-Owner decisions

1. ⟦PRODUCT-OWNER DECISION⟧ **`PO-N1 … PO-N9`** — the registration record, its immutability, non-reset, the eligibility test, the Site Head eligibility exception (AD-01N).
2. ⟦PRODUCT-OWNER DECISION⟧ **`PO-O1 … PO-O14`** — revisit vs new registration; expiry; immutability; the non-automaticities (AD-01O).
3. ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1 … PO-P12`** — registration as attribution BASIS; `PO-P10`'s seven levels; the citation requirement (AD-01P).
4. ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1`** — the Site Head attribution/clash OVERRIDE, with mandatory reason AND mandatory supporting evidence (AD-01Q).
5. ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2`** — every CP attribution and commission decision must be fully reconstructable, from immutable linked records AND audit events (AD-01Q). **NOT YET SATISFIABLE.**
6. ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1`/`PO-R2`** — `AC-14` = Option A: an invalid-side closure does not consume or invalidate a registration; plus the recorded anti-abuse tradeoff (AD-01R).
7. ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1`/`PO-S2`** — `C-XVI` = No Special Weight, in ten clauses; the preserved chain (AD-01S).
8. ⟦PRODUCT-OWNER DECISION⟧ **`PO-T1`** — the ten-step sequence, RATIFIED IN FULL in its order and its actors; **`PO-T2`** — the step-7 decision-maker is the Site Head / Project Head; **`PO-T3`** — the four-bullet authority model (AD-01T).
9. ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1·1 … PO-U1·12`, `PO-U2`, `PO-U3`** — the post-booking allocation decision; the A/B/C taxonomy; the prohibitions and the preserved distinctions (AD-01U).
10. ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`** — **pre-booking CP attribution exists, is independent of commission, serves ownership / CP performance / conversion reporting / operational visibility / historical attribution, and survives an Inquiry that never books** (THIS DOCUMENT — **NEW**).
11. ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S2`/`PO-V1·X`** — **post-booking commission allocation is a SEPARATE mechanism; the two must not be merged; the allocation may differ from the attribution; percentage or amount; no mandatory evidence upload** (THIS DOCUMENT).
12. ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2·a … PO-V2·e`** — **CP B may register the same Client × Project while CP A's registration is live; the existence of CP A's registration must NOT be disclosed to CP B; the competition is handled by the established clash/attribution process; registration has no special weight; no new registration structure** (THIS DOCUMENT — **NEW**).

### 10.2 (b) ARCHITECT-DERIVED rules — RECOMMENDED, NOT APPROVED, NOT OWNER DECISIONS

1. ⟦ARCHITECT RECOMMENDATION⟧ **`C-I … C-XV`, `C-XVII`, `C-XVIII`, `C-XIX`** — all unratified. `C-XV` is gate 2's head.
2. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XX`** — the ordinary attribution/clash decision as a PERMISSION (AD-01T). **Its WHO is `PO-T2`'s; its FORM is the architect's.**
3. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`** — the allocation decision as a distinct decision point and a fourth permission (AD-01U). **Its CONTENT is `PO-U1`/`PO-U2`'s; its FORM is the architect's.**
4. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXII`** — the non-disclosure control as a fail-closed authorization-boundary projection (THIS DOCUMENT). **Its CONTENT is `PO-V2·c`'s; its FORM is the architect's.**
5. ⟦ARCHITECT RECOMMENDATION⟧ **`O-U`** and **`OF-4`** — the per-triple uniqueness rule and the determinacy it buys (AD-01O).
6. ⟦ARCHITECT RECOMMENDATION⟧ **`P-G`'s expression**, **`PF-6`**, **`PF-23`** — gate 2's remaining limbs. **`P-G`'s ORDER and ACTORS are ratified by `PO-T1`; its written EXPRESSION is the architect's and is incomplete** (`A-57`).
7. ⟦ARCHITECT RECOMMENDATION⟧ **`Q-OV`**, **`Q-AR`**, AD-01Q §3.3's minimum field set and §3.4's permission — all unratified (gate 3).
8. ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`, `NF-25`, `NF-26`, `NF-27`, `NF-28`** — AD-01N at `VALIDATE`.
9. ⟦ARCHITECT RECOMMENDATION⟧ **`K-9`, `K-10`, `K-17`, `K-18`, `K-48`, `K-52`, `C-IV`, `J-25`, `J-26`** — ⚠ **`K-9`/`K-10` are now CORROBORATED by `PO-V1·S1` and are NOT thereby ratified.**
10. ⟦ARCHITECT RECOMMENDATION⟧ **The AXIS 1 / AXIS 2 model at [§2](#2-the-two-axes)** and **the `Q-OV` / `C-XXI` stage mapping at [§5](#5-q-ov-versus-the-allocation-decision-mapped-onto-the-two-stages)** — **THIS DOCUMENT's own. The STAGES are the owner's; the MAPPING onto `A`/`A′`/`B`/`C` and onto the two mechanisms is the architect's.**
11. ⟦ARCHITECT RECOMMENDATION⟧ **`A-1 … A-61`** — sixty-one amendments NAMED AND NOT MADE.

### 10.3 (c) UNRESOLVED Product-Owner questions — the owner must answer these

1. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-36`** — **may a CP whose claim LOST Stage 1 be allocated a share at Stage 2** (NEW — [§12.1](#121-the-new-question-ac-36)). **This is [§11.2](#112-the-one-next-question)'s question.**
2. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-34`** — rounding, residual, sum-to-100, minimum share; allocation on a claim that fails `NF-28`.
3. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-6`** — boundary convention α vs β; is `N = 0` legal. **TRIPLY money-bearing. AD-01T's DISCREPANCY NOTICE STANDING AND UNDISCHARGED.**
4. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-26`** — is a registration's grounding power SINGLE-USE or REPEATABLE, inside the window and after a conversion.
5. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-13`** — six open limbs, including self-interest controls across four acts and the new limb `PO-V2·c` creates.
6. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-27`, `AC-33`** — separation of duties across four Site-Head-shaped acts; the `PO-T2`/`PO-U1·4` default-holder asymmetry.
7. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-28`, `AC-29`, `AC-30`, `AC-31`, `AC-32`** — the three-way evidence asymmetry; the override's time bound; what an override may say; who the auditor is and for how long; whether a separate anti-abuse control should exist.
8. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-2`, `AC-3`, `AC-5`, `AC-7`(second half), `AC-8`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-12`, `AC-16`, `AC-17`, `AC-18`, `AC-19`, `AC-21`, `AC-22`, `AC-23`, `AC-24`, `AC-25`** — the operand and governance tier.
9. ⟦BUSINESS DECISION REQUIRED⟧ **`Q11`** — **STILL BLOCKING.** **`Q10`**, **`M-5`**'s uniqueness half, **`AA-2`**, **`V-4`** (the cheapest unblocking question in the register for a THIRTEENTH consecutive document).
10. ⟦BUSINESS DECISION REQUIRED⟧ **`Q0-a`, `Q0-b`, `Q0-e`** — `Q0-e`'s list is now `A-1 … A-61`. **`Q0-d` stays OFF the critical path.**
11. ⟦BUSINESS DECISION REQUIRED⟧ **Whether `PO-P10`'s and `PO-U3·d`'s enumerations should be extended** — `X-24`, `X-26`, `X-27`. **Only the owner may extend their own lists.**

### 10.4 (d) FUTURE VALIDATION / BUILD questions — not blocking a decision, blocking a build

1. **Ratify or reject gate 2** — `C-XV`, `PF-6`, `PF-23`.
2. **Ratify or reject gate 3** — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission, `C-XX`, `C-XXI`, and now **`C-XXII`**.
3. **Ratify or reject `A-1 … A-61`** — sixty-one unmade amendments across fourteen documents (`Q0-e`).
4. **Discharge `X-25`/`A-37`** — `NF-27`'s missing audit events. **Priority raised a THIRD consecutive time; it now blocks the reconstruction of TWO decisions rather than one.**
5. **`M-9`** — the commission model. **STILL CANNOT START.** Its consumer list carries the per-CP portion, the basis-as-entered question under ⟦SOURCE⟧ §25/§26 amendment, and `AC-34`.
6. **⟦SOURCE⟧ §32/§33/§34/§40's singularity** — commission splitting appears NOWHERE in the Master Spec (`PF-104`). **Whether the spec text is updated is a §88 matter for the owner.**
7. **Approve or reject AD-01N, AD-01O, AD-01P, AD-01Q, AD-01R, AD-01S, AD-01T, AD-01U and this document.** **NONE is approved.**

---

## 11. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places these decisions in the **authorization rules**, **CP commission logic**, **financial
> rules**, **source-of-truth rules**, **tenant architecture** and **audit requirements** MUST-ASK columns.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§4](#4-the-registration-competition-reconciliation),
> [§8](#8-the-determinations) or [§9](#9-the-amendment-register) becomes approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

> ⟦ARCHITECT ANALYSIS⟧ **The call is reached FROM [§0](#0-part-0--the-product-owner-question-ledger-audit)'s
> assembled ledger rather than from the momentum of two good answers, and the ledger is what makes it
> `VALIDATE` rather than anything else. The honest report is both halves.**
>
> **THIS IS THE MOST PRODUCTIVE SINGLE EXCHANGE IN THE SUB-SERIES, AND THAT IS STATED PLAINLY RATHER THAN
> MINIMISED.** **TWO register items are closed by direct Product-Owner ruling in one message — the FIFTH and
> SIXTH such closures in fourteen documents — and one of them (`AC-20`) had been open for six consecutive
> documents and was not even the subject the owner was asked about. A named limb of `AC-13` closes as well.
> AD-01U's entire compatibility conclusion transfers intact and is now owner-backed at its weakest joint.**
>
> **AND IT IS STILL `VALIDATE`, for a reason the ledger supplies and rhetoric would not: ONE OF TWENTY-TWO
> CONSTRAINTS IS AT OWNER STATUS. Gate 2 and gate 3 are exactly as unratified as AD-01P left them. Sixty-one
> amendments stand named and not made. `PO-Q2·a` remains owner-ratified and not yet satisfiable, and the
> number of decisions it must reconstruct has doubled.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **Both decisions are the Project Owner's, both are internally
coherent, one answers the exact question it was asked and the other closes a question the architecture had
expressly reserved to the owner under `C-IX`. Neither contradicts any approved decision. `PO-V1` asks for
MORE separation between mechanisms rather than less, and `PO-V2` is explicitly framed as a ratification of
the existing model rather than a new structure.**

**Why not BUILD NOW.**

- ⚠ **`AC-36` IS NEW, MATERIAL AND UNANSWERED, AND IT DECIDES WHETHER STAGE 1 HAS ANY FINANCIAL CONSEQUENCE
  AT ALL.** **Until it is answered, `NF-28` conjunct (i) has two readings that differ in whether an
  attribution loss can be undone by an allocation** — [§12.1](#121-the-new-question-ac-36).
- **`AC-34` IS UNANSWERED** — residual, rounding and sum behaviour, expressly not invented here. **Its shape
  is now stable, which removes a reason AD-01U had for deferring it.**
- **`PO-U2·B`/`PO-V1·S2` STILL HAS NO RATIFIED MECHANISM, NO AUDIT SUBSTRATE AND NO PLACE IN `PO-P10`.**
  **`C-XXI` and `C-XXII` are new and unratified; `Q-AR` needs `A-55`'s three links; `PO-P10` and `PO-U3·d`
  both lack the levels (`X-26`, `X-27`); `NF-27` backs the allocation on neither substrate
  (`X-25`/`A-37`, priority raised a third time).**
- **SPLITTING A COMMISSION IS ABSENT FROM THE ENTIRE MASTER SPEC** — `PF-104`, undischarged. **`M-9` cannot
  start.**
- **Gate 2's three limbs and ALL of gate 3 are untouched.** **`C-XV`, `PF-6`, `PF-23`, `Q-OV`, `C-XVII`,
  `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3 and §3.4, `C-XX`, `C-XXI` — and now `C-XXII` — are ALL STILL
  UNRATIFIED.**
- **`AC-6` CARRIES AD-01T'S DISCREPANCY NOTICE FOR A SECOND CONSECUTIVE DOCUMENT AND IS TRIPLY
  MONEY-BEARING.** **`AC-26`, `AC-25` (both halves), `AC-22`, `AC-24`, `AC-27 … AC-33`, `AA-2`, `AC-21` and
  `AC-23` with `Q11` (BLOCKING) are all untouched.**
- **SIXTY-ONE amendments stand NAMED AND NOT MADE across fourteen documents.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. `AC-36` is one sentence from the owner. `AC-34` is a short financial ruling. Every remaining
gate is a signature or a short answer, and a further architect document would be analysis substituting for a
decision — AD-01L's own words, applied now for the tenth time.** **And shelving would waste what these two
answers have bought: the model is now settled in its SHAPE, and what remains is its CONSEQUENCES.**

### 11.1 The gating list after this decision

> ⟦ARCHITECT ANALYSIS⟧ **AD-01U's nine-item list, restated with gate 0 DISCHARGED, one item removed from
> gate 8 (`AC-20`), one added to gate 8 (`AC-36` promoted to the head), and gate 3 gaining one clause. The
> list moves from NINE to EIGHT, and that arithmetic is reported rather than fitted: TWO items closed and
> ONE opened.**

| # | Gate | Status |
|---|---|---|
| **0** | ⚠ **`AC-36`** — may a CP whose claim LOST Stage 1 be allocated a share at Stage 2 | ⟦BUSINESS DECISION REQUIRED⟧ **NEW, AND IT IS THE HEAD OF THE LIST.** ⟦ARCHITECT ANALYSIS⟧ **It sits above gate 2 for the same structural reason `AC-35` did: it decides whether an act the other gates sit around has a consequence.** → [§11.2](#112-the-one-next-question) |
| **~~0′~~** | ~~`AC-35`~~ — does the pre-booking resolution still occur | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED HERE. IT DOES. Option (a)** |
| **~~1~~** | ~~`AC-14`~~ | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED at AD-01R. LOCKED** |
| **2** | **`C-XV`**, **`PF-6`**, **`PF-23`** — AD-01P gate 2's three remaining limbs | **ALL ARCHITECT DERIVATIONS, ALL UNRATIFIED. `C-XV` remains this gate's head** |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission, `C-XX`, `C-XXI` — and now `C-XXII`** | **ALL UNRATIFIED.** **`C-XXII` carries `PO-V2·c` and is the only clause in the series for it** |
| **4** | **`AC-27`** and **`AC-33`** — separation of duties across four Site-Head-shaped acts | **NEITHER ANSWERED. Neither narrowed here** |
| **5** | **`AC-30`** — what an override's decision may SAY · **`AC-29`** — until when may it be performed | **NEITHER ANSWERED. Both SHARPER after the stage mapping, neither narrowed** |
| **6** | **`AC-13`** — SIX open limbs, including self-interest controls across four acts and the new limb `PO-V2·c` creates | ⚠ **ONE LIMB CLOSED HERE, SIX OPEN, ONE ADDED. `AC-13` moves UP from gate 7 because `PO-V2·c` has made its territory live rather than theoretical** |
| **7** | **`AC-28`** and **`AC-31`** — the three-way evidence asymmetry; who the auditor is and FOR HOW LONG | **NOT ANSWERED. `AC-31`'s duration limb is more visible** |
| **8** | **`AC-34`** · **`AC-25`** (both halves) · **`AC-12`** · **`AC-2`** · and the operand tier — **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s uniqueness half**, with **`AC-32`** as a VALIDATE / BUILD-LATER consideration | ⟦PRODUCT-OWNER DECISION⟧ **`AC-20` LEAVES THIS GATE — CLOSED HERE.** **The rest NOT ANSWERED. `Q11` still BLOCKING. `AC-6` carries AD-01T's discrepancy notice unchanged** |

**What VALIDATE means concretely.**

1. **Take `AC-36` first.** **It is one sentence from the owner and it decides whether an attribution loss is
   a financial fact or only a reporting one.**
2. **Then `AC-34`, in the same sitting** — it is the other half of making the allocation implementable, and
   its shape is now stable.
3. **Then gate 2, then gate 3** — now including `C-XXII`. **Gates 2 and 3 remain one sitting.**
4. **Then gates 4–8 in the commercial sitting that ELEVEN consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1, AD-01Q §6.1, AD-01R §6.1, AD-01S §6.1,
   AD-01T §6.1, AD-01U §6.1 and this section.
5. **Carry AD-01T's `AC-6` NOTICE forward unchanged.** **It is not discharged, it blocks no ratification, it
   remains triply money-bearing, and it has now survived two documents' worth of adjacent decisions.**
6. **Ratify or reject `A-58 … A-61` alongside `A-1 … A-57`** (`Q0-e`). **Sixty-one unmade amendments across
   fourteen documents. `A-58` and `A-59`(i) are the cheapest: both merely record rulings the owner has
   already given.**
7. **Nothing may be built meanwhile that presupposes an answer to any remaining gate.** ⟦SOURCE⟧
   consolidated **§30**. **Everything AD-01P §6.1(4), AD-01Q §6.1(5), AD-01R §6.1(6), AD-01S §6.1(6),
   AD-01T §6.1(7) and AD-01U §6.1(7) list as NOT-TO-BE-BUILT remains not-to-be-built, and this decision adds
   to that list: no precedence, seniority, priority or first-in-time ordering between two CPs'
   registrations; no rule, message, badge, count or differently-worded refusal by which one CP could infer
   another's registration; no disclosure to a CP of anything `AC-13` has not settled; no single permission
   spanning a decision on Axis 1 and a decision on Axis 2; no attribution derived from an allocation or
   allocation derived from an attribution; and no assumption either way about whether a Stage-1 loser may be
   allocated a share.**

### 11.2 The one next question

> ⟦BUSINESS DECISION REQUIRED — ONE QUESTION, AND ONLY ONE⟧
>
> **This is `AC-36`, stated in the same plain register the owner has been answering in. It is asked alone
> because a list of several is how a gating list stops being taken.**
>
> > **"Thank you — the two-stage picture is clear, and we have recorded it exactly as you gave it. Before
> > any booking, your people decide whose enquiry it is. After a booking, your Site Head decides how the
> > brokerage is split, and the two can come out differently.**
> >
> > **That last part raises one thing we cannot answer for you, and it is about the FIRST stage, not the
> > second.**
> >
> > **Take your own example and change one detail. Rahul's enquiry comes in. CP A and CP B both claim it.
> > Your people decide it is CP A's enquiry — CP B LOSES. Rahul then books.**
> >
> > **At that point your Site Head is looking at the split. Can they give CP B a share — 40%, or even all of
> > it — even though CP B lost the enquiry?**
> >
> > **(a) YES. Losing the enquiry decides who owns the customer and whose number it is in your reports. It
> > does not decide who gets paid. Your Site Head can still pay a partner who lost, if the commercial
> > reality says they earned it.**
> >
> > **(b) NO. Only partners whose claim stood up can be in the split. Losing the enquiry means losing the
> > money too, and the Site Head is dividing between the winners, not between all the claimants.**
> >
> > **Whichever you pick, tell us one more thing: if the answer is (a), what does 'losing' the enquiry then
> > actually cost a partner? And if it is (b), what should your Site Head do when the commercial reality is
> > that the losing partner genuinely brought the customer — do they have a route, or is the earlier
> > decision final?"**
>
> ⟦ARCHITECT ANALYSIS⟧ **Why this one, and not another — verified against this document's own findings and
> against [§0](#0-part-0--the-product-owner-question-ledger-audit)'s ledger rather than assumed, and the
> result is NOT the one this document expected.**
>
> | Candidate | Why it is not the question |
> |---|---|
> | **`AC-34`** (rounding / residual / sum) | **THE CLOSEST RUNNER-UP, AND IT WAS SERIOUSLY CONSIDERED — AD-01U named it as its own runner-up and its shape is now stable, which removes AD-01U's stated reason for deferring it.** **It is NOT the question because it is about the FORM of an allocation whose PERMITTED MEMBERSHIP is not yet fixed. You cannot usefully ask whether percentages must sum to 100 across a set whose membership is undetermined — `AC-36` decides who may be IN the set, and `AC-34` decides what the numbers across it must do. One is logically upstream of the other, and asking them in the wrong order wastes the answer** |
> | **`AC-6`** (boundary convention) | **CARRIED FORWARD AS AD-01T's NOTICE, unchanged, for a second document. It is one word, it is triply money-bearing, and it is the OLDEST genuinely-unanswered item in the register — which was checked, because the task of this section is to ask whether the oldest item should outrank the newest. It should not: it blocks NO ratification, it is a CONFIGURATION convention rather than a model question, and folding it into this question would make a two-part question out of a one-part one. AD-01T and AD-01U each declined it for the same reason and the reason has not changed. IT IS NOT FORGOTTEN AND IT IS NOT DISCHARGED** |
| **`AC-26`** (single-use or repeatable grounding) | **GENUINELY OPEN, checked at source, and survived a temptation in this document's own material. It is NOT the question because it decides how many CLAIMS one registration may produce, which is upstream of everything here but is not BLOCKED by anything here — it has waited six documents without blocking a ratification, and `AC-36` blocks one now** |
| **`AC-13`'s six remaining limbs** | **NEWLY LIVE rather than theoretical, and promoted to gate 6. But they are DISCLOSURE questions about decisions whose CONSEQUENCES `AC-36` fixes. Asking what a losing CP may be told, before knowing whether losing costs them money, asks the smaller question first** |
| **`AC-20`, `AC-35`** | **CLOSED HERE. Neither is a candidate** |
| **Gate 2's and gate 3's limbs, including `C-XXII`** | **RATIFICATIONS of material already written in full. The owner can sign or decline each; nothing must be authored. `C-XXII` in particular is a one-line control the owner has already stated in substance** |
| **`AC-27`/`AC-33`, `AC-28 … AC-32`** | **Governance refinements of authorities that all already exist. They sharpen gates 4–7; they block nothing that `AC-36` does not block first** |
>
> **And the positive reason, stated once.** ⟦ARCHITECT ANALYSIS⟧ **`AC-36` EXISTS ONLY BECAUSE `PO-V1` WAS
> GIVEN. While `AC-35` was open, nobody could ask what an attribution loss costs, because nobody knew
> whether attribution was decided at all. Now both stages are certain AND the owner has said in terms that
> they may diverge — and the moment divergence is permitted, the question *"how far may they diverge?"*
> becomes unavoidable.** **It bears on `C-XVI` corollary 2 (losing must be a reachable, recorded, PERMANENT
> outcome), on `NF-28` conjunct (i) (whose claim-set answer-bearer has two readings), on `K-9`'s second
> direction, on `PO-U3·c`, and on the entire point of Stage 1 — five places, which is more than any other
> open item reaches. And it is the owner's alone: ⟦SOURCE⟧ §88 puts it in the CP commission logic and
> financial rules MUST-ASK columns, and `C-IX` forbids the architect supplying it.**

---

## 12. Remaining open items

### 12.1 The new question, `AC-36`

> ⟦BUSINESS DECISION REQUIRED — `AC-36`⟧
>
> **May a CP whose attribution claim LOST at Stage 1 be allocated a share of the commission at Stage 2 — and
> if so, what does losing Stage 1 then cost that CP?** **Specifically: does `NF-28` conjunct (i)'s
> answer-bearer — *"the Inquiry's claim set"* — admit EVERY claim in the set to the eligibility test, or only
> those with standing after the attribution resolution? And is a Stage-1 loss a permanent financial
> exclusion, a reporting outcome with no financial consequence, or something the Site Head may commercially
> set aside at Stage 2 without invoking `Q-OV`?**
>
> **Basis:** ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1` and `PO-V1·X` — *"The Site Head commission allocation can
> differ from the pre-booking attribution"*, and an allocation space including `0/100`** · ⟦PRODUCT-OWNER
> DECISION⟧ **`PO-T1·6` — *"The claim can lose"*; `PO-S1`'s `C-XVI`, corollary 2** · ⟦ARCHITECT
> RECOMMENDATION⟧ **`NF-28` conjunct (i); `K-9`; `C-XXI`(3)** · ⟦SOURCE⟧ **§88** MUST-ASK: **CP commission
> logic**, **financial rules**.
>
> ⟦ARCHITECT ANALYSIS⟧ **NO ANSWER IS PROPOSED, PREFERRED, RANKED OR IMPLIED, and neither reading of `NF-28`
> conjunct (i) is selected.** **What hangs on it is named and not hidden:**
>
> | If the answer is | Then |
> |---|---|
> | **(a) a Stage-1 loser MAY be allocated** | **`NF-28` conjunct (i) admits the whole claim set and the attribution resolution has NO financial gate. `C-XVI` corollary 2's *"losing must be a reachable, recorded, permanent outcome"* survives as a REPORTING outcome and loses its financial content, which is a real consequence and must be stated to the owner rather than absorbed** |
| **(b) a Stage-1 loser may NOT be allocated** | **`NF-28` conjunct (i) admits only claims with standing, the attribution resolution IS a financial gate, and `PO-U1·8`'s `0/100` outcome means *"the winner takes none"* rather than *"the loser takes all"* — which is a materially different reading of an owner clause and must be confirmed by the owner rather than selected by the architect** |
>
> ⟦ARCHITECT ANALYSIS⟧ **Why it is not an existing item, checked individually against the four nearest:**
>
> | | Why `AC-36` is not it |
> |---|---|
> | **`AC-2`** — an ex-gratia route without an attribution claim | **`AC-2`'s population is a CP with NO CLAIM AT ALL — `PF-5` configuration 4, where the minting gate fails. `AC-36`'s population is a CP whose claim EXISTS, was MINTED, was ADJUDICATED and LOST. Different populations, different mechanisms.** **`AC-2` is ENLARGED BY ADJACENCY and is NOT answered** |
| **`AC-34`** — the FORM of an allocation | **`AC-34` asks what the numbers must do across a set. `AC-36` asks who may be in the set. Upstream, not overlapping** |
| **`AC-12`** — may the eligibility exception run in reverse | **`AC-12`'s subject is `NF-24` excepting an ELIGIBILITY determination. `AC-36`'s subject is whether the determination may be reached at all by a losing claim** |
| **`AC-15`** — what rule resolves a CP-vs-CP contest | **CLOSED: there is no rule. `AC-36` does not ask for one and does not reopen it — it asks what the resolution, however reached, CONSEQUENTIALLY MEANS** |

### 12.2 The rest, carried forward

**An INDEX onto [§8.1](#81-which-open-items-this-decision-actually-reaches), which is the authority.**

| Effect | Items |
|---|---|
| **CLOSED BY DIRECT PRODUCT-OWNER RULING** | **`AC-35`** — the pre-booking §11 attribution resolution DOES still occur; Option (a) · **`AC-20`** — a registration MAY be created for one CP while a different CP holds a live one · **`AC-13` limb (v)** — the portal does NOT disclose another CP's live registration. **The FIFTH and SIXTH such closures in the series, plus one named limb** |
| **NEW** | **`C-XXII`** (the non-disclosure control) · **`X-27`** (`PO-U3·d`'s enumeration incomplete; AD-01U §1.3's characterisation too strong) · **`AC-36`** (may a Stage-1 loser be allocated) · **`AC-13` limb (viii)** (what MAY a losing CP be told) |
| **CONFIRMED** | **`K-18`** — a NINTH consecutive document · **`C-IV`** (satisfied with margin) · **`K-9`/`K-10`** — ⚠ **CORROBORATED BY THE OWNER for the first time** · **`K-17`**/§D.4, **`K-52`**/**`K-12`**, **`C-XVI`** (owner's SEVENTH statement), **`C-XXI`**(3) (now load-bearing), **`NF-28`**'s three conjuncts, **`NF-24`**'s per-claim subject, **`O-U`**'s rule and **`OF-4`**'s determinacy, **`PO-Q1`**/**`Q-OV`**'s distinct role and its STAGE-1 mapping, **`C-IX`**'s §88 reservation (vindicated a second time) |
| **ENLARGED, NOT ANSWERED** | **`AC-13`** (one limb added while another closes) · **`AC-2`** (by adjacency to `AC-36`) |
| **SHARPENED, NOT NARROWED IN WHAT THEY ASK** | **`AC-29`** (a candidate landmark, no answer) · **`AC-30`** (a category error, not merely a permission error) · **`AC-31`** (the duration limb, against §33 clawback) |
| **PRIORITY RAISED, NOT DISCHARGED** | **`X-25`**/**`A-37`** — a THIRD consecutive rise; it now gates the reconstruction of TWO decisions |
| **STATUS CHANGED, CONTENT UNCHANGED** | **`A-57`**'s first limb — now UNCONDITIONAL · **AD-01U §2.1.6**'s conclusion — from architect inference to owner-confirmed (`A-60`) · **`A-55`** — independently confirmed against the owner's restated chain |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE ON WHAT THEY ASK** | **`AC-26`** (a specific temptation ruled out) · **`AC-6`** (no fourth consumer, and one potential consumer FORECLOSED; AD-01T's discrepancy notice carried forward unchanged) · **`AC-15`** (a specific temptation ruled out) · **`AC-25`** (both halves) · **`AC-12`**, **`AC-18`**, **`AC-21`**, **`AC-22`**, **`AC-27`**, **`AC-28`**, **`AC-32`**, **`AC-33`**, **`AC-34`**, **`AA-2`** |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`, `AC-3`, `AC-5`, `AC-7`, `AC-8`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-16`, `AC-17`, `AC-19`, `AC-23`, `AC-24`, `AC-31`** · **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`N-4`** · **`Q10`**, **`Q11`** (still BLOCKING) · **`V-4`** (thirteenth document), **`W-1`**, **`Y-1`, `Y-3`, `Y-4`, `Y-5`**, **`Z-2`, `Z-5`**, **`M-5`**'s uniqueness half · **`L-13`**, **`MF-9`**, **`X-13`** as findings · **`X-24`**/**`A-38`(a)**, **`X-26`**/**`A-56`** |
| **STILL CLOSED / DISCHARGED, NOT REOPENED** | **`AC-4`** (AD-01P) · **`AC-14`** and **`Q0-c`** (AD-01R) · **`C-XVI`** (RATIFIED at AD-01S) · **`P-G`** (RATIFIED at AD-01T) · **`AC-15`**'s content limb (AD-01U) · **`X-5`** (DISCHARGED at AD-01R) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-61`**. **`Q0-d` stays OFF the critical path** |
| **STILL CANNOT START** | **`M-9`** — no new input beyond AD-01U's three |

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§11](#11-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being
asked to record a Product-Owner clarification is not permission to build what it implies.** ⟦SOURCE⟧ Spec
**§88**: CP commission logic, financial rules, authorization rules, tenant architecture, source-of-truth
rules and audit requirements are **MUST ASK BEFORE DECIDING**; *"inventing business rules"* is **MUST NEVER
DO WITHOUT EXPLICIT AUTHORIZATION.** ⟦SOURCE⟧ Consolidated **§30**: *"No schema/code implementation should
be inferred from an unresolved product ambiguity."*

**THE TWO DECISIONS, STATED ONCE MORE BECAUSE THEY ARE THE POINT OF THE DOCUMENT.** ⟦PRODUCT-OWNER
DECISION⟧ **BMexa has TWO distinct stages. A CP can be attributed to an Inquiry before any booking occurs;
that attribution exists independently of commission, supports ownership, CP performance reporting,
conversion reporting, operational visibility and historical attribution, and survives an Inquiry that never
becomes a Booking. If the Inquiry converts and there is a CP commission clash, the Site Head separately
decides how the commission is allocated — and that allocation can differ from the pre-booking attribution.
The two mechanisms must not be merged. Separately: CP B may register the same Client × Project while CP A's
registration is still live; the existence of CP A's registration must NOT be disclosed to CP B; the
competition is handled internally through the established clash/attribution process; registration has no
special weight and does not determine the winner; and this is a ratification of the existing CP × Client ×
Project model, not permission to invent a new registration structure.** **All of it is recorded verbatim at
[§1.2](#12-the-decisions-recorded-verbatim-before-any-analysis) as `PO-V1·S1`, `PO-V1·S2`, `PO-V1·X` and
`PO-V2·a … PO-V2·e`, before any analysis touched it, and it is NOT re-argued, weighed, ranked, hedged or
softened anywhere above.**

**THE FIRST HEADLINE FINDING, AND IT IS THE LEDGER'S RATHER THAN THE RECONCILIATION'S.** ⟦ARCHITECT
ANALYSIS⟧ **OF THE ELEVEN ITEMS THE OWNER ASKED TO HAVE VERIFIED BY NAME, ONLY SIX WERE ALREADY LOCKED BY AN
EXPLICIT PRODUCT-OWNER DECISION. TWO ARE LOCKED FOR THE FIRST TIME HERE. AND TWO — THE FORM OF THE CLASH
AUTHORITY (`C-XX`) AND THE FORM OF THE ALLOCATION DECISION (`C-XXI`) — ARE ARCHITECT RECOMMENDATIONS THAT
ARE NOT RATIFIED AND MUST NOT BE READ AS DECIDED. THE SHARPEST SINGLE RESULT: STAGE 1'S INDEPENDENCE FROM
COMMISSION — THAT AN ATTRIBUTION CAN BE RESOLVED ON AN INQUIRY THAT NEVER BOOKS, AND IS WORTH RESOLVING FOR
REPORTING AND OWNERSHIP — WAS CARRIED FOR ELEVEN DOCUMENTS BY `K-9`, `K-10` AND `J-25`, WHICH ARE ARCHITECT
FINDINGS LABELLED ⟦SETTLED⟧. ⟦SETTLED⟧ IS NOT AN OWNER DECISION. `PO-V1·S1` IS THE FIRST TIME THE OWNER HAS
SAID IT.** **AND ONE OF TWENTY-TWO CONSTRAINTS IN THE SERIES IS AT OWNER STATUS.**

**THE SECOND HEADLINE FINDING.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U'S ENTIRE COMPATIBILITY CONCLUSION TRANSFERS
CLEANLY AND NOTHING IS REVERSED. `C-IV` IS NOT CONTRADICTED AND IS NOW SATISFIED WITH MARGIN RATHER THAN BY
THE NARROW READING OF ITS LITERAL BOUND. `K-18` STANDS FOR A NINTH DOCUMENT AND IS CORROBORATED. `K-9`/`K-10`
ARE CORROBORATED BY THE OWNER FOR THE FIRST TIME. `P-G` IS UNDISTURBED AND ITS STEP 5 NOW CONFIRMED TO
DESCRIBE AN ACT THAT OCCURS. `NF-28` NEEDS NO AMENDMENT. AND BOTH MERGE ARGUMENTS AD-01U COULD NOT DISSOLVE
ARE DISSOLVED — ONE BY `PO-V1·S1` SUPPLYING THE MISSING TAXONOMY SLOT, THE OTHER BY THE OWNER INSERTING THE
WORD *COMMISSION* INTO THEIR OWN EARLIER CLAUSE.** **AXIS 1 = `A` + `A′`. AXIS 2 = `B`. DOWNSTREAM = `C`.
`Q-OV` TARGETS STAGE 1 EXCLUSIVELY AND `C-XXI` TARGETS STAGE 2 EXCLUSIVELY, AND THE MAPPING IS TOTAL.**

**THE THIRD, ON THE REGISTRATION RULING.** ⟦ARCHITECT ANALYSIS⟧ **`O-U` NEEDED NO CHANGE TO ITS RULE. IT IS
STATED PER `(CP, CLIENT, PROJECT)` TRIPLE AND A DIFFERENT CP IS A DIFFERENT TRIPLE BY CONSTRUCTION — AD-01O
SAID SO IN `O-U`(5) AND SAID IN THE SAME BREATH THAT WHETHER THE CONFIGURATION IS *PERMITTED AT CREATION*
WAS `AC-20` AND WAS THE OWNER'S, BECAUSE BLOCKING IT WOULD BE A SYSTEMIC PRECEDENCE RULE AND `C-IX` RESERVES
THOSE TO §88. THE STRUCTURE WAS IMPLIED BY NEGATION; THE PERMISSION WAS NOT, AND THE OWNER HAS NOW GIVEN IT.
ONLY `O-U`(5)'S NOW-STALE CROSS-REFERENCE NEEDS CORRECTING (`A-58`).** **THE NON-DISCLOSURE REQUIREMENT IS
GENUINELY NEW: IT IS NOT §11, WHOSE OBJECT IS A CLAIM AND WHOSE AUDIENCE IS SALES REPS AND WHOSE STANDARD IS
*UNNECESSARILY*; IT IS NOT §39, WHOSE CATEGORY IS *BUILDER-INTERNAL* AND WHICH ARGUABLY POINTS THE OTHER WAY;
AND IT IS NOT `V-7`, WHICH IS THE MECHANISM AND NOT THE CONTENT. IT ANSWERS ONE LIMB OF `AC-13` — THE ONE
AD-01O ADDED, IN AD-01O'S OWN WORDS — AND `AC-13` IS NOT CLOSED.**

**AND THE ONE THAT MUST NOT BE BURIED.** ⟦ARCHITECT ANALYSIS⟧ **LOCKING BOTH STAGES AND PERMITTING THEM TO
DIVERGE MAKES ONE QUESTION UNAVOIDABLE THAT NOBODY COULD ASK WHILE `AC-35` WAS OPEN: MAY A CP WHOSE CLAIM
LOST AT STAGE 1 BE ALLOCATED A SHARE AT STAGE 2? IT REACHES `C-XVI` COROLLARY 2, `NF-28` CONJUNCT (i),
`K-9`'S SECOND DIRECTION, `PO-U3·c` AND THE ENTIRE POINT OF STAGE 1 — FIVE PLACES, MORE THAN ANY OTHER OPEN
ITEM — AND IT DECIDES WHETHER AN ATTRIBUTION LOSS IS A FINANCIAL FACT OR ONLY A REPORTING ONE. IT IS
`AC-36`, IT IS [§11.2](#112-the-one-next-question)'S SINGLE QUESTION, AND `C-IX` FORBIDS THE ARCHITECT
SUPPLYING THE ANSWER.**
