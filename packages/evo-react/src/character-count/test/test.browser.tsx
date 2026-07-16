import { useRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoCharacterCount } from "../character-count";
import { countCharacters } from "../count-characters";

describe("evo-character-count", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("counts grapheme characters", async () => {
    const screen = await render(
      <EvoCharacterCount text="Hello world" max={120} />,
    );

    await expect.element(screen.getByText("11/120")).toBeInTheDocument();
    await expect
      .element(screen.getByText("characters used"))
      .toBeInTheDocument();
  });

  it("uses a manual count instead of calculating from text", async () => {
    const screen = await render(
      <EvoCharacterCount text="Hello world" count={5} max={120} />,
    );

    await expect.element(screen.getByText("5/120")).toBeInTheDocument();
  });

  it("renders custom content", async () => {
    const screen = await render(
      <EvoCharacterCount count={6} max={120}>
        6 of 120 (114 remaining)
      </EvoCharacterCount>,
    );

    await expect
      .element(screen.getByText("6 of 120 (114 remaining)"))
      .toBeInTheDocument();
  });

  it("passes HTML attributes to the root span", async () => {
    const screen = await render(
      <EvoCharacterCount
        text="Hello"
        max={10}
        className="custom-class"
        data-testid="character-count"
      />,
    );

    const characterCount = screen.getByTestId("character-count");
    await expect.element(characterCount).toHaveClass("custom-class");
  });

  it("updates aria-live on the associated input", async () => {
    function Example() {
      const [text, setText] = useState("a");
      const inputRef = useRef<HTMLInputElement>(null);

      return (
        <>
          <input
            ref={inputRef}
            aria-label="Example"
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
          />
          <EvoCharacterCount text={text} max={1} inputRef={inputRef} />
        </>
      );
    }

    const screen = await render(<Example />);
    const input = screen.getByRole("textbox", { name: "Example" });
    await expect.element(input).toHaveAttribute("aria-live", "off");

    await user.type(input, "b");

    await expect.element(input).toHaveAttribute("aria-live", "polite");
  });

  it("updates aria-live when the associated input ref changes", async () => {
    function Example() {
      const [useSecondInput, setUseSecondInput] = useState(false);
      const firstInputRef = useRef<HTMLInputElement>(null);
      const secondInputRef = useRef<HTMLInputElement>(null);

      return (
        <>
          <input ref={firstInputRef} aria-label="First input" />
          <input ref={secondInputRef} aria-label="Second input" />
          <EvoCharacterCount
            text="ab"
            max={1}
            inputRef={useSecondInput ? secondInputRef : firstInputRef}
          />
          <button onClick={() => setUseSecondInput(true)}>
            Use second input
          </button>
        </>
      );
    }

    const screen = await render(<Example />);
    const firstInput = screen.getByRole("textbox", { name: "First input" });
    const secondInput = screen.getByRole("textbox", { name: "Second input" });

    await expect.element(firstInput).toHaveAttribute("aria-live", "polite");
    await expect.element(secondInput).not.toHaveAttribute("aria-live");

    await user.click(screen.getByRole("button", { name: "Use second input" }));

    await expect.element(firstInput).not.toHaveAttribute("aria-live");
    await expect.element(secondInput).toHaveAttribute("aria-live", "polite");
  });

  it("restores the previous aria-live value when unmounted", async () => {
    function Example() {
      const [showCount, setShowCount] = useState(true);
      const inputRef = useRef<HTMLInputElement>(null);

      return (
        <>
          <input ref={inputRef} aria-label="Example" aria-live="assertive" />
          {showCount && (
            <EvoCharacterCount text="a" max={1} inputRef={inputRef} />
          )}
          <button onClick={() => setShowCount(false)}>Remove count</button>
        </>
      );
    }

    const screen = await render(<Example />);
    const input = screen.getByRole("textbox", { name: "Example" });
    await expect.element(input).toHaveAttribute("aria-live", "off");

    await user.click(screen.getByRole("button", { name: "Remove count" }));

    await expect.element(input).toHaveAttribute("aria-live", "assertive");
  });

  it("counts extended grapheme clusters as one character", () => {
    expect(countCharacters("👨‍👩‍👧‍👦")).toBe(1);
  });
});
