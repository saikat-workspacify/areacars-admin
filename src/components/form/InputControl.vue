<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
   modelValue: {
      type: [String, Number],
      required: true
   },
   label: { type: String },
   type: {
      type: String,
      default: 'text'
   },
   placeholder: { type: String }
})

const onChange = e => {
   emit('update:modelValue', e.target.value)
}
</script>

<template>
   <div class="row align-items-center">
      <div v-if="props.label" class="col-4">
         <label class="label">{{ label }}</label>
      </div>

      <div :class="`${props.label ? 'col-8' : 'col-12'}`">
         <input @input="onChange" :value="modelValue" :type="props.type" class="form-control" :placeholder="placeholder">
      </div>
   </div>
</template>


<style lang="scss" scoped>
</style>
