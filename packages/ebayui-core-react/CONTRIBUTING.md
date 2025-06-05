# Contributing

This page contains instructions and guidelines for anybody contributing code to the eBayUI React project.

## Quick guidance for contribution

- Create a feature branch `git checkout -b features/new-component`
- `yarn install` to install dependencies
- Add documentation:
    - `README.md` on component level
    - Unit test
    - Storybook file for snapshot tests and also component showcase/demo
- Make your changes pass the:
    - `yarn lint`. You can do `yarn lint --fix` to automatically fix small lint issues (e.g indentation, whitespace, semicolons, ...)
    - `yarn test`. Do `yarn test -u` to automatically the snapshot tests.

## Extended guidance

- [Development](#development)
- [Pull Requests](#pull-requests)
- [Branching Strategy](#branching-strategy)
- [Unit Tests](#unit-tests)
- [Storybook](#storybook)
- [Definition of Done](#definition-of-done)
- [Notes](#notes)
- [Support](#support)

## Development

This section includes information on system requirements, running the local server, tests and package scripts.

### System Requirements

- [Node.js](https://nodejs.org/en/) (v18+ preferred)
- Preferably yarn (`npm i -g yarn`), but npm should work as well

Clone this repo to your local environment then run `yarn` or `npm i` to install all dependencies.

### Local Server with Storybook

Execute `yarn storybook` (or `yarn storybook-node16` for node@<=16) to start local web server with storybook. this will allow you to develop components in isolation. Stories

### Tests

Execute `yarn test` to run all tests or `yarn coverage` to run test with coverage, reports are shown in the console and stored as `coverage/lcov-report/index.html`.

Most of our tests verify html snapshots against the generated html that the current component outputs. If these change the test will fail. In order to update the snapshots, one needs to run `yarn test -u` and then new snapshots will be generated, which should be checked in. Please make sure that snapshot changes make sense.

### Changesets

We use [changesets](https://github.com/changesets/changesets) to manage our releases. This allows us to create a changelog and versioning for our packages. To create a changeset, run `yarn change` and follow the prompts. This will create a new file in the `.changeset` directory.
Make sure to commit the changeset file to your branch.

## Pull Requests

This section contains information and etiquette regarding pull requests (or "PRs" as they are often called).

### Before You Start

If you are creating a new component or significantly altering an existing one, please ensure that an issue has been created _before_ you start any work, and that it has been assigned to you. The same goes for any big new additions or changes to the project structure, CI or documentation.

We ask this because:

- we want to avoid cases where developers build something that does not align with our wants & needs
- we want to be able to carefully plan our sprint and test cycles with minimal disruption
- we want to avoid cases where two developers duplicate work

### Writing Code

The contents of a pull request should be related to a single issue only (or, at most, perhaps two very closely related issues). The reviewer has the right to reject a pull request that contains anything non-issue related.

Whilst it may be tempting to fix any [broken windows](https://www.rtuin.nl/2012/08/software-development-and-the-broken-windows-theory/) that you encounter, we ask you not to because:

- it can distract the reviewer from the main issue at hand
- it can add additional time needed for the reviewer
- it can increase the chance of regressions
- it can make rollbacks more difficult

So please be a good citizen and create separate issues or pull requests for any broken windows that you find.

### Moving Code

Please try and isolate "noisy" commits that only _move_ many files or lines of code, from commits that actually modify code logic. The reviewer has the right to reject a pull request that is difficult to reason with due to too much _unnecessary_ noise in the diff.

For example, assuming moving some code doesn't put the app into a broken state, the move can be considered a safe atomic commit (e.g. "moved functions x, y and z to bottom of file"). The actual _fixes_ to functions x, y and z can then be made in a follow up commit (e.g. "fixed functions x, y and z") which will be easier for the reviewer to diff.

### Breaking Changes

Please think very carefully before introducing breaking API changes. Breaking changes may only be introduced in a major version. If you wish to alter the API _before_ a major version, then aliases can often be a good way to achieve this. Using an alias, the old API can be deprecated and will still continue to function.

### Deprecating Code

Any deprecated code should be clearly documented in the code comments and the release notes. Deprecated code will typically be scheduled for removal in the next major version. Example:

```ts
type TabsProps = {
    onSelect?: (props: OnSelectProps) => void;
    /**
     * @deprecated Use onSelect instead
     */
    onTabSelect?: (index: number) => void;
};
```

### Avoiding Conflicts

It is your responsibility to ensure that your feature branch has no merge conflicts with its base branch. A pull request created and sent for review containing many conflicts does not inspire confidence in the reviewer.

The best way to ensure there are no conflicts is by keeping your branch up to date with its base branch and resolving any conflicts in your own branch early & often. If you are the only developer working in the feature branch, then it is usually better to rebase. If another developer is sharing your branch, then merging is the safer option (as it doesn't require a force push).

If you are working on a large feature, that takes many days, then there is a good chance that the base branch will have received other commits during that time. If you wait till the very end before syncing your branch with the base branch, then you may have to deal with some difficult merge conflicts.

### Commit History

Whilst having multiple "work in progress", "almost done" and "merged branch" type commits in a feature branch is fine, we wish to refrain from those commits polluting the milestone and master branch history. On the flip side, although rarer in comparison, we might also have some _atomic_ commits in our feature branch that we absolutely wish to keep as part of the project history.

Before creating your pull request you have two options regarding what to do with the commit history of your feature branch:

1. Squash all superfluous commits. If more than 1 commit remains, then clearly label your PR as "do not squash" in order to keep this commit history. Any subsequent commits to the branch (i.e. those made after code review) may also need squashing by you.
2. Do not squash any commits and clearly mark your PR as "must squash" to indicate to the reviewer that you do not wish to keep any commit history. If you wish to keep any subsequent commits (i.e. after code review), you will now need to switch tracks to option 1 above.

If a pull request is received with a bewildering commit history that is difficult to reason with (e.g. 10+ commits containing obscure commit messages, previously committed code, old branch merges, etc), it will take much more time to review and raise a lot of questions.

### Merging the Pull Request

An admin will merge or squash the pull request when it receives one or two approvals depending on its complexity. Please try to avoid committing any more code at this point unless it is absolutely necessary, as this may invalidate the prior approvals (depending on branch settings).

At least one of the commit messages should include a reference to the issue number it resolves (example: `[#45] Extract contributing document from readme`).

## Branching Strategy

Members of the eBayUI team must work in the main repository. Non-members must work in their own fork.

Do not attempt to commit feature work directly to the master branch. Pushes to the master branch should only be used for important corrections to the documentation or website. The master branch **always** reflects the current production facing code.

All other branches are "milestone" branches or "issue" branches.

Every milestone branch must be created from the master branch. The branch name must match the milestone name, For example, when beginning work on the 2.9.0 release, a "2.9.0" milestone branch would be created from the master branch.

Work for every issue must go in it's own branch. The branch name will match the issue number. For example, for issue number 202, a branch named "202" would be created. Remember: more than one developer may work in an issue branch, so please be courteous!

Issue branches must be created from the relevant milestone branch. For example, if issue 202 will go out in the v2.6.7 milestone, then the 202 issue branch must be created from the 2.6.7 milestone branch. This helps to keep any rebasing sane.

<strike>When work on an issue branch is complete and committed upstream, the GitHub Action must successfully run on that branch.</strike>

When all milestone issues are complete, and merged into the milestone branch, an admin will either perform a pre-release, or they will merge the milestone branch into the master branch in preparation for a final release.

A milestone branch will be deleted after it has been merged into master. There is no need to keep these milestone branches lying around, as we can go back to any point in time using git tags.

With this strategy, there are rarely more than a handful of branches at any one moment in time:

- main branch (reflects current production code/release)
- next minor or major milestone branch
- _n_ number of feature/issue branches

## Unit Tests

Each component has two suites of unit tests: rendering tests & user interaction tests.

Our unit tests follow the "black-box" approach. We test only the exposed, public API. We do not explicitly test the internal, private methods. Private methods are considered to be tested _implicitly_ whenever we test part of the public API (which can be evidenced via code coverage reports).

Rendering testing test that given component props, we test that the rendered html matches our expected outcome. You can use either snapshots or directly `expect(title).toBeInTheDocument()`.

User interaction testing should check that certain callbacks are called when user interactions occur. For example, when a user clicks on a button, we should check that the `onClick` callback is called. We should also check that the callback is called with the correct arguments. We should also check that the callback is not called when the user does not interact with the component. Also, we should check that certain component rendering changes occurs when user interacts with it. For example, when a user clicks on a button, we should check that the button is disabled.

For both types of tests, please observe the following golden rules:

- A test should only test one thing. Watch out for the words 'and' & 'or' in your test description!
- A test should not contain conditional logic. We don't want to have to write tests for our tests!
- A test description should avoid interpolated strings. Test descriptions should be human-readable (readable != parsable).
- Quality of the test > quantity of tests. A test that is not well written is worse than no test at all, it wastes your and other developers time.
- A test should be deterministic. A test should not fail or pass randomly. If it does, then it is not a well written test.
- A test should be isolated. A test should not rely on any other test or external factors. If it does, then it is not a well written test.

Above all, all aspects of a test should be human-readable. A simple litmus test for this is that anybody should be able to read the test and, within a few seconds, be able to tell you what the _purpose_ of the test is. If they are confused, or ask questions, then it is not a well written test. Go back and refactor!

## Storybook

Storybook is used for components development. It allows you to develop components in isolation. Storybook is also used for visual regression testing. It is also used for documentation and to showcase components.

Each component has its own storybook file in `__tests__/index.stories.tsx`. The storybook file contains stories for all component's variants.

It can also be used to test component's snapshots.

## Definition of Done

A component is considered "done", and ready for merge into release branch, when the following 3 checkpoints have been satisfied:

1. Foundational layer review

- Visual design (DS6)
- Markup structure ([Bones](https://github.com/ianmcburnie/bones))
- Accessibility pattern ([MIND pattern](https://ebay.gitbook.io/mindpatterns/))
- CSS ([Skin](https://ebay.github.io/skin/))

2. Component layer review

- Props API
- Callback API
- Unit tests
- Integration test
- Performance test
- Documentation

3. Code review

- Linter should catch syntax and style issues
- Prefer performance to readability, but readability over "space-saving" code
- Apply the single-responsibility principle to functions
- Refactor long functions into several small functions
- Extract component parts to keep its main file small (one-two pages of code)
- Identify and move common utility functions to libraries or static methods
- Any (inline) CSS should come from Skin

One way to comply those guidelines is to implement your new component as similar as possible with the Marko [eBayUI Core](https://github.com/eBay/ebayui-core), or port the Marko implementation to React. This means the new component should:

- Output the same HTML structure
- Have similar behaviour (e.g open menu dropdown on click and keyboard)
- Support the same props/attributes (e.g. ebay-breadcrumb `a11y-heading-text`, or ebay-button `priority`)
- Support the same callbacks/events (e.g. ebay-select `select-change` event will become EbaySelect `onSelectChange` callback).

## Notes

### How to update icons on skin changes

This will update `EbaySvg` and `EbayIcon` components:

```shell script
yarn update-icons
```

## Support

Write an email to tmanyanov@ebay.com
