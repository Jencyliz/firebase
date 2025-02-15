import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroView from '@/views/RegistroView.vue'
import LoginView from '@/views/LoginView.vue'
import { getAuth } from 'firebase/auth'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registro',
      name: 'registro',
      component:RegistroView
    },
    {
    path: '/login',
    name: 'registrologin',
      component:LoginView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if(to.meta.requiresAuth && !user){
    next('/login');
  }else{
    next();
  }
})
 
export default router