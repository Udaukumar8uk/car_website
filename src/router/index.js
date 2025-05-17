import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import Welcome from '../pages/Welcome.vue';
import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contact from '../pages/Contact.vue';
import Mahindra from '../pages/Mahindra.vue';
import MahindraDetail from '../components/MahindraDetail.vue';
import BookingFlow from '../components/BookingFlow.vue';
// other imports remain

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/welcome', component: Welcome },
  { path: '/home', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },
  { path: '/mahindra', component: Mahindra }, 
  {
    path: '/mahindra/:id',
    name: 'MahindraDetail',
    component: MahindraDetail
  },
  {
    
  path: '/booking/:carName',
  name: 'BookingFlow',
  component: BookingFlow


  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;