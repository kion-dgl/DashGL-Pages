(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[769],{1046:function(e,t,a){"use strict";a.d(t,{w_:function(){return m}});var r=a(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function m(e){return function(t){return r.createElement(i,c({attr:c({},e.attr)},t),s(e.child))}}function i(e){var t=function(t){var a,l=e.attr,n=e.size,s=e.title,m=o(e,["attr","size","title"]),i=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,m,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(l)}},3375:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7294);function l(){return r.createElement("footer",{className:"text-center text-lg-start bg-dark text-light border-top mt-5"},r.createElement("section",{className:"pt-2",style:{backgroundColor:"rgba(255, 255, 255, 0.05)"}},r.createElement("div",{className:"container text-center text-md-start mt-5"},r.createElement("div",{className:"row mt-3"},r.createElement("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"},r.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Social Icons"),r.createElement("p",null,"Permission to use, copy, modify, and/or distribute these examples for any purpose with or without fee is hereby granted.")),r.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"},r.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Resources"),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"Contact")),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"Support")),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"Mascot"))),r.createElement("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"},r.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Support"),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"About")),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"License")),r.createElement("p",null,r.createElement("a",{href:"#!",className:"text-reset"},"Contribute"))),r.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"},r.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Contact"),r.createElement("p",null," Reddit : u/kion_dgl"),r.createElement("p",null,"Email : kion@dashgl.com"),r.createElement("p",null,"Twitter : @kion_dgl"))))),r.createElement("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"}},"Copyright © 2016 - 2021 DashGL Project"))}},5617:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7294),l=a(5444);function n(){return r.createElement("nav",{className:"navbar navbar-expand-lg py-2 navbar-dark",style:{backgroundColor:"#1f5756"}},r.createElement("div",{className:"container"},r.createElement("a",{className:"navbar-brand me-2 d-flex align-items-center"},r.createElement("img",{src:"/dash_icon.png",height:"25",style:{marginRight:"0.5rem"},alt:"DashGL Logo"}),"DashGL"),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarButtonsExample","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarButtonsExample"},r.createElement("ul",{className:"me-auto"}),r.createElement("div",{className:"navbar-nav d-flex align-items-center"},r.createElement(l.rU,{to:"/",className:"nav-link active"},"Home"),r.createElement(l.rU,{to:"/tutorials",className:"nav-link active"},"Tutorials"),r.createElement(l.rU,{to:"/blog",className:"nav-link active"},"Blog"),r.createElement(l.rU,{to:"/post",className:"nav-link active"},"Post"),r.createElement(l.rU,{to:"/format",className:"nav-link active"},"Format")))))}},5364:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),l=a(5444),n=a(5617),c=a(3375),o=a(3201);function s(e){var t=e.contents,a=e.node,n=(a.frontmatter.slug,a.frontmatter.index);return r.createElement("section",{className:"col-md-4 mb-4"},r.createElement("ul",{className:"toc-module--toc--RXN--"},t.lessons.map((function(e,t){var c=t.toString().padStart(2,"0"),o="/"+a.frontmatter.slug+"/"+c+"/";return r.createElement(l.rU,{to:o,key:o},r.createElement("li",{className:t===n?"toc-module--active--3IhYm":""},e.index?e.index.toString()+". ":"",e.title))}))))}function m(e){var t=e.node;return r.createElement("section",{className:"py-4"},r.createElement("h1",{className:"border-bottom py-2 mb-3"}," ",t.frontmatter.index,". ",t.frontmatter.title," "),r.createElement("div",{className:"row align-items-center mb-4"},r.createElement("div",{className:"col-lg-6 text-center text-lg-start mb-3 m-lg-0"},r.createElement("img",{src:"https://avatars.githubusercontent.com/u/25621780?v=4",className:"rounded-circle shadow-1-strong me-2",height:"35",alt:"",loading:"lazy"}),r.createElement("span",null," Created on Sept. 24, 2017 by Kion")),r.createElement("div",{className:"col-lg-6 text-center text-lg-end"},r.createElement("a",{href:t.frontmatter.source,target:"_blank"},"View Source on Github"))))}function i(e){var t=e.node;console.log(t);var a=(t.frontmatter.index-1).toString().padStart(2,"0"),n=(t.frontmatter.index+1).toString().padStart(2,"0"),c="/"+t.frontmatter.slug+"/"+a+"/",s="/"+t.frontmatter.slug+"/"+n+"/";return r.createElement("div",{className:"row pt-5 flex-row-reverse justify-content-between"},r.createElement("div",{class:"col-sm-7 col-md-4"},t.frontmatter.index<t.frontmatter.length-1?r.createElement(l.rU,{to:s},r.createElement("button",{className:"w-100 mb-2 py-2 btn btn-outline-primary rounded-pill"},"Next Chapter ",r.createElement(o.H_v,null))):r.createElement(l.rU,{to:"/tutorials"},r.createElement("button",{className:"w-100 mb-2 py-2 btn btn-outline-primary rounded-pill"},"Complete Tutorial"))),r.createElement("div",{class:"col-sm-7 col-md-4"},t.frontmatter.index>0&&r.createElement(l.rU,{to:c},r.createElement("button",{className:"w-100 mb-2 py-2 btn btn-outline-primary rounded-pill"},r.createElement(o._HU,null)," Previous Chapter"))))}function u(e){var t=e.node;return r.createElement("div",{className:"col-md-8 mb-4"},r.createElement(m,{node:t}),r.createElement("div",{className:"post-module--post--qv-xQ",dangerouslySetInnerHTML:{__html:t.html}}),r.createElement(i,{node:t}))}function d(e){var t=e.data,a=t.allMarkdownRemark.nodes[0],l=t.allTutorialsJson.nodes[0];return console.log("--- NODE ---"),console.log(a),console.log(" --- CONTENTS ---"),console.log(l),r.createElement(r.Fragment,null,r.createElement(n.Z,null),r.createElement("main",{className:"mt-4 mb-5"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row flex-row-reverse"},r.createElement(u,{node:a}),r.createElement(s,{node:a,contents:l})))),r.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-templates-lesson-js-3ff9ca1ceef728a180e2.js.map