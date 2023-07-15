import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear from '../components/CrearItem.vue'
import Editar from '../components/EditarItem.vue'
import Listar from '../components/ListarItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: Crear
  },
  {
    path: '/listar',
    name: 'listar',
    component: Listar
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: Editar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
