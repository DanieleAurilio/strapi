"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[679],{7269:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(3117),i=(s(7294),s(3905));const r={title:"Using Permissions",tags:["permissions","RBAC","useRBAC"]},o=void 0,a={unversionedId:"docs/core/admin/permissions/frontend/using-permissions",id:"docs/core/admin/permissions/frontend/using-permissions",title:"Using Permissions",description:"Currently, there are a few different ways to use permissions in the application. This document will explain the different ways, how to use them and suggestions",source:"@site/docs/docs/01-core/admin/02-permissions/02-frontend/using-permissions.mdx",sourceDirName:"docs/01-core/admin/02-permissions/02-frontend",slug:"/docs/core/admin/permissions/frontend/using-permissions",permalink:"/docs/core/admin/permissions/frontend/using-permissions",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/02-permissions/02-frontend/using-permissions.mdx",tags:[{label:"permissions",permalink:"/tags/permissions"},{label:"RBAC",permalink:"/tags/rbac"},{label:"useRBAC",permalink:"/tags/use-rbac"}],version:"current",frontMatter:{title:"Using Permissions",tags:["permissions","RBAC","useRBAC"]},sidebar:"docs",previous:{title:"Fetching Permissions",permalink:"/docs/core/admin/permissions/frontend/fetching-permissions"},next:{title:"Introduction",permalink:"/settings/intro"}},p={},c=[{value:"useRBACProvider",id:"userbacprovider",level:2},{value:"Usage",id:"usage",level:3},{value:"Typescript",id:"typescript",level:3},{value:"Components",id:"components",level:2},{value:"CheckPagePermissions",id:"checkpagepermissions",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Typescript",id:"typescript-1",level:4},{value:"CheckPermissions",id:"checkpermissions",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Typescript",id:"typescript-2",level:4},{value:"useRBAC",id:"userbac",level:2},{value:"Usage",id:"usage-3",level:3},{value:"Typescript",id:"typescript-3",level:3},{value:"useSyncRBAC",id:"usesyncrbac",level:2},{value:"Usage",id:"usage-4",level:3},{value:"Typescript",id:"typescript-4",level:3}],l={toc:c};function m(e){let{components:n,...s}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, there are a few different ways to use permissions in the application. This document will explain the different ways, how to use them and suggestions\non when is best to use them. It's advised that you've read ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/admin/permissions/how-they-work"},"how they work")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/admin/permissions/frontend/fetching-permissions"},"fetching permissions")," before reading this document so you have the full context."),(0,i.kt)("h2",{id:"userbacprovider"},"useRBACProvider"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/admin/permissions/frontend/fetching-permissions"},"fetching permissions")," we briefly mentioned the ",(0,i.kt)("inlineCode",{parentName:"p"},"useRBACProvider")," hook which is used to access the ",(0,i.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"context"),"\nthat contains the permissions. This is very low level and does nothing but give you access to ",(0,i.kt)("em",{parentName:"p"},"every")," permission for the user and a way to refetch them from the API."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Because this hook is so low level, it's recommended you use one of the other hooks or the wrapper components instead which use this inside and expose the methods\nof this hook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRBACProvider } from '@strapi/helper-plugin';\n\nconst MyComponent = () => {\n  const { allPermissions, refetchPermissions } = useRBACProvider();\n\n  const handleClick = async () => {\n    await refetchPermissions();\n  };\n\n  const canSeeMyComponent = allPermissions.some(\n    // this string will declared in the backend.\n    (permission) => permission.action === 'plugins::my-plugin.my-component.read'\n  );\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleClick}>\n        Refetch permissions\n      </button>\n      {canSeeMyComponent ? <p>aha you found me</p> : null}\n    </div>\n  );\n};\n")),(0,i.kt)("h3",{id:"typescript"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Permission {\n  id: number;\n  action: string;\n  subject: string | null;\n  // This can be custom defined to the needs of the plugin/application\n  properties: Record<string, any>;\n  conditions: Array<string>;\n}\n\ntype UseRBACProvider = () => {\n  allPermissions: Permission[];\n  // This is the `refetch` method from react-query's useQueries hook\n  refetchPermissions: <TPageData>(\n    options?: RefetchOptions & RefetchQueryFilters<TPageData>\n  ) => Promise<QueryObserverResult<unknown, unknown>>;\n};\n")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"There are two different wrapper components available to use. They are very similar but have different use cases. They are both\navailable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@strapi/helper-plugin"),"."),(0,i.kt)("h3",{id:"checkpagepermissions"},"CheckPagePermissions"),(0,i.kt)("p",null,"Used to apply RBAC to a view/page of the application. If the user does not have the permissions to access this page they will\nbe redirect to the homepage."),(0,i.kt)("h4",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CheckPagePermissions } from '@strapi/helper-plugin';\n\nconst permissions = [{ action: 'plugins::my-plugin.access', subject: null }];\n\nconst MyPage = () => {\n  return (\n    <CheckPagePermissions permissions={permissions}>\n      <h1>aha you found me</h1>\n    </CheckPagePermissions>\n  );\n};\n")),(0,i.kt)("h4",{id:"typescript-1"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Permission {\n  id: number;\n  action: string;\n  subject: string | null;\n  // This can be custom defined to the needs of the plugin/application\n  properties: Record<string, any>;\n  conditions: Array<string>;\n}\n\ntype CheckPagePermissionsProps = {\n  permissions: Permission[];\n  children: React.ReactNode;\n};\n\ntype CheckPagePermissions = (props: CheckPagePermissionsProps) => JSX.Element;\n")),(0,i.kt)("h3",{id:"checkpermissions"},"CheckPermissions"),(0,i.kt)("p",null,"Used to apply RBAC to a specific component. If the user does not have the permissions to access this component it will not be rendered.\nThis would be useful in the content-manager when you're trying to hide fields based on permissions."),(0,i.kt)("h4",{id:"usage-2"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CheckPermissions } from '@strapi/helper-plugin';\n\nconst permissions = [{ action: 'plugins::my-plugin.access', subject: null }];\n\nconst MyComponent = () => {\n  return (\n    <CheckPermissions permissions={permissions}>\n      <h1>aha you found me</h1>\n    </CheckPermissions>\n  );\n};\n")),(0,i.kt)("h4",{id:"typescript-2"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Permission {\n  id: number;\n  action: string;\n  subject: string | null;\n  // This can be custom defined to the needs of the plugin/application\n  properties: Record<string, any>;\n  conditions: Array<string>;\n}\n\ntype CheckPermissionsProps = {\n  permissions: Permission[];\n  children: React.ReactNode;\n};\n\ntype CheckPermissions = (props: CheckPermissionsProps) => JSX.Element;\n")),(0,i.kt)("h2",{id:"userbac"},"useRBAC"),(0,i.kt)("p",null,"Is a wrapper around the ",(0,i.kt)("a",{parentName:"p",href:"#haspermissions"},(0,i.kt)("inlineCode",{parentName:"a"},"hasPermissions"))," function which calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin/permissions/check")," endpoint with a provided\nlist of permissions to assertain if a user can do a specific action. This hook is typically used with plugin permissions alongside the\nglobal permissions object generated from the ",(0,i.kt)("a",{parentName:"p",href:"#userbacprovider"},(0,i.kt)("inlineCode",{parentName:"a"},"useRBACProvider"))," hook which can either be passed or will be accessed internally."),(0,i.kt)("p",null,"Because it's fetching, we also provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading")," state which can be used to show a loading state while the permissions are being fetched.\nIf the hook is unmouted before the fetch request completes, the request will be cancelled via an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},(0,i.kt)("inlineCode",{parentName:"a"},"AbortController")),"."),(0,i.kt)("h3",{id:"usage-3"},"Usage"),(0,i.kt)("p",null,"In the below example, we're checking if a user can \"create\" a post from the content-manager list view. If they can't, the button is ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRBAC } from '@strapi/helper-plugin';\n\nconst MyComponent = () => {\n  const { isLoading, allowedActions } = useRBAC({\n    create: [\n      {\n        action: 'plugin::content-manager.explorer.create',\n        subject: 'api::post.post',\n      },\n    ],\n  });\n\n  if (isLoading) {\n    return <p>Loading...</p>;\n  }\n\n  return <button disabled={!allowedActions.canCreate}>create entry</button>;\n};\n")),(0,i.kt)("h3",{id:"typescript-3"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Permission {\n  id: number;\n  action: string;\n  subject: string | null;\n  // This can be custom defined to the needs of the plugin/application\n  properties: Record<string, any>;\n  conditions: Array<string>;\n}\n\ninterface PluginPermissions {\n  create: Permission[];\n  read: Permission[];\n  update: Permission[];\n  delete: Permission[];\n  publish: Permission[];\n}\n\ntype UseRBAC = (\n  pluginPermissions: PluginPermissions,\n  permissions?: Permission[]\n) => {\n  isLoading: boolean;\n  setIsLoading: () => void;\n  allowedActions: {\n    canCreate: boolean;\n    canRead: boolean;\n    canUpdate: boolean;\n    canDelete: boolean;\n    canPublish: boolean;\n  };\n};\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usesyncrbac"},"useSyncRBAC"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This hook is only available in the content-manager.")),(0,i.kt)("p",null,"This hook because it's only used in the content-manager, has specific redux dependencies on the injected reducers for the content-manager.\nIt sets / resets and provides the permissions based on the specific view of the content-manager you're in e.g. the listView (known as the explorer)\nin conjunction with the content-type you're viewing e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"api::post.post"),"."),(0,i.kt)("h3",{id:"usage-4"},"Usage"),(0,i.kt)("p",null,"In the below example, we use the hook to only get the permissions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"api::post.post")," content-type."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While it is required to pass three arguments, only the middle argument is currently used.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQueryParams } from '@strapi/helper-plugin';\nimport { useSyncRBAC } from 'path/to/conent-manager/hooks';\n\nconst MyComponent = () => {\n  const [{ query }] = useQueryParams();\n\n  const permissions = useSyncRBAC(query, 'api::post.post', 'explorer');\n\n  return !permissions ? (\n    <p>Loading...</p>\n  ) : (\n    <CheckPagePermissions permissions={permissions}>\n      <h1>aha you found me</h1>\n    </CheckPagePermissions>\n  );\n};\n")),(0,i.kt)("h3",{id:"typescript-4"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Permission {\n  id: number;\n  action: string;\n  subject: string | null;\n  // This can be custom defined to the needs of the plugin/application\n  properties: Record<string, any>;\n  conditions: Array<string>;\n}\n\ntype UseSyncRBAC = (\n  query: Record<string, string> | undefined,\n  contentTypeUID: string,\n  viewId?: string\n) => Permission[];\n")))}m.isMDXComponent=!0},3905:(e,n,s)=>{s.d(n,{Zo:()=>l,kt:()=>d});var t=s(7294);function i(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){i(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,t,i=function(e,n){if(null==e)return{};var s,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var s=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(s),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return s?t.createElement(h,o(o({ref:n},l),{},{components:s})):t.createElement(h,o({ref:n},l))}));function d(e,n){var s=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=s.length,o=new Array(r);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<r;c++)o[c]=s[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"}}]);