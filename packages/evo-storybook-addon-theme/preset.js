import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const designTokenMixins = path.resolve(
  path.dirname(require.resolve("@ebay/design-tokens/esm/evo")),
  "../mixins",
);
const managerEntry = fileURLToPath(
  new URL("./src/manager.tsx", import.meta.url),
);
const previewEntry = fileURLToPath(
  new URL("./src/preview.tsx", import.meta.url),
);

export const managerEntries = (entries = []) => [...entries, managerEntry];

export const previewAnnotations = (entries = []) => [...entries, previewEntry];

export async function viteFinal(config) {
  const { mergeConfig } = await import("vite");
  return mergeConfig(config, {
    css: {
      preprocessorOptions: {
        scss: { loadPaths: [designTokenMixins] },
      },
    },
  });
}
