import React, { useState } from "react";
import { EbayListboxButton, EbayListboxButtonOption } from "../index";

const StateFullTest = () => {
    const [selectedValue, setSelectedValue] = useState(`BB`);
    const onRadioChange = (value) => {
        setSelectedValue(value);
    };
    return (
        <div>
            <EbayListboxButton value={selectedValue}>
                <EbayListboxButtonOption value="California">California</EbayListboxButtonOption>
                <EbayListboxButtonOption value="New York">New York</EbayListboxButtonOption>
                <EbayListboxButtonOption value="Washington">Washington</EbayListboxButtonOption>
            </EbayListboxButton>
            <label>
                <input type="radio" onClick={() => onRadioChange(`California`)} name="listbox-value" />
                California
            </label>
            <label>
                <input type="radio" onClick={() => onRadioChange(`New York`)} name="listbox-value" />
                New York
            </label>
            <label>
                <input type="radio" onClick={() => onRadioChange(`Washington`)} name="listbox-value" />
                Washington
            </label>
        </div>
    );
};

export default StateFullTest;
