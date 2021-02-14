(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570d513b"],{"446e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?n("span",{staticClass:"required"},[e._v("*")]):e._e()]),n("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?n("small",{staticClass:"note"},[n("Markdown",{attrs:{content:e.note}})],1):e._e()])},s=[],r=n("2b0e"),o=n("84f8"),i=n("e6e0"),l=r["a"].extend({name:"TextInput",components:{Markdown:i["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},note:{type:String,required:!1},isRequired:{type:Boolean,required:!1}},computed:{slug:function(){return Object(o["a"])("text",this.label,this.value)}}}),u=l,c=(n("6850"),n("2877")),p=Object(c["a"])(u,a,s,!1,null,"548f8ecc",null);t["a"]=p.exports},6850:function(e,t,n){"use strict";n("7f9c")},7737:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),n("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?n("small",{staticClass:"note"},[n("Markdown",{attrs:{content:e.note}})],1):e._e()])},s=[],r=n("2b0e"),o=n("e6e0"),i=n("84f8"),l=r["a"].extend({name:"Checkbox",components:{Markdown:o["a"]},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(i["a"])("box",this.label)}}}),u=l,c=n("2877"),p=Object(c["a"])(u,a,s,!1,null,null,null);t["a"]=p.exports},"7b65":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badges container-lg"},[e._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"app-input"},[n("h2",[e._v("Input values")]),n("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[n("fieldset",{attrs:{name:"ghRepo"}},[n("legend",[e._v("GitHub repo")]),n("TextInput",{attrs:{label:"Username",isRequired:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("br"),n("TextInput",{attrs:{label:"Repo name",isRequired:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}}),n("br"),n("TextInput",{attrs:{label:"License"},model:{value:e.licenseType,callback:function(t){e.licenseType=t},expression:"licenseType"}}),n("br"),n("div",[n("label",[e._v("Version type")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"one",value:"tag"},domProps:{checked:e._q(e.versionType,"tag")},on:{change:function(t){e.versionType="tag"}}}),n("label",{attrs:{for:"one"}},[e._v("Tag")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"two",value:"release"},domProps:{checked:e._q(e.versionType,"release")},on:{change:function(t){e.versionType="release"}}}),n("label",{attrs:{for:"two"}},[e._v("Release")])])],1),n("br"),n("fieldset",{attrs:{name:"buttons"}},[n("legend",[e._v("Large CTA buttons")]),n("Checkbox",{attrs:{label:"Template",note:"Add a <i>Use This Template</i> button."},model:{value:e.useThisTemplate,callback:function(t){e.useThisTemplate=t},expression:"useThisTemplate"}}),n("br"),n("Checkbox",{attrs:{label:"GitHub Pages",note:"Add link to a GitHub Pages site."},model:{value:e.ghPages,callback:function(t){e.ghPages=t},expression:"ghPages"}})],1),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),n("div",{staticClass:"col-6"},[n("Results",{attrs:{result:e.result}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Help",{attrs:{message:e.note}})],1)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[e._v("Repo badges")])])])}],r=(n("99af"),n("2b0e")),o=n("ca2c"),i=n("7737"),l=n("8169"),u=n("446e"),c=n("2eda"),p="\n- Where to put the badges\n    - Use the Social badges on docs site to link back to your repo.\n    - Or use the Social badges to link to repo you don't own.\n    - Use the Repo metadata and the CTA sections at the top of your `README.md` and also on your docs site.\n- The first social badge is dumb - so you have to make sure you enter a valid repo. A positive of this is that it works for private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n",d=r["a"].extend({name:"RepoBadges",components:{Checkbox:i["a"],Help:o["a"],Results:l["a"],TextInput:u["a"]},data:function(){return{username:"MichaelCurrin",repoName:"badge-generator",licenseType:"MIT",useThisTemplate:!1,ghPages:!1,result:"_Your output will appear here_",versionType:"tag",note:p}},methods:{submit:function(){console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages});var e=new c["a"](this.username,this.repoName,this.licenseType),t=e.tagBadge(this.versionType),n=e.licenseBadge(!0),a=e.gh(),s=e.ghSocial("stars"),r=e.ghSocial("forks"),o=this.useThisTemplate?e.useThisTemplateBadge():"",i=this.ghPages?e.ghPagesBadge():"",l=e.licenseMessage();this.result="_Social buttons_\n\n".concat(a,"\n").concat(s,"\n").concat(r,"\n\n_Repo metadata_\n\n").concat(t,"\n").concat(n,'\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n').concat(o,"\n\n").concat(i,"\n\n</div>\n\n").concat(l)}}}),h=d,v=n("2877"),m=Object(v["a"])(h,a,s,!1,null,null,null);t["default"]=m.exports},"7f9c":function(e,t,n){},8169:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-results"},[n("h2",[e._v("Output values")]),n("div",[n("h3",[e._v("Preview")]),n("Markdown",{attrs:{content:e.result}})],1),n("div",[n("h3",[e._v("Code")]),n("Pre",[e._v(e._s(e.result))])],1)])},s=[],r=n("2b0e"),o=n("ee75"),i=n("e6e0"),l=r["a"].extend({name:"Results",components:{Markdown:i["a"],Pre:o["a"]},props:{result:String}}),u=l,c=n("2877"),p=Object(c["a"])(u,a,s,!1,null,null,null);t["a"]=p.exports},"84f8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));n("a15b"),n("ac1f"),n("5319");function a(e){return e.replace(/^\/+/,"")}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.join("-");return a.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-notes"},[n("h2",[e._v("Notes")]),n("p",[n("Markdown",{attrs:{content:e.message}})],1)])},s=[],r=n("2b0e"),o=n("e6e0"),i=r["a"].extend({name:"Help",components:{Markdown:o["a"]},props:{message:String}}),l=i,u=n("2877"),c=Object(u["a"])(l,a,s,!1,null,null,null);t["a"]=c.exports},ee75:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._t("default")],2)])},s=[],r=n("2b0e"),o=r["a"].extend({name:"Pre"}),i=o,l=n("2877"),u=Object(l["a"])(i,a,s,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-570d513b.fa25961c.js.map