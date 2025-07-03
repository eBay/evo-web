function toggleAttribute(chip, attribute) {
    if (chip.hasAttribute(attribute)) {
        chip.getAttribute(attribute) === "true"
            ? chip.setAttribute(attribute, "false")
            : chip.setAttribute(attribute, "true");
    }
}

export default class {
    onMount() {
        this.el.querySelectorAll("button.chip").forEach((chip) => {
            chip.addEventListener("click", () => {
                toggleAttribute(chip, "aria-expanded");
                if (!chip.hasAttribute("aria-expanded")) {
                    toggleAttribute(chip, "aria-pressed");
                }
            });
        });
    }
}
