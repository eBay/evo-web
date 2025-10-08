# Pattern Naming Scheme

In the beginining of the web, most names were derived from the print world (e.g. heading, image). Then, around the time of DHTML and AJAX, we saw an influx of patterns from the desktop world (hence the introduction of ARIA, e.g. role=tabs, role=menu). In recent times we find that many newer patterns stem from native phone operating systems (i.e. iOS & Android).

While it is common practice for design systems to name and categorize things according to a mostly _visual_ naming system (e.g. cells, dropdown, expansions, selections, etc), this method of naming is often too broad and does not always translate well to existing HTML tags, standards & conventions that a web developer is familiar with.

At the component level we typically find that we need a more fine-grained and semantic approach to naming. A prime example is the term "dropdown"; in a purely visual language this umbrella term may suffice, but for the web developer it can sow seeds of confusion. For example, is it a menu (i.e. role=menu), a select (i.e. the HTML select element), a listbox (i.e. role=listbox), or a combobox (i.e. role=combobox with role=listbox)?

Rather than reinvent the wheel, we look to well established naming systems to guide our decision making, namely the W3C web standards & specifications.

Here are the general rules of thumb we follow when it comes to naming.

### 1. Follow HTML

Examples: button, checkbox, details, link, radio, select, switch, video.

### 2. Follow ARIA

Examples: combobox, listbox, menu, tabs, textbox, toggle-button (i.e. `aria-pressed`), tooltip.

### 3. Combine HTML/ARIA

Examples: alert-dialog, listbox-button, menu-button.

### 4. Partially combine HTML/ARIA

Examples: date-textbox, filter-button, fullscreen-dialog, icon-button, lightbox-dialog.

### 5. Consider JavaScript APIs

Examples: confirm-dialog & input-dialog (inspired by `confirm()` and `prompt()`).

### 6. Use long-standing web design/ux conventions

Examples: breadcrumbs, carousel, pagination, split-button, star-rating.

### 7. Look for close relationships to existing names

Examples: infotip & tourtip take inspiration from tooltip.

### 8. Fallback to use design system language(s) for inspiration

Examples: avatar, badge, chip, progress-stepper, segmented-buttons.
