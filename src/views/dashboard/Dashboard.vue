<template>
  <div>
    <Sidebar></Sidebar>
    <h2 class="p-3">後臺管理</h2>
    <router-view
      v-if="checkSuccess"
      :token="token"
    />
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    // get token in cookie =
    //  document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const load = this.$loading.show();
    this.token = this.$cookie.get('token');
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    this.$http.post(`${process.env.VUE_APP_APIPATH}/auth/check`,
      { api_token: this.token })
      .then((response) => {
        if (!response.data.success) {
          this.$router.push({
            path: '/login',
          });
        }
        this.checkSuccess = true;
      }).finally(() => {
        load.hide();
      });
  },

  components: {
    Sidebar,
  },
};
</script>
<style>
.nav {
  text-align: center;
}
.nav a {
  width: auto;
  line-height: 45px;
  color: rgba(0, 0, 0, 0.5);
}
.nav a:hover {
  color: rgba(22, 80, 15, 0.9);
  text-decoration: none;
}
</style>
