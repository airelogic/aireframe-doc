import{_ as s,c as t,o as n,a4 as a}from"./chunks/framework.CgMb17D3.js";const h=JSON.parse('{"title":"get-structure-types","description":"","frontmatter":{"next":{"text":"get-subject-structural-entities","link":"/feature-guide/configuration/aireglu-endpoint-specs/get-subject-structural-entities"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-endpoint-specs/get-structure-types.md","filePath":"feature-guide/configuration/aireglu-endpoint-specs/get-structure-types.md"}'),p={name:"feature-guide/configuration/aireglu-endpoint-specs/get-structure-types.md"},e=a(`<h1 id="get-structure-types" tabindex="-1">get-structure-types <a class="header-anchor" href="#get-structure-types" aria-label="Permalink to &quot;get-structure-types&quot;">​</a></h1><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability.</p><p>Returns details of <a href="/feature-guide/configuration/structure.html#structure-types">structure types</a> when an array of structure type keys is passed in.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-structure-types</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-structure-types-input&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;Keys&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;Keys&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Keys&quot;: [</span></span>
<span class="line"><span>		&quot;division&quot;,</span></span>
<span class="line"><span>		&quot;dept&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-structure-types-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;StructureTypes&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {				</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Key&quot;,</span></span>
<span class="line"><span>					&quot;DisplayName&quot;,</span></span>
<span class="line"><span>					&quot;IsSubjectAssignable&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Key&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;DisplayName&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;IsSubjectAssignable&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;StructureTypes&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;StructureTypes&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;division&quot;,</span></span>
<span class="line"><span>			&quot;DisplayName&quot;: &quot;Division&quot;,</span></span>
<span class="line"><span>			&quot;IsSubjectAssignable&quot;: true</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;dept&quot;,</span></span>
<span class="line"><span>			&quot;DisplayName&quot;: &quot;Department&quot;,</span></span>
<span class="line"><span>			&quot;IsSubjectAssignable&quot;: true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),o=[e];function i(l,u,c,r,q,d){return n(),t("div",null,o)}const y=s(p,[["render",i]]);export{h as __pageData,y as default};