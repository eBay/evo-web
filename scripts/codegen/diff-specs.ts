#!/usr/bin/env node
/**
 * diff-specs.ts
 *
 * Compares two *.spec.json files and produces a structured change summary with
 * a recommended pipeline scope (style | static | interactive | full).
 *
 * Usage:
 *   npx tsx scripts/codegen/diff-specs.ts <old-spec-path> <new-spec-path> [component-name]
 *
 * Outputs a human-readable report to stdout.
 * When component-name is provided, also writes the diff to:
 *   src/routes/_index/components/<name>/spec-diff.json
 */

/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// ── Types ─────────────────────────────────────────────────────────────────────

interface SpecProp {
    type?: string;
    enum?: unknown[];
    default?: unknown;
    required?: boolean;
    description?: string;
}

interface SpecSlot {
    required?: boolean;
    description?: string;
}

interface Spec {
    component?: string;
    version?: string;
    props?: Record<string, SpecProp>;
    slots?: Record<string, SpecSlot>;
    states?: { state?: string[] };
    tokens?: Record<string, string>;
    metadata?: { figma?: { fileKey?: string } };
}

type Scope = "style" | "static" | "interactive" | "full";

interface FieldChange {
    field: string;
    old: unknown;
    new: unknown;
}

interface SectionDiff {
    added: string[];
    removed: string[];
    modified: FieldChange[];
}

