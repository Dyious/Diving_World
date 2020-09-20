<template>
  <div class="container">
    <div class="product-show flex-total-center  justify-content-start">
      <img
        :src="product.imageUrl[0]"
        :alt="product.title"
        class="img-fluid"
      >
      <div class="product-content">
        <div class="product-box pl-3">
          <h3>{{product.title}}</h3>
          <hr>
          <p
            class="pl-3"
            v-html="product.description"
          ></p>
          <small :class="product.price !== product.origin_price ? 'slot-free':''">
            ${{product.origin_price}}
          </small>
          <span v-show="product.price !== product.origin_price">${{product.price}}</span>
          <select
            ref="quantityJudge"
            v-model="quantity"
            class="form-control mb-3"
            :disabled="isOrder"
          >
            <option value="0">請選擇購物數量</option>
            <option
              v-for="(item,index) in 10"
              :value="item"
              :key="index"
            >
              購買{{`${item} ${product.unit}`}}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-block "
            @click="addCart"
            :disabled=isOrder
          >{{ isOrder ? "已存在於" : "加入" }}購物車
          </button>
          <router-link
            class="w-100 mt-2"
            :class="isOrder?'text-right':'text-left'"
            to="/products"
          ><span :class="isOrder?'a-height-line':''">{{isOrder?"繼續":'返回'}}購物</span></router-link>
        </div>
      </div>
    </div>
    <div class="product-info mb-5">
      <h5 class="product-cart-h5">
        {{ product.category.split("-")[0] === 'class' ? '課程':'產品'}}特色
      </h5>
      <br>
      <p v-html="product.content"></p>
    </div>
    <div
      class="product-des-info mb-5"
      v-if="product.category.split('-')[0]==='class'"
    >
      <div class="
      row">
        <div class="col-lg-6">
          <h5 class="product-cart-h5">費用包含項目</h5>
          <ul class="mx-5 mt-2 text-left product-about">
            <li
              v-for="(item,index) in product.options.cost_about"
              :key="index"
              class="d-flex justify-content-between align-items-center"
            >
              <span>{{ costAbout[item].name }}</span>
              <i class="fas fa-clipboard-check text-success"></i>
            </li>
          </ul>
          <ul class="mx-5 mt-2 text-left product-cost-include">
            <li
              v-for="(item,index) in product.options.cost_about"
              :key="index"
              class="d-flex justify-content-between align-items-center"
            >
              <small>{{ costAbout[item].content }}</small>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h5 class="product-cart-h5">注意事項</h5>
          <ul class="mx-5 mt-2 text-left">
            <li>因氣候與風浪狀況，教練將依安全考量調整潛點行程的更動與安排。</li>
            <li>各位參與潛水的朋友，請注意自己身體健康狀況，不要勉強下水，必須為自己負責。</li>
            <li>請攜帶泳衣、毛巾、個人盥洗用品、拖鞋、健保卡、個人隨身藥物。</li>
            <li>環保愛地球，住宿沒有提供一次性個人盥洗用具(牙膏牙刷等)；用餐建議請自備個人環保餐具。</li>
            <li>保持充足睡眠，潛水前請勿飲酒、熬夜。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      promtyMessage: '',
      product: { imageUrl: [], options: { cost_about: [] }, category: '' },
      quantity: 0,
      id: this.$route.params.id,
      isOrder: false,
      costAboutActive: [],
      costAbout: {
        class: {
          name: '課程費用',
          content: '課程費用包含 : 教學費用，國際證照申請，教材，課程潛水裝備。',
        },
        room: {
          name: '住宿',
          content: '住宿為混宿背包防。(有特殊需求請提出，以便安排)。',
        },
        insurance: {
          name: '保險',
          content: '保險時間為當天凌晨至結束當晚12點。',
        },
        ticket: {
          name: '船票',
          content: '該船票是到潛水點，潛點於離島若要代訂從本島到離島之船票，可以請我們代訂。',
        },
        diving: {
          name: '潛水費用',
          content: '課程費用包含 : 教學費用，國際證照申請，教材，課程潛水裝備。',
        },
        traffic: {
          name: '當地交通',
          content: '為兩人一台之機車，若沒有合格駕照請先告知。',
        },
      },
    };
  },
  methods: {
    getProduct() {
      const load = this.$loading.show();
      const productUrl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.id}`;
      const orderUrl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      const requestProducts = this.$http.get(productUrl);
      const requestOrders = this.$http.get(orderUrl);

      this.$http.all([requestProducts, requestOrders])
        .then(this.$http.spread((products, orders) => {
          this.product = products.data.data;
          this.isOrder = (orders.data.data.find(
            (item) => item.product.id === this.id,
          )
          ) !== undefined;
          load.hide();
        }));
    },
    addCart() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const params = {
        product: this.id,
        quantity: this.quantity,
      };
      // 判斷
      if (this.quantity === 0) {
        this.$refs.quantityJudge.classList.add('judgmentLose');
        setTimeout(() => {
          this.$refs.quantityJudge.classList.remove('judgmentLose');
        }, 1000);
      } else {
        const load = this.$loading.show();

        this.$http.post(url, params)
          .then(() => {
            this.$bus.$emit('resetCarts');
            this.getProduct();
            this.promtyMessage = '成功加入購物車';
          }).catch(() => {
            this.promtyMessage = '加入購物車失敗';
          }).finally(() => {
            load.hide();
            this.$bus.$emit('catchPrompt', {
              message: this.promtyMessage,
            });
          });
      }
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
.product-show {
  position: relative;
  margin: 3rem auto;
  width: 80%;
  height: auto;
  background-color: #06083e;
  img {
    margin: 5%;
    width: auto;
    height: 20rem;
  }
  .product-content {
    background-color: #fff;
    position: absolute;
    bottom: 2.5%;
    right: 5%;
    width: 100%;
    height: 95%;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 50% 100%);
    text-align: left;
    color: black;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 5%;
    .product-box {
      width: 40%;
      height: 100%;
      p {
        max-height: 6rem;
        overflow: auto;
      }
      h3 {
        color: #2d4465;
        font-weight: bold;
      }
      span {
        color: red;
        font-weight: bold;
      }
      button {
        background-color: #326a69;
        color: #fff;
      }
      a {
        display: block;
        color: #326a69;
        span {
          color: #326a69;
          font-weight: initial;
        }
      }
      .a-height-line {
        background-color: #326a69;
        color: white;
        font-weight: initial;
        padding: 0.1rem 1rem 0.1rem 1rem;
        border-radius: 5px;
      }
    }
  }
}
.product-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  p {
    font-size: 1.2rem;
  }
}
.product-des-info {
  display: inline-flex;
  margin: 0 3rem 0 3rem;
  .product-about {
    li {
      padding: 0 1rem 0 1rem;
      list-style-type: none;
      border-bottom: 1px #326a69 solid;
    }
  }
  .product-cost-include {
    li {
      display: list-item !important;
      list-style-type: circle;
    }
  }
}

.product-cart-h5 {
  margin: auto;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  border: 1px #326a69 solid;
  border-left-width: 5px;
  border-right-width: 5px;
  border-radius: 3px;
  font-weight: bold;
}

.judgmentLose {
  border: 1px red solid;
  color: red;
  animation: shake 1s;
}

@keyframes shake {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  50%,
  100% {
    transform: rotate(0deg);
  }
}
</style>
