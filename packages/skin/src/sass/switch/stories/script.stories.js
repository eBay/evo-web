export default { title: "Skin/Switch/Script" };

export const on = () => `
<div class="switch">
    <span aria-label="Switch Demo" class="switch__control" role="switch" tabindex="0" aria-checked="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const onDisabled = () => `
<div class="switch">
    <span aria-label="Switch Demo" class="switch__control" role="switch" tabindex="-1" aria-checked="true" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const off = () => `
<div class="switch">
    <span aria-label="Switch Demo" class="switch__control" role="switch" tabindex="0" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
`;

export const offDisabled = () => `
<div class="switch">
    <span aria-label="Switch Demo" class="switch__control" role="switch" tabindex="-1" aria-checked="false" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const customProperties = () => `
<style>
    .switch--theme-1 {
        --switch-unchecked-background-color: orange;
        --switch-checked-background-color: green;
        --switch-unchecked-hover-background-color: coral;
        --switch-checked-hover-background-color: limegreen;
    }
    @media (prefers-color-scheme: dark) {
        .switch--theme-1 {
            --switch-unchecked-background-color: blue;
            --switch-checked-background-color: red;
            --switch-unchecked-hover-background-color: purple;
            --switch-checked-hover-background-color: indianred;
        }
    }
</style>
<div class="switch switch--theme-1">
    <span aria-label="Switch Demo" class="switch__control" role="switch" tabindex="0" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
`;
