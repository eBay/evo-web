import type { ComponentProps, ElementType } from "react";

/**
 * Props for the root EvoFileInput component. All native `<input>` attributes
 * (except `type`, which is fixed as `"file"`) are forwarded to the underlying
 * `<input>` element. `className` and `style` are applied to the outer
 * `.file-input` wrapper.
 */
export type EvoFileInputProps = Omit<ComponentProps<"input">, "type">;

/**
 * Props for the EvoFileInputHeader sub-component. All native `<span>`
 * attributes are forwarded to the rendered element.
 */
export type EvoFileInputHeaderProps = ComponentProps<"span"> & {
  /**
   * HTML element to render as the header. Defaults to `span`.
   * Use a heading element (e.g. `"h2"`) for semantic heading hierarchy.
   */
  as?: ElementType;
};

/**
 * Props for the EvoFileInputDescription sub-component. All native `<span>`
 * attributes are forwarded to the rendered `<span>` element.
 */
export type EvoFileInputDescriptionProps = ComponentProps<"span">;

/**
 * Props for the EvoFileInputCTA sub-component. All native `<label>` attributes
 * except `htmlFor` are forwarded — `htmlFor` is managed automatically by
 * EvoFileInput context to associate the label with the native file input.
 */
export type EvoFileInputCTAProps = Omit<ComponentProps<"label">, "htmlFor">;
