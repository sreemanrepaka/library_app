import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: ()=> import('../views/Books.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: ()=> import('../views/Members.vue')
  },
  {
    path: '/issues',
    name: 'issues',
    component: ()=> import('../views/Issues.vue')
  },
  {
    path: '/employees',
    name: 'issues',
    component: ()=> import('../views/Employees.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
