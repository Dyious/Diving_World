(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d643a0"],{1078:function(t,o,a){"use strict";var s=a("7710"),e=a.n(s);e.a},"159b":function(t,o,a){var s=a("da84"),e=a("fdbc"),c=a("17c2"),n=a("9112");for(var i in e){var r=s[i],l=r&&r.prototype;if(l&&l.forEach!==c)try{n(l,"forEach",c)}catch(u){l.forEach=c}}},"17c2":function(t,o,a){"use strict";var s=a("b727").forEach,e=a("a640"),c=a("ae40"),n=e("forEach"),i=c("forEach");t.exports=n&&i?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,o,a){"use strict";var s=a("23e7"),e=a("17c2");s({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},7710:function(t,o,a){},8418:function(t,o,a){"use strict";var s=a("c04e"),e=a("9bf2"),c=a("5c6c");t.exports=function(t,o,a){var n=s(o);n in t?e.f(t,n,c(0,a)):t[n]=a}},"99af":function(t,o,a){"use strict";var s=a("23e7"),e=a("d039"),c=a("e8b5"),n=a("861d"),i=a("7b0b"),r=a("50c4"),l=a("8418"),u=a("65f0"),p=a("1dde"),f=a("b622"),d=a("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",C=d>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=p("concat"),_=function(t){if(!n(t))return!1;var o=t[h];return void 0!==o?!!o:c(t)},b=!C||!g;s({target:"Array",proto:!0,forced:b},{concat:function(t){var o,a,s,e,c,n=i(this),p=u(n,0),f=0;for(o=-1,s=arguments.length;o<s;o++)if(c=-1===o?n:arguments[o],_(c)){if(e=r(c.length),f+e>v)throw TypeError(m);for(a=0;a<e;a++,f++)a in c&&l(p,f,c[a])}else{if(f>=v)throw TypeError(m);l(p,f++,c)}return p.length=f,p}})},a640:function(t,o,a){"use strict";var s=a("d039");t.exports=function(t,o){var a=[][t];return!!a&&s((function(){a.call(null,o||function(){throw 1},1)}))}},b066:function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-3 mb-2"},[a("div",{staticClass:"col-lg-9"},[t._m(0),a("div",{staticClass:"cart-table-body"},[t._l(t.carts,(function(o,s){return a("div",{key:s,staticClass:"cart-table-row"},[a("div",{staticClass:"col-1"},[t._v(t._s(s+1))]),a("div",{staticClass:"col-2"},[a("img",{staticClass:"img-fluid",attrs:{src:o.product.imageUrl[0],alt:"item.product.title"}})]),a("div",{staticClass:"col-2"},[t._v(t._s(o.product.title))]),a("div",{staticClass:"col-3 d-flex flex-column"},[a("div",{staticClass:"border-0"},[t._v(t._s(t._f("commaFormat")(o.product.price))+" ")]),a("div",{staticClass:"border-0"},[a("i",{staticClass:"fas fa-minus-square text-danger",on:{click:function(a){return t.quantityUpdate(o.product.id,o.quantity-1)}}}),a("span",{staticClass:"mx-2"},[t._v(t._s(o.quantity))]),a("i",{staticClass:"fas fa-plus-square text-success",on:{click:function(a){return t.quantityUpdate(o.product.id,o.quantity+1)}}})])]),a("div",{staticClass:"col-2"},[t._v(t._s(t._f("commaFormat")(o.quantity*o.product.price)))]),a("div",{staticClass:"col-2"},[a("i",{staticClass:"far fa-times-circle text-danger",on:{click:function(a){return t.removeOneCart(o.product.id)}}})])])})),0===t.carts.length?a("div",{staticClass:"my-3"},[a("router-link",{staticClass:"text-info",attrs:{to:"/products"}},[t._v("請前往選購")])],1):t._e()],2),t.carts.length>0?a("div",{staticClass:"cart-table-footer"},[a("button",{staticClass:"btn mt-2 btn-block",attrs:{type:"button"},on:{click:function(o){return t.removeAllCarts()}}},[t._v("清空購物車")])]):t._e()]),a("div",{staticClass:"col-lg-3 mt-5 mt-lg-0"},[a("div",{staticClass:"order-detail"},[a("h3",{staticClass:"mb-3 mt-2"},[t._v("訂單詳情")]),a("p",[a("span",[t._v("總額 : ")]),a("span",[t._v("$"+t._s(t._f("commaFormat")(t.totalCost)))])]),a("div",{ref:"counponGroup",staticClass:"coupon-group"},[a("span",[t._v("優惠卷 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.counponCode,expression:"counponCode"}],ref:"couponCode",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.counponCode},on:{click:function(o){t.counponCode=""},input:function(o){o.target.composing||(t.counponCode=o.target.value)}}}),t._m(1),a("button",{ref:"counponSubmit",staticClass:"order-coupon",attrs:{type:"button"},on:{click:function(o){return t.couponCheck()}}},[t._v("GO")])]),a("p",[a("span",[t._v("折扣 : "),a("small",{directives:[{name:"show",rawName:"v-show",value:0!==t.counpon.percent,expression:"counpon.percent !== 0"}]},[t._v(" 打折 "+t._s(t.counpon.info.percent)+" % ")])]),a("span",{class:0===t.counpon.percent?"":"text-danger"},[t._v(" -$"+t._s(t._f("commaFormat")(t.totalCost*t.counpon.percent))+" ")])]),a("p",[a("span",[t._v("總計 : ")]),a("span",[t._v("$"+t._s(t._f("commaFormat")(t.totalCost*(1-t.counpon.percent))))])])]),a("small",{staticClass:"text-danger"},[t._v(t._s(t.counponReally))]),t._m(2),a("button",{staticClass:"btn btn-block my-3 bg-main text-white",attrs:{type:"button",disabled:0===t.carts.length},on:{click:function(o){return t.nextPageTo()}}},[t._v("送出")])])])])},e=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"flex-total-center cart-table-title pr-4"},[a("div",{staticClass:"col-1"},[t._v("#")]),a("div",{staticClass:"col-2"},[t._v("圖片")]),a("div",{staticClass:"col-2"},[t._v("商品")]),a("div",{staticClass:"col-3"},[t._v("單品價格、數量")]),a("div",{staticClass:"col-2"},[t._v("小計")]),a("div",{staticClass:"col-2"},[t._v("操作")])])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"success-icon"},[a("i",{staticClass:"fas fa-check"})])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"order-note mt-3 p-3 text-left"},[a("p",[t._v("產品若要退費請至於領取貨物(七天鑑賞期)進行退換貨、課程請於前七天內進行內容更動。")])])}],c=(a("99af"),a("4160"),a("d3b7"),a("159b"),{data:function(){return{promtyMessage:"",carts:[],totalCost:0,counponCode:"",counponReally:"",counpon:{info:{},percent:0}}},methods:{getCarts:function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://course-ec-api.hexschool.io/api/").concat("b090295f-d376-47f5-8502-94f3712a3406","/ec/shopping"),s=this.$loading.show(),e={page:o,paged:"100"};this.totalCost=0,this.$http.get(a,{params:e}).then((function(o){t.carts=o.data.data,o.data.data.forEach((function(o){t.totalCost+=o.product.price*o.quantity})),t.cartsPaginate=o.data.meta.pagination,s.hide()}))},couponCheck:function(){var t=this;if(this.counponReally="",""===this.$refs.couponCode.value)return this.$refs.counponGroup.classList.add("shake"),void(this.counponReally="*請填寫優惠卷*");var o="".concat("https://course-ec-api.hexschool.io/api/").concat("b090295f-d376-47f5-8502-94f3712a3406","/ec/coupon/search"),a=this.$loading.show({fullPage:!1,container:this.$refs.counponSubmit,width:25,height:25}),s={code:this.counponCode};this.$http.post(o,s).then((function(o){t.counpon.info=o.data.data,t.counpon.percent=o.data.data.percent/100,t.$refs.counponGroup.classList.add("success"),t.counponReally="*優惠卷正確唷*"})).catch((function(){t.couponCode="",t.$refs.counponGroup.classList.add("shake"),t.counponReally="*檢查優惠卷是否正確*"})).finally((function(){a.hide()}))},removeAllCarts:function(){var t=this,o="".concat("https://course-ec-api.hexschool.io/api/").concat("b090295f-d376-47f5-8502-94f3712a3406","/ec/shopping/all/product"),a=this.$loading.show();this.$http.delete(o).then((function(){t.getCarts(),t.$bus.$emit("resetCarts"),t.promtyMessage="清空購物車完成"})).catch((function(){t.promtyMessage="清空購物車失敗"})).finally((function(){a.hide(),t.$bus.$emit("catchPrompt",{message:t.promtyMessage})}))},removeOneCart:function(t){var o=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("b090295f-d376-47f5-8502-94f3712a3406","/ec/shopping/").concat(t),s=this.$loading.show();this.$http.delete(a).then((function(){o.getCarts(),localStorage.onTheStep=0,o.$bus.$emit("resetCarts"),o.promtyMessage="刪除此商品成功"})).catch((function(){o.promtyMessage="刪除此商品失敗"})).finally((function(){s.hide(),o.$bus.$emit("catchPrompt",{message:o.promtyMessage})}))},quantityUpdate:function(t,o){var a=this;if(0!==o){var s="".concat("https://course-ec-api.hexschool.io/api/").concat("b090295f-d376-47f5-8502-94f3712a3406","/ec/shopping"),e=this.$loading.show(),c={product:t,quantity:o};this.$http.patch(s,c).then((function(){a.getCarts(),a.promtyMessage="增加產品數量成功"})).catch((function(){a.promtyMessage="刪除產品數量成功"})).finally((function(){e.hide(),a.$bus.$emit("catchPrompt",{message:a.promtyMessage})}))}},nextPageTo:function(){localStorage.confirmCart=JSON.stringify({carts:this.carts,totalCost:this.totalCost*(1-this.counpon.percent),couponCode:this.counpon.info.code}),localStorage.onTheStep=1,this.$emit("nextPage"),this.$router.push({name:"Insert"})}},watch:{counponCode:function(){this.$refs.counponGroup.classList.remove("success","shake")}},created:function(){this.getCarts()}}),n=c,i=(a("1078"),a("2877")),r=Object(i["a"])(n,s,e,!1,null,null,null);o["default"]=r.exports},fdbc:function(t,o){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-62d643a0.3665f657.js.map