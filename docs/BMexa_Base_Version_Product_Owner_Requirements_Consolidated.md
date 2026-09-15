# BMexa Base Version — Product-Owner Requirements & Workflow Consolidation

*Consolidated from current product discussions, real-world CRM workflow experience, and supplied workflow screenshots.*

> **Source note:** This is a plain-text/markdown transcription of the Product Owner's uploaded
> `.docx` (`BMexa_Base_Version_Product_Owner_Requirements_Consolidated.docx`), persisted here so it
> is committed, versioned, and citable by section number as authoritative source material for
> architecture work (starting with AD-01F). Content is preserved as authored; only DOCX table
> markup was normalized into markdown tables during transcription.

| Document control | Value |
|---|---|
| Status | BASE VERSION REQUIREMENTS — SOURCE CONSOLIDATION |
| Purpose | Create one authoritative starting point for subsequent architecture review |
| Approval state | Business-process source only; architecture and implementation are **NOT** approved by this document |
| Visual-design status | Screenshots are workflow references only; no visual/UI design is approved or copied |
| Primary audience | Product Owner, Architect, Human Developer, Claude Code |
| Change rule | Later decisions may supersede this document through explicit decision records |

## 1. Purpose and operating rule

This document consolidates what the Product Owner currently knows and has explicitly described about the BMexa Base Version. It is intentionally a business/process source document rather than a database design. It captures real operational behavior first, then provides a clean basis for architecture review.

**Important:** the supplied screenshots are treated only as evidence of the historical workflow and information model. They are **NOT** visual references for BMexa. BMexa will receive a fresh UX/UI design later.

Where the Product Owner has described a behavior but has not yet finalized the exact implementation or policy, this document labels it **'OPEN — architecture/product decision required'** rather than silently inventing a rule.

## 2. Product model in one view

BMexa is a vertical enterprise SaaS system for real-estate builders/developers and channel partners, focused on lead-to-booking-to-post-sale execution.

- Builder/Developer is the primary enterprise customer/tenant.
- Builder-provided CP access is a controlled portal inside the builder context.
- Independent CP firms can be separate BMexa SaaS tenants with their own users/sub-agents, leads and resale operations.
- Independent CP SaaS tenants do not receive the builder-style Customer Portal.
- Super Admin/SaaS Operator is a platform-level role outside ordinary customer-tenant roles.
- The Base Version must support mobile-first operational sales work while remaining usable on desktop.

## 3. User and organizational model

| Role / actor | Business responsibility in current understanding |
|---|---|
| Super Admin / SaaS Operator | Platform-level administration, tenant/platform controls, tightly privileged access. |
| CEO / Promoter | Executive visibility and management oversight. |
| Site Head / Sales Head | Sales leadership, allocation, transfer, approvals, broad team visibility. |
| Manager / Reporting Manager | Manages assigned sales team, transfers leads, reviews activity and reporting. |
| Sales Representative / Lead Handler | Works assigned leads, performs calls/follow-ups, records outcomes, schedules next actions, initiates booking workflow. |
| Helpdesk / Lead Intake | Receives/normalizes inbound leads and supports intake operations. |
| Sales Support / Sales Operations | Verifies booking documents/KYC against digital booking data and coordinates booking-processing operations. |
| Customer Support / Post-Sales | Handles post-booking customer support, documents/communication, ledger/payment questions and service tickets. |
| Accounts / Finance | Independently verifies payments against bank credit, approves valid receipts, handles financial reconciliation. |
| Builder-provided CP users | Builder-context channel partner operations with controlled access. |
| Independent CP SaaS users/sub-agents | Operate the CP firm's own tenant, leads, users and resale inventory; no builder Customer Portal. |
| Customer / Buyer | Receives controlled post-sale access under builder context after the relevant booking/customer boundary. |

## 4. Core lead/client operating concept

The Product Owner's real-world CRM experience indicates that the Sales Rep thinks in terms of a client-centric working record rather than a bare status row. Opening a client/lead record exposes customer data, project interests, timeline, prior activity permitted to that user, current follow-up context, and management information.

