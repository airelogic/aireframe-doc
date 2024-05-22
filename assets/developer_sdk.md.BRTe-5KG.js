import{_ as a,c as e,o as s,a4 as n}from"./chunks/framework.CzsDe1xi.js";const v=JSON.parse('{"title":"AireFrame SDK","description":"","frontmatter":{},"headers":[],"relativePath":"developer/sdk.md","filePath":"developer/sdk.md"}'),t={name:"developer/sdk.md"},i=n(`<h1 id="aireframe-sdk" tabindex="-1">AireFrame SDK <a class="header-anchor" href="#aireframe-sdk" aria-label="Permalink to &quot;AireFrame SDK&quot;">​</a></h1><p>We publish a <em>C# ASP.Net Core</em> SDK that can be used to integrate AireFrame with custom data sources.</p><p>Currently the SDK targets <em>.NET 7</em> and <em>.NET 8</em>, please contact us if you need to target a different version.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>The SDK is published to a custom AzureDevops package feed. To access it you need to add a <em>NuGet.config</em> file to your project with the following:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>  &lt;packageSources&gt;</span></span>
<span class="line"><span>    &lt;add key=&quot;AireFrame&quot; value=&quot;https://pkgs.dev.azure.com/AireLogic/Public/_packaging/AireFrame/nuget/v3/index.json&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/packageSources&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p>Then install the package into your project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Install-Package AireLogic.AireFrame.DataProviderSdk</span></span></code></pre></div><p>Or:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dotnet add package AireLogic.AireFrame.DataProviderSdk</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>These are the interfaces you can implement:</p><ul><li><code>ISubjectProvider</code>, <code>ISubjectLocationProvider</code>, <code>IStructureTypeProvider</code>, <code>IStructuralEntityProvider</code>, <code>IGroupProvider</code> (or their read-only counterparts)</li><li><code>IStructuredDataProvider</code></li></ul><p>In <code>Startup.ConfigureServices</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>services</span></span>
<span class="line"><span>    .AddDataProviderServer&lt;YourDataSource&gt;(</span></span>
<span class="line"><span>        new DataProviderServerSettings(</span></span>
<span class="line"><span>            new AuthOptions(</span></span>
<span class="line"><span>                AUHTORITY_HOST,</span></span>
<span class="line"><span>                ISSUER_HOST,</span></span>
<span class="line"><span>                AUDIENCE)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    .AddSubjectProvider&lt;YourSubjectProviderImplementation, YourSubjectLocationProviderImplementation, YourStructureTypeProvider, YourStructuralEntityProvider, YourGroupProvider&gt;() // Or .AddReadOnlySubjectProvider</span></span>
<span class="line"><span>    .AddStructuredDataProvider&lt;YourStructuredDataProviderImplementation&gt;(o =&gt; {</span></span>
<span class="line"><span>        // This adds the IDataChangeNotificationClient which enables caching of structured data</span></span>
<span class="line"><span>        options.ServerConfiguration = new AireFrameServerConfiguration(GrpcEndpoint, ClientCredentials);</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>In <code>Startup.Configure</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>app.UseDataProviderServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>..</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.UseEndpoints(endpoints =&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    endpoints.MapDataProvider();</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Our Data Provider SDK supports configuring data sources with distinct read-only and read-write capabilities. This allows you to tailor the behavior based on runtime conditions.</p><ul><li>Read-Only Capabilities: For scenarios where data modification is not required or should be restricted. Use <code>ReadOnlySubjectProviderOptions</code> to configure data sources that should only support read operations.</li><li>Read-Write Capabilities: Use <code>ReadWriteSubjectProviderOptions</code> for data sources that require both read and write operations. These options also support dynamically setting the data source to read-only mode based on runtime conditions.</li></ul><p>In <code>Startup.ConfigureServices</code>:</p><ol><li>Define Read-Write Capabilities</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>services</span></span>
<span class="line"><span>    .AddDataProviderServer&lt;YourDataSource&gt;(</span></span>
<span class="line"><span>        // Configuration settings</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    .AddSubjectProvider&lt;YourSubjectProviderImplementation, YourSubjectLocationProviderImplementation&gt;(options =&gt; {</span></span>
<span class="line"><span>      options.Lifetime = ServiceLifetime.Scoped;</span></span>
<span class="line"><span>      // Configure dynamic read-only check</span></span>
<span class="line"><span>      options.IsReadOnly = (serviceProvider, dataSourceContext) =&gt; {</span></span>
<span class="line"><span>          // Insert logic to determine if the provider should be read-only</span></span>
<span class="line"><span>          return Task.FromResult(false); // Example: dynamically determine based on context</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .AddStructuredDataProvider&lt;YourStructuredDataProviderImplementation&gt;()</span></span>
<span class="line"><span>    .AddEventHandler&lt;YourEventHandlerImplementation&gt;();</span></span></code></pre></div><ol start="2"><li>Define Read-Only Capabilities</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>services.AddDataProviderServer&lt;YourDataSource&gt;(config =&gt; {</span></span>
<span class="line"><span>    // Configuration settings</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.AddReadOnlySubjectProvider&lt;ReadOnlySubjectProvider, ReadOnlySubjectLocationProvider&gt;(options =&gt; {</span></span>
<span class="line"><span>    options.Lifetime = ServiceLifetime.Scoped;</span></span>
<span class="line"><span>    // Read-only options do not require IsReadOnly configuration</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><p>To setup authentication for your service you need to create an client and a scope on the authority server that AireFrame is using. For cloud-hosted AireFrame production this is <a href="https://identity.aireinrelatednovate.com" target="_blank" rel="noreferrer">AireIdentity</a></p><p>This address is what you need to provide for both the <code>AUHTORITY_HOST</code> and <code>ISSUER_HOST</code> values. The scope you created will be the <code>AUDIENCE</code> value.</p><h3 id="storage-libraries" tabindex="-1">Storage Libraries <a class="header-anchor" href="#storage-libraries" aria-label="Permalink to &quot;Storage Libraries&quot;">​</a></h3><p>In order to make it easier to implement the SDK we have created a storage library that can be used to store data in a Postgres. This is available as NuGet package <code>AireLogic.AireFrame.DataProvider.Storage.PostgreSql</code>.</p>`,30),o=[i];function p(r,l,c,d,u,h){return s(),e("div",null,o)}const m=a(t,[["render",p]]);export{v as __pageData,m as default};
