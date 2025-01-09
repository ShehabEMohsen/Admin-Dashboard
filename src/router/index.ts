import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/Dashboard.vue';
import PatientsView from '../views/Patients.vue';
import Statistics from '../views/Statistics.vue';
import Appointments from '../views/Appointments.vue';

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
    },
    {
        path: '/appointments',
        name: 'Appointments',
        component: Appointments,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;