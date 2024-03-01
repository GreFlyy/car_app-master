
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue';
import Profile from '../pages/Profile.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';
import Offers from '../pages/Offers.vue';
import ForgotPassword from '../pages/ForgotPassword.vue';
import PictureAdd from '../pages/pictureAdd.vue';
import pagination from '../pages/Pagination.vue'
import lisakuulutus from '../pages/Kuulutuselisamine.vue'

const routes: Array<RouteRecordRaw> = [
 {
    path: '/',
    name: 'Home',
    component: Home
 },
 {
    path: '/profile',
    name: 'Profile',
    component: Profile
 },
 {
   path: '/signin',
   name: 'Signin',
   component: Signin
 },
 {
   path: '/signup',
   name: 'Signup',
   component: Signup
 },
 {
   path: '/offers',
   name: 'Offers',
   component: Offers
 },
 {
   path: '/forgotpassword',
   name: 'ForgotPassword',
   component: ForgotPassword
 },
 {
  path: '/form/add-picutre',
  name: 'pictureAdd',
  component: PictureAdd
}, 
{
  path: '/pagination',
  name: 'Pagination',
  component: pagination
},
{
  path: '/lisakuulutus',
  name: 'Lisakuulutus',
  component: lisakuulutus
}

 


 
  //{path: '/login', name: 'Login', component: Login},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



