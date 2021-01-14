import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h): VNode => h(Dev),
}).$mount('#app');
