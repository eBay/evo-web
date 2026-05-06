import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoAvatar } from "../avatar";
import { EvoAvatarImage } from "../avatar-image";

describe("evo-avatar", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders with username initial when no children are provided", async () => {
    const screen = await render(
      <EvoAvatar username="Elizabeth" a11yText="Signed in as Elizabeth" />,
    );
    await expect.element(screen.getByText("E")).toBeInTheDocument();
  });

  it("renders signed-out icon when no username or children are provided", async () => {
    const screen = await render(<EvoAvatar a11yText="Signed out" />);
    const avatar = screen.getByRole("img", { name: "Signed out" });
    await expect.element(avatar).toBeInTheDocument();
    const svgEl = avatar.element().querySelector("svg");
    expect(svgEl).toBeTruthy();
  });

  it("renders with the correct aria-label from a11yText", async () => {
    const screen = await render(
      <EvoAvatar username="Joe" a11yText="Signed in as Joe" />,
    );
    await expect
      .element(screen.getByRole("img", { name: "Signed in as Joe" }))
      .toBeInTheDocument();
  });

  it("does not render aria-label when a11yText is null", async () => {
    const screen = await render(
      <EvoAvatar username="Joe" a11yText={null} aria-labelledby="some-id" />,
    );
    // Query the avatar div directly — the SVG sprite also has role="img" so
    // we use the container to find the .avatar element.
    const avatarEl = screen.baseElement.querySelector<HTMLElement>(".avatar");
    expect(avatarEl).toBeTruthy();
    expect(avatarEl!.hasAttribute("aria-label")).toBe(false);
  });

  it("renders img child when EvoAvatarImage is used", async () => {
    const screen = await render(
      <EvoAvatar username="Elizabeth" a11yText="Signed in as Elizabeth">
        <EvoAvatarImage src="https://example.com/pic.jpg" />
      </EvoAvatar>,
    );
    const avatar = screen.getByRole("img", { name: "Signed in as Elizabeth" });
    const imgEl = avatar.element().querySelector("img");
    expect(imgEl).toBeTruthy();
    expect(imgEl?.getAttribute("src")).toBe("https://example.com/pic.jpg");
  });

  it("applies size modifier class", async () => {
    const screen = await render(
      <EvoAvatar username="Joe" a11yText="Joe" size={64} />,
    );
    await expect
      .element(screen.getByRole("img", { name: "Joe" }))
      .toHaveClass("avatar--64");
  });

  it("applies color class derived from username", async () => {
    const screen = await render(
      <EvoAvatar username="Elizabeth" a11yText="Elizabeth" />,
    );
    const el = screen.getByRole("img", { name: "Elizabeth" }).element();
    expect(el.className).toMatch(
      /avatar--(?:teal|light-teal|green|lime|yellow|orange|magenta|pink)/,
    );
  });

  it("applies explicit color override", async () => {
    const screen = await render(
      <EvoAvatar username="Joe" a11yText="Joe" color="magenta" />,
    );
    await expect
      .element(screen.getByRole("img", { name: "Joe" }))
      .toHaveClass("avatar--magenta");
  });

  it("applies avatar--fit class when knownAspectRatio is portrait", async () => {
    const screen = await render(
      <EvoAvatar a11yText="avatar" knownAspectRatio={0.5}>
        <EvoAvatarImage src="https://example.com/pic.jpg" />
      </EvoAvatar>,
    );
    await expect
      .element(screen.getByRole("img", { name: "avatar" }))
      .toHaveClass("avatar--fit");
  });

  it("updates image placement to fit on image load with portrait aspect ratio", async () => {
    const screen = await render(
      <EvoAvatar a11yText="avatar">
        <EvoAvatarImage src="https://example.com/pic.jpg" />
      </EvoAvatar>,
    );

    const avatarEl = screen.getByRole("img", { name: "avatar" }).element();
    const img = avatarEl.querySelector("img") as HTMLImageElement;
    Object.defineProperty(img, "naturalWidth", { value: 3, configurable: true });
    Object.defineProperty(img, "naturalHeight", { value: 5, configurable: true });
    img.dispatchEvent(new Event("load", { bubbles: true }));

    await expect
      .element(screen.getByRole("img", { name: "avatar" }))
      .toHaveClass("avatar--fit");
  });

  it("calls custom onLoad handler from EvoAvatarImage", async () => {
    const onLoad = vi.fn();
    const screen = await render(
      <EvoAvatar a11yText="avatar">
        <EvoAvatarImage src="https://example.com/pic.jpg" onLoad={onLoad} />
      </EvoAvatar>,
    );

    const avatarEl = screen.getByRole("img", { name: "avatar" }).element();
    const img = avatarEl.querySelector("img") as HTMLImageElement;
    Object.defineProperty(img, "naturalWidth", { value: 100, configurable: true });
    Object.defineProperty(img, "naturalHeight", { value: 100, configurable: true });
    img.dispatchEvent(new Event("load", { bubbles: true }));

    expect(onLoad).toHaveBeenCalledTimes(1);
  });
});
