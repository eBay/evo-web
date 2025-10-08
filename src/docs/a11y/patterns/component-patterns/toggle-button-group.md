# Toggle Button Group Accessibility

<figure><img src="https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LXQc7GhOtVRa7Lw1InO%2Fuploads%2FWOez3dxSoYgPrkAnCSTE%2FToggle%20Button%20Group.png?alt=media&#x26;token=4bbaeb96-f680-4191-8fc1-74b942436dd1" alt=""><figcaption><p>Screenshot 1: Shipping Provider Toggle Buttons</p></figcaption></figure>

### Introduction

The toggle button group is a collection of JavaScript-based buttons; allowing single or multi-selection. The toggle button group gives a more visual emphasis on the choices available compared to form based radios and checkboxes.

### Best Practices

The toggle button group is not a form control; although it can be used within a form - like all buttons - it does not store and submit form data.

The toggle button group is not a drop-in replacement for radios or checkboxes, nor does it operate like those.

### Terminology

**Toggle Button Group**: the name of the pattern as a whole. For example, the classname would be `.toggle-button-group`

**Toggle Button**: a single button in the group. It can be pressed or unpressed.

**Pressed/Unpressed**: correlates to the `aria-pressed` attribute

### Working Examples

Section under development.

### Interaction Design

Even though a toggle button group is single-select or multi-select, like radios and checkboxes respectively, they do not share the exact same interactions as radios and checkboxes..

In a single select toggle group, pressing one button will unpress any currently pressed button in the group. &#x20;

In a multi select toggle group, pressing a button will have no effect on any of the other buttons in the group.

### Developer Guide

The toggle buttons are grouped together in a list. In this example, the third button is in a pressed state.

```markup
<h2>Shipping</h2>
<div class="toggle-button-group">
    <ul>
        <li>
            <button type="button" aria-pressed="false">
                IMAGE
                UPS Ground
                PRICE
            </button>
        <li>
            <button type="button" aria-pressed="false">
                IMAGE
                USPS Priority
                PRICE
            </button>
        <li>
            <button type="button" aria-pressed="true">
                IMAGE
                Fedex Ground
                PRICE
            </button>
        </li>
    </ul>
</div>
```

Under development.

### ARIA Reference

**aria-pressed**

Conveys whether the button is pressed or not (i.e true or false)
