<template>
  <nav class="navbor-height bg-place">
    <ul class="nav justify-content-around">
      <li>
        <router-link to="/dashboard/products">產品列表</router-link>
      </li>
      <li>
        <router-link to="/dashboard/coupons">優惠券列表</router-link>
      </li>
      <li>
        <router-link to="/dashboard/orders">訂單列表</router-link>
      </li>
      <li>
        <router-link to="/dashboard/imageCatch">圖片儲存列表</router-link>
      </li>
      <li>
        <a
          href="#"
          @click.prevent='signOut()'
        >登出</a>
      </li>
    </ul>
  </nav>
</template>
<script>

export default {
  name: 'Sidebar',
  methods: {
    signOut() {
      if (this.$cookie.get('token') !== undefined) {
        this.$cookie.delete('token');
        this.$router.push('/login');
      }
    },
  },
};
</script>
