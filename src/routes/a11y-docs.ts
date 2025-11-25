const a11yDocsSources = import.meta.glob("../docs/a11y/**/*.md");
const a11yDocsFlat = Object.keys(a11yDocsSources);

// Organize docs by folder structure
const a11yDocs = a11yDocsFlat.reduce<{ [key: string]: string[] }>(
  (acc, filePath: string) => {
    // Extract the relative path after "src/docs/a11y/"
    const relativePath = filePath.replace(/.*\/packages\/a11y\//, "");
    const pathParts = relativePath.split("/");
    const fileName = pathParts.pop(); // Remove filename
    const folderPath = pathParts.join("/"); // Get folder path

    if (!acc[folderPath]) {
      acc[folderPath] = [];
    }
    acc[folderPath].push(filePath);

    return acc;
  },
  {},
);

export { a11yDocs, a11yDocsSources };
