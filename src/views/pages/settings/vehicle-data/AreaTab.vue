<script setup>
import DataTable from '@/components/DataTable.vue'

const tabledata = [
   {
      id: 1,
      nameOfArea: 'Passenger car',
   },
   {
      id: 2,
      nameOfArea: 'Camper',
   },
   {
      id: 3,
      nameOfArea: 'Truck',
   },
   {
      id: 4,
      nameOfArea: 'Motorcycle',
   },
   {
      id: 5,
      nameOfArea: 'Van',
   },
]

const fields = [
   {
      field: 'nameOfArea',
      label: 'Name Of Area',
   },
   {
      field: 'actions',
      label: 'Actions',
      thClass: 'text-right',
      tdClass: 'text-right',
   }
]

</script>

<template>
   <div class="mt-4">
      <DataTable :data="tabledata" :fields="fields">
         <template #actions>
            <span>Action here</span>
         </template>
      </DataTable>
   </div>
</template>


<style lang="scss" scoped>
</style>
