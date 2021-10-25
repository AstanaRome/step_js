<template>
  <div>
   

    <div>
      <div v-if="loading">Loading...</div>

      <div v-else-if="actors">
        <ul>
          <li v-for="actor in actors" :key="actor.id">
            <router-link :to="{ name: 'ShowActor', params: { id: actor.id } }">
              {{ actor.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <div v-else>Server error</div>
    </div>
  </div>
</template>

<script>
import http from "@/plugins/http";

export default {
  data: () => ({
    actors: null,
    info: null,
    loading: false,
    page: 1,
  }),

  mounted() {
    this.loadActors();
  },

  methods: {
    loadActors() {
      this.loading = true;

      http
        .get("search/person", {
          params: {
            query: "питт",
            api_key: "af492b73c1126de8c879a4e329dbb3f3",

            include_adult: false,
            language: "ru",
          },
        })
        .then((response) => {
          this.info = response.data.info;
          this.actors = response.data.results;
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