import componentMetadata, {
  type ComponentMetadata,
  type DsComponent,
} from "./component-metadata";
import {
  basePath,
  getDirectory,
  getFileNameWithoutExtension,
  getProperName,
} from "./common";
export const componentTemplate = import.meta.glob(
  "../routes/component/*/+page.marko",
  { eager: true },
);
const metaJsons = import.meta.glob("../routes/component/*/+meta.json", {
  eager: true,
});
const componentMetaJsons = Object.keys(metaJsons).reduce<{
  [key: string]: any;
}>((data, filePath) => {
  const file = getDirectory(filePath);
  data[file] = metaJsons[filePath];
  return data;
}, {});

export interface ComponentMap {
  [key: string]: {
    properName: string;
    name: string;
    fullPath: string;
    default?: any;
    pageTitle?: string;
    pageDescription?: string;
    pageImg?: string;
    metadata?: ComponentMetadata;
    dsComponent?: DsComponent;
    componentUrls: {
      overview: string;
      accessibility: string;
      css: string;
      marko: string;
      react: string;
      dsUrl: string;
    };
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
    const { metadata, dsComponent } = getMetadata(name);

    data[name] = {
      properName,
      name,
      fullPath: filePath,
      pageDescription,
      pageImg,
      pageTitle,
      metadata,
      dsComponent,
      componentUrls: getComponentUrls(name, metadata, dsComponent),
    };

    return data;
  },
  {},
);

export function getMetadataFromUrl(url: string) {
  const paths = url.split("/");
  let componentName = paths.pop()!;
  let currentTab = "overview";
  let componentData = components[componentName];
  if (!(componentData?.metadata ?? false)) {
    currentTab = componentName;
    componentName = paths.pop()!;
    componentData = components[componentName];
  }

  return {
    ...componentData,
    currentTab,
  };
}

function getMetadata(componentName: string) {
  const metadata = componentMetadata[componentName];

  if (!metadata) {
    return {};
  }

  const dsInfo = metadata?.["ds-component"] || {};
  const dsComponent = Array.isArray(dsInfo) ? dsInfo[0] : dsInfo;

  return {
    metadata,
    dsComponent,
  };
}

function getComponentUrls(
  componentName: string,
  metadata?: ComponentMetadata,
  dsComponent?: DsComponent,
) {
  const componentUrl = `${basePath}component/${componentName}/`;

  return {
    overview: `${componentUrl}`,
    accessibility: `${componentUrl}accessibility/`,
    css: `${componentUrl}css/`,
    marko: `${basePath}ebayui-core/?path=${metadata?.markoStorybookPath}`,
    react: `${basePath}ebayui-core-react/main/?path=${metadata?.reactStorybookPath}`,
    dsUrl:
      dsComponent?.url || "https://playbook.ebay.com/design-system/components/",
  };
}
