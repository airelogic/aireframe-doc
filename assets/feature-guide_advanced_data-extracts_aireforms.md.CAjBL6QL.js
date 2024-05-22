import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.CzsDe1xi.js";const m=JSON.parse('{"title":"AireForms Data Extracts","description":"","frontmatter":{},"headers":[],"relativePath":"feature-guide/advanced/data-extracts/aireforms.md","filePath":"feature-guide/advanced/data-extracts/aireforms.md"}'),t={name:"feature-guide/advanced/data-extracts/aireforms.md"},l=e(`<h1 id="aireforms-data-extracts" tabindex="-1">AireForms Data Extracts <a class="header-anchor" href="#aireforms-data-extracts" aria-label="Permalink to &quot;AireForms Data Extracts&quot;">​</a></h1><h2 id="form-instances" tabindex="-1">Form instances <a class="header-anchor" href="#form-instances" aria-label="Permalink to &quot;Form instances&quot;">​</a></h2><p>Use this data extract to get the list of forms that have been created against a subject, with an option to include forms that have been withdrawn.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;form-instances&quot;,</span></span>
<span class="line"><span>    &quot;includeWithdrawn&quot;: false</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="form-data" tabindex="-1">Form data <a class="header-anchor" href="#form-data" aria-label="Permalink to &quot;Form data&quot;">​</a></h2><p>Form data can be extracted at the building block level or the form level.</p><h3 id="building-block-level" tabindex="-1">Building block level: <a class="header-anchor" href="#building-block-level" aria-label="Permalink to &quot;Building block level:&quot;">​</a></h3><p>This will pull the data from all the controls within a building block. By using the building block extract, it will pull data from all form submissions that use the specified building block</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;key&quot;: &quot;news2&quot;,</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;building-block&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: 1</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>To extract a control&#39;s display value instead of it&#39;s underlying value. You need to specify the <code>controlId</code> and the <code>valueType</code> <code>[value/displayValue]</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;dataPoints&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;controlId&quot;: &quot;my-control&quot;,</span></span>
<span class="line"><span>        &quot;valueType&quot;: &quot;displayValue&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="form-level" tabindex="-1">Form level <a class="header-anchor" href="#form-level" aria-label="Permalink to &quot;Form level&quot;">​</a></h3><p>This will pull the data from all controls within a form.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;type&quot;:&quot;form&quot;,</span></span>
<span class="line"><span>    &quot;key&quot;:&quot;fluid-balance&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;:1</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>To extract a control&#39;s display value instead of it&#39;s underlying value you need to specify the building block for the control as well:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;dataPoints&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;controlId&quot;: &quot;my-control&quot;,</span></span>
<span class="line"><span>        &quot;valueType&quot;: &quot;displayValue&quot;,</span></span>
<span class="line"><span>        &quot;buildingBlock&quot;: {</span></span>
<span class="line"><span>            &quot;key&quot;: &quot;my-building-block&quot;,</span></span>
<span class="line"><span>            &quot;version&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,16),o=[l];function p(i,c,u,r,d,h){return n(),s("div",null,o)}const b=a(t,[["render",p]]);export{m as __pageData,b as default};
