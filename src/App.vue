<template>
  <el-button
    v-if="isShowMovieButton"
    class="add-movie-btn"
    type="primary"
    @click="goToAddMoviePage"
    >Add movie</el-button
  >

  <router-view></router-view>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
// router
import router from "@/router";
import { ROUTE_ADD_MOVIE } from "@/router/route-names";

const route = useRoute();
const isShowMovieButton = ref(true);

watch(
  () => route.name,
  (name) => {
    if (name === ROUTE_ADD_MOVIE) {
      isShowMovieButton.value = false;
    } else {
      isShowMovieButton.value = true;
    }
  },
);

const goToAddMoviePage = () => {
  router.push({ name: ROUTE_ADD_MOVIE });
};
</script>

<style scoped>
.add-movie-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
