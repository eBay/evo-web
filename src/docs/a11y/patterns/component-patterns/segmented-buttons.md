# Segmented Buttons Accessibility

## Best Practices

Segmented buttons are not form controls; although they can be used within a form to provide branching capabilties, they do not store and submit form data.

Segmented buttons are not a drop-in replacement for tabs, nor do they operate like tabs. Tabs and Segmented Buttons solve two different problems.

## Interaction Design

Even though visually styled as a group, each button has normal button interactions (i.e. they each live in the normal tab order of the page) that triggers arbitrary JavaScript logic.

The only thing to set them apart from a normal button, is that "clicking" one segment will unset the current segment (the state is conveyed with the `aria-current` attribute).

## ARIA Reference

| Attribute             | Description                            |
| --------------------- | -------------------------------------- |
| **aria-current=true** | Conveys the currently pressed segment. |
