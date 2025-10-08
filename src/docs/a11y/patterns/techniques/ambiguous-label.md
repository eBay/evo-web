# Ambiguous Label

A typical e-commerce sight is rife with buttons and links such as 'Add', 'Edit', 'Update', and 'Delete' etc. We class them as _ambiguous labels,_ because the label is not unique to the page; the visual label alone does not explicitly call out the item, or noun, that it refers to. This can be a challenge for users of assistive technology.

One way of reducing the barrier for assistive technology is to ensure good heading structure for your page, so that the full context of the label can be perceived from the preceding heading.

If the context _cannot_ be derived from the nearest heading, or you are striving to meet WCAG AAA requirements, the _programmatic_ label can be set explicitly (via aria-label) with the necessary context:

{% code overflow="wrap" %}
```html
<a href="http://www.ebay.com/cart/add" aria-label="Add to Cart - iPhone 6, 32GB">Add to Cart 6</a>

<button aria-label="Place Bid - iPhone 6, 32GB">Place Bid</button>
```
{% endcode %}

The same result can be achieved with clipped text instead of ARIA:

{% code overflow="wrap" %}
```markup
<a href="http://www.ebay.com/cart/add">Add to Cart<span class="clipped"> - iPhone 6, 32GB</span></a>

<button>Place Bid<span class="clipped"> - iPhone 6, 32GB</span></button>
```
{% endcode %}

Clipped text remains hidden to sighted users but visible for AT. Please refer to the [Utilities page](../appendix/utils) for more information on the clipped class.

**NOTE**: additions to the labelling text must always be _appended_, not prepended; prepending text that does not appear visually creates issues for users of voice input software.
