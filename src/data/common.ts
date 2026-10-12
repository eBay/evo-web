export const basePath = import.meta.env.BASE_URL;

export function getProperName(comp: string) {
  const componentName = getFileNameWithoutExtension(comp);
  const name = componentName.replace(/-([a-z])/g, function (g) {
    return ` ${g[1].toUpperCase()}`;
  });
  const properName = name.charAt(0).toUpperCase() + name.slice(1);

  return properName;
}

/**
 * Helper method to basically do path.basename on client
 */
export function getFileNameWithoutExtension(filePath: string) {
  const lastIndex = filePath.lastIndexOf("/");
  const file = lastIndex !== -1 ? filePath.substring(lastIndex + 1) : filePath;

  const lastDotIndex = file.lastIndexOf(".");
  return lastDotIndex !== -1 ? file.substring(0, lastDotIndex) : file;
}
/**
 * Helper method to get directory file is in
 */
export function getDirectory(filePath: string) {
  const lastIndex = filePath.lastIndexOf("/");
  const directoryPath =
    lastIndex !== -1 ? filePath.substring(0, lastIndex) : filePath;

  const lastIndexDirectory = directoryPath.lastIndexOf("/");
  return lastIndexDirectory === -1
    ? directoryPath
    : directoryPath.substring(lastIndexDirectory + 1);
}

export const urls = {
  root: basePath,
  sitemap: `${basePath}sitemap`,
  components: `${basePath}components`,
  accessibility: `${basePath}accessibility`,
  guides: `${basePath}guides`,
  poc: `${basePath}poc`,
  cssComponents: `${basePath}evo-css-components`,
  markoComponents: `${basePath}evo-marko-components`,
  reactComponents: `${basePath}evo-react-components`,
  markoStorybook: `${basePath}ebayui-core`,
  reactStorybook: `${basePath}ebayui-core-react/main`,
  skinStorybook: `${basePath}skin-storybook/storybook`,
  guideExamples: `${basePath}guide-examples`,
};
