<script setup>
import { defineProps } from 'vue'

const props = defineProps({
   options: {
      type: Object,
      required: true
   },
   trackBy: {
      type: String,
      default: 'id'
   },
   optionLabel: {
      type: String,
      default: 'label'
   }
})
</script>

<template>
   <div class="row align-items-center">
      <div class="col-4">
         <label class="label">Area:</label>
      </div>
      <div class="col-8">
         <select class="form-select" id="select_input">
            <option v-for="(opt, i) in props.options" :key="i" :value="opt[props.trackBy]">{{ opt[props.optionLabel] }}</option>
         </select>

      </div>
   </div>
</template>


<style lang="scss" scoped>
.label {
   color: #666;
   font-weight: 600;
}
</style>
