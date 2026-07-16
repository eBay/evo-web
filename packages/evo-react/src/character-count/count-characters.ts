const segmenter =
  "Segmenter" in Intl
    ? new (
        Intl as typeof Intl & {
          Segmenter: new (
            locales?: string | string[],
            options?: { granularity: "grapheme" },
          ) => { segment: (value: string) => Iterable<unknown> };
        }
      ).Segmenter(undefined, { granularity: "grapheme" })
    : null;

export function countCharacters(text: string): number {
  if (segmenter) {
    return [...segmenter.segment(text)].length;
  }
  return [...text].length;
}
