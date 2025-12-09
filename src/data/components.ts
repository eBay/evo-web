import componentMetadata, {
  type ComponentMetadata,
  type DsComponent,
} from "./component-metadata";
import { basePath, getFileNameWithoutExtension, getProperName } from "./common";
export const componentTemplate = import.meta.glob(
  "../routes/_index/components/*/+page.marko",
  { eager: true },
);

export interface ComponentMap {
  [key: string]: {
    properName: string;
    name: string;
    fullPath: string;
    default?: any;
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
    const { metadata, dsComponent } = getMetadata(name);
    dsComponent.markoVersion = dsComponent.markoVersion || dsComponent.version;
    dsComponent.reactVersion = dsComponent.reactVersion || dsComponent.version;

    data[name] = {
      properName,
      name,
      fullPath: filePath,
      pageImg: `img/components/${name}.png`,
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
  const page = paths?.[1];
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
    page,
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
  const componentUrl = `components/${componentName}/`;

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
