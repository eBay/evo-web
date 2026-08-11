import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoTab,
  EvoTabList,
  EvoTabPanel,
  EvoTabPanelList,
  EvoTabs,
} from "../index";

function TabsFixture({
  defaultSelected,
  size,
}: {
  defaultSelected: string | number;
  size?: "medium" | "large";
}) {
  return (
    <EvoTabs defaultSelected={defaultSelected} size={size} id="product-tabs">
      <EvoTabList>
        <EvoTab id="overview">Overview</EvoTab>
        <EvoTab id={2}>Shipping</EvoTab>
      </EvoTabList>
      <EvoTabPanelList>
        <EvoTabPanel id="overview">Overview panel</EvoTabPanel>
        <EvoTabPanel id={2}>Shipping panel</EvoTabPanel>
      </EvoTabPanelList>
    </EvoTabs>
  );
}

describe("EvoTabs SSR", () => {
  it("renders a string id", () => {
    expect(
      renderToString(<TabsFixture defaultSelected="overview" />),
    ).toMatchSnapshot();
  });

  it("renders a numeric id", () => {
    expect(
      renderToString(<TabsFixture defaultSelected={2} />),
    ).toMatchSnapshot();
  });

  it("renders large tabs", () => {
    expect(
      renderToString(<TabsFixture defaultSelected="overview" size="large" />),
    ).toMatchSnapshot();
  });
});
