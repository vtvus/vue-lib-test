import { createApp } from 'vue'
import App from './App.vue'
import ConstantsPlugin from '@/plugins/constants'

const app = createApp(App)

app.use(ConstantsPlugin)

app.mount('#app')
