<template>
    <div class="today bg-neutral-white w-80 p-6 h-[50vh] rounded-xl overflow-y-auto">
        <div class="font-semibold text-2xl">Today's visits</div>
        <div class="mt-1 text-neutral-700 font-semibold text-sm mb-8">{{ today }}</div>
        <div >
            <OneVisit v-for="_ in 5" class="mb-4"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import OneVisit from './OneVisit.vue';

const date= new Date();
const today = date.toDateString();

</script>
<style>
.today::-webkit-scrollbar {
  display: none;
}
</style>