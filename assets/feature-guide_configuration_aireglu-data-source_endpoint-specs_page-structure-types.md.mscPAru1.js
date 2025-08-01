import{_ as s,o as n,c as a,ag as p}from"./chunks/framework.BWkngeNr.js";const d=JSON.parse('{"title":"page-structure-types","description":"","frontmatter":{"next":{"text":"page-subjects","link":"/feature-guide/configuration/aireglu-data-source/endpoint-specs/page-subjects"}},"headers":[],"relativePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/page-structure-types.md","filePath":"feature-guide/configuration/aireglu-data-source/endpoint-specs/page-structure-types.md","lastUpdated":1753988516000}'),e={name:"feature-guide/configuration/aireglu-data-source/endpoint-specs/page-structure-types.md"};function o(l,t,u,i,q,c){return n(),a("div",null,t[0]||(t[0]=[p(`<h1 id="page-structure-types" tabindex="-1">page-structure-types <a class="header-anchor" href="#page-structure-types" aria-label="Permalink to &quot;page-structure-types&quot;">​</a></h1><h2 id="specification-version" tabindex="-1">Specification Version <a class="header-anchor" href="#specification-version" aria-label="Permalink to &quot;Specification Version&quot;">​</a></h2><p>Version: <code>&quot;1&quot;</code></p><h2 id="context-and-rules" tabindex="-1">Context and rules <a class="header-anchor" href="#context-and-rules" aria-label="Permalink to &quot;Context and rules&quot;">​</a></h2><p>Required for the <code>SubjectRead</code> capability.</p><p>Returns paged structure types based on a search term or whether they are subject assignable.</p><h2 id="endpoint-specification" tabindex="-1">Endpoint specification <a class="header-anchor" href="#endpoint-specification" aria-label="Permalink to &quot;Endpoint specification&quot;">​</a></h2><ul><li><strong>Name</strong>: <code>endpoint-prefix</code>-aireframe-page-structure-types</li><li><strong>Verb</strong>: POST</li><li><strong>Authentication</strong>: Client credentials</li></ul><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;page-structure-types-request&quot;,</span></span>
<span class="line"><span>	&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>	&quot;properties&quot;: {</span></span>
<span class="line"><span>		&quot;Filter&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;additionalProperties&quot;: false,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;SubjectAssignable&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;boolean&quot;,</span></span>
<span class="line"><span>						&quot;null&quot;</span></span>
<span class="line"><span>					]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;SearchTerm&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;PagingRequest&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>			&quot;additionalProperties&quot;: false,</span></span>
<span class="line"><span>			&quot;properties&quot;: {</span></span>
<span class="line"><span>				&quot;After&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Request items after the node with provided cursor&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;Before&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Request items before the node with provided cursor&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;First&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;integer&quot;,</span></span>
<span class="line"><span>						&quot;null&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Request the first x items&quot;,</span></span>
<span class="line"><span>					&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;Last&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;integer&quot;,</span></span>
<span class="line"><span>						&quot;null&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Request the last x items.&quot;,</span></span>
<span class="line"><span>					&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;OrderBy&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					],</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Gets the key of the field to order by.&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;OrderDirection&quot;: {</span></span>
<span class="line"><span>					&quot;description&quot;: &quot;Gets the direction to order by.&quot;,</span></span>
<span class="line"><span>					&quot;oneOf&quot;: [</span></span>
<span class="line"><span>						{</span></span>
<span class="line"><span>							&quot;type&quot;: &quot;null&quot;</span></span>
<span class="line"><span>						},</span></span>
<span class="line"><span>						{</span></span>
<span class="line"><span>							&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>							&quot;enum&quot;: [</span></span>
<span class="line"><span>								&quot;Ascending&quot;,</span></span>
<span class="line"><span>								&quot;Descending&quot;</span></span>
<span class="line"><span>							]</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>					]</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Filter&quot;: {</span></span>
<span class="line"><span>	    &quot;SearchTerm&quot;: null,</span></span>
<span class="line"><span>	    &quot;SubjectAssignable&quot;: true</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;PagingRequest&quot;: {</span></span>
<span class="line"><span>	    &quot;After&quot;: null,</span></span>
<span class="line"><span>	    &quot;Before&quot;: null,</span></span>
<span class="line"><span>	    &quot;First&quot;: null,</span></span>
<span class="line"><span>	    &quot;Last&quot;: null,</span></span>
<span class="line"><span>	    &quot;OrderBy&quot;: null,</span></span>
<span class="line"><span>	    &quot;OrderDirection&quot;: null</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><ul><li><strong>Format</strong>: JSON</li><li><strong>Schema</strong>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>	&quot;title&quot;: &quot;page-structure-types-response&quot;,</span></span>
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
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;EndCursor&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: [</span></span>
<span class="line"><span>						&quot;null&quot;,</span></span>
<span class="line"><span>						&quot;string&quot;</span></span>
<span class="line"><span>					]</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				&quot;TotalCount&quot;: {</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;integer&quot;,</span></span>
<span class="line"><span>					&quot;format&quot;: &quot;int32&quot;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;required&quot;: [</span></span>
<span class="line"><span>				&quot;HasNextPage&quot;,</span></span>
<span class="line"><span>				&quot;HasPreviousPage&quot;,</span></span>
<span class="line"><span>				&quot;TotalCount&quot;</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;Edges&quot;: {</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>			&quot;items&quot;: {</span></span>
<span class="line"><span>				&quot;required&quot;: [</span></span>
<span class="line"><span>					&quot;Cursor&quot;,</span></span>
<span class="line"><span>					&quot;Node&quot;</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				&quot;properties&quot;: {</span></span>
<span class="line"><span>					&quot;Node&quot;: {</span></span>
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
<span class="line"><span>							&quot;CustomFields&quot;: {</span></span>
<span class="line"><span>								&quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>								&quot;items&quot;: {</span></span>
<span class="line"><span>									&quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>									&quot;properties&quot;: {</span></span>
<span class="line"><span>										&quot;Key&quot;: {</span></span>
<span class="line"><span>											&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>										},</span></span>
<span class="line"><span>										&quot;Name&quot;: {</span></span>
<span class="line"><span>											&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>										},</span></span>
<span class="line"><span>										&quot;IsRequired&quot;: {</span></span>
<span class="line"><span>											&quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>										},</span></span>
<span class="line"><span>										&quot;FieldType&quot;: {</span></span>
<span class="line"><span>											&quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>											&quot;enum&quot;: [</span></span>
<span class="line"><span>												&quot;Text&quot;,</span></span>
<span class="line"><span>												&quot;Email&quot;,</span></span>
<span class="line"><span>												&quot;Number&quot;,</span></span>
<span class="line"><span>												&quot;PhoneNumber&quot;,</span></span>
<span class="line"><span>												&quot;DateTime&quot;,</span></span>
<span class="line"><span>												&quot;Date&quot;,</span></span>
<span class="line"><span>												&quot;Time&quot;,</span></span>
<span class="line"><span>												&quot;UserIdentifier&quot;</span></span>
<span class="line"><span>											]</span></span>
<span class="line"><span>										}</span></span>
<span class="line"><span>									},</span></span>
<span class="line"><span>									&quot;required&quot;: [</span></span>
<span class="line"><span>										&quot;Key&quot;,</span></span>
<span class="line"><span>										&quot;DisplayName&quot;,</span></span>
<span class="line"><span>										&quot;IsRequired&quot;,</span></span>
<span class="line"><span>										&quot;FieldType&quot;</span></span>
<span class="line"><span>									]</span></span>
<span class="line"><span>								}</span></span>
<span class="line"><span>							}</span></span>
<span class="line"><span>						},</span></span>
<span class="line"><span>						&quot;required&quot;: [</span></span>
<span class="line"><span>							&quot;Key&quot;,</span></span>
<span class="line"><span>							&quot;DisplayName&quot;,</span></span>
<span class="line"><span>							&quot;IsSubjectAssignable&quot;</span></span>
<span class="line"><span>						]</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					&quot;Cursor&quot;: {</span></span>
<span class="line"><span>						&quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;required&quot;: [</span></span>
<span class="line"><span>		&quot;PageInfo&quot;,</span></span>
<span class="line"><span>		&quot;Edges&quot;</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>Example</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;PageInfo&quot;: {</span></span>
<span class="line"><span>		&quot;HasNextPage&quot;: false,</span></span>
<span class="line"><span>		&quot;HasPreviousPage&quot;: false,</span></span>
<span class="line"><span>		&quot;StartCursor&quot;: &quot;division&quot;,</span></span>
<span class="line"><span>		&quot;EndCursor&quot;: &quot;dept&quot;,</span></span>
<span class="line"><span>		&quot;TotalCount&quot;: 2</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;Edges&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Node&quot;: {</span></span>
<span class="line"><span>				&quot;Key&quot;: &quot;division&quot;,</span></span>
<span class="line"><span>				&quot;DisplayName&quot;: &quot;Division&quot;,</span></span>
<span class="line"><span>				&quot;IsSubjectAssignable&quot;: true</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;Cursor&quot;: &quot;division&quot;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;Node&quot;: {</span></span>
<span class="line"><span>				&quot;Key&quot;: &quot;dept&quot;,</span></span>
<span class="line"><span>				&quot;DisplayName&quot;: &quot;Department&quot;,</span></span>
<span class="line"><span>				&quot;IsSubjectAssignable&quot;: true</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;Cursor&quot;: &quot;dept&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="previous-versions" tabindex="-1">Previous versions <a class="header-anchor" href="#previous-versions" aria-label="Permalink to &quot;Previous versions&quot;">​</a></h2><p>None</p>`,20)]))}const g=s(e,[["render",o]]);export{d as __pageData,g as default};
