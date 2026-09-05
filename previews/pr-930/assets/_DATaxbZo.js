import{r as n,e,u as o}from"./_Cof3au2K.js";const a=`<div class=a11y-pattern-content><h1>Open New Window</h1><p>Forcing links to open in a new window is an anti-pattern because we are taking control <em>away</em> from the user and forcing web-browsing behaviour upon them. If a user wishes to open a link in a new window, they can do so by using their mouse or keyboard shortcut, without our intervention.</p><p>If you must create a link that opens in a new window, screen reader users <strong>must</strong> be pre-warned of the behaviour. We achieve this with clipped suffix text:</p><pre><code class=language-html>&lt;a href=&quot;http://www.ebay.com/shop&quot; target=&quot;_blank&quot;&gt;
  Shop Now&lt;span class=&quot;clipped&quot;&gt; - opens in new window or tab&lt;/span&gt;
&lt;/a&gt;
</code></pre><h2>Using an Icon</h2><p>Ideally we should also warn <em>sighted</em> users of this behaviour. We can do this by adding the text to a foreground image:</p><pre><code class=language-html>&lt;a href=&quot;http://www.ebay.com/shop&quot; target=&quot;_blank&quot;&gt;
  Shop Now&lt;img src=&quot;new-window-icon.jpg&quot; alt=&quot; - opens in new window or tab&quot; /&gt;
&lt;/a&gt;
</code></pre><p>Alternatively, using a CSS background image:</p><pre><code class=language-html>&lt;a href=&quot;http://www.ebay.com/shop&quot; target=&quot;_blank&quot;&gt;
  Shop Now&lt;span
    aria-label=&quot; - opens in new window or tab&quot;
    class=&quot;icon-new-window&quot;
    role=&quot;img&quot;
  &gt;&lt;/span&gt;
&lt;/a&gt;
</code></pre><h2>References</h2><ul><li><a>Component Pattern : Link</a></li><li><a>Technique: Clipped Text</a></li></ul></div>`,i="DvaE lD n";function s(t){e(t.a,"href",`${o.components}/link`),e(t.b,"href",`${o.accessibility}/techniques/offscreen-text`)}const u=n("Pd",a,i,s);export{s as $setup,a as $template,i as $walks,u as default};
//# sourceMappingURL=_DATaxbZo.js.map
