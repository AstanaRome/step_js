<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-else-if="actor">
      <h1>{{ actor.name }}</h1>
      <img v-if="actor.profile_path" :src="img + actor.profile_path" />
      <ul>
        <li>
           {{ actor.biography}}
        </li>

        <li v-for="film in actor.credits.cast" :key="film.id">
          <router-link :to="{ name: 'ShowFilm', params: { id: film.id } }">
            {{ film.title }}
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
    actor: null,
    loading: false,
  }),

  mounted() {
    this.loadPerson();
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    loadPerson() {
      this.loading = true;

      http
        .get(`person/${this.id}`, {
          params: {
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            include_adult: false,
            language: "ru-RU",
            append_to_response: "credits",
          },
        })
        .then((response) => {
          this.actor = response.data;
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