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

            function updateValue(inc) {
                const value = parseInt(input.value, 10);
                let newValue = value;
                if ((value > 0 && inc < 0) || inc > 0) {
                    newValue = value + inc;
                }
                input.value = newValue;
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

            decrement.addEventListener("click", function () {
                updateValue(-1);
            });
            increment.addEventListener("click", function () {
                updateValue(1);
            });
            if (trash) {
                trash.addEventListener("click", function () {
                    console.log("trash");
                });
            }
        });
    }
}
