import { createRef, type ComponentProps } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconFolder16 } from "../../icon/icons/folder-16";
import {
  EvoList,
  EvoListItem,
  EvoListItemContent,
  EvoListItemButton,
  EvoListItemLink,
  EvoListItemLeading,
  EvoListItemTrailing,
  EvoListSeparator,
} from "../index";

describe("evo-list", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps the list, item, and named region structure", async () => {
    const screen = await render(
      <EvoList a11yText="Listing files">
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFolder16 />
          </EvoListItemLeading>
          <EvoListItemContent>Product photos</EvoListItemContent>
          <EvoListItemTrailing>12 files</EvoListItemTrailing>
        </EvoListItem>
      </EvoList>,
    );

    const list = screen.getByRole("list", { name: "Listing files" });
    const item = screen.getByRole("listitem");
    await expect.element(list).toBeInTheDocument();
    await expect.element(item).toBeInTheDocument();
    expect(list.element().closest(".list")).not.toBeNull();
    const wrapper = item.element().firstElementChild;
    expect(wrapper).not.toHaveAttribute("class");
    expect(wrapper?.children[0]).toHaveClass("list__leading");
    expect(wrapper?.children[1]).toHaveClass("list__body");
    expect(wrapper?.children[2]).toHaveClass("list__trailing");
  });

  it("uses native button and link behavior", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoList>
        <EvoListItemButton type="button" onClick={onClick}>
          <EvoListItemContent>Show shipping details</EvoListItemContent>
        </EvoListItemButton>
        <EvoListItemLink href="/help/returns">
          <EvoListItemContent>Read the returns guide</EvoListItemContent>
        </EvoListItemLink>
      </EvoList>,
    );

    const button = screen.getByRole("button", {
      name: "Show shipping details",
    });
    const link = screen.getByRole("link", { name: "Read the returns guide" });
    await expect.element(link).toHaveAttribute("href", "/help/returns");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.tab();
    await expect.element(link).toHaveFocus();
  });

  it("passes native attributes and refs through each region", async () => {
    const listRef = createRef<HTMLDivElement>();
    const buttonRef = createRef<HTMLButtonElement>();
    const leadingRef = createRef<HTMLDivElement>();
    await render(
      <EvoList ref={listRef} className="custom-list" data-testid="list">
        <EvoListItemButton ref={buttonRef} className="custom-button">
          <EvoListItemLeading ref={leadingRef} className="custom-leading">
            New
          </EvoListItemLeading>
          <EvoListItemContent>View offer</EvoListItemContent>
        </EvoListItemButton>
      </EvoList>,
    );

    expect(listRef.current).toHaveClass("list", "custom-list");
    expect(buttonRef.current).toHaveClass("custom-button");
    expect(leadingRef.current).toHaveClass("list__leading", "custom-leading");
  });

  it("renders a custom link component", async () => {
    function CustomLink({ href, children, ...rest }: ComponentProps<"a">) {
      return (
        <a {...rest} href={href} data-router-link="true">
          {children}
        </a>
      );
    }

    const screen = await render(
      <EvoList>
        <EvoListItemLink href="/help/returns" as={CustomLink}>
          <EvoListItemContent>Read the returns guide</EvoListItemContent>
        </EvoListItemLink>
      </EvoList>,
    );

    const link = screen.getByRole("link", { name: "Read the returns guide" });
    await expect.element(link).toHaveAttribute("href", "/help/returns");
    await expect.element(link).toHaveAttribute("data-router-link", "true");
  });

  it("renders separators between items", async () => {
    const screen = await render(
      <EvoList>
        <EvoListItem>
          <EvoListItemContent>Saved searches</EvoListItemContent>
        </EvoListItem>
        <EvoListSeparator />
        <EvoListItem>
          <EvoListItemContent>Recently viewed</EvoListItemContent>
        </EvoListItem>
      </EvoList>,
    );

    expect(screen.container.querySelectorAll("ul > li")).toHaveLength(2);
    expect(screen.container.querySelectorAll("ul > hr")).toHaveLength(1);
  });
});
