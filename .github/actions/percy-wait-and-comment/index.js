#!/usr/bin/env node

/**
 * Percy Build Status Reporter and GitHub PR Commenter
 *
 * This script:
 * 1. Gets the Percy project details using the read-only token
 * 2. Finds the Percy build by commit SHA
 * 3. Waits for the build to finish processing
 * 4. Posts a PR comment with the build status and link
 * 5. Sets GitHub Actions outputs for downstream steps
 * 6. Warns if there are visual changes but doesn't block the PR
 *
 * Inputs (via @actions/core):
 * - percy-read-token: Percy read-only token for API access
 * - github-token: GitHub token for posting PR comments
 * - pr-number: Pull request number
 * - commit-sha: Commit SHA to find Percy build for
 * - github-repository: Repository in format "owner/repo"
 *
 * Outputs (via @actions/core):
 * - build-status: Percy build status (passed, passed-with-changes, failed, error)
 * - build-url: Percy dashboard URL
 * - visual-changes-count: Number of visual changes detected
 * - build-number: Percy build number
 * - review-state: Percy review state
 *
 * Usage (GitHub Actions):
 *   uses: ./.github/actions/percy-wait-and-comment
 *   with:
 *     percy-read-token: ${{ secrets.PERCY_READ_TOKEN }}
 *     github-token: ${{ secrets.GITHUB_TOKEN }}
 *     pr-number: ${{ github.event.pull_request.number }}
 *     commit-sha: ${{ github.event.pull_request.head.sha }}
 *     github-repository: ${{ github.repository }}
 */

const core = require("@actions/core");
const { PercyClient } = require("@percy/client");
const { Octokit } = require("@octokit/rest");

// Configuration
const BUILD_FIND_TIMEOUT = 60000; // 60 seconds to find build
const BUILD_FIND_RETRY_INTERVAL = 5000; // 5 seconds between retries

// Get inputs from action.yml
const percyReadToken = core.getInput("percy-read-token", { required: true });
const githubToken = core.getInput("github-token", { required: true });
const githubRepository = core.getInput("github-repository", { required: true });
const prNumber = parseInt(core.getInput("pr-number", { required: true }), 10);
const commitSHA = core.getInput("commit-sha", { required: true });

// Initialize clients
const percyReadClient = new PercyClient({
  token: percyReadToken,
});
const octokit = new Octokit({ auth: githubToken });

const [owner, repo] = githubRepository.split("/");

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
    core.info("Fetching Percy project details...");
    const response = await percyReadClient.get("/projects");

    if (!response.data) {
      throw new Error("Invalid response from Percy API");
    }

    const project = response.data;
    const fullSlug = project.attributes["full-slug"];
    const projectName = project.attributes.name;

    core.info(`Percy project: ${projectName} (${fullSlug})`);
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

  core.info(
    `Looking for Percy build for commit ${commitSHA.substring(0, 7)}...`,
  );

  while (Date.now() - startTime < retryTimeout) {
    try {
      const { data: builds } = await percyReadClient.getBuilds(projectSlug, {
        sha: commitSHA,
      });

      if (builds && builds.length > 0) {
        const build = builds[0];
        core.info(
          `Found Percy build #${build.attributes["build-number"]} (ID: ${build.id})`,
        );
        return build;
      }

      core.debug(
        `Build not found yet, retrying in ${BUILD_FIND_RETRY_INTERVAL / 1000}s...`,
      );
      await sleep(BUILD_FIND_RETRY_INTERVAL);
    } catch (error) {
      core.warning(`Error finding build: ${error.message}`);
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
  core.startGroup("Waiting for Percy build to complete");
  core.info("Waiting for Percy build to finish processing...");

  try {
    const buildData = await percyReadClient.waitForBuild(
      { build: buildId },
      (data) => {
        const state = data?.attributes?.state;
        const totalComparisons = data?.attributes?.["total-comparisons"] || 0;
        const finishedComparisons =
          data?.attributes?.["total-comparisons-finished"] || 0;

        if (state === "processing") {
          core.info(
            `Processing snapshots: ${finishedComparisons}/${totalComparisons} comparisons finished`,
          );
        } else if (state === "pending") {
          core.info("Receiving snapshots...");
        }
      },
    );

    core.endGroup();
    return buildData.data;
  } catch (error) {
    core.endGroup();
    throw new Error(`Failed waiting for build completion: ${error.message}`);
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

  // Set GitHub Actions outputs
  core.setOutput("build-url", webUrl);
  core.setOutput("build-number", buildNumber);
  core.setOutput("visual-changes-count", totalDiffs);
  core.setOutput("review-state", reviewState || "unreviewed");

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

    core.info(`Posted comment to PR #${prNumber}`);
  } catch (error) {
    core.error(`Failed to post PR comment: ${error.message}`);
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

    core.info("Build processing completed!");

    // Step 4: Post PR comment with build status
    await postComment(completedBuild);

    const totalDiffs = completedBuild.attributes["total-comparisons-diff"] || 0;
    const buildState = completedBuild.attributes.state;

    // Set final build status output
    if (buildState === "failed") {
      core.setOutput("build-status", "failed");
      core.setFailed("Percy build failed");
      process.exit(1);
    } else if (totalDiffs > 0) {
      core.setOutput("build-status", "passed-with-changes");
      core.warning(
        `${totalDiffs} visual change(s) detected. Please review the Percy build.`,
      );
    } else {
      core.setOutput("build-status", "passed");
      core.info("✅ No visual changes detected");
    }

    core.info("Success! Comment posted to PR.");
    process.exit(0);
  } catch (error) {
    core.setOutput("build-status", "error");
    core.setFailed(`Fatal error: ${error.message}`);
    if (error.stack) {
      core.debug(error.stack);
    }
    process.exit(1);
  }
}

main();
