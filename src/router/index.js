import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import InputPassword from '../pages/InputPassword.vue';
import InputForm from '../pages/InputForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/:lang/InputPassword',
      name: 'InputPassword',
      component: InputPassword
    },
    {
      path: '/:lang/InputForm',
      name: 'InputForm',
      component: InputForm
    }/*,
    {name: 'order', path: '/:lang/order', component: order},*/

  ]
})
