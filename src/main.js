import Vue from 'vue'

import {Table, TableColumn, InputNumber, Popover, Button} from 'element-ui'
import App from './App.vue';

Vue.component('el-table', Table);
Vue.component('el-table-column', TableColumn);
Vue.component('el-input-number', InputNumber);
Vue.component('el-popover', Popover);
Vue.component('el-button', Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
