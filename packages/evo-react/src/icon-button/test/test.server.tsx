import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconButton } from "../icon-button";
import { EvoIconButtonBadge } from "../icon-button-badge";
import { EvoIconMenu20 } from "../../icon/icons/menu-20";
import { EvoIconSettings16 } from "../../icon/icons/settings-16";
import { EvoIconCart16 } from "../../icon/icons/cart-16";
import type { Priority, Size } from "../types";

describe("EvoIconButton SSR", () => {
  it("should render defaults", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Menu">
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it.each<Priority>(["primary", "secondary", "tertiary", "none"])(
    "should render button with priority=%s",
    (priority) => {
      expect(
        renderToString(
          <EvoIconButton a11yText="Menu" priority={priority}>
            <EvoIconMenu20 />
          </EvoIconButton>,
        ),
      ).toMatchSnapshot();
    },
  );

  it.each<Size>(["large", "small"])(
    "should render button with size=%s",
    (size) => {
      expect(
        renderToString(
          <EvoIconButton a11yText="Menu" size={size}>
            <EvoIconMenu20 />
          </EvoIconButton>,
        ),
      ).toMatchSnapshot();
    },
  );

  it("should render transparent button", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Menu" transparent>
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render disabled button", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Menu" disabled>
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render partiallyDisabled button", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Menu" partiallyDisabled>
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render as anchor when href is provided", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Settings" href="https://ebay.com">
          <EvoIconSettings16 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render disabled anchor without href", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Settings" href="https://ebay.com" disabled>
          <EvoIconSettings16 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with badge", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Cart">
          <EvoIconCart16 />
          <EvoIconButtonBadge number={3} />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with badge number > 99", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Cart">
          <EvoIconCart16 />
          <EvoIconButtonBadge number={100} />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with a11yText=null when alternative a11y info is present", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText={null} aria-labelledby="external-label">
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with custom className", () => {
    expect(
      renderToString(
        <EvoIconButton a11yText="Menu" className="custom-class">
          <EvoIconMenu20 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with a custom `as` component", () => {
    type CustomLinkProps = React.ComponentProps<"a">;
    const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => (
      <a data-custom-link="true" href={href} {...rest}>
        {children}
      </a>
    );

    expect(
      renderToString(
        <EvoIconButton a11yText="Settings" href="/home" as={CustomLink}>
          <EvoIconSettings16 />
        </EvoIconButton>,
      ),
    ).toMatchSnapshot();
  });
});
