<template>
  <section class="flex-total-center m-5">
    <div class="comment-box">
    </div>
    <div class="comment-line">
    </div>
    <div class="comment-title">
      <span class="text-separate-self color-text-primary">{{fontTitle}}</span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    fontTitle: {
      type: String,
      default: () => '',
    },
  },
};
</script>
<style>
.comment-box {
  width: 6rem;
  height: 6rem;
  transform: rotate(45deg);
  border: 3px #48b7b7 solid;
  box-shadow: 12px 12px 7px #e8eef6;
  z-index: 2;
  background-color: #ffffff;
}

.comment-line {
  position: absolute;
  height: 1px;
  width: 90%;
  border-top: 3px #48b7b7 solid;
  z-index: 1;
}

.comment-title {
  position: absolute;
  z-index: 3;
}
.comment-title > span {
  writing-mode: vertical-lr;
}
</style>
