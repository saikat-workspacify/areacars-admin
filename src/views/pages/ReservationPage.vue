<script setup>
import { reactive } from 'vue'
import SelectControl from '@/components/form/SelectControl.vue'

const form = reactive({
   area: 'PKW'
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
            <SelectControl v-model="form.area" :options="categories" label="Category:" trackBy="value" class="mt-3" />
         </div>
         <div class="col-md-4 offset-md-2 ">.col-md-4 .offset-md-4</div>
      </div>
   </div>
</template>

<style>
</style>
