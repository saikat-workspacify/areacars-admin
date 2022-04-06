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
const dummy = reactive({
   trueValue: true,
   falseValue: false
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
      <div class="borderd-content">
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
      <div class="borderd-content mt-4">
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
      <div class="borderd-content mt-4">
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
      <div class="borderd-content mt-4">
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
      <div class="borderd-content mt-4">
         <h6 class="mb-4">Equipment features</h6>

         <div class="row">
            <div class="col-md-6">
               <div class="ms-5">
                  <p class="text-muted fw-medium" style="font-size: 14px;">Own equipment features</p>

                  <CheckBox v-model="dummy.falseValue" label="Export - net sales contracts" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Warranty possible on request" class="mt-2" />
                  <CheckBox v-model="dummy.trueValue" label="Financing also possible without down payment" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Registration service" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Trade-in of your old car" class="mt-2" />

               </div>
            </div>

            <div class="col-md-5 offset-md-1 ">
               <div class="me-5 mt-4">
                  <CheckBox v-model="dummy.falseValue" label="Delivery possible" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="In-house car garage" class="mt-2" />
                  <CheckBox v-model="dummy.trueValue" label="Tire and wheel change" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="The above information is without guarantee. They do not represent an agreed condition. Errors and prior sale reserved!" class="mt-2" />
               </div>
            </div>
         </div>

         <hr class="mx-5 my-4">

         <!-- Drive, brakes, chassis, steering, tires -->
         <div class="row">
            <div class="col-md-6">
               <div class="ms-5">
                  <p class="text-muted fw-medium" style="font-size: 14px;">Drive, brakes, chassis, steering, tires</p>

                  <CheckBox v-model="dummy.falseValue" label="Adaptive Damper System (ADS)" class="mt-2" />
                  <CheckBox v-model="dummy.trueValue" label="All-wheel drive" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="All-weather tires" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Automatic limited slip differential (ASD)" class="mt-2" />
                  <CheckBox v-model="dummy.trueValue" label="Brake energy regeneration" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Dual clutch transmission" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Electronic Damper Control" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Electronic chassis control" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Hybrid drive (electric motor)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Hydroactive chassis" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Ceramic brakes" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Light alloy wheels" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Dynamic steering" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Air suspension" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Level control" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Level control (with compressor)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Emergency brake function" class="mt-2" />
               </div>
            </div>

            <div class="col-md-5 offset-md-1 ">
               <div class="me-5 mt-4">
                  <CheckBox v-model="dummy.trueValue" label="Emergency wheel" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Breakdown kit" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Electric parking brakes" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tires with run-flat properties" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Spare wheel" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Wheels/Wide tires" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Disc brakes" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Power steering" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Summer tires" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Limited slip differential" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Sport suspension" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Stabilizer from the top / rear" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Steel rims" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tirefit" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Winter tires" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Electron. Differential lock (EDS)" class="mt-2" />
               </div>
            </div>
         </div>

         <hr class="mx-5 my-4">

         <!-- Roof -->
         <div class="row">
            <div class="col-md-6">
               <div class="ms-5">
                  <p class="text-muted fw-medium" style="font-size: 14px;">Roof</p>

                  <CheckBox v-model="dummy.falseValue" label="Roof antenna" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: pop-up roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Roof hatch" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Folding roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Normal" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Sliding/tilting roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Sliding roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: Targa" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: automatic" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: electric" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: mechanical" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof type: immovable" class="mt-2" />

               </div>
            </div>

            <div class="col-md-5 offset-md-1 ">
               <div class="me-5 mt-4">
                  <CheckBox v-model="dummy.falseValue" label="Roof rails" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Roof rack" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Glass roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="High roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Metal roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Panorama roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tarpaulin (soft top cover)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Solar system" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Solar roof" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Fabric roof" class="mt-2" />

               </div>
            </div>
         </div>

         <hr class="mx-5 my-4">

         <!-- Entertainment/Kommunikation -->
         <div class="row">
            <div class="col-md-6">
               <div class="ms-5">
                  <p class="text-muted fw-medium" style="font-size: 14px;">Entertainment/Kommunikation</p>

                  <CheckBox v-model="dummy.falseValue" label="AUX-IN-Anschluss (AUX-IN)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Android Auto" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Apple CarPlay" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Bildschirm(e)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Bluetooth" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="CD" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="CD-Wechsler" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="DVD" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="DVD-Wechsler" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Freisprecheinrichtung" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Freisprecheinrichtung Bluetooth" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Freisprecheinrichtung vorbereitet" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Kassette" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="MP3" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="MP3-Schnittstelle" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Mobiltelefon/Handy vorbereitet" class="mt-2" />

               </div>
            </div>

            <div class="col-md-5 offset-md-1 ">
               <div class="me-5 mt-4">
                  <CheckBox v-model="dummy.falseValue" label="Multifunktionslenkrad" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Musikstreaming integriert" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Radio" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Radio digital (DAB)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Rear Seat Entertainment" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="SD-Slot" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Soundsystem" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Soundsystem (mit Fembedienung)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="TV" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Telefon" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Telefon (mit Freisprecheinrichtung)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Touchscreen" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="USB-Anschluss" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="WLAN" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="iPod-Schnittstelle" class="mt-2" />

               </div>
            </div>
         </div>

         <hr class="mx-5 my-4">

         <!-- Fahrerassistenz und Informationssysteme -->
         <div class="row">
            <div class="col-md-6">
               <div class="ms-5">
                  <p class="text-muted fw-medium" style="font-size: 14px;">Entertainment/Kommunikation</p>

                  <CheckBox v-model="dummy.falseValue" label="Abstandstempomat" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Antiblockiersystem (ABS)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Antischlupfregelung (ASR)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Auffahrwarnsystem" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Auffahrwarnsystem mit Bremsfunktion" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Aufmerksamkeitsassistent" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Aussentemperaturanzeige" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Bergabfahrhilfe" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Berganfahrhilfe" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Bordcomputer" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Bremsassistent" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Check-Control-System" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Digitale Instrumentierung" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Drehzahlmesser" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkautomatik (selbstlenkend)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkhilfe 360 grad Kamera" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkhilfe Rückfahrkamera" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkhilfe optisch" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkhilfe-Sensor hinten" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Einparkhilfe-Sensor vorn" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Elektronisches Stabilitätsprogramm (ESP)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Fahrerinformationssystem (FIS)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Fahrprofilauswahl" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Frontkamera" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Geschwindigkeits-Begrenzeranlage" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Geschwindigkeitslimit-Assistent" class="mt-2" />

               </div>
            </div>

            <div class="col-md-5 offset-md-1 ">
               <div class="me-5 mt-4">
                  <CheckBox v-model="dummy.falseValue" label="Headup Display" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Infotainment" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Keyless-Go" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Multifunktionsanzeige" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Müdigkeitserkennung" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Nachsichthilfe" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Navigationssystem" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Navigationssystem (mit TV-Funktion)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Navigationssystem (mobil)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Parklückendetektor" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Parktronic System (PTS)" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Reifendruckanzeige" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Reifendruckverlust-Warnung" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Speedlimiterkennung" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Sprachbediensystem" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Spurhalteassistent" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Spurwechselassistent" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Start/Stop-Automatik" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Start/Stop-Knopf" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tempolimitanzeige" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tempomat" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Tempomat mit Bremsfunktion" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Totwinkelassistent" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Traktionskontrolle" class="mt-2" />
                  <CheckBox v-model="dummy.falseValue" label="Verkehrszeichenerkennung" class="mt-2" />

               </div>
            </div>
         </div>
      </div>

      <!-- Free Text -->
      <div class="borderd-content mt-4">
         <h6>Free-text</h6>

         <div class="mt-4">
            <textarea class="form-control" rows="12" placeholder="Write about the reservation ,Max. 3000 Zeichen "></textarea>
         </div>

         <div class="mt-4 mb-2 d-flex justify-content-end align-items-center">
            <button type="button" class="btn bg-transparent">Save</button>
            <button type="button" class="btn btn-light mx-3">Cancel</button>
            <button type="button" class="btn btn-primary">Upload</button>
         </div>
      </div>
   </default-layout>
</template>

<style lang="scss" scoped>
.empty-space {
   height: 140px;
}
</style>
