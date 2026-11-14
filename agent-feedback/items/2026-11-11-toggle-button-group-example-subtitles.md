---
type: cleanup
impact: low
effort: low
site: packages/evo-marko/src/tags/evo-toggle-button-group/examples/externalLabel.marko › <evo-toggle-button-group>
---

# Press the buttons whose subtitles say "Pressed on load" in the toggle-button-group examples

In the `externalLabel` and `PreferredColumns` (`examples/columns.marko`) stories, the third and fifth buttons are subtitled "Pressed on load" but the group presses none of them: `externalLabel` presses nothing, and `columns.marko` passes `pressed=3`, which presses the fourth button, subtitled "Empty on load". The group decides `pressed` itself, so set it on the group (eg `pressed=[2, 4]`, as `examples/withDefault.marko` does) or correct the subtitles. Checked: evo-marko only.

Check: server-render the `externalLabel` and `PreferredColumns` stories with `composeStories` and list the `[aria-pressed="true"]` buttons: none, and "Fourth Item Empty on load".
