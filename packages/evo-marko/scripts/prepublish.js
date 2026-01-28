import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const markoConfigPath = path.join(rootDir, "marko.json");
fs.writeFileSync(
  markoConfigPath,
  fs.readFileSync(markoConfigPath, "utf-8").replace(/\.\/src\//g, "./dist/"),
);

fs.cpSync("src/node_modules", "dist/node_modules", { recursive: true });
