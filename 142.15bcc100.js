(window.webpackJsonp=window.webpackJsonp||[]).push([[142,40],{227:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),o=a(24),c=a(22),s=a(222),u=a(218),i=a(215),m=a(23),h=a(225),b=a(472),d=a(473),f=a(231);let O=null;function j({hit:e,children:t}){return r.a.createElement(i.a,{to:e.url},t)}function g({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(h.a)();return r.a.createElement(i.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function p({contextualSearch:e,...t}){var i,h;const{siteMetadata:p}=Object(c.default)(),k=Object(f.a)(),E=null!==(i=null===(h=t.searchParameters)||void 0===h?void 0:h.facetFilters)&&void 0!==i?i:[],C=e?[...k,...E]:E,w={...t.searchParameters,facetFilters:C},{withBaseUrl:v}=Object(u.b)(),P=Object(s.useHistory)(),S=Object(l.useRef)(null),[y,F]=Object(l.useState)(!1),[N,R]=Object(l.useState)(null),M=Object(l.useCallback)((()=>O?Promise.resolve():Promise.all([a.e(143).then(a.bind(null,230)),Promise.all([a.e(0),a.e(144)]).then(a.bind(null,229)),a.e(0).then(a.t.bind(null,54,7))]).then((([{DocSearchModal:e}])=>{O=e}))),[]),x=Object(l.useCallback)((()=>{M().then((()=>{F(!0)}))}),[M,F]),I=Object(l.useCallback)((()=>{F(!1)}),[F]),U=Object(l.useCallback)((e=>{M().then((()=>{F(!0),R(e.key)}))}),[M,F,R]),$=Object(l.useRef)({navigate({suggestionUrl:e}){P.push(e)}}).current,A=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:v(`${t.pathname}${t.hash}`)}})))).current,B=Object(l.useMemo)((()=>e=>r.a.createElement(g,Object(n.a)({},e,{onClose:I}))),[I]),H=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",p.docusaurusVersion),e)),[p.docusaurusVersion]);return Object(b.a)({isOpen:y,onOpen:x,onClose:I,onInput:U,searchButtonRef:S}),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement(d.a,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:x,ref:S}),y&&Object(o.createPortal)(r.a.createElement(O,Object(n.a)({onClose:I,initialScrollY:window.scrollY,initialQuery:N,navigator:$,transformItems:A,hitComponent:j,resultsFooterComponent:B,transformSearchClient:H},t,{searchParameters:w})),document.body))}t.a=function(){const{siteConfig:e}=Object(c.default)();return r.a.createElement(p,e.themeConfig.algolia)}},265:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(226);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);