export default { title: "Skin/Dialog Like" };

export const base = () => `
<script>document.querySelector(".dialog-like").showModal()</script>
<dialog class="dialog-like">content</dialog>
`;
