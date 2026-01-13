#!/usr/bin/env node

/**
 * Detect which Skin components have changed in the current PR/branch
 * and output a comma-separated list for Percy partial snapshots.
 *
 * Enhanced with SASS dependency graph analysis to detect components
 * affected by changes to shared files (mixins, variables, etc.)
 *
 * Usage:
 *   node detect-changed-components.js
 *
 * Output:
 *   - "all" if global files changed (run all snapshots)
 *   - "Component1,Component2" for specific components
 *   - "" (empty) if no relevant changes
 *
 * IMPORTANT: stdout is captured by GitHub Actions as a variable.
 * Only the final result should be written to stdout. All logging/errors
 * should go to stderr or be omitted to avoid polluting the output.
 */

const { execSync } = require("child_process");
const path = require("path");
const analyzer = require("./sass-dependency-analyzer");

// Directories that affect all components (global changes)
// Note: mixins/ is NOT in this list - dependency graph will handle mixin changes
const GLOBAL_PATHS = [
    "packages/skin/src/sass/global/",
    "packages/skin/src/sass/variables/",
    "packages/skin/src/tokens/",
    "packages/skin/src/sass/bundles/",
    "packages/skin/.storybook/",
];

// Directories to ignore (not component directories)
const IGNORED_DIRS = ["global", "variables", "mixins", "bundles"];

/**
 * Get list of changed files from git diff
 * Compares current branch against main
 */
function getChangedFiles() {
    try {
        const baseBranch = process.env.GITHUB_BASE_REF || "main";
        const command = `git diff ${baseBranch}...HEAD --name-only`;
        const output = execSync(command, { encoding: "utf-8" });
        return output.trim().split("\n").filter(Boolean);
    } catch (error) {
        process.exit(1);
    }
}

/**
 * Convert kebab-case component directory name to Title-Case for story matching
 * e.g., 'alert-dialog' → 'Alert-Dialog'
 * e.g., 'button' → 'Button'
 */
function toStoryTitleFormat(componentDir) {
    return componentDir
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");
}

/**
 * Extract component name from file path
 * Pattern: packages/skin/src/sass/{component-name}/...
 */
function extractComponentFromPath(filePath) {
    const match = filePath.match(/packages\/skin\/src\/sass\/([^\/]+)\//);
    if (!match || !match[1]) {
        return null;
    }

    const componentDir = match[1];

    // Skip non-component directories
    if (IGNORED_DIRS.includes(componentDir)) {
        return null;
    }

    return toStoryTitleFormat(componentDir);
}

/**
 * Check if any changed file is in a global path
 */
function hasGlobalChanges(changedFiles) {
    return changedFiles.some((file) =>
        GLOBAL_PATHS.some((globalPath) => file.includes(globalPath)),
    );
}

/**
 * Main function (async to support dependency graph building)
 */
async function main() {
    try {
        const changedFiles = getChangedFiles();

        if (changedFiles.length === 0) {
            console.log("");
            return;
        }

        // Check for global changes first (existing behavior)
        if (hasGlobalChanges(changedFiles)) {
            console.log("all");
            return;
        }

        // NEW: Build dependency graph and find all affected files
        let allAffectedFiles = new Set();

        try {
            const sassDir = path.join(__dirname, "../src/sass");

            // Build forward and reverse dependency graphs
            const forwardGraph = await analyzer.buildDependencyGraph(sassDir);
            const reverseGraph =
                analyzer.buildReverseDependencyGraph(forwardGraph);

            // For each changed file, find all its dependents
            for (const file of changedFiles) {
                // Only analyze SCSS files
                if (!file.endsWith(".scss")) {
                    continue;
                }

                // Convert to absolute path for graph lookup
                const absPath = path.resolve(file);

                // Add the changed file itself
                allAffectedFiles.add(absPath);

                // Find all files that transitively depend on this changed file
                const dependents = analyzer.findAllDependents(
                    absPath,
                    reverseGraph,
                );
                dependents.forEach((dep) => allAffectedFiles.add(dep));
            }

            // If no SCSS files were affected, fall back to original behavior
            if (allAffectedFiles.size === 0) {
                allAffectedFiles = new Set(changedFiles);
            }
        } catch (error) {
            // FAIL SAFE: If dependency analysis fails, run all snapshots
            // Note: Don't log error details to avoid polluting stdout
            console.log("all");
            return;
        }

        // Extract unique component names from all affected files
        const changedComponents = new Set();

        allAffectedFiles.forEach((file) => {
            const component = extractComponentFromPath(file);
            if (component) {
                changedComponents.add(component);
            }
        });

        if (changedComponents.size === 0) {
            console.log("");
            return;
        }

        const componentList = Array.from(changedComponents).sort().join(",");
        console.log(componentList);
    } catch (error) {
        // Critical error - exit with error code but don't pollute stdout
        process.exit(1);
    }
}

main();
