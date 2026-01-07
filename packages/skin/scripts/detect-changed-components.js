#!/usr/bin/env node

/**
 * Detect which Skin components have changed in the current PR/branch
 * and output a comma-separated list for Percy partial snapshots.
 *
 * Usage:
 *   node detect-changed-components.js
 *
 * Output:
 *   - "all" if global files changed (run all snapshots)
 *   - "Component1,Component2" for specific components
 *   - "" (empty) if no relevant changes
 */

const { execSync } = require('child_process');

// Directories that affect all components (global changes)
const GLOBAL_PATHS = [
  'packages/skin/src/sass/global/',
  'packages/skin/src/sass/variables/',
  'packages/skin/src/sass/mixins/',
  'packages/skin/src/tokens/',
  'packages/skin/src/sass/bundles/',
  'packages/skin/.storybook/',
];

// Directories to ignore (not component directories)
const IGNORED_DIRS = ['global', 'variables', 'mixins', 'bundles'];

/**
 * Get list of changed files from git diff
 * Compares current branch against main
 */
function getChangedFiles() {
  try {
    const baseBranch = process.env.GITHUB_BASE_REF || 'main';
    const command = `git diff ${baseBranch}...HEAD --name-only`;
    const output = execSync(command, { encoding: 'utf-8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error getting changed files:', error.message);
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
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
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
  return changedFiles.some(file =>
    GLOBAL_PATHS.some(globalPath => file.includes(globalPath))
  );
}

/**
 * Main function
 */
function main() {
  const changedFiles = getChangedFiles();

  if (changedFiles.length === 0) {
    console.log('No files changed');
    console.log('');
    return;
  }

  console.log(`Analyzing ${changedFiles.length} changed files...`);

  // Check for global changes first
  if (hasGlobalChanges(changedFiles)) {
    console.log('Global files changed - running all snapshots');
    console.log('all');
    return;
  }

  // Extract unique component names
  const changedComponents = new Set();

  changedFiles.forEach(file => {
    const component = extractComponentFromPath(file);
    if (component) {
      changedComponents.add(component);
    }
  });

  if (changedComponents.size === 0) {
    console.log('No component changes detected');
    console.log('');
    return;
  }

  const componentList = Array.from(changedComponents).sort().join(',');
  console.log(`Changed components: ${componentList}`);
  console.log(componentList);
}

main();
