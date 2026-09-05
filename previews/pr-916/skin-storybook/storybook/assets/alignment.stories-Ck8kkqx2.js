const t={title:"Skin/Icon Button/Alignment"},e=()=>`
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--20" aria-hidden="true" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</button>
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--20" aria-hidden="true" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</a>
`,s=()=>`
<button aria-label="settings" type="button" class="icon-btn">
    <svg class="icon icon--24" aria-hidden="true" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</button>
<a aria-label="settings" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--24" aria-hidden="true" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</a>
`,n=()=>`
<button aria-label="close" type="button" class="icon-btn">
    <svg class="icon icon--16" aria-hidden="true" width="16" height="16"><use href="#icon-close-16"></use></svg>
</button>
<a aria-label="close" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--16" aria-hidden="true" width="16" height="16"><use href="#icon-close-16"></use></svg>
</a>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--20" aria-hidden="true" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</button>
<a aria-label="menu" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--20" aria-hidden="true" width="16" height="16"><use href="#icon-menu-20"></use></svg>
</a>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button aria-label="settings" type="button" class="icon-btn">
    <svg class="icon icon--24" aria-hidden="true" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</button>
<a aria-label="settings" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--24" aria-hidden="true" width="16" height="16"><use href="#icon-settings-24"></use></svg>
</a>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button aria-label="close" type="button" class="icon-btn">
    <svg class="icon icon--16" aria-hidden="true" width="16" height="16"><use href="#icon-close-16"></use></svg>
</button>
<a aria-label="close" class="icon-link" href="http://www.ebay.com">
     <svg class="icon icon--16" aria-hidden="true" width="16" height="16"><use href="#icon-close-16"></use></svg>
</a>
\``,...n.parameters?.docs?.source}}};const i=["menu","settings","close"];export{i as __namedExportsOrder,n as close,t as default,e as menu,s as settings};
