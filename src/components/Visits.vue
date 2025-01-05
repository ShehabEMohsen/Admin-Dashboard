<template>
    <div class="bg-neutral-white w-6/12 border border-neutral-500 rounded-2xl">
      <div class="font-semibold p-4 text-4xl mb-8 ml-7 mt-4">
        Visits by time
      </div>
      <div class="flex flex-col justify-center items-center">
        <div v-for="(time, timeIndex) in times" :key="timeIndex" class="flex flex-row gap-2 mb-2">
          <div class="mr-2 text-neutral-700">
            {{ time }}
          </div>
          <div v-for="(value, dayIndex) in visitData[time]" :key="`${timeIndex}-${dayIndex}`">
            <Visit :visitData="value" />
          </div>
        </div>
        <div class="ml-14 flex gap-9">
          <div v-for="(day, index) in week" :key="index" class="flex flex-row w-9 text-neutral-500">
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup lang="ts">
import Visit from './Visit.vue';

const week = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
const times = ['09 am', '11 am', '01 pm','03 pm', '05 pm', '07 pm', '09 pm', '11 pm']

const visitData: Record<string,number[]> = {
  '09 am': [5, 3, 0, 2, 1, 6, 8],
  '11 am': [7, 1, 4, 3, 0, 5, 2],
  '01 pm': [2, 0, 6, 4, 5, 3, 7],
  '03 pm': [8, 3, 2, 0, 1, 6, 4],
  '05 pm': [3, 5, 0, 6, 2, 4, 1],
  '07 pm': [1, 6, 3, 5, 0, 2, 4],
  '09 pm': [4, 2, 5, 1, 3, 0, 6],
  '11 pm': [0, 1, 3, 2, 5, 4, 6]
};
</script>
<style></style>