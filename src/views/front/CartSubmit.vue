<template>
  <div class="container">
    <div class="row mt-3 mb-2">
      <div class="col-lg-9">
        <div class="flex-total-center cart-table-title pr-4">
          <div class="col-1">#</div>
          <div class="col-2">圖片</div>
          <div class="col-2">商品</div>
          <div class="col-3">單品價格、數量</div>
          <div class="col-2">小計</div>
          <div class="col-2">操作</div>
        </div>
        <div class="cart-table-body">
          <div
            class="cart-table-row"
            v-for="(item,index) in carts"
            :key="index"
          >
            <div class="col-1">{{index+1}}</div>
            <div class="col-2">
              <img
                :src="item.product.imageUrl[0]"
                alt="item.product.title"
                class="img-fluid"
              ></div>
            <div class="col-2">{{ item.product.title }}</div>
            <div class="col-3 d-flex flex-column">
              <div class="border-0">{{item.product.price | commaFormat }} </div>
              <div class="border-0">
                <i
                  class="fas fa-minus-square text-danger"
                  @click="quantityUpdate(item.product.id,item.quantity-1)"
                >
                </i>
                <span class="mx-2">{{item.quantity}}</span>
                <i
                  class="fas fa-plus-square text-success"
                  @click="quantityUpdate(item.product.id,item.quantity+1)"
                >
                </i>
              </div>
            </div>
            <div class="col-2">{{item.quantity * item.product.price | commaFormat}}</div>
            <div class="col-2">
              <i
                class="far fa-times-circle text-danger"
                @click="removeOneCart(item.product.id)"
              >
              </i>
            </div>
          </div>
          <div
            class="my-3"
            v-if="carts.length===0"
          >
            <router-link
              to="/products"
              class="text-info"
            >請前往選購</router-link>
          </div>
        </div>
        <div
          class="cart-table-footer"
          v-if="carts.length>0"
        >
          <button
            type="button"
            class="btn mt-2 btn-block"
            @click="removeAllCarts()"
          >清空購物車</button>
        </div>
      </div>
      <div class="col-lg-3 mt-5 mt-lg-0">
        <div class="order-detail">
          <h3 class="mb-3 mt-2">訂單詳情</h3>
          <p>
            <span>總額 :&nbsp;</span>
            <span>${{totalCost | commaFormat }}</span>
          </p>

          <div
            ref="counponGroup"
            class="coupon-group"
          >
            <span>優惠卷 :&nbsp;</span>
            <input
              ref="couponCode"
              type="text"
              class="form-control"
              @click="counponCode=''"
              v-model="counponCode"
            />
            <div class="success-icon">
              <i class="fas fa-check"></i>
            </div>

            <button
              ref="counponSubmit"
              type="button"
              class="order-coupon"
              @click="couponCheck()"
            >GO</button>
          </div>
          <p>
            <span>折扣 :&nbsp;
              <small v-show="counpon.percent !== 0">
                打折 {{counpon.info.percent}} %
              </small>
            </span>
            <span :class="counpon.percent === 0 ?'':'text-danger'">
              -${{(totalCost * counpon.percent) | commaFormat}}
            </span>
          </p>
          <p>
            <span>總計 :&nbsp;</span>
            <span>${{(totalCost * (1 - counpon.percent))| commaFormat}}</span>
          </p>
        </div>
        <small class="text-danger">{{counponReally}}</small>
        <div class="order-note mt-3 p-3 text-left">
          <p>產品若要退費請至於領取貨物(七天鑑賞期)進行退換貨、課程請於前七天內進行內容更動。</p>
        </div>
        <button
          type="button"
          class="btn btn-block my-3 bg-main text-white"
          @click="nextPageTo()"
          :disabled="carts.length===0"
        >送出</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      promtyMessage: '',
      carts: [],
      totalCost: 0,
      counponCode: '',
      counponReally: '',
      counpon: {
        info: {},
        percent: 0,
      },
    };
  },
  methods: {
    getCarts(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const load = this.$loading.show();
      const params = {
        page,
        paged: '100',
      };
      this.totalCost = 0;
      this.$http.get(url, { params })
        .then((res) => {
          this.carts = res.data.data;
          res.data.data.forEach((item) => {
            this.totalCost += (item.product.price * item.quantity);
          });
          this.cartsPaginate = res.data.meta.pagination;
          load.hide();
        });
    },
    couponCheck() {
      this.counponReally = '';
      if (this.$refs.couponCode.value === '') {
        this.$refs.counponGroup.classList.add('shake');
        this.counponReally = '*請填寫優惠卷*';
        return;
      }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      const load = this.$loading.show({
        fullPage: false,
        container: this.$refs.counponSubmit,
        width: 25,
        height: 25,
      });
      const data = {
        code: this.counponCode,
      };
      this.$http.post(url, data)
        .then((res) => {
          this.counpon.info = res.data.data;
          this.counpon.percent = res.data.data.percent / 100;
          this.$refs.counponGroup.classList.add('success');
          this.counponReally = '*優惠卷正確唷*';
        }).catch(() => {
          this.couponCode = '';
          this.$refs.counponGroup.classList.add('shake');
          this.counponReally = '*檢查優惠卷是否正確*';
        }).finally(() => {
          load.hide();
        });
    },
    removeAllCarts() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      const load = this.$loading.show();
      this.$http.delete(url)
        .then(() => {
          this.getCarts();
          this.$bus.$emit('resetCarts');
          this.promtyMessage = '清空購物車完成';
        }).catch(() => {
          this.promtyMessage = '清空購物車失敗';
        }).finally(() => {
          load.hide();
          this.$bus.$emit('catchPrompt', {
            message: this.promtyMessage,
          });
        });
    },
    removeOneCart(id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      const load = this.$loading.show();
      this.$http.delete(url)
        .then(() => {
          this.getCarts();
          localStorage.onTheStep = 0;
          this.$bus.$emit('resetCarts');
          this.promtyMessage = '刪除此商品成功';
        }).catch(() => {
          this.promtyMessage = '刪除此商品失敗';
        }).finally(() => {
          load.hide();
          this.$bus.$emit('catchPrompt', {
            message: this.promtyMessage,
          });
        });
    },
    quantityUpdate(product, quantity) {
      if (quantity === 0) return;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const load = this.$loading.show();
      const data = {
        product,
        quantity,
      };
      this.$http.patch(url, data)
        .then(() => {
          this.getCarts();
          this.promtyMessage = '增加產品數量成功';
        }).catch(() => {
          this.promtyMessage = '刪除產品數量成功';
        }).finally(() => {
          load.hide();
          this.$bus.$emit('catchPrompt', {
            message: this.promtyMessage,
          });
        });
    },
    nextPageTo() {
      // 將購物車資訊直接加入 localStorage
      localStorage.confirmCart = JSON.stringify({
        carts: this.carts,
        totalCost: (this.totalCost * (1 - this.counpon.percent)),
        couponCode: this.counpon.info.code,
      });
      localStorage.onTheStep = 1;
      this.$emit('nextPage');
      this.$router.push({
        name: 'Insert',
      });
    },
  },
  watch: {
    counponCode() {
      this.$refs.counponGroup.classList.remove('success', 'shake');
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
<style lang="scss">
.container {
  .cart-table-title {
    padding-bottom: 0.5rem;
    border-bottom: 3px #326a69 solid;
  }
  .cart-table-body {
    padding-bottom: 0.5rem;
    border-bottom: 3px #326a69 solid;
    max-height: 25rem;
    overflow: auto;
    .cart-table-row {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px #c8c8c8 solid;
      &:last-child {
        border: 0;
      }
    }
  }
  .cart-table-footer {
    padding-bottom: 0.5rem;
    border-bottom: 3px #326a69 solid;
  }
  .order-detail {
    border: 3px #326a69 solid;
    border-radius: 15px;
    p,
    .coupon-group {
      margin: 0.5rem auto;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px #326a69 solid;
      padding-bottom: 0.5rem;
      &:last-child {
        border: 0;
      }

      input {
        border-radius: 5px;
        width: 40%;
        height: 1.5rem;
      }
      .success-icon {
        opacity: 0;
        position: absolute;
        right: 100px;
        color: #8cc653;
      }
      .order-coupon {
        position: relative;
        border-radius: 5px;
        background-color: #326a69;
        color: #fff;
        border: 0;
        padding: 0 0.5rem 0 0.5rem;
        margin: 0.5rem;
        &:focus {
          outline: none;
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          pointer-events: none;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0;
          transition: all 0.3s;
        }
        &:active:after {
          opacity: 0.3;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: 0s;
        }
      }
    }
  }
  .order-note {
    border: 3px #326a69 solid;
    border-radius: 15px;
  }
}
.shake {
  input[type="text"] {
    border: 3px red solid;
    animation: shakeUpDown 0.3s ease;
  }
}
.success {
  input[type="text"] {
    border: 1px #8cc653 solid;
    position: relative;
  }
  .success-icon {
    opacity: 1 !important;
  }
}

@keyframes shakeUpDown {
  0% {
    transform: translate(-5px, 0px);
  }
  25% {
    transform: translate(5px, 0px);
  }
  50% {
    transform: translate(-5px, 0px);
  }
  75% {
    transform: translate(5px, 0px);
  }
  100% {
    transform: translate(-5px, 0px);
  }
}
</style>
