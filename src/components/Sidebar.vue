<template>
    <div class="bg-neutral-white border border-solid border-neutral-500 w-60 h-screen pt-8 flex flex-col fixed z-10 top-0 left-0">
        <div class="font-semibold text-4xl bg-gradient-to-r from-purple-main to-main-900 text-transparent bg-clip-text mb-4 ml-8">Admoon</div>
        <hr/>
        <div class="main-choices mt-8 ml-8 font-medium text-xl">
            <ul>
                <li
                    v-for="(choice, index) in mainChoices"
                    :key="index"
                    :class="{ 'text-main-500 font-bold': chosen === index }"
                    @click="choose(index)"
                    class="cursor-pointer"
                >
                    <img :src="choice.icon"/>
                    {{ choice.name }}
                </li>
            </ul>
        </div>
        <div class="sec-choices ml-8 justify-end align-bottom mt-auto mb-8">
            <ul>
                <li class="font-medium text-xl cursor-pointer"><img src="../assets/dark.svg"/>Dark Mode</li>
                <li class="text-red font-medium text-xl cursor-pointer"><img src="../assets/logout.svg"/>Log out</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DashboardIcon from '../assets/dashboard.svg';
import StatsIcon from '../assets/stats.svg';
import PatientsIcon from '../assets/patients.svg';
import AppointmentsIcon from '../assets/appointments.svg';

const chosen = ref<number | null>(0);
const mainChoices = ref([
  { id: 1 , name: 'Dashboard', icon: DashboardIcon, link: '/', current: true },
  { id: 2 , name: 'Statistics', icon: StatsIcon, link: '/stats', current: false },
  { id: 3 , name: 'Patients', icon: PatientsIcon, link: '/patients', current: false },
  { id: 4 , name: 'Appointments', icon: AppointmentsIcon, link: '/appointments', current: false }
]);

const router = useRouter();

const choose = (index: number) => {
    chosen.value = index;
    const selectedChoice = mainChoices.value[index];
    if (selectedChoice.link && selectedChoice.link !== '#') {
        router.push(selectedChoice.link);
    }
};
</script>

<style>
hr {
    border: 1px solid #CBCBCD;
}
.main-choices li {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin-bottom: 2rem;
    cursor: pointer;
}
.sec-choices li {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin-top: 1rem;
}
</style>
