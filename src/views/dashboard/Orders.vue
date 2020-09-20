<template>
  <div class="container border rounded border-dark">
    <h2>訂單列表</h2>
    <div class="row pt-3 pb-2 line-bottom-dashed">
      <div class="col">下單時間</div>
      <div class="col">購買款項</div>
      <div class="col">付款方式</div>
      <div class="col">應付金額</div>
      <div class="col">是否付款</div>
    </div>
    <div
      class="row my-2"
      v-for="(order,index) in orders"
      :key="index"
    >
      <div class="col ">{{ order.created.datetime }}</div>
      <div class="col text-right">
        <div
          v-for="(product, index) in order.products"
          :key="index"
        >
          {{ product.product.title }} 數量：{{ product.quantity }}
          {{ product.product.unit }}
        </div>
      </div>
      <div class="col">{{ order.payment }}</div>
      <div class="col">{{ order.amount }}</div>
      <div class="col">
        <label class="switch">
          <input
            type="checkbox"
            :checked="order.paid"
            @change="chagneOrderPaid (index)"
          >
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <Paginate
      @changePage="getOrders"
      :pageData=orderPaginate
    ></Paginate>
  </div>
</template>
<script>
import Paginate from '@/components/Paginate.vue';

export default {
  data() {
    return {
      orders: [],
      orderPaginate: {},
    };
  },
  components: {
    Paginate,
  },
  methods: {
    getOrders(page = 1) {
      const load = this.$loading.show();
      this.$http(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders`, { page, paged: 10 })
        .then((res) => {
          this.orders = res.data.data;
          this.orderPaginate = res.data.meta.pagination;
          load.hide();
        }).catch((err) => {
          console.log(err);
        });
    },
    chagneOrderPaid(index) {
      const order = this.orders[index];

      let url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${order.id}/`;
      url += order.paid ? 'unpaid' : 'paid';

      const load = this.$loading.show();

      this.$http.patch(url)
        .then(() => {
          load.hide();
          this.getOrders();
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
