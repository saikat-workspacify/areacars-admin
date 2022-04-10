<script setup>
import _ from 'lodash'
import { defineProps } from 'vue'

const props = defineProps({
   data: { type: Array, required: true },
   fields: { type: Array, required: true },
   tableClasses: { type: String, default: 'settings-table' }
})

const getTh = col => {
   if (typeof col === 'object') {
      // eslint-disable-next-line no-prototype-builtins
      if (col.hasOwnProperty('label')) {
         return col.label
      }
      return _.capitalize(col.field)
   }

   return _.capitalize(col)
}

const getTd = (row, col) => {
   if (typeof col === 'object') {
      // eslint-disable-next-line no-prototype-builtins
      if (col.hasOwnProperty('handler')) {
         return col.handler(row)
      }
      return row[col.field]
   }

   return row[col]
}

const getColName = col => {
   if (typeof col === 'object') {
      return col.field
   }
   return col
}
</script>

<template>
   <div>
      <div class="custom-table" :class="props.tableClasses">
         <!-- Table Header -->
         <div class="table-row header">
            <!-- Table Cell -->
            <div v-for="(col, i) in props.fields" :key="i" :class="col.thClass" class="table-cell">
               <slot :name="`th-${getColName(col)}`" :col="col">
                  {{ getTh(col) }}
               </slot>
            </div>

         </div>

         <!-- Table Body -->
         <div v-for="(row, i) in props.data" :key="i" class="table-row body">
            <!-- Table Cell -->
            <div v-for="(col, i) in props.fields" :key="i" :class="col.tdClass" class="table-cell">
               <slot :name="getColName(col)" :row="row" :col="col">
                  {{ getTd(row, col) }}
               </slot>
            </div>

         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>
.settings-table {
   width: 100%;
   > thead {
      background-color: #f6f7fb;
   }
}

.custom-table {
   display: table;
   width: 100%;
   .table-row {
      display: table-row;
   }
   .table-cell {
      display: table-cell;
   }
}

.settings-table {
   .table-row.header {
      .table-cell {
         padding: 10px 20px;
         background-color: #f6f7fb;
      }
   }

   .table-row.body {
      .table-cell {
         padding: 20px;
      }
   }
   .table-row.body:not(:last-child) {
      .table-cell {
         border-bottom: 1px solid #eee;
      }
   }
}
</style>
