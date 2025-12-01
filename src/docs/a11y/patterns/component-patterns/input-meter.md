# Input Meter Accessibility

![Strength meter for a password input](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcDm-9OJOepDl9ytw%2Finputmeter.png?generation=1548799250819657&alt=media)

### Introduction

An input meter gauges user input according to a set of pre-defined levels. For example, a password strength meter may indicate "weak", "medium", "strong", etc. Another type of input meter is a character count, which indicates how many characters have been used and/or are remaining.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](http://ebay.github.io/mindpatterns/messaging/input-meter/).

### Terminology

**Input Meter:** the pattern as a whole, consisting of the following parts.

**Input**: the interactive textbox element

**Meter**: the non-interactive meter element

### Best Practices

The meter **must not** use colour alone to convey meaning.

Each threshold or boundary that is conveyed via colour must also have that same meaning conveyed in visible text (for example, green = "good", red = "not good").&#x20;

### Interaction Design

This section provides interaction design for keyboard, screen reader & pointing devices.

#### Keyboard

The meter itself is a non-interactive element, therefore should **not** gain keyboard focus.

The input should be focusable and adhere to usual _textbox_ interaction design.

#### Screen Reader

The input should be reachable via screen reader and adhere to usual _textbox_ interaction design.

The screen reader should convey any changes to the meter.

When the non-interactive meter element gains virtual cursor focus, the screen reader should it announce its role, value and any state(s).

#### Pointer

The input should be clickable and focusable like any regular textbox.

The meter itself is a non-interactive element, therefore should **not** be clickable or tappable.