Current working conceptual model:

| Concept | Meaning |
|---|---|
| Person / Client | Persistent human identity/contact information. |
| Lead / Client Sales Record | Long-lived sales record used by the team to work the customer over time. |
| Project Interest | A project/property interest associated with the client record; a client may show interest in multiple projects over time. |
| Activity / Timeline | Chronological record of meaningful sales events, user follow-ups, system events, assignments, transfers and other relevant actions. |
| Assignment | Current handler/owner context plus historical assignment/transfer events. |
| Next Action | The next planned sales action, with timing; drives operational queues such as Today/Future/Overdue. |
| Disposition / Lifecycle | Current business condition such as New, Follow-up, Success, Dump; exact semantics remain subject to architecture decisions recorded separately. |
| History visibility | Authorization-controlled access to historical activity; may differ from Lead identity/current assignment. |

## 5. Lead intake and creation

Known inbound paths include:

- Website / digital / advertising leads.
- Walk-ins / helpdesk intake.
- Channel Partner (CP) leads.
- Round-robin assignment flows.
- Direct/manual assignment from management.
- Other configured lead sources/channels, including IVR-related intake.

When a lead is created, the system is expected to record a timeline event containing at least the creation time and relevant source/assignment context.

The old CRM also exposed inquiry date, source, campaign, IVR number/channel information, inquiry type, customer-entered remarks and similar intake metadata.

## 6. Lead assignment and transfer

Assignment is a first-class business operation and a historical event, not merely a current field.

| Scenario | Current business behavior |
|---|---|
| Round-robin | Lead is distributed automatically to a handler according to assignment rules. |
| Manager assignment | Reporting Manager/Sales Head can assign a lead to one of the users in the managed sales hierarchy. |
| Bulk transfer | Manager can select multiple leads and transfer them together. |
| Individual transfer | Manager can open a lead and transfer it to an eligible sales representative. |
| Assignment history | Timeline should show assignment/transfer events including who performed the action and when. |
| Transfer with history | Management may deliberately give the receiving handler access to the historical timeline. |
| Transfer without history | Management may deliberately give the receiving handler a fresh working view without prior employee conversation/follow-up history. |
| Automatic assignment | A revived/regenerated lead may be automatically sent to a different handler; historical visibility rules apply separately from Lead identity. |

**Open architecture requirement:** history visibility must be enforced at authorization boundaries and not rely on the UI merely hiding old rows.

## 7. Real-world regenerated/re-engaged lead behavior

The Product Owner's current preferred business behavior is that a dumped or previously handled client can generate a new inquiry and the existing client/lead record may be revived rather than automatically creating a completely separate lead record.

Illustrative behavior described by the Product Owner:

- A client was originally handled by Employee A, followed up and later dumped.
- A manager may redistribute dumped/non-responding leads to a fresher for another calling attempt.
- If the client later regenerates an inquiry, the same underlying client/lead history may remain connected.
- The client may then show more than one project interest on the same record.
- The timeline should record that the client regenerated/expressed interest again, including the relevant project context.
- A manager can decide whether the receiving employee sees full prior history or receives a fresh working context without historical conversations.

**Important:** exact revival semantics, episode boundaries and the difference between 'same Lead re-engagement' versus 'genuinely new commercial opportunity' remain an architecture/product decision to be settled explicitly.

## 8. Active lead activity and timeline

The historical CRM workflow records a detailed chronological timeline:

- Lead created.
- Lead assigned to a handler; assignment source and actor are historically visible to authorized users.
- First user follow-up/action.
- Response type and sub-response.
- Remarks.
- Next scheduled follow-up date/time.
- Subsequent follow-up activities.
- Transfer events.
- Customer regenerated/renewed inquiry for another project.
- Success/booking events.
- Dump/disposition events.
- Other system-generated events that explain what happened to the record.

The system should distinguish user-performed activities from system-generated timeline events.

## 9. First response and FUT metric

A first follow-up response-time metric is required in the operational model. The historical CRM showed the duration between lead creation and the first user follow-up/action.

