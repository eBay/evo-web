import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoFakeTab,
  EvoFakeTabList,
  EvoFakeTabPanel,
  EvoFakeTabs,
} from "../index";
import type { FakeTabId } from "../types";

function FakeTabSet({
  selected,
  tabMatchesCurrentUrl,
  size,
}: {
  selected: FakeTabId | null;
  tabMatchesCurrentUrl?: boolean;
  size?: "regular" | "large";
}) {
  return (
    <EvoFakeTabs
      selected={selected}
      tabMatchesCurrentUrl={tabMatchesCurrentUrl}
      size={size}
    >
      <EvoFakeTabList>
        <EvoFakeTab id="us" href="/us">
          US
        </EvoFakeTab>
        <EvoFakeTab id="de" href="/de">
          Germany
        </EvoFakeTab>
        <EvoFakeTab id="uk">UK</EvoFakeTab>
      </EvoFakeTabList>
      <EvoFakeTabPanel>Tab content</EvoFakeTabPanel>
    </EvoFakeTabs>
  );
}

describe("evo-fake-tabs", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders navigation links, not ARIA tab roles", async () => {
    const screen = await render(<FakeTabSet selected="us" />);
    const links = Array.from(
      screen.container.querySelectorAll<HTMLElement>("a[href]"),
    );
    // Only enabled tabs are links
    expect(links).toHaveLength(2);
    // No ARIA tab roles
    expect(screen.container.querySelector('[role="tab"]')).toBeNull();
    expect(screen.container.querySelector('[role="tablist"]')).toBeNull();
  });

  it("sets aria-current=page on the selected tab", async () => {
    const screen = await render(<FakeTabSet selected="us" />);
    const usLink = screen.getByRole("link", { name: "US" });
    await expect.element(usLink).toHaveAttribute("aria-current", "page");

    const deLink = screen.getByRole("link", { name: "Germany" });
    await expect.element(deLink).not.toHaveAttribute("aria-current");
  });

  it("sets aria-current=true when tabMatchesCurrentUrl is false", async () => {
    const screen = await render(
      <FakeTabSet selected="us" tabMatchesCurrentUrl={false} />,
    );
    const usLink = screen.getByRole("link", { name: "US" });
    await expect.element(usLink).toHaveAttribute("aria-current", "true");
  });

  it("sets no aria-current when selected is null", async () => {
    const screen = await render(<FakeTabSet selected={null} />);
    const links = Array.from(
      screen.container.querySelectorAll<HTMLElement>("a"),
    );
    for (const link of links) {
      expect(link.hasAttribute("aria-current")).toBe(false);
    }
  });

  it("tab without href has no href and aria-disabled=true", async () => {
    const screen = await render(<FakeTabSet selected="us" />);
    const ukText = screen.getByText("UK");
    await expect.element(ukText).not.toHaveAttribute("href");
    await expect.element(ukText).toHaveAttribute("aria-disabled", "true");
  });

  it("tab without href has no aria-current even when id matches selected", async () => {
    const screen = await render(<FakeTabSet selected="uk" />);
    const ukEl = screen.getByText("UK");
    await expect.element(ukEl).not.toHaveAttribute("aria-current");
  });

  it("uses the custom component and suppresses clicks when href is omitted", async () => {
    const onClick = vi.fn();
    const CustomLink = ({
      children,
      href,
      ...rest
    }: React.ComponentProps<"a">) => (
      <a {...rest} data-custom-link="true" href={href}>
        {children}
      </a>
    );
    const screen = await render(
      <EvoFakeTabs selected={null}>
        <EvoFakeTabList>
          <EvoFakeTab id="disabled" as={CustomLink} onClick={onClick}>
            Disabled
          </EvoFakeTab>
        </EvoFakeTabList>
      </EvoFakeTabs>,
    );

    const disabledTab = screen.getByText("Disabled");
    await expect
      .element(disabledTab)
      .toHaveAttribute("data-custom-link", "true");

    await user.click(disabledTab);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("treats an empty href as an enabled custom link", async () => {
    const onClick = vi.fn();
    const CustomLink = ({
      children,
      href,
      onClick,
      ...rest
    }: React.ComponentProps<"a">) => (
      <a
        {...rest}
        data-custom-link="true"
        href={href}
        onClick={(event) => {
          event.preventDefault();
          if (onClick) {
            onClick(event);
          }
        }}
      >
        {children}
      </a>
    );
    const screen = await render(
      <EvoFakeTabs selected="empty">
        <EvoFakeTabList>
          <EvoFakeTab id="empty" href="" as={CustomLink} onClick={onClick}>
            Empty href
          </EvoFakeTab>
        </EvoFakeTabList>
      </EvoFakeTabs>,
    );

    const link = screen.getByRole("link", { name: "Empty href" });
    await expect.element(link).toHaveAttribute("href", "");
    await expect.element(link).toHaveAttribute("aria-current", "page");
    await expect.element(link).toHaveAttribute("data-custom-link", "true");

    await user.click(link);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies custom classes to the list item", async () => {
    const screen = await render(
      <EvoFakeTabs selected="us">
        <EvoFakeTabList>
          <EvoFakeTab id="us" href="/us" className="custom-item">
            US
          </EvoFakeTab>
        </EvoFakeTabList>
      </EvoFakeTabs>,
    );

    const item = screen.getByRole("listitem");
    await expect.element(item).toHaveClass("fake-tabs__item", "custom-item");
    await expect
      .element(screen.getByRole("link", { name: "US" }))
      .not.toHaveClass("custom-item");
  });

  it("applies the large size class", async () => {
    const screen = await render(<FakeTabSet selected="us" size="large" />);
    const root = screen.container.querySelector(".fake-tabs");
    expect(root).not.toBeNull();
    expect(root!.classList.contains("fake-tabs--large")).toBe(true);
  });

  it("does not apply large class for regular size", async () => {
    const screen = await render(<FakeTabSet selected="us" size="regular" />);
    const root = screen.container.querySelector(".fake-tabs");
    expect(root!.classList.contains("fake-tabs--large")).toBe(false);
  });

  it("renders the wrapper hierarchy: fake-tabs__content > fake-tabs__panel > fake-tabs__cell > div", async () => {
    const screen = await render(<FakeTabSet selected="us" />);
    const content = screen.container.querySelector(".fake-tabs__content");
    expect(content).not.toBeNull();
    const panel = content!.querySelector(".fake-tabs__panel");
    expect(panel).not.toBeNull();
    const cell = panel!.querySelector(".fake-tabs__cell");
    expect(cell).not.toBeNull();
    const inner = cell!.querySelector("div");
    expect(inner).not.toBeNull();
    expect(inner!.textContent).toBe("Tab content");
  });

  it("forwards native props and refs to structural elements", async () => {
    const rootRef = createRef<HTMLDivElement>();
    const listRef = createRef<HTMLUListElement>();
    const panelRef = createRef<HTMLDivElement>();
    await render(
      <EvoFakeTabs selected="us" id="my-fake-tabs" ref={rootRef}>
        <EvoFakeTabList aria-label="Destinations" ref={listRef}>
          <EvoFakeTab id="us" href="/us">
            US
          </EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel data-testid="panel" ref={panelRef}>
          Content
        </EvoFakeTabPanel>
      </EvoFakeTabs>,
    );

    expect(rootRef.current).toBeInstanceOf(HTMLDivElement);
    expect(rootRef.current?.id).toBe("my-fake-tabs");
    expect(listRef.current).toBeInstanceOf(HTMLUListElement);
    expect(listRef.current?.getAttribute("aria-label")).toBe("Destinations");
    expect(panelRef.current).toBeInstanceOf(HTMLDivElement);
    expect(panelRef.current?.dataset.testid).toBe("panel");
  });

  it("as prop receives href and renders a custom anchor component", async () => {
    type LinkProps = React.ComponentProps<"a">;
    const CustomLink = ({ href, children, ...rest }: LinkProps) => (
      <a data-custom-link="true" href={href} {...rest}>
        {children}
      </a>
    );

    const screen = await render(
      <EvoFakeTabs selected="us">
        <EvoFakeTabList>
          <EvoFakeTab id="us" href="/us" as={CustomLink}>
            US
          </EvoFakeTab>
          <EvoFakeTab id="de" href="/de">
            Germany
          </EvoFakeTab>
        </EvoFakeTabList>
      </EvoFakeTabs>,
    );

    const usLink = screen.getByRole("link", { name: "US" });
    await expect.element(usLink).toHaveAttribute("data-custom-link", "true");
    await expect.element(usLink).toHaveAttribute("href", "/us");
    await expect.element(usLink).toHaveAttribute("aria-current", "page");

    // Germany uses the default <a> without data-custom-link
    const deLink = screen.getByRole("link", { name: "Germany" });
    await expect.element(deLink).not.toHaveAttribute("data-custom-link");
  });

  it("uses Object.is for id comparison (numeric id)", async () => {
    const screen = await render(
      <EvoFakeTabs selected={42}>
        <EvoFakeTabList>
          <EvoFakeTab id={42} href="/num">
            Numeric
          </EvoFakeTab>
          <EvoFakeTab id="42" href="/str">
            String 42
          </EvoFakeTab>
        </EvoFakeTabList>
      </EvoFakeTabs>,
    );

    const numLink = screen.getByRole("link", { name: "Numeric" });
    const strLink = screen.getByRole("link", { name: "String 42" });
    await expect.element(numLink).toHaveAttribute("aria-current", "page");
    await expect.element(strLink).not.toHaveAttribute("aria-current");
  });
});
