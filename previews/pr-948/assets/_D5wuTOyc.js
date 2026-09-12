import{t as e}from"./_CGDmBjR1.js";var t=`<div class=a11y-pattern-content><h1>JavaScript HREF</h1><p>Never use “javascript:” “#” or similar as the value of an href attribute.</p><p>The purpose of the href attribute is to specify a <strong>URL only.</strong> If you wish to run JavaScript on an element click, use a button instead.</p><h2>Bad</h2><pre><code class=language-html>&lt;a href=&quot;javascript:;&quot; id=&quot;share&quot;&gt;Share on Facebook&lt;/a&gt;

&lt;script&gt;
  $(&quot;#share&quot;).on(&quot;click&quot;, function (e) {
    
  });
&lt;/script&gt;
</code></pre><h2>Good</h2><pre><code class=language-html>&lt;!-- a button created with JavaScript --&gt;
&lt;button id=&quot;share&quot;&gt;Share on Facebook&lt;/button&gt;

&lt;script&gt;
  $(&quot;#share&quot;).on(&quot;click&quot;, function (e) {
    
  });
&lt;/script&gt;
</code></pre><h2>Even better</h2><p>Use progressive enhancement:</p><pre><code class=language-html>&lt;a href=&quot;http://www.facebook.com/share?id=12345&quot; id=&quot;share&quot;
  &gt;Share on Facebook&lt;/a
&gt;

&lt;script&gt;
  $(&quot;#share&quot;).attr(&quot;role&quot;, &quot;button&quot;);
  $(&quot;#share[role=button]&quot;).on(&quot;click&quot;, function (e) {
    this.preventDefault();
    
  });
&lt;/script&gt;
</code></pre><p>The screen reader will announce “Share on Facebook. Button” or fallback to “Share on Facebook. Link” if JavaScript is not ready or available.</p></div>`,n=`b`,r=()=>{},i=e(`Id`,t,`b`);export{r as $setup,t as $template,n as $walks,i as default};
//# sourceMappingURL=_D5wuTOyc.js.map