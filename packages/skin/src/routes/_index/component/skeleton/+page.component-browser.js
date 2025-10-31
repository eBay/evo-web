export default class {
    /**
     * Swaps a skeleton element with actual content using view transitions
     * @param {HTMLElement} skeletonContainer - The skeleton container element
     * @param {number} index - The index of the skeleton element to replace
     * @returns {Promise} A promise that resolves when the transition is complete
     */
    swapElements(skeletonContainer, index) {
        const skeletonElement = skeletonContainer.querySelector(
            `#skeleton-transition-${index}`,
        );
        if (!skeletonElement) {
            return;
        }

        // Get the position and dimensions of the skeleton element
        const rect = skeletonElement.getBoundingClientRect();

        // Create and prepare new content before starting the transition
        const content = document.createElement("span");
        content.id = `content-${index}`;
        content.style.backgroundColor = "yellow";
        content.style.display = "inline-block";
        content.style.width = `${rect.width}px`;
        content.style.height = `${rect.height}px`;
        content.style.marginInlineEnd = "var(--spacing-100)";
        content.style.borderRadius =
            "var(--image-border-radius, var(--border-radius-100))";
        content.style.position = "relative"; // Ensure proper positioning
        content.textContent = `Here is the loaded content ${index}!`;

        // Start the view transition
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                // Apply the same view transition name to maintain continuity
                content.style.viewTransitionName = `skeleton-transition-${index}`;

                skeletonContainer.replaceChild(content, skeletonElement);
            });
        } else {
            skeletonContainer.replaceChild(content, skeletonElement);
        }
    }

    onMount() {
        document.querySelectorAll(".skeleton-trigger").forEach((el) => {
            const skeleton = el.nextElementSibling;

            el.addEventListener("click", () => {
                for (let i = 0; i < 3; i++) {
                    this.swapElements(skeleton, i);
                }
            });
        });
    }
}
