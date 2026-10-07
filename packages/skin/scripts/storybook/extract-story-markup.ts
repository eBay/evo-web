import fs from "fs";
import path from "path";

export type StoryMarkupMap = Record<
    string,
    Record<string, { html: string; storybookId: string }>
>;

function slugify(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/\//g, "-")
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

/**
 * Storybook's CSF loader converts an export name to a display name via its own
 * `toStartCaseStr` (storybook/dist/csf/toStartCaseStr.ts, ported verbatim below —
 * NOT reimplemented from guessing at examples) before slugifying that display name
 * for the story ID. A naive "insert space before each capital letter" split is
 * WRONG for acronym runs — e.g. "RTLLarge" must become "RTL Large" (split before
 * the LAST capital of the run, since it starts a new word: "Large"), not
 * "R T L Large". Storybook's actual rule, in order: replace _/-/. with spaces;
 * split before a capital that's followed by a lowercase letter (handles acronym
 * boundaries like RTL|Large); split between a lowercase and any capital; split at
 * letter/digit boundaries either direction; title-case every resulting word;
 * collapse whitespace.
 *
 * Verified against real `storybook build` output across all 1035 real story
 * variants in the repo, including every acronym case (RTL, CSS, CTA) and every
 * leading-digit case (e.g. "_1024container") — see
 * docs/superpowers/plans/DECISIONS-2026-09-29-storybook-docs-integration.md,
 * Decision 4.
 */
function toStartCaseStr(value: string): string {
    return value
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\./g, " ")
        .replace(/([^\n])([A-Z])([a-z])/g, (_m, p1, p2, p3) => `${p1} ${p2}${p3}`)
        .replace(/([a-z])([A-Z])/g, (_m, p1, p2) => `${p1} ${p2}`)
        .replace(/([a-z])([0-9])/gi, (_m, p1, p2) => `${p1} ${p2}`)
        .replace(/([0-9])([a-z])/gi, (_m, p1, p2) => `${p1} ${p2}`)
        .replace(/(\s|^)(\w)/g, (_m, p1, p2) => `${p1}${p2.toUpperCase()}`)
        .replace(/ +/g, " ")
        .trim();
}

export function deriveStorybookId(title: string, exportName: string): string {
    return `${slugify(title)}--${slugify(toStartCaseStr(exportName))}`;
}

interface DiscoveredStoryFile {
    filePath: string;
    /** Directory directly under the stories root, i.e. <X> in <X>/stories/[...]/file.stories.js. */
    topLevelDir: string;
    /** Immediate subfolder of stories/, if any, e.g. "fake-button" in
     *  button/stories/fake-button/base.stories.js. Empty string when the file sits
     *  directly in <X>/stories/ with no further nesting. Only consulted by
     *  TEMPORARY_COMPONENT_KEY_OVERRIDES below. */
    nestedSubfolder: string;
}

function findStoryFiles(root: string): DiscoveredStoryFile[] {
    const entries = fs.readdirSync(root, { recursive: true }) as string[];

    return entries
        .filter((entry) => entry.endsWith(".stories.js"))
        .map((entry) => {
            const filePath = path.join(root, entry);
            // entry is relative to `root` (== .../src/sass), e.g.
            // "button/stories/fake-button/base.stories.js" (nested) or
            // "cta-button/stories/cta-button.stories.js" (direct).
            const segments = entry.split(path.sep);
            const topLevelDir = segments[0];
            const nestedSubfolder = segments.length > 3 ? segments[2] : "";

            return { filePath, topLevelDir, nestedSubfolder };
        });
}

/**
 * TEMPORARY. The component folder (the directory directly under src/sass) is the
 * component key for every story file inside it, no exceptions — this is the
 * intended permanent rule going forward.
 *
 * `fake-button` (button/stories/fake-button/*) and `fake-tabs` (tabs/stories/fake-tabs/*)
 * are a deliberate, temporary carve-out from that rule: they are being reorganized
 * per https://github.com/eBay/evo-web/issues/1045 (exact end-state not yet decided —
 * pending a separate team decision), but the docs/Storybook integration needs to
 * ship against the CURRENT structure in the meantime. This override lets their
 * stories be addressed under their own key today, so docs pages for them aren't
 * blocked on that reorg landing first.
 *
 * Once #1045 lands, update or delete this map entirely to match whatever the real
 * structure becomes — do not treat the keys below as a permanent design decision.
 * Key is `${topLevelDir}/${nestedSubfolder}`; value is the resulting component key.
 */
