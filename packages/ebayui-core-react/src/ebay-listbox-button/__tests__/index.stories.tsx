import React, { ChangeEvent } from "react";
import { action } from "storybook/actions";

import { EbayListboxButton, EbayListboxButtonOption } from "../index";
import StateFullTest from "./statefull-test";
import { ChangeEventProps } from "../listbox-button";

export default {
    title: "buttons/ebay-listbox-button",
};

export const Default = () => (
    <>
        <EbayListboxButton
            value="BB"
            onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}
            onCollapse={() => action("onCollapse")()}
            onExpand={() => action("onExpand")()}
        >
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const PreselectedIndex = () => (
    <>
        <EbayListboxButton selected={1}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const DefaultNoSelectedOption = () => (
    <>
        <EbayListboxButton onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const DefaultWithA11YPrefix = {
    render: () => {
        const listboxBtnLabel = "listbox-button__label";

        return (
            <>
                <label htmlFor="btn-id" id={listboxBtnLabel}>
                    Select these items:
                </label>
                <br />
                <br />
                <EbayListboxButton
                    id="btn-id"
                    value="BB"
                    prefixId={listboxBtnLabel}
                    onChange={(e, props) => action("onChange")(e, props)}
                >
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            </>
        );
    },
    name: "Default with A11y Prefix",
};

export const DisabledState = () => (
    <>
        <EbayListboxButton value="BB" disabled>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const InvalidState = () => (
    <>
        <EbayListboxButton value="BB" aria-invalid="true">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const Borderless = () => (
    <>
        <EbayListboxButton value="BB" borderless>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const Fluid = () => (
    <div style={{ width: "500px" }}>
        <EbayListboxButton value="BB" fluid>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </div>
);

export const StatefullComponent = () => (
    <>
        <StateFullTest />
    </>
);

export const TooManyOptions = () => (
    <>
        <EbayListboxButton value="BB" maxHeight="200px">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
            <EbayListboxButtonOption value="DD">Option 4</EbayListboxButtonOption>
            <EbayListboxButtonOption value="EE">Option 5</EbayListboxButtonOption>
            <EbayListboxButtonOption value="FF">Option 6</EbayListboxButtonOption>
            <EbayListboxButtonOption value="GG">Option 7</EbayListboxButtonOption>
            <EbayListboxButtonOption value="HH">Option 8</EbayListboxButtonOption>
            <EbayListboxButtonOption value="II">Option 9</EbayListboxButtonOption>
            <EbayListboxButtonOption value="JJ">Option 10</EbayListboxButtonOption>
            <EbayListboxButtonOption value="KK">Option 11</EbayListboxButtonOption>
            <EbayListboxButtonOption value="LL">Option 12</EbayListboxButtonOption>
            <EbayListboxButtonOption value="MM">Option 13</EbayListboxButtonOption>
            <EbayListboxButtonOption value="NN">Option 14</EbayListboxButtonOption>
            <EbayListboxButtonOption value="OO">Option 15</EbayListboxButtonOption>
            <EbayListboxButtonOption value="PP">Option 16</EbayListboxButtonOption>
            <EbayListboxButtonOption value="QQ">Option 17</EbayListboxButtonOption>
            <EbayListboxButtonOption value="RR">Option 18</EbayListboxButtonOption>
            <EbayListboxButtonOption value="SS">Option 19</EbayListboxButtonOption>
            <EbayListboxButtonOption value="TT">Option 20</EbayListboxButtonOption>
            <EbayListboxButtonOption value="UU">Option 21</EbayListboxButtonOption>
            <EbayListboxButtonOption value="VV">Option 22</EbayListboxButtonOption>
            <EbayListboxButtonOption value="YY">Option 23</EbayListboxButtonOption>
            <EbayListboxButtonOption value="XX">Option 24</EbayListboxButtonOption>
            <EbayListboxButtonOption value="YY">Option 25</EbayListboxButtonOption>
            <EbayListboxButtonOption value="ZZ">Option 26</EbayListboxButtonOption>
            <EbayListboxButtonOption value="11">Option 27</EbayListboxButtonOption>
            <EbayListboxButtonOption value="22">Option 28</EbayListboxButtonOption>
            <EbayListboxButtonOption value="33">Option 29</EbayListboxButtonOption>
            <EbayListboxButtonOption value="44">Option 30</EbayListboxButtonOption>
            <EbayListboxButtonOption value="55">Option 31</EbayListboxButtonOption>
            <EbayListboxButtonOption value="66">Option 32</EbayListboxButtonOption>
            <EbayListboxButtonOption value="77">Option 33</EbayListboxButtonOption>
            <EbayListboxButtonOption value="88">Option 34</EbayListboxButtonOption>
            <EbayListboxButtonOption value="99">Option 35</EbayListboxButtonOption>
            <EbayListboxButtonOption value="100">Option 36</EbayListboxButtonOption>
            <EbayListboxButtonOption value="101">Option 37</EbayListboxButtonOption>
            <EbayListboxButtonOption value="102">Option 38</EbayListboxButtonOption>
            <EbayListboxButtonOption value="102">Option 39</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const PrefixLabel = () => (
    <>
        <EbayListboxButton prefixLabel="Selected:" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);

export const FloatingLabel = () => (
    <>
        <EbayListboxButton floatingLabel="Select" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>
);
