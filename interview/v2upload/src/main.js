import Vue from 'vue';
import App from './App.vue';
import {
  Button,
  Progress,
  Table,
  TableColumn
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue
  .use(Button)
  .use(Progress)
  .use(Table)
  .use(TableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')
