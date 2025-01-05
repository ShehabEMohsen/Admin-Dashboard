<template>
    <div class="w-full h-full flex bg-neutral-white p-4 rounded-2xl border border-neutral-500">
        <Chart
        :size="{ width: 1400, height: 420 }"
        :data="data">
    
        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Area 
            :dataKeys="['name', 'pl']" 
            type="monotone" 
            :areaStyle="{ fill: '#763CEB', opacity: 0.4  }" />
            <Line
            :dataKeys="['name', 'pl']"
            type="monotone"
            :lineStyle="{
                stroke: '#763CEB'
            }"
            />

            <Area 
                    :dataKeys="['name', 'avg']" 
                    type="monotone" 
                    :areaStyle="{ fill: '#4E55DA', opacity: 0.5 }" 
                />
            <Line
            :dataKeys="['name', 'avg']"
            type="monotone"
            :lineStyle="{
                stroke: '#4E55DA',
                strokeWidth: 2,
                strokeDasharray: '4,4'
            }"
            />
            <Marker  :value="1000" label="Mean." color="green" strokeWidth="2" strokeDasharray="6 6" />
        </template>
    
        <template #widgets>
            <Tooltip
            borderColor="#48CAE4"
            :config="{
                        pl: { color: '#9f7aea' },
                        avg: { color: '#48CAE4' },
                        inc: { hide: true }
                    }"

            />
        </template>
    
        </Chart>
        <div class="flex flex-col items-start ml-4">
            <div class="flex items-center mb-2">
                <div class="w-4 h-4 bg-[#9f7aea] mr-2"></div>
                <span class="text-sm text-neutral-800">Data 1 </span>
            </div>
            <div class="flex items-center mb-2">
                <div class="w-4 h-4 bg-[#4E55DA] mr-2"></div>
                <span class="text-sm text-neutral-800">Data 2 </span>
            </div>
        </div>
    </div>
    
  </template>
<script setup lang="ts">
import { Chart, Grid, Line, Area } from 'vue3-charts'

const data = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
  { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
  { name: 'Apr', pl: 400, avg: 400, inc: 500 },
  { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
  { name: 'May', pl: 200, avg: 100, inc: 200 },
  { name: 'Jun', pl: 600, avg: 400, inc: 300 },
  { name: 'Jul', pl: 500, avg: 90, inc: 100 }
]
</script>
<style></style>