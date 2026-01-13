#!/usr/bin/env node

/**
 * Percy Build Status Reporter and GitHub PR Commenter
 *
 * This script:
 * 1. Gets the Percy project details using the read-only token
 * 2. Finds the Percy build by commit SHA
 * 3. Waits for the build to finish processing
 * 4. Posts a PR comment with the build status and link
 * 5. Warns if there are visual changes but doesn't block the PR
 *
 * Environment variables required:
 * - PERCY_TOKEN: Percy write-only token (used by Percy CLI to create builds)
 * - PERCY_READ_TOKEN: Percy read-only token for querying builds and project info
 * - GITHUB_TOKEN: GitHub token for posting PR comments
 * - GITHUB_REPOSITORY: Repository in format "owner/repo"
 * - PR_NUMBER: Pull request number
 * - COMMIT_SHA: Commit SHA to find the build for
 *
 * Usage:
 *   node percy-wait-and-comment.js
 */

const { PercyClient } = require("@percy/client");
const { Octokit } = require("@octokit/rest");

// Configuration
const BUILD_FIND_TIMEOUT = 60000; // 60 seconds to find build
const BUILD_FIND_RETRY_INTERVAL = 5000; // 5 seconds between retries

// Validate required environment variables
const requiredEnvVars = [
    "PERCY_READ_TOKEN",
    "GITHUB_TOKEN",
    "GITHUB_REPOSITORY",
    "PR_NUMBER",
    "COMMIT_SHA",
];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(
            `Error: Missing required environment variable: ${envVar}`,
        );
        process.exit(1);
    }
}

// Initialize clients
// Read-only client for querying project and build info
const percyReadClient = new PercyClient({
    token: process.env.PERCY_READ_TOKEN,
});
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const prNumber = parseInt(process.env.PR_NUMBER, 10);
const commitSHA = process.env.COMMIT_SHA;

/**
 * Sleep helper
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get Percy project details using read-only token
 */
async function getPercyProject() {
    try {
        console.log("Fetching Percy project details...");
        const response = await percyReadClient.get("/projects");

        if (!response.data) {
            throw new Error("Invalid response from Percy API");
        }

        const project = response.data;
        const fullSlug = project.attributes["full-slug"];
        const projectName = project.attributes.name;

        console.log(`Percy project: ${projectName} (${fullSlug})`);
        return fullSlug;
    } catch (error) {
        throw new Error(`Failed to get Percy project: ${error.message}`);
    }
}

/**
 * Find Percy build by commit SHA with retry logic
 */
async function findBuildByCommit(
    projectSlug,
    retryTimeout = BUILD_FIND_TIMEOUT,
) {
    const startTime = Date.now();

    console.log(
        `Looking for Percy build for commit ${commitSHA.substring(0, 7)}...`,
    );

    while (Date.now() - startTime < retryTimeout) {
        try {
            const { data: builds } = await percyReadClient.getBuilds(
                projectSlug,
                {
                    sha: commitSHA,
                },
            );

            if (builds && builds.length > 0) {
                const build = builds[0];
                console.log(
                    `Found Percy build #${build.attributes["build-number"]} (ID: ${build.id})`,
                );
                return build;
            }

            console.log(
                `Build not found yet, retrying in ${BUILD_FIND_RETRY_INTERVAL / 1000}s...`,
            );
            await sleep(BUILD_FIND_RETRY_INTERVAL);
        } catch (error) {
            console.error(`Error finding build: ${error.message}`);
            await sleep(BUILD_FIND_RETRY_INTERVAL);
        }
    }

    throw new Error(
        `Could not find Percy build for commit ${commitSHA} after ${retryTimeout / 1000}s`,
    );
}

/**
 * Wait for build to finish processing (state === 'finished')
 */
async function waitForBuildCompletion(buildId) {
    console.log("Waiting for Percy build to finish processing...");

    try {
        const buildData = await percyReadClient.waitForBuild(
            { build: buildId },
            (data) => {
                const state = data?.attributes?.state;
                const totalComparisons =
                    data?.attributes?.["total-comparisons"] || 0;
                const finishedComparisons =
                    data?.attributes?.["total-comparisons-finished"] || 0;

                if (state === "processing") {
                    console.log(
                        `Processing snapshots: ${finishedComparisons}/${totalComparisons} comparisons finished`,
                    );
                } else if (state === "pending") {
                    console.log("Receiving snapshots...");
                }
            },
        );

        return buildData.data;
    } catch (error) {
        throw new Error(
            `Failed waiting for build completion: ${error.message}`,
        );
    }
}

/**
 * Post comment to GitHub PR
 */
async function postComment(buildData) {
    const webUrl = buildData.attributes["web-url"];
    const buildNumber = buildData.attributes["build-number"];
    const buildState = buildData.attributes.state;
    const totalComparisons = buildData.attributes["total-comparisons"] || 0;
    const totalDiffs = buildData.attributes["total-comparisons-diff"] || 0;
    const reviewState = buildData.attributes["review-state"];

    let statusIcon = "";
    let statusText = "";
    let warningMessage = "";

    if (buildState === "failed") {
        statusIcon = "❌";
        statusText = "Failed";
        const failureReason = buildData.attributes["failure-reason"];
        warningMessage = `⚠️ The Percy build encountered an error: ${failureReason || "Unknown reason"}`;
    } else if (totalDiffs > 0) {
        statusIcon = "⚠️";
        statusText = "Visual Changes Detected";
        warningMessage = `⚠️ **${totalDiffs} visual change${totalDiffs > 1 ? "s" : ""} detected.** Please review the Percy build to ensure these changes are intentional.`;
    } else {
        statusIcon = "✅";
        statusText = "No Visual Changes";
    }

    const commentBody = `## 🎨 Percy Visual Regression Report

**Build Status:** ${statusIcon} ${statusText}

**Build:** [#${buildNumber}](${webUrl})
**Commit:** ${commitSHA.substring(0, 7)}

### Summary
- **Total Snapshots:** ${totalComparisons}
- **Visual Changes:** ${totalDiffs}
- **Review State:** ${reviewState || "unreviewed"}

${warningMessage}

[View full report →](${webUrl})

---
<sub>Generated by Percy CI • Commit ${commitSHA.substring(0, 7)}</sub>`;

    try {
        await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: prNumber,
            body: commentBody,
        });

        console.log(`Posted comment to PR #${prNumber}`);
    } catch (error) {
        console.error(`Failed to post PR comment: ${error.message}`);
        throw error;
    }
}

/**
 * Main execution
 */
async function main() {
    try {
        // Step 1: Get Percy project details using read-only token
        const projectSlug = await getPercyProject();

        // Step 2: Find the build by commit SHA
        const build = await findBuildByCommit(projectSlug);
        const buildId = build.id;

        // Step 3: Wait for build to finish processing
        const completedBuild = await waitForBuildCompletion(buildId);

        console.log("Build processing completed!");

        // Step 4: Post PR comment with build status
        await postComment(completedBuild);

        const totalDiffs =
            completedBuild.attributes["total-comparisons-diff"] || 0;

        if (completedBuild.attributes.state === "failed") {
            console.error("Percy build failed");
            process.exit(1);
        }

        if (totalDiffs > 0) {
            console.log(
                `⚠️ Warning: ${totalDiffs} visual change(s) detected. Please review the Percy build.`,
            );
        } else {
            console.log("✅ No visual changes detected");
        }

        console.log("Success! Comment posted to PR.");
        process.exit(0);
    } catch (error) {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    }
}

main();
