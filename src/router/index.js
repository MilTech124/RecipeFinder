import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },    
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe,
      props:true
    },    
  ]
})

export default router
