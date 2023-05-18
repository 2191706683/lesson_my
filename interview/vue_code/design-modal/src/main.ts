import { createApp } from 'vue'
import App from './App.vue'
import Modal, { IConfig } from './plugins/modal';
import i18n from './locale';

const app = createApp(App)
app
    .use(
        Modal as any,
        {
            style: {
                opacity: 0.5
            },
            props: {
                close: false,
                maskClose: false
            }
        } as IConfig
    )
    .use(i18n)
    .mount('#app')
