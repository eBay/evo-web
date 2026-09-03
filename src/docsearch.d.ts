// @docsearch/js v5 exposes the classic widget via an exports-map subpath,
// which the current @marko/type-check's node10 resolution cannot see. This
// minimal declaration bridges the gap until the type-checker update lands.
declare module "@docsearch/js/docsearch" {
  const docsearch: (props: {
    container: HTMLElement | string;
    appId: string;
    apiKey: string;
    indices: Array<string | object>;
    [key: string]: unknown;
  }) => unknown;
  export default docsearch;
}
