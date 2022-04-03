<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits('update:modelValue')

const props = defineProps({
   modelValue: {
      type: String,
      required: true
   },
   label: { type: String },
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

const onSelect = e => {
   emit('update:modelValue', e.target.value)
}
</script>

<template>
   <div class="row align-items-center">
      <div v-if="props.label" class="col-4">
         <label class="label">{{ label }}</label>
      </div>
      <div :class="`${props.label ? 'col-8' : 'col-12'}`">
         <select class="form-select" id="select_input" @change="onSelect">
            <option v-for="(opt, i) in props.options" :key="i" :value="opt[props.trackBy]" :selected="opt.value === modelValue">
               {{ opt[props.optionLabel] }}
            </option>
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
