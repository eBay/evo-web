# Segmented Buttons Accessibility

<div align="center"><figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FLWAFNPr0PF4lrOEJARmi%2FSegmented%20Button%201.png?alt=media&#x26;token=dee918ca-2fdd-413a-89ea-76f9ae77f42f" alt="Screenshot 1 - Controlling a Chart"><figcaption><p>Screenshot 1 - Controlling a Chart</p></figcaption></figure></div>

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2F3QIBAgISkxApvzlTwQe6%2FSegmented%20Button%202.png?alt=media&#x26;token=572664b5-9ec7-4e5d-b644-f0c3829a5d96" alt="Screenshot 2 - Controlling Forms"><figcaption><p>Screenshot 2 - Branching Content</p></figcaption></figure>

### Introduction

Segmented buttons are a list of JavaScript-based buttons; their purpose is to control the state of an object (e.g. a chart) or the visibility of section content (e.g. branching content).

### Best Practices

Segmented buttons are not form controls; although they can be used within a form to provide branching capabilties, they do not store and submit form data.

Segmented buttons are not a drop-in replacement for tabs, nor do they operate like tabs. Tabs and Segmented Buttons solve two different problems.

### Interaction Design

Even though visually styled as a group, each button has normal button interactions (i.e. they each live in the normal tab order of the page) that triggers arbitrary JavaScript logic.

The only thing to set them apart from a normal button, is that "clicking" one segment will unset the current segment (the state is conveyed with the `aria-current` attribute).

### ARIA Reference

| Attribute             | Description                            |
| --------------------- | -------------------------------------- |
| **aria-current=true** | Conveys the currently pressed segment. |
