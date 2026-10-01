STATUS: PRODUCT-OWNER DECISION REQUIRED — NO POLICY SELECTED

# AD-01M — Does a Channel Partner get paid on a later sale? A decision framework for the Project Owner

**What this document is.** Every document before this one in the series (AD-01 through AD-01L) was an
*architecture* document: it worked out how the system must be shaped so that it can represent the
business truthfully. **This document is not that.** AD-01L finished the architectural work and
concluded, in its own words, that *"there is nothing left for an architect to add before the owner
decides. A sixth architect document on T-4 would be analysis substituting for a decision."*

**This document therefore does one job only: it lays the remaining decision out clearly enough that the
Project Owner can make it.** The decision is a **commercial policy about money** — what a builder owes a
channel partner for an introduction that did not result in a sale at the time. **No architect can answer
that, and this one does not.**

**Predecessors, all treated as input and none edited:** AD-01 · AD-01A · AD-01B · AD-01C · AD-01E ·
AD-01F · AD-01G · AD-01H · AD-01I · AD-01J · AD-01K · AD-01L.

---

## How to read this document

**Written for a business reader.** Where a term from an earlier document is unavoidable, it is defined in
plain language the first time it appears, and the glossary below defines all of them in one place. Where
a sentence carries a technical reference (`§11`, `K-48`, `L-6`), **the sentence is complete without it** —
the reference is there so an engineer can check the claim later, not because you need to follow it.

**Every substantive statement carries one of four labels.** The labels matter more here than in any prior
document in this series, because this document deliberately mixes things that are already settled with
things that are entirely yours.

| Label | Meaning in plain language |
|---|---|
| ⟦SOURCE⟧ | Quoted or closely paraphrased from the Master Spec, your own consolidated requirements, or the engineering rules. **This is what the documents actually say.** |
| ⟦SETTLED⟧ | Already decided — either by you, earlier, or forced by the architecture. **Not part of this decision and not re-opened here.** |
| ⟦OBSERVATION⟧ | Something the architect noticed while preparing this framework. **Not a decision, not a recommendation, and not approved.** It is information for you. |
| ⟦YOUR DECISION⟧ | The documents are silent. Nothing here guesses. **This is yours to answer.** |

**Observations raised by this document are numbered `MF-n`** (for "M-Framework"), to avoid collision with
the `Q / N / M / E / D / X / T / U / V / W / Y / Z / AA / AB / AC` numbering already in use across the
series. **Two new open questions are minted as `AC-2` and `AC-3`, continuing AD-01L's `AC` series. Both
are questions. Neither is answered.**

**Scope discipline, stated once and honoured throughout.** No database design, no table, no column, no
code, no migration and no screen design appears anywhere. **No commission formula, rate, slab,
percentage, amount, milestone value, clawback quantum or tax treatment appears anywhere** — the future
commission model (`M-9`) owns all of that and is not pre-empted here. **No time window, no scoring rule
and no number of any kind is proposed.** **No prior document is modified.** **No other open item is
resolved.**

---

## Glossary — the seven things that must never be confused

These seven are different from one another. Prior documents in this series spent a great deal of effort
establishing that, and the whole framework below depends on it. **If two of them get merged in your mind,
the scenarios in §4 stop making sense.**

| Term | What it means, in plain language | A concrete example |
|---|---|---|
| **Person** | The actual human being. One Amit. | Amit Sharma, one phone number, one identity. |
| **Work record** *(called "Lead" in the spec)* | The file your sales team works out of for that Person. Holds the history, the timeline, and who is currently handling it. **One Person, one file.** It holds **no commercial claim of any kind.** | "Amit's file" — three years of calls, notes, site visits, and every handler who ever worked it. |
| **Inquiry** | **One commercial interest, in one project, expressed by the customer.** This is the *commercial unit* — the thing that either converts or doesn't. A Person can have several over the years, and several at once. | "Amit, interested in Riverside Phase 2, March 2024." A separate Inquiry from "Amit, interested in Hill View, November 2025." |
| **Attribution claim** | A recorded assertion by somebody — a channel partner, a marketing campaign, an internal rep — that says *"this Inquiry came from me."* **More than one claim can sit on one Inquiry;** when they do, that is a *clash*, and ⟦SOURCE⟧ §11 says **builder-side authorized leadership resolves it.** | "CP A says the March 2024 Riverside inquiry came from them." |
| **Booking** | The sale transaction itself. It has its own life — approvals, payments, amendments, transfers, cancellations. | The signed booking on unit B-1104. |
| **Commission eligibility** | **Two separate things that must BOTH be true**, not one thing: (1) the channel partner holds the *resolved* attribution claim on the Inquiry that converted, **and** (2) the transaction has reached its approved payment milestone. Winning the first without the second means no payment yet. Winning the first when the claimant is an internal employee means no channel-partner payment at all. | CP A is the resolved claimant *and* the customer has paid the milestone that unlocks invoicing. |
| **Manager assignment / redistribution** | A manager handing the work record to a different employee to try again. **A work-management action, and nothing else.** | "This one's gone cold — give it to the new joiner for a fresh calling attempt." |

**Two further terms you will meet below:**

- **Dumped / discharged / closed-with-a-reason.** When a Sales Rep gives up on an Inquiry, they close it
  and record *why*. The Inquiry is then finished, permanently, with that reason preserved. ⟦SETTLED⟧
  **The reason must be recorded and is never silently rewritten** (your own decision, `Q7`).
- **Citation.** The one mechanism this whole decision is about. **A citation is a BRAND-NEW claim,
  created on a LATER Inquiry, naming an earlier channel partner, and giving as its stated reason:
  *"because of that earlier, closed Inquiry."*** The earlier claim itself never moves, never changes and
  never reaches anywhere. **Only a new claim, citing the old one as justification, is even possible.**
  Whether the system may create one is the entire decision in front of you.

---

## 1. Exact architectural findings from AD-01L

> ⟦SETTLED⟧ **This section restates AD-01L's conclusions without re-arguing them. Two of them change
> what your decision even is, so they come first.**

### 1.1 The finding that reshapes the question

AD-01L found that the question as it had been asked for five documents — *"does a channel partner's claim
**reach** a later inquiry?"* — **has no answer, because nothing can reach.** Not because the answer is
"no," but because the verb has no meaning in the system as designed.

> ⟦SETTLED⟧ **The boundary has exactly two halves, and they had been getting confused with each other.**

