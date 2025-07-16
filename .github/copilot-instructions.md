# Copilot PR Review Instructions

## Overview
When reviewing pull requests for the evo-web project, please follow these custom guidelines and check for the items outlined in our PR checklist. This project contains multiple packages with specific requirements for each.

## Project Context
- **Repository**: evo-web - eBay's UI component libraries
- **Packages**: 
  - `skin` - CSS/SCSS styling framework
  - `ebayui-core` - Marko components
  - `ebayui-core-react` - React components
  - `evo-marko` - Marko utilities
- **Standards**: BEM methodology, WCAG 2.2 AA accessibility, semantic HTML5

## Required Checklist Items to Verify

### For All PRs
- [ ] **Build Status**: Verify the build is in a non-broken state
- [ ] **Scope**: Ensure all changes are within scope of the linked GitHub issue
- [ ] **Issue Reference**: Check that PR properly references the issue with "Fixes #[number]"

### For Markup Changes (Marko/HTML files)
- [ ] **Breaking Changes**: Verify markup changes won't be breaking (unless major release)
- [ ] **MIND Pattern**: Check that the MIND pattern for the component has been created/revised
- [ ] **BEM Naming**: Ensure BEM (Block Element Modifier) conventions are followed
- [ ] **Semantic HTML**: Verify use of semantic HTML5 elements
- [ ] **Accessibility**: Check WCAG 2.2 AA compliance including:
  - ARIA roles and attributes where necessary
  - Proper contrast ratios
  - Keyboard navigation support
  - Focus states for interactive elements

### For CSS/SCSS Changes
- [ ] **Dist Regeneration**: Verify all CSS files under dist folder have been regenerated
- [ ] **Browser Testing**: Check that UI has been tested in all supported browsers
- [ ] **Visual Regression**: Ensure Percy build was done and approved for visual regression testing
- [ ] **Dark Mode**: Verify UI works in dark mode
- [ ] **RTL Support**: Check right-to-left (RTL) mode compatibility
- [ ] **Storybook**: Verify Storybook coverage has been added/updated/removed as appropriate
- [ ] **Required Storybook Stories**: Ensure all components have the following stories (unless explicitly excluded):
  - RTL (Right-to-Left) story
  - Text Spacing story
- [ ] **BEM Naming**: Ensure BEM methodology is followed for all selectors
- [ ] **CSS Variables**: Check use of CSS variables for colors, spacing, and typography
- [ ] **Responsive Design**: Verify mobile-friendly design using CSS Grid or Flexbox

## Code Quality Checks

### Storybook Requirements
- **Required Stories**: All components must include RTL and Text Spacing stories unless explicitly excluded
- **Story Coverage**: Verify that new/modified components have appropriate Storybook stories
- **Story Quality**: Check that stories demonstrate key component variants and states
- **Documentation**: Ensure stories include proper controls and documentation

### General Code Quality
- **Consistency**: Check adherence to existing code patterns and style
- **Documentation**: Verify appropriate comments and documentation
- **Performance**: Look for potential performance issues
- **Security**: Check for any security vulnerabilities

### Component-Specific
- **API Consistency**: Ensure component APIs follow established patterns
- **Props/Attributes**: Verify proper typing and validation
- **Event Handling**: Check appropriate event handling patterns
- **State Management**: Review state management approaches

### Testing
- **Test Coverage**: Ensure adequate test coverage for new/modified code
- **Test Quality**: Review test cases for completeness and correctness
- **Integration Tests**: Check that integration tests cover user scenarios

## Style Guide Compliance
Reference the official style guide: https://github.com/eBay/evo-web/blob/main/packages/skin/STYLEGUIDE.md

## Accessibility Priority
Always prioritize accessibility (a11y) compliance:
- WCAG 2.2 AA guidelines adherence
- Keyboard navigation support
- Screen reader compatibility
- Proper color contrast
- Focus management

## Package-Specific Considerations

### Skin Package
- Focus on CSS/SCSS best practices
- Ensure design system consistency
- Check component visual fidelity
- Verify cross-browser compatibility

### EbayUI Core (Marko)
- Review Marko component patterns
- Check component lifecycle handling
- Verify proper event binding

### EbayUI Core React
- Review React best practices
- Check hooks usage
- Verify proper component composition

## Red Flags to Watch For
- Missing accessibility attributes
- Breaking changes without major version bump
- Hardcoded values instead of CSS variables
- Non-semantic HTML elements
- Missing or incomplete tests
- Inconsistent naming conventions
- Missing documentation updates
- Performance regressions

## Review Tone
- Be constructive and educational
- Reference specific style guide sections when applicable
- Suggest improvements with examples
- Acknowledge good practices and clean code
- Focus on maintaining high code quality standards
