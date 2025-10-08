# Alternative Text Accessibility

The alt attribute (more often just referred to as "alt text") is an alternative means to convey information that is otherwise only provided visually in images.

Proper use of alt text is relevant in the following situations:

* Embedded image text
* Image links
* Adjacent alt text

In all cases the alt attribute **must** **always** be present, but it *can* and should have an empty value in certain situations (read on for more details). Removing the alt attribute altogether would result in the screen reader announcing the entire image url, which is not desirable for our users.

### Embedded image text

If the image contains text (usually ads and promo banners), we must convey this text in the alt attribute.

```markup
<img src=”fashion_promo.jpg” alt=”Explore eBay Fashion” />
```

### Image links

If an image is a link, its alt text is incorporated as the link text.

```markup
<a href=”http://www.ebay.com/itm/12345”>
    <img src=”lumia_950.jpg” alt=”Microsoft Lumia 950” />
</a>
```

### Adjacent alt text

If the alt text would repeat nearby or adjacent text, we can leave its value empty so that the screen reader will ignore the image.

```markup
<a href=”http://www.ebay.com/itm/12345”>
    <img src=”lumia_950.jpg” alt=”” role=”presentation” />
    <p>Microsoft Lumia 950</p>
</a>
```

Remember, removing the alt attribute is **not** the same as an alt attribute with an empty value. Removing the alt attribute would result in the screen reader announcing the entire image url, which is not desirable.
