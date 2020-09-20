<template>
  <ul class="my-5 line-part">
    <li
      v-for="(people,index) in teacher"
      :key="index"
      class="img-group"
    >
      <img
        ref="imgItem"
        :src="people.img"
        :alt="people.name"
        class="img-item"
      >
      <div class="teacher-name">
        <span>{{people.name}}</span>
      </div>
    </li>
  </ul>
</template>
<script>
/* global $ */
export default {
  data() {
    return {
      teacher: [],
    };
  },
  props: {
    TeacherGroup: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.$nextTick(() => {
      $('.img-item').hover(
        function () {
          $('.img-item').not(this).addClass('img-filter');
        },
        function () {
          $('.img-item').not(this).removeClass('img-filter');
        },
      );
    });
  },
  mounted() {
    this.teacher = this.TeacherGroup;
  },
};
</script>
<style lang="sass">
.line-part
  display: flex
  width: 72%
  height: auto

  ul,li
    display: inline
  ul
    position: relative
    width: 100%
  li
    position: relative
    width: 20%
    height: 20rem
    background-color: #c8c8c8
    overflow: hidden
    transition: all 1s

    &:hover
      width: 30%
      .teacher-name > span
        opacity: 1

.img-item
  width: 100%
  height: 100%
  object-fit: cover
  transition: all 0.1s

.img-filter
  filter: brightness(0.3)

.img-group
  .teacher-name
    position: absolute
    left: 0
    bottom: 10%
    right: 0
    & > span
      font-weight: bolder
      color: #c8c8c8
      opacity: 0
      transition: all 0.5s
</style>
