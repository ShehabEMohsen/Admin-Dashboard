<template>
    <div class="bg-neutral-white p-8 border border-solid border-neutral-500 rounded-xl w-9/12 h-[85vh]">
      <div class="flex justify-between">
        <div class="w-1/3"></div>
        <div class="flex justify-between w-1/3">
          <div class="cursor-pointer font-semibold text-2xl text-neutral-black"> < </div>
          <div class="cursor-pointer font-semibold text-2xl text-neutral-black">{{ monthYear }}</div>
          <div class="cursor-pointer font-semibold text-2xl text-neutral-black"> > </div>
        </div>
        <div class="flex flex-row justify-between w-1/4 items-center">
          <div
          class="transition-all font-medium text-lg cursor-pointer"
          :class="selectedView === 'day' ? 'active-tab text-main-700 bg-main-100 w-20 h-12 text-center flex items-center justify-center rounded-lg' : 'inactive-tab text-main-300'"
          @click="changeView('day')"
          >
            Day
          </div>
          <div
          class="transition-all font-medium text-lg cursor-pointer"
          :class="selectedView === 'week' ? 'active-tab text-main-700 bg-main-100 w-20 h-12 text-center flex items-center justify-center rounded-lg' : 'inactive-tab text-main-300'"
          @click="changeView('week')"
          >
            Week
          </div>
          <div
          class="transition-all font-medium text-lg cursor-pointer"
          :class="selectedView === 'month' ? 'active-tab text-main-700 bg-main-100 w-20 h-12 text-center flex items-center justify-center rounded-lg' : 'inactive-tab text-main-300'"
          @click="changeView('month')"
          >
            Month
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-around text-neutral-700 font-medium mt-9 mb-4">
        <div v-for="day in days" :key="day" class="text-center w-12">
          {{ day }}
        </div>
      </div>
      <div class="grid grid-cols-7 gap-2 text-neutral-700 font-medium">
        <div 
          v-for="empty in firstDayOffset" 
          :key="'empty-' + empty"
          class="h-12"
        ></div>
        <CalendarCell 
          v-for="(data,index) in calendarData" 
          :key="index" 
          :number="data.number"
          :event="data.event"
          :eventType="data.eventType"
        />
      </div>
    </div>
  </template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import CalendarCell from './CalendarCell.vue';

const days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri"];

const selectedView = ref('month');

const changeView = (view: string) => {
  selectedView.value=view;
}

const currentDate = ref(new Date());

const monthYear = computed(() => {
  const options = { year: 'numeric', month: 'long' };
  return currentDate.value.toLocaleDateString('en-US', options);
});

const monthDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() }, 
    (_, i) => i + 1
  );
});

const calendarData = computed (()=>{
  return monthDays.value.map((day)=>({
    number:day.toString(),
    event: Math.random() > 0.7,
    eventType : ['a','b','c'][Math.floor(Math.random()*3)],
  }));
});

const firstDayOffset = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay+1;
});
</script>
<style>
.active-tab{
  transform: scale(1.1);
}
.inactive-tab{
  transform: scale(1);
}
.transition-all{
  transition: all 0.3s ease-in-out;
}
</style>