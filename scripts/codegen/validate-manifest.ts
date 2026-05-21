#!/usr/bin/env node
/**
 * validate-manifest.ts
 *
 * Validates a component manifest.json against the required schema shape.
 * Reports structural errors (missing required fields, malformed arrays) and
 * surfaces blocking gaps (confidence: low or source: missing) that must be
 * resolved before Gate 2 approval.
 *
 * Usage:
 *   npx tsx scripts/codegen/validate-manifest.ts <component-name>
 *   npx tsx scripts/codegen/validate-manifest.ts accordion
 *
 * Exit codes:
 *   0 — valid (may still have medium-confidence warnings)
 *   1 — structural errors or blocking gaps present
 *
 * Reads: src/routes/_index/components/<name>/manifest.json
 */

/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Gap {
    field: string;
    assumed?: unknown;
    confidence: "high" | "medium" | "low";
    source: string;
    note?: string;
}

interface Manifest {
    component?: {
        name?: string;
        displayName?: string;
        description?: string;
        category?: string;
    };
    rootElement?: {
        default?: string;
    };
    bem?: {
        block?: string;
        elements?: unknown[];
        modifiers?: unknown[];
    };
    a11y?: {
        labelStrategy?: string;
        focusable?: boolean;
        focusTrap?: string;
    };
    props?: unknown[];
    a11yProps?: unknown[];
    slots?: unknown[];
    states?: unknown[];
    gaps?: Gap[];
    [key: string]: unknown;
}

interface Issue {
    severity: "error" | "warning";
    message: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function componentDocsDir(componentName: string): string {
    const block = componentName.replace(/^evo-/, "");
    return path.resolve("src/routes/_index/components", block);
}

function hasField(obj: Record<string, unknown>, field: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, field) && obj[field] !== undefined;
}

function checkArrayItems(
    arr: unknown[],
    requiredFields: string[],
    context: string,
    issues: Issue[]
): void {
    arr.forEach((item, i) => {
        if (typeof item !== "object" || item === null) {
            issues.push({ severity: "error", message: `${context}[${i}] is not an object` });
            return;
        }
        const obj = item as Record<string, unknown>;
        for (const field of requiredFields) {
            if (!hasField(obj, field)) {
                issues.push({
                    severity: "error",
                    message: `${context}[${i}] missing required field: "${field}"`,
                });
            }
        }
    });
}

const VALID_LABEL_STRATEGIES = new Set([
    "content",
    "aria-label-prop",
    "aria-labelledby",
    "aria-hidden",
    "compound-labelledby",
]);

const VALID_FOCUS_TRAPS = new Set(["browser-native", "javascript", "none"]);

// ── Main ──────────────────────────────────────────────────────────────────────

const componentName = process.argv[2];
if (!componentName) {
    console.error("Usage: validate-manifest.ts <component-name>");
    process.exit(1);
}

const manifestPath = path.join(componentDocsDir(componentName), "manifest.json");
if (!fs.existsSync(manifestPath)) {
    console.error(`No manifest found at ${manifestPath}`);
    process.exit(1);
}

const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const issues: Issue[] = [];

// ── Required top-level sections ───────────────────────────────────────────────

const REQUIRED_SECTIONS: string[] = ["component", "rootElement", "bem", "a11y", "gaps"];
for (const section of REQUIRED_SECTIONS) {
    if (!hasField(manifest as Record<string, unknown>, section)) {
        issues.push({ severity: "error", message: `Missing required top-level section: "${section}"` });
    }
}

// ── component ─────────────────────────────────────────────────────────────────

if (manifest.component) {
    const c = manifest.component;
    for (const field of ["name", "displayName", "description", "category"] as const) {
        if (!c[field]) {
            issues.push({ severity: "error", message: `component.${field} is missing or empty` });
        }
    }
    if (c.name && !c.name.startsWith("evo-")) {
        issues.push({ severity: "warning", message: `component.name "${c.name}" should start with "evo-"` });
    }
}

// ── rootElement ───────────────────────────────────────────────────────────────

if (manifest.rootElement && !manifest.rootElement.default) {
    issues.push({ severity: "error", message: "rootElement.default is missing" });
}

// ── bem ───────────────────────────────────────────────────────────────────────

if (manifest.bem) {
    if (!manifest.bem.block) {
        issues.push({ severity: "error", message: "bem.block is missing" });
    }
    if (manifest.bem.elements !== undefined) {
        if (!Array.isArray(manifest.bem.elements)) {
            issues.push({ severity: "error", message: "bem.elements must be an array" });
        } else {
            checkArrayItems(manifest.bem.elements, ["name"], "bem.elements", issues);
        }
    }
    if (manifest.bem.modifiers !== undefined) {
        if (!Array.isArray(manifest.bem.modifiers)) {
            issues.push({ severity: "error", message: "bem.modifiers must be an array" });
        } else {
            checkArrayItems(manifest.bem.modifiers, ["name"], "bem.modifiers", issues);
        }
    }
}

// ── a11y ──────────────────────────────────────────────────────────────────────

