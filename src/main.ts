import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import '@/assets/styles/main.scss';

createApp(App)
	.use(router)
    .use(createPinia())
    .mount('#app')
