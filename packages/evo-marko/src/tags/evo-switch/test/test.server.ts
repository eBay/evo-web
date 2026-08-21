import { it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { prettyNormalizedDOM } from "../../../common/test-utils/snapshots";
import template from "../index.marko";

it("renders default switch", async () => {
  const { getByRole } = await render(template);
  const switchControl = getByRole("switch");
  expect(prettyNormalizedDOM(switchControl.parentElement)).toMatchSnapshot();
  expect(
    prettyNormalizedDOM(switchControl.nextElementSibling),
  ).toMatchSnapshot();
  expect(prettyNormalizedDOM(switchControl)).toMatchSnapshot();
});

it("renders disabled switch", async () => {
  const { getByRole } = await render(template, { disabled: true });
  const switchControl = getByRole("switch");
  expect(prettyNormalizedDOM(switchControl)).toMatchSnapshot();
});
