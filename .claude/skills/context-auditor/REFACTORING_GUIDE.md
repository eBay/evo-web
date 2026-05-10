# Context Auditor — Refactoring Guide

Extended patterns and checklists for the [context-auditor](SKILL.md) skill.

## Fidelity Over DRY

- Verbose, redundant configs are GOOD if fully cached
- WET (Write Everything Twice) prevents attention decay
- 5,000-token config at 90% cache rate > 1,100-token "clean" config

## Discovery-First Architecture

- ❌ **DON'T include:** File structures, directory layouts, naming patterns visible via file exploration
- ✅ **DO include:** Non-obvious conventions, version-specific syntax, framework API differences
- **Test:** "Could an AI discover this with Read/Glob/Grep in 1-2 files?" → If yes, replace with reference

## Anti-Patterns to Flag

- Frequently-used material extracted to skills (breaks caching)
- Critical rules buried mid-file (lost in the middle)
- No XML encapsulation for Claude (context bleeding)
- Missing Correctness Guards (version hallucination risk)
- Vague commands like "be thorough" (tool loop trigger)
- File structure ASCII art (discoverable via exploration)
- Documenting patterns instead of referencing examples

## Good Patterns to Recognize

- Verbose, redundant critical rules kept inline (WET)
- Static, prefix-anchored content under 2,000 tokens
- XML-wrapped guardrails for Claude
- Version-specific syntax examples inline
- Critical API differences prominently labeled
- Discovery-first approach (signal over noise)

## Repo-Wide Patterns

**Anti-patterns:** combined budget >2,000 tokens, contradictory parent/child rules, wasteful duplication, hierarchy violations.

**Good patterns:** root file ~1,200–1,500 tokens for core rules, nested files ~100–300 tokens each, clear hierarchy with child extending parent, combined total under 2,000 tokens.
