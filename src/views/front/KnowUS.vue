<template>
  <div class="">
    <div class="container">
      <!--  -->
      <h4 class="know-diving-title font-size-125">簡短介紹-潛水</h4>
      <div class="know-diving-body">
        <p><strong class="font-size-125">潛水</strong>泛指所有的水面下活動。</p>
        <p>其實，台灣四面環海，除了南投以外各縣市都比鄰海邊，</p>
        <p>民眾要親近海洋的時間與金錢成本相較於其他國家都非常有競爭力，</p>
        <p>加上台灣地形特殊，由北自南海岸線各有特殊之處，</p>
        <p>北部的藻礁、岩岸，西部的潟湖地形、泥岸，</p>
        <p>南部珊瑚礁海岸地形以及東部大山大水的壯麗景緻，</p>
        <p>都很各具特色適合民眾親近海洋。
          <router-link to="maps">點選我了解潛點特色</router-link>。
        </p>
        <p class="mt-5">根據
          <strong class="font-size-125">潛水的方式</strong>和
          <strong class="font-size-125">各自使用的不同設備</strong>，<u>可分為以下幾類：</u>
        </p>
        <p>
        <ul>
          <li>不帶呼吸器的潛水(代表項目-
            <a
              href=""
              @click.prevent="jumpInfo('free')"
            >
              <strong class="font-size-125">自由潛水</strong>
            </a>)
          </li>
          <li>帶呼吸器的潛水(代表項目-
            <a
              href=""
              @click.prevent="jumpInfo('scuba')"
            >
              <strong class="font-size-125">水肺潛水</strong>
            </a>)
          </li>
        </ul>
        </p>
      </div>
      <!--  -->
      <h4 class="know-diving-title font-size-125">容易產生的危害</h4>
      <section class="know-diving-body">
        <p>所有運動都含有危險成分，當然潛水也不例外，</p>
        <p>不遵循潛水的安全注意事項，沒有受過正規的訓練以及盲目挑戰極限等，</p>
        <p>都是些危害身體健康的行為，</p>
        <p>所以在了解如何玩水時，更需要懂得在玩水時過程中容易產生的危害。</p>
        <p><u><strong class="font-size-125">容易產生的危害如下</strong></u> :</p>
        <p>
        <ul class="text-left d-flex w-100 flex-wrap">
          <li class="col-lg-4">
            <strong class="font-size-125">減壓病</strong>
            <blockquote>
              四肢、胸部或關節疼痛；胸部和頸部腫脹；呼吸困難；無意識；身體協調障礙；視野模糊；麻木刺痛；眩暈；疲勞無力；癱瘓。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">溺水</strong>
            <blockquote>
              咳嗽、虛弱或無呼吸；嘴巴周圍有白沫；心臟病。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">肺部過度擴張</strong>
            <blockquote>
              在水面咳血或者血液從最中溢出；癱瘓；失去意識；虛弱或沒有呼吸；眩暈；奇怪的行動。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">中暑</strong>
            <blockquote>
              快速強勁的脈搏；皮膚潮紅髮熱；不出汗或只出一點汗；失去意識；可能的大腦或器官損害。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">熱衰竭</strong>
            <blockquote>
              虛弱但快速的呼吸；虛弱但快速的脈搏；濕冷的皮膚；大量出汗；脫水；噁心虛弱。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">低溫症</strong>
            <blockquote>
              無法控制的顫抖；脈搏虛弱；嘴唇、手指、腳趾發藍發紫；意識模糊；失去意識。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">休克</strong>
            <blockquote>
              虛弱的呼吸；蒼白濕冷的皮膚；噁心；焦躁；極度口渴；快速脈搏。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">海膽與魚類刺傷</strong>
            <blockquote>
              疼痛；穿刺傷口；休克；噁心；癱瘓。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">水母蜇傷</strong>
            <blockquote>
              皮膚紅色浮腫；密集的蜇傷痛感；有觸鬚或觸角在表面；休克。
            </blockquote>
          </li>
        </ul>
        </p>
      </section>
      <h4 class="know-diving-title font-size-125">哪些人不適合參加潛水活動</h4>
      <section class="know-diving-body">
        <ul class="text-left d-flex w-100 flex-wrap">
          <li class="col-lg-4">
            <strong class="font-size-125">耳鼻喉(呼吸道)相關疾病</strong>
            <blockquote>
              耳朵是率先對水壓有反應的身體部位，只要潛入水中2-3公尺，耳朵就會因水壓而感到疼痛；
              耳壓是可以學習平衡避免疼痛的！但若您曾經有過嚴重的耳疾，需要先諮詢醫生是否可以輕鬆處理壓力問題唷！
              雖然在水中不必用鼻子呼吸，但如果鼻塞鼻竇炎等狀況，容易產生分泌物並阻塞，影響到耳壓平衡，
              所以感冒的時候不能潛水；在水中需要持續用嘴巴呼吸，所以氣管呼吸道疾病的朋友也需要經過專業的評估諮詢再學習才安全安心。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">心臟/肺部/血管疾病患者</strong>
            <blockquote>
              因水壓可能會對曾經受傷的肺部造成影響，水下呼吸的時候血濃度血壓可能會有些改變，
              所以血壓疾病，平時需要靠藥物控制的心肺血管疾病的人可能不適合潛水。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">癲癇病患者</strong>
            <blockquote>
              癲癇若在陸地發作，可以即時有效控制並實施救助。但是在水底若發生狀況則無法立刻進行處理，
              因為身體無法自主控制而造成水下呼吸問題嗆水等，所以癲癇症病人不能進行潛水活動。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">其他身體狀況</strong>
            <blockquote>
              剛做完手術還在恢復期的人也不建議潛水，包含微創的雷射近視手術；懷孕期的孕婦、年齡太小的孩童、糖尿病患者、曾患減壓疾病的人也不能進行潛水活動。
              另外，如果你剛剛做過牙齒修補，可能不算個手術，但補牙有可能在牙齒裡形成一個微小的密閉空腔，會因水壓變化受影響造成疼痛，所以潛水前也需要先諮詢牙醫的建議唷。
            </blockquote>
          </li>
          <li class="col-lg-4">
            <strong class="font-size-125">心理因素</strong>
            <blockquote>
              心理會影響身體，進入到水下的環境不同於陸地，心理狀態的改變可能會影響你的思考、情緒或身體狀況，
              有精神官能症、幽閉恐懼症、憂鬱症或其他精神疾病，以及長期服用藥物的朋友，也不建議進行潛水活動。
            </blockquote>
          </li>
        </ul>
      </section>
      <!--  -->
      <h4
        class="know-diving-title font-size-125 mb-0"
        ref="knowMoreInfo"
      >了解更多資訊</h4>
      <section class="align-items-end py-2 row know-diving-click-part">
        <div
          class="col know-diving-tap"
          @click="userChioce='free'"
        >
          <h3 class="py-1">自由潛水</h3>
          <h5 class="color-text-minor pb-1 m-0">F R E E D I V I N G</h5>
        </div>
        <h3 class="col-2 color-text-primary mb-3 pb-3">/</h3>
        <div
          class="col know-diving-tap"
          @click="userChioce='scuba'"
        >
          <h3 class="py-1">水肺潛水</h3>
          <h5 class="color-text-minor pb-1 m-0">S C U B A D I V I N G</h5>
        </div>
      </section>

      <!--  -->
      <section
        class="know-more-part mx-lg-5"
        ref="knowShowPart"
      >
        <div
          class="part-in-left"
          ref="knowFreeDiving"
        >
        </div>
        <section
          class="part-in-center px-5 border d-none"
          ref="knowShowInfo"
        >
          <h5 class="know-diving-title">了解{{divingInfo.title}}潛水</h5>
          <p v-html="divingInfo.introduction"></p>
          <h5 class="know-diving-title">{{divingInfo.title}}潛水類型</h5>
          <ul class="d-flex px-5">
            <li
              v-for="(detailInfo,index) in divingInfo.type"
              :key="index"
              class="col"
            >
              <h5><strong class="font-size-125">{{detailInfo.name}}</strong></h5>
              <blockquote class="text-left">
                {{detailInfo.introduction}}
              </blockquote>
            </li>
          </ul>
          <h5 class="know-diving-title">相關課程資訊</h5>
          <licenses-loop
            :licenses-data="divingLicenses[userChioce]"
            :full="true"
          ></licenses-loop>
        </section>
        <div
          class="part-in-right"
          ref="knowScubaDiving"
        >
        </div>
      </section>
       <h5 class="know-diving-title" :class="userChioce===''?'mt-0':'mt-5'"></h5>
     <!-- <licenses-loop
        :licenses-data="divingLicenses.free"
        :full="true"
      ></licenses-loop>
      <licenses-loop
        :licenses-data="divingLicenses.scuba"
        :full="true"
      ></licenses-loop> -->
    </div>

  </div>
