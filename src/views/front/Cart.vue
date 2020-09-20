<template>
  <div class="container">
    <div class="flex-total-center mt-4">
      <h4
        ref="circle-submit"
        class="cart-cirlce flex-total-center"
      >確定內容</h4>
      <div
        ref="line-edit"
        class="cart-line"
      ></div>
      <h4
        ref="circle-edit"
        class="cart-cirlce flex-total-center"
      >填寫資料</h4>
      <div
        ref="line-finish"
        class="cart-line"
      ></div>
      <h4
        ref="circle-finish"
        class="cart-cirlce flex-total-center"
      >完成購物</h4>
    </div>
    <router-view @nextPage="nowStep" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: parseInt(localStorage.onTheStep, 10),
    };
  },
  mounted() {
    this.nowStep();

    // 接收reset
    this.$bus.$on('resetClass', () => {
      this.nowStep();
    });
  },
  methods: {
    nowStep() {
      const nowRefGroup = [['circle-submit'], ['line-edit', 'circle-edit'], ['line-finish', 'circle-finish']];
      const onStep = parseInt(localStorage.onTheStep, 10);
      nowRefGroup.forEach((item) => {
        item.forEach((className) => {
          this.$refs[className].classList.remove('cart-edit', 'cart-finish');
        });
      });

      for (let i = 0; i <= onStep; i += 1) {
        let addCssName = 'cart-finish';
        nowRefGroup[i].forEach((item) => {
          if ((i === onStep) && item.split('-')[0] === 'circle') addCssName = 'cart-edit';

          this.$refs[item].classList.add(addCssName);
        });
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  .cart-cirlce {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 1px #326a69 solid;
    color: #326a69;
  }
  .cart-line {
    width: 5rem;
    height: 1px;
    border-top: 1px #326a69 solid;
  }

  .cart-edit {
    color: #efefef;
    background-color: #326a69;
  }
  .cart-finish {
    border-width: 5px !important;
  }
}
</style>
