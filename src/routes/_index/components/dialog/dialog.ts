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

// Find all dialog elements
for (const dialog of document.querySelectorAll(".dialog")) {
  dialog.setAttribute("closedby", "any");
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog(dialog as HTMLDialogElement);
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
