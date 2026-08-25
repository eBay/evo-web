#!/usr/bin/env node
"use strict";

/**
 * SessionStart hook: surfaces short, high-decay context a fresh session has
 * no other way to discover — unfinished pipeline work, and a nudge toward
 * the agent-feedback and agent-lessons backlogs. Fires on every session
 * start/resume/fork, so this must stay a cheap filesystem check, never a
 * build or lint.
 *
 * Output contract: plain stdout on exit 0 is added directly to Claude's
 * context for this event (no JSON envelope needed). This hook never blocks —
 * unlike the Stop hook, SessionStart has no equivalent of exit-2 blocking;
 * it can only inform.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "../..");
const COMPONENTS_BASE = path.join(REPO_ROOT, "src/routes/_index/components");
const AGENT_FEEDBACK_ITEMS = path.join(REPO_ROOT, "agent-feedback/items");
const AGENT_LESSONS_ITEMS = path.join(REPO_ROOT, "agent-lessons/items");

function findInProgressPipelines() {
  if (!fs.existsSync(COMPONENTS_BASE)) return [];

  let components;
  try {
    components = fs
      .readdirSync(COMPONENTS_BASE, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch (e) {
    return [];
  }

  const inProgress = [];
  for (const name of components) {
    const statePath = path.join(COMPONENTS_BASE, name, "pipeline-state.json");
    if (!fs.existsSync(statePath)) continue;

    let state;
    try {
      state = JSON.parse(fs.readFileSync(statePath, "utf8"));
    } catch (e) {
      inProgress.push({ name, corrupt: true });
      continue;
    }

    const steps = state.steps || {};
    const steppedNames = Object.entries(steps)
      .filter(([, v]) => v.status === "in-progress")
      .map(([k]) => k);
    if (steppedNames.length) {
      inProgress.push({ name: state.component || name, steps: steppedNames });
    }
  }
  return inProgress;
}

function countMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return 0;
  try {
    return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).length;
  } catch (e) {
    return 0;
  }
}

function main() {
  const lines = [];

  const inProgress = findInProgressPipelines();
  if (inProgress.length) {
    lines.push("⚠️  Unfinished component pipeline work found:");
    for (const p of inProgress) {
      if (p.corrupt) {
        lines.push(
          "  - " +
            p.name +
            ": pipeline-state.json is corrupt — treat as unresolved, see evo-pipeline SKILL.md.",
        );
      } else {
        lines.push(
          "  - " +
            p.name +
            ": step(s) " +
            p.steps.join(", ") +
            " still in-progress. Run /evo-pipeline " +
            p.name +
            " to resume.",
        );
      }
    }
  }

  const feedbackCount = countMarkdownFiles(AGENT_FEEDBACK_ITEMS);
  if (feedbackCount > 0) {
    lines.push(
      "ℹ️  agent-feedback/items/ has " +
        feedbackCount +
        " unresolved item" +
        (feedbackCount === 1 ? "" : "s") +
        " — not urgent, but worth a glance if you have a lull: see agent-feedback/README.md.",
    );
  }

  const lessonsCount = countMarkdownFiles(AGENT_LESSONS_ITEMS);
  if (lessonsCount > 0) {
    lines.push(
      "ℹ️  agent-lessons/items/ has " +
        lessonsCount +
        " open entr" +
        (lessonsCount === 1 ? "y" : "ies") +
        " — see agent-lessons/README.md.",
    );
  }

  if (lines.length) {
    process.stdout.write("\n" + lines.join("\n") + "\n");
  }

  process.exit(0);
}

main();
