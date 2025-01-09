<template>
    <div class="w-screen">
        <Sidebar/>
        <div class="ml-72 w-4/5">
            <div class="flex flex-row justify-between bg-neutral-300">
                <div class="text-neutral-black font-semibold text-4xl ">Appointments</div>
                <div class="bg-neutral-white p-2 rounded-2xl shadow-md cursor-pointer"><img src='../assets/notification.svg'/></div>
            </div>
            <div class="flex flex-row justify-between mt-4">
                <TodayVisits/>
                <AppointmentCalendar />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';

import AppointmentCalendar from '../components/AppointmentCalendar.vue';
import TodayVisits from '../components/TodayVisits.vue';
</script>
<style>
</style>