| Metric / event | Rule from current business description |
|---|---|
| First response duration | Elapsed time from lead creation to first qualifying user follow-up/action. |
| FUT | Total count of actual user-performed follow-ups. |
| Excluded from FUT | System-generated events such as lead creation, lead assignment, lead transfer and system-generated first-entry events do not increment FUT. |
| Purpose | Operational workload/productivity and responsiveness visibility. |

**Open architecture detail:** whether BMexa will store both creation-to-first-action and assignment-to-first-action metrics, and exact timezone/working-hour semantics, remains to be decided.

## 10. Follow-up activity structure

The historical follow-up interaction is structured rather than being a free-text note.

| Field/concept | Current meaning |
|---|---|
| Activity type | Type of sales action such as a call or other supported outreach. |
| Response type | High-level outcome selected by the Sales Rep. |
| Sub-response | More specific outcome within the response type. |
| Remarks | Free-text contextual detail captured by the Sales Rep. |
| Next follow-up | Next planned contact/action date/time. |
| Recorded time | Time the activity was recorded in the system. |
| Actor / handler | User who performed the activity. |
| Timeline position | Chronological placement relative to other activities. |

## 11. Operational status/queue semantics

The historical CRM used one 'Status' column to present several different concepts. BMexa must not blindly collapse these into one giant enum.

| Historical label | BMexa interpretation at current understanding |
|---|---|
| New | No qualifying user follow-up yet in the relevant current working context; exact lead-vs-handler scope must be finalized. |
| Today | Next follow-up/action is due today; derived operational bucket. |
| Future | Next follow-up/action is later than today; derived operational bucket. |
| Pending | Historical term for overdue follow-up; BMexa will use 'Overdue' instead. |
| Overdue | Scheduled follow-up/action time has passed and required follow-up has not been completed; derived operational bucket. |
| Success | Approved lifecycle/conversion condition associated with Booked/Stage 3, subject to recorded architecture decisions. |
| Dump | Terminal/non-active sales disposition at lifecycle level, but real-world usage shows it may also function as workload-management disposition; semantics must be kept precise. |

**Product Owner clarification:** 'Pending' and 'Overdue' mean the same historical thing. BMexa will use ONLY the term 'Overdue'.

## 12. Client tab / work queue information model

The historical Client tab provided card and table views. These screenshots are process/reference evidence only; BMexa will use a fresh visual design.

Known table/work-queue information includes: serial number; FUT user-follow-up count; direct email action; direct SMS action; inquiry date; lead source; campaign name; customer name; mobile number; email; customer-entered remarks; current operational/lifecycle status; project name / project interest; unit type; budget; inquiry form/source path; inquiry type / customer temperature (e.g., cold, warm, hot) as historically used; response type; service response type; dump reason; last remarks; last follow-up date; next follow-up date; booked project; inquiry owner; Assigned To / Lead Handler; manager/reporting hierarchy context; employee code; IVR number/channel metadata where applicable.

Known filtering behavior includes fast filters plus advanced filters. Exact BMexa filter taxonomy will be defined during information architecture/product design.

## 13. Client/lead details and multiple project interests

The client record can contain customer details and multiple project interests. A regenerated inquiry for a different project or size can be added to the same client record when the business considers it part of the same continuing client relationship.

The timeline should record the new inquiry event rather than silently overwriting the previous interest.

**Open product/architecture decision:** define the exact boundary between an additional project interest on the same Lead and a genuinely new sales opportunity.

## 14. Success / booking workflow from Sales

The historical Sales Rep flow is:

1. During active follow-up, the Sales Rep records a booking/EOI-related outcome rather than an ordinary follow-up response.
2. The relevant project/unit context is entered.
3. The action transitions into the controlled booking workflow.
4. The chosen inventory must be held authoritatively for 20 minutes where the applicable booking flow requires it.
5. The online booking form becomes the digital source for Sales Support to verify against the signed physical copy and KYC.

**Product/architecture decision already recorded:** Lead Success is associated with the approved Booked / Stage 3 milestone, not merely with booking initiation.

