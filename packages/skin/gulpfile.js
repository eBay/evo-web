var child_process = require("child_process");
var yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

async function runSnapshots(storiesList, isDryRun) {
    const argv = yargs(hideBin(process.argv)).parse();
    const stories = argv.stories === undefined ? storiesList : argv.stories;
    const aStories = stories.split(",");
    const storiesReg = aStories.join("|");
    const storiesRX = `^\\bSkin/\(?:${storiesReg})\\b`;
    const storiesRXString = "\\bSkin/\\(?:" + storiesReg + ")\\b";
    const dryRun = argv.dry === undefined ? isDryRun : argv.dry;
    const percyExecutable = dryRun
        ? "snapshots:execute:dry"
        : "snapshots:execute";

    console.log(`
************************************************************
Running Percy Snapshot(s)...
Snapshot(s):         ${stories}
Percy Stories Regex: ${storiesRXString}
Percy Dry Run:       ${dryRun}
Running Snapshot(s)...
************************************************************
	`);

    return child_process
        .spawn("npm", ["run", percyExecutable, storiesRX], { stdio: "inherit" })
        .on("close", function () {
            console.log("\nCompleted\n\n");
        });
}

// public tasks
exports.runSnapshots = runSnapshots;
