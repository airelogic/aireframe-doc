import{_ as t,c as s,o as n,a4 as a}from"./chunks/framework.CzsDe1xi.js";const h=JSON.parse('{"title":"page-groups","description":"","frontmatter":{"next":{"text":"page-structural-entities","link":"/feature-guide/configuration/aireglu-endpoint-specs/page-structural-entities"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-endpoint-specs/page-groups.md","filePath":"feature-guide/configuration/aireglu-endpoint-specs/page-groups.md"}'),p={name:"feature-guide/configuration/aireglu-endpoint-specs/page-groups.md"},e=a(`<h1 id="page-groups" tabindex="-1">page-groups <a class="header-anchor" href="#page-groups" aria-label="Permalink to &quot;page-groups&quot;">​</a></h1><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability.</p><p>Receives either a group search term or an array of structural entities for which paged group details should be returned.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-page-groups</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;page-groups-input&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;Filter&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;SearchTerm&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [&quot;null&quot;, &quot;string&quot;]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;StructuralEntityKeys&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [&quot;array&quot;, &quot;null&quot;],</span></span>
<span class="line"><span>					&quot;items&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;required&quot;: [</span></span>
<span class="line"><span>				&quot;StructuralEntityKeys&quot;</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;PagingRequest&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;After&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;, </span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>          			&quot;description&quot;: &quot;Request items after the node with provided cursor&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;Before&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;, </span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>          			&quot;description&quot;: &quot;Request items before the node with provided cursor&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;First&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;integer&quot;, </span></span>
<span class="line"><span>						&quot;null&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>          			&quot;description&quot;: &quot;Request the first x items&quot;,</span></span>
<span class="line"><span>					&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;Last&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;integer&quot;, </span></span>
<span class="line"><span>						&quot;null&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>          			&quot;description&quot;: &quot;Request the last x items.&quot;,</span></span>
<span class="line"><span>					&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;OrderBy&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>          			&quot;description&quot;: &quot;Gets the key of the field to order by.&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;OrderDirection&quot;: {</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Gets the direction to order by.&quot;,</span></span>
<span class="line"><span>					&quot;oneOf&quot;: [</span></span>
<span class="line"><span>						{</span></span>
<span class="line"><span>							&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>							&quot;enum&quot;: [</span></span>
<span class="line"><span>								&quot;Ascending&quot;,</span></span>
<span class="line"><span>								&quot;Descending&quot;</span></span>
<span class="line"><span>							]</span></span>
<span class="line"><span>						},</span></span>
<span class="line"><span>						{</span></span>
<span class="line"><span>							&quot;type&quot;: &quot;null&quot;</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>					]					</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;required&quot;: [</span></span>
<span class="line"><span>				&quot;After&quot;,</span></span>
<span class="line"><span>				&quot;Before&quot;,</span></span>
<span class="line"><span>				&quot;First&quot;,</span></span>
<span class="line"><span>				&quot;Last&quot;,</span></span>
<span class="line"><span>				&quot;OrderBy&quot;,</span></span>
<span class="line"><span>				&quot;OrderDirection&quot;</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;Filter&quot;,</span></span>
<span class="line"><span>		&quot;PagingRequest&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Filter&quot;: {</span></span>
<span class="line"><span>	    &quot;SearchTerm&quot;: null,</span></span>
<span class="line"><span>	    &quot;StructuralEntityKeys&quot;: [&quot;AAA&quot;]</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;PagingRequest&quot;: {</span></span>
<span class="line"><span>	    &quot;After&quot;: null,</span></span>
<span class="line"><span>	    &quot;Before&quot;: null,</span></span>
<span class="line"><span>	    &quot;First&quot;: null,</span></span>
<span class="line"><span>	    &quot;Last&quot;: null,</span></span>
<span class="line"><span>	    &quot;OrderBy&quot;: null,</span></span>
<span class="line"><span>	    &quot;OrderDirection&quot;: null</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;page-groups-response&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;PageInfo&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;HasNextPage&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;HasPreviousPage&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;StartCursor&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [&quot;null&quot;, &quot;string&quot;]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;EndCursor&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [&quot;null&quot;, &quot;string&quot;]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;TotalCount&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;integer&quot;,</span></span>
<span class="line"><span>          			&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;required&quot;: [</span></span>
<span class="line"><span>				&quot;HasNextPage&quot;,</span></span>
<span class="line"><span>				&quot;HasPreviousPage&quot;,</span></span>
<span class="line"><span>				&quot;StartCursor&quot;,</span></span>
<span class="line"><span>				&quot;EndCursor&quot;,</span></span>
<span class="line"><span>				&quot;TotalCount&quot;</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;Edges&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Node&quot;,</span></span>
<span class="line"><span>					&quot;Cursor&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Node&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>						&quot;properties&quot;: {</span></span>
<span class="line"><span>							&quot;Key&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>							},</span></span>
<span class="line"><span>							&quot;DisplayName&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>							},</span></span>
<span class="line"><span>							&quot;StructuralEntityKeys&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>								&quot;items&quot;: {</span></span>
<span class="line"><span>									&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>								}</span></span>
<span class="line"><span>							}</span></span>
<span class="line"><span>						},</span></span>
<span class="line"><span>						&quot;required&quot;: [</span></span>
<span class="line"><span>							&quot;Key&quot;,</span></span>
<span class="line"><span>							&quot;DisplayName&quot;,</span></span>
<span class="line"><span>							&quot;StructuralEntityKeys&quot;</span></span>
<span class="line"><span>						]</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;Cursor&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;PageInfo&quot;,</span></span>
<span class="line"><span>		&quot;Edges&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;PageInfo&quot;: {</span></span>
<span class="line"><span>		&quot;HasNextPage&quot;: false,</span></span>
<span class="line"><span>		&quot;HasPreviousPage&quot;: false,</span></span>
<span class="line"><span>		&quot;StartCursor&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>		&quot;EndCursor&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>		&quot;TotalCount&quot;: 1</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;Edges&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Node&quot;: {</span></span>
<span class="line"><span>				&quot;Key&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>				&quot;DisplayName&quot;: &quot;Admin&quot;,</span></span>
<span class="line"><span>				&quot;StructuralEntityKeys&quot;: [</span></span>
<span class="line"><span>					&quot;AAA&quot;</span></span>
<span class="line"><span>				]</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;Cursor&quot;: &quot;admin&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),o=[e];function l(u,i,q,c,r,d){return n(),s("div",null,o)}const y=t(p,[["render",l]]);export{h as __pageData,y as default};
