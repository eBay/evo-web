#!/usr/bin/env node
"use strict";

/**
 * Stop hook: prints a non-blocking reminder to check the session itself for
 * agent-lessons-worthy moments (corrections, wrong turns that cost real
 * rework, guardrails that fired — including ones self-corrected before the
 * user noticed) before stopping. See CLAUDE.md "Agent Lessons".
 *
 * Unlike check-pipeline-stop.js, there is no file on disk that proves a
 * lesson does or doesn't exist — whether this session had one is a
 * judgment call only the agent can make, so this can only ever remind, not
 * verify or block. Always exits 0.
 */

process.stdout.write(
  "\nℹ️  Before stopping: did this session include a correction, a wrong turn that cost\n" +
    "  real rework, or a guardrail firing — even one you caught and fixed yourself? If so,\n" +
    '  file it in agent-lessons/ before finishing (see CLAUDE.md "Agent Lessons"). If not,\n' +
    "  no action needed.\n",
);
process.exit(0);
