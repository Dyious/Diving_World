<template>
  <div class="container border rounded border-dark">
    <h2>圖片儲存列表</h2>
    <div class="row pt-3 pb-2 line-bottom-dashed">
      <div class="col">圖片縮圖</div>
      <div class="col">操做</div>
    </div>
    <div
      class="row my-2"
      v-for="(storge, index) in storges"
      :key="index"
    >
      <div class="col ">
           <img
              :src="storge.path"
              width="100px"
              class="img-fluid"
            >
      </div>
     <div class=" d-flex align-items-center btn-size">
        <button
          type="button"
          class="btn btn-warning mr-4 btn-block"
          @click="openModal(storge)"
        >新增產品</button>
      </div>
    </div>

    <Paginate
      @changePage="getStorge"
      :pageData=storgesPaginate
    ></Paginate>

    <div
      ref="deleteModal"
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
              <span>刪除資料</span>
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
            是否刪除該筆資料 (刪除後將無法恢復)。
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
              @click="deleteStorge()"
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
import Paginate from '@/components/Paginate.vue';

export default {
  data() {
    return {
      storges: [],
      storgesPaginate: {},
      templateStorges: {},
    };
  },
  components: { Paginate },
  methods: {
    getStorge(page = 1) {
      const load = this.$loading.show();
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`, { page })
        .then((res) => {
          this.storges = res.data.data;
          this.storgesPaginate = res.data.meta.pagination;
          load.hide();
        }).catch((err) => {
          console.log(err);
        });
    },
    openModal(item) {
      this.templateStorges = { ...item };
      this.$refs.deleteModal.modal('show');
    },
    deleteStorge() {
      const load = this.$loading.show();
      this.$http.delete(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage/${this.templateStorges.id}`)
        .then(() => {
          load.hide();
          this.templateStorges = {};
          this.getStorge();
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getStorge();
  },
};
</script>
