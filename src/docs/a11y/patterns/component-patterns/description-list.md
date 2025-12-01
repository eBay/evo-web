# Description List Accessibility

## Introduction

A description list represents an association list consisting of zero or more name-value groups. It maintains the many-to-many relationship between names and values (ex: terms and definitions, metadata topics and values, questions and answers, or any other groups of name-value data).

The \<dl> element encloses a list of groups of terms (specified using the \<dt> element) and descriptions (provided by \<dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

## Best Practices

- Every list should have a pairing (name-value).
- Lists should not be nested within each other.

## Interaction Design

Description lists themselves are not interactive, but may contain nested interactive elements (such as links).
