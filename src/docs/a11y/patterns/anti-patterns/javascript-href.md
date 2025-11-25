# JavaScript HREF

Never use "javascript:" "#" or similar as the value of an href attribute.

The purpose of the href attribute is to specify a **URL only.** If you wish to run JavaScript on an element click, use a button instead.

### Bad

```html
<a href="javascript:;" id="share">Share on Facebook</a>

<script>
  $("#share").on("click", function (e) {
    // do fb share stuff
  });
</script>
```

### Good

```html
<!-- a button created with JavaScript -->
<button id="share">Share on Facebook</button>

<script>
  $("#share").on("click", function (e) {
    // do fb share stuff
  });
</script>
```

### Even better

Use progressive enhancement:

```html
<a href="http://www.facebook.com/share?id=12345" id="share"
  >Share on Facebook</a
>

<script>
  $("#share").attr("role", "button");
  $("#share[role=button]").on("click", function (e) {
    this.preventDefault();
    // do fb share stuff
  });
</script>
```

The screen reader will announce "Share on Facebook. Button" or fallback to "Share on Facebook. Link" if JavaScript is not ready or available.
