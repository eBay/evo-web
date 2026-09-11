---
type: a11y
impact: med
effort: med
site: packages/skin/src/sass/video/video.scss › .video > video
---

# Offset native captions above the video control bar in Firefox

Captions are kept above the `video__controls` bar via
`::-webkit-media-text-track-container { transform: translateY(-56px) }`, which
Chrome, Edge and Safari honor but Firefox has no equivalent for — in Firefox,
cues render at the bottom of the video and are obscured while the control bar
is showing. JS approaches that set the VTT `line` property were removed because
updating a displayed cue does not reflow until the next cue displays, leaving
the offset a cycle behind. A Firefox fix likely means rendering cues into a
custom overlay element from `cuechange` (with `track.mode = "hidden"`), which
also removes the webkit-only dependency.

Check: play the evo-video captions story in Firefox with the control bar
visible; cues render behind the bar.
