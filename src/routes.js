import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario/index.vue'
import Chioce from './components/Choice.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/Gastos' },
        { path: '/Gastos', component: Formulario },
        { path: '/Preguntas', component: Chioce }
    ]
})