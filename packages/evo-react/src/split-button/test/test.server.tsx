import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoMenuButtonItem,
  EvoSplitButton,
  EvoSplitButtonAction,
  EvoSplitButtonMenu,
} from "../index";

describe("EvoSplitButton SSR", () => {
  it("renders the two collapsed controls", () => {
    expect(
      renderToString(
        <EvoSplitButton priority="primary" a11yMenuText="More options">
          <EvoSplitButtonAction>Save</EvoSplitButtonAction>
          <EvoSplitButtonMenu>
            <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
          </EvoSplitButtonMenu>
        </EvoSplitButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an anchor action and open menu", () => {
    expect(
      renderToString(
        <EvoSplitButton size="large" transparent>
          <EvoSplitButtonAction href="/drafts">
            View drafts
          </EvoSplitButtonAction>
          <EvoSplitButtonMenu open>
            <EvoMenuButtonItem>Archive</EvoMenuButtonItem>
          </EvoSplitButtonMenu>
        </EvoSplitButton>,
      ),
    ).toMatchSnapshot();
  });
});
