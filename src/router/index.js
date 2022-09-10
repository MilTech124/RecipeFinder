import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Favorite from '../views/Favorite.vue'
import {userStore} from '@/stores/user'



const requireAuth = (to, from, next) =>{
  const user = userStore()
  if(!user.loged){
    next({name:'login'}) 
  }else{
    next()
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,     
    },    
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:requireAuth
    },    
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      beforeEnter:requireAuth
    },    
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe,
      props:true,
      beforeEnter:requireAuth
    },    
  ]
})

export default router
