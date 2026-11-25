export default class {
  onMount() {
    this.el.querySelectorAll(".number-input").forEach(function (widgetEl) {
      const input = widgetEl.querySelector("input");
      const decrement = widgetEl.querySelector(
        "button.number-input__decrement",
      );
      const increment = widgetEl.querySelector(
        "button.number-input__increment",
      );
      const trash = widgetEl.querySelector("button.number-input__delete");

      function updateValue(inc = 0) {
        const value = parseInt(input.value, 10) || 0;
        let newValue = value;
        if ((value > 0 && inc < 0) || inc > 0) {
          newValue = value + inc;
        }
        input.value = newValue;
        input.setAttribute("aria-valuenow", newValue);
        if (newValue === 0) {
          decrement.setAttribute("disabled", "true");
        } else {
          decrement.removeAttribute("disabled");
        }
        if (trash && newValue === 1) {
          widgetEl.classList.add("number-input--show-delete");
        } else {
          widgetEl.classList.remove("number-input--show-delete");
        }
      }

      input.addEventListener("input", function (e) {
        updateValue();
      });

      input.addEventListener("keydown", function (e) {
        const inc = { ArrowUp: 1, ArrowDown: -1 }[e.key];
        if (inc) {
          e.preventDefault();
          updateValue(inc);
        }
      });

      function updateAnimationClass(widgetEl, className) {
        widgetEl.classList.remove("number-input--decrement");
        widgetEl.classList.remove("number-input--increment");
        widgetEl.classList.remove("number-input--decrement-disabled");
        widgetEl.classList.remove("number-input--increment-disabled");
        void widgetEl.offsetWidth; // Trigger a reflow
        widgetEl.classList.add(className);
      }

      decrement.addEventListener("click", function () {
        updateValue(-1);
        const animationClass = decrement.hasAttribute("disabled")
          ? "number-input--decrement-disabled"
          : "number-input--decrement";
        updateAnimationClass(widgetEl, animationClass);
      });
      increment.addEventListener("click", function () {
        updateValue(1);
        const animationClass = increment.hasAttribute("disabled")
          ? "number-input--increment-disabled"
          : "number-input--increment";
        updateAnimationClass(widgetEl, animationClass);
      });
      if (trash) {
        trash.addEventListener("click", function () {
          // nothing to do here yet
        });
      }
    });
  }
}
