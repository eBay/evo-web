require("del")
    .deleteAsync(["dist", "coverage", "lint", "src/**/*.js", "src/**/*.jsx", ".storybook/action.js"])
    .then((paths) => {
        console.log("Deleted files and folders:\n", paths.join("\n"));
    });
