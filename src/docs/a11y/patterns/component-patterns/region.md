# Region Accessibility

Upon visiting a website for the first time, a sighted user will typically scan the page with their eyes to create a _visual_ model of the page layout. Assuming the page is visually well designed, the sighted user can quickly glean a high level view of what page regions are available.

Using screen reader assistive technology, a non-sighted user can achieve a similar a _mental_ model; again though, this is assuming the page has been _semantically_ well structured using regions\*.

Similar to [headings](https://github.com/ebay/mindpatterns/tree/6c14ac7802634b97b44038d80935b912adbcd5cf/structure/headings.md), regions can be used as navigational aids. Screen readers like JAWS and NVDA not only provide a full list of regions, but also provide keyboard shortcuts to move between them. For example, in JAWS you can press the R key to go to the next region or SHIFT + R to go to the previous one.

_\*regions are synonymous with HTML5 sections and the terms are used interchangeably._

### Best Practices

There are two types of region:

**Landmark regions** identify the main regions of a page that are common across websites. Site banner/logo, the search box, site navigation, main content area, sidebar, etc. HTML5 and ARIA provide us with a limited list of landmark tags and roles respectively.

**Custom landmark regions** identify the main areas of a page that are common to a specific website. Search filters, user profile, notifications, help, etc. HTML5 and ARIA provide us with the section tag and region role respectively, as the building blocks to create any number of custom regions.

Do not overuses regions! The list of regions should be quickly readable & scannable in order to create a high-level mental model of the main page sections. A general rule of thumb is no more than ten.

Every region should have a corresponding, on screen level-2 [heading](heading).

### Example

The following example shows how we can markup the main regions of a page:

```markup
<body>
    <header>
       <img src=“sitelogo.jpg” />
       <nav>
        …
       </nav>
       <div role="search">
        …
       </div>
    </header>
    <main>
        <section role=“region” aria-labelledby="userprofile_heading">
           <h2 id="userprofile_heading">User Profile</h2>
           …
        </section>
        …
    </main>
    <aside>
        <h2>Advertisement</h2>
        …
    </aside>
    <footer>
        …
    </footer>
</body>
```

In this example, we have added a custom user profile region inside of our main content. Custom regions **must** be labelled. The screen reader will identify the region in our example as 'User Profile region' (or words to those affect).

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

Regions are not interactive elements and therefore have no keyboard interaction.

#### Screen Reader

Screen readers will identify regions by their label, and all regions (landmarks & custom) are available with screen reader shortcut keys. Note that VoiceOver identifies both types of regions as 'landmarks'.

#### Pointer

Regions are not interactive elements and therefore have no pointer interaction.

### ARIA Reference

#### role=region

Informs assistive technology that this element starts a region landmark

#### aria-labelledby

Regions must be labelled in order to appear in the screen reader's list of custom landmarks.
