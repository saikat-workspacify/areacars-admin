<script setup>
import { reactive } from 'vue'
import BackButton from '@/components/buttons/BackButton.vue'
import InputControl from '@/components/form/InputControl.vue'
import SelectControl from '@/components/form/SelectControl.vue'

const editForm = reactive({
   storeName: '',
   city: '',
   zipcode: '',
   street: '',
   country: '',
   phone: '',
   email: '',
})

const contries = [
   {
      label: 'Germany',
      value: 'Germany',
   },
   {
      label: 'Bangladesh',
      value: 'Bangladesh',
   },
]

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

         <!-- Menu Icon / Dropdown -->
         <div class="floating-menu-icon">
            <div class="dropdown">
               <div :id="`action_dropdown${i}`" data-bs-toggle="dropdown" aria-expanded="false" class="pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>

               <ul class="dropdown-menu border-0 shadow" :aria-labelledby="`action_dropdown${i}`">
                  <li>
                     <span data-bs-toggle="modal" data-bs-target="#location_edit_modal" class="dropdown-item py-2 pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z" stroke="#B2B2B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span class="ms-3 text-14">Edit</span>
                     </span>
                  </li>
                  <li>
                     <span data-bs-toggle="modal" data-bs-target="#location_remore_modal" class="dropdown-item py-2 pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4H3.33333H14" stroke="#B2B2B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M5.33301 4.00016V2.66683C5.33301 2.31321 5.47348 1.97407 5.72353 1.72402C5.97358 1.47397 6.31272 1.3335 6.66634 1.3335H9.33301C9.68663 1.3335 10.0258 1.47397 10.2758 1.72402C10.5259 1.97407 10.6663 2.31321 10.6663 2.66683V4.00016M12.6663 4.00016V13.3335C12.6663 13.6871 12.5259 14.0263 12.2758 14.2763C12.0258 14.5264 11.6866 14.6668 11.333 14.6668H4.66634C4.31272 14.6668 3.97358 14.5264 3.72353 14.2763C3.47348 14.0263 3.33301 13.6871 3.33301 13.3335V4.00016H12.6663Z" stroke="#B2B2B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span class="ms-3 text-14">Remove</span>
                     </span>
                  </li>
               </ul>
            </div>

         </div>
      </div>

      <!-- Remove Modal -->
      <div class="modal fade" id="location_remore_modal" tabindex="-1" aria-labelledby="location_remore_label" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="preview_image_remore_label">Remove Location</h5>
               </div>
               <div class="modal-body">
                  Are you sure want to remove this location?
               </div>
               <div class="modal-footer border-0 mt-2">
                  <button type="button" class="btn btn-light px-5 py-2 btn-sm " data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-danger px-5 py-2 btn-sm" data-bs-dismiss="modal">Remove</button>
               </div>
            </div>
         </div>
      </div>

      <!-- Edit Modal -->
      <div class="modal fade" id="location_edit_modal" tabindex="-1" aria-labelledby="location_edit_label" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="preview_image_remore_label">Edit Location</h5>
               </div>
               <div class="modal-body">
                  <p>Shop Location Info</p>

                  <InputControl v-model="editForm.storeName" label="Store Name" class="mt-3" />
                  <InputControl v-model="editForm.street" label="Street" class="mt-3" />
                  <InputControl v-model="editForm.zipcode" label="ZIP Code" class="mt-3" />
                  <InputControl v-model="editForm.city" label="City" class="mt-3" />

                  <SelectControl v-model="editForm.country" :options="contries" label="Country" class="mt-3" />

                  <InputControl v-model="editForm.phone" label="Phone" type="tel" class="mt-3" />
                  <InputControl v-model="editForm.email" label="Email" type="email" placeholder="example@mail.com" class="mt-3" />

                  <div class="row mt-3">
                     <div class="col-md-4">
                        <p class="label">Opening Times</p>
                     </div>
                     <div class="col-md-8">
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Montag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Dienstag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Mittwoch</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Donnerstag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Freitag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Samstag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                        <div class="row mt-3 align-items-center">
                           <div class="col-4 text-muted">Sonntag</div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="10:00 AM">
                           </div>
                           <div class="col-3">
                              <input type="text" class="form-control" placeholder="08:00 PM">
                           </div>
                           <div class="col-2 d-flex justify-content-end align-items-center">
                              <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" role="switch">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="row mt-3">
                     <div class="col-md-4">
                        <p class="label">Upload Image</p>
                     </div>
                     <div class="col-md-8">
                        <button class="btn btn-outline-primary">Upload File</button>
                     </div>
                  </div>

               </div>
               <div class="modal-footer border-0 mt-2">
                  <button type="button" class="btn btn-light px-5 py-2 btn-sm " data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary px-5 py-2 btn-sm" data-bs-dismiss="modal">Save</button>
               </div>
            </div>
         </div>
      </div>
   </default-layout>
</template>

<style lang="scss">
#location_edit_modal {
   @media (min-width: 1200px) {
      .modal-dialog {
         max-width: 720px !important;
      }
   }
}
</style>

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
