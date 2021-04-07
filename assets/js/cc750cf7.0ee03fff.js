(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(97)),c={title:"Request Data"},l={unversionedId:"request-data",id:"request-data",isDocsHomePage:!1,title:"Request Data",description:"URL Parameters",source:"@site/docs/request-data.md",slug:"/request-data",permalink:"/docs/request-data",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/request-data.md",version:"current",sidebar:"docs",previous:{title:"Handlers",permalink:"/docs/handlers"},next:{title:"Validation and Input Binding",permalink:"/docs/validation"}},i=[],u={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"url-parameters"},"URL Parameters"),Object(o.b)("p",null,"URL or Path parameters can be defined by prefixing the parameter in the path with ",Object(o.b)("inlineCode",{parentName:"p"},":"),", the following example shows you how to define a url parameter and how to get its value:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"httpd/router.go")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'router.Get("/user/:name", handlers.SomeHandler)\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"httpd/handlers/users.go")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    name := c.Param("name")\n\n    c.JSON(http.StatusOK, gin.H{\n        "message": fmt.Sprintf("hello %s!", name),\n    })\n}\n\n')),Object(o.b)("h4",{id:"query-data"},"Query data"),Object(o.b)("p",null,"Query data are passed in the url ",Object(o.b)("inlineCode",{parentName:"p"},"/someurl?name=jack&age=30"),", to get the value of query parameters you can use any of the following methods:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    name := c.Query("name") # get the parameter \n\n    name := c.DefaultQuery("name", "guest") # use guest as default if name is missing \n}\n')),Object(o.b)("h4",{id:"post-data"},"Post Data"),Object(o.b)("p",null,"here is how you can get the posted data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    name := c.PostForm("name") # get the parameter \n\n    name := c.DefaultPostForm("name", "guest") # use \'guest\' as default if name is missing \n}\n')),Object(o.b)("h4",{id:"files"},"Files:"),Object(o.b)("p",null,"here is how you can get a single file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    file, _ := c.FormFile("filename")\n}\n')),Object(o.b)("p",null,"here is how you can get multiple files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    form, _ :=c.MultipartForm()\n    files := form.File["upload[]"]\n\n    for _, file := range files {\n        fmt.Prinln(file)\n    }\n}\n')),Object(o.b)("h4",{id:"save-uploaded-file"},"Save uploaded file:"),Object(o.b)("p",null,"Save uploaded files to specific destination"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    file, _ := c.FormFile("filename")\n    c.SaveUploadedFile(file, dest)\n}\n')),Object(o.b)("h4",{id:"header-data"},"Header Data:"),Object(o.b)("p",null,"here is how you can get header data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    authToken := c.Request.Header[\"Authorization\"] # get the 'authorization' header\n}\n")))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);