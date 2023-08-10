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
            <el-upload
              ref="file"
              :limit="1"
              :on-exceed="uploadFile"
              :auto-upload="true"
            >
              <template #trigger>
                <el-button type="primary">select file</el-button>
              </template>
              <template #tip>
                <div class="el-upload__tip text-red">
                  limit 1 file, new file will cover the old file
                </div>
              </template>
            </el-upload>
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
          <el-button type="primary" @click="submitForm(formRef)"
            >Add movie</el-button
          >
        </div>
      </el-form>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive } from "vue";
import { genFileId } from "element-plus";

const movieForm = ref({
  Title: "",
  Director: "",
  Year: null,
  Poster: "",
});
const file = ref(null);
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

const uploadFile = (uploadFiles) => {
  file.value.clearFiles();

  const uploadFile = uploadFiles[0];

  uploadFile.uid = genFileId();
  file.value.handleStart(file);
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
