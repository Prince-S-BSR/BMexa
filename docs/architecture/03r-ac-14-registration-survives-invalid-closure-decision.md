STATUS: PROPOSED — NOT APPROVED

# AD-01R — `AC-14` Answered: a CP Project Registration Survives an Invalid-Side Inquiry Closure — reconciling the Project Owner's `AC-14` ruling into AD-01J … AD-01Q

**What this document is.** The Project Owner has answered **`AC-14`** — the item that stood at the **top of
the register through AD-01P and AD-01Q**, and that AD-01Q [§6.1](./03q-site-head-attribution-override-and-audit-reconstruction-decision.md)
carried as **gate 1**. The answer is **authoritative business input.** It is **not re-argued, weighed against
the alternative, ranked, hedged or softened anywhere below.**

**What this document does.** It records the decision verbatim, then determines exactly what it settles, what
it merely CONFIRMS that the architecture already held, what it does NOT settle, and what each prior document
would have to be amended to say before it could be approved alongside it. **Every amendment it finds
necessary is NAMED and NOT MADE.**

**What this document is NOT.** Not an implementation, not a schema, not a migration, not a screen, not a
workflow, not an approval to build. **Section 6's recommendation is advisory.** Nothing below is
self-authorizing. **No prior document is edited. AD-01N remains at `VALIDATE` and is not approved; AD-01O
remains advisory and is not approved; AD-01P remains at `VALIDATE` and is not approved; AD-01Q remains at
`VALIDATE` and is not approved.**

**This is a NARROW document by design.** It answers one register row. It is deliberately shorter than AD-01P
and AD-01Q, and its brevity is a property of its scope and not a relaxation of its discipline.

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L · AD-01M · AD-01N · AD-01O · AD-01P ·
**AD-01Q**.

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, the consolidated Product-Owner requirements, or `ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | Already decided by the owner and treated as fixed input. **Not re-argued.** Includes the decision reconciled here in its entirety, AD-01Q's `PO-Q1`/`PO-Q2`, AD-01P's `PO-P1 … PO-P12`, AD-01O's `PO-O1 … PO-O14` and AD-01N's `PO-N1 … PO-N9`. |
| ⟦SETTLED⟧ | Forced by the architecture, or decided earlier and not reopened here. |
| ⟦ARCHITECT ANALYSIS⟧ | Reasoning. Not a decision, not a requirement, not approved. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposal requiring the Project Owner's explicit written approval. **NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources — including this decision — are insufficient. Nothing is guessed (Spec **Rule 1**, **§88**, **§97**; consolidated **§1**, **§30**). |

### Numbering discipline, continued without collision

**High-water marks were VERIFIED against AD-01Q's own text before anything was minted, not taken on
trust.** AD-01Q closed at **`PF-54`**, **`X-25`**, **`A-44`** and **`AC-31`**.

**Findings continue AD-01P's and AD-01Q's shared series as `PF-55 … PF-66`.** ⟦ARCHITECT ANALYSIS⟧ **No
`RF-` series is minted, for the reason AD-01Q gave for declining `QF-`: continuing `PF-` costs nothing and
collides with nothing. `R` is additionally unavailable as a finding prefix because `R1`, `R2`, `R4`, `R6`
and `R12` are ⟦SOURCE⟧ `ENGINEERING_RULES.md` identifiers cited throughout this series.**

**NO new `C` constraint is minted.** ⟦ARCHITECT ANALYSIS⟧ **The `C` series stands at `C-XIX`. This decision
establishes no new mechanism, so it needs no new constraint on one, and a constraint minted to mark an
occasion rather than to control a failure mode is noise.**

**NO new contradiction is minted. The `X` series stands at `X-25` and `X-26` is NOT allocated.** ⟦ARCHITECT
ANALYSIS⟧ **This was CHECKED rather than assumed — [§3.4](#34-determination-4--no-existing-rule-is-contradicted)
runs the contradiction search in full against `C-XI`, `C-XV`, `C-XVI`, `B-1`, `B-2` and `L-6` and finds
none. What this decision does to the `X` series is DISCHARGE an existing member — `X-5` — and a discharge is
not a new allocation.**

**Amendments that are logically required but deliberately NOT made continue as `A-45`, `A-46` and `A-47`**
(`A-1 … A-44` remain named and not made). ⟦ARCHITECT ANALYSIS⟧ **THREE. AD-01P and AD-01Q each produced
nine; this document produces three, and the count is reported rather than fitted. A narrower decision
requires fewer amendments, and padding the register to match a predecessor's shape would be the opposite of
the discipline the register exists for.** **`A-32` is CONTENT-DETERMINED by this decision, NOT RENUMBERED
and still NOT MADE** — [§4.1](#41-the-three-amendments-named-and-not-made).

**ONE new open question is minted, as `AC-32`.** **`AC-14` is CLOSED. `AC-1` and `N-4` are NARROWED, NOT
RENUMBERED and NOT CLOSED. `AC-18` has its status CLARIFIED, NOT RESOLVED. Every other `AC`, `AA`, `AB`,
`Q`, `T`, `V`, `W`, `Y`, `Z` and `M` item carries forward unchanged and is accounted for individually at
[§3.5](#35-determination-5--which-open-items-this-decision-actually-reaches).**

> ⟦ARCHITECT ANALYSIS⟧ **Two collision warnings, each stated once and then relied upon.**
>
> 1. **`PO-R1` and `PO-R2` are this document's labels for the owner's two clauses, and the `PO-` prefix is
>    load-bearing and is never dropped.** They are **NOT** `R1`, `R2`, `R4`, `R6` or `R12` of
>    ⟦SOURCE⟧ `ENGINEERING_RULES.md`, which are cited in this document by their bare identifiers as every
>    prior document cites them. **`PO-R1` is a business decision; `R1` is tenant isolation. The two never
>    appear without their full labels.**
> 2. **`(L-6·ground)` and `(L-6·engagement)` are AD-01P's labels for two readings of AD-01L's `L-6`, and
>    they are used here exactly as AD-01P §3.15 and §5.3 defined them.** **They are NOT `L-6` itself, which
>    is NOT reopened, NOT narrowed and NOT ratified by anything below.**

### Scope discipline, stated once and honoured throughout

No SQL, schema, table, column, migration, master value or type appears anywhere. No screen, workflow,
approval step or gate is designed (AD-01A **§8.5**). **No commission formula, rate, slab, percentage,
amount, milestone value, clawback quantum, passback rule or TDS treatment appears anywhere — `M-9` owns all
of it. No lock-in number, minimum, maximum or default is proposed. No boundary convention is selected —
`AC-6` is NOT resolved here. No precedence rule between two CPs is invented — `AC-15`/`AC-20` are NOT
resolved here. No re-registration cadence, minimum gap or cap is invented. No Dump-reason value is proposed
— `N-4` owns every value. NO ANTI-ABUSE MECHANISM, THRESHOLD, CADENCE, CAP, RATIO, SCORE, FLAG, ALERT OR
DETECTION RULE IS INVENTED, PROPOSED, DESIGNED OR IMPLIED ANYWHERE** —
[§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved). **`Q1`, `Q4`, `Q6`, `Q7`,
`V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, AD-01J's `J-2`, AD-01K's `K-18`, `K-26` and `T-5`, and AD-01L's
`L-6` and `K-22` are NOT reopened — and `K-18` is CONFIRMED for a FIFTH consecutive document.** **`P-G` is
adopted as AD-01P states it, with AD-01Q's `A-38`(b) seventh step named beside it, and is NOT re-derived.**
**`Q-OV` and `Q-AR` are adopted as AD-01Q recommends them and are NOT re-derived and NOT narrowed.**

---

## 1. The decision

### 1.1 The source of this decision

