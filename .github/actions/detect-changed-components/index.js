#!/usr/bin/env node

/**
 * Detect which Skin components have changed in the current PR/branch
 * and output a comma-separated list for Percy partial snapshots.
 *
 * Enhanced with SASS dependency graph analysis to detect components
 * affected by changes to shared files (mixins, variables, etc.)
 *
 * Usage (GitHub Actions):
 *   uses: ./.github/actions/detect-changed-components
 *   with:
 *     sass-dir: 'packages/skin/src/sass'
 *     base-branch: 'main'
 *
 * Outputs (via @actions/core):
 *   - components: "all" if global files changed (run all snapshots)
 *   - components: "Component1,Component2" for specific components
 *   - components: "" (empty) if no relevant changes
 *
 * Environment Variables:
 *   - DEBUG_PERCY_DEPS: Enable dependency graph debug logging
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs/promises");
const core = require("@actions/core");
const analyzer = require("../shared/sass-dependency-analyzer");

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
 * Compares current branch against base branch
 * @param {string} baseBranch - Base branch to compare against
 */
function getChangedFiles(baseBranch) {
  try {
    const command = `git diff ${baseBranch}...HEAD --name-only`;
    const output = execSync(command, { encoding: "utf-8" });
    return output.trim().split("\n").filter(Boolean);
  } catch (error) {
    core.setFailed(`Failed to get changed files: ${error.message}`);
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
    core.debug(
      `Could not extract story title from ${filePath}: ${error.message}`,
    );
  }
  return null;
}

/**
 * Get all story titles for a given component directory
 * @param {string} componentDir - Component directory name (e.g., 'alert-dialog')
 * @param {string} sassDir - Path to SASS directory
 * @returns {Promise<string[]>} Array of component names (e.g., ["Alert Dialog"])
 */
