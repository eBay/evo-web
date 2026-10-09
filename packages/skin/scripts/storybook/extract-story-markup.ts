import {
    buildStoryMarkup,
    deriveStorybookId,
    type DiscoveredStoryModule,
    type StoryMarkupMap,
} from "./story-markup-core";

export { buildStoryMarkup, deriveStorybookId };
export type { DiscoveredStoryModule, StoryMarkupMap };

/**
 * Node/fs-based discovery used by the CLI and the test suite: walks every
 * `.stories.js` file under `storiesGlobRoot`, dynamically imports it, and hands
 * the result to the shared `buildStoryMarkup` (see `story-markup-core.ts`). Not
 * used by the live site (see `src/data/story-markup.ts`, which discovers the
 * same files via Vite's `import.meta.glob` instead — Vite cannot statically
 * analyze a runtime-constructed import path, which is exactly why this
 * function exists only for contexts that run under plain Node, e.g. Vitest).
 */
export async function extractStoryMarkup(
    storiesGlobRoot: string,
): Promise<StoryMarkupMap> {
    const fs = await import("fs");
    const path = await import("path");
    const { pathToFileURL } = await import("url");

    const entries = fs.readdirSync(storiesGlobRoot, { recursive: true }) as string[];
    const relativePaths = entries
        .filter((entry) => entry.endsWith(".stories.js"))
        .map((entry) => entry.split(path.sep).join("/"));

    const modules: DiscoveredStoryModule[] = [];
    for (const relativePath of relativePaths) {
        // A bare OS-native path fails dynamic import() on Windows
        // (ERR_UNSUPPORTED_ESM_URL_SCHEME for a backslash-separated absolute
        // path); pathToFileURL makes this work on every platform.
        const mod = await import(pathToFileURL(path.join(storiesGlobRoot, relativePath)).href);
        modules.push({ relativePath, mod });
    }

    return buildStoryMarkup(modules);
}
