(function(t){function e(e){for(var i,s,o=e[0],u=e[1],c=e[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ip-input/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16da":function(t,e,n){"use strict";n("bc59")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("ip输入框在线体验")]),n("fan-ip-input"),n("h1",[t._v("https://github.com/24min/ip-input")])],1)},a=[],s={name:"App"},o=s,u=(n("7c55"),n("2877")),c=Object(u["a"])(o,r,a,!1,null,null,null),l=c.exports,f=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"fan-ip-addr"},t._l(t.ip,(function(e,i){return n("li",{key:i,staticClass:"fan-ip-item"},[n("a-input",{ref:"ipInput",refInFor:!0,staticClass:"fan-ip-input",attrs:{size:"small",maxLength:3},on:{compositionstart:function(e){return t.compositionstart(e,i)},compositionend:function(e){return t.compositionend(e,i)},change:function(e){return t.changeIp(e,i)}},nativeOn:{focus:function(e){return t.focusInput(e,i)},blur:function(e){return t.blurInput(e,i)},keyup:function(n){return t.pressKey(n,i,e)},keydown:function(e){return t.keydown(e,i)}},model:{value:e.value,callback:function(n){t.$set(e,"value",t._n(n))},expression:"item.value"}}),i<3?n("span",{staticClass:"fan-ip-dot"}):t._e()],1)})),0)}),p=[],d=(n("a71a"),n("b558")),h=(n("d3b7"),n("159b"),n("ac1f"),n("1276"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("a15b"),n("d81d"),n("caad"),{name:"fanIpInput",data:function(){return{blurIndex:0,isCodeFoucus:!1,shouldRemoveText:"",ip:[{value:0},{value:0},{value:0},{value:0}],firstFlag:[{start:!0,end:!0},{start:!0,end:!0},{start:!0,end:!0},{start:!0,end:!0}],prenentKeycode:"",beforePosition:0}},components:{aInput:d["a"]},props:{value:{type:String,default:"0.0.0.0"}},model:{prop:"value",event:"result"},watch:{value:{immediate:!0,handler:function(t,e){var n=this;this.ip=[],t.split(".").forEach((function(t){n.ip.push({value:t})}))}}},methods:{changeIp:function(t,e){var n=this;if(this.shouldRemoveText){var i=t.currentTarget.value,r=i.indexOf(this.shouldRemoveText);r>=0?(this.ip[e].value=i.replace(new RegExp(this.shouldRemoveText,"g"),""),this.shouldRemoveText="",this.$nextTick((function(){var t=n.$refs.ipInput[e].$el;t.selectionStart=n.beforePosition,t.selectionEnd=n.beforePosition}))):console.error("we didn't match the text in ".concat(e," value😅"))}else{3===t.currentTarget.selectionStart&&(this.isCodeFoucus=!0,this.firstFlag[3===e?0:e+1].start=!1,this.$refs.ipInput[3===e?0:e+1].focus()),0!==t.currentTarget.selectionStart&&(this.firstFlag[e].start=!0);var a=this.ip.map((function(t){return t.value})).join(".");this.$emit("result",a)}},focusInput:function(t,e){var n=this;this.isCodeFoucus?(e>this.blurIndex?3===e&&0===this.blurIndex?(t.currentTarget.selectionStart=this.ip[e].value.toString().length,t.currentTarget.selectionEnd=this.ip[e].value.toString().length):(t.currentTarget.selectionStart=0,t.currentTarget.selectionEnd=0):0===e&&3===this.blurIndex?(t.currentTarget.selectionStart=0,t.currentTarget.selectionEnd=0):(t.currentTarget.selectionStart=this.ip[e].value.toString().length,t.currentTarget.selectionEnd=this.ip[e].value.toString().length),this.isCodeFoucus=!1):setTimeout((function(){var t=n.$refs.ipInput[e].$el;n.ip[e].value.length===t.selectionStart&&(n.firstFlag[e].end=!1),0==t.selectionStart&&(n.firstFlag[e].start=!1)}),0)},blurInput:function(t,e){var n=t.currentTarget.value;+n>255&&(this.ip[e].value=255),this.blurIndex=e,this.firstFlag[e].end=!0,this.firstFlag[e].start=!0},keydown:function(t,e){var n=["Backspace","ArrowRight","ArrowLeft","1","2","3","4","5","6","7","8","9","0"];"Process"===t.key?this.prenentKeycode=t.code:this.prenentKeycode="",n.includes(t.key)||t.preventDefault()},compositionstart:function(t,e){this.beforePosition=t.currentTarget.selectionStart,this.shouldLockKeyupEvent=!0},compositionend:function(t,e){var n=this.ip[e].value.toString().length;this.shouldRemoveText=t.data.substring(0,3-n),this.shouldRemoveText||(t.currentTarget.selectionStart=this.beforePosition,t.currentTarget.selectionEnd=this.beforePosition)},pressKey:function(t,e,n){if(this.prenentKeycode!==t.code)switch(t.key){case"Backspace":0===t.currentTarget.selectionStart?this.firstFlag[e].start?(this.firstFlag[e].start=!1,this.firstFlag[e].end=n.value.toString().length!==t.currentTarget.selectionStart):(this.isCodeFoucus=!0,this.firstFlag[0===e?3:e-1].end=!1,this.$refs.ipInput[0===e?3:e-1].focus()):(this.firstFlag[e].start=!0,this.firstFlag[e].end=n.value.toString().length!==t.currentTarget.selectionStart);break;case".":if(0===t.currentTarget.selectionStart)break;case"ArrowRight":n.value.toString().length===t.currentTarget.selectionStart?this.firstFlag[e].end?(this.firstFlag[e].end=!1,this.firstFlag[e].start=!0):(this.isCodeFoucus=!0,this.firstFlag[3===e?0:e+1].start=!1,this.$refs.ipInput[3===e?0:e+1].focus()):(this.firstFlag[e].end=!0,this.firstFlag[e].start=!0);break;case"ArrowLeft":0===t.currentTarget.selectionStart?this.firstFlag[e].start?(this.firstFlag[e].start=!1,this.firstFlag[e].end=!0):(this.isCodeFoucus=!0,this.firstFlag[0===e?3:e-1].end=!1,this.$refs.ipInput[0===e?3:e-1].focus()):(this.firstFlag[e].start=!0,this.firstFlag[e].end=!0);break;default:break}}}}),g=h,v=(n("16da"),Object(u["a"])(g,f,p,!1,null,"ceaff8ac",null)),b=v.exports,m=function t(e){t.installed||e.component(b.name,b)};"undefined"!==typeof window&&window.Vue&&m(window.Vue);var x={install:m,fanIpInput:b};i["a"].config.productionTip=!1,i["a"].use(x),new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";n("bc9f")},"7d79":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}",""]),t.exports=e},bc59:function(t,e,n){var i=n("fa2c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("58defd97",i,!0,{sourceMap:!1,shadowMode:!1})},bc9f:function(t,e,n){var i=n("7d79");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("458f7167",i,!0,{sourceMap:!1,shadowMode:!1})},fa2c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".fan-ip-addr[data-v-ceaff8ac]{display:inline-flex;list-style:none;border:1px solid #d9d9d9;border-radius:4px;padding:0 10px;justify-content:space-around;width:190px;height:32px}.fan-ip-addr .fan-ip-item[data-v-ceaff8ac]{line-height:32px}.fan-ip-addr .fan-ip-item .fan-ip-dot[data-v-ceaff8ac]{display:inline-block;width:2px;height:2px;background:#9b8d8d;border-radius:50%;box-shadow:0 0 0 1px #fff}.fan-ip-addr .fan-ip-item .fan-ip-input[data-v-ceaff8ac]{border:none;width:40px;position:relative;padding:3px 8px}.fan-ip-addr .fan-ip-item .fan-ip-input[data-v-ceaff8ac]:focus{box-shadow:none}",""]),t.exports=e}});