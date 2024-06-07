import{_ as t,c as s,o as n,a4 as a}from"./chunks/framework.CgMb17D3.js";const g=JSON.parse('{"title":"get-subject-structural-entities","description":"","frontmatter":{"next":{"text":"get-subjects","link":"/feature-guide/configuration/aireglu-endpoint-specs/get-subjects"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-endpoint-specs/get-subject-structural-entities.md","filePath":"feature-guide/configuration/aireglu-endpoint-specs/get-subject-structural-entities.md"}'),e={name:"feature-guide/configuration/aireglu-endpoint-specs/get-subject-structural-entities.md"},p=a(`<h1 id="get-subject-structural-entities" tabindex="-1">get-subject-structural-entities <a class="header-anchor" href="#get-subject-structural-entities" aria-label="Permalink to &quot;get-subject-structural-entities&quot;">​</a></h1><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability.</p><p>Returns the key property of any structural entities to which the subject is assigned.</p><p>The structural entity keys should be compatible with the <a href="/feature-guide/configuration/aireglu-endpoint-specs/get-structural-entities.html">get-structure-entities</a> endpoint.</p><p>The external ID passed in for the subject corresponds to the value returned for the property <code>ExternalSubjectId</code> by the <a href="/feature-guide/configuration/aireglu-endpoint-specs/get-subjects.html">get-subjects</a> endpoint.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-subject-structural-entities</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-subject-structural-entities-input&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;ExternalId&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;ExternalId&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;ExternalId&quot;: &quot;subj-145&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-subject-structural-entities-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;StructuralEntities&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Key&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Key&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>					}</span></span>
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
<span class="line"><span>			&quot;Key&quot;: &quot;AAC&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,18),i=[p];function o(l,u,c,r,d,h){return n(),s("div",null,i)}const b=t(e,[["render",o]]);export{g as __pageData,b as default};