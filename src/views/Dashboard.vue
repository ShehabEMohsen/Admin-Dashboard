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
                <div class="w-1/3 h-96 ml-8">
                    <Calendar :v-model="new Date()" :min-date="new Date()" :attributes="attributes" style="height:100%; width:100%; padding: 0;" class="full-calendar" expanded/>
                    
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
.full-calendar .vc-header,
.full-calendar .vc-weekday,
.full-calendar .vc-day {
    font-size: 1.1rem;
    line-height: 1.6;
}
.full-calendar .vc-calendar{
  background-color: white;
}

.full-calendar .vc-day {
    padding: 10px;
}

.full-calendar .vc-day-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.full-calendar .vc-content {
    padding: 10px;
}
.full-calendar .vc-arrow,
.full-calendar .vc-title {
  background: transparent;
  color: black;
  border: none;
}
</style>