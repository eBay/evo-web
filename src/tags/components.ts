import componentMetadata, {
  type ComponentMetadata,
  type DsComponent,
} from "../data/component-metadata";
export const basePath = import.meta.env.BASE_URL;
export const componentTemplate = import.meta.glob(
  "../routes/component/*/+page.marko",
  { eager: true },
);
const metaJsons = import.meta.glob("../routes/component/*/+meta.json", {
  eager: true,
});
const a11yDocsTemplates = import.meta.glob("../docs/a11y/**/*.md");
const componentMetaJsons = Object.keys(metaJsons).reduce<{
  [key: string]: any;
}>((data, filePath) => {
  const file = getDirectory(filePath);
  data[file] = metaJsons[filePath];
  return data;
}, {});
export interface A11yDocsMap {
  [key: string]: {
    properName: string;
    list: {
      properName: string;
      name: string;
      fullPath: string;
      type: string;
    }[];
  };
}
export interface ComponentMap {
  [key: string]: {
    properName: string;
    name: string;
    fullPath: string;
    default?: any;
    pageTitle?: string;
    pageDescription?: string;
    pageImg?: string;
    hasMetadata: boolean;
  };
}
/**
 * List of all components. This takes all components and creates a url lookup for them
 */
export const components = Object.keys(componentTemplate).reduce<ComponentMap>(
  (data, filePath) => {
    const parts = filePath.split("/");
    const root = parts.slice(0, parts.length - 1).join("/");
    const name = getFileNameWithoutExtension(root);
    const properName = getProperName(name);
    const { pageTitle, pageDescription, pageImg } =
      componentMetaJsons[name] || {};

    data[name] = {
      properName,
      name,
      fullPath: filePath,
      pageDescription,
      pageImg,
      pageTitle,
      hasMetadata: componentMetaJsons[name],
    };

    return data;
  },
  {},
);
function getProperName(comp: string) {
  const componentName = getFileNameWithoutExtension(comp);
  const name = componentName.replace(/-([a-z])/g, function (g) {
    return ` ${g[1].toUpperCase()}`;
  });
  const properName = name.charAt(0).toUpperCase() + name.slice(1);

  return properName;
}
export const a11yDocs = Object.keys(a11yDocsTemplates).reduce<A11yDocsMap>(
  (data, filePath) => {
    const parts = filePath.split("/");
    parts.slice(0, parts.length - 1).join("/");
    const name = getFileNameWithoutExtension(filePath);
    const type = getDirectory(filePath);
    const properName = getProperName(name);
    data[type] = data[type] || {};
    data[type].properName = getProperName(type);
    data[type].list = data[type].list || [];

    data[type].list.push({
      properName,
      name,
      fullPath: filePath,
      type,
    });

    return data;
  },
  {},
);
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
function getDirectory(filePath: string) {
  const lastIndex = filePath.lastIndexOf("/");
  const directoryPath =
    lastIndex !== -1 ? filePath.substring(0, lastIndex) : filePath;

  const lastIndexDirectory = directoryPath.lastIndexOf("/");
  return lastIndexDirectory === -1
    ? directoryPath
    : directoryPath.substring(lastIndexDirectory + 1);
}
export function getMetadata(componentName: string) {
  const metadata = componentMetadata[componentName];

  if (!metadata) {
    return {};
  }

  const dsInfo = metadata?.["ds-component"] || {};
  const dsComponent = Array.isArray(dsInfo) ? dsInfo[0] : dsInfo;
  const properName = components[componentName].properName;

  return {
    metadata,
    properName,
    componentUrls: getComponentUrls(componentName, metadata, dsComponent),
    dsComponent,
  };
}
export function getMetadataFromUrl(url: string) {
  const paths = url.split("/");
  let componentName = paths.pop()!;
  let currentTab = "overview";
  let componentData = getMetadata(componentName);
  if (!componentData.metadata) {
    currentTab = componentName;
    componentName = paths.pop()!;
    componentData = getMetadata(componentName);
  }

  return {
    ...componentData,
    currentTab,
    componentName,
  };
}
function getComponentUrls(
  componentName: string,
  metadata: ComponentMetadata,
  dsComponent: DsComponent,
) {
  const componentUrl = `${basePath}component/${componentName}/`;

  return {
    overview: `${componentUrl}`,
    accessibility: `${componentUrl}accessibility/`,
    css: `${componentUrl}css/`,
    marko: `${basePath}ebayui-core/?path=${metadata.markoStorybookPath}`,
    react: `${basePath}ebayui-core-react/main/?path=${metadata.reactStorybookPath}`,
    dsUrl:
      dsComponent.url || "https://playbook.ebay.com/design-system/components/",
  };
}
