<template>
  <div>
    <div>
      <div v-if="loading">Loading...</div>

      <div v-else-if="films">
        <ul>
          <li v-for="film in films" :key="film.id">
            <router-link :to="{ name: 'ShowFilm', params: { id: film.id } }">
              {{ film.original_title }}
            </router-link>
          </li>
        </ul>

        <pagination
          @page-changed="changePage"
          :current="page"
          :max="films.total_pages"
        />
      </div>

      <div v-else>Server error</div>
    </div>
  </div>
</template>

<script>
import http from "@/plugins/http";
import Pagination from "./Pagination.vue";

export default {
  components: { Pagination },
  data: () => ({
    films: null,
    info: null,
    loading: false,
    page: 1,
  }),

  mounted() {
    this.loadFilms();
  },

  methods: {
    loadFilms() {
      this.loading = true;

      http
        .get("search/movie", {
          params: {
            query: "а",
            api_key: "af492b73c1126de8c879a4e329dbb3f3",

            include_adult: false,
            language: "ru",
          },
        })
        .then((response) => {
          this.info = response.data.info;
          this.films = response.data.results;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changePage(newPage) {
      this.page = newPage;
      this.loadFilms();
    },
  },
};
</script>



<style lang="scss" scoped>
</style>