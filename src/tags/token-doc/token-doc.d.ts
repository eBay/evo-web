/**
 * Represents a single design token with its CSS custom property name and value
 */
export interface Token {
  /**
   * The CSS custom property name (e.g., "--color-blue-500")
   */
  prop: string;

  /**
   * The value of the token (e.g., "#0968f6" or "var(--color-blue-500)")
   */
  value: string;
}

/**
 * Collection of design tokens organized by category
 */
export interface TokenDoc {
  /**
   * Core color tokens - foundation color palette
   */
  core: Token[];

  /**
   * Expressive tokens - extended design tokens for expressive designs
   */
  expressive: Token[];

  /**
   * Semantic tokens - tokens with semantic meaning (e.g., success, error, warning)
   */
  semantic: Token[];

  /**
   * Live tokens - tokens for live/dynamic states
   */
  live: Token[];
}

declare const tokenDoc: TokenDoc;
export default tokenDoc;
