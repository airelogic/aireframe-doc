import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.CzsDe1xi.js";const i="/assets/subject-list-filter.BlIOvjoB.png",o="/assets/search.CfO0ZRxv.png",c="/assets/add-subject.BYcCFUn6.png",n="/assets/add-subject-form.BtG1PFpp.png",u="/assets/edit-subject.DKi5D-uN.png",l="/assets/invite-status.CALL4P1i.png",_=JSON.parse('{"title":"Subjects","description":"","frontmatter":{},"headers":[],"relativePath":"feature-guide/basics/subjects.md","filePath":"feature-guide/basics/subjects.md"}'),r={name:"feature-guide/basics/subjects.md"},h=s('<h1 id="subjects" tabindex="-1">Subjects <a class="header-anchor" href="#subjects" aria-label="Permalink to &quot;Subjects&quot;">​</a></h1><p>Subjects are the core of AireFrame, they are the entities that you record data against.</p><p>Subjects are completely configurable and can be tailored to your needs. To find out more about how to configure subjects, see the <a href="/feature-guide/configuration/subject.html">guide</a>.</p><h2 id="subject-lists" tabindex="-1">Subject Lists <a class="header-anchor" href="#subject-lists" aria-label="Permalink to &quot;Subject Lists&quot;">​</a></h2><p>The dashboard shows a list of subjects that you have access to within a particular structural entity. The subjects are displayed in a table format with the primary field of the subject displayed in the first column. The remaining columns will display fields from widgets that have been configured to be displayed on the &#39;Subject List&#39; section.</p><p>To change the structural entity, use the dropdown at the top of the page. Here you can search over the structural entities you have access to.</p><p><img src="'+i+'" alt="Location of the structural entity filter dropdown"></p><div class="tip custom-block"><p class="custom-block-title">Preview a subject</p><p>From the subject lists you can preview a subject by holding the <code>Ctrl</code> key and clicking on the subject. This will open the subject in a modal on the right-hand side of the page.</p></div><h2 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;Search&quot;">​</a></h2><p>The search bar located at the top of the page allows you to search across all the subjects you have access to.</p><p><img src="'+o+'" alt="Location of the search bar"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The behaviour of the search will depend on the subject provider you are using.</p><p>If you are using the internal subject provider, a fuzzy search is performed across all the subject fields (excluding computed fields).</p></div><h2 id="adding-a-subject" tabindex="-1">Adding a Subject <a class="header-anchor" href="#adding-a-subject" aria-label="Permalink to &quot;Adding a Subject&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The ability to add a subject will depend on the permissions you have been granted.</p><p>It will also only be available if the subject provider you are using provides the <code>SubjectWrite</code> capability</p></div><p>A subject can be added to the system by clicking the (+) button in the top left-hand corner of the page.</p><p><img src="'+c+'" alt="Location of the add subject button"></p><p>This will present you with a form to fill in the details of the subject. The fields that are displayed will depend on the configuration of the subject provider you are using.</p><p>When adding a subject you will need to select at least one structural entity to assign the subject to before you can save the subject.</p><p><img src="'+n+'" alt="Example add subject form"></p><h2 id="editing-a-subject" tabindex="-1">Editing a Subject <a class="header-anchor" href="#editing-a-subject" aria-label="Permalink to &quot;Editing a Subject&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The ability to edit a subject will depend on the permissions you have been granted.</p><p>It will also only be avaialable if the subject provider you are using provides the <code>SubjectWrite</code> capability</p></div><p>To edit a subject first navigate to the subject you want to edit. You can do this by searching for the subject or by clicking on the subject in the list of subjects.</p><p>Once you are on the subject page, click the edit button on the navigation bar on the left-hand side of the page.</p><p><img src="'+u+'" alt="Location of the edit button"></p><p>This will present you with a form to edit the details of the subject. The fields that are displayed will depend on the configuration of the subject provider you are using.</p><p>When editing a subject you will need to select at least one structural entity to assign the subject to before you can save the subject.</p><p>You can also change the structural entity assignment of the subject on this page.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>The structural entity assignment will take place immediately on clicking a structural entity. It does not require the subject to be saved.</p></div><h2 id="inviting-a-subject-to-the-portal" tabindex="-1">Inviting a Subject to the portal <a class="header-anchor" href="#inviting-a-subject-to-the-portal" aria-label="Permalink to &quot;Inviting a Subject to the portal&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You must have enabled the portal feature in the subject configuration to use this feature. See the guide <a href="/feature-guide/configuration/subject.html#subject-access-portal">here</a>.</p></div><p>To invite a subject to access the portal, go to the subject you want to invite and click the edit button.</p><p>At the bottom of the page, you will be shown the current invitation status of the subject.</p><p><img src="'+l+'" alt="Invite status"></p><ul><li>If the subject has not been invited you will see a button to invite the subject.</li><li>If the subject has already been invited you will be able to uninvite the subject, this will remove their access to the portal.</li><li>If the subject does not have a value for the linking field(s) you will not be able to invite the subject until you have filled in the required fields.</li></ul>',34),d=[h];function b(p,f,j,g,m,y){return a(),t("div",null,d)}const w=e(r,[["render",b]]);export{_ as __pageData,w as default};
