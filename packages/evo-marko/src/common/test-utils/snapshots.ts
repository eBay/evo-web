import { render, normalize, prettyDOM } from "@marko/testing-library";
import { expect } from "vitest";

type DomNode = Element | DocumentFragment;

// `@marko/testing-library`'s `normalize()` already strips hydration comments,
// `data-marko*` / `data-widget`, and Marko 5 bootstrap scripts. Its script
// regex only matches single-character runtime ids (`M._`, `("M")("_")`) — see
// `node_modules/@marko/testing-library/dist/index.mjs` (`MARKO_SCRIPT_REG`).
// Marko 6 emits multi-character ids and `self[runtimeId]`; those scripts are
// not removed by `normalize()` yet, so we strip them here.
const MARKO_6_RESUME_SCRIPT =
  /\bM\.[\w$]+\.[bwrs]\b|\("M"\)\("[\w$-]+"\)|self\[runtimeId\]/;

function stripMarko6Scripts<T extends DomNode>(container: T): T {
  for (const script of Array.from(container.querySelectorAll("script"))) {
    if (!script.src && MARKO_6_RESUME_SCRIPT.test(script.textContent || "")) {
      script.remove();
    }
  }
  return container;
}

// When a snapshot covers only a subtree, `normalize()` may not rewrite every
// Marko-generated id token that appears in attribute values (e.g. aria-*).
// Normalize remaining `sM…` tokens to stable placeholders. The token is `sM`
// followed by a scope suffix and a counter (`sM_1`, and longer forms).
const MARKO_6_AUTO_ID_RE = /\bsM[A-Za-z0-9$_]*\d+\b/g;

function normalizeMarko6Ids(serialized: string): string {
  const map = new Map<string, string>();
  return serialized.replace(MARKO_6_AUTO_ID_RE, (id) => {
    let replacement = map.get(id);
    if (replacement === undefined) {
      replacement = `MARKO-ID-${map.size}`;
      map.set(id, replacement);
    }
    return replacement;
  });
}

/**
 * Pretty-printed HTML for snapshots: runs `normalize()` from
 * `@marko/testing-library`, then the Marko 6 fixes above, then `prettyDOM()`.
 */
function prettyNormalizedDOM(
  el: DomNode | null | undefined,
): string | null | undefined;
function prettyNormalizedDOM(els: readonly DomNode[]): string[];
function prettyNormalizedDOM(el: any): any {
  if (Array.isArray(el)) return el.map((n) => prettyNormalizedDOM(n));
  if (el == null) return el;
  const cleaned = stripMarko6Scripts(normalize(el));
  const toStr = (n: Element): string => {
    // Default `prettyDOM` turns on pretty-format syntax highlighting in Node,
    // which embeds ANSI escapes — ugly and noisy in committed `.snap` files.
    const pretty = prettyDOM(n, undefined, { highlight: false });
    return typeof pretty === "string" ? pretty : "";
  };
  const out =
    (cleaned as Node).nodeType === 11
      ? Array.from((cleaned as DocumentFragment).children)
          .map(toStr)
          .join("\n")
      : toStr(cleaned as Element);
  return normalizeMarko6Ids(out);
}

async function snapshotHTML(template: any, input?: any) {
  const { container } = await render(template, input);
  expect(prettyNormalizedDOM(container)).toMatchSnapshot();
}

export { snapshotHTML, prettyNormalizedDOM };
