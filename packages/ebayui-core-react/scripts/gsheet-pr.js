const { Doc, Rows, COLOR_ATTENTION, COLOR_DONE, COLOR_DISABLED, devName } = require("./gsheet-helpers");

const stateColors = {
    open: COLOR_ATTENTION,
    review: COLOR_DONE,
    merged: COLOR_DONE,
    closed: COLOR_DONE,
    draft: COLOR_DISABLED,
};

(async () => {
    const [_, __, title, url, state, merged, draft, review, assigned] = process.argv;
    const creds = process.env.GKEY;

    const prState = finalState(state, merged, draft, review);
    const stateColor = stateColors[prState];

    const doc = await Doc(creds);
    if (!doc) return;

    const rows = await Rows(doc);

    let row = await rows.findRow({ Topic: title, Link1: url, Link2: url });
    if (!row) {
        const componentsRow = await rows.findRow({ Topic: "Components" });
        if (!componentsRow) return;
        row = await componentsRow.appendRow();
    }

    row.update({
        Topic: { value: title },
        Status: {
            value: prState,
            textFormat: stateColor ? { foregroundColor: stateColor } : {},
        },
        Link1: { value: `=HYPERLINK("${url}", "GitHub PR")` },
        Assigned: {
            value: assigned
                .split(", ")
                .map((login) => devName[login] || login)
                .join(", "),
        },
    });

    await row.saveUpdatedCells();
})();

function finalState(state, merged, draft, review) {
    if (merged === "true") return "merged";
    if (state === "closed") return "closed";
    if (draft === "true") return "draft";
    if (review !== "") return "review";
    return state;
}
