<script setup>
import { ref, defineProps, onMounted, watch, defineEmits } from 'vue'
import { DatePicker } from 'v-calendar'
import moment from 'moment'
import CalenderIcon from '@/components/icons/CalenderIcon.vue'

import 'v-calendar/dist/style.css'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
   modelValue: {
      type: [Object, Date, String, null],
      required: true
   },
   label: { type: String }
})

const date = ref()
onMounted(() => {
   if (props.modelValue) {
      date.value = props.modelValue
   }
})
watch(date, (val) => {
   emit('update:modelValue', val)
})
</script>

<template>
   <div class="row align-items-center">
      <div v-if="props.label" class="col-4">
         <label class="label">{{ label }}</label>
      </div>

      <div :class="`${props.label ? 'col-8' : 'col-12'}`">
         <DatePicker v-model="date">

            <template v-slot="{ inputValue, inputEvents }">
               <div class="input-wrapper">
                  <input class="form-control" :value="inputValue? moment(inputValue).format('DD MMM YYYY') : 'Select Date'" v-on="inputEvents" />
                  <span class="icon-wrapper">
                     <CalenderIcon />
                  </span>
               </div>
            </template>

         </DatePicker>
      </div>
   </div>
</template>


<style lang="scss" scoped>
.input-wrapper {
   position: relative;
   .icon-wrapper {
      position: absolute;
      right: 10px;
      top: 6px;
   }
}
</style>
