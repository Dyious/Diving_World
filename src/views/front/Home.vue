<template>
  <article class="">
    <section class="loadingPage">
      <img
        class="loadingImg"
        src="https://images.unsplash.com/photo-1502209524164-acea936639a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
      <div class="loadingText">
        <span>跟我一起進入海的擁抱吧</span><br>
        <span
          class="loadingLink"
          @click="linkPruduct()"
        >商品資訊 >> </span>
      </div>
    </section>

    <split-line font-title="課程"></split-line>
    <section class="flex-total-center m-5 flex-column">
      <h1 class="color-text-primary m-0">自由潛水</h1>
      <h6 class="color-text-minor">F R E E D I V I N G</h6>
      <licenses-loop :licenses-data="divingLicenses.free" keyName='free'></licenses-loop>
      <h1 class="color-text-primary mt-5 m-0">水肺潛水</h1>
      <h6 class="color-text-minor">S C U B A D I V I N G</h6>
      <licenses-loop :licenses-data="divingLicenses.scuba" keyName='sucba'></licenses-loop>
    </section>

    <split-line font-title="教練群"></split-line>

    <section class="flex-total-center m-5">
      <teacher-loop :teacher-group="teacherGroup"></teacher-loop>
    </section>

    <split-line font-title="更多"></split-line>

    <section class="flex-total-center m-5 row">
      <div class="col d-none d-sm-block  my-5"></div>
      <div class="col-12 col-lg-2 my-5">
        <more-item
          title="裝備"
          link-way="products"
          icon='box'
        ></more-item>
      </div>
      <div class="col-12 col-lg-2  my-5">
        <more-item
          title="潛點"
          link-way="maps"
          icon='map'
        ></more-item>
      </div>
      <div class="col-12 col-lg-2  my-5">
        <more-item
          title="關於我"
          link-way="github"
          icon='knowmore'
        ></more-item>
      </div>
      <div class="col d-none d-sm-block  my-5"></div>
    </section>
  </article>
</template>
<script>
import LicensesLoop from '@/components/LicensesLoop.vue';
import TeacherLoop from '@/components/TeacherLoop.vue';
import SplitLine from '@/components/SplitLine.vue';
import MoreItem from '@/components/MoreItem.vue';

import { divingLicenses, teacherGroup } from '@/assets/homePageData';

export default {
  data() {
    return {
      divingLicenses,
      teacherGroup,
    };
  },
  components: {
    LicensesLoop, TeacherLoop, SplitLine, MoreItem,
  },
  methods: {
    linkPruduct() {
      this.$router.push({
        path: '/products',
        query: {
          type: 'all',
        },
      }).catch((err) => err);
    },
  },
  created() {
    const load = this.$loading.show();
    setTimeout(() => {
      load.hide();
    }, 2000);
  },
};
</script>
<style lang="sass">
.loadingPage
  position: relative

.loadingText
  color: #ffffff
  text-align: right
  position: absolute
  bottom: 5%
  right: 10%
  user-select: none

  span
    font-size: 1.5rem

.loadingLink
  cursor: pointer
  padding: 0.2rem 0.3rem 0.2rem 0.3rem
  font-size: 1rem !important
  transition: all 0.5s

  &:hover
    background-color: #e8eef6
    color: #326a69
</style>
