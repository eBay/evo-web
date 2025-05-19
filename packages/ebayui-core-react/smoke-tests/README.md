# ui-core-react smoke tests

This directory contains the smoke tests for the `@ebay/ui-core-react` package. These tests are designed to test the output files generated on the `dist` folder.
We test that one of the components renders correctly in 3 different React versions: 16, 18 and 19. Each test is separated in its own folder (`react-16`, `react-18`, `react-19`) and contains a `package.json` file with the React version to be used. The tests are run using NodeJS assertion library.

Note: we manually copy the `dist` folder inside the `node_modules` folder of each test so it doesn't create a symlink of the package, so the `react` version used is the one specified in the test not the one in the root of the monorepo.
