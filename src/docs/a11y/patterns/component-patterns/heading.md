# Heading Accessibility

### Introduction

Upon visiting a web page for the first time, a sighted user will typically scan the headings of the page to create a visual model of its content. On subsequent visits to the page, the user recollects this visual model.

A non-sighted user will typically want to do exactly the same, using their screen reader to scan for headings to create a mental model.

### Working Examples

_The content for this section is not yet available, please check back again for updates._

### Best Practices

Every page **must** have a single H1 heading.

The H1 heading **should** describe the content and purpose of the page.

The H1 heading does _not_ need to be the first heading in the page.

Every page region requires a single H2 heading. This heading describes the content and purpose of the region. It is good practice to wrap every page region in a div or section tag.

Every page region can contain multiple H3 - H6 headings, but they _must_ be placed in the markup in strict hierarchical order.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Headings are not interactive elements and therefore have no keyboard interaction.

**NOTE**: headings can _contain_ links, which _are_ interactive elements.

#### Screen Reader

Screen reader will identify heading by it's level, e.g. 1 to 6.

#### Pointer

Headings are not interactive elements and therefore have no pointer interaction.

A heading may give the illusion of being an interactive element if it contains a link, or is wrapped in a link, but the heading element itself is not clickable.
