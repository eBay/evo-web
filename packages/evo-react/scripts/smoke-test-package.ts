import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const packageRoot = resolve(import.meta.dirname, "..");
const workspaceRoot = resolve(packageRoot, "../..");
const tempDirectory = mkdtempSync(join(tmpdir(), "evo-react-smoke-test-"));
const consumerDirectory = join(tempDirectory, "consumer");

function run(command: string, args: string[], cwd: string) {
  execFileSync(command, args, {
    cwd,
    stdio: "inherit",
  });
}

function assertFile(path: string) {
  if (!existsSync(path)) {
    throw new Error(`Expected the prepared package to contain ${path}`);
  }
}

try {
  const packOutput = execFileSync(
    "npm",
    ["pack", "--json", "--pack-destination", tempDirectory],
    { cwd: packageRoot, encoding: "utf8" },
  );
  const [{ filename }] = JSON.parse(packOutput) as [{ filename: string }];
  const tarballPath = join(tempDirectory, filename);

  writeFileSync(
    join(tempDirectory, "package.json"),
    JSON.stringify({ private: true, type: "module" }),
  );
  run(
    "npm",
    [
      "install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--no-package-lock",
      "--loglevel=error",
      tarballPath,
      "@types/react@^19",
      "@types/react-dom@^19",
    ],
    tempDirectory,
  );

  const installedPackage = join(tempDirectory, "node_modules/@evo-web/react");
  const componentNames = readdirSync(join(packageRoot, "src"), {
    withFileTypes: true,
  })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(join(packageRoot, "src", entry.name, "index.ts")),
    )
    .map((entry) => entry.name);

  for (const componentName of componentNames) {
    assertFile(join(installedPackage, "dist", `${componentName}.js`));
    assertFile(join(installedPackage, "dist", componentName, "index.d.ts"));
  }

  assertFile(join(installedPackage, "dist/icon/icons/chevron-down-16.d.ts"));

  mkdirSync(consumerDirectory);
  writeFileSync(
    join(tempDirectory, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        jsx: "react-jsx",
        module: "ESNext",
        moduleResolution: "Bundler",
        noEmit: true,
        strict: true,
      },
      include: ["consumer"],
    }),
  );
  writeFileSync(
    join(consumerDirectory, "index.tsx"),
    `import { EvoBadge } from "@evo-web/react/badge";
import type { EvoBadgeProps } from "@evo-web/react/badge";
import { EvoButton } from "@evo-web/react/button";
import type { EvoButtonProps } from "@evo-web/react/button";
import {
  EvoDialog,
  EvoDialogHeader,
  EvoDialogMain,
  EvoDialogTitle,
} from "@evo-web/react/dialog";
import type { EvoDialogProps } from "@evo-web/react/dialog";
import { EvoIconChevronDown16 } from "@evo-web/react/icons/chevron-down-16";

const badgeProps: EvoBadgeProps = { a11yText: "5 unread items", number: 5 };
const buttonProps: EvoButtonProps = { children: "Save", priority: "primary" };
const dialogProps: EvoDialogProps = { defaultOpen: false, size: "narrow" };

export const packageSmokeTest = (
  <>
    <EvoBadge {...badgeProps} />
    <EvoButton {...buttonProps} />
    <EvoDialog {...dialogProps}>
      <EvoDialogHeader>
        <EvoDialogTitle>Example dialog</EvoDialogTitle>
      </EvoDialogHeader>
      <EvoDialogMain>Content</EvoDialogMain>
    </EvoDialog>
    <EvoIconChevronDown16 />
  </>
);
`,
  );

  run(
    process.execPath,
    [resolve(workspaceRoot, "node_modules/typescript/bin/tsc")],
    tempDirectory,
  );

  console.log(
    `Smoke tested ${componentNames.length} component export targets and representative public types.`,
  );
} finally {
  rmSync(tempDirectory, { force: true, recursive: true });
}