interface SpecDiff {
    oldVersion: string | null;
    newVersion: string | null;
    hasChanges: boolean;
    sections: {
        tokens: SectionDiff;
        props: SectionDiff;
        slots: SectionDiff;
        states: SectionDiff;
        metadata: SectionDiff;
    };
    recommendedScope: Scope;
    scopeReason: string;
    layersTouched: string[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function diffStringRecord(
    oldRec: Record<string, unknown> = {},
    newRec: Record<string, unknown> = {}
): SectionDiff {
    const oldKeys = new Set(Object.keys(oldRec));
    const newKeys = new Set(Object.keys(newRec));
    const added = [...newKeys].filter((k) => !oldKeys.has(k));
    const removed = [...oldKeys].filter((k) => !newKeys.has(k));
    const modified: FieldChange[] = [];

    for (const key of oldKeys) {
        if (newKeys.has(key)) {
            const o = JSON.stringify(oldRec[key]);
            const n = JSON.stringify(newRec[key]);
            if (o !== n) {
                modified.push({ field: key, old: oldRec[key], new: newRec[key] });
            }
        }
    }

    return { added, removed, modified };
}

function diffStringArray(old: string[] = [], next: string[] = []): SectionDiff {
    const oldSet = new Set(old);
    const newSet = new Set(next);
    return {
        added: [...newSet].filter((s) => !oldSet.has(s)),
        removed: [...oldSet].filter((s) => !newSet.has(s)),
        modified: [],
    };
}

function isEmpty(d: SectionDiff): boolean {
    return d.added.length === 0 && d.removed.length === 0 && d.modified.length === 0;
}

function inferScope(diff: Omit<SpecDiff, "recommendedScope" | "scopeReason" | "layersTouched">): {
    scope: Scope;
    reason: string;
    layers: string[];
} {
    const { tokens, props, slots, states, metadata } = diff.sections;
    const layers: string[] = [];

    const tokensChanged = !isEmpty(tokens);
    const propsChanged = !isEmpty(props);
    const slotsChanged = !isEmpty(slots);
    const statesChanged = !isEmpty(states);
    const metadataChanged = !isEmpty(metadata);

    // Classify prop changes: enum-only changes (new type values) are static;
    // structural prop changes (new/removed props, type changes) are interactive.
    const enumOnlyModified = props.modified.every((m) => {
        const o = m.old as SpecProp;
        const n = m.new as SpecProp;
        return o.type === n.type && JSON.stringify(o.enum) !== JSON.stringify(n.enum) &&
            o.required === n.required && o.default === n.default;
    });
    const hasStructuralPropChanges =
        props.added.length > 0 || props.removed.length > 0 ||
        props.modified.some((m) => {
            const o = m.old as SpecProp;
            const n = m.new as SpecProp;
            return o.type !== n.type || o.required !== n.required;
        });
    const hasEnumExpansion = props.modified.some((m) => {
        const o = m.old as SpecProp;
        const n = m.new as SpecProp;
        return JSON.stringify(o.enum) !== JSON.stringify(n.enum);
    });

    if (tokensChanged) layers.push("style");
    if (statesChanged || hasEnumExpansion || (!hasStructuralPropChanges && propsChanged)) {
        layers.push("static");
    }
    if (hasStructuralPropChanges || slotsChanged) layers.push("interactive");

    // Deduplicate and determine scope
    const uniqueLayers = [...new Set(layers)];

    if (!propsChanged && !slotsChanged && !statesChanged && !metadataChanged && tokensChanged) {
        return {
            scope: "style",
            reason: "Only design tokens changed — SCSS variables update only, no structural or behavioral changes.",
            layers: ["style"],
        };
    }

    if (uniqueLayers.length === 0) {
        return {
            scope: "style",
            reason: "No spec-tracked fields changed. Verify manually — changes may be in contract prose only.",
            layers: [],
        };
    }

    if (uniqueLayers.length === 1) {
        const layer = uniqueLayers[0];

        if (layer === "style") {
            return { scope: "style", reason: "Only token values changed.", layers: ["style"] };
        }

        if (layer === "static") {
            const reasons: string[] = [];
            if (statesChanged) {
                if (states.added.length) reasons.push(`${states.added.length} new state(s) added: ${states.added.join(", ")}`);
                if (states.removed.length) reasons.push(`${states.removed.length} state(s) removed: ${states.removed.join(", ")}`);
            }
            if (hasEnumExpansion) {
                const changed = props.modified.filter((m) => {
                    const o = m.old as SpecProp;
                    const n = m.new as SpecProp;
                    return JSON.stringify(o.enum) !== JSON.stringify(n.enum);
                });
                reasons.push(`enum expansion on: ${changed.map((c) => c.field).join(", ")} — new BEM modifiers likely needed`);
            }
            return {
                scope: "static",
                reason: `HTML structure or SCSS changes only: ${reasons.join("; ")}.`,
                layers: ["static"],
            };
        }

        if (layer === "interactive") {
            const reasons: string[] = [];
            if (props.added.length) reasons.push(`${props.added.length} new prop(s): ${props.added.join(", ")}`);
            if (props.removed.length) reasons.push(`${props.removed.length} prop(s) removed: ${props.removed.join(", ")}`);
            if (slotsChanged && slots.added.length) reasons.push(`${slots.added.length} new slot(s): ${slots.added.join(", ")}`);
            if (slotsChanged && slots.removed.length) reasons.push(`${slots.removed.length} slot(s) removed: ${slots.removed.join(", ")}`);
            return {
                scope: "interactive",
                reason: `Marko and React interfaces change: ${reasons.join("; ")}.`,
                layers: ["interactive"],
            };
        }
    }

    // Multiple layers
    const reasons: string[] = [];
    if (uniqueLayers.includes("style")) reasons.push("token changes");
    if (uniqueLayers.includes("static")) reasons.push("structural/CSS changes");
    if (uniqueLayers.includes("interactive")) reasons.push("prop/slot interface changes");

    return {
        scope: "full",
        reason: `Changes span multiple layers: ${reasons.join(" + ")}.`,
        layers: uniqueLayers,
    };
}

function componentDocsDir(name: string): string {
    const block = name.replace(/^evo-/, "");
    return path.resolve("src/routes/_index/components", block);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const [oldSpecPath, newSpecPath, componentName] = process.argv.slice(2);

if (!oldSpecPath || !newSpecPath) {
    console.error("Usage: diff-specs.ts <old-spec-path> <new-spec-path> [component-name]");
    process.exit(1);
}

if (!fs.existsSync(oldSpecPath)) {
    console.error(`Old spec not found: ${oldSpecPath}`);
    process.exit(1);
}
if (!fs.existsSync(newSpecPath)) {
    console.error(`New spec not found: ${newSpecPath}`);
    process.exit(1);
}

const oldSpec: Spec = JSON.parse(fs.readFileSync(oldSpecPath, "utf-8"));
const newSpec: Spec = JSON.parse(fs.readFileSync(newSpecPath, "utf-8"));

// ── Diff each section ─────────────────────────────────────────────────────────

const sections = {
    tokens: diffStringRecord(
        oldSpec.tokens as Record<string, unknown>,
        newSpec.tokens as Record<string, unknown>
    ),
    props: diffStringRecord(
        oldSpec.props as Record<string, unknown>,
        newSpec.props as Record<string, unknown>
    ),
    slots: diffStringRecord(
        oldSpec.slots as Record<string, unknown>,
        newSpec.slots as Record<string, unknown>
    ),
    states: diffStringArray(oldSpec.states?.state, newSpec.states?.state),
    metadata: diffStringRecord(
        (oldSpec.metadata ?? {}) as Record<string, unknown>,
        (newSpec.metadata ?? {}) as Record<string, unknown>
    ),
};

const hasChanges = Object.values(sections).some((s) => !isEmpty(s));
const { scope, reason, layers } = inferScope({ oldVersion: oldSpec.version ?? null, newVersion: newSpec.version ?? null, hasChanges, sections });

const result: SpecDiff = {
    oldVersion: oldSpec.version ?? null,
    newVersion: newSpec.version ?? null,
    hasChanges,
    sections,
    recommendedScope: scope,
    scopeReason: reason,
    layersTouched: layers,
};

// ── Write spec-diff.json if component name provided ───────────────────────────

if (componentName) {
    const outPath = path.join(componentDocsDir(componentName), "spec-diff.json");
    fs.writeFileSync(outPath, JSON.stringify(result, null, 2) + "\n", "utf-8");
}

// ── Human-readable output ─────────────────────────────────────────────────────

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  Spec Diff");
if (oldSpec.version || newSpec.version) {
    console.log(`  v${oldSpec.version ?? "?"} → v${newSpec.version ?? "?"}`);
}
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

if (!hasChanges) {
    console.log("  No changes detected between specs.\n");
} else {
    const printSection = (label: string, diff: SectionDiff) => {
        if (isEmpty(diff)) return;
        console.log(`  ── ${label} ${"─".repeat(Math.max(0, 48 - label.length))}`);
        for (const k of diff.added) console.log(`    + ${k}  (added)`);
        for (const k of diff.removed) console.log(`    - ${k}  (removed)`);
        for (const m of diff.modified) {
            const oldEnum = (m.old as SpecProp)?.enum;
            const newEnum = (m.new as SpecProp)?.enum;
            if (oldEnum && newEnum) {
                const oldVals = oldEnum as string[];
                const newVals = newEnum as string[];
                const addedVals = newVals.filter((v) => !oldVals.includes(v));
                const removedVals = oldVals.filter((v) => !newVals.includes(v));
                const parts: string[] = [];
                if (addedVals.length) parts.push(`+[${addedVals.join(", ")}]`);
                if (removedVals.length) parts.push(`-[${removedVals.join(", ")}]`);
                console.log(`    ~ ${m.field}  enum: ${parts.join(", ")}`);
            } else {
                console.log(`    ~ ${m.field}  changed`);
            }
        }
        console.log();
    };

    printSection("Props", sections.props);
    printSection("Tokens", sections.tokens);
    printSection("Slots", sections.slots);
    printSection("States", sections.states);
    printSection("Metadata", sections.metadata);
}

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  Recommended scope: ${scope.toUpperCase()}`);
console.log(`  ${reason}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
