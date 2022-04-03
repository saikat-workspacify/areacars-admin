<script setup>
import LeftSidebar from './LeftSidebar.vue'
</script>

<template>
   <div id="default_layout">
      <LeftSidebar />

      <main class="bg-light main-content">
         <slot />
      </main>
   </div>
</template>


<style lang="scss">
#default_layout {
   display: flex;
   height: 100vh;
   background-color: #000;
   padding-right: 15px;
   padding-top: 15px;

   .left-sidebar {
      width: 95px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .main-content {
      flex: 1;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 25px;
   }
}
</style>
