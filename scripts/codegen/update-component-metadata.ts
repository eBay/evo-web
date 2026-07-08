#!/usr/bin/env node
/**
 * update-component-metadata.ts
 *
 * Adds or updates a component entry in src/data/component-metadata.json.
 * Only writes the deterministic fields derivable from manifest.json.
 * Storybook paths and DS Playbook URL are left null — fill in after first deploy.
 *
 * Usage:
 *   npx tsx scripts/codegen/update-component-metadata.ts <component-name>
 *   npx tsx scripts/codegen/update-component-metadata.ts accordion
 *
 * Reads:  src/routes/_index/components/<name>/manifest.json
 * Writes: src/data/component-metadata.json  (patches in-place, alphabetical order)
 */

/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Manifest {
    component: {
        name: string;
        displayName?: string;
        description?: string;
        category?: string;
        designSystemVersion?: string | null;
    };
    bem?: {
        block: string;
    };
}

interface MetadataEntry {
    component: string;
    description?: string;
    "ds-component"?: {
        name: string;
        url: string | null;
        version: string | number;
    };
    cssStorybookPath?: string | null;
    markoStorybookPath?: string | null;
    reactStorybookPath?: string | null;
    [key: string]: unknown;
}


/** Resolves the docs component folder path.
 *  Strips the "evo-" prefix if present, since docs folders use the BEM block name.
 *  e.g., "evo-accordion" -> "src/routes/_index/components/accordion"
 *  e.g., "accordion"     -> "src/routes/_index/components/accordion"
 */
function componentDocsDir(componentName: string): string {
    const block = componentName.replace(/^evo-/, "");
    return path.resolve("src/routes/_index/components", block);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const componentName = process.argv[2];
if (!componentName) {
    console.error("Usage: update-component-metadata.ts <component-name>");
    process.exit(1);
}

const manifestPath = path.join(componentDocsDir(componentName), "manifest.json");
if (!fs.existsSync(manifestPath)) {
    console.error(`No manifest found at ${manifestPath}`);
    process.exit(1);
}

const metadataPath = path.resolve("src/data/component-metadata.json");
if (!fs.existsSync(metadataPath)) {
    console.error(`No component-metadata.json found at ${metadataPath}`);
    process.exit(1);
}

const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const metadata: Record<string, MetadataEntry> = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));

const block = manifest.bem?.block ?? componentName.replace(/^evo-/, "");
const existing = metadata[block] ?? {};
const isNew = !metadata[block];

// Build the updated entry — deterministic fields only
const updated: MetadataEntry = {
    ...existing,
    component: block,
    description: manifest.component.description ?? existing.description ?? "",
    "ds-component": {
        name: existing["ds-component"]?.name ?? block,
        url: existing["ds-component"]?.url ?? null,
        version: existing["ds-component"]?.version ?? 1,
    },
    // Storybook paths: preserve if already set, otherwise null (fill after deploy)
    cssStorybookPath: existing.cssStorybookPath ?? null,
    markoStorybookPath: existing.markoStorybookPath ?? null,
    reactStorybookPath: existing.reactStorybookPath ?? null,
};

metadata[block] = updated;

// Re-sort keys alphabetically
const sorted: Record<string, MetadataEntry> = {};
for (const key of Object.keys(metadata).sort()) {
    sorted[key] = metadata[key];
}

fs.writeFileSync(metadataPath, JSON.stringify(sorted, null, 2) + "\n", "utf-8");

console.log(`✅ update-component-metadata: ${componentName}`);
console.log(`   Key:         "${block}"`);
console.log(`   Description: "${updated.description}"`);
console.log(`   DS version:  ${updated["ds-component"]?.version}`);
if (isNew) {
    console.log(`   Status:      NEW entry added`);
} else {
    console.log(`   Status:      existing entry updated`);
}
if (!updated.cssStorybookPath) {
    console.log(`   ⚠️  cssStorybookPath is null — fill in after first storybook deploy`);
}
if (!updated.markoStorybookPath) {
    console.log(`   ⚠️  markoStorybookPath is null — fill in after first storybook deploy`);
}
if (!updated.reactStorybookPath) {
    console.log(`   ⚠️  reactStorybookPath is null — fill in after first storybook deploy`);
}
