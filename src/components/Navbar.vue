<template>
  <div>
    <header
      ref="headerNavbar"
      class="color-text-main px-5"
    >
      <ul class="nav-left-sider">
        <li
          class="nav-text"
          @click="linkPart('products')"
        >產品</li>
        <li class="line-main-right"></li>
        <li
          class="nav-text"
          @click="linkPart('knowMore')"
        >了解玩水</li>
      </ul>
      <h1
        class="navbar-title logo-font"
        @click="linkPart('home')"
      >Diving</h1>
      <ul class="nav-right-sider">
        <li
          ref="cartbox"
          class="nav-text position-relative"
          @click="linkPart('cart')"
        >
          <i class="fas fa-shopping-cart"></i>
          <span v-if="this.orders.length > 0"></span>
        </li>
        <li class="line-main-right"></li>
        <li
          class="nav-text"
          @click="linkPart('login')"
        ><i class="fas fa-user-friends"></i></li>
      </ul>
    </header>
    <div
      ref="topLink"
      class="line-main-top"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.getOrders();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll);
    });

    // localStage create
    localStorage.onTheStep = 0;

    this.$bus.$on('resetCarts', () => {
      this.getOrders();
    });
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        || document.body.scrollTop;

      if (scrollTop <= 100) {
        this.$refs.headerNavbar.classList.remove('hold-place');
        this.$refs.topLink.classList.remove('hide');
      } else {
        this.$refs.headerNavbar.classList.add('hold-place');
        this.$refs.topLink.classList.add('hide');
      }
    },
    linkPart(linkWay) {
      document.querySelector('html,body').scrollTop = 0;
      switch (linkWay) {
        case 'home': {
          this.$router.push('/').catch((err) => err);
          break;
        }
        case 'products': {
          this.$router.push('/products').catch((err) => err);
          break;
        }
        case 'knowMore': {
          this.$router.push('/knowMore').catch((err) => err);
          break;
        }
        case 'cart': {
          // 重設carts
          localStorage.onTheStep = 0;
          this.$router.push('/cart/submit').catch((err) => err);
          break;
        }
        case 'login': {
          this.$router.push('/login').catch((err) => err);
          break;
        }
        default: {
          break;
        }
      }
    },
    getOrders() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(url)
        .then((res) => {
          this.orders = res.data.data;
        }).catch((err) => {
          console.log(err);
        });
    },
  },

};
</script>
<style lang="sass">
header
  display: flex
  transition: all 0.5s
  justify-content: space-evenly
  z-index: 100
  line-height: 100px
  height: 6rem
  ul,li
    display: inline

  li
    cursor: pointer
    user-select: none
    padding-bottom: 0.3rem
    &:hover
      font-weight: bold
      border-bottom: 1px #326a69 solid !important

.navbar-title
  text-align:center
  line-height: 100px
  transition: all 0.5s
  cursor: pointer
  user-select: none
  margin-left: -4rem
  font-size: 2.5rem !important

.hold-place
  position: fixed
  height: 3rem
  width: 100%
  background-color: #e8eef6
  line-height: 50px

  .navbar-title
    font-size: 1.5rem !important
    line-height: 50px
  li
    font-size: 1rem !important

.nav-right-sider
  .position-relative
    span
      background-color: red
      height: .5rem
      width: .5rem
      border-radius: 50%
      position: absolute
      bottom: 7px
      left: 15px
</style>
