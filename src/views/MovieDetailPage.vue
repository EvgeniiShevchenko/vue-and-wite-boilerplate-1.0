<template>
  <el-container>
    <el-main>
      <template v-if="movie">
        <el-space direction="vertical" style="width: 100%">
          <el-text style="font-weight: bold" tag="h1">Results</el-text>
        </el-space>
        <el-space style="width: 100%" alignment="flex-start" justify="center">
          <el-image :src="movie.Poster" fit="cover" />
          <el-space
            style="width: 100%"
            direction="vertical"
            justify="flex-start"
          >
            <text style="font-weight: bold" tag="h3">{{ movie.Title }}</text>
            <dl class="dl-grid">
              <dt>Year:</dt>
              <dd>{{ movie.Year ? movie.Year : "N/A" }}</dd>
              <dt>Type:</dt>
              <dd>{{ movie.Type ? movie.Type : "N/A" }}</dd>
              <dt>Director:</dt>
              <dd>{{ movie.Director ? movie.Director : "N/A" }}</dd>
            </dl>
          </el-space>
        </el-space>
      </template>
      <div v-else v-loading="isLoading"></div>
    </el-main>
  </el-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
// router
import { useRoute } from "vue-router";
// services
import { getMovieById } from "../services/movie-service";

const movie = ref(null);
const route = useRoute();
const isLoading = ref(false);

onMounted(async () => {
  const movieId = route.query.id;

  try {
    isLoading.value = true;

    movie.value = await getMovieById(movieId);

    isLoading.value = false;
  } catch (error) {
    console.error(error);

    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
