import {
  getDirectory,
  getFileNameWithoutExtension,
  getProperName,
} from "./common";

const a11yDocsTemplates = import.meta.glob(
  "../routes/_index/accessibility/**/*+page.marko",
);

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

export const a11yDocs = Object.keys(a11yDocsTemplates).reduce<A11yDocsMap>(
  (data, filePath) => {
    const parts = filePath.split("/");
    parts.slice(0, parts.length - 1).join("/");
    const name = getFileNameWithoutExtension(filePath).replace("+page", "");

    // This is when the actual file is simply +page.marko
    if (!name) {
      return data;
    }
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
