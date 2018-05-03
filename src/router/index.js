import Vue from 'vue';
import Router from 'vue-router';

import AuthIndex from '@/components/view/Auth/Index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: "/auth"
    },
    {
      path: '/auth',
      name: 'AuthIndex',
      component: AuthIndex
	}
  ]
});