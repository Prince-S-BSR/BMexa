STATUS: PROPOSED — NOT APPROVED

# AD-01AL — Exhaustive Corpus Mining: Every Remaining Open Question Checked Against the Gemini Corpus

| | |
|---|---|
| Document type | Architecture governance record. It is an exhaustive evidence pass, not a decision reconciliation. The whole current open register (65 counted clusters, their homed residual limbs, the open contradictions and three PO-review flags) is walked against the Gemini conversation corpus. Every genuine PO answer found is marked **PO Answered**, which is the label the PO asked for. |
| PO instruction (relayed verbatim by the orchestrating session) | *"try to find answers of all open and unresolved questions in these files and if you found anything mark it as PO Answered. check all partially resolved, unresolved and untouched question. and find their answers."* |
| Relationship to 03aj / 03ai / 03ah | This document **extends** `03aj-…` (the immediate baseline), which extends `03ai-…` and `03ah-…`. None is replaced, and every identifier is preserved. 03ah read the corpus in full, but it built its GC register (GC-1…GC-54) only for the questions then on the critical path, and its limitation **L-4** expressly declined to reclassify any carried cluster on corpus evidence. This document lifts L-4 **on the PO's explicit instruction**. |
| Tracking | Beads `Final-Verison-1mh` (P0, in progress). This document creates no Beads issues. |
| Date | 2026-09-30 |
| Status line meaning | `PROPOSED — NOT APPROVED` applies to the architect analysis. A corpus quotation is the PO's own words. It is marked **PO Answered** only where the PO is the speaker **and** the words address the question's subject. Classifying a quotation as fully or partially answering a question is still an architect reading, pending the PO's approval of this document. |
| Files changed | This file only. No schema, migration, code, test, Beads, Spec, requirements or earlier architecture file was edited. `packages/db`, `apps/api` and `apps/web` were not touched. |

---

## How to read this document

**Carried vocabulary.**
- The decision-status vocabulary and the reconciliation classes are carried unchanged from 03ah, 03ai and 03aj: `PO LOCKED`, `PARTIAL`, `ARCHITECT-DERIVED`, `OPEN`, `UNTOUCHED`, `SOURCE VERIFICATION REQUIRED`, `VALIDATE-OPEN`, `DISCHARGED (SATISFIED)`; `SUPERSEDED`, `NARROWED`, `CLARIFIED`, `UNRESOLVED CONTRADICTION`, `APPARENT CONFLICT (SCOPE)`.
- 03ah's renames continue (Site Head, Accounts, Builder-Side Admin, CRM as a department), and so does 03ai's notation (`SH@P`, `PH@P`, `Tree(x)`).

**The PO's requested label, and its three sub-statuses.**

| Label | Meaning here |
|---|---|
| **PO Answered — fully** | A PO turn in the corpus answers every limb of the item. No newer PO text on the same subject contradicts it. |
| **PO Answered — partially** | A PO turn answers at least one limb. The limb or limbs still open are stated exactly. |
| **PO Answered — contradicts** | A PO turn answers the item, but conflicts with other PO text that neither side states it updates. It is flagged; **the architect does not choose**. |
| **No answer (checked)** | Searched, and no PO turn addresses the item's subject. Any corpus text that merely bears on the item is recorded as *evidence*, not as an answer. |

**The one discipline that governs every row.**
- Only the PO's own words, in a turn where the PO is the speaker, count as an answer.
- Gemini's questions, proposals, summaries and "locked" language are `ARCHITECT-DERIVED`. This follows 03ah §2.1 step 3 and §2.6.
- Silence after a Gemini proposal is **not** adoption.
- An **explicit** PO selection of a worded option ("option B", "yes", or a restatement of the option) **is** a PO answer, **limited to what the selected option's words say**. 03ah treated GC-6, GC-34 and GC-42 this way.

**Age of every corpus answer.** Every corpus PO statement is dated 2026-09-04 to 2026-09-12 (03ah §1.2). That makes it older than:
- the Master Spec and the consolidated requirements;
- the 03-series decisions;
- the handoff;
- `PO-AI1` and `PO-AJ1`.

A corpus answer therefore governs only where no newer PO text speaks to the same subject. Every finding below is checked against newer locked text for exactly that.

**Layer-2 warning (applies to every finding).**
- Several PO Answered items fall inside CLAUDE.md Layer 2 (Master Spec §88): CP commission logic (AC-48), authorization (AG-Q-11(f)), audit requirements (J-1, J-10) and source-of-truth rules (Q3, Q10).
- A PO Answered mark records what the PO said. **It does not authorize implementation.** Delegation to an architect is not authorization.
- Because each of these answers pre-dates the handoff, working rule 15 still applies: the PO should confirm an earlier answer before it is built on.

**Identifier discipline.** Every 03ah, 03ai and 03aj ID is preserved. New in 03al:
- `PA-1`…`PA-13`: PO Answered findings (§3).
- `GC-55`…`GC-64`: corpus PO decisions that the GC register missed (§3.6).
- `NI-27`…`NI-29`: new issues.
- `LC-28`: a new ledger confirmation.
- `C-AL-1`, `C-AL-2`: citation corrections.
- `G-23`…`G-25`: change-register entries.

**Where each required element is.**

| Requirement (commissioning brief) | Location |
|---|---|
| 1. Source and scope statement; corpus identity; what was read, and why | §1 |
| 2. The compiled current open register, with where each item stands | §2 |
| 3. Findings by category | §3 |
| 4. Cluster-count arithmetic against 03aj's 65 | §4 |
| 5. Contradiction and issue register update | §5 |
| 6. Exactly one next PO question | §6 |
| Effect on readiness; change register; validation | §7, Annexes A–B |

---

## 0. Summary

1. **Corpus identity confirmed, and the extraction reused** (§1).
   - The upload holds 10 JSON exports: five distinct conversations, each uploaded twice (identical MD5 pairs), plus one `.docx`, the consolidated requirements document that is already in the repository.
   - The raw chunk counts are 35, 153, 159, 269 and 415. They match the extraction exactly.
   - 03ah's branch-structure claim was **re-verified by chunk-hash comparison**, not taken on trust. It holds, with one small correction (C-AL-1).
2. **Reading method.**
   - Every substantive PO turn in the superset lineage was read in full: 171 turns, plus chunk 2 (the superset has 184 user turns and about 485,000 characters of PO text in all). Each turn was read with the tail of the Gemini prompt it answered, so as to see what it answers.
   - That includes chunk 2, a 218,000-character pasted earlier conversation with no role markers. Its PO passages were identified by content and read in full.
   - The ten persona-prompt and pasted-output turns were swept by keyword. They contain question templates, not decisions.
   - Every divergent tail of the other four files was read directly.
3. **74 question units were checked** (§2.4):
   - 68 cluster-level units: the 65 counted clusters, with AG-Q-6 and AG-Q-11 split into their five homed residual limbs;
   - 3 contradiction checks (AGX-10, AGX-11, AGX-12);
   - the 3 Phase-1 PO-review flags (J-1, J-7, J-10).
4. **13 are newly PO Answered** (§3.1–§3.2): **1 fully** and **12 partially**. The corpus text behind them is quoted verbatim, with chunk, line and date.

   | ID | Item | Status | One line |
   |---|---|---|---|
   | PA-1 | **Q12** lead-portal integrations | **Fully** | C123: Facebook, Google, 99acres and MagicBricks integrations as lead sources, with a marketing report by integration |
   | PA-2 | **AC-48** tranche "paid" boundary | Partially | C61 (GC-9, re-read): "paid" is the Accounts marking of the CP bill. **"Credited" and "cheque prepared" are alternative payment modes, not sequential stages** |
   | PA-3 | **AG-Q-11(f)** Helpdesk / Sales Support placement | Partially | Helpdesk sits in Sales, under each project's sales head (chunk 2). Sales Support reports to the CRM Head (C272, newer than C173) |
   | PA-4 | **Follow-up notification cadence** (03af, carried) | Partially | C162 → C165 → C167: T−2 min, T, then reminders every two hours; manager and rep notified at the 4th pending reminder. `PO-AF1·N.3` itself says "unless already resolved elsewhere" |
   | PA-5 | **Q8** pending-enrichment queue | Partially | C380, C383, C386: build the Helpdesk dual-queue "Pending Enrichment"; the receptionist types; the rep owes the data |
   | PA-6 | **Q9** lead score | Partially | C199: *"Yes, do this confidence scoring automatically lead quality score"* (a CP-transfer guardrail) |
   | PA-7 | **Q3** imported lead | Partially | C203, C191: an import lands New + Unassigned unless an assignment rule is applied at upload; the Site Head bulk-assigns |
   | PA-8 | **Q2** long-dated follow-ups | Partially | C165, C191: the Future tag, a reminder at the scheduled time, and remark search for undated re-contact. No cap is stated |
   | PA-9 | **Q10** duplicate merge | Partially | C117, C205, C213, C317, chunk 2: merge into the original record and alert its owner; never force-merge persons; keep every claimant |
   | PA-10 | **V-24** other-project visibility | Partially | C175, C282: an existing-customer marker (project) only; no unit details (C282 is newer) and no prior conversation |
   | PA-11 | **Y-4** Success and queue behaviour | Partially | C282: the purchase stops prospect follow-up; a new-project inquiry makes the customer "again a lead", with an existing-customer badge |
   | PA-12 | **J-1** content retention after a deleted audit record | Partially | C302 (GC-46): system-wide soft delete, *"permanently keeping it in the database for the CEO and Auditors"* |
   | PA-13 | **J-10** archive then drop | Partially | Chunk 2, GC-6: the PO chose "move to cold storage … retrieve if legally required for an audit". The partition drop is Gemini's wording, not the PO's |

5. **One item is PO Answered but contradicts, and it is carried unchanged: AH-Q-1.**
   - GC-42 (C267: *"Yes, block the self-approval"*) conflicts with the earlier bundle's §B.19, which is known only in abridged form (AGX-13).
   - The corpus holds **no newer PO text**, so the contradiction cannot be reconciled from it.
   - GC-42 does supply two sub-answers that 03ah did not record (§3.3).
6. **AGX-12 was independently re-verified as discharged** (§3.4).
   - C249's binary and the PO's *"Automatically managed."* were re-read.
   - `PO-AJ1·9` is the same subject, explicit, opposite and newer, so S-20 stands.
   - The ledger-shape residual is record content inside AG-Q-6(i), as 03aj said.
