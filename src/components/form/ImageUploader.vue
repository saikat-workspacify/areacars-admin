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
         <div v-for="(img, i) in previewImages" :key="i" class="col-md-4 mt-4 position-relative">
            <img :src="img" alt="Preview" class="rounded">
            <span @click="openRemoveModal(i)" class="remove-icon" data-bs-toggle="modal" data-bs-target="#preview_image_remore">&#10073;</span>
         </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="preview_image_remore" tabindex="-1" aria-labelledby="preview_image_remore_label" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="preview_image_remore_label">Cancel Upload?</h5>
               </div>
               <div class="modal-body">
                  Are you sure want to cancel this upload?
               </div>
               <div class="modal-footer border-0 mt-2">
                  <button type="button" class="btn btn-light px-5 py-2 btn-sm " data-bs-dismiss="modal">No</button>
                  <button @click="confirmedRemove" type="button" class="btn btn-danger px-5 py-2 btn-sm" data-bs-dismiss="modal">Yes</button>
               </div>
            </div>
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
         type: [File, Array, null],
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
      }
   },
   setup(props, ctx) {

      const files = ref([])

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

         files.value = acceptedFiles
         ctx.emit('update:modelValue', acceptedFiles)

         console.log("rejectReasons", rejectReasons)
      }

      const options = reactive({
         multiple: true,
         onDrop,
         accept: [".jpg", ".png", ".jpeg", ".svg"],
      })

      // Modal
      const activeRemoveIndex = ref()
      const openRemoveModal = (i) => {
         activeRemoveIndex.value = i
      }
      const confirmedRemove = () => {
         previewImages.value.splice(activeRemoveIndex.value, 1)
         files.value.splice(activeRemoveIndex.value, 1)

         ctx.emit('update:modelValue', files.value)
      }


      const { getRootProps, getInputProps, ...rest } = useDropzone(options)
      return {
         previewImages,
         options,
         openRemoveModal,
         confirmedRemove,
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
.remove-icon {
   position: absolute;
   color: white;
   background: var(--color-error);
   top: -3px;
   right: 5px;
   transform: rotate(90deg);
   width: 16px;
   height: 16px;
   font-size: 9px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   font-weight: 600;
   cursor: pointer;
}
</style>
