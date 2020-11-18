import Vue from 'vue'

import { Table, TableColumn } from 'element-ui';
import App from './App.vue';

Vue.component('el-table', Table);
Vue.component('el-table-column', TableColumn);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
