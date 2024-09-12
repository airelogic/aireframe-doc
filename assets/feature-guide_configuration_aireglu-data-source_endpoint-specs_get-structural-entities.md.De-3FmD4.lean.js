import{_ as s,c as n,a3 as a,o as p}from"./chunks/framework.CkeqJIJy.js";const d=JSON.parse('{"title":"get-structural-entities","description":"","frontmatter":{"next":{"text":"get-structure-types","link":"/feature-guide/configuration/aireglu-data-source/endpoint-specs/get-structure-types"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-structural-entities.md","filePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-structural-entities.md"}'),e={name:"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-structural-entities.md"};function i(o,t,l,u,r,c){return p(),n("div",null,t[0]||(t[0]=[a(`<h1 id="get-structural-entities" tabindex="-1">get-structural-entities <a class="header-anchor" href="#get-structural-entities" aria-label="Permalink to &quot;get-structural-entities&quot;">​</a></h1><h2 id="specification-version" tabindex="-1">Specification Version <a class="header-anchor" href="#specification-version" aria-label="Permalink to &quot;Specification Version&quot;">​</a></h2><p>Version: <code>&quot;1&quot;</code></p><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability.</p><p>Returns details of <a href="/feature-guide/configuration/structure.html#structural-entities">structural entities</a> when an array of structural entity keys is passed in.</p><p>The associated structure types should be compatible with the <a href="/feature-guide/configuration/aireglu-data-source/endpoint-specs/get-structure-types.html">get-structure-types</a> endpoint.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-structural-entities</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>  &quot;title&quot;: &quot;get-structural-entities-input&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>  &quot;required&quot;: [</span></span>
<span class="line"><span>    &quot;Keys&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;properties&quot;: {</span></span>
<span class="line"><span>    &quot;Keys&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>      &quot;items&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Keys&quot;: [</span></span>
<span class="line"><span>		&quot;AAB&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Explanation of properties</strong>: Keys is an array of structural entity keys, to retrieve the details of the associated structural entities</li></ul><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-structural-entities-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;StructuralEntities&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Key&quot;,</span></span>
<span class="line"><span>					&quot;DisplayName&quot;,</span></span>
<span class="line"><span>					&quot;Depth&quot;,</span></span>
<span class="line"><span>                    &quot;StructureType&quot;,</span></span>
<span class="line"><span>                    &quot;ParentKey&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Key&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;DisplayName&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;StructureType&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>						&quot;properties&quot;: {</span></span>
<span class="line"><span>							&quot;Key&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>							},</span></span>
<span class="line"><span>							&quot;DisplayName&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>							},</span></span>
<span class="line"><span>							&quot;IsSubjectAssignable&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>							}</span></span>
<span class="line"><span>						},</span></span>
<span class="line"><span>						&quot;required&quot;: [</span></span>
<span class="line"><span>							&quot;Key&quot;,</span></span>
<span class="line"><span>							&quot;DisplayName&quot;,</span></span>
<span class="line"><span>							&quot;IsSubjectAssignable&quot;</span></span>
<span class="line"><span>						]</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;Depth&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;number&quot;</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;ParentKey&quot;: {</span></span>
<span class="line"><span>                        &quot;type&quot;: [&quot;string&quot;, &quot;null&quot;]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;StructuralEntities&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;StructuralEntities&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;AAB&quot;,</span></span>
<span class="line"><span>			&quot;DisplayName&quot;: &quot;AAB Department&quot;,</span></span>
<span class="line"><span>			&quot;StructureType&quot;: {</span></span>
<span class="line"><span>				&quot;Key&quot;: &quot;dept&quot;,</span></span>
<span class="line"><span>				&quot;DisplayName&quot;: &quot;Department&quot;,</span></span>
<span class="line"><span>				&quot;IsSubjectAssignable&quot;: true</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;Depth&quot;: 1,</span></span>
<span class="line"><span>			&quot;ParentKey&quot;: null</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="previous-versions" tabindex="-1">Previous versions <a class="header-anchor" href="#previous-versions" aria-label="Permalink to &quot;Previous versions&quot;">​</a></h2><p>None</p>`,22)]))}const h=s(e,[["render",i]]);export{d as __pageData,h as default};
