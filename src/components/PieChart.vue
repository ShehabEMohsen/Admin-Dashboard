<template>
    <div class="flex justify-evenly w-1/2 p-4 bg-neutral-white rounded-2xl border border-neutral-500">
        <Chart
        direction="circular"
        :data="data"
        :config="{controlHover: false}">
        <template #layers>
          <Pie
            :dataKeys="['name', 'pl']"
            :pie-style="{ innerRadius: 0, padAngle: 0, colors:['#4E55DA','#2E3393','#B6B7FA','#7687FA'] }" />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              name: { },
              avg: { hide: false},
              pl: { label: 'value' },
              inc: { hide: true }
            }"
            hideLine
          />
        </template>

        </Chart>
        <div class="flex flex-col justify-center gap-8">
          <div v-for="item in data" class="flex justify-center items">
            <div class="w-7 h-7 justify-center items-center" :style="{backgroundColor: item.color}"></div>
            <div class="ml-4 font-semibold text-lg">{{ item.name }}</div>
          </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {Chart, Responsive, Pie, Tooltip} from 'vue3-charts'

const data = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300, color: '#4E55DA'},
  { name: 'Feb', pl: 2000, avg: 900, inc: 400, color: '#2E3393' },
  { name: 'Mar', pl: 3100, avg: 1300, inc: 700, color: '#B6B7FA' },
  { name: 'Apr', pl: 400, avg: 400, inc: 500, color: '#7687FA' },
]
</script>
<style></style>