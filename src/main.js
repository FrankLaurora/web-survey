import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Survey from './pages/Survey';
import Results from './pages/Results';

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'survey',
          component: Survey
      },
      {
          path: '/results',
          name: 'results',
          component: Results,
      },
  ],
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
