<template>
  <div class="mb-5">
    <div class="show-part-content">
      <div class="nav-show-part">
        <div class="container justify-content-start d-flex align-items-center h-100">
          <ul class="col-lg-10 m-0 ">
            <li
              v-for="(product,key,index) in productsNameChart"
              @click="showItem = key;"
              class="product-link"
              :key="index"
            >
              <span
                class="link-name"
                :class="showItem === key ?'product-hight-line':''"
              >
                {{product}}
              </span>
              <span
                class="line-main-right border-light"
                v-show="index !== (Object.keys(productsNameChart).length-1)"
              >
              </span>
            </li>
          </ul>
          <select
            class="form-control text-minor-self col d-none d-lg-flex"
            v-model="orderBy"
          >
            <option value="high">價格由高到低</option>
            <option value="low">價格由低到高</option>
          </select>
        </div>
      </div>
      <div class="product-show-part container mt-5">
        <div class="d-flex flex-wrap row-cols-md-2 row-cols-lg-3 mt-3">
          <div
            class="card-item mb-4"
            v-for="(product,index) in  products"
            :key="index"
          >
            <div class="card mx-2">
              <img
                :src="product.imageUrl[0]"
                :alt="product.title"
              >
              <div class="card-info-tile text-left px-3">
                <h5>{{product.title}}</h5>
                <small :class="product.price !== product.origin_price ? 'slot-free':''">
                  ${{product.origin_price}}
                </small>
                <span v-show="product.price !== product.origin_price">${{product.price}}</span>
              </div>
              <div class="fa-icon-group flex-total-center">
                <i
                  class="fas fa-search col flex-total-center"
                  @click="openProduct(product)"
                >
                </i>
                <i
                  class="fas fa-cart-plus col flex-total-center"
                  @click="addOneProduct(product)"
                >
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paginate
      v-if="productsPaginate.total_pages > 1"
      :pageData="productsPaginate"
      @changePage="calcProducts"
    ></Paginate>
  </div>
</template>
<script>
import Paginate from '@/components/Paginate.vue';

export default {
  data() {
    return {
      promtyMessage: '',
      orProducts: [],
      products: [],
      productsPaginate: {},
      showItem: 'all',
      orderBy: 'high',
      prePage: 9,
      productsNameChart: {
        all: '全部商品',
        mirror: '面鏡',
        watch: '潛水錶',
        snorkel: '呼吸管',
        fins: '蛙鞋',
        'class-free': '自由潛水課程',
        'class-sucba': '水肺潛水課程',
      },
    };
  },
  components: {
    Paginate,
  },
  methods: {
    getProducts() {
      const load = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      // 抓出100筆(已確定所有產生抓出)
      const params = {
        page: 1,
        paged: '100',
        orderBy: 'price',
        sort: 'desc',
      };

      this.$http.get(url, { params })
        .then((res) => {
          // 保留原始product
          this.orProducts = res.data.data;
          // 製造自己的paginate規則
          this.productsPaginate = {
            current_page: 1,
            // 總比數
            total: res.data.meta.pagination.total,
            // 計算頁數
            total_pages: Math.ceil(res.data.meta.pagination.total / this.prePage),
          };
          // 開始計算頁碼部分
          this.calcProducts();
          load.hide();
          this.showItem = this.$route.query.type === undefined ? 'all' : this.$router.query.type;
        }).catch((err) => {
          console.log(err);
        });
    },
    calcProducts(page = 1, filterProducts = this.orProducts) {
      this.productsPaginate.current_page = page;
      // 將原始products排序
      this.sortByPrice(filterProducts);
      this.products = [];
      const reallyPage = page - 1;
      // 計算開始index
      const endProductFake = reallyPage * this.prePage + this.prePage;
      // 計算結束index
      const endProduct = endProductFake < filterProducts.length
        ? endProductFake : filterProducts.length;

      for (let i = reallyPage * this.prePage; i < endProduct; i += 1) {
        this.products.push(filterProducts[i]);
      }
    },
    sortByPrice(array = this.orProducts) {
      array.sort((a, b) => (this.orderBy === 'high' ? b.price - a.price : a.price - b.price));
    },
    openProduct(item) {
      this.$router.push({
        name: 'Product',
        params: { id: item.id },
      });
    },
    addOneProduct(item) {
      const load = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: item.id,
        quantity: 1,
      };

      this.$http.post(url, data)
        .then(() => {
          this.$bus.$emit('resetCarts');
          this.promtyMessage = '加入購物車成功';
        }).catch(() => {
          this.promtyMessage = '該產品已存在於購物車中';
        }).finally(() => {
          load.hide();
          this.$bus.$emit('catchPrompt', {
            message: this.promtyMessage,
          });
        });
    },
  },
  created() {
    this.getProducts();
  },
  watch: {
    showItem() {
      // console.log('in', this.showItem);
      // 產生過濾後的products 方便 重新計算頁碼
      const filterProducts = this.showItem === 'all' ? this.orProducts : this.orProducts.filter((item) => item.category === this.showItem);
      // 該頁需要顯示paginate 則加入群組
      // console.log(this.orProducts, filterProducts);
      this.productsPaginate = {
        current_page: 1,
        // 總比數
        total: filterProducts.length,
        // 計算頁數
        total_pages: Math.ceil(filterProducts.length / this.prePage),
      };
      this.calcProducts(1, filterProducts);
    },
    orderBy() {
      this.calcProducts(1, this.showItem.page === 'all' ? this.orProducts : this.products);
    },
  },
};
</script>
<style lang="scss">
.show-part-content {
  min-height: calc(90vh - 5rem);
}

.nav-show-part {
  height: 4rem;
  background-color: #326a69 !important;
  ul,
  li {
    display: inline;
  }
  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  select {
    border: 1px #326a69 solid;
    outline: none;
    background-color: #508887 !important;
    color: #e8eef6;
    box-shadow: inset 0 0 5px #66c0bf;
    &:focus {
      color: #e8eef6;
    }
    option {
      color: #e8eef6;
    }
  }
  .product-link {
    cursor: pointer;
    user-select: none;
    color: #e8eef6;
    font-size: 1.2rem;
    transition: all 0.5s;
    .link-name:hover {
      font-weight: bold;
      border-bottom: 1px #e8eef6 solid;
    }
  }
  .product-hight-line {
    font-size: 1.5rem !important;
    border-bottom: 1px #e8eef6 solid;
  }
}
.product-show-part {
  .card-item {
    img {
      background-size: cover;
      height: 15rem;
    }
    .card-info-tile {
      padding: 0.5rem 0 0.5rem 0;
      background-color: #e8eef6;

      h5 {
        color: #0d4342;
        margin: 0 0 0.5rem 0;
      }
      span {
        color: red;
      }
    }
    .fa-icon-group {
      position: relative;
      height: 2rem;
      i {
        height: 100%;
        cursor: pointer;
        user-select: none;
        &:first-child {
          border-right: 1px #e8eef6 dotted;
          background-color: #4d7a93;
          border-bottom-left-radius: 0.2rem;
          color: #e8eef6;
        }
        &:last-child {
          background-color: #6ebc67;
          border-bottom-right-radius: 0.2rem;
          color: #e8eef6;
        }
      }
    }
  }
}
</style>
