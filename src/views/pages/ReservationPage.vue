<script setup>
import { reactive } from 'vue'
import SelectControl from '@/components/form/SelectControl.vue'
import InputControl from '@/components/form/InputControl.vue'

const form = reactive({
   area: 'PKW',
   category: 'Couples',
   internalNumber: '',
   keyNumber: '',
})

const areas = [
   { label: 'PKW', value: 'PKW' },
   { label: 'MPH', value: 'MPH' },
   { label: 'LSD', value: 'LSD' },
   { label: 'PSD', value: 'PSD' },
]
const categories = [
   { label: 'Couples', value: 'Couples' },
   { label: 'Plastic', value: 'Plastic' },
   { label: 'Toyota', value: 'Toyota' },
   { label: 'Pegases', value: 'Pegases' },
]
</script>

<template>
   <div class="page-content">
      <h6 class="mb-4">Upload reservation</h6>

      <div class="row">
         <div class="col-md-5">
            <SelectControl v-model="form.area" :options="areas" label="Area:" trackBy="value" />
            <SelectControl v-model="form.category" :options="categories" label="Category:" trackBy="value" class="mt-3" />

            <InputControl v-model="form.internalNumber" label="Internal number:" class="mt-3" />
            <InputControl v-model="form.keyNumber" label="Key number:" class="mt-3" />
         </div>
         <div class="col-md-4 offset-md-2 ">.col-md-4 .offset-md-4</div>
      </div>
   </div>
</template>

<style>
</style>
