(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-604d5ed8"],{"446e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?a("span",{staticClass:"required"},[e._v("*")]):e._e()]),a("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?a("small",{staticClass:"note"},[a("Markdown",{attrs:{content:e.note}})],1):e._e()])},o=[],r=a("2b0e"),s=a("84f8"),l=a("e6e0"),c=r["a"].extend({name:"TextInput",components:{Markdown:l["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},note:{type:String,required:!1},isRequired:{type:Boolean,required:!1}},computed:{slug:function(){return Object(s["a"])("text",this.label,this.value)}}}),u=c,i=(a("6850"),a("2877")),p=Object(i["a"])(u,n,o,!1,null,"548f8ecc",null);t["a"]=p.exports},6850:function(e,t,a){"use strict";a("7f9c")},"7f9c":function(e,t,a){},8169:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-results"},[a("h2",[e._v("Output values")]),a("div",[a("h3",[e._v("Preview")]),a("Markdown",{attrs:{content:e.result}})],1),a("div",[a("h3",[e._v("Code")]),a("Pre",[e._v(e._s(e.result))])],1)])},o=[],r=a("2b0e"),s=a("ee75"),l=a("e6e0"),c=r["a"].extend({name:"Results",components:{Markdown:l["a"],Pre:s["a"]},props:{result:String}}),u=c,i=a("2877"),p=Object(i["a"])(u,n,o,!1,null,null,null);t["a"]=p.exports},"84f8":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));a("a15b"),a("ac1f"),a("5319");function n(e){return e.replace(/^\/+/,"")}function o(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.join("-");return n.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},b086:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"badges container-lg"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"app-input"},[a("h2",[e._v("Input values")]),a("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[a("fieldset",{attrs:{name:"package"}},[a("legend",[e._v("Package metadata")]),a("TextInput",{attrs:{label:"Name",isRequired:""},model:{value:e.pkgName,callback:function(t){e.pkgName=t},expression:"pkgName"}}),a("br"),a("div",[a("span",[e._v("Type: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pkgType,expression:"pkgType"}],attrs:{type:"radio",id:"python",name:"package-type",value:"Python",checked:""},domProps:{checked:e._q(e.pkgType,"Python")},on:{change:function(t){e.pkgType="Python"}}}),a("label",{attrs:{for:"python"}},[e._v("Python (PyPI)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pkgType,expression:"pkgType"}],attrs:{type:"radio",id:"node",name:"package-type",value:"Node"},domProps:{checked:e._q(e.pkgType,"Node")},on:{change:function(t){e.pkgType="Node"}}}),a("label",{attrs:{for:"node"}},[e._v("Node (NPM)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pkgType,expression:"pkgType"}],attrs:{type:"radio",id:"ruby",name:"package-type",value:"Ruby"},domProps:{checked:e._q(e.pkgType,"Ruby")},on:{change:function(t){e.pkgType="Ruby"}}}),a("label",{attrs:{for:"ruby"}},[e._v("Ruby (Rubygems)")])])],1),a("br"),a("fieldset",{attrs:{name:"ghRepo"}},[a("legend",[e._v("GitHub repo")]),a("TextInput",{attrs:{label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("br"),a("TextInput",{attrs:{label:"Repo name"},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}})],1),a("br"),a("fieldset",{attrs:{name:"appearance"}},[a("legend",[e._v("Dynamic badge appearance")]),a("TextInput",{attrs:{label:"Logo",placeholder:"e.g. vue.js",note:"Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"},model:{value:e.logo,callback:function(t){e.logo=t},expression:"logo"}}),a("TextInput",{attrs:{label:"Logo color",note:"You can override with your own color, or leave blank to use the badge's own rich colors (these are often poor for reading on a dark background, while `white` is bland but most readable)."},model:{value:e.logoColor,callback:function(t){e.logoColor=t},expression:"logoColor"}})],1),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),a("div",{staticClass:"col-6"},[a("Results",{attrs:{result:e.result}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Help",{attrs:{message:e.note}})],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v("Package badges")]),a("p",[e._v(" Show your project's dependencies as badges in your docs, including an external link to the package in a registry. ")])])])}],r=(a("99af"),a("2b0e")),s=a("ca2c"),l=a("8169"),c=a("446e"),u=a("0356"),i=a("17a3"),p=a("a5a3"),d=a("b8e9"),g=a("5167"),m=a("7cba"),v=a("8dd6");function b(e,t){var a="".concat(t,"/").concat(e);return Object(g["a"])(p["d"].LABEL,e,p["d"].COLOR,p["d"].IS_LARGE,a)}function f(e,t,a,n){t||(t=e.repoName);var o="Package - ".concat(t),r=Object(v["d"])(e,t),s=Object(v["c"])(!1,a,n),l=Object(d["a"])(r,s),c="".concat(u["e"].Node,"/").concat(t);return Object(m["a"])({altText:o,imageTarget:l,linkTarget:c})}var h=a("2eda"),k="\n- Optionally set Repo fields to your _own_ project, so the badge dynamically pick up version number of the package chosen above.\n- Only NPM is currently supported for the dynamic package.\n",y=r["a"].extend({name:"PackageBadges",components:{Help:s["a"],Results:l["a"],TextInput:c["a"]},data:function(){return{pkgName:"vue",pkgType:"Node",username:"MichaelCurrin",repoName:"badge-generator",logo:"vue.js",logoColor:i["a"].LogoDefault,result:"_Your output will appear here_",note:k}},methods:{submit:function(){console.debug("Process inputs and render results");var e=this.pkgType,t=u["e"][e],a=t?b(this.pkgName,t):"",n=new h["a"](this.username,this.repoName),o=t===u["e"].Node?f(n,this.pkgName,this.logo,this.logoColor):"";this.result="".concat(a,"\n\n").concat(o,"\n        ")}}}),_=y,w=a("2877"),x=Object(w["a"])(_,n,o,!1,null,null,null);t["default"]=x.exports},ca2c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-notes"},[a("h2",[e._v("Notes")]),a("p",[a("Markdown",{attrs:{content:e.message}})],1)])},o=[],r=a("2b0e"),s=a("e6e0"),l=r["a"].extend({name:"Help",components:{Markdown:s["a"]},props:{message:String}}),c=l,u=a("2877"),i=Object(u["a"])(c,n,o,!1,null,null,null);t["a"]=i.exports},ee75:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",[e._t("default")],2)])},o=[],r=a("2b0e"),s=r["a"].extend({name:"Pre"}),l=s,c=a("2877"),u=Object(c["a"])(l,n,o,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-604d5ed8.63fad5b8.js.map