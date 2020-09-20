<template>
  <div class="container paginate">
    <ul class=" paginate">
      <li
        class="rounded"
        @click="changePage(pageData.current_page - 1)"
      >&lt;</li>
      <li
        v-for="(item,index) in pageData.total_pages"
        :key="index"
        :class="{'active': item === pageData.current_page}"
        @click="changePage(item)"
      >
        {{ item }}
      </li>
      <li
        class="rounded"
        @click="changePage(pageData.current_page + 1)"
      >&gt;</li>
    </ul>
  </div>
</template>
<script>

export default {
  props: {
    pageData: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  methods: {
    changePage(item) {
      if (item === 0 || item === this.pageData.total_pages + 1) { return; }
      this.$emit('changePage', item);
    },
  },
};
</script>
<style lang="scss">
.paginate {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  ul,
  li {
    list-style: none;
  }
  li {
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    margin: 0.5rem;
    border-radius: 0.1rem;
    border: 1px #326a69 solid;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: #326a69;
      color: #c8c8c8;
    }
  }
  .rounded {
    background-color: #326a69;
    color: #c8c8c8;
  }
  .paginate-btn {
    padding: 0;
    margin: 0;
  }
  .active {
    color: #fff;
    background-color: rgb(110, 180, 180);
    box-shadow: inset 0 0 4px #c8c8c8;
  }
}
</style>
