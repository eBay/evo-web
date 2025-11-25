/**
 * Represents a country or territory flag with its metadata
 */
export interface Flag {
  /**
   * Capital city of the country/territory (optional - some flags like Antarctica don't have capitals)
   */
  capital?: string;

  /**
   * Two-letter country/territory code (e.g., "us", "gb", "af")
   */
  code: string;

  /**
   * Continent where the country/territory is located (optional)
   */
  continent?: string;

  /**
   * Whether this is an ISO 3166-1 standard country code
   */
  iso: boolean;

  /**
   * Full name of the country/territory
   */
  name: string;
}

/**
 * Collection of flags data
 */
export interface FlagsData {
  flags: {
    /**
     * Prefix used for flag identifiers
     */
    prefix: string;

    /**
     * Array of all available flags
     */
    list: Flag[];
  };
}

declare const flagsData: FlagsData;
export default flagsData;
