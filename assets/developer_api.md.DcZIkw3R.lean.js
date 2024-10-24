import{_ as s,c as e,a3 as n,o as t}from"./chunks/framework.ohJJpums.js";const q=JSON.parse('{"title":"API","description":"","frontmatter":{"prev":false},"headers":[],"relativePath":"developer/api.md","filePath":"developer/api.md"}'),p={name:"developer/api.md"};function o(i,a,l,u,c,d){return t(),e("div",null,a[0]||(a[0]=[n(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><p>This page explains how to create use AireFrame&#39;s APIs to build custom integrations.</p><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><p>All integration APIs require a bearer token provided by AireIdentity using the OAuth client credentials</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>These APIs cannot be called with a user&#39;s token</p></div><p>To get a client credentials token you must have setup an AireIdentity client that can request the <code>AireFrameApi</code> scope.</p><p>Example Request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST https://identity.aireinnovate.com/connect/token</span></span>
<span class="line"><span>CONTENT-TYPE application/x-www-form-urlencoded</span></span>
<span class="line"><span>client_id=[MY_CLIENT]&amp;</span></span>
<span class="line"><span>client_secret=[MY_CLIENT_SECRET]&amp;</span></span>
<span class="line"><span>grant_type=client_credentials&amp;</span></span>
<span class="line"><span>tenant_key=[MY_TENANT_ENVIRONMENT_KEY]&amp;</span></span>
<span class="line"><span>scope=AireFrameApi</span></span></code></pre></div><h2 id="unsolicited-inbound-subject-api" tabindex="-1">Unsolicited Inbound Subject API <a class="header-anchor" href="#unsolicited-inbound-subject-api" aria-label="Permalink to &quot;Unsolicited Inbound Subject API&quot;">​</a></h2><p>AireFrame can handle unsolicited subject create/update messages provided that the unsolicited inbound configuration has been set for the tenant see <a href="/feature-guide/configuration/subject.html#unsolicited-inbound-messages">here</a>.</p><p>Endpoint: <code>/api/v1/messaging/subject</code></p><p>Body:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;customFieldValues&quot;: {</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;value&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;structuralEntityKeys&quot;: [&quot;key&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Where:</p><ul><li><code>customFieldValues</code> is a required dictionary of tenant custom field keys and the subject values</li><li><code>structuralEntityKeys</code> is an optional list of structural entity keys, for behaviour see <a href="/feature-guide/configuration/subject.html#override-structural-entity-assignment-behaviour">here</a>.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The matching field(s) must always be present on the inbound message.</p><p>If a subject exists, all other fields are optional and the provided fields will be updated on the subject.</p><p>If the subject does not exist, all required fields must be provided.</p></div><p>The response will be the created subject:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;internalId&quot;: &quot;d6df60bb-0c6d-47ab-855b-23c98d58ee79&quot;,</span></span>
<span class="line"><span>    &quot;externalId&quot;: &quot;b38a64fe-df82-4510-92bb-314e26ff5509&quot;,</span></span>
<span class="line"><span>    &quot;customFieldValues&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;customField&quot;: {</span></span>
<span class="line"><span>                &quot;id&quot;: &quot;0eabc586-c18a-4ff5-8883-081e1615ea72&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;value&quot;: &quot;value&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Where <code>internalId</code> is AireFrame&#39;s subject identifier</p><h2 id="create-subject-form-api" tabindex="-1">Create Subject Form API <a class="header-anchor" href="#create-subject-form-api" aria-label="Permalink to &quot;Create Subject Form API&quot;">​</a></h2><p>Endpoint: <code>/api/v1/messaging/form</code></p><p>Body:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;subjectId&quot;: guid,</span></span>
<span class="line"><span>    &quot;key&quot;: string,</span></span>
<span class="line"><span>    &quot;version&quot;: integer (optional),</span></span>
<span class="line"><span>    &quot;correlationId&quot;: string (optional),</span></span>
<span class="line"><span>    &quot;userId&quot;: string (optional)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Where:</p><ul><li><code>subjectId</code> is AireFrame&#39;s internal identifier for the subject</li><li><code>key</code> is the key for the form that is to be created</li><li><code>version</code> is the optional version of the form that is to be created, if omitted it will default to the latest version of the form</li><li><code>correlationId</code> is an optional identifier to group together forms and events</li><li><code>userId</code> is an optional identifier of the user who should be shown the created form if they are currently active</li></ul><p>The response will be the created form:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;instanceId&quot;: &quot;56ba2e87-32db-423f-ab11-997cc81b3dfb&quot;,</span></span>
<span class="line"><span>    &quot;subjectId&quot;: &quot;f0a8a0ec-6eba-43d9-bcf9-029315876b59&quot;,</span></span>
<span class="line"><span>    &quot;createdAt&quot;: &quot;2022-08-10T14:45:06.54816Z&quot;,</span></span>
<span class="line"><span>    &quot;viewLink&quot;: &quot;https://localhost:9000/patient/f0a8a0ec-6eba-43d9-bcf9-029315876b59/instance/56ba2e87-32db-423f-ab11-997cc81b3dfb/view&quot;,</span></span>
<span class="line"><span>    &quot;editLink&quot;: &quot;https://localhost:9000/patient/f0a8a0ec-6eba-43d9-bcf9-029315876b59/instance/56ba2e87-32db-423f-ab11-997cc81b3dfb/edit&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="data-set-api" tabindex="-1">Data Set API <a class="header-anchor" href="#data-set-api" aria-label="Permalink to &quot;Data Set API&quot;">​</a></h2><p>Endpoint: <code>api/v1/dataSet/{dataExtractKey}/refresh</code></p><p>Where:</p><ul><li><code>dataExtractKey</code> is the key of the data extract you want to refresh the data set for</li></ul><p>Returns:</p><ul><li><code>200 OK</code> - If the data set was successfully refreshed</li><li><code>404 Not Found</code> - If the data extract key does not exist</li></ul><h2 id="users-api" tabindex="-1">Users API <a class="header-anchor" href="#users-api" aria-label="Permalink to &quot;Users API&quot;">​</a></h2><p>Endpoint: <code>api/v1/users</code></p><p>By default returns all active users. Results can be modified with the below query params.</p><p>Supported Query Params:</p><ul><li><code>searchTerm</code> - For searching users by name</li><li><code>includeInactive</code> - For including inactive users</li><li><code>withAccessToSubjectId</code> - For filtering down to users who have access to the subject via groups and the associated structural entities. Note: this is the AireFrame subjectId</li></ul><p>Example response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>[{</span></span>
<span class="line"><span>    id: &quot;user-identifier&quot;,</span></span>
<span class="line"><span>    displayName: &quot;Test User&quot;</span></span>
<span class="line"><span>}]</span></span></code></pre></div><h2 id="subject-api" tabindex="-1">Subject API <a class="header-anchor" href="#subject-api" aria-label="Permalink to &quot;Subject API&quot;">​</a></h2><p>Endpoint: <code>api/v1/subject/{subjectId}</code></p><p>Returns details about a subject given their internal id.</p><p>Where:</p><ul><li><code>subjectId</code> is AireFrame&#39;s internal identifier for the subject</li></ul><p>Example response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Id&quot;: &quot;c4e44f3d-f7c8-42f7-a9c7-c1e6d35c714b&quot;,</span></span>
<span class="line"><span>	&quot;ExternalId&quot;: &quot;6c5827d9-ae1e-4581-826b-7884596f929c&quot;,</span></span>
<span class="line"><span>	&quot;CustomFieldValues&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;DataType&quot;: &quot;String&quot;,</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;given_names&quot;,</span></span>
<span class="line"><span>			&quot;Name&quot;: &quot;Given Names&quot;,</span></span>
<span class="line"><span>			&quot;Value&quot;: &quot;Isaac&quot;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>			&quot;DataType&quot;: &quot;String&quot;,</span></span>
<span class="line"><span>			&quot;Key&quot;: &quot;family_name&quot;,</span></span>
<span class="line"><span>			&quot;Name&quot;: &quot;Family Name&quot;,</span></span>
<span class="line"><span>			&quot;Value&quot;: &quot;Newton&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="update-structural-entity-api" tabindex="-1">Update Structural Entity API <a class="header-anchor" href="#update-structural-entity-api" aria-label="Permalink to &quot;Update Structural Entity API&quot;">​</a></h2><p>Endpoint: <code>api/v1/structuralEntity</code></p><p>Body:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;Key&quot;: string,</span></span>
<span class="line"><span>    &quot;DisplayName&quot;: string,</span></span>
<span class="line"><span>    &quot;ParentKey&quot;: string (optional),</span></span>
<span class="line"><span>    &quot;StructureTypeKey&quot;: string,</span></span>
<span class="line"><span>    &quot;CustomFieldValues&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;Key&quot;: string,</span></span>
<span class="line"><span>            &quot;Value&quot;: {</span></span>
<span class="line"><span>                &quot;&lt;DataType&gt;&quot;: {</span></span>
<span class="line"><span>                    &quot;Value&quot;: &lt;Value&gt;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Where:</p><ul><li><code>Key</code> is the key for the existing structural entity</li><li><code>DisplayName</code> is the new display name for the existing structural entity</li><li><code>ParentKey</code> is the key of the new parent to this structural entity</li><li><code>StructureTypeKey</code> is the key of the related structure type</li><li><code>CustomFieldValues</code> is an array of values for the custom fields from the structure type</li></ul><h3 id="customfieldvalues-array" tabindex="-1"><code>CustomFieldValues</code> Array <a class="header-anchor" href="#customfieldvalues-array" aria-label="Permalink to &quot;\`CustomFieldValues\` Array&quot;">​</a></h3><p>The <code>CustomFieldValues</code> array contains key-value pairs, where each <code>Key</code> references the assossiated custom field on the structure type, and the corresponding <code>Value</code> holds its respective data.</p><p>The <code>Value</code> object can contain various data types, such as <code>Boolean</code>, <code>String</code>, <code>Integer</code>, <code>Decimal</code>, <code>DateTime</code>, <code>Date</code>, <code>Time</code>, and <code>UserIdentifier</code>.</p><div class="warning custom-block"><p class="custom-block-title">Important</p><p>Only one of these should be supplied for each CustomFieldValues object.</p></div><h4 id="object-structure" tabindex="-1">Object Structure <a class="header-anchor" href="#object-structure" aria-label="Permalink to &quot;Object Structure&quot;">​</a></h4><ul><li><code>Key</code> is the key for the custom field</li><li><code>Value</code> is an object representing one of the following key value pairs <ul><li><code>Boolean</code> (object): Contains a <code>Value</code> property for a boolean value.</li><li><code>String</code> (object): Contains a <code>Value</code> property for string data.</li><li><code>Integer</code> (object): Contains a <code>Value</code> property for an integer value.</li><li><code>Decimal</code> (object): Contains a <code>Value</code> property for a decimal value.</li><li><code>DateTime</code> (object): Contains a <code>Value</code> property for a date time value.</li><li><code>Date</code> (object): Contains a <code>Value</code> property for a date value.</li><li><code>Time</code> (object): Contains a <code>Value</code> property for a time value.</li><li><code>UserIdentifier</code> (object): Contains a <code>Value</code> property for a user identifier.</li></ul></li></ul><h3 id="example-request" tabindex="-1">Example Request <a class="header-anchor" href="#example-request" aria-label="Permalink to &quot;Example Request&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;Key&quot;: &quot;name&quot;,</span></span>
<span class="line"><span>    &quot;DisplayName&quot;: &quot;Name&quot;,</span></span>
<span class="line"><span>    &quot;ParentKey&quot;: &quot;parent-key&quot;,</span></span>
<span class="line"><span>    &quot;StructureTypeKey&quot;: &quot;structure-type-key&quot;,</span></span>
<span class="line"><span>    &quot;CustomFieldValues&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;Key&quot;: &quot;city&quot;,</span></span>
<span class="line"><span>            &quot;Value&quot;: {</span></span>
<span class="line"><span>                &quot;String&quot;: {</span></span>
<span class="line"><span>                    &quot;Value&quot;: &quot;London&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>The Response will be the updated Structural Entity:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;TypeName&quot;: &quot;StructuralEntity&quot;,</span></span>
<span class="line"><span>  &quot;Key&quot;: &quot;9718d040-5f2d-4a56-9771-9140a06e460e&quot;,</span></span>
<span class="line"><span>  &quot;DisplayName&quot;: &quot;New Name&quot;,</span></span>
<span class="line"><span>  &quot;ParentKey&quot;: null,</span></span>
<span class="line"><span>  &quot;Depth&quot;: 1,</span></span>
<span class="line"><span>  &quot;StructureType&quot;: {</span></span>
<span class="line"><span>    &quot;Name&quot;: &quot;name&quot;,</span></span>
<span class="line"><span>    &quot;Key&quot;: &quot;188913dc-95cf-408b-ae52-cea05aee921c&quot;,</span></span>
<span class="line"><span>    &quot;SubjectAssignable&quot;: true,</span></span>
<span class="line"><span>    &quot;CustomFields&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;City&quot;,</span></span>
<span class="line"><span>        &quot;Key&quot;: &quot;city&quot;,</span></span>
<span class="line"><span>        &quot;Type&quot;: {</span></span>
<span class="line"><span>          &quot;$type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;Required&quot;: false,</span></span>
<span class="line"><span>        &quot;TypeName&quot;: &quot;InputField&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;CustomFieldValues&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;Field&quot;: {</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;City&quot;,</span></span>
<span class="line"><span>        &quot;Key&quot;: &quot;city&quot;,</span></span>
<span class="line"><span>        &quot;Type&quot;: {</span></span>
<span class="line"><span>          &quot;$type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;Required&quot;: false,</span></span>
<span class="line"><span>        &quot;TypeName&quot;: &quot;InputField&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;Value&quot;: {</span></span>
<span class="line"><span>        &quot;$type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>        &quot;DataType&quot;: &quot;String&quot;,</span></span>
<span class="line"><span>        &quot;Value&quot;: &quot;London&quot;,</span></span>
<span class="line"><span>        &quot;ValueText&quot;: &quot;London&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,63)]))}const h=s(p,[["render",o]]);export{q as __pageData,h as default};
