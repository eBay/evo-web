---
source: observed-failure
disposition: open
---

# Validate exported types against the packed package

A source typecheck passed, but the packed-package smoke test caught declaration imports that did not resolve and `@ts-expect-error` directives that missed TypeScript's actual diagnostic lines. Fixing both required two failed package-build cycles. For public type changes, run the package consumer smoke early: source typechecking alone does not validate the emitted declaration graph or negative type assertions.

Disposition: open — maintainer, raised 2026-10-12
