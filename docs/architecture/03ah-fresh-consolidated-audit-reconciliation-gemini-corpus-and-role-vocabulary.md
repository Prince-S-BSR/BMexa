STATUS: PROPOSED — NOT APPROVED

# AD-01AH — Fresh Consolidated Audit Reconciliation: Gemini Evidence Corpus, Role-Vocabulary Rename and Reconciled Audit Progress

| | |
|---|---|
| Document type | Architecture governance record: a fresh consolidated audit reconciliation. It reconciles the Product Owner's current AD-01AG decision state against the Gemini evidence corpus, and against the 03ag baseline. It then recounts the unresolved clusters and selects one next PO question. |
| Relationship to 03ag | This document **extends and corrects** `03ag-consolidated-audit-update-post-po-decisions-and-audit-completeness-gate.md` (the reconciliation baseline). It does not replace it. Every 03ag identifier is preserved. Where this document changes a 03ag status, the change is stated with its source. |
| Repository state at start | Branch `claude/code-cli-project-init-mgjndj`. HEAD `c7c82d9` (auto-commit 2026-09-26 20:44:21 +0000). Working tree clean. |
| Tracking | Beads `Final-Verison-x8z` (P1, in progress). This document creates no Beads issues. |
| Date | 2026-09-28 |
| Status line meaning | `PROPOSED — NOT APPROVED` applies to the **architect analysis** here. The decision text the PO supplied in the handoff is `PO LOCKED` exactly as the PO stated it. No reading by the architect becomes a PO rule until the PO approves it. |
| Files changed | This file only. No schema, migration, code, test, Beads, Spec, requirements or earlier architecture file was edited. |

---

## How to read this document