if (manifest.a11y) {
    const a = manifest.a11y;
    if (!a.labelStrategy) {
        issues.push({ severity: "error", message: "a11y.labelStrategy is missing" });
    } else if (!VALID_LABEL_STRATEGIES.has(a.labelStrategy)) {
        issues.push({
            severity: "error",
            message: `a11y.labelStrategy "${a.labelStrategy}" is not a recognized value. Valid: ${[...VALID_LABEL_STRATEGIES].join(", ")}`,
        });
    }
    if (typeof a.focusable !== "boolean") {
        issues.push({ severity: "error", message: "a11y.focusable must be a boolean" });
    }
    if (a.focusTrap !== undefined && !VALID_FOCUS_TRAPS.has(a.focusTrap)) {
        issues.push({
            severity: "error",
            message: `a11y.focusTrap "${a.focusTrap}" is not valid. Valid: ${[...VALID_FOCUS_TRAPS].join(", ")}`,
        });
    }
}

// ── props ─────────────────────────────────────────────────────────────────────

if (manifest.props !== undefined) {
    if (!Array.isArray(manifest.props)) {
        issues.push({ severity: "error", message: "props must be an array" });
    } else {
        checkArrayItems(manifest.props, ["name", "type", "required"], "props", issues);
    }
}

// ── a11yProps ─────────────────────────────────────────────────────────────────

if (manifest.a11yProps !== undefined) {
    if (!Array.isArray(manifest.a11yProps)) {
        issues.push({ severity: "error", message: "a11yProps must be an array" });
    } else {
        checkArrayItems(manifest.a11yProps, ["name", "type", "required"], "a11yProps", issues);
    }
}

// ── slots ─────────────────────────────────────────────────────────────────────

if (manifest.slots !== undefined) {
    if (!Array.isArray(manifest.slots)) {
        issues.push({ severity: "error", message: "slots must be an array" });
    } else {
        checkArrayItems(manifest.slots, ["name", "required"], "slots", issues);
    }
}

// ── states ────────────────────────────────────────────────────────────────────

if (manifest.states !== undefined) {
    if (!Array.isArray(manifest.states)) {
        issues.push({ severity: "error", message: "states must be an array" });
    } else {
        checkArrayItems(manifest.states, ["name"], "states", issues);
    }
}

// ── gaps ──────────────────────────────────────────────────────────────────────

const blockingGaps: Gap[] = [];
const warningGaps: Gap[] = [];

if (manifest.gaps !== undefined) {
    if (!Array.isArray(manifest.gaps)) {
        issues.push({ severity: "error", message: "gaps must be an array" });
    } else {
        checkArrayItems(manifest.gaps, ["field", "confidence", "source"], "gaps", issues);
        for (const gap of manifest.gaps) {
            if (gap.confidence === "low" || gap.source === "missing") {
                blockingGaps.push(gap);
            } else if (gap.confidence === "medium") {
                warningGaps.push(gap);
            }
        }
    }
}

// ── Output ────────────────────────────────────────────────────────────────────

const structuralErrors = issues.filter((i) => i.severity === "error");
const structuralWarnings = issues.filter((i) => i.severity === "warning");
const hasFailures = structuralErrors.length > 0 || blockingGaps.length > 0;

console.log(`\n validate-manifest: ${componentName}`);
console.log(`   ${path.relative(process.cwd(), manifestPath)}\n`);

if (structuralErrors.length > 0) {
    console.log("🔴 Structural errors:\n");
    for (const e of structuralErrors) {
        console.log(`   ✗ ${e.message}`);
    }
    console.log();
}

if (blockingGaps.length > 0) {
    console.log(`🔴 Blocking gaps — requires engineer decision (${blockingGaps.length}):\n`);
    for (const g of blockingGaps) {
        console.log(`   • ${g.field}`);
        if (g.note) console.log(`     ${g.note}`);
    }
    console.log();
}

if (warningGaps.length > 0) {
    console.log(`🟡 Inferred fields — verify before approving (${warningGaps.length}):\n`);
    for (const g of warningGaps) {
        console.log(`   • ${g.field}`);
        if (g.assumed !== undefined) console.log(`     Assumed: ${JSON.stringify(g.assumed)}`);
    }
    console.log();
}

if (structuralWarnings.length > 0) {
    console.log("🟡 Warnings:\n");
    for (const w of structuralWarnings) {
        console.log(`   ! ${w.message}`);
    }
    console.log();
}

if (!hasFailures) {
    const confirmed =
        (manifest.gaps as Gap[] | undefined)?.filter(
            (g) => g.confidence === "high"
        ).length ?? 0;
    console.log(`✅ Manifest is valid`);
    console.log(`   ${blockingGaps.length} blocking gaps, ${warningGaps.length} medium-confidence fields, ${confirmed} confirmed`);
    if (warningGaps.length > 0) {
        console.log(`   Review 🟡 items before approving Gate 2.`);
    }
} else {
    console.log(`❌ Manifest has errors — resolve before Gate 2 approval.`);
}

console.log();
process.exit(hasFailures ? 1 : 0);
