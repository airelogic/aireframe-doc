import{_ as a,c as t,o as s,a4 as n}from"./chunks/framework.CgMb17D3.js";const g=JSON.parse('{"title":"get-available-dataset-fields","description":"","frontmatter":{"next":{"text":"get-data-points","link":"/feature-guide/configuration/aireglu-endpoint-specs/get-data-points"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-endpoint-specs/get-available-dataset-fields.md","filePath":"feature-guide/configuration/aireglu-endpoint-specs/get-available-dataset-fields.md"}'),e={name:"feature-guide/configuration/aireglu-endpoint-specs/get-available-dataset-fields.md"},p=n(`<h1 id="get-available-dataset-fields" tabindex="-1">get-available-dataset-fields <a class="header-anchor" href="#get-available-dataset-fields" aria-label="Permalink to &quot;get-available-dataset-fields&quot;">​</a></h1><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>StructuredData</code> capability.</p><p>Called when a user is setting up a data extract or visualisation, to indicate which fields are available to the user.</p><p>Which fields are available may depend upon the options the user has chosen. These options are passed in as input to this endpoint. The structure of these options is determined by the schema returned from the endpoint <a href="/feature-guide/configuration/aireglu-endpoint-specs/get-dataset-options-schema.html"><code>endpoint-prefix</code>-aireframe-get-dataset-options-schema</a>.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-available-dataset-fields</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-available-dataset-fields-input&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;info-type&quot;: &quot;sales&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-available-dataset-fields-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;AvailableFields&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Key&quot;,</span></span>
<span class="line"><span>					&quot;DataType&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Key&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;DataType&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>						&quot;enum&quot;: [</span></span>
<span class="line"><span>									&quot;String&quot;,</span></span>
<span class="line"><span>									&quot;Decimal&quot;,</span></span>
<span class="line"><span>									&quot;Integer&quot;,</span></span>
<span class="line"><span>									&quot;DateTime&quot;,</span></span>
<span class="line"><span>									&quot;Date&quot;,</span></span>
<span class="line"><span>									&quot;Time&quot;,</span></span>
<span class="line"><span>									&quot;Boolean&quot;</span></span>
<span class="line"><span>								]</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;AvailableFields&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;AvailableFields&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;NAME&quot;,</span></span>
<span class="line"><span>			&quot;DataType&quot;: &quot;String&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,17),i=[p];function l(o,u,c,r,d,q){return s(),t("div",null,i)}const b=a(e,[["render",l]]);export{g as __pageData,b as default};
