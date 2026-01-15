#!/usr/bin/env node

/**
 * SASS Dependency Analyzer
 *
 * Analyzes SCSS files to build a dependency graph based on @use and @forward directives.
 * Used by detect-changed-components.js to find all components affected by SCSS changes.
 *
 * Key Features:
 * - Parses modern Sass @use/@forward syntax (not legacy @import)
 * - Builds forward and reverse dependency graphs
 * - Finds transitive dependencies (if C→B→A, changing C affects A, B, and C)
 * - Handles circular dependencies gracefully
 */

const fs = require("fs/promises");
const path = require("path");

// Try to require @actions/core for GitHub Actions integration
// Falls back to console.log if not in Actions environment
let core;
try {
  core = require("@actions/core");
} catch (e) {
  // Not in GitHub Actions environment, use console.log fallback
  core = {
    debug: (...args) => console.log(...args),
  };
}

// Regex to match @use and @forward directives
// Matches: @use "../path/to/file" or @forward '../another/file'
const SASS_IMPORT_REGEX = /@(?:use|forward)\s+['"]([^'"]+)['"]/g;

// Enable debug logging with DEBUG_PERCY_DEPS=true
const DEBUG = process.env.DEBUG_PERCY_DEPS === "true";

function log(...args) {
  if (DEBUG) {
    core.debug(`[Percy Deps] ${args.join(" ")}`);
  }
}

/**
 * Parse SCSS file content to extract @use and @forward import paths
 *
 * @param {string} fileContent - The SCSS file content to parse
 * @returns {Array<string>} Array of relative import paths
 *
 * @example
 * parseScssImports('@use "../variables/variables";\n@forward "../mixins/button";')
 * // Returns: ['../variables/variables', '../mixins/button']
 */
function parseScssImports(fileContent) {
  const imports = [];
  let match;

  // Reset regex state
  SASS_IMPORT_REGEX.lastIndex = 0;

  while ((match = SASS_IMPORT_REGEX.exec(fileContent)) !== null) {
    const importPath = match[1];

    // Skip Sass built-in modules (sass:math, sass:color, etc.)
    if (importPath.startsWith("sass:")) {
      continue;
    }

    // Skip external packages (though rare in @use/@forward)
    if (!importPath.startsWith(".") && !importPath.startsWith("/")) {
      continue;
    }

    imports.push(importPath);
  }

  return imports;
}

/**
 * Resolve a relative SCSS import path to an absolute path
 *
 * Handles:
 * - Relative paths (../, ./)
 * - Adding .scss extension if missing
 * - Partial files (files starting with _)
 * - Both _file.scss and file.scss variations
 *
 * @param {string} fromFile - Absolute path of the file doing the import
 * @param {string} importPath - Relative import path from the SCSS @use/@forward
 * @returns {Promise<string|null>} Absolute path to the imported file, or null if not found
 *
 * @example
 * await resolveScssPath('/path/to/button/button.scss', '../variables/variables')
 * // Returns: '/path/to/variables/variables.scss' or '/path/to/variables/_variables.scss'
 */
async function resolveScssPath(fromFile, importPath) {
  const fromDir = path.dirname(fromFile);

  // Resolve relative path
  let resolvedPath = path.resolve(fromDir, importPath);

  // Try multiple file variations (Sass import resolution rules)
  const variations = [
    resolvedPath + ".scss", // file.scss
    resolvedPath, // file (already has extension)
    path.join(
      path.dirname(resolvedPath),
      "_" + path.basename(resolvedPath) + ".scss",
    ), // _file.scss
    path.join(path.dirname(resolvedPath), "_" + path.basename(resolvedPath)), // _file
  ];

  for (const variant of variations) {
    try {
      const stats = await fs.stat(variant);
      if (stats.isFile()) {
        return variant;
      }
    } catch (error) {
      // File doesn't exist, try next variation
      continue;
    }
  }

  // Couldn't resolve - warn but don't fail
  log(`Warning: Could not resolve import "${importPath}" from "${fromFile}"`);
  return null;
}

/**
 * Find all SCSS files in a directory using fs.glob
 *
 * @param {string} dir - Directory to search
 * @returns {Promise<Array<string>>} Promise resolving to array of absolute paths to .scss files
 */
async function findScssFiles(dir) {
  try {
    log(`Searching for SCSS files in: ${dir}`);

    // Check if directory exists
    try {
      const stats = await fs.stat(dir);
      if (!stats.isDirectory()) {
        core.debug(`[Percy Deps] Path is not a directory: ${dir}`);
        return [];
      }
    } catch (error) {
      core.debug(`[Percy Deps] Directory does not exist: ${dir} - ${error.message}`);
      return [];
    }

    // Use fs.glob to find all .scss files
    // Pattern: **/*.scss matches all .scss files recursively
    // Note: fs.glob returns an AsyncGenerator, not a Promise<Array>
    const files = [];
    const globIterator = fs.glob("**/*.scss", {
      cwd: dir,
      exclude: (name) => {
        // Exclude node_modules and hidden directories
        return name.includes("node_modules") || name.includes("/.");
      },
    });

    for await (const file of globIterator) {
      // Convert to absolute path since fs.glob returns relative paths
      files.push(path.join(dir, file));
    }

    log(`Found ${files.length} SCSS files in ${dir}`);
    return files;
  } catch (error) {
    core.debug(`[Percy Deps] Error finding SCSS files in "${dir}": ${error.message}`);
    core.debug(`[Percy Deps] Stack: ${error.stack}`);
    return [];
  }
}

