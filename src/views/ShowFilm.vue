<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-else-if="film">
      <h1>{{ film.original_title }}</h1>
      <img v-if="film.poster_path" :src="img + film.poster_path" />

      <ul>
        <li>Жанр: {{ film.genres[0].name }}</li>
        <li>Описание: {{ film.overview }}</li>
       
        <li v-for="actor in film.credits.cast" :key="actor.id">
           
           <router-link :to="{ name: 'ShowActor', params: { id: actor.id } }">
                {{ actor.name }} 
            </router-link>
           
          </li>
          
      </ul>
    </div>

    <div v-else>Not found</div>
  </div>
</template>

<script>
import http from "@/plugins/http";

export default {
  data: () => ({
    img: "https://image.tmdb.org/t/p/w185/",
    film: null,
    loading: false,
  }),

  mounted() {
    this.loadFilms();
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    loadFilms() {
      this.loading = true;

      http
        .get(`movie/${this.id}`, {
          params: {
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            include_adult: false,
            language: "ru-RU",
            append_to_response: "credits",
          },
        })
        .then((response) => {
          this.film = response.data; 
             
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>