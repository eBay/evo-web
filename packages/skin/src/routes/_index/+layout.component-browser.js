import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-json.js";
import "../main.js";

if (localStorage.getItem("theme") === "evo-live") {
    import("../../tokens/evo-live-dark.scss");
    import("../../tokens/evo-live-light.scss");
} else {
    import("../../tokens/evo-dark.scss");
    import("../../tokens/evo-light.scss");
}

export default {};
