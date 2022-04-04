<template>
   <div>
      <!-- Upload box -->
      <div v-bind="getRootProps()">

         <div class="upload-wrapper">
            <input v-bind="getInputProps()">
            <UploadCloudIcon />

            <button @click="onClick" class="btn btn-primary btn-sm px-4 mt-3">Choose Files</button>
            <p v-if="isDragActive" class="text-primary mt-2 fw-medium">Drop the files here ...</p>
            <p v-else class="text-primary mt-2 fw-medium">Drag & Drop Here</p>
         </div>

      </div>

      <!-- Preview row -->
      <div class="row">
         <div v-for="(img, i) in previewImages" :key="i" class="col-md-4 mt-4">
            <img :src="img" alt="Preview" class="rounded">
         </div>
      </div>
   </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue"
import { useDropzone } from "vue3-dropzone"
import UploadCloudIcon from '@/components/icons/UploadCloudIcon.vue'
export default defineComponent({
   name: "ImageUploader",
   props: {
      modelValue: {
         type: String,
         required: true
      },
   },
   emits: ['update:modelValue'],
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
   setup(props, ctx) {

      const previewImages = ref([])
      const previewFiles = files => {
         files.forEach(file => {
            const reader = new FileReader()
            reader.onload = (e) => {
               previewImages.value.push(e.target.result)
            }
            reader.readAsDataURL(file)

         })
      }

      const onDrop = (acceptedFiles, rejectReasons) => {
         previewFiles(acceptedFiles)

         ctx.emit('update:modelValue', acceptedFiles)

         console.log("rejectReasons", rejectReasons)
      }

      const options = reactive({
         multiple: true,
         onDrop,
         accept: [".jpg", ".png", ".jpeg", ".svg"],
      })

      const { getRootProps, getInputProps, ...rest } = useDropzone(options)
      return {
         previewImages,
         options,
         getRootProps,
         getInputProps,
         ...rest,
      }
   },
});
</script>


<style lang="scss" scoped>
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
   cursor: pointer;
}
</style>
