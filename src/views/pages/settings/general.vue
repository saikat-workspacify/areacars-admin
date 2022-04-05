<script setup>
import { reactive } from 'vue'

import BackButton from '@/components/buttons/BackButton.vue'
import InputControl from '@/components/form/InputControl.vue'

const form = reactive({
   companyName: '',
   accountEmail: '',
})

</script>

<template>
   <default-layout>
      <BackButton label="Settings" />
      <h5 class="mt-4">General</h5>

      <div class="row">
         <div class="col-md-6">
            <div class="borderd-content">
               <h6>Store details</h6>
               <p class="text-muted text-14">Workspacify and your customers will use this information to contact you.</p>

               <InputControl v-model="form.companyName" label="Company Name" placeholder="Company Name" />
               <InputControl v-model="form.accountEmail" label="Account E-mail" placeholder="example@mail.com" type="email" class="mt-3" />

               <div class="row my-2">
                  <div class="col-md-8 offset-md-4">
                     <p class="text-muted text-14">We’ll use this E-mail, if we need to contact you about your account.</p>
                  </div>
               </div>

               <InputControl v-model="form.accountEmail" label="Customer E-mail" placeholder="example@mail.com" type="email" class="mt-3" />

               <div class="row my-2">
                  <div class="col-md-8 offset-md-4">
                     <p class="text-muted text-14">Your customers will see this E-mail if you contact them through workspacify.</p>
                  </div>
               </div>

            </div>

            <div class="borderd-content mt-3">
               <h6>Store currency and tax rates</h6>
               <p class="text-muted text-14">Manage your currency and how your <br> store charges taxes</p>

               <InputControl v-model="form.accountEmail" label="Store currency" placeholder="Company Name" class="mt-3" />
               <InputControl v-model="form.accountEmail" label="Tax rates" class="mt-3" />

               <p class="text-primary mb-0 text-13">+ Add</p>

               <div class="row my-2">
                  <div class="col-md-8 offset-md-4">
                     <InputControl v-model="form.accountEmail" placeholder="VAT not deductible" />
                  </div>
               </div>

               <div class="py-3"></div>

            </div>
         </div>
         <div class="col-md-6">
            <div class="borderd-content">
               <h6>Store address</h6>
               <p class="text-14 text-muted mb-5">This address will appear on your means of communication.</p>

               <InputControl v-model="form.accountEmail" label="Legal name of business" />
               <InputControl v-model="form.accountEmail" label="Street" class="mt-3" />
               <InputControl v-model="form.accountEmail" label="ZIP Code" class="mt-3" />
               <InputControl v-model="form.accountEmail" label="Country" class="mt-3" />
            </div>
         </div>
      </div>
   </default-layout>
</template>


<style lang="scss" scoped>
</style>
