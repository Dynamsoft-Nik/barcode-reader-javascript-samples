(function(e){function t(t){for(var r,o,u=t[0],s=t[1],l=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08e0":function(e,t,n){"use strict";n("e822")},4714:function(e,t,n){"use strict";n("f17c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var u=Object(r["p"])("HelloWorld");return Object(r["j"])(),Object(r["c"])(u,{msg:"Hello World for Vue 3"})}var c=n("cf05"),o=n.n(c),u=function(e){return Object(r["l"])("data-v-7e9c539e"),e=e(),Object(r["k"])(),e},s={className:"helloWorld"},l=u((function(){return Object(r["f"])("img",{class:"applogo",alt:"Vue logo",src:o.a},null,-1)})),i={id:"UIElement"},p={key:0,style:{"font-size":"x-large"}},d=u((function(){return Object(r["f"])("span",{style:{float:"left"}},"All Results:",-1)})),f=u((function(){return Object(r["f"])("br",null,null,-1)})),b={id:"results"},j={class:"resultText"};function O(e,t,n,a,c,o){var u=Object(r["p"])("BarcodeScanner");return Object(r["j"])(),Object(r["e"])("div",s,[Object(r["f"])("h1",null,[Object(r["g"])(Object(r["q"])(n.msg)+" ",1),l]),Object(r["s"])(Object(r["f"])("input",{type:"text",placeholder:"The Last Read Barcode",id:"resultText","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.resultValue=e}),readonly:"true"},null,512),[[r["r"],a.resultValue]]),Object(r["f"])("div",i,[a.libLoaded?Object(r["d"])("",!0):(Object(r["j"])(),Object(r["e"])("span",p,"Loading Library...")),a.bShowScanner?(Object(r["j"])(),Object(r["c"])(u,{key:1,onAppendMessage:a.appendMessage},null,8,["onAppendMessage"])):Object(r["d"])("",!0)]),Object(r["f"])("div",null,[d,f,Object(r["f"])("div",b,[Object(r["f"])("ul",null,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["o"])(a.resultItems,(function(e,t){return Object(r["j"])(),Object(r["e"])("li",{key:t+1e5},[Object(r["f"])("span",null,Object(r["q"])(e.type),1),Object(r["f"])("span",j,Object(r["q"])(e.text),1)])})),128))])])])])}var v=n("1da1"),m=(n("96cf"),n("a909"));m["a"].organizationID="200000",m["a"].handshakeCode="200000-dbr_js_samples",m["a"].BarcodeReader.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.7/dist/";var g=m["a"],h={id:"barcodeScannerUI",ref:"root"};function y(e,t,n,a,c,o){return Object(r["j"])(),Object(r["e"])("div",h,null,512)}var x=n("b85c"),w={setup:function(e,t){var n=Object(r["n"])(null),a=Object(r["n"])(null),c=Object(r["n"])(!1);return Object(r["i"])(Object(v["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.value=a.value||g.BarcodeScanner.createInstance();case 3:if(r=e.sent,!c.value){e.next=7;break}return r.destroy(),e.abrupt("return");case 7:return n.value.appendChild(r.getUIElement()),document.getElementsByClassName("dce-btn-close")[0].hidden=!0,r.onFrameRead=function(e){var n,r=Object(x["a"])(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;t.emit("appendMessage",{format:a.barcodeFormatString,text:a.barcodeText,type:"result"}),-1!==a.barcodeText.indexOf("Attention(exceptionCode")&&t.emit("appendMessage",{msg:a.exception.message,type:"error"})}}catch(c){r.e(c)}finally{r.f()}},e.next=12,r.open();case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),t.emit("appendMessage",{msg:e.t0.message,type:"error"}),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))),Object(r["h"])(Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.value){e.next=5;break}return e.next=3,a.value;case 3:e.sent.destroy(),c.value=!0;case 5:case"end":return e.stop()}}),e)})))),{root:n}}},k=(n("9a66"),n("6b0d")),S=n.n(k);const _=S()(w,[["render",y],["__scopeId","data-v-174e321a"]]);var M=_,R={name:"HelloWorld",props:{msg:String},setup:function(){var e=Object(r["n"])(null),t=Object(r["n"])(!1),n=Object(r["n"])(!1),a=Object(r["m"])([]);Object(r["i"])(Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.BarcodeScanner.loadWasm();case 3:t.value=!0,c(),e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](0),alert(e.t0.message),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))));var c=function(){n.value=!0},o=function(t){switch(t.type){case"result":e.value=t.format+": "+t.text,a.push({type:t.format+": ",text:t.text});break;case"error":e.value=t.msg,a.push({type:"Error: ",text:t.msg});break;default:break}};return{resultItems:a,resultValue:e,libLoaded:t,bShowScanner:n,showScanner:c,appendMessage:o}},components:{BarcodeScanner:M}};n("08e0");const I=S()(R,[["render",O],["__scopeId","data-v-7e9c539e"]]);var P=I,B={name:"App",components:{HelloWorld:P}};n("4714");const T=S()(B,[["render",a]]);var V=T;Object(r["b"])(V).mount("#app")},"9a66":function(e,t,n){"use strict";n("f55d")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e822:function(e,t,n){},f17c:function(e,t,n){},f55d:function(e,t,n){}});
//# sourceMappingURL=app.d3b41acf.js.map