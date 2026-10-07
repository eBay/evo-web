function closeDialog(dialog: HTMLDialogElement) {
  dialog.classList.add("dialog--close");
  dialog.addEventListener(
    "animationend",
    () => {
      dialog.close();
      dialog.classList.remove("dialog--close");
    },
    {
      once: true,
    },
  );
}

// Every Dialog story hardcodes id="dialog-title" on its own heading (each story
// is normally viewed alone in Storybook), so IDs collide once several variants
// are rendered on one docs page — a trigger can't rely on a global id lookup, and
// `nextElementSibling` isn't reliable either, since <component-demo> renders
// several sibling top-level elements (a storybook-link wrapper, the .demo box,
// then <highlight-code>). Instead, each trigger + its <component-demo> are wrapped
// together in one `.demo__dialog-wrapper` container (see css+page.marko), and we
// search for the dialog within that container specifically.
for (const trigger of document.querySelectorAll<HTMLButtonElement>(
  ".demo__dialog-trigger",
)) {
  const dialog = trigger
    .closest(".demo__dialog-wrapper")
    ?.querySelector("dialog.dialog") as HTMLDialogElement | null;

  if (!dialog) {
    continue;
  }

  trigger.addEventListener("click", () => {
    dialog.showModal();
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeDialog(dialog);
    }
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog(dialog);
  });

  dialog
    .querySelector(".dialog__close")
    ?.addEventListener("click", () => closeDialog(dialog));
}
