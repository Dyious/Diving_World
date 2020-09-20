<template>
  <div
    class="more-show-part"
    @click="linkPath"
  >
    <div class="t-sharp"></div>
    <div class="O-sharp">
      <div class="mt-5 icon-sharp">
        <p v-html="iconGroup[icon]"></p>
      </div>
      <h2>{{title}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    linkWay: {
      type: String,
      default: () => '',
    },
    icon: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      iconGroup: {
        box: '<i class="fas fa-boxes icon-style"></i>',
        map: '<i class="fas fa-map-marker-alt icon-style"></i>',
        knowmore: '<i class="fab fa-github icon-style"></i>',
      },
    };
  },
  methods: {
    linkPath() {
      document.querySelector('html,body').scrollTop = 0;
      switch (this.icon) {
        case 'box': {
          this.$router.push('/products');
          break;
        }
        case 'map': {
          this.$router.push('/maps');
          break;
        }
        case 'knowmore': {
          window.open('https://github.com/Dyious');
          break;
        }
        default: {
          console.log('都是空的不合理');
        }
      }
    },
  },
};
</script>
<style lang="scss">
.t-sharp {
  display: inline-block;
  position: absolute;
  border-style: solid;
  border-width: 2rem 2rem 0 2rem;
  border-color: #2d4465 transparent transparent transparent;
  transition: border 0.5s;
}
.O-sharp {
  height: 15rem;
  width: 100%;
  border: 1px #c8c8c8 solid;
  transition: all 0.5s;
}
.icon-style {
  font-size: 5rem !important;
  color: #c8c8c8;
}

.more-show-part {
  display: flex;
  justify-content: center;

  border-bottom: 1.5rem #2d4465 solid;
  &:hover {
    cursor: pointer;
    .O-sharp {
      border-width: 5px 5px 0 5px;
      border-color: #2d4465;
    }
    .t-sharp {
      border-width: 3rem 3.5rem 0 3.5rem;
    }
    h2 {
      font-weight: bold;
    }
    .icon-style {
      color: #2d4465;
    }
  }
}
</style>
