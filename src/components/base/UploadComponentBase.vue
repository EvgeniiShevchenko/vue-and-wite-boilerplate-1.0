<template>
  <div>
    <div class="preview">
      <img v-if="logoPreview" :src="logoPreview" />
      <img
        v-else
        class="image-placeholder"
        src="/images/icons/image-placeholder.png"
      />
    </div>
    <slot>
      <el-button type="primary" @click="triggerFileUpload">{{
        props.label
      }}</el-button>
    </slot>

    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="fileUpload"
      @change="onFileUploadChange"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

// helpers
import { formDataToBase64 } from "@/helpers/common-helpers";

// props
const props = defineProps({ label: String });
// emits
const emit = defineEmits(["file-change"]);

const fileUpload = ref(null);
const logoPreview = ref(null);

const triggerFileUpload = () => {
  if (fileUpload.value) {
    fileUpload.value.click();
  }
};

const onFileUploadChange = async (event) => {
  const formData = new FormData();

  formData.append("file", event.target.files[0], event.target.files[0].name);
  logoPreview.value = await formDataToBase64(formData);

  emit("file-change", formData, logoPreview);
};
</script>