/**
 * Build forward dependency graph (file → its dependencies)
 *
 * Traverses all SCSS files in the given directory and builds a map of
 * each file to the files it imports via @use/@forward.
 *
 * @param {string} sassDir - Root SASS directory to analyze (e.g., packages/skin/src/sass)
 * @returns {Promise<Map<string, Array<string>>>} Promise resolving to map of file path → array of dependency paths
 *
 * @example
 * const graph = await buildDependencyGraph('/path/to/sass');
 * // Returns: Map {
 * //   '/path/to/button/button.scss' => ['/path/to/variables/variables.scss', ...],
 * //   ...
 * // }
 */
async function buildDependencyGraph(sassDir) {
  const graph = new Map();

  log(`Building dependency graph for: ${sassDir}`);

  // Find all SCSS files using glob
  const scssFiles = await findScssFiles(sassDir);
  log(`Found ${scssFiles.length} SCSS files`);

  // Parse each file for imports
  for (const filePath of scssFiles) {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const imports = parseScssImports(content);
      const resolvedDeps = [];

      for (const importPath of imports) {
        const resolvedPath = await resolveScssPath(filePath, importPath);
        if (resolvedPath) {
          resolvedDeps.push(resolvedPath);
        }
      }

      graph.set(filePath, resolvedDeps);

      if (resolvedDeps.length > 0) {
        log(
          `${path.relative(sassDir, filePath)} imports ${resolvedDeps.length} files`,
        );
      }
    } catch (error) {
      log(`Warning: Could not parse file "${filePath}":`, error.message);
      // Continue processing other files
    }
  }

  log(`Dependency graph built with ${graph.size} files`);
  return graph;
}

/**
 * Build reverse dependency graph (file → files that depend on it)
 *
 * Inverts the forward dependency graph to create a map of each file
 * to all the files that import it.
 *
 * @param {Map<string, Array<string>>} forwardGraph - Forward dependency graph from buildDependencyGraph()
 * @returns {Map<string, Array<string>>} Map of file path → array of dependent paths
 *
 * @example
 * const forward = new Map([
 *   ['a.scss', ['b.scss', 'c.scss']],
 *   ['d.scss', ['b.scss']]
 * ]);
 * const reverse = buildReverseDependencyGraph(forward);
 * // Returns: Map {
 * //   'b.scss' => ['a.scss', 'd.scss'],
 * //   'c.scss' => ['a.scss']
 * // }
 */
function buildReverseDependencyGraph(forwardGraph) {
  const reverseGraph = new Map();

  // For each file and its dependencies
  for (const [file, dependencies] of forwardGraph.entries()) {
    // For each dependency
    for (const dep of dependencies) {
      // Add the current file as a dependent of that dependency
      if (!reverseGraph.has(dep)) {
        reverseGraph.set(dep, []);
      }
      reverseGraph.get(dep).push(file);
    }
  }

  log(
    `Reverse graph built with ${reverseGraph.size} files that have dependents`,
  );
  return reverseGraph;
}

/**
 * Find all files that transitively depend on a changed file
 *
 * Uses breadth-first search to find all files that import the changed file,
 * either directly or through a chain of imports.
 *
 * Handles circular dependencies by tracking visited files.
 *
 * @param {string} changedFile - Absolute path to the changed file
 * @param {Map<string, Array<string>>} reverseGraph - Reverse dependency graph
 * @returns {Set<string>} Set of all file paths that depend on the changed file
 *
 * @example
 * const reverseGraph = new Map([
 *   ['variables.scss', ['mixins.scss']],
 *   ['mixins.scss', ['button.scss', 'checkbox.scss']]
 * ]);
 * findAllDependents('variables.scss', reverseGraph)
 * // Returns: Set { 'mixins.scss', 'button.scss', 'checkbox.scss' }
 */
function findAllDependents(changedFile, reverseGraph) {
  const result = new Set();
  const queue = [changedFile];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();

    // Skip if already visited (handles circular dependencies)
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    // Get direct dependents
    const dependents = reverseGraph.get(current) || [];

    // Add each dependent to results and queue for transitive search
    for (const dependent of dependents) {
      result.add(dependent);
      queue.push(dependent);
    }
  }

  log(
    `File ${path.basename(changedFile)} has ${result.size} transitive dependents`,
  );
  return result;
}

/**
 * Extract component name from file path
 *
 * Converts SCSS file paths to component names for Percy story matching.
 * Pattern: packages/skin/src/sass/{component-name}/... → Component-Name
 *
 * @param {string} filePath - Absolute or relative file path
 * @param {Array<string>} ignoredDirs - Directories to skip (not components)
 * @returns {string|null} Component name in Title-Case, or null if not a component
 *
 * @example
 * filePathToComponentName('packages/skin/src/sass/alert-dialog/alert-dialog.scss')
 * // Returns: 'Alert-Dialog'
 *
 * filePathToComponentName('packages/skin/src/sass/mixins/private/_button-mixins.scss')
 * // Returns: null (mixins is ignored)
 */
function filePathToComponentName(
  filePath,
  ignoredDirs = ["global", "variables", "mixins", "bundles"],
) {
  // Match pattern: packages/skin/src/sass/{component-name}/...
  const match = filePath.match(/packages\/skin\/src\/sass\/([^\/]+)\//);

  if (!match || !match[1]) {
    return null;
  }

  const componentDir = match[1];

  // Skip non-component directories
  if (ignoredDirs.includes(componentDir)) {
    return null;
  }

  // Convert kebab-case to Title-Case
  // 'alert-dialog' → 'Alert-Dialog'
  return componentDir
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

// Export functions for use in detect-changed-components.js
module.exports = {
  parseScssImports,
  resolveScssPath,
  buildDependencyGraph,
  buildReverseDependencyGraph,
  findAllDependents,
  filePathToComponentName,
};
