(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10dcfae7"],{2799:function(t,i,s){"use strict";var n=s("8c51"),o=s.n(n);o.a},5376:function(t,i,s){"use strict";var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row mx-3 flex-total-center align-items-start"},t._l(t.licensesData,(function(i,n){return s("div",{key:n,staticClass:"col-12 col-lg",class:t.full?"col-lg":"col-lg-3"},[s("div",{staticClass:"license-item"},[s("img",{staticClass:"img-fluid license-img",attrs:{src:i.img,alt:i.title}}),s("div",{staticClass:"license-link"},[s("span",{on:{click:function(i){return t.jumpPage(t.keyName)}}},[t._v("商品資訊")])])]),s("h4",{staticClass:"color-text-three text-center mt-2"},[t._v(t._s(i.title))]),s("h6",{staticClass:"color-text-minor licenses-content mb-3"},[t._v(t._s(i.content))])])})),0)},o=[],e={props:{licensesData:{type:Array,default:function(){return[]}},full:{type:Boolean,default:function(){return!1}},keyName:{type:String,default:function(){return"all"}}},data:function(){return{jumpName:""}},methods:{jumpPage:function(t){this.$router.push({path:"/products",query:{type:"class-".concat(t)}})}}},a=e,c=(s("f98a"),s("2877")),l=Object(c["a"])(a,n,o,!1,null,null,null);i["a"]=l.exports},6377:function(t,i,s){},8418:function(t,i,s){"use strict";var n=s("c04e"),o=s("9bf2"),e=s("5c6c");t.exports=function(t,i,s){var a=n(i);a in t?o.f(t,a,e(0,s)):t[a]=s}},"8c51":function(t,i,s){},"99af":function(t,i,s){"use strict";var n=s("23e7"),o=s("d039"),e=s("e8b5"),a=s("861d"),c=s("7b0b"),l=s("50c4"),r=s("8418"),f=s("65f0"),u=s("1dde"),p=s("b622"),v=s("2d00"),d=p("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!a(t))return!1;var i=t[d];return void 0!==i?!!i:e(t)},C=!h||!_;n({target:"Array",proto:!0,forced:C},{concat:function(t){var i,s,n,o,e,a=c(this),u=f(a,0),p=0;for(i=-1,n=arguments.length;i<n;i++)if(e=-1===i?a:arguments[i],b(e)){if(o=l(e.length),p+o>m)throw TypeError(g);for(s=0;s<o;s++,p++)s in e&&r(u,p,e[s])}else{if(p>=m)throw TypeError(g);r(u,p++,e)}return u.length=p,u}})},b64b:function(t,i,s){var n=s("23e7"),o=s("7b0b"),e=s("df75"),a=s("d039"),c=a((function(){e(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return e(o(t))}})},bf90:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{},[s("div",{staticClass:"container"},[s("h4",{staticClass:"know-diving-title font-size-125"},[t._v("簡短介紹-潛水")]),s("div",{staticClass:"know-diving-body"},[t._m(0),s("p",[t._v("其實，台灣四面環海，除了南投以外各縣市都比鄰海邊，")]),s("p",[t._v("民眾要親近海洋的時間與金錢成本相較於其他國家都非常有競爭力，")]),s("p",[t._v("加上台灣地形特殊，由北自南海岸線各有特殊之處，")]),s("p",[t._v("北部的藻礁、岩岸，西部的潟湖地形、泥岸，")]),s("p",[t._v("南部珊瑚礁海岸地形以及東部大山大水的壯麗景緻，")]),s("p",[t._v("都很各具特色適合民眾親近海洋。 "),s("router-link",{attrs:{to:"maps"}},[t._v("點選我了解潛點特色")]),t._v("。 ")],1),t._m(1),s("p",[s("ul",[s("li",[t._v("不帶呼吸器的潛水(代表項目- "),s("a",{attrs:{href:""},on:{click:function(i){return i.preventDefault(),t.jumpInfo("free")}}},[s("strong",{staticClass:"font-size-125"},[t._v("自由潛水")])]),t._v(") ")]),s("li",[t._v("帶呼吸器的潛水(代表項目- "),s("a",{attrs:{href:""},on:{click:function(i){return i.preventDefault(),t.jumpInfo("scuba")}}},[s("strong",{staticClass:"font-size-125"},[t._v("水肺潛水")])]),t._v(") ")])])])]),s("h4",{staticClass:"know-diving-title font-size-125"},[t._v("容易產生的危害")]),t._m(2),s("h4",{staticClass:"know-diving-title font-size-125"},[t._v("哪些人不適合參加潛水活動")]),t._m(3),s("h4",{ref:"knowMoreInfo",staticClass:"know-diving-title font-size-125 mb-0"},[t._v("了解更多資訊")]),s("section",{staticClass:"align-items-end py-2 row know-diving-click-part"},[s("div",{staticClass:"col know-diving-tap",on:{click:function(i){t.userChioce="free"}}},[s("h3",{staticClass:"py-1"},[t._v("自由潛水")]),s("h5",{staticClass:"color-text-minor pb-1 m-0"},[t._v("F R E E D I V I N G")])]),s("h3",{staticClass:"col-2 color-text-primary mb-3 pb-3"},[t._v("/")]),s("div",{staticClass:"col know-diving-tap",on:{click:function(i){t.userChioce="scuba"}}},[s("h3",{staticClass:"py-1"},[t._v("水肺潛水")]),s("h5",{staticClass:"color-text-minor pb-1 m-0"},[t._v("S C U B A D I V I N G")])])]),s("section",{ref:"knowShowPart",staticClass:"know-more-part mx-lg-5"},[s("div",{ref:"knowFreeDiving",staticClass:"part-in-left"}),s("section",{ref:"knowShowInfo",staticClass:"part-in-center px-5 border d-none"},[s("h5",{staticClass:"know-diving-title"},[t._v("了解"+t._s(t.divingInfo.title)+"潛水")]),s("p",{domProps:{innerHTML:t._s(t.divingInfo.introduction)}}),s("h5",{staticClass:"know-diving-title"},[t._v(t._s(t.divingInfo.title)+"潛水類型")]),s("ul",{staticClass:"d-flex px-5"},t._l(t.divingInfo.type,(function(i,n){return s("li",{key:n,staticClass:"col"},[s("h5",[s("strong",{staticClass:"font-size-125"},[t._v(t._s(i.name))])]),s("blockquote",{staticClass:"text-left"},[t._v(" "+t._s(i.introduction)+" ")])])})),0),s("h5",{staticClass:"know-diving-title"},[t._v("相關課程資訊")]),s("licenses-loop",{attrs:{"licenses-data":t.divingLicenses[t.userChioce],full:!0}})],1),s("div",{ref:"knowScubaDiving",staticClass:"part-in-right"})]),s("h5",{staticClass:"know-diving-title",class:""===t.userChioce?"mt-0":"mt-5"})])])},o=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("p",[s("strong",{staticClass:"font-size-125"},[t._v("潛水")]),t._v("泛指所有的水面下活動。")])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("p",{staticClass:"mt-5"},[t._v("根據 "),s("strong",{staticClass:"font-size-125"},[t._v("潛水的方式")]),t._v("和 "),s("strong",{staticClass:"font-size-125"},[t._v("各自使用的不同設備")]),t._v("，"),s("u",[t._v("可分為以下幾類：")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"know-diving-body"},[s("p",[t._v("所有運動都含有危險成分，當然潛水也不例外，")]),s("p",[t._v("不遵循潛水的安全注意事項，沒有受過正規的訓練以及盲目挑戰極限等，")]),s("p",[t._v("都是些危害身體健康的行為，")]),s("p",[t._v("所以在了解如何玩水時，更需要懂得在玩水時過程中容易產生的危害。")]),s("p",[s("u",[s("strong",{staticClass:"font-size-125"},[t._v("容易產生的危害如下")])]),t._v(" :")]),s("p",[s("ul",{staticClass:"text-left d-flex w-100 flex-wrap"},[s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("減壓病")]),s("blockquote",[t._v(" 四肢、胸部或關節疼痛；胸部和頸部腫脹；呼吸困難；無意識；身體協調障礙；視野模糊；麻木刺痛；眩暈；疲勞無力；癱瘓。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("溺水")]),s("blockquote",[t._v(" 咳嗽、虛弱或無呼吸；嘴巴周圍有白沫；心臟病。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("肺部過度擴張")]),s("blockquote",[t._v(" 在水面咳血或者血液從最中溢出；癱瘓；失去意識；虛弱或沒有呼吸；眩暈；奇怪的行動。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("中暑")]),s("blockquote",[t._v(" 快速強勁的脈搏；皮膚潮紅髮熱；不出汗或只出一點汗；失去意識；可能的大腦或器官損害。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("熱衰竭")]),s("blockquote",[t._v(" 虛弱但快速的呼吸；虛弱但快速的脈搏；濕冷的皮膚；大量出汗；脫水；噁心虛弱。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("低溫症")]),s("blockquote",[t._v(" 無法控制的顫抖；脈搏虛弱；嘴唇、手指、腳趾發藍發紫；意識模糊；失去意識。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("休克")]),s("blockquote",[t._v(" 虛弱的呼吸；蒼白濕冷的皮膚；噁心；焦躁；極度口渴；快速脈搏。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("海膽與魚類刺傷")]),s("blockquote",[t._v(" 疼痛；穿刺傷口；休克；噁心；癱瘓。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("水母蜇傷")]),s("blockquote",[t._v(" 皮膚紅色浮腫；密集的蜇傷痛感；有觸鬚或觸角在表面；休克。 ")])])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"know-diving-body"},[s("ul",{staticClass:"text-left d-flex w-100 flex-wrap"},[s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("耳鼻喉(呼吸道)相關疾病")]),s("blockquote",[t._v(" 耳朵是率先對水壓有反應的身體部位，只要潛入水中2-3公尺，耳朵就會因水壓而感到疼痛； 耳壓是可以學習平衡避免疼痛的！但若您曾經有過嚴重的耳疾，需要先諮詢醫生是否可以輕鬆處理壓力問題唷！ 雖然在水中不必用鼻子呼吸，但如果鼻塞鼻竇炎等狀況，容易產生分泌物並阻塞，影響到耳壓平衡， 所以感冒的時候不能潛水；在水中需要持續用嘴巴呼吸，所以氣管呼吸道疾病的朋友也需要經過專業的評估諮詢再學習才安全安心。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("心臟/肺部/血管疾病患者")]),s("blockquote",[t._v(" 因水壓可能會對曾經受傷的肺部造成影響，水下呼吸的時候血濃度血壓可能會有些改變， 所以血壓疾病，平時需要靠藥物控制的心肺血管疾病的人可能不適合潛水。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("癲癇病患者")]),s("blockquote",[t._v(" 癲癇若在陸地發作，可以即時有效控制並實施救助。但是在水底若發生狀況則無法立刻進行處理， 因為身體無法自主控制而造成水下呼吸問題嗆水等，所以癲癇症病人不能進行潛水活動。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("其他身體狀況")]),s("blockquote",[t._v(" 剛做完手術還在恢復期的人也不建議潛水，包含微創的雷射近視手術；懷孕期的孕婦、年齡太小的孩童、糖尿病患者、曾患減壓疾病的人也不能進行潛水活動。 另外，如果你剛剛做過牙齒修補，可能不算個手術，但補牙有可能在牙齒裡形成一個微小的密閉空腔，會因水壓變化受影響造成疼痛，所以潛水前也需要先諮詢牙醫的建議唷。 ")])]),s("li",{staticClass:"col-lg-4"},[s("strong",{staticClass:"font-size-125"},[t._v("心理因素")]),s("blockquote",[t._v(" 心理會影響身體，進入到水下的環境不同於陸地，心理狀態的改變可能會影響你的思考、情緒或身體狀況， 有精神官能症、幽閉恐懼症、憂鬱症或其他精神疾病，以及長期服用藥物的朋友，也不建議進行潛水活動。 ")])])])])}],e=(s("99af"),s("4de4"),s("b64b"),{title:"自由潛水",introduction:"\n    <p>自由潛水（Free-diving），是指不攜帶水下供氣設備，以單一次的閉氣所進行的潛水活動。</p>\n    <p>簡單的說自由潛水是依靠自己所呼吸的一口氣的時間在水裡或海裡的閉氣潛水源於內心的力量，</p>\n    <p>身體的自律和控制，輕鬆享受沉浸在水下世界的靜謐自由。</p>\n    <p>自由潛水依靠每一位潛水員本身的生理及心理表現，著重心理的養成，對體能的要求較高，</p>\n    <p>而需求的裝備，與浮潛及水肺潛水員看起來相似，實際卻不同，使用方法也有所差異。</p>\n    <p>自由潛水是一項有趣的挑戰，但它也有潛在的風險。</p>\n    <p>所以課程學習過程是非常重要的，需要認真對待你在這個課程中學到的東西，才能安全的進行這項運動；</p>\n    <p>由合格的教練擔任提供教導，該教練也必須是一個或多個潛水員國際認證機構的註冊在籍的成員。</p>\n    <p>課程期間內會學習在水下環境中安全開展活動所需的技能，包括如何正確使用自由潛水的裝備與保養，</p>\n    <p>正確的潛水知識養成與呼吸閉氣的技巧，潛伴救援程序，評估潛水環境等。</p>\n    <p>當你達成課程等級所設定的標準，即可獲得合格潛水員認證資格。</p>\n    <p>全世界有多個通過國際認證的合格組織系統提供自由潛水員培訓課程，如PADI、SNSI等，</p>\n    <p>通過認證後會頒發「潛水員認證卡」(Diving Certification Card),，也稱為C卡(C-card)。</p>",type:[{name:"休閒自由潛水",introduction:"泛指以娛樂、體驗、攝影性質的潛水活動，常見在室內深水池或觀光海洋區，潛水深度多在10米內，需要有潛伴成組相互照看。"},{name:"漁獵自由潛水",introduction:"人類自由潛水最早的起源與目的，部分國家地區的海洋民族，會利用自由潛水作為職業進行水下採集，或狩獵水中生物維持生計。"},{name:"競技自由潛水",introduction:"自由潛水作為運動競賽屢屢創下驚人的世界紀錄，每年在世界各地舉辦國際的自由潛水賽事，吸引各國厲害的選手突破自己也締造人類突破極限的紀錄。"}]}),a={title:"水肺潛水",introduction:"\n  <p>水肺潛水（Self-Contained Underwater Breathing Apparatus，縮寫：SCUBA），</p>\n  <p>指潛水員攜帶水下呼吸系統所進行的潛水活動，可以讓人在水裡持續呼吸的一種休閒運動。</p>\n  <p>水肺潛水因為需要攜帶及操作裝備，和學習開車一樣需要經過課程教育訓練，</p>\n  <p>並由合格的教練教導，該教練也必須是一個或多個潛水員國際認證機構的註冊在籍成員。</p>\n  <p>基本潛水員培訓需要學習在水下環境中，安全活動所需的技能，</p>\n  <p>包括使用潛水設備的程序和技能、緊急自助和救援程序、潛水計劃等等，</p>\n  <p>在課程完成後，即獲得合格潛水員認證資格。</p>\n  <p>全世界有多個通過國際認證的合格組織系統提供潛水員培訓課程，如PADI、SNSI等等，</p>\n  <p>通過認證後會頒發「潛水員認證卡」(Diving CertificationCard),，也稱為C卡(C-card)。</p>",type:[{name:"休閒潛水",introduction:"泛指觀賞娛樂性的潛水活動，通常會於觀光開放區進行，深度不大於40公尺，一定需要有潛伴成組相互照看。"},{name:"技術潛水",introduction:"泛指具挑戰性的潛水活動，如超過40公尺大深度的潛水、水底洞穴、沉船等的專業潛水探險活動。也有可能是以單人進行。"},{name:"工業潛水",introduction:"泛指含工業性質的潛水活動，如水下工程及船舶工業等。"}]},c={free:e,scuba:a},l=s("5376"),r=s("dfd5"),f={data:function(){return{divingLicenses:r["a"],userChioce:"",divingInfo:{}}},methods:{jumpInfo:function(t){this.userChioce=t,document.documentElement.scrollTop=this.$refs.knowMoreInfo.offsetTop-165},renderSidebar:function(t,i){var s={free:"knowFreeDiving",scuba:"knowScubaDiving"},n=""===i?Object.keys(s).filter((function(i){return i!==t})):i;this.$refs.knowShowInfo.classList.remove("d-none"),this.$refs[s[t]].innerHTML='\n        <div class="border-left-3 border-color-'.concat(t,' h-double"></div>\n      '),this.$refs[s[n]].innerHTML='\n        <div class="border-right-3 border-color-'.concat(n,' "></div>\n        <div class="border-right-3 border-color-').concat(n,' "></div>\n      ')}},watch:{userChioce:function(t,i){this.renderSidebar(t,i),this.divingInfo=c[t]}},components:{LicensesLoop:l["a"]}},u=f,p=(s("2799"),s("2877")),v=Object(p["a"])(u,n,o,!1,null,null,null);i["default"]=v.exports},dfd5:function(t,i,s){"use strict";s.d(i,"a",(function(){return n})),s.d(i,"b",(function(){return o}));var n={free:[{img:"https://images.unsplash.com/photo-1579981633051-529120895bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"基礎自由潛水",content:"基礎課程可以讓你在短時間內學習到有關於自由潛水的相關知識，屬於體驗課程。"},{img:"https://images.unsplash.com/photo-1546969972-f7c2191e13b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80",title:"自潛證照(L.1)",content:"該課程對於自由潛水員來說是特別重要的，建立所有自由潛水的理論與技巧的基本功，在教練的陪伴之下安全的在20米以內的深度自由潛水。"},{img:"https://images.unsplash.com/photo-1544551763-808e05e86c26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",title:"專業自由潛水",content:"不管證照等級的自由潛水員，只要是想要提升自己的技巧，那就來參加本課程吧，教練將針對您個別的狀況進行量身的教學。"}],scuba:[{img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"探索水肺潛水",content:"任何人都可以嘗試的潛水體驗，以輕鬆的方式下潛到水深12米以內，欣賞海底的美貌。"},{img:"https://images.unsplash.com/photo-1544551763-6e45ce662425?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",title:"開放水域潛水",content:"本課程包含考照的項目，更是水肺的入門課程完成此課程可以獲取證照並開始展開您的潛水生活。"},{img:"https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80",title:"主題性水肺潛水",content:"該選項可以讓潛客們可以客製化的計畫主題，可以選擇罕見的潛點，又或者想精進某項潛水技能，可以專為潛客量身訂製。"}]},o=[{name:"Jhon",img:"https://images.unsplash.com/photo-1540206351-a5b7c9efe478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{name:"Sandy",img:"https://images.unsplash.com/photo-1544551763-8485fc927679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{name:"Andy",img:"https://images.unsplash.com/photo-1597332631449-19e77016b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"},{name:"Cobe",img:"https://images.unsplash.com/photo-1591296090428-58a50eb94ed1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{name:"Cindy",img:"https://images.unsplash.com/photo-1556889182-1dc23a00ffc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},{name:"Eric",img:"https://images.unsplash.com/photo-1562207029-8371d359eef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}]},f98a:function(t,i,s){"use strict";var n=s("6377"),o=s.n(n);o.a}}]);
//# sourceMappingURL=chunk-10dcfae7.e237c8f3.js.map