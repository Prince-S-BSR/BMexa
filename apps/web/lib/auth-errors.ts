// apps/web/lib/auth-errors.ts
//
// Plain-English copy for the error codes apps/api/src/routes/auth.ts's
// /auth/login and /auth/signup can return, forwarded verbatim by
// app/api/auth/{login,signup}/route.ts, plus the handful of codes those
// Route Handlers can return themselves (missing_fields, invalid_json,
// *_request_failed). Centralized so /login and /signup (components/auth/
// login-form.tsx, signup-form.tsx) show the same wording for the same
// failure instead of drifting.
//
// `invalid_credentials` deliberately does not say which of
// subdomain/email/password was wrong — auth.ts's own header comment on
// /auth/login explains why (no account/subdomain enumeration via response
// shape or timing); this copy preserves that rather than being more
// specific.

export interface AuthErrorBody {
  error?: string;
  lockedUntil?: string;
  minLength?: number;
  [key: string]: unknown;
}

export function loginErrorMessage(body: AuthErrorBody): string {
  switch (body.error) {
    case "invalid_credentials":
      return "Invalid email, password, or workspace.";
    case "account_locked": {
      const until = body.lockedUntil ? new Date(body.lockedUntil) : null;
      const untilText =
        until && !Number.isNaN(until.getTime())
          ? ` Try again after ${until.toLocaleTimeString()}.`
          : " Try again later.";
      return `Too many failed attempts.${untilText}`;
    }
    case "subdomain_required":
    case "email_required":
    case "password_required":
    case "missing_fields":
      return "Please fill in every field.";
    case "invalid_json":
      return "Something went wrong submitting the form. Please try again.";
    case "login_request_failed":
      return "Couldn't reach the server. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export function signupErrorMessage(body: AuthErrorBody): string {
  switch (body.error) {
    case "subdomain_taken":
      return "That workspace URL is already taken. Try a different one.";
    case "subdomain_invalid_format":
      return "Workspace URL can only contain lowercase letters, numbers, and hyphens.";
    case "password_too_short":
      return `Password must be at least ${body.minLength ?? 8} characters.`;
    case "subdomain_required":
    case "tenant_name_required":
    case "email_required":
    case "password_required":
    case "missing_fields":
      return "Please fill in every field.";
    case "invalid_json":
      return "Something went wrong submitting the form. Please try again.";
    case "signup_request_failed":
      return "Couldn't reach the server. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
