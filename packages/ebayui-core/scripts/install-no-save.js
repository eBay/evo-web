import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const packageDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
);
const files = [
    path.join(packageDir, "package.json"),
    path.resolve(packageDir, "../../pnpm-lock.yaml"),
];
const contents = files.map((file) => fs.readFileSync(file));
const args = process.argv.slice(2).join(" ");

try {
    execSync(`pnpm add ${args}`, { cwd: packageDir, stdio: "inherit" });
} finally {
    files.forEach((file, i) => fs.writeFileSync(file, contents[i]));
}