## 15. Dump / disposition workflow

The Sales Rep can close the current active work through a Dump/disposition action:

1. Select an appropriate response/disposition reason.
2. Enter remarks/context.
3. Save the action.
4. The lead becomes non-active in the relevant sales workflow.

Real-world historical examples include non-response, switched off, not reachable, not interested, budget issue, location issue and similar conditions. These examples are reference material; BMexa's canonical reason master remains a later explicit decision.

**Product/architecture decision recorded:** a terminal non-conversion disposition requires a reason, using a semantic framework that distinguishes validity class, responsibility locus and recoverability posture without prematurely inventing the final value list.

## 16. Manager transfer controls

Reporting Managers/Sales Heads have a privileged transfer surface:

- Select one or multiple leads.
- Choose a Sales Representative from the reporting hierarchy.
- Transfer leads individually or in bulk.
- Transfer should be represented as a historical event.
- Transfer may include a management decision about whether prior history is visible to the receiving employee.

**Open architecture requirement:** define how 'with history' and 'without history' are represented and enforced across API, search, reporting, exports, notifications, attachments and related surfaces.

## 17. Historical visibility and authorization

The Product Owner's real-world requirement is that the underlying Lead history can remain intact while the receiving handler's visibility differs.

| Scenario | Current intended visibility |
|---|---|
| Same original handler receives the re-engaged/redistributed Lead | Original history may be visible to that handler. |
| Sales Head explicitly transfers revived lead back to historical handler | Original handler may see prior history. |
| Automatic assignment sends revived lead to a different/new handler | New handler does not automatically see prior employee history. |
| Sales Head / authorized reporting manager | Broader visibility of historical context. |
| Transfer without history | Receiving employee works the record as a fresh context without seeing prior conversation/follow-up history. |
| Transfer with history | Receiving employee sees the prior timeline/history permitted by the management action. |

**Core security principle:** history visibility is an authorization decision and must not be implemented solely by hiding UI elements.

## 18. Booking and Sales Support workflow

Current builder operating process and planned BMexa process:

| Step | Current builder process | BMexa Base Version intended process |
|---|---|---|
| 1. Booking capture | Physical booking form completed by builder/sales staff. | Sales Representative completes booking form online in BMexa. |
| 2. Customer signature | Physical signed form is used. | BMexa form is printed and signed physically by the customer. |
| 3. KYC package | Physical KYC attached to booking form. | Physical signed form + KYC/supporting documents sent to Sales Support. |
| 4. Verification | Sales Support manually tallies all details. | Sales Support verifies physical documents against the booking already stored in BMexa; no duplicate re-entry. |
| 5. File storage | Physical file retained. | Approved physical file is stored in builder record room. |
| 6. Booking approval | Manual operational approval before CRM processing. | Sales Support approval of the CRM-recorded booking. |
| 7. Customer ledger | CRM/CRM operations create ledger data. | Approval should create/enable the customer-ledger process from the already captured booking data. |
| 8. Allotment letter | Generated/managed through CRM flow. | Made available as part of the approved booking flow; exact generation mechanism remains open. |
| 9. Agreement | Manual process. | Remains manual/outside BMexa Base Version. |

**Important responsibility boundary:** Sales Support verifies documents and approves the booking; BMexa should not require Sales Support to manually recreate the booking data already entered by Sales.

## 19. Payment / receipt workflow

Payment state must distinguish data entry from bank-confirmed receipt.

| Stage | Business meaning |
|---|---|
| Receipt/payment recorded | CRM records payment amount and reference information; a receipt identifier may be generated. |
| Accounts review | Accounts independently checks bank statements or equivalent authoritative bank information. |
| Credit confirmed | Accounts approves the receipt as actually received. |
| Bounce / not credited | Accounts records the exception/remark; payment is not treated as approved received money. |
| Customer ledger | Only Accounts-approved receipt should become authoritative received-money information in the customer ledger. |
| Customer visibility | Customer should see verified financial information, not unverified/bounced entries as confirmed receipts. |

