# Card Accessibility

An item card is a display element that is not itself interactive, but houses elements, such as an image wrapped by an anchor, an add to favorites button, item title that is also wrapped in an anchor, etc.

## Best Practices

Cards must be implemented with accessibility in mind. Self-actionable cards should have clear, descriptive accessible names.

Avoid nesting complex structures like headings or lists within self-actionable cards, as screen readers will only announce the button or link text.

For hybrid cards, ensure they use a <code>&lt;div&gt;</code> container with JavaScript event handling rather than nested interactive elements, which would violate accessibility guidelines.

## Interaction Design

### Keyboard

The interaction inside an item card should be simple keyboard `TAB` navigation of interactive elements with the `ENTER` key activating the element in focus.

## Grouped Item Cards

Item cards typically display in groups. Grouped item cards use and inherit the `a11y` setup of Layout Grid. For more information about using the grouped item cards, please see the [Layout Grid pattern](layout-grid).
