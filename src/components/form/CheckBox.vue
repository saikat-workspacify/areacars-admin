<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import _ from 'lodash'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
   modelValue: {
      type: String,
      required: true
   },
   label: { type: String },
})

const generateId = computed(() => {
   return `check__id${_.random(1, 2000)}_${_.random(1, 2000)}`
})

const onChange = e => {
   emit('update:modelValue', e.target.checked)
}

</script>

<template>
   <div class="form-check">
      <input :checked="modelValue" @input="onChange" type="checkbox" :id="generateId" class="form-check-input">
      <label class="form-check-label ms-3 label" :for="generateId">
         {{ props.label }}
      </label>
   </div>
</template>


<style lang="scss" scoped>
</style>
