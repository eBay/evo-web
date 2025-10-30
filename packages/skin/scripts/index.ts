import { listBundles, runCSSBuild } from "./generate-bundle";
import { runGenerate } from "./generate-images";
import { verifyBuild } from "./verify-build";
import { generateTopLevel, cleanTopLevel } from "./generate-imports";
import { copySVGIcons, copyCustomStyles, copySVGFlags } from "./storybook/copy";
import { tokens} from './tokens';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .usage("Usage: $0 <command> [options]")
    .command(
        "genSVG",
        "generates less files with styles from svg icons",
        () => {},
        () => {
            try {
                runGenerate();
            } catch (e) {
                console.log(e);
            }
        },
    )
    .command(
        "tokens",
        "Generates all token documentation",
        (yargs) => {},
        async (argv) => {
            await tokens();
        },
    )
    .command(
        "list",
        "List all available modules",
        (yargs) => {},
        async (argv) => {
            await listBundles(argv);
        },
    )
    .command(
        "bundle <name>",
        "generates a CDN bundle with the given name",
        (yargs) => {
            yargs
                .positional("name", {
                    describe: "name to generate bundle",
                    demand: true,
                    default: "skin",
                })
                .option("scope-class", {
                    describe: "Scoped class to prefix bundle with",
                    default: "",
                })
                .option("no-minify", {
                    describe:
                        "Skips minify stage. Should set this when another bundler like lasso will be used.",
                    type: "boolean",
                })
                .option("scope-specificity", {
                    describe: "How many times to repeat scope",
                    default: "1",
                })
                .option("modules", {
                    alias: "m",
                    type: "array",
                    describe:
                        "Space separated list of modules to include. If empty, will include all",
                    default: [],
                });
        },
        (argv) => {
            runCSSBuild(argv.name, argv);
        },
    )
    .command(
        "storybook-copy",
        "Copies files to storybook",
        (yargs) => {
            yargs.option("no-svg", {
                describe: "Skips copying svgs. Default is false",
                type: "boolean",
                default: true,
            });
            yargs.option("no-styles", {
                describe: "Skips copying styles. Default is false",
                type: "boolean",
                default: true,
            });
        },
        (yargs) => {
            if (yargs.noSvg) {
                copySVGIcons();
                copySVGFlags();
            }
            if (yargs.noStyles) {
                copyCustomStyles();
            }
        },
    )
    .command(
        "gen",
        "Generates all imports",
        () => {},
        async () => {
            await generateTopLevel();
        },
    )
    .command(
        "clean",
        "Cleans all imports",
        () => {},
        async () => {
            await cleanTopLevel();
        },
    )
    .command(
        "gen-build",
        "Generates all imports and clean up",
        () => {},
        async () => {
            await generateTopLevel();
            await cleanTopLevel();
        },
    )
    .command(
        "verify",
        "Verifies that build is not broken and there are no unchecked files",
        () => {},
        async () => {
            await verifyBuild();
        },
    )
    .option("verbose", {
        alias: "v",
        type: "boolean",
    })
    .demandCommand(1)
    .help().argv;
