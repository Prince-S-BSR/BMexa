import Fastify from "fastify";

const PORT = Number(process.env.PORT ?? 4000);
const HOST = process.env.HOST ?? "0.0.0.0";

const app = Fastify({
  logger: true,
});

// Phase 0 scope: infrastructure scaffolding only. No product routes.
// See docs/ROADMAP.md — CRM business objects (contacts, deals, etc.) land in
// Phase 1, built on top of the data-access layer described in
// docs/architecture/00-phase-0-architecture-note.md §2.1/§3.3.
app.get("/health", async () => {
  return { status: "ok" };
});

async function start() {
  try {
    await app.listen({ port: PORT, host: HOST });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
