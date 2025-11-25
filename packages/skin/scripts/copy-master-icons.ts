import fs from "fs";
import path from "path";
const currentDir = path.dirname(__dirname);
export async function copyMasterIcons() {
    const svgIcon = path.resolve(currentDir, "src", "svg", "icons.svg");
    const masterIconsDir = path.resolve(
        currentDir,
        "../",
        "../",
        "src",
        "tags",
        "master-icons.marko",
    );

    const file = await fs.promises.readFile(svgIcon, "utf8");
    const regex = /<\?xml[^>]*\?>\n/;

    const newOutput = file
        .replace(regex, "")
        .replace(' xmlns="http://www.w3.org/2000/svg"', "");

    await fs.promises.writeFile(masterIconsDir, newOutput);
}
