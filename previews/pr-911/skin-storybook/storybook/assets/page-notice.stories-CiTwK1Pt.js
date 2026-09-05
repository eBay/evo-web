const f={title:"Skin/Page Notice"},e=()=>`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
</section>
`,i=()=>`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`,a=()=>`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`,n=()=>`
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`,o=()=>`
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`,t=()=>`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`,s=()=>`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
`,c=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`,r=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn more</a>
    </div>
</section>
`,l=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <p>You have opted into eBay Pay</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
`,g=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><button class="fake-link">Opt in</button></p>
</section>
`,p=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`,d=()=>`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Opt into eBay payments before Jan 12th to pay no selling fees.</h3>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`,h=()=>`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">We found problems with your form.</h2>
        <p><a href="#">Error 1</a>, <a href="#">Error 2</a>, <a href="#">Error 3</a>.</p>
    </div>
</section>
`,m=()=>`
<section class="page-notice page-notice--information demo-a11y-text-spacing" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
</section>
\``,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page. Customize anytime in settings.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
\``,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--general" role="region" aria-label="Information">
    <div class="page-notice__main">
        <h2 class="page-notice__title">We've updated the look and feel of this page.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
\``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--confirmation" role="region" aria-label="Confirmation">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Confirmation">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">You have opted into eBay Pay</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
\``,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Your selling account has been deactivated.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn More</a>
    </div>
</section>
\``,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
\``,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">Free shipping on your next pair of shoes.</h2>
    </div>
    <div class="page-notice__footer">
        <a href="https://ebay.com">Learn more</a>
    </div>
</section>
\``,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <p>You have opted into eBay Pay</p>
    </div>
    <div class="page-notice__footer">
        <button class="fake-link">Dismiss</button>
    </div>
</section>
\``,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><button class="fake-link">Opt in</button></p>
</section>
\``,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
\``,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Opt into eBay payments before Jan 12th to pay no selling fees.</h3>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
\``,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--attention" role="region" aria-label="Attention">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Attention">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h2 class="page-notice__title">We found problems with your form.</h2>
        <p><a href="#">Error 1</a>, <a href="#">Error 2</a>, <a href="#">Error 3</a>.</p>
    </div>
</section>
\``,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => \`
<section class="page-notice page-notice--information demo-a11y-text-spacing" role="region" aria-label="Information">
    <div class="page-notice__header">
        <svg class="icon icon--16" height="16" width="16" role="img" aria-label="Information">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title">Notice Title</h3>
        <p>Opt into eBay payments before Jan 12th to pay no selling fees.</p>
    </div>
    <p class="page-notice__cta"><a href="https://www.ebay.com">Opt in</a></p>
    <div class="page-notice__footer">
        <button aria-label="Dismiss notification" class="fake-link page-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="14" width="14">
                <use href="#icon-close-16"></use>
            </svg>
        </a>
    </div>
</section>
\``,...m.parameters?.docs?.source}}};const _=["general","generalWithButton","generalWithLink","confirmationWithButton","confirmationWithLink","attentionWithButton","attentionWithLink","informationWithButton","informationWithLink","InformationWithParagraph","fakeLinkCTA","dismissableWithTitle","dismissableWithoutTitle","formErrors","textSpacing"];export{l as InformationWithParagraph,_ as __namedExportsOrder,t as attentionWithButton,s as attentionWithLink,n as confirmationWithButton,o as confirmationWithLink,f as default,p as dismissableWithTitle,d as dismissableWithoutTitle,g as fakeLinkCTA,h as formErrors,e as general,i as generalWithButton,a as generalWithLink,c as informationWithButton,r as informationWithLink,m as textSpacing};
