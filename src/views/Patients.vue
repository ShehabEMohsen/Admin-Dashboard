<template>
    <div class="w-screen">
        <Sidebar/>
        <div class="ml-72 w-4/5 mt-12">
            <div class="flex flex-row justify-between ">
                <div class="text-neutral-black font-semibold text-4xl ">Patients</div>
                <div class="bg-neutral-white p-2 rounded-2xl shadow-md cursor-pointer"><img src='../assets/notification.svg'/></div>
            </div>
            <div class="mt-8 mb-4 flex justify-between w-1/6 ml-auto gap-4">
                <Button text="Add" color="#7687FA" />
                <Button text="Remove" color="#CD0404"/>
            </div>
            <div class="">
                <AllPatients :data="allPatients"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import AllPatients from '../components/AllPatients.vue';
import Button from '../components/Button.vue';
import { allPatients } from './allPatients';
</script>
<style></style>