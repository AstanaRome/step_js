<template>
  <v-card>
    <v-img :src="img + actor.profile_path"> </v-img>

    <v-card-title>{{ actor.name }}</v-card-title>
    <v-card-subtitle>
      <div>Профессия: {{actor.known_for_department}}</div>
    <div>Рейтинг: {{actor.popularity}}</div>
     </v-card-subtitle>

    <v-card-actions class="justify-space-between">
      <v-btn flat color="green" >View</v-btn>
      <v-btn flat color="green" >View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    img: "https://image.tmdb.org/t/p/w185/",
  }),
  props: ["actor"],
};
</script>

<style>
</style>