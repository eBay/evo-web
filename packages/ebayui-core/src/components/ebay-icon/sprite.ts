let sprite: SVGSVGElement | undefined;

function getSprite() {
    if (!sprite) {
        sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // Zero size instead of display:none, which stops gradients and clip paths from painting.
        sprite.style.cssText = "position:absolute;width:0;height:0";
        document.body.prepend(sprite);
    }
    return sprite;
}

function moveServerSymbolsToSprite() {
    for (const defs of Array.from(
        document.querySelectorAll("defs[data-ebay-icon]"),
    )) {
        getSprite().append(...Array.from(defs.children));
        defs.remove();
    }
}

export function addToSprite(id: string, symbol: string) {
    moveServerSymbolsToSprite();
    if (!getSprite().getElementById(id)) {
        getSprite().insertAdjacentHTML("beforeend", symbol);
    }
}

if (document.body) {
    moveServerSymbolsToSprite();
}
if (document.readyState === "loading") {
    // Again once parsing ends, for icons streamed in after this module ran.
    document.addEventListener("DOMContentLoaded", moveServerSymbolsToSprite, {
        once: true,
    });
}
