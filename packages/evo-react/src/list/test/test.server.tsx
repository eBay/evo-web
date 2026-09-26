import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconFolder16 } from "../../icon/icons/folder-16";
import {
  EvoList,
  EvoListItem,
  EvoListItemBody,
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
            <EvoListItemBody>Product photos</EvoListItemBody>
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
          <EvoListItem as="button" type="button">
            <EvoListItemBody>Show shipping details</EvoListItemBody>
          </EvoListItem>
          <EvoListSeparator />
          <EvoListItem as="a" href="/help/returns">
            <EvoListItemBody>Read the returns guide</EvoListItemBody>
          </EvoListItem>
        </EvoList>,
      ),
    ).toMatchSnapshot();
  });
});
