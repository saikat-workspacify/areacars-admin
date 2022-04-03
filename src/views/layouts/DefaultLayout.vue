<script setup>
import LeftSidebar from './LeftSidebar.vue'
</script>

<template>
   <div id="default_layout">
      <LeftSidebar />

      <main class="main-content">
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
      padding: 20px;
      background-color: #fff;
   }
}
.page-content {
   padding: 20px;
   border-radius: 5px;
   border: 1px solid #eee;
}
</style>
