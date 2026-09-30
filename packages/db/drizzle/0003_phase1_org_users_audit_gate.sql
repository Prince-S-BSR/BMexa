CREATE TABLE "departments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"code" text NOT NULL,
	"label" text NOT NULL,
	"description" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_system" boolean DEFAULT false NOT NULL,
	"custom_attributes" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "departments_tenant_id_id_key" UNIQUE("tenant_id","id"),
	CONSTRAINT "departments_code_format" CHECK (code ~ '^[a-z0-9]+(_[a-z0-9]+)*$'),
	CONSTRAINT "departments_custom_attributes_is_object" CHECK (jsonb_typeof(custom_attributes) = 'object')
);
--> statement-breakpoint
ALTER TABLE "departments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "designations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"code" text NOT NULL,
	"label" text NOT NULL,
	"description" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_system" boolean DEFAULT false NOT NULL,
	"custom_attributes" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "designations_tenant_id_id_key" UNIQUE("tenant_id","id"),
	CONSTRAINT "designations_code_format" CHECK (code ~ '^[a-z0-9]+(_[a-z0-9]+)*$'),
	CONSTRAINT "designations_custom_attributes_is_object" CHECK (jsonb_typeof(custom_attributes) = 'object')
);
--> statement-breakpoint
ALTER TABLE "designations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "employees" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"department_id" uuid,
	"designation_id" uuid,
	"reports_to_employee_id" uuid,
	"custom_attributes" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "employees_tenant_id_id_key" UNIQUE("tenant_id","id"),
	CONSTRAINT "employees_not_own_manager" CHECK (reports_to_employee_id IS NULL OR reports_to_employee_id <> id),
	CONSTRAINT "employees_custom_attributes_is_object" CHECK (jsonb_typeof(custom_attributes) = 'object')
);
--> statement-breakpoint
ALTER TABLE "employees" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_role_grants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"employee_id" uuid NOT NULL,
	"role_id" uuid NOT NULL,
	"role_grant_scope" text DEFAULT 'project' NOT NULL,
	"project_id" uuid NOT NULL,
	"granted_by_user_id" uuid,
	"granted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"revoked_at" timestamp with time zone,
	"revoked_by_user_id" uuid,
	CONSTRAINT "project_role_grants_role_grant_scope_is_project" CHECK (role_grant_scope = 'project'),
	CONSTRAINT "project_role_grants_revoked_after_granted" CHECK (revoked_at IS NULL OR revoked_at >= granted_at),
	CONSTRAINT "project_role_grants_revoker_implies_revoked" CHECK (revoked_by_user_id IS NULL OR revoked_at IS NOT NULL)
);
--> statement-breakpoint
ALTER TABLE "project_role_grants" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"name" text NOT NULL,
	"custom_attributes" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "projects_tenant_id_id_key" UNIQUE("tenant_id","id"),
	CONSTRAINT "projects_custom_attributes_is_object" CHECK (jsonb_typeof(custom_attributes) = 'object')
);
--> statement-breakpoint
ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "audit_events" DROP CONSTRAINT "audit_events_actor_type_check";--> statement-breakpoint
ALTER TABLE "audit_events" DROP CONSTRAINT "audit_events_event_category_check";--> statement-breakpoint
ALTER TABLE "audit_events" DROP CONSTRAINT "audit_events_tenant_id_fkey";
--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "before_state" jsonb;--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "after_state" jsonb;--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "supersedes_event_id" uuid;--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "supersedes_occurred_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "supersession_kind" text;--> statement-breakpoint
ALTER TABLE "audit_events" ADD COLUMN "supersession_reason" text;--> statement-breakpoint
ALTER TABLE "user_roles" ADD COLUMN "role_grant_scope" text DEFAULT 'tenant' NOT NULL;--> statement-breakpoint
ALTER TABLE "departments" ADD CONSTRAINT "departments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "designations" ADD CONSTRAINT "designations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_fk" FOREIGN KEY ("tenant_id","user_id") REFERENCES "public"."users"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_department_fk" FOREIGN KEY ("tenant_id","department_id") REFERENCES "public"."departments"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_designation_fk" FOREIGN KEY ("tenant_id","designation_id") REFERENCES "public"."designations"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_reports_to_fk" FOREIGN KEY ("tenant_id","reports_to_employee_id") REFERENCES "public"."employees"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_employee_fk" FOREIGN KEY ("tenant_id","employee_id") REFERENCES "public"."employees"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_role_scope_fk" FOREIGN KEY ("tenant_id","role_id","role_grant_scope") REFERENCES "public"."roles"("tenant_id","id","grant_scope") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_project_fk" FOREIGN KEY ("tenant_id","project_id") REFERENCES "public"."projects"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_granted_by_fk" FOREIGN KEY ("tenant_id","granted_by_user_id") REFERENCES "public"."users"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_role_grants" ADD CONSTRAINT "project_role_grants_revoked_by_fk" FOREIGN KEY ("tenant_id","revoked_by_user_id") REFERENCES "public"."users"("tenant_id","id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "departments_tenant_code_key" ON "departments" USING btree ("tenant_id","code");--> statement-breakpoint
CREATE INDEX "departments_tenant_active_idx" ON "departments" USING btree ("tenant_id","sort_order","label") WHERE is_active;--> statement-breakpoint
CREATE UNIQUE INDEX "designations_tenant_code_key" ON "designations" USING btree ("tenant_id","code");--> statement-breakpoint
CREATE INDEX "designations_tenant_active_idx" ON "designations" USING btree ("tenant_id","sort_order","label") WHERE is_active;--> statement-breakpoint
CREATE UNIQUE INDEX "employees_tenant_user_key" ON "employees" USING btree ("tenant_id","user_id");--> statement-breakpoint
CREATE INDEX "employees_tenant_reports_to_idx" ON "employees" USING btree ("tenant_id","reports_to_employee_id") WHERE reports_to_employee_id IS NOT NULL;--> statement-breakpoint
CREATE INDEX "employees_tenant_department_idx" ON "employees" USING btree ("tenant_id","department_id") WHERE department_id IS NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "project_role_grants_active_key" ON "project_role_grants" USING btree ("tenant_id","employee_id","role_id","project_id") WHERE revoked_at IS NULL;--> statement-breakpoint
CREATE INDEX "project_role_grants_tenant_project_role_idx" ON "project_role_grants" USING btree ("tenant_id","project_id","role_id") WHERE revoked_at IS NULL;--> statement-breakpoint
CREATE INDEX "project_role_grants_tenant_employee_idx" ON "project_role_grants" USING btree ("tenant_id","employee_id") WHERE revoked_at IS NULL;--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersedes_fk" FOREIGN KEY ("tenant_id","supersedes_event_id","supersedes_occurred_at") REFERENCES "public"."audit_events"("tenant_id","id","occurred_at") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_scope_fk" FOREIGN KEY ("tenant_id","role_id","role_grant_scope") REFERENCES "public"."roles"("tenant_id","id","grant_scope") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "audit_events_tenant_supersedes_idx" ON "audit_events" USING btree ("tenant_id","supersedes_event_id","supersedes_occurred_at") WHERE supersedes_event_id IS NOT NULL;--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_before_state_is_object" CHECK (before_state IS NULL OR jsonb_typeof(before_state) = 'object');--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_after_state_is_object" CHECK (after_state IS NULL OR jsonb_typeof(after_state) = 'object');--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_all_or_nothing" CHECK ((supersedes_event_id IS NULL AND supersedes_occurred_at IS NULL AND supersession_kind IS NULL AND supersession_reason IS NULL)
          OR (supersedes_event_id IS NOT NULL AND supersedes_occurred_at IS NOT NULL AND supersession_kind IS NOT NULL));--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_kind_valid" CHECK (supersession_kind IS NULL OR supersession_kind IN ('correction', 'retraction'));--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_reason_required" CHECK (supersedes_event_id IS NULL OR (supersession_reason IS NOT NULL AND btrim(supersession_reason) <> ''));--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_actor_identified" CHECK (supersedes_event_id IS NULL OR (actor_type = 'user' AND actor_user_id IS NOT NULL AND actor_label IS NOT NULL));--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_category_is_audit" CHECK (supersedes_event_id IS NULL OR event_category = 'audit');--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_supersession_after_target" CHECK (supersedes_occurred_at IS NULL OR supersedes_occurred_at <= occurred_at);--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_correction_has_after_state" CHECK (supersession_kind IS DISTINCT FROM 'correction' OR after_state IS NOT NULL);--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_actor_type_check" CHECK (actor_type IN ('user', 'system', 'api_key', 'integration', 'support', 'anonymous'));--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_event_category_check" CHECK (event_category IN ('general', 'auth', 'rbac', 'billing', 'data', 'integration', 'admin', 'security', 'audit'));--> statement-breakpoint
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_grant_scope_is_tenant" CHECK (role_grant_scope = 'tenant');--> statement-breakpoint
CREATE POLICY "tenant_isolation" ON "departments" AS PERMISSIVE FOR ALL TO public USING (tenant_id = app_current_tenant_id()) WITH CHECK (tenant_id = app_current_tenant_id());--> statement-breakpoint
CREATE POLICY "tenant_isolation" ON "designations" AS PERMISSIVE FOR ALL TO public USING (tenant_id = app_current_tenant_id()) WITH CHECK (tenant_id = app_current_tenant_id());--> statement-breakpoint
CREATE POLICY "tenant_isolation" ON "employees" AS PERMISSIVE FOR ALL TO public USING (tenant_id = app_current_tenant_id()) WITH CHECK (tenant_id = app_current_tenant_id());--> statement-breakpoint
CREATE POLICY "tenant_isolation" ON "project_role_grants" AS PERMISSIVE FOR ALL TO public USING (tenant_id = app_current_tenant_id()) WITH CHECK (tenant_id = app_current_tenant_id());--> statement-breakpoint
CREATE POLICY "tenant_isolation" ON "projects" AS PERMISSIVE FOR ALL TO public USING (tenant_id = app_current_tenant_id()) WITH CHECK (tenant_id = app_current_tenant_id());