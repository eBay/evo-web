import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoAvatar } from "../avatar";
import { EvoAvatarImage } from "../avatar-image";
import type { Size, Color } from "../types";

describe("EvoAvatar SSR", () => {
  it.each<Size>([32, 40, 48, 56, 64, 96, 128])(
    "should render avatar with size=%s",
    (size) => {
      expect(
        renderToString(<EvoAvatar size={size} username="Joe" a11yText="Joe" />),
      ).toMatchSnapshot();
    },
  );

  it.each<Color>([
    "teal",
    "light-teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "magenta",
    "pink",
  ])("should render avatar with color=%s", (color) => {
    expect(
      renderToString(<EvoAvatar color={color} username="Joe" a11yText="Joe" />),
    ).toMatchSnapshot();
  });

  it("should render signed-out avatar when no username or children", () => {
    expect(
      renderToString(<EvoAvatar a11yText="Signed out" />),
    ).toMatchSnapshot();
  });

  it("should render avatar with username initial", () => {
    expect(
      renderToString(
        <EvoAvatar username="Elizabeth" a11yText="Signed in as Elizabeth" />,
      ),
    ).toMatchSnapshot();
  });

  it("should render avatar with image child", () => {
    expect(
      renderToString(
        <EvoAvatar username="Elizabeth" a11yText="Signed in as Elizabeth">
          <EvoAvatarImage src="https://example.com/pic.jpg" />
        </EvoAvatar>,
      ),
    ).toMatchSnapshot();
  });

  it("should render avatar with fit placement when knownAspectRatio is portrait", () => {
    expect(
      renderToString(
        <EvoAvatar knownAspectRatio={0.5} a11yText="avatar">
          <EvoAvatarImage src="https://example.com/pic.jpg" />
        </EvoAvatar>,
      ),
    ).toMatchSnapshot();
  });

  it("should render avatar with null a11yText (no aria-label)", () => {
    expect(
      renderToString(
        <EvoAvatar username="Joe" a11yText={null} aria-labelledby="some-id" />,
      ),
    ).toMatchSnapshot();
  });
});
