<template>
    <div class="flex">
        <Sidebar/>
        <div class='mt-12 ml-12 w-full'>
            <div class="flex flex-row justify-between">
                <div class="text-neutral-black font-semibold text-4xl ">Dashboard</div>
                <div>Notification</div>
            </div>
            <div class="mt-12 flex justify-between w-full">
                <StatsCard/>
                <StatsCard/>
                <StatsCard/>
            </div>
            <div class="mt-12">
                <HomeBarGraph/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import StatsCard from '../components/StatsCard.vue';
import HomeBarGraph from '../components/HomeBarGraph.vue'
</script>
<style></style>