<template>
    <div :style="{backgroundColor:color}" class=" w-32 py-2 text-center justify-center items-center text-neutral-white font-bold rounded-md cursor-pointer">
        {{ text }}
    </div>
</template>
<script setup lang="ts">
defineProps({
    text: {type:String,required:true},
    color: {type:String,required:true},
})
</script>
<style></style>