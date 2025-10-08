# Description List Accessibility

![A description list for DVD player item listing.](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-MKgDanA90xey0b_E4Ui%2F-MKgI1_dJsHVgkw8yytC%2Fdescription-list-dweb.png?alt=media\&token=1406ce43-fc0c-4460-bc70-e3fa988b6da0)

### Introduction

A description list represents an association list consisting of zero or more name-value groups. It maintains the many-to-many relationship between names and values (ex: terms and definitions, metadata topics and values, questions and answers, or any other groups of name-value data).

The \<dl> element encloses a list of groups of terms (specified using the \<dt> element) and descriptions (provided by \<dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

### Working Examples

The content for this section is not yet available.

### Best Practices

* Every list should have a pairing (name-value).
* Lists should not be nested within each other.

### Interaction Design

Description lists themselves are not interactive, but may contain nested interactive elements (such as links).

### Developer Guide

A description list requires no ARIA.

```markup
<dl>
    <dt>Authors:</dt>
    <dd>Remy Sharp</dd>
    <dd>Rich Clark</dd>
    <dt>Editor:</dt>
    <dd>Brandan Lennox</dd>
    <dt>Category:</dt>
    <dd>Comment</dd>
</dl>
```
