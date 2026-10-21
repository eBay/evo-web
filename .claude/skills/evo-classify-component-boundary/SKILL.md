---
name: evo-classify-component-boundary
description: >
  Decides where a new or proposed component or variant belongs in the evo-web
  static (Skin) layer: its own component, a modifier of an existing component,
  or an uncovered case. Applies the rules in
  docs/adr/0009-static-component-boundaries.md to the facts of the control and
  reports the evidence behind the result. Use this whenever someone asks
  whether something should be its own component or a variant, where a new
  pattern should live, whether to add a modifier or a new module, or shares
  markup, a story path, a description or a screenshot of a control and asks
  how to organize it, even if they never say "boundary". Also use it when a
  pattern looks like an existing component but is built from a different
  element (an anchor styled as a button, a button styled as a link, a list of
  links styled as tabs or a menu).
---

# evo-classify-component-boundary

This skill classifies. It does not edit files, generate components, or commit
anything. Its output is a verdict with the facts behind it, so an engineer can
check the reasoning in seconds and so nobody re-argues the question from
scratch.

The rules live in `docs/adr/0009-static-component-boundaries.md`. Read that
file at the start of every run and apply it as written. This skill does not
restate the rules because a copy here would drift the first time the ADR is
revised. If a section the steps below refer to has been renamed or removed,
say so and stop instead of guessing.

## Inputs

Two things are needed, and each can be supplied several ways.

1. What the control is underneath. Any one of:
   - Markup (an HTML snippet).
   - A pointer to an existing component or story file. Story files hold the
     HTML in template strings, so read it from there.
   - A description that names the native element, how it activates, and how
     the disabled state works.

   An image never counts here. A screenshot shows appearance, and the ADR
   says appearance does not settle the question. The behavioral facts cannot
   be read from pixels.

2. What it looks like. The existing component it resembles. This is optional
   and is covered by the search in step 3.

An image, a Figma link, or a list of modifiers the variant must combine with
can be added to any of these. If more than one Figma link is given, ask which
is current before using any of them.

## Procedure

Work through the steps in order. The order matters because the final result
"uncovered" is only honest once every earlier step has been done.

1. Read the ADR.

2. Collect the facts. Build one row per fact and record where each came from
   (markup, description, image, or derived):
   - Root element.
   - Keyboard activation. A `button` activates on Enter and Space. An `a`
     with `href` activates on Enter, and Space scrolls the page.
   - Disabled handling. `button` has a native `disabled` that removes it from
     the tab order. `a` has none, so a disabled-looking anchor needs
     `aria-disabled` and manual `tabindex` handling.
   - Screen reader announcement, derived from the element and any `role`.
     If a `role` is present and you are not sure of its keyboard model, say
     so and ask.
   - Whether it combines cleanly with the modifiers the parent already has
     (size, priority, and so on).

   From markup or a pointer, read the facts directly. From a description, use
   only what it states. From an image, record visual facts only (size, shape,
   outline, label) and mark the behavioral rows as unknown. Do not infer an
   element from a label. The word "Link" on a screenshot does not make it an
   anchor.

3. Find the look-alike. If one was named, confirm it exists under
   `packages/skin/src/sass/`. If none was named, search that folder, the
   stories, and the docs routes by element, pattern, and name, and list the
   candidates. Ask whether the control is meant to resemble one before
   settling on "new pattern". Existing components can be fuller than a
   description suggests (a joined row of buttons may already be
   `segmented-buttons`), so look before concluding.

4. Ask for what is missing. Ask once, with every missing fact in one message,
   and never ask for something that can be read from the supplied markup. If
   the answer changes the result, say which answer leads to which result.

5. Apply the tests in the ADR's order: the accessibility test, then the
   modifier compatibility test. Use the single-variant precedent only to
   answer "a module for one variant is overkill". It is not a deciding test.
   Then apply the naming section to propose a name.

6. Check existing modifiers before proposing a new one. If the verdict is a
   modifier, look for near matches in the parent's SCSS and stories, and say
   when one already covers the need.

## Results

Return exactly one of these.

- Own module. Name the rule that fired and propose a name. Note that shared
  styling goes through Sass mixins, not a shared component boundary.
- Modifier of a named parent. Name the parent and any existing modifier that
  already covers it.
- Needs information. Used while waiting on the answer from step 4. No verdict
  is given.
- Uncovered. Only after steps 1 to 6 are done, including one round of
  questions, and the facts still fit none of the ADR's rules. Name the
  missing rule precisely, then file it with `/evo-file-item` so the gap can be
  used to tighten the ADR. A gap that the markup would have closed is not
  uncovered, it is a missing question, so ask instead.

Giving up early hides missing facts and sends the engineer away with nothing.
Calling something uncovered when a question would have settled it wastes the
gap log.

## Output format

```
## Result: <own module | modifier of X | needs information | uncovered>

Proposed name: <name, or "n/a">
Look-alike: <component, or "none found" with the candidates considered>
Rule that fired: <ADR section and the specific check>

### Facts
| Fact | Value | Source |
| --- | --- | --- |
| Root element | ... | markup / description / image / derived |
| Keyboard activation | ... | ... |
| Disabled handling | ... | ... |
| Screen reader announcement | ... | ... |
| Combines with parent modifiers | ... | ... |

### Next
<What the engineer should do, or which answer would change the result.>
```

Keep it short. The facts table is the evidence, and the result line is the
only part most readers need.
