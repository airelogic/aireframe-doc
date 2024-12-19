import{_ as e,c as o,a3 as r,o as i}from"./chunks/framework.DtMx7FFi.js";const g=JSON.parse('{"title":"Transfer Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"feature-guide/configuration/configuration-transfers.md","filePath":"feature-guide/configuration/configuration-transfers.md"}'),a={name:"feature-guide/configuration/configuration-transfers.md"};function n(s,t,u,p,f,l){return i(),o("div",null,t[0]||(t[0]=[r('<h1 id="transfer-configuration" tabindex="-1">Transfer Configuration <a class="header-anchor" href="#transfer-configuration" aria-label="Permalink to &quot;Transfer Configuration&quot;">​</a></h1><p>This page details how to export and import a configuration into AireFrame. This allows you to easily transfer your configuration across multiple tenants.</p><h3 id="setup-git-repository" tabindex="-1">Setup Git Repository <a class="header-anchor" href="#setup-git-repository" aria-label="Permalink to &quot;Setup Git Repository&quot;">​</a></h3><p>In order to use the import/export functionality you will need to setup a git repository. This is where the configuration files will be written to and read from.</p><p>The git repository settings use <a href="https://vault.aireinnovate.com/swagger" target="_blank" rel="noreferrer">AireVault</a> variables and secrets so the configuration can be shared across products.</p><p>Once you have setup a git repository, you will be able to import and export AireFrame configuration.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All your configuration changes should be made in the development environment, tested and then exported.</p><p>Then you can import into the staging and production environments.</p></div><h4 id="export-configuration" tabindex="-1"><strong>Export Configuration</strong> <a class="header-anchor" href="#export-configuration" aria-label="Permalink to &quot;**Export Configuration**&quot;">​</a></h4><p>Exporting a configuration will generate a JSON file of the current configuration and write to the git repository as the latest version. If there are no existing versions, this will be version 1.</p><h4 id="import-configuration" tabindex="-1"><strong>Import Configuration</strong> <a class="header-anchor" href="#import-configuration" aria-label="Permalink to &quot;**Import Configuration**&quot;">​</a></h4><p>Importing a configuration will update any items that matches the key and type and create any that do not exist. If the import fails your configuration will revert to the what is was before the import started.</p><p>After clicking confirm the import job is run in the background as it may take some time. You will be notified on completion or failure.</p>',12)]))}const h=e(a,[["render",n]]);export{g as __pageData,h as default};