<template>
  <div class="container mt-5">
    <div class="col-lg-4 maps-info">
      <select class="mb-3">
        <option value="">--請選擇查詢地點--</option>
        <option value="North">台灣北部</option>
        <option value="South">台灣南部</option>
        <option value="Western">台灣西部</option>
        <option value="East">台灣東部</option>
        <option value="Outland">台灣離島</option>
      </select>
      <p>提供參考潛點總數 : {{mapsInfos.length}} 個</p>
      <ul>
        <li
          class="info-card"
          v-for="(mapsInfo,index) in mapsInfos"
          :key="index"
        >
          <h4 class="info-card-title">{{mapsInfo.name}}</h4>
          <div class="info-card-body flex-total-center">
            <h6>潛點難度等級: {{mapsInfo.level}}</h6>
            <h6>最佳潛水季: {{mapsInfo.bestMonth}} 月</h6>
          </div>
          <h6 class="info-card-title">潛水點介紹 : {{mapsInfo.introduction}}</h6>
          <h6 class="info-card-title">備註 : {{mapsInfo.remark}}</h6>
          <button type="button">顯示於地圖上</button>
        </li>
      </ul>

    </div>
    <div class="col-lg-8 maps-drow"></div>
  </div>
</template>
<script>
import mapsPoint from '@/assets/mapsPointer';

export default {
  data() {
    return {
      mapsInfos: [],
    };
  },
  mounted() {
    this.mapsInfos = mapsPoint.pointInfo;
  },
};
</script>
<style lang="scss">
.container {
  .maps-info {
    padding-top: 1rem;
    border: 1px solid #8c8c8c8c;

    select {
      width: 100%;
      border-radius: 30px;
    }
    ul {
      max-height: 25rem;
      overflow: auto;

      .info-card {
        text-align: left;
        background-color: #8c8c8c;
        max-height: 20rem;
      }
    }
  }
}
</style>
