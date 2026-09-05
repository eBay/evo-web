import{r as t,e as n,u as a}from"./_Cof3au2K.js";const o=`<div class=a11y-pattern-content><h1>Live Region</h1><p>If an area of a page is dynamically updated without a full-page reload, we <em>might</em> (see <a>FAQ: When Should A Live Region Be Used?</a> ) wish to inform the user that there was a change.</p><p>The live region <strong>must</strong> exist in the DOM before its content changes. Mounting a live region at the same time as its message may not trigger an announcement. Render a persistent, empty live region and add the message when the update occurs.</p><pre><code class=language-html>&lt;div aria-live=&quot;”polite”&quot;&gt;
  &lt;p&gt;Newcastle United 0 - Barcelona 0&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>Whenever the inner text changes, or the CSS display of the content changes from none to block[1], the screen reader will announce the contents.</p><pre><code class=language-html>&lt;div aria-live=&quot;”polite”&quot;&gt;
  &lt;p&gt;Goal!&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>Screen reader announces “Goal!”</p><pre><code class=language-html>&lt;div aria-live=&quot;”polite”&quot;&gt;
  &lt;p&gt;Newcastle United 1 - Barcelona 0&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>Screen reader announces “Newcastle United 1 - Barcelona 0&quot;.</p><p>Note, sometimes we may wish to announce the content that changed (as in this football score example), in other cases we may only wish to give an update as to the nature of the change (e.g. “Attention! Errors found”). A general rule of thumb is to keep the live-region short and free from structured data and interactive elements.</p><p>[1] It is very important to note that any CSS display operation <strong>must</strong> happen on a descendant node of the live region, and not on the live region node itself.</p></div>`,i="DbDd m";function s(e){n(e.a,"href",`${a.accessibility}/misc/faq`)}const l=t("ve",o,i,s);export{s as $setup,o as $template,i as $walks,l as default};
//# sourceMappingURL=_BAekgdim.js.map
