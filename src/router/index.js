import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/about',
  name: 'About',
  component: About,
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact,
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/components/dashboard/calendar/Calendar.vue'),
},
{
  path: '/events',
  name: 'Create event',
  component: () => import(/* webpackChunkName: "events" */ '../views/About.vue'),
},
{
  path: '/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ',
  name: 'Create recipe',
  component: () => import(/* webpackChunkName: "events" */ '../views/About.vue'),
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
