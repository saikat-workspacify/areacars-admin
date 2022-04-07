<script setup>
import { ref, markRaw } from 'vue'
import BackButton from '@/components/buttons/BackButton.vue'
import AreaTab from './AreaTab.vue'
import CategoryTab from './CategoryTab.vue'
import ManufacturerTab from './ManufacturerTab.vue'
import GearboxTab from './GearboxTab.vue'
import ExteriorColorTab from './ExteriorColorTab.vue'
import InteriorMaterialTab from './InteriorMaterialTab.vue'
import UpholsteryColorTab from './UpholsteryColorTab.vue'
import FuelTab from './FuelTab.vue'

const vehicleData = [
   {
      id: 1,
      name: 'Area',
      component: AreaTab
   },
   {
      id: 2,
      name: 'Category',
      component: CategoryTab
   },
   {
      id: 3,
      name: 'Manufacturer',
      component: ManufacturerTab
   },
   {
      id: 4,
      name: 'Gearbox',
      component: GearboxTab
   },
   {
      id: 5,
      name: 'Exterior color',
      component: ExteriorColorTab
   },
   {
      id: 6,
      name: 'Interior material',
      component: InteriorMaterialTab
   },
   {
      id: 7,
      name: 'Upholstery color',
      component: UpholsteryColorTab
   },
   {
      id: 8,
      name: 'Fuel',
      component: FuelTab
   },
]

const activeTab = ref(null)
const changeTab = id => {
   const find = vehicleData.find(v => v.id == id)
   activeTab.value = markRaw(find)
}
changeTab(1)


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
            <button v-for="(item, i) in vehicleData" :key="i" @click="changeTab(item.id)" :class="`${item.id == activeTab.id ? 'btn-primary' : 'btn-light'}`" class="btn text-nowrap px-2">
               {{ item.name }}
            </button>
            <!-- <button class="btn btn-light text-nowrap px-2">Category</button>
            <button class="btn btn-light text-nowrap px-2">Manufacturer</button>
            <button class="btn btn-light text-nowrap px-2">Gearbox</button>
            <button class="btn btn-light text-nowrap px-2">Exterior color</button>
            <button class="btn btn-light text-nowrap px-2">Exterior color</button>
            <button class="btn btn-light text-nowrap px-2">Interior material</button>
            <button class="btn btn-light text-nowrap px-2">Upholstery color</button>
            <button class="btn btn-light text-nowrap px-2">Fuel</button> -->
         </div>

         <component :is="activeTab.component" />
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
