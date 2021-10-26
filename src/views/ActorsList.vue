<template>
  <v-container>
    <div v-if="loading"></div>

    <div v-else-if="actors">
      <div style="display: flex; align-items: center; gap: 10px">
        <v-text-field v-model="name" label="name" />
        <v-btn color="primary" @click="loadActors">поиск</v-btn>
      </div>
      <v-row>
        <v-col v-for="actor in actors" :key="actor.id">
          <person-card :actor="actor"></person-card>
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
import PersonCard from "@/components/PersonCard";
export default {
    components: { PersonCard },
  data: () => ({
    actors: null,
    info: null,
    loading: false,
    page: 1,
    name: "a",
  }),

  mounted() {
    this.loadActors();
  },
  watch: {
    page() {
      this.loadActors();
    },
  },

  methods: {
    loadActors() {
      this.loading = true;

      http
        .get('search/person?page=' + this.page, {
          params: {
            query: this.name,
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            include_adult: false,
            language: "ru",
          },
        })
        .then((response) => {
          this.info = response.data.total_pages;
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