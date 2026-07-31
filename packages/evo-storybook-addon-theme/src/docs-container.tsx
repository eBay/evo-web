import { DocsContainer } from "@storybook/addon-docs/blocks";
import React, { useEffect, useState } from "react";
import {
  darkTheme,
  getPreferredTheme,
  getSelectedColorScheme,
  lightTheme,
} from "./theme";

const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

type DocsContainerProps = React.ComponentProps<typeof DocsContainer>;

export default function ThemedDocsContainer(props: DocsContainerProps) {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    if (getSelectedColorScheme() !== undefined) return;

    const applySystemTheme = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? darkTheme : lightTheme);
    };

    systemDarkMode.addEventListener("change", applySystemTheme);
    return () => systemDarkMode.removeEventListener("change", applySystemTheme);
  }, []);

  return <DocsContainer {...props} theme={theme} />;
}