</template>
<script>
// 潛水相關訊息
import DivingInfo from '@/assets/knowDivingInfo';
// 相關課程
import LicensesLoop from '@/components/LicensesLoop.vue';
import { divingLicenses } from '@/assets/homePageData';

export default {
  data() {
    return {
      divingLicenses,
      userChioce: '',
      divingInfo: {},
    };
  },
  methods: {
    jumpInfo(info) {
      this.userChioce = info;
      document.documentElement.scrollTop = this.$refs.knowMoreInfo.offsetTop - 165;
    },
    renderSidebar(newChoice, oldChoice) {
      const changeSideBar = { free: 'knowFreeDiving', scuba: 'knowScubaDiving' };
      const oldChoiceParameter = oldChoice === '' ? Object.keys(changeSideBar).filter((item) => item !== newChoice) : oldChoice;

      // 關掉不顯示部分
      this.$refs.knowShowInfo.classList.remove('d-none');
      // 側邊條切換
      this.$refs[changeSideBar[newChoice]].innerHTML = `
        <div class="border-left-3 border-color-${newChoice} h-double"></div>
      `;
      this.$refs[changeSideBar[oldChoiceParameter]].innerHTML = `
        <div class="border-right-3 border-color-${oldChoiceParameter} "></div>
        <div class="border-right-3 border-color-${oldChoiceParameter} "></div>
      `;
    },
  },
  watch: {
    userChioce(newChoice, oldChoice) {
      this.renderSidebar(newChoice, oldChoice);
      this.divingInfo = DivingInfo[newChoice];
    },
  },
  components: { LicensesLoop },
};
</script>
<style lang="scss">
@mixin border-left($border_width) {
  border-left: $border_width #9d8551 solid;
}
@mixin border-right($border_width) {
  border-right: $border_width #9d8551 solid;
}
@mixin know-side-tap {
  height: 50%;
}
@mixin know-tap-fake-dom-style {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: transparent;
  transition: all 0.5s;
  border-radius: 10px;
}

