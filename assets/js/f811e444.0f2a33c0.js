(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(102)),i={title:"Routing"},c={unversionedId:"routing",id:"routing",isDocsHomePage:!1,title:"Routing",description:"All routes are defined in the httpd/routes.go file, a typical route consist of three main parts:",source:"@site/docs/routing.md",slug:"/routing",permalink:"/docs/routing",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/routing.md",version:"current",sidebar:"docs",previous:{title:"Features Control",permalink:"/docs/features-control"},next:{title:"Handlers",permalink:"/docs/handlers"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All routes are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"httpd/routes.go")," file, a typical route consist of three main parts:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"the HTTP method, could be ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"post"),", ",Object(a.b)("inlineCode",{parentName:"li"},"put"),"...etc"),Object(a.b)("li",{parentName:"ol"},"the path "),Object(a.b)("li",{parentName:"ol"},"the handler function\nHere is an example of a route to handle ",Object(a.b)("inlineCode",{parentName:"li"},"get")," request to the path ",Object(a.b)("inlineCode",{parentName:"li"},"/todos")," with a handler function named ",Object(a.b)("inlineCode",{parentName:"li"},"showTodos"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'router.Get("/todos", handlers.ShowTodos)\n')),Object(a.b)("p",null,"The handler function ",Object(a.b)("inlineCode",{parentName:"p"},"ShowTodos")," should be defined in the handlers package, the path for it is ",Object(a.b)("inlineCode",{parentName:"p"},"httpd/handlers"),"\nfor more information on how to organize your handlers, have a look at the ",Object(a.b)("a",{parentName:"p",href:"./handlers"},"handlers section")," of the documentation"))}p.isMDXComponent=!0}}]);