| Half | What it says, in plain language | Whose decision |
|---|---|---|
| **Closed to claims** *(AD-01L's "B-1")* | **Nothing recorded on a finished Inquiry ever affects any other Inquiry.** Not the claim, not who won it, not the source, not the campaign, not the closing reason. Nothing carries forward, extends, moves or persists. **Ever.** | **NOT YOURS TO SET — this is architecture.** Changing it would mean changing the rule that says history is never edited (`R6`) and the rule that says a claim is never overwritten by a later one. It is not one of the options below. |
| **Open only to citation** *(AD-01L's "B-2")* | **Whether the system may, when a later Inquiry opens, create a brand-new claim on that later Inquiry, naming the earlier channel partner, and stating as its reason a reference to the earlier closed Inquiry.** | ⟦YOUR DECISION⟧ **This is the whole of what remains.** |

**Why this matters to you and is not word-play.** Three things follow, and none of them was visible while
the question was phrased as *"does a claim reach":*

1. **No answer you give can change anything about the earlier Inquiry.** Its closing reason, its claim,
   whoever won it — all untouchable, in every option below. **You cannot get this wrong retroactively.**
2. **Every option below is a statement about what the system may CREATE, never about what it may look
   at.** Saying "no" costs nothing structurally; saying "yes" is a licence to create a new recorded fact.
3. **Saying "no" leaves nothing half-built.** Saying "yes" requires several new mechanisms to exist. Both
   have costs; they are just different kinds of cost, and both are priced in §5–§9.

### 1.2 The other findings AD-01L recorded, in plain language

| AD-01L finding | In plain language | Status |
|---|---|---|
| **The Inquiry has exactly three conditions** | An Inquiry is either **(a) still open**, **(b) finished because it converted into a booking**, or **(c) finished because someone closed it with a recorded reason.** There is no fourth. **Finished exactly once, never re-opened, never re-used.** | ⟦SETTLED⟧ |
| **"Merely an interest" is not an established condition** | There is no distinction anywhere in your requirements between "a real live inquiry" and "just a vague interest." **That distinction may be one you want — but it is a separate business decision, already registered as `AA-2`, and is not part of this one.** | ⟦YOUR DECISION, but NOT this one⟧ |
| **Re-engagement inherits almost nothing** | When a customer comes back and a new Inquiry opens, the new Inquiry inherits **none** of the old one's claim, source, campaign, closing reason or conversion. What it *does* inherit is **relationship continuity** — the history, timeline and context stay connected on the work record. **That is already settled and is not affected by any option below.** | ⟦SETTLED⟧ |
| **Redistribution can never trigger a citation** | A manager reassigning the file to a fresher **cannot create, move, contest or trigger any claim, under any of the options below.** It is a work action. It reaches no commercial gate. | ⟦SETTLED — structural, in every branch⟧ |
| **A duplicate Inquiry is never one of these cases** | If the same interest accidentally gets recorded twice, that is a **data defect**, fixed by correction and merge. **It must never be handled through the mechanism this decision is about** — a merge says "these two records are the same thing"; a citation says "these two are different things, one justifying a claim on the other." The same mechanism must never be asked to say both. | ⟦SETTLED — prohibition⟧ |
| **If a time limit exists, it is measured from the closure date** | If you decide to bound this by elapsed time, the clock runs **from the date the earlier Inquiry was closed** — not from the last phone call, and not from the customer's last activity. **Because a phone call from your own staff must never be able to extend a channel partner's commercial claim, and because the answer has to be determinable the moment the new inquiry arrives.** **No number is proposed; if you want a time limit, the number is yours.** | ⟦SETTLED as to the *base*; the *number* is ⟦YOUR DECISION⟧ |
| **"The old partner automatically wins" is an authorization change, not a commission setting** | ⟦SOURCE⟧ §11 says *"Builder-side authorized leadership resolves attribution."* If you instead set a **rule** that decides who wins automatically, **you are changing that reservation** — which sits in the "must ask before deciding" category alongside your authentication and authorization rules, not in the commercial-parameters category. **AD-01L records that you may reasonably disagree with this reading**; it is flagged so you are not changing an authorization rule while believing you are setting a commission preference. | ⟦OBSERVATION — AD-01L records it as disputable⟧ |
| **A citation's justification must be a fact that cannot later change** | A closed Inquiry with its recorded reason **can never change**, which makes it a stable thing to justify a claim with. An *entitlement* (money already owed or paid) **can** change — it can be clawed back. **This is why this decision is the one branch of the family where the mechanism behaves predictably.** AD-01L is explicit that this **cuts in favour of neither answer**: it says only that *if* you grant citation anywhere, this is the branch where it does not wobble. | ⟦SETTLED⟧ |
| **The "fake/invalid" closure is argued to be incapable of carrying a citation** | If an Inquiry was closed because it was a wrong number, a fake entry or not a real opportunity at all, then the business has formally recorded *"there was no engagement here."* A citation would have to assert, in one breath, both that the earlier engagement is the justification **and** that the business classified it as never having existed. AD-01L argues **the record cannot coherently hold both.** | ⟦OBSERVATION — and **AD-01L explicitly asks you to ratify or reject this in writing rather than by silence.** See §12, Q0-c. |
| **The classification values do not exist yet** | Your closing reasons are approved as a *framework* (validity · responsibility · recoverability) but **no actual list of reasons has been approved**. That list is registered as `N-4`. **Any option below that depends on the closing reason cannot fully run until `N-4` exists.** AD-01L recommends `N-4` be taken **after** this decision, not before, so the reason list is created knowing whether reasons carry money. | ⟦SETTLED as sequencing advice; the values are ⟦YOUR DECISION⟧ |

### 1.3 What AD-01L explicitly did NOT do

> ⟦SETTLED⟧ AD-01L **selected no policy.** It stated the boundary, narrowed three of the four parameters,
> and then said, in its own closing words: **"T-4's commercial half … is the Project Owner's alone."**
> This document continues that posture exactly.

---

## 2. Central business question

### 2.1 In your own words

This is the sequence, as you yourself described it in your consolidated requirements (§7) and as it was
put to the architect:

> **Channel Partner A registers a customer — call him Amit — for one of your projects.**
> **Your team works the inquiry. It goes nowhere. It gets Dumped.**
> **A manager redistributes the file to a fresher for another calling attempt.**
> **The fresher works it.**
> **Later, Amit comes back and a new inquiry is generated.**
> **Amit books.**
>
> ### **Does Channel Partner A get paid on that booking?**

> ⟦SOURCE⟧ Your consolidated requirements §7, verbatim: *"A client was originally handled by Employee A,
> followed up and later dumped. **A manager may redistribute dumped/non-responding leads to a fresher for
> another calling attempt.** If the client later regenerates an inquiry, the same underlying client/lead
> history may remain connected … **exact revival semantics, episode boundaries and the difference between
> 'same Lead re-engagement' versus 'genuinely new commercial opportunity' remain an architecture/product
> decision to be settled explicitly.**"*

### 2.2 The same question, stated precisely enough to build from

> ⟦YOUR DECISION⟧
>
> **When a customer's earlier Inquiry was closed without converting, and later a NEW Inquiry opens for
> the same customer which that channel partner did not produce, and that new Inquiry converts —**
>
> **may the system create a new claim on the new Inquiry, naming the earlier channel partner, and giving
> as its justification a reference to the earlier closed Inquiry?**

**Three words in that sentence are doing work, and each is worth a moment:**

- **"new claim"** — not the old one moving. The old one cannot move. (§1.1)
- **"which that channel partner did not produce"** — if the same partner produces the later Inquiry,
  their claim attaches to it in the ordinary way and **none of this arises.** ⟦SETTLED⟧ That case is
  simple and is not a policy question. (Worked as Scenario 3 in §4.)
- **"converts"** — this only ever becomes about money when there is actually a sale. Until then it is a
  recorded claim and nothing more.

### 2.3 What the documents actually say about this — the honest inventory

> ⟦SOURCE⟧ **This is the complete evidentiary position. It has now been checked independently by four
> separate documents (AD-01C, AD-01J, AD-01K, AD-01L) and re-checked here. It has not changed.**

| Question | What the sources say |
|---|---|
| Does a channel partner's claim last beyond the inquiry it was filed on? | **Nothing. §11, §32, §33, §39, §40 and §41 are all silent.** |
| Is there any dormancy period, cooling-off period or time window anywhere? | **None exists anywhere in any source document.** |
| Is there any support for a claim crossing from one *project* to another? | **None at all.** |
| Is there any support for a claim carrying forward within the *same* project? | **One piece, and it is indirect:** AD-01C recorded that *"the CP will argue their introduction produced the sale. **That dispute is genuine.**"* That is an acknowledgement that the claim is arguable — not a rule that it succeeds. |
| Who resolves it when two parties claim the same customer? | ⟦SOURCE⟧ §11: *"record **each** attribution claim, preserve history … **Builder-side authorized leadership resolves attribution.**"* |
| May the architect fill the silence? | ⟦SOURCE⟧ Your own build-governance rule: *"No schema/code implementation should be inferred from an unresolved product ambiguity,"* and inventing business rules is **"MUST NEVER DO WITHOUT EXPLICIT AUTHORIZATION."* **This document is the asking.** |

> ⟦OBSERVATION — MF-1⟧ **The asymmetry in the table above is recorded because AD-01L recorded it, and it
> is repeated here with AD-01L's own caveat attached: it is NOT a recommendation.** Same-project citation
> has one indirect piece of support; cross-project has none. **An absence of written support is not an
> argument against a policy** — your requirements documents are a record of what has been discussed so
> far, not a complete statement of your commercial intentions. It is recorded only so that you know which
> parts of your answer will be *new information* to the system rather than a confirmation of something
> already written down.

---

## 3. Policy alternatives

> ⟦YOUR DECISION⟧ **Five alternatives are presented. Each is described using exactly the same eight
> headings, in exactly the same order, at roughly the same length — deliberately, so that the format
> itself does not favour any of them. No alternative is selected, recommended, ranked, preferred or
> hinted at, here or anywhere else in this document.**

**One mechanical fact that applies to all five, stated once so it does not have to be repeated:** because
the boundary is closed to claims (§1.1), **every alternative that results in a channel partner being
credited on a later sale must be built the same way** — as a new claim created on the later Inquiry,
citing the earlier one. The alternatives differ entirely in **when the system is permitted to create
one**, not in what it creates. **This does not change the commercial substance of any option; it only
means that the commercial intent and the mechanism are two different conversations.**

---

### Policy A — The claim persists for the customer relationship, indefinitely

**In one sentence.** Once a channel partner introduces a customer, that partner is credited on whatever
that customer later buys, regardless of what happened to the original inquiry.

**How it would be expressed.** Every new Inquiry for that Person automatically receives a claim naming
the original partner, citing the earliest relevant closed Inquiry. No condition is tested.

**What it gives the channel partner.** Maximum certainty and maximum value per introduction. A partner
knows that if they bring you a name, they are credited on that name's eventual purchase whenever it
happens. **This is the strongest possible statement of "we honour introductions."**

**What it gives the builder.** The simplest possible promise to make to the channel network, and the
easiest to explain and to sell. It removes an entire category of argument with partners, because there is
nothing to argue about. It is also the only option in which a partner can never feel that a technicality
took their money away.

**What it costs.** Every later sale to a previously-introduced customer carries a commission liability,
regardless of who actually did the work. Customers who came back on their own, or who were re-activated
by your own staff's effort, still generate a partner payment. Because there is no expiry and no
project limit, the liability accumulates permanently across your whole customer base.

**What must exist before it can run.** A mechanism that creates the new claim automatically; a rule for
what happens when two different partners introduced the same customer at different times; and a decision
on whether a partner whose relationship with you has ended still receives it.

**Where it is ambiguous.**
- **Does it survive the partner relationship ending?** If Partner A is de-empanelled, do they still
  accrue on that customer? The sources do not say.
- **Does it survive a change of project?** A partner registered for one project being credited on a
  different project is not contemplated anywhere in your documents (§2.3). Under A it happens by default.
- **Does it stack?** If two different partners each introduced the customer at different times, both hold
  standing claims on every future purchase, permanently. §11 then requires leadership to resolve the
  contest on each one.
- ⟦OBSERVATION — MF-2⟧ **A's unconditional form and AD-01L's "fake/invalid closure" finding cannot both
  stand.** If an inquiry was closed as a wrong number or a fabricated entry, AD-01L argues the record
  cannot coherently carry a citation to it (§1.2). **So choosing A means either explicitly rejecting that
  finding, or accepting that A carries exactly one exception — in which case A becomes a form of Policy C
  with a very wide condition.** Either is available to you. **Neither is recommended here.** This is
  flagged because it is a fork you would otherwise hit during implementation rather than now.

---

### Policy B — The claim ends when the inquiry is commercially discharged

**In one sentence.** A channel partner is credited on the inquiry they produced. When that inquiry is
closed without a sale, the commercial relationship created by that introduction is finished.

**How it would be expressed.** No claim is ever created on a later Inquiry by reference to an earlier
one. A later Inquiry carries only the claims filed on it directly.

**What it gives the channel partner.** A clear, unambiguous rule with no hidden conditions: work the
inquiry you brought, while it is live. A partner always knows exactly where they stand, and never loses
on a technicality about how a closing reason was worded.

**What it gives the builder.** Completely predictable commission exposure — one inquiry, one possible
liability, closed when the inquiry closes. No accumulating tail. No adjudication workload created by this
mechanism at all. The strongest possible incentive for partners to actively work and convert the
inquiries they bring, rather than to register volume.

**What it costs.** The genuine dispute that AD-01C identified is resolved against the partner by default,
every time — and **the partner will see it happen.** ⟦SOURCE⟧ §39 gives the channel partner a portal view
of *"lead information, attribution information, pipeline status, commission status, eligibility."* A
partner who introduced a customer will watch that customer book and will be told they are not entitled.
**AD-01L is explicit that this dispute is real and that the architecture does not make it go away.** In
the real case from your own §7 — the partner introduced the customer, your team could not close them,
your fresher's call brought them back — B pays the partner nothing.

**What must exist before it can run.** Nothing new. This is the only option that requires no mechanism
that does not already exist.

**Where it is ambiguous.**
- **What is "commercially discharged"?** B needs a bright line. The natural line is "the Inquiry reached
  its terminal closure" — but you may or may not want a partner's introduction to be extinguished by a
  closure the *partner* considers premature, or by one your own rep made carelessly.
- **The pressure moves outside the system.** B does not remove the argument; it relocates it from a
  recorded adjudication into a commercial conversation with your partner network, where it leaves no
  audit trail.
- **The same-partner case must be carved out explicitly.** If Partner A brings the customer back
  themselves, that is an ordinary new claim and B does not block it — but that has to be stated, or B
  reads as "Partner A never gets anything from this customer again."

---

### Policy C — Citation permitted only when a defined continuation condition is met

**In one sentence.** A channel partner's introduction can support a claim on a later inquiry, but only in
the specific circumstances you define in advance.

**How it would be expressed.** When a new Inquiry opens, the system tests a condition you have defined —
typically some combination of *what the earlier inquiry was closed for*, *whether it is the same
project*, and *how long ago* — and creates a citation claim only if the condition is met.

**What it gives the channel partner.** A rule that distinguishes the cases partners themselves regard as
different: an introduction that genuinely developed and then stalled is treated differently from a
contact that was never real. Partners with good-quality introductions benefit; partners submitting
unusable data do not.

**What it gives the builder.** The finest-grained control over commission exposure of any option. You
decide exactly which circumstances carry a liability and which do not, and you can tune it without
changing the architecture. It also matches the way commercial disputes actually arrive — case by case,
with the facts of the closure mattering.

**What it costs.** It requires you to write the condition down precisely enough that a computer can
evaluate it, in advance, for cases you have not met yet. **Every circumstance you did not anticipate
becomes an argument.** It also cannot run at all until your closing-reason list (`N-4`) exists and each
reason has been assigned to the right side of the condition. And it makes a Sales Rep's one-tap closing
reason into a financially consequential act — see §8.

**What must exist before it can run.** The closing-reason list (`N-4`); a decision for each reason about
which side of the line it falls on; a decision on project scope and on whether a time limit applies; the
claim-creation mechanism; and a decision on the authorization posture of the closing-reason tap (`AC-1`).

**Where it is ambiguous.**
- **The condition is only as good as the reason list.** "Not interested" and "not interested right now"
  may be the same tap in the field and opposite sides of the line in the policy.
- **Boundary cases will cluster.** Whatever line you draw, the cases nearest it will be the ones that get
  disputed, and partners will learn where the line is.
- **It is the most complex of the five to explain to a partner network.** "It depends what our rep wrote
  when they closed it" is a hard sentence to say to a commercial counterparty.

---

### Policy D — A fresh claim only where the partner is independently attributable to the later event

**In one sentence.** History alone never creates a claim; but if the partner can be shown to have
actually caused the later inquiry, a claim arises on that basis.

**How it would be expressed.** The system creates no claim by reference to the earlier inquiry at all.
Instead, a claim on the later Inquiry can be established by evidence about **the later event itself** —
that the partner brought the customer back, that the customer named the partner, that the partner's
activity produced the re-engagement.

> ⟦OBSERVATION — MF-3, and it is the single most important thing to understand about Policy D.⟧
> **If "independently attributable" means only "the partner filed the registration," then D is identical
> to B in every scenario in §4, because a partner who files the registration on a later inquiry already
> gets an ordinary claim under every option including B.** ⟦SETTLED⟧ **D is a distinct policy only if you
> define an evidentiary test that is WEAKER than "the partner filed the registration"** — for example,
> the customer naming the partner at the door, the partner's referral being demonstrable without a filed
> registration, or a partner-supplied referral code appearing on a direct enquiry. **Deciding what that
> test is, and who judges it, IS Policy D.** It is not a detail of D; it is its whole content.

**What it gives the channel partner.** Credit is tied to what the partner actually did, at the time it
mattered. A partner who genuinely nurtured a customer back can be paid without having to file paperwork
first; a partner who did nothing but register a name years ago cannot.

**What it gives the builder.** The closest alignment between payment and contribution of any of the five.
Exposure is not open-ended and is not accumulating, because it is bounded by what can actually be
demonstrated about each specific later event.

**What it costs.** It requires an evidentiary standard, a way of capturing that evidence at the moment
the later inquiry arrives, and someone to judge it. **And unlike every other option, its justification is
a fact about the later event — which can be disputed after the fact.** AD-01L's finding that the
justification for a citation should be an unchangeable fact (§1.2) is met automatically by a closed
inquiry, which cannot change; it is not met automatically by a statement about how a customer came back,
which can be contested later. **Whether that matters commercially is yours to weigh.**

**What must exist before it can run.** A defined evidentiary test; a capture point for that evidence at
inquiry origination; a decision on who verifies it; and — because the evidence arrives at the front desk
during busy periods — a decision on how that interacts with ⟦SOURCE⟧ §42's fast-capture requirement.

**Where it is ambiguous.**
- **"The customer said so" is the commonest evidence and the hardest to verify.** It is also the easiest
  for a partner to coach a customer into saying.
- **It can be invoked without the partner's participation** — a customer may name a partner who did
  nothing, or fail to name one who did everything.
- **It interacts with the source field.** If the evidence says the partner produced it, arguably the
  *source* should have been recorded as that partner at capture. ⟦SETTLED⟧ The source is an immutable
  fact fixed at origination and can never be rewritten later — so under D you can end up with an Inquiry
  whose recorded source and whose resolved attribution disagree, permanently. That is legitimate, but it
  must be intended rather than discovered.

---

### Policy E — No standing rule; each case is decided by authorized leadership

**In one sentence.** The system never decides this. When the fact pattern arises, it is surfaced to
builder-side authorized leadership, who decide that specific case on its merits and record the decision.

**Is this actually supported, or invented to make five?** ⟦SOURCE⟧ **It is supported, directly and
literally.** §11 states: *"If multiple sources/CPs claim the same prospective customer: record **each**
attribution claim, preserve history … **Builder-side authorized leadership resolves attribution.**"*
Policy E is that sentence applied without a preceding rule. **AD-01L independently found that the
"leadership decides" mode is the only one that leaves §11's reservation intact** (§1.2). ⟦OBSERVATION —
MF-4⟧ **You may reasonably regard E as a procedure rather than a policy** — as "we haven't decided"
wearing a formal hat. **That judgement is yours and the architect takes no position on it.** It is
presented as a fifth option because it produces genuinely different commercial behaviour from the other
four, and because it is the only one that is written down in your own specification.

**What it gives the channel partner.** A hearing. Every case gets looked at by a human being with
commercial judgement, and a partner with a strong story can make it. No partner loses on a technicality
and no partner wins on one.

**What it gives the builder.** Maximum commercial flexibility, case by case, with no rule to be
exploited and no rule to be renegotiated. It also lets you make different decisions for different
partners, different projects and different market conditions without changing anything in the system.

**What it costs.** Every qualifying case becomes an item of leadership work, and leadership is the
scarcest adjudication resource you have. Two identical cases can resolve differently, which partners
will notice — ⟦SOURCE⟧ §39 shows them the outcome. It provides no predictability to your sales team or
your partner network, and it produces no rule that can be published, audited for consistency, or
enforced by the system.

**What must exist before it can run.** A definition of which fact patterns get surfaced (which is itself
most of Policy C's work); a decision-recording mechanism; a service standard, because ⟦SETTLED⟧ the
decision must be complete **before** the booking reaches its commission milestone or there is nothing
valid to authorize a payment against; and a decision on who exactly holds the authority.

**Where it is ambiguous.**
- **"Leadership decides" needs a trigger.** Something still has to decide which cases to surface.
- **Inconsistency becomes leverage.** A partner who was paid once will cite it the next time.
- **It may quietly become one of the other four.** In practice, leadership will develop a habit, and the
  habit becomes an unwritten policy that nobody approved and nobody can audit.

---

### 3.1 What the five have in common

> ⟦SETTLED⟧ **These hold identically under all five options, and are not affected by your choice:**

| Fact | Holds under A, B, C, D and E |
|---|---|
| The earlier closed Inquiry, its claim, its winner and its recorded reason | **Untouched, permanently.** |
| A valid historical sale stays a valid historical sale | **Always.** A later booking cancellation never rewrites it. |
| Manager redistribution | **Changes nothing commercially, ever.** |
| A duplicate Inquiry | **Never handled through this mechanism.** It is a defect, corrected and merged. |
| Commission eligibility is two tests, not one | **Always.** The resolved claim on the converting Inquiry, **and** the transaction reaching its milestone. |
| An internal employee winning attribution | **Produces no channel-partner payment**, in any option. (§5.3) |
| A recorded claim is never deleted or overwritten | **Always.** Claims are added, never replaced. |
| The customer's history stays connected across inquiries | **Always.** Relationship continuity is already settled and is unaffected. |

---

## 4. Scenario matrix

> ⟦YOUR DECISION — presented, not resolved⟧ **Twelve scenarios. For each: what happens, who originally
> held the claim, what is fixed regardless of your answer, how each of the five options would resolve it,
> and where each option leaves an edge you should be aware of. No scenario is answered. Each shows the
> five options side by side so you can see where they actually differ — and, just as importantly, where
> they do not.**

**How to read the five-option tables.** Three questions are asked of every option:

- **Later claim?** — Can a claim naming the earlier partner exist on the later Inquiry at all?
- **Old inquiry cited?** — Is the earlier closed Inquiry used as the stated justification?
- **Affects payment?** — Does any of this change whether the earlier partner can be paid on the sale?

**One answer that is the same in every scenario, so it is stated once:** ⟦SETTLED⟧ **manager
redistribution changes nothing, in every scenario and under every option.** It creates a work
obligation and never a commercial one. Where a scenario has something *additional* to say about
redistribution, it is noted; otherwise this line is the answer.

---

### Scenario 1 — Partner introduces, inquiry is dumped, customer later comes back directly and books

**What happens.** Partner A registers Amit for Riverside. Your team works it; it stalls; it is closed
with a reason. Eighteen months later Amit walks into the Riverside sales gallery on his own. A new
Inquiry opens with a direct source. He books.

**Original attribution.** Partner A holds the claim on the first Inquiry, permanently.

**Fixed regardless of your answer.** ⟦SETTLED⟧ The first Inquiry stays closed with its reason. The second
Inquiry's source is recorded as direct, permanently, and can never be rewritten to say "Partner A." The
second Inquiry gets its own claim set.

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** — created automatically | **Yes** | Partner A is credited if their claim is resolved in their favour and the booking reaches its milestone |
| **B** | **No** | No | No — the sale is attributed to the direct source |
| **C** | **Only if your condition is met** — here that turns on the closing reason, the project being the same, and any time limit you set | Yes, when the condition is met | Only in the cases your condition admits |
| **D** | **No** — by hypothesis the customer came back on his own; unless your evidentiary test captures something about this walk-in that points to Partner A | No — D never cites the old inquiry | Only if your evidentiary test is met |
| **E** | **Whatever leadership decides** | Available to leadership as evidence | Follows leadership's recorded decision |

**Does a project change matter?** No — same project throughout. (See Scenario 4 for the cross-project form.)

**Edges to be aware of.**
- **Under A:** nothing in this scenario limits the credit — it would apply equally eighteen months or
  eight years later, and to any project.
- **Under B:** Partner A can see the booking in their portal and will ask about it. There is no recorded
  adjudication to point them at.
- **Under C:** everything turns on how the rep worded the closure eighteen months ago, which nobody was
  thinking about commercially at the time.
- **Under D:** a direct walk-in generates almost no evidence about what caused it. D will usually produce
  the same outcome as B here — but for a different reason, which matters if the walk-in *does* say
  "Partner A told me to come."
- **Under E:** this is the case leadership will be asked to decide most often, so the volume question in
  §7 bites hardest here.

---

### Scenario 2 — The §7 case: dumped, redistributed to a fresher, the fresher's call brings the customer back, and he books

**What happens.** Exactly your own narrative. Partner A registers Amit. Employee A works it. It is dumped.
A manager redistributes the file to a fresher for another calling attempt. The fresher calls. Amit says
he is interested again. A new Inquiry opens. He books.

**Original attribution.** Partner A holds the claim on the first Inquiry, permanently.

**Fixed regardless of your answer.** ⟦SETTLED⟧ Four things, and they are worth reading carefully because
this is the scenario where intuition most often goes wrong:

1. **The redistribution created no inquiry, no claim and no commercial fact.** It recorded one thing: a
   manager's decision to put someone back on the phone.
2. **The redistribution did not un-dump the first Inquiry.** That Inquiry stays closed with its reason.
3. **The customer saying "I'm interested again" is a separate event from the manager's redistribution.**
   ⟦SETTLED⟧ These two must never be merged, in the data or in reporting — otherwise a management
   re-attempt gets counted as customer demand.
4. **The fresher working the file does not give the fresher, or the builder, a claim by virtue of the
   work.** ⟦SETTLED⟧ Working a lead is not claiming it. Custody and attribution are different things.

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** | **Yes** | Partner A is credited, subject to resolution and milestone |
| **B** | **No** | No | No |
| **C** | **Only if your condition is met** | Yes, when met | Only in the admitted cases |
| **D** | **No** — the later event was caused by your own outbound call, not by the partner | No | No, unless your evidentiary test somehow reaches this |
| **E** | **Whatever leadership decides** | Available as evidence | Follows the decision |

> ⟦OBSERVATION — MF-5, and this is the fact most likely to change how the scenario feels.⟧ **In this
> scenario, the party on the other side of the argument from Partner A is YOU, not another partner.** The
> later inquiry was produced by your own staff's outbound effort. ⟦SETTLED⟧ **And an internal claimant
> winning attribution produces no channel-partner commission at all** — §32 describes a channel-partner
> workflow, and nothing anywhere contemplates an internal payout of the same kind. **So under B and D,
> "Partner A does not get paid" does not mean "somebody else gets paid instead." It means no
> channel-partner commission is paid on that booking.** Under A, C and E, the money is paid to Partner A.
> **This is stated so you can see what the choice actually moves. It argues for neither outcome.**

**Does a project change matter?** Only if the fresher's call re-engaged the customer on a different
project — in which case Scenario 4 applies as well.

**Edges to be aware of.**
- **Under all options:** what source should the new Inquiry carry, when the customer re-engaged during a
  call your own team made? The sources do not say. ⟦YOUR DECISION, but NOT this one⟧ — this is adjacent
  to open items `V-4` and `W-1` and is **not resolved here.** It matters because the recorded source is
  what your marketing reports will count.
- **Under A and C:** the fresher is now doing work whose commercial benefit may accrue to a partner. §8
  looks at what that does to sales incentives.
- **Under B and D:** your own staff's successful re-activation effort produces no partner payment, which
  is the outcome you may want — and is also the outcome that will generate the partner conversation.
- **Under E:** this is exactly the fact pattern where leadership will most often be asked to weigh "the
  partner introduced him" against "our fresher actually brought him back."

---

### Scenario 3 — Dumped, and the SAME partner produces the later inquiry

**What happens.** Partner A registers Amit. It is dumped. Nine months later Partner A registers Amit
again, for the same project. He books.

**Original attribution.** Partner A holds the claim on the first Inquiry.

> ⟦SETTLED⟧ **This is not one of the hard cases and never was. Partner A filed a registration on the later
> Inquiry; their claim attaches to it as an ordinary new claim — in exactly the same way it attached to
> the first one. Nothing needs to reach anywhere, and nothing needs to be cited.**

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** — but Partner A already had one by filing | Not needed | Partner A is credited, as the ordinary claimant |
| **B** | **Yes** — the ordinary filed claim. **B does not block this** | No | Partner A is credited |
| **C** | **Yes** — the ordinary filed claim | Not needed | Partner A is credited |
| **D** | **Yes** — the ordinary filed claim | No | Partner A is credited |
| **E** | **Yes** — the ordinary filed claim; nothing to adjudicate unless another party also claims | No | Partner A is credited |

**Does a project change matter?** No. If Partner A registers the customer for a different project, that
is still an ordinary new claim on the new project's Inquiry.

**Edges to be aware of.**
- **Under A and C:** the system might create a citation claim *in addition* to the filed one, giving
  Partner A two claims on one Inquiry. Harmless in outcome but confusing in the record. **Any rule you
  adopt should say explicitly that no citation is created where the partner has filed.**
- **Under B:** this case must be stated explicitly when B is communicated, or partners will read B as
  "once it's dumped, that customer is off-limits to me forever," which is not what B says.
- **Under all options:** if Partner A files *and* Partner B files on the same later Inquiry, that is an
  ordinary clash and §11 sends it to leadership — which has nothing to do with this decision.

---

### Scenario 4 — Partner introduces on Project A; the customer later inquires about Project B and books there

**What happens.** Partner A registers Amit for Riverside. It is dumped. A year later Amit inquires about
Hill View — a different project of yours — and books there.

**Original attribution.** Partner A holds the claim on the Riverside Inquiry.

**Fixed regardless of your answer.** ⟦SETTLED⟧ The Hill View interest is a separate Inquiry with its own
project, its own source and its own claim set. The Riverside claim carries the Riverside project and can
never be made to carry Hill View.

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes, across projects** — A does not distinguish projects | Yes | Partner A is credited on the Hill View booking |
| **B** | **No** | No | No |
| **C** | **Only if your condition includes cross-project reach** — this is a separate switch from the closing-reason condition | Yes, when admitted | Only in the admitted cases |
| **D** | **Only if the partner is independently attributable to the Hill View inquiry** | No | Only then |
| **E** | **Whatever leadership decides** | Available as evidence | Follows the decision |

**Does a project change matter?** **This is the scenario where it is the whole question.** ⟦SETTLED⟧
Same-project and cross-project are a **separate switch** from the closing-reason question — you can say
yes to one and no to the other.

**Edges to be aware of.**
- ⟦OBSERVATION — MF-1 applies here⟧ Cross-project reach has **no support anywhere in your documents**;
  same-project has one indirect piece. **Recorded as information, not as an argument.**
- **Under A and C-with-cross-project:** ⟦YOUR DECISION — new, minted as `AC-3` in §12⟧ **may a claim name
  a partner who is not empanelled for that project at all?** §32 and §41 describe an approved partner
  relationship; nothing says what happens when the relationship does not extend to the project in
  question. This is a real gap.
- **Under A and C:** different projects may carry different commercial terms. That is the future
  commission model's problem, not this decision's — but it means "Partner A is credited" does not
  translate into a determinate amount until that model exists.
- **Under B and D:** a partner who introduced you to a genuinely valuable customer gets nothing when that
  customer buys elsewhere in your portfolio, which is the strongest version of B's and D's cost.

---

### Scenario 5 — Dumped as "Not Interested," customer later returns to the same project

**What happens.** Partner A registers Amit for Riverside. Amit engages, visits, and then says he is not
interested. The Inquiry is closed on that basis. Later, Amit returns to Riverside and books.

**Original attribution.** Partner A holds the claim on the first Inquiry.

**Fixed regardless of your answer.** ⟦SETTLED⟧ The recorded reason is preserved and never silently
rewritten.

> ⟦SETTLED, and it constrains what you can decide today⟧ **"Not Interested" is an illustrative example
> from your consolidated §15, not an approved value.** Your reason *framework* is approved — validity,
> responsibility, recoverability — but **the actual list of reasons is open (`N-4`) and no value has been
> approved.** So this scenario is genuinely a "real engagement that failed," which is the category where
> Policy C's positive side lives; **but C cannot be fully specified until `N-4` exists.**

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** | Yes | Partner A is credited |
| **B** | **No** | No | No |
| **C** | **This is the case C exists to catch** — if your condition admits "a real engagement that failed on the customer's side," yes; otherwise no | Yes, when admitted | Only in the admitted cases |
| **D** | **No, from history alone** | No | Only on independent evidence about the return |
| **E** | **Whatever leadership decides**; this is the fact pattern with the strongest partner story | Available as evidence | Follows the decision |

**Does a project change matter?** Not here — same project. It would if the return were to a different
project (Scenario 4).

**Edges to be aware of.**
- **Under C:** *"not interested"* and *"not interested right now"* are commercially opposite and are the
  same tap on a phone in a car park. This is where §8's incentive discussion becomes concrete.
- **Under C and E:** this is the case where the difference between "closed because the customer said no"
  and "closed because we gave up" starts to matter financially — and the responsibility dimension of your
  reason framework is available as an input to your condition, **if you want it to be. AD-01L records
  that as an available input and not as a recommendation.**
- **Under A:** a customer who explicitly said no to the partner's pitch, and later came back for entirely
  different reasons, still generates a partner payment.
- **Under B and D:** a partner who did real work — site visit, negotiation, a genuine engagement — gets
  nothing because the customer's "no" at the time closed the inquiry.

---

### Scenario 6 — Dumped as invalid or fake, and a genuine direct inquiry follows

**What happens.** Partner A submits Amit's details. The number is wrong, or the entry turns out to be
fabricated. The Inquiry is closed as an invalid, non-opportunity entry. Later the real Amit finds you
himself and books.

**Original attribution.** Partner A filed a claim on the first Inquiry. **That claim remains recorded
permanently — it is never deleted.**

**Fixed regardless of your answer.** ⟦SETTLED⟧ The closure stands, with its classification.

> ⟦OBSERVATION — carried from AD-01L, and AD-01L asks you to ratify or reject it explicitly⟧ **AD-01L
> argues that a citation to this closure is not something you can choose, because it cannot be coherently
> recorded.** The citation would have to say, in one appended fact, *"my justification is that earlier
> engagement"* while the business has formally recorded *"there was no engagement."* **The reason this
> matters to you is that it is the primary defence against a partner submitting large volumes of
> unverified names and treating each one as a lottery ticket on a future sale** (see §10). **AD-01L is
> explicit that you should ratify or reject this in writing rather than by silence.**

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **This is A's fork** — either A is not truly unconditional and carries this one exception, or you reject the finding above. **Both are open to you.** (MF-2) | Contested — see above | Depends on which fork you take |
| **B** | **No** | No | No |
| **C** | **No** — an invalid closure is the clearest case on the excluded side of any condition | No | No |
| **D** | **No from history**; and there is no evidence about the later direct inquiry pointing to the partner | No | No |
| **E** | Leadership could decide to pay — but the record could not carry it as an attribution claim. **See `AC-2` below** | Not coherently | Would need a route outside attribution |

**Does a project change matter?** No — the invalid classification is about the earlier entry, not the
project.

**Edges to be aware of.**
- ⟦YOUR DECISION — new, minted as `AC-2` in §12⟧ **Is there any route by which you can decide to pay a
  partner WITHOUT recording an attribution claim?** This scenario, and Scenario 2 under B, both produce
  cases where you might commercially want to pay something while the attribution record cannot or does
  not support a claim. ⟦SOURCE⟧ §22 already separates commission from other financial concepts, and §32
  describes only the commission workflow. **Nothing in the sources says whether a goodwill payment
  outside attribution exists in BMexa at all. Not answered here.**
- **Under every option:** who classifies a closure as invalid, and on what evidence, becomes a
  financially consequential act. This is the existing open item `AC-1` and is **carried forward, not
  resolved.**

---

### Scenario 7 — The first inquiry is STILL OPEN, and the customer inquires about another project

**What happens.** Partner A registers Amit for Riverside. It is live and being worked. While it is still
live, Amit inquires about Hill View. He books Hill View.

**Original attribution.** Partner A holds the claim on the live Riverside Inquiry.

> ⟦SETTLED⟧ **None of the five options is engaged by this scenario.** Nothing has closed, so there is no
> closed inquiry to cite. This is simply two interests running at the same time — which your
> architecture already permits — and the Hill View Inquiry takes its own claim set at origination. **If
> Partner A produced the Hill View interest, their claim attaches ordinarily. If they did not, it does
> not.**

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **See the ambiguity below** — it depends on which reading of A you mean | Not applicable — nothing is closed | Depends on the reading |
| **B** | Only the ordinary claims filed on the Hill View Inquiry | Not applicable | Only for whoever produced Hill View |
| **C** | Not engaged — C tests a closure, and there is none | Not applicable | Not engaged |
| **D** | Only on independent evidence about the Hill View event | Not applicable | Only then |
| **E** | Not engaged, unless you define the trigger to include live inquiries | Not applicable | Not engaged |

> ⟦OBSERVATION — MF-6⟧ **Policy A has two readings and this scenario separates them.** Read narrowly, A
> says *"a claim survives the closure of the inquiry it was filed on."* Read broadly, A says *"the partner
> holds the customer relationship, full stop."* **The broad reading covers this scenario; the narrow one
> does not.** ⟦SETTLED⟧ Mechanically, both would have to be built the same way — as a claim created on
> the new Inquiry — because a claim on one live Inquiry cannot reach another live Inquiry either. **If
> you choose A, you need to say which reading you mean. The architect takes no position on which.**

**Does a project change matter?** It is the whole of the scenario — but as a *concurrency* question, not
a reach question. ⟦YOUR DECISION, but NOT this one⟧ How many inquiries a customer may have running at
once, and how that is managed, is open item `Y-1` and is **not resolved here.**

**Edges to be aware of.**
- **Under all options:** a partner with a live inquiry will feel they hold the customer, and will be
  surprised that a second project's inquiry is commercially independent. That is a communication issue,
  not an architectural one — but it is the same conversation as Scenario 4.
- **This scenario is included precisely to show that "the inquiry is still open" is a completely
  different situation from "the inquiry was closed," and that only the second one is in front of you.**

---

### Scenario 8 — Redistribution, then a conversion with NO new customer inquiry

**What happens.** Partner A registers Amit. It is dumped. A manager redistributes the file. And then —
as posed — a booking appears, with no new customer inquiry having been recorded.

> ⟦SETTLED⟧ **This scenario is included to make a structural fact visible, and the fact is this: as
> posed, it cannot happen. It resolves into two other situations, and neither of them is a policy
> question. Your answer to §2.2 changes nothing about it.**

**The two situations it actually is:**

| If… | Then… | Is it a policy question? |
|---|---|---|
| **The earlier Inquiry was closed, and the customer did express interest before booking** | That expression **is** a customer-generated commercial event, and it **opens a new Inquiry**. The scenario is therefore Scenario 1 or Scenario 2, depending on what prompted it. **There is no such thing as a booking with no inquiry behind it — the act of deciding to buy is itself the expression.** | **No.** It is Scenario 1 or 2. |
| **The earlier Inquiry was closed, and genuinely no customer expression exists** | Then there is no open Inquiry for a conversion to be recorded against. ⟦SETTLED⟧ A conversion is recorded **on an Inquiry**, and a closed Inquiry can never be re-opened. **The system cannot record this booking at all until an inquiry exists.** That is a data-integrity condition, not a commercial policy. | **No.** It is a data problem. |
| **The earlier Inquiry was NEVER closed — it was still open when the redistribution happened** | Then the booking converts **that same Inquiry**, and that Inquiry's existing claim set — **which includes Partner A's claim** — is what gets resolved. ⟦SETTLED⟧ **The fresher doing the work does not acquire the claim, and the redistribution does not move it.** | **No.** Partner A's ordinary claim on the converting Inquiry stands, subject to §11 resolution as always. |

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A, B, C, D and E — identically** | **Nothing changes.** The scenario is not engaged by any of them. | No | Determined entirely by which of the three situations above it actually is |

> ⟦OBSERVATION — MF-7, and it is the most practically useful line in this whole matrix.⟧ **The third
> situation is the one your business will find hardest to accept, and it is the one where the
> architecture is most firmly settled.** When a fresher grinds out a conversion on a still-open partner-introduced
> inquiry, **the partner keeps the claim.** ⟦SETTLED⟧ Working a lead is not claiming it; custody and
> attribution are separate; a management reassignment cannot manufacture a commercial fact. **Two
> independent confirmations in your own documents:** §39 requires the partner to keep seeing that
> inquiry's pipeline status — so their view could not go dark when your staff took it over; and §11
> reserves attribution resolution to leadership, so a rep acquiring a claim by doing their job would be
> a rep resolving attribution in their own favour. **If you want a different commercial outcome here,
> that is a genuinely separate decision from the one in §2.2, and it would need to be asked
> separately.**

---

### Scenario 9 — A DIFFERENT partner claims the later inquiry

**What happens.** Partner A registers Amit. It is dumped. Later, Partner B registers Amit for the same
project. He books.

**Original attribution.** Partner A holds the claim on the first Inquiry; Partner B files a claim on the
second.

**Fixed regardless of your answer.** ⟦SETTLED⟧ Partner B's claim on the later Inquiry attaches
ordinarily and is never in doubt. Partner A's claim on the earlier Inquiry is preserved permanently.
**The only question is whether a Partner A claim ALSO lands on the later Inquiry.**

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** — so two claims sit on one Inquiry, and that is a clash | Yes | Depends on how the clash resolves |
| **B** | **No** — Partner B alone | No | Partner B is credited |
| **C** | **Only if your condition is met** — and where it is, a clash results | Yes, when met | Depends on how the clash resolves |
| **D** | **Only on independent evidence** — and if BOTH partners are independently attributable, that is a genuine two-partner dispute about the later event | No | Depends on the evidence and the resolution |
| **E** | **Whatever leadership decides**, which is the §11 mechanism operating directly | Available as evidence | Follows the decision |

> ⟦YOUR DECISION⟧ **This is the scenario where the "mode" question bites hardest.** If Partner A's claim
> and Partner B's claim both exist, what happens?
>
> | Mode | What it means | Which kind of decision it is |
> |---|---|---|
> | **Contest** | Both claims are recorded; neither wins by rule; **leadership decides.** | ⟦SETTLED⟧ **This is what §11 already says.** Choosing it changes nothing about your authorization rules. |
> | **The earlier partner supersedes** | The system decides Partner A wins, automatically. | ⟦OBSERVATION⟧ AD-01L argues **this is a change to §11's reservation of resolution to leadership** — i.e. an authorization decision, not a commercial parameter. **AD-01L records that you may reasonably disagree with that characterisation.** |
| **The earlier partner ranks below** | The system decides Partner B wins, automatically. | ⟦OBSERVATION⟧ **Same characterisation as above, in the opposite direction.** |

**Does a project change matter?** If Partner B's inquiry is for a different project, Scenario 4's
cross-project switch applies on top of this one.

**Edges to be aware of.**
- **Under A and C:** ⟦SETTLED⟧ **every case like this becomes an item of leadership work**, because
  "contest" is the only mode that leaves §11 alone. §7 quantifies what that means.
- **Under all options:** ⟦SOURCE⟧ §39 means **the losing partner sees the outcome.** Whatever you decide
  has to be defensible to a commercial counterparty, not merely internally consistent.
- **Under all options:** ⟦SOURCE⟧ §11 also says Sales Reps *"should not automatically see sensitive clash
  information that could influence or manipulate attribution."* That constraint holds in every option and
  is not affected by your choice.
- **Unlike Scenario 2, here the loser is a commercial counterparty, not you.** That makes this the
  reputationally sharpest scenario in the matrix even though the amounts may be smaller.

---

### Scenario 10 — A direct or organic source becomes the converting source

**What happens.** Partner A registers Amit. It is dumped. Later Amit responds to a digital campaign, or
walks in, or calls the hotline. The new Inquiry's source is recorded as that direct or organic channel.
He books.

**Original attribution.** Partner A on the earlier Inquiry; the direct/organic channel on the later one.

**Fixed regardless of your answer.** ⟦SETTLED⟧ **The later Inquiry's recorded source is fixed at
origination and is never rewritten.** Not by a later claim, not by a resolution, not by anything.

| Option | Later claim? | Old inquiry cited? | Affects payment? |
|---|---|---|---|
| **A** | **Yes** — producing an inquiry whose source says "Direct" and whose attribution says "Partner A" | Yes | Partner A is credited on a direct-sourced booking |
| **B** | **No** — source and attribution agree | No | No |
| **C** | **Only in admitted cases** — where admitted, source and attribution diverge | Yes, when admitted | Only then |
| **D** | **Only on independent evidence** — where present, source and attribution diverge | No | Only then |
| **E** | **Whatever leadership decides** — where they decide for the partner, source and attribution diverge | Available as evidence | Follows the decision |

> ⟦SETTLED — a reporting consequence you should see before deciding, not after⟧ **Under A, C, D and E,
> your "source conversion" numbers and your "channel partner conversion" numbers will disagree, and that
> disagreement is CORRECT and must never be "fixed."** An inquiry that genuinely arrived through a
> digital campaign may genuinely be credited to a partner. **Rewriting the source to make the two
> numbers match would destroy the record of where your marketing spend actually produced results.** §9
> develops this.

**Does a project change matter?** Only via Scenario 4's switch.

**Edges to be aware of.**
- **Under A, C, D and E:** your marketing team's "direct conversion" figure stops meaning "conversions we
  did not pay commission on." Somebody has to know that, or budget decisions will be made on a number
  that has quietly changed meaning.
- **Under D specifically:** if the evidence says the partner produced it, there is a natural temptation to
  record the source as the partner at capture. That is a **capture-quality** question — get the source
  right at the door — and is different from the attribution question. The two should not be conflated.
- **Under B:** the numbers stay simple, and the partner watching their portal sees a customer they
  introduced convert through a channel they were not credited for.

---

### Scenario 11 — Timing: the booking and the other inquiry appear close together

**What happens.** Three distinct timing shapes, which look alike and are not.

**(a) Two inquiries are live, and one converts.** ⟦SETTLED⟧ **Not a policy question.** A booking converts
one determinate Inquiry — the one it is recorded against. The existence or timing of another Inquiry
changes nothing. Which Inquiry a booking belongs to is a booking-workflow fact.

**(b) A claim is asserted AFTER the booking.** Partner A says nothing until after the sale closes, then
asserts their introduction produced it.

| Option | Can it be accommodated? |
|---|---|
| **A, C and D** | ⟦SETTLED⟧ **No, not through this mechanism.** The determination is made when the later inquiry arrives and is checked — **never at conversion and never at invoicing.** A claim computed at payment time is not a claim; it is a surprise. And ⟦SETTLED⟧ resolution must be complete **before** the transaction reaches its commission milestone, or there is nothing valid to authorize a payment against. |
| **B** | No, by definition. |
| **E** | Only if your service standard places leadership's decision before the milestone. **Otherwise E has the same problem, and it is the option where it is easiest to overlook.** |
| **All five** | ⟦YOUR DECISION, but NOT this one⟧ A partner filing a **late claim on the SAME inquiry** is a genuinely different question — registered as `Q11` — and is **not resolved here.** The two look identical from the partner's side and are architecturally unrelated. |

**(c) The later inquiry was captured offline.** ⟦SOURCE⟧ §12: a device *"cannot perform a reliable
server-wide duplicate/clash check while disconnected,"* so an offline-captured inquiry is **pending
synchronization** until connectivity returns — and *"never pretend an offline lead has passed the
server-side clash gate."*

| Option | Consequence |
|---|---|
| **A, C and D** | Origination and the moment the determination runs are **different moments**, and nothing bounds the gap. The inquiry may be worked before anyone knows whether a partner claim attaches to it. ⟦SETTLED⟧ AD-01L named this and left it for you (`A-11`, `T-9`); it is **not resolved here.** |
| **B** | No determination is made, so no gap exists — and correspondingly, **a late partner assertion has no route inside the system at all** and lands entirely on your commercial dispute handling. |
| **E** | The determination is a human act with no defined moment. **You would need to bound it.** |

**Original attribution / redistribution / project change.** As in the underlying scenario; timing does
not alter any of them.

**Edges to be aware of.**
- **Launch day is the hard case.** Fast capture (§42), offline devices (§46–§48), and a customer who wants
  to book immediately. Under A, C and D, something has to give.
- **Under every option:** the partner-facing portal shows eligibility status. A pending determination is
  visible to the partner as ambiguity, which is itself a dispute surface.

---

### Scenario 12 — Unit transfer changes the converting context

**What happens.** The later Inquiry converts. A booking is recorded. Later the customer transfers to a
different unit, and the original booking record is technically closed.

> ⟦SETTLED⟧ **The attribution is undisturbed, in every option.** A transfer does not move, change or
> cancel any claim. The Inquiry that converted stays converted; its resolved attribution — filed or
> cited — stays exactly as it was. **Your answer to §2.2 has no effect on this scenario at all.**

| Option | Effect of a unit transfer |
|---|---|
| **A, B, C, D and E — identically** | **None on attribution.** Whatever claim exists on the converting Inquiry stays. |

**What a transfer DOES affect.** ⟦SOURCE⟧ §26: *"UNIT TRANSFER MUST NOT AUTOMATICALLY BE TREATED AS A
NORMAL CANCELLATION FOR CP CLAWBACK … Do not create an automatic CP clawback merely because an old unit
record is technically closed. **This is a CFO validation requirement before production financial logic is
finalized.**"* ⟦YOUR DECISION, but NOT this one⟧ **Whether the transferred transaction is the same
entitlement or a new one is open item `AB-2` and is carried forward unchanged.**

**And a true cancellation?** ⟦SETTLED⟧ **A valid historical sale stays a valid historical sale.** A later
cancellation never rewrites it. A clawback, where legitimate, acts on the partner's ledger and the
transaction — **never on the claim.**

**Edges to be aware of.**
- ⟦YOUR DECISION⟧ **Can a transfer cross projects?** The sources describe unit changes and do not say
  whether a transfer can move a customer from one project to another. If it can, the converting Inquiry's
  project and the final transaction's project could differ — which interacts with Scenario 4's switch.
  **Not asserted, not resolved; flagged so it is not discovered later.**
- **Under every option:** the fact that attribution is immune to transfers is a stability property worth
  knowing. It is also the reason the money question and the attribution question have to be kept apart —
  see §15.

---

### 4.13 The matrix at a glance

> ⟦OBSERVATION⟧ **The whole twelve-scenario matrix compressed. Read this AFTER the scenarios, not
> instead of them — it loses every distinction that makes the scenarios worth reading.**

| # | Scenario | A | B | C | D | E | Is it actually a policy question? |
|---|---|---|---|---|---|---|---|
| **1** | Dumped → direct return → books | Credit | No credit | Conditional | No credit* | Case-by-case | **Yes** |
| **2** | Dumped → redistributed → fresher revives → books | Credit | No credit | Conditional | No credit | Case-by-case | **Yes — and the other side is you, not another partner** |
| **3** | Dumped → same partner brings them back | Credit | **Credit** | Credit | Credit | Credit | **No — ordinary new claim** |
| **4** | Project A → Project B | Credit | No credit | **Separate switch** | Conditional* | Case-by-case | **Yes — a distinct switch** |
| **5** | "Not interested" → same-project return | Credit | No credit | **C's core case** | No credit* | Case-by-case | **Yes — but needs `N-4` first** |
| **6** | Invalid/fake → genuine direct inquiry | **A's fork (MF-2)** | No credit | No credit | No credit | Not recordable as a claim | **Contested — ratify or reject explicitly** |
| **7** | Still open → other project | Depends on reading (MF-6) | Ordinary only | Not engaged | Conditional* | Not engaged | **No — nothing has closed** |
| **8** | Redistribution → conversion, no new inquiry | **Identical under all five** | | | | | **No — it is one of three other situations (MF-7)** |
| **9** | Different partner claims the later inquiry | Clash | Partner B | Conditional clash | Evidence-based | Case-by-case | **Yes — and the "mode" question is here** |
| **10** | Direct source becomes the converting source | Credit + divergence | No credit | Conditional | Conditional* | Case-by-case | **Yes — plus a reporting consequence** |
| **11** | Timing, late assertion, offline capture | Gap exists | No gap | Gap exists | Gap exists | Unbounded | **Partly — and partly `Q11`/`T-9`, not this** |
| **12** | Unit transfer changes the context | **Identical under all five** | | | | | **No — attribution is immune** |

**\*** Under Policy D, "no credit" means *no credit from history alone.* **D's actual reach depends
entirely on the evidentiary test you define (MF-3), and without that test D behaves identically to B in
every row above.**

---

## 5. Commercial consequences

> ⟦OBSERVATION⟧ **What each option does to the money, stated for the business rather than for the system.
> No formula, rate, amount or calculation appears here or anywhere in this document.**

### 5.1 The shape of the liability

| Option | What creates a payment obligation | How predictable is the exposure | How long does it last |
|---|---|---|---|
| **A** | Any later purchase by any previously-introduced customer | **Least predictable** — it accumulates across the whole customer base over time | **Indefinite** |
| **B** | Only a sale on the inquiry the partner produced | **Most predictable** — one inquiry, one possible obligation | **Ends when the inquiry closes** |
| **C** | A later purchase in the circumstances you define | **As predictable as your condition is precise** | **As long as your condition allows** |
| **D** | A later purchase the partner can be shown to have caused | **Depends on how demanding your evidentiary test is** | **Unbounded in time, bounded by evidence** |
| **E** | A later purchase where leadership decides to credit it | **Unpredictable by design; controllable case by case** | **Indefinite unless leadership develops a bound** |

### 5.2 What each option promises the channel network

This is the sentence you would have to be able to say to a partner, and mean:

- **A:** *"Introduce a customer to us and you are credited on what they buy from us, whenever they buy it."*
- **B:** *"You are credited on the inquiry you bring us. Work it, and convert it. When it closes, it is closed."*
- **C:** *"You are credited on the inquiry you bring us, and in these specific circumstances your introduction still counts later."*
- **D:** *"You are credited where you can show you brought the business — at the time, or later."*
- **E:** *"You are credited on the inquiry you bring us, and where you believe a later sale was yours, we will look at it."*

> ⟦OBSERVATION — MF-8⟧ **These five sentences are the decision.** The rest of this document is about what
> each one costs and what it requires. **If one of them is what you already tell your partners today,
> that is the single most useful piece of information you have, and it is information the architect does
> not have.**

### 5.3 The fact that is easiest to get wrong

> ⟦SETTLED⟧ **When a channel partner does not get credit, that money is usually not paid to anyone else.**
>
> Attribution and payment are not the same outcome. An internal employee, a campaign, or a direct channel
> can hold and win an attribution claim — **and winning it produces no channel-partner commission at
> all**, because the channel-partner commission workflow describes a partner relationship and nothing
> anywhere contemplates an internal payout of the same kind.
>
> **So in Scenario 2 — your own §7 case — the choice between the options is a choice between *paying
> Partner A* and *paying no channel commission on that booking.* It is not a choice between two
> recipients.** This is stated so that the commercial trade is visible. **It argues for neither outcome:
> the case for paying Partner A does not depend on someone else being paid, and the case for not paying
> them does not depend on the money going elsewhere.**

---

## 6. CP consequences

> ⟦OBSERVATION⟧ **The same decision from the channel partner's side of the table. This matters more than
> it might appear, because ⟦SOURCE⟧ §39 gives the partner a portal showing *"lead information,
> attribution information, pipeline status, commission status, eligibility, invoice status"* — the
> partner can see the pipeline they produced, and can see it convert.**

| Question, from the partner's side | A | B | C | D | E |
|---|---|---|---|---|---|
| **What is a registration worth?** | An introduction plus a standing option on that customer's future purchases | An introduction into one specific inquiry | An introduction, plus a conditional option | An introduction; later credit must be earned again | An introduction, plus a right to be heard |
| **Can the partner predict the outcome before it happens?** | **Yes, completely** | **Yes, completely** | Yes, if the condition is published and they understand it | Partly — depends on evidence they may not control | **No** |
| **Can the partner lose on something they did not control?** | No | Yes — when the customer returns on their own | **Yes — the wording of your rep's closing reason** | Yes — the evidence trail | Yes — a judgement call |
| **What does the partner do with a stalling inquiry?** | Little incentive to intervene; the option persists | **Strong incentive to work it and convert it now** | Incentive to influence how it is closed | Incentive to stay involved so the later event is attributable | Incentive to build a documented story |
| **What behaviour does it reward?** | Volume of introductions | **Conversion of introductions** | Quality of engagement before closure, as your condition defines quality | Continued involvement | Relationship with the builder |
| **What will the partner argue when they lose?** | Rarely arises | *"We brought you this customer"* | *"Your rep closed it wrong"* | *"We did bring them back, we just did not file"* | *"You paid on a case like this last quarter"* |

> ⟦OBSERVATION — MF-9⟧ **Two costs, one on each side, stated with equal weight because they are the two
> real costs.**
>
> - **Options that grant citation (A, C, and E where leadership says yes) convert a registration into a
>   forward option on a future sale.** Registration is the cheapest act in the partner workflow —
>   ⟦SOURCE⟧ §42 describes *"name, limited phone identifier where appropriate, CP/source, quick
>   registration"* — and §44 permits capturing an **unverified** sub-agent's registration. **A rule that
>   converts registration volume into forward options rewards volume over engagement.** ⟦SOURCE⟧ §11 is
>   the one place in your documents that names this hazard in its own words: *"Sales Reps should not
>   automatically see sensitive clash information **that could influence or manipulate attribution.**"*
> - **Options that refuse citation (B, D on history, and E where leadership says no) mean a partner who
>   genuinely produced a customer relationship watches that customer buy and is told the introduction
>   expired.** ⟦SOURCE⟧ AD-01C recorded that dispute as **genuine**, and this document does not soften it.
>   §39 guarantees the partner will see enough to raise it.
>
> **Both of these are real. Neither is an argument for a policy.**

---

## 7. Builder consequences

> ⟦OBSERVATION⟧ **What each option costs you to operate — not to build, but to run, every week, forever.**

### 7.1 Adjudication workload

⟦SOURCE⟧ §11 reserves attribution resolution to *"builder-side authorized leadership."* ⟦SETTLED⟧ Where
two claims sit on one inquiry, a human with authority has to resolve it.

| Option | How many cases reach leadership | Why |
|---|---|---|
| **A** | **One for every later inquiry by every previously-introduced customer**, forever | Every citation creates a second claim alongside whoever produced the later inquiry |
| **B** | **None created by this mechanism** | No second claim is ever created |
| **C** | **One for every case your condition admits** | You control the volume directly by how you set the condition |
| **D** | **One for every case where evidence is asserted** | Volume is driven by partners' behaviour, not by your rule |
| **E** | **One for every case you decide to surface** | Volume is whatever your trigger produces, and the trigger is not yet defined |

> ⟦OBSERVATION⟧ **This is a management-capacity consequence, not only a financial one. You are not
> choosing between five commission policies of equal operating cost — you are choosing, among other
> things, how much work you create for the few people authorized to do it.** AD-01L put it plainly: if
> "contest" is the only mode that leaves §11 alone, then the choice includes **"create nothing"** versus
> **"create items of leadership adjudication work."**

### 7.2 What has to exist before each option can run

| Option | Prerequisites |
|---|---|
| **A** | A claim-creation mechanism; a rule for multiple prior introducers; a decision on de-empanelled partners; a resolution of MF-2 (the invalid-closure fork) |
| **B** | **Nothing new.** |
| **C** | The closing-reason list (`N-4`); an assignment of each reason to a side; the project-scope switch; any time limit; the claim-creation mechanism; the closing-tap authorization question (`AC-1`) |
| **D** | A defined evidentiary test; a capture point at inquiry origination; a verifier; an interaction rule with fast capture (§42) |
| **E** | A surfacing trigger; a decision-recording mechanism; a service standard tied to the commission milestone; a named authority |

> ⟦SETTLED — a sequencing constraint, not a preference⟧ **Until you decide, nothing that presupposes a
> "yes" may be built** — no claim-citation reference, no reach flag, no eligibility rule, no clash queue,
> no partner-portal attribution view, no commission scaffolding, and **no closing-reason value list.**
> ⟦SOURCE⟧ Your own governance rule: *"No schema/code implementation should be inferred from an
> unresolved product ambiguity."* **This constrains the build, not your answer.**

### 7.3 Commercial posture with your partner network

| Option | Negotiating position | Communication burden |
|---|---|---|
| **A** | Most generous terms available; strongest recruitment pitch | **Lowest** — one sentence, no exceptions to explain |
| **B** | Tightest terms; most demanding of partners | **Low** — one sentence, but a hard one, and Scenario 3 must be stated explicitly |
| **C** | Differentiated terms that reward the partners you want | **Highest** — the condition has to be explained, and it depends on internal data the partner cannot see |
| **D** | Terms based on demonstrated contribution | **Moderate** — the test has to be explained and will be tested |
| **E** | Maximum flexibility; every conversation is open | **Moderate** — nothing to explain, and nothing to point at either |

---

## 8. Sales consequences

> ⟦OBSERVATION⟧ **What each option does to your own sales floor.**

### 8.1 The closing-reason tap

⟦SOURCE⟧ §13 calls for *"prefilled values, quick actions, **one-tap dispositions**"* while also saying
*"do not remove confirmations that are necessary for data integrity."* ⟦SOURCE⟧ §95: *"**MINIMUM
NECESSARY FRICTION, not minimum possible taps.** A one-tap action that creates financial corruption is
worse than a three-tap action that prevents it."*

| Option | Does the closing reason become financially consequential? |
|---|---|
| **A** | **Only if you accept the invalid-closure exception (MF-2).** In A's purely unconditional form, the reason is not an input and the tap stays purely operational |
| **B** | **No.** The reason remains a purely operational and analytical fact |
| **C** | **Yes, directly.** The tap a rep makes in a car park determines whether a partner can be credited on a future sale |
| **D** | **No.** D's justification is a fact about the later event, not about the closure — this is one of D's genuinely distinguishing properties |
| **E** | **Yes, indirectly.** Leadership will read the reason when deciding, so it carries weight without carrying a rule |

> ⟦YOUR DECISION, carried forward and NOT resolved⟧ **If the closing reason becomes financially
> consequential, does setting it need a different authorization, confirmation or verification posture
> than it has today — and whose?** This is existing open item `AC-1`, raised by AD-01L, **carried forward
> unchanged.** It arises under C and E, and under A if you take the exception fork. **It does not arise
> at all under B or D.**

### 8.2 Incentives on the floor

| Option | What a rep is incentivised to do | What a manager is incentivised to do |
|---|---|---|
| **A** | Nothing changes for the rep; the partner's option exists regardless | Nothing changes; redistribution is commercially neutral in every option |
| **B** | Nothing changes | Nothing changes |
| **C** | **Potentially to choose closing reasons with one eye on the commercial effect** — in either direction | Nothing changes, but managers may be asked to review closures |
| **D** | To record what the customer says about how they found you, accurately | Nothing changes |
| **E** | Nothing directly; but the rep's notes become evidence in a commercial decision | To escalate cases that look contentious |

> ⟦SETTLED — a constraint that holds in every option⟧ ⟦SOURCE⟧ §11: *"Sales Reps should not automatically
> see sensitive clash information that could influence or manipulate attribution. The UI visibility rule
> must be enforced by authorization—not merely by hiding a badge."* **Your choice does not relax this.**

### 8.3 The fresher's motivation in your own §7 case

> ⟦OBSERVATION — MF-10⟧ **Under A, C and E, a fresher who successfully re-activates a dumped
> partner-introduced customer may be generating a commission for that partner. Under B and D, they are
> not.** Whether that matters depends entirely on how your internal incentives work, which is outside
> this decision and outside this system. **It is raised only because Scenario 2 is your own real case and
> the fresher is a real person in it.** **No position is taken on whether it should matter.**

---

## 9. Reporting consequences

> ⟦OBSERVATION⟧ **Business facts only. No query, dashboard, chart or metric is designed or approved here.
> The reporting positions established in AD-01F, AD-01G, AD-01H, AD-01I and AD-01J are upheld and not
> restated.**

| # | Consequence | Which options |
|---|---|---|
| **1** | **Your inquiry counts and conversion denominators do not change, in any option.** A citation adds a *claim*, never an inquiry. | **All five** |
| **2** | **Source-based and partner-based conversion figures will disagree, and the disagreement is correct.** An inquiry recorded as Direct may carry a resolved claim naming a partner. ⟦SETTLED⟧ **This must NEVER be "fixed" by rewriting the inquiry's source** — the source is fixed at origination, and rewriting it would destroy your record of which channels actually produce business. | **A, C, D, E** |
| **3** | **A claim the system created must be distinguishable from a claim a partner filed — everywhere, including in the partner's own portal.** ⟦SOURCE⟧ §39 entitles the partner to attribution information; a claim created on their behalf that they did not file is a materially different fact, and merging the two makes your attribution data unreadable. | **A, C, E** |
| **4** | **Customer-generated re-engagement and manager-generated redistribution must never be one number.** ⟦SETTLED⟧ Merging them lets a management re-attempt be counted as customer demand. This holds regardless of your choice. | **All five** |
| **5** | **No reason-coded reporting is possible until the closing-reason list (`N-4`) exists.** Under C, that also blocks the policy itself. | **C primarily; all for reporting** |
| **6** | **No channel-partner scorecard or performance-ranking product is authorised by anything here**, and reports must branch on meaning, never on renameable labels. | **All five** |
| **7** | **Under B, your reporting stays simplest** — source and attribution always agree. **The corresponding cost is that a dispute about a partner's contribution leaves no data trail inside the system**, because no competing claim was ever recorded. | **B** |
| **8** | **Campaign reporting is unaffected in every option.** A campaign is an origination fact of the inquiry and nothing here touches it. | **All five** |

---

## 10. Abuse / manipulation risks

> ⟦OBSERVATION⟧ ⟦SOURCE⟧ **Your specification names attribution manipulation as a live risk in its own
> words**, in §11: *"Sales Reps should not automatically see sensitive clash information **that could
> influence or manipulate attribution.**"* **Every option below has a manipulation surface. They are
> different surfaces, and no option is free of one.** Presented without ranking.

| Option | Where the pressure goes | Who applies it | What the control would have to be |
|---|---|---|---|
| **A** | **Registration farming.** Registration is the cheapest act in the partner workflow, and §44 permits capturing even an unverified sub-agent's registration. Under A, every registered name is a standing option on a future sale. | Channel partners, at scale | The invalid-closure exclusion (MF-2) is the primary control — **and it only works if closures are classified honestly**, which is `AC-1` |
| **B** | **Resistance to closure.** Under B a partner's claim exists only while the inquiry is live, so a partner has an incentive to keep inquiries artificially open — logging activity, contesting dumps, escalating to managers. | Channel partners, and reps under partner pressure | Clear, manager-visible closure discipline; the risk is operational rather than financial |
| **C** | **Influence on the closing reason.** Both directions: a partner lobbying for a favourable classification, or a rep classifying in a way that removes a partner's future claim. | Both partners and internal staff | `AC-1` — the authorization posture of the disposition reason **(carried forward, not resolved)** |
| **D** | **Manufactured evidence about the later event.** Coaching a customer to name a partner at the door; a referral code appearing on an enquiry the partner had nothing to do with. | Channel partners, via the customer | A defined evidentiary standard and an independent verifier — **which is most of D's content (MF-3)** |
| **E** | **Precedent as leverage, and inconsistency as pressure.** A partner paid once will cite it; larger partners may fare differently from smaller ones; identical cases may resolve differently and ⟦SOURCE⟧ §39 lets partners see the outcomes. | Channel partners, in commercial negotiation | Recorded reasons for every decision, and periodic consistency review |

**Two risks that exist under every option, and are not created by your choice:**

- ⟦SOURCE⟧ **Offline capture.** §12: a device cannot run a reliable duplicate/clash check while
  disconnected, so an offline inquiry is pending synchronization — *"never pretend an offline lead has
  passed the server-side clash gate."* Under A, C and D this becomes a **financially relevant** gap
  (Scenario 11c). Carried forward as `T-9`; **not resolved here.**
- ⟦SETTLED⟧ **Duplicate inquiries must never be routed through this mechanism.** If the same interest is
  accidentally recorded twice, that is a defect to be corrected and merged. Treating it as a
  citation case would produce a manufactured dispute where none exists, and would make one record assert
  simultaneously that two inquiries are the same thing and that they are different things. **This
  prohibition holds in every option.**

---

## 11. Audit requirements

> ⟦SOURCE⟧ **Your engineering rules are explicit:** the audit log *"records discrete domain events in
> business language … **It is never updated and never deleted.**"* Reason values are maintained as data,
> never hard-coded. **What follows is what each option has to be able to prove after the fact.**

### 11.1 Requirements that hold under every option

| # | Must always be true |
|---|---|
| **1** | **Every claim ever filed is preserved permanently.** Claims are added; they are never removed, replaced or overwritten by a later claim. |
| **2** | **Every closed inquiry keeps its closing reason, unchanged, forever.** It is never silently rewritten. |
| **3** | **A valid historical sale is never rewritten.** A later booking cancellation does not undo it. An incorrectly recorded sale is corrected only through an explicitly authorized, explicitly reasoned, appended correction — never by quietly editing the record. |
| **4** | **A clawback acts on the ledger and the transaction — never on the claim.** The record of who was credited survives the money being recovered. |
| **5** | **Manager redistribution is recorded as its own event, with the management intent, and is never confusable with a customer re-engagement.** |
| **6** | **Attribution resolution by leadership is a recorded act with a recorded outcome**, whichever option you choose. |

### 11.2 What each option additionally has to be able to prove

| Option | Additional audit obligations |
|---|---|
| **A** | For every created claim: **when it was created, by what authorized act, and which earlier inquiry it cites.** A claim that appears with no recorded creating act is unauditable. |
| **B** | **Arguably the least — and there is a catch worth naming.** Under B there is no created claim to audit, but when a partner disputes a sale you still need to be able to show the history: that this Person had an earlier partner-claimed inquiry, that it closed, and why. ⟦SETTLED⟧ **That history already exists** as relationship continuity on the work record. **B does not need a new audit artefact; it needs you to be able to find the old one.** |
| **C** | Everything A requires, **plus the condition that was evaluated and the classification it relied on, as they stood at the moment of evaluation.** If your condition changes later, past decisions must remain explicable against the rule in force at the time. |
| **D** | Everything A requires, **plus the evidence itself and who verified it.** ⟦OBSERVATION⟧ **This is D's hardest audit obligation**, because its justification is a fact about a past event that may later be disputed — unlike a closed inquiry, which cannot change. |
| **E** | **The human decision, its date, its author, and its stated reasons — for every case.** ⟦OBSERVATION⟧ **Without this, E is unauditable and therefore unreviewable for consistency**, which removes the main control on E's own manipulation surface (§10). |

### 11.3 One requirement that is easy to miss

> ⟦SETTLED⟧ **A claim the system created must be visibly different from a claim a partner filed.**
> ⟦SOURCE⟧ §39 entitles the partner to see their attribution information. **A claim that appears in a
> partner's portal which they did not file is a materially different fact from one they did**, and if the
> two are indistinguishable, neither your team nor the partner can reason about the record. This applies
> under A, C and E, and under D if you create a claim from evidence rather than from a filing.

---

## 12. Product-Owner decision questions

> ⟦YOUR DECISION⟧ **The complete list. Each question is stated in plain business language, followed by
> why it cannot be answered for you and what it unblocks. They are grouped by the eleven dimensions the
> decision spans. §14 suggests an order to take them in.**

### 12.0 Ratifications AD-01L asks for before the policy questions

These are not policy choices. They are architectural findings that **change what the later questions
mean**, and AD-01L asks you to accept or reject them **explicitly rather than by silence.**

| # | Question | Why it comes first |
|---|---|---|
| **Q0-a** | **Do you accept that nothing recorded on a finished inquiry ever carries forward to another inquiry — and that the only thing available is creating a NEW claim that cites the old one?** | If you reject this, the whole framing below is wrong and the architecture has to be re-opened. If you accept it, the remaining questions are exactly the right ones. |
| **Q0-b** | **Do you accept that a manager reassigning a file can never create, move or affect a commercial claim?** | It is assumed by all twelve scenarios. It is also the assumption your team is most likely to find counter-intuitive (Scenario 8). |
| **Q0-c** | **Do you accept that an inquiry closed as invalid, fake or a non-opportunity cannot support a later claim?** | ⟦OBSERVATION⟧ AD-01L argues this is entailed rather than chosen, **and explicitly asks you to ratify or reject it rather than let it pass by silence.** It is also the primary control against registration farming (§10). **If you reject it, Policy A can be unconditional; if you accept it, A carries one exception (MF-2).** |
| **Q0-d** | **Do you accept that if a rule decides automatically who wins between an earlier and a later partner, that is a change to "leadership resolves attribution" and not a commercial setting?** | It determines which approval bar the "mode" question in Q6 sits behind. **AD-01L records that you may reasonably disagree with this characterisation.** |
| **Q0-e** | **Will you ratify the eleven amendments (`A-1` … `A-11`) that earlier documents identified as necessary and deliberately did not make?** | ⟦SETTLED⟧ Eleven unmade amendments now span six documents, three of them money-bearing. **The documents cannot all be approved as literally written.** Ratifying them costs no analysis and removes a class of latent contradiction. |

### 12.1 The eleven policy dimensions

| # | Dimension | The question in plain language | Notes |
|---|---|---|---|
| **Q1** | **Claim lifetime** *(the headline)* | **May the system ever create a claim on a later inquiry, naming a partner, because of an earlier closed inquiry — yes or no?** | **Everything else is conditional on this.** If the answer is no, questions Q2–Q6 do not arise. |
| **Q2** | **Claim discharge** | **What exactly ends a partner's commercial connection to an inquiry?** The inquiry closing? The closing plus a recorded reason of a particular kind? Nothing at all? | This is where Policy B is defined, and also where C's "which closures" begins. |
| **Q3** | **Re-engagement** | **When a customer comes back, what does the new inquiry inherit from the old one?** ⟦SETTLED⟧ It already inherits relationship continuity and nothing else. **The only thing open is whether a new claim may cite the old inquiry.** | Q3 is Q1 restated from the customer's side. It is listed separately because it is how your team will phrase it. |
| **Q4** | **Same project vs. new project** | **If a claim can be created on a later inquiry, does that apply only within the same project, or across your portfolio?** | **A separate switch from Q1 and Q2.** ⟦OBSERVATION⟧ Cross-project has no support anywhere in your documents; same-project has one indirect piece (MF-1). **Recorded, not a recommendation.** |
| **Q5** | **Time horizon** | **Is there a point past which an old introduction stops counting? If so, how long?** | ⟦SETTLED⟧ **If you set one, it is counted from the date the earlier inquiry was closed** — not from the last call, not from the last customer activity. ⟦YOUR DECISION⟧ **No number exists anywhere in your documents and none is proposed here. If you want one, it is yours to supply.** |
| **Q6** | **Attribution conflict (mode)** | **When an old partner and a new partner both have claims on one inquiry, what happens — leadership decides each case, the old one wins automatically, or the new one wins automatically?** | ⟦OBSERVATION⟧ Per Q0-d, two of these three are arguably authorization changes rather than commercial settings. **Leadership-decides is what §11 already says.** |
| **Q7** | **New partner** | **Does a later partner who actually produces the inquiry ever lose to an earlier partner who did not?** | This is Q6 from the new partner's side. It is the question the new partner will ask, and ⟦SOURCE⟧ §39 means they will see the answer. |
| **Q8** | **Direct-source conversion** | **When a customer comes back entirely on their own, or through your own marketing, can a partner still be credited?** | This is where Scenarios 1 and 10 live. It also determines whether your "direct conversion" reporting changes meaning (§9). |
| **Q9** | **Manager redistribution** | **Does a manager reassigning the file change anything commercially?** | ⟦SETTLED⟧ **No, structurally, in every option.** Listed so it is explicitly confirmed rather than assumed — and because Scenario 8 shows it is the assumption most likely to be questioned. |
| **Q10** | **Historical citation** | **Where a partner IS credited on a later sale, must the record state which earlier inquiry justifies it, and must that be visibly different from a claim the partner filed themselves?** | ⟦OBSERVATION⟧ Both are strongly indicated by §11 and §39 but neither is written down. **Not decided here.** |
| **Q11** | **Commission eligibility** | **Confirm: a partner is paid only when BOTH they hold the resolved claim on the converting inquiry AND the transaction reaches its approved milestone. Does a claim created by citation change either half?** | ⟦SETTLED⟧ The two-part test is already established. **Nothing in this decision changes it.** Listed for confirmation, because "the partner is credited" and "the partner is paid" are different sentences and get conflated. |
| **Q12** | **Auditability** | **What must the system be able to prove, after the fact, about every one of these decisions?** | §11 above lists the requirements per option. **The one that is easiest to omit is E's: a human decision that is not recorded with its reasons is unreviewable.** |

### 12.2 Questions this framework surfaces that are not in any register yet

> ⟦YOUR DECISION — both are minted here as questions and NEITHER is answered.⟧

| # | Question | Where it arises | Why it cannot be left to implementation |
|---|---|---|---|
| **AC-2** | **Is there any route by which you may decide to pay a channel partner for an introduction WITHOUT recording an attribution claim — a goodwill or ex-gratia route — and if so, is it inside BMexa's financial scope at all?** | Scenario 6 (the record cannot coherently carry a claim, yet you may still want to pay); Scenario 2 under B and D (no claim exists, yet the commercial relationship may warrant something) | ⟦SOURCE⟧ §22 already separates commission from other financial concepts; §32 describes only the commission workflow. **No source says whether such a route exists.** Left to implementation, it will either be invented as a fake attribution claim — corrupting your attribution data permanently — or handled outside the system with no record at all. |
| **AC-3** | **Must a claim — whether filed or created by citation — name a partner who holds a current, approved relationship for THAT project? What happens if they do not, or if the relationship has since ended?** | Scenario 4 (cross-project); Scenario 6 and Scenario 9 (relationship status); and ⟦SOURCE⟧ §44's explicitly *unverified* sub-agent capture | ⟦SOURCE⟧ §32 and §41 describe an approved partner relationship structure; nothing says what happens when a claim names a party outside it. **It is an authorization and relationship question, and it becomes money-bearing the moment any option other than B is chosen.** |

### 12.3 What is NOT being asked here, and is carried forward unchanged

> ⟦SETTLED⟧ **None of the following is resolved, narrowed, branched or affected by this document. Each
> keeps its existing owner and status.**

| Item | What it is | Status |
|---|---|---|
| **`N-4`** | The actual list of closing reasons | **Not resolved.** On Policy C's critical path. AD-01L advises taking it **after** this decision. |
| **`AC-1`** | Whether setting a closing reason needs a different authorization posture once it carries money | **Not resolved.** Arises under C and E, and under A on one fork. |
| **`AA-1`, `AA-2`, `AA-5`** | Same-project inquiry individuation; project-less preliminary registration (which owns the "merely an interest" question); and AD-01J's remaining item | **Not resolved.** |
| **`AA-3`** | Re-engagement after a booking cancellation | **Not resolved.** A different question from this one. |
| **`AA-4`** | What artefact records a citation | **Not resolved**, and re-posed by AD-01L as a cheaper form. Conditional on Q1. |
| **`AB-1`, `AB-2`, `AB-3`** | Multi-applicant entitlement; unit-transfer entitlement identity; sub-agent payee | **Not resolved.** None is required to answer Q1. |
| **`T-5`** | Whether a partner behind a completed purchase has a claim on a later purchase | **Not re-opened.** Its finding — no reach across a fully discharged claim — is preserved exactly. |
| **`Q10`, `Q11`** | Merging duplicate records; filing a late claim on the **same** inquiry | **Not resolved.** `Q11` looks identical to this decision from the partner's side and is architecturally unrelated. |
| **`T-1`, `T-3`, `T-6`–`T-11`, `V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`, `Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half, `M-9`** | Various | **None resolved, narrowed or branched.** |

---

## 13. Architect neutrality statement

> **This section is the most important compliance statement in this document.**

**No policy has been selected. No policy has been recommended. No policy has been ranked, preferred,
leaned toward, or hinted at — in §3, in §4, in §5, in §6, in §7, in §8, in §9, in §10, in §11, or
anywhere else in this document.**

**Sections 3 through 11 are presented for the Project Owner's independent judgement.** They exist to
give the owner the same information the architect has, organised so it can be acted on. They are not an
argument. Where a fact favours one option, the corresponding fact favouring another is stated alongside
it, at comparable length and with comparable weight. Where a cost is named, it is named without
softening — including the costs of the options a reader might assume the architect prefers.

**Specifically:**

- **§3 describes all five alternatives using an identical eight-heading template**, in the same order and
  at comparable length, so that the structure of the presentation cannot favour one.
- **§4 resolves no scenario.** Each of the twelve shows how all five options would resolve it, side by
  side. Where a scenario turns out not to be a policy question at all (Scenarios 3, 7, 8 and 12), that is
  stated as a structural fact, not as evidence for any option.
- **§5–§11 are consequence analyses, not arguments.** Every cost named against a citation-granting option
  has a corresponding cost named against a citation-refusing one, and vice versa. **MF-9 states both
  together deliberately.**
- **§10 gives every one of the five options a manipulation surface**, because every one of them has one.
- **§12 asks questions. It does not answer them.**
- **§14 sequences the questions. It does not answer them** — see the explicit statement at its head.
- **§15 describes what each option means for the future commission model.** It contains **no formula, no
  rate, no percentage, no amount, no milestone value, no clawback quantum and no tax treatment.**

**Where this document states that something is already settled**, it is because a prior document settled
it — either as your own decision, or as a consequence of the architecture — and the label ⟦SETTLED⟧ marks
every such statement. **Those are not the architect choosing; they are the architect reporting.** The
clearest example is §1.1's "closed to claims" half: it is stated as not being your decision, because
changing it would mean changing the rule that history is never edited — which is a different decision
with a different scope, not an option on this menu.

**Where this document raises an observation** — the `MF-n` items — **each is a structural fact or a
consequence the owner would otherwise meet during implementation instead of now.** None selects a policy.
Two of them (MF-2 and MF-3) identify that an alternative as stated cannot be built exactly as worded;
**in both cases the document states the forks available and takes no position on which to take.**

⟦SOURCE⟧ **Your own governance rules require this posture.** Canonical entities, relationships, financial
rules and channel-partner commission logic are all in the **"must ask before deciding"** category.
*"Inventing business rules"* is in the **"must never do without explicit authorization"** category. And:
*"When in doubt, **STOP AND ASK**."*

**Delegation to an architect is not authorization. Being asked to prepare this framework is not
permission to decide what it frames. Nothing in this document may be treated as settled policy until the
Project Owner decides it, in writing.**

---

## 14. Recommended order for Product-Owner decisions

> **This section is about WHICH QUESTIONS TO ANSWER FIRST. It is not about which answers to give.**
> **No answer to any question below is proposed, implied, preferred or hinted at.** The ordering is
> derived from one thing only: **which questions change the meaning of other questions.** A question that
> makes three later questions disappear or change shape is worth taking first regardless of how it is
> answered.

### Step 1 — The ratifications (Q0-a … Q0-e)

**Why first:** they change what the policy questions mean, and one of them (Q0-c) determines whether
Policy A can even be stated in its unconditional form. **Taking them after the policy questions would
mean re-asking the policy questions.** They also cost no analysis — they are accept-or-reject on findings
already written down.

### Step 2 — The headline question (Q1)

**Why second:** **every other question in §12.1 is conditional on it.** If Q1 is answered "no, never,"
then Q2, Q4, Q5, Q6, Q7, Q8 and Q10 do not arise at all, and `AC-1`, `AC-3` and most of `AA-4` come off
the critical path. If Q1 is answered any other way, all of them arise together. **It is the single
highest-leverage question in the entire register**, in the specific sense that it determines how many
other questions you have to answer — not in the sense that any particular answer is better.

### Step 3 — The basis (which of the five, and for D, the evidentiary test)

**Why third:** it determines whether your closing-reason list (`N-4`) is on the critical path. **C puts
`N-4` on it; A, B, D and E do not.** And for D specifically, ⟦OBSERVATION — MF-3⟧ **the evidentiary test
IS the policy**, so choosing D without defining the test is not a decision yet.

### Step 4 — The scope and horizon switches (Q4, Q5)

**Why fourth:** they are independent of each other and of Step 3, and neither is answerable before Q1.
**Q5 requires a number that does not exist anywhere in your documents and that the architect must not
invent.**

### Step 5 — The conflict mode (Q6, Q7)

**Why fifth:** it only arises if Step 2 produced anything other than "never," and per Q0-d you need to
know which approval bar it sits behind, which is a Step 1 output.

### Step 6 — The consequential questions (`AC-1`, `AC-2`, `AC-3`, Q10, Q12)

**Why sixth:** every one of them is conditional on Steps 2 and 3. `AC-1` does not arise under B or D.
`AC-3` becomes money-bearing under everything except B.

### Step 7 — Then, and only then, the closing-reason list (`N-4`)

**Why last and not first:** ⟦SETTLED⟧ AD-01L's reasoning, carried forward — **the reason values cannot be
sensibly chosen until it is known whether reasons carry a financial consequence.** Taking `N-4` first
would mean minting a list that has to be revisited.

### Taken alongside, in the same sitting

⟦SETTLED⟧ AD-01L recommends this be **one commercial sitting**, together with `AA-1`, `AA-2`, `AA-3`,
`AA-5`, `AB-1`, `AB-2` and `AB-3` — because the future commission model consumes all of them and cannot
start while any is missing.

### Independent of all of the above

⟦SETTLED⟧ AD-01F's `V-4` is **the cheapest unblocking question in the whole register** — one question, no
prerequisites, gating a large amount of downstream reporting and workflow work. **It does not block this
decision and this decision does not block it.** Four consecutive documents have now recommended it. **It
is mentioned here only so it is not forgotten while attention is on this one.**

> **Restating the constraint on this section, because it is easy to read a sequence as a preference:**
> **nothing above says what any answer should be.** Step 2 comes second because of how many questions it
> eliminates or activates, **not because either of its answers is better.** If the answer to Q1 is
> "never," Steps 4, 5 and most of 6 disappear; if it is anything else, they all arrive at once. **That is
> a statement about workload, not about merit.**

---

## 15. Impact on future commission architecture

> ⟦OBSERVATION⟧ **What the commission model (`M-9`) inherits from each answer. `M-9` is not resolved,
> narrowed or pre-empted here. No formula, rate, slab, percentage, amount, milestone value, clawback
> quantum or tax treatment appears in this section or anywhere in this document.**

### 15.1 What does NOT change, whatever you decide

> ⟦SETTLED⟧ **The two-part eligibility test is unchanged in every option:**
>
> - **WHO** is entitled = **the resolved attribution claim on the inquiry that converted.**
> - **WHETHER AND WHEN** = **the transaction reaching its approved milestone.**
>
> **Your answer changes only which claims are in the population to be resolved. It does not change the
> shape of the test, and it does not change either anchor.**

Also unchanged, in every option:

| Fact | Why it is unchanged |
|---|---|
| **Winning attribution and being paid are different outcomes** | An internal claimant can win attribution and generate no partner payment at all. |
| **A clawback acts on the ledger and the transaction, never on the claim** | The record of who was credited survives the money being recovered. |
| **Commission accrual and payout stay separate** | ⟦SOURCE⟧ Your consolidated §22. |
| **A unit transfer does not move attribution** | Scenario 12. **The transfer's entitlement question (`AB-2`) is separate and carried forward unchanged.** |
| **Multi-applicant entitlement (`AB-1`) and sub-agent payee (`AB-3`)** | **Unaffected by your answer.** A citation-created claim is a claim like any other; both items are equally underspecified with or without it. |

### 15.2 What each answer hands to the commission model

| Option | What `M-9` must additionally accommodate |
|---|---|
| **A** | A concept of a **system-created claim** distinct from a partner-filed one; a creating act with a recorded authorization; a permanent, accumulating claim population across the customer base |
| **B** | **Nothing additional.** The claim population is exactly the claims partners filed. |
| **C** | Everything A requires, **plus a dependency on the closing-reason list** and a record of which condition was evaluated, as it stood at the time |
| **D** | Everything A requires, **plus an evidence record and a verification step**, and a justification that is a fact about a past event rather than an unchangeable record |
| **E** | A **recorded human decision** per case, and a service standard that guarantees the decision completes before the transaction reaches its milestone |

### 15.3 Two structural properties worth carrying into the commission work

> ⟦SETTLED⟧ **First: on this particular question, a citation's justification cannot change.** A closed
> inquiry with its recorded reason is fixed forever. This is **not true** of the related questions — a
> claim justified by an *entitlement* can have that entitlement clawed back, leaving the justification
> hollow. **AD-01L is explicit that this cuts in favour of neither answer: it says only that if you grant
> citation anywhere, this is the branch where the mechanism does not wobble afterwards.**

> ⟦SETTLED⟧ **Second: whatever you decide tightens rather than relaxes one existing requirement.** Claim
> resolution must be complete **before** the converting transaction reaches its commission milestone.
> Any option that adds claims to be resolved adds work that must finish before that moment. **Only B adds
> none.**

### 15.4 What the commission model still cannot start without

⟦SETTLED⟧ The commission model consumes: the attribution anchor; the two-part eligibility test; the
transaction-identity requirement; **your answer to Q1**; the repeat-purchase finding; `AA-3`; `AB-1`;
`AB-2`; `AB-3`; and now `AC-1`, `AC-2` and `AC-3`. **Starting it before the commercial sitting would
require inventing every one of them** — which ⟦SOURCE⟧ your own build-governance rule forbids.

---

## Closing note

**STATUS: PRODUCT-OWNER DECISION REQUIRED — NO POLICY SELECTED**

**No policy has been selected, recommended, ranked, preferred or hinted at.** Sections 3 through 11 are
presented for the Project Owner's independent judgement, and section 13 states that explicitly.

**No commission formula, rate, slab, percentage, amount, milestone value, clawback quantum or tax
treatment appears anywhere in this document.** **No database design, table, column, migration or code
appears anywhere.** **No screen, workflow, approval step or gate is designed.** **No time window, score,
threshold or number of any kind is proposed.** **No concept of a partner "owning" a customer is
introduced anywhere.**

**No prior document is modified.** AD-01, AD-01A, AD-01B, AD-01C, AD-01E, AD-01F, AD-01G, AD-01H, AD-01I,
AD-01J, AD-01K and AD-01L are all unedited. The eleven amendments earlier documents identified as
necessary (`A-1` … `A-11`) remain **named and not made**, and only the Project Owner may make them.

**No other open item is resolved.** `AA-1`, `AA-2`, `AA-3`, `AA-4`, `AA-5`, `AB-1`, `AB-2`, `AB-3`,
`AC-1`, `N-4`, `T-1`, `T-3`, `T-5`, `T-6`–`T-11`, `Q10`, `Q11`, `V-4`, `V-7`, `W-1`, `Y-1`, `Y-3`, `Y-4`,
`Y-5`, `Z-2`, `Z-5`, `M-5`'s uniqueness half and `M-9` all carry forward unchanged. Two new questions
(`AC-2`, `AC-3`) are raised and neither is answered.

**Your own decisions are preserved exactly and are not re-opened:** the four-value lifecycle vocabulary;
the approved conversion milestone; the three-dimension closing-reason framework with its values still
open; **no ordinary reversal out of a recorded sale — a valid sale stays historically true even after a
later booking cancellation, an incorrectly recorded one is corrected only through an audited, explicitly
authorized, appended mechanism, and a genuinely new opportunity creates a new business unit**; the work
record as the work file and the inquiry as the commercial unit; concurrent inquiries being valid and the
lifecycle sitting at the inquiry level; and the decomposition of Dump into a persisted commercial
disposition plus a derived work condition, with redistribution as a work operation that never creates an
inquiry, never changes attribution and never changes disposition.

⟦SOURCE⟧ Per your own specification: *do not invent requirements.* Per §97: *when in doubt, **STOP AND
ASK.*** **This document is the asking, and the question is the one sentence in §2.1.**
