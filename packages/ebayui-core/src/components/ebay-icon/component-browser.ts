import type { WithNormalizedProps } from "../../global";

let rootSvg: SVGSVGElement;

interface IconInput extends Omit<Marko.Input<"svg">, `on${string}`> {
    _themes?: () => string;
    _type: string;
    _name: string;
    _size?: string;
    "a11y-variant"?: "label";
    "a11y-text"?: Marko.HTMLAttributes["aria-label"];
    "no-skin-classes"?: boolean;
}

export interface Input extends WithNormalizedProps<IconInput> {}

class Icon extends Marko.Component<Input> {
    onMount() {
        // Create a hidden svg to store all symbols on startup.
        if (!rootSvg) {
            rootSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg",
            );
            // Apply "hidden styles" to the svg. We don't use display none because then the svg will not be rendered.
            rootSvg.style.position = "absolute";
            rootSvg.style.width = "0";
            rootSvg.style.height = "0";

            document.body.insertBefore(rootSvg, document.body.firstChild);
            rootSvg.appendChild(
                document.createElementNS("http://www.w3.org/2000/svg", "defs"),
            );
        }

        // If there were any symbols rendered then we move them to the svg above after rendering them.
        const defs = this.getEl("defs");

        if (defs) {
            if (this.input && this.input._themes) {
                defs.innerHTML = this.input._themes();
            }

            const symbol = defs.querySelector("symbol");
            defs.parentNode?.removeChild(defs);
            if (symbol) {
                rootSvg.appendChild(symbol);
            }
        }
    }
}

export default Icon;
