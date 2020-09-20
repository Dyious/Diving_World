<template>
  <div class="container">
    <ValidationObserver
      tag="form"
      v-slot="{ invalid }"
    >
      <form
        @submit.prevent="changePage('n')"
        class="row w-100"
      >
        <div class="col-lg-8 orderer-list">
          <validation-provider
            rules="required"
            class="form-group col-12"
            tag="div"
            v-slot="{ errors, classes }"
          >
            <!-- 輸入框 -->
            <label
              for="name"
              class="required"
            >姓名</label>
            <input
              id="name"
              type="text"
              name="姓名"
              v-model="orderInfo.name"
              class="form-control"
              :class="classes"
              required
            >
            <!-- 錯誤訊息 -->
            <span class="invalid-feedback">{{ errors[0]}}</span>
          </validation-provider>

          <validation-provider
            rules="required|min:8"
            class="form-group col-12"
            tag="div"
            v-slot="{ errors, classes }"
          >
            <!-- 輸入框 -->
            <label
              for="tel"
              class="required"
            >電話</label>
            <input
              id="tel"
              type="tel"
              name="電話"
              v-model="orderInfo.tel"
              class="form-control"
              :class="classes"
              required
            >
            <!-- 錯誤訊息 -->
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </validation-provider>
          <!-- email -->
          <validation-provider
            rules="required|email"
            class="form-group col-12"
            tag="div"
            v-slot="{ errors, classes }"
          >
            <!-- 輸入框 -->
            <label
              for="email"
              class="required"
            >Email</label>
            <input
              id="email"
              type="email"
              name="信箱"
              v-model="orderInfo.email"
              class="form-control"
              :class="classes"
              required
            >
            <!-- 錯誤訊息 -->
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </validation-provider>
          <!-- address -->
          <validation-provider
            rules="required"
            class="form-group col-12"
            tag="div"
            v-slot="{ errors, classes }"
          >
            <!-- 輸入框 -->
            <label
              for="address"
              class="required"
            >地址</label>
            <input
              id=" address"
              type="address"
              name="地址"
              v-model="orderInfo.address"
              class="form-control"
              :class="classes"
              required
            >
            <!-- 錯誤訊息 -->
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </validation-provider>
          <!-- pay select -->
          <validation-provider
            rules="required"
            class="form-group col-12"
            tag="div"
            v-slot="{ errors, classes }"
          >
            <!-- SELECT -->
            <label
              for="payment"
              class="required"
            >付款方式</label>
            <select
              name="付款方式"
              id="payment"
              class="form-control"
              :class="classes"
              v-model="orderInfo.payment"
              required
            >
              <option value="WebATM">WebATM</option>
              <option value="Barcode">Barcode</option>
              <option value="Credit">Credit</option>
              <option value="ApplePay">ApplePay</option>
              <option value="GooglePay">GooglePay</option>
            </select>
            <!-- 錯誤訊息 -->
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </validation-provider>
          <!-- message  -->
          <div class="col-12 pb-3">
            <label for="message">留言</label>
            <textarea
              id="message"
              style="resize:none"
              name="message"
              v-model="orderInfo.message"
              class=" form-control"
              cols="50"
              rows="5"
            >
                            </textarea>
          </div>
        </div>
        <div class="col-lg-4 mt-5 mt-lg-0 cart-list">
          <p class="cart-line-cat"></p>
          <div class="cart-body">
            <div
              class="row cart-row"
              v-for="(cart,index) in cartInfo.carts"
              :key="index"
            >
              <div class="col-4">
                <img
                  class="img-fluid"
                  :src="cart.product.imageUrl[0]"
                  :alt="cart.product.title"
                />
              </div>
              <div class="col-6">
                <div>{{cart.product.title}}</div>
                <small>
                  NT${{cart.product.price | commaFormat}}/{{cart.product.unit}}
                </small>
              </div>
              <div class="col-2">x{{cart.quantity}}</div>
            </div>
          </div>
          <p class="cart-line-cat"></p>
          <div class="cart-cost-part">
            <div class="row align-items-end">
              <h4 class="col-6">總計: </h4>
              <h5 class="col-6">NT$ {{cartInfo.totalCost | commaFormat}}</h5>
            </div>
          </div>
          <button
            @click="changePage('b')"
            class="btn btn-block"
          >返回購物車</button>
          <button
            class="btn btn-block"
            :disabled="invalid"
          >確定送出</button>
        </div>
      </form>
    </ValidationObserver>
    <ComfirmModal
      v-if="showModal"
      @close="modalActive"
      :orderData="orderInfo"
    ></ComfirmModal>
  </div>
</template>
<script>
import ComfirmModal from '@/components/OrderComfirm.vue';

export default {
  data() {
    return {
      cartInfo: {
        carts: [],
        totalCost: 0,
        couponCode: '',
      },
      orderInfo: {},
      showModal: false,
    };
  },
  methods: {
    getCarts() {
      const load = this.$loading.show();
      this.cartInfo = { ...JSON.parse(localStorage.confirmCart) };
      setTimeout(() => {
        load.hide();
      }, 1000);
    },
    changePage(item) {
      if (item === 'b') {
        localStorage.onTheStep = 0;
        this.$emit('nextPage');
        localStorage.removeItem('confirmCart');
        this.$router.push({
          name: 'Submit',
        });
      } else {
        this.showModal = true;
      }
    },
    removeAllCart() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      const load = this.$loading.show();
      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('resetCarts');
          this.$bus.$emit('catchPrompt', {
            message: '清空購物車完成',
          });
          load.hide();
        }).catch((err) => {
          this.$bus.$emit('catchPrompt', {
            message: '清空購物車失敗',
          });
          console.log(err);
        });
    },
    modalActive(item) {
      if (item === 'sumbitOrder') {
        this.showModal = false;
        const load = this.$loading.show();
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
        const data = this.orderInfo;
        this.$http.post(url, data)
          .then(() => {
            localStorage.removeItem('confirmCart');
            this.removeAllCart();
            localStorage.onTheStep = 2;
            this.$bus.$emit('resetClass');
            this.$emit('nextPage');
            this.$router.push({
              name: 'Finish',
            });
          }).finally(() => {
            load.hide();
          });
      } else {
        this.showModal = false;
      }
    },
  },
  created() {
    this.getCarts();
  },
  components: {
    ComfirmModal,
  },
};
</script>

<style lang="scss">
.container {
  .orderer-list {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding: 3rem 5rem 3rem 5rem;
    border-radius: 10px;
    border: 3px #326a69 solid;
    margin: 0 0 1rem 0;
    text-align: left;
  }
  .cart-list {
    p[class="cart-line-cat"] {
      border-bottom: 3px #326a69 solid;
    }
    .cart-body {
      max-height: 18rem;
      overflow: auto;
      small {
        color: #a5a2a2;
      }
      .cart-row {
        padding: 0.3rem;
        margin: 0 0 0.8rem 0;
        border: 1px #c8c8c8 solid;
      }
    }
    button {
      margin: 1rem 0 1rem 0;
      background-color: #326a69;
      color: white;
    }
  }
  .required::after {
    content: "*";
    color: red;
  }
}
</style>
