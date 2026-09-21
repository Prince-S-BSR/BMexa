STATUS: PROPOSED — NOT APPROVED

# AD-01S — `C-XVI` Ratified: a Registration-Backed Attribution Claim Carries NO SPECIAL WEIGHT — reconciling the Project Owner's ratification into AD-01J … AD-01R

**What this document is.** The Project Owner has answered the **one question AD-01R posed back to them** at its
[§6.2](./03r-ac-14-registration-survives-invalid-closure-decision.md) — the head of gate 2, `C-XVI`, which had
been carried as **"STILL UNRATIFIED" through AD-01P, AD-01Q and AD-01R.** The answer is **authoritative
business input.** It is **not re-argued, weighed against the alternative, ranked, hedged or softened anywhere
below.**

**What this document does.** It records the decision verbatim, then determines — point by point, against the
prior text word-for-word — which of the owner's ten numbered points **ratify `C-XVI` as AD-01P already stated
it**, and which reach content **`C-XVI`'s original enumeration did not cover.** It then reconciles the
ratification against the eight items it could plausibly bear on, names the amendments it requires, and
accounts individually for every open item it does **not** reach. **Every amendment it finds necessary is
NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **Section 6's recommendation is advisory.** Nothing below is
self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE` and is not approved; AD-01O
remains advisory and is not approved; AD-01P remains at `VALIDATE` and is not approved; AD-01Q remains at
`VALIDATE` and is not approved; AD-01R remains at `VALIDATE` and is not approved.**

**This is a NARROW document by design, and narrower than AD-01R.** AD-01R selected between two
fully-characterised readings of an existing rule. **This document ratifies a rule that was already stated in
full.** Its brevity is a property of its scope and not a relaxation of its discipline.

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · AD-01P ·
AD-01Q · **AD-01R**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the decision ratified here in its entirety, AD-01R's `PO-R1`/`PO-R2`, AD-01Q's `PO-Q1`/`PO-Q2`, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including this decision — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**High-water marks were VERIFIED against AD-01R's own text before anything was minted, not taken on trust,
and not taken from AD-01R's close reason either.** **AD-01R closed at `PF-66`, `A-47`, `AC-32`, `X-25` (with
`X-26` expressly NOT allocated) and `C-XIX`.** **All five were re-derived from the file itself and all five
check out.**

**Findings continue AD-01P's, AD-01Q's and AD-01R's shared series as `PF-67 … PF-79`.** ⟦ARCHITECT ANALYSIS⟧
**No `SF-` series is minted, for the reason AD-01Q gave for declining `QF-` and AD-01R gave for declining
`RF-`: continuing `PF-` costs nothing and collides with nothing.**

**NO new `C` constraint is minted. The `C` series stands at `C-XIX`.** ⟦ARCHITECT ANALYSIS⟧ **This is the
strongest available statement of what this document is. A ratification does not need a new constraint,
because the constraint already exists and has been stated in full since AD-01P §5.1 — what changes is its
STATUS, not the `C` series' membership. Minting `C-XX` to mark the occasion would imply a new mechanism and
there is none.**

**NO new contradiction is minted. The `X` series stands at `X-25` and `X-26` remains NOT allocated.**
⟦ARCHITECT ANALYSIS⟧ **This was CHECKED rather than assumed —
[§3.8](#38-determination-8--no-existing-rule-is-contradicted) runs the search against `C-IX`, `C-XI`,
`C-XV`, `C-XVIII`, `K-18`, `K-48`/`NF-28` and `PO-P4`, and finds none. A ratification of an existing
constraint cannot introduce a contradiction the constraint did not already introduce.**

**NO new open item is minted. The `AC` series stands at `AC-32`.** ⟦ARCHITECT ANALYSIS⟧ **This was CHECKED
and is a RESULT, not an omission — [§5.1](#51-no-new-question-is-minted-and-why). The one candidate that
survived examination was `C-XVI`'s third corollary, and it was ruled out for a positive reason rather than
dropped.**

**Amendments that are logically required but deliberately NOT made continue as `A-48`, `A-49` and `A-50`**
(`A-1 … A-47` remain named and not made). ⟦ARCHITECT ANALYSIS⟧ **THREE — the same count as AD-01R, reported
rather than fitted. All three are status amendments to the SAME fact in three documents, which is what a
pure ratification produces.** **`A-39` is CONTENT-RATIFIED by this decision, NOT RENUMBERED and still NOT
MADE**, on the precedent AD-01R set for `A-32` — [§4.1](#41-the-three-amendments-named-and-not-made).

> ⟦ARCHITECT ANALYSIS⟧ **One collision warning, stated once and then relied upon.**
>
> **`PO-S1` and `PO-S2` are this document's labels for the owner's two clauses, and the `PO-` prefix is
> load-bearing and is never dropped.** **`PO-S1·1 … PO-S1·10` are the owner's ten numbered points; `PO-S2` is
> the preserved-chain diagram together with the instruction attached to it.** **The numbering is the
> architect's; the content is the owner's.** **No bare `S-n` identifier is used anywhere, and none exists
> elsewhere in the series.**

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step or gate is designed (AD-01A **§8.5**). **No commission formula, rate, slab, percentage, amount,
milestone value, clawback quantum, passback rule or TDS treatment appears anywhere — `M-9` owns all of it. No
lock-in number is proposed. No boundary convention is selected — `AC-6` is NOT resolved here.** **NO
PRECEDENCE RULE BETWEEN TWO CPs IS INVENTED, PROPOSED, RANKED, HINTED AT OR IMPLIED — `AC-15`/`AC-20` are NOT
resolved here and `C-IX`'s prohibition stands exactly as it stood** —
[§3.3](#33-determination-3--cp-vs-cp-clash-ac-15ac-20). **NO ANTI-ABUSE MECHANISM, THRESHOLD, CADENCE, CAP,
RATIO, SCORE, FLAG, ALERT OR DETECTION RULE IS INVENTED, PROPOSED, DESIGNED OR IMPLIED ANYWHERE — `AC-32` is
NOT answered and NOT narrowed in what it asks** — [§3.9](#39-determination-9--which-open-items-this-decision-actually-reaches).
**No re-registration cadence, minimum gap or cap is invented. No Dump-reason value is proposed — `N-4` owns
every value. No adjudication procedure, workflow, queue, notification or UI is designed around §11 —
⟦SOURCE⟧ §11 reserves adjudication to builder-side authorized leadership and AD-01A §8.5 forbids inventing a
workflow around it.**

**`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's `K-18`,
`K-26`, `K-52` and `T-5`, and AD-01L's `L-6` and `K-22` are NOT reopened — and `K-18` is CONFIRMED for a
SIXTH consecutive document.** **`P-G` is adopted as AD-01P states it, with AD-01Q's `A-38`(b) seventh step
named beside it, and is NOT re-derived, NOT narrowed, NOT re-operanded and acquires NO step here.** **`Q-OV`
and `Q-AR` are adopted as AD-01Q recommends them and are NOT re-derived and NOT narrowed.** **`PO-R1` is
LOCKED and is NOT reopened, NOT qualified and NOT conditioned by anything below.**

---

## 1. The decision

### 1.1 The source of this decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-67` — recorded first, because the provenance determines which register row the
> answer may be posted against, and this time it is again the row it was addressed to.**
>
> **AD-01R closed at `VALIDATE` with an EIGHT-item gating list at its §6.1, restating AD-01Q's nine with
> gate 1 discharged. Its new GATE 1 was gate 2's head — `C-XVI`, with `A-39`'s fourth corollary — and
> AD-01R §6.2 posed it back to the owner in their own plain register as the single next question:**
>
> > *"When a channel partner's claim rests on their registration rather than on their having actually brought
> > the enquiry, that claim has to be judged exactly like any other claim — it can be argued against, and it
> > can lose. Do you confirm that a registration-backed claim gets NO head start, NO benefit of the doubt, NO
> > automatic win when nobody else has claimed, and NO extra protection once it has won — or do you want a
> > registration-backed claim to carry some weight of its own?"*
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner has answered: NO SPECIAL WEIGHT.**
>
> **This answer lands on the row it was addressed to, and it lands on it clause for clause.** ⟦ARCHITECT
> ANALYSIS⟧ **AD-01R's question named four things — head start, benefit of the doubt, automatic win when
> unopposed, extra protection once won. The owner's answer names all four, in that order, as its first three
> points and its fifth, and then adds five more. There is no displacement, no partial answer and no answer to
> a neighbouring question.**
>
> **`C-XVI` is therefore the SECOND item in this entire series to be CLOSED BY A DIRECT PRODUCT-OWNER RULING
> rather than by an architect's derivation from other owner input** — the framing AD-01R introduced at its
> `PF-55` for `AC-14`, and the precedent this document follows rather than invents. ⟦ARCHITECT ANALYSIS⟧
> **The two are not the same kind of closure, and the difference is worth one sentence. `AC-14` was an open
> QUESTION the architecture could characterise but not answer. `C-XVI` was a STATED RULE the architecture had
> written in full and could not authorize. AD-01R closed a question; this document authorizes a rule. Both
> required the owner, for different reasons, and neither could have been closed by any amount of further
> analysis.**

### 1.2 The decision, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened, qualified or treated as an option.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1` — verbatim:**
>
> > *"A registration-backed CP attribution claim receives no special commercial priority merely because it is
> > backed by a valid CP Project Registration."*

| # | Clause, verbatim |
|---|---|
| **`PO-S1·1`** | *"No head start."* |
| **`PO-S1·2`** | *"No benefit of the doubt."* |
| **`PO-S1·3`** | *"No automatic win when nobody else has claimed."* |
| **`PO-S1·4`** | *"No automatic attribution merely because a valid registration exists."* |
| **`PO-S1·5`** | *"No extra protection after the registration-backed claim has won."* |
| **`PO-S1·6`** | *"Registration is evidence/basis for making the attribution claim, not a precedence rule."* |
| **`PO-S1·7`** | *"The claim must be evaluated through the same normal attribution/clash-resolution process as any other attribution claim."* |
| **`PO-S1·8`** | *"A valid registration does NOT itself determine the attribution winner."* |
| **`PO-S1·9`** | *"If there is no competing claim, the absence of competition does not convert registration into automatic attribution; the normal attribution determination still applies."* |
| **`PO-S1·10`** | *"Once attribution is resolved in the CP's favor, the registration does not create any additional post-win protection beyond the resolved attribution itself."* |

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-S2` — the preserved chain, and the instruction attached to it, recorded here
> because it is the owner's and not the architect's, and because the instruction governs
> [§2.3](#23-what-is-explicitly-unchanged-the-grounding-power-itself) and
> [§2.4](#24-the-preserved-chain-checked-link-by-link):**
>
> > *"Preserve the existing distinction: CP Project Registration → may provide the basis/ground for an
> > attribution claim → normal attribution/clash determination → resolved Inquiry attribution →
> > booking/commercial conditions → commission eligibility → approval/payout. Do not collapse registration
> > into attribution or commission eligibility."*
>
> **And, stated by the owner as a constraint on how this decision is to be read:** **"NO SPECIAL WEIGHT" is
> NOT to be reinterpreted as "registration has no value."** **A currently-valid registration retains its
> previously established function: it MAY ground an attribution claim for the same Client × Project, per
> `PO-P1` and `PO-R1·e`.** **This decision establishes only that once such a claim exists, the registration
> itself creates no precedence, no priority, no automatic attribution and no extra post-win protection.**

### 1.3 `C-XVI` is RATIFIED — stated in its own line

> ⟦PRODUCT-OWNER DECISION — THE RATIFICATION⟧
>
> **`C-XVI` IS NOW RATIFIED BY THE PROJECT OWNER.**
>
> **It is no longer an ⟦ARCHITECT RECOMMENDATION⟧. It is no longer "STILL UNRATIFIED." It is no longer gate
> 2's head, and it is no longer the single most important outstanding ratification in AD-01P.** **An
> implementation that breaches `C-XVI` is now breaching a PRODUCT-OWNER DECISION and not an unapproved
> architect recommendation** — the same status change `A-20` made for `C-XI` at AD-01O, and the same one
> `A-47`(ii) names for the closure-blindness property at AD-01N.
>
> **This is the SECOND item in the series closed by a direct Product-Owner ruling rather than by architect
> derivation.** **The first was `AC-14`, at AD-01R, and AD-01R's `PF-55` is the precedent for this framing.**
>
> ⟦ARCHITECT ANALYSIS⟧ **What is ratified is `C-XVI`'s RULE and the corollaries the owner's ten points state
> in their own words. What is NOT thereby ratified is anything `C-XVI` merely sits beside — `P-G`, `C-XV`,
> `PF-6`, `PF-23`, `Q-OV`, `Q-AR`, `C-XVII`, `C-XVIII` and `C-XIX` are ALL STILL UNRATIFIED and NONE of them
> is ratified by anything below** — [§6](#6-recommendation).

### 1.4 What this decision does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14`, `PO-P1 … PO-P12`, `PO-Q1`, `PO-Q2` and `PO-R1`/`PO-R2` are
> untouched except where `PO-S1` restates one of them, and every one of them remains in force.** In
> particular:

