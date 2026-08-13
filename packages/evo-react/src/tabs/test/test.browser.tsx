import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoTab,
  EvoTabList,
  EvoTabPanel,
  EvoTabPanels,
  EvoTabs,
} from "../index";
import type { EvoTabsProps, TabId } from "../types";

function TabSet(props: EvoTabsProps) {
  return (
    <EvoTabs {...props}>
      <EvoTabList>
        <EvoTab id="overview">Overview</EvoTab>
        <EvoTab id="shipping" disabled>
          Shipping
        </EvoTab>
        <EvoTab id={3}>Returns</EvoTab>
      </EvoTabList>
      <EvoTabPanels>
        <EvoTabPanel id="overview">Overview panel</EvoTabPanel>
        <EvoTabPanel id="shipping">Shipping panel</EvoTabPanel>
        <EvoTabPanel id={3}>Returns panel</EvoTabPanel>
      </EvoTabPanels>
    </EvoTabs>
  );
}

function ControlledTabs({
  onSelectedChange,
}: {
  onSelectedChange: (selected: TabId) => void;
}) {
  const [selected, setSelected] = useState<TabId>("overview");

  return (
    <TabSet
      selected={selected}
      onSelectedChange={(nextSelected) => {
        setSelected(nextSelected);
        onSelectedChange(nextSelected);
      }}
    />
  );
}

describe("evo-tabs", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the selected tab and matching panel", async () => {
    const screen = await render(<TabSet defaultSelected="overview" />);
    const overview = screen.getByRole("tab", { name: "Overview" });
    const shipping = screen.getByRole("tab", { name: "Shipping" });

    await expect.element(overview).toHaveAttribute("aria-selected", "true");
    await expect.element(shipping).toHaveAttribute("aria-disabled", "true");
    await expect
      .element(screen.getByRole("tabpanel", { name: "Overview" }))
      .toHaveTextContent("Overview panel");
  });

  it("uses the selected id as the initial roving tab stop", async () => {
    const screen = await render(<TabSet defaultSelected={3} />);
    const returns = screen.getByRole("tab", { name: "Returns" });

    await user.tab();

    await expect.element(returns).toHaveFocus();
    await expect.element(returns).toHaveAttribute("tabindex", "0");
  });

  it("updates an uncontrolled selection on click", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <TabSet defaultSelected="overview" onSelectedChange={onSelectedChange} />,
    );
    const returns = screen.getByRole("tab", { name: "Returns" });

    await user.click(returns);

    await expect.element(returns).toHaveAttribute("aria-selected", "true");
    await expect
      .element(screen.getByRole("tabpanel", { name: "Returns" }))
      .toHaveTextContent("Returns panel");
    expect(onSelectedChange).toHaveBeenCalledWith(3);
  });

  it("updates a controlled selection", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <ControlledTabs onSelectedChange={onSelectedChange} />,
    );

    await user.click(screen.getByRole("tab", { name: "Returns" }));

    await expect
      .element(screen.getByRole("tab", { name: "Returns" }))
      .toHaveAttribute("aria-selected", "true");
    expect(onSelectedChange).toHaveBeenCalledWith(3);
  });

  it("reports controlled changes without changing a read-only selection", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <TabSet selected="overview" onSelectedChange={onSelectedChange} />,
    );

    await user.click(screen.getByRole("tab", { name: "Returns" }));

    expect(onSelectedChange).toHaveBeenCalledTimes(1);
    expect(onSelectedChange).toHaveBeenCalledWith(3);
    await expect
      .element(screen.getByRole("tab", { name: "Overview" }))
      .toHaveAttribute("aria-selected", "true");
  });

  it("automatically selects with arrow keys and skips disabled tabs", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <TabSet defaultSelected="overview" onSelectedChange={onSelectedChange} />,
    );
    const overview = screen.getByRole("tab", { name: "Overview" });
    const returns = screen.getByRole("tab", { name: "Returns" });

    await user.tab();
    await expect.element(overview).toHaveFocus();
    await user.keyboard("{ArrowRight}");

    await expect.element(returns).toHaveFocus();
    await expect.element(returns).toHaveAttribute("aria-selected", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith(3);

    await user.keyboard("{ArrowRight}");
    await expect.element(overview).toHaveFocus();
  });

  it("moves focus without selecting until Enter in manual activation", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <TabSet
        activation="manual"
        defaultSelected="overview"
        onSelectedChange={onSelectedChange}
      />,
    );
    const overview = screen.getByRole("tab", { name: "Overview" });
    const returns = screen.getByRole("tab", { name: "Returns" });

    await user.tab();
    await user.keyboard("{ArrowRight}");

    await expect.element(returns).toHaveFocus();
    await expect.element(overview).toHaveAttribute("aria-selected", "true");
    expect(onSelectedChange).not.toHaveBeenCalled();

    await user.keyboard("{Enter}");
    await expect.element(returns).toHaveAttribute("aria-selected", "true");
    expect(onSelectedChange).toHaveBeenCalledWith(3);
  });

  it("does not select a disabled tab", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <TabSet defaultSelected="overview" onSelectedChange={onSelectedChange} />,
    );
    const shipping = screen.getByRole("tab", { name: "Shipping" });

    await shipping.click({ force: true });

    expect(onSelectedChange).not.toHaveBeenCalled();
    await expect.element(shipping).toHaveAttribute("aria-selected", "false");
  });

  it("applies large sizing and forwards refs", async () => {
    const rootRef = createRef<HTMLDivElement>();
    const tabRef = createRef<HTMLDivElement>();
    await render(
      <EvoTabs defaultSelected="overview" size="large" ref={rootRef}>
        <EvoTabList>
          <EvoTab id="overview" ref={tabRef}>
            Overview
          </EvoTab>
        </EvoTabList>
        <EvoTabPanels>
          <EvoTabPanel id="overview">Overview panel</EvoTabPanel>
        </EvoTabPanels>
      </EvoTabs>,
    );

    expect(rootRef.current).toBeInstanceOf(HTMLDivElement);
    expect(tabRef.current).toBeInstanceOf(HTMLDivElement);
    await expect.element(rootRef.current).toHaveClass("tabs--large");
  });
});
