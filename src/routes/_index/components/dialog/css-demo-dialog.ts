// Makes this a module rather than a script, so its top-level `closeDialog`
// gets its own file scope instead of colliding with ./dialog.ts's same-named
// function (every script-scope .ts file sharing one global namespace).
export {};

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

// Each demo's trigger button and dialog come from the same Storybook story markup,
// so wire them up within their own .demo box (dialog IDs collide across variants).
for (const trigger of document.querySelectorAll<HTMLButtonElement>(
  ".dialog-trigger",
)) {
  const dialog = trigger
    .closest(".demo")
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
