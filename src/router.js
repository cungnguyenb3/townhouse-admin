import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/users',
      name: 'users',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/host-category',
      name: 'host-category',
      // lazy-loaded
      component: () => import('./views/HostCategory.vue')
    },
    {
      path: '/host-room-type',
      name: 'host-room-type',
      // lazy-loaded
      component: () => import('./views/HostRoomType.vue')
    },
    {
      path: '/bookings',
      name: 'bookings',
      // lazy-loaded
      component: () => import('./views/Booking.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/UserDetail.vue')
    },
    {
      path: '/user/:id',
      name: 'userUpdate',
      // lazy-loaded
      component: () => import('./views/UserDetail.vue')
    },
    {
      path: '/hosts',
      name: 'hosts',
      // lazy-loaded
      component: () => import('./views/M002Host/M002BoardHost.vue')
    },

    {
      path: '/host/:id',
      name: 'host',
      // lazy-loaded
      component: () => import('./views/M002Host/M002HostDetail.vue')
    },

  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
