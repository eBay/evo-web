import type { ComponentProps } from "react";

export type FieldLayoutType = "inline" | "block";
export type FieldDescriptionType =
  "default" | "group" | "confirmation" | "information" | "attention";
export type FieldDescriptionPosition = "inline" | "below" | "above";
export type LabelPosition = "start" | "end";

export type EvoFieldProps =
  | (ComponentProps<"span"> & {
      /** Uses the inline `<span>` field wrapper. This is the default. */
      layout?: "inline";
    })
  | (ComponentProps<"div"> & {
      /** Uses a block `<div>` field wrapper. */
      layout: "block";
    });

export type EvoLabelProps = ComponentProps<"label"> & {
  /** Places the label above its associated control. Defaults to `false`. */
  stacked?: boolean;
  /** Adds a visible asterisk; also set `required` on the control itself. */
  required?: boolean;
  /** Places the label before or after the control. Defaults to `"start"`. */
  position?: LabelPosition;
};

type DescriptionCommonProps = {
  /** Sets the helper or status treatment. Omit for unmodified supporting text. */
  type?: FieldDescriptionType;
};

export type EvoFieldDescriptionProps =
  | (ComponentProps<"div"> &
      DescriptionCommonProps & {
        /** Places the description below the control in a `<div>`. This is the default. */
        position?: "below";
      })
  | (ComponentProps<"span"> &
      DescriptionCommonProps & {
        /** Places the description inline or above the control in a `<span>`. */
        position: "inline" | "above";
      });
