<script setup>
import { reactive } from 'vue'
import moment from 'moment'
import SelectControl from '@/components/form/SelectControl.vue'
import InputControl from '@/components/form/InputControl.vue'
import ImageUploader from '@/components/form/ImageUploader.vue'
import CalenderControl from '@/components/form/CalenderControl.vue'
import CheckBox from '@/components/form/CheckBox.vue'

const form = reactive({
   area: 'PKW',
   category: 'Couples',
   internalNumber: '',
   keyNumber: '',
   images: null,
   purchaseDate: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   modelYear: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   firstRegistration: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   yearOfManufacture: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   generalInspectionUnit: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   emissionInspectionUntil: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   productionDate: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   lastService: moment(new Date(), 'DD MMM YYYY').format('DD MMM YYYY'),
   vinNo: '',
   vehicleRegNo: '',
   location: '',
   lot: '',
   customerPrice: '',
   purchasePrice: '',
   sellingPrice: '',
   vatDeductible: false,
   negotiationPrice: false,
   generalInspectionNew: false,
   emissionInspectionNew: false,
   manufacturer: 'Audi',
   model: '',
   specialModel: '',
   power: '',
   gearBox: '',
   transmission: '',
   condition: '',
   odometer: '',
   engineCapacity: '',
   type: '',
   lastServiceKm: '',
   damaged: '',
   accidentVehicle: '',
   stillDrivable: '',
   hsn: '',
   tsn: '',
   gears: '',
   seats: '',
   doorts: '',
   previousOwner: '',
   cylinder: '',
   fullServiceHistory: false,
   nonSmoker: false,
   accidentFree: false,
   usedCarWarranty: false,
   dekraSeal: false,
   exportVehicle: false,
   metallic: false,
   exteriorColor: '',
   interiorColor: '',
   rimSize: '',
   totalWeight: '',
   emptyWeight: '',
   interiorMaterial: '',
   UpholsteryColor: '',
   pollutionClass: '',
   environmentalLabel: '',
   emissionClass: '',
   energyEfficiency: '',
   fuel: '',
   cityFuelEfficiency: '',
   combined: '',
   annualTax: '0,00',
   highwayFuelEfficiency: '',
   CO2Emission: '',
   deliveryDate: '',
   countryVersion: '',
   deliveryDeadline: '',
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

const manufacturers = [
   { label: 'Audi.', value: 'Audi' },
   { label: 'Plastic', value: 'Plastic' },
   { label: 'Toyota', value: 'Toyota' },
   { label: 'Pegases', value: 'Pegases' },
]

const types = [
   { label: 'New car', value: 'neww-car' },
   { label: 'Plastic', value: 'Plastic' },
   { label: 'Toyota', value: 'Toyota' },
   { label: 'Pegases', value: 'Pegases' },
]
const gearBoxes = [
   { label: 'Automatic', value: 'neww-car' },
   { label: 'Manual', value: 'Plastic' },
]
const conditions = [
   { label: 'Please choose', value: null },
   { label: 'Manual', value: 'Plastic' },
]
const colors = [
   { label: 'Black', value: 'black' },
   { label: 'White', value: 'Plastic' },
]

</script>

<template>
   <default-layout>
      <!-- Upload reservation -->
      <div class="page-content">
         <h5 class="mb-4">Upload reservation</h5>

         <div class="row">
            <div class="col-md-6">
               <h6 class="mb-4">General information</h6>

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
                     <CheckBox v-model="form.vatDeductible" label="VAT deductible" />
                     <CheckBox v-model="form.negotiationPrice" label="Negotiation price" />
                  </div>
               </div>
            </div>

            <div class="col-md-4 offset-md-1 ">
               <p class="label">Upload files</p>
               <ImageUploader v-model="form.images" />
            </div>

         </div>
      </div>

      <!-- Vehicle information -->
      <div class="page-content mt-4">
         <h6 class="mb-4">Vehicle information</h6>

         <div class="row">
            <div class="col-md-6">
               <SelectControl v-model="form.manufacturer" :options="manufacturers" label="Manufacturer:" trackBy="value" />

               <InputControl v-model="form.model" label="Model:" class="mt-3" />
               <InputControl v-model="form.specialModel" label="Special model:" placeholder="Max. 48 characters " class="mt-3" />

               <SelectControl v-model="form.type" :options="types" label="Type" trackBy="value" class="mt-3" />

               <InputControl v-model="form.engineCapacity" label="Engine capacity (cm3):" class="mt-3" />
               <InputControl v-model="form.power" label="Power (kw):" class="mt-3" />

               <SelectControl v-model="form.gearBox" :options="gearBoxes" label="Gearbox:" trackBy="value" class="mt-3" />
               <SelectControl v-model="form.transmission" :options="gearBoxes" label="Transmission:" trackBy="value" class="mt-3" />
               <SelectControl v-model="form.condition" :options="conditions" label="Condition:" trackBy="value" class="mt-3" />

               <InputControl v-model="form.odometer" label="Odometer:" class="mt-3" />

               <CalenderControl v-model="form.modelYear" label="Model year :" class="mt-3" />
               <CalenderControl v-model="form.firstRegistration" label="First registration:" class="mt-3" />
               <CalenderControl v-model="form.yearOfManufacture" label="Year of manufacture:" class="mt-3" />
               <CalenderControl v-model="form.generalInspectionUnit" label="General inspection until:" class="mt-3" />

               <div class="row mt-4">
                  <div class="col-md-8 offset-md-4">
                     <CheckBox v-model="form.generalInspectionNew" label="General inspection new" />
                  </div>
               </div>

               <CalenderControl v-model="form.emissionInspectionUntil" label="Emission inspection until:" class="mt-3" />

               <div class="row mt-4">
                  <div class="col-md-8 offset-md-4">
                     <CheckBox v-model="form.emissionInspectionNew" label="Emission inspection new" />
                  </div>
               </div>

               <CalenderControl v-model="form.productionDate" label="Production date:" class="mt-3" />
               <CalenderControl v-model="form.lastService" label="Last service:" class="mt-3" />

               <InputControl v-model="form.lastServiceKm" label="Last service (km):" class="mt-3" />

               <SelectControl v-model="form.damaged" :options="conditions" label="Damaged:" trackBy="value" class="mt-3" />
               <SelectControl v-model="form.accidentVehicle" :options="conditions" label="Accident vehicle:" trackBy="value" class="mt-3" />
               <SelectControl v-model="form.stillDrivable" :options="conditions" label="Still drivable:" trackBy="value" class="mt-3" />
            </div>
            <div class="col-md-5  offset-md-1">
               <CalenderControl v-model="form.hsn" label="HSN:" />

               <InputControl v-model="form.tsn" label="TSN:" class="mt-3" />
               <InputControl v-model="form.gears" label="Gears:" class="mt-3" />
               <InputControl v-model="form.seats" label="Seats:" class="mt-3" />
               <InputControl v-model="form.doorts" label="Doorts:" class="mt-3" />
               <InputControl v-model="form.previousOwner" label="Previous owner:" class="mt-3" />
               <InputControl v-model="form.cylinder" label="Cylinder:" class="mt-3" />

               <div class="row mt-4">
                  <div class="col-md-8 offset-md-4">
                     <CheckBox v-model="form.fullServiceHistory" label="Full service history" class="mt-2" />
                     <CheckBox v-model="form.nonSmoker" label="Non-smoker" class="mt-2" />
                     <CheckBox v-model="form.accidentFree" label="Accident free" class="mt-2" />
                     <CheckBox v-model="form.usedCarWarranty" label="Used car warranty" class="mt-2" />
                     <CheckBox v-model="form.dekraSeal" label="Dekra seal" class="mt-2" />
                     <CheckBox v-model="form.exportVehicle" label="Export vehicle" class="mt-2" />
                  </div>
               </div>

               <SelectControl v-model="form.exteriorColor" :options="colors" label="Exterior color:" trackBy="value" class="mt-4" />

               <div class="row mt-4">
                  <div class="col-md-8 offset-md-4">
                     <CheckBox v-model="form.metallic" label="Metallic" class="mt-2" />
                  </div>
               </div>

               <SelectControl v-model="form.interiorColor" :options="colors" label="Interior color:" trackBy="value" class="mt-4" />
               <SelectControl v-model="form.rimSize" :options="conditions" label="Rim size:" trackBy="value" class="mt-4" />

               <InputControl v-model="form.totalWeight" label="Total weight (kg):" class="mt-3" />
               <InputControl v-model="form.emptyWeight" label="Empty weight (kg):" class="mt-3" />

               <SelectControl v-model="form.interiorMaterial" :options="conditions" label="Interior material:" trackBy="value" class="mt-4" />
               <SelectControl v-model="form.UpholsteryColor" :options="conditions" label="Upholstery color:" trackBy="value" class="mt-4" />
            </div>
         </div>
      </div>

      <!-- Emission levels -->
      <div class="page-content mt-4">
         <h6 class="mb-4">Emission levels</h6>

         <div class="row">
            <div class="col-md-6">
               <SelectControl v-model="form.pollutionClass" :options="conditions" label="Pollution class:" trackBy="value" class="mt-4" />
               <SelectControl v-model="form.environmentalLabel" :options="conditions" label="Environmental label:" trackBy="value" class="mt-4" />

               <p class="text-muted fw-medium my-3" style="font-size: 14px;">Fuel consumption (l/100 km or kg/100km) and CO2 emissions (g/km) according to
                  Directive 1999/94/EC: The fuel recommended by the manufacturer; in the case of
                  bivalent vehicles, the fuel with the lower CO2 emissions.</p>

               <SelectControl v-model="form.fuel" :options="conditions" label="Fuel:" trackBy="value" class="mt-4" />

               <InputControl v-model="form.cityFuelEfficiency" label="City fuel efficiency:" class="mt-3" />
               <InputControl v-model="form.combined" label="Combined:" class="mt-3" />
               <InputControl v-model="form.annualTax" label="Annual tax:" class="mt-3" />
            </div>

            <div class="col-md-5 offset-md-1 ">
               <SelectControl v-model="form.emissionClass" :options="conditions" label="Emission class:" trackBy="value" class="mt-4" />
               <SelectControl v-model="form.energyEfficiency" :options="conditions" label="Energy efficiency:" trackBy="value" class="mt-4" />

               <div class="empty-space"></div>

               <InputControl v-model="form.highwayFuelEfficiency" label="Highway fuel efficiency:" class="mt-3" />
               <InputControl v-model="form.CO2Emission" label="CO2 emission:" class="mt-3" />
            </div>
         </div>
      </div>

      <!-- Delivery date, delivery period and country version -->
      <div class="page-content mt-4">
         <h6 class="mb-4">Delivery date, delivery period and country version</h6>

         <div class="row">
            <div class="col-md-6">
               <CalenderControl v-model="form.deliveryDate" label="Delivery date:" />

               <SelectControl v-model="form.countryVersion" :options="conditions" label="Country version:" trackBy="value" class="mt-4" />
            </div>

            <div class="col-md-5 offset-md-1 ">
               <SelectControl v-model="form.deliveryDeadline" :options="conditions" label="Delivery deadline:" trackBy="value" />
            </div>
         </div>
      </div>

      <!-- Equipment features -->
      <div class="page-content mt-4">
         <h6 class="mb-4">Equipment features</h6>

         <div class="row">
            <div class="col-md-6">
               <p class="text-muted">Own equipment features</p>
            </div>

            <div class="col-md-5 offset-md-1 ">

            </div>
         </div>
      </div>
   </default-layout>
</template>

<style lang="scss" scoped>
.empty-space {
   height: 140px;
}
</style>
