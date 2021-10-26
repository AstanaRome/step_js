<template>
 <v-container v-if="loading">
    <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="green">
        </v-progress-circular>
      </div>
  </v-container>



 <v-container v-else-if="film">
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="img + film.backdrop_path"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2>{{film.title}}</h2>
              <p>{{ film.overview}} </p>
              <h3 >Actors:</h3>{{film.credits.cast.orginal_name}}
            
               <p>Genre: {{film.genres[0].name}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>





  
</template>

<script>
import http from "@/plugins/http";

export default {
  data: () => ({
    img: "https://image.tmdb.org/t/p/w780/",
    film: null,
    loading: false,
    cast: null,
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