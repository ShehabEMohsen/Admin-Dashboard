<template>
    <div class="w-screen">
        <Sidebar/>
        <div class='mt-12 w-4/5 ml-72'>
            <div class="flex flex-row justify-between bg-neutral-300">
                <div class="text-neutral-black font-semibold text-4xl ">Dashboard</div>
                <div class="bg-neutral-white p-2 rounded-2xl shadow-md cursor-pointer"><img src='../assets/notification.svg'/></div>
            </div>
            <div class="overflow-hidden">
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
                <HomePatients :data="patientData"/>
              </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import StatsCard from '../components/StatsCard.vue';
import HomeBarGraph from '../components/HomeBarGraph.vue'
import HomePatients from '../components/HomePatients.vue';
import {patientData} from '../components/patientData.ts'

import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';
const attributes = ref([
  {
    dot: '#4E55DA',
    dates: [
      new Date(2025, 0, 4),
      new Date(2025, 0, 10),
      new Date(2025, 0, 15),
      new Date(2025, 0, 15),
    ],
  },
  {
    dot: {
      style: {
        backgroundColor: '#763CEB',
      },
    },
    dates: [
      new Date(2025, 0, 12),
      new Date(2025, 0, 12),
      new Date(2025, 0, 12),
      new Date(2025, 0, 26),
      new Date(2025, 0, 15),
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