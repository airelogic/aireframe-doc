import{_ as a,c as t,o as e,a4 as s}from"./chunks/framework.CzsDe1xi.js";const g=JSON.parse('{"title":"get-capability-metadata","description":"","frontmatter":{"next":{"text":"get-groups","link":"/feature-guide/configuration/aireglu-endpoint-specs/get-groups"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-endpoint-specs/get-capability-metadata.md","filePath":"feature-guide/configuration/aireglu-endpoint-specs/get-capability-metadata.md"}'),n={name:"feature-guide/configuration/aireglu-endpoint-specs/get-capability-metadata.md"},i=s(`<h1 id="get-capability-metadata" tabindex="-1">get-capability-metadata <a class="header-anchor" href="#get-capability-metadata" aria-label="Permalink to &quot;get-capability-metadata&quot;">​</a></h1><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Must be implemented for all AireGlu data sources regardless of capability support.</p><p>Indicates to AireFrame which capabilities this AireGlu data source provides, so that it is made available in the appropriate areas within AireFrame.</p><p>The current available capabilities which you may choose to implement are <code>StructuredData</code> and <code>SubjectRead</code>.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-capability-metadata</li><li><strong>Verb</strong>: GET</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: None</li></ul><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-capabilities-metadata-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;Capabilities&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>				&quot;enum&quot;: [&quot;SubjectRead&quot;, &quot;StructuredData&quot;],</span></span>
<span class="line"><span>				&quot;uniqueItems&quot;: true</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;minItems&quot;: 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;Capabilities&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;Capabilities&quot;: [&quot;SubjectRead&quot;, &quot;StructuredData&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14),p=[i];function o(l,u,r,c,d,h){return e(),t("div",null,p)}const m=a(n,[["render",o]]);export{g as __pageData,m as default};
