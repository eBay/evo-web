#!/usr/bin/env node
"use strict";

/**
 * Stop hook: blocks Claude Code from ending a session while a component
 * pipeline run has a step still marked in-progress.
 *
 * Exit codes:
 *   0 — safe to stop (nothing in-progress, or nothing to check)
 *   1 — hook could not complete its check (treat as NOT verified — do not stop)
 *   2 — an in-progress or corrupt/unverifiable step was found — do not stop
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "../..");
const COMPONENTS_BASE = path.join(REPO_ROOT, "src/routes/_index/components");

function fail(message) {
  process.stderr.write(
    "\n🔴 Stop-hook check failed — could not verify pipeline state.\n" +
      "  " +
      message +
      "\n" +
      "  Treat this as unverified: do not stop until you can confirm no pipeline step is in-progress.\n",
  );
  process.exit(1);
}

function main() {
  if (!fs.existsSync(COMPONENTS_BASE)) {
    process.exit(0);
  }

  let components;
  try {
    components = fs
      .readdirSync(COMPONENTS_BASE, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch (e) {
    return fail("Could not read " + COMPONENTS_BASE + ": " + e.message);
  }

  let blockStop = false;

  for (const name of components) {
    const statePath = path.join(COMPONENTS_BASE, name, "pipeline-state.json");
    if (!fs.existsSync(statePath)) continue;

    let raw;
    try {
      raw = fs.readFileSync(statePath, "utf8");
    } catch (e) {
      blockStop = true;
      process.stdout.write(
        '\n⚠️  pipeline-state.json could not be read for component "' +
          name +
          '" — do not stop.\n' +
          "  Path: " +
          statePath +
          "\n" +
          "  Error: " +
          e.message +
          "\n" +
          "  An unreadable state file is not a known-safe state. Fix the error, then re-run\n" +
          "  this check before stopping — other components are still checked below.\n",
      );
      continue;
    }

    let state;
    try {
      state = JSON.parse(raw);
    } catch (e) {
      blockStop = true;
      process.stdout.write(
        '\n⚠️  pipeline-state.json is corrupt for component "' +
          name +
          '" — do not stop.\n' +
          "  Path: " +
          statePath +
          "\n" +
          "  Corrupt state is not a known-safe state. Read the file, then fix or reset it\n" +
          "  (see evo-pipeline SKILL.md) before stopping.\n",
      );
      continue;
    }

    const steps = state.steps || {};
    const inProgress = Object.entries(steps).filter(
      ([, v]) => v.status === "in-progress",
    );
    if (inProgress.length) {
      blockStop = true;
      process.stdout.write(
        "\n⚠️  PIPELINE IN-PROGRESS — do not stop.\n" +
          "  Component: " +
          (state.component || name) +
          "\n" +
          "  Step " +
          inProgress.map(([k]) => k).join(", ") +
          " is still in-progress.\n" +
          "  Read pipeline-state.json and advance to the next step before stopping.\n",
      );
    }
  }

  if (blockStop) process.exit(2);
  process.exit(0);
}

main();
