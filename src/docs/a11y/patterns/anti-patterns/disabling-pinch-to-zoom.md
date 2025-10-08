# Disabling Pinch-to-Zoom

In a `<meta name=”viewport”... >` element

* Don’t set `user-scalable=”no”`
* Don’t use `maximum-scale`

### Why not?

Users with low vision depend on the ability to zoom content.

* We **must not** disable the use of the native browser zoom.
* We **must not** dictate how much a user can zoom the page.

The user has the right to make their experience useful for them even though others might not like the way it looks. The ability to pinch/zoom is an expected gesture for these devices, we should not remove this functionality.

### Browser Oddities

It seems that not all browsers support meta viewport. If you're unable to reproduce this issue, please refer to one of the mobile browsers below.

#### Seems to support meta viewport

* Chrome for iOS

#### Doesn't seem to support meta viewport

* Safari for iOS

### Exceptions

Disabling pinch-to-zoom only makes sense in certain situations: a game, image editing or mapping application, for example.
