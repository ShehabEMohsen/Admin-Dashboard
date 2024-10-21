<template>
    <div class="flex w-screen h-screen">
        <Sidebar/>
        <div class="ml-72 w-full mt-12">
            <div class="flex flex-row justify-between ">
                <div class="text-neutral-black font-semibold text-4xl ">Patients</div>
                <div>Notification</div>
            </div>
            <div class="mt-8 mb-4 flex justify-between w-1/6 ml-auto">
                <Button text="Add" color="#7687FA"/>
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