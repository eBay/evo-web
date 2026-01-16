#!/usr/bin/env node

/**
 * Detect which Skin components have changed in the current PR/branch
 * and output a comma-separated list for Percy partial snapshots.
 *
 * Detects changes to compiled CSS files in packages/skin/dist/ and uses
 * component-metadata.json to find dependent components via reverse lookup
 * through the submodules property (with transitive dependency support).
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
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs/promises");
const core = require("@actions/core");

const GLOBAL_PATHS = [
  "packages/skin/src/sass/global/",
  "packages/skin/src/sass/variables/",
  "packages/skin/src/sass/mixins/",
  "packages/skin/src/tokens/",
  "packages/skin/src/sass/bundles/",
  "packages/skin/.storybook/",
];

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

  const globIterator = fs.glob("**/*.stories.(js|ts)", { cwd: componentPath });
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
 * Pattern: packages/skin/dist/{component-name}/{component-name}.css
 * @param {string} filePath - File path
 * @returns {string|null} Component directory name (e.g., 'alert-dialog') or null
 */
function extractComponentFromPath(filePath) {
  core.debug(`[extractComponentFromPath] Checking: ${filePath}`);

  const match = filePath.match(/packages\/skin\/dist\/([^\/]+)\//);
  if (!match || !match[1]) {
    core.debug(`[extractComponentFromPath] No match for pattern`);
    return null;
  }

  const componentDir = match[1];
  core.debug(
    `[extractComponentFromPath] Matched component dir: ${componentDir}`,
  );

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
      changedFiles.slice(0, 10).forEach((file) => core.info(`  ${file}`));
      if (changedFiles.length > 10) {
        core.info(`  ... and ${changedFiles.length - 10} more`);
      }
      core.endGroup();
    } else {
      core.info("No changed files detected - skipping Percy snapshots");
      core.setOutput("components", "");
      core.endGroup();
      return;
    }

    core.info("Checking for global file changes...");
    if (hasGlobalChanges(changedFiles)) {
      core.info("✓ Global files changed - running all snapshots");
      core.setOutput("components", "all");
      core.endGroup();
      return;
    }
    core.info("✓ No global changes detected");

    // Load component metadata for dependency lookup
    let componentMetadata;
    try {
      const metadataPath = path.join(
        process.cwd(),
        "src/data/component-metadata.json",
      );
      const metadataContent = await fs.readFile(metadataPath, "utf-8");
      componentMetadata = JSON.parse(metadataContent);
      core.info(
        `✓ Loaded component metadata with ${Object.keys(componentMetadata).length} components`,
      );
    } catch (error) {
      core.warning(
        `Failed to load component metadata - running all snapshots: ${error.message}`,
      );
      core.setOutput("components", "all");
      core.endGroup();
      return;
    }

    core.startGroup("Detecting changed components");
    const changedComponentDirs = new Set();
    const directStoryTitles = new Set();

    for (const file of changedFiles) {
      if (file.endsWith(".css") && file.includes("packages/skin/dist/")) {
        const componentDir = extractComponentFromPath(file);
        if (componentDir) {
          core.info(`  ${file} → ${componentDir}`);
          changedComponentDirs.add(componentDir);
        }
      } else if (
        (file.endsWith(".stories.js") || file.endsWith(".stories.ts")) &&
        file.includes("packages/skin/src/sass/")
      ) {
        const absolutePath = path.join(process.cwd(), file);
        const title = extractStoryTitle(absolutePath);

        if (title) {
          // Extract component name: "Skin/Button/Base" → "Button"
          const parts = title.split("/");
          if (parts.length >= 2 && parts[0] === "Skin") {
            const componentName = parts[1];
            core.info(`  ${file} → ${componentName} (from story)`);
            directStoryTitles.add(componentName);
          }
        }
      }
    }

    core.info(
      `Found ${changedComponentDirs.size} directly changed component(s) from CSS: ${Array.from(changedComponentDirs).join(", ") || "(none)"}`,
    );
    core.info(
      `Found ${directStoryTitles.size} directly changed component(s) from stories: ${Array.from(directStoryTitles).join(", ") || "(none)"}`,
    );
    core.endGroup();

    if (changedComponentDirs.size === 0 && directStoryTitles.size === 0) {
      core.info(
        "No component directories or stories affected - skipping Percy snapshots",
      );
      core.setOutput("components", "");
      core.endGroup();
      return;
    }

    core.startGroup("Finding dependent components (including transitive)");
    const allAffectedComponents = new Set(changedComponentDirs);
    const queue = [...changedComponentDirs];
    const visited = new Set();

    while (queue.length > 0) {
      const currentComponent = queue.shift();

      if (visited.has(currentComponent)) {
        continue;
      }
      visited.add(currentComponent);

      // Find all components that have currentComponent in their submodules
      for (const [componentName, metadata] of Object.entries(
        componentMetadata,
      )) {
        if (
          metadata.submodules &&
          metadata.submodules.includes(currentComponent)
        ) {
          if (!allAffectedComponents.has(componentName)) {
            core.info(
              `  ${componentName} depends on ${currentComponent} - adding to affected list`,
            );
            allAffectedComponents.add(componentName);
            queue.push(componentName); // Add to queue to find its dependents too
          }
        }
      }
    }

    core.info(
      `Total affected components (including transitive dependents): ${allAffectedComponents.size}`,
    );
    core.info(
      `Affected components: ${Array.from(allAffectedComponents).sort().join(", ")}`,
    );
    core.endGroup();

    core.startGroup("Extracting story titles from components");
    const allStoryTitles = new Set();

    for (const componentDir of allAffectedComponents) {
      core.info(`  Analyzing component: ${componentDir}`);
      const titles = await getStoryTitlesForComponent(
        componentDir,
        sassDirAbsolute,
      );

      if (titles.length > 0) {
        core.info(
          `    ✓ Found ${titles.length} story title(s): ${titles.join(", ")}`,
        );
        titles.forEach((title) => allStoryTitles.add(title));
      } else {
        core.warning(`    No story titles found for ${componentDir}`);
      }
    }

    core.info(`✓ Story titles from CSS changes: ${allStoryTitles.size}`);

    directStoryTitles.forEach((title) => allStoryTitles.add(title));

    core.info(
      `✓ Story titles from direct story changes: ${directStoryTitles.size}`,
    );
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
