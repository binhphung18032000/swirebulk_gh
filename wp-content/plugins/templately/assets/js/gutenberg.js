(()=>{"use strict";const e=window.wp.hooks;var t,n;window.wp.data,window.wp.editor,t=jQuery,n={cacheElements:function(){var e=this;e.cache={},e.cache.$gutenberg=t("#editor"),e.cache.$switchMode=t(t("#templately-gutenberg-button-switch-mode").html()),e.cache.$switchGutenbergButton=e.cache.$switchMode.find("#templately-gutenberg-button"),e.cache.$templateSaveButton=e.cache.$switchMode.find("#templately-cloud-push"),e.bindEvents(),wp.data.subscribe((function(){setTimeout((function(){e.buildPanel()}),1)}))},buildPanel:function(){var e=this;e.cache.$gutenberg.find("#templately-gutenberg-buttons").length||e.cache.$switchMode.insertAfter(e.cache.$gutenberg.find(".edit-post-header-toolbar__left"))},bindEvents:function(){this.cache.$switchGutenbergButton.on("click",(function(e){window.TemplatelyAppManager.open(null,"templately-gutenberg","gutenberg")})),this.cache.$templateSaveButton.on("click",(function(e){window.TemplatelyAppManager.open({route:"clouds/save-template"},"templately-gutenberg","gutenberg")}))},init:function(){this.cacheElements(),(0,e.addFilter)("blockEditor.__unstableCanInsertBlockType","removePostContentFromInserter",(function(e,t,n,c){return c.getBlockParentsByBlockName,"core/post-content"===t.name||"core/template-part"===t.name||e}),100)}},t(document).ready((function(){n.init()}))})();