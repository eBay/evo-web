import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { EvoProgressBar } from "../progress-bar";

describe("evo-progress-bar", () => {
  it("uses the provided label and max for indeterminate progress", async () => {
    const screen = await render(<EvoProgressBar a11yText="Task progress" />);
    const progress = screen.getByRole("progressbar", {
      name: "Task progress",
    });

    await expect
      .element(progress)
      .toHaveAttribute("aria-label", "Task progress");
    await expect.element(progress).not.toHaveAttribute("value");
    await expect.element(progress).toHaveAttribute("max", "100");
    await expect.element(progress).toHaveClass("progress-bar");
    await expect.element(progress).not.toHaveClass("progress-bar--fluid");
  });

  it("supports a zero progress value", async () => {
    const screen = await render(
      <EvoProgressBar a11yText="Task progress" value={0} />,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Task progress",
    });

    await expect.element(progress).toHaveAttribute("value", "0");
  });

  it("maps a11yText to the accessible name and aria-label", async () => {
    const screen = await render(
      <EvoProgressBar a11yText="Upload progress" value={50} />,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Upload progress",
    });

    await expect
      .element(progress)
      .toHaveAttribute("aria-label", "Upload progress");
  });

  it("supports an alternative accessible name when a11yText is null", async () => {
    const screen = await render(
      <>
        <span id="upload-progress-label">Upload progress</span>
        <EvoProgressBar
          a11yText={null}
          aria-labelledby="upload-progress-label"
          value={50}
        />
      </>,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Upload progress",
    });

    await expect.element(progress).not.toHaveAttribute("aria-label");
    await expect
      .element(progress)
      .toHaveAttribute("aria-labelledby", "upload-progress-label");
  });

  it("renders a determinate progress bar with custom value and max", async () => {
    const screen = await render(
      <EvoProgressBar a11yText="Task progress" value={50} max={200} />,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Task progress",
    });

    await expect.element(progress).toHaveAttribute("value", "50");
    await expect.element(progress).toHaveAttribute("max", "200");
  });

  it("applies the fluid modifier", async () => {
    const screen = await render(
      <EvoProgressBar a11yText="Task progress" value={50} fluid />,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Task progress",
    });

    await expect.element(progress).toHaveClass("progress-bar--fluid");
  });

  it("passes through native attributes, custom class, and ref", async () => {
    const ref = createRef<HTMLProgressElement>();
    const screen = await render(
      <EvoProgressBar
        a11yText="Upload progress"
        className="custom-class"
        id="upload-progress"
        ref={ref}
        title="Upload status"
      />,
    );
    const progress = screen.getByRole("progressbar", {
      name: "Upload progress",
    });

    await expect.element(progress).toHaveAttribute("id", "upload-progress");
    await expect.element(progress).toHaveAttribute("title", "Upload status");
    await expect.element(progress).toHaveClass("custom-class");
    expect(ref.current).toBe(progress.element());
  });
});