const TEMPORARY_COMPONENT_KEY_OVERRIDES: Record<string, string> = {
    "button/fake-button": "fake-button",
    "tabs/fake-tabs": "fake-tabs",
};

function resolveComponentKeys(files: DiscoveredStoryFile[]): Map<string, string> {
    const componentKeyByFile = new Map<string, string>();

    for (const file of files) {
        const overrideKey =
            file.nestedSubfolder === ""
                ? undefined
                : TEMPORARY_COMPONENT_KEY_OVERRIDES[
                      `${file.topLevelDir}/${file.nestedSubfolder}`
                  ];

        componentKeyByFile.set(file.filePath, overrideKey ?? slugify(file.topLevelDir));
    }

    return componentKeyByFile;
}

/**
 * The key under which a variant is stored WITHIN its component's own bucket (the
 * `result[componentKey]` object) — never the component name itself, since that's
 * already the outer key. Built from the file's full slugified title with the
 * already-known `componentKey` stripped off the front (as an exact match or a
 * "componentKey-" prefix), leaving only the part that actually varies within this
 * component. Falls back to the export name alone when nothing is left (the common
 * case: one story file per component, e.g. "Skin/Badge" under component "badge").
 *
 * The strip is intentionally keyed off `componentKey` (already resolved per-file,
 * including the TEMPORARY_COMPONENT_KEY_OVERRIDES above) rather than a fixed
 * segment count — a fixed-count drop previously conflated "Skin/Button/Base" and
 * "Skin/Fake Button/Base" into the same stripped sub-path ("Base") whenever they
 * landed in the same component bucket, silently overwriting one file's exports
 * with another's. Stripping the resolved componentKey itself can't do that:
 * fake-button's own override gives it a different componentKey ("fake-button"),
 * so its title strips down independently of real Button's, even though both
 * title strings start with a word that looks similar once slugified. Verified
 * collision-free against all 1035 real (title, exportName) pairs in the repo.
 */
function variantKey(title: string, exportName: string, componentKey: string): string {
    const slug = slugify(title).replace(/^skin-/, "");
    let subPath = slug;

    if (subPath === componentKey) {
        subPath = "";
    } else if (subPath.startsWith(`${componentKey}-`)) {
        subPath = subPath.slice(componentKey.length + 1);
    }

    return subPath === "" ? exportName : `${subPath}/${exportName}`;
}

export async function extractStoryMarkup(
    storiesGlobRoot: string,
): Promise<StoryMarkupMap> {
    const files = findStoryFiles(storiesGlobRoot);
    const componentKeyByFile = resolveComponentKeys(files);
    const result: StoryMarkupMap = {};
    // Tracks which file declared each title, so a genuine duplicate title (Storybook
    // itself would have colliding story IDs) fails loudly instead of silently
    // overwriting one file's stories with another's.
    const fileByTitle = new Map<string, string>();

    for (const file of files) {
        const mod = await import(file.filePath);
        const title: unknown = mod.default?.title;

        if (typeof title !== "string" || title.trim() === "") {
            throw new Error(
                `${file.filePath}: default export must have a non-empty string "title" (e.g. "Skin/CTA Button")`,
            );
        }

        const existingTitleOwner = fileByTitle.get(title);
        if (existingTitleOwner !== undefined) {
            throw new Error(
                `${file.filePath}: duplicate title "${title}" (already declared by ${existingTitleOwner}). ` +
                    `Every story file must have a unique title — Storybook itself would have colliding story IDs otherwise.`,
            );
        }
        fileByTitle.set(title, file.filePath);

        const componentKey = componentKeyByFile.get(file.filePath)!;
        result[componentKey] ??= {};

        for (const [exportName, exportValue] of Object.entries(mod)) {
            if (exportName === "default" || typeof exportValue !== "function") {
                continue;
            }

            const html = (exportValue as () => string)();
            const key = variantKey(title, exportName, componentKey);

            result[componentKey][key] = {
                html,
                storybookId: deriveStorybookId(title, exportName),
            };
        }
    }

    return result;
}

export async function writeStoryMarkup(
    storiesGlobRoot: string,
    outputPath: string,
): Promise<void> {
    const markup = await extractStoryMarkup(storiesGlobRoot);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(markup, null, 2), "utf8");
}
