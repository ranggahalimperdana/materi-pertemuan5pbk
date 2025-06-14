import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from '../pages/AboutView.vue'
import HomeView from '../pages/HomeView.vue'

const routes = [
  { path: '/', component: AboutView },
  { path: '/about', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router