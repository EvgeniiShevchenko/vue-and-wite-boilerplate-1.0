<template>
  <el-container>
    <el-main>
      <el-space direction="vertical" style="width: 100%">
        <el-text tag="h1">Results</el-text>
      </el-space>
      <el-carousel type="card" height="600px" :autoplay="false">
        <el-carousel-item
          v-for="item in movies"
          :key="item.imdbID"
          @click="goToDetailPage(item.imdbID)"
        >
          <el-space style="width: 100%" direction="vertical">
            <el-image :src="item.Poster" fit="cover" />
            <text tag="h3">{{ item.Title }}</text>
            <!-- <dl class="dl-grid">
              <dt>Year:</dt>
              <dd>{{ item.Year }}</dd>
              <dt>Type:</dt>
              <dd>{{ item.Type }}</dd>
            </dl> -->
          </el-space>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script setup>
// router
import { ROUTE_DETAIL } from "@/router/route-names";
import router from "@/router";
// modules
import { useStore } from "@/stores";

const store = useStore();
const { movies } = store;

const goToDetailPage = (id) => {
  console.log("🚀 ~ file: ResultPage.vue:31 ~ goToDetailPage ~ id:", id);
  router.push({ name: ROUTE_DETAIL, query: { id } });
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
