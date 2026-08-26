import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconClose12 } from "../../icon/icons/close-12";
import { EvoCombobox } from "../combobox";
import { EvoComboboxOption } from "../combobox-option";

function renderCombobox(props: Parameters<typeof EvoCombobox>[0] = {}) {
  return renderToString(
    <EvoCombobox floatingLabel="Campaign" {...props}>
      <EvoComboboxOption text="August Campaign" />
      <EvoComboboxOption text="Basic Offer" />
    </EvoCombobox>,
  );
}

describe("EvoCombobox SSR", () => {
  it("renders the default combobox", () => {
    expect(renderCombobox()).toMatchSnapshot();
  });

  it("renders a fluid combobox with a floating label", () => {
    expect(
      renderCombobox({
        defaultValue: "August Campaign",
        floatingLabel: "Campaign",
        fluid: true,
      }),
    ).toMatchSnapshot();
  });

  it("renders an open borderless combobox", () => {
    expect(
      renderCombobox({ borderless: true, defaultOpen: true }),
    ).toMatchSnapshot();
  });

  it("renders an actionable postfix", () => {
    expect(
      renderCombobox({
        postfix: {
          icon: <EvoIconClose12 />,
          buttonProps: { a11yText: "Clear" },
        },
      }),
    ).toMatchSnapshot();
  });
});
