#!/usr/bin/env node
/**
 * spec-to-manifest.ts
 *
 * Merges the spec-derivable fields from *.spec.json into manifest.json.
 * Spec fields (props, tokens, slots, states, figma) take precedence over
 * AI-inferred values. All other manifest fields (a11y, behaviors, gaps, etc.)
 * are left untouched — those remain the responsibility of /evo-create-component-manifest.
 *
 * Usage:
 *   npx tsx scripts/codegen/spec-to-manifest.ts <component-name>
 *   npx tsx scripts/codegen/spec-to-manifest.ts accordion
 *
 * Reads:  src/routes/_index/components/<name>/<name>.spec.json
 * Writes: src/routes/_index/components/<name>/manifest.json  (creates or patches)
 */

/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// ── Types ─────────────────────────────────────────────────────────────────────

interface SpecProp {
    type: string;
    enum?: (string | number)[];
    default?: unknown;
    required?: boolean;
    description?: string;
}

interface SpecSlot {
    required?: boolean;
    description?: string;
}

interface SpecStates {
    state?: string[];
}

interface Spec {
    component?: string;
    version?: string;
    props?: Record<string, SpecProp>;
    slots?: Record<string, SpecSlot>;
    states?: SpecStates;
    tokens?: Record<string, string>;
    metadata?: {
        figma?: {
            fileKey?: string;
        };
    };
}

interface ManifestProp {
    name: string;
    type: string;
    values: unknown[] | null;
    default: unknown;
    required: boolean;
    description: string | null;
}

interface ManifestSlot {
    name: string;
    type: string | null;
    required: boolean;
    description: string | null;
}

interface ManifestState {
    name: string;
    trigger: string | null;
    cssSelector: string | null;
    ariaAttribute: string | null;
    keyboardAccess: string | null;
    renderChange: string | null;
    description: string | null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function componentDocsDir(name: string): string {
    return path.join(process.cwd(), "src/routes/_index/components", name);
}

/** Translates "color.background.primary" → "--color-background-primary" */
function tokenDotToCSS(dotPath: string): string {
    return "--" + dotPath.replace(/\./g, "-");
}

function findSpecFile(contractsDir: string, componentName: string): string | null {
    // Try exact name first, then any *.spec.json in the directory
    const exact = path.join(contractsDir, `${componentName}.spec.json`);
    if (fs.existsSync(exact)) return exact;

    const files = fs.readdirSync(contractsDir).filter((f) => f.endsWith(".spec.json"));
    if (files.length > 0) return path.join(contractsDir, files[0]);

    return null;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const componentName = process.argv[2];
if (!componentName) {
    console.error("Usage: spec-to-manifest.ts <component-name>");
    process.exit(1);
}

const contractsDir = componentDocsDir(componentName);
if (!fs.existsSync(contractsDir)) {
    console.error(`No component docs directory found at ${contractsDir}`);
    process.exit(1);
}

const specPath = findSpecFile(contractsDir, componentName);
if (!specPath) {
    console.error(`No *.spec.json found in ${contractsDir}`);
    process.exit(1);
}

const manifestPath = path.join(contractsDir, "manifest.json");

const spec: Spec = JSON.parse(fs.readFileSync(specPath, "utf-8"));
const manifest: Record<string, unknown> = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf-8"))
    : {};

const changes: string[] = [];

// ── Props ─────────────────────────────────────────────────────────────────────

if (spec.props && Object.keys(spec.props).length > 0) {
    const existing: ManifestProp[] = (manifest.props as ManifestProp[]) ?? [];

    const specProps: ManifestProp[] = Object.entries(spec.props).map(([name, def]) => {
        const prev = existing.find((p) => p.name === name);
        return {
            name,
            type: def.type ?? "string",
            values: def.enum ?? null,
            default: def.default ?? null,
            required: def.required ?? false,
            description: def.description ?? prev?.description ?? null,
        };
    });

    // Spec props replace their counterparts; AI-only props (not in spec) are preserved
    const specNames = new Set(specProps.map((p) => p.name));
    const preserved = existing.filter((p) => !specNames.has(p.name));
    manifest.props = [...specProps, ...preserved];
    changes.push(`props: ${specProps.length} from spec${preserved.length ? ` + ${preserved.length} preserved` : ""}`);
}

// ── Tokens ────────────────────────────────────────────────────────────────────

if (spec.tokens && Object.keys(spec.tokens).length > 0) {
    const tokens: Record<string, string> = {};
    for (const [semantic, dotPath] of Object.entries(spec.tokens)) {
        tokens[semantic] = tokenDotToCSS(dotPath);
    }
    manifest.tokens = tokens;
    changes.push(`tokens: ${Object.keys(tokens).length} entries`);
}

// ── Slots ─────────────────────────────────────────────────────────────────────

if (spec.slots && Object.keys(spec.slots).length > 0) {
    const existing: ManifestSlot[] = (manifest.slots as ManifestSlot[]) ?? [];

    const specSlots: ManifestSlot[] = Object.entries(spec.slots).map(([name, def]) => {
        const prev = existing.find((s) => s.name === name);
        return {
            name,
            // Preserve AI-inferred slot type (named-attrtag, default, named) if present
            type: prev?.type ?? null,
            required: def.required ?? false,
            description: def.description ?? prev?.description ?? null,
        };
    });

    const specNames = new Set(specSlots.map((s) => s.name));
    const preserved = existing.filter((s) => !specNames.has(s.name));
    manifest.slots = [...specSlots, ...preserved];
    changes.push(`slots: ${specSlots.length} from spec${preserved.length ? ` + ${preserved.length} preserved` : ""}`);
}

// ── States ────────────────────────────────────────────────────────────────────

if (spec.states?.state && spec.states.state.length > 0) {
    const existing: ManifestState[] = (manifest.states as ManifestState[]) ?? [];

    const specStates: ManifestState[] = spec.states.state.map((name) => {
        const prev = existing.find((s) => s.name === name);
        return {
            name,
            trigger: prev?.trigger ?? null,
            cssSelector: prev?.cssSelector ?? null,
            ariaAttribute: prev?.ariaAttribute ?? null,
            keyboardAccess: prev?.keyboardAccess ?? null,
            renderChange: prev?.renderChange ?? null,
            description: prev?.description ?? null,
        };
    });

    const specNames = new Set(specStates.map((s) => s.name));
    const preserved = existing.filter((s) => !specNames.has(s.name));
    manifest.states = [...specStates, ...preserved];
    changes.push(`states: ${specStates.length} from spec${preserved.length ? ` + ${preserved.length} preserved` : ""}`);
}

// ── Figma ─────────────────────────────────────────────────────────────────────

if (spec.metadata?.figma?.fileKey) {
    const existing = (manifest.figma as Record<string, unknown>) ?? {};
    manifest.figma = {
        fileKey: spec.metadata.figma.fileKey,
        nodeId: existing.nodeId ?? null,
    };
    changes.push(`figma.fileKey: ${spec.metadata.figma.fileKey}`);
}

// ── Write ─────────────────────────────────────────────────────────────────────

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf-8");

console.log(`✅ spec-to-manifest: ${componentName}`);
console.log(`   Source: ${path.relative(process.cwd(), specPath)}`);
console.log(`   Output: ${path.relative(process.cwd(), manifestPath)}`);
changes.forEach((c) => console.log(`   → ${c}`));
