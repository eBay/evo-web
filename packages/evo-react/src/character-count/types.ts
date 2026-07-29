import type { ComponentProps, RefObject } from "react";

type CharacterCountSource =
  | {
      /** Text whose grapheme characters are counted. Required unless `count` is provided. */
      text: string;
      /** Manual count used instead of calculating from `text`. */
      count?: number;
    }
  | {
      text?: never;
      /** Manual count used instead of calculating from `text`. */
      count: number;
    };

export type CharacterCountInputRef = RefObject<
  HTMLInputElement | HTMLTextAreaElement | null
>;

export type EvoCharacterCountProps = ComponentProps<"span"> &
  CharacterCountSource & {
    /** Maximum number of characters allowed. */
    max: number;
    /**
     * Clipped text announced after the count. English default to be overridden
     * is `"characters used"`. Pass `null` explicitly _only_ if alternative
     * accessibility information is present.
     */
    a11yText?: string | null;
    /** Reference to the associated input or textarea. Its `aria-live` becomes `"polite"` above the maximum. */
    inputRef?: CharacterCountInputRef;
  };
