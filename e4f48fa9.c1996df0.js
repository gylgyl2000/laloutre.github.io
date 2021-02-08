(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(214)),c={id:"Codecademy-Cheatsheets-Learn_JavaScript-03-Functions",title:"Functions"},i={unversionedId:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions",id:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions",isDocsHomePage:!1,title:"Functions",description:"Learn JavaScript: Functions Cheatsheet | Codecademy",source:"@site/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions.md",slug:"/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions.md",version:"current"},u=[{value:"Arrow Functions (ES6)",id:"arrow-functions-es6",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Anonymous Functions",id:"anonymous-functions",children:[]},{value:"Function Expressions",id:"function-expressions",children:[]},{value:"Function Parameters",id:"function-parameters",children:[]},{value:"<code>return</code> Keyword",id:"return-keyword",children:[]},{value:"Function Declaration",id:"function-declaration",children:[]},{value:"Calling Functions",id:"calling-functions",children:[]}],s={rightToc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet"}),"Learn JavaScript: Functions Cheatsheet | Codecademy")),Object(o.mdx)("h3",{id:"arrow-functions-es6"},"Arrow Functions (ES6)"),Object(o.mdx)("p",null,"Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the ",Object(o.mdx)("inlineCode",{parentName:"p"},"function")," keyword and uses a fat arrow ",Object(o.mdx)("inlineCode",{parentName:"p"},"=>")," to separate the parameter(s) from the body. "),Object(o.mdx)("p",null,"There are several variations of arrow functions:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Arrow functions with a single parameter do not require ",Object(o.mdx)("inlineCode",{parentName:"li"},"()")," around the parameter list. "),Object(o.mdx)("li",{parentName:"ul"},"Arrow functions with a single expression can use the concise function body which returns the result of the expression without the ",Object(o.mdx)("inlineCode",{parentName:"li"},"return")," keyword.")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Arrow function with two arguments\nconst sum = (firstParam, secondParam) => {\n    return firstParam + secondParam;\n};\nconsole.log(sum(2,5)); // Prints: 7\n\n// Arrow function with no arguments\nconst printHello = () => {\n    console.log('hello');\n};\nprintHello(); // Prints: hello\n\n// Arrow functions with a single argument\nconst checkWeight = weight => {\n    console.log(`Baggage weight : ${weight} kilograms.`);\n};\ncheckWeight(25); // Prints: Baggage weight : 25 kilograms.\n\n// Concise arrow functions\nconst multiply = (a, b) => a * b;\nconsole.log(multiply(2, 30)); // Prints: 60 \n")),Object(o.mdx)("h3",{id:"functions"},"Functions"),Object(o.mdx)("p",null,"Functions are one of the fundamental building blocks in JavaScript. A ",Object(o.mdx)("em",{parentName:"p"},"function")," is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it. "),Object(o.mdx)("p",null,"The example code provided contains a function that takes in 2 values and returns the sum of those numbers."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Defining the function:\nfunction sum(num1, num2) {\n    return num1 + num2;\n}\n\n// Calling the function:\nsum(3, 6); // 9\n")),Object(o.mdx)("h3",{id:"anonymous-functions"},"Anonymous Functions"),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Anonymous functions")," in JavaScript do not have a name property. They can be defined using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"function")," keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Named function\nfunction rocketToMars() {\n    return 'BOOM!';\n}\n\n// Anonymous function\nconst rocketToMars = function() {\n    return 'BOOM!';\n}\n")),Object(o.mdx)("h3",{id:"function-expressions"},"Function Expressions"),Object(o.mdx)("p",null,"Function ",Object(o.mdx)("em",{parentName:"p"},"expressions")," create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const dog = function() {\n    return 'Woof!';\n}\n")),Object(o.mdx)("h3",{id:"function-parameters"},"Function Parameters"),Object(o.mdx)("p",null,"Inputs to functions are known as ",Object(o.mdx)("em",{parentName:"p"},"parameters")," when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is ",Object(o.mdx)("em",{parentName:"p"},"passed")," in as arguments. It is possible to define a function without parameters."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// The parameter is name\nfunction sayHello(name) {\n    return `Hello, ${name}!`;\n}\n")),Object(o.mdx)("h3",{id:"return-keyword"},Object(o.mdx)("inlineCode",{parentName:"h3"},"return")," Keyword"),Object(o.mdx)("p",null,"Functions return (pass back) values using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"return")," keyword. ",Object(o.mdx)("inlineCode",{parentName:"p"},"return")," ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the ",Object(o.mdx)("inlineCode",{parentName:"p"},"return")," keyword, in which case the function will return ",Object(o.mdx)("inlineCode",{parentName:"p"},"undefined")," by default."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// With return\nfunction sum(num1, num2) {\n    return num1 + num2;\n}\n\n// Without return, so the function doesn't output the sum\nfunction sum(num1, num2) {\n    num1 + num2;\n}\n")),Object(o.mdx)("h3",{id:"function-declaration"},"Function Declaration"),Object(o.mdx)("p",null,"Function ",Object(o.mdx)("em",{parentName:"p"},"declarations")," are used to create named functions. These functions can be called using their declared name. Function declarations are built from: "),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The ",Object(o.mdx)("inlineCode",{parentName:"li"},"function")," keyword. "),Object(o.mdx)("li",{parentName:"ul"},"The function name."),Object(o.mdx)("li",{parentName:"ul"},"An optional list of parameters separated by commas enclosed by a set of parentheses ",Object(o.mdx)("inlineCode",{parentName:"li"},"()"),"."),Object(o.mdx)("li",{parentName:"ul"},"A function body enclosed in a set of curly braces ",Object(o.mdx)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function add(num1, num2) {\n    return num1 + num2;\n}\n")),Object(o.mdx)("h3",{id:"calling-functions"},"Calling Functions"),Object(o.mdx)("p",null,"Functions can be ",Object(o.mdx)("em",{parentName:"p"},"called"),", or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. ",Object(o.mdx)("em",{parentName:"p"},"Arguments")," are values passed into a function when it is called. "),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Defining the function\nfunction sum(num1, num2) {\n    return num1 + num2;\n}\n\n// Calling the function\nsum(2, 4); // 6\n")))}d.isMDXComponent=!0},214:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return p})),t.d(n,"mdx",(function(){return b})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return l}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){return function(n){var t=m(n.components);return r.a.createElement(e,c({},n,{components:t}))}},m=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=m(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=m(t),l=a,p=d["".concat(c,".").concat(l)]||d[l]||f[l]||o;return t?r.a.createElement(p,u(u({ref:n},i),{},{components:t})):r.a.createElement(p,u({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);