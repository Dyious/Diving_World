<template>
  <div class="cotainer">'
    <div class="order-finish">
      <img
        src="https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        class="img-fluid"
      >
      <div class="order-word-part">
        <p>非常感謝</p>
        <p>您的購買</p>
        <p>您已經完成訂單</p>
        <p>謝謝 !!!</p>
        <button
          class="btn btn-sm"
          type="button"
          @click="linkPage()"
        >繼續購物</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    linkPage() {
      this.$router.push({ name: 'Products' });
    },
  },
};
</script>
<style lang="scss">
.container {
  .order-finish {
    position: relative;
    width: 60%;
    height: 25rem;
    margin: 0 auto;
  }
  .order-word-part {
    font-weight: bold;
    line-height: 3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 40%;
    height: 25rem;
    background-color: rgba($color: #fff, $alpha: 0.6);
    button {
        width: 50%;
      border: 1px #326a69 solid;
      color: #326a69;
      transition: all .5s;
      &:hover {
        background-color: #326a69;
        color: white;
      }
    }
  }
}
</style>
