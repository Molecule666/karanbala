"use strict";(self.webpackChunkkaranbala=self.webpackChunkkaranbala||[]).push([[141],{1141:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(7313),o=t(8467),i=t(9506),a=t(1113),s=t(7131),l=t(8070),c=t(5554),u=t(3433),d=t(9439),p=t(9099),m=t(2135),h=t(6417),x=function(e){var n=(0,r.useState)([{key:"",value:!1}]),t=(0,d.Z)(n,2),o=t[0],i=t[1],a=e.item,s=e.depthLevel,l=(0,r.useRef)();return(0,h.jsx)("li",{className:"menu-items",ref:l,children:a.category?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:"categoryTitle",children:a.category.title}),a.category.children.map((function(e,n){var t;return(0,h.jsx)(r.Fragment,{children:e.submenu?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{type:"button","aria-haspopup":"menu",onClick:function(){i((function(n){var t;return[].concat((0,u.Z)(n),[{key:e.title,value:!(null!==(t=n[n.map((function(e){return e.key})).lastIndexOf(e.title)])&&void 0!==t&&t.value)}])}))},style:{display:"flex",justifyContent:"space-between"},children:[e.title," ",s>0?(0,h.jsx)("span",{children:"\xbb"}):(0,h.jsxs)(h.Fragment,{children:[" ",null!==(t=o[o.map((function(e){return e.key})).lastIndexOf(e.title)])&&void 0!==t&&t.value?(0,h.jsx)("span",{className:"arrow"}):(0,h.jsx)("span",{className:"arrow-left"})]})]}),(0,h.jsx)(f,{depthLevel:s,submenus:e.submenu,subtitle:o,index:e.title})]}):(0,h.jsx)(p.Z,{disableRipple:!0,component:m.OL,to:e.to,startIcon:e.startIcon,children:e.title})},n)}))]}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.Z,{disableRipple:!0,component:m.OL,to:a.to,startIcon:a.startIcon,children:a.title})})})},f=function(e){var n,t=e.submenus,r=e.depthLevel,o=e.index,i=e.subtitle,a=i.map((function(e){return e.key})).lastIndexOf(o),s=(r+=1)>1?"dropdown-submenu":"";return(0,h.jsx)("ul",{"data-id":o,className:"dropdown ".concat(s," ").concat(null!==(n=i[a])&&void 0!==n&&n.value?"show":""),children:t.map((function(e,n){return(0,h.jsx)(x,{item:e,depthLevel:r},n)}))})},v=(0,t(7894).Z)(i.Z)((function(){return"\n  :root{\n    font-family:IRANSans !important;\n    }\n  \n  .menus {\n    display: flex;\n    list-style: none;\n    direction: ltr;\n    flex-direction: column;\n    \n  }\n  .menu-items {\n    position: relative;\n    text-align: left;\n    \n  }\n  \n  .menu-items a,\n  .menu-items button {\n    margin: 0 ;\n    padding:0 10px 0  0;\n    line-height: 2;\n    font-family:IRANSans !important;\n\n  }\n  \n  .menu-items a {\n    display: block;\n    color: inherit;\n    text-decoration: none;\n  }\n  \n  .menu-items button {\n    color: inherit;\n    font-size: inherit;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    width: 100%;\n  }\n \n  .arrow::after {\n    content: '';\n    display: inline-block;\n    margin-left: 0.28em;\n    vertical-align: 0.09em;\n    border-top: 0.42em solid;\n    border-right: 0.32em solid transparent;\n    border-left: 0.32em solid transparent;\n  }\n\n  .arrow-left::after {\n    content: '';\n    display: inline-block;\n    margin-left: 0.28em;\n    vertical-align: 0.09em;\n    border-bottom: 0.32em solid transparent;\n    border-right: 0.32em solid  transparent;\n    border-left: 0.42em solid ;\n    border-top: 0.32em solid transparent;\n  }\n\n  .categoryTitle{\n    color: #707e8d\n  }\n  \n  .dropdown {\n\n    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),\n    0 4px 6px -2px rgba(71, 63, 79, 0.16);\n    z-index: 9999;\n    min-width: 100px;\n    padding: 0.5rem 0;\n    border-radius: 0.5rem;\n    list-style-type: disc; \n    display: none;\n  }\n  \n  .dropdown.show {\n    display: block;\n    padding: 0 28px;\n  }\n  \n  .dropdown .dropdown-submenu {\n    position: absolute;\n    left: 10px;\n    top: 15px\n  }\n  span{ display: inline}\n  span .MuiSvgIcon-root{font-size:15px}\n  "})),j=function(e){var n=e.children;return(0,h.jsx)(v,{children:(0,h.jsx)("ul",{className:"menus",children:n})})},b=function(e){var n=e.items;return(0,h.jsx)(j,{children:n.map((function(e,n){return(0,h.jsx)(x,{item:e,depthLevel:0,children:" "},n)}))})},g=t(7887),Z=t(1765),y=[{title:"\u062e\u0627\u0646\u0647",to:"/",startIcon:(0,h.jsx)(g.Z,{})},{title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",to:"/pv/karanbala/admin",startIcon:(0,h.jsx)(Z.Z,{})},{category:{children:[{title:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u062d\u062a\u0648\u0627",submenu:[{title:"\u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/field-of-study"},{title:"\u067e\u0627\u06cc\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/grade-level"},{title:"\u06a9\u062a\u0627\u0628",to:"/pv/karanbala/admin/book"},{title:"\u062a\u0631\u0645 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/term-of-study"},{title:"\u0641\u0635\u0644",to:"/pv/karanbala/admin/chapter"},{title:"\u0645\u0648\u0636\u0648\u0639",to:"/pv/karanbala/admin/subject"}]}]}}],w=t(2702),k=function(e){var n,t=e.route,r=e.userRole,o=e.children,i=null===r||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.some((function(e){var n;return t.requiredRoles.includes(e.title)&&(null===(n=e.permissions)||void 0===n?void 0:n.some((function(e){return e.resource===t.resource&&e.action===t.action})))}));return console.log(i),console.log(r),console.log(t),(0,h.jsx)(h.Fragment,{children:o})},N=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),R=function(){var e=N();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u0631\u0634\u062a\u0647"})},A=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),I=function(){var e=A();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"})},S=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),E=function(){var e=S();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u06a9\u062a\u0627\u0628"})},W=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),T=function(){var e=W();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u0641\u0635\u0644"})},z=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),q=function(){var e=z();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u0645\u0648\u0636\u0648\u0639"})},C=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),L=function(){var e=C();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u067e\u0627\u06cc\u0647"})},V=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),H=function(){var e=V();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u062a\u0631\u0645"})},F=function(){var e=(0,c.v9)((function(e){return e.user}));return(0,h.jsxs)(o.Z5,{children:[(0,h.jsx)(o.AW,{path:"/field-of-study",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(R,{})})}),(0,h.jsx)(o.AW,{path:"/grade-level",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(L,{})})}),(0,h.jsx)(o.AW,{path:"/book",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(E,{})})}),(0,h.jsx)(o.AW,{path:"/term-of-study",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(H,{})})}),(0,h.jsx)(o.AW,{path:"/chapter",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(T,{})})}),(0,h.jsx)(o.AW,{path:"/subject",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(q,{})})}),(0,h.jsx)(o.AW,{path:"/",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(I,{})})})]})},M=(0,l.Z)((function(e){return{container:{margin:"32px 52px"},contentWrapper:{},content:{margin:"16px 0",padding:"2px 0",float:"right"},menu:{margin:"0 0 0 150px ",width:"200px",float:"right"},button:{color:e.palette.text.primary},badge:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:"5px"}}})),U=function(){var e,n,t,l=(0,c.v9)((function(e){return e.user}));(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,r.useEffect)((function(){}),[l]);var u=M(),d=(0,o.s0)();return(0,h.jsxs)(i.Z,{className:u.container,children:[(0,h.jsxs)(i.Z,{display:"flex",justifyContent:"space-around",children:[(0,h.jsxs)(i.Z,{display:"flex",gap:"10px",children:[(0,h.jsx)(a.Z,{variant:"h5",children:null===l||void 0===l||null===(e=l.user)||void 0===e?void 0:e.username}),null===l||void 0===l||null===(n=l.user)||void 0===n||null===(t=n.roles)||void 0===t?void 0:t.map((function(e){return(0,h.jsx)(i.Z,{className:u.badge,children:(0,h.jsx)(a.Z,{variant:"body2",children:"User"===e.title?"\u06a9\u0627\u0631\u0628\u0631 \u0639\u0627\u062f\u06cc":"\u0645\u062f\u06cc\u0631 \u06a9\u0644"})},e.title)}))]}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(s.Z,{className:u.button,onClick:function(){localStorage.removeItem("token"),d("/")},children:(0,h.jsx)(w.Z,{})})})]}),(0,h.jsxs)(i.Z,{className:u.contentWrapper,children:[(0,h.jsx)(i.Z,{className:u.menu,children:(0,h.jsx)(b,{items:y})}),(0,h.jsx)(i.Z,{className:u.content,children:(0,h.jsx)(F,{})})]})]})},O=[{title:"\u062e\u0627\u0646\u0647",to:"/",startIcon:(0,h.jsx)(g.Z,{})},{title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",to:"/pv/karanbala/dashboard",startIcon:(0,h.jsx)(Z.Z,{})},{category:{children:[{title:"\u067e\u0631\u0648\u0641\u0627\u06cc\u0644"}]}}],D=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),Q=function(){var e=D();return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,h.jsx)(i.Z,{className:e.container,children:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"})},B=function(){var e=(0,c.v9)((function(e){return e.user}));return(0,h.jsx)(o.Z5,{children:(0,h.jsx)(o.AW,{path:"/",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["User"],resource:"profile",action:"read"},children:(0,h.jsx)(Q,{})})})})},G=(0,l.Z)((function(e){return{container:{margin:"32px 52px"},contentWrapper:{},content:{margin:"16px 0",padding:"2px 0",float:"right"},menu:{margin:"0 0 0 150px ",width:"200px",float:"right"},button:{color:e.palette.text.primary},badge:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:"5px"}}})),J=function(){var e,n,t,l=(0,c.v9)((function(e){return e.user}));(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,r.useEffect)((function(){}),[l]);var u=G(),d=(0,o.s0)();return(0,h.jsxs)(i.Z,{className:u.container,children:[(0,h.jsxs)(i.Z,{display:"flex",justifyContent:"space-around",children:[(0,h.jsxs)(i.Z,{display:"flex",gap:"10px",children:[(0,h.jsx)(a.Z,{variant:"h5",children:null===l||void 0===l||null===(e=l.user)||void 0===e?void 0:e.username}),null===l||void 0===l||null===(n=l.user)||void 0===n||null===(t=n.roles)||void 0===t?void 0:t.map((function(e){return(0,h.jsx)(i.Z,{className:u.badge,children:(0,h.jsx)(a.Z,{variant:"body2",children:"User"===e.title?"\u06a9\u0627\u0631\u0628\u0631 \u0639\u0627\u062f\u06cc":"\u0645\u062f\u06cc\u0631 \u06a9\u0644"})},e.title)}))]}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(s.Z,{className:u.button,onClick:function(){localStorage.removeItem("token"),d("/")},children:(0,h.jsx)(w.Z,{})})})]}),(0,h.jsxs)(i.Z,{className:u.contentWrapper,children:[(0,h.jsx)(i.Z,{className:u.menu,children:(0,h.jsx)(b,{items:O})}),(0,h.jsx)(i.Z,{className:u.content,children:(0,h.jsx)(B,{})})]})]})},K=t(874),P=t(9273),X=t(5200),Y=function(e){var n,t=e.children,o=null!==(n=(0,c.v9)((function(e){return e.auth})).token)&&void 0!==n?n:localStorage.getItem("token");return(0,r.useEffect)((function(){if(o){var e=(0,X.Z)(null!==o&&void 0!==o?o:"");K.h.dispatch({type:P.Q.SetUserToken,payload:o}),K.h.dispatch({type:P.Q.SetUserData,payload:e})}}),[o]),(0,h.jsx)(h.Fragment,{children:t})},$=function(){var e=(0,c.v9)((function(e){return e.user})),n=localStorage.getItem("token"),t=(0,o.s0)();return(0,r.useEffect)((function(){void 0==n&&t("/")}),[t,n,e]),(0,h.jsx)(Y,{children:(0,h.jsxs)(o.Z5,{children:[(0,h.jsx)(o.AW,{path:"/karanbala/dashboard/*",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["User"],resource:"profile",action:"read"},children:(0,h.jsx)(J,{})})}),(0,h.jsx)(o.AW,{path:"/karanbala/admin/*",element:(0,h.jsx)(k,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,h.jsx)(U,{})})})]})})}},1765:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5045)),i=t(6417),a=(0,o.default)((0,i.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");n.Z=a},2702:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5045)),i=t(6417),a=(0,o.default)((0,i.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");n.Z=a},7887:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5045)),i=t(6417),a=(0,o.default)([(0,i.jsx)("path",{d:"M1 11v10h5v-6h4v6h5V11L8 6z"},"0"),(0,i.jsx)("path",{d:"M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"},"1")],"HomeWork");n.Z=a}}]);