**Decision status vocabulary (the PO's working rule 8).**

| Status | Meaning |
|---|---|
| `PO LOCKED` | Stated by the PO as decided, in the handoff or in an earlier PO record that no later PO text overrides. |
| `PARTIAL` | A counting category for a cluster: some limbs are PO LOCKED and at least one residual remains. |
| `ARCHITECT-DERIVED` | A reading or recommendation by an architect. That includes Gemini's own statements in the corpus. It is **never** a PO rule until ratified. |
| `OPEN` | A business question with no PO answer. |
| `UNTOUCHED` | A baseline cluster that no decision in the handoff reaches. |
| `SOURCE VERIFICATION REQUIRED` | The evidence is incomplete or only available in abridged form. |

**Reconciliation classes.** Section 2 uses these whenever an older rule meets a newer PO decision.

| Class | Used when |
|---|---|
| `SUPERSEDED` | The newer PO text addresses the **same subject** with explicit or exclusive wording, such as "only", "no separate approval" or "does NOT survive". The older rule no longer governs. |
| `NARROWED` | The newer text limits where the older rule applies, and the older rule survives outside that limit. |
| `CLARIFIED` | The two texts are consistent. The newer one makes the older one more precise, or restates it. |
| `UNRESOLVED CONTRADICTION` | The two PO texts conflict and neither says it updates the other. The architect may not choose between them. |
| `APPARENT CONFLICT (SCOPE)` | The texts look opposed, but they govern different subjects. |

Where an overlap is not explicit, the older text is held as **NARROWED — PENDING PO CONFIRMATION** and given a ledger-confirmation ID (`LC-n`). This continues 03ag §9.3.

**Terminology (the PO's rule 17 and the handoff rename).** From here on this document uses the PO's current vocabulary:

- **Site Head** replaces *Sales Head*.
- **Accounts** replaces *Finance*.
- **Builder-Side Admin** replaces *Builder Admin*.
- **CRM** is a **department** (Sales / CRM / Accounts / Marketing), not the BMexa system.

When an older text is **quoted**, its original words are kept, and the rename is given separately in the form ⟨rename: Sales Head → Site Head⟩. A quotation is never silently rewritten. The corpus often uses "CRM" for the software itself ("our CRM will…"). Those uses are quoted as found.

**Identifier discipline.**
- Every 03ag ID is preserved.
- New in 03ah:
  - `GC-n`: Gemini-corpus PO decision records.
  - `S-6`… : explicit supersessions.
  - `AGX-11`…`AGX-13`: new contradictions.
  - `AH-Q-1`: a new question cluster.
  - `LC-14`…`LC-21`: new ledger confirmations.
  - `NI-n`: new issues.
  - `ACG-INV-15`: a new Audit Completeness Gate investigation area.
  - `R-AH-n`: risks.
- Chunk citations have the form *"chunk N (date)"*. They refer to the Gemini exports. Raw line numbers (`L…`) are in `branch-of-cpo-final-assessment.md`, which contains every chunk up to 414 (§1.2).

**Implementation warning (it applies everywhere).** "Resolved" means resolved **as a business rule**. No inventory, hold, booking, approval, activity, follow-up, commission or audit-editability schema, policy or code exists in the repository. `audit_events` is the only built artefact these decisions touch. It still carries the four collisions named in 03ag §7.5.

**Where each required deliverable is.**

| Handoff requirement | Location |
|---|---|
| Section 1 — Source Inventory (and Phase 8 #1, Source Coverage and Completeness Statement) | §1 |
| Section 2 — Decision Reconciliation | §2 |
| Section 3 — Current Cluster Matrix (and Phase 8 #6) | §3 |
| Section 4 — Open Residuals | §4 |
| Section 5 — New Issues Created by the Current Decisions | §5 |
| Section 6 — Current Audit Progress (and Phase 8 #11, Accurate Resolution Count and Methodology) | §6 |
| Section 7 — Architecture Readiness | §7 |
| Section 8 — Next PO Question (and Phase 8 #12) | §8 |
| Phase 8 #2 — Complete Question-to-Decision Register | Annex A |
| Phase 8 #3 — Missing and Incomplete Decision Report | Annex B |
| Phase 8 #4 — Supersession and Contradiction Register | Annex C |
| Phase 8 #7 — Consolidated PO Decision Register | Annex D |
| Phase 8 #8 — Audit Completeness Gate Register | Annex E |
| Phase 8 #10 — Updated Risk and Dependency Register | Annex F |
| Phase 8 #9 — Architecture Change Register (named, not made) | Annex G |
| Final validation | Annex H |

---

## 1. Source Inventory

### 1.1 Sources used

| # | Source | Version / period | Role in this reconciliation | How it was read | Limitation |
|---|---|---|---|---|---|
| S1 | **PO handoff**: `…/scratchpad/po-handoff-ad01ag-fresh-reconciliation.md` (two stacked PO messages; the second is operative) | Undated. It post-dates 03ag (2026-09-26) and pre-dates this document (2026-09-28). | **Authoritative current decision state** (working rules 2–3): 21 "fully resolved" entries, 7 partial clusters, AG-Q-11…18, ACG-1…9, the rename | Read in full: 1,023 lines | It is a PO-authored **summary of answers**. The dialogue in which each question was put (wording, numbered options, the "Option 1/2" texts behind ACG) is not supplied. Question wording in Annex A is therefore paraphrased. |
| S2 | `main-branch.md` ("Main Branch CRM SaaS Platform Architecture Blueprint") | 35 chunks, 2026-09-04 07:46 → 09:32, plus a regenerated reply dated 2026-09-25 14:26. Header model: `gemini-3.1-pro-preview` | Primary evidence corpus | Read in full (method at §1.3) | 3 inaccessible references |
| S3 | `branch1.md` ("Branch 1 of…") | 153 chunks, 2026-09-04 → 15:18. Model `gemini-3.1-pro-preview` | Primary evidence corpus | Read in full | 26 inaccessible references |
| S4 | `branch1-of-branch1.md` ("Branch 1 of Branch 1 of…") | 159 chunks, → 2026-09-04 18:54. Model `gemini-3.1-flash-lite` | Primary evidence corpus | Read in full | 26 inaccessible references |
| S5 | `cpo-final-assessment.md` ("CPO Final Assessment of Branch of Branch of…") | 269 chunks, → 2026-09-07 05:28. Model `gemini-3.5-flash-lite` | Primary evidence corpus | Read in full | 33 inaccessible references |
| S6 | `branch-of-cpo-final-assessment.md` ("Branch of CPO Final Assessment of…") | 415 chunks, → 2026-09-12 07:02. Model `gemini-3.1-pro-preview` | Primary evidence corpus: the most complete lineage | Read in full | 38 inaccessible references |
| S7 | `docs/architecture/03ag-…` | 2026-09-26, 1,363 lines, `PROPOSED — NOT APPROVED` | Reconciliation baseline: 111-row register, cluster matrix, AGX/LC/ACG-INV registers | Read in full | Its own limitations (§0 there) carry over |
| S8 | Repository spot-checks | Current HEAD | Verification of specific claims only | `BMEXA_MASTER_SPEC.md` §02–§08, §10–§12, §16–§36, §39–§41, §50–§59, §86–§88. `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` §3. `ENGINEERING_RULES.md` (R6 header). `03ae` `PO-AE1·G/·L/·M/·N` (lines 250–300) | See L-2 |
| S9 | Beads `Final-Verison-x8z` | 2026-09-28 | Task context | `bd show` (read only) | — |

**Not available to this task:**
- The earlier-bundle verbatim text. It is known only in abridged form (03ag Appendix A; its F-3 persists).
- The original JSON chunkedPrompt exports. Only the orchestrating session's markdown extraction was read.
- The 39 Drive attachments (§1.4).

### 1.2 Structure of the Gemini corpus, verified

The five files are **one conversation tree**. `cmp`/`diff` checks run by this task established that each file is a byte-identical prefix of the most complete file, apart from the divergence points shown below.

```text
chunks 0–31   2026-09-04 07:46 → 09:32 ........... identical in all five files
 ├─ main-branch.md: chunk 32 (empty model turn), chunks 33–34 (a regenerated reply dated 2026-09-25)   END
 └─ chunks 32–148  → 2026-09-04 14:38 .......... identical in S3–S6
     ├─ branch1.md: chunks 149–152 (PO: "can you read this file?"; PO asks for a summary doc; both model replies empty)   END
     └─ chunks 149–157  → 18:54 ................ identical in S4–S6
         ├─ branch1-of-branch1.md: chunk 158 (CRO "final blueprint")   END  ← strict prefix of S6 (only a trailing newline differs)
         └─ chunks 158–267 → 2026-09-07 05:28 ... identical in S5–S6
             ├─ cpo-final-assessment.md: chunk 268 (CISO verdict)   END  ← strict prefix of S6 (only a trailing newline differs)
             └─ branch-of-cpo-final-assessment.md: chunks 268–414 → 2026-09-12 07:02   END
```

- **Where the branches agree.** Everything up to their divergence points, byte for byte. The only non-trivial differences in the shared region are two:
  - `main-branch.md` chunk 7 is an image-reference header, where the descendants have an empty chunk 7.
  - Chunk 32 in `main-branch.md` is an empty turn, while S3–S6 have Gemini's actual chunk-32 reply.
- **Where they diverge:**
  - `main-branch` diverges only with a regenerated reply (2026-09-25). It re-asks the builder-versus-broker question and cites the build plan "version 2.0 … 25 August 2026". It contains **no PO decision**.
  - `branch1` diverges with two PO requests that got empty replies, so it has **no decision content**.
  - S4 and S5 are strict prefixes of S6.
- **Consequence.** There is exactly **one** decision history, the S6 lineage. No branch contains a PO decision that another branch contradicts. Every corpus conflict found below is therefore a conflict **in time** (an older corpus rule against a newer PO decision), not a conflict between branches.

**The stages of the lineage** (chunk numbers):

| Chunks | Stage | Dates |
|---|---|---|
| 2 | A pasted earlier Gemini conversation (217,744 characters). It holds the master prompt, blueprint parts A–T, the first PO answers, the Phase 0 decisions and the Claude Code handoff exchanges. | Undated, before 2026-09-04 |
| 4–158 | Chief Requirements Officer interrogation | 09-04 |
| 159–168 | Chief Product Officer | 09-05 |
| 169–214 | Chief Product Architect | 09-05 |
| 215–240 | CRO/CPO/Architect re-audit | 09-05 → 09-06 |
| 241–256 | CFO | 09-06 |
| 257–268 | CISO | 09-06 → 09-07 |
| 269–323 | Chief Data Officer | 09-07 |
| 324–400 | Chief UX Officer | 09-07 → 09-08 |
| 401–411 | Master-specification drafts | 09-08 → 09-12 |
| 412–414 | Final pre-development red team | 09-12 |

**How the corpus relates to the repository.** The corpus **pre-dates** everything else: the repository's Master Spec, the consolidated requirements, the 03-series and the handoff.

`BMEXA_MASTER_SPEC.md` §26, §33, §51, §55, §56, §86, §87 and §88 map one-to-one onto the chunk-414 red-team findings and the chunk-412 prompt. So the Spec is visibly the post-red-team synthesis of this corpus.

It follows that **every corpus PO statement is older than every handoff decision**. Under working rules 4–5, a newer handoff decision prevails wherever it speaks to the same subject. The corpus prevails nowhere, but it can **expose** conflicts, earlier answers and silences.

### 1.3 Reading method and completeness statement

- **All textual content of all five files was reviewed.**
  - `branch-of-cpo-final-assessment.md` (1,046,793 bytes) was read end to end. Reading used a copy re-wrapped at 1,500 characters, with blank and separator-only ("⸻") lines removed, so that the long lines were not truncated. No text was dropped.
  - The unique tails of `main-branch.md` (chunks 32–34) and `branch1.md` (chunks 149–152) were read directly.
  - The single "unique" chunks of S4 (158) and S5 (268) were diffed against S6 and found identical apart from a trailing newline.
  - Everything else in S2–S5 is byte-identical to S6 (§1.2).
- **The internal-reasoning ("thought") chunks were read**, as the handoff required. Where they carry reasoning that bears on a decision, they are cited.
- **Repeated material was read, and it contributes no new decisions:**
  - the 35,153-character re-paste of the base, step-1 and step-2 prompts (chunk 215);
  - four drafts of the master specification (chunks 403, 406, 407 and 411).

### 1.4 Inaccessible references: a source-coverage limitation, named and not guessed

The export marks these chunks `DRIVE DOCUMENT/IMAGE REFERENCE — CONTENT NOT EMBEDDED, INACCESSIBLE`.

**The count is larger than the 2–5 per file the commissioning note anticipated.** Per file: main 3, branch1 26, branch1-of-branch1 26, cpo-final 33, branch-of-cpo 38. Across the corpus there are **39 unique inaccessible items**.

| Chunk(s) | Kind | What the *surrounding text* says it was (a description, not the content) | Decisions depending solely on it |
|---|---|---|---|
| 0, 1 | 2 Drive documents | Chunk 3 cites `Real-Estate-CRM-Phase-wise-Build-Plan.docx` and a "Feature-Comparison" document. Which ID is which is unknown. | None identified |
| 7 (main-branch only) | 1 image | Unknown. The descendants have an empty chunk | None |
| 48–57 | 10 images | "My Prestige App" / "My LTR" channel-partner app screenshots (chunk 58) | None. The PO's CP sub-agent rules are stated in text (chunks 64, 305) |
| 91–95 | 5 images | Proforma-invoice form screenshots (chunk 96) | None. The rules are stated in text (chunk 96) |
| 125–132 | 8 images | Project / inventory set-up screenshots (chunk 133) | None |
| 148 | 1 Drive document | `Feature-Comparison-Phase-wise-Full_1.docx` (chunk 151). The PO later said: *"Drop this file"* (chunk 155) | None, by the PO's own instruction |
| 218–222, 223–224 | 5 images + 2 documents | Farvision ERP screenshots, an Eldeco customer-ledger PDF and a tax-invoice PDF (chunks 225–227) | None. Gemini's description of them (e.g. *"Basic: 95238 Tax: 4762"*) is Gemini's reading and cannot be verified |
| 332–336 | 5 images | Privyr screenshots (chunks 337–338) | None |

Chunk 2 also cites non-embedded sources inline: "PPTX" and "MD" source badges, and `image_e923e3.png`. They are equally unavailable.

### 1.5 Scope discipline and reading-depth limitations

| ID | Limitation |
|---|---|
| **L-1** | The PO decision source is the handoff summary (S1). The Q&A through which those answers were given is not available. Annex A therefore paraphrases the questions and quotes only the answers. |
| **L-2** | The repository architecture corpus (00 → 03af) was **not** re-read end to end. As the commissioning note allowed, this document relies on 03ag's citations. It re-read only the specific passages listed at S8, to verify particular claims. |
| **L-3** | The AD-01AG baseline scratch file was not re-read. 03ag re-verified its 76-cluster count, and that verification is relied on. |
| **L-4** | The 54 carried open clusters were **not** re-derived one by one against the corpus. Where the corpus holds older PO text near one of them (e.g. the follow-up notification cadence, chunk 167), this is noted, and **no cluster is reclassified on that basis**. |
| **L-5** | The unbanded families (U-, T-, M-, N-1, Q0) and the AC-2…AC-49 residue remain un-de-duplicated. All counts are **verified minimums**. |
| **L-6** | Corpus fidelity rests on the orchestrator's markdown extraction, with the 39 inaccessible items of §1.4. |
| **L-7** | The earlier-bundle rules (§B/§C, AC-124…AC-131) exist only in 03ag's abridged form. Any contradiction that involves them (AGX-13) is marked `SOURCE VERIFICATION REQUIRED`. |

### 1.6 Completeness certification (bounded)

**Yes, within these sources.**
- Every PO decision in S1 has an entry in Annex A (the delta register) or in 03ag §3A. Annex A states which rows are retained unchanged.
- Every PO answer in the S6 lineage that bears on a current cluster, a partial residual or an ACG item is recorded in the GC register (§2.3).

**Not verifiable beyond these sources.** Any PO answer given outside S1 and the corpus cannot be known here. That includes the Q&A dialogue that produced S1.

**The reconciliation is therefore not labelled "final".**

---

## 2. Decision Reconciliation

### 2.1 Method

1. Every handoff decision (S1) was taken as `PO LOCKED` at the scope it states.
2. The S6 lineage was searched for **older PO text on the same subject**. Each overlap was classified with the five classes in "How to read".
3. Gemini's own statements, including its "locked", "approved" and "final blueprint" language, were treated as `ARCHITECT-DERIVED` and never as PO decisions (§2.6).
4. Handoff decisions were also compared with 03ag's open items, to establish what the handoff resolved (§2.5).

### 2.2 Timeline

| Period | Material | Authority for current decisions |
|---|---|---|
| ≤ 2026-09-04 → 09-12 (plus the regenerated reply of 09-25) | Gemini corpus (S2–S6) | Older PO text. It yields to any later PO decision on the same subject |
| After 09-12 | Master Spec and consolidated requirements (repository) | PO-owned sources, as 03ag §8.3 treats them. Older than the 03-series decisions |
| … → 2026-09-26 | 03-series, up to 03ag (`PO-AG1`, `PO-AG2`) | PO LOCKED where recorded as such |
| 2026-09-26 → 09-28 | Handoff (S1) | **Current authoritative state** |

### 2.3 GC register: PO decisions in the Gemini corpus that bear on current clusters

Quotations keep the PO's original wording, including its spelling. "Newer rule" names the handoff (S1) decision, or the 03ag decision, that now governs.

| GC | Chunk (date) · raw line | PO text (excerpt, original wording) | Bears on | Newer rule | Class |
|---|---|---|---|---|---|
| **GC-1** | 2 (pre-09-04) · L10322 | *"All leads automatically route to their Manager and marked as unassigned until manager redistribute them."* | AC-54 (Unassigned) | AC-54: *"If customer goes to Unassigned, customer remains active and an authorized manager later assigns."* | CLARIFIED |
| **GC-2** | 2 · L10354 | *"sales head will approve the commission amount, and the accounts will approve the payout after the milestones … 50% … after 20% of the payment, and the remaining 50% … after 30%."* ⟨rename: sales head → Site Head⟩ | AC-48 residual ("commission payment") | AC-48 (partial-payout rule) | CLARIFIED. It is evidence that payouts are **staged**, so the residual is real (§4.2) |
| **GC-3** | 2 · L10600 | Support tickets: *"escalate to support, and if the next 24 hours do not work, then … CEO."* | AG-Q-7 | AG-Q-7: *"BMexa has no approval SLAs."* | APPARENT CONFLICT (SCOPE): these are support tickets, not approvals (LC-19) |
| **GC-4** | 2 · L10798 | Cancellation: client → salesperson → *"request to the sales head. If the sales head approves … customer support team will mark the unit as canceled, and then the canceled unit will come back to the live inventory … Account team will process the refund."* | AG-Q-2, AG-Q-6 | AG-Q-2/AG-Q-6: the Site Head (or Project Head, post-Booked) initiates; *"No separate approval is required"*; CRM processes; *"only Site Head or Project Head can release it for resale"* | **SUPERSEDED** (S-14) |
| **GC-5** | 2 · L10969 | Refunds: *"both as tender directions, but after negotiation, we can have manual entry also."* (Gemini's reading: auto standard deduction plus manual override, chunk 206) | AG-Q-6 / `G-FL` | *"Builder determines refund/forfeiture; BMexa records, does not calculate."* | **SUPERSEDED** (S-16) |
| **GC-6** | 2 · L12902–12935 | Audit retention *"Option B (Archival System): … instantly accessible for 12 months … then … cold storage"*: *"option B for both."* | ACG-8 | ACG-8: indefinite retention, no automatic age-based deletion | APPARENT CONFLICT (SCOPE). Storage tiering is not deletion. Compatible only if cold storage counts as retention (ACG-INV-8). Gemini's later *"drop the partition"* (L-, chunk 2) is ARCHITECT-DERIVED |
| **GC-7** | 34 (09-04) · L14904 | CP portal only marks prospects. If a client books directly, *"it's up to the sales head whether they need to give commission to that broker or not."* The registration window is set by each builder | AC-48, `PO-X1` | AC-48 / `G-X1` (Stage-2 to a non-claimant CP) | CLARIFIED (the lineage of `PO-X1`) |
| **GC-8** | 39 (09-04) · L15004 | Brokerage tenant: *"approval of commission from the CRM department, from the team head, then CRM, and then accounts"* | AG-Q-11(c) | Handoff: *"CRM is a DEPARTMENT, not the BMexa system."* | CLARIFIED. "CRM department" pre-dates the rename |
| **GC-9** | 61 (09-04) · L15307 | CP bill: sales support verifies → *"sales head or VVP"* approves → accounts *"will mark it as credited or check prepared"* | AC-48 residual | AC-48 | CLARIFIED. It supplies the candidate boundary for "paid" (§4.2) |
| **GC-10** | 67 (09-04) · L15426 | Hold of 5–20 minutes, *"maximum time … 20 minutes … As soon as the time passes, it will get unblocked."* | AG-Q-1 | AG-Q-1: one continuous hold, 20-minute payment phase → non-expiring booking hold | **NARROWED**: the 20-minute expiry now applies only to the payment phase (LC-11, discharged §2.5) |
| **GC-11** | 73 (09-04) · L15532 | *"user can only hold unit after offering final cost sheet … if client want to hold for a day or so … request sales head, project head to hold it for longer duration. unit holded by sales head, project head will not automatically unhold"* | AG-Q-1 | AG-Q-1 names only two phases | NARROWED — PENDING PO CONFIRMATION (**LC-14**) |
| **GC-12** | 76 (09-04) · L15578 | *"CRM automatically place a 'Pending Approval Block' on the unit … while adding project, system will ask project head, that personal will do all the discount approvals."* | AG-Q-1, AG-Q-4 (discounts), AG-Q-11(a) | AG-Q-1 / AD-G-5 (one active hold per unit); AG-Q-4 (discount approval is a separate workflow) | NARROWED — PENDING (**LC-15**). It is also evidence that the Project Head is a **per-project role named at project set-up** |
| **GC-13** | 79 (09-04) · L15623 | *"he need approval to hold more than one booking at one time."* (Gemini's restatement: "One Active Hold Per Rep") | AG-Q-1-h; Spec §16 | AG-Q-1: *"Sales Rep may hold multiple units … no BMexa-imposed numeric maximum."* | The per-rep limit is **SUPERSEDED**. The approval-gate limb is held as **LC-16**. **It corrects 03ag LC-10**: Spec §16's *"hold one unit"* did originate as a per-rep limit |
| **GC-14** | 85 (09-04) | A backup customer may pay a token while a discount is pending; *"it's upon site head"* | AG-Q-1, AD-G-5 | AD-G-5: one active hold per unit | NARROWED — PENDING (part of LC-15). A second customer's claim cannot be a *hold* |
| **GC-15** | 88 (09-04) · L15775 | *"CRM will never receive any booking from any of the builder client …"* The flow is *"booking confirmation, it will go to sales support team, then it will go to CRM, then it will go to accounts"*; the Sales Head approves first | AG-Q-4 chain; AG-Q-11(c) | AG-Q-4 default: L1 Site Head → L2 CRM → L3 Accounts; Sales Support optional | Chain: **SUPERSEDED** as the default (S-17). CRM-as-department: CLARIFIED |
| **GC-16** | 99 (09-04) · L15926 | The Sales Head is booking *"level one"* and may edit brokerage/incentives before *"sales sports team"* | AG-Q-4, AC-48 | AG-Q-4 (L1 Site Head); AC-48 | CLARIFIED |
| **GC-17** | 114 / 117 (09-04) · L16235, L16304 | The clash badge is *"visible to the site head only"*; internal duplicates are auto-merged, with an alert to the owner | T-series (carried) | — (carried families) | Evidence only (L-4) |
| **GC-18** | 120 (09-04) · L16367–16369 | Exports: disabled except by grant, with remark and approval chain (*"if CEO is downloading the data, he need approval from VP"*). *"CRM department, CRM department means customer support management team."* It also asks for audit logs of commission edits | AG-Q-11(c); ACG-INV-1, -9 | Handoff CRM-as-department; ACG-9 | CRM: **CLARIFIED (explicit PO definition)**. Exports: APPARENT CONFLICT (SCOPE). The rule governs **business-data** exports; ACG-9 governs **audit-log** exports (ACG-INV-9) |
| **GC-19** | 123 (09-04) · L16516 | *"CRM team. CRM again customer sports management team"*: it gives customer-portal access | AG-Q-11(c) | as above | CLARIFIED |
| **GC-20** | 133 (09-04) · L16580 | The add-project form includes *"Project head"*, and the *"booking approval chain"* approvers are selected from teams, per project | AG-Q-3, AG-Q-4, AG-Q-11(a) | AG-Q-3/AG-Q-4 (per-project chain, named person per level) | CLARIFIED. Evidence that the Project Head is per-project |
| **GC-21** | 136 (09-04) | Versioned price list (V1 locked, V2 with an effective date) | AG-Q-13 | AG-Q-13 (the price-list version at the original submission) | CLARIFIED |
| **GC-22** | 145 (09-04) · L16851 | Support PIN, plus *"every single click your engineer makes inside their account is recorded on a permanent, undeletable legal Audit Log visible to the Builder CEO and admin."* | ACG-3, ACG-4, ACG-5 | ACG-3/4: the Builder-Side Admin **may edit or delete** audit records | **UNRESOLVED CONTRADICTION → AGX-11** (§5, Annex C) |
| **GC-23** | 157 (09-04) · L17115 | *"the formal Amendment workflow to protect revenue data"*, answering a question that included a tower switch, a plan change and co-applicant changes, with Sales Head approval | AG-Q-6 (unit transfer); Spec §25 | AG-Q-6: *"A Booked unit transfer is represented as: cancellation … + creation of a new booking … + linked transfer/adjustment record."* | **NARROWED**: a unit change after Booked is no longer an amendment. Plan and applicant amendments are unaffected |
| **GC-24** | 173 (09-05) · L18756–18758 | *"every project will have a sales head. The sales head can have multiple projects … CRM will have their own head or VP. Sales VP is different, CRM VP is different, Salesforce [Sales Support] department is different."* | AG-Q-11(a), (f) | Handoff departments: Sales / CRM / Accounts / Marketing | CLARIFIED in part. Sales Support's placement is **OPEN** (NI-2) |
| **GC-25** | 179 (09-05) · L18903 | Booking Initiated → *"for approval on sales head side … then it will go for KYC verification step. Once the KYC and documentation is verified then it will be marked as booked."* | AG-Q-4, V-23 | AG-Q-4: Accounts approval includes payment verification → Booked | **SUPERSEDED** as the default chain and as the act that establishes Booked (S-17) |
| **GC-26** | 181 (09-05) · L18964 | Sales Support = the verification layer (CP bills, KYC, receipts, brokerage); customer support = demand letters, portal, tickets, post-sale | AG-Q-11(f); AG-Q-4 (Sales Support optional) | AG-Q-4-d | CLARIFIED (role content). Department placement OPEN (NI-2) |
| **GC-27** | 189 (09-05) | The allotment letter is generated only by a manual click by customer support; it is not delivered *"until the CRM team"* pushes it | AG-Q-11(c) | — | CLARIFIED (CRM = post-sales team) |
| **GC-28** | 191 (09-05) · L19200 | On resignation, *"all the brokers and the clients … assigned to the site head or his reporting manager … marked as unassigned status."* The status tags include *Unassigned* | AC-54(b) | AC-54 Unassigned | CLARIFIED |
| **GC-29** | 193 (09-05) · L19253 | 30/60/90-day registration policy; masked last four digits; the site head can split commission (*"revenue sharing"*) at approval | AC-48; T-4/T-5 (carried) | AC-48 | CLARIFIED / evidence (L-4) |
| **GC-30** | 197 / 199 (09-05) | A lead transferred rep → broker B appears to B *"as a new lead … will not see any past history"*; the rep sees everything | AC-56, V-10 | AC-56 (no-history) | CLARIFIED. This is the lineage of the no-history concept |
| **GC-31** | 201 (09-05) · L19399–19403 | *"new leads … land on the name of site head … site head is the lead owner … VP can change lead owner because he is the boss of sales head … sales head one will not able to see that lead once it's transferred to sales head two"* | AC-55 (owner/handler); AG-Q-11(b); AC-51 | AC-55 (Lead Handler manages follow-ups); AC-51 (previous Site Head: *"can search by mobile number, can open current record READ-ONLY"*) | Owner/handler: CLARIFIED. **Site Head ≡ Sales Head in the PO's own usage**: CLARIFIED (supports the rename). Previous-owner visibility: **SUPERSEDED** (S-13) |
| **GC-32** | 205 (09-05) · L19483 | *"Only sales head will have rights to restore dump leads"*; a duplicate inquiry auto-restores | X-43 / AC-55 | AC-55: *"'Sales Head only' exclusivity does NOT survive where the current manager hierarchy grants transfer authority."* | **SUPERSEDED** (S-7) |
| **GC-33** | 209 (09-05) · L19594 | *"the system forces an account verified status … can be done by the sales support team … [or] accounts … I want to keep both"* | AG-Q-4 | AG-Q-4: *"Accounts approval includes payment verification."* | NARROWED — PENDING (**LC-18**) |
| **GC-34** | 243 (09-06) · L22892 | *"yes lock it"* (an immutable snapshot at Booked) | AG-Q-5 | AG-Q-5 (initial and final snapshots) | CLARIFIED (AG-Q-5 adds the initial snapshot) |
| **GC-35** | 245 (09-06) | *"broker will take the hit"*; the sales head may raise commission | AC-48 | AC-48 | CLARIFIED |
| **GC-36** | **247** (09-06) · **L22955–22962** | Commission release points are configured at project creation (after BBA registration; 50% at 20%, 50% at 30%). On cancellation the builder deducts commission from the customer's 10%. *"If the customer is refusing, then the builder will take an NOC from the channel partner that he will deduct that commission from his future revenue. If the channel partner is not giving that NOC … deducted from the customer."* | **AG-Q-6 (NOC)**; AC-48 | AG-Q-6: NOC scope *"ANY future booking made by the SAME Channel Partner, regardless of customer"*; the per-booking effect is OPEN | **An earlier PO answer to the pending question exists** (§8.3, NI-5) |
| **GC-37** | **249** (09-06) · L23002 | *"Automatically managed."* This answers whether BMexa itself carries a negative CP ledger and auto-deducts clawbacks from the next payout | AG-Q-6 | AG-Q-6: *"Already-paid commission is handled offline."* | **UNRESOLVED CONTRADICTION → AGX-12** |
| **GC-38** | 251 / 253 (09-06) | A TDS calculation field; an unmapped-advance (on-account) receipt state | Spec §87(6) (deferred); AG-Q-4 | — | Evidence (deferred item) |
| **GC-39** | 255 (09-06) · L23096 | *"Let CRM team decide this manually … no cancellation button on the customer portal … we can release the unit at the same time when we accepted the cancellation … CRM team can put the unit on cancellation and free the unit for future sale."* | AG-Q-2, AG-Q-6 | CRM processes (consistent); *"only Site Head or Project Head can release it for resale"* | CRM processing: CLARIFIED. Release at acceptance by the CRM team: **SUPERSEDED** (S-15) |
| **GC-40** | 263 (09-07) · L24013 | The offline store (IndexedDB) is *"cryptographically encrypted using a session-derived key that is instantly wiped the moment a user logs out"* | V-10 residual (offline caches) | V-10 (no-history enforcement in caches: OPEN) | APPARENT CONFLICT (SCOPE): device security is not no-history filtering. The V-10 residual stays OPEN |
| **GC-41** | 265 (09-07) · L24047 | PIN support sessions get *"access of full company system"* | ACG-INV-4, -10 | ACG-1 (security events) | Evidence for ACG-INV-15 |
| **GC-42** | **267** (09-07) · L24084 | *"Yes, block the self-approval … If there is no accountant and the accounts head is the only person … CEO or VP will approve … whatever changes the accounts person or the sales rep will do, his manager will approve that."* The question's stated scope was *"Cost Sheets, Booking Approvals, and Commission Payouts"* | AG-Q-3 (approver eligibility) | Earlier bundle §B.19 (abridged): *"Initiator may approve if active and eligible"* | **UNRESOLVED CONTRADICTION → AGX-13 / AH-Q-1** (SOURCE VERIFICATION REQUIRED) |
| **GC-43** | 272 (09-07) · L25166–25178 | Titles: MD, CEO, COO, CFO, Zonal Head/GM, VP Sales, AGM, …; *"CRM Head who will report to COO and every project can have a CRM personnel, customer support team person. We can have a Sales Support Team which will also report to the CRM Head."* | AG-Q-11(c), (f) | Handoff departments | CRM: CLARIFIED. **Sales Support under CRM contradicts GC-24** (an internal corpus drift; the later chunk 272 is newer) → NI-2 |
| **GC-44** | 274 / 280 (09-07) | A territory/scope tree plus a role × scope assignment, with no ad-hoc checkboxes | AC-55 ("project-level authorization") | AC-55 (conjunctive) | CLARIFIED. It supplies the mechanism, as an ARCHITECT reading |
| **GC-45** | 296 (09-07) | Amendments are stored as an immutable base booking plus adjustment records (Option B) | Spec §25 | — | CLARIFIED (consistent) |
| **GC-46** | 302 (09-07) · L25668 | *"strict, system-wide 'SOFT DELETE ONLY' architecture"* | ACG-3/ACG-4 ("delete") | ACG-3/4 | APPARENT CONFLICT (SCOPE) → ACG-INV-6 input (NI-9). Spec §56 later qualifies it |
| **GC-47** | 320 (09-07) · L26007 | *"'Unit Transfer' physically act as a formal Cancellation of the Booking for Unit 402 … + the creation of a brand new Booking for Unit 805 + a Ledger_Transfer_Entry"* | AG-Q-6 | AG-Q-6 unit-transfer representation | **CLARIFIED**: the handoff restates it. Its consequences are OPEN (NI-3) |
| **GC-48** | 344 / 347 (09-07 / 08) | Missed calls are logged as Follow-up activities (*Not Connected*, "No Answer", tomorrow) | LC-8 (an unanswered call fulfils a follow-up) | AC-57 / V-4 (fulfilment tied to FR) | CLARIFIED. It corroborates LC-8's premise, which remains a ledger item |
| **GC-49** | 349 / 374 (09-08) · L27578 | *"lock the unit permanently by simply inputting the 'Token Receipt Reference Number'"*; then *"proceed to fill booking form"* on a laptop; status Booking Initiated | AG-Q-1, AG-Q-12 | AG-Q-1: the hold converts *"When the Sales Rep proceeds to the Booking Form"* | NARROWED — PENDING (**LC-17**) |
| **GC-50** | 355 (09-08) · L27663 | An incomplete booking form: a banner on the rep at 24 h, then *"after 48 hours, it will go on sales head"* | AG-Q-7 | AG-Q-7 (no approval SLAs) | APPARENT CONFLICT (SCOPE). This is **form completion before submission**, not approval (LC-19) |
| **GC-51** | 365 (09-08) · L27835 | Offline: leads and notes may be captured; *"Hold Unit," "Request Discount," and "Generate Payment Link"* are disabled | AC-58 (offline Dump) | AC-58: *"Offline Dump uses device-recorded event time at synchronization."* | CLARIFIED (consistent: Dump is not blocked offline) |
| **GC-52** | 389 (09-08) · L28223 | *"Upload Invoice"* stays locked until Accounts confirms that the client has cleared the 20% milestone | AC-48 | AC-48 | CLARIFIED (eligibility-tranche evidence) |
| **GC-53** | 395 (09-08) · L28339 | *"'Executive One-Tap Approval' system (e.g., the CEO gets a secure Email with a Magic Link …) allowing them to authorize it straight from their phone without logging in"*, for exports and massive discounts | AG-Q-17 / AD-G-6; Spec §51; §87(1) | AG-Q-17: *"Booking details must still use authenticated non-bearer links."* Spec §51: *"A link must not function as an unrestricted bearer token … VALIDATE"* | APPARENT CONFLICT (SCOPE) with AG-Q-17, which covers booking approvals. **NARROWED by Spec §51** into a validation item (§87(1)). Security note NI-7 |
| **GC-54** | 167 (09-05) · L17830 | Follow-up reminders at T−2 min and T, then hourly checks; *"At the fourth reminder, it will send notifications to the manager and the sales representative"* | 03af "follow-up notification cadence" (UNTOUCHED); AC-55 | AC-55: *"Manager cannot independently create/assign/reassign/manage ordinary customer follow-ups."* | APPARENT CONFLICT (SCOPE): being notified is not managing (LC-19). Evidence only for the untouched cadence cluster (L-4). Spec §58 later softened it |

**Tally.**

| Class | Items |
|---|---|
| SUPERSEDED | GC-4, 5, 13 (per-rep limb), 15 (chain), 25, 31 (visibility limb), 32, 39 (release limb) |
| NARROWED | GC-10, 11, 12, 14, 23, 33, 49, 53. Six of them are held pending confirmation: GC-11, 12, 13 (approval limb), 14, 33, 49 |
| CLARIFIED | GC-1, 2, 7, 8, 9, 16, 18 (CRM), 19–21, 24 (part), 26–31, 34, 35, 39 (processing limb), 43 (CRM), 44, 45, 47, 48, 51, 52 |
| UNRESOLVED CONTRADICTION | GC-22 (AGX-11), GC-37 (AGX-12), GC-42 (AGX-13) |
| APPARENT CONFLICT (SCOPE) | GC-3, 6, 18 (exports), 40, 46, 50, 53 (vs AG-Q-17), 54 |

GC-17, 29 (part), 38 and 41 are **evidence only**.

### 2.4 Handoff decisions checked against the corpus, per current cluster

| Handoff cluster | Older corpus rule(s) | Result |
|---|---|---|
| AG-Q-1 hold lifecycle | GC-10, GC-11, GC-12, GC-13, GC-14, GC-49 | The 20-minute expiry is narrowed to the payment phase. The per-rep limit is superseded. The extended manager hold, the pending-approval block, the approval gate for a second hold and the token-reference precondition are **not addressed** by the newer text, and are held as LC-14 to LC-17. **No conflict undermines AG-Q-1.** |
| AG-Q-2 / AGX-8 | GC-4, GC-39 | Sales Head approval and CRM-team release are superseded. CRM processing is clarified. |
| AG-Q-3 authority | GC-20, GC-24, GC-42, GC-43, GC-44 | Consistent, except the **self-approval contradiction** (AGX-13) and **Sales Support's department placement** (NI-2). |
| AG-Q-4 chain | GC-15, GC-16, GC-25, GC-26, GC-33 | The old chain SH → Sales Support → (Accounts) is superseded as the default. The Sales Support payment marker is held as LC-18. |
| AG-Q-5 / AG-Q-13 correction and pricing | GC-21, GC-34 | Clarified. |
| AG-Q-6 post-Booked | GC-4, GC-5, GC-23, GC-36, GC-37, GC-39, GC-47 | Representation clarified. **An earlier NOC answer exists** (GC-36). **AGX-12** (offline versus automatic). The amendment workflow is narrowed. The **transfer-consequence** limb is OPEN (NI-3). |
| AG-Q-7 no approval SLAs | GC-3, GC-50, GC-54 | Apparent conflicts of scope only (LC-19). |
| AG-Q-8 / AG-Q-9 / AG-Q-18 approvers and audit | GC-22 | AG-Q-18 is consistent. The support-session log conflicts with ACG-3/4 (AGX-11). |
| AC-51 / AC-54 / AC-55 / AC-56 / AG-Q-15 transfer | GC-1, GC-28, GC-30, GC-31, GC-32 | Clarified, except where superseded: previous-Site-Head visibility (S-13) and Sales-Head-only revival (S-7). |
| AC-57 / V-23 / AG-Q-12 lead and follow-up | GC-48, GC-54 | Consistent. |
| AC-58 undo / revival | GC-32, GC-51 | Consistent. The duplicate-inquiry auto-restore (GC-32) is not addressed by AC-58 and belongs to `PO-AE1·F` (carried). |
| AC-48 Stage-2 | GC-2, GC-7, GC-9, GC-16, GC-35, GC-52 | Clarified. The staged-payout evidence sharpens the residual (§4.2). |
| V-4 / W-1 / W-4 | — | The corpus has no older PO text on the FUT limb, the per-project FR milestone or linked-source framing. The residuals are untouched by the corpus. |
| V-10 | GC-30, GC-40 | Lineage clarified. The offline-cache limb stays OPEN (scope). |
| AG-Q-17 | GC-53 | Scope conflict. Spec §51 narrows GC-53. |
| AG-Q-16 labels | — | **None of "New client transferred", "Client Transferred" or "Customer Transferred" appears anywhere in the corpus.** The corpus does not settle AG-Q-16, so it stays OPEN. |
| ACG-1…9 | GC-6, GC-18, GC-22, GC-41, GC-46 | ACG is not re-asked. The corpus supplies inputs to ACG-INV-1, -4, -6, -8, -9, -10 and the new -15 (Annex E), plus AGX-11. |

### 2.5 The handoff against 03ag's open items

| 03ag open item | Resolved by (handoff) | Now |
|---|---|---|
| **AGX-8** (booking-hold release versus Pre-Booked cancellation versus "rep must cancel") | AG-Q-1 note; AG-Q-2: *"this AGX-8 resolution is the authoritative reconciliation of the earlier conflicting hold-release/cancellation rules"*; V-23: *"Sales Rep requests Site Head to cancel; Site Head initiates cancellation; CRM processes it."* | **RESOLVED**, by explicit supersession S-6 |
| **AGX-9 / AG-Q-14** | *"Do not preserve a stale manual reassignment across a workflow-version change."* | **RESOLVED** (S-10) |
| **X-42** | AC-55: carry-over is permitted as part of a transfer; *"manager still cannot independently manipulate those follow-ups outside the transfer operation."* | **RESOLVED** |
| **X-43** | AC-55: *"Authorized Site Head may transfer a Dumped customer; transfer revives the customer. 'Sales Head only' exclusivity does NOT survive …"* | **RESOLVED** (S-7) |
| AG-Q-3 residuals (configurator; replacement eligibility) | AG-Q-3: CRM delegated configuration; *"any active user in the relevant department who has access to the relevant project"*; Department Head assigns; Builder-Side Admin appoints if the Department Head is inactive | **RESOLVED**. The *department* definition is now load-bearing (NI-2) |
| AG-Q-4 (Finance versus Accounts; the meaning of "payment") | *"Current vocabulary is Accounts, not Finance"*; Accounts approval includes payment verification; no fixed amount; BMexa records the verified amount | **RESOLVED** (S-11) |
| AG-Q-8 (normal reassignment? does the Builder-Side Admin keep the power?) | *"treated as a NORMAL manual reassignment … Builder-Side Admin also retains the ability to manually reassign"* | **RESOLVED**. **LC-4 discharged** |
| AC-51 (A-92 shape; completed-follow-up retention) | Previous Site Head: removed from the list, mobile search, read-only, no actions. Completed follow-ups follow the history mode | **RESOLVED** |
| AC-54 (a)–(e) | Departed rep reassigned before Dump; Unassigned exists; bulk without history still moves active-booking customers **with** history; only the Site Head or Project Head declares a rep unavailable; *"Authorized manager may transfer an active-booking customer even while current Rep is available"* | **RESOLVED**. **LC-12 discharged as NARROWED (explicit)** |
| AC-55 (b)(c)(d) | Carry-over; work mandate separate; Lead Handler; transfer directions and the Project-Head exception | **RESOLVED** |
| V-23 residuals | AGX-8 path; Booked → lead Booked; post-Booked → Booking Cancelled; booking record Cancelled; new follow-ups during Booking in Progress only for booking-related work | **RESOLVED** |
| AG-Q-6 (iii) and (iv): lead and booking state after a post-Booked cancellation | V-23; *"The resulting booking record for a post-Booked cancellation is `Cancelled`."* | **RESOLVED** |
| AG-Q-6 (i): Spec §26 "unit transfer ≠ cancellation" | Representation locked (cancel + new + linked record) | **PARTIAL**: the consequence limb is OPEN (NI-3) |
| AG-Q-6 (ii): NOC | Scope locked (*any future booking, same CP*) | **PARTIAL**: the per-booking effect is OPEN |
| repo AC-58 (1)–(7) | All seven answered (5 s; exact status restore; no new cycle; server/device time; no restatement of closed periods; Undo Success restores; "Success Undone"; revival request outside BMexa; correction-rate metric) | **PARTIAL**: Success after 5 s is OPEN, plus the offline-undo consequence (§4.4) |
| V-10 (audit access) | AG-Q-18 | Audit limb **RESOLVED**; jobs, caches and derived surfaces OPEN |
| AG-Q-12, 13, 15, 17, 18 | Answered | **RESOLVED** |
| **AG-Q-10** (does "approval history" include the reassignment history?) | **Not mentioned anywhere in the handoff** | **Still PARTIAL** (Annex B, item B-1) |
| LC-11 (hold expiry phase-specific) | *"Payment-hold expiry applies only to that 20-minute phase."* | **LC-11 discharged** (explicit) |
| AGX-10 (R6 / Spec §06 versus ACG-3/4; R6 / Spec §54 versus ACG-1) | The handoff lists the four `audit_events` collisions as *"IMPORTANT ARCHITECTURE COLLISIONS ARE STILL OPEN … NOT fixed yet"* | **OPEN** (ledger). The handoff frames R6 as the thing to be fixed, but it does not state that R6 is superseded |
| AGX-7 (AC-range reservation) | Not mentioned | **Still partial** (governance) |

### 2.6 Gemini statements in the corpus that are NOT PO decisions

These are `ARCHITECT-DERIVED`. Several were carried into the Spec, where the red team and the Spec itself later corrected them.

| Gemini statement (chunk) | Why it is not a PO decision | Current position |
|---|---|---|
| *"Critical Audit Logs … immutably (meaning nobody, not even the CEO, can delete these logs)"*; *"Hard Deletions (Banned)"* (122); *"immutable audit_events"* (266) | Gemini's own list, produced in answer to the PO's request to *"figure out what all can have audit log"* | Superseded by ACG-3/ACG-4 (PO LOCKED) |
| *"Reps can hold only ONE unit for 20 mins. Pauses ONLY if escalated to a Manager"* (122, 147, 403–411 Rule 10) | A restatement that hardens GC-13 and GC-11 | Superseded by AG-Q-1 |
| *"Booking Approval: Sales Head → Sales Support (Verification) → Accounts (Confirmation)"* (158); *"3-Stage Booking Lifecycle … Booked (Sales Support verifies…)"* (409, 411 Rule 13) | Gemini's synthesis of GC-25 and GC-33 | Superseded by AG-Q-4 |
| *"Hybrid Refund Logic: Automated standard deductions"* (206) | Gemini's reading of GC-5 | Superseded by `G-FL` |
| *"Monthly partition drops after 12 months … dumps … Glacier … drops the table partition"* (chunk 2 exchange) | Gemini's own policy | ACG-8 governs; Spec §55 rejects premature partitioning |
| *"Project Heads alone see the Clash Badge"* (158) | Contradicts the PO's own *"site head only"* (GC-17) | PO text governs (carried families) |
| *"CP_Ledger … Negative balances (Clawbacks) automatically offset future eligible payouts"* (323); *"Rule 7/8: Automated CP Clawbacks"* (403–411) | A restatement of GC-37 | Part of AGX-12 |
| *"Magic Link Email (One-Tap Approve/Reject)"* (403–411 Rule 2) | A restatement of GC-53 | Spec §51: validate; the red team rejected it (414) |
| The red-team blockers (414): unit-transfer clawback, magic link, offline clash, JWT claims, phase order, hold race | Gemini's audit findings | Absorbed into Spec §12, §26, §33, §51, §87, and AD-G-5. **The unit-transfer finding is revived as NI-3**, because AG-Q-6 now locks the cancellation representation |

---

## 3. Current Cluster Matrix

### 3.1 Counting method (unchanged from 03ag §10.4, with two corrections)

- **The unit of count is the unique cluster.** Decision IDs, sub-rules (`-a`, `-b` …) and handoff "entries" are **not** clusters (working rule 9).
- **Baseline clusters.** The 76 baseline clusters are classified limb by limb:
  - *Fully resolved*: every limb has a PO answer.
  - *Partial*: at least one limb is answered and at least one is open.
  - *Untouched / open*: no limb is answered.
- **New clusters** are counted only where the ambiguity has no home in an existing cluster.
- **Contradictions are not counted as clusters.** Each maps onto the cluster that owns its question. Governance and ledger contradictions (AGX-7, AGX-10, AGX-11) are tracked separately.
- **Correction 1.** The handoff's "21 fully resolved" is a count of **list entries**, not clusters. Entry 21 ("REPO AC-58 — RESOLVED PORTIONS") is itself described as *"NOT fully closed"*, and AC-58 is listed again as partial. It is counted **once, as partial**.
- **Correction 2.** **AG-Q-10** is a baseline cluster that 03ag classified as partial. It does not appear in the handoff, so it is carried as partial (B-1).

### 3.2 Fully resolved: 20 clusters (14 baseline + 6 new)

| # | Cluster | Resolved by | Business-rule status | Architecture still owed (never "built") |
|---|---|---|---|---|
| 1 | AG-Q-1 | 03ag, plus the handoff note (AGX-8) | PO LOCKED | Hold machine (two phases, one hold); DB uniqueness (AD-G-5, AD-G-17); LC-14…LC-17 ledger items |
| 2 | AG-Q-2 | Handoff (AGX-8 reconciliation) | PO LOCKED | Termination edges: pre-Booked cancellation = booking-hold release; resale-release authority |
| 3 | AG-Q-3 | Handoff | PO LOCKED | Department membership model (NI-2); capability grants (AD-G-8) |
| 4 | AG-Q-4 | Handoff | PO LOCKED | Per-project ordered levels; Accounts payment verification as the Booked gate; recorded verified amount |
| 5 | AG-Q-5 | 03ag | PO LOCKED | Two snapshots; unit swap during correction |
| 6 | AG-Q-7 | 03ag | PO LOCKED | No SLA fields |
| 7 | AG-Q-8 | Handoff | PO LOCKED | Approval Exception state; reassignment events; notifications |
| 8 | AG-Q-9 | 03ag, plus AG-Q-18 | PO LOCKED | Booking-visibility deny input (SEC-1), separate from audit visibility |
| 9 | AC-51 | Handoff | PO LOCKED | Previous-owner and previous-Site-Head projections |
| 10 | AC-54 | Handoff | PO LOCKED | Unassigned state; per-customer effective history mode in bulk transfers (NI-11) |
| 11 | AC-55 | Handoff (X-42, X-43) | PO LOCKED | Directional transfer authority; PH → PH exception; follow-up carry-over inside transfer only |
| 12 | repo AC-56 | 03ag | PO LOCKED | No-history projections |
| 13 | repo AC-57 | 03ag, plus the ordering from AG-Q-12 | PO LOCKED | Follow-up terminal states and ordering |
| 14 | V-23 | Handoff | PO LOCKED | Lead operational statuses (Booking in Progress, Booking Cancelled, Booked) |
| 15 | AG-Q-12 (new) | Handoff | PO LOCKED | Booking-initiation action as a single unit |
| 16 | AG-Q-13 (new) | Handoff | PO LOCKED | Price-list-version reference at the initial submission |
| 17 | AG-Q-14 / AGX-9 (new) | Handoff | PO LOCKED | The workflow version is resolved at resubmission |
| 18 | AG-Q-15 (new) | Handoff | PO LOCKED | With-history recipient: all post-transfer activities |
| 19 | AG-Q-17 (new) | Handoff | PO LOCKED | Template content; reason stays sensitive |
| 20 | AG-Q-18 (new) | Handoff | PO LOCKED | Audit surface independent of booking visibility |

### 3.3 Partially resolved: 9 clusters (8 baseline + 1 new)

| # | Cluster | Residual (detail at §4) |
|---|---|---|
| 1 | **AG-Q-6** | (i) The per-booking effect of the NOC. (ii) The consequences of the cancellation leg of a Booked unit transfer. AGX-12 is attached |
| 2 | **AC-48** | The "commission payment" boundary for a staged tranche |
| 3 | **V-4** | The FUT limb; the FUT consequences of W-1 and W-4 |
| 4 | **repo AC-58** | The "ordinary revival rules" for a Success not undone within 5 s; the undo of an offline-captured Dump |
| 5 | **W-1** | Activity-to-project association for other consumers; the per-project FR milestone |
| 6 | **W-4** | Linked-source framing; per-source FR; the relation to lead-creation / FR timing |
| 7 | **V-10** | Background jobs; offline caches; derived surfaces |
| 8 | **AG-Q-10** (omitted by the handoff) | Whether "approval history" includes the reassignment history |
| 9 | **AG-Q-11** (new; the PO says "still open") | Limbs (b), (c), (d) and (e) are resolved by the rename. **(a) Site Head versus Project Head** is open, and so is the new limb **(f)**: where Sales Support and Helpdesk sit among the four departments |

### 3.4 Untouched / still open baseline: 54 clusters (52 untouched + 2 touched-not-answered)

These are unchanged from 03ag §6.2. No handoff decision answers a limb of any of them.

| Group | Items | Count | Corpus note (evidence only, L-4) |
|---|---|---|---|
| Touched, not answered | `AC-50`; `N-2` | 2 | `N-2` is sharpened further by V-23 (booking-related follow-ups during Booking in Progress) |
| Money blockers | `AC-53`, `T-4`/`T-5` | 2 | GC-7, GC-29 (registration windows, masked digits, split commission) |
| Repo `AC-59` | Success Reason vocabulary | 1 | — |
| AD-01AE / AC chain | `AC-52`, `AC-6`, `AC-7`·re-basing, `AC-12`, `AC-13`, `AC-26`, `AC-42`, `AC-47` | 8 | — |
| N / V / W / Y | `N-4`, `V-19`, `V-24`, `W-5`, `Y-5` | 5 | — |
| AD-01 §10 | `Q2`, `Q3`, `Q5`, `Q8`…`Q16` | 12 | — |
| AD-01F | `V-3`·2, `V-6`, `V-8`·2, `V-11`, `V-14`, `V-18`, `V-21`, `V-26` | 8 | — |
| W / Y / Z | `W-2`, `Y-1`, `Y-2`, `Y-4`, `Z-1`…`Z-6` | 10 | — |
| 03af non-AC | Follow-up notification cadence; §13.3a #1, #3, #4, #7 | 5 | GC-54 is the older PO cadence, which Spec §58 later softened |
| Day boundary | `V-20`·tz / `M-6` | 1 | — |
| **Total** | | **54** | |

The handoff calls all 54 "untouched". Strictly, two of them (AC-50, N-2) are *touched but not answered*. The count is unaffected.

### 3.5 Newly opened clusters: 9 (8 from 03ag + 1 from 03ah)

| ID | Origin | Status |
|---|---|---|
| AG-Q-11 | 03ag | **PARTIAL** (§3.3 #9) |
| AG-Q-12, 13, 14, 15, 17, 18 | 03ag | RESOLVED (§3.2) |
| AG-Q-16 | 03ag | **OPEN**. The corpus does not settle it (§2.4) |
| **AH-Q-1** (NEW, 03ah) | GC-42 against earlier bundle §B.19 (AGX-13) | **OPEN — SOURCE VERIFICATION REQUIRED**. *May the person who initiated or created a booking (or a cost sheet or commission entry) act as its approver at any level?* |

### 3.6 Intentionally deferred: 2

- Spec §87(5), CP clawback validation. It is now narrower still: paid commission is offline, and the NOC scope is locked. But AGX-12 and NI-3 show the **business** limb is not deferred.
- Spec §87(6), TDS.

The other validation items in §87 (1–4, 7–9) are **not** baseline clusters. §87(1) (executive email approval) is touched by GC-53.

### 3.7 Awaiting source verification

| Item | Why |
|---|---|
| AH-Q-1 / AGX-13 | §B.19 is known only in abridged form |
| F-3 | The earlier bundle's per-ID text |
| The 39 inaccessible corpus items (§1.4) | No decision depends solely on any of them |

---

## 4. Open Residuals

Only what remains is listed. Nothing already answered in S1 is repeated as open.

### 4.1 AG-Q-6 — post-Booked cancellation / unit transfer / NOC

- **(i) The NOC's per-booking effect.** The PO has locked that the NOC *"applies to ANY future booking made by the SAME Channel Partner, regardless of customer."* What remains open is **what it takes from each such booking**. There is an **earlier PO answer**, GC-36 (09-06): the NOC is the Channel Partner's consent *"that he will deduct that commission from his future revenue"*. On that reading, the amount recoverable is **the commission already paid on the cancelled booking**, set off against future revenue until it is recovered. That answer uses different words from 03ag's record of `PO-AG1` (*"forgo commission from a future booking"*) and from the handoff (*"waive"*). The PO has not confirmed it since. **Status: OPEN, with an earlier answer to be confirmed or replaced.**
- **AGX-12 is attached.** *"Already-paid commission is handled offline"* (handoff) conflicts with *"Automatically managed"* (GC-37: BMexa carries a negative CP ledger and auto-deducts) and with Spec §33 (*"the CP ledger may become negative. Future eligible payouts may be reduced"*). If the PO confirms GC-36's set-off reading of (i), the two can be reconciled: recovery through the refund is offline, and recovery through the NOC set-off is carried in BMexa. **That reconciliation is the architect's; it is not decided.**
- **(ii) The consequences of the cancellation leg of a Booked unit transfer.** The representation is locked (cancel A + new B + linked transfer/adjustment record). Nothing says whether the cancellation of A carries the ordinary post-Booked consequences:
  - unpaid commission revoked;
  - already-paid commission recovered (and so NOC-eligible);
  - Stage-2 allocation;
  - lead status → Booking Cancelled.

  Spec §26 says: *"UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK … the financial and brokerage consequences must be explicitly determined."* **Status: OPEN** (NI-3).

### 4.2 AC-48 — Stage-2 change or revocation

- **Remaining: when a staged tranche counts as "paid".** The corpus fixes the shape: project-level release points (GC-36, GC-52); CP bill statuses *"credited or check prepared"* (GC-9); and the PO's own partial-payout example in the handoff. The remaining decision is narrow: whether a tranche is "paid" at **cheque prepared**, at **credited**, or at another act.
- Reversal mechanics are architecture work and not asked.

### 4.3 V-4 — FR / FUT

- The **FUT limb**: does a Follow-up activity count for FUT, and so does a change of status to New?
- The **FUT consequences** of W-1 and W-4.
- The corpus holds no older PO text on FUT.

### 4.4 Repo AC-58 — undo / revival

- **(a)** The *"ordinary revival rules"* for a **Success that is not undone within 5 seconds** (the PO's residual).
- **(b)** A consequence exposed by the corpus: **an offline-captured Dump** is timed by the device clock (handoff), and offline capture is permitted (GC-51, Spec §19). Is its 5-second undo window measured on the device, and can the undo itself be captured offline?

  A booking-initiating Success cannot be captured offline, because it starts a hold and holds are blocked offline (GC-51, Spec §19). So the question arises for Dump only.

### 4.5 W-1 — one call, two projects

- Activity-to-project association for FUT, reporting and timelines.
- Whether a per-project FR milestone exists, and how it relates to the Inquiry-level FR.
- No generalisation is made.

### 4.6 W-4 — multi-source FR clock

- Which source is "linked" when there are several.
- Whether a per-source FR metric exists.
- The relation to Inquiry-level lead creation and FR timing.
- No source precedence is invented.

### 4.7 V-10 — no-history enforcement

- Background jobs.
- Offline caches. GC-40's encryption-at-rest rule does **not** answer this.
- Other derived and secondary surfaces.
- AG-Q-18 is not extrapolated to them.

### 4.8 AG-Q-10 — booking and approval records visible without history

- Whether *"approval history"* includes the **reassignment history** (prior AC-129/AC-130), which carries a reason that is sensitive under AD-G-7 and AG-Q-17.

### 4.9 AG-Q-11 — role vocabulary

- **(a) Site Head versus Project Head.** Are they one position or two? If two, does the Project Head report to a Site Head? The evidence points both ways:
  - AC-55's exception *"Project Head may transfer to another Project Head under the SAME Site Head"* implies two positions in a hierarchy.
  - GC-12 and GC-20 describe a per-project Project Head named at project set-up.
  - GC-24: *"The sales head can have multiple projects."*
  - Spec §03 lists *"Project Head / Site Head"* as **one** entry. After the rename, it sits beside a second entry that is also "Site Head" (NI-1).
- **(f) Placement of Sales Support and Helpdesk** among Sales / CRM / Accounts / Marketing (NI-2).
- Resolved limbs, not re-asked: (b) Sales Head → Site Head; (c) CRM is a department (clarified by GC-18, GC-19, GC-27 and GC-43); (d) Finance → Accounts; (e) Builder Admin → Builder-Side Admin.

### 4.10 Other open clusters

| Cluster | Question |
|---|---|
| AG-Q-16 | Are "New client transferred" (`PO-AE1·M.1`), "Client Transferred" (`PO-AG1·F-RV-a`) and "Customer Transferred" (AC-56) one system activity or several? |
| AH-Q-1 | Self-approval (§3.5) |

### 4.11 Ordered residual queue (not asked; recorded for sequencing)

The handoff's final line asks for *"list of questions … in a sequence"*, while working rule 13 says to ask exactly one at a time. This queue is the sequence. **Only item 1 is asked** (§8).

| # | Item | Why it comes here |
|---|---|---|
| 1 | AG-Q-11(a) — **asked** | §8 |
| 2 | AG-Q-6(ii) — transfer-cancellation consequences | Upstream of the NOC's trigger population and of the booking-cancellation edge |
| 3 | AG-Q-6(i) — the NOC per-booking effect, confirming or replacing GC-36 | Discharges AGX-12 if answered on the set-off reading |
| 4 | AGX-12, if item 3 does not discharge it | — |
| 5 | AG-Q-11(f) — Sales Support / Helpdesk department placement | — |
| 6 | AH-Q-1 — self-approval | After source verification of §B.19 |
| 7 | AG-Q-10 — reassignment history | — |
| 8 | AC-48 — the tranche "paid" boundary | — |
| 9 | V-10 residual | — |
| 10 | Repo AC-58 (a), (b) | — |
| 11 | V-4 FUT | — |
| 12 | W-1 | — |
| 13 | W-4 | — |
| 14 | AG-Q-16 | — |
| 15 | Carried families | — |

**Separate record-keeping items** (not business questions): AGX-10 ledger; AGX-11 ledger; AGX-7 range reservation; LC-1…LC-21.

---

## 5. New Issues Created by the Current Decisions

Each item is created or exposed by the **current** decisions: the handoff, sometimes read together with the corpus or the Spec. None of them is a PO decision.

| NI | Type | Issue | Evidence | Consequence | Home |
|---|---|---|---|---|---|
| **NI-1** | Terminology collision | **The rename Sales Head → Site Head collides with Spec §03**, which lists *"Sales Head"* and *"Project Head / Site Head"* as **two** builder-side users. After the rename, either the two entries merge (making Project Head a synonym), or "Site Head" names two different people. AC-55's PH → PH exception *"under the SAME Site Head"* requires PH ≠ SH and PH below SH. | Spec §03; AC-55; GC-12, 20, 24, 31 | Every authority the PO has locked names one or both of these principals: payment-hold release, pre-Booked cancellation (SH only), post-Booked cancellation (SH or PH), resale release (SH or PH), Approval Exception (SH or PH), declaring a rep unavailable (SH or PH), transfer direction (PH → PH). Capability grants (`R2`, AD-G-8) cannot be modelled until the relation is known. | AG-Q-11(a). **Blocks Security in every domain** |
| **NI-2** | Terminology / department model | The handoff's departments are **Sales / CRM / Accounts / Marketing**. The Spec (§03) and the consolidated requirements (§3) have Helpdesk, Sales Support and Customer Support rows, and **no CRM or Marketing row**. The corpus places Sales Support under the CRM Head (GC-43), after earlier calling it a separate department (GC-24). It places Helpdesk under the project's head of sales (chunk 2, L10600 region). | Handoff AG-Q-3; Spec §03; Cons. §3; GC-24, 26, 43 | AG-Q-3's replacement rule (*"active user in the relevant department"*) and AG-Q-4's optional Sales Support level both depend on department membership. If Sales Support is inside CRM, a Sales Support user becomes eligible to replace a **CRM-level** approver. | AG-Q-11(f) |
| **NI-3** | Workflow / data model / financial | **A Booked unit transfer is now, by definition, a cancellation.** Read literally, it inherits every post-Booked cancellation consequence: unpaid commission revoked (AG-Q-6), paid commission recovered (and so NOC-eligible), lead status → *Booking Cancelled* (V-23), booking record → *Cancelled*. The "linked transfer/adjustment record" is the only hook for carrying anything over, and its semantics are not stated. | AG-Q-6; V-23; AD-G-2; Spec §26, §33; the red team's "Unit Transfer Clawback Bug" (414) | Wrong either way. Either every upgrade penalises the CP and flips the customer's status, or the Unit B booking silently inherits commission and Stage-2 without a rule. | AG-Q-6(ii) |
| **NI-4** | Contradiction | **AGX-12**: *"Already-paid commission is handled offline"* against GC-37 (*"Automatically managed"*) and Spec §33 | Handoff; GC-37; Spec §33 | Decides whether the CP Ledger is a CP-level running account able to carry a recoverable balance across bookings, or per-booking records only | AG-Q-6(i) |
| **NI-5** | An earlier answer exists | The **pending NOC question already has an older PO answer** (GC-36: deduct the paid commission from *future revenue*). 03ag recorded `PO-AG1` as *"forgo commission from a future booking"*, and the handoff says *"waive"*. The three wordings differ. | GC-36; 03ag §3.1; handoff | Asking the NOC question without citing GC-36 risks a second, inconsistent answer. **Working rule 15 is triggered** | AG-Q-6(i); §8.3 |
| **NI-6** | Audit contradiction / integrity | **AGX-11.** The PO locked a *"permanent, undeletable legal Audit Log"* for support-session activity (GC-22). ACG-3/ACG-4 now let the Builder-Side Admin edit or delete audit records. The same Builder-Side Admin who **grants** the support PIN (GC-22) could then **delete the trail** of what support did during that session. Visibility is also split: GC-22 says *"Builder CEO and admin"*; ACG-5 says the Builder-Side Admin plus management within scope. | GC-22; ACG-3, 4, 5, 6 | ACG-6 meta-records keep a trace of any deletion. Whether the support-session trail is **exempt** from ACG-3/4 is undecided. ACG is **not re-asked**. The clarification needed is only the ledger status of GC-22. | Governance (like AGX-10) |
| **NI-7** | Security | The PO chose one-tap **unauthenticated** email-link approval for exports and "massive discounts" (GC-53). The red team rejected it (414), and Spec §51 demotes it to "validate". AG-Q-17 requires authenticated non-bearer links only for **booking** details. So discount-approval and export-approval links have **no PO-level non-bearer rule**. ACG-9's audit-log export by the Builder-Side Admin is also not placed under GC-18's two-person export chain. | GC-18, 53; AG-Q-17; Spec §51, §52, §87(1); ACG-9 | A bearer approval link on a discount would bypass AG-Q-4's authority check | §87(1) validation; ACG-INV-9 |
| **NI-8** | Contradiction (approval) | **AGX-13 / AH-Q-1.** GC-42 blocks self-approval for booking approvals, cost sheets and commission payouts. Earlier bundle §B.19 allows the initiator to approve if active and eligible. AG-Q-3's replacement-eligibility rule (any active department user with project access) could also name the **initiator** as a replacement approver. | GC-42; 03ag Appendix A §B.19; AG-Q-3 | Segregation of duties in the approval model | AH-Q-1 |
| **NI-9** | Audit / data model | ACG-3/4's *"edit or delete"* meets the PO's system-wide **soft-delete-only** rule (GC-46). Is an authorised audit "deletion" a soft delete (retained, flagged, and still under ACG-8) or a physical removal? ACG-8 (retention) and ACG-6 (meta-record) point to soft. **Not decided** | GC-46; ACG-3, 4, 6, 8; Spec §56 | Decides the audit store's delete path and its retention consequence | ACG-INV-6 (architecture; may need a PO answer later) |
| **NI-10** | Governance / counting | The handoff omits **AG-Q-10**, lists **AC-58** as both resolved and partial, and calls two touched clusters "untouched" | S1 against 03ag | The minimum was undercounted by one (§6) | Annex B |
| **NI-11** | Data model | AC-54 makes the **effective history mode per customer** differ from the batch setting: a bulk transfer set to *without history* still moves active-booking customers *with history*. Follow-up handling (AC-51) and visibility (AC-56 / AG-Q-15) then differ per customer within one batch | AC-54; AC-51; AC-56; AG-Q-15 | The transfer record must hold the per-customer effective mode, not only the batch mode | Architecture work (not a PO question) |
| **NI-12** | Security (visibility) | AG-Q-9 plus AG-Q-18 make booking visibility **non-monotonic** (a *deny* input), while **audit-log** visibility about the same booking survives for a management user within scope. AG-Q-15 widens what a with-history recipient sees to activities authored by others, including the Site Head's | AG-Q-9, 15, 18; ACG-5 | Audit rows need write-time scope anchors that do not depend on booking visibility (extends SEC-1 and SEC-8) | ACG-INV-5 |
| **NI-13** | Workflow | AGX-8's resolution routes a pre-Booked cancellation through the **Site Head only** and then lets the *"Site Head … mark the unit Available"*. Resale of **cancelled inventory** is *"only Site Head or Project Head"*. Whether a pre-Booked-cancelled unit passes through the *Cancelled Inventory* state (AD-G-1) is still not explicit (03ag §8.2). The Project Head is excluded from one act and included in the next | AG-Q-2; AG-Q-6; AD-G-1 | Unit-machine edge ambiguity; depends partly on AG-Q-11(a) | Architecture (AD-G-16); then AG-Q-11(a) |
| **NI-14** | Workflow / data model | AG-Q-12 makes one booking-initiation action do four things: record readiness, start the 20-minute hold, **fulfil** the pending follow-up, and then enter Booking in Progress. AC-58's Undo Success must restore *"exact pre-Success booking/lead state"* and return the fulfilled follow-up to *pending*. So the initiation must be **one reversible unit for 5 s**, including the release of the hold it created | AG-Q-12; AC-57; AC-58 | Transaction and event design (Spec §68) | Architecture work |
| **NI-15** | Hold model | The older PO hold rules (GC-11 SH/PH extended hold; GC-12 and GC-14 pending-approval block and backup token; GC-13 approval gate for a second hold; GC-49 token-reference trigger) are **neither adopted nor rejected** by AG-Q-1's two-phase model. Spec §16 still lists *"hold extension"* | GC-11–14, 49; AG-Q-1; Spec §16 | If any survives, the hold machine gains a phase or a guard | LC-14…LC-17 (record-keeping) |
| **NI-16** | Audit coverage | The PO's corpus rules add required audit subjects: support-session **reads and clicks** (GC-22, GC-41); export requests, approvals and reasons with alerts (GC-18); commission edits and splits (GC-18, GC-29); handler transfers (chunk 201); soft-deletes (GC-46). So ACG-INV-1's open "reads" limb is **answered for support sessions only** | GC-18, 22, 29, 41, 46 | Event volume; the support-session trail spans tenants (platform actor, tenant data) | ACG-INV-1, -4, -15 |

---

## 6. Current Audit Progress

### 6.1 Reconciled figures

> **BMexa Audit Progress — AD-01AG (reconciled in 03ah, 2026-09-28)**
>
> **Original baseline:** 76
>
> **Fully resolved:** **20** — 14 baseline + 6 new (AG-Q-12, 13, 14, 15, 17, 18)
>
> **Partially resolved:** **9** — 8 baseline (AG-Q-6, AG-Q-10, AC-48, V-4, repo AC-58, W-1, W-4, V-10) + 1 new (AG-Q-11)
>
> **Untouched:** **54** — 52 untouched + 2 touched-not-answered (AC-50, N-2)
>
> **Newly opened:** **9** — 8 from 03ag (AG-Q-11…18) + 1 from 03ah (AH-Q-1). Of these, 6 are resolved, 1 is partial and 2 are open.
>
> **Current open minimum:** **65** (verified minimum)

### 6.2 Arithmetic

| Check | Computation |
|---|---|
| Baseline integrity | 14 fully resolved + 8 partial + 54 untouched = **76** ✓ |
| New clusters | 6 resolved + 1 partial (AG-Q-11) + 2 open (AG-Q-16, AH-Q-1) = **9** ✓ |
| Unresolved minimum | 8 baseline partial + 54 untouched + 3 unresolved new = **65** |
| Fully resolved (all) | 14 + 6 = **20** |

### 6.3 Reconciling the three figures (78 → 63 → 65)

| Source | Figure | Composition | Difference from 03ah |
|---|---|---|---|
| 03ag (2026-09-26) | **78** | 16 partial + 54 open + 8 new | −13: eight baseline partials became fully resolved (AG-Q-2, 3, 4, 8, AC-51, 54, 55, V-23) and six new clusters were resolved (−14); AH-Q-1 is new (+1) |
| PO handoff | **63** | 7 partial + 54 + 2 new open | +2: **AG-Q-10** is omitted from the handoff yet still partial (+1); **AH-Q-1** is new in 03ah (+1). The handoff's "21 fully resolved" = 14 baseline + 6 new + AC-58 listed in both lists. That affects the resolved count only, not the 63. |
| **03ah** | **65** | 8 + 54 + 3 | — |

**Which figure this document adopts, and why:** **65**.

- The PO's arithmetic method is followed exactly: partial + untouched + remaining new.
- Only two inputs are corrected, and each is traceable:
  - one cluster the handoff omitted (AG-Q-10, whose residual no handoff decision reaches);
  - one new cluster the corpus exposes (AH-Q-1).
- If the PO rules that AG-Q-10's residual is closed, or that AH-Q-1 is not a question, the figure returns to 64 or 63 accordingly.

### 6.4 Why 65 is only a minimum

- **Unbanded families.** The U-series (other than U-10), the T-series (other than T-4, T-5 and T-6), M-2/5/8/9/14, N-1, N-3, W-3·enforcement, Q0-a…e, AD-01AE's three non-AC items and the AC-2…AC-49 residue remain **excluded and un-de-duplicated** (03ag §6.2). Some may duplicate counted clusters. For example, AG-Q-11 may merge with M-3; M-9 (unit transfer) is coupled to AG-Q-6(ii); N-3 is coupled to AC-54. Others may be distinct, and would **raise** the total.
- **The carried 54.** These were not re-derived against the corpus (L-4).
- **Partial-to-new judgements.** Several items are placed as residuals of existing clusters rather than counted as new: NI-3 inside AG-Q-6; NI-2 inside AG-Q-11; the offline undo inside AC-58. A stricter method would count them separately and raise the total.

**No exact global total is claimed** (working rule 10).

---

## 7. Architecture Readiness

**The architecture is NOT complete.**
- No domain has a designed data model, security model or tests.
- Each "can proceed" below is **conditional**. It means design work may start on the parts that no open PO question reaches, subject to the PO's approval of this document and to phase gates.

| Domain | Business rules resolved | Remaining blockers | Data Model can proceed? | Security can proceed? | PO questions still blocking |
|---|---|---|---|---|---|
| **Hold / Booking / Unit** | AG-Q-1, AG-Q-2 (AGX-8), AG-Q-5, AG-Q-12, AG-Q-13, V-23, AD-G-1, AD-G-5; AG-Q-6 initiators, no approval, CRM processing, unit Cancelled, separate resale release, refund record-only, booking record Cancelled, transfer representation | AG-Q-6(ii) transfer-cancellation consequences (NI-3); NI-13 (Cancelled Inventory edge); NI-14 (reversible initiation unit); LC-14…LC-17 (legacy hold rules); AC-50 (carried) | **Conditionally yes** for the hold machine (two phases, one hold, DB uniqueness) and for the pre-Booked booking machine. **No** for the post-Booked cancellation and transfer edges, until AG-Q-6(ii) | **No.** The principals for release, cancellation and resale depend on AG-Q-11(a) | AG-Q-11(a); AG-Q-6(ii) |
| **Approval Workflow** | AG-Q-3, AG-Q-4, AG-Q-7, AG-Q-8, AG-Q-9, AG-Q-14, AG-Q-17, AG-Q-18 | Department membership (NI-2); self-approval (AH-Q-1 / AGX-13); AG-Q-10 reassignment history; the non-bearer rule for discount-approval links (NI-7) | **Conditionally yes**: versioned per-project workflows, named assignees per level, Approval Exception, reassignment history, no SLA fields. Department membership must be modelled generically until AG-Q-11(f) | **No**: eligibility depends on AG-Q-11(a)/(f) and AH-Q-1 | AG-Q-11(a), AG-Q-11(f), AH-Q-1, AG-Q-10 |
| **Lead / Follow-up / FR** | AC-57, AC-55 (X-42, X-43), V-23 statuses, AG-Q-12 ordering, repo AC-58 (most), V-4 FR limbs | V-4 FUT; W-1; W-4; AC-58 (a) and (b); AG-Q-16; carried families (Q-, V-, W-, Y-, Z-series; notification cadence; V-20·tz) | **Partially**: the activity stream, follow-up terminal states and owner/handler can proceed. **FR/FUT metric definitions cannot** | **Conditionally yes** for owner/handler and transfer authority (AC-55), pending AG-Q-11(a) | V-4 (FUT), W-1, W-4, AC-58, AG-Q-16 |
| **Transfer / Visibility / Security** | AC-51, AC-54, AC-56, AG-Q-9, AG-Q-15, AG-Q-18 | V-10 residual (jobs, caches, derived surfaces); AG-Q-10; per-customer effective history mode (NI-11); non-monotonic visibility (NI-12) | **Yes, conditionally**: transfer events, custody intervals, per-customer effective history mode | **No**: V-10 and AG-Q-10 decide what the projections must hide | V-10, AG-Q-10, AG-Q-11(a) |
| **CP / Commission** | AD-G-2; AC-48 (before payment, unpaid-only, non-claimant); `PO-X1`; AG-Q-6 revocation, paid offline, refund deduction, NOC scope | AG-Q-6(i) NOC effect (GC-36); AGX-12; AG-Q-6(ii) transfer consequences; AC-48 tranche "paid"; AC-53; T-4/T-5; §87(5), §87(6) deferred | **No**: the shape of the CP Ledger (per-booking or a running account with a recoverable balance) is undecided | **No** | AG-Q-6(ii), AG-Q-6(i), AC-48, AC-53, T-4/T-5 |
| **Audit** | ACG-1…ACG-9 (locked, not re-asked); AG-Q-18 | AGX-10 (R6 / Spec §06, §54, ledger); **AGX-11** (support-session trail); NI-9 (soft or hard delete); the four built `audit_events` collisions; ACG-INV-1…15 | **Analysis only**: ACG-INV-1 (inventory) and ACG-INV-2 (gap analysis). **No schema change** until the AGX-10/AGX-11 ledger items are confirmed | **No** | None as business questions. The ledger confirmations AGX-10 and AGX-11 are record-keeping, and ACG is not re-asked |

---

## 8. Next PO Question

### 8.1 The question (exactly one)

> **Site Head and Project Head.** Your current decisions give authority to both names:
> - the **Site Head** alone initiates a Pre-Booked cancellation;
> - the **Site Head or Project Head** may initiate a post-Booked cancellation, release cancelled inventory for resale, resolve an Approval Exception, and declare a Sales Rep unavailable;
> - a **Project Head may transfer to another Project Head "under the SAME Site Head."**
>
> The Master Spec, however, lists **"Project Head / Site Head"** as a single role. It lists it next to a separate "Sales Head", which you have now renamed Site Head.
>
> **In BMexa, is the Project Head a separate position that reports to a Site Head (so that one Site Head can have several Project Heads under them), or are Site Head and Project Head two names for the same position?**

**Readings the evidence allows.** They are presented neutrally; none is preferred.

| Reading | Evidence for it | Effect |
|---|---|---|
| (i) **Separate, and the Project Head reports to a Site Head** | AC-55's PH → PH exception; GC-12 and GC-20 (a Project Head named at project set-up); GC-24 (*"sales head can have multiple projects"*) | "Site Head or Project Head" grants go to two principals at two levels. Pre-Booked cancellation stays with the Site Head only. Spec §03 needs correcting |
| (ii) **The same position under two names** | Spec §03 (*"Project Head / Site Head"*); GC-13 region and GC-31 (*"it's upon site at project head"*, *"he is the project head in sales head"*) | AC-55's PH → PH exception reads as a Site Head → Site Head transfer under a common superior. It then needs restating |
| (iii) **Separate but parallel** (the Project Head does not report to a Site Head) | Not directly supported | Every "or" grant becomes two independent principals. The AC-55 exception needs a different anchor |

### 8.2 Why this question satisfies the handoff's criteria

| Criterion | Assessment |
|---|---|
| Genuinely unresolved | The handoff lists AG-Q-11 as *"Still open"* and names "Site Head vs Project Head" first. The corpus is ambiguous (§4.9) |
| Not already answered | The rename resolves Sales Head → Site Head only. It says nothing about the Project Head |
| Upstream | The principal set feeds the capability model (`R2`, AD-G-8) of **all six domains** (§7). 03ag chose AGX-8 before AG-Q-11 because *"the acts must be settled before the actors"*. AGX-8 is now resolved, so by 03ag's own sequencing the actors come next |
| Preserves terminology | It uses the PO's current terms: Site Head, Project Head, Sales Rep, Approval Exception, Pre-Booked or post-Booked cancellation |
| One clear decision | One relation (subordinate, synonym or parallel) is decided. It does not bundle Sales Support placement (AG-Q-11(f)), which is queued separately (§4.11 #5) |

### 8.3 Why this is not AG-Q-6 (the NOC), though that was the process position

Working rule 15 and the handoff's own proviso (*"DO NOT assume that this remains the correct next question if … an earlier source already answered it, a conflict exists, or another upstream issue must be handled first"*) are **each triggered**.

1. **An earlier source answered it.** GC-36 (2026-09-06, PO): the NOC is the Channel Partner's consent *"that he will deduct that commission from his future revenue"*, meaning a set-off of the commission already paid on the cancelled booking. Any NOC question must now ask the PO to **confirm or replace** that answer.
2. **A conflict exists.** AGX-12 sets *"already-paid commission is handled offline"* against GC-37's *"Automatically managed"* negative CP ledger and Spec §33. The answer to the NOC question decides which of the two survives, so the question must be framed around it.
3. **Upstream issues exist.** Two are more upstream than the NOC:
   - **AG-Q-11(a)**, above, which reaches every domain.
   - Within AG-Q-6 itself, the **transfer-cancellation consequence** (NI-3, §4.1(ii)). It determines whether transfers generate recoverable commission at all, and therefore the NOC's trigger population.

**The NOC therefore stays queued at #3**, after AG-Q-6(ii). When it is asked, it should be asked as **one** question citing GC-36. For example: *"When a Channel Partner gives the NOC, does BMexa reduce the commission payable on each of that CP's future bookings by the still-unrecovered amount of the commission already paid on the cancelled booking, until that amount is recovered — as you described on 6 September — or does the NOC mean something else?"* This is recorded for sequencing only; it is **not** asked now.

---

## Annex A — Complete Question-to-Decision Register (delta to 03ag §3A)

**Reading rules.**
- 03ag §3A's 111 rows remain the register for `PO-AG1` and `PO-AG2`.
- This annex adds **every handoff rule that is new or changed** relative to those rows, and marks which 03ag rows the handoff restates unchanged.
- *Question* is **paraphrased** (L-1). *Answer* quotes S1, lightly condensed where marked "…".
- *Source*: `FR-n` = S1 "Fully resolved clusters", item n; `PR-n` = S1 "Partially resolved clusters", item n; `ACG` = S1 ACG section.

### A.1 Holds, booking, unit (FR-1, FR-2, FR-5, FR-15, FR-16, PR-1)

| Row | Question (paraphrase) | Answer (S1) | Clarification | Baseline ref | Status | Supersedes / narrows | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AG-Q-1-a…h | (as 03ag) | Restated: one continuous hold; 20-min payment hold; readiness trigger; converts at Booking Form; never two; hold kept in correction; customer one unit; rep multiple, *"no BMexa-imposed numeric maximum"* | — | AG-Q-1 | PO LOCKED — unchanged | GC-10 narrowed; GC-13 per-rep limit superseded (LC-16 residue) | — | — | FR-1 |
| AG-Q-1-i | Where does expiry apply? | *"Payment-hold expiry applies only to that 20-minute phase."* | — | AG-Q-1, AGX-1 | PO LOCKED | **LC-11 discharged** | Payment phase | Booking hold | FR-1 |
| AG-Q-1-j | Does booking-hold release follow the broad release authority? | *"releasing a non-expiring booking hold is treated as the same act as Pre-Booked cancellation; only Site Head initiates that cancellation. The earlier broad hold-release authority therefore applies in practice to the 20-minute payment-hold phase"* | *"Current AGX-8 clarification"* | AGX-8 | PO LOCKED | **S-6** over 03ag AG-Q-1-f and AG-Q-2-c (booking-hold scope) | Booking hold | — | FR-1 |
| AG-Q-2-a′ | Who releases a payment hold? | *"Sales Rep can release their own 20-minute payment hold."* / *"Reporting Manager / manager above / Site Head / Project Head can release another Rep's payment hold."* | — | AG-Q-2(a) | PO LOCKED | Narrows 03ag AG-Q-2-a/b to the payment phase | Payment hold | Booking hold | FR-2 |
| AG-Q-2-c′ | Is booking-hold release a cancellation? | *"For a non-expiring booking hold, release is the same act as Pre-Booked cancellation."* | — | AG-Q-2(b), AGX-8 | PO LOCKED | **S-6** (replaces 03ag AG-Q-2-c) | Booking hold | — | FR-2 |
| AG-Q-2-d…h | Initiation, processing, approval, availability, resale | *"Site Head initiates … CRM processes … closes the ledger/creates receipt, and marks booking Cancelled. No separate approval … Site Head may then mark the unit Available … only Site Head or Project Head can release it for resale"* | — | AG-Q-2 | PO LOCKED — restated | GC-4 superseded (S-14); GC-39 release superseded (S-15) | Pre-Booked | — | FR-2 |
| AG-Q-2-i | Which text governs the earlier conflict? | *"this AGX-8 resolution is the authoritative reconciliation of the earlier conflicting hold-release/cancellation rules."* | — | AGX-8 | PO LOCKED | **Closes AGX-8** | — | — | FR-2 |
| AG-Q-5-e / AG-Q-13-a | Which price list prices a replacement unit? | *"use the price-list version applicable at the ORIGINAL booking submission."* | — | AG-Q-13(a) | PO LOCKED | Answers 03ag AG-Q-13 | Unit change in correction | — | FR-5, FR-16 |
| AG-Q-5-f / AG-Q-13-b | May the rep change BSP? | *"Sales Rep may alter the current BSP in the cost sheet; that does not alter the underlying price-list basis."* | — | AG-Q-13 | PO LOCKED | — | Cost sheet | — | FR-5, FR-16 |
| AG-Q-5-g / AG-Q-13-c | What happens to the old discount? | *"An approved discount for the old unit may be updated in the cost sheet. If the resulting discount exceeds configured authority, that excess requires re-approval."* | — | AG-Q-13(b) | PO LOCKED | — | Discounts | — | FR-5, FR-16 |
| AG-Q-12-a…d | What starts booking? | *"Customer confirmation of readiness … captured through the system's booking initiation action … authoritative for start. It starts the 20-minute timer. No separate 'Customer Ready to Book' activity is required."* | — | AG-Q-12(a)(b) | PO LOCKED | GC-49 narrowed (LC-17) | Start event | — | FR-15 |
| AG-Q-12-e…g | Fulfil or cancel the pending follow-up? | *"The booking-initiating Success activity satisfies/fulfils the pending follow-up. Then Booking In Progress starts. Follow-up fulfilment occurs before the Booking In Progress cancellation logic."* | — | AG-Q-12(c) | PO LOCKED | — | Ordering | — | FR-15 |
| AG-Q-6-a…i | (as 03ag) | Restated: SH or PH initiate; no approval; CRM processes; unit Cancelled; separate resale release; builder determines refund, records it; unpaid revoked; paid offline; deduction from refund | — | AG-Q-6 | PO LOCKED — unchanged | GC-5 superseded (S-16) | Post-Booked | — | PR-1 |
| AG-Q-6-k | How is a Booked unit transfer represented? | *"cancellation of original Unit A booking + creation of a new booking for Unit B + linked transfer/adjustment record."* | — | AG-Q-6(i), Spec §26 | PO LOCKED; the **consequence limb is OPEN** (§4.1(ii)) | GC-23 narrowed; GC-47 clarified | Post-Booked unit change | Commission, Stage-2 and lead-status consequences | PR-1 |
| AG-Q-6-l | Booking-record state after post-Booked cancellation? | *"The resulting booking record for a post-Booked cancellation is `Cancelled`."* | — | AG-Q-6(iv) | PO LOCKED | — | — | — | PR-1 |
| AG-Q-6-m | NOC scope? | *"the NOC applies to ANY future booking made by the SAME Channel Partner, regardless of customer."* | *"REMAINING OPEN … What exactly does the NOC waive on each future booking?"* | AG-Q-6(ii) | PO LOCKED (scope); effect **OPEN** | Earlier answer GC-36 (NI-5); AGX-12 | Same CP, any customer | Per-booking effect | PR-1 |

### A.2 Authority and approval (FR-3, FR-4, FR-6, FR-7, FR-8, FR-17, FR-19, FR-20)

| Row | Question (paraphrase) | Answer (S1) | Clarification | Baseline ref | Status | Supersedes / narrows | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AG-Q-3-a…g | (as 03ag) | Restated | — | AG-Q-3 | PO LOCKED — unchanged | — | — | — | FR-3 |
| AG-Q-3-h | Who may configure? | *"CRM department users may be delegated configuration authority as defined by the current department model."* | — | AG-Q-3(i) | PO LOCKED | — | Configuration | Scope of the delegable permissions | FR-3 |
| AG-Q-3-i | Who may be a replacement approver? | *"any active user in the relevant department who has access to the relevant project may be assigned as replacement."* | — | AG-Q-3(ii) | PO LOCKED | Answers 03ag's residual | Replacement | Initiator-as-approver (AH-Q-1) | FR-3 |
| AG-Q-3-j | Must it be the original person? | *"Replacement person does not have to have been the original configured person at that level."* | — | AG-Q-3(ii) | PO LOCKED | — | — | — | FR-3 |
| AG-Q-3-k | Who assigns the replacement? | *"Department Head may assign the replacement."* | — | AG-Q-3(ii) | PO LOCKED | — | — | — | FR-3 |
| AG-Q-3-l | And if the Department Head is gone? | *"If department head becomes inactive/resigns, Builder Admin appoints/adds replacement."* | S1 uses "Builder Admin", which S1 itself defines as the Builder-Side Admin | AG-Q-3 | PO LOCKED | — | — | — | FR-3 |
| AG-Q-3-m | What is the role vocabulary? | *"Builder Admin = Builder-Side Admin. Sales Head = Site Head. Finance = Accounts. CRM is a DEPARTMENT, not the BMexa system."* | — | AG-Q-11(b)(d)(e)(c) | PO LOCKED | **S-12** (terminology) | All documents from here on | Quotations keep their wording | FR-3; NQ |
| AG-Q-3-n | Which departments exist? | *"Sales, CRM, Accounts, Marketing"* | — | AG-Q-11 | PO LOCKED | — | Tenant | Placement of Sales Support / Helpdesk (NI-2) | FR-3 |
| AG-Q-4-a…f | (as 03ag, renamed) | *"Level 1 = Site Head, Level 2 = CRM, Level 3 = Accounts … Builder can change the order. Accounts may be middle or last. Sales Support is optional. Discount approval is a separate workflow and must be completed before booking approval."* | — | AG-Q-4 | PO LOCKED | GC-15, GC-25 superseded (S-17) | Default chain | — | FR-4 |
| AG-Q-4-g | Does Accounts approval verify payment? | *"Accounts approval includes payment verification. When Accounts verifies the required payment receipt/payment requirement and approves, booking may become Booked."* | — | AG-Q-4 residual | PO LOCKED | GC-33 narrowed (LC-18) | Booked gate | — | FR-4 |
| AG-Q-4-h | Is there a fixed amount? | *"BMexa imposes NO fixed payment amount or percentage. Accounts verifies whatever amount/payment evidence the builder/project commercial terms require. BMexa records the verified amount."* | — | AG-Q-4 residual, Cons. §19 | PO LOCKED | — | — | — | FR-4 |
| AG-Q-4-d′ | Finance versus Accounts? | *"Current vocabulary is Accounts, not Finance."* | — | AG-Q-4-d (03ag OPEN) | PO LOCKED | **S-11** (resolves 03ag AG-Q-4-d) | — | — | FR-4 |
| AG-Q-7 | (as 03ag) | Restated | — | AG-Q-7 | PO LOCKED — unchanged | GC-3, 50, 54: scope (LC-19) | Approvals | Support tickets, form completion, reminders | FR-6 |
| AG-Q-8-d | Is a Site Head / Project Head assignment a normal reassignment? | *"That assignment is treated as a NORMAL manual reassignment. Mandatory reason is required. Reassignment history is retained. New assignee receives authority. Previous approver loses booking/workflow visibility."* | — | AG-Q-8 residual | PO LOCKED | **LC-4 discharged** | Approval Exception | — | FR-7 |
| AG-Q-8-e | Does the Builder-Side Admin keep the power? | *"Builder-Side Admin also retains the ability to manually reassign even while in Approval Exception."* | — | AG-Q-8 residual; prior §C-4 | PO LOCKED | — | — | — | FR-7 |
| AG-Q-8-f | Eligibility | *"Replacement eligibility uses the current AG-Q-3 rule."* | — | AG-Q-3 | PO LOCKED | — | — | — | FR-7 |
| AG-Q-9-c/d | Does the visibility loss extend to audit logs? | *"this does NOT eliminate independent audit-log visibility under ACG-5 … can still see the relevant audit-log records."* | — | AG-Q-18 | PO LOCKED | — | Audit surface | Booking/workflow surface | FR-8, FR-20 |
| AG-Q-14-a…d | Workflow version against a manual reassignment? | *"Correction/resubmission uses the LATEST approval workflow version. A manual reassignment made during correction does NOT automatically carry over if the workflow version changes. Latest workflow configuration wins … Do not preserve a stale manual reassignment."* | — | AG-Q-14, AGX-9, prior §C-10 | PO LOCKED | **S-10** over prior §C-10; closes AGX-9 | Resubmission | — | FR-17 |
| AG-Q-17-a…f | External notification content? | *"It may include the reassignment reason. It may include previous approver's name … deliberate PO clarification against the earlier unresolved notification-content ambiguity. Reassignment reason remains classified as a sensitive field. Booking details must still use authenticated non-bearer links."* | — | AG-Q-17, AD-G-6, AD-G-7, prior AC-127 | PO LOCKED | **S-9** (clarifies AD-G-6 for this context) | External approval notifications | Discount- and export-approval links (NI-7) | FR-19 |
| AG-Q-18-a…c | Audit-log visibility after replacement? | *"AG-Q-9 'loses all visibility into booking and workflow' does NOT remove independent audit-log access … Audit-log surface is separate from booking/workflow visibility."* | — | AG-Q-18 | PO LOCKED | — | ACG-5 scope | — | FR-20 |

### A.3 Lead lifecycle, follow-up, FR (FR-10, FR-14, FR-21, PR-3, PR-4, PR-5, PR-6)

| Row | Question (paraphrase) | Answer (S1) | Clarification | Baseline ref | Status | Supersedes / narrows | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-57-a′ | Is a pending follow-up cancelled at Booking in Progress? | *"an existing pending follow-up is normally cancelled."* | "normally": because of AC-57-f′ | repo AC-57(b) | PO LOCKED | Refines 03ag AC-57-a | — | — | FR-10 |
| AC-57-f′/g′ | Ordering? | *"For booking-initiating Success, fulfilment happens FIRST, and then Booking in Progress begins. Therefore Booking In Progress does NOT cancel the follow-up that has already been fulfilled."* | — | AG-Q-12(c) | PO LOCKED | — | — | — | FR-10 |
| V-23-d′ | Who ends an active booking before a Dump? | *"Under current AGX-8, Sales Rep requests Site Head to cancel; Site Head initiates cancellation; CRM processes it."* | — | V-23, AGX-8 | PO LOCKED | **S-6** over 03ag V-23-d | Pre-Booked | — | FR-14 |
| V-23-i′ | New follow-ups during Booking in Progress? | *"NEW follow-ups may be created only for booking-related work."* | — | V-23 residual; N-2 | PO LOCKED | — | Booking in Progress | — | FR-14 |
| V-23-j′/k′/l′ | Status after Booked / post-Booked cancellation? | *"Booking reaches authoritative Booked -> lead status automatically becomes Booked. Post-Booked cancellation -> lead status automatically becomes Booking Cancelled. Post-Booked booking record itself also becomes Cancelled."* | — | V-23; AG-Q-6(iii)(iv) | PO LOCKED | — | — | Transfer case (NI-3) | FR-14 |
| AC-58-f…v | Undo and revival residuals | 5 s; Dump **and** Success; *"Undo Dump restores exact pre-Dump lead status … does NOT create a new response cycle. Online Dump timing uses server time. Offline Dump uses device-recorded event time at synchronization. Closed reporting periods are NOT restated … Undo Success restores exact pre-Success booking/lead state … pending follow-up … returns to pending … distinct … 'Success Undone' … revival OUTSIDE BMexa … authorized manager reassigns … 'Dump Undone' is a distinct system action … Cancelled follow-ups remain cancelled … retains original FR … excludes the original Dump from loss metrics for open/current reporting periods … Dump correction rate"* | *"REPO AC-58 IS STILL PARTIAL"* | repo AC-58 (1)–(7) | PO LOCKED; residual OPEN (§4.4) | — | — | Success after 5 s; offline undo | FR-21, PR-4 |
| V-4-c′…e′ | FR predicates | *"Fulfilment is tied to FR. Booking-initiating Success fulfils pending follow-up. Dump does not fulfil pending follow-up."* | *"Do not close V-4."* | V-4 | PO LOCKED; FUT **OPEN** | — | FR | FUT | PR-3 |
| W-1, W-4 | (as 03ag) | Restated | Remaining limbs as §4.5 and §4.6 | W-1, W-4 | PO LOCKED (partial) | — | — | — | PR-5, PR-6 |

### A.4 Transfer and visibility (FR-9, FR-11, FR-12, FR-13, FR-18, PR-7)

| Row | Question (paraphrase) | Answer (S1) | Clarification | Baseline ref | Status | Supersedes / narrows | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-56-a | (as 03ag) | Restated; *"specifically a NO-HISTORY transfer rule"* | V-10 separate | repo AC-56 | PO LOCKED — unchanged | — | — | — | FR-9 |
| AC-51-d′ | Completed follow-ups? | *"Completed-follow-up visibility follows the current transfer-history rule: with-history recipient may see the retained prior completed work; without-history recipient does not receive the previous owner's completed-follow-up history."* | — | AC-51 (03ag OPEN) | PO LOCKED | Resolves 03ag AC-51-e | — | — | FR-11 |
| AC-51-e′ | The previous Site Head? | *"removed from client list, can search by mobile number, can open current record READ-ONLY, can view current/current team/status, cannot perform transfer or work actions."* | *"distinct from the 'previous Sales Rep loses all access' rule."* | AC-51(d), A-92, `PO-AE1·O.2` | PO LOCKED | GC-31 visibility limb superseded (S-13) | Previous Site Head | Previous Sales Rep | FR-11 |
| AC-54-e′ | Customer-level Unassigned? | *"If customer goes to Unassigned, customer remains active and an authorized manager later assigns."* | — | AC-54(b) | PO LOCKED | GC-1, GC-28 clarified | — | Approval-level "Unassigned" (AG-Q-8) is a different state | FR-12 |
| AC-54-f′ | A departed rep's customer and Dump? | *"Departed/inactive Rep customer must first be reassigned to an active Rep before Dump can occur."* | — | AC-54(a) | PO LOCKED | — | — | — | FR-12 |
| AC-54-g′ | Bulk without history? | *"Bulk transfer configured WITHOUT history still transfers active-booking customers WITH history."* | — | AC-54(c) | PO LOCKED | Overrides `PO-AE1·I.3`'s single setting for these customers | Active booking | — | FR-12 |
| AC-54-h′ | Who declares "otherwise unavailable"? | *"Only Site Head or Project Head may declare a Rep otherwise unavailable and authorize that transfer."* | — | AC-54(d) | PO LOCKED | — | — | — | FR-12 |
| AC-54-i′ | Transfer while the rep is available? | *"Authorized manager may transfer an active-booking customer even while current Rep is available. Scope still follows AC-55."* | — | AC-54(e); prior §B.21 | PO LOCKED | **LC-12 discharged** (narrowed, explicit) | — | — | FR-12 |
| AC-55-c′…m′ | Carry-over, mandate, handler, revival, direction | *"Automatic pending-follow-up carry-over is allowed as part of a permitted customer transfer with history. Manager cannot independently create/assign/reassign/manage ordinary customer follow-ups … A management work mandate is separate … Lead Handler, not necessarily customer owner, creates/manages follow-ups. Authorized Site Head may transfer a Dumped customer; transfer revives the customer. 'Sales Head only' exclusivity does NOT survive … downward … allowed, upward … not allowed, peer … not allowed, EXCEPTION: Project Head may transfer to another Project Head under the SAME Site Head."* | — | AC-55(b)(c)(d); X-42; X-43 | PO LOCKED | **S-7** over `PO-AE1·G.1` and GC-32; closes X-42 and X-43 | Management | — | FR-13 |
| AG-Q-15-a…e | With-history recipient: what is visible after the transfer? | *"can see ALL activities occurring after the transfer … authored by someone else … system-generated … Site Head / management actions … The older 'only their own work' wording is narrowed for WITH-HISTORY transfer."* | — | AG-Q-15 | PO LOCKED | **S-8** (narrowing, explicit) | With history | Without history (AC-56 unchanged) | FR-18 |
| V-10-a′/b′ | (as described) | *"Receiving Rep no-history visibility restrictions. AG-Q-18 now clarifies that a management user may independently retain audit-log access."* | *"Do not extrapolate the AG-Q-18 audit decision to unrelated surfaces."* | V-10 | PO LOCKED (partial) | — | — | Jobs, caches, derived surfaces | PR-7 |

### A.5 Commission (PR-2)

| Row | Question (paraphrase) | Answer (S1) | Clarification | Baseline ref | Status | Supersedes / narrows | Scope | Exclusions | Source |
|---|---|---|---|---|---|---|---|---|---|
| AC-48-a | (as 03ag) | *"Site Head may change/revoke Stage-2 allocation before commission payment."* | — | AC-48 | PO LOCKED — unchanged | — | — | — | PR-2 |
| AC-48-b′ | A non-claimant CP? | *"may allocate Stage-2 to a CP even if that CP did not file a Stage-1 attribution claim … search CP by partner name or manually enter/select firm name"* | — | `PO-X1` / AC-37 | PO LOCKED (reaffirmed) | GC-7 clarified | — | — | PR-2 |
| AC-48-c′/d′ | A partial payout? | *"If payout is partial, a Site Head may alter/revoke only the UNPAID balance … Paid amount cannot be reversed through this Stage-2 action. Reversal mechanics are architecture work."* | Example: ₹2 L paid of ₹5 L → ₹3 L alterable | AC-48 residual | PO LOCKED; "payment" boundary **OPEN** (§4.2) | — | Unpaid balance | Paid amount | PR-2 |

### A.6 Audit Completeness Gate (ACG)

| Row | Status |
|---|---|
| ACG-1…ACG-9 | **PO LOCKED — unchanged** (03ag §3A.7 rows retained verbatim). S1's wording for ACG-5 (*"scoped to their management jurisdiction"*) is read as the same decision as 03ag's *"limited to their respective management scopes"*. |
| — | *"ACG is active but NOT complete"* and the four collisions are recorded at Annex E. |

**Register count.**
- **51 delta rows** above. Several rows group lettered sub-rules; the sub-rules they cover number about 120.
- **Retained from 03ag §3A**: all 111 rows. Of those, **9 rows are superseded or narrowed** by explicit newer text: AG-Q-1-f, AG-Q-2-a, AG-Q-2-b, AG-Q-2-c, AG-Q-4-d, V-23-d, AC-51-d, AC-51-e, AC-57-a.

---

## Annex B — Missing and Incomplete Decision Report

### B.1 The handoff against 03ag: omissions and incomplete representations

| # | Item | Nature | Effect |
|---|---|---|---|
| **B-1** | **AG-Q-10** (booking and approval records visible without history; the reassignment-history limb) | **Omitted.** It is not in the fully-resolved list, the partial list or the new list | Carried as partial. The minimum rises from 63 to 64 before AH-Q-1 |
| B-2 | AC-58 | Listed as fully-resolved entry 21 **and** as partial item 4 | Counted once, as partial. The "21" is entries, not clusters |
| B-3 | "54 untouched" | Includes AC-50 and N-2, which 03ag recorded as touched-not-answered | Label only; the count is unaffected |
| B-4 | AD-G-1…AD-G-7 | Not restated. They remain PO LOCKED from `PO-AG1`. AD-G-3 is subsumed by AG-Q-14; AD-G-6 and AD-G-7 are referenced by AG-Q-17 | No change |
| B-5 | AGX-7 (AC-range reservation) | Not mentioned | Carried (governance) |
| B-6 | LC-1…LC-13 | Not mentioned. LC-4, LC-11 and LC-12 are discharged by explicit handoff text; LC-10 is corrected by GC-13 (Annex C) | Updated at Annex C |
| B-7 | AG-Q-6 residual list | S1 lists only the NOC as remaining. Its representation decision for unit transfer does not settle the consequence limb that Spec §26 explicitly leaves open | Residual (ii) recorded (§4.1) |
| B-8 | The question wording and option texts for every S1 decision, AG-Q-12…18 included | Not supplied | Paraphrased (L-1) |

### B.2 The Gemini corpus: older PO decisions the handoff neither records nor overrides

These are **not** missing decisions of the current round. They are older PO text that bears on current clusters and that the handoff does not mention.

| # | Record | Why it matters now |
|---|---|---|
| B-9 | GC-36: the NOC as set-off consent | An earlier answer to the pending AG-Q-6 question |
| B-10 | GC-37: negative CP ledger, *"Automatically managed"* | AGX-12 |
| B-11 | GC-42: self-approval blocked | AGX-13 / AH-Q-1 |
| B-12 | GC-22: support-session log *"undeletable"* | AGX-11 |
| B-13 | GC-11, 12, 13, 14, 49: legacy hold rules | LC-14…LC-17 |
| B-14 | GC-33: Sales Support payment marker | LC-18 |
| B-15 | GC-18, 19, 27, 43: the PO's explicit definition of the CRM department | Clarifies AG-Q-11(c) |
| B-16 | GC-43 against GC-24: Sales Support placement | NI-2 |
| B-17 | GC-46: soft-delete only | NI-9 |
| B-18 | GC-53: executive magic link | NI-7 |
| B-19 | GC-54: follow-up cadence | Evidence for an untouched 03af cluster |

### B.3 Decisions that conflict with an earlier summary

| # | Item |
|---|---|
| B-20 | 03ag LC-10 read Spec §16's *"hold one unit"* as per-hold wording, "so there is no conflict". **GC-13 shows the wording originated as a per-rep limit.** The reading is corrected: the per-rep limit is superseded by AG-Q-1-h, and the approval-gate limb is held as LC-16 |
| B-21 | 03ag §3.1 records `PO-AG1`'s NOC as *"forgo commission from a future booking"*. S1 says *"waive"*. GC-36 says *"deduct that commission from his future revenue"*. They are **not** silently harmonised (NI-5) |

### B.4 Sources needed to close the evidence gaps

| # | Source |
|---|---|
| B-22 | The earlier bundle's verbatim text, for §B.19 (AGX-13) and F-3 |
| B-23 | The Q&A transcript behind S1 (L-1) |
| B-24 | The 39 Drive attachments (§1.4). **None is decision-critical** |

---

## Annex C — Supersession and Contradiction Register

### C.1 Explicit supersessions established in 03ah (continuing 03ag's S-1…S-5)

| ID | Newer text | Older text | Old vs new | Explicit wording relied on |
|---|---|---|---|---|
| **S-6** | AGX-8 clarification (AG-Q-1 note, AG-Q-2, V-23) | 03ag AG-Q-1-f, AG-Q-2-c (the rep and managers may release a *booking* hold); 03ag V-23-d (the rep *must cancel*); earlier-bundle §B.12 (abridged) | **Old:** broad release authority over booking holds. **New:** booking-hold release is Pre-Booked cancellation, initiated by the Site Head only; the rep requests it | *"authoritative reconciliation of the earlier conflicting hold-release/cancellation rules"* |
| **S-7** | AC-55 | `PO-AE1·G.1` (*"only the Sales Head can manually revive / reassign"*); GC-32 | **Old:** Sales-Head exclusivity. **New:** any manager with hierarchy **and** project authorisation, within the transfer directions | *"'Sales Head only' exclusivity does NOT survive"* |
| **S-8** | AG-Q-15 | AC-56's *"only … their own work"*, as applied to with-history transfers | **Old:** own work only. **New:** all post-transfer activities | *"narrowed for WITH-HISTORY transfer"* |
| **S-9** | AG-Q-17 | AD-G-6 *"minimum necessary booking PII"*, as applied to the reason and the previous approver's name | **Old:** ambiguous. **New:** both permitted | *"deliberate PO clarification against the earlier unresolved notification-content ambiguity"* |
| **S-10** | AG-Q-14 | Earlier-bundle §C-10 (a reassignment during correction takes effect on resubmission) | **Old:** it carries. **New:** it lapses if the version changes | *"Do not preserve a stale manual reassignment"* |
| **S-11** | AG-Q-4 | "Finance" as the name of the payment-verifying level | **Old:** Finance. **New:** Accounts | *"Current vocabulary is Accounts, not Finance."* |
| **S-12** | AG-Q-3 vocabulary | "Sales Head", "Builder Admin", and "CRM" as the system | **Old:** those names. **New:** Site Head, Builder-Side Admin, CRM as a department | *"Sales Head = Site Head … CRM is a DEPARTMENT"* |
| **S-13** | AC-51 (previous Site Head) | GC-31: *"sales head one will not able to see that lead once it's transferred to sales head two"* | **Old:** all visibility lost. **New:** out of the list, but findable by mobile, read-only | Same subject, explicit newer rule |
| **S-14** | AG-Q-2 / AG-Q-6 | GC-4: Sales-Head approval of cancellation; unit back to live inventory on customer-support action | **Old:** approval; automatic return. **New:** no separate approval; separate release by the Site Head / Project Head | *"No separate approval is required"*; *"only Site Head or Project Head can release"* |
| **S-15** | AG-Q-2 / AG-Q-6 | GC-39: *"CRM team can put the unit on cancellation and free the unit for future sale"* at acceptance | **Old:** CRM releases. **New:** only the Site Head / Project Head release, separately | *"only Site Head or Project Head"* |
| **S-16** | AG-Q-6 / `G-FL` | GC-5: automatic standard deductions plus manual override | **Old:** BMexa calculates. **New:** it records, does not calculate | *"BMexa records, does not calculate"* |
| **S-17** | AG-Q-4 | GC-15, GC-25 (and Gemini's restatements): Sales Head → Sales Support → (Accounts), with Booked on Sales Support verification | **Old:** that chain; Sales Support establishes Booked. **New:** L1 Site Head → L2 CRM → L3 Accounts; Sales Support optional; Accounts verifies payment | *"Mandatory default approval levels"*; *"Sales Support is optional"* |

### C.2 Open contradictions (open items only)

| ID | Conflicting texts | Impact | Exact clarification required | Class | Counted as |
|---|---|---|---|---|---|
| **AGX-7** (carried) | Earlier-bundle labels AC-58…AC-131 against future repo AC numbering | Silent collision of IDs | Record-keeping: reserve AC-60…AC-131 (the architect's recommendation, not a decision) | Governance | Not a cluster |
| **AGX-10** (carried) | ACG-3/ACG-4 and ACG-1 against R6 and Spec §06 / §54 | Built grants encode R6 | Ledger only: are R6's no-update/no-delete clause and its selectivity sentence superseded to the extent of the ACG decisions? S1's framing ("collisions … NOT fixed yet") points to yes, but it is not stated | Governance / ledger | Not a cluster |
| **AGX-11** (NEW, 03ah) | GC-22 (PO, 09-04): support-session audit log *"permanent, undeletable … visible to the Builder CEO and admin"* against ACG-3/ACG-4 (the Builder-Side Admin may edit or delete audit records) and ACG-5 | The Builder-Side Admin who grants support access could delete its trail | Ledger only (**ACG is not re-asked**): is GC-22's undeletability superseded to the extent of ACG-3/4, or does it survive as a narrower rule for support-session records? | UNRESOLVED CONTRADICTION (governance) | Not a cluster |
| **AGX-12** (NEW, 03ah) | S1 AG-Q-6: *"Already-paid commission is handled offline"* against GC-37 *"Automatically managed"* (negative CP ledger, auto-deduction) and Spec §33 | CP Ledger shape | Resolved through AG-Q-6(i) (§8.3). If it is not resolved there, ask it separately | UNRESOLVED CONTRADICTION | Inside AG-Q-6 |
| **AGX-13** (NEW, 03ah) | GC-42 (PO, 09-07): *"block the self-approval"* (booking approvals, cost sheets, commission payouts) against earlier-bundle §B.19 (abridged): *"Initiator may approve if active and eligible"* | Segregation of duties | May the initiator of a booking, or of a cost sheet or commission entry, act as its approver at any level? | UNRESOLVED CONTRADICTION — SOURCE VERIFICATION REQUIRED | New cluster **AH-Q-1** |

**Resolved since 03ag:** AGX-8, AGX-9 (AG-Q-14), X-42, X-43. Earlier: X-44, X-45, X-46, AGX-1…AGX-6.

### C.3 Ledger confirmations: status update and new items

**Default until confirmed:** NARROWED — PENDING PO CONFIRMATION.

| ID | Status in 03ah | Note |
|---|---|---|
| LC-1 | Pending | Consistent with AC-51 (without history: cancel) |
| LC-2 | Pending | Consistent with *"Dump does not fulfil"* (V-4, AC-57) |
| LC-3 | Pending | AG-Q-13 supports price retention for an unchanged unit |
| **LC-4** | **Discharged** | AG-Q-8: normal reassignment; the Builder-Side Admin retains the power |
| LC-5 | Pending | *"Sales Support is optional"* restated |
| LC-6 | Pending | *"No separate approval"* restated |
| LC-7 | Pending | Booking in Progress and Booking Cancelled are operational statuses |
| LC-8 | Pending | GC-48 corroborates the premise |
| LC-9 | Pending | Conjunctive authority restated |
| **LC-10** | **Corrected** | GC-13 shows Spec §16 was a per-rep limit. It is superseded by AG-Q-1-h; see LC-16 |
| **LC-11** | **Discharged** | Explicit in S1 |
| **LC-12** | **Discharged (narrowed, explicit)** | AC-54-i′ |
| LC-13 | Discharged / consistent | AG-Q-9, with the AG-Q-18 exception |
| **LC-14** (NEW) | Pending | GC-11: an extended hold by the Site Head / Project Head with no auto-release (and Spec §16 *"hold extension"*) against AG-Q-1's two-phase single hold. Proposed mark: SUPERSEDED |
| **LC-15** (NEW) | Pending | GC-12 and GC-14: an automatic "Pending Approval Block" and backup tokens against AG-Q-1, AD-G-5 and AG-Q-4 (discount approval before booking approval, while the booking hold does not expire). Proposed mark: SUPERSEDED (absorbed by the booking hold) |
| **LC-16** (NEW) | Pending | GC-13: approval needed to hold more than one unit, against AG-Q-1-h. Proposed mark: SUPERSEDED |
| **LC-17** (NEW) | Pending | GC-49: the token reference as the lock trigger, against conversion at *"proceeds to the Booking Form"*. Proposed mark: NARROWED (the reference becomes a Booking Form field and is not the trigger) |
| **LC-18** (NEW) | Pending | GC-33: a Sales Support "payment received" marker (*"keep both"*) against Accounts payment verification. Proposed mark: NARROWED (Accounts is authoritative; any Sales Support marker is a non-authoritative pre-check) |
| **LC-19** (NEW) | Pending | GC-3, GC-50 and GC-54 (support-ticket SLA; incomplete-form banners; follow-up reminder escalation) against AG-Q-7 and AC-55. Proposed mark: APPARENT CONFLICT (SCOPE), not superseded |
| **LC-20** (NEW) | Pending | Spec §03 and Cons. §3 role rows (Customer Support / Post-Sales; Accounts / Finance; Builder Admin; Sales Head) against S-11 and S-12. Proposed: rename the rows, and map Customer Support / Post-Sales to the CRM department (GC-18, 19, 27, 43). **The Project Head row waits for AG-Q-11(a)** |
| **LC-21** (NEW) | Pending | GC-23: the formal amendment workflow (Sales Head approval) for post-Booked changes. Proposed mark: NARROWED (unit changes now go through AG-Q-6's cancel-and-rebook; plan and applicant changes remain amendments; approver renamed Site Head) |

---

## Annex D — Consolidated PO Decision Register (per decision ID)

| Decision | Source | Status | Resolves / touches | Residual |
|---|---|---|---|---|
| AG-Q-1 | `PO-AG1` §A + S1 FR-1 | PO LOCKED | AG-Q-1 (full); AGX-1; AGX-8 | LC-14…LC-17 |
| AG-Q-2 | `PO-AG1` §A + S1 FR-2 | PO LOCKED | AG-Q-2 (full); AGX-3; AGX-8 | NI-13 |
| AG-Q-3 | `PO-AG1` §B + S1 FR-3 | PO LOCKED | AG-Q-3 (full); AGX-4 | NI-2; AH-Q-1 |
| AG-Q-4 | `PO-AG1` §B + S1 FR-4 | PO LOCKED | AG-Q-4 (full) | LC-18; NI-7 (discount links) |
| AG-Q-5 | `PO-AG1` §C + S1 FR-5 | PO LOCKED | AG-Q-5 (full); AGX-6 | — |
| AG-Q-6 | `PO-AG1` §C + S1 PR-1 | PO LOCKED (partial) | AG-Q-6 (partial) | (i) NOC effect; (ii) transfer consequences; AGX-12 |
| AG-Q-7 | `PO-AG1` §B + S1 FR-6 | PO LOCKED | AG-Q-7 (full) | LC-19 |
| AG-Q-8 | `PO-AG1` §B + S1 FR-7 | PO LOCKED | AG-Q-8 (full) | — |
| AG-Q-9 | `PO-AG1` §B + S1 FR-8 | PO LOCKED | AG-Q-9 (full); AGX-5 | — |
| AG-Q-10 | `PO-AG1` §E | PO LOCKED (partial) | AG-Q-10 (partial) | Reassignment-history limb (B-1) |
| AG-Q-12 | S1 FR-15 | PO LOCKED | AG-Q-12 (full) | NI-14 |
| AG-Q-13 | S1 FR-16 | PO LOCKED | AG-Q-13 (full) | — |
| AG-Q-14 / AGX-9 | S1 FR-17 | PO LOCKED | AG-Q-14 (full); AGX-9 | — |
| AG-Q-15 | S1 FR-18 | PO LOCKED | AG-Q-15 (full) | — |
| AG-Q-17 | S1 FR-19 | PO LOCKED | AG-Q-17 (full) | NI-7 |
| AG-Q-18 | S1 FR-20 | PO LOCKED | AG-Q-18 (full); V-10 audit limb | NI-12 |
| AG-Q-11 (vocabulary part) | S1 FR-3, NQ | PO LOCKED (renames) | AG-Q-11 (b)(c)(d)(e) | (a), (f) |
| AG-Q-16 | — | OPEN | — | — |
| AD-G-1…7 | `PO-AG1` | PO LOCKED (unchanged) | AD-G-1…7 | AD-G-16 (ARCH) |
| AC-48 | `PO-AG1` §G + S1 PR-2 | PO LOCKED (partial) | AC-48 (partial) | The tranche "paid" boundary |
| AC-51 | `PO-AG1` §E + S1 FR-11 | PO LOCKED | AC-51 (full) | — |
| AC-54 / AGX-2 | `PO-AG1` §E + S1 FR-12 | PO LOCKED | AC-54 (full) | NI-11 |
| AC-55 | `PO-AG1` §E + S1 FR-13 | PO LOCKED | AC-55 (full); X-42; X-43 | AG-Q-11(a) (principals) |
| AC-56 | `PO-AG1` §E + S1 FR-9 | PO LOCKED | repo AC-56 (full); X-44 | V-10 |
| AC-57 | `PO-AG1` §D + S1 FR-10 | PO LOCKED | repo AC-57 (full); X-46 | LC-2, LC-8 |
| AC-58 / X-45 | `PO-AG1` §F + S1 FR-21, PR-4 | PO LOCKED (partial) | repo AC-58 (partial) | §4.4 |
| V-4 | `PO-AG1` §D + S1 PR-3 | PO LOCKED (partial) | V-4 (partial) | FUT |
| V-10 | S1 PR-7 | PO LOCKED (partial) | V-10 (partial) | Jobs, caches, derived surfaces |
| V-23 | `PO-AG1` §D + S1 FR-14 | PO LOCKED | V-23 (full) | NI-3 (transfer case) |
| W-1 | `PO-AG1` §D + S1 PR-5 | PO LOCKED (partial) | W-1 (partial) | §4.5 |
| W-4 | `PO-AG1` §D + S1 PR-6 | PO LOCKED (partial) | W-4 (partial) | §4.6 |
| `PO-AG1·F-RV`, `·G-X1`, `·G-FL`, `·H-GATE` | `PO-AG1` | PO LOCKED (unchanged) | — | — |
| ACG-1…ACG-9 | `PO-AG2` + S1 | PO LOCKED — all nine | The Gate | AGX-10, AGX-11, ACG-INV-1…15 |

**Unique decision IDs.**
- In S1: **36**. That is the 21 fully-resolved entries, plus 6 further IDs in the partial list (AG-Q-6, AC-48, V-4, W-1, W-4, V-10; AC-58 is already counted), plus ACG-1…ACG-9.
- In the combined register (`PO-AG1`, `PO-AG2` and S1): **45**. The nine additional IDs are AG-Q-10 and AD-G-1…7 (7 IDs), plus `PO-AG1`'s four recording labels counted as one group.

**None of these numbers is a cluster count.**

---

## Annex E — Audit Completeness Gate Register

### E.1 Locked decisions (not re-asked)

**ACG-1 to ACG-9 are PO LOCKED**, as recorded verbatim at 03ag §3.2 and restated in S1.

**Gate status:** active, **not complete** (S1: *"ACG is active but NOT complete"*).

### E.2 The four built-artefact collisions (named, not fixed)

These are 03ag §7.5, restated by S1.

1. `R6` grants (`UPDATE` and `DELETE` revoked) against ACG-3/ACG-4.
2. `tenant_id … ON DELETE CASCADE` against ACG-8.
3. `tenant_id NOT NULL` against pre-authentication security events (ACG-1).
4. No structured before/after field (ACG-2).

### E.3 Investigation areas: 03ag's fourteen, checked against the corpus, plus one new

| ID | Area (03ag) | New input from the corpus (03ah) | May later need a PO answer? |
|---|---|---|---|
| ACG-INV-1 | Event taxonomy | The PO requires these audit subjects:<br>• export request, approval, reason, IP, with alerts to seniors (GC-18);<br>• commission edits and splits by the Site Head (GC-18, GC-29);<br>• handler transfers and reasons (chunks 200–201);<br>• soft-deletes (GC-46);<br>• support-session **clicks and reads** (GC-22, GC-41).<br>The open "reads" limb is **answered for support sessions only** (NI-16) | For ordinary-user reads, yes |
| ACG-INV-2 | Record schema | GC-22 needs the platform actor recorded against tenant data | No |
| ACG-INV-3 | Audit log against business history | The corpus separates the activity timeline (the tabbed Follow-up/Success/Dump events) from the audit log. Consistent | No |
| ACG-INV-4 | Tenant isolation | Support-session records concern tenant data but are written by **platform** actors with full-company access (GC-41). Tenant attribution and platform-level visibility are needed | No |
| ACG-INV-5 | Scoped visibility | NI-12; GC-22's *"Builder CEO and admin"* against ACG-5 | Via AGX-11 |
| ACG-INV-6 | Integrity and privileged access | Is an authorised *delete* soft or hard (GC-46, NI-9)? The same Builder-Side Admin grants support access (GC-22) and may delete its trail (AGX-11) | Possibly |
| ACG-INV-7 | Query and filtering | No new input | No |
| ACG-INV-8 | Retention and storage | The PO's own **Option B** (12 months hot, then cold, retrievable) (GC-6) is compatible with ACG-8 **only as tiering**. Gemini's partition-drop is ARCHITECT-DERIVED and is superseded by ACG-8 wherever it implies deletion | Legal/Compliance (Spec §56) |
| ACG-INV-9 | Export controls | GC-18's two-person export chain (remark; approval upward; *"CEO … need approval from VP"*) is **business-data** export. Whether it also governs the Builder-Side Admin's **audit-log** export (ACG-9) is unstated. GC-53's bearer link (NI-7) must not reach audit export | Possibly |
| ACG-INV-10 | Access and export traceability | Support-session reads are logged (GC-22). Logging of ordinary audit views is still not decided | Linked to ACG-INV-1 |
| ACG-INV-11 | Failure handling | Offline capture (GC-51; Spec §12): offline actions are audited at synchronisation, with `occurred_at` (device) and `recorded_at` (server). This matches AC-58's device-time rule | No |
| ACG-INV-12 | Tamper detection | AGX-11 raises the stakes: the tamper evidence must cover the Builder-Side Admin's own deletions of support-session records | No |
| ACG-INV-13 | Monitoring and recovery | No new input | No |
| ACG-INV-14 | Deliberate gaps inherited | No new input | No |
| **ACG-INV-15** (NEW, 03ah) | **Support-session audit trail** | Per-click and per-read capture during PIN sessions (GC-22, GC-41):<br>• volume;<br>• visibility to the Builder CEO and Builder-Side Admin;<br>• its status under ACG-3/4 (AGX-11);<br>• notification at session start and end (Gemini, chunk 266: ARCHITECT-DERIVED). | Via AGX-11 |

---

## Annex F — Updated Risk and Dependency Register

03ag R-AG-1…R-AG-16 are carried. Their status is updated and new risks are added.

| ID | Risk | Likelihood / impact | Status |
|---|---|---|---|
| R-AG-1 | Wrong termination semantics | — | **Retired** (AGX-8 resolved) |
| R-AG-2 | Authorisation built on role names, or on the wrong principal set | High / High | **Raised**: NI-1 (the rename collision) and NI-2 |
| R-AG-3 | Payment acknowledgement modelled as the wrong act | — | **Retired** (AG-Q-4) |
| R-AG-4 … R-AG-8 | As 03ag | — | Carried. R-AG-4 is widened by AGX-11 |
| R-AG-9 | Inventory blocked by non-expiring booking holds | Medium / Medium | Carried. The corpus mitigation (a 24 h / 48 h reminder for incomplete forms, GC-50) is **not** a PO rule of the current round |
| R-AG-10 … R-AG-16 | As 03ag | — | Carried |
| **R-AH-1** (NEW) | A unit upgrade penalises the CP (revocation or clawback) and flips the customer to Booking Cancelled | High / High (financial; CP trust) | NI-3 → AG-Q-6(ii) |
| **R-AH-2** (NEW) | The NOC is implemented on a meaning the PO never confirmed (forgo, waive or set-off) | Medium / High | NI-5 → AG-Q-6(i) |
| **R-AH-3** (NEW) | The CP Ledger is built per booking only, and then AGX-12 is resolved toward a running recoverable balance | Medium / High (rework) | AGX-12 |
| **R-AH-4** (NEW) | Support-session trail deleted by the Builder-Side Admin who granted the access | Low / High (trust; incident evidence) | AGX-11; ACG-INV-15 |
| **R-AH-5** (NEW) | Self-approval allowed through the replacement-approver path | Medium / High (fraud) | AH-Q-1 |
| **R-AH-6** (NEW) | Bearer approval links for discounts or exports | Medium / High (security) | NI-7; §87(1) |
| **R-AH-7** (NEW) | The count is treated as final while AG-Q-10 is dropped | Medium / Medium (governance) | B-1 |
| **R-AH-8** (NEW) | Legacy hold rules (LC-14…LC-17) re-enter through Spec §16 "hold extension" | Medium / Medium | LC-14…LC-17 |

**Dependency spine.** Each arrow runs from what must be answered first to what it unblocks.
- `AG-Q-11(a)` → capability model (AD-G-8) → **Security in all domains**.
- `AG-Q-6(ii)` → booking-cancellation edge (AD-G-16) + CP commission linkage.
- `AG-Q-6(i)` / `AGX-12` → CP Ledger shape.
- `AG-Q-11(f)` → department membership → AG-Q-3 replacement eligibility.
- `AH-Q-1` → approval eligibility guard.
- `AG-Q-10`, `V-10` → without-history projections.
- `V-4` / `W-1` / `W-4` → the FR/FUT metric model.
- `AGX-10` / `AGX-11` → the audit store's write and delete path → ACG-INV-2, -4, -6, -12, -15.

---

## Annex G — Architecture Change Register (named, not made)

This is a delta to 03ag §8.3. No file below was edited by this task.

| # | Artifact | Change needed | Class | Gated on |
|---|---|---|---|---|
| G-1 | `docs/BMEXA_MASTER_SPEC.md` §03 | Apply the renames (Builder-Side Admin; Accounts; CRM department; Sales Head → Site Head). Resolve the resulting "Site Head" collision | PO (renames) + OPEN (Project Head) | **AG-Q-11(a)**; LC-20 |
| G-2 | Consolidated requirements §3 | Rows "Site Head / Sales Head", "Accounts / Finance", "Customer Support / Post-Sales" → current vocabulary; add CRM and Marketing | PO + ARCH (the CRM mapping) | LC-20; AG-Q-11(f) |
| G-3 | Spec §16 | *"hold one unit"* and *"hold extension"* → AG-Q-1 two-phase model | PO | LC-14, LC-16 |
| G-4 | Spec §20 | Stages → AG-Q-4 chain (Booked on Accounts approval, including payment verification) | PO | — |
| G-5 | Spec §26 / §33 | Keep "transfer ≠ ordinary cancellation for clawback" until AG-Q-6(ii). Record the AG-Q-6 representation | PO + OPEN | AG-Q-6(ii), AGX-12 |
| G-6 | Spec §35 | "CRM" → the CRM department. The cancellation initiator and release authority follow AG-Q-2 and AG-Q-6 | PO | — |
| G-7 | Spec §51 / §52 | Note NI-7 (discount and export links) and ACG-9 | OPEN (validation) | §87(1) |
| G-8 | `ENGINEERING_RULES.md` R6; `schema-phase-0.sql` `audit_events` | As 03ag #11–#13, plus AGX-11 | ARCH | AGX-10, AGX-11 |
| G-9 | `03ae` `PO-AE1·G.1` | Mark SUPERSEDED (S-7) | PO | — |
| G-10 | `03ae` `PO-AE1·N` / `·O` | Record AC-51's rule for the previous Site Head | PO | — |
| G-11 | `03ag` | Status notes: AGX-8, AGX-9, X-42, X-43 resolved; LC-4, 10, 11, 12 updated; minimum 78 → 65 (this document) | Record | PO approval of 03ag and 03ah |
| G-12 | (future) data models | Hold, booking and unit machines (AD-G-16); approval workflow; transfer with per-customer effective mode (NI-11); reversible initiation unit (NI-14) | PO + ARCH | §7 gates |

---

## Annex H — Final validation

| Check (handoff "FINAL VALIDATION") | Result |
|---|---|
| Every answered question in the available sources has a register entry | **Yes, bounded.** S1 rules are in Annex A or in 03ag §3A. Corpus PO answers bearing on current clusters are in the §2.3 GC register. Not certifiable beyond S1 and the corpus (L-1) |
| Every answer, clarification and correction preserved | Yes. Answers are quoted from S1. Scope sentences appear in the Clarification and Exclusions columns |
| Nothing omitted as "repetitive" | Restated rows are marked "unchanged", not dropped. AG-Q-10's omission from S1 is **reported** (B-1), not repeated |
| Selected options accurately represented | ACG "Option 1/2" texts are unavailable (L-1). Corpus options are quoted as the PO chose them |
| Supersession only where supported | S-6…S-17 each quote explicit or exclusive wording. Everything else is LC-n or a contradiction |
| Partial clusters stay partial | 9 partial. None closed without a PO answer |
| All locked ACG decisions included | ACG-1…ACG-9, not re-asked (Annex E). AGX-11 asks only a ledger question |
| The previous prompt's omissions identified | Annex B |
| IDs and traceability preserved | All 03ag IDs kept. New IDs are marked NEW (03ah) |
| Counts at cluster level, not decision IDs | §3.1, §6. Decision-ID counts are given separately (Annex D) |
| No unsupported assumption presented as a PO decision | Gemini statements are separated (§2.6). Architect readings are labelled |
| No unresolved question silently closed | NI-3, NI-5, AG-Q-10 and AH-Q-1 are surfaced |
| No implementation claimed | "How to read"; §7 |
| Exactly one PO question | §8.1. The queue at §4.11 is not asked |
| Architecture not declared complete | §7 |

**This reconciliation is PROPOSED — NOT APPROVED.** It is **not** labelled final, for the reasons at §1.6.
