<template>
   <div>
      <div v-bind="getRootProps()">

         <div class="upload-wrapper">
            <input v-bind="getInputProps()">
            <UploadCloudIcon />

            <button @click="onClick" class="btn btn-primary btn-sm px-4 mt-3">Choose Files</button>
            <p v-if="isDragActive" class="text-primary mt-2 fw-medium">Drop the files here ...</p>
            <p v-else class="text-primary mt-2 fw-medium">Drag & Drop Here</p>
            <div v-if="isFocused" id="focus" class="text-primary mt-2 fw-medium">
               focused
            </div>
            <!-- <div v-if="isDragReject" id="isDragReject" class="text-danger fw-medium">
               isDragReject: {{ isDragReject }}
            </div> -->
         </div>
      </div>
   </div>
</template>

<script>
import { defineComponent, reactive } from "vue"
import { useDropzone } from "vue3-dropzone"
import UploadCloudIcon from '@/components/icons/UploadCloudIcon.vue'
export default defineComponent({
   name: "ImageUploader",
   props: {
      label: String
   },
   components: {
      UploadCloudIcon,
   },
   methods: {
      onClick() {
         if (this.open) {
            this.open()
         }
      },
      toggleMulti() {
         this.options.multiple = !this.options.multiple
      },
   },
   setup() {
      function onDrop(acceptedFiles, rejectReasons) {
         console.log("acceptedFiles", acceptedFiles)
         console.log("rejectReasons", rejectReasons)
      }

      const options = reactive({
         multiple: true,
         onDrop,
         accept: [".jpg", ".png", ".jpeg", ".svg"],
      })

      const { getRootProps, getInputProps, ...rest } = useDropzone(options)
      return {
         options,
         getRootProps,
         getInputProps,
         ...rest,
      }
   },
});
</script>


<style lang="scss" scoped>
.label {
   color: #666;
   font-weight: 600;
}

.upload-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #f1edf3;
   padding: 20px;
   height: 350px;
   border: 1px dashed;
   border-color: #808080;
   border-radius: 5px;
}
</style>
