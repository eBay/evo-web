import { act, createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import type { LocatorSelectors } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoChipsCombobox, EvoChipsComboboxOption } from "../index";

function choices() {
  return (
    <>
      <EvoChipsComboboxOption text="Free shipping" />
      <EvoChipsComboboxOption text="Local pickup" />
      <EvoChipsComboboxOption text="Returns accepted" />
    </>
  );
}

function deleteButton(screen: LocatorSelectors, text: string) {
  return screen
    .getByRole("listitem")
    .filter({ hasText: text })
    .getByRole("button", { name: "Remove", exact: true });
}

function UncontrolledChipsCombobox({ initial }: { initial: string[] }) {
  return (
    <EvoChipsCombobox aria-label="Item features" defaultSelected={initial}>
      {choices()}
    </EvoChipsCombobox>
  );
}

function ControlledChipsCombobox({ initial }: { initial: string[] }) {
  const [selected, setSelected] = useState(initial);
  return (
    <EvoChipsCombobox
      aria-label="Item features"
      selected={selected}
      onSelectedChange={setSelected}
    >
      {choices()}
    </EvoChipsCombobox>
  );
}

function DeferredChipsCombobox({
  initial,
  onRequest,
}: {
  initial: string[];
  onRequest: (commit: () => void) => void;
}) {
  const [selected, setSelected] = useState(initial);
  const [, setSaving] = useState(false);
  return (
    <EvoChipsCombobox
      aria-label="Item features"
      selected={[...selected]}
      onSelectedChange={(next) => {
        setSaving(true);
        onRequest(() => {
          setSelected(next);
          setSaving(false);
        });
      }}
    >
      {choices()}
    </EvoChipsCombobox>
  );
}

