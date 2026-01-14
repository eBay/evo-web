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
const fs = require("fs/promises");
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
 * Extract the actual story title by importing the .stories.js file
 * @param {string} filePath - Absolute path to .stories.js file
 * @returns {string|null} Story title (e.g., "Skin/Alert Dialog") or null
 */
function extractStoryTitle(filePath) {
    try {
        // Import the story file
        const storyModule = require(filePath);

        // Extract title from default export
        if (storyModule && storyModule.default && storyModule.default.title) {
            return storyModule.default.title;
        }
    } catch (error) {
        // File import error or missing title - skip this file
    }
    return null;
}

/**
 * Get all story titles for a given component directory
 * @param {string} componentDir - Component directory name (e.g., 'alert-dialog')
 * @returns {Promise<string[]>} Array of component names (e.g., ["Alert Dialog"])
 */
async function getStoryTitlesForComponent(componentDir) {
    const sassDir = path.join(__dirname, "../src/sass");
    const componentPath = path.join(sassDir, componentDir);

    // Use fs.glob (Node.js 20+) to find all .stories.js files
    // Note: fs.glob returns an AsyncGenerator
    const globIterator = fs.glob("**/*.stories.js", { cwd: componentPath });
    const componentNames = new Set();

    for await (const file of globIterator) {
        // Convert to absolute path since fs.glob returns relative paths
        const absolutePath = path.join(componentPath, file);
        const title = extractStoryTitle(absolutePath);

        if (title) {
            // Extract just the component part: "Skin/Alert Dialog" → "Alert Dialog"
            // "Skin/Button/Primary" → "Button" (parent category only)
            const parts = title.split("/");
            if (parts.length >= 2 && parts[0] === "Skin") {
                componentNames.add(parts[1]); // Get the component name after "Skin/"
            }
        }
    }

    return Array.from(componentNames);
}

/**
 * Extract component directory name from file path
 * Pattern: packages/skin/src/sass/{component-name}/...
 * @param {string} filePath - File path
 * @returns {string|null} Component directory name (e.g., 'alert-dialog') or null
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

    return componentDir; // Return raw directory name (e.g., 'alert-dialog')
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
                // git diff returns paths relative to repo root, so join with repo root
                const repoRoot = path.join(__dirname, "../../..");
                const absPath = path.join(repoRoot, file);

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

        // Extract unique component directories from all affected files
        const changedComponentDirs = new Set();

        allAffectedFiles.forEach((file) => {
            const componentDir = extractComponentFromPath(file);
            if (componentDir) {
                changedComponentDirs.add(componentDir);
            }
        });

        if (changedComponentDirs.size === 0) {
            console.log("");
            return;
        }

        // For each component directory, get its actual story titles
        // by importing and parsing the .stories.js files
        const allStoryTitles = new Set();

        for (const componentDir of changedComponentDirs) {
            const titles = await getStoryTitlesForComponent(componentDir);
            titles.forEach((title) => allStoryTitles.add(title));
        }

        if (allStoryTitles.size === 0) {
            console.log("");
            return;
        }

        // Output comma-separated story titles (e.g., "Alert Dialog,Button,Badge")
        const titleList = Array.from(allStoryTitles).sort().join(",");
        console.log(titleList);
    } catch (error) {
        // Critical error - exit with error code but don't pollute stdout
        process.exit(1);
    }
}

main();
