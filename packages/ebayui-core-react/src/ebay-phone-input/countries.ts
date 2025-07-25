// Countries data copied from ebayui-core to avoid cross-package imports
export interface CountryInterface {
    countryCode: string;
    callingCode: string;
    mask: string;
}

export interface CountriesInterface {
    [index: string]: CountryInterface;
}

const countries: CountriesInterface = {
    US: {
        countryCode: "US",
        callingCode: "1",
        mask: "(000) 000-0000",
    },
    CA: {
        countryCode: "CA",
        callingCode: "1",
        mask: "(000) 000-0000",
    },
    GB: {
        countryCode: "GB",
        callingCode: "44",
        mask: "0000 000 0000",
    },
    AU: {
        countryCode: "AU",
        callingCode: "61",
        mask: "0 0000 0000",
    },
    DE: {
        countryCode: "DE",
        callingCode: "49",
        mask: "000 00000000",
    },
    FR: {
        countryCode: "FR",
        callingCode: "33",
        mask: "0 00 00 00 00",
    },
    IT: {
        countryCode: "IT",
        callingCode: "39",
        mask: "000 000 0000",
    },
    ES: {
        countryCode: "ES",
        callingCode: "34",
        mask: "000 00 00 00",
    },
    IN: {
        countryCode: "IN",
        callingCode: "91",
        mask: "00000 00000",
    },
    JP: {
        countryCode: "JP",
        callingCode: "81",
        mask: "000-0000-0000",
    },
    CN: {
        countryCode: "CN",
        callingCode: "86",
        mask: "000 0000 0000",
    },
    BR: {
        countryCode: "BR",
        callingCode: "55",
        mask: "(00) 00000-0000",
    },
    MX: {
        countryCode: "MX",
        callingCode: "52",
        mask: "000 000 0000",
    },
};

export default countries;
