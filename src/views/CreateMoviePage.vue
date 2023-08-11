<template>
  <el-container>
    <el-main>
      <el-space direction="vertical">
        <el-text tag="h1">Add a movie</el-text>
      </el-space>
      <el-form
        class="form"
        ref="formRef"
        style="width: 600px"
        :rules="rules"
        :model="movieForm"
        label-position="top"
      >
        <div>
          <el-form-item label="Poster">
            <UploadComponentBase
              label="Select file"
              @file-change="onChooseFile"
            />
          </el-form-item>
        </div>
        <div>
          <el-space direction="vertical" alignment="flex-start">
            <el-form-item label="Title" prop="Title" :label-width="500">
              <el-input v-model="movieForm.Title" />
            </el-form-item>
            <el-form-item label="Director" prop="Director">
              <el-input v-model="movieForm.Director" />
            </el-form-item>
            <el-form-item label="Year" prop="Year">
              <el-date-picker
                v-model="movieForm.Year"
                type="year"
                placeholder="Pick a year"
              />
            </el-form-item>
          </el-space>
        </div>
        <div style="display: flex; width: 100%; justify-content: flex-end">
          <el-button
            type="primary"
            :disabled="isAddButtonDisable"
            @click="submitForm(formRef)"
            >Add movie</el-button
          >
        </div>
      </el-form>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// components
import UploadComponentBase from "@/components/base/UploadComponentBase.vue";

const movieForm = ref({
  Title: "",
  Director: "",
  Year: null,
  Poster: "",
});
const formRef = ref();
const rules = reactive({
  Title: [
    { required: true, message: "Please input title of movie", trigger: "blur" },
  ],
  Director: [
    {
      required: true,
      message: "Please input director of movie",
      trigger: "blur",
    },
  ],
  Year: [
    {
      type: "date",
      required: true,
      message: "Please pick a year",
      trigger: "change",
    },
  ],
});

const isAddButtonDisable = computed(() => {
  return (
    !movieForm.value.Poster ||
    !movieForm.value.Title ||
    !movieForm.value.Director ||
    !movieForm.value.Year
  );
});

const onChooseFile = (formData, base64) => {
  movieForm.value.Poster = base64;
};

const submitForm = (formEl) => {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");

      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
