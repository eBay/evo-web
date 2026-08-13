import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoFakeTab,
  EvoFakeTabList,
  EvoFakeTabPanel,
  EvoFakeTabs,
} from "../index";

function FakeTabsFixture({
  selected,
  size,
  tabMatchesCurrentUrl,
}: {
  selected: string | number | null;
  size?: "regular" | "large";
  tabMatchesCurrentUrl?: boolean;
}) {
  return (
    <EvoFakeTabs
      selected={selected}
      size={size}
      tabMatchesCurrentUrl={tabMatchesCurrentUrl}
      id="site-tabs"
    >
      <EvoFakeTabList>
        <EvoFakeTab id="us" href="/us">
          US
        </EvoFakeTab>
        <EvoFakeTab id="de" href="/de">
          Germany
        </EvoFakeTab>
        <EvoFakeTab id={2} href="/numeric">
          Numeric
        </EvoFakeTab>
        <EvoFakeTab id="uk">UK</EvoFakeTab>
      </EvoFakeTabList>
      <EvoFakeTabPanel>Tab content</EvoFakeTabPanel>
    </EvoFakeTabs>
  );
}

describe("EvoFakeTabs SSR", () => {
  it("renders with a string id selected", () => {
    expect(renderToString(<FakeTabsFixture selected="us" />)).toMatchSnapshot();
  });

  it("renders with a numeric id selected", () => {
    expect(renderToString(<FakeTabsFixture selected={2} />)).toMatchSnapshot();
  });

  it("renders with null selected (no aria-current)", () => {
    expect(
      renderToString(<FakeTabsFixture selected={null} />),
    ).toMatchSnapshot();
  });

  it("renders tabMatchesCurrentUrl=false with aria-current=true", () => {
    expect(
      renderToString(
        <FakeTabsFixture selected="us" tabMatchesCurrentUrl={false} />,
      ),
    ).toMatchSnapshot();
  });

  it("renders large size", () => {
    expect(
      renderToString(<FakeTabsFixture selected="us" size="large" />),
    ).toMatchSnapshot();
  });

  it("renders a tab without href as disabled", () => {
    const html = renderToString(<FakeTabsFixture selected="us" />);
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain('href="/uk"');
  });
});
