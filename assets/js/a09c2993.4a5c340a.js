(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(103)),a={title:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Condor is a golang web framework with an MVC like architecture, it's based on Gin framework, it provides you with an easy-to-use directory structure for your next project, it has a development experience similar to Laravel, made for developing modern APIs and microservices.",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/introduction.md",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/docs/installation"}},l=[{value:"Features\xa0",id:"features",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Directory structure\xa0",id:"directory-structure",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Condor is a golang web framework with an ",Object(i.b)("inlineCode",{parentName:"p"},"MVC")," like architecture, it's based on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/gin-gonic/gin"},"Gin framework"),", it provides you with an easy-to-use directory structure for your next project, it has a development experience similar to Laravel, made for developing modern APIs and microservices."),Object(i.b)("h2",{id:"features"},"Features\xa0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Router"),Object(i.b)("li",{parentName:"ul"},"Middlewares"),Object(i.b)("li",{parentName:"ul"},"JWT tokens"),Object(i.b)("li",{parentName:"ul"},"ORM (GORM)"),Object(i.b)("li",{parentName:"ul"},"Cache (Redis)"),Object(i.b)("li",{parentName:"ul"},"TLS"),Object(i.b)("li",{parentName:"ul"},"Context Package Integrator"),Object(i.b)("li",{parentName:"ul"},"Live-Reloading for development"),Object(i.b)("li",{parentName:"ul"},"Features Control")),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"The architecture is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"MVC")," architecture, there is a ",Object(i.b)("inlineCode",{parentName:"p"},"routes.go")," file where you can define all your routes and their ",Object(i.b)("inlineCode",{parentName:"p"},"handlers"),", the handler is simply a method that gets executed when the request is received, you can think of it like a controller's action in ",Object(i.b)("inlineCode",{parentName:"p"},"MVC")),Object(i.b)("h4",{id:"the-request-journey"},"The request journey:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Request -> Routing -> Middleware -> Handler -> Middleware -> Json Response")),Object(i.b)("h2",{id:"directory-structure"},"Directory structure\xa0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 condor\n\u2502\xa0 \xa0\u251c\u2500\u2500 config/ ---------------\x3e control what features to turn on\n\u2502\xa0 \xa0\u251c\u2500\u2500 httpd/-----------------\x3e http related code\n\u2502\xa0 \xa0\u2502\xa0 \xa0\u251c\u2500\u2500 handlers/ --------------\x3e contains your http requests handlers\n\u2502\xa0 \xa0\u2502\xa0 \xa0\u251c\u2500\u2500 middlewares/ -----------\x3e middlewares are defined here\n\u2502\xa0 \xa0\u251c\u2500\u2500 routes.go -------------\x3e your routes are defined here\n\u2502\xa0 \xa0\u251c\u2500\u2500 integrations/ ---------\x3e contains the integrations of third party packages into gin context\n\u2502\xa0 \xa0\u251c\u2500\u2500 logs/ -----------------\x3e log files\n\u2502\xa0 \xa0\u251c\u2500\u2500 models/ ---------------\x3e database models\n\u2502\xa0 \xa0\u251c\u2500\u2500 ssl/ ------------------\x3e ssl certificates\n\u2502\xa0 \xa0\u251c\u2500\u2500 .env ------------------\x3e environment variables\xa0\n\u2502\xa0 \xa0\u251c\u2500\u2500 .gitignore ------------\x3e gitignore file\n\u2502\xa0 \xa0\u251c\u2500\u2500 go.mod ----------------\x3e go modules the project depends on\n\u2502\xa0 \xa0\u251c\u2500\u2500 LICENSE ---------------\x3e license\n\u2502\xa0 \xa0\u251c\u2500\u2500 main.go ---------------\x3e ssl certificates\n\u2502\xa0 \xa0\u251c\u2500\u2500 README.md -------------\x3e readme file\n")))}s.isMDXComponent=!0}}]);