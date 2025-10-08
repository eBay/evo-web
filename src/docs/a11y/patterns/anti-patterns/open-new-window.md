# Open New Window

Forcing links to open in a new window is an anti-pattern because we are taking control *away* from the user and forcing web-browsing behaviour upon them. If a user wishes to open a link in a new window, they can do so by using their mouse or keyboard shortcut, without our intervention.

If you must create a link that opens in a new window, screen reader users **must** be pre-warned of the behaviour. We achieve this with clipped suffix text:

```markup
<a href="http://www.ebay.com/shop" target="_blank">
    Shop Now<span class="clipped"> - opens in new window or tab</span>
</a>
```

### Using an Icon

Ideally we should also warn *sighted* users of this behaviour. We can do this by adding the text to a foreground image:

```markup
<a href="http://www.ebay.com/shop" target="_blank">
    Shop Now<img src="new-window-icon.jpg" alt=" - opens in new window or tab" />
</a>
```

Alternatively, using a CSS background image:

```markup
<a href="http://www.ebay.com/shop" target="_blank">
    Shop Now<span aria-label=" - opens in new window or tab" class="icon-new-window" role="img"></span>
</a>
```

### References

* [Pattern : Link](https://ebay.gitbook.io/mindpatterns/navigation/link)
* [Technique: Clipped Text](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text)
