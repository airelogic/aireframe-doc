import{_ as t,c as s,o as n,ah as e}from"./chunks/framework.BwFTqLo3.js";const q=JSON.parse('{"title":"get-subject-avatar","description":"","frontmatter":{"next":{"text":"get-subject-structural-entities","link":"/feature-guide/configuration/aireglu-data-source/endpoint-specs/get-subject-structural-entities"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-subject-avatar.md","filePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-subject-avatar.md","lastUpdated":1757408046000}'),p={name:"feature-guide/configuration/aireglu-data-source/endpoint-specs/get-subject-avatar.md"};function o(i,a,l,r,u,c){return n(),s("div",null,[...a[0]||(a[0]=[e(`<h1 id="get-subject-avatar" tabindex="-1">get-subject-avatar <a class="header-anchor" href="#get-subject-avatar" aria-label="Permalink to &quot;get-subject-avatar&quot;">​</a></h1><h2 id="specification-version" tabindex="-1">Specification Version <a class="header-anchor" href="#specification-version" aria-label="Permalink to &quot;Specification Version&quot;">​</a></h2><p>Version: <code>&quot;1&quot;</code></p><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability when the subject avatar feature is enabled.</p><p>Returns a subject&#39;s avatar as a stream when an ExternalSubjectId is passed in.</p><div class="warning custom-block"><p class="custom-block-title">Supported Image Content Types</p><p>Only image content types are supported.</p><p>For a complete list of image media types, please refer to the <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#image" target="_blank" rel="noreferrer">Image Media Types</a> documentation.</p></div><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-get-subject-avatar</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;get-subject-avatar&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;Lookup&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;ExternalSubjectId&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;LookupExpression&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [&quot;string&quot;, &quot;null&quot;]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;required&quot;: [</span></span>
<span class="line"><span>				&quot;ExternalSubjectId&quot;,</span></span>
<span class="line"><span>				&quot;LookupExpression&quot;</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;Lookup&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Lookup&quot;: {</span></span>
<span class="line"><span>    &quot;ExternalSubjectId&quot;: &quot;subj-145&quot;,</span></span>
<span class="line"><span>    &quot;LookupExpression&quot;: null</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: Stream</li></ul><h2 id="previous-versions" tabindex="-1">Previous versions <a class="header-anchor" href="#previous-versions" aria-label="Permalink to &quot;Previous versions&quot;">​</a></h2><p>None</p>`,18)])])}const h=t(p,[["render",o]]);export{q as __pageData,h as default};
