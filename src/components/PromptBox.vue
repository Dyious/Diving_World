<template>
  <div class="prompt-list">
    <div
      class="prompt-box flex-total-center justify-content-between"
      v-for="(promptInfo,index) in promptList"
      :ref="promptInfo.refName"
      :key="index"
    >
      <div class="prompt-decorative-strip"></div>
      <div class="prompt-body">
        <i class="fas fa-exclamation-circle"></i>
        <span>{{promptInfo.message}}</span>
      </div>

      <div class="prompt-decorative-strip"></div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    promptList: {
      type: Array,
    },
  },
  updated() {
    if (this.promptList.length > 0) {
      setTimeout(() => {
        this.$emit('popRemove');
      }, 5000);
    }
  },
};
</script>
<style lang="scss">
.prompt-list {
  z-index: 1000;
  position: fixed;
  right: 2%;
  bottom: 11%;

  .prompt-box {
    margin-top: 1rem;
    width: 20rem;
    height: 7rem;
    border: 1px #c8c8c8 solid;
    box-shadow: 5px 5px 15px #888888;
    border-radius: 5px;
    background-color: white;
    padding: 0 0.5rem 0 0.5rem;
    animation: fade 5.5s ease-in;

    .prompt-decorative-strip {
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      border-left: 2px #326a96 solid;
      border-right: 2px #32a696 solid;
    }
    .prompt-body {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i {
        font-size: 3rem !important ;
      }
      span {
        font-size: 1rem !important;
      }
    }
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
