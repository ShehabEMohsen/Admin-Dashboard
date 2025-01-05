<template>
    <div class="w-16 h-6" :style="{backgroundColor: getBGColor(props.visitData)}">
        
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['visitData']);

const getBGColor = (value:number): string => {
    if(value === 0) return '#EEEDFA';
    if(value <=2) return '#B6B7FA';
    if(value <=4) return '#969FFA';
    if(value <=6) return '#7687FA';
    if(value <=8) return '#5E75FA';
    return '#4E55DA';
}
</script>
<style></style>