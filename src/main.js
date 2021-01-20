import Vue from 'vue';
import $ from 'jquery';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import VueAxios from 'vue-axios';
// vee-validate
import {
  ValidationProvider, ValidationObserver, extend, localize, configure,
} from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
// system
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import App from './App.vue';
import router from './router';

// css include
import '@/assets/own.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file

// maps css
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

window.$ = $;

Vue.use(VueAxios, axios);

Vue.use(Loading, {
  canCancel: false,
  color: '#326A69',
  loader: 'dots',
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8,
  'no-enforce-focus': true,
});

Vue.filter('commaFormat', (item) => item.toString()
  .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&')));

// vee-validate 語系
localize('zh_TW', TW);
// vee-validate CSS
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
// vee-validate 規則
extend('required', required);
extend('email', email);
extend('min', min);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
