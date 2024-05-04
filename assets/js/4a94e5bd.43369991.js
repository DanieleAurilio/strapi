"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7649],{828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=i(4848),s=i(8453);const r=i.p+"assets/images/rbac-edit-page-e02c95f3d0e6fddb85782ebfe5610f7c.png",d={title:"How Permissions Work",tags:["permissions","RBAC"]},o=void 0,c={id:"docs/core/admin/permissions/how-they-work",title:"How Permissions Work",description:"Overview",source:"@site/docs/docs/01-core/admin/02-permissions/01-how-they-work.mdx",sourceDirName:"docs/01-core/admin/02-permissions",slug:"/docs/core/admin/permissions/how-they-work",permalink:"/docs/core/admin/permissions/how-they-work",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/02-permissions/01-how-they-work.mdx",tags:[{label:"permissions",permalink:"/tags/permissions"},{label:"RBAC",permalink:"/tags/rbac"}],version:"current",sidebarPosition:1,frontMatter:{title:"How Permissions Work",tags:["permissions","RBAC"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/permissions"},next:{title:"Fetching Permissions",permalink:"/docs/core/admin/permissions/frontend/fetching-permissions"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Actions",id:"actions",level:2},{value:"Action definition",id:"action-definition",level:3},{value:"Register an action",id:"register-an-action",level:3},{value:"Parametrize actions",id:"parametrize-actions",level:3},{value:"Conditions",id:"conditions",level:2},{value:"Condition definition",id:"condition-definition",level:3},{value:"Registering a condition",id:"registering-a-condition",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Permission definition",id:"permission-definition",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The RBAC permission system relies under the hood on the ",(0,t.jsx)(n.a,{href:"https://casl.js.org",children:"CASL"})," library."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"permission"})," is the combination of an ",(0,t.jsx)(n.code,{children:"action"}),", a ",(0,t.jsx)(n.code,{children:"subject"}),", some ",(0,t.jsx)(n.code,{children:"properties"})," and some ",(0,t.jsx)(n.code,{children:"conditions"}),".\nThe logic is that: a user can perform an ",(0,t.jsx)(n.code,{children:"action"})," on a ",(0,t.jsx)(n.code,{children:"subject"})," and some of its ",(0,t.jsx)(n.code,{children:"properties"})," only if it its role has the ",(0,t.jsx)(n.code,{children:"permission"})," and if the ",(0,t.jsx)(n.code,{children:"conditions"})," associated to the permission pass.\nThe creation and edition of permissions is done through the ",(0,t.jsx)(n.a,{href:"http://localhost:1337/admin/settings/roles/2",children:"edit page"})," of a role by checking or unchecking checkboxes."]}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: the action ",(0,t.jsx)(n.code,{children:"update"})," can be applied on the subject ",(0,t.jsx)(n.code,{children:"article"})," and property ",(0,t.jsx)(n.code,{children:"title"}),", this result is the permission to update the title of an article."]}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: the condition ",(0,t.jsx)(n.code,{children:"isCreator"})," added to the previous permission will ensure that only the creator of the article can update the title."]}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: the action ",(0,t.jsx)(n.code,{children:"access the Marketplace page"})," has no subject to apply on. The permission only contains the action ",(0,t.jsx)(n.code,{children:"admin::marketplace.read"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The permissions are attached to a role. Each role can have different permissions independentely. There is no inheritance system.\nTo check if an action can be performed by a user, frontend and backend simply retrieve the list of the permissions associated with the user's roles and check if it contains the permission associated with the action about to be performed. The backend also runs the associated conditions."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If a user has several role, the user will be allowed to perform an action if at least one of its roles is allowed to perform it."})}),"\n",(0,t.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.h3,{id:"action-definition",children:"Action definition"}),"\n",(0,t.jsx)(n.p,{children:"An action contains the following information:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"description"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"uid"})}),(0,t.jsx)(n.td,{children:"An id that has to be unique within the plugin."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'audit-logs.read'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"pluginName"})}),(0,t.jsx)(n.td,{children:"Name of the plugin registrering the action."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'api'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'admin'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"section"})}),(0,t.jsxs)(n.td,{children:["Name of the section among ",(0,t.jsx)(n.code,{children:"contentTypes"}),", ",(0,t.jsx)(n.code,{children:"plugins"}),", ",(0,t.jsx)(n.code,{children:"settings"})," and ",(0,t.jsx)(n.code,{children:"internal"}),". It will define in which permission tab the action will appear. ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"internal"})," is not displayed in any tab but used for internal purposes."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'settings'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"category"})}),(0,t.jsxs)(n.td,{children:["Name of the category. It will define in which category the action will appear. ",(0,t.jsx)(n.em,{children:"Only for the plugins and settings section"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'audit logs'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"subCategory"})}),(0,t.jsxs)(n.td,{children:["Name of the subcategory. It will define in which subcategory or the category the action will appear. ",(0,t.jsx)(n.em,{children:"Only for the plugins and settings section"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'options'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"displayName"})}),(0,t.jsx)(n.td,{children:"Human name of the action."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'Read'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"subjects"})}),(0,t.jsxs)(n.td,{children:["List of subjects the action can be applied to. ",(0,t.jsx)(n.em,{children:"Only for the contentTypes section"}),"."]}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"['api::article.article']"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"options"})}),(0,t.jsx)(n.td,{children:"Option object"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{}"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"options.applyToProperties"})}),(0,t.jsxs)(n.td,{children:["List of properties the action can be applied to. ",(0,t.jsx)(n.em,{children:"Only for the contentTypes section"}),"."]}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"['fields', 'locale']"})})]})]})]}),"\n","\n","\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:r,alt:"Screenshot of the RBAC edit page showing the where are located the section, category, subcategory and display name"}),(0,t.jsx)("figcaption",{children:(0,t.jsx)(n.p,{children:"Screenshot of the RBAC edit page showing the where are located the section, category,\nsubcategory and display name"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"uid"})," and ",(0,t.jsx)(n.code,{children:"pluginName"})," are used to create a global unique id."]}),(0,t.jsxs)(n.p,{children:["Examples: ",(0,t.jsx)(n.code,{children:"admin::audit-logs.read"}),", ",(0,t.jsx)(n.code,{children:"plugin::content-manager.explorer.create"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"register-an-action",children:"Register an action"}),"\n",(0,t.jsxs)(n.p,{children:["An action can be registered in the backend during the ",(0,t.jsx)(n.code,{children:"bootstrap"})," phase of the app."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// bootstrap.ts\nmodule.exports = async () => {\n  const actions = [\n    {\n      uid: 'provider-login.read',\n      displayName: 'Read',\n      pluginName: 'admin',\n      section: 'settings',\n      category: 'single sign on',\n      subCategory: 'options',\n    },\n  ];\n  await strapi.admin.services.permission.actionProvider.registerMany(actions);\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parametrize-actions",children:"Parametrize actions"}),"\n",(0,t.jsxs)(n.p,{children:["Actions can be parametrized with the ",(0,t.jsx)(n.code,{children:"actionParameters"})," property. This property is an object that can contain any key/value pair."]}),"\n",(0,t.jsx)(n.p,{children:"An example of the feature:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The action ",(0,t.jsx)(n.code,{children:"review-workflows.stage.transition"})," can be parametrized with the ",(0,t.jsx)(n.code,{children:"from"})," and ",(0,t.jsx)(n.code,{children:"to"})," parameters, which are the ids of the stages a user can transition from and to."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"At the moment only Review Workflows use this feature internally."}),"\n",(0,t.jsx)(n.h2,{id:"conditions",children:"Conditions"}),"\n",(0,t.jsx)(n.h3,{id:"condition-definition",children:"Condition definition"}),"\n",(0,t.jsx)(n.p,{children:"A condition contains the following information:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"description"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"default value"}),(0,t.jsx)(n.th,{children:"example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"displayName"})}),(0,t.jsx)(n.td,{children:"The condition name as shown in the admin panel"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'Is creator'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"name"})}),(0,t.jsx)(n.td,{children:"A name that has to be unique within the plugin"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'is-creator'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"plugin"})}),(0,t.jsx)(n.td,{children:"Name of the plugin that register the condition"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'api'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'admin'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"category"})}),(0,t.jsx)(n.td,{children:"Name of the category. Conditions can be grouped into categories available in the admin panel"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'Default'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'admin'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"handler"})}),(0,t.jsxs)(n.td,{children:["A function used to verify the condition (see ",(0,t.jsx)(n.a,{href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/rbac.html#using-the-condition-handler",children:"docs.strapi.io"}),")"]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'admin'"})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Currently the user can choose to apply a condition on any action. There is no way to define a list of actions on which the condition can be applied to. This is why it is possible to set the condition ",(0,t.jsx)(n.code,{children:"isCreator"})," on a the action ",(0,t.jsx)(n.code,{children:"plugin::content-manager.explorer.create"})," even if it doesn't make sense."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"plugin"})," are used to create a global unique id."]}),(0,t.jsxs)(n.p,{children:["Examples: ",(0,t.jsx)(n.code,{children:"admin::is-creator"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"registering-a-condition",children:"Registering a condition"}),"\n",(0,t.jsxs)(n.p,{children:["A condition can be registered in the backend during the ",(0,t.jsx)(n.code,{children:"bootstrap"})," phase of the app."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// bootstrap.ts\nmodule.exports = async () => {\n  const conditions = [\n    {\n      displayName: 'Is creator',\n      name: 'is-creator',\n      plugin: 'admin',\n      handler: (user) => ({ 'createdBy.id': user.id }),\n    },\n  ];\n  await strapi.admin.services.permission.conditionProvider.registerMany(conditions);\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["More information on how the handler works ",(0,t.jsx)(n.a,{href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/rbac.html#using-the-condition-handler",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsx)(n.h3,{id:"permission-definition",children:"Permission definition"}),"\n",(0,t.jsxs)(n.p,{children:["The permissions are modified in the admin panel (on the ",(0,t.jsx)(n.a,{href:"http://localhost:1337/admin/settings/roles/2",children:"edit page"})," of a role) and stored in the database with the following information:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"description"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"action"})}),(0,t.jsx)(n.td,{children:"Id of the action that will be permitted."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'plugin::content-manager.explorer.update'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"actionParameters"})}),(0,t.jsx)(n.td,{children:"Object to parametrize actions."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"subject"})}),(0,t.jsx)(n.td,{children:"Id of the subject on which the action will be permitted."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'api::article.article'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"properties"})}),(0,t.jsx)(n.td,{children:"List of the properties of the subject on which the action will be permitted"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{ fields: ['title', 'description'], locales: ['en', 'fr'] }"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"conditions"})}),(0,t.jsx)(n.td,{children:"List of the conditions that will be ran against an entry to determine whether the action on this entry is permitted or not"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"['admin::is-creator']"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"A permission contains all needed information for the backend and the frontend to prevent users to perform non-permitted action."})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);