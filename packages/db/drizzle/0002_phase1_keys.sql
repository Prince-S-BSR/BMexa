ALTER TABLE "roles" ADD COLUMN "grant_scope" text DEFAULT 'tenant' NOT NULL;--> statement-breakpoint
ALTER TABLE "audit_events" ADD CONSTRAINT "audit_events_tenant_id_id_occurred_at_key" UNIQUE("tenant_id","id","occurred_at");--> statement-breakpoint
ALTER TABLE "roles" ADD CONSTRAINT "roles_tenant_id_id_grant_scope_key" UNIQUE("tenant_id","id","grant_scope");--> statement-breakpoint
ALTER TABLE "roles" ADD CONSTRAINT "roles_grant_scope_valid" CHECK (grant_scope IN ('tenant', 'project'));