<template>
  <div class="container border rounded border-dark">
    <h2>產品列表</h2>
    <div class="row pt-3 pb-2 line-bottom-dashed">
      <div class="col-1">#</div>
      <div class="col">產品名稱</div>
      <div class="col">原價</div>
      <div class="col">售價</div>
      <div class="col">是否啟用</div>
      <div class="col">操作</div>
    </div>
    <div
      class="row my-2"
      v-for="(product,index) in products"
      :key="index"
    >
      <div class="col-1">{{ index+1 }}</div>
      <div class="col">{{ product.title }}</div>
      <div class="col">{{ product.origin_price }}</div>
      <div class="col">{{ product.price }}</div>
      <div class="col">
        <label class="switch">
          <input
            type="checkbox"
            @change="changeEnabled(index)"
            :checked="product.enabled"
          >
          <span class="slider round"></span>
        </label>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-sm btn-outline-info mx-2"
          @click="openModal('edit',index)"
        >編輯</button>
        <button
          type="button"
          class="btn btn-sm btn-outline-danger mx-2"
          @click="openModal('delete',index)"
        >刪除</button>
      </div>
    </div>
    <div class="line-top-dashed"></div>
    <div class="d-flex justify-content-between">
      <Paginate
        @changePage="getProducts"
        :pageData=nowPageData
      ></Paginate>
      <div class=" d-flex align-items-center btn-size">
        <button
          type="button"
          class="btn btn-warning mr-4 btn-block"
          @click="openModal('new')"
        >新增產品</button>
      </div>
    </div>

    <!-- Modal -->
    <div
      ref="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span v-if="templateProduct.isNew">新增產品</span>
              <span v-else>編輯 {{ templateProduct.title }} 產品</span>
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
            <div class="row">
              <div class="col-sm-4">
                <div
                  v-for="i in 5"
                  :key="i + 'img'"
                  class="form-group"
                >
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input
                    :id="'img' + i"
                    v-model="templateProduct.imageUrl[i - 1]"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i
                      v-if="status.fileUploading"
                      class="fas fa-spinner fa-spin"
                    />
                  </label>
                  <input
                    id="customFile"
                    ref="file"
                    type="file"
                    class="form-control"
                    @change="uploadFile()"
                  >
                </div>
                <img
                  class="img-fluid"
                  :src="templateProduct.imageUrl[0]"
                  alt
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    v-model="templateProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    required
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="category">分類</label>
                    <select
                      v-model="templateProduct.category"
                      class="form-control"
                    >
                      <option value="mirror">面鏡</option>
                      <option value="watch">電腦錶</option>
                      <option value="fins">蛙鞋</option>
                      <option value="snorkel">呼吸軟管</option>
                      <option value="class-free">課程1</option>
                      <option value="class-scuba">課程2</option>
                    </select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="price">單位</label>
                    <select
                      v-model="templateProduct.unit"
                      class="form-control"
                    >
                      <option value="個">個</option>
                      <option value="人">人</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      v-model="templateProduct.origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      v-model="templateProduct.price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="include">產品包含</label> <br>
                  <input
                    type="checkbox"
                    v-model="templateProduct.options.cost_about"
                    value="class"
                  >
                  <label for="">課程</label>
                  <input
                    type="checkbox"
                    v-model="templateProduct.options.cost_about"
                    value="room"
                  >
                  <label for="">住宿</label>
                  <input
                    type="checkbox"
                    v-model="templateProduct.options.cost_about"
                    value="insurance"
                  >
                  <label for="">保險</label>
                  <input
                    type="checkbox"
                    v-model="templateProduct.options.cost_about"
                    value="ticket"
                  >
                  <label for="">船票</label>
                  <input
                    type="checkbox"
                    v-model="templateProduct.options.cost_about"
                    value="diving"
                  >
                  <label for="">潛水費用</label>
                  <input
                    v-model="templateProduct.options.cost_about"
                    type="checkbox"
                    value="traffic"
                  >
                  <label for="">當地交通</label>
                  <input
                    v-model="templateProduct.options.cost_about"
                    type="checkbox"
                    value="not"
                  >
                  <label for="">單純產品</label>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品說明</label>
                 <textarea
                    id="description"
                    v-model="templateProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明"
                    required
                  />

                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <vue-editor
                    id="content"
                    v-model="templateProduct.content"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="templateProduct.enabled"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
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
              class="btn btn-primary"
              @click="updateProduct()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="delProductModal"
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
              <span>刪除產品</span>
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
            <strong class="text-danger">{{ templateProduct.title }}</strong> 商品(刪除後將無法恢復)。
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
              @click="deleteProduct"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script >
/* global $ */
import Paginate from '@/components/Paginate.vue';
import { VueEditor } from 'vue2-editor';

export default {
  data() {
    return {
      products: [],
      nowPageData: {},
      templateProduct: { imageUrl: [], options: { cost_about: [] } },
      status: { fileUploading: false },
    };
  },
  components: { Paginate, VueEditor },
  methods: {
    getProducts(page = 1) {
      const load = this.$loading.show();
      const useData = { page, paged: 5 };
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`, useData)
        .then((res) => {
          this.products = res.data.data;
          this.nowPageData = res.data.meta.pagination;
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          load.hide();
        });
    },

    openModal(item, index = 0) {
      if (item === 'new') {
        this.templateProduct = { imageUrl: [], options: { cost_about: [] } };
        this.isNew = true;
        $(this.$refs.productModal).modal('show');
        return;
      }
      this.templateProduct = this.products[index];
      this.isNew = false;

      switch (item) {
        case 'delete': {
          $(this.$refs.delProductModal).modal('show');
          break;
        }
        case 'edit': {
          $(this.$refs.productModal).modal('show');
          break;
        }
        default: {
          console.log(123);
        }
      }
    },
    deleteProduct() {
      const load = this.$loading.show();
      this.$http.delete(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.templateProduct.id}`)
        .then(() => {
          this.getProducts();
          load.hide();
          $(this.$refs.delProductModal).modal('hide');
          this.templateProduct = { imageUrl: [], options: { cost_about: [] } };
        }).catch((err) => {
          console.log(err);
        });
    },
    updateProduct() {
      const load = this.$loading.show();
      const httpMethod = this.isNew ? 'post' : 'patch';
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product${this.isNew ? '' : `/${this.templateProduct.id}`}`;

      this.$http[httpMethod](url, this.templateProduct)
        .then(() => {
          $(this.$refs.productModal).modal('hide');
          this.getProducts();
          this.templateProduct = { imageUrl: [], options: { cost_about: [] } };
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          load.hide();
        });
    },
    uploadFile() {
      // 表單實體 (append File)
      const formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);

      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UID}/admin/storage`;
      this.status.fileUploading = true;

      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        if (response.status === 200) {
          this.tempProduct.imageUrl.push(response.data.data.path);
        }
      }).finally(() => {
        this.status.fileUploading = false;
      });
    },
    changeEnabled(index) {
      const load = this.$loading.show();
      this.products[index].enabled = !this.products[index].enabled;
      this.$http.patch(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.products[index].id}`,
        this.products[index])
        .then(() => {
          this.getProducts();
          load.hide();
        }).catch((err) => {
          console.log(err);
        });
    },

  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
.btn-size {
  width: 300px;
}
</style>
