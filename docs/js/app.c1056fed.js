(function(t){function e(e){for(var o,l,r=e[0],i=e[1],c=e[2],v=0,u=[];v<r.length;v++)l=r[v],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,r=1;r<s.length;r++){var i=s[r];0!==n[i]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=s[0]))}return t}var o={},n={app:0},a=[];function l(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=o,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(s,o,function(e){return t[e]}.bind(null,o));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=i;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},"0eff":function(t,e,s){},"12fc":function(t,e,s){},4443:function(t,e,s){"use strict";var o=s("bb40"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-layout-admin",[s("v-navbar",{attrs:{slot:"header",title:"RevoltUI"},slot:"header"},[s("v-menu",[s("v-menu-item",[t._v("Alfa Version")])],1),s("v-menu",{attrs:{slot:"right"},slot:"right"},[s("v-menu-item",[t._v("Homepage")]),s("v-menu-item",[t._v("Item One")]),s("v-menu-item",{attrs:{to:"https://www.google.com",target:"_blank"}},[t._v(" v"+t._s(t.cfgPackage.version)+" ")])],1)],1),s("div",{attrs:{slot:"left"},slot:"left"},[s("v-menu",[s("v-menu-item",{attrs:{to:"/"}},[t._v("Introduction")])],1),s("v-menu",{attrs:{title:"Get Start"}},[s("v-menu-item",{attrs:{to:"/instalation"}},[t._v("Instalation")])],1),s("v-menu",{attrs:{title:"Components"}},[s("v-menu-item",{attrs:{to:"/buttons"}},[t._v("Buttons")]),s("v-menu-item",{attrs:{to:"/badges"}},[t._v("Badges")]),s("v-menu-item",{attrs:{to:"/cards"}},[t._v("Cards")]),s("v-menu-item",{attrs:{to:"/menus"}},[t._v("Menus")]),s("v-menu-item",{attrs:{to:"/forms"}},[t._v("Forms")]),s("v-menu-item",{attrs:{to:"/grid"}},[t._v("Grid")])],1),s("v-menu",{attrs:{title:"Others"}},[s("v-menu-item",{attrs:{to:"#grid"}},[t._v("Help")])],1)],1),s("div",{staticClass:"p-2"},[s("router-view")],1)],1)],1)},a=[],l=s("9224"),r={name:"app",data:function(){return{cfgPackage:l}}},i=r,c=(s("034f"),s("2877")),d=Object(c["a"])(i,n,a,!1,null,null,null),v=d.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("DocContent",{attrs:{title:"Instalation",id:"Instalation"}},[s("div",{staticClass:"mb-5",attrs:{slot:"example"},slot:"example"},[t._v(" Install with NPM ")]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"bash"},[t._v(" "+t._s(t.codeNpm)+" ")])])],2),s("DocContent",[s("div",{staticClass:"mb-5",attrs:{slot:"example"},slot:"example"},[t._v(" Install with Yarn ")]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"bash"},[t._v(" "+t._s(t.codeYarn)+" ")])])],2)],1)},m=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"doc-content m-3",attrs:{id:t.id}},[s("v-card",{attrs:{title:t.title}},[t._t("example"),s("div",{ref:"code",staticClass:"code px-3 mb-3"},[s("pre",[t._v("          "),t._t("code"),t._v("\n      ")],2)]),this.$slots["doc-props"]?s("div",{staticClass:"mb-3"},[s("h3",[t._v("Props")]),s("v-table",{attrs:{heads:t.propsHeadersDocs,bordered:!0}},[t._t("doc-props")],2)],1):t._e(),this.$slots["doc-events"]?s("div",{staticClass:"mb-3"},[s("h3",[t._v("Events")]),s("v-table",{attrs:{heads:t.propsHeadersEvents,bordered:!0}},[t._t("doc-events")],2)],1):t._e()],2)],1)},_=[],h=s("a70e"),b=s.n(h),g=(s("2c43"),{props:["title","id"],data:function(){return{propsHeadersDocs:["Name","Type","Default","Mandatory","Description"],propsHeadersEvents:["Name","Parameters","Description"]}},mounted:function(){b.a.highlightBlock(this.$refs.code)}}),C=g,y=(s("c4eb"),Object(c["a"])(C,f,_,!1,null,"5b8b8516",null)),x=y.exports,w={components:{DocContent:x},data:function(){return{codeYarn:"\n$ yarn add vuepp\n",codeNpm:"\n$ npm install vuepp\n"}}},O=w,T=Object(c["a"])(O,p,m,!1,null,null,null),D=T.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("DocContent",{attrs:{title:"Responsive Grid",id:"grid"}},[s("div",{staticClass:"row",attrs:{slot:"example"},domProps:{innerHTML:t._s(t.code)},slot:"example"}),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("div",{staticClass:"footer"},[s("p",[s("strong",[t._v(".row")]),t._v(" the row")]),s("p",[s("strong",[t._v(".w-##")]),t._v(" divided width by 12 columns")])])],2)},$=[],S={components:{DocContent:x},data:function(){return{code:'\n<div class="col-sm-6 col-md-8 col-lg-3">\n    <div class="py-3 m-3 text-center bg-primary text-white">col-sm-6 col-md-8 col-lg-3</div>\n</div>\n<div class="col-sm-4">\n    <div class="py-3 m-3 text-center bg-primary text-white">col-sm-4</div>\n</div>'}}},j=S,E=Object(c["a"])(j,I,$,!1,null,null,null),k=E.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"m-3"},[s("v-header",[t._v("Buttons")])],1),s("DocContent",{attrs:{title:"Normal Buttons"}},[s("div",{staticClass:"row",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"flex col-md-12"},[s("div",{staticClass:"px-1"},[s("v-button",[t._v("Default")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"primary"}},[t._v("Primary")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"secondary"}},[t._v("Secondary")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"success"}},[t._v("Success")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"info"}},[t._v("Info")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"danger"}},[t._v("Danger")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{color:"warning"}},[t._v("Warning")])],1)]),s("div",{staticClass:"flex col-md-12 mt-5"},[s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0}},[t._v("Default")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"primary"}},[t._v("Primary")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"secondary"}},[t._v("Secondary")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"success"}},[t._v("Success")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"info"}},[t._v("Info")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"danger"}},[t._v("Danger")])],1),s("div",{staticClass:"px-1"},[s("v-button",{attrs:{"no-shadow":!0,color:"warning"}},[t._v("Warning")])],1)])])]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("color")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"},[t._v("default")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"},[t._v("You can use the styles bellow: "),s("br"),s("b",[t._v("(default, primary, secondary, success, info, danger, warning)")])])],2),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("no-shadow")]),s("template",{slot:"type"},[t._v("boolean")]),s("template",{slot:"default"},[t._v("true")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"})],2),s("TablePropsEventsItem",{attrs:{slot:"doc-events"},slot:"doc-events"},[s("template",{slot:"name"},[t._v("@click")]),s("template",{slot:"params"}),s("template",{slot:"description"},[t._v("Fired when user click on button")])],2)],2)],1)},H=[],B={components:{DocContent:x},data:function(){return{code:'\n<v-button>Default</v-button>\n<v-button color="primary">Primary</v-button>\n<v-button color="secondary">Secondary</v-button>\n<v-button color="success">Success</v-button>\n<v-button color="info">Info</v-button>\n<v-button color="danger">Danger</v-button>\n<v-button color="warning">Warning</v-button>\n\n<v-button :no-shadow="true">Default</v-button>\n<v-button :no-shadow="true" color="primary">Primary</v-button>\n<v-button :no-shadow="true" color="secondary">Secondary</v-button>\n<v-button :no-shadow="true" color="success">Success</v-button>\n<v-button :no-shadow="true" color="info">Info</v-button>\n<v-button :no-shadow="true" color="danger">Danger</v-button>\n<v-button :no-shadow="true" color="warning">Warning</v-button>\n'}}},M=B,N=Object(c["a"])(M,P,H,!1,null,null,null),A=N.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"m-3"},[s("v-header",[t._v("Badges")])],1),s("DocContent",{attrs:{title:"Badges"}},[s("div",{staticClass:"row",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"flex col-md-12"},[s("div",{staticClass:"px-1"},[s("v-badge",[t._v("Default")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"primary"}},[t._v("Primary")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"secondary"}},[t._v("secondary")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"success"}},[t._v("Success")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"info"}},[t._v("Info")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"danger"}},[t._v("Danger")])],1),s("div",{staticClass:"px-1"},[s("v-badge",{attrs:{color:"warning"}},[t._v("Warning")])],1)])])]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("color")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"},[t._v("default")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"},[t._v("You can use the styles bellow: "),s("br"),s("b",[t._v("(default, primary, secondary, success, info, danger, warning)")])])],2)],2)],1)},z=[],F={components:{DocContent:x},data:function(){return{code:'\n<v-badge>Default</v-badge>\n<v-badge color="primary">Primary</v-badge>\n<v-badge color="secondary">secondary</v-badge>\n<v-badge color="success">Success</v-badge>\n<v-badge color="info">Info</v-badge>\n<v-badge color="danger">Danger</v-badge>\n<v-badge color="warning">Warning</v-badge>\n'}}},L=F,V=Object(c["a"])(L,W,z,!1,null,null,null),Y=V.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"m-3"},[s("v-header",[t._v("Cards")])],1),s("DocContent",{attrs:{title:"Cards",id:"cards"}},[s("div",{staticClass:"row mb-5",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{title:"Default"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"primary",title:"Primary"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"secondary",title:"secondary"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"success",title:"Success"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"info",title:"Info"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"danger",title:"Danger"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1),s("div",{staticClass:"col-md-3 p-2"},[s("v-card",{attrs:{color:"warning",title:"Warning"}},[t._v(" The conntent "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("The footer")])])],1)]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("color")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"},[t._v("default")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"},[t._v("You can use the styles bellow: "),s("br"),s("b",[t._v("(default, primary, secondary, success, info, danger, warning)")])])],2)],2)],1)},G=[],J={components:{DocContent:x},data:function(){return{code:'\n<v-card title="Default" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="primary" title="Primary" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="secondary" title="secondary" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="success" title="Success" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="info" title="Info" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="danger" title="Danger" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>\n<v-card color="warning" title="Warning" class="m-2">\n  The conntent\n  <div slot="footer">The footer</div>\n</v-card>'}}},U=J,q=Object(c["a"])(U,R,G,!1,null,null,null),K=q.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"m-3"},[s("v-header",[t._v("Menus")])],1),s("DocContent",{attrs:{title:"Menus"}},[s("div",{staticClass:"mb-5",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("v-menu",{attrs:{title:"NavMenu"}},[s("v-menu-item",[t._v("Homepage")]),s("v-menu-item",[t._v("Item One")]),s("v-menu-item",{attrs:{to:"https://www.google.com",target:"_blank"}},[t._v(" Item Two ")])],1)],1)]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-sm-12"},[s("v-menu",{attrs:{title:"Horizontal Menu",view:"horizontal"}},[s("v-menu-item",[t._v("Homepage")]),s("v-menu-item",[t._v("Item One")]),s("v-menu-item",{attrs:{to:"https://www.google.com",target:"_blank"}},[t._v(" Item Two ")])],1)],1)])]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("view")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"},[t._v("vertical")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"},[t._v("vertical or horizontal")])],2)],2)],1)},X=[],Z={components:{DocContent:x},data:function(){return{code:'\n<v-menu title="Example">\n  <v-menu-item>Homepage</v-menu-item>\n  <v-menu-item>Item One</v-menu-item>\n  <v-menu-item to="https://www.google.com" target="_blank">Item Two</v-menu-item>\n</v-menu>\n'}}},tt=Z,et=Object(c["a"])(tt,Q,X,!1,null,null,null),st=et.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("DocContent",{attrs:{title:"Menus",id:"menus"}},[s("div",{staticClass:"mb-5",attrs:{slot:"example"},slot:"example"},[s("v-navbar",{staticClass:"mb-3",attrs:{title:"Example",link:"#"}},[s("v-menu",[s("v-menu-item",[t._v("Homepage")]),s("v-menu-item",[t._v("About Us")]),s("v-menu-item",[t._v("Contacts")])],1)],1)],1),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("div",{staticClass:"footer"},[s("p",[s("strong",[t._v("(slot)")])]),s("p",{staticClass:"text-sm"},[t._v(" string ")])])],2)},nt=[],at={components:{DocContent:x},data:function(){return{code:'\n<v-menu title="Example">\n  <v-menu-item>Homepage</v-menu-item>\n  <v-menu-item>Item One</v-menu-item>\n  <v-menu-item to="https://www.google.com" target="_blank">Item Two</v-menu-item>\n</v-menu>\n'}}},lt=at,rt=Object(c["a"])(lt,ot,nt,!1,null,null,null),it=rt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("DocContent",{attrs:{title:"Icons",id:"icons"}},[s("div",{staticClass:"mb-5",attrs:{slot:"example"},slot:"example"},[s("v-icon",{attrs:{color:"primary"}},[t._v("far fa-arrow-alt-circle-up")])],1),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("div",{staticClass:"footer"},[s("p",[s("strong",[t._v("(slot)")])]),s("p",{staticClass:"text-sm"},[t._v(" string ")])])],2)},dt=[],vt={components:{DocContent:x},data:function(){return{code:"\n<v-icon>far fa-arrow-alt-circle-up</v-icon>\n"}}},ut=vt,pt=Object(c["a"])(ut,ct,dt,!1,null,null,null),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"m-3"},[s("v-header",[t._v("Forms")])],1),s("DocContent",{attrs:{title:"Selects",id:"selects"}},[s("div",{staticClass:"row",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"col-md-12 mb-5"},[s("v-select",{attrs:{placeholder:"Select some option"}},[s("v-select-item",{attrs:{value:"Option A"}},[t._v("Option A")]),s("v-select-item",{attrs:{value:"Option B"}},[t._v("Option B")]),s("v-select-item",{attrs:{value:"Option C"}},[t._v("Option C")]),s("v-select-item",{attrs:{value:"Option D"}},[t._v("Option D")]),s("v-select-item",{attrs:{value:"Option E"}},[t._v("Option E")])],1)],1)]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.code)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("placeholder")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"}),s("template",{slot:"mandatory"}),s("template",{slot:"description"})],2)],2),s("DocContent",{attrs:{title:"Input fields",id:"input-fields"}},[s("div",{staticClass:"row",attrs:{slot:"example"},slot:"example"},[s("div",{staticClass:"col-md-6 p-3"},[s("v-input",{attrs:{value:"This is a random text"}})],1),s("div",{staticClass:"col-md-6 p-3"},[s("v-input",{attrs:{placeholder:"This is a random placeholder"}})],1),s("div",{staticClass:"col-md-6 p-3"},[s("v-input",{attrs:{type:"number",value:"33,76"}})],1),s("div",{staticClass:"col-md-6 p-3"},[s("v-input",{attrs:{type:"select"}},[s("option",{attrs:{selected:""}},[t._v("Option A")])])],1)]),s("template",{attrs:{type:"html"},slot:"code"},[s("code",{staticClass:"html"},[t._v(" "+t._s(t.codeInput)+" ")])]),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("placeholder")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"}),s("template",{slot:"mandatory"}),s("template",{slot:"description"})],2),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("value")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"}),s("template",{slot:"mandatory"}),s("template",{slot:"description"})],2),s("TablePropsDocsItem",{attrs:{slot:"doc-props"},slot:"doc-props"},[s("template",{slot:"name"},[t._v("type")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"},[t._v("text")]),s("template",{slot:"mandatory"}),s("template",{slot:"description"},[t._v(" Options: text, select, number, date, textarea ")])],2),s("TablePropsDocsItem",{attrs:{slot:"doc-events"},slot:"doc-events"},[s("template",{slot:"name"},[t._v("@input")]),s("template",{slot:"type"},[t._v("string")]),s("template",{slot:"default"}),s("template",{slot:"mandatory"}),s("template",{slot:"description"})],2)],2)],1)},_t=[],ht={components:{DocContent:x},data:function(){return{code:'\n<v-select placeholder="Select some option">\n  <v-select-item value="Option A">Option A</v-select-item>\n  <v-select-item value="Option B">Option B</v-select-item>\n  <v-select-item value="Option C">Option C</v-select-item>\n  <v-select-item value="Option D">Option D</v-select-item>\n  <v-select-item value="Option E">Option E</v-select-item>\n</v-select>\n',codeInput:'\n<div class="col-md-6 p-3">\n  <v-input value="This is a random text" />\n</div>\n<div class="col-md-6 p-3">\n  <v-input placeholder="This is a random placeholder" />\n</div>\n<div class="col-md-6 p-3">\n  <v-input type="number" value="33,76" />\n</div>\n<div class="col-md-6 p-3">\n  <v-input type="select">\n    <option selected>Option A</option>\n  </v-input>\n</div>\n'}}},bt=ht,gt=Object(c["a"])(bt,ft,_t,!1,null,null,null),Ct=gt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-3"},[s("v-header",[t._v("Introduction")]),s("v-card",{staticClass:"mb-6",attrs:{id:"introduction"}},[t._v(" Some introduction ")]),s("v-card",{attrs:{title:"Component Status"}},[s("strong",[t._v(" See bellow the status of development of all components ")]),s("ul",t._l(t.componentsStatus,(function(e,o){return s("li",{key:o,staticClass:"my-4"},[s("input",{staticClass:"mr-2",attrs:{type:"checkbox",disabled:""},domProps:{checked:"completed"===e.status}}),s("span",{staticClass:"mr-2"},[t._v(t._s(e.title))]),e.exist?t._e():s("v-badge",{attrs:{color:"primary"}},[t._v("Not Implemented")])],1)})),0)])],1)},xt=[],wt={data:function(){return{componentsStatus:[{title:"Button",status:"completed",exist:!0},{title:"Badge",status:"completed",exist:!0},{title:"Card",status:"completed",exist:!0},{title:"Menu",status:"completed",exist:!0},{title:"Forms",status:"",exist:!0},{title:"Alerts",status:"",exist:!1}]}}},Ot=wt,Tt=Object(c["a"])(Ot,yt,xt,!1,null,null,null),Dt=Tt.exports;o["a"].use(u["a"]);var It=[{path:"/",component:Dt},{path:"/instalation",component:D},{path:"/grid",component:k},{path:"/buttons",component:A},{path:"/badges",component:Y},{path:"/cards",component:K},{path:"/menus",component:st},{path:"/navbar",component:it},{path:"/icons",component:mt},{path:"/Forms",component:Ct}],$t=new u["a"]({routes:It}),St=(s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"v-button py-1 px-2",class:[t.getColorClass,t.getShadowClass],on:{click:t.onClick}},[t._t("default")],2)}),jt=[],Et=(s("c975"),{name:"v-button",props:["color","no-shadow"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-button-"+this.color:""},getShadowClass:function(){return this.noShadow?"v-button-noshadow":""}},methods:{onClick:function(){this.$emit("click")}}}),kt=Et,Pt=Object(c["a"])(kt,St,jt,!1,null,null,null),Ht=Pt.exports,Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-layout"},[s("div",{staticClass:"h-full"},[t._t("header"),s("div",{staticClass:"flex",class:{"v-layout__container":t.hasHeaderSlot,"h-full":!t.hasHeaderSlot}},[t.hasLeftSlot?s("div",{staticClass:"v-layout__aside h-full"},[t._t("left")],2):t._e(),s("div",{staticClass:"v-layout__content flex-1 h-full"},[t._t("default")],2),t.hasRightSlot?s("div",{staticClass:"v-layout__aside"},[t._t("right")],2):t._e()]),t._t("footer")],2)])},Mt=[],Nt={name:"v-layout-admin",computed:{hasHeaderSlot:function(){return!!this.$slots["header"]},hasLeftSlot:function(){return!!this.$slots["left"]},hasRightSlot:function(){return!!this.$slots["right"]}}},At=Nt,Wt=(s("4443"),Object(c["a"])(At,Bt,Mt,!1,null,"6dcab268",null)),zt=Wt.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"v-navbar"},[s("div",{staticClass:"flex"},[t.title?s("div",{staticClass:"v-navbar__title",class:{"cursor-pointer":t.link},on:{click:t.onClickTitle}},[s("h1",[t._v(t._s(t.title))])]):t._e(),t._t("default"),s("div",{staticClass:"flex flex-1"},[s("div",{staticClass:"flex-1"}),t._t("right")],2)],2)])},Lt=[],Vt=(s("9911"),{name:"v-navbar",props:["title","link"],methods:{onClickTitle:function(){this.link&&(window.location.href=this.link)}}}),Yt=Vt,Rt=Object(c["a"])(Yt,Ft,Lt,!1,null,null,null),Gt=Rt.exports,Jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-card",class:[t.getColorClass]},[t.hasHeaderSlot||t.title?s("div",{staticClass:"v-card__header"},[t.hasHeaderSlot?t._e():s("span",{staticClass:"text-xl"},[t._v(t._s(t.title))]),t._t("header")],2):t._e(),t.hasContentSlot?s("div",{staticClass:"v-card__content"},[t._t("default")],2):t._e(),t.hasFooterSlot?s("div",{staticClass:"v-card__footer"},[t._t("footer")],2):t._e()])},Ut=[],qt={name:"v-card",props:["title","color"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-card-"+this.color:""},hasHeaderSlot:function(){return!!this.$slots["header"]},hasFooterSlot:function(){return!!this.$slots["footer"]},hasContentSlot:function(){return!!this.$slots.default}}},Kt=qt,Qt=Object(c["a"])(Kt,Jt,Ut,!1,null,null,null),Xt=Qt.exports,Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"v-badge",class:[t.getColorClass]},[t._t("default")],2)},te=[],ee={name:"v-badge",props:["color"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-badge-"+this.color:""}}},se=ee,oe=Object(c["a"])(se,Zt,te,!1,null,null,null),ne=oe.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-menu w-full",class:{"v-menu--horizontal":t.isHorizontal}},[t.title?s("div",{staticClass:"v-menu__header"},[s("span",{staticClass:"text-xs uppercase"},[t._v(t._s(t.title))])]):t._e(),s("ul",[t._t("default")],2)])},le=[],re={name:"v-menu",props:["title","view"],computed:{isHorizontal:function(){return this.view&&"horizontal"===this.view}}},ie=re,ce=Object(c["a"])(ie,ae,le,!1,null,null,null),de=ce.exports,ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-menu-item w-full cursor-pointer text-noselection",on:{click:t.onClick}},[s("div",{staticClass:"px-2"},[s("span",{staticClass:"text-sm"},[t._t("default")],2)])])},ue=[],pe={name:"v-menu-item",props:["to","target"],methods:{onClick:function(){this.to&&(this.$router?this.$route.path!==this.to&&this.$router.push(this.to):window.location.href=this.to,this.$emit("click",this.to))}}},me=pe,fe=Object(c["a"])(me,ve,ue,!1,null,null,null),_e=fe.exports,he=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"v-icon",class:[t.getColorClass,t.getBordered]},[s("i",{class:t.getIconName})])},be=[],ge={name:"v-icon",props:["color","border"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-icon--"+this.color:""},getBordered:function(){return this.border?"v-icon--border":""},getIconName:function(){return this.$slots.default?this.$slots.default[0].text:""}}},Ce=ge,ye=Object(c["a"])(Ce,he,be,!1,null,null,null),xe=ye.exports,we=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-select cursor-pointer",class:[t.getVisibleList],on:{click:t.toggleList}},[s("div",{staticClass:"v-select__selection"},[s("span",[t._v(t._s(t.getSelectedText))])]),s("div",{staticClass:"v-select__options"},[t._t("default")],2)])},Oe=[],Te=(s("159b"),{name:"v-select",props:["color","placeholder"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-select--"+this.color:""},getSelectedText:function(){return this.selectedItem?this.selectedItem:this.placeholder?this.placeholder:""},getVisibleList:function(){return this.listOpen?"v-select--open":""}},data:function(){return{listOpen:!1,selectedItem:void 0}},mounted:function(){var t=this;this.$children.forEach((function(e){e.$on("click",t.onSelectItem)}))},methods:{toggleList:function(){this.listOpen=!this.listOpen},onSelectItem:function(t){console.log(t),this.selectedItem=t}}}),De=Te,Ie=Object(c["a"])(De,we,Oe,!1,null,null,null),$e=Ie.exports,Se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-select-item cursor-pointer",on:{click:t.onClick}},[s("div",{staticClass:"px-2"},[s("span",{staticClass:"text-sm"},[t._t("default")],2)])])},je=[],Ee={name:"v-select-item",props:["value"],methods:{onClick:function(){this.$emit("click",this.value)}}},ke=Ee,Pe=Object(c["a"])(ke,Se,je,!1,null,null,null),He=Pe.exports,Be=function(){var t=this,e=t.$createElement,s=t._self._c||e;return"select"===t.getType?s("select",{staticClass:"v-input",class:[t.getColorClass],attrs:{placeholder:t.placeholder},domProps:{value:t.currentValue},on:{input:t.onInput}},[t._t("default")],2):s("input",{staticClass:"v-input",class:[t.getColorClass],attrs:{type:t.getType,placeholder:t.placeholder},domProps:{value:t.currentValue},on:{input:t.onInput}})},Me=[],Ne={name:"v-input",props:["color","type","value","placeholder"],computed:{getColorClass:function(){return["primary","secondary","info","success","danger","warning"].indexOf(this.color)>-1?"v-input--"+this.color:""},getType:function(){return this.type?this.type:"text"}},data:function(){return{currentValue:""}},mounted:function(){this.value&&(this.currentValue=this.value)},methods:{onInput:function(t){this.$emit("input",t)}}},Ae=Ne,We=Object(c["a"])(Ae,Be,Me,!1,null,null,null),ze=We.exports,Fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"v-table",class:[t.getBorderedClass]},[s("thead",[s("tr",t._l(t.heads,(function(e,o){return s("th",{key:o,class:{"text-left":0===o}},[t._v(" "+t._s(e)+" ")])})),0)]),s("tbody",[t._t("default")],2)])},Le=[],Ve={name:"v-table",props:["heads","bordered"],computed:{getBorderedClass:function(){return this.bordered?"v-table--bordered":""}}},Ye=Ve,Re=Object(c["a"])(Ye,Fe,Le,!1,null,null,null),Ge=Re.exports,Je=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._t("default")],2)])},Ue=[],qe={name:"v-header"},Ke=qe,Qe=Object(c["a"])(Ke,Je,Ue,!1,null,null,null),Xe=Qe.exports,Ze={install:function(t){t.component(Ht.name,Ht),t.component(zt.name,zt),t.component(Gt.name,Gt),t.component(Xt.name,Xt),t.component(ne.name,ne),t.component(de.name,de),t.component(_e.name,_e),t.component(xe.name,xe),t.component($e.name,$e),t.component(He.name,He),t.component(ze.name,ze),t.component(Ge.name,Ge),t.component(Xe.name,Xe)}},ts=(s("0eff"),s("15f5"),s("7051"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._t("name")],2),s("td",{staticClass:"text-center"},[s("strong",[t._v("("),t._t("type"),t._v(")")],2)]),s("td",{staticClass:"text-center"},[t._t("default")],2),s("td",{staticClass:"text-center"},[s("strong",[t._t("mandatory",[t._v("No")])],2)]),s("td",[t._t("description")],2)])}),es=[],ss={},os=Object(c["a"])(ss,ts,es,!1,null,null,null),ns=os.exports,as=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._t("name")],2),s("td",[t._t("params")],2),s("td",[t._t("description")],2)])},ls=[],rs={},is=Object(c["a"])(rs,as,ls,!1,null,null,null),cs=is.exports;o["a"].component("TablePropsDocsItem",ns),o["a"].component("TablePropsEventsItem",cs),o["a"].use(Ze),new o["a"]({router:$t,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,s){},9224:function(t){t.exports=JSON.parse('{"name":"revoltui","version":"0.1.001","scripts":{"serve":"vue-cli-service serve","lint":"vue-cli-service lint","build:docs":"vue-cli-service build","build:lib":"vue-cli-service build --dest dist --target lib --name revoltui src/plugin.js --formats commonjs","build":"yarn build:lib && yarn build:docs"},"main":"./dist/revoltui.common.js","dependencies":{"highlight.js":"^9.17.1","vue":"^2.6.10","vue-router":"^3.1.3"},"devDependencies":{"@fortawesome/fontawesome-free":"^5.12.0","@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.1","@vue/cli-service":"^4.1.0","@vue/eslint-config-prettier":"^5.0.0","babel-eslint":"^10.0.3","core-js":"^3.4.3","eslint":"^5.16.0","eslint-plugin-prettier":"^3.1.1","eslint-plugin-vue":"^5.0.0","node-sass":"^4.13.0","prettier":"^1.19.1","sass-loader":"^8.0.0","style-loader":"^1.0.1","vue-template-compiler":"^2.6.10"},"browserslist":["> 1%","last 2 versions"]}')},bb40:function(t,e,s){},c4eb:function(t,e,s){"use strict";var o=s("12fc"),n=s.n(o);n.a}});
//# sourceMappingURL=app.c1056fed.js.map