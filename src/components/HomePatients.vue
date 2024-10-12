<template>
    <div class="w-full bg-neutral-white rounded-2xl h-96 p-8 border border-solid border-neutral-500">
        <div class="flex flex-row items-center justify-between">
            <div class="shadow-md shadow-neutral-700 w-12 h-12 p-2 flex justify-center rounded-lg">
                <img src="../assets/patients.svg"/>
            </div>
            <div class="justify-around flex w-1/3">
                <div>
                    <input class="border border-solid border-neutral-700 w-72 h-8 rounded-lg p-2" placeholder="Search.."/>
                </div>
                <div class="flex items-center font-normal text-md justify-between w-24 border border-solid border-neutral-700 pr-4 rounded-lg">
                    <img src="../assets/filter.svg" class="w-6 h-6 ml-2"/>Filter
                </div>
            </div>
        </div>
        <div class="mt-8">
            <table class="w-full h-full">
                <tr class="text-neutral-700 text-start w-full  border-solid border-b-2 border-neutral-500">
                    <td>No</td>
                    <td>ID</td>
                    <td>Patient Name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Last Visit</td>
                    <td>Next Visit</td>
                    <td>Type</td>
                    <td>IDK</td>
                    <td> </td>
                </tr>
                
                <tr v-for="(patient, index) in patientData" :key="index" class="h-12">
                    <td>{{ index+1 }}</td>
                    <td>{{ patient.ID }}</td>
                    <td>{{ patient.name }}</td>
                    <td>{{ patient.age }}</td>
                    <td>{{ patient.email }}</td>
                    <td>{{ patient.lastVisit }}</td>
                    <td>{{ patient.nextVisit }}</td>
                    <td>{{ patient.Type }}</td>
                    <td>{{ patient.IDK }}</td>
                    <td><img src="../assets/more.svg"/></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const patientData = ref([
  { ID:'urjxqku1p',name: 'John Doe 1',age:'21', email:'email@email.com', lastVisit: '25 Oct 2024',nextVisit:'TBD',Type:'Type1', IDK: '1' },
  { ID:'pg6p5dnam',name: 'John Doe 2',age:'32', email:'email@email.com', lastVisit: '12 Sep 2024',nextVisit:'12 Nov 2024',Type:'Type1', IDK: '1' },
  { ID:'dfxpnjwua',name: 'John Doe 3',age:'25', email:'email@email.com', lastVisit: '21 Sep 2024',nextVisit:'21 Oct 2024',Type:'Type1', IDK: '1' },
  { ID:'p6a7fhs67',name: 'John Doe 4',age:'19', email:'email@email.com', lastVisit: '03 Sep 2024',nextVisit:'30 Oct 2024',Type:'Type1', IDK: '1' },
  { ID:'r68amhs67',name: 'John Doe 5',age:'52', email:'email@email.com', lastVisit: '22 Oct 2024',nextVisit:'TBD',Type:'Type1', IDK: '1' }
]);
</script>
<style></style>