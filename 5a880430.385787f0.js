(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(212)),s={id:"freeCodeCamp-JSON_APIs_and_AJAX",title:"JSON APIs and AJAX"},i={unversionedId:"freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX",id:"freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX",isDocsHomePage:!1,title:"JSON APIs and AJAX",description:"Introduction to the JSON APIs and AJAX Challenges",source:"@site/docs/freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX.md",slug:"/freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX",permalink:"/docs/freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/freeCodeCamp/freeCodeCamp-JSON_APIs_and_AJAX.md",version:"current"},d=[{value:"Introduction to the JSON APIs and AJAX Challenges",id:"introduction-to-the-json-apis-and-ajax-challenges",children:[]},{value:"1. Handle Click Events with JavaScript using the onclick property",id:"1-handle-click-events-with-javascript-using-the-onclick-property",children:[]},{value:"2. Change Text with click Events",id:"2-change-text-with-click-events",children:[]},{value:"3. Get JSON with the JavaScript XMLHttpRequest Method",id:"3-get-json-with-the-javascript-xmlhttprequest-method",children:[]},{value:"4. Get JSON with the JavaScript fetch method",id:"4-get-json-with-the-javascript-fetch-method",children:[]}],c={rightToc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"introduction-to-the-json-apis-and-ajax-challenges"},"Introduction to the JSON APIs and AJAX Challenges"),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/"}),"JSON APIs and Ajax | freeCodeCamp.org")),Object(r.mdx)("p",null,"Similar to how User Interfaces help people use programs, Application Programming Interfaces (APIs) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data. You can use API functionality in your page once you understand how to make requests and process data from it. Programmers often use AJAX technologies when working with APIs."),Object(r.mdx)("p",null,"The term AJAX originated as an acronym for Asynchronous JavaScript And XML. It refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. An asynchronous process has a couple key properties. The browser does not stop loading a page to wait for the server's response. Also, the browser inserts updated data into part of the page without having to refresh the entire page."),Object(r.mdx)("p",null,"User experience benefits from asynchronous processes in several ways. Pages load faster since the browser isn't waiting for the server to respond in the middle of a page render. Requests and transfers happen in the background, without interrupting what the user is doing. When the browser receives new data, only the necessary area of the page refreshes. These qualities especially enhance the user experience for single page applications."),Object(r.mdx)("p",null,"The data transferred between the browser and server is often in a format called JavaScript Object Notation (JSON). JSON resembles JavaScript object literal syntax, except that it's transferred as a string. Once received, it can be converted into an object and used in a script."),Object(r.mdx)("p",null,"This section covers how to transfer and use data using AJAX technologies with a freeCodeCamp API."),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"1-handle-click-events-with-javascript-using-the-onclick-property"},"1. Handle Click Events with JavaScript using the onclick property"),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/handle-click-events-with-javascript-using-the-onclick-property"}),"Learn JSON APIs and Ajax: Handle Click Events with JavaScript using the onclick property | freeCodeCamp.org")),Object(r.mdx)("p",null,"You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called ",Object(r.mdx)("inlineCode",{parentName:"p"},"DOMContentLoaded"),". Here's the code that does this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('DOMContentLoaded', function() {\n\n});\n")),Object(r.mdx)("p",null,"You can implement event handlers that go inside of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"DOMContentLoaded")," function. You can implement an ",Object(r.mdx)("inlineCode",{parentName:"p"},"onclick")," event handler which triggers when the user clicks on the element with id ",Object(r.mdx)("inlineCode",{parentName:"p"},"getMessage"),", by adding the following code:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.getElementById('getMessage').onclick = function(){};\n")),Object(r.mdx)("hr",null),Object(r.mdx)("p",null,"Add a click event handler inside of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"DOMContentLoaded")," function for the element with id of ",Object(r.mdx)("inlineCode",{parentName:"p"},"getMessage"),"."),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Your code should use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"document.getElementById")," method to select the ",Object(r.mdx)("inlineCode",{parentName:"p"},"getMessage")," element.\nYour code should add an ",Object(r.mdx)("inlineCode",{parentName:"p"},"onclick")," event handler.")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  document.addEventListener(\'DOMContentLoaded\', function(){\n    // Add your code below this line\n    document.getElementById(\'getMessage\').onclick = function(){};\n    // Add your code above this line\n  });\n<\/script>\n\n<style>\n  body {\n    text-align: center;\n    font-family: "Helvetica", sans-serif;\n  }\n  h1 {\n    font-size: 2em;\n    font-weight: bold;\n  }\n  .box {\n    border-radius: 5px;\n    background-color: #eee;\n    padding: 20px 5px;\n  }\n  button {\n    color: white;\n    background-color: #4791d0;\n    border-radius: 5px;\n    border: 1px solid #4791d0;\n    padding: 5px 10px 8px 10px;\n  }\n  button:hover {\n    background-color: #0F5897;\n    border: 1px solid #0F5897;\n  }\n</style>\n<h1>Cat Photo Finder</h1>\n<p class="message box">\n  The message will go here\n</p>\n<p>\n  <button id="getMessage">\n    Get Message\n  </button>\n</p>\n')),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"2-change-text-with-click-events"},"2. Change Text with click Events"),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/change-text-with-click-events"}),"Learn JSON APIs and Ajax: Change Text with click Events | freeCodeCamp.org")),Object(r.mdx)("p",null,'When the click event happens, you can use JavaScript to update an HTML element.\nFor example, when a user clicks the "Get Message" button, it changes the text of the element with the class ',Object(r.mdx)("inlineCode",{parentName:"p"},"message"),' to say "Here is the message".\nThis works by adding the following code within the click event:'),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.getElementsByClassName('message')[0].textContent=\"Here is the message\";\n")),Object(r.mdx)("hr",null),Object(r.mdx)("p",null,"Add code inside the ",Object(r.mdx)("inlineCode",{parentName:"p"},"onclick")," event handler to change the text inside the ",Object(r.mdx)("inlineCode",{parentName:"p"},"message"),' element to say "Here is the message".'),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Your code should use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"document.getElementsByClassName")," method to select the element with class ",Object(r.mdx)("inlineCode",{parentName:"p"},"message")," and set its ",Object(r.mdx)("inlineCode",{parentName:"p"},"textContent")," to the given string.")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  document.addEventListener(\'DOMContentLoaded\', function(){\n    document.getElementById(\'getMessage\').onclick = function(){\n      // Add your code below this line\n      document.getElementsByClassName(\'message\')[0].textContent="Here is the message";\n      // Add your code above this line\n    }\n  });\n<\/script>\n\n<style>\n  body {\n    text-align: center;\n    font-family: "Helvetica", sans-serif;\n  }\n  h1 {\n    font-size: 2em;\n    font-weight: bold;\n  }\n  .box {\n    border-radius: 5px;\n    background-color: #eee;\n    padding: 20px 5px;\n  }\n  button {\n    color: white;\n    background-color: #4791d0;\n    border-radius: 5px;\n    border: 1px solid #4791d0;\n    padding: 5px 10px 8px 10px;\n  }\n  button:hover {\n    background-color: #0F5897;\n    border: 1px solid #0F5897;\n  }\n</style>\n\n<h1>Cat Photo Finder</h1>\n<p class="message box">\n  The message will go here\n</p>\n<p>\n  <button id="getMessage">\n    Get Message\n  </button>\n</p>\n')),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"3-get-json-with-the-javascript-xmlhttprequest-method"},"3. Get JSON with the JavaScript XMLHttpRequest Method"),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-xmlhttprequest-method"}),"Learn JSON APIs and Ajax: Get JSON with the JavaScript XMLHttpRequest Method | freeCodeCamp.org")),Object(r.mdx)("p",null,"You can also request data from an external source. This is where APIs come into play.\nRemember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.\nMost web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.\nJSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a ",Object(r.mdx)("inlineCode",{parentName:"p"},"{")," and a ",Object(r.mdx)("inlineCode",{parentName:"p"},"}"),'.\nThese properties and their values are often referred to as "key-value pairs".\nHowever, JSON transmitted by APIs are sent as ',Object(r.mdx)("inlineCode",{parentName:"p"},"bytes"),", and your application receives it as a ",Object(r.mdx)("inlineCode",{parentName:"p"},"string"),". These can be converted into JavaScript objects, but they are not JavaScript objects by default. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"JSON.parse")," method parses the string and constructs the JavaScript object described by it.\nYou can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const req = new XMLHttpRequest();\nreq.open(\"GET\",'/json/cats.json',true);\nreq.send();\nreq.onload = function(){\n  const json = JSON.parse(req.responseText);\n  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);\n};\n")),Object(r.mdx)("p",null,"Here's a review of what each piece is doing. The JavaScript ",Object(r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object has a number of properties and methods that are used to transfer data. First, an instance of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object is created and saved in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"req")," variable. Next, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"open"),' method initializes a request - this example is requesting data from an API, therefore is a "GET" request. The second argument for ',Object(r.mdx)("inlineCode",{parentName:"p"},"open")," is the URL of the API you are requesting data from. The third argument is a Boolean value where ",Object(r.mdx)("inlineCode",{parentName:"p"},"true")," makes it an asynchronous request. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"send")," method sends the request. Finally, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"onload")," event handler parses the returned data and applies the ",Object(r.mdx)("inlineCode",{parentName:"p"},"JSON.stringify")," method to convert the JavaScript object into a string. This string is then inserted as the message text."),Object(r.mdx)("hr",null),Object(r.mdx)("p",null,'Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. Then click the "Get Message" button. Your AJAX function will replace the "The message will go here" text with the raw JSON output from the API.'),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Your code should create a new ",Object(r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest"),".\nYour code should use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"open"),' method to initialize a "GET" request to the freeCodeCamp Cat Photo API.\nYour code should use the ',Object(r.mdx)("inlineCode",{parentName:"p"},"send")," method to send the request.\nYour code should have an ",Object(r.mdx)("inlineCode",{parentName:"p"},"onload")," event handler set to a function.\nYour code should use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"JSON.parse")," method to parse the ",Object(r.mdx)("inlineCode",{parentName:"p"},"responseText"),".\nYour code should get the element with class ",Object(r.mdx)("inlineCode",{parentName:"p"},"message")," and change its inner HTML to the string of JSON data.")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<script>\n  document.addEventListener('DOMContentLoaded', function() {\n    document.getElementById('getMessage').onclick = function() {\n      // Add your code below this line\n      const req = new XMLHttpRequest();\n      req.open('GET', '/json/cats.json', true);\n      req.send();\n      req.onload = function() {\n        const json = JSON.parse(req.responseText);\n        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);\n      };\n      // Add your code above this line\n    };\n  });\n<\/script>\n\n<style>\n  body {\n    text-align: center;\n    font-family: \"Helvetica\", sans-serif;\n  }\n  h1 {\n    font-size: 2em;\n    font-weight: bold;\n  }\n  .box {\n    border-radius: 5px;\n    background-color: #eee;\n    padding: 20px 5px;\n  }\n  button {\n    color: white;\n    background-color: #4791d0;\n    border-radius: 5px;\n    border: 1px solid #4791d0;\n    padding: 5px 10px 8px 10px;\n  }\n  button:hover {\n    background-color: #0F5897;\n    border: 1px solid #0F5897;\n  }\n</style>\n\n<h1>Cat Photo Finder</h1>\n<p class=\"message box\">\n  The message will go here\n</p>\n<p>\n  <button id=\"getMessage\">\n    Get Message\n  </button>\n</p>\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h2",{id:"4-get-json-with-the-javascript-fetch-method"},"4. Get JSON with the JavaScript fetch method"),Object(r.mdx)("p",null,Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-fetch-method"}),"Learn JSON APIs and Ajax: Get JSON with the JavaScript fetch method | freeCodeCamp.org")),Object(r.mdx)("p",null,"Another way to request external data is to use the JavaScript ",Object(r.mdx)("inlineCode",{parentName:"p"},"fetch()")," method. It is equivalent to XMLHttpRequest, but the syntax is considered easier to understand.\nHere is the code for making a GET request to ",Object(r.mdx)("inlineCode",{parentName:"p"},"/json/cats.json")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fetch('/json/cats.json')\n    .then(response => response.json())\n    .then(data => {\n        document.getElementById('message').innerHTML = JSON.stringify(data);\n    })\n")),Object(r.mdx)("p",null,"Take a look at each piece of this code.\nThe first line is the one that makes the request. So, ",Object(r.mdx)("inlineCode",{parentName:"p"},"fetch(URL)")," makes a GET request to the URL specified. The method returns a Promise.\nAfter a Promise is returned, if the request was successful, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," method is executed, which takes the response and converts it to JSON format.\nThe ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," method also returns a Promise, which is handled by the next ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," method. The argument in the second ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," is the JSON object you are looking for!\nNow, it selects the element that will receive the data by using ",Object(r.mdx)("inlineCode",{parentName:"p"},"document.getElementById()"),". Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request."),Object(r.mdx)("hr",null),Object(r.mdx)("p",null,'Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. But this time, using the ',Object(r.mdx)("inlineCode",{parentName:"p"},"fetch")," method instead of ",Object(r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"."),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Your code should make a GET request with ",Object(r.mdx)("inlineCode",{parentName:"p"},"fetch"),".\nYour code should use ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," to convert the response to JSON.\nYour code should use ",Object(r.mdx)("inlineCode",{parentName:"p"},"then")," to handle the data converted to JSON by the other ",Object(r.mdx)("inlineCode",{parentName:"p"},"then"),".\nYour code should get the element with id ",Object(r.mdx)("inlineCode",{parentName:"p"},"message")," and change its inner HTML to the string of JSON data.")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<script>\n  document.addEventListener('DOMContentLoaded', function() {\n    document.getElementById('getMessage').onclick = () => {\n      // Add your code below this line\n      fetch('/json/cats.json')\n        .then(response => response.json())\n        .then(data => {\n          document.getElementById('message').innerHTML = JSON.stringify(data);\n        })\n      // Add your code above this line\n    };\n  });\n<\/script>\n<style>\n  body {\n    text-align: center;\n    font-family: \"Helvetica\", sans-serif;\n  }\n  h1 {\n    font-size: 2em;\n    font-weight: bold;\n  }\n  .box {\n    border-radius: 5px;\n    background-color: #eee;\n    padding: 20px 5px;\n  }\n  button {\n    color: white;\n    background-color: #4791d0;\n    border-radius: 5px;\n    border: 1px solid #4791d0;\n    padding: 5px 10px 8px 10px;\n  }\n  button:hover {\n    background-color: #0F5897;\n    border: 1px solid #0F5897;\n  }\n</style>\n<h1>Cat Photo Finder</h1>\n<p id=\"message\" class=\"box\">\n  The message will go here\n</p>\n<p>\n  <button id=\"getMessage\">\n    Get Message\n  </button>\n</p>\n")),Object(r.mdx)("hr",null))}l.isMDXComponent=!0},212:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return h})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){return function(t){var n=h(t.components);return o.a.createElement(e,s({},t,{components:n}))}},h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=h(n),p=a,m=l["".concat(s,".").concat(p)]||l[p]||u[p]||r;return n?o.a.createElement(m,d(d({ref:t},i),{},{components:n})):o.a.createElement(m,d({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);