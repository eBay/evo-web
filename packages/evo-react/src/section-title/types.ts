import type { ComponentProps } from "react";

export type EvoSectionTitleProps = ComponentProps<"div">;
export type EvoSectionTitleTitleContainerProps = ComponentProps<"div">;

export type SectionTitleHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type EvoSectionTitleTitleProps = ComponentProps<"h2"> & {
  /** Sets the heading level to match the surrounding page hierarchy. Defaults to `"h2"`. */
  as?: SectionTitleHeading;
};

export type EvoSectionTitleSubtitleProps = ComponentProps<"span">;
export type EvoSectionTitleInfoProps = ComponentProps<"div">;
export type EvoSectionTitleOverflowProps = ComponentProps<"div">;

export type EvoSectionTitleCtaProps = Omit<ComponentProps<"a">, "href"> & {
  /** Destination of the section action. Use descriptive link text as children. */
  href: string;
};