.container {
  .know-diving-title {
    min-height: 2rem;
    font-weight: bold;
    margin: 2.5rem 0 2.5rem 0;
    border-top: 3px solid;
    border-bottom: 3px solid;
    border-color: #395273;
    padding: 0 3rem 0 3rem;
  }
  .know-diving-click-part {
    .know-diving-tap {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      display: inline-block;
      padding: 1rem;

      &::before {
        @include know-tap-fake-dom-style;
        left: -100%;
        top: -100%;
        z-index: -1;
      }
      &::after {
        @include know-tap-fake-dom-style;
        right: -100%;
        bottom: -100%;
        z-index: -1;
      }
      &:hover {
        color: white;
        &::before {
          left: 0;
          top: 0;
          background-color: #395273;
        }
        &::after {
          right: 0;
          bottom: 0;
          background-color: #395273;
        }
        h3 {
          border-radius: 5px;
          border: 3px white dashed;
          border-bottom: 0 !important;
        }
        h5 {
          border-radius: 5px;
          border: 3px white dashed;
          border-top: 0 !important;
        }
      }
    }
  }
  .know-diving-body {
    ul {
      width: 35%;
      margin: 0 auto;
    }
    li {
      list-style: circle;
      blockquote {
        color: #5e5c5c !important;
      }
    }
  }
}
.border-color-free {
  border-color: #48b7b7 !important;
}
.border-color-scuba {
  border-color: #5879b2 !important;
}

.border-right-3 {
  border: 1px #8c8c8c solid;
  @include border-right(0.8rem);
}
.border-left-3 {
  border: 1px #8c8c8c solid;
  @include border-left(0.8rem);
}

.know-more-part {
  display: grid;
  transition: all 1s;
  .part-in-center {
    grid-area: 1/2/1/11;
    li {
      list-style: none;
      blockquote {
        color: #5e5c5c !important;
      }
    }
  }
  .part-in-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: 1/1/1/2;
    & div {
      @include know-side-tap;
      &:first-child {
        margin-bottom: 3rem;
      }
    }
  }
  .part-in-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-area: 1/11/1/12;

    & div {
      @include know-side-tap;
      &:first-child {
        margin-bottom: 3rem;
      }
    }
  }
}
// 用於側邊條寬度
.h-double {
  height: 100% !important;
  margin: 0 !important;
}
</style>
