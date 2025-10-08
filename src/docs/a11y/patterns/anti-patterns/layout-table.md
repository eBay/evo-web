# Layout Table

Do not use the HTML table tags (\<table>, \<tr>, \<td>, etc.) for page or module layout.

For example, do not use table rows and columns to arrange the header, sidebar and main content areas of a page or module:

```markup
<!-- This is bad! Please do not copy! -->
<body>
    <table>
        <tr>
            <td colspan="2">
                <!-- page header/banner -->
                <img src="sitelogo.jpg" />
            </td>
        </tr>
        <tr>
            <td>
                <h2>Sidebar</h2>
                <!-- sidebar content -->
            </td>
            <td>
                <h1>Page Header</h1>
                <!-- main content -->
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <!-- page footer -->
            </td>
        </tr>
    </table>
</body>
<!-- Urgh, I felt dirty writing that. The things I do for you all. -->
```

The table tags should only be used to represent [tabular relationships between data](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/antipatterns/..structure/tables.md). The table tags have semantics that will cause problems for screen reader users if used for layout.

For example, in the code example above, the screen reader would pre-announce all elements inside the sidebar as "row 2 column 1", and all elements in the main content with "row 2 column 2" etc.

CSS can, and should, be used to achieve row/column layouts in pages and modules and this layout is transparent to the screen reader user.

### Legacy Code

If you have legacy code that you wish to make accessible, and are unable to rewrite your entire markup and CSS, a quick fix is to apply **role=presentation** to the table tag:

```markup
<table role="presentation">
    <!-- rows and columns go here as normal -->
</table>
```

With this role, visual layout will be maintained but all table, row and column semantics will be removed from the accessibility tree.

### The CSS Table Model

Annoyed that you can't use tables for layout anymore, because you find that super useful and CSS floats are a pain?

Take a look at [The CSS table model](http://www.w3.org/TR/CSS2/tables.html#table-display) which lets you layout DIVS and SPANS using similar table-like syntax, without the semantics.
