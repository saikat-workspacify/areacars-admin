<script setup>
import { reactive } from 'vue'
import SelectControl from '@/components/form/SelectControl.vue'
import InputControl from '@/components/form/InputControl.vue'
import ImageUploader from '@/components/form/ImageUploader.vue'
import CalenderControl from '@/components/form/CalenderControl.vue'

const form = reactive({
   area: 'PKW',
   category: 'Couples',
   internalNumber: '',
   keyNumber: '',
   images: null,
   purchaseDate: new Date(),
   vinNo: '',
   vehicleRegNo: '',
   location: '',
   lot: '',
   customerPrice: '',
   purchasePrice: '',
   sellingPrice: '',
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

const locations = [
   { label: 'Bismarckstr.', value: 'bismarckstr' },
   { label: 'Plastic', value: 'Plastic' },
   { label: 'Toyota', value: 'Toyota' },
   { label: 'Pegases', value: 'Pegases' },
]

</script>

<template>
   <div class="page-content">
      <h5 class="mb-4">Upload reservation</h5>

      <div class="row">
         <div class="col-md-6">
            <p class="fw-medium mb-4">General information</p>

            <SelectControl v-model="form.area" :options="areas" label="Area:" trackBy="value" />
            <SelectControl v-model="form.category" :options="categories" label="Category:" trackBy="value" class="mt-3" />

            <InputControl v-model="form.internalNumber" label="Internal number:" class="mt-3" />
            <InputControl v-model="form.keyNumber" label="Key number:" class="mt-3" />

            <CalenderControl v-model="form.purchaseDate" label="Purchase date:" class="mt-3" />

            <InputControl v-model="form.vinNo" label="VIN no.:" class="mt-3" />
            <InputControl v-model="form.vehicleRegNo" label="Vehicle registration no.:" class="mt-3" />

            <SelectControl v-model="form.location" :options="locations" label="Location:" trackBy="value" class="mt-3" />

            <InputControl v-model="form.lot" label="Lot:" class="mt-3" />
            <InputControl v-model="form.customerPrice" label="Customer price:" class="mt-3" />
            <InputControl v-model="form.purchasePrice" label="Purchase price:" class="mt-3" />
            <InputControl v-model="form.sellingPrice" label="Selling price:" class="mt-3" />

            <div class="row mt-4">
               <div class="col-md-8 offset-md-4">
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                     <label class="form-check-label ms-3 label" for="flexCheckDefault">
                        VAT deductible
                     </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                     <label class="form-check-label ms-3 label" for="flexCheckDefault">
                        Negotiation price
                     </label>
                  </div>
               </div>
            </div>
         </div>

         <div class="col-md-4 offset-md-1 ">
            <p class="label">Upload files</p>
            <ImageUploader v-model="form.images" />
         </div>

      </div>
   </div>
</template>

<style lang="scss" scoped>
.label {
   color: #666;
   font-weight: 600;
}
</style>
