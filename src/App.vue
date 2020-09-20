<template>
  <div id="app">
    <PromptBox
      :promptList="promptList"
      @popRemove="removeFirst()"
    ></PromptBox>
    <router-view />
  </div>
</template>
<script>
import PromptBox from '@/components/PromptBox.vue';

export default {
  data() {
    return {
      promptList: [],
    };
  },
  methods: {
    removeFirst() {
      this.promptList.pop();
    },
  },
  mounted() {
    this.$bus.$on('catchPrompt', (item) => {
      this.promptList.push(item);
    });
  },
  components: { PromptBox },
};
</script>
<style lang="scss">
@import "bootstrap";
@import "~vue-loading-overlay/dist/vue-loading.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
