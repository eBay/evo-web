import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const markoConfigPath = path.join(rootDir, "marko.json");
fs.writeFileSync(
  markoConfigPath,
  fs.readFileSync(markoConfigPath, "utf-8").replace(/\.\/dist\//g, "./src/"),
);
