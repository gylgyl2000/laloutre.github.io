(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(214)),c={id:"Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr",title:"Tableaux"},d={unversionedId:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr",id:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr",isDocsHomePage:!1,title:"Tableaux",description:"Learn JavaScript: Arrays Cheatsheet | Codecademy",source:"@site/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr.md",slug:"/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr.md",version:"current",sidebar:"docs",previous:{title:"Port\xe9e",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-04-Scope-fr"},next:{title:"Les boucles",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-06-Loops-fr"}},s=[{value:"Propri\xe9t\xe9 <code>.length</code>",id:"propri\xe9t\xe9-length",children:[]},{value:"Index",id:"index",children:[]},{value:"M\xe9thode <code>.push()</code>",id:"m\xe9thode-push",children:[]},{value:"M\xe9thode <code>.pop()</code>",id:"m\xe9thode-pop",children:[]},{value:"Mutable",id:"mutable",children:[]},{value:"Tableaux",id:"tableaux",children:[]}],l={rightToc:s};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(r.a)({parentName:"p"},{href:"https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet"}),"Learn JavaScript: Arrays Cheatsheet | Codecademy")),Object(o.mdx)("h3",{id:"propri\xe9t\xe9-length"},"Propri\xe9t\xe9 ",Object(o.mdx)("inlineCode",{parentName:"h3"},".length")),Object(o.mdx)("p",null,"La propri\xe9t\xe9 ",Object(o.mdx)("inlineCode",{parentName:"p"},".length")," d'un tableau JavaScript indique le nombre d'\xe9l\xe9ments que le tableau contient."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3, 4];\n\nnumbers.length // 4\n")),Object(o.mdx)("h3",{id:"index"},"Index"),Object(o.mdx)("p",null,"Les \xe9l\xe9ments du tableau sont organis\xe9s par valeurs ",Object(o.mdx)("em",{parentName:"p"},"d'index"),", en commen\xe7ant \xe0 ",Object(o.mdx)("inlineCode",{parentName:"p"},"0")," comme premier index d'\xe9l\xe9ment. Les \xe9l\xe9ments sont accessibles par leur index en utilisant le nom du tableau et l'index entour\xe9 de crochets."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Acc\xe9der \xe0 un \xe9l\xe9ment de tableau\nconst myArray = [100, 200, 300];\n\nconsole.log(myArray[0]); // 100\nconsole.log(myArray[1]); // 200\nconsole.log(myArray[2]); // 300\n")),Object(o.mdx)("h3",{id:"m\xe9thode-push"},"M\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"h3"},".push()")),Object(o.mdx)("p",null,"La m\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"p"},".push()")," des tableaux JavaScript peut \xeatre utilis\xe9e pour ajouter un ou plusieurs \xe9l\xe9ments \xe0 la fin d'un tableau. ",Object(o.mdx)("inlineCode",{parentName:"p"},".push()")," mute le tableau d'origine renvoie la nouvelle longueur du tableau."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Ajout d'un seul \xe9l\xe9ment :\nconst cart = ['pomme', 'orange'];\ncart.push('poire');\n\n// Ajout de plusieurs \xe9l\xe9ments :\nconst nombres = [1, 2];\nnombres.push(3, 4, 5);\n")),Object(o.mdx)("h3",{id:"m\xe9thode-pop"},"M\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"h3"},".pop()")),Object(o.mdx)("p",null,"La m\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"p"},".pop()")," supprime le dernier \xe9l\xe9ment d'un tableau et renvoie cet \xe9l\xe9ment."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const ingredients = ['oeufs', 'farine', 'chocolat'];\n\nconst poppedIngredient = ingredients.pop(); // 'Chocolat'\nconsole.log(ingredients); // ['oeufs', 'farine']\n")),Object(o.mdx)("h3",{id:"mutable"},"Mutable"),Object(o.mdx)("p",null,"Les tableaux JavaScript sont ",Object(o.mdx)("em",{parentName:"p"},"modifiables"),", ce qui signifie que les valeurs qu'ils contiennent peuvent \xeatre modifi\xe9es.\nM\xeame s'ils sont d\xe9clar\xe9s en utilisant ",Object(o.mdx)("inlineCode",{parentName:"p"},"const"),", le contenu peut \xeatre manipul\xe9  en r\xe9affectant des valeurs internes ou en utilisant des m\xe9thodes comme  ",Object(o.mdx)("inlineCode",{parentName:"p"},".push()")," et ",Object(o.mdx)("inlineCode",{parentName:"p"},".pop()"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const noms = ['Alice', 'Bob'];\n\nnoms.push('Carl');\n// ['Alice', 'Bob', 'Carl']\n")),Object(o.mdx)("h3",{id:"tableaux"},"Tableaux"),Object(o.mdx)("p",null,"Les tableaux sont des listes de donn\xe9es class\xe9es et stock\xe9es. Ils peuvent  contenir des \xe9l\xe9ments de n'importe quel type de donn\xe9es. Les tableaux  sont cr\xe9\xe9s \xe0 l'aide de crochets, avec des \xe9l\xe9ments individuels s\xe9par\xe9s  par des virgules."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Un tableau contenant des nombres\nconst numberArray = [0, 1, 2, 3];\n\n// Un tableau contenant diff\xe9rents types de donn\xe9es\nconst mixedArray = [1, 'poulet', false];\n")))}i.isMDXComponent=!0},214:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return i})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,c({},t,{components:n}))}},p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=p(n),u=r,m=i["".concat(c,".").concat(u)]||i[u]||b[u]||o;return n?a.a.createElement(m,s(s({ref:t},d),{},{components:n})):a.a.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);