<script setup>
import { reactive } from 'vue'
import SelectControl from '@/components/form/SelectControl.vue'

const form = reactive({
   area: 'PKW'
})

const options = [
   { label: 'PKW', value: 'PKW' },
   { label: 'MPH', value: 'MPH' },
   { label: 'LSD', value: 'LSD' },
   { label: 'PSD', value: 'PSD' },
]
</script>

<template>
   <div class="page-content">
      <h6>Upload reservation</h6>

      <div class="row">
         <div class="col-md-5">
            <SelectControl v-model="form.area" :options="options" trackBy="value" />
         </div>
         <div class="col-md-4 offset-md-2 ">.col-md-4 .offset-md-4</div>
      </div>
   </div>
</template>

<style>
</style>
