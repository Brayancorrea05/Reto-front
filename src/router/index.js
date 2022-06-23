import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Contrato from '@/views/Contrato/index.vue'
import Create_empleado from '@/views/Empleados/create.vue'
import Show_empleado from '@/views/Empleados/show.vue'
import Show_contrato  from '@/views/Contrato/show.vue'
import Area from '@/views/Area/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Contratos',
    name: 'Contratos',
    component: Contrato
  }
  ,
  {
    path:'/Create_empleado',
    name: 'Create_empleado',
    component: Create_empleado
  }
  ,
  {
    path:'/Show_empleado',
    name: 'Show_empleado',
    component: Show_empleado
  },
  {
    path:'/Show_contrato',
    name: 'Show_contrato',
    component: Show_contrato
  },
  {
    path:'/Area',
    name: 'Area',
    component: Area
  }
  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
