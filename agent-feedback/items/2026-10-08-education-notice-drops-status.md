---
type: bug
impact: low
effort: low
site: packages/ebayui-core/src/components/ebay-education-notice/index.marko › <ebay-notice-base>
---

# Remove the unused `@status` attribute from ebay-education-notice

`ebay-education-notice` declares `@status` (attention, confirmation, information) in `marko-tag.json`, but its `index.marko` destructures `status` out of `input` and never passes it to `<ebay-notice-base>`. The status icon branches in `ebay-notice-base` never run for this tag, so the notice always shows the lightbulb or `educationIcon`. The `Prominent` and `ProminentIcon` stories pass `status: "attention"` and still render their custom vault and authenticity-guarantee icons, so the schema and stories advertise an option that does nothing. Skin's `education-notice.scss` has no status styling, and every Skin education-notice example uses a 24px education icon, so remove `@status` from the tag schema and stories rather than forwarding it. Checked: ebayui-core (attribute declared and dropped), ebayui-core-react and evo-react (no `status` prop). evo-marko has no education notice yet.

Check: `npx vitest run src/components/ebay-education-notice/test/test.server.js` in `packages/ebayui-core` passes, and `grep -c attention-filled packages/ebayui-core/src/components/ebay-education-notice/test/__snapshots__/test.server.js.snap` prints `0` even though the `Prominent` story args set `status: "attention"`.
