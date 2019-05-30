import Vue from 'vue';
import Router from 'vue-router';
import INDEX from './views/INDEX.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: INDEX,
    },
    {
      path: '/repositories',
      name: 'repositories',
      component() {
        return import('./views/Repositories.vue');
      },
    },
  ],
});
