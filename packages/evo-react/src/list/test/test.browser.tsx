import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconFolder16 } from "../../icon/icons/folder-16";
import {
  EvoList,
  EvoListItem,
  EvoListItemBody,
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
          <EvoListItemBody>Product photos</EvoListItemBody>
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
    expect(wrapper).toHaveClass("list__body");
    expect(wrapper?.children[0]).toHaveClass("list__leading");
    expect(wrapper?.children[1]).toHaveClass("list__body");
    expect(wrapper?.children[2]).toHaveClass("list__trailing");
  });

  it("uses native button and link behavior", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoList>
        <EvoListItem as="button" onClick={onClick}>
          <EvoListItemBody>Show shipping details</EvoListItemBody>
        </EvoListItem>
        <EvoListItem as="a" href="/help/returns">
          <EvoListItemBody>Read the returns guide</EvoListItemBody>
        </EvoListItem>
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
        <EvoListItem as="button" ref={buttonRef} className="custom-button">
          <EvoListItemLeading ref={leadingRef} className="custom-leading">
            New
          </EvoListItemLeading>
          <EvoListItemBody>View offer</EvoListItemBody>
        </EvoListItem>
      </EvoList>,
    );

    expect(listRef.current).toHaveClass("list", "custom-list");
    expect(buttonRef.current).toHaveClass("list__body", "custom-button");
    expect(leadingRef.current).toHaveClass("list__leading", "custom-leading");
  });

  it("renders separators between items", async () => {
    const screen = await render(
      <EvoList>
        <EvoListItem>
          <EvoListItemBody>Saved searches</EvoListItemBody>
        </EvoListItem>
        <EvoListSeparator />
        <EvoListItem>
          <EvoListItemBody>Recently viewed</EvoListItemBody>
        </EvoListItem>
      </EvoList>,
    );

    expect(screen.container.querySelectorAll("ul > li")).toHaveLength(3);
    expect(
      screen.container.querySelectorAll("ul > li[aria-hidden='true'] > hr"),
    ).toHaveLength(1);
  });
});
