---
source: correction
disposition: open
---

# Do not run the full component build for migration-guide-only changes

A full repository build was started after changing only a migration-guide Markdown file, and the user corrected: “we actually don't even need to build its md file changes.” This wasted build time and conflicts with the repository's blanket instruction to always build before completing component work; validation should match the changed surface unless the guide itself is build-consumed.

Disposition: open — repo maintainers should clarify the docs-only exception to the build rule, raised 2026-09-22
