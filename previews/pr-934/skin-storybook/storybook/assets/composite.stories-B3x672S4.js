const i={title:"Skin/Skeleton/Composite"},e=()=>`<div class="skeleton skeleton--blue" role="img" aria-label="loading" style="width: 225px;">
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text  skeleton__text--multiline"></div>
    </div>`,s=()=>`<div class="skeleton skeleton--purple" role="img" aria-label="loading">
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
    </div>`,l=()=>`<div class="skeleton skeleton--green" role="img" aria-label="loading">
        <span class="skeleton__avatar"></span>
        <span class="skeleton__text  skeleton__text--multiline"
        style="width: 200px; vertical-align: top;"></span>
    </div>`,t=()=>`<div class="skeleton skeleton--on-secondary" role="img" aria-label="loading">
        <div class="skeleton__button"></div>
        <div class="skeleton__button"></div>
    </div>`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`<div class="skeleton skeleton--blue" role="img" aria-label="loading" style="width: 225px;">
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text  skeleton__text--multiline"></div>
    </div>\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`<div class="skeleton skeleton--purple" role="img" aria-label="loading">
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
    </div>\``,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`<div class="skeleton skeleton--green" role="img" aria-label="loading">
        <span class="skeleton__avatar"></span>
        <span class="skeleton__text  skeleton__text--multiline"
        style="width: 200px; vertical-align: top;"></span>
    </div>\``,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`<div class="skeleton skeleton--on-secondary" role="img" aria-label="loading">
        <div class="skeleton__button"></div>
        <div class="skeleton__button"></div>
    </div>\``,...t.parameters?.docs?.source}}};const n=["tile","inlineTiles","inlineSkeletons","blockSkeletons"];export{n as __namedExportsOrder,t as blockSkeletons,i as default,l as inlineSkeletons,s as inlineTiles,e as tile};
