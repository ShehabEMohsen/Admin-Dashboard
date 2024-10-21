import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/Dashboard.vue';
import PatientsView from '../views/Patients.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientsView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;