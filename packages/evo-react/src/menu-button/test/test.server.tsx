import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoMenuButton,
  EvoMenuButtonItem,
  EvoMenuButtonMenu,
  EvoMenuButtonTrigger,
} from "../index";

describe("EvoMenuButton SSR", () => {
  it("renders the closed button structure", () => {
    expect(
      renderToString(
        <EvoMenuButton>
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenuButtonMenu>
            <EvoMenuButtonItem>Edit</EvoMenuButtonItem>
          </EvoMenuButtonMenu>
        </EvoMenuButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the open menu and filter treatment", () => {
    expect(
      renderToString(
        <EvoMenuButton variant="filter" hasSelection open>
          <EvoMenuButtonTrigger>Delivery</EvoMenuButtonTrigger>
          <EvoMenuButtonMenu>
            <EvoMenuButtonItem>Free shipping</EvoMenuButtonItem>
          </EvoMenuButtonMenu>
        </EvoMenuButton>,
      ),
    ).toMatchSnapshot();
  });
});
