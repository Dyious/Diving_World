<template>
  <div class="container border rounded border-dark">
    <h2>優惠卷列表</h2>
    <div class="row pt-3 pb-2 line-bottom-dashed">
      <div class="col">名稱</div>
      <div class="col">折扣百分比</div>
      <div class="col">到期日</div>
      <div class="col">是否啟用</div>
      <div class="col">編輯</div>
    </div>
    <div
      class="row my-2"
      v-for="(coupon,index) in coupons"
      :key="index"
    >
      <div class="col">{{ coupon.title }}</div>
      <div class="col">{{ coupon.percent }} %</div>
      <div class="col">{{ coupon.deadline.datetime }}</div>
      <div class="col">
        <label class="switch">
          <input
            type="checkbox"
            @change="changeEnbale(coupon)"
            :checked="coupon.enabled"
          >
          <span class="slider round"></span>
        </label>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-sm btn-outline-info mx-2"
          @click="openModal('edit',coupon)"
        >編輯</button>
        <button
          type="button"
          class="btn btn-sm btn-outline-danger mx-2"
          @click="openModal('delete',coupon)"
        >刪除</button>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <Paginate
        @changePage="getCoupons"
        :pageData=couponsPaginate
      ></Paginate>
      <div class=" d-flex align-items-center btn-size">
        <button
          type="button"
          class="btn btn-warning mr-4 btn-block"
          @click="openModal('new',{})"
        >新增優惠卷</button>
      </div>
    </div>
    <!-- modal modify -->
    <div
      ref="couponModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              {{ isNew ? '新增':`編輯${templateCoupons.title}` }}優惠券
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                id="title"
                v-model="templateCoupons.title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
              >
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                id="coupon_code"
                v-model="templateCoupons.code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
              >
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                id="due_date"
                v-model="couponsInfo.due_date"
                type="date"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="due_time">到期時間</label>
              <input
                id="due_time"
                v-model="couponsInfo.due_time"
                type="time"
                step="1"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                id="price"
                v-model="templateCoupons.percent"
                type="number"
                class="form-control"
                placeholder="請輸入折扣百分比"
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  id="enabled"
                  v-model="templateCoupons.enabled"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  for="enabled"
                >是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              關閉
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="activeCoupons()"
            >
              {{ isNew ? '新增優惠卷' : '更新優惠券' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="delCouponModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除優惠卷</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ templateCoupons.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>

            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCoupons()"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* global $ */
import Paginate from '@/components/Paginate.vue';

export default {
  data() {
    return {
      coupons: [],
      couponsPaginate: {},
      isNew: false,
      templateCoupons: {},
      couponsInfo: {
        due_date: '',
        due_time: '',
      },
    };
  },
  components: {
    Paginate,
  },
  methods: {
    getCoupons(page = 1) {
      const load = this.$loading.show();
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupons`, { page, paged: 15 })
        .then((res) => {
          this.coupons = res.data.data;
          this.couponsPaginate = res.data.meta.pagination;
          load.hide();
        }).catch((err) => {
          console.log(err);
        });
    },
    openModal(choice, item) {
      this.templateCoupons = { ...item };
      this.isNew = choice === 'new';

      switch (choice) {
        case 'delete': {
          $(this.$refs.delCouponModal).modal('show');
          break;
        }
        default: {
          // new & edit
          const dedlineAt = this.templateCoupons.deadline.datetime.split(' ');
          [this.couponsInfo.due_date, this.couponsInfo.due_time] = dedlineAt; // 日期
          $(this.$refs.couponModal).modal('show');
          console.log(item);
        }
      }
    },
    activeCoupons() {
      const load = this.$loading.show();
      const httpMethod = this.isNew ? 'post' : 'patch';
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon${this.isNew ? '' : `/${this.templateCoupons.id}`}`;
      this.templateCoupons.deadline_at = `${this.couponsInfo.due_date} ${this.couponsInfo.due_time}`;

      this.$http[httpMethod](url, this.templateCoupons)
        .then(() => {
          $(this.$refs.couponModal).modal('hide');
          this.getCoupons();
          this.templateCoupons = {};
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          load.hide();
        });
    },
    deleteCoupons() {
      const load = this.$loading.show();
      this.$http.delete(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.templateCoupons.id}`)
        .then(() => {
          $(this.$refs.delCouponModal).modal('hide');
          this.getCoupons();
          this.templateCoupons = {};
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          load.hide();
        });
    },
    changeEnbale(item) {
      const load = this.$loading.show();
      const itemP = item;
      itemP.enabled = !itemP.enabled;
      this.$http.patch(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/coupon/${item.id}`, item)
        .then(() => {
          $(this.$refs.delCouponModal).modal('hide');
          this.getCoupons();
          this.templateCoupons = {};
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          load.hide();
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