describe("EvoChipsCombobox", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders suggestions in the composed combobox", async () => {
    const screen = await render(
      <EvoChipsCombobox aria-label="Item features" placeholder="Add a feature">
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await expect.element(input).toHaveAttribute("placeholder", "Add a feature");
    await user.click(input);
    await expect
      .element(screen.getByRole("option", { name: "Free shipping" }))
      .toBeInTheDocument();
  });

  it("adds and removes a suggested chip and hides its option", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.click(input);
    await user.click(screen.getByRole("option", { name: "Free shipping" }));
    expect(onSelectedChange).toHaveBeenCalledWith(["Free shipping"]);
    await expect
      .element(deleteButton(screen, "Free shipping"))
      .toBeInTheDocument();
    await user.click(input);
    await expect
      .element(screen.getByRole("option", { name: "Local pickup" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("option", { name: "Free shipping" }))
      .not.toBeInTheDocument();
    await user.click(deleteButton(screen, "Free shipping"));
    expect(onSelectedChange).toHaveBeenLastCalledWith([]);
  });

  it("adds typed custom text with Enter", async () => {
    const screen = await render(
      <EvoChipsCombobox aria-label="Item features">
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.fill(input, "Gift wrap");
    await user.keyboard("{Enter}");
    await expect.element(deleteButton(screen, "Gift wrap")).toBeInTheDocument();
    await expect.element(input).toHaveValue("");
  });

  it.each(["automatic", "manual"] as const)(
    "adds only the highlighted suggestion with the keyboard in %s mode",
    async (listSelection) => {
      const onSelectedChange = vi.fn();
      const screen = await render(
        <EvoChipsCombobox
          aria-label="Item features"
          listSelection={listSelection}
          onSelectedChange={onSelectedChange}
        >
          {choices()}
        </EvoChipsCombobox>,
      );
      const input = screen.getByRole("combobox", { name: "Item features" });
      await user.fill(input, "ship");
      await user.keyboard("{ArrowDown}{Enter}");
      expect(onSelectedChange).toHaveBeenCalledTimes(1);
      expect(onSelectedChange).toHaveBeenCalledWith(["Free shipping"]);
      expect(
        screen.container.querySelectorAll(".chips-combobox__items li"),
      ).toHaveLength(1);
      await expect.element(input).toHaveValue("");
    },
  );

  it.each(["", "   "])(
    "prevents form submission on Enter with input %j",
    async (text) => {
      const onSubmit = vi.fn((event) => event.preventDefault());
      const onSelectedChange = vi.fn();
      const screen = await render(
        <form onSubmit={onSubmit}>
          <EvoChipsCombobox
            aria-label="Item features"
            onSelectedChange={onSelectedChange}
          >
            {choices()}
          </EvoChipsCombobox>
        </form>,
      );
      const input = screen.getByRole("combobox", { name: "Item features" });
      await user.click(input);
      if (text) await user.fill(input, text);
      await user.keyboard("{Enter}");
      expect(onSubmit).not.toHaveBeenCalled();
      expect(onSelectedChange).not.toHaveBeenCalled();
    },
  );

  it("keeps a duplicate typed value in the input", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        defaultSelected={["Gift wrap"]}
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.fill(input, "Gift wrap");
    await user.keyboard("{Enter}");
    expect(onSelectedChange).not.toHaveBeenCalled();
    await expect.element(input).toHaveValue("Gift wrap");
  });

  it("stores padded typed text verbatim and compares duplicates by raw value", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        defaultSelected={["Gift wrap"]}
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.fill(input, " Gift wrap ");
    await user.keyboard("{Enter}");
    expect(onSelectedChange).toHaveBeenCalledWith(["Gift wrap", " Gift wrap "]);
    await expect.element(input).toHaveValue("");
  });

  it("stores suggestion text verbatim and hides the chosen suggestion", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        onSelectedChange={onSelectedChange}
      >
        <EvoChipsComboboxOption text=" Gift wrap " />
        <EvoChipsComboboxOption text="Local pickup" />
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.click(input);
    await user.click(screen.getByRole("option", { name: "Gift wrap" }));
    expect(onSelectedChange).toHaveBeenCalledWith([" Gift wrap "]);
    await user.click(input);
    await expect
      .element(screen.getByRole("option", { name: "Local pickup" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("option", { name: "Gift wrap" }))
      .not.toBeInTheDocument();
  });

  it("keeps controlled selection unchanged until the application updates it", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        selected={["Free shipping"]}
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    await user.click(screen.getByRole("combobox", { name: "Item features" }));
    await user.click(screen.getByRole("option", { name: "Local pickup" }));
    expect(onSelectedChange).toHaveBeenCalledWith([
      "Free shipping",
      "Local pickup",
    ]);
    await expect
      .element(deleteButton(screen, "Free shipping"))
      .toBeInTheDocument();
    expect(
      screen.container.querySelectorAll(".chips-combobox__items li"),
    ).toHaveLength(1);
  });

  it("applies invalid and disabled states and forwards the input ref", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <EvoChipsCombobox
        ref={ref}
        aria-label="Item features"
        aria-invalid
        disabled
        defaultSelected={["Free shipping"]}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    expect(ref.current).toBe(input.element());
    await expect.element(input).toBeDisabled();
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
    expect(input.element().closest(".chips-combobox--error")).not.toBeNull();
    await expect.element(deleteButton(screen, "Free shipping")).toBeDisabled();
  });

  it("names the selected chip list", async () => {
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        defaultSelected={["Free shipping"]}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    await expect
      .element(screen.getByRole("list"))
      .toHaveAccessibleName("Selected items");
    await screen.rerender(
      <EvoChipsCombobox
        aria-label="Item features"
        a11ySelectedItemsText="Selected features"
        defaultSelected={["Free shipping"]}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    await expect
      .element(screen.getByRole("list"))
      .toHaveAccessibleName("Selected features");
  });

  it("labels each delete button with the action and describes it with the chip text", async () => {
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        a11yDeleteButtonText="Delete"
        defaultSelected={["Free shipping"]}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const button = screen.getByRole("button");
    await expect.element(button).toHaveAccessibleName("Delete");
    await expect.element(button).toHaveAccessibleDescription("Free shipping");
  });

  it.each([
    ["uncontrolled", UncontrolledChipsCombobox],
    ["controlled", ControlledChipsCombobox],
  ])(
    "moves focus to the nearest remaining chip, then the input, after keyboard deletion in %s mode",
    async (_, ChipsCombobox) => {
      const screen = await render(
        <ChipsCombobox
          initial={["Free shipping", "Local pickup", "Returns accepted"]}
        />,
      );
      const input = screen.getByRole("combobox", { name: "Item features" });
      await user.tab();
      await user.tab();
      await expect.element(deleteButton(screen, "Local pickup")).toHaveFocus();
      await user.keyboard("{Enter}");
      await expect
        .element(deleteButton(screen, "Returns accepted"))
        .toHaveFocus();
      await user.keyboard("{Enter}");
      await expect.element(deleteButton(screen, "Free shipping")).toHaveFocus();
      expect(
        screen
          .getByRole("listitem")
          .elements()
          .map((item) => item.textContent),
      ).toEqual(["Free shipping"]);
      await user.keyboard("{Enter}");
      await expect.element(input).toHaveFocus();
      await expect.element(input).toHaveAttribute("aria-expanded", "true");
      await expect.element(screen.getByRole("list")).not.toBeInTheDocument();
    },
  );

  it("moves focus only after a deferred controlled removal commits", async () => {
    let commit = () => {};
    const screen = await render(
      <DeferredChipsCombobox
        initial={["Free shipping", "Local pickup", "Returns accepted"]}
        onRequest={(request) => {
          commit = request;
        }}
      />,
    );
    await user.tab();
    await user.tab();
    await user.keyboard("{Enter}");
    await expect.element(deleteButton(screen, "Local pickup")).toHaveFocus();
    await act(async () => commit());
    await expect
      .element(deleteButton(screen, "Returns accepted"))
      .toHaveFocus();
    expect(
      screen
        .getByRole("listitem")
        .elements()
        .map((item) => item.textContent),
    ).toEqual(["Free shipping", "Returns accepted"]);
    await user.keyboard("{Enter}");
    await expect
      .element(deleteButton(screen, "Returns accepted"))
      .toHaveFocus();
    await act(async () => commit());
    await expect.element(deleteButton(screen, "Free shipping")).toHaveFocus();
  });

  it("does not steal focus when a deferred removal commits after focus moves elsewhere", async () => {
    let commit = () => {};
    const screen = await render(
      <>
        <DeferredChipsCombobox
          initial={["Free shipping", "Local pickup"]}
          onRequest={(request) => {
            commit = request;
          }}
        />
        <button type="button">Other control</button>
      </>,
    );
    await user.tab();
    await expect.element(deleteButton(screen, "Free shipping")).toHaveFocus();
    await user.keyboard("{Enter}");
    await expect.element(deleteButton(screen, "Free shipping")).toHaveFocus();
    await user.click(screen.getByRole("button", { name: "Other control" }));
    await act(async () => commit());
    await expect
      .element(screen.getByRole("button", { name: "Other control" }))
      .toHaveFocus();
    await expect
      .element(deleteButton(screen, "Free shipping"))
      .not.toBeInTheDocument();
    await expect
      .element(deleteButton(screen, "Local pickup"))
      .toBeInTheDocument();
  });

  it("ignores required and inputSize passed through untyped props", async () => {
    const untypedProps: object = { required: true, inputSize: "large" };
    const screen = await render(
      <form>
        <EvoChipsCombobox
          aria-label="Item features"
          defaultSelected={["Free shipping"]}
          {...untypedProps}
        >
          {choices()}
        </EvoChipsCombobox>
      </form>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await expect.element(input).not.toBeRequired();
    expect(screen.container.querySelector("form")?.checkValidity()).toBe(true);
    expect(input.element().closest(".combobox")?.className).toBe(
      "combobox chips-combobox__combobox",
    );
  });
});
