<script setup>
import BackButton from '@/components/buttons/BackButton.vue'
</script>

<template>
   <default-layout>
      <div class="d-flex justify-content-between align-items-center">
         <BackButton label="Settings" />

         <router-link to="/settings/location/add" class="btn btn-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
               <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span class="ms-3">Add Location</span>
         </router-link>
      </div>
      <h5 class="mt-4">Location</h5>

      <div v-for="(num, i) in 3" :key="i" class="borderd-content position-relative mt-3">
         <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
               <img src="@/assets/images/Rectangle197.png" alt="" class="rounded">
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
               <h5>Area Cars Exclusive</h5>

               <ul class="mt-4">
                  <li class="mt-2 d-flex">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     <span class="ms-3 text-14">030– 327 678 86</span>
                  </li>
                  <li class="mt-2 d-flex">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>

                     <span class="ms-3 text-14">Bismarckstraße 26 <br> 10625 Berlin</span>
                  </li>
                  <li class="mt-2 d-flex">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 6L12 13L2 6" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>

                     <span class="ms-3 text-14">exclusive@areacars.de</span>
                  </li>
               </ul>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
               <p class="text-13 mt-4 mb-0">Öffnungszeiten</p>
               <ul class="">
                  <li class="d-flex justify-content-between mt-2 text-14">
                     <span class="text-muted">Montag - Freitag</span>
                     <span>09 – 18 Uhr</span>
                  </li>
                  <li class="d-flex justify-content-between mt-2 text-14">
                     <span class="text-muted">Samstag</span>
                     <span>09 – 18 Uhr</span>
                  </li>
                  <li class="d-flex justify-content-between mt-2 text-14">
                     <span class="text-muted">Sonntag</span>
                     <span>Geschlossen</span>
                  </li>
               </ul>
            </div>
         </div>

         <!-- Menu Icon -->
         <div class="floating-menu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
               <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
               <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
      </div>
   </default-layout>
</template>


<style lang="scss" scoped>
.floating-menu-icon {
   position: absolute;
   right: 15px;
   top: 15px;

   @media (min-width: 1200px) {
      top: 50%;
      transform: translateY(-50%);
   }
}
</style>
