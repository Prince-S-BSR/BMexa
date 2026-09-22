STATUS: PROPOSED — NOT APPROVED

# AD-01AF — MANAGEMENT AUTHORITY IS BOUND TO THE REPORTING TREE AND STRIPPED OF TASK/FOLLOW-UP CONTROL; THE SALES ACTIVITY BECOMES A **COMMUNICATION TYPE × ACTIVITY OUTCOME** PAIR THAT IS **APPEND-ONLY AND UNCORRECTABLE IN PLACE**; AND `First Response` IS PROMOTED FROM A **FORBIDDEN STORED DERIVATION** TO A **RECORDED SYSTEM MILESTONE** WITH PER-CYCLE INTERVALS — WHICH SUPERSEDES AD-01F §7.2's CLASS 8 PROHIBITION AND AD-01A §3.6's DERIVATION RULE IN ITS REACH, SUPERSEDES CONSOLIDATED §11's *"scheduled time has passed"* DEFINITION OF `Overdue` BY A CALENDAR-DAY RULE, AND COLLIDES IN **FIVE** PLACES WITH RULES THE OWNER LOCKED HOURS EARLIER IN `PO-AE1` — THE SHARPEST BEING THAT **THE PRESCRIBED CORRECTION MECHANISM IS DISABLED BY THE VERY ACT IT EXISTS TO CORRECT**, AND THAT **THE NEW MILESTONE SERIES IS ITSELF AN *INDICATION* OF THE HISTORY `PO-AE1·L.3` FORBIDS INDICATING**

**What this document is.**
⟦PRODUCT-OWNER DECISION⟧ The Product Owner has supplied a decision set covering **management
authority**, the **sales activity model**, **activity immutability**, **First Response**, **response
cycles**, the **activity timeline**, **follow-up date buckets**, **follow-up notifications** and
**follow-up fulfilment**, together with two express **reaffirmation lists** — one for the
customer-centric `Inquiry` rules locked at `PO-AE1`, one for the CP / registration / commission rules
locked across `PO-N1 … PO-AB5`. It is recorded below, verbatim and unabridged, as **`PO-AF1`**.

⚠ ⟦ARCHITECT ANALYSIS⟧ **THE GOVERNANCE TEST IS RUN FIRST, BEFORE ANY ANALYSIS, EXACTLY AS AD-01AE
RAN IT, BECAUSE GETTING IT WRONG WOULD MAKE EVERYTHING BELOW ILLEGITIMATE.**

| Question | Answer |
|---|---|
| **Does `PO-AF1` contain a CONTRADICTION BETWEEN TWO PRODUCT-OWNER STATEMENTS, neither posed as an update to the other?** | ⚠ **YES — IN FIVE PLACES, AND EVERY ONE OF THEM IS AGAINST `PO-AE1`, NOT AGAINST ITSELF.** **`PO-AF1` is internally coherent on its own subjects. **Its collisions are with clauses the owner locked in the IMMEDIATELY PRECEDING decision set** — [§6](#6-contradicted-decisions) |
| **Is any of those five a STOP-AND-ASK?** | ⚠ **ALL FIVE ARE, AND ALL FIVE ARE STOPPED AT RATHER THAN RESOLVED.** **The owner's own instruction governs: *"If you find a contradiction, STOP and identify it rather than choosing an interpretation."* ⚠ **NOT ONE INTERPRETATION IS SELECTED ANYWHERE BELOW** |
| **Does `PO-AF1` EXPRESSLY supersede anything?** | ⚠ **YES — ONE THING, BY NAME.** ***"All previous discussion about 'manager-created management tasks', manager task assignment, task escalation, task reassignment, task completion, etc. is SUPERSEDED and must not remain as an active product rule."* **THE ARCHITECT'S JOB IS THEN TO FIND WHAT THAT SENTENCE REACHES, AND [§5.2](#52-the-manager-task-hunt-run-to-exhaustion-across-thirty-six-files) RUNS THAT HUNT TO EXHAUSTION** |
| **Is any prior document EDITED?** | ⚠ **NO. NOT ONE. **`03` THROUGH `03ae` ARE UNTOUCHED.** **This document is where the new authoritative statement lives — the series' standing convention, honoured for the twenty-fifth time** |
| **Was any prior document WRONG?** | ⚠ **NO, AND SAYING SO WOULD BE FALSE IN EVERY CASE BELOW.** **Each recorded what was true when it was written. ⚠ **A SUPERSESSION IS NOT A CORRECTION OF AN ERROR — `PF-405`, carried from AD-01AE** |

**The owner's standing process instruction, carried forward because it governs this document too.**
⟦PRODUCT-OWNER DECISION⟧ ***"Do not accelerate anything in entire Application, keep auditing keep
asking questions."*** ⟦ARCHITECT ANALYSIS⟧ **Honoured concretely: five `AC-` questions are raised
rather than answered and nine candidates are refused; five contradictions are minted and NONE is
discharged; ten amendments are named and NONE is made; the constraint-necessity test is run and
**FAILS**, so `C-XXVII` IS NOT MINTED; the Audit Completeness Gate is NOT opened; no schema, policy,
endpoint, metric, formula, SLA, notification cadence or UI is proposed anywhere; and
[§18](#18-final-reconciliation-status) does not claim a reconciliation the evidence does not support.**

---

## What this document's headline findings are, and there are nine

⚠ **FIRST — THE MANAGER-TASK SUPERSESSION IS REAL, AND ITS EXTENT IS **SMALLER AND SHARPER** THAN THE
OWNER'S SENTENCE IMPLIES, WHICH IS REPORTED HONESTLY RATHER THAN INFLATED.**
⚠ **THE WORD *TASK* APPEARS IN THE `BMEXA_MASTER_SPEC.md` **ZERO TIMES**, VERIFIED BY EXHAUSTIVE GREP.**
**Across thirty-six architecture files, *task* is used almost exclusively to mean *the architect's task
brief*. ⚠ **THERE ARE EXACTLY THREE PLACES WHERE THE CORPUS CARRIES A CUSTOMER-SCOPED OBLIGATION THAT A
NON-OWNER COULD CREATE, AND THE OWNER'S SENTENCE REACHES ALL THREE WITH DIFFERENT FORCE** —
[§5.2](#52-the-manager-task-hunt-run-to-exhaustion-across-thirty-six-files). ⚠ **AND ONE THING THE
SENTENCE DOES **NOT** REACH, STATED IN TERMS BECAUSE A CARELESS READER WOULD KILL IT: ⟦SOURCE⟧ **§58**'s
*escalation for missed follow-ups* IS A SYSTEM-GENERATED EXCEPTION/NOTIFICATION MECHANISM, NOT A
MANAGER-CREATED TASK, AND IT SURVIVES UNTOUCHED** — [§5.4](#54-what-the-supersession-expressly-does-not-reach).

⚠ **SECOND — AND THIS IS THE SINGLE LARGEST REVERSAL IN THE DOCUMENT — `First Response` MOVES FROM A
THING THE ARCHITECTURE SAID **MUST NOT BE STORED** TO A THING THE OWNER HAS LOCKED AS **RECORDED**.**
⟦SOURCE⟧ **AD-01F §7.2, class 8, verbatim:** ***"Computed metric entry — e.g. 'First response logged in
7 minutes' — Author: Nobody. It is a derivation … **Must not be stored as an event.** AD-01A §3.6's rule
applied exactly: recording it duplicates a computed fact and lets the two disagree after any
correction."*** ⚠ **`PO-AF1·H` REQUIRES THE OPPOSITE: *"BMexa creates/records a separate
system-generated First Response milestone"* and *"the actual business activity and First Response
milestone are DISTINCT TIMELINE EVENTS."*** ⚠ **AND THE OWNER HAS SUPPLIED, IN `PO-AF1·G`, THE EXACT
PREMISE AD-01F's OBJECTION ASSUMED WAS ABSENT: ***"Do NOT recalculate historical First Response because
of later correction activity."*** ⚠ **AD-01F's HAZARD WAS *"the two disagree AFTER ANY CORRECTION."*
**THE OWNER HAS ABOLISHED THE CORRECTION. **THE DERIVATION RULE'S PREMISE IS GONE, SO ITS CONCLUSION
FALLS — AND IT FALLS BY SUPERSESSION, NOT BY BEING SHOWN WRONG** — [§5.5](#55-first-response-the-storage-prohibition-superseded-and-why-it-is-a-supersession-and-not-a-refutation).

⚠ **THIRD — AND IT IS A `PF-447`-CLASS FINDING, WHICH IS TO SAY A LESSON ABOUT THE CORPUS RATHER THAN
ABOUT THE MODEL: THE SOURCE ALREADY SAID SO, AND THE ARCHITECTURE READ PAST IT.**
⟦SOURCE⟧ **Consolidated §9, the FUT exclusion row, verbatim:** ***"Excluded from FUT: system-generated
events such as lead creation, lead assignment, lead transfer and **system-generated first-entry
events** do not increment FUT."*** ⚠ **A RULE THAT **EXCLUDES** A SYSTEM-GENERATED FIRST-ENTRY EVENT
FROM A COUNT PRESUPPOSES THAT THE EVENT **EXISTS**. **AD-01F §7.2 CLASS 8 WAS DERIVED AGAINST A SOURCE
THAT HAD ALREADY IMPLIED STORAGE, ON THE SAME PAGE IT CITED FOR FUT.** ⚠ **`PO-AF1·H` IS CLOSER TO
CONSOLIDATED §9's LITERAL WORDS THAN THE ARCHITECTURE EVER WAS** — exactly as `PF-447` found for
`R-14`.

⚠ **FOURTH — FIVE CONTRADICTIONS ARE MINTED, EVERY ONE OF THEM BETWEEN `PO-AF1` AND `PO-AE1`, AND THE
SHARPEST IS A DEAD END THE OWNER CANNOT HAVE INTENDED.**

| | Contradiction | What breaks | Routed to |
|---|---|---|---|
| ⚠ **`X-42`** | ⚠ **`PO-AF1·B.8` (*managers do NOT create, assign, **reassign**, complete, modify or manage customer tasks/follow-ups*) versus `PO-AE1·K.2` (*pending and overdue follow-ups **remain active and transfer with the customer to the new rep***)** | ⚠ **A MANAGER-PERFORMED TRANSFER **REASSIGNS EVERY OPEN FOLLOW-UP ON THE RECORD**, AS A MANDATORY CONSEQUENCE OF AN ACT `PO-AF1·B.7` EXPRESSLY PERMITS. **THE PROHIBITION AND THE PERMISSION HAVE THE SAME OBJECT** | ⚠ **`AC-55`** |
| ⚠ **`X-43`** | ⚠ **`PO-AF1·B.7` (*managers … authorized client transfer/reassignment*) versus `PO-AE1·G.1` (*only the **Sales Head** can manually revive / reassign*) plus `PO-AE1·G.4` (*reassignment automatically flips `Dumped` → `New`*)** | ⚠ **IF *MANAGER* IS WIDER THAN *SALES HEAD* — AND ⟦SOURCE⟧ CONSOLIDATED **§3** LISTS THEM AS **TWO DISTINCT ROLES** — THEN A MANAGER'S PERMITTED REASSIGNMENT PERFORMS A **REVIVAL RESERVED TO THE SALES HEAD**, silently** | ⚠ **`AC-55`** |
| ⚠ **`X-44`** | ⚠ **`PO-AF1·H`/`·J`/`·K` (the `First Response` milestone and the per-cycle interval series) versus `PO-AE1·L.3` (*no indication, **no count**, no summary* of hidden history)** | ⚠ **THE PRESENCE **OR ABSENCE** OF AN `Inquiry`-LEVEL `First Response` MILESTONE IS AN INDICATION THAT SOMEONE DID — OR DID NOT — RESPOND BEFORE THE TRANSFER. ⚠ **AND THE INTERVAL SERIES' **CARDINALITY IS EXACTLY THE HIDDEN-HISTORY COUNT** `·L.3` FORBIDS DISCLOSING** | ⚠ **`AC-56`** |
| ⚠ **`X-45`** | ⚠ **`PO-AF1·G` (*the Rep creates a new normal activity* as the ONLY correction route) versus `PO-AE1·E.6` (*Add-Activity is **disabled*** on a `Dumped` record)** | ⚠ **A MISTAKENLY-RECORDED **`DUMP`** CANNOT BE CORRECTED BY THE PRESCRIBED MECHANISM, **BECAUSE THE MECHANISM IS DISABLED BY THE ACT BEING CORRECTED.** ⚠ **THE ONLY REMAINING REMEDY IS `PO-AE1·J.4`/`·G` REVIVAL — WHICH IS THE **RE-ENGAGEMENT** MECHANISM, AND AD-01C §3.4 FORBIDS IN TERMS *"a re-engagement … laundered as a correction"*** | ⚠ **`AC-58`** |
| ⚠ **`X-46`** | ⚠ **`PO-AF1·O` (*the new activity automatically **fulfills** the pending follow-up*) versus `PO-AE1·E.8` (*ALL pending AND overdue follow-ups are **cancelled** due to Dump and remain **permanently** cancelled*)** | ⚠ **A `DUMP` ACTIVITY IS SIMULTANEOUSLY *THE RELEVANT NEW ACTIVITY* THAT FULFILS THE OUTSTANDING FOLLOW-UP AND *THE `Dump`* THAT CANCELS IT. **FULFILLED AND CANCELLED ARE DIFFERENT TERMINAL FACTS WITH DIFFERENT REPORTING MEANINGS** | ⚠ **`AC-57`** |

⚠ **NOT ONE OF THE FIVE IS RESOLVED, RANKED BY LIKELIHOOD, OR GIVEN A PREFERRED BRANCH.**

⚠ **FIFTH — `V-4` — *the cheapest unblocking question*, OPEN FOR TWENTY-TWO CONSECUTIVE DOCUMENTS —
IS **ANSWERED IN ITS FIRST-RESPONSE LIMB AND IN NO OTHER**, AND THE COUNT IS STATED HONESTLY RATHER
THAN GENEROUSLY.**
⟦PRODUCT-OWNER DECISION — `PO-AF1·I`⟧ ***"An unanswered outbound call still counts because it is an
actual customer-contact attempt."*** ⚠ **THAT IS A DIRECT ANSWER TO AD-01AC §9.2's ROW 2 — *call
attempt, not connected* — WHICH HAS BEEN `UNDECIDED` SINCE AD-01F MINTED `V-4`.** ⚠ **BUT `V-4`
EXPRESSLY GATES **FIVE** QUANTITIES (AD-01AC `PF-349`: *New*'s three predicates, FUT, every
first-response variant, `W-1`'s counting rule and `W-4`'s clock) **AND `PO-AF1` SPEAKS TO EXACTLY ONE
OF THEM.** ⚠ **`V-4` IS THEREFORE **PARTIALLY ANSWERED AND STILL OPEN**, AND ITS FUT LIMB IS NOW
**MORE** CONSEQUENTIAL, NOT LESS — because `PO-AF1·O`'s auto-fulfilment rule attaches a SECOND
consumer to the same undefined predicate** — [§13.2](#132-items-answered-narrowed-or-re-homed-checked-individually).

⚠ **SIXTH — CONSOLIDATED §11's OWN DEFINITION OF `Overdue` IS SUPERSEDED BY THE OWNER, AND THE TWO
TEXTS ARE BOTH HIS.**
⟦SOURCE⟧ **Consolidated §11, verbatim:** ***"Overdue — **Scheduled follow-up/action time has passed**
and required follow-up has not been completed; derived operational bucket."***
⟦PRODUCT-OWNER DECISION — `PO-AF1·M`⟧ ***"The follow-up does NOT become Overdue immediately when the
exact scheduled clock time passes. The entire scheduled calendar date remains 'Today'."***
⚠ **A FOLLOW-UP DUE AT 11:00 IS `Overdue` AT 11:01 UNDER THE OLD TEXT AND `Today` UNTIL MIDNIGHT UNDER
THE NEW ONE. **THE DERIVED-NOT-STORED RULE IS UNTOUCHED AND REAFFIRMED; THE **PREDICATE** IS REPLACED**
— [§5.6](#56-the-overdue-predicate-superseded-by-the-owners-own-later-text).

⚠ **SEVENTH — THE NEW RULE MAKES `M-6` LOAD-BEARING FOR THE FIRST TIME, AND MAKES `V-20` SPLIT CLEANLY
IN TWO.**
⚠ **A *clock time* rule needs an INSTANT. A *calendar date* rule needs a **CALENDAR**, and a calendar
needs a timezone.** **AD-01 §5.1 supplies only *"authoritative server time"*; AD-01AC §10.3 records in
terms that the question *"against WHICH CLOCK — server, tenant or viewer — is `today` evaluated, and
where does the day break"* belongs to `M-6` and `V-20`, **BOTH OPEN**.** ⚠ **A LOCKED BUSINESS RULE NOW
RESTS ON AN UNANSWERED ONE.** ⚠ **AND SYMMETRICALLY, `V-20`'s *working-hour* LIMB IS **ANSWERED** —
`PO-AF1·J` says CALENDAR ELAPSED TIME, not tenant working hours — WHILE ITS *timezone* LIMB IS **NOT**,
AND HAS MERELY MOVED TO WHERE IT STILL BITES** — [§11.3](#113-the-day-boundary-becomes-load-bearing).

⚠ **EIGHTH — TWO ITEMS IN THE OWNER'S OWN CP REAFFIRMATION LIST ARE RECORDED BY THIS CORPUS AS
**NOT LOCKED**, AND THE TASK REQUIRED THAT THIS BE CONFIRMED RATHER THAN ASSUMED.**
⚠ **`PO-AF1·Q` lists *"Day 0/calendar-day rule is locked"* and *"Commission approval/revision rules
already locked."*** ⚠ **`AC-6` — *is the last eligible day `registration date + N` or `+ N − 1`, and is
`N = 0` legal* — HAS BEEN RE-CHECKED AT SOURCE BY AD-01T, AD-01U, AD-01V, AD-01Y, AD-01Z, AD-01AA,
AD-01AB AND AD-01AE AND IS **OPEN**; AD-01AC §10.3 records the standing *"EIGHTH-DOCUMENT DISCREPANCY
NOTICE — that the owner LISTS it among already-locked decisions and it is NOT locked."*** ⚠ **THIS IS
THE **NINTH**. ⚠ **AND `AC-48` — *by what rule may a Site Head revoke or change a Stage-2 commission
decision* — WAS MINTED BY AD-01AB §11.4 **ON `PO-AB4`'s OWN INSTRUCTION TO RECORD IT AS OPEN** and is
`VALIDATE-OPEN`** — [§4.3](#43-the-cp--registration--commission-reaffirmation-list-checked-item-by-item-against-its-locking-decision).
⚠ **ELEVEN OF THE THIRTEEN REAFFIRMED CP RULES MAP EXACTLY ONTO A LOCKING CLAUSE. TWO DO NOT.**

⚠ **NINTH — TWO ENTIRELY NEW VOCABULARIES ENTER THE CORPUS IN `PO-AF1`, VERIFIED BY EXHAUSTIVE GREP TO
APPEAR **NOWHERE** IN ANY SOURCE OR ANY PRIOR DOCUMENT: *Communication Type* AND *Success Reason*.**
⚠ **`Communication Type` IS BENIGN — IT NAMES AND SEPARATES A DIMENSION CONSOLIDATED §10 CARRIED
UNSEPARATED AS *"Activity type."*** ⚠ **`Success Reason` IS NOT BENIGN: IT IS A **MANDATORY FIELD IN A
LOCKED CAPTURE CONTRACT WITH ZERO APPROVED VALUES, NO DIMENSIONAL FRAMEWORK AND NO OWNING QUESTION** —
the exact condition AD-01A §3 built the three-dimension framework to prevent on the `Dump` side, and
the exact condition `N-4` has held open for twenty-five consecutive documents on the `Dump` side** →
`AC-59`, [§13.1](#131-the-five-new-ac-items).

---

## How to read this document

| Label | Meaning |
|---|---|
| ⟦SOURCE⟧ | A verbatim or closely-paraphrased statement from `docs/BMEXA_MASTER_SPEC.md`, `docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` or `docs/ENGINEERING_RULES.md`. |
| ⟦PRODUCT-OWNER DECISION⟧ | A decision the Product Owner has recorded — in AD-01A §8, AD-01C §1.2, AD-01E §1.1, AD-01I §1, the `PO-` clause sets of the CP chain, `PO-AD1`, `PO-AE1`, or **`PO-AF1` below**. **Authoritative business input. Never re-argued, ranked, hedged or softened here.** |
| ⟦SETTLED⟧ | A matter already determined by a prior document and carried, not re-derived. Cited to the document that determined it. |
| ⟦ARCHITECT ANALYSIS⟧ | A finding derived from those sources. Mine to defend. |
| ⟦ARCHITECT RECOMMENDATION⟧ | A proposed course of action. **RECOMMENDED, SUBJECT TO THE PROJECT OWNER'S EXPLICIT WRITTEN APPROVAL. NOT APPROVED.** |
| ⟦BUSINESS DECISION REQUIRED⟧ | The sources are silent or in conflict and **nothing here fills the gap.** |

**The owner's five-way taxonomy** — `PO LOCKED` · `ARCHITECT DERIVED` · `VALIDATE-OPEN` ·
`SUPERSEDED` · `CONTRADICTED` — is applied item by item at [§3](#3-new-po-locked-decisions),
[§4](#4-existing-decisions-that-remain-valid), [§5](#5-superseded-decisions) and
[§6](#6-contradicted-decisions). ⚠ **The owner's STEP-5 instruction adds a sixth label — `NARROWED` —
and it is used exactly where it belongs and nowhere else** — [§5.7](#57-narrowed-not-superseded-the-five-cases).
**A restatement, a paraphrase, a confirmation and a derived consequence is NOT counted as a new
Product-Owner decision and NOT counted as a closure.**

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-450` — THE THREE SENSES OF *SUPERSEDED* IN THIS DOCUMENT, SEPARATED ONCE
> AND THEN RELIED UPON. **AD-01AE's `PF-405` NAMED TWO; THIS DOCUMENT NEEDS A THIRD.**
>
> | Sense | What it means here | Example in this document |
> |---|---|---|
> | ⚠ **(i) A PO DECISION SUPERSEDED BY A LATER PO DECISION** | **The owner has changed their own mind. The old clause STAYS ON ITS OWN PAGE and is cited as historically true** | ⚠ **Consolidated §11's `Overdue` predicate, superseded by `PO-AF1·M`** |
> | ⚠ **(ii) AN ARCHITECT DERIVATION WHOSE PREMISE HAS BEEN REMOVED** | **Nobody changed their mind about the derivation; the thing it rested on moved. The conclusion may still be RIGHT — it is now UNGROUNDED** | ⚠ **AD-01A §3.5's RATIONALE for Dimension C, whose `Q5`-gating premise `PO-AF1·F` removes** |
> | ⚠ **(iii) AN ARCHITECT DERIVATION DIRECTLY OVERRULED BY A LATER PO DECISION ON THE SAME SUBJECT** | **The owner has decided the thing the architect derived, and decided it the other way. **This is NOT the architect being wrong; it is the architect being SUPERSEDED, which is the normal and correct outcome of asking** | ⚠ **AD-01F §7.2 class 8's *"must not be stored as an event"*, overruled by `PO-AF1·H`** |
>
> ⚠ **CONFLATING (ii) AND (iii) WOULD LET THIS DOCUMENT CLAIM THE OWNER HAS RULED ON `Q5`'s DIMENSION-C
> DEPENDENCY. **THE OWNER HAS NEVER MENTIONED `Q5`, AND NOTHING BELOW PRETENDS OTHERWISE.**

### Numbering discipline, verified at source rather than assumed

⟦ARCHITECT ANALYSIS⟧ **Every high-water mark below was re-verified by exhaustive grep over the whole
`docs/architecture/` corpus BEFORE anything was minted, exactly as AD-01AD re-verified AD-01AC's and
AD-01AE re-verified AD-01AD's, rather than carrying a summary. The documented namespace collisions are
carried forward unrepaired, on AD-01I `I-14`'s and AD-01J `J-16`'s own precedent — *flag, do not
renumber*.**

| Series | Meaning | Owner | High-water verified | This document |
|---|---|---|---|---|
| `Q1 … Q16` | AD-01 §10's open product decisions | AD-01 | `Q16` | **Not extended.** ⚠ **`Q8`'s enrichment-queue scope acquires a new constraint — `A-100`** |
| `E-01 … E-24` | AD-01 §7's edge cases | AD-01 | `E-24` | **Not extended** |
| `N-1 … N-4` | AD-01A §6.2's open items | AD-01A | `N-4` | ⚠ **Not extended. **`N-4` NOT ANSWERED — a TWENTY-FIFTH consecutive document** |
| `D-1 … D-12`, `X-1 … X-7` | AD-01B's dependency edges | AD-01B | `D-12`, `X-7` | **Not extended — the `X-n` collision is carried, not repaired** |
| `T-1 … T-12` | AD-01C §6's open items | AD-01C | `T-12` | ⚠ **Not extended. `T-7` NARROWED in its activity limb only; `T-6`/`V-22` SHARPENED** |
| `U-1 … U-20` | AD-01E §12's open items | AD-01E | `U-20` | ⚠ **Not extended. `U-10` NARROWED; `U-16` MADE HARDER. NONE closed** |
| `C-1 … C-11`, `V-1 … V-26`, `F-1 … F-11` | AD-01F's contradictions, open items, findings | AD-01F | `C-11`, `V-26`, `F-11` | ⚠ **NOT EXTENDED. `V-4` ANSWERED IN ONE LIMB; `V-19`, `V-20`, `V-24` SHARPENED; `V-11`'s control half ADVANCED. NO NEW `V-` MINTED** |
| `G-1 … G-12`, `W-1 … W-5` | AD-01G's findings and open items | AD-01G | `G-12`, `W-5` | ⚠ **Not extended. `W-1` and `W-4` MADE ACUTE; `W-5` ENLARGED. NONE closed** |
| `H-1 … H-12`, `Y-1 … Y-5` | AD-01H's findings and open items | AD-01H | `H-12`, `Y-5` | ⚠ **Not extended. `Y-2` gains EVIDENCE and is NOT closed** |
| `I-1 … I-14`, `Z-1 … Z-6` | AD-01I's findings and open items | AD-01I | `I-14`, `Z-6` | ⚠ **Not extended. `I-8`'s work-mandate status becomes UNDETERMINED — `A-101`. `Z-2` ANSWERED IN ITS RECOVERABILITY LIMB ONLY; `Z-3` NOW CONSUMES `AC-55`** |
| `AC-n` | The **shared** cross-domain business-decision register | AD-01M onward | ⚠ **`AC-54`** | ⚠ **`AC-55 … AC-59` MINTED — [§13.1](#131-the-five-new-ac-items)** |
| `X-n` (contradiction sense) | The **shared** contradiction register | AD-01W onward | ⚠ **`X-41`** | ⚠ **`X-42 … X-46` MINTED. `X-28` CARRIED UNCHANGED AND EXPRESSLY NOT DISCHARGED. `X-41` ENLARGED, NOT RENUMBERED** |
| `A-n` (amendment sense) | The **shared** *amendment named and not made* register | AD-01H `A-1` → AD-01AE `A-93` | ⚠ **`A-93`** | ⚠ **`A-94 … A-103` MINTED AND NOT MADE. `A-1 … A-93` ALL STILL UNMADE** |
| `C-` roman | The shared architect-constraint register | AD-01J onward | ⚠ **`C-XXVI`** | ⚠ **NOT EXTENDED. **`C-XXVII` TESTED AND **REFUSED** — [§7.5](#75-c-xxvii--the-constraint-candidate-tested-and-refused)** |
| `PF-n` | The shared cross-document finding series | AD-01AA/AB/AC/AD/AE | ⚠ **`PF-449`** | ⚠ **`PF-450 … PF-497`** |
| `PO-` | Recorded Product-Owner clauses | AD-01N onward (`PO-N1` … `PO-AE1`) | ⚠ **`PO-AE1`** | ⚠ **`PO-AF1` MINTED — seventeen lettered sub-clauses** |
| `NF-n` | AD-01N's eligibility-apparatus findings | AD-01N onward | `NF-30` | **Not extended** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-451` — THREE COLLISION HAZARDS ARE NAMED BEFORE THEY CAN OCCUR.**
> ⚠ **(a) `PO-AF1` IS NEVER WRITTEN AS `AF-1`, and it is not a member of the `A-n` amendment series, the
> `AC-n` register, or AD-01F's `A-1 … A-14` assumption series.**
> ⚠ **(b) `PO-AF1·G` (activity immutability) MUST NOT BE CONFUSED WITH `PO-AE1·G` (manual revival).
> **The sub-clause letters are per-clause-set and restart at `·A` for every `PO-` clause. **Every
> citation below that crosses clause sets names the clause set explicitly.**
> ⚠ **(c) `PO-AF1·F`'s *Dump Reason* IS THE SAME OBJECT AS AD-01A §8.3's THREE-DIMENSION FRAMEWORK AND
> `N-4`'s VALUES. **IT IS NOT A NEW MASTER AND IS NOT COUNTED AS ONE** — [§4.4](#44-the-dump-reason-framework-confirmed-verbatim-against-ad-01a-83).
> **There is no `03d` and no document AD-01D.**

### Predecessors

`00-phase-0-architecture-note.md` · `01-bmexa-architecture-reconciliation.md` ·
`02-repository-governance-agent-rules-report.md` · **AD-01** (`03`) · **AD-01A** (`03a`) · **AD-01B**
(`03b`) · **AD-01C** (`03c`) · **AD-01E** (`03e`) · **AD-01F** (`03f`) · **AD-01G** (`03g`) · **AD-01H**
(`03h`) · **AD-01I** (`03i`) · **AD-01J** (`03j`) · **AD-01K** (`03k`) · **AD-01L** (`03l`) · **AD-01M**
(`03m`) · **AD-01N** (`03n`) · **AD-01O** (`03o`) · **AD-01P** (`03p`) · **AD-01Q** (`03q`) · **AD-01R**
(`03r`) · **AD-01S** (`03s`) · **AD-01T** (`03t`) · **AD-01U** (`03u`) · **AD-01V** (`03v`) · **AD-01W**
(`03w`) · **AD-01X** (`03x`) · **AD-01Y** (`03y`) · **AD-01Z** (`03z`) · **AD-01AA** (`03aa`) ·
**AD-01AB** (`03ab`) · **AD-01AC** (`03ac`) · **AD-01AD** (`03ad`) · **AD-01AE** (`03ae`).

| | |
|---|---|
| **Document ID** | AD-01AF |
| **Type** | ⚠ **OPERATIONAL-LAYER RECONCILIATION.** Full incorporation of the management-authority / sales-activity / activity-immutability / First-Response / response-cycle / timeline / follow-up-bucket / follow-up-fulfilment rule set; supersession audit of the *manager-created task* discussion the owner expressly retires; contradiction audit against `PO-AE1` and against the whole accumulated ledger. **NOT an amendment to any prior document. NO FILE FROM `00` THROUGH `03ae` IS EDITED BY THIS DOCUMENT.** |
| **Sources read at source for this document** | `docs/BMEXA_MASTER_SPEC.md` (§03, §06, §07, §08, §09, §10, §11, §12, §13, §14, §18, §20, §31, §42, §43, §45, §46, §49, §52, §54, §57, §58, §63, §65, §71, §72, §80, §86, §88, §95, §97) · `docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` (§1, §3, §4, §5, §6, §7, §8, §9, §10, §11, §12, §13, §14, §16, §17, §18, §19, §25, §26, §27, §28, §29, §30, §31) · `docs/ENGINEERING_RULES.md` (R1, R2, R4, R5, R6, R12) · `03` §3.1–§3.6, §5.1, §6.1, §9.1–§9.4, §10 · `03a` §1.7, §3.1–§3.8, §5.4, §5.7, §8.1–§8.7 · `03b` §7.1, `X-6` · `03c` §1.2, §3.4 (`S3`, `T-7`), §3.7 · `03e` §6.3, §6.5 (`U-10`), §12 · `03f` §2.1–§2.3, §4 (`C-1`…`C-11`), §7.1–§7.4, §10.3, §12.4, §13.1, §16.1–§16.4 · `03g` §8.1, §9.2, §9.3, §11.3, `W-1`…`W-5` · `03h` §5.1, §11.4 · `03i` §1.2, §2.4, §3.5, §3.6, §4.2, §4.7, §5.2, §5.3, §9.2, §10.1, §12 (`I-1`…`I-14`), §12.1, §13 · `03n` §591, §606–§626, `AC-6` · `03o` §698–§708, `AC-7` · `03t` §719–§722 · `03aa` §0.2, §1.2, §1.3 · `03ab` §1.2, §3.4, §11.2–§11.4 · `03ac` §9.1–§9.5, §10.1–§10.4, §13, §15.1 · `03ad` §6.1–§6.4, §10.2 · `03ae` §0, §7.2, §7.3, §8.1–§8.6, §9.1–§9.3, §11.1–§11.4, §12, §13, §14. |
| **Contains SQL / schema / migration / code / UI / workflow implementation** | ⚠ **NO.** No table, column, type, master value, index, endpoint, screen, control, notification schedule, state-machine implementation or migration appears anywhere below, and none may be derived from anything below. ⚠ **A LOCKED CAPTURE CONTRACT IS NOT AN AUTHORIZATION OF A FORM, AND A LOCKED MILESTONE IS NOT AN AUTHORIZATION OF A TABLE** — [§10.6](#106-what-this-document-expressly-does-not-authorise). |
| **Screenshot status** | ⚠ **The Product Owner's supplied screenshot is treated STRICTLY as workflow/process evidence, per `PO-AF1·L`'s own instruction (*"Do NOT copy visual design from the screenshot"*), consolidated §1/§24/§26 and AD-01F's standing rule. **NO layout, styling, component, ordering, colour, typography or interaction conclusion is drawn from it anywhere below** — [§8.4](#84-the-screenshot-its-standing-and-the-one-thing-it-is-evidence-of). |
| **Constraints honoured** | ⟦SOURCE⟧ Spec **Rule 1** (do not invent requirements — silence is recorded, never filled) · **§88** (canonical entities, relationships, booking lifecycle, financial rules, CP commission logic, tenant architecture, RLS, authorization, authentication, offline business behavior, source-of-truth rules and audit requirements are **MUST ASK BEFORE DECIDING**) · **§97** (when in doubt, stop and ask) · `ENGINEERING_RULES.md` **R1**, **R2**, **R4**, **R5**, **R6**, **R12**. |
| **Explicitly NOT performed** | ⚠ **The comprehensive Audit Completeness Gate. It remains DEFERRED by the Product Owner to the end of the entire architecture phase and is NOT opened, NOT designed and NOT partially designed here** — [§12.5](#125-the-audit-completeness-gate--expressly-not-opened). ⚠ **AND the follow-up notification cadence, which `PO-AF1·N` expressly leaves open and expressly forbids inventing** — [§13.3](#133-the-full-validate-open-register-carried-forward). |

---

## 0. The Product-Owner decision, recorded verbatim as PO-AF1

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-452` — THE OWNER'S WORDS ARE RECORDED BEFORE ANY ANALYSIS TOUCHES THEM,
> EXACTLY AS EVERY DOCUMENT IN THIS SERIES HAS DONE WITH EVERY `PO-` CLAUSE SINCE `PO-N1`.** ⚠ **NOTHING
> BELOW THIS BLOCK MAY BE READ BACK INTO IT.** **The lettering and sub-numbering are the architect's,
> applied to preserve the owner's own grouping and to make citation possible; the CONTENT of every
> sub-clause is the owner's.**

> ⟦PRODUCT-OWNER DECISION — `PO-AF1`, SEVENTEEN SUB-CLAUSES, RECORDED VERBATIM⟧
>
> **`PO-AF1·A` — THE AUTHORITATIVE PROCESS AND THE STATUS LABELS.**
> - **·A.1** — ***the BMexa development process remains: Business Decision → Architecture → Architecture Reconciliation → PO Approval → Data Model → Security / Tenant Isolation → Failure / Concurrency / Offline → API / Contracts → Tests → Implementation → Integration / QA → PO Acceptance → Pilot / UAT → Production;***
> - **·A.2** — ***do NOT skip stages;***
> - **·A.3** — ***do NOT invent missing business rules;***
> - **·A.4** — ***do NOT convert an architect-derived assumption into a PO-locked rule;***
> - **·A.5** — ***use these status labels: `PO LOCKED`, `ARCHITECT DERIVED`, `VALIDATE-OPEN`, `SUPERSEDED`, `CONTRADICTED`;***
> - **·A.6** — ***if an old architectural rule conflicts with a new PO decision, explicitly mark the old rule `SUPERSEDED` or `CONTRADICTED` and identify the exact affected document/section.***
>
> **`PO-AF1·B` — MANAGEMENT AUTHORITY.**
> - **·B.1** — ***management authority follows the reporting hierarchy;***
> - **·B.2** — ***a manager can manage only employees/customers within their direct or indirect reporting tree;***
> - **·B.3** — ***a manager cannot gain operational authority over another manager's team merely because they share a project;***
> - **·B.4** — ***project assignment does not independently expand management authority;***
> - **·B.5** — ***every direct or indirect ancestor in the reporting hierarchy is within the relevant management scope;***
> - **·B.6** — ***management scope does NOT mean full operational control;***
> - **·B.7** — ***managers are VIEW-ONLY for customer records, except for authorized client transfer/reassignment;***
> - **·B.8** — ***managers do NOT create, assign, reassign, complete, modify, or manage customer tasks/follow-ups;***
> - **·B.9** — ***only the current Client Owner / Sales Rep can create and manage customer operational activities and follow-ups;***
> - **·B.10** — ***IMPORTANT: all previous discussion about "manager-created management tasks", manager task assignment, task escalation, task reassignment, task completion, etc. is SUPERSEDED and must not remain as an active product rule.***
>
> **`PO-AF1·C` — THE SALES ACTIVITY MODEL.**
> - **·C.1** — ***the current owner / Sales Rep creates an Activity;***
> - **·C.2** — ***every activity begins with a Communication Type;***
> - **·C.3** — ***Communication Type is selected from a configured/predefined set, examples: Outbound Call, Inbound Call, WhatsApp, Message, Email, other configured communication sources;***
> - **·C.4** — ***Communication Type and Activity Outcome are separate dimensions;***
> - **·C.5** — ***the activity outcome is one of: (1) FOLLOW-UP, (2) SUCCESS, (3) DUMP.***
>
> **`PO-AF1·D` — THE FOLLOW-UP OUTCOME.**
> - **·D.1** — ***for a Follow-up activity, the Sales Rep records: Communication Type, Response Type, Sub-response Type, Remarks, Next Follow-up date/time;***
> - **·D.2** — ***example: Outbound Call → Follow-up → Response Type: Qualified → Sub-response: Normal Follow-up → Remarks: Send project details on WhatsApp → Next Follow-up: date/time.***
>
> **`PO-AF1·E` — THE SUCCESS OUTCOME.**
> - **·E.1** — ***for Success: Communication Type, Success Reason, Success Remarks, Proceed/Save;***
> - **·E.2** — ***the timestamp of the completed/proceeded activity is the authoritative activity timestamp.***
>
> **`PO-AF1·F` — THE DUMP OUTCOME AND THE DUMP REASON FRAMEWORK.**
> - **·F.1** — ***for Dump: Communication Type, Dump Reason, Dump Remarks, Proceed to Dump;***
> - **·F.2** — ***Dump Reason is mandatory;***
> - **·F.3** — ***BMexa has a canonical Dump Reason framework/master;***
> - **·F.4** — ***each builder tenant may add/configure its own Dump reasons, but tenant-defined reasons must carry the required BMexa structural classifications: validity class, responsibility locus, recoverability posture;***
> - **·F.5** — ***free-text remarks cannot replace the required Dump Reason;***
> - **·F.6** — ***recoverability is NOT a property that prevents revival;***
> - **·F.7** — ***recoverability is decided case-by-case by authorized user/manager.***
>
> **`PO-AF1·G` — ACTIVITY IMMUTABILITY.**
> - **·G.1** — ***saved activities are immutable;***
> - **·G.2** — ***the Sales Rep cannot edit, delete, void or overwrite a saved activity;***
> - **·G.3** — ***if the Rep records something incorrectly: the original activity remains unchanged; the Rep creates a new normal activity; no special "correction of activity" relationship is required; the new activity is simply another chronological activity;***
> - **·G.4** — ***do NOT recalculate historical First Response because of later correction activity;***
> - **·G.5** — ***saved activity history is append-only.***
>
> **`PO-AF1·H` — FIRST RESPONSE AS A SYSTEM-DERIVED MILESTONE.**
> - **·H.1** — ***IMPORTANT: First Response is a SYSTEM-DERIVED MILESTONE;***
> - **·H.2** — ***it is NOT a separate manual activity entered by the Sales Rep;***
> - **·H.3** — ***when the first qualifying activity in a response cycle is completed/saved: (1) the actual activity is recorded as its own timeline milestone; (2) BMexa derives the First Response metric; (3) BMexa creates/records a separate system-generated First Response milestone;***
> - **·H.4** — ***the actual business activity and First Response milestone are distinct timeline events;***
> - **·H.5** — ***example: lead created 10:00; Sales Rep completes 10:20 Outbound Call → Success; then — actual activity: 10:20 Outbound Call / Success / Success Reason / Remarks; AND system milestone: First Response = 20 minutes.***
>
> **`PO-AF1·I` — QUALIFYING EVENTS.**
> - **·I.1** — ***the first qualifying customer-related activity in a response cycle establishes First Response;***
> - **·I.2** — ***qualifying activity includes: actual customer-contact activity; valid Dump activity with mandatory Dump Reason; authoritative Success / Booked milestone;***
> - **·I.3** — ***a planned future follow-up by itself does NOT establish First Response; creating "Call customer tomorrow at 11 AM" does NOT count; the actual qualifying activity when the Rep performs the customer interaction counts;***
> - **·I.4** — ***an unanswered outbound call still counts because it is an actual customer-contact attempt;***
> - **·I.5** — ***DUMP AS FIRST RESPONSE: if the Rep performs no earlier qualifying activity and then Dumps the customer with the mandatory Dump Reason, the Dump action itself establishes First Response (lead created 10:00, Dump completed 10:20 ⟹ First Response = 20 minutes);***
> - **·I.6** — ***do NOT create a special FIRST_RESPONSE event type solely because the underlying event was Dump; the underlying Dump event remains separately recorded;***
> - **·I.7** — ***SUCCESS AS FIRST RESPONSE: if Success / authoritative Booked milestone occurs before any other qualifying response, Success itself establishes First Response (lead created 10:00, Booked/Success 10:05 ⟹ First Response = 5 minutes); Success remains separately recorded as a business milestone.***
>
> **`PO-AF1·J` — FIRST RESPONSE START POINTS, AND CALENDAR TIME.**
> - **·J.1** — ***there are different response cycles;***
> - **·J.2** — ***NEW LEAD / ORIGINAL CYCLE: start point is the lead creation timestamp; First Response = first qualifying activity timestamp minus lead creation timestamp;***
> - **·J.3** — ***TRANSFER RESPONSE: when a customer is transferred to another Sales Rep, a new owner-response interval begins at the transfer timestamp;***
> - **·J.4** — ***the first qualifying activity by the new owner after transfer establishes Transfer-to-First-Response;***
> - **·J.5** — ***if no previous First Response exists in the Inquiry, the same activity can establish the Inquiry's overall First Response;***
> - **·J.6** — ***if the previous owner never responded before transfer, their owner-response interval ends at transfer with outcome: No Response / Transferred; do not leave the interval open;***
> - **·J.7** — ***if the new owner also does not respond and transfers again, the new owner's interval ends at their transfer with No Response / Transferred; every transfer gets its own response interval;***
> - **·J.8** — ***IF OWNER ALREADY RESPONDED: if Rep A already made the first qualifying response and later transfers to Rep B, the original First Response remains unchanged, and Rep B still gets a new Transfer-to-First-Response interval beginning at the transfer timestamp;***
> - **·J.9** — ***CALENDAR TIME: response metrics use CALENDAR ELAPSED TIME; do NOT use tenant working hours for First Response calculations; example: lead created 11 PM, first contact 9 AM next morning ⟹ First Response = 10 hours.***
>
> **`PO-AF1·K` — REACTIVATION / REVIVAL RESPONSE CYCLES.**
> - **·K.1** — ***every automatic revival creates a NEW response cycle; the original cycle remains intact;***
> - **·K.2** — ***example: original — lead created 10:00, First Response 10:20; later Dump; later the customer returns and the system automatically revives Dumped → New;***
> - **·K.3** — ***the actual system reactivation timestamp starts the new response clock;***
> - **·K.4** — ***if the first qualifying activity after revival occurs 15 minutes later, Reactivation-to-First-Response = 15 minutes;***
> - **·K.5** — ***every later revival creates another independent response cycle (Original cycle, Revival #1, Revival #2, Revival #3, etc.);***
> - **·K.6** — ***previous cycles are never overwritten;***
> - **·K.7** — ***if the revived customer is transferred before response: the old owner's revival-response interval ends at transfer; outcome = No Response / Transferred; the new owner gets a new transfer-response interval;***
> - **·K.8** — ***if the new owner Dumps instead of contacting, the Dump establishes First Response for that response cycle.***
>
> **`PO-AF1·L` — THE ACTIVITY TIMELINE.**
> - **·L.1** — ***the timeline should contain both (A) business activities — examples: Outbound Call, Inbound Call, WhatsApp, Message, Follow-up, Success, Dump — and (B) system/business milestones — examples: First Response, Transfer, Revival, other system-generated events as architecturally justified;***
> - **·L.2** — ***every timeline event should preserve: timestamp, actor/system source, event/activity type, relevant structured data;***
> - **·L.3** — ***the timeline is chronological and historical;***
> - **·L.4** — ***the reference screenshot supplied by the PO is workflow/process evidence, NOT a UI design specification; it demonstrates a sequence similar to: Client Added → Transferred to Amit Tomar → First Response in 7 minutes → Phone Call → Qualified → Normal Follow-up → Remarks → Next Follow-up → Current Handler → timestamps;***
> - **·L.5** — ***do NOT copy visual design from the screenshot.***
>
> **`PO-AF1·M` — FOLLOW-UP DATE BUCKETS.**
> - **·M.1** — ***a scheduled follow-up has derived date buckets;***
> - **·M.2** — ***if scheduled for tomorrow at 11:00: today ⟹ Future; tomorrow ⟹ Today; day after tomorrow ⟹ Overdue;***
> - **·M.3** — ***IMPORTANT: the follow-up does NOT become Overdue immediately when the exact scheduled clock time passes;***
> - **·M.4** — ***the entire scheduled calendar date remains "Today";***
> - **·M.5** — ***it becomes Overdue starting on the following calendar day if still unresolved;***
> - **·M.6** — ***so: before scheduled date → Future; scheduled date → Today; following date onward while unresolved → Overdue;***
> - **·M.7** — ***these are DERIVED UI/reporting buckets;***
> - **·M.8** — ***do NOT store Today/Future/Overdue as independent lifecycle states.***
>
> **`PO-AF1·N` — FOLLOW-UP NOTIFICATIONS.**
> - **·N.1** — ***BMexa should notify the Sales Rep around the scheduled follow-up;***
> - **·N.2** — ***the PO described a model such as: notification around the scheduled time; additional reminder(s), e.g. after 2 hours;***
> - **·N.3** — ***the exact notification cadence remains an architecture/configuration question unless already resolved elsewhere;***
> - **·N.4** — ***do not invent a final exact notification schedule.***
>
> **`PO-AF1·O` — FOLLOW-UP FULFILMENT.**
> - **·O.1** — ***`PO LOCKED`: if an outstanding scheduled follow-up exists and the current owner records the relevant new activity for that customer, the new activity automatically fulfills the pending follow-up;***
> - **·O.2** — ***the old follow-up remains historically reconstructable;***
> - **·O.3** — ***the new activity can create a new follow-up schedule;***
> - **·O.4** — ***do NOT require the Rep to separately click "complete follow-up" if the qualifying activity itself fulfills it.***
>
> **`PO-AF1·P` — IMPORTANT CUSTOMER / INQUIRY RULES ALREADY LOCKED, AND NOT TO BE REGRESSED.**
> - **·P.1** — ***one customer can have multiple Project Interests within one Inquiry;***
> - **·P.2** — ***Project Interests do not have independent commercial lifecycle/status;***
> - **·P.3** — ***commercial status is at Inquiry level;***
> - **·P.4** — ***Dump is a temporary work-state restriction;***
> - **·P.5** — ***Dump retains Project Interests/history;***
> - **·P.6** — ***customer return automatically revives the same Inquiry;***
> - **·P.7** — ***specific renewed interest creates a structured reactivation event referencing the Project Interest;***
> - **·P.8** — ***no duplicate Customer/Lead/Inquiry;***
> - **·P.9** — ***assignment follows current responsible owner;***
> - **·P.10** — ***dumped customer remains with last owner unless transferred;***
> - **·P.11** — ***transfer of a Dumped customer revives it and makes it New under the new owner;***
> - **·P.12** — ***strict reporting hierarchy controls management scope;***
> - **·P.13** — ***without-history transfer is a genuine authorization boundary across UI/API/search/reports/exports/etc.;***
> - **·P.14** — ***current owner loses normal operational access after transfer;***
> - **·P.15** — ***previous owner may have historical/search access only where the existing authorization rules permit it;***
> - **·P.16** — ***managers are view-only except authorized client transfer/reassignment;***
> - **·P.17** — ***do not allow project membership to expand management authority.***
>
> **`PO-AF1·Q` — CP / REGISTRATION / COMMISSION RULES ALREADY LOCKED, AND NOT TO BE REGRESSED.**
> - **·Q.1** — ***registration is separate from attribution and commission;***
> - **·Q.2** — ***registration is Client × CP × Project scoped;***
> - **·Q.3** — ***registration has project policy snapshot;***
> - **·Q.4** — ***Day 0/calendar-day rule is locked;***
> - **·Q.5** — ***registration can remain valid independently of Inquiry status;***
> - **·Q.6** — ***expired registration does not automatically disqualify CP;***
> - **·Q.7** — ***valid registration does not automatically guarantee commission;***
> - **·Q.8** — ***Site Head has final commission allocation authority;***
> - **·Q.9** — ***Stage-1 attribution and Stage-2 commission allocation are separate;***
> - **·Q.10** — ***non-claimant CP can receive Stage-2 commission;***
> - **·Q.11** — ***Stage-2 split can be discretionary;***
> - **·Q.12** — ***commission approval/revision rules already locked;***
> - **·Q.13** — ***registration history remains visible as evidence/history;***
> - **·Q.14** — ***do not restore superseded "registration validity = commission eligibility" logic.***
>
> ⚠ **STATUS CONFERRED BY THE OWNER: `PO LOCKED`, except where the owner's own text says otherwise —
> `·N.3`/`·N.4` (notification cadence, expressly OPEN) and `·A` (process, not a product rule).**

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-453` — WHAT `PO-AF1` IS, STATED BEFORE IT IS USED, AND IT IS A DIFFERENT
> KIND OF DECISION SET FROM `PO-AD1` AND `PO-AE1`.**
>
> | Test | Result |
> |---|---|
> | **Is this a NEW business MODEL?** | ⚠ **NO — AND THIS IS THE FIRST *NO* SINCE `PO-AD1`.** **`PO-AE1·A` changed the GRAIN of the corpus's central commercial object. **`PO-AF1` CHANGES NO GRAIN. **It specifies the OPERATIONAL LAYER that sits on top of the grain `PO-AE1` fixed — who may act, what an act looks like, what an act is immutable against, and what the system derives from a series of acts** |
> | **Is it a NEW business DECISION?** | ⚠ **YES, IN AT LEAST SEVEN RESPECTS: the manager task/follow-up prohibition (`·B.8`); the Communication-Type-×-Outcome separation (`·C.4`); activity immutability with no correction relationship (`·G`); `First Response` as a RECORDED milestone (`·H.3`); the per-cycle interval model with `No Response / Transferred` as a closing outcome (`·J.6`, `·J.7`, `·K.7`); CALENDAR elapsed time (`·J.9`); and the calendar-DATE `Overdue` predicate (`·M.3`–`·M.6`)** |
> | **Does it approve anything beyond its own seventeen sub-clauses?** | ⚠ **NO, AND THE BOUNDARY IS POLICED THROUGHOUT.** **It does not approve `C-XXVI`, `A-1 … A-93`, `I-8`, `H-5`, `V-7`'s union, `AC-50 … AC-54`, or any notification design** |
> | **Does it close any open item?** | ⚠ **YES — TWO OUTRIGHT, PLUS FOUR PARTIALS, AND EACH IS CHECKED INDIVIDUALLY AT [§13.2](#132-items-answered-narrowed-or-re-homed-checked-individually). ⚠ **`N-4`, `V-19`, `Y-1`, `Y-2`, `Y-4`, `Y-5`, `W-1`, `W-2`, `W-3`·enforcement, `W-5`, `Z-1 … Z-6`, `T-4`, `T-5`, `AC-6`, `AC-26`, `AC-42`, `AC-47`, `AC-48`, `AC-50 … AC-54` ARE EACH RE-CHECKED AND **NONE** IS ANSWERED** |
> | **Does it authorise a schema, a form or a notification?** | ⚠ **NO. ⟦SOURCE⟧ §88 reserves canonical entities, relationships and authorization rules to the owner; `·N.4` forbids inventing a schedule in the owner's own words; and `·L.5` forbids deriving UI from the screenshot in the owner's own words** |
> | **Does its reaffirmation list (`·P`, `·Q`) constitute new closures?** | ⚠ **NO — AND `PO-AB5`'s OWN PRECEDENT GOVERNS: *"Restating these is not a new closure of anything — do not count it as one."* **THIRTY-ONE REAFFIRMED PROPOSITIONS ARE CHECKED AT [§4.2](#42-the-customer--inquiry-reaffirmation-list-checked-item-by-item-against-po-ae1) AND [§4.3](#43-the-cp--registration--commission-reaffirmation-list-checked-item-by-item-against-its-locking-decision) AND **ZERO** ARE COUNTED AS CLOSURES** |

---

## 1. Documents reviewed

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 1.** **The owner's `STEP 1` instruction is *"review the
> current BMexa architecture repository/docs"*, and the honest answer to *"did you review all of it"*
> is stated as a METHOD rather than as a claim, because the corpus is 4.77 MB across thirty-six files
> and a bare assertion of completeness would be unfalsifiable.**

### 1.1 The method, stated before the result

| Tier | What was done | Files |
|---|---|---|
| **Tier 1 — read in full or substantially in full** | ⚠ **Read end-to-end for structure, and in full at every section this document cites** | ⚠ **`03ae` (the immediately preceding decision set, `PO-AE1`, and its §7, §8, §9, §11, §12, §13, §14, §15) · `03ac` §9, §10, §13, §15 · `03ad` §6, §10, §12, §13 · `03aa` §0.2, §1.2, §1.3 · `03ab` §1.2, §3, §11** |
| **Tier 2 — read at every section the reconciliation touches, located by targeted search rather than by page order** | ⚠ **Each cited section was opened AT SOURCE and quoted from the file, never from another document's summary of it** | ⚠ **`03` §3, §5.1, §6.1, §9 · `03a` §1.7, §3, §5.4, §5.7, §8 · `03b` §7.1 · `03c` §1.2, §3.4 · `03e` §6, §12 · `03f` §2, §4, §7, §10.3, §12.4, §16 · `03g` §8, §9, §11, `W-1`…`W-5` · `03h` §5.1, §11.4 · `03i` §1, §2.4, §3.5, §3.6, §4, §5, §9, §10, §12, §13 · `03n` `AC-6` · `03o` `AC-7` · `03t` §719–§722** |
| **Tier 3 — swept by exhaustive whole-corpus search for the specific vocabulary this decision set touches** | ⚠ **Nine searches, each run over ALL thirty-six files plus the three `docs/` sources, with the result recorded whether or not it was convenient** | ⚠ **`task` · `manager|management act` · `escalat` · `reporting hierarchy` · `first response` · `overdue|today|future` · `communication type` · `success reason` · `day 0\|calendar day`** |
| **Tier 4 — the sources themselves** | ⚠ **Read at every section cited** | ⚠ **`BMEXA_MASTER_SPEC.md` · `BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` · `ENGINEERING_RULES.md`** |
| **Tier 5 — read for structure and confirmed NOT reached** | ⚠ **`00` was checked for a CRM activity/interaction storage model and found to have NONE; `01`, `02`, `03j`–`03z` were checked for `task`, `first response` and manager-authority vocabulary and returned only the hits recorded below** | ⚠ **`00`, `01`, `02`, `03j`–`03z`, `schema-phase-0.sql`** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-454` — ONE TIER-5 RESULT IS A FINDING RATHER THAN A NEGATIVE, AND IT
> REMOVES AN ENTIRE CLASS OF POSSIBLE CONFLICT BEFORE THE AUDIT BEGINS.**
> ⟦SOURCE⟧ **`00-phase-0-architecture-note.md` §842, verbatim:** ***"Phase 0 has no CRM business-object
> tables. Contacts, companies, leads, deals, activities …"*** and §854: ***"`contacts`, `companies`,
> `leads`, `deals`, `activities`, `notes` — **must** be created with …"*** ⚠ **`schema-phase-0.sql`
> CONTAINS NO `activities`, `interactions`, `follow_ups` OR `tasks` TABLE, VERIFIED BY SEARCH.**
> ⚠ **THEREFORE `PO-AF1·C`–`·G`'s ACTIVITY MODEL COLLIDES WITH **NO EXISTING STORAGE MODEL**, BECAUSE
> THERE IS NONE. **EVERY CONFLICT FOUND BELOW IS WITH A CONCEPTUAL RULE, NOT WITH A BUILT ARTEFACT**,
> and that is the single largest reason the reconciliation is cheap where it is cheap.**

### 1.2 The exhaustive searches, and what each returned

| # | Search | Result, recorded as found |
|---|---|---|
| **1** | ⚠ **`task` over `BMEXA_MASTER_SPEC.md`** | ⚠ **ZERO HITS. **THE MASTER SPEC HAS NO TASK CONCEPT AT ALL** |
| **2** | ⚠ **`task` over all thirty-six architecture files** | ⚠ **Predominantly *"this task's brief/framing/scope"* — the ARCHITECT's task, not a CRM object. **THREE substantive hits, all in `03a` and `03i`** — [§5.2](#52-the-manager-task-hunt-run-to-exhaustion-across-thirty-six-files) |
| **3** | ⚠ **`escalat`** | ⚠ **Every hit resolves to ⟦SOURCE⟧ **§58**'s *escalation for missed follow-ups* or to `Q14`/`N-2`/`X-6`. **NOT ONE describes a manager CREATING or ASSIGNING a task** — [§5.4](#54-what-the-supersession-expressly-does-not-reach) |
| **4** | ⚠ **`manager … (may\|can\|creates\|assigns)` / `management act`** | ⚠ **The management-act corpus is about TRANSFER, REDISTRIBUTION, HISTORY CONFERRAL and the PROHIBITION on a management act producing a commercial fact (`I-6`, `I-7`, `J-16`). **ONE construct — AD-01I `I-8`'s work mandate — is a management-created WORK OBLIGATION** — [§5.2](#52-the-manager-task-hunt-run-to-exhaustion-across-thirty-six-files) |
| **5** | ⚠ **`reporting hierarchy` / `reporting manager`** | ⚠ **⟦SOURCE⟧ consolidated **§3** names *Manager / Reporting Manager* as a role and **§16** gives *Reporting Managers/Sales Heads* the privileged transfer surface. **`U-10` records that ⟦SOURCE⟧ §03's eleven roles do NOT include *Reporting Manager*, and `R2` forbids branching on a role name** — [§9.2](#92-the-management-scope-definition-and-what-it-does-and-does-not-answer-for-u-10-and-m-7) |
| **6** | ⚠ **`first response`** | ⚠ **Four clocks registered (`V-20`, `W-4`), **NONE SELECTED**; the storage prohibition at `03f` §7.2 class 8; the *"system-generated first-entry events"* phrase in consolidated §9** |
| **7** | ⚠ **`Overdue` / `Today` / `Future`** | ⚠ **`PO LOCKED` as DERIVED at AD-01A §8.1 and reconfirmed at AD-01F `C-11` and AD-01AC §10.1. ⚠ **AND consolidated §11's PREDICATE — *"scheduled … time has passed"* — which `PO-AF1·M.3` now contradicts** |
| **8** | ⚠ **`communication type`** | ⚠ **ZERO HITS IN THE ENTIRE REPOSITORY. **NEW VOCABULARY** |
| **9** | ⚠ **`success reason`** | ⚠ **ZERO HITS IN THE ENTIRE REPOSITORY. **NEW VOCABULARY, AND MANDATORY IN A LOCKED CAPTURE CONTRACT** → `AC-59` |

---

## 2. PO decisions incorporated

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 2.** **Every sub-clause of `PO-AF1` is listed with what it
> DOES to the corpus. ⚠ **A sub-clause that merely restates something already locked is marked
> `RESTATEMENT` and is NOT counted as an incorporation, on `PO-AB5`'s own arithmetic.**

| Sub-clause | Subject | Effect on the corpus | Class |
|---|---|---|---|
| **`·A.1`–`·A.6`** | Process and status labels | ⚠ **RESTATEMENT of the process the series has followed since AD-01N, plus the five-way taxonomy AD-01AA §0.8 first applied. **Nothing in the product model moves** | ⚠ **`RESTATEMENT`** |
| **`·B.1`–`·B.6`** | Management scope = the reporting tree; project membership does not expand it | ⚠ **NEW LOCK ON A PREVIOUSLY-DERIVED BOUNDARY.** **`PO-AE1·O.4` locked *search visibility ≠ operational authority*; `·B` locks **WHAT DEFINES THE SCOPE ITSELF**. ⚠ **AND `·B.5` is the widest statement in the corpus: EVERY direct or indirect ancestor** | ⚠ **`PO LOCKED` — NEW** |
| **`·B.7`** | Managers VIEW-ONLY except authorized transfer/reassignment | ⚠ **RESTATEMENT of `PO-AE1·O` in its view-only limb; **NEW in its *"authorized"* qualifier, which no source defines** | ⚠ **`PO LOCKED` — PART NEW.** → `AC-55` |
| **`·B.8`** | Managers do NOT create/assign/reassign/complete/modify/manage customer tasks or follow-ups | ⚠ **NEW PROHIBITION, AND THE ONLY EXPRESS SUPERSESSION IN `PO-AF1`** | ⚠ **`PO LOCKED` — NEW.** → `X-42` |
| **`·B.9`** | Only the current Client Owner / Sales Rep may create and manage customer operational activities and follow-ups | ⚠ **NEW EXCLUSIVITY. **Re-confirms `PO-AE1·H.1`'s `Dump` exclusivity and EXTENDS it to every activity and follow-up. ⚠ **AND IT NAMES *"Client Owner / Sales Rep"* AS ONE THING WHERE ⟦SOURCE⟧ **§10** AND CONSOLIDATED **§12** CARRY *Inquiry Owner* AND *Assigned To / Lead Handler* AS TWO** | ⚠ **`PO LOCKED` — NEW.** → `AC-55`(d) |
| **`·B.10`** | The express manager-task supersession | ⚠ **AN INSTRUCTION TO THE ARCHITECT, EXECUTED AT [§5.2](#52-the-manager-task-hunt-run-to-exhaustion-across-thirty-six-files)** | ⚠ **`PO LOCKED` — NEW** |
| **`·C.1`** | The current owner creates the activity | ⚠ **RESTATEMENT of `·B.9`** | ⚠ **`RESTATEMENT`** |
| **`·C.2`, `·C.3`** | Every activity begins with a Communication Type from a configured set | ⚠ **NEW NAMED DIMENSION. **Consolidated §10 carried *"Activity type — type of sales action such as a call or other supported outreach"*; `·C.3` NAMES the set and makes it CONFIGURED, which engages `R4`** | ⚠ **`PO LOCKED` — NEW** |
| **`·C.4`** | Communication Type and Activity Outcome are SEPARATE dimensions | ⚠ **THE STRUCTURAL CORE OF THE WHOLE ACTIVITY CLAUSE, AND IT RESOLVES A CONFLATION CONSOLIDATED §10 CARRIED** — [§7.2](#72-the-activity-model-reconciled-against-consolidated-10-and-ad-01f-74) | ⚠ **`PO LOCKED` — NEW** |
| **`·C.5`** | Outcome ∈ {FOLLOW-UP, SUCCESS, DUMP} | ⚠ **RESTATEMENT in substance — AD-01F §2.2 item 8 recorded *"the loop ends in one of three ways, and they are mutually exclusive in the capture surface: Follow Up, Success, Dump."* ⚠ **NEW only in that it is now an ATTRIBUTE OF THE ACTIVITY rather than a description of the capture surface** | ⚠ **`PO LOCKED` — PART NEW** |
| **`·D.1`, `·D.2`** | Follow-up capture fields | ⚠ **NARROWS consolidated §10's field list to the FOLLOW-UP branch** — [§5.7](#57-narrowed-not-superseded-the-five-cases). ⚠ **`V-19` (must response/sub-response carry semantic classification?) is NOT answered and is now IN A LOCKED CONTRACT** | ⚠ **`PO LOCKED` — NEW SCOPING** |
| **`·E.1`, `·E.2`** | Success capture fields; the proceeded timestamp is authoritative | ⚠ **`Success Reason` IS NEW VOCABULARY WITH NO VALUES AND NO FRAMEWORK** → `AC-59`. ⚠ **`·E.2` is a SOURCE-OF-TRUTH rule about the activity's own timestamp and is `PO LOCKED`; it does NOT speak to `Q4`/`V-22`'s question of who sets lead `Success`** — [§4.5](#45-q4-and-v-22-checked-and-not-reached) | ⚠ **`PO LOCKED` — NEW** |
| **`·F.1`, `·F.2`, `·F.5`** | Dump capture; reason mandatory; remarks cannot replace it | ⚠ **RESTATEMENT AND REINFORCEMENT of AD-01A §8.3 (*"a terminal non-conversion disposition must carry a reason"*) and §3.7** | ⚠ **`RESTATEMENT`, reinforced** |
| **`·F.3`, `·F.4`** | A canonical framework/master; tenant extension under the three fixed classifications | ⚠ **RESTATEMENT OF AD-01A §8.3 **VERBATIM IN ITS THREE DIMENSIONS** — validity class, responsibility locus, recoverability posture. ⚠ **AND A GENUINE SHARPENING: the classifications now bind TENANT-DEFINED reasons explicitly, which AD-01A §8.3 implied and did not state** | ⚠ **`RESTATEMENT` + `PO LOCKED` sharpening** |
| **`·F.6`, `·F.7`** | Recoverability does NOT prevent revival; it is decided case-by-case | ⚠ **NEW, AND IT REMOVES DIMENSION C's STATED PURPOSE WHILE KEEPING DIMENSION C** — [§5.8](#58-dimension-cs-rationale-superseded-while-dimension-c-itself-is-reaffirmed) | ⚠ **`PO LOCKED` — NEW** |
| **`·G.1`–`·G.5`** | Activity immutability; append-only; correction by new activity; no First-Response recalculation | ⚠ **NEW, AND THE ENABLING PREMISE FOR `·H`. **Aligned with `R6` and ⟦SOURCE⟧ §07's preserve-historical-truth posture, and NOT derivable from either — both forbid DESTROYING history; neither forbids EDITING a business record in place** | ⚠ **`PO LOCKED` — NEW.** → `X-45` |
| **`·H.1`–`·H.5`** | First Response is a SYSTEM-DERIVED, SEPARATELY RECORDED milestone distinct from the activity | ⚠ **SUPERSEDES AD-01F §7.2 class 8** — [§5.5](#55-first-response-the-storage-prohibition-superseded-and-why-it-is-a-supersession-and-not-a-refutation) | ⚠ **`PO LOCKED` — NEW.** → `X-44` |
| **`·I.1`–`·I.7`** | Qualifying events; attempts count; Dump-as-FR; Success-as-FR; no special FR event type for Dump | ⚠ **ANSWERS `V-4` IN ITS FIRST-RESPONSE LIMB ONLY. **CONFIRMS AD-01 §6.1's `New → Dump` and `New → Success` rows, both of which AD-01 flagged as real and *"must not be forbidden"*** | ⚠ **`PO LOCKED` — NEW, PARTIAL CLOSURE** |
| **`·J.1`–`·J.8`** | Per-cycle response intervals; transfer opens one; `No Response / Transferred` closes an unanswered one; the original FR is never rewritten | ⚠ **NEW MODEL. **It SELECTS two of `V-20`/`W-4`'s four clocks (creation→FR, custody/transfer→FR), ADDS a third (reactivation→FR at `·K`), and LEAVES assignment→FR unstated** | ⚠ **`PO LOCKED` — NEW.** → `X-44` |
| **`·J.9`** | CALENDAR elapsed time; not tenant working hours | ⚠ **ANSWERS `V-20`'s WORKING-HOUR LIMB. **Does not answer its timezone limb, which relocates to `·M`** | ⚠ **`PO LOCKED` — NEW, PARTIAL CLOSURE** |
| **`·K.1`–`·K.8`** | Revival cycles are independent and never overwrite | ⚠ **NEW, AND IT IS THE `PO-AE1·F`/`·G` REVIVAL SEEN FROM THE METRIC SIDE. **`·K.6`'s *never overwritten* is the same commitment `R6` makes about audit, applied to a metric** | ⚠ **`PO LOCKED` — NEW** |
| **`·L.1`–`·L.3`** | The timeline holds business activities AND system milestones, each with timestamp, actor/source, type, structured data | ⚠ **CONFIRMS AD-01F §7.2's READ-MODEL conclusion (*"one timeline is a correct read model"*) AND SUPERSEDES ITS CLASS-8 EXCLUSION. ⚠ **`·L.2`'s *actor/system source* is EXACTLY the user-versus-system distinction consolidated §8/§31 demand** | ⚠ **`PO LOCKED` — PART NEW, PART CONFIRMATION** |
| **`·L.4`, `·L.5`** | The screenshot is process evidence, not a UI spec | ⚠ **RESTATEMENT of consolidated §1/§24/§26 and AD-01F's standing screenshot rule** | ⚠ **`RESTATEMENT`** |
| **`·M.1`, `·M.2`, `·M.7`, `·M.8`** | Buckets are derived, never stored lifecycle state | ⚠ **RESTATEMENT of AD-01A §8.1, `PO LOCKED` since 2026-09-12 and reconfirmed at AD-01F `C-11` and AD-01AC §10.1** | ⚠ **`RESTATEMENT`** |
| **`·M.3`–`·M.6`** | The calendar-DATE `Overdue` predicate | ⚠ **SUPERSEDES CONSOLIDATED §11's *"scheduled … time has passed"* PREDICATE** — [§5.6](#56-the-overdue-predicate-superseded-by-the-owners-own-later-text) | ⚠ **`PO LOCKED` — NEW** |
| **`·N.1`–`·N.4`** | Notify around the scheduled time; cadence expressly OPEN; do not invent a schedule | ⚠ **AN EXPRESS `VALIDATE-OPEN`, DECLARED BY THE OWNER RATHER THAN FOUND BY THE ARCHITECT. ⚠ **AND IT IS THE FIRST TIME IN THE SERIES THE OWNER HAS OPENED AN ITEM IN THE SAME BREATH AS LOCKING ITS NEIGHBOURS** | ⚠ **`VALIDATE-OPEN` — DECLARED** |
| **`·O.1`–`·O.4`** | A qualifying activity auto-fulfils the pending follow-up; the old one stays reconstructable; no separate completion click | ⚠ **NEW. **`·O.2`'s *historically reconstructable* is `R6`'s posture applied to a follow-up's terminal state** | ⚠ **`PO LOCKED` — NEW.** → `X-46` |
| **`·P.1`–`·P.17`** | The customer / `Inquiry` reaffirmation list | ⚠ **SEVENTEEN RESTATEMENTS. **CHECKED ITEM BY ITEM AT [§4.2](#42-the-customer--inquiry-reaffirmation-list-checked-item-by-item-against-po-ae1). **ZERO counted as closures** | ⚠ **`RESTATEMENT`** |
| **`·Q.1`–`·Q.14`** | The CP / registration / commission reaffirmation list | ⚠ **FOURTEEN RESTATEMENTS, OF WHICH **TWELVE MAP EXACTLY** AND **TWO NAME AS LOCKED SOMETHING THE CORPUS RECORDS AS OPEN** — [§4.3](#43-the-cp--registration--commission-reaffirmation-list-checked-item-by-item-against-its-locking-decision). **ZERO counted as closures** | ⚠ **`RESTATEMENT`, with two discrepancy notices** |

---

## 3. New PO LOCKED decisions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 3.** ⚠ **THE COUNT IS STATED BEFORE THE LIST SO THAT PROSE
> CANNOT INFLATE IT. **`PO-AF1` HAS SEVENTEEN SUB-CLAUSE GROUPS AND **EIGHT** OF THEM CARRY GENUINELY
> NEW LOCKED CONTENT. **NINE ARE RESTATEMENTS, CONFIRMATIONS OR — IN `·N`'s CASE — AN EXPRESS
> NON-DECISION.**

### 3.1 The eight new locks

| # | New `PO LOCKED` rule | Clause | Why it is NEW and not a restatement |
|---|---|---|---|
| **1** | ⚠ **MANAGEMENT SCOPE IS THE REPORTING TREE, AND NOTHING ELSE EXPANDS IT** | `·B.1`–`·B.6` | ⚠ **⟦SOURCE⟧ consolidated §16 gave managers a transfer surface *"within the reporting hierarchy"*. **IT NEVER SAID THE HIERARCHY **DEFINES** THE SCOPE, AND IT NEVER EXCLUDED PROJECT MEMBERSHIP. **`·B.3`/`·B.4` DO BOTH** |
| **2** | ⚠ **MANAGERS HOLD NO TASK OR FOLLOW-UP AUTHORITY AT ALL** | `·B.8` | ⚠ **NO SOURCE EVER GRANTED IT AND NO SOURCE EVER DENIED IT. **THE PROHIBITION IS NEW LAW, NOT A CLARIFICATION** |
| **3** | ⚠ **ACTIVITY AND FOLLOW-UP AUTHORITY IS EXCLUSIVE TO THE CURRENT OWNER** | `·B.9` | ⚠ **`PO-AE1·H.1` LOCKED THIS FOR `Dump` ONLY. **`·B.9` EXTENDS IT TO EVERY ACTIVITY AND EVERY FOLLOW-UP** |
| **4** | ⚠ **COMMUNICATION TYPE AND OUTCOME ARE SEPARATE DIMENSIONS, AND EVERY ACTIVITY CARRIES BOTH** | `·C.2`–`·C.5` | ⚠ **CONSOLIDATED §10 CARRIED ONE FIELD — *Activity type* — AND NEVER SEPARATED THE CHANNEL FROM THE RESULT** |
| **5** | ⚠ **SAVED ACTIVITIES ARE IMMUTABLE, APPEND-ONLY, AND CORRECTED ONLY BY A FURTHER ORDINARY ACTIVITY** | `·G.1`–`·G.5` | ⚠ **`R6` MAKES THE **AUDIT LOG** APPEND-ONLY AND ⟦SOURCE⟧ §07 FORBIDS **DESTROYING** HISTORY. **NEITHER FORBIDS EDITING A BUSINESS RECORD IN PLACE, AND AD-01C §3.4 EXPRESSLY CONTEMPLATED A CORRECTION EVENT TYPE** |
| **6** | ⚠ **`First Response` IS A SEPARATELY RECORDED SYSTEM MILESTONE, PER RESPONSE CYCLE, NEVER RECALCULATED** | `·H`, `·J`, `·K` | ⚠ **THE ARCHITECTURE SAID *"must not be stored as an event"* IN TERMS** |
| **7** | ⚠ **RESPONSE METRICS USE CALENDAR ELAPSED TIME** | `·J.9` | ⚠ **`V-20` REGISTERED *"timezone/working-hour semantics"* AS OPEN, AND CONSOLIDATED §9 FLAGGED IT AS AN *"Open architecture detail"* IN THE OWNER'S OWN WORDS** |
| **8** | ⚠ **`Overdue` BEGINS ON THE FOLLOWING CALENDAR DATE, NOT AT THE SCHEDULED CLOCK TIME; AND A QUALIFYING ACTIVITY AUTO-FULFILS THE PENDING FOLLOW-UP** | `·M.3`–`·M.6`, `·O` | ⚠ **CONSOLIDATED §11 DEFINED `Overdue` THE OTHER WAY; AND NO SOURCE ANYWHERE DESCRIBED FULFILMENT AT ALL** |

### 3.2 What is NOT counted as a new lock, and why the discipline matters

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-455` — A DOCUMENT THAT COUNTS EVERY SENTENCE AS A DECISION MAKES THE
> LEDGER USELESS FOR DECIDING WHAT STILL NEEDS DECIDING.**
>
> | Not counted | Why |
> |---|---|
> | **`·A` (process and labels)** | ⚠ **A PROCESS INSTRUCTION TO THE ARCHITECT. **It governs how this document is written; it is not a product rule and cannot be built** |
> | **`·C.5`'s three outcomes** | ⚠ **AD-01F §2.2 ALREADY RECORDED THE THREE MUTUALLY-EXCLUSIVE OUTCOMES FROM THE OWNER'S OWN WORKFLOW. **Only their RELOCATION onto the activity is new, and that is counted inside lock 4** |
> | **`·F.1`–`·F.5`** | ⚠ **AD-01A §8.3 AND §3.7 ALREADY LOCKED A MANDATORY, CLASSIFIED `Dump` REASON. **The three dimensions are quoted back verbatim** |
> | **`·L.4`/`·L.5`** | ⚠ **THE SCREENSHOT RULE HAS BEEN THE SERIES' STANDING CONVENTION SINCE AD-01F §1.2** |
> | **`·M.1`/`·M.2`/`·M.7`/`·M.8`** | ⚠ **`PO LOCKED` AT AD-01A §8.1 ON 2026-09-12 AND RECONFIRMED TWICE. **Counting it again would be the third count of one decision** |
> | **`·N`** | ⚠ **AN EXPRESS NON-DECISION. **The owner says *"do not invent a final exact notification schedule"*, which is the opposite of a lock** |
> | **`·P` and `·Q`** | ⚠ **THIRTY-ONE RESTATEMENTS, ON `PO-AB5`'s OWN INSTRUCTION: *"Restating these is not a new closure of anything — do not count it as one."*** |

---

## 4. Existing decisions that remain valid

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 4.** ⚠ **A RECONCILIATION THAT REPORTS ONLY WHAT BREAKS IS
> NOT A RECONCILIATION. **THIS SECTION IS LONGER THAN [§5](#5-superseded-decisions) AND
> [§6](#6-contradicted-decisions) COMBINED, AND THAT IS THE CORRECT PROPORTION.**

### 4.1 The load-bearing confirmations

| # | Prior position | Its mint | Status under `PO-AF1` |
|---|---|---|---|
| **1** | ⚠ **`Today` / `Future` / `Overdue` are DERIVED operational buckets, never persisted lifecycle state; *Pending* is not a fifth state** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01A §8.1** (2026-09-12) | ⚠ **CONFIRMED FOR THE THIRD TIME, IN THE OWNER'S OWN WORDS AT `·M.7`/`·M.8`. ⚠ **AND THE TASK'S SPECIFIC QUESTION — *is derived-not-stored consistent with anything already committed as a stored field* — IS ANSWERED **YES, CONSISTENT**: AD-01 §5.1's *"Derived, never stored"* list, AD-01A §8.1, AD-01A §8.6's Orthogonal Lead Model, AD-01F `C-11` and AD-01AC §10.1 ALL SAY DERIVED, AND `00`/`schema-phase-0.sql` CONTAIN NO SUCH COLUMN TO CONFLICT WITH** |
| **2** | ⚠ **The three-dimension `Dump`-reason framework — validity class · responsibility locus · recoverability posture — system-owned, with values as tenant master rows under `R4`** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01A §8.3** | ⚠ **CONFIRMED VERBATIM BY `·F.4`, AND STRENGTHENED: the classifications now expressly bind TENANT-DEFINED reasons** — [§4.4](#44-the-dump-reason-framework-confirmed-verbatim-against-ad-01a-83) |
| **3** | ⚠ **A terminal non-conversion disposition must carry a reason; free text cannot substitute** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01A §8.3**; AD-01A §3.7 | ⚠ **CONFIRMED BY `·F.2`/`·F.5`, WITH `·F.5` STATING THE FREE-TEXT PROHIBITION MORE EXPLICITLY THAN ANY PRIOR TEXT** |
| **4** | ⚠ **One chronological timeline is a correct READ model; user-performed activities must be distinguishable from system-generated events** | ⟦SOURCE⟧ consolidated **§8**, **§31**; AD-01F §7.2 | ⚠ **CONFIRMED BY `·L.1`/`·L.2`. **`·L.2`'s mandatory *actor/system source* IS the distinction, stated as a data requirement rather than as a principle** |
| **5** | ⚠ **`New → Success` (direct conversion, no intervening follow-up) and `New → Dump` (immediate disqualification) are REAL transitions and *"must not be forbidden"*** | **AD-01 §6.1** | ⚠ **CONFIRMED AND MADE OPERATIONAL BY `·I.5` AND `·I.7`, WHICH GIVE BOTH CASES A DEFINED FIRST-RESPONSE SEMANTIC FOR THE FIRST TIME** |
| **6** | ⚠ **The `Follow-up → Follow-up` self-transition is *"the most frequent event in the system"* and *"must be recorded as an activity, not as a state change"*** | **AD-01 §6.1** | ⚠ **CONFIRMED EXACTLY. **`PO-AF1·D` IS THAT ACTIVITY, GIVEN A CAPTURE CONTRACT** |
| **7** | ⚠ **A management re-attempt must never be counted as customer demand; a management act cannot produce a commercial fact** | **AD-01F §12.4; AD-01I `I-6`/`I-7`; AD-01J `J-16`** | ⚠ **CONFIRMED AND REINFORCED. ⚠ **`·B.8`'s PROHIBITION MAKES `I-6` **STRUCTURAL RATHER THAN POLICED** IN ONE MORE PLACE: a manager who cannot create a follow-up cannot manufacture the operational evidence of demand either** |
| **8** | ⚠ **Custody ≠ entitlement; search visibility ≠ operational authority; grid presence ≠ read access** | **AD-01E §6.1; AD-01G §8.1; `PO-AE1·N`, `·O.4`** | ⚠ **CONFIRMED BY `·B.6` (*"management scope does NOT mean full operational control"*) and `·B.7`, AND BY `·P.13`–`·P.16`** |
| **9** | ⚠ **`Success` = ⟦SOURCE⟧ **§20** Stage 3 Booked, after builder-side verification; Booking has its own lifecycle the Lead Lifecycle must not absorb; a cancelled booking never rewrites `Success`** | ⟦PRODUCT-OWNER DECISION⟧ **AD-01A §8.2** (`Q4`, expressly not reopened since) | ⚠ **NOT REACHED AND THEREFORE UNCHANGED** — [§4.5](#45-q4-and-v-22-checked-and-not-reached) |
| **10** | ⚠ **Append-only history; never edit history; preserve historical truth** | ⟦SOURCE⟧ **§07**; `R6`; consolidated **§31** | ⚠ **CONFIRMED AND EXTENDED BY `·G`. ⚠ **AND THE EXTENSION IS NOT A DERIVATION: `R6` governs the AUDIT LOG and §07 forbids DESTROYING identity. **`·G.1`'s immutability of a BUSINESS record is the owner's own new rule and is recorded as such** |
| **11** | ⚠ **Semantics in columns, never in codes; reports must never branch on a type's code (`R4`); never branch on a role name (`R2`)** | `ENGINEERING_RULES.md` | ⚠ **UNTOUCHED AND NOW MORE LOAD-BEARING: `·C.3`'s *"configured/predefined set"*, `·F.4`'s tenant-defined reasons and `·B`'s manager vocabulary each engage one of them** |
| **12** | ⚠ **Tenant isolation is fail-closed; an unset tenant context matches zero rows** | `R1`; `PO-AE1·Q` | ⚠ **UNTOUCHED. `PO-AF1` names no tenant mechanism and reaches nothing here** |

### 4.2 The customer / Inquiry reaffirmation list, checked item by item against PO-AE1

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-456` — THE OWNER SAYS *"do NOT regress"*. **THE ARCHITECT'S JOB IS TO
> CHECK WHETHER ANYTHING IN `PO-AF1` DOES, AND TO REPORT THE ANSWER WHETHER OR NOT IT IS CONVENIENT.**
> ⚠ **SEVENTEEN ITEMS. **SIXTEEN MAP CLEANLY ONTO A `PO-AE1` SUB-CLAUSE. **ONE IS A RESTATEMENT THAT
> AD-01AE RECORDED AS GENUINELY OPEN, AND IT IS FLAGGED RATHER THAN WAVED THROUGH.**

| `·P` item | Maps to | Regressed by anything in `PO-AF1`? |
|---|---|---|
| **`·P.1`** — multiple Project Interests within one `Inquiry` | `PO-AE1·A.1`–`·A.3` | ⚠ **NO** |
| **`·P.2`** — Project Interests have NO independent commercial lifecycle/status | ⚠ **`PO-AE1` NEVER SAYS THIS.** ⚠ **AD-01AE §12.1 `AC-50`(a) ASKS PRECISELY WHETHER A PROJECT INTEREST CARRIES ITS OWN COMMERCIAL OUTCOME, AND RECORDS THE SILENCE AS *"total, not partial"*** | ⚠ **NOT REGRESSED — BUT THIS IS A **NEW STATEMENT DRESSED AS A REAFFIRMATION**, AND IT IS THE ONE ITEM IN `·P` THAT IS NOT A RESTATEMENT.** ⚠ **IT ANSWERS `AC-50`(a) IN THE NEGATIVE.** **RECORDED AT [§13.2](#132-items-answered-narrowed-or-re-homed-checked-individually) AND **NOT COUNTED AS A CLOSURE OF `AC-50`**, because `AC-50`(b) — where `Q4`'s `PO LOCKED` Success milestone attaches — and `AC-50`(c) are untouched** |
| **`·P.3`** — commercial status is at `Inquiry` level | ⚠ **Same as `·P.2`** | ⚠ **See `·P.2`. ⚠ **AND IT COLLIDES WITH `C-XXVI`'s PREMISE — [§8.5](#85-the-cp-chain-and-c-xxvi-checked-and-not-disturbed-with-one-exception)** |
| **`·P.4`** — `Dump` is a temporary WORK-STATE restriction | `PO-AE1·E.1`, `·E.6`, `·E.7` | ⚠ **NO** |
| **`·P.5`** — `Dump` retains Project Interests / history | `PO-AE1·E.2`, `·E.4`, `·E.5` | ⚠ **NO** |
| **`·P.6`** — customer return automatically revives the SAME `Inquiry` | `PO-AE1·F.1`–`·F.3` | ⚠ **NO. **`PO-AF1·K.2`/`·K.3` restate the same revival from the metric side** |
| **`·P.7`** — renewed interest creates a structured reactivation event referencing the Project Interest | `PO-AE1·F.8`, `·C.2` | ⚠ **NO** |
| **`·P.8`** — no duplicate Customer/Lead/`Inquiry` | `PO-AE1·B.1`, `·C.1`, `·C.2`, `·F.2` | ⚠ **NO** |
| **`·P.9`** — assignment follows the current responsible owner | `PO-AE1·H.2`, `·O.4` | ⚠ **NO** |
| **`·P.10`** — a dumped customer remains with the last owner unless transferred | `PO-AE1·E`, and AD-01AE `PF-428` observation 3 | ⚠ **NO** |
| **`·P.11`** — transfer of a `Dumped` customer revives it and makes it `New` under the new owner | `PO-AE1·G.4`, `·J.1` | ⚠ **NO — AND IT IS THE CLAUSE `X-43` TURNS ON** |
| **`·P.12`** — strict reporting hierarchy controls management scope | `PO-AE1·O`; `PO-AF1·B.1`–`·B.5` | ⚠ **NO — REINFORCED** |
| **`·P.13`** — without-history transfer is a genuine authorization boundary across UI/API/search/reports/exports | `PO-AE1·L.3`; AD-01E `R7`; `V-10` | ⚠ **NOT REGRESSED BY INTENT — ⚠ **BUT `PO-AF1·H`/`·J` CREATE A NEW SURFACE THAT `·P.13`'s OWN *"etc."* MUST NOW COVER AND THAT `V-10`'s LIST DOES NOT NAME** → `X-44` |
| **`·P.14`** — the current owner loses normal operational access after transfer | `PO-AE1·N.1` | ⚠ **NO** |
| **`·P.15`** — the previous owner may have historical/search access **only where the existing authorization rules permit it** | `PO-AE1·N.2`, `·O.2` | ⚠ **NO — AND THE HEDGE *"only where the existing authorization rules permit"* IS NOTABLY WEAKER THAN `PO-AE1·N.2`'s UNCONDITIONAL GRANT. ⚠ **IT IS READ AS A RESTATEMENT AND **NOT** AS A NARROWING OF `·N.2`, BECAUSE READING IT AS A NARROWING WOULD BE THE ARCHITECT RESOLVING `AC-51` BY INFERENCE** — recorded at [§13.3](#133-the-full-validate-open-register-carried-forward) |
| **`·P.16`** — managers view-only except authorized transfer/reassignment | `PO-AE1·O.3`, `·O.4`; `PO-AF1·B.7` | ⚠ **NO** |
| **`·P.17`** — project membership does not expand management authority | ⚠ **NEW AT `·B.4`; `PO-AE1` does not state it** | ⚠ **NO — it is `·B.4` restated inside the reaffirmation list** |

### 4.3 The CP / registration / commission reaffirmation list, checked item by item against its locking decision

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-457` — THE TASK REQUIRED THAT THIS LIST BE **CONFIRMED RATHER THAN
> ASSUMED**, AND CONFIRMING IT PRODUCED TWO DISCREPANCIES. ⚠ **NEITHER IS TREATED AS THE OWNER BEING
> WRONG. **A REAFFIRMATION LIST IS A MEMORY AID, AND THE CORPUS IS THE LEDGER. **WHERE THEY DISAGREE,
> THE ARCHITECT REPORTS THE DISAGREEMENT AND DOES NOT SILENTLY PROMOTE THE LIST OVER THE LEDGER, NOR
> THE LEDGER OVER THE LIST.**

| `·Q` item | Its locking decision, cited exactly | Verdict |
|---|---|---|
| **`·Q.1`** — registration is separate from attribution and commission | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB1`** (*"Registration does NOT automatically determine commission"*); **`PO-AB3`**; AD-01AB §3.5's four-layer determination | ⚠ **CONFIRMED LOCKED** |
| **`·Q.2`** — registration is Client × CP × Project scoped | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB1`**'s *"CP X + Client X + Project X"*; AD-01O `O-U`; AD-01P §3's `(CP, client, Project)` triple; AD-01AE `C-XXVI` corollary 4 | ⚠ **CONFIRMED LOCKED** |
| **`·Q.3`** — registration has a project policy snapshot | ⟦PRODUCT-OWNER DECISION⟧ AD-01O `OF-15`, on the owner's own words *"applicable lock-in policy snapshot"* and *"immutable"* | ⚠ **CONFIRMED LOCKED IN ITS FIRST HALF.** ⚠ **`AC-7`'s SECOND HALF — RE-BASING — WAS NARROWED AND CARRIED FORWARD BY AD-01O `A-22` AND IS **STILL OPEN**. **The reaffirmation does not reach it and is not read as reaching it** |
| **`·Q.4`** — **"Day 0/calendar-day rule is locked"** | ⚠ **SPLIT VERDICT, AND THIS IS DISCREPANCY 1** | ⚠ **THE **ZERO-INDEXING ORIGIN** IS CORROBORATED: AD-01N §591 fixes *"`D = B − R`, in whole calendar days, so that `D = 0` on the registration date itself"*, and AD-01T §722 derives convention α from it under zero-indexing. ⚠ **THE **BOUNDARY CONVENTION** IS **NOT LOCKED**: `AC-6` — *is the last eligible day `registration date + N` (α) or `+ N − 1` (β), and is `N = 0` a legal configuration* — WAS RE-CHECKED AT SOURCE BY AD-01T, AD-01U, AD-01V, AD-01Y, AD-01Z, AD-01AA §0.2, AD-01AB §0.2 AND AD-01AE §14.4 AND IS `VALIDATE-OPEN` IN EVERY ONE.** ⚠ **AD-01AC §10.3's *"EIGHTH-DOCUMENT DISCREPANCY NOTICE — that the owner LISTS it among already-locked decisions and it is NOT locked"* IS CARRIED FORWARD AS THE **NINTH**, UNCHANGED, UNENLARGED AND UNDISCHARGED** |
| **`·Q.5`** — registration can remain valid independently of `Inquiry` status | ⟦PRODUCT-OWNER DECISION⟧ **`AC-14`**, CLOSED at AD-01R | ⚠ **CONFIRMED LOCKED** |
| **`·Q.6`** — expired registration does not automatically disqualify a CP | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB3`** (*"EXPIRED registration ≠ automatic disqualification"*); **`PO-AA2`**; **`PO-AB2`** | ⚠ **CONFIRMED LOCKED** |
| **`·Q.7`** — valid registration does not automatically guarantee commission | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB3`** (*"LIVE registration ≠ automatic commission"*) | ⚠ **CONFIRMED LOCKED** |
| **`·Q.8`** — the Site Head has final commission allocation authority | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB3`**, **`PO-AB4`**, **`PO-U1`** | ⚠ **CONFIRMED LOCKED** |
| **`·Q.9`** — Stage-1 attribution and Stage-2 allocation are separate | ⟦PRODUCT-OWNER DECISION⟧ **`PO-W1`**; **`PO-AB5`**(1); AD-01W; AD-01X | ⚠ **CONFIRMED LOCKED** |
| **`·Q.10`** — a non-claimant CP can receive Stage-2 commission | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AA1`**; **`AC-38`** CLOSED at AD-01AA §2.4 | ⚠ **CONFIRMED LOCKED** |
| **`·Q.11`** — a Stage-2 split can be discretionary | ⟦PRODUCT-OWNER DECISION⟧ **`PO-U1`**; **`PO-AB2`**'s four outcomes (*"CP-A gets it, CP-B gets it, split, or Direct/no-CP"*) | ⚠ **CONFIRMED LOCKED** |
| **`·Q.12`** — **"commission approval/revision rules already locked"** | ⚠ **DISCREPANCY 2** | ⚠ **THE **APPROVAL** LIMB IS LOCKED — `PO-AB4`'s authority list and `AC-41`'s two closed limbs (AD-01AA §11.4). ⚠ **THE **REVISION** LIMB IS **NOT**: `AC-48` — *by what rule may a Site Head revoke or change a Stage-2 commission decision* — WAS MINTED BY AD-01AB §11.4 **ON `PO-AB4`'s OWN INSTRUCTION** (*"if undefined, record as open rather than guessing"*), IS `VALIDATE-OPEN`, AND AD-01AE §14.4 RE-CHECKED IT AND FOUND IT *"Not reached. Still blocks `M-9`."*** ⚠ **`PO-AB4`'s OWN CRITICAL RESTRICTION — *"'Site Head can revoke commission' must NOT be expanded into a new unrestricted revocation policy"* — IS CARRIED FORWARD UNCHANGED, AND NOTHING IN `PO-AF1` EXPANDS IT** |
| **`·Q.13`** — registration history remains visible as evidence/history | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AB1`**, **`PO-AB2`** | ⚠ **CONFIRMED LOCKED** |
| **`·Q.14`** — do not restore *"registration validity = commission eligibility"* | ⟦PRODUCT-OWNER DECISION⟧ **`NF-28` conjunct (iii) SUPERSEDED** at AD-01AB §3.4; **`PO-AA2`**; `X-33` resolved at AD-01AB §2.5 | ⚠ **CONFIRMED LOCKED, AND NOTHING IN `PO-AF1` COMES NEAR IT — `PO-AF1` MENTIONS NO CP SUBJECT ANYWHERE** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-458` — THE RESULT, STATED AS A COUNT. **TWELVE OF FOURTEEN CONFIRMED
> LOCKED; ONE (`·Q.3`) CONFIRMED IN ITS FIRST HALF WITH `AC-7`'s SECOND HALF STILL OPEN; TWO (`·Q.4`,
> `·Q.12`) NAME AS LOCKED SOMETHING THE LEDGER RECORDS AS `VALIDATE-OPEN`.** ⚠ **NO REGRESSION IS
> FOUND ANYWHERE, AND NO `AC-` ITEM IS CLOSED BY THE LIST.**

### 4.4 The Dump-reason framework, confirmed verbatim against AD-01A §8.3

> ⟦PRODUCT-OWNER DECISION — AD-01A §8.3, 2026-09-12⟧ ***"Approve the three-dimensional semantic
> framework … (a) opportunity validity class, (b) responsibility locus, (c) recoverability posture. **Do
> not** invent or finalize arbitrary reason values yet — the dimensions are approved; the tenant-facing
> reason vocabulary is not."***
> ⟦PRODUCT-OWNER DECISION — `PO-AF1·F.4`⟧ ***"tenant-defined reasons must carry the required BMexa
> structural classifications: validity class, responsibility locus, recoverability posture."***

| Test | Result |
|---|---|
| **Are the three dimensions the same three?** | ⚠ **YES — NAME FOR NAME, IN THE SAME ORDER. **THE CLOSEST VERBATIM MATCH BETWEEN TWO INDEPENDENTLY-AUTHORED OWNER TEXTS ANYWHERE IN THE CORPUS** |
| **Does `·F` supply any reason VALUE?** | ⚠ **NO. NOT ONE.** ⚠ **`N-4` — *the Dump reason vocabulary* — IS THEREFORE OPEN FOR A **TWENTY-FIFTH CONSECUTIVE DOCUMENT**, with `PO-R1`'s locked money rule still reading a classification with zero approved values** |
| **Does *"BMexa has a canonical Dump Reason framework/master"* MINT a BMexa-supplied value set?** | ⚠ **UNDETERMINED, AND NOT RESOLVED HERE.** **The sentence is equally readable as *"the three-dimension FRAMEWORK is BMexa's"* — which is AD-01A §8.3 exactly — and as *"BMexa ships a seeded MASTER of default reasons"* — which would be new. ⚠ **AD-01A §3.8 EXPRESSLY LEFT OPEN *"whether the existing seeded `lead_loss_reasons` rows are replaced outright"*.** ⚠ **RECORDED AS `VALIDATE-OPEN` AT [§13.3](#133-the-full-validate-open-register-carried-forward) AND **NOT** MINTED AS AN `AC-` ITEM, BECAUSE `N-4` ALREADY OWNS THE VALUES AND MINTING A SECOND ITEM OVER ONE SUBJECT INFLATES THE REGISTER** |
| **Does `·F` engage `R4`?** | ⚠ **YES, AND CORRECTLY: tenant-configurable rows carrying system-owned semantic columns IS `R4`'s *"masters not enums; semantics in columns"* exactly** |
| **Does `·F.5` add anything?** | ⚠ **YES — A PROHIBITION AD-01A §3.7 IMPLIED AND NEVER STATED: *"free-text remarks cannot replace the required Dump Reason."* **It forecloses the cheapest way a capture surface could evade the classification** |

### 4.5 Q4 and V-22, checked and NOT reached

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-459` — THE CHECK IS RUN BECAUSE `PO-AF1·E` PUTS THE WORD *SUCCESS* IN A
> REP-OPERATED CAPTURE SURFACE, WHICH IS EXACTLY THE SHAPE AD-01F `C-7` FLAGGED, AND A CARELESS READING
> WOULD TREAT `·E.1` AS REOPENING `Q4`.**
>
> | Question | Answer |
> |---|---|
> | **Does `·E.1` make the rep's click set the LEAD's `Success` lifecycle value?** | ⚠ **IT DOES NOT SAY SO, AND NOTHING HERE INFERS IT.** ⟦PRODUCT-OWNER DECISION⟧ **AD-01A §8.2 locked `Success` at ⟦SOURCE⟧ §20 **Stage 3 Booked**, after builder-side verification, and has been *"expressly not reopened"* in every document since AD-01F** |
| **Does `·I.7`'s *"authoritative Success / Booked milestone"* help?** | ⚠ **YES, AND IT IS THE STRONGEST TEXTUAL SUPPORT `Q4` HAS RECEIVED SINCE IT WAS DECIDED.** **The word *AUTHORITATIVE* is the owner's, it sits next to *Booked*, and it distinguishes the milestone from the rep's capture act** |
> | **Is `V-22` (*who or what SETS `Success` — handler assertion or system derivation*) therefore answered?** | ⚠ **NO — AND CALLING IT ANSWERED WOULD BE THE ARCHITECT DECIDING IT.** **`·E.1` describes a REP ACTION producing an ACTIVITY with outcome `SUCCESS`; `·I.7` describes an AUTHORITATIVE MILESTONE. ⚠ **WHETHER THEY ARE THE SAME EVENT, OR WHETHER THE REP's ACT MERELY STARTS ⟦SOURCE⟧ §20's WORKFLOW AS AD-01F `C-7` CONCLUDED, IS PRECISELY `V-22` AND IS **STILL OPEN**** |
| **Is `V-23` (the record's condition between booking initiation and Sales Support approval) reached?** | ⚠ **NO, AND IT IS NOW SHARPER: under `·C.5` every activity ends in ONE of three outcomes, so a rep who has initiated a booking must choose `FOLLOW-UP`, `SUCCESS` or `DUMP` for the interval `V-23` describes. **`N-2` remains on the critical path exactly as AD-01F §4 `C-7` recorded** |

---

## 5. Superseded decisions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 5, and the owner's `STEP 5` instruction. ⚠ **EVERY ITEM
> BELOW NAMES THE EXACT DOCUMENT AND SECTION, THE EXACT TEXT SUPERSEDED, THE EXACT CLAUSE THAT
> SUPERSEDES IT, AND WHICH OF `PF-450`'s THREE SENSES APPLIES. **NO PRIOR FILE IS EDITED.**

### 5.1 The supersession table

| # | Superseded text | Where, exactly | Superseded by | Sense |
|---|---|---|---|---|
| **S-1** | ⚠ ***"Computed metric entry — e.g. 'First response logged in 7 minutes' … **Must not be stored as an event.**"*** | ⚠ **`03f` — AD-01F **§7.2**, class 8 of the eight-class timeline test** | ⚠ **`PO-AF1·H.3`, `·H.4`, `·L.1`(B)** | ⚠ **(iii) — an architect derivation directly overruled by a later PO decision** |
| **S-2** | ⚠ ***"do not record a fact the system can compute, or the two will disagree"*** — **in its application to `First Response` only** | ⚠ **`03a` — AD-01A **§3.6**, as invoked by AD-01F §7.2** | ⚠ **`PO-AF1·G.4` (no recalculation) + `·H.3`** | ⚠ **(ii) — the derivation's PREMISE (that a later correction makes the two disagree) has been removed.** ⚠ **THE RULE ITSELF IS **NOT** SUPERSEDED IN GENERAL AND IS EXPRESSLY STILL IN FORCE FOR EVERY OTHER DERIVED FACT** — [§5.5](#55-first-response-the-storage-prohibition-superseded-and-why-it-is-a-supersession-and-not-a-refutation) |
| **S-3** | ⚠ ***"Overdue — **Scheduled follow-up/action time has passed** and required follow-up has not been completed"*** | ⚠ **`docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` **§11**, status table row 5** | ⚠ **`PO-AF1·M.3`–`·M.6`** | ⚠ **(i) — a PO text superseded by a later PO text** |
| **S-4** | ⚠ **Dimension C's STATED RATIONALE: *"Dimension C exists because it is the input to a decision already on the table … AD-01's `Q5` — can a Dumped lead be re-engaged … Without C, `Q5` has to be answered uniformly for all Dumps, which is plainly wrong"*** | ⚠ **`03a` — AD-01A **§3.5*** | ⚠ **`PO-AF1·F.6` (*"recoverability is NOT a property that prevents revival"*)** | ⚠ **(ii) — the rationale's premise is removed; **DIMENSION C ITSELF IS REAFFIRMED BY `·F.4` AND IS NOT SUPERSEDED** — [§5.8](#58-dimension-cs-rationale-superseded-while-dimension-c-itself-is-reaffirmed) |
| **S-5** | ⚠ **The actor cell *"Handler, **or a permitted reviewer**"* on the `New → Dump` transition** | ⚠ **`03` — AD-01 **§6.1**, lifecycle transition matrix, row 3** | ⚠ **ALREADY SUPERSEDED BY `PO-AE1·H.1` (*"only the CURRENTLY ASSIGNED Sales Rep can Dump; the Site Head cannot directly Dump"*); **RE-CONFIRMED BY `PO-AF1·B.9`*** | ⚠ **(i) — AND IT IS RECORDED HERE AS **ALREADY SUPERSEDED**, NOT AS A NEW SUPERSESSION, SO IT IS NOT DOUBLE-COUNTED** |
| **S-6** | ⚠ **AD-01A §5.4/§5.7's *"Pending Enrichment becomes a **task** plus a derived completeness check"*, and §5.4's *"the follow-up / **task** record that §13 and §14 require"*** | ⚠ **`03a` — AD-01A **§5.4**, **§5.7**; reflected in the PO text at **§8.5** (*"Owner, Handler, Assignment History, activities, **tasks**, and derived completeness/work-queue conditions"*)** | ⚠ **`PO-AF1·B.8`/`·B.9` — **IN ITS AUTHORSHIP LIMB ONLY**** | ⚠ **`NARROWED`, NOT SUPERSEDED** — [§5.3](#53-the-three-constructs-the-supersession-reaches-and-with-what-force) |
| **S-7** | ⚠ **AD-01F §7.4's conceptual activity field list — *"activity type; response type; sub-response; remarks; next follow-up date/time …"*** | ⚠ **`03f` — AD-01F **§7.4*** | ⚠ **`PO-AF1·C.4` + `·D.1`/`·E.1`/`·F.1`** | ⚠ **`NARROWED` AND RE-SHAPED, NOT SUPERSEDED: every listed concept survives; *activity type* SPLITS into Communication Type × Outcome, and *response type*/*sub-response*/*next follow-up* become conditional on the FOLLOW-UP branch** — [§5.7](#57-narrowed-not-superseded-the-five-cases) |
| **S-8** | ⚠ **AD-01C §3.4's requirement that corrections be *"a separate, authorized, audited event type sitting outside the ordinary transition machine"*, **in its ACTIVITY-LEVEL application only*** | ⚠ **`03c` — AD-01C **§3.4** (`S3`)** | ⚠ **`PO-AF1·G.3` (*"no special 'correction of activity' relationship is required"*)** | ⚠ **(iii) at the ACTIVITY level; ⚠ **AND **NOT SUPERSEDED AT ALL** AT THE LIFECYCLE LEVEL, WHERE AD-01C §3.4's SUBJECT ACTUALLY LIES** — [§6.4](#64-x-45--the-correction-route-that-the-act-being-corrected-disables) |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-460` — THE COUNT, STATED HONESTLY. **EIGHT ROWS; **FOUR** ARE GENUINE
> SUPERSESSIONS (`S-1`, `S-2`, `S-3`, `S-4`); **ONE** IS AN ALREADY-EXISTING SUPERSESSION RE-CONFIRMED
> AND EXPRESSLY NOT RE-COUNTED (`S-5`); **TWO** ARE `NARROWED` RATHER THAN SUPERSEDED (`S-6`, `S-7`);
> AND **ONE** IS SUPERSEDED IN ONE APPLICATION AND UNTOUCHED IN THE ONE THAT MATTERS (`S-8`).**
> ⚠ **CLAIMING EIGHT WOULD BE INFLATION. **THE NUMBER IS FOUR.**

### 5.2 The manager-task hunt, run to exhaustion across thirty-six files

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-461` — `PO-AF1·B.10` IS AN INSTRUCTION TO FIND SOMETHING, AND THE ONLY
> HONEST WAY TO EXECUTE IT IS TO SEARCH EXHAUSTIVELY AND THEN REPORT WHAT WAS FOUND — INCLUDING, IF IT
> IS THE TRUTH, THAT LESS EXISTS THAN THE INSTRUCTION ASSUMES.**

**The owner's sentence, restated exactly so the hunt has a target:**
⟦PRODUCT-OWNER DECISION — `PO-AF1·B.10`⟧ ***"All previous discussion about 'manager-created management
tasks', manager task assignment, task escalation, task reassignment, task completion, etc. is
SUPERSEDED and must not remain as an active product rule."***

**The five named targets, hunted individually:**

| Target | Searched | Found |
|---|---|---|
| ⚠ **"manager-created management tasks"** | ⚠ **All thirty-six architecture files + three `docs/` sources** | ⚠ **THE PHRASE APPEARS **NOWHERE**. **No document in this repository has ever used it** |
| ⚠ **manager task ASSIGNMENT** | ⚠ **`task` in every file; `manager … assigns`; `management act`** | ⚠ **ONE construct: AD-01A §5.4's enrichment *task* *"assigned to the handler"* (§43's accountability), whose ASSIGNER is never named** |
| ⚠ **task ESCALATION** | ⚠ **`escalat` across the whole corpus — 40+ hits examined individually** | ⚠ **EVERY HIT RESOLVES TO ⟦SOURCE⟧ **§58**'s *escalation for missed follow-ups*, or to `Q14`/`Q2`/`N-2`/`X-6`, or to the CP-chain's `AC-` escalation metaphor (*"the sharpest `AC` escalation in this document"*), or to `PF-431`'s PRIVILEGE escalation. ⚠ **NOT ONE DESCRIBES A MANAGER ESCALATING A TASK TO A PERSON** |
| ⚠ **task REASSIGNMENT** | ⚠ **`task.{0,15}(reassign\|escalat)`; `reassign`** | ⚠ **ZERO HITS FOR TASK REASSIGNMENT. **Every *reassignment* hit is RECORD reassignment — AD-01A §5.3's *Reassignment Pending* (which §8.5 `DO NOT CREATE`s), `PO-AE1·G.3`, `PO-AE1·I.1`** |
| ⚠ **task COMPLETION** | ⚠ **`complete` near `task`/`follow-up`** | ⚠ **ZERO HITS FOR A MANAGER COMPLETING ANYTHING. **The only completion concept is AD-01A §5.4/§5.7's *derived completeness check*, which is a DATA-COMPLETENESS predicate, not a task state** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-462` — THE HEADLINE RESULT, AND IT IS THE OPPOSITE OF WHAT A
> SUPERSESSION INSTRUCTION USUALLY PRODUCES.** ⚠ **THE WORD *TASK* DOES NOT APPEAR EVEN ONCE IN
> `docs/BMEXA_MASTER_SPEC.md`'s NINETY-SEVEN SECTIONS. **THE CANONICAL SPECIFICATION HAS NO TASK
> OBJECT.** ⚠ **AND IN THE ARCHITECTURE CORPUS, *task* OVERWHELMINGLY MEANS *THE ARCHITECT'S TASK
> BRIEF* — *"this task's scope"*, *"the options the task names"*, *"per this task's framing"*.**
> ⚠ **A READER WHO GREPS `task` AND CONCLUDES THE CORPUS IS FULL OF MANAGER TASK RULES WILL BE WRONG,
> AND THAT IS ITSELF THE MOST IMPORTANT THING THIS SECTION RECORDS.**

### 5.3 The three constructs the supersession reaches, and with what force

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-463` — THREE CONSTRUCTS IN THE CORPUS ARE CUSTOMER-SCOPED OBLIGATIONS
> THAT A NON-OWNER COULD CREATE. **EACH IS NAMED WITH ITS EXACT CITATION AND ITS EXACT STATUS, AND THE
> THREE STATUSES ARE DIFFERENT.**

#### Construct 1 — AD-01A §5.4 / §5.7's **enrichment task** · `NARROWED`

⟦SOURCE⟧ **`03a` — AD-01A §5.4, verbatim:** ***"the durable thing is the **obligation**, and the system
already has the construct for a durable obligation with an owner and a date: **the follow-up / task
record that §13 and §14 require**."*** **AD-01A §5.2's table row: *"Pending Enrichment — An open
enrichment task **assigned to the handler**, plus completeness against tenant-configured required
fields (§42, §43)."*** **AD-01A §5.7, `RECOMMENDED`: *"`Pending Enrichment` becomes a **task** plus a
derived completeness check (subject to AD-01 `Q8`, still open)."***

| Test | Result |
|---|---|
| **Is this a CUSTOMER-SCOPED obligation?** | ⚠ **YES. It attaches to a lead record and has an owner and a date** |
| **Does the corpus say WHO creates it?** | ⚠ **NO. **AD-01A §5.4 says it is *"assigned to the handler"* and never names the assigner. ⟦SOURCE⟧ §43 is permissive — *"the system **can** maintain a pending enrichment queue"* — and frames the purpose as *"create accountability without blocking urgent sales activity"*, which points at management or at the system** |
| **Does `PO-AF1·B.8` reach it?** | ⚠ **IT REACHES ITS **AUTHORSHIP** AND NOTHING ELSE.** ⚠ **IF THE ENRICHMENT TASK IS EVER CREATED BY A MANAGER, THAT IS NOW FORBIDDEN. **IF IT IS SYSTEM-GENERATED OR OWNER-CREATED, `·B.8` DOES NOT TOUCH IT, BECAUSE `·B.8` FORBIDS **MANAGERS**, NOT TASKS** |
| **Status** | ⚠ **`NARROWED`. ⚠ **`Q8` (*is the enrichment queue in MVP scope*) REMAINS OPEN AND MUST NOW BE ANSWERED WITH `·B.8` IN VIEW** → `A-100` |

#### Construct 2 — AD-01I `I-8`'s **work mandate** · `UNDETERMINED`

⟦SOURCE⟧ **`03i` — AD-01I §12, `I-8`, verbatim:** ***"the work obligation is represented by the **intent
recorded on the assignment act that opened the current custody interval**. No new entity, no new
lifecycle value, no persisted record-level condition. The carrier is the **Assignment Log**."***
**And AD-01I §12.1's own priced cost: *"The work queue acquires a second producer — a record may be in
a handler's set **because management put it there**, with no commercial unit underneath."***

| Test | Result |
|---|---|
| **Is this a customer-scoped obligation created by a manager?** | ⚠ **YES, UNAMBIGUOUSLY. **It is the corpus's ONLY management-created work obligation, and AD-01I names it as such in its own cost table** |
| **Is it a *task* or a *follow-up* in `PO-AF1·B.8`'s sense?** | ⚠ **UNDETERMINED, AND THE ARCHITECT WILL NOT DECIDE IT.** ⚠ **AGAINST: `I-8` says *"no new entity"* — it is a PROPERTY OF A TRANSFER ACT, and `PO-AF1·B.7` EXPRESSLY PERMITS transfer/reassignment. **It carries no date, schedules no contact, and appears in no follow-up bucket.** ⚠ **FOR: it puts a record in a rep's working set that the rep did not put there, which is functionally what a manager-assigned task does, and AD-01I `Z-3` asks *where does a mandated record APPEAR, and may a next action be committed on it* — the exact question `·B.8` bears on** |
| **Does `PO-AE1·J.1` rescue it independently?** | ⚠ **PARTLY, AND THIS IS THE PRECISION THAT KEEPS THE FINDING HONEST.** ⚠ **`PO-AE1·J.1` ALREADY LOCKS THAT *"a transferred customer becomes `New` for the receiving rep"*, SO **MANAGEMENT PUTTING A RECORD IN A REP'S QUEUE IS ITSELF `PO LOCKED` AND SURVIVES `·B.8` UNTOUCHED.** ⚠ **WHAT IS UNDETERMINED IS NOT THE QUEUE ENTRY — IT IS THE **RECORDED MANDATE INTENT**, WHICH IS A SECOND FACT `PO-AE1` NEVER MENTIONS** |
| **Status** | ⚠ **`VALIDATE-OPEN`.** ⚠ **`I-8` IS **NOT** DECLARED SUPERSEDED, BECAUSE DECLARING IT SO WOULD SILENTLY RESOLVE A CONFLICT THE OWNER'S `STEP 7` FORBIDS RESOLVING** → `A-101`, `AC-55`(c), and `Z-3` now consumes both |

#### Construct 3 — ⟦SOURCE⟧ **§58 escalation for missed follow-ups** · `NOT REACHED`

**See [§5.4](#54-what-the-supersession-expressly-does-not-reach).**

### 5.4 What the supersession expressly does NOT reach

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-464` — THIS SUBSECTION EXISTS BECAUSE THE OWNER'S WORD *escalation*
> APPEARS IN THE SUPERSESSION SENTENCE AND ALSO APPEARS, MEANING SOMETHING COMPLETELY DIFFERENT, IN A
> ⟦SOURCE⟧ REQUIREMENT AND IN FOUR OPEN ITEMS. ⚠ **A CARELESS READER WOULD DELETE A REQUIREMENT THE
> OWNER HAS NEVER QUESTIONED.**

| Thing | Why `·B.10` does NOT reach it |
|---|---|
| ⚠ **⟦SOURCE⟧ **§58**'s *escalation for missed follow-ups*** | ⚠ **IT IS A **SYSTEM-GENERATED EXCEPTION / NOTIFICATION** MECHANISM OVER A DERIVED CONDITION, NOT A TASK A MANAGER CREATES, ASSIGNS, REASSIGNS OR COMPLETES. **AD-01 §9.4 places it in *exception reporting*; AD-01A §1.7 ties it to the derived Action-Feed buckets. ⚠ **AND `PO-AF1·N.1` ITSELF REQUIRES NOTIFICATION AROUND A SCHEDULED FOLLOW-UP, WHICH IS THE SAME FAMILY OF MECHANISM — THE OWNER IS BUILDING ON IT, NOT RETIRING IT** |
| ⚠ **`Q14`** — response-time SLAs and escalation thresholds | ⚠ **OPEN, UNTOUCHED. **`PO-AF1` PROPOSES NO THRESHOLD, TARGET OR WINDOW ANYWHERE, AND `·J.9`'s CALENDAR RULE IS A **MEASUREMENT** RULE, NOT AN SLA** |
| ⚠ **`N-2`** — which *waiting-on* values suppress §58 escalation | ⚠ **OPEN, UNTOUCHED, AND ON THE CRITICAL PATH FOR `V-23` EXACTLY AS AD-01F RECORDED** |
| ⚠ **`Q2`** — the maximum next-action horizon · **`X-6`** — `Q14 ← N-2` | ⚠ **BOTH OPEN, BOTH UNTOUCHED** |
| ⚠ **Manager TRANSFER and REASSIGNMENT authority** | ⚠ **EXPRESSLY PRESERVED BY `·B.7`'s own *"except for authorized client transfer/reassignment"*, and by `PO-AE1·I.1`, `·G.1`, `·G.3`** |
| ⚠ **Manager BULK transfer, and the ONE history setting per operation** | ⚠ **`PO-AE1·I.2`/`·I.3` — UNTOUCHED** |
| ⚠ **Manager VISIBILITY, including complete history regardless of the receiving rep's mode** | ⚠ **`PO-AE1·O.1` — UNTOUCHED AND REINFORCED BY `·B.5`** |
| ⚠ **The SITE HEAD's project-interest REMOVAL authority** | ⚠ **`PO-AE1·D.2` — UNTOUCHED. ⚠ **AND IT IS CHECKED EXPLICITLY, BECAUSE REMOVING A PROJECT INTEREST ON A REP'S REQUEST IS THE NEAREST SURVIVING THING TO A MANAGER ACTING ON A CUSTOMER RECORD. **IT IS NOT A TASK OR A FOLLOW-UP, AND `·B.7`'s VIEW-ONLY RULE DOES NOT NAME IT** → recorded at [§13.3](#133-the-full-validate-open-register-carried-forward) as a `VALIDATE-OPEN` tension between `·B.7` and `PO-AE1·D.2` |
| ⚠ **The SALES HEAD's manual revive authority** | ⚠ **`PO-AE1·G.1` — UNTOUCHED IN ITS EXISTENCE, **CONTRADICTED IN ITS EXCLUSIVITY** — `X-43`** |

### 5.5 First Response — the storage prohibition superseded, and why it is a supersession and not a refutation

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-465` — THIS IS THE DOCUMENT'S LARGEST SINGLE MOVE AND IT IS SET OUT IN
> FULL SO IT CAN BE ATTACKED.**

**The prior position, at its mint, verbatim.**
⟦SOURCE⟧ **`03f` — AD-01F §7.2, the eight-class timeline test, class 8:**
> | **8. Computed metric entry** — e.g. *"First response logged in 7 minutes"* | Author: **Nobody. It is
> a derivation** | FUT: n/a | Visibility: n/a | Canonical home: Computable from class 1 + creation /
> assignment times | ⚠ **Verdict: "Must not be stored as an event. AD-01A §3.6's rule applied exactly:
> recording it duplicates a computed fact and lets the two disagree after any correction."** |

**The new position, verbatim.**
⟦PRODUCT-OWNER DECISION — `PO-AF1·H.3`⟧ ***"(1) The actual activity is recorded as its own timeline
milestone. (2) BMexa derives the First Response metric. (3) BMexa **creates/records a separate
system-generated First Response milestone**."*** **And `·H.4`: *"The actual business activity and
First Response milestone are **distinct timeline events**."***

**The three tests that determine the classification.**

| Test | Result |
|---|---|
| **1. Was AD-01F WRONG?** | ⚠ **NO, AND SAYING SO WOULD BE FALSE.** **AD-01F's reasoning was valid on its own premises: a stored derivation and its source can disagree, and the mechanism by which they disagree is a LATER CORRECTION. **That is a sound argument** |
| **2. Has the PREMISE survived?** | ⚠ **NO — AND THE OWNER HAS REMOVED IT DELIBERATELY, IN THE SAME DECISION SET.** ⟦PRODUCT-OWNER DECISION⟧ **`·G.1`: activities are immutable. `·G.2`: no edit, delete, void or overwrite. `·G.4`: *"Do NOT recalculate historical First Response because of later correction activity."*** ⚠ **AD-01F's HAZARD WAS *"lets the two disagree **after any correction**"*. **THERE IS NOW NO CORRECTION TO A SAVED ACTIVITY, AND THE OWNER HAS EXPRESSLY FORBIDDEN RECALCULATION EVEN WHEN A LATER *"correction activity"* EXISTS.** ⚠ **THE MILESTONE AND THE ACTIVITY **CANNOT** DIVERGE, BECAUSE NEITHER MOVES** |
| **3. Did the SOURCE already point the other way?** | ⚠ **YES, AND THIS IS THE `PF-447`-CLASS FINDING.** ⟦SOURCE⟧ **Consolidated §9** excludes *"system-generated **first-entry events**"* from FUT. ⚠ **AN EXCLUSION RULE PRESUPPOSES THE THING IT EXCLUDES. **THE SOURCE HAD ALREADY TOLD THE ARCHITECTURE THAT A SYSTEM-GENERATED FIRST-ENTRY EVENT EXISTS, ON THE VERY PAGE AD-01F CITED FOR FUT** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-466` — THE CLASSIFICATION, AND WHY THE DISTINCTION IS NOT PEDANTRY.**
> ⚠ **`S-1` IS SENSE (iii) — AN ARCHITECT DERIVATION OVERRULED BY THE OWNER ON THE SAME SUBJECT. **THAT
> IS THE **NORMAL AND CORRECT** OUTCOME OF THE ASKING PROCESS AD-01F WAS WRITTEN TO PERFORM; AD-01F's
> OWN PREAMBLE SAYS SO: *"This document is the asking."*** ⚠ **`S-2` IS SENSE (ii) — AD-01A §3.6's
> DERIVATION RULE IS **NOT REPEALED**. **IT REMAINS IN FORCE FOR ENGAGEMENT DEPTH (AD-01A §3.6's actual
> subject), FOR THE ACTION-FEED BUCKETS (`·M.7`), FOR `New`'s THREE PREDICATES (`H-5`) AND FOR EVERY
> OTHER DERIVED CONDITION.** ⚠ **WHAT HAS CHANGED IS THAT ONE DERIVED FACT NOW SITS BEHIND AN
> IMMUTABILITY GUARANTEE THAT MAKES THE DISAGREEMENT HAZARD IMPOSSIBLE.**
>
> ⚠ **AND THE HAZARD IS **NOT** ZERO — IT HAS MOVED RATHER THAN VANISHED, WHICH IS RECORDED BECAUSE A
> SECTION THAT REPORTS ONLY THE GOOD NEWS IS NOT AN ANALYSIS: ⚠ **A `First Response` MILESTONE DERIVED
> FROM AN ACTIVITY THAT WAS RECORDED IN ERROR IS NOW **PERMANENTLY WRONG BY DESIGN**, BECAUSE `·G.4`
> FORBIDS RECALCULATION AND `·G.2` FORBIDS CORRECTION.** ⚠ **THAT IS THE PRICE OF THE GUARANTEE AND THE
> OWNER SHOULD HOLD IT KNOWINGLY** — [§11.5](#115-two-metrics-that-are-now-permanently-wrong-by-design-and-the-reason-is-a-locked-rule).

### 5.6 The Overdue predicate, superseded by the owner's own later text

| | |
|---|---|
| ⚠ **The older PO text** | ⟦SOURCE⟧ **Consolidated §11**, status table: ***"Overdue — **Scheduled follow-up/action time has passed** and required follow-up has not been completed; derived operational bucket."*** |
| ⚠ **The newer PO text** | ⟦PRODUCT-OWNER DECISION⟧ **`PO-AF1·M.3`**: ***"the follow-up does NOT become Overdue immediately when the exact scheduled clock time passes"***; **`·M.4`**: ***"the entire scheduled calendar date remains 'Today'"***; **`·M.5`**: ***"it becomes Overdue starting on the following calendar day if still unresolved."*** |
| ⚠ **The concrete divergence** | ⚠ **A FOLLOW-UP SCHEDULED FOR 11:00 IS `Overdue` AT 11:01 UNDER THE OLD TEXT AND `Today` UNTIL THE DATE ENDS UNDER THE NEW ONE. **FOR A TEAM WORKING A DAY'S LIST, THAT IS THE DIFFERENCE BETWEEN A QUEUE THAT REPROACHES THE REP ALL AFTERNOON AND ONE THAT DOES NOT** |
| ⚠ **Governance** | ⚠ **NOT A STOP-AND-ASK. **The newer text is explicit, dated later, and addresses the exact predicate. **`PF-450` sense (i) applies, and AD-01AE's governance test resolves it the same way it resolved `PO-AD1·2`** |
| ⚠ **What is NOT superseded** | ⚠ **THE DERIVED-NOT-STORED RULE (AD-01A §8.1), THE THREE BUCKET NAMES, AND THE RETIREMENT OF THE WORD *PENDING* (consolidated §11's own PO clarification). ⚠ **`·M.7`/`·M.8` REAFFIRM ALL THREE IN THE OWNER'S OWN WORDS** |
| ⚠ **Amendment** | ⚠ **`A-96` — NAMED AND NOT MADE** |

### 5.7 NARROWED, not superseded — the five cases

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-467` — THE OWNER'S `STEP 5` ASKS FOR FOUR LABELS AND `NARROWED` IS THE
> ONE MOST EASILY MISUSED, BECAUSE CALLING A SUPERSESSION A NARROWING HIDES A CHANGE AND CALLING A
> NARROWING A SUPERSESSION DESTROYS A RULE THAT STILL WORKS.**

| # | Rule | How it narrows | Not superseded because |
|---|---|---|---|
| **N-1** | ⚠ **Consolidated §10's activity field list (*Activity type · Response type · Sub-response · Remarks · Next follow-up · Recorded time · Actor / handler · Timeline position*)** | ⚠ **IT IS NOW THE **FOLLOW-UP BRANCH ONLY**. **`SUCCESS` takes Communication Type + Success Reason + Success Remarks; `DUMP` takes Communication Type + Dump Reason + Dump Remarks** | ⚠ **EVERY FIELD SURVIVES SOMEWHERE, AND *Recorded time*, *Actor* AND *Timeline position* SURVIVE ON ALL THREE BRANCHES VIA `·L.2`** |
| **N-2** | ⚠ **AD-01F §7.4's conceptual activity carrier list** | ⚠ **AS `N-1`, PLUS: *activity type* SPLITS IN TWO (`·C.4`)** | ⚠ **AD-01F §7.4's *recorded time **and** effective time separately* (AD-01 §8.3, `E-23` — offline backdating) IS **NOT** CONTRADICTED BY `·E.2`'s *"authoritative activity timestamp"*, WHICH SPEAKS TO **WHICH MOMENT OF THE CAPTURE ACT** COUNTS, NOT TO THE RECORDED-VERSUS-EFFECTIVE SPLIT** — [§10.4](#104-offline-and-the-two-timestamps-checked-and-not-disturbed) |
| **N-3** | ⚠ **AD-01A §5.4/§5.7's enrichment *task*** | ⚠ **ITS AUTHORSHIP IS NOW CONSTRAINED: a manager may not create it (`·B.8`)** | ⚠ **`Q8` STILL OWNS WHETHER IT EXISTS AT ALL, AND ⟦SOURCE⟧ §43 IS STILL PERMISSIVE** |
| **N-4** | ⚠ **AD-01C §3.4's correction-event requirement** | ⚠ **IT NO LONGER APPLIES TO **ACTIVITY** RECORDS** | ⚠ **AD-01C §3.4's SUBJECT IS A **LIFECYCLE VALUE RECORDED IN ERROR** (*"a lead Dumped by mistake, a `Success` clicked on the wrong record"*), AND `PO-AF1·G` SPEAKS ONLY OF ACTIVITIES.** ⚠ **THE OVERLAP IS REAL AND IS `X-45`'s SUBJECT; THE **NON**-OVERLAP IS WHY THIS IS A NARROWING AND NOT A REPEAL.** ⚠ **`T-7` (a correction needs its own reason vocabulary) SURVIVES AT THE LIFECYCLE LEVEL AND **DISSOLVES AT THE ACTIVITY LEVEL**, and only the second half is recorded as narrowed** |
| **N-5** | ⚠ **`U-10` (*which principals are "authorized Reporting Managers"*) and `M-7`'s breadth vocabulary** | ⚠ **`·B.1`–`·B.5` SUPPLY THE **BREADTH RULE** `U-10` NEEDED: scope = the direct-and-indirect reporting tree, NOT a role name — which is exactly the shape `R2` demands** | ⚠ **`U-10`'s PRINCIPAL-IDENTIFICATION LIMB AND `M-7`'s VOCABULARY ARE **UNTOUCHED**: the tree says WHICH RECORDS a grant covers; it does not say WHICH GRANTS EXIST, who holds them, or how they are named** — [§9.2](#92-the-management-scope-definition-and-what-it-does-and-does-not-answer-for-u-10-and-m-7) |

### 5.8 Dimension C's rationale superseded, while Dimension C itself is reaffirmed

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-468` — A DIMENSION KEPT AND ITS PURPOSE REMOVED IS AN UNUSUAL RESULT AND
> IT IS STATED PLAINLY RATHER THAN SMOOTHED.**
>
> | | |
> |---|---|
> | **What AD-01A §3.5 said Dimension C was FOR** | ⟦SOURCE⟧ ***"Dimension C exists because it is the input to a decision already on the table and NOT resolved here: AD-01's `Q5` — can a Dumped lead be re-engaged … Without C, `Q5` has to be answered uniformly for all Dumps, which is plainly wrong — 'wrong number' and 'wants to buy after possession in 18 months' are not the same closure."*** |
> | **What `PO-AF1·F.6`/`·F.7` say** | ⟦PRODUCT-OWNER DECISION⟧ ***"Recoverability is NOT a property that prevents revival. Recoverability is decided case-by-case by authorized user/manager."*** |
> | **What follows** | ⚠ **`Q5` IS NOW ANSWERED **UNIFORMLY FOR ALL DUMPS** — which AD-01A §3.5 called *"plainly wrong"* — BECAUSE `PO-AE1·F` REVIVES **AUTOMATICALLY** ON ANY MATCHING FORM RESUBMISSION AND `PO-AE1·G` PERMITS MANUAL REVIVAL, NEITHER CONDITIONED ON A REASON'S CLASSIFICATION.** ⚠ **DIMENSION C'S GATE IS GONE** |
> | **Is Dimension C therefore removed?** | ⚠ **NO — AND THIS IS THE POINT. **`·F.4` REQUIRES IT ON EVERY TENANT-DEFINED REASON, BY NAME. **THE DIMENSION IS `PO LOCKED` TWICE OVER AND ITS STATED PURPOSE IS GONE** |
> | **What does it determine now?** | ⚠ **NOTHING THAT ANY SOURCE OR ANY DOCUMENT STATES.** ⚠ **IT MAY BE A PURE CLASSIFICATION/REPORTING PROPERTY; IT MAY INFORM — WITHOUT GATING — THE *"case-by-case"* JUDGEMENT `·F.7` ASSIGNS TO AN AUTHORIZED USER/MANAGER. ⚠ **NOTHING HERE CHOOSES**, and it is recorded as `VALIDATE-OPEN` at [§13.3](#133-the-full-validate-open-register-carried-forward) rather than minted as an `AC-` item, because it is a question about a property's FUNCTION and not about the model's SHAPE** |
> | **What this does NOT do** | ⚠ **IT DOES **NOT** ANSWER `Q5`. **`PO-AE1·F` ANSWERED `Q5`'s MECHANICAL HALF AND AD-01AE §14.3 ROW 11 EXPRESSLY DECLINED TO CLOSE IT BECAUSE ITS COMMERCIAL HALF IS `AC-50`'s AND ITS ATTRIBUTION HALF IS `T-4`'s. **THAT POSITION IS CARRIED FORWARD UNCHANGED** |
> | **And what it DOES do to `Z-2`** | ⚠ **`Z-2` — *does a validity-class constraint govern redistribution* — IS **ANSWERED IN ITS RECOVERABILITY LIMB AND IN NO OTHER**. **`·F.6` speaks to RECOVERABILITY POSTURE (Dimension C). **IT SAYS NOTHING ABOUT VALIDITY CLASS (Dimension A) OR RESPONSIBILITY LOCUS (Dimension B), AND `Z-2`'s ACTUAL SUBJECT IS THE VALIDITY CLASS.** ⚠ **`Z-2` REMAINS OPEN, AND AD-01I `I-10`'s EXCEPTION CLASS STANDS** |
> | **Amendment** | ⚠ **`A-98` — NAMED AND NOT MADE** |

---

## 6. Contradicted decisions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 6. ⚠ **FIVE CONTRADICTIONS ARE MINTED. **EVERY ONE IS
> BETWEEN TWO `PO LOCKED` CLAUSES — `PO-AF1` AGAINST `PO-AE1` — AND THEREFORE EVERY ONE IS A
> STOP-AND-ASK UNDER THE OWNER'S OWN `STEP 7` AND ⟦SOURCE⟧ **§97**.** ⚠ **NOT ONE IS RESOLVED, RANKED
> BY PLAUSIBILITY, OR GIVEN A PREFERRED BRANCH.**

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-469` — THE DISTINCTION THAT MAKES THIS SECTION READABLE, CARRIED FROM
> AD-01AE §4.1 AND APPLIED AGAIN.**
>
> | Kind | What it means | Governance |
> |---|---|---|
> | ⚠ **AN OWNER WHO HAS CHANGED HIS MIND** | **A later clause replaces an earlier one on the same subject** | ⚠ **`SUPERSEDED` — the architect names it and proceeds. **[§5](#5-superseded-decisions)** |
> | ⚠ **AN OWNER WHO HAS SPOKEN TO TWO SUBJECTS AND NOT TO THEIR INTERSECTION** | **Two clauses are each individually clear; their overlap is unstated and produces two incompatible answers** | ⚠ **`CONTRADICTED` — the architect STOPS. **THIS SECTION.** ⚠ **ALL FIVE ARE OF THIS KIND, AND NOT ONE IS AN OWNER CONTRADICTING HIMSELF ON ONE SUBJECT** |

### 6.1 X-42 — the manager who may not reassign a follow-up, performing an act that reassigns every follow-up

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`X-42` — CONTRADICTION, MINTED.**
>
> | Side | Statement, verbatim |
> |---|---|
> | ⚠ **`PO-AF1·B.8`, `PO LOCKED`** | ***"Managers do NOT create, assign, **reassign**, complete, modify, or manage customer tasks/follow-ups."*** |
> | ⚠ **`PO-AF1·B.7`, `PO LOCKED`** | ***"Managers are VIEW-ONLY for customer records, **except for authorized client transfer/reassignment**."*** |
> | ⚠ **`PO-AE1·K.1`–`·K.3`, `PO LOCKED`** | ***"Transfer does NOT cancel pending or overdue follow-ups. **They remain active and transfer with the customer to the new rep.** No duplicates are created."*** |
>
> ⚠ **THE COLLISION, STATED WITHOUT SOFTENING: A MANAGER PERFORMS THE ONE ACT `·B.7` PERMITS. **THE
> MANDATORY, `PO LOCKED` CONSEQUENCE OF THAT ACT IS THAT EVERY PENDING AND OVERDUE FOLLOW-UP ON THE
> RECORD CHANGES HANDS.** ⚠ **A FOLLOW-UP THAT WAS REP A's OBLIGATION BECOMES REP B's OBLIGATION,
> BECAUSE A MANAGER SAID SO. ⚠ **THAT IS *REASSIGNING A CUSTOMER FOLLOW-UP*, IN THE ORDINARY MEANING OF
> THE WORDS `·B.8` USES.**
>
> | Candidate reading | Why it is NOT adopted |
> |---|---|
> | **(a) The follow-up follows the customer as a SYSTEM consequence, and the manager reassigns the CUSTOMER, not the follow-up** | ⚠ **PLAUSIBLE, AND IT IS THE READING A DEVELOPER WOULD REACH ALONE — WHICH IS EXACTLY WHY THE ARCHITECT MUST NOT ADOPT IT.** ⚠ **IT WOULD MAKE `·B.8`'s WORD *reassign* MEAN *reassign OTHER THAN AS A CONSEQUENCE OF A PERMITTED TRANSFER*, AND THE OWNER DID NOT WRITE THAT** |
| **(b) `·B.8` is about a CRM *task* object distinct from a *follow-up*** | ⚠ **REFUSED BY THE TEXT: `·B.8` SAYS *"tasks/follow-ups"* AND `·B.9` SAYS *"activities and follow-ups"*. **THE OWNER HAS PUT FOLLOW-UPS INSIDE THE PROHIBITION IN BOTH CLAUSES** |
| **(c) `PO-AE1·K.2` is superseded by `PO-AF1·B.8`** | ⚠ **REFUSED: `PO-AF1` NEVER MENTIONS `·K`, NEVER MENTIONS TRANSFER-TIME FOLLOW-UP HANDLING, AND ITS `·P` LIST EXPRESSLY SAYS *"do NOT regress"* THE `PO-AE1` RULE SET.** **Inferring a supersession from silence is what `PF-448`'s restraint list exists to prevent** |
>
> ⚠ **STATUS: `CONTRADICTED`. ROUTED TO `AC-55`. NOT RESOLVED.**
>
> ⚠ **AND ONE FURTHER LIMB, RECORDED BECAUSE IT IS THE SAME CONTRADICTION WITH A LARGER BLAST RADIUS:**
> **`PO-AE1·I.2` PERMITS A **BULK** TRANSFER DISTRIBUTING MANY CUSTOMERS TO MANY DESTINATIONS IN ONE
> OPERATION.** ⚠ **ONE MANAGER ACT THEN REASSIGNS EVERY OPEN FOLLOW-UP ACROSS AN ENTIRE BOOK, AND
> AD-01I §12.1 ALREADY PRICED THE DISCIPLINE COST OF BULK ACTS AS *"unrecoverable if not"* RECORDED AT
> THE MOMENT.**

### 6.2 X-43 — the manager whose permitted reassignment performs a revival reserved to the Sales Head

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`X-43` — CONTRADICTION, MINTED, AND IT IS THE ONE THE TASK'S BRIEF
> ANTICIPATED AS *"likely `VALIDATE-OPEN` if not already answered."* **IT IS WORSE THAN `VALIDATE-OPEN`:
> TWO LOCKED CLAUSES GIVE TWO DIFFERENT ANSWERS TO *WHO MAY REVIVE A DUMPED CUSTOMER*.**
>
> | Side | Statement, verbatim |
> |---|---|
> | ⚠ **`PO-AF1·B.7`, `PO LOCKED`** | ***"Managers are VIEW-ONLY for customer records, except for **authorized client transfer/reassignment**."*** |
> | ⚠ **`PO-AE1·G.1`, `PO LOCKED`** | ***"**Only the Sales Head** can manually revive / reassign; a Sales Rep cannot."*** |
> | ⚠ **`PO-AE1·G.4`, `PO LOCKED`** | ***"for a dumped customer, **reassignment automatically flips `Dumped` → `New`**, enables Add-Activity and follow-ups …"*** |
> | ⚠ **`PO-AE1·G.5`, `PO LOCKED`** | ***"no separate 'Revive' event is needed when the operation is simply Transfer / Reassign."*** |
> | ⚠ **⟦SOURCE⟧ consolidated **§3**, the role table** | ⚠ ***"Site Head / Sales Head — Sales leadership, allocation, transfer, approvals, broad team visibility."*** **AND, ON A SEPARATE ROW:** ***"Manager / Reporting Manager — Manages assigned sales team, **transfers leads**, reviews activity and reporting."*** |
>
> ⚠ **THE COLLISION: THE SOURCE LISTS *MANAGER* AND *SALES HEAD* AS **TWO DISTINCT ROLES**, AND GIVES
> **BOTH** A TRANSFER CAPABILITY.** ⚠ **`PO-AF1·B.7` PERMITS A **MANAGER** TO REASSIGN. **`PO-AE1·G.4`
> MAKES REASSIGNING A `Dumped` CUSTOMER **AUTOMATICALLY A REVIVAL**, AND `·G.5` EXPRESSLY DECLINES TO
> MAKE IT A SEPARATE, SEPARATELY-AUTHORIZED EVENT.** ⚠ **`PO-AE1·G.1` RESERVES REVIVAL TO THE **SALES
> HEAD ALONE**.** ⚠ **A MANAGER WHO IS NOT A SALES HEAD THEREFORE PERFORMS, THROUGH A PERMITTED ACT
> AND WITH NO SEPARATE EVENT TO AUTHORIZE, AN OUTCOME ANOTHER LOCKED CLAUSE RESERVES TO SOMEBODY
> ELSE.**
>
> | Candidate reading | Why it is NOT adopted |
> |---|---|
> | **(a) *Manager* in `PO-AF1·B` is a generic term covering the Sales Head, so `·G.1` still binds** | ⚠ **PLAUSIBLE — AND IT WOULD MAKE `·B.7`'s PERMISSION APPLY TO **NO ONE BUT THE SALES HEAD**, WHICH WOULD MAKE `·B.1`–`·B.5`'s ELABORATE REPORTING-TREE SCOPE RULE GOVERN A POPULATION OF ONE PER TEAM. **THE ARCHITECT WILL NOT ATTRIBUTE THAT TO THE OWNER** |
| **(b) *Manager* is wider, and `·B.7` silently widens `·G.1`** | ⚠ **REFUSED: `PO-AF1·P.16` EXPRESSLY REAFFIRMS THE `PO-AE1` RULE SET AND SAYS *"do NOT regress"*. **A SILENT WIDENING OF AN AUTHORIZATION RULE IS EXACTLY WHAT ⟦SOURCE⟧ **§88** RESERVES TO THE OWNER** |
| **(c) `R2` dissolves it, because neither is a role name in the permission model** | ⚠ **`R2` FORBIDS **BRANCHING** ON A ROLE NAME AND REQUIRES BREADTH ON A GRANT. **IT DOES NOT TELL US WHICH GRANT CARRIES THE REVIVAL POWER, AND `M-3`/`M-7` — WHICH OWN THAT VOCABULARY — ARE **BOTH OPEN**. ⚠ **`R2` MAKES THE QUESTION HARDER TO EXPRESS, NOT EASIER TO ANSWER** |
>
> ⚠ **STATUS: `CONTRADICTED`. ROUTED TO `AC-55`. NOT RESOLVED.**

### 6.3 X-44 — the First Response milestone as an indication of the history that must not be indicated

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`X-44` — CONTRADICTION, MINTED, AND IT IS THE SECURITY-CRITICAL ONE.**
> ⚠ **IT IS **NOT** A RE-STATEMENT OF `X-41`. **`X-41` IS ABOUT QUEUE **COLUMNS** THE CORPUS RECORDS AS
> THE DEFAULT SURFACE (AD-01G §11.3, AD-01F §9.1). **`X-44` IS ABOUT A **SYSTEM MILESTONE THE OWNER HAS
> JUST REQUIRED TO EXIST ON THE TIMELINE** — a different mechanism, a different surface, and one that
> `V-10`'s enforcement-surface list does not name because it did not exist when `V-10` was written.**
>
> | Side | Statement, verbatim |
> |---|---|
> | ⚠ **`PO-AE1·L.3`, `PO LOCKED`** | ***"WITHOUT HISTORY = only activities after that transfer; **no indication, no count and no summary** of the hidden history; the older history is stored but invisible."*** |
> | ⚠ **`PO-AF1·J.5`, `PO LOCKED`** | ***"If **no previous First Response exists in the Inquiry**, the same activity can establish the Inquiry's **overall First Response**."*** |
> | ⚠ **`PO-AF1·J.6`/`·J.7`, `PO LOCKED`** | ***"their owner-response interval ends at transfer with outcome: No Response / Transferred … **every transfer gets its own response interval**."*** |
> | ⚠ **`PO-AF1·L.1`(B), `PO LOCKED`** | ***"the timeline should contain … system/business milestones — examples: **First Response**, Transfer, Revival."*** |
>
> ⚠ **THE THREE LEAKS, EACH STATED AS A CONCRETE SCENARIO RATHER THAN AS A PRINCIPLE:**
>
> | # | Leak | Mechanism |
> |---|---|---|
> | ⚠ **1** | ⚠ **THE PRESENCE-OR-ABSENCE TELL** | ⚠ **Rep C receives a record WITHOUT history and makes their first qualifying call. **IF `·J.5` FIRES, AN `Inquiry`-LEVEL `First Response` MILESTONE APPEARS — AND ITS APPEARANCE MEANS *"nobody responded before you."* **IF IT DOES NOT FIRE, THAT MEANS *"somebody did."*** ⚠ **EITHER WAY, REP C LEARNS A FACT ABOUT THE HIDDEN INTERVAL. **`·L.3` FORBIDS PRECISELY AN *INDICATION*** |
> | ⚠ **2** | ⚠ **THE INTERVAL-SERIES CARDINALITY** | ⚠ **`·J.7` MAKES THE NUMBER OF INTERVALS EQUAL THE NUMBER OF CUSTODY EPISODES. ⚠ **THE CARDINALITY OF THE INTERVAL SERIES **IS** THE COUNT OF PRIOR HANDLERS, AND `·L.3` FORBIDS A **COUNT** BY NAME** |
> | ⚠ **3** | ⚠ **THE `No Response / Transferred` OUTCOME** | ⚠ **`·J.6` REQUIRES A CLOSED, NAMED, ADVERSE OUTCOME ON THE PREVIOUS OWNER'S INTERVAL — *"do not leave the interval open."* ⚠ **THAT IS A **SUMMARY OF ANOTHER PERSON'S PERFORMANCE INSIDE A HIDDEN INTERVAL**, WHICH IS THE THIRD THING `·L.3` FORBIDS** |
>
> ⚠ **AND THE MIRROR-IMAGE PROBLEM, WHICH THE TASK'S BRIEF NAMED AND WHICH RESOLVES **THE OTHER WAY**,
> RECORDED BECAUSE A HALF-ANSWERED TENSION IS WORSE THAN AN UNANSWERED ONE:**
> ⚠ **DOES THE **PREVIOUS OWNER** GET TO SEE THEIR OWN INTERVAL CLOSE WITH `No Response / Transferred`,
> GIVEN THAT `PO-AE1·N.1` STRIPS THEIR OPERATIONAL ACCESS AT THE MOMENT OF TRANSFER?**
> ⚠ **YES, AND WITHOUT DIFFICULTY: `PO-AE1·N.2` GRANTS THE PREVIOUS REP A STANDING READ OF *"the
> complete current record … and new activities as they are created."* **A MILESTONE CREATED AT THE
> TRANSFER INSTANT IS INSIDE THAT GRANT.** ⚠ **SO THE ADVERSE OUTCOME IS **VISIBLE TO THE PERSON IT
> JUDGES**, WHICH IS THE FAIR RESULT AND IS NOT A CONTRADICTION.** ⚠ **BUT IT IS **CONDITIONAL ON
> `AC-51`(a)** — IF THE PREVIOUS OWNER HAD THEMSELVES RECEIVED THE RECORD WITHOUT HISTORY, WHETHER
> `·N.2` REACHES WHAT WAS HIDDEN FROM THEM IS EXACTLY `AC-51`(a) AND IS **OPEN**. **THE PER-CYCLE MODEL
> IS THEREFORE DOWNSTREAM OF `AC-51` AND CANNOT BE SPECIFIED BEFORE IT** |
>
> ⚠ **STATUS: `CONTRADICTED`. ROUTED TO `AC-56`. NOT RESOLVED.** ⚠ **`X-41` IS **ENLARGED** BY THIS —
> its subject widens from recorded queue columns to any derived surface — AND IS **NOT RENUMBERED AND
> NOT DISCHARGED**, on `I-14`'s and `J-16`'s standing precedent.**

### 6.4 X-45 — the correction route that the act being corrected disables

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`X-45` — CONTRADICTION, MINTED, AND IT IS THE SHARPEST IN THE DOCUMENT
> BECAUSE IT PRODUCES AN OPERATIONAL DEAD END RATHER THAN AN AMBIGUITY.**
>
> | Side | Statement, verbatim |
> |---|---|
> | ⚠ **`PO-AF1·G.2`/`·G.3`, `PO LOCKED`** | ***"The Sales Rep cannot edit, delete, void or overwrite a saved activity … If the Rep records something incorrectly: the original activity remains unchanged; **the Rep creates a new normal activity**."*** |
> | ⚠ **`PO-AE1·E.6`, `PO LOCKED`** | ***"**Add-Activity is disabled**"*** — on a `Dumped` record |
> | ⚠ **`PO-AE1·H.1`, `PO LOCKED`** | ***"only the CURRENTLY ASSIGNED Sales Rep can Dump; the Site Head cannot directly Dump."*** |
> | ⚠ **AD-01C §3.4, ⟦ARCHITECT RECOMMENDATION⟧** | ***"**A correction is not a re-engagement, and a re-engagement is not a correction** … Conflating them would let a re-engagement be laundered as a correction (erasing a true loss from a closed period) or a correction be laundered as a re-engagement (preserving a false loss and inflating the later period's captures)."*** |
>
> ⚠ **THE DEAD END, TRACED STEP BY STEP:**
>
> | Step | What happens |
> |---|---|
> | **1** | ⚠ **A rep selects the wrong record, or the wrong Dump Reason, and saves an activity with outcome `DUMP`** |
> | **2** | ⚠ **`PO-AE1·E` FIRES IMMEDIATELY: the customer is `Dumped`, **Add-Activity is DISABLED** (`·E.6`), new follow-ups cannot be created (`·E.7`), and **ALL pending and overdue follow-ups are PERMANENTLY cancelled** (`·E.8`)** |
> | **3** | ⚠ **The rep tries the ONLY correction route `PO-AF1·G.3` provides — *"create a new normal activity"*. ⚠ **THE CONTROL IS DISABLED. **THE MECHANISM HAS BEEN SWITCHED OFF BY THE ACT IT EXISTS TO CORRECT** |
> | **4** | ⚠ **The only remaining remedies are `PO-AE1·G` (Sales Head manual revive) and `PO-AE1·J.4` (*"this mechanism can also revive a **mistakenly-dumped** customer"*) — BOTH MANAGEMENT ACTS, both outside the rep's reach, and `PO-AE1·N.3` forbids the rep even raising an in-system request** |
> | **5** | ⚠ **AND BOTH REMEDIES ARE THE **RE-ENGAGEMENT / REVIVAL** MECHANISM.** ⚠ **USING THEM TO FIX A MISTAKE IS PRECISELY *"a re-engagement laundered as a correction"* — WHICH AD-01C §3.4 FORBIDS IN TERMS, AND WHICH AD-01F §12.4 AND AD-01I `I-7` EACH INDEPENDENTLY REQUIRE BE DISTINGUISHABLE *"in authorization and in reporting"*** |
> | **6** | ⚠ **AND THE `Dump` STAYS ON THE RECORD FOREVER, BECAUSE `·G.1` MAKES IT IMMUTABLE AND `PO-AE1·E.1`/`·E.5` PRESERVE IT.** ⚠ **A FALSE COMMERCIAL LOSS IS PERMANENTLY RECORDED, WITH ITS CLASSIFIED REASON, IN WHATEVER PERIOD IT LANDED IN — AND AD-01I §10.2 CONSTRAINT 1 (*"no report may restate a closed period"*) MAKES THAT IRREVERSIBLE IN REPORTING TOO** |
>
> ⚠ **NOTE ALSO THE SECOND INSTANCE, WHICH IS DIFFERENT IN MECHANISM AND IDENTICAL IN EFFECT:**
> ⚠ **A MIS-RECORDED `SUCCESS` ACTIVITY. **`·G.2` FORBIDS VOIDING IT; AD-01A §8.2 MAKES `Success` A
> TERMINAL MILESTONE AND FORBIDS A CANCELLED BOOKING REWRITING IT; AD-01C §3.4's CORRECTION EVENT IS
> SUPERSEDED AT THE ACTIVITY LEVEL BY `·G.3`. ⚠ **AD-01C `Q6-S2b`'s ERROR CLASS THEREFORE HAS **NO
> ACTIVITY-LEVEL EXPRESSION AT ALL**, AND `V-22` — WHO OR WHAT SETS `Success` — DETERMINES HOW LARGE
> THE RESULTING SURFACE IS. **`V-22` IS OPEN.**
>
> ⚠ **STATUS: `CONTRADICTED`. ROUTED TO `AC-58`. NOT RESOLVED.** ⚠ **AND NOTHING HERE PROPOSES A
> CORRECTION CONTROL, AN UNDO WINDOW, A GRACE PERIOD, A VOID EVENT OR A REVERSAL — EVERY ONE OF THOSE
> WOULD BE THE ARCHITECT INVENTING A BUSINESS RULE UNDER ⟦SOURCE⟧ §88.**

### 6.5 X-46 — the Dump that both fulfils and cancels the same follow-up

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`X-46` — CONTRADICTION, MINTED.**
>
> | Side | Statement, verbatim |
> |---|---|
> | ⚠ **`PO-AF1·O.1`, `PO LOCKED`** | ***"If an outstanding scheduled follow-up exists and the current owner records **the relevant new activity** for that customer, the new activity **automatically fulfills** the pending follow-up."*** |
> | ⚠ **`PO-AF1·I.2`, `PO LOCKED`** | ***"Qualifying activity includes … **valid Dump activity** with mandatory Dump Reason."*** |
> | ⚠ **`PO-AE1·E.8`, `PO LOCKED`** | ***"**ALL pending AND overdue follow-ups are cancelled due to Dump** and remain **permanently cancelled** — never auto-revived."*** |
> | ⚠ **`PO-AE1·K.4`, `PO LOCKED`** | ***"this is an **explicit contrast** with Dump's cancel-all-pending-and-overdue rule."*** |
>
> ⚠ **THE COLLISION: A `DUMP` ACTIVITY IS SIMULTANEOUSLY (a) *the relevant new activity* THAT `·O.1`
> SAYS **FULFILS** THE OUTSTANDING FOLLOW-UP, AND (b) *the Dump* THAT `PO-AE1·E.8` SAYS **CANCELS** IT
> PERMANENTLY.** ⚠ **ONE FOLLOW-UP, ONE ACT, TWO INCOMPATIBLE TERMINAL FACTS.**
>
> ⚠ **AND THE DIFFERENCE IS NOT COSMETIC — IT IS A REPORTING FACT WITH A PERFORMANCE CONSEQUENCE:**
> **A **FULFILLED** FOLLOW-UP IS WORK THE REP DID. **A **CANCELLED** ONE IS WORK THAT NEVER HAPPENED.**
> ⚠ **A REP WHO DUMPS FIFTY OVERDUE RECORDS ON FRIDAY EITHER COMPLETED FIFTY FOLLOW-UPS OR COMPLETED
> NONE, AND EVERY WORKLOAD, FUT AND RESPONSIVENESS FIGURE DEPENDS ON WHICH.** ⚠ **AD-01F §12.4's
> WARNING — *"a re-attempt double-counted as a fresh capture"* — IS THE SAME FAMILY OF DEFECT ONE LAYER
> DOWN.**
>
> ⚠ **THE SECOND LIMB, WHICH IS ABOUT A WORD RATHER THAN ABOUT A CLASH, AND IS EQUALLY UNRESOLVED:**
> ⚠ **`·O.1` SAYS *"the **relevant** new activity"* AND `·O.4` SAYS *"if the **qualifying** activity
> itself fulfills it."* **THE OWNER USES TWO WORDS FOR WHAT MAY BE ONE PREDICATE.** ⚠ **IF
> *qualifying* HERE MEANS `·I.2`'s FIRST-RESPONSE PREDICATE, THEN — BY `·I.4` — **AN UNANSWERED
> OUTBOUND CALL FULFILS A FOLLOW-UP**, AND A REP CAN CLEAR AN ENTIRE OVERDUE QUEUE WITH UNANSWERED
> DIALS.** ⚠ **IF IT MEANS FUT's PREDICATE, THAT PREDICATE IS `V-4` AND IS **UNDEFINED FOR A
> TWENTY-SECOND CONSECUTIVE DOCUMENT**.** ⚠ **AD-01AC `PF-349` RECORDED THAT `V-4` GATES FIVE
> QUANTITIES THAT *"MUST SHARE ONE ANSWER OR THEY WILL DISAGREE PERMANENTLY."* **`·O` MAKES IT SIX.**
>
> ⚠ **STATUS: `CONTRADICTED`. ROUTED TO `AC-57`. NOT RESOLVED.**

### 6.6 The contradiction audit, run over eighteen further candidate pairs and reporting its negatives

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-470` — A HUNT THAT REPORTS ONLY ITS HITS CANNOT BE AUDITED. **EIGHTEEN
> FURTHER PAIRS WERE TESTED AND FOUND **NOT** TO CONTRADICT, AND THE RESULT IS RECORDED WITH ITS
> REASON.**

| # | Candidate pair | Result |
|---|---|---|
| **1** | ⚠ **`·G.1` immutability versus `R6`'s append-only audit posture** | ⚠ **NO CONFLICT — SAME DIRECTION. **`R6` governs the audit log; `·G` extends the same posture to a business record. **A REINFORCEMENT, NOT A COLLISION** |
| **2** | ⚠ **`·G.4` no-recalculation versus ⟦SOURCE⟧ §07's preserve-historical-truth** | ⚠ **NO CONFLICT — `·G.4` IS §07 APPLIED TO A DERIVED FACT** |
| **3** | ⚠ **`·H` recorded milestone versus consolidated §8's *"distinguish user-performed activities from system-generated timeline events"*** | ⚠ **NO CONFLICT, AND IT IS THE STRONGEST CONFIRMATION IN THE DOCUMENT. **`·L.2`'s MANDATORY *actor/system source* IS THAT DISTINCTION. **`·H.2` (*"NOT a separate manual activity"*) AND `·I.6` (*"do NOT create a special FIRST_RESPONSE event type"*) BOTH POLICE IT FROM THE OWNER'S SIDE** |
| **4** | ⚠ **`·H` recorded milestone versus consolidated §9's FUT exclusion** | ⚠ **NO CONFLICT — §9 EXCLUDES IT FROM FUT, WHICH PRESUPPOSES IT EXISTS** |
| **5** | ⚠ **`·I.5` Dump-as-First-Response versus AD-01 §6.1's `New → Dump` row** | ⚠ **NO CONFLICT — AD-01 §6.1 ALREADY CALLED IT *"common from helpdesk-captured leads"*** |
| **6** | ⚠ **`·I.7` Success-as-First-Response versus AD-01 §6.1's `New → Success` row** | ⚠ **NO CONFLICT — AD-01 §6.1 SAYS *"Rare but real at launch events (§42). **Must not be forbidden.**"*** |
| **7** | ⚠ **`·J.2` creation-anchored original cycle versus `PO-AE1·A`'s one-`Inquiry` model** | ⚠ **NO CONFLICT — AND A CONSEQUENCE WORTH NAMING: under one `Inquiry` per customer, `W-4`'s *inquiry → first response* CLOCK AND `V-20`'s *creation → first response* CLOCK **COLLAPSE INTO ONE FOR THE ORIGINAL CYCLE**, because the `Inquiry` and the customer record now originate together** — [§11.2](#112-the-four-clocks-re-run-under-the-one-inquiry-model) |
| **8** | ⚠ **`·J.9` calendar time versus ⟦SOURCE⟧ §18's authoritative-server-time principle** | ⚠ **NO CONFLICT FOR A DURATION — the difference of two instants needs no calendar. ⚠ **IT IS `·M` THAT NEEDS ONE** — [§11.3](#113-the-day-boundary-becomes-load-bearing) |
| **9** | ⚠ **`·K.6` *previous cycles are never overwritten* versus AD-01I §10.2 constraint 1 (*no report may restate a closed period*)** | ⚠ **NO CONFLICT — SAME DIRECTION, AND `·K.6` MAKES CONSTRAINT 1 EASIER TO SATISFY FOR THIS METRIC FAMILY THAN AD-01AE §9.3 ROW 1 FOUND IT FOR `Inquiry`-KEYED COUNTS** |
| **10** | ⚠ **`·M` derived buckets versus AD-01A §8.1** | ⚠ **NO CONFLICT — `·M.7`/`·M.8` RESTATE §8.1 EXACTLY** |
| **11** | ⚠ **`·O` auto-fulfilment versus `PO-AE1·K.1` (*transfer does not cancel follow-ups*)** | ⚠ **NO CONFLICT — TRANSFER IS NOT AN ACTIVITY AND THEREFORE FULFILS NOTHING** |
| **12** | ⚠ **`·B.9`'s owner exclusivity versus `PO-AE1·D.2`'s Site-Head project-interest REMOVAL** | ⚠ **NO CONTRADICTION — A PROJECT INTEREST IS NEITHER AN ACTIVITY NOR A FOLLOW-UP, AND `·B.7`'s VIEW-ONLY RULE DOES NOT NAME REMOVAL.** ⚠ **RECORDED AS A `VALIDATE-OPEN` TENSION RATHER THAN A CONTRADICTION, BECAUSE THE TWO CLAUSES HAVE DIFFERENT OBJECTS AND MINTING AN `X-` FOR AN UNSTATED OVERLAP WOULD INFLATE THE REGISTER** |
| **13** | ⚠ **`·B.5`'s *every ancestor* versus AD-01G §9.3 constraint 1 (*a restriction must never apply to `I2`*)** | ⚠ **NO CONTRADICTION — SAME DIRECTION. ⚠ **BUT IT **ENLARGES THE `I2` POPULATION** AND THEREFORE SHRINKS WHAT A WITHOUT-HISTORY TRANSFER CAN ACTUALLY WITHHOLD** — [§9.3](#93-the-i2-population-enlarged-and-what-that-costs-the-without-history-control) |
| **14** | ⚠ **`·C.5`'s three outcomes versus AD-01A §8.1's four lifecycle values** | ⚠ **NO CONFLICT, AND THE DISTINCTION IS LOAD-BEARING: `·C.5` CLASSIFIES AN **ACTIVITY**, §8.1 CLASSIFIES A **RECORD**. ⚠ **`New` IS ABSENT FROM `·C.5` FOR THE CORRECT REASON — NOBODY *DOES* `New`.** **`PO-AE1·J.2` AND AD-01AE `X-39` ALREADY ESTABLISHED THAT `New` IS CUSTODY-SCOPED, AND `PO-AF1` NEITHER DISTURBS NOR ADVANCES THAT** |
| **15** | ⚠ **`·D.1`'s mandatory Next Follow-up versus ⟦SOURCE⟧ §13's mandatory next-action date** | ⚠ **NO CONFLICT — AND IT RESOLVES A LATENT ONE. **AD-01F §7.4 ALREADY SCOPED IT AS *"mandatory **where the outcome keeps the record in the working queue**"*, AND `·D`/`·E`/`·F` MAKE EXACTLY THAT SCOPING EXPLICIT: the date is required on `FOLLOW-UP` and NOT on `SUCCESS` or `DUMP`** |
| **16** | ⚠ **`·E.2`'s authoritative activity timestamp versus AD-01 §8.3 / `E-23`'s recorded-versus-effective split** | ⚠ **NO CONFLICT — DIFFERENT SUBJECTS** — [§10.4](#104-offline-and-the-two-timestamps-checked-and-not-disturbed) |
| **17** | ⚠ **`·L.1`'s single timeline versus AD-01F §7.2's *"one timeline is a correct read model; it is not a correct storage model"*** | ⚠ **NO CONFLICT. **`·L` SPEAKS ABOUT WHAT THE TIMELINE **CONTAINS**, NEVER ABOUT WHERE IT IS STORED. **AD-01F's PROJECTION CONCLUSION SURVIVES INTACT FOR CLASSES 1–7; ONLY CLASS 8 FALLS** |
| **18** | ⚠ **`PO-AF1` anywhere versus the CP / commission chain** | ⚠ **NO CONFLICT — `PO-AF1` MENTIONS NO CP SUBJECT AT ALL, AND `·Q` IS A REAFFIRMATION.** ⚠ **ONE INDIRECT CONSEQUENCE IS FOUND AND IS NOT A CONTRADICTION** — [§8.5](#85-the-cp-chain-and-c-xxvi-checked-and-not-disturbed-with-one-exception) |

---

## 7. Architecture rules affected

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 7. **THIS SECTION STATES WHAT EACH AFFECTED RULE NOW MEANS.
> **IT DESIGNS NOTHING.**

### 7.1 The affected-rule table

| # | Rule | Effect |
|---|---|---|
| **1** | ⚠ **AD-01A §8.6's ORTHOGONAL LEAD MODEL — nine named axes** | ⚠ **THE SEPARATION SURVIVES FULLY AND A TENTH CONCERN IS NAMED: **DERIVED MILESTONES ARE NOW A RECORDED CLASS**, distinct from *Activity history* and from *Action / Next-Action conditions*. ⚠ **THE MODEL IS **ENLARGED, NOT REFUTED** — the same verdict AD-01F §15.5 reached about the level at which each axis attaches** |
| **2** | ⚠ **AD-01F §7.2's EIGHT-CLASS TIMELINE TEST** | ⚠ **CLASSES 1–7 SURVIVE UNCHANGED, INCLUDING THE *"one timeline is a read model, not a storage model"* CONCLUSION AND THE THREE CLASSES WITH CANONICAL HOMES ELSEWHERE (assignment, transfer, booking). ⚠ **CLASS 8 IS SUPERSEDED** — `S-1` |
| **3** | ⚠ **AD-01F §7.4's ACTIVITY CARRIER LIST** | ⚠ **`NARROWED` AND RE-SHAPED — `N-2`. ⚠ **AND ONE CARRIER BECOMES MANDATORY THAT WAS CONDITIONAL: *"the inquiry it concerns, **where it concerns one**"* MUST NOW BE READ AGAINST `PO-AE1·A.7`'s *"project-specific segregation happens via Project Interest + **activity/project association**"* — so the ACTIVITY→PROJECT-INTEREST ASSOCIATION IS `PO LOCKED` AND `W-1` (may one activity relate to more than one?) IS **UNANSWERED AND NOW UNAVOIDABLE*** |
| **4** | ⚠ **AD-01 §6.1's LIFECYCLE TRANSITION MATRIX** | ⚠ **THE SELF-TRANSITION ROW IS CONFIRMED AND GIVEN A CONTRACT; `New → Dump` AND `New → Success` ARE CONFIRMED AND GIVEN FIRST-RESPONSE SEMANTICS; THE *"or a permitted reviewer"* ACTOR CELL IS ALREADY SUPERSEDED (`S-5`). ⚠ **THE `Anything → New` PROHIBITION IS **NOT** TOUCHED HERE — IT IS `X-39`'s, AND `X-39` REMAINS EXACTLY AS AD-01AE LEFT IT** |
| **5** | ⚠ **AD-01A §8.1's FOUR-VALUE PERSISTED LIFECYCLE** | ⚠ **UNTOUCHED BY `PO-AF1`. **`A-91` IS STILL NAMED AND STILL NOT MADE; `V-6` IS STILL FORCED-IN-DIRECTION AND UNRESOLVED** |
| **6** | ⚠ **AD-01A §8.3's THREE-DIMENSION DUMP FRAMEWORK** | ⚠ **CONFIRMED VERBATIM IN ITS DIMENSIONS; **DIMENSION C's RATIONALE SUPERSEDED** (`S-4`); `N-4` STILL SUPPLIES NO VALUES** |
| **7** | ⚠ **AD-01C §3.4's CORRECTION EVENT TYPE, AND `T-7`** | ⚠ **`NARROWED` AT THE ACTIVITY LEVEL (`N-4` of [§5.7](#57-narrowed-not-superseded-the-five-cases)); **INTACT AT THE LIFECYCLE LEVEL**; AND ITS *"correction is not a re-engagement"* RULE IS NOW **UNENFORCEABLE IN ONE CASE** — `X-45`** |
| **8** | ⚠ **AD-01G §8.1's `I1 ∪ I2 ∪ I3` ENTITLEMENT UNION** | ⚠ **NOT REDESIGNED. ⚠ **`I2`'s POPULATION IS ENLARGED BY `·B.5`; `I1`'s INTERVAL SCOPING NOW HAS A **NEW OBJECT TO SCOPE** — the response interval — AND AD-01AE's `A-92` (a fourth input, or a redefined `I1`) IS **STILL NAMED AND STILL NOT MADE*** |
| **9** | ⚠ **AD-01G §9.3's CONSTRAINTS 1 AND 2** | ⚠ **BOTH REINFORCED. **CONSTRAINT 1 (*a restriction must never apply to `I2`*) IS NOW THE OWNER'S OWN RULE OVER A LARGER POPULATION; CONSTRAINT 2 (*unrecoverable if not recorded at the moment of the act*) NOW ALSO BINDS THE `No Response / Transferred` INTERVAL CLOSURE, WHICH `·J.6` REQUIRES BE WRITTEN AT THE TRANSFER INSTANT** |
| **10** | ⚠ **AD-01I `I-1`'s C1/C2/C3 AXIS DECOMPOSITION** | ⚠ **CONFIRMED AND SHARPENED ON THE ACTOR AXIS. **`I-2` SAID *"the sources separate C2 from C3 by ACTOR, which is stronger evidence than any structural argument."* ⚠ **`·B.8`/`·B.9` MAKE THAT SEPARATION **ABSOLUTE**: the rep owns C2 entirely; management owns C3 entirely; neither may act on the other's axis** |
| **11** | ⚠ **AD-01I `I-8`'s WORK MANDATE** | ⚠ **STATUS BECOMES **UNDETERMINED** — [§5.3](#53-the-three-constructs-the-supersession-reaches-and-with-what-force), `A-101`, `AC-55`(c). **`Z-3` NOW CONSUMES `AC-55`** |
| **12** | ⚠ **`R2` (never branch on a role name) and `R4` (semantics in columns)** | ⚠ **BOTH ENGAGED AND NEITHER SATISFIED. **`·B`'s *manager* IS A ROLE WORD; `·C.3`'s *configured set*, `·D.1`'s *Response Type*/*Sub-response* AND `·E.1`'s *Success Reason* ARE ALL MASTERS WHOSE SEMANTIC COLUMNS ARE UNDEFINED — `V-19`, `AC-59`, `N-4`** |
| **13** | ⚠ **`V-11`'s CONTROL HALF (*which control is the rep operating*)** | ⚠ **ADVANCED, NOT CLOSED. ⚠ **`PO-AF1·C.5` ANSWERS IT AT THE **CAPTURE** LEVEL: ONE ACTIVITY, ONE OUTCOME, THREE CHOICES. ⚠ **IT DOES **NOT** ANSWER AD-01I `I-1`'s QUESTION OF WHETHER `DUMP` MOVES C1, C2 OR BOTH — `PO-AE1·E.1` SAYS IT IS NOT A TERMINATION AND `PO-AF1·P.4` SAYS IT IS A *"temporary work-state restriction"*, WHICH TOGETHER PUT IT ON **C2** AND LEAVE C1 HOMELESS. **THAT IS `AC-50`, AND IT IS UNTOUCHED** |

### 7.2 The activity model reconciled against consolidated §10 and AD-01F §7.4

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-471` — THE TASK'S BRIEF ASKED WHETHER THE NEW OUTCOME MODEL IS
> CONSISTENT WITH, SUBSUMES, OR CONFLICTS WITH ANY PRIOR ACTIVITY-TYPE OR INTERACTION-LOG MODEL.**
> ⚠ **THE ANSWER IS: IT **SUBSUMES** AND **SEPARATES**, AND IT CONFLICTS WITH NOTHING — AND THE REASON
> IT CONFLICTS WITH NOTHING IS THAT **NO STORAGE MODEL EXISTS TO CONFLICT WITH** (`PF-454`).**

| Prior concept | Its mint | Where it lands under `PO-AF1` |
|---|---|---|
| ⚠ **⟦SOURCE⟧ consolidated §10 *"Activity type — type of sales action such as a call or other supported outreach"*** | Consolidated §10 | ⚠ **SPLITS. **THE CHANNEL BECOMES `Communication Type` (`·C.2`/`·C.3`); THE RESULT BECOMES `Activity Outcome` (`·C.5`). ⚠ **CONSOLIDATED §10 CARRIED BOTH MEANINGS IN ONE FIELD, WHICH IS EXACTLY THE COLLAPSE AD-01 §3 WAS WRITTEN TO PREVENT — AND `·C.4` PREVENTS IT** |
| ⚠ **⟦SOURCE⟧ consolidated §10 *Response type* / *Sub-response*** | Consolidated §10 | ⚠ **SURVIVE, SCOPED TO THE `FOLLOW-UP` BRANCH (`·D.1`). ⚠ **`V-19` — must they carry semantic classification columns as the `Dump` framework does — IS **UNANSWERED AND NOW INSIDE A LOCKED CONTRACT**. **AD-01F §7.3 item 2's finding stands verbatim: the observed vocabulary *"mixes outcomes, milestones, internal process steps and progress markers"*, and *"a flat master over these produces analytics nobody can interpret"*** |
| ⚠ **⟦SOURCE⟧ consolidated §10 *Remarks*** | Consolidated §10 | ⚠ **SURVIVES ON ALL THREE BRANCHES, RENAMED PER BRANCH (*Remarks* / *Success Remarks* / *Dump Remarks*). ⚠ **AND `·F.5` ADDS A PROHIBITION: REMARKS CANNOT SUBSTITUTE FOR THE CLASSIFIED REASON** |
| ⚠ **⟦SOURCE⟧ consolidated §10 *Next follow-up*** | Consolidated §10; ⟦SOURCE⟧ §13 | ⚠ **SURVIVES, MANDATORY ON `FOLLOW-UP` ONLY — WHICH IS AD-01F §7.4's OWN SCOPING MADE EXPLICIT** |
| ⚠ **⟦SOURCE⟧ consolidated §10 *Recorded time*, *Actor / handler*, *Timeline position*** | Consolidated §10 | ⚠ **ALL THREE SURVIVE ON EVERY BRANCH VIA `·L.2` (*timestamp, actor/system source, event/activity type, relevant structured data*)** |
| ⚠ **AD-01F §7.4's *effective time*, separate from *recorded time*** | AD-01 §8.3; `E-23` | ⚠ **NOT MENTIONED BY `PO-AF1` AND THEREFORE UNTOUCHED** — [§10.4](#104-offline-and-the-two-timestamps-checked-and-not-disturbed) |
| ⚠ **AD-01F §7.4's *the custody interval it falls in*** | AD-01F §7.4; AD-01G `G-9` | ⚠ **SURVIVES AND BECOMES LOAD-BEARING: `·J.3`/`·J.4` MAKE THE RESPONSE INTERVAL COINCIDE WITH THE CUSTODY INTERVAL AT ITS START** |
| ⚠ **AD-01F §7.4's *its qualifying-for-FUT semantic*** | AD-01F §7.2, `R4` | ⚠ **SURVIVES AND IS **STILL UNDEFINED** — `V-4`'s FUT limb** |
| ⚠ **AD-01F §7.4's *call duration*** | Observed capture surface | ⚠ **NOT MENTIONED BY `PO-AF1`. **RECORDED AS UNTOUCHED, NOT AS REMOVED** |
| ⚠ **AD-01 §8.4's SITE VISIT as a separate first-class record** | ⟦SOURCE⟧ §09, §80; AD-01 §8.4 | ⚠ **NOT MENTIONED BY `PO-AF1`, AND `V-19`'s SITE-VISIT LIMB (*is the sub-response or the site-visit record the source of truth?*) IS **UNANSWERED AND NOW SHARPER**, because `·C.3`'s communication-type list contains no visit channel while `·D.1`'s sub-response vocabulary is where the observed operation put *Site Visit Done*** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-472` — TWO ACTIVITY SHAPES THE CORPUS RECORDS AS REAL BECOME
> INEXPRESSIBLE UNDER `·C.2`'s *"every activity begins with a Communication Type"*, AND THEY ARE NAMED
> RATHER THAN SOLVED.**
>
> | Shape | Where the corpus records it | What `PO-AF1` does to it |
> |---|---|---|
> | ⚠ **A NOTE WITH NO CONTACT** — *"remarks entered with no contact"* | ⚠ **AD-01AC §9.2, event type 6 — *"a note is user-performed and is not a follow-up on any natural reading, but nothing states it"*** | ⚠ **HAS NO SHAPE. **EVERY ACTIVITY NEEDS A COMMUNICATION TYPE AND AN OUTCOME; A NOTE HAS NEITHER.** ⚠ **IT MAY FIT *"other configured communication sources"* (`·C.3`) — WHICH IS A CONFIGURATION ANSWER TO A MODEL QUESTION, AND NOTHING HERE ADOPTS IT** |
> | ⚠ **A BARE NEXT-ACTION DATE MOVE WITH NO CONTACT** | ⚠ **AD-01AC §9.2, event type 7; AD-01 §6.1 calls the self-transition *"the most frequent event in the system"*** | ⚠ **EXPRESSIBLE ONLY AS A `FOLLOW-UP` ACTIVITY WITH SOME COMMUNICATION TYPE — I.E. **ONLY BY ASSERTING THAT A COMMUNICATION OCCURRED**. ⚠ **AND `·I.4` MAKES THAT ASSERTION **ESTABLISH FIRST RESPONSE**, `·G.1` MAKES IT **IMMUTABLE**, AND `·G.4` MAKES THE RESULTING METRIC **PERMANENT**** |
>
> ⚠ **THE CONSEQUENCE, STATED AS A RISK AND NOT AS A DESIGN OBJECTION: THE MODEL CANNOT DISTINGUISH
> *"I called and they asked me to call back"* FROM *"I pushed the date."* ⚠ **AD-01AC §9.2 ROW 7 FLAGGED
> THIS UNDER `V-4`; IT IS NOW **SHARPER**, BECAUSE THERE IS NO NON-COMMUNICATION ACTIVITY SHAPE AT ALL
> AND BECAUSE THE FALSE ASSERTION IS NOW PERMANENTLY LOAD-BEARING FOR A METRIC.** ⚠ **RECORDED AT
> [§13.3](#133-the-full-validate-open-register-carried-forward). **NO CONTROL, SHAPE OR MITIGATION IS
> PROPOSED.**

### 7.3 The First Response model reconciled against the state machine and the timeline model

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-473` — THE TASK'S BRIEF ASKED WHETHER FIRST-RESPONSE-AS-SYSTEM-DERIVED-
> MILESTONE CONFLICTS WITH ANYTHING IN THE EXISTING STATE-MACHINE OR TIMELINE MODEL (`03`, `03a`, `03c`,
> `03e`). **THE FOUR WERE CHECKED INDIVIDUALLY AND THE ANSWER IS A CLEAN SPLIT.**
>
> | Document | Checked at | Result |
> |---|---|---|
> | ⚠ **`03` — AD-01** | §3.1–§3.6 (concept separation) · §5.1 (derived-never-stored list) · §6.1 (transition matrix) · §9 (reporting) | ⚠ **NO CONFLICT. **`First Response` IS NOT A LIFECYCLE VALUE, NOT A SALES STAGE, NOT A FOLLOW-UP STATUS AND NOT AN ASSIGNMENT CONDITION — IT PASSES AD-01 §3's OWN TEST (*what changes it, who authors it, can two be true at once*) AS A **MILESTONE**, WHICH IS A CLASS AD-01 §3 DOES NOT ENUMERATE.** ⚠ **AD-01 §5.1's *"Derived, never stored"* LIST NAMES *New-in-feed, Today, Overdue, Scheduled/Future* AND **DOES NOT NAME FIRST RESPONSE** — CHECKED AT SOURCE. **THE PROHIBITION WAS AD-01F's, NOT AD-01's** |
> | ⚠ **`03a` — AD-01A** | §3.6 (derivation rule) · §8.1 · §8.6 | ⚠ **CONFLICT IN ONE APPLICATION ONLY — `S-2`, sense (ii). **§8.1 and §8.6 are untouched** |
> | ⚠ **`03c` — AD-01C** | §3.4 (`S3`, corrections) · §3.7 (`Q6`) | ⚠ **NO CONFLICT WITH `First Response` ITSELF. ⚠ **THE CONFLICT IS WITH `·G`'s CORRECTION RULE AND IS `X-45`'s** |
> | ⚠ **`03e` — AD-01E** | §6.3 (the entitlement union) · §12 (`U-11`, `U-14`) | ⚠ **NO CONFLICT WITH THE MILESTONE'S EXISTENCE. ⚠ **THE CONFLICT IS WITH ITS **VISIBILITY** AND IS `X-44`'s.** **AD-01E's *custody is not entitlement* principle is untouched and is reinforced by `·B.6`** |
>
> ⚠ **THE SUMMARY, STATED SO IT CANNOT BE MISREAD: **THE STATE MACHINE IS UNTOUCHED. **THE TIMELINE
> MODEL LOSES ONE OF EIGHT CLASSES. **THE CONFLICTS THAT EXIST ARE ABOUT **CORRECTION** AND
> **DISCLOSURE**, NOT ABOUT DERIVATION.**

### 7.4 The per-cycle interval model tested for representability against the AD-01AE transfer matrix

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-474` — THE TASK'S BRIEF ASKED WHETHER PER-CYCLE INTERVALS ARE
> REPRESENTABLE GIVEN AD-01AE's HISTORY-VISIBILITY AND WITHOUT-HISTORY-TRANSFER RULES. **THE TEST IS
> RUN ROW BY ROW OVER AD-01AE §8.2's TWELVE NAMED CONFIGURATIONS, AND THE ANSWER IS THAT **EXISTENCE**
> IS REPRESENTABLE EVERYWHERE AND **VISIBILITY** IS UNDETERMINED IN SIX.**
>
> | AD-01AE §8.2 configuration | Intervals the record now carries | Representable? | Visible to the receiving rep? |
> |---|---|---|---|
> | **1 — Active · WITH history · ordinary transfer** | ⚠ **Original cycle (closed by its `First Response`), plus a new transfer interval** | ⚠ **YES** | ⚠ **YES — `·L.2` permits the complete history** |
> | **2 — Active · WITHOUT history · ordinary transfer** | ⚠ **As row 1** | ⚠ **YES** | ⚠ **UNDETERMINED — `X-44` leaks 1 and 2** |
> | **3 — Dumped · WITH history · transfer** | ⚠ **Original cycle; the `Dump` that closed it; a new transfer interval; `·J.1` says nothing about whether the transfer ALSO opens a revival cycle when `·G.4` flips `Dumped → New`** | ⚠ **PARTLY — **the transfer-of-a-Dumped-customer case is the one `·J`/`·K` do not jointly name**: `·K` governs *automatic* revival and `·K.7` governs *revival then transfer*, but **transfer-as-revival** (`PO-AE1·G.4`) is not given a cycle** | ⚠ **YES** |
> | **4 — Dumped · WITHOUT history · transfer** | ⚠ **As row 3** | ⚠ **AS ROW 3** | ⚠ **UNDETERMINED — and worse: `PO-AE1·L.3` hides the `Dump` and its reason, while `·J.6`'s closed interval announces that something ended** |
> | **5 / 6 — Manual revive, KEEP owner** | ⚠ **`·K.1` opens a new cycle for the SAME rep** | ⚠ **YES** | ⚠ **ROW 6 IS AD-01AE's `AC-51`/`X-40` CASE UNCHANGED** |
> | **7 / 8 — Transfer back** | ⚠ **A further interval for a rep who already holds earlier ones** | ⚠ **YES** | ⚠ **ROW 8 IS `X-40` UNCHANGED, AND `X-44` COMPOUNDS IT** |
> | **9 / 10 — Bulk, multiple destinations** | ⚠ **One interval opened per record, all at one timestamp** | ⚠ **YES** | ⚠ **ROW 10 UNDETERMINED — and `PO-AE1·I.3`'s ONE history setting per operation cannot vary per record** |
> | **11 / 12 — Cross-team** | ⚠ **As rows 1/2, with the team boundary crossed** | ⚠ **YES** | ⚠ **ROW 12 UNDETERMINED** |
>
> ⚠ **THE RESULT, STATED AS A FINDING: **THE INTERVAL SERIES IS REPRESENTABLE IN ALL TWELVE
> CONFIGURATIONS. **WHAT IS NOT DETERMINED IS **WHO MAY SEE IT**, IN SIX OF THEM.** ⚠ **AND ONE GAP IS
> IN `PO-AF1` ITSELF RATHER THAN IN ITS INTERSECTION WITH `PO-AE1`: **A TRANSFER THAT REVIVES A
> `Dumped` CUSTOMER (`PO-AE1·G.4`) IS BOTH A TRANSFER AND A REVIVAL, AND `·J`/`·K` DO NOT SAY WHETHER
> IT OPENS ONE CYCLE OR TWO.** ⚠ **RECORDED AT [§13.3](#133-the-full-validate-open-register-carried-forward)
> AS `VALIDATE-OPEN` AND **NOT** MINTED AS A SEPARATE `AC-` ITEM, BECAUSE IT IS A SPECIFICATION GAP IN
> ONE CLAUSE RATHER THAN A BUSINESS DECISION — THE OWNER NEED ONLY SAY WHICH.**

### 7.5 C-XXVII — the constraint candidate, tested and REFUSED

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-475` — AD-01AC AND AD-01AD EACH RAN THE CONSTRAINT-NECESSITY TEST AND
> DECLINED TO MINT; AD-01AE RAN IT AND MINTED `C-XXVI`. **IT IS RUN AGAIN HERE ON ITS STRONGEST
> CANDIDATE AND IT **FAILS**, AND THE REASON IS STATED SO THE REFUSAL CAN BE ATTACKED AS EASILY AS A
> MINT COULD.**
>
> **The candidate:** ⚠ ***"A derived or system-generated milestone must never disclose, by its presence,
> its absence, its ordinal position or the cardinality of its series, the existence of an interval the
> viewer is not entitled to read."***
>
> | Necessity test | Result |
> |---|---|
> | **Does an EXISTING constraint already cover it?** | ⚠ **PARTLY — AND THAT ALONE WOULD NOT DEFEAT IT. **AD-01G §9.3 constraint 1 protects `I2`; `V-10` owns the surface list; `C-XXVI` binds a different operand. **NONE governs a DERIVED MILESTONE's disclosure** |
> | **Does its absence permit a CONCRETE failure?** | ⚠ **YES — `X-44`, in three named mechanisms** |
> | **Is it a CONSTRAINT rather than a DESIGN?** | ⚠ **YES. It forbids a class of disclosure; it names no table, surface, policy or mechanism** |
> | ⚠ **Is it derivable from a PO statement?** | ⚠ **AND HERE IT FAILS.** ⚠ **IT IS NOT MERELY **UNDERIVABLE** — IT WOULD **PRE-EMPT `AC-56`**. ⚠ **THE OWNER HAS TWO GENUINELY AVAILABLE ANSWERS: (a) THE MILESTONE IS SUPPRESSED FOR A RESTRICTED VIEWER, OR (b) `PO-AE1·L.3`'s *no indication* IS NARROWED TO EXCLUDE SYSTEM MILESTONES. ⚠ **MINTING THE CONSTRAINT WOULD SELECT (a) AND CALL IT AN ARCHITECT'S GUARD, WHICH IS THE `V-14` FAILURE MODE THE CORPUS NAMES: *"a business rule is created by a data-model default — an invented rule under §88."*** |
>
> ⚠ **DETERMINATION: `C-XXVII` IS **NOT MINTED**. **THE `C-` SERIES STAYS AT `C-XXVI`.** ⚠ **AND THE
> REFUSAL IS RECORDED AS A RESULT RATHER THAN AS AN OMISSION, ON AD-01AB §0.9's OWN STANDARD: *"NO NEW
> CONSTRAINT IS MINTED … BECAUSE THE NECESSITY TEST FAILS RATHER THAN BECAUSE THE SERIES EXPECTS ONE."***

---

## 8. Cross-domain consequences

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 8. **THE DOMAINS ARE TAKEN ONE AT A TIME AND THE RESULT IS
> REPORTED WHETHER IT IS LARGE OR NEGLIGIBLE.**

### 8.1 The twelve consequences, ranked by how expensive they are to discover late

| # | Consequence | Why it is expensive late |
|---|---|---|
| **1** | ⚠ **THE WITHOUT-HISTORY CONTROL ACQUIRES A NEW LEAK CHANNEL THAT IS **REQUIRED TO EXIST BY A LOCKED RULE**** | ⚠ **`X-44`. **A disclosure defect discovered after a tenant has relied on without-history transfers is not repairable retroactively: the disclosure already happened** |
| **2** | ⚠ **A MISTAKENLY-RECORDED `DUMP` HAS NO REP-REACHABLE REMEDY AND PERMANENTLY POLLUTES CLOSED-PERIOD LOSS DATA** | ⚠ **`X-45`. **AD-01I §10.2 constraint 1 forbids restating a closed period, so the pollution is permanent by design** |
| **3** | ⚠ **THE MANAGER/SALES-HEAD AUTHORITY BOUNDARY IS UNDETERMINED WHILE BOTH POPULATIONS CAN ALREADY ACT** | ⚠ **`X-43`. **AD-01B §4's rework-asymmetry standard: an authorization boundary chosen by implementation is an authorization rule chosen by implementation (⟦SOURCE⟧ §88, Spec Rule 4)** |
| **4** | ⚠ **`V-4` ACQUIRES A SIXTH CONSUMER — FOLLOW-UP FULFILMENT — BEFORE IT HAS ONE ANSWER** | ⚠ **`X-46`. **AD-01AC `PF-349`: the five quantities *"MUST SHARE ONE ANSWER OR THEY WILL DISAGREE PERMANENTLY."* **A sixth raises the cost of getting it wrong without raising the cost of answering it** |
| **5** | ⚠ **`M-6` MOVES FROM A PRESENTATION DETAIL TO A CORRECTNESS INPUT** | ⚠ **[§11.3](#113-the-day-boundary-becomes-load-bearing). **A day boundary chosen by implementation silently mis-buckets every follow-up near midnight, for every tenant, forever** |
| **6** | ⚠ **`Success Reason` IS MANDATORY AND HAS NO VALUES** | ⚠ **`AC-59`. **`N-4` is the worked precedent: twenty-five documents of a locked money rule reading a classification with zero approved values** |
| **7** | ⚠ **THE `I2` POPULATION IS ENLARGED TO EVERY ANCESTOR, SHRINKING WHAT ANY RESTRICTION CAN WITHHOLD** | ⚠ **[§9.3](#93-the-i2-population-enlarged-and-what-that-costs-the-without-history-control). **A control that works in a two-level org and fails in a five-level one fails only after the customer grows** |
| **8** | ⚠ **`W-1` BECOMES UNAVOIDABLE, BECAUSE `First Response` IS NOW A RECORDED OBJECT WITH A SCOPE** | ⚠ **[§11.2](#112-the-four-clocks-re-run-under-the-one-inquiry-model). **A milestone recorded at the wrong grain cannot be re-grained retroactively without restating history** |
| **9** | ⚠ **AD-01I `I-8`'s WORK MANDATE IS UNDETERMINED, AND `Z-3` CONSUMES IT** | ⚠ **`A-101`. **AD-01I §12.1 already priced this: *"one described operation is still not fully performable"*** |
| **10** | ⚠ **A PURE DATE-PUSH MUST MASQUERADE AS A COMMUNICATION, AND THE MASQUERADE IS IMMUTABLE AND METRIC-BEARING** | ⚠ **`PF-472`. **Detectable only by comparing against telephony data the product does not have and is forbidden to build (⟦SOURCE⟧ §65, §86)** |
| **11** | ⚠ **AD-01C §3.4's *correction ≠ re-engagement* RULE BECOMES UNENFORCEABLE IN THE `Dump` CASE** | ⚠ **`X-45` step 5. **AD-01F §12.4: *"a true loss can be erased from a closed period, a false loss preserved, or a re-attempt double-counted as a fresh capture"*** |
| **12** | ⚠ **`V-19` IS LOCKED INTO A CAPTURE CONTRACT WITHOUT ITS CLASSIFICATION QUESTION ANSWERED** | ⚠ **AD-01F §7.3 item 2. **A flat heterogeneous master accumulates history that cannot be re-classified afterwards** |

### 8.2 Three consequences that are smaller than they look

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-476` — A RECONCILIATION THAT TREATS EVERY CONSEQUENCE AS LARGE IS AS
> USELESS AS ONE THAT TREATS NONE AS LARGE.**
>
> | Apparent consequence | Why it is smaller |
> |---|---|
> | ⚠ ***"The activity model requires a new entity"*** | ⚠ **NO ENTITY IS NEW TO THE **REQUIREMENTS**. ⟦SOURCE⟧ §09/§80 and consolidated §8/§10 have required a structured activity throughout. ⚠ **AND `PF-454` SHOWS THERE IS NO EXISTING STORAGE MODEL TO MIGRATE** |
> | ⚠ ***"Immutability is a large new constraint"*** | ⚠ **`R6` AND ⟦SOURCE⟧ §07 ALREADY PUSHED HARD IN THIS DIRECTION, AND AD-01's §8.3 ALREADY REQUIRED A DURABLE BUSINESS-LEVEL HISTORY OUTLIVING THE AUDIT WINDOW. ⚠ **WHAT IS GENUINELY NEW IS THE **ABSENCE OF A CORRECTION EVENT**, AND THAT IS `X-45`, NOT IMMUTABILITY ITSELF** |
> | ⚠ ***"Calendar-time First Response contradicts working-hours reporting"*** | ⚠ **THERE IS NO WORKING-HOURS MODEL IN THE CORPUS TO CONTRADICT. ⚠ **CONSOLIDATED §9 CALLED *"exact timezone/working-hour semantics"* AN **OPEN ARCHITECTURE DETAIL** IN THE OWNER'S OWN WORDS, AND `V-20` HELD IT OPEN. **`·J.9` CLOSES A LIMB; IT BREAKS NOTHING** |

### 8.3 What is NOT reached, checked individually

| Domain | Reached? |
|---|---|
| ⚠ **Booking lifecycle (⟦SOURCE⟧ §20, §14, §18; AD-01A §8.2)** | ⚠ **NO** — [§4.5](#45-q4-and-v-22-checked-and-not-reached) |
| ⚠ **Payments, Accounts verification, the CP ledger (⟦SOURCE⟧ §19, §32, §33, §40)** | ⚠ **NO. **`PO-AF1` names no financial object** |
| ⚠ **CP registration, attribution, clash, Stage-1/Stage-2 (the whole `03j`–`03ab` chain)** | ⚠ **NO — `·Q` IS A REAFFIRMATION, AND ONE INDIRECT CONSEQUENCE IS RECORDED AT [§8.5](#85-the-cp-chain-and-c-xxvi-checked-and-not-disturbed-with-one-exception)** |
| ⚠ **Tenant isolation and duplicate detection (`PO-AE1·B`, `·Q`)** | ⚠ **NO** |
| ⚠ **Project-interest provenance and the `CUSTOMER_SUBMITTED` ratchet (`PO-AE1·D`)** | ⚠ **NO** |
| ⚠ **Customer identity, the mobile key, repeat submission (`PO-AE1·B`, `·C`)** | ⚠ **NO** |
| ⚠ **Offline capture, sync and the queued-operation record (⟦SOURCE⟧ §12, §46, §47; `M-14`, `U-20`)** | ⚠ **TOUCHED, NOT REACHED** — [§10.4](#104-offline-and-the-two-timestamps-checked-and-not-disturbed) |
| ⚠ **Post-sales, customer support, service tickets (⟦SOURCE⟧ §71, consolidated §20–§23)** | ⚠ **NO** |

### 8.4 The screenshot, its standing, and the one thing it IS evidence of

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-477` — `PO-AF1·L.4`/`·L.5` STATE THE SCREENSHOT RULE IN THE OWNER'S OWN
> WORDS, WHICH IS THE FIRST TIME THE OWNER HAS STATED IT DIRECTLY RATHER THAN THROUGH CONSOLIDATED §1.**
>
> | What the screenshot is NOT evidence of | What it IS evidence of |
> |---|---|
> | ⚠ **LAYOUT, ORDERING, TYPOGRAPHY, COLOUR, COMPONENTRY, GROUPING, DENSITY, ICONOGRAPHY, INTERACTION OR ANY VISUAL DECISION. **NOT ONE IS DERIVED ANYWHERE IN THIS DOCUMENT** | ⚠ **THAT THE REFERENCE OPERATION PLACED A **SYSTEM-DERIVED FIRST-RESPONSE ENTRY IN THE SAME CHRONOLOGICAL STREAM AS BUSINESS ACTIVITIES** — *"Client Added → Transferred to Amit Tomar → **First Response in 7 minutes** → Phone Call → Qualified → Normal Follow-up …"*** |
| | ⚠ **THAT THE FIRST-RESPONSE ENTRY APPEARED **AFTER A TRANSFER**, WHICH IS DIRECT PROCESS EVIDENCE FOR `·J.3`/`·J.4`'s TRANSFER-ANCHORED INTERVAL AND IS THE STRONGEST NON-TEXTUAL SUPPORT `·J` HAS** |
| | ⚠ **THAT *Current Handler* WAS SURFACED ALONGSIDE THE TIMELINE — CONSISTENT WITH ⟦SOURCE⟧ §10's OWNER/HANDLER SEPARATION AND WITH `PO-AE1·M.1`'s GENERIC TRANSFER ACTIVITY** |
>
> ⚠ **AND ONE THING THE SCREENSHOT DOES **NOT** SETTLE, NAMED BECAUSE IT WOULD BE THE EASIEST THING TO
> INFER FROM IT: **WHETHER THE RECEIVING REP SAW THE PRE-TRANSFER ENTRIES.** ⚠ **THE SEQUENCE SHOWS
> *Client Added* BEFORE *Transferred*, WHICH WOULD BE A **WITH-HISTORY** VIEW — BUT AD-01F §1.2 AND
> `PO-AF1·L.4` BOTH MAKE THE SCREENSHOT EVIDENCE OF THE **HISTORICAL** SYSTEM, WHICH HAD NO
> WITHOUT-HISTORY CONTROL. ⚠ **INFERRING A DISCLOSURE RULE FROM IT WOULD ANSWER `X-44` FROM A PICTURE.**

### 8.5 The CP chain and C-XXVI, checked and NOT disturbed — with one exception

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-478` — `PO-AF1` MENTIONS NO CP SUBJECT. **THE CHECK IS RUN ANYWAY,
> BECAUSE AD-01AE'S HEADLINE FINDING WAS THAT A NON-CP DECISION HAD FOUR CP CONSEQUENCES.**
>
> | Link | Reached by `PO-AF1`? |
> |---|---|
> | ⚠ **`C-XXVI` — the Project operand must be CARRIED, never derived from the `Inquiry`** | ⚠ **NOT DISTURBED — AND ONE TENSION IS NAMED. ⚠ **`PO-AF1·P.3` SAYS *"commercial status is at `Inquiry` level"*, WHICH IS AN `Inquiry`-LEVEL STATEMENT SITTING BESIDE A CONSTRAINT THAT FORBIDS DERIVING A **PROJECT** FROM AN `Inquiry`. ⚠ **THEY DO NOT COLLIDE — `C-XXVI` BINDS THE **PROJECT OPERAND OF A COMMERCIAL DETERMINATION**, NOT THE **LEVEL OF A STATUS** — AND `C-XXVI` REMAINS `ARCHITECT DERIVED`, UNRATIFIED, AND EXPRESSLY UNRATIFIABLE BEFORE `AC-50` AND `AC-53`** |
| ⚠ **`AC-50` — the grain of commercial disposition** | ⚠ **NOT ANSWERED — AND `·P.2`/`·P.3` **SPEAK TO LIMB (a)** WITHOUT CLOSING THE ITEM** — [§13.2](#132-items-answered-narrowed-or-re-homed-checked-individually) |
| ⚠ **`AC-53` / `T-4` / `T-5` — does a pre-`Dump` CP claim survive revival** | ⚠ **NOT REACHED. ⚠ **AND SHARPENED WITHOUT BEING ANSWERED: `·K.5`'s *Revival #1, #2, #3* MAKES THE NUMBER OF REVIVALS ON ONE `Inquiry` EXPLICITLY UNBOUNDED, SO WHATEVER `AC-53` DECIDES MUST HOLD FOR AN ARBITRARY NUMBER OF REVIVALS, NOT ONE** |
| ⚠ **`X-36`, `X-37`, `X-38` — the CP chain's `Inquiry`-scoping breakages** | ⚠ **ALL THREE STANDING, UNDISCHARGED, UNTOUCHED** |
| ⚠ **`W-4` — *inquiry → first response* for SOURCE / CAMPAIGN / CP responsiveness** | ⚠ **THE ONE GENUINE CP-ADJACENT CONSEQUENCE, AND IT IS A **CONSEQUENCE, NOT A CONTRADICTION**.** ⚠ **AD-01G §9 MINTED `W-4` BECAUSE *"the source is the inquiry's"*, SO A PER-`Inquiry` FIRST RESPONSE IS WHAT MAKES CP AND CAMPAIGN RESPONSIVENESS MEASURABLE. ⚠ **UNDER `PO-AE1·A` ONE `Inquiry` HOLDS MANY PROJECT INTERESTS FROM POSSIBLY DIFFERENT SOURCES AND DIFFERENT CPs — SO `·J.5`'s ***"the Inquiry's overall First Response"*** IS A **SINGLE NUMBER SPANNING SEVERAL SOURCES**, AND TELLING CP A ABOUT A RESPONSE THAT MAY HAVE BEEN TO CP B's PROJECT IS BOTH A MEASUREMENT ERROR AND A ⟦SOURCE⟧ §39/§11 DISCLOSURE QUESTION** |
>
> ⚠ **THE CP-FACING LIMB IS RECORDED AS AN **ENLARGEMENT OF `U-16` AND OF AD-01AE `PF-434`'s
> CROSS-PROJECT DISCLOSURE SURFACE**, AND IS **NOT MINTED AS A NEW ITEM**, BECAUSE `U-16` AND `W-4`
> ALREADY OWN IT AND MINTING A THIRD WOULD SPLIT ONE QUESTION THREE WAYS.**

---

## 9. Security / RLS consequences

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 9.** ⚠ **⟦SOURCE⟧ **§88** RESERVES *tenant architecture,
> RLS, authorization and authentication* TO THE OWNER. **NOTHING BELOW DESIGNS A POLICY, A PREDICATE, A
> ROLE, A PERMISSION NAME, A GRANT SHAPE OR A TENANCY MECHANISM.** **This section states what the
> authorization model must be ABLE TO EXPRESS, and where the existing conceptual model cannot express
> it.**

### 9.1 The four authorization facts PO-AF1 makes mandatory

| # | Fact the model must express | Source |
|---|---|---|
| **1** | ⚠ **A **WRITE** AUTHORITY BOUND TO THE CURRENT OWNER ALONE, COVERING EVERY ACTIVITY AND EVERY FOLLOW-UP — NOT ONLY `Dump`** | ⚠ **`·B.9`, extending `PO-AE1·H.1`** |
| **2** | ⚠ **A **MANAGEMENT SCOPE** COMPUTED FROM THE DIRECT-AND-INDIRECT REPORTING TREE, WHICH PROJECT MEMBERSHIP CANNOT WIDEN** | ⚠ **`·B.1`–`·B.5`** |
| **3** | ⚠ **A **READ-WITHOUT-WRITE** MANAGEMENT ENTITLEMENT WITH EXACTLY ONE WRITE EXCEPTION — TRANSFER / REASSIGNMENT — AND NO OTHER** | ⚠ **`·B.6`, `·B.7`** |
| **4** | ⚠ **AN ENTITLEMENT EVALUABLE PER **RESPONSE INTERVAL**, NOT ONLY PER CUSTODY INTERVAL, BECAUSE `·K.1` OPENS A RESPONSE CYCLE **WITHOUT** A CUSTODY CHANGE (manual revive, keep owner) AND `·J.3` OPENS ONE **WITH** ONE** | ⚠ **`·J.3`, `·K.1`; AD-01G §8.1's `I1`; AD-01AE `A-92`** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-479` — FACT 4 IS THE ONE NOBODY HAS STATED, AND IT IS RECORDED HERE
> BECAUSE IT BREAKS AN ASSUMPTION THE ENTITLEMENT MODEL HAS CARRIED SINCE AD-01G.** ⚠ **AD-01G §8.1
> SCOPED `I1` TO *"the viewer personally held the record DURING THAT INTERVAL"*, AND EVERY DOCUMENT
> SINCE HAS READ *interval* AS *CUSTODY interval*. ⚠ **`PO-AF1·K.1` CREATES A SECOND KIND OF INTERVAL
> THAT **DOES NOT ALIGN WITH CUSTODY**: a manual revive that keeps the current owner opens a NEW
> response cycle while the custody interval continues unbroken.** ⚠ **A RECORD CAN THEREFORE CARRY ONE
> CUSTODY INTERVAL AND THREE RESPONSE CYCLES.** ⚠ **AD-01AE's `A-92` ALREADY ASKED WHETHER `I1` NEEDS
> REDEFINING OR A FOURTH INPUT; THIS ADDS A **SECOND, INDEPENDENT REASON** FOR THE SAME AMENDMENT AND
> **DOES NOT MAKE IT** — `A-92` STAYS NAMED AND UNMADE, AND `AC-51`(d) STILL OWNS THE CHOICE.**

### 9.2 The management-scope definition, and what it does and does not answer for U-10 and M-7

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-480` — `U-10` HAS BEEN OPEN SINCE AD-01E AND `PO-AF1·B` IS THE FIRST
> TEXT IN THE CORPUS TO SUPPLY ANY PART OF ITS ANSWER. **THE PART IS NAMED PRECISELY SO THAT THE REST
> IS NOT ASSUMED CLOSED WITH IT.**
>
> | `U-10`'s limb | Status after `PO-AF1·B` |
> |---|---|
> | ⚠ **(i) WHAT DEFINES THE BREADTH OF A MANAGEMENT GRANT?** | ⚠ **ANSWERED: **THE DIRECT-AND-INDIRECT REPORTING TREE**, and *"every direct or indirect ancestor … is within the relevant management scope"* (`·B.5`). ⚠ **AND IT ANSWERS IT IN THE SHAPE `R2` DEMANDS — A BREADTH RULE OVER A STRUCTURE, NOT A BRANCH ON A ROLE NAME** |
| ⚠ **(ii) WHAT DOES **NOT** WIDEN IT?** | ⚠ **ANSWERED: PROJECT MEMBERSHIP (`·B.3`, `·B.4`, `·P.17`). ⚠ **THIS IS NEW AND IT IS A REAL RESTRICTION — ⟦SOURCE⟧ §08's PROJECT SCOPING MAY **NARROW** WHAT A VIEWER SEES AND MAY NEVER **WIDEN** WHAT A MANAGER CONTROLS** |
| ⚠ **(iii) WHICH PRINCIPALS HOLD SUCH A GRANT, AND WHAT IS THE GRANT CALLED?** | ⚠ **NOT ANSWERED. **⟦SOURCE⟧ §03's ELEVEN ROLES STILL DO NOT INCLUDE *Reporting Manager*; `M-3` (the default role set) AND `M-7` (the record-visibility breadth vocabulary) ARE **BOTH OPEN**; AND `R2` STILL FORBIDS BRANCHING ON A ROLE NAME** |
| ⚠ **(iv) IS *MANAGER* THE SAME PRINCIPAL AS *SALES HEAD* / *SITE HEAD*?** | ⚠ **NOT ANSWERED — AND IT IS NOW **CONTRADICTORY** RATHER THAN MERELY OPEN, BECAUSE TWO LOCKED CLAUSES GIVE TWO ANSWERS** → `X-43`, `AC-55` |
>
> ⚠ **`U-10` IS THEREFORE `NARROWED`, NOT CLOSED, AND IS COUNTED AS A **PARTIAL** AT
> [§13.2](#132-items-answered-narrowed-or-re-homed-checked-individually).**

### 9.3 The I2 population enlarged, and what that costs the without-history control

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-481` — A CONSEQUENCE THAT FOLLOWS FROM TWO LOCKED CLAUSES AND THAT
> NEITHER OF THEM STATES.**
>
> ⟦PRODUCT-OWNER DECISION⟧ **`PO-AE1·O.1`:** ***"the Site Head sees team customers and complete
> histories … the Site Head sees the complete history **even if the rep received WITHOUT HISTORY**."***
> ⟦PRODUCT-OWNER DECISION⟧ **`PO-AF1·B.5`:** ***"**every direct or indirect ancestor** in the reporting
> hierarchy is within the relevant management scope."***
>
> | Question | Answer |
> |---|---|
> | **Do the two conflict?** | ⚠ **NO. **They point the same way, and AD-01G §9.3 constraint 1 (*"a restriction must NEVER apply to `I2`"*) is satisfied by both** |
> | **Is `W-5` therefore answered?** | ⚠ **NO — AND CALLING IT ANSWERED WOULD BE THE ARCHITECT SUPPLYING THE OWNER'S AFFIRMATION.** **`W-5` asks whether the OWNER AFFIRMS that a restriction may never apply to `I2`. **`·O.1` affirms it FOR THE SITE HEAD. **`·B.5` says every ancestor is IN SCOPE and says **nothing** about whether every ancestor gets COMPLETE HISTORY.** ⚠ **SCOPE AND HISTORY ENTITLEMENT ARE DIFFERENT FACTS — AD-01AE §8.1 SEPARATION 3 IS EXACTLY THIS — AND `W-5` IS THEREFORE **OPEN AND ENLARGED**** |
| **What is the consequence if every ancestor does get complete history?** | ⚠ **THE WITHOUT-HISTORY CONTROL'S REACH SHRINKS AS THE ORGANISATION DEEPENS. **In a two-level team it withholds from everyone but one Site Head. **In a five-level builder it withholds from one rep while four ancestors read everything.** ⚠ **THAT IS NOT AN OBJECTION — IT MAY BE EXACTLY WHAT THE OWNER WANTS — BUT IT IS A PROPERTY THE OWNER SHOULD HOLD KNOWINGLY, AND IT IS NOT STATED ANYWHERE** |
| **And if they do not?** | ⚠ **THEN THERE IS AN `I2` POPULATION WITH SCOPE AND WITHOUT HISTORY, WHICH AD-01G §9.3 CONSTRAINT 1 WAS WRITTEN TO FORBID, AND WHICH ⟦SOURCE⟧ §54's AUDIT-REVIEW PURPOSE DEPENDS ON NOT EXISTING** |
>
> ⚠ **RECORDED AS `VALIDATE-OPEN` UNDER `W-5`, AND **NOT** MINTED AS A NEW `AC-` ITEM, BECAUSE `W-5`
> ALREADY OWNS EXACTLY THIS QUESTION AND HAS OWNED IT SINCE AD-01G.**

### 9.4 What authorization must be able to express, as a checklist — the additions only

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **AD-01AE §8.6 GAVE A TEN-ROW CHECKLIST. **IT IS NOT REPEATED. **FIVE ROWS ARE
> ADDED AND THE EXISTING TEN ARE CARRIED UNCHANGED.**
>
> | # | New expressible requirement | Source |
> |---|---|---|
> | **11** | ⚠ **A WRITE AUTHORITY OVER **ACTIVITIES AND FOLLOW-UPS** BOUND TO EXACTLY ONE PRINCIPAL — the current owner — AND EXPRESSLY DENIED TO EVERY MANAGEMENT PRINCIPAL IN SCOPE** | ⚠ **`·B.8`, `·B.9`** |
| **12** | ⚠ **A MANAGEMENT BREADTH DERIVED FROM A **TREE**, WITH ANCESTRY AS THE PREDICATE AND PROJECT MEMBERSHIP EXPLICITLY EXCLUDED AS AN INPUT** | ⚠ **`·B.1`–`·B.5`** |
| **13** | ⚠ **A READ ENTITLEMENT EVALUABLE OVER A **RESPONSE INTERVAL** THAT MAY NOT ALIGN WITH A CUSTODY INTERVAL** | ⚠ **`·J.3`, `·K.1`; `PF-479`** |
| **14** | ⚠ **A PROJECTION RULE FOR **DERIVED MILESTONES** SEPARATE FROM THE PROJECTION RULE FOR THE ACTIVITIES THEY ARE DERIVED FROM — because a milestone can leak what its source activity is hidden to protect** | ⚠ **`X-44`; `·H.3`, `·J.6` — **NOT EXPRESSIBLE TODAY**, and `V-10`'s surface list does not name it** |
| **15** | ⚠ **A DISTINCTION BETWEEN *THE CURRENT OWNER* AND *THE ASSIGNED HANDLER*, IF ⟦SOURCE⟧ §10's TWO REFERENCES ARE TWO PEOPLE** | ⚠ **`·B.9` names *"Client Owner / Sales Rep"* as one thing; ⟦SOURCE⟧ §10 and consolidated §12 carry *inquiry owner* and *Assigned To / Lead Handler* as **two columns*** → `AC-55`(d) |

### 9.5 Adversarial cases arising from PO-AF1, named and not designed against

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-482` — AD-01E `R7` STANDS: *the feature is not complete until tests prove
> a restricted handler cannot reach restricted content through API, search, export, reports,
> notifications, attachments or offline caches*. **SIX CASES ARE NAMED. **NO TEST, HARNESS, FIXTURE,
> SELECTOR OR ASSERTION IS PROPOSED.**
>
> | # | Case |
> |---|---|
> | **1** | ⚠ **A rep who received a record WITHOUT history reads the `Inquiry`-level `First Response` milestone — or infers it from its absence — and learns whether anyone responded before them** — `X-44` leak 1 |
> | **2** | ⚠ **A rep counts response intervals on a record they hold and thereby counts prior handlers** — `X-44` leak 2 |
> | **3** | ⚠ **A **MANAGER** who is not a Sales Head reassigns a `Dumped` customer and thereby performs a revival, with no separate event to audit the authorization against** — `X-43`, `PO-AE1·G.5` |
| **4** | ⚠ **A manager who cannot create a follow-up creates one in effect, by transferring a record whose open follow-ups then carry to a rep of the manager's choosing** — `X-42` |
| **5** | ⚠ **A **NOTIFICATION** (`·N.1`) delivered to a rep about a follow-up CARRIED OVER from a hidden pre-transfer interval — a channel that leaves the application entirely.** ⚠ **AD-01E §12 ROW *Notifications (§58)* NAMED THIS SHAPE ALREADY: *"a reminder … that references a prior-episode commitment, actor or fact leaks through a channel that leaves the application entirely."* ⚠ **`PO-AE1`'s `AC-51`(c) OWNS THE CARRY-OVER; `·N` ADDS THE CHANNEL** |
| **6** | ⚠ **An **OFFLINE CACHE** holding response-interval data for a record whose history mode later changes — the one place `·L.3`'s server-side projection rule cannot reach (AD-01AE `PF-433`; `U-20`, `M-14`).** ⚠ **NAMED, NOT SOLVED. **NO OFFLINE RULE IS ADDED BY THIS DOCUMENT** |

---

## 10. Data-model consequences — implications only, no schema

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 10, and the owner's instruction is quoted so it governs the
> whole section: *"ONLY identify implications; do not design schema yet."*** ⚠ **NO TABLE, COLUMN,
> TYPE, KEY, INDEX, CONSTRAINT, MASTER VALUE, ENUM, RELATIONSHIP CARDINALITY OR MIGRATION APPEARS
> BELOW, AND NONE MAY BE DERIVED FROM BELOW.**

### 10.1 The facts PO-AF1 requires the domain to be able to HOLD

| # | Fact | Clause |
|---|---|---|
| **1** | ⚠ **That an activity has a COMMUNICATION TYPE drawn from a configured set, and SEPARATELY an OUTCOME drawn from exactly three** | `·C.2`–`·C.5` |
| **2** | ⚠ **That the fields carried alongside the outcome DIFFER BY OUTCOME** | `·D.1`, `·E.1`, `·F.1` |
| **3** | ⚠ **That an activity, once saved, never changes** | `·G.1`, `·G.5` |
| **4** | ⚠ **That a later activity correcting an earlier one carries NO relationship to it** | ⚠ **`·G.3` — a NEGATIVE requirement, and the only one in the set** |
| **5** | ⚠ **That a `First Response` MILESTONE is a distinct recorded event from the activity that produced it** | `·H.3`, `·H.4` |
| **6** | ⚠ **That a milestone identifies its SYSTEM source, distinguishably from a user actor** | `·L.2` |
| **7** | ⚠ **That a record carries an ORDERED SERIES of response cycles, each with a start event, a start timestamp, and an outcome that is either a `First Response` or `No Response / Transferred`** | `·J.1`–`·J.8`, `·K.1`–`·K.8` |
| **8** | ⚠ **That a cycle's start event is one of THREE KINDS — creation, transfer, reactivation — and that the kind is recoverable** | `·J.2`, `·J.3`, `·K.3` |
| **9** | ⚠ **That earlier cycles are never rewritten by later ones** | `·J.8`, `·K.6` |
| **10** | ⚠ **That an `Inquiry`-level overall `First Response` exists and is distinct from any cycle's own interval** | ⚠ **`·J.5` — AND IT IS THE FACT `X-44` LEAK 1 TURNS ON** |
| **11** | ⚠ **That a follow-up has a terminal disposition that distinguishes FULFILLED from CANCELLED, and that the fulfilling act is identifiable** | ⚠ **`·O.1`, `·O.2`, and `PO-AE1·E.8` — **AND `X-46` MEANS THE TWO VALUES CURRENTLY COLLIDE ON ONE CASE** |
| **12** | ⚠ **That a tenant-defined `Dump` reason carries all three system-owned classifications** | `·F.4`; AD-01A §8.3 |
| **13** | ⚠ **That a `Success Reason` exists at all** | ⚠ **`·E.1` — **WITH NO VALUES, NO CLASSIFICATION AND NO OWNING QUESTION** → `AC-59` |

### 10.2 The one genuinely new conceptual requirement

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-483` — TWELVE OF THE THIRTEEN FACTS ABOVE ARE HOLDABLE BY CONCEPTS THE
> CORPUS ALREADY NAMES. **ONE IS NOT, AND IT IS NAMED RATHER THAN DESIGNED.**
>
> ⚠ **THE RESPONSE CYCLE IS A **BOUNDED, ORDERED, NEVER-OVERWRITTEN UNIT WITH ITS OWN START EVENT AND
> ITS OWN TERMINAL OUTCOME**, AND IT IS **NOT** THE CUSTODY INTERVAL.**
>
> | Why it is not the custody interval | Evidence |
> |---|---|
> | ⚠ **A manual revive that KEEPS the owner opens a response cycle and opens NO custody interval** | ⚠ **`·K.1` + `PO-AE1·G.2`** |
> | ⚠ **An automatic form-driven revival opens a response cycle with NO management act at all** | ⚠ **`·K.3` + `PO-AE1·F`; and AD-01I `I-7`'s *"two events the architecture must never merge"* is the governing separation** |
> | ⚠ **A custody interval has no notion of *No Response*; a response cycle's terminal outcome is exactly that** | ⚠ **`·J.6`** |
>
> ⚠ **WHAT IS **NOT** CONCLUDED FROM THIS, STATED IN TERMS: **NOTHING HERE SAYS THE RESPONSE CYCLE IS A
> NEW ENTITY, A NEW TABLE, A NEW CANONICAL OBJECT OR A NEW LIFECYCLE.** ⚠ **AD-01I `I-9` REFUSED A NEW
> CANONICAL OBJECT FOR THE WORK MANDATE AND AD-01H `H-10` REJECTED THE SALES EPISODE; BOTH REFUSALS
> STAND AND NEITHER IS REOPENED.** ⚠ **⟦SOURCE⟧ **§88** RESERVES CANONICAL ENTITIES AND RELATIONSHIPS
> TO THE OWNER, AND THIS SECTION IDENTIFIES A **FACT THAT MUST BE HOLDABLE**, NOT A THING THAT MUST
> EXIST.**

### 10.3 Representability, checked against the model as PO-AE1 left it

| Requirement | Holdable by an existing concept? |
|---|---|
| ⚠ **The activity itself, with its two dimensions and per-outcome fields** | ⚠ **YES — AD-01F §7.2 class 1 (*"a first-class business record. The core of the timeline"*)** |
| ⚠ **The `First Response` milestone** | ⚠ **YES, AS A NEW MEMBER OF AD-01F §7.2 CLASS 2 (*system-generated events*), WHICH THE MODEL ALREADY REQUIRES AND WHICH CONSOLIDATED §9 ALREADY EXCLUDES FROM FUT** |
| ⚠ **The transfer that opens a cycle** | ⚠ **YES — ⟦SOURCE⟧ §06's ASSIGNMENT LOG, which AD-01F §7.2 class 4 calls *"the record that defines the custody interval"* and which `PO-AE1·I.4` makes MANDATORY** |
| ⚠ **The revival that opens a cycle** | ⚠ **YES — `PO-AE1·F.8`'s renewed-interest system activity and `PO-AE1·G`'s revive act** |
| ⚠ **The cycle's terminal outcome** | ⚠ **NOT HELD BY ANY NAMED CONCEPT. **`No Response / Transferred` IS A NEW VALUE ON A NEW AXIS** |
| ⚠ **The follow-up's FULFILLED-versus-CANCELLED disposition** | ⚠ **NOT HELD. **`PO-AE1·E.8` GAVE *cancelled*; `·O.1` GIVES *fulfilled*; NOTHING NAMES THE AXIS THEY SHARE, AND `X-46` MEANS THEY CURRENTLY COLLIDE** |
| ⚠ **The activity's association to a Project Interest** | ⚠ **REQUIRED BY `PO-AE1·A.7` AND UNSPECIFIED IN CARDINALITY — `W-1`** |

### 10.4 Offline, and the two timestamps — checked and NOT disturbed

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-484` — THE CHECK IS RUN BECAUSE `·E.2` USES THE WORD *AUTHORITATIVE*
> ABOUT A TIMESTAMP, AND ⟦SOURCE⟧ §12's OFFLINE CAPTURE IS THE ONE PLACE WHERE TWO TIMESTAMPS
> LEGITIMATELY DISAGREE.**
>
> | Question | Answer |
> |---|---|
> | **What does `·E.2` actually say?** | ⟦PRODUCT-OWNER DECISION⟧ ***"The timestamp of the completed/proceeded activity is the authoritative activity timestamp."*** ⚠ **ITS SUBJECT IS **WHICH MOMENT OF THE CAPTURE INTERACTION COUNTS** — the moment the rep proceeds, not the moment they opened the form** |
> | **Does it collapse AD-01 §8.3 / `E-23`'s recorded-versus-effective split?** | ⚠ **NO, AND NOTHING HERE INFERS THAT IT DOES. **AD-01F §7.4 requires *"recorded time **and** effective time separately … offline backdating makes these genuinely different."* **`·E.2` does not mention offline, sync, backdating or the queued-operation record** |
> | **Does `·J.9`'s calendar-elapsed rule interact with offline?** | ⚠ **YES, AND IT IS NAMED RATHER THAN SOLVED: **AN ACTIVITY CAPTURED OFFLINE AT 09:00 AND SYNCED AT 17:00 PRODUCES TWO DIFFERENT `First Response` VALUES DEPENDING ON WHICH TIMESTAMP THE DERIVATION READS.** ⚠ **AND `·G.4` FORBIDS RECALCULATION, SO WHICHEVER IS READ FIRST IS **PERMANENT**.** ⚠ **`M-14` AND `U-20` REMAIN OPEN AND THIS DOCUMENT ADDS NO OFFLINE RULE** |
| **Is AD-01A §8.4's sync ≠ verification rule touched?** | ⚠ **NO** |

### 10.5 Migration implications, stated as an absence

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-485` — THE OWNER'S PROCESS PLACES *Data Model* AFTER *PO Approval*, AND
> THE ONLY HONEST MIGRATION STATEMENT AT THIS STAGE IS THAT THERE IS NOTHING TO MIGRATE.**
> ⚠ **`schema-phase-0.sql` CONTAINS NO ACTIVITY, FOLLOW-UP, MILESTONE OR TASK TABLE; `00` §842 SAYS
> *"Phase 0 has no CRM business-object tables"*; AND AD-01A §3.8 FLAGS THE SEEDED `lead_loss_reasons`
> ROWS AS AN OPEN QUESTION WHOSE ANSWER IS THE OWNER'S.** ⚠ **NO MIGRATION PLAN, SEQUENCE, BACKFILL,
> DUAL-WRITE OR CUTOVER IS PROPOSED, AND NONE IS NEEDED TO BE PROPOSED AT THIS STAGE.**
> ⚠ **ONE FORWARD-LOOKING IMPLICATION IS RECORDED BECAUSE IT IS CHEAP NOW AND EXPENSIVE LATER, AND IT
> IS RECORDED AS AN **IMPLICATION AND NOT AS A DESIGN**: ⚠ **`·G.1`'s IMMUTABILITY AND `·K.6`'s
> NEVER-OVERWRITTEN GUARANTEE ARE **PROPERTIES THAT CANNOT BE ADDED RETROACTIVELY** — a record that was
> once mutable cannot later be proved to have been immutable, which is AD-01B §4's rework-asymmetry
> standard applied to this decision set.**

### 10.6 What this document expressly does NOT authorise

| | |
|---|---|
| ⚠ **Any table, column, type, key, index, constraint or migration** | ⚠ **NOT AUTHORISED** |
| ⚠ **Any `Communication Type`, `Response Type`, `Sub-response`, `Success Reason` or `Dump Reason` VALUE** | ⚠ **NOT AUTHORISED. `N-4`, `V-19` AND `AC-59` OWN THEM** |
| ⚠ **Any activity-capture form, control, ordering, wizard or one-tap affordance** | ⚠ **NOT AUTHORISED. ⟦SOURCE⟧ §13's one-tap disposition versus §95's minimum-necessary-friction is `V-11`'s control half and is OPEN** |
| ⚠ **Any notification channel, cadence, reminder interval or digest** | ⚠ **NOT AUTHORISED — `·N.4` forbids it in the owner's own words** |
| ⚠ **Any timeline UI, grouping, filter or rendering** | ⚠ **NOT AUTHORISED — `·L.5` forbids it in the owner's own words** |
| ⚠ **Any RLS policy, grant shape, role vocabulary or permission name** | ⚠ **NOT AUTHORISED. ⟦SOURCE⟧ §88; `M-3`, `M-7` OPEN** |
| ⚠ **Any SLA, threshold, target, window or working-hour rule** | ⚠ **NOT AUTHORISED. `Q14`, `Q2`, `N-2` OPEN** |
| ⚠ **Any canonical entity or relationship** | ⚠ **NOT AUTHORISED. ⟦SOURCE⟧ §88 RESERVES THEM** |

---

## 11. Reporting / analytics consequences

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 11.** ⚠ **THE GOVERNING CONSTRAINT IS STATED AT THE HEAD AND
> HONOURED THROUGHOUT: **NO FORMULA, NO DENOMINATOR, NO NUMERATOR, NO RATE, NO THRESHOLD, NO SLA
> TARGET, NO DASHBOARD, NO CHART AND NO METRIC DEFINITION APPEARS ANYWHERE BELOW.** **This section
> states which BUSINESS FACTS reporting must be able to distinguish, and which previously-answerable
> questions have become harder.**

### 11.1 The seven distinctions reporting must now be able to make

| # | Distinction | Why `PO-AF1` creates or sharpens it |
|---|---|---|
| **1** | ⚠ **A COMMUNICATION CHANNEL versus AN OUTCOME** | ⚠ **`·C.4`. **Previously one field answered *"what did the rep do"* and *"what happened"*. **Two dimensions mean *calls made* and *follow-ups produced* are now DIFFERENT COUNTS, and a report that uses one for the other is wrong in a way the old model could hide** |
| **2** | ⚠ **AN `Inquiry`-LEVEL OVERALL `First Response` versus A PER-CYCLE INTERVAL** | ⚠ **`·J.5` versus `·J.4`/`·K.4`. **They answer different questions — *how fast did the business respond* versus *how fast did THIS rep respond* — and `PF-350`'s warning applies verbatim: *"a product that ships one of them under the name FIRST RESPONSE will be read as having shipped the others"*** |
| **3** | ⚠ **A CYCLE THAT ENDED IN A RESPONSE versus ONE THAT ENDED IN `No Response / Transferred`** | ⚠ **`·J.6`. **THIS IS A NEW, NAMED, ADVERSE PERFORMANCE FACT ABOUT AN INDIVIDUAL, AND IT IS THE FIRST ONE IN THE CORPUS** |
| **4** | ⚠ **A FOLLOW-UP THAT WAS **FULFILLED** versus ONE THAT WAS **CANCELLED BY `Dump`**** | ⚠ **`·O.1` versus `PO-AE1·E.8`. ⚠ **AND `X-46` MEANS THE TWO CURRENTLY COLLIDE ON THE ONE CASE THAT MATTERS MOST TO A WORKLOAD FIGURE** |
| **5** | ⚠ **AN ORIGINAL CYCLE versus A REVIVAL CYCLE versus A TRANSFER CYCLE** | ⚠ **`·J.2`/`·J.3`/`·K.3`. ⚠ **AD-01I `I-13` ALREADY REQUIRED *Reactivation* BE TWO FACTS (customer-generated · management-generated). **`PO-AF1` MAKES IT **THREE CYCLE KINDS**, AND MERGING ANY TWO REPRODUCES AD-01F §12.4's CENTRAL ERROR AT THE METRIC LAYER** |
| **6** | ⚠ **A CORRECTING ACTIVITY versus AN ORDINARY ONE** | ⚠ **`·G.3` MAKES THEM **INDISTINGUISHABLE BY DESIGN**. ⚠ **AD-01C §3.4's CLAIM THAT *"corrections become COUNTABLE — a corrected-state rate is itself a data-quality signal and passes §63's test"* IS THEREFORE **NO LONGER AVAILABLE AT THE ACTIVITY LEVEL**, and the loss is recorded rather than argued against** |
| **7** | ⚠ **A `Today` BUCKET UNDER THE CALENDAR-DATE RULE versus UNDER THE CLOCK-TIME RULE** | ⚠ **`·M.3`–`·M.6`. **Any historical or comparative figure that spans the change will mix two definitions, and AD-01I §10.2 constraint 1 forbids restating the earlier one** |

### 11.2 The four clocks, re-run under the one-Inquiry model

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-486` — AD-01AC §9.3 REGISTERED FOUR CLOCKS AND SELECTED NONE.
> **`PO-AF1·J`/`·K` IS THE FIRST TEXT TO SELECT ANY, AND THE SELECTION IS REPORTED EXACTLY.**
>
> | Clock | Registered as | Status under `PO-AF1` |
> |---|---|---|
> | ⚠ **creation → first response** | `V-20` | ⚠ **SELECTED — `·J.2`** |
> | ⚠ **assignment → first response** | `V-20`; consolidated §9 flags it open | ⚠ **NOT SELECTED AND NOT REFUSED.** ⚠ **`·J.3` ANCHORS ON **TRANSFER**, AND A LEAD'S **INITIAL** ASSIGNMENT IS NOT A TRANSFER. **SO A LEAD CREATED UNASSIGNED AND ASSIGNED TWO HOURS LATER HAS NO CLAUSE GOVERNING ITS FIRST INTERVAL, AND `·J.2` WOULD CHARGE THOSE TWO HOURS TO THE RECEIVING REP.** ⚠ **CONSOLIDATED §9 EXPRESSLY LEFT *"whether BMexa will store both creation-to-first-action and assignment-to-first-action"* OPEN, AND IT REMAINS OPEN** |
> | ⚠ **custody → first response** | `V-20`; AD-01I §10.1 row 9 made it *required* | ⚠ **SELECTED IN SUBSTANCE — `·J.3`/`·J.4`'s transfer interval IS the custody clock, and `·K.1`'s revival cycle EXTENDS it to a second producer AD-01I did not contemplate** |
> | ⚠ **inquiry → first response (`W-4`)** | AD-01G `W-4`; AD-01H §10.2 made it *necessary* | ⚠ **SELECTED IN NAME — `·J.5`'s *"the `Inquiry`'s overall First Response"*.** ⚠ **AND **PARTLY DEFEATED IN PURPOSE** BY `PO-AE1·A`: `W-4` EXISTS BECAUSE *"the source is the Inquiry's"*, AND UNDER ONE `Inquiry` PER CUSTOMER THE `Inquiry` HAS **MANY** SOURCES** — [§8.5](#85-the-cp-chain-and-c-xxvi-checked-and-not-disturbed-with-one-exception) |
>
> ⚠ **`V-20` AND `W-4` ARE THEREFORE **ADVANCED, NOT CLOSED**, AND THE ADVANCE IS COUNTED AS A PARTIAL.**
> ⚠ **AND `W-1` — *one call covering two projects: one first-response or two?* — IS NOW **UNAVOIDABLE**,
> because `·J.5` requires a single `Inquiry`-level number while `PO-AE1·A.7` requires project
> segregation via activity/project association. **NOTHING HERE ANSWERS IT.**

### 11.3 The day boundary becomes load-bearing

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-487` — THE TASK'S BRIEF ASKED WHETHER DERIVED-NOT-STORED BUCKETS ARE
> CONSISTENT WITH ANYTHING COMMITTED AS STORED. **THEY ARE — [§4.1](#41-the-load-bearing-confirmations)
> ROW 1. **THE PROBLEM IS NOT STORAGE. **IT IS THAT THE NEW PREDICATE NEEDS AN INPUT NOBODY HAS
> SUPPLIED.**
>
> | | |
> |---|---|
> | **The old predicate** | ⚠ **A COMPARISON OF TWO **INSTANTS**: *has the scheduled time passed?* **AD-01 §5.1's *"authoritative server time"* IS SUFFICIENT FOR IT, AND ⟦SOURCE⟧ §18's PRINCIPLE SUPPLIES IT** |
| **The new predicate** | ⚠ **A COMPARISON OF TWO **CALENDAR DATES**: *is today the scheduled date, or a later one?* ⚠ **A CALENDAR DATE IS NOT DERIVABLE FROM AN INSTANT WITHOUT A TIMEZONE** |
| **Where the timezone question lives** | ⚠ **`M-6` (timezone/region semantics) AND `V-20` (first-response timezone semantics). **AD-01AC §10.3 STATES IT EXACTLY: *"against WHICH CLOCK — server, tenant or viewer — is `today` evaluated, and where does the day break."* **BOTH OPEN** |
| **What it is NOT** | ⚠ **NOT `AC-6`. **AD-01AC §10.3 RAN THIS CHECK AT `AC-6`'s MINT AND FOUND *"`AC-6` FIXES AN ORDINAL DAY-COUNTING CONVENTION FOR A WINDOW OF LENGTH `N`"* — A DIFFERENT OBJECT. ⚠ **THAT FINDING IS CARRIED FORWARD UNCHANGED AND `AC-6` IS NOT ENLARGED** |
| **Why it now matters more** | ⚠ **UNDER THE OLD PREDICATE A TIMEZONE ERROR MIS-BUCKETED A FOLLOW-UP FOR MINUTES. ⚠ **UNDER THE NEW ONE IT MIS-BUCKETS FOR A **WHOLE DAY**, FOR EVERY FOLLOW-UP NEAR A DAY BOUNDARY, IN EVERY TENANT** |
| **Amendment** | ⚠ **`A-97` — NAMED AND NOT MADE** |
>
> ⚠ **AND THE SYMMETRIC RESULT, RECORDED SO THE SPLIT IS NOT LOST: **`·J.9` MAKES `First Response`
> **TIMEZONE-INDEPENDENT** — an elapsed duration between two instants needs no calendar — WHILE `·M`
> MAKES THE BUCKETS **TIMEZONE-DEPENDENT**. ⚠ **`V-20`'s TWO LIMBS THEREFORE SEPARATE CLEANLY: THE
> WORKING-HOUR LIMB IS **ANSWERED**; THE TIMEZONE LIMB IS **UNANSWERED AND HAS MOVED TO WHERE IT STILL
> BITES**.**

### 11.4 What has become harder, and must not be promised

| Question | Why it is harder |
|---|---|
| ⚠ ***"What is this rep's follow-up completion rate?"*** | ⚠ **`X-46`: a `Dump` either completes or cancels the pending follow-up, and the two give opposite answers** |
| ⚠ ***"How many follow-ups did this rep actually perform?"*** | ⚠ **`V-4`'s FUT limb, now with `·O`'s fulfilment predicate as a sixth consumer — and `·I.4` makes an unanswered dial a qualifying CONTACT, which may or may not make it a qualifying FOLLOW-UP** |
| ⚠ ***"What is our data-correction rate?"*** | ⚠ **UNANSWERABLE AT THE ACTIVITY LEVEL BY DESIGN — `·G.3`. **AD-01C §3.4's §63 justification is forfeited** |
| ⚠ ***"How responsive were we to THIS CP's lead?"*** | ⚠ **`·J.5`'s `Inquiry`-level number spans every source on the record** — [§8.5](#85-the-cp-chain-and-c-xxvi-checked-and-not-disturbed-with-one-exception) |
| ⚠ ***"How long was this record unattended between creation and assignment?"*** | ⚠ **THE ASSIGNMENT CLOCK IS UNSELECTED** — [§11.2](#112-the-four-clocks-re-run-under-the-one-inquiry-model) |
| ⚠ ***"How many leads does this rep have?"*** | ⚠ **`Y-5`, STILL THREE-WAY AS AD-01AE LEFT IT, AND UNTOUCHED** |
| ⚠ ***"What is the conversion rate of an `Inquiry`?"*** | ⚠ **`AC-50`, UNTOUCHED. ⚠ **`·P.3`'s *"commercial status is at `Inquiry` level"* SPEAKS TO **WHERE** IT LIVES AND NOT TO **WHAT VALUES IT TAKES**, AND AD-01AE §9.2's FIVE UNANSWERABLE QUESTIONS ARE CARRIED FORWARD UNCHANGED** |

### 11.5 Two metrics that are now permanently wrong by design, and the reason is a locked rule

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-488` — STATED AS ITS OWN SUBSECTION BECAUSE IT IS THE PRICE OF `·G`'s
> GUARANTEE AND THE OWNER SHOULD HOLD IT KNOWINGLY, EXACTLY AS AD-01I §12.1 PRICED ITS OWN
> RECOMMENDATION.**
>
> | # | The permanently-wrong figure | The locked rules that make it so |
> |---|---|---|
> | **1** | ⚠ **A `First Response` DERIVED FROM AN ACTIVITY RECORDED IN ERROR — the wrong record, the wrong time, or a communication that did not occur** | ⚠ **`·G.2` (cannot void) + `·G.4` (do not recalculate) + `·H.3` (the milestone is recorded). **THE CORRECTING ACTIVITY ARRIVES LATER IN THE STREAM AND, BY `·G.4`, CHANGES NOTHING** |
| **2** | ⚠ **A CLOSED-PERIOD LOSS FIGURE CONTAINING A MISTAKEN `Dump`** | ⚠ **`X-45` + AD-01I §10.2 constraint 1 (*no report may restate a closed period*)** |
>
> ⚠ **NEITHER IS AN ARGUMENT AGAINST THE RULES. **IMMUTABILITY AND NO-RECALCULATION ARE WHAT MAKE THE
> MILESTONE SAFE TO RECORD AT ALL (`PF-465`), AND THE OWNER HAS CHOSEN THEM DELIBERATELY.**
> ⚠ **THEY ARE RECORDED BECAUSE A RECONCILIATION THAT REPORTS ONLY THE ADVANTAGES OF A DECISION IS NOT
> AN ANALYSIS, AND BECAUSE `AC-58` IS THE PLACE THE OWNER CAN CHANGE THE OUTCOME IF THEY WISH TO.**

### 11.6 What is expressly NOT done here

⚠ **No metric is defined. No funnel is re-specified. `Y-5` is NOT answered. `V-18` is NOT answered.
`AC-42`'s nine limbs are NOT reached. `Q14`'s thresholds are NOT proposed. `N-2` is NOT resolved.
⚠ **AND THE REASON IS STATED RATHER THAN ASSUMED: **EVERY ONE OF THOSE CONSUMES `V-4`, `AC-50` OR
`M-6`, AND ANSWERING THEM FIRST WOULD BE DERIVING A METRIC FROM AN UNDECIDED MODEL.**

---

## 12. Audit / event-history consequences

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 12, and the owner's `§17` instruction governs it: *"identify
> any audit/event-history implications discovered during this reconciliation so they can be captured
> later."*** ⚠ **THIS SECTION **IDENTIFIES**. IT DOES NOT DESIGN AN AUDIT SCHEMA, DOES NOT SPECIFY
> PAYLOADS, DOES NOT PROPOSE RETENTION, AND — STATED IN TERMS AT
> [§12.5](#125-the-audit-completeness-gate--expressly-not-opened) — **DOES NOT OPEN THE GLOBAL AUDIT
> COMPLETENESS GATE.**

### 12.1 Events PO-AF1 states explicitly

| # | Event | Clause |
|---|---|---|
| **1** | ⚠ **ACTIVITY SAVED** — with Communication Type, Outcome, per-outcome fields, timestamp and actor | `·C`, `·D`, `·E`, `·F`, `·L.2` |
| **2** | ⚠ **`First Response` MILESTONE** — system-generated, separate from its source activity | `·H.3`, `·H.4`, `·L.1`(B) |
| **3** | ⚠ **TRANSFER** — as a timeline milestone in its own right | `·L.1`(B) |
| **4** | ⚠ **REVIVAL** — as a timeline milestone in its own right | `·L.1`(B), `·K` |

### 12.2 Events PO-AF1 IMPLIES and does not name

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-489` — IDENTIFIED AS REQUIRED BY A LOCKED RULE, NOT PROPOSED AS A
> DESIGN. **EACH ROW NAMES THE CLAUSE THAT CANNOT BE SATISFIED WITHOUT IT.**
>
> | # | Implied event or recorded fact | The clause that requires it |
> |---|---|---|
> | **5** | ⚠ **RESPONSE CYCLE OPENED, with its KIND (creation / transfer / reactivation) and its start timestamp** | ⚠ **`·J.8`/`·K.5`: *"every later revival creates another independent response cycle"* is unreconstructable unless each opening is a recorded fact** |
| **6** | ⚠ **RESPONSE CYCLE CLOSED WITH `No Response / Transferred`** | ⚠ **`·J.6`: *"do not leave the interval open"* is a claim about a TERMINAL STATE, written at the transfer instant. **AD-01G §9.3 constraint 2 applies verbatim: *"unrecoverable if not"*** |
| **7** | ⚠ **FOLLOW-UP FULFILLED, and BY WHICH ACTIVITY** | ⚠ **`·O.2`: *"the old follow-up remains historically reconstructable"* — reconstructing it requires knowing what discharged it** |
| **8** | ⚠ **FOLLOW-UP CREATED, by which activity** | ⚠ **`·O.3`: *"the new activity can create a new follow-up schedule"* — the chain follow-up → fulfilling activity → next follow-up is the record of the whole working loop** |
| **9** | ⚠ **ACTIVITY-TO-PROJECT-INTEREST ASSOCIATION** | ⚠ **`PO-AE1·A.7`'s *"activity/project association"*, which `PO-AF1` presupposes and never restates** |
| **10** | ⚠ **`Success Reason` AND `Success Remarks` AS RECORDED FACTS ON A TERMINAL COMMERCIAL ACT** | ⚠ **`·E.1`. **AD-01A §8.3's preserve-the-historical-reason posture applied to the Success side, where no equivalent rule exists** |
| **11** | ⚠ **THE COMMUNICATION TYPE'S MASTER-ROW IDENTITY AT THE MOMENT OF CAPTURE** | ⚠ **`·C.3`'s *configured* set plus `R4`: a tenant that renames or retires a communication type must not rewrite what past activities meant** |
| **12** | ⚠ **THE TENANT-DEFINED `Dump` REASON'S THREE CLASSIFICATIONS AS THEY STOOD AT THE MOMENT OF THE `Dump`** | ⚠ **`·F.4` + AD-01A §8.3's *"preserve the historical reason on a lead rather than silently rewriting business history"*. ⚠ **A TENANT THAT RECLASSIFIES A REASON MUST NOT RETROACTIVELY RECLASSIFY EVERY PAST `Dump`, AND NOTHING IN ANY SOURCE SAYS SO** |

### 12.3 What the audit trail must be able to answer, stated as questions

| # | Question |
|---|---|
| **1** | ⚠ **Which response cycle was open at time `T`, what opened it, and who owned it?** |
| **2** | ⚠ **Which activity established this cycle's `First Response`, and which established the `Inquiry`'s overall one?** |
| **3** | ⚠ **Which cycles ended in `No Response / Transferred`, and who was accountable for each?** |
| **4** | ⚠ **Which follow-up was fulfilled by which activity, and which was cancelled by which `Dump`?** |
| **5** | ⚠ **What did this `Dump` reason's three classifications mean on the day it was recorded?** |
| **6** | ⚠ **Which later activity was the rep's attempt to correct an earlier one?** ⚠ **— AND THE HONEST ANSWER IS THAT **THE TRAIL CANNOT ANSWER IT BY DESIGN**, BECAUSE `·G.3` FORBIDS THE RELATIONSHIP. **RECORDED HERE BECAUSE AN AUDIT GATE THAT LATER ASKS THIS QUESTION MUST KNOW IT WAS ANSWERED IN THE NEGATIVE DELIBERATELY** |
| **7** | ⚠ **Who read a response-interval series while holding no operational authority over the record?** ⚠ **— NOT REQUIRED BY ANY CLAUSE, AND NAMED BECAUSE `PO-AE1·N.2` CREATES A LARGE STANDING-READ POPULATION AND ⟦SOURCE⟧ §54's AUDIT PURPOSE IS THE ONLY CONTROL OVER IT** |

### 12.4 One audit-shaped hazard created by an immutability rule

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-490` — RECORDED FOR THE LATER GATE, NOT ACTED ON HERE.**
> ⚠ **`R6` MAKES THE AUDIT LOG APPEND-ONLY AND AD-01 §8.3 ALREADY ESTABLISHED THAT IT IS **NOT** THE
> BUSINESS-HISTORY SOURCE AND THAT A DURABLE BUSINESS-LEVEL HISTORY MUST OUTLIVE ITS TWELVE-MONTH HOT
> WINDOW (`00` §969: *"12-month hot partitioned window, then an automated job dumps the aging partition
> to S3"*).** ⚠ **`PO-AF1·G.5` NOW MAKES THE **BUSINESS** ACTIVITY STREAM APPEND-ONLY TOO.**
> ⚠ **THE HAZARD IS NOT THAT THEY CONFLICT — THEY DO NOT. **IT IS THAT A LATER READER MAY CONCLUDE THE
> AUDIT LOG IS NOW REDUNDANT FOR ACTIVITIES, WHICH AD-01 §8.3 AND CONSOLIDATED §25 BOTH FORBID:
> ⟦SOURCE⟧ ***"generic security audit logs are not the sole business-history source"*** — AND THE
> CONVERSE IS EQUALLY TRUE.** ⚠ **AN IMMUTABLE BUSINESS STREAM RECORDS **WHAT WAS ASSERTED**; THE AUDIT
> LOG RECORDS **WHO DID WHAT TO THE SYSTEM**, INCLUDING READS, FAILED WRITES AND AUTHORIZATION
> DECISIONS, NONE OF WHICH APPEAR IN AN ACTIVITY STREAM.** ⚠ **NAMED FOR THE GATE. NOT RESOLVED.**

### 12.5 The Audit Completeness Gate — expressly NOT opened

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-491` — STATED AS ITS OWN SUBSECTION BECAUSE [§12](#12-audit--event-history-consequences)
> IS THE ONE SECTION WHERE OPENING IT WOULD LOOK NATURAL, AND BECAUSE THE OWNER HAS INSTRUCTED IN TERMS
> THAT IT REMAINS LAST.**
>
> ⚠ **THE COMPREHENSIVE AUDIT COMPLETENESS GATE REMAINS **DEFERRED BY THE PRODUCT OWNER TO THE END OF
> THE ENTIRE ARCHITECTURE PHASE.** ⚠ **IT IS NOT OPENED HERE, NOT DESIGNED HERE, AND NOT PARTIALLY
> DESIGNED HERE.**
>
> | What this section DID | What it did NOT do |
> |---|---|
> | ⚠ **IDENTIFIED FOUR STATED AND EIGHT IMPLIED EVENTS, SEVEN QUESTIONS AND ONE HAZARD, ARISING FROM `PO-AF1` **ALONE**** | ⚠ **Did NOT enumerate the corpus's audit requirements, assess their completeness, or claim this list is complete for anything beyond `PO-AF1`** |
| ⚠ **NAMED THE CLAUSE THAT REQUIRES EACH EVENT** | ⚠ **Did NOT design an audit schema, payload, retention rule, partition or reconstruction procedure** |
| ⚠ **RECORDED `R6`'s APPEND-ONLY POSTURE AND AD-01 §8.3's BUSINESS-HISTORY SEPARATION AS THE GOVERNING PRINCIPLES** | ⚠ **Did NOT test whether the corpus as a whole satisfies `R6`, which is exactly what the Gate is for** |
| ⚠ **RECORDED ONE QUESTION THE TRAIL **CANNOT** ANSWER BY DESIGN (§12.3 row 6), SO THE GATE INHERITS IT AS A KNOWN AND DELIBERATE GAP** | ⚠ **Did NOT propose restoring the ability to answer it** |

---

## 13. Remaining VALIDATE-OPEN business questions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 13.** ⚠ **THE FULL REGISTER. **NOTHING IS OMITTED BECAUSE IT
> IS OLD, ADJACENT TO WHAT CHANGED, OR INCONVENIENT ON A DAY WHEN SOMETHING FINALLY MOVED.**

### 13.1 The five new AC items

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **FIVE QUESTIONS ARE MINTED. **EACH WAS TESTED AGAINST TWO GATES BEFORE
> MINTING: (i) does a REAL BUSINESS SCENARIO require the answer, and (ii) are the sources GENUINELY
> SILENT rather than merely terse? **NINE CANDIDATES FAILED ONE OR BOTH AND ARE LISTED AT
> [§13.4](#134-candidates-tested-and-not-minted).**

#### AC-55 — the manager's authority boundary, in four limbs

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-55`⟧ ⚠ **AUTHORIZATION-CRITICAL, AND THE SOURCE OF `X-42` AND
> `X-43`.**
>
> | Limb | The question |
> |---|---|
> | ⚠ **(a)** | ⚠ **Is *MANAGER* in `PO-AF1·B` the same principal as *SALES HEAD / SITE HEAD*, or a wider population?** ⚠ **⟦SOURCE⟧ consolidated §3 lists them as TWO ROLES and gives BOTH a transfer capability; `PO-AE1·G.1` reserves manual revive/reassign to the **Sales Head alone**; `PO-AF1·B.7` permits **managers** to reassign** — `X-43` |
> | ⚠ **(b)** | ⚠ **Does `·B.8`'s prohibition on REASSIGNING a follow-up bind the AUTOMATIC CARRY-OVER that `PO-AE1·K.2` makes a mandatory consequence of a permitted manager transfer?** ⚠ **If it does, a manager cannot transfer a record with open follow-ups. **If it does not, the word *reassign* in `·B.8` needs a boundary the owner has not drawn** — `X-42` |
> | ⚠ **(c)** | ⚠ **Is AD-01I `I-8`'s WORK MANDATE — management intent recorded on the assignment act, which places a record in a rep's working set — a *customer task* under `·B.8`?** ⚠ **`Z-3` (*where does a mandated record appear, and may a next action be committed on it*) cannot be answered until this is** |
> | ⚠ **(d)** | ⚠ **Which of ⟦SOURCE⟧ §10's TWO references holds `·B.9`'s exclusive activity/follow-up authority — the OWNER or the HANDLER?** ⚠ **`·B.9` writes *"Client Owner / Sales Rep"* as one thing; consolidated §12's work queue carries *inquiry owner* AND *Assigned To / Lead Handler* as **two columns**; `PO-AE1·H.1` says *"the currently ASSIGNED Sales Rep"*** |
>
> **Why it cannot be derived:** ⟦SOURCE⟧ **§88** reserves *authorization rules*; **`R2`** forbids
> resolving it by role name; **`M-3`** and **`M-7`** — which own the role set and the breadth vocabulary
> — are **both open**. ⚠ **AND AD-01B §4's REWORK-ASYMMETRY STANDARD APPLIES: AN AUTHORIZATION BOUNDARY
> LEFT TO IMPLEMENTATION IS UNRECOVERABLE ONCE ACTS HAVE BEEN PERFORMED UNDER IT.**

#### AC-56 — what a derived milestone may disclose about a hidden interval

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-56`⟧ ⚠ **SECURITY-CRITICAL, AND THE SOURCE OF `X-44`.**
>
> | Limb | The question |
> |---|---|
> | ⚠ **(a)** | ⚠ **Does `PO-AE1·L.3`'s *"no indication, no count, no summary"* bind SYSTEM-GENERATED MILESTONES, or only the business activities `·L.3` names?** |
> | ⚠ **(b)** | ⚠ **May a rep who received a record WITHOUT history see the `Inquiry`-level `First Response` milestone — noting that **both its presence and its absence** disclose whether anyone responded before them?** |
> | ⚠ **(c)** | ⚠ **May they see the CARDINALITY of the response-interval series, which is the count of prior custody episodes?** |
> | ⚠ **(d)** | ⚠ **May they see a prior owner's `No Response / Transferred` outcome, which is a summary of another person's performance inside a hidden interval?** |
>
> **Why it cannot be derived:** ⟦SOURCE⟧ **§88** reserves *authorization rules*. ⚠ **AND THE ARCHITECT
> EXPRESSLY DECLINES TO MINT A CONSTRAINT THAT WOULD SELECT ONE ANSWER** —
> [§7.5](#75-c-xxvii--the-constraint-candidate-tested-and-refused). ⚠ **THE OWNER HAS TWO GENUINELY
> AVAILABLE DIRECTIONS AND NOTHING HERE PREFERS EITHER. **`V-10`'s SURFACE LIST AND `AC-51` ARE BOTH
> COUPLED TO THE ANSWER AND NEITHER IS MERGED INTO IT.**

#### AC-57 — fulfilled or cancelled, and by which predicate

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-57`⟧ ⚠ **THE SOURCE OF `X-46`.**
>
> | Limb | The question |
> |---|---|
> | ⚠ **(a)** | ⚠ **When a `DUMP` activity is recorded while a follow-up is outstanding, is that follow-up **FULFILLED** (`PO-AF1·O.1`) or **CANCELLED** (`PO-AE1·E.8`)?** ⚠ **The two are different terminal facts and every workload and completion figure depends on which** |
> | ⚠ **(b)** | ⚠ **Does a `SUCCESS` activity fulfil the outstanding follow-up, cancel it, or leave it?** ⚠ **`·O.1` says fulfil; no clause anywhere governs a follow-up outstanding on a booked record** |
> | ⚠ **(c)** | ⚠ **Is `·O`'s fulfilment predicate the SAME predicate as `·I.2`'s first-response qualification?** ⚠ **If YES, then by `·I.4` an **unanswered outbound call fulfils a follow-up**, and a rep can clear an overdue queue with unanswered dials. **If NO, the predicate is FUT's, which is `V-4` and is undefined** |
>
> **Why it cannot be derived:** ⚠ **THIS IS A WORKLOAD-ACCOUNTABILITY DECISION WITH A PERFORMANCE
> CONSEQUENCE, AND THE TWO OWNER CLAUSES POINT AT THE SAME OBJECT WITH DIFFERENT VERBS.** ⚠ **AD-01AC
> `PF-349` ESTABLISHED THAT `V-4`'s CONSUMERS *"MUST SHARE ONE ANSWER OR THEY WILL DISAGREE
> PERMANENTLY"*, AND LIMB (c) IS A SIXTH CONSUMER ARRIVING BEFORE THE FIRST ANSWER.**

#### AC-58 — the correction route for an immutable mistaken disposition

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-58`⟧ ⚠ **THE SOURCE OF `X-45`, AND THE ONLY ITEM IN THIS DOCUMENT
> THAT DESCRIBES AN OPERATIONAL DEAD END RATHER THAN AN AMBIGUITY.**
>
> | Limb | The question |
> |---|---|
> | ⚠ **(a)** | ⚠ **How is a MISTAKENLY-RECORDED `DUMP` corrected, given that `·G.2` forbids voiding it and `PO-AE1·E.6` disables the only prescribed remedy — creating a new activity?** |
> | ⚠ **(b)** | ⚠ **If the answer is `PO-AE1·G`/`·J.4` revival, does the business accept that AD-01C §3.4's rule — *"a correction is not a re-engagement, and a re-engagement is not a correction"* — is **unenforceable in this case**, and that a false commercial loss stays permanently in its closed period?** |
> | ⚠ **(c)** | ⚠ **How is a MISTAKENLY-RECORDED `SUCCESS` activity corrected, given AD-01A §8.2's terminality and `·G.2`'s immutability?** ⚠ **`V-22` determines how large this surface is and is open** |
> | ⚠ **(d)** | ⚠ **Does the business want a CORRECTED-RATE to remain measurable — AD-01C §3.4's §63 justification — or does it accept `·G.3`'s deliberate loss of that signal?** |
>
> **Why it cannot be derived:** ⟦SOURCE⟧ **§88** reserves *source-of-truth rules* and *audit
> requirements*; **`T-7`** (a correction reason vocabulary) is open and has been since AD-01C.
> ⚠ **AND NOTHING HERE PROPOSES AN UNDO WINDOW, A GRACE PERIOD, A VOID EVENT, A SUPERVISOR OVERRIDE OR
> A REVERSAL — EVERY ONE WOULD BE THE ARCHITECT INVENTING A BUSINESS RULE.**

#### AC-59 — the Success Reason vocabulary and its structure

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-59`⟧
>
> | Limb | The question |
> |---|---|
> | ⚠ **(a)** | ⚠ **What are the `Success Reason` values, and are they tenant-configurable as `Dump` reasons are?** ⚠ **`·E.1` makes the field part of a locked capture contract; **NO SOURCE AND NO PRIOR DOCUMENT CONTAINS THE PHRASE AT ALL**, verified by exhaustive search** |
> | ⚠ **(b)** | ⚠ **Must `Success Reason` carry system-owned structural classifications, as `·F.4` requires of `Dump` Reason?** ⚠ **AD-01A §3 BUILT THE THREE-DIMENSION FRAMEWORK PRECISELY BECAUSE A FLAT REASON MASTER *"produces analytics nobody can interpret"*, AND AD-01F §7.3 ITEM 2 APPLIED THE SAME DIAGNOSIS TO THE RESPONSE/SUB-RESPONSE VOCABULARY** |
> | ⚠ **(c)** | ⚠ **Is `Success Reason` a fact about the DEAL (why it was won) or about the ACTIVITY (what the rep did)?** ⚠ **`·E.1` places it on the activity; AD-01A §8.2 places the `Success` MILESTONE at ⟦SOURCE⟧ §20 Stage 3, after builder-side verification — **so the reason may be recorded at one moment and the milestone earned at another*** |
>
> **Why it cannot be derived:** ⟦SOURCE⟧ **Rule 1** forbids inventing values; **`R4`** makes values
> tenant rows and semantics system columns, and supplies neither; **`N-4`** is the worked precedent for
> what happens when a mandatory classification ships with no approved values — **twenty-five
> consecutive documents.** ⚠ **AND IT IS MINTED SEPARATELY FROM `N-4` RATHER THAN FOLDED INTO IT
> BECAUSE `N-4`'s SUBJECT IS THE `Dump` VOCABULARY AND MERGING A WIN-REASON QUESTION INTO A
> LOSS-REASON ITEM WOULD MAKE ONE ITEM ANSWER TWO DIFFERENT COMMERCIAL QUESTIONS.**

### 13.2 Items ANSWERED, NARROWED or RE-HOMED, checked individually

| Item | Question | Result | Counted as a closure? |
|---|---|---|---|
| ⚠ **`V-20`·working-hour limb** | *What are the working-hour semantics of first response?* | ⚠ **ANSWERED — `·J.9`: CALENDAR ELAPSED TIME, expressly not tenant working hours** | ⚠ **YES** |
| ⚠ **`V-4`·first-response limb** | *Does a non-connected attempt count?* | ⚠ **ANSWERED FOR FIRST RESPONSE — `·I.4`: *"an unanswered outbound call still counts"*** | ⚠ **YES** |
| ⚠ **`V-4`·FUT limb · `V-4`·`New` limb · `V-4`·`W-1` limb · `V-4`·`W-4` limb · `V-4`·fulfilment limb** | *Does it count for FUT, for `New`, for the counting rule, for the source clock, for fulfilment?* | ⚠ **NOT ANSWERED. **`PO-AF1` speaks only to first-response qualification** | ⚠ **NO — `V-4` REMAINS OPEN** |
| ⚠ **`V-20`·clock-selection limb · `W-4`** | *Which clocks are required?* | ⚠ **THREE SELECTED (creation, transfer/custody, reactivation), ONE UNSELECTED (assignment), AND `W-4`'s PURPOSE PARTLY DEFEATED BY THE ONE-`Inquiry` MODEL** | ⚠ **NO — counted as a PARTIAL** |
| ⚠ **`U-10`** | *Which principals are authorized Reporting Managers?* | ⚠ **BREADTH LIMB ANSWERED (the reporting tree); PRINCIPAL-IDENTIFICATION LIMB UNTOUCHED; `M-3`/`M-7` OPEN** | ⚠ **NO — counted as a PARTIAL** — [§9.2](#92-the-management-scope-definition-and-what-it-does-and-does-not-answer-for-u-10-and-m-7) |
| ⚠ **`Z-2`·recoverability limb** | *Does a reason's classification constrain redistribution/revival?* | ⚠ **ANSWERED FOR RECOVERABILITY — `·F.6`: it does NOT prevent revival** | ⚠ **NO — counted as a PARTIAL. **`Z-2`'s SUBJECT IS THE **VALIDITY CLASS**, WHICH IS UNTOUCHED** |
| ⚠ **`V-11`·control half** | *Which control is the rep operating?* | ⚠ **ADVANCED AT THE CAPTURE LEVEL — one activity, one outcome, three choices (`·C.5`). **NOT ANSWERED AT AD-01I `I-1`'s AXIS LEVEL** | ⚠ **NO — counted as a PARTIAL** |
| ⚠ **`AC-50`(a)** | *Does a Project Interest carry its own commercial outcome?* | ⚠ **SPOKEN TO BY `·P.2`/`·P.3` — *"Project Interests do not have independent commercial lifecycle/status; commercial status is at Inquiry level"*** | ⚠ **NO — AND THE REFUSAL IS DELIBERATE. **`AC-50`(b) (where `Q4`'s locked `Success` milestone attaches, given that a booking is of a unit in ONE project) AND `AC-50`(c) (may an interest be dispositioned without removal) ARE **UNTOUCHED**, AND AD-01AE §12.1 RECORDED THAT `AC-50` BLOCKS THREE OF AD-01H's FOUR WORKED EXAMPLES. ⚠ **CLOSING `AC-50` ON LIMB (a) ALONE WOULD UNBLOCK NOTHING AND WOULD HIDE TWO LIVE LIMBS** |
| ⚠ **`Y-2`** | *Does the record hold ONE next-action commitment?* | ⚠ **EVIDENCE STRENGTHENED — `·O.1` says *"**the** pending follow-up"* in the singular throughout, and `·M` treats the bucket as a property of *a* scheduled follow-up** | ⚠ **NO. **AD-01AE §14.2 ALREADY RECORDED `PO-AE1·K` AS *"EVIDENCE toward one, not a decision"*, AND STRONGER EVIDENCE IS STILL NOT A DECISION — ESPECIALLY UNDER `PO-AE1·A.2`'s UNLIMITED SIMULTANEOUS PROJECT INTERESTS** |
| ⚠ **`W-5`** | *Does the owner affirm a restriction may never apply to `I2`?* | ⚠ **`I2`'s POPULATION IS ENLARGED BY `·B.5`; THE AFFIRMATION IS STILL NOT GIVEN** | ⚠ **NO — OPEN AND ENLARGED** |
| ⚠ **`W-1`** | *One call, two projects — one first response or two?* | ⚠ **NOT ANSWERED, AND NOW **UNAVOIDABLE**: `·J.5` requires a single `Inquiry`-level number while `PO-AE1·A.7` requires project segregation** | ⚠ **NO — OPEN, UNAVOIDABLE** |
| ⚠ **`T-7`** | *Does a correction need its own reason vocabulary?* | ⚠ **DISSOLVED AT THE ACTIVITY LEVEL (no correction event ⟹ no correction reason); **INTACT AT THE LIFECYCLE LEVEL**, which is its actual subject** | ⚠ **NO — NARROWED, NOT CLOSED** |
| ⚠ **`V-19`** | *Must response/sub-response carry semantic classification? Is the sub-response or the site-visit record the source of truth?* | ⚠ **NOT ANSWERED, AND NOW INSIDE A LOCKED CAPTURE CONTRACT; the site-visit limb is sharper because `·C.3`'s channel list contains no visit** | ⚠ **NO — OPEN, SHARPENED** |
| ⚠ **`V-22` / `V-23` / `N-2`** | *Who sets `Success`? What is the record's condition during verification? Which values suppress escalation?* | ⚠ **NONE ANSWERED; `V-23` SHARPER because `·C.5` forces one of three outcomes during the verification interval** | ⚠ **NO** |
| ⚠ **`AC-6`** | *The registration boundary convention, and `N = 0`* | ⚠ **NOT ANSWERED. **`PO-AF1·Q.4` LISTS IT AS LOCKED; THE LEDGER RECORDS IT AS OPEN** | ⚠ **NO — NINTH DISCREPANCY NOTICE** |
| ⚠ **`AC-48`** | *By what rule may a Site Head revoke or change a Stage-2 commission decision?* | ⚠ **NOT ANSWERED. **`PO-AF1·Q.12` LISTS IT AS LOCKED; AD-01AB §11.4 MINTED IT ON `PO-AB4`'s OWN INSTRUCTION** | ⚠ **NO — SECOND DISCREPANCY NOTICE** |
| ⚠ **`AC-7`·re-basing limb** | *May a registration's policy snapshot be re-based?* | ⚠ **NOT ANSWERED. **`·Q.3` reaffirms the snapshot's existence and immutability, not its re-basing** | ⚠ **NO** |
| ⚠ **`AC-50`(b)/(c), `AC-51`, `AC-52`, `AC-53`, `AC-54`** | AD-01AE's five | ⚠ **RE-CHECKED INDIVIDUALLY AT [§13.5](#135-the-five-ad-01ae-ac-items-re-checked-individually). **NONE ANSWERED** | ⚠ **NO** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-492` — THE CLOSURE COUNT IS **TWO**, PLUS **FIVE PARTIALS**.**
> ⚠ **EIGHTEEN ITEMS ARE TOUCHED AND TWO ARE CLOSED. **THAT IS THE HONEST ARITHMETIC ON AD-01AD
> `PF-378`'s AND AD-01AE §14.1's OWN STANDARD, AND CLAIMING SEVEN WOULD BE INFLATION.**

### 13.3 The full open register, carried forward

| # | Item | Status |
|---|---|---|
| **1** | ⚠ **`AC-55 … AC-59`** | ⚠ **FIVE NEW, ALL OPEN** — [§13.1](#131-the-five-new-ac-items) |
| **2** | ⚠ **`AC-50 … AC-54`** | ⚠ **ALL FIVE OPEN. `AC-50`(a) SPOKEN TO AND NOT CLOSED; `AC-51` NOW GATES THE PER-CYCLE VISIBILITY MODEL; `AC-53` SHARPENED BY `·K.5`'s UNBOUNDED REVIVALS** |
| **3** | ⚠ **`AC-2 … AC-49`** | ⚠ **AS AD-01AE LEFT THEM. **`AC-6`, `AC-7`·re-basing, `AC-12`, `AC-13`, `AC-26`, `AC-42`, `AC-47`, `AC-48` RE-CHECKED AND NONE REACHED** |
| **4** | ⚠ **`V-4`** | ⚠ **PARTIALLY ANSWERED, STILL OPEN, AND WITH A **SIXTH** CONSUMER. **TWENTY-SECOND CONSECUTIVE DOCUMENT** |
| **5** | ⚠ **`V-19`, `V-20`·timezone, `V-22`, `V-23`, `V-24`, `V-26`** | ⚠ **ALL OPEN. **`V-24` (§08 project scoping on a multi-interest record) UNAVOIDABLE SINCE AD-01AE AND UNTOUCHED HERE** |
| **6** | ⚠ **`V-3`·clause 2, `V-6`, `V-8`·limb 2, `V-10`, `V-11`, `V-14`, `V-18`** | ⚠ **ALL OPEN. **`V-10` HARDER: a strict `PO-AE1·L.3` now needs a surface list that includes DERIVED MILESTONES, which `V-10`'s enumeration predates** |
| **7** | ⚠ **`W-1`, `W-2`, `W-3`·enforcement, `W-4`, `W-5`** | ⚠ **ALL OPEN. **`W-1` UNAVOIDABLE; `W-4` PARTLY DEFEATED IN PURPOSE; `W-5` ENLARGED** |
| **8** | ⚠ **`Y-1`, `Y-2`, `Y-3`(dissolved), `Y-4`, `Y-5`** | ⚠ **AS AD-01AE LEFT THEM. **`Y-2` GAINS EVIDENCE AND IS NOT CLOSED** |
| **9** | ⚠ **`Z-1 … Z-6`** | ⚠ **ALL OPEN. **`Z-2` PARTIAL (recoverability limb only); `Z-3` NOW CONSUMES `AC-55`(c)** |
| **10** | ⚠ **`N-1 … N-4`** | ⚠ **ALL FOUR OPEN. **`N-4` AT ITS **TWENTY-FIFTH** CONSECUTIVE DOCUMENT, WITH `PO-R1`'s LOCKED MONEY RULE STILL READING A CLASSIFICATION WITH ZERO APPROVED VALUES, AND NOW WITH `·F.4` MAKING THE CLASSIFICATION BIND TENANT ROWS TOO** |
| **11** | ⚠ **`T-1 … T-12`** | ⚠ **ALL OPEN. **`T-4`/`T-5` UNTOUCHED AND URGENT; `T-6`/`V-22` SHARPENED; `T-7` NARROWED** |
| **12** | ⚠ **`U-1 … U-20`** | ⚠ **OPEN EXCEPT `U-7` AND `U-14`. **`U-10` PARTIAL; `U-16` HARDER; `U-20` (offline caches) HARDER** |
| **13** | ⚠ **`Q2`, `Q3`, `Q5`, `Q8 … Q16`** | ⚠ **ALL OPEN. **`Q8` (enrichment queue) NOW CONSTRAINED BY `·B.8` — `A-100`. **`Q14`/`Q2` UNTOUCHED** |
| **14** | ⚠ **`M-2`, `M-3`, `M-5`·attribution half, `M-6`, `M-7`, `M-8`, `M-9`, `M-14`** | ⚠ **ALL OPEN. ⚠ **`M-6` PROMOTED FROM PRESENTATION DETAIL TO CORRECTNESS INPUT** — [§11.3](#113-the-day-boundary-becomes-load-bearing). **`M-3`/`M-7` NOW GATE `AC-55`. **`M-9` STILL CANNOT START** |
| **15** | ⚠ **`A-1 … A-103`** | ⚠ **ONE HUNDRED AND THREE AMENDMENTS NAMED AND NOT MADE ACROSS TWENTY-FOUR DOCUMENTS. `Q0-e`'s list is `A-1 … A-103`** |
| **16** | ⚠ **`X-25`/`A-37`, `X-28 … X-34`, `X-36 … X-46`** | ⚠ **ALL STANDING, NONE DISCHARGED. **`X-41` ENLARGED AND NOT RENUMBERED. **`X-25`/`A-37` REMAINS THE CORPUS'S LONGEST-UNADDRESSED GAP** |
| **17** | ⚠ **`C-XXI … C-XXVI`** | ⚠ **ALL UNRATIFIED, UNTOUCHED. `C-XXVI` STILL UNRATIFIABLE BEFORE `AC-50`/`AC-53`. **`C-XXVII` TESTED AND REFUSED** |
| **18** | ⚠ **`Q0-a … Q0-e`** | ⚠ **ALL OPEN** |
| **19** | ⚠ **`VALIDATE-OPEN`, non-`AC`, carried from AD-01AE** | ⚠ **The transfer history mode's DEFAULT; whether a partially-applied bulk history decision is coherent; whether a mis-set permanent history mode has any corrective path. **ALL THREE UNCHANGED** |
| **20** | ⚠ **`VALIDATE-OPEN`, non-`AC`, NEW HERE** | ⚠ **SEVEN, LISTED AT [§13.3a](#133a-the-seven-new-non-ac-validate-open-items)** |
| **21** | ⚠ **The follow-up NOTIFICATION CADENCE** | ⚠ **`VALIDATE-OPEN`, **DECLARED BY THE OWNER** at `·N.3`/`·N.4`, and expressly NOT invented here. **RECORDED, NOT MINTED — the owner already knows it is open** |
| **22** | ⚠ **The Audit Completeness Gate** | ⚠ **DEFERRED. NOT OPENED** |

#### 13.3a The seven new non-AC VALIDATE-OPEN items

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-493` — THESE ARE RECORDED RATHER THAN MINTED AS `AC-` ITEMS BECAUSE EACH
> IS EITHER A SPECIFICATION GAP IN ONE CLAUSE, OR A QUESTION AN EXISTING ITEM ALREADY OWNS. **MINTING
> THEM WOULD INFLATE THE OWNER'S QUEUE, WHICH `STEP 8` FORBIDS.**
>
> | # | Item | Why it is recorded and not minted |
> |---|---|---|
> | **1** | ⚠ **Does a TRANSFER THAT REVIVES a `Dumped` customer (`PO-AE1·G.4`) open ONE cycle or TWO — a transfer cycle, a revival cycle, or a single cycle serving both?** | ⚠ **A SPECIFICATION GAP IN `·J`/`·K`'s INTERSECTION. **The owner need only say which; no business principle is at stake** |
> | **2** | ⚠ **Does *"BMexa has a canonical Dump Reason framework/master"* (`·F.3`) mint BMexa-supplied reason VALUES, or only the three-dimension FRAMEWORK?** | ⚠ **`N-4` ALREADY OWNS THE VALUES; AD-01A §3.8 ALREADY FLAGGED THE SEEDED-ROWS QUESTION** |
> | **3** | ⚠ **What does RECOVERABILITY POSTURE determine, now that `·F.6` removes its gate?** | ⚠ **A QUESTION ABOUT A PROPERTY'S FUNCTION, NOT ABOUT THE MODEL'S SHAPE** — [§5.8](#58-dimension-cs-rationale-superseded-while-dimension-c-itself-is-reaffirmed) |
> | **4** | ⚠ **Is the SITE HEAD's project-interest REMOVAL (`PO-AE1·D.2`) compatible with `·B.7`'s VIEW-ONLY rule?** | ⚠ **THE TWO CLAUSES HAVE DIFFERENT OBJECTS — an interest is neither an activity nor a follow-up — SO IT IS A TENSION, NOT A CONTRADICTION** |
> | **5** | ⚠ **How is a NOTE WITH NO CONTACT, or a BARE DATE-PUSH, expressed under `·C.2`'s mandatory Communication Type?** | ⚠ **AD-01AC §9.2 EVENT TYPES 6 AND 7 ALREADY OWN THESE UNDER `V-4`** — `PF-472` |
> | **6** | ⚠ **Does `·P.15`'s hedge (*"only where the existing authorization rules permit"*) NARROW `PO-AE1·N.2`'s unconditional standing read?** | ⚠ **`AC-51`(a)/(b) ALREADY OWN THE SCOPE AND DURATION OF THAT READ. **Reading the hedge as a narrowing would resolve `AC-51` by inference** |
> | **7** | ⚠ **Which clock governs the ASSIGNMENT-TO-FIRST-RESPONSE interval for a lead created unassigned?** | ⚠ **CONSOLIDATED §9 AND `V-20` ALREADY OWN IT, AND `PO-AF1` NEITHER SELECTS NOR REFUSES IT** |

### 13.4 Candidates tested and NOT minted

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-494` — A DOCUMENT THAT MINTS EVERY QUESTION IT THINKS OF INFLATES THE
> OWNER'S QUEUE AND DEVALUES THE ONES THAT MATTER. **NINE CANDIDATES WERE TESTED AND REFUSED, AND THE
> REFUSALS ARE LISTED SO THE DISCIPLINE CAN BE CHECKED.**
>
> | Candidate | Why it was NOT minted |
> |---|---|
> | ⚠ *"What is the follow-up notification cadence?"* | ⚠ **THE OWNER HAS ALREADY DECLARED IT OPEN AND FORBIDDEN INVENTING ONE (`·N.3`/`·N.4`). **ASKING THE OWNER A QUESTION THEY HAVE JUST ASKED THEMSELVES IS NOISE** |
> | ⚠ *"What are the `Dump` reason values?"* | ⚠ **ALREADY `N-4`, OPEN FOR A TWENTY-FIFTH DOCUMENT** |
> | ⚠ *"Must `Response Type` / `Sub-response` carry semantic classifications?"* | ⚠ **ALREADY `V-19`. **This document records that it is now inside a locked contract; it does not re-mint it** |
> | ⚠ *"What are the `Communication Type` values?"* | ⚠ **`R4` MAKES THEM TENANT MASTER ROWS AND `·C.3` SAYS *configured*. ⚠ **AND UNLIKE `Success Reason`, THE OWNER SUPPLIED SIX EXAMPLES, SO THE SOURCE IS TERSE RATHER THAN SILENT — GATE (ii) FAILS** |
> | ⚠ *"Against which clock is the calendar day evaluated?"* | ⚠ **ALREADY `M-6` AND `V-20`. **This document records that it is now LOAD-BEARING; it does not re-mint it** |
> | ⚠ *"Is `First Response` scoped to the `Inquiry` or to the `(Inquiry, Project Interest)` pair?"* | ⚠ **ALREADY `W-1` AND `W-4`, AND ITS CP-FACING LIMB IS `U-16`'s. **MINTING A THIRD WOULD SPLIT ONE QUESTION THREE WAYS** |
> | ⚠ *"Does the record hold one next-action commitment or one per project interest?"* | ⚠ **ALREADY `Y-2`. **Stronger evidence is not a new question** |
> | ⚠ *"Does a lead created UNASSIGNED have a first-response clock?"* | ⚠ **`V-20`'s ASSIGNMENT LIMB, WHICH CONSOLIDATED §9 ITSELF FLAGGED OPEN. **RECORDED AT [§13.3a](#133a-the-seven-new-non-ac-validate-open-items) ITEM 7** |
> | ⚠ *"Should a bare date-push be prevented from establishing `First Response`?"* | ⚠ **REFUSED AS A **CONTROL DESIGN** IN ITS MECHANICAL HALF. ⚠ **ITS BUSINESS HALF — what counts as a customer-contact attempt — IS `V-4`, ALREADY OPEN, AND PHRASING IT AS A NEW QUESTION WOULD SMUGGLE AN ARCHITECT'S PREFERRED ANSWER INTO THE OWNER'S QUEUE** |

### 13.5 The five AD-01AE AC items, re-checked individually

| Item | Reached by `PO-AF1`? |
|---|---|
| ⚠ **`AC-50`** — the grain of commercial disposition | ⚠ **LIMB (a) SPOKEN TO BY `·P.2`/`·P.3`; **LIMBS (b) AND (c) NOT REACHED**; THE ITEM IS **NOT CLOSED** and still blocks three of AD-01H's four worked examples** |
| ⚠ **`AC-51`** — the scope and duration of the previous owner's read | ⚠ **NOT ANSWERED, AND NOW **LOAD-BEARING FOR A SECOND SUBJECT**: the per-cycle interval model's visibility is downstream of `AC-51`(a), and `AC-51`(c)'s carried-over follow-up acquires a notification channel via `·N.1`** |
| ⚠ **`AC-52`** — what duplicate detection discloses to a non-holder | ⚠ **NOT REACHED. `PO-AF1` names no duplicate detection, identity key or search behaviour** |
| ⚠ **`AC-53`** — does a pre-`Dump` CP claim survive revival | ⚠ **NOT REACHED, AND **SHARPENED**: `·K.5` makes the number of revivals on one `Inquiry` explicitly unbounded, so any answer must hold for `n` revivals rather than one** |
| ⚠ **`AC-54`** — who acts when the only permitted actor is gone | ⚠ **NOT ANSWERED, AND **ENLARGED**. ⚠ **`AC-54` ASKED WHO MAY `Dump` WHEN THE ASSIGNED REP IS GONE. **`·B.9` EXTENDS THE EXCLUSIVITY FROM `Dump` TO **EVERY ACTIVITY AND EVERY FOLLOW-UP**, SO THE DEADLOCK NOW COVERS THE WHOLE OPERATIONAL SURFACE, NOT ONE ACTION.** ⚠ **A DEPARTED REP'S BOOK IS NOW A SET OF RECORDS ON WHICH **NOBODY** MAY ACT UNTIL A MANAGER TRANSFERS THEM — AND ⟦SOURCE⟧ §57 EXISTS PRECISELY BECAUSE EMPLOYEES LEAVE** |

### 13.6 Approximate count of remaining substantive PO questions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 14. ⚠ **THE OWNER ASKS FOR AN **APPROXIMATE** COUNT, AND THE
> APPROXIMATION IS MADE HONEST BY SAYING WHAT IS COUNTED AND WHAT IS NOT.**
>
> | Band | Count | What is in it |
> |---|---|---|
> | ⚠ **A — BLOCKING MODEL QUESTIONS** | ⚠ **≈ 9** | ⚠ **`AC-50`, `AC-51`, `AC-53`, `AC-55`, `AC-56`, `AC-58`, `V-4`, `T-4`/`T-5` (as one), `AC-48`. ⚠ **EACH BLOCKS A DOWNSTREAM SECTION OR A MONEY-BEARING DETERMINATION** |
> | ⚠ **B — SUBSTANTIVE BUT NON-BLOCKING** | ⚠ **≈ 20** | ⚠ **`AC-52`, `AC-54`, `AC-57`, `AC-59`, `AC-6`, `AC-7`·re-basing, `AC-12`, `AC-13`, `AC-26`, `AC-42`, `AC-47`, `N-2`, `N-4`, `V-19`, `V-22`, `V-24`, `W-1`, `W-4`, `W-5`, `Y-5`** |
> | ⚠ **C — SCOPE, VOCABULARY AND CONFIGURATION** | ⚠ **≈ 25–30** | ⚠ **`Q2`, `Q3`, `Q5`, `Q8`–`Q16`, `V-3`, `V-6`, `V-8`, `V-10`, `V-11`, `V-14`, `V-18`, `V-21`, `V-26`, `W-2`, `Y-1`, `Y-2`, `Y-4`, `Z-1`–`Z-6`, the notification cadence, and the seven items at [§13.3a](#133a-the-seven-new-non-ac-validate-open-items)** |
> | ⚠ **D — ARCHITECT-SIDE, NOT PO QUESTIONS** | ⚠ **`A-1 … A-103`** | ⚠ **AMENDMENTS AWAITING THE OWNER'S PERMISSION TO BE MADE. ⚠ **THEY ARE **NOT** COUNTED AS QUESTIONS, BECAUSE THE OWNER IS NOT BEING ASKED TO DECIDE A BUSINESS RULE — ONLY TO AUTHORISE A CORRECTION TO A DOCUMENT** |
> | ⚠ **E — DEFERRED BY THE OWNER** | ⚠ **1** | ⚠ **The Audit Completeness Gate** |
>
> ⚠ **TOTAL SUBSTANTIVE: **APPROXIMATELY 55–60**, OF WHICH **NINE ARE BLOCKING**.**
> ⚠ **THE NUMBER HAS GROWN BY FIVE THIS DOCUMENT AND SHRUNK BY TWO. **THAT IS THE CORRECT DIRECTION FOR
> A RECONCILIATION THAT IS FINDING REAL CONFLICTS RATHER THAN CLOSING CONVENIENT ONES, AND IT IS
> REPORTED RATHER THAN SOFTENED.**

---

## 14. Architect-derived decisions

> ⚠ ⟦ARCHITECT ANALYSIS⟧ ⚠ **EVERY ITEM IN THIS SECTION IS THE ARCHITECT'S AND **NOT ONE OF THEM IS
> `PO LOCKED`.** **They are offered for attack on their merits, per `PO-AF1·A.4`: *"do NOT convert an
> architect-derived assumption into a PO-locked rule."***

### 14.1 The ten amendments, named and NOT made

| # | Amendment | Subject document / section | What it would say |
|---|---|---|---|
| ⚠ **`A-94`** | ⚠ **The class-8 storage prohibition** | ⚠ **`03f` — AD-01F **§7.2**, class 8** | ⚠ **Record that a `First Response` SYSTEM MILESTONE **IS** a recorded timeline event under `PO-AF1·H.3`, and that classes 1–7 and the read-model/storage-model conclusion are UNCHANGED** |
| ⚠ **`A-95`** | ⚠ **The derivation rule's reach** | ⚠ **`03a` — AD-01A **§3.6*** | ⚠ **Narrow *"do not record a fact the system can compute"* so it does not reach a derived fact that sits behind an immutability-plus-no-recalculation guarantee. ⚠ **THE RULE ITSELF IS NOT REPEALED AND STILL GOVERNS ENGAGEMENT DEPTH, THE ACTION-FEED BUCKETS AND `New`'s THREE PREDICATES** |
| ⚠ **`A-96`** | ⚠ **The `Overdue` predicate** | ⚠ **`docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md` **§11**, status table row 5** | ⚠ **Record that *"scheduled … time has passed"* is SUPERSEDED by `PO-AF1·M.3`–`·M.6`'s calendar-date rule, and that the derived-not-stored rule and the retirement of *Pending* are UNCHANGED** |
| ⚠ **`A-97`** | ⚠ **The clock's sufficiency** | ⚠ **`03` — AD-01 **§5.1**, §9.3** | ⚠ **Record that *"authoritative server time"* is sufficient for an INSTANT comparison and INSUFFICIENT for a CALENDAR-DATE bucket, which needs `M-6`'s answer** |
| ⚠ **`A-98`** | ⚠ **Dimension C's rationale** | ⚠ **`03a` — AD-01A **§3.5*** | ⚠ **Record that the `Q5`-gating rationale is SUPERSEDED by `PO-AF1·F.6`, that Dimension C itself is REAFFIRMED by `·F.4`, and that what it now determines is unstated** |
| ⚠ **`A-99`** | ⚠ **The `New → Dump` actor cell** | ⚠ **`03` — AD-01 **§6.1**, row 3** | ⚠ **Record that *"or a permitted reviewer"* was superseded by `PO-AE1·H.1` and is re-confirmed superseded by `PO-AF1·B.9`** |
| ⚠ **`A-100`** | ⚠ **The enrichment task's authorship** | ⚠ **`03a` — AD-01A **§5.4**, **§5.7**; AD-01 `Q8`** | ⚠ **Record that any customer-scoped task is now constrained by `·B.8` in its AUTHORSHIP, and that `Q8` must be answered with that constraint in view** |
| ⚠ **`A-101`** | ⚠ **The work mandate's status** | ⚠ **`03i` — AD-01I **§12**, `I-8`; §12.1's *second producer* cost; `Z-3`** | ⚠ **Record that whether a management work mandate is a *customer task* under `·B.8` is UNDETERMINED, that `PO-AE1·J.1` independently preserves the queue-entry half, and that `Z-3` now consumes `AC-55`(c)** |
| ⚠ **`A-102`** | ⚠ **The activity carrier list** | ⚠ **`03f` — AD-01F **§7.4*** | ⚠ **Re-express as `Communication Type` × `Outcome` with per-outcome required fields, preserving *recorded time* / *effective time*, *custody interval*, *project interest* and *qualifying-for-FUT semantic* unchanged** |
| ⚠ **`A-103`** | ⚠ **The correction event's scope** | ⚠ **`03c` — AD-01C **§3.4** (`S3`), `T-7`** | ⚠ **Record that ACTIVITY-level corrections are now ordinary activities per `·G.3`; that the LIFECYCLE-level correction question and `T-7` SURVIVE; and that §3.4's *correction ≠ re-engagement* rule is now UNENFORCEABLE in the mistaken-`Dump` case — `X-45`** |

> ⚠ **NOT ONE OF `A-94 … A-103` IS MADE. NO PRIOR DOCUMENT IS EDITED, ANNOTATED OR RE-ISSUED.**
> ⚠ **THE ANTI-DOUBLE-COUNTING RULE IS APPLIED, ON AD-01AA's AND `A-84`'s OWN PRECEDENT: `A-96` IS
> **ONE** ENTRY COVERING EVERY PLACE THAT RESTATES CONSOLIDATED §11's `Overdue` PREDICATE, NOT ONE PER
> DOCUMENT.** ⚠ **THE STANDING TOTAL IS `A-1 … A-103`, ALL UNMADE ACROSS TWENTY-FOUR DOCUMENTS, AND
> `Q0-e`'s LIST GROWS ACCORDINGLY.**

### 14.2 The five contradictions, minted

| # | Contradiction | One-line statement | Where | Routed to |
|---|---|---|---|---|
| ⚠ **`X-42`** | ⚠ **`·B.8` versus `PO-AE1·K.2`** | ⚠ **A manager who may not reassign a follow-up performs an act that reassigns every open follow-up on the record** | [§6.1](#61-x-42--the-manager-who-may-not-reassign-a-follow-up-performing-an-act-that-reassigns-every-follow-up) | ⚠ **`AC-55`(b)** |
| ⚠ **`X-43`** | ⚠ **`·B.7` versus `PO-AE1·G.1` + `·G.4`** | ⚠ **A manager's permitted reassignment performs a revival that another locked clause reserves to the Sales Head alone** | [§6.2](#62-x-43--the-manager-whose-permitted-reassignment-performs-a-revival-reserved-to-the-sales-head) | ⚠ **`AC-55`(a)** |
| ⚠ **`X-44`** | ⚠ **`·H`/`·J`/`·K` versus `PO-AE1·L.3`** | ⚠ **The `First Response` milestone and the interval series are an indication, a count and a summary of the history that must not be indicated, counted or summarised** | [§6.3](#63-x-44--the-first-response-milestone-as-an-indication-of-the-history-that-must-not-be-indicated) | ⚠ **`AC-56`** |
| ⚠ **`X-45`** | ⚠ **`·G.3` versus `PO-AE1·E.6`** | ⚠ **The prescribed correction mechanism is disabled by the very act it exists to correct, and the only remaining remedy is the one AD-01C §3.4 forbids using as a correction** | [§6.4](#64-x-45--the-correction-route-that-the-act-being-corrected-disables) | ⚠ **`AC-58`** |
| ⚠ **`X-46`** | ⚠ **`·O.1` versus `PO-AE1·E.8`** | ⚠ **A `Dump` activity both fulfils and permanently cancels the same outstanding follow-up** | [§6.5](#65-x-46--the-dump-that-both-fulfils-and-cancels-the-same-follow-up) | ⚠ **`AC-57`** |

> ⚠ **ZERO CONTRADICTIONS ARE DISCHARGED BY THIS DOCUMENT.** ⚠ **`X-28` IS EXPRESSLY NOT DISCHARGED AND
> ITS AT-LEAST-EIGHTEEN INSTANCES ACROSS AT-LEAST-TWELVE DOCUMENTS ARE UNTOUCHED. **`X-36`, `X-37`,
> `X-38`, `X-39`, `X-40` STAND EXACTLY AS AD-01AE LEFT THEM. **`X-41` IS **ENLARGED** IN SUBJECT — from
> recorded queue columns to any derived surface — AND IS NOT RENUMBERED AND NOT DISCHARGED.**

### 14.3 Other architect-derived findings, listed so none is mistaken for a PO rule

| Finding | Class |
|---|---|
| ⚠ **That `PO-AF1·G.4` supplies the premise AD-01F §7.2 class 8 assumed absent, which is why `S-1` is a supersession rather than a refutation** (`PF-465`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — mine to defend** |
| ⚠ **That consolidated §9's *"system-generated first-entry events"* already presupposed the milestone's existence** (`PF-465` test 3) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — a reading of a SOURCE, offered for attack, in the `PF-447` family** |
| ⚠ **That the RESPONSE CYCLE is not the CUSTODY INTERVAL, because a keep-owner revival opens one without the other** (`PF-479`, `PF-483`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — and it supplies a SECOND, independent reason for AD-01AE's `A-92`, which is **NOT MADE*** |
| ⚠ **That `·B.5` enlarges the `I2` population and thereby shrinks what any without-history restriction can withhold** (`PF-481`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — a consequence, NOT a recommendation** |
| ⚠ **That a note-without-contact and a bare date-push have no shape under `·C.2`, and that the second must masquerade as a communication that is then immutable and metric-bearing** (`PF-472`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — NAMED, NOT SOLVED. **No control or mitigation is proposed** |
| ⚠ **That two metrics are now permanently wrong by design, and that this is the price of `·G`'s guarantee rather than an objection to it** (`PF-488`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — a priced cost, on AD-01I §12.1's own standard** |
| ⚠ **That `W-4`'s purpose is partly defeated by the one-`Inquiry` model, because an `Inquiry`-level `First Response` spans many sources** (`PF-486`, `PF-478`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — an ENLARGEMENT of `U-16`/`W-4`, NOT a new item** |
| ⚠ **That `C-XXVII` fails the necessity test because minting it would pre-empt `AC-56`** (`PF-475`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — a REFUSAL, recorded as a result** |
| ⚠ **That the `PO-AF1·Q` reaffirmation list contains two items the ledger records as `VALIDATE-OPEN`** (`PF-457`, `PF-458`) | ⚠ **⟦ARCHITECT ANALYSIS⟧ — a comparison of two records, neither promoted over the other** |

---

## 15. Recommended next question — ONE only

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **Required output 15, and the owner's instruction is quoted so it governs the
> section: *"Do not ask the PO all remaining questions in this task. We will continue one question at a
> time after this reconciliation."*** ⚠ **[§13](#13-remaining-validate-open-business-questions) CARRIES
> THE FULL REGISTER BECAUSE REQUIRED OUTPUT 13 DEMANDS IT. **THIS SECTION RECOMMENDS EXACTLY ONE
> QUESTION AND RECOMMENDS NOTHING ELSE.**

### 15.1 The selection, tested rather than assumed

| Candidate | Why it is NOT first |
|---|---|
| ⚠ **`AC-50`** — the grain of commercial disposition | ⚠ **THE HIGHEST-VALUE QUESTION IN THE CORPUS AND STILL NOT FIRST. **AD-01AE ALREADY RECOMMENDED IT AND IT IS ALREADY AT THE HEAD OF THE OWNER'S QUEUE; RE-RECOMMENDING IT WOULD BE THIS DOCUMENT ADDING NOTHING** |
| ⚠ **`AC-56`** — what a derived milestone may disclose | ⚠ **SECURITY-CRITICAL AND STRONGLY CONSIDERED. ⚠ **IT LOSES ON DEPENDENCY: `AC-56`(b)/(c)/(d) EACH TURN ON WHAT A **PREVIOUS OR RESTRICTED VIEWER** MAY READ, WHICH IS `AC-51`'s SUBJECT, AND `AC-51` IS ALREADY OPEN. **ASKING `AC-56` FIRST WOULD PRODUCE AN ANSWER THAT `AC-51` COULD THEN CONTRADICT** |
| ⚠ **`AC-57`** — fulfilled or cancelled | ⚠ **OPERATIONALLY REAL AND NOT BLOCKING A MODEL. **Its limb (c) consumes `V-4`, which is a different and older question** |
| ⚠ **`AC-59`** — the `Success Reason` vocabulary | ⚠ **A VALUE QUESTION, AND `N-4` SHOWS VALUE QUESTIONS DO NOT BLOCK MODEL WORK — THEY BLOCK SHIPPING. **Correct to ask, wrong to ask first** |
| ⚠ **`V-4`** — the *qualifying* predicate | ⚠ **THE CORPUS'S *"cheapest unblocking question"* FOR TWENTY-TWO DOCUMENTS, AND IT IS NOW **PARTLY ANSWERED**. **Asking its remainder is cheap and is NOT the most expensive thing to get wrong** |
| ⚠ **`AC-58`** — the correction dead end | ⚠ **THE MOST VIVID FINDING IN THE DOCUMENT AND STILL NOT FIRST. ⚠ **ITS LIMB (b) ASKS THE OWNER TO ACCEPT A CONSEQUENCE, WHICH IS A QUESTION THE OWNER CAN ONLY ANSWER WELL **AFTER** KNOWING WHO MAY ACT — IF A MANAGER'S REVIVAL IS THE REMEDY, `AC-55`(a) DETERMINES WHETHER THAT REMEDY IS EVEN REACHABLE IN A GIVEN TEAM** |
| ⚠ **`AC-55`** — the manager's authority boundary | ⚠ ***SELECTED* — see below** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-495` — WHY `AC-55` AND NOT ONE OF THE OTHER SIX, STATED IN FOUR
> REASONS SO THE CHOICE CAN BE ARGUED WITH.**
>
> | # | Reason |
> |---|---|
> | **1** | ⚠ **IT IS THE ONLY NEW ITEM THAT DISCHARGES **TWO** CONTRADICTIONS AT ONCE — `X-42` AND `X-43` — AND BOTH ARE **PO-VERSUS-PO**, WHICH NO ARCHITECT MAY RESOLVE** |
| **2** | ⚠ **IT IS **UPSTREAM OF THREE OTHER OPEN ITEMS**: `Z-3` CANNOT BE ANSWERED WITHOUT LIMB (c); `AC-54`'s ENLARGED DEADLOCK CANNOT BE ANSWERED WITHOUT LIMB (a); AND `AC-58`'s REMEDY LIMB PRESUPPOSES LIMB (a)** |
| **3** | ⚠ **IT IS AN **AUTHORIZATION** BOUNDARY, AND AD-01B §4's REWORK-ASYMMETRY STANDARD MAKES AUTHORIZATION THE MOST EXPENSIVE CLASS TO ANSWER LATE: ACTS PERFORMED UNDER AN UNDECIDED BOUNDARY CANNOT BE RE-AUTHORIZED RETROSPECTIVELY, AND `PO-AE1·G.5` EXPRESSLY DECLINES TO CREATE A SEPARATE EVENT THAT COULD RECORD THE AUTHORIZATION SEPARATELY** |
| **4** | ⚠ **AND IT IS **CHEAP FOR THE OWNER TO ANSWER**, WHICH MATTERS WHEN THE INSTRUCTION IS *one question at a time*: IT ASKS THE OWNER TO DESCRIBE THEIR OWN ORGANISATION — WHO MANAGES WHOM, AND WHETHER THE PERSON WHO TRANSFERS A LEAD IS THE SAME PERSON WHO MAY REVIVE ONE. ⚠ **NO ARCHITECTURE MUST BE READ TO ANSWER IT** |

### 15.2 THE ONE QUESTION

> ⚠ ⟦BUSINESS DECISION REQUIRED — `AC-55`, AND IT IS THE ONLY QUESTION THIS DOCUMENT ASKS⟧
>
> ⚠ # **In BMexa, is *MANAGER* the same principal as *SALES HEAD / SITE HEAD*, or a wider population that also includes reporting managers who are not Sales Heads?**
>
> **And, as the same question's unavoidable second half, because the answer is only usable with it:**
>
> | | |
> |---|---|
> | ⚠ **(a)** | ⚠ **If *manager* is wider: when a manager who is NOT a Sales Head reassigns a `Dumped` customer — which `PO-AE1·G.4` makes an automatic revival and `PO-AE1·G.5` expressly declines to record as a separate event — **is that permitted**, given that `PO-AE1·G.1` says *"only the Sales Head can manually revive / reassign"*?** |
> | ⚠ **(b)** | ⚠ **When a manager transfers a record that has pending or overdue follow-ups, `PO-AE1·K.2` makes those follow-ups move to the new rep. **Is that consistent with `PO-AF1·B.8`'s prohibition on a manager REASSIGNING a customer follow-up — or does `·B.8` mean a manager may not transfer a record that has open follow-ups?** |
> | ⚠ **(c)** | ⚠ **And where a manager hands a record to a rep specifically so that rep will work it — AD-01I's *work mandate* — **is that management intent a *customer task* under `·B.8`, or is it a property of the transfer act that `·B.7` permits?**** |
> | ⚠ **(d)** | ⚠ **Finally: `·B.9` says *"the current Client Owner / Sales Rep"* as if one person. ⟦SOURCE⟧ **§10** and the observed work queue carry *inquiry owner* and *Assigned To / Lead Handler* as **two separate facts**. **When they differ, which one holds the exclusive activity and follow-up authority?** |
>
> ⚠ **WHY IT IS ASKED AND NOT DERIVED:** ⟦SOURCE⟧ **§88** reserves *authorization rules*; **`R2`**
> forbids resolving it by role name; **`M-3`** (the default role set) and **`M-7`** (the breadth
> vocabulary) are both open; and ⟦SOURCE⟧ consolidated **§3** lists *Manager / Reporting Manager* and
> *Site Head / Sales Head* as two rows with two different descriptions and one overlapping capability.
> ⚠ **NOTHING IN THIS DOCUMENT PREFERS EITHER ANSWER.**

### 15.3 What is expressly NOT asked in this task

⚠ **`AC-56`, `AC-57`, `AC-58`, `AC-59`, `AC-50`, `AC-51`, `AC-52`, `AC-53`, `AC-54`, `V-4`, `N-4`,
`V-19`, `W-1`, `W-5`, `M-6`, `AC-6`'s ninth discrepancy notice, `AC-48`'s second, the notification
cadence and the seven items at [§13.3a](#133a-the-seven-new-non-ac-validate-open-items) ARE ALL
RECORDED IN THE REGISTER AND **NOT ASKED HERE**.** ⚠ **THE REGISTER EXISTS SO THAT NOTHING IS LOST;
THE SINGLE QUESTION EXISTS SO THAT NOTHING IS RUSHED. **BOTH ARE THE OWNER'S OWN INSTRUCTIONS AND
NEITHER IS TRADED AGAINST THE OTHER.**

---

## 16. The required 15-item output, mapped

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-496` — `PO-AF1`'s OWN §15 SPECIFIES FIFTEEN OUTPUTS. **EACH IS MAPPED TO
> WHERE IT IS DELIVERED, SO THE OWNER CAN CHECK COMPLIANCE WITHOUT READING THE WHOLE DOCUMENT.**

| # | Required output | Delivered at | Headline |
|---|---|---|---|
| **1** | **Documents reviewed** | ⚠ **[§1](#1-documents-reviewed)** | ⚠ **Five tiers, nine exhaustive whole-corpus searches, each result recorded whether convenient or not** |
| **2** | **PO decisions incorporated** | ⚠ **[§2](#2-po-decisions-incorporated)** | ⚠ **All seventeen sub-clause groups; nine classed as RESTATEMENT and not counted** |
| **3** | **New PO LOCKED decisions** | ⚠ **[§3](#3-new-po-locked-decisions)** | ⚠ **EIGHT new locks; nine sub-clause groups expressly not counted** |
| **4** | **Existing decisions that remain valid** | ⚠ **[§4](#4-existing-decisions-that-remain-valid)** | ⚠ **Twelve load-bearing confirmations; the 17-item and 14-item reaffirmation lists checked item by item; **two CP items found to be listed as locked while the ledger records them open** |
| **5** | **Superseded decisions** | ⚠ **[§5](#5-superseded-decisions)** | ⚠ **FOUR genuine supersessions, one already-superseded item re-confirmed and not re-counted, two NARROWED, one superseded in one application only. **The manager-task hunt run to exhaustion** |
| **6** | **Contradicted decisions** | ⚠ **[§6](#6-contradicted-decisions)** | ⚠ **FIVE contradictions, all `PO-AF1` versus `PO-AE1`, none resolved; eighteen further candidate pairs tested and reported as negatives** |
| **7** | **Architecture rules affected** | ⚠ **[§7](#7-architecture-rules-affected)** | ⚠ **Thirteen rules; the activity model and the First-Response model each reconciled against their predecessors; `C-XXVII` tested and REFUSED** |
| **8** | **Cross-domain consequences** | ⚠ **[§8](#8-cross-domain-consequences)** | ⚠ **Twelve ranked consequences, three deliberately deflated, eight domains confirmed NOT reached, the screenshot's standing fixed** |
| **9** | **Security / RLS consequences** | ⚠ **[§9](#9-security--rls-consequences)** | ⚠ **Four mandatory authorization facts; five checklist additions; six adversarial cases; **no policy, predicate, role or grant designed** |
| **10** | **Data-model consequences — implications only** | ⚠ **[§10](#10-data-model-consequences--implications-only-no-schema)** | ⚠ **Thirteen facts the domain must HOLD; ONE genuinely new conceptual requirement NAMED AND NOT DESIGNED; **no schema, table, column, type or migration anywhere** |
| **11** | **Reporting / analytics consequences** | ⚠ **[§11](#11-reporting--analytics-consequences)** | ⚠ **Seven distinctions; the four clocks re-run; the day boundary promoted to a correctness input; two metrics now permanently wrong by design, priced** |
| **12** | **Audit / event-history consequences** | ⚠ **[§12](#12-audit--event-history-consequences)** | ⚠ **Four stated and eight implied events, seven questions, one hazard — **captured for the later Gate, which is NOT opened** |
| **13** | **Remaining VALIDATE-OPEN business questions** | ⚠ **[§13](#13-remaining-validate-open-business-questions)** | ⚠ **The full register: five new `AC-` items, twenty-two register rows, seven new non-`AC` items, nine candidates refused** |
| **14** | **Approximate count of remaining substantive PO questions** | ⚠ **[§13.6](#136-approximate-count-of-remaining-substantive-po-questions)** | ⚠ **≈ 55–60 substantive, of which **NINE ARE BLOCKING**; `A-1 … A-103` expressly NOT counted as questions** |
| **15** | **Recommended next question ONLY** | ⚠ **[§15](#15-recommended-next-question--one-only)** | ⚠ **`AC-55` — **ONE QUESTION**, selected against six tested alternatives** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **AND THE OWNER'S `STEP 1`–`STEP 8` INSTRUCTIONS, MAPPED SEPARATELY BECAUSE
> THEY ARE NOT THE SAME LIST.**
>
> | Step | Instruction | Where |
> |---|---|---|
> | **1** | Review the current architecture repository/docs | ⚠ **[§1](#1-documents-reviewed)** |
> | **2** | Locate every existing rule affected | ⚠ **[§5](#5-superseded-decisions), [§6](#6-contradicted-decisions), [§7](#7-architecture-rules-affected), [§17](#17-documents-and-sections-that-are-stale-or-need-reconciliation)** |
> | **3** | Perform a contradiction / supersession audit | ⚠ **[§5.1](#51-the-supersession-table), [§6.6](#66-the-contradiction-audit-run-over-eighteen-further-candidate-pairs-and-reporting-its-negatives)** |
> | **4** | Update architecture documentation where appropriate | ⚠ **THIS FILE IS THE UPDATE. **NO PRIOR FILE IS EDITED — the series' standing convention, honoured for the twenty-fifth time** |
> | **5** | List every old rule now SUPERSEDED / CONTRADICTED / NARROWED / STILL VALID | ⚠ **[§5.1](#51-the-supersession-table) · [§14.2](#142-the-five-contradictions-minted) · [§5.7](#57-narrowed-not-superseded-the-five-cases) · [§4](#4-existing-decisions-that-remain-valid)** |
> | **6** | Create/update the authoritative PO decision ledger if one exists | ⚠ **IT DOES, AND IT IS DISTRIBUTED RATHER THAN CENTRAL: the `PO-` clause series, the `AC-` register, the `X-` register, the `A-` register and the `C-` series. ⚠ **EACH IS EXTENDED IN PLACE AT [§13](#13-remaining-validate-open-business-questions) AND [§14](#14-architect-derived-decisions), AND THE HIGH-WATER MARKS WERE RE-VERIFIED BY EXHAUSTIVE GREP BEFORE ANYTHING WAS MINTED** |
> | **7** | Do NOT silently resolve conflicts; mark `VALIDATE-OPEN` | ⚠ **HONOURED. **FIVE CONTRADICTIONS STOPPED AT, FIVE `AC-` ITEMS MINTED, SEVEN NON-`AC` ITEMS RECORDED, AND `C-XXVII` REFUSED PRECISELY BECAUSE MINTING IT WOULD HAVE RESOLVED `AC-56`** |
> | **8** | Identify genuinely unresolved business decisions; do not manufacture | ⚠ **HONOURED. **FIVE MINTED, **NINE REFUSED**, AND THE REFUSALS LISTED AT [§13.4](#134-candidates-tested-and-not-minted) SO THE DISCIPLINE CAN BE CHECKED** |

---

## 17. Documents and sections that are stale or need reconciliation

> ⚠ ⟦ARCHITECT ANALYSIS⟧ ⚠ **THIS IS A MAP FOR A LATER READER, NOT AN EDIT LIST. **NO FILE IS TOUCHED.**

| Document | Sections | What a reader must know |
|---|---|---|
| ⚠ **`03` — AD-01** | ⚠ **§3.3** · **§5.1** · **§6.1** · §9.3, §9.4 | ⚠ **§3.3's follow-up-status analysis is CONFIRMED. **§5.1's *"Derived, never stored"* list does NOT name `First Response` — checked at source — so the storage prohibition was never AD-01's. **§5.1's *"authoritative server time"* needs `A-97`. **§6.1's self-transition and `New → Dump` / `New → Success` rows are CONFIRMED; its *"or a permitted reviewer"* actor cell needs `A-99`** |
| ⚠ **`03a` — AD-01A** | ⚠ **§3.5** · **§3.6** · §3.7, §3.8 · **§5.4**, **§5.7** · §8.1 · **§8.3** · §8.5, §8.6 | ⚠ **§3.5's Dimension-C rationale needs `A-98`. **§3.6's derivation rule needs `A-95`. **§8.3 is CONFIRMED VERBATIM and `N-4` still owns its values. **§5.4/§5.7's *task* needs `A-100`. **§8.1 and §8.6 are UNTOUCHED, and `A-91`/`V-6` stand exactly as AD-01AE left them** |
| ⚠ **`03c` — AD-01C** | ⚠ **§3.4 (`S3`, `T-7`)** · §3.7 (`Q6`) | ⚠ **§3.4 needs `A-103` and carries `X-45`. **Its *correction ≠ re-engagement* rule is now UNENFORCEABLE in the mistaken-`Dump` case. **`Q6` is NOT reopened** |
| ⚠ **`03e` — AD-01E** | §6.3 · §6.5 (`U-10`) · §12 | ⚠ **The `I1 ∪ I2 ∪ I3` union is ENLARGED, not replaced. **`U-10` is NARROWED in its breadth limb only** |
| ⚠ **`03f` — AD-01F** | ⚠ **§7.2 class 8** · **§7.4** · §2.2, §2.3 · §4 (`C-6`, `C-7`, `C-8`, `C-9`) · §7.3 · §12.4 · §16 | ⚠ **CLASS 8 IS SUPERSEDED — `A-94`; **CLASSES 1–7 AND THE READ-MODEL CONCLUSION SURVIVE INTACT.** **§7.4 needs `A-102`. **§7.3's response/sub-response diagnosis STANDS and is now inside a locked contract (`V-19`). **§12.4's three-act distinction is CONFIRMED and REINFORCED** |
| ⚠ **`03g` — AD-01G** | §8.1 · §9.2, §9.3 · §11.3 · `W-1`, `W-4`, `W-5` | ⚠ **§9.3 constraint 1 now governs a LARGER `I2` population; constraint 2 now also binds the `No Response / Transferred` closure. **§11.3's leakage finding (`X-41`) is ENLARGED. **`W-1` UNAVOIDABLE, `W-4` partly defeated in purpose, `W-5` ENLARGED** |
| ⚠ **`03h` — AD-01H** | §5.1 (`H-5`) · §11.4 | ⚠ **`H-5`'s three `New` predicates are UNTOUCHED and still gated by `V-4`. **§11.4's `All-Without-Dump` filter question is UNTOUCHED** |
| ⚠ **`03i` — AD-01I** | ⚠ **§12 (`I-8`)** · §12.1 (the *second producer* cost) · §2.4 (`I-1`) · §3.5, §3.6 · §10.1, §10.2 · `Z-2`, `Z-3` | ⚠ **`I-8`'s STATUS BECOMES UNDETERMINED — `A-101`, `AC-55`(c). **`I-1`'s axis decomposition is CONFIRMED and SHARPENED on the actor axis. **`I-13`'s *reactivation is two facts* becomes THREE CYCLE KINDS. **`Z-2` ANSWERED IN ITS RECOVERABILITY LIMB ONLY** |
| ⚠ **`03j`–`03z`, `03aa`, `03ab`** | ⚠ **The CP / commission chain** | ⚠ **UNTOUCHED. `PO-AF1` NAMES NO CP SUBJECT. **`·Q` IS A REAFFIRMATION AND CLOSES NOTHING; TWO OF ITS FOURTEEN ITEMS NAME AS LOCKED SOMETHING THE LEDGER RECORDS AS OPEN — `AC-6`, `AC-48`** |
| ⚠ **`03ac` — AD-01AC** | ⚠ **§9.2, §9.3** · **§10.1, §10.3** · §13 | ⚠ **§9.2 ROW 2 IS ANSWERED BY `·I.4`; ROWS 6 AND 7 ARE SHARPENED AND STILL OPEN. **§9.3's four clocks: three selected, one not. **§10.1's derived-bucket reconfirmation STANDS; §10.3's `M-6`/`AC-6` separation is CARRIED FORWARD UNCHANGED and is now LOAD-BEARING** |
| ⚠ **`03ad` — AD-01AD** | §6, §10.2 | ⚠ **UNTOUCHED. Its `Dump`-meaning reconciliation is unaffected by an activity-level outcome model** |
| ⚠ **`03ae` — AD-01AE** | ⚠ **§0 (`PO-AE1·E.6`, `·E.8`, `·G.1`, `·G.4`, `·G.5`, `·K.2`, `·L.3`, `·N.2`, `·O.1`)** · §7.2 · §8.2, §8.3, §8.6 · §12 · §13 · §14 | ⚠ **FIVE OF ITS CLAUSES ARE NOW IN A NAMED CONTRADICTION WITH `PO-AF1` — `X-42 … X-46` — AND **NOT ONE OF THEM IS EDITED, ANNOTATED OR WITHDRAWN.** **§8.2's twelve configurations are RE-RUN at [§7.4](#74-the-per-cycle-interval-model-tested-for-representability-against-the-ad-01ae-transfer-matrix) and six are UNDETERMINED for the new milestone. **`A-92` gains a second independent reason and is still NOT MADE. **`AC-51` and `AC-54` are ENLARGED** |
| ⚠ **`00`, `schema-phase-0.sql`** | §842, §854 | ⚠ **NO CRM BUSINESS-OBJECT TABLES EXIST. **THERE IS NOTHING TO MIGRATE AND NOTHING TO CONFLICT WITH** |
| ⚠ **`docs/BMexa_Base_Version_Product_Owner_Requirements_Consolidated.md`** | ⚠ **§11 (the `Overdue` row)** · §3 · §9 · §10 | ⚠ **§11's `Overdue` PREDICATE IS SUPERSEDED — `A-96`; its derived-bucket status and the retirement of *Pending* are NOT. **§3's two manager rows are the evidence `X-43` turns on. **§9's *"system-generated first-entry events"* is the phrase that vindicates `·H`. **§10's field list is NARROWED to the FOLLOW-UP branch** |

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **`PF-497` — THIRTEEN DOCUMENTS AND ONE SOURCE ARE TOUCHED AND **ZERO ARE
> EDITED**. **THE RECONCILIATION LIVES HERE. **THAT IS THE SERIES' STANDING CONVENTION AND IT IS
> HONOURED AGAIN ON A DAY WHEN IT WOULD HAVE BEEN PARTICULARLY TEMPTING TO BREAK IT — BECAUSE FIVE
> CLAUSES ON THE NEIGHBOURING PAGE, LOCKED HOURS AGO, NOW COLLIDE WITH CLAUSES LOCKED TODAY, AND
> NEITHER PAGE MAY BE QUIETLY ADJUSTED TO FIT THE OTHER.**

---

## 18. Final reconciliation status

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **ONE OF FOUR STRINGS, CHOSEN BY TEST RATHER THAN BY IMPRESSION.**

### 18.1 The four candidates, tested

| Candidate | Applies? | Why |
|---|---|---|
| `RECONCILED — NO PO QUESTIONS` | ⚠ **NO** | ⚠ **FIVE new `AC-` questions are minted and approximately fifty-five to sixty substantive questions remain open** |
| `RECONCILED — PO QUESTIONS REMAIN` | ⚠ **NO** | ⚠ **THIS WOULD BE THE COMFORTABLE ANSWER AND IT IS FALSE. **It asserts the architecture IS reconciled apart from some open questions. ⚠ **IT IS NOT: `X-42` THROUGH `X-46` ARE LIVE COLLISIONS BETWEEN TWO `PO LOCKED` CLAUSE SETS, AND `X-45` DESCRIBES AN OPERATION THE BUSINESS PERFORMS ROUTINELY AND THAT THE MODEL CURRENTLY CANNOT COMPLETE** |
| ⚠ **`CONTRADICTIONS REQUIRE PO DECISION`** | ⚠ **YES** | ⚠ **FIVE CONTRADICTIONS ARE MINTED AND **NOT ONE CAN BE RESOLVED BY AN ARCHITECT**. **TWO (`X-42`, `X-43`) TURN ON AUTHORIZATION RULES, WHICH ⟦SOURCE⟧ §88 RESERVES. **ONE (`X-44`) TURNS ON A DISCLOSURE RULE, ALSO RESERVED. **ONE (`X-45`) WOULD REQUIRE INVENTING A CORRECTION MECHANISM, WHICH ⟦SOURCE⟧ Rule 1 FORBIDS. **ONE (`X-46`) IS A WORKLOAD-ACCOUNTABILITY DECISION WITH TWO OWNER CLAUSES POINTING AT ONE OBJECT WITH DIFFERENT VERBS** |
| `ARCHITECTURE NOT YET RECONCILED` | ⚠ **NO — AND THE DISTINCTION IS NOT COSMETIC** | ⚠ **THIS WOULD ASSERT THE WORK IS INCOMPLETE. **IT IS NOT: every sub-clause is incorporated and classified, the manager-task supersession is hunted to exhaustion across thirty-six files, the `First Response` reversal is traced to its source and its enabling premise identified, the per-cycle model is tested against all twelve transfer configurations, and both reaffirmation lists are checked item by item against their locking decisions. ⚠ **WHAT BLOCKS COMPLETION IS NOT MISSING ANALYSIS — IT IS MISSING **DECISIONS**, AND NAMING THEM IS WHAT THIS DOCUMENT WAS FOR** |

### 18.2 The status

> ⚠ # `CONTRADICTIONS REQUIRE PO DECISION`

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **THE STATUS IS ACCOMPANIED BY ITS SHORTEST HONEST GLOSS, BECAUSE A BARE
> STRING INVITES MISREADING IN BOTH DIRECTIONS.**
>
> ⚠ **`PO-AF1` IS A GOOD DECISION SET. **IT IS COMPLETE ON ITS OWN SUBJECTS, INTERNALLY CONSISTENT,
> UNUSUALLY PRECISE ABOUT WHAT IT DOES NOT DECIDE (`·N.3`/`·N.4`), AND IT CLOSES A TWENTY-TWO-DOCUMENT
> QUESTION AND A WORKING-HOUR AMBIGUITY THE SOURCE ITSELF HAD FLAGGED.**
> ⚠ **WHAT REQUIRES A DECISION IS NOT `PO-AF1`. **IT IS THE **FIVE PLACES WHERE `PO-AF1` AND `PO-AE1`
> EACH SPEAK CLEARLY TO A SUBJECT AND NEITHER SPEAKS TO THEIR INTERSECTION** — AND THAT IS THE
> PREDICTABLE COST OF TWO LARGE, CORRECT DECISION SETS ARRIVING CLOSE TOGETHER, NOT A DEFECT IN EITHER.**

### 18.3 The five contradictions requiring a PO decision, in priority order

| Rank | Contradiction | The decision required | Routed to |
|---|---|---|---|
| ⚠ **1** | ⚠ **`X-43`** | ⚠ **Is *manager* the Sales Head, or wider — and if wider, may a manager's reassignment perform a revival `PO-AE1·G.1` reserves?** | ⚠ **`AC-55`(a)** |
| ⚠ **2** | ⚠ **`X-45`** | ⚠ **How is a mistakenly-recorded `Dump` corrected, when the correction mechanism is disabled by the `Dump` itself?** | ⚠ **`AC-58`** |
| ⚠ **3** | ⚠ **`X-44`** | ⚠ **Does `PO-AE1·L.3`'s *no indication, no count, no summary* bind the `First Response` milestone and the interval series?** | ⚠ **`AC-56`** |
| ⚠ **4** | ⚠ **`X-42`** | ⚠ **Does `·B.8`'s prohibition on reassigning follow-ups bind `PO-AE1·K.2`'s automatic carry-over?** | ⚠ **`AC-55`(b)** |
| ⚠ **5** | ⚠ **`X-46`** | ⚠ **Does a `Dump` FULFIL or CANCEL the outstanding follow-up, and which predicate governs fulfilment?** | ⚠ **`AC-57`** |

### 18.4 What is explicitly NOT claimed

| Claim | Made? |
|---|---|
| *"Ready for implementation"* | ⚠ **NO. **Five live contradictions, five new `AC-` questions, `N-4` at its twenty-fifth document, `V-4` at its twenty-second, and one hundred and three unmade amendments** |
| *"The architecture is complete"* | ⚠ **NO — AND THE OWNER'S `§18` FORBIDS SAYING SO IN TERMS** |
| *"The operational layer is reconciled"* | ⚠ **NO** |
| *"The activity model may be built"* | ⚠ **NO. **The owner's own process places *Data Model*, *Security / Tenant Isolation*, *Failure / Concurrency / Offline*, *API / Contracts* and *Tests* between this stage and implementation** |
| *"`V-4` is answered"* | ⚠ **NO — ONE LIMB OF SIX** |
| *"`AC-50` is answered"* | ⚠ **NO — ONE LIMB OF THREE, AND THE TWO THAT BLOCK AD-01H's EXAMPLES ARE UNTOUCHED** |
| *"The CP chain is reaffirmed as locked"* | ⚠ **NO. **TWELVE OF FOURTEEN ITEMS CONFIRMED; **TWO NAME AS LOCKED SOMETHING THE LEDGER RECORDS AS `VALIDATE-OPEN`*** |
| *"The Audit Completeness Gate is progressed"* | ⚠ **NO. **DEFERRED, NOT OPENED, NOT PARTIALLY DESIGNED** |
| *"Any prior document has been corrected"* | ⚠ **NO. **ZERO FILES EDITED** |

---

## Closing note

> ⚠ ⟦ARCHITECT ANALYSIS⟧ **WHAT THIS DOCUMENT WAS FOR, AND WHAT IT DELIBERATELY DID NOT DO.**
>
> **The Product Owner specified the operational layer — who may act, what an act looks like, what an
> act is permanent against, and what the system derives from a sequence of acts.** ⚠ **THE CORRECT
> RESPONSE IS NOT TO DEFEND THE ARCHITECTURE'S PRIOR DERIVATIONS, NOT TO QUIETLY EDIT THEM AWAY, AND
> NOT TO SMOOTH THE PLACES WHERE TODAY'S DECISION MEETS YESTERDAY'S. **IT IS TO NAME WHAT FALLS, NAME
> WHAT STANDS, AND FIND EVERY PLACE WHERE TWO CORRECT DECISIONS PRODUCE AN INCORRECT OUTCOME AT THEIR
> SEAM — BEFORE SOMEONE DISCOVERS IT IN PRODUCTION.**
>
> ⚠ **THERE ARE FIVE SUCH SEAMS AND ONE OF THEM STOPS A REP FROM FIXING THEIR OWN MISTAKE.**
>
> ⚠ **THE ONE THING A LATER READER SHOULD TAKE FROM THIS DOCUMENT IF THEY TAKE NOTHING ELSE:**
> ⚠ **`PO-AE1` DECIDED WHAT A CUSTOMER RECORD **IS**. **`PO-AF1` DECIDED WHAT PEOPLE **DO** TO IT.**
> **EACH IS COHERENT. **EVERY CONFLICT FOUND TODAY LIVES IN THE JOIN BETWEEN THEM, AND NOT ONE LIVES
> INSIDE EITHER.**
>
> ⚠ **AND THE SMALLER THING, WHICH IS A LESSON ABOUT THE CORPUS RATHER THAN ABOUT THE MODEL:**
> ⚠ **AD-01F FORBADE STORING `First Response` BECAUSE A LATER CORRECTION WOULD MAKE THE STORED VALUE
> DISAGREE WITH ITS SOURCE. **THE OWNER HAS NOW ABOLISHED THE CORRECTION.** ⚠ **AND CONSOLIDATED §9 —
> THE PAGE AD-01F CITED FOR FUT — HAD ALREADY EXCLUDED *"system-generated first-entry events"* FROM
> THAT COUNT, WHICH ONLY MAKES SENSE IF THEY EXIST.** ⚠ **FOR THE SECOND TIME IN TWO DOCUMENTS, THE
> OWNER'S NEW DECISION TURNS OUT TO BE **CLOSER TO THE SOURCE THAN THE ARCHITECTURE WAS** — `PF-447`
> FOUND IT FOR `R-14`, AND `PF-465` FINDS IT AGAIN HERE.**
>
> ⚠ **WHAT WAS NOT DONE, LISTED BECAUSE RESTRAINT IS PART OF THE WORK: NO PRIOR DOCUMENT WAS EDITED;
> TEN AMENDMENTS WERE NAMED AND NONE MADE; FIVE CONTRADICTIONS WERE MINTED AND NONE DISCHARGED; `X-28`
> WAS NOT DISCHARGED; `C-XXVII` WAS TESTED AND **REFUSED** SO THAT IT COULD NOT PRE-EMPT `AC-56`; FIVE
> QUESTIONS WERE MINTED AND **NINE CANDIDATES REFUSED**; TWO REAFFIRMATION-LIST DISCREPANCIES WERE
> RECORDED WITHOUT PROMOTING EITHER RECORD OVER THE OTHER; NO METRIC, FORMULA, SLA, THRESHOLD,
> NOTIFICATION CADENCE, SCHEMA, POLICY, ENDPOINT, CONTROL OR SCREEN WAS PROPOSED; AND THE AUDIT
> COMPLETENESS GATE WAS NOT OPENED.**

### **THE CLOSING POSITION**

⚠ **THE SIX SENTENCES THAT MATTER.**

1. ⚠ **A MANAGER SEES EVERYTHING IN THEIR REPORTING TREE, MAY MOVE A CUSTOMER, AND MAY TOUCH NOTHING
   ELSE. **`PO LOCKED`.**
2. ⚠ **AN ACTIVITY IS A COMMUNICATION TYPE AND AN OUTCOME, IT IS SAVED ONCE, AND IT IS NEVER CHANGED
   AGAIN. **`PO LOCKED`.**
3. ⚠ **`First Response` IS A RECORDED MILESTONE, ONE PER RESPONSE CYCLE, MEASURED IN CALENDAR TIME AND
   NEVER RECALCULATED — AND THE ARCHITECTURE HAD FORBIDDEN EXACTLY THAT, FOR A REASON THE OWNER HAS
   NOW REMOVED. **`PO LOCKED`; AD-01F §7.2 CLASS 8 `SUPERSEDED`.**
4. ⚠ **A REP WHO DUMPS THE WRONG CUSTOMER CANNOT FIX IT, BECAUSE THE ONLY PERMITTED REMEDY IS DISABLED
   BY THE MISTAKE ITSELF, AND THE ONLY REMAINING ROUTE IS THE ONE THE CORPUS FORBIDS USING AS A
   CORRECTION. **`AC-58`.**
5. ⚠ **THE NEW MILESTONE SERIES TELLS A RESTRICTED VIEWER HOW MANY PEOPLE HELD THE RECORD BEFORE THEM,
   AND WHETHER ANY OF THEM ANSWERED — WHICH IS THE ONE THING A WITHOUT-HISTORY TRANSFER EXISTS TO
   WITHHOLD. **`AC-56`.**
6. ⚠ **THE ARCHITECTURE IS NOT RECONCILED, AND THE REASON IS NOT MISSING ANALYSIS. **IT IS
   `CONTRADICTIONS REQUIRE PO DECISION`, AND THE NEXT STEP IS **ONE QUESTION**: WHO, EXACTLY, IS A
   MANAGER.**
