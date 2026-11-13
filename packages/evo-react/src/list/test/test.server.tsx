import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
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

describe("EvoList SSR", () => {
  it("renders static items with leading and trailing content", () => {
    expect(
      renderToString(
        <EvoList id="listing-files">
          <EvoListItem>
            <EvoListItemLeading>
              <EvoIconFolder16 />
            </EvoListItemLeading>
            <EvoListItemContent>Product photos</EvoListItemContent>
            <EvoListItemTrailing>12 files</EvoListItemTrailing>
          </EvoListItem>
        </EvoList>,
      ),
    ).toMatchSnapshot();
  });

  it("renders button, link, and separator markup", () => {
    expect(
      renderToString(
        <EvoList>
          <EvoListItemButton type="button">
            <EvoListItemContent>Show shipping details</EvoListItemContent>
          </EvoListItemButton>
          <EvoListSeparator />
          <EvoListItemLink href="/help/returns">
            <EvoListItemContent>Read the returns guide</EvoListItemContent>
          </EvoListItemLink>
        </EvoList>,
      ),
    ).toMatchSnapshot();
  });
});
