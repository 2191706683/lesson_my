import { createApp } from 'vue'
import App from './App.vue'

import { 
    Swipe,
    SwipeItem
} from 'vant'

const app = createApp(App)
app
    .use(Swipe)
    .use(SwipeItem)
    .mount('#app')
