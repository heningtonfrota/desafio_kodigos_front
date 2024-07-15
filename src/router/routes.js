import LoginView from '@/views/LoginView.vue';
import AdminLayoutView from '@/views/Layouts/AdminLayoutView.vue';
import AnaliseDeValoresView from "@/views/AnaliseDeValoresView.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/cotacao',
    component: AdminLayoutView,
    children: [
      {
        path: 'analise-de-valores',
        name: 'AnaliseDeValores',
        component: AnaliseDeValoresView
      }
    ]
  }
];

export default routes;