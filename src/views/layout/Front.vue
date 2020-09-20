<template>
  <div>
    <Navbar></Navbar>
    <article class="content">
      <router-view />
    </article>
    <footer>
      <div class="mb-3">
        <h2 class="logo-font mb-3">Diving</h2>
        <h5>挑戰自我/放眼世界，驗證無拘無束的自由。</h5>
      </div>
      <div class="footer-icon mb-3">
        <i class="fab fa-facebook mx-3"></i>
        <i class="fab fa-instagram mx-3"></i>
        <i class="fab fa-github mx-3"></i>
      </div>
      <p>© COPYRIGHT 2020. YINGLU CHEN.</p>
      <p>僅供個人學習使用，非商業用途</p>
    </footer>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
