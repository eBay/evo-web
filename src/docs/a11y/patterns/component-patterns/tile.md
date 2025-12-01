# Tile Accessibility

![An eBay Deals card containing 4 tiles](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcFBuXI6l1BVejTbi%2Ftile.png?generation=1548799252962034&alt=media)

## Introduction

A tile is a large, tap-friendly area that provides a summary-like experience for a link command.

### Light Tile

For tiles with a small amount of text (and maybe a graphic or two), you can simply wrap these elements in an anchor tag and refer to the [Link](link) pattern.

We refer to this kind of tile as a _light_ tile.

### Heavy Tile

For tiles with longer text and structural elements such as lists, subheadings and tables, the contents cannot simply be wrapped in an anchor tag for fear of the link text becoming too verbose and unwieldy for assistive technology.

We refer to this kind of tile as a _heavy_ tile.

## Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/navigation/tile/).

## Best Practices

Tile can have one link destination only. Anything more than one link is considered a card.

Tile **should have** a solid outline to identify the touch region.

Light tile is simply an anchor wrapping the contents of the tile.

Light tile can not contain any interactive elements. This ensures that the tile is a single stop in the tab order.

Light tile **must not** contain long descriptive text or structural elements such as lists, tables and widgets.

Heavy tile **must only** contain one hyperlink and no other interactive elements. This ensures that the tile is a single stop in the tab order.

## Interaction Design

Light tiles inherit all interaction design from the [Link Pattern](link).

For a heavy tile, do not apply `cursor: pointer` to the entire tile. This type of cursor (a little hand) should only appear over the actual link element so that users know where to right-click to copy the link or open in new tab, etc.

For a heavy tile, it is recommended to suppress the default focus indicator of the link inside the tile, and instead display a focus indicator around the entire tile.
