<template>
    <div class="border border-neutral-700 w-38 h-28 mb-2 rounded-lg justify-between items-center flex flex-col">
        <div class="ml-auto mr-2 w-4">
            {{ number }}
        </div>
        <div v-if="event" class="w-3/4 h-4 bg-main-900 mb-4" :style="{backgroundColor : eventType ==='a'?'#4E55DA':eventType==='b'?'#7687FA':'#B6B7FA'}"></div>
    </div>
</template>
<script setup lang="ts">
// const props = defineProps(['number','event','eventType']);

defineProps<{
    number: string,
    event: boolean,
    eventType: string,
}>()
</script>
<style></style>