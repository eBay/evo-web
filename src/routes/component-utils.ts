import componentMetadata from "./static/data/component-metadata";
import { properNameMap } from "../tags/components.marko";

/**
 * Get component metadata by name
 * @param {string} componentName - The name of the component
 * @returns {Object|null} Component metadata object or null if not found
 */
export function getComponentMetadata(componentName: string) {
  return componentMetadata[componentName] || null;
}

/**
 * Get design system component information
 * @param {string} componentName - The name of the component
 * @returns {Object|Array|null} Design system component info or null if not found
 */
export function getDesignSystemInfo(componentName: string) {
  const component = getComponentMetadata(componentName);
  return component?.["ds-component"] || null;
}

/**
 * Get the design system URL for a component
 * @param {string} componentName - The name of the component
 * @returns {string|null} Design system URL or null if not found
 */
export function getDesignSystemUrl(componentName: string) {
  const dsInfo = getDesignSystemInfo(componentName);

  // Handle array of ds-components (like lightbox-dialog)
  if (Array.isArray(dsInfo)) {
    return dsInfo[0]?.url || null;
  }

  return dsInfo?.url || null;
}

/**
 * Get version information for a component
 * @param {string} componentName - The name of the component
 * @returns {Object|null} Version object with cssVersion, markoVersion, reactVersion
 */
export function getComponentVersions(componentName: string) {
  const dsInfo = getDesignSystemInfo(componentName);

  // Handle array of ds-components
  if (Array.isArray(dsInfo)) {
    const firstComponent = dsInfo[0];
    return {
      cssVersion: firstComponent?.cssVersion,
      markoVersion: firstComponent?.markoVersion,
      reactVersion: firstComponent?.reactVersion,
    };
  }

  if (dsInfo) {
    return {
      cssVersion: dsInfo.cssVersion,
      markoVersion: dsInfo.markoVersion,
      reactVersion: dsInfo.reactVersion,
    };
  }

  return {};
}

/**
 * Get all design system URLs for a component (useful for components with multiple ds-components)
 * @param {string} componentName - The name of the component
 * @returns {Array<string>} Array of design system URLs
 */
export function getAllDesignSystemUrls(componentName: string) {
  const dsInfo = getDesignSystemInfo(componentName);

  if (Array.isArray(dsInfo)) {
    return dsInfo.map((ds) => ds.url).filter(Boolean);
  }

  return dsInfo?.url ? [dsInfo.url] : [];
}

/**
 * Get submodules for a component
 * @param {string} componentName - The name of the component
 * @returns {Array<string>} Array of submodule names
 */
export function getComponentSubmodules(componentName: string) {
  const component = getComponentMetadata(componentName);
  return component?.submodules || [];
}

/**
 * Check if a component is in alpha/beta status
 * @param {string} componentName - The name of the component
 * @returns {Object} Status object with alpha, beta, and status properties
 */
export function getComponentStatus(componentName: string) {
  const dsInfo = getDesignSystemInfo(componentName);

  // Handle array of ds-components
  if (Array.isArray(dsInfo)) {
    const firstComponent = dsInfo[0];
    return {
      alpha: firstComponent?.alpha || false,
      beta: firstComponent?.beta || false,
      status: firstComponent?.status || null,
    };
  }

  return {
    alpha: dsInfo?.alpha || false,
    beta: dsInfo?.beta || false,
    status: dsInfo?.status || null,
  };
}

/**
 * Get all component names
 * @returns {Array<string>} Array of all component names
 */
export function getAllComponentNames() {
  return Object.keys(componentMetadata);
}

/**
 * Filter components by status (alpha, beta, stable)
 * @param {string} status - Status to filter by ('alpha', 'beta', 'stable')
 * @returns {Array<string>} Array of component names matching the status
 */
export function getComponentsByStatus(status: "alpha" | "beta" | "stable") {
  return getAllComponentNames().filter((name) => {
    const componentStatus = getComponentStatus(name);

    switch (status.toLowerCase()) {
      case "alpha":
        return componentStatus.alpha;
      case "beta":
        return componentStatus.beta || componentStatus.status === "beta";
      case "stable":
        return (
          !componentStatus.alpha &&
          !componentStatus.beta &&
          !componentStatus.status
        );
      default:
        return false;
    }
  });
}

/**
 * Search components by design system name
 * @param {string} dsName - Design system component name to search for
 * @returns {Array<string>} Array of component names that use this design system component
 */
export function findComponentsByDesignSystemName(dsName: string) {
  return getAllComponentNames().filter((name) => {
    const dsInfo = getDesignSystemInfo(name);

    if (Array.isArray(dsInfo)) {
      return dsInfo.some((ds) => ds.name === dsName);
    }

    return dsInfo?.name === dsName;
  });
}

/**
 * Get component metadata with additional computed properties
 * @param {string} componentName - The name of the component
 * @returns {Object|null} Enhanced component metadata or null if not found
 */
export function getEnhancedComponentMetadata(componentName: string) {
  const baseMetadata = getComponentMetadata(componentName);

  if (!baseMetadata) {
    return null;
  }

  return {
    ...baseMetadata,
    versions: getComponentVersions(componentName),
    status: getComponentStatus(componentName),
    urls: getAllDesignSystemUrls(componentName),
    primaryUrl: getDesignSystemUrl(componentName),
    submodules: getComponentSubmodules(componentName),
  };
}

export function getEnhancedComponentMetadataFromUrl(url: string) {
  const paths = url.split("/");
  let componentName = paths.pop()!;
  let currentTab = "overview";
  let componentData = getEnhancedComponentMetadata(componentName);
  if (!componentData) {
    currentTab = componentName;
    componentName = paths.pop()!;
    componentData = getEnhancedComponentMetadata(componentName);
  }

  return {
    properName: properNameMap[componentName],
    componentData,
    currentTab,
    componentName,
  };
}