| Prior clause | Status after `PO-S1` |
|---|---|
| **`PO-P1`** — a currently-valid registration MAY be the basis for CP attribution on a later inquiry, same client/project, subject to normal attribution/clash rules | **UNCHANGED, EXPRESSLY PRESERVED, and RESTATED IN SUBSTANCE by `PO-S2`'s second link and by `PO-S1·6`'s word *basis*.** ⟦PRODUCT-OWNER DECISION⟧ **The owner's own instruction forbids reading this decision as touching it** — [§2.3](#23-what-is-explicitly-unchanged-the-grounding-power-itself) |
| **`PO-P2`** — registration is NOT automatic attribution | **RESTATED VERBATIM IN SUBSTANCE by `PO-S1·4`, and therefore stated by the owner for a FOURTH time** counting `PO-O13`, `PO-P2` and `PO-R1·f` |
| **`PO-P4`** — registration is NOT an automatic clash winner | **RESTATED IN SUBSTANCE by `PO-S1·8` and reinforced by `PO-S1·6`'s *"not a precedence rule"*, and therefore stated by the owner for a FOURTH time** counting `PO-O14`'s separation, `PO-P4` and `PO-R1·f` |
| **`PO-P3`** — registration is NOT automatic commission eligibility | **UNCHANGED and NOT ENGAGED.** `PO-S1` reaches no eligibility conjunct; `PO-S2` places eligibility two links downstream of the attribution determination — [§3.6](#36-determination-6--commission-eligibility-nf-28) |
| **`PO-P5`** — expired registrations cannot establish new attribution claims | **UNCHANGED and UNTOUCHED.** `PO-S1` says nothing about which registrations may ground; it governs only what a grounded claim receives — [§3.5](#35-determination-5--registration-expiry-and-the-later-genuine-inquiry) |
| **`PO-P10`** — the seven levels the architecture must never conflate | **UNCHANGED as a PROHIBITION, and NOT extended by `PO-S2`** — `PF-71`. **It remains INCOMPLETE in its ENUMERATION exactly as AD-01Q's `X-24`/`A-38`(a) left it and AD-01R declined to fill, and this document does not fill it either** |
| **`PO-Q1`** — the Site Head attribution/clash override | **UNCHANGED and UNTOUCHED, and CORROBORATED.** `PO-Q1·a` grants the override against *"the normal CP attribution/clash decision"* without qualification; `PO-S1·5`/`PO-S1·10` are the same proposition from the other side — [§3.4](#34-determination-4--the-site-head-override-q-ov) |
| **`PO-Q2`** — the audit-reconstruction requirement | **UNCHANGED and UNTOUCHED. `Q-AR` gains no link and loses none** — [§3.7](#37-determination-7--audit-reconstruction-q-ar) |
| **`PO-R1`**/**`PO-R2`** — `AC-14` = Option A, and the recorded anti-abuse tradeoff | **UNCHANGED, LOCKED, and NOT REOPENED BY ANYTHING BELOW.** **`PO-S1` composes with `PO-R1` and does not qualify it** — [§3.2](#32-determination-2--composition-with-ac-14--option-a) |

---

## 2. What changes and what does not

### 2.1 The owner's ten points, walked ONE AT A TIME

> ⟦ARCHITECT ANALYSIS⟧ **`PF-68` — each point is checked WORD-FOR-WORD against `C-XVI` as AD-01P §5.1 states
> it, against `C-XVI`'s three corollaries, against `A-39`'s fourth corollary as AD-01Q §3.8 states it, and
> against the owner's own prior `PO-` clauses. The classification is done by comparison and not by
> impression, because a document that reported ratifications as novelties would inflate what has just
> changed, and one that reported the novelty as a ratification would hide the only place the owner's words
> reach past the architect's.**
>
> **`C-XVI` as AD-01P §5.1 states it, quoted once so every row below can be checked against it:**
>
> > ⟦ARCHITECT RECOMMENDATION — now ⟦PRODUCT-OWNER DECISION⟧⟧ *"A claim minted on a registration ground is an
> > ORDINARY attribution claim in EVERY respect that bears on its resolution. It may be given NO default win,
> > NO presumption, NO tiebreak, NO privileged or abbreviated resolution path, NO differential weight, and NO
> > outcome that follows from the mere fact that its ground is a registration."*
>
> **Its three corollaries, also quoted once:** **(1)** *"An UNOPPOSED minted claim is not thereby a RESOLVED
> claim"*; **(2)** *"A minted claim may LOSE, and losing must be a reachable, recorded, permanent outcome …
> A mechanism in which no minted claim has ever lost is evidence that `C-XVI` has been breached in
> practice"*; **(3)** *"Visible distinguishability is a PREREQUISITE of `C-XVI`, not a reporting nicety."*
> **And `A-39`'s fourth, from AD-01Q §3.8:** *"A registration-grounded claim gets NO SPECIAL IMMUNITY
> EITHER … there is no heightened bar for overriding a registration-grounded win and no lowered bar for
> overriding a filed one."*

| # | The owner's point | Verdict | What the word-for-word check found |
|---|---|---|---|
| **1** | **No head start** | **EXACT RATIFICATION of `C-XVI` as stated. NOTHING NEW.** | **`C-XVI`'s *"NO default win"* and *"NO presumption."*** ⟦ARCHITECT ANALYSIS⟧ ***"Head start"* is the plain-register rendering of a presumption operating before the contest begins. It names the same prohibition AD-01P named and adds no scope to it** |
| **2** | **No benefit of the doubt** | **EXACT RATIFICATION. NOTHING NEW.** | **`C-XVI`'s *"NO presumption"* and *"NO differential weight."*** ⟦ARCHITECT ANALYSIS⟧ ***"Benefit of the doubt"* is the evidentiary form of a presumption — the one that operates where the facts are unclear rather than where they are absent. `C-XVI`'s *"NO differential weight"* covers exactly that case and was written for it** |
| **3** | **No automatic win when nobody else has claimed** | **EXACT RATIFICATION — and specifically of `C-XVI` COROLLARY 1.** **NOTHING NEW** | **`C-XVI`'s *"NO default win"*, plus corollary 1 in substance, plus AD-01P §3.10's own enumerated clash case — *"The Inquiry has no filed claim at all and only a minted one → It is still adjudicated"*** |
| **4** | **No automatic attribution merely because a valid registration exists** | **This is `PO-P2` — the OWNER'S OWN CLAUSE, restated for a FOURTH time. NOTHING NEW, and it is not even a `C-XVI` ratification** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-O13`, `PO-P2`, `PO-R1·f` and now `PO-S1·4`.** **Its `C-XVI` counterpart is *"NO outcome that follows from the mere fact that its ground is a registration"*, which is the same prohibition stated at the resolution layer rather than at the grant layer** |
| **5** | **No extra protection after the registration-backed claim has won** | **NOT COVERED BY `C-XVI`'S ORIGINAL ENUMERATION. This RATIFIES `A-39`'S FOURTH COROLLARY — and is BROADER than it** | **See `PF-69` below. This is one of only two points that reach past AD-01P's wording** |
| **6** | **Registration is evidence/basis for the claim, not a precedence rule** | **RATIFICATION of `C-XVI`'s *"NO tiebreak"*, of `PF-4`'s ground-versus-anchor discriminator, and of `C-XI`. NOTHING NEW — and it supplies NO precedence rule** | **`C-XVI`'s *"NO tiebreak"*; `PO-P4`; ⟦ARCHITECT ANALYSIS⟧ **`PF-4`: the ONLY discriminator between a GROUND and an ANCHOR is falsifiability.** **The word *evidence/basis* is `PO-P1`'s word *basis* and AD-01P's word *ground*, and the clause *"not a precedence rule"* is the negative half of the same distinction** — [§3.3](#33-determination-3--cp-vs-cp-clash-ac-15ac-20) |
| **7** | **Evaluated through the same normal attribution/clash-resolution process as any other claim** | **EXACT RATIFICATION of `C-XVI`'s opening sentence. NOTHING NEW, and stated by the owner for a THIRD time** | **`C-XVI`: *"an ORDINARY attribution claim in EVERY respect that bears on its resolution."*** ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1`'s *"subject to normal attribution/clash rules"* and `PO-R1·e`'s *"subject to the normal attribution / clash-resolution process"* are the first two statements** |
| **8** | **A valid registration does NOT itself determine the attribution winner** | **This is `PO-P4` restated. NOTHING NEW** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P4` — *"Registration is NOT automatic clash winner"* — and `PO-R1·f`. Its `C-XVI` counterpart is again *"NO outcome that follows from the mere fact that its ground is a registration"*** |
| **9** | **Absence of competition does not convert registration into automatic attribution; the normal determination still applies** | **CONFIRMATORY, NOT NEW — and this was WORKED rather than assumed.** **AD-01P's wording was ALREADY UNAMBIGUOUS** | **See `PF-70` below, which runs the ambiguity test in full** |
| **10** | **Once resolved in the CP's favour, the registration creates no additional post-win protection beyond the resolved attribution itself** | **Point 5's precise form. RATIFIES `A-39`'S FOURTH COROLLARY, is BROADER than it, and carries a LIMIT CLAUSE that is load-bearing** | **See `PF-69` below** |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-69` — points 5 and 10, the only two that reach past `C-XVI`'s original
> enumeration, worked in full because this is where the document would most easily over- or under-report.**
>
> **`C-XVI` as AD-01P wrote it is bounded by its own words: *"in EVERY respect that bears on its
> RESOLUTION."*** **AD-01Q §3.8 identified that bound as a gap and said so in terms:** *"`C-XVI`'s three
> existing corollaries are all directional: they forbid a registration-grounded claim being advantaged in
> the WINNING direction … `Q-OV` opens a direction `C-XVI` was not written against — being advantaged by
> being HARDER TO DISPLACE once it has won."* **AD-01Q's remedy was `A-39`'s fourth corollary, an
> ⟦ARCHITECT RECOMMENDATION⟧ that was *"ratified with `C-XVI` or not at all."***
>
> **What the owner has now done, stated precisely:**
>
> | | Finding |
> |---|---|
> | **`PO-S1·5`/`PO-S1·10` ratify the fourth corollary's CONTENT** | ⟦PRODUCT-OWNER DECISION⟧ **In the owner's own words, and without prompting: *"no extra protection after the registration-backed claim has won."* AD-01Q derived this; the owner has now ruled it** |
> | **They are BROADER than the fourth corollary** | **`A-39`'s corollary is scoped to ONE post-win advantage — resistance to `Q-OV`. `PO-S1·5`/`PO-S1·10` are scoped to ANY post-win protection, whatever its shape.** ⟦ARCHITECT ANALYSIS⟧ **The owner has closed the direction, not one door in it — which is the stronger form and the one `A-39` would have wanted if it could have named every door** |
> | **`PO-S1·10`'s LIMIT CLAUSE is load-bearing and must not be lost** | ⟦PRODUCT-OWNER DECISION⟧ ***"beyond the resolved attribution itself."*** **The resolved attribution keeps every effect it already had — it is still `NF-28` conjunct (i)'s answer-bearer, still `K-18`'s claim-anchor, still what ⟦SOURCE⟧ §39 shows the CP. What is denied is protection ADDITIONAL to that, sourced in the registration.** **Reading `PO-S1·10` as diminishing the resolved attribution would invert it** |
> | **What is NOT ratified** | ⟦ARCHITECT ANALYSIS⟧ **`A-39` is an AMENDMENT to AD-01P's corollary list, and an owner ruling on its content is not the making of the amendment.** **`A-39` is CONTENT-RATIFIED, NOT RENUMBERED and STILL NOT MADE** — [§4.1](#41-the-three-amendments-named-and-not-made). **And the corollary's SPECIFIC APPLICATION to `Q-OV` cannot be ratified ahead of `Q-OV`, which is itself still an unratified AD-01Q derivation** — [§3.4](#34-determination-4--the-site-head-override-q-ov) |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-70` — point 9, worked rather than assumed, because the task of deciding whether
> an owner clause is NEW turns on whether the prior wording was genuinely ambiguous, and asserting either
> answer without running the test would be the error.**
>
> **The candidate ambiguity:** **did `C-XVI`'s *"NO default win"* mean only *"no win against a competing
> claim"*, leaving open whether an unopposed registration-grounded claim resolves automatically?** **If so,
> `PO-S1·9` closes a real gap and is NEW.**
>
> **The test, run against the text:**
>
> 1. **`C-XVI` COROLLARY 1 states the unopposed case EXPLICITLY and as its FIRST corollary:** *"An UNOPPOSED
>    minted claim is not thereby a RESOLVED claim."* **It cites `K-48` conjunct (i)'s requirement of *"the
>    RESOLVED attribution claim"* and ⟦SOURCE⟧ §11's reservation of resolution to builder-side authorized
>    leadership.** **This is the affirmative limb `PO-S1·9` states — *"the normal attribution determination
>    still applies"* — in the architect's words rather than the owner's.**
> 2. **AD-01P §3.10 ENUMERATES the case as one of six clash cases:** *"The Inquiry has no filed claim at all
>    and only a minted one → It is still adjudicated."* **A case that is enumerated is not a case the wording
>    left open.**
> 3. **AD-01P §5.1 gives the unopposed case as the REASON `C-XVI` must exist at all:** *"Without `C-XVI`,
>    `PO-P1` and Reading G are observationally identical in every case where no competing claim exists."*
>    **A constraint whose stated justification is the unopposed case cannot be read as not reaching it.**
>
> **VERDICT: AD-01P's wording was ALREADY UNAMBIGUOUS. `PO-S1·9` is CONFIRMATORY, not new, and it is
> reported as confirmatory.**
>
> ⟦ARCHITECT ANALYSIS⟧ **But one thing about `PO-S1·9` IS a finding, and it is about placement rather than
> content.** **The unopposed case is the ONLY case the owner states TWICE — once at `PO-S1·3` and again at
> `PO-S1·9`, with `PO-S1·9` adding the affirmative limb the negative one implies.** **That is the exact case
> AD-01P identified as the one where the grant and the eliminated Reading G are observationally identical,
> and the owner has independently landed on it as the case most worth saying twice.** **The architect does
> not read a repetition as new content; it is recorded as the owner's emphasis falling precisely where the
> architecture said the risk was.**

### 2.2 The net, stated as arithmetic

> ⟦ARCHITECT ANALYSIS⟧ **`PF-71` — stated as arithmetic rather than as a claim, because a reader who is not
> told how much of this was already written will over-estimate what has moved.**
>
> | Class | Points | Count |
> |---|---|---|
> | **EXACT RATIFICATIONS of `C-XVI` as AD-01P §5.1 already stated it** | **1, 2, 3, 6, 7, 9** | **SIX** |
> | **RESTATEMENTS of the owner's OWN prior clauses (`PO-P2`, `PO-P4`), which `C-XVI` also covers** | **4, 8** | **TWO** |
> | **RATIFICATIONS of `A-39`'s FOURTH COROLLARY — content `C-XVI`'s ORIGINAL enumeration did not reach — and BROADER than it** | **5, 10** | **TWO** |
>
> **EIGHT of the ten points add NO CONTENT to what AD-01P and the owner's own earlier clauses already said.
> TWO reach past `C-XVI`'s original wording, and they reach past it in the direction AD-01Q had already
> identified and drafted a corollary for.**
>
> **What is therefore genuinely NEW, stated as exactly one thing:**
>
> > ⟦PRODUCT-OWNER DECISION⟧ **`C-XVI` is no longer an architect's recommendation. It is the owner's rule —
> > and its scope now extends past resolution to cover the post-win direction as well.**
>
> ⟦ARCHITECT ANALYSIS⟧ **That is a STATUS change plus one SCOPE extension, and nothing else. It adds no
> entity, no record, no field, no state, no marker, no mechanism, no constraint and no contradiction.**
> **AD-01I's `I-9` no-new-entity standard is MET, for the same reason AD-01R met it and AD-01Q did not: the
> necessity test has nothing to run against.**

### 2.3 What is explicitly UNCHANGED: the grounding power itself

> ⟦PRODUCT-OWNER DECISION⟧ **This section exists because the owner instructed that it must, and its content
> is the owner's instruction and not the architect's inference.**

> **THE TWO THINGS THAT MUST BE KEPT APART, STATED ONCE AND RELIED ON THROUGHOUT.**
>
> | | **GROUNDING POWER** | **SPECIAL WEIGHT** |
> |---|---|---|
> | **What it is** | Whether a currently-valid registration MAY be used as the stated basis for an attribution claim on a later Inquiry, same Client × Project | Whether a claim so grounded receives any priority, presumption, default outcome or extra protection BECAUSE its ground is a registration |
> | **Where it operates** | **`P-G` steps 3 and 4** — the grounding test and the admissible-ground determination | **`P-G` step 5 and after** — adjudication, and everything downstream of it |
| **Its authority** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1`, `PO-R1·e`** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1`, and now `C-XVI` at owner status** |
> | **Status after this decision** | ⟦PRODUCT-OWNER DECISION⟧ **UNCHANGED. STILL REAL. NOT REDUCED, NOT QUALIFIED, NOT CONDITIONED** | ⟦PRODUCT-OWNER DECISION⟧ **DEFINITIVELY ZERO** |
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner's instruction, recorded as an instruction:** **"NO SPECIAL WEIGHT" is
> NOT to be reinterpreted as "registration has no value."** **Conflating the two columns above would
> misrepresent this decision in the one direction the owner explicitly forbade.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The architectural statement of the same separation, because it is checkable and the
> prose is not:** **`PO-S1` supplies no operand to `P-G` step 3, removes none from it, and changes nothing
> about what step 4 admits.** **It governs only what happens to what step 4 produces.** **A rule that
> operates entirely at and after step 5 cannot reduce the grant at steps 3 and 4, and any reading under which
> it does is a reading that has moved the rule upstream of where the owner put it.**
>
> **`P-G` is NOT re-derived, NOT narrowed, NOT re-operanded and acquires NO step here** —
> [§3.1](#31-determination-1--the-grounding-pathway-p-g). **`PO-P1` and `PO-R1·e` stand exactly as their
> documents state them.**

### 2.4 The preserved chain, checked link by link

> ⟦ARCHITECT ANALYSIS⟧ **`PF-72` — `PO-S2`'s chain is checked against what AD-01K … AD-01R ACTUALLY
> established, link for link, and the honest answer is recorded for each — including the answer to the
> question the task requires be asked, which is whether the owner's phrasing surfaces any link this series
> has not explicitly named before.**

| # | `PO-S2` link | Where this series already holds it | Result |
|---|---|---|---|
| **1** | **CP Project Registration** | AD-01N **§C.4**'s recommended record, scoped `(CP relationship × Person / work record × Project)`; ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` level 3** — *"a fixed commercial record"* | **ALREADY NAMED.** RECOMMENDED, NOT APPROVED — AD-01N is at `VALIDATE` |
| **2** | **may provide the basis/ground for an attribution claim** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P1`**, **`PO-R1·e`**; ⟦ARCHITECT RECOMMENDATION⟧ **`P-G` steps 3–4**; **`C-X`** + **`A-21`** (the ground is a specific immutable RECORD, never the triple) | **ALREADY NAMED.** **The word *may* is the owner's and is preserved** |
| **3** | **normal attribution/clash determination** | ⟦ARCHITECT RECOMMENDATION⟧ **`P-G` step 5**; ⟦SOURCE⟧ **§11** — *"Builder-side authorized leadership resolves attribution"*; **`K-12`**/**`K-52`** (clash scoped to one Inquiry's claim set); **`K-17`** (append-only); **`C-IX`** (contest branch) | **ALREADY NAMED.** **This is the link `PO-S1·7` routes every registration-backed claim through** |
| **4** | **resolved Inquiry attribution** | ⟦ARCHITECT RECOMMENDATION⟧ **`K-18`** — the claim-anchor is the Inquiry and nothing else; ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` level 5** — *"the resolved claim"*; joined to any **`Q-OV`** override per AD-01Q §3.6 and `A-38`(b) | **ALREADY NAMED. `K-18` CONFIRMED for a SIXTH consecutive document** |
| **5** | **booking/commercial conditions** | **`K-47`** — the transaction identity surviving §25/§26; **`NF-28`** conjunct (ii) — the §32 milestone; `Q-AR` link 10 | **ALREADY NAMED.** `AC-5` (which booking fact is the Booking Date) remains OPEN |
| **6** | **commission eligibility** | **`K-48`** as extended by **`NF-28`**'s three conjuncts; ⟦PRODUCT-OWNER DECISION⟧ **`PO-P10` level 6** — *"a separate downstream determination"* | **ALREADY NAMED.** RECOMMENDED, NOT APPROVED — [§3.6](#36-determination-6--commission-eligibility-nf-28) |
| **7** | **approval/payout** | ⟦SOURCE⟧ **§32**, **§40**, **§50**; consolidated **§22**'s accrual/payout separation; the CP Ledger; `Q-AR` link 12; ⟦PRODUCT-OWNER DECISION⟧ **`PO-O14`**'s fourth term | **ALREADY NAMED.** ⟦SETTLED⟧ **`M-9` owns every formula, rate, slab, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING above touches any of them** |

> ⟦ARCHITECT ANALYSIS⟧ **The answer to the question the task requires be asked, stated plainly: NO. `PO-S2`
> surfaces NO link this series has not explicitly named before.** **All seven are already held, and five of
> the seven are held by clauses the owner themselves wrote.** **`PO-S2` is a CONFIRMATION of the chain, not
> an extension of it, and it is reported as one.**

> ⟦ARCHITECT ANALYSIS⟧ **Three disciplines applied to `PO-S2`, each stated because each is a way this
> document could go wrong.**
>
> 1. **`PO-S2` is a PIPELINE, not a LEVELS LIST, and it must not be read as one.** ⟦PRODUCT-OWNER DECISION⟧
>    **`PO-P10`'s SEVEN LEVELS are a NON-CONFLATION list — Client, Helpdesk Revisit, CP Project
>    Registration, Inquiry, Attribution, Commission Eligibility, Commission Override.** **`PO-S2`'s seven
>    stages are a ROUTE — the path from a registration to money.** **They coincide in four places and differ
>    in three, and they are not the same list.** ⟦ARCHITECT ANALYSIS⟧ **Reading `PO-S2`'s seven stages as
>    seven levels would be the architect filling the enumeration gap AD-01Q's `A-38`(a) expressly reserved to
>    the owner — the exact error AD-01R refused at its `PF-62` when `PO-R1·g` offered the same temptation.**
>    **`X-24` and `A-38`(a) stand exactly as AD-01Q left them. `PO-P10` is NOT extended and no eighth level
>    is drafted, proposed or implied.**
> 2. **What `PO-S2` OMITS is NOT repealed.** **`PF-34(2)`'s discipline applies: `PO-S2` names neither the
>    Client nor the Inquiry nor the Commission Override as stages, and `PO-O14` names Payout where `PO-R1·g`
>    omitted it.** **No omission anywhere in this chain is read as a deletion, in either direction.**
> 3. **`PO-S2`'s non-collapse instruction is a SUBSET of `PO-R1·g`, not an extension of it.** **`PO-R1·g`
>    forbids collapsing five terms; `PO-S2` forbids collapsing registration into two of them. The narrower
>    statement does not narrow the wider one** — `PF-34(2)` again, in the same direction.

---

## 3. The determinations

> ⟦ARCHITECT ANALYSIS⟧ **The eight items this decision could plausibly bear on are checked INDIVIDUALLY and
> in the order the reconciliation requires. *"Unaffected"* means CHECKED AND UNAFFECTED, never skipped. Two
> of the eight — `Q-OV` and `Q-AR` — are worked at length because the intuitive answer to each is the wrong
> one.**

### 3.1 Determination 1 — the grounding pathway (`P-G`)

**UNAFFECTED. NOT RE-DERIVED. NO STEP ADDED, NO STEP CHANGED, NO OPERAND ADDED OR REMOVED.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-73` — `P-G` is walked step by step, because a ratification that attaches to one
> step of a seven-step rule must show which step, and must show that the others are untouched.**

| `P-G` step | Effect of `PO-S1` |
|---|---|
| **1** — `J-2` originates the later Inquiry | **NONE.** `J-2` is NOT amended, NOT narrowed and NOT given a new input — the same result AD-01P `PF-6`, AD-01Q and AD-01R each reported |
| **2** — the arrival reaches the server-side clash gate | **NONE.** Which date this is remains `AC-24`, OPEN |
| **3** — the grounding test runs at `G` over `(CP, client, Project, G)` | **NONE.** ⟦PRODUCT-OWNER DECISION⟧ **The operand set is exactly that and nothing else, owner-confirmed at AD-01R `PF-57`, and `PO-S1` adds no operand and removes none.** **THIS IS THE GROUNDING POWER, AND IT IS UNTOUCHED** — [§2.3](#23-what-is-explicitly-unchanged-the-grounding-power-itself) |
| **4** — a passing test makes that specific registration RECORD an admissible ground | **NONE.** Whether the mint is automatic or a discretionary authorized act remains `AC-25`, OPEN — [§3.9](#39-determination-9--which-open-items-this-decision-actually-reaches) |
| **5** — the minted claim is adjudicated under §11 as an ORDINARY claim capable of LOSING | ⟦PRODUCT-OWNER DECISION⟧ **RATIFIED. THIS IS THE STEP `PO-S1` GOVERNS, AND IT IS THE ONLY ONE.** `PO-S1·7` is step 5's own words; `PO-S1·1`/`·2`/`·3`/`·6`/`·8`/`·9` are the six things step 5 may not do; `C-XVI` is the constraint step 5 cites and it is now owner-backed |
| **6** — eligibility is tested as `NF-28`'s unchanged three-conjunct join | **NONE** — [§3.6](#36-determination-6--commission-eligibility-nf-28) |
| **7** — AD-01Q's `A-38`(b) override step | **NONE to the STEP. Its GOVERNING PRINCIPLE is corroborated** — [§3.4](#34-determination-4--the-site-head-override-q-ov) |

> ⟦ARCHITECT ANALYSIS⟧ **`P-G` ITSELF IS STILL AN ARCHITECT DERIVATION AND STILL UNRATIFIED — it is AD-01P
> gate 2's remaining head now that `C-XVI` is discharged from that list.** **What `PO-S1` ratifies is the
> CONSTRAINT step 5 cites, not the rule that contains step 5.** **A rule one of whose constraints is
> owner-ratified is not thereby an owner-approved rule, and [§6](#6-recommendation) does not report it as
> one.** **This is the same discipline AD-01R applied when the owner confirmed step 3's operand set.**

### 3.2 Determination 2 — composition with `AC-14` = Option A

**THE TWO DECISIONS COMPOSE CLEANLY. NEITHER QUALIFIES THE OTHER.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-74` — the composition is shown on AD-01R's own seven-step sequence rather than
> asserted, and NO NEW FACT is introduced into that sequence. AD-01R §3.3 stated it as a worked abuse shape;
> it is reused here unchanged, because the clearest demonstration that two decisions compose is the case
> that needs both of them.**

| Step | AD-01R §3.3's sequence, unchanged | Which decision governs |
|---|---|---|
| **1** | A CP registers a person for a Project — an explicit, permissioned, project-scoped, separately audited act with its own immutable date | **NEITHER.** `C-XIII`, `NF-26`(9), `NF-27` event 1 |
| **2–3** | The Inquiry that CP brought is junk, and the business closes it on **Dimension A's invalid side** | **NEITHER.** AD-01A §8.3, `J-8`, `H-4` |
| **4** | **The registration is untouched — not consumed, not invalidated, not reset, full original window** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` (AD-01R). `PO-S1` says NOTHING here** |
| **5** | That same person genuinely inquires later, inside the window | **NEITHER.** `J-2` as bounded by `K-50` |
| **6** | **The registration MAY ground an attribution claim on that genuine Inquiry** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1·e` and `PO-P1` (AD-01R, AD-01P). `PO-S1` says NOTHING here either** |
| **7** | **The claim is adjudicated under §11 as an ordinary claim. It may lose. It may also win** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1` (THIS DOCUMENT), ratifying `C-XVI`. `PO-R1` said this in substance at `PO-R1·e`/`PO-R1·f`; `PO-S1` is what makes it the owner's RULE rather than the owner's description** |

> ⟦ARCHITECT ANALYSIS⟧ **The composition stated in one sentence, because it is the whole of §3.2:**
>
> > **AD-01R says the registration SURVIVES an invalid-side closure and remains ABLE to ground a claim.
> > AD-01S says a claim so grounded gets NOTHING that any other claim does not get.**
>
> **They meet at exactly one point — step 6 hands to step 7 — and they do not overlap anywhere else.**
> **`PO-R1` governs steps 4 and 6; `PO-S1` governs step 7; neither speaks to the other's steps.** **There is
> no configuration in which one has to be read down to accommodate the other, and no clause of either
> requires a qualification it does not already carry.**

> ⟦ARCHITECT ANALYSIS⟧ **The consequence for AD-01R's own anti-abuse finding, stated precisely because
> AD-01R §3.3 identified the control and this decision is what completes it.**
>
> **AD-01R §3.3's `PF-64` table listed five already-established rules bearing on the exposure `PO-R2`
> accepts, each with its limit attached, and named exactly one of them as the real one:**
>
> > *"⟦PRODUCT-OWNER DECISION⟧ `PO-P4` + ⟦ARCHITECT RECOMMENDATION⟧ `C-XVI` — every minted claim must WIN a
> > §11 adjudication by builder-side authorized leadership, and losing must be a reachable outcome | **This
> > is the real control, and it is the owner's own.** A fabricated-ground claim that reaches §11 can lose
> > there | It operates per case, on judgement, and depends on leadership having grounds to doubt. It is not
> > a systemic bar and `C-XVI` forbids one."*
>
> **What changes, stated exactly and no further:** **that row was HALF owner-backed and HALF an unratified
> architect recommendation. It is now FULLY owner-backed.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-P4` was already
> the owner's; `C-XVI` is now the owner's too; and `PO-S1·7`'s requirement that the claim run the same normal
> process as any other is `PO-P4`'s routing restated as a rule the implementation may not shortcut.**
>
> **What does NOT change:** ⟦ARCHITECT ANALYSIS⟧ **the LIMIT attached to that row is unchanged and is
> restated rather than dropped.** **The control still operates PER CASE, on judgement, and still depends on
> leadership having grounds to doubt.** **It is still not a systemic bar, and `C-XVI` — now at owner status —
> still forbids one.** **The cost `PO-R2` accepts is NOT retired, NOT reduced and NOT offset by this
> ratification, and `L-13`'s hazard finding is UNAFFECTED as a finding exactly as AD-01R left it.** **`AC-32`
> is NOT answered and NOT closed** — [§3.9](#39-determination-9--which-open-items-this-decision-actually-reaches).

### 3.3 Determination 3 — CP-vs-CP clash (`AC-15`/`AC-20`)

**UNCHANGED, NOT ANSWERED, NOT NARROWED IN WHAT IT ASKS — PRIORITY RAISED A SIXTH CONSECUTIVE TIME.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-75` — this is checked against the clash MECHANISM and not merely asserted,
> because `PO-S1·6`'s phrase *"not a precedence rule"* is the single most over-readable clause in the
> decision. It says what registration is NOT. It does not say what the rule IS.**

> **The reading people will assume, CONFIRMED because it is correct and because a document that leaves it
> unstated invites it being assumed wrongly:**
>
> | Configuration | Does `PO-S1` bear on it? |
> |---|---|
> | A registration-backed claim against a **producer-FILED** claim on the same Inquiry | **YES. NO THUMB ON THE SCALE.** ⟦PRODUCT-OWNER DECISION⟧ **The registration-backed claim carries no head start, no presumption and no differential weight against the filed one — `PO-S1·1`, `·2`, `·6`, `·8`. The filed claim likewise gains nothing; `C-XVI` is symmetric in effect because it forbids an advantage from ONE source and grants none to any other** |
> | A registration-backed claim against **another registration-backed** claim | **YES, AND IT CHANGES NOTHING BETWEEN THEM.** ⟦ARCHITECT ANALYSIS⟧ **If neither may be advantaged for being registration-backed, then as between two such claims the property is simply not a discriminator. Both enter §11 as ordinary claims and §11 resolves them on whatever grounds authorized leadership resolves claims on** |
| **WHO WINS, in either configuration** | **NOT REACHED. NOT ANSWERED. NOT INVENTED.** **That is `AC-15`, and it is OPEN** |
> | May the **second** registration exist at all | **NOT REACHED. That is `AC-20`, and it is OPEN** |

> ⟦ARCHITECT ANALYSIS⟧ **The distinction this determination exists to hold, stated in one line:**
>
> > **`PO-S1` removes a DEFAULT TILT. It does not supply a RULE.**
>
> **A default tilt is what an implementation produces when nobody said otherwise — the cheaper code path in
> which the claim citing a dated commercial record wins because it is the one with a document attached.**
> **A rule is what authorized leadership applies when two non-trivial claims must be ranked.** **The owner has
> now removed the first. The second has never existed, is not created here, and is `AC-15`.**
>
> **The clash mechanism is untouched.** **`K-12`/`K-52` (clash is scoped to one Inquiry's claim set), `K-17`
> (append-only, never overwritten), ⟦SOURCE⟧ **§11** (builder-side authorized leadership resolves
> attribution) and **`C-IX`** (a binding systemic precedence rule is a §88 authorization change to §11) all
> stand exactly as they stood. **`Q0-d` stays OFF the critical path. ⟦SOURCE⟧ §11 requires NO amendment: no
> precedence, ranking or tiebreak is added to it, so `C-IX`'s §88 bar is NOT engaged.**

> ⟦ARCHITECT ANALYSIS⟧ **One honest consequence for `AC-15`'s ANSWER SPACE, recorded because leaving it
> unsaid would let it be discovered by an implementation rather than decided by the owner — and stated as a
> consequence of the ratification, NOT as a narrowing of the question and NOT as a rule.**
>
> **`AC-15` asks who should win. Its question is UNCHANGED and every answer to it remains available to the
> owner.** **But `C-XVI` is now a PRODUCT-OWNER DECISION, and one candidate answer — *"the
> registration-backed claim ranks above the one without a registration"* — is an outcome following from the
> mere fact that a claim's ground is a registration, which is `C-XVI`'s own words.**
>
> **Therefore: an answer to `AC-15` that ranks by registration-backing is a CHANGE TO `C-XVI`, and must be
> taken as one — deliberately, by the owner, in full knowledge that it is one.** ⟦ARCHITECT ANALYSIS⟧ **It
> must NOT arrive as an implementation default, as a tiebreak nobody decided, or as a reading of `PO-P1`.
> That is the entire reason `C-XVI` exists, and AD-01B §4's *"unrecoverable if decided by implementation"*
> standard applies to it with full force.** **NO ANSWER TO `AC-15` IS PROPOSED, RANKED, PREFERRED, HINTED AT
> OR IMPLIED HERE, AND NO PRECEDENCE RULE IS INVENTED.**

### 3.4 Determination 4 — the Site Head override (`Q-OV`)

**EQUALLY AVAILABLE, UNCHANGED — AND CORROBORATED FROM THE OTHER SIDE.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-76` — AD-01Q's fourth corollary and this decision are the two halves of one
> proposition, and stating them as two unrelated facts would lose the point.**

> **The two halves, and why they are one coin:**
>
> | | **AD-01Q's `A-39` fourth corollary** | **`PO-S1`, this decision** |
> |---|---|---|
> | **What it forbids** | A registration-grounded claim being **HARDER TO DISPLACE** once it has won | A registration-grounded claim being **EASIER TO WIN** in the first place, and being **EXTRA-PROTECTED** after |
> | **Direction** | **NO IMMUNITY FROM the override** | **NO WEIGHT IN the ordinary process, and NO PROTECTION after it** |
> | **Status** | ⟦ARCHITECT RECOMMENDATION⟧ derived at AD-01Q §3.8 | ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1·5`/`PO-S1·10`** |
>
> ⟦ARCHITECT ANALYSIS⟧ **`PO-S1·5`/`PO-S1·10` do not merely sit beside the fourth corollary — they SUBSUME
> it.** **An override bar raised because *"the registration proves it"* is precisely *"extra protection after
> the registration-backed claim has won,"* which `PO-S1·5` forbids in the owner's own words.** **The failure
> mode AD-01Q described concretely is now prohibited by an owner decision rather than by an unratified
> recommendation, and it is prohibited in its general form rather than in the one instance AD-01Q could
> name.**

> **The three checks AD-01Q §3.8 ran against `Q-OV`, RE-RUN against `PO-S1` and all three unchanged:**
>
> | Question | Answer | Why |
> |---|---|---|
> | Is `Q-OV` available only against decisions involving registration-grounded claims? | **NO** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a` says *"the normal CP attribution/clash decision"* WITHOUT qualification as to what grounded any claim in it** |
> | Does an override remain equally available AGAINST a registration-backed claim that has won? | **YES — and this is now owner-backed twice over** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a`'s unqualified grant, and `PO-S1·5`/`PO-S1·10`'s prohibition on post-win protection** |
> | Does `PO-S1` give an override any new power, reach, timing, evidence standard or admissible outcome? | **NO** | **`PO-S1` governs what a CLAIM receives. It says nothing about what an override may do, when it may be done, by whom, or on what evidence** — `AC-27 … AC-31` are all untouched |

> ⟦ARCHITECT ANALYSIS⟧ **What is NOT ratified here, stated because the temptation to over-report it is real.**
> **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission are
> ALL STILL UNRATIFIED, and NOTHING here ratifies any of them.** **`A-39` is CONTENT-RATIFIED and STILL NOT
> MADE.** **The corollary's application TO `Q-OV` specifically cannot be ratified ahead of `Q-OV`: the owner
> has ruled that there is no post-win protection, and the mechanism `Q-OV` against which that ruling would
> bite is itself still a recommendation.** **Gate 3 is entirely untouched by this document.**
>
> **And `C-XVIII` is restated rather than relied on: an override is NOT an anti-abuse mechanism and must
> never be operated as one.** ⟦SETTLED⟧ **Repeated use to enforce a de-facto policy is `C-IX`'s §88
> authorization change arriving by the back door — AD-01Q §3.14, reaffirmed by AD-01R §3.3, and unaltered by
> anything above.**

### 3.5 Determination 5 — registration expiry, and the later genuine Inquiry

**BOTH ORTHOGONAL. NEITHER TOUCHED.**

| Item | Result |
|---|---|
| **Registration expiry** | **UNCHANGED.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-P5` stands: an expired registration cannot establish new attribution claims.** ⟦ARCHITECT ANALYSIS⟧ **Expiry governs WHETHER a registration may ground at all — `P-G` step 3. `PO-S1` governs what a grounded claim RECEIVES — `P-G` step 5. They operate at different steps on different questions and do not meet.** **`PF-13`(3) stands: expiry is still not an event, and nothing is written to a registration when its window lapses.** **`PF-12`'s survival rule — a claim validly minted under a then-live registration is not invalidated when that registration later expires — is NOT engaged, NOT amended and NOT ratified here** ⟦ARCHITECT ANALYSIS⟧ **and it is worth one sentence why not: `PF-12` is about a CLAIM'S SURVIVAL, which is a property of the claim record under `K-17` and ⟦SOURCE⟧ §54, not a protection conferred by the registration. `PO-S1·10` denies protection SOURCED IN THE REGISTRATION; it does not reach a property the claim holds in its own right.** **It remains an unratified limb of AD-01P's ratification list** |
| **A later genuine Inquiry** | **UNCHANGED.** ⟦ARCHITECT RECOMMENDATION⟧ **`J-2`'s Origination Rule as bounded by `K-50` is NOT amended, NOT narrowed and NOT given a new input** — the fourth consecutive document to report this. **Whether a later expression of interest opens a new Inquiry or is an activity on a live one is decided by `J-2` alone.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S1` is about what happens ONCE A CLAIM EXISTS. It does not bear on which Inquiries can generate one, on how many can, or on when.** **`AA-1` (are two live Inquiries on one client × Project ordinary) is NOT resolved. `AC-26` is NOT reached** — [§3.9](#39-determination-9--which-open-items-this-decision-actually-reaches) |

### 3.6 Determination 6 — commission eligibility (`NF-28`)

**UNTOUCHED, DOWNSTREAM, AND IN THE OWNER'S OWN WORDS.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-S2` places commission eligibility TWO LINKS downstream of the attribution
> determination, with the resolved attribution and the booking/commercial conditions between them.** **The
> owner's own chain is the authority for this section, and the architect's check merely confirms it.**

| | Conjunct | Effect of `PO-S1` |
|---|---|---|
| **(i)** | **WHO** — the resolved attribution claim on the converting Inquiry, joined to any `Q-OV` override of it | **NO EFFECT ON THE TEST.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S1` may change WHICH CP's claim is resolved in a given contest — that is what removing a tilt does. The question conjunct (i) asks — *is there a resolved attribution naming this CP on this Inquiry?* — is word-for-word the same, and its answer-bearer is still `K-18`'s claim set.** **`PO-S1·10`'s limit clause is what guarantees this: the resolved attribution keeps every effect it had** |
| **(ii)** | **WHETHER AND WHEN** — the surviving transaction identity and its §32 milestone | **NO EFFECT WHATSOEVER.** `PO-S1` reads no booking fact and touches no transaction fact |
| **(iii)** | **STILL WITHIN PROTECTION** — the registration containing the booking date, or an `NF-24` exception | **NO EFFECT.** ⟦ARCHITECT ANALYSIS⟧ **This is the conjunct a careless reading would touch, because it is the one that reads the registration. It reads the registration's WINDOW against the booking date. `PO-S1` changes no window, no date and no exception, and *"no special weight"* is a rule about a CLAIM's treatment, not about a window's extent.** **`AC-22` is neither answered nor worsened** |

> ⟦SETTLED⟧ **`NF-28` is UNAMENDED by this document. AD-01N's conjunct structure survives a FOURTH round of
> owner input with no TEST changed.** ⟦SETTLED⟧ **`K-9` and `K-10` continue to hold: a CP may hold a validly
> minted claim that WINS a §11 adjudication with no special weight given to it and still be paid nothing,
> because conjuncts (ii) and (iii) are tested at the Booking and `PO-S1` reaches neither.** **`PF-13`(1) is
> the worked case and it is unchanged.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-P3` is NOT ENGAGED and `C-XV` is NOT
> BREACHED — no result of any kind is cached on the registration by anything above, and `C-XV` remains STILL
> UNRATIFIED.**

### 3.7 Determination 7 — audit reconstruction (`Q-AR`)

**NO NEW LINK IS REQUIRED, AND NO EXISTING LINK ACQUIRES A NEW REQUIREMENT. `Q-AR` IS UNAMENDED FOR A SECOND
CONSECUTIVE DOCUMENT.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-77` — this is the sharpest check in the section and the question is a genuine
> one, so it is WORKED rather than answered by analogy to AD-01R's `PF-61`. The question: to DEMONSTRATE that
> no special weight was given, must the reconstruction surface the §11 adjudication's REASONING, or is
> recording its OUTCOME sufficient?**

**The question is decomposed into three, because it is three questions wearing one sentence.**

> **(a) Does `Q-AR` need a NEW LINK for this decision? NO.**
>
> ⟦ARCHITECT RECOMMENDATION⟧ **`Q-AR` link 8 is already *"attribution/clash decision."*** **The determination
> `PO-S1` governs is that link. `PO-S1` introduces no new decision point, no new actor and no new record, so
> there is nothing for a fourteenth link to represent.** **`Q-AR`'s thirteen links are UNCHANGED and no
> fourteenth is admitted** — the same result AD-01R reached, for a different reason, one configuration back.

> **(b) Is the §11 REASONING already a retained fact? YES — and NOT because of this decision.**
>
> ⟦SETTLED⟧ **AD-01P §3.16 established it, and it is quoted rather than re-derived:** *"Under BOTH override
> layers AD-01M §11.2's audit obligations for E are live: 'the human decision, its date, its author, and its
> stated reasons — for every case.' `PO-N9` requires exactly that for the exception layer, and ⟦SOURCE⟧ §11
> plus `C-V` require it for the adjudication layer."*
>
> ⟦ARCHITECT ANALYSIS⟧ **`PO-P4` routes every minted claim to §11 adjudication, which AD-01P §3.16 classified
> as a bounded Policy-E layer — AD-01Q §3.8 later confirmed it as layer 2 of three.** **AD-01M §11.2's
> obligations attach to every Policy-E layer wherever E appears.** **So the adjudication's STATED REASONS are
> ALREADY a required retained fact of link 8, by a chain that predates this decision entirely, and this
> document neither adds that requirement nor may take credit for it.** **`A-25`/`A-34` carry forward
> unchanged and are NOT re-derived.** **`X-25` and `A-37` — `NF-27`'s two missing audit events, of which
> link 8's is one — are NOT discharged, NOT narrowed and NOT affected.**

> **(c) Does DEMONSTRATING "no special weight" require anything FURTHER? NO — and the reason is
> architectural rather than an omission.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The intuitive answer is that the reconstruction should show, per case, that no
> special weight was given. It is wrong twice over.**
>
> 1. **A per-case reconstruction cannot demonstrate a NEGATIVE.** **It can show what was decided, when, by
>    whom and on what stated reasons. It cannot show what was NOT weighed.** **Requiring link 8 to carry
>    *"and the registration was given no special weight"* would make `Q-AR` a source of truth for a property
>    no record holds — which is ⟦ARCHITECT RECOMMENDATION⟧ `C-XIX`'s own stated concern, and `PF-61`'s
>    finding one configuration over.**
> 2. **`C-XVI` COMPLIANCE IS A POPULATION PROPERTY, AND `C-XVI` ALREADY NAMES ITS OWN TEST.** ⟦PRODUCT-OWNER
>    DECISION⟧ **Corollary 2, now at owner status:** *"A mechanism in which no minted claim has ever lost is
>    evidence that `C-XVI` has been breached in practice."* **That is a test over the POPULATION of minted
>    claims and their outcomes, not over any one reconstruction.** ⟦ARCHITECT RECOMMENDATION⟧ **Corollary 3
>    is what makes it runnable:** *"Visible distinguishability is a PREREQUISITE of `C-XVI`, not a reporting
>    nicety … merging minted and filed claims into one population makes `PO-P2` unverifiable after the fact
>    and `C-XVI` unenforceable."*
>
> **Therefore, stated as the determination:**
>
> > **PER CASE, recording the OUTCOME plus the stated reasons that AD-01M §11.2 already requires is
> > SUFFICIENT. ACROSS CASES, `C-XVI`'s own corollary 2 supplies the test and corollary 3 supplies its
> > precondition. `Q-AR` needs NOTHING ADDED, and NO new mechanism, report, metric, threshold, ratio or
> > monitoring rule is proposed, designed or implied by anything in this section.**

> ⟦ARCHITECT ANALYSIS⟧ **One honest limit, recorded rather than smoothed over.** **`Q-AR`'s reconstruction
> will show that a registration-backed claim was adjudicated and how it came out. It will not, and cannot,
> prove that the adjudication was uninfluenced by the claim's ground.** **That is a property of judgement and
> `Q-AR` reconstructs decisions, not judgements.** **The owner should know this is where the assurance comes
> from — `C-XVI` as a rule that leadership applies, and the population-level evidence corollary 2 names — and
> not from the reconstruction chain.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q2` is UNCHANGED, and `PO-Q2·a`'s
> requirement remains OWNER-RATIFIED AND NOT YET SATISFIABLE exactly as AD-01Q §3.10 found it. `AC-31` (who
> the auditor is) is untouched.**

### 3.8 Determination 8 — no existing rule is contradicted

> ⟦ARCHITECT ANALYSIS⟧ **The search was RUN rather than asserted, and its result is that NO new contradiction
> is allocated and `X-26` remains NOT minted.** **A ratification of a rule the architecture has been checking
> against since AD-01P cannot introduce a contradiction the rule did not already introduce — but the check is
> shown, because that reasoning is a shortcut and the series does not take shortcuts.**

| Rule | Result |
|---|---|
| **`C-IX`** — a binding systemic precedence rule is a §88 authorization change to §11 | **NOT BREACHED, and CORROBORATED.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-S1·6`'s *"not a precedence rule"* points the same way as `C-IX`: neither creates a precedence rule and both refuse one.** **`PO-P4`'s selection of `P-δ`'s CONTEST branch — AD-01P `PF-21`, the one branch requiring no §88 change — is reaffirmed** |
| **`C-XI`** — the registration is a TEMPORAL PROTECTION fact and must never become an ATTRIBUTION fact | **NOT BREACHED, and STRENGTHENED.** ⟦ARCHITECT ANALYSIS⟧ **AD-01P §3.14 recorded that `C-XI`'s wording does not reach the failure mode Reading H introduces — *"a claim that cites a registration and is then given a privileged resolution path"* — and that this is *"the gap `C-XVI` closes."*** **`C-XI` has been at owner status since `A-20`; `C-XVI` is now at owner status too, so the gap and the rule it guards are at the same level for the first time** |
| **`C-XV`** — the minting test and the eligibility test are distinct; neither result may be stored on the registration | **NOT BREACHED and NOT ENGAGED.** `PO-S1` caches nothing, stores nothing and evaluates nothing twice. **`C-XV` is STILL UNRATIFIED and is NOT ratified here** |
| **`C-XVIII`** — `Q-OV` may not become a rule, may not rank and may not presume | **NOT BREACHED, and pointing the same way.** **A mechanism forbidden to rank or presume cannot be the vehicle for a weight `PO-S1` forbids** |
| **`K-18`** — the claim-anchor is the Inquiry and nothing else | **CONFIRMED for a SIXTH consecutive document.** **`PO-S1` moves no anchor, and `PO-S2` link 4 is `K-18` in the owner's own words** |
| **`K-48`/`NF-28`** — eligibility is a JOIN, never a single anchor | **CONFIRMED and UNAMENDED** — [§3.6](#36-determination-6--commission-eligibility-nf-28) |
| **`PO-P4`** — registration is NOT an automatic clash winner | **RESTATED by the owner and therefore CONFIRMED, not contradicted** |
| **`B-1`, `B-2`, `L-6`, `K-22`, `H-4`, `J-2`, `J-8`, `NF-9`, `C-XIII`, `C-XIV`, `O-U`, `OF-6`** | **NOT ENGAGED. `PO-S1` records nothing on any Inquiry, reaches no closure classification, adds no operand to any test and creates no registration.** ⟦ARCHITECT ANALYSIS⟧ **Each was checked individually and each is untouched; none is reopened, narrowed, ratified or rejected** |

### 3.9 Determination 9 — which open items this decision actually reaches

> ⟦ARCHITECT ANALYSIS⟧ **Every item below is checked INDIVIDUALLY. *"Unchanged"* means CHECKED AND
> UNCHANGED, never skipped. NOTHING is closed on the strength of an answer that does not reach it, and no
> item is closed out of momentum because a neighbouring one closed.**

| Item | Effect of `PO-S1` |
|---|---|
| **`C-XVI`** — does a registration-grounded claim get any privileged resolution | ⟦PRODUCT-OWNER DECISION⟧ **RATIFIED. The SECOND item in this series closed by a direct Product-Owner ruling rather than by an architect derivation.** **It is NOT renumbered, NOT re-scoped and NOT partially ratified. It is ratified, and its scope is extended past resolution to the post-win direction** → `A-48`, `A-49`, `A-50` |
| **`A-39`** — `C-XVI`'s fourth corollary | **CONTENT-RATIFIED, NOT RENUMBERED, STILL NOT MADE.** ⟦ARCHITECT ANALYSIS⟧ **AD-01R set this precedent for `A-32`: the owner has supplied the content; only the owner may make the amendment; the number does not move** |
| **`AC-15`** and **`AC-20`** — who wins between two live registrations; may the second exist | **UNCHANGED, NOT ANSWERED, NOT NARROWED IN WHAT THEY ASK — PRIORITY RAISED A SIXTH CONSECUTIVE TIME.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S1` removes a DEFAULT TILT and supplies NO RULE** — [§3.3](#33-determination-3--cp-vs-cp-clash-ac-15ac-20). **One named consequence for the ANSWER SPACE is recorded there and is NOT a narrowing of the question. NO PRECEDENCE IS INVENTED** |
| **`AC-32`** — should any SEPARATE anti-abuse control exist at all | **UNCHANGED, NOT ANSWERED, NOT CLOSED, NOT NARROWED IN WHAT IT ASKS — and this was WORKED rather than assumed, because it is the item most likely to be read as having moved.** ⟦ARCHITECT ANALYSIS⟧ **`AC-32` asks whether abuse-prevention infrastructure should EXIST. `PO-S1` governs how a claim is JUDGED once made. These are different questions and an answer to the second is not an answer to the first.** **What DID change is one thing and it is stated precisely: the control AD-01R `PF-64` named as *"the real control"* (`PO-P4` + `C-XVI`) was HALF owner-backed and is now FULLY owner-backed, which is a partial mitigant of the exposure `PO-R2` accepts and makes the case for `AC-32` weaker in exactly that one way.** **And it cuts the other way too, which is recorded rather than omitted: `C-XVI` at owner status now forbids a systemic thumb on the scale as an OWNER DECISION, so any control the owner may later choose under `AC-32` must be something other than a weighting at §11.** **`AC-32` remains OPEN, remains OFF the critical path, and remains expressly NOT a route back to `AC-14` or to this decision** |
| **`AC-25`** — is the mint automatic or a discretionary authorized act; and does an UNOPPOSED claim require the same adjudication act as a contested one | **UNCHANGED, NOT ANSWERED — and CHECKED, because `C-XVI` corollary 1 names `AC-25` by number and `PO-S1·3`/`PO-S1·9` ratify that corollary.** ⟦PRODUCT-OWNER DECISION⟧ **Corollary 1 already states its own boundary and is now owner-backed: *"Whether an unopposed claim requires the same adjudication act as a contested one is `AC-25` and is NOT decided by `C-XVI` — what `C-XVI` forbids is resolving it BECAUSE it is registration-grounded."*** ⟦ARCHITECT ANALYSIS⟧ **So the CONSTRAINT on `AC-25`'s answer is now owner-backed while `AC-25` itself is untouched: a lighter adjudication act for an unopposed claim remains available to the owner, provided its lightness does not follow from the claim being registration-grounded. BOTH HALVES of `AC-25` remain OPEN and NO default is implied for either** |
| **`X-5`** | **UNCHANGED. It stays DISCHARGED BY PRODUCT-OWNER DECISION exactly as AD-01R left it, and is NOT reopened, NOT re-labelled and NOT re-argued** |
| **`AC-1`** — the authorization posture of the closing-reason tap | **UNCHANGED. It stays NARROWED-NOT-CLOSED exactly as AD-01R left it, surviving on `B-2`'s still-open closure-grounded branch.** `PO-S1` adds no operand, reaches no disposition reason and touches no tap |
| **`N-4`** — the closing-reason vocabulary | **UNCHANGED. It stays NARROWED-NOT-CLOSED, PERMANENTLY OFF `P-G`'s critical path, still required for reporting and still fully gating `P-α`'s positive side.** **NO VALUE IS PROPOSED, NAMED, RANKED OR IMPLIED** |
| **`AC-26`** — is a registration's grounding power SINGLE-USE or REPEATABLE | **UNCHANGED, NOT ANSWERED, NOT NARROWED — CHECKED rather than assumed.** ⟦ARCHITECT ANALYSIS⟧ **`AC-26` is a question about the GROUNDING POWER at `P-G` steps 3–4. `PO-S1` operates at step 5 and after. The two do not meet** — [§2.3](#23-what-is-explicitly-unchanged-the-grounding-power-itself). **`Y-1`, `Y-3`, `AA-1`, `K-26` and `T-5` — all coupled to `AC-26` — are likewise NOT resolved, NOT narrowed and NOT branched** |
| **`AC-6`** (boundary convention) · **`AC-8`** (business timezone) | **UNCHANGED, and EACH CHECKED FOR A NEW CONSUMER: there is none.** **`PO-S1` evaluates no window, compares no dates and consults no `(R, N)` pair. `AC-6` stays TRIPLY money-bearing; `AC-8` acquires no new operand. NEITHER resolved** |
| **`AC-9`/`T-9`** (offline capture date vs sync date) · **`AC-21`** with **`Q10`**/**`M-5`**'s uniqueness half (the client identity term) · **`AA-2`** (project-less preliminary registration) | **UNCHANGED, each CHECKED and each RULED OUT as unaffected.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S1` adds no date, no identity term and no Project scope to anything. `Q-AR` links 1 and 3 remain gated by `AC-21` and `AC-9` exactly as AD-01Q left them. NONE resolved, NONE narrowed** |
| **`AC-27`** (two override layers on one outcome) · **`AC-28`** (the evidence asymmetry) · **`AC-29`** (until when may an override be performed) · **`AC-30`** (what an override's decision may SAY) · **`AC-31`** (who the auditor is) | **ALL UNCHANGED, each CHECKED.** ⟦ARCHITECT ANALYSIS⟧ **`PO-S1` corroborates the override's AVAILABILITY against a registration-backed win** — [§3.4](#34-determination-4--the-site-head-override-q-ov) — **and says nothing about who may perform one, on what evidence, until when, or what its decision may contain. `AC-30` in particular is checked explicitly: prohibiting post-win protection bears on whether an override is available, never on the set of things it may say. NONE resolved** |
| **`AC-18`** — re-registration cadence, minimum gap, cap | **UNCHANGED, NOT RESOLVED, NOT NARROWED, and its status NOT further clarified.** AD-01R clarified it once; nothing here adds to that. **No cadence, gap or cap is invented** |
| **`L-13`**'s hazard finding · **`MF-9`** · **`X-13`** | **UNAFFECTED AS FINDINGS. The cost `PO-R2` accepts is NOT retired and NOT reduced** — [§3.2](#32-determination-2--composition-with-ac-14--option-a) |
| **`AC-22`** · **`AC-23`** with **`Q11`** (still BLOCKING) · **`AC-24`** · **`AC-2`, `AC-3`, `AC-5`, `AC-7`, `AC-10`, `AC-11`, `AC-12`, `AC-13`, `AC-16`, `AC-17`, `AC-19`** | **UNCHANGED — CHECKED, NOT SKIPPED. NONE resolved, NONE narrowed, NONE enlarged.** **`AC-4` and `AC-14` remain CLOSED and neither is reopened** |
| **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`Q10`, `Q11`** · **`V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`** · **`Q0-a`, `Q0-b`, `Q0-d`, `Q0-e`** | **UNCHANGED — each carried forward and each accounted for. NONE resolved.** ⟦SETTLED⟧ **`V-4` is the cheapest unblocking question in the register for the TENTH consecutive document and has still not been taken. `Q0-d` stays OFF the critical path — `C-IX` is untouched and no precedence rule is created. `Q0-c` stays ANSWERED with `AC-14`** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start.** ⟦SETTLED⟧ **It owns every formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING in this document touches any of them.** Its consumer list is unchanged from AD-01R's |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-78` — the net accounting, stated as arithmetic.**
>
> **`PO-S1` RATIFIES ONE CONSTRAINT (`C-XVI`), EXTENDS ITS SCOPE in one named direction, CONTENT-RATIFIES ONE
> EXISTING AMENDMENT (`A-39`) without renumbering it, requires THREE amendments across THREE documents, and
> REACHES NOTHING ELSE.**
>
> **It CLOSES no open question, OPENS no new one, NARROWS no item's question, ENLARGES nothing, RE-OPENS
> nothing and INVENTS nothing.** ⟦ARCHITECT ANALYSIS⟧ **That is what a pure ratification looks like, and it
> is reported as one rather than dressed up. The document's value is entirely in the STATUS change it
> records — which is also the reason it was the head of the gating list.**

---

## 4. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands.
>
> **Result of the search against APPROVED decisions: NO contradiction was found with `Q1`, `Q4`, `Q6`, `Q7`,
> `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `PO-N1 … PO-N9`, `PO-O1 … PO-O14`,
> `PO-P1 … PO-P12`, `PO-Q1`/`PO-Q2` or `PO-R1`/`PO-R2`.** **All three amendments below are STATUS amendments
> to an ⟦ARCHITECT RECOMMENDATION⟧ the owner has now approved, never a conflict with an approved decision.**

### 4.1 The three amendments, named and NOT made

> ⟦ARCHITECT ANALYSIS⟧ **THREE — the same count as AD-01R, and the count is reported rather than fitted.
> AD-01P and AD-01Q each produced nine; a pure ratification produces the same status amendment in every
> document that carried the item as unratified, and there are exactly three of those. All three are cited
> inline in [§1](#1-the-decision), [§2](#2-what-changes-and-what-does-not) or
> [§3](#3-the-determinations) before this section begins, and NONE is introduced here for the first time.**

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-48`** | **AD-01P — §3.0's promise, §5.1's `C-XVI` recommendation block and its ratification-table row, §5.4's items 1 and 3, §6.1's gate 1, and §4.2's AD-01B row** | **AD-01P states `C-XVI` under an ⟦ARCHITECT RECOMMENDATION⟧ header reading *"RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED,"* calls it at §5.1 *"the single most important ratification in the document,"* places it FIRST in §5.4's sequencing, carries it as §6.1 GATE 1, and lists it at §4.2 among the items AD-01B §4's *"unrecoverable if decided by implementation"* standard is applied to.** ⟦PRODUCT-OWNER DECISION⟧ **All six locations are SUPERSEDED as to STATUS: `C-XVI` is RATIFIED by the Project Owner at `PO-S1`, and must be re-labelled ⟦PRODUCT-OWNER DECISION⟧ throughout — the `A-20` precedent, which made the same change for `C-XI` at AD-01O.** **AD-01P §5.1's gate-1 row must be marked DISCHARGED and §5.4's sequencing must begin at what was item 2.** ⟦ARCHITECT ANALYSIS⟧ **`C-XVI`'s TEXT does not change and must NOT be edited — the owner has ratified it as written. Its three corollaries stand, and a FOURTH is now content-ratified (`A-39`). AD-01P's REASONING for why `C-XVI` was necessary — that without it `PO-P1` and Reading G are observationally identical wherever no competing claim exists — remains TRUE and must NOT be deleted: it is why the ratification mattered, and `PF-70` depends on it.** **AD-01P is NOT edited.** |
| **`A-49`** | **AD-01Q — §2.3's `C-XVI` row, §3.8's finding and its fourth-corollary block, §5.1's ratification table, and §6.1 gate 2** | **AD-01Q records `C-XVI` at §2.3 as *"Adopted, STILL UNRATIFIED,"* re-tests it at §3.8 and concludes it *"SURVIVES"* while remaining unratified, states at §5.1 that *"`C-XVI` is ITSELF still unratified and is AD-01P's single most important ratification. This corollary is ratified with it or not at all — and if `C-XVI` is not ratified, the corollary has nothing to attach to,"* and carries `C-XVI` as the head of §6.1 gate 2's five limbs.** ⟦PRODUCT-OWNER DECISION⟧ **All four locations are SUPERSEDED as to STATUS. `C-XVI` is RATIFIED; the fourth corollary now HAS something to attach to; and §6.1 gate 2 must be restated as FOUR limbs — `P-G` (with `A-38`(b)'s seventh step), `C-XV`, `PF-6` and `PF-23` — with the `C-XVI` limb DISCHARGED.** ⟦ARCHITECT ANALYSIS⟧ **AD-01Q's §3.8 FINDING — that `Q-OV` does not give registration-grounded claims a privileged path — remains TRUE and must NOT be deleted; it was correct when written and `PF-76` relies on it.** **AD-01Q is NOT edited.** |
| **`A-50`** | **AD-01R — §3.4's `C-XV`/`C-XVI` block, §6.1 gate 2, §6.2's question, and the Closing note's `C-XVI` sentence** | **AD-01R records at §3.4 that *"`C-XVI` and `A-39`'s fourth corollary are STILL UNRATIFIED and are not ratified here,"* carries `C-XVI` as §6.1 gate 2's head and as the head of its *"What VALIDATE means concretely"* sequencing, poses it at §6.2 as the single next question, and states in the Closing note that *"nothing in this document ratifies it either."*** ⟦PRODUCT-OWNER DECISION⟧ **All four locations are SUPERSEDED: `C-XVI` is ANSWERED and RATIFIED, and §6.2's question is DISCHARGED.** **AD-01R's §6.1 list remains EIGHT items — gate 2 is NOT discharged, only its head limb is — and its §6.1(1) instruction *"Take gate 2 first — it is now the head of the list, and `C-XVI` is its head in turn"* must be restated with `P-G` as gate 2's head.** ⟦ARCHITECT ANALYSIS⟧ **AD-01R's §3.4 finding that `PO-R1` did not breach `C-XVI` remains TRUE and must NOT be deleted, and its §6.2 REASONING — that the more registration-backed claims the architecture admits, the more of the commercial outcome rests on `C-XVI` — is why the question was asked and is now why the answer matters.** **AD-01R is NOT edited.** |

> ⟦ARCHITECT ANALYSIS⟧ **`A-39` — CONTENT-RATIFIED, NOT RENUMBERED, STILL NOT MADE, and NO NEW NUMBER IS
> MINTED FOR IT.** **AD-01Q registered `A-39` as the requirement that `C-XVI` acquire a FOURTH COROLLARY —
> *no special immunity from being overridden* — and recorded that it is *"ratified with `C-XVI` or not at
> all."*** ⟦PRODUCT-OWNER DECISION⟧ **`C-XVI` is now ratified, and `PO-S1·5`/`PO-S1·10` supply the
> corollary's content in the owner's own words and in a BROADER form than `A-39` drafted** — `PF-69`.
> **`A-39` keeps its number, keeps its target, and moves from CONTENT-DERIVED to CONTENT-RATIFIED. It remains
> NAMED AND NOT MADE, and only the Project Owner may make it.** **This follows the precedent AD-01R set for
> `A-32`, and no new amendment number is minted to record a change of state in an existing one.**

> ⟦ARCHITECT ANALYSIS⟧ **Amendments deliberately NOT named, each considered and each rejected, because the
> discipline cuts in this direction too.** **NO amendment is named to AD-01N (`C-XVI` postdates it and is
> nowhere in it), to AD-01L (`C-IX` is untouched and no precedence rule is created), to AD-01M (Policy C
> remains selected as written; `A-25`/`A-34`'s Policy-E mapping is CONFIRMED, not amended —
> [§3.7](#37-determination-7--audit-reconstruction-q-ar)), or to AD-01K (`K-18` is CONFIRMED, not amended).
> **Naming an amendment to mark a document's involvement rather than its inaccuracy would be padding the
> register, which is the opposite of what the register is for.**

### 4.2 Documents requiring NO change — each checked

> ⟦ARCHITECT ANALYSIS⟧ **Stated document by document so that *"no change required"* is a CHECKED RESULT
> rather than an omission. Two results are notable in advance: AD-01K requires NO amendment for a FOURTH
> consecutive document, and AD-01J for a THIRD.**

| Document | Result |
|---|---|
| **AD-01** | **No change.** §D.4's *"claims are never overwritten by a later claim"* is untouched and is pointing the same way as `C-XVI`. `Q10` and `Q11` NOT resolved |
| **AD-01A** | **No change.** `Q1`, `Q4`, `Q7` fixed input, NOT reopened. **§8.3's Dimension A is NOT engaged, NOT amended and NOT re-valued. §8.5 honoured — no workflow, screen, approval step, queue or gate is designed, and specifically no adjudication procedure is designed around §11.** **`N-4` NOT resolved; NO VALUE PROPOSED** |
| **AD-01B** | **No change.** §4's *"unrecoverable if decided by implementation"* standard is applied to everything still unratified — **which is why [§6](#6-recommendation) does not recommend `BUILD NOW` despite the most important single ratification in the sub-series having just landed.** **`A-48` notes that `C-XVI` must come off AD-01P §4.2's application of that standard** |
| **AD-01C** | **No change.** `Q6` NOT reopened. `T-1`, `T-3`, `T-6 … T-11` NOT resolved |
| **AD-01E** | **No change.** `U-4` untouched; no dormancy threshold is invented or implied |
| **AD-01F** | **No change.** **`V-4` remains OPEN and is now recommended by TEN consecutive documents without being taken** |
| **AD-01G** | **No change.** `G-1`/`V-1` CONFIRMED; `V-7` NOT reopened |
| **AD-01H** | **No change.** `H-4`, `V-2`, `V-3`, `H-8`, `H-9` CONFIRMED and none engaged. `Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved |
| **AD-01I** | **No change — and `I-9`'s no-new-entity standard is MET**, which is a result and is stated as one: **`PO-S1` adds NO entity, NO record, NO field, NO state, NO marker and NO mechanism, so the necessity test has nothing to run against.** `Z-2`, `Z-5` NOT resolved |
| **AD-01J** | **NO CHANGE, for a THIRD consecutive document.** **`J-2` requires NO amendment, is NOT narrowed and is NOT given a new input. `J-8` NOT engaged. `C-I … C-IV` all survive unamended.** `AA-1`, `AA-2`, `AA-4`, `AA-5` NOT resolved |
| **AD-01K** | **NO CHANGE, for a FOURTH consecutive document.** **`K-18` CONFIRMED for a SIXTH consecutive document; `K-9`, `K-10`, `K-12`, `K-17`, `K-22`, `K-26`, `K-42`, `K-47`, `K-48`, `K-50`, `K-52` all CONFIRMED and none contradicted.** ⟦ARCHITECT ANALYSIS⟧ **A ratification governing how a registration-grounded claim is RESOLVED that amends AD-01K nowhere is further evidence that the Inquiry was the right anchor: the registration supplies a ground, the claim lives on the Inquiry, and the resolution rule touches neither anchor.** `AB-1`, `AB-2`, `AB-3` NOT resolved |
| **AD-01L** | **No change.** **`C-IX` UNTOUCHED and CORROBORATED — no precedence rule is created, so its §88 bar is NOT engaged. `C-VIII`, `C-X` untouched. `B-1`, `B-2`, `L-6`, `K-22` NOT engaged and NOT reopened. `L-13`'s hazard UNAFFECTED as a finding. `L-25` CONFIRMED and load-bearing — it is one of the three independent sources of `C-XVI`'s third corollary** — [§5.1](#51-no-new-question-is-minted-and-why). **`A-1 … A-11`, `A-30`, `A-31`, `A-32` remain named and not made** |
| **AD-01M** | **No change — and this is a result.** **Policy C remains selected as written and the five policies are unchanged. `A-25`/`A-34`'s Policy-E mapping is CONFIRMED and NOT amended: §11.2's obligations for the adjudication layer are what already make the §11 reasoning a retained fact, which is why `Q-AR` needs nothing added** — [§3.7](#37-determination-7--audit-reconstruction-q-ar). **`Q0-c` stays ANSWERED; `AC-1` NOT further narrowed; `AC-2`, `AC-3` carry forward; `Q0-a`, `Q0-b`, `Q0-e` NOT answered; `Q0-d` stays OFF the critical path** |
| **AD-01N** | **No change — and this is checked, not assumed.** `C-XVI` postdates AD-01N and appears nowhere in it. **`NF-9`, `NF-15`, `NF-21`, `NF-24`, `NF-25`, `NF-26`, `NF-27`, `NF-28`, `NF-29` all CONFIRMED; `NF-28` UNAMENDED for a FOURTH round of owner input. `C-XI` CONFIRMED and NOT BREACHED; `C-XII`, `C-XIII` untouched. `X-5` stays DISCHARGED; `X-6` stays CONFIRMED. `AC-6` NOT resolved. `A-47` stands unchanged. AD-01N remains at `VALIDATE` and is NOT approved** |
| **AD-01O** | **No change.** **`PO-O6`, `PO-O10`, `PO-O13`, `PO-O14` UNCHANGED; `PO-O13` is restated by `PO-S1·4` and thereby confirmed. `A-20`'s precedent is CITED and RELIED ON for `A-48`'s shape and is NOT re-derived. `O-U` untouched; `OF-6` NOT engaged; `C-XIV` NOT re-tested and NOT breached. `A-14 … A-26`, `A-42` remain named and not made. AD-01O remains advisory and is NOT approved** |
| **AD-01P** | **One amendment — `A-48`.** **`C-XVI` RATIFIED — TEXT UNCHANGED, STATUS CHANGED. `P-G` ADOPTED as written, NOT re-derived, NOT narrowed and given NO step here; it is STILL UNRATIFIED and is now gate 2's head. `C-XV`, `PF-6` and `PF-23` ADOPTED and STILL UNRATIFIED. `PF-4`, `PF-5`, `PF-9`, `PF-10`, `PF-12`, `PF-13`, `PF-21` all CONFIRMED. `AC-22 … AC-26` carry forward; `AC-25`'s constraint is now owner-backed while `AC-25` itself is untouched. AD-01P remains at `VALIDATE` and is NOT approved** |
| **AD-01Q** | **One amendment — `A-49`.** **`Q-OV` ADOPTED and equally available; `Q-AR` ADOPTED and UNAMENDED for a SECOND consecutive document, gaining NO link; `C-XVII`, `C-XVIII`, `C-XIX` ADOPTED and untouched and ALL STILL UNRATIFIED; `A-37`, `A-38`, `A-40`, `A-41`, `A-42`, `A-43`, `A-44` all remain named and not made, and `A-39` is CONTENT-RATIFIED and still not made; `X-23`, `X-24`, `X-25` all stand. `AC-27 … AC-31` all UNCHANGED. AD-01Q remains at `VALIDATE` and is NOT approved** |
| **AD-01R** | **One amendment — `A-50`.** **`PO-R1` LOCKED, UNCHANGED and NOT REOPENED; `PO-R2`'s accepted cost NOT retired. `AC-14` stays CLOSED; `X-5` stays DISCHARGED; `AC-1` and `N-4` stay NARROWED-NOT-CLOSED; `AC-18`'s clarified status stands; `AC-32` stays OPEN and off the critical path. `PF-55 … PF-66` all CONFIRMED; `A-45`, `A-46`, `A-47` remain named and not made. AD-01R remains at `VALIDATE` and is NOT approved** |
| **`01-bmexa-architecture-reconciliation.md`** | **No change. `M-5`'s uniqueness half and `M-9` NOT resolved, NOT narrowed, NOT branched** |
| **`BMEXA_MASTER_SPEC.md` / consolidated requirements / `ENGINEERING_RULES.md`** | **No change, and NO amendment is proposed to any of them.** **§11 requires NO amendment: it already reserves attribution resolution to builder-side authorized leadership, and `PO-S1·7` routes registration-backed claims to exactly that with no precedence, ranking or tiebreak added — so `C-IX`'s §88 bar is NOT engaged.** **§11, §32, §39, §40, §50, §54, §88, §97, R1, R2, R4, R6 are read as they stand and none is extended, narrowed or reinterpreted** |

### 4.3 No prior document was silently edited

> | Check | Result |
> |---|---|
> | Working tree state | **`git status --porcelain` names NO FILE OTHER THAN THIS DOCUMENT** at any point during its production |
> | Scope within `docs/architecture/` | **One path: `03s-c-xvi-no-special-weight-ratification-decision.md`** |
> | Consequence for the chain | **`00-*.md` through `03r-*.md`, `schema-phase-0.sql`, `BMEXA_MASTER_SPEC.md`, `ENGINEERING_RULES.md` and the consolidated requirements are BYTE-IDENTICAL to their state before this document existed** |
>
> **Therefore AD-01 … AD-01R are ALL UNEDITED. The fifty amendments on the register are NAMED AND NOT MADE,
> and only the Project Owner may make any of them.**

### 4.4 The register after this document

> **AD-01P closed at `A-1 … A-35` across nine documents. AD-01Q closed at `A-1 … A-44` across ten. AD-01R
> closed at `A-1 … A-47` across eleven. This document adds THREE — `A-48`, `A-49`, `A-50` — across THREE
> target documents, and CONTENT-RATIFIES one existing member (`A-39`) without renumbering it.**
>
> | Target | Amendments | Count |
> |---|---|---|
> | **AD-01P** | `A-48` | **1** |
> | **AD-01Q** | `A-49` (`A-39` CONTENT-RATIFIED, not newly required) | **1 new** |
> | **AD-01R** | `A-50` | **1** |
> | **Every other prior document** | — | **0** |
>
> **The register now stands at `A-1 … A-50`, across TWELVE documents. NONE has been made.** **`Q0-e` — the
> ratification asking the owner to ratify `A-1 … A-n` — is correspondingly larger and is NOT answered here.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The exchange rate, stated honestly because the last three documents each reported
> their own.** **THREE amendments buy the RATIFICATION OF THE CONSTRAINT AD-01P called *"the single most
> important ratification in the document,"* a SCOPE EXTENSION of that constraint into the post-win direction,
> and ONE CONTENT-RATIFIED amendment — against AD-01R's three buying a closed register row and a discharged
> contradiction, and AD-01Q's nine buying one ratified requirement and no closures.** **All three amendments
> here are the SAME status change in three documents, which is the cheapest possible shape an amendment set
> can have.** **Fifty unmade amendments across twelve documents remains a state none of those documents can
> be approved in, and one ratification does not change that.**

---

## 5. Remaining open items

### 5.1 No new question is minted — and why

> ⟦ARCHITECT ANALYSIS⟧ **`PF-79` — the `AC` series stands at `AC-32` and `AC-33` is NOT allocated. This is a
> CHECKED RESULT and not an omission, and the one candidate that survived examination is shown being ruled
> out rather than dropped.**

> **The candidate: `C-XVI`'s THIRD COROLLARY.**
>
> **`C-XVI` was stated at AD-01P §5.1 as a rule WITH THREE COROLLARIES. The owner's ten points state
> corollary 1 in their own words (`PO-S1·3`/`PO-S1·9`) and corollary 2 in substance (`PO-S1·7`, joined to
> `PO-P4` and `PO-R1·f`). They do NOT mention corollary 3:** *"Visible distinguishability is a PREREQUISITE
> of `C-XVI`, not a reporting nicety … merging minted and filed claims into one population makes `PO-P2`
> unverifiable after the fact and `C-XVI` unenforceable."*
>
> **The question that raises: is `C-XVI` now ratified while its stated enforceability PREREQUISITE is not —
> and does that gap need an `AC-33`?**
>
> **NO, and the reason is positive rather than a judgement call.** ⟦ARCHITECT ANALYSIS⟧ **Corollary 3's
> requirement does NOT depend on `C-XVI` and never did. AD-01P states it with THREE INDEPENDENT sources
> attached, and each holds on its own:**
>
> | Source | What it requires, independently of `C-XVI` |
> |---|---|
> | ⟦SOURCE⟧ **§54** | A system-created fact must be visibly distinguishable from one produced in the ordinary course |
> | ⟦SOURCE⟧ **§39** | Requires it independently, on the CP-facing surface |
> | ⟦ARCHITECT RECOMMENDATION⟧ **`L-25`** | A system-created fact must be visibly distinguishable — AD-01L, and untouched by anything here |
>
> **So nothing is left dangling: the prerequisite stands whether or not the owner's ten points name it, and
> `PF-34(2)`'s discipline applies exactly — an omission is not a repeal, and it is also not a gap when the
> requirement has its own footing.** ⟦ARCHITECT ANALYSIS⟧ **What the architect must NOT do is report
> corollary 3 as RATIFIED. It is not. It is REQUIRED, by §54, §39 and `L-25`, and it is now doing the work of
> making an OWNER-RATIFIED constraint verifiable rather than an unratified one — which is a change in what
> hangs on it, not in its status.**
>
> **NO new open item is minted. `AC-33` is NOT allocated.**

### 5.2 The rest, carried forward

**An INDEX onto [§3.9](#39-determination-9--which-open-items-this-decision-actually-reaches), which is the
authority.**

| Effect | Items |
|---|---|
| **RATIFIED** | **`C-XVI`** — by direct Product-Owner ruling, the SECOND item in the series closed that way · with its scope EXTENDED past resolution into the post-win direction |
| **CONTENT-RATIFIED, NOT RENUMBERED, STILL NOT MADE** | **`A-39`** — `C-XVI`'s fourth corollary |
| **NEW** | **NONE.** The `AC` series stands at `AC-32`; the `C` series at `C-XIX`; the `X` series at `X-25` |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE ON WHAT THEY ASK** | **`AC-15`**/**`AC-20`** (a default tilt is removed; no rule is supplied — one named answer-space consequence recorded) · **`AC-32`** (the existing control becomes fully owner-backed; the question is untouched) · **`AC-25`** (its constraint becomes owner-backed; both halves stay open) · **`AC-26`** (grounding power, not claim treatment) · **`AC-27 … AC-31`** (override internals) · **`AC-6`**, **`AC-8`** (no new consumer) |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-1`, `AC-2`, `AC-3`, `AC-5`, `AC-7`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-12`, `AC-13`, `AC-16`, `AC-17`, `AC-18`, `AC-19`, `AC-21`, `AC-22`, `AC-23`, `AC-24`** · **`AA-1 … AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`N-4`** · **`Q10`**, **`Q11`** (still BLOCKING) · **`V-4`** (tenth document), **`W-1`**, **`Y-1`, `Y-3`, `Y-4`, `Y-5`**, **`Z-2`, `Z-5`**, **`M-5`**'s uniqueness half, **`M-9`** · **`L-13`**, **`MF-9`**, **`X-13`** as findings |
| **STILL CLOSED / DISCHARGED, NOT REOPENED** | **`AC-4`** (AD-01P) · **`AC-14`** and **`Q0-c`** (AD-01R) · **`X-5`** (DISCHARGED at AD-01R) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-50`**. **`Q0-d` stays OFF the critical path** |

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in the **CP commission logic** and **authorization rules** MUST-ASK columns.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§3](#3-the-determinations), [§4](#4-the-amendment-register) or
> [§5](#5-remaining-open-items) becomes approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **The decision is the Project Owner's, it is internally
coherent, it is compatible with every approved decision in the chain, and it CONTRADICTS NOTHING** —
[§3.8](#38-determination-8--no-existing-rule-is-contradicted). **It ratifies the constraint AD-01P named as
the single most important ratification in the document; it extends that constraint into the one direction
AD-01Q identified as uncovered; it makes the only real control on the exposure AD-01R's `PO-R2` accepts fully
owner-backed; and it requires only three amendments, all of them the same status change.** **It also does
what no amount of architecture could do: it converts a rule the implementation could have quietly defeated
into one the implementation may not defeat without breaching an owner decision.**

**Why not BUILD NOW.** ⟦ARCHITECT ANALYSIS⟧ **Because ONE LIMB of ONE GATE closing out of EIGHT GATES does
not make an architecture buildable, and this document closes less register surface than AD-01R did.**

- **AD-01R's §6.1 list remains EIGHT items. Gate 2 is NOT discharged — only its HEAD LIMB is.** **Gate 2 had
  five limbs; `PO-Q2` discharged one at AD-01Q; `PO-S1` discharges one here; FOUR remain — `P-G` (with
  `A-38`(b)'s seventh step), `C-XV`, `PF-6` and `PF-23`, all architect derivations and all unratified.**
- **`P-G` — the rule whose step 5 this ratification attaches to — is ITSELF STILL AN ARCHITECT DERIVATION
  AND STILL UNRATIFIED.** ⟦ARCHITECT ANALYSIS⟧ **Ratifying a constraint a rule cites is not approving the
  rule. The owner has now ruled on what `P-G` step 3 reads (AD-01R) and on what `P-G` step 5 may not do
  (this document), while `P-G` itself — its order, its actors, its governing authority at each step —
  remains unapproved. Reporting that as readiness would be the clearest possible case of the error AD-01B §4
  warns against.**
- **AD-01Q's seven derivations — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, its minimum field set and its
  permission — are ALL STILL UNRATIFIED, and `Q-AR` remains OWNER-RATIFIED AND NOT YET SATISFIABLE.** **Gate
  3 is entirely untouched.**
- **`AC-15`/`AC-20` — CP-vs-CP precedence — are unanswered for a SIXTH consecutive document.** ⟦ARCHITECT
  ANALYSIS⟧ **And this decision sharpens rather than relieves them: it removes the default tilt an
  implementation would otherwise have supplied by accident, which means the absence of a rule is now
  load-bearing rather than merely unnoticed.**
- **`AC-25`, `AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11` (BLOCKING), `AC-6`, `AA-2` and
  `AC-21` with `M-5`'s uniqueness half are all untouched**, and **`AC-27 … AC-32`** are untouched.
- **Fifty amendments stand NAMED AND NOT MADE across twelve documents.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. Every remaining gate is a one-sentence answer from the Project Owner. A further architect
document would be analysis substituting for a decision — AD-01L's own words, applied now for the seventh
time.** **And shelving would waste what this answer has bought: the sub-series' most load-bearing constraint
moved from a recommendation nobody had signed to a rule an implementation may not breach.**

### 6.1 The gating list after this decision

> ⟦ARCHITECT ANALYSIS⟧ **AD-01R's eight-item list, restated with gate 2's HEAD LIMB discharged and NOTHING
> ELSE CHANGED. Still eight items — a gate with four remaining limbs is not a discharged gate. Every one is
> an owner answer. NONE is answered here and NO default is implied for any of them.**

| # | Gate | Status |
|---|---|---|
| **~~1~~** | ~~`AC-14` — does a registration whose inquiry was closed as never a real opportunity remain usable~~ | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED at AD-01R. ANSWERED YES — Option A. LOCKED** |
| **2** | **`P-G`** (with `A-38`(b)'s seventh step), **`C-XV`**, **`PF-6`** and **`PF-23`** — AD-01P gate 2's FOUR remaining limbs. ~~`C-XVI` (with `A-39`'s fourth corollary)~~ | ⟦PRODUCT-OWNER DECISION⟧ **`C-XVI` LIMB DISCHARGED — RATIFIED** → `A-48`, `A-49`, `A-50`; **`A-39` CONTENT-RATIFIED.** **The FOUR remaining limbs are ALL ARCHITECT DERIVATIONS and ALL UNRATIFIED. `P-G` IS NOW THIS GATE'S HEAD** |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission** | **ALL UNRATIFIED.** `C-XVIII` carries the governance consequence |
| **4** | **`AC-27`** — may one individual perform both overrides on one outcome | **NOT ANSWERED** |
| **5** | **`AC-30`** — what an override's decision may SAY | **NOT ANSWERED** |
| **6** | **`AC-29`** — until when may an override be performed | **NOT ANSWERED** |
| **7** | **`AC-28`** and **`AC-31`** — the evidence asymmetry; who the auditor is | **NOT ANSWERED** |
| **8** | **`AC-25`** (both halves) · **`AC-15`** and **`AC-20`** (a SIXTH consecutive document) · **`AC-12`** as enlarged · and the operand tier — **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s uniqueness half**, with **`AC-32`** as a VALIDATE / BUILD-LATER consideration | **NOT ANSWERED. No precedence is invented. `Q11` still BLOCKING** |

**What VALIDATE means concretely.**

1. **Take gate 2 first** — it remains the head of the list, and **`P-G` is now its head in turn**, with
   `A-38`(b)'s seventh step attached.
2. **Then gate 3** — AD-01Q's seven derivations. **Gates 2 and 3 are one sitting, because `A-38`(b) is an
   extension of `P-G` and is meaningless ratified apart from it, and because `A-39` — now content-ratified —
   cannot be MADE until `C-XVI`'s host document is signed off alongside `Q-OV`.**
3. **Then gates 4–8 in the commercial sitting that EIGHT consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1, AD-01Q §6.1, AD-01R §6.1 and this section.
4. **`AC-32` remains explicitly NOT on the critical path and must not be allowed to delay any of the above.**
   ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` is locked whichever way `AC-32` is answered, and `PO-S1` is locked
   whichever way `AC-32` is answered.**
5. **Ratify or reject `A-48 … A-50` alongside `A-1 … A-47`** (`Q0-e`). **Fifty unmade amendments across
   twelve documents.**
6. **Nothing may be built meanwhile that presupposes an answer to any remaining gate.** ⟦SOURCE⟧
   consolidated **§30**. **Everything AD-01P §6.1(4), AD-01Q §6.1(5) and AD-01R §6.1(6) list as
   NOT-TO-BE-BUILT remains not-to-be-built, and this decision adds to that list: no default win for an
   unopposed registration-backed claim; no presumption, tiebreak, weighting, ranking, scoring or ordering in
   favour of a registration-backed claim in any contest; no abbreviated, lighter or automatic resolution path
   that follows from a claim's ground being a registration; and no heightened bar, immunity or protection of
   any kind attaching to a registration-backed claim after it has won.**

### 6.2 The one next question

> ⟦BUSINESS DECISION REQUIRED — ONE QUESTION, AND ONLY ONE⟧
>
> **This is gate 2's new head — `P-G`, with `A-38`(b)'s seventh step — stated in the same plain register the
> owner has been answering in. It is the single highest-priority remaining item, and it is asked alone
> because a list of several is how a gating list stops being taken.**
>
> > **"When a partner's registration is used as the basis for a claim on a later enquiry, the steps we have
> > written down run in this order: the enquiry arrives and becomes an enquiry in its own right; on that day
> > the system checks whether that partner holds a still-live registration for that same client and that same
> > project, and looks at nothing else; if one exists, a claim naming that partner may be recorded against
> > that enquiry, citing that one specific registration; the claim is then argued out and decided by your
> > authorised leadership exactly like any other, and it can lose; an authorised holder may afterwards
> > override that decision; and only then, and only if the enquiry converts, does anyone look at commission
> > eligibility at all.**
> >
> > **Is that the right order, with the right people at each step — or does any step belong to someone else,
> > or happen at a different point?"**
>
> ⟦ARCHITECT ANALYSIS⟧ **Why this one, and not another.** **`C-XVI` governs what happens at one step of
> `P-G`. `P-G` is the rule that says there are steps, what they are, in what order, at whose hand and under
> which authority — and AD-01P said in terms that *"if any step's actor or authority is not what the owner
> intends, `P-G` changes and most of §3 changes with it."*** **The owner has now ruled on what step 3 reads
> (AD-01R) and on what step 5 may not do (this document). The rule containing both steps is still
> unapproved, and it is the largest single thing standing between this sub-series and a buildable
> architecture.** **`AC-25` — whether step 4's mint is automatic or a discretionary authorized act — is
> deliberately NOT folded into this question and remains open in its own right.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§6](#6-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being asked
to record a Product-Owner ratification is not permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**:
CP commission logic, authorization rules, source-of-truth rules and audit requirements are **MUST ASK BEFORE
DECIDING**; *"inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧
Consolidated **§30**: *"No schema/code implementation should be inferred from an unresolved product
ambiguity."*

**THE RATIFICATION, STATED ONCE MORE BECAUSE IT IS THE WHOLE POINT OF THE DOCUMENT.** ⟦PRODUCT-OWNER
DECISION⟧ **`C-XVI` IS RATIFIED BY THE PROJECT OWNER.** **A registration-backed CP attribution claim receives
NO special commercial priority merely because it is backed by a valid CP Project Registration: no head start,
no benefit of the doubt, no automatic win when unopposed, no automatic attribution, no extra protection once
won; registration is evidence and basis, never a precedence rule; the claim runs the same normal
attribution/clash-resolution process as any other; a valid registration does not itself determine the winner;
and the absence of competition does not convert registration into automatic attribution.** **This is the
SECOND item in the series closed by a direct Product-Owner ruling rather than by an architect derivation, the
first having been `AC-14` at AD-01R, whose `PF-55` is the precedent for this framing.** **The decision is NOT
re-argued, NOT weighed, NOT ranked, NOT hedged and NOT softened anywhere above.** It is recorded **verbatim**
at [§1.2](#12-the-decision-recorded-verbatim-before-any-analysis) as `PO-S1·1 … PO-S1·10` and `PO-S2`,
**before any analysis touched it.**

**GROUNDING POWER AND SPECIAL WEIGHT ARE TWO DIFFERENT THINGS AND THE DOCUMENT KEEPS THEM APART THROUGHOUT.**
⟦PRODUCT-OWNER DECISION⟧ **The grounding power is UNCHANGED and STILL REAL: a currently-valid registration
MAY ground an attribution claim for the same Client × Project, per `PO-P1` and `PO-R1·e`, and this decision
neither reduces nor qualifies that.** **The special weight is DEFINITIVELY ZERO: once such a claim exists,
the registration creates no precedence, no priority, no automatic attribution and no extra post-win
protection.** ⟦ARCHITECT ANALYSIS⟧ **Architecturally the separation is exact and checkable — the grounding
power lives at `P-G` steps 3 and 4, the special-weight prohibition lives at step 5 and after, `PO-S1` adds no
operand to step 3 and removes none, and any reading under which this decision reduces the grant has moved the
rule upstream of where the owner put it.** **"NO SPECIAL WEIGHT" is NOT "registration has no value," and
[§2.3](#23-what-is-explicitly-unchanged-the-grounding-power-itself) states that as the owner's own
instruction rather than as the architect's gloss.**

**EIGHT OF THE TEN POINTS ADD NO CONTENT; TWO REACH PAST `C-XVI`'S ORIGINAL WORDING.** ⟦ARCHITECT ANALYSIS⟧
**Points 1, 2, 3, 6, 7 and 9 are exact ratifications of `C-XVI` as AD-01P §5.1 already stated it — checked
word-for-word, not by impression. Points 4 and 8 are the owner restating their own `PO-P2` and `PO-P4`, each
now for a fourth time. Points 5 and 10 ratify `A-39`'s fourth corollary — *no special immunity once won* —
which `C-XVI`'s own bound (*"in every respect that bears on its RESOLUTION"*) did not reach, and they are
BROADER than `A-39` drafted it, closing the whole post-win direction rather than the one door AD-01Q could
name. Point 10's limit clause — *"beyond the resolved attribution itself"* — is load-bearing and preserves
every effect the resolved attribution already had.** **Point 9 was WORKED rather than assumed and found
CONFIRMATORY: `C-XVI`'s corollary 1 states the unopposed case explicitly, AD-01P §3.10 enumerates it, and
AD-01P §5.1 gives it as the reason `C-XVI` must exist — so AD-01P's wording was already unambiguous. What IS
a finding about point 9 is placement: the unopposed case is the only one the owner states twice, and it is
precisely the case AD-01P identified as where the grant and the eliminated Reading G are observationally
identical.**

**THE PRESERVED CHAIN SURFACES NO LINK THIS SERIES HAS NOT ALREADY NAMED, AND THAT WAS CHECKED LINK BY
LINK.** **All seven of `PO-S2`'s stages are already held — five of them by clauses the owner themselves
wrote — and `PO-S2` is a CONFIRMATION of the chain, not an extension.** ⟦ARCHITECT ANALYSIS⟧ **It is a
PIPELINE and not a levels list: reading its seven stages as seven levels would fill the enumeration gap
`A-38`(a) reserved to the owner, which is the error AD-01R refused at `PF-62` when `PO-R1·g` offered the same
temptation. `PO-P10` is NOT extended; `X-24` and `A-38`(a) stand.**

**THE EIGHT NAMED ITEMS, EACH RECONCILED.** **`P-G` UNAFFECTED — not re-derived, not narrowed, no step added,
no operand touched; only step 5's constraint is ratified.** **`AC-14` = Option A COMPOSES CLEANLY — AD-01R's
own seven-step sequence is reused with no new fact invented, `PO-R1` governs steps 4 and 6, `PO-S1` governs
step 7, and neither qualifies the other.** **CP-vs-CP clash UNCHANGED — a registration-backed claim carries
no thumb on the scale against a filed claim or against another registration-backed one, and `PO-S1` removes a
DEFAULT TILT while supplying NO RULE; `AC-15`/`AC-20` are unanswered for a sixth document and `C-IX` stands
untouched.** **`Q-OV` EQUALLY AVAILABLE and corroborated — no immunity FROM override and no weight IN the
ordinary process are the two sides of one coin, and `PO-S1·5`/`PO-S1·10` subsume `A-39`'s corollary rather
than merely sitting beside it.** **Registration expiry and the later genuine Inquiry ORTHOGONAL and
untouched.** **`NF-28` UNTOUCHED, all three conjuncts re-run, unamended for a fourth round of owner input,
with `K-9`/`K-10` still holding.** **`Q-AR` UNAMENDED for a second consecutive document and gaining NO link:
per case the OUTCOME plus the stated reasons AD-01M §11.2 already requires is sufficient; across cases
`C-XVI`'s own corollary 2 supplies the test and corollary 3 its precondition; and a per-case reconstruction
cannot prove a negative without becoming a source of truth for a property no record holds, which is `C-XIX`'s
own concern.**

**Three amendments are NAMED and NOT MADE — `A-48` (AD-01P's six locations carrying `C-XVI` as an unapproved
recommendation), `A-49` (AD-01Q's four, and gate 2 restated as four limbs), `A-50` (AD-01R's four, including
the §6.2 question now discharged) — and `A-39` is CONTENT-RATIFIED, NOT RENUMBERED and still NOT MADE, on the
precedent AD-01R set for `A-32`.** **All three are the same status change in three documents; `C-XVI`'s TEXT
does not change and must not be edited.** **No prior document is modified.** AD-01 … AD-01R are all
**unedited**, and [§4.3](#43-no-prior-document-was-silently-edited) states that as a **checked fact** against
the repository's own working tree rather than as an intention. **The register stands at `A-1 … A-50` across
TWELVE documents. AD-01N, AD-01P, AD-01Q and AD-01R remain at `VALIDATE` and are not approved; AD-01O remains
advisory and is not approved.**

**WHAT CLOSED, AND WHAT DID NOT.** **RATIFIED: `C-XVI`, with its scope extended into the post-win direction.
CONTENT-RATIFIED: `A-39`. NEW OPEN ITEMS: NONE — the `AC` series stands at `AC-32`, the `C` series at
`C-XIX`, the `X` series at `X-25`, and [§5.1](#51-no-new-question-is-minted-and-why) shows the one candidate
(`C-XVI`'s third corollary) being ruled out for a positive reason: §54, §39 and `L-25` each require visible
distinguishability independently of `C-XVI`, so nothing is left dangling.** **EXPLICITLY UNCHANGED AND
CHECKED INDIVIDUALLY: `AC-15`/`AC-20`, `AC-32` (the case for it is weaker in exactly one named way — the
`PO-P4` + `C-XVI` control is now fully owner-backed — and stronger in another — `C-XVI` at owner status now
forbids a systemic weighting as an owner decision; the question itself is untouched and it is NOT closed and
NOT narrowed), `AC-25` (its constraint is now owner-backed; both halves stay open), `AC-26`, `AC-27 … AC-31`,
`AC-6`, `AC-9`, `AC-21`, `AA-2`, `AC-1`, `N-4`, and every other open item in the register.** **`AC-4` and
`AC-14` stay CLOSED; `X-5` stays DISCHARGED; `PO-R1` stays LOCKED and `PO-R2`'s accepted cost is NOT
retired.**

**No SQL, schema, migration, master value, column, table, index, constraint or type is authorized by anything
above. No screen, workflow, approval step, queue, gate or adjudication procedure is designed** (AD-01A §8.5;
⟦SOURCE⟧ §11 reserves adjudication to builder-side authorized leadership). **No commission formula, rate,
slab, percentage, amount, milestone value, clawback quantum, passback rule or TDS treatment appears anywhere
— `M-9` owns all of it, and it still cannot start. No lock-in number is proposed. No boundary convention is
selected. NO PRECEDENCE RULE BETWEEN TWO CPs IS INVENTED — ratifying "no special weight" removes a potential
thumb on the scale and supplies no rule for ranking two ordinary competing claims, and `C-IX`'s prohibition
stands exactly as it stood. NO ANTI-ABUSE MECHANISM, THRESHOLD, CADENCE, CAP, RATIO, SCORE, FLAG, ALERT,
REVIEW STEP, MONITORING RULE OR DETECTION RULE IS INVENTED, PROPOSED, DESIGNED, RANKED OR IMPLIED ANYWHERE.
No re-registration cadence, minimum gap or cap is invented. No Dump-reason value is proposed.** **`Q1`, `Q4`,
`Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `K-22`, `K-26`, `K-52`, `T-5`, `L-6`,
`B-1` and `B-2` are NOT reopened — and `K-18` is CONFIRMED for a SIXTH consecutive document, with AD-01K
amended NOWHERE for a FOURTH and AD-01J for a THIRD.**

**The Project Owner's decision is the only authority in this document. Everything else awaits their
signature.**
