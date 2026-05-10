---
name: context-auditor
description: "Audits and refactors AI configuration files (like CLAUDE.md, system prompts, or project instruction files) to optimize for fidelity, cache efficiency, and task success rate. Use when the user asks to review, audit, improve, or optimize their CLAUDE.md, system prompt, AI instructions, or prompt engineering files. Supports single-file or repo-wide multi-file audits."
---

# Context Auditor

Audits AI configuration files to maximize **fidelity × cache_rate** while minimizing cost and attention decay.

## Audit Modes

### Single-File Mode (Default)

Audit the root `/CLAUDE.md` file only.

### Repo-Wide Mode

Audit all CLAUDE.md files in the repository (root + nested in subfolders). Use this when:

- User requests "audit all CLAUDE.md files"
- User mentions "nested" or "subfolder" CLAUDE.md files
- User asks about combined token budget

**Combined Token Budget:** All CLAUDE.md files together must stay under 2,000 tokens for optimal caching.

## Core Principle

**Prioritize fidelity over aesthetics.** A verbose, redundant config that is 90% cached and 100% accurate is superior to a "clean" compressed config. The goal is not minimal tokens—it's maximal task success rate.

## The Audit Criteria

When auditing a file, evaluate against these four priorities:

### 1. **Fidelity Score** (Priority 1)

Will the AI reliably follow these rules?

- ✅ **Critical constraints in primacy zone** — first 2,000 tokens get strongest attention
- ✅ **XML encapsulation for Claude** — `<architecture_rules>`, `<correctness_guards>` tags prevent context bleeding
- ✅ **Correctness Guards present** — version-specific syntax examples prevent hallucination to training data
- ❌ **Avoid indirection layers** — external references land in weak attention zone
- ❌ **No vague commands** — "Be thorough" triggers infinite tool loops

### 2. **Cache Efficiency** (Priority 2)

Will this stay static and cacheable?

- ✅ **Prefix-anchored and stable** — system prompt content should rarely change
- ✅ **Under 2,000 tokens** — cache activation threshold, not a compression target
- ❌ **No session-specific data** — rapidly-changing content invalidates cache
- ❌ **No dynamic imports** — frequently-updated references kill cache benefits

### 3. **Attention Architecture** (Priority 3)

Where do instructions land in the context hierarchy?

**The Stratified Stack:**

- **Layer 1 (Anchor / System Prompt):** Identity, safety rails, core project standards → CLAUDE.md (primacy zone)
- **Layer 2 (Skills):** Specialized procedures invoked occasionally (e.g., "Security Audit", release workflow) → .claude/skills/ (dynamic injection)
- **Layer 3 (MCP Tools):** Live data connections (Jira, GitHub) → Tool outputs (filtered/distilled)
- **Layer 4 (Use-Time Prompts):** Ad-hoc session-specific instructions → User messages (recency bias)

**Critical Rule:** Frequently-referenced material (used >50% of sessions) should stay in Layer 1, NOT be extracted to Layer 2.

### 4. **Task Success Rate** (Priority 4)

Does this reduce errors and improve output quality?

- ✅ **Redundancy improves comprehension** — WET (Write Everything Twice) is optimal for AI configs
- ✅ **Verbose examples prevent version confusion** — don't rely on documentation links
- ❌ **Over-compression sacrifices fidelity** — a cached verbose config beats a compact uncached one

## Refactoring Mandates

1. **XML Encapsulation** — Wrap non-negotiable rules in `<architecture_rules>`, `<correctness_guards>`, `<logic_gate>` tags. Claude-specific; GPT/Gemini prefer Markdown hierarchy.
2. **Topological Prefix-Anchoring** — Identity & constraints → architecture rules → correctness guards (top), patterns & conventions (middle), metadata & references (bottom).
3. **Don't Extract for Aesthetics** — If material is read on >50% of turns, keep it inline. Only extract specialized procedures invoked occasionally.
4. **Correctness Guards Over Links** — Use inline "Golden Snippets" for version-specific syntax from the project being audited. Don't rely on documentation links.

See [REFACTORING_GUIDE.md](REFACTORING_GUIDE.md) for code examples, Fidelity Over DRY, Discovery-First Architecture patterns, and anti-pattern/good-pattern checklists.

## Expected Workflow

### Single-File Mode

#### 1. Read the Target File

Use Read tool to examine the current CLAUDE.md or config file.

#### 2. Calculate Metrics

Provide:

- **Token count** (estimate)
- **Fidelity Score** (1-100): Will AI reliably follow rules?
- **Cache Efficiency** (1-100): Is it static and under 2,000 tokens?
- **Attention Architecture** (1-100): Are critical rules in primacy zone?
- **Task Success Projection** (1-100): Will this reduce errors?
- **Overall Score** (average of above)

### Repo-Wide Mode

#### 1. Discover All CLAUDE.md Files

Use Glob to find all CLAUDE.md files:

```
**/CLAUDE.md
```

#### 2. Read All Files

Use Read tool for each discovered file.

#### 3. Calculate Aggregate Metrics

Provide:

- **Per-file token counts** (estimate)
- **Combined total tokens** (all files)
- **Budget status**: ✅ Under 2,000 tokens OR ⚠️ Exceeds threshold
- **Hierarchy check**: Do nested files extend or contradict root?
- **Redundancy check**: Flag excessive duplication (not beneficial WET)
- **Individual scores** for each file
- **Aggregate recommendations**

### 3. Identify Issues

Flag anti-patterns and recognize good patterns against the Audit Criteria above. See [REFACTORING_GUIDE.md](REFACTORING_GUIDE.md) for the full anti-pattern and good-pattern checklists (single-file and repo-wide).

### 4. Propose Refactored Version

Present: summary of changes with justification, before/after token counts, and projected metric improvement. For repo-wide mode, include per-file analysis, hierarchy report, and redundancy map.

Don't optimize for "looks clean to humans" — optimize for "AI follows rules and stays cached."

### 5. Validate

Re-score the refactored version against the same four dimensions to verify improvement before presenting to the user.

## Final Checklist

Before finalizing recommendations:

- [ ] Fidelity > token count (verbose is OK if cached)
- [ ] Critical rules in first 2,000 tokens (primacy zone)
- [ ] XML encapsulation for Claude (structural boundaries)
- [ ] Correctness Guards for version-specific syntax
- [ ] No extraction of frequently-used reference material
- [ ] Static content for cache efficiency
- [ ] Combined budget <2,000 tokens (repo-wide mode)
- [ ] No contradictory rules between parent/child files (repo-wide mode)
- [ ] Validation step completed: refactored version scores higher than original
