#!/usr/bin/env node

/**
 * SASS Dependency Analyzer
 *
 * Analyzes SCSS files to build a dependency graph based on @use and @forward directives.
 * Used by detect-changed-components.js to find all components affected by SCSS changes.
 *
 * Key Features:
 * - Parses modern Sass @use/@forward syntax (not legacy @import)
 * - Builds dependency graph mapping files to their dependents (files that import them)
 * - Finds transitive dependencies (if C→B→A, changing A affects B and C)
 * - Handles circular dependencies gracefully
 */

const fs = require("fs/promises");
const path = require("path");
const core = require("@actions/core");

// Regex to match @use and @forward directives
// Matches: @use "../path/to/file" or @forward '../another/file'
const SASS_IMPORT_REGEX = /@(?:use|forward)\s+['"]([^'"]+)['"]/g;

/**
 * Module dependencies map
 *
 * Maps: changed module → modules that need to be re-snapshotted
 * These represent CSS class-based dependencies found in story files.
 *
 * For example, the calendar module uses icon-button class in its stories,
 * so when icon-button changes, calendar needs Percy snapshots even though
 * there's no Sass @use/@forward relationship.
 */
const MODULE_DEPENDENCIES = {
  icon: ["icon-button", "breadcrumbs", "card"],
  "progress-spinner": ["icon-button"],
  "icon-button": [
    "calendar",
    "drawer-dialog",
    "fullscreen-dialog",
    "infotip",
    "lightbox-dialog",
    "pagination",
    "panel-dialog",
    "toast-dialog",
    "tourtip",
  ],
  button: [
    "listbox-button",
    "menu-button",
    "page-notice",
    "section-notice",
    "card",
    "split-button",
  ],
  "menu-button": ["split-button"],
  calendar: ["date-textbox"],
  textbox: ["date-textbox", "number-input"],
  "toggle-button": ["toggle-button-group"],
  "chart-legend": ["donut-chart"],
  chip: ["chips-combobox"],
  combobox: ["chips-combobox"],
};

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

    // Skip external packages
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
  core.debug(
    `[Percy Deps] Warning: Could not resolve import "${importPath}" from "${fromFile}"`,
  );
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
    core.debug(`[Percy Deps] Searching for SCSS files in: ${dir}`);

    try {
      const stats = await fs.stat(dir);
      if (!stats.isDirectory()) {
        core.debug(`[Percy Deps] Path is not a directory: ${dir}`);
        return [];
      }
    } catch (error) {
      core.debug(
        `[Percy Deps] Directory does not exist: ${dir} - ${error.message}`,
      );
      return [];
    }

    const files = [];
    const globIterator = fs.glob("**/*.scss", {
      cwd: dir,
      exclude: (name) => {
        return name.includes("node_modules") || name.includes("/.");
      },
    });

    for await (const file of globIterator) {
      // Convert to absolute path since fs.glob returns relative paths
      files.push(path.join(dir, file));
    }

    core.debug(`[Percy Deps] Found ${files.length} SCSS files in ${dir}`);
    return files;
  } catch (error) {
    core.debug(
      `[Percy Deps] Error finding SCSS files in "${dir}": ${error.message}`,
    );
    core.debug(`[Percy Deps] Stack: ${error.stack}`);
    return [];
  }
}

/**
 * Build dependency graph (file → files that depend on it)
 *
 * Analyzes all SCSS files and builds a map of each file to all the files that depend on it.
 * This enables efficient "impact analysis" - when a file changes, we can quickly find all
 * files that need to be rebuilt.
 *
 * Implementation:
 * 1. Builds import relationships (file → files it imports)
 * 2. Inverts to dependency relationships (file → files that import it)
 * 3. Merges manual module dependencies for CSS class-based relationships
 *
 * @param {string} sassDir - Root SASS directory to analyze (e.g., packages/skin/src/sass)
 * @returns {Promise<Map<string, Array<string>>>} Map of file path → array of dependent file paths
 *
 * @example
 * const graph = await buildDependencyGraph('/path/to/sass');
 * // Returns: Map {
 * //   'variables.scss' => ['button.scss', 'checkbox.scss', ...],
 * //   'mixins.scss' => ['button.scss', ...],
 * //   ...
 * // }
 */
