import { carousel } from "./markup";

export default { title: "Skin/Carousel Autoplay/RTL" };

export const playing = () => `<div dir="rtl">${carousel()}</div>`;

export const paused = () =>
    `<div dir="rtl">${carousel({ paused: true })}</div>`;
