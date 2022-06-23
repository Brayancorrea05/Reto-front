import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import navbar from '@/views/layouts/navbar.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.component('navbar', navbar)
import { ValidationObserver,ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/es.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)


Vue.config.productionTip = false

new Vue({
  components: {
    ValidationProvider,
    ValidationObserver
  },

  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
