import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { installVueQuery } from './plugins/queryClient'

const app = createApp(App)

app.use(createPinia())
installVueQuery(app)

app.mount('#app')
