STATUS: PROPOSED — NOT APPROVED

# AD-01W — `AC-36` ANSWERED: Stage-1 attribution is NOT a commission-eligibility gate, a CP whose claim LOST Stage 1 MAY be allocated commission at Stage 2, and the phrase *"another CP involved in the commercial situation"* is found GENUINELY AMBIGUOUS and minted as `AC-37`

**What this document is.** The Project Owner has answered **the one question AD-01V posed back to them** at
its [§11.2](./03v-two-stage-attribution-and-competing-registration-decision.md) — `AC-36`, *"may a CP whose
claim LOST Stage 1 still be allocated a share at Stage 2, and what does losing then cost them?"* — and the
answer is **OPTION A: it does not restrict Stage-2 allocation.** That is **authoritative business input.**
It is **not re-argued, weighed against an alternative, ranked, hedged or softened anywhere below.**

**Why this document leads with a ledger audit rather than with the reconciliation.** The Project Owner has
**again required it by name**, exactly as they did for AD-01V, and has said in terms that AD-01V's audit is
**not** to be treated as sufficient going forward — each new decision can shift the picture and the owner
wants it re-verified fresh. That requirement is discharged at
[§0](#0-part-0--the-product-owner-question-ledger-audit-re-run), **before any reconciliation content**, using
AD-01V [§0.1](./03v-two-stage-attribution-and-competing-registration-decision.md)'s own method: **every
identifier extracted by exhaustive scan across all files, and each named item read AT THE DOCUMENT WHERE IT
WAS MINTED, never at the document that most recently mentioned it.**

**What this document's HEADLINE FINDING is, and it is not the one the owner's answer was aimed at.** The
owner's own prose names **four** populations the Site Head may allocate to, and the fourth —
***"or another CP involved in the commercial situation"*** — **does not obviously mean a CP who filed a
losing claim.** [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2) investigates that phrase against
the owner's three worked examples, against `K-52`'s clash-scoping, against `PO-U2·B`'s *"among the competing
CPs"*, and against what `NF-24`, `NF-28`, `Q-AR` and `PO-P10` structurally presuppose. **The result is
reported as it came out, not as it would have been convenient: THE SOURCES ARE HONESTLY AMBIGUOUS, the two
readings differ by a large architectural margin, and the ambiguity is minted as `AC-37` and becomes
[§11.2](#112-the-one-next-question)'s single question.**

**What this document does, beyond the audit and the crux.** It records the decision verbatim as `PO-W1`;
separates precisely what is NEW from what `NF-28`'s multi-claimant capacity already carried; determines
whether `C-XXI` already permitted this and whether it is thereby ratified (**it is not**); maps the seven
mechanisms — Stage-1 attribution, `Q-OV`, Stage-2 allocation, eligibility, the exception, approval, payout —
onto one another as a determination; checks the allocation's representation constraints; walks the
audit-reconstruction chain for the DIVERGENCE case the owner has now exemplified; and runs the
contradiction hunt the owner expressly asked for. **That hunt returns a POSITIVE result in five places
across four documents, minted as `X-28`. Every amendment it requires is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **[§11](#11-recommendation)'s recommendation is advisory.** Nothing
below is self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE`; AD-01O remains
advisory; AD-01P, AD-01Q, AD-01R, AD-01S, AD-01T, AD-01U and AD-01V all remain at `VALIDATE` and none is
approved.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · AD-01P ·
AD-01Q · AD-01R · AD-01S · AD-01T · AD-01U · **AD-01V**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the decision recorded here in its entirety, AD-01V's `PO-V1`/`PO-V2`, AD-01U's `PO-U1 … PO-U3`, AD-01T's `PO-T1 … PO-T3`, AD-01S's `PO-S1`/`PO-S2`, AD-01R's `PO-R1`/`PO-R2`, AD-01Q's `PO-Q1`/`PO-Q2`, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. **Not an owner decision** — AD-01V [§0.3](./03v-two-stage-attribution-and-competing-registration-decision.md) established that distinction and it is honoured throughout. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including this decision — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**High-water marks were VERIFIED against AD-01V's own text before anything was minted, not taken on trust,
and not taken from AD-01V's close reason either.** **AD-01V's close reason cites `PF-141`, `A-61`, `AC-36`,
`C-XXII` and `X-27`.** **All five were independently re-derived by exhaustive scan of every identifier
occurrence across all twenty-six files in `docs/architecture/`, and all five check out: `PF` tops out at
141, `X` at 27, `A` at 61, `AC` at 36, and the `C-` roman series at `C-XXII`.**

**Findings continue AD-01P's, AD-01Q's, AD-01R's, AD-01S's, AD-01T's, AD-01U's and AD-01V's shared series as
`PF-142 … PF-165`.** ⟦ARCHITECT ANALYSIS⟧ **No `WF-` series is minted, for the reason AD-01Q gave for
declining `QF-`, AD-01R for declining `RF-`, AD-01S for declining `SF-`, AD-01T for declining `TF-`,
AD-01U for declining `UF-` and AD-01V for declining `VF-`.**

**NO NEW CONSTRAINT IS MINTED. The `C-` series STAYS AT `C-XXII`.** ⟦ARCHITECT ANALYSIS⟧ **ZERO, and the
zero is the reported result of a check rather than an omission. ONE candidate was considered — a clause
carrying *"Stage-1 attribution is not a commission-eligibility gate"* — and is shown being RULED OUT at
[§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified), because the proposition is at
OWNER status in `PO-W1·3` itself, because `C-XXI`'s answer limb already admits it, and because where owner
content collides with standing architect text the instrument is an AMENDMENT, not a new clause. Minting one
here would restate an owner decision in architect language, which AD-01S declined for `C-XVI` and AD-01V
declined for Stage 1's independence, both for exactly this reason.**

**ONE new contradiction IS minted, as `X-28`, and the `X` series moves to `X-28`.** ⟦ARCHITECT ANALYSIS⟧
**It is the result of the contradiction hunt the owner expressly asked for, it is POSITIVE rather than null,
and it sits in FIVE places across FOUR documents (AD-01J, AD-01N, AD-01Q, AD-01R, AD-01S, with AD-01T
carrying a sixth citation of it). It is NOT `A-54`'s defect: `A-54` corrected a CARDINALITY phrase that was
merely narrower than the rule it stated; `X-28` names a TEST that a Stage-1 loser FAILS where `PO-W1`
requires that such a CP be payable** — [§7](#7-the-contradiction-hunt).

**ONE new open item IS minted, as `AC-37`, and the `AC` series moves to `AC-37`.** ⟦ARCHITECT ANALYSIS⟧
**ONE, and it is the reported outcome of [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2)'s
investigation rather than a default to the newest thread. It is the population question the owner's own
fourth category raises, it is NOT `AC-2`, and [§11.2](#112-the-one-next-question) finds it HIGHER PRIORITY
than `AC-34` for the same structural reason `AC-36` outranked `AC-34` at AD-01V.**

**ONE register item is CLOSED BY DIRECT PRODUCT-OWNER RULING — `AC-36` — and it is the SEVENTH such closure
in the series**, after `AC-14` (AD-01R), `C-XVI` (AD-01S), `P-G` (AD-01T), `AC-15`'s content limb (AD-01U)
and `AC-35` and `AC-20` (AD-01V).

**Amendments that are logically required but deliberately NOT made continue as `A-62 … A-65`**
(`A-1 … A-61` remain named and not made). ⟦ARCHITECT ANALYSIS⟧ **FOUR. Two are `X-28`'s; one is
CONDITIONAL on `AC-37` and is named conditionally on AD-01U's own `A-57` precedent; one is a status
correction to AD-01V. **NONE targets a Product-Owner clause** —
[§9.1](#91-amendments-to-product-owner-decisions-none-are-proposed).

> ⟦ARCHITECT ANALYSIS⟧ **One collision warning, stated once and then relied upon.**
>
> **`PO-W1` is this document's label for the owner's decision, and the `PO-` prefix is load-bearing and is
> never dropped.** **`PO-W1·1 … PO-W1·7` are its sub-clauses: `·1` the locked rule, `·2` the two-stage
> restatement, `·3` the invariant, `·4` the four-category allocation list, `·5 … ·7` the three worked
> examples, and `·8`/`·9` the two explicit prohibitions.** **The numbering is the architect's; the content
> is the owner's, verbatim.** **No bare `W-n` identifier is used anywhere for these.** ⟦SETTLED⟧ **AD-01I's
> `W-1` is a pre-existing item, is untouched, is not reopened, and is not an owner clause.**

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step, queue, notification or gate is designed (AD-01A **§8.5**). **No commission formula, rate,
slab, percentage VALUE, amount, milestone value, clawback quantum, passback rule or TDS treatment appears
anywhere — `M-9` owns all of it. No lock-in number is proposed. No boundary convention is selected —
`AC-6` is NOT resolved here.**

**NO ROUNDING RULE, RESIDUAL-ALLOCATION RULE, SUM-TO-100 RULE, MINIMUM-SHARE RULE, MAXIMUM-CP-COUNT RULE,
AUTO-NORMALIZATION RULE, AUTO-PRECEDENCE RULE OR TIEBREAK IS INVENTED, PROPOSED, PREFERRED, RANKED OR
IMPLIED ANYWHERE — `AC-34` is AD-01U's, is CARRIED FORWARD UNANSWERED, and is NOT answered here.**
⟦ARCHITECT ANALYSIS⟧ **[§5](#5-the-allocation-representation-constraints) records that `PO-W1` makes one
limb of `AC-34` SHARPER by giving it a named population; sharpening a question is not answering it.**

**NO EVIDENCE-SCORING MODEL, EVIDENCE-RANKING MODEL, AUTOMATIC PRECEDENCE FORMULA OR MANDATORY
EVIDENCE-UPLOAD WORKFLOW IS INVENTED, PROPOSED, RANKED, HINTED AT OR IMPLIED ANYWHERE.** ⟦PRODUCT-OWNER
DECISION⟧ **AD-01U's `PO-U3·a` forbids each by name and is unchanged; `PO-V2·d` and `PO-W1·8`/`·9` restate
the same discipline.**

**NO AUTOMATIC RULE FOR WHO RECEIVES MONEY IS INVENTED, PROPOSED OR IMPLIED ANYWHERE.** ⟦PRODUCT-OWNER
DECISION⟧ **`PO-W1·9` forbids it in the owner's own words: *"Do NOT create a new automatic rule for who
receives money. The Site Head makes the Stage-2 commercial allocation decision."*** ⟦ARCHITECT ANALYSIS⟧
**This prohibition is honoured in a specific and testable way: [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2)
declines to select either reading of the fourth category precisely BECAUSE selecting one would be the
architect fixing who may receive money.**

**NO PORTAL SURFACE, SCREEN, FIELD, PROJECTION, DISCLOSURE LIST OR MESSAGE TEXT IS DESIGNED, PROPOSED OR
IMPLIED ANYWHERE.** ⟦SETTLED⟧ **`V-7`'s fail-closed projection and `C-XXII` are not reopened, not widened
and not ratified; what a losing CP may be told remains `AC-13` limb (viii)'s and is NOT filled here.**

**NO LITERAL ROLE-NAME BRANCH, ENUM, ROLE KEY, PERMISSION KEY OR ROLE HIERARCHY IS INVENTED, PROPOSED OR
IMPLIED ANYWHERE.** ⟦SOURCE⟧ **R2**: *"Application logic never branches on a role name."*

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's `K-26`,
`K-52` and `T-5`, and AD-01L's `L-6` and `K-22` are NOT reopened.** **`Q-OV` and `Q-AR` are adopted as
AD-01Q recommends them and as AD-01U's `A-55` would amend `Q-AR`; `Q-OV` is NOT narrowed and NOT widened.**
**`PO-R1`, `PO-S1`, `PO-T1 … PO-T3`, `PO-U1 … PO-U3` and `PO-V1`/`PO-V2` are LOCKED and none is reopened,
qualified or conditioned by anything below.**

---

## 0. PART 0 — the Product-Owner question ledger audit, RE-RUN

> ⟦ARCHITECT ANALYSIS⟧ **`PF-142` — this section exists because the Project Owner asked for it AGAIN, by
> name, and expressly said AD-01V's audit is not to be treated as sufficient going forward. It is placed
> first for AD-01V's own reason, and it is RE-RUN rather than copied: a re-run that reproduced AD-01V's
> conclusions without re-deriving them would be precisely the drift the owner is guarding against.**

### 0.1 Why this is re-run rather than carried forward

**The owner's instruction, in substance:** *each new decision can shift the picture; re-verify it fresh.*
⟦ARCHITECT ANALYSIS⟧ **AD-01V [§0.1](./03v-two-stage-attribution-and-competing-registration-decision.md)
named three failure modes. All three are live again here, and one of them is live in a NEW form that
AD-01V's material did not present.**

| # | Failure mode | How this re-run avoids it |
|---|---|---|
| **1** | **An item drifts from OPEN to CLOSED because a neighbouring item closed** | **`AC-36` closes here. `AC-34`, `AC-2`, `AC-12`, `AC-13` and `AC-28` are all ADJACENT to it and NONE of them closes. Each is checked individually at [§8](#8-the-determinations) with the word OPEN or a citation, never both** |
| **2** | **An ARCHITECT derivation is later read as a PRODUCT-OWNER decision** | ⟦ARCHITECT ANALYSIS⟧ **The live instance this time is `C-XXI`. `PO-W1` restates `C-XXI`'s CONTENT for a second time and an unwary reader would take that as ratification. [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified) works it and concludes it is NOT ratified** |
| **3** | **An item is marked closed because something SOUNDING like it was answered** | ⟦ARCHITECT ANALYSIS⟧ **The owner named `AC-26` and `AC-6` as their two standing instances. BOTH are re-checked at source at [§0.2](#02-ac-6--re-checked-at-source-and-one-result-that-runs-neither-way) and [§0.3](#03-ac-26--re-checked-at-source-and-the-trap-test-re-run-on-this-decisions-own-clauses). A THIRD instance is live here and is named: `AC-2`, which sounds like `AC-37` and is not it** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-143` — the method, restated so the result is checkable and not merely
> asserted.** **Every `AC-`, `X-`, `C-`, `PF-`, `A-` and `PO-` identifier was extracted from the twenty-six
> files in `docs/architecture/` by exhaustive scan. High-water marks were computed from that scan and not
> from any document's claim about them. Each named item below was then read AT THE DOCUMENT WHERE IT WAS
> MINTED — not at AD-01V's summary of it, and not at the document that most recently mentioned it.**
> **Where a minting text and a later restatement differ, the MINTING TEXT governs and the divergence is
> reported** — which is exactly how [§7](#7-the-contradiction-hunt)'s positive result was found.

### 0.2 `AC-6` — re-checked at source, and one result that runs neither way

**`AC-6`, quoted from AD-01N §F.2 where it was MINTED, verbatim and not paraphrased:**

> ⟦BUSINESS DECISION REQUIRED⟧ ***"Boundary convention: is the last eligible day `registration date + N`
> (convention α), or `registration date + N − 1` (convention β)? And is `N = 0` a legal configuration?"***

| Check | Result |
|---|---|
| **Is its underlying question independently answered anywhere?** | ⟦ARCHITECT ANALYSIS⟧ **NO. RE-VERIFIED AT SOURCE, not carried from AD-01V.** **AD-01T §3.6's discrimination test stands: the owner's *"Day 30 is included; Day 31 is expired"* is TRUE UNDER BOTH CONVENTIONS because it fixes a boundary in ordinal day-numbers without fixing the INDEXING ORIGIN. AD-01N's phrasing of α's property used zero-indexing, which is AD-01N's choice and not the owner's. The SECOND limb — whether `N = 0` is legal — is not addressed by any source at all** |
| **Does `PO-W1` touch it?** | **NO.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED rather than assumed. `PO-W1` contains no date, no window, no `(R, N)` pair, no expiry, no *"live"*, no *"still within"* and no temporal predicate of any kind. Its subject is WHICH CP may be allocated and WHEN in the two-stage sequence that decision is made — an ORDINAL question about stages, not a CALENDAR question about days** |
| ⚠ **Does `PO-W1` create a FOURTH money-bearing consumer?** | ⟦ARCHITECT ANALYSIS⟧ **NO — AND THE HONEST CHECK IS SUBTLER THAN A YES/NO AND IS REPORTED IN FULL.** **If a Stage-1 loser may be paid, then `NF-28` conjunct (iii) — the window test — must be RUN FOR THAT CP, and conjunct (iii) is `AC-6`'s first named consumer. So the NUMBER OF EVALUATIONS of `AC-6`'s convention rises: it now runs once per claimant rather than once per winner. But the CONSUMER is the same consumer. `AC-6` remains TRIPLY money-bearing — `NF-18` eligibility, `O-U`(3) re-registration admissibility, `P-G` step 3 claim admissibility — and no more.** **The change is in POPULATION, not in the consumer list, and it is reported rather than used** |

> ⟦ARCHITECT ANALYSIS⟧ **THE CONCLUSION, STATED PLAINLY AND IN THE OWNER'S REQUIRED FORM.**
>
> > **`AC-6` IS OPEN. BOTH LIMBS — the α/β convention and the legality of `N = 0` — ARE UNANSWERED. NO
> > CONVENTION IS SELECTED, PREFERRED, RANKED OR IMPLIED ANYWHERE IN THIS DOCUMENT.** **AD-01T'S
> > DISCREPANCY NOTICE — that the owner LISTS `AC-6` among already-locked decisions and it is not locked,
> > because *"Day 30 included, Day 31 expired"* does not disambiguate zero- from one-indexing — IS CARRIED
> > FORWARD UNCHANGED AND UNDISCHARGED, for the THIRD consecutive document.**

### 0.3 `AC-26` — re-checked at source, and the trap test re-run on this decision's own clauses

**`AC-26`, quoted from AD-01P §5 where it was MINTED, verbatim and not paraphrased:**

> ⟦BUSINESS DECISION REQUIRED⟧ ***"Is a registration's grounding power SINGLE-USE or REPEATABLE? May ONE
> live registration ground claims on SEVERAL Inquiries inside its own window — and does it ground a claim on
> an Inquiry opened AFTER that client's earlier purchase CONVERTED?"***

**AD-01P's own stated ground for minting it, verbatim:** *"`PO-P1` says a registration **may be the basis for
CP attribution on A LATER INQUIRY** — singular — and does not say whether the power is spent by use."*

| Check | Result |
|---|---|
| **Was AD-01V's finding accurate?** | ⟦ARCHITECT ANALYSIS⟧ **VERIFIED AT SOURCE. YES.** **AD-01V [§0.7] caught `PO-V2·d`'s *"a registration may ground a claim"* reproducing `PO-P1`'s exact singular construction and correctly declined to read it as an answer. That finding is re-derived here from `PO-V2·d`'s own text and holds** |
| ⚠ **THE TRAP TEST, RE-RUN ON THIS DECISION'S OWN CLAUSES** | ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` WAS SCANNED CLAUSE BY CLAUSE FOR THE SAME TRAP, BECAUSE AD-01V CAUGHT A NEAR-MISS ONE DECISION AGO AND THE OWNER ASKED FOR THIS CHECK BY NAME.** **THE RESULT IS CLEANER THAN AD-01V'S AND IS STATED AS THE CHECKABLE FACT IT IS: `PO-W1` CONTAINS NO REFERENCE TO A REGISTRATION AT ALL.** **Not the word *registration*, not *grounding*, not *basis*, not *window*, not *protection*. Its four categories are stated in terms of ATTRIBUTION OUTCOME (*attributed*, *lost attribution*) and COMMERCIAL INVOLVEMENT, never in terms of what grounded a claim. A clause that never mentions the grounding layer cannot answer a question about the grounding layer's cardinality** |
| ⚠ **The subtler trap, checked because the obvious one was absent** | ⟦ARCHITECT ANALYSIS⟧ **`PO-W1·5`'s Example 1 names a CP B with NO STATED CLAIM HISTORY. Could that be read as a CP whose registration grounded nothing, and therefore as bearing on `AC-26`? NO. `AC-26` asks how many CLAIMS one registration may ground. Example 1's CP B is a CP about whom NOTHING is said, including whether it holds a registration at all. Silence about a CP is not a statement about registrations.** **What Example 1's silence DOES bear on is [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2), and that is a population question, not a grounding-cardinality question** |

> ⟦ARCHITECT ANALYSIS⟧ **THE CONCLUSION, STATED PLAINLY.**
>
> > **`AC-26` IS OPEN. BOTH LIMBS — the within-window repeatability limb and the post-conversion limb — ARE
> > UNANSWERED. It is NOT narrowed by anything in this document, and `PO-W1` is not to be read as bearing
> > on it in any respect.** **`Y-1`, `Y-3`, `AA-1`, `K-26` and `T-5`, which AD-01P named as coupled to it,
> > are likewise NOT resolved, NOT narrowed and NOT branched.**

### 0.4 The architect-form-over-owner-content items: `C-XX` and `C-XXI`

> ⟦ARCHITECT ANALYSIS⟧ **`PF-144` — AD-01V [§0.8] result 1 found that two of the eleven items the owner
> asked to have verified were ARCHITECT RECOMMENDATIONS wearing owner-set content. The owner has asked for
> confirmation that this has not silently changed. It is checked here against `PO-W1` specifically, because
> `PO-W1` restates `C-XXI`'s content and a restatement is the exact mechanism by which such a thing would
> change silently.**

| Clause | Whose CONTENT | Whose FORM | Status after `PO-W1` |
|---|---|---|---|
| **`C-XX`** — the ordinary attribution/clash decision as a PERMISSION in the fixed permission vocabulary | ⟦PRODUCT-OWNER DECISION⟧ **The WHO is `PO-T2`/`PO-T3` bullet 1 — *"the previously established Site Head / Project Head, according to the existing authority model"*** | ⟦ARCHITECT RECOMMENDATION⟧ **AD-01T's** | **UNRATIFIED. UNCHANGED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: `PO-W1` names no holder for anything, describes no permission, and says nothing about the Stage-1 decision's form. It does not reach `C-XX`** |
| **`C-XXI`** — the allocation as a decision point of its own, exercised under a fourth distinct permission, with seven corollaries | ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1`/`PO-U2`, and now `PO-W1·2`/`·4` a second time** | ⟦ARCHITECT RECOMMENDATION⟧ **AD-01U's** | ⚠ **STILL UNRATIFIED — and the temptation to say otherwise is real and is named.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` CORROBORATES `C-XXI`'s ANSWER LIMB (*"an ALLOCATION naming ONE OR MORE CPs"*, with no winner-restriction) for the first time. It says NOTHING about `C-XXI`'s decision-point-hood, nothing about it being a FOURTH DISTINCT PERMISSION, nothing about the §32 timing bound, nothing about server-side enforcement, nothing about project scoping, and nothing about corollary 7's no-precedence discipline. SIX of the seven corollaries are untouched** — [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified) |

> ⟦ARCHITECT ANALYSIS⟧ **THE RESULT, WHICH IS THE ONE AD-01V REPORTED AND IS RE-DERIVED RATHER THAN
> CARRIED: `C-XVI` IS STILL THE ONLY ONE OF THE TWENTY-TWO CONSTRAINTS AT OWNER STATUS. The ratio has NOT
> moved. `C-I … C-XV`, `C-XVII`, `C-XVIII`, `C-XIX`, `C-XX`, `C-XXI` and `C-XXII` are ALL UNRATIFIED, and
> this document ratifies none of them and mints none.**

### 0.5 The `AC-` register — the items AD-01V left open, each re-checked

> ⟦ARCHITECT ANALYSIS⟧ **`PF-145` — AD-01V's closing lists are walked item by item, and ONLY what `PO-W1`
> genuinely changes is updated. An item with no citation is not closed. The provenance discipline is
> AD-01V's and is reproduced without relaxation.**

| # | Its question, at the document that MINTED it | Status after `PO-W1` | PROVENANCE of its status |
|---|---|---|---|
| **`AC-1`** | Authorization posture of the closing-reason tap once it carries money | **NARROWED-NOT-CLOSED. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P `X-6`. **NOT reached** |
| **`AC-2`** | An ex-gratia route without an attribution claim | ⚠ **OPEN — and ENLARGED AGAIN, MORE SHARPLY THAN AT AD-01V** | ⟦ARCHITECT ANALYSIS⟧ AD-01P `PF-13(2)`. ⚠ **If `AC-37` resolves to the WIDE reading, `PO-W1·4`'s fourth category and `AC-2`'s population OVERLAP. They are STILL NOT THE SAME QUESTION and are NOT merged** — [§12.1](#121-the-new-question-ac-37) |
| **`AC-3`** | Must a claim name a currently-approved CP relationship | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P; coupled to `AC-10`. ⚠ **CHECKED with care: if `AC-37` goes wide, `AC-3`'s question acquires a second surface. NOT narrowed, NOT enlarged unconditionally** |
| **`AC-4`** | Is the lock-in window necessary-only or necessary-and-sufficient | **CLOSED. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ **AD-01P `PF-3` → `X-18`, `A-29`. CLOSED BY ARCHITECT DERIVATION, NOT by a `PO-` ruling. NOT reopened** |
| **`AC-5`** | Which booking fact is the Booking Date | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §F.1; AD-01O `OF-4`. `Q-AR` link 10 gated by it |
| **`AC-6`** | Boundary convention α vs β; is `N = 0` legal | ⚠ **OPEN. BOTH LIMBS. TRIPLY money-bearing. DISCREPANCY NOTICE STANDING, THIRD DOCUMENT** | **WORKED IN FULL at [§0.2](#02-ac-6--re-checked-at-source-and-one-result-that-runs-neither-way)** |
| **`AC-7`** | Ratify snapshot; should a re-basing act exist | **FIRST HALF answered in substance; SECOND HALF OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-15`, `A-22` |
| **`AC-8`** | Business timezone: tenant-level or project-level | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-10` |
| **`AC-9`** / **`T-9`** | Offline registration date: capture or sync | **OPEN, EXISTENCE-BEARING. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01O; ⟦SOURCE⟧ §12 |
| **`AC-10`** | What *"successfully registers"* means; §44 unverified capture | **OPEN, GATING. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-5(3)`; AD-01O `OF-17` |
| **`AC-11`** | Does the rule time-bar the ORDINARY never-closed case | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-20` |
| **`AC-12`** | Override directionality and revocation | **OPEN. UNCHANGED — CHECKED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §H.2. ⚠ **CHECKED because a Stage-2 award to a Stage-1 loser superficially resembles a reverse eligibility exception. IT IS NOT** — [§4.1](#41-the-map) |
| **`AC-13`** | Override scope, self-interest controls, CP visibility | ⚠ **OPEN. SIX limbs, plus limb (viii). ONE LIMB MADE MORE URGENT, NONE CLOSED** | **AD-01N minting text; enlarged AD-01O, AD-01Q §3.13, AD-01T, AD-01U; limb (v) CLOSED at AD-01V by `PO-V2·c`; limb (viii) added at AD-01V** — [§8](#8-the-determinations) |
| **`AC-14`** | Does an invalid-side closure retain the protection window | **CLOSED. LOCKED. UNCHANGED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01R `PO-R1`. The FIRST direct owner ruling** |
| **`AC-15`** | Two CPs each hold a live registration and the client books — who wins | **CONTENT LIMB CLOSED: there is no rule. UNCHANGED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01U `PO-U1·5 … ·8`, `·12`, `PO-U3·a`. The FOURTH direct owner ruling** |
| **`AC-16`** | Does a cancelled/transferred booking re-run the window test | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N §J.1 |
| **`AC-17`** | Project-level only; tenant default; per-CP-tier variation | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01N `NF-12` |
| **`AC-18`** | Re-registration cadence; minimum gap; cap | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01O |
| **`AC-19`** | Is a Helpdesk lookup an auditable ACCESS event | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-7` |
| **`AC-20`** | May a registration be CREATED for one CP while a DIFFERENT CP holds a live one | **CLOSED. IT MAY. UNCHANGED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01V `PO-V2·a`/`·b`. The SIXTH direct owner ruling** |
| **`AC-21`** | Is the registration's CLIENT subject the PERSON or the work record | **OPEN. BLOCKING `Q-AR` link 1. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01O `OF-5(4)`; with `Q10`/`M-5` |
| **`AC-22`** | Which registration governs `NF-28` conjunct (iii) | ⚠ **OPEN. UNCHANGED IN WHAT IT ASKS — and its POPULATION grows** | ⟦ARCHITECT ANALYSIS⟧ AD-01P. **Conjunct (iii) now runs for every claimant, not only the winner. WHICH of a CP's OWN registrations governs is unchanged** — [§0.2](#02-ac-6--re-checked-at-source-and-one-result-that-runs-neither-way) |
| **`AC-23`** | with **`Q11`** — **STILL BLOCKING** | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P |
| **`AC-24`** | Which date the minting gate evaluates at | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P |
| **`AC-25`** | Automatic mint vs discretionary act; is an UNOPPOSED claim adjudicated | **OPEN, BOTH HALVES. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01P; `PO-S1·9` bears on the second half and does not close it |
| **`AC-26`** | Is a registration's grounding power SINGLE-USE or REPEATABLE | ⚠ **OPEN. NOT ANSWERED. NOT NARROWED** | **WORKED IN FULL at [§0.3](#03-ac-26--re-checked-at-source-and-the-trap-test-re-run-on-this-decisions-own-clauses)** |
| **`AC-27`** | May one individual perform both OVERRIDES on one commercial outcome | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; four Site-Head-shaped acts since AD-01U |
| **`AC-28`** | The evidence asymmetry between the ordinary decision, the override and the allocation | ⚠ **OPEN. THREE-WAY, one leg owner-fixed — and SHARPER** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q. ⚠ **`PO-W1` permits an allocation that CONTRADICTS the Stage-1 outcome with NO evidence requirement, while `PO-Q1·b` makes evidence MANDATORY for a `Q-OV` override that would do something adjacent. The asymmetry is now between two routes to a similar-looking result** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **`AC-29`** | Until when may an override be performed | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; SHARPER at AD-01V; **not sharpened further here** |
| **`AC-30`** | What an override's decision may SAY | ⚠ **OPEN. UNCHANGED IN WHAT IT ASKS — and one hazard RECEDES** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q. ⚠ **`PO-W1` supplies a LEGITIMATE Stage-2 route to paying a Stage-1 loser, which REDUCES the pressure to misuse `Q-OV` for it** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **`AC-31`** | Who the auditor is, and for how long | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01Q; ⟦SOURCE⟧ R1, R6, R12 |
| **`AC-32`** | Should any SEPARATE anti-abuse control exist | **OPEN, OFF the critical path. UNCHANGED — CHECKED** | ⟦ARCHITECT ANALYSIS⟧ AD-01R `PF-64`. ⚠ **CHECKED because permitting a loser to be paid superficially widens the farming surface. It does not change what `AC-32` ASKS** — [§8](#8-the-determinations) |
| **`AC-33`** | May the step-7 decision-maker override their OWN decision; should one role ship holding both | **OPEN. UNCHANGED** | ⟦ARCHITECT ANALYSIS⟧ AD-01T §5.1; enlarged AD-01U |
| **`AC-34`** | Rounding / residual / sum-to-100 / minimum share / allocation on a claim that fails `NF-28` | ⚠ **OPEN. NOT ANSWERED — and its LAST LIMB is SHARPER** | ⟦BUSINESS DECISION REQUIRED⟧ AD-01U §8.1. ⚠ **The limb *"may an allocation be entered for a claim that subsequently fails `NF-28`"* now has a NAMED population rather than a hypothetical one** — [§5](#5-the-allocation-representation-constraints) |
| **`AC-35`** | Does the pre-booking §11 attribution resolution still occur | **CLOSED. IT DOES. Option (a). UNCHANGED** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01V `PO-V1·S1`. The FIFTH direct owner ruling** |
| **`AC-36`** | May a CP whose claim LOST Stage 1 be allocated a share at Stage 2, and what does losing cost | ⚠ **CLOSED HERE. IT MAY. Option A** | ⟦PRODUCT-OWNER DECISION⟧ **This document's `PO-W1·1`/`·3`/`·4`. The SEVENTH direct owner ruling** — [§3](#3-what-is-new-and-what-was-already-carried) |
| **`AC-37`** | **MINTED HERE** — is the Stage-2 allocation population BOUNDED by the Inquiry's claim set | **OPEN** | ⟦BUSINESS DECISION REQUIRED⟧ [§12.1](#121-the-new-question-ac-37) |

### 0.6 The `C-` series and the `X-` series

> ⟦ARCHITECT ANALYSIS⟧ **`PF-146` — reported because a reader auditing *"what is decided"* will otherwise
> read a `C-` number as settled, and because the single most important number in AD-01V's audit was a
> ratio.**

| Group | Items | Standing |
|---|---|---|
| ⚠ **RATIFIED BY THE OWNER** | **`C-XVI`** ONLY | ⟦PRODUCT-OWNER DECISION⟧ **AD-01S `PO-S1`. ONE of twenty-two. THE RATIO HAS NOT MOVED** |
| **ARCHITECT RECOMMENDATIONS, UNRATIFIED** | **`C-I … C-XV`, `C-XVII … C-XXII`** | ⟦ARCHITECT RECOMMENDATION⟧ **ALL UNRATIFIED. `C-XV` is gate 2's head; `C-XVII … C-XXII` are gate 3's. NONE is minted, ratified, widened or narrowed here** |
| **Contradictions `X-1 … X-27`** | **`X-5`** DISCHARGED at AD-01R; **`X-24`**, **`X-25`**, **`X-26`**, **`X-27`** standing | ⟦ARCHITECT ANALYSIS⟧ **`X-25`/`A-37` — the `NF-27` substrate gap — has had its priority raised in THREE consecutive documents and is raised a FOURTH here** — [§6](#6-the-audit-reconstruction-chain) |
| **`X-28`** | **MINTED HERE** | ⚠ **THE CONTRADICTION HUNT'S POSITIVE RESULT** — [§7](#7-the-contradiction-hunt) |

### 0.7 The ledger's headline results

> ⟦ARCHITECT ANALYSIS⟧ **`PF-147` — five results. Three of them are not what a reader of AD-01V would have
> predicted from this decision's subject, and they are reported rather than smoothed.**

| # | Result |
|---|---|
| **1** | ⚠ **THE DECISION THE OWNER GAVE IS NARROWER THAN THE PHRASE THEY USED TO GIVE IT.** **`AC-36` is closed cleanly and completely. But the owner's own fourth allocation category — *"another CP involved in the commercial situation"* — asks a question `AC-36` never asked, and the architecture cannot answer it from the sources** → **`AC-37`**, [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2) |
| **2** | ⚠ **THE CONTRADICTION HUNT THE OWNER ASKED FOR RETURNED A POSITIVE RESULT, IN FIVE PLACES ACROSS FOUR DOCUMENTS.** **AD-01J §4.4, AD-01N §4 and §J.2, AD-01Q §3.6, AD-01R §3.x and AD-01S §5.x each state or gloss `NF-28`/`K-48` conjunct (i) as a test only an attribution WINNER can pass, and AD-01T §5.2 cites it in that sense. `PO-W1` falsifies that reading** → **`X-28`**, [§7](#7-the-contradiction-hunt) |
| **3** | ⚠ **AD-01U's *"the eligibility layer was never a winner-picker"* WAS TRUE OF `NF-28`'s ANSWER-BEARER COLUMN AND FALSE OF `NF-28`'s CONJUNCT TEXT AS FIVE DOCUMENTS GLOSSED IT.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U rested that finding on the answer-bearer column and on `NF-24`'s subject row, and both readings were correct. What AD-01U did not check was whether the SAME architecture also carried the opposite reading elsewhere. It did.** **This is the clearest possible vindication of the owner's instruction to hunt rather than assume AD-01U caught every instance** |
| **4** | **ONE OF TWENTY-TWO CONSTRAINTS IS AT OWNER STATUS, AND THE NUMBER HAS NOT MOVED.** **`C-XXI`'s content is restated by the owner for a second time and `C-XXI` is STILL NOT RATIFIED — six of its seven corollaries are untouched** — [§0.4](#04-the-architect-form-over-owner-content-items-c-xx-and-c-xxi) |
| **5** | **`AC-26` AND `AC-6` ARE BOTH GENUINELY OPEN, RE-DERIVED AT SOURCE.** ⚠ **`AC-26` survived its trap test more cleanly than at AD-01V — `PO-W1` never mentions a registration at all — and `AC-6` produced a result that runs NEITHER WAY: no new consumer, but a larger evaluation population** — [§0.2](#02-ac-6--re-checked-at-source-and-one-result-that-runs-neither-way), [§0.3](#03-ac-26--re-checked-at-source-and-the-trap-test-re-run-on-this-decisions-own-clauses) |

---

## 1. The decision

### 1.1 The source of this decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-148` — recorded first, because the provenance determines which register row
> the answer may be posted against, and because this time the answer lands squarely on the row it was
> asked about AND raises a second row nobody opened.**
>
> **AD-01V closed at `VALIDATE` with an EIGHT-item gating list at its §11.1 and posed `AC-36` back to the
> owner at its §11.2 as the single next question, offering exactly two branches:**
>
> > *"**(a) YES.** Losing the enquiry decides who owns the customer and whose number it is in your reports.
> > It does not decide who gets paid. Your Site Head can still pay a partner who lost, if the commercial
> > reality says they earned it. **(b) NO.** Only partners whose claim stood up can be in the split …"*
>
> **AD-01V also asked one follow-up, in terms:** *"if the answer is (a), what does 'losing' the enquiry then
> actually cost a partner?"*
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner has answered (a), in the question's own terms, and has gone further
> than the question asked: they have stated the invariant abstractly (*Stage-1 attribution does not act as a
> commission eligibility gate*), enumerated FOUR categories of permitted allocatee, supplied THREE worked
> examples, and attached TWO explicit prohibitions against over-reading it.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Three things follow and each is stated rather than assumed.**
>
> | # | Consequence |
> |---|---|
> | **1** | **`AC-36`'s FIRST limb is CLOSED outright.** **A Stage-1 loser MAY be allocated. `NF-28` conjunct (i)'s two readings, which AD-01V §12.1 set out side by side and declined to choose between, are resolved in favour of the WHOLE-CLAIM-SET reading** — [§3.1](#31-is-the-non-gate-rule-new) |
> | **2** | **`AC-36`'s SECOND limb — *what does losing then cost?* — is answered by CONSTRUCTION rather than by a sentence, and this document says so rather than attributing a sentence to the owner.** ⟦ARCHITECT ANALYSIS⟧ **Read with `PO-V1·S1`, losing costs exactly Stage 1's five named consumers — enquiry ownership, CP performance reporting, conversion reporting, operational visibility, historical attribution — and costs nothing financial automatically. That is a DERIVATION from two owner clauses, is labelled as one, and is NOT presented as the owner's words** — [§3.4](#34-the-second-limb-of-ac-36) |
> | **3** | ⚠ **The FOURTH category lands on ground nobody surveyed.** **`AC-36` asked about a CP whose claim LOST. `PO-W1·4`'s fourth category speaks of *"another CP involved in the commercial situation"*, which is not obviously the same population, and the owner's Example 1 supplies a CP B with no stated claim history at all.** **[§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2) is where that is worked, and it is this document's headline finding** |

### 1.2 The decision, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened, qualified or treated as an option.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·1` — THE LOCKED RULE, verbatim and in the owner's own emphasis:**
>
> > *"Stage-1 attribution does NOT restrict Stage-2 commission allocation."*
> >
> > *"**LOCKED RULE: A CP may lose the pre-booking attribution decision and still receive a commission
> > allocation after the Booking if the Site Head decides to allocate commission to that CP.**"*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·2` — THE TWO-STAGE RESTATEMENT, verbatim:**
>
> > *"Therefore: STAGE 1 — the system determines CP attribution for the Inquiry. STAGE 2 — after Booking
> > success, the Site Head separately decides how the commission is allocated among CPs involved in the
> > commercial situation. **A Stage-1 attribution loss does NOT automatically mean 0% commission.**"*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·3` — THE INVARIANT, verbatim and in the owner's own emphasis:**
>
> > *"**The important invariant is: PRE-BOOKING ATTRIBUTION ≠ POST-BOOKING COMMISSION ALLOCATION. Stage-1
> > attribution does not act as a commission eligibility gate.**"*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·4` — THE FOUR CATEGORIES, verbatim and unabridged:**
>
> > *"The Site Head may allocate commission to: the Stage-1 attributed CP; a CP that lost Stage-1
> > attribution; multiple CPs; **or another CP involved in the commercial situation, subject to the existing
> > business process.**"*

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·5`, `PO-W1·6`, `PO-W1·7` — THE THREE WORKED EXAMPLES, verbatim, each
> reproduced in full and none paraphrased:**
>
> | # | Example, verbatim |
> |---|---|
> | **`PO-W1·5`** | *"Example 1: Stage 1 → CP A attributed. Booking succeeds. Site Head → CP A 60%, CP B 40%."* |
> | **`PO-W1·6`** | *"Example 2: Stage 1 → CP A attributed; CP B loses Stage 1. Booking succeeds. Site Head → CP A 70%, CP B 30%."* |
> | **`PO-W1·7`** | *"Example 3: Stage 1 → CP A attributed. Booking succeeds. Site Head → CP A 100%, CP B 0%."* |

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·8` and `PO-W1·9` — THE TWO EXPLICIT PROHIBITIONS, verbatim:**
>
> | # | Prohibition, verbatim |
> |---|---|
> | **`PO-W1·8`** | *"Do NOT reinterpret this as automatic commission eligibility."* |
> | **`PO-W1·9`** | *"Do NOT create a new automatic rule for who receives money. The Site Head makes the Stage-2 commercial allocation decision."* |

### 1.3 What this decision does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14`, `PO-P1 … PO-P12`, `PO-Q1`, `PO-Q2`, `PO-R1`/`PO-R2`,
> `PO-S1`/`PO-S2`, `PO-T1 … PO-T3`, `PO-U1 … PO-U3` and `PO-V1`/`PO-V2` are untouched except where `PO-W1`
> restates one of them, and every one of them remains in force.** In particular:

| Prior clause | Status after `PO-W1` |
|---|---|
| **`PO-V1·S1`** — Stage 1 exists, is independent of commission, survives an Inquiry that never books | **UNCHANGED, IN FORCE, and LOAD-BEARING HERE.** ⟦ARCHITECT ANALYSIS⟧ **It is what makes `PO-W1`'s second limb answerable: Stage 1 retains all five of its named non-financial consumers whatever Stage 2 does** — [§3.4](#34-the-second-limb-of-ac-36) |
| **`PO-V1·S2`/`PO-V1·X`** — Stage 2 is separate; the two must not be merged; the allocation may differ | **UNCHANGED and RESTATED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1·3` is `PO-V1·X` stated a second time and STRENGTHENED: `PO-V1·X` said the two *may differ*; `PO-W1·3` says the first is *not a gate* on the second, which is a stronger and more specific claim** |
| **`PO-V2·a … ·e`** — competing registrations; non-disclosure; no special weight; no new structure | **UNCHANGED, UNTOUCHED, NOT REACHED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: `PO-W1` never mentions a registration** — [§0.3](#03-ac-26--re-checked-at-source-and-the-trap-test-re-run-on-this-decisions-own-clauses) |
| **`PO-U1·8`** — the allocation outcome space, ending *"or another permitted allocation"* | **UNCHANGED and CONFIRMED.** ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PO-W1·7`'s Example 3 — CP A 100%, CP B 0% — settles a reading AD-01V §12.1 flagged as open: `PO-U1·8`'s `0/100` does NOT mean *"the winner takes none"* as a special case; a 0% outcome for a named CP is an ordinary permitted allocation** |
| **`PO-U1·7`/`·11`** — no evidence-document upload required | **UNCHANGED, NOT RESTATED HERE, NOT WIDENED.** ⚠ **`PO-W1` adds no evidence requirement to the Stage-2 decision and removes none** — `AC-28`, [§8](#8-the-determinations) |
| **`PO-U2·B`** — *"Site Head decides how the commission is allocated among the competing CPs"* | ⚠ **UNCHANGED — and its phrase *"the competing CPs"* is now the hinge of [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2).** ⟦ARCHITECT ANALYSIS⟧ **It is NOT amended, NOT narrowed and NOT widened by this document, and no reading of it is selected** |
| **`PO-Q1`** — the Site Head attribution/clash override | **UNCHANGED, UNTOUCHED, NOT REPLACED, NOT SUBSUMED — and its stage mapping is CONFIRMED** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **`PO-Q2`** — the audit-reconstruction requirement | **UNCHANGED and REINFORCED. The owner has now made DIVERGENCE between the two decisions an exemplified outcome rather than merely a permitted one** — [§6](#6-the-audit-reconstruction-chain) |
| **`PO-T1·6`** — *"The claim can lose"* | ⚠ **UNCHANGED AS A STATEMENT and NARROWED IN CONSEQUENCE.** ⟦ARCHITECT ANALYSIS⟧ **A claim can still lose, and losing is still a reachable, recorded, permanent outcome (`C-XVI` corollary 2). What `PO-W1` removes is one CONSEQUENCE that had been attributed to losing — automatic financial exclusion. The OUTCOME is untouched; what it COSTS is now fixed** |
| **`PO-S1`/`PO-S2`** — `C-XVI` = No Special Weight | **UNCHANGED, LOCKED, NOT REACHED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: `PO-W1` gives no CP any advantage by virtue of what grounded its claim, and gives no CP an advantage by virtue of having won** |
| **`PO-R1`/`PO-R2`** — `AC-14` = Option A | **UNCHANGED, LOCKED, ORTHOGONAL.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: nothing here reads an Inquiry closure, classifies one, or consumes a registration** |

---

## 2. THE CRUX — which CPs may be allocated at Stage 2

> ⟦ARCHITECT ANALYSIS⟧ **`PF-149` — this is the document's headline section and it is worked as rigorously
> as AD-01U's `K-18` cardinality investigation and AD-01V's `O-U` negation-implied-versus-new-permission
> finding. The result is NOT the one that would have been convenient, and the method is shown so the result
> is checkable rather than trusted.**

### 2.1 The question, stated precisely

> ⟦ARCHITECT ANALYSIS⟧ **Stated first, before any evidence, so that the evidence can be seen to be weighed
> against a fixed question rather than fitted to a preferred answer.**
>
> > **Is the Stage-2 allocation's permitted population BOUNDED BY the Inquiry's attribution claim set — so
> > that every CP receiving a share must have filed SOME attribution claim on that Inquiry, win or lose —
> > or does `PO-W1·4`'s fourth category, *"another CP involved in the commercial situation"*, admit a CP
> > that filed NO claim on that Inquiry at all?**
>
> **The two readings, and why the gap between them is large rather than verbal:**
>
> | | **READING N — CLAIM-SET-BOUNDED** | **READING W — GENUINELY OPEN-ENDED** |
> |---|---|---|
> | **Who may be allocated** | **Only members of the Inquiry's claim set** | **Any CP the Site Head judges commercially involved** |
> | **What `PO-W1` then ADDS to the architecture** | ⟦ARCHITECT ANALYSIS⟧ **ONE thing, and it is narrow and clean: *losing does not zero you out*. `NF-28`'s multi-claimant capacity, established at AD-01U, already carries the rest** | ⚠ **A NEW ENTRY POINT into the commission path that bypasses the claim entirely** |
| **What happens to `NF-28`** | **Nothing. Its three conjuncts are sufficient, exactly as AD-01U found** | ⚠ **Conjunct (i) has NOTHING TO EVALUATE for such a CP — not *false*, but INAPPLICABLE. All three conjuncts presuppose a claim** |
| **What happens to `NF-24`** | **Nothing. Its Subject row — *"one (CP claim × booking) eligibility outcome"* — is satisfiable** | ⚠ **Its Subject row cannot INDIVIDUATE the determination, because there is no CP claim to pair with the booking** |
| **What happens to `Q-AR`** | **Nothing beyond `A-55`'s three links, already named by AD-01U** | ⚠ **A link from BOOKING directly to CP, bypassing links 6 and 7, would be REQUIRED. No such link exists or is proposed** |
| **What happens to `P-G` / `PO-P10`** | **Nothing. The level ordering holds** | ⚠ **A CP reaches level 6 (commission eligibility) without passing levels 3, 4 or 5 — which is the whole premise AD-01P's `P-G` grounding pathway rests on** |
| **What happens to `AC-2`** | **Untouched. Different population, different mechanism** | ⚠ **OVERLAPS `AC-2`'s population — a pay-anyway route where no claim exists — without being the same question** |

> ⟦ARCHITECT ANALYSIS⟧ **The asymmetry in that table is itself a finding and is stated rather than left to
> be noticed: READING N changes NOTHING structural, and READING W changes SIX structural things at once.
> That asymmetry is a reason to be careful, and it is emphatically NOT a reason to prefer READING N — a
> reading is not made correct by being cheaper. It is recorded here so that the conclusion at
> [§2.6](#26-the-conclusion) cannot be mistaken for convenience.**

### 2.2 The three examples, read as literally as possible

> ⟦ARCHITECT ANALYSIS⟧ **`PF-150` — the owner's three examples are the most direct evidence available, and
> they are read WITHOUT supplying any fact the owner did not write. The result is that they do NOT
> discriminate, and the reasoning for that is shown rather than asserted.**

| Example | What it SAYS about CP B's claim history | What it does NOT say |
|---|---|---|
| **`PO-W1·5` — Example 1** | **NOTHING. CP B is named only as an allocatee: *"Site Head → CP A 60%, CP B 40%."*** | **It does NOT say CP B claimed. It does NOT say CP B did not claim. It does NOT say CP B lost** |
| **`PO-W1·6` — Example 2** | ⚠ **EXPLICITLY: *"CP B loses Stage 1."* CP B is therefore a member of the Inquiry's claim set — it filed and it was adjudicated against** | **It does not generalise beyond itself** |
| **`PO-W1·7` — Example 3** | **NOTHING, in the same terse form as Example 1** | **Same three silences as Example 1** |

> ⟦ARCHITECT ANALYSIS⟧ **THE TEMPTING INFERENCE, AND WHY IT DOES NOT SURVIVE.**
>
> **The tempting inference is a contrast argument: Example 2 states that CP B lost; Examples 1 and 3 do not;
> therefore Examples 1 and 3 describe a CP B who did NOT lose — i.e. who never claimed — and the owner has
> exhibited READING W twice.**
>
> **It does not survive, for a reason internal to the examples themselves.** ⟦ARCHITECT ANALYSIS⟧
> **EXAMPLE 3 BREAKS IT.** **Example 3 is *"CP A 100%, CP B 0%"*. Its evident purpose is to show that the
> Site Head may give a CP nothing — it is the permissive rule's null case. That purpose is served identically
> whether CP B claimed or not, so Example 3's silence about CP B's claim history is plainly TERSENESS and
> not a positive assertion. And Example 3 has the SAME terse form as Example 1. A contrast argument that
> must treat two identically-shaped sentences differently — reading one's silence as assertion and the
> other's as brevity — is not reading literally; it is selecting.**
>
> **The symmetrical inference fails for a symmetrical reason.** **One cannot argue that Examples 1 and 3
> IMPLY CP B claimed either, because they say nothing about it.**
>
> > ⚠ **DETERMINATION: THE THREE EXAMPLES ARE SILENT ON THE CRUX. They establish that a Stage-1 LOSER may
> > be allocated (Example 2, decisively) and that a named CP may be allocated ZERO (Example 3, decisively).
> > They establish NOTHING about whether a NON-CLAIMANT may be allocated. `PO-W1·5`'s CP B is
> > UNDERDETERMINED, not affirmatively claim-free.**

### 2.3 The four-item list, read as literally as possible

> ⟦ARCHITECT ANALYSIS⟧ **`PF-151` — with the examples silent, the weight falls on `PO-W1·4`'s prose. It is
> read clause by clause, and unlike the examples it does NOT come out neutral: it leans toward READING W,
> and the three reasons are set out so the lean can be measured rather than felt.**

**`PO-W1·4` again, verbatim:** *"The Site Head may allocate commission to: the Stage-1 attributed CP; a CP
that lost Stage-1 attribution; multiple CPs; or another CP involved in the commercial situation, subject to
the existing business process."*

| # | Observation | Which reading it favours, and how strongly |
|---|---|---|
| **(1)** | ⚠ **THE NON-REDUNDANCY ARGUMENT, AND IT IS THE STRONGEST SINGLE ARGUMENT IN THE SECTION.** **Items 1 and 2 EXHAUST the claim set.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED rather than assumed: by the time Stage 2 runs, `PO-T1·9`'s first conjunct — *"Only after attribution is resolved …"* — guarantees that every claim on the Inquiry has been adjudicated, and `PO-T1·6` (*"The claim can lose"*) plus the resolution producing an attributed CP means each one either won or lost. Item 3, *"multiple CPs"*, is a CARDINALITY statement and names no new population. So under READING N, item 4 names the EMPTY SET** | ⚠ **READING W. STRONGLY.** **A four-item list whose fourth item is empty is an odd thing for an owner to write, and the word *"another"* is disjunctive with what precedes it** |
| **(2)** | ⚠ **THE VOCABULARY SHIFT.** **Items 1 and 2 are stated in CLAIM language — *attributed*, *lost Stage-1 attribution*. Item 4 abandons it for *"involved in the commercial situation"*, a phrase that appears NOWHERE in the architecture and is not a defined term** | **READING W. MODERATELY.** ⟦ARCHITECT ANALYSIS⟧ **The owner had *"a CP that also claimed"* available and did not use it. But owners write plain English, and a vocabulary shift is weaker evidence than a population shift** |
| **(3)** | ⚠ **THE UNIQUE QUALIFIER.** **Item 4 alone carries *"subject to the existing business process."* Items 1, 2 and 3 carry no qualifier** | ⚠ **AMBIGUOUS, AND IT IS THE HINGE.** ⟦ARCHITECT ANALYSIS⟧ **Under READING W the qualifier does real work: it guards a wider population by requiring it to arrive through whatever the business already does. Under READING N it is redundant. BUT — *"the existing business process"* is itself undefined and points two ways: if it means `PO-V2·d`'s *"established clash/attribution process"*, the qualifier pulls item 4 BACK INTO the claim set, because arriving through the attribution process IS filing a claim; if it means the builder's off-system commercial practice, which `PO-U1·11` expressly contemplates (*"may exist outside BMexa"*), it does not. THE SAME SIX WORDS SUPPORT BOTH READINGS** |
| **(4)** | ⚠ **THE FRAMING SENTENCE USES THE WIDE PHRASE TOO.** **`PO-W1·2`: *"the Site Head separately decides how the commission is allocated among CPs involved in the commercial situation."* The phrase is not a throwaway fourth bullet; it is the owner's chosen descriptor for STAGE 2's POPULATION** | **READING W. MODERATELY.** ⟦ARCHITECT ANALYSIS⟧ **Weakened by the fact that it reads naturally as a plain-English gloss for *"the CPs in this deal"* — which is what a claim set is, colloquially** |
| **(5)** | **THE PROHIBITIONS DO NOT DISCRIMINATE.** **`PO-W1·8` forbids reading this as AUTOMATIC eligibility; `PO-W1·9` forbids a new AUTOMATIC rule for who receives money** | **NEITHER.** ⟦ARCHITECT ANALYSIS⟧ **Both prohibitions are about AUTOMATICITY, not about POPULATION. They forbid the architect inventing a rule; they do not say which CPs the Site Head's discretion may reach. CHECKED specifically, because a reader might take *"do not reinterpret"* as *"read it narrowly"* — it does not say that** |

### 2.4 `K-52` checked — and found to be the wrong instrument

> ⟦ARCHITECT ANALYSIS⟧ **`PF-152` — the owner asked specifically whether a *"commercial situation"* at
> Stage 2 must be scoped to the same set of CPs who clashed at Stage 1, and named `K-52` as the place to
> check. It was read at AD-01K §11 where it was minted, in full, rather than through any later restatement.
> The answer is that `K-52` does not reach the question, and the reason matters.**

**`K-52`'s exact text, quoted:**

> ⟦ARCHITECT RECOMMENDATION⟧ ***"A §11 clash is scoped to the ATTRIBUTION-CLAIM SET OF ONE INQUIRY. It is
> therefore attribution-claim-specific, and — because project is definitional to the Inquiry — necessarily
> project-specific as a consequence rather than as a separate rule. It is NOT Lead-level, NOT Person-level,
> and NOT project-level-in-general."***

| Question | Answer |
|---|---|
| **Does `K-52` scope the Stage-2 population?** | ⚠ ⟦ARCHITECT ANALYSIS⟧ **NO, AND IT CANNOT.** **`K-52`'s subject is *"a §11 clash"* — the ATTRIBUTION contest. AD-01V `PF-134` established, from the owner's own insertion of the word *commission* into `PO-U1·2` at `PO-V1·S2`, that what is surfaced post-booking is a DIFFERENT object: a clash ABOUT MONEY between CPs whose attribution position is already determined. `K-52` scopes the first object. It says nothing whatever about the second** |
| **Could `K-52` be EXTENDED to scope it?** | **ONLY BY THE ARCHITECT INVENTING A RULE, WHICH IS FORBIDDEN.** ⟦ARCHITECT ANALYSIS⟧ **Extending `K-52` over the commission clash would decide `AC-37` by construction and would fix who may receive money — exactly what `PO-W1·9` forbids and what `C-IX` reserves to §88. `K-52` IS NOT EXTENDED, NOT WIDENED, NOT NARROWED AND NOT REOPENED HERE** |
| **Is there ANY clause scoping the Stage-2 population?** | ⚠ **ONE, AND IT IS THE TENSION.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U2·B`: *"Site Head decides how the commission is allocated among **the competing CPs**."* *"Competing"* is claim-language and on its face supports READING N** — [§2.5](#25-what-the-architecture-presupposes) |
| **Does `C-XXI` scope it?** | ⚠ **IT SCOPES THE TRIGGER AND NOT THE ANSWER, AND THE TWO DISAGREE.** ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`'s head clause: the decision *"is triggered by a SUCCESSFUL BOOKING on an Inquiry carrying **competing CP claims**"* — claim-bound — *"and its answer is an ALLOCATION naming **ONE OR MORE CPs**"* — CP-bound, with no claim restriction. `C-XXI` carries the ambiguity INSIDE ITSELF, and it is an unratified architect clause and so cannot resolve anything** |

### 2.5 What the architecture presupposes

> ⟦ARCHITECT ANALYSIS⟧ **`PF-153` — the last body of evidence. Not *"what would be convenient"* but *"what
> do the standing clauses actually require to exist"*. Each is quoted at its minting document.**

| Clause, at its minting document | Its exact text | What it presupposes |
|---|---|---|
| ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`** Subject row (AD-01N §H.2) | ***"One determination — one (CP claim × booking) eligibility outcome. Not the CP. Not the client. Not the Project. Not the registration."*** | ⚠ **A CLAIM. The determination is INDIVIDUATED by a (claim × booking) pair. A CP with no claim on the Inquiry generates NO such pair and therefore NO eligibility determination — not a negative one, NONE. And the row's own negative list expressly excludes *"the CP"* as a subject** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28`** conjunct (i) (AD-01N §J.2) | Conjunct: ***"the resolved attribution claim on the converting Inquiry"***; answer-bearer column: ***"The Inquiry's claim set"*** | ⚠ **A CLAIM, on BOTH readings of the row. The claim-set reading admits every claimant; neither reading admits a non-claimant, because a non-claimant is not in the set** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28`** conjunct (iii) | ***"is the CP's registration for that (client, Project) inside its snapshotted window as at the booking date, or excepted"*** | **A CP-level fact — this one does NOT require a claim. It is the only one of the three that a non-claimant could satisfy** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`Q-AR`** links 6, 7, 11 (AD-01Q §3.10) | link 6 *"registration used as attribution basis"*; link 7 *"competing CP claim / clash"*; link 11 *"commission eligibility"* | ⚠ **THE CHAIN HAS NO PATH FROM BOOKING TO A CP THAT DOES NOT PASS THROUGH THE CLAIM. Under READING W the chain cannot answer *"why did this CP get money"* at all** |
| ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10`**'s seven levels | Level 5 *"Attribution — the resolved claim"*, level 6 *"Commission Eligibility"* | ⚠ **AN ORDERING. Under READING W a CP reaches level 6 without ever occupying levels 3–5** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`K-48`** (AD-01K §12) | ***"The counterparty of the money is the CP relationship (K-42); the producer recorded on the claim may be a sub-agent within it"*** | ⚠ **WORTH ONE LINE, BECAUSE IT CUTS THE OTHER WAY.** **The architecture ALREADY contemplates a person who produced the business but is not the claimant — and handles it INSIDE the claim, as a sub-agent within the CP relationship, not as a separate allocatee. That is evidence that the obvious *"someone else helped"* case did not previously need READING W** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`**'s closing note (AD-01U §4.1) | ***"A CP allocated 60% of a booking's commission whose registration does not contain the booking date is allocated and NOT eligible, and no allocation changes that"*** | ⚠ **THE SHARPEST CONSEQUENCE IN THE SECTION.** ⟦ARCHITECT ANALYSIS⟧ **`C-XXI` expressly states that being allocated does NOT except any conjunct of `NF-28`. So under READING W, an allocation to a non-claimant is ALLOCATED AND PERMANENTLY UNPAYABLE — it fails conjunct (i) for want of a claim and no allocation cures that. READING W is not merely a wider permission; as the architecture stands it is a permission to record a payment that can never be made** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-154` — and the honest counterweight, stated with equal force so the section is
> not one-sided.** **NONE of the seven clauses above is an OWNER decision except `PO-P10`, and `PO-P10` is
> an ordering prohibition rather than a statement that every allocatee must hold a claim. `NF-24`, `NF-28`,
> `Q-AR`, `K-48` and `C-XXI` are ALL ARCHITECT RECOMMENDATIONS AT `VALIDATE`, NONE APPROVED.** **An
> architecture's presuppositions constrain what the architecture can currently DO; they are not evidence
> about what the owner MEANT. Reading W being expensive is a fact about AD-01N and AD-01Q, not a fact about
> `PO-W1·4`.** ⟦SOURCE⟧ **Consolidated §30**: *"No schema/code implementation should be inferred from an
> unresolved product ambiguity"* — **and the converse discipline applies here: no product ambiguity should
> be resolved from the convenience of an unapproved schema.**

### 2.6 The conclusion

> ⟦BUSINESS DECISION REQUIRED — STATED AS THE HONEST RESULT IT IS⟧
>
> > ⚠ **THE SOURCES ARE GENUINELY AMBIGUOUS BETWEEN READING N AND READING W, AND THE AMBIGUITY SURVIVES
> > CAREFUL LITERAL READING OF EVERY AVAILABLE SOURCE. NEITHER READING IS SELECTED, PREFERRED, RANKED OR
> > IMPLIED ANYWHERE IN THIS DOCUMENT. IT IS MINTED AS `AC-37` AND IS
> > [§11.2](#112-the-one-next-question)'S SINGLE QUESTION.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The evidence, totalled, so the conclusion is checkable and not a shrug:**
>
> | Evidence | Verdict |
> |---|---|
> | **The three worked examples** | ⚠ **SILENT. Example 2 proves a LOSER may be allocated; Example 3 proves ZERO is permitted; neither Example 1 nor Example 3 asserts anything about a non-claimant** — [§2.2](#22-the-three-examples-read-as-literally-as-possible) |
| **`PO-W1·4`'s four-item list** | ⚠ **LEANS TO READING W.** **The non-redundancy argument is real and is the strongest single argument in either direction: under READING N, item 4 is the empty set** |
| **`PO-W1·4`'s unique qualifier** | ⚠ **TWO-WAY. *"the existing business process"* is undefined and routes either into `PO-V2·d`'s attribution process (→ N) or into `PO-U1·11`'s outside-BMexa practice (→ W)** |
| **`PO-W1·2`'s framing sentence** | **LEANS TO READING W, weakly — the same undefined phrase, used as the population descriptor** |
| **`PO-W1·8`/`·9`'s prohibitions** | **NEITHER. They are about automaticity, not population** |
| **`K-52`** | **DOES NOT REACH IT. Its subject is the §11 attribution clash; the Stage-2 clash is a different object** — [§2.4](#24-k-52-checked--and-found-to-be-the-wrong-instrument) |
| **`PO-U2·B`'s *"among the competing CPs"*** | ⚠ **LEANS TO READING N — and it is an OWNER clause, which makes it the weightiest single item against W.** ⟦ARCHITECT ANALYSIS⟧ **But it is weightier than it is decisive: the owner wrote it in AD-01U before `AC-36` was asked, and `PO-W1·2` is the same owner describing the same population a document later in wider words. WHICH of the owner's two descriptions governs is precisely what the architect may not decide** |
| **`NF-24`, `NF-28`, `Q-AR`, `PO-P10`, `C-XXI`'s closing note** | ⚠ **ALL PRESUPPOSE A CLAIM, and under READING W an allocation to a non-claimant is unpayable as the architecture stands. ALL BUT `PO-P10` ARE UNRATIFIED ARCHITECT WORK and none is evidence about the owner's meaning** |
>
> ⟦ARCHITECT ANALYSIS⟧ **WHY THIS IS NOT RESOLVED BY PICKING THE CHEAPER READING, STATED ONCE AND PLAINLY.**
>
> > **READING N is cheaper by six structural items and would let this document close as a narrow, clean
> > finding — *"losing doesn't zero you out"* and nothing else. That is exactly why it is not selected.**
> > **The owner wrote a FOURTH category. Under READING N that category is empty, and an architect who
> > declares an owner's fourth category empty has overruled the owner in the guise of interpreting them.**
> > **Under READING W the architect would instead be granting a new entry point into the commission path
> > that six standing clauses do not contemplate — which is `C-IX`'s systemic-rule territory and ⟦SOURCE⟧
> > §88's *CP commission logic* and *financial rules* MUST-ASK columns.** **BOTH errors are the same error
> > in opposite directions: the architect deciding who may receive money. `PO-W1·9` forbids it in the
> > owner's own words.**

---

## 3. What is NEW, and what was already carried

> ⟦ARCHITECT ANALYSIS⟧ **`PF-155` — the owner asked for this distinction precisely, and it is drawn
> precisely. The question is not *"is `PO-W1` important"* — it is — but *"which of its consequences did the
> architecture already carry, and which did it not."* Three separate propositions are teased apart, because
> collapsing them is how an architect's prior inference gets laundered into an owner's new decision.**

### 3.1 Is the non-gate rule NEW

| # | Proposition | Was it already carried, and by whom |
|---|---|---|
| **(i)** | **A CP other than the attribution winner may be NAMED in an allocation** | ⟦PRODUCT-OWNER DECISION⟧ **YES, SINCE AD-01U.** **`PO-U1·8`: *"100/0, 0/100, 50/50, 40/60, 60/40, 30/70, or another permitted allocation"*; `PO-U2`: *"one CP receiving 100%, another receiving 100%, or a discretionary split between multiple CPs."* An allocation space containing `40/60` names two CPs and only one of them won. NOT NEW** |
| **(ii)** | **More than one claim on one Inquiry can satisfy `NF-28` on one booking** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, SINCE AD-01U §5.6 — but as ARCHITECT WORK resting on a qualifier AD-01U left undefined.** **AD-01U's exact sentence: *"two CPs whose claims both have **standing**, each holding a registration containing the booking date, can BOTH satisfy `NF-28` today."* ⚠ **The word *standing* was never defined, and `AC-36` was precisely the question of whether a LOSER has it.** **So (ii) was carried CONDITIONALLY, and the condition is what `PO-W1` supplies** |
| **(iii)** | ⚠ **A Stage-1 LOSS does not automatically mean 0% — i.e. the attribution resolution is NOT a financial gate** | ⚠ ⟦PRODUCT-OWNER DECISION⟧ **NO. THIS IS GENUINELY NEW, AND IT IS NEW IN A STRONGER SENSE THAN *"previously unstated"*: THE ARCHITECTURE PREVIOUSLY CARRIED THE OPPOSITE IN FIVE PLACES.** **AD-01J §4.4, AD-01N §4's Reading F row and §J.2's conjunct text, AD-01Q §3.6, AD-01R §3.x and AD-01S §5.x each state or gloss the eligibility test as one only an attribution winner passes** → **`X-28`**, [§7](#7-the-contradiction-hunt) |

> ⟦ARCHITECT ANALYSIS⟧ **THE FINDING, STATED PLAINLY AND WITHOUT OVER-CLAIMING IN EITHER DIRECTION.**
>
> > **`PO-W1` IS NOT MERELY AN EXPLICITATION OF WHAT `NF-28`'s MULTI-CLAIMANT CAPACITY ALREADY IMPLIED.**
> > **AD-01U's multi-claimant finding was correct AND was conditional on an undefined word; and the same
> > architecture simultaneously carried, in five other places, a test a loser cannot pass. `PO-W1` supplies
> > the missing condition AND falsifies the five places.**
> >
> > **BUT IT IS ALSO NOT AS LARGE AS IT LOOKS AT FIRST READING, AND THAT IS REPORTED TOO.** **Under
> > READING N, `PO-W1`'s whole structural effect is: `NF-28` conjunct (i)'s answer-bearer is confirmed to
> > be the claim set in the FULL sense (every member, winner or not), and five stale glosses are
> > falsified. `NF-28` itself needs NO amendment, `NF-24` needs none, `Q-AR` needs none beyond `A-55`, and
> > `C-XXI` needs none. That is the narrower, cleaner finding the owner's question invited — and it holds
> > ONLY under READING N, which is why [§2.6](#26-the-conclusion) matters more than this section does.**

### 3.2 Eligible to be CONSIDERED versus eligible to RECEIVE

> ⟦ARCHITECT ANALYSIS⟧ **`PF-156` — the two are different questions with different owners, and `PO-W1`
> answers both. Keeping them apart is what prevents this document from over-reading the decision.**

| | **ELIGIBLE TO BE CONSIDERED** | **ELIGIBLE TO RECEIVE** |
|---|---|---|
| **What it asks** | **Is this CP's claim in the population the Site Head is dividing among?** | **May this CP end up with money despite having lost Stage 1?** |
| **Whose question it is** | **A CLAIM-SET MEMBERSHIP question** | **A COMMISSION-ALLOCATION AUTHORITY question, joined to an ELIGIBILITY question** |
| **Where it lived before `PO-W1`** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28` conjunct (i)'s answer-bearer column and `NF-24`'s per-claim subject — AD-01U §5.6. ALREADY CAPABLE of admitting every claimant** | ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`'s answer limb — *"an ALLOCATION naming ONE OR MORE CPs"*, with NO winner-restriction anywhere in the clause or its seven corollaries** |
| **What `PO-W1` does to it** | **CONFIRMS the permissive reading and REMOVES the *standing* qualifier's ambiguity. It does not enlarge the claim set** | ⚠ **SUPPLIES THE MISSING OWNER AUTHORITY.** **`C-XXI` PERMITTED it; nothing said the Site Head MAY exercise that permission against a Stage-1 outcome. `PO-W1·1` says so** |
| **What it does NOT do** | **It does not admit a CP with no claim — that is `AC-37`** | ⚠ **IT DOES NOT MAKE ANYONE ELIGIBLE.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·8`: *"Do NOT reinterpret this as automatic commission eligibility."* `C-XXI`'s closing note says the same from the architect's side: an allocation excepts no conjunct of `NF-28`. A Stage-1 loser allocated 30% must still pass all three conjuncts to be paid** |

### 3.3 Did `C-XXI` already permit this, and is `C-XXI` thereby ratified

> ⟦ARCHITECT ANALYSIS⟧ **`PF-157` — `C-XXI`'s head clause and all seven corollaries were re-read at AD-01U
> §4.1 in full, not recalled, and tested against `PO-W1` limb by limb. The answer to the first question is
> YES and the answer to the second is NO, and the gap between them is the point.**

| Limb of `C-XXI` | Does it already permit allocating to a Stage-1 loser? | Is it RATIFIED by `PO-W1`? |
|---|---|---|
| **Head — *"its answer is an ALLOCATION naming ONE OR MORE CPs"*** | ⚠ **YES. It contains NO restriction to winners, and none of the seven corollaries adds one** | ⚠ **CORROBORATED, NOT RATIFIED.** **The owner has now independently asserted the proposition this limb rests on. That is exactly the status `K-9`/`K-10` acquired at AD-01V and it is NOT ratification** |
| **Head — *"triggered by a SUCCESSFUL BOOKING on an Inquiry carrying competing CP claims"*** | ⚠ **CLAIM-BOUND, which is READING N's trigger. It sits in tension with its own answer limb** | **NO. UNTOUCHED, and it is one of the two clauses that make `C-XXI` itself ambiguous on `AC-37`** — [§2.4](#24-k-52-checked--and-found-to-be-the-wrong-instrument) |
| **(1)** a PERMISSION, any tenant-defined role may hold it, default holder `Site Head` | — | **NO. `PO-W1` names a decision-maker (*"the Site Head"*) and says nothing about permissions, role vocabulary or tenant renaming** |
| **(2)** a FOURTH, DISTINCT permission, not `C-XX`'s, not `Q-OV`'s, not `NF-24`'s | — | **NO. UNTOUCHED — and INDIRECTLY SUPPORTED, because `PO-W1` gives the Site Head a Stage-2 route that must not be confused with `Q-OV`** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **(3)** the allocation is a COMMERCIAL fact about ONE BOOKING, never an attribution fact, never derived either way | — | ⚠ **NO — BUT IT IS NOW CORROBORATED A SECOND TIME AND IS MORE LOAD-BEARING THAN EVER.** ⟦ARCHITECT ANALYSIS⟧ **AD-01V found corollary (3) load-bearing because divergence was PERMITTED. `PO-W1·6`'s Example 2 makes divergence EXEMPLIFIED: CP B loses attribution AND receives 30%. An implementation deriving attribution from allocation would report CP B as an attributed CP on an Inquiry adjudicated against it** |
| **(4)** must complete before the booking's §32 milestone is acted upon | — | **NO. `PO-W1` supplies no timing** |
| **(5)** server-side enforcement only | — | **NO. UNTOUCHED** |
| **(6)** SCOPE-BOUND to the Booking's Project | — | **NO. UNTOUCHED** |
| **(7)** NO precedence, ranking, score, weight, tiebreak, presumption, default or permitted-values list | — | ⚠ **NO — and RESTATED IN SUBSTANCE by `PO-W1·9` (*"Do NOT create a new automatic rule for who receives money"*), which is the owner pointing corollary 7's way without ratifying the clause that carries it** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION, STATED CAREFULLY BECAUSE THE TEMPTATION TO OVER-CLAIM IS REAL
> AND AD-01V'S PART 0 EXISTS TO CATCH IT.**
>
> > **`C-XXI`'s WORDING ALREADY PERMITTED ALLOCATING TO A STAGE-1 LOSER. `PO-W1` therefore CONFIRMS
> > `C-XXI`'s answer limb rather than requiring it to change, and `C-XXI` IS NOT AMENDED.**
> >
> > ⚠ **BUT `C-XXI` IS NOT RATIFIED, AND THIS DOCUMENT DOES NOT CLAIM OTHERWISE.** **Ratification would
> > require the owner to have adopted the clause's FORM — the decision-point-hood, the fourth distinct
> > permission, the §32 bound, the server-side rule, the project scoping and corollary 7 — and `PO-W1`
> > adopts none of them. TWO of the nine limbs are corroborated; SIX are untouched; ONE (the claim-bound
> > trigger) is in tension with the very question `AC-37` asks.** **`C-XVI` remains the only one of the
> > twenty-two constraints at owner status** — [§0.4](#04-the-architect-form-over-owner-content-items-c-xx-and-c-xxi).
> >
> > ⟦ARCHITECT ANALYSIS⟧ **AND THE SECOND-ORDER RESULT, WHICH IS THE REPORTABLE ONE: `C-XXI`'s ANSWER LIMB
> > IS NOW THE ONLY CLAUSE IN THE SERIES THAT CARRIES `PO-W1·1`'s PERMISSION IN ARCHITECT FORM, AND IT IS
> > UNRATIFIED. The owner's most consequential new rule has no ratified home. That is a gate-3 fact, it is
> > recorded at [§11.1](#111-the-gating-list-after-this-decision), and it is NOT solved by minting a new
> > clause here** — [Numbering discipline](#numbering-discipline-continued-without-collision).

### 3.4 The second limb of `AC-36`

> ⟦ARCHITECT ANALYSIS⟧ **`PF-158` — AD-01V asked *"what does losing then actually cost a partner?"* The
> owner did not answer it in a sentence. It IS answered, by construction, from two owner clauses read
> together — and the derivation is labelled as a derivation and is NOT presented as the owner's words.**

| What losing Stage 1 costs | Basis |
|---|---|
| **The enquiry's OWNERSHIP position** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`: attribution *"can support: enquiry ownership/attribution reporting"*** |
| **The CP performance-reporting credit for that Inquiry** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`: *"CP performance reporting"*** |
| **The conversion-reporting credit** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`: *"conversion reporting"*** |
| **Operational visibility on that Inquiry** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`: *"operational visibility"*** |
| **The historical attribution record for that Inquiry** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`: *"historical attribution"*** |
| ⚠ **NOTHING FINANCIAL, AUTOMATICALLY** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·3`: *"Stage-1 attribution does not act as a commission eligibility gate."* `PO-W1·2`: *"A Stage-1 attribution loss does NOT automatically mean 0% commission"*** |
| ⚠ **BUT ALSO: NOTHING FINANCIAL IS GUARANTEED** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·7`'s Example 3 — CP B 0% — and `PO-W1·8`/`·9`. The loser has no entitlement, only non-exclusion. What they get is the Site Head's commercial judgement and nothing else** |

> ⟦ARCHITECT ANALYSIS⟧ **THE DERIVATION, STATED AS ONE.**
>
> > **LOSING STAGE 1 COSTS EXACTLY STAGE 1'S FIVE NAMED CONSUMERS AND COSTS NOTHING ELSE AUTOMATICALLY.**
> > **This follows from `PO-V1·S1` (what attribution is for) joined to `PO-W1·3` (that it is not a
> > commission gate), and it is an ARCHITECT DERIVATION FROM TWO OWNER CLAUSES. The owner did not write
> > this sentence and it is not attributed to them.**
> >
> > ⚠ **AND ONE CONSEQUENCE IS RECORDED RATHER THAN ABSORBED, BECAUSE AD-01V §12.1 SAID IT MUST BE:**
> > **`C-XVI` COROLLARY 2 — *"A minted claim may LOSE, and losing must be a reachable, recorded, permanent
> > outcome"* — SURVIVES INTACT AS AN ATTRIBUTION AND REPORTING OUTCOME, AND LOSES ITS FINANCIAL CONTENT.**
> > **AD-01V stated in terms that this is *"a real consequence and must be stated to the owner rather than
> > absorbed."* It is stated. `C-XVI` is NOT amended, NOT weakened in its own subject — which is special
> > weight, not financial consequence — and NOT reopened.**

---

## 4. The seven mechanisms, related

> ⟦ARCHITECT ANALYSIS⟧ **`PF-159` — AD-01U and AD-01V did the mapping work and it is NOT re-derived. What
> is done here is narrower and is stated as a determination: where does `PO-W1` land in the existing map,
> and which relationships does it change.**

### 4.1 The map

| # | Mechanism | Stage | What `PO-W1` does to it |
|---|---|---|---|
| **1** | **Stage-1 ATTRIBUTION — `P-G` steps 3→5 and 7; anchored on the Inquiry by `K-18`; scoped by `K-52`; decided under `C-XX`'s permission by `PO-T2`'s named authority** | **AXIS 1** | ⚠ **NOTHING IN HOW IT IS DECIDED. `PO-W1` supplies no rule, no weight, no tilt, no tiebreak and no basis for the Stage-1 contest.** **What changes is downstream of it: one CONSEQUENCE previously attributed to its outcome is removed** |
| **2** | **`Q-OV` — the Site Head attribution/clash OVERRIDE (`PO-Q1`)** | **AXIS 1, exclusively** | ⚠ **NOT REPLACED, NOT SUBSUMED, NOT NARROWED, NOT WIDENED — and RELIEVED of a pressure it should never have carried** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **3** | **Stage-2 COMMISSION ALLOCATION — `PO-U1`/`PO-U2·B`, carried in architect form by `C-XXI`** | **AXIS 2** | ⚠ **ITS PERMITTED POPULATION IS ENLARGED TO INCLUDE STAGE-1 LOSERS, AT OWNER STATUS.** **Whether it is enlarged FURTHER, to non-claimants, is `AC-37`** — [§2.6](#26-the-conclusion) |
| **4** | **COMMISSION ELIGIBILITY — `NF-28`'s three conjuncts per (claim × booking); `K-48` as extended** | **DOWNSTREAM (`C`)** | ⚠ **ITS TEST IS UNCHANGED IN FORM AND ITS POPULATION IS FIXED.** ⟦ARCHITECT ANALYSIS⟧ **Conjunct (i) must be read with its own answer-bearer column — *the Inquiry's claim set*, EVERY member — and not with the five stale glosses that read it as a winner-gate** → **`X-28`**. **`NF-28` is NOT amended; the glosses are** |
| **5** | **The COMMISSION-ELIGIBILITY EXCEPTION — `NF-24`/`NF-25`, `PO-N8`/`PO-N9`** | **DOWNSTREAM (`C`)** | ⚠ **UNTOUCHED — CHECKED, because a Stage-2 award to a Stage-1 loser superficially resembles an exception granted in reverse.** ⟦ARCHITECT ANALYSIS⟧ **IT IS NOT ONE. `NF-24` excepts an ELIGIBILITY determination that came out INELIGIBLE, on one (claim × booking) pair, for an EXPIRED window (`PO-N8`). `PO-W1` does not except anything: a Stage-1 loser who satisfies all three conjuncts is ELIGIBLE ON THE ORDINARY TEST, no exception required. `AC-12` is NOT answered, NOT narrowed and NOT enlarged** |
| **6** | **COMMISSION APPROVAL — ⟦SOURCE⟧ §32/§40/§50, `PO-U2·C`** | **DOWNSTREAM (`C`)** | **UNTOUCHED AND NOT REACHED. No approval step, authority, gate or condition is proposed, changed or implied** |
| **7** | **PAYOUT / RECONCILIATION — the CP Ledger; ⟦SOURCE⟧ §33 clawback, §34 TDS** | **DOWNSTREAM (`C`)** | **UNTOUCHED AND NOT REACHED. `M-9` still owns every quantum and still cannot start** |

> ⟦ARCHITECT ANALYSIS⟧ **THE RELATIONSHIP, STATED AS A DETERMINATION AND BUILT ON AD-01U/V RATHER THAN
> RE-DERIVED.**
>
> > **AXIS 1 = mechanisms 1 and 2. AXIS 2 = mechanism 3. DOWNSTREAM = mechanisms 4, 5, 6, 7.**
> > **AD-01V's mapping — `Q-OV` targets Stage 1 exclusively, `C-XXI` targets Stage 2 exclusively, and the
> > mapping is TOTAL — IS UNDISTURBED AND IS CONFIRMED FOR A SECOND DOCUMENT.**
> >
> > ⚠ **WHAT `PO-W1` CHANGES IS NOT THE MAP BUT ONE ARROW THAT WAS NEVER DRAWN AND WAS TACITLY ASSUMED:
> > THERE IS NO ARROW FROM MECHANISM 1'S OUTCOME TO MECHANISM 3'S POPULATION.** **Five documents' glosses
> > drew that arrow into mechanism 4 instead** — **`X-28`** — **and `PO-W1·3` erases it in the owner's own
> > words: *"Stage-1 attribution does not act as a commission eligibility gate."***

### 4.2 `Q-OV` re-checked, and RELIEVED

> ⟦ARCHITECT ANALYSIS⟧ **`PF-160` — AD-01V §5 established the stage mapping and it is CHECKED for
> disturbance rather than re-derived. It is undisturbed. But one genuinely new relationship appears, it
> runs in the helpful direction, and it is reported because it bears on two open items.**

| AD-01V's ground for the mapping | Still holds after `PO-W1`? |
|---|---|
| **`Q-OV`'s target is *"the normal CP attribution/clash decision"* — `PO-Q1·a`, an AXIS 1 object** | **YES, UNCHANGED. `PO-W1` does not mention the override, does not enlarge its target and does not touch `PO-Q1`'s two mandatory inputs** |
| **`C-XXI`/`PO-U2·B`'s target is *"how the commission is allocated"* after booking success — an AXIS 2 object** | **YES, UNCHANGED, and its population question is `AC-37`'s — which is a question about WHO, not about WHICH AXIS** |
| **All three of `Q-OV`'s residual configurations sit on Axis 1** | **YES, ALL THREE, RE-CHECKED INDIVIDUALLY: an attribution decision on an Inquiry that never converts; a single-claimant outcome with no clash; an attribution outcome wrong for a non-commercial reason. `PO-W1` reaches none of them** |
| **`C-XVIII` forbids `Q-OV` becoming standing or generalised** | **YES, UNCHANGED. `C-XVIII` is NOT ratified, NOT widened and NOT extended here** |

> ⟦ARCHITECT ANALYSIS⟧ **THE NEW RELATIONSHIP, AND IT IS THE SECTION'S REAL CONTENT.**
>
> > ⚠ **AD-01V'S OWN QUESTION ANTICIPATED THIS, AND THE OWNER HAS ANSWERED THE ANTICIPATION.** **AD-01V
> > §11.2 asked, conditionally on branch (b): *"what should your Site Head do when the commercial reality
> > is that the losing partner genuinely brought the customer — do they have a route, or is the earlier
> > decision final?"* **The owner chose branch (a), and in doing so supplied the route: THE STAGE-2
> > ALLOCATION IS ITSELF THE ROUTE, AND IT DOES NOT REQUIRE INVOKING `Q-OV`.**
> >
> > **THE CONSEQUENCE, STATED AS A DETERMINATION:** ⟦ARCHITECT RECOMMENDATION⟧ **A Site Head who wishes to
> > pay a Stage-1 loser must use the STAGE-2 ALLOCATION and must NOT use `Q-OV` to do it. An override that
> > reversed an attribution in order to move money would be `Q-OV` performing a Stage 2 act — which AD-01V
> > §5 established is a CATEGORY error and not merely a permission error, and which `C-XXI`(2)/`PF-107`
> > already forbid. `PO-W1` makes that prohibition CHEAP TO OBEY for the first time, because the
> > legitimate alternative now demonstrably exists.**
>
> ⟦ARCHITECT ANALYSIS⟧ **Three consequences for open items, each stated so it is not over-read.**
>
> | # | Consequence |
> |---|---|
> | **1** | ⚠ **`AC-30` — *what an override's decision may SAY* — IS UNCHANGED IN WHAT IT ASKS, and ONE HAZARD RECEDES.** **The hazard AD-01U named was an override purporting to state a split. The commercial motive for that hazard is now removed, because the honest route exists. `AC-30` IS NOT ANSWERED and no answer is proposed; whether the owner wants the answer to SAY this is theirs** |
| **2** | ⚠ **`AC-28` — the three-way evidence asymmetry — IS SHARPER AND STILL UNANSWERED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-Q1·b` makes supporting evidence MANDATORY for a `Q-OV` override. `PO-U1·7`/`·11` make it EXPRESSLY NOT REQUIRED for the allocation. `PO-W1` now puts a commercially SIMILAR-LOOKING outcome — money reaching a CP the §11 process decided against — behind the evidence-FREE route rather than the evidence-BOUND one. That is not a contradiction and is not called one: the two acts produce different artefacts at different `PO-P10` levels. But the asymmetry the owner must weigh is now concrete rather than abstract. NO EVIDENCE STANDARD IS PROPOSED FOR ANY OF THE THREE LEGS** |
| **3** | **`AC-29` — until when may an override be performed — IS UNCHANGED AND IS NOT SHARPENED FURTHER HERE.** **AD-01V's candidate landmark is neither strengthened nor weakened. NO BOUNDARY IS PROPOSED, PREFERRED OR IMPLIED** |

---

## 5. The allocation-representation constraints

> ⟦ARCHITECT ANALYSIS⟧ **`PF-161` — worked as an architectural question and not an implementation one. NO
> SCHEMA IS INVENTED, PROPOSED OR IMPLIED. AD-01U §5.6's and AD-01V §6.1's answers are CHECKED under
> `PO-W1` rather than restated, and the check is run separately for READING N and READING W because they
> diverge.**

| | Can the existing architecture represent it? |
|---|---|
| **(a) An allocation naming a CP whose claim LOST Stage 1** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, WITH NO AMENDMENT — under READING N.** **The losing claim is a member of the Inquiry's claim set, which `K-17` and AD-01 §D.4 keep append-only and *"never overwritten by a later claim"*; `NF-24`'s subject pairs it with the booking; `NF-28`'s three conjuncts are evaluated for it exactly as for any other claim. `NF-28` NEEDS NO AMENDMENT** |
| **(b) PERCENTAGE allocation** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — as one of TWO BASES FOR ONE DECISION, not as one of two concepts. AD-01U §5.6's finding, CONFIRMED FOR A THIRD DOCUMENT AND UNCHANGED. The BASIS AS ENTERED is retained and not silently normalised, because converting between the two requires a commission TOTAL that ⟦SOURCE⟧ §25/§26 amendments can move.** **UNRATIFIED — AD-01U's recommendation, not the owner's decision** |
| **(c) AMOUNT allocation** | ⟦ARCHITECT RECOMMENDATION⟧ **YES — same clause, same basis-retention consequence, same unratified status** |
| **(d) The EXACT Site Head decision as an IMMUTABLE record, including one that CONTRADICTS Stage 1** | ⚠ **PARTIALLY — THE GAP IS REAL, IS NOT NEW, AND IS NOW WORSE IN IMPORTANCE THOUGH NOT IN SIZE.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-U2` requires it; `PO-Q2·a` requires it.** ⟦ARCHITECT ANALYSIS⟧ **`Q-AR` has NO LINK for it — `A-55`'s three links are named and NOT made — and `X-25`/`A-37` records that even link 8 is backed on only ONE of `PO-Q2·b`'s two substrates** — [§6](#6-the-audit-reconstruction-chain) |
| **(e) DOWNSTREAM eligibility / approval / payout** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, in its TEST, UNCHANGED. `NF-28`'s three conjuncts per (claim × booking), then `NF-24`'s exception layer, then ⟦SOURCE⟧ §32/§40/§50 and the CP Ledger.** **The PORTION is still NOT a fourth conjunct of `NF-28`, for AD-01U's exact reason, which `PO-W1` makes more load-bearing rather than less: making the portion a conjunct would make a 0% allocation indistinguishable from an ineligibility, and `PO-W1·7`'s Example 3 puts a 0% allocation on the table as an ordinary outcome** |
| ⚠ **(f) An allocation naming a CP with NO CLAIM at all — READING W only** | ⚠ **NO, AND THE GAP IS STRUCTURAL RATHER THAN A MISSING FIELD.** ⟦BUSINESS DECISION REQUIRED⟧ **`NF-24`'s subject is a (CP claim × booking) pair and cannot individuate a determination for a CP with no claim; `NF-28` conjunct (i) has nothing to evaluate; `Q-AR` has no Booking→CP path that bypasses links 6 and 7; and `C-XXI`'s own closing note makes such an allocation permanently unpayable.** ⚠ **WHAT WOULD IDENTIFY SUCH A CP IN THE ALLOCATION RECORD IS A REAL AND NEW REPRESENTATION QUESTION AND NO ANSWER IS INVENTED, PROPOSED, PREFERRED OR IMPLIED. It is recorded as a named consequence-limb of `AC-37`** — [§12.1](#121-the-new-question-ac-37) |

> ⟦BUSINESS DECISION REQUIRED — CARRIED, NOT ANSWERED, AND ONE LIMB SHARPER⟧
>
> **`AC-34` IS AD-01U'S AND IS CARRIED FORWARD.** **Whether entered percentages must sum to 100; what
> happens if they do not; whether an amount-based allocation may exceed, fall short of or must equal the
> commission `M-9` computes; whether rounding is permitted and in whose favour; and whether an allocation
> may be entered for a claim that subsequently fails `NF-28`.** **NO RULE, DEFAULT, TOLERANCE, ROUNDING
> CONVENTION, MINIMUM SHARE, MAXIMUM CP COUNT, AUTO-NORMALIZATION, AUTO-PRECEDENCE OR RESIDUAL TREATMENT IS
> INVENTED, PROPOSED, PREFERRED, RANKED OR IMPLIED ANYWHERE IN THIS DOCUMENT.**
>
> ⚠ ⟦ARCHITECT ANALYSIS⟧ **ONE LIMB IS SHARPER AND IT IS REPORTED RATHER THAN USED.** **`AC-34`'s last
> limb — *may an allocation be entered for a claim that subsequently fails `NF-28`* — previously had a
> HYPOTHETICAL population. `PO-W1` gives it a NAMED one: a Stage-1 loser is now expressly allocatable, and
> a Stage-1 loser is no more likely than anyone else to pass conjunct (iii)'s window test. The question is
> unchanged in what it asks; only its concreteness has moved.**

---

## 6. The audit-reconstruction chain

> ⟦ARCHITECT ANALYSIS⟧ **`PF-162` — the owner has expressly required that *"the audit chain must preserve
> the fact that Stage-1 attribution and Stage-2 allocation may differ."* AD-01V §7 walked the chain end to
> end against the owner's own restated terms and found every term had a home. That work is NOT re-derived.
> ONE NEW QUESTION is asked instead, because `PO-W1` makes divergence EXEMPLIFIED rather than merely
> permitted: can the chain represent a Stage-1 LOSS followed by a Stage-2 AWARD, without either
> overwriting or hiding the other?**

| Requirement | Can the chain hold it, as `Q-AR` stands with `A-55` named? |
|---|---|
| **The Stage-1 LOSS survives** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, AND THIS IS THE STRONGEST LINK IN THE CHAIN.** **`Q-AR` link 7 carries the Inquiry's claim set; ⟦SETTLED⟧ `K-17` and AD-01 §D.4 make it APPEND-ONLY and *"never overwritten by a later claim."* `Q-AR` link 8 carries the attribution/clash decision. `C-XVI` corollary 2 requires losing to be *"a reachable, recorded, PERMANENT outcome"*. NOTHING in `PO-W1` writes to any of them** |
| **The Stage-2 AWARD is recorded** | ⚠ **AS A TERM, YES — `A-55`(i) the decision, `A-55`(ii) the basis, `A-55`(iii) the resulting allocation. AS A LINK, NO: `A-55`'s three links are NAMED AND NOT MADE and are AD-01U's** |
| **NEITHER overwrites or hides the other** | ⟦ARCHITECT RECOMMENDATION⟧ **YES, BY CONSTRUCTION.** **`C-XXI`(3) forbids the allocation being written onto, merged into, derived into or read back as the Inquiry's attribution, IN BOTH DIRECTIONS; `K-18` makes an allocation recorded against a Booking incapable of being an attribution fact; `K-17` makes one recorded against the claim set incapable of being an allocation.** ⚠ **`PO-W1·6`'s Example 2 is the case this construction exists for, and it is now the owner's example rather than the architect's hypothetical** |
| **The DIVERGENCE ITSELF is reconstructable** | ⚠ **YES IN PRINCIPLE, NO IN PRACTICE TODAY — UNCHANGED FROM AD-01V AND FOR THE SAME REASON.** **Two reconstructable decisions make their divergence derivable, so NO NEW REQUIREMENT IS INVENTED. But the Stage-2 decision has no `Q-AR` link and no `NF-27` substrate, so the derivation has nothing to run on until `A-55` is made** |
| ⚠ **A Stage-2 award to a CP with NO CLAIM — READING W only** | ⚠ **NO. THE CHAIN CANNOT REPRESENT IT, AND THE DEFECT IS A MISSING PATH RATHER THAN A MISSING FIELD.** ⟦ARCHITECT ANALYSIS⟧ **Every `Q-AR` path from a Booking to a CP runs through links 6 and 7 — the grounding act and the claim. A CP that never claimed is not reachable from the Booking by any link the chain has. Answering *"why did this CP get money"* would require a NEW Booking→CP link that does not pass through a claim at all.** ⚠ **NO SUCH LINK IS PROPOSED, DESIGNED, NAMED IN CONTENT OR IMPLIED. The amendment it would require is named CONDITIONALLY as `A-64` and is NOT made** — [§9.2](#92-the-four-amendments-named-and-not-made) |

> ⟦ARCHITECT ANALYSIS⟧ **THE DETERMINATION.**
>
> > **UNDER READING N, NOTHING FURTHER IS NEEDED IN THE CHAIN BEYOND WHAT AD-01U AND AD-01V ALREADY NAMED.**
> > **The owner's requirement — that the chain preserve the fact that the two may differ — is MET AS A
> > MATTER OF TERMS AND OF CONSTRUCTION: the claim set is append-only, the two decisions are separate
> > bearers, and `C-XXI`(3) forbids either being derived from the other.** **NO NEW LINK, TERM, FIELD,
> > EVENT OR RECORD IS INVENTED OR PROPOSED.**
> >
> > ⚠ **WHAT IS MISSING IS STILL NOT A TERM BUT A SUBSTRATE, AND THE DISTANCE HAS NOT CLOSED.** **Link 8 is
> > backed on ONE of `PO-Q2·b`'s two substrates; `A-55`'s three links are backed on NEITHER. `PO-Q2·a`
> > remains OWNER-RATIFIED AND NOT YET SATISFIABLE, and the number of decisions it must reconstruct is
> > still TWO while the number of ways they may legitimately disagree has grown.**
> > **`X-25`/`A-37`'s PRIORITY RISES A FOURTH CONSECUTIVE TIME.**
>
> **What is NOT admitted, stated with equal force.** ⟦PRODUCT-OWNER DECISION⟧ **NO EVIDENCE LINK, NO
> EVIDENCE FIELD, NO EVIDENCE-SCORE TERM AND NO SUPPORTING-DOCUMENT TERM IS ADMITTED TO `Q-AR` ANYWHERE.**
> **`PO-U1·7`/`·11` place the reasoning OUTSIDE BMexa; `PO-U3·a` forbids the score; `PO-Q1·b`'s mandatory
> evidence belongs to `Q-OV` at link 9 and stays there.** ⟦ARCHITECT ANALYSIS⟧ **And NO *"reason the
> Stage-2 allocation differs from the Stage-1 attribution"* TERM is admitted either: `PO-W1` requires no
> such reason, `PO-U1·7`/`·11` expressly do not, and inventing one would be the architect adding an
> evidence requirement the owner twice declined to impose.**

---

## 7. The contradiction hunt

> ⟦ARCHITECT ANALYSIS⟧ **`PF-163` — the owner asked, in terms, that AD-01J, AD-01K, AD-01N, AD-01Q, AD-01R,
> AD-01S and AD-01T be searched for language saying or implying *"the resolved/winning attribution claim is
> the only CP eligible for commission"*, and that anything found be NAMED as a contradiction or amendment
> rather than silently corrected. THE SEARCH WAS RUN EXHAUSTIVELY AND IT RETURNED A POSITIVE RESULT. Each
> hit is quoted at the document where it appears. This is NOT a null finding like AD-01U's *"the
> architecture never contained an evidence score"*, and it is reported as the positive result it is.**

### The hits, quoted

| # | Document and place | The exact text | Why it is a hit |
|---|---|---|---|
| **1** | ⚠ **AD-01N §4, the Reading F row** | ***"A CP inside the window is eligible **only if** the other rules independently make them so — which, under `K-48`, requires them to hold the resolved attribution claim on the Inquiry that converted."*** | ⚠ **THE MOST EXPLICIT INSTANCE IN THE SERIES. It states the winner-only rule outright: eligibility REQUIRES holding the resolved claim. `PO-W1·3` says the attribution resolution is not a commission eligibility gate. These cannot both be true** |
| **2** | ⚠ **AD-01Q §3.6, the `NF-28` re-test table, conjunct (i) row** | ***"The TEST — is there a resolved attribution naming this CP on this Inquiry? — is word-for-word the same question"*** | ⚠ **A Stage-1 LOSER has NO resolved attribution naming it. Under this gloss the loser FAILS conjunct (i) and is ineligible, whatever the Site Head allocates** |
| **3** | ⚠ **AD-01R §3.x, the same table** | ***"the question is there a resolved attribution naming this CP on this Inquiry? is word-for-word the same"*** | **IDENTICAL GLOSS, second document** |
| **4** | ⚠ **AD-01S §5.x, the same table** | ***"The question conjunct (i) asks — is there a resolved attribution naming this CP on this Inquiry? — is word-for-word the same, and its answer-bearer is still `K-18`'s claim set"*** | ⚠ **THE CLEAREST EXHIBIT OF THE LATENT DEFECT, BECAUSE ONE SENTENCE HOLDS BOTH READINGS AT ONCE: a SINGULAR winner-shaped TEST and a PLURAL claim-set ANSWER-BEARER. AD-01U later rested its multi-claimant finding on the second half without noticing the first** |
| **5** | **AD-01J §4.4, the two-anchor table, WHO row** | ***"WHO is entitled — The resolved attribution claim on the converting Inquiry"*** | **The OLDEST instance. Definite singular, winner-shaped, and the ancestor of `K-48` conjunct (i)** |
| **6** | **AD-01T §5.2, discriminator row 2** | **Cites *"`K-48` conjunct (i)'s requirement of **the RESOLVED attribution claim**"*** in support of *"claim exists ≠ claim wins"* | **A CITATION rather than a statement, and it is a hit because it USES conjunct (i) as the instrument that makes losing consequential** |

### What is, and is NOT, contradicted

| Item | Result |
|---|---|
| ⚠ **The conjunct-(i) TEST as glossed in AD-01Q, AD-01R and AD-01S; the entitlement statements in AD-01J and AD-01N; AD-01T's citation** | ⚠ **CONTRADICTED BY `PO-W1·1`/`·3`** → **`X-28`**, `A-62`, `A-63`. ⟦ARCHITECT ANALYSIS⟧ **The reasoning, shown rather than asserted: `PO-W1·1` says a Stage-1 loser may RECEIVE a commission allocation, and `PO-W1·9` frames Stage 2 as being about *"who receives money."* ⟦ARCHITECT RECOMMENDATION⟧ `C-XXI`'s own closing note says an allocation *"does not except any conjunct of `NF-28`"* — so to RECEIVE, a loser must PASS `NF-28`. Under the gloss, a loser cannot pass conjunct (i). Therefore either the gloss is wrong or `PO-W1` is unimplementable, and `PO-W1` is the owner's** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`NF-28` ITSELF** | ⚠ **NOT CONTRADICTED AND NOT AMENDED.** ⟦ARCHITECT ANALYSIS⟧ **Its conjunct (i) ANSWER-BEARER column already reads *"The Inquiry's claim set"*, which admits every member. Its conjunct-text singular is `K-48`'s inheritance and is `A-54`'s subject, which is AD-01U's and is not restated here. `NF-28` IS SUFFICIENT AS WRITTEN once read with its own answer-bearer column. ITS THREE CONJUNCTS ARE UNCHANGED, UNAMENDED AND NOT FILLED** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`, `NF-25`, `NF-26`, `NF-27`** | **NONE CONTRADICTED and NONE AMENDED.** **`NF-24`'s per-claim subject is what makes READING N work at all; `NF-27`'s gap is `X-25`'s and is not new** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`K-48`** | **NOT CONTRADICTED BEYOND `A-54`.** ⟦ARCHITECT ANALYSIS⟧ **AD-01U's `A-54` already names `K-48` conjunct (i)'s definite singular as requiring restatement in `NF-28`'s claim-set form. `X-28` is a DIFFERENT and LARGER defect on the same sentence's descendants — `A-54` corrects a CARDINALITY that was merely too narrow; `X-28` names a TEST that yields the wrong ANSWER for a named population. `A-54` is NOT renumbered, NOT restated and NOT absorbed** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`C-XI`** — the registration is a TEMPORAL PROTECTION fact, never an ATTRIBUTION fact | ⚠ **NOT A HIT — CHECKED AND RULED OUT, because its wording invites the mistake.** **`C-XI` reads *"That question has exactly one answer-bearer — the resolved attribution claim on the Inquiry (K-18)."* THE QUESTION IT SCOPES IS *"who produced this Inquiry?"* — AN ATTRIBUTION QUESTION, NOT AN ELIGIBILITY QUESTION. `PO-W1` does not disturb it. NOT CONTRADICTED, NOT AMENDED, NOT REOPENED, and CORROBORATED by `PO-W1·3`'s insistence that the two levels are distinct** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`K-52`, `K-12`, `K-17`, `K-18`, `K-9`, `K-10`, `K-47`, `C-IV`** | **NONE CONTRADICTED. ALL CONFIRMED.** ⚠ **`K-9` is CORROBORATED IN ITS SECOND DIRECTION FOR THE FIRST TIME: AD-01V recorded that `K-9` runs both ways — winning is not being paid, AND being paid is not winning — and that `PO-V1` confirmed only the first. `PO-W1` confirms the SECOND. `K-9` is NOT thereby ratified; it remains AD-01K's and AD-01K is not approved** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`C-XVI` and its corollaries** | **NOT BREACHED.** ⚠ **Corollary 2 SURVIVES as an attribution and reporting outcome and LOSES its financial content, which is recorded at [§3.4](#34-the-second-limb-of-ac-36) rather than absorbed. `C-XVI`'s own subject — special weight — is untouched, and the owner has neither restated nor weakened it here** |
| ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`, `C-XX`, `C-XVII`, `C-XVIII`, `C-XIX`, `C-XXII`** | **NONE BREACHED, NONE RATIFIED, NONE WIDENED, NONE NARROWED.** **`C-XXI`(3) and (7) are CORROBORATED** — [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified) |
| ⟦SOURCE⟧ **§11** | **NOT CONTRADICTED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED in both directions. §11 reserves ATTRIBUTION resolution to builder-side authorized leadership and says nothing about who may be paid. `PO-W1` leaves §11's act untouched and speaks only downstream of it** |
| ⟦SOURCE⟧ **§32, §33, §34, §39, §40, §50** | **NOT CONTRADICTED and NOT REACHED.** **AD-01U `PF-104`'s finding — commission splitting appears NOWHERE in the Master Spec — is UNCHANGED, UNDISCHARGED and NOT re-derived** |
| ⟦PRODUCT-OWNER DECISION⟧ **`PO-N1 … PO-V2`, every clause** | ⚠ **NONE CONTRADICTED.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED individually for the one real candidate: `PO-U2·B`'s *"among the competing CPs"* versus `PO-W1·2`'s *"among CPs involved in the commercial situation."* THIS IS NOT NAMED AS A CONTRADICTION, AND THE REFUSAL IS DELIBERATE. Under READING N the two clauses AGREE exactly. A contradiction between two owner clauses would exist only under READING W, which is not selected. It is recorded as the TENSION it is at [§2.6](#26-the-conclusion) and it is `AC-37`'s to resolve, not the architect's** |
| **`O-U`, `OF-4`, `V-7`, `G-8`, `L-25`, `B-1`, `B-2`, `J-2`, `J-8`, `H-4`, `NF-9`, `C-V`, `C-VII`, `C-IX`, `C-X`, `C-XII`, `C-XIII`, `C-XIV`, `C-XV`, `OF-6`, `L-6`, `K-22`, `K-26`, `T-5`** | **NOT ENGAGED. Each checked individually; each untouched; none reopened, narrowed, ratified or rejected.** ⟦ARCHITECT ANALYSIS⟧ **`C-IX` is worth one line: it reserves a binding systemic precedence rule to §88, and its bar is VINDICATED A THIRD TIME — [§2.6](#26-the-conclusion) declines to fix the Stage-2 population precisely because doing so would be the architect creating one** |

> ⟦ARCHITECT RECOMMENDATION — `X-28`, a contradiction⟧
>
> > **`X-28` — The `NF-28`/`K-48` conjunct-(i) ELIGIBILITY TEST, AS STATED IN AD-01J §4.4 AND AD-01N §4 AND
> > AS GLOSSED IDENTICALLY IN AD-01Q §3.6, AD-01R §3.x AND AD-01S §5.x — *"is there a resolved attribution
> > naming this CP on this Inquiry?"* — IS FALSIFIED BY `PO-W1`. A CP whose claim LOST Stage 1 has no
> > resolved attribution naming it, fails the test as glossed, and would therefore be permanently
> > ineligible; `PO-W1·1` requires that such a CP may receive a commission allocation and `PO-W1·3` states
> > that the attribution resolution *"does not act as a commission eligibility gate."***
> >
> > ⟦ARCHITECT ANALYSIS⟧ **`NF-28` ITSELF IS NOT FALSIFIED AND IS NOT AMENDED — its conjunct (i)
> > answer-bearer column already reads *"The Inquiry's claim set"* and admits every member. WHAT IS
> > FALSIFIED IS FIVE DOCUMENTS' READING OF IT.** **The correct reading is the one `NF-28`'s own
> > answer-bearer column already carries, and selecting it is NOT the architect choosing between two
> > readings — `PO-W1·3` chooses, at owner status.**
> >
> > ⚠ **WHY THIS IS AN `X` AND NOT MERELY AN `A`, stated because AD-01U made the opposite call on an
> > adjacent sentence and the two decisions must be consistent.** **AD-01U declined to make `K-48`'s
> > definite singular an `X`, reasoning that *"the architecture does not disagree with itself — one older
> > sentence is simply narrower than the rule it states."* **That reasoning does not transfer.** **A
> > narrower phrasing fails to EXPRESS an outcome; this gloss is a TEST that returns FALSE for a population
> > the owner requires to be payable. An implementer applying it would build a working, passing,
> > owner-violating eligibility check.**

---

## 8. The determinations

> ⟦ARCHITECT ANALYSIS⟧ **`PF-164` — every item below is checked INDIVIDUALLY. *"Unchanged"* means CHECKED
> AND UNCHANGED, never skipped. NOTHING is closed on the strength of an answer that does not reach it, and
> no item is closed out of momentum because a neighbouring one closed. This discharges the owner's explicit
> instruction to re-check every previously open question against this decision.**

| Item | Effect of `PO-W1` |
|---|---|
| **`AC-36`** — may a Stage-1 loser be allocated, and what does losing cost | ⟦PRODUCT-OWNER DECISION⟧ ⚠ **CLOSED. IT MAY. OPTION A.** **The SEVENTH item in the series closed by direct owner ruling. Its SECOND limb is answered by construction from `PO-V1·S1` + `PO-W1·3` and the derivation is labelled as one** — [§3.4](#34-the-second-limb-of-ac-36) |
| **`AC-37`** — is the Stage-2 population bounded by the claim set | ⟦BUSINESS DECISION REQUIRED⟧ ⚠ **MINTED HERE. OPEN. The sources are honestly ambiguous and no reading is selected** — [§2.6](#26-the-conclusion), [§12.1](#121-the-new-question-ac-37) |
| **`AC-34`** — rounding / residual / sum / minimum / allocation on a claim that fails `NF-28` | ⚠ **UNCHANGED IN WHAT IT ASKS, NOT ANSWERED, NOT NARROWED — and its LAST LIMB has a NAMED population where it had a hypothetical one** — [§5](#5-the-allocation-representation-constraints) |
| **`AC-2`** — an ex-gratia route without an attribution claim | ⚠ **UNCHANGED IN WHAT IT ASKS, NOT ANSWERED — and ENLARGED BY ADJACENCY A SECOND TIME, MORE SHARPLY.** ⟦ARCHITECT ANALYSIS⟧ **AD-01V recorded `AC-2` as adjacent to `AC-36` and distinct from it: `AC-2`'s population has NO CLAIM AT ALL; `AC-36`'s had a claim that LOST. `AC-37` sits BETWEEN them and its wide reading OVERLAPS `AC-2`'s population. THEY ARE STILL NOT THE SAME QUESTION and are NOT merged** — [§12.1](#121-the-new-question-ac-37) |
| **`AC-12`** — may the eligibility exception run in reverse | **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED, because a Stage-2 award to a Stage-1 loser superficially resembles one. IT IS NOT** — [§4.1](#41-the-map) |
| **`AC-13`** — override scope, self-interest controls, CP visibility | ⚠ **SIX LIMBS OPEN PLUS LIMB (viii); NONE CLOSED; ONE MADE MORE URGENT AND NONE NARROWED.** ⟦ARCHITECT ANALYSIS⟧ **Limb (viii) — what MAY a CP be told when their claim is resolved against them — is now a question about a CP who may still be paid, which changes what an honest answer would have to say without changing what the question asks. Limb (vi) — does the portal show a losing CP that they lost — is likewise more consequential and is NOT answered. NO PORTAL SURFACE, FIELD, PROJECTION OR MESSAGE IS DESIGNED** |
| **`AC-28`** — the three-way evidence asymmetry | ⚠ **UNCHANGED IN WHAT IT ASKS, NOT ANSWERED — and CONCRETE where it was abstract** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **`AC-30`** — what an override's decision may SAY | ⚠ **UNCHANGED, NOT ANSWERED — and ONE HAZARD RECEDES because the honest route now demonstrably exists** — [§4.2](#42-q-ov-re-checked-and-relieved) |
| **`AC-29`** — until when may an override be performed | **UNCHANGED, NOT ANSWERED, NOT SHARPENED FURTHER. NO BOUNDARY PROPOSED, PREFERRED OR IMPLIED** |
| **`AC-27`** and **`AC-33`** — separation of duties across four Site-Head-shaped acts | ⚠ **UNCHANGED, NEITHER ANSWERED — CHECKED WITH PARTICULAR CARE.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` makes the Stage-2 allocation MORE powerful, because it can now reach a CP the §11 process decided against. That raises the STAKES of `AC-33`'s second limb — should one role ship holding the step-7 decision, the override AND the allocation — WITHOUT changing what it asks. NO ANSWER IS PROPOSED and the `PO-T2`/`PO-U1·4` default-holder asymmetry is UNTOUCHED** |
| **`AC-31`** — who the auditor is, and for how long | **UNCHANGED, NOT ANSWERED. NO RETENTION PERIOD IS PROPOSED** |
| **`AC-32`** — should any SEPARATE anti-abuse control exist | ⚠ **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED, because a loser being payable superficially widens the farming surface.** ⟦ARCHITECT ANALYSIS⟧ **It does not change what `AC-32` ASKS. `PO-R2` records the owner's accepted anti-abuse tradeoff and is NOT retired, NOT reduced and NOT offset; `PO-U1·12`'s personal-decision requirement and `PO-W1·9`'s no-automatic-rule prohibition are the same per-case controls AD-01R `PF-64` named. OFF the critical path** |
| **`AC-6`** — boundary convention α/β; is `N = 0` legal | ⚠ **OPEN, BOTH LIMBS, NO CONVENTION SELECTED. NO FOURTH CONSUMER; the EVALUATION POPULATION grows. AD-01T's DISCREPANCY NOTICE CARRIED FORWARD UNCHANGED, THIRD DOCUMENT** — [§0.2](#02-ac-6--re-checked-at-source-and-one-result-that-runs-neither-way) |
| **`AC-26`** — single-use or repeatable grounding power | ⚠ **OPEN, BOTH LIMBS, NOT NARROWED — TRAP TEST RE-RUN AND PASSED CLEANLY: `PO-W1` never mentions a registration** — [§0.3](#03-ac-26--re-checked-at-source-and-the-trap-test-re-run-on-this-decisions-own-clauses). **`Y-1`, `Y-3`, `AA-1`, `K-26`, `T-5` likewise NOT resolved, NOT narrowed, NOT branched** |
| **`AC-22`** — which registration governs conjunct (iii) | ⚠ **UNCHANGED IN WHAT IT ASKS — and CHECKED, because conjunct (iii) now runs for every claimant rather than the winner alone. WHICH of a CP's OWN registrations governs is the same question at a larger population** |
| **`AC-25`** — automatic mint vs discretionary act; is an unopposed claim adjudicated | ⚠ **BOTH HALVES UNCHANGED, NEITHER ANSWERED, NO DEFAULT IMPLIED — CHECKED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` reaches nothing about claim CREATION. One honest note: under READING W the first half would acquire a second surface — whether a CP the Site Head names at Stage 2 thereby acquires a claim — and `AC-37` owns that, not `AC-25`. NOT narrowed either way** |
| **`AC-15`** — what rule resolves a CP-vs-CP contest | **CONTENT LIMB STAYS CLOSED at AD-01U. NOT REOPENED. `PO-W1` supplies no rule for Stage 1 and does not ask for one** |
| **`AC-20`** · **`AC-35`** | ⟦PRODUCT-OWNER DECISION⟧ **BOTH STILL CLOSED at AD-01V. NOT REOPENED, NOT QUALIFIED** |
| **`AC-14`** = Option A · **`C-XVI`** · **`P-G`** · **`AC-4`** · **`X-5`** | ⟦PRODUCT-OWNER DECISION⟧ **ALL STILL CLOSED / RATIFIED / DISCHARGED, UNTOUCHED — CHECKED, not assumed.** **`P-G`'s ratification is not disturbed; `A-57`'s incompleteness is unchanged in content and remains unconditional. `(L-6·ground)` is not reopened** |
| **`AC-1`**, **`AC-3`**, **`AC-5`**, **`AC-7`**, **`AC-8`**, **`AC-9`/`T-9`**, **`AC-10`**, **`AC-11`**, **`AC-16`**, **`AC-17`**, **`AC-18`**, **`AC-19`**, **`AC-21`**, **`AC-23`**, **`AC-24`** | **UNCHANGED — each CHECKED INDIVIDUALLY and each RULED OUT as unaffected.** ⟦ARCHITECT ANALYSIS⟧ **`AC-3` (must a claim name a currently-approved CP relationship) and `AC-21` (is the registration's CLIENT the Person or the work record) were checked with particular care: `AC-3` acquires a SECOND SURFACE only under READING W and is NOT enlarged unconditionally; `AC-21` is untouched because `PO-W1` names no client, no registration and no work record. `AC-23` with `Q11` is STILL BLOCKING** |
| **`X-25`**/**`A-37`** — `NF-27`'s missing audit events | **NOT DISCHARGED, NOT NARROWED — PRIORITY RAISED A FOURTH CONSECUTIVE TIME** — [§6](#6-the-audit-reconstruction-chain) |
| **`X-24`**/**`A-38`(a)** · **`X-26`**/**`A-56`** · **`X-27`**/**`A-61`** — `PO-P10`'s and `PO-U3·d`'s incomplete enumerations | ⚠ **ALL THREE UNCHANGED AND NOT FILLED — CHECKED against a new temptation and it is RULED OUT.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` might seem to invite adding a level or a term for *"the Stage-2 population"*. IT DOES NOT AND NONE IS ADDED. Only the owner may extend their own enumeration, and `A-61` targets the ARCHITECT's characterisation of `PO-U3·d`, never `PO-U3·d` itself** |
| **`A-54`** (the `K-48` cardinality correction) · **`A-55`** (`Q-AR`'s three links) · **`A-56`** · **`A-57`** · **`A-58 … A-61`** | **ALL EIGHT STAND, ALL STILL NAMED AND NOT MADE.** ⚠ **`A-54` is NOT absorbed into `X-28` and is NOT renumbered — it corrects a cardinality, `X-28` corrects a test** — [§7](#7-the-contradiction-hunt). **`A-55` is CONFIRMED a second time as the three links the Stage-2 decision needs** |
| **`AA-1`, `AA-2`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`** · **`Q0-a`, `Q0-b`, `Q0-d`, `Q0-e`** · **`N-4`** · **`Q10`, `Q11`, `M-5`'s uniqueness half** | **UNCHANGED — each carried forward and each accounted for. NONE resolved, NONE narrowed, NONE enlarged.** ⚠ ⟦ARCHITECT ANALYSIS⟧ **`AB-3` — the sub-agent payee question — was checked with particular care because it is the nearest pre-existing home for *"a person who was commercially involved but is not the claimant."* `K-48` already handles that case INSIDE the claim, as a sub-agent within the CP relationship, and `AB-3` asks about the PAYEE identity, not about a separate allocatee. `AB-3` IS NOT `AC-37` and is NOT narrowed, enlarged or answered** — [§2.5](#25-what-the-architecture-presupposes). ⟦SETTLED⟧ **`V-4` is the cheapest unblocking question in the register for the FOURTEENTH consecutive document. `Q0-d` stays OFF the critical path. `Q0-c` stays ANSWERED with `AC-14`** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start.** ⚠ **NO new input is named beyond AD-01U's three — the per-CP portion, the basis-as-entered question under ⟦SOURCE⟧ §25/§26 amendment, and `AC-34`.** ⟦ARCHITECT ANALYSIS⟧ **CHECKED: `PO-W1` enlarges the POPULATION over which `M-9`'s eventual rule runs and adds NO new kind of input to it. NOTHING about `M-9`'s content is proposed, and no formula, rate, slab, percentage value, amount, milestone value, clawback quantum, passback rule or TDS treatment appears anywhere** |

---

## 9. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands.

### 9.1 Amendments to Product-Owner decisions: NONE are proposed

> ⟦ARCHITECT ANALYSIS⟧ **Stated in its own subsection because it is the thing a reader will most want
> confirmed, and because [§0](#0-part-0--the-product-owner-question-ledger-audit-re-run) exists to prevent exactly
> the error the opposite would be.** **`A-62 … A-65` ALL target ARCHITECT RECOMMENDATIONS, ARCHITECT
> GLOSSES OR ARCHITECT REGISTER ROWS.** **`PO-P10`'s enumeration and `PO-U3·d`'s list remain incomplete
> (`X-24`, `X-26`, `X-27`) and NEITHER IS AMENDED, PROPOSED FOR AMENDMENT, OR FILLED. `PO-U2·B`'s *"among
> the competing CPs"* is NOT amended, NOT narrowed and NOT widened — the tension between it and `PO-W1·2`
> is recorded as `AC-37`'s subject and is the owner's to resolve** — [§2.6](#26-the-conclusion).

### 9.2 The four amendments, named and NOT made

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-62`** | **AD-01Q §3.6's `NF-28` re-test table, conjunct (i) row; AD-01R §3.x's same row; AD-01S §5.x's same row** | ⚠ **A TEST CORRECTION, IN THREE PLACES, TO ONE SENTENCE — AND IT IS `X-28`'s.** **All three read the conjunct-(i) test as *"is there a resolved attribution naming this CP on this Inquiry?"* A Stage-1 loser fails it.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·3` — *"Stage-1 attribution does not act as a commission eligibility gate"* — requires a test a losing claimant can pass.** ⟦ARCHITECT ANALYSIS⟧ **The correction is to read the test with `NF-28`'s OWN answer-bearer column — *"the Inquiry's claim set"*, every member — and NO NEW TEST IS AUTHORED, PROPOSED OR WORDED HERE, because authoring one would fix an eligibility rule the owner has not given. `NF-28` ITSELF IS NOT AMENDED. AD-01S's row is the one that must change most, because it holds both readings in one sentence** |
| **`A-63`** | **AD-01J §4.4's two-anchor table, WHO row; AD-01N §4's Reading F row; AD-01T §5.2's discriminator row 2 citation** | ⚠ **AN ENTITLEMENT-STATEMENT CORRECTION, IN THREE PLACES, TO ONE PROPOSITION — ALSO `X-28`'s.** **AD-01N §4's is the most explicit and the most urgent: *"A CP inside the window is eligible only if … requires them to hold the resolved attribution claim on the Inquiry that converted."*** ⟦ARCHITECT ANALYSIS⟧ **AD-01J's row is the ancestor and AD-01T's is a citation of the descendant. NONE of the three is an owner clause. `K-48` ITSELF is `A-54`'s subject and is NOT re-targeted here; AD-01N's `NF-28` conjunct TEXT is likewise `A-54`'s. What `A-63` targets is the three places that draw the ELIGIBILITY consequence from the singular, which `A-54` does not reach** |
| **`A-64`** | ⚠ **CONDITIONAL — AD-01Q §3.10's `Q-AR` link list; AD-01N §H.2's `NF-24` Subject row** | ⚠ **NAMED CONDITIONALLY, ON AD-01U's OWN `A-57` PRECEDENT, AND NOT MADE.** **IF AND ONLY IF `AC-37` resolves to READING W — a CP with no claim on the Inquiry may be allocated — THEN: (i) `Q-AR` requires a Booking→CP link that does not pass through links 6 or 7, and (ii) `NF-24`'s Subject row, *"one (CP claim × booking) eligibility outcome"*, cannot individuate the resulting determination.** ⟦ARCHITECT ANALYSIS⟧ **IF `AC-37` resolves to READING N, `A-64` NEVER ARISES and is discharged without being made.** **NO LINK, TERM, FIELD, SUBJECT OR EVENT IS DESIGNED, WORDED, NAMED IN CONTENT OR IMPLIED — only the requirement for one is recorded, conditionally** — [§6](#6-the-audit-reconstruction-chain) |
| **`A-65`** | **AD-01V §0.5's `AC-36` register row; §8.1's `AC-36` row; §10.3 item 1; §11.1 gate 0; §11.2; §12.1; §12.2's NEW row; §6.2's *"The OTHER direction is `AC-36` and is NOT answered"* row** | ⚠ **A STATUS CORRECTION, IN SEVEN PLACES, TO ONE ITEM — AND NOT A CONTENT CORRECTION ANYWHERE.** ⟦PRODUCT-OWNER DECISION⟧ **`AC-36` is CLOSED by `PO-W1`, Option A. AD-01V carries it as OPEN, as gate 0, and as its own single next question, all of which were correct when written.** ⟦ARCHITECT ANALYSIS⟧ **AD-01V §12.1's two-branch consequence table is NOT falsified — branch (a) is the branch taken and its stated consequence, that `C-XVI` corollary 2 survives as a reporting outcome and loses its financial content, is CONFIRMED at [§3.4](#34-the-second-limb-of-ac-36). AD-01V §6.2's row is the sharpest instance and must record that `K-9`'s second direction is now owner-corroborated. Named as an amendment rather than left implicit because a reader of AD-01V alone would carry gate 0 forward as the head of the list, and it is not** |

> ⟦ARCHITECT ANALYSIS⟧ **FOUR. Candidates that were CONSIDERED and RULED OUT, shown so the count is
> checkable rather than asserted:**
>
> | Candidate | Why it is NOT an amendment |
> |---|---|
> | **AD-01N `NF-28`, `NF-24`, `NF-25`, `NF-26`** | **NOT AMENDED. Sufficient as written under `PO-W1` and READING N, re-checked rather than assumed. `NF-28` conjunct (i)'s answer-bearer column is already correct and is what `X-28`'s correction points at** — [§7](#7-the-contradiction-hunt) |
| **AD-01U `C-XXI`** | **NOT AMENDED and NOT WIDENED. Its seven corollaries stand unchanged; its answer limb already permitted this; corollaries (3) and (7) gain corroboration, which is a change in their support and not in their text** — [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified) |
| **AD-01U §5.6's *"two CPs whose claims both have STANDING"*** | ⚠ **NOT AMENDED — CHECKED, because the word *standing* was undefined and load-bearing.** ⟦ARCHITECT ANALYSIS⟧ **`PO-W1` resolves the ambiguity in the PERMISSIVE direction, which makes AD-01U's sentence TRUE as written. An ambiguity resolved in favour of the text does not require the text to change** |
| **AD-01U `A-54`** | **NOT ABSORBED, NOT RENUMBERED, NOT RESTATED. It corrects a CARDINALITY in `K-48` and two glosses; `X-28`/`A-62`/`A-63` correct a TEST and an ENTITLEMENT STATEMENT in six other places. Different defects, different targets** |
| **AD-01V, everything except the `AC-36` rows** | **NOT AMENDED. Its Part 0, its two-axis model, its `Q-OV` stage mapping, its `C-XXII`, its `X-27` and its `A-58 … A-61` all stand exactly as written and are CONFIRMED rather than corrected** |
| **AD-01Q `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, §3.3, §3.4** | **UNTOUCHED. `Q-OV` is neither widened nor narrowed; [§4.2](#42-q-ov-re-checked-and-relieved) describes a pressure that recedes and changes no clause** |
| **AD-01K `K-48`, `K-52`, `K-9`, `K-18`; AD-01J `C-IV`** | **NOT AMENDED HERE. `K-48`'s cardinality is `A-54`'s; `K-52` is not extended over the commission clash and is not reopened; `K-9` is corroborated in its second direction and not amended** |
| **⟦SOURCE⟧ §11, §32, §39, §40** | **NOT AMENDED and CANNOT BE by this document.** ⟦ARCHITECT ANALYSIS⟧ **Whether the spec text should record `PO-W1` — and `PF-104`'s finding that commission splitting appears nowhere in it — is a §88 matter for the owner and is NOT proposed here** |

### 9.3 No prior document was silently edited

> ⟦ARCHITECT ANALYSIS⟧ **Stated as a checked fact rather than as an intention, on AD-01Q's, AD-01R's,
> AD-01T's, AD-01U's and AD-01V's precedent.** **Files `00-*.md` through `03v-*.md` are byte-for-byte as
> they were before this document was written. Every amendment above is NAMED AND NOT MADE. Every quotation
> above is a quotation and not a rewrite.** **In particular AD-01J, AD-01N, AD-01Q, AD-01R, AD-01S, AD-01T
> and AD-01V are NOT edited, notwithstanding that `A-62` targets three places, `A-63` three, `A-64` two
> conditionally and `A-65` seven.**

### 9.4 The register after this document

| | Count |
|---|---|
| **Amendments NAMED AND NOT MADE** | **65** — `A-1 … A-65`, across fifteen documents. **One of the sixty-five (`A-64`) is CONDITIONAL on `AC-37`** |
| **Of which CONTENT-RATIFIED by the owner but still not made** | **SEVEN** — `A-32` (AD-01R), `A-39` (AD-01S), `A-38`(b) (AD-01T), `A-58` and `A-59`(i) (AD-01V), and **`A-62`**, **`A-63`** and **`A-65`** added here, all three of which record an owner ruling. ⟦ARCHITECT ANALYSIS⟧ **Eight items, seven entries — `A-62` and `A-63` are one ruling in two shapes** |
| **Constraints** | **`C-I … C-XXII`** — ⚠ **NONE MINTED HERE. ONE of the twenty-two is at owner status (`C-XVI`), and the ratio has NOT moved** |
| **Contradictions** | **`X-1 … X-28`** — `X-28` minted here |
| **Open questions** | **`AC-1 … AC-37`** — `AC-37` minted here; **`AC-36` CLOSED here**; `AC-4`, `AC-14`, `AC-15`'s content limb, `AC-20`, `AC-35` previously CLOSED; `AC-13` one limb closed at AD-01V and one added there; `AC-1` and `N-4` NARROWED-NOT-CLOSED |
| **Findings in the shared series** | **`PF-1 … PF-165`** |
| **Items closed by DIRECT PRODUCT-OWNER RULING** | **SEVEN** — `AC-14`, `C-XVI`, `P-G`, `AC-15`'s content limb, `AC-35`, `AC-20`, **`AC-36`** |

---

## 10. The four lists

> ⟦ARCHITECT ANALYSIS⟧ **Four distinct labelled lists, not prose. Nothing appears on more than one list, and
> the boundary between list (a) and list (b) is the single most important line in this document — it is what
> [§0](#0-part-0--the-product-owner-question-ledger-audit-re-run) exists to keep honest.**

### 10.1 (a) LOCKED Product-Owner decisions

1. ⟦PRODUCT-OWNER DECISION⟧ **`PO-N1 … PO-N9`** — the registration record, its immutability, non-reset, the eligibility test, the Site Head eligibility exception (AD-01N).
2. ⟦PRODUCT-OWNER DECISION⟧ **`PO-O1 … PO-O14`** — revisit vs new registration; expiry; immutability; the non-automaticities (AD-01O).
3. ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1 … PO-P12`** — registration as attribution BASIS; `PO-P10`'s seven levels; the citation requirement (AD-01P).
4. ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1`** — the Site Head attribution/clash OVERRIDE, with mandatory reason AND mandatory supporting evidence (AD-01Q).
5. ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2`** — every CP attribution and commission decision must be fully reconstructable, from immutable linked records AND audit events (AD-01Q). **NOT YET SATISFIABLE.**
6. ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1`/`PO-R2`** — `AC-14` = Option A; plus the recorded anti-abuse tradeoff (AD-01R).
7. ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1`/`PO-S2`** — `C-XVI` = No Special Weight, in ten clauses; the preserved chain (AD-01S).
8. ⟦PRODUCT-OWNER DECISION⟧ **`PO-T1`** — the ten-step sequence RATIFIED IN FULL; **`PO-T2`** — the step-7 decision-maker; **`PO-T3`** — the four-bullet authority model (AD-01T).
9. ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1·1 … PO-U1·12`, `PO-U2`, `PO-U3`** — the post-booking allocation decision; the A/B/C taxonomy; the prohibitions and preserved distinctions (AD-01U).
10. ⟦PRODUCT-OWNER DECISION⟧ **`PO-V1·S1`, `PO-V1·S2`, `PO-V1·X`** — the two-stage model; Stage 1 exists independently of commission and survives an Inquiry that never books; Stage 2 is separate; the two must not be merged and may differ (AD-01V).
11. ⟦PRODUCT-OWNER DECISION⟧ **`PO-V2·a … PO-V2·e`** — competing CP registrations permitted; the NON-DISCLOSURE requirement; no special weight; no new registration structure (AD-01V).
12. ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·1 … PO-W1·9`** — ⚠ **Stage-1 attribution does NOT restrict Stage-2 commission allocation; a CP may LOSE Stage 1 and still receive a commission allocation; a Stage-1 loss does NOT automatically mean 0%; Stage-1 attribution does NOT act as a commission eligibility gate; the Site Head may allocate to the attributed CP, a CP that lost, multiple CPs, or another CP involved in the commercial situation subject to the existing business process; three worked examples; and the two prohibitions — no automatic commission eligibility, and no new automatic rule for who receives money** (THIS DOCUMENT — **NEW**).

### 10.2 (b) ARCHITECT-DERIVED rules — RECOMMENDED, NOT APPROVED

1. ⟦ARCHITECT RECOMMENDATION⟧ **`C-I … C-XV`, `C-XVII`, `C-XVIII`, `C-XIX`** — all unratified. `C-XV` is gate 2's head.
2. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XX`** — the ordinary attribution/clash decision as a PERMISSION (AD-01T). **Its WHO is `PO-T2`'s; its FORM is the architect's. UNRATIFIED.**
3. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXI`** — the allocation as a distinct decision point and a fourth permission (AD-01U). ⚠ **Its CONTENT is `PO-U1`/`PO-U2`'s and now `PO-W1`'s; its FORM is the architect's. TWO of its nine limbs are CORROBORATED and SIX are untouched. STILL UNRATIFIED — and it is the ONLY clause in the series carrying `PO-W1·1`'s permission in architect form** — [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified).
4. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XXII`** — the non-disclosure control (AD-01V). **Its CONTENT is `PO-V2·c`'s; its FORM is the architect's. UNRATIFIED, UNTOUCHED.**
5. ⟦ARCHITECT RECOMMENDATION⟧ **`O-U`** and **`OF-4`** — the per-triple uniqueness rule and its determinacy (AD-01O).
6. ⟦ARCHITECT RECOMMENDATION⟧ **`P-G`'s expression**, **`PF-6`**, **`PF-23`** — gate 2's remaining limbs. **`P-G`'s ORDER and ACTORS are ratified by `PO-T1`; its EXPRESSION is the architect's and is incomplete** (`A-57`).
7. ⟦ARCHITECT RECOMMENDATION⟧ **`Q-OV`**, **`Q-AR`**, AD-01Q §3.3's minimum field set and §3.4's permission — all unratified (gate 3).
8. ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`, `NF-25`, `NF-26`, `NF-27`, `NF-28`** — AD-01N at `VALIDATE`. ⚠ **`NF-28` conjunct (i) must be read with its OWN answer-bearer column and NOT with the five glosses `X-28` falsifies.**
9. ⟦ARCHITECT RECOMMENDATION⟧ **`K-9`, `K-10`, `K-17`, `K-18`, `K-48`, `K-52`, `C-IV`, `J-25`, `J-26`** — ⚠ **`K-9` is now CORROBORATED IN BOTH DIRECTIONS and is NOT thereby ratified.**
10. ⟦ARCHITECT RECOMMENDATION⟧ **AD-01V's AXIS 1 / AXIS 2 model and its `Q-OV` / `C-XXI` stage mapping** — **CONFIRMED and UNDISTURBED here, and still the architect's.**
11. ⟦ARCHITECT RECOMMENDATION⟧ **This document's own [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2) evidence weighing, [§4.1](#41-the-map)'s seven-mechanism map and [§4.2](#42-q-ov-re-checked-and-relieved)'s route determination** — **the architect's. The DECISION they reason about is the owner's; the mapping is not.**
12. ⟦ARCHITECT RECOMMENDATION⟧ **`A-1 … A-65`** — sixty-five amendments NAMED AND NOT MADE, one conditional.

### 10.3 (c) UNRESOLVED Product-Owner questions

1. ⟦BUSINESS DECISION REQUIRED⟧ ⚠ **`AC-37`** — **is the Stage-2 allocation population BOUNDED by the Inquiry's claim set, or does *"another CP involved in the commercial situation"* admit a non-claimant** (NEW — [§12.1](#121-the-new-question-ac-37)). **This is [§11.2](#112-the-one-next-question)'s question.**
2. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-34`** — rounding, residual, sum-to-100, minimum share; allocation on a claim that fails `NF-28`. **Its last limb now has a named population.**
3. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-6`** — boundary convention α vs β; is `N = 0` legal. **TRIPLY money-bearing. AD-01T's DISCREPANCY NOTICE STANDING AND UNDISCHARGED, THIRD DOCUMENT.**
4. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-26`** — is a registration's grounding power SINGLE-USE or REPEATABLE, inside the window and after a conversion.
5. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-13`** — six open limbs plus limb (viii), including self-interest controls across four acts and what a losing CP may be told.
6. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-27`, `AC-33`** — separation of duties across four Site-Head-shaped acts; the `PO-T2`/`PO-U1·4` default-holder asymmetry. **Higher stakes, same question.**
7. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-28`, `AC-29`, `AC-30`, `AC-31`, `AC-32`** — the three-way evidence asymmetry (now concrete); the override's time bound; what an override may say; who the auditor is and for how long; whether a separate anti-abuse control should exist.
8. ⟦BUSINESS DECISION REQUIRED⟧ **`AC-2`, `AC-3`, `AC-5`, `AC-7`(second half), `AC-8`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-12`, `AC-16`, `AC-17`, `AC-18`, `AC-19`, `AC-21`, `AC-22`, `AC-23`, `AC-24`, `AC-25`** — the operand and governance tier. ⚠ **`AC-2` is adjacent to `AC-37` and is NOT merged with it.**
9. ⟦BUSINESS DECISION REQUIRED⟧ **`Q11`** — **STILL BLOCKING.** **`Q10`**, **`M-5`**'s uniqueness half, **`AA-2`**, **`AB-3`**, **`V-4`** (the cheapest unblocking question in the register for a FOURTEENTH consecutive document).
10. ⟦BUSINESS DECISION REQUIRED⟧ **`Q0-a`, `Q0-b`, `Q0-e`** — `Q0-e`'s list is now `A-1 … A-65`. **`Q0-d` stays OFF the critical path.**
11. ⟦BUSINESS DECISION REQUIRED⟧ **Whether `PO-P10`'s and `PO-U3·d`'s enumerations should be extended** — `X-24`, `X-26`, `X-27`. **Only the owner may extend their own lists.**

### 10.4 (d) FUTURE VALIDATION / BUILD questions

1. **Ratify or reject gate 2** — `C-XV`, `PF-6`, `PF-23`.
2. **Ratify or reject gate 3** — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission, `C-XX`, `C-XXI`, `C-XXII`. ⚠ **`C-XXI` acquires new urgency: it is the only architect-form carrier of `PO-W1·1`.**
3. **Ratify or reject `A-1 … A-65`** — sixty-five unmade amendments across fifteen documents (`Q0-e`). ⚠ **`A-62`, `A-63` and `A-65` are the cheapest: all three merely record a ruling the owner has already given.**
4. **Discharge `X-28`** — the conjunct-(i) test as glossed in five places. **NEW, and it is a correctness defect rather than a completeness one.**
5. **Discharge `X-25`/`A-37`** — `NF-27`'s missing audit events. **Priority raised a FOURTH consecutive time.**
6. **`M-9`** — the commission model. **STILL CANNOT START.** No new input beyond AD-01U's three.
7. **⟦SOURCE⟧ §32/§33/§34/§40's singularity** — commission splitting appears NOWHERE in the Master Spec (`PF-104`). **A §88 matter for the owner.**
8. **Approve or reject AD-01N through AD-01V and this document.** **NONE is approved.**

---

## 11. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places these decisions in the **CP commission logic**, **financial rules**, **authorization
> rules**, **source-of-truth rules**, **tenant architecture** and **audit requirements** MUST-ASK columns.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2),
> [§7](#7-the-contradiction-hunt), [§8](#8-the-determinations) or [§9](#9-the-amendment-register) becomes
> approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

> ⟦ARCHITECT ANALYSIS⟧ **The call is reached FROM [§0](#0-part-0--the-product-owner-question-ledger-audit-re-run)'s
> re-assembled ledger rather than from the momentum of a clean answer, and the ledger is what makes it
> `VALIDATE`. The honest report is both halves.**
>
> **`AC-36` IS CLOSED CLEANLY, COMPLETELY AND IN THE QUESTION'S OWN TERMS, AND THAT IS STATED PLAINLY.**
> **It is the SEVENTH register item closed by direct Product-Owner ruling. Both of its limbs are answered.
> `K-9`'s second direction is owner-corroborated for the first time. `C-XXI`(3) and (7) are corroborated.
> AD-01V's two-axis model and stage mapping survive intact and are confirmed for a second document. And the
> contradiction hunt found a real defect that had been latent for five documents.**
>
> **AND IT IS `VALIDATE`, FOR THREE REASONS THE LEDGER SUPPLIES AND RHETORIC WOULD NOT.** ⚠ **FIRST: the
> owner's own answer opens a QUESTION LARGER THAN THE ONE IT CLOSED — `AC-37`, which under one of its two
> readings requires a new entry point into the commission path that six standing clauses do not
> contemplate. SECOND: `X-28` is a CORRECTNESS defect in a money-bearing test, and it is undischarged.
> THIRD: ONE OF TWENTY-TWO CONSTRAINTS IS AT OWNER STATUS and the number did not move — `PO-W1`'s most
> consequential rule has no ratified architect-form home.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **The decision is the Project Owner's, is internally coherent,
answers the exact question it was asked, and contradicts no approved decision. It asks for MORE separation
between the two stages rather than less, it attaches two prohibitions against over-reading itself, and it
resolves — in the architecture's favour — an ambiguity that had been latent since AD-01J.**

**Why not BUILD NOW.**

- ⚠ **`AC-37` IS NEW, MATERIAL AND UNANSWERED, AND IT IS STRUCTURALLY LARGER THAN `AC-36` WAS.** **Under
  READING N nothing changes; under READING W, `NF-24`'s subject, `NF-28`'s conjunct (i), `Q-AR`'s link set,
  `PO-P10`'s ordering, `AD-01P`'s `P-G` grounding pathway and `C-XXI`'s trigger are all reached at once**
  — [§2.1](#21-the-question-stated-precisely).
- ⚠ **`X-28` IS UNDISCHARGED.** **Five documents state or gloss the eligibility test as one only an
  attribution winner passes. An implementer following any of them would build a passing,
  owner-violating check** — [§7](#7-the-contradiction-hunt).
- **`AC-34` IS UNANSWERED** — residual, rounding, sum and minimum behaviour, expressly not invented here.
  **Its last limb now has a named population.**
- **`PO-W1·1` HAS NO RATIFIED ARCHITECT-FORM CARRIER.** **`C-XXI`'s answer limb is the only clause in the
  series that expresses it, and `C-XXI` is unratified** — [§3.3](#33-did-c-xxi-already-permit-this-and-is-c-xxi-thereby-ratified).
- **`PO-Q2·a` REMAINS OWNER-RATIFIED AND NOT YET SATISFIABLE.** **`A-55`'s three links are still not made;
  `NF-27` backs the Stage-2 decision on neither substrate (`X-25`/`A-37`, priority raised a FOURTH time).**
- **SPLITTING A COMMISSION IS ABSENT FROM THE ENTIRE MASTER SPEC** — `PF-104`, undischarged. **`M-9` cannot
  start.**
- **Gate 2's three limbs and ALL of gate 3 are untouched.** **`C-XV`, `PF-6`, `PF-23`, `Q-OV`, `C-XVII`,
  `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3 and §3.4, `C-XX`, `C-XXI`, `C-XXII` — ALL STILL UNRATIFIED.**
- **`AC-6` CARRIES AD-01T'S DISCREPANCY NOTICE FOR A THIRD CONSECUTIVE DOCUMENT AND IS TRIPLY
  MONEY-BEARING.** **`AC-26`, `AC-25` (both halves), `AC-22`, `AC-24`, `AC-27 … AC-33`, `AA-2`, `AB-3`,
  `AC-21` and `AC-23` with `Q11` (BLOCKING) are all untouched.**
- **SIXTY-FIVE amendments stand NAMED AND NOT MADE across fifteen documents.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. `AC-37` is one sentence from the owner and [§2](#2-the-crux--which-cps-may-be-allocated-at-stage-2)
has already laid out exactly what each answer costs. `X-28` needs no analysis at all — it needs the owner's
ruling applied to five sentences. `AC-34` is a short financial ruling. Every remaining gate is a signature
or a short answer, and a further architect document would be analysis substituting for a decision —
AD-01L's own words, applied now for the eleventh time.** **And shelving would waste what this answer has
bought: the two-stage model is now settled in its shape AND in its principal consequence, and what remains
is the boundary of one phrase.**

### 11.1 The gating list after this decision

> ⟦ARCHITECT ANALYSIS⟧ **AD-01V's eight-item list, restated with gate 0 DISCHARGED, `AC-37` promoted to the
> head, and one item added to gate 3's neighbourhood as a new gate. The list stays at EIGHT, and that
> arithmetic is reported rather than fitted: ONE item closed, ONE opened, and ONE contradiction added to an
> existing gate rather than given its own.**

| # | Gate | Status |
|---|---|---|
| **0** | ⚠ **`AC-37`** — is the Stage-2 allocation population bounded by the Inquiry's claim set | ⟦BUSINESS DECISION REQUIRED⟧ **NEW, AND IT IS THE HEAD OF THE LIST.** ⟦ARCHITECT ANALYSIS⟧ **It sits above gate 2 for the same structural reason `AC-35` and `AC-36` did: it decides the SUBJECT the other gates operate on. It is the third consecutive gate-0 item and the first whose two answers differ in COST by an order of magnitude** → [§11.2](#112-the-one-next-question) |
| **~~0′~~** | ~~`AC-36`~~ — may a Stage-1 loser be allocated | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED HERE. IT MAY. Option A** |
| **~~0″~~** | ~~`AC-35`~~ · ~~`AC-14`~~ | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED at AD-01V and AD-01R** |
| **1** | ⚠ **`X-28`** — the conjunct-(i) eligibility test as glossed in five places | **NEW. ⟦ARCHITECT ANALYSIS⟧ It is placed at gate 1 rather than folded into gate 3 because it is a CORRECTNESS defect in a money-bearing test, not a ratification. It is discharged by APPLYING `PO-W1·3`, not by authoring a new test** — `A-62`, `A-63` |
| **2** | **`C-XV`**, **`PF-6`**, **`PF-23`** — AD-01P gate 2's three remaining limbs | **ALL ARCHITECT DERIVATIONS, ALL UNRATIFIED. `C-XV` remains this gate's head** |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3 and §3.4, `C-XX`, `C-XXI`, `C-XXII`** | **ALL UNRATIFIED.** ⚠ **`C-XXI` is now the only architect-form carrier of `PO-W1·1` and its ratification is correspondingly more urgent** |
| **4** | **`AC-27`** and **`AC-33`** — separation of duties across four Site-Head-shaped acts | **NEITHER ANSWERED, NEITHER NARROWED — and the STAKES are higher** |
| **5** | **`AC-30`**, **`AC-29`**, **`AC-28`** — what an override may say; until when; the evidence asymmetry | **NONE ANSWERED. `AC-30`'s hazard recedes; `AC-28` is concrete. Neither is narrowed** |
| **6** | **`AC-13`** — six open limbs plus limb (viii) | **NONE CLOSED HERE, NONE NARROWED. Limb (vi) and limb (viii) are more consequential** |
| **7** | **`AC-31`** — who the auditor is and FOR HOW LONG | **NOT ANSWERED** |
| **8** | **`AC-34`** · **`AC-25`** (both halves) · **`AC-12`** · **`AC-2`** · and the operand tier — **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AB-3`, `AC-21` with `M-5`'s uniqueness half**, with **`AC-32`** as a VALIDATE / BUILD-LATER consideration | **NOT ANSWERED. `Q11` still BLOCKING. `AC-6` carries AD-01T's discrepancy notice unchanged for a THIRD document** |

**What VALIDATE means concretely.**

1. **Take `AC-37` first.** **It is one sentence from the owner and it decides whether this decision is a
   narrow, clean finding or a structural change to the commission path.**
2. **Then apply `PO-W1·3` to `X-28`'s five sentences** — `A-62` and `A-63`. **No new rule is authored; an
   owner ruling is recorded where five documents currently say the opposite.**
3. **Then `AC-34`, in the same sitting** — its shape has been stable since AD-01V and its last limb now has
   a named population.
4. **Then gate 2, then gate 3** — with `C-XXI` flagged as the carrier of the owner's newest rule. **Gates 2
   and 3 remain one sitting.**
5. **Then gates 4–8 in the commercial sitting that TWELVE consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1, AD-01Q §6.1, AD-01R §6.1, AD-01S §6.1,
   AD-01T §6.1, AD-01U §6.1, AD-01V §11.1 and this section.
6. **Carry AD-01T's `AC-6` NOTICE forward unchanged.** **It is not discharged, it blocks no ratification, it
   remains triply money-bearing, and it has now survived three documents' worth of adjacent decisions.**
7. **Ratify or reject `A-62 … A-65` alongside `A-1 … A-61`** (`Q0-e`). **Sixty-five unmade amendments across
   fifteen documents. `A-62`, `A-63` and `A-65` are the cheapest: all three merely record rulings the owner
   has already given. `A-64` is CONDITIONAL on `AC-37` and may never arise.**
8. **Nothing may be built meanwhile that presupposes an answer to any remaining gate.** ⟦SOURCE⟧
   consolidated **§30**. **Everything AD-01P §6.1(4) through AD-01V §11.1(7) lists as NOT-TO-BE-BUILT
   remains not-to-be-built, and this decision adds to that list: no eligibility test that requires a CP to
   hold the resolved attribution; no rule, default or presumption that a Stage-1 loser receives zero; no
   rule, default or presumption that a Stage-1 loser receives anything; no automatic derivation of any
   allocation from any attribution outcome in either direction; no assumption either way about whether a
   CP with no claim on the Inquiry may be allocated; and no `Q-AR` link, `NF-24` subject or allocation
   record shape that presupposes an answer to `AC-37`.**

### 11.2 The one next question

> ⟦BUSINESS DECISION REQUIRED — ONE QUESTION, AND ONLY ONE⟧
>
> **This is `AC-37`, stated in the same plain register the owner has been answering in. It is asked alone
> because a list of several is how a gating list stops being taken.**
>
> > **"Thank you — that is clear, and we have recorded it exactly as you gave it. Losing the enquiry no
> > longer costs a partner the money; it costs them the enquiry, the ownership of that customer and the
> > credit in your reports. Your Site Head decides the money separately and can decide it differently. We
> > have that.**
> >
> > **One thing in your own wording we cannot settle for you, and it is a bigger question than it looks.**
> >
> > **You listed who your Site Head may pay: the partner who was attributed; a partner who lost; several
> > partners; or — your words — 'another CP involved in the commercial situation.' The first three are all
> > partners who had raised a claim on that enquiry, whether they won it or not. The fourth reads wider,
> > and we do not want to guess which you meant.**
> >
> > **So: when your Site Head divides the brokerage on a booking, can they include a partner who never
> > raised a claim on that enquiry at all — someone who was in the deal commercially (a co-broke, a
> > referral, a partner who worked the customer alongside) but whose name never went on that enquiry as a
> > claimant?**
> >
> > **(a) NO. Everyone in the split must have put their name on that enquiry, win or lose. 'Another CP
> > involved' means one of the other partners who claimed it.**
> >
> > **(b) YES. Your Site Head can bring in a partner from the commercial situation who never claimed that
> > enquiry.**
> >
> > **Whichever you pick, tell us one more thing: if the answer is (b), how does your team establish that
> > such a partner was genuinely involved — is that the 'existing business process' you mentioned, and does
> > it happen inside BMexa or outside it, the way you said the Site Head's reasoning can?"**
>
> ⟦ARCHITECT ANALYSIS⟧ **Why this one, and not another — verified against this document's own findings and
> against [§0](#0-part-0--the-product-owner-question-ledger-audit-re-run)'s ledger rather than assumed.**
>
> | Candidate | Why it is not the question |
> |---|---|
> | **`AC-34`** (rounding / residual / sum) | **THE RUNNER-UP FOR A SECOND CONSECUTIVE DOCUMENT, AND IT IS NOT THE QUESTION FOR THE SAME REASON AS LAST TIME, RE-CHECKED RATHER THAN CARRIED.** **It asks what the numbers must do across a set whose MEMBERSHIP is still not fixed. `AC-36` fixed part of that membership; `AC-37` fixes the rest. Asking `AC-34` first still wastes the answer** |
> | **`X-28`** | ⚠ **SERIOUSLY CONSIDERED, BECAUSE IT IS A CORRECTNESS DEFECT IN A MONEY-BEARING TEST AND IT SITS AT GATE 1.** **It is NOT the question because IT IS NOT A QUESTION: the owner has already answered it at `PO-W1·3`. What it needs is APPLICATION to five sentences, which is `A-62`/`A-63` and is a ratification, not a decision. Asking the owner to re-decide something they have decided would waste a sitting** |
| **`AC-6`** (boundary convention) | **CARRIED FORWARD AS AD-01T's NOTICE, unchanged, for a THIRD document. It is one word, it is triply money-bearing, and it is the OLDEST genuinely-unanswered item in the register — which was checked AGAIN, because the task of this section is to ask whether the oldest should outrank the newest. It should not: it blocks NO ratification and is a CONFIGURATION convention rather than a model question. AD-01T, AD-01U and AD-01V each declined it for this reason and the reason has not changed. IT IS NOT FORGOTTEN AND IT IS NOT DISCHARGED** |
| **`AC-26`** (single-use or repeatable grounding) | **GENUINELY OPEN, re-checked at source, and survived its trap test more cleanly than at AD-01V. It is NOT the question because it decides how many CLAIMS one registration may produce, which is upstream of everything here but blocks no ratification — it has waited seven documents, and `AC-37` blocks one now** |
| **`AC-2`** (an ex-gratia route with no claim) | ⚠ **THE CLOSEST NEIGHBOUR, AND IT WAS CHECKED CAREFULLY BECAUSE UNDER READING W THE TWO POPULATIONS OVERLAP.** **It is NOT the question because it asks whether a PAY-ANYWAY route should EXIST at all; `AC-37` asks whether the owner's own EXISTING Stage-2 route already reaches that population. `AC-37` is about what the owner just said; `AC-2` is about what they have never said. Answering `AC-37` may make `AC-2` easier; answering `AC-2` would not answer `AC-37`** |
| **`AC-13`'s limbs, `AC-27`/`AC-33`, `AC-28 … AC-32`** | **ALL live, several with higher stakes after this decision, and ALL downstream: they are questions about DISCLOSURE, SEPARATION OF DUTIES and EVIDENCE surrounding a decision whose PERMITTED SUBJECT `AC-37` fixes. Asking who may hold the allocation permission before knowing whom it may reach asks the smaller question first** |
| **Gate 2's and gate 3's limbs** | **RATIFICATIONS of material already written in full. The owner can sign or decline each; nothing must be authored** |
| **`AC-36`** | **CLOSED HERE. Not a candidate** |
>
> **And the positive reason, stated once.** ⟦ARCHITECT ANALYSIS⟧ **`AC-37` EXISTS ONLY BECAUSE `PO-W1` WAS
> GIVEN, AND IT IS THE OWNER'S OWN PHRASE RATHER THAN THE ARCHITECT'S CONSTRUCTION.** **It reaches
> `NF-24`'s subject row, `NF-28`'s conjunct (i), `Q-AR`'s link set, `PO-P10`'s level ordering, AD-01P's
> `P-G` grounding pathway, `C-XXI`'s own trigger clause and `PO-U2·B`'s *"among the competing CPs"* —
> SEVEN places, which is more than any other open item reaches and two more than `AC-36` reached. Its two
> answers differ in structural cost by an order of magnitude, and one of them requires a commission-path
> entry point that the architecture has never had. And it is the owner's alone: ⟦SOURCE⟧ §88 puts it in
> the CP commission logic and financial rules MUST-ASK columns, `C-IX` forbids the architect supplying it,
> and `PO-W1·9` forbids it in the owner's own words — *"Do NOT create a new automatic rule for who receives
> money."***

---

## 12. Remaining open items

### 12.1 The new question, `AC-37`

> ⟦BUSINESS DECISION REQUIRED — `AC-37`⟧
>
> **Is the Stage-2 commission allocation's permitted population BOUNDED BY the Inquiry's attribution claim
> set — so that every CP receiving a share must have filed SOME attribution claim on that Inquiry, win or
> lose — or does `PO-W1·4`'s fourth category, *"another CP involved in the commercial situation, subject to
> the existing business process"*, admit a CP that filed NO claim on that Inquiry at all?**
>
> **And three consequence-limbs, each recorded and NONE answered:**
>
> 1. **If the wide reading is correct, what IDENTIFIES such a CP in the allocation record**, given that
>    `NF-24`'s subject is one **(CP claim × booking)** pair and there is no claim to pair with?
> 2. **Does `NF-28` — all three of whose conjuncts presuppose a claim on the Inquiry — apply to such a CP
>    at all**, and if it does not, what determines that CP's commission eligibility?
> 3. **What does *"the existing business process"* refer to** — `PO-V2·d`'s *"established clash/attribution
>    process"*, which would route the fourth category back into the claim set, or the off-system commercial
>    practice `PO-U1·11` contemplates, which would not?
>
> **Basis:** ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1·2` and `PO-W1·4` — the phrase, used twice** · ⟦PRODUCT-OWNER
> DECISION⟧ **`PO-U2·B` — *"among the competing CPs"*** · ⟦ARCHITECT RECOMMENDATION⟧ **`NF-24`'s Subject
> row; `NF-28` conjunct (i); `Q-AR` links 6, 7, 11; `C-XXI`'s head clause; `K-52`** · ⟦PRODUCT-OWNER
> DECISION⟧ **`PO-P10`'s level ordering** · ⟦SOURCE⟧ **§88** MUST-ASK: **CP commission logic**, **financial
> rules**, **source-of-truth rules**, **audit requirements**.
>
> ⟦ARCHITECT ANALYSIS⟧ **NO ANSWER IS PROPOSED, PREFERRED, RANKED OR IMPLIED, AND NEITHER READING IS
> SELECTED.** **What hangs on it is named and not hidden:**
>
> | If the answer is | Then |
> |---|---|
> | **READING N — claim-set-bounded** | **`PO-W1`'s whole structural effect is narrow and clean: `NF-28` conjunct (i)'s answer-bearer is confirmed in its full sense and `X-28`'s five glosses are corrected. `NF-28`, `NF-24`, `Q-AR`, `C-XXI` and `P-G` ALL need nothing further. `A-64` never arises. `AC-2` is untouched. This is the cheaper outcome BY FAR, and that is not a reason to prefer it** |
| **READING W — a non-claimant may be allocated** | ⚠ **A NEW ENTRY POINT INTO THE COMMISSION PATH. `NF-24`'s subject cannot individuate the determination; `NF-28`'s conjuncts have nothing to evaluate; `Q-AR` needs a Booking→CP link bypassing links 6 and 7; `PO-P10`'s ordering is entered at level 6; AD-01P's `P-G` grounding pathway — that a CLAIM is the unit everything downstream operates on — is no longer universal; `C-XXI`'s claim-bound trigger disagrees with its own answer limb; and `C-XXI`'s closing note makes such an allocation UNPAYABLE as things stand. `A-64` arises. `AC-2`'s population is partly reached without `AC-2` being answered** |
>
> ⟦ARCHITECT ANALYSIS⟧ **Why it is not an existing item, checked individually against the four nearest:**
>
> | | Why `AC-37` is not it |
> |---|---|
> | **`AC-36`** — may a Stage-1 loser be allocated | **CLOSED. Its population is a CP whose claim EXISTS, was MINTED, was ADJUDICATED and LOST. `AC-37`'s disputed population is a CP with NO CLAIM. `AC-36`'s answer does not reach it and the owner's Example 2 does not exhibit it** |
| **`AC-2`** — an ex-gratia route without an attribution claim | ⚠ **ADJACENT AND OVERLAPPING UNDER ONE READING, AND STILL A DIFFERENT QUESTION.** **`AC-2` asks whether a pay-anyway route should EXIST. `AC-37` asks whether the owner's EXISTING Stage-2 route already is one. `AC-2` is ENLARGED BY ADJACENCY FOR A SECOND TIME and is NOT answered, NOT narrowed and NOT merged** |
| **`AC-15`** — what rule resolves a CP-vs-CP contest | **CLOSED: there is no rule. `AC-37` asks nothing about how Stage 1 comes out** |
| **`AC-34`** — the FORM of an allocation | **`AC-34` asks what the numbers must do across a set. `AC-37` asks who may be in the set. Upstream, not overlapping — the same relation `AC-36` had to it** |
| **`AB-3`** — the sub-agent payee | **`AB-3` asks WHO IS PAID for a claim that exists, where the producer is a sub-agent within the CP relationship. `AC-37` asks whether a SEPARATE CP with no claim may be allocated at all. `K-48` already handles `AB-3`'s case inside the claim** — [§2.5](#25-what-the-architecture-presupposes) |

### 12.2 The rest, carried forward

**An INDEX onto [§8](#8-the-determinations), which is the authority.**

| Effect | Items |
|---|---|
| **CLOSED BY DIRECT PRODUCT-OWNER RULING** | **`AC-36`** — a CP whose claim LOST Stage 1 MAY be allocated a share at Stage 2; Option A; and what losing costs is fixed to Stage 1's five named consumers. **The SEVENTH such closure in the series** |
| **NEW** | **`X-28`** (the conjunct-(i) eligibility test as glossed in five places is falsified) · **`AC-37`** (is the Stage-2 population bounded by the claim set) · **`A-62`, `A-63`, `A-64`(conditional), `A-65`** |
| **NONE MINTED** | ⚠ **NO NEW CONSTRAINT. The `C-` series stays at `C-XXII` and the candidate is shown being ruled out** — [Numbering discipline](#numbering-discipline-continued-without-collision) |
| **CONFIRMED** | **`K-18`** — a TENTH consecutive document · **`K-9`** — ⚠ **CORROBORATED IN ITS SECOND DIRECTION FOR THE FIRST TIME** · **`K-10`**, **`K-17`**/§D.4, **`K-52`** (and shown to be the wrong instrument for `AC-37`), **`K-47`**, **`C-IV`**, **`C-XI`** (checked and ruled out as a hit), **`C-XVI`** (not breached), **`C-XXI`**(3) and (7) (corroborated), **`NF-28`**'s three conjuncts (unamended), **`NF-24`**'s per-claim subject, **`O-U`**/**`OF-4`**, **`C-XXII`**, **`PO-Q1`**/**`Q-OV`**'s Stage-1-exclusive mapping, AD-01V's two-axis model, **`C-IX`**'s §88 reservation (vindicated a THIRD time) |
| **ENLARGED, NOT ANSWERED** | **`AC-2`** (by adjacency to `AC-37`, a second time and more sharply) |
| **SHARPENED OR MADE CONCRETE, NOT NARROWED IN WHAT THEY ASK** | **`AC-34`**'s last limb (a named population) · **`AC-28`** (a concrete asymmetry) · **`AC-27`**/**`AC-33`** (higher stakes) · **`AC-13`** limbs (vi) and (viii) (more consequential) · **`AC-22`** (a larger population) |
| **HAZARD RECEDED, QUESTION UNCHANGED** | **`AC-30`** — the honest Stage-2 route to paying a loser now demonstrably exists, so the motive to misuse `Q-OV` for it is removed |
| **PRIORITY RAISED, NOT DISCHARGED** | **`X-25`**/**`A-37`** — a FOURTH consecutive rise |
| **STATUS CHANGED, CONTENT UNCHANGED** | **AD-01V §12.1's `AC-36` register rows and gate 0** — from OPEN to CLOSED (`A-65`) · **AD-01U §5.6's *"standing"*** — ambiguity resolved in favour of the text, no amendment |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE ON WHAT THEY ASK** | **`AC-26`** (trap test re-run and passed cleanly) · **`AC-6`** (no fourth consumer; a larger evaluation population; AD-01T's discrepancy notice carried forward unchanged for a THIRD document) · **`AC-12`**, **`AC-15`**, **`AC-25`** (both halves), **`AC-29`**, **`AC-31`**, **`AC-32`**, **`AB-3`**, **`AA-2`**, **`X-24`**, **`X-26`**, **`X-27`** |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`, `AC-3`, `AC-5`, `AC-7`, `AC-8`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-16`, `AC-17`, `AC-18`, `AC-19`, `AC-21`, `AC-23`, `AC-24`** · **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`N-4`** · **`Q10`**, **`Q11`** (still BLOCKING) · **`V-4`** (fourteenth document), **`W-1`**, **`Y-1`, `Y-3`, `Y-4`, `Y-5`**, **`Z-2`, `Z-5`**, **`M-5`**'s uniqueness half · **`V-7`**, **`G-8`**, **`L-25`**, **`L-13`**, **`MF-9`**, **`X-13`** · **`A-1 … A-61`** |
| **STILL CLOSED / DISCHARGED, NOT REOPENED** | **`AC-4`** (AD-01P) · **`AC-14`** and **`Q0-c`** (AD-01R) · **`C-XVI`** (RATIFIED at AD-01S) · **`P-G`** (RATIFIED at AD-01T) · **`AC-15`**'s content limb (AD-01U) · **`AC-35`**, **`AC-20`**, **`AC-13`** limb (v) (AD-01V) · **`X-5`** (DISCHARGED at AD-01R) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-65`**. **`Q0-d` stays OFF the critical path** |
| **STILL CANNOT START** | **`M-9`** — no new input beyond AD-01U's three |

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§11](#11-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being
asked to record a Product-Owner ruling is not permission to build what it implies.** ⟦SOURCE⟧ Spec
**§88**: CP commission logic, financial rules, authorization rules, tenant architecture, source-of-truth
rules and audit requirements are **MUST ASK BEFORE DECIDING**; *"inventing business rules"* is **MUST NEVER
DO WITHOUT EXPLICIT AUTHORIZATION.** ⟦SOURCE⟧ Consolidated **§30**: *"No schema/code implementation should
be inferred from an unresolved product ambiguity."*

**THE DECISION, STATED ONCE MORE BECAUSE IT IS THE POINT OF THE DOCUMENT.** ⟦PRODUCT-OWNER DECISION⟧
**Stage-1 attribution does NOT restrict Stage-2 commission allocation. A CP may lose the pre-booking
attribution decision and still receive a commission allocation after the Booking if the Site Head decides
to allocate commission to that CP. A Stage-1 attribution loss does NOT automatically mean 0% commission.
The Site Head may allocate to the Stage-1 attributed CP, to a CP that lost Stage-1 attribution, to multiple
CPs, or to another CP involved in the commercial situation subject to the existing business process. The
important invariant is: PRE-BOOKING ATTRIBUTION ≠ POST-BOOKING COMMISSION ALLOCATION — Stage-1 attribution
does not act as a commission eligibility gate. This is NOT to be reinterpreted as automatic commission
eligibility, and NO new automatic rule for who receives money is to be created: the Site Head makes the
Stage-2 commercial allocation decision.** **All of it is recorded verbatim at
[§1.2](#12-the-decision-recorded-verbatim-before-any-analysis) as `PO-W1·1 … PO-W1·9`, before any analysis
touched it, and it is NOT re-argued, weighed, ranked, hedged or softened anywhere above.**

**THE HEADLINE FINDING, AND IT IS NOT ABOUT THE QUESTION THAT WAS ASKED.** ⟦ARCHITECT ANALYSIS⟧ **`AC-36`
IS CLOSED CLEANLY. BUT THE OWNER'S OWN PROSE NAMES A FOURTH CATEGORY OF ALLOCATEE — *"another CP involved
in the commercial situation"* — AND THAT PHRASE IS USED TWICE, ONCE AS THE FOURTH LIST ITEM AND ONCE AS
STAGE 2'S POPULATION DESCRIPTOR. IT WAS INVESTIGATED AGAINST THE THREE WORKED EXAMPLES, AGAINST `K-52`,
AGAINST `PO-U2·B` AND AGAINST WHAT `NF-24`, `NF-28`, `Q-AR` AND `PO-P10` STRUCTURALLY PRESUPPOSE.** **THE
EXAMPLES ARE SILENT: EXAMPLE 2 PROVES A LOSER MAY BE PAID AND EXAMPLE 3 PROVES ZERO IS PERMITTED, BUT
EXAMPLE 1'S CP B HAS NO STATED CLAIM HISTORY AND EXAMPLE 3 HAS THE SAME TERSE FORM, SO SILENCE THERE IS
BREVITY AND NOT ASSERTION. `K-52` SCOPES THE §11 ATTRIBUTION CLASH AND NOT THE COMMISSION CLASH, SO IT IS
THE WRONG INSTRUMENT. THE PROSE LEANS WIDE — UNDER THE NARROW READING THE FOURTH CATEGORY IS THE EMPTY SET,
BECAUSE ITEMS 1 AND 2 EXHAUST THE CLAIM SET — AND `PO-U2·B`'s *"among the competing CPs"* LEANS NARROW AND
IS ALSO AN OWNER CLAUSE. THE SOURCES ARE HONESTLY AMBIGUOUS AND NEITHER READING IS SELECTED: THAT WOULD BE
THE ARCHITECT DECIDING WHO MAY RECEIVE MONEY, WHICH `PO-W1·9` FORBIDS IN THE OWNER'S OWN WORDS. IT IS
`AC-37`, IT IS [§11.2](#112-the-one-next-question)'S SINGLE QUESTION, AND ITS TWO ANSWERS DIFFER IN
STRUCTURAL COST BY AN ORDER OF MAGNITUDE.**

**THE SECOND FINDING, AND IT IS THE CONTRADICTION HUNT'S.** ⟦ARCHITECT ANALYSIS⟧ **THE OWNER ASKED THAT
AD-01J, AD-01K, AD-01N, AD-01Q, AD-01R, AD-01S AND AD-01T BE HUNTED FOR LANGUAGE ASSUMING THE ATTRIBUTION
WINNER IS THE ONLY ELIGIBLE CP. THE HUNT RETURNED A POSITIVE RESULT IN FIVE PLACES ACROSS FOUR DOCUMENTS,
PLUS A SIXTH CITATION. AD-01N §4 STATES IT OUTRIGHT — *"eligible only if … requires them to hold the
resolved attribution claim on the Inquiry that converted"* — AND AD-01Q, AD-01R AND AD-01S EACH GLOSS
`NF-28` CONJUNCT (i) AS *"is there a resolved attribution naming this CP on this Inquiry?"*, A TEST NO
STAGE-1 LOSER CAN PASS. AD-01S'S ROW IS THE SHARPEST EXHIBIT BECAUSE IT HOLDS BOTH READINGS IN ONE
SENTENCE: A SINGULAR WINNER-SHAPED TEST NEXT TO A PLURAL CLAIM-SET ANSWER-BEARER. AD-01U'S *"the
eligibility layer was never a winner-picker"* RESTED ON THE SECOND HALF AND WAS CORRECT ABOUT IT; WHAT IT
DID NOT CHECK IS THAT THE SAME ARCHITECTURE CARRIED THE OPPOSITE ELSEWHERE. `NF-28` ITSELF IS NOT AMENDED —
ITS ANSWER-BEARER COLUMN IS ALREADY RIGHT. IT IS `X-28`, ITS AMENDMENTS ARE `A-62` AND `A-63`, AND NEITHER
IS MADE.**

**THE THIRD, ON WHAT IS NEW AND WHAT IS NOT.** ⟦ARCHITECT ANALYSIS⟧ **THAT A NON-WINNER MAY BE NAMED IN AN
ALLOCATION WAS ALREADY OWNER-LOCKED AT `PO-U1·8`. THAT MORE THAN ONE CLAIM MAY SATISFY `NF-28` WAS ALREADY
ARCHITECT-CARRIED AT AD-01U §5.6 — BUT CONDITIONALLY, ON A WORD (*"standing"*) AD-01U NEVER DEFINED AND
THAT `AC-36` WAS PRECISELY THE QUESTION ABOUT. WHAT IS GENUINELY NEW IS THE NON-GATE RULE ITSELF, AND IT IS
NEW IN A STRONGER SENSE THAN *PREVIOUSLY UNSTATED*: THE ARCHITECTURE CARRIED THE OPPOSITE IN FIVE PLACES.
`C-XXI`'S ANSWER LIMB ALREADY PERMITTED ALLOCATING TO A LOSER, SO `C-XXI` IS CONFIRMED RATHER THAN AMENDED
— AND IT IS NOT RATIFIED: TWO OF ITS NINE LIMBS ARE CORROBORATED, SIX ARE UNTOUCHED, AND ONE, ITS
CLAIM-BOUND TRIGGER, IS IN TENSION WITH `AC-37` ITSELF. ONE OF TWENTY-TWO CONSTRAINTS REMAINS AT OWNER
STATUS AND THE RATIO HAS NOT MOVED, WHICH MEANS THE OWNER'S NEWEST AND MOST CONSEQUENTIAL RULE HAS NO
RATIFIED ARCHITECT-FORM HOME.**

**AND THE ONE THAT MUST NOT BE BURIED.** ⟦ARCHITECT ANALYSIS⟧ **WHAT LOSING STAGE 1 NOW COSTS IS FIXED, AND
IT FOLLOWS FROM TWO OWNER CLAUSES READ TOGETHER RATHER THAN FROM A SENTENCE THE OWNER WROTE: IT COSTS
EXACTLY `PO-V1·S1`'S FIVE NAMED CONSUMERS — ENQUIRY OWNERSHIP, CP PERFORMANCE REPORTING, CONVERSION
REPORTING, OPERATIONAL VISIBILITY AND HISTORICAL ATTRIBUTION — AND COSTS NOTHING FINANCIAL AUTOMATICALLY,
WHILE GUARANTEEING NOTHING FINANCIAL EITHER. THE DERIVATION IS LABELLED AS A DERIVATION AND IS NOT
ATTRIBUTED TO THE OWNER. AND THE CONSEQUENCE AD-01V SAID MUST BE STATED RATHER THAN ABSORBED IS STATED:
`C-XVI` COROLLARY 2 — *"a minted claim may LOSE, and losing must be a reachable, recorded, PERMANENT
outcome"* — SURVIVES INTACT AS AN ATTRIBUTION AND REPORTING OUTCOME AND LOSES ITS FINANCIAL CONTENT.
`C-XVI` IS NOT AMENDED, NOT WEAKENED IN ITS OWN SUBJECT, AND NOT REOPENED.**
