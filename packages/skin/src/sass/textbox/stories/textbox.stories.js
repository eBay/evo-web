export default { title: "Skin/Textbox/Base" };

export const singleLine = () => `
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const multiLine = () => `
<span class="textbox">
    <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
</span>
`;

export const large = () => `
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const overrideFontSize = () => `
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const overrideColor = () => `
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const inheritFontSize = () => `
<div style="font-size: 200%;">
    <span class="textbox">
         <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const inheritColor = () => `
<div style="color: green">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`;

export const error = () => `
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text"  aria-invalid="true" placeholder="placeholder text" />
</span>
`;

export const errorWithValue = () => `
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text" placeholder="placeholder text" aria-invalid="true" value="value" />
</span>
`;

export const readonly = () => `
<span class="textbox textbox--readonly">
    <input aria-label="Username" class="textbox__control" type="text" readonly placeholder="placeholder text" />
</span>
`;

export const readonlyWithValue = () => `
<span class="textbox textbox--readonly">
    <input aria-label="Username" class="textbox__control" type="text" readonly value="blueladybug463" />
</span>
`;

export const disabled = () => `
<span class="textbox textbox--disabled">
    <input class="textbox__control" type="text" disabled placeholder="placeholder text" />
</span>
`;

export const disabledWithValue = () => `
<span class="textbox textbox--disabled">
    <input class="textbox__control" type="text" disabled value="value" />
</span>
`;

export const fluid = () => `
<div class="textbox textbox--fluid">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</div>
`;

export const textSpacing = () => `
<span class="textbox demo-a11y-text-spacing">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`;

export const prefix = () => `
<span class="textbox">
    <span class="textbox__prefix">$</span>
    <input class="textbox__control" type="text" placeholder"0.00" />
</span>
`;

export const suffix = () => `
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="percentage" />
    <span>%</span>
</span>
`;

export const prefixAndSuffix = () => `
<span class="textbox">
    <span>$</span>
    <input class="textbox__control" type="text" placeholder="0.00" />
    <span>/lb</span>
</span>
`;
