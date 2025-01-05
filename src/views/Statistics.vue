<template>
    <div class="w-screen">
        <Sidebar/>
        <div class="ml-72 w-4/5 mt-12">
            <div class="flex flex-row justify-between  mb-12">
                <div class="text-neutral-black font-semibold text-4xl ">Statistics</div>
                <div>Notification</div>
            </div>
            <div class="flex gap-12">
                <PieChart/>
                <Visits/>
            </div>
            <div class="mt-12">
                <AreaChart/>
            </div>
            <div class="mt-12 pb-12">
                <BarChart/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import PieChart from '../components/PieChart.vue';
import Visits from '../components/Visits.vue'
import AreaChart from '../components/AreaChart.vue';
import BarChart from '../components/BarChart.vue';
</script>
<style></style>