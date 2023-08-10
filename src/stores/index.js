import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    movies: [],
  }),

  actions: {
    async setMovies(movies) {
      console.log("🚀 ~ file: index.js:11 ~ setMovies ~ movies:", movies);
      this.movies = movies;
    },
  },
  persist: true,
});
