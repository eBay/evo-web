const { GoogleSpreadsheet } = require("google-spreadsheet");

const SHEET_ID = "1yrqQ1gB80OobCr_Bd_FTaMNbaZ9lwfyy9QnNexvroAY";

async function Doc(creds) {
    try {
        const doc = new GoogleSpreadsheet(SHEET_ID);

        await doc.useServiceAccountAuth(JSON.parse(creds));
        await doc.loadInfo();

        return doc;
    } catch (e) {
        console.error(e);
    }
}

async function Rows(doc) {
    console.log("Open", doc.title);

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells();
    await sheet.loadHeaderRow();

    const rows = await sheet.getRows();

    rows.findRow = (cell = {}) => {
        const row = rows.find((row) =>
            sheet.headerValues.find((title) =>
                Object.entries(cell).some(([ct, cv]) => title === ct && row[title] === cv),
            ),
        );
        return row ? Row(sheet, row) : Promise.resolve();
    };

    return rows;
}

async function Row(sheet, row) {
    const index = row.rowNumber - 1;

    row.index = index;

    row.appendRow = async () => {
        await sheet.insertDimension(
            "ROWS",
            {
                startIndex: index + 1,
                endIndex: index + 2,
            },
            false,
        );

        const rows = await sheet.getRows();
        return Row(sheet, rows[index]);
    };

    row.getCell = (header) => sheet.getCell(index, headerIndex(header));

    row.updateCell = (name, props = {}) => {
        const cell = row.getCell(name);
        Object.entries(props).forEach(([k, v]) => {
            cell[k] = v;
        });
        return cell;
    };

    row.update = (props) => Object.entries(props).forEach(([title, cellProps]) => row.updateCell(title, cellProps));

    const headerIndex = (header) => {
        const index = sheet.headerValues.indexOf(header);
        return index === -1 ? undefined : index;
    };

    row.saveUpdatedCells = () => sheet.saveUpdatedCells();

    return row;
}

//'#e06666'
const COLOR_ATTENTION = {
    red: 224 / 255,
    green: 102 / 255,
    blue: 102 / 255,
    alpha: 1,
};
//'#6aa84f';
const COLOR_DONE = {
    red: 106 / 255,
    green: 168 / 255,
    blue: 102 / 255,
    alpha: 1,
};
//'#999';
const COLOR_DISABLED = {
    red: 153 / 255,
    green: 153 / 255,
    blue: 153 / 255,
    alpha: 1,
};

const devName = {
    darkwebdev: "Tim",
    montoya332: "Arturo",
    abiyasa: "Abi",
    HenriqueLimas: "Henrique",
    "aaron-nance": "Aaron",
    kristopherrollert: "Kristopher",
    vshrivastav13: "Varun",
    raveenakothapally: "Raveena",
};

module.exports = {
    Doc,
    Rows,
    Row,
    COLOR_DONE,
    COLOR_ATTENTION,
    COLOR_DISABLED,
    devName,
};