async function buildDependencyGraph(sassDir) {
  core.debug(`[Percy Deps] Building dependency graph for: ${sassDir}`);

  // Step 1: Build import graph (file → files it imports)
  const importGraph = new Map();

  // Find all SCSS files using glob
  const scssFiles = await findScssFiles(sassDir);
  core.debug(`[Percy Deps] Found ${scssFiles.length} SCSS files to analyze`);

  if (scssFiles.length > 0) {
    core.debug(`[Percy Deps] Sample files (first 5):`);
    scssFiles
      .slice(0, 5)
      .forEach((file) => core.debug(`[Percy Deps]   ${file}`));
  }

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

      importGraph.set(filePath, resolvedDeps);

      if (resolvedDeps.length > 0) {
        core.debug(
          `[Percy Deps] ${path.relative(sassDir, filePath)} imports ${resolvedDeps.length} files`,
        );
      }
    } catch (error) {
      core.debug(
        `[Percy Deps] Warning: Could not parse file "${filePath}": ${error.message}`,
      );
      // Continue processing other files
    }
  }

  core.debug(`[Percy Deps] Import graph built with ${importGraph.size} files`);

  // Step 2: Invert to dependency graph (file → files that import it)
  const dependencyGraph = new Map();

  for (const [file, imports] of importGraph.entries()) {
    for (const importedFile of imports) {
      if (!dependencyGraph.has(importedFile)) {
        dependencyGraph.set(importedFile, []);
      }
      dependencyGraph.get(importedFile).push(file);
    }
  }

  core.debug(
    `[Percy Deps] Dependency graph built from Sass imports: ${dependencyGraph.size} files with dependents`,
  );

  // Step 3: Merge manual module dependencies
  // Convert module names to file paths and add to dependency graph
  let manualDepsAdded = 0;
  for (const [changedModule, dependentModules] of Object.entries(
    MODULE_DEPENDENCIES,
  )) {
    // Find the main SCSS file for the changed module
    // Pattern: {sassDir}/{moduleName}/{moduleName}.scss
    const changedFilePath = path.join(
      sassDir,
      changedModule,
      `${changedModule}.scss`,
    );

    // Initialize dependency graph entry if it doesn't exist
    if (!dependencyGraph.has(changedFilePath)) {
      dependencyGraph.set(changedFilePath, []);
    }

    // Add each dependent module to the dependency graph
    for (const dependentModule of dependentModules) {
      const dependentFilePath = path.join(
        sassDir,
        dependentModule,
        `${dependentModule}.scss`,
      );

      // Add to dependency graph (avoiding duplicates)
      if (!dependencyGraph.get(changedFilePath).includes(dependentFilePath)) {
        dependencyGraph.get(changedFilePath).push(dependentFilePath);
        manualDepsAdded++;
      }
    }
  }

  core.debug(
    `[Percy Deps] Added ${manualDepsAdded} manual dependencies to graph`,
  );
  core.debug(
    `[Percy Deps] Final dependency graph has ${dependencyGraph.size} files with dependents`,
  );

  return dependencyGraph;
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
 * @param {Map<string, Array<string>>} dependencyGraph - Dependency graph from buildDependencyGraph()
 * @returns {Set<string>} Set of all file paths that depend on the changed file
 *
 * @example
 * const graph = new Map([
 *   ['variables.scss', ['mixins.scss']],
 *   ['mixins.scss', ['button.scss', 'checkbox.scss']]
 * ]);
 * findAllDependents('variables.scss', graph)
 * // Returns: Set { 'mixins.scss', 'button.scss', 'checkbox.scss' }
 */
function findAllDependents(changedFile, dependencyGraph) {
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
    const dependents = dependencyGraph.get(current) || [];

    // Add each dependent to results and queue for transitive search
    for (const dependent of dependents) {
      result.add(dependent);
      queue.push(dependent);
    }
  }

  core.debug(
    `[Percy Deps] File ${path.basename(changedFile)} has ${result.size} transitive dependents`,
  );
  return result;
}

// Export functions for use in detect-changed-components.js
module.exports = {
  buildDependencyGraph,
  findAllDependents,
};
