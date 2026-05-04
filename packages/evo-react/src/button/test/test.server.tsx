import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../button";
import { EvoButtonCell } from "../button-cell";
import type { Priority, Size, Variant, Split, BodyState } from "../types";

describe("EvoButton SSR", () => {
  it.each<Priority>(["primary", "secondary", "tertiary", "none"])(
    "should render button with priority=%s",
    (priority) => {
      expect(
        renderToString(<EvoButton priority={priority}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<Size>(["large", "small"])(
    "should render button with size=%s",
    (size) => {
      expect(
        renderToString(<EvoButton size={size}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<Variant>(["standard", "destructive", "form"])(
    "should render button with variant=%s",
    (variant) => {
      expect(
        renderToString(<EvoButton variant={variant}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<Split>(["start", "end"])(
    "should render button with split=%s",
    (split) => {
      expect(
        renderToString(
          <EvoButton split={split} priority="primary">
            Button
          </EvoButton>,
        ),
      ).toMatchSnapshot();
    },
  );

  it.each<BodyState>(["loading", "expand"])(
    "should render button with bodyState=%s",
    (bodyState) => {
      expect(
        renderToString(<EvoButton bodyState={bodyState}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with fluid=%s",
    (fluid) => {
      expect(
        renderToString(<EvoButton fluid={fluid}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with disabled=%s",
    (disabled) => {
      expect(
        renderToString(<EvoButton disabled={disabled}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with partiallyDisabled=%s",
    (partiallyDisabled) => {
      expect(
        renderToString(
          <EvoButton partiallyDisabled={partiallyDisabled}>Button</EvoButton>,
        ),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with transparent=%s",
    (transparent) => {
      expect(
        renderToString(<EvoButton transparent={transparent}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with borderless=%s",
    (borderless) => {
      expect(
        renderToString(<EvoButton borderless={borderless}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with truncate=%s",
    (truncate) => {
      expect(
        renderToString(<EvoButton truncate={truncate}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it.each<boolean>([false, true])(
    "should render button with fixedHeight=%s",
    (fixedHeight) => {
      expect(
        renderToString(<EvoButton fixedHeight={fixedHeight}>Button</EvoButton>),
      ).toMatchSnapshot();
    },
  );

  it("should render defaults", () => {
    expect(
      renderToString(<EvoButton>Default Button</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render with id override", () => {
    expect(
      renderToString(<EvoButton id="test">Button</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render with type override", () => {
    expect(
      renderToString(<EvoButton type="submit">Submit</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render fake version (anchor)", () => {
    expect(
      renderToString(
        <EvoButton
          href="https://ebay.com"
          size="large"
          priority="primary"
          aria-label="fake button"
        >
          Link Button
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render disabled link without href", () => {
    expect(
      renderToString(
        <EvoButton href="https://ebay.com" disabled>
          Disabled Link
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render large truncated button", () => {
    expect(
      renderToString(
        <EvoButton truncate size="large">
          Large Truncated
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render large fixed-height button", () => {
    expect(
      renderToString(
        <EvoButton fixedHeight size="large">
          Large Fixed Height
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render form variant with expand", () => {
    expect(
      renderToString(
        <EvoButton variant="form" bodyState="expand">
          Form Expand
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render destructive primary large", () => {
    expect(
      renderToString(
        <EvoButton variant="destructive" priority="primary" size="large">
          Delete
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with custom className", () => {
    expect(
      renderToString(<EvoButton className="custom-class">Button</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render with aria-label", () => {
    expect(
      renderToString(<EvoButton aria-label="Submit form">Submit</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render with data attributes", () => {
    expect(
      renderToString(<EvoButton data-testid="button">Button</EvoButton>),
    ).toMatchSnapshot();
  });

  it("should render with ButtonCell", () => {
    expect(
      renderToString(
        <EvoButton>
          <EvoButtonCell style={{ justifyContent: "space-between" }}>
            <span>Left</span>
            <span>Right</span>
          </EvoButtonCell>
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render combined: primary large fluid", () => {
    expect(
      renderToString(
        <EvoButton priority="primary" size="large" fluid>
          Combined
        </EvoButton>,
      ),
    ).toMatchSnapshot();
  });
});
