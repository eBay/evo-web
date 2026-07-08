# Contract Validator

The contract validator is a CI check that runs on pull requests in the design
repository. It enforces that every `_contract.md` file includes the sections and
fields the manifest skill needs to run with minimal gaps. Catching missing information
at the PR — before the contract is merged — is significantly cheaper than discovering
it in the gap report downstream.

---

## Where it fits in the pipeline

```
Design repo PR opened
        ↓
Contract validator runs (this document)
        ↓  blocks if required sections missing
PR approved and merged
        ↓  triggers manifest skill
evo-web: /evo-create-component-manifest
        ↓  produces manifest + gap report
Gate 2: engineer reviews and approves
        ↓
/evo-component generates behavioral layer (PR 1 path)
/evo-style-component generates visual layer (PR 2 path)
```

The validator and the manifest gap report are complementary:
- **Validator** — enforces structural completeness (are required sections present?)
- **Gap report** — catches semantic gaps the validator cannot detect (is the content correct and sufficient?)

A contract that passes the validator should produce very few 🔴 blocking gaps in the manifest skill.

---

## PR type detection

The validator distinguishes two contract PR types by reading the `Figma URL` field
in the contract header:

| `Figma URL` value | PR type | Rules applied |
|---|---|---|
| `Not yet available` (or similar) | **PR 1** — behavioral contract | Behavioral checks only |
| Valid `https://figma.com/...` URL | **PR 2** — visual contract update | All checks + Figma URL format |
| Field absent entirely | **Error** | Hard block — field must always be present |

---

## Validation rules

### Severity levels

| Symbol | Severity | Effect |
|---|---|---|
| 🔴 | **Block** | Check fails; PR cannot merge until resolved |
| 🟡 | **Warn** | Comment posted; PR can still merge |
| 🔵 | **Info** | Informational comment only |

### Universal rules (PR 1 and PR 2)

| Rule | Check | Severity |
|---|---|---|
| Figma URL field declared | Header contains `**Figma URL**:` | 🔴 |
| Required label strings section | `### Required label strings` heading exists and is non-empty | 🔴 |
| Screen reader announcement section | `### Screen reader announcement` heading exists and is non-empty | 🔴 |
| Keyboard focusability section | `### Keyboard focusability` heading exists and is non-empty | 🔴 |
| Widget type section | `### Widget type` heading exists and is non-empty | 🔴 |
| Label mechanism section | `### Label mechanism` heading exists and is non-empty | 🔴 |
| Content regions declared | `Content regions` or content regions table present under `### Web` | 🔴 |
| Form context declared | `Form context` declared under `### Web` | 🔴 |
| Toggle state section | `### Toggle state` present when contract text mentions toggle / press / aria-pressed | 🟡 |
| Accessibility Contract section present | `## Accessibility Contract` heading exists | 🔴 |
| Platform Realizations › Web section present | `### Web` heading exists under Platform Realizations | 🔴 |

### PR 2-only rules

| Rule | Check | Severity |
|---|---|---|
| Figma URL is a valid link | `Figma URL` value matches `https://figma.com/` or `https://www.figma.com/` | 🔴 |
| Figma URL is a design file (not FigJam) | URL contains `/design/` | 🟡 |

### Content quality rules (both PR types)

| Rule | Check | Severity |
|---|---|---|
| Sections are non-trivial | Required sections contain more than 10 words of content | 🟡 |
| a11yText named if component is interactive | `a11yText` (or another `a11y*` prop) named in Required label strings if Accessibility Requirements describe interactive usage | 🟡 |

---

## PR comment format

The validator posts a single review comment on the PR summarising results:

```
## Contract Validation — Avatar

**PR type detected:** PR 1 (behavioral — Figma URL not yet available)
**Contract:** components/avatar/_contract.md

### ✅ Passed (9 checks)
- Required label strings · Screen reader announcement · Keyboard focusability
- Widget type · Label mechanism · Content regions · Form context
- Accessibility Contract section · Platform Realizations › Web section

### 🟡 Warnings (1)
- **Toggle state section missing** — contract mentions "press" behavior; add a
  `### Toggle state` section declaring whether `aria-pressed` or visible text
  conveys state. (Can merge — resolve before manifest generation.)

### Summary
Contract is structurally complete and ready to merge.
Manifest skill will run after merge.
```

For a failing PR:

```
## Contract Validation — Avatar

### 🔴 Blocking issues (2) — PR cannot merge

1. **Required label strings section missing**
   Add `### Required label strings` under Accessibility Contract listing every
   i18n-able string (e.g. `a11yText`). See contract-template-additions.md #1.

2. **Content regions not declared**
   Add a Content regions table under `### Web` in Platform Realizations.
   See contract-template-additions.md #4.

### ✅ Passed (7 checks)
...
```

---

## Implementation — Option A: Reusable GitHub Action ✅ Chosen

### Why this approach

Engineering owns the validation logic entirely in evo-web. The design repo has a
single workflow file that calls the action — that's the full design repo footprint.
No infrastructure to host, no services to maintain. When validation rules change as
the contract template evolves, only evo-web needs to be updated.

### Architecture

```
evo-web (engineering repo)
└── .github/
    └── actions/
        └── validate-contract/
            ├── action.yml           ← composite action definition
            └── validate-contract.js ← validation script (Node.js, no deps)

