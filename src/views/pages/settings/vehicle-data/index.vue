<script setup>
import BackButton from '@/components/buttons/BackButton.vue'

</script>

<template>
   <default-layout>
      <div class="d-flex justify-content-between align-items-center">
         <BackButton label="Settings" />

         <router-link to="/settings/add-area" class="btn btn-dark">
            <span class="me-1 text-17">+</span> Add Area
         </router-link>
      </div>
      <h5 class="mt-4">Vehicle data </h5>

      <div class="borderd-content">
         <div class="auto-tab-grid">
            <button class="btn btn-primary text-nowrap px-2">Area</button>
            <button class="btn btn-light text-nowrap px-2">Category</button>
            <button class="btn btn-light text-nowrap px-2">Manufacturer</button>
            <button class="btn btn-light text-nowrap px-2">Gearbox</button>
            <button class="btn btn-light text-nowrap px-2">Exterior color</button>
            <button class="btn btn-light text-nowrap px-2">Exterior color</button>
            <button class="btn btn-light text-nowrap px-2">Interior material</button>
            <button class="btn btn-light text-nowrap px-2">Upholstery color</button>
            <button class="btn btn-light text-nowrap px-2">Fuel</button>
         </div>
      </div>
   </default-layout>
</template>

<style lang="scss" scoped>
.auto-tab-grid {
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   .btn {
      min-width: 130px;
      max-width: auto;
   }
}
</style>
