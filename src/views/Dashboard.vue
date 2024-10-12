<template>
    <div class="flex">
        <Sidebar/>
        <div class='mt-12 w-full ml-72'>
            <div class="flex flex-row justify-between">
                <div class="text-neutral-black font-semibold text-4xl ">Dashboard</div>
                <div>Notification</div>
            </div>
            <div class="mt-12 flex justify-between w-full">
                <StatsCard/>
                <StatsCard/>
                <StatsCard/>
            </div>
            <div class="mt-12 flex items-center">
                <HomeBarGraph/>
                <div class="w-full h-96 ml-8">
                    <Calendar :min-date="new Date()" :attributes="attributes" style="height:100%; width:100%; padding-top: 20px; padding-left: 10px; padding-right: 10px" expanded/>
                </div>
            </div>
            <div class="mt-12 pb-12">
              <HomePatients/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import StatsCard from '../components/StatsCard.vue';
import HomeBarGraph from '../components/HomeBarGraph.vue'
import HomePatients from '../components/HomePatients.vue';

import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';

const date = new Date();
const attributes = ref([
  {
    // Boolean
    dot: true,
    dates: [
      new Date(2024, 10, 1),
      new Date(2024, 10, 10),
      new Date(2024, 10, 22),
    ],
  },
  {
    // String
    dot: 'red',
    dates: [
      new Date(2024, 10, 4),
      new Date(2024, 10, 10),
      new Date(2024, 10, 15),
    ],
  },
  {
    // Object
    dot: {
      style: {
        backgroundColor: 'brown',
      },
    },
    dates: [
      new Date(2024, 10, 12),
      new Date(2024, 10, 26),
      new Date(2024, 10, 15),
    ],
  },
]);

</script>
<style>
</style>