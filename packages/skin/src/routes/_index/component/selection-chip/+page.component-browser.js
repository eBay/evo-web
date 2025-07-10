function toggleAttribute(chip, attribute) {
    if (chip.hasAttribute(attribute)) {
        chip.getAttribute(attribute) === "true"
            ? chip.setAttribute(attribute, "false")
            : chip.setAttribute(attribute, "true");
    }
}

export default class {
    onMount() {
        this.el.querySelectorAll("button.selection-chip").forEach((chip) => {
            setTimeout(() => {
                chip.classList.add("selection-chip--animated");
            }, 0);
            chip.addEventListener("click", () => {
                toggleAttribute(chip, "aria-pressed");
            });
        });
    }
}