This preserves the important principle: **CRM-recorded payment ≠ Accounts-verified money received.**

## 20. Customer Support / post-sale workflow

Customer Support handles post-booking customer questions and service needs. Queries can involve payments, ledger entries, interest calculations, TDS, documentation and related customer-service matters. Customer-facing financial visibility is based on approved/verified records. The Customer Portal is a builder-side controlled post-sale surface; independent CP SaaS tenants do not receive the builder-style Customer Portal.

## 21. Inventory, hold and booking integrity

The Lead workflow connects to the separate inventory/booking architecture already under review.

- Project → Tower → Floor → Inventory Unit where the builder's inventory structure requires it.
- Availability is server/database authoritative.
- A 20-minute hold must guarantee a single winner under concurrency.
- Do not use a database design that relies on non-immutable time predicates for availability correctness.
- Booking financial/legal values need snapshotting and controlled adjustments rather than silent rewriting.
- Cancellation and transfer are distinct business events.
- The exact Booking state machine and inventory implementation remain separate architecture decisions and should not be invented from this requirements document.

## 22. Financial and commission boundaries

- Booking, demand, receipt, receipt allocation, ledger and commission are distinct financial concepts.
- Receipt = money received/recorded event; allocation = how receipt is applied to demand.
- Unallocated advance/token/EOI money must be representable.
- Outstanding should be based on demands minus allocated receipts.
- CP commission accrual and payout are separate.
- Commission approval/validation/payment should be separated by responsible functions.
- Clawbacks can result in negative balances and future offsets where valid.
- TDS reconciliation must preserve Gross Commission − TDS = Net Payable.
- BMexa CRM financials do not replace the builder's full accounting system.

## 23. Multi-tenancy and security foundation

- Tenant isolation is a primary security boundary.
- PostgreSQL RLS/fail-closed tenant isolation is part of the current repository foundation.
- Client-supplied tenant IDs cannot be trusted to select another tenant.
- API, background jobs, search, exports, files and caches must honor authorization boundaries.
- RBAC must separate platform-level Super Admin from tenant roles.
- Builder-provided CP portal and independent CP SaaS tenant are different tenancy/authorization modes.
- Cross-tenant builder↔CP relationships must be explicit and controlled rather than created by generic cross-tenant permission.
- Current session architecture uses opaque Bearer session tokens with DB lookup, expiry and revocation; this remains subject to repository validation and is not to be replaced casually.

## 24. Offline / PWA operational expectations

- Mobile-first responsive/PWA direction is preferred for the Base Version.
- Low-risk actions such as notes/leads may be queued locally where appropriate.
- High-stakes booking, inventory hold and financial confirmation must not be represented as safely completed offline.
- Offline-created leads remain pending authoritative server processing until synchronized/validated.
- Optimistic UI must never become optimistic authorization.
- Browser local storage is not an approved secure-erasure boundary.

## 25. Search, reporting and analytics expectations

- Persistent permission-filtered omni-search is desirable.
- Dedicated search infrastructure should not be introduced in the Base Version without demonstrated scale/performance need.
- Lead/client work queues should provide both quick operational filters and deeper advanced filters.
- Timeline/business history should be durable enough for conversion and operational analytics; generic security audit logs are not the sole business-history source.
- Metrics such as first-response time, FUT, conversion, follow-up workload and assignment performance must be based on durable business facts rather than UI-only counters.

## 26. What the screenshots are and are not

The supplied historical CRM screenshots establish that the prior system supported client details, project information, a timeline, response/sub-response follow-up capture, next follow-up scheduling, success/dump pathways, transfer controls, card/table work queues and advanced filters.

They do **NOT** establish that BMexa must copy the same page layout, visual hierarchy, colors, typography, component style or interaction design. BMexa visual UX will be designed from first principles after the business and architecture layers are sufficiently stable.

## 27. Known decisions already recorded in architecture documents

