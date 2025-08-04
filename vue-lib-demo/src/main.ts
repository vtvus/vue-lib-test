import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueLibPlugin from 'vue-lib'
import 'vue-lib/dist/vue-lib.css'

const app = createApp(App)
app.use(VueLibPlugin)
createApp(App).mount('#app')
