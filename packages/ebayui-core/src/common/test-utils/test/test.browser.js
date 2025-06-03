import { describe, it, expect } from "vitest";
import { snapshotDiff } from "../snapshots.js";

describe("snapshotDiff", () => {
    it("should return '(no difference)' for identical strings", () => {
        const result = snapshotDiff("hello world", "hello world");
        expect(result).toBe("(no difference)");
    });

    it("should show added lines with '+ ' prefix", () => {
        const before = `line 1
line 2
line 3`;
        const after = `line 1
line 2
line 3
line 4`;
        const result = snapshotDiff(before, after);
        expect(result).toContain("+ line 4");
    });

    it("should show removed lines with '- ' prefix", () => {
        const before = `line 1
line 2
line 3`;
        const after = `line 1
line 3`;
        const result = snapshotDiff(before, after);
        expect(result).toContain("- line 2");
    });

    it("should handle complex diffs with context", () => {
        const before = `import React from 'react';

function Component() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a test</p>
    </div>
  );
}

export default Component;`;

        const after = `import React from 'react';

function Component() {
  return (
    <div>
      <h1>Hello Universe</h1>
      <p>This is a test</p>
      <button>Click me</button>
    </div>
  );
}

export default Component;`;

        const result = snapshotDiff(before, after);

        // Should contain the changed line
        expect(result).toMatch(/-[ ]+ <h1>Hello World<\/h1>/);
        expect(result).toMatch(/\+[ ]+ <h1>Hello Universe<\/h1>/);

        // Should contain the added button
        expect(result).toMatch(/\+[ ]+ <button>Click me<\/button>/);

        // Should contain some context lines
        expect(result).toContain("<div>");
        expect(result).toContain("<p>This is a test</p>");
    });

    it("should respect contextLines option", () => {
        const before = `line 1
line 2
line 3
line 4
line 5
line 6
line 7`;
        const after = `line 1
line 2
line 3
modified line 4
line 5
line 6
line 7`;

        // With default context (3 lines)
        const defaultResult = snapshotDiff(before, after);
        expect(defaultResult).toContain("line 1");

        // With reduced context (1 line)
        const reducedResult = snapshotDiff(before, after, { contextLines: 1 });
        expect(reducedResult).not.toContain("line 1");
        expect(reducedResult).toContain("line 3");
    });
});
