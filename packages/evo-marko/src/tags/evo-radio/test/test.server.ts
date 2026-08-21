import { it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import { prettyNormalizedDOM } from "../../../common/test-utils/snapshots";
import template from "../index.marko";

it("renders default radio", async () => {
  const { getByRole } = await render(template);
  const radioControl = getByRole("radio");
  expect(prettyNormalizedDOM(radioControl)).toMatchSnapshot();
  expect(prettyNormalizedDOM(radioControl.parentElement)).toMatchSnapshot();
  expect(
    prettyNormalizedDOM(radioControl.nextElementSibling),
  ).toMatchSnapshot();
});

it("renders disabled radio", async () => {
  const { getByRole } = await render(template, { disabled: true });
  const radioControl = getByRole("radio");
  expect(prettyNormalizedDOM(radioControl)).toMatchSnapshot();
});

testPassThroughAttributes(template, {
  getClassAndStyleEl(component) {
    return component.getByRole("radio").parentElement;
  },
});
