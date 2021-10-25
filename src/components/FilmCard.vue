<template>
  <v-card>
    <v-img :src="img + film.poster_path"> </v-img>

    <v-card-title>{{ film.title }}</v-card-title>
    <v-card-subtitle>
      <div>Дата выпуска: {{film.release_date}}</div>
    <div>Средняя оценка: {{film.vote_average}}</div>
     </v-card-subtitle>

    <v-card-actions class="justify-space-between">
      <v-btn flat color="green" @click="singleMovie(item.imdbID)">View</v-btn>
      <v-btn flat color="green" @click="singleMovie(item.imdbID)">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    img: "https://image.tmdb.org/t/p/w342/",
  }),
  props: ["film"],
};
</script>

<style>
</style>