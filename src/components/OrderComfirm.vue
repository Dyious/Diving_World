<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>確認資料</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <ul>
                <li>姓名 : {{orderInfo.name}}</li>
                <li>電話 : {{orderInfo.tel}}</li>
                <li>信箱 : {{orderInfo.email}}</li>
                <li>地址 : {{orderInfo.address}}</li>
                <li>付款方式 : {{orderInfo.payment}}</li>
                <li v-if="Object.keys(orderInfo).find((item)=>item === 'message')">
                  備註 : {{orderInfo.message}}
                </li>
              </ul>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="modal-default-button btn btn-block  btn-sm btn-outline"
                @click="subCheck('reset')"
              >
                重新填寫
              </button>
              <button
                class="modal-default-button btn btn-block  btn-sm"
                @click="subCheck('sumbitOrder')"
              >
                送出購物訂單
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      orderInfo: {},
    };
  },
  props: {
    orderData: {
      type: Object,
    },
  },
  methods: {
    subCheck(item) {
      this.orderInfo = {};
      this.$emit('close', item);
    },
  },
  mounted() {
    this.orderInfo = this.orderData;
  },

};
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.4);
  .modal-wrapper {
    background-color: white;
    border-radius: 15px;
    margin: 15% auto;
    width: 35%;
    min-height: 200px;
    top: 0;
    left: 0;
  }
  .modal-body {
    ul,
    li {
      list-style: none;
      text-align: left;
    }
  }
  .modal-footer {
    .btn-outline {
      border: 1px #326a69 solid !important;
      color: #326a69 !important;
      background-color: white !important;
      transition: all 0.5s;
      &:hover {
        background-color: #326a69 !important;
        color: white !important;
      }
    }
    button {
      background-color: #326a69;
      color: white;
    }
  }
}
</style>
