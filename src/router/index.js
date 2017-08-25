import Vue from 'vue';
import Router from 'vue-router';
import InputPassword from '../pages/InputPassword.vue';
import InputForm from '../pages/InputForm.vue';
import InputSMS from '../pages/InputSMS.vue';
import Thanks from '../pages/Thanks.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: InputPassword
    },
    {
      path: '/:lang/InputPassword',
      name: 'InputPassword',
      component: InputPassword
    },
    {
      path: '/:lang/InputForm/:numADM',
      name: 'InputForm',
      component: InputForm
    },
    {
      path: '/:lang/InputSMS/:numADM',
      name: 'InputSMS',
      component: InputSMS
    },
    {
      path: '/:lang/Thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
})
