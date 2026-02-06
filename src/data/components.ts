import componentMetadata, {
  type ComponentMetadata,
  type DsComponent,
} from "./component-metadata";
import {
  basePath,
  getFileNameWithoutExtension,
  getProperName,
  urls,
} from "./common";
export const componentTemplate = import.meta.glob(
  "../routes/_index/components/*/+page.marko",
  { eager: true },
);

export const cssTemplate = import.meta.glob(
  "../routes/_index/components/*/css+page.marko",
  { eager: true },
);

export const a11yTemplate = import.meta.glob(
  "../routes/_index/components/*/accessibility+page.marko",
  { eager: true },
);

export interface ComponentMap {
  [key: string]: {
    properName: string;
    name: string;
    fullPath: string;
    default?: any;
    pageImg?: string;
    a11yPage: boolean;
    cssPage?: boolean;
    metadata?: ComponentMetadata;
    dsComponent?: DsComponent;
    componentUrls: {
      overview: string;
      accessibility: string;
      css: string;
      marko?: string;
      react?: string;
      dsUrl?: string;
    };
  };
}

export const a11yPages = Object.keys(a11yTemplate).reduce<Set<string>>(
  (data, filePath) => {
    data.add(getRawName(filePath));
    return data;
  },
  new Set<string>(),
);

export const cssPages = Object.keys(cssTemplate).reduce<Set<string>>(
  (data, filePath) => {
    data.add(getRawName(filePath));
    return data;
  },
  new Set<string>(),
);

/**
 * List of all components. This takes all components and creates a url lookup for them
 */
export const components = Object.keys(componentTemplate).reduce<ComponentMap>(
  (data, filePath) => {
    const name = getRawName(filePath);
    const properName = getProperName(name);
    const { metadata, dsComponent } = getMetadata(name);
    dsComponent.markoVersion = dsComponent.markoVersion || dsComponent.version;
    dsComponent.reactVersion = dsComponent.reactVersion || dsComponent.version;

    data[name] = {
      properName,
      name,
      fullPath: filePath,
      pageImg: `${basePath}img/components/${name}.png`,
      metadata,
      dsComponent,
      a11yPage: a11yPages.has(name),
      cssPage: cssPages.has(name),
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

  const componentKeys = Object.keys(components);
  const currentIndex = componentKeys.indexOf(componentName);
  const prevKey = componentKeys[currentIndex - 1];
  const nextKey = componentKeys[currentIndex + 1];

  return {
    ...componentData,
    prev: components[prevKey],
    next: components[nextKey],
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

function getRawName(filePath: string) {
  const parts = filePath.split("/");
  const root = parts.slice(0, parts.length - 1).join("/");
  const name = getFileNameWithoutExtension(root);

  return name;
}

function getComponentUrls(
  componentName: string,
  metadata?: ComponentMetadata,
  dsComponent?: DsComponent,
) {
  const componentUrl = `${basePath}components/${componentName}`;
  return {
    overview: `${componentUrl}`,
    accessibility: `${componentUrl}/accessibility`,
    css: `${componentUrl}/css`,
    marko:
      (metadata?.markoStorybookPath ?? false)
        ? `${basePath}ebayui-core/?path=${metadata?.markoStorybookPath}`
        : "",
    react:
      (metadata?.reactStorybookPath ?? false)
        ? `${basePath}ebayui-core-react/main/?path=${metadata?.reactStorybookPath}`
        : "",
    dsUrl: dsComponent?.url ?? "",
  };
}
