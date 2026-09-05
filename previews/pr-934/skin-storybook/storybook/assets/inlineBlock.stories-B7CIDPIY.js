const t={title:"Skin/Tabs/Inline-Block"},a=()=>`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" aria-selected="true" id="tab1" tabindex="0">
            <span>Tab 1</span>
        </div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2">
            <span>Tab 2</span>
        </div>
    </div>
    <div class="tabs__content">
        <div class="tabs__panel" id="panel1" role="tabpanel" aria-labelledby="tab1">
            <div class="tabs__cell">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="tabs__panel" id="panel2" role="tabpanel" hidden aria-labelledby="tab2">
            <div class="tabs__cell">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</span>
`,e=()=>`
 <span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" aria-selected="false" id="tab3"><span>Tab 3</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
`,s=()=>`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab3"><span>Tab 3</span></div>
        <div aria-controls="panel4" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab4"><span>Tab 4</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel4" role="tabpanel" hidden aria-labelledby="tab4"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
`,i=()=>`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="default-tabpanel-1" aria-selected="true" class="tabs__item" id="default-tab-1" role="tab" tabindex="0">
            <span>Tab 1 with lots of text that will not truncate or wrap</span>
        </div>
        <div aria-controls="default-tabpanel-2" aria-selected="false" class="tabs__item" id="default-tab-2" role="tab" tabindex="-1">
            <span>Tab 2</span>
        </div>
        <div aria-controls="default-tabpanel-3" aria-selected="false" class="tabs__item" id="default-tab-3" role="tab" tabindex="-1">
            <span>Tab 3</span>
        </div>
    </div>
    <div class="tabs__content">
        <div aria-labelledby="default-tab-1" class="tabs__panel" id="default-tabpanel-1" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 1 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
        <div aria-labelledby="default-tab-2" class="tabs__panel" hidden id="default-tabpanel-2" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 2 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
        <div aria-labelledby="default-tab-3" class="tabs__panel" hidden id="default-tabpanel-3" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 3 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
    </div>
</span>
`,l=()=>`
<span class="tabs demo-a11y-text-spacing">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab3"><span>Tab 3</span></div>
        <div aria-controls="panel4" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab4"><span>Tab 4</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel4" role="tabpanel" hidden aria-labelledby="tab4"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" aria-selected="true" id="tab1" tabindex="0">
            <span>Tab 1</span>
        </div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2">
            <span>Tab 2</span>
        </div>
    </div>
    <div class="tabs__content">
        <div class="tabs__panel" id="panel1" role="tabpanel" aria-labelledby="tab1">
            <div class="tabs__cell">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="tabs__panel" id="panel2" role="tabpanel" hidden aria-labelledby="tab2">
            <div class="tabs__cell">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</span>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
 <span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" aria-selected="false" id="tab3"><span>Tab 3</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab3"><span>Tab 3</span></div>
        <div aria-controls="panel4" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab4"><span>Tab 4</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel4" role="tabpanel" hidden aria-labelledby="tab4"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
\``,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="tabs">
    <div class="tabs__items" role="tablist">
        <div aria-controls="default-tabpanel-1" aria-selected="true" class="tabs__item" id="default-tab-1" role="tab" tabindex="0">
            <span>Tab 1 with lots of text that will not truncate or wrap</span>
        </div>
        <div aria-controls="default-tabpanel-2" aria-selected="false" class="tabs__item" id="default-tab-2" role="tab" tabindex="-1">
            <span>Tab 2</span>
        </div>
        <div aria-controls="default-tabpanel-3" aria-selected="false" class="tabs__item" id="default-tab-3" role="tab" tabindex="-1">
            <span>Tab 3</span>
        </div>
    </div>
    <div class="tabs__content">
        <div aria-labelledby="default-tab-1" class="tabs__panel" id="default-tabpanel-1" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 1 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
        <div aria-labelledby="default-tab-2" class="tabs__panel" hidden id="default-tabpanel-2" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 2 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
        <div aria-labelledby="default-tab-3" class="tabs__panel" hidden id="default-tabpanel-3" role="tabpanel">
            <div class="tabs__cell">
                <h3>Panel 3 Content</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
                </p>
            </div>
        </div>
    </div>
</span>
\``,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<span class="tabs demo-a11y-text-spacing">
    <div class="tabs__items" role="tablist">
        <div aria-controls="panel1" class="tabs__item" role="tab" tabindex="0" aria-selected="true" id="tab1"><span>Tab 1</span></div>
        <div aria-controls="panel2" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab2"><span>Tab 2</span></div>
        <div aria-controls="panel3" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab3"><span>Tab 3</span></div>
        <div aria-controls="panel4" class="tabs__item" role="tab" tabindex="-1" aria-selected="false" id="tab4"><span>Tab 4</span></div>
    </div>
    <div class="tabs__content">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel2" role="tabpanel" hidden aria-labelledby="tab2"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel3" role="tabpanel" hidden aria-labelledby="tab3"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
        <div id="panel4" role="tabpanel" hidden aria-labelledby="tab4"><div class="tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div></div>
    </div>
</span>
\``,...l.parameters?.docs?.source}}};const d=["two","three","four","longText","textSpacing"];export{d as __namedExportsOrder,t as default,s as four,i as longText,l as textSpacing,e as three,a as two};
