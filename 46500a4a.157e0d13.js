(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(212)),i=(n(218),{id:"accueil",title:"Accueil",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Accueil",custom_edit_url:null,description:"Ma documentation de d\xe9veloppeur web",keywords:["CSS","HTML","JavaScript"],image:null,slug:"/"}),a={unversionedId:"accueil",id:"accueil",isDocsHomePage:!1,title:"Accueil",description:"Ma documentation de d\xe9veloppeur web",source:"@site/docs/accueil.mdx",slug:"/",permalink:"/docs/",editUrl:null,version:"current",sidebar_label:"Accueil",sidebar:"docs",next:{title:"HTML et HTML5 de base",permalink:"/docs/freeCodeCamp/freeCodeCamp-Basic_HTML_and_HTML5-fr"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{class:"accueil-container-fluid"},Object(o.mdx)("div",{class:"accueil-row"},Object(o.mdx)("div",{class:"accueil-col",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",alignContent:"space-around",height:"250px"}},Object(o.mdx)("img",{alt:"freeCodeCamp",src:"freeCodeCamp/assets/fcc_primary_large_24X210.png",style:{width:"250px",height:"min-content",backgroundColor:"black"}}),Object(o.mdx)("img",{alt:"OpenClassrooms",src:"OpenClassrooms/assets/OpenClassrooms.png",style:{width:"250px",height:"min-content"}}),Object(o.mdx)("img",{alt:"Codecademy",src:"Codecademy/assets/Codecademy.png",style:{width:"250px",height:"min-content"}}),Object(o.mdx)("img",{alt:"MDN web docs",src:"MDN-web-docs/assets/MDNWebDoc.png",style:{width:"250px",height:"min-content"}}),Object(o.mdx)("img",{alt:"Codewars",src:"Codewars/assets/codewars.png",style:{width:"250px",height:"min-content",backgroundColor:"white"}}),Object(o.mdx)("img",{alt:"CSS-Tricks",src:"CSS-Tricks/assets/css-tricks.png",style:{width:"250px",height:"min-content"}}),Object(o.mdx)("img",{alt:"Exercism",src:"Exercism/assets/Exercism.png",style:{width:"250px",height:"min-content",backgroundColor:"#22333b"}}),Object(o.mdx)("img",{alt:"France-IOI",src:"France-IOI/assets/france-ioi.png",style:{width:"100px",height:"min-content",backgroundColor:"white"}})))))}l.isMDXComponent=!0},212:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return f})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return c.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return n?c.a.createElement(f,s(s({ref:t},a),{},{components:n})):c.a.createElement(f,s({ref:t},a))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),c=n(228);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(c.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},228:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}))}}]);