> ⟦ARCHITECT ANALYSIS⟧ **`PF-55` — recorded first, because the provenance determines which register row the
> answer may be posted against, and this time it is the row it was addressed to.**
>
> **AD-01Q closed at `VALIDATE` with a NINE-item gating list at its §6.1. Its GATE 1 was `AC-14`, stated in
> the owner's own plain register rather than in architecture labels, and it read:**
>
> > *"A channel partner registers a client for a project. The inquiry that partner brought is later closed
> > as a wrong number, a fabricated entry, or not a real opportunity. That same person genuinely inquires
> > later, while the registration is still inside its window. Does that registration still protect the
> > partner, and may it still be used as the basis for their attribution claim on the new inquiry — YES, the
> > closure does not matter; or NO, a registration whose inquiry was closed as never having been a real
> > opportunity is spent and may not be used as an attribution basis?"*
>
> ⟦PRODUCT-OWNER DECISION⟧ **The owner has answered: YES — the closure does not matter.**
>
> **This answer lands on the row it was addressed to.** ⟦ARCHITECT ANALYSIS⟧ **That is worth stating,
> because AD-01Q's `PF-50` had to record the opposite of one of its two answers: `PO-Q2` arrived labelled
> for `AC-26` and answered AD-01P's gate 2 instead. There is no such displacement here. The question posed
> at AD-01Q §5.3 and the answer recorded at [§1.2](#12-the-decision-recorded-verbatim-before-any-analysis)
> are the same question and the same answer, and `AC-14` is the row.**
>
> **`AC-14` is therefore the FIRST item in this entire series to be CLOSED BY A DIRECT PRODUCT-OWNER RULING
> rather than by an architect's derivation from other owner input.** ⟦ARCHITECT ANALYSIS⟧ **`AC-4` closed at
> AD-01P, but it closed because the owner's `PO-P1 … PO-P4` were found to be AD-01O's Reading H clause by
> clause — an architect's identification, however exact. `Q0-c`, `X-5` and `AC-14` are the same tension
> stated three times across four documents, and none of the three could be closed by any amount of
> architecture. This one is closed by the owner saying which answer they want, which is the only thing that
> could ever have closed it.**

### 1.2 The decision, recorded verbatim before any analysis

> ⟦PRODUCT-OWNER DECISION⟧ **Nothing in this section is the architect's, and nothing in it is weighed,
> ranked, softened, qualified or treated as an option. Clauses are numbered `PO-R1·a … PO-R1·g` and `PO-R2`
> so the rest of the document can cite them precisely. The numbering is the architect's; the content is the
> owner's.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` — verbatim:**
>
> > *"A currently-valid CP Project Registration remains valid and usable for its full registration window
> > even if an earlier Inquiry associated with that registration was subsequently closed on the INVALID
> > side.*
> >
> > *Therefore: wrong number / fake / fabricated / not-a-real-opportunity closure does NOT consume the
> > registration. It does NOT invalidate the registration. The registration date remains immutable. The
> > registration's snapshotted lock-in window remains unchanged. No reset occurs. No new registration is
> > created merely because the earlier Inquiry was invalidated. If the same registered Client later
> > generates a genuine Inquiry for the same Project while the registration is still valid, the existing
> > registration MAY ground the CP's attribution claim. This remains subject to the normal attribution /
> > clash-resolution process. Registration is NOT automatic attribution. Registration is NOT an automatic
> > clash winner. Registration is NOT automatic commission eligibility. The later Inquiry remains a separate
> > commercial Inquiry. The invalid-side disposition of the earlier Inquiry does not itself alter the
> > registration's validity.*
> >
> > *Registration validity ≠ Inquiry validity ≠ Attribution ≠ Clash resolution ≠ Commission eligibility. Do
> > not collapse these into one lifecycle."*

| # | Clause |
|---|---|
| **`PO-R1·a`** | **The survival rule.** *"A currently-valid CP Project Registration remains valid and usable for its full registration window even if an earlier Inquiry associated with that registration was subsequently closed on the INVALID side."* |
| **`PO-R1·b`** | **Non-consumption and non-invalidation.** *"wrong number / fake / fabricated / not-a-real-opportunity closure does NOT consume the registration. It does NOT invalidate the registration."* |
| **`PO-R1·c`** | **Immutability of date and window.** *"The registration date remains immutable. The registration's snapshotted lock-in window remains unchanged."* |
| **`PO-R1·d`** | **No reset, and no new registration.** *"No reset occurs. No new registration is created merely because the earlier Inquiry was invalidated."* |
| **`PO-R1·e`** | **The grant on a later genuine Inquiry.** *"If the same registered Client later generates a genuine Inquiry for the same Project while the registration is still valid, the existing registration MAY ground the CP's attribution claim. This remains subject to the normal attribution / clash-resolution process."* |
| **`PO-R1·f`** | **The non-automaticities and the separateness of the later Inquiry.** *"Registration is NOT automatic attribution. Registration is NOT an automatic clash winner. Registration is NOT automatic commission eligibility. The later Inquiry remains a separate commercial Inquiry. The invalid-side disposition of the earlier Inquiry does not itself alter the registration's validity."* |
| **`PO-R1·g`** | **The non-collapse instruction.** *"Registration validity ≠ Inquiry validity ≠ Attribution ≠ Clash resolution ≠ Commission eligibility. Do not collapse these into one lifecycle."* |

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-R2` — the owner's own acknowledgement of the tradeoff, recorded here
> because it is the owner's and not the architect's, and because the instruction attached to it governs
> [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved):**
>
> **The owner has explicitly named an anti-abuse tradeoff — that Option A means a registration stays
> protective for its whole window even after an earlier invalid-side closure, which could in principle let a
> CP, or someone feeding a CP fabricated leads, exploit the gap — and has explicitly instructed that this
> tradeoff be RECORDED HONESTLY and NOT used as a reason to weaken, reinterpret or soften the decision. Any
> anti-abuse control that may genuinely be warranted is to be recorded ONLY as a separate consideration
> requiring its own future Product-Owner decision, and NEVER invented here.**

### 1.3 The locked business rule, stated in its own line

> ⟦PRODUCT-OWNER DECISION — THE LOCKED RULE⟧
>
> **`AC-14` = OPTION A IS NOW A LOCKED PRODUCT OWNER BUSINESS RULE.**
>
> **It is not conditional. It is not provisional. It is not a preference between two readings that remain
> live. It is not subject to ratification by this document or by any later one. It is not re-opened by the
> tradeoff at `PO-R2`, by `L-13`'s hazard finding, by `AC-18`, or by anything in
> [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved).**
>
> **The two readings AD-01P §5.3 and AD-01Q §3.7 recorded at equal strength are no longer at equal
> strength.** ⟦ARCHITECT ANALYSIS⟧ **Recording two readings at equal strength was correct while the question
> was open and is wrong now that it is answered. `(L-6·ground)` is SELECTED. `(L-6·engagement)` is
> FORECLOSED — not merely unchosen** — [§3.4](#34-determination-4--no-existing-rule-is-contradicted).

### 1.4 What this decision does NOT restate, and is therefore unchanged

> ⟦SETTLED⟧ **`PO-N1 … PO-N9`, `PO-O1 … PO-O14`, `PO-P1 … PO-P12`, `PO-Q1·a … PO-Q1·d` and
> `PO-Q2·a … PO-Q2·c` are untouched except where `PO-R1` restates one of them, and every one of them remains
> in force.** In particular:

| Prior clause | Status after `PO-R1` |
|---|---|
| **`PO-N3`/`PO-N4`** — the CP cannot reset, restart, refresh or extend the window; subsequent events must not reset the registration date | **UNCHANGED, and `PO-R1·c`/`PO-R1·d` are an INSTANCE of them rather than an extension.** An invalid-side closure joins the set of subsequent events that move nothing. |
| **`PO-N5 … PO-N7`** — the eligibility test and its expiry consequence | **UNCHANGED. `PO-R1` touches no conjunct of `NF-28`** — [§3.1](#31-determination-1--the-fourteen-named-rule-areas-verified-one-at-a-time) area 13. |
| **`PO-N8`/`PO-N9`** — the eligibility-level Site Head exception and its nine requirements | **UNCHANGED, NOT REPEALED, NOT ABSORBED and NOT ENGAGED.** `PO-R1` creates no exception and consumes none. |
| **`PO-O6`/`PO-P6`** — a revisit does not reset registration validity | **UNCHANGED and NOT ENGAGED.** ⟦ARCHITECT ANALYSIS⟧ **An invalid-side Inquiry closure is not a revisit. These clauses are the owner's nearest STATED instance of non-reset, and they are cited below as precedent for the SHAPE of `PO-R1·d` rather than as its authority** — [§2](#2-what-changed-architecturally--newly-established-or-merely-confirmed) row 4. |
| **`PO-P1`** — a currently-valid registration MAY be the basis for CP attribution on a later inquiry, same client/project, subject to normal attribution/clash rules | **RESTATED IN SUBSTANCE by `PO-R1·e` and therefore CONFIRMED TWICE. `PO-R1·e` adds the words *"while the registration is still valid"* and *"the existing registration"*, and nothing else.** |
| **`PO-P2`/`PO-P3`/`PO-P4`** — not automatic attribution, not automatic eligibility, not automatic clash winner | **RESTATED VERBATIM IN SUBSTANCE by `PO-R1·f` and therefore CONFIRMED TWICE — and `PO-P2`/`PO-P3` for a THIRD time counting `PO-O13`/`PO-O14`.** |
| **`PO-P5`** — expired registrations cannot establish new attribution claims | **UNCHANGED and UNTOUCHED.** `PO-R1·a` is bounded by *"currently-valid"* and *"for its full registration window"*; it says nothing about a window that has ended. |
| **`PO-P7`** / **`C-XIII`** — only an explicit registration act creates a registration | **UNCHANGED, and `PO-R1·d`'s second limb is an INSTANCE of it.** **No amendment to `C-XIII` is required** — [§4.2](#42-documents-requiring-no-change--each-checked). |
| **`PO-P10`** — the seven levels the architecture must never conflate | **UNCHANGED as a PROHIBITION, and NOT extended by `PO-R1·g`** — `PF-62`. **It remains INCOMPLETE in its ENUMERATION exactly as AD-01Q's `X-24`/`A-38`(a) left it, and this document does not fill that gap either.** |
| **`PO-Q1`**/**`PO-Q2`** — the attribution/clash override and the audit-reconstruction requirement | **UNCHANGED and UNTOUCHED.** `Q-OV` remains equally available and `Q-AR` remains unamended — [§3.1](#31-determination-1--the-fourteen-named-rule-areas-verified-one-at-a-time) areas 12 and 14. |

---

## 2. What changed architecturally — newly established, or merely confirmed?

> ⟦ARCHITECT ANALYSIS⟧ **`PF-56` — the owner's seven consequences are walked ONE AT A TIME, and each is
> classified as NEWLY ESTABLISHED by this decision or as ALREADY TRUE under existing architecture and merely
> CONFIRMED. The classification is done by checking each against the prior documents rather than by
> impression, because a document that reported confirmations as novelties would inflate what the owner has
> just bought, and a document that reported the novelty as a confirmation would hide the only thing that
> actually changed.**

| # | The owner's consequence | Verdict | Authority, and what the check found |
|---|---|---|---|
| **1** | **An invalid-side closure does NOT CONSUME the registration** (`PO-R1·b`) | **ALREADY TRUE — CONFIRMED.** And **NEWLY ESTABLISHED as INTENDED** | ⟦SETTLED⟧ AD-01N **§C.4**: the registration *"has no states. It is a dated fact plus a snapshotted number."* ⟦ARCHITECT RECOMMENDATION⟧ **`C-XV`(3)**, verbatim: *"No `grounded`, `consumed`, `used`, `spent` or `expired` marker of any kind is proposed, designed or implied."* ⟦ARCHITECT ANALYSIS⟧ **There is no consumption operation in the architecture for a closure to invoke. What was genuinely open was not whether the model COULD consume the registration — it cannot — but whether the absence of consumption was the intended business behaviour or an unexamined consequence. `X-5` and `AC-14` existed precisely because nobody had said.** |
| **2** | **An invalid-side closure does NOT INVALIDATE the registration** (`PO-R1·b`) | **ALREADY TRUE — CONFIRMED.** And **NEWLY ESTABLISHED as INTENDED** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-21`**: a Dump is **not an input in any direction.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-N4`** names nothing that moves a registration. **`PF-9`/`OF-5`: validity is `live(registration, D)`, a pure function of `R`, `N` and a date — a closure classification is not an argument to it and cannot change its value.** |
| **3** | **The registration date remains IMMUTABLE** (`PO-R1·c`) | **ALREADY TRUE — CONFIRMED. NOTHING NEW.** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-N4`** in the owner's own words; AD-01N **§D.1** (fixed at creation, immutable, server-authoritative); ⟦PRODUCT-OWNER DECISION⟧ **`PO-O10`**/**`PO-P8`** (*"remains immutable historical data"*). ⟦ARCHITECT ANALYSIS⟧ **This clause is the owner restating their own rule for a fourth time. It adds no information and it is recorded as adding none.** |
| **4** | **The snapshotted lock-in window remains UNCHANGED** (`PO-R1·c`) | **ALREADY TRUE — CONFIRMED. NOTHING NEW.** | ⟦ARCHITECT RECOMMENDATION⟧ **`NF-15`** — snapshot at registration, forward-only — corroborated by the owner's own word *snapshot* at **`OF-15`**; **`PF-9`(3)**: the window is the one snapshotted on the registration, never the Project's current value. |
| **5** | **NO RESET occurs** (`PO-R1·d`) | **ALREADY TRUE — CONFIRMED.** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-N3`**/**`PO-N4`** are the authority. ⟦ARCHITECT ANALYSIS⟧ **The nearest owner-STATED instance is `PO-O6`/`PO-P6` — *revisits do not reset registration validity* — which AD-01P §3.6 records as CONFIRMED TWICE by the owner. But an invalid-side closure is NOT a revisit, so `PO-O6`/`PO-P6` supplies the SHAPE and `PO-N4`'s general prohibition supplies the AUTHORITY. `PO-R1·d` adds a second named instance to `PO-N4`'s list and does not create a rule.** **AD-01O `OF-6`'s derived-Activity finding is NOT engaged, NOT re-tested and NOT disturbed.** |
| **6** | **NO NEW REGISTRATION is created merely because the earlier Inquiry was invalidated** (`PO-R1·d`) | **ALREADY TRUE — CONFIRMED. NOTHING NEW.** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P7`**: only explicit helpdesk actions create registrations. ⟦ARCHITECT RECOMMENDATION⟧ **`C-XIII`**: only an explicit registration act creates a registration; expiry creates admissibility, never the registration. **An invalid-side closure is plainly not a registration act, so `C-XIII` covers it without extension and NO amendment to `C-XIII` is required** — unlike AD-01Q's `A-42`, where an override shares four of a registration's five identifying facts and the row had to be added. |
| **7** | **The existing registration MAY ground the CP's attribution claim on a later genuine Inquiry, subject to normal attribution / clash resolution, and remains NOT automatic attribution / clash-win / eligibility** (`PO-R1·e`, `PO-R1·f`) | **The GRANT: ALREADY TRUE — CONFIRMED** (`PO-P1`, `PO-P2`, `PO-P3`, `PO-P4`). **The words *"even if an earlier Inquiry … was closed on the INVALID side": NEWLY ESTABLISHED.** | ⟦PRODUCT-OWNER DECISION⟧ **This is the row that carries the decision's entire new content** — `PF-57`. |

> ⟦ARCHITECT ANALYSIS⟧ **`PF-57` — the net, stated as arithmetic rather than as a claim, because six of the
> seven consequences were already true and a reader who is not told so will over-estimate what has moved.**
>
> **SIX of the seven consequences are CONFIRMATIONS. Two of those six — non-consumption and
> non-invalidation — are confirmations with a status change attached: the behaviour was already forced by
> the model, and what is new is that the owner has ruled it INTENDED rather than incidental.**
>
> **ONE thing is genuinely NEW INFORMATION, and it is exactly one thing:**
>
> > ⟦PRODUCT-OWNER DECISION⟧ **The closure classification of a prior Inquiry on the same work record is NOT
> > an operand of the grounding test, and does not become one.**
>
> **That is the selection of the `(L-6·ground)` reading that AD-01P §3.15 and §5.3 characterised in full and
> AD-01Q §3.7 restated.** ⟦ARCHITECT ANALYSIS⟧ **The owner has not supplied a new rule the architecture had
> not modelled; they have SELECTED between two fully-characterised readings of an existing one. That is a
> materially different kind of answer from `PO-Q1`, which named a decision point the series had never
> modelled at all, and it is why this document adds no mechanism, no entity, no constraint and no
> contradiction.**
>
> **Consequently:** **`P-G` step 3's operand set is `(CP, client, Project, G)` and NOTHING ELSE — now by
> ⟦PRODUCT-OWNER DECISION⟧ and no longer only by ⟦ARCHITECT RECOMMENDATION⟧.** **`P-G` is NOT re-derived,
> NOT narrowed, NOT re-operanded and acquires NO step here.** **AD-01Q's `A-38`(b) seventh step stands
> exactly as AD-01Q named it and is neither made nor disturbed.**

---

## 3. The determinations

### 3.1 Determination 1 — the fourteen named rule areas, verified one at a time

> ⟦ARCHITECT ANALYSIS⟧ **`PF-58` — each of the fourteen areas is checked INDIVIDUALLY against `PO-R1`, and
> *"unaffected"* means CHECKED AND UNAFFECTED, never skipped. Four areas are named in the check list
> precisely because they are the ones a reader would expect this decision to have moved and it does not —
> areas 4, 11, 12 and 13 — and each of those is worked rather than asserted.**

**Area 1 — CP Project Registration (the entity).** **UNCHANGED.** ⟦SETTLED⟧ The registration is AD-01N
§C.4's recommended record, scoped `(CP relationship × Person / work record × Project)`, holding a date and a
snapshotted number, carrying no lifecycle and no disposition. **`PO-R1` adds no field, no state, no marker,
no flag and no relationship to it.** ⟦ARCHITECT ANALYSIS⟧ **This is the strongest available demonstration
that the answer is `(L-6·ground)`: under `(L-6·engagement)` the registration would have had to become
readable against a history of closures, and the entity would have acquired a derived property it does not
have. It acquires nothing.** **AD-01N remains at `VALIDATE`; the entity remains RECOMMENDED and NOT
APPROVED.**

**Area 2 — the immutable registration date.** **UNCHANGED and CONFIRMED** — §2 row 3. **`PO-N4`, AD-01N
§D.1, `PO-O10`/`PO-P8`.** **No re-dating, re-basing, tolling, suspension or re-anchoring act exists, is
proposed or is implied.**

**Area 3 — the snapshotted registration policy.** **UNCHANGED and CONFIRMED** — §2 row 4. **`NF-15`/`OF-15`
snapshot-at-registration, forward-only.** **`AC-7`'s second half — whether a deliberate re-basing act should
exist — is NOT reached, NOT narrowed and NOT resolved.**

**Area 4 — the Day-0 / Day-30-included / Day-31-expired boundary convention (`AC-6`).** **NOT TOUCHED, and
CHECKED FOR A FOURTH USE: there is none.** ⟦ARCHITECT ANALYSIS⟧ **`PO-R1` evaluates no window, compares no
dates, consults no `(R, N)` pair and introduces no new date at which validity must be tested. `AC-6` remains
TRIPLY money-bearing exactly as AD-01P `PF-10` left it — eligibility, re-registration admissibility, claim
admissibility — and acquires no fourth consumer.** **`AC-6` IS NOT RESOLVED HERE. Convention α is NOT
selected, convention β is NOT selected, and whether `N = 0` is a legal configuration is NOT answered.**

**Area 5 — registration expiry.** **UNCHANGED.** ⟦PRODUCT-OWNER DECISION⟧ `PO-P5` stands: an expired
registration cannot establish new attribution claims. ⟦ARCHITECT ANALYSIS⟧ **`PO-R1·a`'s bound is *"for its
full registration window"* — it extends nothing past that window, and a reader who took *"remains valid"* as
open-ended would be reading past the clause's own words.** **`PF-13`(3) stands: expiry is still not an
event, and nothing is written to a registration when its window lapses.** **`PF-12`'s survival rule — a
claim validly minted under a then-live registration is not invalidated when that registration later expires
— is NOT engaged, NOT amended and NOT ratified here, and it remains an unratified limb of AD-01P gate 2.**

**Area 6 — revisit.** **UNCHANGED and NOT ENGAGED.** ⟦SETTLED⟧ **`PO-O6`/`PO-P6` (revisit does not reset
validity) and `OF-6` (a revisit is a derived characterisation of an ordinary Activity, never a persisted
entity, flag, counter or lifecycle) both stand untouched.** ⟦ARCHITECT ANALYSIS⟧ **An invalid-side closure
is not a revisit, so the revisit rules are not the authority for `PO-R1·d` — they are its nearest stated
precedent. Treating `PO-R1·d` as *"revisit non-reset again"* would be a category error, and it is recorded
here so that a later reader does not make one.** **`C-XIV` is NOT re-tested, because `PO-R1` adds no operand
that is a fact about a Helpdesk interaction or a work history** — which is precisely what `(L-6·engagement)`
would have required and what AD-01P §5.3 named as its consequence.

**Area 7 — Inquiry creation.** **UNCHANGED.** ⟦ARCHITECT RECOMMENDATION⟧ **`J-2`'s Origination Rule as
bounded by `K-50` is NOT amended, NOT narrowed and NOT given a new input** — the same result AD-01P `PF-6`
reported and AD-01Q confirmed. **Whether the later expression of interest opens a new Inquiry or is an
activity on a live one is decided by `J-2` alone, and `PO-R1` supplies no input to it.** `AA-1` (are two
live Inquiries on one client × Project ordinary) is NOT resolved.

**Area 8 — invalid-side Inquiry closure.** **UNCHANGED AS A CLASSIFICATION; its CONSEQUENCE for the
registration is now RULED.** ⟦SETTLED⟧ **Dimension A and its invalid side are AD-01A §8.3's approved
dimension and AD-01J `J-8`'s reading of it, and neither is reopened, narrowed or re-valued. `N-4` still owns
every value on the dimension and NO VALUE IS PROPOSED, NAMED, RANKED OR IMPLIED HERE.** ⟦PRODUCT-OWNER
DECISION⟧ **What `PO-R1·b`/`PO-R1·f` settle is that the closure's landing on that side has NO EFFECT on a
separate record — the registration.** **`H-4`'s terminal-once property is untouched: the Inquiry stays
closed, stays classified as it was classified, and is never re-disposed.**

**Area 9 — the later genuine Inquiry.** **UNCHANGED AS AN OBJECT; its CLAIM-ADMISSIBILITY is now settled
for this configuration.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1·f`: *"The later Inquiry remains a separate
commercial Inquiry."*** ⟦SETTLED⟧ **That is `K-18` in the owner's own words for this configuration — the
claim attaches to that Inquiry and to nothing else — and `K-18` is CONFIRMED for a FIFTH consecutive
document.** **AD-01K is amended NOWHERE, for a THIRD consecutive document.**

**Area 10 — attribution grounding (`P-G`).** **NOT RE-DERIVED. ONE OPERAND QUESTION SETTLED; NOTHING ELSE
TOUCHED.**

| `P-G` step | Effect of `PO-R1` |
|---|---|
| **1** — `J-2` originates | **NONE.** Area 7 |
| **2** — the arrival reaches the server-side clash gate | **NONE.** Which date this is remains `AC-24`, OPEN |
| **3** — the grounding test runs at `G` over `(CP, client, Project, G)` | **SETTLED, NOT CHANGED.** ⟦PRODUCT-OWNER DECISION⟧ **The operand set is confirmed as exactly that, and the prior Inquiry's closure classification is ruled OUT of it permanently.** **`PF-57`** |
| **4** — a passing test makes that specific registration RECORD an admissible ground | **NONE.** Whether the mint is automatic or a discretionary authorized act remains `AC-25`, OPEN |
| **5** — the minted claim is adjudicated under §11 as an ORDINARY claim capable of LOSING | **NONE, and EXPRESSLY REAFFIRMED** by `PO-R1·e`'s *"subject to the normal attribution / clash-resolution process"* and `PO-R1·f`'s three non-automaticities |
| **6** — eligibility is tested as `NF-28`'s unchanged three-conjunct join | **NONE.** Area 13 |
| **7** — AD-01Q's `A-38`(b) override step | **NONE.** Area 12 |

> ⟦ARCHITECT ANALYSIS⟧ **`P-G` itself is STILL AN ARCHITECT DERIVATION and STILL UNRATIFIED — AD-01P gate 2,
> which `PO-Q2` discharged one limb of and which this decision discharges none of. What `PO-R1` ratifies is
> a PROPERTY of `P-G` step 3's operand set, not `P-G`. A rule whose operand set is owner-confirmed is not
> thereby an owner-approved rule, and [§6](#6-recommendation) does not report it as one.**

**Area 11 — CP-vs-CP clash resolution (`AC-15`/`AC-20`).** **UNCHANGED, NOT ANSWERED, NOT NARROWED —
PRIORITY RAISED A FIFTH CONSECUTIVE TIME.** ⟦ARCHITECT ANALYSIS⟧ **`PF-59` — this was checked against the
clash MECHANISM and not merely asserted, because `PO-R1` is the kind of answer that gets read as having
settled more than it did.**

> **`PO-R1` settles WHAT MAY ENTER the clash process. It settles NOTHING about HOW the clash resolves.**
>
> | Question | Does `PO-R1` reach it? |
> |---|---|
> | May a claim grounded on a registration that survived an earlier invalid-side closure be MINTED and enter the claim set? | **YES — this is `PO-R1·e`** |
> | Once in the claim set, does that claim resolve differently from any other? | **NO. `PO-R1·e`'s *"subject to the normal attribution / clash-resolution process"* and `PO-R1·f`'s *"NOT an automatic clash winner"* say so in the owner's own words** |
> | When two CPs each hold a live registration for the same client and Project, who wins? | **NOT REACHED. That is `AC-15`, and it is OPEN. NO PRECEDENCE IS INVENTED HERE** |
> | May the second such registration exist at all? | **NOT REACHED. That is `AC-20`, and it is OPEN** |
>
> **The clash mechanism is untouched.** `K-12`/`K-52` (clash is scoped to one Inquiry's claim set), `K-17`
> (append-only, never overwritten), ⟦SOURCE⟧ **§11** (builder-side authorized leadership resolves
> attribution) and `C-IX` (a binding systemic precedence rule is a §88 authorization change to §11) all
> stand exactly as they stood. **`Q0-d` stays OFF the critical path.**

**Area 12 — the Site Head attribution override (`Q-OV`, AD-01Q).** **EQUALLY AVAILABLE, UNCHANGED.**
⟦ARCHITECT ANALYSIS⟧ **`PF-60` — checked, because an override whose availability turned on what grounded the
winning claim is exactly the failure mode AD-01Q's `A-39` was written against.**

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1·a` grants the override against *"the normal CP attribution/clash
> decision"* WITHOUT qualification as to what grounded any claim in it.** ⟦ARCHITECT RECOMMENDATION⟧
> **`C-XVI`'s fourth corollary, as `A-39` would add it, is the point exactly: *a registration-grounded claim
> gets NO SPECIAL IMMUNITY from being overridden either — there is no heightened bar for overriding a
> registration-grounded win and no lowered bar for overriding a filed one.*** **`PO-R1` makes a further
> class of registration-grounded claim reachable; it confers on none of them any resistance to `Q-OV`, and
> an implementation that treated *"the registration survived an invalid closure, so the registration proves
> it"* as a reason to raise the override bar would breach `C-XVI` by the very route `A-39` names.**
>
> **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX` and `A-39` all remain UNRATIFIED. Nothing here ratifies any of
> them, and `AC-27 … AC-31` are untouched** — [§3.5](#35-determination-5--which-open-items-this-decision-actually-reaches).

**Area 13 — commission eligibility (`NF-28`).** **UNTOUCHED, in the owner's own words.** ⟦PRODUCT-OWNER
DECISION⟧ **`PO-R1·f`: *"Registration is NOT automatic commission eligibility."*** Each conjunct re-run:

| | Conjunct | Effect of `PO-R1` |
|---|---|---|
| **(i)** | **WHO** — the resolved attribution claim on the converting Inquiry, joined to any `Q-OV` override of it | **NO EFFECT ON THE TEST.** `PO-R1` may change whether a given CP's claim EXISTS to be resolved; the question *is there a resolved attribution naming this CP on this Inquiry?* is word-for-word the same |
| **(ii)** | **WHETHER AND WHEN** — the surviving transaction identity and its §32 milestone | **NO EFFECT WHATSOEVER.** `PO-R1` reads no booking fact and touches no transaction fact |
| **(iii)** | **STILL WITHIN PROTECTION** — the registration containing the booking date, or an `NF-24` exception | **NO EFFECT.** The window is unchanged (`PO-R1·c`), so the same dates fall inside it as before. **`AC-22` is neither answered nor worsened** |

> ⟦SETTLED⟧ **`NF-28` is UNAMENDED by this document. AD-01N's conjunct structure survives a THIRD round of
> owner input with no TEST changed.** ⟦SETTLED⟧ **`K-9` and `K-10` continue to hold: a CP may hold a validly
> minted, validly won claim grounded on a registration that survived an invalid-side closure and still be
> paid nothing, because conjuncts (ii) and (iii) are tested at the Booking and `PO-R1` reaches neither.
> `PF-13`(1) is the worked case and it is unchanged.**

**Area 14 — audit reconstruction (`Q-AR`, AD-01Q).** **NO NEW LINK IS REQUIRED, and the reason is a positive
architectural reason rather than an omission.** ⟦ARCHITECT ANALYSIS⟧ **`PF-61` — this is the sharpest check
in the section, because the intuitive answer is the wrong one.**

> **The intuitive answer: *"the reconstruction should show that the registration grounding this claim
> survived an earlier invalid closure."*** **It is wrong, and ⟦ARCHITECT RECOMMENDATION⟧ `C-XIX` is why.**
>
> **`C-XIX` requires each link of the reconstruction to be reproducible FROM ITS OWN RETAINED INPUTS, and
> forbids the reconstruction becoming a source of truth for anything.** ⟦PRODUCT-OWNER DECISION⟧ **Under
> `PO-R1` the earlier Inquiry's closure is NOT AN INPUT to the grounding determination at all.** **A link
> representing a fact the decision did not consult would assert that the decision took it into account,
> which is false, and would make `Q-AR` a source of truth for a relationship no record holds — `PF-6`
> candidate (e)'s defect wearing an audit obligation as its justification, which is `C-XIX`'s own stated
> concern.**
>
> **`Q-AR`'s thirteen links are therefore UNCHANGED, and no fourteenth is admitted.** **`PF-34(2)`'s
> discipline is applied in the direction it cuts: a term the owner's *"for example"* chain omits is not
> excluded from the requirement, but that does not licence the architect adding a term the owner did not
> name and the decision did not consult.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The consequence for [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved)
> is material and is stated there rather than hidden here: the abuse pattern `PO-R2` names IS visible in the
> record — in the work record's own Inquiry history and in `NF-27`'s registration events — but it is NOT
> visible in `Q-AR`, because `Q-AR` reconstructs a DECISION and the closure was not part of one.**
>
> **`X-25` and `A-37` — `NF-27`'s two missing audit events — are NOT discharged, NOT narrowed and NOT
> affected. `AC-31` (who the auditor is) is untouched.**

### 3.2 Determination 2 — the five-term separation the owner demands

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1·g`: *"Registration validity ≠ Inquiry validity ≠ Attribution ≠ Clash
> resolution ≠ Commission eligibility. Do not collapse these into one lifecycle."***

> ⟦ARCHITECT ANALYSIS⟧ **`PF-62` — this is stated as an EXPLICIT STANDING PRINCIPLE, and it is tied to the
> constraints that already enforce parts of it rather than presented as newly invented. It is the owner
> restating and EXTENDING their own `PO-O14`, not introducing a principle the architecture lacked.**

| Term | What already enforces the separation | Status |
|---|---|---|
| **Registration validity** vs **Attribution** | ⟦PRODUCT-OWNER DECISION⟧ **`C-XI`** (upgraded to owner status by `A-20`): the registration is a **TEMPORAL PROTECTION** fact and must never become an **ATTRIBUTION** fact, never readable, joinable or reportable as an answer to *"who produced this Inquiry?"* · **`PO-P2`** · **`C-XVI`** | **CONFIRMED. Already the owner's own rule** |
| **Attribution** vs **Commission eligibility** | ⟦SETTLED⟧ **`K-9`** (winning attribution and being paid are different outcomes) · **`K-10`** (a claimant can win a contest and generate no §32 entitlement) · **`NF-28`** (eligibility is a three-conjunct JOIN, never a single anchor) · **`PO-P3`** · **`C-XV`** (the minting test and the eligibility test are two distinct evaluations; neither may be substituted for, cached as, or inferred from the other) | **CONFIRMED. Enforced by four independent rules** |
| **Registration validity** vs **Commission eligibility** | **`C-XV`(3)**: neither result may be stored on the registration · **`NF-28`** conjunct (iii) reads the registration but does not become it | **CONFIRMED** |
| **Attribution** vs **Clash resolution** | ⟦ARCHITECT ANALYSIS⟧ **The clash is the PROCESS; the attribution is its OUTCOME.** AD-01Q §2.1's table already separates *"the question it answers"* from *"its answer-bearer."* **`PO-Q1·a`'s own phrase — *"the normal CP attribution/clash decision"* — is the owner joining them as ONE DECISION, and it is decisive evidence that `PO-R1·g` lists them as two things not to be collapsed into one LIFECYCLE, not as two determinations** | **CONFIRMED. NO new level, NO new determination, NO new question** |
| **Inquiry validity** vs everything else | ⟦SETTLED⟧ **`B-1`**: nothing recorded on a terminal Inquiry affects any other Inquiry · **`H-4`**: terminal-once, never re-disposed · **`K-18`**: the claim attaches to the Inquiry and to nothing else | **CONFIRMED — and `PO-R1·b`/`PO-R1·f` are its newest instance: an Inquiry's validity classification does not reach the registration either** |

> ⟦ARCHITECT ANALYSIS⟧ **What is genuinely NEW in `PO-R1·g`, stated precisely so it is neither inflated nor
> lost.**
>
> ⟦PRODUCT-OWNER DECISION⟧ **`PO-O14` reads: *Registration ≠ Attribution ≠ Eligibility ≠ Payout* — FOUR
> terms. `PO-R1·g` reads FIVE, adding *Inquiry validity* and *Clash resolution* and omitting *Payout*.**
>
> 1. **The two ADDED terms are the owner extending their own list, which is the only party that may.**
>    **They require NO amendment to AD-01O, because the owner has made the extension themselves.**
> 2. **The OMITTED term is NOT a repeal.** **`PF-34(2)` applies: `PO-O14`'s *Payout* separation stands, and
>    is independently held by consolidated **§22**'s accrual/payout separation and by `PO-P10` levels 6 and
>    7.** **The architect does not read a deletion into an omission.**
> 3. **`PO-P10`'s SEVEN LEVELS are NOT extended by `PO-R1·g` and no eighth level is drafted, proposed or
>    implied.** ⟦ARCHITECT ANALYSIS⟧ **AD-01Q's `A-38`(a) recorded that ONLY THE OWNER MAY EXTEND THEIR OWN
>    LIST and named the gap without filling it. Reading `PO-R1·g`'s five non-collapse terms as five levels
>    would be the architect filling that gap by inference, from a clause whose stated purpose is a
>    prohibition on collapsing and not an enumeration of levels. `X-24` and `A-38`(a) stand exactly as
>    AD-01Q left them.**

### 3.3 Determination 3 — the anti-abuse tradeoff, recorded and NOT solved

> ⟦PRODUCT-OWNER DECISION⟧ **`PO-R2` governs this entire section. The tradeoff is recorded honestly. The
> decision is NOT weakened, NOT reinterpreted, NOT hedged and NOT made conditional on anything below. NO
> anti-abuse mechanism, threshold, cadence, cap, ratio, score, flag, alert or detection rule is invented,
> proposed, designed or implied anywhere in it.**

**The abuse shape, stated concretely and without softening.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-63` — stated as a worked sequence rather than as a category, because a hazard
> described abstractly is one the owner cannot weigh.**
>
> | Step | What happens |
> |---|---|
> | **1** | A CP registers a person for a Project. **The registration is an explicit, permissioned, separately audited act carrying its own immutable date** (`C-XIII`, `NF-26`(9), `NF-27` event 1) |
> | **2** | The inquiry that CP brought is junk — a wrong number, a fabricated entry, a person who never expressed interest. Whether the CP created it, tolerated it, or was fed it by someone else is **not distinguished by anything in the architecture** |
> | **3** | The business works it and closes it on **Dimension A's invalid side.** The Inquiry is terminal and classified as never having been a real opportunity |
> | **4** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1`: the registration is untouched. It is not consumed, not invalidated, not reset, and it keeps its full original window** |
> | **5** | That same person genuinely inquires later, inside the window — through the builder's own marketing, a walk-in, a different CP, or any other route |
> | **6** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1·e`: the CP's registration MAY ground an attribution claim on that genuine Inquiry** |
> | **7** | The claim is adjudicated under §11 as an ordinary claim. **It may lose. It may also win** |
>
> **The cost, named as a cost:** **a registration whose only prior use was a fabricated inquiry is, at the
> minting gate, INDISTINGUISHABLE from one whose prior use was a real engagement that failed.** ⟦ARCHITECT
> ANALYSIS⟧ **AD-01P §5.3(3) put it in one sentence and it is quoted rather than re-derived:** *"`P-G`'s
> closure-blindness is what makes it `N-4`-independent, cheap, deterministic and auditable — and it is the
> same property that makes a fabricated registration indistinguishable from a real one at the minting
> gate."* **This is an ACCEPTED COST of Option A. It is not argued away, not minimised, and not offset
> against the decision's virtues.**

**What ALREADY-ESTABLISHED architecture bears on it — and what each of those does and does not do.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-64` — every item below is ALREADY ON RECORD in a prior document. NOTHING here
> is new, and NOTHING here is a control the owner has not already got. Each is stated with its limit
> attached, because a list of partial controls presented without limits reads as a solution.**
>
> | Already on record | What it does | What it does NOT do |
> |---|---|---|
> | ⟦ARCHITECT RECOMMENDATION⟧ **`L-13`**'s hazard finding — *"a rule that converts registration volume into forward options rewards volume over engagement"*, with ⟦SOURCE⟧ **§11** named as the one place the sources warn of it in their own words | **Names the hazard, and names `K-22`/`L-6` as its primary intended control** | ⟦ARCHITECT ANALYSIS⟧ **Under the selected `(L-6·ground)` reading that control does NOT operate on `P-G` at all.** `L-13` is a NAMED COST, not a rule, and this decision **explicitly accepts that cost** |
> | ⟦ARCHITECT RECOMMENDATION⟧ **`C-XIII`**, **`NF-26`(9)**, **`NF-27`** event 1 — every registration is an explicit, permissioned, project-scoped, separately audited act with its own immutable date and its authorization context | **Makes the behaviour VISIBLE and ATTRIBUTABLE rather than silent** | **Visibility is not a bound. It records who did what; it prevents nothing** |
> | ⟦ARCHITECT RECOMMENDATION⟧ **`PF-23`**/**§3.12 link 2** — every mint is separately audited with its system origin recorded; **`L-25`**, ⟦SOURCE⟧ **§54** — a system-created fact must be visibly distinguishable from one produced in the ordinary course | **Keeps minted claims countable and separable from filed ones** | **Does not weight, rank or bar any of them** |
> | ⟦PRODUCT-OWNER DECISION⟧ **`PO-P4`** + ⟦ARCHITECT RECOMMENDATION⟧ **`C-XVI`** — every minted claim must WIN a §11 adjudication by builder-side authorized leadership, and losing must be a reachable outcome | **This is the real control, and it is the owner's own.** A fabricated-ground claim that reaches §11 can lose there | **It operates per case, on judgement, and depends on leadership having grounds to doubt. It is not a systemic bar and `C-XVI` forbids one** |
> | ⟦PRODUCT-OWNER DECISION⟧ **`PO-Q1`** / ⟦ARCHITECT RECOMMENDATION⟧ **`Q-OV`** — an authorized holder may override an attribution/clash decision, with a mandatory reason AND mandatory supporting evidence | **A per-case discretionary corrective is AVAILABLE after the fact** | ⟦ARCHITECT ANALYSIS⟧ **`C-XVIII` forbids it becoming a rule. Repeated use to enforce a de-facto policy is `C-IX`'s §88 authorization change arriving by the back door, and AD-01Q §3.14 states that in terms. An override is NOT an anti-abuse mechanism and must never be operated as one** |
> | ⟦ARCHITECT RECOMMENDATION⟧ **`Q-AR`** — the reconstruction chain | ⟦ARCHITECT ANALYSIS⟧ **NOTHING, for this purpose, and this is the finding `PF-61` requires be stated here.** `Q-AR` reconstructs a decision from the decision's own inputs, and the earlier closure is not one | **The pattern IS visible — in the work record's own Inquiry history and in `NF-27`'s registration events — but NOT in `Q-AR`. A reader who expected the attribution chain to surface it will not find it there** |

**What is NOT done here.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-65` — stated as a prohibition on this document rather than as a gap in it.**
>
> **NO control is invented. Specifically NOT proposed, designed, drafted, implied or hinted at anywhere
> above or below: no cap on registrations; no minimum gap between them; no cadence rule; no ratio of
> invalid-closed to valid inquiries; no CP quality score, rating, tier or standing; no flag, badge or marker
> on a CP, a registration, a claim or a work record; no alert, queue, review step or escalation; no
> automatic bar, suspension or forfeiture; no change to what `P-G` step 3 reads; and no reduction of any
> window.** ⟦SOURCE⟧ Spec **§88** — *inventing business rules* is **MUST NEVER DO WITHOUT EXPLICIT
> AUTHORIZATION**; consolidated **§30** — no implementation may be inferred from an unresolved product
> ambiguity.
>
> **Whether any such control should exist AT ALL is carried to `AC-32`, which is a SEPARATE future
> Product-Owner decision and is expressly OUT OF SCOPE here** —
> [§5.1](#51-the-one-new-question). ⟦PRODUCT-OWNER DECISION⟧ **`PO-R2` requires exactly this treatment and
> nothing more.**
>
> **`AC-18` — re-registration cadence, minimum gap, cap — is NOT resolved, NOT narrowed and NOT branched.
> Its STATUS is clarified in one respect and one only, and the clarification is reported honestly:** AD-01P
> §5.3 and AD-01Q §3.7 recorded that **under reading `(L-6·ground)`** the hazard `L-13`, `MF-9` and `X-13`
> each named sits *"at its highest stated level in the series."* ⟦PRODUCT-OWNER DECISION⟧ **That reading is
> now SELECTED, so the hazard sits at that level UNCONDITIONALLY rather than under one of two live
> readings.** ⟦ARCHITECT ANALYSIS⟧ **That is a change in the CERTAINTY of a previously-recorded assessment,
> not a change in the assessment, and it is emphatically not a reason to revisit `PO-R1` — `PO-R2` forbids
> reading it as one.**

### 3.4 Determination 4 — no existing rule is contradicted

> ⟦ARCHITECT ANALYSIS⟧ **The search was RUN, rule by rule, and its result is that NO new contradiction is
> allocated and `X-26` is NOT minted. Each check is shown rather than its result asserted.**

**`C-XI` — the registration is a TEMPORAL PROTECTION fact and must never become an ATTRIBUTION fact.**

> ⟦PRODUCT-OWNER DECISION, per `A-20`⟧ **NOT BREACHED.**
>
> **The test:** does `PO-R1` make the registration readable, joinable or reportable as an answer to *"who
> produced this Inquiry?"* **No.** **`PO-R1·a` says the registration remains VALID and USABLE — that is a
> statement about its PROTECTION WINDOW and about its admissibility as a ground. `PO-R1·e` says it MAY
> ground a claim that is then adjudicated. `PO-R1·f` says it is NOT automatic attribution and NOT an
> automatic clash winner.** ⟦ARCHITECT ANALYSIS⟧ **The registration still only PROTECTS a window and
> SUPPLIES a ground; it never itself attributes anything, and the answer-bearer for *"who produced this
> Inquiry?"* remains what `K-18` and AD-01Q §3.6 say it is — the resolved claim on that Inquiry, joined to
> any `Q-OV` override of it.** **`C-XI` is intact in wording AND in practice, and `C-XVI` remains what keeps
> it intact in practice.**

**`C-XV` and `C-XVI` — no cached result on the registration; no privileged path for a registration-grounded
claim.**

> ⟦ARCHITECT RECOMMENDATION⟧ **NEITHER BREACHED.**
>
> - **`C-XV`(3): neither the minting result nor the eligibility result may be stored on the registration,
>   and no `grounded`, `consumed`, `used`, `spent` or `expired` marker of any kind exists.** ⟦ARCHITECT
>   ANALYSIS⟧ **`PO-R1·b` is the owner agreeing with `C-XV`(3) in substance: a closure that does not consume
>   is a closure that writes nothing. Option A is the reading under which `C-XV`(3) needs no exception; it
>   is `(L-6·engagement)` that would have pressed toward one, by creating a reason to know whether a
>   registration had been *"used up."* This is recorded as corroboration for `C-XV`, not as a ratification
>   of it — `C-XV` is STILL UNRATIFIED.**
> - **`C-XVI`: no default win, no presumption, no tiebreak, no privileged or abbreviated resolution path, no
>   differential weight, and no outcome following from the mere fact that the ground is a registration.**
>   ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1·e`'s *"subject to the normal attribution / clash-resolution process"*
>   and `PO-R1·f`'s three non-automaticities are `C-XVI`'s principle in the owner's own words for this
>   configuration.** **A claim grounded on a registration that survived an invalid-side closure gets NOTHING
>   that any other minted claim does not get.** **`C-XVI` and `A-39`'s fourth corollary are STILL
>   UNRATIFIED and are not ratified here.**

**`B-1` and `B-2` — the claims-closed / citation-open boundary on a terminal Inquiry.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-66` — this is the check that must be WORKED rather than asserted, because the
> objection is real and the answer turns on a distinction the series makes and a careless reading would
> miss.**
>
> **The objection, stated at full strength:** **`B-1` holds that *"no claim, resolved attribution,
> entitlement, adjudication, source, campaign, channel, priority or disposition recorded on a terminal
> Inquiry has any effect whatsoever on any other Inquiry."* Under `PO-R1`, the invalid-side DISPOSITION of a
> terminal Inquiry has a determinate consequence — it leaves the registration usable — and that registration
> then grounds a claim on a LATER Inquiry. Does the closure therefore *"reach back"* and, through the
> registration, affect another Inquiry, in breach of `B-1`?**
>
> **NO, and the distinction is exact.**
>
> | | What `B-1` forbids | What `PO-R1` does |
> |---|---|---|
> | **The subject** | A fact **recorded on Inquiry #1** having an effect **on Inquiry #2** | A fact recorded on Inquiry #1 having **NO effect on a SEPARATE RECORD — the registration** |
> | **The direction of the effect** | Inquiry → Inquiry | Inquiry → **(nothing)**. The registration is unchanged by the closure, which is the whole content of `PO-R1·b` |
> | **What grounds the later claim** | — | **The REGISTRATION RECORD** — `P-G` step 4, `PO-P11`, `C-X` + `A-21` (the ground must be a specific immutable record). **NOT Inquiry #1, and NOT Inquiry #1's disposition** |
>
> ⟦ARCHITECT ANALYSIS⟧ **The decisive point, stated once: `PO-R1` is a rule about the ABSENCE of an effect,
> not about the presence of one.** **`B-1` forbids a terminal Inquiry's recorded facts REACHING another
> Inquiry. `PO-R1` establishes that a terminal Inquiry's recorded facts reach NOTHING — not the other
> Inquiry, and not the registration either.** **A rule that says *"this changes nothing"* cannot breach a
> rule that says *"this must change nothing."* The two point the same way.**
>
> **And the registration is a SEPARATE RECORD from the Inquiry.** ⟦SETTLED⟧ **AD-01N `NF-9` already
> established that the protection window does not violate `B-1` *"because it is not recorded on the
> Inquiry."* `NF-9` is CONFIRMED and is doing the same work here, one configuration further out.**
>
> **`B-2` — the citation licence — is NOT engaged.** ⟦ARCHITECT ANALYSIS⟧ **AD-01P `X-20`/`A-31` already
> recorded that the owner's ground is a determinate CP Project Registration and NOT `B-2`'s determinate
> earlier Inquiry, so `B-2`'s own stated ground is *"NOT adopted and NOT rejected — it is not consulted."*
> `PO-R1` consults it no more than `PO-P1` did.** **`B-2`'s CLOSURE-GROUNDED BRANCH — whether a closed
> Inquiry's own Dimension-A classification may ground a citation — is a DIFFERENT question, remains OPEN
> exactly as AD-01P §3.15 `PF-25` left it, remains OPTIONAL rather than blocking, and is NOT answered,
> narrowed or branched by anything here.** **`P-α` is NOT answered. `P-β`, `P-γ` and `P-δ` are untouched.**

**`L-6` — and why `(L-6·engagement)` is FORECLOSED rather than merely unchosen.**

> ⟦ARCHITECT ANALYSIS⟧ **`PF-61` is `Q-AR`'s finding; this is a separate one and it is the most important
> paragraph in the section.**
>
> ⟦SETTLED⟧ **`L-6` is NOT reopened, NOT narrowed and NOT ratified. It stands exactly as AD-01L wrote it:
> *no-reach attaches to the INVALID SIDE OF DIMENSION A as a class*, on the ground that a citation of a
> closed Inquiry *"would have to assert, in one appended fact, both that the ground exists and that the
> business has classified it as not existing"* — and that this *"is not a policy the owner may or may not
> adopt; it is a fact the model cannot record coherently."***
>
> **AD-01P §5.3 recorded that `AC-14` was *"a request to state `L-6`'s SCOPE — because `L-6` claims
> necessity, and a claim of necessity requires a determinate scope."*** ⟦PRODUCT-OWNER DECISION⟧ **The owner
> has now supplied that scope.**
>
> | | **`(L-6·ground)` — SELECTED** | **`(L-6·engagement)` — FORECLOSED** |
> |---|---|---|
> | What it reads `L-6` as being about | **The CLOSED INQUIRY being used as a ground** | The ENGAGEMENT having been classified as never having existed |
> | Its consequence for `P-G` | **`P-G` UNTOUCHED.** The registration is a different record, classified by nobody | `P-G` REACHED; its operand set grows to include prior closure classifications |
> | Status after `PO-R1` | ⟦PRODUCT-OWNER DECISION⟧ **This is the owner's reading. `L-6`'s necessity claim is bounded to citations OF A CLOSED INQUIRY and does not extend to a registration ground** | **FORECLOSED** |
>
> **Why FORECLOSED and not merely unchosen, stated precisely.** ⟦ARCHITECT ANALYSIS⟧ **An unchosen reading
> is one the owner has not selected and could still select. `(L-6·engagement)` is not in that position,
> because it is NOT COMPATIBLE with `PO-R1`, clause by clause and not merely in tendency:**
>
> 1. **`(L-6·engagement)` holds that a registration over a person the business has recorded as a wrong
>    number cannot coherently ground anything. `PO-R1·e` holds that it MAY ground a claim.** **These are
>    contradictory propositions about the same configuration.**
> 2. **`(L-6·engagement)` makes the prior closure classification an OPERAND of the grounding test.
>    `PO-R1·b`/`PO-R1·f` hold that *"the invalid-side disposition of the earlier Inquiry does not itself
>    alter the registration's validity"* — i.e. that the classification has no bearing.** **An operand with
>    no bearing is not an operand.**
> 3. **`(L-6·engagement)` claims NECESSITY — that the model CANNOT coherently record the thing. `PO-R1`
>    directs that the model record exactly that thing.** **A necessity claim that the owner has directed
>    against is not a live alternative; it is a claim whose scope has been determined to exclude the case.**
>
> **Therefore `A-32` — AD-01L's `L-6` must state its own scope — is now CONTENT-DETERMINED.** **Its content
> is the owner's, not the architect's, and it remains NAMED AND NOT MADE** —
> [§4.1](#41-the-three-amendments-named-and-not-made). **`K-22` is NOT reopened. `L-6` is NOT reopened,
> NOT narrowed, NOT ratified and NOT rejected — what has been settled is its SCOPE and not its truth.**

**`X-5` — DISCHARGED.**

> ⟦ARCHITECT ANALYSIS⟧ **`X-5` was allocated at AD-01N as a LIVE TENSION: *"the lock-in rule is
> closure-reason-blind … under Reading G this credits a fabricated registration; under Reading F it does
> not — but the tension resurfaces the moment `B-2` is granted."* AD-01P `PF-26` recorded the condition as
> MET. AD-01Q §3.7 recorded that neither of its two answers relieved it.**
>
> ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` discharges `X-5` — and the manner of the discharge matters. `X-5` is
> NOT resolved by reconciling two rules into agreement. It is DISSOLVED, because the owner has ruled that
> the closure-reason-blind behaviour `X-5` flagged as a tension IS THE INTENDED BEHAVIOUR.**
>
> **`X-5` therefore moves from LIVE TENSION to DISCHARGED BY PRODUCT-OWNER DECISION, and the closure-
> blindness of the lock-in and grounding rules — `NF-2(2)`, `NF-19(3)`, `P-G` step 3 — is CONFIRMED as a
> DELIBERATE CHOICE rather than an oversight.** → **`A-47`**. ⟦ARCHITECT ANALYSIS⟧ **What does NOT discharge
> with it is the COST `X-5` was pointing at. `L-13`'s hazard is a named cost, not a contradiction, and a
> discharged contradiction does not retire a cost** — [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved).
> **`Q0-c` — AD-01M's *"an invalid/fake closure cannot support a later claim"* — is likewise ANSWERED, in
> the negative, by the same clause.**

### 3.5 Determination 5 — which open items this decision actually reaches

> ⟦ARCHITECT ANALYSIS⟧ **Every item below is checked INDIVIDUALLY. *"Unchanged"* means CHECKED AND
> UNCHANGED, never skipped. NOTHING is closed on the strength of an answer that does not reach it, and no
> item is closed out of momentum because a neighbouring one closed.**

| Item | Effect of `PO-R1` |
|---|---|
| **`AC-14`** — does a registration whose Inquiry closed on Dimension A's invalid side retain its protection window and its power to ground a later claim | ⟦PRODUCT-OWNER DECISION⟧ **CLOSED. ANSWERED YES — Option A.** **The FIRST item in this series closed by a direct Product-Owner ruling rather than by an architect derivation** (`PF-55`). **`AC-14` is NOT renumbered, NOT re-scoped and NOT partially closed. It is closed** |
| **`Q0-c`** — an invalid/fake closure cannot support a later claim | **ANSWERED, in the negative, by the same clause. It is `AC-14` under AD-01M's label and closes with it** |
| **`X-5`** — the `L-6`/`K-22` live tension | **DISCHARGED BY PRODUCT-OWNER DECISION.** The closure-blindness is CONFIRMED as deliberate → `A-47` |
| **`AC-1`** — the authorization posture of the closing-reason tap | **NARROWED, NOT RENUMBERED, NOT CLOSED.** ⟦ARCHITECT ANALYSIS⟧ **`AC-1` is expressly conditional — AD-01L states it *"arises if and only if T-4's answer is anything other than 'no citation, ever'"* — and AD-01N `X-6` recorded that it *"does not arise from this rule … it still arises from `Q0-c`/`L-6`."* AD-01P and AD-01Q both recorded it as REVIVED only under `(L-6·engagement)`. THAT ROUTE IS NOW FORECLOSED: the `P-G` pathway will never make a disposition reason a money-bearing act. `AC-1` SURVIVES on `B-2`'s still-open closure-grounded branch, where AD-01L raised it, and it is NOT closed** |
| **`N-4`** — the closing-reason vocabulary | **NARROWED, NOT RENUMBERED, NOT CLOSED, and PERMANENTLY OFF `P-G`'s CRITICAL PATH.** ⟦PRODUCT-OWNER DECISION⟧ **`X-6` is CONFIRMED FOR A THIRD TIME and is now owner-backed rather than derived: AD-01N found `N-4` off the lock-in rule's path, AD-01P confirmed it for `P-G` *"a second and independent time"*, and `PO-R1` makes it a ruling. The last route by which `N-4` could have become BLOCKING for the grounding rule is closed.** **`N-4` REMAINS OPEN: it is still required for reporting and still fully gates `P-α`'s positive side** (AD-01L §3.3). **NO VALUE IS PROPOSED, NAMED, RANKED OR IMPLIED** |
| **`AC-18`** — re-registration cadence, minimum gap, cap | **UNCHANGED, NOT RESOLVED, NOT NARROWED. STATUS CLARIFIED ONLY** — [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved). **No cadence, gap or cap is invented** |
| **`L-13`**'s hazard finding | **UNAFFECTED AS A FINDING. It is a NAMED COST, not a rule, and this decision EXPLICITLY ACCEPTS that cost** (`PO-R2`). **Its condition is now unconditional rather than reading-dependent** |
| **`AC-15`** and **`AC-20`** — who wins between two live registrations; may the second exist | **UNCHANGED, NOT ANSWERED, NOT NARROWED — PRIORITY RAISED A FIFTH CONSECUTIVE TIME.** ⟦ARCHITECT ANALYSIS⟧ **`PO-R1` settles what may ENTER the clash process, never how the clash RESOLVES** — area 11. **NO PRECEDENCE IS INVENTED** |
| **`AC-26`** — is a registration's grounding power SINGLE-USE or REPEATABLE | **UNCHANGED, NOT ANSWERED, NOT NARROWED — and this was CHECKED rather than assumed, because it is the item most likely to be read as having moved.** ⟦ARCHITECT ANALYSIS⟧ **In the owner's OWN scenario the registration has grounded NOTHING before: *"the inquiry that partner brought"* means the CP was the PRODUCER of Inquiry #1, so any claim of theirs on it was a producer-FILED claim under `C-V`, not a registration-minted one. The grounding of Inquiry #2 is therefore the registration's FIRST grounding use, and `AC-26` does not arise on the facts the owner ruled on. The configuration in which Inquiry #1 DID carry a registration-minted claim is reachable, and in that configuration `AC-26` IS engaged and remains UNANSWERED — `PO-R1` does not license a second grounding by itself. Reading *"does not consume"* as *"may be used without limit"* would be the architect widening an owner clause from the case it addresses to a case it does not, which `PF-34(2)`'s discipline forbids in this direction as much as in the other.** **`Y-1`, `Y-3`, `AA-1`, `K-26` and `T-5` — all coupled to `AC-26` — are likewise NOT resolved, NOT narrowed and NOT branched** |
| **`AC-27`** — the two override layers on one outcome | **UNCHANGED.** `PO-R1` creates no override and consumes none. **NOT resolved** |
| **`AC-28`** — the evidence asymmetry between the two override layers | **UNCHANGED.** `PO-R1` requires no reason and no evidence of anybody. **NOT resolved** |
| **`AC-29`** — until when may an attribution override be performed | **UNCHANGED.** `PO-R1` introduces no act with a timing bound. **NOT resolved** |
| **`AC-30`** — what an override's decision may SAY | **UNCHANGED.** ⟦ARCHITECT ANALYSIS⟧ **Checked explicitly: `PO-R1` makes a further class of registration-grounded claim reachable, so more decisions exist that could be overridden. That is a change in VOLUME and not in the override's admissible OUTCOMES, which is what `AC-30` asks. NOT resolved** |
| **`AC-31`** — who the auditor is, under what permission, with what scope, for how long | **UNCHANGED.** `Q-AR` is unamended and gains no link — area 14. **NOT resolved** |
| **`AC-6`** (boundary convention) · **`AC-8`** (business timezone) | **UNCHANGED, and EACH CHECKED FOR A NEW CONSUMER: there is none.** `AC-6` stays TRIPLY money-bearing; `AC-8` acquires no new operand. **NEITHER resolved** |
| **`AC-9`/`T-9`** (offline capture date vs sync date) · **`AC-21`** with **`Q10`**/**`M-5`**'s uniqueness half (the client identity term) · **`AA-2`** (project-less preliminary registration) | **UNCHANGED, each CHECKED and each RULED OUT as unaffected.** ⟦ARCHITECT ANALYSIS⟧ **`PO-R1` adds no date, no identity term and no Project scope to anything. `Q-AR` link 1 and link 3 are gated by `AC-21` and `AC-9` exactly as AD-01Q left them. NONE resolved, NONE narrowed** |
| **`AC-2`** (ex-gratia route where no claim exists) · **`AC-3`** · **`AC-5`** · **`AC-7`** · **`AC-10`** · **`AC-11`** · **`AC-12`** · **`AC-13`** · **`AC-16`** · **`AC-17`** · **`AC-19`** · **`AC-22`** · **`AC-23`** with **`Q11`** (still BLOCKING) · **`AC-24`** · **`AC-25`** | **UNCHANGED — CHECKED, NOT SKIPPED. NONE resolved, NONE narrowed, NONE enlarged.** **`AC-4` remains CLOSED at AD-01P and is NOT reopened** |
| **`AA-1`, `AA-3`, `AA-4`, `AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`Q10`, `Q11`** · **`V-4`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`** · **`Q0-a`, `Q0-b`, `Q0-d`, `Q0-e`** | **UNCHANGED — each carried forward and each accounted for. NONE resolved.** ⟦SETTLED⟧ **`V-4` is now the cheapest unblocking question in the register for the NINTH consecutive document and has still not been taken. `Q0-d` stays OFF the critical path — `C-IX` is untouched and no precedence rule is created** |
| **`M-9`** (the commission model) | **UNCHANGED, and it still cannot start.** ⟦SETTLED⟧ **It owns every formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule and TDS treatment, and NOTHING in this document touches any of them.** Its consumer list is unchanged from AD-01Q's |

> ⟦ARCHITECT ANALYSIS⟧ **The net accounting, stated as arithmetic.**
>
> **`PO-R1` CLOSES TWO items that are one question under two labels (`AC-14`, `Q0-c`), DISCHARGES ONE
> contradiction (`X-5`), NARROWS TWO without closing them (`AC-1`, `N-4`), CONFIRMS ONE contradiction's
> finding for a third time (`X-6`), CLARIFIES the status of ONE (`AC-18`), ADDS ONE (`AC-32`), and requires
> THREE amendments across THREE documents.**
>
> **It ENLARGES nothing, RE-OPENS nothing and INVENTS nothing.** ⟦ARCHITECT ANALYSIS⟧ **This is the first
> document since AD-01P to close a register row, and the first ever to do so on a direct owner ruling. It is
> also the smallest document in the CP sub-series, and the two facts are the same fact: a decision that
> selects between two fully-characterised readings of an existing rule has very little to reconcile.**

---

## 4. The amendment register

> ⟦ARCHITECT ANALYSIS⟧ **NO FILE IS EDITED BY THIS DOCUMENT.** Where an amendment is logically required it is
> **NAMED PRECISELY AND NOT MADE**, and the prior document is left exactly as it stands.
>
> **Result of the search against APPROVED decisions: NO contradiction was found with `Q1`, `Q4`, `Q6`, `Q7`,
> `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `PO-N1 … PO-N9`, `PO-O1 … PO-O14`,
> `PO-P1 … PO-P12` or `PO-Q1`/`PO-Q2`.** **Every item below is a conflict with an unapproved
> ⟦ARCHITECT ANALYSIS⟧ framing that the owner's answer has superseded, never with an approved decision.**

### 4.1 The three amendments, named and NOT made

> ⟦ARCHITECT ANALYSIS⟧ **THREE. The count is reported and not fitted: AD-01P and AD-01Q each produced nine,
> and reaching for nine here would mean inventing amendments a narrow decision does not require. All three
> below are cited inline in [§1](#1-the-decision), [§2](#2-what-changed-architecturally--newly-established-or-merely-confirmed)
> or [§3](#3-the-determinations) before this section begins, and NONE is introduced here for the first
> time.**

| # | Document and target | Amendment — **NAMED AND NOT MADE** |
|---|---|---|
| **`A-45`** | **AD-01P — §3.15 (`PF-25`, `PF-26`) and §5.3** | **AD-01P recorded the two readings of `L-6` at EQUAL STRENGTH, stated that *"this document does NOT choose between them,"* characterised `AC-14` at `PF-26` as having moved *"from a live tension to an unresolved contradiction,"* and carried it to §6.1 as an open gate.** ⟦PRODUCT-OWNER DECISION⟧ **That framing is SUPERSEDED. `(L-6·ground)` is SELECTED and `(L-6·engagement)` is FORECLOSED** ([§3.4](#34-determination-4--no-existing-rule-is-contradicted)). **AD-01P §5.3's *"Both readings are recorded at EQUAL STRENGTH. NEITHER is selected"* must be marked as the state of the question BEFORE the owner answered it, and `PF-26`'s *"unresolved contradiction"* must be marked RESOLVED.** ⟦ARCHITECT ANALYSIS⟧ **AD-01P's ANALYSIS of the two readings is NOT superseded and must NOT be deleted — it is the record of what the owner was choosing between, and `PF-57`'s finding that the decision supplies only ONE piece of new information depends on it. Only the *"neither is selected"* STATUS changes.** **AD-01P is NOT edited.** |
| **`A-46`** | **AD-01Q — §3.7, §3.14's `AC-14` row, §5.3, §5.4(1), §6.1 gate 1, and the Closing note** | **AD-01Q recorded `AC-14` as *"CHECKED CLAUSE BY CLAUSE AGAINST BOTH ANSWERS AND FOUND NOT TOUCHED, in either direction … EXACTLY as open and exactly as acute as AD-01P left it, at the TOP of the register,"* posed it back to the owner at §5.3, placed it FIRST in §5.4's sequencing, and carried it as §6.1 GATE 1.** ⟦PRODUCT-OWNER DECISION⟧ **All six locations are SUPERSEDED: `AC-14` is ANSWERED and CLOSED.** **AD-01Q's §6.1 gating list must be restated as EIGHT items with gate 1 DISCHARGED, and its §5.4 sequencing must begin at what was item 2.** ⟦ARCHITECT ANALYSIS⟧ **AD-01Q's §3.7 FINDING — that `PO-Q1`/`PO-Q2` did not reach `AC-14` — remains TRUE and must NOT be deleted. It was correct when written and it is why a separate owner answer was needed. What changes is the item's STATUS, not the accuracy of AD-01Q's check.** **AD-01Q's own conclusion that these answers *"CLOSE NOTHING"* likewise stands as a statement about `PO-Q1`/`PO-Q2` and is not restated by this document.** **AD-01Q is NOT edited.** |
| **`A-47`** | **AD-01N — `X-5`, and the STATUS of `NF-2(2)`/`NF-19(3)`'s closure-blindness** | **TWO limbs, one requirement.** **(i)** **`X-5` must be re-labelled from LIVE TENSION to DISCHARGED BY PRODUCT-OWNER DECISION**, with the manner of discharge recorded: the tension is DISSOLVED rather than reconciled, because ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` rules the closure-blind behaviour INTENDED** ([§3.4](#34-determination-4--no-existing-rule-is-contradicted)). **(ii)** **The closure-reason-blindness of the lock-in rule (`NF-2(2)`, `NF-19(3)`) and of the grounding test (`P-G` step 3) must be re-labelled from an ⟦ARCHITECT ANALYSIS⟧ PROPERTY to a ⟦PRODUCT-OWNER DECISION⟧ — the TEXT does not change, its STATUS does.** ⟦ARCHITECT ANALYSIS⟧ **This is the precedent `A-20` set for `C-XI` at AD-01O: a rule an implementation would now be violating an OWNER DECISION by breaching, rather than an unapproved recommendation. It matters for exactly that reason.** **`X-5`'s underlying COST is NOT retired by the discharge — `L-13`'s hazard is a named cost and survives it** ([§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved)). **AD-01N is NOT edited.** |

> ⟦ARCHITECT ANALYSIS⟧ **`A-32` — CONTENT-DETERMINED, NOT RENUMBERED, STILL NOT MADE, and NO NEW NUMBER IS
> MINTED FOR IT.** **AD-01P registered `A-32` as *"AD-01L's `L-6` must state its own scope"* and recorded
> that *"its CONTENT is determined by the owner's answer, not by the architect."* ⟦PRODUCT-OWNER DECISION⟧
> **The owner has now supplied that content: `L-6`'s necessity claim is bounded to citations OF A CLOSED
> INQUIRY and does NOT extend to a registration ground.** **`A-32` keeps its number, keeps its target, and
> moves from CONTENT-UNDETERMINED to CONTENT-DETERMINED. It remains NAMED AND NOT MADE, and only the Project
> Owner may make it. `L-6` itself is NOT reopened, NOT narrowed, NOT ratified and NOT rejected.**

### 4.2 Documents requiring NO change — each checked

> ⟦ARCHITECT ANALYSIS⟧ **Stated document by document so that *"no change required"* is a CHECKED RESULT
> rather than an omission. One result is notable in advance: AD-01K requires NO amendment for a THIRD
> consecutive document, and AD-01J for a SECOND.**

| Document | Result |
|---|---|
| **AD-01** | **No change.** §D.4's *"claims are never overwritten by a later claim"* is untouched. `Q10` and `Q11` NOT resolved |
| **AD-01A** | **No change.** `Q1`, `Q4`, `Q7` fixed input, NOT reopened. **§8.3's Dimension A is CONFIRMED and NOT amended, NOT re-valued and NOT extended; no fourth dimension is proposed.** §8.5 honoured — no workflow, screen, approval step, queue or gate is designed. **`N-4` NARROWED, NOT resolved; NO VALUE PROPOSED** |
| **AD-01B** | **No change.** §4's *"unrecoverable if decided by implementation"* standard applies to everything still unratified, **which is why [§6](#6-recommendation) does not recommend `BUILD NOW` despite a gate closing** |
| **AD-01C** | **No change.** `Q6` NOT reopened and NOT engaged — `PO-R1` corrects nothing and asserts nothing was *"never true."* `T-1`, `T-3`, `T-6 … T-11` NOT resolved |
| **AD-01E** | **No change.** `U-4` untouched; no dormancy threshold is invented or implied |
| **AD-01F** | **No change.** **`V-4` remains OPEN and is now recommended by NINE consecutive documents without being taken** |
| **AD-01G** | **No change.** `G-1`/`V-1` CONFIRMED; `G-8`'s read-time-projection principle untouched; `V-7` NOT reopened |
| **AD-01H** | **No change.** **`H-4`'s terminal-once property is load-bearing again** — it is what makes `B-1` true and what keeps the invalid-side closure permanent and un-re-disposed. `V-2`, `V-3`, `H-8`, `H-9` CONFIRMED. `Y-1`, `Y-3`, `Y-4`, `Y-5` NOT resolved |
| **AD-01I** | **No change — and `I-9`'s no-new-entity standard is MET by this document**, which is a result and is stated as one: **`PO-R1` adds NO entity, NO record, NO field, NO state, NO marker and NO mechanism, so the necessity test has nothing to run against.** AD-01Q had to report the opposite. `Z-2`, `Z-5` NOT resolved |
| **AD-01J** | **NO CHANGE, for a SECOND consecutive document.** **`J-2` requires NO amendment, is NOT narrowed and is NOT given a new input. `J-8`'s reading of a Dimension-A invalid closure — *"asserts that there was no engagement"* — is CONFIRMED and NOT re-read.** `C-I … C-IV` all survive unamended. `AA-1`, `AA-2`, `AA-4`, `AA-5` NOT resolved |
| **AD-01K** | **NO CHANGE, for a THIRD consecutive document.** **`K-18` CONFIRMED for a FIFTH consecutive document; `K-9`, `K-10`, `K-12`, `K-17`, `K-22`, `K-26`, `K-48`, `K-50`, `K-52` all CONFIRMED and none contradicted.** ⟦ARCHITECT ANALYSIS⟧ **A decision about what may ground a claim that amends AD-01K nowhere is further evidence that the Inquiry was the right anchor: the registration supplies a GROUND and never becomes an anchor.** `AB-1`, `AB-2`, `AB-3` NOT resolved |
| **AD-01L** | **No change, and `A-32` is CONTENT-DETERMINED rather than newly required** ([§4.1](#41-the-three-amendments-named-and-not-made)). **`B-1` CONFIRMED and NOT BREACHED — the distinction is worked at [§3.4](#34-determination-4--no-existing-rule-is-contradicted) rather than assumed. `B-2` NOT engaged and its closure-grounded branch NOT answered. `L-6` and `K-22` NOT reopened. `L-13`'s hazard UNAFFECTED as a finding. `L-21`, `L-25` untouched. `C-VIII`, `C-IX`, `C-X` untouched. `A-1 … A-11`, `A-30`, `A-31`, `A-32` remain named and not made** |
| **AD-01M** | **No change.** **`Q0-c` ANSWERED with `AC-14`. `AC-1` NARROWED, NOT resolved. `AC-2`, `AC-3` carry forward. `Q0-a`, `Q0-b`, `Q0-e` NOT answered; `Q0-d` stays OFF the critical path. Policy C remains selected as written and the five policies are unchanged** |
| **AD-01N** | **One amendment — `A-47` (two limbs).** **`NF-9`, `NF-15`, `NF-21`, `NF-24`, `NF-25`, `NF-26`, `NF-27`, `NF-28`, `NF-29` all CONFIRMED; `NF-28` UNAMENDED for a THIRD round of owner input. `C-XI` CONFIRMED and NOT BREACHED; `C-XII` untouched. `X-5` DISCHARGED; `X-6` CONFIRMED a third time. `AC-6` NOT resolved. AD-01N remains at `VALIDATE` and is NOT approved** |
| **AD-01O** | **No change — and this is a result.** **`PO-O6`, `PO-O10`, `PO-O11`, `PO-O12`, `PO-O13`, `PO-O14` all UNCHANGED; `PO-O14` is EXTENDED BY THE OWNER THEMSELVES at `PO-R1·g`, which is why no amendment is required** (`PF-62`). **`O-U` untouched; `OF-6` NOT engaged; `C-XIII` covers `PO-R1·d` without extension and needs NO new row; `C-XIV` NOT re-tested and NOT breached. `A-14 … A-26`, `A-42` remain named and not made. AD-01O remains advisory and is NOT approved** |
| **AD-01P** | **One amendment — `A-45`.** **`P-G` ADOPTED as written, NOT re-derived, NOT narrowed and given NO step here; its step-3 operand set is now owner-confirmed. `C-XV` and `C-XVI` ADOPTED, CHECKED and NOT BREACHED — both STILL UNRATIFIED. `PF-9`, `PF-10`, `PF-12`, `PF-13`, `PF-23`, `PF-25` all CONFIRMED. `AC-22 … AC-26` carry forward. AD-01P remains at `VALIDATE` and is NOT approved** |
| **AD-01Q** | **One amendment — `A-46`.** **`Q-OV` ADOPTED and equally available; `Q-AR` ADOPTED and UNAMENDED, gaining NO link; `C-XVII`, `C-XVIII`, `C-XIX` ADOPTED and untouched; `A-37`, `A-38`, `A-39`, `A-40`, `A-41`, `A-42`, `A-43`, `A-44` all remain named and not made; `X-23`, `X-24`, `X-25` all stand. `AC-27 … AC-31` all UNCHANGED. AD-01Q remains at `VALIDATE` and is NOT approved** |
| **`01-bmexa-architecture-reconciliation.md`** | **No change. `M-5`'s uniqueness half and `M-9` NOT resolved, NOT narrowed, NOT branched** |
| **`BMEXA_MASTER_SPEC.md` / consolidated requirements / `ENGINEERING_RULES.md`** | **No change, and NO amendment is proposed to any of them.** **§11 requires NO amendment: no precedence, ranking or tiebreak is added to it, so `C-IX`'s §88 bar is NOT engaged. §03, §11, §13, §18, §32, §39, §40, §44, §50, §54, §88, §95, §97, R1, R2, R4, R6, R12 are read as they stand and none is extended, narrowed or reinterpreted** |

### 4.3 No prior document was silently edited

> | Check | Result |
> |---|---|
> | Working tree state | **`git status --porcelain` names NO FILE OTHER THAN THIS DOCUMENT** at any point during its production |
> | Scope within `docs/architecture/` | **One path: `03r-ac-14-registration-survives-invalid-closure-decision.md`** |
> | Consequence for the chain | **`00-*.md` through `03q-*.md`, `schema-phase-0.sql`, `BMEXA_MASTER_SPEC.md`, `ENGINEERING_RULES.md` and the consolidated requirements are BYTE-IDENTICAL to their state before this document existed** |
>
> **Therefore AD-01 … AD-01Q are ALL UNEDITED. The forty-seven amendments on the register are NAMED AND NOT
> MADE, and only the Project Owner may make any of them.**

### 4.4 The register after this document

> **AD-01P closed at `A-1 … A-35` across nine documents. AD-01Q closed at `A-1 … A-44` across ten. This
> document adds THREE — `A-45`, `A-46`, `A-47` — across FOUR LIMBS and THREE target documents, and
> CONTENT-DETERMINES one existing member (`A-32`) without renumbering it.**
>
> | Target | Amendments (limbs) | Count |
> |---|---|---|
> | **AD-01N** | `A-47`(i), `A-47`(ii) | **2 limbs / 1 number** |
> | **AD-01P** | `A-45` | **1** |
> | **AD-01Q** | `A-46` | **1** |
> | **AD-01L** | — (`A-32` CONTENT-DETERMINED, not newly required) | **0 new** |
> | **Every other prior document** | — | **0** |
>
> **The register now stands at `A-1 … A-47`, across ELEVEN documents. NONE has been made.** **`Q0-e` — the
> ratification asking the owner to ratify `A-1 … A-n` — is correspondingly larger and is NOT answered here.**
>
> ⟦ARCHITECT ANALYSIS⟧ **The exchange rate, stated honestly because AD-01Q reported its own and found it
> poor.** **THREE amendments buy ONE CLOSED REGISTER ROW, ONE DISCHARGED CONTRADICTION, TWO NARROWED ITEMS
> and ONE CONTENT-DETERMINED amendment — against AD-01Q's nine amendments buying one ratified requirement,
> one new mechanism and no closures.** **This is the best exchange rate in the CP sub-series, and the reason
> is structural rather than creditable: the owner selected between two readings the architecture had already
> fully characterised, so there was very little left to reconcile.** **Forty-seven unmade amendments across
> eleven documents remains a state none of those documents can be approved in.**

---

## 5. Remaining open items

### 5.1 The one new question

> ⟦BUSINESS DECISION REQUIRED⟧ **ONE item is new, and it is numbered `AC-32`, continuing the series. NO NEW
> NUMBERING NAMESPACE IS CREATED. It is NOT answered here and NO default is implied for it.** ⟦ARCHITECT
> ANALYSIS⟧ **The numbering discipline committed to minting new items *"only if genuinely new items
> surface."* Exactly one did, and it exists because ⟦PRODUCT-OWNER DECISION⟧ `PO-R2` requires the tradeoff
> to be recorded as a separate future decision rather than solved here.**

| # | Question | Arises from | Why it cannot be left to implementation, and what it is NOT |
|---|---|---|---|
| **`AC-32`** | ⟦BUSINESS DECISION REQUIRED⟧ **Given that `AC-14` = Option A is LOCKED and its anti-abuse exposure is an ACCEPTED COST of it, does the Project Owner wish any SEPARATE, ADDITIONAL control to exist against that exposure — YES or NO? And if YES, WHAT that control should be is itself a further Product-Owner decision, to be taken in its own right.** | [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved); ⟦PRODUCT-OWNER DECISION⟧ **`PO-R2`** | ⟦SOURCE⟧ **§88** MUST-ASK: **CP commission logic, authorization rules.** *"Inventing business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION.** ⟦ARCHITECT ANALYSIS⟧ **THIS QUESTION IS NOT A ROUTE BACK TO `AC-14`. It cannot reopen, weaken, narrow, condition or reinterpret `PO-R1`, and an answer of NO leaves `PO-R1` exactly as it stands — which is the same place an answer of YES leaves it. `PO-R1` is locked either way.** **NO candidate mechanism, threshold, cadence, cap, ratio, score, flag, alert, review step or detection rule is named, proposed, ranked, hinted at or implied, here or anywhere above** — [§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved). **`AC-32` is DISTINCT from `AC-18` and must not be folded into it: `AC-18` asks about the CADENCE of registrations; `AC-32` asks whether any control should exist against the exposure `PO-R1` accepts.** **It is explicitly a VALIDATE / BUILD-LATER consideration and is OUT OF SCOPE for this document** |

### 5.2 The rest, carried forward

**An INDEX onto [§3.5](#35-determination-5--which-open-items-this-decision-actually-reaches), which is the
authority.**

| Effect | Items |
|---|---|
| **CLOSED** | **`AC-14`** — answered **YES, Option A**, by a direct Product-Owner ruling · **`Q0-c`**, the same question under AD-01M's label |
| **DISCHARGED** | **`X-5`** — from LIVE TENSION to DISCHARGED BY PRODUCT-OWNER DECISION → `A-47` |
| **CONFIRMED FOR A THIRD TIME, AND NOW OWNER-BACKED** | **`X-6`** — `N-4` is off the grounding rule's critical path |
| **NARROWED, NOT RESOLVED, NOT RENUMBERED** | **`AC-1`** (survives only on `B-2`'s closure-grounded branch) · **`N-4`** (permanently off `P-G`'s path; still gates `P-α`'s positive side and still owns every Dimension-A value) |
| **STATUS CLARIFIED, NOT RESOLVED** | **`AC-18`** — the hazard level AD-01P stated conditionally is now unconditional |
| **NEW** | **`AC-32`** — whether any separate anti-abuse control should exist at all |
| **CHECKED FOR AN EFFECT AND FOUND TO HAVE NONE** | **`AC-6`** (no fourth boundary consumer) · **`AC-8`** (no new timezone operand) · **`AC-15`**/**`AC-20`** (the clash MECHANISM is untouched) · **`AC-26`** (the owner's own scenario is a FIRST grounding use) · **`AC-27 … AC-31`** (the override mechanism's internals) · **`AC-30`** (volume, not admissible outcomes) |
| **UNCHANGED — CHECKED, NOT SKIPPED** | **`AC-2`, `AC-3`, `AC-5`, `AC-7`, `AC-9`/`T-9`, `AC-10`, `AC-11`, `AC-12`, `AC-13`, `AC-16`, `AC-17`, `AC-19`, `AC-21`, `AC-22`, `AC-23`, `AC-24`, `AC-25`** · **`AA-1 … AA-5`** · **`AB-1`, `AB-2`, `AB-3`** · **`T-1`, `T-3`, `T-5`, `T-6 … T-11`** · **`Q10`**, **`Q11`** (still BLOCKING) · **`V-4`** (ninth document), **`W-1`**, **`Y-1`, `Y-3`, `Y-4`, `Y-5`**, **`Z-2`, `Z-5`**, **`M-5`**'s uniqueness half, **`M-9`** |
| **STILL CLOSED, NOT REOPENED** | **`AC-4`** (AD-01P) |
| **NOT ANSWERED** | **`Q0-a`**, **`Q0-b`**, **`Q0-e`** — **`Q0-e`'s list is now `A-1 … A-47`**. **`Q0-d` stays OFF the critical path** |

---

## 6. Recommendation

> ⟦ARCHITECT RECOMMENDATION — advisory only⟧ *(This is a recommendation about **SEQUENCE and READINESS**. It
> is **NOT** an approval, **NOT** a self-authorization, and **NOT** permission to build anything. ⟦SOURCE⟧
> **§88** places this decision in the **CP commission logic** and **audit requirements** MUST-ASK columns.
> **Delegation to an architect is not authorization.** Per CLAUDE.md: assigning work to `architect` does not
> satisfy the §88 layer, and nothing in [§3](#3-the-determinations), [§4](#4-the-amendment-register) or
> [§5](#5-remaining-open-items) becomes approved by having been written.)*

### **VALIDATE**

**Not BUILD NOW. Not BUILD LATER. Not REJECT.**

**Why not REJECT.** ⟦PRODUCT-OWNER DECISION⟧ **The decision is the Project Owner's, it is internally
coherent, it is compatible with every approved decision in the chain, and it CONTRADICTS NOTHING** —
[§3.4](#34-determination-4--no-existing-rule-is-contradicted). **It closes the item that stood at the top of
the register through two consecutive documents, discharges a contradiction that had been live since AD-01N,
takes `N-4` permanently off the grounding rule's critical path, and requires only three amendments — the
smallest amendment count in the CP sub-series.** **It also does what the architect could not: it supplies the
SCOPE that `L-6`'s claim of necessity required, which AD-01P said in terms was the owner's alone to give.**

**Why not BUILD NOW.** ⟦ARCHITECT ANALYSIS⟧ **Because ONE gate closing out of NINE does not make an
architecture buildable, and the eight that remain are the ones that decide what gets built.**

- **AD-01Q's gate 1 is DISCHARGED. Gates 2 through 9 are UNTOUCHED by this decision and every one of them is
  still an owner answer.** **This document reached exactly one of them, which is the one it was written to
  reach.**
- **`P-G` — the rule whose operand set this decision confirms — is ITSELF STILL AN ARCHITECT DERIVATION AND
  STILL UNRATIFIED**, together with `C-XVI`, `C-XV`, `PF-6` and `PF-23`. **AD-01P gate 2 had six limbs;
  `PO-Q2` discharged one; `PO-R1` discharges NONE of the remaining five.** ⟦ARCHITECT ANALYSIS⟧
  **Confirming a rule's operands is not approving the rule. The owner has now ruled on what `P-G` step 3
  reads while `P-G` itself remains unapproved, and reporting that as readiness would be the clearest
  possible case of the error AD-01B §4 warns against.**
- **AD-01Q's own seven derivations — `Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, its minimum field set and
  its permission — are ALL STILL UNRATIFIED, and `Q-AR` remains OWNER-RATIFIED AND NOT YET SATISFIABLE.**
- **`AC-15`/`AC-20` — CP-vs-CP precedence — are unanswered for a FIFTH consecutive document, and this
  decision makes more registration-grounded claims reachable without saying anything about how two of them
  resolve against each other.**
- **`AC-25`, `AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11` (BLOCKING), `AC-6`, `AA-2` and
  `AC-21` with `M-5`'s uniqueness half are all untouched**, and **`AC-27 … AC-31`** are untouched.
- **Forty-seven amendments stand NAMED AND NOT MADE across eleven documents.**

**Why not BUILD LATER.** ⟦ARCHITECT ANALYSIS⟧ **Because *later* implies the blockers need further ANALYSIS,
and they do not. Every remaining gate is a one-sentence answer from the Project Owner. A further architect
document would be analysis substituting for a decision — AD-01L's own words, applied now for the sixth
time.** **And shelving would waste what this answer has bought: a register row closed for the first time on a
direct owner ruling, a four-document contradiction discharged, `N-4` off the critical path for good, and
`L-6`'s scope determined by the only party who could determine it.**

### 6.1 The gating list after this decision

> ⟦ARCHITECT ANALYSIS⟧ **AD-01Q's nine-item list, restated with gate 1 discharged and NOTHING ELSE CHANGED.
> Eight items. Every one is an owner answer. NONE is answered here and NO default is implied for any of
> them.**

| # | Gate | Status |
|---|---|---|
| **~~1~~** | ~~`AC-14` — does a registration whose inquiry was closed as never a real opportunity remain usable~~ | ⟦PRODUCT-OWNER DECISION⟧ **DISCHARGED. ANSWERED YES — Option A. LOCKED** → `A-45`, `A-46`, `A-47` |
| **2** | **`C-XVI` (with `A-39`'s fourth corollary), `P-G` (with `A-38`(b)'s seventh step), `C-XV`, `PF-6` and `PF-23`** — the five limbs of AD-01P gate 2 that `PO-Q2` did NOT discharge and that `PO-R1` does NOT discharge either | **ALL ARCHITECT DERIVATIONS. ALL UNRATIFIED. NOW GATE 1** |
| **3** | **`Q-OV`, `C-XVII`, `C-XVIII`, `C-XIX`, `Q-AR`, AD-01Q §3.3's minimum field set and §3.4's permission** | **ALL UNRATIFIED.** `C-XVIII` carries the governance consequence |
| **4** | **`AC-27`** — may one individual perform both overrides on one outcome | **NOT ANSWERED** |
| **5** | **`AC-30`** — what an override's decision may SAY | **NOT ANSWERED** |
| **6** | **`AC-29`** — until when may an override be performed | **NOT ANSWERED** |
| **7** | **`AC-28`** and **`AC-31`** — the evidence asymmetry; who the auditor is | **NOT ANSWERED** |
| **8** | **`AC-25`** (first half) · **`AC-15`** and **`AC-20`** (a FIFTH consecutive document) · **`AC-12`** as enlarged | **NOT ANSWERED. No precedence is invented** |
| **9** | **`AC-26`, `AC-22`, `AC-24` with `AC-9`/`T-9`, `AC-23` with `Q11`, `AC-6`, `AA-2`, `AC-21` with `M-5`'s uniqueness half** — AD-01P's operand questions · **`AC-32`** joins this tier as a VALIDATE / BUILD-LATER consideration | **NOT ANSWERED, and NONE reached by `PO-R1`.** `Q11` still BLOCKING |

**What VALIDATE means concretely.**

1. **Take gate 2 first** — it is now the head of the list, and `C-XVI` is its head in turn.
2. **Then gate 3** — AD-01Q's seven derivations. **Gates 2 and 3 are one sitting, because `A-38`(b) and
   `A-39` are extensions of `P-G` and `C-XVI` and are meaningless ratified apart from them.**
3. **Then gates 4–8 in the commercial sitting that SEVEN consecutive documents have now recommended** —
   AD-01L §15, AD-01M §14, AD-01N §M, AD-01O §5.5, AD-01P §6.1, AD-01Q §6.1 and this section.
4. **`AC-32` is explicitly NOT on the critical path and must not be allowed to delay any of the above.**
   ⟦PRODUCT-OWNER DECISION⟧ **`PO-R1` is locked whichever way `AC-32` is answered.**
5. **Ratify or reject `A-45 … A-47` alongside `A-1 … A-44`** (`Q0-e`). **Forty-seven unmade amendments
   across eleven documents.**
6. **Nothing may be built meanwhile that presupposes an answer to any remaining gate.** ⟦SOURCE⟧
   consolidated **§30**. **Everything AD-01P §6.1(4) and AD-01Q §6.1(5) list as NOT-TO-BE-BUILT remains
   not-to-be-built, and this decision adds to that list: no anti-abuse control, cap, cadence rule, gap rule,
   ratio, quality score, standing, tier, flag, badge, marker, alert, review queue, escalation, automatic bar
   or forfeiture of any kind, on a CP, a registration, a claim, an Inquiry or a work record.**

### 6.2 The one next question

> ⟦BUSINESS DECISION REQUIRED — ONE QUESTION, AND ONLY ONE⟧
>
> **This is gate 2's head — `C-XVI` with `A-39`'s fourth corollary — stated in the same plain register the
> owner has been answering in. It is the single highest-priority remaining item, and it is asked alone
> because a list of several is how a gating list stops being taken.**
>
> > **"When a channel partner's claim rests on their registration rather than on their having actually
> > brought the enquiry, that claim has to be judged exactly like any other claim — it can be argued
> > against, and it can lose.**
> >
> > **Do you confirm that a registration-backed claim gets NO head start, NO benefit of the doubt, NO
> > automatic win when nobody else has claimed, and NO extra protection once it has won — or do you want a
> > registration-backed claim to carry some weight of its own?"**
>
> ⟦ARCHITECT ANALYSIS⟧ **Why this one, and not another.** **`PO-R1` has just made registration-backed
> claims reachable in a configuration that was previously undecided. `C-XVI` is the rule that keeps every
> such claim ordinary, and AD-01P called it *"the single most important ratification in the document"*
> because *"without `C-XVI`, `PO-P1` and Reading G are observationally identical in every case where no
> competing claim exists."* **The more registration-backed claims the architecture admits, the more of the
> commercial outcome rests on `C-XVI` — and `C-XVI` is still unratified.** **Nothing in this document
> weakens `C-XVI`, and nothing in this document ratifies it either.**

---

## Closing note

**STATUS: PROPOSED — NOT APPROVED. RECONCILIATION — ADVISORY. NOT AN APPROVAL TO IMPLEMENT.**

**This document is a reconciliation and a recommendation, not a decision and not an approval.**
[§6](#6-recommendation)'s **VALIDATE** is **advisory.** **Nothing here is self-authorizing, and being asked
to record a Product-Owner answer is not permission to build what it implies.** ⟦SOURCE⟧ Spec **§88**: CP
commission logic, source-of-truth rules and audit requirements are **MUST ASK BEFORE DECIDING**; *"inventing
business rules"* is **MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION**. ⟦SOURCE⟧ Consolidated **§30**: *"No
schema/code implementation should be inferred from an unresolved product ambiguity."*

**THE LOCKED RULE, STATED ONCE MORE BECAUSE IT IS THE WHOLE POINT OF THE DOCUMENT.** ⟦PRODUCT-OWNER
DECISION⟧ **`AC-14` = Option A is a locked Product Owner business rule.** **A currently-valid CP Project
Registration remains valid and usable for its full registration window even if an earlier Inquiry associated
with it was closed on the INVALID side. The closure does not consume it, does not invalidate it, does not
move its immutable date, does not change its snapshotted window, resets nothing, and creates no new
registration. A later genuine Inquiry from the same registered Client for the same Project, inside the
window, MAY be grounded on it — subject to the normal attribution and clash-resolution process, and still
NOT automatic attribution, NOT an automatic clash winner and NOT automatic commission eligibility.** **The
decision is NOT re-argued, NOT weighed, NOT ranked, NOT hedged and NOT softened anywhere above.** It is
recorded **verbatim** at [§1.2](#12-the-decision-recorded-verbatim-before-any-analysis) as
`PO-R1·a … PO-R1·g` and `PO-R2`, **before any analysis touched it.**

**SIX OF THE OWNER'S SEVEN CONSEQUENCES WERE ALREADY TRUE AND ARE CONFIRMED; ONE THING IS GENUINELY NEW.**
⟦ARCHITECT ANALYSIS⟧ **The new thing is exactly this: the closure classification of a prior Inquiry on the
same work record is NOT an operand of the grounding test and does not become one. That is the selection of
the `(L-6·ground)` reading, which AD-01P and AD-01Q had already characterised in full — and it is why this
document adds no entity, no record, no field, no state, no mechanism, no constraint and no contradiction.
`I-9`'s no-new-entity standard is MET, which AD-01Q had to report it was not.**

**THE ANTI-ABUSE TRADEOFF IS RECORDED AND IS NOT SOLVED.** ⟦PRODUCT-OWNER DECISION⟧ **`PO-R2`.** **The abuse
shape is stated concretely and as an ACCEPTED COST at
[§3.3](#33-determination-3--the-anti-abuse-tradeoff-recorded-and-not-solved), with every already-established
rule that bears on it listed WITH ITS LIMIT ATTACHED — `L-13`'s hazard finding, the registration's own audit
trail, the mint's audit trail, `PO-P4`/`C-XVI`'s requirement that every minted claim win a §11 adjudication,
and `Q-OV` as a per-case discretionary corrective that `C-XVIII` forbids becoming a rule. `Q-AR` is
explicitly recorded as contributing NOTHING to this, because the closure is not an input to the decision it
reconstructs.** **NO anti-abuse mechanism, threshold, cadence, cap, ratio, score, flag, alert, review step or
detection rule is invented, proposed, designed, ranked or implied anywhere.** **Whether any control should
exist at all is `AC-32`, a SEPARATE future Product-Owner decision, explicitly out of scope, and expressly
NOT a route back to `AC-14`.**

**NO EXISTING RULE IS CONTRADICTED, AND THE SEARCH WAS RUN RATHER THAN ASSERTED.** **`C-XI` NOT BREACHED —
the registration still only PROTECTS a window and SUPPLIES a ground; it never itself attributes. `C-XV` and
`C-XVI` NOT BREACHED — no result is cached on the registration and no registration-grounded claim gets a
privileged path. `B-1` NOT BREACHED — and the distinction is WORKED and not assumed: the registration is a
SEPARATE RECORD from the Inquiry, and `PO-R1` is a rule about the ABSENCE of an effect, so a rule saying
*"this changes nothing"* cannot breach a rule saying *"this must change nothing."* `NF-9` is doing the same
work one configuration further out. `B-2` NOT ENGAGED and its closure-grounded branch NOT answered. `L-6`
NOT reopened, NOT narrowed, NOT ratified and NOT rejected — its SCOPE is determined, and
`(L-6·engagement)` is FORECLOSED rather than merely unchosen, because it is clause-by-clause incompatible
with `PO-R1`.** **NO new contradiction is minted; the `X` series stands at `X-25`. `X-5` is DISCHARGED.**

**WHAT CLOSED, AND WHAT DID NOT.** **CLOSED: `AC-14`, and `Q0-c` with it — the first item in this series
closed by a direct Product-Owner ruling rather than by an architect derivation. DISCHARGED: `X-5`.
CONFIRMED a third time: `X-6`. NARROWED BUT NOT CLOSED: `AC-1` and `N-4`. STATUS CLARIFIED ONLY: `AC-18`.
NEW: `AC-32`.** **EXPLICITLY UNCHANGED AND CHECKED INDIVIDUALLY: `AC-15`/`AC-20` (the clash MECHANISM is
untouched), `AC-26` (the owner's own scenario is a FIRST grounding use, and reading *"does not consume"* as
*"may be used without limit"* would widen an owner clause), `AC-27 … AC-31`, `AC-6`, `AC-9`, `AC-21`,
`AA-2`, and every other open item in the register.** **`AC-4` stays CLOSED. `L-13`'s hazard is UNAFFECTED as
a finding and is accepted as a cost.**

**Three amendments are NAMED and NOT MADE — `A-45` (AD-01P's *"neither reading selected"* framing), `A-46`
(AD-01Q's `AC-14`-open framing and gate 1), `A-47` (AD-01N's `X-5` re-labelling and the closure-blindness
status upgrade) — and `A-32` is CONTENT-DETERMINED, NOT RENUMBERED and still NOT MADE.** **No prior document
is modified.** AD-01 … AD-01Q are all **unedited**, and
[§4.3](#43-no-prior-document-was-silently-edited) states that as a **checked fact** against the repository's
own working tree rather than as an intention. **The register stands at `A-1 … A-47` across ELEVEN documents.
AD-01N, AD-01P and AD-01Q remain at `VALIDATE` and are not approved; AD-01O remains advisory and is not
approved.**

**No SQL, schema, migration, master value, column, table, index, constraint or type is authorized by
anything above. No screen, workflow, approval step, queue or gate is designed** (AD-01A §8.5). **No
commission formula, rate, slab, percentage, amount, milestone value, clawback quantum, passback rule or TDS
treatment appears anywhere — `M-9` owns all of it, and it still cannot start. No lock-in number is proposed.
No boundary convention is selected. No precedence rule between two CPs is invented. No re-registration
cadence, minimum gap or cap is invented. No Dump-reason value is proposed. No anti-abuse control of any kind
is invented.** **`Q1`, `Q4`, `Q6`, `Q7`, `V-1`, `V-2`, `V-3`, `V-7`, `V-11`, `V-12`, `J-2`, `K-18`, `K-22`,
`K-26`, `T-5` and `L-6` are NOT reopened — and `K-18` is CONFIRMED for a FIFTH consecutive document, with
AD-01K amended NOWHERE for a THIRD.**

**The Project Owner's decision is the only authority in this document. Everything else awaits their
signature.**
