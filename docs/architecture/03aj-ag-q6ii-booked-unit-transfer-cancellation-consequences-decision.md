STATUS: PROPOSED — NOT APPROVED

# AD-01AJ — Booked Unit Transfer: the Unit A Leg Is an Ordinary Post-Booked Cancellation (Reconciling the AG-Q-6(ii) Answer)

| | |
|---|---|
| Document type | Architecture governance record. It is a contained decision reconciliation: one PO-locked answer (to 03ai §7.2, "AG-Q-6(ii)") is recorded verbatim. It is then reconciled against Master Spec §26 and §33, against AGX-12 and the Gemini corpus (GC-36, GC-37), against the rest of the AG-Q-6 cluster, and against what is already locked about new bookings. The cluster count and Architecture Readiness are updated, and one next PO question is selected. |
| Relationship to 03ai / 03ah | This document **extends** `03ai-site-head-project-head-per-project-role-assignment-decision.md` (the immediate baseline, 793 lines). 03ai itself extends `03ah-fresh-consolidated-audit-reconciliation-gemini-corpus-and-role-vocabulary.md` (1,083 lines). Neither is replaced. Every 03ah and 03ai identifier is preserved. Where this document changes a status, the change is stated with its source. |
| Repository state at start | Branch `claude/code-cli-project-init-mgjndj`. HEAD `f6c0503` (auto-commit 2026-09-28 14:49:31). Working tree clean. |
| Tracking | Beads `Final-Verison-zqy` (P1, in progress). This document creates no Beads issues. |
| Date | 2026-09-28 |
| Status line meaning | `PROPOSED — NOT APPROVED` applies to the **architect analysis** here. The PO answer in §2 is `PO LOCKED` exactly as the PO stated it. No reading by the architect becomes a PO rule until the PO approves it. |
| Files changed | This file only. No schema, migration, code, test, Beads, Spec, requirements or earlier architecture file was edited. |

---

## How to read this document

**Vocabulary.** The following are carried unchanged from 03ah "How to read" and 03ai "How to read":
- the decision-status vocabulary: `PO LOCKED`, `PARTIAL`, `ARCHITECT-DERIVED`, `OPEN`, `UNTOUCHED`, `SOURCE VERIFICATION REQUIRED`, `VALIDATE-OPEN`;
- the reconciliation classes: `SUPERSEDED`, `NARROWED`, `CLARIFIED`, `UNRESOLVED CONTRADICTION`, `APPARENT CONFLICT (SCOPE)`.

One class is added. It is needed because a Spec sentence can demand a decision without itself being a rule.

| Class | Used when |
|---|---|
| `DISCHARGED (SATISFIED)` | The older text **required that something be decided** (for example *"must be explicitly determined"*). The newer PO text makes that decision. The older text is not contradicted, so it is not superseded. Its demand is met. |

**Terminology.** 03ah's renames continue: Site Head (not Sales Head), Accounts (not Finance), Builder-Side Admin, CRM as a department. 03ai's notation continues:
- `SH@P` means the employee holds the Site Head role on project P.
- `PH@P` means the same for Project Head.
- `Tree(x)` is the reporting tree rooted at employee x.

This document uses:
- **Unit A leg** for the cancellation of the original Booked booking;
- **Unit B leg** for the new booking;
- **linked record** for the PO's *"linked transfer/adjustment record"*.

**Identifier discipline.** Every 03ah and 03ai ID is preserved. New in 03aj:
- `PO-AJ1·1`…`·12`: the limbs of the PO answer (§2.2).
- `AJ-Q-1`: one open residual exposed by the answer (§3.6).
- `S-18`…`S-20`: explicit supersessions (continuing 03ah's S-6…S-17).
- `LC-24`…`LC-27`: new ledger confirmations.
- `NI-22`…`NI-26`: new issues.
- `R-AJ-1`…`R-AJ-6`: new risks.
- `G-18`…`G-22`: new change-register entries.

**The AG-Q-6 limb labels (read this before §3).** Earlier documents number the two AG-Q-6 residuals in **opposite** ways (§3.5.1):
- 03ah §3.3, §4.1, §4.11 and all of 03ai use **(i) = the NOC** and **(ii) = the transfer-cancellation consequences**.
- 03ag line 709, 03ah §2.5 and 03ah Annex A (rows AG-Q-6-k and AG-Q-6-m) use the reverse.

This document uses the 03ah §4.1 / 03ai labels throughout. They are the labels the PO's question was asked under.

**Implementation warning (it applies everywhere).**
- "Resolved" means resolved **as a business rule**. No booking, cancellation, commission, CP-ledger or transfer schema, policy or code exists.
- Under CLAUDE.md Layer 2 (Master Spec §88), booking lifecycle, financial logic and CP commission logic need the project owner's explicit sign-off before implementation. **Delegation to an architect is not authorization.** §8 is therefore labelled `ARCHITECT RECOMMENDATION — NOT APPROVED`.

**Where each required element is.**

| Requirement | Location |
|---|---|
| PO LOCKED decision, verbatim | §2 |
| The Spec §26 supersession, with exact text and scope | §3.1 |
| Spec §33 and GC-37; AGX-12's disposition | §3.2, §3.3 |
| AG-Q-6(i) (the NOC): still open, distinct, and what is narrowed | §3.4 |
| AG-Q-6 cluster limb inventory, and the labelling inversion | §3.5 |
| The Unit B booking against what is locked about new bookings (AG-Q-5, AG-Q-13) | §3.6 |
| Everything that was waiting on AG-Q-6(ii) | §3.7 |
| Corpus and red-team records re-classified | §3.8 |
| Issue, supersession and contradiction register | §4 |
| Cluster-count arithmetic against 03ai's 65 | §5 |
| Per-domain Architecture Readiness | §6 |
| The one next PO question | §7 |
| Design direction for downstream implementers (not approved) | §8 |
| Risks, change register, final validation | Annexes A–C |

---

## 0. Summary

1. **AG-Q-6(ii) is answered** (`PO-AJ1`, PO LOCKED, Option A). The Unit A leg of a Booked unit transfer **is** a normal post-Booked cancellation, and it inherits **every** normal consequence:
   - unpaid commission and incentives are revoked;
   - already-paid commission is recovered offline by the Builder through the NOC process;
   - the Builder determines the refund or forfeiture, and BMexa records it;
   - the Unit A booking becomes Cancelled;
   - the lead moves to Booking Cancelled.

   Unit B is a **new booking**, joined to Unit A by the linked record.
2. **This is an explicit supersession of Master Spec §26** (S-18, §3.1). The superseded text is §26 ¶1, sentence 3, *"UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK"*, together with its operative restatement in ¶2, sentence 3.
   - The supersession is **partial by sentence**. ¶2, sentence 1 (*"must be explicitly determined"*) is **DISCHARGED (SATISFIED)**, not superseded.
   - The "distinguish" sentence survives, **NARROWED** to a record-level distinction carried by the linked record.
   - The CFO-validation sentence is **not** touched: it is held as **LC-24**.
   - Nothing in §26 concerns the price list, so AG-Q-13 is untouched by S-18.
   - Spec §33's parallel sentence (*"UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS"*) is superseded to the same extent (**S-19**).
3. **AGX-12 is DISCHARGED** (§3.3).
   - GC-37 (*"Automatically managed."*) answered a binary put by the corpus's CFO persona: should the CRM *"automatically manage this 'Negative CP Ledger' (auto-deducting clawbacks from the broker's next active deal), OR is the Accounts Team expected to manually track these clawbacks outside the system"*.
   - `PO-AJ1·9` now takes the other branch in explicit words: *"handled offline by the Builder through the NOC process"*, including *"against the Channel Partner's future bookings"*.
   - GC-37 is **SUPERSEDED** (S-20). AGX-12 **drops off the queue**.
   - What survives is **not** a contradiction. It is the question of what BMexa *records* about an offline recovery, and it belongs to AG-Q-6(i).
4. **AG-Q-6(i) (the NOC) remains OPEN and distinct** (§3.4). This answer does not say what the NOC takes from each future booking. It does narrow AG-Q-6(i) in three ways:
   - The **mechanism** is fixed: recovery is offline and performed by the Builder, not by BMexa.
   - The **trigger population** now includes transfers: every Unit A leg with paid commission is NOC-eligible.
   - The limb that matters to BMexa's architecture is therefore **what BMexa holds** about an offline recovery. The quantum becomes the Builder's offline determination (LC-27). That pattern is the one the PO already applied to refunds (S-16).
5. **The AG-Q-6 cluster** (§3.5):
   - Its two named residual limbs were (i) and (ii), and **AGX-12 was attached as a third item** (03ah §3.3 row 1, Annex C.2, Annex D).
   - (ii) is answered and AGX-12 is discharged, so **(i) is the only pre-existing limb left**.
   - This document homes **one new residual, AJ-Q-1**, in the same cluster. **AG-Q-6 stays PARTIAL.**
6. **Unit B pricing is not answered anywhere** (§3.6). It is the new residual **AJ-Q-1**. Two locked or prior texts reach the Unit B booking and point opposite ways:
   - **AG-Q-13**: *"Replacement unit uses the price-list version applicable at ORIGINAL booking submission."* 03ag asked it about a unit change **during correction**, but the handoff restates it under the unscoped heading *"PRICING BASIS ON UNIT CHANGE"*.
   - **Ordinary new-booking pricing**: `PO-AJ1·12` says *"Unit B is created as a new booking"*, and the earlier bundle's §B.15 (abridged) says *"New booking after release uses the current price list"*.

   The architect does not choose. A safe interim default exists (§3.6.3).
7. **The count stays at 65 (verified minimum)** (§5).
   - AG-Q-6 stays partial, because (i) is open and AJ-Q-1 is homed there.
   - AGX-12 and NI-3 are not clusters.
   - Under a stricter method (AJ-Q-1 counted on its own) the figure is **66**. Combined with 03ai's stricter alternative, it is **68**.
8. **CP/Commission Data Model stays "No"** (§6). **The reason is narrowed**:
   - The running-account-with-automatic-clawback option is excluded.
   - The domain is still blocked by AC-48, AG-Q-6(i), AC-53 and T-4/T-5.
   - AC-48 is now load-bearing, because the tranche "paid" boundary is the switch between revocation and offline recovery.
   - T-4/T-5 and AC-53 now also decide whether the Channel Partner earns on the Unit B booking.
9. **Hold/Booking/Unit Data Model moves from "No" to "Conditionally yes" for the post-Booked cancellation edge**, including the Unit A leg and the existence of the linked record. It stays **No** only for Unit B's commercial basis (AJ-Q-1).
10. **The next question is still AG-Q-6(i)**, reframed (§7). AGX-12 has dropped from the queue, AC-48 is promoted to #2, and AJ-Q-1 is inserted at #3. The question asks what BMexa holds while already-paid commission is recovered offline under a Channel Partner's NOC. It cites GC-36, as working rule 15 requires.

---

## 1. Sources and verification

### 1.1 Sources used

