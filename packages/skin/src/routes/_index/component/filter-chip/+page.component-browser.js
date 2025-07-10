function toggleAttribute(chip, attribute) {
    if (chip.hasAttribute(attribute)) {
        chip.getAttribute(attribute) === "true"
            ? chip.setAttribute(attribute, "false")
            : chip.setAttribute(attribute, "true");
    }
}

export default class {
    onMount() {
        this.el.querySelectorAll("button.filter-chip").forEach((chip) => {
            setTimeout(() => {
                chip.classList.remove("filter-chip--loading");
            });
            chip.addEventListener("click", () => {
                toggleAttribute(chip, "aria-expanded");
                if (!chip.hasAttribute("aria-expanded")) {
                    toggleAttribute(chip, "aria-pressed");
                }
            });
        });
        this.el.querySelectorAll("a.filter-chip").forEach((chip) => {
            setTimeout(() => {
                chip.classList.remove("filter-chip--loading");
            });
        });
    }
}
