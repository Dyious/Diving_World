<template>
  <div class="row mx-3 flex-total-center align-items-start">
    <div
      class="col-12 col-lg"
      :class="full ? 'col-lg' : 'col-lg-3'"
      v-for="(item,index) in licensesData"
      :key="index"
    >
      <div class="license-item">
        <img
          :src="item.img"
          :alt="item.title"
          class="img-fluid license-img"
        >
        <div class="license-link">
          <span @click="jumpPage(keyName)">商品資訊</span>
        </div>
      </div>
      <h4 class="color-text-three text-center mt-2">{{item.title}}</h4>
      <h6 class="color-text-minor licenses-content mb-3">{{item.content}}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    licensesData: {
      type: Array,
      default: () => [],
    },
    full: {
      type: Boolean,
      default: () => false,
    },
    keyName: {
      type: String,
      default: () => 'all',
    },
  },
  data() {
    return {
      jumpName: '',
    };
  },
  methods: {
    jumpPage(name) {
      this.$router.push({
        path: '/products',
        query: {
          type: `class-${name}`,
        },
      });
    },
  },
};
</script>
<style>
.license-item {
  display: inline-block;
  position: relative;
  transition: all 0.5s;
}
.license-img {
  transition: all 0.5s;
}

.license-item:hover .license-img {
  filter: brightness(0.4);
}
.license-item:hover .license-link {
  opacity: 1;
}

.license-link {
  opacity: 0;
  position: absolute;
  top: 45%;
  right: 0;
  left: 0;
  transition: all 0.5s;
}

.license-link > span {
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  user-select: none;
  border-top: 3px #395273 solid;
  border-bottom: 3px #395273 solid;
  padding: 0 1rem 0 1rem;
  background-color: #326a69;
  color: #e8eef6;
}
</style>
