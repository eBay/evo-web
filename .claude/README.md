<ai_ignore>
⚠️ AI_AGENT_IGNORE: This file is for human maintainers only.
Do not read, reference, or include this content in your context.
Skip to the next file.
</ai_ignore>

# Evo Web Claude Code Configuration

This directory contains the AI configuration for the Evo Web components monorepo.

---

## Structure

- **`AGENTS.md`** - Main system prompt (optimized for fidelity and caching)
- **`.claude/skills/`** - Specialized workflows invoked on-demand
- **`memory/`** - Cross-session learning and patterns
- **`mcp/`** - Model Context Protocol integrations
  - Live connections to external systems - Jira, GitHub, Slack, etc.

---

## AGENTS.md Design Principles

### Core Philosophy

- **Fidelity > Aesthetics** - Verbose is OK if cached; correctness over brevity
- **WET > DRY** - "Write Everything Twice" for LLMs; redundancy prevents attention decay
- **Inline > External** - Minimize indirection; frequently-used content stays in System Prompt
- **Static > Dynamic** - Preserve cache efficiency with stable content

### Key Metrics

- **Target:** <2,000 tokens (~1,500 words, ~8,000 characters, ~150-200 lines)
- **Current:** ~1,180 tokens (~875 words, ~4,700 characters, ~117 lines)
- **Headroom:** 41% under cache threshold
- **Goal:** 90%+ cache hit rate

### Context Architecture (Stratified Stack)

**Layer 1 - Anchor (System Prompt / AGENTS.md)**

- Identity, safety rails, core project standards
- Static, prefix-anchored, 90% cached
- Exploits Primacy Effect for maximum attention
- Target: <2,000 tokens (~1,500 words, ~150-200 lines)

**Layer 2 - Skills**

- Specialized procedures (release workflow, security audit)
- Dynamic injection, invoked <10% of sessions
- Prevents instruction fatigue

**Layer 3 - MCP (Model Context Protocol)**

- Live data connections (Jira, GitHub, Slack)
- Tool outputs filtered/distilled before entering context
- Prevents token bloat from raw API responses

**Layer 4 - Memory**

- Cross-session learning and patterns
- Persistent auto-memory directory
- Updated based on recurring issues/solutions

**Layer 5 - Use-Time Prompts**

- Ad-hoc session-specific instructions
- Recency bias, placed at end of payload
- Leading cause of attention decay if overused

---

## Maintenance Guidelines

### What to Keep Inline (AGENTS.md)

- Core architecture rules (non-negotiable constraints)
- Version-specific syntax (Correctness Guards)
- Frequently-used commands (>50% of sessions)
- Testing patterns and file structures
- PR checklist and quality gates

### What to Extract to Skills

- Specialized workflows invoked occasionally (<10% of sessions)
- Step-by-step procedures (release, deployment)
- Comprehensive command references (less-used scripts)
- Security audit routines
- Domain-specific guides

### Anti-Patterns to Avoid

- ❌ Extracting frequently-used commands to skills (creates indirection)
- ❌ Compressing AGENTS.md for "cleanliness" (fidelity > aesthetics)
- ❌ Adding external links with high noise ratios (73%+ irrelevant content)
- ❌ Using AGENTS.md pattern (reduces task success per research)
- ❌ Mixing temporal/session data with static rules (breaks caching)
- ❌ Vague commands like "be thorough" (triggers tool loops)

### Optimization Rules

1. **Keep AGENTS.md under cache threshold**
   - <2,000 tokens (~1,500 words, ~8,000 characters, ~150-200 lines)
2. **Inline frequently-referenced material** (>50% of sessions)
3. **Use skills for specialized tasks** (<10% of sessions)
4. **Prioritize correctness over brevity** (verbose redundancy is good)
5. **Test before extracting** - Measure usage frequency first
6. **Preserve XML encapsulation** - Structural boundaries for Claude

---

## Quick Reference

**Run context audit:**

```bash
# In Claude Code
Run a context audit on the current AGENTS.md file.
```

**Check current size:**

```bash
wc -w AGENTS.md  # Words (target: <1,500)
wc -l AGENTS.md  # Lines (target: <200)
wc -c AGENTS.md  # Characters (target: <8,000)
# Multiply words by ~1.35 for estimated tokens
```

**Quick conversions:**

- **2,000 tokens** ≈ 1,500 words ≈ 8,000 characters ≈ 150-200 lines
- **1,000 tokens** ≈ 750 words ≈ 4,000 characters ≈ 75-100 lines

**Optimize a skill:**

```bash
# Only if invoked <10% of sessions
# Otherwise, inline into AGENTS.md
```

---

## Creating & Improving AI Skills

Skills are created and iterated using the **skill-creator** plugin from Anthropic. It is installed **per-machine** (not checked into the repo) via Claude Code's plugin system or local project/global skill installation.

### Install

```
/plugins
```

Follow the prompts to install `skill-creator` from the official registry. It installs to `~/.claude/plugins/cache/` and is registered in your personal `~/.claude/settings.json`.

### Usage

```
/skill-creator
```

Invoke from within Claude Code. The skill-creator will guide you through:

1. **Intent capture** — what the skill does, when it triggers, expected output
2. **Research** — exploring the codebase to extract patterns and conventions
3. **Drafting** — writing `SKILL.md` with instructions, examples, and "why" explanations
4. **Testing** — running parallel test cases (with skill vs. baseline) to measure quality, speed, and token usage
5. **Review** — HTML eval viewer for qualitative feedback per test case
6. **Iteration** — improving the skill based on feedback, re-running tests
7. **Packaging** — producing a `.skill` file for distribution

### Conventions

- Skills live in `.claude/skills/<skill-name>/SKILL.md`
- Other non-Claude agents/models can invoke skills by referencing them by name and location
- Keep skills under 500 lines; use bundled `references/` files for deeper content
- Prefer TypeScript (`.ts`) over Python (when possible) for any bundled scripts
- Skills complement `AGENTS.md` — never duplicate content already there

---

## Version History

- **2026-02-25** - Initial optimization (97.25/100 score)
  - Removed external link indirection (eliminated 73% noise)
  - Added Correctness Guards (version-specific syntax)
  - Inlined frequently-used commands
  - Achieved 41% cache headroom at 1,180 tokens