async function getStoryTitlesForComponent(componentDir, sassDir) {
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
  core.debug(`[extractComponentFromPath] Checking: ${filePath}`);

  const match = filePath.match(/packages\/skin\/src\/sass\/([^\/]+)\//);
  if (!match || !match[1]) {
    core.debug(`[extractComponentFromPath] No match for pattern`);
    return null;
  }

  const componentDir = match[1];
  core.debug(`[extractComponentFromPath] Matched component dir: ${componentDir}`);

  // Skip non-component directories
  if (IGNORED_DIRS.includes(componentDir)) {
    core.debug(`[extractComponentFromPath] Skipping ignored dir: ${componentDir}`);
    return null;
  }

  core.debug(`[extractComponentFromPath] Returning: ${componentDir}`);
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
    core.startGroup("Detecting changed components");

    // Get inputs from action.yml
    const sassDir = core.getInput("sass-dir", { required: true });
    const baseBranch = core.getInput("base-branch") || "main";

    // Convert relative path to absolute path
    const sassDirAbsolute = path.isAbsolute(sassDir)
      ? sassDir
      : path.join(process.cwd(), sassDir);

    core.info(`Using SASS directory: ${sassDir} (${sassDirAbsolute})`);
    core.info(`Comparing against base branch: ${baseBranch}`);

    const changedFiles = getChangedFiles(baseBranch);
    core.info(`Found ${changedFiles.length} changed files`);

    // Log first few changed files for debugging
    if (changedFiles.length > 0) {
      core.startGroup("Changed files (first 10)");
      changedFiles.slice(0, 10).forEach(file => core.info(`  ${file}`));
      if (changedFiles.length > 10) {
        core.info(`  ... and ${changedFiles.length - 10} more`);
      }
      core.endGroup();
    }

    if (changedFiles.length === 0) {
      core.info("No changed files detected - skipping Percy snapshots");
      core.setOutput("components", "");
      core.endGroup();
      return;
    }

    // Check for global changes first (existing behavior)
    core.info("Checking for global file changes...");
    if (hasGlobalChanges(changedFiles)) {
      core.info("✓ Global files changed - running all snapshots");
      core.setOutput("components", "all");
      core.endGroup();
      return;
    }
    core.info("✓ No global changes detected")

    // NEW: Build dependency graph and find all affected files
    let allAffectedFiles = new Set();

    try {
      core.startGroup("Building SASS dependency graph");
      core.info("Analyzing SASS dependencies to detect indirect impacts...");

      // Build forward and reverse dependency graphs
      const forwardGraph = await analyzer.buildDependencyGraph(sassDirAbsolute);
      core.info(`✓ Built dependency graph with ${forwardGraph.size} files`);

      const reverseGraph = analyzer.buildReverseDependencyGraph(forwardGraph);
      core.info(`✓ Built reverse dependency graph`);
      core.endGroup();

      core.startGroup("Analyzing impact of changed files");
      // For each changed file, find all its dependents
      let scssFileCount = 0;
      for (const file of changedFiles) {
        // Only analyze SCSS files
        if (!file.endsWith(".scss")) {
          core.debug(`Skipping non-SCSS file: ${file}`);
          continue;
        }

        scssFileCount++;
        core.debug(`Analyzing SCSS file: ${file}`);

        // Convert to absolute path for graph lookup
        // git diff returns paths relative to repo root, so join with repo root
        const repoRoot = process.cwd();
        const absPath = path.join(repoRoot, file);

        // Add the changed file itself
        allAffectedFiles.add(absPath);

        // Find all files that transitively depend on this changed file
        const dependents = analyzer.findAllDependents(absPath, reverseGraph);
        if (dependents.size > 0) {
          core.info(`  ${file} affects ${dependents.size} other file(s)`);
        }
        dependents.forEach((dep) => allAffectedFiles.add(dep));
      }

      core.info(`✓ Analyzed ${scssFileCount} SCSS file(s) from ${changedFiles.length} total changed files`);
      core.info(`✓ Found ${allAffectedFiles.size} total affected file(s) (including transitive dependencies)`);
      core.endGroup();

      // If no SCSS files were affected, fall back to original behavior
      if (allAffectedFiles.size === 0) {
        core.info("No SCSS files in changes - analyzing all changed files");
        allAffectedFiles = new Set(changedFiles);
      }
    } catch (error) {
      // FAIL SAFE: If dependency analysis fails, run all snapshots
      core.warning(
        `Dependency analysis failed - running all snapshots as fallback: ${error.message}`,
      );
      core.setOutput("components", "all");
      core.endGroup();
      return;
    }

    // Extract unique component directories from all affected files
    core.startGroup("Extracting component directories");
    core.info(`Processing ${allAffectedFiles.size} affected file(s)`);
    const changedComponentDirs = new Set();

    allAffectedFiles.forEach((file) => {
      const componentDir = extractComponentFromPath(file);
      if (componentDir) {
        core.info(`  ${file} → ${componentDir}`);
        changedComponentDirs.add(componentDir);
      } else {
        core.debug(`  ${file} → (no component match)`);
      }
    });

    core.info(`✓ Found ${changedComponentDirs.size} affected component(s): ${Array.from(changedComponentDirs).join(", ")}`);
    core.endGroup();

    if (changedComponentDirs.size === 0) {
      core.info("No component directories affected - skipping Percy snapshots");
      core.setOutput("components", "");
      core.endGroup();
      return;
    }

    // For each component directory, get its actual story titles
    // by importing and parsing the .stories.js files
    core.startGroup("Extracting story titles from components");
    const allStoryTitles = new Set();

    for (const componentDir of changedComponentDirs) {
      core.info(`  Analyzing component: ${componentDir}`);
      const titles = await getStoryTitlesForComponent(
        componentDir,
        sassDirAbsolute,
      );

      if (titles.length > 0) {
        core.info(`    ✓ Found ${titles.length} story title(s): ${titles.join(", ")}`);
        titles.forEach((title) => allStoryTitles.add(title));
      } else {
        core.warning(`    No story titles found for ${componentDir}`);
      }
    }

    core.info(`✓ Total unique story titles: ${allStoryTitles.size}`);
    core.endGroup();

    if (allStoryTitles.size === 0) {
      core.warning("No story titles found - skipping Percy snapshots");
      core.setOutput("components", "");
      core.endGroup();
      return;
    }

    // Output comma-separated story titles (e.g., "Alert Dialog,Button,Badge")
    const titleList = Array.from(allStoryTitles).sort().join(",");
    core.setOutput("components", titleList);
    core.info(`\n✓ Output set: ${titleList}`);
    core.endGroup();
  } catch (error) {
    core.setFailed(
      `Fatal error in detect-changed-components: ${error.message}`,
    );
    if (error.stack) {
      core.debug(error.stack);
    }
    core.endGroup();
    process.exit(1);
  }
}

main();
