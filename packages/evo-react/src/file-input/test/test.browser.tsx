import { act, createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoFileInput } from "../file-input";
import { EvoFileInputHeader } from "../file-input-header";
import { EvoFileInputDescription } from "../file-input-description";
import { EvoFileInputCTA } from "../file-input-cta";

describe("evo-file-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  // --- compound DOM structure and label association ---

  it("associates EvoFileInputCTA label with the native input via context-managed id", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputCTA>Browse files</EvoFileInputCTA>
      </EvoFileInput>,
    );
    // getByLabelText resolves the label text and returns the associated input
    const input = screen.getByLabelText("Browse files");
    await expect.element(input).toHaveAttribute("type", "file");
  });

  it("uses an explicit id when provided and reflects it on both input and label", async () => {
    const screen = await render(
      <EvoFileInput id="my-upload">
        <EvoFileInputCTA>Browse files</EvoFileInputCTA>
      </EvoFileInput>,
    );
    const input = screen.container.querySelector(
      "input[type='file']",
    ) as HTMLInputElement;
    const label = screen.container.querySelector("label") as HTMLLabelElement;
    expect(input.id).toBe("my-upload");
    expect(label.htmlFor).toBe("my-upload");
  });

  it("generates a stable id that connects input and label when none is provided", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputCTA>Browse</EvoFileInputCTA>
      </EvoFileInput>,
    );
    const input = screen.container.querySelector(
      "input[type='file']",
    ) as HTMLInputElement;
    const label = screen.container.querySelector("label") as HTMLLabelElement;
    expect(input.id).toBeTruthy();
    expect(label.htmlFor).toBe(input.id);
  });

  it("throws when EvoFileInputCTA is used outside EvoFileInput", async () => {
    await expect(
      render(<EvoFileInputCTA>Browse</EvoFileInputCTA>),
    ).rejects.toThrow(
      "EvoFileInputCTA must be used within an EvoFileInput component",
    );
  });

  // --- native event and ref ---

  it("fires native onChange and exposes currentTarget.files", async () => {
    let capturedFiles: FileList | null = null;
    const onChange = vi.fn((e: React.ChangeEvent<HTMLInputElement>) => {
      // currentTarget is only valid synchronously during dispatch
      capturedFiles = e.currentTarget.files;
    });
    const screen = await render(
      <EvoFileInput onChange={onChange}>
        <EvoFileInputCTA>Browse files</EvoFileInputCTA>
      </EvoFileInput>,
    );
    const file = new File(["hello"], "test.txt", { type: "text/plain" });
    await screen.getByLabelText("Browse files").upload(file);
    expect(onChange).toHaveBeenCalledTimes(1);
    // currentTarget is valid only during event dispatch; capture it inside the mock
    expect(capturedFiles!.item(0)?.name).toBe("test.txt");
  });

  it("forwards ref to the native file input", async () => {
    const ref = createRef<HTMLInputElement>();
    await render(<EvoFileInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("file");
  });

  it("passes native attributes to the underlying input", async () => {
    const screen = await render(
      <EvoFileInput multiple accept="image/*" disabled />,
    );
    const input = screen.container.querySelector(
      "input[type='file']",
    ) as HTMLInputElement;
    expect(input.multiple).toBe(true);
    expect(input.accept).toBe("image/*");
    expect(input.disabled).toBe(true);
  });

  // --- drag state: proves plain setState works without flushSync ---

  it("adds dragged-over class on dragenter", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputCTA>Browse files</EvoFileInputCTA>
      </EvoFileInput>,
    );
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;
    const container = screen.container.querySelector(
      ".file-input__container",
    ) as HTMLDivElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("dragenter", { bubbles: true }));
    });

    expect(
      container.classList.contains("file-input___container--dragged-over"),
    ).toBe(true);
  });

  it("adds dragged-over class on dragover", async () => {
    const screen = await render(<EvoFileInput />);
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;
    const container = screen.container.querySelector(
      ".file-input__container",
    ) as HTMLDivElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("dragover", { bubbles: true }));
    });

    expect(
      container.classList.contains("file-input___container--dragged-over"),
    ).toBe(true);
  });

  it("removes dragged-over class on dragleave", async () => {
    const screen = await render(<EvoFileInput />);
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;
    const container = screen.container.querySelector(
      ".file-input__container",
    ) as HTMLDivElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("dragenter", { bubbles: true }));
    });
    await act(async () => {
      input.dispatchEvent(new DragEvent("dragleave", { bubbles: true }));
    });

    expect(
      container.classList.contains("file-input___container--dragged-over"),
    ).toBe(false);
  });

  it("removes dragged-over class on drop", async () => {
    const screen = await render(<EvoFileInput />);
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;
    const container = screen.container.querySelector(
      ".file-input__container",
    ) as HTMLDivElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("dragenter", { bubbles: true }));
    });
    await act(async () => {
      input.dispatchEvent(new DragEvent("drop", { bubbles: true }));
    });

    expect(
      container.classList.contains("file-input___container--dragged-over"),
    ).toBe(false);
  });

  it("calls consumer onDragEnter handler", async () => {
    const onDragEnter = vi.fn();
    const screen = await render(<EvoFileInput onDragEnter={onDragEnter} />);
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("dragenter", { bubbles: true }));
    });

    expect(onDragEnter).toHaveBeenCalledTimes(1);
  });

  it("calls consumer onDrop handler", async () => {
    const onDrop = vi.fn();
    const screen = await render(<EvoFileInput onDrop={onDrop} />);
    const input = screen.container.querySelector(
      ".file-input__input",
    ) as HTMLInputElement;

    await act(async () => {
      input.dispatchEvent(new DragEvent("drop", { bubbles: true }));
    });

    expect(onDrop).toHaveBeenCalledTimes(1);
  });

  // --- sub-component rendering ---

  it("renders EvoFileInputHeader with content-header BEM class", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputHeader>Title</EvoFileInputHeader>
      </EvoFileInput>,
    );
    const header = screen.container.querySelector(
      ".file-input__content-header",
    );
    expect(header).toBeTruthy();
    expect(header?.textContent).toBe("Title");
  });

  it("renders EvoFileInputHeader as specified element via as prop", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputHeader as="h2">Title</EvoFileInputHeader>
      </EvoFileInput>,
    );
    const h2 = screen.container.querySelector("h2.file-input__content-header");
    expect(h2).toBeTruthy();
  });

  it("renders EvoFileInputDescription with content-subheader BEM class", async () => {
    const screen = await render(
      <EvoFileInput>
        <EvoFileInputDescription>Subtitle</EvoFileInputDescription>
      </EvoFileInput>,
    );
    const desc = screen.container.querySelector(
      ".file-input__content-subheader",
    );
    expect(desc).toBeTruthy();
    expect(desc?.textContent).toBe("Subtitle");
  });
});