| Topic | Current direction |
|---|---|
| Lead lifecycle | Four-value direction: New / Follow-up / Success / Dump. |
| Today / Future / Overdue | Derived operational/action-feed buckets, not lifecycle states. |
| Pending | Not a fifth lifecycle state; BMexa terminology is Overdue for overdue scheduled follow-up. |
| Success | Booked/Stage 3 milestone after the qualifying builder-side booking verification milestone. |
| Success reversal | No ordinary lifecycle reversal out of Success; valid historical Success remains Success even if downstream Booking later cancels. |
| Dump reason | Required on terminal non-conversion disposition; final value vocabulary remains open. |
| Sync vs verification | Separate concepts; successful synchronization does not imply business verification. |
| Assignment State | No separate persisted Assignment State axis approved; Owner/Handler/Assignment History remain the current direction. |
| History | Underlying history remains intact; visibility is controlled independently. |
| Q5 prior recommendation | Re-engagement/revival direction is under re-analysis after the Product Owner's real-world CRM workflow clarification. |

## 28. Explicitly OPEN / NOT YET DECIDED

- Exact definition of a genuinely new commercial sales opportunity versus a re-engagement/revival of an existing Lead.
- Exact conceptual model for revived Lead history, current-state presentation and any bounded sales episode concept.
- Exact persistence/derivation mechanism for the 'Blocked / awaiting next move' operational qualifier.
- Which users/actors can establish Success and what authoritative event does so automatically or through controlled approval.
- Final Dump reason vocabulary and whether each reason is recoverable/revisitable.
- Exact 'with history' / 'without history' transfer semantics and their authorization boundaries.
- Whether automatic return to a historical handler grants the same historical visibility as explicit Sales Head assignment.
- Exact definition and reporting treatment of multiple project interests on one Lead.
- Exact business rules for assignment hierarchy/scopes.
- Remaining Lead State Machine questions in AD-01 and related cross-domain blockers.
- Final Booking state machine and inventory hold/booking integration details.
- Final Customer Support, Customer Portal and document-access boundaries.

## 29. Non-goals for the Base Version

- Construction ERP / BOQ / project execution management.
- HR/payroll.
- Full double-entry accounting replacement.
- Payment gateway / escrow / refund platform.
- Resale/rental marketplace.
- AI voicebot/IVR as a core MVP requirement.
- Native mobile app MVP; the current mobile scaffold remains dormant/frozen.
- Microservices solely for architectural fashion; use demonstrated need.
- Dedicated search engine without measured need.

## 30. Build governance for this requirements base

This document should be treated as a Product-Owner source baseline. Before implementation:

- Architectural contradictions must be resolved explicitly and recorded in dated decision documents.
- No schema/code implementation should be inferred from an unresolved product ambiguity.
- Claude Code must follow the repository's CLAUDE.md/AGENTS.md, required routing, Beads/task workflow, testing/security rules and skill routing.
- A human developer receives this document as requirements context, but architecture decisions still require the same explicit approvals.
- Visual design will start only after the required business architecture and information architecture are sufficiently stable.
- Later Product-Owner memories may be added as change records rather than silently rewriting prior decisions.

## 31. Product-Owner source principles emerging from the current discussion

- Model the real sales operation first; do not force it into a generic CRM pattern.
- Keep Lead identity, lifecycle, activities, next actions, assignment, attribution and history visibility conceptually separate.
- Preserve historical truth: do not rewrite what was true at the time.
- Do not treat system-generated events as equivalent to user-performed sales work.
- Do not duplicate data entry when a downstream team is only supposed to verify the upstream record.
- Do not treat a recorded payment as verified money until Accounts confirms it.
- Management controls such as transfer and history sharing require real authorization, not UI-only hiding.
- Screenshots are workflow evidence, not visual design constraints.
- Prefer deliberate architecture over rushing into implementation.

## 32. Immediate next step

This consolidated document should now be used as the business-process baseline for the architect. The next architecture task should be a formal challenge of the consolidated Lead/Client workflow, including the newly clarified real-world transfer and history-sharing behavior, before schema design begins.

**Recommended document status: SOURCE CONSOLIDATED — READY FOR ARCHITECT REVIEW; NOT APPROVED FOR IMPLEMENTATION.**
