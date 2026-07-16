import type { ComponentProps, RefObject } from "react";

type CharacterCountSource =
  | {
      text: string;
      count?: number;
    }
  | {
      text?: never;
      count: number;
    };

export type CharacterCountInputRef = RefObject<
  HTMLInputElement | HTMLTextAreaElement | null
>;

export type EvoCharacterCountProps = ComponentProps<"span"> &
  CharacterCountSource & {
    max: number;
    /**
     * Clipped text for screen readers. English default to be overridden is
     * `"characters used"`. Pass `null` explicitly _only_ if alternative
     * accessibility information is present.
     */
    a11yText?: string | null;
    inputRef?: CharacterCountInputRef;
  };
