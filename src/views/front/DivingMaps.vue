<template>
  <div class="container mt-5 d-flex">
    <div class="col-md-5 maps-info">
      <select
        class="mb-3 custom-select"
        v-model="userChoice"
      >
        <option value="">--請選擇查詢地點--</option>
        <option value="North">台灣北部</option>
        <option value="South">台灣南部</option>
        <option value="Western">台灣西部</option>
        <option value="East">台灣東部</option>
        <option value="Outland">台灣離島</option>
      </select>
      <ul>
        <li
          v-for="(mapsInfo,index) in mapsInfos"
          :key="index"
        >
          <div class="info-card">
            <h4 class="info-card-title text-dec-grad">{{mapsInfo.name}}</h4>
            <div class="info-card-body">
              <h6>難度等級:</h6>
              <h6
                v-for="index in mapsInfo.level"
                :key="index"
              >
                <i
                  class="fa fa-tint"
                  aria-hidden="true"
                ></i>
              </h6>
              <h6>最佳時間: {{mapsInfo.bestMonth}}</h6>
            </div>
            <h5>潛水點介紹 : </h5>
            <h6 class="info-card-text-part">{{mapsInfo.introduction}}</h6>
            <h5>備註 : </h5>
            <h6 class="info-card-text-part">{{mapsInfo.remark}}</h6>
            <button
              type="button"
              class="btn border-round btn-block border btn-outline-info"
              @click="changeMapsPoint(index)"
            >顯示於地圖上</button>
          </div>

        </li>
      </ul>
      <p v-show="showMapPointText">查詢潛點總數 : {{mapsInfos.length}} 個</p>
      <button @click="showTotalPoint()">顯示全部</button>
    </div>
    <!-- maps -->
    <div class="col-md-7 maps-drow order-1">
      <l-map
        ref="mapsCanvous"
        :zoom="mapsConfig.zoom"
        :center="mapsConfig.center"
        :options="mapsConfig.options"
        style="height: 35rem;"
      >
        <l-tile-layer
          :url="mapsConfig.tileLayer.url"
          :attribution="mapsConfig.tileLayer.attribution"
        />
        <l-marker
          :lat-lng="item.coordinates"
          v-for="item in mapsTotalPoint"
          :key="item.id"
          @click="getIconPoint(item)"
        >
          <!-- 標記點樣式判斷 -->
          <l-icon
            :icon-url="mapsConfig.icon.type[item.level-3 < 0 ? 0 : item.level-3 > 1 ? 2:1]"
            :shadow-url="mapsConfig.icon.shadowUrl"
            :icon-size="mapsConfig.icon.iconSize"
            :icon-anchor="mapsConfig.icon.iconAnchor"
            :popup-anchor="mapsConfig.icon.popupAnchor"
            :shadow-size="mapsConfig.icon.shadowSize"
          />
          <!-- 彈出視窗 -->
          <l-popup>
            {{ item.name }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>
<script>
import mapsPoint from '@/assets/mapsPointer';

export default {
  data() {
    return {
      mapsInfos: [],
      mapsTotalPoint: [],
      showMapPointText: true,
      userChoice: '',
      mapsConfig: {
        zoom: 7,
        center: [23.918606, 121.047759],
        tileLayer: {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

        },
        options: {
          zoomSnap: 0.5,
          scrollWheelZoom: false,
        },
        icon: {
          type: [ // green,yellow,red
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          ],
          shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        },
      },
    };
  },
  methods: {
    changeMapsPoint(index) {
      this.map.setView(this.mapsInfos[index].coordinates, 15);
    },
    getIconPoint(item) {
      this.mapsInfos = [];
      this.mapsInfos.push(item);
      this.showMapPointText = false;
      this.map.flyTo(item.coordinates, 18);
    },
    showTotalPoint() {
      this.map.closePopup();
      this.map.flyTo(this.mapsConfig.center, 7);
      this.mapsInfos = mapsPoint.pointInfo;
    },
  },
  mounted() {
    this.mapsInfos = mapsPoint.pointInfo;
    this.mapsTotalPoint = mapsPoint.pointInfo;
    this.$nextTick(() => {
      this.map = this.$refs.mapsCanvous.mapObject; // work as expected
    });
  },
  watch: {
    userChoice() {
      this.mapsInfos = this.userChoice !== '' ? mapsPoint.pointInfo.filter((item) => item.area === this.userChoice) : mapsPoint.pointInfo;
    },
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
      list-style: none;
      max-height: 25rem;
      overflow: auto;
      background-color: #faf3f0;
      li {
        margin: 0.5rem 1rem 0.5rem 1rem;
        background-color: #259384;
      }
      .info-card {
        text-align: left;
        background-color: white;
        margin: 1rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        .info-card-text-part {
          background: white;
          border: 3px solid white;
          border-radius: 5px;
          padding: 0.5rem;
        }
        .info-card-body {
          padding: 0.5rem 0.5rem 0 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 2px solid #30350d;
          border-radius: 3px;
          margin: 0.5rem;
          i {
            font-size: 1rem;
            color: #23728b;
          }
          h6 {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .text-dec-grad {
    text-align: center;
    background-image: linear-gradient(120deg, #3f87a6, #ebf8e1, #f69d3c);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
  }
}
</style>
