import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/Dashboard.vue';
import PatientsView from '../views/Patients.vue';
import Statistics from '../views/Statistics.vue';

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
    },
    {
        path: '/stats',
        name: 'Statistics',
        component: Statistics,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;