import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueLibPlugin } from 'vue-lib'
import 'vue-lib/dist/vue-lib.css'

console.log('Vue lib is ', VueLibPlugin)
const app = createApp(App)
app.use(VueLibPlugin)
app.mount('#app')
