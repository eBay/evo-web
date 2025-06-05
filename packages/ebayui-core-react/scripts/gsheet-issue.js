const { Doc, Rows, COLOR_ATTENTION, devName } = require("./gsheet-helpers");

(async () => {
    const [_, __, title, url, assigned] = process.argv;
    const creds = process.env.GKEY;

    const doc = await Doc(creds);
    if (!doc) return;

    const rows = await Rows(doc);
    const componentsRow = await rows.findRow({ Topic: "Components" });
    const row = await componentsRow.appendRow();

    row.update({
        Topic: { value: title },
        Status: {
            value: "New!",
            textFormat: { foregroundColor: COLOR_ATTENTION },
        },
        Link1: { value: `=HYPERLINK("${url}", "GitHub Issue")` },
        Assigned: { value: devName[assigned] || assigned },
    });

    await row.saveUpdatedCells();
})();
