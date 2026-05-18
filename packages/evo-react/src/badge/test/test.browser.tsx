import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { EvoBadge } from "../badge";

describe("evo-badge", () => {
  describe("given a positive number", () => {
    it("renders the badge with the number", async () => {
      const screen = await render(<EvoBadge number={5} a11yText="5 unread items" />);
      await expect.element(screen.getByText("5")).toBeInTheDocument();
    });

    it("truncates decimal values", async () => {
      const screen = await render(<EvoBadge number={5.6} a11yText="5 unread items" />);
      await expect.element(screen.getByText("5")).toBeInTheDocument();
    });

    it("truncates numbers greater than 99 to '99+'", async () => {
      const screen = await render(<EvoBadge number={150} a11yText="99+ unread items" />);
      await expect.element(screen.getByText("99+")).toBeInTheDocument();
    });
  });

  describe("given a string number", () => {
    it("renders the badge with the coerced number", async () => {
      const screen = await render(<EvoBadge number="5" a11yText="5 unread items" />);
      await expect.element(screen.getByText("5")).toBeInTheDocument();
    });

    it("truncates decimal string values", async () => {
      const screen = await render(<EvoBadge number="5.6" a11yText="5 unread items" />);
      await expect.element(screen.getByText("5")).toBeInTheDocument();
    });

    it("does not render with an invalid string", async () => {
      const { container } = await render(<EvoBadge number="five" a11yText="unread items" />);
      expect(container.querySelector(".badge")).toBeNull();
    });

    it("does not render with a negative string", async () => {
      const { container } = await render(<EvoBadge number="-5" a11yText="unread items" />);
      expect(container.querySelector(".badge")).toBeNull();
    });
  });

  describe("given zero or negative number", () => {
    it("does not render when number is zero", async () => {
      const { container } = await render(<EvoBadge number={0} a11yText="0 unread items" />);
      expect(container.querySelector(".badge")).toBeNull();
    });

    it("does not render when number is negative", async () => {
      const { container } = await render(<EvoBadge number={-5} a11yText="unread items" />);
      expect(container.querySelector(".badge")).toBeNull();
    });
  });

  describe("accessibility", () => {
    it("has role='img' and aria-label by default", async () => {
      const screen = await render(<EvoBadge number={3} a11yText="3 unread items" />);
      const badge = screen.getByRole("img");
      await expect.element(badge).toHaveAttribute("aria-label", "3 unread items");
    });

    it("does not set role='img' for menu type", async () => {
      const { container } = await render(
        <EvoBadge number={3} type="menu" a11yText={null} />,
      );
      const badge = container.querySelector(".badge");
      expect(badge?.getAttribute("role")).toBeNull();
    });

    it("does not set role='img' for icon type", async () => {
      const { container } = await render(
        <EvoBadge number={3} type="icon" a11yText={null} />,
      );
      const badge = container.querySelector(".badge");
      expect(badge?.getAttribute("role")).toBeNull();
    });

    it("passes null a11yText as no aria-label", async () => {
      const { container } = await render(
        <EvoBadge number={3} type="menu" a11yText={null} />,
      );
      const badge = container.querySelector(".badge");
      expect(badge?.getAttribute("aria-label")).toBeNull();
    });
  });

  describe("className passthrough", () => {
    it("appends custom className to badge", async () => {
      const { container } = await render(
        <EvoBadge number={5} a11yText="5 unread items" className="custom-class" />,
      );
      const badge = container.querySelector(".badge");
      expect(badge).toHaveClass("custom-class");
    });
  });

  it("renders an empty badge when no number is provided", async () => {
    const { container } = await render(<EvoBadge a11yText="new" />);
    const badge = container.querySelector(".badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toBeEmptyDOMElement();
  });
});