7. **AG-Q-6(i), the NOC, is not answered by the corpus.** "NOC" occurs in exactly two chunks of the whole corpus: 247 (PO) and 248 (Gemini). GC-36 remains the only PO text on it. That text addresses mechanism and quantum, not what BMexa holds.
8. **The other 59 units were checked and confirmed open** (§3.5). Among them:
   - AI-Q-1, AI-Q-2, AJ-Q-1, AG-Q-16 (its three labels appear nowhere in the corpus), V-4 FUT, W-1, W-4, V-10, AC-58, AG-Q-10, AC-53, T-4/T-5;
   - AG-Q-6(i); J-7 (evidence recorded, NI-29); and AGX-10 and AGX-11.
9. **Count: 65 falls to 64** (§4).
   - Q12 is fully answered and leaves the count.
   - Eight untouched clusters move to partial, which does not change the count.
   - Under the stricter "earlier answer must be confirmed first" method (03ah L-4, working rule 15), the figure stays **65**. With 03aj's stricter homing alternatives it is **67**.
10. **No new unresolved contradiction.**
    - Three new issues: NI-27 (clash-badge visibility against the Project Head as step-7 decision-maker), NI-28 (the Sales Support reporting line is not department membership), and NI-29 (J-7's interim against GC-22 and ACG-5).
    - One new ledger item: LC-28.
    - Three internal corpus drifts, each settled by date: C173 → C272; C175 → C282; C162 → C165 → C167.
11. **The next question is unchanged: AG-Q-6(i)**, asked verbatim as 03aj §7.2 asked it (§6).
    - This pass found no corpus answer to it. It still has no safe default, and it is still upstream of the CP Ledger's remaining shape.
    - The #2 item, AC-48, has moved from a question to a confirmation (PA-2).

---

## 1. Source and scope

### 1.1 Corpus identity

| Check | Result |
|---|---|
| Upload directory | `/root/.claude/uploads/c3deec70-5818-56e7-b63a-76606186e09a/`: 11 files |
| JSON exports | 10 files, forming **5 identical MD5 pairs**: `a8177dce…` Main Branch; `0d8e9e93…` Branch 1; `5fa05d69…` Branch 1 of Branch 1; `308101b9…` CPO Final Assessment; `a56e7379…` Branch of CPO Final Assessment. The byte-identity to the AD-01AH upload was verified by the orchestrator and is relied on |
| Raw chunk counts (parsed from `chunkedPrompt.chunks`) | 35 / 153 / 159 / 269 / 415, **matching** the extraction's chunk map |
| The `.docx` | `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.docx`. This is not a Gemini export. It is the source of the repository's consolidated requirements document, is outside the corpus, and was not re-mined |
| Extraction reused | `…/scratchpad/gemini_export/*.md` and `…/scratchpad/chunkmap.json`, both from AD-01AH. No re-extraction |

### 1.2 Branch structure: re-verified, not trusted

Chunk hashes in `chunkmap.json` were compared for every file against the superset (`branch-of-cpo-final-assessment.md`, 415 chunks). The chunks that differ are:

| File | Differing chunks | Content (read directly) | PO decision? |
|---|---|---|---|
| `main-branch.md` | 7, 32, 33, 34 | 7: an image reference (the superset's chunk 7 is empty). 32: an empty model turn. 33: Gemini thought. 34: a regenerated Gemini reply (2026-09-25) citing the build plan "version 2.0 … 25 August 2026" and re-asking the builder-versus-broker question | **None** |
| `branch1.md` | 149, 151, 152 | 149 (PO): *"can you read this file?"* 151 (PO): a request for a summary document. 152: an empty model turn | **None** |
| `branch1-of-branch1.md` | 158 | Identical to the superset's chunk 158 **apart from the trailing `---` separator** (unified diff: 2 lines added) | None new |
| `cpo-final-assessment.md` | 268 | Identical to the superset's chunk 268 apart from the trailing separator | None new |

**C-AL-1 (citation correction to 03ah §1.2 and to the brief).**
- `branch1.md`'s chunk 150 has the **same content hash** as the superset's chunk 150. Both are empty model turns; only the header timestamp differs.
- The content unique to `branch1.md` is therefore chunks **149, 151 and 152**, not 149–152.
- This affects no finding.

**Consequence.** 03ah's structural claim stands: there is one decision lineage, and it lives entirely in the superset.

### 1.3 Reading method

| Material | Treatment | Why |
|---|---|---|
| The superset's **184 user (PO) turns**, less chunks 0 and 1 (Drive references), chunk 2 and the 10 template turns below: **171 turns**, several of them Drive references | **Read in full**, in chunk order. Each was paired with the last 1,100 characters of the preceding Gemini turn (the question it answers) | Only PO words can answer. The question is needed to know **what** a PO turn answers |
| **Chunk 2** (218,000 characters; a pasted pre-09-04 conversation with no role markers) | **Read in full** after compaction (4,856 non-blank lines). PO passages were identified by content: the numbered master prompts, the `Answer:` lines, the short option choices and the PO's corrections | It holds the earliest PO answers (GC-1…GC-6) and was a known home for some residuals |
| Turns **4, 159, 169, 215, 241, 257, 269, 324, 412** (persona prompts) and **407** (a pasted Gemini response) | **Keyword-swept** (NOC, clawback, transfer, self-approval, helpdesk, sales support, site/project head, price list, retention, delete, archive, cancellation, department, approval). The hits were read | They are question templates. Their role tables are prefixed *"Potentially"* and filled with `?` cells, so they carry no decisions. 03ai §3.7 reached the same finding |
| Gemini turns | Read only as context for the PO turn that follows them, and to separate Gemini's wording from the PO's (J-10, Q9, Q8) | The discipline |
| Divergent tails of the other four files | Read directly (§1.2) | Required by the brief |

**Targeted confirmation greps** were run over every PO turn after the full read, for the items where absence is itself the finding:
- AG-Q-16's three labels;
- NOC and recovery wording;
- the Project Head → Project Head transfer; more than one Site Head or Project Head per project;
- self-approval;
- pricing on a unit change;
- department membership.

### 1.4 Limits

| ID | Limitation |
|---|---|
| **L-AL-1** | The 39 inaccessible Drive items (03ah §1.4) remain inaccessible. No finding depends on them. The PO's own text around each was read |
| **L-AL-2** | The ACG "Option 1/2" texts and the earlier bundle's §B.19 are still unavailable (03ah L-1, L-7). Any finding that meets them (AH-Q-1, J-10) is bounded accordingly |
| **L-AL-3** | Voice-typing artefacts are read as found and never corrected silently. Examples: "general partner" for *channel partner*, "sales sports" for *sales support*, "VVP" for *VP*, "post-merge" for *force-merge* |
| **L-AL-4** | The unbanded families (U-, T- other than T-4/T-5/T-6, M-, N-1, N-3, Q0-, AC-2…AC-49 residue) are outside the counted register. They were not mined, exactly as in every prior round. They remain un-de-duplicated |

---

## 2. The compiled current open register (Step 1 output)

Compiled from 03aj §3.5.2, §5.3 and §7.5; 03ai §4.5 and §5.2; 03ah §3.3, §3.4 and §3.5 and Annex C; 03ag §6.2; AD-01AG §6.3 (the source of the "55-row" carried table); 03af §13.3a; and 03ak §8.

**Mapping note.** AD-01AG §6.3's 55 rows became 03ag §6.2's 54. Repo AC-57 was resolved; V-10, W-1 and W-4 moved to partial; AC-50, AC-53, T-4/T-5 and N-2 were re-banded. The "55-row table" the brief names is therefore checked here in its **current 54-row form** plus the partials it fed.

### 2.1 Partial clusters (9) and their open units

| Cluster | Open unit(s) | Current standing (where) |
|---|---|---|
| **AG-Q-6** | (i) what BMexa holds about an offline NOC recovery; **AJ-Q-1** (Unit B price-list and discount basis) | 03aj §3.4, §3.6, §5.2 |
| **AC-48** | When a staged tranche counts as "paid" (the switch between revocation and offline recovery, NI-25) | 03ah §4.2; 03aj §4.3 NI-25 |
| **V-4** | The FUT limb; the FUT consequences of W-1 and W-4 | 03ah §4.3 |
| **Repo AC-58** | (a) a Success not undone within 5 s; (b) undoing an offline-captured Dump | 03ah §4.4 |
| **W-1** | Activity-to-project association for other consumers; a per-project FR milestone | 03ah §4.5 |
| **W-4** | Which source is "linked"; a per-source FR; the relation to the lead-creation clock | 03ah §4.6 |
| **V-10** | Background jobs; offline caches; derived surfaces | 03ah §4.7 |
| **AG-Q-10** | Whether "approval history" includes the reassignment history | 03ah §4.8 |
| **AG-Q-11** | **(f)** Sales Support and Helpdesk placement; **AI-Q-1** (the PH → PH anchor); **AI-Q-2** (cardinality and succession) | 03ai §4.5, §5.2 |

### 2.2 Open new clusters (2)

| Cluster | Standing |
|---|---|
| **AG-Q-16** | Are "New client transferred", "Client Transferred" and "Customer Transferred" one system activity or several? OPEN (03ah §4.10) |
| **AH-Q-1** | Self-approval. UNRESOLVED CONTRADICTION AGX-13 — SOURCE VERIFICATION REQUIRED (03ah §3.5, Annex C.2) |

### 2.3 Carried clusters (54), as 03ag §6.2 and 03ah §3.4 record them

| Group | Items (question text from the owning document) | Owner doc |
|---|---|---|
| Touched, not answered (2) | `AC-50` (where Success attaches in a multi-project Inquiry; disposition without removal); `N-2` (the waiting-on qualifier; escalation suppression) | 03ae §12.1; 03a §6.2 |
| Money (2) | `AC-53` (does a pre-Dump CP claim survive revival); `T-4`/`T-5` (CP claim reach after a lost episode, and to a repeat purchase) | 03ae §12.4; 03c §6 |
| Repo `AC-59` (1) | Success Reason values and structure | 03af §13.1 |
| AD-01AE / AC chain (8) | `AC-52` (what duplicate detection discloses to a non-holder); `AC-6` (registration boundary convention; N = 0); `AC-7`·re-basing; `AC-12` (override directionality and revocation); `AC-13` (CP portal disclosure: seven limbs plus (viii)); `AC-26` (registration grounding single-use or repeatable); `AC-42` (CP performance, nine limbs); `AC-47` (may a DIRECT booking carry CP records) | 03ae, 03aa, 03n, 03o, 03q, 03v |
| N / V / W / Y (5) | `N-4` (Dump reason values); `V-19` (response and sub-response classification; source of truth for site visits); `V-24` (§08 project scope on a multi-interest record); `W-5` (affirm that no restriction applies to I2); `Y-5` (which count is "leads") | 03a, 03f, 03g, 03h |
| AD-01 §10 (12) | `Q2` (next-action horizon; long-dated leads); `Q3` (initial state and handler of an imported lead; does import run the duplicate gate); `Q5` (Dump re-engagement: commercial limb, i.e. V-14 → T-4); `Q8` (§43 pending-enrichment queue in MVP?); `Q9` (temperature or lead score?); `Q10` (merge precedence); `Q11` (a claim against a converted lead; cut-off); `Q12` (lead-portal integrations in scope?); `Q13` (offline capture by a since-deactivated user); `Q14` (response SLAs on New and Unassigned leads); `Q15` (concurrent disposition); `Q16` (who may move a lead into a terminal state; is Dump gated?) | 03 §10 |
| AD-01F (8) | `V-3`·2, `V-6` (derived New), `V-8`·2 (the history-choice default, mandate and bulk), `V-11` (Dump: one control or two), `V-14` (new opportunity or continuation), `V-18` (does a re-inquiry count as a Capture and enter the New feed), `V-21` (temperature in scope), `V-26` (IVR and intake metadata in scope) | 03f §16 |
| W / Y / Z (10) | `W-2` (which entity is "Lead"); `Y-1` (concurrent liveness); `Y-2` (one next-action commitment); `Y-4` (does a Success change the whole record's queue behaviour); `Z-1`…`Z-6` (work mandate: end, validity-class constraint, where it appears, re-attempt outcome, closure scope, bulk intent) | 03g, 03h, 03i |
| 03af non-AC (5) | Follow-up notification cadence (`PO-AF1·N.3`/`·N.4`); §13.3a #1 (does a transfer that revives open one cycle or two); #3 (what the recoverability posture determines); #4 (Site Head removal of a project interest against view-only); #7 (the assignment → FR clock) | 03af §13.3, §13.3a |
| Day boundary (1) | `V-20`·tz / `M-6` | 03af §11.3 |

### 2.4 Other units checked

| Unit | Standing |
|---|---|
| **AGX-12** (discharged in 03aj) | Re-verify independently, as the brief requires |
| AGX-10 (R6 / Spec §06, §54 against ACG-3/4, ACG-1) | Ledger. Open |
| AGX-11 (GC-22 *"undeletable"* against ACG-3/4) | Ledger. Open |
| AGX-7 (AC-range reservation) | Governance numbering. **Not corpus-checkable**, and not counted as a unit |
| **J-1** | 03ak §8: *"The PO should confirm that retention of a 'deleted' record's content is intended (NI-9)"* |
| **J-7** | 03ak §8: `owner`/`admin` lose `audit.read`, a behaviour change to the Phase 0 seed |
| **J-10** | 03ak §8: *"No audit partition may be dropped until the PO confirms that cold archive counts as ACG-8 retention"* |

**Unit arithmetic.**

| Step | Units |
|---|---|
| Counted clusters | 65 |
| AG-Q-6 split into (i) and AJ-Q-1 | −1 + 2 |
| AG-Q-11 split into (f), AI-Q-1 and AI-Q-2 | −1 + 3 |
| Cluster-level question units | **68** |
| Contradiction checks (AGX-10, AGX-11, AGX-12) | +3 |
| PO-review flags (J-1, J-7, J-10) | +3 |
| **Total** | **74** |

---

## 3. Findings

### 3.1 PO Answered — fully (1)

#### PA-1 — Q12: lead-portal integrations are in scope

**The question** (03 §10): *"Are lead-portal integrations (listing sites) in scope? §72 names WhatsApp, email, telephony and accounting exports only."*

**PO text** (C123, 2026-09-04 13:53, superset lines 16510–16518; the PO's own "tour" of the application):

> *"… add a client whether it's using integration or it's a manual CSV file fetch or it can be add new client using add new client button … One thing I want like it will record all the APIs and I also want a report feature that how my marketing is performing like when we connected with the Facebook integration or Google integration or 99 acre integration, magicbricks integrations. So there will be a report page regarding marketing by which integration is getting more leads and it will check the lead quality status from the response type and sub-response type …"*

**Reading.** The PO names two listing portals as lead-source integrations, 99acres and MagicBricks, beside Facebook and Google. The PO also names a consumer: a marketing report by integration. That answers the scope question: **yes**.

**Against newer text.**

| Newer text | Relation |
|---|---|
| Spec §72 *"External integrations (WhatsApp, email, telephony, accounting exports) must never become a single point of failure"* | **APPARENT CONFLICT (SCOPE).** §72 is a reliability rule. Its parenthesis lists examples and is not an exclusive scope list. Nothing newer excludes lead portals |
| `ENGINEERING_RULES.md` guardrail *"no public property listing marketplace"* | APPARENT CONFLICT (SCOPE). Building a marketplace is not ingesting leads from one |
| `docs/ROADMAP.md` Phase 6, "Integrations & Public API" (*"Outline only"*) | Silent. Placing the integrations in a phase is roadmap work, not a PO question |

**Status: PO Answered — fully.** Q12 leaves the open count (§4).

**Carry-over.** AD-01's architecture note survives as architecture, not as a question: a portal feed is a sync concept distinct from §12's offline gate. It must be designed before either is built.

### 3.2 PO Answered — partially (12)

#### PA-2 — AC-48: what "paid" means for a staged tranche (C-AL-2 re-reads GC-9)

**The residual** (03ah §4.2; 03aj NI-25): *"whether a tranche is 'paid' at **cheque prepared**, at **credited**, or at another act"*.

**PO text** (C61, 2026-09-04 10:44, lines 15307–15315):

> *"When a channel partner raises a bill … That team will verify and approve the commission amount and taxations, and then it will push it to the approval person, like the sales head or VVP. **Once it's approved, it will be posted to the account, and the account will be marked as paid.** … Once approved, it will reflect on the accounts team, and the accounts team will credit that amount to the general partner account. **Sometimes they pay by physical check, so the account team will mark it as credited or check prepared. In both cases, if the check is prepared, the general partner can physically collect the check from the site office or the builder's office. If credited, that means the amount is credited to his account.** This is how I want this billing process. It's an entire manual process."* ⟨"general partner" = channel partner; "VVP" = VP⟩

**C-AL-2 (correction of 03ah §4.2's framing of GC-9).**
- 03ah read *"credited or check prepared"* as two **candidate boundaries on one timeline**, to be chosen between.
- The PO's own words describe them as **two payment modes**: a bank credit (*"credited"*) and a physical cheque (*"check prepared"*, ready for collection).
- Each is the terminal *"marked as paid"* act for its mode (*"In both cases"*).

**What is answered.**
- The act that makes a CP bill (and so a tranche, which is billed per milestone: GC-36, C389) "paid" is **the Accounts team marking it paid**.
- That marking is recorded as **credited** or **cheque prepared**, depending on the mode.
- **Consequence.** 03aj §7.1's interim default (*"Treat any tranche past 'cheque prepared' as paid"*) is **corroborated by PO text**. It no longer rests on fail-safety alone.

**What is not answered (the residual).**
- (a) The PO has not tied this corpus-era marking to the words of **AC-48** (*"before commission payment"*) or of `PO-AJ1·8`/`·9` (*"not yet been paid"*, *"already been paid"*). Working rule 15 asks for confirmation.
- (b) Whether a cheque marked *prepared* and then cancelled or never collected reverts to unpaid. C61 is silent.

**Against newer text.** AC-48 and `PO-AJ1` do not define "paid", so this is CLARIFIED and consistent. GC-37 (the auto-offset) is already superseded (S-20) and is not revived.

**Status: PO Answered — partially.** AC-48 stays PARTIAL, and its question narrows to a confirmation.

#### PA-3 — AG-Q-11(f): where Helpdesk and Sales Support sit

**The limb** (03ah §4.9; NI-2): the placement of Sales Support and Helpdesk among **Sales / CRM / Accounts / Marketing**.

**PO text on Helpdesk.**
- Chunk 2, pre-09-04, line 10598: *"… A helpdesk employee will come under the sales head of each project, as every sales project has a different helpdesk. That helpdesk work should go under that particular project head's team, **so that person will be part of that sales**."*
- Chunk 2, line 11777: *"Helpdesk do that work of registrations … Giving walk-in reports to reporting sales head/ project head, along with site staff physical attendance …"*

**PO text on Sales Support, in date order.**

| Date | Where | PO text |
|---|---|---|
| 09-04 | C123, line 16516 | *"He have to add one member for sales support team. He have to add one member for the accounts team. He have to add one member for CRM team."* (a separate team) |
| 09-05 | C173, line 18758 (GC-24) | *"sales support team have a different sales support department head … Sales VP is different, CRM VP is different, Salesforce department is different."* (a separate department) |
| 09-07 | C272, line 25180 (GC-43) | *"… a CRM Head who will report to COO and every project can have a CRM personnel, customer support team person. **We can have a Sales Support Team which will also report to the CRM Head.**"* |

**Reading.**
- **Helpdesk: answered.** It is part of Sales, under the project's sales head. That is a single, consistent PO position with no newer contradicting text. It is compatible with the handoff's four departments.
- **Sales Support: the latest corpus text wins.** C272 is newer than C173, so Sales Support **reports to the CRM Head**. The C173 → C272 drift is internal to the corpus and settled by date. 03ah had recorded it as NI-2 without resolving it.
- That is compatible with the handoff's list, which has no separate Sales Support department.

**The residual (NI-28).**
- *"Report to the CRM Head"* is a **reporting line**.
- `PO-AF1·B` and `PO-AI1` keep reporting lines, departments and roles distinct (03ai "How to read").
- Whether reporting to the CRM Head makes Sales Support users **members of the CRM department**, for AG-Q-3's replacement rule (*"any active user in the relevant department who has access to the relevant project"*), is not stated.
- If it does, a Sales Support user may replace an **L2 CRM** approver. Yet AG-Q-4 lists Sales Support as its own *optional* level. That is the consequence NI-2 named, now sharpened.

**Status: PO Answered — partially** (Helpdesk answered; Sales Support narrowed to NI-28). **AG-Q-11 stays PARTIAL**, because AI-Q-1 and AI-Q-2 are untouched (§3.5).

#### PA-4 — The follow-up notification cadence (carried 03af cluster)

**The cluster** (03af §13.3 row 21): declared `VALIDATE-OPEN` by the owner at `PO-AF1·N.3`/`·N.4`. The exact words matter:

> `·N.2`: *"the PO described a model such as: notification around the scheduled time; additional reminder(s), e.g. after 2 hours"*; `·N.3`: *"the exact notification cadence remains an architecture/configuration question **unless already resolved elsewhere**"*; `·N.4`: *"do not invent a final exact notification schedule."*

**PO text, evolving in date order.**

| Chunk | Date | Line | PO text |
|---|---|---|---|
| **C162** | 09-05 05:49 | 17749 | *"they will get notified in every 20 to 25 minutes … until you update the follow-up"* |
| **C165** | 09-05 05:59 | 17799 | *"the thing I said 20 minutes, we can change it to one hour. One notification in one hour."* |
| **C167** (GC-54) | 09-05 06:11 | 17828–17846 | *"… send a notification around 10:58 a.m. for the first notification and the second notification at 11:00 a.m. Then the system will take a break for the next 40 minutes … check every hour … If the follow-up is updated, it will not send a notification, and if the follow-up is not updated, it will send the notification at 12:00 … after two hours, it will again send a notification … 12:00, then 2:00, then 4:00, and 6:00 is the fourth reminder. **At the fourth reminder, it will send notifications to the manager and the sales representative that the follow-up is pending.**"* |

**What is answered** (C167 is the latest, and supersedes C162 and C165 inside the corpus):
- a reminder **2 minutes before** the scheduled time, and one **at** it;
- if the follow-up is still not updated, **pending reminders every two hours** (12:00, 2:00, 4:00, 6:00 for an 11:00 call), with hourly checks;
- **suppression** as soon as the follow-up is updated;
- at the **fourth** pending reminder, the **manager and the rep** are notified.

**Why this is a genuine answer and not an invention.**
- `·N.3` expressly carves out *"unless already resolved elsewhere"*.
- C167 is such a resolution, in the PO's own words.
- `·N.2`'s *"additional reminder(s), e.g. after 2 hours"* matches C167's two-hour interval.
- `·N.4` forbids the **architect** inventing a schedule. It does not reach the PO's own.

**Against newer text.**

| Newer text | Relation |
|---|---|
| Spec §58 (*"avoid notification spam … escalation for missed follow-ups, manager visibility when appropriate … only where it genuinely improves execution"*) | **NARROWED, pending confirmation.** The rule it states is compatible with C167, but it softens it |
| AC-55 (*"Manager cannot independently create/assign/reassign/manage ordinary customer follow-ups"*) | APPARENT CONFLICT (SCOPE). Being notified is not managing (LC-19, already recorded) |

**The residual.**
- (a) Whether C167 is the **default** schedule, or one configurable option. `·N.3` calls the cadence *"an architecture/configuration question"*.
- (b) A clean restatement of C167. Its 40-minute pause, hourly check and two-hourly send are voice-typed and partly redundant.

**Status: PO Answered — partially.** The cluster moves from untouched to partial.

#### PA-5 — Q8: the pending-enrichment queue is to be built

**The question** (03 §10): *"Is §43's pending-enrichment queue in MVP scope? §43 says the system 'can maintain' it — permissive, not mandatory."*

Spec §43 (line 293): *"If a field Sales Rep is responsible for enriching a lead later, the system can maintain a pending enrichment queue."*

**PO text** (in the UX Officer interrogation of 09-08):

| Chunk | Line | PO text |
|---|---|---|
| **C380** | 28074–28078 | *"after filling the basic details of client we can assign sale reps and it will go under a pending form where sales reps can help the helpdesk to fill the form after meeting."* |
| **C383** | 28123–28127 | *"Receptionist to be the only person allowed to type profile data, meaning the Sales Rep must return to the front desk to give them the information."* |
| **C386** | 28176–28180 | *"we build this 'Dual-Queue' Dashboard for the Helpdesk so the Receptionist can actively track which Sales Reps owe them missing profile data"* |

This is the explicit selection of Gemini's worded option (C385: *"Queue 2: Pending Enrichment"*), restated.

**What is answered.**
- The queue is **wanted**: the permissive "can" becomes the PO's *"we build this"*.
- Its shape: a Helpdesk dual queue (incoming walk-ins; pending enrichment).
- Who types: **the receptionist only**.
- Who is accountable: **the Sales Rep, who owes the data**.

**Against newer text.**
- Spec §43 says *"a field Sales Rep is responsible for enriching"*. That is CLARIFIED and compatible: the rep is responsible and the receptionist types.
- 03af A-100 (*"any customer-scoped task is now constrained by `·B.8` in its AUTHORSHIP"*): the enrichment item arises from the Helpdesk's registration-and-assignment act, not from a manager creating a task, so `·B.8` (a manager-authorship limit) is not engaged. That is an architect reading and is recorded, not decided.

**The residual.** The **MVP phase placement** is not stated. The PO deferred other items from the same interrogation by name (for example C337 on the gamified slider: *"Let's keep this thing for later phases"*) and did not defer this one. That is evidence, not a statement.

**Status: PO Answered — partially.**

#### PA-6 — Q9: a system lead-quality score is wanted, for one stated purpose

**The question** (03 §10): *"Does the business need lead temperature (hot/warm/cold) or a lead score?"*

**PO text** (C199, 2026-09-05 14:50, line 19345), answering Gemini's C198: *"do we build a 'Lead Quality Score' (automated): 1. The system assigns a 'Confidence Score' to a lead based on how many brokers have already tried and failed to reach them. 2. When a Sales Rep tries to mass-dump 100 leads to a broker, the system warns the Sales Rep … Is this 'Confidence Score' a necessary guardrail for your MVP …?"*:

> *"**Yes, do this confidence scoring automatically lead quality score.** One more thing here, a sales representative can assign 25 leads or 10 leads to a channel partner. He cannot assign more than 25 leads to a channel partner in one day …"*

**What is answered.** A **system-computed lead score is wanted**, adopted in the question's words: a confidence score from prior failed broker attempts, and a warning to the rep on bulk transfer to a CP, as an MVP guardrail.

**Against newer text.**
- Nothing newer mentions or rejects it.
- The score is shown to the **rep**, who holds the full history. It is never shown to the receiving CP, so `PO-AE1·L.3` and AC-56 (no-history for the recipient) are not engaged. CLARIFIED.

**The residual.** **Temperature** (hot/warm/cold) is not addressed. That limb is also **V-21**, a separate carried cluster that stays untouched. Any general-purpose lead score beyond this CP-transfer guardrail is also not addressed.

**Status: PO Answered — partially.**

#### PA-7 — Q3: the initial state and handler of an imported lead

**The question** (03 §10): *"What is the initial state of an imported lead, and does import run the duplicate/clash gate? Also: does an import trigger follow-up SLAs and escalations, and who is the handler?"*

**PO text.**
- C203, 09-05 15:03, line 19434: *"if there is a custom rule or round-robin rule on any lead source assigned, then it should not get [unassigned]. **The only case where unassigned leads can happen is when a builder or channel partner will upload a CSV, Excel file, or any PDF file** … when the user will upload such a database, it will have the option to put an assignment tool like round-robin or custom rule … if the user forgot … all leads stay unassigned … the site head can see all unassigned leads, and he can select multiple leads in one go and can transfer them to a particular sales representative …"*
- C191, 09-05 14:06, line 19216: *"New leads are those leads on which no one has taken follow-up and **new leads which are unassigned, so they will have a badge new + unassigned**."*

**What is answered.**
- **Handler:** chosen by the assignment rule applied at upload (round-robin or custom). With no rule, the leads are **Unassigned**, and the Site Head bulk-assigns them from the Unassigned filter.
- **Initial state:** **New**, badged **Unassigned** when there is no handler.

**Against newer text.**
- AD-01A: the lifecycle has four values, and Unassigned is derived. CLARIFIED: "Unassigned" is a badge, not a lifecycle state.
- AC-54-e′ (*"If customer goes to Unassigned, customer remains active and an authorized manager later assigns"*): CLARIFIED.
- GC-1: CLARIFIED.

**The residual.** Whether an **import runs the duplicate/clash gate**, and whether follow-up reminders or escalations **fire for a bulk import**. Neither is addressed.

**Status: PO Answered — partially.**

#### PA-8 — Q2: long-dated and undated follow-ups

**The question** (03 §10, E-19): *"Is there a maximum next-action horizon, and how are long-dated leads handled? … a follow-up 18 months out is invisible in every feed … Is there a cap, a parked treatment, or nothing?"*

**PO text.**
- C165, 09-05 05:59, lines 17795–17805: *"… a customer from 20th of April said, call me after 17 June … salesperson forgot … multiple times customer said, call me when any new project come from your builder side. But in this case, salesperson have to log it in future but don't know when. So in our CRM, he can find a filters like remark filter … call me after two months or call me on next product launch … And if there any remark in that thing, that client will pop up automatically."*
- C191, line 19216: *"**Future future will be the tag where we will see all the clients whose follow-up we have to take in future.**"*

**What is answered** (the handling limb):
- a long-dated follow-up is logged as an ordinary **Future** follow-up;
- it is visible in the **Future** tag and filter, and reminded at its scheduled time;
- an undated re-contact (*"call me on next launch"*) is carried in the **remark**, with remark search as the retrieval path.

This removes E-19's premise that a long-dated follow-up is *"invisible in every feed"*.

**The residual.** The **cap** limb. The PO states no maximum horizon. Silence is not "no cap".

**Against newer text.** Q1's decision that Future is a derived Action-Feed bucket: CLARIFIED.

**Status: PO Answered — partially.**

#### PA-9 — Q10: duplicate handling and merge precedence

**The question** (03 §10): *"What is the state-precedence rule when duplicate leads are merged? Which state, handler, owner and next-action date survive; what happens to the merged-away records …; and how their attribution claims carry over."*

**PO text.**

| Source | Line | PO text |
|---|---|---|
| **C117** (09-04) | 16304 | *"In case of internal duplicate happen, the system automatically merge it with it and alert the original lead owner that the client regenerated the lead."* |
| **Chunk 2** | 10328 | *"This will mark a clash badge on that particular lead … When the booking is successful, the builder will decide, while submitting the booking, whether it will go direct or it will go under a channel partner."* |
| **C317** (09-07) | 25956 | *"we need to build a one-to-many Lead_Attribution_Claim table (where the system permanently logs a separate row for EVERY single broker or marketing source that tries to claim the lead …"* |
| **C213** (09-05) | 19660 | *"I will not allow post-merge [force-merge]. We can have a display name option or a client name option."* |
| **C205** (GC-32) | 19481 | *"Whenever a duplicate lead comes in the system, it will auto-restore and mark as a new lead tag."* |

**What is answered** (duplicates arriving at intake):
- The **existing record survives**, and the arrival **merges into it**.
- The original **owner** is kept, and **alerted** that the client regenerated the lead.
- A **dumped** original is restored to **New**.
- Every competing **attribution claim is preserved**.
- A CP clash is badged and decided at booking.
- **Person identities are never force-merged**; a display name is used instead.

**Against newer text.**
- `PO-AE1·B.2` (mobile is the identity and deduplication key) and `PO-AE1·F.1`–`·F.8` (a resubmission revives the same Inquiry with status New; a system activity records the renewed interest): **CLARIFIED**. The newer text restates the intake rule structurally.
- C117's alert to the owner is corroborated in substance by `·F.8`.

**The residual.** Precedence when **two already-existing records** must be merged: the state, handler and next-action date that survive, and the fate of the merged-away record. This case arises from imports and legacy data, not intake. It is still `M-5`'s uniqueness half (03ac line 1726).

**Status: PO Answered — partially.**

#### PA-10 — V-24: what another project's rep sees of a customer

**The question** (03f §16.3): *"Does §08 project-scoped authorization evaluate against the working record or the inquiry, and what does a viewer scoped to Project A see of a record that also holds a Project B interest?"*

**PO text** (the drift is settled by date):

| Chunk | Line | PO text |
|---|---|---|
| **C175** (09-05) | 18816 | *"… the salesperson of another project can see he already have a unit in XYZ project. He will not see all sales conversation like the lead flow and how he closed the person, but he can have the details like he own a property in XYZ project, no other activity log of previous sales team."* |
| **C282** (09-07, newer) | 25346 | *"… that customer will be marked as existing customer of our XYZ project, but **it will not show his unit details and his previous conversation** when it was earlier a lead. So we discussed that earlier also for data privacy from one salesperson to another salesperson."* |

**What is answered** (for the case where the Project-B interest is a **completed booking**), taking the newer C282:
- the other-project viewer sees an **existing-customer marker**, naming the project;
- they see **no unit details**;
- they see **no prior conversation or activity**.

**Against newer text.**
- `PO-AE1·A.7` (project segregation) and `·L.3` (no-history restrictions): consistent and CLARIFIED.
- 03ae recorded V-24 as *"UNAVOIDABLE … UNTOUCHED"*. No repository PO text addresses it.

**The residual.**
- (a) A **live, unbooked** interest in another project: whether its existence, or anything about it, is shown.
- (b) The evaluation-scope limb, working record against inquiry. That is architecture under the one-Inquiry model.

**Status: PO Answered — partially.**

#### PA-11 — Y-4: whether a Success changes the whole record's queue behaviour

**The question** (03h): *"Does a Success on any one inquiry change the work-queue behaviour of the whole record? i.e. does a client presented as a Customer … continue to appear in ordinary sales follow-up queues for an unrelated live inquiry?"*

03ac line 1240 adds the limb *"may a record holding a Success be redistributed into a sales churn queue? … a management-AUTHORIZATION question"*.

**PO text** (C282, 2026-09-07 07:13, lines 25344–25348):

> *"… once that client has booked apartment with us. That means he is our customer now, not our lead. **We don't need to take follow-up as a prospect customer to that.** Now we have to take follow-up about payment, about documents … Once he purchased a unit, we will treat him as a customer forever. **If that customer regenerates lead for any new project and he is already our existing customer, then it will be again a lead.** …"*

**What is answered** (the presentation limb, as business intent):
- a purchase ends **prospect** follow-up for that purchase;
- an inquiry for **another project** makes the customer **a lead again**, worked in the sales queues and badged as an existing customer.

**Against newer text.**
- `PO-AE1` (customer-centric; one Inquiry per customer) and **V-23** (*"Booking reaches authoritative Booked -> lead status automatically becomes Booked"*) keep **one** status per lead.
- C282's intent is **not contradicted**, but it is not mechanically expressible yet: a Booked customer who is *"again a lead"* needs a status route that V-23 does not describe. That is **AC-50**'s open question (where commercial disposition lives under the one-Inquiry model).
- C284's *Sales_Lead-per-project* model was **superseded** structurally by `PO-AE1`. C282's business intent is not.

**The residual.**
- (a) The mechanics under V-23 and the one-Inquiry model, which is AC-50's question.
- (b) The redistribution-authorization limb (03ac M5).

**Status: PO Answered — partially.**

#### PA-12 — J-1: content retention after an audit "delete"

**The flag** (03ak §8): *"ACG-3/4 'edit or delete' = an appended supersession record. The original is retained verbatim … The PO should confirm that retention of a 'deleted' record's content is intended (NI-9)."*

**PO text** (C302, 2026-09-07 08:18, lines 25668–25672; GC-46; an explicit restatement of Gemini's option):

> *"we enforce a strict, system-wide 'SOFT DELETE ONLY' architecture? (Meaning the 'Delete' button in the UI actually just flips a hidden database column is_deleted = true, hiding it from the screens but **permanently keeping it in the database for the CEO and Auditors to find if needed**"*

**What is answered.** The PO's general rule for any "delete" is **hide, never destroy**, with the content **kept permanently for the CEO and auditors**. 03ak J-1 implements exactly that semantics for audit records.

**Against newer text.**
- **ACG-3/ACG-4** (09-26, newer): *"the Builder-Side Admin may edit or delete audit records"*. It does not say whether a deletion is soft. **APPARENT CONFLICT (SCOPE)**, as in 03ah GC-46 and NI-9.
- **ACG-8** (indefinite retention) and **ACG-6** (a separate immutable record of every deletion) both point the same way as C302.
- Spec §56 later qualifies soft-delete for legally required deletion (red team, chunk 414). That concerns **personal-data** deletion, not the audit trail.

**The residual.** A single confirmation: that ACG-3/4's later *"delete"* of an **audit** record follows C302's system-wide rule. Neither side's wording reaches the other.

**Status: PO Answered — partially.** J-1 narrows to that confirmation. NI-9 is **narrowed** likewise.

#### PA-13 — J-10: archive-then-drop against ACG-8

**The flag** (03ak §6.6, §8): *"No audit partition may be dropped until the PO confirms that cold archive counts as ACG-8 retention."*

**PO text** (chunk 2, pre-09-04). The option the PO selected, at line 12919:

> *"Decision 1: Audit Log Retention … **Option B (Archival System): Keep granular audit logs instantly accessible for 12 months. After that, automatically compress and move them to cold storage** (highly cost-effective, but **takes a few hours to retrieve if legally required for an audit**)."*

The PO's selection, at line 12935: *"option B for both."* (GC-6)

**What is answered.** The PO chose **tiering**: hot for 12 months, then compressed and moved to **cold storage**. The option's own words describe the cold tier as **retrievable for a legal audit**. In the PO's chosen design, cold archive **is the retention tier**, not a deletion. That is exactly what J-10 asks the PO to confirm.

**What the PO did not say.**
- The **"drop the table partition"** mechanics in chunk 2 are **Gemini's** wording: line 13441 (*"Monthly partition drops after 12 months … drops the table partition"*) and line 13483 (*"automated dump to S3 cold storage and partition drop"*).
- They are ARCHITECT-DERIVED. 03ah §2.6 recorded this already.
- The PO selected "move to cold storage". Removal from the hot tier is implied by "move"; the drop mechanism was never the PO's.

**Against newer text.** **ACG-8** (09-26, newer): indefinite retention, no automatic expiry or age-based deletion. Tiering is not deletion, so this is **APPARENT CONFLICT (SCOPE)**, as in 03ah GC-6. The ACG option texts are unavailable (L-AL-2), so whether ACG-8 was chosen with GC-6's tiering in view cannot be verified.

**The residual.** Confirmation that ACG-8 keeps GC-6's tiering: the cold copy is retained indefinitely and stays retrievable to ACG-5 and ACG-9. Until then, 03ak's safe hold (no partition drop) stays correct.

**Status: PO Answered — partially.**

### 3.3 PO Answered — contradicts (1; carried, not new)

#### AH-Q-1 — self-approval (AGX-13)

**PO text** (C267, 2026-09-07 05:28, lines 24082–24088; GC-42), answering *"In our financial workflow (Cost Sheets, Booking Approvals, and Commission Payouts), do we strictly enforce a 'Maker-Checker' rule …?"*:

> *"Yes, block the self-approval … the accounts head will approve. **If there is no accountant and the accounts head is the only person in the accounts team, then in that case, CEO or VP will approve his entries.** … Whenever a team member or a department is added, every person will have a reporting manager other than the CEO … **whatever changes the accounts person or the sales rep will do, his manager will approve that.**"*

**Two sub-answers that 03ah did not record** (they carry the same caveat as the whole):
- (a) **sole-person fallback**: when a department has one person, the CEO or VP approves;
- (b) **the approver of a self-originated change is the originator's reporting manager**.

**Why it stays a contradiction.**
- The earlier bundle's §B.19 (*"Initiator may approve if active and eligible"*) is known only in abridged form (03ag Appendix A). Per the 03ah register it post-dates chunk 267.
- The corpus holds **no newer PO text** on self-approval. The targeted grep found only C267.
- So the contradiction cannot be settled from the corpus. **SOURCE VERIFICATION REQUIRED** stands.

**Cross-reference, not a separate finding.** If the PO confirms GC-42, AC-13 limbs (ii) and (vii) lose their *"approve their own request"* sub-limb for commission-bearing acts. The other sub-limbs (the benefiting reporting line; the CP's relationship manager) would stay open.

**Status: PO Answered — contradicts.** Unchanged from 03ah.

### 3.4 Verified, not answered: AGX-12 (discharged in 03aj)

| Test (independent re-check) | Finding |
|---|---|
| The corpus question (C248, Gemini) | *"Does our CRM need to automatically manage this 'Negative CP Ledger' (auto-deducting clawbacks from the broker's next active deal), OR is the Accounts Team expected to manually track these clawbacks outside the system and adjust invoices on paper?"* Re-read at lines 22963–23001 |
| The PO answer (C249, 09-06, line 23002) | *"Automatically managed."* The only PO text on the subject. No other PO turn mentions a negative balance, offset or clawback ledger (grep) |
| The newer text (`PO-AJ1·9`, 2026-09-28) | *"Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings."* |
| Same subject, explicit and opposite, newer | **Yes, on all three.** S-20 stands. **AGX-12 stays DISCHARGED** |
| What survives | What BMexa *records* about an offline recovery. That is AG-Q-6(i), as 03aj §3.3 found. **Corroborated** |
| Corpus evidence newly noted (not an answer) | **C251** (09-06, line 23034): *"we will build the TDS math field"*. The PO chose that BMexa's CP payment register **display** Net Payable = Gross − TDS. **C389** (09-08): the CP's *Upload Invoice* stays locked until Accounts confirms the client's milestone. Both show the PO wanting BMexa's CP-payable figures to be **accurate on display**. That bears on AG-Q-6(i)'s option (A) risk (Spec §34) and is added to §6.3's evidence column |

### 3.5 No answer (checked): 59 units confirmed open

**Evidence** is recorded where corpus text bears on an item without answering it.

| Unit | Result | Evidence noted (not an answer) |
|---|---|---|
| **AG-Q-6(i)**: what BMexa holds about an offline NOC recovery | **No answer.** "NOC" occurs only in chunks 247 (PO) and 248 (Gemini) of the whole corpus | GC-36 (C247, line 22961) is **still the only PO text**: *"the builder will take an NOC from the channel partner that he will deduct that commission from his future revenue"*. It addresses the mechanism and the quantum ("that commission"). It says nothing about BMexa's record. C251 and C389 (§3.4) |
| **AJ-Q-1**: Unit B pricing | **No answer.** The grep for price wording near transfer, upgrade or unit change found nothing in any PO turn | C320's *"The price list for 805 is completely different"* is **Gemini's** framing (C319). The PO's C320 answer restates only the three-record representation (GC-47) |
| **AI-Q-1**: the PH → PH anchor | **No answer.** No PO turn mentions a Project Head transferring to a Project Head | C201 (VP moves the lead owner from sales head one to sales head two) is already GC-31 and LC-22 |
| **AI-Q-2**: cardinality and succession | **No answer** | GC-24 (*"every project will have a sales head"*, already LC-23). GC-12 and GC-20 (one Project Head field at project set-up; singular). C280's *"If Priya quits tomorrow, the VP just changes the name on that one row"* is **Gemini's**; the PO's *"yes"* adopted the assignment table, not a succession rule. C277's premise (a GM or VP grants extra scope to one AGM) is evidence for NI-20 |
| **AG-Q-16**: the three transfer labels | **No answer.** None of the three strings occurs anywhere (grep; confirms 03ah §2.4) | — |
| **V-4** FUT; FUT consequences of W-1 and W-4 | **No answer.** No PO text on FUT | Chunk 2, line 13637: the PO's lead flow defines *"first connection time"* as the first action, which is FR, already locked |
| **W-1**; **W-4** | **No answer** | C42 separates a broker's remarks **per builder**, not per project. Chunk 2's lead flow confirms the creation → first-action clock (`PO-AF1·J.2`, already locked) |
| **V-10**: jobs, caches, derived surfaces | **No answer** | GC-40 (device encryption; scope conflict stands). C197: a lead transferred to broker B *"will be marked as a new lead and he will not see any past history"*. That is a CP-portal presentation, consistent with AC-56 |
| **Repo AC-58** (a), (b) | **No answer** | GC-51 (Dump not blocked offline; already cited) |
| **AG-Q-10** | **No answer** | — |
| **AC-53**; **T-4/T-5** | **No answer** | C193 (*"if the client book under 30 days or 60 days, the channel partner will receive the commission … whether the client books directly or … with any other channel partner"*) is the registration-window rule already locked as `PO-N1`…`N9`. 03n line 161 found that window **unconditional on the closure reason**, and T-4 still survives beyond it |
| **AC-50** (b), (c) | **No answer** | C287 (*"yes"*: one lead may spawn several bookings) |
| **N-2**; **N-4** | **No answer** | N-4: C191 and chunk 2 describe Dump as *"denied to buy or lost interest"*. That is a definition, not a reason vocabulary |
| **AC-59** | **No answer** | — |
| **AC-52**: duplicate-detection disclosure | **No answer.** The corpus has an **internal tension** | C114 (a clash visible to the Site Head only); C117 (merge and alert the owner); C360 (search-to-create: *"If it exists, the client details pop up"*, in a Helpdesk registration context); C362 (a masked CP walk-in, *"without exposing full phone numbers"*); C175 and C282 (the existing-customer marker). None states what a **non-holding rep** is told on a collision |
| **AC-6**; **AC-7**·re-basing; **AC-12**; **AC-26** | **No answer** | C34 and C193 (the window length is set by the builder; already `PO-N2`). C111 (Site Head or Project Head decides direct or CP; already `PO-T2`) |
| **AC-13** (limbs i–iv, vi–viii) | **No answer** | C114 (the clash badge is hidden from brokers) is consistent with `PO-V2·c`. GC-42 applies to the own-request sub-limb (§3.3) |
| **AC-42**: CP performance, nine limbs | **No answer** | C191 (the rep sees each broker's visits against bookings, *"who is outperforming, who is underperforming"*). No denominator, grain or rollup |
| **AC-47** | **No answer** | C88 (the booking form names a CP only on a CP booking). C317 (every claimant is kept permanently). Neither says whether a DIRECT booking may carry CP records |
| **V-19** | **No answer** | Chunk 2's lead flow and C344 give example sub-response **values**. C203's *"Site visits … sub-response equals to site visit"* is evidence that the site-visit filter reads the sub-response, but no source of truth is chosen against the site-visit record |
| **W-5**; **Y-5**; **Y-1**; **Y-2**; **W-2** | **No answer** | C173 (the VP *"can see all the sales thing"*: management breadth, stated before the history-restriction concept existed). C284's *"yes"* (Sales_Lead per project; simultaneous leads), **structurally superseded** by `PO-AE1`. C282 (*"lead is somehow a status until a customer purchases"*) |
| **Q5** (commercial limb = V-14 → T-4) | **No answer** | C205 (restore on a duplicate, already `PO-AE1·F`). The mechanical half dissolved earlier (03ac line 597) |
| **Q11**; **Q13**; **Q14**; **Q15** | **No answer** | Q14: C203 describes the Unassigned filter, not a threshold. C355 (the 24 h / 48 h escalation) concerns booking-form completion (LC-19) |
| **Q16** | **No answer from the corpus** (see hygiene note H-2) | C191 (*"sales person can mark that lead as a dump lead"*); C205; chunk 2 activity tabs |
| **V-3**·2; **V-6**; **V-8**·2; **V-11**; **V-14**; **V-18**; **V-21**; **V-26** | **No answer** | V-8·2: C197 (broker transfers always present as new, with no history; the CP-handler case only). V-11: C199 (dumped leads may be re-pushed to another CP). V-18: see H-1. V-26: C25 and C31 (the IVR PIN was scrapped and telephony deferred; nothing on recording intake metadata) |
| **Z-1**…**Z-6** | **No answer** | Z-3: C197 (a redistributed dumped lead appears to the receiving **broker** as New, and the broker takes follow-ups). That is a CP-handler analogue only and is not counted. Z-2: C199 (CP re-push eligibility by non-response or dump, not by validity class) |
| 03af §13.3a **#1, #3, #4, #7** | **No answer** | #7: chunk 2's lead flow names the creation clock only |
| **V-20**·tz / **M-6** | **No answer** | Chunk 2 onboarding ("set timezone") is **Gemini's** |
| **AGX-10** | **No new PO text** | Chunk 2, line 12910: R6 as *"permanent, tamper-proof trail"* is Gemini's description |
| **AGX-11** | **No new PO text** | GC-22 (C145) is the only PO text. Its *"undeletable"* limb against ACG-3/4 stays a ledger item |
| **J-7**: owner/admin lose `audit.read` | **No answer.** It is an architect judgment and no PO text addresses it (NI-29) | GC-22 (C145, line 16853): the support-session log is *"visible to the Builder CEO and admin"*. C120: *"alert CEO and alert everyone who is like a senior position"*. With **ACG-5** (management within scope; the CEO's scope is the company), this indicates the PO **expects the Builder CEO to see audit trails**. J-7's interim, which defers ACG-5's management limb to Phase 3, withholds that. Surfaced as NI-29 |

**Register-hygiene notes.** These items are **not** reclassified here, because the answering text is **repository** PO text, not corpus text. They are flagged for the next consolidated audit.

| # | Item | Observation |
|---|---|---|
| **H-1** | **V-18**'s feed limb (*"does it enter the §14 'New leads' feed?"*) | `PO-AE1·F.5` (*"status becomes New"*) appears to answer it for a dumped customer resubmitting. The corpus's C205 corroborates. V-18's **Capture-count** limb is untouched either way |
| **H-2** | **Q16**'s Dump-authority limb | `PO-AE1·H.1` (Dump belongs to the currently assigned rep, expressly not the Site Head; quoted in 03ae §12.5 AC-54(a)) appears to answer who may Dump. The corpus's C191 and C205 corroborate. The **gating** limb, and the Success limb (V-22), stay open |

### 3.6 GC register additions (corpus PO decisions GC-1…GC-54 missed)

Only entries that bear on a counted item are added.

| GC | Chunk (date) · line | PO text (excerpt) | Bears on | Class against newer text |
|---|---|---|---|---|
| **GC-55** | 123 (09-04) · 16516 | Lead-source integrations (Facebook, Google, 99acres, MagicBricks) with a marketing report by integration; onboarding needs one member each for Sales, Sales Support, Accounts and CRM, plus a Helpdesk role | Q12; AG-Q-11(f) | Q12: answers it (PA-1). Departments: consistent with the handoff |
| **GC-56** | 165 (09-05) · 17799–17801 | One notification per hour, replacing C162's 20–25 minutes; long-dated follow-ups are logged as Future; remark search for *"call me on next launch"* | Cadence; Q2 | Cadence: superseded **within the corpus** by C167. Q2: PA-8 |
| **GC-57** | 191 (09-05) · 19208–19216 | *"new + unassigned"* badge; statuses; the rep may mark a CP-registered, non-responding client as Dump; on resignation, clients go to the Site Head or reporting manager | Q3; Q2; Q16 (H-2) | CLARIFIED against AC-54 and `PO-AE1·H.1` |
| **GC-58** | 199 (09-05) · 19345 | *"Yes, do this confidence scoring automatically lead quality score"*; a 25-leads-per-day cap from rep to CP; only non-responding (5 or more consecutive) or dumped leads may move between CPs; a rep pushes only to CPs assigned to them | Q9; V-11 and Z-2 (evidence) | Q9: PA-6. The cap and the eligibility rule are unbanded CP-transfer rules; no newer text |
| **GC-59** | 203 (09-05) · 19434 | Unassigned arises only from uploads without a rule; an upload offers an assignment rule; the Site Head bulk-assigns | Q3 | PA-7 |
| **GC-60** | 175 (09-05) · 18816 | An other-project rep sees the unit owned in XYZ, not the activity | V-24 | **Superseded within the corpus** by GC-61 on unit details |
| **GC-61** | 282 (09-07) · 25346 | Existing-customer marker without unit details or prior conversation; *"again a lead"* for a new project | V-24; Y-4 | PA-10; PA-11 |
| **GC-62** | 380 / 383 / 386 (09-08) · 28074–28180 | Pending form after assignment; the receptionist is the sole typist; build the Helpdesk dual queue | Q8 | PA-5 |
| **GC-63** | 2 (pre-09-04) · 10598, 11777 | Helpdesk sits under each project's sales head, as part of Sales; the Helpdesk, Sales Support and Customer Support Management roles are distinct | AG-Q-11(f) | PA-3 |
| **GC-64** | 213 (09-05) · 19660 | No force-merge of person identities; display name against legal name; one CP relationship manager per project | Q10 | PA-9 |

GC-9 (chunk 61) is **re-read**, not re-numbered (C-AL-2; PA-2).

---

## 4. Cluster-count arithmetic

### 4.1 Method

03ah §3.1 is carried unchanged:
- The unit of count is the unique cluster.
- A cluster leaves the count only when **every** limb is answered.
- A partial answer moves an untouched cluster to partial and changes nothing in the total.

**One method change, made on the PO's instruction.**
- 03ah L-4 declined to reclassify any carried cluster on corpus evidence.
- The PO has now asked for corpus answers to be found and marked.
- Corpus answers are therefore allowed to reclassify, **subject to** the newer-text check in §3 and to working rule 15 (an earlier answer should be confirmed before it is built on).
- The conservative figure, which applies that confirmation requirement to the count as well, is given alongside (§4.4).

### 4.2 Status changes

| Cluster | 03aj | 03al | Why |
|---|---|---|---|
| **Q12** | Untouched | **Fully resolved** | PA-1 |
| **Q2, Q3, Q8, Q9, Q10** | Untouched | **Partial** | PA-8, PA-7, PA-5, PA-6, PA-9 |
| **V-24** | Untouched | **Partial** | PA-10 |
| **Y-4** | Untouched | **Partial** | PA-11 |
| **Follow-up notification cadence** | Untouched | **Partial** | PA-4 |
| **AC-48** | Partial | Partial (narrowed to a confirmation) | PA-2 |
| **AG-Q-11** | Partial | Partial ((f) narrowed; AI-Q-1 and AI-Q-2 open) | PA-3 |
| AG-Q-6 | Partial | Partial (unchanged) | §3.5 |
| AH-Q-1 | Open | Open (a contradiction; unchanged) | §3.3 |
| Every other cluster | — | Unchanged | §3.5 |

J-1, J-7, J-10, AGX-10, AGX-11 and AGX-12 are ledger or review items, not clusters. They have **no count effect**.

### 4.3 Reconciled figures

> **BMexa Audit Progress: AD-01AG (reconciled in 03ah; updated in 03ai, 03aj and 03al, 2026-09-30)**
>
> **Original baseline:** 76
>
> **Fully resolved:** **21**. That is 15 baseline (the 14 carried plus **Q12**) and 6 new (AG-Q-12, 13, 14, 15, 17, 18).
>
> **Partially resolved:** **17**. That is 16 baseline: the 8 carried (AG-Q-6, AG-Q-10, AC-48, V-4, repo AC-58, W-1, W-4, V-10) plus 8 moved from untouched (Q2, Q3, Q8, Q9, Q10, V-24, Y-4, the notification cadence). Plus 1 new (AG-Q-11).
>
> **Untouched:** **45**. That is 43 untouched and 2 touched-not-answered (AC-50, N-2).
>
> **Newly opened:** **9** (unchanged). Of these, 6 are resolved, 1 is partial (AG-Q-11) and 2 are open (AG-Q-16, AH-Q-1).
>
> **Current open minimum:** **64** (verified minimum).

### 4.4 Arithmetic

| Check | Computation |
|---|---|
| Baseline integrity | 15 fully resolved + 16 partial + 45 untouched = **76** (matches) |
| Untouched movement | 54 − 1 (Q12 resolved) − 8 (moved to partial) = **45** |
| Partial movement (baseline) | 8 + 8 = **16** |
| New clusters | 6 resolved + 1 partial (AG-Q-11) + 2 open (AG-Q-16, AH-Q-1) = **9** (matches) |
| Unresolved minimum | 16 baseline partial + 45 untouched + 3 unresolved new = **64** |
| Fully resolved (all) | 15 + 6 = **21** |

**Reconciling against 03aj's 65.**

| Movement | Effect on the minimum |
|---|---|
| Q12 fully answered (PA-1) | **−1** |
| Eight untouched clusters answered in part | 0 (untouched to partial) |
| AC-48 and AG-Q-11 narrowed | 0 (they stay partial) |
| AH-Q-1 re-confirmed as a contradiction | 0 |
| AGX-12 re-verified; J-1, J-7 and J-10 found | 0 (not clusters) |
| NI-27…NI-29, LC-28 | 0 (issues; a ledger item) |
| **Net** | **65 → 64** |

**The alternative figures, each with its reason.**

| Figure | Method |
|---|---|
| **64** (adopted) | The PO asked for corpus answers to be marked, and Q12's answer is complete and not contradicted by newer text |
| **65** (conservative) | Working rule 15 and 03ah L-4 applied to the count: an earlier corpus answer does not close a cluster until the PO confirms it. Q12 then stays open (as confirmed-pending) |
| **67** | 64, plus 03aj's and 03ai's stricter homing: AJ-Q-1, AI-Q-1 and AI-Q-2 each counted as their own cluster |
| **68** | 65 conservative with those same three |

**Why 64 is still only a minimum.**
- 03ah §6.4's three reasons carry over unchanged: the unbanded families are un-de-duplicated (L-AL-4); the carried items were mined only for PO answers, not re-derived; and partial-to-new homing judgements remain.
- **No exact global total is claimed.**

---

## 5. Contradiction and issue register (delta to 03aj §4)

### 5.1 Contradictions

**No new unresolved contradiction.**
- Every PO Answered finding in §3.1–§3.2 was tested against newer locked text.
- Each relation found is CLARIFIED, NARROWED, APPARENT CONFLICT (SCOPE), or settled by date inside the corpus.

**Internal corpus drifts, each settled by date** (older → newer; the newer governs inside the corpus, under working rules 4–5):

| Drift | Older | Newer | Governs |
|---|---|---|---|
| Sales Support placement | C173 (09-05): *"Salesforce department is different"* | C272 (09-07): *"report to the CRM Head"* | C272, with the residual NI-28 |
| Other-project unit visibility | C175 (09-05): *"he already have a unit in XYZ project"* | C282 (09-07): *"it will not show his unit details"* | C282 |
| Reminder interval | C162: 20–25 min | C165: one hour, then C167: exact schedule | C167 |

**Open contradiction register after 03al.** AGX-7, AGX-10, AGX-11 and AGX-13 are unchanged. AGX-12 stays discharged (§3.4).

### 5.2 New issues

| NI | Type | Issue | Evidence | Home |
|---|---|---|---|---|
| **NI-27** | Security / visibility | **Clash-badge visibility against the step-7 decision-maker, under `PO-AI1`.** C114 (09-04, PO): *"I want the clash badge to be only visible to the site head."* `PO-T2` (newer): *"the decision-maker at step 7 is the previously established Site Head / Project Head"*. Under `PO-AI1` the two roles may be **different people** (Project C: Site Head A, Project Head D). On a literal reading of C114, D may decide a clash whose badge D cannot see | C114 (line 16235); GC-17; `PO-T2` (03t, 03v); `PO-AI1·3`, `·5` | **LC-28.** Carried T-series (evidence only until now) |
| **NI-28** | Authorization / department model | *"Report to the CRM Head"* (C272) is a reporting line, not stated department membership. AG-Q-3's replacement rule keys on department. AG-Q-4 keeps Sales Support as its own optional level | PA-3; AG-Q-3-i; AG-Q-4-d; `PO-AF1·B`; `PO-AI1·7` | **AG-Q-11(f)**, the narrowed residual |
| **NI-29** | Audit visibility | J-7's interim (owner and admin lose `audit.read`; ACG-5's management-scoped visibility deferred to Phase 3) withholds audit visibility from the Builder CEO. The PO has twice expected the CEO to see audit trails: GC-22 (*"visible to the Builder CEO and admin"*) and C120 (export audits alert the CEO). ACG-5 grants management within scope | 03ak §6.5, §8 J-7; GC-22; C120; ACG-5 | Phase-3 audit visibility (03ak §9). Surface to the PO together with J-7. **Not a PO question by itself** |

### 5.3 Ledger confirmation (new)

**Default until confirmed:** NARROWED — PENDING PO CONFIRMATION.

| ID | Content | Proposed mark |
|---|---|---|
| **LC-28** | C114 (the clash badge is visible to the **Site Head only**) against `PO-T2` (the step-7 clash decision by **Site Head or Project Head**) and `PO-AI1` (distinct roles) | **NARROWED.** C114's exclusion was aimed at *"brokers and the sales representative of the builder"* (its stated reasons: side deals, commission-splitting). It was not aimed at a project-level decision-maker. The newer `PO-T2` implicitly requires the step-7 decider to see the clash. Proposed reading: the clash badge is visible to the `SH@P ∨ PH@P` holders, and hidden from reps and CPs. **ARCHITECT-DERIVED**, pending the PO |

### 5.4 Items narrowed (no new ID)

- **NI-9** (soft or hard audit delete): narrowed to one confirmation, by PA-12.
- **NI-2**: split into an answered Helpdesk limb and NI-28.
- **NI-25** (AC-48's switch): its boundary is corroborated by C61 (PA-2). The per-tranche routing stays, with **Accounts' payout marking** as the switch.
- **R-AH-2** (the NOC implemented on an unconfirmed meaning): unchanged. The corpus holds no second NOC text.

---

## 6. The next PO question

### 6.1 Is AG-Q-6(i) still the right one after this pass?

**Yes.** The 03aj §7 queue was re-checked against this pass's findings.

| Candidate | Changed by 03al? | Safe interim default? | Rank |
|---|---|---|---|
| **AG-Q-6(i)**: what BMexa holds about an offline NOC recovery | **Not answered.** The corpus has exactly one NOC text (GC-36), already cited by 03aj. C251 and C389 add **evidence**, not an answer | **Weak** (03aj §7.1). "Record nothing" risks Spec §34 and §35 and R-AJ-5 | **1** (unchanged) |
| **AC-48**: tranche "paid" | **Yes: narrowed to a confirmation** (PA-2) | Yes, and now **PO-text-backed** (C61) | 2 (unchanged). **It is no longer a question**: it moves to the confirmation pass below |
| **AJ-Q-1**: Unit B pricing | Not answered | Yes (03aj §3.6.3) | 3 |
| **AG-Q-11(f)**: now NI-28 | **Narrowed**: Helpdesk answered; Sales Support reports to the CRM Head | Yes: model department membership generically | 4 |
| AH-Q-1 | Unchanged (a contradiction; §B.19 is unavailable) | Needs source verification first | 5 |
| AI-Q-2; AI-Q-1 | Not answered | Yes | 6; 7 |
| AG-Q-10; V-10; AC-58; V-4 FUT; W-1; W-4; AG-Q-16 | Not answered | Various | 8–14 |

**Why no newly answered item overtakes it.**
- Every PA finding **narrows** its item. Most of them move from "question" to "confirmation".
- None of them creates a question with more upstream reach or less of a safe default than AG-Q-6(i). The CP Ledger's remaining shape, and the commission payable shown on every later booking of a Channel Partner, still depend on it.
- No other queued question has been overtaken by a corpus answer that would make it moot.

**Why the question is not bundled with confirmations.** The PA items are earlier PO answers that working rule 15 asks the PO to **confirm**. Bundling a dozen confirmations into the one question would break *"exactly one"*. They are listed as a **separate confirmation pass** (§6.4), as 03aj did for LC-22…LC-27.

### 6.2 The question (exactly one; verbatim from 03aj §7.2, re-validated)

> **Channel Partner NOC: what BMexa holds while already-paid commission is recovered offline.**
>
> You have now decided that when commission has already been paid on a cancelled booking, including the Unit A booking of a unit transfer, *"Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings."* You have also decided that the NOC applies to *"ANY future booking made by the SAME Channel Partner, regardless of customer."*
>
> On 6 September you described the NOC as the Channel Partner's consent *"that he will deduct that commission from his future revenue."* For refunds and forfeitures, you decided that the Builder determines the amount and BMexa records it without calculating it.
>
> **While a Channel Partner's NOC is being recovered offline by the Builder, what does BMexa hold?**
> - **(A)** Only the NOC itself: that it was given, by which Channel Partner, for which cancelled booking, and the already-paid amount it covers. Any adjustment against that Channel Partner's later bookings is kept entirely outside BMexa.
> - **(B)** The NOC, and each amount the Builder recovers against a later booking of that Channel Partner, recorded (not calculated) against that booking's commission, so that the commission payable BMexa shows for that booking reflects the adjustment.
> - **(C)** As (B), and BMexa also shows, for each NOC, the amount still outstanding until it is fully recovered (the total of the recorded recoveries set against the paid amount).

### 6.3 Readings the evidence allows (neutral; none preferred). The corpus column is updated

| Option | Evidence for it | Effect |
|---|---|---|
| (A) NOC only | `PO-AJ1·9` (*"handled offline by the Builder"*); GC-37's alternative branch | Commission payable on later bookings may disagree with what is actually paid (Spec §34; R-AJ-5). **Against it, as evidence only:** C251 (the PO chose that BMexa's CP payment register display the true net payable, gross minus TDS) |
| (B) NOC plus recorded per-booking recoveries | The record-only pattern (`PO-AJ1·7`, S-16); Spec §34, §35; **C251** (an accurate payable on display); **C389** (the CP payout pipeline gated in BMexa by Accounts' confirmation) | A Builder-entered adjustment on each affected commission record, linked to the NOC |
| (C) As (B), plus the outstanding amount per NOC | GC-36 (*"deduct that commission from his future revenue"*: a set-off until recovered); Spec §33 s1; the CFO persona's warning (R-AJ-5) | A CP-level NOC record with a running total of **recorded** amounts. It confirms GC-36's set-off meaning and discharges NI-5 |

### 6.4 Updated residual queue and confirmation pass (not asked; for sequencing only)

| # | Item | Note |
|---|---|---|
| 1 | AG-Q-6(i) | **Asked** (§6.2) |
| 2 | AJ-Q-1: Unit B pricing | Promoted by one place: AC-48 leaves the question queue |
| 3 | AG-Q-11(f) residual (NI-28) | Narrowed by PA-3 |
| 4 | AH-Q-1 | After source verification of §B.19 |
| 5 | AI-Q-2 | — |
| 6 | AI-Q-1 | After AI-Q-2 |
| 7–13 | AG-Q-10, V-10, AC-58 (a) (b), V-4 FUT, W-1, W-4, AG-Q-16 | — |
| 14 | Carried families | Including the residual limbs of the PA items |

**Confirmation pass** (earlier answers the PO is asked to confirm, not to decide afresh; working rule 15):
- AC-48 (PA-2: "paid" = Accounts' marking, credited or cheque prepared);
- Q12 (PA-1);
- Q8 (PA-5: the phase);
- Q9 (PA-6);
- Q3 (PA-7);
- Q2 (PA-8);
- Q10 (PA-9);
- V-24 (PA-10);
- Y-4 (PA-11);
- the notification cadence (PA-4: default or configurable);
- J-1 (PA-12);
- J-10 (PA-13);
- LC-28 (NI-27).

These run **alongside** LC-22…LC-27 (03aj §7.5).

---

## 7. Effect on Architecture Readiness (delta to 03aj §6)

The architecture is **not** complete. The ratings do **not** change: none of these findings removes a blocker a rating depends on. The reasons are narrowed as follows.

| Domain | Narrowing |
|---|---|
| **CP / Commission** (Data Model: No) | The AC-48 blocker is narrowed: the payout-marking act is known (PA-2), so per-tranche payment acts (cheque prepared at, credited at, paid by) are **PO-text-backed** fields. Still blocked by AG-Q-6(i), AC-53, T-4/T-5, and AC-48's confirmation |
| **Approval Workflow** (Security: No) | AG-Q-11(f) is narrowed to NI-28, and AH-Q-1 is unchanged. So the rating stays No |
| **Lead / Follow-up / FR** | The notification cadence, Q2, Q3, Q8 and Q10 now have PO text. **Design work may use them as defaults, labelled pending confirmation.** FR/FUT metric definitions are still blocked by V-4, W-1 and W-4 |
| **Audit** (Analysis only) | J-1 and J-10 are narrowed to confirmations. 03ak's holds (no partition drop; soft supersession) stay correct as they are |

---

## Annex A — Architecture change register (named, not made; delta to 03aj Annex B)

| # | Artifact | Change needed | Class | Gated on |
|---|---|---|---|---|
| **G-23** (NEW) | `03ah` | Status notes:<br>- C-AL-1 (the branch1 unique chunks are 149, 151 and 152);<br>- C-AL-2 (GC-9's "credited / cheque prepared" are alternative modes, not stages);<br>- GC-55…GC-64 added;<br>- L-4 lifted on the PO's instruction;<br>- the §4.2 framing corrected | Record | PO approval of 03ah…03al |
| **G-24** (NEW) | `03af` (§13.3 row 21) and `03` §10 | Record PA-1…PA-11 against Q2, Q3, Q8, Q9, Q10, Q12, V-24, Y-4 and the cadence, each with its stated residual | Record | PO confirmation pass (§6.4) |
| **G-25** (NEW) | `03ak` §8 (J-1, J-7, J-10) | J-1 and J-10: narrowed to single confirmations (PA-12, PA-13). J-7: add NI-29 | Record | PO approval |

## Annex B — Final validation

| Check | Result |
|---|---|
| Corpus identity confirmed; extraction reused, not redone | Yes (§1.1). MD5 pairs; raw chunk counts match the chunk map |
| 03ah's branch claim re-verified, not trusted | Yes (§1.2). Chunk-hash comparison; divergent chunks read; diffs run; one correction (C-AL-1) |
| The whole open register compiled from the documents, not from the brief's summary | Yes (§2). Sources cited per group; the 55-row → 54-row mapping explained |
| Every PO turn read, not only those on the critical path | Yes (§1.3). 184 turns, chunk 2 in full, templates swept |
| Only PO words counted; Gemini proposals, summaries and silences excluded | Yes. Separated explicitly at J-10 (partition drop), Q9 (score definition), AJ-Q-1 (C320), AI-Q-2 (C280), AGX-10 (R6) |
| Every PO Answered finding cross-checked against newer locked text | Yes (§3.1–§3.2, "Against newer text" in each) |
| Partial answers state their exact residual | Yes. Every PA row has a "residual" |
| Contradictions flagged, not resolved | Yes. AH-Q-1 is carried as a contradiction; no new unresolved contradiction was found; three corpus drifts are settled only by date (§5.1) |
| No padding: tangential mentions are recorded as evidence, not as answers | Yes (§3.5). Evidence column kept separate; AC-52, Z-3 and V-8 were declined as answers |
| Count arithmetic explained, not asserted | Yes (§4). 65 → 64, with the alternatives 65, 67 and 68, each with its reason |
| Exactly one next PO question; its continued validity re-checked | Yes (§6). Unchanged, with evidence added to the readings only |
| No implementation claimed; Layer-2 gating stated | "How to read"; §7 |
| Files changed | This file only |

**This reconciliation is PROPOSED — NOT APPROVED.**