| # | Source | Role here | How it was read |
|---|---|---|---|
| S1 | **PO answer to 03ai §7.2** (relayed verbatim by the orchestrating session; Beads `Final-Verison-zqy`) | **Authoritative new decision** | In full (§2.1) |
| S2 | `03ai-…` (immediate baseline) | §3.5 row 5, §3.6, NI-19, §5 count, §6 readiness, §7 queue | **In full**, all 793 lines |
| S3 | `03ah-…` | NI-3, NI-4, NI-5, AGX-12, GC-36, GC-37, GC-47, R-AH-1…3, §3.3, §4.1, §4.11, §6, §7, Annexes A, C, D, F, G | Targeted: lines 1–130, 230–710, 855–930, plus a grep of every AG-Q-6 / AGX-12 / GC-36 / GC-37 / NI-3 / R-AH-1 / §26 occurrence |
| S4 | `docs/BMEXA_MASTER_SPEC.md` | §25, §26, §32 (line 251), §33, §34, §35, §87, §88 | Direct read. §26 (lines 223–227) and §33 (lines 253–255) quoted exactly at §3.1 and §3.2 |
| S5 | PO handoff `…/scratchpad/po-handoff-ad01ag-fresh-reconciliation.md` (03ah's S1) | Exact locked text of AG-Q-5, AG-Q-6, AG-Q-13, V-23 | Targeted: lines 495–512, 620–660, 715–745, 1000–1020 |
| S6 | `03ag-…` | AG-Q-13's original question (line 717), §B.15 (line 1335), LC-3, line 709 (the M-9 / AG-Q-6 coupling) | Targeted greps |
| S7 | Gemini corpus S6 lineage, `…/scratchpad/gemini_export/branch-of-cpo-final-assessment.md` | Exact words of GC-36 (L22955–22962), the question GC-37 answered (L22963–23001), GC-37 (L23002), and the red-team finding (L29555, chunk 414) | **Targeted re-read only**, to verify citations. 03ah §1 already read the corpus in full |
| S8 | `03t-…` | `M-9`'s ownership of *"clawback quantum"* | Grep |

### 1.2 Reading method and limits

| ID | Limitation |
|---|---|
| **L-AJ-1** | S1 is one PO message. The PO restated the question in the PO's own words (*"Should a transfer … be treated as a normal post-Booked cancellation … and … inherit all the normal post-Booked cancellation consequences?"*). The label "Option A" refers to the PO's own option list, not to 03ai §7.3's readings (i)–(iii). Where 03ai's question named an item that the PO's restatement does not name (the **Stage-2 allocation**), the item is held as a ledger reading (LC-26), not as locked. |
| **L-AJ-2** | 03ah's limitations L-2…L-7 and 03ai's L-AI-1…L-AI-3 carry over. The carried 54 clusters and the unbanded families are not re-derived. |
| **L-AJ-3** | The earlier bundle (§B.15 and others) is known only in abridged form (03ag Appendix A; F-3). §3.6 relies on §B.15's abridged wording only as evidence of a reading, never as a locked rule. |

---

## 2. The PO decision

### 2.1 Verbatim (PO LOCKED)

> "Should a transfer of a Booked Unit A to Unit B be treated as a normal post-Booked cancellation of Unit A, and if yes, should the cancellation inherit all the normal post-Booked cancellation consequences?
>
> Final Product Owner Decision: Option A — Yes. The cancellation of Unit A inherits the normal post-Booked cancellation consequences.
>
> When a customer transfers from an already Booked Unit A to Unit B, BMexa must represent the transaction as:
> 1. Cancellation of the original Unit A booking.
> 2. Creation of a new booking for Unit B.
> 3. A linked transfer/adjustment record connecting the two bookings.
>
> The cancellation of Unit A follows the normal post-Booked cancellation workflow and inherits its consequences.
>
> 1. Cancellation workflow
> - The Site Head or Project Head may initiate the post-Booked cancellation.
> - No separate approval is required.
> - The CRM department processes the cancellation after the required formalities and financial information are available.
> - Unit A is marked as Cancelled.
> - The Site Head or Project Head must separately release Unit A for resale.
>
> 2. Refund or forfeiture
> - The Builder determines the refund or forfeiture amount.
> - BMexa records the amount but does not calculate it.
>
> 3. Commission and incentives
> - If commission or incentives have not yet been paid: They are revoked under the normal cancellation rules.
> - If commission has already been paid: Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings.
>
> 4. Booking and lead status
> - The original Unit A booking record is marked Cancelled.
> - The lead follows the normal post-Booked cancellation status transition to Booking Cancelled.
> - Unit B is created as a new booking and linked to Unit A through the transfer/adjustment record.
>
> Final Decision Statement: A transfer from a Booked Unit A to Unit B is represented as cancellation of Unit A, creation of a new booking for Unit B, and a linked transfer/adjustment record. The cancellation leg inherits the normal post-Booked cancellation consequences, including commission and incentive revocation where unpaid, offline handling of already-paid commission through the NOC process, Builder-determined refund or forfeiture, and the normal cancellation status transitions. BMexa records the Builder-determined refund or forfeiture amount without calculating it.
>
> Status: PO LOCKED — Option A."

### 2.2 Limb register

| Limb | Text (verbatim fragment) | What it settles | Relation to earlier locked text |
|---|---|---|---|
| `PO-AJ1·1` | *"The cancellation of Unit A inherits the normal post-Booked cancellation consequences."* | The Unit A leg is **not** a special case. Every consequence of an ordinary post-Booked cancellation applies | **New.** Answers AG-Q-6(ii) and NI-3. Supersedes Spec §26 / §33's transfer exemption (S-18, S-19) |
| `PO-AJ1·2` | *"1. Cancellation … 2. Creation of a new booking … 3. A linked transfer/adjustment record"* | The three-record representation | **Restates** AG-Q-6-k (handoff line 734). CLARIFIED |
| `PO-AJ1·3` | *"The Site Head or Project Head may initiate the post-Booked cancellation."* | The initiator of the Unit A leg is `SH@P_A ∨ PH@P_A` | Restates AG-Q-6-a. Under `PO-AI1` this is 03ai §3.5 row 5, on **Unit A's** project |
| `PO-AJ1·4` | *"No separate approval is required."* | The Unit A leg needs no approval | Restates AG-Q-6 (S-14) |
| `PO-AJ1·5` | *"The CRM department processes the cancellation after the required formalities and financial information are available."* | CRM processing, **gated on** formalities and financial information | Restates AG-Q-6. The gate matters for sequencing (NI-23) |
| `PO-AJ1·6` | *"Unit A is marked as Cancelled. The Site Head or Project Head must separately release Unit A for resale."* | Unit A becomes Cancelled, then is released separately | Restates AG-Q-2 / AG-Q-6 (S-15). 03ai §3.5 row 4 |
| `PO-AJ1·7` | *"The Builder determines the refund or forfeiture amount. BMexa records the amount but does not calculate it."* | Record only, for the transfer case too | Restates AG-Q-6 (S-16) |
| `PO-AJ1·8` | *"If commission or incentives have not yet been paid: They are revoked under the normal cancellation rules."* | Unpaid commission **and incentives** on Unit A are revoked. There is no transfer exemption | Restates AG-Q-6's *"Unpaid commissions/incentives are revoked"* and extends it explicitly to transfers |
| `PO-AJ1·9` | *"If commission has already been paid: Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings."* | Paid-commission recovery is **offline**, **performed by the Builder**, **through the NOC**, and **may reach future bookings** | **Sharper than** the handoff's *"Already-paid commission is handled offline."* It names the actor (the Builder) and the channel (the NOC), and places future-booking adjustment inside the offline process. **Supersedes GC-37** (S-20); **discharges AGX-12** (§3.3) |
| `PO-AJ1·10` | *"The original Unit A booking record is marked Cancelled."* | Booking record state | Restates AG-Q-6-l |
| `PO-AJ1·11` | *"The lead follows the normal post-Booked cancellation status transition to Booking Cancelled."* | Lead status → Booking Cancelled **even though the customer is still buying** | Restates V-23 (*"Post-Booked cancellation -> lead status automatically becomes Booking Cancelled"*) and **closes** V-23's own pointer (*"The original booking cancellation / new booking distinction for a later unit transfer is separately covered by AG-Q-6"*) |
| `PO-AJ1·12` | *"Unit B is created as a new booking and linked to Unit A through the transfer/adjustment record."* | Unit B is a **new** booking, not an amended or continued one | **New emphasis.** Makes AJ-Q-1 (pricing) live (§3.6) |

### 2.3 What the answer does not say

Each silence is routed to where it is handled. None is filled in here.

| Silence | Handled at |
|---|---|
| The price-list version (and discount basis) of the Unit B booking | **AJ-Q-1** (§3.6) |
| Whether Unit B passes through the ordinary new-booking lifecycle (initiating Success, holds, approval chain, Accounts payment verification) | **LC-25** (§3.6.4) |
| Whether the Unit B booking may be initiated before the Unit A leg is processed by CRM | **NI-23** (§3.6.5) |
| What the linked record carries: money, commission, Stage-2 | **LC-26** (§3.6.6) |
| What the Stage-2 allocation on the Unit A booking becomes. The PO's restatement names commission and incentives, not Stage-2 (L-AJ-1) | **LC-26** |
| Whether the same Channel Partner is attributed to, and earns on, the Unit B booking | **NI-24** → T-4/T-5, AC-53 (existing, open) |
| What the NOC takes from each future booking, and what BMexa records about it | **AG-Q-6(i)** (§3.4); **LC-27** |
| When a staged tranche counts as "paid" (and therefore revoked, or recovered offline) | **AC-48** (existing, open); **NI-25** |
| Whether the PO's answer is the CFO / finance-legal validation that Spec §26 and §87(5) call for | **LC-24** |
| How reports tell a transfer-cancellation from a genuine one | **NI-22** (architecture) |

---

## 3. Reconciliation

### 3.1 Master Spec §26: SUPERSEDED in part (S-18), with the exact text

**Exact text.** `docs/BMEXA_MASTER_SPEC.md` lines 223–227:

> **## 26. UNIT TRANSFERS**
>
> *"A unit transfer requires special treatment. The previous design concept was: old booking → new booking → financial transfer/reconciliation. However: UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK.*
>
> *If a customer changes from one unit to another, the financial and brokerage consequences must be explicitly determined. The system must distinguish genuine cancellation from approved unit transfer/upgrade/downgrade. Do not create an automatic CP clawback merely because an old unit record is technically closed. This is a CFO validation requirement before production financial logic is finalized."*

03ah and 03ai quoted the capitalized sentence correctly. Its full context is given here because the sentences of §26 do not all fall the same way.

**Sentence-by-sentence disposition.**

| # | §26 sentence (verbatim) | Class | Reasoning |
|---|---|---|---|
| ¶1 s1 | *"A unit transfer requires special treatment."* | **NARROWED** | Transfers remain special in **representation**: three records and a linked record (`PO-AJ1·2`). They are **not** special in **consequences** (`PO-AJ1·1`). |
| ¶1 s2 | *"The previous design concept was: old booking → new booking → financial transfer/reconciliation."* | **CLARIFIED** | This is the PO's three-record representation, with the linked record as the *"financial transfer/reconciliation"*. It is consistent with GC-47 (*"a Ledger_Transfer_Entry"*, chunk 320). |
| ¶1 s3 | *"However: UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK."* | **SUPERSEDED (S-18)** | Same subject, and the newer PO text is explicit and opposite: *"The cancellation of Unit A inherits the normal post-Booked cancellation consequences"*, *"including commission and incentive revocation where unpaid, offline handling of already-paid commission through the NOC process"*. The PO restated the question as *"should the cancellation inherit all the normal post-Booked cancellation consequences?"* and answered *"Yes"*. |
| ¶2 s1 | *"If a customer changes from one unit to another, the financial and brokerage consequences must be explicitly determined."* | **DISCHARGED (SATISFIED)** | A demand for a decision, not a rule. `PO-AJ1` is that decision. Nothing contradicts it. |
| ¶2 s2 | *"The system must distinguish genuine cancellation from approved unit transfer/upgrade/downgrade."* | **NARROWED** | It survives as a **record-level** distinction: the Unit A cancellation is linked, through the linked record, to a Unit B booking, and a genuine cancellation has no such link. It **no longer** implies different CP, incentive, refund or lead-status consequences. Consequences: NI-22 (reports must use the link) and §8.3. |
| ¶2 s3 | *"Do not create an automatic CP clawback merely because an old unit record is technically closed."* | **SUPERSEDED (S-18), as a transfer exemption** | Its premise, that the old record is only *"technically closed"*, is replaced: the Unit A booking is **genuinely cancelled** (`PO-AJ1·1`, `·10`). What survives is **not a transfer rule**. BMexa performs **no automatic recovery of paid commission for any cancellation**, because recovery is offline and performed by the Builder (`PO-AJ1·9`). That fact now rests on `PO-AJ1·9` and AG-Q-6, not on §26. Revocation of **unpaid** commission (`PO-AJ1·8`) is not a "clawback" in the Spec's own usage (§33: *"a recoverable CP overpayment"*). In any case it now applies to transfers. |
| ¶2 s4 | *"This is a CFO validation requirement before production financial logic is finalized."* | **Not superseded → LC-24** | `PO-AJ1` decides the **business** semantics. Whether the PO's decision also **is** the CFO validation, or whether a CFO or finance-legal review is still required, is not stated. See also §87(5): *"CP clawback treatment — validate cancellation vs transfer semantics with finance/legal stakeholders."* The architect does not decide that a PO answer waives a validation gate. |

**Scope of S-18.**
- **Superseded:** §26 ¶1 s3 in full, and ¶2 s3 as a transfer exemption.
- **Not superseded:** ¶1 s1 and ¶2 s2, which are narrowed; ¶1 s2, which is clarified; ¶2 s1, which is discharged; and ¶2 s4, which is held as LC-24.
- **Outside §26 entirely:**
  - Unit B's price list. §26 says nothing on price. AG-Q-5 and AG-Q-13 govern unit changes during correction, and their reach to Unit B is AJ-Q-1.
  - Spec §25 amendments. They stay for plan and applicant changes (LC-21).

**S-18 is a PO-over-Spec supersession, recorded as such.** Spec §26 is the post-red-team synthesis of the corpus (03ah §1.2). The red team's *"Unit Transfer Clawback Bug"* (chunk 414, S7 L29555) proposed *"Unit Transfers must explicitly bypass the automated clawback rule, or the Cancellation must have a Reason = Transfer flag that suppresses the financial penalty."* The PO has now declined that fix for the unpaid-commission and lead-status consequences.

The red team's *premise* was that the system **auto-deducts** from the Channel Partner: *"Rule 7 states: Automated CP Clawbacks: If a booking cancels... system auto-deducts debt from CP."* That premise is removed separately, by S-20 (§3.3). The "instant negative clawback ruining their ledger" scenario therefore cannot occur in BMexa as locked. What the PO **has accepted** is the revocation of unpaid commission and incentives on an upgrade (R-AJ-1).

### 3.2 Master Spec §33: SUPERSEDED in part (S-19); NARROWED in part

**Exact text** (line 255):

> *"If a legitimate cancellation creates a recoverable CP overpayment: the CP ledger may become negative. Future eligible payouts may be reduced to recover the amount. However: UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS. Do not blindly apply clawback logic to every closed booking."*

| Sentence | Class | Reasoning |
|---|---|---|
| *"If a legitimate cancellation creates a recoverable CP overpayment: the CP ledger may become negative."* | **NARROWED → AG-Q-6(i)** | *"May"* is permissive. `PO-AJ1·9` makes recovery an offline act of the Builder. Whether BMexa's CP records **show** a negative or outstanding position is exactly what AG-Q-6(i), as reframed, asks (§3.4, §7). |
| *"Future eligible payouts may be reduced to recover the amount."* | **NARROWED** | Consistent with `PO-AJ1·9` (*"recovery or adjustment against the Channel Partner's future bookings"*). The reduction is **performed offline by the Builder**, not computed by BMexa. |
| *"However: UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS."* | **SUPERSEDED (S-19)** as to consequences; **NARROWED** to a record-level distinction, as §26 ¶2 s2 is | Under `PO-AJ1·1` the Unit A leg **is** a true cancellation for every consequence. The only surviving distinction is the linked record. |
| *"Do not blindly apply clawback logic to every closed booking."* | **SUPERSEDED (S-19)** as a transfer exemption | The PO has deliberately (not "blindly") applied the ordinary cancellation consequences to the Unit A leg. No BMexa "clawback logic" for paid commission exists anyway (`PO-AJ1·9`). |

Spec §32 (line 251: *"reversal/clawback where legitimately applicable"*) and §35 (line 263: *"'Handled offline' does NOT mean destroy history or ignore the transaction"*) are **CLARIFIED / consistent**. §35 becomes a constraint on AG-Q-6(i) (§3.4).

### 3.3 AGX-12: DISCHARGED; GC-37 SUPERSEDED (S-20)

**What AGX-12 was.** The citations are:
- 03ah Annex C.2 row AGX-12: *"S1 AG-Q-6: 'Already-paid commission is handled offline' against GC-37 'Automatically managed' (negative CP ledger, auto-deduction) and Spec §33 | CP Ledger shape | Resolved through AG-Q-6(i) (§8.3). If it is not resolved there, ask it separately | UNRESOLVED CONTRADICTION | Inside AG-Q-6"*;
- 03ah §5 NI-4 (*"Decides whether the CP Ledger is a CP-level running account able to carry a recoverable balance across bookings, or per-booking records only"*);
- 03ah §2.3 GC-37 (*"UNRESOLVED CONTRADICTION → AGX-12"*);
- 03ai §3.9 and §4.3 (carried unchanged);
- 03ai §7.5 #3.

**Why it was unresolved in 03ah.** The handoff's *"Already-paid commission is handled offline"* was bare. 03ah §4.1 showed a reconciliation was still **possible**: *"recovery through the refund is offline, and recovery through the NOC set-off is carried in BMexa"*. On that reading GC-37's automatic management might have survived for the NOC set-off. The architect could not choose, so the contradiction stayed open.

**What GC-37 answered.** This was verified in the corpus (S7, L22963–23002). The corpus's CFO persona asked:

> *"Does our CRM need to automatically manage this 'Negative CP Ledger' (auto-deducting clawbacks from the broker's next active deal), OR is the Accounts Team expected to manually track these clawbacks outside the system and adjust invoices on paper?"*

The PO answered (L23002, chunk 249, 2026-09-06): *"Automatically managed."*

**What the PO now says** (`PO-AJ1·9`, 2026-09-28):

> *"If commission has already been paid: Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings."*

**Analysis.**

| Test | Finding |
|---|---|
| Same subject? | **Yes.** Both concern how already-paid commission on a cancelled booking is recovered, specifically **against the Channel Partner's future bookings**. GC-37's question names *"the broker's next active deal"*; `PO-AJ1·9` names *"the Channel Partner's future bookings"*. |
| Explicit and opposite? | **Yes.** GC-37's binary was *automatic, in the CRM* against *outside the system, by hand*. `PO-AJ1·9` says *"handled offline by the Builder"*. That is the second branch, and it expressly **includes** the future-bookings adjustment that 03ah's candidate reconciliation would have kept in BMexa. |
| Newer? | **Yes.** 2026-09-28 against 2026-09-06. |
| Is 03ah §4.1's candidate reconciliation still available? | **No, as to mechanism.** It depended on the NOC set-off being *"carried in BMexa"*, meaning computed and applied. `PO-AJ1·9` puts the NOC set-off inside the offline, Builder-performed process. A weaker, **record-only** form (BMexa records what the Builder did) is **not** excluded. It is not a contradiction with anything, and it is AG-Q-6(i)'s concern. |
| Did the PO reference GC-37? | No. The SUPERSEDED class (03ah "How to read") requires **same subject** and **explicit or exclusive wording**. It does not require the newer text to cite the older one. S-13 and S-14 were recorded on the same basis. |

**Disposition.**
- **GC-37: SUPERSEDED (S-20).** Old: BMexa automatically manages a negative CP ledger and auto-deducts from the next deal. New: the Builder recovers offline through the NOC, including against future bookings.
- **AGX-12: DISCHARGED.** It is removed from the open-contradiction register and from the queue.
- **NI-4: DISCHARGED** (it was AGX-12 as an issue).
- **Gemini's restatements are superseded with GC-37.** These are *"CP_Ledger … Negative balances (Clawbacks) automatically offset future eligible payouts"* (chunk 323) and *"Rule 7/8: Automated CP Clawbacks"* (chunks 403–411). They were ARCHITECT-DERIVED (03ah §2.6).

**What AGX-12's discharge does not settle.** The CP Ledger's shape is **narrowed, not fixed**. Of NI-4's two alternatives:
- *"a CP-level running account able to carry a recoverable balance across bookings"* is excluded **as a system-managed, auto-offsetting account**;
- *"per-booking records only"* is **not** thereby selected.

A third shape remains open: per-booking records **plus** a record-only CP-level record of each NOC and of what the Builder has recovered under it. Which of these applies is AG-Q-6(i) (§3.4). It is a question of **record-keeping content**, not a contradiction between two PO texts. So AGX-12 is discharged and nothing replaces it in the contradiction register.

**Residual caution from the corpus (not a rule).** In the same GC-37 turn, the CFO persona warned: *"If we leave it manual, the builder will eventually lose track of money owed by brokers."* This is ARCHITECT-DERIVED. It is recorded as R-AJ-5, because it bears on how AG-Q-6(i) should be framed. It does not bear on AGX-12's disposition.

### 3.4 AG-Q-6(i), the NOC: OPEN and distinct; what this answer narrows

**Confirmation.** `PO-AJ1` does **not** answer AG-Q-6(i). The handoff's open question stands as written:

> *"REMAINING OPEN AG-Q-6 QUESTION: What exactly does the NOC waive on each future booking?"* (S5 line 739–740)

So does GC-36's earlier answer (chunk 247, 2026-09-06, L22955–22962; verified). GC-36 describes a **sequence**:
1. *"In case the unit gets cancelled, builder will deduct that commission amount from the 10% amount paid by the customer."*
2. *"If the customer is refusing, then the builder will take an NOC from the channel partner that he will deduct that commission from his future revenue."*
3. *"If the channel partner is not giving that NOC, in that case, the amount will be deducted from the customer who has paid 10%."*

NI-5 (three unharmonised wordings: GC-36 *"deduct … from his future revenue"*; 03ag *"forgo commission from a future booking"*; handoff *"waive"*) is **carried**.

**AG-Q-6(i) and AG-Q-6(ii) are not conflated.** AG-Q-6(ii) asked whether the Unit A leg **generates** the ordinary consequences. AG-Q-6(i) asks what the NOC, **once given**, does. `PO-AJ1` names the NOC process as the channel for recovery. It does not define it.

**What `PO-AJ1` narrows about AG-Q-6(i).**

| Aspect of the NOC | Before `PO-AJ1` | After `PO-AJ1` | Status |
|---|---|---|---|
| **Scope** (which bookings) | Locked: *"ANY future booking made by the SAME Channel Partner, regardless of customer"* | Unchanged | PO LOCKED (handoff) |
| **Mechanism** (who performs recovery, and where) | Contested: offline (handoff) against automatic (GC-37), with a candidate split (03ah §4.1) | **Offline, performed by the Builder, through the NOC**, including against future bookings (`PO-AJ1·9`) | **PO LOCKED** (this answer) |
| **Trigger population** (which cancellations can lead to a NOC) | Genuine post-Booked cancellations with paid commission. Transfers were undecided | **Also every Unit A leg of a transfer with paid commission** (`PO-AJ1·1`, `·9`) | PO LOCKED (this answer) |
| **Target set may include Unit B** | — | If the same Channel Partner is attributed to the Unit B booking (NI-24), Unit B is itself a *"future booking"* of that Channel Partner, and is inside the NOC's scope | ARCHITECT-DERIVED observation; attribution is T-4/T-5 / AC-53 |
| **Wording** | *"waive"* (handoff) against *"deduct … from his future revenue"* (GC-36) | *"Recovery or adjustment … against the Channel Partner's future bookings"*. "Recovery" is **lexically closer to GC-36's set-off** (recovering an amount already paid) than to "waive" (forgoing a future commission outright) | **Evidence only.** Not decisive; NI-5 carried |
| **Quantum and duration** (how much is taken from each future booking; until when) | Open | **Performed by the Builder offline.** On the S-16 pattern (*"Builder determines … BMexa records, does not calculate"*), the quantum is the Builder's offline determination | **LC-27** (pending confirmation) |
| **What BMexa holds about it** | Hidden inside AGX-12 | Now the **only limb that shapes BMexa's architecture** (§3.3): nothing; the NOC only; the NOC plus the recorded per-booking adjustments; or those plus a running outstanding amount | **OPEN.** This is the reframed AG-Q-6(i) (§7) |

**Why the reframe is a narrowing, not a new question.** Suppose the Builder performs the recovery offline and determines its amount, as it does for refunds. Then *"what the NOC waives on each future booking"* describes Builder conduct that BMexa does not execute. It matters to BMexa only to the extent that BMexa must **record** or **show** it. Two Spec constraints make "record nothing" unsafe to assume:
- Spec §35: *"'Handled offline' does NOT mean destroy history or ignore the transaction."*
- Spec §34: *"Do not allow the displayed net payable to silently disagree with the ledger."* A future booking whose commission is reduced offline while BMexa shows the full amount payable is exactly that disagreement.

Any recording choice is CP commission logic under §88. So the question is still the PO's.

**Orchestrator hypothesis, checked.** The orchestrator suggested that AG-Q-6(i) may now be *"purely about SCOPE/percentage/duration … rather than mechanism."*
- **Mechanism: agreed**, it is settled.
- **Scope: already locked** (handoff).
- **Percentage and duration** become Builder-determined offline, if LC-27 is confirmed.

The residual that remains for BMexa is **record content**. The quantum and duration return as a BMexa question only if the PO wants BMexa to show an outstanding amount (option (C) in §7.2), which presupposes GC-36's set-off meaning.

### 3.5 The AG-Q-6 cluster: limb inventory, and the labelling inversion

#### 3.5.1 Labelling inversion (citation correction, recorded, not silently fixed)

| Document and location | (i) | (ii) |
|---|---|---|
| 03ag line 709 (*"`M-9` (unit transfer) is now coupled to AG-Q-6(i)"*) | unit transfer | (NOC, implied) |
| 03ah §2.5 lines 341–342 | *"AG-Q-6 (i): Spec §26 'unit transfer ≠ cancellation'"* | *"AG-Q-6 (ii): NOC"* |
| 03ah Annex A rows AG-Q-6-k and AG-Q-6-m | AG-Q-6-k → *"AG-Q-6(i), Spec §26"* | AG-Q-6-m → *"AG-Q-6(ii)"* |
| 03ah §3.3 row 1, §4.1, §4.11, §6.4, §8.3; Annex F; **all of 03ai** | **NOC per-booking effect** | **transfer-cancellation consequences** |

The PO was asked, and answered, **"AG-Q-6(ii)" in the §4.1 / 03ai sense** (the transfer-cancellation consequence). This document follows that sense. 03ag's line-709 note should read *"coupled to AG-Q-6(ii)"* in the current labelling (G-19).

#### 3.5.2 Every limb and item ever homed in AG-Q-6

| Item | Source | Status before 03aj | Status after 03aj |
|---|---|---|---|
| AG-Q-6-a…i: initiators, no approval, CRM processing, unit Cancelled, separate resale release, refund record-only, unpaid revoked, paid offline, deduction from refund | 03ah Annex A | PO LOCKED | PO LOCKED; restated by `PO-AJ1·3`–`·9` |
| AG-Q-6 (iii)/(iv) in 03ag's numbering: lead and booking state after a post-Booked cancellation | 03ah §2.5 | RESOLVED | RESOLVED; restated by `PO-AJ1·10`, `·11` |
| AG-Q-6-k: transfer **representation** | 03ah Annex A | PO LOCKED | PO LOCKED; restated by `PO-AJ1·2` |
| AG-Q-6-m: NOC **scope** | 03ah Annex A | PO LOCKED | PO LOCKED |
| **(ii) transfer-cancellation consequences** (NI-3) | 03ah §4.1(ii); 03ai §7.2 | OPEN | **ANSWERED** (`PO-AJ1`) |
| **(i) NOC per-booking effect** | 03ah §4.1(i) | OPEN | **OPEN**, reframed (§3.4, §7) |
| **AGX-12, "attached"** (the third item) | 03ah §3.3 row 1 (*"AGX-12 is attached"*); Annex C.2 (*"Inside AG-Q-6"*); Annex D (*"(i) NOC effect; (ii) transfer consequences; AGX-12"*) | UNRESOLVED CONTRADICTION | **DISCHARGED** (§3.3) |
| NI-19: cross-project transfer initiator | 03ai §4.2 (*"Inside AG-Q-6(ii), for its architecture follow-through"*) | Architecture, inside (ii) | **NARROWED** (§3.7). The Unit A leg is initiated on P_A, as for any post-Booked cancellation. Unit B is an ordinary new booking on P_B (LC-25). No business residual remains |
| LC-21: GC-23's amendment workflow for post-Booked unit changes | 03ah Annex C.3 | Pending | Pending, **strengthened**: a post-Booked unit change is a cancellation plus a new booking, not an amendment |
| **AJ-Q-1: Unit B pricing basis** | This document §3.6 | — | **OPEN (new, homed here)** |

**Answer to the orchestrator's item 4.**
- Of the items 03ah and 03ai tracked **inside AG-Q-6**, there were **three open ones**: (i), (ii), and AGX-12 attached. With (ii) answered and AGX-12 discharged, **(i) is the only one left**.
- The cluster is not thereby down to one open item. AJ-Q-1 is newly homed here (§5.1), so **AG-Q-6 now carries two open items: (i) and AJ-Q-1**.
- NI-19 no longer holds a business residual.

### 3.6 The Unit B booking against what is locked about new bookings

#### 3.6.1 What is locked about pricing on a unit change, and its scope

| Text | Exact words | Scope as asked | Reaches Unit B? |
|---|---|---|---|
| **AG-Q-5** (handoff lines 498–509) | *"During correction, … Unit may change during correction to another available unit. When unit changes, price is recalculated. For a replacement unit, use the price-list version applicable at the ORIGINAL booking submission."* | **During correction** (before Booked), **within the same booking** | **No.** A post-Booked transfer is not a correction. It produces a new booking (`PO-AJ1·12`) |
| **AG-Q-13** (handoff lines 649–654) | Heading *"PRICING BASIS ON UNIT CHANGE"*: *"Replacement unit uses the price-list version applicable at ORIGINAL booking submission. Sales Rep may change current BSP in cost sheet without changing the underlying price-list basis. Old discount can be modified in cost sheet. Discount exceeding configured authority requires re-approval."* | 03ag asked it as *"**Re-pricing on a unit change during correction.** (a) Is the new unit priced at the *current* price-list version (compare prior §B.15) or at the version applicable at the original submission?"* (03ag line 717). The **handoff restatement drops "during correction"** | **Arguable.** Its question was scoped to correction, but its locked wording is unscoped, and Unit B is, in ordinary language, a "replacement unit" for Unit A |
| **Earlier bundle §B.15** (abridged; 03ag line 1335) | *"New booking after release uses the current price list"* | A new booking on a **released** unit | **Directly, no.** Its subject is the next booking of a released unit, which here means Unit A's resale. By analogy it expresses a general **new-booking = current price list** principle |
| **`PO-AJ1·12`** | *"Unit B is created as a new booking"* | This transfer | **Yes.** It classifies Unit B as a new booking, but says nothing on price |
| Spec §26 | Silent on price | — | — |

#### 3.6.2 Finding: AJ-Q-1 (NEW, 03aj), OPEN

Two readings are each supported by locked or prior text, and they give **opposite commercial outcomes**. For an upgrade after a price rise, reading (a) prices Unit B at the old, lower price-list version; reading (b) prices it at the current one.

| Reading | For | Against |
|---|---|---|
| **(a) AG-Q-13 reaches Unit B.** Unit B uses the price-list version applicable at **Unit A's** original submission; Unit A's approved discount may be carried and modified, with re-approval above authority | AG-Q-13's locked wording is unscoped (*"ON UNIT CHANGE"*, *"Replacement unit"*). A transfer is a unit change. Customer-continuity reasoning | AG-Q-13 was **asked** about correction (03ag line 717). `PO-AJ1·12` makes Unit B a **new** booking. §B.15's new-booking principle. Under Option A, the PO has chosen to treat the transfer as a genuine end of the Unit A booking for every **other** consequence |
| **(b) Unit B is priced as an ordinary new booking.** The price-list version current at **Unit B's** own submission; discounts through the separate discount workflow (AG-Q-4-f) | `PO-AJ1·12` (*"new booking"*); §B.15; AG-Q-13's question scope; consistency with `PO-AJ1·1` | AG-Q-13's unscoped wording. A customer upgrading shortly after booking would lose any price protection |

**Verdict.** The architect does not choose. This is financial logic under §88. **AJ-Q-1: For the new Unit B booking created by a post-Booked unit transfer, which price-list version applies: the one applicable at the original Unit A booking submission (as for a replacement unit during correction, AG-Q-13), or the one current at the Unit B booking's own submission (as for any new booking)? And does an approved discount on Unit A carry over?**
- The two limbs (price-list basis; discount carry-over) are one decision, just as they were in AG-Q-13.
- Homing: inside **AG-Q-6** (§5.1).

#### 3.6.3 Interim treatment for AJ-Q-1 (ARCHITECT RECOMMENDATION — NOT APPROVED)

A **safe interim default exists**:
1. Price the Unit B booking as an ordinary new booking, at the price-list version current at its submission (reading (b)).
2. Any concession that honours Unit A's price becomes a **discount** under the separate discount-approval workflow (AG-Q-4-f), where every concession is visible, approved and audited.

Why it is safe:
- It never silently under-prices.
- The Sales Rep may already alter the cost-sheet BSP (AG-Q-5 / AG-Q-13), so the customer can still be given the old price. The difference is that it goes through authority.
- Reversing it later changes only which price-list version is referenced. The booking's price-list-version reference and its two snapshots (AG-Q-5) have the same **shape** under either reading.

It must be **visible to the PO** as a default (R-AJ-6), not presented as a rule.

#### 3.6.4 Lifecycle entry of the Unit B booking: LC-25 (ledger, not a question)

- `PO-AJ1·12` calls Unit B *"a new booking"*.
- `PO-AJ1·11` moves the lead to Booking Cancelled.
- V-23 moves a lead into Booking in Progress only on **booking start**. AG-Q-12 makes that the booking-initiating Success activity.

So Unit B's booking can only start as any booking starts:
- a booking-initiating Success (AG-Q-12);
- the 20-minute payment hold, then the non-expiring booking hold (AG-Q-1);
- the project's approval chain (AG-Q-4), including Accounts payment verification;
- the two financial snapshots (AG-Q-5);
- Booked, at which point the lead automatically becomes Booked again (V-23).

This reading is compelled by the locked texts together, but no PO text states it for transfers. **LC-25: NARROWED — PENDING PO CONFIRMATION.**

**Consequence the PO should see.** A transferring customer's lead passes through **Booked → Booking Cancelled → Booking in Progress → Booked**. The customer's Unit B booking faces the **full approval chain**, as a new customer's would. Accounts payment verification for Unit B will rely on money received against Unit A. How that money is applied is LC-26.

#### 3.6.5 Sequencing of the two legs: NI-23 (issue)

**The problem.** `PO-AJ1·5` gates CRM processing of the Unit A leg on *"the required formalities and financial information"*. The Builder's refund or forfeiture amount is one of these. That may take time. V-23 keeps **one** status per lead:
- If the Unit B booking starts **before** the Unit A leg is processed, the lead goes to Booking in Progress for Unit B while Unit A is still Booked.
- Processing Unit A then **automatically** sets the lead to *Booking Cancelled* (`PO-AJ1·11`), in the middle of the Unit B booking.

Neither order is stated. The PO's list order (*"1. Cancellation … 2. Creation of a new booking"*) suggests Unit A first, but is not explicit.

**Interim treatment (ARCHITECT RECOMMENDATION — NOT APPROVED).**
- Unit B's booking-initiating Success is permitted only **after** CRM has processed the Unit A leg. The V-23 transitions then fire in sequence without a clash.
- This withholds nothing the PO granted. It does carry an operational cost: Unit B cannot be held while Unit A's cancellation is being processed, so another buyer may take it (R-AJ-3).
- If the PO wants Unit B securable earlier, that is a **new hold rule**. The nearest older PO text is GC-11's Site Head / Project Head extended hold, which is LC-14's subject. It would have to be decided, not inferred.

**Home.** AG-Q-6, as architecture follow-through. **Not counted.** It is a candidate for PO confirmation together with LC-25.

#### 3.6.6 The linked record: LC-26 (ledger)

`PO-AJ1` names the record, but not its content. The readings below are compelled by locked text or follow the PO's own record-only pattern:

| Content | Reading | Basis |
|---|---|---|
| The two booking identities, and the transfer's actor, reason and time | Carried | `PO-AJ1·2`; Spec §25 (*"actor, reason, time, affected information"*) |
| **Commission, incentives, Stage-2 allocation** | **Not carried.** Unit A's unpaid commission and incentives are revoked (`PO-AJ1·8`). The Stage-2 allocation on Unit A lapses with the commission it allocates. Stage-2 on Unit B is decided afresh (AC-48; `PO-X1`) | `PO-AJ1·1`, `·8`. Option A rejects 03ai §7.3's carry-over reading (ii). **The Stage-2 limb is ARCHITECT-DERIVED** (L-AJ-1) |
| **Booked status** | **Not carried.** The lead goes to Booking Cancelled; Unit B reaches Booked through its own lifecycle | `PO-AJ1·11`; LC-25 |
| **Money** | Carried as a **recorded, not calculated**, amount: the Builder-determined amount of the Unit A payments applied to Unit B, beside the Builder-determined refund or forfeiture on Unit A. Receipts are never deleted or overwritten; the application is an adjustment (Spec §28, §29) | `PO-AJ1·7`; S-16; Spec §26 ¶1 s2 (*"financial transfer/reconciliation"*); GC-47 (*"Ledger_Transfer_Entry"*) |

**LC-26: NARROWED — PENDING PO CONFIRMATION.** Only the money limb and the Stage-2 limb are architect readings. The rest is compelled.

### 3.7 Everything that was waiting on AG-Q-6(ii)

| Item | Blocking statement before | Now | Residual |
|---|---|---|---|
| **NI-3** (03ah §5): *"A Booked unit transfer is now, by definition, a cancellation … Wrong either way"* | Home AG-Q-6(ii) | **DISCHARGED.** The PO chose the first horn, and it is no longer "wrong": it is the rule | Consequences accepted (R-AJ-1); record-level distinction (NI-22) |
| **NI-19** (03ai §4.2): cross-project transfer initiator | Inside AG-Q-6(ii) | **NARROWED; no business residual.** The Unit A leg is `SH@P_A ∨ PH@P_A`, with no approval. The Unit B leg is an ordinary new booking on P_B (LC-25). Nothing initiates "the transfer as a whole" | Architecture: which act creates the linked record (§8.2) |
| **R-AH-1** (03ah Annex F): *"A unit upgrade penalises the CP … and flips the customer to Booking Cancelled"*, High / High | NI-3 → AG-Q-6(ii) | **RE-CLASSIFIED.** It is no longer a risk of building the wrong thing. It is the **PO-chosen behaviour**. Its business consequence is carried as R-AJ-1 (owner: PO). The build risk is now the reverse: re-introducing the superseded exemption (R-AJ-2) | — |
| **R-AH-3**: *"CP Ledger built per booking only, and then AGX-12 is resolved toward a running recoverable balance"* | AGX-12 | **Lowered** (Medium / Medium). A system-managed running balance is excluded (S-20). A record-only CP-level record remains possible under AG-Q-6(i), and is **additive** to per-booking records | AG-Q-6(i) |
| **03ai §6, Hold/Booking/Unit Data Model:** *"No for the post-Booked cancellation and transfer edges, until AG-Q-6(ii)"* | AG-Q-6(ii) | **Conditionally yes** for the post-Booked cancellation edge, including the Unit A leg and the linked record's existence (§6) | Unit B's commercial basis (AJ-Q-1); NI-23 |
| **03ah Annex G, G-5:** *"Spec §26 / §33: Keep 'transfer ≠ ordinary cancellation for clawback' until AG-Q-6(ii)"* | AG-Q-6(ii), AGX-12 | **Its hold is released.** Replaced by the change named at G-18 | PO approval |
| **V-23's pointer:** *"The original booking cancellation / new booking distinction for a later unit transfer is separately covered by AG-Q-6"* | AG-Q-6 | **Closed** by `PO-AJ1·11` | LC-25 (the Unit B leg) |
| **Spec §87(5)** (intentionally deferred): *"CP clawback treatment — validate cancellation vs transfer semantics with finance/legal stakeholders"* | Deferred | **Narrowed.** The semantics are PO-decided. What is left is external validation of the PO's decision, not a choice between semantics | LC-24. Still deferred and **not counted** (03ah §3.6) |
| **`M-9`** (unbanded commission model; 03t: *"owns every … clawback quantum"*) | Coupled to AG-Q-6 (03ag line 709) | **Narrowed.** For already-paid commission there is no BMexa-computed clawback quantum: recovery is offline and Builder-determined (`PO-AJ1·9`; LC-27) | Remains unbanded; not counted |
| **NI-13** (Cancelled-Inventory edge) | Architecture | **Unchanged.** `PO-AJ1·6` restates the post-Booked path (Cancelled, then separate release); the open part is the **Pre-Booked** edge | AD-G-16 |

### 3.8 Corpus and red-team records re-classified

| Record | Chunk (date), speaker | Text | Against `PO-AJ1` |
|---|---|---|---|
| GC-37 | 249 (09-06), PO | *"Automatically managed."* | **SUPERSEDED** (S-20) |
| Gemini *"CP_Ledger … Negative balances (Clawbacks) automatically offset future eligible payouts"*; *"Rule 7/8: Automated CP Clawbacks"* | 323; 403–411, Gemini | ARCHITECT-DERIVED restatements of GC-37 | Superseded with GC-37 |
| Red team *"The Unit Transfer Clawback Bug … Fix: Unit Transfers must explicitly bypass the automated clawback rule, or the Cancellation must have a Reason = Transfer flag that suppresses the financial penalty"*; blocker register row 1 *"Flag transfers to bypass clawback"* | 414, Gemini | ARCHITECT-DERIVED. Absorbed into Spec §26 and §33 | **Its fix is declined by the PO** (S-18, S-19). **Its premise (auto-deduction) is removed** (S-20) |
| GC-36 | 247 (09-06), PO | The NOC as consent *"that he will deduct that commission from his future revenue"*, within a refund-first sequence | **Carried, unconfirmed** (NI-5). `PO-AJ1·9`'s *"recovery or adjustment"* is lexically consistent with it. It is cited in the §7 question |
| GC-47 | 320 (09-07), PO | *"'Unit Transfer' physically act as a formal Cancellation of the Booking for Unit 402 … + the creation of a brand new Booking for Unit 805 + a Ledger_Transfer_Entry"* | **CLARIFIED** further. *"formal Cancellation"* and *"brand new Booking"* both match `PO-AJ1`. It is evidence for LC-26's money limb |
| GC-23 | 157 (09-04), PO | *"the formal Amendment workflow"* for a tower switch | **NARROWED** further (LC-21). A post-Booked unit change is never an amendment |
| GC-5 / S-16 | 2, PO | Automatic standard deductions | Already superseded. `PO-AJ1·7` restates the record-only rule for the transfer case |

---

## 4. Issue, supersession and contradiction register (delta to 03ah §5, Annex C and 03ai §4)

### 4.1 Explicit supersessions (continuing 03ah's S-6…S-17)

| ID | Newer text | Older text | Old vs new | Explicit wording relied on |
|---|---|---|---|---|
| **S-18** | `PO-AJ1·1`, `·8`, `·9`, `·11` | Spec §26 ¶1 s3 (*"UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A NORMAL CANCELLATION FOR CP CLAWBACK"*); ¶2 s3 (*"Do not create an automatic CP clawback merely because an old unit record is technically closed"*) as a transfer exemption | **Old:** the Unit A leg is exempt from ordinary cancellation consequences for the Channel Partner. **New:** it inherits all of them | *"Option A — Yes. The cancellation of Unit A inherits the normal post-Booked cancellation consequences"*; *"including commission and incentive revocation where unpaid, offline handling of already-paid commission through the NOC process"* |
| **S-19** | As S-18 | Spec §33 s3–s4 (*"UNIT TRANSFERS MUST BE DISTINGUISHED FROM TRUE CANCELLATIONS. Do not blindly apply clawback logic to every closed booking."*), as to consequences | **Old:** a transfer is not a true cancellation. **New:** its Unit A leg is one. The distinction survives at record level only | As S-18 |
| **S-20** | `PO-AJ1·9` | GC-37 (chunk 249, PO): *"Automatically managed."*, answering *"Does our CRM need to automatically manage this 'Negative CP Ledger' … OR is the Accounts Team expected to manually track these clawbacks outside the system"*; and its Gemini restatements (323; 403–411) | **Old:** BMexa auto-manages a negative CP ledger and auto-deducts from the next deal. **New:** the Builder recovers offline through the NOC, including against future bookings | *"Recovery or adjustment is handled offline by the Builder through the NOC process. This may include recovery or adjustment against the Channel Partner's future bookings."* |

**Not superseded, and why:**
- Spec §26 ¶2 s1 is **DISCHARGED (SATISFIED)**.
- §26 ¶1 s1 and ¶2 s2 are **NARROWED**.
- §26 ¶1 s2 is **CLARIFIED**.
- §26 ¶2 s4 is **LC-24**.
- §33 s1–s2 are **NARROWED**, with the recording limb going to AG-Q-6(i).
- AG-Q-5 and AG-Q-13 are **untouched**. Their reach is AJ-Q-1.

### 4.2 Dispositions of existing issues and contradictions

| ID | Summary | Disposition in 03aj |
|---|---|---|
| **NI-3** | A Booked unit transfer is a cancellation (AG-Q-6(ii)) | **DISCHARGED** (§3.7) |
| **NI-4 / AGX-12** | Offline against *"Automatically managed"*; CP Ledger shape | **DISCHARGED** (§3.3). GC-37 SUPERSEDED (S-20). The ledger-shape residual is record content, inside AG-Q-6(i) |
| NI-5 | Three wordings for the NOC (GC-36; *"forgo"*; *"waive"*) | **Carried.** GC-36 is cited in §7. `PO-AJ1·9`'s *"recovery"* is lexically closer to GC-36 (evidence only) |
| NI-13 | Cancelled-Inventory edge | Unchanged (§3.7) |
| **NI-19** | Cross-project transfer initiator | **NARROWED.** No business residual (§3.7) |
| NI-18 | Site-Head-only against SH-or-PH grants (AC-33) | Unchanged. Stage-2 on the Unit B booking is decided afresh, under whatever AC-33 settles |
| AGX-7, AGX-10, AGX-11, AGX-13 | — | Carried unchanged |

### 4.3 New issues

| NI | Type | Issue | Evidence | Home |
|---|---|---|---|---|
| **NI-22** | Reporting / data model | Every transfer now produces a **genuine** post-Booked cancellation. Cancellation counts, cancellation rates, Channel Partner performance and Site Head performance would count upgrades as cancellations unless reports separate them. Spec §26 ¶2 s2 (NARROWED) survives exactly here: the distinction is the linked record | §3.1; `PO-AJ1·2` | Architecture (G-21). Not a PO question unless the PO wants different metric definitions |
| **NI-23** | Workflow / booking lifecycle | Sequencing of the two legs against V-23's single lead status, and the CRM gate on the Unit A leg (§3.6.5) | `PO-AJ1·5`, `·11`; V-23; AG-Q-12 | AG-Q-6 (architecture follow-through). Interim default at §3.6.5 and §8.2. Layer 2, so the default needs PO sign-off |
| **NI-24** | CP attribution | Whether the Channel Partner on Unit A is attributed to, and earns on, the Unit B booking is **not** a consequence of the linked record (LC-26). It follows the ordinary Channel Partner claim rules: **T-4/T-5** (*"CP claim reach"*) and **AC-53** (*"CP claim across revival"*), both open. If attributed, Unit B is also a *"future booking"* inside the NOC's scope (§3.4) | 03ag lines 680–681; `PO-AJ1·9`; handoff NOC scope | T-4/T-5, AC-53 (existing). **Not counted** |
| **NI-25** | Commission / money | AC-48's open **tranche "paid" boundary** (*"cheque prepared"* against *"credited"*, GC-9) is now the switch, per tranche, between **revocation** (`PO-AJ1·8`) and **offline NOC recovery** (`PO-AJ1·9`). With staged payouts (GC-2, GC-36: *"50% … at 20% and the remaining 50% … at 30%"*), one cancellation or transfer can split: one tranche recovered offline, the other revoked | AC-48; GC-2, 9, 36; `PO-AJ1·8`, `·9` | AC-48 (existing). **Promoted in the queue** (§7.3) |
| **NI-26** | Document hygiene | The AG-Q-6 (i)/(ii) labelling inversion (§3.5.1) | 03ag line 709; 03ah §2.5, Annex A; 03ah §4.1; 03ai | Record only (G-19) |

### 4.4 Contradictions

**No new AGX.**
- `PO-AJ1` against V-23, AG-Q-2, AG-Q-6-a…m, AC-48 and `PO-X1`: consistent. It restates them, or extends them to transfers.
- `PO-AJ1` against AG-Q-13: a **reach** question, not a contradiction. AG-Q-13 was asked about correction, and `PO-AJ1` does not speak about price (AJ-Q-1).
- `PO-AJ1` against Spec §26 and §33: explicit supersession (S-18, S-19), not an unresolved contradiction.
- `PO-AJ1` against GC-37: explicit supersession (S-20).

**Open contradiction register after 03aj:** AGX-7, AGX-10, AGX-11, AGX-13. **AGX-12 is removed.**

### 4.5 Ledger confirmations (new)

**Default until confirmed:** NARROWED — PENDING PO CONFIRMATION.

| ID | Content | Proposed mark |
|---|---|---|
| **LC-24** | Spec §26 ¶2 s4 (*"This is a CFO validation requirement before production financial logic is finalized"*) and §87(5) (*"validate cancellation vs transfer semantics with finance/legal stakeholders"*), against `PO-AJ1` | **NARROWED.** The semantics are PO-decided. Any remaining CFO or finance-legal step validates `PO-AJ1`; it does not re-open the choice. Whether it is still required before production financial logic is the PO's call. §87(5) stays intentionally deferred and **not counted** |
| **LC-25** | The Unit B booking enters the **ordinary new-booking lifecycle**: an initiating Success (AG-Q-12); the payment hold, then the booking hold (AG-Q-1); the project's approval chain (AG-Q-4), including Accounts payment verification; two snapshots (AG-Q-5); Booked → lead Booked (V-23) | **CLARIFIED** (compelled by `PO-AJ1·11`, `·12`, V-23 and AG-Q-12 together). Consequence at §3.6.4 |
| **LC-26** | The linked record carries the two booking identities, actor, reason and time, and the **Builder-determined amount** applied from Unit A to Unit B (recorded, not calculated). It carries **no** commission, incentive, Stage-2 allocation or Booked status | **NARROWED.** The commission, incentive and status limbs are compelled (`PO-AJ1·1`, `·8`, `·11`). The **money** and **Stage-2** limbs are architect readings (L-AJ-1) |
| **LC-27** | The quantum and duration of recovery under a NOC (how much is taken from each future booking, and until when) are the **Builder's offline determination**, as refund and forfeiture are (S-16) | **NARROWED.** `PO-AJ1·9` makes the Builder the actor, but does not say "determines the amount" for the NOC as explicitly as `PO-AJ1·7` does for the refund. If the PO rejects LC-27, the handoff's original *"What exactly does the NOC waive"* limb revives inside AG-Q-6(i) |

---

## 5. Cluster count

### 5.1 Method (03ah §3.1, unchanged) and homing decisions

- **Unit of count:** the unique cluster. New clusters are counted only where the ambiguity has no home in an existing cluster. Contradictions, issues and ledger items are not clusters.
- **AJ-Q-1 is homed in AG-Q-6.** Its candidate homes:

| Candidate home | Status of home | Fit | Effect on count |
|---|---|---|---|
| **AG-Q-6** (post-Booked cancellation / **unit transfer** / NOC) | **PARTIAL** (limb (i) open) | The ambiguity arises from AG-Q-6-k's representation, now emphasised by `PO-AJ1·12` (*"new booking"*). The cluster's subject explicitly includes *"UNIT TRANSFER"* (handoff heading, line 721) | 0 |
| AG-Q-13 (pricing basis on unit change) | **Fully resolved.** Its question, about correction, was answered | Topical, but homing here would re-open a resolved cluster | +1 (AG-Q-13: resolved → partial) |
| A new cluster | — | The 03ag precedent: AG-Q-5 was fully resolved, so the re-pricing basis it exposed became the **new** cluster AG-Q-13 (03ag line 1166) | +1 |

  The 03ag precedent applied because **AG-Q-5 had no open limb left to home it in**. AG-Q-6 does: (i) is open. So the method's rule ("counted only where the ambiguity has no home") points to AG-Q-6. The +1 alternatives are recorded as the stricter figure (§5.6).
- **AGX-12** is discharged. It was a contradiction, not a cluster, and counted "Inside AG-Q-6".
- **NI-3** is discharged. It was an issue, not a cluster.
- **LC-24…LC-27** are ledger items. **NI-22…NI-26** are issues.

### 5.2 Status changes

| Cluster | 03ai | 03aj | Why |
|---|---|---|---|
| AG-Q-6 | PARTIAL: (i) NOC open; (ii) transfer consequences open; AGX-12 attached | **PARTIAL**: (ii) **answered** (`PO-AJ1`); AGX-12 **discharged**; (i) open (reframed); **AJ-Q-1** open (homed) | A limb closed and an attached contradiction discharged. The cluster stays partial because of (i), and now also AJ-Q-1 |
| AG-Q-13 | Fully resolved | **Fully resolved** (unchanged) | Its question was about correction. Its reach to Unit B is AJ-Q-1, homed in AG-Q-6 |
| AC-48 | PARTIAL | **PARTIAL** (unchanged); residual now **load-bearing** (NI-25) | — |
| Every other cluster | — | Unchanged | §3.7; §5.5 |

### 5.3 Reconciled figures

> **BMexa Audit Progress: AD-01AG (reconciled in 03ah; updated in 03ai and 03aj, 2026-09-28)**
>
> **Original baseline:** 76
>
> **Fully resolved:** **20** (14 baseline + 6 new: AG-Q-12, 13, 14, 15, 17, 18). Unchanged.
>
> **Partially resolved:** **9** (8 baseline: AG-Q-6, AG-Q-10, AC-48, V-4, repo AC-58, W-1, W-4, V-10; plus 1 new: AG-Q-11). Unchanged in number. AG-Q-6's limb (ii) is now answered, AGX-12 is discharged, and AJ-Q-1 is homed in AG-Q-6.
>
> **Untouched:** **54** (52 untouched + 2 touched-not-answered: AC-50, N-2). Unchanged.
>
> **Newly opened:** **9** (8 from 03ag, AG-Q-11…18; 1 from 03ah, AH-Q-1). Of these, 6 are resolved, 1 is partial (AG-Q-11) and 2 are open (AG-Q-16, AH-Q-1). **No new cluster is added in 03aj.**
>
> **Current open minimum:** **65** (verified minimum). Unchanged.

### 5.4 Arithmetic

| Check | Computation |
|---|---|
| Baseline integrity | 14 fully resolved + 8 partial + 54 untouched = **76** (matches) |
| New clusters | 6 resolved + 1 partial (AG-Q-11) + 2 open (AG-Q-16, AH-Q-1) = **9** (matches) |
| Unresolved minimum | 8 baseline partial + 54 untouched + 3 unresolved new (AG-Q-11, AG-Q-16, AH-Q-1) = **65** |
| Fully resolved (all) | 14 + 6 = **20** |

### 5.5 Reconciling against 03ai's 65

| Movement | Effect on the minimum |
|---|---|
| AG-Q-6(ii) answered by `PO-AJ1` | 0. AG-Q-6 stays partial because (i) is open |
| AGX-12 discharged (S-20) | 0 (a contradiction, counted "Inside AG-Q-6") |
| NI-3, NI-4 discharged; NI-19 narrowed | 0 (issues) |
| AJ-Q-1 opened | 0. Homed inside AG-Q-6 (§5.1) |
| LC-24…LC-27; NI-22…NI-26 | 0 (ledger; issues) |
| **Net** | **65 → 65** |

**Why the figure does not fall although a question was answered.** AG-Q-6 was counted once, as partial, because it had open limbs (i) and (ii). Answering (ii) alone cannot close it while (i) is open. And the answer exposes one narrower residual (AJ-Q-1) that belongs in the same cluster. For AG-Q-6 to leave the count, **both** AG-Q-6(i) and AJ-Q-1 must be answered.

### 5.6 Why 65 is only a minimum

- 03ah §6.4's three reasons, and 03ai §5.6's, carry over.
- One of 03ah §6.4's examples of a partial-to-new judgement, *"NI-3 inside AG-Q-6"*, **no longer applies** (NI-3 is discharged). **AJ-Q-1 inside AG-Q-6** takes its place.
- **The new judgements taken here:**
  - Counting AJ-Q-1 as its own cluster (the 03ag AG-Q-13 precedent), or re-opening AG-Q-13, gives **66**.
  - Adding 03ai's stricter alternative (AI-Q-1 and AI-Q-2 each counted) gives **68**.
  - This document adopts **65**, because AJ-Q-1 has a home in a cluster that is still partial.
- `M-9` (commission model, unbanded) is narrowed by `PO-AJ1·9` but **remains excluded and un-de-duplicated**.
- **No exact global total is claimed.**

---

## 6. Architecture Readiness

**The architecture is NOT complete.**
- No domain has a designed data model, security model or tests.
- "Conditionally yes" means design work may start on the parts no open PO question reaches. It is subject to the PO's approval of this document (and of 03ah and 03ai), to the phase gates, and to Layer-2 sign-off for booking lifecycle, financial logic and CP commission logic.
- Changes from 03ai are marked **(changed)**.

| Domain | Business rules resolved | Remaining blockers | Data Model can proceed? | Security can proceed? | PO questions still blocking |
|---|---|---|---|---|---|
| **Hold / Booking / Unit** | AG-Q-1, AG-Q-2 (AGX-8), AG-Q-5, AG-Q-12, AG-Q-13, V-23, AD-G-1, AD-G-5; AG-Q-6 initiators, no approval, CRM processing, unit Cancelled, separate resale release, refund record-only, booking record Cancelled, transfer representation; `PO-AI1` principals; **AG-Q-6(ii): the Unit A leg of a Booked transfer is an ordinary post-Booked cancellation with all consequences (`PO-AJ1`) (changed)** | **AJ-Q-1 (Unit B price-list and discount basis) (changed)**; **NI-23 (sequencing of the two legs) (changed)**; **LC-25, LC-26 (Unit B lifecycle; linked-record content) (changed)**; NI-13 (Cancelled-Inventory edge only); NI-14; LC-14…LC-17; AC-50; LC-23 / AI-Q-2; NI-17 | **Conditionally yes** for the hold machine, the pre-Booked booking machine, the project-role grant model, **and the post-Booked cancellation edge, including the Unit A leg of a transfer and the existence and two-way linkage of the transfer/adjustment record (changed)**. **No** only for Unit B's commercial basis (which price-list version it references; discount carry-over), until AJ-Q-1. The **shape** is the same under either answer; the rule is not | **Conditionally yes** (unchanged). The Unit A leg's principal is `SH@P_A ∨ PH@P_A` (03ai §3.5 row 5). NI-19 has no business residual left **(changed)** | **AJ-Q-1 (changed from AG-Q-6(ii))** |
| **Approval Workflow** | AG-Q-3, AG-Q-4, AG-Q-7, AG-Q-8, AG-Q-9, AG-Q-14, AG-Q-17, AG-Q-18; the Approval Exception and default-L1 principals via `PO-AI1`; **the Unit A leg needs no approval (`PO-AJ1·4`) (changed)** | Department membership (NI-2); self-approval (AH-Q-1 / AGX-13); AG-Q-10; NI-7; default L1 with several Site Heads (AI-Q-2); **LC-25 (the Unit B booking runs the full chain) (changed)** | **Conditionally yes** (unchanged) | **No** (unchanged). Eligibility still depends on AG-Q-11(f) and AH-Q-1 | AG-Q-11(f), AH-Q-1, AG-Q-10 |
| **Lead / Follow-up / FR** | AC-57, AC-55 (X-42, X-43), V-23 statuses, AG-Q-12 ordering, repo AC-58 (most), V-4 FR limbs; **V-23's transfer pointer closed: the lead moves to Booking Cancelled on the Unit A leg (`PO-AJ1·11`) (changed)** | V-4 FUT; W-1; W-4; AC-58 (a) and (b); AG-Q-16; carried families; LC-22; AI-Q-1 (PH → PH only); **NI-23 / LC-25 (Booked → Booking Cancelled → Booking in Progress → Booked for a transferring customer) (changed)** | **Partially** (unchanged). The activity stream, follow-up terminal states and owner/handler can proceed. **FR/FUT metric definitions cannot** | **Conditionally yes** (unchanged) | V-4 (FUT), W-1, W-4, AC-58, AG-Q-16; AI-Q-1 (for the exception only) |
| **Transfer / Visibility / Security** | AC-51, AC-54, AC-56, AG-Q-9, AG-Q-15, AG-Q-18; the AC-54 unavailability principal and the `PO-AE1·O.1` "team" via LC-22 | V-10 residual; AG-Q-10; NI-11; NI-12; LC-22; AI-Q-2 (the AC-51-e′ trigger). *(A unit transfer is not a customer transfer. `PO-AJ1` does not reach this domain.)* | **Yes, conditionally** (unchanged) | **No** (unchanged) | V-10, AG-Q-10 |
| **CP / Commission** | AD-G-2; AC-48 (before payment, unpaid-only, non-claimant); `PO-X1`; AG-Q-6 revocation, paid offline, refund deduction, NOC scope; Stage-2 and step-7 principals via `PO-AI1`; **the transfer case inherits revocation of unpaid commission and incentives, and offline NOC recovery of paid commission (`PO-AJ1·8`, `·9`; S-18, S-19) (changed)**; **recovery of paid commission, including against future bookings, is offline and performed by the Builder: GC-37 superseded, AGX-12 discharged (S-20) (changed)** | **AG-Q-6(i): what BMexa holds about an offline NOC recovery (reframed) (changed)**; **AC-48 tranche "paid", now the switch between revocation and offline recovery (NI-25) (changed)**; AC-53; T-4/T-5, **which now also decide whether the Channel Partner earns on the Unit B booking (NI-24) (changed)**; **LC-24 (CFO / finance-legal validation of `PO-AJ1`); LC-26 (Stage-2 does not carry to Unit B); LC-27 (NOC quantum is Builder-determined) (changed)**; §87(6) deferred; NI-18 (Project Head and Stage-2: AC-33, unbanded) | **No** (unchanged). **The reason is narrowed (changed):** a system-managed running CP account with automatic clawback is excluded, and recovery of paid commission is offline. What stays undecided: whether BMexa keeps any CP-level record of a NOC and the amounts recovered under it (AG-Q-6(i)); which payment act makes a tranche "paid" (AC-48); and who the Channel Partner on a booking is (AC-53, T-4/T-5) | **No** (unchanged). Nothing is designed to secure yet | **AG-Q-6(i), AC-48, AC-53, T-4/T-5 (changed: AG-Q-6(ii) removed)** |
| **Audit** | ACG-1…ACG-9 (locked, not re-asked); AG-Q-18 | AGX-10; AGX-11; NI-9; the four built `audit_events` collisions; ACG-INV-1…15; ACG-5 via LC-22; role-grant changes (NI-20); **the Unit A leg, the Unit B booking and the linked record are auditable acts (Spec §25: actor, reason, time) (changed)** | **Analysis only** (unchanged) | **No** (unchanged) | None as business questions |

**Why CP / Commission is not upgraded.** 03ah and 03ai gave one reason for "No": *"the shape of the CP Ledger (per-booking or a running account with a recoverable balance) is undecided."* That fork is **half closed**: the system-managed running account is gone. But three independent blockers remain, and each governs data the ledger must hold:
- **AC-48.** Whether a tranche is paid at "cheque prepared" or at "credited" decides, per tranche, whether `PO-AJ1·8` (revoke) or `·9` (offline recovery) applies.
- **AC-53 and T-4/T-5.** These decide who the Channel Partner on a booking is, including on Unit B. 03ag listed them as blocking the CP data model from the start (03ag lines 138, 680–681).
- **AG-Q-6(i).** It decides whether a CP-level NOC record exists at all.

Nothing in the new evidence supports upgrading the rating.

---

## 7. Next PO Question

### 7.1 Does 03ai's queue still hold? The candidates re-checked

03ai §7.5 queued, after AG-Q-6(ii): **AG-Q-6(i)** → **AGX-12** → AG-Q-11(f) → AH-Q-1 → AI-Q-2 → AI-Q-1 → AG-Q-10 → AC-48 → the rest. The test used is 03ah §8.2's criteria, plus 03ai's: **does a safe interim default exist that is cheap to reverse?**

| Candidate | Upstream of | Domains it blocks | Safe interim default? | Changed by `PO-AJ1`? | Rank |
|---|---|---|---|---|---|
| **AG-Q-6(i)**: what BMexa holds about an offline NOC recovery | The CP Ledger's remaining shape question (whether a CP-level record exists); every commission-payable display on a Channel Partner's future bookings (Spec §34) | CP/Commission (Data Model) | **Weak.** "Record nothing" risks Spec §34 and §35 and R-AJ-5. Any recording choice is CP commission logic (§88) and needs the PO anyway. A per-booking record-only field is additive, but it presumes an answer | **Yes, and its load increased.** Every post-Booked cancellation **and every transfer** with paid commission now routes to "the NOC process" (`PO-AJ1·9`). Its mechanism is fixed, so the question is cleaner. An earlier PO answer (GC-36) must be confirmed or replaced (working rule 15; NI-5) | **1** |
| ~~AGX-12~~ | — | — | — | **Discharged** (§3.3) | **Removed** |
| **AC-48**: tranche "paid" boundary | Per-tranche revoke-or-recover routing (NI-25); Stage-2 change and revocation cut-off | CP/Commission | **Yes.** Record each payment act separately (cheque prepared; credited). Treat any tranche past "cheque prepared" as paid for cancellation routing. That is fail-safe: BMexa never auto-revokes money that may have left, and the Builder handles it offline | **Yes: promoted.** Before `PO-AJ1` it gated only Stage-2 changes. Now it also routes every cancellation's and every transfer's commission | **2** (was 9) |
| **AJ-Q-1**: Unit B price-list and discount basis | Unit B's price-list reference | Hold/Booking/Unit (commercial basis only) | **Yes** (§3.6.3): ordinary new-booking pricing, with any concession through discount approval | New | **3** |
| AG-Q-11(f): Sales Support / Helpdesk placement | AG-Q-3 replacement eligibility | Approval security, **jointly with AH-Q-1** | Yes (03ah §7) | No | 4 |
| AH-Q-1: self-approval | Approval security | Approval | Needs source verification of §B.19 first | No | 5 |
| AI-Q-2: role cardinality and succession | Default L1; the AC-51-e′ trigger | None outright | Yes | No | 6 |
| AI-Q-1: the PH → PH anchor | One transfer exception | — | Yes (fail-closed) | No | 7 |

**Conclusion.** **AG-Q-6(i) holds as next.** Three changes to the queue:
- **AGX-12 drops off entirely.** It is discharged, not "asked next".
- **AC-48 is promoted from #9 to #2.** `PO-AJ1` made its paid boundary the routing switch for every cancellation and transfer. It still ranks below AG-Q-6(i), because it has a clean fail-safe default and AG-Q-6(i) does not.
- **AJ-Q-1 is inserted at #3.** It is new, and it has a safe default.

AJ-Q-1 was considered for #1, because it has no locked answer and is financial logic. It was not chosen, for two reasons:
- Its interim default is safe and cheap to reverse (§3.6.3).
- It blocks only the rule for one edge, not a data shape.

### 7.2 The question (exactly one)

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

### 7.3 Readings the evidence allows (neutral; none preferred)

| Option | Evidence for it | Effect |
|---|---|---|
| (A) NOC only | `PO-AJ1·9` (*"handled offline by the Builder"*); GC-37's alternative (*"manually track these clawbacks outside the system"*) is now the chosen branch | Per-booking commission records carry no adjustment. **Spec §34 exposure:** a later booking's commission payable in BMexa may disagree with what the Builder actually pays (R-AJ-5) |
| (B) NOC plus recorded per-booking recoveries | The PO's record-only pattern (`PO-AJ1·7`, S-16); Spec §34, §35 | Each commission record gains a Builder-entered adjustment, linked to the NOC. No CP-level balance is computed |
| (C) As (B), plus the outstanding amount per NOC | GC-36 (*"deduct that commission from his future revenue"*, a set-off until recovered); Spec §33 s1 (*"the CP ledger may become negative"*); the CFO persona's warning (R-AJ-5) | A CP-level NOC record with a running total of **recorded** amounts, not a calculated clawback. It confirms GC-36's set-off meaning and discharges NI-5 |

### 7.4 Why this question satisfies the criteria

| Criterion | Assessment |
|---|---|
| Genuinely unresolved | The handoff's *"REMAINING OPEN AG-Q-6 QUESTION"*. `PO-AJ1` fixes the mechanism and the actor, but not what BMexa holds (§3.4) |
| Not already answered | Scope (locked), mechanism (`PO-AJ1·9`) and trigger population (`PO-AJ1·1`) are **not** re-asked. Options (A)–(C) all respect *"handled offline by the Builder"* |
| An earlier answer is cited | GC-36 is quoted in the question (working rule 15; NI-5; 03ah §8.3) |
| Upstream | It is the last open determinant of the CP Ledger's shape that belongs to AG-Q-6. It is also what the commission-payable display on every future booking depends on |
| Preserves terminology | Channel Partner, NOC, already-paid commission, Builder, commission payable, cancelled booking, unit transfer |
| One clear decision | One choice among A, B and C. It does not bundle the tranche "paid" boundary (AC-48, queued #2), Unit B pricing (AJ-Q-1, #3), Channel Partner attribution to Unit B (NI-24 → T-4/T-5, AC-53), or the NOC quantum (LC-27, which the question presumes and does not ask) |

**If the PO rejects LC-27** (that is, says BMexa must apply a defined NOC quantum rather than record the Builder's), the handoff's original quantum limb (*"What exactly does the NOC waive on each future booking?"*) revives as the next question inside AG-Q-6(i).

### 7.5 Updated residual queue (not asked; for sequencing only)

| # | Item | Note |
|---|---|---|
| — | ~~AG-Q-11(a)~~ | Answered (`PO-AI1`) |
| — | ~~AG-Q-6(ii)~~ | **Answered** (`PO-AJ1`) |
| — | ~~AGX-12~~ | **Discharged** (S-20) |
| 1 | AG-Q-6(i): what BMexa holds about an offline NOC recovery | **Asked** (§7.2) |
| 2 | AC-48: the tranche "paid" boundary | **Promoted** from #9 (NI-25) |
| 3 | **AJ-Q-1**: Unit B price-list and discount basis | **NEW.** Safe interim default |
| 4 | AG-Q-11(f): Sales Support / Helpdesk placement | — |
| 5 | AH-Q-1: self-approval | After source verification of §B.19 |
| 6 | AI-Q-2: role cardinality and succession | — |
| 7 | AI-Q-1: PH → PH anchor | After AI-Q-2 |
| 8 | AG-Q-10: reassignment history | — |
| 9 | V-10 residual | — |
| 10 | Repo AC-58 (a), (b) | — |
| 11 | V-4 FUT | — |
| 12 | W-1 | — |
| 13 | W-4 | — |
| 14 | AG-Q-16 | — |
| 15 | Carried families (including AC-53, T-4/T-5, which NI-24 now makes relevant to transfers) | — |

**Separate record-keeping items** (not business questions):
- AGX-10, AGX-11 ledgers; AGX-7 range reservation;
- LC-1…LC-27 (LC-24…LC-27 new);
- the NI-23 sequencing default and LC-25 / LC-26, which are candidates for one PO confirmation pass alongside LC-22 and LC-23.

---

## 8. Design direction for downstream implementers

**`ARCHITECT RECOMMENDATION — NOT APPROVED`**

This section is written so that a Sonnet-tier implementer does not have to re-derive the reasoning. **It does not authorize implementation.** Booking lifecycle, financial logic and CP commission logic are Layer-2 items (Master Spec §88; CLAUDE.md "Subagent Model Routing"). They require the project owner's explicit sign-off of this document first.

### 8.1 One cancellation path, not two

- The Unit A leg uses the **same** post-Booked cancellation operation as any genuine post-Booked cancellation:
  - initiator `SH@P_A ∨ PH@P_A`;
  - no approval;
  - CRM processing gated on formalities and financial information;
  - unit → Cancelled; booking → Cancelled; lead → Booking Cancelled;
  - unpaid commission and incentives revoked;
  - paid commission flagged for offline Builder handling;
  - Builder-determined refund or forfeiture recorded.
- **Do not** add a `reason = transfer` flag, a `suppress_clawback` switch, or any branch that changes a consequence for transfers. That is the red-team fix the PO declined (S-18, S-19). Building it would re-introduce superseded behaviour (R-AJ-2).
- The **only** difference a transfer makes to the Unit A booking is that a linked record points at it.

### 8.2 The three records and their order

1. **Unit A leg.** An ordinary post-Booked cancellation (§8.1).
2. **Unit B booking.** An ordinary new booking (LC-25): initiating Success → payment hold → booking hold → the project P_B's approval chain → Accounts verification → Booked.
   - **Interim (NI-23):** initiation is permitted only after the Unit A leg is **processed** by CRM.
   - **Interim (AJ-Q-1):** price at the price-list version current at Unit B's submission. Any concession goes through discount approval.
3. **Linked record** (LC-26). It references both bookings and carries actor, reason and time. It carries the Builder-determined amount applied from Unit A to Unit B, as an adjustment. **Never** move, edit or delete a Unit A receipt (Spec §28, §29). It carries **no** commission, incentive, Stage-2 or status.
   - It should be creatable when the Unit B booking is initiated, referencing the already-cancelled Unit A booking.
   - Which department records the money amount (CRM or Accounts) follows whoever records the refund or forfeiture amount today. It is not decided here.

### 8.3 Reporting (NI-22)

Any metric that counts post-Booked cancellations (cancellation rate; Channel Partner, Site Head or Project Head performance) must be able to split them into:
- **cancellations with an outgoing linked record** (transfers);
- **cancellations without one** (genuine).

This is the surviving part of Spec §26 ¶2 s2. The PO has not asked for different metric definitions. Expose the split; do not decide the definitions.

### 8.4 Commission records (interim, pending AG-Q-6(i) and AC-48)

- **Per-booking** commission records, at **tranche** granularity. Record each payment act separately: cheque prepared at, credited at, paid by.
- On cancellation, route each tranche:
  - unpaid → revoked;
  - paid → "offline recovery: Builder".
  - Interim: any tranche past cheque-prepared counts as paid (NI-25).
- **No** automatic negative balance, offset or deduction anywhere (S-20).
- Leave room for AG-Q-6(i) options (B) and (C): a NOC entity and per-booking Builder-entered adjustments are **additive**. Do not build them before the answer.

### 8.5 Acceptance tests (for the eventual suite; written only after approval)

| Test | Expected |
|---|---|
| Transfer Unit A → B; Unit A's commission is unpaid | Unit A's commission and incentives **revoked**; lead → Booking Cancelled; Unit A booking Cancelled; unit Cancelled (not Available) |
| Same, commission fully paid | No revocation of paid tranches; each flagged "offline recovery: Builder"; **no** automatic deduction on any other booking |
| Same, one tranche paid and one unpaid | Paid tranche flagged offline; unpaid tranche revoked |
| Transfer while any code path would skip consequences because a linked record exists | **Fails** (R-AJ-2 guard) |
| Unit B initiated before CRM processed the Unit A leg | **Refused** (interim, NI-23) |
| Unit B priced | Price-list version current at Unit B's submission; old-price concession requires discount approval (interim, AJ-Q-1) |
| Cancellation report | Transfers and genuine cancellations separable via the linked record |
| Unit A released for resale | Only by `SH@P_A ∨ PH@P_A`, separately (`PO-AJ1·6`) |

---

## Annex A — Risk register (delta to 03ah Annex F and 03ai Annex A)

| ID | Risk | Likelihood / impact | Status |
|---|---|---|---|
| **R-AH-1** | A unit upgrade penalises the CP and flips the customer to Booking Cancelled | — | **RE-CLASSIFIED** (§3.7). It is now the PO-chosen rule. Its business consequence is R-AJ-1 |
| R-AH-2 | The NOC is implemented on a meaning the PO never confirmed | Medium / High | **Carried; narrowed.** The mechanism is now fixed (offline, Builder). What remains is record content (AG-Q-6(i)) and quantum (LC-27) |
| R-AH-3 | The CP Ledger is built per booking only, and then AGX-12 is resolved toward a running recoverable balance | **Medium / Medium** (was Medium / High) | **Lowered.** A system-managed running balance is excluded (S-20). A record-only CP-level record would be additive |
| **R-AJ-1** (NEW) | **Business consequence accepted by the PO.** Channel Partners lose unpaid commission and incentives when their customer upgrades, so they may discourage upgrades or dispute revocations | Medium / Medium (commercial; CP relations) | Owner: **PO**, not architecture. Visible in S-18; LC-24 (finance-legal validation) |
| **R-AJ-2** (NEW) | An implementer builds the red-team "Reason = Transfer / bypass clawback" flag anyway, because Spec §26 and §33 still say so until G-18 edits them | **High / High** | G-18 (Spec edit); §8.1; §8.5 guard test |
| **R-AJ-3** (NEW) | A transferring customer's Unit B is taken by another buyer while the Unit A leg awaits CRM processing (NI-23 interim) | Medium / Medium | NI-23 → PO confirmation; any earlier-hold rule is LC-14 territory and must be decided |
| **R-AJ-4** (NEW) | Cancellation metrics are inflated by upgrades | Medium / Low | NI-22; §8.3 |
| **R-AJ-5** (NEW) | Offline NOC recovery is lost track of (the CFO persona: *"the builder will eventually lose track of money owed by brokers"*), or BMexa's displayed commission payable disagrees with what is paid (Spec §34) | Medium / High (financial leakage) | AG-Q-6(i) (§7) |
| **R-AJ-6** (NEW) | The AJ-Q-1 interim default (current price list) is read as a PO rule | Low / Medium | AJ-Q-1 in the queue at #3; §3.6.3 |

**Dependency spine (delta).**
- `AG-Q-6(ii)` is **satisfied**. The post-Booked cancellation edge is uniform for transfers.
- `AGX-12` is **discharged**.
- `AG-Q-6(i)` → whether a CP-level NOC record exists; per-booking adjustment fields.
- `AC-48` → per-tranche revoke-or-recover routing.
- `AJ-Q-1` → Unit B's price-list reference rule.
- `T-4/T-5`, `AC-53` → Channel Partner attribution on Unit B.
- `LC-24` → whether finance-legal validation gates production financial logic.

---

## Annex B — Architecture change register (named, not made; delta to 03ah Annex G and 03ai Annex B)

| # | Artifact | Change needed | Class | Gated on |
|---|---|---|---|---|
| **G-5** (updated) | `docs/BMEXA_MASTER_SPEC.md` §26, §33 | **Its hold is released.** Replaced by G-18 | — | — |
| **G-18** (NEW) | `docs/BMEXA_MASTER_SPEC.md` §26, §33 | §26:<br>- Replace ¶1 s3 and ¶2 s3 with the `PO-AJ1` rule: the Unit A leg is an ordinary post-Booked cancellation with all consequences, and Unit B is a new booking with a linked transfer/adjustment record.<br>- Restate ¶2 s2 as a record-level distinction.<br>- Mark ¶2 s1 as satisfied.<br>- Keep or retire ¶2 s4 per LC-24.<br><br>§33: replace s3–s4 correspondingly; restate s1–s2 per `PO-AJ1·9` (offline, Builder, NOC) | PO (S-18, S-19) | PO approval of this document; LC-24 |
| **G-19** (NEW) | `03ag`, `03ah`, `03ai` | Status notes:<br>- AG-Q-6(ii) answered by `PO-AJ1`;<br>- NI-3 and NI-4 discharged; AGX-12 discharged; GC-37 superseded (S-20);<br>- R-AH-1 re-classified; R-AH-3 lowered; NI-19 narrowed;<br>- the AG-Q-6 (i)/(ii) labelling inversion corrected (03ag line 709; 03ah §2.5 lines 341–342; 03ah Annex A rows AG-Q-6-k and AG-Q-6-m) | Record | PO approval of 03ah, 03ai and 03aj |
| **G-20** (NEW) | Future booking, cancellation and commission data model | Uniform post-Booked cancellation operation; linked record (LC-26); tranche-level payment acts; no automatic offset (§8.1, §8.2, §8.4) | ARCH | PO approval; Layer-2 sign-off; phase gates; AJ-Q-1, AG-Q-6(i), AC-48 for the parts they reach |
| **G-21** (NEW) | Future reporting definitions | Transfer-cancellation split (NI-22; §8.3) | ARCH | As G-20 |
| **G-22** (NEW) | Future test suite | §8.5 cases, including the R-AJ-2 guard | ARCH (test-writer) | As G-20 |

---

## Annex C — Final validation

| Check | Result |
|---|---|
| The PO answer recorded verbatim and kept distinct from architect readings | Yes. §2.1 is verbatim. §2.2 quotes each limb. LC-25…LC-27 and §8 are labelled as architect readings or recommendations |
| The Spec §26 supersession recorded explicitly, with exact text and scope | Yes (§3.1). Lines 223–227 are quoted in full, with a sentence-by-sentence disposition. S-18 covers ¶1 s3 and ¶2 s3; the other five sentences are dispositioned separately. §33 is handled the same way (S-19) |
| AGX-12 checked against the exact corpus question and answer | Yes (§3.3). The CFO persona's binary (L22963–23001) and the PO's *"Automatically managed."* (L23002) were verified. **DISCHARGED**; GC-37 **SUPERSEDED** (S-20) |
| AG-Q-6(i) confirmed open and not conflated with (ii) | Yes (§3.4). Mechanism, trigger population and wording evidence are narrowed. Quantum → LC-27. Record content is the open core |
| AG-Q-6 limbs checked for a forgotten third item | Yes (§3.5.2). AGX-12 was the attached third item, and it is discharged. AJ-Q-1 is newly homed. The (i)/(ii) labelling inversion is recorded (§3.5.1) |
| Unit B pricing checked against AG-Q-5 and AG-Q-13 at their exact scope | Yes (§3.6.1). Not answered anywhere → AJ-Q-1, with no answer invented. A safe interim default is stated |
| CP/Commission readiness not upgraded without evidence | Yes (§6). It stays No, with the reason narrowed |
| Counts at cluster level, and no exact total claimed | Yes (§5). 65 is a verified minimum; the stricter alternatives 66 and 68 are stated |
| Exactly one PO question; queue re-checked, not assumed | Yes (§7). AGX-12 removed; AC-48 promoted; AJ-Q-1 inserted |
| Nothing already locked is re-asked | Yes. §7.2 respects scope, mechanism and trigger population |
| No implementation claimed; Layer-2 gating stated | "How to read"; §8 header; Annex B |
| Earlier-document errors reported, not silently fixed | §3.5.1 (the labelling inversion); §3.7 (R-AH-1 re-classification) |
| Files changed | This file only |

**This reconciliation is PROPOSED — NOT APPROVED.**
