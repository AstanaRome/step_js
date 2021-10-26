<template>
  <v-container>
    <div v-if="loading"></div>

    <div v-else-if="films">
      <div style="display: flex; align-items: center; gap: 10px">
        <v-text-field v-model="name" label="name" />
        <v-btn color="primary" @click="loadFilms">поиск</v-btn>
      </div>
      <v-row>
        <v-col v-for="film in films" :key="film.id">
          <film-card :film="film"></film-card>
        </v-col>
      </v-row>

      <v-pagination
        v-model="page"
        :total-visible="10"
        :length="info"
      ></v-pagination>
    </div>

    <div v-else>Server error</div>
  </v-container>
</template>

<script>
import http from "@/plugins/http";
import FilmCard from "@/components/FilmCard";

export default {
  components: { FilmCard },
  data: () => ({
    name: "a",
    films: null,
    info: null,
    loading: false,
    page: 1,
  }),

  mounted() {
    this.loadFilms();
  },

  watch: {
    page() {
      this.loadFilms();
    },
  },

  methods: {
    loadFilms() {
      this.loading = true;

      http
        .get(`search/movie?page=` + this.page, {
          params: {
            query: this.name,
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            include_adult: false,
            language: "ru",
          },
        })
        .then((response) => {
          const data = response.data;
          this.info = data.total_pages;
          this.films = response.data.results;
  
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>



<style lang="scss" scoped>
</style>