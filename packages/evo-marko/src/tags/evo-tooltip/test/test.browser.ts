import { afterEach, describe, it, expect, vi } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import ButtonHost from "./fixtures/button-host.marko";

afterEach(cleanup);

const settle = () => new Promise((resolve) => setTimeout(resolve, 50));

describe("evo-tooltip", () => {
  describe("given a noHover tooltip with a button host", () => {
    it("opens on click even when the browser does not focus on click", async () => {
      const onHostClick = vi.fn();
      const { container } = await render(ButtonHost, { onHostClick });
      const host =
        container.querySelector<HTMLButtonElement>(".tooltip__host")!;
      expect(host.getAttribute("aria-expanded")).toBe("false");

      host.click();
      await settle();
      expect(document.activeElement).toBe(host);
      expect(host.getAttribute("aria-expanded")).toBe("true");
      expect(onHostClick).toHaveBeenCalledTimes(1);
    });

    it("closes when focus leaves the host", async () => {
      const { container } = await render(ButtonHost, {});
      const host =
        container.querySelector<HTMLButtonElement>(".tooltip__host")!;
      host.click();
      await settle();
      expect(host.getAttribute("aria-expanded")).toBe("true");

      host.blur();
      await settle();
      expect(host.getAttribute("aria-expanded")).toBe("false");
    });
  });
});
