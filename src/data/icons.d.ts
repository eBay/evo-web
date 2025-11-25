/**
 * Represents an icon with its dimensions and metadata
 */
export interface Icon {
  /**
   * Name of the icon (e.g., "add-12", "ai-camera-16")
   */
  name: string;

  /**
   * Size designation of the icon (e.g., "12", "16", "24", "24-colored")
   */
  size: string;

  /**
   * Height of the icon in pixels (as string)
   */
  height: string;

  /**
   * Width of the icon in pixels (as string)
   */
  width: string;
}

/**
 * Program badges collection with prefix and list
 */
export interface ProgramBadges {
  /**
   * Prefix used for program badge identifiers
   */
  prefix: string;

  /**
   * Array of program badge names
   */
  list: string[];
}

/**
 * Collection of icons data with metadata
 */
export interface IconsData {
  icons: {
    /**
     * Prefix used for icon identifiers
     */
    prefix: string;

    /**
     * Icons that should use large documentation display
     */
    largeDocs: string[];

    /**
     * Array of all available icons
     */
    list: Icon[];

    /**
     * Icons to skip in documentation
     */
    skipDocs: string[];

    /**
     * Deprecated icons (null if none)
     */
    deprecated: Icon[] | null;

    /**
     * Program badges configuration
     */
    "program-badges": ProgramBadges;

    /**
     * Icons to skip entirely
     */
    skip: string[];
  };
}

declare const iconsData: IconsData;
export default iconsData;
