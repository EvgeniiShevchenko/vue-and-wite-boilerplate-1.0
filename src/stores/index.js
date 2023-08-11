import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    movies: [],
  }),

  actions: {
    async setMovies(movies) {
      this.movies = movies;
    },
  },
  persist: true,
});
