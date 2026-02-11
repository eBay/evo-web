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

for (const dialog of document.querySelectorAll(".dialog")) {
  // Close when clicking on mask
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog(dialog as HTMLDialogElement);
    }
  });

  dialog.addEventListener("keydown", (event) => {
    if ((event as KeyboardEvent).key === "Escape") {
      event.preventDefault();
      closeDialog(dialog as HTMLDialogElement);
    }
  });

  // Close button
  dialog.querySelector(".dialog__close")?.addEventListener("click", (e) => {
    closeDialog(dialog as HTMLDialogElement);
  });

  // Open button
  if (dialog.previousElementSibling?.tagName === "BUTTON") {
    dialog.previousElementSibling.addEventListener("click", (e) => {
      (dialog as HTMLDialogElement).showModal();
    });
  }
}
