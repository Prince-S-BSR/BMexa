// apps/api/src/lib/password.ts
//
// Password hashing for `users.password_hash` (Beads issue Final-Verison-r1r,
// signup). Deliberately a SEPARATE primitive from lib/session-token.ts's
// SHA-256: that file hashes an already-random, high-entropy 256-bit bearer
// token, where (per its own header comment) "there is nothing to slow an
// attacker down against". A password is the opposite case — low-entropy,
// user-chosen input that must resist an offline dictionary/brute-force
// attack against a stolen `password_hash` column — so it needs a
// purpose-built, memory-hard KDF instead of a fast general-purpose hash.
//
// Library choice: argon2 (this library's default mode is Argon2id) over
// bcrypt — it is the PHC (Password Hashing Competition) winner, is
// memory-hard (bcrypt is not, which matters against GPU/ASIC attackers), and
// is OWASP's current recommended default for new applications. `argon2`
// (node-argon2) ships prebuilt native bindings for this platform (verified
// at install time in this environment), so it adds no build-toolchain
// requirement beyond the existing npm install.

import argon2 from "argon2";

/** Hashes a plaintext password for storage in `users.password_hash`. */
export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password);
}

/**
 * Verifies a plaintext password against a stored argon2 hash. Returns false
 * (rather than throwing) both for a genuine mismatch and for a malformed or
 * foreign hash — argon2.verify() throws in the latter case, and a caller
 * checking credentials should not have to distinguish "wrong password" from
 * "unreadable hash"; both mean "reject this login".
 */
export async function verifyPassword(hash: string, password: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch {
    return false;
  }
}