design-repo (design-owned)
└── .github/
    └── workflows/
        └── validate-contract.yml   ← one file; calls evo-web action
```

### Files in evo-web

**`.github/actions/validate-contract/action.yml`** — declares the action inputs,
sets up Node, runs the validator, posts the PR comment, and sets the check status.

**`.github/actions/validate-contract/validate-contract.js`** — the validator script.
Takes a contract file path as input. Reads the markdown, runs all checks, exits 0
(pass) or non-zero (fail). Can also be run locally.

### Files in the design repo

**`.github/workflows/validate-contract.yml`** — the only file the design repo needs:

```yaml
name: Validate Contract

on:
  pull_request:
    paths:
      - '**/_contract.md'

jobs:
  validate:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write   # needed to post PR comment
      checks: write          # needed to set check status
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed contracts
        id: changed
        uses: tj-actions/changed-files@v44
        with:
          files: '**/_contract.md'

      - uses: ebay/evo-web/.github/actions/validate-contract@main
        with:
          changed-files: ${{ steps.changed.outputs.all_changed_files }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

### Permissions required

The design repo workflow runs with `GITHUB_TOKEN` (standard, no secrets to manage).
The token needs `pull-requests: write` to post the review comment and `checks: write`
to set the check status. Both are granted in the workflow `permissions` block above.

The design repo does not need any secrets from evo-web. GitHub resolves `uses: ebay/evo-web/.github/actions/validate-contract@main` directly.

> **Note:** If evo-web is a private repository, the design repo must be in the same
> GitHub organization and the action must be explicitly shared. In GitHub Enterprise,
> this is controlled under Organization Settings → Actions → Access.

### Pinning the action version

The design repo workflow above pins to `@main` (always latest). For stability,
pin to a release tag instead:

```yaml
uses: ebay/evo-web/.github/actions/validate-contract@v1.2.0
```

Tag evo-web releases that include validator changes with a semantic version so the
design repo can adopt updates deliberately.

### Making it a required check

In the design repo, go to **Settings → Branches → Branch protection rules** for the
main branch and add `validate / validate-contract` to **Required status checks**.
This ensures PRs cannot be merged until the validator passes.

### Running locally

Anyone can run the validator locally before pushing:

```bash
# From anywhere with Node.js available
npx github:ebay/evo-web/.github/actions/validate-contract/validate-contract.js \
  path/to/components/avatar/_contract.md

# Or clone evo-web and run directly
node .github/actions/validate-contract/validate-contract.js \
  path/to/components/avatar/_contract.md
```

Exit code 0 = passes. Non-zero = failures printed to stdout.

### Adding or updating checks

All validation rules live in `validate-contract.js` in evo-web. When the contract
template changes (new required section, updated rule), update the script there.
The change takes effect on the next PR in the design repo automatically (if pinned
to `@main`) or after the design repo bumps its version pin.

Rules follow a simple structure:
```js
{ id: 'required-label-strings',
  severity: 'block',
  description: '### Required label strings section',
  check: (ast) => hasHeading(ast, 'Required label strings') }
```

Adding a new check = adding one object to the rules array.

---

## Implementation — Option B: GitHub App ☐ Not chosen

A GitHub App registered by the engineering org is installed on the design repo.
When a PR is opened, GitHub sends a webhook to the App's backend. The App fetches
the changed contracts, runs the validator, and reports back via the GitHub Checks API.

**Why not chosen now:**
Requires a live backend service (Lambda, Cloudflare Worker, or similar) that must be
hosted, monitored, and kept running. More operational overhead than the problem
warrants at this stage. The design repo also has zero footprint, which is appealing,
but the infrastructure cost outweighs that benefit right now.

**When to revisit:** If the design repo relationship makes even a single workflow file
untenable (org ownership, access policies), or if the validator logic becomes complex
enough to warrant a dedicated service that handles multiple downstream integrations.

---

## Implementation — Option C: Repository Dispatch ☐ Not chosen

The design repo has a minimal workflow that fires a `repository_dispatch` event to
evo-web when a contract PR is opened. evo-web's Actions receive the event, run the
validator against the contract file (fetched from the design repo), and post results
back via the GitHub API.

**Why not chosen now:**
Requires cross-repo token management (evo-web needs a token with write access to
the design repo to post comments and set statuses). More orchestration between repos
than Option A with no clear benefit. GitHub's `repository_dispatch` also has rate
limits and latency that make it less reliable as a PR gate.

**When to revisit:** If the reusable action approach hits GitHub's cross-org
limitations and the GitHub App route is too heavyweight.

---

## Relationship to the manifest gap report

| | Contract Validator | Manifest Gap Report |
|---|---|---|
| **Where** | Design repo CI | evo-web (after contract merge) |
| **When** | On every contract PR | On every manifest generation run |
| **What** | Structural completeness — are required sections present? | Semantic completeness — is the content sufficient for code generation? |
| **Audience** | Designer opening the PR | Engineer at Gate 2 |
| **Effect** | Blocks PR merge | Blocks Gate 2 approval |
| **Example catch** | `### Widget type` section missing | Widget type declared but keyboard model not described clearly enough |

A contract that passes the validator will produce few or no 🔴 blocking gaps in the
manifest skill. Warnings (🟡) from the validator may still appear as medium-confidence
gaps in the manifest — those are resolved at Gate 2, not in the design repo.
