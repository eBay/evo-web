import { resolve } from "path";
import { parseSVG, getIconKeys, generateEbaySVG } from "../update-icons-helpers.js";

const skinCollection = require("./icons.json");

jest.mock("del", () => ({}));

describe("update-icons", () => {
    describe("parseSVG()", () => {
        it("should parse SVG into SVG symbols", () => {
            expect(parseSVG(resolve(__dirname, "./icons.svg"))).toEqual(skinCollection);
        });
        it("should throw if SVG file not found", async () => {
            expect.hasAssertions();
            try {
                await parseSVG("not-exist.svg");
            } catch (e) {
                expect(e.code).toEqual("ENOENT");
            }
        });
    });
    describe("getIconKeys()", () => {
        it("should extract icon name from SVG symbols", () => {
            const expected = {
                iconKeys: ["add20", "programBadgeAuthenticityGuaranteed48", "socialMessenger24", "socialWhatsapp24"],
            };
            expect(getIconKeys(skinCollection)).toEqual(expected);
        });
        it("should return empty array on empty SVG symbols", () => {
            const expected = {
                iconKeys: [],
            };
            expect(getIconKeys()).toEqual(expected);
            expect(getIconKeys([])).toEqual(expected);
        });
    });
    describe("generateEbaySVG()", () => {
        it("should generate EbaySvg component from SVG symbols", () => {
            expect(generateEbaySVG(skinCollection)).toMatchSnapshot();
        });
    });
});
