function toggleAttribute(chip, attribute) {
    if (chip.hasAttribute(attribute)) {
        chip.toggleAttribute(attribute);
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
