/**
 * Design System component metadata
 */
export interface DsComponent {
  /**
   * Name of the component in the Design System
   */
  name?: string;

  /**
   * URL to the Design System documentation
   */
  url?: string;

  /**
   * Marko version of the component (can be number or string)
   * This takes precedence over version if present
   */
  markoVersion?: string;

  /**
   * React version of the component (can be number or string)
   * This takes precedence over version if present
   */
  reactVersion?: string;

  /**
   * The common version if all the versions are the same
   * This is used as the default version.
   * reactVersion and markoVersion will be used over this version
   */
  version?: string;

  alpha?: boolean;
  beta?: boolea;
  status?: string;
}

/**
 * Component metadata with links to Storybook and Design System
 */
export interface ComponentMetadata {
  /**
   * Component identifier/name
   */
  component: string;

  /**
   * Design System component metadata
   */
  "ds-component"?: DsComponent;

  /**
   * General version (for components without ds-component)
   */
  version?: string;

  /**
   * List of submodule dependencies
   */
  submodules?: string[];

  /**
   * Path to CSS Storybook story
   */
  cssStorybookPath?: string;

  /**
   * Path to Marko Storybook documentation
   */
  markoStorybookPath?: string;

  /**
   * Path to React Storybook documentation
   */
  reactStorybookPath?: string;

  /**
   * Subtitle description of the component
   */
  description?: string;
}

/**
 * Collection of all component metadata indexed by component name
 */
export interface ComponentMetadataCollection {
  [componentName: string]: ComponentMetadata;
}

declare const componentMetadata: ComponentMetadataCollection;
export default componentMetadata;
