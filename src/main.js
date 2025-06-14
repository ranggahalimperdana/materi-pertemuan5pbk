import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css' 
import 'quasar/src/css/index.sass' 
import router from './router/router'
import App from './App.vue'

const myApp = createApp(App)
myApp.use(router)

myApp.use(Quasar, {
  plugins: {} // 
})

myApp.mount('#app') // 
