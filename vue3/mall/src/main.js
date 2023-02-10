import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // reset
import 'vant/lib/index.css' 
import 'lib-flexible/flexible' // 移动端适配就做好了 
import router from './router/index'

// 按需加载
import {
    Swipe, 
    SwipeItem,
    Skeleton,
    Lazyload,
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
    Form,
    Field,
    Button
} from 'vant'
/* - 启用全家桶
        router
        store
*/
// reset? 准备
// html  fontSize? rem 自适应
const app = createApp(App)

app
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(Lazyload)
    .use(ActionBar)
    .use(ActionBarIcon)
    .use(ActionBarButton)
    .use(Form)
    .use(Field)
    .use(Button)
    .use(router) // 当我们在做SPA 路由接管一切
    .mount('#app')

// vue 过滤器
app
    .config
    .globalProperties
    .$filters = {
        prefix(url) {
            if (url && url.startsWith('http')) {
              return url
            } else {
              url = `http://backend-api-01.newbee.ltd${url}`
              return url
            }
          }
    }
