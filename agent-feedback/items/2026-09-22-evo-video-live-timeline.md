---
type: bug
impact: med
effort: med
site: packages/evo-react/src/video/video-controls.tsx › VideoTimelineControl
---

# Define timeline behavior for live video

EvoVideo converts a non-finite media duration to zero. Live HLS commonly reports `duration === Infinity`, so the timeline stays at zero, shows `0:00`, and cannot seek even when the media element has a seekable window. Decide whether to hide the timeline for live media or map its range to `video.seekable`, then cover the chosen behavior in a browser test. Checked: evo-react only.

Check: render EvoVideo with timeline controls, set the video duration to `Infinity`, dispatch `durationchange`, and observe that the seek input remains at zero with a `0:00` duration.
