(function(t){function e(e){for(var n,o,c=e[0],d=e[1],i=e[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var d=a[o];0!==r[d]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1283abd6"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var i=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var f=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("ecee"),s=a("c074"),o=a("ad3d");r["c"].add(s["a"]),n["default"].component("font-awesome-icon",o["a"]);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticStyle:{"text-align":"center"},attrs:{app:"",color:"#f7b7b7",dark:""}},[a("h2",{staticStyle:{"text-align":"center",color:"black","font-family":"'times new roman'","margin-left":"40%"}},[t._v("Serianu Dashboard.")]),a("v-spacer"),a("h3",{staticStyle:{"text-align":"center",color:"blue","font-family":"'times new roman'","margin-right":"5%"}},[t._v("DashBoard 1 ")]),a("h3",{staticStyle:{"text-align":"center",color:"blue","font-family":"'times new roman'","margin-right":"5%"}},[t._v("DashBoard 2 ")])],1),a("v-main",{staticStyle:{"background-color":"rgb(247, 237, 237)"}},[a("HelloWorld")],1)],1)},d=[],i=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("v-card",{staticStyle:{"padding-left":"5%","padding-right":"5%","padding-bottom":"5%"}},[a("v-card-title",{staticClass:"text-center"},[a("b",[t._v("Overall Threat Exposure Score.")])]),a("v-card-subtitle",{staticStyle:{color:"black","text-align":"center"}},[a("b",[t._v("Exposure Score")])]),a("p",{staticStyle:{"font-size":"13px","margin-top":"-3%"}},[t._v(" This core reflects the current exposure asociated with machines in your organisation. ")]),a("p",{staticStyle:{"font-size":"13px","margin-top":"-3%"}},[t._v(" Score is potentially impacted by active exceptions. ")]),a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("canvas",{staticStyle:{"margin-top":"-30%"},attrs:{id:"canvas",height:"200",width:"200"}})]),a("v-col",{staticStyle:{"margin-top":"-8%","text-align":"center","font-size":"10px"},attrs:{md:"12","offset-md":"0"}},[a("svg",{attrs:{height:"16",width:"16"}},[a("circle",{attrs:{cx:"8",cy:"8",r:"8",fill:"green"}}),t._v(" Sorry, your browser does not support inline SVG. ")]),t._v(" 0% - 25% Low "),a("svg",{attrs:{height:"16",width:"16"}},[a("circle",{attrs:{cx:"8",cy:"8",r:"8",fill:"yellow"}}),t._v(" Sorry, your browser does not support inline SVG. ")]),t._v(" 26% - 50% Medium "),a("svg",{attrs:{height:"16",width:"16"}},[a("circle",{attrs:{cx:"8",cy:"8",r:"8",fill:"orange"}}),t._v(" Sorry, your browser does not support inline SVG. ")]),t._v(" 51% - 75% High "),a("svg",{attrs:{height:"16",width:"16"}},[a("circle",{attrs:{cx:"8",cy:"8",r:"8",fill:"red"}}),t._v(" Sorry, your browser does not support inline SVG. ")]),t._v(" 76% - 100% Very High ")]),a("v-col",[a("canvas",{staticStyle:{"margin-top":"-6%"},attrs:{id:"line",height:"90",width:"200"}})])],1)],1)],1),t._l(t.dataGetter,(function(e,n){return[a("v-col",{key:n,attrs:{md:"4"}},[a("v-card",{staticStyle:{"padding-left":"5%","padding-right":"5%","padding-bottom":"5%",height:"100%"}},[a("v-card-title",{staticStyle:{"text-align":"center",color:"black"}},[t._v(" "+t._s(e.indicatorDetails.description)+" ")]),a("v-card-subtitle",{staticStyle:{color:"black","text-align":"center"}},[a("b",[t._v("TES Score For "+t._s(e.indicatorDetails.name)+" :")])]),a("v-simple-table",[[a("thead",[a("tr",{staticStyle:{"background-color":"#fcdede"}},[a("td",{staticStyle:{"text-align":"center","font-size":"10px","text-decoration":"bold"}},[a("b",[t._v("CVEQ Domain")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[t._v("CVEQ Threat Indicator")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[t._v("Deteacted")])]),a("td",{staticStyle:{"text-align":"center","font-size":"10px"}},[a("b",[t._v("Validated")])])])]),a("tbody",[t._l(e.CVECThreatIndicators,(function(e,n){return[a("tr",{key:n},[a("td",{key:n+"first",staticStyle:{"text-align":"center","font-size":"10px"}},[t._v(" "+t._s(e.uniqueIdentifier)+" ")]),a("td",{key:n+"second",staticStyle:{"text-align":"center","font-size":"10px"}},[t._v(" "+t._s(e.name)+" ")]),a("v-tooltip",{staticStyle:{"background-color":"black",color:"red"},attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var s=r.on,o=r.attrs;return[e.detacted>=0&&e.detacted<=1.25?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"rgb(0, 255, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.detacted)+" ")]):t._e(),e.detacted>=1.26&&e.detacted<=2.5?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"yellow","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.detacted)+" ")]):t._e(),e.detacted>=2.6&&e.detacted<=3.75?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"orange","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.detacted)+" ")]):t._e(),e.detacted>=3.76&&e.detacted<=5?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"rgb(255, 0, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.detacted)+" ")]):t._e()]}}],null,!0)},[a("span",[t._v(t._s(e.name))])]),a("v-tooltip",{staticStyle:{"background-color":"black",color:"red"},attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var s=r.on,o=r.attrs;return[e.validated/e.detacted*100>=0&&e.validated/e.detacted*100<=25?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"rgb(255, 0, 0, 0.4)","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.validated)+" ")]):t._e(),e.validated/e.detacted*100>=26&&e.validated/e.detacted*100<=50?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"orange","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.validated)+" ")]):t._e(),e.validated/e.detacted*100>=51&&e.validated/e.detacted*100<=75?a("td",t._g(t._b({key:n+"third",staticStyle:{"background-color":"yellow","text-align":"center","font-size":"10px"}},"td",o,!1),s),[t._v(" "+t._s(e.validated)+" ")]):t._e(),e.validated/e.detacted*100>=76&&e.validated/e.detacted*100<=100?a("td",t._g(t._b({key:n+"third",staticStyle:{"text-align":"center","font-size":"10px","background-color":"rgb(0, 255, 0, 0.4)"}},"td",o,!1),s),[t._v(" "+t._s(e.validated)+" ")]):t._e()]}}],null,!0)},[a("span",[t._v(t._s(e.name))])])],1)]}))],2)]],2)],1)],1)]}))],2)],1)},f=[],u=a("30ef"),b=a.n(u),g=a("d092"),j=a.n(g),p=a("2f62"),v={computed:Object(i["a"])({},Object(p["b"])(["dataGetter"])),mounted:function(){var t=document.getElementById("canvas").getContext("2d"),e=document.getElementById("line").getContext("2d"),a=new b.a(e,{type:"line",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],datasets:[{label:"rate",steppedLine:!0,data:[5,8,4,10,3,1,7],borderColor:"blue",fill:!1}]},options:{responsive:!0,title:{display:!0,text:"Exposure score over time. "}}});console.log(a);var n=new j.a(t,{type:"gauge",data:{datasets:[{value:48,data:[25,50,75,100],backgroundColor:["green","yellow","orange","red"]}]},options:{needle:{radiusPercentage:2,widthPercentage:3.2,lengthPercentage:80,color:"rgba(0, 0, 0, 1)"},valueLabel:{bottomMarginPercentage:-10,display:!0,fontSize:10,formatter:function(t){return Math.round(t)+" %  /  100%"},color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 1)",borderRadius:5,padding:{top:10,bottom:10},margin:{top:10}}}});console.log(n)},name:"HelloWorld",data:function(){return{}}},m=v,h=a("2877"),y=Object(h["a"])(m,l,f,!1,null,null,null),_=y.exports,k={name:"App",computed:Object(i["a"])({},Object(p["b"])(["dataGetter"])),created:function(){this.$store.dispatch("fetchData")},components:{HelloWorld:_},data:function(){return{}}},x=k,S=Object(h["a"])(x,c,d,!1,null,null,null),w=S.exports,z=a("bc3a"),O=a.n(z),D={data:null},E={},C={fetchData:function(){O.a.get("https://serainutaskbackend.georgekprojects.tk/api/fetchData").then((function(t){200===t.status&&(D.data=t.data,console.log("This is the data."),console.log(D.data))})).catch((function(t){console.log(t)}))}},P={dataGetter:function(t){return t.data}},T={state:D,mutations:E,actions:C,getters:P},V=T;n["default"].use(p["a"]);var F=new p["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{NavigationModule:V}}),H=(a("d3b7"),a("8c4f")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},G=[],L={name:"Home",components:{HelloWorld:_}},W=L,A=Object(h["a"])(W,M,G,!1,null,null,null),B=A.exports;n["default"].use(H["a"]);var I=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],$=new H["a"]({routes:I,mode:"history"}),q=$,N=a("ce5b"),J=a.n(N);a("bf40");n["default"].use(J.a);var Q=new J.a({theme:{themes:{light:{primary:"#29ab87",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["default"].config.productionTip=!1,new n["default"]({store:F,router:q,vuetify:Q,render:function(t){return t(w)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6061a291.js.map