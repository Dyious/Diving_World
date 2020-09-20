<template>
  <div class="container flex-total-center login-part flex-column">
    <h5 class="login-h5">登入後台</h5>
    <form class="card  my-5">
      <div class="card-body text-center flex-total-center flex-column p-5">
        <input
          type="text"
          id="email"
          class="my-2"
          placeholder="@"
          v-model="user.email"
        >
        <input
          type="password"
          id="password"
          class="my-2"
          placeholder="password"
          v-model="user.password"
        >
        <div
          ref="pleaseInsert"
          class="text-danger text-small d-none"
        > 請輸入資料</div>
        <button
          type="button"
          class="btn btn-block btn-sm bg-white mt-4"
          @click="signin()"
        >登入</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const userInfo = this.user;

      if (userInfo.name === '' || userInfo.password === '') {
        this.$refs.pleaseInsert.classList.remove('d-none');
        return;
      }

      const load = this.$loading.show();

      this.$http.post(`${process.env.VUE_APP_APIPATH}/auth/login`, userInfo)
        .then((response) => {
          console.log(response.data);
          const { token } = response.data;
          const { expired } = response.data;

          this.$cookie.set('token', token, new Date(expired * 1000));
          load.hide();
          this.$router.push('/dashboard/products');
        }).catch((err) => {
          alert(err);
        }).finally(() => {
          load.hide();
        });
    },
  },
  watch: {
    user: {
      handler() {
        this.$refs.pleaseInsert.classList.add('d-none');
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.container.login-part {
  margin: 5% auto;
  padding: 1rem;
  width: 30%;
  border: 3px #326a69 solid;
  border-radius: 30px;

  .text-small {
    font-size: 0.5rem;
  }
  button {
    border: 1px #326a69 solid;
    color: #326a69;
    transform: all 0.5s;
    &:hover {
      background-color: #326a69 !important;
      color: white;
    }
  }
  .login-h5 {
    width: auto;
    margin: auto;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    border: 1px #326a69 solid;
    border-left-width: 5px;
    border-right-width: 5px;
    border-radius: 3px;
    font-weight: bold;
  }
}
</style>
