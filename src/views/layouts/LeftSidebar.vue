<script setup>
import AppLogo from '@/components/icons/AppLogo.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import CarIcon from '@/components/icons/CarIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import BellIcon from '@/components/icons/BellIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
</script>

<template>
   <aside class="left-sidebar">
      <!-- Logo -->
      <div class="app-logo">
         <AppLogo />
      </div>

      <ul class="menu-items">
         <li>
            <router-link to="/">
               <HomeIcon />
            </router-link>
         </li>
         <li>
            <router-link to="/reservation">
               <CarIcon />
            </router-link>
         </li>
         <li>
            <router-link to="/settings">
               <SettingsIcon />
            </router-link>
         </li>
      </ul>

      <ul class="menu-bottom">
         <li>
            <BellIcon />
            <span class="notification-badge">2</span>
         </li>

         <li>
            <div class="avatar-img" style="background-image: url('/src/assets/images/man.png');"></div>
         </li>
         <li>
            <LogoutIcon />
         </li>
      </ul>
   </aside>
</template>


<style lang="scss" scoped>
.app-logo {
   margin-top: 22px;
}
.menu-items {
   flex: 1;
   display: flex;
   flex-direction: column;
   margin-top: 50px;
   width: 100%;
   > li {
      margin: 10px 0;
      a {
         padding: 15px 18px 15px 33px;
         display: inline-block;
         border-top-right-radius: 5px;
         border-bottom-right-radius: 5px;
         svg {
            stroke: #999;
         }

         &.router-link-exact-active {
            background-color: #666;
         }
      }
   }
}

.menu-bottom {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 30px;
   > li {
      margin: 10px 0;
      position: relative;
      a {
         padding: 10px;
         display: inline-block;
      }

      .avatar-img {
         background-repeat: no-repeat;
         background-size: cover;
         width: 35px;
         height: 35px;
         border-radius: 50%;
         border: 3px solid #fff;
      }

      .notification-badge {
         position: absolute;
         top: -3px;
         right: -3px;
         background: #276ef1;
         min-width: 15px;
         height: 15px;
         font-size: 10px;
         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         font-weight: bold;
         border-radius: 10px;
         padding: 3px;
      }
   }
}
</style>
