(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(212)),l={id:"Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals",title:"Conditionals"},i={unversionedId:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals",id:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals",isDocsHomePage:!1,title:"Conditionals",description:"Learn JavaScript: Conditionals Cheatsheet | Codecademy",source:"@site/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals.md",slug:"/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals.md",version:"current"},c=[{value:"Control Flow",id:"control-flow",children:[]},{value:"Logical Operator <code>||</code>",id:"logical-operator-",children:[]},{value:"Ternary Operator",id:"ternary-operator",children:[]},{value:"<code>else</code> Statement",id:"else-statement",children:[]},{value:"Logical Operator <code>&amp;&amp;</code>",id:"logical-operator--1",children:[]},{value:"<code>switch</code> Statement",id:"switch-statement",children:[]},{value:"<code>if</code> Statement",id:"if-statement",children:[]},{value:"Truthy and Falsy",id:"truthy-and-falsy",children:[]},{value:"Logical Operator <code>!</code>",id:"logical-operator--2",children:[]},{value:"Comparison Operators",id:"comparison-operators",children:[]},{value:"<code>else if</code> Clause",id:"else-if-clause",children:[]}],d={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet"}),"Learn JavaScript: Conditionals Cheatsheet | Codecademy")),Object(o.mdx)("h3",{id:"control-flow"},"Control Flow"),Object(o.mdx)("p",null,"Control flow is the order in which statements are executed in a program. The default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file. "),Object(o.mdx)("p",null,"Control structures such as conditionals (",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," statements and the like) alter control flow by only executing blocks of code if certain conditions are met. These structures essentially allow a program to make decisions about which code is executed as the program runs."),Object(o.mdx)("h3",{id:"logical-operator-"},"Logical Operator ",Object(o.mdx)("inlineCode",{parentName:"h3"},"||")),Object(o.mdx)("p",null,"The logical OR operator ",Object(o.mdx)("inlineCode",{parentName:"p"},"||")," checks two values and returns a boolean. If one or both values are truthy, it returns ",Object(o.mdx)("inlineCode",{parentName:"p"},"true"),". If both values are falsy, it returns ",Object(o.mdx)("inlineCode",{parentName:"p"},"false"),"."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"A"),Object(o.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"B"),Object(o.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"A ","|","|"," B"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true || false;        // true\n10 > 5 || 10 > 20;    // true\nfalse || false;       // false\n10 > 100 || 10 > 20;  // false\n")),Object(o.mdx)("h3",{id:"ternary-operator"},"Ternary Operator"),Object(o.mdx)("p",null,"The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a ",Object(o.mdx)("inlineCode",{parentName:"p"},"?")," operator, and then two expressions separated by a ",Object(o.mdx)("inlineCode",{parentName:"p"},":"),". If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let price = 10.5;\nlet day = "Monday";\n\nday === "Monday" ? price -= 1.5 : price += 1.5;\n')),Object(o.mdx)("h3",{id:"else-statement"},Object(o.mdx)("inlineCode",{parentName:"h3"},"else")," Statement"),Object(o.mdx)("p",null,"An ",Object(o.mdx)("inlineCode",{parentName:"p"},"else")," block can be added to an ",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," block or series of ",Object(o.mdx)("inlineCode",{parentName:"p"},"if"),"-",Object(o.mdx)("inlineCode",{parentName:"p"},"else if")," blocks. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"else")," block will be executed only if the ",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," condition fails."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isTaskCompleted = false;\n\nif (isTaskCompleted) {\n    console.log('Task completed');\n} else {\n    console.log('Task incomplete');\n}\n")),Object(o.mdx)("h3",{id:"logical-operator--1"},"Logical Operator ",Object(o.mdx)("inlineCode",{parentName:"h3"},"&&")),Object(o.mdx)("p",null,"The logical AND operator ",Object(o.mdx)("inlineCode",{parentName:"p"},"&&")," checks two values and returns a boolean. If ",Object(o.mdx)("em",{parentName:"p"},"both")," values are truthy, then it returns ",Object(o.mdx)("inlineCode",{parentName:"p"},"true"),". If one, or both, of the values is falsy, then it returns ",Object(o.mdx)("inlineCode",{parentName:"p"},"false"),". "),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true && true;      // true\n1 > 2 && 2 > 1;    // false\ntrue && false;     // false\n4 === 4 && 3 > 1;  // true\n")),Object(o.mdx)("h3",{id:"switch-statement"},Object(o.mdx)("inlineCode",{parentName:"h3"},"switch")," Statement"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"switch")," statements provide a means of checking an expression against multiple ",Object(o.mdx)("inlineCode",{parentName:"p"},"case")," clauses. If a case matches, the code inside that clause is executed. "),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"case")," clause should finish with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"break")," keyword. If no case matches but a ",Object(o.mdx)("inlineCode",{parentName:"p"},"default")," clause is included, the code inside ",Object(o.mdx)("inlineCode",{parentName:"p"},"default")," will be executed. "),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," If ",Object(o.mdx)("inlineCode",{parentName:"p"},"break")," is omitted from the block of a ",Object(o.mdx)("inlineCode",{parentName:"p"},"case"),", the ",Object(o.mdx)("inlineCode",{parentName:"p"},"switch")," statement will continue to check against ",Object(o.mdx)("inlineCode",{parentName:"p"},"case")," values until a break is encountered or the flow is broken."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const food = 'salad';\n\nswitch (food) {\n    case 'oyster':\n        console.log('The taste of the sea \ud83e\uddaa');\n        break;\n    case 'pizza':\n        console.log('A delicious pie \ud83c\udf55');\n        break;\n    default:\n        console.log('Enjoy your meal');\n}\n\n// Prints: Enjoy your meal\n")),Object(o.mdx)("h3",{id:"if-statement"},Object(o.mdx)("inlineCode",{parentName:"h3"},"if")," Statement"),Object(o.mdx)("p",null,"An ",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," statement accepts an expression with a set of parentheses:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"If the expression evaluates to a truthy value, then the code within its code body executes."),Object(o.mdx)("li",{parentName:"ul"},"If the expression evaluates to a falsy value, its code body will not execute. ")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isMailSent = true;\n\nif (isMailSent) {\n    console.log('Mail sent to recipient');\n}\n")),Object(o.mdx)("h3",{id:"truthy-and-falsy"},"Truthy and Falsy"),Object(o.mdx)("p",null,"In JavaScript, values evaluate to ",Object(o.mdx)("inlineCode",{parentName:"p"},"true")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"false")," when evaluated as Booleans."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Values that evaluate to ",Object(o.mdx)("inlineCode",{parentName:"li"},"true")," are known as ",Object(o.mdx)("em",{parentName:"li"},"truthy")," "),Object(o.mdx)("li",{parentName:"ul"},"Values that evaluate to ",Object(o.mdx)("inlineCode",{parentName:"li"},"false")," are known as ",Object(o.mdx)("em",{parentName:"li"},"falsy")," ")),Object(o.mdx)("p",null,"Falsy values include ",Object(o.mdx)("inlineCode",{parentName:"p"},"false"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"0"),", empty strings, ",Object(o.mdx)("inlineCode",{parentName:"p"},"null")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"undefined"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"NaN"),". All other values are truthy."),Object(o.mdx)("h3",{id:"logical-operator--2"},"Logical Operator ",Object(o.mdx)("inlineCode",{parentName:"h3"},"!")),Object(o.mdx)("p",null,"The logical NOT operator ",Object(o.mdx)("inlineCode",{parentName:"p"},"!")," can be used to do one of the following:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Invert a Boolean value."),Object(o.mdx)("li",{parentName:"ul"},"Invert the truthiness of non-Boolean values.")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let lateToWork = true;\nlet oppositeValue = !lateToWork;\n\nconsole.log(oppositeValue);\n// Prints: false\n")),Object(o.mdx)("h3",{id:"comparison-operators"},"Comparison Operators"),Object(o.mdx)("p",null,"Comparison operators are used to comparing two values and return ",Object(o.mdx)("inlineCode",{parentName:"p"},"true")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"false")," depending on the validity of the comparison:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"===")," strict equal"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"!==")," strict not equal"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},">")," greater than"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},">=")," greater than or equal"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"<")," less than"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"<=")," less than or equal")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"1 > 3       // false\n3 > 1       // true\n250 >= 250  // true\n1 === 1     // true\n1 === 2     // false\n1 === '1'   // false\n")),Object(o.mdx)("h3",{id:"else-if-clause"},Object(o.mdx)("inlineCode",{parentName:"h3"},"else if")," Clause"),Object(o.mdx)("p",null,"After an initial ",Object(o.mdx)("inlineCode",{parentName:"p"},"if")," block, ",Object(o.mdx)("inlineCode",{parentName:"p"},"else if")," blocks can each check an additional condition. An optional ",Object(o.mdx)("inlineCode",{parentName:"p"},"else")," block can be added after the ",Object(o.mdx)("inlineCode",{parentName:"p"},"else if")," block(s) to run by default if none of the conditionals evaluated to truthy. "),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const size = 10;\n\nif (size > 100) {\n    console.log('Big');\n} else if (size > 20) {\n    console.log('Medium');\n} else if (size > 4) {\n    console.log('Small');\n} else {\n    console.log('Tiny');\n}\n// Print: Small\n")))}m.isMDXComponent=!0},212:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(l,".").concat(s)]||m[s]||b[s]||o;return n?r.a.createElement(u,c(c({ref:t},i),{},{components:n})):r.a.createElement(u,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);