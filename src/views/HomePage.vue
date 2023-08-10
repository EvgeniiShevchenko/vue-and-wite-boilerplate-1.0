<template>
  <el-container>
    <el-main>
      <el-space direction="vertical">
        <el-text tag="h1">Find a movie</el-text>
      </el-space>
      <el-input
        v-model="searchQuery"
        class="w-50 m-2"
        placeholder="Please Input"
        :prefix-icon="Search"
        @input="onSearchMovie"
      >
        <template #append>
          <el-button :disabled="isResultButtonDisabled" @click="goToResultPage">
            Go to result page
          </el-button>
        </template>
      </el-input>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, computed } from "vue";

// modules
import { useStore } from "@/stores";

// components
import { Search } from "@element-plus/icons-vue";

// services
import { findMovieByTitle } from "../services/movie-service";

// router
import { ROUTE_RESULT } from "@/router/route-names";
import router from "@/router";

const searchQuery = ref("");
const store = useStore();

const onSearchMovie = async (value) => {
  if (value.length >= 3) {
    try {
      const foundMovies = await findMovieByTitle(value);

      store.setMovies(foundMovies);

      return;
    } catch (error) {
      console.error(error);

      store.setMovies([]);
    }
  }

  if (store.movies.length) {
    store.setMovies([]);
  }
};

const isResultButtonDisabled = computed(() => {
  return !store.movies.length;
});

const goToResultPage = () => {
  router.push({ name: ROUTE_RESULT });
};
</script>
