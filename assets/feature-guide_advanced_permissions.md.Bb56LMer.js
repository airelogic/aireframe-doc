import{_ as e,c as s,o as t,a4 as i}from"./chunks/framework.CzsDe1xi.js";const m=JSON.parse('{"title":"Permissions","description":"","frontmatter":{},"headers":[],"relativePath":"feature-guide/advanced/permissions.md","filePath":"feature-guide/advanced/permissions.md"}'),o={name:"feature-guide/advanced/permissions.md"},r=i('<h1 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h1><p>Permissions, policies and roles are configured in <a href="https://identity.aireinnovate.com" target="_blank" rel="noreferrer">AireIdentity</a>.</p><h2 id="resource-restrictions" tabindex="-1">Resource Restrictions <a class="header-anchor" href="#resource-restrictions" aria-label="Permalink to &quot;Resource Restrictions&quot;">​</a></h2><p>Resource restrictions are used to restrict access to specific resources based on the user&#39;s roles. They are defined by using the <a href="https://docs.identity.aireinnovate.com/docs/policy-management-overview/" target="_blank" rel="noreferrer">policy feature</a> in AireIdentity.</p><div class="tip custom-block"><p class="custom-block-title">Example: Subject Custom Field Values</p><p>Given you have a custom field called <code>firstName</code> within the group <code>personal-details</code> and the subject <code>subject1</code>.</p><p>You can define the following statements:</p><ul><li><code>Field/*</code> - This targets all fields for all subjects.</li><li><code>Field/firstName</code> - This targets the field <code>firstName</code> for all subjects.</li><li><code>FieldGroup/*</code> - This targets all field groups for all subjects.</li><li><code>FieldGroup/personal-details</code> - This targets the group <code>personal-details</code> for all subjects.</li><li><code>Subject/*</code> - This targets all fields for all subjects.</li><li><code>Subject/subject1</code> - This targets all the fields for the subject <code>subject1</code>.</li><li><code>Subject/subject1/Field/firstName</code> - This targets the field <code>firstName</code> for the subject <code>subject1</code>.</li><li><code>Subject/subject1/FieldGroup/personal-details</code> - This targets the group <code>personal-details</code> for the subject <code>subject1</code>.</li></ul></div>',5),a=[r];function c(d,l,n,u,p,h){return t(),s("div",null,a)}const b=e(o,[["render",c]]);export{m as __pageData,b as default};
