<script setup>
import { defineProps } from 'vue'

const props = defineProps({
   label: {
      type: [String, Number]
   }
})

</script>

<template>
   <div @click="$router.back()" class="d-flex align-items-center pointer">
      <svg width="12" height="17" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.461 1.57561C11.6953 1.80993 11.6953 2.18983 11.461 2.42414L4.30952 9.57561C4.0752 9.80993 4.0752 10.1898 4.30952 10.4241L11.461 17.5756C11.6953 17.8099 11.6953 18.1898 11.461 18.4241L10.4239 19.4612C10.1896 19.6955 9.80969 19.6955 9.57537 19.4612L1.05683 10.9427C0.536128 10.422 0.536128 9.57776 1.05683 9.05707L9.57537 0.538522C9.80969 0.304207 10.1896 0.304208 10.4239 0.538522L11.461 1.57561Z" fill="#666666" />
      </svg>
      <p class="ms-4 mb-0">{{ props.label }}</p>
   </div>
</template>

<style lang="scss" scoped>
</style>
