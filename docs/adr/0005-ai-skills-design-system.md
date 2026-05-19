# 5. AI Skills Design System

**Date:** 2026-04-17
**Status:** Proposed

**Context:**

Claude Code skills are loaded on-demand — every skill activated in a session carries a token cost. Without a shared framework for how skills are structured and scoped, skills grow inconsistently: some too broad (loading irrelevant context for narrow tasks), some too narrow (fragmenting related concerns across multiple invocations), some duplicating what CLAUDE.md already provides as the always-on foundation. Work in evo-web almost always spans multiple package layers simultaneously (e.g., Skin CSS + Marko + React), and no clear distinction existed between skills that should drive autonomous multi-step workflows and those that serve as focused specialists.

Options considered:
- **Per-package skills** (`/evo-skin`, `/evo-marko`, `/evo-react`): rejected because component work spans packages; per-package skills either require loading multiple skills simultaneously or miss critical cross-package context.
- **Mega-skill**: rejected because it loads too much context for focused tasks — narrow work doesn't benefit from the full skill surface area, and the token cost is unjustifiable.
- **Cross-cutting skills with a defined taxonomy**: adopted. Skills are scoped to concerns that cut across package boundaries and organized by type based on their role in the system.

**Decision:**

1. **Naming convention**: All evo-web skills use an `/evo-*` prefix.
2. **CLAUDE.md is the always-on foundation.** Skills extend it with depth — they never restate or duplicate it.
3. **Cross-cutting skills over per-package or per-framework skills.** Each skill is scoped to a concern that applies across the stack (e.g., component lifecycle, accessibility, storybook authoring) rather than to an individual package or framework layer.
4. **Four skill types with defined roles:**
   - **Composite Agent** — owns and orchestrates a multi-step workflow end-to-end; delegates specific phases to sub-agents and waits for results before continuing.
   - **Discrete** — covers a single cross-cutting concern; triggered independently; stays lean because it has one job.
   - **Sub-Agent** — a discrete skill that a composite agent delegates a specific task to; always performs the same focused operation regardless of who invoked it. A skill can be both discrete and a sub-agent simultaneously.
   - **Ephemeral** — created for a specific time-boxed migration or transformation; may track progress; retired when the triggering work reaches completion (all affected components pass their evals and the skill's trigger no longer matches any active work).
5. **All new persistent skills require evals** authored via the `skill-creator` skill before being added to settings. This establishes a performance baseline and ensures regressions are caught when skills are updated.
6. **Adding or significantly changing a persistent skill requires a PR** that includes the skill, its evals, and an update the relevant design doc.

**Consequences:**

Positive:
- Minimal surface area per session — the right context loads for the right task, keeping token overhead proportionate to the work.
- Discrete skills are independently invocable and reusable by multiple orchestrators via the sub-agent pattern.
- Ephemeral skills operationalize time-boxed work (e.g., framework migrations) without permanently expanding the persistent skill inventory.
- The `/evo-*` naming convention makes skill discovery consistent and prevents naming drift.
- The eval requirement establishes a quality floor and surfaces regressions when skills are updated.

Negative:
- Composite agents are harder to debug when something goes wrong mid-workflow — failures may occur inside a delegated sub-agent with limited visibility.
- Cross-cutting skills can grow large if their scope isn't actively kept narrow; periodic review is needed.
- Ephemeral skill lifecycle requires operational discipline — skills must be tracked and retired when the triggering work is complete.
- Eval authorship adds overhead to creating or updating skills.
